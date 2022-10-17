"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extensions = require("@deck.gl/extensions");

var _lineLayerIcon = _interopRequireDefault(require("./line-layer-icon"));

var _arcLayer = _interopRequireDefault(require("../arc-layer/arc-layer"));

var _lineLayer = _interopRequireDefault(require("../../deckgl-layers/line-layer/line-layer"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LineLayer = /*#__PURE__*/function (_ArcLayer) {
  (0, _inherits2["default"])(LineLayer, _ArcLayer);

  var _super = _createSuper(LineLayer);

  function LineLayer() {
    (0, _classCallCheck2["default"])(this, LineLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LineLayer, [{
    key: "type",
    get: function get() {
      return 'line';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _lineLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      var visualChannels = (0, _get2["default"])((0, _getPrototypeOf2["default"])(LineLayer.prototype), "visualChannels", this);
      return _objectSpread(_objectSpread({}, visualChannels), {}, {
        sourceColor: _objectSpread(_objectSpread({}, visualChannels.sourceColor), {}, {
          accessor: 'getColor'
        })
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          interactionConfig = opts.interactionConfig;
      var layerProps = {
        widthScale: this.config.visConfig.thickness
      };

      var updateTriggers = _objectSpread({
        getPosition: this.config.columns,
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      }, this.getVisualChannelUpdateTriggers());

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return [// base layer
      new _lineLayer["default"](_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), this.getBrushingExtensionProps(interactionConfig, 'source_target')), data), layerProps), {}, {
        updateTriggers: updateTriggers,
        extensions: [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [new _extensions.BrushingExtension()])
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject ? [new _lineLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        data: [hoveredObject],
        getColor: this.config.highlightColor,
        getTargetColor: this.config.highlightColor,
        getWidth: data.getWidth
      }))] : []));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref) {
      var _ref$fieldPairs = _ref.fieldPairs,
          fieldPairs = _ref$fieldPairs === void 0 ? [] : _ref$fieldPairs;

      if (fieldPairs.length < 2) {
        return {
          props: []
        };
      }

      var props = {}; // connect the first two point layer with arc

      props.columns = {
        lat0: fieldPairs[0].pair.lat,
        lng0: fieldPairs[0].pair.lng,
        lat1: fieldPairs[1].pair.lat,
        lng1: fieldPairs[1].pair.lng
      };
      props.label = "".concat(fieldPairs[0].defaultName, " -> ").concat(fieldPairs[1].defaultName, " line");
      return {
        props: [props]
      };
    }
  }]);
  return LineLayer;
}(_arcLayer["default"]);

exports["default"] = LineLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvbGluZS1sYXllci9saW5lLWxheWVyLmpzIl0sIm5hbWVzIjpbIkxpbmVMYXllciIsIkxpbmVMYXllckljb24iLCJ2aXN1YWxDaGFubmVscyIsInNvdXJjZUNvbG9yIiwiYWNjZXNzb3IiLCJvcHRzIiwiZGF0YSIsImdwdUZpbHRlciIsIm9iamVjdEhvdmVyZWQiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImxheWVyUHJvcHMiLCJ3aWR0aFNjYWxlIiwiY29uZmlnIiwidmlzQ29uZmlnIiwidGhpY2tuZXNzIiwidXBkYXRlVHJpZ2dlcnMiLCJnZXRQb3NpdGlvbiIsImNvbHVtbnMiLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImhvdmVyZWRPYmplY3QiLCJoYXNIb3ZlcmVkT2JqZWN0IiwiRW5oYW5jZWRMaW5lTGF5ZXIiLCJnZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzIiwiZXh0ZW5zaW9ucyIsIkJydXNoaW5nRXh0ZW5zaW9uIiwiZ2V0RGVmYXVsdEhvdmVyTGF5ZXJQcm9wcyIsImdldENvbG9yIiwiaGlnaGxpZ2h0Q29sb3IiLCJnZXRUYXJnZXRDb2xvciIsImdldFdpZHRoIiwiZmllbGRQYWlycyIsImxlbmd0aCIsInByb3BzIiwibGF0MCIsInBhaXIiLCJsYXQiLCJsbmcwIiwibG5nIiwibGF0MSIsImxuZzEiLCJsYWJlbCIsImRlZmF1bHROYW1lIiwiQXJjTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztTQUNuQixlQUFXO0FBQ1QsYUFBTyxNQUFQO0FBQ0Q7OztTQUVELGVBQWdCO0FBQ2QsYUFBT0MseUJBQVA7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QUFBUixPQUFQO0FBQ0Q7OztFQXBDb0NVLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtCcnVzaGluZ0V4dGVuc2lvbn0gZnJvbSAnQGRlY2suZ2wvZXh0ZW5zaW9ucyc7XG5cbmltcG9ydCBMaW5lTGF5ZXJJY29uIGZyb20gJy4vbGluZS1sYXllci1pY29uJztcbmltcG9ydCBBcmNMYXllciBmcm9tICcuLi9hcmMtbGF5ZXIvYXJjLWxheWVyJztcbmltcG9ydCBFbmhhbmNlZExpbmVMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVMYXllciBleHRlbmRzIEFyY0xheWVyIHtcbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdsaW5lJztcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIExpbmVMYXllckljb247XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbHMgPSBzdXBlci52aXN1YWxDaGFubmVscztcbiAgICByZXR1cm4ge1xuICAgICAgLi4udmlzdWFsQ2hhbm5lbHMsXG4gICAgICBzb3VyY2VDb2xvcjoge1xuICAgICAgICAuLi52aXN1YWxDaGFubmVscy5zb3VyY2VDb2xvcixcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRDb2xvcidcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyh7ZmllbGRQYWlycyA9IFtdfSkge1xuICAgIGlmIChmaWVsZFBhaXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7cHJvcHM6IFtdfTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcblxuICAgIC8vIGNvbm5lY3QgdGhlIGZpcnN0IHR3byBwb2ludCBsYXllciB3aXRoIGFyY1xuICAgIHByb3BzLmNvbHVtbnMgPSB7XG4gICAgICBsYXQwOiBmaWVsZFBhaXJzWzBdLnBhaXIubGF0LFxuICAgICAgbG5nMDogZmllbGRQYWlyc1swXS5wYWlyLmxuZyxcbiAgICAgIGxhdDE6IGZpZWxkUGFpcnNbMV0ucGFpci5sYXQsXG4gICAgICBsbmcxOiBmaWVsZFBhaXJzWzFdLnBhaXIubG5nXG4gICAgfTtcbiAgICBwcm9wcy5sYWJlbCA9IGAke2ZpZWxkUGFpcnNbMF0uZGVmYXVsdE5hbWV9IC0+ICR7ZmllbGRQYWlyc1sxXS5kZWZhdWx0TmFtZX0gbGluZWA7XG5cbiAgICByZXR1cm4ge3Byb3BzOiBbcHJvcHNdfTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKG9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ3B1RmlsdGVyLCBvYmplY3RIb3ZlcmVkLCBpbnRlcmFjdGlvbkNvbmZpZ30gPSBvcHRzO1xuXG4gICAgY29uc3QgbGF5ZXJQcm9wcyA9IHtcbiAgICAgIHdpZHRoU2NhbGU6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy50aGlja25lc3NcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB7XG4gICAgICBnZXRQb3NpdGlvbjogdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyxcbiAgICAgIC4uLnRoaXMuZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKClcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRMYXllclByb3BzID0gdGhpcy5nZXREZWZhdWx0RGVja0xheWVyUHJvcHMob3B0cyk7XG4gICAgY29uc3QgaG92ZXJlZE9iamVjdCA9IHRoaXMuaGFzSG92ZXJlZE9iamVjdChvYmplY3RIb3ZlcmVkKTtcblxuICAgIHJldHVybiBbXG4gICAgICAvLyBiYXNlIGxheWVyXG4gICAgICBuZXcgRW5oYW5jZWRMaW5lTGF5ZXIoe1xuICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgLi4udGhpcy5nZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzKGludGVyYWN0aW9uQ29uZmlnLCAnc291cmNlX3RhcmdldCcpLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICB1cGRhdGVUcmlnZ2VycyxcbiAgICAgICAgZXh0ZW5zaW9uczogWy4uLmRlZmF1bHRMYXllclByb3BzLmV4dGVuc2lvbnMsIG5ldyBCcnVzaGluZ0V4dGVuc2lvbigpXVxuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKGhvdmVyZWRPYmplY3RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgRW5oYW5jZWRMaW5lTGF5ZXIoe1xuICAgICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMoKSxcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgICAgICAgZGF0YTogW2hvdmVyZWRPYmplY3RdLFxuICAgICAgICAgICAgICBnZXRDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGdldFRhcmdldENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgZ2V0V2lkdGg6IGRhdGEuZ2V0V2lkdGhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==