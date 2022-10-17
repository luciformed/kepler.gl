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

var _base = _interopRequireDefault(require("../../components/common/icons/base"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TripLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TripLayerIcon, _Component);

  var _super = _createSuper(TripLayerIcon);

  function TripLayerIcon() {
    (0, _classCallCheck2["default"])(this, TripLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TripLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        clipPath: "url(#clip0)",
        className: "cr1"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M53.025 4.85005C50.25 2.07505 45.75 2.07505 42.975 4.85005C40.2 7.62505 40.2 12.2 42.975 14.975L48 20L53.025 14.9C55.8 12.2 55.8 7.62505 53.025 4.85005ZM48 11.375C47.175 11.375 46.5 10.7 46.5 9.87505C46.5 9.05005 47.175 8.37505 48 8.37505C48.825 8.37505 49.5 9.05005 49.5 9.87505C49.5 10.7 48.825 11.375 48 11.375Z"
      })), /*#__PURE__*/_react["default"].createElement("g", {
        clipPath: "url(#clip1)",
        className: "cr2"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M20.025 36.85C17.25 34.075 12.75 34.075 9.97502 36.85C7.20002 39.625 7.20002 44.2 9.97502 46.975L15 52L20.025 46.9C22.8 44.2 22.8 39.625 20.025 36.85ZM15 43.375C14.175 43.375 13.5 42.7 13.5 41.875C13.5 41.05 14.175 40.375 15 40.375C15.825 40.375 16.5 41.05 16.5 41.875C16.5 42.7 15.825 43.375 15 43.375Z"
      })), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr3",
        d: "M45.9943 19.8697C46.0661 20.6951 45.4552 21.4223 44.6299 21.4941L34.782 22.3504L38.1515 40.1604L17.8748 54.7185C17.2019 55.2016 16.2647 55.0478 15.7815 54.3748C15.2984 53.7019 15.4522 52.7647 16.1252 52.2815L34.8483 38.8389L31.2177 19.6491L44.37 18.5053C45.1953 18.4336 45.9225 19.0444 45.9943 19.8697Z"
      }), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clip0"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        width: "18",
        height: "18",
        transform: "translate(39 2)"
      })), /*#__PURE__*/_react["default"].createElement("clipPath", {
        id: "clip1"
      }, /*#__PURE__*/_react["default"].createElement("rect", {
        width: "18",
        height: "18",
        transform: "translate(6 34)"
      }))));
    }
  }]);
  return TripLayerIcon;
}(_react.Component);

exports["default"] = TripLayerIcon;
(0, _defineProperty2["default"])(TripLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(TripLayerIcon, "defaultProps", {
  size: 'tiny',
  height: '16px',
  predefinedClassName: 'trip-layer-icon'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvdHJpcC1sYXllci90cmlwLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiVHJpcExheWVySWNvbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sb3JzIiwiYXJyYXlPZiIsInNpemUiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7O1dBYW5CLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFBRyxRQUFBLFFBQVEsRUFBQyxhQUFaO0FBQTBCLFFBQUEsU0FBUyxFQUFDO0FBQXBDLHNCQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLENBREYsZUFJRTtBQUFHLFFBQUEsUUFBUSxFQUFDLGFBQVo7QUFBMEIsUUFBQSxTQUFTLEVBQUM7QUFBcEMsc0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsQ0FKRixlQU9FO0FBQ0UsUUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFFBQUEsQ0FBQyxFQUFDO0FBRkosUUFQRixlQVdFLDJEQUNFO0FBQVUsUUFBQSxFQUFFLEVBQUM7QUFBYixzQkFDRTtBQUFNLFFBQUEsS0FBSyxFQUFDLElBQVo7QUFBaUIsUUFBQSxNQUFNLEVBQUMsSUFBeEI7QUFBNkIsUUFBQSxTQUFTLEVBQUM7QUFBdkMsUUFERixDQURGLGVBSUU7QUFBVSxRQUFBLEVBQUUsRUFBQztBQUFiLHNCQUNFO0FBQU0sUUFBQSxLQUFLLEVBQUMsSUFBWjtBQUFpQixRQUFBLE1BQU0sRUFBQyxJQUF4QjtBQUE2QixRQUFBLFNBQVMsRUFBQztBQUF2QyxRQURGLENBSkYsQ0FYRixDQURGO0FBc0JEOzs7RUFwQ3dDQyxnQjs7O2lDQUF0QkYsYSxlQUNBO0FBQ2pCO0FBQ0FHLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDLE1BRkQ7QUFHakJDLEVBQUFBLE1BQU0sRUFBRUYsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVQyxNQUE1QjtBQUhTLEM7aUNBREFMLGEsa0JBT0c7QUFDcEJRLEVBQUFBLElBQUksRUFBRSxNQURjO0FBRXBCTCxFQUFBQSxNQUFNLEVBQUUsTUFGWTtBQUdwQk0sRUFBQUEsbUJBQW1CLEVBQUU7QUFIRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMvYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaXBMYXllckljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiAndGlueScsXG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ3RyaXAtbGF5ZXItaWNvbidcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAwKVwiIGNsYXNzTmFtZT1cImNyMVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNTMuMDI1IDQuODUwMDVDNTAuMjUgMi4wNzUwNSA0NS43NSAyLjA3NTA1IDQyLjk3NSA0Ljg1MDA1QzQwLjIgNy42MjUwNSA0MC4yIDEyLjIgNDIuOTc1IDE0Ljk3NUw0OCAyMEw1My4wMjUgMTQuOUM1NS44IDEyLjIgNTUuOCA3LjYyNTA1IDUzLjAyNSA0Ljg1MDA1Wk00OCAxMS4zNzVDNDcuMTc1IDExLjM3NSA0Ni41IDEwLjcgNDYuNSA5Ljg3NTA1QzQ2LjUgOS4wNTAwNSA0Ny4xNzUgOC4zNzUwNSA0OCA4LjM3NTA1QzQ4LjgyNSA4LjM3NTA1IDQ5LjUgOS4wNTAwNSA0OS41IDkuODc1MDVDNDkuNSAxMC43IDQ4LjgyNSAxMS4zNzUgNDggMTEuMzc1WlwiIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2NsaXAxKVwiIGNsYXNzTmFtZT1cImNyMlwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuMDI1IDM2Ljg1QzE3LjI1IDM0LjA3NSAxMi43NSAzNC4wNzUgOS45NzUwMiAzNi44NUM3LjIwMDAyIDM5LjYyNSA3LjIwMDAyIDQ0LjIgOS45NzUwMiA0Ni45NzVMMTUgNTJMMjAuMDI1IDQ2LjlDMjIuOCA0NC4yIDIyLjggMzkuNjI1IDIwLjAyNSAzNi44NVpNMTUgNDMuMzc1QzE0LjE3NSA0My4zNzUgMTMuNSA0Mi43IDEzLjUgNDEuODc1QzEzLjUgNDEuMDUgMTQuMTc1IDQwLjM3NSAxNSA0MC4zNzVDMTUuODI1IDQwLjM3NSAxNi41IDQxLjA1IDE2LjUgNDEuODc1QzE2LjUgNDIuNyAxNS44MjUgNDMuMzc1IDE1IDQzLjM3NVpcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IzXCJcbiAgICAgICAgICBkPVwiTTQ1Ljk5NDMgMTkuODY5N0M0Ni4wNjYxIDIwLjY5NTEgNDUuNDU1MiAyMS40MjIzIDQ0LjYyOTkgMjEuNDk0MUwzNC43ODIgMjIuMzUwNEwzOC4xNTE1IDQwLjE2MDRMMTcuODc0OCA1NC43MTg1QzE3LjIwMTkgNTUuMjAxNiAxNi4yNjQ3IDU1LjA0NzggMTUuNzgxNSA1NC4zNzQ4QzE1LjI5ODQgNTMuNzAxOSAxNS40NTIyIDUyLjc2NDcgMTYuMTI1MiA1Mi4yODE1TDM0Ljg0ODMgMzguODM4OUwzMS4yMTc3IDE5LjY0OTFMNDQuMzcgMTguNTA1M0M0NS4xOTUzIDE4LjQzMzYgNDUuOTIyNSAxOS4wNDQ0IDQ1Ljk5NDMgMTkuODY5N1pcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwMFwiPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM5IDIpXCIgLz5cbiAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXAxXCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNiAzNClcIiAvPlxuICAgICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=