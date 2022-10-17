"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPosition = getPosition;
exports.usePosition = usePosition;
exports["default"] = MapPopoverFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _layerHoverInfo = _interopRequireDefault(require("./layer-hover-info"));

var _coordinateInfo = _interopRequireDefault(require("./coordinate-info"));

var _icons = require("../common/icons");

var _errorBoundary = _interopRequireDefault(require("../common/error-boundary"));

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MAX_WIDTH = 500;
var MAX_HEIGHT = 600;

var StyledMapPopover = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  font-size: 11px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  z-index: 1000;\n  position: absolute;\n  overflow-x: auto;\n  box-shadow: ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  .gutter {\n    height: 6px;\n    margin-bottom: 20px;\n  }\n\n  .primary-label {\n    color: ", ";\n    position: absolute;\n    right: 18px;\n    top: 10px;\n    font-size: 10px;\n  }\n\n  table {\n    margin: 2px 12px 12px 12px;\n    width: auto;\n\n    tbody {\n      border-top: transparent;\n      border-bottom: transparent;\n    }\n\n    td {\n      border-color: transparent;\n      padding: 4px;\n      color: ", ";\n    }\n\n    td.row__value {\n      text-align: right;\n      font-weight: 500;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return "".concat(props.theme.panelBackground, "dd");
}, function (props) {
  return props.theme.notificationColors.success;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledIcon = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 50%;\n  transform: rotate(30deg);\n  top: 10px;\n  color: ", ";\n\n  &.popover-arrow-left {\n    left: 40%;\n    transform: rotate(0deg);\n  }\n\n  &.popover-arrow-right {\n    left: 60%;\n    transform: rotate(0deg);\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.linkBtnColor;
});

MapPopoverFactory.deps = [_layerHoverInfo["default"], _coordinateInfo["default"]];

function getPosition(_ref) {
  var x = _ref.x,
      y = _ref.y,
      mapW = _ref.mapW,
      mapH = _ref.mapH,
      width = _ref.width,
      height = _ref.height,
      isLeft = _ref.isLeft;
  var topOffset = 20;
  var leftOffset = 20;

  if (![x, y, mapW, mapH, width, height].every(Number.isFinite)) {
    return {};
  }

  var pos = {};

  if (x + leftOffset + width > mapW || isLeft) {
    pos.right = mapW - x + leftOffset;
  } else {
    pos.left = x + leftOffset;
  }

  if (y + topOffset + height > mapH) {
    pos.bottom = 10;
  } else {
    pos.top = y + topOffset;
  }

  return pos;
}

function hasPosChanged(_ref2) {
  var _ref2$oldPos = _ref2.oldPos,
      oldPos = _ref2$oldPos === void 0 ? {} : _ref2$oldPos,
      _ref2$newPos = _ref2.newPos,
      newPos = _ref2$newPos === void 0 ? {} : _ref2$newPos;

  for (var key in newPos) {
    if (oldPos[key] !== newPos[key]) {
      return true;
    }
  }

  for (var _key in oldPos) {
    if (oldPos[_key] !== newPos[_key]) {
      return true;
    }
  }

  return false;
} // hooks


function usePosition(_ref3, popover) {
  var layerHoverProp = _ref3.layerHoverProp,
      x = _ref3.x,
      y = _ref3.y,
      mapW = _ref3.mapW,
      mapH = _ref3.mapH;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isLeft = _useState2[0],
      setIsLeft = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      pos = _useState4[0],
      setPosition = _useState4[1];

  var moveLeft = (0, _react.useCallback)(function () {
    return setIsLeft(true);
  }, [setIsLeft]);
  var moveRight = (0, _react.useCallback)(function () {
    return setIsLeft(false);
  }, [setIsLeft]);
  var hoverData = layerHoverProp && layerHoverProp.data;
  (0, _react.useLayoutEffect)(function () {
    var node = popover.current;

    if (!node || !hoverData) {
      return;
    }

    var width = Math.round(node.offsetWidth);
    var height = Math.round(node.offsetHeight);

    if (Number.isFinite(width) && width > 0 && Number.isFinite(height) && height > 0) {
      var newPos = getPosition({
        x: x,
        y: y,
        mapW: mapW,
        mapH: mapH,
        width: width,
        height: height,
        isLeft: isLeft
      });

      if (hasPosChanged({
        oldPos: pos,
        newPos: newPos
      })) {
        setPosition(newPos);
      }
    }
  }, [x, y, mapH, mapW, isLeft, hoverData, pos, popover]);
  return {
    moveLeft: moveLeft,
    moveRight: moveRight,
    isLeft: isLeft,
    pos: pos
  };
}

function MapPopoverFactory(LayerHoverInfo, CoordinateInfo) {
  /** @type {typeof import('./map-popover').MapPopover} */
  var MapPopover = function MapPopover(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        mapW = _ref4.mapW,
        mapH = _ref4.mapH,
        frozen = _ref4.frozen,
        coordinate = _ref4.coordinate,
        layerHoverProp = _ref4.layerHoverProp,
        isBase = _ref4.isBase,
        zoom = _ref4.zoom,
        onClose = _ref4.onClose;
    var popover = (0, _react.useRef)(null);

    var _usePosition = usePosition({
      layerHoverProp: layerHoverProp,
      x: x,
      y: y,
      mapW: mapW,
      mapH: mapH
    }, popover),
        moveLeft = _usePosition.moveLeft,
        moveRight = _usePosition.moveRight,
        isLeft = _usePosition.isLeft,
        pos = _usePosition.pos;

    return /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(StyledMapPopover, {
      ref: popover,
      className: "map-popover",
      style: _objectSpread(_objectSpread({}, pos), {}, {
        maxWidth: MAX_WIDTH,
        maxHeight: MAX_HEIGHT
      })
    }, frozen ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-popover__top"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "gutter"
    }), !isLeft && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
      className: "popover-arrow-left",
      onClick: moveLeft
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, null)), /*#__PURE__*/_react["default"].createElement(StyledIcon, {
      className: "popover-pin",
      onClick: onClose
    }, /*#__PURE__*/_react["default"].createElement(_icons.Pin, {
      height: "16px"
    })), isLeft && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
      className: "popover-arrow-right",
      onClick: moveRight
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, null)), isBase && /*#__PURE__*/_react["default"].createElement("div", {
      className: "primary-label"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "mapPopover.primary"
    }))) : null, Array.isArray(coordinate) && /*#__PURE__*/_react["default"].createElement(CoordinateInfo, {
      coordinate: coordinate,
      zoom: zoom
    }), layerHoverProp && /*#__PURE__*/_react["default"].createElement(LayerHoverInfo, layerHoverProp)));
  };

  return (0, _reactIntl.injectIntl)(MapPopover);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJNQVhfV0lEVEgiLCJNQVhfSEVJR0hUIiwiU3R5bGVkTWFwUG9wb3ZlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzY3JvbGxCYXIiLCJwYW5lbEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJwYW5lbEJveFNoYWRvdyIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsInN1Y2Nlc3MiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZEljb24iLCJhY3RpdmVDb2xvciIsImxpbmtCdG5Db2xvciIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVySG92ZXJJbmZvRmFjdG9yeSIsIkNvb3JkaW5hdGVJbmZvRmFjdG9yeSIsImdldFBvc2l0aW9uIiwieCIsInkiLCJtYXBXIiwibWFwSCIsIndpZHRoIiwiaGVpZ2h0IiwiaXNMZWZ0IiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJwb3MiLCJyaWdodCIsImxlZnQiLCJib3R0b20iLCJ0b3AiLCJoYXNQb3NDaGFuZ2VkIiwib2xkUG9zIiwibmV3UG9zIiwia2V5IiwidXNlUG9zaXRpb24iLCJwb3BvdmVyIiwibGF5ZXJIb3ZlclByb3AiLCJzZXRJc0xlZnQiLCJzZXRQb3NpdGlvbiIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwiaG92ZXJEYXRhIiwiZGF0YSIsIm5vZGUiLCJjdXJyZW50IiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJMYXllckhvdmVySW5mbyIsIkNvb3JkaW5hdGVJbmZvIiwiTWFwUG9wb3ZlciIsImZyb3plbiIsImNvb3JkaW5hdGUiLCJpc0Jhc2UiLCJ6b29tIiwib25DbG9zZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiQXJyYXkiLCJpc0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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QUFJLEVBQUVFO0FBQTlDLE1BaENoQyxFQWlDR25CLGNBQWMsaUJBQUksZ0NBQUMsY0FBRCxFQUFvQkEsY0FBcEIsQ0FqQ3JCLENBREYsQ0FERjtBQXVDRCxHQXpERDs7QUEyREEsU0FBTywyQkFBV2UsVUFBWCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMYXllckhvdmVySW5mb0ZhY3RvcnkgZnJvbSAnLi9sYXllci1ob3Zlci1pbmZvJztcbmltcG9ydCBDb29yZGluYXRlSW5mb0ZhY3RvcnkgZnJvbSAnLi9jb29yZGluYXRlLWluZm8nO1xuaW1wb3J0IHtQaW4sIEFycm93TGVmdCwgQXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZXJyb3ItYm91bmRhcnknO1xuaW1wb3J0IHtpbmplY3RJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgTUFYX1dJRFRIID0gNTAwO1xuY29uc3QgTUFYX0hFSUdIVCA9IDYwMDtcblxuY29uc3QgU3R5bGVkTWFwUG9wb3ZlciA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Nyb2xsQmFyfTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvd307XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGAke3Byb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH1kZGB9O1xuICB9XG5cbiAgLmd1dHRlciB7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5wcmltYXJ5LWxhYmVsIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25Db2xvcnMuc3VjY2Vzc307XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgbWFyZ2luOiAycHggMTJweCAxMnB4IDEycHg7XG4gICAgd2lkdGg6IGF1dG87XG5cbiAgICB0Ym9keSB7XG4gICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cblxuICAgIHRkLnJvd19fdmFsdWUge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuXG4gICYucG9wb3Zlci1hcnJvdy1sZWZ0IHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAmLnBvcG92ZXItYXJyb3ctcmlnaHQge1xuICAgIGxlZnQ6IDYwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gIH1cbmA7XG5cbk1hcFBvcG92ZXJGYWN0b3J5LmRlcHMgPSBbTGF5ZXJIb3ZlckluZm9GYWN0b3J5LCBDb29yZGluYXRlSW5mb0ZhY3RvcnldO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oe3gsIHksIG1hcFcsIG1hcEgsIHdpZHRoLCBoZWlnaHQsIGlzTGVmdH0pIHtcbiAgY29uc3QgdG9wT2Zmc2V0ID0gMjA7XG4gIGNvbnN0IGxlZnRPZmZzZXQgPSAyMDtcbiAgaWYgKCFbeCwgeSwgbWFwVywgbWFwSCwgd2lkdGgsIGhlaWdodF0uZXZlcnkoTnVtYmVyLmlzRmluaXRlKSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGNvbnN0IHBvcyA9IHt9O1xuICBpZiAoeCArIGxlZnRPZmZzZXQgKyB3aWR0aCA+IG1hcFcgfHwgaXNMZWZ0KSB7XG4gICAgcG9zLnJpZ2h0ID0gbWFwVyAtIHggKyBsZWZ0T2Zmc2V0O1xuICB9IGVsc2Uge1xuICAgIHBvcy5sZWZ0ID0geCArIGxlZnRPZmZzZXQ7XG4gIH1cblxuICBpZiAoeSArIHRvcE9mZnNldCArIGhlaWdodCA+IG1hcEgpIHtcbiAgICBwb3MuYm90dG9tID0gMTA7XG4gIH0gZWxzZSB7XG4gICAgcG9zLnRvcCA9IHkgKyB0b3BPZmZzZXQ7XG4gIH1cblxuICByZXR1cm4gcG9zO1xufVxuXG5mdW5jdGlvbiBoYXNQb3NDaGFuZ2VkKHtvbGRQb3MgPSB7fSwgbmV3UG9zID0ge319KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG5ld1Bvcykge1xuICAgIGlmIChvbGRQb3Nba2V5XSAhPT0gbmV3UG9zW2tleV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBvbGRQb3MpIHtcbiAgICBpZiAob2xkUG9zW2tleV0gIT09IG5ld1Bvc1trZXldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBob29rc1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBvc2l0aW9uKHtsYXllckhvdmVyUHJvcCwgeCwgeSwgbWFwVywgbWFwSH0sIHBvcG92ZXIpIHtcbiAgY29uc3QgW2lzTGVmdCwgc2V0SXNMZWZ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bvcywgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IG1vdmVMZWZ0ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNMZWZ0KHRydWUpLCBbc2V0SXNMZWZ0XSk7XG4gIGNvbnN0IG1vdmVSaWdodCA9IHVzZUNhbGxiYWNrKCgpID0+IHNldElzTGVmdChmYWxzZSksIFtzZXRJc0xlZnRdKTtcbiAgY29uc3QgaG92ZXJEYXRhID0gbGF5ZXJIb3ZlclByb3AgJiYgbGF5ZXJIb3ZlclByb3AuZGF0YTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBwb3BvdmVyLmN1cnJlbnQ7XG5cbiAgICBpZiAoIW5vZGUgfHwgIWhvdmVyRGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5yb3VuZChub2RlLm9mZnNldFdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLnJvdW5kKG5vZGUub2Zmc2V0SGVpZ2h0KTtcblxuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUod2lkdGgpICYmIHdpZHRoID4gMCAmJiBOdW1iZXIuaXNGaW5pdGUoaGVpZ2h0KSAmJiBoZWlnaHQgPiAwKSB7XG4gICAgICBjb25zdCBuZXdQb3MgPSBnZXRQb3NpdGlvbih7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIG1hcFcsXG4gICAgICAgIG1hcEgsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIGlzTGVmdFxuICAgICAgfSk7XG4gICAgICBpZiAoaGFzUG9zQ2hhbmdlZCh7b2xkUG9zOiBwb3MsIG5ld1Bvc30pKSB7XG4gICAgICAgIHNldFBvc2l0aW9uKG5ld1Bvcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbeCwgeSwgbWFwSCwgbWFwVywgaXNMZWZ0LCBob3ZlckRhdGEsIHBvcywgcG9wb3Zlcl0pO1xuXG4gIHJldHVybiB7bW92ZUxlZnQsIG1vdmVSaWdodCwgaXNMZWZ0LCBwb3N9O1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwUG9wb3ZlckZhY3RvcnkoTGF5ZXJIb3ZlckluZm8sIENvb3JkaW5hdGVJbmZvKSB7XG4gIC8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9tYXAtcG9wb3ZlcicpLk1hcFBvcG92ZXJ9ICovXG4gIGNvbnN0IE1hcFBvcG92ZXIgPSAoe1xuICAgIHgsXG4gICAgeSxcbiAgICBtYXBXLFxuICAgIG1hcEgsXG4gICAgZnJvemVuLFxuICAgIGNvb3JkaW5hdGUsXG4gICAgbGF5ZXJIb3ZlclByb3AsXG4gICAgaXNCYXNlLFxuICAgIHpvb20sXG4gICAgb25DbG9zZVxuICB9KSA9PiB7XG4gICAgY29uc3QgcG9wb3ZlciA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7bW92ZUxlZnQsIG1vdmVSaWdodCwgaXNMZWZ0LCBwb3N9ID0gdXNlUG9zaXRpb24oXG4gICAgICB7bGF5ZXJIb3ZlclByb3AsIHgsIHksIG1hcFcsIG1hcEh9LFxuICAgICAgcG9wb3ZlclxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxTdHlsZWRNYXBQb3BvdmVyXG4gICAgICAgICAgcmVmPXtwb3BvdmVyfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4ucG9zLFxuICAgICAgICAgICAgbWF4V2lkdGg6IE1BWF9XSURUSCxcbiAgICAgICAgICAgIG1heEhlaWdodDogTUFYX0hFSUdIVFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZnJvemVuID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fdG9wXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3V0dGVyXCIgLz5cbiAgICAgICAgICAgICAgeyFpc0xlZnQgJiYgKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItYXJyb3ctbGVmdFwiIG9uQ2xpY2s9e21vdmVMZWZ0fT5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd0xlZnQgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBvcG92ZXItcGluXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAgICAgICAgPFBpbiBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxuICAgICAgICAgICAgICB7aXNMZWZ0ICYmIChcbiAgICAgICAgICAgICAgICA8U3R5bGVkSWNvbiBjbGFzc05hbWU9XCJwb3BvdmVyLWFycm93LXJpZ2h0XCIgb25DbGljaz17bW92ZVJpZ2h0fT5cbiAgICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7aXNCYXNlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaW1hcnktbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwibWFwUG9wb3Zlci5wcmltYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGNvb3JkaW5hdGUpICYmIDxDb29yZGluYXRlSW5mbyBjb29yZGluYXRlPXtjb29yZGluYXRlfSB6b29tPXt6b29tfSAvPn1cbiAgICAgICAgICB7bGF5ZXJIb3ZlclByb3AgJiYgPExheWVySG92ZXJJbmZvIHsuLi5sYXllckhvdmVyUHJvcH0gLz59XG4gICAgICAgIDwvU3R5bGVkTWFwUG9wb3Zlcj5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBpbmplY3RJbnRsKE1hcFBvcG92ZXIpO1xufVxuIl19