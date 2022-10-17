"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _histogramPlot = _interopRequireDefault(require("./histogram-plot"));

var _lineChart = _interopRequireDefault(require("./line-chart"));

var _utils = require("../../utils/utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledRangePlot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: ", "px;\n  display: flex;\n  position: 'relative';\n"])), function (props) {
  return props.theme.sliderBarHeight;
});

RangePlotFactory.deps = [_rangeBrush["default"], _histogramPlot["default"], _lineChart["default"]];

function RangePlotFactory(RangeBrush, HistogramPlot, LineChart) {
  var RangePlot = function RangePlot(_ref) {
    var onBrush = _ref.onBrush,
        range = _ref.range,
        value = _ref.value,
        width = _ref.width,
        plotType = _ref.plotType,
        lineChart = _ref.lineChart,
        histogram = _ref.histogram,
        isEnlarged = _ref.isEnlarged,
        isRanged = _ref.isRanged,
        theme = _ref.theme,
        chartProps = (0, _objectWithoutProperties2["default"])(_ref, ["onBrush", "range", "value", "width", "plotType", "lineChart", "histogram", "isEnlarged", "isRanged", "theme"]);

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        brushing = _useState2[0],
        setBrushing = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        hoveredDP = _useState4[0],
        onMouseMove = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        enableChartHover = _useState6[0],
        setEnableChartHover = _useState6[1];

    var height = isEnlarged ? theme.rangePlotHLarge : theme.rangePlotH;
    var onBrushStart = (0, _react.useCallback)(function () {
      setBrushing(true);
      onMouseMove(null);
      setEnableChartHover(false);
    }, [setBrushing, onMouseMove, setEnableChartHover]);
    var onBrushEnd = (0, _react.useCallback)(function () {
      setBrushing(false);
      setEnableChartHover(true);
    }, [setBrushing, setEnableChartHover]);
    var onMouseoverHandle = (0, _react.useCallback)(function () {
      onMouseMove(null);
      setEnableChartHover(false);
    }, [onMouseMove, setEnableChartHover]);
    var onMouseoutHandle = (0, _react.useCallback)(function () {
      setEnableChartHover(true);
    }, [setEnableChartHover]); // JsDom have limited support for SVG, d3 will fail

    var brushComponent = (0, _utils.isTest)() ? null : /*#__PURE__*/_react["default"].createElement(RangeBrush, (0, _extends2["default"])({
      onBrush: onBrush,
      onBrushStart: onBrushStart,
      onBrushEnd: onBrushEnd,
      range: range,
      value: value,
      width: width,
      height: height,
      isRanged: isRanged,
      onMouseoverHandle: onMouseoverHandle,
      onMouseoutHandle: onMouseoutHandle
    }, chartProps));

    var commonProps = _objectSpread({
      width: width,
      value: value,
      height: height,
      margin: isEnlarged ? theme.rangePlotMarginLarge : theme.rangePlotMargin,
      brushComponent: brushComponent,
      brushing: brushing,
      isEnlarged: isEnlarged,
      enableChartHover: enableChartHover,
      onMouseMove: onMouseMove,
      hoveredDP: hoveredDP,
      isRanged: isRanged
    }, chartProps);

    return /*#__PURE__*/_react["default"].createElement(StyledRangePlot, {
      style: {
        height: "".concat(isEnlarged ? theme.rangePlotContainerHLarge : theme.rangePlotContainerH, "px")
      },
      className: "kg-range-slider__plot"
    }, plotType === 'lineChart' && lineChart ? /*#__PURE__*/_react["default"].createElement(LineChart, (0, _extends2["default"])({
      lineChart: lineChart
    }, commonProps)) : /*#__PURE__*/_react["default"].createElement(HistogramPlot, (0, _extends2["default"])({
      histogram: histogram
    }, commonProps)));
  };

  RangePlot.propTypes = {
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      x0: _propTypes["default"].number,
      x1: _propTypes["default"].number
    })),
    lineChart: _propTypes["default"].object,
    plotType: _propTypes["default"].string,
    isEnlarged: _propTypes["default"].bool,
    onBlur: _propTypes["default"].func,
    width: _propTypes["default"].number.isRequired
  };
  return (0, _styledComponents.withTheme)(RangePlot);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbIlN0eWxlZFJhbmdlUGxvdCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJIZWlnaHQiLCJSYW5nZVBsb3RGYWN0b3J5IiwiZGVwcyIsIlJhbmdlQnJ1c2hGYWN0b3J5IiwiSGlzdG9ncmFtUGxvdEZhY3RvcnkiLCJMaW5lQ2hhcnRGYWN0b3J5IiwiUmFuZ2VCcnVzaCIsIkhpc3RvZ3JhbVBsb3QiLCJMaW5lQ2hhcnQiLCJSYW5nZVBsb3QiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJsaW5lQ2hhcnQiLCJoaXN0b2dyYW0iLCJpc0VubGFyZ2VkIiwiaXNSYW5nZWQiLCJjaGFydFByb3BzIiwiYnJ1c2hpbmciLCJzZXRCcnVzaGluZyIsImhvdmVyZWREUCIsIm9uTW91c2VNb3ZlIiwiZW5hYmxlQ2hhcnRIb3ZlciIsInNldEVuYWJsZUNoYXJ0SG92ZXIiLCJoZWlnaHQiLCJyYW5nZVBsb3RITGFyZ2UiLCJyYW5nZVBsb3RIIiwib25CcnVzaFN0YXJ0Iiwib25CcnVzaEVuZCIsIm9uTW91c2VvdmVySGFuZGxlIiwib25Nb3VzZW91dEhhbmRsZSIsImJydXNoQ29tcG9uZW50IiwiY29tbW9uUHJvcHMiLCJtYXJnaW4iLCJyYW5nZVBsb3RNYXJnaW5MYXJnZSIsInJhbmdlUGxvdE1hcmdpbiIsInJhbmdlUGxvdENvbnRhaW5lckhMYXJnZSIsInJhbmdlUGxvdENvbnRhaW5lckgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwieDAiLCJ4MSIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJvbkJsdXIiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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NUIsSUFBQUEsU0FBUyxFQUFFeUIsc0JBQVVDLE9BQVYsQ0FDVEQsc0JBQVVJLEtBQVYsQ0FBZ0I7QUFDZEMsTUFBQUEsRUFBRSxFQUFFTCxzQkFBVUUsTUFEQTtBQUVkSSxNQUFBQSxFQUFFLEVBQUVOLHNCQUFVRTtBQUZBLEtBQWhCLENBRFMsQ0FGUztBQVFwQjVCLElBQUFBLFNBQVMsRUFBRTBCLHNCQUFVTyxNQVJEO0FBU3BCbEMsSUFBQUEsUUFBUSxFQUFFMkIsc0JBQVVRLE1BVEE7QUFVcEJoQyxJQUFBQSxVQUFVLEVBQUV3QixzQkFBVVMsSUFWRjtBQVdwQkMsSUFBQUEsTUFBTSxFQUFFVixzQkFBVVcsSUFYRTtBQVlwQnZDLElBQUFBLEtBQUssRUFBRTRCLHNCQUFVRSxNQUFWLENBQWlCQztBQVpKLEdBQXRCO0FBY0EsU0FBTyxpQ0FBVW5DLFNBQVYsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJhbmdlQnJ1c2hGYWN0b3J5IGZyb20gJy4vcmFuZ2UtYnJ1c2gnO1xuaW1wb3J0IEhpc3RvZ3JhbVBsb3RGYWN0b3J5IGZyb20gJy4vaGlzdG9ncmFtLXBsb3QnO1xuaW1wb3J0IExpbmVDaGFydEZhY3RvcnkgZnJvbSAnLi9saW5lLWNoYXJ0JztcbmltcG9ydCB7aXNUZXN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmNvbnN0IFN0eWxlZFJhbmdlUGxvdCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFySGVpZ2h0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJztcbmA7XG5cblJhbmdlUGxvdEZhY3RvcnkuZGVwcyA9IFtSYW5nZUJydXNoRmFjdG9yeSwgSGlzdG9ncmFtUGxvdEZhY3RvcnksIExpbmVDaGFydEZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5nZVBsb3RGYWN0b3J5KFJhbmdlQnJ1c2gsIEhpc3RvZ3JhbVBsb3QsIExpbmVDaGFydCkge1xuICBjb25zdCBSYW5nZVBsb3QgPSAoe1xuICAgIG9uQnJ1c2gsXG4gICAgcmFuZ2UsXG4gICAgdmFsdWUsXG4gICAgd2lkdGgsXG4gICAgcGxvdFR5cGUsXG4gICAgbGluZUNoYXJ0LFxuICAgIGhpc3RvZ3JhbSxcbiAgICBpc0VubGFyZ2VkLFxuICAgIGlzUmFuZ2VkLFxuICAgIHRoZW1lLFxuICAgIC4uLmNoYXJ0UHJvcHNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFticnVzaGluZywgc2V0QnJ1c2hpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtob3ZlcmVkRFAsIG9uTW91c2VNb3ZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtlbmFibGVDaGFydEhvdmVyLCBzZXRFbmFibGVDaGFydEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoZWlnaHQgPSBpc0VubGFyZ2VkID8gdGhlbWUucmFuZ2VQbG90SExhcmdlIDogdGhlbWUucmFuZ2VQbG90SDtcblxuICAgIGNvbnN0IG9uQnJ1c2hTdGFydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldEJydXNoaW5nKHRydWUpO1xuICAgICAgb25Nb3VzZU1vdmUobnVsbCk7XG4gICAgICBzZXRFbmFibGVDaGFydEhvdmVyKGZhbHNlKTtcbiAgICB9LCBbc2V0QnJ1c2hpbmcsIG9uTW91c2VNb3ZlLCBzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICBjb25zdCBvbkJydXNoRW5kID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0QnJ1c2hpbmcoZmFsc2UpO1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3Zlcih0cnVlKTtcbiAgICB9LCBbc2V0QnJ1c2hpbmcsIHNldEVuYWJsZUNoYXJ0SG92ZXJdKTtcblxuICAgIGNvbnN0IG9uTW91c2VvdmVySGFuZGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgb25Nb3VzZU1vdmUobnVsbCk7XG4gICAgICBzZXRFbmFibGVDaGFydEhvdmVyKGZhbHNlKTtcbiAgICB9LCBbb25Nb3VzZU1vdmUsIHNldEVuYWJsZUNoYXJ0SG92ZXJdKTtcblxuICAgIGNvbnN0IG9uTW91c2VvdXRIYW5kbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzZXRFbmFibGVDaGFydEhvdmVyKHRydWUpO1xuICAgIH0sIFtzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICAvLyBKc0RvbSBoYXZlIGxpbWl0ZWQgc3VwcG9ydCBmb3IgU1ZHLCBkMyB3aWxsIGZhaWxcbiAgICBjb25zdCBicnVzaENvbXBvbmVudCA9IGlzVGVzdCgpID8gbnVsbCA6IChcbiAgICAgIDxSYW5nZUJydXNoXG4gICAgICAgIG9uQnJ1c2g9e29uQnJ1c2h9XG4gICAgICAgIG9uQnJ1c2hTdGFydD17b25CcnVzaFN0YXJ0fVxuICAgICAgICBvbkJydXNoRW5kPXtvbkJydXNoRW5kfVxuICAgICAgICByYW5nZT17cmFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICBvbk1vdXNlb3ZlckhhbmRsZT17b25Nb3VzZW92ZXJIYW5kbGV9XG4gICAgICAgIG9uTW91c2VvdXRIYW5kbGU9e29uTW91c2VvdXRIYW5kbGV9XG4gICAgICAgIHsuLi5jaGFydFByb3BzfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIHZhbHVlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgbWFyZ2luOiBpc0VubGFyZ2VkID8gdGhlbWUucmFuZ2VQbG90TWFyZ2luTGFyZ2UgOiB0aGVtZS5yYW5nZVBsb3RNYXJnaW4sXG4gICAgICBicnVzaENvbXBvbmVudCxcbiAgICAgIGJydXNoaW5nLFxuICAgICAgaXNFbmxhcmdlZCxcbiAgICAgIGVuYWJsZUNoYXJ0SG92ZXIsXG4gICAgICBvbk1vdXNlTW92ZSxcbiAgICAgIGhvdmVyZWREUCxcbiAgICAgIGlzUmFuZ2VkLFxuICAgICAgLi4uY2hhcnRQcm9wc1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFJhbmdlUGxvdFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGhlaWdodDogYCR7aXNFbmxhcmdlZCA/IHRoZW1lLnJhbmdlUGxvdENvbnRhaW5lckhMYXJnZSA6IHRoZW1lLnJhbmdlUGxvdENvbnRhaW5lckh9cHhgXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9fcGxvdFwiXG4gICAgICA+XG4gICAgICAgIHtwbG90VHlwZSA9PT0gJ2xpbmVDaGFydCcgJiYgbGluZUNoYXJ0ID8gKFxuICAgICAgICAgIDxMaW5lQ2hhcnQgbGluZUNoYXJ0PXtsaW5lQ2hhcnR9IHsuLi5jb21tb25Qcm9wc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SGlzdG9ncmFtUGxvdCBoaXN0b2dyYW09e2hpc3RvZ3JhbX0gey4uLmNvbW1vblByb3BzfSAvPlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRSYW5nZVBsb3Q+XG4gICAgKTtcbiAgfTtcblxuICBSYW5nZVBsb3QucHJvcFR5cGVzID0ge1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgIGhpc3RvZ3JhbTogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB4MDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgeDE6IFByb3BUeXBlcy5udW1iZXJcbiAgICAgIH0pXG4gICAgKSxcbiAgICBsaW5lQ2hhcnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxvdFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNFbmxhcmdlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG4gIHJldHVybiB3aXRoVGhlbWUoUmFuZ2VQbG90KTtcbn1cbiJdfQ==