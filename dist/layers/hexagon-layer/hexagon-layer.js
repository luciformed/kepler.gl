"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hexagonVisConfigs = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _enhancedHexagonLayer = _interopRequireDefault(require("../../deckgl-layers/hexagon-layer/enhanced-hexagon-layer"));

var _hexagonUtils = require("./hexagon-utils");

var _hexagonLayerIcon = _interopRequireDefault(require("./hexagon-layer-icon"));

var _dataUtils = require("../../utils/data-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var hexagonVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  resolution: 'resolution',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  percentile: 'percentile',
  elevationPercentile: 'elevationPercentile',
  elevationScale: 'elevationScale',
  colorAggregation: 'aggregation',
  sizeAggregation: 'sizeAggregation',
  enable3d: 'enable3d'
};
exports.hexagonVisConfigs = hexagonVisConfigs;

var HexagonLayer = /*#__PURE__*/function (_AggregationLayer) {
  (0, _inherits2["default"])(HexagonLayer, _AggregationLayer);

  var _super = _createSuper(HexagonLayer);

  function HexagonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(hexagonVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'columns.hexagon.worldUnitSize';
    return _this;
  }

  (0, _createClass2["default"])(HexagonLayer, [{
    key: "type",
    get: function get() {
      return 'hexagon';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Hexbin';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _hexagonLayerIcon["default"];
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState;
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var radius = visConfig.worldUnitSize * 1000;
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [new _enhancedHexagonLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultAggregationLayerProp(opts)), data), {}, {
        wrapLongitude: false,
        radius: radius
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject && !visConfig.enable3d ? [new _layers.GeoJsonLayer(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), {}, {
        wrapLongitude: false,
        data: [(0, _hexagonUtils.hexagonToPolygonGeo)(hoveredObject, {}, radius * visConfig.coverage, mapState)].filter(function (d) {
          return d;
        }),
        getLineColor: this.config.highlightColor,
        lineWidthScale: (0, _dataUtils.clamp)([1, 100], radius * 0.1 * zoomFactor)
      }))] : []));
    }
  }]);
  return HexagonLayer;
}(_aggregationLayer["default"]);

exports["default"] = HexagonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImhleGFnb25WaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJyZXNvbHV0aW9uIiwiY29sb3JSYW5nZSIsImNvdmVyYWdlIiwic2l6ZVJhbmdlIiwicGVyY2VudGlsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25TY2FsZSIsImNvbG9yQWdncmVnYXRpb24iLCJzaXplQWdncmVnYXRpb24iLCJlbmFibGUzZCIsIkhleGFnb25MYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJ2aXNDb25maWdTZXR0aW5ncyIsImxhYmVsIiwiSGV4YWdvbkxheWVySWNvbiIsIm9wdHMiLCJkYXRhIiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJ2aXNDb25maWciLCJjb25maWciLCJyYWRpdXMiLCJob3ZlcmVkT2JqZWN0IiwiaGFzSG92ZXJlZE9iamVjdCIsIkVuaGFuY2VkSGV4YWdvbkxheWVyIiwiZ2V0RGVmYXVsdEFnZ3JlZ2F0aW9uTGF5ZXJQcm9wIiwid3JhcExvbmdpdHVkZSIsIkdlb0pzb25MYXllciIsImdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMiLCJmaWx0ZXIiLCJkIiwiZ2V0TGluZUNvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJsaW5lV2lkdGhTY2FsZSIsIkFnZ3JlZ2F0aW9uTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsYUFBYSxFQUFFLGVBRmdCO0FBRy9CQyxFQUFBQSxVQUFVLEVBQUUsWUFIbUI7QUFJL0JDLEVBQUFBLFVBQVUsRUFBRSxZQUptQjtBQUsvQkMsRUFBQUEsUUFBUSxFQUFFLFVBTHFCO0FBTS9CQyxFQUFBQSxTQUFTLEVBQUUsZ0JBTm9CO0FBTy9CQyxFQUFBQSxVQUFVLEVBQUUsWUFQbUI7QUFRL0JDLEVBQUFBLG1CQUFtQixFQUFFLHFCQVJVO0FBUy9CQyxFQUFBQSxjQUFjLEVBQUUsZ0JBVGU7QUFVL0JDLEVBQUFBLGdCQUFnQixFQUFFLGFBVmE7QUFXL0JDLEVBQUFBLGVBQWUsRUFBRSxpQkFYYztBQVkvQkMsRUFBQUEsUUFBUSxFQUFFO0FBWnFCLENBQTFCOzs7SUFlY0MsWTs7Ozs7QUFDbkIsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjs7QUFFQSxVQUFLQyxpQkFBTCxDQUF1QmYsaUJBQXZCOztBQUNBLFVBQUtnQixpQkFBTCxDQUF1QmQsYUFBdkIsQ0FBcUNlLEtBQXJDLEdBQTZDLCtCQUE3QztBQUppQjtBQUtsQjs7OztTQUVELGVBQVc7QUFDVCxhQUFPLFNBQVA7QUFDRDs7O1NBRUQsZUFBVztBQUNULGFBQU8sUUFBUDtBQUNEOzs7U0FFRCxlQUFnQjtBQUNkLGFBQU9DLDRCQUFQO0FBQ0Q7OztXQUVELHFCQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFVBQU9DLElBQVAsR0FBd0NELElBQXhDLENBQU9DLElBQVA7QUFBQSxVQUFhQyxhQUFiLEdBQXdDRixJQUF4QyxDQUFhRSxhQUFiO0FBQUEsVUFBNEJDLFFBQTVCLEdBQXdDSCxJQUF4QyxDQUE0QkcsUUFBNUI7QUFDQSxVQUFNQyxVQUFVLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkYsUUFBbkIsQ0FBbkI7QUFDQSxVQUFPRyxTQUFQLEdBQW9CLEtBQUtDLE1BQXpCLENBQU9ELFNBQVA7QUFDQSxVQUFNRSxNQUFNLEdBQUdGLFNBQVMsQ0FBQ3ZCLGFBQVYsR0FBMEIsSUFBekM7QUFDQSxVQUFNMEIsYUFBYSxHQUFHLEtBQUtDLGdCQUFMLENBQXNCUixhQUF0QixDQUF0QjtBQUVBLGNBQ0UsSUFBSVMsZ0NBQUosK0NBQ0ssS0FBS0MsOEJBQUwsQ0FBb0NaLElBQXBDLENBREwsR0FFS0MsSUFGTDtBQUdFWSxRQUFBQSxhQUFhLEVBQUUsS0FIakI7QUFJRUwsUUFBQUEsTUFBTSxFQUFOQTtBQUpGLFNBREYsNkNBU01DLGFBQWEsSUFBSSxDQUFDSCxTQUFTLENBQUNiLFFBQTVCLEdBQ0EsQ0FDRSxJQUFJcUIsb0JBQUosaUNBQ0ssS0FBS0MseUJBQUwsRUFETDtBQUVFRixRQUFBQSxhQUFhLEVBQUUsS0FGakI7QUFHRVosUUFBQUEsSUFBSSxFQUFFLENBQ0osdUNBQW9CUSxhQUFwQixFQUFtQyxFQUFuQyxFQUF1Q0QsTUFBTSxHQUFHRixTQUFTLENBQUNwQixRQUExRCxFQUFvRWlCLFFBQXBFLENBREksRUFFSmEsTUFGSSxDQUVHLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBLFNBRkosQ0FIUjtBQU1FQyxRQUFBQSxZQUFZLEVBQUUsS0FBS1gsTUFBTCxDQUFZWSxjQU41QjtBQU9FQyxRQUFBQSxjQUFjLEVBQUUsc0JBQU0sQ0FBQyxDQUFELEVBQUksR0FBSixDQUFOLEVBQWdCWixNQUFNLEdBQUcsR0FBVCxHQUFlSixVQUEvQjtBQVBsQixTQURGLENBREEsR0FZQSxFQXJCTjtBQXVCRDs7O0VBbER1Q2lCLDRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtHZW9Kc29uTGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XG5pbXBvcnQgQWdncmVnYXRpb25MYXllciBmcm9tICcuLi9hZ2dyZWdhdGlvbi1sYXllcic7XG5pbXBvcnQgRW5oYW5jZWRIZXhhZ29uTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9oZXhhZ29uLWxheWVyL2VuaGFuY2VkLWhleGFnb24tbGF5ZXInO1xuaW1wb3J0IHtoZXhhZ29uVG9Qb2x5Z29uR2VvfSBmcm9tICcuL2hleGFnb24tdXRpbHMnO1xuaW1wb3J0IEhleGFnb25MYXllckljb24gZnJvbSAnLi9oZXhhZ29uLWxheWVyLWljb24nO1xuaW1wb3J0IHtjbGFtcH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBoZXhhZ29uVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICB3b3JsZFVuaXRTaXplOiAnd29ybGRVbml0U2l6ZScsXG4gIHJlc29sdXRpb246ICdyZXNvbHV0aW9uJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBjb3ZlcmFnZTogJ2NvdmVyYWdlJyxcbiAgc2l6ZVJhbmdlOiAnZWxldmF0aW9uUmFuZ2UnLFxuICBwZXJjZW50aWxlOiAncGVyY2VudGlsZScsXG4gIGVsZXZhdGlvblBlcmNlbnRpbGU6ICdlbGV2YXRpb25QZXJjZW50aWxlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZScsXG4gIGNvbG9yQWdncmVnYXRpb246ICdhZ2dyZWdhdGlvbicsXG4gIHNpemVBZ2dyZWdhdGlvbjogJ3NpemVBZ2dyZWdhdGlvbicsXG4gIGVuYWJsZTNkOiAnZW5hYmxlM2QnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXhhZ29uTGF5ZXIgZXh0ZW5kcyBBZ2dyZWdhdGlvbkxheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGhleGFnb25WaXNDb25maWdzKTtcbiAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzLndvcmxkVW5pdFNpemUubGFiZWwgPSAnY29sdW1ucy5oZXhhZ29uLndvcmxkVW5pdFNpemUnO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdoZXhhZ29uJztcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiAnSGV4YmluJztcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIEhleGFnb25MYXllckljb247XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIG9iamVjdEhvdmVyZWQsIG1hcFN0YXRlfSA9IG9wdHM7XG4gICAgY29uc3Qgem9vbUZhY3RvciA9IHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCByYWRpdXMgPSB2aXNDb25maWcud29ybGRVbml0U2l6ZSAqIDEwMDA7XG4gICAgY29uc3QgaG92ZXJlZE9iamVjdCA9IHRoaXMuaGFzSG92ZXJlZE9iamVjdChvYmplY3RIb3ZlcmVkKTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgRW5oYW5jZWRIZXhhZ29uTGF5ZXIoe1xuICAgICAgICAuLi50aGlzLmdldERlZmF1bHRBZ2dyZWdhdGlvbkxheWVyUHJvcChvcHRzKSxcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgd3JhcExvbmdpdHVkZTogZmFsc2UsXG4gICAgICAgIHJhZGl1c1xuICAgICAgfSksXG5cbiAgICAgIC8vIHJlbmRlciBhbiBvdXRsaW5lIG9mIGVhY2ggaGV4YWdvbiBpZiBub3QgZXh0cnVkZWRcbiAgICAgIC4uLihob3ZlcmVkT2JqZWN0ICYmICF2aXNDb25maWcuZW5hYmxlM2RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXG4gICAgICAgICAgICAgIHdyYXBMb25naXR1ZGU6IGZhbHNlLFxuICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgaGV4YWdvblRvUG9seWdvbkdlbyhob3ZlcmVkT2JqZWN0LCB7fSwgcmFkaXVzICogdmlzQ29uZmlnLmNvdmVyYWdlLCBtYXBTdGF0ZSlcbiAgICAgICAgICAgICAgXS5maWx0ZXIoZCA9PiBkKSxcbiAgICAgICAgICAgICAgZ2V0TGluZUNvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgbGluZVdpZHRoU2NhbGU6IGNsYW1wKFsxLCAxMDBdLCByYWRpdXMgKiAwLjEgKiB6b29tRmFjdG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19