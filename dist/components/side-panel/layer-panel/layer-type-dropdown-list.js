"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTypeDropdownListFactory = LayerTypeDropdownListFactory;
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownListWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: ", "px 0 0 ", "px;\n"])), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
});

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: ", "px;\n  padding-right: ", "px;\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

function LayerTypeDropdownListFactory() {
  var LayerTypeDropdownList = function LayerTypeDropdownList(_ref) {
    var onOptionSelected = _ref.onOptionSelected,
        options = _ref.options,
        selectedItems = _ref.selectedItems,
        selectionIndex = _ref.selectionIndex,
        customListItemComponent = _ref.customListItemComponent;
    var onSelectOption = (0, _react.useCallback)(function (e, value) {
      e.preventDefault();
      onOptionSelected(value, e);
    }, [onOptionSelected]);
    var Component = customListItemComponent;
    return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
      className: _dropdownList.classList.list
    }, options.map(function (value, i) {
      return /*#__PURE__*/_react["default"].createElement(StyledDropdownListItem, {
        className: (0, _classnames["default"])('layer-type-selector__item', {
          selected: selectedItems.find(function (it) {
            return it.id === value.id;
          }),
          hover: selectionIndex === i,
          disabled: value.disabled
        }),
        key: "".concat(value.id, "_").concat(i),
        onMouseDown: function onMouseDown(e) {
          return onSelectOption(e, value);
        },
        onClick: function onClick(e) {
          return onSelectOption(e, value);
        }
      }, /*#__PURE__*/_react["default"].createElement(Component, {
        value: value,
        isTile: true
      }));
    }));
  };

  return LayerTypeDropdownList;
}

var _default = LayerTypeDropdownListFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1kcm9wZG93bi1saXN0LmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwibGF5ZXJUeXBlSWNvblBkTCIsIlN0eWxlZERyb3Bkb3duTGlzdEl0ZW0iLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIkxheWVyVHlwZURyb3Bkb3duTGlzdEZhY3RvcnkiLCJMYXllclR5cGVEcm9wZG93bkxpc3QiLCJvbk9wdGlvblNlbGVjdGVkIiwib3B0aW9ucyIsInNlbGVjdGVkSXRlbXMiLCJzZWxlY3Rpb25JbmRleCIsImN1c3RvbUxpc3RJdGVtQ29tcG9uZW50Iiwib25TZWxlY3RPcHRpb24iLCJlIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIkNvbXBvbmVudCIsImNsYXNzTGlzdCIsImxpc3QiLCJtYXAiLCJpIiwic2VsZWN0ZWQiLCJmaW5kIiwiaXQiLCJpZCIsImhvdmVyIiwiZGlzYWJsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHQyw2QkFBT0MsR0FBViw2UEFDckIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBRGdCLEVBRUgsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxlQUFoQjtBQUFBLENBRkYsRUFHQyxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLHFCQUFoQjtBQUFBLENBSE4sRUFPWixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLGdCQUFoQjtBQUFBLENBUE8sRUFPbUMsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQVB4QyxDQUF6Qjs7QUFVQSxJQUFNQyxzQkFBc0IsR0FBR1IsNkJBQU9DLEdBQVYsOGZBQ1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQURHLEVBRVQsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQUZJLEVBbUJiLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sV0FBaEI7QUFBQSxDQW5CUSxFQXVCYixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFNBQWhCO0FBQUEsQ0F2QlEsQ0FBNUI7O0FBNEJPLFNBQVNDLDRCQUFULEdBQXdDO0FBQzdDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FNeEI7QUFBQSxRQUxKQyxnQkFLSSxRQUxKQSxnQkFLSTtBQUFBLFFBSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLFFBSEpDLGFBR0ksUUFISkEsYUFHSTtBQUFBLFFBRkpDLGNBRUksUUFGSkEsY0FFSTtBQUFBLFFBREpDLHVCQUNJLFFBREpBLHVCQUNJO0FBQ0osUUFBTUMsY0FBYyxHQUFHLHdCQUNyQixVQUFDQyxDQUFELEVBQUlDLEtBQUosRUFBYztBQUNaRCxNQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQVIsTUFBQUEsZ0JBQWdCLENBQUNPLEtBQUQsRUFBUUQsQ0FBUixDQUFoQjtBQUNELEtBSm9CLEVBS3JCLENBQUNOLGdCQUFELENBTHFCLENBQXZCO0FBUUEsUUFBTVMsU0FBUyxHQUFHTCx1QkFBbEI7QUFFQSx3QkFDRSxnQ0FBQyxtQkFBRDtBQUFxQixNQUFBLFNBQVMsRUFBRU0sd0JBQVVDO0FBQTFDLE9BQ0dWLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUNMLEtBQUQsRUFBUU0sQ0FBUjtBQUFBLDBCQUNYLGdDQUFDLHNCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsMkJBQVgsRUFBd0M7QUFDakRDLFVBQUFBLFFBQVEsRUFBRVosYUFBYSxDQUFDYSxJQUFkLENBQW1CLFVBQUFDLEVBQUU7QUFBQSxtQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVWLEtBQUssQ0FBQ1UsRUFBcEI7QUFBQSxXQUFyQixDQUR1QztBQUVqREMsVUFBQUEsS0FBSyxFQUFFZixjQUFjLEtBQUtVLENBRnVCO0FBR2pETSxVQUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1k7QUFIaUMsU0FBeEMsQ0FEYjtBQU1FLFFBQUEsR0FBRyxZQUFLWixLQUFLLENBQUNVLEVBQVgsY0FBaUJKLENBQWpCLENBTkw7QUFPRSxRQUFBLFdBQVcsRUFBRSxxQkFBQVAsQ0FBQztBQUFBLGlCQUFJRCxjQUFjLENBQUNDLENBQUQsRUFBSUMsS0FBSixDQUFsQjtBQUFBLFNBUGhCO0FBUUUsUUFBQSxPQUFPLEVBQUUsaUJBQUFELENBQUM7QUFBQSxpQkFBSUQsY0FBYyxDQUFDQyxDQUFELEVBQUlDLEtBQUosQ0FBbEI7QUFBQTtBQVJaLHNCQVVFLGdDQUFDLFNBQUQ7QUFBVyxRQUFBLEtBQUssRUFBRUEsS0FBbEI7QUFBeUIsUUFBQSxNQUFNO0FBQS9CLFFBVkYsQ0FEVztBQUFBLEtBQVosQ0FESCxDQURGO0FBa0JELEdBbkNEOztBQXFDQSxTQUFPUixxQkFBUDtBQUNEOztlQUVjRCw0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuXG5jb25zdCBEcm9wZG93bkxpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3R9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJvcmRlclRvcH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblBkTH1weCAwIDAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uUGRMfXB4O1xuYDtcblxuY29uc3QgU3R5bGVkRHJvcGRvd25MaXN0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25QZEx9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblBkTH1weDtcblxuICAmLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cblxuICAmLnNlbGVjdGVkIHtcbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FmMmY0O1xuICAgIH1cbiAgfVxuXG4gIDpob3ZlcixcbiAgJi5zZWxlY3RlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcbiAgICB9XG5cbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWwge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXllclR5cGVEcm9wZG93bkxpc3RGYWN0b3J5KCkge1xuICBjb25zdCBMYXllclR5cGVEcm9wZG93bkxpc3QgPSAoe1xuICAgIG9uT3B0aW9uU2VsZWN0ZWQsXG4gICAgb3B0aW9ucyxcbiAgICBzZWxlY3RlZEl0ZW1zLFxuICAgIHNlbGVjdGlvbkluZGV4LFxuICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50XG4gIH0pID0+IHtcbiAgICBjb25zdCBvblNlbGVjdE9wdGlvbiA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGUsIHZhbHVlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25PcHRpb25TZWxlY3RlZCh2YWx1ZSwgZSk7XG4gICAgICB9LFxuICAgICAgW29uT3B0aW9uU2VsZWN0ZWRdXG4gICAgKTtcblxuICAgIGNvbnN0IENvbXBvbmVudCA9IGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkxpc3RXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3R9PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duTGlzdEl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbScsIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkSXRlbXMuZmluZChpdCA9PiBpdC5pZCA9PT0gdmFsdWUuaWQpLFxuICAgICAgICAgICAgICBob3Zlcjogc2VsZWN0aW9uSW5kZXggPT09IGksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB2YWx1ZS5kaXNhYmxlZFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e2Ake3ZhbHVlLmlkfV8ke2l9YH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IG9uU2VsZWN0T3B0aW9uKGUsIHZhbHVlKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gb25TZWxlY3RPcHRpb24oZSwgdmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb21wb25lbnQgdmFsdWU9e3ZhbHVlfSBpc1RpbGUgLz5cbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9Ecm9wZG93bkxpc3RXcmFwcGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExheWVyVHlwZURyb3Bkb3duTGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJUeXBlRHJvcGRvd25MaXN0RmFjdG9yeTtcbiJdfQ==