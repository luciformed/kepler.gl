"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.testForCoordinates = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapbox = _interopRequireDefault(require("mapbox"));

var _reactIntl = require("react-intl");

var _viewportMercatorProject = require("viewport-mercator-project");

var _keyevent = _interopRequireDefault(require("../../constants/keyevent"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// matches only valid coordinates
var COORDINATE_REGEX_STRING = '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)';
var COORDINATE_REGEX = RegExp(COORDINATE_REGEX_STRING);
var PLACEHOLDER = 'Enter an address or coordinates, ex 37.79,-122.40';
var debounceTimeout = null;

var testForCoordinates = function testForCoordinates(query) {
  var isValid = COORDINATE_REGEX.test(query.trim());

  if (!isValid) {
    return [isValid, query];
  }

  var tokens = query.trim().split(',');
  return [isValid, Number(tokens[0]), Number(tokens[1])];
};

exports.testForCoordinates = testForCoordinates;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  color: ", ";\n\n  .geocoder-input {\n    box-shadow: ", ";\n\n    .geocoder-input__search {\n      position: absolute;\n      height: ", "px;\n      width: 30px;\n      padding-left: 6px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: ", ";\n    }\n\n    input {\n      padding: 4px 36px;\n      height: ", "px;\n      caret-color: unset;\n    }\n  }\n\n  .geocoder-results {\n    box-shadow: ", ";\n    background-color: ", ";\n    position: absolute;\n    width: ", "px;\n    margin-top: ", "px;\n  }\n\n  .geocoder-item {\n    ", ";\n    ", ";\n\n    &.active {\n      background-color: ", ";\n    }\n  }\n\n  .remove-result {\n    position: absolute;\n    right: 16px;\n    top: 0px;\n    height: ", "px;\n    display: flex;\n    align-items: center;\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.dropdownWapperMargin;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.textTruncate;
}, function (props) {
  return props.theme.dropdownListHighlightBg;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.textColorHl;
});
/** @type {import('./geocoder').GeocoderComponent} */


var GeoCoder = function GeoCoder(_ref) {
  var mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$formatItem = _ref.formatItem,
      formatItem = _ref$formatItem === void 0 ? function (item) {
    return item.place_name;
  } : _ref$formatItem,
      viewport = _ref.viewport,
      onSelected = _ref.onSelected,
      onDeleteMarker = _ref.onDeleteMarker,
      transitionDuration = _ref.transitionDuration,
      pointZoom = _ref.pointZoom,
      width = _ref.width,
      intl = _ref.intl;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showResults = _useState4[0],
      setShowResults = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      showDelete = _useState6[0],
      setShowDelete = _useState6[1];
  /** @type {import('./geocoder').Results} */


  var initialResults = [];

  var _useState7 = (0, _react.useState)(initialResults),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      results = _useState8[0],
      setResults = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      selectedIndex = _useState10[0],
      setSelectedIndex = _useState10[1];

  var client = (0, _react.useMemo)(function () {
    return new _mapbox["default"](mapboxApiAccessToken);
  }, [mapboxApiAccessToken]);
  var onChange = (0, _react.useCallback)(function (event) {
    var queryString = event.target.value;
    setInputValue(queryString);

    var _testForCoordinates = testForCoordinates(queryString),
        _testForCoordinates2 = (0, _slicedToArray2["default"])(_testForCoordinates, 3),
        hasValidCoordinates = _testForCoordinates2[0],
        longitude = _testForCoordinates2[1],
        latitude = _testForCoordinates2[2];

    if (hasValidCoordinates) {
      setResults([{
        center: [latitude, longitude],
        place_name: queryString
      }]);
    } else {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(limit > 0 && Boolean(queryString))) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return client.geocodeForward(queryString, {
                  limit: limit
                });

              case 4:
                response = _context.sent;

                if (response.entity.features) {
                  setShowResults(true);
                  setResults(response.entity.features);
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                // TODO: show geocode error
                // eslint-disable-next-line no-console
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      })), timeout);
    }
  }, [client, limit, timeout, setResults, setShowResults]);
  var onBlur = (0, _react.useCallback)(function () {
    setTimeout(function () {
      setShowResults(false);
    }, timeout);
  }, [setShowResults, timeout]);
  var onFocus = (0, _react.useCallback)(function () {
    return setShowResults(true);
  }, [setShowResults]);
  var onItemSelected = (0, _react.useCallback)(function (item) {
    var newViewport = new _viewportMercatorProject.WebMercatorViewport(viewport);
    var bbox = item.bbox,
        center = item.center;
    newViewport = bbox ? newViewport.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]) : {
      longitude: center[0],
      latitude: center[1],
      zoom: pointZoom
    };
    var _newViewport = newViewport,
        longitude = _newViewport.longitude,
        latitude = _newViewport.latitude,
        zoom = _newViewport.zoom;
    onSelected(_objectSpread(_objectSpread({}, viewport), {
      longitude: longitude,
      latitude: latitude,
      zoom: zoom,
      transitionDuration: transitionDuration
    }), item);
    setShowResults(false);
    setInputValue(formatItem(item));
    setShowDelete(true);
  }, [viewport, onSelected, transitionDuration, pointZoom, formatItem]);
  var onMarkDeleted = (0, _react.useCallback)(function () {
    setShowDelete(false);
    setInputValue('');
    onDeleteMarker();
  }, [onDeleteMarker]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (!results || results.length === 0) {
      return;
    }

    switch (e.keyCode) {
      case _keyevent["default"].DOM_VK_UP:
        setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : selectedIndex);
        break;

      case _keyevent["default"].DOM_VK_DOWN:
        setSelectedIndex(selectedIndex < results.length - 1 ? selectedIndex + 1 : selectedIndex);
        break;

      case _keyevent["default"].DOM_VK_ENTER:
      case _keyevent["default"].DOM_VK_RETURN:
        if (results[selectedIndex]) {
          onItemSelected(results[selectedIndex]);
        }

        break;

      default:
        break;
    }
  }, [results, selectedIndex, setSelectedIndex, onItemSelected]);
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, {
    className: className,
    width: width
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-input"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-input__search"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Search, {
    height: "20px"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
    type: "text",
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    value: inputValue,
    placeholder: intl ? intl.formatMessage({
      id: 'geocoder.title',
      defaultMessage: PLACEHOLDER
    }) : PLACEHOLDER
  }), showDelete ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "remove-result"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
    height: "12px",
    onClick: onMarkDeleted
  })) : null), showResults ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-results"
  }, results.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: (0, _classnames["default"])('geocoder-item', {
        active: selectedIndex === index
      }),
      onClick: function onClick() {
        return onItemSelected(item);
      }
    }, formatItem(item));
  })) : null);
};

var _default = (0, _reactIntl.injectIntl)(GeoCoder);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2dlb2NvZGVyL2dlb2NvZGVyLmpzIl0sIm5hbWVzIjpbIkNPT1JESU5BVEVfUkVHRVhfU1RSSU5HIiwiQ09PUkRJTkFURV9SRUdFWCIsIlJlZ0V4cCIsIlBMQUNFSE9MREVSIiwiZGVib3VuY2VUaW1lb3V0IiwidGVzdEZvckNvb3JkaW5hdGVzIiwicXVlcnkiLCJpc1ZhbGlkIiwidGVzdCIsInRyaW0iLCJ0b2tlbnMiLCJzcGxpdCIsIk51bWJlciIsIlN0eWxlZENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJib3hTaGFkb3ciLCJnZW9jb2RlcklucHV0SGVpZ2h0Iiwic3VidGV4dENvbG9yIiwicGFuZWxCYWNrZ3JvdW5kIiwiaXNGaW5pdGUiLCJ3aWR0aCIsImdlb2NvZGVyV2lkdGgiLCJkcm9wZG93bldhcHBlck1hcmdpbiIsImRyb3Bkb3duTGlzdEl0ZW0iLCJ0ZXh0VHJ1bmNhdGUiLCJkcm9wZG93bkxpc3RIaWdobGlnaHRCZyIsInRleHRDb2xvckhsIiwiR2VvQ29kZXIiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImNsYXNzTmFtZSIsImxpbWl0IiwidGltZW91dCIsImZvcm1hdEl0ZW0iLCJpdGVtIiwicGxhY2VfbmFtZSIsInZpZXdwb3J0Iiwib25TZWxlY3RlZCIsIm9uRGVsZXRlTWFya2VyIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicG9pbnRab29tIiwiaW50bCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2hvd1Jlc3VsdHMiLCJzZXRTaG93UmVzdWx0cyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaW5pdGlhbFJlc3VsdHMiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiY2xpZW50IiwiTWFwYm94Q2xpZW50Iiwib25DaGFuZ2UiLCJldmVudCIsInF1ZXJ5U3RyaW5nIiwidGFyZ2V0IiwidmFsdWUiLCJoYXNWYWxpZENvb3JkaW5hdGVzIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJjZW50ZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiQm9vbGVhbiIsImdlb2NvZGVGb3J3YXJkIiwicmVzcG9uc2UiLCJlbnRpdHkiLCJmZWF0dXJlcyIsImNvbnNvbGUiLCJsb2ciLCJvbkJsdXIiLCJvbkZvY3VzIiwib25JdGVtU2VsZWN0ZWQiLCJuZXdWaWV3cG9ydCIsIldlYk1lcmNhdG9yVmlld3BvcnQiLCJiYm94IiwiZml0Qm91bmRzIiwiem9vbSIsIm9uTWFya0RlbGV0ZWQiLCJvbktleURvd24iLCJlIiwibGVuZ3RoIiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX1VQIiwiRE9NX1ZLX0RPV04iLCJET01fVktfRU5URVIiLCJET01fVktfUkVUVVJOIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJtYXAiLCJpbmRleCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLHVCQUF1QixHQUMzQixtR0FERjtBQUVBLElBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNGLHVCQUFELENBQS9CO0FBRUEsSUFBTUcsV0FBVyxHQUFHLG1EQUFwQjtBQUVBLElBQUlDLGVBQWUsR0FBRyxJQUF0Qjs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLEtBQUssRUFBSTtBQUN6QyxNQUFNQyxPQUFPLEdBQUdOLGdCQUFnQixDQUFDTyxJQUFqQixDQUFzQkYsS0FBSyxDQUFDRyxJQUFOLEVBQXRCLENBQWhCOztBQUVBLE1BQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osV0FBTyxDQUFDQSxPQUFELEVBQVVELEtBQVYsQ0FBUDtBQUNEOztBQUVELE1B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VSxDQUFDQyxJQUFELENBTGIsQ0FEVztBQUFBLEdBQVosQ0FESCxDQURVLEdBWVIsSUFyQ04sQ0FERjtBQXlDRCxDQWhLRDs7ZUFrS2UsMkJBQVdOLFFBQVgsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBNYXBib3hDbGllbnQgZnJvbSAnbWFwYm94JztcbmltcG9ydCB7aW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge1dlYk1lcmNhdG9yVmlld3BvcnR9IGZyb20gJ3ZpZXdwb3J0LW1lcmNhdG9yLXByb2plY3QnO1xuaW1wb3J0IEtleUV2ZW50IGZyb20gJ2NvbnN0YW50cy9rZXlldmVudCc7XG5pbXBvcnQge0lucHV0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1NlYXJjaCwgRGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbi8vIG1hdGNoZXMgb25seSB2YWxpZCBjb29yZGluYXRlc1xuY29uc3QgQ09PUkRJTkFURV9SRUdFWF9TVFJJTkcgPVxuICAnXlstK10/KFsxLThdP1xcXFxkKFxcXFwuXFxcXGQrKT98OTAoXFxcXC4wKyk/KSxcXFxccypbLStdPygxODAoXFxcXC4wKyk/fCgoMVswLTddXFxcXGQpfChbMS05XT9cXFxcZCkpKFxcXFwuXFxcXGQrKT8pJztcbmNvbnN0IENPT1JESU5BVEVfUkVHRVggPSBSZWdFeHAoQ09PUkRJTkFURV9SRUdFWF9TVFJJTkcpO1xuXG5jb25zdCBQTEFDRUhPTERFUiA9ICdFbnRlciBhbiBhZGRyZXNzIG9yIGNvb3JkaW5hdGVzLCBleCAzNy43OSwtMTIyLjQwJztcblxubGV0IGRlYm91bmNlVGltZW91dCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCB0ZXN0Rm9yQ29vcmRpbmF0ZXMgPSBxdWVyeSA9PiB7XG4gIGNvbnN0IGlzVmFsaWQgPSBDT09SRElOQVRFX1JFR0VYLnRlc3QocXVlcnkudHJpbSgpKTtcblxuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gW2lzVmFsaWQsIHF1ZXJ5XTtcbiAgfVxuXG4gIGNvbnN0IHRva2VucyA9IHF1ZXJ5LnRyaW0oKS5zcGxpdCgnLCcpO1xuXG4gIHJldHVybiBbaXNWYWxpZCwgTnVtYmVyKHRva2Vuc1swXSksIE51bWJlcih0b2tlbnNbMV0pXTtcbn07XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcblxuICAuZ2VvY29kZXItaW5wdXQge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcblxuICAgIC5nZW9jb2Rlci1pbnB1dF9fc2VhcmNoIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5nZW9jb2RlcklucHV0SGVpZ2h0fXB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDRweCAzNnB4O1xuICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdlb2NvZGVySW5wdXRIZWlnaHR9cHg7XG4gICAgICBjYXJldC1jb2xvcjogdW5zZXQ7XG4gICAgfVxuICB9XG5cbiAgLmdlb2NvZGVyLXJlc3VsdHMge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAke3Byb3BzID0+IChOdW1iZXIuaXNGaW5pdGUocHJvcHMud2lkdGgpID8gcHJvcHMud2lkdGggOiBwcm9wcy50aGVtZS5nZW9jb2RlcldpZHRoKX1weDtcbiAgICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV2FwcGVyTWFyZ2lufXB4O1xuICB9XG5cbiAgLmdlb2NvZGVyLWl0ZW0ge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0SXRlbX07XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0VHJ1bmNhdGV9O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RIaWdobGlnaHRCZ307XG4gICAgfVxuICB9XG5cbiAgLnJlbW92ZS1yZXN1bHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJJbnB1dEhlaWdodH1weDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vZ2VvY29kZXInKS5HZW9jb2RlckNvbXBvbmVudH0gKi9cbmNvbnN0IEdlb0NvZGVyID0gKHtcbiAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gIGNsYXNzTmFtZSA9ICcnLFxuICBsaW1pdCA9IDUsXG4gIHRpbWVvdXQgPSAzMDAsXG4gIGZvcm1hdEl0ZW0gPSBpdGVtID0+IGl0ZW0ucGxhY2VfbmFtZSxcbiAgdmlld3BvcnQsXG4gIG9uU2VsZWN0ZWQsXG4gIG9uRGVsZXRlTWFya2VyLFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHBvaW50Wm9vbSxcbiAgd2lkdGgsXG4gIGludGxcbn0pID0+IHtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2hvd1Jlc3VsdHMsIHNldFNob3dSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dEZWxldGUsIHNldFNob3dEZWxldGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvKiogQHR5cGUge2ltcG9ydCgnLi9nZW9jb2RlcicpLlJlc3VsdHN9ICovXG4gIGNvbnN0IGluaXRpYWxSZXN1bHRzID0gW107XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKGluaXRpYWxSZXN1bHRzKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2xpZW50ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwYm94Q2xpZW50KG1hcGJveEFwaUFjY2Vzc1Rva2VuKSwgW21hcGJveEFwaUFjY2Vzc1Rva2VuXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHNldElucHV0VmFsdWUocXVlcnlTdHJpbmcpO1xuICAgICAgY29uc3QgW2hhc1ZhbGlkQ29vcmRpbmF0ZXMsIGxvbmdpdHVkZSwgbGF0aXR1ZGVdID0gdGVzdEZvckNvb3JkaW5hdGVzKHF1ZXJ5U3RyaW5nKTtcbiAgICAgIGlmIChoYXNWYWxpZENvb3JkaW5hdGVzKSB7XG4gICAgICAgIHNldFJlc3VsdHMoW3tjZW50ZXI6IFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSwgcGxhY2VfbmFtZTogcXVlcnlTdHJpbmd9XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYgKGxpbWl0ID4gMCAmJiBCb29sZWFuKHF1ZXJ5U3RyaW5nKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuZ2VvY29kZUZvcndhcmQocXVlcnlTdHJpbmcsIHtsaW1pdH0pO1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZW50aXR5LmZlYXR1cmVzKSB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd1Jlc3VsdHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0cyhyZXNwb25zZS5lbnRpdHkuZmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIFRPRE86IHNob3cgZ2VvY29kZSBlcnJvclxuICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2NsaWVudCwgbGltaXQsIHRpbWVvdXQsIHNldFJlc3VsdHMsIHNldFNob3dSZXN1bHRzXVxuICApO1xuXG4gIGNvbnN0IG9uQmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dSZXN1bHRzKGZhbHNlKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfSwgW3NldFNob3dSZXN1bHRzLCB0aW1lb3V0XSk7XG5cbiAgY29uc3Qgb25Gb2N1cyA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNob3dSZXN1bHRzKHRydWUpLCBbc2V0U2hvd1Jlc3VsdHNdKTtcblxuICBjb25zdCBvbkl0ZW1TZWxlY3RlZCA9IHVzZUNhbGxiYWNrKFxuICAgIGl0ZW0gPT4ge1xuICAgICAgbGV0IG5ld1ZpZXdwb3J0ID0gbmV3IFdlYk1lcmNhdG9yVmlld3BvcnQodmlld3BvcnQpO1xuICAgICAgY29uc3Qge2Jib3gsIGNlbnRlcn0gPSBpdGVtO1xuXG4gICAgICBuZXdWaWV3cG9ydCA9IGJib3hcbiAgICAgICAgPyBuZXdWaWV3cG9ydC5maXRCb3VuZHMoW1xuICAgICAgICAgICAgW2Jib3hbMF0sIGJib3hbMV1dLFxuICAgICAgICAgICAgW2Jib3hbMl0sIGJib3hbM11dXG4gICAgICAgICAgXSlcbiAgICAgICAgOiB7XG4gICAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlclswXSxcbiAgICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXJbMV0sXG4gICAgICAgICAgICB6b29tOiBwb2ludFpvb21cbiAgICAgICAgICB9O1xuXG4gICAgICBjb25zdCB7bG9uZ2l0dWRlLCBsYXRpdHVkZSwgem9vbX0gPSBuZXdWaWV3cG9ydDtcblxuICAgICAgb25TZWxlY3RlZCh7Li4udmlld3BvcnQsIC4uLntsb25naXR1ZGUsIGxhdGl0dWRlLCB6b29tLCB0cmFuc2l0aW9uRHVyYXRpb259fSwgaXRlbSk7XG5cbiAgICAgIHNldFNob3dSZXN1bHRzKGZhbHNlKTtcbiAgICAgIHNldElucHV0VmFsdWUoZm9ybWF0SXRlbShpdGVtKSk7XG4gICAgICBzZXRTaG93RGVsZXRlKHRydWUpO1xuICAgIH0sXG4gICAgW3ZpZXdwb3J0LCBvblNlbGVjdGVkLCB0cmFuc2l0aW9uRHVyYXRpb24sIHBvaW50Wm9vbSwgZm9ybWF0SXRlbV1cbiAgKTtcblxuICBjb25zdCBvbk1hcmtEZWxldGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZWxldGUoZmFsc2UpO1xuICAgIHNldElucHV0VmFsdWUoJycpO1xuICAgIG9uRGVsZXRlTWFya2VyKCk7XG4gIH0sIFtvbkRlbGV0ZU1hcmtlcl0pO1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IHVzZUNhbGxiYWNrKFxuICAgIGUgPT4ge1xuICAgICAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX1VQOlxuICAgICAgICAgIHNldFNlbGVjdGVkSW5kZXgoc2VsZWN0ZWRJbmRleCA+IDAgPyBzZWxlY3RlZEluZGV4IC0gMSA6IHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19ET1dOOlxuICAgICAgICAgIHNldFNlbGVjdGVkSW5kZXgoc2VsZWN0ZWRJbmRleCA8IHJlc3VsdHMubGVuZ3RoIC0gMSA/IHNlbGVjdGVkSW5kZXggKyAxIDogc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0VOVEVSOlxuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19SRVRVUk46XG4gICAgICAgICAgaWYgKHJlc3VsdHNbc2VsZWN0ZWRJbmRleF0pIHtcbiAgICAgICAgICAgIG9uSXRlbVNlbGVjdGVkKHJlc3VsdHNbc2VsZWN0ZWRJbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIFtyZXN1bHRzLCBzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZEluZGV4LCBvbkl0ZW1TZWxlY3RlZF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPXt3aWR0aH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlb2NvZGVyLWlucHV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VvY29kZXItaW5wdXRfX3NlYXJjaFwiPlxuICAgICAgICAgIDxTZWFyY2ggaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgaW50bFxuICAgICAgICAgICAgICA/IGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdnZW9jb2Rlci50aXRsZScsIGRlZmF1bHRNZXNzYWdlOiBQTEFDRUhPTERFUn0pXG4gICAgICAgICAgICAgIDogUExBQ0VIT0xERVJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93RGVsZXRlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlLXJlc3VsdFwiPlxuICAgICAgICAgICAgPERlbGV0ZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17b25NYXJrRGVsZXRlZH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Nob3dSZXN1bHRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlb2NvZGVyLXJlc3VsdHNcIj5cbiAgICAgICAgICB7cmVzdWx0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZ2VvY29kZXItaXRlbScsIHthY3RpdmU6IHNlbGVjdGVkSW5kZXggPT09IGluZGV4fSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uSXRlbVNlbGVjdGVkKGl0ZW0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Zm9ybWF0SXRlbShpdGVtKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0SW50bChHZW9Db2Rlcik7XG4iXX0=