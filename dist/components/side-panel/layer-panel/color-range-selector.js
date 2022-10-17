"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroup = exports.PaletteConfig = exports["default"] = exports.ALL_STEPS = exports.ALL_TYPES = void 0;

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

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPalette = _interopRequireDefault(require("./custom-palette"));

var _colorRanges = require("../../../constants/color-ranges");

var _dataUtils = require("../../../utils/data-utils");

var _colorUtils = require("../../../utils/color-utils");

var _localization = require("../../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ALL_TYPES = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (c) {
  return c.type;
}).filter(function (ctype) {
  return ctype;
}).concat(['all', 'custom']));
exports.ALL_TYPES = ALL_TYPES;
var ALL_STEPS = (0, _lodash["default"])(_colorRanges.COLOR_RANGES.map(function (d) {
  return d.colors.length;
})).sort(_dataUtils.numberSort);
exports.ALL_STEPS = ALL_STEPS;

var StyledColorConfig = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 12px 12px 0 12px;\n"])));

var StyledColorRangeSelector = _styledComponents["default"].div.attrs({
  className: 'color-range-selector'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"])));

var StyledPaletteConfig = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .color-palette__config__label {\n    flex-grow: 1;\n  }\n  .color-palette__config__select {\n    flex-grow: 1;\n  }\n  .item-selector .item-selector__dropdown {\n    ", ";\n  }\n"])), function (props) {
  return props.theme.secondaryInput;
});

var CONFIG_SETTINGS = {
  type: {
    type: 'select',
    options: ALL_TYPES
  },
  steps: {
    type: 'select',
    options: ALL_STEPS
  },
  reversed: {
    type: 'switch',
    options: [true, false]
  },
  custom: {
    label: 'customPalette',
    type: 'switch',
    options: [true, false]
  }
};

var ColorRangeSelect = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorRangeSelect, _Component);

  var _super = _createSuper(ColorRangeSelect);

  function ColorRangeSelect() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorRangeSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colorRangesSelector", function (props) {
      return props.colorRanges;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configTypeSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.type;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configStepSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.steps;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredColorRange", (0, _reselect.createSelector)(_this.colorRangesSelector, _this.configTypeSelector, _this.configStepSelector, function (colorRanges, type, steps) {
      return colorRanges.filter(function (colorRange) {
        var isType = type === 'all' || type === colorRange.type;
        var isStep = Number(steps) === colorRange.colors.length;
        return isType && isStep;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (_ref) {
      var key = _ref.key,
          value = _ref.value;

      _this._setColorRangeConfig((0, _defineProperty2["default"])({}, key, value));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSetCustomPalette", function (config) {
      _this.props.setColorPaletteUI({
        customPalette: config
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setColorRangeConfig", function (newConfig) {
      _this.props.setColorPaletteUI({
        colorRangeConfig: newConfig
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCustomPaletteCancel", function (newConfig) {
      _this.props.setColorPaletteUI({
        showSketcher: false,
        colorRangeConfig: {
          custom: false
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleSketcher", function (val) {
      _this.props.setColorPaletteUI({
        showSketcher: val
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorRangeSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$colorPale = this.props.colorPaletteUI,
          customPalette = _this$props$colorPale.customPalette,
          showSketcher = _this$props$colorPale.showSketcher,
          colorRangeConfig = _this$props$colorPale.colorRangeConfig;
      var filteredColorRanges = this.filteredColorRange(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledColorRangeSelector, null, /*#__PURE__*/_react["default"].createElement(StyledColorConfig, null, (colorRangeConfig.custom ? ['custom'] : Object.keys(colorRangeConfig)).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(PaletteConfig, {
          key: key,
          label: CONFIG_SETTINGS[key].label || key,
          config: CONFIG_SETTINGS[key],
          value: colorRangeConfig[key],
          onChange: function onChange(value) {
            return _this2._updateConfig({
              key: key,
              value: value
            });
          }
        });
      })), colorRangeConfig.custom ? /*#__PURE__*/_react["default"].createElement(_customPalette["default"], {
        customPalette: customPalette,
        showSketcher: showSketcher,
        selected: this.props.selectedColorRange,
        onApply: this.props.onSelectColorRange,
        onToggleSketcher: this._onToggleSketcher,
        setCustomPalette: this._onSetCustomPalette,
        onCancel: this._onCustomPaletteCancel
      }) : /*#__PURE__*/_react["default"].createElement(ColorPaletteGroup, {
        colorRanges: filteredColorRanges,
        onSelect: this.props.onSelectColorRange,
        selected: this.props.selectedColorRange,
        reversed: colorRangeConfig.reversed
      }));
    }
  }]);
  return ColorRangeSelect;
}(_react.Component);

exports["default"] = ColorRangeSelect;
(0, _defineProperty2["default"])(ColorRangeSelect, "propTypes", {
  colorPaletteUI: _propTypes["default"].object.isRequired,
  selectedColorRange: _propTypes["default"].object.isRequired,
  onSelectColorRange: _propTypes["default"].func.isRequired,
  setColorPaletteUI: _propTypes["default"].func.isRequired,
  // optional
  colorRanges: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ColorRangeSelect, "defaultProps", {
  colorRanges: _colorRanges.COLOR_RANGES,
  onSelectColorRange: function onSelectColorRange() {},
  setColorPaletteUI: function setColorPaletteUI() {}
});

var PaletteConfig = function PaletteConfig(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      _ref2$config = _ref2.config,
      type = _ref2$config.type,
      options = _ref2$config.options,
      _onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(StyledPaletteConfig, {
    className: "color-palette__config",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__label"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "color.".concat(label)
  }))), type === 'select' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__select"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: value,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: _onChange
  })), type === 'switch' && /*#__PURE__*/_react["default"].createElement(_switch["default"], {
    checked: value,
    id: "".concat(label, "-toggle"),
    onChange: function onChange() {
      return _onChange(!value);
    },
    secondary: true
  }));
};

exports.PaletteConfig = PaletteConfig;

var StyledColorRange = _styledComponents["default"].div.attrs({
  className: 'color-palette-outer'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.panelBackgroundHover;
});

var ColorPaletteGroup = function ColorPaletteGroup(_ref3) {
  var reversed = _ref3.reversed,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected,
      colorRanges = _ref3.colorRanges;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__group"
  }, colorRanges.map(function (colorRange, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledColorRange, {
      key: "".concat(colorRange.name, "-").concat(i),
      onClick: function onClick(e) {
        return onSelect(reversed ? (0, _colorUtils.reverseColorRange)(true, colorRange) : colorRange, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
      colors: colorRange.colors,
      isReversed: reversed,
      isSelected: colorRange.name === selected.name && reversed === Boolean(selected.reversed)
    }));
  }));
};

exports.ColorPaletteGroup = ColorPaletteGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3ItcmFuZ2Utc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQUxMX1RZUEVTIiwiQ09MT1JfUkFOR0VTIiwibWFwIiwiYyIsInR5cGUiLCJmaWx0ZXIiLCJjdHlwZSIsImNvbmNhdCIsIkFMTF9TVEVQUyIsImQiLCJjb2xvcnMiLCJsZW5ndGgiLCJzb3J0IiwibnVtYmVyU29ydCIsIlN0eWxlZENvbG9yQ29uZmlnIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRQYWxldHRlQ29uZmlnIiwicHJvcHMiLCJ0aGVtZSIsInNlY29uZGFyeUlucHV0IiwiQ09ORklHX1NFVFRJTkdTIiwib3B0aW9ucyIsInN0ZXBzIiwicmV2ZXJzZWQiLCJjdXN0b20iLCJsYWJlbCIsIkNvbG9yUmFuZ2VTZWxlY3QiLCJjb2xvclJhbmdlcyIsImNvbG9yUGFsZXR0ZVVJIiwiY29sb3JSYW5nZUNvbmZpZyIsImNvbG9yUmFuZ2VzU2VsZWN0b3IiLCJjb25maWdUeXBlU2VsZWN0b3IiLCJjb25maWdTdGVwU2VsZWN0b3IiLCJjb2xvclJhbmdlIiwiaXNUeXBlIiwiaXNTdGVwIiwiTnVtYmVyIiwia2V5IiwidmFsdWUiLCJfc2V0Q29sb3JSYW5nZUNvbmZpZyIsImNvbmZpZyIsInNldENvbG9yUGFsZXR0ZVVJIiwiY3VzdG9tUGFsZXR0ZSIsIm5ld0NvbmZpZyIsInNob3dTa2V0Y2hlciIsInZhbCIsImZpbHRlcmVkQ29sb3JSYW5nZXMiLCJmaWx0ZXJlZENvbG9yUmFuZ2UiLCJPYmplY3QiLCJrZXlzIiwiX3VwZGF0ZUNvbmZpZyIsInNlbGVjdGVkQ29sb3JSYW5nZSIsIm9uU2VsZWN0Q29sb3JSYW5nZSIsIl9vblRvZ2dsZVNrZXRjaGVyIiwiX29uU2V0Q3VzdG9tUGFsZXR0ZSIsIl9vbkN1c3RvbVBhbGV0dGVDYW5jZWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFycmF5T2YiLCJhbnkiLCJQYWxldHRlQ29uZmlnIiwib25DaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiU3R5bGVkQ29sb3JSYW5nZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiQ29sb3JQYWxldHRlR3JvdXAiLCJvblNlbGVjdCIsInNlbGVjdGVkIiwiaSIsIm5hbWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFNBQVMsR0FBRyx3QkFDdkJDLDBCQUFhQyxHQUFiLENBQWlCLFVBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLElBQU47QUFBQSxDQUFsQixFQUNHQyxNQURILENBQ1UsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQURmLEVBRUdDLE1BRkgsQ0FFVSxDQUFDLEtBQUQsRUFBUSxRQUFSLENBRlYsQ0FEdUIsQ0FBbEI7O0FBTUEsSUFBTUMsU0FBUyxHQUFHLHdCQUFLUCwwQkFBYUMsR0FBYixDQUFpQixVQUFBTyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLE1BQWI7QUFBQSxDQUFsQixDQUFMLEVBQTZDQyxJQUE3QyxDQUFrREMscUJBQWxELENBQWxCOzs7QUFFUCxJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVYsc0hBQXZCOztBQUlBLElBQU1DLHdCQUF3QixHQUFHRiw2QkFBT0MsR0FBUCxDQUFXRSxLQUFYLENBQWlCO0FBQ2hEQyxFQUFBQSxTQUFTLEVBQUU7QUFEcUMsQ0FBakIsQ0FBSCxtSEFBOUI7O0FBTUEsSUFBTUMsbUJBQW1CLEdBQUdMLDZCQUFPQyxHQUFWLG1YQVlu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QUEsTUFBRTlDLFFBQUYsU0FBRUEsUUFBRjtBQUFBLE1BQVkrQyxRQUFaLFNBQVlBLFFBQVo7QUFBQSxNQUFzQkMsUUFBdEIsU0FBc0JBLFFBQXRCO0FBQUEsTUFBZ0M1QyxXQUFoQyxTQUFnQ0EsV0FBaEM7QUFBQSxzQkFDL0I7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dBLFdBQVcsQ0FBQzdCLEdBQVosQ0FBZ0IsVUFBQ21DLFVBQUQsRUFBYXVDLENBQWI7QUFBQSx3QkFDZixnQ0FBQyxnQkFBRDtBQUNFLE1BQUEsR0FBRyxZQUFLdkMsVUFBVSxDQUFDd0MsSUFBaEIsY0FBd0JELENBQXhCLENBREw7QUFFRSxNQUFBLE9BQU8sRUFBRSxpQkFBQVAsQ0FBQztBQUFBLGVBQUlLLFFBQVEsQ0FBQy9DLFFBQVEsR0FBRyxtQ0FBa0IsSUFBbEIsRUFBd0JVLFVBQXhCLENBQUgsR0FBeUNBLFVBQWxELEVBQThEZ0MsQ0FBOUQsQ0FBWjtBQUFBO0FBRlosb0JBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE1BQU0sRUFBRWhDLFVBQVUsQ0FBQzNCLE1BRHJCO0FBRUUsTUFBQSxVQUFVLEVBQUVpQixRQUZkO0FBR0UsTUFBQSxVQUFVLEVBQUVVLFVBQVUsQ0FBQ3dDLElBQVgsS0FBb0JGLFFBQVEsQ0FBQ0UsSUFBN0IsSUFBcUNsRCxRQUFRLEtBQUttRCxPQUFPLENBQUNILFFBQVEsQ0FBQ2hELFFBQVY7QUFIdkUsTUFKRixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQUQrQjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7UGFuZWxMYWJlbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuL2NvbG9yLXBhbGV0dGUnO1xuaW1wb3J0IEN1c3RvbVBhbGV0dGUgZnJvbSAnLi9jdXN0b20tcGFsZXR0ZSc7XG5pbXBvcnQge0NPTE9SX1JBTkdFU30gZnJvbSAnY29uc3RhbnRzL2NvbG9yLXJhbmdlcyc7XG5pbXBvcnQge251bWJlclNvcnR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHtyZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5leHBvcnQgY29uc3QgQUxMX1RZUEVTID0gdW5pcShcbiAgQ09MT1JfUkFOR0VTLm1hcChjID0+IGMudHlwZSlcbiAgICAuZmlsdGVyKGN0eXBlID0+IGN0eXBlKVxuICAgIC5jb25jYXQoWydhbGwnLCAnY3VzdG9tJ10pXG4pO1xuXG5leHBvcnQgY29uc3QgQUxMX1NURVBTID0gdW5pcShDT0xPUl9SQU5HRVMubWFwKGQgPT4gZC5jb2xvcnMubGVuZ3RoKSkuc29ydChudW1iZXJTb3J0KTtcblxuY29uc3QgU3R5bGVkQ29sb3JDb25maWcgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4IDEycHggMCAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkQ29sb3JSYW5nZVNlbGVjdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvbG9yLXJhbmdlLXNlbGVjdG9yJ1xufSlgXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkUGFsZXR0ZUNvbmZpZyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAuY29sb3ItcGFsZXR0ZV9fY29uZmlnX19sYWJlbCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5jb2xvci1wYWxldHRlX19jb25maWdfX3NlbGVjdCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5pdGVtLXNlbGVjdG9yIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dH07XG4gIH1cbmA7XG5cbmNvbnN0IENPTkZJR19TRVRUSU5HUyA9IHtcbiAgdHlwZToge1xuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IEFMTF9UWVBFU1xuICB9LFxuICBzdGVwczoge1xuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IEFMTF9TVEVQU1xuICB9LFxuICByZXZlcnNlZDoge1xuICAgIHR5cGU6ICdzd2l0Y2gnLFxuICAgIG9wdGlvbnM6IFt0cnVlLCBmYWxzZV1cbiAgfSxcbiAgY3VzdG9tOiB7XG4gICAgbGFiZWw6ICdjdXN0b21QYWxldHRlJyxcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBvcHRpb25zOiBbdHJ1ZSwgZmFsc2VdXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yUmFuZ2VTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNvbG9yUGFsZXR0ZVVJOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgc2VsZWN0ZWRDb2xvclJhbmdlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25TZWxlY3RDb2xvclJhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldENvbG9yUGFsZXR0ZVVJOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIC8vIG9wdGlvbmFsXG4gICAgY29sb3JSYW5nZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvclJhbmdlczogQ09MT1JfUkFOR0VTLFxuICAgIG9uU2VsZWN0Q29sb3JSYW5nZTogKCkgPT4ge30sXG4gICAgc2V0Q29sb3JQYWxldHRlVUk6ICgpID0+IHt9XG4gIH07XG5cbiAgY29sb3JSYW5nZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmNvbG9yUmFuZ2VzO1xuICBjb25maWdUeXBlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5jb2xvclBhbGV0dGVVSS5jb2xvclJhbmdlQ29uZmlnLnR5cGU7XG4gIGNvbmZpZ1N0ZXBTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmNvbG9yUGFsZXR0ZVVJLmNvbG9yUmFuZ2VDb25maWcuc3RlcHM7XG4gIGZpbHRlcmVkQ29sb3JSYW5nZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuY29sb3JSYW5nZXNTZWxlY3RvcixcbiAgICB0aGlzLmNvbmZpZ1R5cGVTZWxlY3RvcixcbiAgICB0aGlzLmNvbmZpZ1N0ZXBTZWxlY3RvcixcbiAgICAoY29sb3JSYW5nZXMsIHR5cGUsIHN0ZXBzKSA9PiB7XG4gICAgICByZXR1cm4gY29sb3JSYW5nZXMuZmlsdGVyKGNvbG9yUmFuZ2UgPT4ge1xuICAgICAgICBjb25zdCBpc1R5cGUgPSB0eXBlID09PSAnYWxsJyB8fCB0eXBlID09PSBjb2xvclJhbmdlLnR5cGU7XG4gICAgICAgIGNvbnN0IGlzU3RlcCA9IE51bWJlcihzdGVwcykgPT09IGNvbG9yUmFuZ2UuY29sb3JzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gaXNUeXBlICYmIGlzU3RlcDtcbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcblxuICBfdXBkYXRlQ29uZmlnID0gKHtrZXksIHZhbHVlfSkgPT4ge1xuICAgIHRoaXMuX3NldENvbG9yUmFuZ2VDb25maWcoe1trZXldOiB2YWx1ZX0pO1xuICB9O1xuXG4gIF9vblNldEN1c3RvbVBhbGV0dGUgPSBjb25maWcgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgY3VzdG9tUGFsZXR0ZTogY29uZmlnXG4gICAgfSk7XG4gIH07XG5cbiAgX3NldENvbG9yUmFuZ2VDb25maWcgPSBuZXdDb25maWcgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgY29sb3JSYW5nZUNvbmZpZzogbmV3Q29uZmlnXG4gICAgfSk7XG4gIH07XG5cbiAgX29uQ3VzdG9tUGFsZXR0ZUNhbmNlbCA9IG5ld0NvbmZpZyA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICBzaG93U2tldGNoZXI6IGZhbHNlLFxuICAgICAgY29sb3JSYW5nZUNvbmZpZzoge2N1c3RvbTogZmFsc2V9XG4gICAgfSk7XG4gIH07XG5cbiAgX29uVG9nZ2xlU2tldGNoZXIgPSB2YWwgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgc2hvd1NrZXRjaGVyOiB2YWxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2N1c3RvbVBhbGV0dGUsIHNob3dTa2V0Y2hlciwgY29sb3JSYW5nZUNvbmZpZ30gPSB0aGlzLnByb3BzLmNvbG9yUGFsZXR0ZVVJO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDb2xvclJhbmdlcyA9IHRoaXMuZmlsdGVyZWRDb2xvclJhbmdlKHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDb2xvclJhbmdlU2VsZWN0b3I+XG4gICAgICAgIDxTdHlsZWRDb2xvckNvbmZpZz5cbiAgICAgICAgICB7KGNvbG9yUmFuZ2VDb25maWcuY3VzdG9tID8gWydjdXN0b20nXSA6IE9iamVjdC5rZXlzKGNvbG9yUmFuZ2VDb25maWcpKS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgIDxQYWxldHRlQ29uZmlnXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBsYWJlbD17Q09ORklHX1NFVFRJTkdTW2tleV0ubGFiZWwgfHwga2V5fVxuICAgICAgICAgICAgICBjb25maWc9e0NPTkZJR19TRVRUSU5HU1trZXldfVxuICAgICAgICAgICAgICB2YWx1ZT17Y29sb3JSYW5nZUNvbmZpZ1trZXldfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5fdXBkYXRlQ29uZmlnKHtrZXksIHZhbHVlfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0eWxlZENvbG9yQ29uZmlnPlxuXG4gICAgICAgIHtjb2xvclJhbmdlQ29uZmlnLmN1c3RvbSA/IChcbiAgICAgICAgICA8Q3VzdG9tUGFsZXR0ZVxuICAgICAgICAgICAgY3VzdG9tUGFsZXR0ZT17Y3VzdG9tUGFsZXR0ZX1cbiAgICAgICAgICAgIHNob3dTa2V0Y2hlcj17c2hvd1NrZXRjaGVyfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWRDb2xvclJhbmdlfVxuICAgICAgICAgICAgb25BcHBseT17dGhpcy5wcm9wcy5vblNlbGVjdENvbG9yUmFuZ2V9XG4gICAgICAgICAgICBvblRvZ2dsZVNrZXRjaGVyPXt0aGlzLl9vblRvZ2dsZVNrZXRjaGVyfVxuICAgICAgICAgICAgc2V0Q3VzdG9tUGFsZXR0ZT17dGhpcy5fb25TZXRDdXN0b21QYWxldHRlfVxuICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuX29uQ3VzdG9tUGFsZXR0ZUNhbmNlbH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb2xvclBhbGV0dGVHcm91cFxuICAgICAgICAgICAgY29sb3JSYW5nZXM9e2ZpbHRlcmVkQ29sb3JSYW5nZXN9XG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNlbGVjdENvbG9yUmFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENvbG9yUmFuZ2V9XG4gICAgICAgICAgICByZXZlcnNlZD17Y29sb3JSYW5nZUNvbmZpZy5yZXZlcnNlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRDb2xvclJhbmdlU2VsZWN0b3I+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUGFsZXR0ZUNvbmZpZyA9ICh7bGFiZWwsIHZhbHVlLCBjb25maWc6IHt0eXBlLCBvcHRpb25zfSwgb25DaGFuZ2V9KSA9PiAoXG4gIDxTdHlsZWRQYWxldHRlQ29uZmlnIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGVfX2NvbmZpZ1wiIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdfX2xhYmVsXCI+XG4gICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2Bjb2xvci4ke2xhYmVsfWB9IC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgPC9kaXY+XG4gICAge3R5cGUgPT09ICdzZWxlY3QnICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fY29uZmlnX19zZWxlY3RcIj5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3ZhbHVlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAge3R5cGUgPT09ICdzd2l0Y2gnICYmIChcbiAgICAgIDxTd2l0Y2ggY2hlY2tlZD17dmFsdWV9IGlkPXtgJHtsYWJlbH0tdG9nZ2xlYH0gb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKCF2YWx1ZSl9IHNlY29uZGFyeSAvPlxuICAgICl9XG4gIDwvU3R5bGVkUGFsZXR0ZUNvbmZpZz5cbik7XG5cbmNvbnN0IFN0eWxlZENvbG9yUmFuZ2UgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnY29sb3ItcGFsZXR0ZS1vdXRlcidcbn0pYFxuICBwYWRkaW5nOiAwIDhweDtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xvclBhbGV0dGVHcm91cCA9ICh7cmV2ZXJzZWQsIG9uU2VsZWN0LCBzZWxlY3RlZCwgY29sb3JSYW5nZXN9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fZ3JvdXBcIj5cbiAgICB7Y29sb3JSYW5nZXMubWFwKChjb2xvclJhbmdlLCBpKSA9PiAoXG4gICAgICA8U3R5bGVkQ29sb3JSYW5nZVxuICAgICAgICBrZXk9e2Ake2NvbG9yUmFuZ2UubmFtZX0tJHtpfWB9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gb25TZWxlY3QocmV2ZXJzZWQgPyByZXZlcnNlQ29sb3JSYW5nZSh0cnVlLCBjb2xvclJhbmdlKSA6IGNvbG9yUmFuZ2UsIGUpfVxuICAgICAgPlxuICAgICAgICA8Q29sb3JQYWxldHRlXG4gICAgICAgICAgY29sb3JzPXtjb2xvclJhbmdlLmNvbG9yc31cbiAgICAgICAgICBpc1JldmVyc2VkPXtyZXZlcnNlZH1cbiAgICAgICAgICBpc1NlbGVjdGVkPXtjb2xvclJhbmdlLm5hbWUgPT09IHNlbGVjdGVkLm5hbWUgJiYgcmV2ZXJzZWQgPT09IEJvb2xlYW4oc2VsZWN0ZWQucmV2ZXJzZWQpfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRDb2xvclJhbmdlPlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG4iXX0=