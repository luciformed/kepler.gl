"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeWidgetTopFactory = TimeWidgetTopFactory;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _timeRangeSlider = _interopRequireDefault(require("../common/time-range-slider"));

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _floatingTimeDisplay = _interopRequireDefault(require("../common/animation-control/floating-time-display"));

var _timeRangeFilter = require("./time-range-filter");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TOP_SECTION_HEIGHT = '36px';
var TimeBottomWidgetInner = (0, _styledComponents["default"])(_styledComponents2.BottomWidgetInner)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 6px 32px 24px 32px;\n"])));

var TopSectionWrapper = _styledComponents["default"].div.attrs({
  className: 'time-widget--top'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"])), function (props) {
  return props.theme.textColor;
});
TimeWidgetTopFactory.deps = [_fieldSelector["default"]];

function TimeWidgetTopFactory(FieldSelector) {
  var TimeWidgetTop = function TimeWidgetTop(_ref) {
    var filter = _ref.filter,
        readOnly = _ref.readOnly,
        datasets = _ref.datasets,
        setFilterPlot = _ref.setFilterPlot,
        index = _ref.index,
        onClose = _ref.onClose;
    var yAxisFields = (0, _react.useMemo)(function () {
      return ((datasets[filter.dataId[0]] || {}).fields || []).filter(function (f) {
        return f.type === 'integer' || f.type === 'real';
      });
    }, [datasets, filter.dataId]);

    var _setFilterPlotYAxis = (0, _react.useCallback)(function (value) {
      return setFilterPlot(index, {
        yAxis: value
      });
    }, [setFilterPlot, index]);

    return /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
      className: "bottom-widget__field"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
      height: "15px"
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
      className: "bottom-widget__y-axis"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon"
    }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
      height: "15px"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "bottom-widget__field-select"
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      fields: yAxisFields,
      placement: "top",
      id: "selected-time-widget-field",
      value: filter.yAxis ? filter.yAxis.name : null,
      onSelect: _setFilterPlotYAxis,
      placeholder: "placeholder.yAxis",
      erasable: true,
      showToken: false
    }))), !readOnly ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
      height: "12px",
      onClick: onClose
    }))) : null);
  };

  return TimeWidgetTop;
}

TimeWidgetFactory.deps = [_timeRangeSlider["default"], _floatingTimeDisplay["default"], TimeWidgetTopFactory];

function TimeWidgetFactory(TimeRangeSlider, FloatingTimeDisplay, TimeWidgetTop) {
  var TimeWidget = function TimeWidget(_ref2) {
    var datasets = _ref2.datasets,
        filter = _ref2.filter,
        index = _ref2.index,
        readOnly = _ref2.readOnly,
        showTimeDisplay = _ref2.showTimeDisplay,
        setFilterAnimationTime = _ref2.setFilterAnimationTime,
        resetAnimation = _ref2.resetAnimation,
        isAnimatable = _ref2.isAnimatable,
        updateAnimationSpeed = _ref2.updateAnimationSpeed,
        toggleAnimation = _ref2.toggleAnimation,
        enlargeFilter = _ref2.enlargeFilter,
        setFilterPlot = _ref2.setFilterPlot,
        setFilterAnimationWindow = _ref2.setFilterAnimationWindow;

    var _updateAnimationSpeed = (0, _react.useCallback)(function (speed) {
      return updateAnimationSpeed(index, speed);
    }, [updateAnimationSpeed, index]);

    var _toggleAnimation = (0, _react.useCallback)(function () {
      return toggleAnimation(index);
    }, [toggleAnimation, index]);

    var _onClose = (0, _react.useCallback)(function () {
      return enlargeFilter(index);
    }, [enlargeFilter, index]);

    var _setFilterAnimationWindow = (0, _react.useCallback)(function (animationWindow) {
      return setFilterAnimationWindow({
        id: filter.id,
        animationWindow: animationWindow
      });
    }, [setFilterAnimationWindow, filter.id]);

    var timeSliderOnChange = (0, _react.useCallback)(function (value) {
      return setFilterAnimationTime(index, 'value', value);
    }, [setFilterAnimationTime, index]);
    return /*#__PURE__*/_react["default"].createElement(TimeBottomWidgetInner, {
      className: "bottom-widget--inner"
    }, /*#__PURE__*/_react["default"].createElement(TimeWidgetTop, {
      filter: filter,
      readOnly: readOnly,
      datasets: datasets,
      setFilterPlot: setFilterPlot,
      index: index,
      onClose: _onClose
    }), /*#__PURE__*/_react["default"].createElement(TimeRangeSlider, (0, _extends2["default"])({}, (0, _timeRangeFilter.timeRangeSliderFieldsSelector)(filter), {
      onChange: timeSliderOnChange,
      toggleAnimation: _toggleAnimation,
      updateAnimationSpeed: _updateAnimationSpeed,
      setFilterAnimationWindow: _setFilterAnimationWindow,
      hideTimeTitle: showTimeDisplay,
      resetAnimation: resetAnimation,
      isAnimatable: isAnimatable
    })), showTimeDisplay ? /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
      currentTime: filter.value,
      defaultTimeFormat: filter.defaultTimeFormat,
      timeFormat: filter.timeFormat,
      timezone: filter.timezone
    }) : null);
  };

  return /*#__PURE__*/_react["default"].memo(TimeWidget);
}

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVGltZUJvdHRvbVdpZGdldElubmVyIiwiQm90dG9tV2lkZ2V0SW5uZXIiLCJUb3BTZWN0aW9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJob3ZlckNvbG9yIiwidGV4dENvbG9ySGwiLCJTdHlsZWRUaXRsZSIsIkNlbnRlckZsZXhib3giLCJ0ZXh0Q29sb3IiLCJUaW1lV2lkZ2V0VG9wRmFjdG9yeSIsImRlcHMiLCJGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkU2VsZWN0b3IiLCJUaW1lV2lkZ2V0VG9wIiwiZmlsdGVyIiwicmVhZE9ubHkiLCJkYXRhc2V0cyIsInNldEZpbHRlclBsb3QiLCJpbmRleCIsIm9uQ2xvc2UiLCJ5QXhpc0ZpZWxkcyIsImRhdGFJZCIsImZpZWxkcyIsImYiLCJ0eXBlIiwiX3NldEZpbHRlclBsb3RZQXhpcyIsInZhbHVlIiwieUF4aXMiLCJuYW1lIiwiVGltZVdpZGdldEZhY3RvcnkiLCJUaW1lUmFuZ2VTbGlkZXJGYWN0b3J5IiwiRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkiLCJUaW1lUmFuZ2VTbGlkZXIiLCJGbG9hdGluZ1RpbWVEaXNwbGF5IiwiVGltZVdpZGdldCIsInNob3dUaW1lRGlzcGxheSIsInNldEZpbHRlckFuaW1hdGlvblRpbWUiLCJyZXNldEFuaW1hdGlvbiIsImlzQW5pbWF0YWJsZSIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwidG9nZ2xlQW5pbWF0aW9uIiwiZW5sYXJnZUZpbHRlciIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvdyIsIl91cGRhdGVBbmltYXRpb25TcGVlZCIsInNwZWVkIiwiX3RvZ2dsZUFuaW1hdGlvbiIsIl9vbkNsb3NlIiwiX3NldEZpbHRlckFuaW1hdGlvbldpbmRvdyIsImFuaW1hdGlvbldpbmRvdyIsImlkIiwidGltZVNsaWRlck9uQ2hhbmdlIiwiZGVmYXVsdFRpbWVGb3JtYXQiLCJ0aW1lRm9ybWF0IiwidGltZXpvbmUiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsa0JBQWtCLEdBQUcsTUFBM0I7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxrQ0FBT0Msb0NBQVAsQ0FBSCx3SEFBM0I7O0FBR0EsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILHk5QkFNWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FOTyxFQU9YVixrQkFQVyxFQXFDTixVQUFBUSxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDRyxVQUFOLEdBQW1CSCxLQUFLLENBQUNDLEtBQU4sQ0FBWUQsS0FBSyxDQUFDRyxVQUFsQixDQUFuQixHQUFtREgsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFdBRG5EO0FBQUEsQ0FyQ0MsQ0FBdkI7O0FBb0RBLElBQU1DLFdBQVcsR0FBRyxrQ0FBT0MsZ0NBQVAsQ0FBSCx1UUFFTixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFNBQWhCO0FBQUEsQ0FGQyxDQUFqQjtBQWFBQyxvQkFBb0IsQ0FBQ0MsSUFBckIsR0FBNEIsQ0FBQ0MseUJBQUQsQ0FBNUI7O0FBQ08sU0FBU0Ysb0JBQVQsQ0FBOEJHLGFBQTlCLEVBQTZDO0FBQ2xELE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBaUU7QUFBQSxRQUEvREMsTUFBK0QsUUFBL0RBLE1BQStEO0FBQUEsUUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1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QWpCLENBQTFCO0FBQUEsS0FBakIsRUFBb0UsQ0FDN0ZVLHNCQUQ2RixFQUU3RmxCLEtBRjZGLENBQXBFLENBQTNCO0FBS0Esd0JBQ0UsZ0NBQUMscUJBQUQ7QUFBdUIsTUFBQSxTQUFTLEVBQUM7QUFBakMsb0JBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFSixNQURWO0FBRUUsTUFBQSxRQUFRLEVBQUVDLFFBRlo7QUFHRSxNQUFBLFFBQVEsRUFBRUMsUUFIWjtBQUlFLE1BQUEsYUFBYSxFQUFFQyxhQUpqQjtBQUtFLE1BQUEsS0FBSyxFQUFFQyxLQUxUO0FBTUUsTUFBQSxPQUFPLEVBQUU0QjtBQU5YLE1BREYsZUFTRSxnQ0FBQyxlQUFELGdDQUNNLG9EQUE4QmhDLE1BQTlCLENBRE47QUFFRSxNQUFBLFFBQVEsRUFBRW9DLGtCQUZaO0FBR0UsTUFBQSxlQUFlLEVBQUVMLGdCQUhuQjtBQUlFLE1BQUEsb0JBQW9CLEVBQUVGLHFCQUp4QjtBQUtFLE1BQUEsd0JBQXdCLEVBQUVJLHlCQUw1QjtBQU1FLE1BQUEsYUFBYSxFQUFFWixlQU5qQjtBQU9FLE1BQUEsY0FBYyxFQUFFRSxjQVBsQjtBQVFFLE1BQUEsWUFBWSxFQUFFQztBQVJoQixPQVRGLEVBbUJHSCxlQUFlLGdCQUNkLGdDQUFDLG1CQUFEO0FBQ0UsTUFBQSxXQUFXLEVBQUVyQixNQUFNLENBQUNZLEtBRHRCO0FBRUUsTUFBQSxpQkFBaUIsRUFBRVosTUFBTSxDQUFDcUMsaUJBRjVCO0FBR0UsTUFBQSxVQUFVLEVBQUVyQyxNQUFNLENBQUNzQyxVQUhyQjtBQUlFLE1BQUEsUUFBUSxFQUFFdEMsTUFBTSxDQUFDdUM7QUFKbkIsTUFEYyxHQU9aLElBMUJOLENBREY7QUE4QkQsR0FoRUQ7O0FBa0VBLHNCQUFPQyxrQkFBTUMsSUFBTixDQUFXckIsVUFBWCxDQUFQO0FBQ0Q7O2VBRWNMLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0VGV4dEJvbGQsXG4gIEljb25Sb3VuZFNtYWxsLFxuICBDZW50ZXJGbGV4Ym94LFxuICBCb3R0b21XaWRnZXRJbm5lclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Nsb3NlLCBDbG9jaywgTGluZUNoYXJ0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgVGltZVJhbmdlU2xpZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi90aW1lLXJhbmdlLXNsaWRlcic7XG5pbXBvcnQgRmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL2Zsb2F0aW5nLXRpbWUtZGlzcGxheSc7XG5pbXBvcnQge3RpbWVSYW5nZVNsaWRlckZpZWxkc1NlbGVjdG9yfSBmcm9tICcuL3RpbWUtcmFuZ2UtZmlsdGVyJztcblxuY29uc3QgVE9QX1NFQ1RJT05fSEVJR0hUID0gJzM2cHgnO1xuXG5jb25zdCBUaW1lQm90dG9tV2lkZ2V0SW5uZXIgPSBzdHlsZWQoQm90dG9tV2lkZ2V0SW5uZXIpYFxuICBwYWRkaW5nOiA2cHggMzJweCAyNHB4IDMycHg7XG5gO1xuY29uc3QgVG9wU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAndGltZS13aWRnZXQtLXRvcCdcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgaGVpZ2h0OiAke1RPUF9TRUNUSU9OX0hFSUdIVH07XG5cbiAgLmJvdHRvbS13aWRnZXRfX3ktYXhpcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCA0cHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICA6YWN0aXZlLFxuICAgICAgOmZvY3VzLFxuICAgICAgJi5mb2N1cyxcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA/IHByb3BzLnRoZW1lW3Byb3BzLmhvdmVyQ29sb3JdIDogcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtY29udHJvbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcblxuICAgIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtc2xpZGVyIHtcbiAgICAgIHJpZ2h0OiBjYWxjKDAlIC0gNDhweCk7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcbiAgZmxleC1ncm93OiAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIC5ib3R0b20td2lkZ2V0X19pY29uLnNwZWVkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbmA7XG5cblRpbWVXaWRnZXRUb3BGYWN0b3J5LmRlcHMgPSBbRmllbGRTZWxlY3RvckZhY3RvcnldO1xuZXhwb3J0IGZ1bmN0aW9uIFRpbWVXaWRnZXRUb3BGYWN0b3J5KEZpZWxkU2VsZWN0b3IpIHtcbiAgY29uc3QgVGltZVdpZGdldFRvcCA9ICh7ZmlsdGVyLCByZWFkT25seSwgZGF0YXNldHMsIHNldEZpbHRlclBsb3QsIGluZGV4LCBvbkNsb3NlfSkgPT4ge1xuICAgIGNvbnN0IHlBeGlzRmllbGRzID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgICgoZGF0YXNldHNbZmlsdGVyLmRhdGFJZFswXV0gfHwge30pLmZpZWxkcyB8fCBbXSkuZmlsdGVyKFxuICAgICAgICAgIGYgPT4gZi50eXBlID09PSAnaW50ZWdlcicgfHwgZi50eXBlID09PSAncmVhbCdcbiAgICAgICAgKSxcbiAgICAgIFtkYXRhc2V0cywgZmlsdGVyLmRhdGFJZF1cbiAgICApO1xuICAgIGNvbnN0IF9zZXRGaWx0ZXJQbG90WUF4aXMgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXJQbG90KGluZGV4LCB7eUF4aXM6IHZhbHVlfSksIFtcbiAgICAgIHNldEZpbHRlclBsb3QsXG4gICAgICBpbmRleFxuICAgIF0pO1xuICAgIHJldHVybiAoXG4gICAgICA8VG9wU2VjdGlvbldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWRUaXRsZSBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19maWVsZFwiPlxuICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgIDxDbG9jayBoZWlnaHQ9XCIxNXB4XCIgLz5cbiAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgPFNlbGVjdFRleHRCb2xkPntmaWx0ZXIubmFtZX08L1NlbGVjdFRleHRCb2xkPlxuICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9feS1heGlzXCI+XG4gICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvblwiPlxuICAgICAgICAgICAgPExpbmVDaGFydCBoZWlnaHQ9XCIxNXB4XCIgLz5cbiAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19maWVsZC1zZWxlY3RcIj5cbiAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICAgIGZpZWxkcz17eUF4aXNGaWVsZHN9XG4gICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgIGlkPVwic2VsZWN0ZWQtdGltZS13aWRnZXQtZmllbGRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyLnlBeGlzID8gZmlsdGVyLnlBeGlzLm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICBvblNlbGVjdD17X3NldEZpbHRlclBsb3RZQXhpc31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci55QXhpc1wiXG4gICAgICAgICAgICAgIGVyYXNhYmxlXG4gICAgICAgICAgICAgIHNob3dUb2tlbj17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICB7IXJlYWRPbmx5ID8gKFxuICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgPEljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e29uQ2xvc2V9IC8+XG4gICAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBUaW1lV2lkZ2V0VG9wO1xufVxuXG5UaW1lV2lkZ2V0RmFjdG9yeS5kZXBzID0gW1RpbWVSYW5nZVNsaWRlckZhY3RvcnksIEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5LCBUaW1lV2lkZ2V0VG9wRmFjdG9yeV07XG5mdW5jdGlvbiBUaW1lV2lkZ2V0RmFjdG9yeShUaW1lUmFuZ2VTbGlkZXIsIEZsb2F0aW5nVGltZURpc3BsYXksIFRpbWVXaWRnZXRUb3ApIHtcbiAgY29uc3QgVGltZVdpZGdldCA9ICh7XG4gICAgZGF0YXNldHMsXG4gICAgZmlsdGVyLFxuICAgIGluZGV4LFxuICAgIHJlYWRPbmx5LFxuICAgIHNob3dUaW1lRGlzcGxheSxcbiAgICBzZXRGaWx0ZXJBbmltYXRpb25UaW1lLFxuICAgIHJlc2V0QW5pbWF0aW9uLFxuICAgIGlzQW5pbWF0YWJsZSxcbiAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICB0b2dnbGVBbmltYXRpb24sXG4gICAgZW5sYXJnZUZpbHRlcixcbiAgICBzZXRGaWx0ZXJQbG90LFxuICAgIHNldEZpbHRlckFuaW1hdGlvbldpbmRvd1xuICB9KSA9PiB7XG4gICAgY29uc3QgX3VwZGF0ZUFuaW1hdGlvblNwZWVkID0gdXNlQ2FsbGJhY2soc3BlZWQgPT4gdXBkYXRlQW5pbWF0aW9uU3BlZWQoaW5kZXgsIHNwZWVkKSwgW1xuICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQsXG4gICAgICBpbmRleFxuICAgIF0pO1xuXG4gICAgY29uc3QgX3RvZ2dsZUFuaW1hdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHRvZ2dsZUFuaW1hdGlvbihpbmRleCksIFt0b2dnbGVBbmltYXRpb24sIGluZGV4XSk7XG5cbiAgICBjb25zdCBfb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IGVubGFyZ2VGaWx0ZXIoaW5kZXgpLCBbZW5sYXJnZUZpbHRlciwgaW5kZXhdKTtcblxuICAgIGNvbnN0IF9zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3cgPSB1c2VDYWxsYmFjayhcbiAgICAgIGFuaW1hdGlvbldpbmRvdyA9PiBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3coe2lkOiBmaWx0ZXIuaWQsIGFuaW1hdGlvbldpbmRvd30pLFxuICAgICAgW3NldEZpbHRlckFuaW1hdGlvbldpbmRvdywgZmlsdGVyLmlkXVxuICAgICk7XG5cbiAgICBjb25zdCB0aW1lU2xpZGVyT25DaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lKGluZGV4LCAndmFsdWUnLCB2YWx1ZSksIFtcbiAgICAgIHNldEZpbHRlckFuaW1hdGlvblRpbWUsXG4gICAgICBpbmRleFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lQm90dG9tV2lkZ2V0SW5uZXIgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0taW5uZXJcIj5cbiAgICAgICAgPFRpbWVXaWRnZXRUb3BcbiAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgIHNldEZpbHRlclBsb3Q9e3NldEZpbHRlclBsb3R9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIG9uQ2xvc2U9e19vbkNsb3NlfVxuICAgICAgICAvPlxuICAgICAgICA8VGltZVJhbmdlU2xpZGVyXG4gICAgICAgICAgey4uLnRpbWVSYW5nZVNsaWRlckZpZWxkc1NlbGVjdG9yKGZpbHRlcil9XG4gICAgICAgICAgb25DaGFuZ2U9e3RpbWVTbGlkZXJPbkNoYW5nZX1cbiAgICAgICAgICB0b2dnbGVBbmltYXRpb249e190b2dnbGVBbmltYXRpb259XG4gICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9e191cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3c9e19zZXRGaWx0ZXJBbmltYXRpb25XaW5kb3d9XG4gICAgICAgICAgaGlkZVRpbWVUaXRsZT17c2hvd1RpbWVEaXNwbGF5fVxuICAgICAgICAgIHJlc2V0QW5pbWF0aW9uPXtyZXNldEFuaW1hdGlvbn1cbiAgICAgICAgICBpc0FuaW1hdGFibGU9e2lzQW5pbWF0YWJsZX1cbiAgICAgICAgLz5cbiAgICAgICAge3Nob3dUaW1lRGlzcGxheSA/IChcbiAgICAgICAgICA8RmxvYXRpbmdUaW1lRGlzcGxheVxuICAgICAgICAgICAgY3VycmVudFRpbWU9e2ZpbHRlci52YWx1ZX1cbiAgICAgICAgICAgIGRlZmF1bHRUaW1lRm9ybWF0PXtmaWx0ZXIuZGVmYXVsdFRpbWVGb3JtYXR9XG4gICAgICAgICAgICB0aW1lRm9ybWF0PXtmaWx0ZXIudGltZUZvcm1hdH1cbiAgICAgICAgICAgIHRpbWV6b25lPXtmaWx0ZXIudGltZXpvbmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1RpbWVCb3R0b21XaWRnZXRJbm5lcj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdC5tZW1vKFRpbWVXaWRnZXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lV2lkZ2V0RmFjdG9yeTtcbiJdfQ==