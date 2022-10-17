"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _layerTypeDropdownList = _interopRequireDefault(require("./layer-type-dropdown-list"));

var _layerTypeListItem = _interopRequireDefault(require("./layer-type-list-item"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};

var StyledLayerTypeSelector = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"])));

LayerTypeSelectorFactory.deps = [_layerTypeListItem["default"], _layerTypeDropdownList["default"]];

var getDisplayOption = function getDisplayOption(op) {
  return op.label;
};

var getOptionValue = function getOptionValue(op) {
  return op.id;
};

function LayerTypeSelectorFactory(LayerTypeListItem, LayerTypeDropdownList) {
  var LayerTypeSelector = function LayerTypeSelector(_ref) {
    var layer = _ref.layer,
        layerTypeOptions = _ref.layerTypeOptions,
        onSelect = _ref.onSelect,
        datasets = _ref.datasets;
    var hasData = (0, _react.useMemo)(function () {
      return Boolean(Object.keys(datasets).length);
    }, [datasets]);
    var typeOptions = (0, _react.useMemo)(function () {
      return layerTypeOptions.map(function (op) {
        return _objectSpread(_objectSpread({}, op), {}, {
          disabled: !hasData && op.requireData !== false
        });
      });
    }, [hasData, layerTypeOptions]);
    var selectedItems = (0, _react.useMemo)(function () {
      return typeOptions.find(function (op) {
        return op.id === layer.type;
      });
    }, [typeOptions, layer.type]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(StyledLayerTypeSelector, {
      className: "layer-config__type"
    }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      selectedItems: selectedItems,
      options: typeOptions,
      multiSelect: false,
      placeholder: "placeholder.selectType",
      onChange: onSelect,
      getOptionValue: getOptionValue,
      filterOption: "label",
      displayOption: getDisplayOption,
      DropDownLineItemRenderComponent: LayerTypeListItem,
      DropDownRenderComponent: LayerTypeDropdownList
    })));
  };

  LayerTypeSelector.propTypes = propTypes;
  return (0, _styledComponents.withTheme)(LayerTypeSelector);
}

var _default = LayerTypeSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJwcm9wVHlwZXMiLCJsYXllciIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvblNlbGVjdCIsImZ1bmMiLCJTdHlsZWRMYXllclR5cGVTZWxlY3RvciIsInN0eWxlZCIsImRpdiIsIkxheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSIsImRlcHMiLCJMYXllclR5cGVMaXN0SXRlbUZhY3RvcnkiLCJMYXllclR5cGVEcm9wZG93bkxpc3RGYWN0b3J5IiwiZ2V0RGlzcGxheU9wdGlvbiIsIm9wIiwibGFiZWwiLCJnZXRPcHRpb25WYWx1ZSIsImlkIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJMYXllclR5cGVEcm9wZG93bkxpc3QiLCJMYXllclR5cGVTZWxlY3RvciIsImxheWVyVHlwZU9wdGlvbnMiLCJkYXRhc2V0cyIsImhhc0RhdGEiLCJCb29sZWFuIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInR5cGVPcHRpb25zIiwibWFwIiwiZGlzYWJsZWQiLCJyZXF1aXJlRGF0YSIsInNlbGVjdGVkSXRlbXMiLCJmaW5kIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVJLElBQVYsQ0FBZUY7QUFGVCxDQUFsQjs7QUFLQSxJQUFNRyx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVYsMEtBQTdCOztBQU1BQyx3QkFBd0IsQ0FBQ0MsSUFBekIsR0FBZ0MsQ0FBQ0MsNkJBQUQsRUFBMkJDLGlDQUEzQixDQUFoQzs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLEVBQUU7QUFBQSxTQUFJQSxFQUFFLENBQUNDLEtBQVA7QUFBQSxDQUEzQjs7QUFDQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFGLEVBQUU7QUFBQSxTQUFJQSxFQUFFLENBQUNHLEVBQVA7QUFBQSxDQUF6Qjs7QUFFQSxTQUFTUix3QkFBVCxDQUFrQ1MsaUJBQWxDLEVBQXFEQyxxQkFBckQsRUFBNEU7QUFDMUUsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFtRDtBQUFBLFFBQWpEcEIsS0FBaUQsUUFBakRBLEtBQWlEO0FBQUEsUUFBMUNxQixnQkFBMEMsUUFBMUNBLGdCQUEwQztBQUFBLFFBQXhCakIsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsUUFBZGtCLFFBQWMsUUFBZEEsUUFBYztBQUMzRSxRQUFNQyxPQUFPLEdBQUcsb0JBQVE7QUFBQSxhQUFNQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixRQUFaLEVBQXNCSyxNQUF2QixDQUFiO0FBQUEsS0FBUixFQUFxRCxDQUFDTCxRQUFELENBQXJELENBQWhCO0FBQ0EsUUFBTU0sV0FBVyxHQUFHLG9CQUNsQjtBQUFBLGFBQ0VQLGdCQUFnQixDQUFDUSxHQUFqQixDQUFxQixVQUFBZixFQUFFO0FBQUEsK0NBQ2xCQSxFQURrQjtBQUVyQmdCLFVBQUFBLFFBQVEsRUFBRSxDQUFDUCxPQUFELElBQVlULEVBQUUsQ0FBQ2lCLFdBQUgsS0FBbUI7QUFGcEI7QUFBQSxPQUF2QixDQURGO0FBQUEsS0FEa0IsRUFNbEIsQ0FBQ1IsT0FBRCxFQUFVRixnQkFBVixDQU5rQixDQUFwQjtBQVNBLFFBQU1XLGFBQWEsR0FBRyxvQkFBUTtBQUFBLGFBQU1KLFdBQVcsQ0FBQ0ssSUFBWixDQUFpQixVQUFBbkIsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ0csRUFBSCxLQUFVakIsS0FBSyxDQUFDa0MsSUFBcEI7QUFBQSxPQUFuQixDQUFOO0FBQUEsS0FBUixFQUE0RCxDQUNoRk4sV0FEZ0YsRUFFaEY1QixLQUFLLENBQUNrQyxJQUYwRSxDQUE1RCxDQUF0QjtBQUtBLHdCQUNFLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLHVCQUFEO0FBQXlCLE1BQUEsU0FBUyxFQUFDO0FBQW5DLG9CQUNFLGdDQUFDLHdCQUFEO0FBQ0UsTUFBQSxhQUFhLEVBQUVGLGFBRGpCO0FBRUUsTUFBQSxPQUFPLEVBQUVKLFdBRlg7QUFHRSxNQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsTUFBQSxXQUFXLEVBQUMsd0JBSmQ7QUFLRSxNQUFBLFFBQVEsRUFBRXhCLFFBTFo7QUFNRSxNQUFBLGNBQWMsRUFBRVksY0FObEI7QUFPRSxNQUFBLFlBQVksRUFBQyxPQVBmO0FBUUUsTUFBQSxhQUFhLEVBQUVILGdCQVJqQjtBQVNFLE1BQUEsK0JBQStCLEVBQUVLLGlCQVRuQztBQVVFLE1BQUEsdUJBQXVCLEVBQUVDO0FBVjNCLE1BREYsQ0FERixDQURGO0FBa0JELEdBbENEOztBQW9DQUMsRUFBQUEsaUJBQWlCLENBQUNyQixTQUFsQixHQUE4QkEsU0FBOUI7QUFFQSxTQUFPLGlDQUFVcUIsaUJBQVYsQ0FBUDtBQUNEOztlQUVjWCx3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBMYXllclR5cGVEcm9wZG93bkxpc3RGYWN0b3J5IGZyb20gJy4vbGF5ZXItdHlwZS1kcm9wZG93bi1saXN0JztcbmltcG9ydCBMYXllclR5cGVMaXN0SXRlbUZhY3RvcnkgZnJvbSAnLi9sYXllci10eXBlLWxpc3QtaXRlbSc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5cbmltcG9ydCB7U2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRMYXllclR5cGVTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG4gIC5pdGVtLXNlbGVjdG9yIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDJweDtcbiAgfVxuYDtcblxuTGF5ZXJUeXBlU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbTGF5ZXJUeXBlTGlzdEl0ZW1GYWN0b3J5LCBMYXllclR5cGVEcm9wZG93bkxpc3RGYWN0b3J5XTtcblxuY29uc3QgZ2V0RGlzcGxheU9wdGlvbiA9IG9wID0+IG9wLmxhYmVsO1xuY29uc3QgZ2V0T3B0aW9uVmFsdWUgPSBvcCA9PiBvcC5pZDtcblxuZnVuY3Rpb24gTGF5ZXJUeXBlU2VsZWN0b3JGYWN0b3J5KExheWVyVHlwZUxpc3RJdGVtLCBMYXllclR5cGVEcm9wZG93bkxpc3QpIHtcbiAgY29uc3QgTGF5ZXJUeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBsYXllclR5cGVPcHRpb25zLCBvblNlbGVjdCwgZGF0YXNldHN9KSA9PiB7XG4gICAgY29uc3QgaGFzRGF0YSA9IHVzZU1lbW8oKCkgPT4gQm9vbGVhbihPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoKSwgW2RhdGFzZXRzXSk7XG4gICAgY29uc3QgdHlwZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucy5tYXAob3AgPT4gKHtcbiAgICAgICAgICAuLi5vcCxcbiAgICAgICAgICBkaXNhYmxlZDogIWhhc0RhdGEgJiYgb3AucmVxdWlyZURhdGEgIT09IGZhbHNlXG4gICAgICAgIH0pKSxcbiAgICAgIFtoYXNEYXRhLCBsYXllclR5cGVPcHRpb25zXVxuICAgICk7XG5cbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdXNlTWVtbygoKSA9PiB0eXBlT3B0aW9ucy5maW5kKG9wID0+IG9wLmlkID09PSBsYXllci50eXBlKSwgW1xuICAgICAgdHlwZU9wdGlvbnMsXG4gICAgICBsYXllci50eXBlXG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgIDxTdHlsZWRMYXllclR5cGVTZWxlY3RvciBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX3R5cGVcIj5cbiAgICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZEl0ZW1zfVxuICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyLnNlbGVjdFR5cGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2dldE9wdGlvblZhbHVlfVxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPVwibGFiZWxcIlxuICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17Z2V0RGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZUxpc3RJdGVtfVxuICAgICAgICAgICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZURyb3Bkb3duTGlzdH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZExheWVyVHlwZVNlbGVjdG9yPlxuICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICk7XG4gIH07XG5cbiAgTGF5ZXJUeXBlU2VsZWN0b3IucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG4gIHJldHVybiB3aXRoVGhlbWUoTGF5ZXJUeXBlU2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllclR5cGVTZWxlY3RvckZhY3Rvcnk7XG4iXX0=