"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _sourceDataSelector = _interopRequireDefault(require("../../side-panel/common/source-data-selector"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

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
NewFilterPanelFactory.deps = [_filterPanelHeader["default"], _sourceDataSelector["default"], _fieldSelector["default"]];

function NewFilterPanelFactory(FilterPanelHeader, SourceDataSelector, FieldSelector) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var NewFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        filter = _ref.filter,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        setFilter = _ref.setFilter,
        removeFilter = _ref.removeFilter,
        enlargeFilter = _ref.enlargeFilter;
    var onFieldSelector = (0, _react.useCallback)(function (field) {
      return setFilter(idx, 'name', field.name);
    }, [idx, setFilter]);
    var onSourceDataSelector = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'dataId', value);
    }, [idx, setFilter]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: [datasets[filter.dataId[0]]],
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter,
      enlargeFilter: enlargeFilter,
      enlarged: filter.enlarged
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      inputTheme: "secondary",
      fields: allAvailableFields,
      value: Array.isArray(filter.name) ? filter.name[0] : filter.name,
      erasable: false,
      onSelect: onFieldSelector
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
      inputTheme: "secondary",
      datasets: datasets,
      disabled: filter.freeze,
      dataId: filter.dataId,
      onSelect: onSourceDataSelector
    })));
  });

  NewFilterPanel.displayName = 'NewFilterPanel';
  return NewFilterPanel;
}

var _default = NewFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9uZXctZmlsdGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIk5ld0ZpbHRlclBhbmVsRmFjdG9yeSIsImRlcHMiLCJGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJGaWx0ZXJQYW5lbEhlYWRlciIsIlNvdXJjZURhdGFTZWxlY3RvciIsIkZpZWxkU2VsZWN0b3IiLCJOZXdGaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImZpbHRlciIsImRhdGFzZXRzIiwiYWxsQXZhaWxhYmxlRmllbGRzIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwiZW5sYXJnZUZpbHRlciIsIm9uRmllbGRTZWxlY3RvciIsImZpZWxkIiwibmFtZSIsIm9uU291cmNlRGF0YVNlbGVjdG9yIiwidmFsdWUiLCJkYXRhSWQiLCJlbmxhcmdlZCIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmcmVlemUiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBQSxxQkFBcUIsQ0FBQ0MsSUFBdEIsR0FBNkIsQ0FDM0JDLDZCQUQyQixFQUUzQkMsOEJBRjJCLEVBRzNCQyx5QkFIMkIsQ0FBN0I7O0FBTUEsU0FBU0oscUJBQVQsQ0FBK0JLLGlCQUEvQixFQUFrREMsa0JBQWxELEVBQXNFQyxhQUF0RSxFQUFxRjtBQUNuRjtBQUNBLE1BQU1DLGNBQWMsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQ3JCLGdCQUF5RjtBQUFBLFFBQXZGQyxHQUF1RixRQUF2RkEsR0FBdUY7QUFBQSxRQUFsRkMsTUFBa0YsUUFBbEZBLE1BQWtGO0FBQUEsUUFBMUVDLFFBQTBFLFFBQTFFQSxRQUEwRTtBQUFBLFFBQWhFQyxrQkFBZ0UsUUFBaEVBLGtCQUFnRTtBQUFBLFFBQTVDQyxTQUE0QyxRQUE1Q0EsU0FBNEM7QUFBQSxRQUFqQ0MsWUFBaUMsUUFBakNBLFlBQWlDO0FBQUEsUUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjtBQUN2RixRQUFNQyxlQUFlLEdBQUcsd0JBQVksVUFBQUMsS0FBSztBQUFBLGFBQUlKLFNBQVMsQ0FBQ0osR0FBRCxFQUFNLE1BQU4sRUFBY1EsS0FBSyxDQUFDQyxJQUFwQixDQUFiO0FBQUEsS0FBakIsRUFBeUQsQ0FDL0VULEdBRCtFLEVBRS9FSSxTQUYrRSxDQUF6RCxDQUF4QjtBQUtBLFFBQU1NLG9CQUFvQixHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxTQUFTLENBQUNKLEdBQUQsRUFBTSxRQUFOLEVBQWdCVyxLQUFoQixDQUFiO0FBQUEsS0FBakIsRUFBc0QsQ0FDakZYLEdBRGlGLEVBRWpGSSxTQUZpRixDQUF0RCxDQUE3QjtBQUtBLHdCQUNFLCtFQUNFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUUsQ0FBQ0YsUUFBUSxDQUFDRCxNQUFNLENBQUNXLE1BQVAsQ0FBYyxDQUFkLENBQUQsQ0FBVCxDQURaO0FBRUUsTUFBQSxrQkFBa0IsRUFBRVQsa0JBRnRCO0FBR0UsTUFBQSxHQUFHLEVBQUVILEdBSFA7QUFJRSxNQUFBLE1BQU0sRUFBRUMsTUFKVjtBQUtFLE1BQUEsWUFBWSxFQUFFSSxZQUxoQjtBQU1FLE1BQUEsYUFBYSxFQUFFQyxhQU5qQjtBQU9FLE1BQUEsUUFBUSxFQUFFTCxNQUFNLENBQUNZO0FBUG5CLG9CQVNFLGdDQUFDLGFBQUQ7QUFDRSxNQUFBLFVBQVUsRUFBQyxXQURiO0FBRUUsTUFBQSxNQUFNLEVBQUVWLGtCQUZWO0FBR0UsTUFBQSxLQUFLLEVBQUVXLEtBQUssQ0FBQ0MsT0FBTixDQUFjZCxNQUFNLENBQUNRLElBQXJCLElBQTZCUixNQUFNLENBQUNRLElBQVAsQ0FBWSxDQUFaLENBQTdCLEdBQThDUixNQUFNLENBQUNRLElBSDlEO0FBSUUsTUFBQSxRQUFRLEVBQUUsS0FKWjtBQUtFLE1BQUEsUUFBUSxFQUFFRjtBQUxaLE1BVEYsQ0FERixlQWtCRSxnQ0FBQyxxQ0FBRDtBQUFxQixNQUFBLFNBQVMsRUFBQztBQUEvQixPQUNHUyxNQUFNLENBQUNDLElBQVAsQ0FBWWYsUUFBWixFQUFzQmdCLE1BQXRCLEdBQStCLENBQS9CLGlCQUNDLGdDQUFDLGtCQUFEO0FBQ0UsTUFBQSxVQUFVLEVBQUMsV0FEYjtBQUVFLE1BQUEsUUFBUSxFQUFFaEIsUUFGWjtBQUdFLE1BQUEsUUFBUSxFQUFFRCxNQUFNLENBQUNrQixNQUhuQjtBQUlFLE1BQUEsTUFBTSxFQUFFbEIsTUFBTSxDQUFDVyxNQUpqQjtBQUtFLE1BQUEsUUFBUSxFQUFFRjtBQUxaLE1BRkosQ0FsQkYsQ0FERjtBQWdDRCxHQTVDb0IsQ0FBdkI7O0FBK0NBYixFQUFBQSxjQUFjLENBQUN1QixXQUFmLEdBQTZCLGdCQUE3QjtBQUVBLFNBQU92QixjQUFQO0FBQ0Q7O2VBRWNSLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3R5bGVkRmlsdGVyQ29udGVudH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2NvbW1vbi9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi4vLi4vY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcblxuTmV3RmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbXG4gIEZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgU291cmNlRGF0YVNlbGVjdG9yRmFjdG9yeSxcbiAgRmllbGRTZWxlY3RvckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIE5ld0ZpbHRlclBhbmVsRmFjdG9yeShGaWx0ZXJQYW5lbEhlYWRlciwgU291cmNlRGF0YVNlbGVjdG9yLCBGaWVsZFNlbGVjdG9yKSB7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ZpbHRlci1wYW5lbC10eXBlcycpLkZpbHRlclBhbmVsQ29tcG9uZW50fSAqL1xuICBjb25zdCBOZXdGaWx0ZXJQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICAgKHtpZHgsIGZpbHRlciwgZGF0YXNldHMsIGFsbEF2YWlsYWJsZUZpZWxkcywgc2V0RmlsdGVyLCByZW1vdmVGaWx0ZXIsIGVubGFyZ2VGaWx0ZXJ9KSA9PiB7XG4gICAgICBjb25zdCBvbkZpZWxkU2VsZWN0b3IgPSB1c2VDYWxsYmFjayhmaWVsZCA9PiBzZXRGaWx0ZXIoaWR4LCAnbmFtZScsIGZpZWxkLm5hbWUpLCBbXG4gICAgICAgIGlkeCxcbiAgICAgICAgc2V0RmlsdGVyXG4gICAgICBdKTtcblxuICAgICAgY29uc3Qgb25Tb3VyY2VEYXRhU2VsZWN0b3IgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiBzZXRGaWx0ZXIoaWR4LCAnZGF0YUlkJywgdmFsdWUpLCBbXG4gICAgICAgIGlkeCxcbiAgICAgICAgc2V0RmlsdGVyXG4gICAgICBdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmlsdGVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgIGRhdGFzZXRzPXtbZGF0YXNldHNbZmlsdGVyLmRhdGFJZFswXV1dfVxuICAgICAgICAgICAgYWxsQXZhaWxhYmxlRmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgICAgICBlbmxhcmdlRmlsdGVyPXtlbmxhcmdlRmlsdGVyfVxuICAgICAgICAgICAgZW5sYXJnZWQ9e2ZpbHRlci5lbmxhcmdlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgZmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICAgIHZhbHVlPXtBcnJheS5pc0FycmF5KGZpbHRlci5uYW1lKSA/IGZpbHRlci5uYW1lWzBdIDogZmlsdGVyLm5hbWV9XG4gICAgICAgICAgICAgIGVyYXNhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e29uRmllbGRTZWxlY3Rvcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWx0ZXJQYW5lbEhlYWRlcj5cbiAgICAgICAgICA8U3R5bGVkRmlsdGVyQ29udGVudCBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZpbHRlci5mcmVlemV9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtmaWx0ZXIuZGF0YUlkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNvdXJjZURhdGFTZWxlY3Rvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TdHlsZWRGaWx0ZXJDb250ZW50PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIE5ld0ZpbHRlclBhbmVsLmRpc3BsYXlOYW1lID0gJ05ld0ZpbHRlclBhbmVsJztcblxuICByZXR1cm4gTmV3RmlsdGVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0ZpbHRlclBhbmVsRmFjdG9yeTtcbiJdfQ==