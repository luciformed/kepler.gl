"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../components/common/styled-components");

var _templateObject;

var StyledTitle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 20px;\n  letter-spacing: 1.25px;\n  margin: 18px 0 14px 0;\n  color: ", ";\n"])), function (props) {
  return props.theme.titleColorLT;
});

var ExampleTable = function ExampleTable() {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Table, {
    className: "scenegraph-example-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "point_lat"), /*#__PURE__*/_react["default"].createElement("th", null, "point_lng"), /*#__PURE__*/_react["default"].createElement("th", null, "alt"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.769897"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.41168"), /*#__PURE__*/_react["default"].createElement("td", null, "0")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.806928"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.40218"), /*#__PURE__*/_react["default"].createElement("td", null, "0")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.778564"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.39096"), /*#__PURE__*/_react["default"].createElement("td", null, "1000")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.745995"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.30220"), /*#__PURE__*/_react["default"].createElement("td", null, "2000")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.329841"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.103847"), /*#__PURE__*/_react["default"].createElement("td", null, "3000"))));
};

var ScenegraphInfoModalFactory = function ScenegraphInfoModalFactory() {
  var ScenegraphInfoModal = function ScenegraphInfoModal() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "scenegraph-info-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "scenegraph-info-modal__description"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "In your csv you can specify points with optional altitude. The models will show at each point you specify. You can use a sample model or upload one in", ' '), /*#__PURE__*/_react["default"].createElement("code", null, "glTF (GLB or Embedded)"), /*#__PURE__*/_react["default"].createElement("span", null, " format.")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "scenegraph-info-modal__example"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Example:"), /*#__PURE__*/_react["default"].createElement(ExampleTable, null)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "scenegraph-info-modal__icons"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Sample Models"), /*#__PURE__*/_react["default"].createElement("div", null, "Duck"), /*#__PURE__*/_react["default"].createElement("div", null, "Use your own model")));
  };

  return ScenegraphInfoModal;
};

var _default = ScenegraphInfoModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc2NlbmVncmFwaC1sYXllci9zY2VuZWdyYXBoLWluZm8tbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkVGl0bGUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidGl0bGVDb2xvckxUIiwiRXhhbXBsZVRhYmxlIiwiU2NlbmVncmFwaEluZm9Nb2RhbEZhY3RvcnkiLCJTY2VuZWdyYXBoSW5mb01vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MsNkJBQU9DLEdBQVYsa0xBSU4sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBSkMsQ0FBakI7O0FBT0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxzQkFDbkIsZ0NBQUMsd0JBQUQ7QUFBTyxJQUFBLFNBQVMsRUFBQztBQUFqQixrQkFDRSw0REFDRSx5REFDRSx3REFERixlQUVFLHdEQUZGLGVBR0Usa0RBSEYsQ0FERixDQURGLGVBUUUsNERBQ0UseURBQ0Usd0RBREYsZUFFRSx5REFGRixlQUdFLGdEQUhGLENBREYsZUFNRSx5REFDRSx3REFERixlQUVFLHlEQUZGLGVBR0UsZ0RBSEYsQ0FORixlQVdFLHlEQUNFLHdEQURGLGVBRUUseURBRkYsZUFHRSxtREFIRixDQVhGLGVBZ0JFLHlEQUNFLHdEQURGLGVBRUUseURBRkYsZUFHRSxtREFIRixDQWhCRixlQXFCRSx5REFDRSx3REFERixlQUVFLDBEQUZGLGVBR0UsbURBSEYsQ0FyQkYsQ0FSRixDQURtQjtBQUFBLENBQXJCOztBQXVDQSxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLEdBQU07QUFDdkMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLHdCQUMxQjtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLHdNQUVpRSxHQUZqRSxDQURGLGVBS0UsdUVBTEYsZUFNRSx5REFORixDQURGLGVBU0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLFdBQUQsbUJBREYsZUFFRSxnQ0FBQyxZQUFELE9BRkYsQ0FURixlQWFFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyxXQUFELHdCQURGLGVBRUUsb0RBRkYsZUFHRSxrRUFIRixDQWJGLENBRDBCO0FBQUEsR0FBNUI7O0FBc0JBLFNBQU9BLG1CQUFQO0FBQ0QsQ0F4QkQ7O2VBMEJlRCwwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VGFibGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIG1hcmdpbjogMThweCAwIDE0cHggMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbmA7XG5cbmNvbnN0IEV4YW1wbGVUYWJsZSA9ICgpID0+IChcbiAgPFRhYmxlIGNsYXNzTmFtZT1cInNjZW5lZ3JhcGgtZXhhbXBsZS10YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoPnBvaW50X2xhdDwvdGg+XG4gICAgICAgIDx0aD5wb2ludF9sbmc8L3RoPlxuICAgICAgICA8dGg+YWx0PC90aD5cbiAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zNy43Njk4OTc8L3RkPlxuICAgICAgICA8dGQ+LTEyMi40MTE2ODwvdGQ+XG4gICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zNy44MDY5Mjg8L3RkPlxuICAgICAgICA8dGQ+LTEyMi40MDIxODwvdGQ+XG4gICAgICAgIDx0ZD4wPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zNy43Nzg1NjQ8L3RkPlxuICAgICAgICA8dGQ+LTEyMi4zOTA5NjwvdGQ+XG4gICAgICAgIDx0ZD4xMDAwPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zNy43NDU5OTU8L3RkPlxuICAgICAgICA8dGQ+LTEyMi4zMDIyMDwvdGQ+XG4gICAgICAgIDx0ZD4yMDAwPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD4zNy4zMjk4NDE8L3RkPlxuICAgICAgICA8dGQ+LTEyMi4xMDM4NDc8L3RkPlxuICAgICAgICA8dGQ+MzAwMDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvVGFibGU+XG4pO1xuXG5jb25zdCBTY2VuZWdyYXBoSW5mb01vZGFsRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgU2NlbmVncmFwaEluZm9Nb2RhbCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNjZW5lZ3JhcGgtaW5mby1tb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2VuZWdyYXBoLWluZm8tbW9kYWxfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIEluIHlvdXIgY3N2IHlvdSBjYW4gc3BlY2lmeSBwb2ludHMgd2l0aCBvcHRpb25hbCBhbHRpdHVkZS4gVGhlIG1vZGVscyB3aWxsIHNob3cgYXQgZWFjaFxuICAgICAgICAgIHBvaW50IHlvdSBzcGVjaWZ5LiBZb3UgY2FuIHVzZSBhIHNhbXBsZSBtb2RlbCBvciB1cGxvYWQgb25lIGlueycgJ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8Y29kZT5nbFRGIChHTEIgb3IgRW1iZWRkZWQpPC9jb2RlPlxuICAgICAgICA8c3Bhbj4gZm9ybWF0Ljwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2VuZWdyYXBoLWluZm8tbW9kYWxfX2V4YW1wbGVcIj5cbiAgICAgICAgPFN0eWxlZFRpdGxlPkV4YW1wbGU6PC9TdHlsZWRUaXRsZT5cbiAgICAgICAgPEV4YW1wbGVUYWJsZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjZW5lZ3JhcGgtaW5mby1tb2RhbF9faWNvbnNcIj5cbiAgICAgICAgPFN0eWxlZFRpdGxlPlNhbXBsZSBNb2RlbHM8L1N0eWxlZFRpdGxlPlxuICAgICAgICA8ZGl2PkR1Y2s8L2Rpdj5cbiAgICAgICAgPGRpdj5Vc2UgeW91ciBvd24gbW9kZWw8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiBTY2VuZWdyYXBoSW5mb01vZGFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVncmFwaEluZm9Nb2RhbEZhY3Rvcnk7XG4iXX0=