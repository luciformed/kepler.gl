"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _layers = require("@deck.gl/layers");

var _constants = _interopRequireDefault(require("@luma.gl/constants"));

var _shaderUtils = require("../layer-utils/shader-utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultProps = _objectSpread(_objectSpread({}, _layers.LineLayer.defaultProps), {}, {
  getTargetColor: function getTargetColor(x) {
    return x.color || [0, 0, 0, 255];
  }
});

function addInstanceColorShader(vs) {
  var targetColorVs = (0, _shaderUtils.editShader)(vs, 'line target color vs', 'attribute vec4 instanceColors;', 'attribute vec4 instanceColors; attribute vec4 instanceTargetColors;');
  return (0, _shaderUtils.editShader)(targetColorVs, 'line color vs', 'vColor = vec4(instanceColors.rgb, instanceColors.a * opacity);', "vec4 color = mix(instanceColors, instanceTargetColors, positions.x);" + "vColor = vec4(color.rgb, color.a * opacity);");
}

var EnhancedLineLayer = /*#__PURE__*/function (_LineLayer) {
  (0, _inherits2["default"])(EnhancedLineLayer, _LineLayer);

  var _super = _createSuper(EnhancedLineLayer);

  function EnhancedLineLayer() {
    (0, _classCallCheck2["default"])(this, EnhancedLineLayer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(EnhancedLineLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var shaders = (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "getShaders", this).call(this);
      return _objectSpread(_objectSpread({}, shaders), {}, {
        vs: addInstanceColorShader(shaders.vs)
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(EnhancedLineLayer.prototype), "initializeState", this).call(this);
      var attributeManager = this.state.attributeManager;
      attributeManager.addInstanced({
        instanceTargetColors: {
          size: this.props.colorFormat.length,
          type: _constants["default"].UNSIGNED_BYTE,
          normalized: true,
          transition: true,
          accessor: 'getTargetColor',
          defaultValue: [0, 0, 0, 255]
        }
      });
    }
  }]);
  return EnhancedLineLayer;
}(_layers.LineLayer);

exports["default"] = EnhancedLineLayer;
EnhancedLineLayer.layerName = 'EnhancedLineLayer';
EnhancedLineLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJMaW5lTGF5ZXIiLCJnZXRUYXJnZXRDb2xvciIsIngiLCJjb2xvciIsImFkZEluc3RhbmNlQ29sb3JTaGFkZXIiLCJ2cyIsInRhcmdldENvbG9yVnMiLCJFbmhhbmNlZExpbmVMYXllciIsInNoYWRlcnMiLCJhdHRyaWJ1dGVNYW5hZ2VyIiwic3RhdGUiLCJhZGRJbnN0YW5jZWQiLCJpbnN0YW5jZVRhcmdldENvbG9ycyIsInNpemUiLCJwcm9wcyIsImNvbG9yRm9ybWF0IiwibGVuZ3RoIiwidHlwZSIsIkdMIiwiVU5TSUdORURfQllURSIsIm5vcm1hbGl6ZWQiLCJ0cmFuc2l0aW9uIiwiYWNjZXNzb3IiLCJkZWZhdWx0VmFsdWUiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxtQ0FDYkMsa0JBQVVELFlBREc7QUFFaEJFLEVBQUFBLGNBQWMsRUFBRSx3QkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsS0FBRixJQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsR0FBVixDQUFmO0FBQUE7QUFGRCxFQUFsQjs7QUFLQSxTQUFTQyxzQkFBVCxDQUFnQ0MsRUFBaEMsRUFBb0M7QUFDbEMsTUFBTUMsYUFBYSxHQUFHLDZCQUNwQkQsRUFEb0IsRUFFcEIsc0JBRm9CLEVBR3BCLGdDQUhvQixFQUlwQixxRUFKb0IsQ0FBdEI7QUFPQSxTQUFPLDZCQUNMQyxhQURLLEVBRUwsZUFGSyxFQUdMLGdFQUhLLEVBSUwsdUhBSkssQ0FBUDtBQU9EOztJQUVvQkMsaUI7Ozs7Ozs7Ozs7OztXQUNuQixzQkFBYTtBQUNYLFVBQU1DLE9BQU8sc0hBQWI7QUFFQSw2Q0FDS0EsT0FETDtBQUVFSCxRQUFBQSxFQUFFLEVBQUVELHNCQUFzQixDQUFDSSxPQUFPLENBQUNILEVBQVQ7QUFGNUI7QUFJRDs7O1dBRUQsMkJBQWtCO0FBQ2hCO0FBQ0EsVUFBT0ksZ0JBQVAsR0FBMkIsS0FBS0MsS0FBaEMsQ0FBT0QsZ0JBQVA7QUFDQUEsTUFBQUEsZ0JBQWdCLENBQUNFLFlBQWpCLENBQThCO0FBQzVCQyxRQUFBQSxvQkFBb0IsRUFBRTtBQUNwQkMsVUFBQUEsSUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkMsTUFEVDtBQUVwQkMsVUFBQUEsSUFBSSxFQUFFQyxzQkFBR0MsYUFGVztBQUdwQkMsVUFBQUEsVUFBVSxFQUFFLElBSFE7QUFJcEJDLFVBQUFBLFVBQVUsRUFBRSxJQUpRO0FBS3BCQyxVQUFBQSxRQUFRLEVBQUUsZ0JBTFU7QUFNcEJDLFVBQUFBLFlBQVksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLEdBQVY7QUFOTTtBQURNLE9BQTlCO0FBVUQ7OztFQXZCNEN2QixpQjs7O0FBMEIvQ08saUJBQWlCLENBQUNpQixTQUFsQixHQUE4QixtQkFBOUI7QUFDQWpCLGlCQUFpQixDQUFDUixZQUFsQixHQUFpQ0EsWUFBakMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xpbmVMYXllcn0gZnJvbSAnQGRlY2suZ2wvbGF5ZXJzJztcbmltcG9ydCBHTCBmcm9tICdAbHVtYS5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtlZGl0U2hhZGVyfSBmcm9tICdkZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL3NoYWRlci11dGlscyc7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uTGluZUxheWVyLmRlZmF1bHRQcm9wcyxcbiAgZ2V0VGFyZ2V0Q29sb3I6IHggPT4geC5jb2xvciB8fCBbMCwgMCwgMCwgMjU1XVxufTtcblxuZnVuY3Rpb24gYWRkSW5zdGFuY2VDb2xvclNoYWRlcih2cykge1xuICBjb25zdCB0YXJnZXRDb2xvclZzID0gZWRpdFNoYWRlcihcbiAgICB2cyxcbiAgICAnbGluZSB0YXJnZXQgY29sb3IgdnMnLFxuICAgICdhdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZUNvbG9yczsnLFxuICAgICdhdHRyaWJ1dGUgdmVjNCBpbnN0YW5jZUNvbG9yczsgYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VUYXJnZXRDb2xvcnM7J1xuICApO1xuXG4gIHJldHVybiBlZGl0U2hhZGVyKFxuICAgIHRhcmdldENvbG9yVnMsXG4gICAgJ2xpbmUgY29sb3IgdnMnLFxuICAgICd2Q29sb3IgPSB2ZWM0KGluc3RhbmNlQ29sb3JzLnJnYiwgaW5zdGFuY2VDb2xvcnMuYSAqIG9wYWNpdHkpOycsXG4gICAgYHZlYzQgY29sb3IgPSBtaXgoaW5zdGFuY2VDb2xvcnMsIGluc3RhbmNlVGFyZ2V0Q29sb3JzLCBwb3NpdGlvbnMueCk7YCArXG4gICAgICBgdkNvbG9yID0gdmVjNChjb2xvci5yZ2IsIGNvbG9yLmEgKiBvcGFjaXR5KTtgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuaGFuY2VkTGluZUxheWVyIGV4dGVuZHMgTGluZUxheWVyIHtcbiAgZ2V0U2hhZGVycygpIHtcbiAgICBjb25zdCBzaGFkZXJzID0gc3VwZXIuZ2V0U2hhZGVycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNoYWRlcnMsXG4gICAgICB2czogYWRkSW5zdGFuY2VDb2xvclNoYWRlcihzaGFkZXJzLnZzKVxuICAgIH07XG4gIH1cblxuICBpbml0aWFsaXplU3RhdGUoKSB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZVN0YXRlKCk7XG4gICAgY29uc3Qge2F0dHJpYnV0ZU1hbmFnZXJ9ID0gdGhpcy5zdGF0ZTtcbiAgICBhdHRyaWJ1dGVNYW5hZ2VyLmFkZEluc3RhbmNlZCh7XG4gICAgICBpbnN0YW5jZVRhcmdldENvbG9yczoge1xuICAgICAgICBzaXplOiB0aGlzLnByb3BzLmNvbG9yRm9ybWF0Lmxlbmd0aCxcbiAgICAgICAgdHlwZTogR0wuVU5TSUdORURfQllURSxcbiAgICAgICAgbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRUYXJnZXRDb2xvcicsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogWzAsIDAsIDAsIDI1NV1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5FbmhhbmNlZExpbmVMYXllci5sYXllck5hbWUgPSAnRW5oYW5jZWRMaW5lTGF5ZXInO1xuRW5oYW5jZWRMaW5lTGF5ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19