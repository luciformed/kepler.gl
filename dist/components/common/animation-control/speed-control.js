"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _animationSpeedSlider = _interopRequireDefault(require("./animation-speed-slider"));

var _styledComponents2 = require("../styled-components");

var _icons = require("../icons");

var _dataUtils = require("../../../utils/data-utils");

var _templateObject, _templateObject2;

var StyledSpeedToggle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-grow: 0;\n  color: ", ";\n  position: relative;\n"])), function (props) {
  return props.theme.textColor;
});

var StyledSpeedText = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 24px;\n  text-align: left;\n"])));

SpeedControlFactory.deps = [_animationSpeedSlider["default"]];

function SpeedControlFactory(AnimationSpeedSlider) {
  var SpeedControl = function SpeedControl(_ref) {
    var onClick = _ref.onClick,
        updateAnimationSpeed = _ref.updateAnimationSpeed,
        speed = _ref.speed,
        showSpeedControl = _ref.showSpeedControl,
        _ref$buttonHeight = _ref.buttonHeight,
        buttonHeight = _ref$buttonHeight === void 0 ? '18px' : _ref$buttonHeight;
    return /*#__PURE__*/_react["default"].createElement(StyledSpeedToggle, {
      className: "animation-control__speed-control"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      link: true,
      width: "80px",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon speed"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Rocket, {
      height: buttonHeight
    })), /*#__PURE__*/_react["default"].createElement(StyledSpeedText, {
      style: {
        visibility: !showSpeedControl ? 'visible' : 'hidden'
      }
    }, (0, _dataUtils.preciseRound)(speed, 1), "x")), showSpeedControl ? /*#__PURE__*/_react["default"].createElement(AnimationSpeedSlider, {
      onHide: onClick,
      updateAnimationSpeed: updateAnimationSpeed,
      speed: speed
    }) : null);
  };

  return SpeedControl;
}

var _default = SpeedControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9zcGVlZC1jb250cm9sLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFNwZWVkVG9nZ2xlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIlN0eWxlZFNwZWVkVGV4dCIsIlNwZWVkQ29udHJvbEZhY3RvcnkiLCJkZXBzIiwiQW5pbWF0aW9uU3BlZWRTbGlkZXJGYWN0b3J5IiwiQW5pbWF0aW9uU3BlZWRTbGlkZXIiLCJTcGVlZENvbnRyb2wiLCJvbkNsaWNrIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsInNob3dTcGVlZENvbnRyb2wiLCJidXR0b25IZWlnaHQiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixtS0FHWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FITyxDQUF2Qjs7QUFPQSxJQUFNQyxlQUFlLEdBQUdMLDZCQUFPQyxHQUFWLHlKQUFyQjs7QUFNQUssbUJBQW1CLENBQUNDLElBQXBCLEdBQTJCLENBQUNDLGdDQUFELENBQTNCOztBQUVBLFNBQVNGLG1CQUFULENBQTZCRyxvQkFBN0IsRUFBbUQ7QUFDakQsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxRQUNuQkMsT0FEbUIsUUFDbkJBLE9BRG1CO0FBQUEsUUFFbkJDLG9CQUZtQixRQUVuQkEsb0JBRm1CO0FBQUEsUUFHbkJDLEtBSG1CLFFBR25CQSxLQUhtQjtBQUFBLFFBSW5CQyxnQkFKbUIsUUFJbkJBLGdCQUptQjtBQUFBLGlDQUtuQkMsWUFMbUI7QUFBQSxRQUtuQkEsWUFMbUIsa0NBS0osTUFMSTtBQUFBLHdCQU9uQixnQ0FBQyxpQkFBRDtBQUFtQixNQUFBLFNBQVMsRUFBQztBQUE3QixvQkFDRSxnQ0FBQyx5QkFBRDtBQUFRLE1BQUEsSUFBSSxNQUFaO0FBQWEsTUFBQSxLQUFLLEVBQUMsTUFBbkI7QUFBMEIsTUFBQSxPQUFPLEVBQUVKO0FBQW5DLG9CQUNFLGdDQUFDLGdDQUFEO0FBQWUsTUFBQSxTQUFTLEVBQUM7QUFBekIsb0JBQ0UsZ0NBQUMsYUFBRDtBQUFRLE1BQUEsTUFBTSxFQUFFSTtBQUFoQixNQURGLENBREYsZUFJRSxnQ0FBQyxlQUFEO0FBQWlCLE1BQUEsS0FBSyxFQUFFO0FBQUNDLFFBQUFBLFVBQVUsRUFBRSxDQUFDRixnQkFBRCxHQUFvQixTQUFwQixHQUFnQztBQUE3QztBQUF4QixPQUNHLDZCQUFhRCxLQUFiLEVBQW9CLENBQXBCLENBREgsTUFKRixDQURGLEVBU0dDLGdCQUFnQixnQkFDZixnQ0FBQyxvQkFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFSCxPQURWO0FBRUUsTUFBQSxvQkFBb0IsRUFBRUMsb0JBRnhCO0FBR0UsTUFBQSxLQUFLLEVBQUVDO0FBSFQsTUFEZSxHQU1iLElBZk4sQ0FQbUI7QUFBQSxHQUFyQjs7QUF5QkEsU0FBT0gsWUFBUDtBQUNEOztlQUNjSixtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnkgZnJvbSAnLi9hbmltYXRpb24tc3BlZWQtc2xpZGVyJztcbmltcG9ydCB7QnV0dG9uLCBDZW50ZXJGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1JvY2tldH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtwcmVjaXNlUm91bmR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5jb25zdCBTdHlsZWRTcGVlZFRvZ2dsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkU3BlZWRUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbmA7XG5cblNwZWVkQ29udHJvbEZhY3RvcnkuZGVwcyA9IFtBbmltYXRpb25TcGVlZFNsaWRlckZhY3RvcnldO1xuXG5mdW5jdGlvbiBTcGVlZENvbnRyb2xGYWN0b3J5KEFuaW1hdGlvblNwZWVkU2xpZGVyKSB7XG4gIGNvbnN0IFNwZWVkQ29udHJvbCA9ICh7XG4gICAgb25DbGljayxcbiAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICBzcGVlZCxcbiAgICBzaG93U3BlZWRDb250cm9sLFxuICAgIGJ1dHRvbkhlaWdodCA9ICcxOHB4J1xuICB9KSA9PiAoXG4gICAgPFN0eWxlZFNwZWVkVG9nZ2xlIGNsYXNzTmFtZT1cImFuaW1hdGlvbi1jb250cm9sX19zcGVlZC1jb250cm9sXCI+XG4gICAgICA8QnV0dG9uIGxpbmsgd2lkdGg9XCI4MHB4XCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb24gc3BlZWRcIj5cbiAgICAgICAgICA8Um9ja2V0IGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgIDxTdHlsZWRTcGVlZFRleHQgc3R5bGU9e3t2aXNpYmlsaXR5OiAhc2hvd1NwZWVkQ29udHJvbCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfX0+XG4gICAgICAgICAge3ByZWNpc2VSb3VuZChzcGVlZCwgMSl9eFxuICAgICAgICA8L1N0eWxlZFNwZWVkVGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge3Nob3dTcGVlZENvbnRyb2wgPyAoXG4gICAgICAgIDxBbmltYXRpb25TcGVlZFNsaWRlclxuICAgICAgICAgIG9uSGlkZT17b25DbGlja31cbiAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgc3BlZWQ9e3NwZWVkfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9TdHlsZWRTcGVlZFRvZ2dsZT5cbiAgKTtcbiAgcmV0dXJuIFNwZWVkQ29udHJvbDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNwZWVkQ29udHJvbEZhY3Rvcnk7XG4iXX0=