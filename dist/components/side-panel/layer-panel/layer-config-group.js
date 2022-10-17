"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerConfigGroupLabelFactory = LayerConfigGroupLabelFactory;
exports["default"] = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _icons = require("../../common/icons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledLayerConfigGroupAction = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;

var ConfigGroupCollapsibleContent = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 600px;\n"])));

exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;

var ConfigGroupCollapsibleHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"])));

exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;

var StyledLayerConfigGroup = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: ", "px;\n  margin-bottom: ", "px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.layerConfigGroupPaddingLeft;
}, function (props) {
  return props.theme.layerConfigGroupMarginBottom;
});

exports.StyledLayerConfigGroup = StyledLayerConfigGroup;

var StyledConfigGroupHeader = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n    }\n\n    .layer-config-group__action {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var ConfigGroupContent = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"])));

LayerConfigGroupLabelFactory.deps = [_infoHelper["default"]];

function LayerConfigGroupLabelFactory(InfoHelper) {
  var StyledLayerConfigGroupLabel = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    border-left: ", " solid\n      ", ";\n    line-height: 12px;\n    margin-left: ", ";\n    padding-left: ", ";\n\n    display: flex;\n    align-items: center;\n\n    span {\n      color: ", ";\n      font-weight: 500;\n      letter-spacing: 0.2px;\n      text-transform: capitalize;\n      margin-left: ", ";\n      font-size: ", ";\n    }\n  "])), function (props) {
    return props.theme.layerConfigGroupLabelBorderLeft;
  }, function (props) {
    return props.theme.labelColor;
  }, function (props) {
    return props.theme.layerConfigGroupLabelMargin;
  }, function (props) {
    return props.theme.layerConfigGroupLabelPadding;
  }, function (props) {
    return props.theme.textColor;
  }, function (props) {
    return props.theme.layerConfigGroupLabelLabelMargin;
  }, function (props) {
    return props.theme.layerConfigGroupLabelLabelFontSize;
  });

  var LayerConfigGroupLabel = function LayerConfigGroupLabel(_ref) {
    var label = _ref.label,
        description = _ref.description;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupLabel, {
      className: "layer-config-group__label"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: label || 'misc.empty',
      defaultMessage: label
    })), description && /*#__PURE__*/_react["default"].createElement(InfoHelper, {
      description: description,
      id: label
    }));
  };

  return LayerConfigGroupLabel;
}

LayerConfigGroupFactory.deps = [LayerConfigGroupLabelFactory];

function LayerConfigGroupFactory(LayerConfigGroupLabel) {
  var LayerConfigGroup = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigGroup, _Component);

    var _super = _createSuper(LayerConfigGroup);

    function LayerConfigGroup() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerConfigGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        collapsed: true
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerConfigGroup, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            label = _this$props.label,
            children = _this$props.children,
            property = _this$props.property,
            layer = _this$props.layer,
            _onChange2 = _this$props.onChange,
            collapsible = _this$props.collapsible,
            description = _this$props.description,
            disabled = _this$props.disabled;
        var collapsed = this.state.collapsed;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroup, {
          className: (0, _classnames["default"])('layer-config-group', {
            collapsed: collapsed,
            disabled: disabled
          })
        }, /*#__PURE__*/_react["default"].createElement(StyledConfigGroupHeader, {
          className: "layer-config-group__header",
          onClick: function onClick() {
            return _this2.setState({
              collapsed: !_this2.state.collapsed
            });
          }
        }, /*#__PURE__*/_react["default"].createElement(LayerConfigGroupLabel, {
          label: label,
          description: description
        }), /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupAction, {
          className: "layer-config-group__action"
        }, property ? /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          checked: layer.config.visConfig[property],
          id: "".concat(layer.id, "-").concat(property),
          onChange: function onChange() {
            return _onChange2((0, _defineProperty2["default"])({}, property, !layer.config.visConfig[property]));
          }
        }) : null, collapsible ? /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
          height: "18px"
        }) : null)), /*#__PURE__*/_react["default"].createElement(ConfigGroupContent, {
          className: (0, _classnames["default"])('layer-config-group__content', {
            disabled: property && !layer.config.visConfig[property]
          })
        }, children));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        //  invoked after a component is instantiated as well as before it is re-rendered
        if (props.expanded && state.collapsed) {
          return {
            collapsed: false
          };
        }

        return null;
      }
    }]);
    return LayerConfigGroup;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigGroup, "defaultProps", {
    collapsible: false,
    expanded: false,
    onChange: function onChange() {},
    description: null,
    disabled: false
  });
  (0, _reactLifecyclesCompat.polyfill)(LayerConfigGroup);
  return LayerConfigGroup;
}

var _default = LayerConfigGroupFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yIiwiQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQiLCJhdHRycyIsImNsYXNzTmFtZSIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXIiLCJTdHlsZWRMYXllckNvbmZpZ0dyb3VwIiwibGF5ZXJDb25maWdHcm91cFBhZGRpbmdMZWZ0IiwibGF5ZXJDb25maWdHcm91cE1hcmdpbkJvdHRvbSIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwTGFiZWxGYWN0b3J5IiwiZGVwcyIsIkluZm9IZWxwZXJGYWN0b3J5IiwiSW5mb0hlbHBlciIsIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsImxheWVyQ29uZmlnR3JvdXBMYWJlbEJvcmRlckxlZnQiLCJsYWJlbENvbG9yIiwibGF5ZXJDb25maWdHcm91cExhYmVsTWFyZ2luIiwibGF5ZXJDb25maWdHcm91cExhYmVsUGFkZGluZyIsImxheWVyQ29uZmlnR3JvdXBMYWJlbExhYmVsTWFyZ2luIiwibGF5ZXJDb25maWdHcm91cExhYmVsTGFiZWxGb250U2l6ZSIsIkxheWVyQ29uZmlnR3JvdXBMYWJlbCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJMYXllckNvbmZpZ0dyb3VwRmFjdG9yeSIsIkxheWVyQ29uZmlnR3JvdXAiLCJjb2xsYXBzZWQiLCJjaGlsZHJlbiIsInByb3BlcnR5IiwibGF5ZXIiLCJvbkNoYW5nZSIsImNvbGxhcHNpYmxlIiwiZGlzYWJsZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwiY29uZmlnIiwidmlzQ29uZmln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QUEsV0FBVyxFQUFFLEtBRE87QUFFcEJPLElBQUFBLFFBQVEsRUFBRSxLQUZVO0FBR3BCUixJQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCUCxJQUFBQSxXQUFXLEVBQUUsSUFKTztBQUtwQlMsSUFBQUEsUUFBUSxFQUFFO0FBTFUsR0FGOEI7QUFtRXRELHVDQUFTUCxnQkFBVDtBQUVBLFNBQU9BLGdCQUFQO0FBQ0Q7O2VBRWNELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3BvbHlmaWxsfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcbmltcG9ydCBJbmZvSGVscGVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbmZvLWhlbHBlcic7XG5pbXBvcnQge1ZlcnRUaHJlZURvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLWNvbmZpZy1ncm91cF9fY29udGVudF9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwUGFkZGluZ0xlZnR9cHg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWdHcm91cE1hcmdpbkJvdHRvbX1weDtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5jb2xsYXBzZWQge1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XG4gICAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRDb25maWdHcm91cEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuXG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbmZpZ0dyb3VwQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICYuZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAqIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuTGF5ZXJDb25maWdHcm91cExhYmVsRmFjdG9yeS5kZXBzID0gW0luZm9IZWxwZXJGYWN0b3J5XTtcblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyQ29uZmlnR3JvdXBMYWJlbEZhY3RvcnkoSW5mb0hlbHBlcikge1xuICBjb25zdCBTdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWwgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlnR3JvdXBMYWJlbEJvcmRlckxlZnR9IHNvbGlkXG4gICAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlnR3JvdXBMYWJlbE1hcmdpbn07XG4gICAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlnR3JvdXBMYWJlbFBhZGRpbmd9O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWdHcm91cExhYmVsTGFiZWxNYXJnaW59O1xuICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlnR3JvdXBMYWJlbExhYmVsRm9udFNpemV9O1xuICAgIH1cbiAgYDtcblxuICBjb25zdCBMYXllckNvbmZpZ0dyb3VwTGFiZWwgPSAoe2xhYmVsLCBkZXNjcmlwdGlvbn0pID0+IChcbiAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fbGFiZWxcIj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWwgfHwgJ21pc2MuZW1wdHknfSBkZWZhdWx0TWVzc2FnZT17bGFiZWx9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPEluZm9IZWxwZXIgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpZD17bGFiZWx9IC8+fVxuICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsPlxuICApO1xuXG4gIHJldHVybiBMYXllckNvbmZpZ0dyb3VwTGFiZWw7XG59XG5cbkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5LmRlcHMgPSBbTGF5ZXJDb25maWdHcm91cExhYmVsRmFjdG9yeV07XG5cbmZ1bmN0aW9uIExheWVyQ29uZmlnR3JvdXBGYWN0b3J5KExheWVyQ29uZmlnR3JvdXBMYWJlbCkge1xuICBjbGFzcyBMYXllckNvbmZpZ0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIC8vICBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCBhcyB3ZWxsIGFzIGJlZm9yZSBpdCBpcyByZS1yZW5kZXJlZFxuICAgICAgaWYgKHByb3BzLmV4cGFuZGVkICYmIHN0YXRlLmNvbGxhcHNlZCkge1xuICAgICAgICByZXR1cm4ge2NvbGxhcHNlZDogZmFsc2V9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIGxheWVyLFxuICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgY29sbGFwc2libGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkaXNhYmxlZFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtjb2xsYXBzZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXllci1jb25maWctZ3JvdXAnLCB7Y29sbGFwc2VkLCBkaXNhYmxlZH0pfT5cbiAgICAgICAgICA8U3R5bGVkQ29uZmlnR3JvdXBIZWFkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2NvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBMYWJlbCBsYWJlbD17bGFiZWx9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwQWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uXCI+XG4gICAgICAgICAgICAgIHtwcm9wZXJ0eSA/IChcbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX1cbiAgICAgICAgICAgICAgICAgIGlkPXtgJHtsYXllci5pZH0tJHtwcm9wZXJ0eX1gfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbj5cbiAgICAgICAgICA8L1N0eWxlZENvbmZpZ0dyb3VwSGVhZGVyPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbnRlbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50Jywge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogcHJvcGVydHkgJiYgIWxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcG9seWZpbGwoTGF5ZXJDb25maWdHcm91cCk7XG5cbiAgcmV0dXJuIExheWVyQ29uZmlnR3JvdXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyQ29uZmlnR3JvdXBGYWN0b3J5O1xuIl19