"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _baseLayer["default"];
  }
});
Object.defineProperty(exports, "OVERLAY_TYPE", {
  enumerable: true,
  get: function get() {
    return _baseLayer.OVERLAY_TYPE;
  }
});
Object.defineProperty(exports, "colorMaker", {
  enumerable: true,
  get: function get() {
    return _baseLayer.colorMaker;
  }
});
Object.defineProperty(exports, "LAYER_VIS_CONFIGS", {
  enumerable: true,
  get: function get() {
    return _layerFactory.LAYER_VIS_CONFIGS;
  }
});
exports.LayerClasses = exports.KeplerGlLayers = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _pointLayer = _interopRequireDefault(require("./point-layer/point-layer"));

var _arcLayer = _interopRequireDefault(require("./arc-layer/arc-layer"));

var _lineLayer = _interopRequireDefault(require("./line-layer/line-layer"));

var _gridLayer = _interopRequireDefault(require("./grid-layer/grid-layer"));

var _hexagonLayer = _interopRequireDefault(require("./hexagon-layer/hexagon-layer"));

var _geojsonLayer = _interopRequireDefault(require("./geojson-layer/geojson-layer"));

var _clusterLayer = _interopRequireDefault(require("./cluster-layer/cluster-layer"));

var _iconLayer = _interopRequireDefault(require("./icon-layer/icon-layer"));

var _heatmapLayer = _interopRequireDefault(require("./heatmap-layer/heatmap-layer"));

var _h3HexagonLayer = _interopRequireDefault(require("./h3-hexagon-layer/h3-hexagon-layer"));

var _scenegraphLayer = _interopRequireDefault(require("./scenegraph-layer/scenegraph-layer"));

var _tripLayer = _interopRequireDefault(require("./trip-layer/trip-layer"));

var _s2GeometryLayer = _interopRequireDefault(require("./s2-geometry-layer/s2-geometry-layer"));

var _types = require("./types");

var _baseLayer = _interopRequireWildcard(require("./base-layer"));

var _layerFactory = require("./layer-factory");

var _LayerClasses;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// individual layers
var KeplerGlLayers = {
  PointLayer: _pointLayer["default"],
  ArcLayer: _arcLayer["default"],
  LineLayer: _lineLayer["default"],
  GridLayer: _gridLayer["default"],
  HexagonLayer: _hexagonLayer["default"],
  GeojsonLayer: _geojsonLayer["default"],
  ClusterLayer: _clusterLayer["default"],
  IconLayer: _iconLayer["default"],
  HeatmapLayer: _heatmapLayer["default"],
  H3Layer: _h3HexagonLayer["default"],
  ScenegraphLayer: _scenegraphLayer["default"],
  TripLayer: _tripLayer["default"],
  S2GeometryLayer: _s2GeometryLayer["default"]
};
exports.KeplerGlLayers = KeplerGlLayers;
var LayerClasses = (_LayerClasses = {}, (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.point, _pointLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.arc, _arcLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.line, _lineLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.grid, _gridLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.hexagon, _hexagonLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.geojson, _geojsonLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.cluster, _clusterLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.icon, _iconLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.heatmap, _heatmapLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.hexagonId, _h3HexagonLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES['3D'], _scenegraphLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.trip, _tripLayer["default"]), (0, _defineProperty2["default"])(_LayerClasses, _types.LAYER_TYPES.s2, _s2GeometryLayer["default"]), _LayerClasses);
exports.LayerClasses = LayerClasses;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvaW5kZXguanMiXSwibmFtZXMiOlsiS2VwbGVyR2xMYXllcnMiLCJQb2ludExheWVyIiwiQXJjTGF5ZXIiLCJMaW5lTGF5ZXIiLCJHcmlkTGF5ZXIiLCJIZXhhZ29uTGF5ZXIiLCJHZW9qc29uTGF5ZXIiLCJDbHVzdGVyTGF5ZXIiLCJJY29uTGF5ZXIiLCJIZWF0bWFwTGF5ZXIiLCJIM0xheWVyIiwiU2NlbmVncmFwaExheWVyIiwiVHJpcExheWVyIiwiUzJHZW9tZXRyeUxheWVyIiwiTGF5ZXJDbGFzc2VzIiwiTEFZRVJfVFlQRVMiLCJwb2ludCIsImFyYyIsImxpbmUiLCJncmlkIiwiaGV4YWdvbiIsImdlb2pzb24iLCJjbHVzdGVyIiwiaWNvbiIsImhlYXRtYXAiLCJoZXhhZ29uSWQiLCJ0cmlwIiwiczIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBbUNBOzs7Ozs7OztBQWpDQTtBQUNPLElBQU1BLGNBQWMsR0FBRztBQUM1QkMsRUFBQUEsVUFBVSxFQUFWQSxzQkFENEI7QUFFNUJDLEVBQUFBLFFBQVEsRUFBUkEsb0JBRjRCO0FBRzVCQyxFQUFBQSxTQUFTLEVBQVRBLHFCQUg0QjtBQUk1QkMsRUFBQUEsU0FBUyxFQUFUQSxxQkFKNEI7QUFLNUJDLEVBQUFBLFlBQVksRUFBWkEsd0JBTDRCO0FBTTVCQyxFQUFBQSxZQUFZLEVBQVpBLHdCQU40QjtBQU81QkMsRUFBQUEsWUFBWSxFQUFaQSx3QkFQNEI7QUFRNUJDLEVBQUFBLFNBQVMsRUFBVEEscUJBUjRCO0FBUzVCQyxFQUFBQSxZQUFZLEVBQVpBLHdCQVQ0QjtBQVU1QkMsRUFBQUEsT0FBTyxFQUFQQSwwQkFWNEI7QUFXNUJDLEVBQUFBLGVBQWUsRUFBZkEsMkJBWDRCO0FBWTVCQyxFQUFBQSxTQUFTLEVBQVRBLHFCQVo0QjtBQWE1QkMsRUFBQUEsZUFBZSxFQUFmQTtBQWI0QixDQUF2Qjs7QUFnQkEsSUFBTUMsWUFBWSx3RUFDdEJDLG1CQUFZQyxLQURVLEVBQ0ZmLHNCQURFLG1EQUV0QmMsbUJBQVlFLEdBRlUsRUFFSmYsb0JBRkksbURBR3RCYSxtQkFBWUcsSUFIVSxFQUdIZixxQkFIRyxtREFJdEJZLG1CQUFZSSxJQUpVLEVBSUhmLHFCQUpHLG1EQUt0QlcsbUJBQVlLLE9BTFUsRUFLQWYsd0JBTEEsbURBTXRCVSxtQkFBWU0sT0FOVSxFQU1BZix3QkFOQSxtREFPdEJTLG1CQUFZTyxPQVBVLEVBT0FmLHdCQVBBLG1EQVF0QlEsbUJBQVlRLElBUlUsRUFRSGYscUJBUkcsbURBU3RCTyxtQkFBWVMsT0FUVSxFQVNBZix3QkFUQSxtREFVdEJNLG1CQUFZVSxTQVZVLEVBVUVmLDBCQVZGLG1EQVd0QkssbUJBQVksSUFBWixDQVhzQixFQVdGSiwyQkFYRSxtREFZdEJJLG1CQUFZVyxJQVpVLEVBWUhkLHFCQVpHLG1EQWF0QkcsbUJBQVlZLEVBYlUsRUFhTGQsMkJBYkssaUJBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtkZWZhdWx0IGFzIFBvaW50TGF5ZXJ9IGZyb20gJy4vcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEFyY0xheWVyfSBmcm9tICcuL2FyYy1sYXllci9hcmMtbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIExpbmVMYXllcn0gZnJvbSAnLi9saW5lLWxheWVyL2xpbmUtbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEdyaWRMYXllcn0gZnJvbSAnLi9ncmlkLWxheWVyL2dyaWQtbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEhleGFnb25MYXllcn0gZnJvbSAnLi9oZXhhZ29uLWxheWVyL2hleGFnb24tbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEdlb2pzb25MYXllcn0gZnJvbSAnLi9nZW9qc29uLWxheWVyL2dlb2pzb24tbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIENsdXN0ZXJMYXllcn0gZnJvbSAnLi9jbHVzdGVyLWxheWVyL2NsdXN0ZXItbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEljb25MYXllcn0gZnJvbSAnLi9pY29uLWxheWVyL2ljb24tbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEhlYXRtYXBMYXllcn0gZnJvbSAnLi9oZWF0bWFwLWxheWVyL2hlYXRtYXAtbGF5ZXInO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEgzTGF5ZXJ9IGZyb20gJy4vaDMtaGV4YWdvbi1sYXllci9oMy1oZXhhZ29uLWxheWVyJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBTY2VuZWdyYXBoTGF5ZXJ9IGZyb20gJy4vc2NlbmVncmFwaC1sYXllci9zY2VuZWdyYXBoLWxheWVyJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBUcmlwTGF5ZXJ9IGZyb20gJy4vdHJpcC1sYXllci90cmlwLWxheWVyJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBTMkdlb21ldHJ5TGF5ZXJ9IGZyb20gJy4vczItZ2VvbWV0cnktbGF5ZXIvczItZ2VvbWV0cnktbGF5ZXInO1xuaW1wb3J0IHtMQVlFUl9UWVBFU30gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGJhc2UgbGF5ZXJcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMYXllciwgT1ZFUkxBWV9UWVBFLCBjb2xvck1ha2VyfSBmcm9tICcuL2Jhc2UtbGF5ZXInO1xuXG4vLyBpbmRpdmlkdWFsIGxheWVyc1xuZXhwb3J0IGNvbnN0IEtlcGxlckdsTGF5ZXJzID0ge1xuICBQb2ludExheWVyLFxuICBBcmNMYXllcixcbiAgTGluZUxheWVyLFxuICBHcmlkTGF5ZXIsXG4gIEhleGFnb25MYXllcixcbiAgR2VvanNvbkxheWVyLFxuICBDbHVzdGVyTGF5ZXIsXG4gIEljb25MYXllcixcbiAgSGVhdG1hcExheWVyLFxuICBIM0xheWVyLFxuICBTY2VuZWdyYXBoTGF5ZXIsXG4gIFRyaXBMYXllcixcbiAgUzJHZW9tZXRyeUxheWVyXG59O1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDbGFzc2VzID0ge1xuICBbTEFZRVJfVFlQRVMucG9pbnRdOiBQb2ludExheWVyLFxuICBbTEFZRVJfVFlQRVMuYXJjXTogQXJjTGF5ZXIsXG4gIFtMQVlFUl9UWVBFUy5saW5lXTogTGluZUxheWVyLFxuICBbTEFZRVJfVFlQRVMuZ3JpZF06IEdyaWRMYXllcixcbiAgW0xBWUVSX1RZUEVTLmhleGFnb25dOiBIZXhhZ29uTGF5ZXIsXG4gIFtMQVlFUl9UWVBFUy5nZW9qc29uXTogR2VvanNvbkxheWVyLFxuICBbTEFZRVJfVFlQRVMuY2x1c3Rlcl06IENsdXN0ZXJMYXllcixcbiAgW0xBWUVSX1RZUEVTLmljb25dOiBJY29uTGF5ZXIsXG4gIFtMQVlFUl9UWVBFUy5oZWF0bWFwXTogSGVhdG1hcExheWVyLFxuICBbTEFZRVJfVFlQRVMuaGV4YWdvbklkXTogSDNMYXllcixcbiAgW0xBWUVSX1RZUEVTWyczRCddXTogU2NlbmVncmFwaExheWVyLFxuICBbTEFZRVJfVFlQRVMudHJpcF06IFRyaXBMYXllcixcbiAgW0xBWUVSX1RZUEVTLnMyXTogUzJHZW9tZXRyeUxheWVyXG59O1xuXG5leHBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICcuL2xheWVyLWZhY3RvcnknO1xuIl19