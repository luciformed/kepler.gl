"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _timeRangeFilter = _interopRequireDefault(require("../time-range-filter"));

var _icons = require("../../common/icons");

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

var _filterPanelWithFieldSelect = _interopRequireDefault(require("./filter-panel-with-field-select"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
TimeRangeFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _timeRangeFilter["default"], _sourceDataSelector["default"]];

function TimeRangeFilterPanelFactory(FieldPanelWithFieldSelect, TimeRangeFilter) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var TimeRangeFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        setFilter = _ref.setFilter,
        removeFilter = _ref.removeFilter,
        toggleAnimation = _ref.toggleAnimation;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    var panelActions = (0, _react.useMemo)(function () {
      return [{
        id: filter.id,
        onClick: enlargeFilter,
        tooltip: 'tooltip.timePlayback',
        iconComponent: _icons.Clock,
        active: filter.enlarged
      }];
    }, [filter.id, filter.enlarged, enlargeFilter]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter,
      panelActions: panelActions
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(TimeRangeFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  TimeRangeFilterPanel.displayName = 'TimeRangeFilterPanel';
  return TimeRangeFilterPanel;
}

var _default = TimeRangeFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy90aW1lLXJhbmdlLWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3QiLCJUaW1lUmFuZ2VGaWx0ZXIiLCJUaW1lUmFuZ2VGaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImRhdGFzZXRzIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiZmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJlbmxhcmdlRmlsdGVyIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwib25TZXRGaWx0ZXIiLCJ2YWx1ZSIsInBhbmVsQWN0aW9ucyIsImlkIiwib25DbGljayIsInRvb2x0aXAiLCJpY29uQ29tcG9uZW50IiwiQ2xvY2siLCJhY3RpdmUiLCJlbmxhcmdlZCIsInR5cGUiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBQSwyQkFBMkIsQ0FBQ0MsSUFBNUIsR0FBbUMsQ0FDakNDLHNDQURpQyxFQUVqQ0MsMkJBRmlDLEVBR2pDQyw4QkFIaUMsQ0FBbkM7O0FBTUEsU0FBU0osMkJBQVQsQ0FBcUNLLHlCQUFyQyxFQUFnRUMsZUFBaEUsRUFBaUY7QUFDL0U7QUFDQSxNQUFNQyxvQkFBb0IsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQzNCLGdCQVVNO0FBQUEsUUFUSkMsR0FTSSxRQVRKQSxHQVNJO0FBQUEsUUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsUUFQSkMsa0JBT0ksUUFQSkEsa0JBT0k7QUFBQSxRQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxRQUxKQyxvQkFLSSxRQUxKQSxvQkFLSTtBQUFBLFFBSkpDLGFBSUksUUFKSkEsYUFJSTtBQUFBLFFBSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLFFBRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLFFBREpDLGVBQ0ksUUFESkEsZUFDSTtBQUNKLFFBQU1DLFdBQVcsR0FBRyx3QkFBWSxVQUFBQyxLQUFLO0FBQUEsYUFBSUosU0FBUyxDQUFDTixHQUFELEVBQU0sT0FBTixFQUFlVSxLQUFmLENBQWI7QUFBQSxLQUFqQixFQUFxRCxDQUFDVixHQUFELEVBQU1NLFNBQU4sQ0FBckQsQ0FBcEI7QUFFQSxRQUFNSyxZQUFZLEdBQUcsb0JBQ25CO0FBQUEsYUFBTSxDQUNKO0FBQ0VDLFFBQUFBLEVBQUUsRUFBRVQsTUFBTSxDQUFDUyxFQURiO0FBRUVDLFFBQUFBLE9BQU8sRUFBRVIsYUFGWDtBQUdFUyxRQUFBQSxPQUFPLEVBQUUsc0JBSFg7QUFJRUMsUUFBQUEsYUFBYSxFQUFFQyxZQUpqQjtBQUtFQyxRQUFBQSxNQUFNLEVBQUVkLE1BQU0sQ0FBQ2U7QUFMakIsT0FESSxDQUFOO0FBQUEsS0FEbUIsRUFVbkIsQ0FBQ2YsTUFBTSxDQUFDUyxFQUFSLEVBQVlULE1BQU0sQ0FBQ2UsUUFBbkIsRUFBNkJiLGFBQTdCLENBVm1CLENBQXJCO0FBYUEsd0JBQ0UsK0VBQ0UsZ0NBQUMseUJBQUQ7QUFDRSxNQUFBLGtCQUFrQixFQUFFSCxrQkFEdEI7QUFFRSxNQUFBLFFBQVEsRUFBRUQsUUFGWjtBQUdFLE1BQUEsTUFBTSxFQUFFRSxNQUhWO0FBSUUsTUFBQSxHQUFHLEVBQUVILEdBSlA7QUFLRSxNQUFBLFlBQVksRUFBRU8sWUFMaEI7QUFNRSxNQUFBLFNBQVMsRUFBRUQsU0FOYjtBQU9FLE1BQUEsWUFBWSxFQUFFSztBQVBoQixPQVNHUixNQUFNLENBQUNnQixJQUFQLElBQWUsQ0FBQ2hCLE1BQU0sQ0FBQ2UsUUFBdkIsaUJBQ0M7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGVBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRWYsTUFEVjtBQUVFLE1BQUEsR0FBRyxFQUFFSCxHQUZQO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUksb0JBSHhCO0FBSUUsTUFBQSxlQUFlLEVBQUVJLGVBSm5CO0FBS0UsTUFBQSxTQUFTLEVBQUVDO0FBTGIsTUFERixDQVZKLENBREYsQ0FERjtBQXlCRCxHQXBEMEIsQ0FBN0I7O0FBdURBWixFQUFBQSxvQkFBb0IsQ0FBQ3VCLFdBQXJCLEdBQW1DLHNCQUFuQztBQUVBLFNBQU92QixvQkFBUDtBQUNEOztlQUVjUCwyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGltZVJhbmdlRmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvdGltZS1yYW5nZS1maWx0ZXInO1xuaW1wb3J0IHtDbG9ja30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2NvbW1vbi9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvZmlsdGVyLXBhbmVsLXdpdGgtZmllbGQtc2VsZWN0JztcblxuVGltZVJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbXG4gIEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5LFxuICBUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5LFxuICBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5XG5dO1xuXG5mdW5jdGlvbiBUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkoRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdCwgVGltZVJhbmdlRmlsdGVyKSB7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ZpbHRlci1wYW5lbC10eXBlcycpLkZpbHRlclBhbmVsQ29tcG9uZW50fSAqL1xuICBjb25zdCBUaW1lUmFuZ2VGaWx0ZXJQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICAgKHtcbiAgICAgIGlkeCxcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgYWxsQXZhaWxhYmxlRmllbGRzLFxuICAgICAgZmlsdGVyLFxuICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmcsXG4gICAgICBlbmxhcmdlRmlsdGVyLFxuICAgICAgc2V0RmlsdGVyLFxuICAgICAgcmVtb3ZlRmlsdGVyLFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgb25TZXRGaWx0ZXIgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAndmFsdWUnLCB2YWx1ZSksIFtpZHgsIHNldEZpbHRlcl0pO1xuXG4gICAgICBjb25zdCBwYW5lbEFjdGlvbnMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGZpbHRlci5pZCxcbiAgICAgICAgICAgIG9uQ2xpY2s6IGVubGFyZ2VGaWx0ZXIsXG4gICAgICAgICAgICB0b29sdGlwOiAndG9vbHRpcC50aW1lUGxheWJhY2snLFxuICAgICAgICAgICAgaWNvbkNvbXBvbmVudDogQ2xvY2ssXG4gICAgICAgICAgICBhY3RpdmU6IGZpbHRlci5lbmxhcmdlZFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgW2ZpbHRlci5pZCwgZmlsdGVyLmVubGFyZ2VkLCBlbmxhcmdlRmlsdGVyXVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdFxuICAgICAgICAgICAgYWxsQXZhaWxhYmxlRmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICAgICAgICAgIHBhbmVsQWN0aW9ucz17cGFuZWxBY3Rpb25zfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaWx0ZXIudHlwZSAmJiAhZmlsdGVyLmVubGFyZ2VkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2ZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxUaW1lUmFuZ2VGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17b25TZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdD5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBUaW1lUmFuZ2VGaWx0ZXJQYW5lbC5kaXNwbGF5TmFtZSA9ICdUaW1lUmFuZ2VGaWx0ZXJQYW5lbCc7XG5cbiAgcmV0dXJuIFRpbWVSYW5nZUZpbHRlclBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=