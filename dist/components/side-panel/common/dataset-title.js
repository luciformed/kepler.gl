"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatasetTitleFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _datasetTag = _interopRequireDefault(require("./dataset-tag"));

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function nop(_) {}

var StyledDatasetTitle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    cursor: ", ";\n\n    .dataset-name {\n      color: ", ";\n    }\n\n    .dataset-action {\n      color: ", ";\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var DataTagAction = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n"])));

var ShowDataTable = function ShowDataTable(_ref) {
  var id = _ref.id,
      _ref$showDatasetTable = _ref.showDatasetTable,
      showDatasetTable = _ref$showDatasetTable === void 0 ? nop : _ref$showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action show-data-table",
    "data-tip": true,
    "data-for": "data-table-".concat(id)
  }, /*#__PURE__*/_react["default"].createElement(_icons.Table, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      showDatasetTable(id);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "data-table-".concat(id),
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'datasetTitle.showDataTable'
  }))));
};

var RemoveDataset = function RemoveDataset(_ref2) {
  var datasetKey = _ref2.datasetKey,
      _ref2$removeDataset = _ref2.removeDataset,
      removeDataset = _ref2$removeDataset === void 0 ? nop : _ref2$removeDataset;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action remove-dataset",
    "data-tip": true,
    "data-for": "delete-".concat(datasetKey)
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      removeDataset(datasetKey);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "delete-".concat(datasetKey),
    effect: "solid",
    type: "error"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'datasetTitle.removeDataset'
  }))));
};

DatasetTitleFactory.deps = [_datasetTag["default"]];

function DatasetTitleFactory(DatasetTag) {
  var DatasetTitle = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(DatasetTitle, _PureComponent);

    var _super = _createSuper(DatasetTitle);

    function DatasetTitle() {
      var _this;

      (0, _classCallCheck2["default"])(this, DatasetTitle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClickTitle", function (e) {
        e.stopPropagation();

        if (typeof _this.props.onTitleClick === 'function') {
          _this.props.onTitleClick();
        } else if (typeof _this.props.showDatasetTable === 'function') {
          _this.props.showDatasetTable(_this.props.dataset.id);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(DatasetTitle, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            showDatasetTable = _this$props.showDatasetTable,
            showDeleteDataset = _this$props.showDeleteDataset,
            onTitleClick = _this$props.onTitleClick,
            removeDataset = _this$props.removeDataset,
            dataset = _this$props.dataset;
        return /*#__PURE__*/_react["default"].createElement(StyledDatasetTitle, {
          className: "source-data-title",
          clickable: Boolean(showDatasetTable || onTitleClick)
        }, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
          dataset: dataset,
          onClick: this._onClickTitle
        }), showDatasetTable ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "source-data-arrow"
        }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
          height: "12px"
        })) : null, showDatasetTable ? /*#__PURE__*/_react["default"].createElement(ShowDataTable, {
          id: dataset.id,
          showDatasetTable: showDatasetTable
        }) : null, showDeleteDataset ? /*#__PURE__*/_react["default"].createElement(RemoveDataset, {
          datasetKey: dataset.id,
          removeDataset: removeDataset
        }) : null);
      }
    }]);
    return DatasetTitle;
  }(_react.PureComponent);

  return DatasetTitle;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGl0bGUuanMiXSwibmFtZXMiOlsibm9wIiwiXyIsIlN0eWxlZERhdGFzZXRUaXRsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJjbGlja2FibGUiLCJ0ZXh0Q29sb3JIbCIsIkRhdGFUYWdBY3Rpb24iLCJTaG93RGF0YVRhYmxlIiwiaWQiLCJzaG93RGF0YXNldFRhYmxlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlJlbW92ZURhdGFzZXQiLCJkYXRhc2V0S2V5IiwicmVtb3ZlRGF0YXNldCIsIkRhdGFzZXRUaXRsZUZhY3RvcnkiLCJkZXBzIiwiRGF0YXNldFRhZ0ZhY3RvcnkiLCJEYXRhc2V0VGFnIiwiRGF0YXNldFRpdGxlIiwib25UaXRsZUNsaWNrIiwiZGF0YXNldCIsInNob3dEZWxldGVEYXRhc2V0IiwiQm9vbGVhbiIsIl9vbkNsaWNrVGl0bGUiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQixDQUFFOztBQUVsQixJQUFNQyxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVYsZ2FBQ2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBRFEsRUFTVixVQUFBRixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRyxTQUFOLEdBQWtCLFNBQWxCLEdBQThCLE1BQW5DO0FBQUEsQ0FUSyxFQVlULFVBQUFILEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLFNBQU4sR0FBa0JILEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxXQUE5QixHQUE0Q0osS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQTdEO0FBQUEsQ0FaSSxFQWdCVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FoQkksRUFxQlQsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxXQUFoQjtBQUFBLENBckJJLENBQXhCOztBQTBCQSxJQUFNQyxhQUFhLEdBQUdQLDZCQUFPQyxHQUFWLGdKQUFuQjs7QUFNQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsbUNBQU1DLGdCQUFOO0FBQUEsTUFBTUEsZ0JBQU4sc0NBQXlCYixHQUF6QjtBQUFBLHNCQUNwQixnQ0FBQyxhQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUMsZ0NBQXpCO0FBQTBELG9CQUExRDtBQUFtRSxxQ0FBd0JZLEVBQXhCO0FBQW5FLGtCQUNFLGdDQUFDLFlBQUQ7QUFDRSxJQUFBLE1BQU0sRUFBQyxNQURUO0FBRUUsSUFBQSxPQUFPLEVBQUUsaUJBQUFFLENBQUMsRUFBSTtBQUNaQSxNQUFBQSxDQUFDLENBQUNDLGVBQUY7QUFDQUYsTUFBQUEsZ0JBQWdCLENBQUNELEVBQUQsQ0FBaEI7QUFDRDtBQUxILElBREYsZUFRRSxnQ0FBQywwQkFBRDtBQUFTLElBQUEsRUFBRSx1QkFBZ0JBLEVBQWhCLENBQVg7QUFBaUMsSUFBQSxNQUFNLEVBQUM7QUFBeEMsa0JBQ0UsMkRBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQURGLENBUkYsQ0FEb0I7QUFBQSxDQUF0Qjs7QUFpQkEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUVDLFVBQUYsU0FBRUEsVUFBRjtBQUFBLGtDQUFjQyxhQUFkO0FBQUEsTUFBY0EsYUFBZCxvQ0FBOEJsQixHQUE5QjtBQUFBLHNCQUNwQixnQ0FBQyxhQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsK0JBRFo7QUFFRSxvQkFGRjtBQUdFLGlDQUFvQmlCLFVBQXBCO0FBSEYsa0JBS0UsZ0NBQUMsWUFBRDtBQUNFLElBQUEsTUFBTSxFQUFDLE1BRFQ7QUFFRSxJQUFBLE9BQU8sRUFBRSxpQkFBQUgsQ0FBQyxFQUFJO0FBQ1pBLE1BQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBRyxNQUFBQSxhQUFhLENBQUNELFVBQUQsQ0FBYjtBQUNEO0FBTEgsSUFMRixlQVlFLGdDQUFDLDBCQUFEO0FBQVMsSUFBQSxFQUFFLG1CQUFZQSxVQUFaLENBQVg7QUFBcUMsSUFBQSxNQUFNLEVBQUMsT0FBNUM7QUFBb0QsSUFBQSxJQUFJLEVBQUM7QUFBekQsa0JBQ0UsMkRBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQURGLENBWkYsQ0FEb0I7QUFBQSxDQUF0Qjs7QUFxQkFFLG1CQUFtQixDQUFDQyxJQUFwQixHQUEyQixDQUFDQyxzQkFBRCxDQUEzQjs7QUFFZSxTQUFTRixtQkFBVCxDQUE2QkcsVUFBN0IsRUFBeUM7QUFBQSxNQUNoREMsWUFEZ0Q7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdHQUVwQyxVQUFBVCxDQUFDLEVBQUk7QUFDbkJBLFFBQUFBLENBQUMsQ0FBQ0MsZUFBRjs7QUFDQSxZQUFJLE9BQU8sTUFBS1YsS0FBTCxDQUFXbUIsWUFBbEIsS0FBbUMsVUFBdkMsRUFBbUQ7QUFDakQsZ0JBQUtuQixLQUFMLENBQVdtQixZQUFYO0FBQ0QsU0FGRCxNQUVPLElBQUksT0FBTyxNQUFLbkIsS0FBTCxDQUFXUSxnQkFBbEIsS0FBdUMsVUFBM0MsRUFBdUQ7QUFDNUQsZ0JBQUtSLEtBQUwsQ0FBV1EsZ0JBQVgsQ0FBNEIsTUFBS1IsS0FBTCxDQUFXb0IsT0FBWCxDQUFtQmIsRUFBL0M7QUFDRDtBQUNGLE9BVG1EO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFXcEQsa0JBQVM7QUFDUCwwQkFNSSxLQUFLUCxLQU5UO0FBQUEsWUFDRVEsZ0JBREYsZUFDRUEsZ0JBREY7QUFBQSxZQUVFYSxpQkFGRixlQUVFQSxpQkFGRjtBQUFBLFlBR0VGLFlBSEYsZUFHRUEsWUFIRjtBQUFBLFlBSUVOLGFBSkYsZUFJRUEsYUFKRjtBQUFBLFlBS0VPLE9BTEYsZUFLRUEsT0FMRjtBQVFBLDRCQUNFLGdDQUFDLGtCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsbUJBRFo7QUFFRSxVQUFBLFNBQVMsRUFBRUUsT0FBTyxDQUFDZCxnQkFBZ0IsSUFBSVcsWUFBckI7QUFGcEIsd0JBSUUsZ0NBQUMsVUFBRDtBQUFZLFVBQUEsT0FBTyxFQUFFQyxPQUFyQjtBQUE4QixVQUFBLE9BQU8sRUFBRSxLQUFLRztBQUE1QyxVQUpGLEVBS0dmLGdCQUFnQixnQkFDZixnQ0FBQyxnQ0FBRDtBQUFlLFVBQUEsU0FBUyxFQUFDO0FBQXpCLHdCQUNFLGdDQUFDLGlCQUFEO0FBQVksVUFBQSxNQUFNLEVBQUM7QUFBbkIsVUFERixDQURlLEdBSWIsSUFUTixFQVVHQSxnQkFBZ0IsZ0JBQ2YsZ0NBQUMsYUFBRDtBQUFlLFVBQUEsRUFBRSxFQUFFWSxPQUFPLENBQUNiLEVBQTNCO0FBQStCLFVBQUEsZ0JBQWdCLEVBQUVDO0FBQWpELFVBRGUsR0FFYixJQVpOLEVBYUdhLGlCQUFpQixnQkFDaEIsZ0NBQUMsYUFBRDtBQUFlLFVBQUEsVUFBVSxFQUFFRCxPQUFPLENBQUNiLEVBQW5DO0FBQXVDLFVBQUEsYUFBYSxFQUFFTTtBQUF0RCxVQURnQixHQUVkLElBZk4sQ0FERjtBQW1CRDtBQXZDbUQ7QUFBQTtBQUFBLElBQzNCVyxvQkFEMkI7O0FBMEN0RCxTQUFPTixZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IHtDZW50ZXJGbGV4Ym94LCBUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Fycm93UmlnaHQsIFRhYmxlLCBUcmFzaH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IERhdGFzZXRUYWdGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9jb21tb24vZGF0YXNldC10YWcnO1xuXG5mdW5jdGlvbiBub3AoXykge31cblxuY29uc3QgU3R5bGVkRGF0YXNldFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgLnNvdXJjZS1kYXRhLWFycm93IHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNsaWNrYWJsZSA/ICdwb2ludGVyJyA6ICdhdXRvJyl9O1xuXG4gICAgLmRhdGFzZXQtbmFtZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuY2xpY2thYmxlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3IpfTtcbiAgICB9XG5cbiAgICAuZGF0YXNldC1hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmRhdGFzZXQtYWN0aW9uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IERhdGFUYWdBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvcGFjaXR5OiAwO1xuYDtcblxuY29uc3QgU2hvd0RhdGFUYWJsZSA9ICh7aWQsIHNob3dEYXRhc2V0VGFibGUgPSBub3B9KSA9PiAoXG4gIDxEYXRhVGFnQWN0aW9uIGNsYXNzTmFtZT1cImRhdGFzZXQtYWN0aW9uIHNob3ctZGF0YS10YWJsZVwiIGRhdGEtdGlwIGRhdGEtZm9yPXtgZGF0YS10YWJsZS0ke2lkfWB9PlxuICAgIDxUYWJsZVxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZShpZCk7XG4gICAgICB9fVxuICAgIC8+XG4gICAgPFRvb2x0aXAgaWQ9e2BkYXRhLXRhYmxlLSR7aWR9YH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2RhdGFzZXRUaXRsZS5zaG93RGF0YVRhYmxlJ30gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvRGF0YVRhZ0FjdGlvbj5cbik7XG5cbmNvbnN0IFJlbW92ZURhdGFzZXQgPSAoe2RhdGFzZXRLZXksIHJlbW92ZURhdGFzZXQgPSBub3B9KSA9PiAoXG4gIDxEYXRhVGFnQWN0aW9uXG4gICAgY2xhc3NOYW1lPVwiZGF0YXNldC1hY3Rpb24gcmVtb3ZlLWRhdGFzZXRcIlxuICAgIGRhdGEtdGlwXG4gICAgZGF0YS1mb3I9e2BkZWxldGUtJHtkYXRhc2V0S2V5fWB9XG4gID5cbiAgICA8VHJhc2hcbiAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJlbW92ZURhdGFzZXQoZGF0YXNldEtleSk7XG4gICAgICB9fVxuICAgIC8+XG4gICAgPFRvb2x0aXAgaWQ9e2BkZWxldGUtJHtkYXRhc2V0S2V5fWB9IGVmZmVjdD1cInNvbGlkXCIgdHlwZT1cImVycm9yXCI+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydkYXRhc2V0VGl0bGUucmVtb3ZlRGF0YXNldCd9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9Ub29sdGlwPlxuICA8L0RhdGFUYWdBY3Rpb24+XG4pO1xuXG5EYXRhc2V0VGl0bGVGYWN0b3J5LmRlcHMgPSBbRGF0YXNldFRhZ0ZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhc2V0VGl0bGVGYWN0b3J5KERhdGFzZXRUYWcpIHtcbiAgY2xhc3MgRGF0YXNldFRpdGxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgX29uQ2xpY2tUaXRsZSA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblRpdGxlQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRpdGxlQ2xpY2soKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMuc2hvd0RhdGFzZXRUYWJsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLnNob3dEYXRhc2V0VGFibGUodGhpcy5wcm9wcy5kYXRhc2V0LmlkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93RGVsZXRlRGF0YXNldCxcbiAgICAgICAgb25UaXRsZUNsaWNrLFxuICAgICAgICByZW1vdmVEYXRhc2V0LFxuICAgICAgICBkYXRhc2V0XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZERhdGFzZXRUaXRsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRpdGxlXCJcbiAgICAgICAgICBjbGlja2FibGU9e0Jvb2xlYW4oc2hvd0RhdGFzZXRUYWJsZSB8fCBvblRpdGxlQ2xpY2spfVxuICAgICAgICA+XG4gICAgICAgICAgPERhdGFzZXRUYWcgZGF0YXNldD17ZGF0YXNldH0gb25DbGljaz17dGhpcy5fb25DbGlja1RpdGxlfSAvPlxuICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID8gKFxuICAgICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwic291cmNlLWRhdGEtYXJyb3dcIj5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgPyAoXG4gICAgICAgICAgICA8U2hvd0RhdGFUYWJsZSBpZD17ZGF0YXNldC5pZH0gc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7c2hvd0RlbGV0ZURhdGFzZXQgPyAoXG4gICAgICAgICAgICA8UmVtb3ZlRGF0YXNldCBkYXRhc2V0S2V5PXtkYXRhc2V0LmlkfSByZW1vdmVEYXRhc2V0PXtyZW1vdmVEYXRhc2V0fSAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZERhdGFzZXRUaXRsZT5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIERhdGFzZXRUaXRsZTtcbn1cbiJdfQ==