"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.S2VisConfigs = exports.defaultLineWidth = exports.defaultElevation = exports.S2TokenAccessor = exports.s2RequiredColumns = exports.S2_TOKEN_FIELDS = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoLayers = require("@deck.gl/geo-layers");

var _defaultSettings = require("../../constants/default-settings");

var _layerFactory = require("../layer-factory");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _s2LayerIcon = _interopRequireDefault(require("./s2-layer-icon"));

var _s2Utils = require("./s2-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var zoomFactorValue = 8;
var S2_TOKEN_FIELDS = {
  token: ['s2', 's2_token']
};
exports.S2_TOKEN_FIELDS = S2_TOKEN_FIELDS;
var s2RequiredColumns = ['token'];
exports.s2RequiredColumns = s2RequiredColumns;

var S2TokenAccessor = function S2TokenAccessor(_ref) {
  var token = _ref.token;
  return function (d) {
    return d.data[token.fieldIdx];
  };
};

exports.S2TokenAccessor = S2TokenAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultLineWidth = 1;
exports.defaultLineWidth = defaultLineWidth;
var S2VisConfigs = {
  // Filled color
  opacity: 'opacity',
  colorRange: 'colorRange',
  filled: {
    type: 'boolean',
    label: 'Fill Color',
    defaultValue: true,
    property: 'filled'
  },
  // stroke
  thickness: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.thickness), {}, {
    defaultValue: 0.5
  }),
  strokeColor: 'strokeColor',
  strokeColorRange: 'strokeColorRange',
  sizeRange: 'strokeWidthRange',
  stroked: 'stroked',
  // height
  enable3d: 'enable3d',
  elevationScale: 'elevationScale',
  heightRange: 'elevationRange',
  // wireframe
  wireframe: 'wireframe'
};
exports.S2VisConfigs = S2VisConfigs;

var S2GeometryLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(S2GeometryLayer, _Layer);

  var _super = _createSuper(S2GeometryLayer);

  function S2GeometryLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, S2GeometryLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(S2VisConfigs);

    _this.getPositionAccessor = function () {
      return S2TokenAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(S2GeometryLayer, [{
    key: "type",
    get: function get() {
      return 's2';
    }
  }, {
    key: "name",
    get: function get() {
      return 'S2';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return s2RequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _s2LayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(S2GeometryLayer.prototype), "visualChannels", this);
      return {
        color: _objectSpread(_objectSpread({}, visualChannels.color), {}, {
          accessor: 'getFillColor'
        }),
        size: _objectSpread(_objectSpread({}, visualChannels.size), {}, {
          property: 'stroke',
          accessor: 'getLineWidth',
          condition: function condition(config) {
            return config.visConfig.stroked;
          },
          defaultValue: defaultLineWidth
        }),
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          accessor: 'getLineColor',
          condition: function condition(config) {
            return config.visConfig.stroked;
          },
          nullValue: visualChannels.color.nullValue,
          defaultValue: function defaultValue(config) {
            return config.visConfig.strokeColor || config.color;
          }
        },
        height: {
          property: 'height',
          field: 'heightField',
          scale: 'heightScale',
          domain: 'heightDomain',
          range: 'heightRange',
          key: 'height',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size,
          accessor: 'getElevation',
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          nullValue: 0,
          defaultValue: defaultElevation
        }
      };
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(S2GeometryLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getS2Token) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var token = getS2Token({
          data: allData[index]
        });

        if (token) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            token: token
          });
        }
      }

      return data;
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getS2Token) {
      var centroids = allData.reduce(function (acc, entry) {
        var s2Token = getS2Token({
          data: entry
        });
        return s2Token ? [].concat((0, _toConsumableArray2["default"])(acc), [(0, _s2Utils.getS2Center)(s2Token)]) : acc;
      }, []);
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getS2Token = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var accessors = this.getAttributeAccessors();
      return _objectSpread({
        data: data,
        getS2Token: getS2Token,
        getFilterValue: gpuFilter.filterValueAccessor()
      }, accessors);
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          interactionConfig = opts.interactionConfig,
          mapState = opts.mapState;
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var zoomFactor = this.getZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;

      var updateTriggers = _objectSpread(_objectSpread({}, this.getVisualChannelUpdateTriggers()), {}, {
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      });

      return [new _geoLayers.S2Layer(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), interactionConfig), data), {}, {
        getS2Token: function getS2Token(d) {
          return d.token;
        },
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // stroke
        lineWidthScale: visConfig.thickness * zoomFactor * zoomFactorValue,
        stroked: visConfig.stroked,
        lineMiterLimit: 2,
        // Filled color
        filled: visConfig.filled,
        opacity: visConfig.opacity,
        wrapLongitude: false,
        // Elevation
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        pickable: true,
        updateTriggers: updateTriggers
      }))];
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields;
      var foundColumns = this.findDefaultColumnField(S2_TOKEN_FIELDS, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            isVisible: true,
            label: 'S2',
            columns: columns
          };
        })
      };
    }
  }]);
  return S2GeometryLayer;
}(_baseLayer["default"]);

exports["default"] = S2GeometryLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvczItZ2VvbWV0cnktbGF5ZXIvczItZ2VvbWV0cnktbGF5ZXIuanMiXSwibmFtZXMiOlsiem9vbUZhY3RvclZhbHVlIiwiUzJfVE9LRU5fRklFTERTIiwidG9rZW4iLCJzMlJlcXVpcmVkQ29sdW1ucyIsIlMyVG9rZW5BY2Nlc3NvciIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJkZWZhdWx0RWxldmF0aW9uIiwiZGVmYXVsdExpbmVXaWR0aCIsIlMyVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwiZmlsbGVkIiwidHlwZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJ0aGlja25lc3MiLCJMQVlFUl9WSVNfQ09ORklHUyIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsInNpemVSYW5nZSIsInN0cm9rZWQiLCJlbmFibGUzZCIsImVsZXZhdGlvblNjYWxlIiwiaGVpZ2h0UmFuZ2UiLCJ3aXJlZnJhbWUiLCJTMkdlb21ldHJ5TGF5ZXIiLCJwcm9wcyIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbmZpZyIsImNvbHVtbnMiLCJTMkxheWVySWNvbiIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJhY2Nlc3NvciIsInNpemUiLCJjb25kaXRpb24iLCJ2aXNDb25maWciLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJudWxsVmFsdWUiLCJoZWlnaHQiLCJoZWlnaHRGaWVsZCIsImhlaWdodERvbWFpbiIsImhlaWdodFNjYWxlIiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yRG9tYWluIiwic3Ryb2tlQ29sb3JTY2FsZSIsImdldFMyVG9rZW4iLCJhbGxEYXRhIiwiZmlsdGVyZWRJbmRleCIsImkiLCJsZW5ndGgiLCJpbmRleCIsInB1c2giLCJjZW50cm9pZHMiLCJyZWR1Y2UiLCJhY2MiLCJlbnRyeSIsInMyVG9rZW4iLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJkYXRhVG9GZWF0dXJlIiwidXBkYXRlTWV0YSIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiZ3B1RmlsdGVyIiwiZGF0YUlkIiwidXBkYXRlRGF0YSIsImFjY2Vzc29ycyIsImdldEF0dHJpYnV0ZUFjY2Vzc29ycyIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsIm9wdHMiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0YXRlIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwidXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiUzJMYXllciIsImF1dG9IaWdobGlnaHQiLCJoaWdobGlnaHRDb2xvciIsIkhJR0hMSUdIX0NPTE9SXzNEIiwibGluZVdpZHRoU2NhbGUiLCJsaW5lTWl0ZXJMaW1pdCIsIndyYXBMb25naXR1ZGUiLCJleHRydWRlZCIsInBpY2thYmxlIiwiZmllbGRzIiwiZm91bmRDb2x1bW5zIiwiZmluZERlZmF1bHRDb2x1bW5GaWVsZCIsIm1hcCIsImlzVmlzaWJsZSIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLENBQXhCO0FBRU8sSUFBTUMsZUFBZSxHQUFHO0FBQzdCQyxFQUFBQSxLQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sVUFBUDtBQURzQixDQUF4Qjs7QUFJQSxJQUFNQyxpQkFBaUIsR0FBRyxDQUFDLE9B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QyxZQUFZLEdBQUcsS0FBS0Msc0JBQUwsQ0FBNEJ4RyxlQUE1QixFQUE2Q3NHLE1BQTdDLENBQXJCOztBQUNBLFVBQUksQ0FBQ0MsWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUM1QyxNQUFuQyxFQUEyQztBQUN6QyxlQUFPO0FBQUMvQixVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUNMQSxRQUFBQSxLQUFLLEVBQUUyRSxZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQXpFLE9BQU87QUFBQSxpQkFBSztBQUNsQzBFLFlBQUFBLFNBQVMsRUFBRSxJQUR1QjtBQUVsQzVGLFlBQUFBLEtBQUssRUFBRSxJQUYyQjtBQUdsQ2tCLFlBQUFBLE9BQU8sRUFBUEE7QUFIa0MsV0FBTDtBQUFBLFNBQXhCO0FBREYsT0FBUDtBQU9EOzs7RUEvRjBDMkUscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1MyTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xuaW1wb3J0IHtISUdITElHSF9DT0xPUl8zRCwgQ0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCBTMkxheWVySWNvbiBmcm9tICcuL3MyLWxheWVyLWljb24nO1xuaW1wb3J0IHtnZXRTMkNlbnRlcn0gZnJvbSAnLi9zMi11dGlscyc7XG5cbmNvbnN0IHpvb21GYWN0b3JWYWx1ZSA9IDg7XG5cbmV4cG9ydCBjb25zdCBTMl9UT0tFTl9GSUVMRFMgPSB7XG4gIHRva2VuOiBbJ3MyJywgJ3MyX3Rva2VuJ11cbn07XG5cbmV4cG9ydCBjb25zdCBzMlJlcXVpcmVkQ29sdW1ucyA9IFsndG9rZW4nXTtcbmV4cG9ydCBjb25zdCBTMlRva2VuQWNjZXNzb3IgPSAoe3Rva2VufSkgPT4gZCA9PiBkLmRhdGFbdG9rZW4uZmllbGRJZHhdO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbGV2YXRpb24gPSA1MDA7XG5leHBvcnQgY29uc3QgZGVmYXVsdExpbmVXaWR0aCA9IDE7XG5cbmV4cG9ydCBjb25zdCBTMlZpc0NvbmZpZ3MgPSB7XG4gIC8vIEZpbGxlZCBjb2xvclxuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgZmlsbGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGxhYmVsOiAnRmlsbCBDb2xvcicsXG4gICAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xuICB9LFxuXG4gIC8vIHN0cm9rZVxuICB0aGlja25lc3M6IHtcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy50aGlja25lc3MsXG4gICAgZGVmYXVsdFZhbHVlOiAwLjVcbiAgfSxcbiAgc3Ryb2tlQ29sb3I6ICdzdHJva2VDb2xvcicsXG4gIHN0cm9rZUNvbG9yUmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcbiAgc2l6ZVJhbmdlOiAnc3Ryb2tlV2lkdGhSYW5nZScsXG4gIHN0cm9rZWQ6ICdzdHJva2VkJyxcblxuICAvLyBoZWlnaHRcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCcsXG4gIGVsZXZhdGlvblNjYWxlOiAnZWxldmF0aW9uU2NhbGUnLFxuICBoZWlnaHRSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcblxuICAvLyB3aXJlZnJhbWVcbiAgd2lyZWZyYW1lOiAnd2lyZWZyYW1lJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUzJHZW9tZXRyeUxheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKFMyVmlzQ29uZmlncyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gUzJUb2tlbkFjY2Vzc29yKHRoaXMuY29uZmlnLmNvbHVtbnMpO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzMic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ1MyJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gczJSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBTMkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVscyA9IHN1cGVyLnZpc3VhbENoYW5uZWxzO1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICAuLi52aXN1YWxDaGFubmVscy5jb2xvcixcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRGaWxsQ29sb3InXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZScsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0TGluZVdpZHRoJyxcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5zdHJva2VkLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRMaW5lV2lkdGhcbiAgICAgIH0sXG4gICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdzdHJva2VDb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc3Ryb2tlQ29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yLFxuICAgICAgICBhY2Nlc3NvcjogJ2dldExpbmVDb2xvcicsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgbnVsbFZhbHVlOiB2aXN1YWxDaGFubmVscy5jb2xvci5udWxsVmFsdWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3IgfHwgY29uZmlnLmNvbG9yXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICAgICAgZmllbGQ6ICdoZWlnaHRGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnaGVpZ2h0U2NhbGUnLFxuICAgICAgICBkb21haW46ICdoZWlnaHREb21haW4nLFxuICAgICAgICByYW5nZTogJ2hlaWdodFJhbmdlJyxcbiAgICAgICAga2V5OiAnaGVpZ2h0JyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZSxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRFbGV2YXRpb24nLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdEVsZXZhdGlvblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgaGVpZ2h0IHZpc3VhbCBjaGFubmVsXG4gICAgICBoZWlnaHRGaWVsZDogbnVsbCxcbiAgICAgIGhlaWdodERvbWFpbjogWzAsIDFdLFxuICAgICAgaGVpZ2h0U2NhbGU6ICdsaW5lYXInLFxuXG4gICAgICAvLyBhZGQgc3Ryb2tlIGNvbG9yIHZpc3VhbCBjaGFubmVsXG4gICAgICBzdHJva2VDb2xvckZpZWxkOiBudWxsLFxuICAgICAgc3Ryb2tlQ29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGU6ICdxdWFudGlsZSdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7ZmllbGRzID0gW119KSB7XG4gICAgY29uc3QgZm91bmRDb2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKFMyX1RPS0VOX0ZJRUxEUywgZmllbGRzKTtcbiAgICBpZiAoIWZvdW5kQ29sdW1ucyB8fCAhZm91bmRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHtwcm9wczogW119O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogZm91bmRDb2x1bW5zLm1hcChjb2x1bW5zID0+ICh7XG4gICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdTMicsXG4gICAgICAgIGNvbHVtbnNcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBjYWxjdWxhdGVEYXRhQXR0cmlidXRlKHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4fSwgZ2V0UzJUb2tlbikge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyZWRJbmRleFtpXTtcbiAgICAgIGNvbnN0IHRva2VuID0gZ2V0UzJUb2tlbih7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcblxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgZGF0YSBpbmRleFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGRhdGE6IGFsbERhdGFbaW5kZXhdLFxuICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRTMlRva2VuKSB7XG4gICAgY29uc3QgY2VudHJvaWRzID0gYWxsRGF0YS5yZWR1Y2UoKGFjYywgZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHMyVG9rZW4gPSBnZXRTMlRva2VuKHtkYXRhOiBlbnRyeX0pO1xuICAgICAgcmV0dXJuIHMyVG9rZW4gPyBbLi4uYWNjLCBnZXRTMkNlbnRlcihzMlRva2VuKV0gOiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoY2VudHJvaWRzKTtcbiAgICB0aGlzLmRhdGFUb0ZlYXR1cmUgPSB7Y2VudHJvaWRzfTtcbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kc30pO1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuICAgIGNvbnN0IGdldFMyVG9rZW4gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLmdldEF0dHJpYnV0ZUFjY2Vzc29ycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBnZXRTMlRva2VuLFxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKCksXG4gICAgICAuLi5hY2Nlc3NvcnNcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIob3B0cykge1xuICAgIGNvbnN0IHtkYXRhLCBncHVGaWx0ZXIsIGludGVyYWN0aW9uQ29uZmlnLCBtYXBTdGF0ZX0gPSBvcHRzO1xuXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcblxuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcztcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xuICAgICAgLi4udGhpcy5nZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMoKSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2Vyc1xuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFMyTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGdldFMyVG9rZW46IGQgPT4gZC50b2tlbixcblxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcblxuICAgICAgICAvLyBzdHJva2VcbiAgICAgICAgbGluZVdpZHRoU2NhbGU6IHZpc0NvbmZpZy50aGlja25lc3MgKiB6b29tRmFjdG9yICogem9vbUZhY3RvclZhbHVlLFxuICAgICAgICBzdHJva2VkOiB2aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgbGluZU1pdGVyTGltaXQ6IDIsXG5cbiAgICAgICAgLy8gRmlsbGVkIGNvbG9yXG4gICAgICAgIGZpbGxlZDogdmlzQ29uZmlnLmZpbGxlZCxcbiAgICAgICAgb3BhY2l0eTogdmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuXG4gICAgICAgIC8vIEVsZXZhdGlvblxuICAgICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlICogZWxlWm9vbUZhY3RvcixcbiAgICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcblxuICAgICAgICB3aXJlZnJhbWU6IHZpc0NvbmZpZy53aXJlZnJhbWUsXG5cbiAgICAgICAgcGlja2FibGU6IHRydWUsXG5cbiAgICAgICAgdXBkYXRlVHJpZ2dlcnNcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxufVxuIl19