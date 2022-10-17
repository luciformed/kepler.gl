"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AnimationWindowControl = exports.IconButton = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../styled-components");

var _animationSpeedSlider = _interopRequireDefault(require("./animation-speed-slider"));

var _icons = require("../icons");

var _defaultSettings = require("../../../constants/default-settings");

var _dataUtils = require("../../../utils/data-utils");

var _templateObject, _templateObject2, _templateObject3, _DEFAULT_ANIMATE_ITEM;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DELAY_SHOW = 500;
var DEFAULT_BUTTON_HEIGHT = '20px';

var StyledAnimationControls = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n\n  &.disabled {\n    opacity: 0.4;\n    pointer-events: none;\n  }\n"])));

var StyledSpeedControl = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n\n  .animation-control__speed-slider {\n    left: 0;\n  }\n"])));

var IconButton = (0, _styledComponents["default"])(_styledComponents2.Button)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: 32px;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 4px;\n  margin-left: 7px;\n  border: 0;\n  padding: 0;\n\n  .__react_component_tooltip {\n    font-family: ", ";\n  }\n  svg {\n    margin: 0;\n  }\n  &.active {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.collapsed ? 0 : 32;
}, function (props) {
  return props.theme.playbackButtonColor;
}, function (props) {
  return props.theme.playbackButtonBgColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.playbackButtonActBgColor;
});
exports.IconButton = IconButton;

function nop() {}

var DEFAULT_ICONS = {
  /* eslint-disable react/display-name */
  reset: function reset(_) {
    return /*#__PURE__*/_react["default"].createElement(_icons.Reset, {
      height: "18px"
    });
  },
  play: function play(_) {
    return /*#__PURE__*/_react["default"].createElement(_icons.Play, {
      height: "18px"
    });
  },
  pause: function pause(_) {
    return /*#__PURE__*/_react["default"].createElement(_icons.Pause, {
      height: "18px"
    });
  },

  /* eslint-enable react/display-name */
  speed: _icons.Rocket,
  animationFree: _icons.FreeWindow,
  animationIncremental: _icons.AnchorWindow
};
var DEFAULT_ANIMATE_ITEMS = (_DEFAULT_ANIMATE_ITEM = {}, (0, _defineProperty2["default"])(_DEFAULT_ANIMATE_ITEM, _defaultSettings.ANIMATION_WINDOW.free, {
  id: _defaultSettings.ANIMATION_WINDOW.free,
  icon: DEFAULT_ICONS.animationFree,
  tooltip: 'tooltip.animationByWindow'
}), (0, _defineProperty2["default"])(_DEFAULT_ANIMATE_ITEM, _defaultSettings.ANIMATION_WINDOW.incremental, {
  id: _defaultSettings.ANIMATION_WINDOW.incremental,
  icon: DEFAULT_ICONS.animationIncremental,
  tooltip: 'tooltip.animationByIncremental'
}), _DEFAULT_ANIMATE_ITEM);

var AnimationWindowControl = function AnimationWindowControl(_ref) {
  var _onClick = _ref.onClick,
      selected = _ref.selected,
      onHide = _ref.onHide,
      height = _ref.height,
      animationItems = _ref.animationItems,
      _ref$btnStyle = _ref.btnStyle,
      btnStyle = _ref$btnStyle === void 0 ? {} : _ref$btnStyle;
  return /*#__PURE__*/_react["default"].createElement("div", null, Object.values(animationItems).filter(function (item) {
    return item.id !== selected;
  }).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      key: item.id,
      "data-tip": true,
      "data-for": "".concat(item.id, "-tooltip"),
      className: "playback-control-button",
      onClick: function onClick() {
        _onClick(item.id);

        onHide();
      }
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(item.icon, {
      height: height
    }), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "".concat(item.id, "-tooltip"),
      effect: "solid",
      place: "top"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: item.tooltip
    })) : null);
  }));
};

exports.AnimationWindowControl = AnimationWindowControl;
PlaybackControlsFactory.deps = [_animationSpeedSlider["default"]];

function PlaybackControlsFactory(AnimationSpeedSlider) {
  // eslint-disable-next-line complexity
  var PlaybackControls = function PlaybackControls(_ref2) {
    var _ref2$isAnimatable = _ref2.isAnimatable,
        isAnimatable = _ref2$isAnimatable === void 0 ? true : _ref2$isAnimatable,
        isAnimating = _ref2.isAnimating,
        width = _ref2.width,
        speed = _ref2.speed,
        _ref2$animationWindow = _ref2.animationWindow,
        animationWindow = _ref2$animationWindow === void 0 ? _defaultSettings.ANIMATION_WINDOW.free : _ref2$animationWindow,
        setFilterAnimationWindow = _ref2.setFilterAnimationWindow,
        updateAnimationSpeed = _ref2.updateAnimationSpeed,
        _ref2$pauseAnimation = _ref2.pauseAnimation,
        pauseAnimation = _ref2$pauseAnimation === void 0 ? nop : _ref2$pauseAnimation,
        _ref2$resetAnimation = _ref2.resetAnimation,
        resetAnimation = _ref2$resetAnimation === void 0 ? nop : _ref2$resetAnimation,
        _ref2$startAnimation = _ref2.startAnimation,
        startAnimation = _ref2$startAnimation === void 0 ? nop : _ref2$startAnimation,
        _ref2$playbackIcons = _ref2.playbackIcons,
        playbackIcons = _ref2$playbackIcons === void 0 ? DEFAULT_ICONS : _ref2$playbackIcons,
        _ref2$animationItems = _ref2.animationItems,
        animationItems = _ref2$animationItems === void 0 ? DEFAULT_ANIMATE_ITEMS : _ref2$animationItems,
        _ref2$buttonStyle = _ref2.buttonStyle,
        buttonStyle = _ref2$buttonStyle === void 0 ? 'secondary' : _ref2$buttonStyle,
        _ref2$buttonHeight = _ref2.buttonHeight,
        buttonHeight = _ref2$buttonHeight === void 0 ? DEFAULT_BUTTON_HEIGHT : _ref2$buttonHeight;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isSpeedControlVisible = _useState2[0],
        toggleSpeedControl = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        showAnimationWindowControl = _useState4[0],
        setShowAnimationWindowControl = _useState4[1];

    var toggleAnimationWindowControl = (0, _react.useCallback)(function () {
      setShowAnimationWindowControl(!showAnimationWindowControl);
    }, [showAnimationWindowControl, setShowAnimationWindowControl]);
    var btnStyle = buttonStyle ? (0, _defineProperty2["default"])({}, buttonStyle, true) : {};
    var hideAndShowSpeedControl = (0, _react.useCallback)(function () {
      if (!isSpeedControlVisible) {
        toggleSpeedControl(true);
      } else {
        // TODO: A HACK to allow input onblur get triggered before the input is unmounted
        // A better solution should be invested, see https://github.com/facebook/react/issues/12363
        window.setTimeout(function () {
          return toggleSpeedControl(false);
        }, 200);
      }
    }, [isSpeedControlVisible, toggleSpeedControl]);
    return /*#__PURE__*/_react["default"].createElement(StyledAnimationControls, {
      className: (0, _classnames["default"])('playback-controls', {
        disabled: !isAnimatable
      }),
      style: {
        width: "".concat(width, "px")
      }
    }, setFilterAnimationWindow ? /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-window",
      className: (0, _classnames["default"])('playback-control-button', {
        active: showAnimationWindowControl
      }),
      onClick: toggleAnimationWindowControl
    }, btnStyle), function () {
      if (animationItems[animationWindow]) {
        var WindowIcon = animationItems[animationWindow].icon;
        return /*#__PURE__*/_react["default"].createElement(WindowIcon, {
          height: buttonHeight
        });
      }

      return null;
    }(), animationItems[animationWindow] && animationItems[animationWindow].tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-window",
      place: "top",
      delayShow: 500,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: animationItems[animationWindow].tooltip
    })) : null) : null, showAnimationWindowControl ? /*#__PURE__*/_react["default"].createElement(AnimationWindowControl, {
      onClick: setFilterAnimationWindow,
      selected: animationWindow,
      onHide: toggleAnimationWindowControl,
      height: buttonHeight,
      btnStyle: btnStyle,
      animationItems: animationItems
    }) : null, showAnimationWindowControl || !updateAnimationSpeed ? null : /*#__PURE__*/_react["default"].createElement(StyledSpeedControl, null, /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-speed",
      className: "playback-control-button"
    }, btnStyle, {
      onClick: hideAndShowSpeedControl
    }), /*#__PURE__*/_react["default"].createElement(playbackIcons.speed, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-speed",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _dataUtils.preciseRound)(speed, 1), "x"))), isSpeedControlVisible ? /*#__PURE__*/_react["default"].createElement(AnimationSpeedSlider, {
      onHide: hideAndShowSpeedControl,
      updateAnimationSpeed: updateAnimationSpeed,
      speed: speed
    }) : null), showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-reset",
      className: "playback-control-button",
      onClick: resetAnimation
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(playbackIcons.reset, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-reset",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "tooltip.reset"
    }))), showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-play-pause",
      className: (0, _classnames["default"])('playback-control-button', {
        active: isAnimating
      }),
      onClick: isAnimating ? pauseAnimation : startAnimation,
      hide: isSpeedControlVisible
    }, btnStyle), isAnimating ? /*#__PURE__*/_react["default"].createElement(playbackIcons.pause, {
      height: buttonHeight
    }) : /*#__PURE__*/_react["default"].createElement(playbackIcons.play, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "animate-play-pause",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: isAnimating ? 'tooltip.pause' : 'tooltip.play'
    }))));
  };

  return PlaybackControls;
}

var _default = PlaybackControlsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9wbGF5YmFjay1jb250cm9scy5qcyJdLCJuYW1lcyI6WyJERUxBWV9TSE9XIiwiREVGQVVMVF9CVVRUT05fSEVJR0hUIiwiU3R5bGVkQW5pbWF0aW9uQ29udHJvbHMiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRTcGVlZENvbnRyb2wiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwicHJvcHMiLCJjb2xsYXBzZWQiLCJ0aGVtZSIsInBsYXliYWNrQnV0dG9uQ29sb3IiLCJwbGF5YmFja0J1dHRvbkJnQ29sb3IiLCJmb250RmFtaWx5IiwicGxheWJhY2tCdXR0b25BY3RCZ0NvbG9yIiwibm9wIiwiREVGQVVMVF9JQ09OUyIsInJlc2V0IiwiXyIsInBsYXkiLCJwYXVzZSIsInNwZWVkIiwiUm9ja2V0IiwiYW5pbWF0aW9uRnJlZSIsIkZyZWVXaW5kb3ciLCJhbmltYXRpb25JbmNyZW1lbnRhbCIsIkFuY2hvcldpbmRvdyIsIkRFRkFVTFRfQU5JTUFURV9JVEVNUyIsIkFOSU1BVElPTl9XSU5ET1ciLCJmcmVlIiwiaWQiLCJpY29uIiwidG9vbHRpcCIsImluY3JlbWVudGFsIiwiQW5pbWF0aW9uV2luZG93Q29udHJvbCIsIm9uQ2xpY2siLCJzZWxlY3RlZCIsIm9uSGlkZSIsImhlaWdodCIsImFuaW1hdGlvbkl0ZW1zIiwiYnRuU3R5bGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwiUGxheWJhY2tDb250cm9sc0ZhY3RvcnkiLCJkZXBzIiwiQW5pbWF0aW9uU3BlZWRTbGlkZXJGYWN0b3J5IiwiQW5pbWF0aW9uU3BlZWRTbGlkZXIiLCJQbGF5YmFja0NvbnRyb2xzIiwiaXNBbmltYXRhYmxlIiwiaXNBbmltYXRpbmciLCJ3aWR0aCIsImFuaW1hdGlvbldpbmRvdyIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvdyIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwicGF1c2VBbmltYXRpb24iLCJyZXNldEFuaW1hdGlvbiIsInN0YXJ0QW5pbWF0aW9uIiwicGxheWJhY2tJY29ucyIsImJ1dHRvblN0eWxlIiwiYnV0dG9uSGVpZ2h0IiwiaXNTcGVlZENvbnRyb2xWaXNpYmxlIiwidG9nZ2xlU3BlZWRDb250cm9sIiwic2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJzZXRTaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCIsInRvZ2dsZUFuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJoaWRlQW5kU2hvd1NwZWVkQ29udHJvbCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJkaXNhYmxlZCIsImFjdGl2ZSIsIldpbmRvd0ljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsTUFBOUI7O0FBRUEsSUFBTUMsdUJBQXVCLEdBQUdDLDZCQUFPQyxHQUFWLHNNQUE3Qjs7QUFVQSxJQUFNQyxrQkFBa0IsR0FBR0YsNkJBQU9DLEdBQVYsK0xBQXhCOztBQVNPLElBQU1FLFVBQVUsR0FBRyxrQ0FBT0MseUJBQVAsQ0FBSCwrWEFDWixVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLENBQWxCLEdBQXNCLEVBQTNCO0FBQUEsQ0FETyxFQUdaLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsbUJBQWhCO0FBQUEsQ0FITyxFQUlELFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUUscUJBQWhCO0FBQUEsQ0FKSixFQVdKLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsVUFBaEI7QUFBQSxDQVhELEVBaUJDLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUksd0JBQWhCO0FBQUEsQ0FqQk4sQ0FBaEI7OztBQXFCUCxTQUFTQyxHQUFULEdBQWUsQ0FBRTs7QUFDakIsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCO0FBQ0FDLEVBQUFBLEtBQUssRUFBRSxlQUFBQyxDQUFDO0FBQUEsd0JBQUksZ0NBQUMsWUFBRDtBQUFPLE1BQUEsTUFBTSxFQUFDO0FBQWQsTUFBSjtBQUFBLEdBRlk7QUFHcEJDLEVBQUFBLElBQUksRUFBRSxjQUFBRCxDQUFDO0FBQUEsd0JBQUksZ0NBQUMsV0FBRDtBQUFNLE1BQUEsTUFBTSxFQUFDO0FBQWIsTUFBSjtBQUFBLEdBSGE7QUFJcEJFLEVBQUFBLEtBQUssRUFBRSxlQUFBRixDQUFDO0FBQUEsd0JBQUksZ0NBQUMsWUFBRDtBQUFPLE1BQUEsTUFBTSxFQUFDO0FBQWQsTUFBSjtBQUFBLEdBSlk7O0FBS3BCO0FBQ0FHLEVBQUFBLEtBQUssRUFBRUMsYUFOYTtBQU9wQkMsRUFBQUEsYUFBYSxFQUFFQyxpQkFQSztBQVFwQkMsRUFBQUEsb0JBQW9CLEVBQUVDO0FBUkYsQ0FBdEI7QUFXQSxJQUFNQyxxQkFBcUIsd0ZBQ3hCQyxrQ0FBaUJDLElBRE8sRUFDQTtBQUN2QkMsRUFBQUEsRUFBRSxFQUFFRixrQ0FBaUJDLElBREU7QUFFdkJFLEVBQUFBLElBQUksRUFBRWYsYUFBYSxDQUFDTyxhQUZHO0FBR3ZCUyxFQUFBQSxPQUFPLEVBQUU7QUFIYyxDQURBLDJEQU14Qkosa0NBQWlCSyxXQU5PLEVBTU87QUFDOUJILEVBQUFBLEVBQUUsRUFBRUYsa0NBQWlCSyxXQURTO0FBRTlCRixFQUFBQSxJQUFJLEVBQUVmLGFBQWEsQ0FBQ1Msb0JBRlU7QUFHOUJPLEVBQUFBLE9BQU8sRUFBRTtBQUhxQixDQU5QLHlCQUEzQjs7QUFhTyxJQUFNRSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCO0FBQUEsTUFDcENDLFFBRG9DLFFBQ3BDQSxPQURvQztBQUFBLE1BRXBDQyxRQUZvQyxRQUVwQ0EsUUFGb0M7QUFBQSxNQUdwQ0MsTUFIb0MsUUFHcENBLE1BSG9DO0FBQUEsTUFJcENDLE1BSm9DLFFBSXBDQSxNQUpvQztBQUFBLE1BS3BDQyxjQUxvQyxRQUtwQ0EsY0FMb0M7QUFBQSwyQkFNcENDLFFBTm9DO0FBQUEsTUFNcENBLFFBTm9DLDhCQU16QixFQU55QjtBQUFBLHNCQVFwQyw2Q0FDR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNILGNBQWQsRUFDRUksTUFERixDQUNTLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNkLEVBQUwsS0FBWU0sUUFBaEI7QUFBQSxHQURiLEVBRUVTLEdBRkYsQ0FFTSxVQUFBRCxJQUFJO0FBQUEsd0JBQ1AsZ0NBQUMsVUFBRDtBQUNFLE1BQUEsR0FBRyxFQUFFQSxJQUFJLENBQUNkLEVBRFo7QUFFRSxzQkFGRjtBQUdFLDRCQUFhYyxJQUFJLENBQUNkLEVBQWxCLGFBSEY7QUFJRSxNQUFBLFNBQVMsRUFBQyx5QkFKWjtBQUtFLE1BQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2JLLFFBQUFBLFFBQU8sQ0FBQ1MsSUFBSSxDQUFDZCxFQUFOLENBQVA7O0FBQ0FPLFFBQUFBLE1BQU07QUFDUDtBQVJILE9BU01HLFFBVE4sZ0JBV0UsZ0NBQUMsSUFBRCxDQUFNLElBQU47QUFBVyxNQUFBLE1BQU0sRUFBRUY7QUFBbkIsTUFYRixFQVlHTSxJQUFJLENBQUNaLE9BQUwsZ0JBQ0MsZ0NBQUMsMEJBQUQ7QUFBUyxNQUFBLEVBQUUsWUFBS1ksSUFBSSxDQUFDZCxFQUFWLGFBQVg7QUFBbUMsTUFBQSxNQUFNLEVBQUMsT0FBMUM7QUFBa0QsTUFBQSxLQUFLLEVBQUM7QUFBeEQsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVjLElBQUksQ0FBQ1o7QUFBM0IsTUFERixDQURELEdBSUcsSUFoQk4sQ0FETztBQUFBLEdBRlYsQ0FESCxDQVJvQztBQUFBLENBQS9COzs7QUFrQ1BjLHVCQUF1QixDQUFDQyxJQUF4QixHQUErQixDQUFDQyxnQ0FBRCxDQUEvQjs7QUFDQSxTQUFTRix1QkFBVCxDQUFpQ0csb0JBQWpDLEVBQXVEO0FBQ3JEO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixRQWVuQjtBQUFBLG1DQWRKQyxZQWNJO0FBQUEsUUFkSkEsWUFjSSxtQ0FkVyxJQWNYO0FBQUEsUUFiSkMsV0FhSSxTQWJKQSxXQWFJO0FBQUEsUUFaSkMsS0FZSSxTQVpKQSxLQVlJO0FBQUEsUUFYSmhDLEtBV0ksU0FYSkEsS0FXSTtBQUFBLHNDQVZKaUMsZUFVSTtBQUFBLFFBVkpBLGVBVUksc0NBVmMxQixrQ0FBaUJDLElBVS9CO0FBQUEsUUFUSjBCLHdCQVNJLFNBVEpBLHdCQVNJO0FBQUEsUUFSSkMsb0JBUUksU0FSSkEsb0JBUUk7QUFBQSxxQ0FQSkMsY0FPSTtBQUFBLFFBUEpBLGNBT0kscUNBUGExQyxHQU9iO0FBQUEscUNBTkoyQyxjQU1JO0FBQUEsUUFOSkEsY0FNSSxxQ0FOYTNDLEdBTWI7QUFBQSxxQ0FMSjRDLGNBS0k7QUFBQSxRQUxKQSxjQUtJLHFDQUxhNUMsR0FLYjtBQUFBLG9DQUpKNkMsYUFJSTtBQUFBLFFBSkpBLGFBSUksb0NBSlk1QyxhQUlaO0FBQUEscUNBSEp1QixjQUdJO0FBQUEsUUFISkEsY0FHSSxxQ0FIYVoscUJBR2I7QUFBQSxrQ0FGSmtDLFdBRUk7QUFBQSxRQUZKQSxXQUVJLGtDQUZVLFdBRVY7QUFBQSxtQ0FESkMsWUFDSTtBQUFBLFFBREpBLFlBQ0ksbUNBRFc3RCxxQkFDWDs7QUFDSixvQkFBb0QscUJBQVMsS0FBVCxDQUFwRDtBQUFBO0FBQUEsUUFBTzhELHFCQUFQO0FBQUEsUUFBOEJDLGtCQUE5Qjs7QUFDQSxxQkFBb0UscUJBQVMsS0FBVCxDQUFwRTtBQUFBO0FBQUEsUUFBT0MsMEJBQVA7QUFBQSxRQUFtQ0MsNkJBQW5DOztBQUVBLFFBQU1DLDRCQUE0QixHQUFHLHdCQUFZLFlBQU07QUFDckRELE1BQUFBLDZCQUE2QixDQUFDLENBQUNELDBCQUFGLENBQTdCO0FBQ0QsS0FGb0MsRUFFbEMsQ0FBQ0EsMEJBQUQsRUFBNkJDLDZCQUE3QixDQUZrQyxDQUFyQztBQUdBLFFBQU0xQixRQUFRLEdBQUdxQixXQUFXLHdDQUFLQSxXQUFMLEVBQW1CLElBQW5CLElBQTJCLEVBQXZEO0FBRUEsUUFBTU8sdUJBQXVCLEdBQUcsd0JBQVksWUFBTTtBQUNoRCxVQUFJLENBQUNMLHFCQUFMLEVBQTRCO0FBQzFCQyxRQUFBQSxrQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0QsT0FGRCxNQUVPO0FBQ0w7QUFDQTtBQUNBSyxRQUFBQSxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxpQkFBTU4sa0JBQWtCLENBQUMsS0FBRCxDQUF4QjtBQUFBLFNBQWxCLEVBQW1ELEdBQW5EO0FBQ0Q7QUFDRixLQVIrQixFQVE3QixDQUFDRCxxQkFBRCxFQUF3QkMsa0JBQXhCLENBUjZCLENBQWhDO0FBU0Esd0JBQ0UsZ0NBQUMsdUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyxtQkFBWCxFQUFnQztBQUN6Q08sUUFBQUEsUUFBUSxFQUFFLENBQUNwQjtBQUQ4QixPQUFoQyxDQURiO0FBSUUsTUFBQSxLQUFLLEVBQUU7QUFBQ0UsUUFBQUEsS0FBSyxZQUFLQSxLQUFMO0FBQU47QUFKVCxPQU9HRSx3QkFBd0IsZ0JBQ3ZCLGdDQUFDLFVBQUQ7QUFDRSxzQkFERjtBQUVFLGtCQUFTLGdCQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUUsNEJBQVcseUJBQVgsRUFBc0M7QUFBQ2lCLFFBQUFBLE1BQU0sRUFBRVA7QUFBVCxPQUF0QyxDQUhiO0FBSUUsTUFBQSxPQUFPLEVBQUVFO0FBSlgsT0FLTTNCLFFBTE4sR0FPSSxZQUFNO0FBQ04sVUFBSUQsY0FBYyxDQUFDZSxlQUFELENBQWxCLEVBQXFDO0FBQ25DLFlBQU1tQixVQUFVLEdBQUdsQyxjQUFjLENBQUNlLGVBQUQsQ0FBZCxDQUFnQ3ZCLElBQW5EO0FBQ0EsNEJBQU8sZ0NBQUMsVUFBRDtBQUFZLFVBQUEsTUFBTSxFQUFFK0I7QUFBcEIsVUFBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNELEtBTkEsRUFQSCxFQWNHdkIsY0FBYyxDQUFDZSxlQUFELENBQWQsSUFBbUNmLGNBQWMsQ0FBQ2UsZUFBRCxDQUFkLENBQWdDdEIsT0FBbkUsZ0JBQ0MsZ0NBQUMsMEJBQUQ7QUFBUyxNQUFBLEVBQUUsRUFBQyxnQkFBWjtBQUE2QixNQUFBLEtBQUssRUFBQyxLQUFuQztBQUF5QyxNQUFBLFNBQVMsRUFBRSxHQUFwRDtBQUF5RCxNQUFBLE1BQU0sRUFBQztBQUFoRSxvQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRU8sY0FBYyxDQUFDZSxlQUFELENBQWQsQ0FBZ0N0QjtBQUF0RCxNQURGLENBREQsR0FJRyxJQWxCTixDQUR1QixHQXFCckIsSUE1Qk4sRUE4QkdpQywwQkFBMEIsZ0JBQ3pCLGdDQUFDLHNCQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUVWLHdCQURYO0FBRUUsTUFBQSxRQUFRLEVBQUVELGVBRlo7QUFHRSxNQUFBLE1BQU0sRUFBRWEsNEJBSFY7QUFJRSxNQUFBLE1BQU0sRUFBRUwsWUFKVjtBQUtFLE1BQUEsUUFBUSxFQUFFdEIsUUFMWjtBQU1FLE1BQUEsY0FBYyxFQUFFRDtBQU5sQixNQUR5QixHQVN2QixJQXZDTixFQTBDRzBCLDBCQUEwQixJQUFJLENBQUNULG9CQUEvQixHQUFzRCxJQUF0RCxnQkFDQyxnQ0FBQyxrQkFBRCxxQkFDRSxnQ0FBQyxVQUFEO0FBQ0Usc0JBREY7QUFFRSxrQkFBUyxlQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUM7QUFIWixPQUlNaEIsUUFKTjtBQUtFLE1BQUEsT0FBTyxFQUFFNEI7QUFMWCxxQkFPRSxnQ0FBQyxhQUFELENBQWUsS0FBZjtBQUFxQixNQUFBLE1BQU0sRUFBRU47QUFBN0IsTUFQRixlQVFFLGdDQUFDLDBCQUFEO0FBQVMsTUFBQSxFQUFFLEVBQUMsZUFBWjtBQUE0QixNQUFBLEtBQUssRUFBQyxLQUFsQztBQUF3QyxNQUFBLFNBQVMsRUFBRTlELFVBQW5EO0FBQStELE1BQUEsTUFBTSxFQUFDO0FBQXRFLG9CQUNFLDhDQUFPLDZCQUFhcUIsS0FBYixFQUFvQixDQUFwQixDQUFQLE1BREYsQ0FSRixDQURGLEVBYUcwQyxxQkFBcUIsZ0JBQ3BCLGdDQUFDLG9CQUFEO0FBQ0UsTUFBQSxNQUFNLEVBQUVLLHVCQURWO0FBRUUsTUFBQSxvQkFBb0IsRUFBRVosb0JBRnhCO0FBR0UsTUFBQSxLQUFLLEVBQUVuQztBQUhULE1BRG9CLEdBTWxCLElBbkJOLENBM0NKLEVBbUVHNEMsMEJBQTBCLEdBQUcsSUFBSCxnQkFDekIsZ0NBQUMsVUFBRDtBQUNFLHNCQURGO0FBRUUsa0JBQVMsZUFGWDtBQUdFLE1BQUEsU0FBUyxFQUFDLHlCQUhaO0FBSUUsTUFBQSxPQUFPLEVBQUVQO0FBSlgsT0FLTWxCLFFBTE4sZ0JBT0UsZ0NBQUMsYUFBRCxDQUFlLEtBQWY7QUFBcUIsTUFBQSxNQUFNLEVBQUVzQjtBQUE3QixNQVBGLGVBUUUsZ0NBQUMsMEJBQUQ7QUFBUyxNQUFBLEVBQUUsRUFBQyxlQUFaO0FBQTRCLE1BQUEsS0FBSyxFQUFDLEtBQWxDO0FBQXdDLE1BQUEsU0FBUyxFQUFFOUQsVUFBbkQ7QUFBK0QsTUFBQSxNQUFNLEVBQUM7QUFBdEUsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUM7QUFBckIsTUFERixDQVJGLENBcEVKLEVBbUZHaUUsMEJBQTBCLEdBQUcsSUFBSCxnQkFDekIsZ0NBQUMsVUFBRDtBQUNFLHNCQURGO0FBRUUsa0JBQVMsb0JBRlg7QUFHRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyx5QkFBWCxFQUFzQztBQUFDTyxRQUFBQSxNQUFNLEVBQUVwQjtBQUFULE9BQXRDLENBSGI7QUFJRSxNQUFBLE9BQU8sRUFBRUEsV0FBVyxHQUFHSyxjQUFILEdBQW9CRSxjQUoxQztBQUtFLE1BQUEsSUFBSSxFQUFFSTtBQUxSLE9BTU12QixRQU5OLEdBUUdZLFdBQVcsZ0JBQ1YsZ0NBQUMsYUFBRCxDQUFlLEtBQWY7QUFBcUIsTUFBQSxNQUFNLEVBQUVVO0FBQTdCLE1BRFUsZ0JBR1YsZ0NBQUMsYUFBRCxDQUFlLElBQWY7QUFBb0IsTUFBQSxNQUFNLEVBQUVBO0FBQTVCLE1BWEosZUFhRSxnQ0FBQywwQkFBRDtBQUFTLE1BQUEsRUFBRSxFQUFDLG9CQUFaO0FBQWlDLE1BQUEsS0FBSyxFQUFDLEtBQXZDO0FBQTZDLE1BQUEsU0FBUyxFQUFFOUQsVUFBeEQ7QUFBb0UsTUFBQSxNQUFNLEVBQUM7QUFBM0Usb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVvRCxXQUFXLEdBQUcsZUFBSCxHQUFxQjtBQUF0RCxNQURGLENBYkYsQ0FwRkosQ0FERjtBQXlHRCxHQTFJRDs7QUEySUEsU0FBT0YsZ0JBQVA7QUFDRDs7ZUFFY0osdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0J1dHRvbiwgVG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEFuaW1hdGlvblNwZWVkU2xpZGVyRmFjdG9yeSBmcm9tICcuL2FuaW1hdGlvbi1zcGVlZC1zbGlkZXInO1xuaW1wb3J0IHtSZXNldCwgUGxheSwgUGF1c2UsIFJvY2tldCwgQW5jaG9yV2luZG93LCBGcmVlV2luZG93fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0FOSU1BVElPTl9XSU5ET1d9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7cHJlY2lzZVJvdW5kfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgREVMQVlfU0hPVyA9IDUwMDtcbmNvbnN0IERFRkFVTFRfQlVUVE9OX0hFSUdIVCA9ICcyMHB4JztcblxuY29uc3QgU3R5bGVkQW5pbWF0aW9uQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRTcGVlZENvbnRyb2wgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtc2xpZGVyIHtcbiAgICBsZWZ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbkJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICB3aWR0aDogJHtwcm9wcyA9PiAocHJvcHMuY29sbGFwc2VkID8gMCA6IDMyKX1weDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wbGF5YmFja0J1dHRvbkNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wbGF5YmFja0J1dHRvbkJnQ29sb3J9O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcblxuICAuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XG4gIH1cbiAgc3ZnIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGxheWJhY2tCdXR0b25BY3RCZ0NvbG9yfTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gbm9wKCkge31cbmNvbnN0IERFRkFVTFRfSUNPTlMgPSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xuICByZXNldDogXyA9PiA8UmVzZXQgaGVpZ2h0PVwiMThweFwiIC8+LFxuICBwbGF5OiBfID0+IDxQbGF5IGhlaWdodD1cIjE4cHhcIiAvPixcbiAgcGF1c2U6IF8gPT4gPFBhdXNlIGhlaWdodD1cIjE4cHhcIiAvPixcbiAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbiAgc3BlZWQ6IFJvY2tldCxcbiAgYW5pbWF0aW9uRnJlZTogRnJlZVdpbmRvdyxcbiAgYW5pbWF0aW9uSW5jcmVtZW50YWw6IEFuY2hvcldpbmRvd1xufTtcblxuY29uc3QgREVGQVVMVF9BTklNQVRFX0lURU1TID0ge1xuICBbQU5JTUFUSU9OX1dJTkRPVy5mcmVlXToge1xuICAgIGlkOiBBTklNQVRJT05fV0lORE9XLmZyZWUsXG4gICAgaWNvbjogREVGQVVMVF9JQ09OUy5hbmltYXRpb25GcmVlLFxuICAgIHRvb2x0aXA6ICd0b29sdGlwLmFuaW1hdGlvbkJ5V2luZG93J1xuICB9LFxuICBbQU5JTUFUSU9OX1dJTkRPVy5pbmNyZW1lbnRhbF06IHtcbiAgICBpZDogQU5JTUFUSU9OX1dJTkRPVy5pbmNyZW1lbnRhbCxcbiAgICBpY29uOiBERUZBVUxUX0lDT05TLmFuaW1hdGlvbkluY3JlbWVudGFsLFxuICAgIHRvb2x0aXA6ICd0b29sdGlwLmFuaW1hdGlvbkJ5SW5jcmVtZW50YWwnXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBBbmltYXRpb25XaW5kb3dDb250cm9sID0gKHtcbiAgb25DbGljayxcbiAgc2VsZWN0ZWQsXG4gIG9uSGlkZSxcbiAgaGVpZ2h0LFxuICBhbmltYXRpb25JdGVtcyxcbiAgYnRuU3R5bGUgPSB7fVxufSkgPT4gKFxuICA8ZGl2PlxuICAgIHtPYmplY3QudmFsdWVzKGFuaW1hdGlvbkl0ZW1zKVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IHNlbGVjdGVkKVxuICAgICAgLm1hcChpdGVtID0+IChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICBkYXRhLWZvcj17YCR7aXRlbS5pZH0tdG9vbHRpcGB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGxheWJhY2stY29udHJvbC1idXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIG9uQ2xpY2soaXRlbS5pZCk7XG4gICAgICAgICAgICBvbkhpZGUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpdGVtLmljb24gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgICAge2l0ZW0udG9vbHRpcCA/IChcbiAgICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHtpdGVtLmlkfS10b29sdGlwYH0gZWZmZWN0PVwic29saWRcIiBwbGFjZT1cInRvcFwiPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aXRlbS50b29sdGlwfSAvPlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApKX1cbiAgPC9kaXY+XG4pO1xuXG5QbGF5YmFja0NvbnRyb2xzRmFjdG9yeS5kZXBzID0gW0FuaW1hdGlvblNwZWVkU2xpZGVyRmFjdG9yeV07XG5mdW5jdGlvbiBQbGF5YmFja0NvbnRyb2xzRmFjdG9yeShBbmltYXRpb25TcGVlZFNsaWRlcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBjb25zdCBQbGF5YmFja0NvbnRyb2xzID0gKHtcbiAgICBpc0FuaW1hdGFibGUgPSB0cnVlLFxuICAgIGlzQW5pbWF0aW5nLFxuICAgIHdpZHRoLFxuICAgIHNwZWVkLFxuICAgIGFuaW1hdGlvbldpbmRvdyA9IEFOSU1BVElPTl9XSU5ET1cuZnJlZSxcbiAgICBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3csXG4gICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQsXG4gICAgcGF1c2VBbmltYXRpb24gPSBub3AsXG4gICAgcmVzZXRBbmltYXRpb24gPSBub3AsXG4gICAgc3RhcnRBbmltYXRpb24gPSBub3AsXG4gICAgcGxheWJhY2tJY29ucyA9IERFRkFVTFRfSUNPTlMsXG4gICAgYW5pbWF0aW9uSXRlbXMgPSBERUZBVUxUX0FOSU1BVEVfSVRFTVMsXG4gICAgYnV0dG9uU3R5bGUgPSAnc2Vjb25kYXJ5JyxcbiAgICBidXR0b25IZWlnaHQgPSBERUZBVUxUX0JVVFRPTl9IRUlHSFRcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtpc1NwZWVkQ29udHJvbFZpc2libGUsIHRvZ2dsZVNwZWVkQ29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dBbmltYXRpb25XaW5kb3dDb250cm9sLCBzZXRTaG93QW5pbWF0aW9uV2luZG93Q29udHJvbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVBbmltYXRpb25XaW5kb3dDb250cm9sID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0U2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2woIXNob3dBbmltYXRpb25XaW5kb3dDb250cm9sKTtcbiAgICB9LCBbc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wsIHNldFNob3dBbmltYXRpb25XaW5kb3dDb250cm9sXSk7XG4gICAgY29uc3QgYnRuU3R5bGUgPSBidXR0b25TdHlsZSA/IHtbYnV0dG9uU3R5bGVdOiB0cnVlfSA6IHt9O1xuXG4gICAgY29uc3QgaGlkZUFuZFNob3dTcGVlZENvbnRyb2wgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoIWlzU3BlZWRDb250cm9sVmlzaWJsZSkge1xuICAgICAgICB0b2dnbGVTcGVlZENvbnRyb2wodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUT0RPOiBBIEhBQ0sgdG8gYWxsb3cgaW5wdXQgb25ibHVyIGdldCB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBpbnB1dCBpcyB1bm1vdW50ZWRcbiAgICAgICAgLy8gQSBiZXR0ZXIgc29sdXRpb24gc2hvdWxkIGJlIGludmVzdGVkLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMjM2M1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0b2dnbGVTcGVlZENvbnRyb2woZmFsc2UpLCAyMDApO1xuICAgICAgfVxuICAgIH0sIFtpc1NwZWVkQ29udHJvbFZpc2libGUsIHRvZ2dsZVNwZWVkQ29udHJvbF0pO1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkQW5pbWF0aW9uQ29udHJvbHNcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwbGF5YmFjay1jb250cm9scycsIHtcbiAgICAgICAgICBkaXNhYmxlZDogIWlzQW5pbWF0YWJsZVxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cbiAgICAgID5cbiAgICAgICAgey8qKiBXaW5kb3cgKi99XG4gICAgICAgIHtzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3cgPyAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgICBkYXRhLWZvcj1cImFuaW1hdGUtd2luZG93XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncGxheWJhY2stY29udHJvbC1idXR0b24nLCB7YWN0aXZlOiBzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbH0pfVxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbH1cbiAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbkl0ZW1zW2FuaW1hdGlvbldpbmRvd10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBXaW5kb3dJY29uID0gYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS5pY29uO1xuICAgICAgICAgICAgICAgIHJldHVybiA8V2luZG93SWNvbiBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAge2FuaW1hdGlvbkl0ZW1zW2FuaW1hdGlvbldpbmRvd10gJiYgYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS50b29sdGlwID8gKFxuICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cImFuaW1hdGUtd2luZG93XCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9ezUwMH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS50b29sdGlwfSAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHtzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCA/IChcbiAgICAgICAgICA8QW5pbWF0aW9uV2luZG93Q29udHJvbFxuICAgICAgICAgICAgb25DbGljaz17c2V0RmlsdGVyQW5pbWF0aW9uV2luZG93fVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e2FuaW1hdGlvbldpbmRvd31cbiAgICAgICAgICAgIG9uSGlkZT17dG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbH1cbiAgICAgICAgICAgIGhlaWdodD17YnV0dG9uSGVpZ2h0fVxuICAgICAgICAgICAgYnRuU3R5bGU9e2J0blN0eWxlfVxuICAgICAgICAgICAgYW5pbWF0aW9uSXRlbXM9e2FuaW1hdGlvbkl0ZW1zfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHsvKiogU3BlZWQgKi99XG4gICAgICAgIHtzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCB8fCAhdXBkYXRlQW5pbWF0aW9uU3BlZWQgPyBudWxsIDogKFxuICAgICAgICAgIDxTdHlsZWRTcGVlZENvbnRyb2w+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgICBkYXRhLWZvcj1cImFuaW1hdGUtc3BlZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5YmFjay1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGlkZUFuZFNob3dTcGVlZENvbnRyb2x9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwbGF5YmFja0ljb25zLnNwZWVkIGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICAgICAgICA8VG9vbHRpcCBpZD1cImFuaW1hdGUtc3BlZWRcIiBwbGFjZT1cInRvcFwiIGRlbGF5U2hvdz17REVMQVlfU0hPV30gZWZmZWN0PVwic29saWRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57cHJlY2lzZVJvdW5kKHNwZWVkLCAxKX14PC9zcGFuPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICB7aXNTcGVlZENvbnRyb2xWaXNpYmxlID8gKFxuICAgICAgICAgICAgICA8QW5pbWF0aW9uU3BlZWRTbGlkZXJcbiAgICAgICAgICAgICAgICBvbkhpZGU9e2hpZGVBbmRTaG93U3BlZWRDb250cm9sfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt1cGRhdGVBbmltYXRpb25TcGVlZH1cbiAgICAgICAgICAgICAgICBzcGVlZD17c3BlZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L1N0eWxlZFNwZWVkQ29udHJvbD5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyoqIFJlc2V0ICovfVxuICAgICAgICB7c2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wgPyBudWxsIDogKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgZGF0YS1mb3I9XCJhbmltYXRlLXJlc2V0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXliYWNrLWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0QW5pbWF0aW9ufVxuICAgICAgICAgICAgey4uLmJ0blN0eWxlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwbGF5YmFja0ljb25zLnJlc2V0IGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJhbmltYXRlLXJlc2V0XCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9e0RFTEFZX1NIT1d9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9vbHRpcC5yZXNldFwiIC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiogUGxheSBhbmQgcGF1c2UgKi99XG4gICAgICAgIHtzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCA/IG51bGwgOiAoXG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgICBkYXRhLWZvcj1cImFuaW1hdGUtcGxheS1wYXVzZVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BsYXliYWNrLWNvbnRyb2wtYnV0dG9uJywge2FjdGl2ZTogaXNBbmltYXRpbmd9KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2lzQW5pbWF0aW5nID8gcGF1c2VBbmltYXRpb24gOiBzdGFydEFuaW1hdGlvbn1cbiAgICAgICAgICAgIGhpZGU9e2lzU3BlZWRDb250cm9sVmlzaWJsZX1cbiAgICAgICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNBbmltYXRpbmcgPyAoXG4gICAgICAgICAgICAgIDxwbGF5YmFja0ljb25zLnBhdXNlIGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHBsYXliYWNrSWNvbnMucGxheSBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cImFuaW1hdGUtcGxheS1wYXVzZVwiIHBsYWNlPVwidG9wXCIgZGVsYXlTaG93PXtERUxBWV9TSE9XfSBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aXNBbmltYXRpbmcgPyAndG9vbHRpcC5wYXVzZScgOiAndG9vbHRpcC5wbGF5J30gLz5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L1N0eWxlZEFuaW1hdGlvbkNvbnRyb2xzPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBQbGF5YmFja0NvbnRyb2xzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5YmFja0NvbnRyb2xzRmFjdG9yeTtcbiJdfQ==