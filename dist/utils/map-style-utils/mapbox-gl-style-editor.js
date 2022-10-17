"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultLayerGroupVisibility = getDefaultLayerGroupVisibility;
exports.isValidStyleUrl = isValidStyleUrl;
exports.getStyleDownloadUrl = getStyleDownloadUrl;
exports.getStyleImageIcon = getStyleImageIcon;
exports.scaleMapStyleByResolution = scaleMapStyleByResolution;
exports.mergeLayerGroupVisibility = mergeLayerGroupVisibility;
exports.editBottomMapStyle = exports.editTopMapStyle = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _defaultSettings = require("../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapUrlRg = /^mapbox:\/\/styles\/[-a-z0-9]{2,256}\/[-a-z0-9]{2,256}/;
var httpRg = /^(?=(http:|https:))/;

function getDefaultLayerGroupVisibility(_ref) {
  var _ref$layerGroups = _ref.layerGroups,
      layerGroups = _ref$layerGroups === void 0 ? [] : _ref$layerGroups;
  return layerGroups.reduce(function (accu, layer) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, layer.slug, layer.defaultVisibility));
  }, {});
}

var resolver = function resolver(_ref2) {
  var id = _ref2.id,
      mapStyle = _ref2.mapStyle,
      _ref2$visibleLayerGro = _ref2.visibleLayerGroups,
      visibleLayerGroups = _ref2$visibleLayerGro === void 0 ? {} : _ref2$visibleLayerGro;
  return "".concat(id, ":").concat(Object.keys(visibleLayerGroups).filter(function (d) {
    return visibleLayerGroups[d];
  }).sort().join('-'));
};
/**
 * Edit preset map style to keep only visible layers
 *
 * @param {Object} mapStyle - preset map style
 * @param {Object} visibleLayerGroups - visible layers of top map
 * @returns {Object} top map style
 */


var editTopMapStyle = (0, _lodash["default"])(function (_ref3) {
  var id = _ref3.id,
      mapStyle = _ref3.mapStyle,
      visibleLayerGroups = _ref3.visibleLayerGroups;
  var visibleFilters = (mapStyle.layerGroups || []).filter(function (lg) {
    return visibleLayerGroups[lg.slug];
  }).map(function (lg) {
    return lg.filter;
  }); // if top map
  // keep only visible layers

  var filteredLayers = mapStyle.style.layers.filter(function (layer) {
    return visibleFilters.some(function (match) {
      return match(layer);
    });
  });
  return _objectSpread(_objectSpread({}, mapStyle.style), {}, {
    layers: filteredLayers
  });
}, resolver);
/**
 * Edit preset map style to filter out invisible layers
 *
 * @param {Object} mapStyle - preset map style
 * @param {Object} visibleLayerGroups - visible layers of bottom map
 * @returns {Object} bottom map style
 */

exports.editTopMapStyle = editTopMapStyle;
var editBottomMapStyle = (0, _lodash["default"])(function (_ref4) {
  var id = _ref4.id,
      mapStyle = _ref4.mapStyle,
      visibleLayerGroups = _ref4.visibleLayerGroups;
  var invisibleFilters = (mapStyle.layerGroups || []).filter(function (lg) {
    return !visibleLayerGroups[lg.slug];
  }).map(function (lg) {
    return lg.filter;
  }); // if bottom map
  // filter out invisible layers

  var filteredLayers = mapStyle.style.layers.filter(function (layer) {
    return invisibleFilters.every(function (match) {
      return !match(layer);
    });
  });
  return _objectSpread(_objectSpread({}, mapStyle.style), {}, {
    layers: filteredLayers
  });
}, resolver); // valid style url
// mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4
// lowercase letters, numbers and dashes only.

exports.editBottomMapStyle = editBottomMapStyle;

function isValidStyleUrl(url) {
  return typeof url === 'string' && Boolean(url.match(mapUrlRg) || url.match(httpRg));
}

function getStyleDownloadUrl(styleUrl, accessToken, mapboxApiUrl) {
  if (styleUrl.startsWith('http')) {
    return styleUrl;
  } // mapbox://styles/jckr/cjhcl0lxv13di2rpfoytdbdyj


  if (styleUrl.startsWith('mapbox://styles')) {
    var styleId = styleUrl.replace('mapbox://styles/', ''); // https://api.mapbox.com/styles/v1/heshan0131/cjg1bfumo1cwm2rlrjxkinfgw?pluginName=Keplergl&access_token=<token>

    return "".concat(mapboxApiUrl || _defaultSettings.DEFAULT_MAPBOX_API_URL, "/styles/v1/").concat(styleId, "?pluginName=Keplergl&access_token=").concat(accessToken);
  } // style url not recognized


  return null;
}
/**
 * Generate static map image from style Url to be used as icon
 * @param {Object} param
 * @param {string} param.styleUrl
 * @param {string} param.mapboxApiAccessToken
 * @param {string} param.mapboxApiUrl
 * @param {Object} param.mapState
 * @param {number} param.mapW
 * @param {number} param.mapH
 */


function getStyleImageIcon(_ref5) {
  var styleUrl = _ref5.styleUrl,
      mapboxApiAccessToken = _ref5.mapboxApiAccessToken,
      _ref5$mapboxApiUrl = _ref5.mapboxApiUrl,
      mapboxApiUrl = _ref5$mapboxApiUrl === void 0 ? _defaultSettings.DEFAULT_MAPBOX_API_URL : _ref5$mapboxApiUrl,
      _ref5$mapState = _ref5.mapState,
      mapState = _ref5$mapState === void 0 ? {
    longitude: -122.3391,
    latitude: 37.7922,
    zoom: 9
  } : _ref5$mapState,
      _ref5$mapW = _ref5.mapW,
      mapW = _ref5$mapW === void 0 ? 400 : _ref5$mapW,
      _ref5$mapH = _ref5.mapH,
      mapH = _ref5$mapH === void 0 ? 300 : _ref5$mapH;
  var styleId = styleUrl.replace('mapbox://styles/', '');
  return "".concat(mapboxApiUrl, "/styles/v1/").concat(styleId, "/static/") + "".concat(mapState.longitude, ",").concat(mapState.latitude, ",").concat(mapState.zoom, ",0,0/") + "".concat(mapW, "x").concat(mapH) + "?access_token=".concat(mapboxApiAccessToken, "&logo=false&attribution=false");
}

function scaleMapStyleByResolution(mapboxStyle, scale) {
  if (scale !== 1 && mapboxStyle) {
    var labelLayerGroup = _defaultSettings.DEFAULT_LAYER_GROUPS.find(function (lg) {
      return lg.slug === 'label';
    }); // @ts-ignore


    var labelLayerFilter = labelLayerGroup.filter;
    var zoomOffset = Math.log2(scale);
    var copyStyle = (0, _lodash2["default"])(mapboxStyle);
    (copyStyle.layers || []).forEach(function (d) {
      // edit minzoom and maxzoom
      if (d.maxzoom) {
        d.maxzoom = Math.max(d.maxzoom + zoomOffset, 1);
      }

      if (d.minzoom) {
        d.minzoom = Math.max(d.minzoom + zoomOffset, 1);
      } // edit text size


      if (labelLayerFilter(d)) {
        if (d.layout && d.layout['text-size'] && Array.isArray(d.layout['text-size'].stops)) {
          d.layout['text-size'].stops.forEach(function (stop) {
            // zoom
            stop[0] = Math.max(stop[0] + zoomOffset, 1); // size

            stop[1] *= scale;
          });
        }
      }
    });
    return copyStyle;
  }

  return mapboxStyle;
}
/**
 * When switch to a new style, try to keep current layer group visibility
 * by merging default and current
 * @param {Object} defaultLayerGroup
 * @param {Object} currentLayerGroup
 * @return {Object} mergedLayerGroups
 */


function mergeLayerGroupVisibility(defaultLayerGroup, currentLayerGroup) {
  return Object.keys(defaultLayerGroup).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), currentLayerGroup.hasOwnProperty(key) ? (0, _defineProperty2["default"])({}, key, currentLayerGroup[key]) : {});
  }, defaultLayerGroup);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LWdsLXN0eWxlLWVkaXRvci5qcyJdLCJuYW1lcyI6WyJtYXBVcmxSZyIsImh0dHBSZyIsImdldERlZmF1bHRMYXllckdyb3VwVmlzaWJpbGl0eSIsImxheWVyR3JvdXBzIiwicmVkdWNlIiwiYWNjdSIsImxheWVyIiwic2x1ZyIsImRlZmF1bHRWaXNpYmlsaXR5IiwicmVzb2x2ZXIiLCJpZCIsIm1hcFN0eWxlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImQiLCJzb3J0Iiwiam9pbiIsImVkaXRUb3BNYXBTdHlsZSIsInZpc2libGVGaWx0ZXJzIiwibGciLCJtYXAiLCJmaWx0ZXJlZExheWVycyIsInN0eWxlIiwibGF5ZXJzIiwic29tZSIsIm1hdGNoIiwiZWRpdEJvdHRvbU1hcFN0eWxlIiwiaW52aXNpYmxlRmlsdGVycyIsImV2ZXJ5IiwiaXNWYWxpZFN0eWxlVXJsIiwidXJsIiwiQm9vbGVhbiIsImdldFN0eWxlRG93bmxvYWRVcmwiLCJzdHlsZVVybCIsImFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwic3RhcnRzV2l0aCIsInN0eWxlSWQiLCJyZXBsYWNlIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsImdldFN0eWxlSW1hZ2VJY29uIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBTdGF0ZSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwiem9vbSIsIm1hcFciLCJtYXBIIiwic2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbiIsIm1hcGJveFN0eWxlIiwic2NhbGUiLCJsYWJlbExheWVyR3JvdXAiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsImZpbmQiLCJsYWJlbExheWVyRmlsdGVyIiwiem9vbU9mZnNldCIsIk1hdGgiLCJsb2cyIiwiY29weVN0eWxlIiwiZm9yRWFjaCIsIm1heHpvb20iLCJtYXgiLCJtaW56b29tIiwibGF5b3V0IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RvcHMiLCJzdG9wIiwibWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eSIsImRlZmF1bHRMYXllckdyb3VwIiwiY3VycmVudExheWVyR3JvdXAiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsR0FBRyx3REFBakI7QUFDQSxJQUFNQyxNQUFNLEdBQUcscUJBQWY7O0FBRU8sU0FBU0MsOEJBQVQsT0FBNEQ7QUFBQSw4QkFBbkJDLFdBQW1CO0FBQUEsTUFBbkJBLFdBQW1CLGlDQUFMLEVBQUs7QUFDakUsU0FBT0EsV0FBVyxDQUFDQyxNQUFaLENBQ0wsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsMkNBQ0tELElBREwsNENBRUdDLEtBQUssQ0FBQ0MsSUFGVCxFQUVnQkQsS0FBSyxDQUFDRSxpQkFGdEI7QUFBQSxHQURLLEVBS0wsRUFMSyxDQUFQO0FBT0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxNQUFNQyxRQUFOLFNBQU1BLFFBQU47QUFBQSxvQ0FBZ0JDLGtCQUFoQjtBQUFBLE1BQWdCQSxrQkFBaEIsc0NBQXFDLEVBQXJDO0FBQUEsbUJBQ1pGLEVBRFksY0FDTkcsTUFBTSxDQUFDQyxJQUFQLENBQVlGLGtCQUFaLEVBQ05HLE1BRE0sQ0FDQyxVQUFBQyxDQUFDO0FBQUEsV0FBSUosa0JBQWtCLENBQUNJLENBQUQsQ0FBdEI7QUFBQSxHQURGLEVBRU5DLElBRk0sR0FHTkMsSUFITSxDQUdELEdBSEMsQ0FETTtBQUFBLENBQWpCO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGVBQWUsR0FBRyx3QkFBUSxpQkFBd0M7QUFBQSxNQUF0Q1QsRUFBc0MsU0FBdENBLEVBQXNDO0FBQUEsTUFBbENDLFFBQWtDLFNBQWxDQSxRQUFrQztB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LENBQUQsQ0FBSixJQUFXakIsS0FBWDtBQUNELFdBTEQ7QUFNRDtBQUNGO0FBQ0YsS0FyQkQ7QUF1QkEsV0FBT1EsU0FBUDtBQUNEOztBQUVELFNBQU9ULFdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTbUIseUJBQVQsQ0FBbUNDLGlCQUFuQyxFQUFzREMsaUJBQXRELEVBQXlFO0FBQzlFLFNBQU8zRCxNQUFNLENBQUNDLElBQVAsQ0FBWXlELGlCQUFaLEVBQStCbkUsTUFBL0IsQ0FDTCxVQUFDQyxJQUFELEVBQU9vRSxHQUFQO0FBQUEsMkNBQ0twRSxJQURMLEdBRU1tRSxpQkFBaUIsQ0FBQ0UsY0FBbEIsQ0FBaUNELEdBQWpDLHlDQUEwQ0EsR0FBMUMsRUFBZ0RELGlCQUFpQixDQUFDQyxHQUFELENBQWpFLElBQTBFLEVBRmhGO0FBQUEsR0FESyxFQUtMRixpQkFMSyxDQUFQO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XG5pbXBvcnQgY2xvbmREZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuaW1wb3J0IHtERUZBVUxUX0xBWUVSX0dST1VQUywgREVGQVVMVF9NQVBCT1hfQVBJX1VSTH0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBtYXBVcmxSZyA9IC9ebWFwYm94OlxcL1xcL3N0eWxlc1xcL1stYS16MC05XXsyLDI1Nn1cXC9bLWEtejAtOV17MiwyNTZ9LztcbmNvbnN0IGh0dHBSZyA9IC9eKD89KGh0dHA6fGh0dHBzOikpLztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRMYXllckdyb3VwVmlzaWJpbGl0eSh7bGF5ZXJHcm91cHMgPSBbXX0pIHtcbiAgcmV0dXJuIGxheWVyR3JvdXBzLnJlZHVjZShcbiAgICAoYWNjdSwgbGF5ZXIpID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgW2xheWVyLnNsdWddOiBsYXllci5kZWZhdWx0VmlzaWJpbGl0eVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG59XG5cbmNvbnN0IHJlc29sdmVyID0gKHtpZCwgbWFwU3R5bGUsIHZpc2libGVMYXllckdyb3VwcyA9IHt9fSkgPT5cbiAgYCR7aWR9OiR7T2JqZWN0LmtleXModmlzaWJsZUxheWVyR3JvdXBzKVxuICAgIC5maWx0ZXIoZCA9PiB2aXNpYmxlTGF5ZXJHcm91cHNbZF0pXG4gICAgLnNvcnQoKVxuICAgIC5qb2luKCctJyl9YDtcblxuLyoqXG4gKiBFZGl0IHByZXNldCBtYXAgc3R5bGUgdG8ga2VlcCBvbmx5IHZpc2libGUgbGF5ZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hcFN0eWxlIC0gcHJlc2V0IG1hcCBzdHlsZVxuICogQHBhcmFtIHtPYmplY3R9IHZpc2libGVMYXllckdyb3VwcyAtIHZpc2libGUgbGF5ZXJzIG9mIHRvcCBtYXBcbiAqIEByZXR1cm5zIHtPYmplY3R9IHRvcCBtYXAgc3R5bGVcbiAqL1xuZXhwb3J0IGNvbnN0IGVkaXRUb3BNYXBTdHlsZSA9IG1lbW9pemUoKHtpZCwgbWFwU3R5bGUsIHZpc2libGVMYXllckdyb3Vwc30pID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpbHRlcnMgPSAobWFwU3R5bGUubGF5ZXJHcm91cHMgfHwgW10pXG4gICAgLmZpbHRlcihsZyA9PiB2aXNpYmxlTGF5ZXJHcm91cHNbbGcuc2x1Z10pXG4gICAgLm1hcChsZyA9PiBsZy5maWx0ZXIpO1xuXG4gIC8vIGlmIHRvcCBtYXBcbiAgLy8ga2VlcCBvbmx5IHZpc2libGUgbGF5ZXJzXG4gIGNvbnN0IGZpbHRlcmVkTGF5ZXJzID0gbWFwU3R5bGUuc3R5bGUubGF5ZXJzLmZpbHRlcihsYXllciA9PlxuICAgIHZpc2libGVGaWx0ZXJzLnNvbWUobWF0Y2ggPT4gbWF0Y2gobGF5ZXIpKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4ubWFwU3R5bGUuc3R5bGUsXG4gICAgbGF5ZXJzOiBmaWx0ZXJlZExheWVyc1xuICB9O1xufSwgcmVzb2x2ZXIpO1xuXG4vKipcbiAqIEVkaXQgcHJlc2V0IG1hcCBzdHlsZSB0byBmaWx0ZXIgb3V0IGludmlzaWJsZSBsYXllcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwU3R5bGUgLSBwcmVzZXQgbWFwIHN0eWxlXG4gKiBAcGFyYW0ge09iamVjdH0gdmlzaWJsZUxheWVyR3JvdXBzIC0gdmlzaWJsZSBsYXllcnMgb2YgYm90dG9tIG1hcFxuICogQHJldHVybnMge09iamVjdH0gYm90dG9tIG1hcCBzdHlsZVxuICovXG5leHBvcnQgY29uc3QgZWRpdEJvdHRvbU1hcFN0eWxlID0gbWVtb2l6ZSgoe2lkLCBtYXBTdHlsZSwgdmlzaWJsZUxheWVyR3JvdXBzfSkgPT4ge1xuICBjb25zdCBpbnZpc2libGVGaWx0ZXJzID0gKG1hcFN0eWxlLmxheWVyR3JvdXBzIHx8IFtdKVxuICAgIC5maWx0ZXIobGcgPT4gIXZpc2libGVMYXllckdyb3Vwc1tsZy5zbHVnXSlcbiAgICAubWFwKGxnID0+IGxnLmZpbHRlcik7XG5cbiAgLy8gaWYgYm90dG9tIG1hcFxuICAvLyBmaWx0ZXIgb3V0IGludmlzaWJsZSBsYXllcnNcbiAgY29uc3QgZmlsdGVyZWRMYXllcnMgPSBtYXBTdHlsZS5zdHlsZS5sYXllcnMuZmlsdGVyKGxheWVyID0+XG4gICAgaW52aXNpYmxlRmlsdGVycy5ldmVyeShtYXRjaCA9PiAhbWF0Y2gobGF5ZXIpKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4ubWFwU3R5bGUuc3R5bGUsXG4gICAgbGF5ZXJzOiBmaWx0ZXJlZExheWVyc1xuICB9O1xufSwgcmVzb2x2ZXIpO1xuXG4vLyB2YWxpZCBzdHlsZSB1cmxcbi8vIG1hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jamZ5bDAza3AxdHVsMnNtZjV2MnRiZGQ0XG4vLyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycyBhbmQgZGFzaGVzIG9ubHkuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFN0eWxlVXJsKHVybCkge1xuICByZXR1cm4gdHlwZW9mIHVybCA9PT0gJ3N0cmluZycgJiYgQm9vbGVhbih1cmwubWF0Y2gobWFwVXJsUmcpIHx8IHVybC5tYXRjaChodHRwUmcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlRG93bmxvYWRVcmwoc3R5bGVVcmwsIGFjY2Vzc1Rva2VuLCBtYXBib3hBcGlVcmwpIHtcbiAgaWYgKHN0eWxlVXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgIHJldHVybiBzdHlsZVVybDtcbiAgfVxuXG4gIC8vIG1hcGJveDovL3N0eWxlcy9qY2tyL2NqaGNsMGx4djEzZGkycnBmb3l0ZGJkeWpcbiAgaWYgKHN0eWxlVXJsLnN0YXJ0c1dpdGgoJ21hcGJveDovL3N0eWxlcycpKSB7XG4gICAgY29uc3Qgc3R5bGVJZCA9IHN0eWxlVXJsLnJlcGxhY2UoJ21hcGJveDovL3N0eWxlcy8nLCAnJyk7XG5cbiAgICAvLyBodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9oZXNoYW4wMTMxL2NqZzFiZnVtbzFjd20ycmxyanhraW5mZ3c/cGx1Z2luTmFtZT1LZXBsZXJnbCZhY2Nlc3NfdG9rZW49PHRva2VuPlxuICAgIHJldHVybiBgJHttYXBib3hBcGlVcmwgfHxcbiAgICAgIERFRkFVTFRfTUFQQk9YX0FQSV9VUkx9L3N0eWxlcy92MS8ke3N0eWxlSWR9P3BsdWdpbk5hbWU9S2VwbGVyZ2wmYWNjZXNzX3Rva2VuPSR7YWNjZXNzVG9rZW59YDtcbiAgfVxuXG4gIC8vIHN0eWxlIHVybCBub3QgcmVjb2duaXplZFxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBzdGF0aWMgbWFwIGltYWdlIGZyb20gc3R5bGUgVXJsIHRvIGJlIHVzZWQgYXMgaWNvblxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW0uc3R5bGVVcmxcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbS5tYXBib3hBcGlBY2Nlc3NUb2tlblxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLm1hcGJveEFwaVVybFxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtLm1hcFN0YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW0ubWFwV1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLm1hcEhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlSW1hZ2VJY29uKHtcbiAgc3R5bGVVcmwsXG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICBtYXBib3hBcGlVcmwgPSBERUZBVUxUX01BUEJPWF9BUElfVVJMLFxuICBtYXBTdGF0ZSA9IHtcbiAgICBsb25naXR1ZGU6IC0xMjIuMzM5MSxcbiAgICBsYXRpdHVkZTogMzcuNzkyMixcbiAgICB6b29tOiA5XG4gIH0sXG4gIG1hcFcgPSA0MDAsXG4gIG1hcEggPSAzMDBcbn0pIHtcbiAgY29uc3Qgc3R5bGVJZCA9IHN0eWxlVXJsLnJlcGxhY2UoJ21hcGJveDovL3N0eWxlcy8nLCAnJyk7XG5cbiAgcmV0dXJuIChcbiAgICBgJHttYXBib3hBcGlVcmx9L3N0eWxlcy92MS8ke3N0eWxlSWR9L3N0YXRpYy9gICtcbiAgICBgJHttYXBTdGF0ZS5sb25naXR1ZGV9LCR7bWFwU3RhdGUubGF0aXR1ZGV9LCR7bWFwU3RhdGUuem9vbX0sMCwwL2AgK1xuICAgIGAke21hcFd9eCR7bWFwSH1gICtcbiAgICBgP2FjY2Vzc190b2tlbj0ke21hcGJveEFwaUFjY2Vzc1Rva2VufSZsb2dvPWZhbHNlJmF0dHJpYnV0aW9uPWZhbHNlYFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBib3hTdHlsZSwgc2NhbGUpIHtcbiAgaWYgKHNjYWxlICE9PSAxICYmIG1hcGJveFN0eWxlKSB7XG4gICAgY29uc3QgbGFiZWxMYXllckdyb3VwID0gREVGQVVMVF9MQVlFUl9HUk9VUFMuZmluZChsZyA9PiBsZy5zbHVnID09PSAnbGFiZWwnKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qge2ZpbHRlcjogbGFiZWxMYXllckZpbHRlcn0gPSBsYWJlbExheWVyR3JvdXA7XG4gICAgY29uc3Qgem9vbU9mZnNldCA9IE1hdGgubG9nMihzY2FsZSk7XG5cbiAgICBjb25zdCBjb3B5U3R5bGUgPSBjbG9uZERlZXAobWFwYm94U3R5bGUpO1xuICAgIChjb3B5U3R5bGUubGF5ZXJzIHx8IFtdKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgLy8gZWRpdCBtaW56b29tIGFuZCBtYXh6b29tXG4gICAgICBpZiAoZC5tYXh6b29tKSB7XG4gICAgICAgIGQubWF4em9vbSA9IE1hdGgubWF4KGQubWF4em9vbSArIHpvb21PZmZzZXQsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZC5taW56b29tKSB7XG4gICAgICAgIGQubWluem9vbSA9IE1hdGgubWF4KGQubWluem9vbSArIHpvb21PZmZzZXQsIDEpO1xuICAgICAgfVxuXG4gICAgICAvLyBlZGl0IHRleHQgc2l6ZVxuICAgICAgaWYgKGxhYmVsTGF5ZXJGaWx0ZXIoZCkpIHtcbiAgICAgICAgaWYgKGQubGF5b3V0ICYmIGQubGF5b3V0Wyd0ZXh0LXNpemUnXSAmJiBBcnJheS5pc0FycmF5KGQubGF5b3V0Wyd0ZXh0LXNpemUnXS5zdG9wcykpIHtcbiAgICAgICAgICBkLmxheW91dFsndGV4dC1zaXplJ10uc3RvcHMuZm9yRWFjaChzdG9wID0+IHtcbiAgICAgICAgICAgIC8vIHpvb21cbiAgICAgICAgICAgIHN0b3BbMF0gPSBNYXRoLm1heChzdG9wWzBdICsgem9vbU9mZnNldCwgMSk7XG4gICAgICAgICAgICAvLyBzaXplXG4gICAgICAgICAgICBzdG9wWzFdICo9IHNjYWxlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29weVN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIG1hcGJveFN0eWxlO1xufVxuXG4vKipcbiAqIFdoZW4gc3dpdGNoIHRvIGEgbmV3IHN0eWxlLCB0cnkgdG8ga2VlcCBjdXJyZW50IGxheWVyIGdyb3VwIHZpc2liaWxpdHlcbiAqIGJ5IG1lcmdpbmcgZGVmYXVsdCBhbmQgY3VycmVudFxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRMYXllckdyb3VwXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudExheWVyR3JvdXBcbiAqIEByZXR1cm4ge09iamVjdH0gbWVyZ2VkTGF5ZXJHcm91cHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJHcm91cFZpc2liaWxpdHkoZGVmYXVsdExheWVyR3JvdXAsIGN1cnJlbnRMYXllckdyb3VwKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkZWZhdWx0TGF5ZXJHcm91cCkucmVkdWNlKFxuICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKGN1cnJlbnRMYXllckdyb3VwLmhhc093blByb3BlcnR5KGtleSkgPyB7W2tleV06IGN1cnJlbnRMYXllckdyb3VwW2tleV19IDoge30pXG4gICAgfSksXG4gICAgZGVmYXVsdExheWVyR3JvdXBcbiAgKTtcbn1cbiJdfQ==