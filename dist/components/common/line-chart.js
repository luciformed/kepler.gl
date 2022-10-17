"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dataUtils = require("../../utils/data-utils");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LineChartWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot {\n    /* important for rendering hint */\n    position: relative;\n  }\n  .rv-xy-plot__inner {\n    /* important to show axis */\n    overflow: visible;\n  }\n\n  .rv-xy-plot__grid-lines__line {\n    stroke: ", ";\n    stroke-dasharray: 1px 4px;\n  }\n\n  .rv-xy-plot__axis__tick__text {\n    font-size: 9px;\n    fill: ", ";\n  }\n"])), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.textColor;
});

var StyledHint = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"])), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      format = _ref.format;
  return /*#__PURE__*/_react["default"].createElement(StyledHint, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, y));
};

var MARGIN = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

function LineChartFactory() {
  var LineChart = function LineChart(_ref2) {
    var brushComponent = _ref2.brushComponent,
        brushing = _ref2.brushing,
        color = _ref2.color,
        enableChartHover = _ref2.enableChartHover,
        height = _ref2.height,
        hoveredDP = _ref2.hoveredDP,
        isEnlarged = _ref2.isEnlarged,
        lineChart = _ref2.lineChart,
        margin = _ref2.margin,
        onMouseMove = _ref2.onMouseMove,
        width = _ref2.width,
        timezone = _ref2.timezone,
        timeFormat = _ref2.timeFormat;
    var series = lineChart.series,
        yDomain = lineChart.yDomain;
    var brushData = (0, _react.useMemo)(function () {
      return [{
        x: series[0].x,
        y: yDomain[1],
        customComponent: function customComponent() {
          return brushComponent;
        }
      }];
    }, [series, yDomain, brushComponent]);
    var hintFormatter = (0, _react.useMemo)(function () {
      return (0, _dataUtils.datetimeFormatter)(timezone)(timeFormat);
    }, [timezone, timeFormat]);
    return /*#__PURE__*/_react["default"].createElement(LineChartWrapper, {
      style: {
        marginTop: "".concat(margin.top, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.XYPlot, {
      xType: "time",
      width: width,
      height: height,
      margin: MARGIN,
      onMouseLeave: function onMouseLeave() {
        onMouseMove(null);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.HorizontalGridLines, {
      tickTotal: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.LineSeries, {
      style: {
        fill: 'none'
      },
      strokeWidth: 2,
      color: color,
      data: series,
      onNearestX: enableChartHover ? onMouseMove : null
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.MarkSeries, {
      data: hoveredDP ? [hoveredDP] : [],
      color: color,
      size: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.CustomSVGSeries, {
      data: brushData
    }), isEnlarged && /*#__PURE__*/_react["default"].createElement(_reactVis.YAxis, {
      tickTotal: 3
    }), hoveredDP && enableChartHover && !brushing ? /*#__PURE__*/_react["default"].createElement(_reactVis.Hint, {
      value: hoveredDP
    }, /*#__PURE__*/_react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
      format: hintFormatter
    }))) : null));
  };

  return LineChart;
}

var _default = LineChartFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9saW5lLWNoYXJ0LmpzIl0sIm5hbWVzIjpbIkxpbmVDaGFydFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiaGlzdG9ncmFtRmlsbE91dFJhbmdlIiwidGV4dENvbG9yIiwiU3R5bGVkSGludCIsInRleHRDb2xvckxUIiwiSGludENvbnRlbnQiLCJ4IiwieSIsImZvcm1hdCIsIk1BUkdJTiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIkxpbmVDaGFydEZhY3RvcnkiLCJMaW5lQ2hhcnQiLCJicnVzaENvbXBvbmVudCIsImJydXNoaW5nIiwiY29sb3IiLCJlbmFibGVDaGFydEhvdmVyIiwiaGVpZ2h0IiwiaG92ZXJlZERQIiwiaXNFbmxhcmdlZCIsImxpbmVDaGFydCIsIm1hcmdpbiIsIm9uTW91c2VNb3ZlIiwid2lkdGgiLCJ0aW1lem9uZSIsInRpbWVGb3JtYXQiLCJzZXJpZXMiLCJ5RG9tYWluIiwiYnJ1c2hEYXRhIiwiY3VzdG9tQ29tcG9uZW50IiwiaGludEZvcm1hdHRlciIsIm1hcmdpblRvcCIsImZpbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFTQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsNkJBQU9DLEdBQVYsb2JBV1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxxQkFBaEI7QUFBQSxDQVhHLEVBaUJWLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBaEI7QUFBQSxDQWpCSyxDQUF0Qjs7QUFxQkEsSUFBTUMsVUFBVSxHQUFHTiw2QkFBT0MsR0FBVix1UUFHTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLFdBQWhCO0FBQUEsQ0FIQSxDQUFoQjs7QUFXQSxJQUFNQyxXQUFXLEdBQUcs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LEdBQWlCO0FBTC9DLE1BVkYsZUFpQkUsZ0NBQUMsb0JBQUQ7QUFBWSxNQUFBLElBQUksRUFBRUosU0FBUyxHQUFHLENBQUNBLFNBQUQsQ0FBSCxHQUFpQixFQUE1QztBQUFnRCxNQUFBLEtBQUssRUFBRUgsS0FBdkQ7QUFBOEQsTUFBQSxJQUFJLEVBQUU7QUFBcEUsTUFqQkYsZUFrQkUsZ0NBQUMseUJBQUQ7QUFBaUIsTUFBQSxJQUFJLEVBQUVhO0FBQXZCLE1BbEJGLEVBbUJHVCxVQUFVLGlCQUFJLGdDQUFDLGVBQUQ7QUFBTyxNQUFBLFNBQVMsRUFBRTtBQUFsQixNQW5CakIsRUFvQkdELFNBQVMsSUFBSUYsZ0JBQWIsSUFBaUMsQ0FBQ0YsUUFBbEMsZ0JBQ0MsZ0NBQUMsY0FBRDtBQUFNLE1BQUEsS0FBSyxFQUFFSTtBQUFiLG9CQUNFLGdDQUFDLFdBQUQsZ0NBQWlCQSxTQUFqQjtBQUE0QixNQUFBLE1BQU0sRUFBRVk7QUFBcEMsT0FERixDQURELEdBSUcsSUF4Qk4sQ0FERixDQURGO0FBOEJELEdBdkREOztBQXdEQSxTQUFPbEIsU0FBUDtBQUNEOztlQUVjRCxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEhvcml6b250YWxHcmlkTGluZXMsXG4gIExpbmVTZXJpZXMsXG4gIFhZUGxvdCxcbiAgQ3VzdG9tU1ZHU2VyaWVzLFxuICBIaW50LFxuICBZQXhpcyxcbiAgTWFya1Nlcmllc1xufSBmcm9tICdyZWFjdC12aXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2RhdGV0aW1lRm9ybWF0dGVyfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgTGluZUNoYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5ydi14eS1wbG90IHtcbiAgICAvKiBpbXBvcnRhbnQgZm9yIHJlbmRlcmluZyBoaW50ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5ydi14eS1wbG90X19pbm5lciB7XG4gICAgLyogaW1wb3J0YW50IHRvIHNob3cgYXhpcyAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLnJ2LXh5LXBsb3RfX2dyaWQtbGluZXNfX2xpbmUge1xuICAgIHN0cm9rZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oaXN0b2dyYW1GaWxsT3V0UmFuZ2V9O1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDFweCA0cHg7XG4gIH1cblxuICAucnYteHktcGxvdF9fYXhpc19fdGlja19fdGV4dCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRIaW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDhlMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW46IDRweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcblxuY29uc3QgSGludENvbnRlbnQgPSAoe3gsIHksIGZvcm1hdH0pID0+IChcbiAgPFN0eWxlZEhpbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaW50LS14XCI+e2Zvcm1hdCh4KX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPnt5fTwvZGl2PlxuICA8L1N0eWxlZEhpbnQ+XG4pO1xuXG5jb25zdCBNQVJHSU4gPSB7dG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwfTtcbmZ1bmN0aW9uIExpbmVDaGFydEZhY3RvcnkoKSB7XG4gIGNvbnN0IExpbmVDaGFydCA9ICh7XG4gICAgYnJ1c2hDb21wb25lbnQsXG4gICAgYnJ1c2hpbmcsXG4gICAgY29sb3IsXG4gICAgZW5hYmxlQ2hhcnRIb3ZlcixcbiAgICBoZWlnaHQsXG4gICAgaG92ZXJlZERQLFxuICAgIGlzRW5sYXJnZWQsXG4gICAgbGluZUNoYXJ0LFxuICAgIG1hcmdpbixcbiAgICBvbk1vdXNlTW92ZSxcbiAgICB3aWR0aCxcbiAgICB0aW1lem9uZSxcbiAgICB0aW1lRm9ybWF0XG4gIH0pID0+IHtcbiAgICBjb25zdCB7c2VyaWVzLCB5RG9tYWlufSA9IGxpbmVDaGFydDtcblxuICAgIGNvbnN0IGJydXNoRGF0YSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIFt7eDogc2VyaWVzWzBdLngsIHk6IHlEb21haW5bMV0sIGN1c3RvbUNvbXBvbmVudDogKCkgPT4gYnJ1c2hDb21wb25lbnR9XTtcbiAgICB9LCBbc2VyaWVzLCB5RG9tYWluLCBicnVzaENvbXBvbmVudF0pO1xuICAgIGNvbnN0IGhpbnRGb3JtYXR0ZXIgPSB1c2VNZW1vKCgpID0+IGRhdGV0aW1lRm9ybWF0dGVyKHRpbWV6b25lKSh0aW1lRm9ybWF0KSwgW1xuICAgICAgdGltZXpvbmUsXG4gICAgICB0aW1lRm9ybWF0XG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpbmVDaGFydFdyYXBwZXIgc3R5bGU9e3ttYXJnaW5Ub3A6IGAke21hcmdpbi50b3B9cHhgfX0+XG4gICAgICAgIDxYWVBsb3RcbiAgICAgICAgICB4VHlwZT1cInRpbWVcIlxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBtYXJnaW49e01BUkdJTn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyaWRMaW5lcyB0aWNrVG90YWw9ezN9IC8+XG4gICAgICAgICAgPExpbmVTZXJpZXNcbiAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogJ25vbmUnfX1cbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgZGF0YT17c2VyaWVzfVxuICAgICAgICAgICAgb25OZWFyZXN0WD17ZW5hYmxlQ2hhcnRIb3ZlciA/IG9uTW91c2VNb3ZlIDogbnVsbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNYXJrU2VyaWVzIGRhdGE9e2hvdmVyZWREUCA/IFtob3ZlcmVkRFBdIDogW119IGNvbG9yPXtjb2xvcn0gc2l6ZT17M30gLz5cbiAgICAgICAgICA8Q3VzdG9tU1ZHU2VyaWVzIGRhdGE9e2JydXNoRGF0YX0gLz5cbiAgICAgICAgICB7aXNFbmxhcmdlZCAmJiA8WUF4aXMgdGlja1RvdGFsPXszfSAvPn1cbiAgICAgICAgICB7aG92ZXJlZERQICYmIGVuYWJsZUNoYXJ0SG92ZXIgJiYgIWJydXNoaW5nID8gKFxuICAgICAgICAgICAgPEhpbnQgdmFsdWU9e2hvdmVyZWREUH0+XG4gICAgICAgICAgICAgIDxIaW50Q29udGVudCB7Li4uaG92ZXJlZERQfSBmb3JtYXQ9e2hpbnRGb3JtYXR0ZXJ9IC8+XG4gICAgICAgICAgICA8L0hpbnQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvWFlQbG90PlxuICAgICAgPC9MaW5lQ2hhcnRXcmFwcGVyPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBMaW5lQ2hhcnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydEZhY3Rvcnk7XG4iXX0=