"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CollapseButtonFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSidePanelContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n"])), function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});

var SideBarContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ", "px;\n  align-items: stretch;\n  flex-grow: 1;\n"])), function (props) {
  return props.left;
});

var SideBarInner = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-left: ", "px solid\n    ", ";\n"])), function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.sidePanelBorder;
}, function (props) {
  return props.theme.sidePanelBorderColor;
});

var StyledCollapseButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  height: 20px;\n  position: absolute;\n  right: -8px;\n  top: ", "px;\n  width: 20px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var CollapseButtonFactory = function CollapseButtonFactory() {
  var CollapseButton = function CollapseButton(_ref) {
    var onClick = _ref.onClick,
        isOpen = _ref.isOpen;
    return /*#__PURE__*/_react["default"].createElement(StyledCollapseButton, {
      className: "side-bar__close",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
      height: "12px",
      style: {
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
      }
    }));
  };

  return CollapseButton;
};

exports.CollapseButtonFactory = CollapseButtonFactory;
SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(SideBar, _Component);

    var _super = _createSuper(SideBar);

    function SideBar() {
      var _this;

      (0, _classCallCheck2["default"])(this, SideBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.onOpenOrClose({
          isOpen: !_this.props.isOpen
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(SideBar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            minifiedWidth = _this$props.minifiedWidth,
            width = _this$props.width;
        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;
        return /*#__PURE__*/_react["default"].createElement(StyledSidePanelContainer, {
          width: isOpen ? width : 0,
          className: "side-panel--container"
        }, /*#__PURE__*/_react["default"].createElement(SideBarContainer, {
          className: "side-bar",
          style: {
            width: "".concat(width, "px")
          },
          left: horizontalOffset
        }, isOpen ? /*#__PURE__*/_react["default"].createElement(SideBarInner, {
          className: "side-bar__inner"
        }, this.props.children) : null, /*#__PURE__*/_react["default"].createElement(CollapseButton, {
          isOpen: isOpen,
          onClick: this._onOpenOrClose
        })));
      }
    }]);
    return SideBar;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    width: _propTypes["default"].number,
    isOpen: _propTypes["default"].bool,
    minifiedWidth: _propTypes["default"].number,
    onOpenOrClose: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {}
  }), _temp;
}

var _default = SidebarFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwic2lkZVBhbmVsQm9yZGVyIiwic2lkZVBhbmVsQm9yZGVyQ29sb3IiLCJTdHlsZWRDb2xsYXBzZUJ1dHRvbiIsInNpZGVCYXJDbG9zZUJ0bkJnZCIsInNpZGVCYXJDbG9zZUJ0bkNvbG9yIiwic2lkZUJhckNsb3NlQnRuQmdkSG92ZXIiLCJDb2xsYXBzZUJ1dHRvbkZhY3RvcnkiLCJDb2xsYXBzZUJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW4iLCJ0cmFuc2Zvcm0iLCJTaWRlYmFyRmFjdG9yeSIsImRlcHMiLCJvbk9wZW5PckNsb3NlIiwibWluaWZpZWRXaWR0aCIsImhvcml6b250YWxPZmZzZXQiLCJjaGlsZHJlbiIsIl9vbk9wZW5PckNsb3NlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiYm9vbCIsImZ1bmMiLCJub29wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHQyw2QkFBT0MsR0FBVix1VEFHbkIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLElBQUlELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkMsSUFBbkQ7QUFBQSxDQUhjLEVBT2IsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUFaLENBQXNC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LyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7QXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5jb25zdCBTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCArIDIgKiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ucmlnaHR9cHg7XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4uYm90dG9tfXB4O1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0fXB4O1xuYDtcblxuY29uc3QgU2lkZUJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGxlZnQgMjUwbXMsIHJpZ2h0IDI1MG1zO1xuICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmxlZnR9cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWdyb3c6IDE7XG5gO1xuXG5jb25zdCBTaWRlQmFySW5uZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJvcmRlcn1weCBzb2xpZFxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQm9yZGVyQ29sb3J9O1xuYDtcblxuY29uc3QgU3R5bGVkQ29sbGFwc2VCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkNvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtOHB4O1xuICB0b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHdpZHRoOiAyMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2RIb3Zlcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzZUJ1dHRvbkZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IENvbGxhcHNlQnV0dG9uID0gKHtvbkNsaWNrLCBpc09wZW59KSA9PiAoXG4gICAgPFN0eWxlZENvbGxhcHNlQnV0dG9uIGNsYXNzTmFtZT1cInNpZGUtYmFyX19jbG9zZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPEFycm93UmlnaHQgaGVpZ2h0PVwiMTJweFwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgcm90YXRlKCR7aXNPcGVuID8gMTgwIDogMH1kZWcpYH19IC8+XG4gICAgPC9TdHlsZWRDb2xsYXBzZUJ1dHRvbj5cbiAgKTtcbiAgcmV0dXJuIENvbGxhcHNlQnV0dG9uO1xufTtcblxuU2lkZWJhckZhY3RvcnkuZGVwcyA9IFtDb2xsYXBzZUJ1dHRvbkZhY3RvcnldO1xuXG5mdW5jdGlvbiBTaWRlYmFyRmFjdG9yeShDb2xsYXBzZUJ1dHRvbikge1xuICByZXR1cm4gY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIG1pbmlmaWVkV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBvbk9wZW5PckNsb3NlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIG1pbmlmaWVkV2lkdGg6IDAsXG4gICAgICBpc09wZW46IHRydWUsXG4gICAgICBvbk9wZW5PckNsb3NlOiBmdW5jdGlvbiBub29wKCkge31cbiAgICB9O1xuXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbk9yQ2xvc2Uoe2lzT3BlbjogIXRoaXMucHJvcHMuaXNPcGVufSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc09wZW4sIG1pbmlmaWVkV2lkdGgsIHdpZHRofSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gaXNPcGVuID8gMCA6IG1pbmlmaWVkV2lkdGggLSB3aWR0aDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFNpZGVQYW5lbENvbnRhaW5lciB3aWR0aD17aXNPcGVuID8gd2lkdGggOiAwfSBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLS1jb250YWluZXJcIj5cbiAgICAgICAgICA8U2lkZUJhckNvbnRhaW5lclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZS1iYXJcIlxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cbiAgICAgICAgICAgIGxlZnQ9e2hvcml6b250YWxPZmZzZXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzT3BlbiA/IChcbiAgICAgICAgICAgICAgPFNpZGVCYXJJbm5lciBjbGFzc05hbWU9XCJzaWRlLWJhcl9faW5uZXJcIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L1NpZGVCYXJJbm5lcj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPENvbGxhcHNlQnV0dG9uIGlzT3Blbj17aXNPcGVufSBvbkNsaWNrPXt0aGlzLl9vbk9wZW5PckNsb3NlfSAvPlxuICAgICAgICAgIDwvU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRTaWRlUGFuZWxDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckZhY3Rvcnk7XG4iXX0=