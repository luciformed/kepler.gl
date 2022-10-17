"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../../common/styled-components");

var _columnSelector = _interopRequireDefault(require("./column-selector"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TopRow = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));

LayerColumnConfigFactory.deps = [_columnSelector["default"]];

function LayerColumnConfigFactory(ColumnSelector) {
  var LayerColumnConfig = function LayerColumnConfig(_ref) {
    var columnPairs = _ref.columnPairs,
        fieldPairs = _ref.fieldPairs,
        columns = _ref.columns,
        columnLabels = _ref.columnLabels,
        fields = _ref.fields,
        updateLayerConfig = _ref.updateLayerConfig,
        assignColumn = _ref.assignColumn,
        assignColumnPairs = _ref.assignColumnPairs;
    var enhancedFieldPairs = (0, _react.useMemo)(function () {
      return columnPairs && fieldPairs ? fieldPairs.map(function (fp) {
        return {
          name: fp.defaultName,
          type: 'point',
          pair: fp.pair
        };
      }) : null;
    }, [columnPairs, fieldPairs]);
    var onUpdateColumn = (0, _react.useCallback)(function (key, value) {
      var assignedColumns = value && value.pair && columnPairs ? assignColumnPairs(key, value.pair) : assignColumn(key, value);
      updateLayerConfig({
        columns: assignedColumns
      });
    }, [updateLayerConfig, columnPairs, assignColumnPairs, assignColumn]);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer-config__column"
    }, /*#__PURE__*/_react["default"].createElement(TopRow, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'columns.title'
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "layer.required"
    }))), Object.keys(columns).map(function (key) {
      return /*#__PURE__*/_react["default"].createElement(ColumnSelector, {
        column: columns[key],
        columns: columns,
        label: columnLabels && columnLabels[key] || key,
        key: key,
        allFields: fields,
        fieldPairs: enhancedFieldPairs,
        onSelect: function onSelect(val) {
          return onUpdateColumn(key, val);
        }
      });
    }))));
  };

  LayerColumnConfig.propTypes = {
    columns: _propTypes["default"].object.isRequired,
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    assignColumnPairs: _propTypes["default"].func.isRequired,
    assignColumn: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    columnPairs: _propTypes["default"].object,
    fieldPairs: _propTypes["default"].arrayOf(_propTypes["default"].any),
    columnLabels: _propTypes["default"].object
  };
  return LayerColumnConfig;
}

var _default = LayerColumnConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkiLCJkZXBzIiwiQ29sdW1uU2VsZWN0b3JGYWN0b3J5IiwiQ29sdW1uU2VsZWN0b3IiLCJMYXllckNvbHVtbkNvbmZpZyIsImNvbHVtblBhaXJzIiwiZmllbGRQYWlycyIsImNvbHVtbnMiLCJjb2x1bW5MYWJlbHMiLCJmaWVsZHMiLCJ1cGRhdGVMYXllckNvbmZpZyIsImFzc2lnbkNvbHVtbiIsImFzc2lnbkNvbHVtblBhaXJzIiwiZW5oYW5jZWRGaWVsZFBhaXJzIiwibWFwIiwiZnAiLCJuYW1lIiwiZGVmYXVsdE5hbWUiLCJ0eXBlIiwicGFpciIsIm9uVXBkYXRlQ29sdW1uIiwia2V5IiwidmFsdWUiLCJhc3NpZ25lZENvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwidmFsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsNkJBQU9DLEdBQVYsNklBQVo7O0FBS0FDLHdCQUF3QixDQUFDQyxJQUF6QixHQUFnQyxDQUFDQywwQkFBRCxDQUFoQzs7QUFFQSxTQUFTRix3QkFBVCxDQUFrQ0csY0FBbEMsRUFBa0Q7QUFDaEQsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQVNwQjtBQUFBLFFBUkpDLFdBUUksUUFSSkEsV0FRSTtBQUFBLFFBUEpDLFVBT0ksUUFQSkEsVUFPSTtBQUFBLFFBTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLFFBTEpDLFlBS0ksUUFMSkEsWUFLSTtB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QixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLEdBQTVCLENBUGdCO0FBUTVCeEIsSUFBQUEsWUFBWSxFQUFFb0Isc0JBQVVDO0FBUkksR0FBOUI7QUFXQSxTQUFPekIsaUJBQVA7QUFDRDs7ZUFFY0osd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sdW1uU2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vY29sdW1uLXNlbGVjdG9yJztcblxuY29uc3QgVG9wUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuTGF5ZXJDb2x1bW5Db25maWdGYWN0b3J5LmRlcHMgPSBbQ29sdW1uU2VsZWN0b3JGYWN0b3J5XTtcblxuZnVuY3Rpb24gTGF5ZXJDb2x1bW5Db25maWdGYWN0b3J5KENvbHVtblNlbGVjdG9yKSB7XG4gIGNvbnN0IExheWVyQ29sdW1uQ29uZmlnID0gKHtcbiAgICBjb2x1bW5QYWlycyxcbiAgICBmaWVsZFBhaXJzLFxuICAgIGNvbHVtbnMsXG4gICAgY29sdW1uTGFiZWxzLFxuICAgIGZpZWxkcyxcbiAgICB1cGRhdGVMYXllckNvbmZpZyxcbiAgICBhc3NpZ25Db2x1bW4sXG4gICAgYXNzaWduQ29sdW1uUGFpcnNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGVuaGFuY2VkRmllbGRQYWlycyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBjb2x1bW5QYWlycyAmJiBmaWVsZFBhaXJzXG4gICAgICAgICAgPyBmaWVsZFBhaXJzLm1hcChmcCA9PiAoe1xuICAgICAgICAgICAgICBuYW1lOiBmcC5kZWZhdWx0TmFtZSxcbiAgICAgICAgICAgICAgdHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgcGFpcjogZnAucGFpclxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgW2NvbHVtblBhaXJzLCBmaWVsZFBhaXJzXVxuICAgICk7XG5cbiAgICBjb25zdCBvblVwZGF0ZUNvbHVtbiA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgYXNzaWduZWRDb2x1bW5zID1cbiAgICAgICAgICB2YWx1ZSAmJiB2YWx1ZS5wYWlyICYmIGNvbHVtblBhaXJzXG4gICAgICAgICAgICA/IGFzc2lnbkNvbHVtblBhaXJzKGtleSwgdmFsdWUucGFpcilcbiAgICAgICAgICAgIDogYXNzaWduQ29sdW1uKGtleSwgdmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUxheWVyQ29uZmlnKHtjb2x1bW5zOiBhc3NpZ25lZENvbHVtbnN9KTtcbiAgICAgIH0sXG4gICAgICBbdXBkYXRlTGF5ZXJDb25maWcsIGNvbHVtblBhaXJzLCBhc3NpZ25Db2x1bW5QYWlycywgYXNzaWduQ29sdW1uXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1jb25maWdfX2NvbHVtblwiPlxuICAgICAgICAgICAgPFRvcFJvdz5cbiAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydjb2x1bW5zLnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImxheWVyLnJlcXVpcmVkXCIgLz5cbiAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgPC9Ub3BSb3c+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoY29sdW1ucykubWFwKGtleSA9PiAoXG4gICAgICAgICAgICAgIDxDb2x1bW5TZWxlY3RvclxuICAgICAgICAgICAgICAgIGNvbHVtbj17Y29sdW1uc1trZXldfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgICAgICAgbGFiZWw9eyhjb2x1bW5MYWJlbHMgJiYgY29sdW1uTGFiZWxzW2tleV0pIHx8IGtleX1cbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBhbGxGaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtlbmhhbmNlZEZpZWxkUGFpcnN9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvblVwZGF0ZUNvbHVtbihrZXksIHZhbCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBMYXllckNvbHVtbkNvbmZpZy5wcm9wVHlwZXMgPSB7XG4gICAgY29sdW1uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICBhc3NpZ25Db2x1bW5QYWlyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBhc3NpZ25Db2x1bW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlTGF5ZXJDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY29sdW1uUGFpcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmllbGRQYWlyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgY29sdW1uTGFiZWxzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgcmV0dXJuIExheWVyQ29sdW1uQ29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckNvbHVtbkNvbmZpZ0ZhY3Rvcnk7XG4iXX0=