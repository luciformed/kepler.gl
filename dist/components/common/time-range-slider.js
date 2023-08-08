"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TimeRangeSliderFactory;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangeSlider = _interopRequireDefault(require("./range-slider"));

var _timeSliderMarker = _interopRequireDefault(require("./time-slider-marker"));

var _playbackControls = _interopRequireDefault(require("./animation-control/playback-controls"));

var _timeRangeSliderTimeTitle = _interopRequireDefault(require("./time-range-slider-time-title"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var animationControlWidth = 176;

var StyledSliderContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: ", "px;\n\n  .timeline-container .kg-slider {\n    display: none;\n  }\n\n  .playback-controls {\n    margin-left: 22px;\n  }\n"])), function (props) {
  return props.isEnlarged ? 24 : 0;
});

TimeRangeSliderFactory.deps = [_playbackControls["default"], _rangeSlider["default"], _timeSliderMarker["default"], _timeRangeSliderTimeTitle["default"]];

function TimeRangeSliderFactory(PlaybackControls, RangeSlider, TimeSliderMarker, TimeRangeSliderTimeTitle) {
  var TimeRangeSlider = function TimeRangeSlider(props) {
    var domain = props.domain,
        value = props.value,
        isEnlarged = props.isEnlarged,
        hideTimeTitle = props.hideTimeTitle,
        isAnimating = props.isAnimating,
        resetAnimation = props.resetAnimation,
        timeFormat = props.timeFormat,
        timezone = props.timezone,
        histogram = props.histogram,
        plotType = props.plotType,
        lineChart = props.lineChart,
        step = props.step,
        isAnimatable = props.isAnimatable,
        speed = props.speed,
        animationWindow = props.animationWindow,
        updateAnimationSpeed = props.updateAnimationSpeed,
        setFilterAnimationWindow = props.setFilterAnimationWindow,
        toggleAnimation = props.toggleAnimation,
        onChange = props.onChange;
    var throttledOnchange = (0, _react.useMemo)(function () {
      return (0, _lodash["default"])(onChange, 20);
    }, [onChange]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "time-range-slider"
    }, !hideTimeTitle ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "time-range-slider__title",
      style: {
        width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(TimeRangeSliderTimeTitle, {
      timeFormat: timeFormat,
      timezone: timezone,
      value: value,
      isEnlarged: isEnlarged
    })) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderContainer, {
      className: "time-range-slider__container",
      isEnlarged: isEnlarged
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "timeline-container",
      style: {
        width: isEnlarged ? "calc(100% - ".concat(animationControlWidth, "px)") : '100%'
      }
    }, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
      range: domain,
      value0: value[0],
      value1: value[1],
      histogram: histogram,
      lineChart: lineChart,
      plotType: plotType,
      isEnlarged: isEnlarged,
      showInput: false,
      step: step,
      onChange: throttledOnchange,
      xAxis: TimeSliderMarker,
      timezone: timezone,
      timeFormat: timeFormat
    })), isEnlarged ? /*#__PURE__*/_react["default"].createElement(PlaybackControls, {
      isAnimatable: isAnimatable,
      width: animationControlWidth,
      speed: speed,
      animationWindow: animationWindow,
      updateAnimationSpeed: updateAnimationSpeed,
      setFilterAnimationWindow: setFilterAnimationWindow,
      pauseAnimation: toggleAnimation,
      resetAnimation: resetAnimation,
      isAnimating: isAnimating,
      startAnimation: toggleAnimation
    }) : null));
  };

  TimeRangeSlider.propTypes = {
    onChange: _propTypes["default"].func.isRequired,
    domain: _propTypes["default"].arrayOf(_propTypes["default"].number),
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    step: _propTypes["default"].number.isRequired,
    plotType: _propTypes["default"].string,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
    lineChart: _propTypes["default"].object,
    toggleAnimation: _propTypes["default"].func.isRequired,
    exportAnimation: _propTypes["default"].func,
    isAnimatable: _propTypes["default"].bool,
    isEnlarged: _propTypes["default"].bool,
    speed: _propTypes["default"].number,
    timeFormat: _propTypes["default"].string,
    timezone: _propTypes["default"].string,
    hideTimeTitle: _propTypes["default"].bool
  };
  return /*#__PURE__*/_react["default"].memo(TimeRangeSlider);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlci5qcyJdLCJuYW1lcyI6WyJhbmltYXRpb25Db250cm9sV2lkdGgiLCJTdHlsZWRTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImlzRW5sYXJnZWQiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlBsYXliYWNrQ29udHJvbHNGYWN0b3J5IiwiUmFuZ2VTbGlkZXJGYWN0b3J5IiwiVGltZVNsaWRlck1hcmtlckZhY3RvcnkiLCJUaW1lUmFuZ2VTbGlkZXJUaW1lVGl0bGVGYWN0b3J5IiwiUGxheWJhY2tDb250cm9scyIsIlJhbmdlU2xpZGVyIiwiVGltZVNsaWRlck1hcmtlciIsIlRpbWVSYW5nZVNsaWRlclRpbWVUaXRsZSIsIlRpbWVSYW5nZVNsaWRlciIsImRvbWFpbiIsInZhbHVlIiwiaGlkZVRpbWVUaXRsZSIsImlzQW5pbWF0aW5nIiwicmVzZXRBbmltYXRpb24iLCJ0aW1lRm9ybWF0IiwidGltZXpvbmUiLCJoaXN0b2dyYW0iLCJwbG90VHlwZSIsImxpbmVDaGFydCIsInN0ZXAiLCJpc0FuaW1hdGFibGUiLCJzcGVlZCIsImFuaW1hdGlvbldpbmRvdyIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwidG9nZ2xlQW5pbWF0aW9uIiwib25DaGFuZ2UiLCJ0aHJvdHRsZWRPbmNoYW5nZSIsIndpZHRoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwibnVtYmVyIiwic3RyaW5nIiwiYW55Iiwib2JqZWN0IiwiZXhwb3J0QW5pbWF0aW9uIiwiYm9vbCIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJ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QUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGLFVBSGpCO0FBSTFCYixJQUFBQSxJQUFJLEVBQUVXLHNCQUFVSSxNQUFWLENBQWlCRixVQUpHO0FBSzFCZixJQUFBQSxRQUFRLEVBQUVhLHNCQUFVSyxNQUxNO0FBTTFCbkIsSUFBQUEsU0FBUyxFQUFFYyxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVNLEdBQTVCLENBTmU7QUFPMUJsQixJQUFBQSxTQUFTLEVBQUVZLHNCQUFVTyxNQVBLO0FBUTFCWixJQUFBQSxlQUFlLEVBQUVLLHNCQUFVQyxJQUFWLENBQWVDLFVBUk47QUFTMUJNLElBQUFBLGVBQWUsRUFBRVIsc0JBQVVDLElBVEQ7QUFVMUJYLElBQUFBLFlBQVksRUFBRVUsc0JBQVVTLElBVkU7QUFXMUIxQyxJQUFBQSxVQUFVLEVBQUVpQyxzQkFBVVMsSUFYSTtBQVkxQmxCLElBQUFBLEtBQUssRUFBRVMsc0JBQVVJLE1BWlM7QUFhMUJwQixJQUFBQSxVQUFVLEVBQUVnQixzQkFBVUssTUFiSTtBQWMxQnBCLElBQUFBLFFBQVEsRUFBRWUsc0JBQVVLLE1BZE07QUFlMUJ4QixJQUFBQSxhQUFhLEVBQUVtQixzQkFBVVM7QUFmQyxHQUE1QjtBQWtCQSxzQkFBT0Msa0JBQU1DLElBQU4sQ0FBV2pDLGVBQVgsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcbmltcG9ydCBUaW1lU2xpZGVyTWFya2VyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXInO1xuaW1wb3J0IFBsYXliYWNrQ29udHJvbHNGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL3BsYXliYWNrLWNvbnRyb2xzJztcbmltcG9ydCBUaW1lUmFuZ2VTbGlkZXJUaW1lVGl0bGVGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3RpbWUtcmFuZ2Utc2xpZGVyLXRpbWUtdGl0bGUnO1xuXG5jb25zdCBhbmltYXRpb25Db250cm9sV2lkdGggPSAxNzY7XG5cbmNvbnN0IFN0eWxlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzLmlzRW5sYXJnZWQgPyAyNCA6IDApfXB4O1xuXG4gIC50aW1lbGluZS1jb250YWluZXIgLmtnLXNsaWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5wbGF5YmFjay1jb250cm9scyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIH1cbmA7XG5cblRpbWVSYW5nZVNsaWRlckZhY3RvcnkuZGVwcyA9IFtcbiAgUGxheWJhY2tDb250cm9sc0ZhY3RvcnksXG4gIFJhbmdlU2xpZGVyRmFjdG9yeSxcbiAgVGltZVNsaWRlck1hcmtlckZhY3RvcnksXG4gIFRpbWVSYW5nZVNsaWRlclRpbWVUaXRsZUZhY3Rvcnlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVSYW5nZVNsaWRlckZhY3RvcnkoXG4gIFBsYXliYWNrQ29udHJvbHMsXG4gIFJhbmdlU2xpZGVyLFxuICBUaW1lU2xpZGVyTWFya2VyLFxuICBUaW1lUmFuZ2VTbGlkZXJUaW1lVGl0bGVcbikge1xuICBjb25zdCBUaW1lUmFuZ2VTbGlkZXIgPSBwcm9wcyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZG9tYWluLFxuICAgICAgdmFsdWUsXG4gICAgICBpc0VubGFyZ2VkLFxuICAgICAgaGlkZVRpbWVUaXRsZSxcbiAgICAgIGlzQW5pbWF0aW5nLFxuICAgICAgcmVzZXRBbmltYXRpb24sXG4gICAgICB0aW1lRm9ybWF0LFxuICAgICAgdGltZXpvbmUsXG4gICAgICBoaXN0b2dyYW0sXG4gICAgICBwbG90VHlwZSxcbiAgICAgIGxpbmVDaGFydCxcbiAgICAgIHN0ZXAsXG4gICAgICBpc0FuaW1hdGFibGUsXG4gICAgICBzcGVlZCxcbiAgICAgIGFuaW1hdGlvbldpbmRvdyxcbiAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkLFxuICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93LFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uLFxuICAgICAgb25DaGFuZ2VcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3QgdGhyb3R0bGVkT25jaGFuZ2UgPSB1c2VNZW1vKCgpID0+IHRocm90dGxlKG9uQ2hhbmdlLCAyMCksIFtvbkNoYW5nZV0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyXCI+XG4gICAgICAgIHshaGlkZVRpbWVUaXRsZSA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lLXJhbmdlLXNsaWRlcl9fdGl0bGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IGlzRW5sYXJnZWQgPyBgY2FsYygxMDAlIC0gJHthbmltYXRpb25Db250cm9sV2lkdGh9cHgpYCA6ICcxMDAlJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGltZVJhbmdlU2xpZGVyVGltZVRpdGxlXG4gICAgICAgICAgICAgIHRpbWVGb3JtYXQ9e3RpbWVGb3JtYXR9XG4gICAgICAgICAgICAgIHRpbWV6b25lPXt0aW1lem9uZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBpc0VubGFyZ2VkPXtpc0VubGFyZ2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxTdHlsZWRTbGlkZXJDb250YWluZXIgY2xhc3NOYW1lPVwidGltZS1yYW5nZS1zbGlkZXJfX2NvbnRhaW5lclwiIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lLWNvbnRhaW5lclwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogaXNFbmxhcmdlZCA/IGBjYWxjKDEwMCUgLSAke2FuaW1hdGlvbkNvbnRyb2xXaWR0aH1weClgIDogJzEwMCUnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxSYW5nZVNsaWRlclxuICAgICAgICAgICAgICByYW5nZT17ZG9tYWlufVxuICAgICAgICAgICAgICB2YWx1ZTA9e3ZhbHVlWzBdfVxuICAgICAgICAgICAgICB2YWx1ZTE9e3ZhbHVlWzFdfVxuICAgICAgICAgICAgICBoaXN0b2dyYW09e2hpc3RvZ3JhbX1cbiAgICAgICAgICAgICAgbGluZUNoYXJ0PXtsaW5lQ2hhcnR9XG4gICAgICAgICAgICAgIHBsb3RUeXBlPXtwbG90VHlwZX1cbiAgICAgICAgICAgICAgaXNFbmxhcmdlZD17aXNFbmxhcmdlZH1cbiAgICAgICAgICAgICAgc2hvd0lucHV0PXtmYWxzZX1cbiAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Rocm90dGxlZE9uY2hhbmdlfVxuICAgICAgICAgICAgICB4QXhpcz17VGltZVNsaWRlck1hcmtlcn1cbiAgICAgICAgICAgICAgdGltZXpvbmU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICB0aW1lRm9ybWF0PXt0aW1lRm9ybWF0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7aXNFbmxhcmdlZCA/IChcbiAgICAgICAgICAgIDxQbGF5YmFja0NvbnRyb2xzXG4gICAgICAgICAgICAgIGlzQW5pbWF0YWJsZT17aXNBbmltYXRhYmxlfVxuICAgICAgICAgICAgICB3aWR0aD17YW5pbWF0aW9uQ29udHJvbFdpZHRofVxuICAgICAgICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgICAgICAgIGFuaW1hdGlvbldpbmRvdz17YW5pbWF0aW9uV2luZG93fVxuICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgICAgIHNldEZpbHRlckFuaW1hdGlvbldpbmRvdz17c2V0RmlsdGVyQW5pbWF0aW9uV2luZG93fVxuICAgICAgICAgICAgICBwYXVzZUFuaW1hdGlvbj17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICByZXNldEFuaW1hdGlvbj17cmVzZXRBbmltYXRpb259XG4gICAgICAgICAgICAgIGlzQW5pbWF0aW5nPXtpc0FuaW1hdGluZ31cbiAgICAgICAgICAgICAgc3RhcnRBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkU2xpZGVyQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBUaW1lUmFuZ2VTbGlkZXIucHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgc3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgbGluZUNoYXJ0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRvZ2dsZUFuaW1hdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBleHBvcnRBbmltYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzQW5pbWF0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNFbmxhcmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGltZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lem9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoaWRlVGltZVRpdGxlOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5tZW1vKFRpbWVSYW5nZVNsaWRlcik7XG59XG4iXX0=