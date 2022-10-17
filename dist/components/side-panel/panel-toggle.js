"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelTabFactory = PanelTabFactory;
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../localization");

var _styledComponents2 = require("../common/styled-components");

var _templateObject, _templateObject2;

var propTypes = {
  panels: _propTypes["default"].arrayOf(_propTypes["default"].object),
  activePanel: _propTypes["default"].string,
  togglePanel: _propTypes["default"].func
};

var PanelHeaderBottom = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"])), function (props) {
  return props.theme.sidePanelHeaderBg;
}, function (props) {
  return props.theme.sidePanelHeaderBorder;
});

function PanelTabFactory() {
  var PanelTab = _styledComponents["default"].div.attrs({
    className: 'side-panel__tab'
  })(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    align-items: flex-end;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n    border-bottom-color: ", ";\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    margin-right: ", "px;\n    padding-bottom: ", "px;\n    width: ", ";\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n  "])), function (props) {
    return props.active ? props.theme.panelToggleBorderColor : 'transparent';
  }, function (props) {
    return props.active ? props.theme.subtextColorActive : props.theme.panelTabColor;
  }, function (props) {
    return props.theme.panelToggleMarginRight;
  }, function (props) {
    return props.theme.panelToggleBottomPadding;
  }, function (props) {
    return props.theme.panelTabWidth;
  }, function (props) {
    return props.theme.textColorHl;
  });

  return PanelTab;
}

PanelToggleFactory.deps = [PanelTabFactory];

function PanelToggleFactory(PanelTab) {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return /*#__PURE__*/_react["default"].createElement(PanelTab, {
        key: panel.id,
        "data-tip": true,
        "data-for": "".concat(panel.id, "-nav"),
        active: activePanel === panel.id,
        onClick: function onClick() {
          return togglePanel(panel.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(panel.iconComponent, {
        height: "20px"
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(panel.id, "-nav"),
        effect: "solid",
        delayShow: 500,
        place: "bottom"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: panel.label || panel.id
      }))));
    }));
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
}

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJzaWRlUGFuZWxIZWFkZXJCb3JkZXIiLCJQYW5lbFRhYkZhY3RvcnkiLCJQYW5lbFRhYiIsImFjdGl2ZSIsInBhbmVsVG9nZ2xlQm9yZGVyQ29sb3IiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJwYW5lbFRhYkNvbG9yIiwicGFuZWxUb2dnbGVNYXJnaW5SaWdodCIsInBhbmVsVG9nZ2xlQm90dG9tUGFkZGluZyIsInBhbmVsVGFiV2lkdGgiLCJ0ZXh0Q29sb3JIbCIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsImRlcHMiLCJQYW5lbFRvZ2dsZSIsIm1hcCIsInBhbmVsIiwiaWQiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUTtBQUVoQkMsRUFBQUEsV0FBVyxFQUFFSCxzQkFBVUksTUFGUDtBQUdoQkMsRUFBQUEsV0FBVyxFQUFFTCxzQkFBVU07QUFIUCxDQUFsQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsaU5BR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLEVBSU0sVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxxQkFBaEI7QUFBQSxDQUpYLENBQXZCOztBQVVPLFNBQVNDLGVBQVQsR0FBMkI7QUFDaEMsTUFBTUMsUUFBUSxHQUFHVCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ2hDQyxJQUFBQSxTQUFTLEVBQUU7QUFEcUIsR0FBakIsQ0FBSCwwYUFNVyxVQUFBQyxLQUFLO0FBQUEsV0FDMUJBLEtBQUssQ0FBQ00sTUFBTixHQUFlTixLQUFLLENBQUNDLEtBQU4sQ0FBWU0sc0JBQTNCLEdBQW9ELGFBRDFCO0FBQUEsR0FOaEIsRUFRSCxVQUFBUCxLQUFLO0FBQUEsV0FBS0EsS0FBSyxDQUFDTSxNQUFOLEdBQWVOLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxrQkFBM0IsR0FBZ0RSLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxhQUFqRTtBQUFBLEdBUkYsRUFXSSxVQUFBVCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLHNCQUFoQjtBQUFBLEdBWFQsRUFZTSxVQUFBVixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlVLHdCQUFoQjtBQUFBLEdBWlgsRUFhSCxVQUFBWCxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlXLGFBQWhCO0FBQUEsR0FiRixFQWlCRCxVQUFBWixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlZLFdBQWhCO0FBQUEsR0FqQkosQ0FBZDs7QUFxQkEsU0FBT1IsUUFBUDtBQUNEOztBQUVEUyxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ1gsZUFBRCxDQUExQjs7QUFDQSxTQUFTVSxrQkFBVCxDQUE0QlQsUUFBNUIsRUFBc0M7QUFDcEMsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFFN0IsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUksV0FBVixRQUFVQSxXQUFWO0FBQUEsUUFBdUJFLFdBQXZCLFFBQXVCQSxXQUF2QjtBQUFBLHdCQUNsQixnQ0FBQyxpQkFBRCxRQUNHTixNQUFNLENBQUM4QixHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDBCQUNmLGdDQUFDLFFBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURiO0FBRUUsd0JBRkY7QUFHRSw4QkFBYUQsS0FBSyxDQUFDQyxFQUFuQixTQUhGO0FBSUUsUUFBQSxNQUFNLEVBQUU1QixXQUFXLEtBQUsyQixLQUFLLENBQUNDLEVBSmhDO0FBS0UsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTTFCLFdBQVcsQ0FBQ3lCLEtBQUssQ0FBQ0MsRUFBUCxDQUFqQjtBQUFBO0FBTFgsc0JBT0UsZ0NBQUMsS0FBRCxDQUFPLGFBQVA7QUFBcUIsUUFBQSxNQUFNLEVBQUM7QUFBNUIsUUFQRixlQVFFLGdDQUFDLDBCQUFEO0FBQVMsUUFBQSxFQUFFLFlBQUtELEtBQUssQ0FBQ0MsRUFBWCxTQUFYO0FBQWdDLFFBQUEsTUFBTSxFQUFDLE9BQXZDO0FBQStDLFFBQUEsU0FBUyxFQUFFLEdBQTFEO0FBQStELFFBQUEsS0FBSyxFQUFDO0FBQXJFLHNCQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLFFBQUEsRUFBRSxFQUFFRCxLQUFLLENBQUNFLEtBQU4sSUFBZUYsS0FBSyxDQUFDQztBQUEzQyxRQURGLENBREYsQ0FSRixDQURlO0FBQUEsS0FBaEIsQ0FESCxDQURrQjtBQUFBLEdBQXBCOztBQXFCQUgsRUFBQUEsV0FBVyxDQUFDOUIsU0FBWixHQUF3QkEsU0FBeEI7QUFDQSxTQUFPOEIsV0FBUDtBQUNEOztlQUVjRixrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBwYW5lbHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBhY3RpdmVQYW5lbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlUGFuZWw6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5jb25zdCBQYW5lbEhlYWRlckJvdHRvbSA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcl9fYm90dG9tJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsSGVhZGVyQmd9O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCb3JkZXJ9O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFuZWxUYWJGYWN0b3J5KCkge1xuICBjb25zdCBQYW5lbFRhYiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICAgIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3RhYidcbiAgfSlgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5wYW5lbFRvZ2dsZUJvcmRlckNvbG9yIDogJ3RyYW5zcGFyZW50J307XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZSA6IHByb3BzLnRoZW1lLnBhbmVsVGFiQ29sb3IpfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbFRvZ2dsZU1hcmdpblJpZ2h0fXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsVG9nZ2xlQm90dG9tUGFkZGluZ31weDtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbFRhYldpZHRofTtcblxuICAgIDpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICBgO1xuXG4gIHJldHVybiBQYW5lbFRhYjtcbn1cblxuUGFuZWxUb2dnbGVGYWN0b3J5LmRlcHMgPSBbUGFuZWxUYWJGYWN0b3J5XTtcbmZ1bmN0aW9uIFBhbmVsVG9nZ2xlRmFjdG9yeShQYW5lbFRhYikge1xuICBjb25zdCBQYW5lbFRvZ2dsZSA9ICh7cGFuZWxzLCBhY3RpdmVQYW5lbCwgdG9nZ2xlUGFuZWx9KSA9PiAoXG4gICAgPFBhbmVsSGVhZGVyQm90dG9tPlxuICAgICAge3BhbmVscy5tYXAocGFuZWwgPT4gKFxuICAgICAgICA8UGFuZWxUYWJcbiAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3BhbmVsLmlkfS1uYXZgfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUGFuZWwgPT09IHBhbmVsLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhbmVsKHBhbmVsLmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYW5lbC5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHtwYW5lbC5pZH0tbmF2YH0gZWZmZWN0PVwic29saWRcIiBkZWxheVNob3c9ezUwMH0gcGxhY2U9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17cGFuZWwubGFiZWwgfHwgcGFuZWwuaWR9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1BhbmVsVGFiPlxuICAgICAgKSl9XG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cbiAgKTtcblxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBQYW5lbFRvZ2dsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxUb2dnbGVGYWN0b3J5O1xuIl19