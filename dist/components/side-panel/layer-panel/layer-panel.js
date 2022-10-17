"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PanelWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n\n  &.dragging {\n    cursor: move;\n  }\n"])));

LayerPanelFactory.deps = [_layerConfigurator["default"], _layerPanelHeader["default"]];

function LayerPanelFactory(LayerConfigurator, LayerPanelHeader) {
  var LayerPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    var _super = _createSuper(LayerPanel);

    function LayerPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerColorUI", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerColorUIChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props2;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$props2 = _this.props).layerTextLabelChange.apply(_this$props2, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_duplicateLayer", function (e) {
        e.stopPropagation();

        _this.props.duplicateLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            layer = _this$props3.layer,
            datasets = _this$props3.datasets,
            layerTypeOptions = _this$props3.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;
        return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, /*#__PURE__*/_react["default"].createElement(LayerPanelHeader, {
          isConfigActive: isConfigActive,
          layerId: layer.id,
          isVisible: config.isVisible,
          label: config.label,
          labelRCGColorValues: config.dataId ? datasets[config.dataId].color : null,
          layerType: layer.type,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer,
          onDuplicateLayer: this._duplicateLayer
        }), isConfigActive && /*#__PURE__*/_react["default"].createElement(LayerConfigurator, {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerColorUI: this.updateLayerColorUI,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerPanel, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    idx: _propTypes["default"].number.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    duplicateLayer: _propTypes["default"].func.isRequired,
    onCloseConfig: _propTypes["default"].func,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerColorUIChange: _propTypes["default"].func.isRequired,
    setLayerAnimationTime: _propTypes["default"].func,
    updateLayerAnimationSpeed: _propTypes["default"].func
  });
  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJMYXllckNvbmZpZ3VyYXRvciIsIkxheWVyUGFuZWxIZWFkZXIiLCJMYXllclBhbmVsIiwibmV3UHJvcCIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1R5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImFyZ3MiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZHVwbGljYXRlTGF5ZXIiLCJkYXRhc2V0cyIsImxheWVyVHlwZU9wdGlvbnMiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uTW91c2VEb3duIiwib25Ub3VjaFN0YXJ0IiwiaWQiLCJkYXRhSWQiLCJjb2xvciIsInR5cGUiLCJfdG9nZ2xlRW5hYmxlQ29uZmlnIiwiX3RvZ2dsZVZpc2liaWxpdHkiLCJfdXBkYXRlTGF5ZXJMYWJlbCIsIl9yZW1vdmVMYXllciIsIl9kdXBsaWNhdGVMYXllciIsIm9wZW5Nb2RhbCIsInVwZGF0ZUxheWVyQ29sb3JVSSIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsInVwZGF0ZUxheWVyVHlwZSIsInVwZGF0ZUxheWVyVGV4dExhYmVsIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsIm9uQ2xvc2VDb25maWciLCJhcnJheU9mIiwiYW55Iiwic2V0TGF5ZXJBbmltYXRpb25UaW1lIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLHNOQUFsQjs7QUFXQUMsaUJBQWlCLENBQUNDLElBQWxCLEdBQXlCLENBQUNDLDZCQUFELEVBQTJCQyw0QkFBM0IsQ0FBekI7O0FBRUEsU0FBU0gsaUJBQVQsQ0FBMkJJLGlCQUEzQixFQUE4Q0MsZ0JBQTlDLEVBQWdFO0FBQUEsTUFDeERDLFVBRHdEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw0R0FvQnhDLFVBQUFDLE9BQU8sRUFBSTtBQUM3QixjQUFLQyxLQUFMLENBQVdDLGlCQUFYLENBQTZCLE1BQUtELEtBQUwsQ0FBV0UsS0FBeEMsRUFBK0NILE9BQS9DO0FBQ0QsT0F0QjJEO0FBQUEsMEdBd0IxQyxVQUFBSSxPQUFPLEVBQUk7QUFDM0IsY0FBS0gsS0FBTCxDQUFXSSxlQUFYLENBQTJCLE1BQUtKLEtBQUwsQ0FBV0UsS0FBdEMsRUFBNkNDLE9BQTdDO0FBQ0QsT0ExQjJEO0FBQUEsK0dBNEJyQyxVQUFBRSxZQUFZLEVBQUk7QUFDckMsY0FBS0wsS0FBTCxDQUFXTSxvQkFBWCxDQUFnQyxNQUFLTixLQUFMLENBQVdFLEtBQTNDLEVBQWtERyxZQUFsRDtBQUNELE9BOUIyRDtBQUFBLDZHQWdDdkMsWUFBYTtBQUFBOztBQUFBLDJDQUFURSxJQUFTO0FBQVRB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QyxVQUZWO0FBR2pCMUIsSUFBQUEsR0FBRyxFQUFFd0Isc0JBQVVHLE1BQVYsQ0FBaUJELFVBSEw7QUFJakJqRCxJQUFBQSxpQkFBaUIsRUFBRStDLHNCQUFVSSxJQUFWLENBQWVGLFVBSmpCO0FBS2pCOUMsSUFBQUEsZUFBZSxFQUFFNEMsc0JBQVVJLElBQVYsQ0FBZUYsVUFMZjtBQU1qQlQsSUFBQUEsU0FBUyxFQUFFTyxzQkFBVUksSUFBVixDQUFlRixVQU5UO0FBT2pCM0IsSUFBQUEsV0FBVyxFQUFFeUIsc0JBQVVJLElBQVYsQ0FBZUYsVUFQWDtBQVFqQnpCLElBQUFBLGNBQWMsRUFBRXVCLHNCQUFVSSxJQUFWLENBQWVGLFVBUmQ7QUFTakJHLElBQUFBLGFBQWEsRUFBRUwsc0JBQVVJLElBVFI7QUFVakJ6QixJQUFBQSxnQkFBZ0IsRUFBRXFCLHNCQUFVTSxPQUFWLENBQWtCTixzQkFBVU8sR0FBNUIsQ0FWRDtBQVdqQmpELElBQUFBLG9CQUFvQixFQUFFMEMsc0JBQVVJLElBQVYsQ0FBZUYsVUFYcEI7QUFZakJyQyxJQUFBQSw4QkFBOEIsRUFBRW1DLHNCQUFVSSxJQUFWLENBQWVGLFVBWjlCO0FBYWpCMUMsSUFBQUEsa0JBQWtCLEVBQUV3QyxzQkFBVUksSUFBVixDQUFlRixVQWJsQjtBQWNqQk0sSUFBQUEscUJBQXFCLEVBQUVSLHNCQUFVSSxJQWRoQjtBQWVqQkssSUFBQUEseUJBQXlCLEVBQUVULHNCQUFVSTtBQWZwQixHQUZ5QztBQXVIOUQsU0FBT3RELFVBQVA7QUFDRDs7ZUFFY04saUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IExheWVyQ29uZmlndXJhdG9yRmFjdG9yeSBmcm9tICcuL2xheWVyLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9sYXllci1wYW5lbC1oZWFkZXInO1xuXG5jb25zdCBQYW5lbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xuXG4gICYuZHJhZ2dpbmcge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuYDtcblxuTGF5ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtMYXllckNvbmZpZ3VyYXRvckZhY3RvcnksIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5XTtcblxuZnVuY3Rpb24gTGF5ZXJQYW5lbEZhY3RvcnkoTGF5ZXJDb25maWd1cmF0b3IsIExheWVyUGFuZWxIZWFkZXIpIHtcbiAgY2xhc3MgTGF5ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgaWR4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZHVwbGljYXRlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvbkNsb3NlQ29uZmlnOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbG9yVUlDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzZXRMYXllckFuaW1hdGlvblRpbWU6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb25maWcgPSBuZXdQcm9wID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3UHJvcCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVHlwZSA9IG5ld1R5cGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclR5cGVDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VHlwZSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnID0gbmV3VmlzQ29uZmlnID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3VmlzQ29uZmlnKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJDb2xvclVJID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb2xvclVJQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclRleHRMYWJlbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSk7XG4gICAgfTtcblxuICAgIF91cGRhdGVMYXllckxhYmVsID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtsYWJlbDogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZVZpc2liaWxpdHkgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpc1Zpc2libGUgPSAhdGhpcy5wcm9wcy5sYXllci5jb25maWcuaXNWaXNpYmxlO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNWaXNpYmxlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVFbmFibGVDb25maWcgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxheWVyOiB7XG4gICAgICAgICAgY29uZmlnOiB7aXNDb25maWdBY3RpdmV9XG4gICAgICAgIH1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNDb25maWdBY3RpdmU6ICFpc0NvbmZpZ0FjdGl2ZX0pO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlTGF5ZXIgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZUxheWVyKHRoaXMucHJvcHMuaWR4KTtcbiAgICB9O1xuXG4gICAgX2R1cGxpY2F0ZUxheWVyID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5kdXBsaWNhdGVMYXllcih0aGlzLnByb3BzLmlkeCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtsYXllciwgZGF0YXNldHMsIGxheWVyVHlwZU9wdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7aXNDb25maWdBY3RpdmV9ID0gY29uZmlnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWxXcmFwcGVyXG4gICAgICAgICAgYWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BsYXllci1wYW5lbCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMub25Nb3VzZURvd259XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLnByb3BzLm9uVG91Y2hTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMYXllclBhbmVsSGVhZGVyXG4gICAgICAgICAgICBpc0NvbmZpZ0FjdGl2ZT17aXNDb25maWdBY3RpdmV9XG4gICAgICAgICAgICBsYXllcklkPXtsYXllci5pZH1cbiAgICAgICAgICAgIGlzVmlzaWJsZT17Y29uZmlnLmlzVmlzaWJsZX1cbiAgICAgICAgICAgIGxhYmVsPXtjb25maWcubGFiZWx9XG4gICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtjb25maWcuZGF0YUlkID8gZGF0YXNldHNbY29uZmlnLmRhdGFJZF0uY29sb3IgOiBudWxsfVxuICAgICAgICAgICAgbGF5ZXJUeXBlPXtsYXllci50eXBlfVxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVDb25maWc9e3RoaXMuX3RvZ2dsZUVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAgIG9uVG9nZ2xlVmlzaWJpbGl0eT17dGhpcy5fdG9nZ2xlVmlzaWJpbGl0eX1cbiAgICAgICAgICAgIG9uVXBkYXRlTGF5ZXJMYWJlbD17dGhpcy5fdXBkYXRlTGF5ZXJMYWJlbH1cbiAgICAgICAgICAgIG9uUmVtb3ZlTGF5ZXI9e3RoaXMuX3JlbW92ZUxheWVyfVxuICAgICAgICAgICAgb25EdXBsaWNhdGVMYXllcj17dGhpcy5fZHVwbGljYXRlTGF5ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXNDb25maWdBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPExheWVyQ29uZmlndXJhdG9yXG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICBvcGVuTW9kYWw9e3RoaXMucHJvcHMub3Blbk1vZGFsfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbG9yVUk9e3RoaXMudXBkYXRlTGF5ZXJDb2xvclVJfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dGhpcy51cGRhdGVMYXllckNvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ31cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUeXBlPXt0aGlzLnVwZGF0ZUxheWVyVHlwZX1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmVsV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIExheWVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxGYWN0b3J5O1xuIl19