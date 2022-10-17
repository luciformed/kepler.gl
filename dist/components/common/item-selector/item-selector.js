"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ItemSelectorListen = exports.StyledDropdownSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _utils = require("../../../utils/utils");

var _reactIntl = require("react-intl");

var _localization = require("../../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledDropdownSelect = _styledComponents["default"].div.attrs({
  className: 'item-selector__dropdown'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  height: ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"])), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.inputTheme === 'light' ? props.theme.inputLT : props.theme.input;
}, function (props) {
  return props.size === 'small' ? props.theme.inputBoxHeightSmall : props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

exports.StyledDropdownSelect = StyledDropdownSelect;

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  .list__item {\n    ", ";\n  }\n\n  .list__item__anchor {\n    ", ";\n  }\n"])), function (props) {
  return props.hasPlaceholder && props.inputTheme === 'light' ? props.theme.selectColorPlaceHolderLT : props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.inputTheme === 'light' ? props.theme.selectColorLT : props.theme.selectColor;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListItemLT : props.theme.dropdownListItem;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListAnchorLT : props.theme.dropdownListAnchor;
});

var DropdownSelectActionRight = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 6px;\n  display: flex;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

var DropdownWrapper = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"])), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
}, function (props) {
  return props.placement === 'top' ? "".concat(props.theme.dropdownWapperMargin, "px") : 'auto';
});

var ItemSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  var _super = _createSuper(ItemSelector);

  function ItemSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function (e) {
      e.stopPropagation();

      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown(intl) {
      return /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: this.props.typeaheadPlaceholder || intl ? intl.formatMessage({
          id: 'placeholder.search'
        }) : 'Search',
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        light: this.props.inputTheme === 'light'
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        error: this.props.isError,
        inputTheme: this.props.inputTheme,
        size: this.props.size
      };
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "item-selector"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem,
        CustomChickletComponent: this.props.CustomChickletComponent,
        inputTheme: this.props.inputTheme
      })) : /*#__PURE__*/_react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, /*#__PURE__*/_react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        inputTheme: this.props.inputTheme,
        className: "item-selector__dropdown__value"
      }, hasValue ? /*#__PURE__*/_react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0],
        light: this.props.inputTheme === 'light'
      }) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: this.props.placeholder || 'placeholder.selectValue'
      })), this.props.erasable && hasValue ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : this.props.showArrow ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
        height: "14px",
        onClick: this._showTypeahead
      })) : null), this.state.showTypeahead && this._renderDropdown(intl)));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  showArrow: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  typeaheadPlaceholder: _propTypes["default"].string,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func,
  CustomChickletComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  showArrow: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'placeholder.enterValue',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});
var ItemSelectorListen = (0, _reactOnclickoutside["default"])(ItemSelector);
exports.ItemSelectorListen = ItemSelectorListen;

var _default = (0, _reactIntl.injectIntl)((0, _reactOnclickoutside["default"])(ItemSelector));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwiaW5wdXRUaGVtZSIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJpbnB1dExUIiwiaW5wdXQiLCJzaXplIiwiaW5wdXRCb3hIZWlnaHRTbWFsbCIsImlucHV0Qm94SGVpZ2h0IiwiZHJvcGRvd25MaXN0QW5jaG9yIiwiRHJvcGRvd25TZWxlY3RWYWx1ZSIsInNwYW4iLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXJMVCIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvckxUIiwic2VsZWN0Q29sb3IiLCJkcm9wZG93bkxpc3RJdGVtTFQiLCJkcm9wZG93bkxpc3RJdGVtIiwiZHJvcGRvd25MaXN0QW5jaG9yTFQiLCJEcm9wZG93blNlbGVjdEFjdGlvblJpZ2h0Iiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiRHJvcGRvd25XcmFwcGVyIiwiZHJvcGRvd25XcmFwcGVyWiIsInBsYWNlbWVudCIsImRyb3Bkb3duV2FwcGVyTWFyZ2luIiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiaXRlbSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsImZpbmRJbmRleCIsInQiLCJpdGVtcyIsInNsaWNlIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJjbG9zZU9uU2VsZWN0Iiwic2V0U3RhdGUiLCJfb25CbHVyIiwiZ2V0VmFsdWUiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiLCJnZXRPcHRpb25WYWx1ZSIsImRpc3BsYXlPcHRpb24iLCJwcmV2aW91c1NlbGVjdGVkIiwibXVsdGlTZWxlY3QiLCJjb25jYXQiLCJkaXNhYmxlZCIsImludGwiLCJyZXN1bHRzIiwibGlzdEl0ZW0iLCJsaXN0QW5jaG9yIiwib3B0aW9ucyIsImZpbHRlck9wdGlvbiIsImZpeGVkT3B0aW9ucyIsInR5cGVhaGVhZFBsYWNlaG9sZGVyIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWxlY3RlZCIsImhhc1ZhbHVlIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsInN0YXRlIiwib25DbGljayIsIl9zaG93VHlwZWFoZWFkIiwiZXJyb3IiLCJpc0Vycm9yIiwicG9zaXRpb24iLCJwbGFjZWhvbGRlciIsIl9yZW1vdmVJdGVtIiwiQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQiLCJlcmFzYWJsZSIsIl9vbkVyYXNlIiwic2hvd0Fycm93IiwiX3JlbmRlckRyb3Bkb3duIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJib29sIiwib2JqZWN0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZHJvcGRvd25IZWFkZXIiLCJEcm9wZG93bkxpc3QiLCJMaXN0SXRlbSIsIkl0ZW1TZWxlY3Rvckxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDbkRDLEVB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bG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC51bmlxYnknO1xuaW1wb3J0IGxpc3RlbnNUb0NsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4vYWNjZXNzb3InO1xuaW1wb3J0IENoaWNrbGV0ZWRJbnB1dCBmcm9tICcuL2NoaWNrbGV0ZWQtaW5wdXQnO1xuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuL3R5cGVhaGVhZCc7XG5pbXBvcnQge0RlbGV0ZSwgQXJyb3dEb3dufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRHJvcGRvd25MaXN0LCB7TGlzdEl0ZW19IGZyb20gJy4vZHJvcGRvd24tbGlzdCc7XG5cbmltcG9ydCB7dG9BcnJheX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZERyb3Bkb3duU2VsZWN0ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2l0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duJ1xufSlgXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5J1xuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dFxuICAgICAgOiBwcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0TFRcbiAgICAgIDogcHJvcHMudGhlbWUuaW5wdXR9O1xuXG4gIGhlaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLnNpemUgPT09ICdzbWFsbCcgPyBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodFNtYWxsIDogcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHR9O1xuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RWYWx1ZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyICYmIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlckxUXG4gICAgICA6IHByb3BzLmhhc1BsYWNlaG9sZGVyXG4gICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yUGxhY2VIb2xkZXJcbiAgICAgIDogcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J1xuICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvckxUXG4gICAgICA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgLmxpc3RfX2l0ZW0ge1xuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCcgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtTFQgOiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtfTtcbiAgfVxuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgICAgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3JMVFxuICAgICAgICA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEFuY2hvcn07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWn07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5wbGFjZW1lbnQgPT09ICd0b3AnID8gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHQgOiAnYXV0bycpfTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PlxuICAgIHByb3BzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBgJHtwcm9wcy50aGVtZS5kcm9wZG93bldhcHBlck1hcmdpbn1weGAgOiAnYXV0byd9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+XG4gICAgcHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/IGAke3Byb3BzLnRoZW1lLmRyb3Bkb3duV2FwcGVyTWFyZ2lufXB4YCA6ICdhdXRvJ307XG5gO1xuXG5jbGFzcyBJdGVtU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8vIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcblxuICAgIC8vIG9wdGlvbmFsIHByb3BlcnRpZXNcbiAgICBmaXhlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGVyYXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZ2V0T3B0aW9uVmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZmlsdGVyT3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIHBsYWNlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0eXBlYWhlYWRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBEcm9wZG93bkhlYWRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZXJhc2FibGU6IGZhbHNlLFxuICAgIHNob3dBcnJvdzogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICBkaXNwbGF5T3B0aW9uOiBudWxsLFxuICAgIGdldE9wdGlvblZhbHVlOiBudWxsLFxuICAgIGZpbHRlck9wdGlvbjogbnVsbCxcbiAgICBmaXhlZE9wdGlvbnM6IG51bGwsXG4gICAgaW5wdXRUaGVtZTogJ3ByaW1hcnknLFxuICAgIG11bHRpU2VsZWN0OiB0cnVlLFxuICAgIHBsYWNlaG9sZGVyOiAncGxhY2Vob2xkZXIuZW50ZXJWYWx1ZScsXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIGRyb3Bkb3duSGVhZGVyOiBudWxsLFxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBudWxsLFxuICAgIERyb3BEb3duUmVuZGVyQ29tcG9uZW50OiBEcm9wZG93bkxpc3QsXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogTGlzdEl0ZW1cbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93VHlwZWFoZWFkOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICB0aGlzLl9oaWRlVHlwZWFoZWFkKCk7XG4gIH07XG5cbiAgX2hpZGVUeXBlYWhlYWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1R5cGVhaGVhZDogZmFsc2V9KTtcbiAgICB0aGlzLl9vbkJsdXIoKTtcbiAgfVxuXG4gIF9vbkJsdXIgPSAoKSA9PiB7XG4gICAgLy8gbm90ZTogY2hpY2tsZXRlZCBpbnB1dCBpcyBub3QgYSByZWFsIGZvcm0gZWxlbWVudCBzbyB3ZSBjYWxsIG9uQmx1cigpXG4gICAgLy8gd2hlbiB3ZSBmZWVsIHRoZSBldmVudHMgYXJlIGFwcHJvcHJpYXRlXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgIH1cbiAgfTtcblxuICBfcmVtb3ZlSXRlbSA9IChpdGVtLCBlKSA9PiB7XG4gICAgLy8gb25seSB1c2VkIHdoZW4gbXVsdGlTZWxlY3QgPSB0cnVlXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbmRleCA9IHNlbGVjdGVkSXRlbXMuZmluZEluZGV4KHQgPT4gdCA9PT0gaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAuLi5zZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoaW5kZXggKyAxLCBzZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICBdO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgICAgdGhpcy5fb25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9zZWxlY3RJdGVtID0gaXRlbSA9PiB7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKFxuICAgICAgdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZSB8fCB0aGlzLnByb3BzLmRpc3BsYXlPcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXFCeShwcmV2aW91c1NlbGVjdGVkLmNvbmNhdCh0b0FycmF5KGl0ZW0pKSwgZ2V0VmFsdWUpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX29uRXJhc2UgPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gIH07XG5cbiAgX3Nob3dUeXBlYWhlYWQgPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dUeXBlYWhlYWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVyRHJvcGRvd24oaW50bCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25XcmFwcGVyIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9PlxuICAgICAgICA8VHlwZWFoZWFkXG4gICAgICAgICAgY3VzdG9tQ2xhc3Nlcz17e1xuICAgICAgICAgICAgcmVzdWx0czogJ2xpc3Qtc2VsZWN0b3InLFxuICAgICAgICAgICAgaW5wdXQ6ICd0eXBlYWhlYWRfX2lucHV0JyxcbiAgICAgICAgICAgIGxpc3RJdGVtOiAnbGlzdF9faXRlbScsXG4gICAgICAgICAgICBsaXN0QW5jaG9yOiAnbGlzdF9faXRlbV9fYW5jaG9yJ1xuICAgICAgICAgIH19XG4gICAgICAgICAgb3B0aW9ucz17dGhpcy5wcm9wcy5vcHRpb25zfVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17dGhpcy5wcm9wcy5maWx0ZXJPcHRpb259XG4gICAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLmZpeGVkT3B0aW9uc31cbiAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZFBsYWNlaG9sZGVyIHx8IGludGxcbiAgICAgICAgICAgICAgPyBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAncGxhY2Vob2xkZXIuc2VhcmNoJ30pXG4gICAgICAgICAgICAgIDogJ1NlYXJjaCdcbiAgICAgICAgICB9XG4gICAgICAgICAgb25PcHRpb25TZWxlY3RlZD17dGhpcy5fc2VsZWN0SXRlbX1cbiAgICAgICAgICBjdXN0b21MaXN0Q29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duUmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcGRvd25IZWFkZXJDb21wb25lbnR9XG4gICAgICAgICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudH1cbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbil9XG4gICAgICAgICAgc2VhcmNoYWJsZT17dGhpcy5wcm9wcy5zZWFyY2hhYmxlfVxuICAgICAgICAgIHNob3dPcHRpb25zV2hlbkVtcHR5XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxuICAgICAgICAgIGxpZ2h0PXt0aGlzLnByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCd9XG4gICAgICAgIC8+XG4gICAgICA8L0Ryb3Bkb3duV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IGRpc3BsYXlPcHRpb24gPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKHRoaXMucHJvcHMuZGlzcGxheU9wdGlvbik7XG5cbiAgICBjb25zdCBkcm9wZG93blNlbGVjdFByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKHtcbiAgICAgICAgYWN0aXZlOiB0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWRcbiAgICAgIH0pLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiB0aGlzLl9zaG93VHlwZWFoZWFkLFxuICAgICAgZXJyb3I6IHRoaXMucHJvcHMuaXNFcnJvcixcbiAgICAgIGlucHV0VGhlbWU6IHRoaXMucHJvcHMuaW5wdXRUaGVtZSxcbiAgICAgIHNpemU6IHRoaXMucHJvcHMuc2l6ZVxuICAgIH07XG4gICAgY29uc3QgaW50bCA9IHRoaXMucHJvcHMuaW50bDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAgey8qIHRoaXMgcGFydCBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGxhYmVsICovfVxuICAgICAgICAgIHt0aGlzLnByb3BzLm11bHRpU2VsZWN0ID8gKFxuICAgICAgICAgICAgPENoaWNrbGV0ZWRJbnB1dFxuICAgICAgICAgICAgICB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc31cbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17dGhpcy5fcmVtb3ZlSXRlbX1cbiAgICAgICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e3RoaXMucHJvcHMuQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnR9XG4gICAgICAgICAgICAgIGlucHV0VGhlbWU9e3RoaXMucHJvcHMuaW5wdXRUaGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHlsZWREcm9wZG93blNlbGVjdCB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc30+XG4gICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdFZhbHVlXG4gICAgICAgICAgICAgICAgaGFzUGxhY2Vob2xkZXI9eyFoYXNWYWx1ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPXt0aGlzLnByb3BzLmlucHV0VGhlbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd25fX3ZhbHVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkWzBdfVxuICAgICAgICAgICAgICAgICAgICBsaWdodD17dGhpcy5wcm9wcy5pbnB1dFRoZW1lID09PSAnbGlnaHQnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3RoaXMucHJvcHMucGxhY2Vob2xkZXIgfHwgJ3BsYWNlaG9sZGVyLnNlbGVjdFZhbHVlJ30gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0VmFsdWU+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVyYXNhYmxlICYmIGhhc1ZhbHVlID8gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEFjdGlvblJpZ2h0PlxuICAgICAgICAgICAgICAgICAgPERlbGV0ZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17dGhpcy5fb25FcmFzZX0gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQ+XG4gICAgICAgICAgICAgICkgOiB0aGlzLnByb3BzLnNob3dBcnJvdyA/IChcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25TZWxlY3RBY3Rpb25SaWdodD5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd0Rvd24gaGVpZ2h0PVwiMTRweFwiIG9uQ2xpY2s9e3RoaXMuX3Nob3dUeXBlYWhlYWR9IC8+XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blNlbGVjdEFjdGlvblJpZ2h0PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvU3R5bGVkRHJvcGRvd25TZWxlY3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7LyogdGhpcyBwYXJ0IGlzIHVzZWQgdG8gYnVpbHQgdGhlIGxpc3QgKi99XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1R5cGVhaGVhZCAmJiB0aGlzLl9yZW5kZXJEcm9wZG93bihpbnRsKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBJdGVtU2VsZWN0b3JMaXN0ZW4gPSBsaXN0ZW5zVG9DbGlja091dHNpZGUoSXRlbVNlbGVjdG9yKTtcbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwobGlzdGVuc1RvQ2xpY2tPdXRzaWRlKEl0ZW1TZWxlY3RvcikpO1xuIl19