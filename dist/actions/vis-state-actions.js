"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTextLabelChange = layerTextLabelChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.layerColorUIChange = layerColorUIChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.setFilterAnimationTime = setFilterAnimationTime;
exports.setFilterAnimationWindow = setFilterAnimationWindow;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.duplicateLayer = duplicateLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.sortTableColumn = sortTableColumn;
exports.pinTableColumn = pinTableColumn;
exports.copyTableColumn = copyTableColumn;
exports.updateVisData = updateVisData;
exports.renameDataset = renameDataset;
exports.toggleFilterAnimation = toggleFilterAnimation;
exports.updateFilterAnimationSpeed = updateFilterAnimationSpeed;
exports.setLayerAnimationTime = setLayerAnimationTime;
exports.updateLayerAnimationSpeed = updateLayerAnimationSpeed;
exports.toggleLayerAnimation = toggleLayerAnimation;
exports.enlargeFilter = enlargeFilter;
exports.toggleFilterFeature = toggleFilterFeature;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.onMouseMove = onMouseMove;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setFilterPlot = setFilterPlot;
exports.setMapInfo = setMapInfo;
exports.loadFiles = loadFiles;
exports.loadNextFile = loadNextFile;
exports.loadFilesSuccess = loadFilesSuccess;
exports.loadFileStepSuccess = loadFileStepSuccess;
exports.loadFilesErr = loadFilesErr;
exports.setFeatures = setFeatures;
exports.setPolygonFilterLayer = setPolygonFilterLayer;
exports.setSelectedFeature = setSelectedFeature;
exports.deleteFeature = deleteFeature;
exports.setEditorMode = setEditorMode;
exports.applyCPUFilter = applyCPUFilter;
exports.toggleEditorVisibility = toggleEditorVisibility;
exports.nextFileBatch = nextFileBatch;
exports.processFileContent = processFileContent;
exports.setLayerAnimationTimeConfig = setLayerAnimationTimeConfig;
exports.setFilterAnimationTimeConfig = setFilterAnimationTimeConfig;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

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
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @param oldLayer - layer to be updated
 * @param newConfig - new config to be merged with old config
 * @returns action
 * @type {typeof import('./vis-state-actions').layerConfigChange}
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}
/**
 * Update layer text label
 * @param oldLayer - layer to be updated
 * @param idx -`idx` of text label to be updated
 * @param prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param value - new value
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTextLabelChange}
 * @public
 */


function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE,
    oldLayer: oldLayer,
    idx: idx,
    prop: prop,
    value: value
  };
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @param oldLayer - layer to be updated
 * @param newType - new type
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTypeChange}
 * @public
 */


function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}
/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newConfig - new visual channel config
 * @param channel - channel to be updated
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisualChannelConfigChange}
 * @public
 */


function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}
/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisConfigChange}
 * @public
 */


function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}
/**
 * Set the color palette ui for layer color
 * @memberOf visStateActions
 * @param oldLayer - layer to be updated
 * @param prop - which color prop
 * @param newConfig - to be merged
 * @returns action
 * @type {typeof import('./vis-state-actions').layerColorUIChange}
 * @public
 */


function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_COLOR_UI_CHANGE,
    oldLayer: oldLayer,
    prop: prop,
    newConfig: newConfig
  };
}
/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param mode one of `additive`, `normal` and `subtractive`
 * @returns action
 * @type {typeof import('./vis-state-actions').updateLayerBlending}
 * @public
 */


function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}
/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns action
 * @type {typeof import('./vis-state-actions').interactionConfigChange}
 * @public
 */


function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}
/**
 * Update filter property
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilter}
 * @public
 */


function setFilter(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Same as Update filter
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilterAnimationTime}
 * @public
 */


function setFilterAnimationTime(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_TIME,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}
/**
 * Same as Update filter
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').setFilterAnimationWindow}
 * @public
 */


function setFilterAnimationWindow(_ref) {
  var id = _ref.id,
      animationWindow = _ref.animationWindow;
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_WINDOW,
    id: id,
    animationWindow: animationWindow
  };
}
/**
 * Add a new filter
 * @memberof visStateActions
 * @param dataId - dataset `id` this new filter is associated with
 * @returns action
 * @type {typeof import('./vis-state-actions').addFilter}
 * @public
 */


function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}
/**
 * Add a new layer
 * @memberof visStateActions
 * @param config - new layer config
 * @returns action
 * @type {typeof import('./vis-state-actions').addLayer}
 * @public
 */


function addLayer(config) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    config: config
  };
}
/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param order an array of layer indexes
 * @returns action
 * @type {typeof import('./vis-state-actions').reorderLayer}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */


function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}
/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param idx idx of filter to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeFilter}
 * @public
 */


function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}
/**
 * Remove a layer
 * @memberof visStateActions
 * @param idx idx of layer to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeLayer}
 * @public
 */


function removeLayer(idx) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    idx: idx
  };
}
/**
 * Duplicate a layer
 * @memberof visStateActions
 * @param idx idx of layer to be duplicated
 * @returns action
 * @type {typeof import('./vis-state-actions').duplicateLayer}
 * @public
 */


function duplicateLayer(idx) {
  return {
    type: _actionTypes["default"].DUPLICATE_LAYER,
    idx: idx
  };
}
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param dataId dataset id
 * @returns action
 * @type {typeof import('./vis-state-actions').removeDataset}
 * @public
 */


function removeDataset(dataId) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    dataId: dataId
  };
}
/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param dataId dataset id to show in table
 * @returns action
 * @type {typeof import('./vis-state-actions').showDatasetTable}
 * @public
 */


function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}
/**
 * Sort dataset column, for table display
 * @memberof visStateActions
 * @param dataId
 * @param column
 * @param mode
 * @returns action
 * @type {typeof import('./vis-state-actions').sortTableColumn}
 * @public
 */


function sortTableColumn(dataId, column, mode) {
  return {
    type: _actionTypes["default"].SORT_TABLE_COLUMN,
    dataId: dataId,
    column: column,
    mode: mode
  };
}
/**
 * Pin dataset column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').pinTableColumn}
 * @public
 */


function pinTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].PIN_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
}
/**
 * Copy column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').copyTableColumn}
 * @public
 */


function copyTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].COPY_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
} // * @param dataset.info -info of a dataset
// * @param dataset.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
// * @param dataset.info.label - A display name of this dataset
// * @param dataset.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
// * @param dataset.data.fields - ***required** Array of fields,
// * @param dataset.data.fields.name - ***required** Name of the field,
// * @param dataset.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {object} options
 * @param options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns action
 * @type {typeof import('./vis-state-actions').updateVisData}
 * @public
 */


function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}
/**
 * Rename an existing dataset in `visState`
 * @memberof visStateActions
 * @param dataId - ***required** Id of the dataset to update
 * @param label - ***required** New name for the dataset
 * @returns action
 * @type {typeof import('./vis-state-actions').renameDataset}
 * @public
 */


function renameDataset(dataId, label) {
  return {
    type: _actionTypes["default"].RENAME_DATASET,
    dataId: dataId,
    label: label
  };
}
/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx of filter
 * @type {typeof import('./vis-state-actions').toggleFilterAnimation}
 * @returns action
 * @public
 */


function toggleFilterAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}
/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param idx -  `idx` of filter
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateFilterAnimationSpeed}
 * @returns action
 * @public
 */


function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}
/**
 * Reset animation
 * @memberof visStateActions
 * @param value -  Current value of the slider
 * @type {typeof import('./vis-state-actions').setLayerAnimationTime}
 * @returns action
 * @public
 */


function setLayerAnimationTime(value) {
  return {
    type: _actionTypes["default"].SET_LAYER_ANIMATION_TIME,
    value: value
  };
}
/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @type {typeof import('./vis-state-actions').updateLayerAnimationSpeed}
 * @returns action
 * @public
 */


function updateLayerAnimationSpeed(speed) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED,
    speed: speed
  };
}

function toggleLayerAnimation() {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_ANIMATION
  };
}
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param idx - index of filter to enlarge
 * @type {typeof import('./vis-state-actions').enlargeFilter}
 * @returns action
 * @public
 */


function enlargeFilter(idx) {
  return {
    type: _actionTypes["default"].ENLARGE_FILTER,
    idx: idx
  };
}
/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param idx - index of filter feature to show/hide
 * @type {typeof import('./vis-state-actions').toggleFilterFeature}
 * @return action
 */


function toggleFilterFeature(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_FEATURE,
    idx: idx
  };
}
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param info - Object hovered, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerHover}
 * @returns action
 * @public
 */


function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param info - Object clicked, returned by deck.gl
 * @type {typeof import('./vis-state-actions').onLayerClick}
 * @returns action
 * @public
 */


function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').onMapClick}
 * @returns action
 * @public
 */


function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}
/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param evt - PointerEvent
 * @type {typeof import('./vis-state-actions').onMouseMove}
 * @returns action
 * @public
 */


function onMouseMove(evt) {
  return {
    type: _actionTypes["default"].MOUSE_MOVE,
    evt: evt
  };
}
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param mapIndex - index of the split map
 * @param layerId - id of the layer
 * @type {typeof import('./vis-state-actions').toggleLayerForMap}
 * @returns action
 * @public
 */


function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param idx
 * @param newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @param valueIndex dataId index
 * @type {typeof import('./vis-state-actions').setFilterPlot}
 * @returns action
 * @public
 */


function setFilterPlot(idx, newProp, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp,
    valueIndex: valueIndex
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param info
 * @type {typeof import('./vis-state-actions').setMapInfo}
 * @returns action
 * @public
 */


function setMapInfo(info) {
  return {
    type: _actionTypes["default"].SET_MAP_INFO,
    info: info
  };
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param files array of fileblob
 * @type {typeof import('./vis-state-actions').loadFiles}
 * @returns action
 * @public
 */


function loadFiles(files, onFinish) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files,
    onFinish: onFinish
  };
}
/**
 * Called with next file to load
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').loadNextFile}
 * @returns action
 * @public
 */


function loadNextFile() {
  return {
    type: _actionTypes["default"].LOAD_NEXT_FILE
  };
}
/**
 * called when all files are processed and loaded
 * @memberof visStateActions
 * @param result
 * @type {typeof import('./vis-state-actions').loadFilesSuccess}
 * @returns action
 */


function loadFilesSuccess(result) {
  return {
    type: _actionTypes["default"].LOAD_FILES_SUCCESS,
    result: result
  };
}
/**
 * called when successfully loaded one file, ready to move on to the next one
 * @memberof visStateActions
 * @param result
 * @type {typeof import('./vis-state-actions').loadFileStepSuccess}
 * @returns action
 */


function loadFileStepSuccess(_ref2) {
  var fileName = _ref2.fileName,
      fileCache = _ref2.fileCache;
  return {
    type: _actionTypes["default"].LOAD_FILE_STEP_SUCCESS,
    fileName: fileName,
    fileCache: fileCache
  };
}
/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param  error
 * @type {typeof import('./vis-state-actions').loadFilesErr}
 * @returns action
 * @public
 */


function loadFilesErr(fileName, error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    fileName: fileName,
    error: error
  };
}
/**
 * Store features to state
 * @memberof visStateActions
 * @param features
 * @type {typeof import('./vis-state-actions').setFeatures}
 * @returns action
 */


function setFeatures(features) {
  return {
    type: _actionTypes["default"].SET_FEATURES,
    features: features
  };
}
/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param layer
 * @param feature
 * @type {typeof import('./vis-state-actions').setPolygonFilterLayer}
 * @returns action
 */


function setPolygonFilterLayer(layer, feature) {
  return {
    type: _actionTypes["default"].SET_POLYGON_FILTER_LAYER,
    layer: layer,
    feature: feature
  };
}
/**
 * Set the current feature to be edited/deleted
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').setSelectedFeature}
 * @returns action
 */


function setSelectedFeature(feature) {
  return {
    type: _actionTypes["default"].SET_SELECTED_FEATURE,
    feature: feature
  };
}
/**
 * Delete the given feature
 * @memberof visStateActions
 * @param feature
 * @type {typeof import('./vis-state-actions').deleteFeature}
 * @returns action
 */


function deleteFeature(feature) {
  return {
    type: _actionTypes["default"].DELETE_FEATURE,
    feature: feature
  };
}
/** Set the map mode
 * @memberof visStateActions
 * @param mode one of EDITOR_MODES
 * @type {typeof import('./vis-state-actions').setEditorMode}
 * @returns action
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */


function setEditorMode(mode) {
  return {
    type: _actionTypes["default"].SET_EDITOR_MODE,
    mode: mode
  };
}
/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param dataId - single dataId or an array of dataIds
 * @type {typeof import('./vis-state-actions').applyCPUFilter}
 * @returns action
 * @public
 */


function applyCPUFilter(dataId) {
  return {
    type: _actionTypes["default"].APPLY_CPU_FILTER,
    dataId: dataId
  };
}
/**
 * Toggle editor layer visibility
 * @memberof visStateActions
 * @type {typeof import('./vis-state-actions').toggleEditorVisibility}
 * @return action
 */


function toggleEditorVisibility() {
  return {
    type: _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY
  };
}
/**
 * Process the next file batch
 * @memberof visStateActions
 * @param payload - batch payload
 * @type {typeof import('./vis-state-actions').nextFileBatch}
 * @return action
 */


function nextFileBatch(payload) {
  return {
    type: _actionTypes["default"].NEXT_FILE_BATCH,
    payload: payload
  };
}
/**
 * Process the file content
 * @memberof visStateActions
 * @param payload - the file content
 * @type {typeof import('./vis-state-actions').processFileContent}
 * @return action
 */


function processFileContent(payload) {
  return {
    type: _actionTypes["default"].PROCESS_FILE_CONTENT,
    payload: payload
  };
}
/**
 * Set layer animation time format and timezone
 * @memberof visStateActions
 * @param config - {timeFormat: string, timezone: string}
 * @type {typeof import('./vis-state-actions').setLayerAnimationTimeConfig}
 * @return action
 */


function setLayerAnimationTimeConfig(config) {
  return {
    type: _actionTypes["default"].SET_LAYER_ANIMATION_TIME_CONFIG,
    config: config
  };
}
/**
 * Set Filter animation time format and timezone
 * @memberof visStateActions
 * @param idx
 * @param config
 * @type {typeof import('./vis-state-actions').setFilterAnimationTimeConfig}
 * @return action
 */


function setFilterAnimationTimeConfig(idx, config) {
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_TIME_CONFIG,
    idx: idx,
    config: config
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2UiLCJpZHgiLCJwcm9wIiwidmFsdWUiLCJMQVlFUl9URVhUX0xBQkVMX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1R5cGUiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImNoYW5uZWwiLCJMQVlFUl9WSVNVQUxfQ0hBTk5FTF9DSEFOR0UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsIkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFIiwibGF5ZXJDb2xvclVJQ2hhbmdlIiwiTEFZRVJfQ09MT1JfVUlfQ0hBTkdFIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsIm1vZGUiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJzZXRGaWx0ZXIiLCJ2YWx1ZUluZGV4IiwiU0VUX0ZJTFRFUiIsInNldEZpbHRlckFuaW1hdGlvblRpbWUiLCJTRVRfRklMVEVSX0FOSU1BVElPTl9USU1FIiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwiaWQiLCJhbmltYXRpb25XaW5kb3ciLCJTRVRfRklMVEVSX0FOSU1BVElPTl9XSU5ET1ciLCJhZGRGaWx0ZXIiLCJkYXRhSWQiLCJBRERfRklMVEVSIiwiYWRkTGF5ZXIiLCJBRERfTEFZRVIiLCJyZW9yZGVyTGF5ZXIiLCJvcmRlciIsIlJFT1JERVJfTEFZRVIiLCJyZW1vdmVGaWx0ZXIiLCJSRU1PVkVfRklMVEVSIiwicmVtb3ZlTGF5ZXIiLCJSRU1PVkVfTEFZRVIiLCJkdXBsaWNhdGVMYXllciIsIkRVUExJQ0FURV9MQVlFUiIsInJlbW92ZURhdGFzZXQiLCJSRU1PVkVfREFUQVNFVCIsInNob3dEYXRhc2V0VGFibGUiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJzb3J0VGFibGVDb2x1bW4iLCJjb2x1bW4iLCJTT1JUX1RBQkxFX0NPTFVNTiIsInBpblRhYmxlQ29sdW1uIiwiUElOX1RBQkxFX0NPTFVNTiIsImNvcHlUYWJsZUNvbHVtbiIsIkNPUFlfVEFCTEVfQ09MVU1OIiwidXBkYXRlVmlzRGF0YSIsImRhdGFzZXRzIiwib3B0aW9ucyIsIlVQREFURV9WSVNfREFUQSIsInJlbmFtZURhdGFzZXQiLCJsYWJlbCIsIlJFTkFNRV9EQVRBU0VUIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZCIsInNwZWVkIiwiVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQiLCJzZXRMYXllckFuaW1hdGlvblRpbWUiLCJTRVRfTEFZRVJfQU5JTUFUSU9OX1RJTUUiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkIiwiVVBEQVRFX0xBWUVSX0FOSU1BVElPTl9TUEVFRCIsInRvZ2dsZUxheWVyQW5pbWF0aW9uIiwiVE9HR0xFX0xBWUVSX0FOSU1BVElPTiIsImVubGFyZ2VGaWx0ZXIiLCJFTkxBUkdFX0ZJTFRFUiIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJUT0dHTEVfRklMVEVSX0ZFQVRVUkUiLCJvbkxheWVySG92ZXIiLCJpbmZvIiwiTEFZRVJfSE9WRVIiLCJvbkxheWVyQ2xpY2siLCJMQVlFUl9DTElDSyIsIm9uTWFwQ2xpY2siLCJNQVBfQ0xJQ0siLCJvbk1vdXNlTW92ZSIsImV2dCIsIk1PVVNFX01PVkUiLCJ0b2dnbGVMYXllckZvck1hcCIsIm1hcEluZGV4IiwibGF5ZXJJZCIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwic2V0RmlsdGVyUGxvdCIsIm5ld1Byb3AiLCJTRVRfRklMVEVSX1BMT1QiLCJzZXRNYXBJbmZvIiwiU0VUX01BUF9JTkZPIiwibG9hZEZpbGVzIiwiZmlsZXMiLCJvbkZpbmlzaCIsIkxPQURfRklMRVMiLCJsb2FkTmV4dEZpbGUiLCJMT0FEX05FWFRfRklMRSIsImxvYWRGaWxlc1N1Y2Nlc3MiLCJyZXN1bHQiLCJMT0FEX0ZJTEVTX1NVQ0NFU1MiLCJsb2FkRmlsZVN0ZXBTdWNjZXNzIiwiZmlsZU5hbWUiLCJmaWxlQ2FjaGUiLCJMT0FEX0ZJTEVfU1RFUF9TVUNDRVNTIiwibG9hZEZpbGVzRXJyIiwiZXJyb3IiLCJMT0FEX0ZJTEVTX0VSUiIsInNldEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJTRVRfRkVBVFVSRVMiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXIiLCJsYXllciIsImZlYXR1cmUiLCJTRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIiLCJzZXRTZWxlY3RlZEZlYXR1cmUiLCJTRVRfU0VMRUNURURfRkVBVFVSRSIsImRlbGV0ZUZlYXR1cmUiLCJERUxFVEVfRkVBVFVSRSIsInNldEVkaXRvck1vZGUiLCJTRVRfRURJVE9SX01PREUiLCJhcHBseUNQVUZpbHRlciIsIkFQUExZX0NQVV9GSUxURVIiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5IiwiVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZIiwibmV4dEZpbGVCYXRjaCIsInBheWxvYWQiLCJORVhUX0ZJTEVfQkFUQ0giLCJwcm9jZXNzRmlsZUNvbnRlbnQiLCJQUk9DRVNTX0ZJTEVfQ09OVEVOVCIsInNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZyIsIlNFVF9MQVlFUl9BTklNQVRJT05fVElNRV9DT05GSUciLCJzZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnIiwiU0VUX0ZJTFRFUl9BTklNQVRJT05fVElNRV9DT05GSUciLCJ2aXNTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxpQkFBVCxDQUEyQkMsUUFBM0IsRUFBcUNDLFNBQXJDLEVBQWdEO0FBQ3JELFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWUMsbUJBRGI7QUFFTEosSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksb0JBQVQsQ0FBOEJMLFFBQTlCLEVBQXdDTSxHQUF4QyxFQUE2Q0MsSUFBN0MsRUFBbURDLEtBQW5ELEVBQTBEO0FBQy9ELFNBQU87QUFDTE4sSUFBQUEsSUFBSSxFQUFFQyx3QkFBWU0sdUJBRGI7QUFFTFQsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xNLElBQUFBLEdBQUcsRUFBSEEsR0FISztBQUlMQyxJQUFBQSxJQUFJLEVBQUpBLElBSks7QUFLTEMsSUFBQUEsS0FBSyxFQUFMQTtBQUxLLEdBQVA7QUFPRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLGVBQVQsQ0FBeUJWLFFBQXpCLEVBQW1DVyxPQUFuQyxFQUE0QztBQUNqRCxTQUFPO0FBQ0xULElBQUFBLElBQUksRUFBRUMsd0JBQVlTLGlCQURiO0FBRUxaLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMVyxJQUFBQSxPQUFPLEVBQVBBO0FBSEssR0FBUDtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLDhCQUFULENBQXdDYixRQUF4QyxFQUFrREMsU0FBbEQsRUFBNkRhLE9BQTdELEVBQXNFO0FBQzNFLFNBQU87QUFDTFosSUFBQUEsSUFBSSxFQUFFQyx3QkFBWVksMkJBRGI7QUFFTGYsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEEsU0FISztBQUlMYSxJQUFBQSxPQUFPLEVBQVBBO0FBSkssR0FBUDtBQU1EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxvQkFBVCxDQUE4QmhCLFFBQTlCLEVBQXdDaUIsWUFBeEMsRUFBc0Q7QUFDM0QsU0FBTztBQUNMZixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZZSx1QkFEYjtBQUVMbEIsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xpQixJQUFBQSxZQUFZLEVBQVpBO0FBSEssR0FBUDtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLGtCQUFULENBQTRCbkIsUUFBNUIsRUFBc0NPLElBQXRDLEVBQTRDTixTQUE1QyxFQUF1RDtBQUM1RCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsd0JBQVlpQixxQkFEYjtBQUVMcEIsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xPLElBQUFBLElBQUksRUFBSkEsSUFISztBQUlMTixJQUFBQSxTQUFTLEVBQVRBO0FBSkssR0FBUDtBQU1EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU29CLG1CQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxTQUFPO0FBQ0xwQixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZb0IscUJBRGI7QUFFTEQsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLHVCQUFULENBQWlDQyxNQUFqQyxFQUF5QztBQUM5QyxTQUFPO0FBQ0x2QixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZdUIseUJBRGI7QUFFTEQsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFNBQVQsQ0FBbUJyQixHQUFuQixFQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDb0IsVUFBckMsRUFBaUQ7QUFDdEQsU0FBTztBQUNMMUIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWTBCLFVBRGI7QUFFTHZCLElBQUFBLEdBQUcsRUFBSEEsR0FGSztBQUdMQyxJQUFBQSxJQUFJLEVBQUpBLElBSEs7QUFJTEMsSUFBQUEsS0FBSyxFQUFMQSxLQUpLO0FBS0xvQixJQUFBQSxVQUFVLEVBQVZBO0FBTEssR0FBUDtBQU9EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0Usc0JBQVQsQ0FBZ0N4QixHQUFoQyxFQUFxQ0MsSUFBckMsRUFBMkNDLEtBQTNDLEVBQWtEb0IsVUFBbEQsRUFBOEQ7QUFDbkUsU0FBTztBQUNMMUIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWTRCLHlCQURiO0FBRUx6QixJQUFBQSxHQUFHLEVBQUhBLEdBRks7QUFHTEMsSUFBQUEsSUFBSSxFQUFKQSxJQUhLO0FBSUxDLElBQUFBLEtBQUssRUFBTEEsS0FKSztBQUtMb0IsSUFBQUEsVUFBVSxFQUFWQTtBQUxLLEdBQVA7QUFPRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksd0JBQVQsT0FBeUQ7QUFBQSxNQUF0QkMsRUFBc0IsUUFBdEJBLEVBQXNCO0FBQUEsTUFBbEJDLGVBQWtCLFFBQWxCQSxlQUFrQjtBQUM5RCxTQUFPO0FBQ0xoQyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZZ0MsMkJBRGI7QUFFTEYsSUFBQUEsRUFBRSxFQUFGQSxFQUZLO0FBR0xDLElBQUFBLGVBQWUsRUFBZkE7QUFISyxHQUFQO0FBS0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNoQyxTQUFPO0FBQ0xuQyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZbUMsVUFEYjtBQUVMRCxJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsUUFBVCxDQUFrQmQsTUFBbEIsRUFBMEI7QUFDL0IsU0FBTztBQUNMdkIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXFDLFNBRGI7QUFFTGYsSUFBQUEsTUFBTSxFQUFOQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTZ0IsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDbEMsU0FBTztBQUNMeEMsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXdDLGFBRGI7QUFFTEQsSUFBQUEsS0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLFlBQVQsQ0FBc0J0QyxHQUF0QixFQUEyQjtBQUNoQyxTQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUMsd0JBQVkwQyxhQURiO0FBRUx2QyxJQUFBQSxHQUFHLEVBQUhBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3dDLFdBQVQsQ0FBcUJ4QyxHQUFyQixFQUEwQjtBQUMvQixTQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUMsd0JBQVk0QyxZQURiO0FBRUx6QyxJQUFBQSxHQUFHLEVBQUhBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBUzBDLGNBQVQsQ0FBd0IxQyxHQUF4QixFQUE2QjtBQUNsQyxTQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUMsd0JBQVk4QyxlQURiO0FBRUwzQyxJQUFBQSxHQUFHLEVBQUhBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBUzRDLGFBQVQsQ0FBdUJiLE1BQXZCLEVBQStCO0FBQ3BDLFNBQU87QUFDTG5DLElBQUFBLElBQUksRUFBRUMsd0JBQVlnRCxjQURiO0FBRUxkLElBQUFBLE1BQU0sRUFBTkE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTZSxnQkFBVCxDQUEwQmYsTUFBMUIsRUFBa0M7QUFDdkMsU0FBTztBQUNMbkMsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWWtELGtCQURiO0FBRUxoQixJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNpQixlQUFULENBQXlCakIsTUFBekIsRUFBaUNrQixNQUFqQyxFQUF5Q2pDLElBQXpDLEVBQStDO0FBQ3BELFNBQU87QUFDTHBCLElBQUFBLElBQUksRUFBRUMsd0JBQVlxRCxpQkFEYjtBQUVMbkIsSUFBQUEsTUFBTSxFQUFOQSxNQUZLO0FBR0xrQixJQUFBQSxNQUFNLEVBQU5BLE1BSEs7QUFJTGpDLElBQUFBLElBQUksRUFBSkE7QUFKSyxHQUFQO0FBTUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTbUMsY0FBVCxDQUF3QnBCLE1BQXhCLEVBQWdDa0IsTUFBaEMsRUFBd0M7QUFDN0MsU0FBTztBQUNMckQsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXVELGdCQURiO0FBRUxyQixJQUFBQSxNQUFNLEVBQU5BLE1BRks7QUFHTGtCLElBQUFBLE1BQU0sRUFBTkE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxlQUFULENBQXlCdEIsTUFBekIsRUFBaUNrQixNQUFqQyxFQUF5QztBQUM5QyxTQUFPO0FBQ0xyRCxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZeUQsaUJBRGI7QUFFTHZCLElBQUFBLE1BQU0sRUFBTkEsTUFGSztBQUdMa0IsSUFBQUEsTUFBTSxFQUFOQTtBQUhLLEdBQVA7QUFLRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTTSxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsT0FBakMsRUFBMEN0QyxNQUExQyxFQUFrRDtBQUN2RCxTQUFPO0FBQ0x2QixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZNkQsZUFEYjtBQUVMRixJQUFBQSxRQUFRLEVBQVJBLFFBRks7QUFHTEMsSUFBQUEsT0FBTyxFQUFQQSxPQUhLO0FBSUx0QyxJQUFBQSxNQUFNLEVBQU5BO0FBSkssR0FBUDtBQU1EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTd0MsYUFBVCxDQUF1QjVCLE1BQXZCLEVBQStCNkIsS0FBL0IsRUFBc0M7QUFDM0MsU0FBTztBQUNMaEUsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWWdFLGNBRGI7QUFFTDlCLElBQUFBLE1BQU0sRUFBTkEsTUFGSztBQUdMNkIsSUFBQUEsS0FBSyxFQUFMQTtBQUhLLEdBQVA7QUFLRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLHFCQUFULENBQStCOUQsR0FBL0IsRUFBb0M7QUFDekMsU0FBTztBQUNMSixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZa0UsdUJBRGI7QUFFTC9ELElBQUFBLEdBQUcsRUFBSEE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNnRSwwQkFBVCxDQUFvQ2hFLEdBQXBDLEVBQXlDaUUsS0FBekMsRUFBZ0Q7QUFDckQsU0FBTztBQUNMckUsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXFFLDZCQURiO0FBRUxsRSxJQUFBQSxHQUFHLEVBQUhBLEdBRks7QUFHTGlFLElBQUFBLEtBQUssRUFBTEE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxxQkFBVCxDQUErQmpFLEtBQS9CLEVBQXNDO0FBQzNDLFNBQU87QUFDTE4sSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXVFLHdCQURiO0FBRUxsRSxJQUFBQSxLQUFLLEVBQUxBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU21FLHlCQUFULENBQW1DSixLQUFuQyxFQUEwQztBQUMvQyxTQUFPO0FBQ0xyRSxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZeUUsNEJBRGI7QUFFTEwsSUFBQUEsS0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTTSxvQkFBVCxHQUFnQztBQUNyQyxTQUFPO0FBQ0wzRSxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZMkU7QUFEYixHQUFQO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTQyxhQUFULENBQXVCekUsR0FBdkIsRUFBNEI7QUFDakMsU0FBTztBQUNMSixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZNkUsY0FEYjtBQUVMMUUsSUFBQUEsR0FBRyxFQUFIQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTMkUsbUJBQVQsQ0FBNkIzRSxHQUE3QixFQUFrQztBQUN2QyxTQUFPO0FBQ0xKLElBQUFBLElBQUksRUFBRUMsd0JBQVkrRSxxQkFEYjtBQUVMNUUsSUFBQUEsR0FBRyxFQUFIQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVM2RSxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xsRixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZa0YsV0FEYjtBQUVMRCxJQUFBQSxJQUFJLEVBQUpBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsWUFBVCxDQUFzQkYsSUFBdEIsRUFBNEI7QUFDakMsU0FBTztBQUNMbEYsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWW9GLFdBRGI7QUFFTEgsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxVQUFULEdBQXNCO0FBQzNCLFNBQU87QUFDTHRGLElBQUFBLElBQUksRUFBRUMsd0JBQVlzRjtBQURiLEdBQVA7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQy9CLFNBQU87QUFDTHpGLElBQUFBLElBQUksRUFBRUMsd0JBQVl5RixVQURiO0FBRUxELElBQUFBLEdBQUcsRUFBSEE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLGlCQUFULENBQTJCQyxRQUEzQixFQUFxQ0MsT0FBckMsRUFBOEM7QUFDbkQsU0FBTztBQUNMN0YsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWTZGLG9CQURiO0FBRUxGLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxPQUFPLEVBQVBBO0FBSEssR0FBUDtBQUtEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLGFBQVQsQ0FBdUIzRixHQUF2QixFQUE0QjRGLE9BQTVCLEVBQXFDdEUsVUFBckMsRUFBaUQ7QUFDdEQsU0FBTztBQUNMMUIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWWdHLGVBRGI7QUFFTDdGLElBQUFBLEdBQUcsRUFBSEEsR0FGSztBQUdMNEYsSUFBQUEsT0FBTyxFQUFQQSxPQUhLO0FBSUx0RSxJQUFBQSxVQUFVLEVBQVZBO0FBSkssR0FBUDtBQU1EO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3dFLFVBQVQsQ0FBb0JoQixJQUFwQixFQUEwQjtBQUMvQixTQUFPO0FBQ0xsRixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZa0csWUFEYjtBQUVMakIsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNrQixTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsUUFBMUIsRUFBb0M7QUFDekMsU0FBTztBQUNMdEcsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXNHLFVBRGI7QUFFTEYsSUFBQUEsS0FBSyxFQUFMQSxLQUZLO0FBR0xDLElBQUFBLFFBQVEsRUFBUkE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsWUFBVCxHQUF3QjtBQUM3QixTQUFPO0FBQ0x4RyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZd0c7QUFEYixHQUFQO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDO0FBQ3ZDLFNBQU87QUFDTDNHLElBQUFBLElBQUksRUFBRUMsd0JBQVkyRyxrQkFEYjtBQUVMRCxJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNFLG1CQUFULFFBQW9EO0FBQUEsTUFBdEJDLFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLFNBQVksU0FBWkEsU0FBWTtBQUN6RCxTQUFPO0FBQ0wvRyxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZK0csc0JBRGI7QUFFTEYsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTRSxZQUFULENBQXNCSCxRQUF0QixFQUFnQ0ksS0FBaEMsRUFBdUM7QUFDNUMsU0FBTztBQUNMbEgsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWWtILGNBRGI7QUFFTEwsSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xJLElBQUFBLEtBQUssRUFBTEE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDcEMsU0FBTztBQUNMckgsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXFILFlBRGI7QUFFTEQsSUFBQUEsUUFBUSxFQUFSQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0UscUJBQVQsQ0FBK0JDLEtBQS9CLEVBQXNDQyxPQUF0QyxFQUErQztBQUNwRCxTQUFPO0FBQ0x6SCxJQUFBQSxJQUFJLEVBQUVDLHdCQUFZeUgsd0JBRGI7QUFFTEYsSUFBQUEsS0FBSyxFQUFMQSxLQUZLO0FBR0xDLElBQUFBLE9BQU8sRUFBUEE7QUFISyxHQUFQO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0Usa0JBQVQsQ0FBNEJGLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTHpILElBQUFBLElBQUksRUFBRUMsd0JBQVkySCxvQkFEYjtBQUVMSCxJQUFBQSxPQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLGFBQVQsQ0FBdUJKLE9BQXZCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTHpILElBQUFBLElBQUksRUFBRUMsd0JBQVk2SCxjQURiO0FBRUxMLElBQUFBLE9BQU8sRUFBUEE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNNLGFBQVQsQ0FBdUIzRyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPO0FBQ0xwQixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZK0gsZUFEYjtBQUVMNUcsSUFBQUEsSUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVM2RyxjQUFULENBQXdCOUYsTUFBeEIsRUFBZ0M7QUFDckMsU0FBTztBQUNMbkMsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWWlJLGdCQURiO0FBRUwvRixJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTZ0csc0JBQVQsR0FBa0M7QUFDdkMsU0FBTztBQUNMbkksSUFBQUEsSUFBSSxFQUFFQyx3QkFBWW1JO0FBRGIsR0FBUDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNDLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQ3JDLFNBQU87QUFDTHRJLElBQUFBLElBQUksRUFBRUMsd0JBQVlzSSxlQURiO0FBRUxELElBQUFBLE9BQU8sRUFBUEE7QUFGSyxHQUFQO0FBSUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0Usa0JBQVQsQ0FBNEJGLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU87QUFDTHRJLElBQUFBLElBQUksRUFBRUMsd0JBQVl3SSxvQkFEYjtBQUVMSCxJQUFBQSxPQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLDJCQUFULENBQXFDbkgsTUFBckMsRUFBNkM7QUFDbEQsU0FBTztBQUNMdkIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWTBJLCtCQURiO0FBRUxwSCxJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU3FILDRCQUFULENBQXNDeEksR0FBdEMsRUFBMkNtQixNQUEzQyxFQUFtRDtBQUN4RCxTQUFPO0FBQ0x2QixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZNEksZ0NBRGI7QUFFTHpJLElBQUFBLEdBQUcsRUFBSEEsR0FGSztBQUdMbUIsSUFBQUEsTUFBTSxFQUFOQTtBQUhLLEdBQVA7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQSxJQUFNdUgsZUFBZSxHQUFHLElBQXhCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyB2aXMtc3RhdGUtcmVkdWNlclxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBiYXNlIGNvbmZpZzogZGF0YUlkLCBsYWJlbCwgY29sdW1uLCBpc1Zpc2libGVcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdDb25maWcgLSBuZXcgY29uZmlnIHRvIGJlIG1lcmdlZCB3aXRoIG9sZCBjb25maWdcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllckNvbmZpZ0NoYW5nZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0ZXh0IGxhYmVsXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gaWR4IC1gaWR4YCBvZiB0ZXh0IGxhYmVsIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIHRleHQgbGFiZWwsIGUsZywgYGFuY2hvcmAsIGBhbGlnbm1lbnRgLCBgY29sb3JgLCBgc2l6ZWAsIGBmaWVsZGBcbiAqIEBwYXJhbSB2YWx1ZSAtIG5ldyB2YWx1ZVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxheWVyVGV4dExhYmVsQ2hhbmdlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUZXh0TGFiZWxDaGFuZ2Uob2xkTGF5ZXIsIGlkeCwgcHJvcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9URVhUX0xBQkVMX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBpZHgsXG4gICAgcHJvcCxcbiAgICB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdUeXBlIC0gbmV3IHR5cGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclR5cGVDaGFuZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclR5cGVDaGFuZ2Uob2xkTGF5ZXIsIG5ld1R5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdUeXBlXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHZpc3VhbCBjaGFubmVsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gbmV3Q29uZmlnIC0gbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xuICogQHBhcmFtIGNoYW5uZWwgLSBjaGFubmVsIHRvIGJlIHVwZGF0ZWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2Uob2xkTGF5ZXIsIG5ld0NvbmZpZywgY2hhbm5lbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWcsXG4gICAgY2hhbm5lbFxuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBgdmlzQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIG5ld1Zpc0NvbmZpZyAtIG5ldyB2aXNDb25maWcgYXMgYSBrZXkgdmFsdWUgbWFwOiBlLmcuIGB7b3BhY2l0eTogMC44fWBcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllclZpc0NvbmZpZ0NoYW5nZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdWaXNDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNfQ09ORklHX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdWaXNDb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGNvbG9yIHBhbGV0dGUgdWkgZm9yIGxheWVyIGNvbG9yXG4gKiBAbWVtYmVyT2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gcHJvcCAtIHdoaWNoIGNvbG9yIHByb3BcbiAqIEBwYXJhbSBuZXdDb25maWcgLSB0byBiZSBtZXJnZWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sYXllckNvbG9yVUlDaGFuZ2V9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbG9yVUlDaGFuZ2Uob2xkTGF5ZXIsIHByb3AsIG5ld0NvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NPTE9SX1VJX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBwcm9wLFxuICAgIG5ld0NvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBibGVuZGluZyBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gbW9kZSBvbmUgb2YgYGFkZGl0aXZlYCwgYG5vcm1hbGAgYW5kIGBzdWJ0cmFjdGl2ZWBcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS51cGRhdGVMYXllckJsZW5kaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGF5ZXJCbGVuZGluZyhtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0JMRU5ESU5HLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGNvbmZpZyAtIG5ldyBjb25maWcgYXMga2V5IHZhbHVlIG1hcDogYHt0b29sdGlwOiB7ZW5hYmxlZDogdHJ1ZX19YFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSxcbiAgICBjb25maWdcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IC1gaWR4YCBvZiBmaWx0ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHByb3AgLSBgcHJvcGAgb2YgZmlsdGVyLCBlLGcsIGBkYXRhSWRgLCBgbmFtZWAsIGB2YWx1ZWBcbiAqIEBwYXJhbSB2YWx1ZSAtIG5ldyB2YWx1ZVxuICogQHBhcmFtIHZhbHVlSW5kZXggLSBkYXRhSWQgaW5kZXhcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRGaWx0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXIoaWR4LCBwcm9wLCB2YWx1ZSwgdmFsdWVJbmRleCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVIsXG4gICAgaWR4LFxuICAgIHByb3AsXG4gICAgdmFsdWUsXG4gICAgdmFsdWVJbmRleFxuICB9O1xufVxuXG4vKipcbiAqIFNhbWUgYXMgVXBkYXRlIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIGZpbHRlciwgZSxnLCBgZGF0YUlkYCwgYG5hbWVgLCBgdmFsdWVgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZUluZGV4IC0gZGF0YUlkIGluZGV4XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0RmlsdGVyQW5pbWF0aW9uVGltZX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWUoaWR4LCBwcm9wLCB2YWx1ZSwgdmFsdWVJbmRleCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfQU5JTUFUSU9OX1RJTUUsXG4gICAgaWR4LFxuICAgIHByb3AsXG4gICAgdmFsdWUsXG4gICAgdmFsdWVJbmRleFxuICB9O1xufVxuXG4vKipcbiAqIFNhbWUgYXMgVXBkYXRlIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3d9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3coe2lkLCBhbmltYXRpb25XaW5kb3d9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XLFxuICAgIGlkLFxuICAgIGFuaW1hdGlvbldpbmRvd1xuICB9O1xufVxuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIC0gZGF0YXNldCBgaWRgIHRoaXMgbmV3IGZpbHRlciBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5hZGRGaWx0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRGaWx0ZXIoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0ZJTFRFUixcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBjb25maWcgLSBuZXcgbGF5ZXIgY29uZmlnXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuYWRkTGF5ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYXllcihjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVIsXG4gICAgY29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogUmVvcmRlciBsYXllciwgb3JkZXIgaXMgYW4gYXJyYXkgb2YgbGF5ZXIgaW5kZXhlcywgaW5kZXggMCB3aWxsIGJlIHRoZSBvbmUgYXQgdGhlIGJvdHRvbVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9yZGVyIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXNcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW9yZGVyTGF5ZXJ9XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGJyaW5nIGBsYXllcnNbMV1gIGJlbG93IGBsYXllcnNbMF1gLCB0aGUgc2VxdWVuY2UgbGF5ZXJzIHdpbGwgYmUgcmVuZGVyZWQgaXMgYDFgLCBgMGAsIGAyYCwgYDNgLlxuICogLy8gYDFgIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSwgYDNgIHdpbGwgYmUgYXQgdGhlIHRvcC5cbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVvcmRlckxheWVyKFsxLCAwLCAyLCAzXSkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckxheWVyKG9yZGVyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVPUkRFUl9MQVlFUixcbiAgICBvcmRlclxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZpbHRlciBmcm9tIGB2aXNTdGF0ZS5maWx0ZXJzYCwgb25jZSBhIGZpbHRlciBpcyByZW1vdmVkLCBkYXRhIHdpbGwgYmUgcmUtZmlsdGVyZWQgYW5kIGxheWVyIHdpbGwgYmUgdXBkYXRlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCBpZHggb2YgZmlsdGVyIHRvIGJlIHJlbW92ZWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW1vdmVGaWx0ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCBpZHggb2YgbGF5ZXIgdG8gYmUgcmVtb3ZlZFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnJlbW92ZUxheWVyfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIER1cGxpY2F0ZSBhIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IGlkeCBvZiBsYXllciB0byBiZSBkdXBsaWNhdGVkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuZHVwbGljYXRlTGF5ZXJ9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVMYXllcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5EVVBMSUNBVEVfTEFZRVIsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGF0YXNldCBhbmQgYWxsIGxheWVycywgZmlsdGVycywgdG9vbHRpcCBjb25maWdzIHRoYXQgYmFzZWQgb24gaXRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWQgZGF0YXNldCBpZFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnJlbW92ZURhdGFzZXR9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXRhc2V0KGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VULFxuICAgIGRhdGFJZFxuICB9O1xufVxuXG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIGRhdGFzZXQgaWQgdG8gc2hvdyBpbiB0YWJsZVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNob3dEYXRhc2V0VGFibGV9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGF0YXNldFRhYmxlKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNIT1dfREFUQVNFVF9UQUJMRSxcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuLyoqXG4gKiBTb3J0IGRhdGFzZXQgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZFxuICogQHBhcmFtIGNvbHVtblxuICogQHBhcmFtIG1vZGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zb3J0VGFibGVDb2x1bW59XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0VGFibGVDb2x1bW4oZGF0YUlkLCBjb2x1bW4sIG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TT1JUX1RBQkxFX0NPTFVNTixcbiAgICBkYXRhSWQsXG4gICAgY29sdW1uLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBQaW4gZGF0YXNldCBjb2x1bW4sIGZvciB0YWJsZSBkaXNwbGF5XG4gKiBAcGFyYW0gZGF0YUlkXG4gKiBAcGFyYW0gY29sdW1uXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykucGluVGFibGVDb2x1bW59XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaW5UYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlBJTl9UQUJMRV9DT0xVTU4sXG4gICAgZGF0YUlkLFxuICAgIGNvbHVtblxuICB9O1xufVxuXG4vKipcbiAqIENvcHkgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxuICogQHBhcmFtIGRhdGFJZFxuICogQHBhcmFtIGNvbHVtblxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmNvcHlUYWJsZUNvbHVtbn1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkNPUFlfVEFCTEVfQ09MVU1OLFxuICAgIGRhdGFJZCxcbiAgICBjb2x1bW5cbiAgfTtcbn1cblxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvIC1pbmZvIG9mIGEgZGF0YXNldFxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEgLSAqKipyZXF1aXJlZCoqIFRoZSBkYXRhIG9iamVjdCwgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIDIgcHJvcGVydGllcyBgZmllbGRzYCBhbmQgYHJvd3NgXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXG4gKiBFYWNoIGRhdGFzZXQgb2JqZWN0IG5lZWRzIHRvIGhhdmUgYGluZm9gIGFuZCBgZGF0YWAgcHJvcGVydHkuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXG4gKiBwbGFjZSB0aGUgbWFwIHZpZXcgd2l0aGluIHRoZSBkYXRhIHBvaW50cyBib3VuZGFyaWVzXG4gKiBAcGFyYW0gb3B0aW9ucy5yZWFkT25seSBgZGVmYXVsdDogZmFsc2VgIGlmIGByZWFkT25seWAgaXMgc2V0IHRvIGB0cnVlYFxuICogdGhlIGxlZnQgc2V0dGluZyBwYW5lbCB3aWxsIGJlIGhpZGRlblxuICogQHBhcmFtIGNvbmZpZyB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGZ1bGwga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb24ge21hcFN0YXRlLCBtYXBTdHlsZSwgdmlzU3RhdGV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudXBkYXRlVmlzRGF0YX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGEoZGF0YXNldHMsIG9wdGlvbnMsIGNvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQSxcbiAgICBkYXRhc2V0cyxcbiAgICBvcHRpb25zLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFJlbmFtZSBhbiBleGlzdGluZyBkYXRhc2V0IGluIGB2aXNTdGF0ZWBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWQgLSAqKipyZXF1aXJlZCoqIElkIG9mIHRoZSBkYXRhc2V0IHRvIHVwZGF0ZVxuICogQHBhcmFtIGxhYmVsIC0gKioqcmVxdWlyZWQqKiBOZXcgbmFtZSBmb3IgdGhlIGRhdGFzZXRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5yZW5hbWVEYXRhc2V0fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuYW1lRGF0YXNldChkYXRhSWQsIGxhYmVsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVOQU1FX0RBVEFTRVQsXG4gICAgZGF0YUlkLFxuICAgIGxhYmVsXG4gIH07XG59XG5cbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IG9mIGZpbHRlclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS50b2dnbGVGaWx0ZXJBbmltYXRpb259XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZpbHRlckFuaW1hdGlvbihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTixcbiAgICBpZHhcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtICBgaWR4YCBvZiBmaWx0ZXJcbiAqIEBwYXJhbSBzcGVlZCAtIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS51cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZH1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWQoaWR4LCBzcGVlZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVELFxuICAgIGlkeCxcbiAgICBzcGVlZFxuICB9O1xufVxuXG4vKipcbiAqIFJlc2V0IGFuaW1hdGlvblxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHZhbHVlIC0gIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHNsaWRlclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRMYXllckFuaW1hdGlvblRpbWV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExheWVyQW5pbWF0aW9uVGltZSh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9MQVlFUl9BTklNQVRJT05fVElNRSxcbiAgICB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIHVwZGF0ZSB0cmlwIGxheWVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHNwZWVkIC0gYHNwZWVkYCB0byBjaGFuZ2UgaXQgdG8uIGBzcGVlZGAgaXMgYSBtdWx0aXBsaWVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWR9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWQoc3BlZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVELFxuICAgIHNwZWVkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXllckFuaW1hdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfQU5JTUFUSU9OXG4gIH07XG59XG5cbi8qKlxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtIGluZGV4IG9mIGZpbHRlciB0byBlbmxhcmdlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmVubGFyZ2VGaWx0ZXJ9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVubGFyZ2VGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogU2hvdy9oaWRlIGZpbHRlciBmZWF0dXJlIG9uIG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtIGluZGV4IG9mIGZpbHRlciBmZWF0dXJlIHRvIHNob3cvaGlkZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS50b2dnbGVGaWx0ZXJGZWF0dXJlfVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZpbHRlckZlYXR1cmUoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9GRUFUVVJFLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGluZm8gLSBPYmplY3QgaG92ZXJlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbkxheWVySG92ZXJ9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJIb3ZlcihpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXG4gICAgaW5mb1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGluZm8gLSBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbkxheWVyQ2xpY2t9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJDbGljayhpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ0xJQ0ssXG4gICAgaW5mb1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5vbk1hcENsaWNrfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbk1hcENsaWNrKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLk1BUF9DTElDS1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbWFwIG1vdXNlIG1vdmVldmVudCwgcGF5bG9hZCB3b3VsZCBiZVxuICogUmVhY3QtbWFwLWdsIFBvaW50ZXJFdmVudFxuICogaHR0cHM6Ly91YmVyLmdpdGh1Yi5pby9yZWFjdC1tYXAtZ2wvIy9kb2N1bWVudGF0aW9uL2FwaS1yZWZlcmVuY2UvcG9pbnRlci1ldmVudFxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBldnQgLSBQb2ludGVyRXZlbnRcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykub25Nb3VzZU1vdmV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2dCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLk1PVVNFX01PVkUsXG4gICAgZXZ0XG4gIH07XG59XG5cbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG1hcEluZGV4IC0gaW5kZXggb2YgdGhlIHNwbGl0IG1hcFxuICogQHBhcmFtIGxheWVySWQgLSBpZCBvZiB0aGUgbGF5ZXJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykudG9nZ2xlTGF5ZXJGb3JNYXB9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVAsXG4gICAgbWFwSW5kZXgsXG4gICAgbGF5ZXJJZFxuICB9O1xufVxuXG4vKipcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeFxuICogQHBhcmFtIG5ld1Byb3Aga2V5IHZhbHVlIG1hcHBpbmcgb2YgbmV3IHByb3AgYHt5QXhpczogJ2hpc3RvZ3JhbSd9YFxuICogQHBhcmFtIHZhbHVlSW5kZXggZGF0YUlkIGluZGV4XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEZpbHRlclBsb3R9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclBsb3QoaWR4LCBuZXdQcm9wLCB2YWx1ZUluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULFxuICAgIGlkeCxcbiAgICBuZXdQcm9wLFxuICAgIHZhbHVlSW5kZXhcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpbmZvXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldE1hcEluZm99XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldE1hcEluZm8oaW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9NQVBfSU5GTyxcbiAgICBpbmZvXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZmlsZXMgYXJyYXkgb2YgZmlsZWJsb2JcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubG9hZEZpbGVzfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXMoZmlsZXMsIG9uRmluaXNoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFUyxcbiAgICBmaWxlcyxcbiAgICBvbkZpbmlzaFxuICB9O1xufVxuXG4vKipcbiAqIENhbGxlZCB3aXRoIG5leHQgZmlsZSB0byBsb2FkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLmxvYWROZXh0RmlsZX1cbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5leHRGaWxlKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfTkVYVF9GSUxFXG4gIH07XG59XG5cbi8qKlxuICogY2FsbGVkIHdoZW4gYWxsIGZpbGVzIGFyZSBwcm9jZXNzZWQgYW5kIGxvYWRlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHJlc3VsdFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZXNTdWNjZXNzfVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNTdWNjZXNzKHJlc3VsdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVNfU1VDQ0VTUyxcbiAgICByZXN1bHRcbiAgfTtcbn1cblxuLyoqXG4gKiBjYWxsZWQgd2hlbiBzdWNjZXNzZnVsbHkgbG9hZGVkIG9uZSBmaWxlLCByZWFkeSB0byBtb3ZlIG9uIHRvIHRoZSBuZXh0IG9uZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHJlc3VsdFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5sb2FkRmlsZVN0ZXBTdWNjZXNzfVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN0ZXBTdWNjZXNzKHtmaWxlTmFtZSwgZmlsZUNhY2hlfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRV9TVEVQX1NVQ0NFU1MsXG4gICAgZmlsZU5hbWUsXG4gICAgZmlsZUNhY2hlXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSAgZXJyb3JcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykubG9hZEZpbGVzRXJyfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZmlsZU5hbWUsIGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlIsXG4gICAgZmlsZU5hbWUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuLyoqXG4gKiBTdG9yZSBmZWF0dXJlcyB0byBzdGF0ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGZlYXR1cmVzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnNldEZlYXR1cmVzfVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlcyhmZWF0dXJlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GRUFUVVJFUyxcbiAgICBmZWF0dXJlc1xuICB9O1xufVxuXG4vKipcbiAqIEl0IHdpbGwgYXBwbHkgdGhlIHByb3ZpZGUgZmVhdHVyZSBhcyBmaWx0ZXIgdG8gdGhlIGdpdmVuIGxheWVyLlxuICogSWYgdGhlIGdpdmVuIGZlYXR1cmUgaXMgYWxyZWFkeSBhcHBsaWVkIGFzIGZpbHRlciB0byB0aGUgbGF5ZXIsIGl0IHdpbGwgcmVtb3ZlIHRoZSBsYXllciBmcm9tIHRoZSBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBsYXllclxuICogQHBhcmFtIGZlYXR1cmVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0UG9seWdvbkZpbHRlckxheWVyfVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb2x5Z29uRmlsdGVyTGF5ZXIobGF5ZXIsIGZlYXR1cmUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfUE9MWUdPTl9GSUxURVJfTEFZRVIsXG4gICAgbGF5ZXIsXG4gICAgZmVhdHVyZVxuICB9O1xufVxuXG4vKipcbiAqIFNldCB0aGUgY3VycmVudCBmZWF0dXJlIHRvIGJlIGVkaXRlZC9kZWxldGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRTZWxlY3RlZEZlYXR1cmV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNlbGVjdGVkRmVhdHVyZShmZWF0dXJlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkUsXG4gICAgZmVhdHVyZVxuICB9O1xufVxuXG4vKipcbiAqIERlbGV0ZSB0aGUgZ2l2ZW4gZmVhdHVyZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGZlYXR1cmVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuZGVsZXRlRmVhdHVyZX1cbiAqIEByZXR1cm5zIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmVhdHVyZShmZWF0dXJlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREVMRVRFX0ZFQVRVUkUsXG4gICAgZmVhdHVyZVxuICB9O1xufVxuXG4vKiogU2V0IHRoZSBtYXAgbW9kZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG1vZGUgb25lIG9mIEVESVRPUl9NT0RFU1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRFZGl0b3JNb2RlfVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHtzZXRNYXBNb2RlfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAna2VwbGVyLmdsL2NvbnN0YW50cyc7XG4gKlxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRNYXBNb2RlKEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVkaXRvck1vZGUobW9kZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9FRElUT1JfTU9ERSxcbiAgICBtb2RlXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBDUFUgZmlsdGVyIG9mIHNlbGVjdGVkIGRhdGFzZXRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWQgLSBzaW5nbGUgZGF0YUlkIG9yIGFuIGFycmF5IG9mIGRhdGFJZHNcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuYXBwbHlDUFVGaWx0ZXJ9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q1BVRmlsdGVyKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVIsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICogVG9nZ2xlIGVkaXRvciBsYXllciB2aXNpYmlsaXR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi92aXMtc3RhdGUtYWN0aW9ucycpLnRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XG4gKiBAcmV0dXJuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFlcbiAgfTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHRoZSBuZXh0IGZpbGUgYmF0Y2hcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBwYXlsb2FkIC0gYmF0Y2ggcGF5bG9hZFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5uZXh0RmlsZUJhdGNofVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRGaWxlQmF0Y2gocGF5bG9hZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLk5FWFRfRklMRV9CQVRDSCxcbiAgICBwYXlsb2FkXG4gIH07XG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgZmlsZSBjb250ZW50XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcGF5bG9hZCAtIHRoZSBmaWxlIGNvbnRlbnRcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykucHJvY2Vzc0ZpbGVDb250ZW50fVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGaWxlQ29udGVudChwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQ0VTU19GSUxFX0NPTlRFTlQsXG4gICAgcGF5bG9hZFxuICB9O1xufVxuXG4vKipcbiAqIFNldCBsYXllciBhbmltYXRpb24gdGltZSBmb3JtYXQgYW5kIHRpbWV6b25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gY29uZmlnIC0ge3RpbWVGb3JtYXQ6IHN0cmluZywgdGltZXpvbmU6IHN0cmluZ31cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL3Zpcy1zdGF0ZS1hY3Rpb25zJykuc2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnfVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZyhjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfTEFZRVJfQU5JTUFUSU9OX1RJTUVfQ09ORklHLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFNldCBGaWx0ZXIgYW5pbWF0aW9uIHRpbWUgZm9ybWF0IGFuZCB0aW1lem9uZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeFxuICogQHBhcmFtIGNvbmZpZ1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vdmlzLXN0YXRlLWFjdGlvbnMnKS5zZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnfVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWcoaWR4LCBjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX0FOSU1BVElPTl9USU1FX0NPTkZJRyxcbiAgICBpZHgsXG4gICAgY29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXG4gKi9cbi8qKlxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSBgdmlzU3RhdGVgIHJlZHVjZXIuXG4gKiBUaGV5IG1hbmFnZSBob3cgZGF0YSBpcyBwcm9jZXNzZWQsIGZpbHRlcmVkIGFuZCBkaXNwbGF5ZWQgb24gdGhlIG1hcCBieSBvcGVyYXRlcyBvbiBsYXllcnMsXG4gKiBmaWx0ZXJzIGFuZCBpbnRlcmFjdGlvbiBzZXR0aW5ncy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCB2aXNTdGF0ZUFjdGlvbnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19