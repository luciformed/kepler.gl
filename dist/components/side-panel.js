"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _localization = require("../localization");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _customPanel = _interopRequireDefault(require("./side-panel/custom-panel"));

var _defaultSettings = require("../constants/default-settings");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SidePanelContent = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: ", "px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n\n  .side-panel__content__inner {\n    display: flex;\n    height: 100%;\n    flex-direction: column;\n  }\n"])), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.sidePanelInnerPadding;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"])), function (props) {
    return props.theme.titleTextColor;
  }, function (props) {
    return props.theme.sidePanelTitleFontsize;
  }, function (props) {
    return props.theme.sidePanelTitleLineHeight;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"], _customPanel["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager, CustomPanels) {
  var getCustomPanelProps = (0, _lodash["default"])(CustomPanels, ['defaultProps', 'getProps']) || function () {
    return {};
  };

  var SidePanel = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    var _super = _createSuper(SidePanel);

    function SidePanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        _this.props.visStateActions.showDatasetTable(dataId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportImage", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveToStorage", function () {
        return _this.props.uiStateActions.toggleModal(_this.props.mapSaved ? _defaultSettings.OVERWRITE_MAP_ID : _defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickSaveAsToStorage", function () {
        // add (copy) to file name
        _this.props.visStateActions.setMapInfo({
          title: "".concat(_this.props.mapInfo.title || 'Kepler.gl', " (Copy)")
        });

        _this.props.uiStateActions.toggleModal(_defaultSettings.SAVE_MAP_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickShareMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.SHARE_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      value: // eslint-disable-next-line complexity
      function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions,
            availableProviders = _this$props.availableProviders,
            panels = _this$props.panels;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerColorUIChange: visStateActions.layerColorUIChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          duplicateLayer: visStateActions.duplicateLayer,
          removeDataset: this._removeDataset,
          openModal: uiStateActions.toggleModal
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleFilterAnimation,
          enlargeFilter: visStateActions.enlargeFilter,
          toggleFilterFeature: visStateActions.toggleFilterFeature
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          set3dBuildingColor: mapStyleActions.set3dBuildingColor,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, /*#__PURE__*/_react["default"].createElement(PanelHeader, {
          appName: appName,
          version: version,
          appWebsite: appWebsite,
          visibleDropdown: uiState.visibleDropdown,
          showExportDropdown: uiStateActions.showExportDropdown,
          hideExportDropdown: uiStateActions.hideExportDropdown,
          onExportImage: this._onClickExportImage,
          onExportData: this._onClickExportData,
          onExportMap: this._onClickExportMap,
          onSaveMap: this.props.onSaveMap,
          onSaveToStorage: availableProviders.hasStorage ? this._onClickSaveToStorage : null,
          onSaveAsToStorage: availableProviders.hasStorage && this.props.mapSaved ? this._onClickSaveAsToStorage : null,
          onShareMap: availableProviders.hasShare ? this._onClickShareMap : null
        }), /*#__PURE__*/_react["default"].createElement(PanelToggle, {
          panels: panels,
          activePanel: activeSidePanel,
          togglePanel: uiStateActions.toggleSidePanel
        }), /*#__PURE__*/_react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "side-panel__content__inner"
        }, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: (panels.find(function (_ref) {
            var id = _ref.id;
            return id === activeSidePanel;
          }) || {}).label
        })), activeSidePanel === 'layer' && /*#__PURE__*/_react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          colorPalette: uiState.colorPalette
        })), activeSidePanel === 'filter' && /*#__PURE__*/_react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          layers: layers,
          filters: filters
        })), activeSidePanel === 'interaction' && /*#__PURE__*/_react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), activeSidePanel === 'map' && /*#__PURE__*/_react["default"].createElement(MapManager, (0, _extends2["default"])({}, mapManagerActions, {
          mapStyle: this.props.mapStyle
        })), /*#__PURE__*/_react["default"].createElement(CustomPanels, (0, _extends2["default"])({}, getCustomPanelProps(this.props), {
          activeSidePanel: activeSidePanel
        }))))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(SidePanel, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    availableProviders: _propTypes["default"].object,
    mapSaved: _propTypes["default"].string,
    panels: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  (0, _defineProperty2["default"])(SidePanel, "defaultProps", {
    panels: _defaultSettings.SIDEBAR_PANELS,
    uiState: {},
    visStateActions: {},
    mapStyleActions: {},
    uiStateActions: {},
    availableProviders: {}
  });
  return SidePanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwic2lkZVBhbmVsVGl0bGVGb250c2l6ZSIsInNpZGVQYW5lbFRpdGxlTGluZUhlaWdodCIsIlNpZGVQYW5lbEZhY3RvcnkiLCJkZXBzIiwiU2lkZWJhckZhY3RvcnkiLCJQYW5lbEhlYWRlckZhY3RvcnkiLCJQYW5lbFRvZ2dsZUZhY3RvcnkiLCJMYXllck1hbmFnZXJGYWN0b3J5IiwiRmlsdGVyTWFuYWdlckZhY3RvcnkiLCJJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IiwiTWFwTWFuYWdlckZhY3RvcnkiLCJDdXN0b21QYW5lbHNGYWN0b3J5IiwiU2lkZWJhciIsIlBhbmVsSGVhZGVyIiwiUGFuZWxUb2dnbGUiLCJQYW5lbFRpdGxlIiwiTGF5ZXJNYW5hZ2VyIiwiRmlsdGVyTWFuYWdlciIsIkludGVyYWN0aW9uTWFuYWdlciIsIk1hcE1hbmFnZXIiLCJDdXN0b21QYW5lbHMiLCJnZXRDdXN0b21QYW5lbFByb3BzIiwiU2lkZVBhbmVsIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVTaWRlUGFuZWwiLCJ1aVN0YXRlIiwiYWN0aXZlU2lkZVBhbmVsIiwiZGF0YUlkIiwidmlzU3RhdGVBY3Rpb25zIiwic2hvd0RhdGFzZXRUYWJsZSIsInRvZ2dsZU1vZGFsIiwiQUREX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwia2V5Iiwib3BlbkRlbGV0ZU1vZGFsIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJFWFBPUlRfTUFQX0lEIiwibWFwU2F2ZWQiLCJPVkVSV1JJVEVfTUFQX0lEIiwiU0FWRV9NQVBfSUQiLCJzZXRNYXBJbmZvIiwidGl0bGUiLCJtYXBJbmZvIiwiU0hBUkVfTUFQX0lEIiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImF2YWlsYWJsZVByb3ZpZGVycyIsInBhbmVscyIsImlzT3BlbiIsIkJvb2xlYW4iLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsIl9zaG93RGF0YXNldFRhYmxlIiwic2hvd0FkZERhdGFNb2RhbCIsIl9zaG93QWRkRGF0YU1vZGFsIiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsInJlbW92ZURhdGFzZXQiLCJfcmVtb3ZlRGF0YXNldCIsIm9wZW5Nb2RhbCIsImZpbHRlck1hbmFnZXJBY3Rpb25zIiwiYWRkRmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwic2V0RmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uIiwiZW5sYXJnZUZpbHRlciIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zIiwib25Db25maWdDaGFuZ2UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsIm1hcE1hbmFnZXJBY3Rpb25zIiwiYWRkTWFwU3R5bGVVcmwiLCJtYXBDb25maWdDaGFuZ2UiLCJvblN0eWxlQ2hhbmdlIiwibWFwU3R5bGVDaGFuZ2UiLCJvbkJ1aWxkaW5nQ2hhbmdlIiwibWFwQnVpbGRpbmdDaGFuZ2UiLCJzZXQzZEJ1aWxkaW5nQ29sb3IiLCJzaG93QWRkTWFwU3R5bGVNb2RhbCIsIl9zaG93QWRkTWFwU3R5bGVNb2RhbCIsIndpZHRoIiwiX29uT3Blbk9yQ2xvc2UiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJfb25DbGlja0V4cG9ydEltYWdlIiwiX29uQ2xpY2tFeHBvcnREYXRhIiwiX29uQ2xpY2tFeHBvcnRNYXAiLCJvblNhdmVNYXAiLCJoYXNTdG9yYWdlIiwiX29uQ2xpY2tTYXZlVG9TdG9yYWdlIiwiX29uQ2xpY2tTYXZlQXNUb1N0b3JhZ2UiLCJoYXNTaGFyZSIsIl9vbkNsaWNrU2hhcmVNYXAiLCJmaW5kIiwiaWQiLCJsYWJlbCIsImNvbG9yUGFsZXR0ZSIsIm1hcFN0eWxlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwibnVtYmVyIiwiU0lERUJBUl9QQU5FTFMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLGlTQUNsQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGtCQUFoQjtBQUFBLENBRGEsRUFHVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBSEksQ0FBdEI7O0FBY08sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFNBQU1OLDZCQUFPQyxHQUFiLDZOQUN0QixVQUFBQyxLQUFLO0FB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LEVBQUU0RixzQkFBVUksTUFBVixDQUFpQkQsVUFUakI7QUFVakJwRSxJQUFBQSxlQUFlLEVBQUVpRSxzQkFBVUksTUFBVixDQUFpQkQsVUFWakI7QUFXakJuRSxJQUFBQSxrQkFBa0IsRUFBRWdFLHNCQUFVSSxNQVhiO0FBWWpCdEYsSUFBQUEsUUFBUSxFQUFFa0Ysc0JBQVVLLE1BWkg7QUFhakJwRSxJQUFBQSxNQUFNLEVBQUUrRCxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVJLE1BQTVCO0FBYlMsR0FKckI7QUFBQSxtQ0FHTXRHLFNBSE4sa0JBb0J3QjtBQUNwQm1DLElBQUFBLE1BQU0sRUFBRXNFLCtCQURZO0FBRXBCdEcsSUFBQUEsT0FBTyxFQUFFLEVBRlc7QUFHcEJHLElBQUFBLGVBQWUsRUFBRSxFQUhHO0FBSXBCMkIsSUFBQUEsZUFBZSxFQUFFLEVBSkc7QUFLcEJoQyxJQUFBQSxjQUFjLEVBQUUsRUFMSTtBQU1wQmlDLElBQUFBLGtCQUFrQixFQUFFO0FBTkEsR0FwQnhCO0FBMk5BLFNBQU9sQyxTQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQgU2lkZWJhckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtYmFyJztcbmltcG9ydCBQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlcic7XG5pbXBvcnQgTGF5ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgRmlsdGVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyJztcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9pbnRlcmFjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCBNYXBNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXInO1xuaW1wb3J0IFBhbmVsVG9nZ2xlRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlJztcbmltcG9ydCBDdXN0b21QYW5lbHNGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9jdXN0b20tcGFuZWwnO1xuXG5pbXBvcnQge1xuICBBRERfREFUQV9JRCxcbiAgQUREX01BUF9TVFlMRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9NQVBfSUQsXG4gIFNIQVJFX01BUF9JRCxcbiAgU0lERUJBUl9QQU5FTFMsXG4gIE9WRVJXUklURV9NQVBfSUQsXG4gIFNBVkVfTUFQX0lELFxuICBFWFBPUlRfSU1BR0VfSURcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBTaWRlUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxTY3JvbGxCYXJ9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsSW5uZXJQYWRkaW5nfXB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAuc2lkZS1wYW5lbF9fY29udGVudF9faW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbFRpdGxlRmFjdG9yeSA9ICgpID0+IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFRpdGxlRm9udHNpemV9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxUaXRsZUxpbmVIZWlnaHR9O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuYDtcblxuU2lkZVBhbmVsRmFjdG9yeS5kZXBzID0gW1xuICBTaWRlYmFyRmFjdG9yeSxcbiAgUGFuZWxIZWFkZXJGYWN0b3J5LFxuICBQYW5lbFRvZ2dsZUZhY3RvcnksXG4gIFBhbmVsVGl0bGVGYWN0b3J5LFxuICBMYXllck1hbmFnZXJGYWN0b3J5LFxuICBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeSxcbiAgTWFwTWFuYWdlckZhY3RvcnksXG4gIEN1c3RvbVBhbmVsc0ZhY3Rvcnlcbl07XG5cbi8qKlxuICpcbiAqIFZlcnRpY2FsIHNpZGViYXIgY29udGFpbmluZyBpbnB1dCBjb21wb25lbnRzIGZvciB0aGUgcmVuZGVyaW5nIGxheWVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlUGFuZWxGYWN0b3J5KFxuICBTaWRlYmFyLFxuICBQYW5lbEhlYWRlcixcbiAgUGFuZWxUb2dnbGUsXG4gIFBhbmVsVGl0bGUsXG4gIExheWVyTWFuYWdlcixcbiAgRmlsdGVyTWFuYWdlcixcbiAgSW50ZXJhY3Rpb25NYW5hZ2VyLFxuICBNYXBNYW5hZ2VyLFxuICBDdXN0b21QYW5lbHNcbikge1xuICBjb25zdCBnZXRDdXN0b21QYW5lbFByb3BzID0gZ2V0KEN1c3RvbVBhbmVscywgWydkZWZhdWx0UHJvcHMnLCAnZ2V0UHJvcHMnXSkgfHwgKCgpID0+ICh7fSkpO1xuXG4gIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGF2YWlsYWJsZVByb3ZpZGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIG1hcFNhdmVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgcGFuZWxzOiBTSURFQkFSX1BBTkVMUyxcbiAgICAgIHVpU3RhdGU6IHt9LFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiB7fSxcbiAgICAgIG1hcFN0eWxlQWN0aW9uczoge30sXG4gICAgICB1aVN0YXRlQWN0aW9uczoge30sXG4gICAgICBhdmFpbGFibGVQcm92aWRlcnM6IHt9XG4gICAgfTtcblxuICAgIC8qIGNvbXBvbmVudCBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWwoXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5hY3RpdmVTaWRlUGFuZWwgPyBudWxsIDogJ2xheWVyJ1xuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3Nob3dEYXRhc2V0VGFibGUgPSBkYXRhSWQgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZERhdGFNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX0RBVEFfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZE1hcFN0eWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9NQVBfU1RZTEVfSUQpO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlRGF0YXNldCA9IGtleSA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgc2hvdyB0aGUgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMub3BlbkRlbGV0ZU1vZGFsKGtleSk7XG4gICAgfTtcblxuICAgIF9vbkNsaWNrRXhwb3J0SW1hZ2UgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9JTUFHRV9JRCk7XG5cbiAgICBfb25DbGlja0V4cG9ydERhdGEgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9EQVRBX0lEKTtcblxuICAgIF9vbkNsaWNrRXhwb3J0TWFwID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfTUFQX0lEKTtcblxuICAgIF9vbkNsaWNrU2F2ZVRvU3RvcmFnZSA9ICgpID0+XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKHRoaXMucHJvcHMubWFwU2F2ZWQgPyBPVkVSV1JJVEVfTUFQX0lEIDogU0FWRV9NQVBfSUQpO1xuXG4gICAgX29uQ2xpY2tTYXZlQXNUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAvLyBhZGQgKGNvcHkpIHRvIGZpbGUgbmFtZVxuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuc2V0TWFwSW5mbyh7XG4gICAgICAgIHRpdGxlOiBgJHt0aGlzLnByb3BzLm1hcEluZm8udGl0bGUgfHwgJ0tlcGxlci5nbCd9IChDb3B5KWBcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKFNBVkVfTUFQX0lEKTtcbiAgICB9O1xuXG4gICAgX29uQ2xpY2tTaGFyZU1hcCA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoU0hBUkVfTUFQX0lEKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICBhcHBXZWJzaXRlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGF2YWlsYWJsZVByb3ZpZGVycyxcbiAgICAgICAgcGFuZWxzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbH0gPSB1aVN0YXRlO1xuICAgICAgY29uc3QgaXNPcGVuID0gQm9vbGVhbihhY3RpdmVTaWRlUGFuZWwpO1xuXG4gICAgICBjb25zdCBsYXllck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRMYXllcjogdmlzU3RhdGVBY3Rpb25zLmFkZExheWVyLFxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbG9yVUlDaGFuZ2UsXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUZXh0TGFiZWxDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUeXBlQ2hhbmdlLFxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiB2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZyxcbiAgICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogdmlzU3RhdGVBY3Rpb25zLnJlb3JkZXJMYXllcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVMYXllcixcbiAgICAgICAgZHVwbGljYXRlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5kdXBsaWNhdGVMYXllcixcbiAgICAgICAgcmVtb3ZlRGF0YXNldDogdGhpcy5fcmVtb3ZlRGF0YXNldCxcbiAgICAgICAgb3Blbk1vZGFsOiB1aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmFkZEZpbHRlcixcbiAgICAgICAgcmVtb3ZlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRmlsdGVyLFxuICAgICAgICBzZXRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvbjogdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUZpbHRlckFuaW1hdGlvbixcbiAgICAgICAgZW5sYXJnZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXIsXG4gICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU6IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVGaWx0ZXJGZWF0dXJlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTWFwU3R5bGVVcmw6IG1hcFN0eWxlQWN0aW9ucy5hZGRNYXBTdHlsZVVybCxcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBDb25maWdDaGFuZ2UsXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcbiAgICAgICAgb25CdWlsZGluZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcEJ1aWxkaW5nQ2hhbmdlLFxuICAgICAgICBzZXQzZEJ1aWxkaW5nQ29sb3I6IG1hcFN0eWxlQWN0aW9ucy5zZXQzZEJ1aWxkaW5nQ29sb3IsXG4gICAgICAgIHNob3dBZGRNYXBTdHlsZU1vZGFsOiB0aGlzLl9zaG93QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgIG1pbmlmaWVkV2lkdGg9ezB9XG4gICAgICAgICAgICBvbk9wZW5PckNsb3NlPXt0aGlzLl9vbk9wZW5PckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxuICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgICAgICBhcHBXZWJzaXRlPXthcHBXZWJzaXRlfVxuICAgICAgICAgICAgICB2aXNpYmxlRHJvcGRvd249e3VpU3RhdGUudmlzaWJsZURyb3Bkb3dufVxuICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd249e3VpU3RhdGVBY3Rpb25zLnNob3dFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgaGlkZUV4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5oaWRlRXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e3RoaXMuX29uQ2xpY2tFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXt0aGlzLl9vbkNsaWNrRXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgb25FeHBvcnRNYXA9e3RoaXMuX29uQ2xpY2tFeHBvcnRNYXB9XG4gICAgICAgICAgICAgIG9uU2F2ZU1hcD17dGhpcy5wcm9wcy5vblNhdmVNYXB9XG4gICAgICAgICAgICAgIG9uU2F2ZVRvU3RvcmFnZT17YXZhaWxhYmxlUHJvdmlkZXJzLmhhc1N0b3JhZ2UgPyB0aGlzLl9vbkNsaWNrU2F2ZVRvU3RvcmFnZSA6IG51bGx9XG4gICAgICAgICAgICAgIG9uU2F2ZUFzVG9TdG9yYWdlPXtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVQcm92aWRlcnMuaGFzU3RvcmFnZSAmJiB0aGlzLnByb3BzLm1hcFNhdmVkXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuX29uQ2xpY2tTYXZlQXNUb1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uU2hhcmVNYXA9e2F2YWlsYWJsZVByb3ZpZGVycy5oYXNTaGFyZSA/IHRoaXMuX29uQ2xpY2tTaGFyZU1hcCA6IG51bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhbmVsVG9nZ2xlXG4gICAgICAgICAgICAgIHBhbmVscz17cGFuZWxzfVxuICAgICAgICAgICAgICBhY3RpdmVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTaWRlUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50X19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxQYW5lbFRpdGxlIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD17KHBhbmVscy5maW5kKCh7aWR9KSA9PiBpZCA9PT0gYWN0aXZlU2lkZVBhbmVsKSB8fCB7fSkubGFiZWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17bGF5ZXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxuICAgICAgICAgICAgICAgICAgICBsYXllckJsZW5kaW5nPXtsYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBjb2xvclBhbGV0dGU9e3VpU3RhdGUuY29sb3JQYWxldHRlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdmaWx0ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWx0ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnaW50ZXJhY3Rpb24nICYmIChcbiAgICAgICAgICAgICAgICAgIDxJbnRlcmFjdGlvbk1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Db25maWc9e2ludGVyYWN0aW9uQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdtYXAnICYmIChcbiAgICAgICAgICAgICAgICAgIDxNYXBNYW5hZ2VyIHsuLi5tYXBNYW5hZ2VyQWN0aW9uc30gbWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGV9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Q3VzdG9tUGFuZWxzXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0Q3VzdG9tUGFuZWxQcm9wcyh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVNpZGVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TaWRlUGFuZWxDb250ZW50PlxuICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTaWRlUGFuZWw7XG59XG4iXX0=