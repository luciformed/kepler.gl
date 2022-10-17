"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewLayersToSplitMap = addNewLayersToSplitMap;
exports.removeLayerFromSplitMaps = removeLayerFromSplitMaps;
exports.getInitialMapLayersForSplitMap = getInitialMapLayersForSplitMap;
exports.computeSplitMapLayers = computeSplitMapLayers;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Add new layers to both existing maps
 * @param {Object} splitMaps
 * @param {Object|Array<Object>} layers
 * @returns {Array<Object>} new splitMaps
 */
function addNewLayersToSplitMap(splitMaps, layers) {
  var newLayers = Array.isArray(layers) ? layers : [layers];

  if (!splitMaps.length || !newLayers.length) {
    return splitMaps;
  } // add new layer to both maps,
  // don't override, if layer.id is already in splitMaps


  return splitMaps.map(function (settings) {
    return _objectSpread(_objectSpread({}, settings), {}, {
      layers: _objectSpread(_objectSpread({}, settings.layers), newLayers.reduce(function (accu, newLayer) {
        return (// @ts-ignore
          newLayer.id in settings.layers || !newLayer.config.isVisible ? accu : _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, newLayer.id, newLayer.config.isVisible))
        );
      }, {}))
    });
  });
}
/**
 * Remove an existing layer from split map settings
 * @param {Object} splitMaps
 * @param {Object} layer
 * @returns {Object} Maps of custom layer objects
 */


function removeLayerFromSplitMaps(splitMaps, layer) {
  if (!splitMaps.length) {
    return splitMaps;
  }

  return splitMaps.map(function (settings) {
    // eslint-disable-next-line no-unused-vars
    var _settings$layers = settings.layers,
        _layer$id = layer.id,
        _ = _settings$layers[_layer$id],
        newLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [_layer$id].map(_toPropertyKey));
    return _objectSpread(_objectSpread({}, settings), {}, {
      layers: newLayers
    });
  });
}
/**
 * This method will compute the default maps layer settings
 * based on the current layers visibility
 * @param {Array<Object>} layers
 * @returns {Array<Object>} layer visibility for each panel
 */


function getInitialMapLayersForSplitMap(layers) {
  return layers.filter(function (layer) {
    return layer.config.isVisible;
  }).reduce(function (newLayers, currentLayer) {
    return _objectSpread(_objectSpread({}, newLayers), {}, (0, _defineProperty2["default"])({}, currentLayer.id, currentLayer.config.isVisible));
  }, {});
}
/**
 * This method will get default splitMap settings based on existing layers
 * @param {Array<Object>} layers
 * @returns {Array<Object>} split map settings
 */


function computeSplitMapLayers(layers) {
  var mapLayers = getInitialMapLayersForSplitMap(layers);
  return [{
    layers: mapLayers
  }, {
    layers: (0, _lodash["default"])(mapLayers)
  }];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zcGxpdC1tYXAtdXRpbHMuanMiXSwibmFtZXMiOlsiYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcCIsInNwbGl0TWFwcyIsImxheWVycyIsIm5ld0xheWVycyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm1hcCIsInNldHRpbmdzIiwicmVkdWNlIiwiYWNjdSIsIm5ld0xheWVyIiwiaWQiLCJjb25maWciLCJpc1Zpc2libGUiLCJyZW1vdmVMYXllckZyb21TcGxpdE1hcHMiLCJsYXllciIsIl8iLCJnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXAiLCJmaWx0ZXIiLCJjdXJyZW50TGF5ZXIiLCJjb21wdXRlU3BsaXRNYXBMYXllcnMiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLHNCQUFULENBQWdDQyxTQUFoQyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFDeEQsTUFBTUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUMsQ0FBQ0EsTUFBRCxDQUFuRDs7QUFFQSxNQUFJLENBQUNELFNBQVMsQ0FBQ0ssTUFBWCxJQUFxQixDQUFDSCxTQUFTLENBQUNHLE1BQXBDLEVBQTRDO0FBQzFDLFdBQU9MLFNBQVA7QUFDRCxHQUx1RCxDQU94RDtBQUNBOzs7QUFDQSxTQUFPQSxTQUFTLENBQUNNLEdBQVYsQ0FBYyxVQUFBQyxRQUFRO0FBQUEsMkNBQ3hCQSxRQUR3QjtBQUUzQk4sTUFBQUEsTUFBTSxrQ0FDRE0sUUFBUSxDQUFDTixNQURSLEdBRURDLFNBQVMsQ0FBQ00sTUFBVixDQUNELFVBQUNDLElBQUQsRUFBT0MsUUFBUDtBQUFBLGVBQ0U7QUFDQUEsVUFBQUEsUUFBUSxDQUFDQyxFQUFULElBQWVKLFFBQVEsQ0FBQ04sTUFBeEIsSUFBa0MsQ0FBQ1MsUUFBUSxDQUFDRSxNQUFULENBQWdCQyxTQUFuRCxHQUNJSixJQURKLG1DQUdTQSxJQUhULDRDQUlPQyxRQUFRLENBQUNDLEVBSmhCLEVBSXFCRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JDLFNBSnJDO0FBRkY7QUFBQSxPQURDLEVBU0QsRUFUQyxDQUZDO0FBRnFCO0FBQUEsR0FBdEIsQ0FBUDtBQWlCRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0Msd0JBQVQsQ0FBa0NkLFNBQWxDLEVBQTZDZSxLQUE3QyxFQUFvRDtBQUN6RCxNQUFJLENBQUNmLFNBQVMsQ0FBQ0ssTUFBZixFQUF1QjtBQUNyQixXQUFPTCxTQUFQO0FBQ0Q7O0FBQ0QsU0FBT0EsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQUMsUUFBUSxFQUFJO0FBQy9CO0FBQ0EsMkJBQXNDQSxRQUFRLENBQUNOLE1BQS9DO0FBQUEsb0JBQVFjLEtBQUssQ0FBQ0osRUFBZDtBQUFBLFFBQW1CSyxDQUFuQjtBQUFBLFFBQXlCZCxTQUF6QjtBQUNBLDJDQUNLSyxRQURMO0FBRUVOLE1BQUFBLE1BQU0sRUFBRUM7QUFGVjtBQUlELEdBUE0sQ0FBUDtBQVFEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTZSw4QkFBVCxDQUF3Q2hCLE1BQXhDLEVBQWdEO0FBQ3JELFNBQU9BLE1BQU0sQ0FDVmlCLE1BREksQ0FDRyxVQUFBSCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSCxNQUFOLENBQWFDLFNBQWpCO0FBQUEsR0FEUixFQUVKTCxNQUZJLENBR0gsVUFBQ04sU0FBRCxFQUFZaUIsWUFBWjtBQUFBLDJDQUNLakIsU0FETCw0Q0FFR2lCLFlBQVksQ0FBQ1IsRUFGaEIsRUFFcUJRLFlBQVksQ0FBQ1AsTUFBYixDQUFvQkMsU0FGekM7QUFBQSxHQUhHLEVBT0gsRUFQRyxDQUFQO0FBU0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTTyxxQkFBVCxDQUErQm5CLE1BQS9CLEVBQXVDO0FBQzVDLE1BQU1vQixTQUFTLEdBQUdKLDhCQUE4QixDQUFDaEIsTUFBRCxDQUFoRDtBQUVBLFNBQU8sQ0FBQztBQUFDQSxJQUFBQSxNQUFNLEVBQUVvQjtBQUFULEdBQUQsRUFBc0I7QUFBQ3BCLElBQUFBLE1BQU0sRUFBRSx3QkFBVW9CLFNBQVY7QUFBVCxHQUF0QixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuXG4vKipcbiAqIEFkZCBuZXcgbGF5ZXJzIHRvIGJvdGggZXhpc3RpbmcgbWFwc1xuICogQHBhcmFtIHtPYmplY3R9IHNwbGl0TWFwc1xuICogQHBhcmFtIHtPYmplY3R8QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzXG4gKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn0gbmV3IHNwbGl0TWFwc1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzcGxpdE1hcHMsIGxheWVycykge1xuICBjb25zdCBuZXdMYXllcnMgPSBBcnJheS5pc0FycmF5KGxheWVycykgPyBsYXllcnMgOiBbbGF5ZXJzXTtcblxuICBpZiAoIXNwbGl0TWFwcy5sZW5ndGggfHwgIW5ld0xheWVycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3BsaXRNYXBzO1xuICB9XG5cbiAgLy8gYWRkIG5ldyBsYXllciB0byBib3RoIG1hcHMsXG4gIC8vIGRvbid0IG92ZXJyaWRlLCBpZiBsYXllci5pZCBpcyBhbHJlYWR5IGluIHNwbGl0TWFwc1xuICByZXR1cm4gc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiAoe1xuICAgIC4uLnNldHRpbmdzLFxuICAgIGxheWVyczoge1xuICAgICAgLi4uc2V0dGluZ3MubGF5ZXJzLFxuICAgICAgLi4ubmV3TGF5ZXJzLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIG5ld0xheWVyKSA9PlxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBuZXdMYXllci5pZCBpbiBzZXR0aW5ncy5sYXllcnMgfHwgIW5ld0xheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgICAgICAgID8gYWNjdVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgICBbbmV3TGF5ZXIuaWRdOiBuZXdMYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfVxuICB9KSk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV4aXN0aW5nIGxheWVyIGZyb20gc3BsaXQgbWFwIHNldHRpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gc3BsaXRNYXBzXG4gKiBAcGFyYW0ge09iamVjdH0gbGF5ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcHMgb2YgY3VzdG9tIGxheWVyIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyhzcGxpdE1hcHMsIGxheWVyKSB7XG4gIGlmICghc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBzcGxpdE1hcHM7XG4gIH1cbiAgcmV0dXJuIHNwbGl0TWFwcy5tYXAoc2V0dGluZ3MgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHtbbGF5ZXIuaWRdOiBfLCAuLi5uZXdMYXllcnN9ID0gc2V0dGluZ3MubGF5ZXJzO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zZXR0aW5ncyxcbiAgICAgIGxheWVyczogbmV3TGF5ZXJzXG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBjb21wdXRlIHRoZSBkZWZhdWx0IG1hcHMgbGF5ZXIgc2V0dGluZ3NcbiAqIGJhc2VkIG9uIHRoZSBjdXJyZW50IGxheWVycyB2aXNpYmlsaXR5XG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGxheWVyc1xuICogQHJldHVybnMge0FycmF5PE9iamVjdD59IGxheWVyIHZpc2liaWxpdHkgZm9yIGVhY2ggcGFuZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxNYXBMYXllcnNGb3JTcGxpdE1hcChsYXllcnMpIHtcbiAgcmV0dXJuIGxheWVyc1xuICAgIC5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuY29uZmlnLmlzVmlzaWJsZSlcbiAgICAucmVkdWNlKFxuICAgICAgKG5ld0xheWVycywgY3VycmVudExheWVyKSA9PiAoe1xuICAgICAgICAuLi5uZXdMYXllcnMsXG4gICAgICAgIFtjdXJyZW50TGF5ZXIuaWRdOiBjdXJyZW50TGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZXQgZGVmYXVsdCBzcGxpdE1hcCBzZXR0aW5ncyBiYXNlZCBvbiBleGlzdGluZyBsYXllcnNcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGF5ZXJzXG4gKiBAcmV0dXJucyB7QXJyYXk8T2JqZWN0Pn0gc3BsaXQgbWFwIHNldHRpbmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlU3BsaXRNYXBMYXllcnMobGF5ZXJzKSB7XG4gIGNvbnN0IG1hcExheWVycyA9IGdldEluaXRpYWxNYXBMYXllcnNGb3JTcGxpdE1hcChsYXllcnMpO1xuXG4gIHJldHVybiBbe2xheWVyczogbWFwTGF5ZXJzfSwge2xheWVyczogY2xvbmVEZWVwKG1hcExheWVycyl9XTtcbn1cbiJdfQ==