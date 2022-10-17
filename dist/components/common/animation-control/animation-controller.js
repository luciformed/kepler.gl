"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _console = _interopRequireDefault(require("global/console"));

var _defaultSettings = require("../../../constants/default-settings");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function AnimationControllerFactory() {
  /**
   * 4 Animation Window Types
   * 1. free
   *  |->  |->
   * Current time is a fixed range, animate a moving window that calls next animation frames continuously
   * The increment id based on domain / BASE_SPEED * SPEED
   *
   * 2. incremental
   * |    |->
   * Same as free, current time is a growing range, only the max value of range increment during animation.
   * The increment is also based on domain / BASE_SPEED * SPEED
   *
   * 3. point
   * o -> o
   * Current time is a point, animate a moving point calls next animation frame continuously
   * The increment is based on domain / BASE_SPEED * SPEED
   *
   * 4. interval
   * o ~> o
   * Current time is a point. An array of sorted time steps are provided,
   * animate a moving point jumps to the next step
   */
  var AnimationController = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationController, _Component);

    var _super = _createSuper(AnimationController);

    function AnimationController() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isAnimating: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_timer", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_animate", function (delay) {
        _this._startTime = new Date().getTime();

        var loop = function loop() {
          var current = new Date().getTime(); // @ts-ignore

          var delta = current - _this._startTime;

          if (delta >= delay) {
            _this._nextFrame();

            _this._startTime = new Date().getTime();
          } else {
            _this._timer = (0, _window.requestAnimationFrame)(loop);
          }
        };

        _this._timer = (0, _window.requestAnimationFrame)(loop);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimationByDomain", function () {
        var _this$props = _this.props,
            domain = _this$props.domain,
            value = _this$props.value,
            animationWindow = _this$props.animationWindow;

        if (Array.isArray(value)) {
          if (animationWindow === _defaultSettings.ANIMATION_WINDOW.incremental) {
            _this.props.updateAnimation([value[0], value[0] + 1]);
          } else {
            _this.props.updateAnimation([domain[0], domain[0] + value[1] - value[0]]);
          }
        } else {
          _this.props.updateAnimation(domain[0]);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimtionByTimeStep", function () {
        // go to the first steps
        _this.props.updateAnimation([_this.props.steps[0], 0]);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimation", function () {
        if (_this.props.animationWindow === _defaultSettings.ANIMATION_WINDOW.interval) {
          _this._resetAnimtionByTimeStep();
        } else {
          _this._resetAnimationByDomain();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        var speed = _this.props.speed;

        _this._clearTimer();

        if (speed > 0) {
          if (_this.props.animationWindow === _defaultSettings.ANIMATION_WINDOW.interval) {
            // animate by interval
            // 30*600
            var steps = _this.props.steps;

            if (!Array.isArray(steps) || !steps.length) {
              _console["default"].warn('animation steps should be an array');

              return;
            } // when speed = 1, animation should loop through 600 frames at 60 FPS
            // calculate delay based on # steps


            var delay = _defaultSettings.BASE_SPEED * (1000 / _defaultSettings.FPS) / steps.length / (speed || 1);

            _this._animate(delay);
          } else {
            _this._timer = (0, _window.requestAnimationFrame)(_this._nextFrame);
          }
        }

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_clearTimer", function () {
        if (_this._timer) {
          (0, _window.cancelAnimationFrame)(_this._timer);
          _this._timer = null;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        _this._clearTimer();

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._timer = null;
        var nextValue = _this.props.animationWindow === _defaultSettings.ANIMATION_WINDOW.interval ? _this._nextFrameByTimeStep() : _this._nextFrameByDomain();

        _this.props.updateAnimation(nextValue);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationController, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._timer) {
          (0, _window.cancelAnimationFrame)(this._timer);
        }
      }
    }, {
      key: "_startOrPauseAnimation",
      value: function _startOrPauseAnimation() {
        var _this$props2 = this.props,
            isAnimating = _this$props2.isAnimating,
            speed = _this$props2.speed;

        if (!this._timer && isAnimating && speed > 0) {
          this._startAnimation();
        } else if (this._timer && !isAnimating) {
          this._pauseAnimation();
        }
      }
    }, {
      key: "_nextFrameByDomain",
      value: function _nextFrameByDomain() {
        var _this$props3 = this.props,
            domain = _this$props3.domain,
            value = _this$props3.value,
            speed = _this$props3.speed,
            baseSpeed = _this$props3.baseSpeed,
            animationWindow = _this$props3.animationWindow;
        var delta = (domain[1] - domain[0]) / baseSpeed * speed; // loop when reaches the end
        // current time is a range

        if (Array.isArray(value)) {
          var value0;
          var value1;
          var readEnd = value[1] + delta > domain[1];

          if (animationWindow === _defaultSettings.ANIMATION_WINDOW.incremental) {
            value0 = value[0];
            value1 = readEnd ? value[0] + 1 : value[1] + delta;
          } else {
            value0 = readEnd ? domain[0] : value[0] + delta;
            value1 = value0 + value[1] - value[0];
          }

          return [value0, value1];
        } // current time is a point


        return value + delta > domain[1] ? domain[0] : value + delta;
      }
    }, {
      key: "_nextFrameByTimeStep",
      value: function _nextFrameByTimeStep() {
        var _this$props4 = this.props,
            steps = _this$props4.steps,
            value = _this$props4.value;
        var val = Array.isArray(value) ? value[0] : value;
        var index = (0, _d3Array.bisectLeft)(steps, val);
        var nextIdx = index >= steps.length - 1 ? 0 : index + 1;
        return [steps[nextIdx], nextIdx];
      }
    }, {
      key: "render",
      value: function render() {
        var isAnimating = this.state.isAnimating;
        var children = this.props.children;
        return typeof children === 'function' ? children(isAnimating, this._startAnimation, this._pauseAnimation, this._resetAnimation) : null;
      }
    }]);
    return AnimationController;
  }(_react.Component);

  (0, _defineProperty2["default"])(AnimationController, "defaultProps", {
    baseSpeed: _defaultSettings.BASE_SPEED,
    speed: 1,
    steps: null,
    animationWindow: _defaultSettings.ANIMATION_WINDOW.free
  });
  return AnimationController;
}

var _default = AnimationControllerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9hbmltYXRpb24tY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSIsIkFuaW1hdGlvbkNvbnRyb2xsZXIiLCJpc0FuaW1hdGluZyIsImRlbGF5IiwiX3N0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibG9vcCIsImN1cnJlbnQiLCJkZWx0YSIsIl9uZXh0RnJhbWUiLCJfdGltZXIiLCJwcm9wcyIsImRvbWFpbiIsInZhbHVlIiwiYW5pbWF0aW9uV2luZG93IiwiQXJyYXkiLCJpc0FycmF5IiwiQU5JTUFUSU9OX1dJTkRPVyIsImluY3JlbWVudGFsIiwidXBkYXRlQW5pbWF0aW9uIiwic3RlcHMiLCJpbnRlcnZhbCIsIl9yZXNldEFuaW10aW9uQnlUaW1lU3RlcCIsIl9yZXNldEFuaW1hdGlvbkJ5RG9tYWluIiwic3BlZWQiLCJfY2xlYXJUaW1lciIsImxlbmd0aCIsIkNvbnNvbGUiLCJ3YXJuIiwiQkFTRV9TUEVFRCIsIkZQUyIsIl9hbmltYXRlIiwic2V0U3RhdGUiLCJuZXh0VmFsdWUiLCJfbmV4dEZyYW1lQnlUaW1lU3RlcCIsIl9uZXh0RnJhbWVCeURvbWFpbiIsIl9zdGFydE9yUGF1c2VBbmltYXRpb24iLCJfc3RhcnRBbmltYXRpb24iLCJfcGF1c2VBbmltYXRpb24iLCJiYXNlU3BlZWQiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJyZWFkRW5kIiwidmFsIiwiaW5kZXgiLCJuZXh0SWR4Iiwic3RhdGUiLCJjaGlsZHJlbiIsIl9yZXNldEFuaW1hdGlvbiIsIkNvbXBvbmVudCIsImZyZWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSwwQkFBVCxHQUFzQztBQUNwQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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RyxDQUF4RDtBQUVBLGVBQU8sQ0FBQ3hCLEtBQUssQ0FBQ3lCLE9BQUQsQ0FBTixFQUFpQkEsT0FBakIsQ0FBUDtBQUNEO0FBdExpQztBQUFBO0FBQUEsYUF3TGxDLGtCQUFTO0FBQ1AsWUFBTzVDLFdBQVAsR0FBc0IsS0FBSzZDLEtBQTNCLENBQU83QyxXQUFQO0FBQ0EsWUFBTzhDLFFBQVAsR0FBbUIsS0FBS3BDLEtBQXhCLENBQU9vQyxRQUFQO0FBRUEsZUFBTyxPQUFPQSxRQUFQLEtBQW9CLFVBQXBCLEdBQ0hBLFFBQVEsQ0FBQzlDLFdBQUQsRUFBYyxLQUFLb0MsZUFBbkIsRUFBb0MsS0FBS0MsZUFBekMsRUFBMEQsS0FBS1UsZUFBL0QsQ0FETCxHQUVILElBRko7QUFHRDtBQS9MaUM7QUFBQTtBQUFBLElBdUJGQyxnQkF2QkU7O0FBQUEsbUNBdUI5QmpELG1CQXZCOEIsa0JBeUJaO0FBQ3BCdUMsSUFBQUEsU0FBUyxFQUFFViwyQkFEUztBQUVwQkwsSUFBQUEsS0FBSyxFQUFFLENBRmE7QUFHcEJKLElBQUFBLEtBQUssRUFBRSxJQUhhO0FBSXBCTixJQUFBQSxlQUFlLEVBQUVHLGtDQUFpQmlDO0FBSmQsR0F6Qlk7QUFrTXBDLFNBQU9sRCxtQkFBUDtBQUNEOztlQUVjRCwwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Jpc2VjdExlZnR9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7cmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBjYW5jZWxBbmltYXRpb25GcmFtZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5pbXBvcnQge0JBU0VfU1BFRUQsIEZQUywgQU5JTUFUSU9OX1dJTkRPV30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5mdW5jdGlvbiBBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSgpIHtcbiAgLyoqXG4gICAqIDQgQW5pbWF0aW9uIFdpbmRvdyBUeXBlc1xuICAgKiAxLiBmcmVlXG4gICAqICB8LT4gIHwtPlxuICAgKiBDdXJyZW50IHRpbWUgaXMgYSBmaXhlZCByYW5nZSwgYW5pbWF0ZSBhIG1vdmluZyB3aW5kb3cgdGhhdCBjYWxscyBuZXh0IGFuaW1hdGlvbiBmcmFtZXMgY29udGludW91c2x5XG4gICAqIFRoZSBpbmNyZW1lbnQgaWQgYmFzZWQgb24gZG9tYWluIC8gQkFTRV9TUEVFRCAqIFNQRUVEXG4gICAqXG4gICAqIDIuIGluY3JlbWVudGFsXG4gICAqIHwgICAgfC0+XG4gICAqIFNhbWUgYXMgZnJlZSwgY3VycmVudCB0aW1lIGlzIGEgZ3Jvd2luZyByYW5nZSwgb25seSB0aGUgbWF4IHZhbHVlIG9mIHJhbmdlIGluY3JlbWVudCBkdXJpbmcgYW5pbWF0aW9uLlxuICAgKiBUaGUgaW5jcmVtZW50IGlzIGFsc28gYmFzZWQgb24gZG9tYWluIC8gQkFTRV9TUEVFRCAqIFNQRUVEXG4gICAqXG4gICAqIDMuIHBvaW50XG4gICAqIG8gLT4gb1xuICAgKiBDdXJyZW50IHRpbWUgaXMgYSBwb2ludCwgYW5pbWF0ZSBhIG1vdmluZyBwb2ludCBjYWxscyBuZXh0IGFuaW1hdGlvbiBmcmFtZSBjb250aW51b3VzbHlcbiAgICogVGhlIGluY3JlbWVudCBpcyBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAgICpcbiAgICogNC4gaW50ZXJ2YWxcbiAgICogbyB+PiBvXG4gICAqIEN1cnJlbnQgdGltZSBpcyBhIHBvaW50LiBBbiBhcnJheSBvZiBzb3J0ZWQgdGltZSBzdGVwcyBhcmUgcHJvdmlkZWQsXG4gICAqIGFuaW1hdGUgYSBtb3ZpbmcgcG9pbnQganVtcHMgdG8gdGhlIG5leHQgc3RlcFxuICAgKi9cbiAgY2xhc3MgQW5pbWF0aW9uQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLy8gVE9ETzogY29udmVydCB0aGUgZW50aXJlIGNvbXBvbmVudCB0byB1c2UgaG9va3MgaW4gdGhlIG5leHQgUFJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgYmFzZVNwZWVkOiBCQVNFX1NQRUVELFxuICAgICAgc3BlZWQ6IDEsXG4gICAgICBzdGVwczogbnVsbCxcbiAgICAgIGFuaW1hdGlvbldpbmRvdzogQU5JTUFUSU9OX1dJTkRPVy5mcmVlXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgaXNBbmltYXRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fc3RhcnRPclBhdXNlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5fc3RhcnRPclBhdXNlQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fdGltZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lciA9IG51bGw7XG5cbiAgICBfc3RhcnRPclBhdXNlQW5pbWF0aW9uKCkge1xuICAgICAgY29uc3Qge2lzQW5pbWF0aW5nLCBzcGVlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCF0aGlzLl90aW1lciAmJiBpc0FuaW1hdGluZyAmJiBzcGVlZCA+IDApIHtcbiAgICAgICAgdGhpcy5fc3RhcnRBbmltYXRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdGltZXIgJiYgIWlzQW5pbWF0aW5nKSB7XG4gICAgICAgIHRoaXMuX3BhdXNlQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2FuaW1hdGUgPSBkZWxheSA9PiB7XG4gICAgICB0aGlzLl9zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgY29uc3QgbG9vcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRlbHRhID0gY3VycmVudCAtIHRoaXMuX3N0YXJ0VGltZTtcblxuICAgICAgICBpZiAoZGVsdGEgPj0gZGVsYXkpIHtcbiAgICAgICAgICB0aGlzLl9uZXh0RnJhbWUoKTtcbiAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl90aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fdGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcblxuICAgIF9yZXNldEFuaW1hdGlvbkJ5RG9tYWluID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2RvbWFpbiwgdmFsdWUsIGFuaW1hdGlvbldpbmRvd30gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmIChhbmltYXRpb25XaW5kb3cgPT09IEFOSU1BVElPTl9XSU5ET1cuaW5jcmVtZW50YWwpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvbihbdmFsdWVbMF0sIHZhbHVlWzBdICsgMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uKFtkb21haW5bMF0sIGRvbWFpblswXSArIHZhbHVlWzFdIC0gdmFsdWVbMF1dKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVBbmltYXRpb24oZG9tYWluWzBdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Jlc2V0QW5pbXRpb25CeVRpbWVTdGVwID0gKCkgPT4ge1xuICAgICAgLy8gZ28gdG8gdGhlIGZpcnN0IHN0ZXBzXG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvbihbdGhpcy5wcm9wcy5zdGVwc1swXSwgMF0pO1xuICAgIH07XG5cbiAgICBfcmVzZXRBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hbmltYXRpb25XaW5kb3cgPT09IEFOSU1BVElPTl9XSU5ET1cuaW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRBbmltdGlvbkJ5VGltZVN0ZXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0QW5pbWF0aW9uQnlEb21haW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3N0YXJ0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3Qge3NwZWVkfSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLl9jbGVhclRpbWVyKCk7XG4gICAgICBpZiAoc3BlZWQgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbldpbmRvdyA9PT0gQU5JTUFUSU9OX1dJTkRPVy5pbnRlcnZhbCkge1xuICAgICAgICAgIC8vIGFuaW1hdGUgYnkgaW50ZXJ2YWxcbiAgICAgICAgICAvLyAzMCo2MDBcbiAgICAgICAgICBjb25zdCB7c3RlcHN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RlcHMpIHx8ICFzdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIENvbnNvbGUud2FybignYW5pbWF0aW9uIHN0ZXBzIHNob3VsZCBiZSBhbiBhcnJheScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3aGVuIHNwZWVkID0gMSwgYW5pbWF0aW9uIHNob3VsZCBsb29wIHRocm91Z2ggNjAwIGZyYW1lcyBhdCA2MCBGUFNcbiAgICAgICAgICAvLyBjYWxjdWxhdGUgZGVsYXkgYmFzZWQgb24gIyBzdGVwc1xuICAgICAgICAgIGNvbnN0IGRlbGF5ID0gKEJBU0VfU1BFRUQgKiAoMTAwMCAvIEZQUykpIC8gc3RlcHMubGVuZ3RoIC8gKHNwZWVkIHx8IDEpO1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGUoZGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3RpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX25leHRGcmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lzQW5pbWF0aW5nOiB0cnVlfSk7XG4gICAgfTtcblxuICAgIF9jbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3RpbWVyKTtcbiAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcGF1c2VBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICB0aGlzLl9jbGVhclRpbWVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0FuaW1hdGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgX25leHRGcmFtZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9XG4gICAgICAgIHRoaXMucHJvcHMuYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmludGVydmFsXG4gICAgICAgICAgPyB0aGlzLl9uZXh0RnJhbWVCeVRpbWVTdGVwKClcbiAgICAgICAgICA6IHRoaXMuX25leHRGcmFtZUJ5RG9tYWluKCk7XG5cbiAgICAgIHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uKG5leHRWYWx1ZSk7XG4gICAgfTtcblxuICAgIF9uZXh0RnJhbWVCeURvbWFpbigpIHtcbiAgICAgIGNvbnN0IHtkb21haW4sIHZhbHVlLCBzcGVlZCwgYmFzZVNwZWVkLCBhbmltYXRpb25XaW5kb3d9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRlbHRhID0gKChkb21haW5bMV0gLSBkb21haW5bMF0pIC8gYmFzZVNwZWVkKSAqIHNwZWVkO1xuXG4gICAgICAvLyBsb29wIHdoZW4gcmVhY2hlcyB0aGUgZW5kXG4gICAgICAvLyBjdXJyZW50IHRpbWUgaXMgYSByYW5nZVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCB2YWx1ZTA7XG4gICAgICAgIGxldCB2YWx1ZTE7XG4gICAgICAgIGNvbnN0IHJlYWRFbmQgPSB2YWx1ZVsxXSArIGRlbHRhID4gZG9tYWluWzFdO1xuICAgICAgICBpZiAoYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsKSB7XG4gICAgICAgICAgdmFsdWUwID0gdmFsdWVbMF07XG4gICAgICAgICAgdmFsdWUxID0gcmVhZEVuZCA/IHZhbHVlWzBdICsgMSA6IHZhbHVlWzFdICsgZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUwID0gcmVhZEVuZCA/IGRvbWFpblswXSA6IHZhbHVlWzBdICsgZGVsdGE7XG4gICAgICAgICAgdmFsdWUxID0gdmFsdWUwICsgdmFsdWVbMV0gLSB2YWx1ZVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ZhbHVlMCwgdmFsdWUxXTtcbiAgICAgIH1cblxuICAgICAgLy8gY3VycmVudCB0aW1lIGlzIGEgcG9pbnRcbiAgICAgIHJldHVybiB2YWx1ZSArIGRlbHRhID4gZG9tYWluWzFdID8gZG9tYWluWzBdIDogdmFsdWUgKyBkZWx0YTtcbiAgICB9XG5cbiAgICBfbmV4dEZyYW1lQnlUaW1lU3RlcCgpIHtcbiAgICAgIGNvbnN0IHtzdGVwcywgdmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHZhbCA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZTtcbiAgICAgIGNvbnN0IGluZGV4ID0gYmlzZWN0TGVmdChzdGVwcywgdmFsKTtcbiAgICAgIGNvbnN0IG5leHRJZHggPSBpbmRleCA+PSBzdGVwcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMTtcblxuICAgICAgcmV0dXJuIFtzdGVwc1tuZXh0SWR4XSwgbmV4dElkeF07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzQW5pbWF0aW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkcmVuKGlzQW5pbWF0aW5nLCB0aGlzLl9zdGFydEFuaW1hdGlvbiwgdGhpcy5fcGF1c2VBbmltYXRpb24sIHRoaXMuX3Jlc2V0QW5pbWF0aW9uKVxuICAgICAgICA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEFuaW1hdGlvbkNvbnRyb2xsZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkNvbnRyb2xsZXJGYWN0b3J5O1xuIl19