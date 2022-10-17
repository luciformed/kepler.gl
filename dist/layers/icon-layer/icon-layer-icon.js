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

var IconLayerIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(IconLayerIcon, _Component);

  var _super = _createSuper(IconLayerIcon);

  function IconLayerIcon() {
    (0, _classCallCheck2["default"])(this, IconLayerIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconLayerIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr1",
        d: "M42.27,33.59l-4.34,4.34-4.34-4.34a13.25,13.25,0,0,1-8.9-12.52h0A13.24,13.24,0,0,1,37.93,7.83h0A13.24,13.24,0,0,1,51.17,21.07h0A13.25,13.25,0,0,1,42.27,33.59ZM37.93,28.3a7.22,7.22,0,1,0-7.22-7.22A7.22,7.22,0,0,0,37.93,28.3Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr2",
        d: "M18.68,48.79l-2.44,2.44L13.8,48.79a7.44,7.44,0,0,1-5-7h0a7.44,7.44,0,0,1,7.44-7.44h0a7.44,7.44,0,0,1,7.44,7.44h0A7.44,7.44,0,0,1,18.68,48.79Zm-2.44-3a4.06,4.06,0,1,0-4.06-4.06A4.06,4.06,0,0,0,16.24,45.81Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "cr3",
        d: "M48.85,55.52l-2.2,2.2-2.2-2.2a6.73,6.73,0,0,1-4.52-6.36h0a6.72,6.72,0,0,1,6.72-6.72h0a6.72,6.72,0,0,1,6.72,6.72h0A6.73,6.73,0,0,1,48.85,55.52Zm-2.2-2.69A3.67,3.67,0,1,0,43,49.17,3.67,3.67,0,0,0,46.65,52.83Z"
      }));
    }
  }]);
  return IconLayerIcon;
}(_react.Component);

exports["default"] = IconLayerIcon;
(0, _defineProperty2["default"])(IconLayerIcon, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string,
  colors: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
(0, _defineProperty2["default"])(IconLayerIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'icon-layer-icon',
  totalColor: 3
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWxheWVyLWljb24uanMiXSwibmFtZXMiOlsiSWNvbkxheWVySWNvbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiY29sb3JzIiwiYXJyYXlPZiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ0b3RhbENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7O1dBYW5CLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxDQUFDLEVBQUM7QUFGSixRQURGLGVBS0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxDQUFDLEVBQUM7QUFGSixRQUxGLGVBU0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxLQURaO0FBRUUsUUFBQSxDQUFDLEVBQUM7QUFGSixRQVRGLENBREY7QUFnQkQ7OztFQTlCd0NDLGdCOzs7aUNBQXRCRixhLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUMsTUFGRDtBQUdqQkMsRUFBQUEsTUFBTSxFQUFFRixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVDLE1BQTVCO0FBSFMsQztpQ0FEQUwsYSxrQkFPRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJLLEVBQUFBLG1CQUFtQixFQUFFLGlCQUZEO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMvYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25MYXllckljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnaWNvbi1sYXllci1pY29uJyxcbiAgICB0b3RhbENvbG9yOiAzXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3IxXCJcbiAgICAgICAgICBkPVwiTTQyLjI3LDMzLjU5bC00LjM0LDQuMzQtNC4zNC00LjM0YTEzLjI1LDEzLjI1LDAsMCwxLTguOS0xMi41MmgwQTEzLjI0LDEzLjI0LDAsMCwxLDM3LjkzLDcuODNoMEExMy4yNCwxMy4yNCwwLDAsMSw1MS4xNywyMS4wN2gwQTEzLjI1LDEzLjI1LDAsMCwxLDQyLjI3LDMzLjU5Wk0zNy45MywyOC4zYTcuMjIsNy4yMiwwLDEsMC03LjIyLTcuMjJBNy4yMiw3LjIyLDAsMCwwLDM3LjkzLDI4LjNaXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzc05hbWU9XCJjcjJcIlxuICAgICAgICAgIGQ9XCJNMTguNjgsNDguNzlsLTIuNDQsMi40NEwxMy44LDQ4Ljc5YTcuNDQsNy40NCwwLDAsMS01LTdoMGE3LjQ0LDcuNDQsMCwwLDEsNy40NC03LjQ0aDBhNy40NCw3LjQ0LDAsMCwxLDcuNDQsNy40NGgwQTcuNDQsNy40NCwwLDAsMSwxOC42OCw0OC43OVptLTIuNDQtM2E0LjA2LDQuMDYsMCwxLDAtNC4wNi00LjA2QTQuMDYsNC4wNiwwLDAsMCwxNi4yNCw0NS44MVpcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzTmFtZT1cImNyM1wiXG4gICAgICAgICAgZD1cIk00OC44NSw1NS41MmwtMi4yLDIuMi0yLjItMi4yYTYuNzMsNi43MywwLDAsMS00LjUyLTYuMzZoMGE2LjcyLDYuNzIsMCwwLDEsNi43Mi02LjcyaDBhNi43Miw2LjcyLDAsMCwxLDYuNzIsNi43MmgwQTYuNzMsNi43MywwLDAsMSw0OC44NSw1NS41MlptLTIuMi0yLjY5QTMuNjcsMy42NywwLDEsMCw0Myw0OS4xNywzLjY3LDMuNjcsMCwwLDAsNDYuNjUsNTIuODNaXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=