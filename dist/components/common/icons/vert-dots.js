"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var VertDots = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(VertDots, _Component);

  var _super = _createSuper(VertDots);

  function VertDots() {
    (0, _classCallCheck2["default"])(this, VertDots);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(VertDots, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "35.01",
        y: "48.31",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "35.01",
        y: "35.43",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "35.01",
        y: "22.55",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "35.01",
        y: "9.67",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22.13",
        y: "48.31",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22.13",
        y: "35.43",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22.13",
        y: "22.55",
        width: "6.44",
        height: "6.44"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "22.13",
        y: "9.67",
        width: "6.44",
        height: "6.44"
      }));
    }
  }]);
  return VertDots;
}(_react.Component);

exports["default"] = VertDots;
(0, _defineProperty2["default"])(VertDots, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(VertDots, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-vertdot'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy92ZXJ0LWRvdHMuanMiXSwibmFtZXMiOlsiVmVydERvdHMiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7V0FXbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE9BQVI7QUFBZ0IsUUFBQSxDQUFDLEVBQUMsT0FBbEI7QUFBMEIsUUFBQSxLQUFLLEVBQUMsTUFBaEM7QUFBdUMsUUFBQSxNQUFNLEVBQUM7QUFBOUMsUUFERixlQUVFO0FBQU0sUUFBQSxDQUFDLEVBQUMsT0FBUjtBQUFnQixRQUFBLENBQUMsRUFBQyxPQUFsQjtBQUEwQixRQUFBLEtBQUssRUFBQyxNQUFoQztBQUF1QyxRQUFBLE1BQU0sRUFBQztBQUE5QyxRQUZGLGVBR0U7QUFBTSxRQUFBLENBQUMsRUFBQyxPQUFSO0FBQWdCLFFBQUEsQ0FBQyxFQUFDLE9BQWxCO0FBQTBCLFFBQUEsS0FBSyxFQUFDLE1BQWhDO0FBQXVDLFFBQUEsTUFBTSxFQUFDO0FBQTlDLFFBSEYsZUFJRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE9BQVI7QUFBZ0IsUUFBQSxDQUFDLEVBQUMsTUFBbEI7QUFBeUIsUUFBQSxLQUFLLEVBQUMsTUFBL0I7QUFBc0MsUUFBQSxNQUFNLEVBQUM7QUFBN0MsUUFKRixlQUtFO0FBQU0sUUFBQSxDQUFDLEVBQUMsT0FBUjtBQUFnQixRQUFBLENBQUMsRUFBQyxPQUFsQjtBQUEwQixRQUFBLEtBQUssRUFBQyxNQUFoQztBQUF1QyxRQUFBLE1BQU0sRUFBQztBQUE5QyxRQUxGLGVBTUU7QUFBTSxRQUFBLENBQUMsRUFBQyxPQUFSO0FBQWdCLFFBQUEsQ0FBQyxFQUFDLE9BQWxCO0FBQTBCLFFBQUEsS0FBSyxFQUFDLE1BQWhDO0FBQXVDLFFBQUEsTUFBTSxFQUFDO0FBQTlDLFFBTkYsZUFPRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE9BQVI7QUFBZ0IsUUFBQSxDQUFDLEVBQUMsT0FBbEI7QUFBMEIsUUFBQSxLQUFLLEVBQUMsTUFBaEM7QUFBdUMsUUFBQSxNQUFNLEVBQUM7QUFBOUMsUUFQRixlQVFFO0FBQU0sUUFBQSxDQUFDLEVBQUMsT0FBUjtBQUFnQixRQUFBLENBQUMsRUFBQyxNQUFsQjtBQUF5QixRQUFBLEtBQUssRUFBQyxNQUEvQjtBQUFzQyxRQUFBLE1BQU0sRUFBQztBQUE3QyxRQVJGLENBREY7QUFZRDs7O0VBeEJtQ0MsZ0I7OztpQ0FBakJGLFEsZUFDQTtBQUNqQjtBQUNBRyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQztBQUZELEM7aUNBREFMLFEsa0JBTUc7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCRyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0RG90cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy12ZXJ0ZG90J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8cmVjdCB4PVwiMzUuMDFcIiB5PVwiNDguMzFcIiB3aWR0aD1cIjYuNDRcIiBoZWlnaHQ9XCI2LjQ0XCIgLz5cbiAgICAgICAgPHJlY3QgeD1cIjM1LjAxXCIgeT1cIjM1LjQzXCIgd2lkdGg9XCI2LjQ0XCIgaGVpZ2h0PVwiNi40NFwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIzNS4wMVwiIHk9XCIyMi41NVwiIHdpZHRoPVwiNi40NFwiIGhlaWdodD1cIjYuNDRcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMzUuMDFcIiB5PVwiOS42N1wiIHdpZHRoPVwiNi40NFwiIGhlaWdodD1cIjYuNDRcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMjIuMTNcIiB5PVwiNDguMzFcIiB3aWR0aD1cIjYuNDRcIiBoZWlnaHQ9XCI2LjQ0XCIgLz5cbiAgICAgICAgPHJlY3QgeD1cIjIyLjEzXCIgeT1cIjM1LjQzXCIgd2lkdGg9XCI2LjQ0XCIgaGVpZ2h0PVwiNi40NFwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIyMi4xM1wiIHk9XCIyMi41NVwiIHdpZHRoPVwiNi40NFwiIGhlaWdodD1cIjYuNDRcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMjIuMTNcIiB5PVwiOS42N1wiIHdpZHRoPVwiNi40NFwiIGhlaWdodD1cIjYuNDRcIiAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==