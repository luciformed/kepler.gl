"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateReducerFactory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var _reduxActions = require("redux-actions");

var visStateUpdaters = _interopRequireWildcard(require("./vis-state-updaters"));

var _actionHandler;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_FILTER, visStateUpdaters.addFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_LAYER, visStateUpdaters.addLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].DUPLICATE_LAYER, visStateUpdaters.duplicateLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ENLARGE_FILTER, visStateUpdaters.enlargeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].INTERACTION_CONFIG_CHANGE, visStateUpdaters.interactionConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CLICK, visStateUpdaters.layerClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CONFIG_CHANGE, visStateUpdaters.layerConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_HOVER, visStateUpdaters.layerHoverUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_TYPE_CHANGE, visStateUpdaters.layerTypeChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE, visStateUpdaters.layerVisConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE, visStateUpdaters.layerTextLabelChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE, visStateUpdaters.layerVisualChannelChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_COLOR_UI_CHANGE, visStateUpdaters.layerColorUIChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_LAYER_ANIMATION, visStateUpdaters.toggleLayerAnimationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES, visStateUpdaters.loadFilesUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES_ERR, visStateUpdaters.loadFilesErrUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_NEXT_FILE, visStateUpdaters.loadNextFileUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILE_STEP_SUCCESS, visStateUpdaters.loadFileStepSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].MAP_CLICK, visStateUpdaters.mapClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].MOUSE_MOVE, visStateUpdaters.mouseMoveUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RECEIVE_MAP_CONFIG, visStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_DATASET, visStateUpdaters.removeDatasetUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_FILTER, visStateUpdaters.removeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_LAYER, visStateUpdaters.removeLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REORDER_LAYER, visStateUpdaters.reorderLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RESET_MAP_CONFIG, visStateUpdaters.resetMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER, visStateUpdaters.setFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_ANIMATION_TIME, visStateUpdaters.setFilterAnimationTimeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_ANIMATION_TIME_CONFIG, visStateUpdaters.setFilterAnimationTimeConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_ANIMATION_WINDOW, visStateUpdaters.setFilterAnimationWindowUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_PLOT, visStateUpdaters.setFilterPlotUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_MAP_INFO, visStateUpdaters.setMapInfoUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SHOW_DATASET_TABLE, visStateUpdaters.showDatasetTableUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_FILTER_ANIMATION, visStateUpdaters.toggleFilterAnimationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED, visStateUpdaters.updateFilterAnimationSpeedUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_LAYER_ANIMATION_TIME, visStateUpdaters.setLayerAnimationTimeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED, visStateUpdaters.updateLayerAnimationSpeedUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_LAYER_FOR_MAP, visStateUpdaters.toggleLayerForMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SPLIT_MAP, visStateUpdaters.toggleSplitMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_LAYER_BLENDING, visStateUpdaters.updateLayerBlendingUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_VIS_DATA, visStateUpdaters.updateVisDataUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RENAME_DATASET, visStateUpdaters.renameDatasetUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FEATURES, visStateUpdaters.setFeaturesUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].DELETE_FEATURE, visStateUpdaters.deleteFeatureUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_POLYGON_FILTER_LAYER, visStateUpdaters.setPolygonFilterLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_SELECTED_FEATURE, visStateUpdaters.setSelectedFeatureUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_EDITOR_MODE, visStateUpdaters.setEditorModeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY, visStateUpdaters.toggleEditorVisibilityUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_FILTER_FEATURE, visStateUpdaters.toggleFilterFeatureUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].APPLY_CPU_FILTER, visStateUpdaters.applyCPUFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SORT_TABLE_COLUMN, visStateUpdaters.sortTableColumnUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].PIN_TABLE_COLUMN, visStateUpdaters.pinTableColumnUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].COPY_TABLE_COLUMN, visStateUpdaters.copyTableColumnUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].NEXT_FILE_BATCH, visStateUpdaters.nextFileBatchUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].PROCESS_FILE_CONTENT, visStateUpdaters.processFileContentUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_LAYER_ANIMATION_TIME_CONFIG, visStateUpdaters.setLayerAnimationTimeConfigUpdater), _actionHandler); // construct vis-state reducer

var visStateReducerFactory = function visStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (// @ts-ignore
    (0, _reduxActions.handleActions)(actionHandler, _objectSpread(_objectSpread(_objectSpread({}, visStateUpdaters.INITIAL_VIS_STATE), initialState), {}, {
      initialState: initialState
    }))
  );
};

exports.visStateReducerFactory = visStateReducerFactory;

var _default = visStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiQUREX0ZJTFRFUiIsInZpc1N0YXRlVXBkYXRlcnMiLCJhZGRGaWx0ZXJVcGRhdGVyIiwiQUREX0xBWUVSIiwiYWRkTGF5ZXJVcGRhdGVyIiwiRFVQTElDQVRFX0xBWUVSIiwiZHVwbGljYXRlTGF5ZXJVcGRhdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJlbmxhcmdlRmlsdGVyVXBkYXRlciIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJMQVlFUl9DTElDSyIsImxheWVyQ2xpY2tVcGRhdGVyIiwiTEFZRVJfQ09ORklHX0NIQU5HRSIsImxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX0hPVkVSIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJMQVlFUl9WSVNfQ09ORklHX0NIQU5HRSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyIiwiTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFIiwibGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlciIsIkxBWUVSX0NPTE9SX1VJX0NIQU5HRSIsImxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXIiLCJUT0dHTEVfTEFZRVJfQU5JTUFUSU9OIiwidG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyIiwiTE9BRF9GSUxFUyIsImxvYWRGaWxlc1VwZGF0ZXIiLCJMT0FEX0ZJTEVTX0VSUiIsImxvYWRGaWxlc0VyclVwZGF0ZXIiLCJMT0FEX05FWFRfRklMRSIsImxvYWROZXh0RmlsZVVwZGF0ZXIiLCJMT0FEX0ZJTEVfU1RFUF9TVUNDRVNTIiwibG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXIiLCJNQVBfQ0xJQ0siLCJtYXBDbGlja1VwZGF0ZXIiLCJNT1VTRV9NT1ZFIiwibW91c2VNb3ZlVXBkYXRlciIsIlJFQ0VJVkVfTUFQX0NPTkZJRyIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiUkVNT1ZFX0RBVEFTRVQiLCJyZW1vdmVEYXRhc2V0VXBkYXRlciIsIlJFTU9WRV9GSUxURVIiLCJyZW1vdmVGaWx0ZXJVcGRhdGVyIiwiUkVNT1ZFX0xBWUVSIiwicmVtb3ZlTGF5ZXJVcGRhdGVyIiwiUkVPUkRFUl9MQVlFUiIsInJlb3JkZXJMYXllclVwZGF0ZXIiLCJSRVNFVF9NQVBfQ09ORklHIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiU0VUX0ZJTFRFUiIsInNldEZpbHRlclVwZGF0ZXIiLCJTRVRfRklMVEVSX0FOSU1BVElPTl9USU1FIiwic2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXIiLCJTRVRfRklMVEVSX0FOSU1BVElPTl9USU1FX0NPTkZJRyIsInNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyIiwiU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XIiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93VXBkYXRlciIsIlNFVF9GSUxURVJfUExPVCIsInNldEZpbHRlclBsb3RVcGRhdGVyIiwiU0VUX01BUF9JTkZPIiwic2V0TWFwSW5mb1VwZGF0ZXIiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJzaG93RGF0YXNldFRhYmxlVXBkYXRlciIsIlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciIsIlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVEIiwidXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyIiwiU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciIsIlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQiLCJ1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkVXBkYXRlciIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwidG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyIiwiVE9HR0xFX1NQTElUX01BUCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsIlVQREFURV9MQVlFUl9CTEVORElORyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwiVVBEQVRFX1ZJU19EQVRBIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJSRU5BTUVfREFUQVNFVCIsInJlbmFtZURhdGFzZXRVcGRhdGVyIiwiU0VUX0ZFQVRVUkVTIiwic2V0RmVhdHVyZXNVcGRhdGVyIiwiREVMRVRFX0ZFQVRVUkUiLCJkZWxldGVGZWF0dXJlVXBkYXRlciIsIlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUiIsInNldFBvbHlnb25GaWx0ZXJMYXllclVwZGF0ZXIiLCJTRVRfU0VMRUNURURfRkVBVFVSRSIsInNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIiLCJTRVRfRURJVE9SX01PREUiLCJzZXRFZGl0b3JNb2RlVXBkYXRlciIsIlRPR0dMRV9FRElUT1JfVklTSUJJTElUWSIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyIiwiVE9HR0xFX0ZJTFRFUl9GRUFUVVJFIiwidG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIiLCJBUFBMWV9DUFVfRklMVEVSIiwiYXBwbHlDUFVGaWx0ZXJVcGRhdGVyIiwiU09SVF9UQUJMRV9DT0xVTU4iLCJzb3J0VGFibGVDb2x1bW5VcGRhdGVyIiwiUElOX1RBQkxFX0NPTFVNTiIsInBpblRhYmxlQ29sdW1uVXBkYXRlciIsIkNPUFlfVEFCTEVfQ09MVU1OIiwiY29weVRhYmxlQ29sdW1uVXBkYXRlciIsIk5FWFRfRklMRV9CQVRDSCIsIm5leHRGaWxlQmF0Y2hVcGRhdGVyIiwiUFJPQ0VTU19GSUxFX0NPTlRFTlQiLCJwcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyIiwiU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FX0NPTkZJRyIsInNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZ1VwZGF0ZXIiLCJ2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5IiwiaW5pdGlhbFN0YXRlIiwiSU5JVElBTF9WSVNfU1RBVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSwwRUFDaEJDLHdCQUFZQyxVQURJLEVBQ1NDLGdCQUFnQixDQUFDQyxnQkFEMUIsb0RBR2hCSCx3QkFBWUksU0FISSxFQUdRRixnQkFBZ0IsQ0FBQ0csZUFIekIsb0RBS2hCTCx3QkFBWU0sZUFMSSxFQUtjSixnQkFBZ0IsQ0FBQ0sscUJBTC9CLG9EQU9oQlAsd0JBQVlRLGNBUEksRUFPYU4sZ0JBQWdCLENBQUNPLG9CQVA5QixvREFTaEJULHdCQUFZVSx5QkFUSSxFQVN3QlIsZ0JBQWdCLENBQUNTLDhCQVR6QyxvREFXaEJYLHdCQUFZWSxXQVhJLEVBV1VWLGdCQUFnQixDQUFDVyxpQkFYM0Isb0RBYWhCYix3QkFBWWMsbUJBYkksRUFha0JaLGdCQUFnQixDQUFDYSx3QkFibkMsb0RBZWhCZix3QkFBWWdCLFdBZkksRUFlVWQsZ0JBQWdCLENBQUNlLGlCQWYzQixvREFpQmhCakIsd0JBQVlrQixpQkFqQkksRUFpQmdCaEIsZ0JBQWdCLENBQUNpQixzQkFqQmpDLG9EQW1CaEJuQix3QkFBWW9CLHVCQW5CSSxFQW1Cc0JsQixnQkFBZ0IsQ0FBQ21CLDJCQW5CdkMsb0RBcUJoQnJCLHdCQUFZc0IsdUJBckJJLEVBcUJzQnBCLGdCQUFnQixDQUFDcUIsMkJBckJ2QyxvREF1QmhCdkIsd0JBQVl3QiwyQkF2QkksRUF1QjBCdEIsZ0JBQWdCLENBQUN1QiwrQkF2QjNDLG9EQXlCaEJ6Qix3QkFBWTBCLHFCQXpCSSxFQXlCb0J4QixnQkFBZ0IsQ0FBQ3lCLHlCQXpCckMsb0RBMkJoQjNCLHdCQUFZNEIsc0JBM0JJLEVBMkJxQjFCLGdCQUFnQixDQUFDMkIsMkJBM0J0Qyxv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b0JBOUYvQixvREFnR2hCL0Ysd0JBQVlnRyx3QkFoR0ksRUFnR3VCOUYsZ0JBQWdCLENBQUMrRiw2QkFoR3hDLG9EQWtHaEJqRyx3QkFBWWtHLHFCQWxHSSxFQWtHb0JoRyxnQkFBZ0IsQ0FBQ2lHLDBCQWxHckMsb0RBb0doQm5HLHdCQUFZb0csZ0JBcEdJLEVBb0dlbEcsZ0JBQWdCLENBQUNtRyxxQkFwR2hDLG9EQXNHaEJyRyx3QkFBWXNHLGlCQXRHSSxFQXNHZ0JwRyxnQkFBZ0IsQ0FBQ3FHLHNCQXRHakMsb0RBd0doQnZHLHdCQUFZd0csZ0JBeEdJLEVBd0dldEcsZ0JBQWdCLENBQUN1RyxxQkF4R2hDLG9EQTBHaEJ6Ryx3QkFBWTBHLGlCQTFHSSxFQTBHZ0J4RyxnQkFBZ0IsQ0FBQ3lHLHNCQTFHakMsb0RBNEdoQjNHLHdCQUFZNEcsZUE1R0ksRUE0R2MxRyxnQkFBZ0IsQ0FBQzJHLG9CQTVHL0Isb0RBOEdoQjdHLHdCQUFZOEcsb0JBOUdJLEVBOEdtQjVHLGdCQUFnQixDQUFDNkcseUJBOUdwQyxvREFnSGhCL0csd0JBQVlnSCwrQkFoSEksRUFnSDhCOUcsZ0JBQWdCLENBQUMrRyxrQ0FoSC9DLGtCQUFuQixDLENBbUhBOztBQUNPLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUI7QUFBQSxNQUFDQyxZQUFELHVFQUFnQixFQUFoQjtBQUFBLFNBQ3BDO0FBQ0EscUNBQWNwSCxhQUFkLGdEQUNLRyxnQkFBZ0IsQ0FBQ2tILGlCQUR0QixHQUVLRCxZQUZMO0FBR0VBLE1BQUFBLFlBQVksRUFBWkE7QUFIRjtBQUZvQztBQUFBLENBQS9COzs7O2VBUVFELHNCQUFzQixFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIHZpc1N0YXRlVXBkYXRlcnMgZnJvbSAnLi92aXMtc3RhdGUtdXBkYXRlcnMnO1xuXG4vKipcbiAqIEltcG9ydGFudDogRG8gbm90IHJlbmFtZSBgYWN0aW9uSGFuZGxlcmAgb3IgdGhlIGFzc2lnbm1lbnQgcGF0dGVybiBvZiBwcm9wZXJ0eSB2YWx1ZS5cbiAqIEl0IGlzIHVzZWQgdG8gZ2VuZXJhdGUgZG9jdW1lbnRhdGlvblxuICovXG5jb25zdCBhY3Rpb25IYW5kbGVyID0ge1xuICBbQWN0aW9uVHlwZXMuQUREX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMuYWRkRmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuQUREX0xBWUVSXTogdmlzU3RhdGVVcGRhdGVycy5hZGRMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkRVUExJQ0FURV9MQVlFUl06IHZpc1N0YXRlVXBkYXRlcnMuZHVwbGljYXRlTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMuZW5sYXJnZUZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfQ0xJQ0tdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyQ2xpY2tVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0hPVkVSXTogdmlzU3RhdGVVcGRhdGVycy5sYXllckhvdmVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRV06IHZpc1N0YXRlVXBkYXRlcnMubGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfQ09MT1JfVUlfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfQU5JTUFUSU9OXTogdmlzU3RhdGVVcGRhdGVycy50b2dnbGVMYXllckFuaW1hdGlvblVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxPQURfRklMRVNdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxvYWRGaWxlc1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxPQURfRklMRVNfRVJSXTogdmlzU3RhdGVVcGRhdGVycy5sb2FkRmlsZXNFcnJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MT0FEX05FWFRfRklMRV06IHZpc1N0YXRlVXBkYXRlcnMubG9hZE5leHRGaWxlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTE9BRF9GSUxFX1NURVBfU1VDQ0VTU106IHZpc1N0YXRlVXBkYXRlcnMubG9hZEZpbGVTdGVwU3VjY2Vzc1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLk1BUF9DTElDS106IHZpc1N0YXRlVXBkYXRlcnMubWFwQ2xpY2tVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5NT1VTRV9NT1ZFXTogdmlzU3RhdGVVcGRhdGVycy5tb3VzZU1vdmVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRUNFSVZFX01BUF9DT05GSUddOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU1PVkVfREFUQVNFVF06IHZpc1N0YXRlVXBkYXRlcnMucmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9GSUxURVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlbW92ZUZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9MQVlFUl06IHZpc1N0YXRlVXBkYXRlcnMucmVtb3ZlTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU9SREVSX0xBWUVSXTogdmlzU3RhdGVVcGRhdGVycy5yZW9yZGVyTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRVNFVF9NQVBfQ09ORklHXTogdmlzU3RhdGVVcGRhdGVycy5yZXNldE1hcENvbmZpZ1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9GSUxURVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldEZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9GSUxURVJfQU5JTUFUSU9OX1RJTUVdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldEZpbHRlckFuaW1hdGlvblRpbWVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRklMVEVSX0FOSU1BVElPTl9USU1FX0NPTkZJR106XG4gICAgdmlzU3RhdGVVcGRhdGVycy5zZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XXTogdmlzU3RhdGVVcGRhdGVycy5zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3dVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1RdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldEZpbHRlclBsb3RVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfTUFQX0lORk9dOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldE1hcEluZm9VcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEVdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNob3dEYXRhc2V0VGFibGVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTl06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRURdOiB2aXNTdGF0ZVVwZGF0ZXJzLnVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FXTogdmlzU3RhdGVVcGRhdGVycy5zZXRMYXllckFuaW1hdGlvblRpbWVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVEXTogdmlzU3RhdGVVcGRhdGVycy51cGRhdGVMYXllckFuaW1hdGlvblNwZWVkVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVBdOiB2aXNTdGF0ZVVwZGF0ZXJzLnRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUF06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlU3BsaXRNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkddOiB2aXNTdGF0ZVVwZGF0ZXJzLnVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEFdOiB2aXNTdGF0ZVVwZGF0ZXJzLnVwZGF0ZVZpc0RhdGFVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU5BTUVfREFUQVNFVF06IHZpc1N0YXRlVXBkYXRlcnMucmVuYW1lRGF0YXNldFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9GRUFUVVJFU106IHZpc1N0YXRlVXBkYXRlcnMuc2V0RmVhdHVyZXNVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5ERUxFVEVfRkVBVFVSRV06IHZpc1N0YXRlVXBkYXRlcnMuZGVsZXRlRmVhdHVyZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9QT0xZR09OX0ZJTFRFUl9MQVlFUl06IHZpc1N0YXRlVXBkYXRlcnMuc2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkVdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNFVF9FRElUT1JfTU9ERV06IHZpc1N0YXRlVXBkYXRlcnMuc2V0RWRpdG9yTW9kZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9FRElUT1JfVklTSUJJTElUWV06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfRkVBVFVSRV06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLmFwcGx5Q1BVRmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU09SVF9UQUJMRV9DT0xVTU5dOiB2aXNTdGF0ZVVwZGF0ZXJzLnNvcnRUYWJsZUNvbHVtblVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlBJTl9UQUJMRV9DT0xVTU5dOiB2aXNTdGF0ZVVwZGF0ZXJzLnBpblRhYmxlQ29sdW1uVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuQ09QWV9UQUJMRV9DT0xVTU5dOiB2aXNTdGF0ZVVwZGF0ZXJzLmNvcHlUYWJsZUNvbHVtblVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLk5FWFRfRklMRV9CQVRDSF06IHZpc1N0YXRlVXBkYXRlcnMubmV4dEZpbGVCYXRjaFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlBST0NFU1NfRklMRV9DT05URU5UXTogdmlzU3RhdGVVcGRhdGVycy5wcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfTEFZRVJfQU5JTUFUSU9OX1RJTUVfQ09ORklHXTogdmlzU3RhdGVVcGRhdGVycy5zZXRMYXllckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyXG59O1xuXG4vLyBjb25zdHJ1Y3QgdmlzLXN0YXRlIHJlZHVjZXJcbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5ID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PlxuICAvLyBAdHMtaWdub3JlXG4gIGhhbmRsZUFjdGlvbnMoYWN0aW9uSGFuZGxlciwge1xuICAgIC4uLnZpc1N0YXRlVXBkYXRlcnMuSU5JVElBTF9WSVNfU1RBVEUsXG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIGluaXRpYWxTdGF0ZVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgdmlzU3RhdGVSZWR1Y2VyRmFjdG9yeSgpO1xuIl19