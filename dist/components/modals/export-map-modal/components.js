"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportMapLink = exports.StyledExportLink = exports.StyledWarning = exports.StyledExportMapSection = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _templateObject, _templateObject2, _templateObject3;

var StyledExportMapSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", "px;\n"])), function (props) {
  return props.theme.exportIntraSectionMargin;
});
exports.StyledExportMapSection = StyledExportMapSection;

var StyledWarning = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: ", ";\n"])), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectFontWeightBold;
});

exports.StyledWarning = StyledWarning;

var StyledExportLink = _styledComponents["default"].a(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  text-decoration-line: underline !important;\n"])));

exports.StyledExportLink = StyledExportLink;

var ExportMapLink = function ExportMapLink(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(StyledExportLink, (0, _extends2["default"])({
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), children);
};

exports.ExportMapLink = ExportMapLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2NvbXBvbmVudHMuanMiXSwibmFtZXMiOlsiU3R5bGVkRXhwb3J0TWFwU2VjdGlvbiIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiZXhwb3J0SW50cmFTZWN0aW9uTWFyZ2luIiwiU3R5bGVkV2FybmluZyIsInN0eWxlZCIsInNwYW4iLCJlcnJvckNvbG9yIiwic2VsZWN0Rm9udFdlaWdodEJvbGQiLCJTdHlsZWRFeHBvcnRMaW5rIiwiYSIsIkV4cG9ydE1hcExpbmsiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsc0JBQXNCLEdBQUcsa0NBQU9DLHNDQUFQLENBQUgsZ0hBQ25CLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsd0JBQWhCO0FBQUEsQ0FEYyxDQUE1Qjs7O0FBSUEsSUFBTUMsYUFBYSxHQUFHQyw2QkFBT0MsSUFBVixpSUFDZixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFVBQWhCO0FBQUEsQ0FEVSxFQUVULFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sb0JBQWhCO0FBQUEsQ0FGSSxDQUFuQjs7OztBQUtBLElBQU1DLGdCQUFnQixHQUFHSiw2QkFBT0ssQ0FBVix5SUFBdEI7Ozs7QUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBZVgsS0FBZjtBQUFBLHNCQUMzQixnQ0FBQyxnQkFBRDtBQUFrQixJQUFBLE1BQU0sRUFBQyxRQUF6QjtBQUFrQyxJQUFBLEdBQUcsRUFBQztBQUF0QyxLQUFnRUEsS0FBaEUsR0FDR1csUUFESCxDQUQyQjtBQUFBLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdHlsZWRFeHBvcnRTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFeHBvcnRNYXBTZWN0aW9uID0gc3R5bGVkKFN0eWxlZEV4cG9ydFNlY3Rpb24pYFxuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmV4cG9ydEludHJhU2VjdGlvbk1hcmdpbn1weDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXYXJuaW5nID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250V2VpZ2h0Qm9sZH07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRXhwb3J0TGluayA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgRXhwb3J0TWFwTGluayA9ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4gKFxuICA8U3R5bGVkRXhwb3J0TGluayB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRXhwb3J0TGluaz5cbik7XG4iXX0=