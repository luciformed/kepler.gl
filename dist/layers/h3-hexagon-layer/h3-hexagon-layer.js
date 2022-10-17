"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HexagonIdVisConfigs = exports.defaultCoverage = exports.defaultElevation = exports.hexIdAccessor = exports.hexIdRequiredColumns = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _datasetUtils = require("../../utils/dataset-utils");

var _layers = require("@deck.gl/layers");

var _geoLayers = require("@deck.gl/geo-layers");

var _enhancedColumnLayer = _interopRequireDefault(require("../../deckgl-layers/column-layer/enhanced-column-layer"));

var _h3Utils = require("./h3-utils");

var _h3HexagonLayerIcon = _interopRequireDefault(require("./h3-hexagon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_LINE_SCALE_VALUE = 8;
var hexIdRequiredColumns = ['hex_id'];
exports.hexIdRequiredColumns = hexIdRequiredColumns;

var hexIdAccessor = function hexIdAccessor(_ref) {
  var hex_id = _ref.hex_id;
  return function (d) {
    return d.data[hex_id.fieldIdx];
  };
};

exports.hexIdAccessor = hexIdAccessor;
var defaultElevation = 500;
exports.defaultElevation = defaultElevation;
var defaultCoverage = 1;
exports.defaultCoverage = defaultCoverage;
var HexagonIdVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  coverage: 'coverage',
  enable3d: 'enable3d',
  sizeRange: 'elevationRange',
  coverageRange: 'coverageRange',
  elevationScale: 'elevationScale'
};
exports.HexagonIdVisConfigs = HexagonIdVisConfigs;

var HexagonIdLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(HexagonIdLayer, _Layer);

  var _super = _createSuper(HexagonIdLayer);

  function HexagonIdLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonIdLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(HexagonIdVisConfigs);

    _this.getPositionAccessor = function () {
      return hexIdAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(HexagonIdLayer, [{
    key: "type",
    get: function get() {
      return 'hexagonId';
    }
  }, {
    key: "name",
    get: function get() {
      return 'H3';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return hexIdRequiredColumns;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      // use hexagon layer icon for now
      return _h3HexagonLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "visualChannels", this);
      return {
        color: _objectSpread(_objectSpread({}, visualChannels.color), {}, {
          accessor: 'getFillColor'
        }),
        size: _objectSpread(_objectSpread({}, visualChannels.size), {}, {
          property: 'height',
          accessor: 'getElevation',
          nullValue: 0,
          condition: function condition(config) {
            return config.visConfig.enable3d;
          },
          defaultValue: defaultElevation
        }),
        coverage: {
          property: 'coverage',
          field: 'coverageField',
          scale: 'coverageScale',
          domain: 'coverageDomain',
          range: 'coverageRange',
          key: 'coverage',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.radius,
          accessor: 'getCoverage',
          nullValue: 0,
          defaultValue: defaultCoverage
        }
      };
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(dataset) {
      var defaultColorField = (0, _datasetUtils.findDefaultColorField)(dataset);

      if (defaultColorField) {
        this.updateLayerConfig({
          colorField: defaultColorField
        });
        this.updateLayerVisualChannel(dataset, 'color');
      }

      return this;
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HexagonIdLayer.prototype), "getDefaultLayerConfig", this).call(this, props)), {}, {
        // add height visual channel
        coverageField: null,
        coverageDomain: [0, 1],
        coverageScale: 'linear'
      });
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getHexId) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var id = getHexId({
          data: allData[index]
        });
        var centroid = this.dataToFeature.centroids[index];

        if (centroid) {
          data.push({
            // keep a reference to the original data index
            index: index,
            data: allData[index],
            id: id,
            centroid: centroid
          });
        }
      }

      return data;
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var gpuFilter = datasets[this.config.dataId].gpuFilter;
      var getHexId = this.getPositionAccessor();

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var accessors = this.getAttributeAccessors();
      return _objectSpread({
        data: data,
        getHexId: getHexId,
        getFilterValue: gpuFilter.filterValueAccessor()
      }, accessors);
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getHexId) {
      var centroids = allData.map(function (d, index) {
        var id = getHexId({
          data: d
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return null;
        } // save a reference of centroids to dataToFeature
        // so we don't have to re calculate it again


        return (0, _h3Utils.getCentroid)({
          id: id
        });
      });
      var bounds = this.getPointsBounds(centroids);
      this.dataToFeature = {
        centroids: centroids
      };
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var config = this.config;
      var visConfig = config.visConfig;
      var updateTriggers = this.getVisualChannelUpdateTriggers();
      var h3HexagonLayerTriggers = {
        getHexagon: this.config.columns,
        getFillColor: updateTriggers.getFillColor,
        getElevation: updateTriggers.getElevation,
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      };
      var columnLayerTriggers = {
        getCoverage: updateTriggers.getCoverage
      };
      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _geoLayers.H3HexagonLayer(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), data), {}, {
        wrapLongitude: false,
        getHexagon: function getHexagon(x) {
          return x.id;
        },
        // coverage
        coverage: config.coverageField ? 1 : visConfig.coverage,
        // highlight
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        // render
        updateTriggers: h3HexagonLayerTriggers,
        _subLayerProps: {
          'hexagon-cell': {
            type: _enhancedColumnLayer["default"],
            getCoverage: data.getCoverage,
            updateTriggers: columnLayerTriggers
          }
        }
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !config.sizeField ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        data: [(0, _h3Utils.idToPolygonGeo)(hoveredObject)],
        getLineColor: config.highlightColor,
        lineWidthScale: DEFAULT_LINE_SCALE_VALUE * zoomFactor,
        wrapLongitude: false
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fields = _ref3.fields,
          fields = _ref3$fields === void 0 ? [] : _ref3$fields,
          _ref3$allData = _ref3.allData,
          allData = _ref3$allData === void 0 ? [] : _ref3$allData;
      var hexFields = (0, _h3Utils.getHexFields)(fields, allData);

      if (!hexFields.length) {
        return {
          props: []
        };
      }

      return {
        props: hexFields.map(function (f) {
          return {
            isVisible: true,
            label: f.displayName || f.name,
            columns: {
              hex_id: {
                value: f.name,
                fieldIdx: fields.findIndex(function (fid) {
                  return fid.name === f.name;
                })
              }
            }
          };
        })
      };
    }
  }]);
  return HexagonIdLayer;
}(_baseLayer["default"]);

exports["default"] = HexagonIdLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSIsImhleElkUmVxdWlyZWRDb2x1bW5zIiwiaGV4SWRBY2Nlc3NvciIsImhleF9pZCIsImQiLCJkYXRhIiwiZmllbGRJZHgiLCJkZWZhdWx0RWxldmF0aW9uIiwiZGVmYXVsdENvdmVyYWdlIiwiSGV4YWdvbklkVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJjb2xvclJhbmdlIiwiY292ZXJhZ2UiLCJlbmFibGUzZCIsInNpemVSYW5nZSIsImNvdmVyYWdlUmFuZ2UiLCJlbGV2YXRpb25TY2FsZSIsIkhleGFnb25JZExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJjb25maWciLCJjb2x1bW5zIiwiSDNIZXhhZ29uTGF5ZXJJY29uIiwidmlzdWFsQ2hhbm5lbHMiLCJjb2xvciIsImFjY2Vzc29yIiwic2l6ZSIsInByb3BlcnR5IiwibnVsbFZhbHVlIiwiY29uZGl0aW9uIiwidmlzQ29uZmlnIiwiZGVmYXVsdFZhbHVlIiwiZmllbGQiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwicmFkaXVzIiwiZGF0YXNldCIsImRlZmF1bHRDb2xvckZpZWxkIiwidXBkYXRlTGF5ZXJDb25maWciLCJjb2xvckZpZWxkIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsIiwiY292ZXJhZ2VGaWVsZCIsImNvdmVyYWdlRG9tYWluIiwiY292ZXJhZ2VTY2FsZSIsImdldEhleElkIiwiYWxsRGF0YSIsImZpbHRlcmVkSW5kZXgiLCJpIiwibGVuZ3RoIiwiaW5kZXgiLCJpZCIsImNlbnRyb2lkIiwiZGF0YVRvRmVhdHVyZSIsImNlbnRyb2lkcyIsInB1c2giLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsIm9wdCIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJhY2Nlc3NvcnMiLCJnZXRBdHRyaWJ1dGVBY2Nlc3NvcnMiLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlQWNjZXNzb3IiLCJtYXAiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwib3B0cyIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwiZWxlWm9vbUZhY3RvciIsImdldEVsZXZhdGlvblpvb21GYWN0b3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldFZpc3VhbENoYW5uZWxVcGRhdGVUcmlnZ2VycyIsImgzSGV4YWdvbkxheWVyVHJpZ2dlcnMiLCJnZXRIZXhhZ29uIiwiZ2V0RmlsbENvbG9yIiwiZ2V0RWxldmF0aW9uIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsImNvbHVtbkxheWVyVHJpZ2dlcnMiLCJnZXRDb3ZlcmFnZSIsImRlZmF1bHRMYXllclByb3BzIiwiZ2V0RGVmYXVsdERlY2tMYXllclByb3BzIiwiaG92ZXJlZE9iamVjdCIsImhhc0hvdmVyZWRPYmplY3QiLCJIM0hleGFnb25MYXllciIsIndyYXBMb25naXR1ZGUiLCJ4IiwiYXV0b0hpZ2hsaWdodCIsImhpZ2hsaWdodENvbG9yIiwiSElHSExJR0hfQ09MT1JfM0QiLCJleHRydWRlZCIsIl9zdWJMYXllclByb3BzIiwidHlwZSIsIkVuaGFuY2VkQ29sdW1uTGF5ZXIiLCJzaXplRmllbGQiLCJHZW9Kc29uTGF5ZXIiLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0TGluZUNvbG9yIiwibGluZVdpZHRoU2NhbGUiLCJmaWVsZHMiLCJoZXhGaWVsZHMiLCJmIiwiaXNWaXNpYmxlIiwibGFiZWwiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ2YWx1ZSIsImZpbmRJbmRleCIsImZpZCIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QUs7QUFDeEQsVUFBTTRELFNBQVMsR0FBRywyQkFBYUQsTUFBYixFQUFxQjNELE9BQXJCLENBQWxCOztBQUNBLFVBQUksQ0FBQzRELFNBQVMsQ0FBQ3pELE1BQWYsRUFBdUI7QUFDckIsZUFBTztBQUFDbkMsVUFBQUEsS0FBSyxFQUFFO0FBQVIsU0FBUDtBQUNEOztBQUVELGFBQU87QUFDTEEsUUFBQUEsS0FBSyxFQUFFNEYsU0FBUyxDQUFDeEMsR0FBVixDQUFjLFVBQUF5QyxDQUFDO0FBQUEsaUJBQUs7QUFDekJDLFlBQUFBLFNBQVMsRUFBRSxJQURjO0FBRXpCQyxZQUFBQSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0csV0FBRixJQUFpQkgsQ0FBQyxDQUFDSSxJQUZEO0FBR3pCN0YsWUFBQUEsT0FBTyxFQUFFO0FBQ1BuQixjQUFBQSxNQUFNLEVBQUU7QUFDTmlILGdCQUFBQSxLQUFLLEVBQUVMLENBQUMsQ0FBQ0ksSUFESDtBQUVON0csZ0JBQUFBLFFBQVEsRUFBRXVHLE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQixVQUFBQyxHQUFHO0FBQUEseUJBQUlBLEdBQUcsQ0FBQ0gsSUFBSixLQUFhSixDQUFDLENBQUNJLElBQW5CO0FBQUEsaUJBQXBCO0FBRko7QUFERDtBQUhnQixXQUFMO0FBQUEsU0FBZjtBQURGLE9BQVA7QUFZRDs7O0VBckZ5Q0kscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQge2ZpbmREZWZhdWx0Q29sb3JGaWVsZH0gZnJvbSAndXRpbHMvZGF0YXNldC11dGlscyc7XG5pbXBvcnQge0dlb0pzb25MYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCB7SDNIZXhhZ29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2dlby1sYXllcnMnO1xuaW1wb3J0IEVuaGFuY2VkQ29sdW1uTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9jb2x1bW4tbGF5ZXIvZW5oYW5jZWQtY29sdW1uLWxheWVyJztcbmltcG9ydCB7Z2V0Q2VudHJvaWQsIGlkVG9Qb2x5Z29uR2VvLCBoM0lzVmFsaWQsIGdldEhleEZpZWxkc30gZnJvbSAnLi9oMy11dGlscyc7XG5pbXBvcnQgSDNIZXhhZ29uTGF5ZXJJY29uIGZyb20gJy4vaDMtaGV4YWdvbi1sYXllci1pY29uJztcbmltcG9ydCB7Q0hBTk5FTF9TQ0FMRVMsIEhJR0hMSUdIX0NPTE9SXzNEfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IERFRkFVTFRfTElORV9TQ0FMRV9WQUxVRSA9IDg7XG5cbmV4cG9ydCBjb25zdCBoZXhJZFJlcXVpcmVkQ29sdW1ucyA9IFsnaGV4X2lkJ107XG5leHBvcnQgY29uc3QgaGV4SWRBY2Nlc3NvciA9ICh7aGV4X2lkfSkgPT4gZCA9PiBkLmRhdGFbaGV4X2lkLmZpZWxkSWR4XTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0RWxldmF0aW9uID0gNTAwO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb3ZlcmFnZSA9IDE7XG5cbmV4cG9ydCBjb25zdCBIZXhhZ29uSWRWaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgY292ZXJhZ2U6ICdjb3ZlcmFnZScsXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIGNvdmVyYWdlUmFuZ2U6ICdjb3ZlcmFnZVJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25JZExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKEhleGFnb25JZFZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvciA9ICgpID0+IGhleElkQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2hleGFnb25JZCc7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0gzJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gaGV4SWRSZXF1aXJlZENvbHVtbnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIC8vIHVzZSBoZXhhZ29uIGxheWVyIGljb24gZm9yIG5vd1xuICAgIHJldHVybiBIM0hleGFnb25MYXllckljb247XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbHMgPSBzdXBlci52aXN1YWxDaGFubmVscztcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgLi4udmlzdWFsQ2hhbm5lbHMuY29sb3IsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0RmlsbENvbG9yJ1xuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgLi4udmlzdWFsQ2hhbm5lbHMuc2l6ZSxcbiAgICAgICAgcHJvcGVydHk6ICdoZWlnaHQnLFxuICAgICAgICBhY2Nlc3NvcjogJ2dldEVsZXZhdGlvbicsXG4gICAgICAgIG51bGxWYWx1ZTogMCxcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0RWxldmF0aW9uXG4gICAgICB9LFxuICAgICAgY292ZXJhZ2U6IHtcbiAgICAgICAgcHJvcGVydHk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGZpZWxkOiAnY292ZXJhZ2VGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnY292ZXJhZ2VTY2FsZScsXG4gICAgICAgIGRvbWFpbjogJ2NvdmVyYWdlRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdjb3ZlcmFnZVJhbmdlJyxcbiAgICAgICAga2V5OiAnY292ZXJhZ2UnLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5yYWRpdXMsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0Q292ZXJhZ2UnLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdENvdmVyYWdlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHNldEluaXRpYWxMYXllckNvbmZpZyhkYXRhc2V0KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbG9yRmllbGQgPSBmaW5kRGVmYXVsdENvbG9yRmllbGQoZGF0YXNldCk7XG5cbiAgICBpZiAoZGVmYXVsdENvbG9yRmllbGQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgICAgICBjb2xvckZpZWxkOiBkZWZhdWx0Q29sb3JGaWVsZFxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCAnY29sb3InKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkcyA9IFtdLCBhbGxEYXRhID0gW119KSB7XG4gICAgY29uc3QgaGV4RmllbGRzID0gZ2V0SGV4RmllbGRzKGZpZWxkcywgYWxsRGF0YSk7XG4gICAgaWYgKCFoZXhGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4ge3Byb3BzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiBoZXhGaWVsZHMubWFwKGYgPT4gKHtcbiAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgICAgICBsYWJlbDogZi5kaXNwbGF5TmFtZSB8fCBmLm5hbWUsXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICBoZXhfaWQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBmLm5hbWUsXG4gICAgICAgICAgICBmaWVsZElkeDogZmllbGRzLmZpbmRJbmRleChmaWQgPT4gZmlkLm5hbWUgPT09IGYubmFtZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgaGVpZ2h0IHZpc3VhbCBjaGFubmVsXG4gICAgICBjb3ZlcmFnZUZpZWxkOiBudWxsLFxuICAgICAgY292ZXJhZ2VEb21haW46IFswLCAxXSxcbiAgICAgIGNvdmVyYWdlU2NhbGU6ICdsaW5lYXInXG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRIZXhJZCkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgaWQgPSBnZXRIZXhJZCh7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcbiAgICAgIGNvbnN0IGNlbnRyb2lkID0gdGhpcy5kYXRhVG9GZWF0dXJlLmNlbnRyb2lkc1tpbmRleF07XG5cbiAgICAgIGlmIChjZW50cm9pZCkge1xuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGRhdGEgaW5kZXhcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjZW50cm9pZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgICBjb25zdCBnZXRIZXhJZCA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIGNvbnN0IHtkYXRhfSA9IHRoaXMudXBkYXRlRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKTtcbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLmdldEF0dHJpYnV0ZUFjY2Vzc29ycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBnZXRIZXhJZCxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpLFxuICAgICAgLi4uYWNjZXNzb3JzXG4gICAgfTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0SGV4SWQpIHtcbiAgICBjb25zdCBjZW50cm9pZHMgPSBhbGxEYXRhLm1hcCgoZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGlkID0gZ2V0SGV4SWQoe2RhdGE6IGR9KTtcbiAgICAgIGlmICghaDNJc1ZhbGlkKGlkKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIHNhdmUgYSByZWZlcmVuY2Ugb2YgY2VudHJvaWRzIHRvIGRhdGFUb0ZlYXR1cmVcbiAgICAgIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gcmUgY2FsY3VsYXRlIGl0IGFnYWluXG4gICAgICByZXR1cm4gZ2V0Q2VudHJvaWQoe2lkfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhjZW50cm9pZHMpO1xuICAgIHRoaXMuZGF0YVRvRmVhdHVyZSA9IHtjZW50cm9pZHN9O1xuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgb2JqZWN0SG92ZXJlZCwgbWFwU3RhdGV9ID0gb3B0cztcblxuICAgIGNvbnN0IHpvb21GYWN0b3IgPSB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IGVsZVpvb21GYWN0b3IgPSB0aGlzLmdldEVsZXZhdGlvblpvb21GYWN0b3IobWFwU3RhdGUpO1xuICAgIGNvbnN0IHtjb25maWd9ID0gdGhpcztcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IGNvbmZpZztcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHRoaXMuZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKCk7XG5cbiAgICBjb25zdCBoM0hleGFnb25MYXllclRyaWdnZXJzID0ge1xuICAgICAgZ2V0SGV4YWdvbjogdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgIGdldEZpbGxDb2xvcjogdXBkYXRlVHJpZ2dlcnMuZ2V0RmlsbENvbG9yLFxuICAgICAgZ2V0RWxldmF0aW9uOiB1cGRhdGVUcmlnZ2Vycy5nZXRFbGV2YXRpb24sXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnNcbiAgICB9O1xuXG4gICAgY29uc3QgY29sdW1uTGF5ZXJUcmlnZ2VycyA9IHtcbiAgICAgIGdldENvdmVyYWdlOiB1cGRhdGVUcmlnZ2Vycy5nZXRDb3ZlcmFnZVxuICAgIH07XG5cbiAgICBjb25zdCBkZWZhdWx0TGF5ZXJQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xuICAgIGNvbnN0IGhvdmVyZWRPYmplY3QgPSB0aGlzLmhhc0hvdmVyZWRPYmplY3Qob2JqZWN0SG92ZXJlZCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEgzSGV4YWdvbkxheWVyKHtcbiAgICAgICAgLi4uZGVmYXVsdExheWVyUHJvcHMsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuXG4gICAgICAgIGdldEhleGFnb246IHggPT4geC5pZCxcblxuICAgICAgICAvLyBjb3ZlcmFnZVxuICAgICAgICBjb3ZlcmFnZTogY29uZmlnLmNvdmVyYWdlRmllbGQgPyAxIDogdmlzQ29uZmlnLmNvdmVyYWdlLFxuXG4gICAgICAgIC8vIGhpZ2hsaWdodFxuICAgICAgICBhdXRvSGlnaGxpZ2h0OiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcblxuICAgICAgICAvLyBlbGV2YXRpb25cbiAgICAgICAgZXh0cnVkZWQ6IHZpc0NvbmZpZy5lbmFibGUzZCxcbiAgICAgICAgZWxldmF0aW9uU2NhbGU6IHZpc0NvbmZpZy5lbGV2YXRpb25TY2FsZSAqIGVsZVpvb21GYWN0b3IsXG5cbiAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiBoM0hleGFnb25MYXllclRyaWdnZXJzLFxuICAgICAgICBfc3ViTGF5ZXJQcm9wczoge1xuICAgICAgICAgICdoZXhhZ29uLWNlbGwnOiB7XG4gICAgICAgICAgICB0eXBlOiBFbmhhbmNlZENvbHVtbkxheWVyLFxuICAgICAgICAgICAgZ2V0Q292ZXJhZ2U6IGRhdGEuZ2V0Q292ZXJhZ2UsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2VyczogY29sdW1uTGF5ZXJUcmlnZ2Vyc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAuLi4oaG92ZXJlZE9iamVjdCAmJiAhY29uZmlnLnNpemVGaWVsZFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIG5ldyBHZW9Kc29uTGF5ZXIoe1xuICAgICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSxcbiAgICAgICAgICAgICAgZGF0YTogW2lkVG9Qb2x5Z29uR2VvKGhvdmVyZWRPYmplY3QpXSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiBjb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGxpbmVXaWR0aFNjYWxlOiBERUZBVUxUX0xJTkVfU0NBTEVfVkFMVUUgKiB6b29tRmFjdG9yLFxuICAgICAgICAgICAgICB3cmFwTG9uZ2l0dWRlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19