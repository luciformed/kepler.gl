"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _d3Scale = require("d3-scale");

var _d3Array = require("d3-array");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4
};

var HistogramWrapper = _styledComponents["default"].svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  .histogram-bars {\n    rect {\n      fill: ", ";\n    }\n    rect.in-range {\n      fill: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.histogramFillInRange;
});

function HistogramPlotFactory() {
  var HistogramPlot = function HistogramPlot(_ref) {
    var width = _ref.width,
        height = _ref.height,
        margin = _ref.margin,
        isRanged = _ref.isRanged,
        histogram = _ref.histogram,
        value = _ref.value,
        brushComponent = _ref.brushComponent;
    var domain = (0, _react.useMemo)(function () {
      return [histogram[0].x0, histogram[histogram.length - 1].x1];
    }, [histogram]);
    var dataId = Object.keys(histogram[0]).filter(function (k) {
      return k !== 'x0' && k !== 'x1';
    })[0]; // use 1st for now

    var getValue = (0, _react.useMemo)(function () {
      return function (d) {
        return d[dataId];
      };
    }, [dataId]);
    var x = (0, _react.useMemo)(function () {
      return (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
    }, [domain, width]);
    var y = (0, _react.useMemo)(function () {
      return (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(histogram, getValue)]).range([0, height]);
    }, [histogram, height, getValue]);
    var barWidth = width / histogram.length;
    return /*#__PURE__*/_react["default"].createElement(HistogramWrapper, {
      width: width,
      height: height,
      style: {
        marginTop: "".concat(margin.top, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement("g", {
      className: "histogram-bars"
    }, histogram.map(function (bar) {
      var inRange = bar.x1 <= value[1] + 1 && bar.x0 >= value[0];
      var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
      return /*#__PURE__*/_react["default"].createElement("rect", {
        className: (0, _classnames["default"])({
          'in-range': inRange
        }),
        key: bar.x0,
        height: y(getValue(bar)),
        width: barWidth * wRatio,
        x: x(bar.x0) + barWidth * (1 - wRatio) / 2,
        rx: 1,
        ry: 1,
        y: height - y(getValue(bar))
      });
    })), /*#__PURE__*/_react["default"].createElement("g", {
      transform: "translate(".concat(isRanged ? 0 : barWidth / 2, ", 0)")
    }, brushComponent));
  };

  var EmpptyOrPlot = function EmpptyOrPlot(props) {
    return !props.histogram || !props.histogram.length ? null : /*#__PURE__*/_react["default"].createElement(HistogramPlot, props);
  };

  return EmpptyOrPlot;
}

var _default = HistogramPlotFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9oaXN0b2dyYW0tcGxvdC5qcyJdLCJuYW1lcyI6WyJoaXN0b2dyYW1TdHlsZSIsImhpZ2hsaWdodFciLCJ1bkhpZ2hsaWdodGVkVyIsIkhpc3RvZ3JhbVdyYXBwZXIiLCJzdHlsZWQiLCJzdmciLCJwcm9wcyIsInRoZW1lIiwiaGlzdG9ncmFtRmlsbE91dFJhbmdlIiwiaGlzdG9ncmFtRmlsbEluUmFuZ2UiLCJIaXN0b2dyYW1QbG90RmFjdG9yeSIsIkhpc3RvZ3JhbVBsb3QiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImlzUmFuZ2VkIiwiaGlzdG9ncmFtIiwidmFsdWUiLCJicnVzaENvbXBvbmVudCIsImRvbWFpbiIsIngwIiwibGVuZ3RoIiwieDEiLCJkYXRhSWQiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwiayIsImdldFZhbHVlIiwiZCIsIngiLCJyYW5nZSIsInkiLCJiYXJXaWR0aCIsIm1hcmdpblRvcCIsInRvcCIsIm1hcCIsImJhciIsImluUmFuZ2UiLCJ3UmF0aW8iLCJFbXBwdHlPclBsb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxFQUFBQSxVQUFVLEVBQUUsR0FEUztBQUVyQkMsRUFBQUEsY0FBYyxFQUFFO0FBRkssQ0FBdkI7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLDhOQUlSLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMscUJBQWhCO0FBQUEsQ0FKRyxFQU9SLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsb0JBQWhCO0FBQUEsQ0FQRyxDQUF0Qjs7QUFZQSxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXlF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LENBQUNqQixFQUFMLENBQUQsR0FBYWEsUUFBUSxJQUFJLElBQUlNLE1BQVIsQ0FBVCxHQUE0QixDQUw3QztBQU1FLFFBQUEsRUFBRSxFQUFFLENBTk47QUFPRSxRQUFBLEVBQUUsRUFBRSxDQVBOO0FBUUUsUUFBQSxDQUFDLEVBQUUxQixNQUFNLEdBQUdtQixDQUFDLENBQUNKLFFBQVEsQ0FBQ1MsR0FBRCxDQUFUO0FBUmYsUUFERjtBQVlELEtBZkEsQ0FESCxDQURGLGVBbUJFO0FBQUcsTUFBQSxTQUFTLHNCQUFldEIsUUFBUSxHQUFHLENBQUgsR0FBT2tCLFFBQVEsR0FBRyxDQUF6QztBQUFaLE9BQStEZixjQUEvRCxDQW5CRixDQURGO0FBdUJELEdBbEREOztBQW9EQSxNQUFNc0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQWxDLEtBQUs7QUFBQSxXQUN4QixDQUFDQSxLQUFLLENBQUNVLFNBQVAsSUFBb0IsQ0FBQ1YsS0FBSyxDQUFDVSxTQUFOLENBQWdCSyxNQUFyQyxHQUE4QyxJQUE5QyxnQkFBcUQsZ0NBQUMsYUFBRCxFQUFtQmYsS0FBbkIsQ0FEN0I7QUFBQSxHQUExQjs7QUFHQSxTQUFPa0MsWUFBUDtBQUNEOztlQUNjOUIsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3NjYWxlTGluZWFyfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgaGlzdG9ncmFtU3R5bGUgPSB7XG4gIGhpZ2hsaWdodFc6IDAuNyxcbiAgdW5IaWdobGlnaHRlZFc6IDAuNFxufTtcblxuY29uc3QgSGlzdG9ncmFtV3JhcHBlciA9IHN0eWxlZC5zdmdgXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAuaGlzdG9ncmFtLWJhcnMge1xuICAgIHJlY3Qge1xuICAgICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oaXN0b2dyYW1GaWxsT3V0UmFuZ2V9O1xuICAgIH1cbiAgICByZWN0LmluLXJhbmdlIHtcbiAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGlzdG9ncmFtRmlsbEluUmFuZ2V9O1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gSGlzdG9ncmFtUGxvdEZhY3RvcnkoKSB7XG4gIGNvbnN0IEhpc3RvZ3JhbVBsb3QgPSAoe3dpZHRoLCBoZWlnaHQsIG1hcmdpbiwgaXNSYW5nZWQsIGhpc3RvZ3JhbSwgdmFsdWUsIGJydXNoQ29tcG9uZW50fSkgPT4ge1xuICAgIGNvbnN0IGRvbWFpbiA9IHVzZU1lbW8oKCkgPT4gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV0sIFtcbiAgICAgIGhpc3RvZ3JhbVxuICAgIF0pO1xuICAgIGNvbnN0IGRhdGFJZCA9IE9iamVjdC5rZXlzKGhpc3RvZ3JhbVswXSkuZmlsdGVyKGsgPT4gayAhPT0gJ3gwJyAmJiBrICE9PSAneDEnKVswXTtcblxuICAgIC8vIHVzZSAxc3QgZm9yIG5vd1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlTWVtbygoKSA9PiBkID0+IGRbZGF0YUlkXSwgW2RhdGFJZF0pO1xuXG4gICAgY29uc3QgeCA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBzY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pLFxuICAgICAgW2RvbWFpbiwgd2lkdGhdXG4gICAgKTtcblxuICAgIGNvbnN0IHkgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oWzAsIG1heChoaXN0b2dyYW0sIGdldFZhbHVlKV0pXG4gICAgICAgICAgLnJhbmdlKFswLCBoZWlnaHRdKSxcbiAgICAgIFtoaXN0b2dyYW0sIGhlaWdodCwgZ2V0VmFsdWVdXG4gICAgKTtcblxuICAgIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBoaXN0b2dyYW0ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIaXN0b2dyYW1XcmFwcGVyIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHN0eWxlPXt7bWFyZ2luVG9wOiBgJHttYXJnaW4udG9wfXB4YH19PlxuICAgICAgICA8ZyBjbGFzc05hbWU9XCJoaXN0b2dyYW0tYmFyc1wiPlxuICAgICAgICAgIHtoaXN0b2dyYW0ubWFwKGJhciA9PiB7XG4gICAgICAgICAgICBjb25zdCBpblJhbmdlID0gYmFyLngxIDw9IHZhbHVlWzFdICsgMSAmJiBiYXIueDAgPj0gdmFsdWVbMF07XG4gICAgICAgICAgICBjb25zdCB3UmF0aW8gPSBpblJhbmdlID8gaGlzdG9ncmFtU3R5bGUuaGlnaGxpZ2h0VyA6IGhpc3RvZ3JhbVN0eWxlLnVuSGlnaGxpZ2h0ZWRXO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpbi1yYW5nZSc6IGluUmFuZ2V9KX1cbiAgICAgICAgICAgICAgICBrZXk9e2Jhci54MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e3koZ2V0VmFsdWUoYmFyKSl9XG4gICAgICAgICAgICAgICAgd2lkdGg9e2JhcldpZHRoICogd1JhdGlvfVxuICAgICAgICAgICAgICAgIHg9e3goYmFyLngwKSArIChiYXJXaWR0aCAqICgxIC0gd1JhdGlvKSkgLyAyfVxuICAgICAgICAgICAgICAgIHJ4PXsxfVxuICAgICAgICAgICAgICAgIHJ5PXsxfVxuICAgICAgICAgICAgICAgIHk9e2hlaWdodCAtIHkoZ2V0VmFsdWUoYmFyKSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2lzUmFuZ2VkID8gMCA6IGJhcldpZHRoIC8gMn0sIDApYH0+e2JydXNoQ29tcG9uZW50fTwvZz5cbiAgICAgIDwvSGlzdG9ncmFtV3JhcHBlcj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IEVtcHB0eU9yUGxvdCA9IHByb3BzID0+XG4gICAgIXByb3BzLmhpc3RvZ3JhbSB8fCAhcHJvcHMuaGlzdG9ncmFtLmxlbmd0aCA/IG51bGwgOiA8SGlzdG9ncmFtUGxvdCB7Li4ucHJvcHN9IC8+O1xuXG4gIHJldHVybiBFbXBwdHlPclBsb3Q7XG59XG5leHBvcnQgZGVmYXVsdCBIaXN0b2dyYW1QbG90RmFjdG9yeTtcbiJdfQ==