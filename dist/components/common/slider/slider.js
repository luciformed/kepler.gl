"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _dataUtils = require("../../../utils/data-utils");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n"])));

var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "track", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setAnchor", function (x) {
      // used to calculate delta
      _this._anchor = x;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;

      var val = _this._getValue(minValue, x);

      _this.props.onSlider0Change((0, _dataUtils.clamp)([minValue, value1], val));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var _this$props2 = _this.props,
          minValue = _this$props2.minValue,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;

      var val = _this._getValue(minValue, x);

      _this.props.onSlider1Change((0, _dataUtils.clamp)([value0, maxValue], val));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var _this$props3 = _this.props,
          value0 = _this$props3.value0,
          value1 = _this$props3.value1,
          minValue = _this$props3.minValue,
          maxValue = _this$props3.maxValue; // for slider bar, we use distance delta

      var anchor = _this._anchor;
      var length = value1 - value0; // the length of the selected range shouldn't change when clamping

      var val0 = (0, _dataUtils.clamp)([minValue, maxValue - length], _this._getValue(value0, x - anchor));
      var val1 = (0, _dataUtils.clamp)([val0 + length, maxValue], _this._getValue(value1, x - anchor));

      var deltaX = _this._getDeltaX(val0 - _this.props.value0);

      _this.props.onSliderBarChange(val0, val1); // update anchor


      _this._anchor = _this._anchor + deltaX;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_getBaseDistance",
    value: function _getBaseDistance() {
      return this.props.vertical ? this.ref.current.offsetHeight : this.ref.current.offsetWidth;
    }
  }, {
    key: "_getDeltaVal",
    value: function _getDeltaVal(x) {
      var percent = x / this._getBaseDistance();

      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "_getDeltaX",
    value: function _getDeltaX(v) {
      var percent = v / (this.props.maxValue - this.props.minValue);

      var maxDelta = this._getBaseDistance();

      return percent * maxDelta;
    }
  }, {
    key: "_getValue",
    value: function _getValue(baseV, offset) {
      // offset is the distance between slider handle and track left
      var rawValue = baseV + this._getDeltaVal(offset);

      return this._normalizeValue(rawValue);
    }
  }, {
    key: "_normalizeValue",
    value: function _normalizeValue(val) {
      var _this$props4 = this.props,
          minValue = _this$props4.minValue,
          step = _this$props4.step,
          marks = _this$props4.marks;
      return (0, _dataUtils.normalizeSliderValue)(val, minValue, step, marks);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          classSet = _this$props5.classSet,
          disabled = _this$props5.disabled,
          isRanged = _this$props5.isRanged,
          maxValue = _this$props5.maxValue,
          minValue = _this$props5.minValue,
          value1 = _this$props5.value1,
          vertical = _this$props5.vertical,
          sliderHandleWidth = _this$props5.sliderHandleWidth,
          showTooltip = _this$props5.showTooltip;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread(_objectSpread({}, classSet), {}, {
          disabled: disabled
        })),
        ref: this.ref,
        isRanged: isRanged,
        vertical: vertical
      }, /*#__PURE__*/_react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical,
        ref: this.track
      }, /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical,
        track: this.track,
        setAnchor: this._setAnchor
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJTbGlkZXIiLCJ4IiwiX2FuY2hvciIsInZhbHVlMSIsIm1pblZhbHVlIiwidmFsIiwiX2dldFZhbHVlIiwib25TbGlkZXIwQ2hhbmdlIiwibWF4VmFsdWUiLCJ2YWx1ZTAiLCJvblNsaWRlcjFDaGFuZ2UiLCJhbmNob3IiLCJsZW5ndGgiLCJ2YWwwIiwidmFsMSIsImRlbHRhWCIsIl9nZXREZWx0YVgiLCJvblNsaWRlckJhckNoYW5nZSIsInciLCJsIiwibnVtIiwic2xpZGVySGFuZGxlV2lkdGgiLCJpc1JhbmdlZCIsInJlZiIsImN1cnJlbnQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsInBlcmNlbnQiLCJfZ2V0QmFzZURpc3RhbmNlIiwibWF4RGVsdGEiLCJ2IiwiYmFzZVYiLCJvZmZzZXQiLCJyYXdWYWx1ZSIsIl9nZXREZWx0YVZhbCIsIl9ub3JtYWxpemVWYWx1ZSIsInN0ZXAiLCJtYXJrcyIsImNsYXNzU2V0IiwiZGlzYWJsZWQiLCJzaG93VG9vbHRpcCIsImN1cnJWYWxEZWx0YSIsIndpZHRoIiwidjBMZWZ0IiwidHJhY2siLCJjYWxjSGFuZGxlTGVmdDAiLCJzbGlkZTBMaXN0ZW5lciIsImNhbGNIYW5kbGVMZWZ0MSIsInNsaWRlMUxpc3RlbmVyIiwiZW5hYmxlQmFyRHJhZyIsInNsaWRlckJhckxpc3RlbmVyIiwiX3NldEFuY2hvciIsIkNvbXBvbmVudCIsInRpdGxlIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJvbklucHV0MENoYW5nZSIsIm9uSW5wdXQxQ2hhbmdlIl0s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Qkc7QUFDcEJxRCxFQUFBQSxLQUFLLEVBQUUsRUFEYTtBQUVwQi9CLEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCYixFQUFBQSxNQUFNLEVBQUUsQ0FIWTtBQUlwQk4sRUFBQUEsTUFBTSxFQUFFLEdBSlk7QUFLcEJDLEVBQUFBLFFBQVEsRUFBRSxDQUxVO0FBTXBCSSxFQUFBQSxRQUFRLEVBQUUsR0FOVTtBQU9wQjRCLEVBQUFBLElBQUksRUFBRSxDQVBjO0FBUXBCZixFQUFBQSxpQkFBaUIsRUFBRSxFQVJDO0FBU3BCNEIsRUFBQUEsYUFBYSxFQUFFLEtBVEs7QUFVcEIxQyxFQUFBQSxlQUFlLEVBQUVqQixJQVZHO0FBV3BCcUUsRUFBQUEsY0FBYyxFQUFFckUsSUFYSTtBQVlwQm9CLEVBQUFBLGVBQWUsRUFBRXBCLElBWkc7QUFhcEJzRSxFQUFBQSxjQUFjLEVBQUV0RSxJQWJJO0FBY3BCMkIsRUFBQUEsaUJBQWlCLEVBQUUzQixJQWRDO0FBZXBCaUQsRUFBQUEsUUFBUSxFQUFFLEtBZlU7QUFnQnBCMUMsRUFBQUEsUUFBUSxFQUFFLEtBaEJVO0FBaUJwQjJDLEVBQUFBLFdBQVcsRUFBRTtBQWpCTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2xpZGVySGFuZGxlIGZyb20gJy4vc2xpZGVyLWhhbmRsZSc7XG5pbXBvcnQgU2xpZGVyQmFySGFuZGxlIGZyb20gJy4vc2xpZGVyLWJhci1oYW5kbGUnO1xuaW1wb3J0IHtub3JtYWxpemVTbGlkZXJWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge2NsYW1wfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmNvbnN0IFN0eWxlZFJhbmdlU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJhckJnZH07XG4gICR7cHJvcHMgPT4gYCR7cHJvcHMudmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCd9OiAke3Byb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodH1weGB9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnfTogMTAwJWB9O1xuYDtcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNSYW5nZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlMDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXJCYXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW5hYmxlQmFyRHJhZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1Rvb2x0aXA6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgdmFsdWUwOiAwLFxuICAgIHZhbHVlMTogMTAwLFxuICAgIG1pblZhbHVlOiAwLFxuICAgIG1heFZhbHVlOiAxMDAsXG4gICAgc3RlcDogMSxcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgZW5hYmxlQmFyRHJhZzogZmFsc2UsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBub29wLFxuICAgIG9uSW5wdXQwQ2hhbmdlOiBub29wLFxuICAgIG9uU2xpZGVyMUNoYW5nZTogbm9vcCxcbiAgICBvbklucHV0MUNoYW5nZTogbm9vcCxcbiAgICBvblNsaWRlckJhckNoYW5nZTogbm9vcCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICB9O1xuXG4gIHJlZiA9IGNyZWF0ZVJlZigpO1xuICB0cmFjayA9IGNyZWF0ZVJlZigpO1xuXG4gIF9zZXRBbmNob3IgPSB4ID0+IHtcbiAgICAvLyB1c2VkIHRvIGNhbGN1bGF0ZSBkZWx0YVxuICAgIHRoaXMuX2FuY2hvciA9IHg7XG4gIH07XG5cbiAgX2dldEJhc2VEaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IHRoaXMucmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IDogdGhpcy5yZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIF9nZXREZWx0YVZhbCh4KSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHggLyB0aGlzLl9nZXRCYXNlRGlzdGFuY2UoKTtcbiAgICBjb25zdCBtYXhEZWx0YSA9IHRoaXMucHJvcHMubWF4VmFsdWUgLSB0aGlzLnByb3BzLm1pblZhbHVlO1xuICAgIHJldHVybiBwZXJjZW50ICogbWF4RGVsdGE7XG4gIH1cbiAgX2dldERlbHRhWCh2KSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHYgLyAodGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWUpO1xuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5fZ2V0QmFzZURpc3RhbmNlKCk7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuXG4gIF9nZXRWYWx1ZShiYXNlViwgb2Zmc2V0KSB7XG4gICAgLy8gb2Zmc2V0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHNsaWRlciBoYW5kbGUgYW5kIHRyYWNrIGxlZnRcbiAgICBjb25zdCByYXdWYWx1ZSA9IGJhc2VWICsgdGhpcy5fZ2V0RGVsdGFWYWwob2Zmc2V0KTtcblxuICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVWYWx1ZShyYXdWYWx1ZSk7XG4gIH1cblxuICBfbm9ybWFsaXplVmFsdWUodmFsKSB7XG4gICAgY29uc3Qge21pblZhbHVlLCBzdGVwLCBtYXJrc30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBub3JtYWxpemVTbGlkZXJWYWx1ZSh2YWwsIG1pblZhbHVlLCBzdGVwLCBtYXJrcyk7XG4gIH1cblxuICBzbGlkZTBMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTEsIG1pblZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsID0gdGhpcy5fZ2V0VmFsdWUobWluVmFsdWUsIHgpO1xuICAgIHRoaXMucHJvcHMub25TbGlkZXIwQ2hhbmdlKGNsYW1wKFttaW5WYWx1ZSwgdmFsdWUxXSwgdmFsKSk7XG4gIH07XG5cbiAgc2xpZGUxTGlzdGVuZXIgPSB4ID0+IHtcbiAgICBjb25zdCB7bWluVmFsdWUsIG1heFZhbHVlLCB2YWx1ZTB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWwgPSB0aGlzLl9nZXRWYWx1ZShtaW5WYWx1ZSwgeCk7XG4gICAgdGhpcy5wcm9wcy5vblNsaWRlcjFDaGFuZ2UoY2xhbXAoW3ZhbHVlMCwgbWF4VmFsdWVdLCB2YWwpKTtcbiAgfTtcblxuICBzbGlkZXJCYXJMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTAsIHZhbHVlMSwgbWluVmFsdWUsIG1heFZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZm9yIHNsaWRlciBiYXIsIHdlIHVzZSBkaXN0YW5jZSBkZWx0YVxuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuX2FuY2hvcjtcbiAgICBjb25zdCBsZW5ndGggPSB2YWx1ZTEgLSB2YWx1ZTA7IC8vIHRoZSBsZW5ndGggb2YgdGhlIHNlbGVjdGVkIHJhbmdlIHNob3VsZG4ndCBjaGFuZ2Ugd2hlbiBjbGFtcGluZ1xuICAgIGNvbnN0IHZhbDAgPSBjbGFtcChbbWluVmFsdWUsIG1heFZhbHVlIC0gbGVuZ3RoXSwgdGhpcy5fZ2V0VmFsdWUodmFsdWUwLCB4IC0gYW5jaG9yKSk7XG4gICAgY29uc3QgdmFsMSA9IGNsYW1wKFt2YWwwICsgbGVuZ3RoLCBtYXhWYWx1ZV0sIHRoaXMuX2dldFZhbHVlKHZhbHVlMSwgeCAtIGFuY2hvcikpO1xuXG4gICAgY29uc3QgZGVsdGFYID0gdGhpcy5fZ2V0RGVsdGFYKHZhbDAgLSB0aGlzLnByb3BzLnZhbHVlMCk7XG4gICAgdGhpcy5wcm9wcy5vblNsaWRlckJhckNoYW5nZSh2YWwwLCB2YWwxKTtcbiAgICAvLyB1cGRhdGUgYW5jaG9yXG4gICAgdGhpcy5fYW5jaG9yID0gdGhpcy5fYW5jaG9yICsgZGVsdGFYO1xuICB9O1xuXG4gIGNhbGNIYW5kbGVMZWZ0MCA9ICh3LCBsLCBudW0pID0+IHtcbiAgICByZXR1cm4gdyA9PT0gMFxuICAgICAgPyBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYFxuICAgICAgOiBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYDtcbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDEgPSAodywgbCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmlzUmFuZ2VkICYmIHcgPT09IDBcbiAgICAgID8gYCR7bH0lYFxuICAgICAgOiBgY2FsYygke2wgKyB3fSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWA7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzU2V0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc1JhbmdlZCxcbiAgICAgIG1heFZhbHVlLFxuICAgICAgbWluVmFsdWUsXG4gICAgICB2YWx1ZTEsXG4gICAgICB2ZXJ0aWNhbCxcbiAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxuICAgICAgc2hvd1Rvb2x0aXBcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZTAgPSAhaXNSYW5nZWQgJiYgbWluVmFsdWUgPiAwID8gbWluVmFsdWUgOiB0aGlzLnByb3BzLnZhbHVlMDtcbiAgICBjb25zdCBjdXJyVmFsRGVsdGEgPSB2YWx1ZTEgLSB2YWx1ZTA7XG4gICAgY29uc3QgbWF4RGVsdGEgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xuICAgIGNvbnN0IHdpZHRoID0gKGN1cnJWYWxEZWx0YSAvIG1heERlbHRhKSAqIDEwMDtcblxuICAgIGNvbnN0IHYwTGVmdCA9ICgodmFsdWUwIC0gbWluVmFsdWUpIC8gbWF4RGVsdGEpICogMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctc2xpZGVyJywgey4uLmNsYXNzU2V0LCBkaXNhYmxlZH0pfVxuICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZFJhbmdlU2xpZGVyIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlclwiIHZlcnRpY2FsPXt2ZXJ0aWNhbH0gcmVmPXt0aGlzLnRyYWNrfT5cbiAgICAgICAgICA8U2xpZGVySGFuZGxlXG4gICAgICAgICAgICBsZWZ0PXt0aGlzLmNhbGNIYW5kbGVMZWZ0MCh3aWR0aCwgdjBMZWZ0KX1cbiAgICAgICAgICAgIHZhbHVlTGlzdGVuZXI9e3RoaXMuc2xpZGUwTGlzdGVuZXJ9XG4gICAgICAgICAgICBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9XG4gICAgICAgICAgICBkaXNwbGF5PXtpc1JhbmdlZH1cbiAgICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH1cbiAgICAgICAgICAgIHRyYWNrPXt0aGlzLnRyYWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDEod2lkdGgsIHYwTGVmdCl9XG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMUxpc3RlbmVyfVxuICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMX1cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH1cbiAgICAgICAgICAgIHRyYWNrPXt0aGlzLnRyYWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNsaWRlckJhckhhbmRsZVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgdjBMZWZ0PXt2MExlZnR9XG4gICAgICAgICAgICBlbmFibGVCYXJEcmFnPXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWd9XG4gICAgICAgICAgICBzbGlkZXJCYXJMaXN0ZW5lcj17dGhpcy5zbGlkZXJCYXJMaXN0ZW5lcn1cbiAgICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICAgIHRyYWNrPXt0aGlzLnRyYWNrfVxuICAgICAgICAgICAgc2V0QW5jaG9yPXt0aGlzLl9zZXRBbmNob3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRSYW5nZVNsaWRlcj5cbiAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iXX0=