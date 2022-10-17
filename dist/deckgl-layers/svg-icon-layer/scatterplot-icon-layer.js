"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _layers = require("@deck.gl/layers");

var _core = require("@luma.gl/core");

var _constants = _interopRequireDefault(require("@luma.gl/constants"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_POS = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];

var ScatterplotIconLayer = /*#__PURE__*/function (_ScatterplotLayer) {
  (0, _inherits2["default"])(ScatterplotIconLayer, _ScatterplotLayer);

  var _super = _createSuper(ScatterplotIconLayer);

  function ScatterplotIconLayer() {
    (0, _classCallCheck2["default"])(this, ScatterplotIconLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ScatterplotIconLayer, [{
    key: "_getModel",
    value: function _getModel(gl) {
      // use default scatterplot shaders
      var shaders = this.getShaders();
      var iconGeometry = this.props.iconGeometry;
      var geometry = iconGeometry ? new _core.Geometry({
        drawMode: _constants["default"].TRIANGLES,
        attributes: {
          positions: new Float32Array(iconGeometry)
        }
      }) : new _core.Geometry({
        drawMode: _constants["default"].TRIANGLE_FAN,
        attributes: {
          positions: new Float32Array(DEFAULT_POS)
        }
      });
      return new _core.Model(gl, _objectSpread(_objectSpread({}, shaders), {}, {
        id: this.props.id,
        geometry: geometry,
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }]);
  return ScatterplotIconLayer;
}(_layers.ScatterplotLayer);

exports["default"] = ScatterplotIconLayer;
ScatterplotIconLayer.layerName = 'ScatterplotIconLayer';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL3N2Zy1pY29uLWxheWVyL3NjYXR0ZXJwbG90LWljb24tbGF5ZXIuanMiXSwibmFtZXMiOlsiREVGQVVMVF9QT1MiLCJTY2F0dGVycGxvdEljb25MYXllciIsImdsIiwic2hhZGVycyIsImdldFNoYWRlcnMiLCJpY29uR2VvbWV0cnkiLCJwcm9wcyIsImdlb21ldHJ5IiwiR2VvbWV0cnkiLCJkcmF3TW9kZSIsIkdMIiwiVFJJQU5HTEVTIiwiYXR0cmlidXRlcyIsInBvc2l0aW9ucyIsIkZsb2F0MzJBcnJheSIsIlRSSUFOR0xFX0ZBTiIsIk1vZGVsIiwiaWQiLCJpc0luc3RhbmNlZCIsInNoYWRlckNhY2hlIiwiY29udGV4dCIsIlNjYXR0ZXJwbG90TGF5ZXIiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFDLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBQyxDQUFuQyxFQUFzQyxDQUF0QyxDQUFwQjs7SUFDcUJDLG9COzs7Ozs7Ozs7Ozs7V0FDbkIsbUJBQVVDLEVBQVYsRUFBYztBQUNaO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFFQSxVQUFPQyxZQUFQLEdBQXVCLEtBQUtDLEtBQTVCLENBQU9ELFlBQVA7QUFFQSxVQUFNRSxRQUFRLEdBQUdGLFlBQVksR0FDekIsSUFBSUcsY0FBSixDQUFhO0FBQ1hDLFFBQUFBLFFBQVEsRUFBRUMsc0JBQUdDLFNBREY7QUFFWEMsUUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLFVBQUFBLFNBQVMsRUFBRSxJQUFJQyxZQUFKLENBQWlCVCxZQUFqQjtBQUREO0FBRkQsT0FBYixDQUR5QixHQU96QixJQUFJRyxjQUFKLENBQWE7QUFDWEMsUUFBQUEsUUFBUSxFQUFFQyxzQkFBR0ssWUFERjtBQUVYSCxRQUFBQSxVQUFVLEVBQUU7QUFDVkMsVUFBQUEsU0FBUyxFQUFFLElBQUlDLFlBQUosQ0FBaUJkLFdBQWpCO0FBREQ7QUFGRCxPQUFiLENBUEo7QUFjQSxhQUFPLElBQUlnQixXQUFKLENBQVVkLEVBQVYsa0NBQ0ZDLE9BREU7QUFFTGMsUUFBQUEsRUFBRSxFQUFFLEtBQUtYLEtBQUwsQ0FBV1csRUFGVjtBQUdMVixRQUFBQSxRQUFRLEVBQVJBLFFBSEs7QUFJTFcsUUFBQUEsV0FBVyxFQUFFLElBSlI7QUFLTEMsUUFBQUEsV0FBVyxFQUFFLEtBQUtDLE9BQUwsQ0FBYUQ7QUFMckIsU0FBUDtBQU9EOzs7RUE1QitDRSx3Qjs7O0FBK0JsRHBCLG9CQUFvQixDQUFDcUIsU0FBckIsR0FBaUMsc0JBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtTY2F0dGVycGxvdExheWVyfSBmcm9tICdAZGVjay5nbC9sYXllcnMnO1xuaW1wb3J0IHtHZW9tZXRyeSwgTW9kZWx9IGZyb20gJ0BsdW1hLmdsL2NvcmUnO1xuaW1wb3J0IEdMIGZyb20gJ0BsdW1hLmdsL2NvbnN0YW50cyc7XG5cbmNvbnN0IERFRkFVTFRfUE9TID0gWy0xLCAtMSwgMCwgLTEsIDEsIDAsIDEsIDEsIDAsIDEsIC0xLCAwXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYXR0ZXJwbG90SWNvbkxheWVyIGV4dGVuZHMgU2NhdHRlcnBsb3RMYXllciB7XG4gIF9nZXRNb2RlbChnbCkge1xuICAgIC8vIHVzZSBkZWZhdWx0IHNjYXR0ZXJwbG90IHNoYWRlcnNcbiAgICBjb25zdCBzaGFkZXJzID0gdGhpcy5nZXRTaGFkZXJzKCk7XG5cbiAgICBjb25zdCB7aWNvbkdlb21ldHJ5fSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBnZW9tZXRyeSA9IGljb25HZW9tZXRyeVxuICAgICAgPyBuZXcgR2VvbWV0cnkoe1xuICAgICAgICAgIGRyYXdNb2RlOiBHTC5UUklBTkdMRVMsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgcG9zaXRpb25zOiBuZXcgRmxvYXQzMkFycmF5KGljb25HZW9tZXRyeSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICA6IG5ldyBHZW9tZXRyeSh7XG4gICAgICAgICAgZHJhd01vZGU6IEdMLlRSSUFOR0xFX0ZBTixcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBwb3NpdGlvbnM6IG5ldyBGbG9hdDMyQXJyYXkoREVGQVVMVF9QT1MpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIHJldHVybiBuZXcgTW9kZWwoZ2wsIHtcbiAgICAgIC4uLnNoYWRlcnMsXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGdlb21ldHJ5LFxuICAgICAgaXNJbnN0YW5jZWQ6IHRydWUsXG4gICAgICBzaGFkZXJDYWNoZTogdGhpcy5jb250ZXh0LnNoYWRlckNhY2hlXG4gICAgfSk7XG4gIH1cbn1cblxuU2NhdHRlcnBsb3RJY29uTGF5ZXIubGF5ZXJOYW1lID0gJ1NjYXR0ZXJwbG90SWNvbkxheWVyJztcbiJdfQ==