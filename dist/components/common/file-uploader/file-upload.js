"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports["default"] = exports.WarningMsg = void 0;

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _fileUploadProgress = _interopRequireDefault(require("./file-upload-progress"));

var _fileDrop = _interopRequireDefault(require("./file-drop"));

var _utils = require("../../../utils/utils");

var _userGuides = require("../../../constants/user-guides");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _mediaBreakpoints = require("../../../styles/media-breakpoints");

var _localization = require("../../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @typedef {import('./file-upload').FileUploadProps} FileUploadProps */
var fileIconColor = '#D3D8E0';

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

var StyledUploadMessage = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n\n  ", ";\n"])), function (props) {
  return props.theme.textColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]))));

var WarningMsg = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n  font-weight: 500;\n"])), function (props) {
  return props.theme.errorColor;
});

exports.WarningMsg = WarningMsg;

var StyledFileDrop = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: ", ";\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n  height: 360px;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n\n  .file-type-row {\n    opacity: 0.5;\n  }\n  ", ";\n"])), function (props) {
  return props.dragOver ? 'solid' : 'dashed';
}, function (props) {
  return props.dragOver ? props.theme.textColorLT : props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _mediaBreakpoints.media.portable(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]))));

var MsgWrapper = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"])), function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n\n  ", ";\n  ", ";\n"])), fileIconColor, _mediaBreakpoints.media.portable(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))), _mediaBreakpoints.media.palm(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]))));

var StyledFileTypeFow = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"])), _mediaBreakpoints.media.portable(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))), _mediaBreakpoints.media.palm(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]))));

var StyledFileUpload = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n  .file-drop {\n    position: relative;\n  }\n"])));

var StyledMessage = _styledComponents["default"].div(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n\n  .loading-action {\n    margin-right: 10px;\n  }\n  .loading-spinner {\n    margin-left: 10px;\n  }\n"])));

var StyledDragFileWrapper = _styledComponents["default"].div(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", ";\n"])), _mediaBreakpoints.media.portable(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]))), _mediaBreakpoints.media.portable(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))));

var StyledDisclaimer = (0, _styledComponents["default"])(StyledMessage)(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"])));

function FileUploadFactory() {
  /** @augments {Component<FileUploadProps>} */
  var FileUpload = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FileUpload, _Component);

    var _super = _createSuper(FileUpload);

    function FileUpload() {
      var _this;

      (0, _classCallCheck2["default"])(this, FileUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dragOver: false,
        fileLoading: false,
        files: [],
        errorFiles: []
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frame", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
        var _this$props$fileExten = _this.props.fileExtensions,
            fileExtensions = _this$props$fileExten === void 0 ? [] : _this$props$fileExten;
        var fileExt = fileExtensions.find(function (ext) {
          return filename.endsWith(ext);
        });
        return Boolean(fileExt);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (fileList, event) {
        if (event) {
          event.stopPropagation();
        }

        var files = (0, _toConsumableArray2["default"])(fileList).filter(Boolean);
        var _this$props$disableEx = _this.props.disableExtensionFilter,
            disableExtensionFilter = _this$props$disableEx === void 0 ? false : _this$props$disableEx; // TODO - move this code out of the component

        var filesToLoad = [];
        var errorFiles = [];

        var _iterator = _createForOfIteratorHelper(files),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;

            if (disableExtensionFilter || _this._isValidFileType(file.name)) {
              filesToLoad.push(file);
            } else {
              errorFiles.push(file.name);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var nextState = {
          files: filesToLoad,
          errorFiles: errorFiles,
          dragOver: false
        };

        _this.setState(nextState, function () {
          return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
        _this.setState({
          dragOver: newState
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(FileUpload, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            dragOver = _this$state.dragOver,
            files = _this$state.files,
            errorFiles = _this$state.errorFiles;
        var _this$props = this.props,
            fileLoading = _this$props.fileLoading,
            fileLoadingProgress = _this$props.fileLoadingProgress,
            theme = _this$props.theme,
            intl = _this$props.intl;
        var _this$props2 = this.props,
            _this$props2$fileExte = _this$props2.fileExtensions,
            fileExtensions = _this$props2$fileExte === void 0 ? [] : _this$props2$fileExte,
            _this$props2$fileForm = _this$props2.fileFormatNames,
            fileFormatNames = _this$props2$fileForm === void 0 ? [] : _this$props2$fileForm;
        return /*#__PURE__*/_react["default"].createElement(StyledFileUpload, {
          className: "file-uploader",
          ref: this.frame
        }, _fileDrop["default"] ? /*#__PURE__*/_react["default"].createElement(_fileDrop["default"], {
          frame: this.frame.current || document,
          onDragOver: function onDragOver() {
            return _this2._toggleDragState(true);
          },
          onDragLeave: function onDragLeave() {
            return _this2._toggleDragState(false);
          },
          onDrop: this._handleFileInput,
          className: "file-uploader__file-drop"
        }, /*#__PURE__*/_react["default"].createElement(StyledUploadMessage, {
          className: "file-upload__message"
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: "".concat(intl.formatMessage({
            id: 'fileUploader.configUploadMessage'
          }, {
            fileFormatNames: fileFormatNames.map(function (format) {
              return "**".concat(format, "**");
            }).join(', ')
          }), "(").concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")."),
          renderers: {
            link: LinkRenderer
          }
        })), /*#__PURE__*/_react["default"].createElement(StyledFileDrop, {
          dragOver: dragOver
        }, /*#__PURE__*/_react["default"].createElement(StyledFileTypeFow, {
          className: "file-type-row"
        }, fileExtensions.map(function (ext) {
          return /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            key: ext,
            ext: ext,
            height: "50px",
            fontSize: "9px"
          });
        })), fileLoading ? /*#__PURE__*/_react["default"].createElement(_fileUploadProgress["default"], {
          fileLoadingProgress: fileLoadingProgress,
          theme: theme
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            opacity: dragOver ? 0.5 : 1
          },
          className: "file-upload-display-message"
        }, /*#__PURE__*/_react["default"].createElement(StyledDragNDropIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.DragNDrop, {
          height: "44px"
        })), errorFiles.length ? /*#__PURE__*/_react["default"].createElement(WarningMsg, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.fileNotSupported',
          values: {
            errorFiles: errorFiles.join(', ')
          }
        })) : null), !files.length ? /*#__PURE__*/_react["default"].createElement(StyledDragFileWrapper, null, /*#__PURE__*/_react["default"].createElement(MsgWrapper, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.message'
        })), /*#__PURE__*/_react["default"].createElement("span", {
          className: "file-upload-or"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.or'
        })), /*#__PURE__*/_react["default"].createElement(_uploadButton["default"], {
          onUpload: this._handleFileInput
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.browseFiles'
        }))) : null, /*#__PURE__*/_react["default"].createElement(StyledDisclaimer, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.disclaimer'
        }))))) : null, /*#__PURE__*/_react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.chromeMessage'
        }) : ''));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (state.fileLoading && props.fileLoading === false && state.files.length) {
          return {
            files: [],
            fileLoading: props.fileLoading
          };
        }

        return {
          fileLoading: props.fileLoading
        };
      }
    }]);
    return FileUpload;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(FileUpload);
}

var _default = FileUploadFactory;
exports["default"] = _default;
var FileUpload = FileUploadFactory();
exports.FileUpload = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbImZpbGVJY29uQ29sb3IiLCJMaW5rUmVuZGVyZXIiLCJwcm9wcyIsImhyZWYiLCJjaGlsZHJlbiIsIlN0eWxlZFVwbG9hZE1lc3NhZ2UiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIldhcm5pbmdNc2ciLCJzcGFuIiwiZXJyb3JDb2xvciIsIlN0eWxlZEZpbGVEcm9wIiwiZHJhZ092ZXIiLCJzdWJ0ZXh0Q29sb3JMVCIsImxpbmtCdG5Db2xvciIsIk1zZ1dyYXBwZXIiLCJtb2RhbFRpdGxlQ29sb3IiLCJTdHlsZWREcmFnTkRyb3BJY29uIiwicGFsbSIsIlN0eWxlZEZpbGVUeXBlRm93IiwiU3R5bGVkRmlsZVVwbG9hZCIsIlN0eWxlZE1lc3NhZ2UiLCJTdHlsZWREcmFnRmlsZVdyYXBwZXIiLCJTdHlsZWREaXNjbGFpbWVyIiwiRmlsZVVwbG9hZEZhY3RvcnkiLCJGaWxlVXBsb2FkIiwiZmlsZUxvYWRpbmciLCJmaWxlcyIsImVycm9yRmlsZXMiLCJmaWxlbmFtZSIsImZpbGVFeHRlbnNpb25zIiwiZmlsZUV4dCIsImZpbmQiLCJleHQiLCJlbmRzV2l0aCIsIkJvb2xlYW4iLCJmaWxlTGlzdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmlsdGVyIiwiZGlzYWJsZUV4dGVuc2lvbkZpbHRlciIsImZpbGVzVG9Mb2FkIiwiZmlsZSIsIl9pc1ZhbGlkRmlsZVR5cGUiLCJuYW1lIiwicHVzaCIsIm5leHRTdGF0ZSIsInNldFN0YXRlIiwibGVuZ3RoIiwib25GaWxlVXBsb2FkIiwibmV3U3RhdGUiLCJzdGF0ZSIsImZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJpbnRsIiwiZmlsZUZvcm1hdE5hbWVzIiwiZnJhbWUiLCJGaWxlRHJvcCIsImN1cnJlbnQiLCJkb2N1bWVudCIsIl90b2dnbGVEcmFnU3RhdGUiLCJfaGFuZGxlRmlsZUlucHV0IiwiZm9ybWF0TWVzc2FnZSIsImlkIiwibWFwIiwiZm9ybWF0Iiwiam9pbiIsIkdVSURFU19GSUxFX0ZPUk1BVF9ET0MiLCJsaW5rIiwib3BhY2l0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQXRCOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEtBQUssRUFBSTtBQUM1QixzQkFDRTtBQUFHLElBQUEsSUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQWY7QUFBcUIsSUFBQSxNQUFNLEVBQUMsUUFBNUI7QUFBcUMsSUFBQSxHQUFHLEVBQUM7QUFBekMsS0FDR0QsS0FBSyxDQUFDRSxRQURULENBREY7QUFLRCxDQU5EOztBQU9BLElBQU1DLG1CQUFtQixHQUFHQyw2QkFBT0MsR0FBVixnS0FDZCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDTSxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FEUyxFQUtyQkMsd0JBQU1DLFFBTGUsbUhBQXpCOztBQVVPLElBQU1DLFVBQVUsR0FBR04sNkJBQU9PLElBQVYscUpBRVosVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZTSxVQUFoQjtBQUFBLENBRk8sQ0FBaEI7Ozs7QUFNUCxJQUFNQyxjQUFjLEdBQUdULDZCQUFPQyxHQUFWLGlhQUdGLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNjLFFBQU4sR0FBaUIsT0FBakIsR0FBMkIsUUFBaEM7QUFBQSxDQUhILEVBS0YsVUFBQWQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ2MsUUFBTixHQUFpQmQsS0FBSyxDQUFD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RCxRQUNHLHNDQUFhLGdDQUFDLDhCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBQWIsR0FBc0UsRUFEekUsQ0F4RUYsQ0FERjtBQThFRDtBQWpKd0I7QUFBQTtBQUFBLGFBVXpCLGtDQUFnQzlELEtBQWhDLEVBQXVDcUQsS0FBdkMsRUFBOEM7QUFDNUMsWUFBSUEsS0FBSyxDQUFDekIsV0FBTixJQUFxQjVCLEtBQUssQ0FBQzRCLFdBQU4sS0FBc0IsS0FBM0MsSUFBb0R5QixLQUFLLENBQUN4QixLQUFOLENBQVlxQixNQUFwRSxFQUE0RTtBQUMxRSxpQkFBTztBQUNMckIsWUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEQsWUFBQUEsV0FBVyxFQUFFNUIsS0FBSyxDQUFDNEI7QUFGZCxXQUFQO0FBSUQ7O0FBQ0QsZUFBTztBQUNMQSxVQUFBQSxXQUFXLEVBQUU1QixLQUFLLENBQUM0QjtBQURkLFNBQVA7QUFHRDtBQXBCd0I7QUFBQTtBQUFBLElBRUYyQyxnQkFGRTs7QUFvSjNCLFNBQU8sMkJBQVc1QyxVQUFYLENBQVA7QUFDRDs7ZUFFY0QsaUI7O0FBQ1IsSUFBTUMsVUFBVSxHQUFHRCxpQkFBaUIsRUFBcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2luamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IFVwbG9hZEJ1dHRvbiBmcm9tICcuL3VwbG9hZC1idXR0b24nO1xuaW1wb3J0IHtEcmFnTkRyb3AsIEZpbGVUeXBlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRmlsZVVwbG9hZFByb2dyZXNzIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWQtcHJvZ3Jlc3MnO1xuaW1wb3J0IEZpbGVEcm9wIGZyb20gJy4vZmlsZS1kcm9wJztcblxuaW1wb3J0IHtpc0Nocm9tZX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuLy8gQnJlYWtwb2ludHNcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2ZpbGUtdXBsb2FkJykuRmlsZVVwbG9hZFByb3BzfSBGaWxlVXBsb2FkUHJvcHMgKi9cblxuY29uc3QgZmlsZUljb25Db2xvciA9ICcjRDNEOEUwJztcblxuY29uc3QgTGlua1JlbmRlcmVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuY29uc3QgU3R5bGVkVXBsb2FkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICBgfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBXYXJuaW5nTXNnID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZURyb3AgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItc3R5bGU6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gJ3NvbGlkJyA6ICdkYXNoZWQnKX07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gcHJvcHMudGhlbWUudGV4dENvbG9yTFQgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVCl9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDhweCAwO1xuICBoZWlnaHQ6IDM2MHB4O1xuXG4gIC5maWxlLXVwbG9hZC1vciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAuZmlsZS10eXBlLXJvdyB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgcGFkZGluZzogMTZweCA0cHggMDtcbiAgYH07XG5gO1xuXG5jb25zdCBNc2dXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnTkRyb3BJY29uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7ZmlsZUljb25Db2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRGaWxlVHlwZUZvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZVVwbG9hZCA9IHN0eWxlZC5kaXZgXG4gIC5maWxlLWRyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5sb2FkaW5nLWFjdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnRmlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGB9O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRGlzY2xhaW1lciA9IHN0eWxlZChTdHlsZWRNZXNzYWdlKWBcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5mdW5jdGlvbiBGaWxlVXBsb2FkRmFjdG9yeSgpIHtcbiAgLyoqIEBhdWdtZW50cyB7Q29tcG9uZW50PEZpbGVVcGxvYWRQcm9wcz59ICovXG4gIGNsYXNzIEZpbGVVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgZHJhZ092ZXI6IGZhbHNlLFxuICAgICAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmlsZXM6IFtdLFxuICAgICAgZXJyb3JGaWxlczogW11cbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5maWxlTG9hZGluZyAmJiBwcm9wcy5maWxlTG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdGUuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgIGZpbGVMb2FkaW5nOiBwcm9wcy5maWxlTG9hZGluZ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZUxvYWRpbmc6IHByb3BzLmZpbGVMb2FkaW5nXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZyYW1lID0gY3JlYXRlUmVmKCk7XG5cbiAgICBfaXNWYWxpZEZpbGVUeXBlID0gZmlsZW5hbWUgPT4ge1xuICAgICAgY29uc3Qge2ZpbGVFeHRlbnNpb25zID0gW119ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlRXh0ZW5zaW9ucy5maW5kKGV4dCA9PiBmaWxlbmFtZS5lbmRzV2l0aChleHQpKTtcblxuICAgICAgcmV0dXJuIEJvb2xlYW4oZmlsZUV4dCk7XG4gICAgfTtcblxuICAgIC8qKiBAcGFyYW0ge0ZpbGVMaXN0fSBmaWxlTGlzdCAqL1xuICAgIF9oYW5kbGVGaWxlSW5wdXQgPSAoZmlsZUxpc3QsIGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gWy4uLmZpbGVMaXN0XS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAgIGNvbnN0IHtkaXNhYmxlRXh0ZW5zaW9uRmlsdGVyID0gZmFsc2V9ID0gdGhpcy5wcm9wcztcblxuICAgICAgLy8gVE9ETyAtIG1vdmUgdGhpcyBjb2RlIG91dCBvZiB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCBmaWxlc1RvTG9hZCA9IFtdO1xuICAgICAgY29uc3QgZXJyb3JGaWxlcyA9IFtdO1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGlmIChkaXNhYmxlRXh0ZW5zaW9uRmlsdGVyIHx8IHRoaXMuX2lzVmFsaWRGaWxlVHlwZShmaWxlLm5hbWUpKSB7XG4gICAgICAgICAgZmlsZXNUb0xvYWQucHVzaChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcnJvckZpbGVzLnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXh0U3RhdGUgPSB7ZmlsZXM6IGZpbGVzVG9Mb2FkLCBlcnJvckZpbGVzLCBkcmFnT3ZlcjogZmFsc2V9O1xuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT5cbiAgICAgICAgbmV4dFN0YXRlLmZpbGVzLmxlbmd0aCA/IHRoaXMucHJvcHMub25GaWxlVXBsb2FkKG5leHRTdGF0ZS5maWxlcykgOiBudWxsXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdG9nZ2xlRHJhZ1N0YXRlID0gbmV3U3RhdGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IG5ld1N0YXRlfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtkcmFnT3ZlciwgZmlsZXMsIGVycm9yRmlsZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHtmaWxlTG9hZGluZywgZmlsZUxvYWRpbmdQcm9ncmVzcywgdGhlbWUsIGludGx9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtmaWxlRXh0ZW5zaW9ucyA9IFtdLCBmaWxlRm9ybWF0TmFtZXMgPSBbXX0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEZpbGVVcGxvYWQgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlclwiIHJlZj17dGhpcy5mcmFtZX0+XG4gICAgICAgICAge0ZpbGVEcm9wID8gKFxuICAgICAgICAgICAgPEZpbGVEcm9wXG4gICAgICAgICAgICAgIGZyYW1lPXt0aGlzLmZyYW1lLmN1cnJlbnQgfHwgZG9jdW1lbnR9XG4gICAgICAgICAgICAgIG9uRHJhZ092ZXI9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICAgIG9uRHJvcD17dGhpcy5faGFuZGxlRmlsZUlucHV0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyX19maWxlLWRyb3BcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3R5bGVkVXBsb2FkTWVzc2FnZSBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZF9fbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgICAgICBzb3VyY2U9e2Ake2ludGwuZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiAnZmlsZVVwbG9hZGVyLmNvbmZpZ1VwbG9hZE1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlRm9ybWF0TmFtZXM6IGZpbGVGb3JtYXROYW1lcy5tYXAoZm9ybWF0ID0+IGAqKiR7Zm9ybWF0fSoqYCkuam9pbignLCAnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApfSgke0dVSURFU19GSUxFX0ZPUk1BVF9ET0N9KS5gfVxuICAgICAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7bGluazogTGlua1JlbmRlcmVyfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZFVwbG9hZE1lc3NhZ2U+XG4gICAgICAgICAgICAgIDxTdHlsZWRGaWxlRHJvcCBkcmFnT3Zlcj17ZHJhZ092ZXJ9PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRGaWxlVHlwZUZvdyBjbGFzc05hbWU9XCJmaWxlLXR5cGUtcm93XCI+XG4gICAgICAgICAgICAgICAgICB7ZmlsZUV4dGVuc2lvbnMubWFwKGV4dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBrZXk9e2V4dH0gZXh0PXtleHR9IGhlaWdodD1cIjUwcHhcIiBmb250U2l6ZT1cIjlweFwiIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEZpbGVUeXBlRm93PlxuICAgICAgICAgICAgICAgIHtmaWxlTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxGaWxlVXBsb2FkUHJvZ3Jlc3MgZmlsZUxvYWRpbmdQcm9ncmVzcz17ZmlsZUxvYWRpbmdQcm9ncmVzc30gdGhlbWU9e3RoZW1lfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tvcGFjaXR5OiBkcmFnT3ZlciA/IDAuNSA6IDF9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLWRpc3BsYXktbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ05Ecm9wSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnTkRyb3AgaGVpZ2h0PVwiNDRweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnTkRyb3BJY29uPlxuXG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9yRmlsZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmdNc2c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eydmaWxlVXBsb2FkZXIuZmlsZU5vdFN1cHBvcnRlZCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7ZXJyb3JGaWxlczogZXJyb3JGaWxlcy5qb2luKCcsICcpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvV2FybmluZ01zZz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHshZmlsZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREcmFnRmlsZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TXNnV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIubWVzc2FnZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01zZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5vcid9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQnV0dG9uIG9uVXBsb2FkPXt0aGlzLl9oYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5icm93c2VGaWxlcyd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERyYWdGaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc2NsYWltZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIuZGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzY2xhaW1lcj5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkRmlsZURyb3A+XG4gICAgICAgICAgICA8L0ZpbGVEcm9wPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPFdhcm5pbmdNc2c+XG4gICAgICAgICAgICB7aXNDaHJvbWUoKSA/IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLmNocm9tZU1lc3NhZ2UnfSAvPiA6ICcnfVxuICAgICAgICAgIDwvV2FybmluZ01zZz5cbiAgICAgICAgPC9TdHlsZWRGaWxlVXBsb2FkPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5qZWN0SW50bChGaWxlVXBsb2FkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZEZhY3Rvcnk7XG5leHBvcnQgY29uc3QgRmlsZVVwbG9hZCA9IEZpbGVVcGxvYWRGYWN0b3J5KCk7XG4iXX0=