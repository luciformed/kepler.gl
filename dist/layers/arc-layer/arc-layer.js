"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.arcVisConfigs = exports.arcColumnLabels = exports.arcRequiredColumns = exports.arcPosAccessor = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _extensions = require("@deck.gl/extensions");

var _layers = require("@deck.gl/layers");

var _colorUtils = require("../../utils/color-utils");

var _arcLayerIcon = _interopRequireDefault(require("./arc-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var arcPosAccessor = function arcPosAccessor(_ref) {
  var lat0 = _ref.lat0,
      lng0 = _ref.lng0,
      lat1 = _ref.lat1,
      lng1 = _ref.lng1;
  return function (d) {
    return [d.data[lng0.fieldIdx], d.data[lat0.fieldIdx], 0, d.data[lng1.fieldIdx], d.data[lat1.fieldIdx], 0];
  };
};

exports.arcPosAccessor = arcPosAccessor;
var arcRequiredColumns = ['lat0', 'lng0', 'lat1', 'lng1'];
exports.arcRequiredColumns = arcRequiredColumns;
var arcColumnLabels = {
  lat0: 'arc.lat0',
  lng0: 'arc.lng0',
  lat1: 'arc.lat1',
  lng1: 'arc.lng1'
};
exports.arcColumnLabels = arcColumnLabels;
var arcVisConfigs = {
  opacity: 'opacity',
  thickness: 'thickness',
  colorRange: 'colorRange',
  sizeRange: 'strokeWidthRange',
  targetColor: 'targetColor'
};
exports.arcVisConfigs = arcVisConfigs;

var ArcLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(ArcLayer, _Layer);

  var _super = _createSuper(ArcLayer);

  function ArcLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArcLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(arcVisConfigs);

    _this.getPositionAccessor = function () {
      return arcPosAccessor(_this.config.columns);
    };

    return _this;
  }

  (0, _createClass2["default"])(ArcLayer, [{
    key: "type",
    get: function get() {
      return 'arc';
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _arcLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return arcRequiredColumns;
    }
  }, {
    key: "columnLabels",
    get: function get() {
      return arcColumnLabels;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultLinkColumnPairs;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        sourceColor: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ArcLayer.prototype), "visualChannels", this).color), {}, {
          property: 'color',
          key: 'sourceColor',
          accessor: 'getSourceColor',
          defaultValue: function defaultValue(config) {
            return config.color;
          }
        }),
        targetColor: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ArcLayer.prototype), "visualChannels", this).color), {}, {
          property: 'targetColor',
          key: 'targetColor',
          accessor: 'getTargetColor',
          defaultValue: function defaultValue(config) {
            return config.visConfig.targetColor || config.color;
          }
        }),
        size: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(ArcLayer.prototype), "visualChannels", this).size), {}, {
          accessor: 'getWidth',
          property: 'stroke'
        })
      };
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref2, getPosition) {
      var allData = _ref2.allData,
          filteredIndex = _ref2.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            index: index,
            sourcePosition: [pos[0], pos[1], pos[2]],
            targetPosition: [pos[3], pos[4], pos[5]],
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data;

      var accessors = this.getAttributeAccessors();
      return _objectSpread({
        data: data,
        getFilterValue: gpuFilter.filterValueAccessor()
      }, accessors);
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      // get bounds from arcs
      var getPosition = this.getPositionAccessor();
      var sBounds = this.getPointsBounds(allData, function (d) {
        var pos = getPosition({
          data: d
        });
        return [pos[0], pos[1]];
      });
      var tBounds = this.getPointsBounds(allData, function (d) {
        var pos = getPosition({
          data: d
        });
        return [pos[3], pos[4]];
      });
      var bounds = tBounds && sBounds ? [Math.min(sBounds[0], tBounds[0]), Math.min(sBounds[1], tBounds[1]), Math.max(sBounds[2], tBounds[2]), Math.max(sBounds[3], tBounds[3])] : sBounds || tBounds;
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
          interactionConfig = opts.interactionConfig;

      var updateTriggers = _objectSpread({
        getPosition: this.config.columns,
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      }, this.getVisualChannelUpdateTriggers());

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _layers.ArcLayer(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), this.getBrushingExtensionProps(interactionConfig, 'source_target')), data), {}, {
        widthScale: this.config.visConfig.thickness,
        updateTriggers: updateTriggers,
        extensions: [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [new _extensions.BrushingExtension()])
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject ? [new _layers.ArcLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        data: [hoveredObject],
        widthScale: this.config.visConfig.thickness,
        getSourceColor: this.config.highlightColor,
        getTargetColor: this.config.highlightColor,
        getWidth: data.getWidth
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref3) {
      var _ref3$fieldPairs = _ref3.fieldPairs,
          fieldPairs = _ref3$fieldPairs === void 0 ? [] : _ref3$fieldPairs;

      if (fieldPairs.length < 2) {
        return {
          props: []
        };
      }

      var props = {
        color: (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR.tripArc)
      }; // connect the first two point layer with arc

      props.columns = {
        lat0: fieldPairs[0].pair.lat,
        lng0: fieldPairs[0].pair.lng,
        lat1: fieldPairs[1].pair.lat,
        lng1: fieldPairs[1].pair.lng
      };
      props.label = "".concat(fieldPairs[0].defaultName, " -> ").concat(fieldPairs[1].defaultName, " arc");
      return {
        props: [props]
      };
    }
  }]);
  return ArcLayer;
}(_baseLayer["default"]);

exports["default"] = ArcLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvYXJjLWxheWVyL2FyYy1sYXllci5qcyJdLCJuYW1lcyI6WyJhcmNQb3NBY2Nlc3NvciIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJkIiwiZGF0YSIsImZpZWxkSWR4IiwiYXJjUmVxdWlyZWRDb2x1bW5zIiwiYXJjQ29sdW1uTGFiZWxzIiwiYXJjVmlzQ29uZmlncyIsIm9wYWNpdHkiLCJ0aGlja25lc3MiLCJjb2xvclJhbmdlIiwic2l6ZVJhbmdlIiwidGFyZ2V0Q29sb3IiLCJBcmNMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsIkFyY0xheWVySWNvbiIsImRlZmF1bHRMaW5rQ29sdW1uUGFpcnMiLCJzb3VyY2VDb2xvciIsImNvbG9yIiwicHJvcGVydHkiLCJrZXkiLCJhY2Nlc3NvciIsImRlZmF1bHRWYWx1ZSIsInZpc0NvbmZpZyIsInNpemUiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiaSIsImxlbmd0aCIsImluZGV4IiwicG9zIiwiZXZlcnkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInB1c2giLCJzb3VyY2VQb3NpdGlvbiIsInRhcmdldFBvc2l0aW9uIiwiZGF0YXNldHMiLCJvbGRMYXllckRhdGEiLCJncHVGaWx0ZXIiLCJkYXRhSWQiLCJ1cGRhdGVEYXRhIiwiYWNjZXNzb3JzIiwiZ2V0QXR0cmlidXRlQWNjZXNzb3JzIiwiZ2V0RmlsdGVyVmFsdWUiLCJmaWx0ZXJWYWx1ZUFjY2Vzc29yIiwic0JvdW5kcyIsImdldFBvaW50c0JvdW5kcyIsInRCb3VuZHMiLCJib3VuZHMiLCJNYXRoIiwibWluIiwibWF4IiwidXBkYXRlTWV0YSIsIm9wdHMiLCJvYmplY3RIb3ZlcmVkIiwiaW50ZXJhY3Rpb25Db25maWciLCJ1cGRhdGVUcmlnZ2VycyIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImhvdmVyZWRPYmplY3QiLCJoYXNIb3ZlcmVkT2JqZWN0IiwiRGVja0FyY0xheWVyIiwiZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyIsIndpZHRoU2NhbGUiLCJleHRlbnNpb25zIiwiQnJ1c2hpbmdFeHRlbnNpb24iLCJnZXREZWZhdWx0SG92ZXJMYXllclByb3BzIiwiZ2V0U291cmNlQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsImdldFRhcmdldENvbG9yIiwiZ2V0V2lkdGgiLCJmaWVsZFBhaXJzIiwiREVGQVVMVF9MQVlFUl9DT0xPUiIsInRyaXBBcmMiLCJwYWlyIiwibGF0IiwibG5nIiwibGFiZWwiLCJkZWZhdWx0TmFtZSIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQVFDLElBQVIsUUFBUUEsSUFBUjtBQUFBLE1BQWNDLElBQWQsUUFBY0EsSUFBZDtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxTQUE4QixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUMvREEsQ0FBQyxDQUFDQyxJQUFGLENBQU9KLElBQUksQ0FBQ0ssUUFBWixDQUQrRCxFQUUvREYsQ0FBQyxDQUFDQyxJQUFGLENBQU9MLElBQUksQ0FBQ00sUUFBWixDQUYrRCxFQUcvRCxDQUgrRCxFQUkvREYsQ0FBQyxDQUFDQyxJQUFGLENBQU9GLElBQUksQ0FBQ0csUUFBWixDQUorRCxFQUsvREYsQ0FBQyxDQUFDQyxJQUFGLENBQU9ILElBQUksQ0FBQ0ksUUFBWixDQUwrRCxFQU0vRCxDQU4rRCxDQUFKO0FBQUEsR0FBL0I7QUFB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TjtBQXVCRDs7O1dBaEhELHNDQUFnRDtBQUFBLG1DQUFsQkMsVUFBa0I7QUFBQSxVQUFsQkEsVUFBa0IsaUNBQUwsRUFBSzs7QUFDOUMsVUFBSUEsVUFBVSxDQUFDOUMsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6QixlQUFPO0FBQUNuQixVQUFBQSxLQUFLLEVBQUU7QUFBUixTQUFQO0FBQ0Q7O0FBRUQsVUFBTUEsS0FBSyxHQUFHO0FBQ1pRLFFBQUFBLEtBQUssRUFBRSwwQkFBUzBELHFDQUFvQkMsT0FBN0I7QUFESyxPQUFkLENBTDhDLENBUzlDOztBQUNBbkUsTUFBQUEsS0FBSyxDQUFDSSxPQUFOLEdBQWdCO0FBQ2RwQixRQUFBQSxJQUFJLEVBQUVpRixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNHLElBQWQsQ0FBbUJDLEdBRFg7QUFFZHBGLFFBQUFBLElBQUksRUFBRWdGLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0csSUFBZCxDQUFtQkUsR0FGWDtBQUdkcEYsUUFBQUEsSUFBSSxFQUFFK0UsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRyxJQUFkLENBQW1CQyxHQUhYO0FBSWRsRixRQUFBQSxJQUFJLEVBQUU4RSxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNHLElBQWQsQ0FBbUJFO0FBSlgsT0FBaEI7QUFNQXRFLE1BQUFBLEtBQUssQ0FBQ3VFLEtBQU4sYUFBaUJOLFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY08sV0FBL0IsaUJBQWlEUCxVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNPLFdBQS9EO0FBRUEsYUFBTztBQUFDeEUsUUFBQUEsS0FBSyxFQUFFLENBQUNBLEtBQUQ7QUFBUixPQUFQO0FBQ0Q7OztFQTFFbUN5RSxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCB7QnJ1c2hpbmdFeHRlbnNpb259IGZyb20gJ0BkZWNrLmdsL2V4dGVuc2lvbnMnO1xuaW1wb3J0IHtBcmNMYXllciBhcyBEZWNrQXJjTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XG5cbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCBBcmNMYXllckljb24gZnJvbSAnLi9hcmMtbGF5ZXItaWNvbic7XG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1J9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IGFyY1Bvc0FjY2Vzc29yID0gKHtsYXQwLCBsbmcwLCBsYXQxLCBsbmcxfSkgPT4gZCA9PiBbXG4gIGQuZGF0YVtsbmcwLmZpZWxkSWR4XSxcbiAgZC5kYXRhW2xhdDAuZmllbGRJZHhdLFxuICAwLFxuICBkLmRhdGFbbG5nMS5maWVsZElkeF0sXG4gIGQuZGF0YVtsYXQxLmZpZWxkSWR4XSxcbiAgMFxuXTtcblxuZXhwb3J0IGNvbnN0IGFyY1JlcXVpcmVkQ29sdW1ucyA9IFsnbGF0MCcsICdsbmcwJywgJ2xhdDEnLCAnbG5nMSddO1xuZXhwb3J0IGNvbnN0IGFyY0NvbHVtbkxhYmVscyA9IHtcbiAgbGF0MDogJ2FyYy5sYXQwJyxcbiAgbG5nMDogJ2FyYy5sbmcwJyxcbiAgbGF0MTogJ2FyYy5sYXQxJyxcbiAgbG5nMTogJ2FyYy5sbmcxJ1xufTtcblxuZXhwb3J0IGNvbnN0IGFyY1Zpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgdGhpY2tuZXNzOiAndGhpY2tuZXNzJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzaXplUmFuZ2U6ICdzdHJva2VXaWR0aFJhbmdlJyxcbiAgdGFyZ2V0Q29sb3I6ICd0YXJnZXRDb2xvcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY0xheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoYXJjVmlzQ29uZmlncyk7XG4gICAgdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yID0gKCkgPT4gYXJjUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2FyYyc7XG4gIH1cblxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIEFyY0xheWVySWNvbjtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gYXJjUmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IGNvbHVtbkxhYmVscygpIHtcbiAgICByZXR1cm4gYXJjQ29sdW1uTGFiZWxzO1xuICB9XG4gIGdldCBjb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0TGlua0NvbHVtblBhaXJzO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2VDb2xvcjoge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5jb2xvcixcbiAgICAgICAgcHJvcGVydHk6ICdjb2xvcicsXG4gICAgICAgIGtleTogJ3NvdXJjZUNvbG9yJyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRTb3VyY2VDb2xvcicsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnID0+IGNvbmZpZy5jb2xvclxuICAgICAgfSxcbiAgICAgIHRhcmdldENvbG9yOiB7XG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLmNvbG9yLFxuICAgICAgICBwcm9wZXJ0eTogJ3RhcmdldENvbG9yJyxcbiAgICAgICAga2V5OiAndGFyZ2V0Q29sb3InLFxuICAgICAgICBhY2Nlc3NvcjogJ2dldFRhcmdldENvbG9yJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy50YXJnZXRDb2xvciB8fCBjb25maWcuY29sb3JcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0V2lkdGgnLFxuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7ZmllbGRQYWlycyA9IFtdfSkge1xuICAgIGlmIChmaWVsZFBhaXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7cHJvcHM6IFtdfTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGNvbG9yOiBoZXhUb1JnYihERUZBVUxUX0xBWUVSX0NPTE9SLnRyaXBBcmMpXG4gICAgfTtcblxuICAgIC8vIGNvbm5lY3QgdGhlIGZpcnN0IHR3byBwb2ludCBsYXllciB3aXRoIGFyY1xuICAgIHByb3BzLmNvbHVtbnMgPSB7XG4gICAgICBsYXQwOiBmaWVsZFBhaXJzWzBdLnBhaXIubGF0LFxuICAgICAgbG5nMDogZmllbGRQYWlyc1swXS5wYWlyLmxuZyxcbiAgICAgIGxhdDE6IGZpZWxkUGFpcnNbMV0ucGFpci5sYXQsXG4gICAgICBsbmcxOiBmaWVsZFBhaXJzWzFdLnBhaXIubG5nXG4gICAgfTtcbiAgICBwcm9wcy5sYWJlbCA9IGAke2ZpZWxkUGFpcnNbMF0uZGVmYXVsdE5hbWV9IC0+ICR7ZmllbGRQYWlyc1sxXS5kZWZhdWx0TmFtZX0gYXJjYDtcblxuICAgIHJldHVybiB7cHJvcHM6IFtwcm9wc119O1xuICB9XG5cbiAgY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSh7YWxsRGF0YSwgZmlsdGVyZWRJbmRleH0sIGdldFBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBzb3VyY2VQb3NpdGlvbjogW3Bvc1swXSwgcG9zWzFdLCBwb3NbMl1dLFxuICAgICAgICAgIHRhcmdldFBvc2l0aW9uOiBbcG9zWzNdLCBwb3NbNF0sIHBvc1s1XV0sXG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBmb3JtYXRMYXllckRhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xuICAgIGNvbnN0IHtncHVGaWx0ZXJ9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcbiAgICBjb25zdCB7ZGF0YX0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG4gICAgY29uc3QgYWNjZXNzb3JzID0gdGhpcy5nZXRBdHRyaWJ1dGVBY2Nlc3NvcnMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpLFxuICAgICAgLi4uYWNjZXNzb3JzXG4gICAgfTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSkge1xuICAgIC8vIGdldCBib3VuZHMgZnJvbSBhcmNzXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcblxuICAgIGNvbnN0IHNCb3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IHtcbiAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhOiBkfSk7XG4gICAgICByZXR1cm4gW3Bvc1swXSwgcG9zWzFdXTtcbiAgICB9KTtcbiAgICBjb25zdCB0Qm91bmRzID0gdGhpcy5nZXRQb2ludHNCb3VuZHMoYWxsRGF0YSwgZCA9PiB7XG4gICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogZH0pO1xuICAgICAgcmV0dXJuIFtwb3NbM10sIHBvc1s0XV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3VuZHMgPVxuICAgICAgdEJvdW5kcyAmJiBzQm91bmRzXG4gICAgICAgID8gW1xuICAgICAgICAgICAgTWF0aC5taW4oc0JvdW5kc1swXSwgdEJvdW5kc1swXSksXG4gICAgICAgICAgICBNYXRoLm1pbihzQm91bmRzWzFdLCB0Qm91bmRzWzFdKSxcbiAgICAgICAgICAgIE1hdGgubWF4KHNCb3VuZHNbMl0sIHRCb3VuZHNbMl0pLFxuICAgICAgICAgICAgTWF0aC5tYXgoc0JvdW5kc1szXSwgdEJvdW5kc1szXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogc0JvdW5kcyB8fCB0Qm91bmRzO1xuXG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBpbnRlcmFjdGlvbkNvbmZpZ30gPSBvcHRzO1xuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge1xuICAgICAgZ2V0UG9zaXRpb246IHRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBnZXRGaWx0ZXJWYWx1ZTogZ3B1RmlsdGVyLmZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMsXG4gICAgICAuLi50aGlzLmdldFZpc3VhbENoYW5uZWxVcGRhdGVUcmlnZ2VycygpXG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0TGF5ZXJQcm9wcyA9IHRoaXMuZ2V0RGVmYXVsdERlY2tMYXllclByb3BzKG9wdHMpO1xuICAgIGNvbnN0IGhvdmVyZWRPYmplY3QgPSB0aGlzLmhhc0hvdmVyZWRPYmplY3Qob2JqZWN0SG92ZXJlZCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBEZWNrQXJjTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4udGhpcy5nZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzKGludGVyYWN0aW9uQ29uZmlnLCAnc291cmNlX3RhcmdldCcpLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgICB3aWR0aFNjYWxlOiB0aGlzLmNvbmZpZy52aXNDb25maWcudGhpY2tuZXNzLFxuICAgICAgICB1cGRhdGVUcmlnZ2VycyxcbiAgICAgICAgZXh0ZW5zaW9uczogWy4uLmRlZmF1bHRMYXllclByb3BzLmV4dGVuc2lvbnMsIG5ldyBCcnVzaGluZ0V4dGVuc2lvbigpXVxuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKGhvdmVyZWRPYmplY3RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgRGVja0FyY0xheWVyKHtcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXG4gICAgICAgICAgICAgIGRhdGE6IFtob3ZlcmVkT2JqZWN0XSxcbiAgICAgICAgICAgICAgd2lkdGhTY2FsZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcbiAgICAgICAgICAgICAgZ2V0U291cmNlQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRUYXJnZXRDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGdldFdpZHRoOiBkYXRhLmdldFdpZHRoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=