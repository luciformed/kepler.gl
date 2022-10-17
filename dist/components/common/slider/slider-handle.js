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

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSliderHandle = _styledComponents["default"].span.attrs({
  className: 'kg-range-slider__handle'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  ", ": -", "px;\n\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  border-width: 1px;\n  border-radius: ", ";\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n\n  line-height: 10px;\n  font-size: 6px;\n  padding: 0 3px;\n  letter-spacing: 1px;\n  :after {\n    content: '", "';\n  }\n"])), function (props) {
  return props.vertical ? 'margin-left' : 'margin-top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleTextColor;
}, function (props) {
  return props.theme.sliderBorderRadius;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderInactiveBorderColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
}, function (props) {
  return props.theme.sliderHandleAfterContent;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,\n  :after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"])), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return /*#__PURE__*/_react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  var _super = _createSuper(SliderHandle);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? /*#__PURE__*/_react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])({
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        ref: this.ref,
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "propTypes", {
  sliderHandleWidth: _propTypes["default"].number,
  left: _propTypes["default"].string,
  display: _propTypes["default"].bool,
  valueListener: _propTypes["default"].func,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWhhbmRsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXJIYW5kbGUiLCJzdHlsZWQiLCJzcGFuIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInZlcnRpY2FsIiwic2xpZGVySGFuZGxlV2lkdGgiLCJ0aGVtZSIsInNsaWRlckJhckhlaWdodCIsIk51bWJlciIsImlzRmluaXRlIiwic2xpZGVySGFuZGxlSGVpZ2h0Iiwic2xpZGVySGFuZGxlU2hhZG93Iiwic2xpZGVySGFuZGxlQ29sb3IiLCJzbGlkZXJIYW5kbGVUZXh0Q29sb3IiLCJzbGlkZXJCb3JkZXJSYWRpdXMiLCJhY3RpdmUiLCJzZWxlY3RCb3JkZXJDb2xvciIsInNsaWRlckluYWN0aXZlQm9yZGVyQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwic2xpZGVySGFuZGxlQWZ0ZXJDb250ZW50IiwiU3R5bGVkU2xpZGVyVG9vbHRpcCIsImRpdiIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIlNsaWRlclRvb2x0aXAiLCJ2YWx1ZSIsImZvcm1hdCIsInZhbCIsInN0eWxlIiwiU2xpZGVySGFuZGxlIiwibW91c2VPdmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vdXNlRXZlbnQiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZhbHVlTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ0cmFjayIsImxlZnQiLCJkaXNwbGF5Iiwic2hvd1Rvb2x0aXAiLCJyZWYiLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJ2YWx1ZUxpc3RlbmVyRm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7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IEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTW91c2VFdmVudEhhbmRsZXIgZnJvbSAnLi9tb3VzZS1ldmVudCc7XG5cbmNvbnN0IFN0eWxlZFNsaWRlckhhbmRsZSA9IHN0eWxlZC5zcGFuLmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAna2ctcmFuZ2Utc2xpZGVyX19oYW5kbGUnXG59KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgJHtwcm9wcyA9PiAocHJvcHMudmVydGljYWwgPyAnbWFyZ2luLWxlZnQnIDogJ21hcmdpbi10b3AnKX06IC0ke3Byb3BzID0+XG4gIChwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAtIHByb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodCkgLyAyfXB4O1xuXG4gIGhlaWdodDogJHtwcm9wcyA9PlxuICAgIE51bWJlci5pc0Zpbml0ZShwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aClcbiAgICAgID8gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGhcbiAgICAgIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlSGVpZ2h0fXB4O1xuICB3aWR0aDogJHtwcm9wcyA9PlxuICAgIE51bWJlci5pc0Zpbml0ZShwcm9wcy5zbGlkZXJIYW5kbGVXaWR0aClcbiAgICAgID8gcHJvcHMuc2xpZGVySGFuZGxlV2lkdGhcbiAgICAgIDogcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlSGVpZ2h0fXB4O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZVNoYWRvd307XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQ29sb3J9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVUZXh0Q29sb3J9O1xuXG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJvcmRlclJhZGl1c307XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVySW5hY3RpdmVCb3JkZXJDb2xvcn07XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhvdmVyQ29sb3J9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDZweDtcbiAgcGFkZGluZzogMCAzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlQWZ0ZXJDb250ZW50fSc7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNsaWRlclRvb2x0aXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoICsgMTJ9cHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIHdpZHRoOiA1MHB4O1xuXG4gIDpiZWZvcmUsXG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIDpiZWZvcmUge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbGVmdDogLThweDtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIDphZnRlciB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDZweDtcbiAgfVxuYDtcblxuY29uc3QgU2xpZGVyVG9vbHRpcCA9ICh7dmFsdWUsIGZvcm1hdCA9IHZhbCA9PiB2YWwsIHN0eWxlLCBzbGlkZXJIYW5kbGVXaWR0aH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2xpZGVyVG9vbHRpcCBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Zm9ybWF0KHZhbHVlKX1cbiAgICA8L1N0eWxlZFNsaWRlclRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJIYW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHNsaWRlckhhbmRsZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzcGxheTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmFsdWVMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgbGVmdDogJzUwJScsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgdmFsdWVMaXN0ZW5lcjogZnVuY3Rpb24gdmFsdWVMaXN0ZW5lckZuKCkge30sXG4gICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudEhhbmRsZXIoe1xuICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgdmFsdWVMaXN0ZW5lcjogcHJvcHMudmFsdWVMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXIsXG4gICAgICB0cmFjazogcHJvcHMudHJhY2tcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xuICByZWYgPSBjcmVhdGVSZWYoKTtcblxuICB0b2dnbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiAhdGhpcy5zdGF0ZS5tb3VzZU92ZXJ9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7W3RoaXMucHJvcHMudmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J106IHRoaXMucHJvcHMubGVmdH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgJiYgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXG4gICAgICAgICAgPFNsaWRlclRvb2x0aXBcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmFsdWU9e051bWJlci5pc0Zpbml0ZSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBudWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U3R5bGVkU2xpZGVySGFuZGxlXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5tb3VzZU92ZXJcbiAgICAgICAgICB9KX1cbiAgICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=