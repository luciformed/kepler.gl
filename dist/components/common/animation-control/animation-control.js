"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _slider = _interopRequireDefault(require("../slider/slider"));

var _styledComponents2 = require("../styled-components");

var _playbackControls = _interopRequireDefault(require("./playback-controls"));

var _floatingTimeDisplay = _interopRequireDefault(require("./floating-time-display"));

var _dataUtils = require("../../../utils/data-utils");

var _defaultSettings = require("../../../constants/default-settings");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SliderWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  margin-right: 24px;\n  margin-left: 24px;\n"])));

var AnimationWidgetInner = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n\n  .playback-controls {\n    margin-left: -8px;\n    margin-right: 16px;\n  }\n"])));

var StyledDomain = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-domain'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n"])), function (props) {
  return props.theme.titleTextColor;
});

AnimationControlFactory.deps = [_playbackControls["default"], _floatingTimeDisplay["default"]];

function AnimationControlFactory(PlaybackControls, FloatingTimeDisplay) {
  var AnimationControl = function AnimationControl(_ref) {
    var isAnimatable = _ref.isAnimatable,
        isAnimating = _ref.isAnimating,
        resetAnimation = _ref.resetAnimation,
        toggleAnimation = _ref.toggleAnimation,
        setLayerAnimationTime = _ref.setLayerAnimationTime,
        updateAnimationSpeed = _ref.updateAnimationSpeed,
        animationConfig = _ref.animationConfig;
    var currentTime = animationConfig.currentTime,
        domain = animationConfig.domain,
        speed = animationConfig.speed,
        step = animationConfig.step,
        timeSteps = animationConfig.timeSteps,
        timeFormat = animationConfig.timeFormat,
        timezone = animationConfig.timezone,
        defaultTimeFormat = animationConfig.defaultTimeFormat;
    var onSlider1Change = (0, _react.useCallback)(function (val) {
      if (Array.isArray(timeSteps)) {
        setLayerAnimationTime((0, _dataUtils.snapToMarks)(val, timeSteps)); // TODO: merge slider in to avoid this step
      } else if (val >= domain[0] && val <= domain[1]) {
        setLayerAnimationTime(val);
      }
    }, [domain, timeSteps, setLayerAnimationTime]);
    var dateFunc = (0, _react.useMemo)(function () {
      var hasUserFormat = typeof timeFormat === 'string';
      var currentFormat = (hasUserFormat ? timeFormat : defaultTimeFormat) || _defaultSettings.DEFAULT_TIME_FORMAT;
      return (0, _dataUtils.datetimeFormatter)(timezone)(currentFormat);
    }, [timeFormat, defaultTimeFormat, timezone]);
    var timeStart = (0, _react.useMemo)(function () {
      return domain ? dateFunc(domain[0]) : '';
    }, [domain, dateFunc]);
    var timeEnd = (0, _react.useMemo)(function () {
      return domain ? dateFunc(domain[1]) : '';
    }, [domain, dateFunc]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.BottomWidgetInner, {
      className: "bottom-widget--inner"
    }, /*#__PURE__*/_react["default"].createElement(AnimationWidgetInner, {
      className: "animation-widget--inner"
    }, /*#__PURE__*/_react["default"].createElement(PlaybackControls, {
      className: "animation-control-playpause",
      startAnimation: toggleAnimation,
      isAnimating: isAnimating,
      pauseAnimation: toggleAnimation,
      resetAnimation: resetAnimation,
      speed: speed,
      isAnimatable: isAnimatable,
      updateAnimationSpeed: updateAnimationSpeed
    }), /*#__PURE__*/_react["default"].createElement(StyledDomain, {
      className: "domain-start"
    }, /*#__PURE__*/_react["default"].createElement("span", null, timeStart)), /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
      className: "animation-control__slider"
    }, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
      showValues: false,
      isRanged: false,
      step: step,
      minValue: domain ? domain[0] : 0,
      maxValue: domain ? domain[1] : 1,
      value1: currentTime,
      onSlider1Change: onSlider1Change,
      enableBarDrag: true
    })), /*#__PURE__*/_react["default"].createElement(StyledDomain, {
      className: "domain-end"
    }, /*#__PURE__*/_react["default"].createElement("span", null, timeEnd))), /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
      currentTime: currentTime,
      defaultTimeFormat: defaultTimeFormat,
      timeFormat: timeFormat,
      timezone: timezone
    }));
  };

  AnimationControl.defaultProps = {
    toggleAnimation: function toggleAnimation() {},
    updateAnimationSpeed: function updateAnimationSpeed() {},
    animationControlProps: {},
    animationConfig: {}
  };
  return AnimationControl;
}

var _default = AnimationControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTbGlkZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQW5pbWF0aW9uV2lkZ2V0SW5uZXIiLCJTdHlsZWREb21haW4iLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJ0aXRsZVRleHRDb2xvciIsIkFuaW1hdGlvbkNvbnRyb2xGYWN0b3J5IiwiZGVwcyIsIlBsYXliYWNrQ29udHJvbHNGYWN0b3J5IiwiRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkiLCJQbGF5YmFja0NvbnRyb2xzIiwiRmxvYXRpbmdUaW1lRGlzcGxheSIsIkFuaW1hdGlvbkNvbnRyb2wiLCJpc0FuaW1hdGFibGUiLCJpc0FuaW1hdGluZyIsInJlc2V0QW5pbWF0aW9uIiwidG9nZ2xlQW5pbWF0aW9uIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJhbmltYXRpb25Db25maWciLCJjdXJyZW50VGltZSIsImRvbWFpbiIsInNwZWVkIiwic3RlcCIsInRpbWVTdGVwcyIsInRpbWVGb3JtYXQiLCJ0aW1lem9uZSIsImRlZmF1bHRUaW1lRm9ybWF0Iiwib25TbGlkZXIxQ2hhbmdlIiwidmFsIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0ZUZ1bmMiLCJoYXNVc2VyRm9ybWF0IiwiY3VycmVudEZvcm1hdCIsIkRFRkFVTFRfVElNRV9GT1JNQVQiLCJ0aW1lU3RhcnQiLCJ0aW1lRW5kIiwiZGVmYXVsdFByb3BzIiwiYW5pbWF0aW9uQ29udHJvbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUdBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsK0xBQW5COztBQVFBLElB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RUFBRUYsVUFIZDtBQUlFLE1BQUEsUUFBUSxFQUFFQztBQUpaLE1BL0JGLENBREY7QUF3Q0QsR0FqRkQ7O0FBbUZBZCxFQUFBQSxnQkFBZ0IsQ0FBQzBCLFlBQWpCLEdBQWdDO0FBQzlCdEIsSUFBQUEsZUFBZSxFQUFFLDJCQUFNLENBQUUsQ0FESztBQUU5QkUsSUFBQUEsb0JBQW9CLEVBQUUsZ0NBQU0sQ0FBRSxDQUZBO0FBRzlCcUIsSUFBQUEscUJBQXFCLEVBQUUsRUFITztBQUk5QnBCLElBQUFBLGVBQWUsRUFBRTtBQUphLEdBQWhDO0FBT0EsU0FBT1AsZ0JBQVA7QUFDRDs7ZUFFY04sdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQge0JvdHRvbVdpZGdldElubmVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGxheWJhY2tDb250cm9sc0ZhY3RvcnkgZnJvbSAnLi9wbGF5YmFjay1jb250cm9scyc7XG5pbXBvcnQgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkgZnJvbSAnLi9mbG9hdGluZy10aW1lLWRpc3BsYXknO1xuaW1wb3J0IHtzbmFwVG9NYXJrc30gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge0RFRkFVTFRfVElNRV9GT1JNQVR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7ZGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG5gO1xuXG5jb25zdCBBbmltYXRpb25XaWRnZXRJbm5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMnB4O1xuXG4gIC5wbGF5YmFjay1jb250cm9scyB7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREb21haW4gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYW5pbWF0aW9uLWNvbnRyb2xfX3RpbWUtZG9tYWluJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuYDtcblxuQW5pbWF0aW9uQ29udHJvbEZhY3RvcnkuZGVwcyA9IFtQbGF5YmFja0NvbnRyb2xzRmFjdG9yeSwgRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnldO1xuXG5mdW5jdGlvbiBBbmltYXRpb25Db250cm9sRmFjdG9yeShQbGF5YmFja0NvbnRyb2xzLCBGbG9hdGluZ1RpbWVEaXNwbGF5KSB7XG4gIGNvbnN0IEFuaW1hdGlvbkNvbnRyb2wgPSAoe1xuICAgIGlzQW5pbWF0YWJsZSxcbiAgICBpc0FuaW1hdGluZyxcbiAgICByZXNldEFuaW1hdGlvbixcbiAgICB0b2dnbGVBbmltYXRpb24sXG4gICAgc2V0TGF5ZXJBbmltYXRpb25UaW1lLFxuICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkLFxuICAgIGFuaW1hdGlvbkNvbmZpZ1xuICB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgY3VycmVudFRpbWUsXG4gICAgICBkb21haW4sXG4gICAgICBzcGVlZCxcbiAgICAgIHN0ZXAsXG4gICAgICB0aW1lU3RlcHMsXG4gICAgICB0aW1lRm9ybWF0LFxuICAgICAgdGltZXpvbmUsXG4gICAgICBkZWZhdWx0VGltZUZvcm1hdFxuICAgIH0gPSBhbmltYXRpb25Db25maWc7XG4gICAgY29uc3Qgb25TbGlkZXIxQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgICB2YWwgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aW1lU3RlcHMpKSB7XG4gICAgICAgICAgc2V0TGF5ZXJBbmltYXRpb25UaW1lKHNuYXBUb01hcmtzKHZhbCwgdGltZVN0ZXBzKSk7XG5cbiAgICAgICAgICAvLyBUT0RPOiBtZXJnZSBzbGlkZXIgaW4gdG8gYXZvaWQgdGhpcyBzdGVwXG4gICAgICAgIH0gZWxzZSBpZiAodmFsID49IGRvbWFpblswXSAmJiB2YWwgPD0gZG9tYWluWzFdKSB7XG4gICAgICAgICAgc2V0TGF5ZXJBbmltYXRpb25UaW1lKHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbZG9tYWluLCB0aW1lU3RlcHMsIHNldExheWVyQW5pbWF0aW9uVGltZV1cbiAgICApO1xuXG4gICAgY29uc3QgZGF0ZUZ1bmMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IGhhc1VzZXJGb3JtYXQgPSB0eXBlb2YgdGltZUZvcm1hdCA9PT0gJ3N0cmluZyc7XG4gICAgICBjb25zdCBjdXJyZW50Rm9ybWF0ID0gKGhhc1VzZXJGb3JtYXQgPyB0aW1lRm9ybWF0IDogZGVmYXVsdFRpbWVGb3JtYXQpIHx8IERFRkFVTFRfVElNRV9GT1JNQVQ7XG4gICAgICByZXR1cm4gZGF0ZXRpbWVGb3JtYXR0ZXIodGltZXpvbmUpKGN1cnJlbnRGb3JtYXQpO1xuICAgIH0sIFt0aW1lRm9ybWF0LCBkZWZhdWx0VGltZUZvcm1hdCwgdGltZXpvbmVdKTtcblxuICAgIGNvbnN0IHRpbWVTdGFydCA9IHVzZU1lbW8oKCkgPT4gKGRvbWFpbiA/IGRhdGVGdW5jKGRvbWFpblswXSkgOiAnJyksIFtkb21haW4sIGRhdGVGdW5jXSk7XG4gICAgY29uc3QgdGltZUVuZCA9IHVzZU1lbW8oKCkgPT4gKGRvbWFpbiA/IGRhdGVGdW5jKGRvbWFpblsxXSkgOiAnJyksIFtkb21haW4sIGRhdGVGdW5jXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJvdHRvbVdpZGdldElubmVyIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXQtLWlubmVyXCI+XG4gICAgICAgIDxBbmltYXRpb25XaWRnZXRJbm5lciBjbGFzc05hbWU9XCJhbmltYXRpb24td2lkZ2V0LS1pbm5lclwiPlxuICAgICAgICAgIDxQbGF5YmFja0NvbnRyb2xzXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbC1wbGF5cGF1c2VcIlxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgIGlzQW5pbWF0aW5nPXtpc0FuaW1hdGluZ31cbiAgICAgICAgICAgIHBhdXNlQW5pbWF0aW9uPXt0b2dnbGVBbmltYXRpb259XG4gICAgICAgICAgICByZXNldEFuaW1hdGlvbj17cmVzZXRBbmltYXRpb259XG4gICAgICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgICAgICBpc0FuaW1hdGFibGU9e2lzQW5pbWF0YWJsZX1cbiAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt1cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdHlsZWREb21haW4gY2xhc3NOYW1lPVwiZG9tYWluLXN0YXJ0XCI+XG4gICAgICAgICAgICA8c3Bhbj57dGltZVN0YXJ0fTwvc3Bhbj5cbiAgICAgICAgICA8L1N0eWxlZERvbWFpbj5cbiAgICAgICAgICA8U2xpZGVyV3JhcHBlciBjbGFzc05hbWU9XCJhbmltYXRpb24tY29udHJvbF9fc2xpZGVyXCI+XG4gICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgIHNob3dWYWx1ZXM9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgICAgIG1pblZhbHVlPXtkb21haW4gPyBkb21haW5bMF0gOiAwfVxuICAgICAgICAgICAgICBtYXhWYWx1ZT17ZG9tYWluID8gZG9tYWluWzFdIDogMX1cbiAgICAgICAgICAgICAgdmFsdWUxPXtjdXJyZW50VGltZX1cbiAgICAgICAgICAgICAgb25TbGlkZXIxQ2hhbmdlPXtvblNsaWRlcjFDaGFuZ2V9XG4gICAgICAgICAgICAgIGVuYWJsZUJhckRyYWc9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAgICA8U3R5bGVkRG9tYWluIGNsYXNzTmFtZT1cImRvbWFpbi1lbmRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0aW1lRW5kfTwvc3Bhbj5cbiAgICAgICAgICA8L1N0eWxlZERvbWFpbj5cbiAgICAgICAgPC9BbmltYXRpb25XaWRnZXRJbm5lcj5cbiAgICAgICAgPEZsb2F0aW5nVGltZURpc3BsYXlcbiAgICAgICAgICBjdXJyZW50VGltZT17Y3VycmVudFRpbWV9XG4gICAgICAgICAgZGVmYXVsdFRpbWVGb3JtYXQ9e2RlZmF1bHRUaW1lRm9ybWF0fVxuICAgICAgICAgIHRpbWVGb3JtYXQ9e3RpbWVGb3JtYXR9XG4gICAgICAgICAgdGltZXpvbmU9e3RpbWV6b25lfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3R0b21XaWRnZXRJbm5lcj5cbiAgICApO1xuICB9O1xuXG4gIEFuaW1hdGlvbkNvbnRyb2wuZGVmYXVsdFByb3BzID0ge1xuICAgIHRvZ2dsZUFuaW1hdGlvbjogKCkgPT4ge30sXG4gICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ6ICgpID0+IHt9LFxuICAgIGFuaW1hdGlvbkNvbnRyb2xQcm9wczoge30sXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7fVxuICB9O1xuXG4gIHJldHVybiBBbmltYXRpb25Db250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25Db250cm9sRmFjdG9yeTtcbiJdfQ==