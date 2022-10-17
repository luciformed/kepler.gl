"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ImageOptionList = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"])));

var ExportImageModalFactory = function ExportImageModalFactory() {
  /** @type {typeof import('./export-image-modal').ExportImageModal} */
  var ExportImageModal = function ExportImageModal(_ref) {
    var mapW = _ref.mapW,
        mapH = _ref.mapH,
        exportImage = _ref.exportImage,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        cleanupExportImage = _ref.cleanupExportImage,
        intl = _ref.intl;
    var legend = exportImage.legend,
        ratio = exportImage.ratio,
        resolution = exportImage.resolution;
    (0, _react.useEffect)(function () {
      onUpdateImageSetting({
        exporting: true
      });
      return cleanupExportImage;
    }, [onUpdateImageSetting, cleanupExportImage]);
    (0, _react.useEffect)(function () {
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        onUpdateImageSetting({
          mapH: mapH,
          mapW: mapW
        });
      }
    }, [mapH, mapW, exportImage, onUpdateImageSetting]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
      className: "export-image-modal"
    }, /*#__PURE__*/_react["default"].createElement(ImageOptionList, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_ratio"
    }, _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
      return !op.hidden;
    }).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: ratio === op.id,
        onClick: function onClick() {
          return onUpdateImageSetting({
            ratio: op.id
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: op.label
      }), ratio === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_resolution"
    }, _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: resolution === op.id,
        onClick: function onClick() {
          return op.available && onUpdateImageSetting({
            resolution: op.id
          });
        }
      }, op.label, resolution === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.mapLegendTitle'
    })), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      type: "checkbox",
      id: "add-map-legend",
      checked: legend,
      label: intl.formatMessage({
        id: 'modal.exportImage.mapLegendAdd'
      }),
      onChange: function onChange() {
        return onUpdateImageSetting({
          legend: !legend
        });
      }
    }))), /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
      exportImage: exportImage
    }));
  };

  return (0, _reactIntl.injectIntl)(ExportImageModal);
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnRJbWFnZU1vZGFsIiwibWFwVyIsIm1hcEgiLCJleHBvcnRJbWFnZSIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiaW50bCIsImxlZ2VuZCIsInJhdGlvIiwicmVzb2x1dGlvbiIsImV4cG9ydGluZyIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImZpbHRlciIsIm9wIiwiaGlkZGVuIiwibWFwIiwiaWQiLCJsYWJlbCIsIkVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TIiwiYXZhaWxhYmxlIiwiZm9ybWF0TWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLDZCQUFPQyxHQUFWLDZiQUFyQjs7QUF3QkEsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3BDO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQU9uQjtBQUFBLFFBTkpDLElBTUksUUFOSkEsSUFNSTtBQUFBLFFBTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLFFBSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLFFBSEpDLG9CQUdJLFFBSEpBLG9CQUdJO0FBQUEsUUFGSkMsa0JBRUksUUFGSkEsa0JBRUk7QUFBQSxRQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixRQUFPQyxNQUFQLEdBQW9DSixXQUFwQyxDQUFPSSxNQUFQO0FBQUEsUUFBZUMsS0FBZixHQUFvQ0wsV0FBcEMsQ0FBZUssS0FBZjtBQUFBLFFBQXNCQyxVQUF0QixHQUFv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Q0FuQkYsZUFxQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRTtBQUF0QixNQURGLENBREYsZUFJRSxnQ0FBQyxrQkFBRDtBQUNFLE1BQUEsSUFBSSxFQUFDLFVBRFA7QUFFRSxNQUFBLEVBQUUsRUFBQyxnQkFGTDtBQUdFLE1BQUEsT0FBTyxFQUFFVCxNQUhYO0FBSUUsTUFBQSxLQUFLLEVBQUVELElBQUksQ0FBQ2MsYUFBTCxDQUFtQjtBQUFDSixRQUFBQSxFQUFFLEVBQUU7QUFBTCxPQUFuQixDQUpUO0FBS0UsTUFBQSxRQUFRLEVBQUU7QUFBQSxlQUFNWixvQkFBb0IsQ0FBQztBQUFDRyxVQUFBQSxNQUFNLEVBQUUsQ0FBQ0E7QUFBVixTQUFELENBQTFCO0FBQUE7QUFMWixNQUpGLENBckNGLENBREYsZUFtREUsZ0NBQUMsd0JBQUQ7QUFBYyxNQUFBLFdBQVcsRUFBRUo7QUFBM0IsTUFuREYsQ0FERjtBQXVERCxHQWpGRDs7QUFtRkEsU0FBTywyQkFBV0gsZ0JBQVgsQ0FBUDtBQUNELENBdEZEOztlQXdGZUQsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEltYWdlUHJldmlldyBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3JztcblxuaW1wb3J0IHtFWFBPUlRfSU1HX1JBVElPX09QVElPTlMsIEVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTZWxlY3Rpb25CdXR0b24sIENoZWNrTWFya30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgSW1hZ2VPcHRpb25MaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyNTBweDtcblxuICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24ge1xuICAgIC5pbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xuICAvKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZXhwb3J0LWltYWdlLW1vZGFsJykuRXhwb3J0SW1hZ2VNb2RhbH0gKi9cbiAgY29uc3QgRXhwb3J0SW1hZ2VNb2RhbCA9ICh7XG4gICAgbWFwVyxcbiAgICBtYXBILFxuICAgIGV4cG9ydEltYWdlLFxuICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nLFxuICAgIGNsZWFudXBFeHBvcnRJbWFnZSxcbiAgICBpbnRsXG4gIH0pID0+IHtcbiAgICBjb25zdCB7bGVnZW5kLCByYXRpbywgcmVzb2x1dGlvbn0gPSBleHBvcnRJbWFnZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgIGV4cG9ydGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2xlYW51cEV4cG9ydEltYWdlO1xuICAgIH0sIFtvblVwZGF0ZUltYWdlU2V0dGluZywgY2xlYW51cEV4cG9ydEltYWdlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKG1hcEggIT09IGV4cG9ydEltYWdlLm1hcEggfHwgbWFwVyAhPT0gZXhwb3J0SW1hZ2UubWFwVykge1xuICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgICAgbWFwSCxcbiAgICAgICAgICBtYXBXXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIFttYXBILCBtYXBXLCBleHBvcnRJbWFnZSwgb25VcGRhdGVJbWFnZVNldHRpbmddKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImV4cG9ydC1pbWFnZS1tb2RhbFwiPlxuICAgICAgICA8SW1hZ2VPcHRpb25MaXN0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yYXRpb1RpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yYXRpb0Rlc2NyaXB0aW9uJ30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxpc3RcIiBpZD1cImV4cG9ydC1pbWFnZS1tb2RhbF9fb3B0aW9uX3JhdGlvXCI+XG4gICAgICAgICAgICAgIHtFWFBPUlRfSU1HX1JBVElPX09QVElPTlMuZmlsdGVyKG9wID0+ICFvcC5oaWRkZW4pLm1hcChvcCA9PiAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdGlvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyYXRpbyA9PT0gb3AuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZUltYWdlU2V0dGluZyh7cmF0aW86IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e29wLmxhYmVsfSAvPlxuICAgICAgICAgICAgICAgICAge3JhdGlvID09PSBvcC5pZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yZXNvbHV0aW9uVGl0bGUnfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLnJlc29sdXRpb25EZXNjcmlwdGlvbid9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCIgaWQ9XCJleHBvcnQtaW1hZ2UtbW9kYWxfX29wdGlvbl9yZXNvbHV0aW9uXCI+XG4gICAgICAgICAgICAgIHtFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmVzb2x1dGlvbiA9PT0gb3AuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcC5hdmFpbGFibGUgJiYgb25VcGRhdGVJbWFnZVNldHRpbmcoe3Jlc29sdXRpb246IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgICAge3Jlc29sdXRpb24gPT09IG9wLmlkICYmIDxDaGVja01hcmsgLz59XG4gICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZFRpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBpZD1cImFkZC1tYXAtbGVnZW5kXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxuICAgICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmV4cG9ydEltYWdlLm1hcExlZ2VuZEFkZCd9KX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uVXBkYXRlSW1hZ2VTZXR0aW5nKHtsZWdlbmQ6ICFsZWdlbmR9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW1hZ2VPcHRpb25MaXN0PlxuICAgICAgICA8SW1hZ2VQcmV2aWV3IGV4cG9ydEltYWdlPXtleHBvcnRJbWFnZX0gLz5cbiAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGluamVjdEludGwoRXhwb3J0SW1hZ2VNb2RhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeTtcbiJdfQ==