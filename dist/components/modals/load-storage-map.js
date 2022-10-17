"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProviderSelect = void 0;

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

var _moment = _interopRequireDefault(require("moment"));

var _loadingDialog = _interopRequireDefault(require("./loading-dialog"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _icons = require("../common/icons");

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _localization = require("../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledProviderSection = _styledComponents["default"].div.attrs({
  className: 'provider-selection'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var StyledSpinner = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  span {\n    margin: 0 auto;\n  }\n"])));

var StyledVisualizationSection = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"])));

var StyledStorageHeader = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  font-size: 12px;\n  line-height: 14px;\n"])));

var StyledBackBtn = _styledComponents["default"].a(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 16px;\n  color: #3a414c;\n  cursor: pointer;\n\n  &:hover {\n    font-weight: 500;\n  }\n"])));

var StyledProviderVisSection = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1 1 auto;\n  background-color: #f8f8f9;\n  padding: 20px 24px;\n  min-height: 280px;\n\n  .title {\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 500;\n    margin-bottom: 16px;\n\n    span {\n      text-transform: capitalize;\n    }\n  }\n"])));

var StyledSeparator = _styledComponents["default"].hr(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  border: solid #bfbfbf;\n  border-width: 0 0 1px 0;\n  margin-bottom: 16px;\n"])));

var StyledVisualizationList = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  justify-content: space-between;\n"])));

var StyledVisualizationItem = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 0 0 auto;\n  width: 208px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 8px;\n  color: #3a414c;\n  cursor: pointer;\n  font-size: 12px;\n  line-height: 18px;\n\n  &:hover {\n    .vis_item-icon,\n    .vis_item-thumb,\n    .vis_item-description,\n    .vis_item-modification-date {\n      opacity: 1;\n    }\n  }\n\n  .vis_item-icon,\n  .vis_item-thumb,\n  .vis_item-description,\n  .vis_item-modification-date {\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n  }\n\n  .vis_item-icon {\n    position: relative;\n    flex: 0 0 108px;\n    background-color: #6a7484;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .vis_item-thumb {\n    position: relative;\n    flex: 0 0 108px;\n    background-size: cover;\n    background-position: center;\n    border-radius: 4px;\n  }\n\n  .vis_item-privacy {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 3px 6px;\n    border-radius: 4px 0;\n    background-color: rgba(58, 65, 76, 0.7);\n    color: #fff;\n    font-size: 11px;\n    line-height: 18px;\n  }\n\n  .vis_item-title {\n    margin-top: 16px;\n    font-weight: 500;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .vis_item-description {\n    flex: 1 1 auto;\n    margin-top: 8px;\n  }\n\n  .vis_item-modification-date {\n    margin-top: 16px;\n    flex: 1 0 auto;\n    color: #6a7484;\n    line-height: 15px;\n  }\n"])));

var MapIcon = function MapIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("div", props, props.children, /*#__PURE__*/_react["default"].createElement(_icons.Base, {
    height: "32px",
    viewBox: '0 0 16 16'
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#d3d8d6",
    d: "m13.6 11.572-3.2 2.1336v-9.2776l3.2-2.1336zm-12-7.144 3.2-2.1336v9.2776l-3.2 2.1336zm13.244 8.2376c0.2224-0.148 0.356-0.3984 0.356-0.6656v-11.2c0-0.2952-0.1624-0.5664-0.4224-0.7048-0.26-0.14-0.576-0.1248-0.8216 0.0392l-4.3128 2.876-3.5432-2.8352c-0.1208-0.0936-0.2952-0.1624-0.472-0.1688-0.1648-0.0064-0.348 0.0464-0.472 0.128l-4.8 3.2c-0.2224 0.1488-0.356 0.3984-0.356 0.6656v11.2c0 0.2952 0.1624 0.5664 0.4224 0.7056 0.1184 0.0632 0.248 0.0944 0.3776 0.0944 0.1552 0 0.3096-0.0448 0.444-0.1344l4.3128-2.876 3.5432 2.8352c0.1448 0.116 0.3216 0.1752 0.5 0.1752 0.1184 0 0.236-0.0248 0.3464-0.0784z"
  })));
};

var PrivacyBadge = function PrivacyBadge(_ref) {
  var privateMap = _ref.privateMap;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-privacy"
  }, privateMap ? 'Private' : 'Public');
};

var VisualizationItem = function VisualizationItem(_ref2) {
  var vis = _ref2.vis,
      onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledVisualizationItem, {
    onClick: onClick
  }, vis.thumbnail ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "vis_item-thumb",
    style: {
      backgroundImage: "url(".concat(vis.thumbnail, ")")
    }
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null) : /*#__PURE__*/_react["default"].createElement(MapIcon, {
    className: "vis_item-icon"
  }, vis.hasOwnProperty('privateMap') ? /*#__PURE__*/_react["default"].createElement(PrivacyBadge, {
    privateMap: vis.privateMap
  }) : null), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-title"
  }, vis.title), vis.description && vis.description.length && /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-description"
  }, vis.description), /*#__PURE__*/_react["default"].createElement("span", {
    className: "vis_item-modification-date"
  }, "Last modified ", _moment["default"].utc(vis.lastModification).fromNow()));
};

var ProviderSelect = function ProviderSelect(_ref3) {
  var _ref3$cloudProviders = _ref3.cloudProviders,
      cloudProviders = _ref3$cloudProviders === void 0 ? [] : _ref3$cloudProviders,
      _onSelect = _ref3.onSelect,
      onSetCloudProvider = _ref3.onSetCloudProvider,
      currentProvider = _ref3.currentProvider;
  return cloudProviders.length ? /*#__PURE__*/_react["default"].createElement(StyledProviderSection, null, cloudProviders.map(function (provider) {
    return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
      key: provider.name,
      onSelect: function onSelect() {
        return _onSelect(provider.name);
      },
      onSetCloudProvider: onSetCloudProvider,
      cloudProvider: provider,
      isSelected: provider.name === currentProvider,
      isConnected: Boolean(provider.getAccessToken && provider.getAccessToken())
    });
  })) : /*#__PURE__*/_react["default"].createElement("p", null, "No storage provider available");
};

exports.ProviderSelect = ProviderSelect;

function LoadStorageMapFactory() {
  var LoadStorageMap = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LoadStorageMap, _Component);

    var _super = _createSuper(LoadStorageMap);

    function LoadStorageMap() {
      var _this;

      (0, _classCallCheck2["default"])(this, LoadStorageMap);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showProviderSelect: true
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getProvider", function () {
        var _this$props = _this.props,
            currentProvider = _this$props.currentProvider,
            cloudProviders = _this$props.cloudProviders;
        return (cloudProviders || []).find(function (p) {
          return p.name === currentProvider;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_clickBack", function () {
        _this.setState({
          showProviderSelect: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectProvider", function (providerName) {
        _this.props.onSetCloudProvider(providerName);

        var provider = (_this.props.cloudProviders || []).find(function (p) {
          return p.name === providerName;
        });

        _this.props.getSavedMaps(provider);

        _this.setState({
          showProviderSelect: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(LoadStorageMap, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._getSavedMaps();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.currentProvider !== this.props.currentProvider) {
          this._getSavedMaps();
        }
      }
    }, {
      key: "_getSavedMaps",
      value: function _getSavedMaps() {
        var provider = this._getProvider();

        if (provider) {
          this.props.getSavedMaps(provider);
          this.setState({
            showProviderSelect: false
          });
        }
      }
    }, {
      key: "_onLoadCloudMap",
      value: function _onLoadCloudMap(provider, vis) {
        this.props.onLoadCloudMap({
          loadParams: vis.loadParams,
          provider: provider
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            visualizations = _this$props2.visualizations,
            cloudProviders = _this$props2.cloudProviders,
            currentProvider = _this$props2.currentProvider,
            isProviderLoading = _this$props2.isProviderLoading,
            onSetCloudProvider = _this$props2.onSetCloudProvider;

        var provider = this._getProvider();

        return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, this.state.showProviderSelect ? /*#__PURE__*/_react["default"].createElement(ProviderSelect, {
          onSelect: this._selectProvider,
          cloudProviders: cloudProviders,
          onSetCloudProvider: onSetCloudProvider,
          currentProvider: currentProvider
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isProviderLoading && /*#__PURE__*/_react["default"].createElement(StyledSpinner, null, /*#__PURE__*/_react["default"].createElement(_loadingDialog["default"], {
          size: 64
        })), !isProviderLoading && visualizations && /*#__PURE__*/_react["default"].createElement(StyledVisualizationSection, null, /*#__PURE__*/_react["default"].createElement(StyledStorageHeader, null, /*#__PURE__*/_react["default"].createElement(StyledBackBtn, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
          link: true,
          onClick: this._clickBack
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, {
          height: "14px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.loadStorageMap.back'
        }))), provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: provider.getManagementUrl(),
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.loadStorageMap.back',
          values: {
            displayName: provider.displayName
          }
        }))), /*#__PURE__*/_react["default"].createElement(StyledProviderVisSection, null, /*#__PURE__*/_react["default"].createElement("span", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement("span", null, currentProvider), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.loadStorageMap.storageMaps'
        })), /*#__PURE__*/_react["default"].createElement(StyledSeparator, null), /*#__PURE__*/_react["default"].createElement(StyledVisualizationList, null, visualizations.length ? visualizations.map(function (vis) {
          return /*#__PURE__*/_react["default"].createElement(VisualizationItem, {
            key: vis.id,
            onClick: function onClick() {
              return _this2._onLoadCloudMap(provider, vis);
            },
            vis: vis
          });
        }) : /*#__PURE__*/_react["default"].createElement("div", {
          className: "visualization-list__message"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.loadStorageMap.noSavedMaps'
        })))))));
      }
    }]);
    return LoadStorageMap;
  }(_react.Component);

  return LoadStorageMap;
}

var _default = LoadStorageMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9sb2FkLXN0b3JhZ2UtbWFwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFByb3ZpZGVyU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiU3R5bGVkU3Bpbm5lciIsIlN0eWxlZFZpc3VhbGl6YXRpb25TZWN0aW9uIiwiU3R5bGVkU3RvcmFnZUhlYWRlciIsIlN0eWxlZEJhY2tCdG4iLCJhIiwiU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uIiwiU3R5bGVkU2VwYXJhdG9yIiwiaHIiLCJTdHlsZWRWaXN1YWxpemF0aW9uTGlzdCIsIlN0eWxlZFZpc3VhbGl6YXRpb25JdGVtIiwiTWFwSWNvbiIsInByb3BzIiwiY2hpbGRyZW4iLCJQcml2YWN5QmFkZ2UiLCJwcml2YXRlTWFwIiwiVmlzdWFsaXphdGlvbkl0ZW0iLCJ2aXMiLCJvbkNsaWNrIiwidGh1bWJuYWlsIiwiYmFja2dyb3VuZEltYWdlIiwiaGFzT3duUHJvcGVydHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwibW9tZW50IiwidXRjIiwibGFzdE1vZGlmaWNhdGlvbiIsImZyb21Ob3ciLCJQcm92aWRlclNlbGVjdCIsImNsb3VkUHJvdmlkZXJzIiwib25TZWxlY3QiLCJvblNldENsb3VkUHJvdmlkZXIiLCJjdXJyZW50UHJvdmlkZXIiLCJtYXAiLCJwcm92aWRlciIsIm5hbWUiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJMb2FkU3RvcmFnZU1hcEZhY3RvcnkiLCJMb2FkU3RvcmFnZU1hcCIsInNob3dQcm92aWRlclNlbGVjdCIsImZpbmQiLCJwIiwic2V0U3RhdGUiLCJwcm92aWRlck5hbWUiLCJnZXRTYXZlZE1hcHMiLCJfZ2V0U2F2ZWRNYXBzIiwicHJldlByb3BzIiwiX2dldFByb3ZpZGVyIiwib25Mb2FkQ2xvdWRNYXAiLCJsb2FkUGFyYW1zIiwidmlzdWFsaXphdGlvbnMiLCJpc1Byb3ZpZGVyTG9hZGluZyIsInN0YXRlIiwiX3NlbGVjdFByb3ZpZGVyIiwiX2NsaWNrQmFjayIsImdldE1hbmFnZW1lbnRVcmwiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXlOYW1lIiwiaWQiLCJfb25Mb2FkQ2xvdWRNYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRTtBQURrQyxDQUFqQixDQUFILDBHQUEzQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUdKLDZCQUFPQyxHQUFWLHFKQUFuQjs7QUFPQSxJQUFNSSwwQkFBMEIsR0FBR0wsNkJBQU9DLEdBQVYsZ0tBQWhDOztBQU1BLElBQU1LLG1CQUFtQixHQUFHTiw2QkFBT0MsR0FBVixpUUFBekI7O0FBVUEsSUFBTU0sYUFBYSxHQUFHUCw2QkFBT1EsQ0FBVixvTUFBbkI7O0FBVUEsSUFBTUMsd0JBQXdCLEdBQUdULDZCQUFPQyxHQUFWLGtXQUE5Qjs7QUFrQkEsSUFBTVMsZUFBZSxHQUFHViw2QkFBT1csRUFBVix3S0FBckI7O0FBTUEsSUFBTUMsdUJBQXVCLEdBQUdaLDZCQUFPQyxHQUFWLGdNQUE3Qjs7QUFPQSxJQUFNWSx1QkFBdUIsR0FBR2IsNkJBQU9DLEdBQVYsK2lEQUE3Qjs7QUFnRkEsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsS0FBSyxFQUFJO0FBQ3ZCLHNCQUNFLHVDQUFTQSxLQUFULEVBQ0dBLEtBQUssQ0FBQ0MsUUFEVCxlQUVFLGdDQUFDLFdBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBQyxNQUFiO0FBQW9CLElBQUEsT0FBTyxFQUFFO0FBQTdCLGtCQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUMsU0FEUDtBQUVFLElBQUEsQ0FBQyxFQUFD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LEdBQUcsRUFBRUEsR0FBRyxDQUFDMkMsRUFEWDtBQUVFLFlBQUEsT0FBTyxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDQyxlQUFMLENBQXFCMUIsUUFBckIsRUFBK0JsQixHQUEvQixDQUFOO0FBQUEsYUFGWDtBQUdFLFlBQUEsR0FBRyxFQUFFQTtBQUhQLFlBRG9CO0FBQUEsU0FBdEIsQ0FERCxnQkFTQztBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsd0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsVUFBQSxFQUFFLEVBQUU7QUFBdEIsVUFERixDQVZKLENBTkYsQ0F2QkYsQ0FQSixDQWJKLENBREY7QUF3RUQ7QUFsSTRCO0FBQUE7QUFBQSxJQUNGNkMsZ0JBREU7O0FBb0kvQixTQUFPdEIsY0FBUDtBQUNEOztlQUVjRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gJy4vbG9hZGluZy1kaWFsb2cnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcbmltcG9ydCB7QmFzZSwgQXJyb3dMZWZ0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgUHJvdmlkZXJNb2RhbENvbnRhaW5lciBmcm9tICcuL3Byb3ZpZGVyLW1vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmNvbnN0IFN0eWxlZFByb3ZpZGVyU2VjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdwcm92aWRlci1zZWxlY3Rpb24nXG59KWBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHNwYW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRWaXN1YWxpemF0aW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuYDtcblxuY29uc3QgU3R5bGVkU3RvcmFnZUhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEJhY2tCdG4gPSBzdHlsZWQuYWBcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6ICMzYTQxNGM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQcm92aWRlclZpc1NlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOTtcbiAgcGFkZGluZzogMjBweCAyNHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBzcGFuIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkU2VwYXJhdG9yID0gc3R5bGVkLmhyYFxuICBib3JkZXI6IHNvbGlkICNiZmJmYmY7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuYDtcblxuY29uc3QgU3R5bGVkVmlzdWFsaXphdGlvbkxpc3QgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgU3R5bGVkVmlzdWFsaXphdGlvbkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDIwOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgY29sb3I6ICMzYTQxNGM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcblxuICAmOmhvdmVyIHtcbiAgICAudmlzX2l0ZW0taWNvbixcbiAgICAudmlzX2l0ZW0tdGh1bWIsXG4gICAgLnZpc19pdGVtLWRlc2NyaXB0aW9uLFxuICAgIC52aXNfaXRlbS1tb2RpZmljYXRpb24tZGF0ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC52aXNfaXRlbS1pY29uLFxuICAudmlzX2l0ZW0tdGh1bWIsXG4gIC52aXNfaXRlbS1kZXNjcmlwdGlvbixcbiAgLnZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XG4gIH1cblxuICAudmlzX2l0ZW0taWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDAgMCAxMDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE3NDg0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC52aXNfaXRlbS10aHVtYiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDAgMCAxMDhweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICAudmlzX2l0ZW0tcHJpdmFjeSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNjUsIDc2LCAwLjcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuXG4gIC52aXNfaXRlbS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuXG4gIC52aXNfaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgLnZpc19pdGVtLW1vZGlmaWNhdGlvbi1kYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGNvbG9yOiAjNmE3NDg0O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG5gO1xuXG5jb25zdCBNYXBJY29uID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnByb3BzfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDxCYXNlIGhlaWdodD1cIjMycHhcIiB2aWV3Qm94PXsnMCAwIDE2IDE2J30+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZmlsbD1cIiNkM2Q4ZDZcIlxuICAgICAgICAgIGQ9XCJtMTMuNiAxMS41NzItMy4yIDIuMTMzNnYtOS4yNzc2bDMuMi0yLjEzMzZ6bS0xMi03LjE0NCAzLjItMi4xMzM2djkuMjc3NmwtMy4yIDIuMTMzNnptMTMuMjQ0IDguMjM3NmMwLjIyMjQtMC4xNDggMC4zNTYtMC4zOTg0IDAuMzU2LTAuNjY1NnYtMTEuMmMwLTAuMjk1Mi0wLjE2MjQtMC41NjY0LTAuNDIyNC0wLjcwNDgtMC4yNi0wLjE0LTAuNTc2LTAuMTI0OC0wLjgyMTYgMC4wMzkybC00LjMxMjggMi44NzYtMy41NDMyLTIuODM1MmMtMC4xMjA4LTAuMDkzNi0wLjI5NTItMC4xNjI0LTAuNDcyLTAuMTY4OC0wLjE2NDgtMC4wMDY0LTAuMzQ4IDAuMDQ2NC0wLjQ3MiAwLjEyOGwtNC44IDMuMmMtMC4yMjI0IDAuMTQ4OC0wLjM1NiAwLjM5ODQtMC4zNTYgMC42NjU2djExLjJjMCAwLjI5NTIgMC4xNjI0IDAuNTY2NCAwLjQyMjQgMC43MDU2IDAuMTE4NCAwLjA2MzIgMC4yNDggMC4wOTQ0IDAuMzc3NiAwLjA5NDQgMC4xNTUyIDAgMC4zMDk2LTAuMDQ0OCAwLjQ0NC0wLjEzNDRsNC4zMTI4LTIuODc2IDMuNTQzMiAyLjgzNTJjMC4xNDQ4IDAuMTE2IDAuMzIxNiAwLjE3NTIgMC41IDAuMTc1MiAwLjExODQgMCAwLjIzNi0wLjAyNDggMC4zNDY0LTAuMDc4NHpcIlxuICAgICAgICAvPlxuICAgICAgPC9CYXNlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgUHJpdmFjeUJhZGdlID0gKHtwcml2YXRlTWFwfSkgPT4gKFxuICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1wcml2YWN5XCI+e3ByaXZhdGVNYXAgPyAnUHJpdmF0ZScgOiAnUHVibGljJ308L3NwYW4+XG4pO1xuXG5jb25zdCBWaXN1YWxpemF0aW9uSXRlbSA9ICh7dmlzLCBvbkNsaWNrfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRWaXN1YWxpemF0aW9uSXRlbSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHt2aXMudGh1bWJuYWlsID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpc19pdGVtLXRodW1iXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2aXMudGh1bWJuYWlsfSlgfX0+XG4gICAgICAgICAge3Zpcy5oYXNPd25Qcm9wZXJ0eSgncHJpdmF0ZU1hcCcpID8gPFByaXZhY3lCYWRnZSBwcml2YXRlTWFwPXt2aXMucHJpdmF0ZU1hcH0gLz4gOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNYXBJY29uIGNsYXNzTmFtZT1cInZpc19pdGVtLWljb25cIj5cbiAgICAgICAgICB7dmlzLmhhc093blByb3BlcnR5KCdwcml2YXRlTWFwJykgPyA8UHJpdmFjeUJhZGdlIHByaXZhdGVNYXA9e3Zpcy5wcml2YXRlTWFwfSAvPiA6IG51bGx9XG4gICAgICAgIDwvTWFwSWNvbj5cbiAgICAgICl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS10aXRsZVwiPnt2aXMudGl0bGV9PC9zcGFuPlxuICAgICAge3Zpcy5kZXNjcmlwdGlvbiAmJiB2aXMuZGVzY3JpcHRpb24ubGVuZ3RoICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzX2l0ZW0tZGVzY3JpcHRpb25cIj57dmlzLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXNfaXRlbS1tb2RpZmljYXRpb24tZGF0ZVwiPlxuICAgICAgICBMYXN0IG1vZGlmaWVkIHttb21lbnQudXRjKHZpcy5sYXN0TW9kaWZpY2F0aW9uKS5mcm9tTm93KCl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9TdHlsZWRWaXN1YWxpemF0aW9uSXRlbT5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlclNlbGVjdCA9ICh7XG4gIGNsb3VkUHJvdmlkZXJzID0gW10sXG4gIG9uU2VsZWN0LFxuICBvblNldENsb3VkUHJvdmlkZXIsXG4gIGN1cnJlbnRQcm92aWRlclxufSkgPT5cbiAgY2xvdWRQcm92aWRlcnMubGVuZ3RoID8gKFxuICAgIDxTdHlsZWRQcm92aWRlclNlY3Rpb24+XG4gICAgICB7Y2xvdWRQcm92aWRlcnMubWFwKHByb3ZpZGVyID0+IChcbiAgICAgICAgPENsb3VkVGlsZVxuICAgICAgICAgIGtleT17cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25TZWxlY3QocHJvdmlkZXIubmFtZSl9XG4gICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgY2xvdWRQcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgaXNTZWxlY3RlZD17cHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxuICAgICAgICAgIGlzQ29ubmVjdGVkPXtCb29sZWFuKHByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuICYmIHByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuKCkpfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9TdHlsZWRQcm92aWRlclNlY3Rpb24+XG4gICkgOiAoXG4gICAgPHA+Tm8gc3RvcmFnZSBwcm92aWRlciBhdmFpbGFibGU8L3A+XG4gICk7XG5cbmZ1bmN0aW9uIExvYWRTdG9yYWdlTWFwRmFjdG9yeSgpIHtcbiAgY2xhc3MgTG9hZFN0b3JhZ2VNYXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgc2hvd1Byb3ZpZGVyU2VsZWN0OiB0cnVlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fZ2V0U2F2ZWRNYXBzKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHByZXZQcm9wcy5jdXJyZW50UHJvdmlkZXIgIT09IHRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuX2dldFNhdmVkTWFwcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRQcm92aWRlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtjdXJyZW50UHJvdmlkZXIsIGNsb3VkUHJvdmlkZXJzfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKGNsb3VkUHJvdmlkZXJzIHx8IFtdKS5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xuICAgIH07XG5cbiAgICBfZ2V0U2F2ZWRNYXBzKCkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLl9nZXRQcm92aWRlcigpO1xuICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0U2F2ZWRNYXBzKHByb3ZpZGVyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1Byb3ZpZGVyU2VsZWN0OiBmYWxzZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9vbkxvYWRDbG91ZE1hcChwcm92aWRlciwgdmlzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9hZENsb3VkTWFwKHtcbiAgICAgICAgbG9hZFBhcmFtczogdmlzLmxvYWRQYXJhbXMsXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2xpY2tCYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1Byb3ZpZGVyU2VsZWN0OiB0cnVlfSk7XG4gICAgfTtcblxuICAgIF9zZWxlY3RQcm92aWRlciA9IHByb3ZpZGVyTmFtZSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uU2V0Q2xvdWRQcm92aWRlcihwcm92aWRlck5hbWUpO1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSAodGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVycyB8fCBbXSkuZmluZChwID0+IHAubmFtZSA9PT0gcHJvdmlkZXJOYW1lKTtcbiAgICAgIHRoaXMucHJvcHMuZ2V0U2F2ZWRNYXBzKHByb3ZpZGVyKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQcm92aWRlclNlbGVjdDogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aXN1YWxpemF0aW9ucyxcbiAgICAgICAgY2xvdWRQcm92aWRlcnMsXG4gICAgICAgIGN1cnJlbnRQcm92aWRlcixcbiAgICAgICAgaXNQcm92aWRlckxvYWRpbmcsXG4gICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlclxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5fZ2V0UHJvdmlkZXIoKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcbiAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cbiAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UHJvdmlkZXJTZWxlY3QgPyAoXG4gICAgICAgICAgICA8UHJvdmlkZXJTZWxlY3RcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuX3NlbGVjdFByb3ZpZGVyfVxuICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XG4gICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHtpc1Byb3ZpZGVyTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZFNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8TG9hZGluZ0RpYWxvZyBzaXplPXs2NH0gLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFNwaW5uZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshaXNQcm92aWRlckxvYWRpbmcgJiYgdmlzdWFsaXphdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRWaXN1YWxpemF0aW9uU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRTdG9yYWdlSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQmFja0J0bj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxpbmsgb25DbGljaz17dGhpcy5fY2xpY2tCYWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmxvYWRTdG9yYWdlTWFwLmJhY2snfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEJhY2tCdG4+XG4gICAgICAgICAgICAgICAgICAgIHtwcm92aWRlci5nZXRNYW5hZ2VtZW50VXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwubG9hZFN0b3JhZ2VNYXAuYmFjayd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e2Rpc3BsYXlOYW1lOiBwcm92aWRlci5kaXNwbGF5TmFtZX19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkU3RvcmFnZUhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRQcm92aWRlclZpc1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2N1cnJlbnRQcm92aWRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5sb2FkU3RvcmFnZU1hcC5zdG9yYWdlTWFwcyd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFNlcGFyYXRvciAvPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVmlzdWFsaXphdGlvbkxpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAge3Zpc3VhbGl6YXRpb25zLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc3VhbGl6YXRpb25zLm1hcCh2aXMgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VmlzdWFsaXphdGlvbkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Zpcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLl9vbkxvYWRDbG91ZE1hcChwcm92aWRlciwgdmlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXM9e3Zpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzdWFsaXphdGlvbi1saXN0X19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwubG9hZFN0b3JhZ2VNYXAubm9TYXZlZE1hcHMnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRWaXN1YWxpemF0aW9uTGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkUHJvdmlkZXJWaXNTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVmlzdWFsaXphdGlvblNlY3Rpb24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1Byb3ZpZGVyTW9kYWxDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gTG9hZFN0b3JhZ2VNYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRTdG9yYWdlTWFwRmFjdG9yeTtcbiJdfQ==