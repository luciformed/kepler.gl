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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _brushConfig = _interopRequireDefault(require("./brush-config"));

var _tooltipConfig = _interopRequireDefault(require("./tooltip-config"));

var _styledComponents2 = require("../../common/styled-components");

var _localization = require("../../../localization");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 6px;\n"])));

InteractionPanelFactory.deps = [_tooltipConfig["default"], _brushConfig["default"]];

function InteractionPanelFactory(TooltipConfig, BrushConfig) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(InteractionPanel, _Component);

    var _super = _createSuper(InteractionPanel);

    function InteractionPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, InteractionPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isConfigActive: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (newProp) {
        _this.props.onConfigChange(_objectSpread(_objectSpread({}, _this.props.config), newProp));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_enableConfig", function () {
        _this.setState({
          isConfigActive: !_this.state.isConfigActive
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(InteractionPanel, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            config = _this$props.config,
            datasets = _this$props.datasets;

        var onChange = function onChange(newConfig) {
          return _this2._updateConfig({
            config: newConfig
          });
        };

        var template = null;

        switch (config.id) {
          case 'tooltip':
            template = /*#__PURE__*/_react["default"].createElement(TooltipConfig, {
              datasets: datasets,
              config: config.config,
              onChange: onChange
            });
            break;

          case 'brush':
            template = /*#__PURE__*/_react["default"].createElement(BrushConfig, {
              config: config.config,
              onChange: onChange
            });
            break;

          default:
            break;
        }

        return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
          className: "interaction-panel"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelHeader, {
          className: "interaction-panel__header",
          onClick: this._enableConfig
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
          className: "interaction-panel__header__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__icon icon"
        }, /*#__PURE__*/_react["default"].createElement(config.iconComponent, {
          height: "16px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__title"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: config.label
        })))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__actions"
        }, /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          checked: config.enabled,
          id: "".concat(config.id, "-toggle"),
          onChange: function onChange() {
            return _this2._updateConfig({
              enabled: !config.enabled
            });
          },
          secondary: true
        }))), config.enabled && template && /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelContent, {
          className: "interaction-panel__content"
        }, template));
      }
    }]);
    return InteractionPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    config: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = InteractionPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSW50ZXJhY3Rpb25QYW5lbCIsInN0eWxlZCIsImRpdiIsIkludGVyYWN0aW9uUGFuZWxGYWN0b3J5IiwiZGVwcyIsIlRvb2x0aXBDb25maWdGYWN0b3J5IiwiQnJ1c2hDb25maWdGYWN0b3J5IiwiVG9vbHRpcENvbmZpZyIsIkJydXNoQ29uZmlnIiwiaXNDb25maWdBY3RpdmUiLCJuZXdQcm9wIiwicHJvcHMiLCJvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhc2V0cyIsIm9uQ2hhbmdlIiwibmV3Q29uZmlnIiwiX3VwZGF0ZUNvbmZpZyIsInRlbXBsYXRlIiwiaWQiLCJfZW5hYmxlQ29uZmlnIiwibGFiZWwiLCJlbmFibGVkIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHNCQUFzQixHQUFHQyw2QkFBT0MsR0FBVixnSEFBNUI7O0FBSUFDLHVCQUF1QixDQUFDQyxJQUF4QixHQUErQixDQUFDQyx5QkFBRCxFQUF1QkMsdUJBQXZCLENBQS9COztBQUVBLFNBQVNILHVCQUFULENBQWlDSSxhQUFqQyxFQUFnREMsV0FBaEQsRUFBNkQ7QUFBQTs7QUFDM0Q7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdHQU9VO0FBQUNDLFFBQUFBLGNBQWMsRUFBRTtBQUFqQixPQVBWO0FBQUEsd0dBU2tCLFVBQUFDLE9BQU8sRUFBSTtBQUN6QixjQUFLQyxL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MDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5cbmltcG9ydCBCcnVzaENvbmZpZ0ZhY3RvcnkgZnJvbSAnLi9icnVzaC1jb25maWcnO1xuaW1wb3J0IFRvb2x0aXBDb25maWdGYWN0b3J5IGZyb20gJy4vdG9vbHRpcC1jb25maWcnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRQYW5lbEhlYWRlcixcbiAgUGFuZWxIZWFkZXJUaXRsZSxcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxuICBQYW5lbENvbnRlbnRcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5jb25zdCBTdHlsZWRJbnRlcmFjdGlvblBhbmVsID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbmA7XG5cbkludGVyYWN0aW9uUGFuZWxGYWN0b3J5LmRlcHMgPSBbVG9vbHRpcENvbmZpZ0ZhY3RvcnksIEJydXNoQ29uZmlnRmFjdG9yeV07XG5cbmZ1bmN0aW9uIEludGVyYWN0aW9uUGFuZWxGYWN0b3J5KFRvb2x0aXBDb25maWcsIEJydXNoQ29uZmlnKSB7XG4gIHJldHVybiBjbGFzcyBJbnRlcmFjdGlvblBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgb25Db25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7aXNDb25maWdBY3RpdmU6IGZhbHNlfTtcblxuICAgIF91cGRhdGVDb25maWcgPSBuZXdQcm9wID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25Db25maWdDaGFuZ2Uoe1xuICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcbiAgICAgICAgLi4ubmV3UHJvcFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9lbmFibGVDb25maWcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0NvbmZpZ0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNDb25maWdBY3RpdmV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2NvbmZpZywgZGF0YXNldHN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG9uQ2hhbmdlID0gbmV3Q29uZmlnID0+IHRoaXMuX3VwZGF0ZUNvbmZpZyh7Y29uZmlnOiBuZXdDb25maWd9KTtcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgIHN3aXRjaCAoY29uZmlnLmlkKSB7XG4gICAgICAgIGNhc2UgJ3Rvb2x0aXAnOlxuICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgPFRvb2x0aXBDb25maWcgZGF0YXNldHM9e2RhdGFzZXRzfSBjb25maWc9e2NvbmZpZy5jb25maWd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2JydXNoJzpcbiAgICAgICAgICB0ZW1wbGF0ZSA9IDxCcnVzaENvbmZpZyBjb25maWc9e2NvbmZpZy5jb25maWd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz47XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEludGVyYWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxcIj5cbiAgICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXIgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlclwiIG9uQ2xpY2s9e3RoaXMuX2VuYWJsZUNvbmZpZ30+XG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX19pY29uIGljb25cIj5cbiAgICAgICAgICAgICAgICA8Y29uZmlnLmljb25Db21wb25lbnQgaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17Y29uZmlnLmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgIDwvUGFuZWxIZWFkZXJUaXRsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyQ29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlcl9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZWR9XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2NvbmZpZy5pZH0tdG9nZ2xlYH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5fdXBkYXRlQ29uZmlnKHtlbmFibGVkOiAhY29uZmlnLmVuYWJsZWR9KX1cbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxIZWFkZXI+XG4gICAgICAgICAge2NvbmZpZy5lbmFibGVkICYmIHRlbXBsYXRlICYmIChcbiAgICAgICAgICAgIDxQYW5lbENvbnRlbnQgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2NvbnRlbnRcIj57dGVtcGxhdGV9PC9QYW5lbENvbnRlbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdHlsZWRJbnRlcmFjdGlvblBhbmVsPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aW9uUGFuZWxGYWN0b3J5O1xuIl19