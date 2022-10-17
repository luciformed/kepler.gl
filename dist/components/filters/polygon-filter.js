"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _components = require("./components");

var _types = require("../../layers/types");

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
var layerFilter = function layerFilter(layer) {
  return layer.type === _types.LAYER_TYPES.point;
};

var isAlreadySelected = function isAlreadySelected(selectedLayers, layerId) {
  return selectedLayers.findIndex(function (l) {
    return l.id === layerId;
  }) === -1;
};

function PolygonFilterFactory() {
  /** @type {typeof import('./polygon-filter').PolygonFilter} */
  var PolygonFilter = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var filter = _ref.filter,
        layers = _ref.layers,
        setLayers = _ref.setLayers;
    var setNewLayers = (0, _react.useCallback)(function (newLayers) {
      return setLayers(newLayers.map(function (l) {
        return l.id;
      }));
    }, [setLayers]);
    var selectedLayers = (0, _react.useMemo)(function () {
      return layers.filter(function (l) {
        var _filter$layerId;

        return (_filter$layerId = filter.layerId) === null || _filter$layerId === void 0 ? void 0 : _filter$layerId.includes(l.id);
      });
    }, [filter, layers]);
    var availableLayers = (0, _react.useMemo)(function () {
      // remove already added layers and filter out non point layers
      return layers.filter(function (layer) {
        return layerFilter(layer) && isAlreadySelected(selectedLayers, layer.id);
      });
    }, [layers, selectedLayers]);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, {
      htmlFor: "filter-".concat(filter.id)
    }, "Layers:"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      options: availableLayers,
      selectedItems: selectedLayers,
      onChange: setNewLayers,
      searchable: false,
      multiSelect: true,
      getOptionValue: function getOptionValue(l) {
        return l.id;
      },
      displayOption: function displayOption(l) {
        return l.config.label;
      }
    }));
  });

  PolygonFilter.displayName = 'PolygonFilter';
  return PolygonFilter;
}

var _default = PolygonFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvcG9seWdvbi1maWx0ZXIuanMiXSwibmFtZXMiOlsibGF5ZXJGaWx0ZXIiLCJsYXllciIsInR5cGUiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaXNBbHJlYWR5U2VsZWN0ZWQiLCJzZWxlY3RlZExheWVycyIsImxheWVySWQiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJQb2x5Z29uRmlsdGVyRmFjdG9yeSIsIlBvbHlnb25GaWx0ZXIiLCJSZWFjdCIsIm1lbW8iLCJmaWx0ZXIiLCJsYXllcnMiLCJzZXRMYXllcnMiLCJzZXROZXdMYXllcnMiLCJuZXdMYXllcnMiLCJtYXAiLCJpbmNsdWRlcyIsImF2YWlsYWJsZUxheWVycyIsImNvbmZpZyIsImxhYmVsIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxJQUFOLEtBQWVDLG1CQUFZQyxLQUEvQjtBQUFBLENBQXpCOztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsY0FBRCxFQUFpQkMsT0FBakI7QUFBQSxTQUN4QkQsY0FBYyxDQUFDRSxTQUFmLENBQXlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0gsT0FBYjtBQUFBLEdBQTFCLE1BQW9ELENBQUMsQ0FEN0I7QUFBQSxDQUExQjs7QUFHQSxTQUFTSSxvQkFBVCxHQUFnQztBQUM5QjtBQUNBLE1BQU1DLGFBQWEsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVcsZ0JBQWlDO0FBQUEsUUFBL0JDLE1BQStCLFFBQS9CQSxNQUErQjtBQUFBLFFBQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxRQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDaEUsUUFBTUMsWUFBWSxHQUFHLHdCQUNuQixVQUFBQyxTQUFTLEVBQUk7QUFDWCxhQUFPRixTQUFTLENBQUNFLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUFYLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQUFmLENBQUQsQ0FBaEI7QUFDRCxLQUhrQixFQUluQixDQUFDTyxTQUFELENBSm1CLENBQXJCO0FBT0EsUUFBTVgsY0FBYyxHQUFHLG9CQUFRO0FBQUEsYUFBTVUsTUFBTSxDQUFDRCxNQUFQLENBQWMsVUFBQU4sQ0FBQztBQUFBOztBQUFBLGtDQUFJTSxNQUFNLENBQUNSLE9BQVgsb0RBQUksZ0JBQWdCYyxRQUFoQixDQUF5QlosQ0FBQyxDQUFDQyxFQUEzQixDQUFKO0FBQUEsT0FBZixDQUFOO0FBQUEsS0FBUixFQUFrRSxDQUN2RkssTUFEdUYsRUFFdkZDLE1BRnVGLENBQWxFLENBQXZCO0FBS0EsUUFBTU0sZUFBZSxHQUFHLG9CQUFRLFlBQU07QUFDcEM7QUFDQSxhQUFPTixNQUFNLENBQUNELE1BQVAsQ0FDTCxVQUFBZCxLQUFLO0FBQUEsZUFBSUQsV0FBVyxDQUFDQyxLQUFELENBQVgsSUFBc0JJLGlCQUFpQixDQUFDQyxjQUFELEVBQWlCTCxLQUFLLENBQUNTLEVBQXZCLENBQTNDO0FBQUEsT0FEQSxDQUFQO0FBR0QsS0FMdUIsRUFLckIsQ0FBQ00sTUFBRCxFQUFTVixjQUFULENBTHFCLENBQXhCO0FBT0Esd0JBQ0UsMERBQ0UsZ0NBQUMsNkJBQUQ7QUFBbUIsTUFBQSxPQUFPLG1CQUFZUyxNQUFNLENBQUNMLEVBQW5CO0FBQTFCLGlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRVksZUFEWDtBQUVFLE1BQUEsYUFBYSxFQUFFaEIsY0FGakI7QUFHRSxNQUFBLFFBQVEsRUFBRVksWUFIWjtBQUlFLE1BQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxNQUFBLFdBQVcsRUFBRSxJQUxmO0FBTUUsTUFBQSxjQUFjLEVBQUUsd0JBQUFULENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNDLEVBQU47QUFBQSxPQU5uQjtBQU9FLE1BQUEsYUFBYSxFQUFFLHVCQUFBRCxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQWI7QUFBQTtBQVBsQixNQUZGLENBREY7QUFjRCxHQWxDcUIsQ0FBdEI7O0FBb0NBWixFQUFBQSxhQUFhLENBQUNhLFdBQWQsR0FBNEIsZUFBNUI7QUFFQSxTQUFPYixhQUFQO0FBQ0Q7O2VBRWNELG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7U3R5bGVkRmlsdGVyUGFuZWx9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICdsYXllcnMvdHlwZXMnO1xuXG5jb25zdCBsYXllckZpbHRlciA9IGxheWVyID0+IGxheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50O1xuY29uc3QgaXNBbHJlYWR5U2VsZWN0ZWQgPSAoc2VsZWN0ZWRMYXllcnMsIGxheWVySWQpID0+XG4gIHNlbGVjdGVkTGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IGxheWVySWQpID09PSAtMTtcblxuZnVuY3Rpb24gUG9seWdvbkZpbHRlckZhY3RvcnkoKSB7XG4gIC8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9wb2x5Z29uLWZpbHRlcicpLlBvbHlnb25GaWx0ZXJ9ICovXG4gIGNvbnN0IFBvbHlnb25GaWx0ZXIgPSBSZWFjdC5tZW1vKCh7ZmlsdGVyLCBsYXllcnMsIHNldExheWVyc30pID0+IHtcbiAgICBjb25zdCBzZXROZXdMYXllcnMgPSB1c2VDYWxsYmFjayhcbiAgICAgIG5ld0xheWVycyA9PiB7XG4gICAgICAgIHJldHVybiBzZXRMYXllcnMobmV3TGF5ZXJzLm1hcChsID0+IGwuaWQpKTtcbiAgICAgIH0sXG4gICAgICBbc2V0TGF5ZXJzXVxuICAgICk7XG5cbiAgICBjb25zdCBzZWxlY3RlZExheWVycyA9IHVzZU1lbW8oKCkgPT4gbGF5ZXJzLmZpbHRlcihsID0+IGZpbHRlci5sYXllcklkPy5pbmNsdWRlcyhsLmlkKSksIFtcbiAgICAgIGZpbHRlcixcbiAgICAgIGxheWVyc1xuICAgIF0pO1xuXG4gICAgY29uc3QgYXZhaWxhYmxlTGF5ZXJzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgYWxyZWFkeSBhZGRlZCBsYXllcnMgYW5kIGZpbHRlciBvdXQgbm9uIHBvaW50IGxheWVyc1xuICAgICAgcmV0dXJuIGxheWVycy5maWx0ZXIoXG4gICAgICAgIGxheWVyID0+IGxheWVyRmlsdGVyKGxheWVyKSAmJiBpc0FscmVhZHlTZWxlY3RlZChzZWxlY3RlZExheWVycywgbGF5ZXIuaWQpXG4gICAgICApO1xuICAgIH0sIFtsYXllcnMsIHNlbGVjdGVkTGF5ZXJzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN0eWxlZEZpbHRlclBhbmVsIGh0bWxGb3I9e2BmaWx0ZXItJHtmaWx0ZXIuaWR9YH0+TGF5ZXJzOjwvU3R5bGVkRmlsdGVyUGFuZWw+XG4gICAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgICBvcHRpb25zPXthdmFpbGFibGVMYXllcnN9XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRMYXllcnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldE5ld0xheWVyc31cbiAgICAgICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgICAgICBtdWx0aVNlbGVjdD17dHJ1ZX1cbiAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17bCA9PiBsLmlkfVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e2wgPT4gbC5jb25maWcubGFiZWx9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICBQb2x5Z29uRmlsdGVyLmRpc3BsYXlOYW1lID0gJ1BvbHlnb25GaWx0ZXInO1xuXG4gIHJldHVybiBQb2x5Z29uRmlsdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2x5Z29uRmlsdGVyRmFjdG9yeTtcbiJdfQ==