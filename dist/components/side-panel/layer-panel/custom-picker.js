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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactColor = require("react-color");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reselect = require("reselect");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// This was put in because 3rd party library react-color doesn't yet cater for customized color of child component <SketchField> which contains HEX/RGB input text box
// Issue raised: https://github.com/casesandberg/react-color/issues/631
var StyledPicker = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .sketch-picker {\n    span {\n      color: ", " !important;\n      font-family: ", ";\n    }\n    input {\n      text-align: center;\n      font-family: ", ";\n      color: ", " !important;\n      border-color: ", " !important;\n      box-shadow: none !important;\n      background-color: ", " !important;\n    }\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.inputColor;
}, function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.theme.inputBgdHover;
});

var PRESET_COLORS = [];

var CustomPicker = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPicker, _Component);

  var _super = _createSuper(CustomPicker);

  function CustomPicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
      return props.theme;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pickerStyleSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
      return {
        picker: {
          width: '200px',
          padding: '10px 10px 8px',
          boxSizing: 'initial',
          background: theme.panelBackground
        }
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      _this.props.onSwatchClose();
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onChange = _this$props.onChange;
      /** @type {any} - TS complains this doesn't match SketchPickerStylesProps */

      var pickerStyle = this.pickerStyleSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledPicker, null, /*#__PURE__*/_react["default"].createElement(_reactColor.SketchPicker, {
        color: color,
        onChange: onChange,
        presetColors: PRESET_COLORS,
        styles: pickerStyle,
        disableAlpha: true
      }));
    }
  }]);
  return CustomPicker;
}(_react.Component);

(0, _defineProperty2["default"])(CustomPicker, "propTypes", {
  color: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onSwatchClose: _propTypes["default"].func
});

var _default = (0, _styledComponents.withTheme)((0, _reactOnclickoutside["default"])(CustomPicker));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY3VzdG9tLXBpY2tlci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRQaWNrZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGFiZWxDb2xvciIsImZvbnRGYW1pbHkiLCJpbnB1dENvbG9yIiwic2Vjb25kYXJ5SW5wdXRCZ2QiLCJpbnB1dEJnZEhvdmVyIiwiUFJFU0VUX0NPTE9SUyIsIkN1c3RvbVBpY2tlciIsInRoZW1lU2VsZWN0b3IiLCJwaWNrZXIiLCJ3aWR0aCIsInBhZGRpbmciLCJib3hTaXppbmciLCJiYWNrZ3JvdW5kIiwicGFuZWxCYWNrZ3JvdW5kIiwiZSIsIm9uU3dhdGNoQ2xvc2UiLCJjb2xvciIsIm9uQ2hhbmdlIiwicGlja2VyU3R5bGUiLCJwaWNrZXJTdHlsZVNlbGVjdG9yIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyw2QkFBT0MsR0FBViwwWkFHSCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FIRixFQUlHLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsVUFBaEI7QUFBQSxDQUpSLEVBUUcsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxVQUFoQjtBQUFBLENBUlIsRUFTSCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFVBQWhCO0FBQUEsQ0FURixFQVVJLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksaUJBQWhCO0FBQUEsQ0FWVCxFQVlRLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssYUFBaEI7QUFBQSxDQVpiLENBQWxCOztBQWlCQSxJQUFNQyxhQUFhLEdBQUcsRUFBdEI7O0lBRU1DLFk7Ozs7Ozs7Ozs7Ozs7OztzR0FPWSxVQUFBUixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsSzs0R0FDQyw4QkFBZSxNQUFLUSxhQUFwQixFQUFtQyxVQUFBUixLQUFLO0FBQUEsYUFBSztBQUNqRVMsUUFBQUEsTUFBTSxFQUFFO0FBQ05DLFVBQUFBLEtBQUssRUFBRSxPQUREO0FBRU5DLFVBQUFBLE9BQU8sRUFBRSxlQUZIO0FBR05DLFVBQUFBLFNBQVMsRUFBRSxTQUhMO0FBSU5DLFVBQUFBLFVBQVUsRUFBRWIsS0FBSyxDQUFDYztBQUpaO0FBRHlELE9BQUw7QUFBQSxLQUF4QyxDOzJHQVNELFVBQUFDLENBQUMsRUFBSTtBQUN4QixZQUFLaEIsS0FBTCxDQUFXaUIsYUFBWDtBQUNELEs7Ozs7OztXQUVELGtCQUFTO0FBQ1Asd0JBQTBCLEtBQUtqQixLQUEvQjtBQUFBLFVBQU9rQixLQUFQLGVBQU9BLEtBQVA7QUFBQSxVQUFjQyxRQUFkLGVBQWNBLFFBQWQ7QUFDQTs7QUFDQSxVQUFNQyxXQUFXLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUIsS0FBS3JCLEtBQTlCLENBQXBCO0FBQ0EsMEJBQ0UsZ0NBQUMsWUFBRCxxQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFFa0IsS0FEVDtBQUVFLFFBQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsUUFBQSxZQUFZLEVBQUVaLGFBSGhCO0FBSUUsUUFBQSxNQUFNLEVBQUVhLFdBSlY7QUFLRSxRQUFBLFlBQVk7QUFMZCxRQURGLENBREY7QUFXRDs7O0VBcEN3QkUsZ0I7O2lDQUFyQmQsWSxlQUNlO0FBQ2pCVSxFQUFBQSxLQUFLLEVBQUVLLHNCQUFVQyxNQURBO0FBRWpCTCxFQUFBQSxRQUFRLEVBQUVJLHNCQUFVRSxJQUZIO0FBR2pCUixFQUFBQSxhQUFhLEVBQUVNLHNCQUFVRTtBQUhSLEM7O2VBc0NOLGlDQUFVLHFDQUFlakIsWUFBZixDQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1NrZXRjaFBpY2tlcn0gZnJvbSAncmVhY3QtY29sb3InO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0Jztcbi8vIFRoaXMgd2FzIHB1dCBpbiBiZWNhdXNlIDNyZCBwYXJ0eSBsaWJyYXJ5IHJlYWN0LWNvbG9yIGRvZXNuJ3QgeWV0IGNhdGVyIGZvciBjdXN0b21pemVkIGNvbG9yIG9mIGNoaWxkIGNvbXBvbmVudCA8U2tldGNoRmllbGQ+IHdoaWNoIGNvbnRhaW5zIEhFWC9SR0IgaW5wdXQgdGV4dCBib3hcbi8vIElzc3VlIHJhaXNlZDogaHR0cHM6Ly9naXRodWIuY29tL2Nhc2VzYW5kYmVyZy9yZWFjdC1jb2xvci9pc3N1ZXMvNjMxXG5cbmNvbnN0IFN0eWxlZFBpY2tlciA9IHN0eWxlZC5kaXZgXG4gIC5za2V0Y2gtcGlja2VyIHtcbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkfSAhaW1wb3J0YW50O1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEJnZEhvdmVyfSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUFJFU0VUX0NPTE9SUyA9IFtdO1xuXG5jbGFzcyBDdXN0b21QaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN3YXRjaENsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcbiAgcGlja2VyU3R5bGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMudGhlbWVTZWxlY3RvciwgdGhlbWUgPT4gKHtcbiAgICBwaWNrZXI6IHtcbiAgICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgICAgcGFkZGluZzogJzEwcHggMTBweCA4cHgnLFxuICAgICAgYm94U2l6aW5nOiAnaW5pdGlhbCcsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYW5lbEJhY2tncm91bmRcbiAgICB9XG4gIH0pKTtcblxuICBoYW5kbGVDbGlja091dHNpZGUgPSBlID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU3dhdGNoQ2xvc2UoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2NvbG9yLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIC8qKiBAdHlwZSB7YW55fSAtIFRTIGNvbXBsYWlucyB0aGlzIGRvZXNuJ3QgbWF0Y2ggU2tldGNoUGlja2VyU3R5bGVzUHJvcHMgKi9cbiAgICBjb25zdCBwaWNrZXJTdHlsZSA9IHRoaXMucGlja2VyU3R5bGVTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFBpY2tlcj5cbiAgICAgICAgPFNrZXRjaFBpY2tlclxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgcHJlc2V0Q29sb3JzPXtQUkVTRVRfQ09MT1JTfVxuICAgICAgICAgIHN0eWxlcz17cGlja2VyU3R5bGV9XG4gICAgICAgICAgZGlzYWJsZUFscGhhXG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZFBpY2tlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShvbkNsaWNrT3V0c2lkZShDdXN0b21QaWNrZXIpKTtcbiJdfQ==