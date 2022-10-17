"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _ = require("../..");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _visStateMerger = require("../../../reducers/vis-state-merger");

var _templateObject, _templateObject2, _templateObject3;

var ColumnRow = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n"])));

var ColumnName = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 27%;\n  line-height: 1.2;\n  padding-right: 6px;\n"])));

var ColumnSelect = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 73%;\n"])));

ColumnSelectorFactory.deps = [_fieldSelector["default"]];

function ColumnSelectorFactory(FieldSelector) {
  var ColumnSelector = function ColumnSelector(_ref) {
    var column = _ref.column,
        columns = _ref.columns,
        label = _ref.label,
        allFields = _ref.allFields,
        onSelect = _ref.onSelect,
        fieldPairs = _ref.fieldPairs;
    return /*#__PURE__*/_react["default"].createElement(ColumnRow, {
      className: "layer-config__column__selector"
    }, /*#__PURE__*/_react["default"].createElement(ColumnName, {
      className: "layer-config__column__name"
    }, /*#__PURE__*/_react["default"].createElement(_.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "columns.".concat(label)
    }), !column.optional ? "  *" : null)), /*#__PURE__*/_react["default"].createElement(ColumnSelect, {
      className: "layer-config__column__select"
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      suggested: fieldPairs,
      error: !(0, _visStateMerger.validateColumn)(column, columns, allFields),
      fields: allFields,
      value: column.value,
      erasable: Boolean(column.optional),
      onSelect: onSelect
    })));
  };

  return ColumnSelector;
}

var _default = ColumnSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sdW1uLXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIkNvbHVtblJvdyIsInN0eWxlZCIsImRpdiIsIkNvbHVtbk5hbWUiLCJDb2x1bW5TZWxlY3QiLCJDb2x1bW5TZWxlY3RvckZhY3RvcnkiLCJkZXBzIiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJGaWVsZFNlbGVjdG9yIiwiQ29sdW1uU2VsZWN0b3IiLCJjb2x1bW4iLCJjb2x1bW5zIiwibGFiZWwiLCJhbGxGaWVsZHMiLCJvblNlbGVjdCIsImZpZWxkUGFpcnMiLCJvcHRpb25hbCIsInZhbHVlIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLHlKQUFmOztBQU1BLElBQU1DLFVBQVUsR0FBR0YsNkJBQU9DLEdBQVYscUpBQWhCOztBQU1BLElBQU1FLFlBQVksR0FBR0gsNkJBQU9DLEdBQVYseUdBQWxCOztBQUlBRyxxQkFBcUIsQ0FBQ0MsSUFBdEIsR0FBNkIsQ0FBQ0MseUJBQUQsQ0FBN0I7O0FBRUEsU0FBU0YscUJBQVQsQ0FBK0JHLGFBQS9CLEVBQThDO0FBQzVDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxRQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVQyxPQUFWLFFBQVVBLE9BQVY7QUFBQSxRQUFtQkMsS0FBbkIsUUFBbUJBLEtBQW5CO0FBQUEsUUFBMEJDLFNBQTFCLFFBQTBCQSxTQUExQjtBQUFBLFFBQXFDQyxRQUFyQyxRQUFxQ0EsUUFBckM7QUFBQSxRQUErQ0MsVUFBL0MsUUFBK0NBLFVBQS9DO0FBQUEsd0JBQ3JCLGdDQUFDLFNBQUQ7QUFBVyxNQUFBLFNBQVMsRUFBQztBQUFyQixvQkFDRSxnQ0FBQyxVQUFEO0FBQVksTUFBQSxTQUFTLEVBQUM7QUFBdEIsb0JBQ0UsZ0NBQUMsWUFBRCxxQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsb0JBQWFILEtBQWI7QUFBcEIsTUFERixFQUVHLENBQUNGLE1BQU0sQ0FBQ00sUUFBUixXQUEyQixJQUY5QixDQURGLENBREYsZUFPRSxnQ0FBQyxZQUFEO0FBQWMsTUFBQSxTQUFTLEVBQUM7QUFBeEIsb0JBQ0UsZ0NBQUMsYUFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFRCxVQURiO0FBRUUsTUFBQSxLQUFLLEVBQUUsQ0FBQyxvQ0FBZUwsTUFBZixFQUF1QkMsT0FBdkIsRUFBZ0NFLFNBQWhDLENBRlY7QUFHRSxNQUFBLE1BQU0sRUFBRUEsU0FIVjtBQUlFLE1BQUEsS0FBSyxFQUFFSCxNQUFNLENBQUNPLEtBSmhCO0FBS0UsTUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ1IsTUFBTSxDQUFDTSxRQUFSLENBTG5CO0FBTUUsTUFBQSxRQUFRLEVBQUVGO0FBTlosTUFERixDQVBGLENBRHFCO0FBQUEsR0FBdkI7O0FBb0JBLFNBQU9MLGNBQVA7QUFDRDs7ZUFFY0oscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1BhbmVsTGFiZWx9IGZyb20gJy4uLy4uJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQge3ZhbGlkYXRlQ29sdW1ufSBmcm9tICdyZWR1Y2Vycy92aXMtc3RhdGUtbWVyZ2VyJztcblxuY29uc3QgQ29sdW1uUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ29sdW1uTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyNyU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbmA7XG5cbmNvbnN0IENvbHVtblNlbGVjdCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA3MyU7XG5gO1xuXG5Db2x1bW5TZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtGaWVsZFNlbGVjdG9yRmFjdG9yeV07XG5cbmZ1bmN0aW9uIENvbHVtblNlbGVjdG9yRmFjdG9yeShGaWVsZFNlbGVjdG9yKSB7XG4gIGNvbnN0IENvbHVtblNlbGVjdG9yID0gKHtjb2x1bW4sIGNvbHVtbnMsIGxhYmVsLCBhbGxGaWVsZHMsIG9uU2VsZWN0LCBmaWVsZFBhaXJzfSkgPT4gKFxuICAgIDxDb2x1bW5Sb3cgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX3NlbGVjdG9yXCI+XG4gICAgICA8Q29sdW1uTmFtZSBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtbl9fbmFtZVwiPlxuICAgICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YGNvbHVtbnMuJHtsYWJlbH1gfSAvPlxuICAgICAgICAgIHshY29sdW1uLm9wdGlvbmFsID8gYCAgKmAgOiBudWxsfVxuICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICA8L0NvbHVtbk5hbWU+XG4gICAgICA8Q29sdW1uU2VsZWN0IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RcIj5cbiAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICBzdWdnZXN0ZWQ9e2ZpZWxkUGFpcnN9XG4gICAgICAgICAgZXJyb3I9eyF2YWxpZGF0ZUNvbHVtbihjb2x1bW4sIGNvbHVtbnMsIGFsbEZpZWxkcyl9XG4gICAgICAgICAgZmllbGRzPXthbGxGaWVsZHN9XG4gICAgICAgICAgdmFsdWU9e2NvbHVtbi52YWx1ZX1cbiAgICAgICAgICBlcmFzYWJsZT17Qm9vbGVhbihjb2x1bW4ub3B0aW9uYWwpfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sdW1uU2VsZWN0PlxuICAgIDwvQ29sdW1uUm93PlxuICApO1xuICByZXR1cm4gQ29sdW1uU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblNlbGVjdG9yRmFjdG9yeTtcbiJdfQ==