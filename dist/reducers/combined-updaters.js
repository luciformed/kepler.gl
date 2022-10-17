"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDataToMapComposed = exports.loadFilesSuccessUpdater = exports.addDataToMapUpdater = exports.defaultAddDataToMapOptions = exports.isValidConfig = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uiStateUpdaters = require("./ui-state-updaters");

var _visStateUpdaters = require("./vis-state-updaters");

var _mapStateUpdaters = require("./map-state-updaters");

var _mapStyleUpdaters = require("./map-style-updaters");

var _dataUtils = require("../utils/data-utils");

var _utils = require("../utils/utils");

var _fileHandler = require("../processors/file-handler");

var _composerHelpers = require("./composer-helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Some actions will affect the entire kepler.lg instance state.
 * The updaters for these actions is exported as `combinedUpdaters`. These updater take the entire instance state
 * as the first argument. Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {combinedUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // add data to map after receiving data from remote sources
 *    case 'LOAD_REMOTE_RESOURCE_SUCCESS':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          // pass in kepler.gl instance state to combinedUpdaters
 *          map:  combinedUpdaters.addDataToMapUpdater(
 *           state.keplerGl.map,
 *           {
 *             payload: {
 *               datasets: action.datasets,
 *               options: {readOnly: true},
 *               config: action.config
 *              }
 *            }
 *          )
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
var combinedUpdaters = null;
/* eslint-enable no-unused-vars */

var isValidConfig = function isValidConfig(config) {
  return (0, _utils.isPlainObject)(config) && (0, _utils.isPlainObject)(config.config) && config.version;
};

exports.isValidConfig = isValidConfig;
var defaultAddDataToMapOptions = {
  centerMap: true,
  keepExistingConfig: false,
  autoCreateLayers: true
};
/**
 * Combine data and full configuration update in a single action
 *
 * @memberof combinedUpdaters
 * @param {Object} state kepler.gl instance state, containing all subreducer state
 * @param {Object} action
 * @param {Object} action.payload `{datasets, options, config}`
 * @param action.payload.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param [action.payload.options] option object `{centerMap: true}`
 * @param [action.payload.config] map config
 * @param [action.payload.info] map info contains title and description
 * @returns nextState
 *
 * @typedef {Object} Dataset
 * @property info -info of a dataset
 * @property info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @property info.label - A display name of this dataset
 * @property data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @property data.fields - ***required** Array of fields,
 * @property data.fields.name - ***required** Name of the field,
 * @property data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @type {typeof import('./combined-updaters').addDataToMapUpdater}
 * @public
 */

exports.defaultAddDataToMapOptions = defaultAddDataToMapOptions;

var addDataToMapUpdater = function addDataToMapUpdater(state, _ref) {
  var payload = _ref.payload;
  var datasets = payload.datasets,
      config = payload.config,
      info = payload.info;

  var options = _objectSpread(_objectSpread({}, defaultAddDataToMapOptions), payload.options);

  var parsedConfig = config;

  if (isValidConfig(config)) {
    // if passed in saved config
    parsedConfig = state.visState.schema.parseSavedConfig(config);
  }

  var oldLayers = state.visState.layers;

  var filterNewlyAddedLayers = function filterNewlyAddedLayers(layers) {
    return layers.filter(function (nl) {
      return !oldLayers.find(function (ol) {
        return ol === nl;
      });
    });
  }; // Returns undefined if not found, to make typescript happy


  var findMapBoundsIfCentered = function findMapBoundsIfCentered(layers) {
    var bounds = options.centerMap && (0, _dataUtils.findMapBounds)(layers);
    return bounds ? bounds : undefined;
  };

  return (0, _composerHelpers.compose_)([(0, _composerHelpers.pick_)('visState')((0, _composerHelpers.apply_)(_visStateUpdaters.updateVisDataUpdater, {
    datasets: datasets,
    options: options,
    config: parsedConfig
  })), (0, _composerHelpers.if_)(info, (0, _composerHelpers.pick_)('visState')((0, _composerHelpers.apply_)(_visStateUpdaters.setMapInfoUpdater, {
    info: info
  }))), (0, _composerHelpers.with_)(function (_ref2) {
    var visState = _ref2.visState;
    return (0, _composerHelpers.pick_)('mapState')((0, _composerHelpers.apply_)(_mapStateUpdaters.receiveMapConfigUpdater, (0, _composerHelpers.payload_)({
      config: parsedConfig,
      options: options,
      bounds: findMapBoundsIfCentered(filterNewlyAddedLayers(visState.layers))
    })));
  }), (0, _composerHelpers.pick_)('mapStyle')((0, _composerHelpers.apply_)(_mapStyleUpdaters.receiveMapConfigUpdater, (0, _composerHelpers.payload_)({
    config: parsedConfig,
    options: options
  }))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.apply_)(_uiStateUpdaters.loadFilesSuccessUpdater, (0, _composerHelpers.payload_)(null))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.apply_)(_uiStateUpdaters.toggleModalUpdater, (0, _composerHelpers.payload_)(null))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.merge_)(options.hasOwnProperty('readOnly') ? {
    readOnly: options.readOnly
  } : {}))])(state);
};
/**
 * @type {typeof import('./combined-updaters').loadFilesSuccessUpdater}
 */


exports.addDataToMapUpdater = addDataToMapUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state, action) {
  // still more to load
  var payloads = (0, _fileHandler.filesToDataPayload)(action.result);
  var nextState = (0, _composerHelpers.compose_)([(0, _composerHelpers.pick_)('visState')((0, _composerHelpers.merge_)({
    fileLoading: false,
    fileLoadingProgress: {}
  }))])(state); // make multiple add data to map calls

  var stateWithData = (0, _composerHelpers.compose_)(payloads.map(function (p) {
    return (0, _composerHelpers.apply_)(addDataToMapUpdater, (0, _composerHelpers.payload_)(p));
  }))(nextState);
  return stateWithData;
};

exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;
var addDataToMapComposed = addDataToMapUpdater;
exports.addDataToMapComposed = addDataToMapComposed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9jb21iaW5lZC11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJjb21iaW5lZFVwZGF0ZXJzIiwiaXNWYWxpZENvbmZpZyIsImNvbmZpZyIsInZlcnNpb24iLCJkZWZhdWx0QWRkRGF0YVRvTWFwT3B0aW9ucyIsImNlbnRlck1hcCIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImF1dG9DcmVhdGVMYXllcnMiLCJhZGREYXRhVG9NYXBVcGRhdGVyIiwic3RhdGUiLCJwYXlsb2FkIiwiZGF0YXNldHMiLCJpbmZvIiwib3B0aW9ucyIsInBhcnNlZENvbmZpZyIsInZpc1N0YXRlIiwic2NoZW1hIiwicGFyc2VTYXZlZENvbmZpZyIsIm9sZExheWVycyIsImxheWVycyIsImZpbHRlck5ld2x5QWRkZWRMYXllcnMiLCJmaWx0ZXIiLCJubCIsImZpbmQiLCJvbCIsImZpbmRNYXBCb3VuZHNJZkNlbnRlcmVkIiwiYm91bmRzIiwidW5kZWZpbmVkIiwidmlzU3RhdGVVcGRhdGVWaXNEYXRhVXBkYXRlciIsInNldE1hcEluZm9VcGRhdGVyIiwic3RhdGVNYXBDb25maWdVcGRhdGVyIiwic3R5bGVNYXBDb25maWdVcGRhdGVyIiwidWlTdGF0ZUxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIiwidG9nZ2xlTW9kYWxVcGRhdGVyIiwiaGFzT3duUHJvcGVydHkiLCJyZWFkT25seSIsImxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIiwiYWN0aW9uIiwicGF5bG9hZHMiLCJyZXN1bHQiLCJuZXh0U3RhdGUiLCJmaWxlTG9hZGluZyIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJzdGF0ZVdpdGhEYXRhIiwibWFwIiwicCIsImFkZERhdGFUb01hcENvbXBvc2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFJQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxtQkFBbUIsRUFBRTtBQUZoQixHQUFQLENBREYsQ0FEeUIsQ0FBVCxFQU9makMsS0FQZSxDQUFsQixDQUh3RCxDQVd4RDs7QUFDQSxNQUFNa0MsYUFBYSxHQUFHLCtCQUFTTCxRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFBQyxDQUFDO0FBQUEsV0FBSSw2QkFBT3JDLG1CQUFQLEVBQTRCLCtCQUFTcUMsQ0FBVCxDQUE1QixDQUFKO0FBQUEsR0FBZCxDQUFULEVBQ3BCTCxTQURvQixDQUF0QjtBQUdBLFNBQU9HLGFBQVA7QUFDRCxDQWhCTTs7O0FBa0JBLElBQU1HLG9CQUFvQixHQUFHdEMsbUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtcbiAgdG9nZ2xlTW9kYWxVcGRhdGVyLFxuICBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlciBhcyB1aVN0YXRlTG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXJcbn0gZnJvbSAnLi91aS1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge1xuICB1cGRhdGVWaXNEYXRhVXBkYXRlciBhcyB2aXNTdGF0ZVVwZGF0ZVZpc0RhdGFVcGRhdGVyLFxuICBzZXRNYXBJbmZvVXBkYXRlclxufSBmcm9tICcuL3Zpcy1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge3JlY2VpdmVNYXBDb25maWdVcGRhdGVyIGFzIHN0YXRlTWFwQ29uZmlnVXBkYXRlcn0gZnJvbSAnLi9tYXAtc3RhdGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtyZWNlaXZlTWFwQ29uZmlnVXBkYXRlciBhcyBzdHlsZU1hcENvbmZpZ1VwZGF0ZXJ9IGZyb20gJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJztcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge2lzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7ZmlsZXNUb0RhdGFQYXlsb2FkfSBmcm9tICdwcm9jZXNzb3JzL2ZpbGUtaGFuZGxlcic7XG5pbXBvcnQge3BheWxvYWRfLCBhcHBseV8sIHdpdGhfLCBpZl8sIGNvbXBvc2VfLCBtZXJnZV8sIHBpY2tffSBmcm9tICcuL2NvbXBvc2VyLWhlbHBlcnMnO1xuXG4vLyBjb21wb3NlIGFjdGlvbiB0byBhcHBseSByZXN1bHQgbXVsdGlwbGUgcmVkdWNlcnMsIHdpdGggdGhlIG91dHB1dCBvZiBvbmVcblxuLyoqXG4gKiBTb21lIGFjdGlvbnMgd2lsbCBhZmZlY3QgdGhlIGVudGlyZSBrZXBsZXIubGcgaW5zdGFuY2Ugc3RhdGUuXG4gKiBUaGUgdXBkYXRlcnMgZm9yIHRoZXNlIGFjdGlvbnMgaXMgZXhwb3J0ZWQgYXMgYGNvbWJpbmVkVXBkYXRlcnNgLiBUaGVzZSB1cGRhdGVyIHRha2UgdGhlIGVudGlyZSBpbnN0YW5jZSBzdGF0ZVxuICogYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge2NvbWJpbmVkVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBhZGQgZGF0YSB0byBtYXAgYWZ0ZXIgcmVjZWl2aW5nIGRhdGEgZnJvbSByZW1vdGUgc291cmNlc1xuICogICAgY2FzZSAnTE9BRF9SRU1PVEVfUkVTT1VSQ0VfU1VDQ0VTUyc6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgLy8gcGFzcyBpbiBrZXBsZXIuZ2wgaW5zdGFuY2Ugc3RhdGUgdG8gY29tYmluZWRVcGRhdGVyc1xuICogICAgICAgICAgbWFwOiAgY29tYmluZWRVcGRhdGVycy5hZGREYXRhVG9NYXBVcGRhdGVyKFxuICogICAgICAgICAgIHN0YXRlLmtlcGxlckdsLm1hcCxcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gKiAgICAgICAgICAgICAgIGRhdGFzZXRzOiBhY3Rpb24uZGF0YXNldHMsXG4gKiAgICAgICAgICAgICAgIG9wdGlvbnM6IHtyZWFkT25seTogdHJ1ZX0sXG4gKiAgICAgICAgICAgICAgIGNvbmZpZzogYWN0aW9uLmNvbmZpZ1xuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgfVxuICogICAgICAgICAgKVxuICogICAgICAgIH1cbiAqICAgICAgfTtcbiAqICB9XG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICogfTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGNvbWJpbmVkVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZENvbmZpZyA9IGNvbmZpZyA9PlxuICBpc1BsYWluT2JqZWN0KGNvbmZpZykgJiYgaXNQbGFpbk9iamVjdChjb25maWcuY29uZmlnKSAmJiBjb25maWcudmVyc2lvbjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zID0ge1xuICBjZW50ZXJNYXA6IHRydWUsXG4gIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2UsXG4gIGF1dG9DcmVhdGVMYXllcnM6IHRydWVcbn07XG5cbi8qKlxuICogQ29tYmluZSBkYXRhIGFuZCBmdWxsIGNvbmZpZ3VyYXRpb24gdXBkYXRlIGluIGEgc2luZ2xlIGFjdGlvblxuICpcbiAqIEBtZW1iZXJvZiBjb21iaW5lZFVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUga2VwbGVyLmdsIGluc3RhbmNlIHN0YXRlLCBjb250YWluaW5nIGFsbCBzdWJyZWR1Y2VyIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQgYHtkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnfWBcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIFthY3Rpb24ucGF5bG9hZC5vcHRpb25zXSBvcHRpb24gb2JqZWN0IGB7Y2VudGVyTWFwOiB0cnVlfWBcbiAqIEBwYXJhbSBbYWN0aW9uLnBheWxvYWQuY29uZmlnXSBtYXAgY29uZmlnXG4gKiBAcGFyYW0gW2FjdGlvbi5wYXlsb2FkLmluZm9dIG1hcCBpbmZvIGNvbnRhaW5zIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gRGF0YXNldFxuICogQHByb3BlcnR5IGluZm8gLWluZm8gb2YgYSBkYXRhc2V0XG4gKiBAcHJvcGVydHkgaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cbiAqIEBwcm9wZXJ0eSBpbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcHJvcGVydHkgZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEBwcm9wZXJ0eSBkYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxuICogQHByb3BlcnR5IGRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxuICogQHByb3BlcnR5IGRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9jb21iaW5lZC11cGRhdGVycycpLmFkZERhdGFUb01hcFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREYXRhVG9NYXBVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZH0pID0+IHtcbiAgY29uc3Qge2RhdGFzZXRzLCBjb25maWcsIGluZm99ID0gcGF5bG9hZDtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC4uLmRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zLFxuICAgIC4uLnBheWxvYWQub3B0aW9uc1xuICB9O1xuXG4gIGxldCBwYXJzZWRDb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGlzVmFsaWRDb25maWcoY29uZmlnKSkge1xuICAgIC8vIGlmIHBhc3NlZCBpbiBzYXZlZCBjb25maWdcbiAgICBwYXJzZWRDb25maWcgPSBzdGF0ZS52aXNTdGF0ZS5zY2hlbWEucGFyc2VTYXZlZENvbmZpZyhjb25maWcpO1xuICB9XG4gIGNvbnN0IG9sZExheWVycyA9IHN0YXRlLnZpc1N0YXRlLmxheWVycztcbiAgY29uc3QgZmlsdGVyTmV3bHlBZGRlZExheWVycyA9IGxheWVycyA9PiBsYXllcnMuZmlsdGVyKG5sID0+ICFvbGRMYXllcnMuZmluZChvbCA9PiBvbCA9PT0gbmwpKTtcblxuICAvLyBSZXR1cm5zIHVuZGVmaW5lZCBpZiBub3QgZm91bmQsIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweVxuICBjb25zdCBmaW5kTWFwQm91bmRzSWZDZW50ZXJlZCA9IGxheWVycyA9PiB7XG4gICAgY29uc3QgYm91bmRzID0gb3B0aW9ucy5jZW50ZXJNYXAgJiYgZmluZE1hcEJvdW5kcyhsYXllcnMpO1xuICAgIHJldHVybiBib3VuZHMgPyBib3VuZHMgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgcmV0dXJuIGNvbXBvc2VfKFtcbiAgICBwaWNrXygndmlzU3RhdGUnKShcbiAgICAgIGFwcGx5Xyh2aXNTdGF0ZVVwZGF0ZVZpc0RhdGFVcGRhdGVyLCB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBjb25maWc6IHBhcnNlZENvbmZpZ1xuICAgICAgfSlcbiAgICApLFxuXG4gICAgaWZfKGluZm8sIHBpY2tfKCd2aXNTdGF0ZScpKGFwcGx5XyhzZXRNYXBJbmZvVXBkYXRlciwge2luZm99KSkpLFxuXG4gICAgd2l0aF8oKHt2aXNTdGF0ZX0pID0+XG4gICAgICBwaWNrXygnbWFwU3RhdGUnKShcbiAgICAgICAgYXBwbHlfKFxuICAgICAgICAgIHN0YXRlTWFwQ29uZmlnVXBkYXRlcixcbiAgICAgICAgICBwYXlsb2FkXyh7XG4gICAgICAgICAgICBjb25maWc6IHBhcnNlZENvbmZpZyxcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBib3VuZHM6IGZpbmRNYXBCb3VuZHNJZkNlbnRlcmVkKGZpbHRlck5ld2x5QWRkZWRMYXllcnModmlzU3RhdGUubGF5ZXJzKSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKSxcblxuICAgIHBpY2tfKCdtYXBTdHlsZScpKGFwcGx5XyhzdHlsZU1hcENvbmZpZ1VwZGF0ZXIsIHBheWxvYWRfKHtjb25maWc6IHBhcnNlZENvbmZpZywgb3B0aW9uc30pKSksXG5cbiAgICBwaWNrXygndWlTdGF0ZScpKGFwcGx5Xyh1aVN0YXRlTG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIsIHBheWxvYWRfKG51bGwpKSksXG5cbiAgICBwaWNrXygndWlTdGF0ZScpKGFwcGx5Xyh0b2dnbGVNb2RhbFVwZGF0ZXIsIHBheWxvYWRfKG51bGwpKSksXG5cbiAgICBwaWNrXygndWlTdGF0ZScpKG1lcmdlXyhvcHRpb25zLmhhc093blByb3BlcnR5KCdyZWFkT25seScpID8ge3JlYWRPbmx5OiBvcHRpb25zLnJlYWRPbmx5fSA6IHt9KSlcbiAgXSkoc3RhdGUpO1xufTtcblxuLyoqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9jb21iaW5lZC11cGRhdGVycycpLmxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyfVxuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBzdGlsbCBtb3JlIHRvIGxvYWRcbiAgY29uc3QgcGF5bG9hZHMgPSBmaWxlc1RvRGF0YVBheWxvYWQoYWN0aW9uLnJlc3VsdCk7XG4gIGNvbnN0IG5leHRTdGF0ZSA9IGNvbXBvc2VfKFtcbiAgICBwaWNrXygndmlzU3RhdGUnKShcbiAgICAgIG1lcmdlXyh7XG4gICAgICAgIGZpbGVMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzczoge31cbiAgICAgIH0pXG4gICAgKVxuICBdKShzdGF0ZSk7XG4gIC8vIG1ha2UgbXVsdGlwbGUgYWRkIGRhdGEgdG8gbWFwIGNhbGxzXG4gIGNvbnN0IHN0YXRlV2l0aERhdGEgPSBjb21wb3NlXyhwYXlsb2Fkcy5tYXAocCA9PiBhcHBseV8oYWRkRGF0YVRvTWFwVXBkYXRlciwgcGF5bG9hZF8ocCkpKSkoXG4gICAgbmV4dFN0YXRlXG4gICk7XG4gIHJldHVybiBzdGF0ZVdpdGhEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERhdGFUb01hcENvbXBvc2VkID0gYWRkRGF0YVRvTWFwVXBkYXRlcjtcbiJdfQ==