"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _styledComponents2 = require("../common/styled-components");

var _mediaBreakpoints = require("../../styles/media-breakpoints");

var _mapboxUtils = require("../../utils/map-style-utils/mapbox-utils");

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapH = 190;
var MapW = 264;
var ErrorMsg = {
  styleError: 'Failed to load map style, make sure it is published. For private style, paste in your access token.'
};

var PreviewMap = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 116px;\n  flex-shrink: 0;\n\n  .preview-title {\n    font-weight: 500;\n    font-size: 10px;\n    padding: 8px 0px;\n  }\n\n  .preview-title.error {\n    color: ", ";\n  }\n\n  ", ";\n\n  ", ";\n"])), function (props) {
  return props.theme.errorColor;
}, _mediaBreakpoints.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 32px;\n  "]))), _mediaBreakpoints.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: unset;\n    .preview-title {\n      margin-top: 0px;\n    }\n  "]))));

var StyledPreviewImage = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"])), function (props) {
  return props.theme.modalImagePlaceHolder;
}, MapW, MapH);

var InlineLink = _styledComponents["default"].a(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n\n  :hover {\n    cursor: pointer;\n  }\n"])));

function AddMapStyleModalFactory() {
  var AddMapStyleModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AddMapStyleModal, _Component);

    var _super = _createSuper(AddMapStyleModal);

    function AddMapStyleModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, AddMapStyleModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        reRenderKey: 0,
        previousToken: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleJson", function (style) {
        _this.props.loadCustomMapStyle({
          style: style,
          error: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleError", function () {
        _this.props.loadCustomMapStyle({
          error: true
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(AddMapStyleModal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this2 = this;

        var map = this.mapRef && this.mapRef.getMap();

        if (map && this._map !== map) {
          this._map = map;
          map.on('style.load', function () {
            var style = map.getStyle();

            _this2.loadMapStyleJson(style);
          });
          map.on('error', function () {
            _this2.loadMapStyleError();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props = this.props,
            inputStyle = _this$props.inputStyle,
            mapState = _this$props.mapState,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            intl = _this$props.intl;
        var mapboxApiAccessToken = inputStyle.accessToken || this.props.mapboxApiAccessToken;

        var mapProps = _objectSpread(_objectSpread({}, mapState), {}, {
          mapboxApiUrl: mapboxApiUrl,
          mapboxApiAccessToken: mapboxApiAccessToken,
          preserveDrawingBuffer: true,
          transformRequest: _mapboxUtils.transformRequest
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "add-map-style-modal"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalVerticalPanel, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.pasteTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle0'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/#style-url"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle2'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle3'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://docs.mapbox.com/mapbox-gl-js/style-spec"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle4'
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.url || '',
          onChange: function onChange(_ref) {
            var value = _ref.target.value;
            return _this3.props.inputMapStyle({
              url: value
            });
          },
          placeholder: "e.g. mapbox://styles/username/style, http://my.stles.com/xxx/style.json "
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.publishTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle1'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/studio/styles/"
        }, ' ', "mapbox"), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle2'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle3'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle4'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle5'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/how-access-tokens-work/"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle6'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle7'
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.accessToken || '',
          onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return _this3.props.inputMapStyle({
              accessToken: value
            });
          },
          placeholder: intl.formatMessage({
            id: 'modal.addStyle.exampleToken'
          })
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.namingTitle'
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.label || '',
          onChange: function onChange(_ref3) {
            var value = _ref3.target.value;
            return _this3.props.inputMapStyle({
              label: value
            });
          }
        }))), /*#__PURE__*/_react["default"].createElement(PreviewMap, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])('preview-title', {
            error: inputStyle.error
          })
        }, inputStyle.error ? ErrorMsg.styleError : inputStyle.style && inputStyle.style.name || ''), /*#__PURE__*/_react["default"].createElement(StyledPreviewImage, {
          className: "preview-image"
        }, !inputStyle.isValid ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "preview-image-spinner"
        }) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledMapContainer, null, /*#__PURE__*/_react["default"].createElement(_reactMapGl["default"], (0, _extends2["default"])({}, mapProps, {
          ref: function ref(el) {
            _this3.mapRef = el;
          },
          key: this.state.reRenderKey,
          width: MapW,
          height: MapH,
          mapStyle: inputStyle.url
        })))))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.inputStyle && props.inputStyle.accessToken && props.inputStyle.accessToken !== state.previousToken) {
          // toke has changed
          // ReactMapGl doesn't re-create map when token has changed
          // here we force the map to update
          return {
            reRenderKey: state.reRenderKey + 1,
            previousToken: props.inputStyle.accessToken
          };
        }

        return null;
      }
    }]);
    return AddMapStyleModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(AddMapStyleModal, "propTypes", {
    inputMapStyle: _propTypes["default"].func.isRequired,
    inputStyle: _propTypes["default"].object.isRequired,
    loadCustomMapStyle: _propTypes["default"].func.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string.isRequired,
    mapState: _propTypes["default"].object.isRequired
  });
  return (0, _reactIntl.injectIntl)((0, _reactLifecyclesCompat.polyfill)(AddMapStyleModal));
}

var _default = AddMapStyleModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIk1hcEgiLCJNYXBXIiwiRXJyb3JNc2ciLCJzdHlsZUVycm9yIiwiUHJldmlld01hcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJTdHlsZWRQcmV2aWV3SW1hZ2UiLCJtb2RhbEltYWdlUGxhY2VIb2xkZXIiLCJJbmxpbmVMaW5rIiwiYSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiQWRkTWFwU3R5bGVNb2RhbCIsInJlUmVuZGVyS2V5IiwicHJldmlvdXNUb2tlbiIsInN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiZXJyb3IiLCJtYXAiLCJtYXBSZWYiLCJnZXRNYXAiLCJfbWFwIiwib24iLCJnZXRTdHlsZSIsImxvYWRNYXBTdHlsZUpzb24iLCJsb2FkTWFwU3R5bGVFcnJvciIsImlucHV0U3R5bGUiLCJtYXBTdGF0ZSIsIm1hcGJveEFwaVVybCIsImludGwiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwibWFwUHJvcHMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiZm9ybWF0TWVzc2FnZSIsImlkIiwidXJsIiwidmFsdWUiLCJ0YXJnZXQiLCJpbnB1dE1hcFN0eWxlIiwibGFiZWwiLCJuYW1lIiwiaXNWYWxpZCIsImVsIiwic3RhdGUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFN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QUFrQixFQUFFK0Isc0JBQVVDLElBQVYsQ0FBZUMsVUFIbEI7QUFJakJuQixJQUFBQSxvQkFBb0IsRUFBRWlCLHNCQUFVSSxNQUFWLENBQWlCRixVQUp0QjtBQUtqQnJCLElBQUFBLFlBQVksRUFBRW1CLHNCQUFVSSxNQUFWLENBQWlCRixVQUxkO0FBTWpCdEIsSUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVHLE1BQVYsQ0FBaUJEO0FBTlYsR0FGWTtBQStMakMsU0FBTywyQkFBVyxxQ0FBU3JDLGdCQUFULENBQVgsQ0FBUDtBQUNEOztlQUVjRCx1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwYm94R0xNYXAgZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCB7XG4gIFN0eWxlZE1vZGFsQ29udGVudCxcbiAgSW5wdXRMaWdodCxcbiAgU3R5bGVkTWFwQ29udGFpbmVyLFxuICBTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWwsXG4gIFN0eWxlZE1vZGFsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xuXG4vLyBVdGlsc1xuaW1wb3J0IHt0cmFuc2Zvcm1SZXF1ZXN0fSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LXV0aWxzJztcbmltcG9ydCB7aW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmNvbnN0IE1hcEggPSAxOTA7XG5jb25zdCBNYXBXID0gMjY0O1xuY29uc3QgRXJyb3JNc2cgPSB7XG4gIHN0eWxlRXJyb3I6XG4gICAgJ0ZhaWxlZCB0byBsb2FkIG1hcCBzdHlsZSwgbWFrZSBzdXJlIGl0IGlzIHB1Ymxpc2hlZC4gRm9yIHByaXZhdGUgc3R5bGUsIHBhc3RlIGluIHlvdXIgYWNjZXNzIHRva2VuLidcbn07XG5cbmNvbnN0IFByZXZpZXdNYXAgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExNnB4O1xuICBmbGV4LXNocmluazogMDtcblxuICAucHJldmlldy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIC5wcmV2aWV3LXRpdGxlLmVycm9yIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgfVxuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIGB9O1xuXG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLnByZXZpZXctdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRQcmV2aWV3SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsSW1hZ2VQbGFjZUhvbGRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHdpZHRoOiAke01hcFd9cHg7XG4gIGhlaWdodDogJHtNYXBIfXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgfVxuYDtcblxuY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hYFxuICBmb250LXdlaWdodDogNTAwO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSgpIHtcbiAgY2xhc3MgQWRkTWFwU3R5bGVNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGlucHV0TWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBpbnB1dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsb2FkQ3VzdG9tTWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbWFwYm94QXBpVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgcmVSZW5kZXJLZXk6IDAsXG4gICAgICBwcmV2aW91c1Rva2VuOiBudWxsXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmlucHV0U3R5bGUgJiZcbiAgICAgICAgcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiAmJlxuICAgICAgICBwcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuICE9PSBzdGF0ZS5wcmV2aW91c1Rva2VuXG4gICAgICApIHtcbiAgICAgICAgLy8gdG9rZSBoYXMgY2hhbmdlZFxuICAgICAgICAvLyBSZWFjdE1hcEdsIGRvZXNuJ3QgcmUtY3JlYXRlIG1hcCB3aGVuIHRva2VuIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIGhlcmUgd2UgZm9yY2UgdGhlIG1hcCB0byB1cGRhdGVcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlUmVuZGVyS2V5OiBzdGF0ZS5yZVJlbmRlcktleSArIDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbjogcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlblxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFJlZiAmJiB0aGlzLm1hcFJlZi5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXAgJiYgdGhpcy5fbWFwICE9PSBtYXApIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgICAgIG1hcC5vbignc3R5bGUubG9hZCcsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IG1hcC5nZXRTdHlsZSgpO1xuICAgICAgICAgIHRoaXMubG9hZE1hcFN0eWxlSnNvbihzdHlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFwU3R5bGVFcnJvcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkTWFwU3R5bGVKc29uID0gc3R5bGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe3N0eWxlLCBlcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgbG9hZE1hcFN0eWxlRXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxvYWRDdXN0b21NYXBTdHlsZSh7ZXJyb3I6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lucHV0U3R5bGUsIG1hcFN0YXRlLCBtYXBib3hBcGlVcmwsIGludGx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbWFwYm94QXBpQWNjZXNzVG9rZW4gPSBpbnB1dFN0eWxlLmFjY2Vzc1Rva2VuIHx8IHRoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW47XG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbWFwLXN0eWxlLW1vZGFsXCI+XG4gICAgICAgICAgPFN0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDxTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWw+XG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmFkZFN0eWxlLnBhc3RlVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wYXN0ZVN1YnRpdGxlMCd9KX1cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvc3R1ZGlvLW1hbnVhbC1wdWJsaXNoLyNzdHlsZS11cmxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnBhc3RlU3VidGl0bGUyJ30pfVxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnBhc3RlU3VidGl0bGUzJ30pfVxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wYXN0ZVN1YnRpdGxlNCd9KX1cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW5wdXRMaWdodFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUudXJsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHt1cmw6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gbWFwYm94Oi8vc3R5bGVzL3VzZXJuYW1lL3N0eWxlLCBodHRwOi8vbXkuc3RsZXMuY29tL3h4eC9zdHlsZS5qc29uIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPFN0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuYWRkU3R5bGUucHVibGlzaFRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucHVibGlzaFN1YnRpdGxlMSd9KX1cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL3N0dWRpby9zdHlsZXMvXCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIG1hcGJveFxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hTdWJ0aXRsZTInfSl9XG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGlua1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9oZWxwL3N0dWRpby1tYW51YWwtcHVibGlzaC9cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hTdWJ0aXRsZTMnfSl9XG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucHVibGlzaFN1YnRpdGxlNCd9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wdWJsaXNoU3VidGl0bGU1J30pfVxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9ob3ctYWNjZXNzLXRva2Vucy13b3JrL1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucHVibGlzaFN1YnRpdGxlNid9KX1cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wdWJsaXNoU3VidGl0bGU3J30pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dExpZ2h0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7YWNjZXNzVG9rZW46IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLmV4YW1wbGVUb2tlbid9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cblxuICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5hZGRTdHlsZS5uYW1pbmdUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0eWxlLmxhYmVsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHtsYWJlbDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICAgIDwvU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsPlxuICAgICAgICAgICAgPFByZXZpZXdNYXA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3ByZXZpZXctdGl0bGUnLCB7XG4gICAgICAgICAgICAgICAgICBlcnJvcjogaW5wdXRTdHlsZS5lcnJvclxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lucHV0U3R5bGUuZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gRXJyb3JNc2cuc3R5bGVFcnJvclxuICAgICAgICAgICAgICAgICAgOiAoaW5wdXRTdHlsZS5zdHlsZSAmJiBpbnB1dFN0eWxlLnN0eWxlLm5hbWUpIHx8ICcnfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFN0eWxlZFByZXZpZXdJbWFnZSBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgeyFpbnB1dFN0eWxlLmlzVmFsaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiIC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRNYXBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxNYXBib3hHTE1hcFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwUmVmID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUucmVSZW5kZXJLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e01hcFd9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtNYXBIfVxuICAgICAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXtpbnB1dFN0eWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkUHJldmlld0ltYWdlPlxuICAgICAgICAgICAgPC9QcmV2aWV3TWFwPlxuICAgICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluamVjdEludGwocG9seWZpbGwoQWRkTWFwU3R5bGVNb2RhbCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeTtcbiJdfQ==