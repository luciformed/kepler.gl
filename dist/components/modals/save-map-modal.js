"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MapInfoPanel = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _statusPanel = _interopRequireWildcard(require("./status-panel"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _localization = require("../../localization");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** @typedef {import('./save-map-modal').SaveMapModalProps} SaveMapModalProps */
var StyledSaveMapModal = _styledComponents["default"].div.attrs({
  className: 'save-map-modal'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .save-map-modal-content {\n    min-height: 400px;\n    flex-direction: column;\n  }\n\n  .description {\n    width: 300px;\n  }\n\n  .image-preview-panel {\n    width: 300px;\n\n    .image-preview {\n      padding: 0;\n    }\n  }\n\n  .map-info-panel {\n    flex-direction: column;\n  }\n\n  .save-map-modal-description {\n    .modal-section-subtitle {\n      margin-left: 6px;\n    }\n  }\n"])));

var nop = function nop(_) {};

var MapInfoPanel = function MapInfoPanel(_ref) {
  var _ref$mapInfo = _ref.mapInfo,
      mapInfo = _ref$mapInfo === void 0 ? {
    description: '',
    title: ''
  } : _ref$mapInfo,
      characterLimits = _ref.characterLimits,
      onChangeInput = _ref.onChangeInput;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection map-info-panel"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, {
    className: "save-map-modal-name"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Name*"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    id: "map-title",
    type: "text",
    value: mapInfo.title,
    onChange: function onChange(e) {
      return onChangeInput('title', e);
    },
    placeholder: "Type map title"
  }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "save-map-modal-description",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-subtitle"
  }, "(optional)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.TextAreaLight, {
    rows: "3",
    id: "map-description",
    style: {
      resize: 'none'
    },
    value: mapInfo.description,
    onChange: function onChange(e) {
      return onChangeInput('description', e);
    },
    placeholder: "Type map description"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalInputFootnote, {
    className: "save-map-modal-description__footnote",
    error: characterLimits.description && mapInfo.description.length > characterLimits.description
  }, mapInfo.description.length, "/", characterLimits.description || _defaultSettings.MAP_INFO_CHARACTER.description, ' ', "characters")));
};

exports.MapInfoPanel = MapInfoPanel;

function SaveMapModalFactory() {
  /**
   * @type {React.FunctionComponent<SaveMapModalProps>}
   */
  var SaveMapModal = function SaveMapModal(_ref2) {
    var mapInfo = _ref2.mapInfo,
        exportImage = _ref2.exportImage,
        _ref2$characterLimits = _ref2.characterLimits,
        characterLimits = _ref2$characterLimits === void 0 ? {} : _ref2$characterLimits,
        cloudProviders = _ref2.cloudProviders,
        isProviderLoading = _ref2.isProviderLoading,
        currentProvider = _ref2.currentProvider,
        providerError = _ref2.providerError,
        onSetCloudProvider = _ref2.onSetCloudProvider,
        onUpdateImageSetting = _ref2.onUpdateImageSetting,
        cleanupExportImage = _ref2.cleanupExportImage,
        onSetMapInfo = _ref2.onSetMapInfo;

    var onChangeInput = function onChangeInput(key, _ref3) {
      var value = _ref3.target.value;
      onSetMapInfo((0, _defineProperty2["default"])({}, key, value));
    };

    var provider = currentProvider ? cloudProviders.find(function (p) {
      return p.name === currentProvider;
    }) : null;
    return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
      onSetCloudProvider: onSetCloudProvider,
      cloudProviders: cloudProviders,
      currentProvider: currentProvider
    }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledSaveMapModal, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
      className: "save-map-modal-content"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      disabled: isProviderLoading
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.saveMap.title'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.saveMap.subtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, cloudProviders.map(function (cloudProvider) {
      return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
        key: cloudProvider.name,
        onSelect: function onSelect() {
          return onSetCloudProvider(cloudProvider.name);
        },
        onSetCloudProvider: onSetCloudProvider,
        cloudProvider: cloudProvider,
        isSelected: cloudProvider.name === currentProvider,
        isConnected: Boolean(cloudProvider.getAccessToken && cloudProvider.getAccessToken())
      });
    }))), provider && provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      style: {
        margin: '2px 0'
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement("a", {
      key: 1,
      href: provider.getManagementUrl(),
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: 'underline'
      }
    }, "Go to your Kepler.gl ", provider.displayName, " page"))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description image-preview-panel"
    }, /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
      exportImage: exportImage,
      width: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
      showDimension: false
    })), isProviderLoading ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection map-saving-animation"
    }, /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(MapInfoPanel, {
      mapInfo: mapInfo,
      characterLimits: characterLimits,
      onChangeInput: onChangeInput
    })), providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
      isLoading: false,
      error: providerError,
      providerIcon: provider && provider.icon
    }) : null))));
  };

  SaveMapModal.defaultProps = {
    characterLimits: _defaultSettings.MAP_INFO_CHARACTER,
    cloudProviders: [],
    providerError: null,
    isProviderLoading: false,
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  };
  return SaveMapModal;
}

var _default = SaveMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zYXZlLW1hcC1tb2RhbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTYXZlTWFwTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIm5vcCIsIl8iLCJNYXBJbmZvUGFuZWwiLCJtYXBJbmZvIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImNoYXJhY3RlckxpbWl0cyIsIm9uQ2hhbmdlSW5wdXQiLCJlIiwiZGlzcGxheSIsInJlc2l6ZSIsImxlbmd0aCIsIk1BUF9JTkZPX0NIQVJBQ1RFUiIsIlNhdmVNYXBNb2RhbEZhY3RvcnkiLCJTYXZlTWFwTW9kYWwiLCJleHBvcnRJbWFnZSIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlckVycm9yIiwib25TZXRDbG91ZFByb3ZpZGVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJvblNldE1hcEluZm8iLCJrZXkiLCJ2YWx1ZSIsInRhcmdldCIsInByb3ZpZGVyIiwiZmluZCIsInAiLCJuYW1lIiwibWFwIiwiY2xvdWRQcm92aWRlciIsIkJvb2xlYW4iLCJnZXRBY2Nlc3NUb2tlbiIsImdldE1hbmFnZW1lbnRVcmwiLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXlOYW1lIiwiTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04iLCJ3aWR0aCIsImljb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFRQTs7QUFDQTs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzFDQyxFQUFBQSxTQUFTLEVBQUU7QUFEK0IsQ0FBakIsQ0FBSCxpZUFB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TUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyw0QkFBRDtBQUFpQixNQUFBLElBQUksRUFBRVUsUUFBUSxJQUFJQSxRQUFRLENBQUNjO0FBQTVDLE1BREYsQ0FEZ0IsZ0JBS2hCLGdDQUFDLFlBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRXRDLE9BRFg7QUFFRSxNQUFBLGVBQWUsRUFBRUcsZUFGbkI7QUFHRSxNQUFBLGFBQWEsRUFBRUM7QUFIakIsTUFiSixDQXpDRixFQTZER1ksYUFBYSxnQkFDWixnQ0FBQyx1QkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFLEtBRGI7QUFFRSxNQUFBLEtBQUssRUFBRUEsYUFGVDtBQUdFLE1BQUEsWUFBWSxFQUFFUSxRQUFRLElBQUlBLFFBQVEsQ0FBQ2M7QUFIckMsTUFEWSxHQU1WLElBbkVOLENBREYsQ0FORixDQUxGLENBREY7QUFzRkQsR0F4R0Q7O0FBMEdBM0IsRUFBQUEsWUFBWSxDQUFDNEIsWUFBYixHQUE0QjtBQUMxQnBDLElBQUFBLGVBQWUsRUFBRU0sbUNBRFM7QUFFMUJJLElBQUFBLGNBQWMsRUFBRSxFQUZVO0FBRzFCRyxJQUFBQSxhQUFhLEVBQUUsSUFIVztBQUkxQkYsSUFBQUEsaUJBQWlCLEVBQUUsS0FKTztBQUsxQkcsSUFBQUEsa0JBQWtCLEVBQUVwQixHQUxNO0FBTTFCcUIsSUFBQUEsb0JBQW9CLEVBQUVyQjtBQU5JLEdBQTVCO0FBU0EsU0FBT2MsWUFBUDtBQUNEOztlQUVjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcbmltcG9ydCBJbWFnZU1vZGFsQ29udGFpbmVyIGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQcm92aWRlck1vZGFsQ29udGFpbmVyIGZyb20gJy4vcHJvdmlkZXItbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBTdGF0dXNQYW5lbCwge1VwbG9hZEFuaW1hdGlvbn0gZnJvbSAnLi9zdGF0dXMtcGFuZWwnO1xuXG5pbXBvcnQge01BUF9USFVNQk5BSUxfRElNRU5TSU9OLCBNQVBfSU5GT19DSEFSQUNURVJ9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxuICBJbnB1dExpZ2h0LFxuICBUZXh0QXJlYUxpZ2h0LFxuICBTdHlsZWRFeHBvcnRTZWN0aW9uLFxuICBTdHlsZWRNb2RhbFNlY3Rpb24sXG4gIFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZVxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW1hZ2VQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ltYWdlLXByZXZpZXcnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9zYXZlLW1hcC1tb2RhbCcpLlNhdmVNYXBNb2RhbFByb3BzfSBTYXZlTWFwTW9kYWxQcm9wcyAqL1xuXG5jb25zdCBTdHlsZWRTYXZlTWFwTW9kYWwgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2F2ZS1tYXAtbW9kYWwnXG59KWBcbiAgLnNhdmUtbWFwLW1vZGFsLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIC5pbWFnZS1wcmV2aWV3LXBhbmVsIHtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICAuaW1hZ2UtcHJldmlldyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtaW5mby1wYW5lbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zYXZlLW1hcC1tb2RhbC1kZXNjcmlwdGlvbiB7XG4gICAgLm1vZGFsLXNlY3Rpb24tc3VidGl0bGUge1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IG5vcCA9IF8gPT4ge307XG5cbmV4cG9ydCBjb25zdCBNYXBJbmZvUGFuZWwgPSAoe1xuICBtYXBJbmZvID0ge2Rlc2NyaXB0aW9uOiAnJywgdGl0bGU6ICcnfSxcbiAgY2hhcmFjdGVyTGltaXRzLFxuICBvbkNoYW5nZUlucHV0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1pbmZvLXBhbmVsXCI+XG4gICAgPFN0eWxlZE1vZGFsU2VjdGlvbiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5OYW1lKjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICBpZD1cIm1hcC10aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLnRpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ3RpdGxlJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCB0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1kZXNjcmlwdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPkRlc2NyaXB0aW9uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPihvcHRpb25hbCk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRBcmVhTGlnaHRcbiAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgaWQ9XCJtYXAtZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fVxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ2Rlc2NyaXB0aW9uJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCBkZXNjcmlwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTdHlsZWRNb2RhbElucHV0Rm9vdG5vdGVcbiAgICAgICAgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtZGVzY3JpcHRpb25fX2Zvb3Rub3RlXCJcbiAgICAgICAgZXJyb3I9e1xuICAgICAgICAgIGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiAmJiBtYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aCA+IGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHttYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aH0ve2NoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiB8fCBNQVBfSU5GT19DSEFSQUNURVIuZGVzY3JpcHRpb259eycgJ31cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9TdHlsZWRNb2RhbElucHV0Rm9vdG5vdGU+XG4gICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuZnVuY3Rpb24gU2F2ZU1hcE1vZGFsRmFjdG9yeSgpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxTYXZlTWFwTW9kYWxQcm9wcz59XG4gICAqL1xuICBjb25zdCBTYXZlTWFwTW9kYWwgPSAoe1xuICAgIG1hcEluZm8sXG4gICAgZXhwb3J0SW1hZ2UsXG4gICAgY2hhcmFjdGVyTGltaXRzID0ge30sXG4gICAgY2xvdWRQcm92aWRlcnMsXG4gICAgaXNQcm92aWRlckxvYWRpbmcsXG4gICAgY3VycmVudFByb3ZpZGVyLFxuICAgIHByb3ZpZGVyRXJyb3IsXG4gICAgb25TZXRDbG91ZFByb3ZpZGVyLFxuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nLFxuICAgIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgICBvblNldE1hcEluZm9cbiAgfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoa2V5LCB7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xuICAgICAgb25TZXRNYXBJbmZvKHtba2V5XTogdmFsdWV9KTtcbiAgICB9O1xuICAgIGNvbnN0IHByb3ZpZGVyID0gY3VycmVudFByb3ZpZGVyID8gY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKSA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcbiAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cbiAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICA+XG4gICAgICAgIDxJbWFnZU1vZGFsQ29udGFpbmVyXG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXtvblVwZGF0ZUltYWdlU2V0dGluZ31cbiAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e2NsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdHlsZWRTYXZlTWFwTW9kYWw+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gZGlzYWJsZWQ9e2lzUHJvdmlkZXJMb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc2F2ZU1hcC50aXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zYXZlTWFwLnN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7Y2xvdWRQcm92aWRlcnMubWFwKGNsb3VkUHJvdmlkZXIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2xvdWRUaWxlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjbG91ZFByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eygpID0+IG9uU2V0Q2xvdWRQcm92aWRlcihjbG91ZFByb3ZpZGVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e2Nsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17Y2xvdWRQcm92aWRlci5uYW1lID09PSBjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0ZWQ9e0Jvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuICYmIGNsb3VkUHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gc3R5bGU9e3ttYXJnaW46ICcycHggMCd9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgR28gdG8geW91ciBLZXBsZXIuZ2wge3Byb3ZpZGVyLmRpc3BsYXlOYW1lfSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBpbWFnZS1wcmV2aWV3LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXtleHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e01BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRofVxuICAgICAgICAgICAgICAgICAgICBzaG93RGltZW5zaW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb24gbWFwLXNhdmluZy1hbmltYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxNYXBJbmZvUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgbWFwSW5mbz17bWFwSW5mb31cbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyTGltaXRzPXtjaGFyYWN0ZXJMaW1pdHN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlSW5wdXQ9e29uQ2hhbmdlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAge3Byb3ZpZGVyRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPFN0YXR1c1BhbmVsXG4gICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3ZpZGVyRXJyb3J9XG4gICAgICAgICAgICAgICAgICBwcm92aWRlckljb249e3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8L1N0eWxlZFNhdmVNYXBNb2RhbD5cbiAgICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxuICAgICAgPC9Qcm92aWRlck1vZGFsQ29udGFpbmVyPlxuICAgICk7XG4gIH07XG5cbiAgU2F2ZU1hcE1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGFyYWN0ZXJMaW1pdHM6IE1BUF9JTkZPX0NIQVJBQ1RFUixcbiAgICBjbG91ZFByb3ZpZGVyczogW10sXG4gICAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2UsXG4gICAgb25TZXRDbG91ZFByb3ZpZGVyOiBub3AsXG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IG5vcFxuICB9O1xuXG4gIHJldHVybiBTYXZlTWFwTW9kYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVNYXBNb2RhbEZhY3Rvcnk7XG4iXX0=