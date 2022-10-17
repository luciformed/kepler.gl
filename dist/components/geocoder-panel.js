"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GeocoderPanelFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _processors = _interopRequireDefault(require("../processors"));

var _core = require("@deck.gl/core");

var _schemas = _interopRequireDefault(require("../schemas"));

var _projectionUtils = require("../utils/projection-utils");

var _geocoder = _interopRequireDefault(require("./geocoder/geocoder"));

var _defaultSettings = require("../constants/default-settings");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ICON_LAYER = {
  id: _defaultSettings.GEOCODER_LAYER_ID,
  type: 'icon',
  config: {
    label: 'Geocoder Layer',
    color: _defaultSettings.GEOCODER_ICON_COLOR,
    dataId: _defaultSettings.GEOCODER_DATASET_NAME,
    columns: {
      lat: 'lt',
      lng: 'ln',
      icon: 'icon',
      label: 'text'
    },
    isVisible: true,
    hidden: true,
    visConfig: {
      radius: _defaultSettings.GEOCODER_ICON_SIZE
    }
  }
};

var PARSED_CONFIG = _schemas["default"].parseSavedConfig({
  version: 'v1',
  config: {
    visState: {
      layers: [ICON_LAYER]
    }
  }
});

var StyledGeocoderPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: ", "px;\n  right: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  z-index: 100;\n"])), function (props) {
  return props.theme.geocoderTop;
}, function (props) {
  return props.theme.geocoderRight;
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.boxShadow;
});

function generateGeocoderDataset(lat, lon, text) {
  return {
    data: _processors["default"].processRowObject([{
      lt: lat,
      ln: lon,
      icon: 'place',
      text: text
    }]),
    id: _defaultSettings.GEOCODER_DATASET_NAME,
    info: {
      hidden: true,
      id: _defaultSettings.GEOCODER_DATASET_NAME,
      label: _defaultSettings.GEOCODER_DATASET_NAME
    }
  };
}

function isValid(key) {
  return /pk\..*\..*/.test(key);
}

function GeocoderPanelFactory() {
  var GeocoderPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(GeocoderPanel, _Component);

    var _super = _createSuper(GeocoderPanel);

    function GeocoderPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, GeocoderPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelected", function () {
        var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var geoItem = arguments.length > 1 ? arguments[1] : undefined;

        var _geoItem$center = (0, _slicedToArray2["default"])(geoItem.center, 2),
            lon = _geoItem$center[0],
            lat = _geoItem$center[1],
            text = geoItem.text,
            bbox = geoItem.bbox;

        _this.removeGeocoderDataset();

        _this.props.updateVisData([generateGeocoderDataset(lat, lon, text)], {
          keepExistingConfig: true
        }, PARSED_CONFIG);

        var bounds = bbox || [lon - _defaultSettings.GEOCODER_GEO_OFFSET, lat - _defaultSettings.GEOCODER_GEO_OFFSET, lon + _defaultSettings.GEOCODER_GEO_OFFSET, lat + _defaultSettings.GEOCODER_GEO_OFFSET];
        var centerAndZoom = (0, _projectionUtils.getCenterAndZoomFromBounds)(bounds, {
          width: _this.props.mapState.width,
          height: _this.props.mapState.height
        });

        if (!centerAndZoom) {
          // failed to fit bounds
          return;
        }

        _this.props.updateMap(_objectSpread(_objectSpread({
          latitude: centerAndZoom.center[1],
          longitude: centerAndZoom.center[0]
        }, Number.isFinite(centerAndZoom.zoom) ? {
          zoom: centerAndZoom.zoom
        } : {}), {}, {
          pitch: 0,
          bearing: 0,
          transitionDuration: _this.props.transitionDuration,
          transitionInterpolator: new _core.FlyToInterpolator()
        }));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeMarker", function () {
        _this.removeGeocoderDataset();
      });
      return _this;
    }

    (0, _createClass2["default"])(GeocoderPanel, [{
      key: "removeGeocoderDataset",
      value: function removeGeocoderDataset() {
        this.props.removeDataset(_defaultSettings.GEOCODER_DATASET_NAME);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isGeocoderEnabled = _this$props.isGeocoderEnabled,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            width = _this$props.width;
        return /*#__PURE__*/_react["default"].createElement(StyledGeocoderPanel, {
          className: "geocoder-panel",
          width: width,
          style: {
            display: isGeocoderEnabled ? 'block' : 'none'
          }
        }, isValid(mapboxApiAccessToken) && /*#__PURE__*/_react["default"].createElement(_geocoder["default"], {
          mapboxApiAccessToken: mapboxApiAccessToken,
          onSelected: this.onSelected,
          onDeleteMarker: this.removeMarker,
          width: width
        }));
      }
    }]);
    return GeocoderPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(GeocoderPanel, "propTypes", {
    isGeocoderEnabled: _propTypes["default"].bool.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapState: _propTypes["default"].object.isRequired,
    updateVisData: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    updateMap: _propTypes["default"].func.isRequired,
    transitionDuration: _propTypes["default"].number,
    width: _propTypes["default"].number
  });
  GeocoderPanel.defaultProps = {
    transitionDuration: 3000
  };
  return GeocoderPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2dlb2NvZGVyLXBhbmVsLmpzIl0sIm5hbWVzIjpbIklDT05fTEFZRVIiLCJpZCIsIkdFT0NPREVSX0xBWUVSX0lEIiwidHlwZSIsImNvbmZpZyIsImxhYmVsIiwiY29sb3IiLCJHRU9DT0RFUl9JQ09OX0NPTE9SIiwiZGF0YUlkIiwiR0VPQ09ERVJfREFUQVNFVF9OQU1FIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImljb24iLCJpc1Zpc2libGUiLCJoaWRkZW4iLCJ2aXNDb25maWciLCJyYWRpdXMiLCJHRU9DT0RFUl9JQ09OX1NJWkUiLCJQQVJTRURfQ09ORklHIiwiS2VwbGVyR2xTY2hlbWEiLCJwYXJzZVNhdmVkQ29uZmlnIiwidmVyc2lvbiIsInZpc1N0YXRlIiwibGF5ZXJzIiwiU3R5bGVkR2VvY29kZXJQYW5lbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJnZW9jb2RlclRvcCIsImdlb2NvZGVyUmlnaHQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIndpZHRoIiwiZ2VvY29kZXJXaWR0aCIsImJveFNoYWRvdyIsImdlbmVyYXRlR2VvY29kZXJEYXRhc2V0IiwibG9uIiwidGV4dCIsImRhdGEiLCJQcm9jZXNzb3JzIiwicHJvY2Vzc1Jvd09iamVjdCIsImx0IiwibG4iLCJpbmZvIiwiaXNWYWxpZCIsImtleSIsInRlc3QiLCJHZW9jb2RlclBhbmVsRmFjdG9yeSIsIkdlb2NvZGVyUGFuZWwiLCJ2aWV3cG9ydCIsImdlb0l0ZW0iLCJjZW50ZXIiLCJiYm94IiwicmVtb3ZlR2VvY29kZXJEYXRhc2V0IiwidXBkYXRlVmlzRGF0YSIsImtlZXBFeGlzdGluZ0NvbmZpZyIsImJvdW5kcyIsIkdFT0NPREVSX0dFT19PRkZTRVQiLCJjZW50ZXJBbmRab29tIiwibWFwU3RhdGUiLCJoZWlnaHQiLCJ1cGRhdGVNYXAiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJwaXRjaCIsImJlYXJpbmciLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uSW50ZXJwb2xhdG9yIiwiRmx5VG9JbnRlcnBvbGF0b3IiLCJyZW1vdmVEYXRhc2V0IiwiaXNHZW9jb2RlckVuYWJsZWQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImRpc3BsYXkiLCJvblNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsRUFBRSxFQUFFQyxrQ0FEYTtBQUVqQkMsRUFBQUEsSUFBSSxFQUFFLE1BRlc7QUFHakJDLEVBQUFBLE1BQU0sRUFBRTtBQUNOQyxJQUFBQSxLQUFLLEVBQUUsZ0JBREQ7QUFFTkMsSUFBQUEsS0FBSyxFQUFFQyxvQ0FGRDtBQUdOQyxJQUFBQSxNQUFNLEVBQUVDLHNDQUhGO0FBSU5DLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxHQUFHLEVBQUUsSUFERTtBQUVQQyxNQUFBQSxHQUFHLEVBQUUsSUFGRTtBQUdQQyxNQUFBQSxJQUFJLEVBQUUsTUFIQztBQUlQUixNQUFBQSxLQUFLLEVBQUU7QUFKQSxLQUpIO0FBVU5TLElBQUFBLFNBQVMsRUFBRSxJQVZMO0FBV05DLElBQUFBLE1BQU0sRUFBRSxJQVhGO0FBWU5DLElBQUFBLFNBQVMsRUFBRTtBQUNUQyxNQUFBQSxNQUFNLEVBQUVDO0FBREM7QUFaTDtBQUhTLENBQW5COztBQXFCQSxJQUFNQyxhQUFhLEdBQUdDLG9CQUFlQyxnQkFBZixDQUFnQztBQUNwREMsRUFBQUEsT0FBTyxFQUFFLElBRDJDO0FBRXBEbEIsRUFBQUEsTUFBTSxFQUFF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LEVBQUVBLG9CQUR4QjtBQUVFLFVBQUEsVUFBVSxFQUFFLEtBQUtFLFVBRm5CO0FBR0UsVUFBQSxjQUFjLEVBQUUsS0FBS0MsWUFIdkI7QUFJRSxVQUFBLEtBQUssRUFBRTNDO0FBSlQsVUFOSixDQURGO0FBZ0JEO0FBbkYwQztBQUFBO0FBQUEsSUFDakI0QyxnQkFEaUI7O0FBQUEsbUNBQ3ZDNUIsYUFEdUMsZUFFeEI7QUFDakJ1QixJQUFBQSxpQkFBaUIsRUFBRU0sc0JBQVVDLElBQVYsQ0FBZUMsVUFEakI7QUFFakJQLElBQUFBLG9CQUFvQixFQUFFSyxzQkFBVUcsTUFBVixDQUFpQkQsVUFGdEI7QUFHakJwQixJQUFBQSxRQUFRLEVBQUVrQixzQkFBVUksTUFBVixDQUFpQkYsVUFIVjtBQUlqQnpCLElBQUFBLGFBQWEsRUFBRXVCLHNCQUFVSyxJQUFWLENBQWVILFVBSmI7QUFLakJULElBQUFBLGFBQWEsRUFBRU8sc0JBQVVLLElBQVYsQ0FBZUgsVUFMYjtBQU1qQmxCLElBQUFBLFNBQVMsRUFBRWdCLHNCQUFVSyxJQUFWLENBQWVILFVBTlQ7QUFRakJaLElBQUFBLGtCQUFrQixFQUFFVSxzQkFBVU0sTUFSYjtBQVNqQm5ELElBQUFBLEtBQUssRUFBRTZDLHNCQUFVTTtBQVRBLEdBRndCO0FBc0Y3Q25DLEVBQUFBLGFBQWEsQ0FBQ29DLFlBQWQsR0FBNkI7QUFDM0JqQixJQUFBQSxrQkFBa0IsRUFBRTtBQURPLEdBQTdCO0FBSUEsU0FBT25CLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFByb2Nlc3NvcnMgZnJvbSAncHJvY2Vzc29ycyc7XG5pbXBvcnQge0ZseVRvSW50ZXJwb2xhdG9yfSBmcm9tICdAZGVjay5nbC9jb3JlJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcbmltcG9ydCB7Z2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHN9IGZyb20gJ3V0aWxzL3Byb2plY3Rpb24tdXRpbHMnO1xuXG5pbXBvcnQgR2VvY29kZXIgZnJvbSAnLi9nZW9jb2Rlci9nZW9jb2Rlcic7XG5pbXBvcnQge1xuICBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gIEdFT0NPREVSX0xBWUVSX0lELFxuICBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICBHRU9DT0RFUl9JQ09OX0NPTE9SLFxuICBHRU9DT0RFUl9JQ09OX1NJWkVcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBJQ09OX0xBWUVSID0ge1xuICBpZDogR0VPQ09ERVJfTEFZRVJfSUQsXG4gIHR5cGU6ICdpY29uJyxcbiAgY29uZmlnOiB7XG4gICAgbGFiZWw6ICdHZW9jb2RlciBMYXllcicsXG4gICAgY29sb3I6IEdFT0NPREVSX0lDT05fQ09MT1IsXG4gICAgZGF0YUlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gICAgY29sdW1uczoge1xuICAgICAgbGF0OiAnbHQnLFxuICAgICAgbG5nOiAnbG4nLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgbGFiZWw6ICd0ZXh0J1xuICAgIH0sXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB2aXNDb25maWc6IHtcbiAgICAgIHJhZGl1czogR0VPQ09ERVJfSUNPTl9TSVpFXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBQQVJTRURfQ09ORklHID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyh7XG4gIHZlcnNpb246ICd2MScsXG4gIGNvbmZpZzoge1xuICAgIHZpc1N0YXRlOiB7XG4gICAgICBsYXllcnM6IFtJQ09OX0xBWUVSXVxuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IFN0eWxlZEdlb2NvZGVyUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5nZW9jb2RlclRvcH1weDtcbiAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJSaWdodH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKE51bWJlci5pc0Zpbml0ZShwcm9wcy53aWR0aCkgPyBwcm9wcy53aWR0aCA6IHByb3BzLnRoZW1lLmdlb2NvZGVyV2lkdGgpfXB4O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XG4gIHotaW5kZXg6IDEwMDtcbmA7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgZGF0YTogUHJvY2Vzc29ycy5wcm9jZXNzUm93T2JqZWN0KFtcbiAgICAgIHtcbiAgICAgICAgbHQ6IGxhdCxcbiAgICAgICAgbG46IGxvbixcbiAgICAgICAgaWNvbjogJ3BsYWNlJyxcbiAgICAgICAgdGV4dFxuICAgICAgfVxuICAgIF0pLFxuICAgIGlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gICAgaW5mbzoge1xuICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgaWQ6IEdFT0NPREVSX0RBVEFTRVRfTkFNRSxcbiAgICAgIGxhYmVsOiBHRU9DT0RFUl9EQVRBU0VUX05BTUVcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWQoa2V5KSB7XG4gIHJldHVybiAvcGtcXC4uKlxcLi4qLy50ZXN0KGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdlb2NvZGVyUGFuZWxGYWN0b3J5KCkge1xuICBjbGFzcyBHZW9jb2RlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgaXNHZW9jb2RlckVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZVZpc0RhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVEYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTWFwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlclxuICAgIH07XG5cbiAgICByZW1vdmVHZW9jb2RlckRhdGFzZXQoKSB7XG4gICAgICB0aGlzLnByb3BzLnJlbW92ZURhdGFzZXQoR0VPQ09ERVJfREFUQVNFVF9OQU1FKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdGVkID0gKHZpZXdwb3J0ID0gbnVsbCwgZ2VvSXRlbSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjZW50ZXI6IFtsb24sIGxhdF0sXG4gICAgICAgIHRleHQsXG4gICAgICAgIGJib3hcbiAgICAgIH0gPSBnZW9JdGVtO1xuICAgICAgdGhpcy5yZW1vdmVHZW9jb2RlckRhdGFzZXQoKTtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlVmlzRGF0YShcbiAgICAgICAgW2dlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KV0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZWVwRXhpc3RpbmdDb25maWc6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgUEFSU0VEX0NPTkZJR1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGJvdW5kcyA9IGJib3ggfHwgW1xuICAgICAgICBsb24gLSBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsYXQgLSBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsb24gKyBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICAgICAgICBsYXQgKyBHRU9DT0RFUl9HRU9fT0ZGU0VUXG4gICAgICBdO1xuICAgICAgY29uc3QgY2VudGVyQW5kWm9vbSA9IGdldENlbnRlckFuZFpvb21Gcm9tQm91bmRzKGJvdW5kcywge1xuICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy5tYXBTdGF0ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLm1hcFN0YXRlLmhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghY2VudGVyQW5kWm9vbSkge1xuICAgICAgICAvLyBmYWlsZWQgdG8gZml0IGJvdW5kc1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlTWFwKHtcbiAgICAgICAgbGF0aXR1ZGU6IGNlbnRlckFuZFpvb20uY2VudGVyWzFdLFxuICAgICAgICBsb25naXR1ZGU6IGNlbnRlckFuZFpvb20uY2VudGVyWzBdLFxuICAgICAgICAvLyBGb3IgbWFyZ2luYWwgb3IgaW52YWxpZCBib3VuZHMsIHpvb20gbWF5IGJlIE5hTi4gTWFrZSBzdXJlIHRvIHByb3ZpZGUgYSB2YWxpZCB2YWx1ZSBpbiBvcmRlclxuICAgICAgICAvLyB0byBhdm9pZCBjb3JydXB0IHN0YXRlIGFuZCBwb3RlbnRpYWwgY3Jhc2hlcyBhcyB6b29tIGlzIGV4cGVjdGVkIHRvIGJlIGEgbnVtYmVyXG4gICAgICAgIC4uLihOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IHt6b29tOiBjZW50ZXJBbmRab29tLnpvb219IDoge30pLFxuICAgICAgICBwaXRjaDogMCxcbiAgICAgICAgYmVhcmluZzogMCxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgdHJhbnNpdGlvbkludGVycG9sYXRvcjogbmV3IEZseVRvSW50ZXJwb2xhdG9yKClcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW1vdmVNYXJrZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUdlb2NvZGVyRGF0YXNldCgpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7aXNHZW9jb2RlckVuYWJsZWQsIG1hcGJveEFwaUFjY2Vzc1Rva2VuLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEdlb2NvZGVyUGFuZWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJnZW9jb2Rlci1wYW5lbFwiXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogaXNHZW9jb2RlckVuYWJsZWQgPyAnYmxvY2snIDogJ25vbmUnfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc1ZhbGlkKG1hcGJveEFwaUFjY2Vzc1Rva2VuKSAmJiAoXG4gICAgICAgICAgICA8R2VvY29kZXJcbiAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e21hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIG9uRGVsZXRlTWFya2VyPXt0aGlzLnJlbW92ZU1hcmtlcn1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1N0eWxlZEdlb2NvZGVyUGFuZWw+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEdlb2NvZGVyUGFuZWwuZGVmYXVsdFByb3BzID0ge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMzAwMFxuICB9O1xuXG4gIHJldHVybiBHZW9jb2RlclBhbmVsO1xufVxuIl19