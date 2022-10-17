"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _multiSelectFilter = _interopRequireDefault(require("../multi-select-filter"));

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
MultiSelectFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _multiSelectFilter["default"]];

function MultiSelectFilterPanelFactory(FieldPanelWithFieldSelect, MultiSelectFilter) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var MultiSelectFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
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
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "multi-select-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(MultiSelectFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  MultiSelectFilterPanel.displayName = 'MultiSelectFilterPanel';
  return MultiSelectFilterPanel;
}

var _default = MultiSelectFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9tdWx0aS1zZWxlY3QtZmlsdGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIk11bHRpU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5IiwiTXVsdGlTZWxlY3RGaWx0ZXJGYWN0b3J5IiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdCIsIk11bHRpU2VsZWN0RmlsdGVyIiwiTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImRhdGFzZXRzIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiZmlsdGVyIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJlbmxhcmdlRmlsdGVyIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwib25TZXRGaWx0ZXIiLCJ2YWx1ZSIsInR5cGUiLCJlbmxhcmdlZCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUFBLDZCQUE2QixDQUFDQyxJQUE5QixHQUFxQyxDQUFDQyxzQ0FBRCxFQUFtQ0MsNkJBQW5DLENBQXJDOztBQUVBLFNBQVNILDZCQUFULENBQXVDSSx5QkFBdkMsRUFBa0VDLGlCQUFsRSxFQUFxRjtBQUNuRjtBQUNBLE1BQU1DLHNCQUFzQixnQkFBR0Msa0JBQU1DLElBQU4sQ0FDN0IsZ0JBVU07QUFBQSxRQVRKQyxHQVNJLFFBVEpBLEdBU0k7QUFBQSxRQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxRQVBKQyxrQkFPSSxRQVBKQSxrQkFPSTtBQUFBLFFBTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLFFBTEpDLG9CQUtJLFFBTEpBLG9CQUtJO0FBQUEsUUFKSkMsYUFJSSxRQUpKQSxhQUlJO0FBQUEsUUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsUUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsUUFESkMsZUFDSSxRQURKQSxlQUNJO0FBQ0osUUFBTUMsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJSixTQUFTLENBQUNOLEdBQUQsRUFBTSxPQUFOLEVBQWVVLEtBQWYsQ0FBYjtBQUFBLEtBQWpCLEVBQXFELENBQUNWLEdBQUQsRUFBTU0sU0FBTixDQUFyRCxDQUFwQjtBQUVBLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyx5QkFBRDtBQUNFLE1BQUEsa0JBQWtCLEVBQUVKLGtCQUR0QjtBQUVFLE1BQUEsUUFBUSxFQUFFRCxRQUZaO0FBR0UsTUFBQSxNQUFNLEVBQUVFLE1BSFY7QUFJRSxNQUFBLEdBQUcsRUFBRUgsR0FKUDtBQUtFLE1BQUEsWUFBWSxFQUFFTyxZQUxoQjtBQU1FLE1BQUEsU0FBUyxFQUFFRDtBQU5iLE9BUUdILE1BQU0sQ0FBQ1EsSUFBUCxJQUFlLENBQUNSLE1BQU0sQ0FBQ1MsUUFBdkIsaUJBQ0M7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVULE1BRFY7QUFFRSxNQUFBLEdBQUcsRUFBRUgsR0FGUDtBQUdFLE1BQUEsb0JBQW9CLEVBQUVJLG9CQUh4QjtBQUlFLE1BQUEsZUFBZSxFQUFFSSxlQUpuQjtBQUtFLE1BQUEsU0FBUyxFQUFFQztBQUxiLE1BREYsQ0FUSixDQURGLENBREY7QUF3QkQsR0F0QzRCLENBQS9COztBQXlDQVosRUFBQUEsc0JBQXNCLENBQUNnQixXQUF2QixHQUFxQyx3QkFBckM7QUFFQSxTQUFPaEIsc0JBQVA7QUFDRDs7ZUFFY04sNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE11bHRpU2VsZWN0RmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvbXVsdGktc2VsZWN0LWZpbHRlcic7XG5pbXBvcnQgRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvZmlsdGVyLXBhbmVsLXdpdGgtZmllbGQtc2VsZWN0JztcblxuTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeSwgTXVsdGlTZWxlY3RGaWx0ZXJGYWN0b3J5XTtcblxuZnVuY3Rpb24gTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbEZhY3RvcnkoRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdCwgTXVsdGlTZWxlY3RGaWx0ZXIpIHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vZmlsdGVyLXBhbmVsLXR5cGVzJykuRmlsdGVyUGFuZWxDb21wb25lbnR9ICovXG4gIGNvbnN0IE11bHRpU2VsZWN0RmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBpZHgsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHRvZ2dsZUFuaW1hdGlvblxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IG9uU2V0RmlsdGVyID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpLCBbaWR4LCBzZXRGaWx0ZXJdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aS1zZWxlY3QtZmlsdGVyLXBhbmVsXCI+XG4gICAgICAgICAgPEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RcbiAgICAgICAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfVxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgIHJlbW92ZUZpbHRlcj17cmVtb3ZlRmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpbHRlci50eXBlICYmICFmaWx0ZXIuZW5sYXJnZWQgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc9e2lzQW55RmlsdGVyQW5pbWF0aW5nfVxuICAgICAgICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt0b2dnbGVBbmltYXRpb259XG4gICAgICAgICAgICAgICAgICBzZXRGaWx0ZXI9e29uU2V0RmlsdGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbC5kaXNwbGF5TmFtZSA9ICdNdWx0aVNlbGVjdEZpbHRlclBhbmVsJztcblxuICByZXR1cm4gTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=