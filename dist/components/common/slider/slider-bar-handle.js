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

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  border-radius: ", ";\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.active ? props.theme.sliderBarHoverColor : props.theme.sliderBarColor;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return props.theme.sliderBarRadius;
});

function nope() {}

var SliderBarHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderBarHandle, _Component);

  var _super = _createSuper(SliderBarHandle);

  function SliderBarHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderBarHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.sliderBarListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track,
      setAnchor: props.setAnchor
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderBarHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          v0Left = _this$props.v0Left;
      var style = this.props.vertical ? {
        height: "".concat(width, "%"),
        bottom: "".concat(-100 + width + v0Left, "%")
      } : {
        width: "".concat(width, "%"),
        left: "".concat(v0Left, "%")
      };
      return /*#__PURE__*/_react["default"].createElement(StyledSlider, {
        active: this.state.mouseOver,
        className: (0, _classnames["default"])('kg-range-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        }),
        style: style,
        onMouseDown: this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope,
        onTouchStart: this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope
      });
    }
  }]);
  return SliderBarHandle;
}(_react.Component);

exports["default"] = SliderBarHandle;
(0, _defineProperty2["default"])(SliderBarHandle, "propTypes", {
  width: _propTypes["default"].number,
  left: _propTypes["default"].string,
  sliderBarListener: _propTypes["default"].func,
  enableBarDrag: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderBarHandle, "defaultProps", {
  sliderBarListener: nope,
  enableBarDrag: false,
  vertical: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWJhci1oYW5kbGUuanMiXSwibmFtZXMiOlsiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsInNsaWRlckJhckhvdmVyQ29sb3IiLCJzbGlkZXJCYXJDb2xvciIsInZlcnRpY2FsIiwic2xpZGVyQmFySGVpZ2h0Iiwic2xpZGVyQmFyUmFkaXVzIiwibm9wZSIsIlNsaWRlckJhckhhbmRsZSIsIm1vdXNlT3ZlciIsInNldFN0YXRlIiwic3RhdGUiLCJtb3VzZUV2ZW50IiwiTW91c2VFdmVudEhhbmRsZXIiLCJ2YWx1ZUxpc3RlbmVyIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ0cmFjayIsInNldEFuY2hvciIsIndpZHRoIiwidjBMZWZ0Iiwic3R5bGUiLCJoZWlnaHQiLCJib3R0b20iLCJsZWZ0IiwiZW5hYmxlQmFyRHJhZyIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZVRvdWNoU3RhcnQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLG1OQUVJLFVBQUFDLEtBQUs7QUFBQSxTQUN2QkEsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxtQkFBM0IsR0FBaURILEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxjQUR0QztBQUFBLENBRlQsRUFJZCxVQUFBSixLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixPQUFqQixHQUEyQixRQUFsQyxlQUErQ0wsS0FBSyxDQUFDRSxLQUFOLENBQVlJLGVBQTNEO0FBQUEsQ0FKUyxFQUtDLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQUxOLENBQWxCOztBQVdBLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7SUFFR0MsZTs7Ozs7QUFlbkIsMkJBQVlULEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQURpQiw4RkFXWDtBQUFDVSxNQUFBQSxTQUFTLEVBQUU7QUFBWixLQVhXO0FBQUEsd0dBYUQsWUFBTTtBQUN0QixZQUFLQyxRQUFMLENBQWM7QUFBQ0QsUUFBQUEsU0FBUyxFQUFFLENBQUMsTUFBS0UsS0FBTCxDQUFXRjtBQUF4QixPQUFkO0FBQ0QsS0Fma0I7QUFFakIsVUFBS0csVUFBTCxHQUFrQixJQUFJQyxzQkFBSixDQUFzQjtBQUN0Q1QsTUFBQUEsUUFBUSxFQUFFTCxLQUFLLENBQUNLLFFBRHNCO0FBRXRDVSxNQUFBQSxhQUFhLEVBQUVmLEtBQUssQ0FBQ2dCLGlCQUZpQjtBQUd0Q0MsTUFBQUEsZUFBZSxFQUFFLE1BQUtBLGVBSGdCO0FBSXRDQyxNQUFBQSxLQUFLLEVBQUVsQixLQUFLLENBQUNrQixLQUp5QjtBQUt0Q0MsTUFBQUEsU0FBUyxFQUFFbkIsS0FBSyxDQUFDbUI7QUFMcUIsS0FBdEIsQ0FBbEI7QUFGaUI7QUFTbEI7Ozs7V0FRRCxrQkFBUztBQUNQLHdCQUF3QixLQUFLbkIsS0FBN0I7QUFBQSxVQUFPb0IsS0FBUCxlQUFPQSxLQUFQO0FBQUEsVUFBY0MsTUFBZCxlQUFjQSxNQUFkO0FBRUEsVUFBTUMsS0FBSyxHQUFHLEtBQUt0QixLQUFMLENBQVdLLFFBQVgsR0FDVjtBQUNFa0IsUUFBQUEsTUFBTSxZQUFLSCxLQUFMLE1BRFI7QUFFRUksUUFBQUEsTUFBTSxZQUFLLENBQUMsR0FBRCxHQUFPSixLQUFQLEdBQWVDLE1BQXBCO0FBRlIsT0FEVSxHQUtWO0FBQ0VELFFBQUFBLEtBQUssWUFBS0EsS0FBTCxNQURQO0FBRUVLLFFBQUFBLElBQUksWUFBS0osTUFBTDtBQUZOLE9BTEo7QUFVQSwwQkFDRSxnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsS0FBS1QsS0FBTCxDQUFXRixTQURyQjtBQUVFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLHNCQUFYLEVBQW1DO0FBQzVDLDBDQUFnQyxLQUFLRSxLQUFMLENBQVdGO0FBREMsU0FBbkMsQ0FGYjtBQUtFLFFBQUEsS0FBSyxFQUFFWSxLQUxUO0FBTUUsUUFBQSxXQUFXLEVBQUUsS0FBS3RCLEtBQUwsQ0FBVzBCLGFBQVgsR0FBMkIsS0FBS2IsVUFBTCxDQUFnQmMsZUFBM0MsR0FBNkRuQixJQU41RTtBQU9FLFFBQUEsWUFBWSxFQUFFLEtBQUtSLEtBQUwsQ0FBVzBCLGFBQVgsR0FBMkIsS0FBS2IsVUFBTCxDQUFnQmUsZ0JBQTNDLEdBQThEcEI7QUFQOUUsUUFERjtBQVdEOzs7RUF4RDBDcUIsZ0I7OztpQ0FBeEJwQixlLGVBQ0E7QUFDakJXLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVDLE1BREE7QUFFakJOLEVBQUFBLElBQUksRUFBRUssc0JBQVVFLE1BRkM7QUFHakJoQixFQUFBQSxpQkFBaUIsRUFBRWMsc0JBQVVHLElBSFo7QUFJakJQLEVBQUFBLGFBQWEsRUFBRUksc0JBQVVJLElBSlI7QUFLakI3QixFQUFBQSxRQUFRLEVBQUV5QixzQkFBVUk7QUFMSCxDO2lDQURBekIsZSxrQkFTRztBQUNwQk8sRUFBQUEsaUJBQWlCLEVBQUVSLElBREM7QUFFcEJrQixFQUFBQSxhQUFhLEVBQUUsS0FGSztBQUdwQnJCLEVBQUFBLFFBQVEsRUFBRTtBQUhVLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vdXNlRXZlbnRIYW5kbGVyIGZyb20gJy4vbW91c2UtZXZlbnQnO1xuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zbGlkZXJCYXJIb3ZlckNvbG9yIDogcHJvcHMudGhlbWUuc2xpZGVyQmFyQ29sb3J9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJSYWRpdXN9O1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuZnVuY3Rpb24gbm9wZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckJhckhhbmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzbGlkZXJCYXJMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZW5hYmxlQmFyRHJhZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzbGlkZXJCYXJMaXN0ZW5lcjogbm9wZSxcbiAgICBlbmFibGVCYXJEcmFnOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm1vdXNlRXZlbnQgPSBuZXcgTW91c2VFdmVudEhhbmRsZXIoe1xuICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgdmFsdWVMaXN0ZW5lcjogcHJvcHMuc2xpZGVyQmFyTGlzdGVuZXIsXG4gICAgICB0b2dnbGVNb3VzZU92ZXI6IHRoaXMudG9nZ2xlTW91c2VPdmVyLFxuICAgICAgdHJhY2s6IHByb3BzLnRyYWNrLFxuICAgICAgc2V0QW5jaG9yOiBwcm9wcy5zZXRBbmNob3JcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlID0ge21vdXNlT3ZlcjogZmFsc2V9O1xuXG4gIHRvZ2dsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHttb3VzZU92ZXI6ICF0aGlzLnN0YXRlLm1vdXNlT3Zlcn0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7d2lkdGgsIHYwTGVmdH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLnByb3BzLnZlcnRpY2FsXG4gICAgICA/IHtcbiAgICAgICAgICBoZWlnaHQ6IGAke3dpZHRofSVgLFxuICAgICAgICAgIGJvdHRvbTogYCR7LTEwMCArIHdpZHRoICsgdjBMZWZ0fSVgXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICAgICAgICBsZWZ0OiBgJHt2MExlZnR9JWBcbiAgICAgICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkU2xpZGVyXG4gICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctcmFuZ2Utc2xpZGVyX19iYXInLCB7XG4gICAgICAgICAgJ2tnLXJhbmdlLXNsaWRlcl9fYmFyLS1hY3RpdmUnOiB0aGlzLnN0YXRlLm1vdXNlT3ZlclxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZU1vdXNlRG93biA6IG5vcGV9XG4gICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnQgOiBub3BlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG4iXX0=