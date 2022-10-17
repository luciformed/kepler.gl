"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShareMapUrlModalFactory;
exports.SharingUrl = exports.StyleSharingUrl = exports.StyledInputLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _base = require("../../styles/base");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _statusPanel = _interopRequireDefault(require("./status-panel"));

var _localization = require("../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledInputLabel = _styledComponents["default"].label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  color: ", ";\n  letter-spacing: 0.2px;\n"])), function (props) {
  return props.theme.textColorLT;
});

exports.StyledInputLabel = StyledInputLabel;

var StyleSharingUrl = _styledComponents["default"].div.attrs({
  className: 'sharing-url'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 14px;\n  flex-direction: column;\n\n  input {\n    border-right: 0;\n  }\n\n  .button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"])));

exports.StyleSharingUrl = StyleSharingUrl;

var SharingUrl = function SharingUrl(_ref) {
  var url = _ref.url,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(StyleSharingUrl, null, /*#__PURE__*/_react["default"].createElement(StyledInputLabel, null, message), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    type: "text",
    value: url,
    readOnly: true,
    selected: true
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: url,
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, copied ? 'Copied!' : 'Copy'))));
};

exports.SharingUrl = SharingUrl;

var nop = function nop() {};

var StyledShareMapModal = (0, _styledComponents["default"])(_styledComponents2.StyledModalContent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 72px 40px 72px;\n  margin: 0 -72px -40px -72px;\n"])));

var StyledInnerDiv = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 500px;\n"])));

function ShareMapUrlModalFactory() {
  var ShareMapUrlModal = function ShareMapUrlModal(_ref2) {
    var isProviderLoading = _ref2.isProviderLoading,
        isReady = _ref2.isReady,
        onExport = _ref2.onExport,
        cloudProviders = _ref2.cloudProviders,
        currentProvider = _ref2.currentProvider,
        providerError = _ref2.providerError,
        successInfo = _ref2.successInfo,
        onSetCloudProvider = _ref2.onSetCloudProvider,
        onUpdateImageSetting = _ref2.onUpdateImageSetting,
        cleanupExportImage = _ref2.cleanupExportImage;
    var shareUrl = successInfo.shareUrl,
        folderLink = successInfo.folderLink;
    var provider = currentProvider ? cloudProviders.find(function (p) {
      return p.name === currentProvider;
    }) : null;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: _base.themeLT
    }, /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
      onSetCloudProvider: onSetCloudProvider,
      cloudProviders: cloudProviders,
      currentProvider: currentProvider
    }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledShareMapModal, {
      className: "export-cloud-modal"
    }, /*#__PURE__*/_react["default"].createElement(StyledInnerDiv, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareUriTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareUriSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title warning"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareDisclaimer'
    })))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      disabled: isProviderLoading
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.cloudTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.cloudSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, cloudProviders.map(function (cloudProvider) {
      return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
        key: cloudProvider.name,
        onSelect: function onSelect() {
          return onExport(cloudProvider);
        },
        onSetCloudProvider: onSetCloudProvider,
        cloudProvider: cloudProvider,
        actionName: "Upload",
        isSelected: cloudProvider.name === currentProvider,
        isConnected: Boolean(cloudProvider.getAccessToken()),
        isReady: isReady
      });
    }))), isProviderLoading || providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
      isLoading: isProviderLoading,
      error: providerError,
      providerIcon: provider && provider.icon
    }) : null, shareUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, "Share Url")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(SharingUrl, {
      key: 0,
      url: shareUrl
    }), provider && folderLink && /*#__PURE__*/_react["default"].createElement("a", {
      key: 1,
      href: folderLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: 'underline'
      }
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.gotoPage',
      values: {
        currentProvider: currentProvider
      }
    })))))))));
  };

  ShareMapUrlModal.defaultProps = {
    isProviderLoading: false,
    onExport: nop,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    successInfo: {},
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  };
  return ShareMapUrlModal;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zaGFyZS1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSW5wdXRMYWJlbCIsInN0eWxlZCIsImxhYmVsIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVTaGFyaW5nVXJsIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTaGFyaW5nVXJsIiwidXJsIiwibWVzc2FnZSIsImNvcGllZCIsInNldENvcHkiLCJkaXNwbGF5Iiwibm9wIiwiU3R5bGVkU2hhcmVNYXBNb2RhbCIsIlN0eWxlZE1vZGFsQ29udGVudCIsIlN0eWxlZElubmVyRGl2IiwiU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnkiLCJTaGFyZU1hcFVybE1vZGFsIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc1JlYWR5Iiwib25FeHBvcnQiLCJjbG91ZFByb3ZpZGVycyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyRXJyb3IiLCJzdWNjZXNzSW5mbyIsIm9uU2V0Q2xvdWRQcm92aWRlciIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwic2hhcmVVcmwiLCJmb2xkZXJMaW5rIiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJ0aGVtZUxUIiwibWFwIiwiY2xvdWRQcm92aWRlciIsIkJvb2xlYW4iLCJnZXRBY2Nlc3NUb2tlbiIsImljb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBR0MsNkJBQU9DLEtBQVYsdUpBRWxCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQUZhLENBQXRCOzs7O0FBTUEs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QWlCLEVBQUUsS0FEVztBQUU5QkUsSUFBQUEsUUFBUSxFQUFFUixHQUZvQjtBQUc5QlMsSUFBQUEsY0FBYyxFQUFFLEVBSGM7QUFJOUJDLElBQUFBLGVBQWUsRUFBRSxJQUphO0FBSzlCQyxJQUFBQSxhQUFhLEVBQUUsSUFMZTtBQU05QkMsSUFBQUEsV0FBVyxFQUFFLEVBTmlCO0FBTzlCQyxJQUFBQSxrQkFBa0IsRUFBRWIsR0FQVTtBQVE5QmMsSUFBQUEsb0JBQW9CLEVBQUVkO0FBUlEsR0FBaEM7QUFXQSxTQUFPSyxnQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHt0aGVtZUxUfSBmcm9tICdzdHlsZXMvYmFzZSc7XG5pbXBvcnQgSW1hZ2VNb2RhbENvbnRhaW5lciBmcm9tICcuL2ltYWdlLW1vZGFsLWNvbnRhaW5lcic7XG5pbXBvcnQgUHJvdmlkZXJNb2RhbENvbnRhaW5lciBmcm9tICcuL3Byb3ZpZGVyLW1vZGFsLWNvbnRhaW5lcic7XG5cbmltcG9ydCB7XG4gIFN0eWxlZE1vZGFsQ29udGVudCxcbiAgU3R5bGVkRXhwb3J0U2VjdGlvbixcbiAgSW5wdXRMaWdodCxcbiAgQnV0dG9uXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcbmltcG9ydCBTdGF0dXNQYW5lbCBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlU2hhcmluZ1VybCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaGFyaW5nLXVybCdcbn0pYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBpbnB1dCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2hhcmluZ1VybCA9ICh7dXJsLCBtZXNzYWdlID0gJyd9KSA9PiB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxTdHlsZVNoYXJpbmdVcmw+XG4gICAgICA8U3R5bGVkSW5wdXRMYWJlbD57bWVzc2FnZX08L1N0eWxlZElucHV0TGFiZWw+XG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgIDxJbnB1dExpZ2h0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VybH0gcmVhZE9ubHkgc2VsZWN0ZWQgLz5cbiAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt1cmx9IG9uQ29weT17KCkgPT4gc2V0Q29weSh0cnVlKX0+XG4gICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjgwcHhcIj57Y29waWVkID8gJ0NvcGllZCEnIDogJ0NvcHknfTwvQnV0dG9uPlxuICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVTaGFyaW5nVXJsPlxuICApO1xufTtcbmNvbnN0IG5vcCA9ICgpID0+IHt9O1xuXG5jb25zdCBTdHlsZWRTaGFyZU1hcE1vZGFsID0gc3R5bGVkKFN0eWxlZE1vZGFsQ29udGVudClgXG4gIHBhZGRpbmc6IDI0cHggNzJweCA0MHB4IDcycHg7XG4gIG1hcmdpbjogMCAtNzJweCAtNDBweCAtNzJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZElubmVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogNTAwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZU1hcFVybE1vZGFsRmFjdG9yeSgpIHtcbiAgY29uc3QgU2hhcmVNYXBVcmxNb2RhbCA9ICh7XG4gICAgaXNQcm92aWRlckxvYWRpbmcsXG4gICAgaXNSZWFkeSxcbiAgICBvbkV4cG9ydCxcbiAgICBjbG91ZFByb3ZpZGVycyxcbiAgICBjdXJyZW50UHJvdmlkZXIsXG4gICAgcHJvdmlkZXJFcnJvcixcbiAgICBzdWNjZXNzSW5mbyxcbiAgICBvblNldENsb3VkUHJvdmlkZXIsXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmcsXG4gICAgY2xlYW51cEV4cG9ydEltYWdlXG4gIH0pID0+IHtcbiAgICBjb25zdCB7c2hhcmVVcmwsIGZvbGRlckxpbmt9ID0gc3VjY2Vzc0luZm87XG4gICAgY29uc3QgcHJvdmlkZXIgPSBjdXJyZW50UHJvdmlkZXIgPyBjbG91ZFByb3ZpZGVycy5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWVMVH0+XG4gICAgICAgIDxQcm92aWRlck1vZGFsQ29udGFpbmVyXG4gICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxuICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgY2xlYW51cEV4cG9ydEltYWdlPXtjbGVhbnVwRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0eWxlZFNoYXJlTWFwTW9kYWwgY2xhc3NOYW1lPVwiZXhwb3J0LWNsb3VkLW1vZGFsXCI+XG4gICAgICAgICAgICAgIDxTdHlsZWRJbm5lckRpdj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuc2hhcmVVcmlUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5zaGFyZVVyaVN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgd2FybmluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuc2hhcmVEaXNjbGFpbWVyJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gZGlzYWJsZWQ9e2lzUHJvdmlkZXJMb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2hhcmVNYXAuY2xvdWRUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5jbG91ZFN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjbG91ZFByb3ZpZGVycy5tYXAoY2xvdWRQcm92aWRlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENsb3VkVGlsZVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbG91ZFByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25FeHBvcnQoY2xvdWRQcm92aWRlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e2Nsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPVwiVXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2Nsb3VkUHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0ZWQ9e0Jvb2xlYW4oY2xvdWRQcm92aWRlci5nZXRBY2Nlc3NUb2tlbigpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVhZHk9e2lzUmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nIHx8IHByb3ZpZGVyRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgICA8U3RhdHVzUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc1Byb3ZpZGVyTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3ZpZGVyRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWNvbj17cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge3NoYXJlVXJsICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlIFVybDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2hhcmluZ1VybCBrZXk9ezB9IHVybD17c2hhcmVVcmx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVyICYmIGZvbGRlckxpbmsgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtmb2xkZXJMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnbW9kYWwuc2hhcmVNYXAuZ290b1BhZ2UnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e2N1cnJlbnRQcm92aWRlcn19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbm5lckRpdj5cbiAgICAgICAgICAgIDwvU3R5bGVkU2hhcmVNYXBNb2RhbD5cbiAgICAgICAgICA8L0ltYWdlTW9kYWxDb250YWluZXI+XG4gICAgICAgIDwvUHJvdmlkZXJNb2RhbENvbnRhaW5lcj5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApO1xuICB9O1xuXG4gIFNoYXJlTWFwVXJsTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICBvbkV4cG9ydDogbm9wLFxuICAgIGNsb3VkUHJvdmlkZXJzOiBbXSxcbiAgICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gICAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgICBzdWNjZXNzSW5mbzoge30sXG4gICAgb25TZXRDbG91ZFByb3ZpZGVyOiBub3AsXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IG5vcFxuICB9O1xuXG4gIHJldHVybiBTaGFyZU1hcFVybE1vZGFsO1xufVxuIl19