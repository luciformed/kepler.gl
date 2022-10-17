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

var GridLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GridLayerIcon, _Component);

  var _super = _createSuper(GridLayerIcon);

  function GridLayerIcon() {
    (0, _classCallCheck2["default"])(this, GridLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GridLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("rect", {
        x: "11.2",
        y: "11.2",
        className: "cr1",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "25.4",
        y: "11.2",
        className: "cr2",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "39.6",
        y: "11.2",
        width: "13.1",
        height: "13.1",
        className: "cr3"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "11.2",
        y: "25.4",
        className: "cr4",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "25.4",
        y: "25.4",
        className: "cr5",
        width: "13.1",
        height: "13.1"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "39.6",
        y: "25.4",
        className: "cr6",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.8
        }
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "11.2",
        y: "39.6",
        width: "13.1",
        className: "cr1",
        height: "13.1"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "25.4",
        y: "39.6",
        className: "cr2",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.4
        }
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        x: "39.6",
        y: "39.6",
        className: "cr3",
        width: "13.1",
        height: "13.1",
        style: {
          opacity: 0.4
        }
      }));
    }
  }]);
  return GridLayerIcon;
}(_react.Component);

exports["default"] = GridLayerIcon;
(0, _defineProperty2["default"])(GridLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(GridLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'grid-layer-icon',
  totalColor: 6
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ3JpZC1sYXllci9ncmlkLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiR3JpZExheWVySWNvbiIsInByb3BzIiwib3BhY2l0eSIsIkNvbXBvbmVudCIsImhlaWdodCIsIlByb3BUeXBlcyIsInN0cmluZyIsImNvbG9ycyIsImFycmF5T2YiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwidG90YWxDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7OztXQWFuQixrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUMsTUFBUjtBQUFlLFFBQUEsQ0FBQyxFQUFDLE1BQWpCO0FBQXdCLFFBQUEsU0FBUyxFQUFDLEtBQWxDO0FBQXdDLFFBQUEsS0FBSyxFQUFDLE1BQTlDO0FBQXFELFFBQUEsTUFBTSxFQUFDLE1BQTVEO0FBQW1FLFFBQUEsS0FBSyxFQUFFO0FBQUNDLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBQTFFLFFBREYsZUFFRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE1BQVI7QUFBZSxRQUFBLENBQUMsRUFBQyxNQUFqQjtBQUF3QixRQUFBLFNBQVMsRUFBQyxLQUFsQztBQUF3QyxRQUFBLEtBQUssRUFBQyxNQUE5QztBQUFxRCxRQUFBLE1BQU0sRUFBQyxNQUE1RDtBQUFtRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUExRSxRQUZGLGVBR0U7QUFBTSxRQUFBLENBQUMsRUFBQyxNQUFSO0FBQWUsUUFBQSxDQUFDLEVBQUMsTUFBakI7QUFBd0IsUUFBQSxLQUFLLEVBQUMsTUFBOUI7QUFBcUMsUUFBQSxNQUFNLEVBQUMsTUFBNUM7QUFBbUQsUUFBQSxTQUFTLEVBQUM7QUFBN0QsUUFIRixlQUlFO0FBQU0sUUFBQSxDQUFDLEVBQUMsTUFBUjtBQUFlLFFBQUEsQ0FBQyxFQUFDLE1BQWpCO0FBQXdCLFFBQUEsU0FBUyxFQUFDLEtBQWxDO0FBQXdDLFFBQUEsS0FBSyxFQUFDLE1BQTlDO0FBQXFELFFBQUEsTUFBTSxFQUFDLE1BQTVEO0FBQW1FLFFBQUEsS0FBSyxFQUFFO0FBQUNBLFVBQUFBLE9BQU8sRUFBRTtBQUFWO0FBQTFFLFFBSkYsZUFLRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE1BQVI7QUFBZSxRQUFBLENBQUMsRUFBQyxNQUFqQjtBQUF3QixRQUFBLFNBQVMsRUFBQyxLQUFsQztBQUF3QyxRQUFBLEtBQUssRUFBQyxNQUE5QztBQUFxRCxRQUFBLE1BQU0sRUFBQztBQUE1RCxRQUxGLGVBTUU7QUFBTSxRQUFBLENBQUMsRUFBQyxNQUFSO0FBQWUsUUFBQSxDQUFDLEVBQUMsTUFBakI7QUFBd0IsUUFBQSxTQUFTLEVBQUMsS0FBbEM7QUFBd0MsUUFBQSxLQUFLLEVBQUMsTUFBOUM7QUFBcUQsUUFBQSxNQUFNLEVBQUMsTUFBNUQ7QUFBbUUsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFBMUUsUUFORixlQU9FO0FBQU0sUUFBQSxDQUFDLEVBQUMsTUFBUjtBQUFlLFFBQUEsQ0FBQyxFQUFDLE1BQWpCO0FBQXdCLFFBQUEsS0FBSyxFQUFDLE1BQTlCO0FBQXFDLFFBQUEsU0FBUyxFQUFDLEtBQS9DO0FBQXFELFFBQUEsTUFBTSxFQUFDO0FBQTVELFFBUEYsZUFRRTtBQUFNLFFBQUEsQ0FBQyxFQUFDLE1BQVI7QUFBZSxRQUFBLENBQUMsRUFBQyxNQUFqQjtBQUF3QixRQUFBLFNBQVMsRUFBQyxLQUFsQztBQUF3QyxRQUFBLEtBQUssRUFBQyxNQUE5QztBQUFxRCxRQUFBLE1BQU0sRUFBQyxNQUE1RDtBQUFtRSxRQUFBLEtBQUssRUFBRTtBQUFDQSxVQUFBQSxPQUFPLEVBQUU7QUFBVjtBQUExRSxRQVJGLGVBU0U7QUFBTSxRQUFBLENBQUMsRUFBQyxNQUFSO0FBQWUsUUFBQSxDQUFDLEVBQUMsTUFBakI7QUFBd0IsUUFBQSxTQUFTLEVBQUMsS0FBbEM7QUFBd0MsUUFBQSxLQUFLLEVBQUMsTUFBOUM7QUFBcUQsUUFBQSxNQUFNLEVBQUMsTUFBNUQ7QUFBbUUsUUFBQSxLQUFLLEVBQUU7QUFBQ0EsVUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFBMUUsUUFURixDQURGO0FBYUQ7OztFQTNCd0NDLGdCOzs7aUNBQXRCSCxhLGVBQ0E7QUFDakI7QUFDQUksRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEQU4sYSxrQkFPRztBQUNwQkksRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJLLEVBQUFBLG1CQUFtQixFQUFFLGlCQUZEO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMvYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRMYXllckljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZ3JpZC1sYXllci1pY29uJyxcbiAgICB0b3RhbENvbG9yOiA2XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxyZWN0IHg9XCIxMS4yXCIgeT1cIjExLjJcIiBjbGFzc05hbWU9XCJjcjFcIiB3aWR0aD1cIjEzLjFcIiBoZWlnaHQ9XCIxMy4xXCIgc3R5bGU9e3tvcGFjaXR5OiAwLjh9fSAvPlxuICAgICAgICA8cmVjdCB4PVwiMjUuNFwiIHk9XCIxMS4yXCIgY2xhc3NOYW1lPVwiY3IyXCIgd2lkdGg9XCIxMy4xXCIgaGVpZ2h0PVwiMTMuMVwiIHN0eWxlPXt7b3BhY2l0eTogMC44fX0gLz5cbiAgICAgICAgPHJlY3QgeD1cIjM5LjZcIiB5PVwiMTEuMlwiIHdpZHRoPVwiMTMuMVwiIGhlaWdodD1cIjEzLjFcIiBjbGFzc05hbWU9XCJjcjNcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMTEuMlwiIHk9XCIyNS40XCIgY2xhc3NOYW1lPVwiY3I0XCIgd2lkdGg9XCIxMy4xXCIgaGVpZ2h0PVwiMTMuMVwiIHN0eWxlPXt7b3BhY2l0eTogMC40fX0gLz5cbiAgICAgICAgPHJlY3QgeD1cIjI1LjRcIiB5PVwiMjUuNFwiIGNsYXNzTmFtZT1cImNyNVwiIHdpZHRoPVwiMTMuMVwiIGhlaWdodD1cIjEzLjFcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMzkuNlwiIHk9XCIyNS40XCIgY2xhc3NOYW1lPVwiY3I2XCIgd2lkdGg9XCIxMy4xXCIgaGVpZ2h0PVwiMTMuMVwiIHN0eWxlPXt7b3BhY2l0eTogMC44fX0gLz5cbiAgICAgICAgPHJlY3QgeD1cIjExLjJcIiB5PVwiMzkuNlwiIHdpZHRoPVwiMTMuMVwiIGNsYXNzTmFtZT1cImNyMVwiIGhlaWdodD1cIjEzLjFcIiAvPlxuICAgICAgICA8cmVjdCB4PVwiMjUuNFwiIHk9XCIzOS42XCIgY2xhc3NOYW1lPVwiY3IyXCIgd2lkdGg9XCIxMy4xXCIgaGVpZ2h0PVwiMTMuMVwiIHN0eWxlPXt7b3BhY2l0eTogMC40fX0gLz5cbiAgICAgICAgPHJlY3QgeD1cIjM5LjZcIiB5PVwiMzkuNlwiIGNsYXNzTmFtZT1cImNyM1wiIHdpZHRoPVwiMTMuMVwiIGhlaWdodD1cIjEzLjFcIiBzdHlsZT17e29wYWNpdHk6IDAuNH19IC8+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuIl19