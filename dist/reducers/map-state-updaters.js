"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.toggleSplitMapUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.togglePerspectiveUpdater = exports.fitBoundsUpdater = exports.updateMapUpdater = exports.INITIAL_MAP_STATE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _projectionUtils = require("../utils/projection-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @typedef {import('./map-state-updaters').MapState} MapState */

/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore
var mapStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property pitch Default: `0`
 * @property bearing Default: `0`
 * @property latitude Default: `37.75043`
 * @property longitude Default: `-122.34679`
 * @property zoom Default: `9`
 * @property dragRotate Default: `false`
 * @property width Default: `800`
 * @property height Default: `800`
 * @property isSplit Default: `false`
 * @type {MapState}
 * @public
 */

var INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  isSplit: false
};
/* Updaters */

/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').updateMapUpdater}
 * @public
 */

exports.INITIAL_MAP_STATE = INITIAL_MAP_STATE;

var updateMapUpdater = function updateMapUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), action.payload || {});
};
/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').fitBoundsUpdater}
 * @public
 */


exports.updateMapUpdater = updateMapUpdater;

var fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var centerAndZoom = (0, _projectionUtils.getCenterAndZoomFromBounds)(action.payload, {
    width: state.width,
    height: state.height
  });

  if (!centerAndZoom) {
    // bounds is invalid
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    latitude: centerAndZoom.center[1],
    longitude: centerAndZoom.center[0]
  }, Number.isFinite(centerAndZoom.zoom) ? {
    zoom: centerAndZoom.zoom
  } : {});
};
/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').togglePerspectiveUpdater}
 * @public
 */


exports.fitBoundsUpdater = fitBoundsUpdater;

var togglePerspectiveUpdater = function togglePerspectiveUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }), {}, {
    dragRotate: !state.dragRotate
  });
};
/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.togglePerspectiveUpdater = togglePerspectiveUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
}; // consider case where you have a split map and user wants to reset

/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
      _ref$payload$config = _ref$payload.config,
      config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
      _ref$payload$options = _ref$payload.options,
      options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
      _ref$payload$bounds = _ref$payload.bounds,
      bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;

  var _ref2 = config || {},
      mapState = _ref2.mapState; // merged received mapstate with previous state


  var mergedState = _objectSpread(_objectSpread({}, state), mapState); // if center map
  // center map will override mapState config


  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  return _objectSpread(_objectSpread({}, mergedState), getMapDimForSplitMap(mergedState.isSplit, state));
};
/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @type {typeof import('./map-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isSplit: !state.isSplit
  }, getMapDimForSplitMap(!state.isSplit, state));
}; // Helpers


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }

  var width = state.isSplit && !isSplit ? // 3. state split: true - isSplit: false
  // double width
  state.width * 2 : // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsibWFwU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfTUFQX1NUQVRFIiwicGl0Y2giLCJiZWFyaW5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwiZHJhZ1JvdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNTcGxpdCIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJmaXRCb3VuZHNVcGRhdGVyIiwiY2VudGVyQW5kWm9vbSIsImNlbnRlciIsIk51bWJlciIsImlzRmluaXRlIiwidG9nZ2xlUGVyc3BlY3RpdmVVcGRhdGVyIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiaW5pdGlhbFN0YXRlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJjb25maWciLCJvcHRpb25zIiwiYm91bmRzIiwibWFwU3RhdGUiLCJtZXJnZWRTdGF0ZSIsImNlbnRlck1hcCIsImdldE1hcERpbUZvclNwbGl0TWFwIiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLEtBQUssRUFBRSxDQUR3QjtBQUUvQkMsRUFBQUEsT0FBTyxFQUFFLENBRnNCO0FBRy9CQyxFQUFBQSxRQUFRLEVBQUUsUUFIcUI7QUFJL0JDLEVBQUFBLFNBQVMsRUFBRSxDQUFDLFNBSm1CO0FBSy9CQyxFQUFBQSxJQUFJLEVBQUUsQ0FMeUI7QUFNL0JDLEVBQUFBLFVBQVUsRUFBRSxLQU5tQjtBQU8vQkMsRUFBQUEsS0FBSyxFQUFFLEdBUHdCO0FBUS9CQyxFQUFBQSxNQUFNLEVBQUUsR0FSdUI7QUFTL0JDLEVBQUFBLE9BQU8sRUFBRTtBQVRzQixDQUExQjtBQVlQOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEseUNBQzNCRCxLQUQyQixHQUUxQkMsTUFBTSxDQUFDQyxPQUFQLElBQWtCLEVBRlE7QUFBQSxDQUF6QjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNILEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqRCxNQUFNRyxhQUFhLEdBQUcsaURBQTJCSCxNQUFNLENBQUNDLE9BQWxDLEVBQTJDO0FBQy9ETixJQUFBQSxLQUFLLEVBQUVJLEtBQUssQ0FBQ0osS0FEa0Q7QUFFL0RDLElBQUFBLE1BQU0sRUFBRUcsS0FBSyxDQUFDSDtBQUZpRCxHQUEzQyxDQUF0Qjs7QUFJQSxNQUFJLENBQUNPLGFBQUwsRUFBb0I7QUFDbEI7QUFDQSxXQUFPSixLQUFQO0FBQ0Q7O0FBRUQseUNBQ0tBLEtBREw7QUFFRVIsSUFBQUEsUUFBUSxFQUFFWSxhQUFhLENBQUNDLE1BQWQsQ0FBcUIsQ0FBckIsQ0FGWjtBQUdFWixJQUFBQSxTQUFTLEVBQUVXLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixDQUFyQjtBQUhiLEtBTU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkgsYUFBYSxDQUFDVixJQUE5QixJQUFzQztBQUFDQSxJQUFBQSxJQUFJLEVBQUVVLGFBQWEsQ0FBQ1Y7QUFBckIsR0FBdEMsR0FBbUUsRUFOekU7QUFRRCxDQWxCTTtBQW9CUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFBUixLQUFLO0FBQUEsdURBQ3hDQSxLQUR3QyxHQUV4QztBQUNEVixJQUFBQSxLQUFLLEVBQUVVLEtBQUssQ0FBQ0wsVUFBTixHQUFtQixDQUFuQixHQUF1QixFQUQ3QjtBQUVESixJQUFBQSxPQUFPLEVBQUVTLEtBQUssQ0FBQ0wsVUFBTixHQUFtQixDQUFuQixHQUF1QjtBQUYvQixHQUZ3QztBQU0zQ0EsSUFBQUEsVUFBVSxFQUFFLENBQUNLLEtBQUssQ0FBQ0w7QUFOd0I7QUFBQSxDQUF0QztBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNYyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUFULEtBQUs7QUFBQSx1REFDckNYLGlCQURxQyxHQUVyQ1csS0FBSyxDQUFDVSxZQUYrQjtBQUd4Q0EsSUFBQUEsWUFBWSxFQUFFVixLQUFLLENBQUNVO0FBSG9CO0FBQUEsQ0FBbkMsQyxDQU1QOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQ3JDWCxLQURxQyxRQUdsQztBQUFBLDBCQURGRSxPQUNFO0FBQUEseUNBRFFVLE1BQ1I7QUFBQSxNQURRQSxNQUNSLG9DQURpQixFQUNqQjtBQUFBLDBDQURxQkMsT0FDckI7QUFBQSxNQURxQkEsT0FDckIscUNBRCtCLEVBQy9CO0FBQUEseUNBRG1DQyxNQUNuQztBQUFBLE1BRG1DQSxNQUNuQyxvQ0FENEMsSUFDNUM7O0FBQ0gsY0FBbUJGLE1BQU0sSUFBSSxFQUE3QjtBQUFBLE1BQU9HLFFBQVAsU0FBT0EsUUFBUCxDQURHLENBR0g7OztBQUNBLE1BQUlDLFdBQVcsbUNBQU9oQixLQUFQLEdBQWlCZSxRQUFqQixDQUFmLENBSkcsQ0FNSDtBQUNBOzs7QUFDQSxNQUFJRixPQUFPLENBQUNJLFNBQVIsSUFBcUJILE1BQXpCLEVBQWlDO0FBQy9CRSxJQUFBQSxXQUFXLEdBQUdiLGdCQUFnQixDQUFDYSxXQUFELEVBQWM7QUFDMUNkLE1BQUFBLE9BQU8sRUFBRVk7QUFEaUMsS0FBZCxDQUE5QjtBQUdEOztBQUVELHlDQUNLRSxXQURMLEdBR0tFLG9CQUFvQixDQUFDRixXQUFXLENBQUNsQixPQUFiLEVBQXNCRSxLQUF0QixDQUh6QjtBQUtELENBdEJNO0FBd0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNbUIscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBbkIsS0FBSztBQUFBLHlDQUNyQ0EsS0FEcUM7QUFFeENGLElBQUFBLE9BQU8sRUFBRSxDQUFDRSxLQUFLLENBQUNGO0FBRndCLEtBR3JDb0Isb0JBQW9CLENBQUMsQ0FBQ2xCLEtBQUssQ0FBQ0YsT0FBUixFQUFpQkUsS0FBakIsQ0FIaUI7QUFBQSxDQUFuQyxDLENBTVA7Ozs7O0FBQ08sU0FBU2tCLG9CQUFULENBQThCcEIsT0FBOUIsRUFBdUNFLEtBQXZDLEVBQThDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJQSxLQUFLLENBQUNGLE9BQU4sS0FBa0JBLE9BQXRCLEVBQStCO0FBQzdCLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQU1GLEtBQUssR0FDVEksS0FBSyxDQUFDRixPQUFOLElBQWlCLENBQUNBLE9BQWxCLEdBQ0k7QUFDQTtBQUNBRSxFQUFBQSxLQUFLLENBQUNKLEtBQU4sR0FBYyxDQUhsQixHQUlJO0FBQ0E7QUFDQUksRUFBQUEsS0FBSyxDQUFDSixLQUFOLEdBQWMsQ0FQcEI7QUFTQSxTQUFPO0FBQ0xBLElBQUFBLEtBQUssRUFBTEE7QUFESyxHQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2dldENlbnRlckFuZFpvb21Gcm9tQm91bmRzfSBmcm9tICd1dGlscy9wcm9qZWN0aW9uLXV0aWxzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykuTWFwU3RhdGV9IE1hcFN0YXRlICovXG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGBtYXBTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHttYXBTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICBtYXBTdGF0ZTogbWFwU3RhdGVVcGRhdGVycy5maXRCb3VuZHNVcGRhdGVyKFxuICogICAgICAgICAgICAgICBtYXBTdGF0ZSwge3BheWxvYWQ6IFsxMjcuMzQsIDMxLjA5LCAxMjcuNTYsIDMxLjU5XV19XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IG1hcFN0YXRlVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgbWFwU3RhdGVgXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgcGl0Y2ggRGVmYXVsdDogYDBgXG4gKiBAcHJvcGVydHkgYmVhcmluZyBEZWZhdWx0OiBgMGBcbiAqIEBwcm9wZXJ0eSBsYXRpdHVkZSBEZWZhdWx0OiBgMzcuNzUwNDNgXG4gKiBAcHJvcGVydHkgbG9uZ2l0dWRlIERlZmF1bHQ6IGAtMTIyLjM0Njc5YFxuICogQHByb3BlcnR5IHpvb20gRGVmYXVsdDogYDlgXG4gKiBAcHJvcGVydHkgZHJhZ1JvdGF0ZSBEZWZhdWx0OiBgZmFsc2VgXG4gKiBAcHJvcGVydHkgd2lkdGggRGVmYXVsdDogYDgwMGBcbiAqIEBwcm9wZXJ0eSBoZWlnaHQgRGVmYXVsdDogYDgwMGBcbiAqIEBwcm9wZXJ0eSBpc1NwbGl0IERlZmF1bHQ6IGBmYWxzZWBcbiAqIEB0eXBlIHtNYXBTdGF0ZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUFQX1NUQVRFID0ge1xuICBwaXRjaDogMCxcbiAgYmVhcmluZzogMCxcbiAgbGF0aXR1ZGU6IDM3Ljc1MDQzLFxuICBsb25naXR1ZGU6IC0xMjIuMzQ2NzksXG4gIHpvb206IDksXG4gIGRyYWdSb3RhdGU6IGZhbHNlLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgaXNTcGxpdDogZmFsc2Vcbn07XG5cbi8qIFVwZGF0ZXJzICovXG4vKipcbiAqIFVwZGF0ZSBtYXAgdmlld3BvcnRcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVNYXBVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTWFwVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgLi4uKGFjdGlvbi5wYXlsb2FkIHx8IHt9KVxufSk7XG5cbi8qKlxuICogRml0IG1hcCB2aWV3cG9ydCB0byBib3VuZHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS5maXRCb3VuZHNVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZml0Qm91bmRzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGNlbnRlckFuZFpvb20gPSBnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kcyhhY3Rpb24ucGF5bG9hZCwge1xuICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICBoZWlnaHQ6IHN0YXRlLmhlaWdodFxuICB9KTtcbiAgaWYgKCFjZW50ZXJBbmRab29tKSB7XG4gICAgLy8gYm91bmRzIGlzIGludmFsaWRcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxhdGl0dWRlOiBjZW50ZXJBbmRab29tLmNlbnRlclsxXSxcbiAgICBsb25naXR1ZGU6IGNlbnRlckFuZFpvb20uY2VudGVyWzBdLFxuICAgIC8vIEZvciBtYXJnaW5hbCBvciBpbnZhbGlkIGJvdW5kcywgem9vbSBtYXkgYmUgTmFOLiBNYWtlIHN1cmUgdG8gcHJvdmlkZSBhIHZhbGlkIHZhbHVlIGluIG9yZGVyXG4gICAgLy8gdG8gYXZvaWQgY29ycnVwdCBzdGF0ZSBhbmQgcG90ZW50aWFsIGNyYXNoZXMgYXMgem9vbSBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlclxuICAgIC4uLihOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IHt6b29tOiBjZW50ZXJBbmRab29tLnpvb219IDoge30pXG4gIH07XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBiZXR3ZWVuIDNkIGFuZCAyZCBtYXAuXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlUGVyc3BlY3RpdmVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlUGVyc3BlY3RpdmVVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIC4uLntcbiAgICBwaXRjaDogc3RhdGUuZHJhZ1JvdGF0ZSA/IDAgOiA1MCxcbiAgICBiZWFyaW5nOiBzdGF0ZS5kcmFnUm90YXRlID8gMCA6IDI0XG4gIH0sXG4gIGRyYWdSb3RhdGU6ICFzdGF0ZS5kcmFnUm90YXRlXG59KTtcblxuLyoqXG4gKiByZXNldCBtYXBTdGF0ZSB0byBpbml0aWFsIFN0YXRlXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJykucmVzZXRNYXBDb25maWdVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uSU5JVElBTF9NQVBfU1RBVEUsXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcbn0pO1xuXG4vLyBjb25zaWRlciBjYXNlIHdoZXJlIHlvdSBoYXZlIGEgc3BsaXQgbWFwIGFuZCB1c2VyIHdhbnRzIHRvIHJlc2V0XG4vKipcbiAqIFVwZGF0ZSBgbWFwU3RhdGVgIHRvIHByb3BhZ2F0ZSBhIG5ldyBjb25maWdcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtc3RhdGUtdXBkYXRlcnMnKS5yZWNlaXZlTWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKFxuICBzdGF0ZSxcbiAge3BheWxvYWQ6IHtjb25maWcgPSB7fSwgb3B0aW9ucyA9IHt9LCBib3VuZHMgPSBudWxsfX1cbikgPT4ge1xuICBjb25zdCB7bWFwU3RhdGV9ID0gY29uZmlnIHx8IHt9O1xuXG4gIC8vIG1lcmdlZCByZWNlaXZlZCBtYXBzdGF0ZSB3aXRoIHByZXZpb3VzIHN0YXRlXG4gIGxldCBtZXJnZWRTdGF0ZSA9IHsuLi5zdGF0ZSwgLi4ubWFwU3RhdGV9O1xuXG4gIC8vIGlmIGNlbnRlciBtYXBcbiAgLy8gY2VudGVyIG1hcCB3aWxsIG92ZXJyaWRlIG1hcFN0YXRlIGNvbmZpZ1xuICBpZiAob3B0aW9ucy5jZW50ZXJNYXAgJiYgYm91bmRzKSB7XG4gICAgbWVyZ2VkU3RhdGUgPSBmaXRCb3VuZHNVcGRhdGVyKG1lcmdlZFN0YXRlLCB7XG4gICAgICBwYXlsb2FkOiBib3VuZHNcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4ubWVyZ2VkU3RhdGUsXG4gICAgLy8gdXBkYXRlIHdpZHRoIGlmIGBpc1NwbGl0YCBoYXMgY2hhbmdlZFxuICAgIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKG1lcmdlZFN0YXRlLmlzU3BsaXQsIHN0YXRlKVxuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGUgYmV0d2VlbiBvbmUgb3Igc3BsaXQgbWFwc1xuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL21hcC1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZVNwbGl0TWFwVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpc1NwbGl0OiAhc3RhdGUuaXNTcGxpdCxcbiAgLi4uZ2V0TWFwRGltRm9yU3BsaXRNYXAoIXN0YXRlLmlzU3BsaXQsIHN0YXRlKVxufSk7XG5cbi8vIEhlbHBlcnNcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBEaW1Gb3JTcGxpdE1hcChpc1NwbGl0LCBzdGF0ZSkge1xuICAvLyBjYXNlczpcbiAgLy8gMS4gc3RhdGUgc3BsaXQ6IHRydWUgLSBpc1NwbGl0OiB0cnVlXG4gIC8vIGRvIG5vdGhpbmdcbiAgLy8gMi4gc3RhdGUgc3BsaXQ6IGZhbHNlIC0gaXNTcGxpdDogZmFsc2VcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAoc3RhdGUuaXNTcGxpdCA9PT0gaXNTcGxpdCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IHdpZHRoID1cbiAgICBzdGF0ZS5pc1NwbGl0ICYmICFpc1NwbGl0XG4gICAgICA/IC8vIDMuIHN0YXRlIHNwbGl0OiB0cnVlIC0gaXNTcGxpdDogZmFsc2VcbiAgICAgICAgLy8gZG91YmxlIHdpZHRoXG4gICAgICAgIHN0YXRlLndpZHRoICogMlxuICAgICAgOiAvLyA0LiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiB0cnVlXG4gICAgICAgIC8vIHNwbGl0IHdpZHRoXG4gICAgICAgIHN0YXRlLndpZHRoIC8gMjtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoXG4gIH07XG59XG4iXX0=