"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationPanelFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _notificationItem = _interopRequireDefault(require("./notification-panel/notification-item"));

var _defaultSettings = require("../constants/default-settings");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotificationPanelContent = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 4px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 10000;\n  box-sizing: border-box;\n"])));

NotificationPanelFactory.deps = [_notificationItem["default"]];

function NotificationPanelFactory(NotificationItem) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(NotificationPanel, _Component);

    var _super = _createSuper(NotificationPanel);

    function NotificationPanel() {
      (0, _classCallCheck2["default"])(this, NotificationPanel);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(NotificationPanel, [{
      key: "render",
      value: function render() {
        var _this = this;

        var globalNotifications = this.props.notifications.filter(function (n) {
          return n.topic === _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global;
        });
        return /*#__PURE__*/_react["default"].createElement(NotificationPanelContent, {
          className: "notification-panel",
          style: {
            display: globalNotifications.length ? 'block' : 'none'
          }
        }, globalNotifications.map(function (n) {
          return /*#__PURE__*/_react["default"].createElement(NotificationItem, {
            key: n.id,
            notification: n,
            removeNotification: _this.props.removeNotification
          });
        }));
      }
    }]);
    return NotificationPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    removeNotification: _propTypes["default"].func.isRequired,
    notifications: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25QYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkiLCJOb3RpZmljYXRpb25JdGVtIiwiZ2xvYmFsTm90aWZpY2F0aW9ucyIsInByb3BzIiwibm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm4iLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsImRpc3BsYXkiLCJsZW5ndGgiLCJtYXAiLCJpZCIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLDZCQUFPQyxHQUFWLHlWQUE5Qjs7QUFlQUMsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLDRCQUFELENBQWhDOztBQUVlLFNBQVNGLHdCQUFULENBQWtDRyxnQkFBbEMsRUFBb0Q7QUFBQTs7QUFDakU7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFNRSxrQkFBUztBQUFBOztBQUNQLFlBQU1DLG1CQUFtQixHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkMsTUFBekIsQ0FDMUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLEtBQUYsS0FBWUMsNkNBQTRCQyxNQUE1QztBQUFBLFNBRHlCLENBQTVCO0FBR0EsNEJBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQUNDLFlBQUFBLE9BQU8sRUFBRVIsbUJBQW1CLENBQUNTLE1BQXBCLEdBQTZCLE9BQTdCLEdBQXVDO0FBQWpEO0FBRlQsV0FJR1QsbUJBQW1CLENBQUNVLEdBQXBCLENBQXdCLFVBQUFOLENBQUM7QUFBQSw4QkFDeEIsZ0NBQUMsZ0JBQUQ7QUFDRSxZQUFBLEdBQUcsRUFBRUEsQ0FBQyxDQUFDTyxFQURUO0FBRUUsWUFBQSxZQUFZLEVBQUVQLENBRmhCO0FBR0UsWUFBQSxrQkFBa0IsRUFBRSxLQUFJLENBQUNILEtBQUwsQ0FBV1c7QUFIakMsWUFEd0I7QUFBQSxTQUF6QixDQUpILENBREY7QUFjRDtBQXhCSDtBQUFBO0FBQUEsSUFBdUNDLGdCQUF2Qyx5REFDcUI7QUFDakJELElBQUFBLGtCQUFrQixFQUFFRSxzQkFBVUMsSUFBVixDQUFlQyxVQURsQjtBQUVqQmQsSUFBQUEsYUFBYSxFQUFFWSxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLE1BQTVCLEVBQW9DRjtBQUZsQyxHQURyQjtBQTBCRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwvbm90aWZpY2F0aW9uLWl0ZW0nO1xuaW1wb3J0IHtERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTm90aWZpY2F0aW9uUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIHotaW5kZXg6IDEwMDAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5LmRlcHMgPSBbTm90aWZpY2F0aW9uSXRlbUZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkoTm90aWZpY2F0aW9uSXRlbSkge1xuICByZXR1cm4gY2xhc3MgTm90aWZpY2F0aW9uUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICByZW1vdmVOb3RpZmljYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBub3RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGdsb2JhbE5vdGlmaWNhdGlvbnMgPSB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKFxuICAgICAgICBuID0+IG4udG9waWMgPT09IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUy5nbG9iYWxcbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Tm90aWZpY2F0aW9uUGFuZWxDb250ZW50XG4gICAgICAgICAgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLXBhbmVsXCJcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IGdsb2JhbE5vdGlmaWNhdGlvbnMubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ319XG4gICAgICAgID5cbiAgICAgICAgICB7Z2xvYmFsTm90aWZpY2F0aW9ucy5tYXAobiA9PiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxuICAgICAgICAgICAgICBrZXk9e24uaWR9XG4gICAgICAgICAgICAgIG5vdGlmaWNhdGlvbj17bn1cbiAgICAgICAgICAgICAgcmVtb3ZlTm90aWZpY2F0aW9uPXt0aGlzLnByb3BzLnJlbW92ZU5vdGlmaWNhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTm90aWZpY2F0aW9uUGFuZWxDb250ZW50PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=