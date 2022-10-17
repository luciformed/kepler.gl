"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PanelHeaderActionFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../localization");

var _styledComponents2 = require("../common/styled-components");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HeaderActionWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", "px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n"])), function (props) {
  return props.flush ? 0 : 8;
}, function (props) {
  return props.active ? props.theme.panelHeaderIconActive : props.theme.panelHeaderIcon;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.panelHeaderIconHover;
});

PanelHeaderActionFactory.deps = []; // Need to use react class to access props.component

function PanelHeaderActionFactory() {
  var PanelHeaderAction = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PanelHeaderAction, _Component);

    var _super = _createSuper(PanelHeaderAction);

    function PanelHeaderAction() {
      (0, _classCallCheck2["default"])(this, PanelHeaderAction);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(PanelHeaderAction, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onClick = _this$props.onClick,
            tooltip = _this$props.tooltip,
            id = _this$props.id,
            active = _this$props.active,
            flush = _this$props.flush,
            hoverColor = _this$props.hoverColor,
            tooltipType = _this$props.tooltipType,
            disabled = _this$props.disabled,
            className = _this$props.className;
        return /*#__PURE__*/_react["default"].createElement(HeaderActionWrapper, {
          className: (0, _classnames2["default"])('panel--header__action', (0, _defineProperty2["default"])({
            disabled: disabled
          }, className, className)),
          active: active,
          hoverColor: hoverColor,
          flush: flush
        }, /*#__PURE__*/_react["default"].createElement(this.props.IconComponent, {
          "data-tip": true,
          "data-for": "".concat(tooltip, "_").concat(id),
          height: "16px",
          onClick: onClick
        }), tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
          id: "".concat(tooltip, "_").concat(id),
          effect: "solid",
          delayShow: 500,
          type: tooltipType
        }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: tooltip
        }))) : null);
      }
    }]);
    return PanelHeaderAction;
  }(_react.Component);

  (0, _defineProperty2["default"])(PanelHeaderAction, "propTypes", {
    id: _propTypes["default"].string,
    flush: _propTypes["default"].bool,
    tooltip: _propTypes["default"].string,
    onClick: _propTypes["default"].func,
    active: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    hoverColor: _propTypes["default"].string,
    className: _propTypes["default"].string,
    tooltipType: _propTypes["default"].string
  });
  (0, _defineProperty2["default"])(PanelHeaderAction, "defaultProps", {
    onClick: function onClick() {},
    hoverColor: null,
    active: false
  });
  return PanelHeaderAction;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJBY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbHVzaCIsImFjdGl2ZSIsInRoZW1lIiwicGFuZWxIZWFkZXJJY29uQWN0aXZlIiwicGFuZWxIZWFkZXJJY29uIiwiaG92ZXJDb2xvciIsInBhbmVsSGVhZGVySWNvbkhvdmVyIiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiZGVwcyIsIlBhbmVsSGVhZGVyQWN0aW9uIiwib25DbGljayIsInRvb2x0aXAiLCJpZCIsInRvb2x0aXBUeXBlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLDJTQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQXZCO0FBQUEsQ0FERyxFQUlkLFVBQUFELEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNFLE1BQU4sR0FBZUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUEzQixHQUFtREosS0FBSyxDQUFDRyxLQUFOLENBQVlFLGVBRG5EO0FBQUEsQ0FKUyxFQVNaLFVBQUFMLEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNNLFVBQU4sR0FBbUJOLEtBQUssQ0FBQ0csS0FBTixDQUFZSCxLQUFLLENBQUNNLFVBQWxCLENBQW5CLEdBQW1ETixLQUFLLENBQUNHLEtBQU4sQ0FBWUksb0JBRG5EO0FBQUEsQ0FUTyxDQUF6Qjs7QUFtQkFDLHdCQUF3QixDQUFDQyxJQUF6QixHQUFnQyxFQUFoQyxDLENBQ0E7O0FBQ2UsU0FBU0Qsd0JBQVQsR0FBb0M7QUFBQSxNQUMzQ0UsaUJBRDJDO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBb0IvQyxrQkFBUztBQUNQLDBCQVVJLEtBQUtWLEtBVlQ7QUFBQSxZQUNFVyxPQURGLGVBQ0VBLE9BREY7QUFBQSxZQUVFQyxPQUZGLGVBRUVBLE9BRkY7QUFBQSxZQUdFQyxFQUhGLGVBR0VBLEVBSEY7QUFBQSxZQUlFWCxNQUpGLGVBSUVBLE1BSkY7QUFBQSxZQUtFRCxLQUxGLGVBS0VBLEtBTEY7QUFBQSxZQU1FSyxVQU5GLGVBTUVBLFVBTkY7QUFBQSxZQU9FUSxXQVBGLGVBT0VBLFdBUEY7QUFBQSxZQVFFQyxRQVJGLGVBUUVBLFFBUkY7QUFBQSxZQVNFQyxTQVRGLGVBU0VBLFNBVEY7QUFXQSw0QkFDRSxnQ0FBQyxtQkFBRDtBQUNFLFVBQUEsU0FBUyxFQUFFLDZCQUFXLHVCQUFYO0FBQXFDRCxZQUFBQSxRQUFRLEVBQVJBO0FBQXJDLGFBQWdEQyxTQUFoRCxFQUE0REEsU0FBNUQsRUFEYjtBQUVFLFVBQUEsTUFBTSxFQUFFZCxNQUZWO0FBR0UsVUFBQSxVQUFVLEVBQUVJLFVBSGQ7QUFJRSxVQUFBLEtBQUssRUFBRUw7QUFKVCx3QkFNRSxxQ0FBTSxLQUFOLENBQVksYUFBWjtBQUNFLDBCQURGO0FBRUUsZ0NBQWFXLE9BQWIsY0FBd0JDLEVBQXhCLENBRkY7QUFHRSxVQUFBLE1BQU0sRUFBQyxNQUhUO0FBSUUsVUFBQSxPQUFPLEVBQUVGO0FBSlgsVUFORixFQVlHQyxPQUFPLGdCQUNOLGdDQUFDLDBCQUFEO0FBQVMsVUFBQSxFQUFFLFlBQUtBLE9BQUwsY0FBZ0JDLEVBQWhCLENBQVg7QUFBaUMsVUFBQSxNQUFNLEVBQUMsT0FBeEM7QUFBZ0QsVUFBQSxTQUFTLEVBQUUsR0FBM0Q7QUFBZ0UsVUFBQSxJQUFJLEVBQUVDO0FBQXRFLHdCQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFRjtBQUF0QixVQURGLENBREYsQ0FETSxHQU1KLElBbEJOLENBREY7QUFzQkQ7QUF0RDhDO0FBQUE7QUFBQSxJQUNqQkssZ0JBRGlCOztBQUFBLG1DQUMzQ1AsaUJBRDJDLGVBRTVCO0FBQ2pCRyxJQUFBQSxFQUFFLEVBQUVLLHNCQUFVQyxNQURHO0FBRWpCbEIsSUFBQUEsS0FBSyxFQUFFaUIsc0JBQVVFLElBRkE7QUFHakJSLElBQUFBLE9BQU8sRUFBRU0sc0JBQVVDLE1BSEY7QUFJakJSLElBQUFBLE9BQU8sRUFBRU8sc0JBQVVHLElBSkY7QUFLakJuQixJQUFBQSxNQUFNLEVBQUVnQixzQkFBVUUsSUFMRDtBQU1qQkwsSUFBQUEsUUFBUSxFQUFFRyxzQkFBVUUsSUFOSDtBQU9qQmQsSUFBQUEsVUFBVSxFQUFFWSxzQkFBVUMsTUFQTDtBQVFqQkgsSUFBQUEsU0FBUyxFQUFFRSxzQkFBVUMsTUFSSjtBQVNqQkwsSUFBQUEsV0FBVyxFQUFFSSxzQkFBVUM7QUFUTixHQUY0QjtBQUFBLG1DQUMzQ1QsaUJBRDJDLGtCQWN6QjtBQUNwQkMsSUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FERztBQUVwQkwsSUFBQUEsVUFBVSxFQUFFLElBRlE7QUFHcEJKLElBQUFBLE1BQU0sRUFBRTtBQUhZLEdBZHlCO0FBd0RqRCxTQUFPUSxpQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIZWFkZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzLmZsdXNoID8gMCA6IDgpfXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbkFjdGl2ZSA6IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn07XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmhvdmVyQ29sb3IgPyBwcm9wcy50aGVtZVtwcm9wcy5ob3ZlckNvbG9yXSA6IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbkhvdmVyfTtcbiAgfVxuXG4gICYuZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuYDtcblxuUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5LmRlcHMgPSBbXTtcbi8vIE5lZWQgdG8gdXNlIHJlYWN0IGNsYXNzIHRvIGFjY2VzcyBwcm9wcy5jb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeSgpIHtcbiAgY2xhc3MgUGFuZWxIZWFkZXJBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGZsdXNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBob3ZlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdG9vbHRpcFR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgICAgaG92ZXJDb2xvcjogbnVsbCxcbiAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvbkNsaWNrLFxuICAgICAgICB0b29sdGlwLFxuICAgICAgICBpZCxcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBmbHVzaCxcbiAgICAgICAgaG92ZXJDb2xvcixcbiAgICAgICAgdG9vbHRpcFR5cGUsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlckFjdGlvbldyYXBwZXJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BhbmVsLS1oZWFkZXJfX2FjdGlvbicsIHtkaXNhYmxlZCwgW2NsYXNzTmFtZV06IGNsYXNzTmFtZX0pfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgIGhvdmVyQ29sb3I9e2hvdmVyQ29sb3J9XG4gICAgICAgICAgZmx1c2g9e2ZsdXNofVxuICAgICAgICA+XG4gICAgICAgICAgPHRoaXMucHJvcHMuSWNvbkNvbXBvbmVudFxuICAgICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICAgIGRhdGEtZm9yPXtgJHt0b29sdGlwfV8ke2lkfWB9XG4gICAgICAgICAgICBoZWlnaHQ9XCIxNnB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dG9vbHRpcCA/IChcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHt0b29sdGlwfV8ke2lkfWB9IGVmZmVjdD1cInNvbGlkXCIgZGVsYXlTaG93PXs1MDB9IHR5cGU9e3Rvb2x0aXBUeXBlfT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3Rvb2x0aXB9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9IZWFkZXJBY3Rpb25XcmFwcGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFBhbmVsSGVhZGVyQWN0aW9uO1xufVxuIl19