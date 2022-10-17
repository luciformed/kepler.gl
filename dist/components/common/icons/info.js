"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var Info = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Info, _Component);

  var _super = _createSuper(Info);

  function Info() {
    (0, _classCallCheck2["default"])(this, Info);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Info, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "25",
        cy: "25",
        fill: "none",
        r: "24",
        stroke: this.props.stroke,
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23.779,16.241c-0.216,0-0.357-0.144-0.357-0.359v-2.618c0-0.215,0.142-0.359,0.357-0.359h2.439  c0.215,0,0.359,0.144,0.359,0.359v2.618c0,0.215-0.145,0.359-0.359,0.359H23.779z M23.852,37.293c-0.215,0-0.358-0.143-0.358-0.358  V20.473c0-0.215,0.144-0.359,0.358-0.359h2.295c0.216,0,0.359,0.144,0.359,0.359v16.462c0,0.216-0.144,0.358-0.359,0.358H23.852z"
      }));
    }
  }]);
  return Info;
}(_react.Component);

exports["default"] = Info;
(0, _defineProperty2["default"])(Info, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Info, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-info',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9pbmZvLmpzIl0sIm5hbWVzIjpbIkluZm8iLCJwcm9wcyIsInN0cm9rZSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7OztXQVluQixrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGdCQUFEO0FBQU0sUUFBQSxPQUFPLEVBQUM7QUFBZCxTQUE4QixLQUFLQyxLQUFuQyxnQkFDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLElBREw7QUFFRSxRQUFBLEVBQUUsRUFBQyxJQUZMO0FBR0UsUUFBQSxJQUFJLEVBQUMsTUFIUDtBQUlFLFFBQUEsQ0FBQyxFQUFDLElBSko7QUFLRSxRQUFBLE1BQU0sRUFBRSxLQUFLQSxLQUFMLENBQVdDLE1BTHJCO0FBTUUsUUFBQSxhQUFhLEVBQUMsT0FOaEI7QUFPRSxRQUFBLGdCQUFnQixFQUFDLElBUG5CO0FBUUUsUUFBQSxXQUFXLEVBQUM7QUFSZCxRQURGLGVBV0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBWEYsQ0FERjtBQWVEOzs7RUE1QitCQyxnQjs7O2lDQUFiSCxJLGVBQ0E7QUFDakI7QUFDQUksRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTixJLGtCQU1HO0FBQ3BCSSxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUUsb0JBRkQ7QUFHcEJMLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWluZm8nLFxuICAgIHN0cm9rZTogJyNGRkYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9XCIyNVwiXG4gICAgICAgICAgY3k9XCIyNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHI9XCIyNFwiXG4gICAgICAgICAgc3Ryb2tlPXt0aGlzLnByb3BzLnN0cm9rZX1cbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMy43NzksMTYuMjQxYy0wLjIxNiwwLTAuMzU3LTAuMTQ0LTAuMzU3LTAuMzU5di0yLjYxOGMwLTAuMjE1LDAuMTQyLTAuMzU5LDAuMzU3LTAuMzU5aDIuNDM5ICBjMC4yMTUsMCwwLjM1OSwwLjE0NCwwLjM1OSwwLjM1OXYyLjYxOGMwLDAuMjE1LTAuMTQ1LDAuMzU5LTAuMzU5LDAuMzU5SDIzLjc3OXogTTIzLjg1MiwzNy4yOTNjLTAuMjE1LDAtMC4zNTgtMC4xNDMtMC4zNTgtMC4zNTggIFYyMC40NzNjMC0wLjIxNSwwLjE0NC0wLjM1OSwwLjM1OC0wLjM1OWgyLjI5NWMwLjIxNiwwLDAuMzU5LDAuMTQ0LDAuMzU5LDAuMzU5djE2LjQ2MmMwLDAuMjE2LTAuMTQ0LDAuMzU4LTAuMzU5LDAuMzU4SDIzLjg1MnpcIiAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==