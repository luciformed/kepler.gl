"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendRow = exports["default"] = void 0;

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

var _reselect = require("reselect");

var _d3Format = require("d3-format");

var _moment = _interopRequireDefault(require("moment"));

var _defaultSettings = require("../../constants/default-settings");

var _filterUtils = require("../../utils/filter-utils");

var _utils = require("../../utils/utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ROW_H = 10;
var GAP = 4;
var RECT_W = 20;

var StyledLegend = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  max-height: 150px;\n  overflow-y: auto;\n\n  svg {\n    text {\n      font-size: 9px;\n      fill: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.textColor;
});

var defaultFormat = function defaultFormat(d) {
  return d;
};

var getTimeLabelFormat = function getTimeLabelFormat(domain) {
  var formatter = (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
  return function (val) {
    return _moment["default"].utc(val).format(formatter);
  };
};

var getNumericLabelFormat = function getNumericLabelFormat(domain) {
  var diff = domain[1] - domain[0];

  if (diff < 10) {
    return (0, _d3Format.format)('.2f');
  }

  return (0, _d3Format.format)('.1f');
};

var getQuantLabelFormat = function getQuantLabelFormat(domain, fieldType) {
  // quant scale can only be assigned to linear Fields: real, timestamp, integer
  return fieldType === _defaultSettings.ALL_FIELD_TYPES.timestamp ? getTimeLabelFormat(domain) : !fieldType ? defaultFormat : getNumericLabelFormat(domain);
};

var getOrdinalLegends = function getOrdinalLegends(scale) {
  var domain = scale.domain();
  return {
    data: domain.map(scale),
    labels: domain
  };
};

var getQuantLegends = function getQuantLegends(scale, labelFormat) {
  if (typeof scale.invertExtent !== 'function') {
    // only quantile, quantize, threshold scale has invertExtent method
    return {
      data: [],
      labels: []
    };
  }

  var labels = scale.range().map(function (d) {
    var invert = scale.invertExtent(d);
    return "".concat(labelFormat(invert[0]), " to ").concat(labelFormat(invert[1]));
  });
  return {
    data: scale.range(),
    labels: labels
  };
};

var ColorLegend = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorLegend, _Component);

  var _super = _createSuper(ColorLegend);

  function ColorLegend() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorLegend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rangeSelector", function (props) {
      return props.range;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "labelFormatSelector", function (props) {
      return props.labelFormat;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleTypeSelector", function (props) {
      return props.scaleType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldTypeSelector", function (props) {
      return props.fieldType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "legendsSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.rangeSelector, _this.scaleTypeSelector, _this.labelFormatSelector, _this.fieldTypeSelector, function (domain, range, scaleType, labelFormat, fieldType) {
      var empty = {
        data: [],
        labels: []
      };

      if (!range) {
        return empty;
      }

      if ((0, _utils.isObject)(range.colorLegends)) {
        return {
          data: Object.keys(range.colorLegends),
          labels: Object.values(range.colorLegends)
        };
      } else if (Array.isArray(range.colorMap)) {
        return {
          data: range.colorMap.map(function (cm) {
            return cm[1];
          }),
          labels: range.colorMap.map(function (cm) {
            return cm[0];
          })
        };
      } else if (Array.isArray(range.colors)) {
        if (!domain || !scaleType) {
          return empty;
        }

        var scaleFunction = _defaultSettings.SCALE_FUNC[scaleType]; // color scale can only be quantize, quantile or ordinal

        var scale = scaleFunction().domain(domain).range(range.colors);

        if (scaleType === _defaultSettings.SCALE_TYPES.ordinal) {
          return getOrdinalLegends(scale);
        }

        var formatLabel = labelFormat || getQuantLabelFormat(scale.domain(), fieldType);
        return getQuantLegends(scale, formatLabel);
      }

      return empty;
    }));
    return _this;
  }

  (0, _createClass2["default"])(ColorLegend, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          _this$props$displayLa = _this$props.displayLabel,
          displayLabel = _this$props$displayLa === void 0 ? true : _this$props$displayLa;
      var legends = this.legendsSelector(this.props);
      var height = legends.data.length * (ROW_H + GAP);
      return /*#__PURE__*/_react["default"].createElement(StyledLegend, null, /*#__PURE__*/_react["default"].createElement("svg", {
        width: width,
        height: height
      }, legends.data.map(function (color, idx) {
        return /*#__PURE__*/_react["default"].createElement(LegendRow, {
          key: idx,
          label: legends.labels[idx],
          displayLabel: displayLabel,
          color: color,
          idx: idx
        });
      })));
    }
  }]);
  return ColorLegend;
}(_react.Component);

exports["default"] = ColorLegend;
(0, _defineProperty2["default"])(ColorLegend, "propTypes", {
  width: _propTypes["default"].number.isRequired,
  scaleType: _propTypes["default"].string,
  domain: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  fieldType: _propTypes["default"].string,
  range: _propTypes["default"].object,
  labelFormat: _propTypes["default"].func
});

var LegendRow = function LegendRow(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      displayLabel = _ref.displayLabel,
      color = _ref.color,
      idx = _ref.idx;
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0, ".concat(idx * (ROW_H + GAP), ")")
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: RECT_W,
    height: ROW_H,
    style: {
      fill: color
    }
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: RECT_W + 8,
    y: ROW_H - 1
  }, displayLabel ? label.toString() : ''));
};

exports.LegendRow = LegendRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb2xvci1sZWdlbmQuanMiXSwibmFtZXMiOlsiUk9XX0giLCJHQVAiLCJSRUNUX1ciLCJTdHlsZWRMZWdlbmQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwidGV4dENvbG9yIiwiZGVmYXVsdEZvcm1hdCIsImQiLCJnZXRUaW1lTGFiZWxGb3JtYXQiLCJkb21haW4iLCJmb3JtYXR0ZXIiLCJ2YWwiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJnZXROdW1lcmljTGFiZWxGb3JtYXQiLCJkaWZmIiwiZ2V0UXVhbnRMYWJlbEZvcm1hdCIsImZpZWxkVHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsInRpbWVzdGFtcCIsImdldE9yZGluYWxMZWdlbmRzIiwic2NhbGUiLCJkYXRhIiwibWFwIiwibGFiZWxzIiwiZ2V0UXVhbnRMZWdlbmRzIiwibGFiZWxGb3JtYXQiLCJpbnZlcnRFeHRlbnQiLCJyYW5nZSIsImludmVydCIsIkNvbG9yTGVnZW5kIiwic2NhbGVUeXBlIiwiZG9tYWluU2VsZWN0b3IiLCJyYW5nZVNlbGVjdG9yIiwic2NhbGVUeXBlU2VsZWN0b3IiLCJsYWJlbEZvcm1hdFNlbGVjdG9yIiwiZmllbGRUeXBlU2VsZWN0b3IiLCJlbXB0eSIsImNvbG9yTGVnZW5kcyIsIk9iamVjdCIsImtleXMiLCJ2YWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjb2xvck1hcCIsImNtIiwiY29sb3JzIiwic2NhbGVGdW5jdGlvbiIsIlNDQUxFX0ZVTkMiLCJTQ0FMRV9UWVBFUyIsIm9yZGluYWwiLCJmb3JtYXRMYWJlbCIsIndpZHRoIiwiZGlzcGxheUxhYmVsIiwibGVnZW5kcyIsImxlZ2VuZHNTZWxlY3RvciIsImhlaWdodCIsImxlbmd0aCIsImNvbG9yIiwiaWR4IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5Iiwib2JqZWN0IiwiZnVuYyIsIkxlZ2VuZFJvdyIsImxhYmVsIiwiZmlsbCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxFQUFkO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLENBQVo7QUFDQSxJQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLDROQUNkLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsa0JBQWhCO0FBQUEsQ0FEUyxFQVNKLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBaEI7QUFBQSxDQVRELENBQWxCOztBQWNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUo7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLE1BQU0sRUFBSTtBQUNuQyxNQUFNQyxTQUFTLEdBQUcsNkNBQTJCRCxNQUEzQixDQUFsQjtBQUNBLFNBQU8sVUFBQUUsR0FBRztBQUFBLFdBQUlDLG1CQUFPQyxHQUFQLENBQVdGLEdBQVgsRUFBZ0JHLE1BQWhCLENBQXVCSixTQUF2QixDQUFKO0FBQUEsR0FBVjtBQUNELENBSEQ7O0FBS0EsSUFBTUsscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBTixNQUFNLEVBQUk7QUFDdEMsTUFBTU8sSUFBSSxHQUFHUCxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQS9COztBQUVBLE1BQUlPLElBQUksR0FBRyxFQUFYLEVBQWU7QUFDYixXQUFPLHNCQUFPLEtBQVAsQ0FBUDtBQUNEOztBQUVE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R0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQUVDLEtBQUY7QUFBQSxNQUFFQSxLQUFGLDJCQUFVLEVBQVY7QUFBQSxNQUFjakIsWUFBZCxRQUFjQSxZQUFkO0FBQUEsTUFBNEJLLEtBQTVCLFFBQTRCQSxLQUE1QjtBQUFBLE1BQW1DQyxHQUFuQyxRQUFtQ0EsR0FBbkM7QUFBQSxzQkFDdkI7QUFBRyxJQUFBLFNBQVMseUJBQWtCQSxHQUFHLElBQUloRSxLQUFLLEdBQUdDLEdBQVosQ0FBckI7QUFBWixrQkFDRTtBQUFNLElBQUEsS0FBSyxFQUFFQyxNQUFiO0FBQXFCLElBQUEsTUFBTSxFQUFFRixLQUE3QjtBQUFvQyxJQUFBLEtBQUssRUFBRTtBQUFDNEUsTUFBQUEsSUFBSSxFQUFFYjtBQUFQO0FBQTNDLElBREYsZUFFRTtBQUFNLElBQUEsQ0FBQyxFQUFFN0QsTUFBTSxHQUFHLENBQWxCO0FBQXFCLElBQUEsQ0FBQyxFQUFFRixLQUFLLEdBQUc7QUFBaEMsS0FDRzBELFlBQVksR0FBR2lCLEtBQUssQ0FBQ0UsUUFBTixFQUFILEdBQXNCLEVBRHJDLENBRkYsQ0FEdUI7QUFBQSxDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1NDQUxFX1RZUEVTLCBTQ0FMRV9GVU5DLCBBTExfRklFTERfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge2lzT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmNvbnN0IFJPV19IID0gMTA7XG5jb25zdCBHQVAgPSA0O1xuY29uc3QgUkVDVF9XID0gMjA7XG5cbmNvbnN0IFN0eWxlZExlZ2VuZCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcblxuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBzdmcge1xuICAgIHRleHQge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBkZWZhdWx0Rm9ybWF0ID0gZCA9PiBkO1xuXG5jb25zdCBnZXRUaW1lTGFiZWxGb3JtYXQgPSBkb21haW4gPT4ge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pO1xuICByZXR1cm4gdmFsID0+IG1vbWVudC51dGModmFsKS5mb3JtYXQoZm9ybWF0dGVyKTtcbn07XG5cbmNvbnN0IGdldE51bWVyaWNMYWJlbEZvcm1hdCA9IGRvbWFpbiA9PiB7XG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG5cbiAgaWYgKGRpZmYgPCAxMCkge1xuICAgIHJldHVybiBmb3JtYXQoJy4yZicpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCgnLjFmJyk7XG59O1xuXG5jb25zdCBnZXRRdWFudExhYmVsRm9ybWF0ID0gKGRvbWFpbiwgZmllbGRUeXBlKSA9PiB7XG4gIC8vIHF1YW50IHNjYWxlIGNhbiBvbmx5IGJlIGFzc2lnbmVkIHRvIGxpbmVhciBGaWVsZHM6IHJlYWwsIHRpbWVzdGFtcCwgaW50ZWdlclxuICByZXR1cm4gZmllbGRUeXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wXG4gICAgPyBnZXRUaW1lTGFiZWxGb3JtYXQoZG9tYWluKVxuICAgIDogIWZpZWxkVHlwZVxuICAgID8gZGVmYXVsdEZvcm1hdFxuICAgIDogZ2V0TnVtZXJpY0xhYmVsRm9ybWF0KGRvbWFpbik7XG59O1xuXG5jb25zdCBnZXRPcmRpbmFsTGVnZW5kcyA9IHNjYWxlID0+IHtcbiAgY29uc3QgZG9tYWluID0gc2NhbGUuZG9tYWluKCk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZG9tYWluLm1hcChzY2FsZSksXG4gICAgbGFiZWxzOiBkb21haW5cbiAgfTtcbn07XG5cbmNvbnN0IGdldFF1YW50TGVnZW5kcyA9IChzY2FsZSwgbGFiZWxGb3JtYXQpID0+IHtcbiAgaWYgKHR5cGVvZiBzY2FsZS5pbnZlcnRFeHRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBvbmx5IHF1YW50aWxlLCBxdWFudGl6ZSwgdGhyZXNob2xkIHNjYWxlIGhhcyBpbnZlcnRFeHRlbnQgbWV0aG9kXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbGFiZWxzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBzY2FsZS5yYW5nZSgpLm1hcChkID0+IHtcbiAgICBjb25zdCBpbnZlcnQgPSBzY2FsZS5pbnZlcnRFeHRlbnQoZCk7XG4gICAgcmV0dXJuIGAke2xhYmVsRm9ybWF0KGludmVydFswXSl9IHRvICR7bGFiZWxGb3JtYXQoaW52ZXJ0WzFdKX1gO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHNjYWxlLnJhbmdlKCksXG4gICAgbGFiZWxzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvckxlZ2VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzY2FsZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZG9tYWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBmaWVsZFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWxGb3JtYXQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgZG9tYWluU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5kb21haW47XG4gIHJhbmdlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5yYW5nZTtcbiAgbGFiZWxGb3JtYXRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxhYmVsRm9ybWF0O1xuICBzY2FsZVR5cGVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnNjYWxlVHlwZTtcbiAgZmllbGRUeXBlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWVsZFR5cGU7XG5cbiAgbGVnZW5kc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5kb21haW5TZWxlY3RvcixcbiAgICB0aGlzLnJhbmdlU2VsZWN0b3IsXG4gICAgdGhpcy5zY2FsZVR5cGVTZWxlY3RvcixcbiAgICB0aGlzLmxhYmVsRm9ybWF0U2VsZWN0b3IsXG4gICAgdGhpcy5maWVsZFR5cGVTZWxlY3RvcixcbiAgICAoZG9tYWluLCByYW5nZSwgc2NhbGVUeXBlLCBsYWJlbEZvcm1hdCwgZmllbGRUeXBlKSA9PiB7XG4gICAgICBjb25zdCBlbXB0eSA9IHtcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIGxhYmVsczogW11cbiAgICAgIH07XG4gICAgICBpZiAoIXJhbmdlKSB7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgIH1cbiAgICAgIGlmIChpc09iamVjdChyYW5nZS5jb2xvckxlZ2VuZHMpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogT2JqZWN0LmtleXMocmFuZ2UuY29sb3JMZWdlbmRzKSxcbiAgICAgICAgICBsYWJlbHM6IE9iamVjdC52YWx1ZXMocmFuZ2UuY29sb3JMZWdlbmRzKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJhbmdlLmNvbG9yTWFwKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IHJhbmdlLmNvbG9yTWFwLm1hcChjbSA9PiBjbVsxXSksXG4gICAgICAgICAgbGFiZWxzOiByYW5nZS5jb2xvck1hcC5tYXAoY20gPT4gY21bMF0pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmFuZ2UuY29sb3JzKSkge1xuICAgICAgICBpZiAoIWRvbWFpbiB8fCAhc2NhbGVUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9IFNDQUxFX0ZVTkNbc2NhbGVUeXBlXTtcbiAgICAgICAgLy8gY29sb3Igc2NhbGUgY2FuIG9ubHkgYmUgcXVhbnRpemUsIHF1YW50aWxlIG9yIG9yZGluYWxcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBzY2FsZUZ1bmN0aW9uKClcbiAgICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgICAucmFuZ2UocmFuZ2UuY29sb3JzKTtcblxuICAgICAgICBpZiAoc2NhbGVUeXBlID09PSBTQ0FMRV9UWVBFUy5vcmRpbmFsKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE9yZGluYWxMZWdlbmRzKHNjYWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1hdExhYmVsID0gbGFiZWxGb3JtYXQgfHwgZ2V0UXVhbnRMYWJlbEZvcm1hdChzY2FsZS5kb21haW4oKSwgZmllbGRUeXBlKTtcblxuICAgICAgICByZXR1cm4gZ2V0UXVhbnRMZWdlbmRzKHNjYWxlLCBmb3JtYXRMYWJlbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7d2lkdGgsIGRpc3BsYXlMYWJlbCA9IHRydWV9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGxlZ2VuZHMgPSB0aGlzLmxlZ2VuZHNTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICBjb25zdCBoZWlnaHQgPSBsZWdlbmRzLmRhdGEubGVuZ3RoICogKFJPV19IICsgR0FQKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGVnZW5kPlxuICAgICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgIHtsZWdlbmRzLmRhdGEubWFwKChjb2xvciwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8TGVnZW5kUm93XG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBsYWJlbD17bGVnZW5kcy5sYWJlbHNbaWR4XX1cbiAgICAgICAgICAgICAgZGlzcGxheUxhYmVsPXtkaXNwbGF5TGFiZWx9XG4gICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvU3R5bGVkTGVnZW5kPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IExlZ2VuZFJvdyA9ICh7bGFiZWwgPSAnJywgZGlzcGxheUxhYmVsLCBjb2xvciwgaWR4fSkgPT4gKFxuICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtpZHggKiAoUk9XX0ggKyBHQVApfSlgfT5cbiAgICA8cmVjdCB3aWR0aD17UkVDVF9XfSBoZWlnaHQ9e1JPV19IfSBzdHlsZT17e2ZpbGw6IGNvbG9yfX0gLz5cbiAgICA8dGV4dCB4PXtSRUNUX1cgKyA4fSB5PXtST1dfSCAtIDF9PlxuICAgICAge2Rpc3BsYXlMYWJlbCA/IGxhYmVsLnRvU3RyaW5nKCkgOiAnJ31cbiAgICA8L3RleHQ+XG4gIDwvZz5cbik7XG4iXX0=