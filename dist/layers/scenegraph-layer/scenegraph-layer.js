"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.scenegraphVisConfigs = exports.scenegraphPosAccessor = exports.scenegraphOptionalColumns = exports.scenegraphRequiredColumns = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _meshLayers = require("@deck.gl/mesh-layers");

var _core = require("@loaders.gl/core");

var _gltf = require("@loaders.gl/gltf");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _scenegraphLayerIcon = _interopRequireDefault(require("./scenegraph-layer-icon"));

var _scenegraphInfoModal = _interopRequireDefault(require("./scenegraph-info-modal"));

var _layerFactory = require("../layer-factory");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var scenegraphRequiredColumns = ['lat', 'lng'];
exports.scenegraphRequiredColumns = scenegraphRequiredColumns;
var scenegraphOptionalColumns = ['altitude'];
exports.scenegraphOptionalColumns = scenegraphOptionalColumns;

function fetch(url, _ref) {
  var propName = _ref.propName,
      layer = _ref.layer;

  if (propName === 'scenegraph') {
    return (0, _core.load)(url, _gltf.GLTFLoader, layer.getLoadOptions());
  }

  return fetch(url).then(function (response) {
    return response.json();
  });
}

var scenegraphPosAccessor = function scenegraphPosAccessor(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng,
      altitude = _ref2.altitude;
  return function (d) {
    return [// lng
    d.data[lng.fieldIdx], // lat
    d.data[lat.fieldIdx], // altitude
    altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

exports.scenegraphPosAccessor = scenegraphPosAccessor;
var scenegraphVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  //
  sizeScale: 'sizeScale',
  angleX: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle), {}, {
    property: 'angleX',
    label: 'angle X'
  }),
  angleY: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle), {}, {
    property: 'angleY',
    label: 'angle Y'
  }),
  angleZ: _objectSpread(_objectSpread({}, _layerFactory.LAYER_VIS_CONFIGS.angle), {}, {
    property: 'angleZ',
    defaultValue: 90,
    label: 'angle Z'
  })
};
exports.scenegraphVisConfigs = scenegraphVisConfigs;
var DEFAULT_MODEL = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb';
var DEFAULT_TRANSITION = [0, 0, 0];
var DEFAULT_SCALE = [1, 1, 1];
var DEFAULT_COLOR = [255, 255, 255, 255];

var ScenegraphLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(ScenegraphLayer, _Layer);

  var _super = _createSuper(ScenegraphLayer);

  function ScenegraphLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScenegraphLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(scenegraphVisConfigs);

    _this.getPositionAccessor = function () {
      return scenegraphPosAccessor(_this.config.columns);
    }; // prepare layer info modal


    _this._layerInfoModal = (0, _scenegraphInfoModal["default"])();
    return _this;
  }

  (0, _createClass2["default"])(ScenegraphLayer, [{
    key: "type",
    get: function get() {
      return '3D';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return scenegraphRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return scenegraphOptionalColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _scenegraphLayerIcon["default"];
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'scenegraphInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'How to use Scenegraph'
        }
      };
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref3, getPosition) {
      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite)) {
          data.push({
            data: allData[index],
            position: pos,
            // index is important for filter
            index: index
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

      var getPosition = this.getPositionAccessor();
      return {
        data: data,
        getPosition: getPosition,
        getFilterValue: gpuFilter.filterValueAccessor()
      };
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter;
      var _this$config$visConfi = this.config.visConfig,
          _this$config$visConfi2 = _this$config$visConfi.sizeScale,
          sizeScale = _this$config$visConfi2 === void 0 ? 1 : _this$config$visConfi2,
          _this$config$visConfi3 = _this$config$visConfi.angleX,
          angleX = _this$config$visConfi3 === void 0 ? 0 : _this$config$visConfi3,
          _this$config$visConfi4 = _this$config$visConfi.angleY,
          angleY = _this$config$visConfi4 === void 0 ? 0 : _this$config$visConfi4,
          _this$config$visConfi5 = _this$config$visConfi.angleZ,
          angleZ = _this$config$visConfi5 === void 0 ? 90 : _this$config$visConfi5;
      return [new _meshLayers.ScenegraphLayer(_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultDeckLayerProps(opts)), data), {}, {
        fetch: fetch,
        scenegraph: this.config.visConfig.scenegraph || DEFAULT_MODEL,
        sizeScale: sizeScale,
        getTranslation: DEFAULT_TRANSITION,
        getScale: DEFAULT_SCALE,
        getOrientation: [angleX, angleY, angleZ],
        getColor: DEFAULT_COLOR,
        // parameters
        parameters: {
          depthTest: true,
          blend: false
        },
        // update triggers
        updateTriggers: {
          getOrientation: {
            angleX: angleX,
            angleY: angleY,
            angleZ: angleZ
          },
          getPosition: this.config.columns,
          getFilterValue: gpuFilter.filterValueUpdateTriggers
        }
      }))];
    }
  }]);
  return ScenegraphLayer;
}(_baseLayer["default"]);

exports["default"] = ScenegraphLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc2NlbmVncmFwaC1sYXllci9zY2VuZWdyYXBoLWxheWVyLmpzIl0sIm5hbWVzIjpbInNjZW5lZ3JhcGhSZXF1aXJlZENvbHVtbnMiLCJzY2VuZWdyYXBoT3B0aW9uYWxDb2x1bW5zIiwiZmV0Y2giLCJ1cmwiLCJwcm9wTmFtZSIsImxheWVyIiwiR0xURkxvYWRlciIsImdldExvYWRPcHRpb25zIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNjZW5lZ3JhcGhQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInNjZW5lZ3JhcGhWaXNDb25maWdzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzaXplU2NhbGUiLCJhbmdsZVgiLCJMQVlFUl9WSVNfQ09ORklHUyIsImFuZ2xlIiwicHJvcGVydHkiLCJsYWJlbCIsImFuZ2xlWSIsImFuZ2xlWiIsImRlZmF1bHRWYWx1ZSIsIkRFRkFVTFRfTU9ERUwiLCJERUZBVUxUX1RSQU5TSVRJT04iLCJERUZBVUxUX1NDQUxFIiwiREVGQVVMVF9DT0xPUiIsIlNjZW5lZ3JhcGhMYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsIl9sYXllckluZm9Nb2RhbCIsImRlZmF1bHRQb2ludENvbHVtblBhaXJzIiwiU2NlbmVncmFwaExheWVySWNvbiIsImlkIiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwidGl0bGUiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiaSIsImxlbmd0aCIsImluZGV4IiwicG9zIiwiZXZlcnkiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInB1c2giLCJwb3NpdGlvbiIsImRhdGFzZXRzIiwib2xkTGF5ZXJEYXRhIiwiZ3B1RmlsdGVyIiwiZGF0YUlkIiwidXBkYXRlRGF0YSIsImdldEZpbHRlclZhbHVlIiwiZmlsdGVyVmFsdWVBY2Nlc3NvciIsImJvdW5kcyIsImdldFBvaW50c0JvdW5kcyIsInVwZGF0ZU1ldGEiLCJvcHRzIiwidmlzQ29uZmlnIiwiRGVja1NjZW5lZ3JhcGhMYXllciIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsInNjZW5lZ3JhcGgiLCJnZXRUcmFuc2xhdGlvbiIsImdldFNjYWxlIiwiZ2V0T3JpZW50YXRpb24iLCJnZXRDb2xvciIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJibGVuZCIsInVwZGF0ZVRyaWdnZXJzIiwiZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSx5QkFBeUIsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxDOztBQUNBLElBQU1DLHlCQUF5QixHQUFHLENBQUMsVUFBRCxDQUFsQzs7O0FBRVAsU0FBU0MsS0FBVCxDQUFlQyxHQUFmLFFBQXVDO0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFDckMsTUFBSUQsUUFBUSxLQUFLLFlBQWpCLEVBQStCO0FBQzdCLFdBQU8sZ0JBQUtELEdBQUwsRUFBVUcsZ0JBQVYsRUFBc0JELEtBQUssQ0FBQ0UsY0FBTixFQUF0QixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0wsS0FBSyxDQUFDQyxHQUFELENBQUwsQ0FBV0ssSUFBWCxDQUFnQixVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQUF4QixDQUFQO0FBQ0Q7O0FBRU0sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLE1BQU9DLEdBQVAsU0FBT0EsR0FBUDtBQUFBLE1BQVlDLFFBQVosU0FBWUEsUUFBWjtBQUFB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QUN0RCxZQUFBQSxNQUFNLEVBQU5BLE1BQUQ7QUFBU0ssWUFBQUEsTUFBTSxFQUFOQSxNQUFUO0FBQWlCQyxZQUFBQSxNQUFNLEVBQU5BO0FBQWpCLFdBREY7QUFFZG1CLFVBQUFBLFdBQVcsRUFBRSxLQUFLVCxNQUFMLENBQVlDLE9BRlg7QUFHZHlCLFVBQUFBLGNBQWMsRUFBRUgsU0FBUyxDQUFDcUI7QUFIWjtBQWJsQixTQURLLENBQVA7QUFxQkQ7OztFQTFHMENDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtTY2VuZWdyYXBoTGF5ZXIgYXMgRGVja1NjZW5lZ3JhcGhMYXllcn0gZnJvbSAnQGRlY2suZ2wvbWVzaC1sYXllcnMnO1xuaW1wb3J0IHtsb2FkfSBmcm9tICdAbG9hZGVycy5nbC9jb3JlJztcbmltcG9ydCB7R0xURkxvYWRlcn0gZnJvbSAnQGxvYWRlcnMuZ2wvZ2x0Zic7XG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCBTY2VuZWdyYXBoTGF5ZXJJY29uIGZyb20gJy4vc2NlbmVncmFwaC1sYXllci1pY29uJztcbmltcG9ydCBTY2VuZWdyYXBoSW5mb01vZGFsRmFjdG9yeSBmcm9tICcuL3NjZW5lZ3JhcGgtaW5mby1tb2RhbCc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5cbmV4cG9ydCBjb25zdCBzY2VuZWdyYXBoUmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XG5leHBvcnQgY29uc3Qgc2NlbmVncmFwaE9wdGlvbmFsQ29sdW1ucyA9IFsnYWx0aXR1ZGUnXTtcblxuZnVuY3Rpb24gZmV0Y2godXJsLCB7cHJvcE5hbWUsIGxheWVyfSkge1xuICBpZiAocHJvcE5hbWUgPT09ICdzY2VuZWdyYXBoJykge1xuICAgIHJldHVybiBsb2FkKHVybCwgR0xURkxvYWRlciwgbGF5ZXIuZ2V0TG9hZE9wdGlvbnMoKSk7XG4gIH1cblxuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmV4cG9ydCBjb25zdCBzY2VuZWdyYXBoUG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+IGQgPT4gW1xuICAvLyBsbmdcbiAgZC5kYXRhW2xuZy5maWVsZElkeF0sXG4gIC8vIGxhdFxuICBkLmRhdGFbbGF0LmZpZWxkSWR4XSxcbiAgLy8gYWx0aXR1ZGVcbiAgYWx0aXR1ZGUgJiYgYWx0aXR1ZGUuZmllbGRJZHggPiAtMSA/IGQuZGF0YVthbHRpdHVkZS5maWVsZElkeF0gOiAwXG5dO1xuXG5leHBvcnQgY29uc3Qgc2NlbmVncmFwaFZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAvL1xuICBzaXplU2NhbGU6ICdzaXplU2NhbGUnLFxuICBhbmdsZVg6IHtcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy5hbmdsZSxcbiAgICBwcm9wZXJ0eTogJ2FuZ2xlWCcsXG4gICAgbGFiZWw6ICdhbmdsZSBYJ1xuICB9LFxuICBhbmdsZVk6IHtcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy5hbmdsZSxcbiAgICBwcm9wZXJ0eTogJ2FuZ2xlWScsXG4gICAgbGFiZWw6ICdhbmdsZSBZJ1xuICB9LFxuICBhbmdsZVo6IHtcbiAgICAuLi5MQVlFUl9WSVNfQ09ORklHUy5hbmdsZSxcbiAgICBwcm9wZXJ0eTogJ2FuZ2xlWicsXG4gICAgZGVmYXVsdFZhbHVlOiA5MCxcbiAgICBsYWJlbDogJ2FuZ2xlIFonXG4gIH1cbn07XG5cbmNvbnN0IERFRkFVTFRfTU9ERUwgPVxuICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0tocm9ub3NHcm91cC9nbFRGLVNhbXBsZS1Nb2RlbHMvbWFzdGVyLzIuMC9EdWNrL2dsVEYtQmluYXJ5L0R1Y2suZ2xiJztcbmNvbnN0IERFRkFVTFRfVFJBTlNJVElPTiA9IFswLCAwLCAwXTtcbmNvbnN0IERFRkFVTFRfU0NBTEUgPSBbMSwgMSwgMV07XG5jb25zdCBERUZBVUxUX0NPTE9SID0gWzI1NSwgMjU1LCAyNTUsIDI1NV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lZ3JhcGhMYXllciBleHRlbmRzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKHNjZW5lZ3JhcGhWaXNDb25maWdzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBzY2VuZWdyYXBoUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG5cbiAgICAvLyBwcmVwYXJlIGxheWVyIGluZm8gbW9kYWxcbiAgICB0aGlzLl9sYXllckluZm9Nb2RhbCA9IFNjZW5lZ3JhcGhJbmZvTW9kYWxGYWN0b3J5KCk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJzNEJztcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gc2NlbmVncmFwaFJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCBvcHRpb25hbENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHNjZW5lZ3JhcGhPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBTY2VuZWdyYXBoTGF5ZXJJY29uO1xuICB9XG5cbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogJ3NjZW5lZ3JhcGhJbmZvJyxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLl9sYXllckluZm9Nb2RhbCxcbiAgICAgIG1vZGFsUHJvcHM6IHtcbiAgICAgICAgdGl0bGU6ICdIb3cgdG8gdXNlIFNjZW5lZ3JhcGgnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoe2FsbERhdGEsIGZpbHRlcmVkSW5kZXh9LCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaW5kZXggPSBmaWx0ZXJlZEluZGV4W2ldO1xuICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XSxcbiAgICAgICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgICAgIC8vIGluZGV4IGlzIGltcG9ydGFudCBmb3IgZmlsdGVyXG4gICAgICAgICAgaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpIHtcbiAgICBjb25zdCB7Z3B1RmlsdGVyfSA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gICAgY29uc3Qge2RhdGF9ID0gdGhpcy51cGRhdGVEYXRhKGRhdGFzZXRzLCBvbGRMYXllckRhdGEpO1xuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBnZXRQb3NpdGlvbixcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbikge1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyfSA9IG9wdHM7XG5cbiAgICBjb25zdCB7XG4gICAgICB2aXNDb25maWc6IHtzaXplU2NhbGUgPSAxLCBhbmdsZVggPSAwLCBhbmdsZVkgPSAwLCBhbmdsZVogPSA5MH1cbiAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IERlY2tTY2VuZWdyYXBoTGF5ZXIoe1xuICAgICAgICAuLi50aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgZmV0Y2gsXG4gICAgICAgIHNjZW5lZ3JhcGg6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5zY2VuZWdyYXBoIHx8IERFRkFVTFRfTU9ERUwsXG4gICAgICAgIHNpemVTY2FsZSxcbiAgICAgICAgZ2V0VHJhbnNsYXRpb246IERFRkFVTFRfVFJBTlNJVElPTixcbiAgICAgICAgZ2V0U2NhbGU6IERFRkFVTFRfU0NBTEUsXG4gICAgICAgIGdldE9yaWVudGF0aW9uOiBbYW5nbGVYLCBhbmdsZVksIGFuZ2xlWl0sXG4gICAgICAgIGdldENvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAvLyBwYXJhbWV0ZXJzXG4gICAgICAgIHBhcmFtZXRlcnM6IHtkZXB0aFRlc3Q6IHRydWUsIGJsZW5kOiBmYWxzZX0sXG4gICAgICAgIC8vIHVwZGF0ZSB0cmlnZ2Vyc1xuICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgIGdldE9yaWVudGF0aW9uOiB7YW5nbGVYLCBhbmdsZVksIGFuZ2xlWn0sXG4gICAgICAgICAgZ2V0UG9zaXRpb246IHRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICAgICAgZ2V0RmlsdGVyVmFsdWU6IGdwdUZpbHRlci5maWx0ZXJWYWx1ZVVwZGF0ZVRyaWdnZXJzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXTtcbiAgfVxufVxuIl19