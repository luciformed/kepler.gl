"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexagonToPolygonGeo = hexagonToPolygonGeo;

var _core = require("@deck.gl/core");

var _console = _interopRequireDefault(require("global/console"));

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
function hexagonToPolygonGeo(object, properties, radius, mapState) {
  var viewport = new _core.WebMercatorViewport(mapState);

  if (!Array.isArray(object.position)) {
    return null;
  }

  var screenCenter = viewport.projectFlat(object.position);

  var _viewport$getDistance = viewport.getDistanceScales(object.position),
      unitsPerMeter = _viewport$getDistance.unitsPerMeter;

  if (!Array.isArray(unitsPerMeter)) {
    _console["default"].warn("unitsPerMeter is undefined");

    return null;
  }

  var pixRadius = radius * unitsPerMeter[0];
  var coordinates = [];

  for (var i = 0; i < 6; i++) {
    var vertex = hex_corner(screenCenter, pixRadius, i);
    coordinates.push(viewport.unprojectFlat(vertex));
  }

  coordinates.push(coordinates[0]);
  return {
    geometry: {
      coordinates: coordinates,
      type: 'LineString'
    },
    properties: properties
  };
}

function hex_corner(center, radius, i) {
  var angle_deg = 60 * i + 30;
  var angle_rad = Math.PI / 180 * angle_deg;
  return [center[0] + radius * Math.cos(angle_rad), center[1] + radius * Math.sin(angle_rad)];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLXV0aWxzLmpzIl0sIm5hbWVzIjpbImhleGFnb25Ub1BvbHlnb25HZW8iLCJvYmplY3QiLCJwcm9wZXJ0aWVzIiwicmFkaXVzIiwibWFwU3RhdGUiLCJ2aWV3cG9ydCIsIldlYk1lcmNhdG9yVmlld3BvcnQiLCJBcnJheSIsImlzQXJyYXkiLCJwb3NpdGlvbiIsInNjcmVlbkNlbnRlciIsInByb2plY3RGbGF0IiwiZ2V0RGlzdGFuY2VTY2FsZXMiLCJ1bml0c1Blck1ldGVyIiwiQ29uc29sZSIsIndhcm4iLCJwaXhSYWRpdXMiLCJjb29yZGluYXRlcyIsImkiLCJ2ZXJ0ZXgiLCJoZXhfY29ybmVyIiwicHVzaCIsInVucHJvamVjdEZsYXQiLCJnZW9tZXRyeSIsInR5cGUiLCJjZW50ZXIiLCJhbmdsZV9kZWciLCJhbmdsZV9yYWQiLCJNYXRoIiwiUEkiLCJjb3MiLCJzaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxTQUFTQSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUNDLFVBQXJDLEVBQWlEQyxNQUFqRCxFQUF5REMsUUFBekQsRUFBbUU7QUFDeEUsTUFBTUMsUUFBUSxHQUFHLElBQUlDLHlCQUFKLENBQXdCRixRQUF4QixDQUFqQjs7QUFDQSxNQUFJLENBQUNHLEtBQUssQ0FBQ0MsT0FBTixDQUFjUCxNQUFNLENBQUNRLFFBQXJCLENBQUwsRUFBcUM7QUFDbkMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsWUFBWSxHQUFHTCxRQUFRLENBQUNNLFdBQVQsQ0FBcUJWLE1BQU0sQ0FBQ1EsUUFBNUIsQ0FBckI7O0FBQ0EsOEJBQXdCSixRQUFRLENBQUNPLGlCQUFULENBQTJCWCxNQUFNLENBQUNRLFFBQWxDLENBQXhCO0FBQUEsTUFBT0ksYUFBUCx5QkFBT0EsYUFBUDs7QUFFQSxNQUFJLENBQUNOLEtBQUssQ0FBQ0MsT0FBTixDQUFjSyxhQUFkLENBQUwsRUFBbUM7QUFDakNDLHdCQUFRQyxJQUFSOztBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1DLFNBQVMsR0FBR2IsTUFBTSxHQUFHVSxhQUFhLENBQUMsQ0FBRCxDQUF4QztBQUVBLE1BQU1JLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBTUMsTUFBTSxHQUFHQyxVQUFVLENBQUNWLFlBQUQsRUFBZU0sU0FBZixFQUEwQkUsQ0FBMUIsQ0FBekI7QUFDQUQsSUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QkgsTUFBdkIsQ0FBakI7QUFDRDs7QUFFREYsRUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCSixXQUFXLENBQUMsQ0FBRCxDQUE1QjtBQUVBLFNBQU87QUFDTE0sSUFBQUEsUUFBUSxFQUFFO0FBQ1JOLE1BQUFBLFdBQVcsRUFBWEEsV0FEUTtBQUVSTyxNQUFBQSxJQUFJLEVBQUU7QUFGRSxLQURMO0FBS0x0QixJQUFBQSxVQUFVLEVBQVZBO0FBTEssR0FBUDtBQU9EOztBQUVELFNBQVNrQixVQUFULENBQW9CSyxNQUFwQixFQUE0QnRCLE1BQTVCLEVBQW9DZSxDQUFwQyxFQUF1QztBQUNyQyxNQUFNUSxTQUFTLEdBQUcsS0FBS1IsQ0FBTCxHQUFTLEVBQTNCO0FBQ0EsTUFBTVMsU0FBUyxHQUFJQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCSCxTQUFwQztBQUVBLFNBQU8sQ0FBQ0QsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZdEIsTUFBTSxHQUFHeUIsSUFBSSxDQUFDRSxHQUFMLENBQVNILFNBQVQsQ0FBdEIsRUFBMkNGLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWXRCLE1BQU0sR0FBR3lCLElBQUksQ0FBQ0csR0FBTCxDQUFTSixTQUFULENBQWhFLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7V2ViTWVyY2F0b3JWaWV3cG9ydH0gZnJvbSAnQGRlY2suZ2wvY29yZSc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhhZ29uVG9Qb2x5Z29uR2VvKG9iamVjdCwgcHJvcGVydGllcywgcmFkaXVzLCBtYXBTdGF0ZSkge1xuICBjb25zdCB2aWV3cG9ydCA9IG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KG1hcFN0YXRlKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG9iamVjdC5wb3NpdGlvbikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNjcmVlbkNlbnRlciA9IHZpZXdwb3J0LnByb2plY3RGbGF0KG9iamVjdC5wb3NpdGlvbik7XG4gIGNvbnN0IHt1bml0c1Blck1ldGVyfSA9IHZpZXdwb3J0LmdldERpc3RhbmNlU2NhbGVzKG9iamVjdC5wb3NpdGlvbik7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHVuaXRzUGVyTWV0ZXIpKSB7XG4gICAgQ29uc29sZS53YXJuKGB1bml0c1Blck1ldGVyIGlzIHVuZGVmaW5lZGApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgcGl4UmFkaXVzID0gcmFkaXVzICogdW5pdHNQZXJNZXRlclswXTtcblxuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgdmVydGV4ID0gaGV4X2Nvcm5lcihzY3JlZW5DZW50ZXIsIHBpeFJhZGl1cywgaSk7XG4gICAgY29vcmRpbmF0ZXMucHVzaCh2aWV3cG9ydC51bnByb2plY3RGbGF0KHZlcnRleCkpO1xuICB9XG5cbiAgY29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlc1swXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZW9tZXRyeToge1xuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICB0eXBlOiAnTGluZVN0cmluZydcbiAgICB9LFxuICAgIHByb3BlcnRpZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGV4X2Nvcm5lcihjZW50ZXIsIHJhZGl1cywgaSkge1xuICBjb25zdCBhbmdsZV9kZWcgPSA2MCAqIGkgKyAzMDtcbiAgY29uc3QgYW5nbGVfcmFkID0gKE1hdGguUEkgLyAxODApICogYW5nbGVfZGVnO1xuXG4gIHJldHVybiBbY2VudGVyWzBdICsgcmFkaXVzICogTWF0aC5jb3MoYW5nbGVfcmFkKSwgY2VudGVyWzFdICsgcmFkaXVzICogTWF0aC5zaW4oYW5nbGVfcmFkKV07XG59XG4iXX0=