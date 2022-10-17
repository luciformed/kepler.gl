"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTickFormat = getTickFormat;
exports.getXAxis = getXAxis;
exports.updateAxis = updateAxis;
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dataUtils = require("../../utils/data-utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MIN_TICK_WIDTH_LARGE = 80;
var MIN_TICK_WIDTH_SMALL = 50;
var HEIGHT = 30;

var TimeSliderContainer = _styledComponents["default"].svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  overflow: visible;\n  margin-top: 6px;\n\n  .axis text {\n    font-size: ", ";\n    fill: ", ";\n  }\n\n  .axis line,\n  .axis path {\n    fill: none;\n    stroke: ", ";\n    shape-rendering: crispEdges;\n    stroke-width: 2;\n  }\n\n  .axis .domain {\n    display: none;\n  }\n\n  .value {\n    fill: ", ";\n    font-size: ", ";\n\n    &.start {\n      text-anchor: start;\n    }\n\n    &.end {\n      text-anchor: end;\n    }\n  }\n"])), function (props) {
  return props.theme.axisFontSize;
}, function (props) {
  return props.theme.axisFontColor;
}, function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.axisFontColor;
}, function (props) {
  return props.theme.axisFontSize;
});

var TICK_FORMATS = {
  millisecond: '.SSS',
  second: ':ss',
  minute: 'HH:ss',
  hour: 'HH A',
  day: 'ddd DD',
  week: 'MMM DD',
  month: 'MMM',
  year: 'YYYY'
}; // timezone sensitive tick formatter based on moment
// adapted based on d3 time scale tick format https://github.com/d3/d3-scale/blob/master/src/time.js#L59

function getTickFormat(timezone) {
  // date is js date object
  var toMoment = timezone ? function (date) {
    return (0, _moment["default"])(date).tz(timezone);
  } : _moment["default"];
  var formatter = (0, _dataUtils.datetimeFormatter)(timezone);
  return function (date) {
    return (toMoment(date).startOf('second') < date ? formatter(TICK_FORMATS.millisecond) : toMoment(date).startOf('minute') < date ? formatter(TICK_FORMATS.second) : toMoment(date).startOf('hour') < date ? formatter(TICK_FORMATS.minute) : toMoment(date).startOf('day') < date ? formatter(TICK_FORMATS.hour) : toMoment(date).startOf('month') < date ? toMoment(date).startOf('isoWeek') < date ? formatter(TICK_FORMATS.day) : formatter(TICK_FORMATS.week) : toMoment(date).startOf('year') < date ? formatter(TICK_FORMATS.month) : formatter(TICK_FORMATS.year))(date);
  };
} // create a helper function so we can test it


function getXAxis(domain, width, isEnlarged, timezone) {
  if (!Array.isArray(domain) || !domain.every(Number.isFinite)) {
    return null;
  }

  var scale = (0, _d3Scale.scaleUtc)().domain(domain).range([0, width]);

  if (!scale) {
    return null;
  }

  var ticks = Math.floor(width / (isEnlarged ? MIN_TICK_WIDTH_LARGE : MIN_TICK_WIDTH_SMALL));
  var tickFormat = timezone ? getTickFormat(timezone) : null;
  var xAxis = (0, _d3Axis.axisBottom)(scale).ticks(ticks).tickSize(0).tickPadding(12);

  if (tickFormat) {
    xAxis.tickFormat(tickFormat);
  }

  return xAxis;
}

function updateAxis(xAxisRef, xAxis) {
  if (!xAxis) {
    return;
  }

  (0, _d3Selection.select)(xAxisRef.current).call(xAxis);
}

function TimeSliderMarkerFactory() {
  var TimeSliderMarker = function TimeSliderMarker(_ref) {
    var width = _ref.width,
        domain = _ref.domain,
        _ref$isEnlarged = _ref.isEnlarged,
        isEnlarged = _ref$isEnlarged === void 0 ? true : _ref$isEnlarged,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? HEIGHT : _ref$height,
        timezone = _ref.timezone;
    var xAxisRef = (0, _react.useRef)(null);
    var xAxis = (0, _react.useMemo)(function () {
      return getXAxis(domain, width, isEnlarged, timezone);
    }, [domain, width, isEnlarged, timezone]);
    (0, _react.useEffect)(function () {
      updateAxis(xAxisRef, xAxis);
    }, [xAxisRef, xAxis]);
    return /*#__PURE__*/_react["default"].createElement(TimeSliderContainer, {
      className: "time-slider-marker",
      width: width,
      height: height
    }, /*#__PURE__*/_react["default"].createElement("g", {
      className: "x axis",
      ref: xAxisRef,
      transform: "translate(0, 0)"
    }));
  };

  TimeSliderMarker.propTypes = {
    domain: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    width: _propTypes["default"].number.isRequired
  };
  return /*#__PURE__*/_react["default"].memo(TimeSliderMarker);
}

var _default = TimeSliderMarkerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXIuanMiXSwibmFtZXMiOlsiTUlOX1RJQ0tfV0lEVEhfTEFSR0UiLCJNSU5fVElDS19XSURUSF9TTUFMTCIsIkhFSUdIVCIsIlRpbWVTbGlkZXJDb250YWluZXIiLCJzdHlsZWQiLCJzdmciLCJwcm9wcyIsInRoZW1lIiwiYXhpc0ZvbnRTaXplIiwiYXhpc0ZvbnRDb2xvciIsInNsaWRlckJhckJnZCIsIlRJQ0tfRk9STUFUUyIsIm1pbGxpc2Vjb25kIiwic2Vjb25kIiwibWludXRlIiwiaG91ciIsImRheSIsIndlZWsiLCJtb250aCIsInllYXIiLCJnZXRUaWNrRm9ybWF0IiwidGltZXpvbmUiLCJ0b01vbWVudCIsImRhdGUiLCJ0eiIsIm1vbWVudCIsImZvcm1hdHRlciIsInN0YXJ0T2YiLCJnZXRYQXhpcyIsImRvbWFpbiIsIndpZHRoIiwiaXNFbmxhcmdlZCIsIkFycmF5IiwiaXNBcnJheSIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJzY2FsZSIsInJhbmdlIiwidGlja3MiLCJNYXRoIiwiZmxvb3IiLCJ0aWNrRm9ybWF0IiwieEF4aXMiLCJ0aWNrU2l6ZSIsInRpY2tQYWRkaW5nIiwidXBkYXRlQXhpcyIsInhBeGlzUmVmIiwiY3VycmVudCIsImNhbGwiLCJUaW1lU2xpZGVyTWFya2VyRmFjdG9yeSIsIlRpbWVTbGlkZXJNYXJrZXIiLCJoZWlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxFQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLEVBQTdCO0FBQ0EsSUFB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b2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtzY2FsZVV0Y30gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge2F4aXNCb3R0b219IGZyb20gJ2QzLWF4aXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2RhdGV0aW1lRm9ybWF0dGVyfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgTUlOX1RJQ0tfV0lEVEhfTEFSR0UgPSA4MDtcbmNvbnN0IE1JTl9USUNLX1dJRFRIX1NNQUxMID0gNTA7XG5jb25zdCBIRUlHSFQgPSAzMDtcblxuY29uc3QgVGltZVNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5zdmdgXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1hcmdpbi10b3A6IDZweDtcblxuICAuYXhpcyB0ZXh0IHtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYXhpc0ZvbnRTaXplfTtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmF4aXNGb250Q29sb3J9O1xuICB9XG5cbiAgLmF4aXMgbGluZSxcbiAgLmF4aXMgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmF4aXMgLmRvbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5heGlzRm9udENvbG9yfTtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYXhpc0ZvbnRTaXplfTtcblxuICAgICYuc3RhcnQge1xuICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRleHQtYW5jaG9yOiBlbmQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUSUNLX0ZPUk1BVFMgPSB7XG4gIG1pbGxpc2Vjb25kOiAnLlNTUycsXG4gIHNlY29uZDogJzpzcycsXG4gIG1pbnV0ZTogJ0hIOnNzJyxcbiAgaG91cjogJ0hIIEEnLFxuICBkYXk6ICdkZGQgREQnLFxuICB3ZWVrOiAnTU1NIEREJyxcbiAgbW9udGg6ICdNTU0nLFxuICB5ZWFyOiAnWVlZWSdcbn07XG5cbi8vIHRpbWV6b25lIHNlbnNpdGl2ZSB0aWNrIGZvcm1hdHRlciBiYXNlZCBvbiBtb21lbnRcbi8vIGFkYXB0ZWQgYmFzZWQgb24gZDMgdGltZSBzY2FsZSB0aWNrIGZvcm1hdCBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMtc2NhbGUvYmxvYi9tYXN0ZXIvc3JjL3RpbWUuanMjTDU5XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlja0Zvcm1hdCh0aW1lem9uZSkge1xuICAvLyBkYXRlIGlzIGpzIGRhdGUgb2JqZWN0XG4gIGNvbnN0IHRvTW9tZW50ID0gdGltZXpvbmUgPyBkYXRlID0+IG1vbWVudChkYXRlKS50eih0aW1lem9uZSkgOiBtb21lbnQ7XG4gIGNvbnN0IGZvcm1hdHRlciA9IGRhdGV0aW1lRm9ybWF0dGVyKHRpbWV6b25lKTtcblxuICByZXR1cm4gZGF0ZSA9PlxuICAgICh0b01vbWVudChkYXRlKS5zdGFydE9mKCdzZWNvbmQnKSA8IGRhdGVcbiAgICAgID8gZm9ybWF0dGVyKFRJQ0tfRk9STUFUUy5taWxsaXNlY29uZClcbiAgICAgIDogdG9Nb21lbnQoZGF0ZSkuc3RhcnRPZignbWludXRlJykgPCBkYXRlXG4gICAgICA/IGZvcm1hdHRlcihUSUNLX0ZPUk1BVFMuc2Vjb25kKVxuICAgICAgOiB0b01vbWVudChkYXRlKS5zdGFydE9mKCdob3VyJykgPCBkYXRlXG4gICAgICA/IGZvcm1hdHRlcihUSUNLX0ZPUk1BVFMubWludXRlKVxuICAgICAgOiB0b01vbWVudChkYXRlKS5zdGFydE9mKCdkYXknKSA8IGRhdGVcbiAgICAgID8gZm9ybWF0dGVyKFRJQ0tfRk9STUFUUy5ob3VyKVxuICAgICAgOiB0b01vbWVudChkYXRlKS5zdGFydE9mKCdtb250aCcpIDwgZGF0ZVxuICAgICAgPyB0b01vbWVudChkYXRlKS5zdGFydE9mKCdpc29XZWVrJykgPCBkYXRlXG4gICAgICAgID8gZm9ybWF0dGVyKFRJQ0tfRk9STUFUUy5kYXkpXG4gICAgICAgIDogZm9ybWF0dGVyKFRJQ0tfRk9STUFUUy53ZWVrKVxuICAgICAgOiB0b01vbWVudChkYXRlKS5zdGFydE9mKCd5ZWFyJykgPCBkYXRlXG4gICAgICA/IGZvcm1hdHRlcihUSUNLX0ZPUk1BVFMubW9udGgpXG4gICAgICA6IGZvcm1hdHRlcihUSUNLX0ZPUk1BVFMueWVhcikpKGRhdGUpO1xufVxuXG4vLyBjcmVhdGUgYSBoZWxwZXIgZnVuY3Rpb24gc28gd2UgY2FuIHRlc3QgaXRcbmV4cG9ydCBmdW5jdGlvbiBnZXRYQXhpcyhkb21haW4sIHdpZHRoLCBpc0VubGFyZ2VkLCB0aW1lem9uZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tYWluKSB8fCAhZG9tYWluLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBzY2FsZSA9IHNjYWxlVXRjKClcbiAgICAuZG9tYWluKGRvbWFpbilcbiAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG4gIGlmICghc2NhbGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHRpY2tzID0gTWF0aC5mbG9vcih3aWR0aCAvIChpc0VubGFyZ2VkID8gTUlOX1RJQ0tfV0lEVEhfTEFSR0UgOiBNSU5fVElDS19XSURUSF9TTUFMTCkpO1xuICBjb25zdCB0aWNrRm9ybWF0ID0gdGltZXpvbmUgPyBnZXRUaWNrRm9ybWF0KHRpbWV6b25lKSA6IG51bGw7XG4gIGNvbnN0IHhBeGlzID0gYXhpc0JvdHRvbShzY2FsZSlcbiAgICAudGlja3ModGlja3MpXG4gICAgLnRpY2tTaXplKDApXG4gICAgLnRpY2tQYWRkaW5nKDEyKTtcbiAgaWYgKHRpY2tGb3JtYXQpIHtcbiAgICB4QXhpcy50aWNrRm9ybWF0KHRpY2tGb3JtYXQpO1xuICB9XG5cbiAgcmV0dXJuIHhBeGlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQXhpcyh4QXhpc1JlZiwgeEF4aXMpIHtcbiAgaWYgKCF4QXhpcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlbGVjdCh4QXhpc1JlZi5jdXJyZW50KS5jYWxsKHhBeGlzKTtcbn1cblxuZnVuY3Rpb24gVGltZVNsaWRlck1hcmtlckZhY3RvcnkoKSB7XG4gIGNvbnN0IFRpbWVTbGlkZXJNYXJrZXIgPSAoe3dpZHRoLCBkb21haW4sIGlzRW5sYXJnZWQgPSB0cnVlLCBoZWlnaHQgPSBIRUlHSFQsIHRpbWV6b25lfSkgPT4ge1xuICAgIGNvbnN0IHhBeGlzUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHhBeGlzID0gdXNlTWVtbygoKSA9PiBnZXRYQXhpcyhkb21haW4sIHdpZHRoLCBpc0VubGFyZ2VkLCB0aW1lem9uZSksIFtcbiAgICAgIGRvbWFpbixcbiAgICAgIHdpZHRoLFxuICAgICAgaXNFbmxhcmdlZCxcbiAgICAgIHRpbWV6b25lXG4gICAgXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUF4aXMoeEF4aXNSZWYsIHhBeGlzKTtcbiAgICB9LCBbeEF4aXNSZWYsIHhBeGlzXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cInRpbWUtc2xpZGVyLW1hcmtlclwiIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJ4IGF4aXNcIiByZWY9e3hBeGlzUmVmfSB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwgMClcIiAvPlxuICAgICAgPC9UaW1lU2xpZGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgVGltZVNsaWRlck1hcmtlci5wcm9wVHlwZXMgPSB7XG4gICAgZG9tYWluOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZXR1cm4gUmVhY3QubWVtbyhUaW1lU2xpZGVyTWFya2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVNsaWRlck1hcmtlckZhY3Rvcnk7XG4iXX0=