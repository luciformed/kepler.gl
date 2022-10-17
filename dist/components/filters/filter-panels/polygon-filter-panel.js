"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _polygonFilter = _interopRequireDefault(require("../polygon-filter"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _icons = require("../../common/icons");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _components = require("../components");

var _lodash = _interopRequireDefault(require("lodash.get"));

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
PolygonFilterPanelFactory.deps = [_filterPanelHeader["default"], _polygonFilter["default"], _panelHeaderAction["default"]];

function PolygonFilterPanelFactory(FilterPanelHeader, PolygonFilter, PanelHeaderAction) {
  /** @type {import('./filter-panel-types').FilterPanelComponent} */
  var PolygonFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        layers = _ref.layers,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleFilterFeature = _ref.toggleFilterFeature;
    var filterDatasets = (0, _react.useMemo)(function () {
      return filter.dataId.map(function (d) {
        return datasets[d];
      });
    }, [filter, datasets]);
    var onSetLayers = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'layerId', value);
    }, [setFilter, idx]);
    var isVisible = (0, _lodash["default"])(filter, ['value', 'properties', 'isVisible'], true);
    var featureType = (0, _lodash["default"])(filter, ['value', 'properties', 'renderType'], true);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "polygon-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: filterDatasets,
      allAvailableFields: allAvailableFields,
      idx: idx,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, null, "Geo - ", featureType), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      id: filter.id,
      onClick: toggleFilterFeature,
      tooltip: isVisible ? 'tooltip.hideFeature' : 'tooltip.showFeature',
      IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
      active: isVisible
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(PolygonFilter, {
      filter: filter,
      layers: layers,
      setLayers: onSetLayers,
      toggleFilterFeature: toggleFilterFeature
    }))));
  });

  PolygonFilterPanel.displayName = 'PolygonFilterPanel';
  return PolygonFilterPanel;
}

var _default = PolygonFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9wb2x5Z29uLWZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXJGYWN0b3J5IiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiRmlsdGVyUGFuZWxIZWFkZXIiLCJQb2x5Z29uRmlsdGVyIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJQb2x5Z29uRmlsdGVyUGFuZWwiLCJSZWFjdCIsIm1lbW8iLCJpZHgiLCJkYXRhc2V0cyIsImxheWVycyIsImFsbEF2YWlsYWJsZUZpZWxkcyIsImZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJmaWx0ZXJEYXRhc2V0cyIsImRhdGFJZCIsIm1hcCIsImQiLCJvblNldExheWVycyIsInZhbHVlIiwiaXNWaXNpYmxlIiwiZmVhdHVyZVR5cGUiLCJpZCIsIkV5ZVNlZW4iLCJFeWVVbnNlZW4iLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7OztBQTdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBQSx5QkFBeUIsQ0FBQ0MsSUFBMUIsR0FBaUMsQ0FDL0JDLDZCQUQrQixFQUUvQkMseUJBRitCLEVBRy9CQyw2QkFIK0IsQ0FBakM7O0FBTUEsU0FBU0oseUJBQVQsQ0FBbUNLLGlCQUFuQyxFQUFzREMsYUFBdEQsRUFBcUVDLGlCQUFyRSxFQUF3RjtBQUN0RjtBQUNBLE1BQU1DLGtCQUFrQixnQkFBR0Msa0JBQU1DLElBQU4sQ0FDekIsZ0JBU007QUFBQSxRQVJKQyxHQVFJLFFBUkpBLEdBUUk7QUFBQSxRQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxRQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxRQUxKQyxrQkFLSSxRQUxKQSxrQkFLSTtBQUFBLFFBSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLFFBSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLFFBRkpDLFNBRUksUUFGSkEsU0FFSTtBQUFBLFFBREpDLG1CQUNJLFFBREpBLG1CQUNJO0FBQ0osUUFBTUMsY0FBYyxHQUFHLG9CQUFRO0FBQUEsYUFBTUosTUFBTSxDQUFDSyxNQUFQLENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsQ0FBQztBQUFBLGVBQUlWLFFBQVEsQ0FBQ1UsQ0FBRCxDQUFaO0FBQUEsT0FBbkIsQ0FBTjtBQUFBLEtBQVIsRUFBbUQsQ0FBQ1AsTUFBRCxFQUFTSCxRQUFULENBQW5ELENBQXZCO0FBRUEsUUFBTVcsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxTQUFTLENBQUNOLEdBQUQsRUFBTSxTQUFOLEVBQWlCYSxLQUFqQixDQUFiO0FBQUEsS0FBakIsRUFBdUQsQ0FBQ1AsU0FBRCxFQUFZTixHQUFaLENBQXZELENBQXBCO0FBRUEsUUFBTWMsU0FBUyxHQUFHLHdCQUFJVixNQUFKLEVBQVksQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixXQUF4QixDQUFaLEVBQWtELElBQWxELENBQWxCO0FBQ0EsUUFBTVcsV0FBVyxHQUFHLHdCQUFJWCxNQUFKLEVBQVksQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixZQUF4QixDQUFaLEVBQW1ELElBQW5ELENBQXBCO0FBRUEsd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxRQUFRLEVBQUVJLGNBRFo7QUFFRSxNQUFBLGtCQUFrQixFQUFFTCxrQkFGdEI7QUFHRSxNQUFBLEdBQUcsRUFBRUgsR0FIUDtBQUlFLE1BQUEsTUFBTSxFQUFFSSxNQUpWO0FBS0UsTUFBQSxZQUFZLEVBQUVDO0FBTGhCLG9CQU9FLGdDQUFDLDZCQUFELGtCQUEwQlUsV0FBMUIsQ0FQRixlQVFFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVYLE1BQU0sQ0FBQ1ksRUFEYjtBQUVFLE1BQUEsT0FBTyxFQUFFVCxtQkFGWDtBQUdFLE1BQUEsT0FBTyxFQUFFTyxTQUFTLEdBQUcscUJBQUgsR0FBMkIscUJBSC9DO0FBSUUsTUFBQSxhQUFhLEVBQUVBLFNBQVMsR0FBR0csY0FBSCxHQUFhQyxnQkFKdkM7QUFLRSxNQUFBLE1BQU0sRUFBRUo7QUFMVixNQVJGLENBREYsZUFpQkUsZ0NBQUMscUNBQUQ7QUFBcUIsTUFBQSxTQUFTLEVBQUM7QUFBL0Isb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGFBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRVYsTUFEVjtBQUVFLE1BQUEsTUFBTSxFQUFFRixNQUZWO0FBR0UsTUFBQSxTQUFTLEVBQUVVLFdBSGI7QUFJRSxNQUFBLG1CQUFtQixFQUFFTDtBQUp2QixNQURGLENBREYsQ0FqQkYsQ0FERjtBQThCRCxHQWhEd0IsQ0FBM0I7O0FBbURBVixFQUFBQSxrQkFBa0IsQ0FBQ3NCLFdBQW5CLEdBQWlDLG9CQUFqQztBQUVBLFNBQU90QixrQkFBUDtBQUNEOztlQUVjUix5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW8sIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0eWxlZEZpbHRlckNvbnRlbnR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQb2x5Z29uRmlsdGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXInO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5pbXBvcnQge0V5ZVNlZW59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7RXllVW5zZWVufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9maWx0ZXItcGFuZWwvZmlsdGVyLXBhbmVsLWhlYWRlcic7XG5pbXBvcnQge1N0eWxlZEZpbHRlclBhbmVsfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcblxuUG9seWdvbkZpbHRlclBhbmVsRmFjdG9yeS5kZXBzID0gW1xuICBGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnksXG4gIFBvbHlnb25GaWx0ZXJGYWN0b3J5LFxuICBQYW5lbEhlYWRlckFjdGlvbkZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIFBvbHlnb25GaWx0ZXJQYW5lbEZhY3RvcnkoRmlsdGVyUGFuZWxIZWFkZXIsIFBvbHlnb25GaWx0ZXIsIFBhbmVsSGVhZGVyQWN0aW9uKSB7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ZpbHRlci1wYW5lbC10eXBlcycpLkZpbHRlclBhbmVsQ29tcG9uZW50fSAqL1xuICBjb25zdCBQb2x5Z29uRmlsdGVyUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBpZHgsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGxheWVycyxcbiAgICAgIGFsbEF2YWlsYWJsZUZpZWxkcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIHJlbW92ZUZpbHRlcixcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmVcbiAgICB9KSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJEYXRhc2V0cyA9IHVzZU1lbW8oKCkgPT4gZmlsdGVyLmRhdGFJZC5tYXAoZCA9PiBkYXRhc2V0c1tkXSksIFtmaWx0ZXIsIGRhdGFzZXRzXSk7XG5cbiAgICAgIGNvbnN0IG9uU2V0TGF5ZXJzID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ2xheWVySWQnLCB2YWx1ZSksIFtzZXRGaWx0ZXIsIGlkeF0pO1xuXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAnaXNWaXNpYmxlJ10sIHRydWUpO1xuICAgICAgY29uc3QgZmVhdHVyZVR5cGUgPSBnZXQoZmlsdGVyLCBbJ3ZhbHVlJywgJ3Byb3BlcnRpZXMnLCAncmVuZGVyVHlwZSddLCB0cnVlKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2x5Z29uLWZpbHRlci1wYW5lbFwiPlxuICAgICAgICAgIDxGaWx0ZXJQYW5lbEhlYWRlclxuICAgICAgICAgICAgZGF0YXNldHM9e2ZpbHRlckRhdGFzZXRzfVxuICAgICAgICAgICAgYWxsQXZhaWxhYmxlRmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0eWxlZEZpbHRlclBhbmVsPkdlbyAtIHtmZWF0dXJlVHlwZX08L1N0eWxlZEZpbHRlclBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUZpbHRlckZlYXR1cmV9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICd0b29sdGlwLmhpZGVGZWF0dXJlJyA6ICd0b29sdGlwLnNob3dGZWF0dXJlJ31cbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17aXNWaXNpYmxlID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtpc1Zpc2libGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmlsdGVyUGFuZWxIZWFkZXI+XG4gICAgICAgICAgPFN0eWxlZEZpbHRlckNvbnRlbnQgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgIDxQb2x5Z29uRmlsdGVyXG4gICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgc2V0TGF5ZXJzPXtvblNldExheWVyc31cbiAgICAgICAgICAgICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlPXt0b2dnbGVGaWx0ZXJGZWF0dXJlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TdHlsZWRGaWx0ZXJDb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIFBvbHlnb25GaWx0ZXJQYW5lbC5kaXNwbGF5TmFtZSA9ICdQb2x5Z29uRmlsdGVyUGFuZWwnO1xuXG4gIHJldHVybiBQb2x5Z29uRmlsdGVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvbHlnb25GaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=