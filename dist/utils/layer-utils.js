"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findDefaultLayer = findDefaultLayer;
exports.calculateLayerData = calculateLayerData;
exports.getLayerHoverProp = getLayerHoverProp;
exports.renderDeckGlLayer = renderDeckGlLayer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * Find default layers from fields
 * @type {typeof import('./layer-utils').findDefaultLayer}
 */
function findDefaultLayer(dataset, layerClasses) {
  if (!dataset) {
    return [];
  }

  var layerProps = Object.keys(layerClasses).reduce(function (previous, lc) {
    var result = typeof layerClasses[lc].findDefaultLayerProps === 'function' ? layerClasses[lc].findDefaultLayerProps(dataset, previous) : {
      props: []
    };
    var props = Array.isArray(result) ? result : result.props || [];
    var foundLayers = result.foundLayers || previous;
    return foundLayers.concat(props.map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        type: lc,
        dataId: dataset.id
      });
    }));
  }, []); // go through all layerProps to create layer

  return layerProps.map(function (props) {
    var layer = new layerClasses[props.type](props);
    return typeof layer.setInitialLayerConfig === 'function' && Array.isArray(dataset.allData) ? layer.setInitialLayerConfig(dataset) : layer;
  });
}
/**
 * calculate layer data based on layer type, col Config,
 * return updated layer if colorDomain, dataMap has changed
 * @type {typeof import('./layer-utils').calculateLayerData}
 */


function calculateLayerData(layer, state, oldLayerData) {
  var type = layer.type;

  if (!type || !layer.hasAllColumns() || !layer.config.dataId) {
    return {
      layer: layer,
      layerData: {}
    };
  }

  var layerData = layer.formatLayerData(state.datasets, oldLayerData);
  return {
    layerData: layerData,
    layer: layer
  };
}
/**
 * Calculate props passed to LayerHoverInfo
 * @type {typeof import('./layer-utils').getLayerHoverProp}
 */


function getLayerHoverProp(_ref) {
  var interactionConfig = _ref.interactionConfig,
      hoverInfo = _ref.hoverInfo,
      layers = _ref.layers,
      layersToRender = _ref.layersToRender,
      datasets = _ref.datasets;

  if (interactionConfig.tooltip.enabled && hoverInfo && hoverInfo.picked) {
    // if anything hovered
    var object = hoverInfo.object,
        overlay = hoverInfo.layer; // deckgl layer to kepler-gl layer

    var layer = layers[overlay.props.idx];

    if (object && layer && layer.getHoverData && layersToRender[layer.id]) {
      // if layer is visible and have hovered data
      var dataId = layer.config.dataId;

      if (!dataId) {
        return null;
      }

      var _datasets$dataId = datasets[dataId],
          allData = _datasets$dataId.allData,
          fields = _datasets$dataId.fields;
      var data = layer.getHoverData(object, allData, fields);
      var fieldsToShow = interactionConfig.tooltip.config.fieldsToShow[dataId];
      return {
        data: data,
        fields: fields,
        fieldsToShow: fieldsToShow,
        layer: layer
      };
    }
  }

  return null;
}

function renderDeckGlLayer(props, layerCallbacks, idx) {
  var datasets = props.datasets,
      layers = props.layers,
      layerData = props.layerData,
      hoverInfo = props.hoverInfo,
      clicked = props.clicked,
      mapState = props.mapState,
      interactionConfig = props.interactionConfig,
      animationConfig = props.animationConfig;
  var layer = layers[idx];
  var data = layerData[idx];

  var _ref2 = datasets[layer.config.dataId] || {},
      gpuFilter = _ref2.gpuFilter;

  var objectHovered = clicked || hoverInfo; // Layer is Layer class

  return layer.renderLayer({
    data: data,
    gpuFilter: gpuFilter,
    idx: idx,
    interactionConfig: interactionConfig,
    layerCallbacks: layerCallbacks,
    mapState: mapState,
    animationConfig: animationConfig,
    objectHovered: objectHovered
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9sYXllci11dGlscy5qcyJdLCJuYW1lcyI6WyJmaW5kRGVmYXVsdExheWVyIiwiZGF0YXNldCIsImxheWVyQ2xhc3NlcyIsImxheWVyUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJldmlvdXMiLCJsYyIsInJlc3VsdCIsImZpbmREZWZhdWx0TGF5ZXJQcm9wcyIsInByb3BzIiwiQXJyYXkiLCJpc0FycmF5IiwiZm91bmRMYXllcnMiLCJjb25jYXQiLCJtYXAiLCJwIiwidHlwZSIsImRhdGFJZCIsImlkIiwibGF5ZXIiLCJzZXRJbml0aWFsTGF5ZXJDb25maWciLCJhbGxEYXRhIiwiY2FsY3VsYXRlTGF5ZXJEYXRhIiwic3RhdGUiLCJvbGRMYXllckRhdGEiLCJoYXNBbGxDb2x1bW5zIiwiY29uZmlnIiwibGF5ZXJEYXRhIiwiZm9ybWF0TGF5ZXJEYXRhIiwiZGF0YXNldHMiLCJnZXRMYXllckhvdmVyUHJvcCIsImludGVyYWN0aW9uQ29uZmlnIiwiaG92ZXJJbmZvIiwibGF5ZXJzIiwibGF5ZXJzVG9SZW5kZXIiLCJ0b29sdGlwIiwiZW5hYmxlZCIsInBpY2tlZCIsIm9iamVjdCIsIm92ZXJsYXkiLCJpZHgiLCJnZXRIb3ZlckRhdGEiLCJmaWVsZHMiLCJkYXRhIiwiZmllbGRzVG9TaG93IiwicmVuZGVyRGVja0dsTGF5ZXIiLCJsYXllckNhbGxiYWNrcyIsImNsaWNrZWQiLCJtYXBTdGF0ZSIsImFuaW1hdGlvbkNvbmZpZyIsImdwdUZpbHRlciIsIm9iamVjdEhvdmVyZWQiLCJyZW5kZXJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxnQkFBVCxDQUEwQkMsT0FB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LE1BR0VOLFNBSEYsR0FTSWxCLEtBVEosQ0FHRWtCLFNBSEY7QUFBQSxNQUlFSyxTQUpGLEdBU0l2QixLQVRKLENBSUV1QixTQUpGO0FBQUEsTUFLRWUsT0FMRixHQVNJdEMsS0FUSixDQUtFc0MsT0FMRjtBQUFBLE1BTUVDLFFBTkYsR0FTSXZDLEtBVEosQ0FNRXVDLFFBTkY7QUFBQSxNQU9FakIsaUJBUEYsR0FTSXRCLEtBVEosQ0FPRXNCLGlCQVBGO0FBQUEsTUFRRWtCLGVBUkYsR0FTSXhDLEtBVEosQ0FRRXdDLGVBUkY7QUFVQSxNQUFNOUIsS0FBSyxHQUFHYyxNQUFNLENBQUNPLEdBQUQsQ0FBcEI7QUFDQSxNQUFNRyxJQUFJLEdBQUdoQixTQUFTLENBQUNhLEdBQUQsQ0FBdEI7O0FBQ0EsY0FBb0JYLFFBQVEsQ0FBQ1YsS0FBSyxDQUFDTyxNQUFOLENBQWFULE1BQWQsQ0FBUixJQUFpQyxFQUFyRDtBQUFBLE1BQU9pQyxTQUFQLFNBQU9BLFNBQVA7O0FBRUEsTUFBTUMsYUFBYSxHQUFHSixPQUFPLElBQUlmLFNBQWpDLENBZjRELENBaUI1RDs7QUFDQSxTQUFPYixLQUFLLENBQUNpQyxXQUFOLENBQWtCO0FBQ3ZCVCxJQUFBQSxJQUFJLEVBQUpBLElBRHVCO0FBRXZCTyxJQUFBQSxTQUFTLEVBQVRBLFNBRnVCO0FBR3ZCVixJQUFBQSxHQUFHLEVBQUhBLEdBSHVCO0FBSXZCVCxJQUFBQSxpQkFBaUIsRUFBakJBLGlCQUp1QjtBQUt2QmUsSUFBQUEsY0FBYyxFQUFkQSxjQUx1QjtBQU12QkUsSUFBQUEsUUFBUSxFQUFSQSxRQU51QjtBQU92QkMsSUFBQUEsZUFBZSxFQUFmQSxlQVB1QjtBQVF2QkUsSUFBQUEsYUFBYSxFQUFiQTtBQVJ1QixHQUFsQixDQUFQO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKipcbiAqIEZpbmQgZGVmYXVsdCBsYXllcnMgZnJvbSBmaWVsZHNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2xheWVyLXV0aWxzJykuZmluZERlZmF1bHRMYXllcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmREZWZhdWx0TGF5ZXIoZGF0YXNldCwgbGF5ZXJDbGFzc2VzKSB7XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBsYXllclByb3BzID0gT2JqZWN0LmtleXMobGF5ZXJDbGFzc2VzKS5yZWR1Y2UoKHByZXZpb3VzLCBsYykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICB0eXBlb2YgbGF5ZXJDbGFzc2VzW2xjXS5maW5kRGVmYXVsdExheWVyUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBsYXllckNsYXNzZXNbbGNdLmZpbmREZWZhdWx0TGF5ZXJQcm9wcyhkYXRhc2V0LCBwcmV2aW91cylcbiAgICAgICAgOiB7cHJvcHM6IFtdfTtcblxuICAgIGNvbnN0IHByb3BzID0gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0LnByb3BzIHx8IFtdO1xuICAgIGNvbnN0IGZvdW5kTGF5ZXJzID0gcmVzdWx0LmZvdW5kTGF5ZXJzIHx8IHByZXZpb3VzO1xuXG4gICAgcmV0dXJuIGZvdW5kTGF5ZXJzLmNvbmNhdChcbiAgICAgIHByb3BzLm1hcChwID0+ICh7XG4gICAgICAgIC4uLnAsXG4gICAgICAgIHR5cGU6IGxjLFxuICAgICAgICBkYXRhSWQ6IGRhdGFzZXQuaWRcbiAgICAgIH0pKVxuICAgICk7XG4gIH0sIFtdKTtcblxuICAvLyBnbyB0aHJvdWdoIGFsbCBsYXllclByb3BzIHRvIGNyZWF0ZSBsYXllclxuICByZXR1cm4gbGF5ZXJQcm9wcy5tYXAocHJvcHMgPT4ge1xuICAgIGNvbnN0IGxheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1twcm9wcy50eXBlXShwcm9wcyk7XG4gICAgcmV0dXJuIHR5cGVvZiBsYXllci5zZXRJbml0aWFsTGF5ZXJDb25maWcgPT09ICdmdW5jdGlvbicgJiYgQXJyYXkuaXNBcnJheShkYXRhc2V0LmFsbERhdGEpXG4gICAgICA/IGxheWVyLnNldEluaXRpYWxMYXllckNvbmZpZyhkYXRhc2V0KVxuICAgICAgOiBsYXllcjtcbiAgfSk7XG59XG5cbi8qKlxuICogY2FsY3VsYXRlIGxheWVyIGRhdGEgYmFzZWQgb24gbGF5ZXIgdHlwZSwgY29sIENvbmZpZyxcbiAqIHJldHVybiB1cGRhdGVkIGxheWVyIGlmIGNvbG9yRG9tYWluLCBkYXRhTWFwIGhhcyBjaGFuZ2VkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9sYXllci11dGlscycpLmNhbGN1bGF0ZUxheWVyRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUxheWVyRGF0YShsYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSkge1xuICBjb25zdCB7dHlwZX0gPSBsYXllcjtcblxuICBpZiAoIXR5cGUgfHwgIWxheWVyLmhhc0FsbENvbHVtbnMoKSB8fCAhbGF5ZXIuY29uZmlnLmRhdGFJZCkge1xuICAgIHJldHVybiB7bGF5ZXIsIGxheWVyRGF0YToge319O1xuICB9XG5cbiAgY29uc3QgbGF5ZXJEYXRhID0gbGF5ZXIuZm9ybWF0TGF5ZXJEYXRhKHN0YXRlLmRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xuICByZXR1cm4ge2xheWVyRGF0YSwgbGF5ZXJ9O1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSBwcm9wcyBwYXNzZWQgdG8gTGF5ZXJIb3ZlckluZm9cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2xheWVyLXV0aWxzJykuZ2V0TGF5ZXJIb3ZlclByb3B9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXllckhvdmVyUHJvcCh7XG4gIGludGVyYWN0aW9uQ29uZmlnLFxuICBob3ZlckluZm8sXG4gIGxheWVycyxcbiAgbGF5ZXJzVG9SZW5kZXIsXG4gIGRhdGFzZXRzXG59KSB7XG4gIGlmIChpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmVuYWJsZWQgJiYgaG92ZXJJbmZvICYmIGhvdmVySW5mby5waWNrZWQpIHtcbiAgICAvLyBpZiBhbnl0aGluZyBob3ZlcmVkXG4gICAgY29uc3Qge29iamVjdCwgbGF5ZXI6IG92ZXJsYXl9ID0gaG92ZXJJbmZvO1xuXG4gICAgLy8gZGVja2dsIGxheWVyIHRvIGtlcGxlci1nbCBsYXllclxuICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW292ZXJsYXkucHJvcHMuaWR4XTtcblxuICAgIGlmIChvYmplY3QgJiYgbGF5ZXIgJiYgbGF5ZXIuZ2V0SG92ZXJEYXRhICYmIGxheWVyc1RvUmVuZGVyW2xheWVyLmlkXSkge1xuICAgICAgLy8gaWYgbGF5ZXIgaXMgdmlzaWJsZSBhbmQgaGF2ZSBob3ZlcmVkIGRhdGFcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29uZmlnOiB7ZGF0YUlkfVxuICAgICAgfSA9IGxheWVyO1xuICAgICAgaWYgKCFkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCB7YWxsRGF0YSwgZmllbGRzfSA9IGRhdGFzZXRzW2RhdGFJZF07XG4gICAgICBjb25zdCBkYXRhID0gbGF5ZXIuZ2V0SG92ZXJEYXRhKG9iamVjdCwgYWxsRGF0YSwgZmllbGRzKTtcbiAgICAgIGNvbnN0IGZpZWxkc1RvU2hvdyA9IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZpZWxkc1RvU2hvdyxcbiAgICAgICAgbGF5ZXJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZWNrR2xMYXllcihwcm9wcywgbGF5ZXJDYWxsYmFja3MsIGlkeCkge1xuICBjb25zdCB7XG4gICAgZGF0YXNldHMsXG4gICAgbGF5ZXJzLFxuICAgIGxheWVyRGF0YSxcbiAgICBob3ZlckluZm8sXG4gICAgY2xpY2tlZCxcbiAgICBtYXBTdGF0ZSxcbiAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICBhbmltYXRpb25Db25maWdcbiAgfSA9IHByb3BzO1xuICBjb25zdCBsYXllciA9IGxheWVyc1tpZHhdO1xuICBjb25zdCBkYXRhID0gbGF5ZXJEYXRhW2lkeF07XG4gIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gfHwge307XG5cbiAgY29uc3Qgb2JqZWN0SG92ZXJlZCA9IGNsaWNrZWQgfHwgaG92ZXJJbmZvO1xuXG4gIC8vIExheWVyIGlzIExheWVyIGNsYXNzXG4gIHJldHVybiBsYXllci5yZW5kZXJMYXllcih7XG4gICAgZGF0YSxcbiAgICBncHVGaWx0ZXIsXG4gICAgaWR4LFxuICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgIGxheWVyQ2FsbGJhY2tzLFxuICAgIG1hcFN0YXRlLFxuICAgIGFuaW1hdGlvbkNvbmZpZyxcbiAgICBvYmplY3RIb3ZlcmVkXG4gIH0pO1xufVxuIl19