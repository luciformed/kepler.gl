"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldListItemFactoryFactory = FieldListItemFactoryFactory;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _dropdownList = require("./item-selector/dropdown-list");

var _utils = require("../../utils/utils");

var _dataUtils = require("../../utils/data-utils");

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 ", "px 0 0;\n"])), function (props) {
  return props.theme.fieldTokenRightMargin;
});

var StyledFieldListItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  line-height: 0;\n"])));

FieldListItemFactoryFactory.deps = [_fieldToken["default"]]; // custom list Item

function FieldListItemFactoryFactory(FieldToken) {
  var FieldListItemFactory = function FieldListItemFactory() {
    var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var FieldListItem = function FieldListItem(_ref) {
      var value = _ref.value,
          _ref$displayOption = _ref.displayOption,
          displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
      return /*#__PURE__*/_react["default"].createElement(StyledFieldListItem, {
        className: "field-selector_list-item"
      }, showToken ? /*#__PURE__*/_react["default"].createElement(StyledToken, null, /*#__PURE__*/_react["default"].createElement(FieldToken, {
        type: value.type
      })) : null, /*#__PURE__*/_react["default"].createElement("span", {
        className: _dropdownList.classList.listItemAnchor
      }, displayOption(value)));
    };

    return FieldListItem;
  };

  return FieldListItemFactory;
}

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].arrayOf(_propTypes["default"].shape({
  name: _propTypes["default"].string,
  format: _propTypes["default"].string
})), _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  fieldIdx: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

function FieldSelectorFactory(FieldListItemFactory) {
  var FieldSelector = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FieldSelector, _Component);

    var _super = _createSuper(FieldSelector);

    function FieldSelector() {
      var _this;

      (0, _classCallCheck2["default"])(this, FieldSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredFieldsSelector", function (props) {
        return props.fields.filter(function (field) {
          return !(0, _utils.toArray)(props.value).find(function (d) {
            return d.name ? d.name === field.name : d === field.name;
          });
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
        return props.value;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
        return props.filterFieldTypes;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
        return props.showToken;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
        return (0, _utils.toArray)(value).map(function (d) {
          return fields.find(function (f) {
            return (0, _dataUtils.notNullorUndefined)(d) && d.name ? d.name === defaultDisplayOption(f) : d === defaultDisplayOption(f);
          });
        }).filter(function (d) {
          return d;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.filteredFieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
        if (!filterFieldTypes) {
          return fields;
        }

        var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
        return fields.filter(function (f) {
          return filters.includes(f.type);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
      return _this;
    }

    (0, _createClass2["default"])(FieldSelector, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "field-selector"
        }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
          getOptionValue: function getOptionValue(d) {
            return d;
          },
          closeOnSelect: this.props.closeOnSelect,
          displayOption: defaultDisplayOption,
          filterOption: "name",
          fixedOptions: this.props.suggested,
          inputTheme: this.props.inputTheme,
          size: this.props.size,
          isError: this.props.error,
          selectedItems: this.selectedItemsSelector(this.props),
          erasable: this.props.erasable,
          options: this.fieldOptionsSelector(this.props),
          multiSelect: this.props.multiSelect,
          placeholder: this.props.placeholder,
          placement: this.props.placement,
          onChange: this.props.onSelect,
          DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
          DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null,
          CustomChickletComponent: this.props.CustomChickletComponent
        }));
      }
    }]);
    return FieldSelector;
  }(_react.Component);

  (0, _defineProperty2["default"])(FieldSelector, "propTypes", {
    fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
    onSelect: _propTypes["default"].func.isRequired,
    placement: _propTypes["default"].string,
    value: FieldType,
    filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
    inputTheme: _propTypes["default"].string,
    placeholder: _propTypes["default"].string,
    erasable: _propTypes["default"].bool,
    error: _propTypes["default"].bool,
    multiSelect: _propTypes["default"].bool,
    closeOnSelect: _propTypes["default"].bool,
    showToken: _propTypes["default"].bool,
    suggested: _propTypes["default"].arrayOf(_propTypes["default"].any),
    CustomChickletComponent: _propTypes["default"].func
  });
  (0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
    erasable: true,
    error: false,
    fields: [],
    onSelect: function onSelect() {},
    placement: 'bottom',
    value: null,
    multiSelect: false,
    closeOnSelect: true,
    showToken: true,
    placeholder: 'placeholder.selectField'
  });
  return FieldSelector;
}

FieldSelectorFactory.deps = [FieldListItemFactoryFactory];
var _default = FieldSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiU3R5bGVkVG9rZW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZmllbGRUb2tlblJpZ2h0TWFyZ2luIiwiU3R5bGVkRmllbGRMaXN0SXRlbSIsIkZpZWxkTGlzdEl0ZW1GYWN0b3J5RmFjdG9yeSIsImRlcHMiLCJGaWVsZFRva2VuRmFjdG9yeSIsIkZpZWxkVG9rZW4iLCJGaWVsZExpc3RJdGVtRmFjdG9yeSIsInNob3dUb2tlbiIsIkZpZWxkTGlzdEl0ZW0iLCJ2YWx1ZSIsImRpc3BsYXlPcHRpb24iLCJ0eXBlIiwiY2xhc3NMaXN0IiwibGlzdEl0ZW1BbmNob3IiLCJTdWdnZXN0ZWRGaWVsZEhlYWRlciIsIkZpZWxkVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJzaGFwZSIsImZvcm1hdCIsImlkIiwiZmllbGRJZHgiLCJudW1iZXIiLCJGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkU2VsZWN0b3IiLCJmaWVsZHMiLCJmaWx0ZXIiLCJmaWVsZCIsImZpbmQiLCJmaWx0ZXJGaWVsZFR5cGVzIiwiZmllbGRzU2VsZWN0b3IiLCJ2YWx1ZVNlbGVjdG9yIiwibWFwIiwiZiIsImZpbHRlcmVkRmllbGRzU2VsZWN0b3IiLCJmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IiLCJmaWx0ZXJzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJzaG93VG9rZW5TZWxlY3RvciIsImNsb3NlT25TZWxlY3QiLCJzdWdnZXN0ZWQiLCJpbnB1dFRoZW1lIiwic2l6ZSIsImVycm9yIiwic2VsZWN0ZWRJdGVtc1NlbGVjdG9yIiwiZXJhc2FibGUiLCJmaWVsZE9wdGlvbnNTZWxlY3RvciIsIm11bHRpU2VsZWN0IiwicGxhY2Vob2xkZXIiLCJwbGFjZW1lbnQiLCJvblNlbGVjdCIsImZpZWxkTGlzdEl0ZW1TZWxlY3RvciIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiQ29tcG9uZW50IiwiYXJyYXkiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsSUFBTjtBQUFBLENBQTlCOztBQUVBLElBQU1DLFdBQVcsR0FBR0MsNkJBQU9DLEdBQVYsNElBRUgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxxQkFBaEI7QUFBQSxDQUZGLENBQWpCOztBQUlBLElBQU1DLG1CQUFtQixHQUFHTCw2QkFBT0MsR0FBViw2R0FBekI7O0FBSUFLLDJCQUEyQixDQUFDQyxJQUE1QixHQUFtQyxDQUFDQyxzQkFBRCxDQUFuQyxDLENBQ0E7O0FBQ08sU0FBU0YsMkJBQVQsQ0FBcUNHLFVBQXJDLEVBQWlEO0FBQ3RELE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBc0I7QUFBQSxRQUFyQkMsU0FBcUIsdUVBQVQsSUFBUzs7QUFDakQsUUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFVBQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLG9DQUFTQyxhQUFUO0FBQUEsVUFBU0EsYUFBVCxtQ0FBeUJsQixvQkFBekI7QUFBQSwwQkFDcEIsZ0NBQUMsbUJBQUQ7QUFBcUIsUUFBQSxTQUFTLEVBQUM7QUFBL0IsU0FDR2UsU0FBUyxnQkFDUixnQ0FBQyxXQUFELHFCQUNFLGdDQUFDLFVBQUQ7QUFBWSxRQUFBLElBQUksRUFBRUUsS0FBSyxDQUFDRTtBQUF4QixRQURGLENBRFEsR0FJTixJQUxO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RUFBRXBDLHNCQUFVRSxNQVBOO0FBUWpCK0IsSUFBQUEsUUFBUSxFQUFFakMsc0JBQVU2QyxJQVJIO0FBU2pCZCxJQUFBQSxLQUFLLEVBQUUvQixzQkFBVTZDLElBVEE7QUFVakJWLElBQUFBLFdBQVcsRUFBRW5DLHNCQUFVNkMsSUFWTjtBQVdqQmxCLElBQUFBLGFBQWEsRUFBRTNCLHNCQUFVNkMsSUFYUjtBQVlqQnRELElBQUFBLFNBQVMsRUFBRVMsc0JBQVU2QyxJQVpKO0FBYWpCakIsSUFBQUEsU0FBUyxFQUFFNUIsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVOEMsR0FBNUIsQ0FiTTtBQWNqQk4sSUFBQUEsdUJBQXVCLEVBQUV4QyxzQkFBVTJDO0FBZGxCLEdBRjZCO0FBQUEsbUNBQzVDakMsYUFENEMsa0JBbUIxQjtBQUNwQnVCLElBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCRixJQUFBQSxLQUFLLEVBQUUsS0FGYTtBQUdwQnBCLElBQUFBLE1BQU0sRUFBRSxFQUhZO0FBSXBCMkIsSUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FKRTtBQUtwQkQsSUFBQUEsU0FBUyxFQUFFLFFBTFM7QUFNcEI1QyxJQUFBQSxLQUFLLEVBQUUsSUFOYTtBQU9wQjBDLElBQUFBLFdBQVcsRUFBRSxLQVBPO0FBUXBCUixJQUFBQSxhQUFhLEVBQUUsSUFSSztBQVNwQnBDLElBQUFBLFNBQVMsRUFBRSxJQVRTO0FBVXBCNkMsSUFBQUEsV0FBVyxFQUFFO0FBVk8sR0FuQjBCO0FBa0dsRCxTQUFPMUIsYUFBUDtBQUNEOztBQUVERCxvQkFBb0IsQ0FBQ3RCLElBQXJCLEdBQTRCLENBQUNELDJCQUFELENBQTVCO2VBQ2V1QixvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJy4vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7Y2xhc3NMaXN0fSBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQge3RvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCBGaWVsZFRva2VuRmFjdG9yeSBmcm9tICcuLi9jb21tb24vZmllbGQtdG9rZW4nO1xuXG5jb25zdCBkZWZhdWx0RGlzcGxheU9wdGlvbiA9IGQgPT4gZC5uYW1lO1xuXG5jb25zdCBTdHlsZWRUb2tlbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmllbGRUb2tlblJpZ2h0TWFyZ2lufXB4IDAgMDtcbmA7XG5jb25zdCBTdHlsZWRGaWVsZExpc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG5GaWVsZExpc3RJdGVtRmFjdG9yeUZhY3RvcnkuZGVwcyA9IFtGaWVsZFRva2VuRmFjdG9yeV07XG4vLyBjdXN0b20gbGlzdCBJdGVtXG5leHBvcnQgZnVuY3Rpb24gRmllbGRMaXN0SXRlbUZhY3RvcnlGYWN0b3J5KEZpZWxkVG9rZW4pIHtcbiAgY29uc3QgRmllbGRMaXN0SXRlbUZhY3RvcnkgPSAoc2hvd1Rva2VuID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IEZpZWxkTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXlPcHRpb259KSA9PiAoXG4gICAgICA8U3R5bGVkRmllbGRMaXN0SXRlbSBjbGFzc05hbWU9XCJmaWVsZC1zZWxlY3Rvcl9saXN0LWl0ZW1cIj5cbiAgICAgICAge3Nob3dUb2tlbiA/IChcbiAgICAgICAgICA8U3R5bGVkVG9rZW4+XG4gICAgICAgICAgICA8RmllbGRUb2tlbiB0eXBlPXt2YWx1ZS50eXBlfSAvPlxuICAgICAgICAgIDwvU3R5bGVkVG9rZW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SXRlbUFuY2hvcn0+e2Rpc3BsYXlPcHRpb24odmFsdWUpfTwvc3Bhbj5cbiAgICAgIDwvU3R5bGVkRmllbGRMaXN0SXRlbT5cbiAgICApO1xuICAgIHJldHVybiBGaWVsZExpc3RJdGVtO1xuICB9O1xuICByZXR1cm4gRmllbGRMaXN0SXRlbUZhY3Rvcnk7XG59XG5cbmNvbnN0IFN1Z2dlc3RlZEZpZWxkSGVhZGVyID0gKCkgPT4gPGRpdj5TdWdnZXN0ZWQgRmllbGQ8L2Rpdj47XG5cbmNvbnN0IEZpZWxkVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuc3RyaW5nLFxuICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICApLFxuICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpZWxkSWR4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHR5cGU6IFByb3BUeXBlcy5udW1iZXJcbiAgfSlcbl0pO1xuXG5mdW5jdGlvbiBGaWVsZFNlbGVjdG9yRmFjdG9yeShGaWVsZExpc3RJdGVtRmFjdG9yeSkge1xuICBjbGFzcyBGaWVsZFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZmllbGRzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5hcnJheU9mKEZpZWxkVHlwZSldKSxcbiAgICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IEZpZWxkVHlwZSxcbiAgICAgIGZpbHRlckZpZWxkVHlwZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW0ZpZWxkVHlwZSwgUHJvcFR5cGVzLmFycmF5T2YoRmllbGRUeXBlKV0pLFxuICAgICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZXJhc2FibGU6IFByb3BUeXBlcy5ib29sLFxuICAgICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgICAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBzaG93VG9rZW46IFByb3BUeXBlcy5ib29sLFxuICAgICAgc3VnZ2VzdGVkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgZXJhc2FibGU6IHRydWUsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtdLFxuICAgICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgICAgIHNob3dUb2tlbjogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiAncGxhY2Vob2xkZXIuc2VsZWN0RmllbGQnXG4gICAgfTtcblxuICAgIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xuICAgIGZpbHRlcmVkRmllbGRzU2VsZWN0b3IgPSBwcm9wcyA9PlxuICAgICAgcHJvcHMuZmllbGRzLmZpbHRlcihcbiAgICAgICAgZmllbGQgPT5cbiAgICAgICAgICAhdG9BcnJheShwcm9wcy52YWx1ZSkuZmluZChkID0+IChkLm5hbWUgPyBkLm5hbWUgPT09IGZpZWxkLm5hbWUgOiBkID09PSBmaWVsZC5uYW1lKSlcbiAgICAgICk7XG4gICAgdmFsdWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlO1xuICAgIGZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlckZpZWxkVHlwZXM7XG4gICAgc2hvd1Rva2VuU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zaG93VG9rZW47XG5cbiAgICBzZWxlY3RlZEl0ZW1zU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMuZmllbGRzU2VsZWN0b3IsXG4gICAgICB0aGlzLnZhbHVlU2VsZWN0b3IsXG4gICAgICAoZmllbGRzLCB2YWx1ZSkgPT5cbiAgICAgICAgdG9BcnJheSh2YWx1ZSlcbiAgICAgICAgICAubWFwKGQgPT5cbiAgICAgICAgICAgIGZpZWxkcy5maW5kKGYgPT5cbiAgICAgICAgICAgICAgbm90TnVsbG9yVW5kZWZpbmVkKGQpICYmIGQubmFtZVxuICAgICAgICAgICAgICAgID8gZC5uYW1lID09PSBkZWZhdWx0RGlzcGxheU9wdGlvbihmKVxuICAgICAgICAgICAgICAgIDogZCA9PT0gZGVmYXVsdERpc3BsYXlPcHRpb24oZilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICAgLmZpbHRlcihkID0+IGQpXG4gICAgKTtcblxuICAgIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpbHRlcmVkRmllbGRzU2VsZWN0b3IsXG4gICAgICB0aGlzLmZpbHRlckZpZWxkVHlwZXNTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIGZpbHRlckZpZWxkVHlwZXMpID0+IHtcbiAgICAgICAgaWYgKCFmaWx0ZXJGaWVsZFR5cGVzKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gQXJyYXkuaXNBcnJheShmaWx0ZXJGaWVsZFR5cGVzKSA/IGZpbHRlckZpZWxkVHlwZXMgOiBbZmlsdGVyRmllbGRUeXBlc107XG4gICAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGYgPT4gZmlsdGVycy5pbmNsdWRlcyhmLnR5cGUpKTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZmllbGRMaXN0SXRlbVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5zaG93VG9rZW5TZWxlY3RvciwgRmllbGRMaXN0SXRlbUZhY3RvcnkpO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1zZWxlY3RvclwiPlxuICAgICAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtkID0+IGR9XG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXt0aGlzLnByb3BzLmNsb3NlT25TZWxlY3R9XG4gICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkZWZhdWx0RGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj1cIm5hbWVcIlxuICAgICAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLnN1Z2dlc3RlZH1cbiAgICAgICAgICAgIGlucHV0VGhlbWU9e3RoaXMucHJvcHMuaW5wdXRUaGVtZX1cbiAgICAgICAgICAgIHNpemU9e3RoaXMucHJvcHMuc2l6ZX1cbiAgICAgICAgICAgIGlzRXJyb3I9e3RoaXMucHJvcHMuZXJyb3J9XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0aGlzLnNlbGVjdGVkSXRlbXNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIGVyYXNhYmxlPXt0aGlzLnByb3BzLmVyYXNhYmxlfVxuICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5maWVsZE9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIG11bHRpU2VsZWN0PXt0aGlzLnByb3BzLm11bHRpU2VsZWN0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3R9XG4gICAgICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXt0aGlzLmZpZWxkTGlzdEl0ZW1TZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3RlZCA/IFN1Z2dlc3RlZEZpZWxkSGVhZGVyIDogbnVsbH1cbiAgICAgICAgICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50PXt0aGlzLnByb3BzLkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEZpZWxkU2VsZWN0b3I7XG59XG5cbkZpZWxkU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbRmllbGRMaXN0SXRlbUZhY3RvcnlGYWN0b3J5XTtcbmV4cG9ydCBkZWZhdWx0IEZpZWxkU2VsZWN0b3JGYWN0b3J5O1xuIl19