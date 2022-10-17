"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingTimeDisplayFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../icons");

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../styled-components");

var _dataUtils = require("../../../utils/data-utils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTimeDisplayWrapper = _styledComponents["default"].div.attrs({
  className: 'floating-time-display'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: ", ";\n  display: flex;\n  position: absolute;\n  width: 100%;\n  margin-left: -", "px;\n  justify-content: center;\n"])), function (props) {
  return "calc(100% + ".concat(props.theme.bottomPanelGap, "px)");
}, function (props) {
  return props.theme.bottomInnerPdSide;
});

var StyledTimeDisplay = _styledComponents["default"].div.attrs({
  className: 'floating-time-display__inner'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: ", "px;\n  color: ", ";\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  min-width: ", "px;\n  opacity: ", ";\n  padding: ", ";\n"])), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.timeDisplayBorderRadius;
}, function (props) {
  return props.theme.titleTextColor;
}, function (props) {
  return props.theme.timeDisplayHeight;
}, function (props) {
  return props.theme.timeDisplayMinWidth;
}, function (props) {
  return props.theme.timeDisplayOpacity;
}, function (props) {
  return props.theme.timeDisplayPadding;
});

var StyledTimeDisplayGroups = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"])));

var StyledTimeDisplayRows = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));

var StyledTimeDisplayTop = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-display__top'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: 12px;\n  font-weight: 500;\n  justify-content: center;\n"])), function (props) {
  return props.theme.textColor;
});

var StyledTimeDisplayBottom = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-display__bottom'
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n"])), function (props) {
  return props.theme.titleTextColor;
});

var StyledTimeValueGroup = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-value-group'
})(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n"])));

var StyledHorizontalBar = _styledComponents["default"].div.attrs({
  className: 'animation-control__horizontal-bar'
})(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 12px;\n"])));

var TimeDivider = function TimeDivider() {
  return /*#__PURE__*/_react["default"].createElement(StyledHorizontalBar, null, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
    height: "12px"
  }));
};

var TimeDisplayRow = function TimeDisplayRow(_ref) {
  var _ref$timeValues = _ref.timeValues,
      timeValues = _ref$timeValues === void 0 ? [] : _ref$timeValues;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "time-value"
  }, timeValues[0]), timeValues[1] ? /*#__PURE__*/_react["default"].createElement(TimeDivider, null) : null, timeValues[1] ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "time-value"
  }, timeValues[1]) : null);
};

function FloatingTimeDisplayFactory() {
  var FloatingTimeDisplay = function FloatingTimeDisplay(_ref2) {
    var currentTime = _ref2.currentTime,
        defaultTimeFormat = _ref2.defaultTimeFormat,
        timeFormat = _ref2.timeFormat,
        timezone = _ref2.timezone;

    var _useMemo = (0, _react.useMemo)(function () {
      var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
      var hasUserFormat = typeof timeFormat === 'string';
      var currentFormat = (hasUserFormat ? timeFormat : defaultTimeFormat) || _defaultSettings.DEFAULT_TIME_FORMAT;
      var dateFunc = (0, _dataUtils.datetimeFormatter)(timezone);

      if (hasUserFormat) {
        // dont split time if user defined it
        return {
          displayDate: groupTime.map(dateFunc(currentFormat)),
          displayTime: []
        };
      }

      return groupTime.reduce(function (accu, curr) {
        var _currentFormat$split = currentFormat.split(' '),
            _currentFormat$split2 = (0, _slicedToArray2["default"])(_currentFormat$split, 2),
            dateFormat = _currentFormat$split2[0],
            datetimeFormat = _currentFormat$split2[1];

        var dateString = dateFunc(dateFormat)(curr);
        var timeString = datetimeFormat ? dateFunc(datetimeFormat)(curr) : null;

        if (!accu.displayDate.includes(dateString)) {
          accu.displayDate.push(dateString);
        }

        if (timeString) {
          accu.displayTime.push(timeString);
        }

        return accu;
      }, {
        displayDate: [],
        displayTime: []
      });
    }, [currentTime, timeFormat, defaultTimeFormat, timezone]),
        displayDate = _useMemo.displayDate,
        displayTime = _useMemo.displayTime;

    var twoGroups = displayDate.length === 2 && displayTime.length === 2;
    var bottomRow = displayTime.length ? displayTime : displayDate.length ? displayDate : null;
    var topRow = displayDate.length && displayTime.length ? displayDate : null;
    return /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTimeDisplay, {
      className: "animation-control__time-display"
    }, twoGroups ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayGroups, null, /*#__PURE__*/_react["default"].createElement(StyledTimeValueGroup, null, /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, displayDate[0]), /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, displayTime[0])), /*#__PURE__*/_react["default"].createElement(TimeDivider, null), /*#__PURE__*/_react["default"].createElement(StyledTimeValueGroup, null, /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, displayDate[1]), /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, displayTime[1]))) : /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayRows, null, topRow ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, /*#__PURE__*/_react["default"].createElement(TimeDisplayRow, {
      timeValues: topRow
    })) : null, bottomRow ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, /*#__PURE__*/_react["default"].createElement(TimeDisplayRow, {
      timeValues: bottomRow
    })) : null)));
  };

  return FloatingTimeDisplay;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9mbG9hdGluZy10aW1lLWRpc3BsYXkuanMiXSwibmFtZXMiOlsiU3R5bGVkVGltZURpc3BsYXlXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwiYm90dG9tUGFuZWxHYXAiLCJib3R0b21Jbm5lclBkU2lkZSIsIlN0eWxlZFRpbWVEaXNwbGF5IiwicGFuZWxCYWNrZ3JvdW5kIiwidGltZURpc3BsYXlCb3JkZXJSYWRpdXMiLCJ0aXRsZVRleHRDb2xvciIsInRpbWVEaXNwbGF5SGVpZ2h0IiwidGltZURpc3BsYXlNaW5XaWR0aCIsInRpbWVEaXNwbGF5T3BhY2l0eSIsInRpbWVEaXNwbGF5UGFkZGluZyIsIlN0eWxlZFRpbWVEaXNwbGF5R3JvdXBzIiwiU3R5bGVkVGltZURpc3BsYXlSb3dzIiwiU3R5bGVkVGltZURpc3BsYXlUb3AiLCJ0ZXh0Q29sb3IiLCJTdHlsZWRUaW1lRGlzcGxheUJvdHRvbSIsIlN0eWxlZFRpbWVWYWx1ZUdyb3VwIiwiU3R5bGVkSG9yaXpvbnRhbEJhciIsIlRpbWVEaXZpZGVyIiwiVGltZURpc3BsYXlSb3ciLCJ0aW1lVmFsdWVzIiwiRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkiLCJGbG9hdGluZ1RpbWVEaXNwbGF5IiwiY3VycmVudFRpbWUiLCJkZWZhdWx0VGltZUZvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aW1lem9uZSIsImdyb3VwVGltZSIsIkFycmF5IiwiaXNBcnJheSIsImhhc1VzZXJGb3JtYXQiLCJjdXJyZW50Rm9ybWF0IiwiREVGQVVMVF9USU1FX0ZPUk1BVCIsImRhdGVGdW5jIiwiZGlzcGxheURhdGUiLCJtYXAiLCJkaXNwbGF5VGltZSIsInJlZHVjZSIsImFjY3UiLCJjdXJyIiwic3BsaXQiLCJkYXRlRm9ybWF0IiwiZGF0ZXRpbWVGb3JtYXQiLCJkYXRlU3RyaW5nIiwidGltZVN0cmluZyIsImluY2x1ZGVzIiwicHVzaCIsInR3b0dyb3VwcyIsImxlbmd0aCIsImJvdHRvbVJvdyIsInRvcFJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ2hEQyxFQUFBQSxTQUFTLEVBQUU7QUFEcUMsQ0FBakIsQ0FBSCx3TkFHbEIsVUFBQUMsS0FBSztBQUFBLCtCQUFtQkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGNBQS9CO0FBQUEsQ0FIYSxFQU9aLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQWhCO0FBQUEsQ0FQTyxDQUE5Qjs7QUFXQSxJQUFNQyxpQkFBaUIsR0FBR1IsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsMlJBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxlQUFoQjtBQUFBLENBSEosRUFJSixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLHVCQUFoQjtBQUFBLENBSkQsRUFLWixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGNBQWhCO0FBQUEsQ0FMTyxFQU9YLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8saUJBQWhCO0FBQUEsQ0FQTSxFQVNSLFVBQUFSLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsbUJBQWhCO0FBQUEsQ0FURyxFQVVWLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsa0JBQWhCO0FBQUEsQ0FWSyxFQVdWLFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxL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R0FBR2hCLFdBQVcsQ0FBQ2MsTUFBWixJQUFzQlosV0FBVyxDQUFDWSxNQUFsQyxHQUEyQ2QsV0FBM0MsR0FBeUQsSUFBeEU7QUFFQSx3QkFDRSxnQ0FBQyx3QkFBRCxxQkFDRSxnQ0FBQyxpQkFBRDtBQUFtQixNQUFBLFNBQVMsRUFBQztBQUE3QixPQUNHYSxTQUFTLGdCQUNSLGdDQUFDLHVCQUFELHFCQUNFLGdDQUFDLG9CQUFELHFCQUVFLGdDQUFDLG9CQUFELFFBQXVCYixXQUFXLENBQUMsQ0FBRCxDQUFsQyxDQUZGLGVBR0UsZ0NBQUMsdUJBQUQsUUFBMEJFLFdBQVcsQ0FBQyxDQUFELENBQXJDLENBSEYsQ0FERixlQU1FLGdDQUFDLFdBQUQsT0FORixlQU9FLGdDQUFDLG9CQUFELHFCQUVFLGdDQUFDLG9CQUFELFFBQXVCRixXQUFXLENBQUMsQ0FBRCxDQUFsQyxDQUZGLGVBR0UsZ0NBQUMsdUJBQUQsUUFBMEJFLFdBQVcsQ0FBQyxDQUFELENBQXJDLENBSEYsQ0FQRixDQURRLGdCQWVSLGdDQUFDLHFCQUFELFFBQ0djLE1BQU0sZ0JBQ0wsZ0NBQUMsb0JBQUQscUJBQ0UsZ0NBQUMsY0FBRDtBQUFnQixNQUFBLFVBQVUsRUFBRUE7QUFBNUIsTUFERixDQURLLEdBSUgsSUFMTixFQU1HRCxTQUFTLGdCQUNSLGdDQUFDLHVCQUFELHFCQUNFLGdDQUFDLGNBQUQ7QUFBZ0IsTUFBQSxVQUFVLEVBQUVBO0FBQTVCLE1BREYsQ0FEUSxHQUlOLElBVk4sQ0FoQkosQ0FERixDQURGO0FBa0NELEdBdkVEOztBQXlFQSxTQUFPM0IsbUJBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtNaW51c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtERUZBVUxUX1RJTUVfRk9STUFUfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0NlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7ZGF0ZXRpbWVGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBTdHlsZWRUaW1lRGlzcGxheVdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnZmxvYXRpbmctdGltZS1kaXNwbGF5J1xufSlgXG4gIGJvdHRvbTogJHtwcm9wcyA9PiBgY2FsYygxMDAlICsgJHtwcm9wcy50aGVtZS5ib3R0b21QYW5lbEdhcH1weClgfTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0ke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvdHRvbUlubmVyUGRTaWRlfXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFN0eWxlZFRpbWVEaXNwbGF5ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2Zsb2F0aW5nLXRpbWUtZGlzcGxheV9faW5uZXInXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbWVEaXNwbGF5Qm9yZGVyUmFkaXVzfXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW1lRGlzcGxheUhlaWdodH1weDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW1lRGlzcGxheU1pbldpZHRofXB4O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbWVEaXNwbGF5T3BhY2l0eX07XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGltZURpc3BsYXlQYWRkaW5nfTtcbmA7XG5cbmNvbnN0IFN0eWxlZFRpbWVEaXNwbGF5R3JvdXBzID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IFN0eWxlZFRpbWVEaXNwbGF5Um93cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkVGltZURpc3BsYXlUb3AgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYW5pbWF0aW9uLWNvbnRyb2xfX3RpbWUtZGlzcGxheV9fdG9wJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTdHlsZWRUaW1lRGlzcGxheUJvdHRvbSA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdhbmltYXRpb24tY29udHJvbF9fdGltZS1kaXNwbGF5X19ib3R0b20nXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkVGltZVZhbHVlR3JvdXAgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYW5pbWF0aW9uLWNvbnRyb2xfX3RpbWUtdmFsdWUtZ3JvdXAnXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFN0eWxlZEhvcml6b250YWxCYXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYW5pbWF0aW9uLWNvbnRyb2xfX2hvcml6b250YWwtYmFyJ1xufSlgXG4gIG1hcmdpbjogMCAxMnB4O1xuYDtcblxuY29uc3QgVGltZURpdmlkZXIgPSAoKSA9PiAoXG4gIDxTdHlsZWRIb3Jpem9udGFsQmFyPlxuICAgIDxNaW51cyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgPC9TdHlsZWRIb3Jpem9udGFsQmFyPlxuKTtcblxuY29uc3QgVGltZURpc3BsYXlSb3cgPSAoe3RpbWVWYWx1ZXMgPSBbXX0pID0+IChcbiAgPENlbnRlckZsZXhib3g+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXZhbHVlXCI+e3RpbWVWYWx1ZXNbMF19PC9kaXY+XG4gICAge3RpbWVWYWx1ZXNbMV0gPyA8VGltZURpdmlkZXIgLz4gOiBudWxsfVxuICAgIHt0aW1lVmFsdWVzWzFdID8gPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXZhbHVlXCI+e3RpbWVWYWx1ZXNbMV19PC9kaXY+IDogbnVsbH1cbiAgPC9DZW50ZXJGbGV4Ym94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkoKSB7XG4gIGNvbnN0IEZsb2F0aW5nVGltZURpc3BsYXkgPSAoe2N1cnJlbnRUaW1lLCBkZWZhdWx0VGltZUZvcm1hdCwgdGltZUZvcm1hdCwgdGltZXpvbmV9KSA9PiB7XG4gICAgY29uc3Qge2Rpc3BsYXlEYXRlLCBkaXNwbGF5VGltZX0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwVGltZSA9IEFycmF5LmlzQXJyYXkoY3VycmVudFRpbWUpID8gY3VycmVudFRpbWUgOiBbY3VycmVudFRpbWVdO1xuICAgICAgY29uc3QgaGFzVXNlckZvcm1hdCA9IHR5cGVvZiB0aW1lRm9ybWF0ID09PSAnc3RyaW5nJztcbiAgICAgIGNvbnN0IGN1cnJlbnRGb3JtYXQgPSAoaGFzVXNlckZvcm1hdCA/IHRpbWVGb3JtYXQgOiBkZWZhdWx0VGltZUZvcm1hdCkgfHwgREVGQVVMVF9USU1FX0ZPUk1BVDtcbiAgICAgIGNvbnN0IGRhdGVGdW5jID0gZGF0ZXRpbWVGb3JtYXR0ZXIodGltZXpvbmUpO1xuXG4gICAgICBpZiAoaGFzVXNlckZvcm1hdCkge1xuICAgICAgICAvLyBkb250IHNwbGl0IHRpbWUgaWYgdXNlciBkZWZpbmVkIGl0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlzcGxheURhdGU6IGdyb3VwVGltZS5tYXAoZGF0ZUZ1bmMoY3VycmVudEZvcm1hdCkpLFxuICAgICAgICAgIGRpc3BsYXlUaW1lOiBbXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdyb3VwVGltZS5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBjdXJyKSA9PiB7XG4gICAgICAgICAgY29uc3QgW2RhdGVGb3JtYXQsIGRhdGV0aW1lRm9ybWF0XSA9IGN1cnJlbnRGb3JtYXQuc3BsaXQoJyAnKTtcbiAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZUZ1bmMoZGF0ZUZvcm1hdCkoY3Vycik7XG4gICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGV0aW1lRm9ybWF0ID8gZGF0ZUZ1bmMoZGF0ZXRpbWVGb3JtYXQpKGN1cnIpIDogbnVsbDtcblxuICAgICAgICAgIGlmICghYWNjdS5kaXNwbGF5RGF0ZS5pbmNsdWRlcyhkYXRlU3RyaW5nKSkge1xuICAgICAgICAgICAgYWNjdS5kaXNwbGF5RGF0ZS5wdXNoKGRhdGVTdHJpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGltZVN0cmluZykge1xuICAgICAgICAgICAgYWNjdS5kaXNwbGF5VGltZS5wdXNoKHRpbWVTdHJpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgICB9LFxuICAgICAgICB7ZGlzcGxheURhdGU6IFtdLCBkaXNwbGF5VGltZTogW119XG4gICAgICApO1xuICAgIH0sIFtjdXJyZW50VGltZSwgdGltZUZvcm1hdCwgZGVmYXVsdFRpbWVGb3JtYXQsIHRpbWV6b25lXSk7XG5cbiAgICBjb25zdCB0d29Hcm91cHMgPSBkaXNwbGF5RGF0ZS5sZW5ndGggPT09IDIgJiYgZGlzcGxheVRpbWUubGVuZ3RoID09PSAyO1xuICAgIGNvbnN0IGJvdHRvbVJvdyA9IGRpc3BsYXlUaW1lLmxlbmd0aCA/IGRpc3BsYXlUaW1lIDogZGlzcGxheURhdGUubGVuZ3RoID8gZGlzcGxheURhdGUgOiBudWxsO1xuICAgIGNvbnN0IHRvcFJvdyA9IGRpc3BsYXlEYXRlLmxlbmd0aCAmJiBkaXNwbGF5VGltZS5sZW5ndGggPyBkaXNwbGF5RGF0ZSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5V3JhcHBlcj5cbiAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5IGNsYXNzTmFtZT1cImFuaW1hdGlvbi1jb250cm9sX190aW1lLWRpc3BsYXlcIj5cbiAgICAgICAgICB7dHdvR3JvdXBzID8gKFxuICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5R3JvdXBzPlxuICAgICAgICAgICAgICA8U3R5bGVkVGltZVZhbHVlR3JvdXA+XG4gICAgICAgICAgICAgICAgey8qIFRpbWUgU3RhcnQgKi99XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5VG9wPntkaXNwbGF5RGF0ZVswXX08L1N0eWxlZFRpbWVEaXNwbGF5VG9wPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheUJvdHRvbT57ZGlzcGxheVRpbWVbMF19PC9TdHlsZWRUaW1lRGlzcGxheUJvdHRvbT5cbiAgICAgICAgICAgICAgPC9TdHlsZWRUaW1lVmFsdWVHcm91cD5cbiAgICAgICAgICAgICAgPFRpbWVEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxTdHlsZWRUaW1lVmFsdWVHcm91cD5cbiAgICAgICAgICAgICAgICB7LyogVGltZSBFbmQgKi99XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5VG9wPntkaXNwbGF5RGF0ZVsxXX08L1N0eWxlZFRpbWVEaXNwbGF5VG9wPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheUJvdHRvbT57ZGlzcGxheVRpbWVbMV19PC9TdHlsZWRUaW1lRGlzcGxheUJvdHRvbT5cbiAgICAgICAgICAgICAgPC9TdHlsZWRUaW1lVmFsdWVHcm91cD5cbiAgICAgICAgICAgIDwvU3R5bGVkVGltZURpc3BsYXlHcm91cHM+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheVJvd3M+XG4gICAgICAgICAgICAgIHt0b3BSb3cgPyAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5VG9wPlxuICAgICAgICAgICAgICAgICAgPFRpbWVEaXNwbGF5Um93IHRpbWVWYWx1ZXM9e3RvcFJvd30gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRpbWVEaXNwbGF5VG9wPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAge2JvdHRvbVJvdyA/IChcbiAgICAgICAgICAgICAgICA8U3R5bGVkVGltZURpc3BsYXlCb3R0b20+XG4gICAgICAgICAgICAgICAgICA8VGltZURpc3BsYXlSb3cgdGltZVZhbHVlcz17Ym90dG9tUm93fSAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGltZURpc3BsYXlCb3R0b20+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9TdHlsZWRUaW1lRGlzcGxheVJvd3M+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9TdHlsZWRUaW1lRGlzcGxheT5cbiAgICAgIDwvU3R5bGVkVGltZURpc3BsYXlXcmFwcGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEZsb2F0aW5nVGltZURpc3BsYXk7XG59XG4iXX0=