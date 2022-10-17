"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _localization = require("../../localization");

var _styledComponents = require("../common/styled-components");

var _icons = require("../common/icons");

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _filterPanel = _interopRequireDefault(require("./filter-panel/filter-panel"));

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
FilterManagerFactory.deps = [_sourceDataCatalog["default"], _filterPanel["default"]];

function FilterManagerFactory(SourceDataCatalog, FilterPanel) {
  var FilterManager = function FilterManager(_ref) {
    var _ref$filters = _ref.filters,
        filters = _ref$filters === void 0 ? [] : _ref$filters,
        datasets = _ref.datasets,
        layers = _ref.layers,
        showDatasetTable = _ref.showDatasetTable,
        addFilter = _ref.addFilter,
        setFilter = _ref.setFilter,
        _removeFilter = _ref.removeFilter,
        _enlargeFilter = _ref.enlargeFilter,
        _toggleAnimation = _ref.toggleAnimation,
        _toggleFilterFeature = _ref.toggleFilterFeature;
    var isAnyFilterAnimating = filters.some(function (f) {
      return f.isAnimating;
    });
    var hadEmptyFilter = filters.some(function (f) {
      return !f.name;
    });
    var hadDataset = Object.keys(datasets).length;
    var onClickAddFilter = (0, _react.useCallback)(function () {
      var defaultDataset = Object.keys(datasets).length && Object.keys(datasets)[0] || null;
      addFilter(defaultDataset);
    }, [datasets, addFilter]); // render last added filter first

    var reversedIndex = (0, _react.useMemo)(function () {
      return new Array(filters.length).fill(0).map(function (d, i) {
        return i;
      }).reverse();
    }, [filters.length]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-manager"
    }, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
      datasets: datasets,
      showDatasetTable: showDatasetTable
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, reversedIndex.map(function (idx) {
      return /*#__PURE__*/_react["default"].createElement(FilterPanel, {
        key: "".concat(filters[idx].id, "-").concat(idx),
        idx: idx,
        filters: filters,
        filter: filters[idx],
        datasets: datasets,
        layers: layers,
        isAnyFilterAnimating: isAnyFilterAnimating,
        removeFilter: function removeFilter() {
          return _removeFilter(idx);
        },
        enlargeFilter: function enlargeFilter() {
          return _enlargeFilter(idx);
        },
        toggleAnimation: function toggleAnimation() {
          return _toggleAnimation(idx);
        },
        toggleFilterFeature: function toggleFilterFeature() {
          return _toggleFilterFeature(idx);
        },
        setFilter: setFilter
      });
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
      className: "add-filter-button",
      inactive: hadEmptyFilter || !hadDataset,
      width: "105px",
      onClick: onClickAddFilter
    }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
      height: "12px"
    }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'filterManager.addFilter'
    })));
  };

  FilterManager.propTypes = {
    datasets: _propTypes["default"].object,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    addFilter: _propTypes["default"].func.isRequired,
    removeFilter: _propTypes["default"].func.isRequired,
    enlargeFilter: _propTypes["default"].func.isRequired,
    toggleAnimation: _propTypes["default"].func.isRequired,
    toggleFilterFeature: _propTypes["default"].func.isRequired,
    setFilter: _propTypes["default"].func.isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    showDatasetTable: _propTypes["default"].func,
    // fields can be undefined when dataset is not selected
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any)
  };
  return FilterManager;
}

var _default = FilterManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5IiwiRmlsdGVyUGFuZWxGYWN0b3J5IiwiU291cmNlRGF0YUNhdGFsb2ciLCJGaWx0ZXJQYW5lbCIsIkZpbHRlck1hbmFnZXIiLCJmaWx0ZXJzIiwiZGF0YXNldHMiLCJsYXllcnMiLCJzaG93RGF0YXNldFRhYmxlIiwiYWRkRmlsdGVyIiwic2V0RmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwiZW5sYXJnZUZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsInRvZ2dsZUZpbHRlckZlYXR1cmUiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsInNvbWUiLCJmIiwiaXNBbmltYXRpbmciLCJoYWRFbXB0eUZpbHRlciIsIm5hbWUiLCJoYWREYXRhc2V0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm9uQ2xpY2tBZGRGaWx0ZXIiLCJkZWZhdWx0RGF0YXNldCIsInJldmVyc2VkSW5kZXgiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJkIiwiaSIsInJldmVyc2UiLCJpZHgiLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImZpZWxkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBQSxvQkFBb0IsQ0FBQ0MsSUFBckIsR0FBNEIsQ0FBQ0MsNkJBQUQsRUFBMkJDLHVCQUEzQixDQUE1Qjs7QUFFQSxTQUFTSCxvQkFBVCxD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QmpDLElBQUFBLGdCQUFnQixFQUFFNkIsc0JBQVVLLElBVko7QUFZeEI7QUFDQUMsSUFBQUEsTUFBTSxFQUFFTixzQkFBVUUsT0FBVixDQUFrQkYsc0JBQVVHLEdBQTVCO0FBYmdCLEdBQTFCO0FBZ0JBLFNBQU9wQyxhQUFQO0FBQ0Q7O2VBRWNOLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0J1dHRvbiwgU2lkZVBhbmVsRGl2aWRlciwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkgZnJvbSAnLi9jb21tb24vc291cmNlLWRhdGEtY2F0YWxvZyc7XG5pbXBvcnQgRmlsdGVyUGFuZWxGYWN0b3J5IGZyb20gJy4vZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbCc7XG5cbkZpbHRlck1hbmFnZXJGYWN0b3J5LmRlcHMgPSBbU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5LCBGaWx0ZXJQYW5lbEZhY3RvcnldO1xuXG5mdW5jdGlvbiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeShTb3VyY2VEYXRhQ2F0YWxvZywgRmlsdGVyUGFuZWwpIHtcbiAgY29uc3QgRmlsdGVyTWFuYWdlciA9ICh7XG4gICAgZmlsdGVycyA9IFtdLFxuICAgIGRhdGFzZXRzLFxuICAgIGxheWVycyxcbiAgICBzaG93RGF0YXNldFRhYmxlLFxuICAgIGFkZEZpbHRlcixcbiAgICBzZXRGaWx0ZXIsXG4gICAgcmVtb3ZlRmlsdGVyLFxuICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgdG9nZ2xlQW5pbWF0aW9uLFxuICAgIHRvZ2dsZUZpbHRlckZlYXR1cmVcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGlzQW55RmlsdGVyQW5pbWF0aW5nID0gZmlsdGVycy5zb21lKGYgPT4gZi5pc0FuaW1hdGluZyk7XG4gICAgY29uc3QgaGFkRW1wdHlGaWx0ZXIgPSBmaWx0ZXJzLnNvbWUoZiA9PiAhZi5uYW1lKTtcbiAgICBjb25zdCBoYWREYXRhc2V0ID0gT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aDtcbiAgICBjb25zdCBvbkNsaWNrQWRkRmlsdGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdERhdGFzZXQgPSAoT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhkYXRhc2V0cylbMF0pIHx8IG51bGw7XG4gICAgICBhZGRGaWx0ZXIoZGVmYXVsdERhdGFzZXQpO1xuICAgIH0sIFtkYXRhc2V0cywgYWRkRmlsdGVyXSk7XG4gICAgLy8gcmVuZGVyIGxhc3QgYWRkZWQgZmlsdGVyIGZpcnN0XG4gICAgY29uc3QgcmV2ZXJzZWRJbmRleCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShmaWx0ZXJzLmxlbmd0aClcbiAgICAgICAgLmZpbGwoMClcbiAgICAgICAgLm1hcCgoZCwgaSkgPT4gaSlcbiAgICAgICAgLnJldmVyc2UoKTtcbiAgICB9LCBbZmlsdGVycy5sZW5ndGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1tYW5hZ2VyXCI+XG4gICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZyBkYXRhc2V0cz17ZGF0YXNldHN9IHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9IC8+XG4gICAgICAgIDxTaWRlUGFuZWxEaXZpZGVyIC8+XG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIHtyZXZlcnNlZEluZGV4Lm1hcChpZHggPT4gKFxuICAgICAgICAgICAgPEZpbHRlclBhbmVsXG4gICAgICAgICAgICAgIGtleT17YCR7ZmlsdGVyc1tpZHhdLmlkfS0ke2lkeH1gfVxuICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJzW2lkeF19XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cbiAgICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXsoKSA9PiByZW1vdmVGaWx0ZXIoaWR4KX1cbiAgICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17KCkgPT4gZW5sYXJnZUZpbHRlcihpZHgpfVxuICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249eygpID0+IHRvZ2dsZUFuaW1hdGlvbihpZHgpfVxuICAgICAgICAgICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlPXsoKSA9PiB0b2dnbGVGaWx0ZXJGZWF0dXJlKGlkeCl9XG4gICAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLWZpbHRlci1idXR0b25cIlxuICAgICAgICAgIGluYWN0aXZlPXtoYWRFbXB0eUZpbHRlciB8fCAhaGFkRGF0YXNldH1cbiAgICAgICAgICB3aWR0aD1cIjEwNXB4XCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQWRkRmlsdGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbHRlck1hbmFnZXIuYWRkRmlsdGVyJ30gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIEZpbHRlck1hbmFnZXIucHJvcFR5cGVzID0ge1xuICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICBhZGRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVtb3ZlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGVubGFyZ2VGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdG9nZ2xlQW5pbWF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgc2hvd0RhdGFzZXRUYWJsZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvLyBmaWVsZHMgY2FuIGJlIHVuZGVmaW5lZCB3aGVuIGRhdGFzZXQgaXMgbm90IHNlbGVjdGVkXG4gICAgZmllbGRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIHJldHVybiBGaWx0ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==