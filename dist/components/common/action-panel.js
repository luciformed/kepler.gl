"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActionPanelItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("./icons");

var _switch = _interopRequireDefault(require("./switch"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 8px;\n  min-height: ", "px;\n  text-transform: capitalize;\n  background-color: ", ";\n  width: ", "px;\n  position: relative;\n  ", " :hover {\n    cursor: pointer;\n    color: ", ";\n    .nested-group {\n      display: block;\n    }\n  }\n\n  .label {\n    margin-left: 8px;\n  }\n\n  .label-icon {\n    margin-left: auto;\n  }\n\n  .nested-group {\n    width: 110px;\n    display: none;\n    color: ", ";\n    position: absolute;\n    left: 110px;\n    top: 0px;\n    padding-left: 4px;\n  }\n"])), function (props) {
  return props.theme.actionPanelHeight;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.actionPanelWidth;
}, function (props) {
  return props.color ? "border-left: 3px solid rgb(".concat(props.color, ");") : '';
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColor;
});

var StyledCheckedbox = (0, _styledComponents["default"])(_switch["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  label {\n    margin-bottom: 0;\n    color: ", ";\n    padding-left: 20px;\n    line-height: 12px;\n\n    &:before {\n      width: 12px;\n      height: 12px;\n      background-color: ", ";\n    }\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});

var renderChildren = function renderChildren(child, index) {
  return /*#__PURE__*/_react["default"].cloneElement(child, {
    onClick: function onClick() {
      if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
        if (child.props.onClick) {
          child.props.onClick(index);
        }
      }
    },
    className: (0, _classnames["default"])('action-panel-item', child.props.className)
  });
};
/** @type {typeof import('./action-panel').ActionPanelItem} */


var ActionPanelItem = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className,
      Icon = _ref.Icon,
      label = _ref.label,
      onClick = _ref.onClick,
      isSelection = _ref.isSelection,
      isActive = _ref.isActive,
      style = _ref.style;
  var onClickCallback = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onClick === null || onClick === void 0 ? void 0 : onClick();
  }, [onClick]);
  return /*#__PURE__*/_react["default"].createElement(StyledItem, {
    className: className,
    onClick: onClickCallback,
    color: color,
    style: style
  }, Icon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    height: "16px"
  })) : null, isSelection ? /*#__PURE__*/_react["default"].createElement(StyledCheckedbox, {
    type: "checkbox",
    checked: Boolean(isActive),
    id: "switch-".concat(label),
    secondary: true,
    label: label
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "label"
  }, label), children ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-icon"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
    height: "16px"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nested-group"
  }, _react["default"].Children.map(children, renderChildren))) : null);
});

exports.ActionPanelItem = ActionPanelItem;
ActionPanelItem.displayName = 'ActionPanelItem';

var StyledActionPanel = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  color: ", ";\n\n  .action-panel-item {\n    ", " &:last-of-type {\n      border-bottom: 0;\n    }\n  }\n"])), function (props) {
  return props.direction;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.direction === 'column' ? "border-bottom: 1px solid ".concat(props.theme.panelHeaderIcon) : "border-right: 1px solid ".concat(props.theme.panelHeaderIcon);
}); // React compound element https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992

/** @type {typeof import('./action-panel').ActionPanel} */


var ActionPanel = function ActionPanel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction;
  return /*#__PURE__*/_react["default"].createElement(StyledActionPanel, {
    className: className,
    direction: direction
  }, _react["default"].Children.map(children, renderChildren));
};

ActionPanel.displayName = 'ActionPanel';
var _default = ActionPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3Rpb25QYW5lbEhlaWdodCIsImRyb3Bkb3duTGlzdEJnZCIsImFjdGlvblBhbmVsV2lkdGgiLCJjb2xvciIsInRleHRDb2xvckhsIiwidGV4dENvbG9yIiwiU3R5bGVkQ2hlY2tlZGJveCIsIkNoZWNrYm94IiwicmVuZGVyQ2hpbGRyZW4iLCJjaGlsZCIsImluZGV4IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwiaXNWYWxpZEVsZW1lbnQiLCJjbGFzc05hbWUiLCJBY3Rpb25QYW5lbEl0ZW0iLCJtZW1vIiwiY2hpbGRyZW4iLCJJY29uIiwibGFiZWwiLCJpc1NlbGVjdGlvbiIsImlzQWN0aXZlIiwic3R5bGUiLCJvbkNsaWNrQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiQm9vbGVhbiIsIkNoaWxkcmVuIiwibWFwIiwiZGlzcGxheU5hbWUiLCJTdHlsZWRBY3Rpb25QYW5lbCIsImRpcmVjdGlvbiIsImRyb3Bkb3duTGlzdFNoYWRvdyIsInRyYW5zaXRpb25TbG93IiwicGFuZWxIZWFkZXJJY29uIiwiQWN0aW9uUGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyw2QkFBT0MsR0FBVixnc0JBT0EsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQVBMLEVBU00sVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxlQUFoQjtBQUFBLENBVFgsRUFVTCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxL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SCxTQUFaLFNBQVlBLFNBQVo7QUFBQSw4QkFBdUJrQixTQUF2QjtBQUFBLE1BQXVCQSxTQUF2QixnQ0FBbUMsUUFBbkM7QUFBQSxzQkFDbEIsZ0NBQUMsaUJBQUQ7QUFBbUIsSUFBQSxTQUFTLEVBQUVsQixTQUE5QjtBQUF5QyxJQUFBLFNBQVMsRUFBRWtCO0FBQXBELEtBQ0d0QixrQkFBTWtCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlosUUFBbkIsRUFBNkJWLGNBQTdCLENBREgsQ0FEa0I7QUFBQSxDQUFwQjs7QUFNQTZCLFdBQVcsQ0FBQ04sV0FBWixHQUEwQixhQUExQjtlQUVlTSxXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Fycm93UmlnaHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuXG5jb25zdCBTdHlsZWRJdGVtID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgcGFkZGluZzogOHB4O1xuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGlvblBhbmVsSGVpZ2h0fXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3Rpb25QYW5lbFdpZHRofXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICR7cHJvcHMgPT4gKHByb3BzLmNvbG9yID8gYGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiKCR7cHJvcHMuY29sb3J9KTtgIDogJycpfSA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgLm5lc3RlZC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAubGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICAubGFiZWwtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubmVzdGVkLWdyb3VwIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tlZGJveCA9IHN0eWxlZChDaGVja2JveClgXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGQsIGluZGV4KSA9PlxuICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcygnYWN0aW9uLXBhbmVsLWl0ZW0nLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUpXG4gIH0pO1xuXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWxJdGVtfSAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvblBhbmVsSXRlbSA9IFJlYWN0Lm1lbW8oXG4gICh7Y2hpbGRyZW4sIGNvbG9yLCBjbGFzc05hbWUsIEljb24sIGxhYmVsLCBvbkNsaWNrLCBpc1NlbGVjdGlvbiwgaXNBY3RpdmUsIHN0eWxlfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2tDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25DbGljaz8uKCk7XG4gICAgICB9LFxuICAgICAgW29uQ2xpY2tdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkSXRlbSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja0NhbGxiYWNrfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIHtJY29uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPEljb24gaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7aXNTZWxlY3Rpb24gPyAoXG4gICAgICAgICAgPFN0eWxlZENoZWNrZWRib3hcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtCb29sZWFuKGlzQWN0aXZlKX1cbiAgICAgICAgICAgIGlkPXtgc3dpdGNoLSR7bGFiZWx9YH1cbiAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW4gPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtaWNvblwiPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtZ3JvdXBcIj57UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCByZW5kZXJDaGlsZHJlbil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRJdGVtPlxuICAgICk7XG4gIH1cbik7XG5cbkFjdGlvblBhbmVsSXRlbS5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbEl0ZW0nO1xuXG5jb25zdCBTdHlsZWRBY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IHByb3BzLmRpcmVjdGlvbn07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9uU2xvd307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5cbiAgLmFjdGlvbi1wYW5lbC1pdGVtIHtcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5kaXJlY3Rpb24gPT09ICdjb2x1bW4nXG4gICAgICAgID8gYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn1gXG4gICAgICAgIDogYGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufWB9ICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBSZWFjdCBjb21wb3VuZCBlbGVtZW50IGh0dHBzOi8vbWVkaXVtLmNvbS9ARGFuZV9zL3JlYWN0LWpzLWNvbXBvdW5kLWNvbXBvbmVudHMtYTZlNTRiNWM5OTkyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWx9ICovXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlyZWN0aW9uID0gJ2NvbHVtbid9KSA9PiAoXG4gIDxTdHlsZWRBY3Rpb25QYW5lbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKX1cbiAgPC9TdHlsZWRBY3Rpb25QYW5lbD5cbik7XG5cbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uUGFuZWw7XG4iXX0=