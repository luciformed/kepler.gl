"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ChickletTag = exports.ChickletButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

var _localization = require("../../../localization");

var _templateObject, _templateObject2, _templateObject3;

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};

var ChickletButton = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.inputTheme === 'light' ? props.theme.chickletBgdLT : props.theme.chickletBgd;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.textColorLT : props.theme.textColor;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.textColorHlLT : props.theme.textColorHl;
});

exports.ChickletButton = ChickletButton;

var ChickletTag = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"])));

exports.ChickletTag = ChickletTag;

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove,
      inputTheme = _ref.inputTheme;
  return /*#__PURE__*/_react["default"].createElement(ChickletButton, {
    inputTheme: inputTheme
  }, /*#__PURE__*/_react["default"].createElement(ChickletTag, null, name), /*#__PURE__*/_react["default"].createElement(_delete["default"], {
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n      \n  color: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.inputTheme === 'light' ? props.theme.chickletedInputLT : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme,
      CustomChickletComponent = _ref2.CustomChickletComponent;
  return /*#__PURE__*/_react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    var chickletProps = {
      inputTheme: inputTheme,
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      displayOption: displayOption,
      item: item,
      remove: function remove(e) {
        return removeItem(item, e);
      }
    };
    return CustomChickletComponent ? /*#__PURE__*/_react["default"].createElement(CustomChickletComponent, chickletProps) : /*#__PURE__*/_react["default"].createElement(Chicklet, chickletProps);
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: placeholder || 'placeholder.enterValue'
  })));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJjaGlja2xldEJnZExUIiwiY2hpY2tsZXRCZ2QiLCJ0ZXh0Q29sb3JMVCIsInRleHRDb2xvciIsInRleHRDb2xvckhsTFQiLCJ0ZXh0Q29sb3JIbCIsIkNoaWNrbGV0VGFnIiwic3BhbiIsIkNoaWNrbGV0IiwibmFtZSIsInJlbW92ZSIsIkNoaWNrbGV0ZWRJbnB1dENvbnRhaW5lciIsInNlY29uZGFyeUNoaWNrbGV0ZWRJbnB1dCIsImNoaWNrbGV0ZWRJbnB1dExUIiwiY2hpY2tsZXRlZElucHV0IiwiaGFzUGxhY2Vob2xkZXIiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0Q29sb3IiLCJDaGlja2xldGVkSW5wdXQiLCJjbGFzc05hbWUiLCJkIiwiQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImNoaWNrbGV0UHJvcHMiLCJrZXkiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQjtBQUNBQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxJQUFWLENBQWVDLFVBRlI7QUFHaEJDLEVBQUFBLFVBQVUsRUFBRUgsc0JBQVVDLElBQVYsQ0FB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QkssYUFBN0IsQ0FENEIsZ0JBRzVCLGdDQUFDLFFBQUQsRUFBY0EsYUFBZCxDQUhGO0FBS0QsR0FmRCxDQURELGdCQWtCQztBQUFNLElBQUEsU0FBUyxZQUFLUCxTQUFMO0FBQWYsa0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUUzQixXQUFXLElBQUk7QUFBckMsSUFERixDQTNCSixDQWJzQjtBQUFBLENBQXhCOztBQStDQTBCLGVBQWUsQ0FBQ3hDLFNBQWhCLEdBQTRCQSxTQUE1QjtlQUVld0MsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vaWNvbnMvZGVsZXRlJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbW92ZUl0ZW06IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLy8gb3B0aW9uYWwgcHJvcGVydGllc1xuICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNwbGF5T3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbnB1dFRoZW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgY29uc3QgQ2hpY2tsZXRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0JyA/IHByb3BzLnRoZW1lLmNoaWNrbGV0QmdkTFQgOiBwcm9wcy50aGVtZS5jaGlja2xldEJnZH07XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnID8gcHJvcHMudGhlbWUudGV4dENvbG9yTFQgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAxMHB4IDRweCAzcHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGxMVCA6IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENoaWNrbGV0VGFnID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIDpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbmA7XG5cbmNvbnN0IENoaWNrbGV0ID0gKHtkaXNhYmxlZCwgbmFtZSwgcmVtb3ZlLCBpbnB1dFRoZW1lfSkgPT4gKFxuICA8Q2hpY2tsZXRCdXR0b24gaW5wdXRUaGVtZT17aW5wdXRUaGVtZX0+XG4gICAgPENoaWNrbGV0VGFnPntuYW1lfTwvQ2hpY2tsZXRUYWc+XG4gICAgPERlbGV0ZSBvbkNsaWNrPXtkaXNhYmxlZCA/IG51bGwgOiByZW1vdmV9IC8+XG4gIDwvQ2hpY2tsZXRCdXR0b24+XG4pO1xuXG5jb25zdCBDaGlja2xldGVkSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+XG4gICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeSdcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q2hpY2tsZXRlZElucHV0XG4gICAgICA6IHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgID8gcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0TFRcbiAgICAgIDogcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0fVxuICAgICAgXG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXIgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgQ2hpY2tsZXRlZElucHV0ID0gKHtcbiAgZm9jdXMsXG4gIGRpc2FibGVkLFxuICBlcnJvcixcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICBzZWxlY3RlZEl0ZW1zID0gW10sXG4gIHBsYWNlaG9sZGVyID0gJycsXG4gIHJlbW92ZUl0ZW0sXG4gIGRpc3BsYXlPcHRpb24gPSBkID0+IGQsXG4gIGlucHV0VGhlbWUsXG4gIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50XG59KSA9PiAoXG4gIDxDaGlja2xldGVkSW5wdXRDb250YWluZXJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dGB9XG4gICAgZm9jdXM9e2ZvY3VzfVxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICBlcnJvcj17ZXJyb3J9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgIGhhc1BsYWNlaG9sZGVyPXshc2VsZWN0ZWRJdGVtcyB8fCAhc2VsZWN0ZWRJdGVtcy5sZW5ndGh9XG4gID5cbiAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwID8gKFxuICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgY2hpY2tsZXRQcm9wcyA9IHtcbiAgICAgICAgICBpbnB1dFRoZW1lLFxuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGtleTogYCR7ZGlzcGxheU9wdGlvbihpdGVtKX1fJHtpfWAsXG4gICAgICAgICAgbmFtZTogZGlzcGxheU9wdGlvbihpdGVtKSxcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uLFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgcmVtb3ZlOiBlID0+IHJlbW92ZUl0ZW0oaXRlbSwgZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50ID8gKFxuICAgICAgICAgIDxDdXN0b21DaGlja2xldENvbXBvbmVudCB7Li4uY2hpY2tsZXRQcm9wc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2hpY2tsZXQgey4uLmNoaWNrbGV0UHJvcHN9IC8+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dF9fcGxhY2Vob2xkZXJgfT5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3BsYWNlaG9sZGVyIHx8ICdwbGFjZWhvbGRlci5lbnRlclZhbHVlJ30gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApfVxuICA8L0NoaWNrbGV0ZWRJbnB1dENvbnRhaW5lcj5cbik7XG5cbkNoaWNrbGV0ZWRJbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IENoaWNrbGV0ZWRJbnB1dDtcbiJdfQ==