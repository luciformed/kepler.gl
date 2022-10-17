"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateWithLayerAndData = updateStateWithLayerAndData;
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerDataIdChangeUpdater = layerDataIdChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterAnimationTimeUpdater = setFilterAnimationTimeUpdater;
exports.setFilterAnimationWindowUpdater = setFilterAnimationWindowUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.renameDatasetUpdater = renameDatasetUpdater;
exports.loadFileStepSuccessUpdater = loadFileStepSuccessUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.processFileContentUpdater = processFileContentUpdater;
exports.parseProgress = parseProgress;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.initialFileLoadingProgress = initialFileLoadingProgress;
exports.updateFileLoadingProgressUpdater = updateFileLoadingProgressUpdater;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setFilterAnimationTimeConfigUpdater = setFilterAnimationTimeConfigUpdater;
exports.setLayerAnimationTimeConfigUpdater = setLayerAnimationTimeConfigUpdater;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.nextFileBatchUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.duplicateLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.enlargeFilterUpdater = exports.updateLayerAnimationSpeedUpdater = exports.setLayerAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleLayerAnimationUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _dataUtils = require("../utils/data-utils");

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _keplerTable = require("../utils/table-utils/kepler-table");

var _utils = require("../utils/utils");

var _layerUtils = require("../utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _splitMapUtils = require("../utils/split-map-utils");

var _layers = require("../layers");

var _layerFactory = require("../layers/layer-factory");

var _defaultSettings = require("../constants/default-settings");

var _composerHelpers = require("./composer-helpers");

var _schemas = _interopRequireDefault(require("../schemas"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// type imports

/** @typedef {import('./vis-state-updaters').Field} Field */

/** @typedef {import('./vis-state-updaters').Filter} Filter */

/** @typedef {import('./vis-state-updaters').KeplerTable} KeplerTable */

/** @typedef {import('./vis-state-updaters').VisState} VisState */

/** @typedef {import('./vis-state-updaters').Datasets} Datasets */

/** @typedef {import('./vis-state-updaters').AnimationConfig} AnimationConfig */

/** @typedef {import('./vis-state-updaters').Editor} Editor */
// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
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

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/** @type {AnimationConfig} */

var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1,
  isAnimating: false,
  timeFormat: null,
  timezone: null,
  defaultTimeFormat: null
};
/** @type {Editor} */

exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _defaultSettings.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {VisState}
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  splitMapsToBeMerged: [],
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR,
  fileLoading: false,
  fileLoadingProgress: {},
  loaders: [],
  loadOptions: {},
  // visStateMergers
  mergers: _visStateMerger.VIS_STATE_MERGERS,
  // kepler schemas
  schema: _schemas["default"]
};
/**
 * Update state with updated layer and layerData
 * @type {typeof import('./vis-state-updaters').updateStateWithLayerAndData}
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      splitMaps: layer.config.isVisible ? (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerConfigChangeUpdater}
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);

  if (typeof action.newConfig.dataId === 'string') {
    var _action$newConfig = action.newConfig,
        dataId = _action$newConfig.dataId,
        restConfig = (0, _objectWithoutProperties2["default"])(_action$newConfig, ["dataId"]);
    var stateWithDataId = layerDataIdChangeUpdater(state, {
      oldLayer: oldLayer,
      newConfig: {
        dataId: dataId
      }
    });
    var nextLayer = stateWithDataId.layers.find(function (l) {
      return l.id === oldLayer.id;
    });
    return nextLayer && Object.keys(restConfig).length ? layerConfigChangeUpdater(stateWithDataId, {
      oldLayer: nextLayer,
      newConfig: restConfig
    }) : stateWithDataId;
  }

  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData; // let newLayer;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    layerData = updateLayerDataResult.layerData;
    newLayer = updateLayerDataResult.layer;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_layerFactory.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread(_objectSpread({}, _layerFactory.DEFAULT_TEXT_LABEL), {}, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread(_objectSpread({}, tl), {}, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTextLabelChangeUpdater}
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_layerFactory.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}

function validateExistingLayerWithData(dataset, layerClasses, layer) {
  var loadedLayer = (0, _visStateMerger.serializeLayer)(layer);
  return (0, _visStateMerger.validateLayerWithData)(dataset, loadedLayer, layerClasses, {
    allowEmptyColumn: true
  });
}
/**
 * Update layer config dataId
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerDataIdChangeUpdater}
 * @returns nextState
 */


function layerDataIdChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig;
  var dataId = newConfig.dataId;

  if (!oldLayer || !state.datasets[dataId]) {
    return state;
  }

  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig({
    dataId: dataId
  }); // this may happen when a layer is new (type: null and no columns) but it's not ready to be saved

  if (newLayer.isValidToSave()) {
    var validated = validateExistingLayerWithData(state.datasets[dataId], state.layerClasses, newLayer); // if cant validate it with data create a new one

    if (!validated) {
      newLayer = new state.layerClasses[oldLayer.type]({
        dataId: dataId,
        id: oldLayer.id
      });
    } else {
      newLayer = validated;
    }
  }

  newLayer = newLayer.updateLayerConfig({
    isVisible: oldLayer.config.isVisible,
    isConfigActive: true
  });
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state, undefined),
      layerData = _calculateLayerData.layerData,
      layer = _calculateLayerData.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerTypeChangeUpdater}
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings);
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  var newState = updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, newState), {}, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread(_objectSpread({}, settings), {}, {
          layers: _objectSpread(_objectSpread({}, otherLayers), {}, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisualChannelChangeUpdater}
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData3.layerData,
      layer = _calculateLayerData3.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerVisConfigChangeUpdater}
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread(_objectSpread({}, oldLayer.config.visConfig), action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData4.layerData,
        layer = _calculateLayerData4.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationTimeUpdater}
 * @public
 */


function setFilterAnimationTimeUpdater(state, action) {
  return setFilterUpdater(state, action);
}
/**
 * Update filter animation window
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterAnimationWindowUpdater}
 * @public
 */


function setFilterAnimationWindowUpdater(state, _ref2) {
  var id = _ref2.id,
      animationWindow = _ref2.animationWindow;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f) {
      return f.id === id ? _objectSpread(_objectSpread({}, f), {}, {
        animationWindow: animationWindow
      }) : f;
    })
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterUpdater}
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _filterUtils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.updateFilterDataId)(dataId);
      break;

    case _filterUtils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _filterUtils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _gpuFilterUtils.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _gpuFilterUtils.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _filterUtils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread(_objectSpread({}, newFilter), {}, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.enlarged = false;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _filterUtils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFilterPlotUpdater}
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref3) {
  var idx = _ref3.idx,
      newProp = _ref3.newProp,
      _ref3$valueIndex = _ref3.valueIndex,
      valueIndex = _ref3$valueIndex === void 0 ? 0 : _ref3$valueIndex;

  var newFilter = _objectSpread(_objectSpread({}, state.filters[idx]), newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread(_objectSpread(_objectSpread({}, newFilter), (0, _filterUtils.getFilterPlot)(_objectSpread(_objectSpread({}, newFilter), {}, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]])), {}, {
        plotType: plotType
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addFilterUpdater}
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread(_objectSpread({}, state), {}, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerColorUIChangeUpdater}
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref4) {
  var oldLayer = _ref4.oldLayer,
      prop = _ref4.prop,
      newConfig = _ref4.newConfig;
  var oldVixConfig = oldLayer.config.visConfig[prop];
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  var newVisConfig = newLayer.config.visConfig[prop];

  if (oldVixConfig !== newVisConfig) {
    return layerVisConfigChangeUpdater(state, {
      oldLayer: oldLayer,
      newVisConfig: (0, _defineProperty2["default"])({}, prop, newVisConfig)
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterAnimationUpdater}
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerAnimationUpdater}
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var toggleLayerAnimationUpdater = function toggleLayerAnimationUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      isAnimating: !state.animationConfig.isAnimating
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateFilterAnimationSpeedUpdater}
 * @public
 */


exports.toggleLayerAnimationUpdater = toggleLayerAnimationUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setLayerAnimationTimeUpdater}
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var setLayerAnimationTimeUpdater = function setLayerAnimationTimeUpdater(state, _ref5) {
  var value = _ref5.value;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerAnimationSpeedUpdater}
 * @public
 *
 */


exports.setLayerAnimationTimeUpdater = setLayerAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref6) {
  var speed = _ref6.speed;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').enlargeFilterUpdater}
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        enlarged: !f.enlarged
      }) : f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleFilterFeatureUpdater}
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);

  var newFilter = _objectSpread(_objectSpread({}, filter), {}, {
    value: (0, _filterUtils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: Object.assign((0, _toConsumableArray2["default"])(state.filters), (0, _defineProperty2["default"])({}, action.idx, newFilter))
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeFilterUpdater}
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _filterUtils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _filterUtils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread(_objectSpread({}, state.editor), {}, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').addLayerUpdater}
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var newLayer;
  var newLayerData;

  if (action.config) {
    newLayer = (0, _visStateMerger.createLayerFromConfig)(state, action.config);

    if (!newLayer) {
      _window.console.warn('Failed to create layer from config, it usually means the config is not be in correct format', action.config);

      return state;
    }

    var result = (0, _layerUtils.calculateLayerData)(newLayer, state);
    newLayer = result.layer;
    newLayerData = result.layerData;
  } else {
    // create an empty layer with the first available dataset
    var defaultDataset = Object.keys(state.datasets)[0];
    newLayer = new _layers.Layer({
      isVisible: true,
      isConfigActive: true,
      dataId: defaultDataset
    });
    newLayerData = {};
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [newLayerData]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeLayerUpdater}
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref7) {
  var idx = _ref7.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _splitMapUtils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
};
/**
 * duplicate layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').duplicateLayerUpdater}
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var duplicateLayerUpdater = function duplicateLayerUpdater(state, _ref8) {
  var idx = _ref8.idx;
  var layers = state.layers;
  var original = state.layers[idx];
  var originalLayerOrderIdx = state.layerOrder.findIndex(function (i) {
    return i === idx;
  });

  if (!original) {
    _window.console.warn("layer.".concat(idx, " is undefined"));

    return state;
  }

  var newLabel = "Copy of ".concat(original.config.label);
  var postfix = 0; // eslint-disable-next-line no-loop-func

  while (layers.find(function (l) {
    return l.config.label === newLabel;
  })) {
    newLabel = "Copy of ".concat(original.config.label, " ").concat(++postfix);
  } // collect layer config from original


  var loadedLayer = (0, _visStateMerger.serializeLayer)(original); // assign new id and label to copied layer

  if (!loadedLayer.config) {
    return state;
  }

  loadedLayer.config.label = newLabel;
  loadedLayer.id = (0, _utils.generateHashId)(_layers.LAYER_ID_LENGTH); // add layer to state

  var nextState = addLayerUpdater(state, {
    config: loadedLayer
  }); // new added layer are at the end, move it to be on top of original layer

  var newLayerOrderIdx = nextState.layerOrder.length - 1;
  var newLayerOrder = (0, _utils.arrayInsert)(nextState.layerOrder.slice(0, newLayerOrderIdx), originalLayerOrderIdx, newLayerOrderIdx);
  nextState = _objectSpread(_objectSpread({}, nextState), {}, {
    layerOrder: newLayerOrder
  });
  return updateAnimationDomain(nextState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').reorderLayerUpdater}
 * @public
 */


exports.duplicateLayerUpdater = duplicateLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref9) {
  var order = _ref9.order;
  return _objectSpread(_objectSpread({}, state), {}, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').removeDatasetUpdater}
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      // @ts-ignore
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref10, idx) {
    var currentState = _ref10.newState,
        indexCounter = _ref10.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: _objectSpread(_objectSpread({}, state), {}, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, tooltip), {}, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread(_objectSpread({}, newState), {}, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateLayerBlendingUpdater}
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').showDatasetTableUpdater}
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').resetMapConfigUpdater}
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').receiveMapConfigUpdater}
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      _ref11$payload$config = _ref11$payload.config,
      config = _ref11$payload$config === void 0 ? {} : _ref11$payload$config,
      _ref11$payload$option = _ref11$payload.options,
      options = _ref11$payload$option === void 0 ? {} : _ref11$payload$option;

  if (!config.visState) {
    return state;
  }

  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;

  var _iterator = _createForOfIteratorHelper(state.mergers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var merger = _step.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && config.visState[merger.prop]) {
        mergedState = merger.merge(mergedState, config.visState[merger.prop], true);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerHoverUpdater}
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    hoverInfo: action.info
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').interactionConfigChangeUpdater}
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread(_objectSpread({}, state.interactionConfig), (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread(_objectSpread({}, interactionConfig[k]), {}, {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').layerClickUpdater}
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread(_objectSpread({}, state.mousePos), {}, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mapClickUpdater}
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').mouseMoveUpdater}
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref12) {
  var evt = _ref12.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread(_objectSpread({}, state), {}, {
      mousePos: _objectSpread(_objectSpread({}, state.mousePos), {}, {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point),
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      })
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleSplitMapUpdater}
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread(_objectSpread({}, state), {}, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _splitMapUtils.computeSplitMapLayers)(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').toggleLayerForMapUpdater}
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref13) {
  var mapIndex = _ref13.mapIndex,
      layerId = _ref13.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread(_objectSpread({}, splitMaps[i]), {}, {
        layers: _objectSpread(_objectSpread({}, splitMaps[i].layers), {}, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').updateVisDataUpdater}
 * @public
 */

/* eslint-disable max-statements */
// eslint-disable-next-line complexity


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu) {
    var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref14$info = _ref14.info,
        info = _ref14$info === void 0 ? {} : _ref14$info,
        data = _ref14.data,
        metadata = _ref14.metadata;

    return _objectSpread(_objectSpread({}, accu), (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data,
      metadata: metadata
    }, state.datasets) || {});
  }, {});
  var dataEmpty = Object.keys(newDataEntries).length < 1; // apply config if passed from action

  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;

  var mergedState = _objectSpread(_objectSpread({}, previousState), {}, {
    datasets: _objectSpread(_objectSpread({}, previousState.datasets), newDataEntries)
  }); // merge state with config to be merged


  var _iterator2 = _createForOfIteratorHelper(mergedState.mergers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var merger = _step2.value;

      if ((0, _visStateMerger.isValidMerger)(merger) && merger.toMergeProp && mergedState[merger.toMergeProp]) {
        var toMerge = mergedState[merger.toMergeProp];
        mergedState[merger.toMergeProp] = INITIAL_VIS_STATE[merger.toMergeProp];
        mergedState = merger.merge(mergedState, toMerge);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var newLayers = !dataEmpty ? mergedState.layers.filter(function (l) {
    return l.config.dataId && l.config.dataId in newDataEntries;
  }) : [];

  if (!newLayers.length && (options || {}).autoCreateLayers !== false) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId && l.config.dataId in newDataEntries;
    });
    mergedState = _objectSpread(_objectSpread({}, mergedState), {}, {
      splitMaps: (0, _splitMapUtils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // if no tooltips merged add default tooltips


  Object.keys(newDataEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedState = updateAllLayerDomainData(mergedState, dataEmpty ? Object.keys(mergedState.datasets) : Object.keys(newDataEntries), undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState);
  return updatedState;
};
/* eslint-enable max-statements */

/**
 * Rename an existing dataset in `visState`
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').renameDatasetUpdater}
 * @public
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function renameDatasetUpdater(state, action) {
  var dataId = action.dataId,
      label = action.label;
  var datasets = state.datasets;
  var existing = datasets[dataId]; // @ts-ignore

  return existing ? _objectSpread(_objectSpread({}, state), {}, {
    datasets: _objectSpread(_objectSpread({}, datasets), {}, (0, _defineProperty2["default"])({}, dataId, _objectSpread(_objectSpread({}, existing), {}, {
      label: label
    })))
  }) : // No-op if the dataset doesn't exist
  state;
}
/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = state.splitMaps[indexToRetrieve].layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesUpdater}
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _visStateActions.loadFilesSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileLoadingProgress = Array.from(files).reduce(function (accu, f, i) {
    return (0, _composerHelpers.merge_)(initialFileLoadingProgress(f, i))(accu);
  }, {});
  var fileLoading = {
    fileCache: [],
    filesToLoad: files,
    onFinish: onFinish
  };
  var nextState = (0, _composerHelpers.merge_)({
    fileLoadingProgress: fileLoadingProgress,
    fileLoading: fileLoading
  })(state);
  return loadNextFileUpdater(nextState);
};
/**
 * Sucessfully loaded one file, move on to the next one
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFileStepSuccessUpdater}
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

function loadFileStepSuccessUpdater(state, action) {
  if (!state.fileLoading) {
    return state;
  }

  var fileName = action.fileName,
      fileCache = action.fileCache;
  var _state$fileLoading = state.fileLoading,
      filesToLoad = _state$fileLoading.filesToLoad,
      onFinish = _state$fileLoading.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      percent: 1,
      message: 'Done'
    }
  }); // save processed file to fileCache

  var stateWithCache = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    fileCache: fileCache
  }))(stateWithProgress);
  return (0, _tasks.withTask)(stateWithCache, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
} // withTask<T>(state: T, task: any): T

/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadNextFileUpdater}
 * @public
 */


function loadNextFileUpdater(state) {
  if (!state.fileLoading) {
    return state;
  }

  var filesToLoad = state.fileLoading.filesToLoad;

  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1); // save filesToLoad to state


  var nextState = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    filesToLoad: remainingFilesToLoad
  }))(state);
  var stateWithProgress = updateFileLoadingProgressUpdater(nextState, {
    fileName: file.name,
    progress: {
      percent: 0,
      message: 'loading...'
    }
  });
  var loaders = state.loaders,
      loadOptions = state.loadOptions;
  return (0, _tasks.withTask)(stateWithProgress, makeLoadFileTask(file, nextState.fileLoading.fileCache, loaders, loadOptions));
}

function makeLoadFileTask(file, fileCache) {
  var loaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  }).bimap( // prettier ignore
  // success
  function (gen) {
    return (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: file.name,
      onFinish: function onFinish(result) {
        return (0, _visStateActions.processFileContent)({
          content: result,
          fileCache: fileCache
        });
      }
    });
  }, // error
  function (err) {
    return (0, _visStateActions.loadFilesErr)(file.name, err);
  });
}
/**
 *
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').processFileContentUpdater}
 * @public
 */


function processFileContentUpdater(state, action) {
  var _action$payload = action.payload,
      content = _action$payload.content,
      fileCache = _action$payload.fileCache;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: content.fileName,
    progress: {
      percent: 1,
      message: 'processing...'
    }
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.PROCESS_FILE_DATA)({
    content: content,
    fileCache: fileCache
  }).bimap(function (result) {
    return (0, _visStateActions.loadFileStepSuccess)({
      fileName: content.fileName,
      fileCache: result
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(content.fileName, err);
  }));
}

function parseProgress() {
  var prevProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var progress = arguments.length > 1 ? arguments[1] : undefined;

  // This happens when receiving query metadata or other cases we don't
  // have an update for the user.
  if (!progress || !progress.percent) {
    return {};
  }

  return {
    percent: progress.percent
  };
}
/**
 * gets called with payload = AsyncGenerator<???>
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').nextFileBatchUpdater}
 * @public
 */


var nextFileBatchUpdater = function nextFileBatchUpdater(state, _ref15) {
  var _ref15$payload = _ref15.payload,
      gen = _ref15$payload.gen,
      fileName = _ref15$payload.fileName,
      progress = _ref15$payload.progress,
      accumulated = _ref15$payload.accumulated,
      onFinish = _ref15$payload.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: parseProgress(state.fileLoadingProgress[fileName], progress)
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.UNWRAP_TASK)(gen.next()).bimap(function (_ref16) {
    var value = _ref16.value,
        done = _ref16.done;
    return done ? onFinish(accumulated) : (0, _visStateActions.nextFileBatch)({
      gen: gen,
      fileName: fileName,
      progress: value.progress,
      accumulated: value,
      onFinish: onFinish
    });
  }, function (err) {
    return (0, _visStateActions.loadFilesErr)(fileName, err);
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').loadFilesErrUpdater}
 * @public
 */


exports.nextFileBatchUpdater = nextFileBatchUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref17) {
  var error = _ref17.error,
      fileName = _ref17.fileName;

  // update ui with error message
  _window.console.warn(error);

  if (!state.fileLoading) {
    return state;
  }

  var _state$fileLoading2 = state.fileLoading,
      filesToLoad = _state$fileLoading2.filesToLoad,
      onFinish = _state$fileLoading2.onFinish,
      fileCache = _state$fileLoading2.fileCache;
  var nextState = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      error: error
    }
  }); // kick off next file or finish

  return (0, _tasks.withTask)(nextState, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _visStateActions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').applyCPUFilterUpdater}
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref18) {
  var dataId = _ref18.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _filterUtils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setMapInfoUpdater}
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapInfo: _objectSpread(_objectSpread({}, state.mapInfo), action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @type {typeof import('./vis-state-updaters').addDefaultLayers}
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  /** @type {Layer[]} */
  var empty = [];
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    var foundLayers = (0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses);
    return foundLayers && foundLayers.length ? accu.concat(foundLayers) : accu;
  }, empty);
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);

  var merged = _objectSpread(_objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow), tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}

function initialFileLoadingProgress(file, index) {
  var fileName = file.name || "Untitled File ".concat(index);
  return (0, _defineProperty2["default"])({}, fileName, {
    // percent of current file
    percent: 0,
    message: '',
    fileName: fileName,
    error: null
  });
}

function updateFileLoadingProgressUpdater(state, _ref20) {
  var fileName = _ref20.fileName,
      progress = _ref20.progress;
  return (0, _composerHelpers.pick_)('fileLoadingProgress')((0, _composerHelpers.pick_)(fileName)((0, _composerHelpers.merge_)(progress)))(state);
}
/**
 * Helper function to update layer domains for an array of datasets
 * @type {typeof import('./vis-state-updaters').updateAllLayerDomainData}
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData5 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData5.layerData,
          layer = _calculateLayerData5.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
        domain: null,
        defaultTimeFormat: null
      })
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [Math.min(accu[0], layer.animationDomain[0]), Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  var defaultTimeFormat = (0, _filterUtils.getTimeWidgetTitleFormatter)(mergedDomain);
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: (0, _filterUtils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain,
      defaultTimeFormat: defaultTimeFormat
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setEditorModeUpdater}
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref21) {
  var mode = _ref21.mode;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setFeaturesUpdater}
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref22) {
  var _ref22$features = _ref22.features,
      features = _ref22$features === void 0 ? [] : _ref22$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _filterUtils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _defaultSettings.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _filterUtils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _filterUtils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    });
    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 * @type {typeof import('./vis-state-updaters').setSelectedFeatureUpdater}
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref23) {
  var feature = _ref23.feature;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: feature
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').deleteFeatureUpdater}
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref24) {
  var feature = _ref24.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: null
    })
  });

  if ((0, _filterUtils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _filterUtils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread(_objectSpread({}, state.editor), {}, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').setPolygonFilterLayerUpdater}
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _filterUtils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread(_objectSpread({}, feature), {}, {
        properties: _objectSpread(_objectSpread({}, feature.properties), {}, {
          filterId: null
        })
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        editor: _objectSpread(_objectSpread({}, state.editor), {}, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _filterUtils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread(_objectSpread({}, state), {}, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread(_objectSpread({}, state.editor), {}, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').sortTableColumnUpdater}
 * @public
 */


function sortTableColumnUpdater(state, _ref25) {
  var dataId = _ref25.dataId,
      column = _ref25.column,
      mode = _ref25.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var sortMode = mode;

  if (!sortMode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]); // @ts-ignore - should be fixable in a TS file

    sortMode = currentMode ? Object.keys(_defaultSettings.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _defaultSettings.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _keplerTable.sortDatasetByColumn)(dataset, column, sortMode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').pinTableColumnUpdater}
 * @public
 */


function pinTableColumnUpdater(state, _ref26) {
  var dataId = _ref26.dataId,
      column = _ref26.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var field = dataset.fields.find(function (f) {
    return f.name === column;
  });

  if (!field) {
    return state;
  }

  var pinnedColumns;

  if (Array.isArray(dataset.pinnedColumns) && dataset.pinnedColumns.includes(field.name)) {
    // unpin it
    pinnedColumns = dataset.pinnedColumns.filter(function (co) {
      return co !== field.name;
    });
  } else {
    pinnedColumns = (dataset.pinnedColumns || []).concat(field.name);
  }

  return (0, _utils.set)(['datasets', dataId, 'pinnedColumns'], pinnedColumns, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @type {typeof import('./vis-state-updaters').copyTableColumnUpdater}
 * @public
 */


function copyTableColumnUpdater(state, _ref27) {
  var dataId = _ref27.dataId,
      column = _ref27.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.allData.map(function (d) {
    return (0, _dataUtils.parseFieldValue)(d[fieldIdx], type);
  }).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').toggleEditorVisibilityUpdater}
 */


function toggleEditorVisibilityUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      visible: !state.editor.visible
    })
  });
}

function setFilterAnimationTimeConfigUpdater(state, _ref28) {
  var idx = _ref28.idx,
      config = _ref28.config;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  if (oldFilter.type !== _defaultSettings.FILTER_TYPES.timeRange) {
    _window.console.error("setFilterAnimationTimeConfig can only be called to update a time filter. check filter.type === 'timeRange'");

    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('filters')((0, _composerHelpers.swap_)((0, _composerHelpers.merge_)(updates)(oldFilter)))(state);
}

function checkTimeConfigArgs(config) {
  var allowed = ['timeFormat', 'timezone'];
  return Object.keys(config).reduce(function (accu, prop) {
    if (!allowed.includes(prop)) {
      _window.console.error("setLayerAnimationTimeConfig takes timeFormat and/or timezone as options, found ".concat(prop));

      return accu;
    } // here we are NOT checking if timezone or timeFormat input is valid


    accu[prop] = config[prop];
    return accu;
  }, {});
}
/**
 * Update editor
 * @type {typeof import('./vis-state-updaters').setLayerAnimationTimeConfigUpdater}
 */


function setLayerAnimationTimeConfigUpdater(state, _ref29) {
  var config = _ref29.config;

  if (!config) {
    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('animationConfig')((0, _composerHelpers.merge_)(updates))(state);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfQU5JTUFUSU9OX0NPTkZJRyIsImRvbWFpbiIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJpc0FuaW1hdGluZyIsInRpbWVGb3JtYXQiLCJ0aW1lem9uZSIsImRlZmF1bHRUaW1lRm9ybWF0IiwiREVGQVVMVF9FRElUT1IiLCJtb2RlIiwiRURJVE9SX01PREVTIiwiRFJBV19QT0xZR09OIiwiZmVhdHVyZXMiLCJzZWxlY3RlZEZlYXR1cmUiLCJ2aXNpYmxlIiwiSU5JVElBTF9WSVNfU1RBVEUiLCJtYXBJbmZvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxheWVycyIsImxheWVyRGF0YSIsImxheWVyVG9CZU1lcmdlZCIsImxheWVyT3JkZXIiLCJmaWx0ZXJzIiwiZmlsdGVyVG9CZU1lcmdlZCIsImRhdGFzZXRzIiwiZWRpdGluZ0RhdGFzZXQiLCJ1bmRlZmluZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsImxheWVyQmxlbmRpbmciLCJob3ZlckluZm8iLCJjbGlja2VkIiwibW91c2VQb3MiLCJzcGxpdE1hcHMiLCJzcGxpdE1hcHNUb0JlTWVyZ2VkIiwibGF5ZXJDbGFzc2VzIiwiTGF5ZXJDbGFzc2VzIiwiYW5pbWF0aW9uQ29uZmlnIiwiZWRpdG9yIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwibG9hZGVycyIsImxvYWRPcHRpb25zIiwibWVyZ2VycyIsIlZJU19TVEFURV9NRVJHRVJTIiwic2NoZW1hIiwiS2VwbGVyR0xTY2hlbWEiLCJ1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEiLCJzdGF0ZSIsImxheWVyIiwiaWR4IiwibWFwIiwibHlyIiwiaSIsImQiLCJ1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlIiwibmV3U3RhdGUiLCJsZW5ndGgiLCJjb25maWciLCJpc1Zpc2libGUiLCJhbmltYXRpb24iLCJlbmFibGVkIiwidXBkYXRlQW5pbWF0aW9uRG9tYWluIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiYWN0aW9uIiwib2xkTGF5ZXIiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJkYXRhSWQiLCJyZXN0Q29uZmlnIiwic3RhdGVXaXRoRGF0YUlkIiwibGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyIiwibmV4dExheWVyIiwiZmluZCIsIm5ld0xheWVyIiwidXBkYXRlTGF5ZXJDb25maWciLCJzaG91bGRDYWxjdWxhdGVMYXllckRhdGEiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVMYXllckRhdGFSZXN1bHQiLCJhZGRPclJlbW92ZVRleHRMYWJlbHMiLCJuZXdGaWVsZHMiLCJ0ZXh0TGFiZWwiLCJuZXdUZXh0TGFiZWwiLCJzbGljZSIsImN1cnJlbnRGaWVsZHMiLCJ0bCIsImZpZWxkIiwibmFtZSIsImZpbHRlciIsImFkZEZpZWxkcyIsImYiLCJpbmNsdWRlcyIsImRlbGV0ZUZpZWxkcyIsImZkIiwiREVGQVVMVF9URVhUX0xBQkVMIiwiYWYiLCJ1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUiLCJwcm9wIiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsInNwbGljZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlciIsInZhbGlkYXRlRXhpc3RpbmdMYXllcldpdGhEYXRhIiwiZGF0YXNldCIsImxvYWRlZExheWVyIiwiYWxsb3dFbXB0eUNvbHVtbiIsImlzVmFsaWRUb1NhdmUiLCJ2YWxpZGF0ZWQiLCJ0eXBlIiwiaXNDb25maWdBY3RpdmUiLCJ1cGRhdGVMYXllckRvbWFpbiIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJuZXdUeXBlIiwib2xkSWQiLCJDb25zb2xlIiwiZXJyb3IiLCJhc3NpZ25Db25maWdUb0xheWVyIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbCIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm5ld1Zpc0NvbmZpZyIsInZpc0NvbmZpZyIsInNldEZpbHRlckFuaW1hdGlvblRpbWVVcGRhdGVyIiwic2V0RmlsdGVyVXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXIiLCJhbmltYXRpb25XaW5kb3ciLCJ2YWx1ZUluZGV4Iiwib2xkRmlsdGVyIiwibmV3RmlsdGVyIiwiZGF0YXNldElkcyIsIkZJTFRFUl9VUERBVEVSX1BST1BTIiwiZGF0YXNldElkIiwibWVyZ2VEb21haW4iLCJ1cGRhdGVkRmlsdGVyIiwibmV3RGF0YXNldCIsImdwdSIsImxheWVySWQiLCJsYXllcklkRGlmZmVyZW5jZSIsImxheWVyRGF0YUlkcyIsImxpZCIsIm5ld0RhdGFJZHMiLCJlbmxhcmdlZEZpbHRlciIsImVubGFyZ2VkIiwiZGF0YXNldElkc1RvRmlsdGVyIiwiTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTIiwiZmlsdGVyZWREYXRhc2V0cyIsInVwZGF0ZUFsbExheWVyRG9tYWluRGF0YSIsInNldEZpbHRlclBsb3RVcGRhdGVyIiwibmV3UHJvcCIsInBsb3RUeXBlIiwiYWRkRmlsdGVyVXBkYXRlciIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJvbGRWaXhDb25maWciLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwidG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyIiwidXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiZW5sYXJnZUZpbHRlclVwZGF0ZXIiLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlciIsImFzc2lnbiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwibmV3RWRpdG9yIiwiYWRkTGF5ZXJVcGRhdGVyIiwibmV3TGF5ZXJEYXRhIiwid2FybiIsInJlc3VsdCIsImRlZmF1bHREYXRhc2V0IiwiTGF5ZXIiLCJyZW1vdmVMYXllclVwZGF0ZXIiLCJsYXllclRvUmVtb3ZlIiwibmV3TWFwcyIsInBpZCIsImlzTGF5ZXJIb3ZlcmVkIiwiZHVwbGljYXRlTGF5ZXJVcGRhdGVyIiwib3JpZ2luYWwiLCJvcmlnaW5hbExheWVyT3JkZXJJZHgiLCJuZXdMYWJlbCIsImxhYmVsIiwicG9zdGZpeCIsIkxBWUVSX0lEX0xFTkdUSCIsIm5leHRTdGF0ZSIsIm5ld0xheWVyT3JkZXJJZHgiLCJuZXdMYXllck9yZGVyIiwicmVvcmRlckxheWVyVXBkYXRlciIsIm9yZGVyIiwicmVtb3ZlRGF0YXNldFVwZGF0ZXIiLCJkYXRhc2V0S2V5IiwibmV3RGF0YXNldHMiLCJpbmRleGVzIiwicmVkdWNlIiwibGlzdE9mSW5kZXhlcyIsImluZGV4IiwicHVzaCIsImN1cnJlbnRTdGF0ZSIsImluZGV4Q291bnRlciIsImN1cnJlbnRJbmRleCIsInRvb2x0aXAiLCJmaWVsZHNUb1Nob3ciLCJmaWVsZHMiLCJ1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciIsInNob3dEYXRhc2V0VGFibGVVcGRhdGVyIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiaW5pdGlhbFN0YXRlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJwYXlsb2FkIiwib3B0aW9ucyIsInZpc1N0YXRlIiwia2VlcEV4aXN0aW5nQ29uZmlnIiwibWVyZ2VkU3RhdGUiLCJtZXJnZXIiLCJtZXJnZSIsImxheWVySG92ZXJVcGRhdGVyIiwiaW5mbyIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlciIsImNvbnRyYWRpY3QiLCJmb3JFYWNoIiwiayIsImxheWVyQ2xpY2tVcGRhdGVyIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsInBpY2tlZCIsIm1hcENsaWNrVXBkYXRlciIsIm1vdXNlTW92ZVVwZGF0ZXIiLCJldnQiLCJ2YWx1ZXMiLCJzb21lIiwibW91c2VQb3NpdGlvbiIsInBvaW50IiwibG5nTGF0IiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwiY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIiLCJtYXBJbmRleCIsInNtIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJuZXdEYXRhRW50cmllcyIsImFjY3UiLCJkYXRhIiwibWV0YWRhdGEiLCJkYXRhRW1wdHkiLCJwcmV2aW91c1N0YXRlIiwidG9NZXJnZVByb3AiLCJ0b01lcmdlIiwibmV3TGF5ZXJzIiwiYXV0b0NyZWF0ZUxheWVycyIsImFkZERlZmF1bHRMYXllcnMiLCJ0b29sdGlwRmllbGRzIiwiQXJyYXkiLCJpc0FycmF5IiwiYWRkRGVmYXVsdFRvb2x0aXBzIiwidXBkYXRlZFN0YXRlIiwicmVuYW1lRGF0YXNldFVwZGF0ZXIiLCJleGlzdGluZyIsImluZGV4VG9SZXRyaWV2ZSIsIm1hcExheWVycyIsImxvYWRGaWxlc1VwZGF0ZXIiLCJmaWxlcyIsIm9uRmluaXNoIiwibG9hZEZpbGVzU3VjY2VzcyIsImZyb20iLCJpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyIsImZpbGVDYWNoZSIsImZpbGVzVG9Mb2FkIiwibG9hZE5leHRGaWxlVXBkYXRlciIsImxvYWRGaWxlU3RlcFN1Y2Nlc3NVcGRhdGVyIiwiZmlsZU5hbWUiLCJzdGF0ZVdpdGhQcm9ncmVzcyIsInVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyIiwicHJvZ3Jlc3MiLCJwZXJjZW50IiwibWVzc2FnZSIsInN0YXRlV2l0aENhY2hlIiwibG9hZE5leHRGaWxlIiwiZmlsZSIsInJlbWFpbmluZ0ZpbGVzVG9Mb2FkIiwibWFrZUxvYWRGaWxlVGFzayIsImJpbWFwIiwiZ2VuIiwiY29udGVudCIsImVyciIsInByb2Nlc3NGaWxlQ29udGVudFVwZGF0ZXIiLCJwYXJzZVByb2dyZXNzIiwicHJldlByb2dyZXNzIiwibmV4dEZpbGVCYXRjaFVwZGF0ZXIiLCJhY2N1bXVsYXRlZCIsIm5leHQiLCJkb25lIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsImFwcGx5Q1BVRmlsdGVyVXBkYXRlciIsImRhdGFJZHMiLCJzZXRNYXBJbmZvVXBkYXRlciIsImVtcHR5IiwiZGVmYXVsdExheWVycyIsImZvdW5kTGF5ZXJzIiwiY29uY2F0IiwiXyIsIm1lcmdlZCIsImZpeGVkRG9tYWluIiwiYW5pbWF0YWJsZUxheWVycyIsImFuaW1hdGlvbkRvbWFpbiIsIm1lcmdlZERvbWFpbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJJbmZpbml0eSIsInNldEVkaXRvck1vZGVVcGRhdGVyIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwibGFzdEZlYXR1cmUiLCJwcm9wZXJ0aWVzIiwiaXNDbG9zZWQiLCJFRElUIiwiZmVhdHVyZSIsImZpbHRlcklkIiwiZmVhdHVyZVZhbHVlIiwiZmlsdGVySWR4IiwiZmlsIiwic2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlciIsImRlbGV0ZUZlYXR1cmVVcGRhdGVyIiwic2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlciIsIm5ld0xheWVySWQiLCJub25lRmlsdGVyRmVhdHVyZSIsImlzTGF5ZXJJbmNsdWRlZCIsInNvcnRUYWJsZUNvbHVtblVwZGF0ZXIiLCJjb2x1bW4iLCJzb3J0TW9kZSIsImN1cnJlbnRNb2RlIiwiU09SVF9PUkRFUiIsIm0iLCJBU0NFTkRJTkciLCJzb3J0ZWQiLCJwaW5UYWJsZUNvbHVtblVwZGF0ZXIiLCJwaW5uZWRDb2x1bW5zIiwiY28iLCJjb3B5VGFibGVDb2x1bW5VcGRhdGVyIiwiZmllbGRJZHgiLCJ0ZXh0IiwiYWxsRGF0YSIsImpvaW4iLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwidXBkYXRlcyIsImNoZWNrVGltZUNvbmZpZ0FyZ3MiLCJhbGxvd2VkIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFRQTs7QUFDQTs7QUFnQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBUUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRUE7O0FBQ08sSUFBTUMsd0JBQXdCLEdBQUc7QUFDdENDLEVBQUFBLE1BQU0sRUFBRSxJQUQ4QjtBQUV0Q0MsRUFBQUEsV0FBVyxFQUFFLElBRnlCO0FBR3RDQyxFQUFBQSxLQUFLLEVBQUUsQ0FIK0I7QUFJdENDLEVBQUFBLFdBQVcsRUFBRSxLQUp5QjtBQUt0Q0MsRUFBQUEsVUFBVSxFQUFFLElBTDBCO0FBTXRDQyxFQUFBQSxRQUFRLEVBQUUsSUFONEI7QUFPdENDLEVBQUFBLGlCQUFpQixFQUFFO0FBUG1CLENBQWpDO0FBVVA7OztBQUNPLElBQU1DLGNBQWMsR0FBRztBQUM1QkMsRUFB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QU0sQ0FBQ0MsSUFBUCxDQUFZYixNQUFaLEVBQW9CZ0osTUFBcEIsQ0FBMkIsVUFBQytDLElBQUQsRUFBT25KLElBQVAsRUFBZ0I7QUFDaEQsUUFBSSxDQUFDZ1EsT0FBTyxDQUFDdFEsUUFBUixDQUFpQk0sSUFBakIsQ0FBTCxFQUE2QjtBQUMzQmlCLHNCQUFRQyxLQUFSLDBGQUNvRmxCLElBRHBGOztBQUdBLGFBQU9tSixJQUFQO0FBQ0QsS0FOK0MsQ0FRaEQ7OztBQUNBQSxJQUFBQSxJQUFJLENBQUNuSixJQUFELENBQUosR0FBYTVDLE1BQU0sQ0FBQzRDLElBQUQsQ0FBbkI7QUFDQSxXQUFPbUosSUFBUDtBQUNELEdBWE0sRUFXSixFQVhJLENBQVA7QUFZRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTOEcsa0NBQVQsQ0FBNEN2VCxLQUE1QyxVQUE2RDtBQUFBLE1BQVRVLE1BQVMsVUFBVEEsTUFBUzs7QUFDbEUsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxXQUFPVixLQUFQO0FBQ0Q7O0FBQ0QsTUFBTW9ULE9BQU8sR0FBR0MsbUJBQW1CLENBQUMzUyxNQUFELENBQW5DO0FBQ0EsU0FBTyw0QkFBTSxpQkFBTixFQUF5Qiw2QkFBTzBTLE9BQVAsQ0FBekIsRUFBMENwVCxLQUExQyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge2Rpc2FibGVTdGFja0NhcHR1cmluZywgd2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgeG9yIGZyb20gJ2xvZGFzaC54b3InO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuLy8gVGFza3NcbmltcG9ydCB7TE9BRF9GSUxFX1RBU0ssIFVOV1JBUF9UQVNLLCBQUk9DRVNTX0ZJTEVfREFUQSwgREVMQVlfVEFTS30gZnJvbSAndGFza3MvdGFza3MnO1xuLy8gQWN0aW9uc1xuaW1wb3J0IHtcbiAgbG9hZEZpbGVzRXJyLFxuICBsb2FkRmlsZXNTdWNjZXNzLFxuICBsb2FkRmlsZVN0ZXBTdWNjZXNzLFxuICBsb2FkTmV4dEZpbGUsXG4gIG5leHRGaWxlQmF0Y2hcbn0gZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XG4vLyBVdGlsc1xuaW1wb3J0IHtmaW5kRmllbGRzVG9TaG93LCBnZXREZWZhdWx0SW50ZXJhY3Rpb259IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7XG4gIGFwcGx5RmlsdGVyRmllbGROYW1lLFxuICBhcHBseUZpbHRlcnNUb0RhdGFzZXRzLFxuICBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSxcbiAgRklMVEVSX1VQREFURVJfUFJPUFMsXG4gIGZpbHRlckRhdGFzZXRDUFUsXG4gIGdlbmVyYXRlUG9seWdvbkZpbHRlcixcbiAgZ2V0RGVmYXVsdEZpbHRlcixcbiAgZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlLFxuICBnZXRGaWx0ZXJJZEluRmVhdHVyZSxcbiAgZ2V0RmlsdGVyUGxvdCxcbiAgZ2V0VGltZVdpZGdldFRpdGxlRm9ybWF0dGVyLFxuICBpc0luUmFuZ2UsXG4gIExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyxcbiAgdXBkYXRlRmlsdGVyRGF0YUlkXG59IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge2Fzc2lnbkdwdUNoYW5uZWwsIHNldEZpbHRlckdwdU1vZGV9IGZyb20gJ3V0aWxzL2dwdS1maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVOZXdEYXRhRW50cnl9IGZyb20gJ3V0aWxzL2RhdGFzZXQtdXRpbHMnO1xuaW1wb3J0IHtzb3J0RGF0YXNldEJ5Q29sdW1ufSBmcm9tICd1dGlscy90YWJsZS11dGlscy9rZXBsZXItdGFibGUnO1xuaW1wb3J0IHtzZXQsIHRvQXJyYXksIGFycmF5SW5zZXJ0LCBnZW5lcmF0ZUhhc2hJZH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQge2NhbGN1bGF0ZUxheWVyRGF0YSwgZmluZERlZmF1bHRMYXllcn0gZnJvbSAndXRpbHMvbGF5ZXItdXRpbHMnO1xuXG5pbXBvcnQge1xuICBpc1ZhbGlkTWVyZ2VyLFxuICBWSVNfU1RBVEVfTUVSR0VSUyxcbiAgdmFsaWRhdGVMYXllcldpdGhEYXRhLFxuICBjcmVhdGVMYXllckZyb21Db25maWcsXG4gIHNlcmlhbGl6ZUxheWVyXG59IGZyb20gJy4vdmlzLXN0YXRlLW1lcmdlcic7XG5cbmltcG9ydCB7XG4gIGFkZE5ld0xheWVyc1RvU3BsaXRNYXAsXG4gIGNvbXB1dGVTcGxpdE1hcExheWVycyxcbiAgcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzXG59IGZyb20gJ3V0aWxzL3NwbGl0LW1hcC11dGlscyc7XG5cbmltcG9ydCB7TGF5ZXIsIExheWVyQ2xhc3NlcywgTEFZRVJfSURfTEVOR1RIfSBmcm9tICdsYXllcnMnO1xuaW1wb3J0IHtERUZBVUxUX1RFWFRfTEFCRUx9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcbmltcG9ydCB7RURJVE9SX01PREVTLCBTT1JUX09SREVSLCBGSUxURVJfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7cGlja18sIG1lcmdlXywgc3dhcF99IGZyb20gJy4vY29tcG9zZXItaGVscGVycyc7XG5pbXBvcnQge3Byb2Nlc3NGaWxlQ29udGVudH0gZnJvbSAnYWN0aW9ucy92aXMtc3RhdGUtYWN0aW9ucyc7XG5cbmltcG9ydCBLZXBsZXJHTFNjaGVtYSBmcm9tICdzY2hlbWFzJztcblxuLy8gdHlwZSBpbXBvcnRzXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5GaWVsZH0gRmllbGQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLkZpbHRlcn0gRmlsdGVyICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5LZXBsZXJUYWJsZX0gS2VwbGVyVGFibGUgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLlZpc1N0YXRlfSBWaXNTdGF0ZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRGF0YXNldHN9IERhdGFzZXRzICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5BbmltYXRpb25Db25maWd9IEFuaW1hdGlvbkNvbmZpZyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuRWRpdG9yfSBFZGl0b3IgKi9cblxuLy8gcmVhY3QtcGFsbVxuLy8gZGlzYWJsZSBjYXB0dXJlIGV4Y2VwdGlvbiBmb3IgcmVhY3QtcGFsbSBjYWxsIHRvIHdpdGhUYXNrXG5kaXNhYmxlU3RhY2tDYXB0dXJpbmcoKTtcblxuLyoqXG4gKiBVcGRhdGVycyBmb3IgYHZpc1N0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHt2aXNTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVVwZGF0ZXJzLmVubGFyZ2VGaWx0ZXJVcGRhdGVyKFxuICogICAgICAgICAgICAgICBzdGF0ZS5rZXBsZXJHbC5mb28udmlzU3RhdGUsXG4gKiAgICAgICAgICAgICAgIHtpZHg6IDB9XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IHZpc1N0YXRlVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKiogQHR5cGUge0FuaW1hdGlvbkNvbmZpZ30gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FOSU1BVElPTl9DT05GSUcgPSB7XG4gIGRvbWFpbjogbnVsbCxcbiAgY3VycmVudFRpbWU6IG51bGwsXG4gIHNwZWVkOiAxLFxuICBpc0FuaW1hdGluZzogZmFsc2UsXG4gIHRpbWVGb3JtYXQ6IG51bGwsXG4gIHRpbWV6b25lOiBudWxsLFxuICBkZWZhdWx0VGltZUZvcm1hdDogbnVsbFxufTtcblxuLyoqIEB0eXBlIHtFZGl0b3J9ICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1IgPSB7XG4gIG1vZGU6IEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04sXG4gIGZlYXR1cmVzOiBbXSxcbiAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxuICB2aXNpYmxlOiB0cnVlXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7VmlzU3RhdGV9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJTklUSUFMX1ZJU19TVEFURSA9IHtcbiAgLy8gbWFwIGluZm9cbiAgbWFwSW5mbzoge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSxcbiAgLy8gbGF5ZXJzXG4gIGxheWVyczogW10sXG4gIGxheWVyRGF0YTogW10sXG4gIGxheWVyVG9CZU1lcmdlZDogW10sXG4gIGxheWVyT3JkZXI6IFtdLFxuXG4gIC8vIGZpbHRlcnNcbiAgZmlsdGVyczogW10sXG4gIGZpbHRlclRvQmVNZXJnZWQ6IFtdLFxuXG4gIC8vIGEgY29sbGVjdGlvbiBvZiBtdWx0aXBsZSBkYXRhc2V0XG4gIGRhdGFzZXRzOiB7fSxcbiAgZWRpdGluZ0RhdGFzZXQ6IHVuZGVmaW5lZCxcblxuICBpbnRlcmFjdGlvbkNvbmZpZzogZ2V0RGVmYXVsdEludGVyYWN0aW9uKCksXG4gIGludGVyYWN0aW9uVG9CZU1lcmdlZDogdW5kZWZpbmVkLFxuXG4gIGxheWVyQmxlbmRpbmc6ICdub3JtYWwnLFxuICBob3ZlckluZm86IHVuZGVmaW5lZCxcbiAgY2xpY2tlZDogdW5kZWZpbmVkLFxuICBtb3VzZVBvczoge30sXG5cbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXG4gIHNwbGl0TWFwczogW1xuICAgIC8vIHRoaXMgd2lsbCBjb250YWluIGEgbGlzdCBvZiBvYmplY3RzIHRvXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgICBsYXllcnM6IHtsYXllcl9pZDogdHJ1ZSB8IGZhbHNlfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgXSxcbiAgc3BsaXRNYXBzVG9CZU1lcmdlZDogW10sXG5cbiAgLy8gZGVmYXVsdHMgbGF5ZXIgY2xhc3Nlc1xuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3NlcyxcblxuICAvLyBkZWZhdWx0IGFuaW1hdGlvblxuICAvLyB0aW1lIGluIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpICh0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2gpXG4gIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHLFxuXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1IsXG5cbiAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICBmaWxlTG9hZGluZ1Byb2dyZXNzOiB7fSxcblxuICBsb2FkZXJzOiBbXSxcbiAgbG9hZE9wdGlvbnM6IHt9LFxuXG4gIC8vIHZpc1N0YXRlTWVyZ2Vyc1xuICBtZXJnZXJzOiBWSVNfU1RBVEVfTUVSR0VSUyxcblxuICAvLyBrZXBsZXIgc2NoZW1hc1xuICBzY2hlbWE6IEtlcGxlckdMU2NoZW1hXG59O1xuXG4vKipcbiAqIFVwZGF0ZSBzdGF0ZSB3aXRoIHVwZGF0ZWQgbGF5ZXIgYW5kIGxheWVyRGF0YVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhfVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAoKGx5ciwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyIDogbHlyKSksXG4gICAgbGF5ZXJEYXRhOiBsYXllckRhdGFcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxuICAgICAgOiBzdGF0ZS5sYXllckRhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2Uoc3RhdGUsIGxheWVyKSB7XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICBpZiAoc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGxheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgICAgPyBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3Q29uZmlnKTtcbiAgaWYgKHR5cGVvZiBhY3Rpb24ubmV3Q29uZmlnLmRhdGFJZCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCB7ZGF0YUlkLCAuLi5yZXN0Q29uZmlnfSA9IGFjdGlvbi5uZXdDb25maWc7XG4gICAgY29uc3Qgc3RhdGVXaXRoRGF0YUlkID0gbGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgICBvbGRMYXllcixcbiAgICAgIG5ld0NvbmZpZzoge2RhdGFJZH1cbiAgICB9KTtcbiAgICBjb25zdCBuZXh0TGF5ZXIgPSBzdGF0ZVdpdGhEYXRhSWQubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gICAgcmV0dXJuIG5leHRMYXllciAmJiBPYmplY3Qua2V5cyhyZXN0Q29uZmlnKS5sZW5ndGhcbiAgICAgID8gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlV2l0aERhdGFJZCwge29sZExheWVyOiBuZXh0TGF5ZXIsIG5ld0NvbmZpZzogcmVzdENvbmZpZ30pXG4gICAgICA6IHN0YXRlV2l0aERhdGFJZDtcbiAgfVxuXG4gIGxldCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKGFjdGlvbi5uZXdDb25maWcpO1xuXG4gIGxldCBsYXllckRhdGE7XG5cbiAgLy8gbGV0IG5ld0xheWVyO1xuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICAgIGNvbnN0IHVwZGF0ZUxheWVyRGF0YVJlc3VsdCA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XG5cbiAgICBsYXllckRhdGEgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXJEYXRhO1xuICAgIG5ld0xheWVyID0gdXBkYXRlTGF5ZXJEYXRhUmVzdWx0LmxheWVyO1xuICB9XG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIGlmICgnaXNWaXNpYmxlJyBpbiBhY3Rpb24ubmV3Q29uZmlnKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBuZXdMYXllcik7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKG5ld1N0YXRlLCB7XG4gICAgbGF5ZXI6IG5ld0xheWVyLFxuICAgIGxheWVyRGF0YSxcbiAgICBpZHhcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZE9yUmVtb3ZlVGV4dExhYmVscyhuZXdGaWVsZHMsIHRleHRMYWJlbCkge1xuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG5cbiAgY29uc3QgY3VycmVudEZpZWxkcyA9IHRleHRMYWJlbC5tYXAodGwgPT4gdGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkuZmlsdGVyKGQgPT4gZCk7XG5cbiAgY29uc3QgYWRkRmllbGRzID0gbmV3RmllbGRzLmZpbHRlcihmID0+ICFjdXJyZW50RmllbGRzLmluY2x1ZGVzKGYubmFtZSkpO1xuICBjb25zdCBkZWxldGVGaWVsZHMgPSBjdXJyZW50RmllbGRzLmZpbHRlcihmID0+ICFuZXdGaWVsZHMuZmluZChmZCA9PiBmZC5uYW1lID09PSBmKSk7XG5cbiAgLy8gZGVsZXRlXG4gIG5ld1RleHRMYWJlbCA9IG5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQgJiYgIWRlbGV0ZUZpZWxkcy5pbmNsdWRlcyh0bC5maWVsZC5uYW1lKSk7XG4gIG5ld1RleHRMYWJlbCA9ICFuZXdUZXh0TGFiZWwubGVuZ3RoID8gW0RFRkFVTFRfVEVYVF9MQUJFTF0gOiBuZXdUZXh0TGFiZWw7XG5cbiAgLy8gYWRkXG4gIG5ld1RleHRMYWJlbCA9IFtcbiAgICAuLi5uZXdUZXh0TGFiZWwuZmlsdGVyKHRsID0+IHRsLmZpZWxkKSxcbiAgICAuLi5hZGRGaWVsZHMubWFwKGFmID0+ICh7XG4gICAgICAuLi5ERUZBVUxUX1RFWFRfTEFCRUwsXG4gICAgICBmaWVsZDogYWZcbiAgICB9KSlcbiAgXTtcblxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgdGV4dExhYmVsKSB7XG4gIGlmICghdGV4dExhYmVsW2lkeF0uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICByZXR1cm4gdGV4dExhYmVsO1xuICB9XG5cbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xuXG4gIGlmIChwcm9wICYmICh2YWx1ZSB8fCB0ZXh0TGFiZWwubGVuZ3RoID09PSAxKSkge1xuICAgIG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5tYXAoKHRsLCBpKSA9PiAoaSA9PT0gaWR4ID8gey4uLnRsLCBbcHJvcF06IHZhbHVlfSA6IHRsKSk7XG4gIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2ZpZWxkJyAmJiB2YWx1ZSA9PT0gbnVsbCAmJiB0ZXh0TGFiZWwubGVuZ3RoID4gMSkge1xuICAgIC8vIHJlbW92ZSBsYWJlbCB3aGVuIGZpZWxkIHZhbHVlIGlzIHNldCB0byBudWxsXG4gICAgbmV3VGV4dExhYmVsLnNwbGljZShpZHgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1RleHRMYWJlbDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIGlkeCwgcHJvcCwgdmFsdWV9ID0gYWN0aW9uO1xuICBjb25zdCB7dGV4dExhYmVsfSA9IG9sZExheWVyLmNvbmZpZztcblxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG4gIGlmICghdGV4dExhYmVsW2lkeF0gJiYgaWR4ID09PSB0ZXh0TGFiZWwubGVuZ3RoKSB7XG4gICAgLy8gaWYgaWR4IGlzIHNldCB0byBsZW5ndGgsIGFkZCBlbXB0eSB0ZXh0IGxhYmVsXG4gICAgbmV3VGV4dExhYmVsID0gWy4uLnRleHRMYWJlbCwgREVGQVVMVF9URVhUX0xBQkVMXTtcbiAgfVxuXG4gIGlmIChpZHggPT09ICdhbGwnICYmIHByb3AgPT09ICdmaWVsZHMnKSB7XG4gICAgbmV3VGV4dExhYmVsID0gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKHZhbHVlLCB0ZXh0TGFiZWwpO1xuICB9IGVsc2Uge1xuICAgIG5ld1RleHRMYWJlbCA9IHVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZShpZHgsIHByb3AsIHZhbHVlLCBuZXdUZXh0TGFiZWwpO1xuICB9XG4gIC8vIHVwZGF0ZSB0ZXh0IGxhYmVsIHByb3AgYW5kIHZhbHVlXG4gIHJldHVybiBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIHtcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWc6IHt0ZXh0TGFiZWw6IG5ld1RleHRMYWJlbH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhpc3RpbmdMYXllcldpdGhEYXRhKGRhdGFzZXQsIGxheWVyQ2xhc3NlcywgbGF5ZXIpIHtcbiAgY29uc3QgbG9hZGVkTGF5ZXIgPSBzZXJpYWxpemVMYXllcihsYXllcik7XG4gIHJldHVybiB2YWxpZGF0ZUxheWVyV2l0aERhdGEoZGF0YXNldCwgbG9hZGVkTGF5ZXIsIGxheWVyQ2xhc3Nlcywge1xuICAgIGFsbG93RW1wdHlDb2x1bW46IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGNvbmZpZyBkYXRhSWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckRhdGFJZENoYW5nZVVwZGF0ZXJ9XG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyRGF0YUlkQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgbmV3Q29uZmlnfSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdDb25maWc7XG5cbiAgaWYgKCFvbGRMYXllciB8fCAhc3RhdGUuZGF0YXNldHNbZGF0YUlkXSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuXG4gIGxldCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtkYXRhSWR9KTtcbiAgLy8gdGhpcyBtYXkgaGFwcGVuIHdoZW4gYSBsYXllciBpcyBuZXcgKHR5cGU6IG51bGwgYW5kIG5vIGNvbHVtbnMpIGJ1dCBpdCdzIG5vdCByZWFkeSB0byBiZSBzYXZlZFxuICBpZiAobmV3TGF5ZXIuaXNWYWxpZFRvU2F2ZSgpKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkID0gdmFsaWRhdGVFeGlzdGluZ0xheWVyV2l0aERhdGEoXG4gICAgICBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdLFxuICAgICAgc3RhdGUubGF5ZXJDbGFzc2VzLFxuICAgICAgbmV3TGF5ZXJcbiAgICApO1xuICAgIC8vIGlmIGNhbnQgdmFsaWRhdGUgaXQgd2l0aCBkYXRhIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICBpZiAoIXZhbGlkYXRlZCkge1xuICAgICAgbmV3TGF5ZXIgPSBuZXcgc3RhdGUubGF5ZXJDbGFzc2VzW29sZExheWVyLnR5cGVdKHtkYXRhSWQsIGlkOiBvbGRMYXllci5pZH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllciA9IHZhbGlkYXRlZDtcbiAgICB9XG4gIH1cblxuICBuZXdMYXllciA9IG5ld0xheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICBpc1Zpc2libGU6IG9sZExheWVyLmNvbmZpZy5pc1Zpc2libGUsXG4gICAgaXNDb25maWdBY3RpdmU6IHRydWVcbiAgfSk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMpO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCB1bmRlZmluZWQpO1xuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdHlwZS4gUHJldmlld3MgbGF5ZXIgY29uZmlnIHdpbGwgYmUgY29waWVkIGlmIGFwcGxpY2FibGUuXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld1R5cGV9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IG9sZElkID0gb2xkTGF5ZXIuaWQ7XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XG5cbiAgaWYgKCFzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0pIHtcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBnZXQgYSBtaW50IGxheWVyLCB3aXRoIG5ldyBpZCBhbmQgdHlwZVxuICAvLyBiZWNhdXNlIGRlY2suZ2wgdXNlcyBpZCB0byBtYXRjaCBiZXR3ZWVuIG5ldyBhbmQgb2xkIGxheWVyLlxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0oKTtcblxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSk7XG4gIGxldCBuZXdTdGF0ZSA9IHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgfHwgb2xkTGF5ZXIuY29uZmlnLmFuaW1hdGlvbi5lbmFibGVkKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVBbmltYXRpb25Eb21haW4obmV3U3RhdGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHNwbGl0TWFwIGxheWVyIGlkXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5uZXdTdGF0ZSxcbiAgICAgIHNwbGl0TWFwczogbmV3U3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XG4gICAgICAgIGNvbnN0IHtbb2xkSWRdOiBvbGRMYXllck1hcCwgLi4ub3RoZXJMYXllcnN9ID0gc2V0dGluZ3MubGF5ZXJzO1xuICAgICAgICByZXR1cm4gb2xkSWQgaW4gc2V0dGluZ3MubGF5ZXJzXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgICAgICAuLi5vdGhlckxheWVycyxcbiAgICAgICAgICAgICAgICBbbGF5ZXIuaWRdOiBvbGRMYXllck1hcFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBzZXR0aW5ncztcbiAgICAgIH0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdmlzdWFsIGNoYW5uZWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyfVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWcsIGNoYW5uZWx9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyLmNvbmZpZy5kYXRhSWQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW29sZExheWVyLmNvbmZpZy5kYXRhSWRdO1xuXG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKTtcblxuICBuZXdMYXllci51cGRhdGVMYXllclZpc3VhbENoYW5uZWwoZGF0YXNldCwgY2hhbm5lbCk7XG5cbiAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUsIG9sZExheWVyRGF0YSk7XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBgdmlzQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld1Zpc0NvbmZpZyk7XG4gIGNvbnN0IG5ld1Zpc0NvbmZpZyA9IHtcbiAgICAuLi5vbGRMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIC4uLmFjdGlvbi5uZXdWaXNDb25maWdcbiAgfTtcblxuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHt2aXNDb25maWc6IG5ld1Zpc0NvbmZpZ30pO1xuXG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gICAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBmaWx0ZXIgYW5pbWF0aW9uIHdpbmRvd1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3dVcGRhdGVyKHN0YXRlLCB7aWQsIGFuaW1hdGlvbldpbmRvd30pIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChmID0+XG4gICAgICBmLmlkID09PSBpZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmYsXG4gICAgICAgICAgICBhbmltYXRpb25XaW5kb3dcbiAgICAgICAgICB9XG4gICAgICAgIDogZlxuICAgIClcbiAgfTtcbn1cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcbiAgY29uc3Qgb2xkRmlsdGVyID0gc3RhdGUuZmlsdGVyc1tpZHhdO1xuXG4gIGlmICghb2xkRmlsdGVyKSB7XG4gICAgQ29uc29sZS5lcnJvcihgZmlsdGVycy4ke2lkeH0gaXMgdW5kZWZpbmVkYCk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XG5cbiAgLy8gRW5zdXJpbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICBzd2l0Y2ggKHByb3ApIHtcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXG4gICAgLy8gMi4gQWRkIGEgbmV3IGRhdGFzZXQgaWRcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWU6XG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xuICAgICAgLy8gd2UgYXJlIGdvbm5hIHVzZSBwYWlyIG9mIGRhdGFzZXRzIGFuZCBmaWVsZElkeCB0byB1cGRhdGUgdGhlIGZpbHRlclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgICAgIG5ld0ZpbHRlcixcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XG4gICAgICApO1xuICAgICAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcblxuICAgICAgaWYgKG5ld0ZpbHRlci5ncHUpIHtcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XG5cbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubGF5ZXJJZDpcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxuICAgICAgLy8gaWYgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiBsYXllcklkcywgZG9uJ3QgZG8gYW55IGZpbHRlcmluZ1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcblxuICAgICAgY29uc3QgbGF5ZXJEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgZGF0YXNldHNJZHNcbiAgICAgIGRhdGFzZXRJZHMgPSBsYXllckRhdGFJZHM7XG5cbiAgICAgIC8vIFVwZGF0ZSBuZXdGaWx0ZXIgZGF0YUlkc1xuICAgICAgY29uc3QgbmV3RGF0YUlkcyA9IHVuaXEoXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXG4gICAgICAgICAgLm1hcChsaWQgPT5cbiAgICAgICAgICAgIGdldChcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxuICAgICAgICAgICAgICBbJ2NvbmZpZycsICdkYXRhSWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICAgICk7XG5cbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGVubGFyZ2VkRmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGYgPT4gZi5lbmxhcmdlZCk7XG5cbiAgaWYgKGVubGFyZ2VkRmlsdGVyICYmIGVubGFyZ2VkRmlsdGVyLmlkICE9PSBuZXdGaWx0ZXIuaWQpIHtcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgbmV3RmlsdGVyLmVubGFyZ2VkID0gZmFsc2U7XG4gIH1cblxuICAvLyBzYXZlIG5ldyBmaWx0ZXJzIHRvIG5ld1N0YXRlXG4gIG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycycsIGlkeF0sIG5ld0ZpbHRlciwgbmV3U3RhdGUpO1xuXG4gIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgc2V0dGluZyBhIHByb3AgdGhhdCBvbmx5IHJlcXVpcmVzIHRvIGZpbHRlciB0aGUgY3VycmVudFxuICAvLyBkYXRhc2V0IHdlIHdpbGwgcGFzcyBvbmx5IHRoZSBjdXJyZW50IGRhdGFzZXQgdG8gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyBhbmRcbiAgLy8gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhIG90aGVyd2lzZSB3ZSBwYXNzIHRoZSBhbGwgbGlzdCBvZiBkYXRhc2V0cyBhcyBkZWZpbmVkIGluIGRhdGFJZFxuICBjb25zdCBkYXRhc2V0SWRzVG9GaWx0ZXIgPSBMSU1JVEVEX0ZJTFRFUl9FRkZFQ1RfUFJPUFNbcHJvcF1cbiAgICA/IFtkYXRhc2V0SWRzW3ZhbHVlSW5kZXhdXVxuICAgIDogZGF0YXNldElkcztcblxuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhcbiAgICBkYXRhc2V0SWRzVG9GaWx0ZXIsXG4gICAgbmV3U3RhdGUuZGF0YXNldHMsXG4gICAgbmV3U3RhdGUuZmlsdGVycyxcbiAgICBuZXdTdGF0ZS5sYXllcnNcbiAgKTtcblxuICBuZXdTdGF0ZSA9IHNldChbJ2RhdGFzZXRzJ10sIGZpbHRlcmVkRGF0YXNldHMsIG5ld1N0YXRlKTtcbiAgLy8gZGF0YUlkIGlzIGFuIGFycmF5XG4gIC8vIHBhc3Mgb25seSB0aGUgZGF0YXNldCB3ZSBuZWVkIHRvIHVwZGF0ZVxuICBuZXdTdGF0ZSA9IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YXNldElkc1RvRmlsdGVyLCBuZXdGaWx0ZXIpO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRGaWx0ZXJQbG90VXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZpbHRlclBsb3RVcGRhdGVyID0gKHN0YXRlLCB7aWR4LCBuZXdQcm9wLCB2YWx1ZUluZGV4ID0gMH0pID0+IHtcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xuICBjb25zdCBwcm9wID0gT2JqZWN0LmtleXMobmV3UHJvcClbMF07XG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcbiAgICAvLyBUT0RPOiBwbG90IGlzIG5vdCBzdXBwb3J0ZWQgaW4gbXVsdGkgZGF0YXNldCBmaWx0ZXIgZm9yIG5vd1xuICAgIGlmIChwbG90VHlwZSkge1xuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LCBzdGF0ZS5kYXRhc2V0c1tuZXdGaWx0ZXIuZGF0YUlkW3ZhbHVlSW5kZXhdXSksXG4gICAgICAgIHBsb3RUeXBlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpZHggPyBuZXdGaWx0ZXIgOiBmKSlcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmFkZEZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gICFhY3Rpb24uZGF0YUlkXG4gICAgPyBzdGF0ZVxuICAgIDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyczogWy4uLnN0YXRlLmZpbHRlcnMsIGdldERlZmF1bHRGaWx0ZXIoYWN0aW9uLmRhdGFJZCldXG4gICAgICB9O1xuXG4vKipcbiAqIFNldCBsYXllciBjb2xvciBwYWxldHRlIHVpIHN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIgPSAoc3RhdGUsIHtvbGRMYXllciwgcHJvcCwgbmV3Q29uZmlnfSkgPT4ge1xuICBjb25zdCBvbGRWaXhDb25maWcgPSBvbGRMYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BdO1xuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29sb3JVSShwcm9wLCBuZXdDb25maWcpO1xuICBjb25zdCBuZXdWaXNDb25maWcgPSBuZXdMYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BdO1xuICBpZiAob2xkVml4Q29uZmlnICE9PSBuZXdWaXNDb25maWcpIHtcbiAgICByZXR1cm4gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgICBvbGRMYXllcixcbiAgICAgIG5ld1Zpc0NvbmZpZzoge1xuICAgICAgICBbcHJvcF06IG5ld1Zpc0NvbmZpZ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKGwgPT4gKGwuaWQgPT09IG9sZExheWVyLmlkID8gbmV3TGF5ZXIgOiBsKSlcbiAgfTtcbn07XG5cbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBpc0FuaW1hdGluZzogIWYuaXNBbmltYXRpbmd9IDogZikpXG59KTtcblxuLyoqXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICBpc0FuaW1hdGluZzogIXN0YXRlLmFuaW1hdGlvbkNvbmZpZy5pc0FuaW1hdGluZ1xuICB9XG59KTtcbi8qKlxuICogQ2hhbmdlIGZpbHRlciBhbmltYXRpb24gc3BlZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS51cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBzcGVlZDogYWN0aW9uLnNwZWVkfSA6IGYpKVxufSk7XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uIGNvbmZpZyBjdXJyZW50IHRpbWUgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRMYXllckFuaW1hdGlvblRpbWVVcGRhdGVyfVxuICogQHB1YmxpY1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHNldExheWVyQW5pbWF0aW9uVGltZVVwZGF0ZXIgPSAoc3RhdGUsIHt2YWx1ZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBhbmltYXRpb25Db25maWc6IHtcbiAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgY3VycmVudFRpbWU6IHZhbHVlXG4gIH1cbn0pO1xuXG4vKipcbiAqIFVwZGF0ZSBhbmltYXRpb24gc3BlZWQgd2l0aCB0aGUgdmVydGljYWwgc3BlZWQgc2xpZGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoc3RhdGUsIHtzcGVlZH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIHNwZWVkXG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuZW5sYXJnZUZpbHRlclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBlbmxhcmdlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+XG4gICAgICBpID09PSBhY3Rpb24uaWR4XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZixcbiAgICAgICAgICAgIGVubGFyZ2VkOiAhZi5lbmxhcmdlZFxuICAgICAgICAgIH1cbiAgICAgICAgOiBmXG4gICAgKVxuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGVzIGZpbHRlciBmZWF0dXJlIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckZlYXR1cmVVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XTtcbiAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddKTtcbiAgY29uc3QgbmV3RmlsdGVyID0ge1xuICAgIC4uLmZpbHRlcixcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmlsdGVyLnZhbHVlLCBmaWx0ZXIuaWQsIHtcbiAgICAgIGlzVmlzaWJsZTogIWlzVmlzaWJsZVxuICAgIH0pXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBmaWx0ZXJzOiBPYmplY3QuYXNzaWduKFsuLi5zdGF0ZS5maWx0ZXJzXSwge1thY3Rpb24uaWR4XTogbmV3RmlsdGVyfSlcbiAgfTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykucmVtb3ZlRmlsdGVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZUZpbHRlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7aWR4fSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFJZCwgaWR9ID0gc3RhdGUuZmlsdGVyc1tpZHhdO1xuXG4gIGNvbnN0IG5ld0ZpbHRlcnMgPSBbXG4gICAgLi4uc3RhdGUuZmlsdGVycy5zbGljZSgwLCBpZHgpLFxuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoaWR4ICsgMSwgc3RhdGUuZmlsdGVycy5sZW5ndGgpXG4gIF07XG5cbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YUlkLCBzdGF0ZS5kYXRhc2V0cywgbmV3RmlsdGVycywgc3RhdGUubGF5ZXJzKTtcbiAgY29uc3QgbmV3RWRpdG9yID1cbiAgICBnZXRGaWx0ZXJJZEluRmVhdHVyZShzdGF0ZS5lZGl0b3Iuc2VsZWN0ZWRGZWF0dXJlKSA9PT0gaWRcbiAgICAgID8ge1xuICAgICAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICAgICAgfVxuICAgICAgOiBzdGF0ZS5lZGl0b3I7XG5cbiAgbGV0IG5ld1N0YXRlID0gc2V0KFsnZmlsdGVycyddLCBuZXdGaWx0ZXJzLCBzdGF0ZSk7XG4gIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnXSwgZmlsdGVyZWREYXRhc2V0cywgbmV3U3RhdGUpO1xuICBuZXdTdGF0ZSA9IHNldChbJ2VkaXRvciddLCBuZXdFZGl0b3IsIG5ld1N0YXRlKTtcblxuICByZXR1cm4gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKG5ld1N0YXRlLCBkYXRhSWQsIHVuZGVmaW5lZCk7XG59O1xuXG4vKipcbiAqIEFkZCBhIG5ldyBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmFkZExheWVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZExheWVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGxldCBuZXdMYXllcjtcbiAgbGV0IG5ld0xheWVyRGF0YTtcbiAgaWYgKGFjdGlvbi5jb25maWcpIHtcbiAgICBuZXdMYXllciA9IGNyZWF0ZUxheWVyRnJvbUNvbmZpZyhzdGF0ZSwgYWN0aW9uLmNvbmZpZyk7XG4gICAgaWYgKCFuZXdMYXllcikge1xuICAgICAgQ29uc29sZS53YXJuKFxuICAgICAgICAnRmFpbGVkIHRvIGNyZWF0ZSBsYXllciBmcm9tIGNvbmZpZywgaXQgdXN1YWxseSBtZWFucyB0aGUgY29uZmlnIGlzIG5vdCBiZSBpbiBjb3JyZWN0IGZvcm1hdCcsXG4gICAgICAgIGFjdGlvbi5jb25maWdcbiAgICAgICk7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSk7XG4gICAgbmV3TGF5ZXIgPSByZXN1bHQubGF5ZXI7XG4gICAgbmV3TGF5ZXJEYXRhID0gcmVzdWx0LmxheWVyRGF0YTtcbiAgfSBlbHNlIHtcbiAgICAvLyBjcmVhdGUgYW4gZW1wdHkgbGF5ZXIgd2l0aCB0aGUgZmlyc3QgYXZhaWxhYmxlIGRhdGFzZXRcbiAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXRzKVswXTtcbiAgICBuZXdMYXllciA9IG5ldyBMYXllcih7XG4gICAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgICBpc0NvbmZpZ0FjdGl2ZTogdHJ1ZSxcbiAgICAgIGRhdGFJZDogZGVmYXVsdERhdGFzZXRcbiAgICB9KTtcbiAgICBuZXdMYXllckRhdGEgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogWy4uLnN0YXRlLmxheWVycywgbmV3TGF5ZXJdLFxuICAgIGxheWVyRGF0YTogWy4uLnN0YXRlLmxheWVyRGF0YSwgbmV3TGF5ZXJEYXRhXSxcbiAgICBsYXllck9yZGVyOiBbLi4uc3RhdGUubGF5ZXJPcmRlciwgc3RhdGUubGF5ZXJPcmRlci5sZW5ndGhdLFxuICAgIHNwbGl0TWFwczogYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzdGF0ZS5zcGxpdE1hcHMsIG5ld0xheWVyKVxuICB9O1xufTtcblxuLyoqXG4gKiByZW1vdmUgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW1vdmVMYXllclVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtpZHh9KSA9PiB7XG4gIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YSwgY2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xuICBjb25zdCBsYXllclRvUmVtb3ZlID0gc3RhdGUubGF5ZXJzW2lkeF07XG4gIGNvbnN0IG5ld01hcHMgPSByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUuc3BsaXRNYXBzLCBsYXllclRvUmVtb3ZlKTtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IFsuLi5sYXllcnMuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJzLnNsaWNlKGlkeCArIDEsIGxheWVycy5sZW5ndGgpXSxcbiAgICBsYXllckRhdGE6IFsuLi5sYXllckRhdGEuc2xpY2UoMCwgaWR4KSwgLi4ubGF5ZXJEYXRhLnNsaWNlKGlkeCArIDEsIGxheWVyRGF0YS5sZW5ndGgpXSxcbiAgICBsYXllck9yZGVyOiBzdGF0ZS5sYXllck9yZGVyLmZpbHRlcihpID0+IGkgIT09IGlkeCkubWFwKHBpZCA9PiAocGlkID4gaWR4ID8gcGlkIC0gMSA6IHBpZCkpLFxuICAgIGNsaWNrZWQ6IGxheWVyVG9SZW1vdmUuaXNMYXllckhvdmVyZWQoY2xpY2tlZCkgPyB1bmRlZmluZWQgOiBjbGlja2VkLFxuICAgIGhvdmVySW5mbzogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChob3ZlckluZm8pID8gdW5kZWZpbmVkIDogaG92ZXJJbmZvLFxuICAgIHNwbGl0TWFwczogbmV3TWFwc1xuICAgIC8vIFRPRE86IHVwZGF0ZSBmaWx0ZXJzLCBjcmVhdGUgaGVscGVyIHRvIHJlbW92ZSBsYXllciBmb3JtIGZpbHRlciAocmVtb3ZlIGxheWVyaWQgYW5kIGRhdGFpZCkgaWYgbWFwcGVkXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XG59O1xuXG4vKipcbiAqIGR1cGxpY2F0ZSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmR1cGxpY2F0ZUxheWVyVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGR1cGxpY2F0ZUxheWVyVXBkYXRlciA9IChzdGF0ZSwge2lkeH0pID0+IHtcbiAgY29uc3Qge2xheWVyc30gPSBzdGF0ZTtcbiAgY29uc3Qgb3JpZ2luYWwgPSBzdGF0ZS5sYXllcnNbaWR4XTtcbiAgY29uc3Qgb3JpZ2luYWxMYXllck9yZGVySWR4ID0gc3RhdGUubGF5ZXJPcmRlci5maW5kSW5kZXgoaSA9PiBpID09PSBpZHgpO1xuXG4gIGlmICghb3JpZ2luYWwpIHtcbiAgICBDb25zb2xlLndhcm4oYGxheWVyLiR7aWR4fSBpcyB1bmRlZmluZWRgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbGV0IG5ld0xhYmVsID0gYENvcHkgb2YgJHtvcmlnaW5hbC5jb25maWcubGFiZWx9YDtcbiAgbGV0IHBvc3RmaXggPSAwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gIHdoaWxlIChsYXllcnMuZmluZChsID0+IGwuY29uZmlnLmxhYmVsID09PSBuZXdMYWJlbCkpIHtcbiAgICBuZXdMYWJlbCA9IGBDb3B5IG9mICR7b3JpZ2luYWwuY29uZmlnLmxhYmVsfSAkeysrcG9zdGZpeH1gO1xuICB9XG5cbiAgLy8gY29sbGVjdCBsYXllciBjb25maWcgZnJvbSBvcmlnaW5hbFxuICBjb25zdCBsb2FkZWRMYXllciA9IHNlcmlhbGl6ZUxheWVyKG9yaWdpbmFsKTtcblxuICAvLyBhc3NpZ24gbmV3IGlkIGFuZCBsYWJlbCB0byBjb3BpZWQgbGF5ZXJcbiAgaWYgKCFsb2FkZWRMYXllci5jb25maWcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbG9hZGVkTGF5ZXIuY29uZmlnLmxhYmVsID0gbmV3TGFiZWw7XG4gIGxvYWRlZExheWVyLmlkID0gZ2VuZXJhdGVIYXNoSWQoTEFZRVJfSURfTEVOR1RIKTtcblxuICAvLyBhZGQgbGF5ZXIgdG8gc3RhdGVcbiAgbGV0IG5leHRTdGF0ZSA9IGFkZExheWVyVXBkYXRlcihzdGF0ZSwge2NvbmZpZzogbG9hZGVkTGF5ZXJ9KTtcblxuICAvLyBuZXcgYWRkZWQgbGF5ZXIgYXJlIGF0IHRoZSBlbmQsIG1vdmUgaXQgdG8gYmUgb24gdG9wIG9mIG9yaWdpbmFsIGxheWVyXG4gIGNvbnN0IG5ld0xheWVyT3JkZXJJZHggPSBuZXh0U3RhdGUubGF5ZXJPcmRlci5sZW5ndGggLSAxO1xuICBjb25zdCBuZXdMYXllck9yZGVyID0gYXJyYXlJbnNlcnQoXG4gICAgbmV4dFN0YXRlLmxheWVyT3JkZXIuc2xpY2UoMCwgbmV3TGF5ZXJPcmRlcklkeCksXG4gICAgb3JpZ2luYWxMYXllck9yZGVySWR4LFxuICAgIG5ld0xheWVyT3JkZXJJZHhcbiAgKTtcblxuICBuZXh0U3RhdGUgPSB7XG4gICAgLi4ubmV4dFN0YXRlLFxuICAgIGxheWVyT3JkZXI6IG5ld0xheWVyT3JkZXJcbiAgfTtcblxuICByZXR1cm4gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5leHRTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFJlb3JkZXIgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZW9yZGVyTGF5ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChzdGF0ZSwge29yZGVyfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyT3JkZXI6IG9yZGVyXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlbW92ZURhdGFzZXRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRGF0YXNldFVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAvLyBleHRyYWN0IGRhdGFzZXQga2V5XG4gIGNvbnN0IHtkYXRhSWQ6IGRhdGFzZXRLZXl9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YXNldHN9ID0gc3RhdGU7XG5cbiAgLy8gY2hlY2sgaWYgZGF0YXNldCBpcyBwcmVzZW50XG4gIGlmICghZGF0YXNldHNbZGF0YXNldEtleV0pIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICBjb25zdCB7XG4gICAgbGF5ZXJzLFxuICAgIGRhdGFzZXRzOiB7W2RhdGFzZXRLZXldOiBkYXRhc2V0LCAuLi5uZXdEYXRhc2V0c31cbiAgfSA9IHN0YXRlO1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgY29uc3QgaW5kZXhlcyA9IGxheWVycy5yZWR1Y2UoKGxpc3RPZkluZGV4ZXMsIGxheWVyLCBpbmRleCkgPT4ge1xuICAgIGlmIChsYXllci5jb25maWcuZGF0YUlkID09PSBkYXRhc2V0S2V5KSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBsaXN0T2ZJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gbGlzdE9mSW5kZXhlcztcbiAgfSwgW10pO1xuXG4gIC8vIHJlbW92ZSBsYXllcnMgYW5kIGRhdGFzZXRzXG4gIGNvbnN0IHtuZXdTdGF0ZX0gPSBpbmRleGVzLnJlZHVjZShcbiAgICAoe25ld1N0YXRlOiBjdXJyZW50U3RhdGUsIGluZGV4Q291bnRlcn0sIGlkeCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gaWR4IC0gaW5kZXhDb3VudGVyO1xuICAgICAgY3VycmVudFN0YXRlID0gcmVtb3ZlTGF5ZXJVcGRhdGVyKGN1cnJlbnRTdGF0ZSwge2lkeDogY3VycmVudEluZGV4fSk7XG4gICAgICBpbmRleENvdW50ZXIrKztcbiAgICAgIHJldHVybiB7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfTtcbiAgICB9LFxuICAgIHtuZXdTdGF0ZTogey4uLnN0YXRlLCBkYXRhc2V0czogbmV3RGF0YXNldHN9LCBpbmRleENvdW50ZXI6IDB9XG4gICk7XG5cbiAgLy8gcmVtb3ZlIGZpbHRlcnNcbiAgY29uc3QgZmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGZpbHRlciA9PiAhZmlsdGVyLmRhdGFJZC5pbmNsdWRlcyhkYXRhc2V0S2V5KSk7XG5cbiAgLy8gdXBkYXRlIGludGVyYWN0aW9uQ29uZmlnXG4gIGxldCB7aW50ZXJhY3Rpb25Db25maWd9ID0gc3RhdGU7XG4gIGNvbnN0IHt0b29sdGlwfSA9IGludGVyYWN0aW9uQ29uZmlnO1xuICBpZiAodG9vbHRpcCkge1xuICAgIGNvbnN0IHtjb25maWd9ID0gdG9vbHRpcDtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtbZGF0YXNldEtleV06IGZpZWxkcywgLi4uZmllbGRzVG9TaG93fSA9IGNvbmZpZy5maWVsZHNUb1Nob3c7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGludGVyYWN0aW9uQ29uZmlnID0ge1xuICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICB0b29sdGlwOiB7Li4udG9vbHRpcCwgY29uZmlnOiB7Li4uY29uZmlnLCBmaWVsZHNUb1Nob3d9fVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gey4uLm5ld1N0YXRlLCBmaWx0ZXJzLCBpbnRlcmFjdGlvbkNvbmZpZ307XG59O1xuXG4vKipcbiAqIHVwZGF0ZSBsYXllciBibGVuZGluZyBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykudXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbGF5ZXJCbGVuZGluZzogYWN0aW9uLm1vZGVcbn0pO1xuXG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93RGF0YXNldFRhYmxlVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdGluZ0RhdGFzZXQ6IGFjdGlvbi5kYXRhSWRcbiAgfTtcbn07XG5cbi8qKlxuICogcmVzZXQgdmlzU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlc2V0TWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLklOSVRJQUxfVklTX1NUQVRFLFxuICAuLi5zdGF0ZS5pbml0aWFsU3RhdGUsXG4gIGluaXRpYWxTdGF0ZTogc3RhdGUuaW5pdGlhbFN0YXRlXG59KTtcblxuLyoqXG4gKiBQcm9wYWdhdGUgYHZpc1N0YXRlYCByZWR1Y2VyIHdpdGggYSBuZXcgY29uZmlndXJhdGlvbi4gQ3VycmVudCBjb25maWcgd2lsbCBiZSBvdmVycmlkZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5yZWNlaXZlTWFwQ29uZmlnVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge319fSkgPT4ge1xuICBpZiAoIWNvbmZpZy52aXNTdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHtrZWVwRXhpc3RpbmdDb25maWd9ID0gb3B0aW9ucztcblxuICAvLyByZXNldCBjb25maWcgaWYga2VlcEV4aXN0aW5nQ29uZmlnIGlzIGZhbHN5XG4gIGxldCBtZXJnZWRTdGF0ZSA9ICFrZWVwRXhpc3RpbmdDb25maWcgPyByZXNldE1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUpIDogc3RhdGU7XG4gIGZvciAoY29uc3QgbWVyZ2VyIG9mIHN0YXRlLm1lcmdlcnMpIHtcbiAgICBpZiAoaXNWYWxpZE1lcmdlcihtZXJnZXIpICYmIGNvbmZpZy52aXNTdGF0ZVttZXJnZXIucHJvcF0pIHtcbiAgICAgIG1lcmdlZFN0YXRlID0gbWVyZ2VyLm1lcmdlKG1lcmdlZFN0YXRlLCBjb25maWcudmlzU3RhdGVbbWVyZ2VyLnByb3BdLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkU3RhdGU7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLmxheWVySG92ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJIb3ZlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGhvdmVySW5mbzogYWN0aW9uLmluZm9cbn0pO1xuXG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogVXBkYXRlIGBpbnRlcmFjdGlvbkNvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7Y29uZmlnfSA9IGFjdGlvbjtcblxuICBjb25zdCBpbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAuLi57W2NvbmZpZy5pZF06IGNvbmZpZ31cbiAgfTtcblxuICAvLyBEb24ndCBlbmFibGUgdG9vbHRpcCBhbmQgYnJ1c2ggYXQgdGhlIHNhbWUgdGltZVxuICAvLyBidXQgY29vcmRpbmF0ZXMgY2FuIGJlIHNob3duIGF0IGFsbCB0aW1lXG4gIGNvbnN0IGNvbnRyYWRpY3QgPSBbJ2JydXNoJywgJ3Rvb2x0aXAnXTtcblxuICBpZiAoXG4gICAgY29udHJhZGljdC5pbmNsdWRlcyhjb25maWcuaWQpICYmXG4gICAgY29uZmlnLmVuYWJsZWQgJiZcbiAgICAhc3RhdGUuaW50ZXJhY3Rpb25Db25maWdbY29uZmlnLmlkXS5lbmFibGVkXG4gICkge1xuICAgIC8vIG9ubHkgZW5hYmxlIG9uZSBpbnRlcmFjdGlvbiBhdCBhIHRpbWVcbiAgICBjb250cmFkaWN0LmZvckVhY2goayA9PiB7XG4gICAgICBpZiAoayAhPT0gY29uZmlnLmlkKSB7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnW2tdID0gey4uLmludGVyYWN0aW9uQ29uZmlnW2tdLCBlbmFibGVkOiBmYWxzZX07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpbnRlcmFjdGlvbkNvbmZpZ1xuICB9O1xuXG4gIGlmIChjb25maWcuaWQgPT09ICdnZW9jb2RlcicgJiYgIWNvbmZpZy5lbmFibGVkKSB7XG4gICAgcmV0dXJuIHJlbW92ZURhdGFzZXRVcGRhdGVyKG5ld1N0YXRlLCB7ZGF0YUlkOiAnZ2VvY29kZXJfZGF0YXNldCd9KTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGxheWVyIGNsaWNrIGV2ZW50IHdpdGggY2xpY2tlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sYXllckNsaWNrVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVyQ2xpY2tVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtb3VzZVBvczogc3RhdGUuaW50ZXJhY3Rpb25Db25maWcuY29vcmRpbmF0ZS5lbmFibGVkXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxuICAgICAgICBwaW5uZWQ6IHN0YXRlLm1vdXNlUG9zLnBpbm5lZCA/IG51bGwgOiBjbG9uZURlZXAoc3RhdGUubW91c2VQb3MpXG4gICAgICB9XG4gICAgOiBzdGF0ZS5tb3VzZVBvcyxcbiAgY2xpY2tlZDogYWN0aW9uLmluZm8gJiYgYWN0aW9uLmluZm8ucGlja2VkID8gYWN0aW9uLmluZm8gOiBudWxsXG59KTtcblxuLyoqXG4gKiBUcmlnZ2VyIG1hcCBjbGljayBldmVudCwgdW5zZWxlY3QgY2xpY2tlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5tYXBDbGlja1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBDbGlja1VwZGF0ZXIgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgY2xpY2tlZDogbnVsbFxuICB9O1xufTtcblxuLyoqXG4gKiBUcmlnZ2VyIG1hcCBtb3ZlIGV2ZW50XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubW91c2VNb3ZlVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1vdXNlTW92ZVVwZGF0ZXIgPSAoc3RhdGUsIHtldnR9KSA9PiB7XG4gIGlmIChPYmplY3QudmFsdWVzKHN0YXRlLmludGVyYWN0aW9uQ29uZmlnKS5zb21lKGNvbmZpZyA9PiBjb25maWcuZW5hYmxlZCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBtb3VzZVBvczoge1xuICAgICAgICAuLi5zdGF0ZS5tb3VzZVBvcyxcbiAgICAgICAgbW91c2VQb3NpdGlvbjogWy4uLmV2dC5wb2ludF0sXG4gICAgICAgIGNvb3JkaW5hdGU6IFsuLi5ldnQubG5nTGF0XVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGZvciBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnRvZ2dsZVNwbGl0TWFwVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICBzdGF0ZS5zcGxpdE1hcHMgJiYgc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCA9PT0gMFxuICAgID8ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gbWF5YmUgd2Ugc2hvdWxkIHVzZSBhbiBhcnJheSB0byBzdG9yZSBzdGF0ZSBmb3IgYSBzaW5nbGUgbWFwIGFzIHdlbGxcbiAgICAgICAgLy8gaWYgY3VycmVudCBtYXBzIGxlbmd0aCBpcyBlcXVhbCB0byAwIGl0IG1lYW5zIHRoYXQgd2UgYXJlIGFib3V0IHRvIHNwbGl0IHRoZSB2aWV3XG4gICAgICAgIHNwbGl0TWFwczogY29tcHV0ZVNwbGl0TWFwTGF5ZXJzKHN0YXRlLmxheWVycylcbiAgICAgIH1cbiAgICA6IGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pO1xuXG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGEgbGF5ZXIgaW4gYSBzcGxpdCBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVMYXllckZvck1hcFVwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVMYXllckZvck1hcFVwZGF0ZXIgPSAoc3RhdGUsIHttYXBJbmRleCwgbGF5ZXJJZH0pID0+IHtcbiAgY29uc3Qge3NwbGl0TWFwc30gPSBzdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcCgoc20sIGkpID0+XG4gICAgICBpID09PSBtYXBJbmRleFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnNwbGl0TWFwc1tpXSxcbiAgICAgICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgICAuLi5zcGxpdE1hcHNbaV0ubGF5ZXJzLFxuICAgICAgICAgICAgICAvLyBpZiBsYXllcklkIG5vdCBpbiBsYXllcnMsIHNldCBpdCB0byB2aXNpYmxlXG4gICAgICAgICAgICAgIFtsYXllcklkXTogIXNwbGl0TWFwc1tpXS5sYXllcnNbbGF5ZXJJZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDogc21cbiAgICApXG4gIH07XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZVZpc0RhdGFVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNEYXRhVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIGRhdGFzZXRzIGNhbiBiZSBhIHNpbmdsZSBkYXRhIGVudHJpZXMgb3IgYW4gYXJyYXkgb2YgbXVsdGlwbGUgZGF0YSBlbnRyaWVzXG4gIGNvbnN0IHtjb25maWcsIG9wdGlvbnN9ID0gYWN0aW9uO1xuICBjb25zdCBkYXRhc2V0cyA9IHRvQXJyYXkoYWN0aW9uLmRhdGFzZXRzKTtcblxuICBjb25zdCBuZXdEYXRhRW50cmllcyA9IGRhdGFzZXRzLnJlZHVjZShcbiAgICAoYWNjdSwge2luZm8gPSB7fSwgZGF0YSwgbWV0YWRhdGF9ID0ge30pID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKGNyZWF0ZU5ld0RhdGFFbnRyeSh7aW5mbywgZGF0YSwgbWV0YWRhdGF9LCBzdGF0ZS5kYXRhc2V0cykgfHwge30pXG4gICAgfSksXG4gICAge31cbiAgKTtcblxuICBjb25zdCBkYXRhRW1wdHkgPSBPYmplY3Qua2V5cyhuZXdEYXRhRW50cmllcykubGVuZ3RoIDwgMTtcblxuICAvLyBhcHBseSBjb25maWcgaWYgcGFzc2VkIGZyb20gYWN0aW9uXG4gIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBjb25maWdcbiAgICA/IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyKHN0YXRlLCB7XG4gICAgICAgIHBheWxvYWQ6IHtjb25maWcsIG9wdGlvbnN9XG4gICAgICB9KVxuICAgIDogc3RhdGU7XG5cbiAgbGV0IG1lcmdlZFN0YXRlID0ge1xuICAgIC4uLnByZXZpb3VzU3RhdGUsXG4gICAgZGF0YXNldHM6IHtcbiAgICAgIC4uLnByZXZpb3VzU3RhdGUuZGF0YXNldHMsXG4gICAgICAuLi5uZXdEYXRhRW50cmllc1xuICAgIH1cbiAgfTtcblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIGNvbmZpZyB0byBiZSBtZXJnZWRcbiAgZm9yIChjb25zdCBtZXJnZXIgb2YgbWVyZ2VkU3RhdGUubWVyZ2Vycykge1xuICAgIGlmIChpc1ZhbGlkTWVyZ2VyKG1lcmdlcikgJiYgbWVyZ2VyLnRvTWVyZ2VQcm9wICYmIG1lcmdlZFN0YXRlW21lcmdlci50b01lcmdlUHJvcF0pIHtcbiAgICAgIGNvbnN0IHRvTWVyZ2UgPSBtZXJnZWRTdGF0ZVttZXJnZXIudG9NZXJnZVByb3BdO1xuICAgICAgbWVyZ2VkU3RhdGVbbWVyZ2VyLnRvTWVyZ2VQcm9wXSA9IElOSVRJQUxfVklTX1NUQVRFW21lcmdlci50b01lcmdlUHJvcF07XG4gICAgICBtZXJnZWRTdGF0ZSA9IG1lcmdlci5tZXJnZShtZXJnZWRTdGF0ZSwgdG9NZXJnZSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0xheWVycyA9ICFkYXRhRW1wdHlcbiAgICA/IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgJiYgbC5jb25maWcuZGF0YUlkIGluIG5ld0RhdGFFbnRyaWVzKVxuICAgIDogW107XG5cbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoICYmIChvcHRpb25zIHx8IHt9KS5hdXRvQ3JlYXRlTGF5ZXJzICE9PSBmYWxzZSkge1xuICAgIC8vIG5vIGxheWVyIG1lcmdlZCwgZmluZCBkZWZhdWx0c1xuICAgIGNvbnN0IHJlc3VsdCA9IGFkZERlZmF1bHRMYXllcnMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzKTtcbiAgICBtZXJnZWRTdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcbiAgICBuZXdMYXllcnMgPSByZXN1bHQubmV3TGF5ZXJzO1xuICB9XG5cbiAgaWYgKG1lcmdlZFN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAvLyBpZiBtYXAgaXMgc3BsaXQsIGFkZCBuZXcgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICAgIG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIoXG4gICAgICBsID0+IGwuY29uZmlnLmRhdGFJZCAmJiBsLmNvbmZpZy5kYXRhSWQgaW4gbmV3RGF0YUVudHJpZXNcbiAgICApO1xuICAgIG1lcmdlZFN0YXRlID0ge1xuICAgICAgLi4ubWVyZ2VkU3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcnMpXG4gICAgfTtcbiAgfVxuXG4gIC8vIGlmIG5vIHRvb2x0aXBzIG1lcmdlZCBhZGQgZGVmYXVsdCB0b29sdGlwc1xuICBPYmplY3Qua2V5cyhuZXdEYXRhRW50cmllcykuZm9yRWFjaChkYXRhSWQgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXBGaWVsZHMgPSBtZXJnZWRTdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodG9vbHRpcEZpZWxkcykgfHwgIXRvb2x0aXBGaWVsZHMubGVuZ3RoKSB7XG4gICAgICBtZXJnZWRTdGF0ZSA9IGFkZERlZmF1bHRUb29sdGlwcyhtZXJnZWRTdGF0ZSwgbmV3RGF0YUVudHJpZXNbZGF0YUlkXSk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgdXBkYXRlZFN0YXRlID0gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKFxuICAgIG1lcmdlZFN0YXRlLFxuICAgIGRhdGFFbXB0eSA/IE9iamVjdC5rZXlzKG1lcmdlZFN0YXRlLmRhdGFzZXRzKSA6IE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKSxcbiAgICB1bmRlZmluZWRcbiAgKTtcblxuICAvLyByZWdpc3RlciBsYXllciBhbmltYXRpb24gZG9tYWluLFxuICAvLyBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBsYXllciBkYXRhIGlzIGNhbGN1bGF0ZWRcbiAgdXBkYXRlZFN0YXRlID0gdXBkYXRlQW5pbWF0aW9uRG9tYWluKHVwZGF0ZWRTdGF0ZSk7XG5cbiAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbi8qKlxuICogUmVuYW1lIGFuIGV4aXN0aW5nIGRhdGFzZXQgaW4gYHZpc1N0YXRlYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnJlbmFtZURhdGFzZXRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRGF0YXNldFVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7ZGF0YUlkLCBsYWJlbH0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcbiAgY29uc3QgZXhpc3RpbmcgPSBkYXRhc2V0c1tkYXRhSWRdO1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBleGlzdGluZ1xuICAgID8ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YXNldHM6IHtcbiAgICAgICAgICAuLi5kYXRhc2V0cyxcbiAgICAgICAgICBbZGF0YUlkXToge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmcsXG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIDogLy8gTm8tb3AgaWYgdGhlIGRhdGFzZXQgZG9lc24ndCBleGlzdFxuICAgICAgc3RhdGU7XG59XG5cbi8qKlxuICogV2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBzcGVjaWZpYyBtYXAgY2xvc2luZyBpY29uXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcbiAqIFRPRE86IGkgdGhpbmsgaW4gdGhlIGZ1dHVyZSB0aGlzIGFjdGlvbiBzaG91bGQgYmUgY2FsbGVkIG1lcmdlIG1hcCBsYXllcnMgd2l0aCBnbG9iYWwgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gcmV0cmlldmUgbGF5ZXJzIG1ldGEgZGF0YSBmcm9tIHRoZSByZW1haW5pbmcgbWFwIHRoYXQgd2UgbmVlZCB0byBrZWVwXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3QgbWFwTGF5ZXJzID0gc3RhdGUuc3BsaXRNYXBzW2luZGV4VG9SZXRyaWV2ZV0ubGF5ZXJzO1xuICBjb25zdCB7bGF5ZXJzfSA9IHN0YXRlO1xuXG4gIC8vIHVwZGF0ZSBsYXllciB2aXNpYmlsaXR5XG4gIGNvbnN0IG5ld0xheWVycyA9IGxheWVycy5tYXAobGF5ZXIgPT5cbiAgICAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgICAvLyBpZiBsYXllci5pZCBpcyBub3QgaW4gbWFwTGF5ZXJzLCBpdCBzaG91bGQgYmUgaW5WaXNpYmxlXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgOiBsYXllclxuICApO1xuXG4gIC8vIGRlbGV0ZSBtYXBcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBzcGxpdE1hcHM6IFtdXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVzVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc1VwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7ZmlsZXMsIG9uRmluaXNoID0gbG9hZEZpbGVzU3VjY2Vzc30gPSBhY3Rpb247XG4gIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgZmlsZUxvYWRpbmdQcm9ncmVzcyA9IEFycmF5LmZyb20oZmlsZXMpLnJlZHVjZShcbiAgICAoYWNjdSwgZiwgaSkgPT4gbWVyZ2VfKGluaXRpYWxGaWxlTG9hZGluZ1Byb2dyZXNzKGYsIGkpKShhY2N1KSxcbiAgICB7fVxuICApO1xuXG4gIGNvbnN0IGZpbGVMb2FkaW5nID0ge1xuICAgIGZpbGVDYWNoZTogW10sXG4gICAgZmlsZXNUb0xvYWQ6IGZpbGVzLFxuICAgIG9uRmluaXNoXG4gIH07XG5cbiAgY29uc3QgbmV4dFN0YXRlID0gbWVyZ2VfKHtmaWxlTG9hZGluZ1Byb2dyZXNzLCBmaWxlTG9hZGluZ30pKHN0YXRlKTtcblxuICByZXR1cm4gbG9hZE5leHRGaWxlVXBkYXRlcihuZXh0U3RhdGUpO1xufTtcblxuLyoqXG4gKiBTdWNlc3NmdWxseSBsb2FkZWQgb25lIGZpbGUsIG1vdmUgb24gdG8gdGhlIG5leHQgb25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykubG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVOYW1lLCBmaWxlQ2FjaGV9ID0gYWN0aW9uO1xuICBjb25zdCB7ZmlsZXNUb0xvYWQsIG9uRmluaXNofSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAxLCBtZXNzYWdlOiAnRG9uZSd9XG4gIH0pO1xuXG4gIC8vIHNhdmUgcHJvY2Vzc2VkIGZpbGUgdG8gZmlsZUNhY2hlXG4gIGNvbnN0IHN0YXRlV2l0aENhY2hlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlQ2FjaGV9KSkoc3RhdGVXaXRoUHJvZ3Jlc3MpO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhDYWNoZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59XG5cbi8vIHdpdGhUYXNrPFQ+KHN0YXRlOiBULCB0YXNrOiBhbnkpOiBUXG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkTmV4dEZpbGVVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5leHRGaWxlVXBkYXRlcihzdGF0ZSkge1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZH0gPSBzdGF0ZS5maWxlTG9hZGluZztcbiAgY29uc3QgW2ZpbGUsIC4uLnJlbWFpbmluZ0ZpbGVzVG9Mb2FkXSA9IGZpbGVzVG9Mb2FkO1xuXG4gIC8vIHNhdmUgZmlsZXNUb0xvYWQgdG8gc3RhdGVcbiAgY29uc3QgbmV4dFN0YXRlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlc1RvTG9hZDogcmVtYWluaW5nRmlsZXNUb0xvYWR9KSkoc3RhdGUpO1xuXG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIobmV4dFN0YXRlLCB7XG4gICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICBwcm9ncmVzczoge3BlcmNlbnQ6IDAsIG1lc3NhZ2U6ICdsb2FkaW5nLi4uJ31cbiAgfSk7XG5cbiAgY29uc3Qge2xvYWRlcnMsIGxvYWRPcHRpb25zfSA9IHN0YXRlO1xuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgbWFrZUxvYWRGaWxlVGFzayhmaWxlLCBuZXh0U3RhdGUuZmlsZUxvYWRpbmcuZmlsZUNhY2hlLCBsb2FkZXJzLCBsb2FkT3B0aW9ucylcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMb2FkRmlsZVRhc2soZmlsZSwgZmlsZUNhY2hlLCBsb2FkZXJzID0gW10sIGxvYWRPcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIExPQURfRklMRV9UQVNLKHtmaWxlLCBmaWxlQ2FjaGUsIGxvYWRlcnMsIGxvYWRPcHRpb25zfSkuYmltYXAoXG4gICAgLy8gcHJldHRpZXIgaWdub3JlXG4gICAgLy8gc3VjY2Vzc1xuICAgIGdlbiA9PlxuICAgICAgbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgIGdlbixcbiAgICAgICAgZmlsZU5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgb25GaW5pc2g6IHJlc3VsdCA9PlxuICAgICAgICAgIHByb2Nlc3NGaWxlQ29udGVudCh7XG4gICAgICAgICAgICBjb250ZW50OiByZXN1bHQsXG4gICAgICAgICAgICBmaWxlQ2FjaGVcbiAgICAgICAgICB9KVxuICAgICAgfSksXG5cbiAgICAvLyBlcnJvclxuICAgIGVyciA9PiBsb2FkRmlsZXNFcnIoZmlsZS5uYW1lLCBlcnIpXG4gICk7XG59XG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5wcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtjb250ZW50LCBmaWxlQ2FjaGV9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3Qgc3RhdGVXaXRoUHJvZ3Jlc3MgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7cGVyY2VudDogMSwgbWVzc2FnZTogJ3Byb2Nlc3NpbmcuLi4nfVxuICB9KTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgc3RhdGVXaXRoUHJvZ3Jlc3MsXG4gICAgUFJPQ0VTU19GSUxFX0RBVEEoe2NvbnRlbnQsIGZpbGVDYWNoZX0pLmJpbWFwKFxuICAgICAgcmVzdWx0ID0+IGxvYWRGaWxlU3RlcFN1Y2Nlc3Moe2ZpbGVOYW1lOiBjb250ZW50LmZpbGVOYW1lLCBmaWxlQ2FjaGU6IHJlc3VsdH0pLFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0Vycihjb250ZW50LmZpbGVOYW1lLCBlcnIpXG4gICAgKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9ncmVzcyhwcmV2UHJvZ3Jlc3MgPSB7fSwgcHJvZ3Jlc3MpIHtcbiAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gcmVjZWl2aW5nIHF1ZXJ5IG1ldGFkYXRhIG9yIG90aGVyIGNhc2VzIHdlIGRvbid0XG4gIC8vIGhhdmUgYW4gdXBkYXRlIGZvciB0aGUgdXNlci5cbiAgaWYgKCFwcm9ncmVzcyB8fCAhcHJvZ3Jlc3MucGVyY2VudCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGVyY2VudDogcHJvZ3Jlc3MucGVyY2VudFxuICB9O1xufVxuXG4vKipcbiAqIGdldHMgY2FsbGVkIHdpdGggcGF5bG9hZCA9IEFzeW5jR2VuZXJhdG9yPD8/Pz5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5uZXh0RmlsZUJhdGNoVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG5leHRGaWxlQmF0Y2hVcGRhdGVyID0gKFxuICBzdGF0ZSxcbiAge3BheWxvYWQ6IHtnZW4sIGZpbGVOYW1lLCBwcm9ncmVzcywgYWNjdW11bGF0ZWQsIG9uRmluaXNofX1cbikgPT4ge1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHBhcnNlUHJvZ3Jlc3Moc3RhdGUuZmlsZUxvYWRpbmdQcm9ncmVzc1tmaWxlTmFtZV0sIHByb2dyZXNzKVxuICB9KTtcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aFByb2dyZXNzLFxuICAgIFVOV1JBUF9UQVNLKGdlbi5uZXh0KCkpLmJpbWFwKFxuICAgICAgKHt2YWx1ZSwgZG9uZX0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRvbmVcbiAgICAgICAgICA/IG9uRmluaXNoKGFjY3VtdWxhdGVkKVxuICAgICAgICAgIDogbmV4dEZpbGVCYXRjaCh7XG4gICAgICAgICAgICAgIGdlbixcbiAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgIHByb2dyZXNzOiB2YWx1ZS5wcm9ncmVzcyxcbiAgICAgICAgICAgICAgYWNjdW11bGF0ZWQ6IHZhbHVlLFxuICAgICAgICAgICAgICBvbkZpbmlzaFxuICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGxvYWRGaWxlc0VycihmaWxlTmFtZSwgZXJyKVxuICAgIClcbiAgKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5sb2FkRmlsZXNFcnJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChzdGF0ZSwge2Vycm9yLCBmaWxlTmFtZX0pID0+IHtcbiAgLy8gdXBkYXRlIHVpIHdpdGggZXJyb3IgbWVzc2FnZVxuICBDb25zb2xlLndhcm4oZXJyb3IpO1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZCwgb25GaW5pc2gsIGZpbGVDYWNoZX0gPSBzdGF0ZS5maWxlTG9hZGluZztcblxuICBjb25zdCBuZXh0U3RhdGUgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7ZXJyb3J9XG4gIH0pO1xuXG4gIC8vIGtpY2sgb2ZmIG5leHQgZmlsZSBvciBmaW5pc2hcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5leHRTdGF0ZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59O1xuXG4vKipcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYXBwbHlDUFVGaWx0ZXJVcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKHN0YXRlLCB7ZGF0YUlkfSkgPT4ge1xuICAvLyBhcHBseSBjcHVGaWx0ZXJcbiAgY29uc3QgZGF0YUlkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICByZXR1cm4gZGF0YUlkcy5yZWR1Y2UoKGFjY3UsIGlkKSA9PiBmaWx0ZXJEYXRhc2V0Q1BVKGFjY3UsIGlkKSwgc3RhdGUpO1xufTtcblxuLyoqXG4gKiBVc2VyIGlucHV0IHRvIHVwZGF0ZSB0aGUgaW5mbyBvZiB0aGUgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0TWFwSW5mb1VwZGF0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwSW5mbzoge1xuICAgIC4uLnN0YXRlLm1hcEluZm8sXG4gICAgLi4uYWN0aW9uLmluZm9cbiAgfVxufSk7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgQWxsIGxheWVyIGRvbWFpbiBhbmQgbGF5ZXIgZGF0YSBvZiBzdGF0ZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuYWRkRGVmYXVsdExheWVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoc3RhdGUsIGRhdGFzZXRzKSB7XG4gIC8qKiBAdHlwZSB7TGF5ZXJbXX0gKi9cbiAgY29uc3QgZW1wdHkgPSBbXTtcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZSgoYWNjdSwgZGF0YXNldCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kTGF5ZXJzID0gZmluZERlZmF1bHRMYXllcihkYXRhc2V0LCBzdGF0ZS5sYXllckNsYXNzZXMpO1xuICAgIHJldHVybiBmb3VuZExheWVycyAmJiBmb3VuZExheWVycy5sZW5ndGggPyBhY2N1LmNvbmNhdChmb3VuZExheWVycykgOiBhY2N1O1xuICB9LCBlbXB0eSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIC4uLmRlZmF1bHRMYXllcnNdLFxuICAgICAgbGF5ZXJPcmRlcjogW1xuICAgICAgICAvLyBwdXQgbmV3IGxheWVycyBvbiB0b3Agb2Ygb2xkIG9uZXNcbiAgICAgICAgLi4uZGVmYXVsdExheWVycy5tYXAoKF8sIGkpID0+IHN0YXRlLmxheWVycy5sZW5ndGggKyBpKSxcbiAgICAgICAgLi4uc3RhdGUubGF5ZXJPcmRlclxuICAgICAgXVxuICAgIH0sXG4gICAgbmV3TGF5ZXJzOiBkZWZhdWx0TGF5ZXJzXG4gIH07XG59XG5cbi8qKlxuICogaGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgZGVmYXVsdCB0b29sdGlwc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VG9vbHRpcHMoc3RhdGUsIGRhdGFzZXQpIHtcbiAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IGZpbmRGaWVsZHNUb1Nob3coZGF0YXNldCk7XG4gIGNvbnN0IG1lcmdlZCA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3csXG4gICAgLi4udG9vbHRpcEZpZWxkc1xuICB9O1xuXG4gIHJldHVybiBzZXQoWydpbnRlcmFjdGlvbkNvbmZpZycsICd0b29sdGlwJywgJ2NvbmZpZycsICdmaWVsZHNUb1Nob3cnXSwgbWVyZ2VkLCBzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyhmaWxlLCBpbmRleCkge1xuICBjb25zdCBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCBgVW50aXRsZWQgRmlsZSAke2luZGV4fWA7XG4gIHJldHVybiB7XG4gICAgW2ZpbGVOYW1lXToge1xuICAgICAgLy8gcGVyY2VudCBvZiBjdXJyZW50IGZpbGVcbiAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge2ZpbGVOYW1lLCBwcm9ncmVzc30pIHtcbiAgcmV0dXJuIHBpY2tfKCdmaWxlTG9hZGluZ1Byb2dyZXNzJykocGlja18oZmlsZU5hbWUpKG1lcmdlXyhwcm9ncmVzcykpKShzdGF0ZSk7XG59XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgbGF5ZXIgZG9tYWlucyBmb3IgYW4gYXJyYXkgb2YgZGF0YXNldHNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnVwZGF0ZUFsbExheWVyRG9tYWluRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShzdGF0ZSwgZGF0YUlkLCB1cGRhdGVkRmlsdGVyKSB7XG4gIGNvbnN0IGRhdGFJZHMgPSB0eXBlb2YgZGF0YUlkID09PSAnc3RyaW5nJyA/IFtkYXRhSWRdIDogZGF0YUlkO1xuICBjb25zdCBuZXdMYXllcnMgPSBbXTtcbiAgY29uc3QgbmV3TGF5ZXJEYXRhID0gW107XG5cbiAgc3RhdGUubGF5ZXJzLmZvckVhY2goKG9sZExheWVyLCBpKSA9PiB7XG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cbiAgICAgIGNvbnN0IG5ld0xheWVyID1cbiAgICAgICAgdXBkYXRlZEZpbHRlciAmJiB1cGRhdGVkRmlsdGVyLmZpeGVkRG9tYWluXG4gICAgICAgICAgPyBvbGRMYXllclxuICAgICAgICAgIDogb2xkTGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMsIHVwZGF0ZWRGaWx0ZXIpO1xuXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBzdGF0ZS5sYXllckRhdGFbaV0pO1xuXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChsYXllckRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChzdGF0ZS5sYXllckRhdGFbaV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW4oc3RhdGUpIHtcbiAgLy8gbWVyZ2UgYWxsIGFuaW1hdGFibGUgbGF5ZXIgZG9tYWluIGFuZCB1cGRhdGUgZ2xvYmFsIGNvbmZpZ1xuICBjb25zdCBhbmltYXRhYmxlTGF5ZXJzID0gc3RhdGUubGF5ZXJzLmZpbHRlcihcbiAgICBsID0+XG4gICAgICBsLmNvbmZpZy5pc1Zpc2libGUgJiZcbiAgICAgIGwuY29uZmlnLmFuaW1hdGlvbiAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXG4gICk7XG5cbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgZGVmYXVsdFRpbWVGb3JtYXQ6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbWVyZ2VkRG9tYWluID0gYW5pbWF0YWJsZUxheWVycy5yZWR1Y2UoXG4gICAgKGFjY3UsIGxheWVyKSA9PiBbXG4gICAgICBNYXRoLm1pbihhY2N1WzBdLCBsYXllci5hbmltYXRpb25Eb21haW5bMF0pLFxuICAgICAgTWF0aC5tYXgoYWNjdVsxXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzFdKVxuICAgIF0sXG4gICAgW051bWJlcihJbmZpbml0eSksIC1JbmZpbml0eV1cbiAgKTtcbiAgY29uc3QgZGVmYXVsdFRpbWVGb3JtYXQgPSBnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIobWVyZ2VkRG9tYWluKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgICAgY3VycmVudFRpbWU6IGlzSW5SYW5nZShzdGF0ZS5hbmltYXRpb25Db25maWcuY3VycmVudFRpbWUsIG1lcmdlZERvbWFpbilcbiAgICAgICAgPyBzdGF0ZS5hbmltYXRpb25Db25maWcuY3VycmVudFRpbWVcbiAgICAgICAgOiBtZXJnZWREb21haW5bMF0sXG4gICAgICBkb21haW46IG1lcmdlZERvbWFpbixcbiAgICAgIGRlZmF1bHRUaW1lRm9ybWF0XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgc3RhdHVzIG9mIHRoZSBlZGl0b3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zZXRFZGl0b3JNb2RlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldEVkaXRvck1vZGVVcGRhdGVyID0gKHN0YXRlLCB7bW9kZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBlZGl0b3I6IHtcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgbW9kZSxcbiAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgfVxufSk7XG5cbi8vIGNvbnN0IGZlYXR1cmVUb0ZpbHRlclZhbHVlID0gKGZlYXR1cmUpID0+ICh7Li4uZmVhdHVyZSwgaWQ6IGZlYXR1cmUuaWR9KTtcbi8qKlxuICogVXBkYXRlIGVkaXRvciBmZWF0dXJlc1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldEZlYXR1cmVzVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZlYXR1cmVzVXBkYXRlcihzdGF0ZSwge2ZlYXR1cmVzID0gW119KSB7XG4gIGNvbnN0IGxhc3RGZWF0dXJlID0gZmVhdHVyZXMubGVuZ3RoICYmIGZlYXR1cmVzW2ZlYXR1cmVzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgLy8gb25seSBzYXZlIG5vbmUgZmlsdGVyIGZlYXR1cmVzIHRvIGVkaXRvclxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLmZpbHRlcihmID0+ICFnZXRGaWx0ZXJJZEluRmVhdHVyZShmKSksXG4gICAgICBtb2RlOiBsYXN0RmVhdHVyZSAmJiBsYXN0RmVhdHVyZS5wcm9wZXJ0aWVzLmlzQ2xvc2VkID8gRURJVE9SX01PREVTLkVESVQgOiBzdGF0ZS5lZGl0b3IubW9kZVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSBleGlzdGluZyBmZWF0dXJlXG4gIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gc3RhdGUuZWRpdG9yO1xuXG4gIC8vIElmIG5vIGZlYXR1cmUgaXMgc2VsZWN0ZWQgd2UgY2FuIHNpbXBseSByZXR1cm4gc2luY2Ugbm8gb3BlcmF0aW9uc1xuICBpZiAoIXNlbGVjdGVkRmVhdHVyZSkge1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBmZWF0dXJlIGhhcyBjaGFuZ2VkXG4gIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlcy5maW5kKGYgPT4gZi5pZCA9PT0gc2VsZWN0ZWRGZWF0dXJlLmlkKTtcblxuICAvLyBpZiBmZWF0dXJlIGlzIHBhcnQgb2YgYSBmaWx0ZXJcbiAgY29uc3QgZmlsdGVySWQgPSBmZWF0dXJlICYmIGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xuICBpZiAoZmlsdGVySWQgJiYgZmVhdHVyZSkge1xuICAgIGNvbnN0IGZlYXR1cmVWYWx1ZSA9IGZlYXR1cmVUb0ZpbHRlclZhbHVlKGZlYXR1cmUsIGZpbHRlcklkKTtcbiAgICBjb25zdCBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmaWwgPT4gZmlsLmlkID09PSBmaWx0ZXJJZCk7XG4gICAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtcbiAgICAgIGlkeDogZmlsdGVySWR4LFxuICAgICAgcHJvcDogJ3ZhbHVlJyxcbiAgICAgIHZhbHVlOiBmZWF0dXJlVmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgZmVhdHVyZVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIgPSAoc3RhdGUsIHtmZWF0dXJlfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGVkaXRvcjoge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBzZWxlY3RlZEZlYXR1cmU6IGZlYXR1cmVcbiAgfVxufSk7XG5cbi8qKlxuICogRGVsZXRlIGV4aXN0aW5nIGZlYXR1cmUgZnJvbSBmaWx0ZXJzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuZGVsZXRlRmVhdHVyZVVwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGZWF0dXJlVXBkYXRlcihzdGF0ZSwge2ZlYXR1cmV9KSB7XG4gIGlmICghZmVhdHVyZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXG4gICAgfVxuICB9O1xuXG4gIGlmIChnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKSkge1xuICAgIGNvbnN0IGZpbHRlcklkeCA9IG5ld1N0YXRlLmZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcklkeCA+IC0xID8gcmVtb3ZlRmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge2lkeDogZmlsdGVySWR4fSkgOiBuZXdTdGF0ZTtcbiAgfVxuXG4gIC8vIG1vZGlmeSBlZGl0b3Igb2JqZWN0XG4gIGNvbnN0IG5ld0VkaXRvciA9IHtcbiAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgZmVhdHVyZXM6IHN0YXRlLmVkaXRvci5mZWF0dXJlcy5maWx0ZXIoZiA9PiBmLmlkICE9PSBmZWF0dXJlLmlkKSxcbiAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjogbmV3RWRpdG9yXG4gIH07XG59XG5cbi8qKlxuICogVG9nZ2xlIGZlYXR1cmUgYXMgbGF5ZXIgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJykuc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFBvbHlnb25GaWx0ZXJMYXllclVwZGF0ZXIoc3RhdGUsIHBheWxvYWQpIHtcbiAgY29uc3Qge2xheWVyLCBmZWF0dXJlfSA9IHBheWxvYWQ7XG4gIGNvbnN0IGZpbHRlcklkID0gZ2V0RmlsdGVySWRJbkZlYXR1cmUoZmVhdHVyZSk7XG5cbiAgLy8gbGV0IG5ld0ZpbHRlciA9IG51bGw7XG4gIGxldCBmaWx0ZXJJZHg7XG4gIGxldCBuZXdMYXllcklkID0gW2xheWVyLmlkXTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIC8vIElmIHBvbHlnb24gZmlsdGVyIGFscmVhZHkgZXhpc3RzLCB3ZSBuZWVkIHRvIGZpbmQgb3V0IGlmIHRoZSBjdXJyZW50IGxheWVyIGlzIGFscmVhZHkgaW5jbHVkZWRcbiAgaWYgKGZpbHRlcklkKSB7XG4gICAgZmlsdGVySWR4ID0gc3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBmaWx0ZXJJZCk7XG5cbiAgICBpZiAoIXN0YXRlLmZpbHRlcnNbZmlsdGVySWR4XSkge1xuICAgICAgLy8gd2hhdCBpZiBmaWx0ZXIgZG9lc24ndCBleGlzdD8uLi4gbm90IHBvc3NpYmxlLlxuICAgICAgLy8gYmVjYXVzZSBmZWF0dXJlcyBpbiB0aGUgZWRpdG9yIGlzIHBhc3NlZCBpbiBmcm9tIGZpbHRlcnMgYW5kIGVkaXRvcnMuXG4gICAgICAvLyBidXQgd2Ugd2lsbCBtb3ZlIHRoaXMgZmVhdHVyZSBiYWNrIHRvIGVkaXRvciBqdXN0IGluIGNhc2VcbiAgICAgIGNvbnN0IG5vbmVGaWx0ZXJGZWF0dXJlID0ge1xuICAgICAgICAuLi5mZWF0dXJlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgLi4uZmVhdHVyZS5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGZpbHRlcklkOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAgICAgZmVhdHVyZXM6IFsuLi5zdGF0ZS5lZGl0b3IuZmVhdHVyZXMsIG5vbmVGaWx0ZXJGZWF0dXJlXSxcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG5vbmVGaWx0ZXJGZWF0dXJlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IGZpbHRlciA9IHN0YXRlLmZpbHRlcnNbZmlsdGVySWR4XTtcbiAgICBjb25zdCB7bGF5ZXJJZCA9IFtdfSA9IGZpbHRlcjtcbiAgICBjb25zdCBpc0xheWVySW5jbHVkZWQgPSBsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKTtcblxuICAgIG5ld0xheWVySWQgPSBpc0xheWVySW5jbHVkZWRcbiAgICAgID8gLy8gaWYgbGF5ZXIgaXMgaW5jbHVkZWQsIHJlbW92ZSBpdFxuICAgICAgICBsYXllcklkLmZpbHRlcihsID0+IGwgIT09IGxheWVyLmlkKVxuICAgICAgOiBbLi4ubGF5ZXJJZCwgbGF5ZXIuaWRdO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIHdlIGhhdmVuJ3QgY3JlYXRlIHRoZSBwb2x5Z29uIGZpbHRlciwgY3JlYXRlIGl0XG4gICAgY29uc3QgbmV3RmlsdGVyID0gZ2VuZXJhdGVQb2x5Z29uRmlsdGVyKFtdLCBmZWF0dXJlKTtcbiAgICBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmxlbmd0aDtcblxuICAgIC8vIGFkZCBmZWF0dXJlLCByZW1vdmUgZmVhdHVyZSBmcm9tIGVpZHRvclxuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgbmV3RmlsdGVyXSxcbiAgICAgIGVkaXRvcjoge1xuICAgICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICAgIGZlYXR1cmVzOiBzdGF0ZS5lZGl0b3IuZmVhdHVyZXMuZmlsdGVyKGYgPT4gZi5pZCAhPT0gZmVhdHVyZS5pZCksXG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbmV3RmlsdGVyLnZhbHVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XG4gICAgaWR4OiBmaWx0ZXJJZHgsXG4gICAgcHJvcDogJ2xheWVySWQnLFxuICAgIHZhbHVlOiBuZXdMYXllcklkXG4gIH0pO1xufVxuXG4vKipcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5zb3J0VGFibGVDb2x1bW5VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlQ29sdW1uVXBkYXRlcihzdGF0ZSwge2RhdGFJZCwgY29sdW1uLCBtb2RlfSkge1xuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXTtcbiAgaWYgKCFkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGxldCBzb3J0TW9kZSA9IG1vZGU7XG4gIGlmICghc29ydE1vZGUpIHtcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IGdldChkYXRhc2V0LCBbJ3NvcnRDb2x1bW4nLCBjb2x1bW5dKTtcbiAgICAvLyBAdHMtaWdub3JlIC0gc2hvdWxkIGJlIGZpeGFibGUgaW4gYSBUUyBmaWxlXG4gICAgc29ydE1vZGUgPSBjdXJyZW50TW9kZVxuICAgICAgPyBPYmplY3Qua2V5cyhTT1JUX09SREVSKS5maW5kKG0gPT4gbSAhPT0gY3VycmVudE1vZGUpXG4gICAgICA6IFNPUlRfT1JERVIuQVNDRU5ESU5HO1xuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gc29ydERhdGFzZXRCeUNvbHVtbihkYXRhc2V0LCBjb2x1bW4sIHNvcnRNb2RlKTtcbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgc29ydGVkLCBzdGF0ZSk7XG59XG5cbi8qKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnBpblRhYmxlQ29sdW1uVXBkYXRlcn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpblRhYmxlQ29sdW1uVXBkYXRlcihzdGF0ZSwge2RhdGFJZCwgY29sdW1ufSkge1xuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXTtcbiAgaWYgKCFkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGZpZWxkID0gZGF0YXNldC5maWVsZHMuZmluZChmID0+IGYubmFtZSA9PT0gY29sdW1uKTtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGxldCBwaW5uZWRDb2x1bW5zO1xuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhc2V0LnBpbm5lZENvbHVtbnMpICYmIGRhdGFzZXQucGlubmVkQ29sdW1ucy5pbmNsdWRlcyhmaWVsZC5uYW1lKSkge1xuICAgIC8vIHVucGluIGl0XG4gICAgcGlubmVkQ29sdW1ucyA9IGRhdGFzZXQucGlubmVkQ29sdW1ucy5maWx0ZXIoY28gPT4gY28gIT09IGZpZWxkLm5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHBpbm5lZENvbHVtbnMgPSAoZGF0YXNldC5waW5uZWRDb2x1bW5zIHx8IFtdKS5jb25jYXQoZmllbGQubmFtZSk7XG4gIH1cblxuICByZXR1cm4gc2V0KFsnZGF0YXNldHMnLCBkYXRhSWQsICdwaW5uZWRDb2x1bW5zJ10sIHBpbm5lZENvbHVtbnMsIHN0YXRlKTtcbn1cblxuLyoqXG4gKiBDb3B5IGNvbHVtbiBjb250ZW50IGFzIHN0cmluZ3NcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS5jb3B5VGFibGVDb2x1bW5VcGRhdGVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29weVRhYmxlQ29sdW1uVXBkYXRlcihzdGF0ZSwge2RhdGFJZCwgY29sdW1ufSkge1xuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXTtcbiAgaWYgKCFkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGZpZWxkSWR4ID0gZGF0YXNldC5maWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSBjb2x1bW4pO1xuICBpZiAoZmllbGRJZHggPCAwKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHt0eXBlfSA9IGRhdGFzZXQuZmllbGRzW2ZpZWxkSWR4XTtcbiAgY29uc3QgdGV4dCA9IGRhdGFzZXQuYWxsRGF0YS5tYXAoZCA9PiBwYXJzZUZpZWxkVmFsdWUoZFtmaWVsZElkeF0sIHR5cGUpKS5qb2luKCdcXG4nKTtcblxuICBjb3B5KHRleHQpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZWRpdG9yXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtdXBkYXRlcnMnKS50b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICB2aXNpYmxlOiAhc3RhdGUuZWRpdG9yLnZpc2libGVcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlcihzdGF0ZSwge2lkeCwgY29uZmlnfSkge1xuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG4gIGlmICghb2xkRmlsdGVyKSB7XG4gICAgQ29uc29sZS5lcnJvcihgZmlsdGVycy4ke2lkeH0gaXMgdW5kZWZpbmVkYCk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmIChvbGRGaWx0ZXIudHlwZSAhPT0gRklMVEVSX1RZUEVTLnRpbWVSYW5nZSkge1xuICAgIENvbnNvbGUuZXJyb3IoXG4gICAgICBgc2V0RmlsdGVyQW5pbWF0aW9uVGltZUNvbmZpZyBjYW4gb25seSBiZSBjYWxsZWQgdG8gdXBkYXRlIGEgdGltZSBmaWx0ZXIuIGNoZWNrIGZpbHRlci50eXBlID09PSAndGltZVJhbmdlJ2BcbiAgICApO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZXMgPSBjaGVja1RpbWVDb25maWdBcmdzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIHBpY2tfKCdmaWx0ZXJzJykoc3dhcF8obWVyZ2VfKHVwZGF0ZXMpKG9sZEZpbHRlcikpKShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGltZUNvbmZpZ0FyZ3MoY29uZmlnKSB7XG4gIGNvbnN0IGFsbG93ZWQgPSBbJ3RpbWVGb3JtYXQnLCAndGltZXpvbmUnXTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZykucmVkdWNlKChhY2N1LCBwcm9wKSA9PiB7XG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICBDb25zb2xlLmVycm9yKFxuICAgICAgICBgc2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnIHRha2VzIHRpbWVGb3JtYXQgYW5kL29yIHRpbWV6b25lIGFzIG9wdGlvbnMsIGZvdW5kICR7cHJvcH1gXG4gICAgICApO1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuXG4gICAgLy8gaGVyZSB3ZSBhcmUgTk9UIGNoZWNraW5nIGlmIHRpbWV6b25lIG9yIHRpbWVGb3JtYXQgaW5wdXQgaXMgdmFsaWRcbiAgICBhY2N1W3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgIHJldHVybiBhY2N1O1xuICB9LCB7fSk7XG59XG4vKipcbiAqIFVwZGF0ZSBlZGl0b3JcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS11cGRhdGVycycpLnNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZ1VwZGF0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMYXllckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyKHN0YXRlLCB7Y29uZmlnfSkge1xuICBpZiAoIWNvbmZpZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB1cGRhdGVzID0gY2hlY2tUaW1lQ29uZmlnQXJncyhjb25maWcpO1xuICByZXR1cm4gcGlja18oJ2FuaW1hdGlvbkNvbmZpZycpKG1lcmdlXyh1cGRhdGVzKSkoc3RhdGUpO1xufVxuIl19