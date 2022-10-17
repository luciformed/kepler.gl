"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

var _dataUtils = require("../../utils/data-utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledG = _styledComponents["default"].g(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    fill-opacity: ", ";\n  }\n  .handle {\n    fill: ", ";\n    fill-opacity: 0.3;\n  }\n"])), function (props) {
  return props.isRanged ? props.theme.rangeBrushBgd : props.theme.BLUE2;
}, function (props) {
  return props.isRanged ? 0.3 : 1;
}, function (props) {
  return props.theme.BLUE2;
});

function moveRight(startSel, selection) {
  var _startSel = (0, _slicedToArray2["default"])(startSel, 1),
      startSel0 = _startSel[0];

  var _selection = (0, _slicedToArray2["default"])(selection, 1),
      sel0 = _selection[0];

  return Boolean(startSel0 === sel0);
} // style brush resize handle
// https://github.com/crossfilter/crossfilter/blob/gh-pages/index.html#L466


var getHandlePath = function getHandlePath(props) {
  return function brushResizePath(d) {
    var e = Number(d.type === 'e');
    var x = e ? 1 : -1;
    var h = 39;
    var w = 4.5;
    var y = (props.height - h) / 2;
    return "M".concat(0.5 * x, ",").concat(y, "c").concat(2.5 * x, ",0,").concat(w * x, ",2,").concat(w * x, ",").concat(w, "v").concat(h - w * 2, "c0,2.5,").concat(-2 * x, ",").concat(w, ",").concat(-w * x, ",").concat(w, "V").concat(y, "z");
  };
};

function RangeBrushFactory() {
  var RangeBrush = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeBrush, _Component);

    var _super = _createSuper(RangeBrush);

    function RangeBrush() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeBrush);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootContainer", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_brushed", function (evt) {
        var _this2;

        // Ignore brush events which don't have an underlying sourceEvent
        if (!evt.sourceEvent) return;

        var _evt$selection = (0, _slicedToArray2["default"])(evt.selection, 2),
            sel0 = _evt$selection[0],
            sel1 = _evt$selection[1];

        var right = moveRight(_this._startSel, evt.selection);

        var _this$props = _this.props,
            _this$props$range = (0, _slicedToArray2["default"])(_this$props.range, 2),
            min = _this$props$range[0],
            max = _this$props$range[1],
            step = _this$props.step,
            width = _this$props.width,
            marks = _this$props.marks,
            isRanged = _this$props.isRanged;

        var invert = function invert(x) {
          return x * (max - min) / width + min;
        };

        var d0 = invert(sel0);
        var d1 = invert(sel1);
        d0 = (0, _dataUtils.normalizeSliderValue)(d0, min, step, marks);
        d1 = (0, _dataUtils.normalizeSliderValue)(d1, min, step, marks);
        if (isRanged) _this._move(d0, d1);else (_this2 = _this)._move.apply(_this2, (0, _toConsumableArray2["default"])(right ? [d1, d1] : [d0, d0]));
        if (isRanged) _this._onBrush(d0, d1);else _this._onBrush(right ? d1 : d0);
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeBrush, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this;

        // We want the React app to respond to brush state and vice-versa
        // but d3-brush fires the same events for both user-initiated brushing
        // and programmatic brushing (brush.move). We need these flags to
        // distinguish between the uses.
        //
        // We don't use state because that would trigger another `componentDidUpdate`
        var _this$props2 = this.props,
            theme = _this$props2.theme,
            isRanged = _this$props2.isRanged,
            onMouseoverHandle = _this$props2.onMouseoverHandle,
            onMouseoutHandle = _this$props2.onMouseoutHandle;
        this.brushing = false;
        this.moving = false;
        this.root = (0, _d3Selection.select)(this.rootContainer.current);
        this.brush = (0, _d3Brush.brushX)().handleSize(3).on('start', function (event) {
          if (typeof _this3.props.onBrushStart === 'function') _this3.props.onBrushStart();
          _this3._startSel = event.selection;
        }).on('brush', function (event) {
          if (_this3.moving) {
            return;
          }

          if (event.selection) {
            _this3._lastSel = event.selection;
            _this3.brushing = true;

            _this3._brushed(event);
          }
        }).on('end', function (event) {
          if (!event.selection) {
            if (_this3.brushing) {
              // handle null selection
              _this3._click(_this3._lastSel);
            } else if (_this3._startSel) {
              // handle click
              _this3._click(_this3._startSel);
            }
          }

          if (typeof _this3.props.onBrushEnd === 'function') _this3.props.onBrushEnd();
          _this3.brushing = false;
          _this3.moving = false;
        });
        this.root.call(this.brush);
        var brushResizePath = getHandlePath(this.props);
        this.handle = this.root.selectAll('.handle--custom').data([{
          type: 'w'
        }, {
          type: 'e'
        }]).enter().append('path').attr('class', 'handle--custom').attr('display', isRanged ? null : 'none').attr('fill', theme ? theme.sliderHandleColor : '#D3D8E0').attr('cursor', 'ew-resize').attr('d', brushResizePath).on('mouseover', function () {
          if (onMouseoverHandle) onMouseoverHandle();
        }).on('mouseout', function () {
          if (onMouseoutHandle) onMouseoutHandle();
        });

        var _this$props$value = (0, _slicedToArray2["default"])(this.props.value, 2),
            val0 = _this$props$value[0],
            val1 = _this$props$value[1];

        this.moving = true;

        this._move(val0, val1);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props3 = this.props,
            _this$props3$value = (0, _slicedToArray2["default"])(_this$props3.value, 2),
            val0 = _this$props3$value[0],
            val1 = _this$props3$value[1],
            width = _this$props3.width;

        var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
            prevVal0 = _prevProps$value[0],
            prevVal1 = _prevProps$value[1];

        if (prevProps.width !== width) {
          // width change should not trigger this._brushed
          this.moving = true;
          this.root.call(this.brush);

          this._move(val0, val1);
        }

        if (!this.brushing && !this.moving) {
          if (prevVal0 !== val0 || prevVal1 !== val1) {
            this.moving = true;

            this._move(val0, val1);
          }
        }

        if (!this.props.isRanged) {
          this.handle.attr('display', 'none');
        }
      }
    }, {
      key: "_click",
      value: function _click(selection) {
        // fake brush
        this.brushing = true;

        this._brushed({
          sourceEvent: {},
          selection: selection
        });
      }
    }, {
      key: "_move",
      value: function _move(val0, val1) {
        var _this$props4 = this.props,
            _this$props4$range = (0, _slicedToArray2["default"])(_this$props4.range, 2),
            min = _this$props4$range[0],
            max = _this$props4$range[1],
            width = _this$props4.width,
            isRanged = _this$props4.isRanged;

        if (width && max - min) {
          var scale = function scale(x) {
            return (x - min) * width / (max - min);
          };

          if (!isRanged) {
            // only draw a 1 pixel line
            this.brush.move(this.root, [scale(val0), scale(val0) + 1]);
          } else {
            this.brush.move(this.root, [scale(val0), scale(val1)]);
            this.handle.attr('display', null).attr('transform', function (d, i) {
              return "translate(".concat([i === 0 ? scale(val0) : scale(val1), 0], ")");
            });
          }
        }
      }
    }, {
      key: "_onBrush",
      value: function _onBrush(val0, val1) {
        var _this$props5 = this.props,
            isRanged = _this$props5.isRanged,
            _this$props5$value = (0, _slicedToArray2["default"])(_this$props5.value, 2),
            currentVal0 = _this$props5$value[0],
            currentVal1 = _this$props5$value[1];

        if (currentVal0 === val0 && currentVal1 === val1) {
          return;
        }

        if (isRanged) {
          this.props.onBrush(val0, val1);
        } else {
          this.props.onBrush(val0, val0);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var isRanged = this.props.isRanged;
        return /*#__PURE__*/_react["default"].createElement(StyledG, {
          className: "kg-range-slider__brush",
          isRanged: isRanged,
          ref: this.rootContainer
        });
      }
    }]);
    return RangeBrush;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeBrush, "propTypes", {
    onBrush: _propTypes["default"].func.isRequired,
    range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
    width: _propTypes["default"].number.isRequired,
    isRanged: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(RangeBrush, "defaultProps", {
    isRanged: true
  });
  return (0, _styledComponents.withTheme)(RangeBrush);
}

var _default = RangeBrushFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1icnVzaC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRHIiwic3R5bGVkIiwiZyIsInByb3BzIiwiaXNSYW5nZWQiLCJ0aGVtZSIsInJhbmdlQnJ1c2hCZ2QiLCJCTFVFMiIsIm1vdmVSaWdodCIsInN0YXJ0U2VsIiwic2VsZWN0aW9uIiwic3RhcnRTZWwwIiwic2VsMCIsIkJvb2xlYW4iLCJnZXRIYW5kbGVQYXRoIiwiYnJ1c2hSZXNpemVQYXRoIiwiZCIsImUiLCJOdW1iZXIiLCJ0eXBlIiwieCIsImgiLCJ3IiwieSIsImhlaWdodCIsIlJhbmdlQnJ1c2hGYWN0b3J5IiwiUmFuZ2VCcnVzaCIsImV2dCIsInNvdXJjZUV2ZW50Iiwic2VsMSIsInJpZ2h0IiwiX3N0YXJ0U2VsIiwicmFuZ2UiLCJtaW4iLCJtYXgiLCJzdGVwIiwid2lkdGgiLCJtYXJrcyIsImludmVydCIsImQwIiwiZDEiLCJfbW92ZSIsIl9vbkJydXNoIiwib25Nb3VzZW92ZXJIYW5kbGUiLCJvbk1vdXNlb3V0SGFuZGxlIiwiYnJ1c2hpbmciLCJtb3ZpbmciLCJyb290Iiwicm9vdENvbnRhaW5lciIsImN1cnJlbnQiLCJicnVzaCIsImhhbmRsZVNpemUiLCJvbiIsImV2ZW50Iiwib25CcnVzaFN0YXJ0IiwiX2xhc3RTZWwiLCJfYnJ1c2hlZCIsIl9jbGljayIsIm9uQnJ1c2hFbmQiLCJjYWxsIiwiaGFuZGxlIiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsInNsaWRlckhhbmRsZUNvbG9yIiwidmFsdWUiLCJ2YWwwIiwidmFsMSIsInByZXZQcm9wcyIsInByZXZWYWwwIiwicHJldlZhbDEiLCJzY2FsZSIsIm1vdmUiLCJpIiwiY3VycmVudFZhbDAiLCJjdXJyZW50VmFsMSIsIm9uQnJ1c2giLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJudW1i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U0FBTyxpQ0FBVXNCLFVBQVYsQ0FBUDtBQUNEOztlQUVjRCxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge2JydXNoWH0gZnJvbSAnZDMtYnJ1c2gnO1xuaW1wb3J0IHtub3JtYWxpemVTbGlkZXJWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmNvbnN0IFN0eWxlZEcgPSBzdHlsZWQuZ2BcbiAgLnNlbGVjdGlvbiB7XG4gICAgc3Ryb2tlOiBub25lO1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gKHByb3BzLmlzUmFuZ2VkID8gcHJvcHMudGhlbWUucmFuZ2VCcnVzaEJnZCA6IHByb3BzLnRoZW1lLkJMVUUyKX07XG4gICAgZmlsbC1vcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc1JhbmdlZCA/IDAuMyA6IDEpfTtcbiAgfVxuICAuaGFuZGxlIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLkJMVUUyfTtcbiAgICBmaWxsLW9wYWNpdHk6IDAuMztcbiAgfVxuYDtcblxuZnVuY3Rpb24gbW92ZVJpZ2h0KHN0YXJ0U2VsLCBzZWxlY3Rpb24pIHtcbiAgY29uc3QgW3N0YXJ0U2VsMF0gPSBzdGFydFNlbDtcbiAgY29uc3QgW3NlbDBdID0gc2VsZWN0aW9uO1xuXG4gIHJldHVybiBCb29sZWFuKHN0YXJ0U2VsMCA9PT0gc2VsMCk7XG59XG4vLyBzdHlsZSBicnVzaCByZXNpemUgaGFuZGxlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3Jvc3NmaWx0ZXIvY3Jvc3NmaWx0ZXIvYmxvYi9naC1wYWdlcy9pbmRleC5odG1sI0w0NjZcbmNvbnN0IGdldEhhbmRsZVBhdGggPSBwcm9wcyA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiBicnVzaFJlc2l6ZVBhdGgoZCkge1xuICAgIGNvbnN0IGUgPSBOdW1iZXIoZC50eXBlID09PSAnZScpO1xuICAgIGNvbnN0IHggPSBlID8gMSA6IC0xO1xuICAgIGNvbnN0IGggPSAzOTtcbiAgICBjb25zdCB3ID0gNC41O1xuICAgIGNvbnN0IHkgPSAocHJvcHMuaGVpZ2h0IC0gaCkgLyAyO1xuICAgIHJldHVybiBgTSR7MC41ICogeH0sJHt5fWMkezIuNSAqIHh9LDAsJHt3ICogeH0sMiwke3cgKiB4fSwke3d9diR7aCAtIHcgKiAyfWMwLDIuNSwkey0yICpcbiAgICAgIHh9LCR7d30sJHstdyAqIHh9LCR7d31WJHt5fXpgO1xuICB9O1xufTtcblxuZnVuY3Rpb24gUmFuZ2VCcnVzaEZhY3RvcnkoKSB7XG4gIGNsYXNzIFJhbmdlQnJ1c2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBvbkJydXNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBpc1JhbmdlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGlzUmFuZ2VkOiB0cnVlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgUmVhY3QgYXBwIHRvIHJlc3BvbmQgdG8gYnJ1c2ggc3RhdGUgYW5kIHZpY2UtdmVyc2FcbiAgICAgIC8vIGJ1dCBkMy1icnVzaCBmaXJlcyB0aGUgc2FtZSBldmVudHMgZm9yIGJvdGggdXNlci1pbml0aWF0ZWQgYnJ1c2hpbmdcbiAgICAgIC8vIGFuZCBwcm9ncmFtbWF0aWMgYnJ1c2hpbmcgKGJydXNoLm1vdmUpLiBXZSBuZWVkIHRoZXNlIGZsYWdzIHRvXG4gICAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZSB1c2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIGRvbid0IHVzZSBzdGF0ZSBiZWNhdXNlIHRoYXQgd291bGQgdHJpZ2dlciBhbm90aGVyIGBjb21wb25lbnREaWRVcGRhdGVgXG4gICAgICBjb25zdCB7dGhlbWUsIGlzUmFuZ2VkLCBvbk1vdXNlb3ZlckhhbmRsZSwgb25Nb3VzZW91dEhhbmRsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLmJydXNoaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnJvb3QgPSBzZWxlY3QodGhpcy5yb290Q29udGFpbmVyLmN1cnJlbnQpO1xuICAgICAgdGhpcy5icnVzaCA9IGJydXNoWCgpXG4gICAgICAgIC5oYW5kbGVTaXplKDMpXG4gICAgICAgIC5vbignc3RhcnQnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQnJ1c2hTdGFydCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5wcm9wcy5vbkJydXNoU3RhcnQoKTtcbiAgICAgICAgICB0aGlzLl9zdGFydFNlbCA9IGV2ZW50LnNlbGVjdGlvbjtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdicnVzaCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlbCA9IGV2ZW50LnNlbGVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fYnJ1c2hlZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2VuZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIWV2ZW50LnNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnJ1c2hpbmcpIHtcbiAgICAgICAgICAgICAgLy8gaGFuZGxlIG51bGwgc2VsZWN0aW9uXG4gICAgICAgICAgICAgIHRoaXMuX2NsaWNrKHRoaXMuX2xhc3RTZWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zdGFydFNlbCkge1xuICAgICAgICAgICAgICAvLyBoYW5kbGUgY2xpY2tcbiAgICAgICAgICAgICAgdGhpcy5fY2xpY2sodGhpcy5fc3RhcnRTZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkJydXNoRW5kID09PSAnZnVuY3Rpb24nKSB0aGlzLnByb3BzLm9uQnJ1c2hFbmQoKTtcblxuICAgICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy5yb290LmNhbGwodGhpcy5icnVzaCk7XG4gICAgICBjb25zdCBicnVzaFJlc2l6ZVBhdGggPSBnZXRIYW5kbGVQYXRoKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGUgPSB0aGlzLnJvb3RcbiAgICAgICAgLnNlbGVjdEFsbCgnLmhhbmRsZS0tY3VzdG9tJylcbiAgICAgICAgLmRhdGEoW3t0eXBlOiAndyd9LCB7dHlwZTogJ2UnfV0pXG4gICAgICAgIC5lbnRlcigpXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuYXR0cignY2xhc3MnLCAnaGFuZGxlLS1jdXN0b20nKVxuICAgICAgICAuYXR0cignZGlzcGxheScsIGlzUmFuZ2VkID8gbnVsbCA6ICdub25lJylcbiAgICAgICAgLmF0dHIoJ2ZpbGwnLCB0aGVtZSA/IHRoZW1lLnNsaWRlckhhbmRsZUNvbG9yIDogJyNEM0Q4RTAnKVxuICAgICAgICAuYXR0cignY3Vyc29yJywgJ2V3LXJlc2l6ZScpXG4gICAgICAgIC5hdHRyKCdkJywgYnJ1c2hSZXNpemVQYXRoKVxuICAgICAgICAub24oJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICBpZiAob25Nb3VzZW92ZXJIYW5kbGUpIG9uTW91c2VvdmVySGFuZGxlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uTW91c2VvdXRIYW5kbGUpIG9uTW91c2VvdXRIYW5kbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IFt2YWwwLCB2YWwxXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWU6IFt2YWwwLCB2YWwxXSxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgW3ByZXZWYWwwLCBwcmV2VmFsMV0gPSBwcmV2UHJvcHMudmFsdWU7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMud2lkdGggIT09IHdpZHRoKSB7XG4gICAgICAgIC8vIHdpZHRoIGNoYW5nZSBzaG91bGQgbm90IHRyaWdnZXIgdGhpcy5fYnJ1c2hlZFxuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vdC5jYWxsKHRoaXMuYnJ1c2gpO1xuICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuYnJ1c2hpbmcgJiYgIXRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChwcmV2VmFsMCAhPT0gdmFsMCB8fCBwcmV2VmFsMSAhPT0gdmFsMSkge1xuICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc1JhbmdlZCkge1xuICAgICAgICB0aGlzLmhhbmRsZS5hdHRyKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByb290Q29udGFpbmVyID0gY3JlYXRlUmVmKCk7XG5cbiAgICBfY2xpY2soc2VsZWN0aW9uKSB7XG4gICAgICAvLyBmYWtlIGJydXNoXG4gICAgICB0aGlzLmJydXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JydXNoZWQoe3NvdXJjZUV2ZW50OiB7fSwgc2VsZWN0aW9ufSk7XG4gICAgfVxuXG4gICAgX21vdmUodmFsMCwgdmFsMSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICByYW5nZTogW21pbiwgbWF4XSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGlzUmFuZ2VkXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHdpZHRoICYmIG1heCAtIG1pbikge1xuICAgICAgICBjb25zdCBzY2FsZSA9IHggPT4gKCh4IC0gbWluKSAqIHdpZHRoKSAvIChtYXggLSBtaW4pO1xuICAgICAgICBpZiAoIWlzUmFuZ2VkKSB7XG4gICAgICAgICAgLy8gb25seSBkcmF3IGEgMSBwaXhlbCBsaW5lXG4gICAgICAgICAgdGhpcy5icnVzaC5tb3ZlKHRoaXMucm9vdCwgW3NjYWxlKHZhbDApLCBzY2FsZSh2YWwwKSArIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJydXNoLm1vdmUodGhpcy5yb290LCBbc2NhbGUodmFsMCksIHNjYWxlKHZhbDEpXSk7XG5cbiAgICAgICAgICB0aGlzLmhhbmRsZVxuICAgICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBudWxsKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKCR7W2kgPT09IDAgPyBzY2FsZSh2YWwwKSA6IHNjYWxlKHZhbDEpLCAwXX0pYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJ1c2hlZCA9IGV2dCA9PiB7XG4gICAgICAvLyBJZ25vcmUgYnJ1c2ggZXZlbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gdW5kZXJseWluZyBzb3VyY2VFdmVudFxuICAgICAgaWYgKCFldnQuc291cmNlRXZlbnQpIHJldHVybjtcbiAgICAgIGNvbnN0IFtzZWwwLCBzZWwxXSA9IGV2dC5zZWxlY3Rpb247XG4gICAgICBjb25zdCByaWdodCA9IG1vdmVSaWdodCh0aGlzLl9zdGFydFNlbCwgZXZ0LnNlbGVjdGlvbik7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmFuZ2U6IFttaW4sIG1heF0sXG4gICAgICAgIHN0ZXAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBtYXJrcyxcbiAgICAgICAgaXNSYW5nZWRcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaW52ZXJ0ID0geCA9PiAoeCAqIChtYXggLSBtaW4pKSAvIHdpZHRoICsgbWluO1xuICAgICAgbGV0IGQwID0gaW52ZXJ0KHNlbDApO1xuICAgICAgbGV0IGQxID0gaW52ZXJ0KHNlbDEpO1xuXG4gICAgICBkMCA9IG5vcm1hbGl6ZVNsaWRlclZhbHVlKGQwLCBtaW4sIHN0ZXAsIG1hcmtzKTtcbiAgICAgIGQxID0gbm9ybWFsaXplU2xpZGVyVmFsdWUoZDEsIG1pbiwgc3RlcCwgbWFya3MpO1xuXG4gICAgICBpZiAoaXNSYW5nZWQpIHRoaXMuX21vdmUoZDAsIGQxKTtcbiAgICAgIGVsc2UgdGhpcy5fbW92ZSguLi4ocmlnaHQgPyBbZDEsIGQxXSA6IFtkMCwgZDBdKSk7XG5cbiAgICAgIGlmIChpc1JhbmdlZCkgdGhpcy5fb25CcnVzaChkMCwgZDEpO1xuICAgICAgZWxzZSB0aGlzLl9vbkJydXNoKHJpZ2h0ID8gZDEgOiBkMCk7XG4gICAgfTtcblxuICAgIF9vbkJydXNoKHZhbDAsIHZhbDEpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNSYW5nZWQsXG4gICAgICAgIHZhbHVlOiBbY3VycmVudFZhbDAsIGN1cnJlbnRWYWwxXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChjdXJyZW50VmFsMCA9PT0gdmFsMCAmJiBjdXJyZW50VmFsMSA9PT0gdmFsMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1JhbmdlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzUmFuZ2VkfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRyBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2JydXNoXCIgaXNSYW5nZWQ9e2lzUmFuZ2VkfSByZWY9e3RoaXMucm9vdENvbnRhaW5lcn0gLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3aXRoVGhlbWUoUmFuZ2VCcnVzaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlQnJ1c2hGYWN0b3J5O1xuIl19