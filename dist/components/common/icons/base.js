"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var getStyleClassFromColor = function getStyleClassFromColor(totalColor, colors) {
  return new Array(totalColor).fill(1).reduce(function (accu, c, i) {
    return "".concat(accu, ".cr").concat(i + 1, " {fill:").concat(colors[i % colors.length], ";}");
  }, '');
};

var Base = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Base, _Component);

  var _super = _createSuper(Base);

  function Base() {
    (0, _classCallCheck2["default"])(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Base, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          viewBox = _this$props.viewBox,
          style = _this$props.style,
          children = _this$props.children,
          predefinedClassName = _this$props.predefinedClassName,
          className = _this$props.className,
          colors = _this$props.colors,
          totalColor = _this$props.totalColor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["height", "width", "viewBox", "style", "children", "predefinedClassName", "className", "colors", "totalColor"]);
      var svgHeight = height;
      var svgWidth = width || svgHeight;
      var fillStyle = Array.isArray(colors) && totalColor && getStyleClassFromColor(totalColor, colors);
      return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
        viewBox: viewBox,
        width: svgWidth,
        height: svgHeight,
        style: style,
        className: "".concat(predefinedClassName, " ").concat(className)
      }, props), fillStyle ? /*#__PURE__*/_react["default"].createElement("style", {
        type: "text/css"
      }, fillStyle) : null, children);
    }
  }]);
  return Base;
}(_react.Component);

exports["default"] = Base;
(0, _defineProperty2["default"])(Base, "displayName", 'Base Icon');
(0, _defineProperty2["default"])(Base, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,

  /** Set the width of the icon, ex. '16px' */
  width: _propTypes["default"].string,

  /** Set the viewbox of the svg */
  viewBox: _propTypes["default"].string,

  /** Path element */
  children: _propTypes["default"].node,
  predefinedClassName: _propTypes["default"].string,
  className: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Base, "defaultProps", {
  height: null,
  width: null,
  viewBox: '0 0 64 64',
  predefinedClassName: '',
  className: '',
  style: {
    fill: 'currentColor'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9iYXNlLmpzIl0sIm5hbWVzIjpbImdldFN0eWxlQ2xhc3NGcm9tQ29sb3IiLCJ0b3RhbENvbG9yIiwiY29sb3JzIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwiYWNjdSIsImMiLCJpIiwibGVuZ3RoIiwiQmFzZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJ2aWV3Qm94Iiwic3R5bGUiLCJjaGlsZHJlbiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJzdmdIZWlnaHQiLCJzdmdXaWR0aCIsImZpbGxTdHlsZSIsImlzQXJyYXkiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLFVBQUQsRUFBYUMsTUFBYjtBQUFBLFNBQzdCLElBQUlDLEtBQUosQ0FBVUYsVUFBVixFQUNHRyxJQURILENBQ1EsQ0FEUixFQUVHQyxNQUZILENBRVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQVVDLENBQVY7QUFBQSxxQkFBbUJGLElBQW5CLGdCQUE2QkUsQ0FBQyxHQUFHLENBQWpDLG9CQUE0Q04sTUFBTSxDQUFDTSxDQUFDLEdBQUdOLE1BQU0sQ0FBQ08sTUFBWixDQUFsRDtBQUFBLEdBRlYsRUFFcUYsRUFGckYsQ0FENkI7QUFBQSxDQUEvQjs7SUFLcUJDLEk7Ozs7Ozs7Ozs7OztXQTRCbkIsa0JBQVM7QUFDUCx3QkFXSSxLQUFLQyxLQVhUO0FBQUEsVUFDRUMsTUFERixlQUNFQSxNQURGO0FBQUEsVUFFRUMsS0FGRixlQUVFQSxLQUZGO0FBQUEsVUFHRUMsT0FIRixlQUdFQSxPQUhGO0FBQUEsVUFJRUMsS0FKRixlQUlFQSxLQUpGO0FBQUEsVUFLRUMsUUFMRixlQUtFQSxRQUxGO0FBQUEsVUFNRUMsbUJBTkYsZUFNRUEsbUJBTkY7QUFBQSxVQU9FQyxTQVBGLGVBT0VBLFNBUEY7QUFBQSxVQVFFaEIsTUFSRixlQVFFQSxNQVJGO0FBQUEsVUFTRUQsVUFURixlQVNFQSxVQVRGO0FBQUEsVUFVS1UsS0FWTDtBQVlBLFVBQU1RLFNBQVMsR0FBR1AsTUFBbEI7QUFDQSxVQUFNUSxRQUFRLEdBQUdQLEtBQUssSUFBSU0sU0FBMUI7QUFFQSxVQUFNRSxTQUFTLEdBQ2JsQixLQUFLLENBQUNtQixPQUFOLENBQWNwQixNQUFkLEtBQXlCRCxVQUF6QixJQUF1Q0Qsc0JBQXNCLENBQUNDLFVBQUQsRUFBYUMsTUFBYixDQUQvRDtBQUdBLDBCQUNFO0FBQ0UsUUFBQSxPQUFPLEVBQUVZLE9BRFg7QUFFRSxRQUFBLEtBQUssRUFBRU0sUUFGVDtBQUdFLFFBQUEsTUFBTSxFQUFFRCxTQUhWO0FBSUUsUUFBQSxLQUFLLEVBQUVKLEtBSlQ7QUFLRSxRQUFBLFNBQVMsWUFBS0UsbUJBQUwsY0FBNEJDLFNBQTVCO0FBTFgsU0FNTVAsS0FOTixHQVFHVSxTQUFTLGdCQUFHO0FBQU8sUUFBQSxJQUFJLEVBQUM7QUFBWixTQUF3QkEsU0FBeEIsQ0FBSCxHQUFnRCxJQVI1RCxFQVNHTCxRQVRILENBREY7QUFhRDs7O0VBNUQrQk8sZ0I7OztpQ0FBYmIsSSxpQkFDRSxXO2lDQURGQSxJLGVBR0E7QUFDakI7QUFDQUUsRUFBQUEsTUFBTSxFQUFFWSxzQkFBVUMsTUFGRDs7QUFHakI7QUFDQVosRUFBQUEsS0FBSyxFQUFFVyxzQkFBVUMsTUFKQTs7QUFLakI7QUFDQVgsRUFBQUEsT0FBTyxFQUFFVSxzQkFBVUMsTUFORjs7QUFPakI7QUFDQVQsRUFBQUEsUUFBUSxFQUFFUSxzQkFBVUUsSUFSSDtBQVVqQlQsRUFBQUEsbUJBQW1CLEVBQUVPLHNCQUFVQyxNQVZkO0FBV2pCUCxFQUFBQSxTQUFTLEVBQUVNLHNCQUFVQztBQVhKLEM7aUNBSEFmLEksa0JBaUJHO0FBQ3BCRSxFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQkMsRUFBQUEsS0FBSyxFQUFFLElBRmE7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRSxXQUhXO0FBSXBCRyxFQUFBQSxtQkFBbUIsRUFBRSxFQUpEO0FBS3BCQyxFQUFBQSxTQUFTLEVBQUUsRUFMUztBQU1wQkgsRUFBQUEsS0FBSyxFQUFFO0FBQ0xYLElBQUFBLElBQUksRUFBRTtBQUREO0FBTmEsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgZ2V0U3R5bGVDbGFzc0Zyb21Db2xvciA9ICh0b3RhbENvbG9yLCBjb2xvcnMpID0+XG4gIG5ldyBBcnJheSh0b3RhbENvbG9yKVxuICAgIC5maWxsKDEpXG4gICAgLnJlZHVjZSgoYWNjdSwgYywgaSkgPT4gYCR7YWNjdX0uY3Ike2kgKyAxfSB7ZmlsbDoke2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19O31gLCAnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnQmFzZSBJY29uJztcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogU2V0IHRoZSB3aWR0aCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBTZXQgdGhlIHZpZXdib3ggb2YgdGhlIHN2ZyAqL1xuICAgIHZpZXdCb3g6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgLyoqIFBhdGggZWxlbWVudCAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IG51bGwsXG4gICAgd2lkdGg6IG51bGwsXG4gICAgdmlld0JveDogJzAgMCA2NCA2NCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJycsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzdHlsZToge1xuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcidcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlaWdodCxcbiAgICAgIHdpZHRoLFxuICAgICAgdmlld0JveCxcbiAgICAgIHN0eWxlLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29sb3JzLFxuICAgICAgdG90YWxDb2xvcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNvbnN0IHN2Z1dpZHRoID0gd2lkdGggfHwgc3ZnSGVpZ2h0O1xuXG4gICAgY29uc3QgZmlsbFN0eWxlID1cbiAgICAgIEFycmF5LmlzQXJyYXkoY29sb3JzKSAmJiB0b3RhbENvbG9yICYmIGdldFN0eWxlQ2xhc3NGcm9tQ29sb3IodG90YWxDb2xvciwgY29sb3JzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIHZpZXdCb3g9e3ZpZXdCb3h9XG4gICAgICAgIHdpZHRoPXtzdmdXaWR0aH1cbiAgICAgICAgaGVpZ2h0PXtzdmdIZWlnaHR9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVkZWZpbmVkQ2xhc3NOYW1lfSAke2NsYXNzTmFtZX1gfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtmaWxsU3R5bGUgPyA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2ZpbGxTdHlsZX08L3N0eWxlPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==