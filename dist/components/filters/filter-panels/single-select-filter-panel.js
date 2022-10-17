"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _singleSelectFilter = _interopRequireDefault(require("../single-select-filter"));

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
SingleSelectFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _singleSelectFilter["default"]];

function SingleSelectFilterPanelFactory(FieldPanelWithFieldSelect, SingleSelectFilter) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var SingleSelectFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
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
      className: "single-select-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && !filter.enlarged && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(SingleSelectFilter, {
      filter: filter,
      idx: idx,
      isAnyFilterAnimating: isAnyFilterAnimating,
      toggleAnimation: toggleAnimation,
      setFilter: onSetFilter
    }))));
  });

  SingleSelectFilterPanel.displayName = 'SingleSelectFilterPanel';
  return SingleSelectFilterPanel;
}

var _default = SingleSelectFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9zaW5nbGUtc2VsZWN0LWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJTaW5nbGVTZWxlY3RGaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkiLCJTaW5nbGVTZWxlY3RGaWx0ZXJGYWN0b3J5IiwiRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdCIsIlNpbmdsZVNlbGVjdEZpbHRlciIsIlNpbmdsZVNlbGVjdEZpbHRlclBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiaWR4IiwiZGF0YXNldHMiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJmaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsImVubGFyZ2VGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJvblNldEZpbHRlciIsInZhbHVlIiwidHlwZSIsImVubGFyZ2VkIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7QUF0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQUEsOEJBQThCLENBQUNDLElBQS9CLEdBQXNDLENBQUNDLHNDQUFELEVBQW1DQyw4QkFBbkMsQ0FBdEM7O0FBRUEsU0FBU0gsOEJBQVQsQ0FBd0NJLHlCQUF4QyxFQUFtRUMsa0JBQW5FLEVBQXVGO0FBQ3JGO0FBQ0EsTUFBTUMsdUJBQXVCLGdCQUFHQyxrQkFBTUMsSUFBTixDQUM5QixnQkFVTTtBQUFBLFFBVEpDLEdBU0ksUUFUSkEsR0FTSTtBQUFBLFFBUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLFFBUEpDLGtCQU9JLFFBUEpBLGtCQU9JO0FBQUEsUUFOSkMsTUFNSSxRQU5KQSxNQU1JO0FBQUEsUUFMSkMsb0JBS0ksUUFMSkEsb0JBS0k7QUFBQSxRQUpKQyxhQUlJLFFBSkpBLGFBSUk7QUFBQSxRQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxRQUZKQyxZQUVJLFFBRkpBLFlBRUk7QUFBQSxRQURKQyxlQUNJLFFBREpBLGVBQ0k7QUFDSixRQUFNQyxXQUFXLEdBQUcsd0JBQVksVUFBQUMsS0FBSztBQUFBLGFBQUlKLFNBQVMsQ0FBQ04sR0FBRCxFQUFNLE9BQU4sRUFBZVUsS0FBZixDQUFiO0FBQUEsS0FBakIsRUFBcUQsQ0FBQ1YsR0FBRCxFQUFNTSxTQUFOLENBQXJELENBQXBCO0FBRUEsd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxrQkFBa0IsRUFBRUosa0JBRHRCO0FBRUUsTUFBQSxRQUFRLEVBQUVELFFBRlo7QUFHRSxNQUFBLE1BQU0sRUFBRUUsTUFIVjtBQUlFLE1BQUEsR0FBRyxFQUFFSCxHQUpQO0FBS0UsTUFBQSxZQUFZLEVBQUVPLFlBTGhCO0FBTUUsTUFBQSxTQUFTLEVBQUVEO0FBTmIsT0FRR0gsTUFBTSxDQUFDUSxJQUFQLElBQWUsQ0FBQ1IsTUFBTSxDQUFDUyxRQUF2QixpQkFDQztBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRVQsTUFEVjtBQUVFLE1BQUEsR0FBRyxFQUFFSCxHQUZQO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUksb0JBSHhCO0FBSUUsTUFBQSxlQUFlLEVBQUVJLGVBSm5CO0FBS0UsTUFBQSxTQUFTLEVBQUVDO0FBTGIsTUFERixDQVRKLENBREYsQ0FERjtBQXdCRCxHQXRDNkIsQ0FBaEM7O0FBeUNBWixFQUFBQSx1QkFBdUIsQ0FBQ2dCLFdBQXhCLEdBQXNDLHlCQUF0QztBQUVBLFNBQU9oQix1QkFBUDtBQUNEOztlQUVjTiw4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2luZ2xlU2VsZWN0RmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvc2luZ2xlLXNlbGVjdC1maWx0ZXInO1xuaW1wb3J0IEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItcGFuZWxzL2ZpbHRlci1wYW5lbC13aXRoLWZpZWxkLXNlbGVjdCc7XG5cblNpbmdsZVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeS5kZXBzID0gW0ZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3RGYWN0b3J5LCBTaW5nbGVTZWxlY3RGaWx0ZXJGYWN0b3J5XTtcblxuZnVuY3Rpb24gU2luZ2xlU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5KEZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3QsIFNpbmdsZVNlbGVjdEZpbHRlcikge1xuICAvKiogQHR5cGUge2ltcG9ydCgnLi9maWx0ZXItcGFuZWwtdHlwZXMnKS5GaWx0ZXJQYW5lbENvbXBvbmVudH0gKi9cbiAgY29uc3QgU2luZ2xlU2VsZWN0RmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBpZHgsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgICAgZW5sYXJnZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHRvZ2dsZUFuaW1hdGlvblxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IG9uU2V0RmlsdGVyID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpLCBbaWR4LCBzZXRGaWx0ZXJdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtc2VsZWN0LWZpbHRlci1wYW5lbFwiPlxuICAgICAgICAgIDxGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0XG4gICAgICAgICAgICBhbGxBdmFpbGFibGVGaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn1cbiAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaWx0ZXIudHlwZSAmJiAhZmlsdGVyLmVubGFyZ2VkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2ZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxTaW5nbGVTZWxlY3RGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17b25TZXRGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBTaW5nbGVTZWxlY3RGaWx0ZXJQYW5lbC5kaXNwbGF5TmFtZSA9ICdTaW5nbGVTZWxlY3RGaWx0ZXJQYW5lbCc7XG5cbiAgcmV0dXJuIFNpbmdsZVNlbGVjdEZpbHRlclBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVTZWxlY3RGaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=