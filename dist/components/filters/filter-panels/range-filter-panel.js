"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rangeFilter = _interopRequireDefault(require("../range-filter"));

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
RangeFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _rangeFilter["default"]];

function RangeFilterPanelFactory(FieldPanelWithFieldSelect, RangeFilter) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var RangeFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        enlargeFilter = _ref.enlargeFilter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleAnimation = _ref.toggleAnimation;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "range-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(RangeFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  RangeFilterPanel.displayName = 'RangeFilterPanel';
  return RangeFilterPanel;
}

var _default = RangeFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9yYW5nZS1maWx0ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJSYW5nZUZpbHRlckZhY3RvcnkiLCJGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0IiwiUmFuZ2VGaWx0ZXIiLCJSYW5nZUZpbHRlclBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiaWR4IiwiZGF0YXNldHMiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJmaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsImVubGFyZ2VGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJvblNldEZpbHRlciIsInZhbHVlIiwidHlwZSIsImVubGFyZ2VkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7QUF0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQUEsdUJBQXVCLENBQUNDLElBQXhCLEdBQStCLENBQUNDLHNDQUFELEVBQW1DQyx1QkFBbkMsQ0FBL0I7O0FBRUEsU0FBU0gsdUJBQVQsQ0FBaUNJLHlCQUFqQyxFQUE0REMsV0FBNUQsRUFBeUU7QUFDdkU7QUFDQSxNQUFNQyxnQkFBZ0IsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQ3ZCLGdCQVVNO0FBQUEsUUFUSkMsR0FTSSxRQVRKQSxHQVNJO0FBQUEsUUFSSkMsUUFRSSxRQVJKQSxRQVFJO0FBQUEsUUFQSkMsa0JBT0ksUUFQSkEsa0JBT0k7QUFBQSxRQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxRQUxKQyxvQkFLSSxRQUxKQSxvQkFLSTtBQUFBLFFBSkpDLGFBSUksUUFKSkEsYUFJSTtBQUFBLFFBSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLFFBRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLFFBREpDLGVBQ0ksUUFESkEsZUFDSTtBQUNKLFFBQU1DLFdBQVcsR0FBRyx3QkFBWSxVQUFBQyxLQUFLO0FBQUEsYUFBSUgsU0FBUyxDQUFDUCxHQUFELEVBQU0sT0FBTixFQUFlVSxLQUFmLENBQWI7QUFBQSxLQUFqQixFQUFxRCxDQUFDVixHQUFELEVBQU1PLFNBQU4sQ0FBckQsQ0FBcEI7QUFFQSx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMseUJBQUQ7QUFDRSxNQUFBLGtCQUFrQixFQUFFTCxrQkFEdEI7QUFFRSxNQUFBLFFBQVEsRUFBRUQsUUFGWjtBQUdFLE1BQUEsTUFBTSxFQUFFRSxNQUhWO0FBSUUsTUFBQSxHQUFHLEVBQUVILEdBSlA7QUFLRSxNQUFBLFlBQVksRUFBRU0sWUFMaEI7QUFNRSxNQUFBLFNBQVMsRUFBRUM7QUFOYixPQVFHSixNQUFNLENBQUNRLElBQVAsSUFBZSxDQUFDUixNQUFNLENBQUNTLFFBQXZCLGlCQUNDO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyxXQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVULE1BRFY7QUFFRSxNQUFBLEdBQUcsRUFBRUgsR0FGUDtBQUdFLE1BQUEsb0JBQW9CLEVBQUVJLG9CQUh4QjtBQUlFLE1BQUEsZUFBZSxFQUFFSSxlQUpuQjtBQUtFLE1BQUEsU0FBUyxFQUFFQztBQUxiLE1BREYsQ0FUSixDQURGLENBREY7QUF3QkQsR0F0Q3NCLENBQXpCOztBQXlDQVosRUFBQUEsZ0JBQWdCLENBQUNnQixXQUFqQixHQUErQixrQkFBL0I7QUFFQSxTQUFPaEIsZ0JBQVA7QUFDRDs7ZUFFY04sdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhbmdlRmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2UtZmlsdGVyJztcbmltcG9ydCBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QnO1xuXG5SYW5nZUZpbHRlclBhbmVsRmFjdG9yeS5kZXBzID0gW0ZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5LCBSYW5nZUZpbHRlckZhY3RvcnldO1xuXG5mdW5jdGlvbiBSYW5nZUZpbHRlclBhbmVsRmFjdG9yeShGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0LCBSYW5nZUZpbHRlcikge1xuICAvKiogQHR5cGUge2ltcG9ydCgnLi9maWx0ZXItcGFuZWwtdHlwZXMnKS5GaWx0ZXJQYW5lbENvbXBvbmVudH0gKi9cbiAgY29uc3QgUmFuZ2VGaWx0ZXJQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICAgKHtcbiAgICAgIGlkeCxcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgYWxsQXZhaWxhYmxlRmllbGRzLFxuICAgICAgZmlsdGVyLFxuICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmcsXG4gICAgICBlbmxhcmdlRmlsdGVyLFxuICAgICAgcmVtb3ZlRmlsdGVyLFxuICAgICAgc2V0RmlsdGVyLFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgb25TZXRGaWx0ZXIgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAndmFsdWUnLCB2YWx1ZSksIFtpZHgsIHNldEZpbHRlcl0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlLWZpbHRlci1wYW5lbFwiPlxuICAgICAgICAgIDxGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0XG4gICAgICAgICAgICBhbGxBdmFpbGFibGVGaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn1cbiAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaWx0ZXIudHlwZSAmJiAhZmlsdGVyLmVubGFyZ2VkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2ZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxSYW5nZUZpbHRlclxuICAgICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZUFuaW1hdGlvbj17dG9nZ2xlQW5pbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgc2V0RmlsdGVyPXtvblNldEZpbHRlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIFJhbmdlRmlsdGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnUmFuZ2VGaWx0ZXJQYW5lbCc7XG5cbiAgcmV0dXJuIFJhbmdlRmlsdGVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5O1xuIl19