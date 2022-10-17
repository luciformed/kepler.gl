"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultRadius = exports.defaultLineWidth = exports.defaultElevation = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.geojsonVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _typeAnalyzer = require("type-analyzer");

var _baseLayer = _interopRequireWildcard(require("../base-layer"));

var _layers = require("@deck.gl/layers");

var _geojsonUtils = require("./geojson-utils");

var _geojsonLayerIcon = _interopRequireDefault(require("./geojson-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _layerFactory = require("../layer-factory");

var _SUPPORTED_ANALYZER_T;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SUPPORTED_ANALYZER_TYPES = (_SUPPORTED_ANALYZER_T = {}, (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, true), (0, _defineProperty2["default"])(_SUPPORTED_ANALYZER_T, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, true), _SUPPORTED_ANALYZER_T);
var geojsonVisConfigs = {
  opacity: 'opacity',
  strokeOpacity: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.opacity), {}, {
    property: 'strokeOpacity'
  }),
  thickness: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.thickness), {}, {
    defaultValue: 0.5
  }),
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radius: 'radius',
  sizeRange: 'strokeWidthRange',
  radiusRange: 'radiusRange',
  heightRange: 'elevationRange',
  elevationScale: 'elevationScale',
  stroked: 'stroked',
  filled: 'filled',
  enable3d: 'enable3d',
  wireframe: 'wireframe'
};
exports.geojsonVisConfigs = geojsonVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
}; // access feature properties from geojson sub layer


exports.featureAccessor = featureAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultLineWidth = 1;
exports.defaultLineWidth = defaultLineWidth;
var defaultRadius = 1;
exports.defaultRadius = defaultRadius;

var GeoJsonLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(GeoJsonLayer, _Layer);

  var _super = _createSuper(GeoJsonLayer);

  function GeoJsonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoJsonLayer);
    _this = _super.call(this, props);
    _this.dataToFeature = [];

    _this.registerVisConfig(geojsonVisConfigs);

    _this.getPositionAccessor = function () {
      return featureAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(GeoJsonLayer, [{
    key: "type",
    get: function get() {
      return 'geojson';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Polygon';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _geojsonLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this);
      return {
        color: _objectSpread(_objectSpread({}, visualChannels.color), {}, {
          accessor: 'getFillColor',
          condition: function condition(config) {
            return config.visConfig.filled;
          },
          nullValue: visualChannels.color.nullValue,
          getAttributeValue: function getAttributeValue(config) {
            return function (d) {
              return d.properties.fillColor || config.color;
            };
          },
          // used this to get updateTriggers
          defaultValue: function defaultValue(config) {
            return config.color;
          }
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
          getAttributeValue: function getAttributeValue(config) {
            return function (d) {
              return d.properties.lineColor || config.visConfig.strokeColor || config.color;
            };
          },
          // used this to get updateTriggers
          defaultValue: function defaultValue(config) {
            return config.visConfig.strokeColor || config.color;
          }
        },
        size: _objectSpread(_objectSpread({}, visualChannels.size), {}, {
          property: 'stroke',
          accessor: 'getLineWidth',
          condition: function condition(config) {
            return config.visConfig.stroked;
          },
          nullValue: 0,
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.lineWidth || defaultLineWidth;
            };
          }
        }),
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
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.elevation || defaultElevation;
            };
          }
        },
        radius: {
          property: 'radius',
          field: 'radiusField',
          scale: 'radiusScale',
          domain: 'radiusDomain',
          range: 'radiusRange',
          key: 'radius',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius,
          accessor: 'getRadius',
          nullValue: 0,
          getAttributeValue: function getAttributeValue() {
            return function (d) {
              return d.properties.radius || defaultRadius;
            };
          }
        }
      };
    }
  }, {
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add radius visual channel
        radiusField: null,
        radiusDomain: [0, 1],
        radiusScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object, allData) {
      // index of allData is saved to feature.properties
      return allData[object.properties.index];
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var _this2 = this;

      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      return filteredIndex.map(function (i) {
        return _this2.dataToFeature[i];
      }).filter(function (d) {
        return d;
      });
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var _datasets$this$config = datasets[this.config.dataId],
          allData = _datasets$this$config.allData,
          gpuFilter = _datasets$this$config.gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var valueAccessor = function valueAccessor(f) {
        return allData[f.properties.index];
      };

      var indexAccessor = function indexAccessor(f) {
        return f.properties.index;
      };

      var accessors = this.getAttributeAccessors(valueAccessor);
      return _objectSpread({
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor(indexAccessor, valueAccessor)
      }, accessors);
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();
      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(this.dataToFeature); // if any of the feature has properties.radius set to be true

      var fixedRadius = Boolean(this.dataToFeature.find(function (d) {
        return d && d.properties && d.properties.radius;
      })); // keep a record of what type of geometry the collection has

      var featureTypes = (0, _geojsonUtils.getGeojsonFeatureTypes)(this.dataToFeature);
      this.updateMeta({
        bounds: bounds,
        fixedRadius: fixedRadius,
        featureTypes: featureTypes
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(_ref3) {
      var allData = _ref3.allData;
      this.updateLayerMeta(allData);
      var featureTypes = this.meta.featureTypes; // default settings is stroke: true, filled: false

      if (featureTypes && featureTypes.polygon) {
        // set both fill and stroke to true
        return this.updateLayerVisConfig({
          filled: true,
          stroked: true,
          strokeColor: _baseLayer.colorMaker.next().value
        });
      } else if (featureTypes && featureTypes.point) {
        // set fill to true if detect point
        return this.updateLayerVisConfig({
          filled: true,
          stroked: false
        });
      }

      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var _this$meta = this.meta,
          fixedRadius = _this$meta.fixedRadius,
          featureTypes = _this$meta.featureTypes;
      var radiusScale = this.getRadiusScaleByZoom(mapState, fixedRadius);
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var layerProps = {
        lineWidthScale: visConfig.thickness * zoomFactor * 8,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        pointRadiusScale: radiusScale,
        lineMiterLimit: 4
      };

      var updateTriggers = _objectSpread(_objectSpread({}, this.getVisualChannelUpdateTriggers()), {}, {
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      });

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var opaOverwrite = {
        opacity: visConfig.strokeOpacity
      };
      var pickable = interactionConfig.tooltip.enabled;
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _layers.GeoJsonLayer(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), layerProps), data), {}, {
        pickable: pickable,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        autoHighlight: visConfig.enable3d && pickable,
        stroked: visConfig.stroked,
        filled: visConfig.filled,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        wrapLongitude: false,
        lineMiterLimit: 2,
        rounded: true,
        updateTriggers: updateTriggers,
        _subLayerProps: _objectSpread(_objectSpread(_objectSpread({}, featureTypes.polygon ? {
          'polygons-stroke': opaOverwrite
        } : {}), featureTypes.line ? {
          'line-strings': opaOverwrite
        } : {}), featureTypes.point ? {
          points: {
            lineOpacity: visConfig.strokeOpacity
          }
        } : {})
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        wrapLongitude: false,
        data: [hoveredObject],
        getLineWidth: data.getLineWidth,
        getRadius: data.getRadius,
        getElevation: data.getElevation,
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        // always draw outline
        stroked: true,
        filled: false
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _this3 = this;

      var label = _ref4.label,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson' && SUPPORTED_ANALYZER_TYPES[f.analyzerType];
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var foundColumns = this.findDefaultColumnField(defaultColumns, fields);

      if (!foundColumns || !foundColumns.length) {
        return {
          props: []
        };
      }

      return {
        props: foundColumns.map(function (columns) {
          return {
            label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this3.type,
            columns: columns,
            isVisible: true
          };
        })
      };
    }
  }]);
  return GeoJsonLayer;
}(_baseLayer["default"]);

exports["default"] = GeoJsonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIlNVUFBPUlRFRF9BTkFMWVpFUl9UWVBFUyIsIkRBVEFfVFlQRVMiLCJHRU9NRVRSWSIsIkdFT01FVFJZX0ZST01fU1RSSU5HIiwiUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklORyIsImdlb2pzb25WaXNDb25maWdzIiwib3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiLCJMQVlFUl9WSVNfQ09ORklHUyIsInByb3BlcnR5IiwidGhpY2tuZXNzIiwiZGVmYXVsdFZhbHVlIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1cyIsInNpemVSYW5nZSIsInJhZGl1c1JhbmdlIiwiaGVpZ2h0UmFuZ2UiLCJlbGV2YXRpb25TY2FsZSIsInN0cm9rZWQiLCJmaWxsZWQiLCJlbmFibGUzZCIsIndpcmVmcmFtZSIsImdlb0pzb25SZXF1aXJlZENvbHVtbnMiLCJmZWF0dXJlQWNjZXNzb3IiLCJnZW9qc29uIiwiZCIsImZpZWxkSWR4IiwiZGVmYXVsdEVsZXZhdGlvbiIsImRlZmF1bHRMaW5lV2lkdGgiLCJkZWZhdWx0UmFkaXVzIiwiR2VvSnNvbkxheWVyIiwicHJvcHMiLCJkYXRhVG9GZWF0dXJlIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsIkdlb2pzb25MYXllckljb24iLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiYWNjZXNzb3IiLCJjb25kaXRpb24iLCJ2aXNDb25maWciLCJudWxsVmFsdWUiLCJnZXRBdHRyaWJ1dGVWYWx1ZSIsInByb3BlcnRpZXMiLCJmaWxsQ29sb3IiLCJmaWVsZCIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJsaW5lQ29sb3IiLCJzaXplIiwibGluZVdpZHRoIiwiaGVpZ2h0IiwiZWxldmF0aW9uIiwiZ2V0RmVhdHVyZSIsImhlaWdodEZpZWxkIiwiaGVpZ2h0RG9tYWluIiwiaGVpZ2h0U2NhbGUiLCJyYWRpdXNGaWVsZCIsInJhZGl1c0RvbWFpbiIsInJhZGl1c1NjYWxlIiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yRG9tYWluIiwic3Ryb2tlQ29sb3JTY2FsZSIsIm9iamVjdCIsImFsbERhdGEiLCJpbmRleCIsImdldFBvc2l0aW9uIiwiZmlsdGVyZWRJbmRleCIsIm1hcCIsImkiLCJmaWx0ZXIiLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsImRhdGFJZCIsImdwdUZpbHRlciIsInVwZGF0ZURhdGEiLCJkYXRhIiwidmFsdWVBY2Nlc3NvciIsImYiLCJpbmRleEFjY2Vzc29yIiwiYWNjZXNzb3JzIiwiZ2V0QXR0cmlidXRlQWNjZXNzb3JzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwiYm91bmRzIiwiZml4ZWRSYWRpdXMiLCJCb29sZWFuIiwiZmluZCIsImZlYXR1cmVUeXBlcyIsInVwZGF0ZU1ldGEiLCJ1cGRhdGVMYXllck1ldGEiLCJtZXRhIiwicG9seWdvbiIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiY29sb3JNYWtlciIsIm5leHQiLCJ2YWx1ZSIsInBvaW50Iiwib3B0cyIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJ6b29tRmFjdG9yIiwiZ2V0Wm9vbUZhY3RvciIsImVsZVpvb21GYWN0b3IiLCJnZXRFbGV2YXRpb25ab29tRmFjdG9yIiwibGF5ZXJQcm9wcyIsImxpbmVXaWR0aFNjYWxlIiwicG9pbnRSYWRpdXNTY2FsZSIsImxpbmVNaXRlckxpbWl0IiwidXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJmaWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzIiwiZGVmYXVsdExheWVyUHJvcHMiLCJnZXREZWZhdWx0RGVja0xheWVyUHJvcHMiLCJvcGFPdmVyd3JpdGUiLCJwaWNrYWJsZSIsInRvb2x0aXAiLCJlbmFibGVkIiwiaG92ZXJlZE9iamVjdCIsImhhc0hvdmVyZWRPYmplY3QiLCJEZWNrR0xHZW9Kc29uTGF5ZXIiLCJoaWdobGlnaHRDb2xvciIsIkhJR0hMSUdIX0NPTE9SXzNEIiwiYXV0b0hpZ2hsaWdodCIsImV4dHJ1ZGVkIiwid3JhcExvbmdpdHVkZSIsInJvdW5kZWQiLCJfc3ViTGF5ZXJQcm9wcyIsImxpbmUiLCJwb2ludHMiLCJsaW5lT3BhY2l0eSIsImdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMiLCJnZXRMaW5lV2lkdGgiLCJnZXRSYWRpdXMiLCJnZXRFbGV2YXRpb24iLCJnZXRMaW5lQ29sb3IiLCJnZXRGaWxsQ29sb3IiLCJsYWJlbCIsImZpZWxkcyIsImdlb2pzb25Db2x1bW5zIiwidHlwZSIsImFuYWx5emVyVHlwZSIsIm5hbWUiLCJkZWZhdWx0Q29sdW1ucyIsIkdFT0pTT05fRklFTERTIiwiZm91bmRDb2x1bW5zIiwiZmluZERlZmF1bHRDb2x1bW5GaWVsZCIsImxlbmd0aCIsInJlcGxhY2UiLCJpc1Zpc2libGUiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLHdGQUMzQkMseUJBQVdDLFFBRGdCLEVBQ0wsSUFESywyREFFM0JELHlCQUFXRSxvQkFGZ0IsRUFFTyxJQUZQLDJEQUczQkYseUJBQVdHLHlCQUhnQixFQUdZLElBSFoseUJBQTlCO0FBTU8sSUFBTUMsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsYUFBYSxrQ0FDUkMsZ0NBQWtCRixPQURWO0FBRVhHLElBQUFBLFFBQVEsRUFBRTtBQUZDLElB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WSxDQUFDL0UsR0FBYixDQUFpQixVQUFBdEMsT0FBTztBQUFBLGlCQUFLO0FBQ2xDNkcsWUFBQUEsS0FBSyxFQUFHLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssQ0FBQ1csT0FBTixDQUFjLFdBQWQsRUFBMkIsRUFBM0IsQ0FBOUIsSUFBaUUsTUFBSSxDQUFDUixJQUQzQztBQUVsQ2hILFlBQUFBLE9BQU8sRUFBUEEsT0FGa0M7QUFHbEN5SCxZQUFBQSxTQUFTLEVBQUU7QUFIdUIsV0FBTDtBQUFBLFNBQXhCO0FBREYsT0FBUDtBQU9EOzs7RUFsSHVDQyxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCB7REFUQV9UWVBFU30gZnJvbSAndHlwZS1hbmFseXplcic7XG5cbmltcG9ydCBMYXllciwge2NvbG9yTWFrZXJ9IGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xuaW1wb3J0IHtHZW9Kc29uTGF5ZXIgYXMgRGVja0dMR2VvSnNvbkxheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IHtnZXRHZW9qc29uRGF0YU1hcHMsIGdldEdlb2pzb25Cb3VuZHMsIGdldEdlb2pzb25GZWF0dXJlVHlwZXN9IGZyb20gJy4vZ2VvanNvbi11dGlscyc7XG5pbXBvcnQgR2VvanNvbkxheWVySWNvbiBmcm9tICcuL2dlb2pzb24tbGF5ZXItaWNvbic7XG5pbXBvcnQge0dFT0pTT05fRklFTERTLCBISUdITElHSF9DT0xPUl8zRCwgQ0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuY29uc3QgU1VQUE9SVEVEX0FOQUxZWkVSX1RZUEVTID0ge1xuICBbREFUQV9UWVBFUy5HRU9NRVRSWV06IHRydWUsXG4gIFtEQVRBX1RZUEVTLkdFT01FVFJZX0ZST01fU1RSSU5HXTogdHJ1ZSxcbiAgW0RBVEFfVFlQRVMuUEFJUl9HRU9NRVRSWV9GUk9NX1NUUklOR106IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBnZW9qc29uVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBzdHJva2VPcGFjaXR5OiB7XG4gICAgLi4uTEFZRVJfVklTX0NPTkZJR1Mub3BhY2l0eSxcbiAgICBwcm9wZXJ0eTogJ3N0cm9rZU9wYWNpdHknXG4gIH0sXG4gIHRoaWNrbmVzczoge1xuICAgIC4uLkxBWUVSX1ZJU19DT05GSUdTLnRoaWNrbmVzcyxcbiAgICBkZWZhdWx0VmFsdWU6IDAuNVxuICB9LFxuICBzdHJva2VDb2xvcjogJ3N0cm9rZUNvbG9yJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzdHJva2VDb2xvclJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gIHJhZGl1czogJ3JhZGl1cycsXG5cbiAgc2l6ZVJhbmdlOiAnc3Ryb2tlV2lkdGhSYW5nZScsXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICBoZWlnaHRSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZScsXG4gIHN0cm9rZWQ6ICdzdHJva2VkJyxcbiAgZmlsbGVkOiAnZmlsbGVkJyxcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCcsXG4gIHdpcmVmcmFtZTogJ3dpcmVmcmFtZSdcbn07XG5cbmV4cG9ydCBjb25zdCBnZW9Kc29uUmVxdWlyZWRDb2x1bW5zID0gWydnZW9qc29uJ107XG5leHBvcnQgY29uc3QgZmVhdHVyZUFjY2Vzc29yID0gKHtnZW9qc29ufSkgPT4gZCA9PiBkW2dlb2pzb24uZmllbGRJZHhdO1xuLy8gYWNjZXNzIGZlYXR1cmUgcHJvcGVydGllcyBmcm9tIGdlb2pzb24gc3ViIGxheWVyXG5leHBvcnQgY29uc3QgZGVmYXVsdEVsZXZhdGlvbiA9IDUwMDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0TGluZVdpZHRoID0gMTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmFkaXVzID0gMTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvSnNvbkxheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IFtdO1xuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoZ2VvanNvblZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IGZlYXR1cmVBY2Nlc3Nvcih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZ2VvanNvbic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ1BvbHlnb24nO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gR2VvanNvbkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICBjb25zdCB2aXN1YWxDaGFubmVscyA9IHN1cGVyLnZpc3VhbENoYW5uZWxzO1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICAuLi52aXN1YWxDaGFubmVscy5jb2xvcixcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRGaWxsQ29sb3InLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmZpbGxlZCxcbiAgICAgICAgbnVsbFZhbHVlOiB2aXN1YWxDaGFubmVscy5jb2xvci5udWxsVmFsdWUsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiBjb25maWcgPT4gZCA9PiBkLnByb3BlcnRpZXMuZmlsbENvbG9yIHx8IGNvbmZpZy5jb2xvcixcbiAgICAgICAgLy8gdXNlZCB0aGlzIHRvIGdldCB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZyA9PiBjb25maWcuY29sb3JcbiAgICAgIH0sXG4gICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdzdHJva2VDb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc3Ryb2tlQ29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yLFxuICAgICAgICBhY2Nlc3NvcjogJ2dldExpbmVDb2xvcicsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgbnVsbFZhbHVlOiB2aXN1YWxDaGFubmVscy5jb2xvci5udWxsVmFsdWUsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiBjb25maWcgPT4gZCA9PlxuICAgICAgICAgIGQucHJvcGVydGllcy5saW5lQ29sb3IgfHwgY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvciB8fCBjb25maWcuY29sb3IsXG4gICAgICAgIC8vIHVzZWQgdGhpcyB0byBnZXQgdXBkYXRlVHJpZ2dlcnNcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvciB8fCBjb25maWcuY29sb3JcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIC4uLnZpc3VhbENoYW5uZWxzLnNpemUsXG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlJyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRMaW5lV2lkdGgnLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLnN0cm9rZWQsXG4gICAgICAgIG51bGxWYWx1ZTogMCxcbiAgICAgICAgZ2V0QXR0cmlidXRlVmFsdWU6ICgpID0+IGQgPT4gZC5wcm9wZXJ0aWVzLmxpbmVXaWR0aCB8fCBkZWZhdWx0TGluZVdpZHRoXG4gICAgICB9LFxuICAgICAgaGVpZ2h0OiB7XG4gICAgICAgIHByb3BlcnR5OiAnaGVpZ2h0JyxcbiAgICAgICAgZmllbGQ6ICdoZWlnaHRGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnaGVpZ2h0U2NhbGUnLFxuICAgICAgICBkb21haW46ICdoZWlnaHREb21haW4nLFxuICAgICAgICByYW5nZTogJ2hlaWdodFJhbmdlJyxcbiAgICAgICAga2V5OiAnaGVpZ2h0JyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuc2l6ZSxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRFbGV2YXRpb24nLFxuICAgICAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcudmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiAoKSA9PiBkID0+IGQucHJvcGVydGllcy5lbGV2YXRpb24gfHwgZGVmYXVsdEVsZXZhdGlvblxuICAgICAgfSxcbiAgICAgIHJhZGl1czoge1xuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXG4gICAgICAgIGZpZWxkOiAncmFkaXVzRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3JhZGl1c1NjYWxlJyxcbiAgICAgICAgZG9tYWluOiAncmFkaXVzRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIGtleTogJ3JhZGl1cycsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnJhZGl1cyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRSYWRpdXMnLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGdldEF0dHJpYnV0ZVZhbHVlOiAoKSA9PiBkID0+IGQucHJvcGVydGllcy5yYWRpdXMgfHwgZGVmYXVsdFJhZGl1c1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBnZXRQb3NpdGlvbkFjY2Vzc29yKCkge1xuICAgIHJldHVybiB0aGlzLmdldEZlYXR1cmUodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtsYWJlbCwgZmllbGRzID0gW119KSB7XG4gICAgY29uc3QgZ2VvanNvbkNvbHVtbnMgPSBmaWVsZHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdnZW9qc29uJyAmJiBTVVBQT1JURURfQU5BTFlaRVJfVFlQRVNbZi5hbmFseXplclR5cGVdKVxuICAgICAgLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0Q29sdW1ucyA9IHtcbiAgICAgIGdlb2pzb246IHVuaXEoWy4uLkdFT0pTT05fRklFTERTLmdlb2pzb24sIC4uLmdlb2pzb25Db2x1bW5zXSlcbiAgICB9O1xuXG4gICAgY29uc3QgZm91bmRDb2x1bW5zID0gdGhpcy5maW5kRGVmYXVsdENvbHVtbkZpZWxkKGRlZmF1bHRDb2x1bW5zLCBmaWVsZHMpO1xuICAgIGlmICghZm91bmRDb2x1bW5zIHx8ICFmb3VuZENvbHVtbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBmb3VuZENvbHVtbnMubWFwKGNvbHVtbnMgPT4gKHtcbiAgICAgICAgbGFiZWw6ICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnJlcGxhY2UoL1xcLlteLy5dKyQvLCAnJykpIHx8IHRoaXMudHlwZSxcbiAgICAgICAgY29sdW1ucyxcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgLy8gYWRkIGhlaWdodCB2aXN1YWwgY2hhbm5lbFxuICAgICAgaGVpZ2h0RmllbGQ6IG51bGwsXG4gICAgICBoZWlnaHREb21haW46IFswLCAxXSxcbiAgICAgIGhlaWdodFNjYWxlOiAnbGluZWFyJyxcblxuICAgICAgLy8gYWRkIHJhZGl1cyB2aXN1YWwgY2hhbm5lbFxuICAgICAgcmFkaXVzRmllbGQ6IG51bGwsXG4gICAgICByYWRpdXNEb21haW46IFswLCAxXSxcbiAgICAgIHJhZGl1c1NjYWxlOiAnbGluZWFyJyxcblxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogbnVsbCxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXG4gICAgfTtcbiAgfVxuXG4gIGdldEhvdmVyRGF0YShvYmplY3QsIGFsbERhdGEpIHtcbiAgICAvLyBpbmRleCBvZiBhbGxEYXRhIGlzIHNhdmVkIHRvIGZlYXR1cmUucHJvcGVydGllc1xuICAgIHJldHVybiBhbGxEYXRhW29iamVjdC5wcm9wZXJ0aWVzLmluZGV4XTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIHJldHVybiBmaWx0ZXJlZEluZGV4Lm1hcChpID0+IHRoaXMuZGF0YVRvRmVhdHVyZVtpXSkuZmlsdGVyKGQgPT4gZCk7XG4gIH1cblxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xuICAgIGNvbnN0IHthbGxEYXRhLCBncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgY29uc3QgdmFsdWVBY2Nlc3NvciA9IGYgPT4gYWxsRGF0YVtmLnByb3BlcnRpZXMuaW5kZXhdO1xuICAgIGNvbnN0IGluZGV4QWNjZXNzb3IgPSBmID0+IGYucHJvcGVydGllcy5pbmRleDtcbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLmdldEF0dHJpYnV0ZUFjY2Vzc29ycyh2YWx1ZUFjY2Vzc29yKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZUFjY2Vzc29yKGluZGV4QWNjZXNzb3IsIHZhbHVlQWNjZXNzb3IpLFxuICAgICAgLi4uYWNjZXNzb3JzXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhKSB7XG4gICAgY29uc3QgZ2V0RmVhdHVyZSA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IGdldEdlb2pzb25EYXRhTWFwcyhhbGxEYXRhLCBnZXRGZWF0dXJlKTtcblxuICAgIC8vIGdldCBib3VuZHMgZnJvbSBmZWF0dXJlc1xuICAgIGNvbnN0IGJvdW5kcyA9IGdldEdlb2pzb25Cb3VuZHModGhpcy5kYXRhVG9GZWF0dXJlKTtcbiAgICAvLyBpZiBhbnkgb2YgdGhlIGZlYXR1cmUgaGFzIHByb3BlcnRpZXMucmFkaXVzIHNldCB0byBiZSB0cnVlXG4gICAgY29uc3QgZml4ZWRSYWRpdXMgPSBCb29sZWFuKFxuICAgICAgdGhpcy5kYXRhVG9GZWF0dXJlLmZpbmQoZCA9PiBkICYmIGQucHJvcGVydGllcyAmJiBkLnByb3BlcnRpZXMucmFkaXVzKVxuICAgICk7XG5cbiAgICAvLyBrZWVwIGEgcmVjb3JkIG9mIHdoYXQgdHlwZSBvZiBnZW9tZXRyeSB0aGUgY29sbGVjdGlvbiBoYXNcbiAgICBjb25zdCBmZWF0dXJlVHlwZXMgPSBnZXRHZW9qc29uRmVhdHVyZVR5cGVzKHRoaXMuZGF0YVRvRmVhdHVyZSk7XG5cbiAgICB0aGlzLnVwZGF0ZU1ldGEoe2JvdW5kcywgZml4ZWRSYWRpdXMsIGZlYXR1cmVUeXBlc30pO1xuICB9XG5cbiAgc2V0SW5pdGlhbExheWVyQ29uZmlnKHthbGxEYXRhfSkge1xuICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpO1xuXG4gICAgY29uc3Qge2ZlYXR1cmVUeXBlc30gPSB0aGlzLm1ldGE7XG4gICAgLy8gZGVmYXVsdCBzZXR0aW5ncyBpcyBzdHJva2U6IHRydWUsIGZpbGxlZDogZmFsc2VcbiAgICBpZiAoZmVhdHVyZVR5cGVzICYmIGZlYXR1cmVUeXBlcy5wb2x5Z29uKSB7XG4gICAgICAvLyBzZXQgYm90aCBmaWxsIGFuZCBzdHJva2UgdG8gdHJ1ZVxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlTGF5ZXJWaXNDb25maWcoe1xuICAgICAgICBmaWxsZWQ6IHRydWUsXG4gICAgICAgIHN0cm9rZWQ6IHRydWUsXG4gICAgICAgIHN0cm9rZUNvbG9yOiBjb2xvck1ha2VyLm5leHQoKS52YWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmZWF0dXJlVHlwZXMgJiYgZmVhdHVyZVR5cGVzLnBvaW50KSB7XG4gICAgICAvLyBzZXQgZmlsbCB0byB0cnVlIGlmIGRldGVjdCBwb2ludFxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlTGF5ZXJWaXNDb25maWcoe2ZpbGxlZDogdHJ1ZSwgc3Ryb2tlZDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBtYXBTdGF0ZSwgaW50ZXJhY3Rpb25Db25maWd9ID0gb3B0cztcblxuICAgIGNvbnN0IHtmaXhlZFJhZGl1cywgZmVhdHVyZVR5cGVzfSA9IHRoaXMubWV0YTtcbiAgICBjb25zdCByYWRpdXNTY2FsZSA9IHRoaXMuZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKTtcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCBlbGVab29tRmFjdG9yID0gdGhpcy5nZXRFbGV2YXRpb25ab29tRmFjdG9yKG1hcFN0YXRlKTtcblxuICAgIGNvbnN0IHt2aXNDb25maWd9ID0gdGhpcy5jb25maWc7XG5cbiAgICBjb25zdCBsYXllclByb3BzID0ge1xuICAgICAgbGluZVdpZHRoU2NhbGU6IHZpc0NvbmZpZy50aGlja25lc3MgKiB6b29tRmFjdG9yICogOCxcbiAgICAgIGVsZXZhdGlvblNjYWxlOiB2aXNDb25maWcuZWxldmF0aW9uU2NhbGUgKiBlbGVab29tRmFjdG9yLFxuICAgICAgcG9pbnRSYWRpdXNTY2FsZTogcmFkaXVzU2NhbGUsXG4gICAgICBsaW5lTWl0ZXJMaW1pdDogNFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIC4uLnRoaXMuZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKCksXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICBjb25zdCBvcGFPdmVyd3JpdGUgPSB7XG4gICAgICBvcGFjaXR5OiB2aXNDb25maWcuc3Ryb2tlT3BhY2l0eVxuICAgIH07XG5cbiAgICBjb25zdCBwaWNrYWJsZSA9IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuZW5hYmxlZDtcbiAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy5oYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEhvdmVyZWQpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBEZWNrR0xHZW9Kc29uTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgcGlja2FibGUsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkICYmIHBpY2thYmxlLFxuICAgICAgICBzdHJva2VkOiB2aXNDb25maWcuc3Ryb2tlZCxcbiAgICAgICAgZmlsbGVkOiB2aXNDb25maWcuZmlsbGVkLFxuICAgICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICB3aXJlZnJhbWU6IHZpc0NvbmZpZy53aXJlZnJhbWUsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICBsaW5lTWl0ZXJMaW1pdDogMixcbiAgICAgICAgcm91bmRlZDogdHJ1ZSxcbiAgICAgICAgdXBkYXRlVHJpZ2dlcnMsXG4gICAgICAgIF9zdWJMYXllclByb3BzOiB7XG4gICAgICAgICAgLi4uKGZlYXR1cmVUeXBlcy5wb2x5Z29uID8geydwb2x5Z29ucy1zdHJva2UnOiBvcGFPdmVyd3JpdGV9IDoge30pLFxuICAgICAgICAgIC4uLihmZWF0dXJlVHlwZXMubGluZSA/IHsnbGluZS1zdHJpbmdzJzogb3BhT3ZlcndyaXRlfSA6IHt9KSxcbiAgICAgICAgICAuLi4oZmVhdHVyZVR5cGVzLnBvaW50XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgIGxpbmVPcGFjaXR5OiB2aXNDb25maWcuc3Ryb2tlT3BhY2l0eVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fSlcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAuLi4oaG92ZXJlZE9iamVjdCAmJiAhdmlzQ29uZmlnLmVuYWJsZTNkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IERlY2tHTEdlb0pzb25MYXllcih7XG4gICAgICAgICAgICAgIC4uLnRoaXMuZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcygpLFxuICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgZGF0YTogW2hvdmVyZWRPYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lV2lkdGg6IGRhdGEuZ2V0TGluZVdpZHRoLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRFbGV2YXRpb246IGRhdGEuZ2V0RWxldmF0aW9uLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICAvLyBhbHdheXMgZHJhdyBvdXRsaW5lXG4gICAgICAgICAgICAgIHN0cm9rZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGZpbGxlZDogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==