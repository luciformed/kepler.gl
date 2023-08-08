"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileData = getTileData;
exports.decodeTile = decodeTile;
exports.vectorTileFeatureToProp = vectorTileFeatureToProp;

var _pbf = _interopRequireDefault(require("pbf"));

var _vectorTile = require("@mapbox/vector-tile");

var _viewportMercatorProject = require("viewport-mercator-project");

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/* global fetch */
var TILE_SIZE = 512;
var MAPBOX_HOST = 'https://a.tiles.mapbox.com';
var MAP_SOURCE = '/v4/mapbox.mapbox-streets-v7';

function getTileData(host, token, _ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
  var mapSource = "".concat(host || MAPBOX_HOST).concat(MAP_SOURCE, "/").concat(z, "/").concat(x, "/").concat(y, ".vector.pbf?access_token=").concat(token);
  return fetch(mapSource).then(function (response) {
    return response.arrayBuffer();
  }).then(function (buffer) {
    return decodeTile(x, y, z, buffer);
  });
}

function decodeTile(x, y, z, arrayBuffer) {
  var tile = new _vectorTile.VectorTile(new _pbf["default"](arrayBuffer));
  var result = [];
  var xProj = x * TILE_SIZE;
  var yProj = y * TILE_SIZE;
  var scale = Math.pow(2, z);
  var projectFunc = project.bind(null, xProj, yProj, scale);
  /* eslint-disable guard-for-in */

  var layerName = 'building';
  var vectorTileLayer = tile.layers[layerName];

  if (!vectorTileLayer) {
    return [];
  }

  for (var i = 0; i < vectorTileLayer.length; i++) {
    var vectorTileFeature = vectorTileLayer.feature(i);
    var features = vectorTileFeatureToProp(vectorTileFeature, projectFunc);
    features.forEach(function (f) {
      f.properties.layer = layerName;

      if (f.properties.height) {
        result.push(f);
      }
    });
  }

  return result;
}

function project(x, y, scale, line, extent) {
  var sizeToPixel = extent / TILE_SIZE;

  for (var ii = 0; ii < line.length; ii++) {
    var p = line[ii]; // LNGLAT

    line[ii] = (0, _viewportMercatorProject.worldToLngLat)([x + p[0] / sizeToPixel, y + p[1] / sizeToPixel], scale);
  }
}
/* adapted from @mapbox/vector-tile/lib/vectortilefeature.js for better perf */

/* eslint-disable */


function vectorTileFeatureToProp(vectorTileFeature, project) {
  var coords = getCoordinates(vectorTileFeature);
  var extent = vectorTileFeature.extent;
  var i;
  var j;
  coords = classifyRings(coords);

  for (i = 0; i < coords.length; i++) {
    for (j = 0; j < coords[i].length; j++) {
      project(coords[i][j], extent);
    }
  }

  return coords.map(function (coordinates) {
    return {
      coordinates: coordinates,
      properties: vectorTileFeature.properties
    };
  });
}

function getCoordinates(vectorTileFeature) {
  var pbf = vectorTileFeature._pbf;
  pbf.pos = vectorTileFeature._geometry;
  var end = pbf.readVarint() + pbf.pos;
  var cmd = 1;
  var length = 0;
  var x = 0;
  var y = 0;
  var lines = [];
  var line;

  while (pbf.pos < end) {
    if (length <= 0) {
      var cmdLen = pbf.readVarint();
      cmd = cmdLen & 0x7;
      length = cmdLen >> 3;
    }

    length--;

    if (cmd === 1 || cmd === 2) {
      x += pbf.readSVarint();
      y += pbf.readSVarint();

      if (cmd === 1) {
        // moveTo
        if (line) lines.push(line);
        line = [];
      }

      if (line) line.push([x, y]);
    } else if (cmd === 7) {
      // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
      if (line) {
        line.push(line[0].slice()); // closePolygon
      }
    } else {
      throw new Error("unknown command ".concat(cmd));
    }
  }

  if (line) lines.push(line);
  return lines;
} // classifies an array of rings into polygons with outer rings and holes


function classifyRings(rings) {
  var len = rings.length;
  if (len <= 1) return [rings];
  var polygons = [];
  var polygon;
  var ccw;

  for (var i = 0; i < len; i++) {
    var area = signedArea(rings[i]);

    if (area === 0) {
      continue;
    }

    if (ccw === undefined) {
      ccw = area < 0;
    }

    if (ccw === area < 0) {
      if (polygon) {
        polygons.push(polygon);
      }

      polygon = [rings[i]];
    } else if (polygon) {
      polygon.push(rings[i]);
    }
  }

  if (polygon) {
    polygons.push(polygon);
  }

  return polygons;
}

function signedArea(ring) {
  var sum = 0;

  for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
    p1 = ring[i];
    p2 = ring[j];
    sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
  }

  return sum;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLXV0aWxzLmpzIl0sIm5hbWVzIjpbIlRJTEVfU0laRSIsIk1BUEJPWF9IT1NUIiwiTUFQX1NPVVJDRSIsImdldFRpbGVEYXRhIiwiaG9zdCIsInRva2VuIiwieCIsInkiLCJ6IiwibWFwU291cmNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsImRlY29kZVRpbGUiLCJ0aWxlIiwiVmVjdG9yVGlsZSIsIlByb3RvYnVmIiwicmVzdWx0IiwieFByb2oiLCJ5UHJvaiIsInNjYWxlIiwiTWF0aCIsInBvdyIsInByb2plY3RGdW5jIiwicHJvamVjdCIsImJpbmQiLCJsYXllck5hbWUiLCJ2ZWN0b3JUaWxlTGF5ZXIiLCJsYXllcnMiLCJpIiwibGVuZ3RoIiwidmVjdG9yVGlsZUZlYXR1cmUiLCJmZWF0dXJlIiwiZmVhdHVyZXMiLCJ2ZWN0b3JUaWxlRmVhdHVyZVRvUHJvcCIsImZvckVhY2giLCJmIiwicHJvcGVydGllcyIsImxheWVyIiwiaGVpZ2h0IiwicHVzaCIsImxpbmUiLCJleHRlbnQiLCJzaXplVG9QaXhlbCIsImlpIiwicCIsImNvb3JkcyIsImdldENvb3JkaW5hdGVzIiwiaiIsImNsYXNzaWZ5UmluZ3MiLCJtYXAiLCJjb29yZGluYXRlcyIsInBiZiIsIl9wYmYiLCJwb3MiLCJfZ2VvbWV0cnkiLCJlbmQiLCJyZWFkVmFyaW50IiwiY21kIiwibGluZXMiLCJjbWRMZW4iLCJyZWFkU1ZhcmludCIsInNsaWNlIiwiRXJyb3IiLCJyaW5ncyIsImxlbiIsInBvbHlnb25zIiwicG9seWdvbiIsImNjdyIsImFyZWEiLCJzaWduZWRBcmVhIiwidW5kZWZpbmVkIiwicmluZyIsInN1bSIsInAxIiwicDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFD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LENBQUMxQixJQUFULENBQWMyQixPQUFkO0FBQ0Q7O0FBQ0RBLE1BQUFBLE9BQU8sR0FBRyxDQUFDSCxLQUFLLENBQUNuQyxDQUFELENBQU4sQ0FBVjtBQUNELEtBTEQsTUFLTyxJQUFJc0MsT0FBSixFQUFhO0FBQ2xCQSxNQUFBQSxPQUFPLENBQUMzQixJQUFSLENBQWF3QixLQUFLLENBQUNuQyxDQUFELENBQWxCO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJc0MsT0FBSixFQUFhO0FBQ1hELElBQUFBLFFBQVEsQ0FBQzFCLElBQVQsQ0FBYzJCLE9BQWQ7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkUsSUFBcEIsRUFBMEI7QUFDeEIsTUFBSUMsR0FBRyxHQUFHLENBQVY7O0FBQ0EsT0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQVIsRUFBV29DLEdBQUcsR0FBR08sSUFBSSxDQUFDMUMsTUFBdEIsRUFBOEJrQixDQUFDLEdBQUdpQixHQUFHLEdBQUcsQ0FBeEMsRUFBMkNTLEVBQTNDLEVBQStDQyxFQUFwRCxFQUF3RDlDLENBQUMsR0FBR29DLEdBQTVELEVBQWlFakIsQ0FBQyxHQUFHbkIsQ0FBQyxFQUF0RSxFQUEwRTtBQUN4RTZDLElBQUFBLEVBQUUsR0FBR0YsSUFBSSxDQUFDM0MsQ0FBRCxDQUFUO0FBQ0E4QyxJQUFBQSxFQUFFLEdBQUdILElBQUksQ0FBQ3hCLENBQUQsQ0FBVDtBQUNBeUIsSUFBQUEsR0FBRyxJQUFJLENBQUNFLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUQsRUFBRSxDQUFDLENBQUQsQ0FBWCxLQUFtQkEsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQyxFQUFFLENBQUMsQ0FBRCxDQUE3QixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0YsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFByb3RvYnVmIGZyb20gJ3BiZic7XG5pbXBvcnQge1ZlY3RvclRpbGV9IGZyb20gJ0BtYXBib3gvdmVjdG9yLXRpbGUnO1xuaW1wb3J0IHt3b3JsZFRvTG5nTGF0fSBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcblxuLyogZ2xvYmFsIGZldGNoICovXG5jb25zdCBUSUxFX1NJWkUgPSA1MTI7XG5jb25zdCBNQVBCT1hfSE9TVCA9ICdodHRwczovL2EudGlsZXMubWFwYm94LmNvbSc7XG5jb25zdCBNQVBfU09VUkNFID0gJy92NC9tYXBib3gubWFwYm94LXN0cmVldHMtdjcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlsZURhdGEoaG9zdCwgdG9rZW4sIHt4LCB5LCB6fSkge1xuICBjb25zdCBtYXBTb3VyY2UgPSBgJHtob3N0IHx8XG4gICAgTUFQQk9YX0hPU1R9JHtNQVBfU09VUkNFfS8ke3p9LyR7eH0vJHt5fS52ZWN0b3IucGJmP2FjY2Vzc190b2tlbj0ke3Rva2VufWA7XG5cbiAgcmV0dXJuIGZldGNoKG1hcFNvdXJjZSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKVxuICAgIC50aGVuKGJ1ZmZlciA9PiBkZWNvZGVUaWxlKHgsIHksIHosIGJ1ZmZlcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVGlsZSh4LCB5LCB6LCBhcnJheUJ1ZmZlcikge1xuICBjb25zdCB0aWxlID0gbmV3IFZlY3RvclRpbGUobmV3IFByb3RvYnVmKGFycmF5QnVmZmVyKSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGNvbnN0IHhQcm9qID0geCAqIFRJTEVfU0laRTtcbiAgY29uc3QgeVByb2ogPSB5ICogVElMRV9TSVpFO1xuICBjb25zdCBzY2FsZSA9IE1hdGgucG93KDIsIHopO1xuXG4gIGNvbnN0IHByb2plY3RGdW5jID0gcHJvamVjdC5iaW5kKG51bGwsIHhQcm9qLCB5UHJvaiwgc2NhbGUpO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuICBjb25zdCBsYXllck5hbWUgPSAnYnVpbGRpbmcnO1xuICBjb25zdCB2ZWN0b3JUaWxlTGF5ZXIgPSB0aWxlLmxheWVyc1tsYXllck5hbWVdO1xuICBpZiAoIXZlY3RvclRpbGVMYXllcikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlY3RvclRpbGVMYXllci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHZlY3RvclRpbGVGZWF0dXJlID0gdmVjdG9yVGlsZUxheWVyLmZlYXR1cmUoaSk7XG4gICAgY29uc3QgZmVhdHVyZXMgPSB2ZWN0b3JUaWxlRmVhdHVyZVRvUHJvcCh2ZWN0b3JUaWxlRmVhdHVyZSwgcHJvamVjdEZ1bmMpO1xuICAgIGZlYXR1cmVzLmZvckVhY2goZiA9PiB7XG4gICAgICBmLnByb3BlcnRpZXMubGF5ZXIgPSBsYXllck5hbWU7XG4gICAgICBpZiAoZi5wcm9wZXJ0aWVzLmhlaWdodCkge1xuICAgICAgICByZXN1bHQucHVzaChmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0KHgsIHksIHNjYWxlLCBsaW5lLCBleHRlbnQpIHtcbiAgY29uc3Qgc2l6ZVRvUGl4ZWwgPSBleHRlbnQgLyBUSUxFX1NJWkU7XG5cbiAgZm9yIChsZXQgaWkgPSAwOyBpaSA8IGxpbmUubGVuZ3RoOyBpaSsrKSB7XG4gICAgY29uc3QgcCA9IGxpbmVbaWldO1xuICAgIC8vIExOR0xBVFxuICAgIGxpbmVbaWldID0gd29ybGRUb0xuZ0xhdChbeCArIHBbMF0gLyBzaXplVG9QaXhlbCwgeSArIHBbMV0gLyBzaXplVG9QaXhlbF0sIHNjYWxlKTtcbiAgfVxufVxuXG4vKiBhZGFwdGVkIGZyb20gQG1hcGJveC92ZWN0b3ItdGlsZS9saWIvdmVjdG9ydGlsZWZlYXR1cmUuanMgZm9yIGJldHRlciBwZXJmICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZlY3RvclRpbGVGZWF0dXJlVG9Qcm9wKHZlY3RvclRpbGVGZWF0dXJlLCBwcm9qZWN0KSB7XG4gIGxldCBjb29yZHMgPSBnZXRDb29yZGluYXRlcyh2ZWN0b3JUaWxlRmVhdHVyZSk7XG4gIGNvbnN0IGV4dGVudCA9IHZlY3RvclRpbGVGZWF0dXJlLmV4dGVudDtcbiAgbGV0IGk7XG4gIGxldCBqO1xuXG4gIGNvb3JkcyA9IGNsYXNzaWZ5UmluZ3MoY29vcmRzKTtcbiAgZm9yIChpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAoaiA9IDA7IGogPCBjb29yZHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHByb2plY3QoY29vcmRzW2ldW2pdLCBleHRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHMubWFwKGNvb3JkaW5hdGVzID0+ICh7XG4gICAgY29vcmRpbmF0ZXMsXG4gICAgcHJvcGVydGllczogdmVjdG9yVGlsZUZlYXR1cmUucHJvcGVydGllc1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKHZlY3RvclRpbGVGZWF0dXJlKSB7XG4gIGNvbnN0IHBiZiA9IHZlY3RvclRpbGVGZWF0dXJlLl9wYmY7XG4gIHBiZi5wb3MgPSB2ZWN0b3JUaWxlRmVhdHVyZS5fZ2VvbWV0cnk7XG5cbiAgY29uc3QgZW5kID0gcGJmLnJlYWRWYXJpbnQoKSArIHBiZi5wb3M7XG4gIGxldCBjbWQgPSAxO1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG5cbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgbGV0IGxpbmU7XG5cbiAgd2hpbGUgKHBiZi5wb3MgPCBlbmQpIHtcbiAgICBpZiAobGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnN0IGNtZExlbiA9IHBiZi5yZWFkVmFyaW50KCk7XG4gICAgICBjbWQgPSBjbWRMZW4gJiAweDc7XG4gICAgICBsZW5ndGggPSBjbWRMZW4gPj4gMztcbiAgICB9XG5cbiAgICBsZW5ndGgtLTtcblxuICAgIGlmIChjbWQgPT09IDEgfHwgY21kID09PSAyKSB7XG4gICAgICB4ICs9IHBiZi5yZWFkU1ZhcmludCgpO1xuICAgICAgeSArPSBwYmYucmVhZFNWYXJpbnQoKTtcblxuICAgICAgaWYgKGNtZCA9PT0gMSkge1xuICAgICAgICAvLyBtb3ZlVG9cbiAgICAgICAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmUpIGxpbmUucHVzaChbeCwgeV0pO1xuICAgIH0gZWxzZSBpZiAoY21kID09PSA3KSB7XG4gICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vbWFwYm94L21hcG5pay12ZWN0b3ItdGlsZS9pc3N1ZXMvOTBcbiAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgIGxpbmUucHVzaChsaW5lWzBdLnNsaWNlKCkpOyAvLyBjbG9zZVBvbHlnb25cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIGNvbW1hbmQgJHtjbWR9YCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG5cbiAgcmV0dXJuIGxpbmVzO1xufVxuXG4vLyBjbGFzc2lmaWVzIGFuIGFycmF5IG9mIHJpbmdzIGludG8gcG9seWdvbnMgd2l0aCBvdXRlciByaW5ncyBhbmQgaG9sZXNcblxuZnVuY3Rpb24gY2xhc3NpZnlSaW5ncyhyaW5ncykge1xuICBjb25zdCBsZW4gPSByaW5ncy5sZW5ndGg7XG5cbiAgaWYgKGxlbiA8PSAxKSByZXR1cm4gW3JpbmdzXTtcblxuICBjb25zdCBwb2x5Z29ucyA9IFtdO1xuICBsZXQgcG9seWdvbjtcbiAgbGV0IGNjdztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYXJlYSA9IHNpZ25lZEFyZWEocmluZ3NbaV0pO1xuICAgIGlmIChhcmVhID09PSAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2N3ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNjdyA9IGFyZWEgPCAwO1xuICAgIH1cblxuICAgIGlmIChjY3cgPT09IGFyZWEgPCAwKSB7XG4gICAgICBpZiAocG9seWdvbikge1xuICAgICAgICBwb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuICAgICAgfVxuICAgICAgcG9seWdvbiA9IFtyaW5nc1tpXV07XG4gICAgfSBlbHNlIGlmIChwb2x5Z29uKSB7XG4gICAgICBwb2x5Z29uLnB1c2gocmluZ3NbaV0pO1xuICAgIH1cbiAgfVxuICBpZiAocG9seWdvbikge1xuICAgIHBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gIH1cblxuICByZXR1cm4gcG9seWdvbnM7XG59XG5cbmZ1bmN0aW9uIHNpZ25lZEFyZWEocmluZykge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJpbmcubGVuZ3RoLCBqID0gbGVuIC0gMSwgcDEsIHAyOyBpIDwgbGVuOyBqID0gaSsrKSB7XG4gICAgcDEgPSByaW5nW2ldO1xuICAgIHAyID0gcmluZ1tqXTtcbiAgICBzdW0gKz0gKHAyWzBdIC0gcDFbMF0pICogKHAxWzFdICsgcDJbMV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59XG4iXX0=