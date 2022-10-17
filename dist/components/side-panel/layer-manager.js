"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDataButtonFactory = AddDataButtonFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSortableHoc = require("react-sortable-hoc");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

var _dataUtils = require("../../utils/data-utils");

var _layerPanel = _interopRequireDefault(require("./layer-panel/layer-panel"));

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _icons = require("../common/icons");

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _defaultSettings = require("../../constants/default-settings");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending,
      intl = _ref.intl;
  var labeledLayerBlendings = Object.keys(_defaultSettings.LAYER_BLENDINGS).reduce(function (acc, current) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[current].label
    }), current));
  }, {});
  var onChange = (0, _react.useCallback)(function (blending) {
    return updateLayerBlending(labeledLayerBlendings[blending]);
  }, [updateLayerBlending, labeledLayerBlendings]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "layerBlending.title"
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: intl.formatMessage({
      id: _defaultSettings.LAYER_BLENDINGS[layerBlending].label
    }),
    options: Object.keys(labeledLayerBlendings),
    multiSelect: false,
    searchable: false,
    onChange: onChange
  }));
}; // make sure the element is always visible while is being dragged
// item being dragged is appended in body, here to reset its global style


var SortableStyledItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: ", ";\n\n  &.sorting {\n    pointer-events: none;\n  }\n\n  &.sorting-layers .layer-panel__header {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n    .layer__drag-handle {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.textColorHl;
});

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      className: "add-data-button",
      onClick: onClick,
      isInactive: !isInactive,
      width: "105px",
      secondary: true
    }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
      height: "12px"
    }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'layerManager.addData'
    }));
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel["default"], _sourceDataCatalog["default"]];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref3) {
    var children = _ref3.children,
        isSorting = _ref3.isSorting;
    return /*#__PURE__*/_react["default"].createElement(SortableStyledItem, {
      className: (0, _classnames["default"])('sortable-layer-items', {
        sorting: isSorting
      })
    }, children);
  });
  var WrappedSortableContainer = (0, _reactSortableHoc.SortableContainer)(function (_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/_react["default"].createElement("div", null, children);
  });

  var LayerManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    var _super = _createSuper(LayerManager);

    function LayerManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSorting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerClassSelector", function (props) {
        return props.layerClasses;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerTypeOptionsSelector", (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon,
            requireData: layer.requireData
          };
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addEmptyNewLayer", function () {
        _this.props.addLayer();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSort", function (_ref5) {
        var oldIndex = _ref5.oldIndex,
            newIndex = _ref5.newIndex;

        _this.props.updateLayerOrder((0, _dataUtils.arrayMove)(_this.props.layerOrder, oldIndex, newIndex));

        _this.setState({
          isSorting: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
        _this.setState({
          isSorting: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateBeforeSortStart", function (_ref6) {
        var index = _ref6.index;
        // if layer config is active, close it
        var _this$props = _this.props,
            layerOrder = _this$props.layerOrder,
            layers = _this$props.layers,
            layerConfigChange = _this$props.layerConfigChange;
        var layerIdx = layerOrder[index];

        if (layers[layerIdx].config.isConfigActive) {
          layerConfigChange(layers[layerIdx], {
            isConfigActive: false
          });
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            layers = _this$props2.layers,
            datasets = _this$props2.datasets,
            layerOrder = _this$props2.layerOrder,
            openModal = _this$props2.openModal,
            intl = _this$props2.intl;
        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);
        var layerActions = {
          layerColorUIChange: this.props.layerColorUIChange,
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          layerTextLabelChange: this.props.layerTextLabelChange,
          removeLayer: this.props.removeLayer,
          duplicateLayer: this.props.duplicateLayer
        };
        var panelProps = {
          datasets: datasets,
          openModal: openModal,
          layerTypeOptions: layerTypeOptions
        };
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "layer-manager"
        }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable,
          removeDataset: this.props.removeDataset,
          showDeleteDataset: true
        }), /*#__PURE__*/_react["default"].createElement(AddDataButton, {
          onClick: this.props.showAddDataModal,
          isInactive: !defaultDataset
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(WrappedSortableContainer, {
          onSortEnd: this._handleSort,
          onSortStart: this._onSortStart,
          updateBeforeSortStart: this._updateBeforeSortStart,
          lockAxis: "y",
          helperClass: "sorting-layers",
          useDragHandle: true
        }, layerOrder.map(function (layerIdx, index) {
          return !layers[layerIdx].config.hidden && /*#__PURE__*/_react["default"].createElement(SortableItem, {
            key: "layer-".concat(layerIdx),
            index: index,
            isSorting: _this2.state.isSorting
          }, /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
            sortData: layerIdx,
            key: layers[layerIdx].id,
            idx: layerIdx,
            layer: layers[layerIdx]
          })));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, defaultDataset ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          className: "add-layer-button",
          onClick: this._addEmptyNewLayer,
          width: "105px"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'layerManager.addLayer'
        })) : null), /*#__PURE__*/_react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: this.props.updateLayerBlending,
          intl: intl
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerManager, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    // functions
    addLayer: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTextLabelChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    duplicateLayer: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    showDatasetTable: _propTypes["default"].func.isRequired,
    updateLayerBlending: _propTypes["default"].func.isRequired,
    updateLayerOrder: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(LayerManager);
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJMYXllckJsZW5kaW5nU2VsZWN0b3IiLCJsYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsImludGwiLCJsYWJlbGVkTGF5ZXJCbGVuZGluZ3MiLCJPYmplY3QiLCJrZXlzIiwiTEFZRVJfQkxFTkRJTkdTIiwicmVkdWNlIiwiYWNjIiwiY3VycmVudCIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJibGVuZGluZyIsIlNvcnRhYmxlU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bldyYXBwZXJaIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInRleHRDb2xvckhsIiwiQWRkRGF0YUJ1dHRvbkZhY3RvcnkiLCJBZGREYXRhQnV0dG9uIiwib25DbGljayIsImlzSW5hY3RpdmUiLCJMYXllck1hbmFnZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiTGF5ZXJQYW5lbCIsIlNvdXJjZURhdGFDYXRhbG9nIiwiU29ydGFibGVJdGVtIiwiY2hpbGRyZW4iLCJpc1NvcnRpbmciLCJzb3J0aW5nIiwiV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyIiwiTGF5ZXJNYW5hZ2VyIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJDbGFzc1NlbGVjdG9yIiwibWFwIiwia2V5IiwibGF5ZXIiLCJuYW1lIiwiaWNvbiIsImxheWVySWNvbiIsInJlcXVpcmVEYXRhIiwiYWRkTGF5ZXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwidXBkYXRlTGF5ZXJPcmRlciIsImxheWVyT3JkZXIiLCJzZXRTdGF0ZSIsImluZGV4IiwibGF5ZXJzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllcklkeCIsImNvbmZpZyIsImlzQ29uZmlnQWN0aXZlIiwiZGF0YXNldHMiLCJvcGVuTW9kYWwiLCJkZWZhdWx0RGF0YXNldCIsImxheWVyVHlwZU9wdGlvbnMiLCJsYXllclR5cGVPcHRpb25zU2VsZWN0b3IiLCJsYXllckFjdGlvbnMiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UiLCJsYXllclR5cGVDaGFuZ2UiLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwicmVtb3ZlTGF5ZXIiLCJkdXBsaWNhdGVMYXllciIsInBhbmVsUHJvcHMiLCJzaG93RGF0YXNldFRhYmxlIiwicmVtb3ZlRGF0YXNldCIsInNob3dBZGREYXRhTW9kYWwiLCJfaGFuZGxlU29ydCIsIl9vblNvcnRTdGFydCIsIl91cGRhdGVCZWZvcmVTb3J0U3RhcnQiLCJoaWRkZW4iLCJzdGF0ZSIsIl9hZGRFbXB0eU5ld0xheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BQWdEO0FBQUEsTUFBOUNDLGFBQThDLFFBQTlDQSxhQUE4QztBQUFBLE1BQS9CQyxtQkFBK0IsUUFBL0JBLG1CQUErQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUM1RSxNQUFNQyxxQkFBcUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGdDQUFaLEVBQTZCQyxNQUE3QixDQUM1QixVQUFD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QSxlQUFlLEVBQUVnQixzQkFBVU0sSUFBVixDQUFlSixVQVhmO0FBWWpCakIsSUFBQUEsb0JBQW9CLEVBQUVlLHNCQUFVTSxJQUFWLENBQWVKLFVBWnBCO0FBYWpCekIsSUFBQUEsU0FBUyxFQUFFdUIsc0JBQVVNLElBQVYsQ0FBZUosVUFiVDtBQWNqQmYsSUFBQUEsV0FBVyxFQUFFYSxzQkFBVU0sSUFBVixDQUFlSixVQWRYO0FBZWpCZCxJQUFBQSxjQUFjLEVBQUVZLHNCQUFVTSxJQUFWLENBQWVKLFVBZmQ7QUFnQmpCWCxJQUFBQSxhQUFhLEVBQUVTLHNCQUFVTSxJQUFWLENBQWVKLFVBaEJiO0FBaUJqQlosSUFBQUEsZ0JBQWdCLEVBQUVVLHNCQUFVTSxJQUFWLENBQWVKLFVBakJoQjtBQWtCakJ6RixJQUFBQSxtQkFBbUIsRUFBRXVGLHNCQUFVTSxJQUFWLENBQWVKLFVBbEJuQjtBQW1CakJuQyxJQUFBQSxnQkFBZ0IsRUFBRWlDLHNCQUFVTSxJQUFWLENBQWVKO0FBbkJoQixHQWhCb0Q7QUEySnpFLFNBQU8sMkJBQVdoRCxZQUFYLENBQVA7QUFDRDs7ZUFFY1gsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7U29ydGFibGVDb250YWluZXIsIFNvcnRhYmxlRWxlbWVudH0gZnJvbSAncmVhY3Qtc29ydGFibGUtaG9jJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcbmltcG9ydCB7YXJyYXlNb3ZlfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuaW1wb3J0IExheWVyUGFuZWxGYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwnO1xuaW1wb3J0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9zb3VyY2UtZGF0YS1jYXRhbG9nJztcbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIFBhbmVsTGFiZWwsXG4gIFNpZGVQYW5lbERpdmlkZXIsXG4gIFNpZGVQYW5lbFNlY3Rpb25cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBMYXllckJsZW5kaW5nU2VsZWN0b3IgPSAoe2xheWVyQmxlbmRpbmcsIHVwZGF0ZUxheWVyQmxlbmRpbmcsIGludGx9KSA9PiB7XG4gIGNvbnN0IGxhYmVsZWRMYXllckJsZW5kaW5ncyA9IE9iamVjdC5rZXlzKExBWUVSX0JMRU5ESU5HUykucmVkdWNlKFxuICAgIChhY2MsIGN1cnJlbnQpID0+ICh7XG4gICAgICAuLi5hY2MsXG4gICAgICBbaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogTEFZRVJfQkxFTkRJTkdTW2N1cnJlbnRdLmxhYmVsfSldOiBjdXJyZW50XG4gICAgfSksXG4gICAge31cbiAgKTtcblxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGJsZW5kaW5nID0+IHVwZGF0ZUxheWVyQmxlbmRpbmcobGFiZWxlZExheWVyQmxlbmRpbmdzW2JsZW5kaW5nXSksIFtcbiAgICB1cGRhdGVMYXllckJsZW5kaW5nLFxuICAgIGxhYmVsZWRMYXllckJsZW5kaW5nc1xuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibGF5ZXJCbGVuZGluZy50aXRsZVwiIC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IExBWUVSX0JMRU5ESU5HU1tsYXllckJsZW5kaW5nXS5sYWJlbH0pfVxuICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyhsYWJlbGVkTGF5ZXJCbGVuZGluZ3MpfVxuICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgKTtcbn07XG5cbi8vIG1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbHdheXMgdmlzaWJsZSB3aGlsZSBpcyBiZWluZyBkcmFnZ2VkXG4vLyBpdGVtIGJlaW5nIGRyYWdnZWQgaXMgYXBwZW5kZWQgaW4gYm9keSwgaGVyZSB0byByZXNldCBpdHMgZ2xvYmFsIHN0eWxlXG5jb25zdCBTb3J0YWJsZVN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclogKyAxfTtcblxuICAmLnNvcnRpbmcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgJi5zb3J0aW5nLWxheWVycyAubGF5ZXItcGFuZWxfX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFdlaWdodH07XG4gICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRTaXplfTtcbiAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0fTtcbiAgICAqLFxuICAgICo6YmVmb3JlLFxuICAgICo6YWZ0ZXIge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLmxheWVyX19kcmFnLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZERhdGFCdXR0b25GYWN0b3J5KCkge1xuICBjb25zdCBBZGREYXRhQnV0dG9uID0gKHtvbkNsaWNrLCBpc0luYWN0aXZlfSkgPT4gKFxuICAgIDxCdXR0b25cbiAgICAgIGNsYXNzTmFtZT1cImFkZC1kYXRhLWJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgaXNJbmFjdGl2ZT17IWlzSW5hY3RpdmV9XG4gICAgICB3aWR0aD1cIjEwNXB4XCJcbiAgICAgIHNlY29uZGFyeVxuICAgID5cbiAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2xheWVyTWFuYWdlci5hZGREYXRhJ30gLz5cbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gQWRkRGF0YUJ1dHRvbjtcbn1cblxuTGF5ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW0FkZERhdGFCdXR0b25GYWN0b3J5LCBMYXllclBhbmVsRmFjdG9yeSwgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5XTtcblxuZnVuY3Rpb24gTGF5ZXJNYW5hZ2VyRmFjdG9yeShBZGREYXRhQnV0dG9uLCBMYXllclBhbmVsLCBTb3VyY2VEYXRhQ2F0YWxvZykge1xuICAvLyBCeSB3cmFwcGluZyBsYXllciBwYW5lbCB1c2luZyBhIHNvcnRhYmxlIGVsZW1lbnQgd2UgZG9uJ3QgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIGRyYWcgYW5kIGRyb3AgbG9naWMgaW50byB0aGUgcGFuZWwgaXRzZWxmO1xuICAvLyBEZXZlbG9wZXJzIGNhbiBwcm92aWRlIGFueSBsYXllciBwYW5lbCBpbXBsZW1lbnRhdGlvbiBhbmQgaXQgd2lsbCBzdGlsbCBiZSBzb3J0YWJsZVxuICBjb25zdCBTb3J0YWJsZUl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHtjaGlsZHJlbiwgaXNTb3J0aW5nfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVTdHlsZWRJdGVtIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc29ydGFibGUtbGF5ZXItaXRlbXMnLCB7c29ydGluZzogaXNTb3J0aW5nfSl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1NvcnRhYmxlU3R5bGVkSXRlbT5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBXcmFwcGVkU29ydGFibGVDb250YWluZXIgPSBTb3J0YWJsZUNvbnRhaW5lcigoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XG4gIH0pO1xuXG4gIGNsYXNzIExheWVyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIC8vIGZ1bmN0aW9uc1xuICAgICAgYWRkTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGR1cGxpY2F0ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVtb3ZlRGF0YXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHNob3dEYXRhc2V0VGFibGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG4gICAgc3RhdGUgPSB7XG4gICAgICBpc1NvcnRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIGxheWVyQ2xhc3NTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyQ2xhc3NlcztcbiAgICBsYXllclR5cGVPcHRpb25zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmxheWVyQ2xhc3NTZWxlY3RvciwgbGF5ZXJDbGFzc2VzID0+XG4gICAgICBPYmplY3Qua2V5cyhsYXllckNsYXNzZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBsYXllckNsYXNzZXNba2V5XSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgbGFiZWw6IGxheWVyLm5hbWUsXG4gICAgICAgICAgaWNvbjogbGF5ZXIubGF5ZXJJY29uLFxuICAgICAgICAgIHJlcXVpcmVEYXRhOiBsYXllci5yZXF1aXJlRGF0YVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgX2FkZEVtcHR5TmV3TGF5ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmFkZExheWVyKCk7XG4gICAgfTtcblxuICAgIF9oYW5kbGVTb3J0ID0gKHtvbGRJbmRleCwgbmV3SW5kZXh9KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUxheWVyT3JkZXIoYXJyYXlNb3ZlKHRoaXMucHJvcHMubGF5ZXJPcmRlciwgb2xkSW5kZXgsIG5ld0luZGV4KSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc1NvcnRpbmc6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIF9vblNvcnRTdGFydCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBfdXBkYXRlQmVmb3JlU29ydFN0YXJ0ID0gKHtpbmRleH0pID0+IHtcbiAgICAgIC8vIGlmIGxheWVyIGNvbmZpZyBpcyBhY3RpdmUsIGNsb3NlIGl0XG4gICAgICBjb25zdCB7bGF5ZXJPcmRlciwgbGF5ZXJzLCBsYXllckNvbmZpZ0NoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgbGF5ZXJJZHggPSBsYXllck9yZGVyW2luZGV4XTtcbiAgICAgIGlmIChsYXllcnNbbGF5ZXJJZHhdLmNvbmZpZy5pc0NvbmZpZ0FjdGl2ZSkge1xuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZShsYXllcnNbbGF5ZXJJZHhdLCB7aXNDb25maWdBY3RpdmU6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtsYXllcnMsIGRhdGFzZXRzLCBsYXllck9yZGVyLCBvcGVuTW9kYWwsIGludGx9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoZGF0YXNldHMpWzBdO1xuICAgICAgY29uc3QgbGF5ZXJUeXBlT3B0aW9ucyA9IHRoaXMubGF5ZXJUeXBlT3B0aW9uc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCBsYXllckFjdGlvbnMgPSB7XG4gICAgICAgIGxheWVyQ29sb3JVSUNoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbG9yVUlDaGFuZ2UsXG4gICAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclR5cGVDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJUeXBlQ2hhbmdlLFxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUZXh0TGFiZWxDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJUZXh0TGFiZWxDaGFuZ2UsXG4gICAgICAgIHJlbW92ZUxheWVyOiB0aGlzLnByb3BzLnJlbW92ZUxheWVyLFxuICAgICAgICBkdXBsaWNhdGVMYXllcjogdGhpcy5wcm9wcy5kdXBsaWNhdGVMYXllclxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGFuZWxQcm9wcyA9IHtcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIG9wZW5Nb2RhbCxcbiAgICAgICAgbGF5ZXJUeXBlT3B0aW9uc1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1tYW5hZ2VyXCI+XG4gICAgICAgICAgPFNvdXJjZURhdGFDYXRhbG9nXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICByZW1vdmVEYXRhc2V0PXt0aGlzLnByb3BzLnJlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICBzaG93RGVsZXRlRGF0YXNldFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFkZERhdGFCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkRGF0YU1vZGFsfSBpc0luYWN0aXZlPXshZGVmYXVsdERhdGFzZXR9IC8+XG4gICAgICAgICAgPFNpZGVQYW5lbERpdmlkZXIgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDxXcmFwcGVkU29ydGFibGVDb250YWluZXJcbiAgICAgICAgICAgICAgb25Tb3J0RW5kPXt0aGlzLl9oYW5kbGVTb3J0fVxuICAgICAgICAgICAgICBvblNvcnRTdGFydD17dGhpcy5fb25Tb3J0U3RhcnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUJlZm9yZVNvcnRTdGFydD17dGhpcy5fdXBkYXRlQmVmb3JlU29ydFN0YXJ0fVxuICAgICAgICAgICAgICBsb2NrQXhpcz1cInlcIlxuICAgICAgICAgICAgICBoZWxwZXJDbGFzcz1cInNvcnRpbmctbGF5ZXJzXCJcbiAgICAgICAgICAgICAgdXNlRHJhZ0hhbmRsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXJPcmRlci5tYXAoXG4gICAgICAgICAgICAgICAgKGxheWVySWR4LCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICFsYXllcnNbbGF5ZXJJZHhdLmNvbmZpZy5oaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8U29ydGFibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgbGF5ZXItJHtsYXllcklkeH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBpc1NvcnRpbmc9e3RoaXMuc3RhdGUuaXNTb3J0aW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPExheWVyUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYW5lbFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnREYXRhPXtsYXllcklkeH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXJzW2xheWVySWR4XS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeD17bGF5ZXJJZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJzW2xheWVySWR4XX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NvcnRhYmxlSXRlbT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyPlxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIHtkZWZhdWx0RGF0YXNldCA/IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtbGF5ZXItYnV0dG9uXCIgb25DbGljaz17dGhpcy5fYWRkRW1wdHlOZXdMYXllcn0gd2lkdGg9XCIxMDVweFwiPlxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllck1hbmFnZXIuYWRkTGF5ZXInfSAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8TGF5ZXJCbGVuZGluZ1NlbGVjdG9yXG4gICAgICAgICAgICBsYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLmxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICBpbnRsPXtpbnRsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluamVjdEludGwoTGF5ZXJNYW5hZ2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==