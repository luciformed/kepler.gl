"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.createLayerFromConfig = createLayerFromConfig;
exports.serializeLayer = serializeLayer;
exports.mergeLayers = mergeLayers;
exports.insertLayerAtRightOrder = insertLayerAtRightOrder;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateColumn = validateColumn;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayersByDatasets = validateLayersByDatasets;
exports.validateLayerWithData = validateLayerWithData;
exports.isValidMerger = isValidMerger;
exports.VIS_STATE_MERGERS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("../utils/utils");

var _filterUtils = require("../utils/filter-utils");

var _splitMapUtils = require("../utils/split-map-utils");

var _gpuFilterUtils = require("../utils/gpu-filter-utils");

var _defaultSettings = require("../constants/default-settings");

var _schemas = require("../schemas");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeFilters}
 */
function mergeFilters(state, filtersToMerge) {
  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  }

  var _validateFiltersUpdat = (0, _filterUtils.validateFiltersUpdateDatasets)(state, filtersToMerge),
      validated = _validateFiltersUpdat.validated,
      failed = _validateFiltersUpdat.failed,
      updatedDatasets = _validateFiltersUpdat.updatedDatasets; // merge filter with existing


  var updatedFilters = [].concat((0, _toConsumableArray2["default"])(state.filters || []), (0, _toConsumableArray2["default"])(validated));
  updatedFilters = (0, _gpuFilterUtils.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _gpuFilterUtils.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash3["default"])(validated.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _filterUtils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: updatedFilters,
    datasets: filtered,
    filterToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.filterToBeMerged), (0, _toConsumableArray2["default"])(failed))
  });
}

function createLayerFromConfig(state, layerConfig) {
  // first validate config against dataset
  var _validateLayersByData = validateLayersByDatasets(state.datasets, state.layerClasses, [layerConfig]),
      validated = _validateLayersByData.validated,
      failed = _validateLayersByData.failed;

  if (failed.length || !validated.length) {
    // failed
    return null;
  }

  var newLayer = validated[0];
  newLayer.updateLayerDomain(state.datasets);
  return newLayer;
}

function serializeLayer(newLayer) {
  var savedVisState = _schemas.visStateSchema[_schemas.CURRENT_VERSION].save({
    layers: [newLayer],
    layerOrder: [0]
  }).visState;

  var loadedLayer = _schemas.visStateSchema[_schemas.CURRENT_VERSION].load(savedVisState).visState.layers[0];

  return loadedLayer;
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 * @type {typeof import('./vis-state-merger').mergeLayers}
 */


function mergeLayers(state, layersToMerge, fromConfig) {
  var preserveLayerOrder = fromConfig ? layersToMerge.map(function (l) {
    return l.id;
  }) : state.preserveLayerOrder;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }

  var _validateLayersByData2 = validateLayersByDatasets(state.datasets, state.layerClasses, layersToMerge),
      mergedLayer = _validateLayersByData2.validated,
      unmerged = _validateLayersByData2.failed; // put new layers in front of current layers


  var _insertLayerAtRightOr = insertLayerAtRightOrder(state.layers, mergedLayer, state.layerOrder, preserveLayerOrder),
      newLayerOrder = _insertLayerAtRightOr.newLayerOrder,
      newLayers = _insertLayerAtRightOr.newLayers;

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerOrder: newLayerOrder,
    preserveLayerOrder: preserveLayerOrder,
    layerToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.layerToBeMerged), (0, _toConsumableArray2["default"])(unmerged))
  });
}

function insertLayerAtRightOrder(currentLayers, layersToInsert, currentOrder) {
  var preservedOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  // perservedOrder ['a', 'b', 'c'];
  // layerOrder [1, 0, 3]
  // layerOrderMap ['a', 'c']
  var layerOrderQueue = currentOrder.map(function (i) {
    return currentLayers[i].id;
  });
  var newLayers = currentLayers;

  var _iterator = _createForOfIteratorHelper(layersToInsert),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var newLayer = _step.value;
      // find where to insert it
      var expectedIdx = preservedOrder.indexOf(newLayer.id); // if cant find place to insert, insert at the font

      var insertAt = 0;

      if (expectedIdx > 0) {
        // look for layer to insert after
        var i = expectedIdx + 1;
        var preceedIdx = null;

        while (i-- > 0 && preceedIdx === null) {
          var preceedLayer = preservedOrder[expectedIdx - 1];
          preceedIdx = layerOrderQueue.indexOf(preceedLayer);
        }

        if (preceedIdx > -1) {
          insertAt = preceedIdx + 1;
        }
      }

      layerOrderQueue = (0, _utils.arrayInsert)(layerOrderQueue, insertAt, newLayer.id);
      newLayers = newLayers.concat(newLayer);
    } // reconstruct layerOrder after insert

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var newLayerOrder = layerOrderQueue.map(function (id) {
    return newLayers.findIndex(function (l) {
      return l.id === id;
    });
  });
  return {
    newLayerOrder: newLayerOrder,
    newLayers: newLayers
  };
}
/**
 * Merge interactions with saved config
 *
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeInteractions(state, interactionToBeMerged) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = state.interactionConfig[key].config;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, ["enabled"]);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread(_objectSpread({}, currentConfig.fieldsToShow), mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: enabled
          };
        }
      }

      merged[key] = _objectSpread(_objectSpread({}, state.interactionConfig[key]), {}, {
        enabled: enabled
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread(_objectSpread({}, currentConfig), configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: _objectSpread(_objectSpread({}, state.interactionConfig), merged),
    interactionToBeMerged: unmerged
  });
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 * @type {typeof import('./vis-state-merger').mergeInteractions}
 */


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    Object.entries(sm.layers).forEach(function (_ref2) {
      var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
          id = _ref3[0],
          value = _ref3[1];

      // check if layer exists
      var pushTo = state.layers.find(function (l) {
        return l.id === id;
      }) ? merged : unmerged; // create map panel if current map is not split

      pushTo[i] = pushTo[i] || {
        layers: pushTo === merged ? (0, _splitMapUtils.getInitialMapLayersForSplitMap)(state.layers) : []
      };
      pushTo[i].layers = _objectSpread(_objectSpread({}, pushTo[i].layers), {}, (0, _defineProperty2["default"])({}, id, value));
    });
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: merged,
    splitMapsToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.splitMapsToBeMerged), unmerged)
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param {object} state
 * @param {object} tooltipConfig
 * @return {object} - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (field) {
          return allFields.includes(field.name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 * @type {typeof import('./vis-state-merger').mergeLayerBlending}
 */


function mergeLayerBlending(state, layerBlending) {
  if (layerBlending && _defaultSettings.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 * @type {typeof import('./vis-state-merger').mergeAnimationConfig}
 */


function mergeAnimationConfig(state, animation) {
  if (animation && animation.currentTime) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread(_objectSpread({}, state.animationConfig), animation), {}, {
        domain: null
      })
    });
  }

  return state;
}
/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param {Array<Object>} fields
 * @param {Object} savedCols
 * @param {Object} emptyCols
 * @return {null | Object} - validated columns or null
 */


function validateSavedLayerColumns(fields) {
  var savedCols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emptyCols = arguments.length > 2 ? arguments[2] : undefined;
  // Prepare columns for the validator
  var columns = {};

  var _loop = function _loop() {
    var key = _Object$keys[_i];
    columns[key] = _objectSpread({}, emptyCols[key]);
    var saved = savedCols[key];

    if (saved) {
      var fieldIdx = fields.findIndex(function (_ref4) {
        var name = _ref4.name;
        return name === saved;
      });

      if (fieldIdx > -1) {
        // update found columns
        columns[key].fieldIdx = fieldIdx;
        columns[key].value = saved;
      }
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(emptyCols); _i < _Object$keys.length; _i++) {
    _loop();
  } // find actual column fieldIdx, in case it has changed


  var allColFound = Object.keys(columns).every(function (key) {
    return validateColumn(columns[key], columns, fields);
  });

  if (allColFound) {
    return columns;
  }

  return null;
}

function validateColumn(column, columns, allFields) {
  if (column.optional || column.value) {
    return true;
  }

  if (column.validator) {
    return column.validator(column, columns, allFields);
  }

  return false;
}
/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 * @type {typeof import('./vis-state-merger').validateSavedVisualChannels}
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config) {
      if (savedLayer.config[field]) {
        foundField = fields.find(function (fd) {
          return savedLayer.config && fd.name === savedLayer.config[field].name;
        });
      }

      var foundChannel = _objectSpread(_objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}), savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

      if (Object.keys(foundChannel).length) {
        newLayer.updateLayerConfig(foundChannel);
      }

      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}

function validateLayersByDatasets(datasets, layerClasses, layers) {
  var validated = [];
  var failed = [];
  layers.forEach(function (layer) {
    var validateLayer;

    if (!layer || !layer.config) {
      validateLayer = null;
    } else if (datasets[layer.config.dataId]) {
      // datasets are already loaded
      validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, layerClasses);
    }

    if (validateLayer) {
      validated.push(validateLayer);
    } else {
      // datasets not yet loaded
      failed.push(layer);
    }
  });
  return {
    validated: validated,
    failed: failed
  };
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 * @type {typeof import('./vis-state-merger').validateLayerWithData}
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!type || !layerClasses.hasOwnProperty(type) || !savedLayer.config) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden
  }); // find column fieldIdx

  var columnConfig = newLayer.getLayerColumns();

  if (Object.keys(columnConfig).length) {
    var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, columnConfig);

    if (columns) {
      newLayer.updateLayerConfig({
        columns: columns
      });
    } else if (!options.allowEmptyColumn) {
      return null;
    }
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}

function isValidMerger(merger) {
  return (0, _utils.isObject)(merger) && typeof merger.merge === 'function' && typeof merger.prop === 'string';
}

var VIS_STATE_MERGERS = [{
  merge: mergeLayers,
  prop: 'layers',
  toMergeProp: 'layerToBeMerged'
}, {
  merge: mergeFilters,
  prop: 'filters',
  toMergeProp: 'filterToBeMerged'
}, {
  merge: mergeInteractions,
  prop: 'interactionConfig',
  toMergeProp: 'interactionToBeMerged'
}, {
  merge: mergeLayerBlending,
  prop: 'layerBlending'
}, {
  merge: mergeSplitMaps,
  prop: 'splitMaps',
  toMergeProp: 'splitMapsToBeMerged'
}, {
  merge: mergeAnimationConfig,
  prop: 'animationConfig'
}];
exports.VIS_STATE_MERGERS = VIS_STATE_MERGERS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyLmpzIl0sIm5hbWVzIjpbIm1lcmdlRmlsdGVycyIsInN0YXRlIiwiZmlsdGVyc1RvTWVyZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJ2YWxpZGF0ZWQiLCJmYWlsZWQiLCJ1cGRhdGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVycyIsImZpbHRlcnMiLCJkYXRhc2V0c1RvRmlsdGVyIiwibWFwIiwiZiIsImRhdGFJZCIsImZpbHRlcmVkIiwibGF5ZXJzIiwiZGF0YXNldHMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiY3JlYXRlTGF5ZXJGcm9tQ29uZmlnIiwibGF5ZXJDb25maWciLCJ2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMiLCJsYXllckNsYXNzZXMiLCJuZXdMYXllciIsInVwZGF0ZUxheWVyRG9tYWluIiwic2VyaWFsaXplTGF5ZXIiLCJzYXZlZFZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJDVVJSRU5UX1ZFUlNJT04iLCJzYXZlIiwibGF5ZXJPcmRlciIsInZpc1N0YXRlIiwibG9hZGVkTGF5ZXIiLCJsb2FkIiwibWVyZ2VMYXllcnMiLCJsYXllcnNUb01lcmdlIiwiZnJvbUNvbmZpZyIsInByZXNlcnZlTGF5ZXJPcmRlciIsImwiLCJpZCIsIm1lcmdlZExheWVyIiwidW5tZXJnZWQiLCJpbnNlcnRMYXllckF0UmlnaHRPcmRlciIsIm5ld0xheWVyT3JkZXIiLCJuZXdMYXllcnMiLCJsYXllclRvQmVNZXJnZWQiLCJjdXJyZW50TGF5ZXJzIiwibGF5ZXJzVG9JbnNlcnQiLCJjdXJyZW50T3JkZXIiLCJwcmVzZXJ2ZWRPcmRlciIsImxheWVyT3JkZXJRdWV1ZSIsImkiLCJleHBlY3RlZElkeCIsImluZGV4T2YiLCJpbnNlcnRBdCIsInByZWNlZWRJZHgiLCJwcmVjZWVkTGF5ZXIiLCJjb25jYXQiLCJmaW5kSW5kZXgiLCJtZXJnZUludGVyYWN0aW9ucyIsImludGVyYWN0aW9uVG9CZU1lcmdlZCIsIm1lcmdlZCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW50ZXJhY3Rpb25Db25maWciLCJjdXJyZW50Q29uZmlnIiwiY29uZmlnIiwiZW5hYmxlZCIsImNvbmZpZ1NhdmVkIiwiY29uZmlnVG9NZXJnZSIsIm1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnIiwibWVyZ2VkVG9vbHRpcCIsInVubWVyZ2VkVG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsInRvb2x0aXAiLCJtZXJnZVNwbGl0TWFwcyIsInNwbGl0TWFwcyIsInNtIiwiZW50cmllcyIsInZhbHVlIiwicHVzaFRvIiwiZmluZCIsInNwbGl0TWFwc1RvQmVNZXJnZWQiLCJ0b29sdGlwQ29uZmlnIiwiYWxsRmllbGRzIiwiZmllbGRzIiwiZCIsIm5hbWUiLCJmb3VuZEZpZWxkc1RvU2hvdyIsImZpbHRlciIsImZpZWxkIiwiaW5jbHVkZXMiLCJtZXJnZUxheWVyQmxlbmRpbmciLCJsYXllckJsZW5kaW5nIiwiTEFZRVJfQkxFTkRJTkdTIiwibWVyZ2VBbmltYXRpb25Db25maWciLCJhbmltYXRpb24iLCJjdXJyZW50VGltZSIsImFuaW1hdGlvbkNvbmZpZyIsImRvbWFpbiIsInZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMiLCJzYXZlZENvbHMiLCJlbXB0eUNvbHMiLCJjb2x1bW5zIiwic2F2ZWQiLCJmaWVsZElkeCIsImFsbENvbEZvdW5kIiwiZXZlcnkiLCJ2YWxpZGF0ZUNvbHVtbiIsImNvbHVtbiIsIm9wdGlvbmFsIiwidmFsaWRhdG9yIiwidmFsaWRhdGVTYXZlZFRleHRMYWJlbCIsInNhdmVkVGV4dExhYmVsIiwibGF5ZXJUZXh0TGFiZWwiLCJzYXZlZFRleHRMYWJlbHMiLCJ0ZXh0TGFiZWwiLCJmZCIsInJlZHVjZSIsImFjY3UiLCJ2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMiLCJzYXZlZExheWVyIiwidmFsdWVzIiwidmlzdWFsQ2hhbm5lbHMiLCJzY2FsZSIsImZvdW5kRmllbGQiLCJmb3VuZENoYW5uZWwiLCJ1cGRhdGVMYXllckNvbmZpZyIsInZhbGlkYXRlVmlzdWFsQ2hhbm5lbCIsImxheWVyIiwidmFsaWRhdGVMYXllciIsInZhbGlkYXRlTGF5ZXJXaXRoRGF0YSIsInB1c2giLCJvcHRpb25zIiwidHlwZSIsImhhc093blByb3BlcnR5IiwibGFiZWwiLCJjb2xvciIsImlzVmlzaWJsZSIsImhpZGRlbiIsImNvbHVtbkNvbmZpZyIsImdldExheWVyQ29sdW1ucyIsImFsbG93RW1wdHlDb2x1bW4iLCJ2aXNDb25maWciLCJjb3B5TGF5ZXJDb25maWciLCJzaGFsbG93Q29weSIsImlzVmFsaWRNZXJnZXIiLCJtZXJnZXIiLCJtZXJnZSIsInByb3AiLCJWSVNfU1RBVEVfTUVSR0VSUyIsInRvTWVyZ2VQcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsY0FBN0IsRUFBNkM7QUFDbEQsTUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsY0FBZCxDQUFELElBQWtDLENBQUNBLGNBQWMsQ0FBQ0csTUFBdEQsRUFBOEQ7QUFDNUQsV0FBT0osS0FBUDtBQUNEOztBQUVELDhCQUE2QyxnREFBOEJBLEtBQTlCLEVBQXFDQyxjQUFyQyxDQUE3QztBQUFBLE1BQU9JLFNBQVAseUJBQU9BLFNBQVA7QUFBQSxNQUFrQkMsTUFBbEIseUJBQWtCQSxNQUFsQjtBQUFBLE1BQTBCQyxlQUExQix5QkFBMEJBLGVBQTFCLENBTGtELENBT2xEOzs7QUFDQSxNQUFJQyxjQUFjLGlEQUFRUixLQUFLLENBQUNTLE9BQU4sSUFBaUIsRUFBekIsdUNBQWlDSixTQUFqQyxFQUFsQjtBQUNBRyxFQUFBQSxjQUFjLEdBQUcsd0NBQW1C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LElBQUksRUFBRSxRQUEzQjtBQUFxQ0UsRUFBQUEsV0FBVyxFQUFFO0FBQWxELENBRCtCLEVBRS9CO0FBQUNILEVBQUFBLEtBQUssRUFBRXRKLFlBQVI7QUFBc0J1SixFQUFBQSxJQUFJLEVBQUUsU0FBNUI7QUFBdUNFLEVBQUFBLFdBQVcsRUFBRTtBQUFwRCxDQUYrQixFQUcvQjtBQUFDSCxFQUFBQSxLQUFLLEVBQUUzRixpQkFBUjtBQUEyQjRGLEVBQUFBLElBQUksRUFBRSxtQkFBakM7QUFBc0RFLEVBQUFBLFdBQVcsRUFBRTtBQUFuRSxDQUgrQixFQUkvQjtBQUFDSCxFQUFBQSxLQUFLLEVBQUV4RCxrQkFBUjtBQUE0QnlELEVBQUFBLElBQUksRUFBRTtBQUFsQyxDQUorQixFQUsvQjtBQUFDRCxFQUFBQSxLQUFLLEVBQUV6RSxjQUFSO0FBQXdCMEUsRUFBQUEsSUFBSSxFQUFFLFdBQTlCO0FBQTJDRSxFQUFBQSxXQUFXLEVBQUU7QUFBeEQsQ0FMK0IsRUFNL0I7QUFBQ0gsRUFBQUEsS0FBSyxFQUFFckQsb0JBQVI7QUFBOEJzRCxFQUFBQSxJQUFJLEVBQUU7QUFBcEMsQ0FOK0IsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gucGljayc7XG5pbXBvcnQgZmxhdHRlbkRlZXAgZnJvbSAnbG9kYXNoLmZsYXR0ZW5kZWVwJztcbmltcG9ydCB7aXNPYmplY3QsIGFycmF5SW5zZXJ0fSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge2FwcGx5RmlsdGVyc1RvRGF0YXNldHMsIHZhbGlkYXRlRmlsdGVyc1VwZGF0ZURhdGFzZXRzfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xuXG5pbXBvcnQge2dldEluaXRpYWxNYXBMYXllcnNGb3JTcGxpdE1hcH0gZnJvbSAndXRpbHMvc3BsaXQtbWFwLXV0aWxzJztcbmltcG9ydCB7cmVzZXRGaWx0ZXJHcHVNb2RlLCBhc3NpZ25HcHVDaGFubmVsc30gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtDVVJSRU5UX1ZFUlNJT04sIHZpc1N0YXRlU2NoZW1hfSBmcm9tICdzY2hlbWFzJztcblxuLyoqXG4gKiBNZXJnZSBsb2FkZWQgZmlsdGVycyB3aXRoIGN1cnJlbnQgc3RhdGUsIGlmIG5vIGZpZWxkcyBvciBkYXRhIGFyZSBsb2FkZWRcbiAqIHNhdmUgaXQgZm9yIGxhdGVyXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlRmlsdGVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRmlsdGVycyhzdGF0ZSwgZmlsdGVyc1RvTWVyZ2UpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGZpbHRlcnNUb01lcmdlKSB8fCAhZmlsdGVyc1RvTWVyZ2UubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3Qge3ZhbGlkYXRlZCwgZmFpbGVkLCB1cGRhdGVkRGF0YXNldHN9ID0gdmFsaWRhdGVGaWx0ZXJzVXBkYXRlRGF0YXNldHMoc3RhdGUsIGZpbHRlcnNUb01lcmdlKTtcblxuICAvLyBtZXJnZSBmaWx0ZXIgd2l0aCBleGlzdGluZ1xuICBsZXQgdXBkYXRlZEZpbHRlcnMgPSBbLi4uKHN0YXRlLmZpbHRlcnMgfHwgW10pLCAuLi52YWxpZGF0ZWRdO1xuICB1cGRhdGVkRmlsdGVycyA9IHJlc2V0RmlsdGVyR3B1TW9kZSh1cGRhdGVkRmlsdGVycyk7XG4gIHVwZGF0ZWRGaWx0ZXJzID0gYXNzaWduR3B1Q2hhbm5lbHModXBkYXRlZEZpbHRlcnMpO1xuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBkYXRhc2V0c1RvRmlsdGVyID0gdW5pcShmbGF0dGVuRGVlcCh2YWxpZGF0ZWQubWFwKGYgPT4gZi5kYXRhSWQpKSk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKFxuICAgIGRhdGFzZXRzVG9GaWx0ZXIsXG4gICAgdXBkYXRlZERhdGFzZXRzLFxuICAgIHVwZGF0ZWRGaWx0ZXJzLFxuICAgIHN0YXRlLmxheWVyc1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogdXBkYXRlZEZpbHRlcnMsXG4gICAgZGF0YXNldHM6IGZpbHRlcmVkLFxuICAgIGZpbHRlclRvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5maWx0ZXJUb0JlTWVyZ2VkLCAuLi5mYWlsZWRdXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYXllckZyb21Db25maWcoc3RhdGUsIGxheWVyQ29uZmlnKSB7XG4gIC8vIGZpcnN0IHZhbGlkYXRlIGNvbmZpZyBhZ2FpbnN0IGRhdGFzZXRcbiAgY29uc3Qge3ZhbGlkYXRlZCwgZmFpbGVkfSA9IHZhbGlkYXRlTGF5ZXJzQnlEYXRhc2V0cyhzdGF0ZS5kYXRhc2V0cywgc3RhdGUubGF5ZXJDbGFzc2VzLCBbXG4gICAgbGF5ZXJDb25maWdcbiAgXSk7XG5cbiAgaWYgKGZhaWxlZC5sZW5ndGggfHwgIXZhbGlkYXRlZC5sZW5ndGgpIHtcbiAgICAvLyBmYWlsZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG5ld0xheWVyID0gdmFsaWRhdGVkWzBdO1xuICBuZXdMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cyk7XG4gIHJldHVybiBuZXdMYXllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUxheWVyKG5ld0xheWVyKSB7XG4gIGNvbnN0IHNhdmVkVmlzU3RhdGUgPSB2aXNTdGF0ZVNjaGVtYVtDVVJSRU5UX1ZFUlNJT05dLnNhdmUoe1xuICAgIGxheWVyczogW25ld0xheWVyXSxcbiAgICBsYXllck9yZGVyOiBbMF1cbiAgfSkudmlzU3RhdGU7XG4gIGNvbnN0IGxvYWRlZExheWVyID0gdmlzU3RhdGVTY2hlbWFbQ1VSUkVOVF9WRVJTSU9OXS5sb2FkKHNhdmVkVmlzU3RhdGUpLnZpc1N0YXRlLmxheWVyc1swXTtcbiAgcmV0dXJuIGxvYWRlZExheWVyO1xufVxuXG4vKipcbiAqIE1lcmdlIGxheWVycyBmcm9tIGRlLXNlcmlhbGl6ZWQgc3RhdGUsIGlmIG5vIGZpZWxkcyBvciBkYXRhIGFyZSBsb2FkZWRcbiAqIHNhdmUgaXQgZm9yIGxhdGVyXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlTGF5ZXJzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VMYXllcnMoc3RhdGUsIGxheWVyc1RvTWVyZ2UsIGZyb21Db25maWcpIHtcbiAgY29uc3QgcHJlc2VydmVMYXllck9yZGVyID0gZnJvbUNvbmZpZyA/IGxheWVyc1RvTWVyZ2UubWFwKGwgPT4gbC5pZCkgOiBzdGF0ZS5wcmVzZXJ2ZUxheWVyT3JkZXI7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGxheWVyc1RvTWVyZ2UpIHx8ICFsYXllcnNUb01lcmdlLmxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHt2YWxpZGF0ZWQ6IG1lcmdlZExheWVyLCBmYWlsZWQ6IHVubWVyZ2VkfSA9IHZhbGlkYXRlTGF5ZXJzQnlEYXRhc2V0cyhcbiAgICBzdGF0ZS5kYXRhc2V0cyxcbiAgICBzdGF0ZS5sYXllckNsYXNzZXMsXG4gICAgbGF5ZXJzVG9NZXJnZVxuICApO1xuXG4gIC8vIHB1dCBuZXcgbGF5ZXJzIGluIGZyb250IG9mIGN1cnJlbnQgbGF5ZXJzXG4gIGNvbnN0IHtuZXdMYXllck9yZGVyLCBuZXdMYXllcnN9ID0gaW5zZXJ0TGF5ZXJBdFJpZ2h0T3JkZXIoXG4gICAgc3RhdGUubGF5ZXJzLFxuICAgIG1lcmdlZExheWVyLFxuICAgIHN0YXRlLmxheWVyT3JkZXIsXG4gICAgcHJlc2VydmVMYXllck9yZGVyXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBsYXllck9yZGVyOiBuZXdMYXllck9yZGVyLFxuICAgIHByZXNlcnZlTGF5ZXJPcmRlcixcbiAgICBsYXllclRvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5sYXllclRvQmVNZXJnZWQsIC4uLnVubWVyZ2VkXVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0TGF5ZXJBdFJpZ2h0T3JkZXIoXG4gIGN1cnJlbnRMYXllcnMsXG4gIGxheWVyc1RvSW5zZXJ0LFxuICBjdXJyZW50T3JkZXIsXG4gIHByZXNlcnZlZE9yZGVyID0gW11cbikge1xuICAvLyBwZXJzZXJ2ZWRPcmRlciBbJ2EnLCAnYicsICdjJ107XG4gIC8vIGxheWVyT3JkZXIgWzEsIDAsIDNdXG4gIC8vIGxheWVyT3JkZXJNYXAgWydhJywgJ2MnXVxuICBsZXQgbGF5ZXJPcmRlclF1ZXVlID0gY3VycmVudE9yZGVyLm1hcChpID0+IGN1cnJlbnRMYXllcnNbaV0uaWQpO1xuICBsZXQgbmV3TGF5ZXJzID0gY3VycmVudExheWVycztcblxuICBmb3IgKGNvbnN0IG5ld0xheWVyIG9mIGxheWVyc1RvSW5zZXJ0KSB7XG4gICAgLy8gZmluZCB3aGVyZSB0byBpbnNlcnQgaXRcbiAgICBjb25zdCBleHBlY3RlZElkeCA9IHByZXNlcnZlZE9yZGVyLmluZGV4T2YobmV3TGF5ZXIuaWQpO1xuICAgIC8vIGlmIGNhbnQgZmluZCBwbGFjZSB0byBpbnNlcnQsIGluc2VydCBhdCB0aGUgZm9udFxuICAgIGxldCBpbnNlcnRBdCA9IDA7XG5cbiAgICBpZiAoZXhwZWN0ZWRJZHggPiAwKSB7XG4gICAgICAvLyBsb29rIGZvciBsYXllciB0byBpbnNlcnQgYWZ0ZXJcbiAgICAgIGxldCBpID0gZXhwZWN0ZWRJZHggKyAxO1xuICAgICAgbGV0IHByZWNlZWRJZHggPSBudWxsO1xuICAgICAgd2hpbGUgKGktLSA+IDAgJiYgcHJlY2VlZElkeCA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcmVjZWVkTGF5ZXIgPSBwcmVzZXJ2ZWRPcmRlcltleHBlY3RlZElkeCAtIDFdO1xuICAgICAgICBwcmVjZWVkSWR4ID0gbGF5ZXJPcmRlclF1ZXVlLmluZGV4T2YocHJlY2VlZExheWVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWNlZWRJZHggPiAtMSkge1xuICAgICAgICBpbnNlcnRBdCA9IHByZWNlZWRJZHggKyAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxheWVyT3JkZXJRdWV1ZSA9IGFycmF5SW5zZXJ0KGxheWVyT3JkZXJRdWV1ZSwgaW5zZXJ0QXQsIG5ld0xheWVyLmlkKTtcbiAgICBuZXdMYXllcnMgPSBuZXdMYXllcnMuY29uY2F0KG5ld0xheWVyKTtcbiAgfVxuXG4gIC8vIHJlY29uc3RydWN0IGxheWVyT3JkZXIgYWZ0ZXIgaW5zZXJ0XG4gIGNvbnN0IG5ld0xheWVyT3JkZXIgPSBsYXllck9yZGVyUXVldWUubWFwKGlkID0+IG5ld0xheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBpZCkpO1xuXG4gIHJldHVybiB7XG4gICAgbmV3TGF5ZXJPcmRlcixcbiAgICBuZXdMYXllcnNcbiAgfTtcbn1cblxuLyoqXG4gKiBNZXJnZSBpbnRlcmFjdGlvbnMgd2l0aCBzYXZlZCBjb25maWdcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VJbnRlcmFjdGlvbnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUludGVyYWN0aW9ucyhzdGF0ZSwgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkKSB7XG4gIGNvbnN0IG1lcmdlZCA9IHt9O1xuICBjb25zdCB1bm1lcmdlZCA9IHt9O1xuXG4gIGlmIChpbnRlcmFjdGlvblRvQmVNZXJnZWQpIHtcbiAgICBPYmplY3Qua2V5cyhpbnRlcmFjdGlvblRvQmVNZXJnZWQpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZztcblxuICAgICAgY29uc3Qge2VuYWJsZWQsIC4uLmNvbmZpZ1NhdmVkfSA9IGludGVyYWN0aW9uVG9CZU1lcmdlZFtrZXldIHx8IHt9O1xuICAgICAgbGV0IGNvbmZpZ1RvTWVyZ2UgPSBjb25maWdTYXZlZDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIGNvbnN0IHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9ID0gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoc3RhdGUsIGNvbmZpZ1NhdmVkKTtcblxuICAgICAgICAvLyBtZXJnZSBuZXcgZGF0YXNldCB0b29sdGlwcyB3aXRoIG9yaWdpbmFsIGRhdGFzZXQgdG9vbHRpcHNcbiAgICAgICAgY29uZmlnVG9NZXJnZSA9IHtcbiAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRDb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgLi4ubWVyZ2VkVG9vbHRpcFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoT2JqZWN0LmtleXModW5tZXJnZWRUb29sdGlwKS5sZW5ndGgpIHtcbiAgICAgICAgICB1bm1lcmdlZC50b29sdGlwID0ge2ZpZWxkc1RvU2hvdzogdW5tZXJnZWRUb29sdGlwLCBlbmFibGVkfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZXJnZWRba2V5XSA9IHtcbiAgICAgICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XSxcbiAgICAgICAgZW5hYmxlZCxcbiAgICAgICAgLi4uKGN1cnJlbnRDb25maWdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgY29uZmlnOiBwaWNrKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICAgICAgICAgICAgICAuLi5jb25maWdUb01lcmdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgIC4uLm1lcmdlZFxuICAgIH0sXG4gICAgaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkOiB1bm1lcmdlZFxuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIHNwbGl0TWFwcyBjb25maWcgd2l0aCBjdXJyZW50IHZpc1N0ZXRlLlxuICogMS4gaWYgY3VycmVudCBtYXAgaXMgc3BsaXQsIGJ1dCBzcGxpdE1hcCBET0VTTk9UIGNvbnRhaW4gbWFwc1xuICogICAgOiBkb24ndCBtZXJnZSBhbnl0aGluZ1xuICogMi4gaWYgY3VycmVudCBtYXAgaXMgTk9UIHNwbGl0LCBidXQgc3BsaXRNYXBzIGNvbnRhaW4gbWFwc1xuICogICAgOiBhZGQgdG8gc3BsaXRNYXBzLCBhbmQgYWRkIGN1cnJlbnQgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlSW50ZXJhY3Rpb25zfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTcGxpdE1hcHMoc3RhdGUsIHNwbGl0TWFwcyA9IFtdKSB7XG4gIGNvbnN0IG1lcmdlZCA9IFsuLi5zdGF0ZS5zcGxpdE1hcHNdO1xuICBjb25zdCB1bm1lcmdlZCA9IFtdO1xuICBzcGxpdE1hcHMuZm9yRWFjaCgoc20sIGkpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhzbS5sYXllcnMpLmZvckVhY2goKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiBsYXllciBleGlzdHNcbiAgICAgIGNvbnN0IHB1c2hUbyA9IHN0YXRlLmxheWVycy5maW5kKGwgPT4gbC5pZCA9PT0gaWQpID8gbWVyZ2VkIDogdW5tZXJnZWQ7XG5cbiAgICAgIC8vIGNyZWF0ZSBtYXAgcGFuZWwgaWYgY3VycmVudCBtYXAgaXMgbm90IHNwbGl0XG4gICAgICBwdXNoVG9baV0gPSBwdXNoVG9baV0gfHwge1xuICAgICAgICBsYXllcnM6IHB1c2hUbyA9PT0gbWVyZ2VkID8gZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwKHN0YXRlLmxheWVycykgOiBbXVxuICAgICAgfTtcbiAgICAgIHB1c2hUb1tpXS5sYXllcnMgPSB7XG4gICAgICAgIC4uLnB1c2hUb1tpXS5sYXllcnMsXG4gICAgICAgIFtpZF06IHZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogbWVyZ2VkLFxuICAgIHNwbGl0TWFwc1RvQmVNZXJnZWQ6IFsuLi5zdGF0ZS5zcGxpdE1hcHNUb0JlTWVyZ2VkLCAuLi51bm1lcmdlZF1cbiAgfTtcbn1cblxuLyoqXG4gKiBNZXJnZSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwIHdpdGggc2F2ZWQgY29uZmlnLFxuICogdmFsaWRhdGUgZmllbGRzVG9TaG93XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gdG9vbHRpcENvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSAtIHttZXJnZWRUb29sdGlwOiB7fSwgdW5tZXJnZWRUb29sdGlwOiB7fX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnKHN0YXRlLCB0b29sdGlwQ29uZmlnID0ge30pIHtcbiAgY29uc3QgdW5tZXJnZWRUb29sdGlwID0ge307XG4gIGNvbnN0IG1lcmdlZFRvb2x0aXAgPSB7fTtcblxuICBpZiAoIXRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93IHx8ICFPYmplY3Qua2V5cyh0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHttZXJnZWRUb29sdGlwLCB1bm1lcmdlZFRvb2x0aXB9O1xuICB9XG5cbiAgZm9yIChjb25zdCBkYXRhSWQgaW4gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cpIHtcbiAgICBpZiAoIXN0YXRlLmRhdGFzZXRzW2RhdGFJZF0pIHtcbiAgICAgIC8vIGlzIG5vdCB5ZXQgbG9hZGVkXG4gICAgICB1bm1lcmdlZFRvb2x0aXBbZGF0YUlkXSA9IHRvb2x0aXBDb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGRhdGFzZXQgaXMgbG9hZGVkXG4gICAgICBjb25zdCBhbGxGaWVsZHMgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdLmZpZWxkcy5tYXAoZCA9PiBkLm5hbWUpO1xuICAgICAgY29uc3QgZm91bmRGaWVsZHNUb1Nob3cgPSB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdLmZpbHRlcihmaWVsZCA9PlxuICAgICAgICBhbGxGaWVsZHMuaW5jbHVkZXMoZmllbGQubmFtZSlcbiAgICAgICk7XG5cbiAgICAgIG1lcmdlZFRvb2x0aXBbZGF0YUlkXSA9IGZvdW5kRmllbGRzVG9TaG93O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7bWVyZ2VkVG9vbHRpcCwgdW5tZXJnZWRUb29sdGlwfTtcbn1cbi8qKlxuICogTWVyZ2UgbGF5ZXJCbGVuZGluZyB3aXRoIHNhdmVkXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLm1lcmdlTGF5ZXJCbGVuZGluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJCbGVuZGluZyhzdGF0ZSwgbGF5ZXJCbGVuZGluZykge1xuICBpZiAobGF5ZXJCbGVuZGluZyAmJiBMQVlFUl9CTEVORElOR1NbbGF5ZXJCbGVuZGluZ10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllckJsZW5kaW5nXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBNZXJnZSBhbmltYXRpb24gY29uZmlnXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtbWVyZ2VyJykubWVyZ2VBbmltYXRpb25Db25maWd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFuaW1hdGlvbkNvbmZpZyhzdGF0ZSwgYW5pbWF0aW9uKSB7XG4gIGlmIChhbmltYXRpb24gJiYgYW5pbWF0aW9uLmN1cnJlbnRUaW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgICAgLi4uYW5pbWF0aW9uLFxuICAgICAgICBkb21haW46IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIGxheWVyIGNvbHVtbnMgd2l0aCBuZXcgZGF0YSxcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXG4gKlxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBmaWVsZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzYXZlZENvbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbXB0eUNvbHNcbiAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IC0gdmFsaWRhdGVkIGNvbHVtbnMgb3IgbnVsbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkTGF5ZXJDb2x1bW5zKGZpZWxkcywgc2F2ZWRDb2xzID0ge30sIGVtcHR5Q29scykge1xuICAvLyBQcmVwYXJlIGNvbHVtbnMgZm9yIHRoZSB2YWxpZGF0b3JcbiAgY29uc3QgY29sdW1ucyA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhlbXB0eUNvbHMpKSB7XG4gICAgY29sdW1uc1trZXldID0gey4uLmVtcHR5Q29sc1trZXldfTtcblxuICAgIGNvbnN0IHNhdmVkID0gc2F2ZWRDb2xzW2tleV07XG4gICAgaWYgKHNhdmVkKSB7XG4gICAgICBjb25zdCBmaWVsZElkeCA9IGZpZWxkcy5maW5kSW5kZXgoKHtuYW1lfSkgPT4gbmFtZSA9PT0gc2F2ZWQpO1xuXG4gICAgICBpZiAoZmllbGRJZHggPiAtMSkge1xuICAgICAgICAvLyB1cGRhdGUgZm91bmQgY29sdW1uc1xuICAgICAgICBjb2x1bW5zW2tleV0uZmllbGRJZHggPSBmaWVsZElkeDtcbiAgICAgICAgY29sdW1uc1trZXldLnZhbHVlID0gc2F2ZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhY3R1YWwgY29sdW1uIGZpZWxkSWR4LCBpbiBjYXNlIGl0IGhhcyBjaGFuZ2VkXG4gIGNvbnN0IGFsbENvbEZvdW5kID0gT2JqZWN0LmtleXMoY29sdW1ucykuZXZlcnkoa2V5ID0+XG4gICAgdmFsaWRhdGVDb2x1bW4oY29sdW1uc1trZXldLCBjb2x1bW5zLCBmaWVsZHMpXG4gICk7XG5cbiAgaWYgKGFsbENvbEZvdW5kKSB7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29sdW1uKGNvbHVtbiwgY29sdW1ucywgYWxsRmllbGRzKSB7XG4gIGlmIChjb2x1bW4ub3B0aW9uYWwgfHwgY29sdW1uLnZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGNvbHVtbi52YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gY29sdW1uLnZhbGlkYXRvcihjb2x1bW4sIGNvbHVtbnMsIGFsbEZpZWxkcyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIHRleHQgbGFiZWwgY29uZmlnIHdpdGggbmV3IGRhdGFcbiAqIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVGV4dExhYmVsU2NoZW1hVjFcbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkVGV4dExhYmVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdmFsaWRhdGVkIHRleHRsYWJlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIFtsYXllclRleHRMYWJlbF0sIHNhdmVkVGV4dExhYmVsKSB7XG4gIGNvbnN0IHNhdmVkVGV4dExhYmVscyA9IEFycmF5LmlzQXJyYXkoc2F2ZWRUZXh0TGFiZWwpID8gc2F2ZWRUZXh0TGFiZWwgOiBbc2F2ZWRUZXh0TGFiZWxdO1xuXG4gIC8vIHZhbGlkYXRlIGZpZWxkXG4gIHJldHVybiBzYXZlZFRleHRMYWJlbHMubWFwKHRleHRMYWJlbCA9PiB7XG4gICAgY29uc3QgZmllbGQgPSB0ZXh0TGFiZWwuZmllbGRcbiAgICAgID8gZmllbGRzLmZpbmQoZmQgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyh0ZXh0TGFiZWwuZmllbGQpLmV2ZXJ5KGtleSA9PiB0ZXh0TGFiZWwuZmllbGRba2V5XSA9PT0gZmRba2V5XSlcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxheWVyVGV4dExhYmVsKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XToga2V5ID09PSAnZmllbGQnID8gZmllbGQgOiB0ZXh0TGFiZWxba2V5XSB8fCBsYXllclRleHRMYWJlbFtrZXldXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgdmlzdWFsIGNoYW5uZWxzIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1tZXJnZXInKS52YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMoZmllbGRzLCBuZXdMYXllciwgc2F2ZWRMYXllcikge1xuICBPYmplY3QudmFsdWVzKG5ld0xheWVyLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKCh7ZmllbGQsIHNjYWxlLCBrZXl9KSA9PiB7XG4gICAgbGV0IGZvdW5kRmllbGQ7XG4gICAgaWYgKHNhdmVkTGF5ZXIuY29uZmlnKSB7XG4gICAgICBpZiAoc2F2ZWRMYXllci5jb25maWdbZmllbGRdKSB7XG4gICAgICAgIGZvdW5kRmllbGQgPSBmaWVsZHMuZmluZChcbiAgICAgICAgICBmZCA9PiBzYXZlZExheWVyLmNvbmZpZyAmJiBmZC5uYW1lID09PSBzYXZlZExheWVyLmNvbmZpZ1tmaWVsZF0ubmFtZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3VuZENoYW5uZWwgPSB7XG4gICAgICAgIC4uLihmb3VuZEZpZWxkID8ge1tmaWVsZF06IGZvdW5kRmllbGR9IDoge30pLFxuICAgICAgICAuLi4oc2F2ZWRMYXllci5jb25maWdbc2NhbGVdID8ge1tzY2FsZV06IHNhdmVkTGF5ZXIuY29uZmlnW3NjYWxlXX0gOiB7fSlcbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm91bmRDaGFubmVsKS5sZW5ndGgpIHtcbiAgICAgICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoZm91bmRDaGFubmVsKTtcbiAgICAgIH1cblxuICAgICAgbmV3TGF5ZXIudmFsaWRhdGVWaXN1YWxDaGFubmVsKGtleSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMYXllcnNCeURhdGFzZXRzKGRhdGFzZXRzLCBsYXllckNsYXNzZXMsIGxheWVycykge1xuICBjb25zdCB2YWxpZGF0ZWQgPSBbXTtcbiAgY29uc3QgZmFpbGVkID0gW107XG5cbiAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgIGxldCB2YWxpZGF0ZUxheWVyO1xuICAgIGlmICghbGF5ZXIgfHwgIWxheWVyLmNvbmZpZykge1xuICAgICAgdmFsaWRhdGVMYXllciA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSkge1xuICAgICAgLy8gZGF0YXNldHMgYXJlIGFscmVhZHkgbG9hZGVkXG4gICAgICB2YWxpZGF0ZUxheWVyID0gdmFsaWRhdGVMYXllcldpdGhEYXRhKGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdLCBsYXllciwgbGF5ZXJDbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVMYXllcikge1xuICAgICAgdmFsaWRhdGVkLnB1c2godmFsaWRhdGVMYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRhdGFzZXRzIG5vdCB5ZXQgbG9hZGVkXG4gICAgICBmYWlsZWQucHVzaChsYXllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge3ZhbGlkYXRlZCwgZmFpbGVkfTtcbn1cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXG4gKiB1cGRhdGUgZmllbGRJZHggYmFzZWQgb24gbmV3IGZpZWxkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLW1lcmdlcicpLnZhbGlkYXRlTGF5ZXJXaXRoRGF0YX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTGF5ZXJXaXRoRGF0YShcbiAge2ZpZWxkcywgaWQ6IGRhdGFJZH0sXG4gIHNhdmVkTGF5ZXIsXG4gIGxheWVyQ2xhc3NlcyxcbiAgb3B0aW9ucyA9IHt9XG4pIHtcbiAgY29uc3Qge3R5cGV9ID0gc2F2ZWRMYXllcjtcbiAgLy8gbGF5ZXIgZG9lc250IGhhdmUgYSB2YWxpZCB0eXBlXG4gIGlmICghdHlwZSB8fCAhbGF5ZXJDbGFzc2VzLmhhc093blByb3BlcnR5KHR5cGUpIHx8ICFzYXZlZExheWVyLmNvbmZpZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IG5ld0xheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1t0eXBlXSh7XG4gICAgaWQ6IHNhdmVkTGF5ZXIuaWQsXG4gICAgZGF0YUlkLFxuICAgIGxhYmVsOiBzYXZlZExheWVyLmNvbmZpZy5sYWJlbCxcbiAgICBjb2xvcjogc2F2ZWRMYXllci5jb25maWcuY29sb3IsXG4gICAgaXNWaXNpYmxlOiBzYXZlZExheWVyLmNvbmZpZy5pc1Zpc2libGUsXG4gICAgaGlkZGVuOiBzYXZlZExheWVyLmNvbmZpZy5oaWRkZW5cbiAgfSk7XG5cbiAgLy8gZmluZCBjb2x1bW4gZmllbGRJZHhcbiAgY29uc3QgY29sdW1uQ29uZmlnID0gbmV3TGF5ZXIuZ2V0TGF5ZXJDb2x1bW5zKCk7XG4gIGlmIChPYmplY3Qua2V5cyhjb2x1bW5Db25maWcpLmxlbmd0aCkge1xuICAgIGNvbnN0IGNvbHVtbnMgPSB2YWxpZGF0ZVNhdmVkTGF5ZXJDb2x1bW5zKGZpZWxkcywgc2F2ZWRMYXllci5jb25maWcuY29sdW1ucywgY29sdW1uQ29uZmlnKTtcbiAgICBpZiAoY29sdW1ucykge1xuICAgICAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe2NvbHVtbnN9KTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zLmFsbG93RW1wdHlDb2x1bW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHZpc3VhbCBjaGFubmVsIGZpZWxkIGlzIHNhdmVkIHRvIGJlIHtuYW1lLCB0eXBlfVxuICAvLyBmaW5kIHZpc3VhbCBjaGFubmVsIGZpZWxkIGJ5IG1hdGNoaW5nIGJvdGggbmFtZSBhbmQgdHlwZVxuICAvLyByZWZlciB0byB2aXMtc3RhdGUtc2NoZW1hLmpzIFZpc3VhbENoYW5uZWxTY2hlbWFWMVxuICBuZXdMYXllciA9IHZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVscyhmaWVsZHMsIG5ld0xheWVyLCBzYXZlZExheWVyKTtcblxuICBjb25zdCB0ZXh0TGFiZWwgPVxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLnRleHRMYWJlbCAmJiBuZXdMYXllci5jb25maWcudGV4dExhYmVsXG4gICAgICA/IHZhbGlkYXRlU2F2ZWRUZXh0TGFiZWwoZmllbGRzLCBuZXdMYXllci5jb25maWcudGV4dExhYmVsLCBzYXZlZExheWVyLmNvbmZpZy50ZXh0TGFiZWwpXG4gICAgICA6IG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWw7XG5cbiAgLy8gY29weSB2aXNDb25maWcgb3ZlciB0byBlbXB0eUxheWVyIHRvIG1ha2Ugc3VyZSBpdCBoYXMgYWxsIHRoZSBwcm9wc1xuICBjb25zdCB2aXNDb25maWcgPSBuZXdMYXllci5jb3B5TGF5ZXJDb25maWcoXG4gICAgbmV3TGF5ZXIuY29uZmlnLnZpc0NvbmZpZyxcbiAgICBzYXZlZExheWVyLmNvbmZpZy52aXNDb25maWcgfHwge30sXG4gICAge3NoYWxsb3dDb3B5OiBbJ2NvbG9yUmFuZ2UnLCAnc3Ryb2tlQ29sb3JSYW5nZSddfVxuICApO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICB2aXNDb25maWcsXG4gICAgdGV4dExhYmVsXG4gIH0pO1xuXG4gIHJldHVybiBuZXdMYXllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRNZXJnZXIobWVyZ2VyKSB7XG4gIHJldHVybiBpc09iamVjdChtZXJnZXIpICYmIHR5cGVvZiBtZXJnZXIubWVyZ2UgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG1lcmdlci5wcm9wID09PSAnc3RyaW5nJztcbn1cblxuZXhwb3J0IGNvbnN0IFZJU19TVEFURV9NRVJHRVJTID0gW1xuICB7bWVyZ2U6IG1lcmdlTGF5ZXJzLCBwcm9wOiAnbGF5ZXJzJywgdG9NZXJnZVByb3A6ICdsYXllclRvQmVNZXJnZWQnfSxcbiAge21lcmdlOiBtZXJnZUZpbHRlcnMsIHByb3A6ICdmaWx0ZXJzJywgdG9NZXJnZVByb3A6ICdmaWx0ZXJUb0JlTWVyZ2VkJ30sXG4gIHttZXJnZTogbWVyZ2VJbnRlcmFjdGlvbnMsIHByb3A6ICdpbnRlcmFjdGlvbkNvbmZpZycsIHRvTWVyZ2VQcm9wOiAnaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkJ30sXG4gIHttZXJnZTogbWVyZ2VMYXllckJsZW5kaW5nLCBwcm9wOiAnbGF5ZXJCbGVuZGluZyd9LFxuICB7bWVyZ2U6IG1lcmdlU3BsaXRNYXBzLCBwcm9wOiAnc3BsaXRNYXBzJywgdG9NZXJnZVByb3A6ICdzcGxpdE1hcHNUb0JlTWVyZ2VkJ30sXG4gIHttZXJnZTogbWVyZ2VBbmltYXRpb25Db25maWcsIHByb3A6ICdhbmltYXRpb25Db25maWcnfVxuXTtcbiJdfQ==