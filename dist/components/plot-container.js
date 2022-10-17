"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _exportUtils = require("../utils/export-utils");

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

var _dataUtils = require("../utils/data-utils");

var _projectionUtils = require("../utils/projection-utils");

var _defaultSettings = require("../constants/default-settings");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CLASS_FILTER = ['mapboxgl-control-container', 'attrition-link', 'attrition-logo'];

var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  return !CLASS_FILTER.includes(node.className);
};

var OUT_OF_SCREEN_POSITION = -9999;
var propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  exportImageSetting: _propTypes["default"].object.isRequired,
  addNotification: _propTypes["default"].func.isRequired,
  mapFields: _propTypes["default"].object.isRequired,
  setExportImageSetting: _propTypes["default"].object.isRequired,
  setExportImageDataUri: _propTypes["default"].func.isRequired,
  setExportImageError: _propTypes["default"].func.isRequired,
  splitMaps: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
PlotContainerFactory.deps = [_mapContainer["default"]]; // Remove mapbox logo in exported map, because it contains non-ascii characters

var StyledPlotContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right,\n  .mapbox-attribution-container {\n    display: none;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);

var StyledMapContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

var deckGlProps = {
  glOptions: {
    preserveDrawingBuffer: true,
    useDevicePixels: false
  }
};

function PlotContainerFactory(MapContainer) {
  var PlotContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    var _super = _createSuper(PlotContainer);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "plottingAreaRef", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapScaleSelector", function (props) {
        var imageSize = props.exportImageSetting.imageSize;
        var mapState = props.mapFields.mapState;

        if (imageSize.scale) {
          return imageSize.scale;
        }

        var scale = (0, _exportUtils.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
        return scale > 0 ? scale : 1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.mapScaleSelector, function (mapStyle, scale) {
        return _objectSpread(_objectSpread({}, mapStyle), {}, {
          bottomMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
          topMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef.current) {
          (0, _exportUtils.convertToPng)(_this.plottingAreaRef.current, {
            filter: DOM_FILTER_FUNC
          }).then(_this.props.setExportImageDataUri)["catch"](function (err) {
            _this.props.setExportImageError(err);

            if (_this.props.enableErrorNotification) {
              _this.props.addNotification((0, _notificationsUtils.exportImageError)({
                err: err
              }));
            }
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      _this._retrieveNewScreenshot = (0, _lodash["default"])(_this._retrieveNewScreenshot, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.setExportImageSetting({
          processing: true
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== prevProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this.props.setExportImageSetting({
            processing: true
          });

          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields,
            splitMaps = _this$props.splitMaps;
        var _exportImageSetting$i = exportImageSetting.imageSize,
            imageSize = _exportImageSetting$i === void 0 ? {} : _exportImageSetting$i,
            legend = exportImageSetting.legend;
        var mapState = mapFields.mapState;
        var isSplit = splitMaps && splitMaps.length > 1;
        var size = {
          width: imageSize.imageW || 1,
          height: imageSize.imageH || 1
        };
        var width = size.width / (isSplit ? 2 : 1);
        var height = size.height;
        var scale = this.mapScaleSelector(this.props);

        var newMapState = _objectSpread(_objectSpread({}, mapState), {}, {
          width: width,
          height: height,
          zoom: mapState.zoom + (Math.log2(scale) || 0)
        }); // center and all layer bounds


        if (exportImageSetting.center) {
          var renderedLayers = mapFields.layers.filter(function (layer, idx) {
            return layer.id !== _defaultSettings.GEOCODER_LAYER_ID && layer.shouldRenderLayer(mapFields.layerData[idx]);
          });
          var bounds = (0, _dataUtils.findMapBounds)(renderedLayers);
          var centerAndZoom = (0, _projectionUtils.getCenterAndZoomFromBounds)(bounds, {
            width: width,
            height: height
          });

          if (centerAndZoom) {
            var zoom = Number.isFinite(centerAndZoom.zoom) ? centerAndZoom.zoom : mapState.zoom;
            newMapState.longitude = centerAndZoom.center[0];
            newMapState.latitude = centerAndZoom.center[1];
            newMapState.zoom = zoom + Number(Math.log2(scale) || 0);
          }
        }

        var mapProps = _objectSpread(_objectSpread({}, mapFields), {}, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: newMapState,
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap,
          onMapRender: this._onMapRender,
          isExport: true,
          deckGlProps: deckGlProps
        });

        var mapContainers = !isSplit ? /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0
        }, mapProps)) : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapProps, {
            mapLayers: splitMaps[index].layers
          }));
        });
        return /*#__PURE__*/_react["default"].createElement(StyledPlotContainer, {
          className: "export-map-instance"
        }, /*#__PURE__*/_react["default"].createElement(StyledMapContainer, {
          ref: this.plottingAreaRef,
          width: size.width,
          height: size.height
        }, mapContainers));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  PlotContainer.propsTypes = propTypes;
  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3Bsb3QtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNMQVNTX0ZJTFRFUiIsIkRPTV9GSUxURVJfRlVOQyIsIm5vZGUiLCJpbmNsdWRlcyIsImNsYXNzTmFtZSIsIk9VVF9PRl9TQ1JFRU5fUE9TSVRJT04iLCJwcm9wVHlwZXMiLCJ3aWR0aCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJoZWlnaHQiLCJleHBvcnRJbWFnZVNldHRpbmciLCJvYmplY3QiLCJhZGROb3RpZmljYXRpb24iLCJmdW5jIiwibWFwRmllbGRzIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwic2V0RXhwb3J0SW1hZ2VFcnJvciIsInNwbGl0TWFwcyIsImFycmF5T2YiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsImRlcHMiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiU3R5bGVkUGxvdENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZE1hcENvbnRhaW5lciIsInByb3BzIiwiZGVja0dsUHJvcHMiLCJnbE9wdGlvbnMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJ1c2VEZXZpY2VQaXhlbHMiLCJNYXBDb250YWluZXIiLCJQbG90Q29udGFpbmVyIiwibWFwU3R5bGUiLCJpbWFnZVNpemUiLCJtYXBTdGF0ZSIsInNjYWxlIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaXNTcGxpdCIsIm1hcFN0eWxlU2VsZWN0b3IiLCJtYXBTY2FsZVNlbGVjdG9yIiwiYm90dG9tTWFwU3R5bGUiLCJ0b3BNYXBTdHlsZSIsIm1hcCIsImlzU3R5bGVMb2FkZWQiLCJfcmV0cmlldmVOZXdTY3JlZW5zaG90IiwicGxvdHRpbmdBcmVhUmVmIiwiY3VycmVudCIsImZpbHRlciIsInRoZW4iLCJlcnIiLCJlbmFibGVFcnJvck5vdGlmaWNhdGlvbiIsIl9vbk1hcFJlbmRlciIsInByb2Nlc3NpbmciLCJwcmV2UHJvcHMiLCJjaGVja3MiLCJzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QiLCJzb21lIiwiaXRlbSIsImxlZ2VuZCIsImxlbmd0aCIsInNpemUiLCJuZXdNYXBTdGF0ZSIsInpvb20iLCJNYXRoIiwibG9nMiIsImNlbnRlciIsInJlbmRlcmVkTGF5ZXJzIiwibGF5ZXJzIiwibGF5ZXIiLCJpZHgiLCJpZCIsIkdFT0NPREVSX0xBWUVSX0lEIiwic2hvdWxkUmVuZGVyTGF5ZXIiLCJsYXllckRhdGEiLCJib3VuZHMiLCJjZW50ZXJBbmRab29tIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsIm1hcFByb3BzIiwic2NhbGVkTWFwU3R5bGVTZWxlY3RvciIsIm1hcENvbnRyb2xzIiwibWFwTGVnZW5kIiwic2hvdyIsImFjdGl2ZSIsIk1hcENvbXBvbmVudCIsIlN0YXRpY01hcCIsIm9uTWFwUmVuZGVyIiwiaXNFeHBvcnQiLCJtYXBDb250YWluZXJzIiwic2V0dGluZ3MiLCJpbmRleCIsIkNvbXBvbmVudCIsInByb3BzVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQUMsNEJBQUQsRUFBK0IsZ0JBQS9CLEVBQWlELGdCQUFqRCxDQUFyQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLElBQUk7QUFBQSxTQUFJLENBQUNGLFlBQVksQ0FBQ0csUUFBYixDQUFzQkQsSUFBSSxDQUFDRSxTQUEzQixDQUFMO0FBQUEsQ0FBNUI7O0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsQ0FBQyxJQUFoQztBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtB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Q0FERjtBQU9EO0FBckpzRDtBQUFBO0FBQUEsSUFDN0JHLGdCQUQ2Qjs7QUF3SnpEL0QsRUFBQUEsYUFBYSxDQUFDZ0UsVUFBZCxHQUEyQjdGLFNBQTNCO0FBQ0EsU0FBTzZCLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIGxpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3RhdGljTWFwfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQge2V4cG9ydEltYWdlRXJyb3J9IGZyb20gJ3V0aWxzL25vdGlmaWNhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCB7Y29udmVydFRvUG5nfSBmcm9tICd1dGlscy9leHBvcnQtdXRpbHMnO1xuaW1wb3J0IHtzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9ufSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LWdsLXN0eWxlLWVkaXRvcic7XG5pbXBvcnQge2dldFNjYWxlRnJvbUltYWdlU2l6ZX0gZnJvbSAndXRpbHMvZXhwb3J0LXV0aWxzJztcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge2dldENlbnRlckFuZFpvb21Gcm9tQm91bmRzfSBmcm9tICd1dGlscy9wcm9qZWN0aW9uLXV0aWxzJztcbmltcG9ydCB7R0VPQ09ERVJfTEFZRVJfSUR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgQ0xBU1NfRklMVEVSID0gWydtYXBib3hnbC1jb250cm9sLWNvbnRhaW5lcicsICdhdHRyaXRpb24tbGluaycsICdhdHRyaXRpb24tbG9nbyddO1xuY29uc3QgRE9NX0ZJTFRFUl9GVU5DID0gbm9kZSA9PiAhQ0xBU1NfRklMVEVSLmluY2x1ZGVzKG5vZGUuY2xhc3NOYW1lKTtcbmNvbnN0IE9VVF9PRl9TQ1JFRU5fUE9TSVRJT04gPSAtOTk5OTtcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXhwb3J0SW1hZ2VTZXR0aW5nOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFkZE5vdGlmaWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWFwRmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNldEV4cG9ydEltYWdlU2V0dGluZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXRFeHBvcnRJbWFnZURhdGFVcmk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldEV4cG9ydEltYWdlRXJyb3I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNwbGl0TWFwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcbn07XG5cblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeV07XG5cbi8vIFJlbW92ZSBtYXBib3ggbG9nbyBpbiBleHBvcnRlZCBtYXAsIGJlY2F1c2UgaXQgY29udGFpbnMgbm9uLWFzY2lpIGNoYXJhY3RlcnNcbmNvbnN0IFN0eWxlZFBsb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCxcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLXJpZ2h0LFxuICAubWFwYm94LWF0dHJpYnV0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG4gIGxlZnQ6ICR7T1VUX09GX1NDUkVFTl9QT1NJVElPTn1weDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgZGVja0dsUHJvcHMgPSB7XG4gIGdsT3B0aW9uczoge1xuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICB1c2VEZXZpY2VQaXhlbHM6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsb3RDb250YWluZXJGYWN0b3J5KE1hcENvbnRhaW5lcikge1xuICBjbGFzcyBQbG90Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5fb25NYXBSZW5kZXIgPSBkZWJvdW5jZSh0aGlzLl9vbk1hcFJlbmRlciwgNTAwKTtcbiAgICAgIHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCA9IGRlYm91bmNlKHRoaXMuX3JldHJpZXZlTmV3U2NyZWVuc2hvdCwgNTAwKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nKHtwcm9jZXNzaW5nOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgLy8gcmUtZmV0Y2ggdGhlIG5ldyBzY3JlZW5zaG90IG9ubHkgd2hlbiByYXRpbyBsZWdlbmQgb3IgcmVzb2x1dGlvbiBjaGFuZ2VzXG4gICAgICBjb25zdCBjaGVja3MgPSBbJ3JhdGlvJywgJ3Jlc29sdXRpb24nLCAnbGVnZW5kJ107XG4gICAgICBjb25zdCBzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QgPSBjaGVja3Muc29tZShcbiAgICAgICAgaXRlbSA9PiB0aGlzLnByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXSAhPT0gcHJldlByb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXVxuICAgICAgKTtcbiAgICAgIGlmIChzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBvcnRJbWFnZVNldHRpbmcoe3Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGxvdHRpbmdBcmVhUmVmID0gY3JlYXRlUmVmKCk7XG5cbiAgICBtYXBTdHlsZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwRmllbGRzLm1hcFN0eWxlO1xuICAgIG1hcFNjYWxlU2VsZWN0b3IgPSBwcm9wcyA9PiB7XG4gICAgICBjb25zdCB7aW1hZ2VTaXplfSA9IHByb3BzLmV4cG9ydEltYWdlU2V0dGluZztcbiAgICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBwcm9wcy5tYXBGaWVsZHM7XG4gICAgICBpZiAoaW1hZ2VTaXplLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZVNpemUuc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBtYXBTdGF0ZS53aWR0aCAqIChtYXBTdGF0ZS5pc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzY2FsZSA+IDAgPyBzY2FsZSA6IDE7XG4gICAgfTtcblxuICAgIHNjYWxlZE1hcFN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubWFwU3R5bGVTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwU2NhbGVTZWxlY3RvcixcbiAgICAgIChtYXBTdHlsZSwgc2NhbGUpID0+ICh7XG4gICAgICAgIC4uLm1hcFN0eWxlLFxuICAgICAgICBib3R0b21NYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSwgc2NhbGUpLFxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfb25NYXBSZW5kZXIgPSBtYXAgPT4ge1xuICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCwge2ZpbHRlcjogRE9NX0ZJTFRFUl9GVU5DfSlcbiAgICAgICAgICAudGhlbih0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRGF0YVVyaSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VFcnJvcihlcnIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlRXJyb3JOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGROb3RpZmljYXRpb24oZXhwb3J0SW1hZ2VFcnJvcih7ZXJyfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHMsIHNwbGl0TWFwc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2ltYWdlU2l6ZSA9IHt9LCBsZWdlbmR9ID0gZXhwb3J0SW1hZ2VTZXR0aW5nO1xuICAgICAgY29uc3Qge21hcFN0YXRlfSA9IG1hcEZpZWxkcztcbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG5cbiAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBpbWFnZVNpemUuaW1hZ2VXIHx8IDEsXG4gICAgICAgIGhlaWdodDogaW1hZ2VTaXplLmltYWdlSCB8fCAxXG4gICAgICB9O1xuICAgICAgY29uc3Qgd2lkdGggPSBzaXplLndpZHRoIC8gKGlzU3BsaXQgPyAyIDogMSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzaXplLmhlaWdodDtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5tYXBTY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbmV3TWFwU3RhdGUgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB6b29tOiBtYXBTdGF0ZS56b29tICsgKE1hdGgubG9nMihzY2FsZSkgfHwgMClcbiAgICAgIH07XG5cbiAgICAgIC8vIGNlbnRlciBhbmQgYWxsIGxheWVyIGJvdW5kc1xuICAgICAgaWYgKGV4cG9ydEltYWdlU2V0dGluZy5jZW50ZXIpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMYXllcnMgPSBtYXBGaWVsZHMubGF5ZXJzLmZpbHRlcihcbiAgICAgICAgICAobGF5ZXIsIGlkeCkgPT5cbiAgICAgICAgICAgIGxheWVyLmlkICE9PSBHRU9DT0RFUl9MQVlFUl9JRCAmJiBsYXllci5zaG91bGRSZW5kZXJMYXllcihtYXBGaWVsZHMubGF5ZXJEYXRhW2lkeF0pXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IGZpbmRNYXBCb3VuZHMocmVuZGVyZWRMYXllcnMpO1xuICAgICAgICBjb25zdCBjZW50ZXJBbmRab29tID0gZ2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHMoYm91bmRzLCB7d2lkdGgsIGhlaWdodH0pO1xuICAgICAgICBpZiAoY2VudGVyQW5kWm9vbSkge1xuICAgICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IGNlbnRlckFuZFpvb20uem9vbSA6IG1hcFN0YXRlLnpvb207XG5cbiAgICAgICAgICBuZXdNYXBTdGF0ZS5sb25naXR1ZGUgPSBjZW50ZXJBbmRab29tLmNlbnRlclswXTtcbiAgICAgICAgICBuZXdNYXBTdGF0ZS5sYXRpdHVkZSA9IGNlbnRlckFuZFpvb20uY2VudGVyWzFdO1xuICAgICAgICAgIG5ld01hcFN0YXRlLnpvb20gPSB6b29tICsgTnVtYmVyKE1hdGgubG9nMihzY2FsZSkgfHwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcEZpZWxkcyxcbiAgICAgICAgbWFwU3R5bGU6IHRoaXMuc2NhbGVkTWFwU3R5bGVTZWxlY3Rvcih0aGlzLnByb3BzKSxcblxuICAgICAgICAvLyBvdmVycmlkZSB2aWV3cG9ydCBiYXNlZCBvbiBleHBvcnQgc2V0dGluZ3NcbiAgICAgICAgbWFwU3RhdGU6IG5ld01hcFN0YXRlLFxuICAgICAgICBtYXBDb250cm9sczoge1xuICAgICAgICAgIC8vIG92ZXJyaWRlIG1hcCBsZWdlbmQgdmlzaWJpbGl0eVxuICAgICAgICAgIG1hcExlZ2VuZDoge1xuICAgICAgICAgICAgc2hvdzogbGVnZW5kLFxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNYXBDb21wb25lbnQ6IFN0YXRpY01hcCxcbiAgICAgICAgb25NYXBSZW5kZXI6IHRoaXMuX29uTWFwUmVuZGVyLFxuICAgICAgICBpc0V4cG9ydDogdHJ1ZSxcbiAgICAgICAgZGVja0dsUHJvcHNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdCA/IChcbiAgICAgICAgPE1hcENvbnRhaW5lciBpbmRleD17MH0gey4uLm1hcFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgc3BsaXRNYXBzLm1hcCgoc2V0dGluZ3MsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIG1hcExheWVycz17c3BsaXRNYXBzW2luZGV4XS5sYXllcnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQbG90Q29udGFpbmVyIGNsYXNzTmFtZT1cImV4cG9ydC1tYXAtaW5zdGFuY2VcIj5cbiAgICAgICAgICA8U3R5bGVkTWFwQ29udGFpbmVyIHJlZj17dGhpcy5wbG90dGluZ0FyZWFSZWZ9IHdpZHRoPXtzaXplLndpZHRofSBoZWlnaHQ9e3NpemUuaGVpZ2h0fT5cbiAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxuICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICA8L1N0eWxlZFBsb3RDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIFBsb3RDb250YWluZXIucHJvcHNUeXBlcyA9IHByb3BUeXBlcztcbiAgcmV0dXJuIFBsb3RDb250YWluZXI7XG59XG4iXX0=