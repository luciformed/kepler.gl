"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledLayerName = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dataUtils = require("../../utils/data-utils");

var _interactionUtils = require("../../utils/interaction-utils");

var _templateObject, _templateObject2;

var StyledLayerName = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n  padding: 0 14px;\n  margin-top: 12px;\n\n  svg {\n    margin-right: 4px;\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});
exports.StyledLayerName = StyledLayerName;

var StyledTable = _styledComponents["default"].table(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  & .row__delta-value {\n    text-align: right;\n\n    &.positive {\n      color: ", ";\n    }\n\n    &.negative {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.negativeBtnActBgd;
});
/** @type {import('./layer-hover-info').RowComponent} */


var Row = function Row(_ref) {
  var name = _ref.name,
      value = _ref.value,
      deltaValue = _ref.deltaValue,
      url = _ref.url;

  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  var asImg = /<img>/.test(name);
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "row",
    key: name
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__name"
  }, name), /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__value"
  }, asImg ? /*#__PURE__*/_react["default"].createElement("img", {
    src: value
  }) : url ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: url
  }, value) : value), (0, _dataUtils.notNullorUndefined)(deltaValue) && /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__delta-value ".concat(deltaValue.toString().charAt(0) === '+' ? 'positive' : 'negative')
  }, deltaValue));
};

var EntryInfo = function EntryInfo(_ref2) {
  var fieldsToShow = _ref2.fieldsToShow,
      fields = _ref2.fields,
      data = _ref2.data,
      primaryData = _ref2.primaryData,
      compareType = _ref2.compareType;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, fieldsToShow.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(EntryInfoRow, {
      key: item.name,
      item: item,
      fields: fields,
      data: data,
      primaryData: primaryData,
      compareType: compareType
    });
  }));
};

var EntryInfoRow = function EntryInfoRow(_ref3) {
  var item = _ref3.item,
      fields = _ref3.fields,
      data = _ref3.data,
      primaryData = _ref3.primaryData,
      compareType = _ref3.compareType;
  var fieldIdx = fields.findIndex(function (f) {
    return f.name === item.name;
  });

  if (fieldIdx < 0) {
    return null;
  }

  var field = fields[fieldIdx];
  var displayValue = (0, _interactionUtils.getTooltipDisplayValue)({
    item: item,
    field: field,
    data: data,
    fieldIdx: fieldIdx
  });
  var displayDeltaValue = (0, _interactionUtils.getTooltipDisplayDeltaValue)({
    item: item,
    field: field,
    data: data,
    fieldIdx: fieldIdx,
    primaryData: primaryData,
    compareType: compareType
  });
  return /*#__PURE__*/_react["default"].createElement(Row, {
    name: field.name,
    value: displayValue,
    deltaValue: displayDeltaValue
  });
}; // TODO: supporting comparative value for aggregated cells as well


var CellInfo = function CellInfo(_ref4) {
  var data = _ref4.data,
      layer = _ref4.layer;
  var _layer$config = layer.config,
      colorField = _layer$config.colorField,
      sizeField = _layer$config.sizeField;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(Row, {
    name: 'total points',
    key: "count",
    value: data.points && data.points.length
  }), colorField && layer.visualChannels.color ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('color').measure,
    key: "color",
    value: data.colorValue || 'N/A'
  }) : null, sizeField && layer.visualChannels.size ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('size').measure,
    key: "size",
    value: data.elevationValue || 'N/A'
  }) : null);
};

var LayerHoverInfoFactory = function LayerHoverInfoFactory() {
  var LayerHoverInfo = function LayerHoverInfo(props) {
    var data = props.data,
        layer = props.layer;

    if (!data || !layer) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-popover__layer-info"
    }, /*#__PURE__*/_react["default"].createElement(StyledLayerName, {
      className: "map-popover__layer-name"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
      height: "12px"
    }), props.layer.config.label), /*#__PURE__*/_react["default"].createElement(StyledTable, null, props.layer.isAggregated ? /*#__PURE__*/_react["default"].createElement(CellInfo, props) : /*#__PURE__*/_react["default"].createElement(EntryInfo, props)));
  };

  LayerHoverInfo.propTypes = {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any),
    fieldsToShow: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layer: _propTypes["default"].object,
    data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object])
  };
  return LayerHoverInfo;
};

var _default = LayerHoverInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9sYXllci1ob3Zlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyTmFtZSIsIkNlbnRlckZsZXhib3giLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJTdHlsZWRUYWJsZSIsInN0eWxlZCIsInRhYmxlIiwicHJpbWFyeUJ0bkJnZCIsIm5lZ2F0aXZlQnRuQWN0QmdkIiwiUm93IiwibmFtZSIsInZhbHVlIiwiZGVsdGFWYWx1ZSIsInVybCIsIm1hdGNoIiwiYXNJbWciLCJ0ZXN0IiwidG9TdHJpbmciLCJjaGFyQXQiLCJFbnRyeUluZm8iLCJmaWVsZHNUb1Nob3ciLCJmaWVsZHMiLCJkYXRhIiwicHJpbWFyeURhdGEiLCJjb21wYXJlVHlwZSIsIm1hcCIsIml0ZW0iLCJFbnRyeUluZm9Sb3ciLCJmaWVsZElkeCIsImZpbmRJbmRleCIsImYiLCJmaWVsZCIsImRpc3BsYXlWYWx1ZSIsImRpc3BsYXlEZWx0YVZhbHVlIiwiQ2VsbEluZm8iLCJsYXllciIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJzaXplRmllbGQiLCJwb2ludHMiLCJsZW5ndGgiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uIiwibWVhc3VyZSIsImNvbG9yVmFsdWUiLCJzaXplIiwiZWxldmF0aW9uVmFsdWUiLCJMYXllckhvdmVySW5mb0ZhY3RvcnkiLCJMYXllckhvdmVySW5mbyIsImxhYmVsIiwiaXNBZ2dyZWdhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxlQUFlLEdBQUcsa0NBQU9DLGdDQUFQLENBQUgsd1FBQ2pCLFVBQUFDLEtBQUs7QUFBQSxTQUFJ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QkFDRSxnQ0FBQyxhQUFEO0FBQVEsTUFBQSxNQUFNLEVBQUM7QUFBZixNQURGLEVBRUdsQyxLQUFLLENBQUNrQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJjLEtBRnRCLENBREYsZUFLRSxnQ0FBQyxXQUFELFFBQ0dqRCxLQUFLLENBQUNrQyxLQUFOLENBQVlnQixZQUFaLGdCQUEyQixnQ0FBQyxRQUFELEVBQWNsRCxLQUFkLENBQTNCLGdCQUFxRCxnQ0FBQyxTQUFELEVBQWVBLEtBQWYsQ0FEeEQsQ0FMRixDQURGO0FBV0QsR0FsQkQ7O0FBb0JBZ0QsRUFBQUEsY0FBYyxDQUFDRyxTQUFmLEdBQTJCO0FBQ3pCL0IsSUFBQUEsTUFBTSxFQUFFZ0Msc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQURpQjtBQUV6Qm5DLElBQUFBLFlBQVksRUFBRWlDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FGVztBQUd6QnBCLElBQUFBLEtBQUssRUFBRWtCLHNCQUFVRyxNQUhRO0FBSXpCbEMsSUFBQUEsSUFBSSxFQUFFK0Isc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQUFELEVBQW1DRixzQkFBVUcsTUFBN0MsQ0FBcEI7QUFKbUIsR0FBM0I7QUFNQSxTQUFPUCxjQUFQO0FBQ0QsQ0E1QkQ7O2VBOEJlRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Q2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtMYXllcnN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZH0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQge2dldFRvb2x0aXBEaXNwbGF5VmFsdWUsIGdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZX0gZnJvbSAndXRpbHMvaW50ZXJhY3Rpb24tdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJOYW1lID0gc3R5bGVkKENlbnRlckZsZXhib3gpYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgJiAucm93X19kZWx0YS12YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAmLnBvc2l0aXZlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICAgIH1cblxuICAgICYubmVnYXRpdmUge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RCZ2R9O1xuICAgIH1cbiAgfVxuYDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vbGF5ZXItaG92ZXItaW5mbycpLlJvd0NvbXBvbmVudH0gKi9cbmNvbnN0IFJvdyA9ICh7bmFtZSwgdmFsdWUsIGRlbHRhVmFsdWUsIHVybH0pID0+IHtcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxuICBpZiAoIXVybCAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eaHR0cC8pKSB7XG4gICAgdXJsID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCBhc0ltZyA9IC88aW1nPi8udGVzdChuYW1lKTtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwicm93XCIga2V5PXtuYW1lfT5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJyb3dfX25hbWVcIj57bmFtZX08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cbiAgICAgICAge2FzSW1nID8gKFxuICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz5cbiAgICAgICAgKSA6IHVybCA/IChcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgICB7bm90TnVsbG9yVW5kZWZpbmVkKGRlbHRhVmFsdWUpICYmIChcbiAgICAgICAgPHRkXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm93X19kZWx0YS12YWx1ZSAke1xuICAgICAgICAgICAgZGVsdGFWYWx1ZS50b1N0cmluZygpLmNoYXJBdCgwKSA9PT0gJysnID8gJ3Bvc2l0aXZlJyA6ICduZWdhdGl2ZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHtkZWx0YVZhbHVlfVxuICAgICAgICA8L3RkPlxuICAgICAgKX1cbiAgICA8L3RyPlxuICApO1xufTtcblxuY29uc3QgRW50cnlJbmZvID0gKHtmaWVsZHNUb1Nob3csIGZpZWxkcywgZGF0YSwgcHJpbWFyeURhdGEsIGNvbXBhcmVUeXBlfSkgPT4gKFxuICA8dGJvZHk+XG4gICAge2ZpZWxkc1RvU2hvdy5tYXAoaXRlbSA9PiAoXG4gICAgICA8RW50cnlJbmZvUm93XG4gICAgICAgIGtleT17aXRlbS5uYW1lfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgcHJpbWFyeURhdGE9e3ByaW1hcnlEYXRhfVxuICAgICAgICBjb21wYXJlVHlwZT17Y29tcGFyZVR5cGV9XG4gICAgICAvPlxuICAgICkpfVxuICA8L3Rib2R5PlxuKTtcblxuY29uc3QgRW50cnlJbmZvUm93ID0gKHtpdGVtLCBmaWVsZHMsIGRhdGEsIHByaW1hcnlEYXRhLCBjb21wYXJlVHlwZX0pID0+IHtcbiAgY29uc3QgZmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSBpdGVtLm5hbWUpO1xuICBpZiAoZmllbGRJZHggPCAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGRJZHhdO1xuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBnZXRUb29sdGlwRGlzcGxheVZhbHVlKHtpdGVtLCBmaWVsZCwgZGF0YSwgZmllbGRJZHh9KTtcblxuICBjb25zdCBkaXNwbGF5RGVsdGFWYWx1ZSA9IGdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZSh7XG4gICAgaXRlbSxcbiAgICBmaWVsZCxcbiAgICBkYXRhLFxuICAgIGZpZWxkSWR4LFxuICAgIHByaW1hcnlEYXRhLFxuICAgIGNvbXBhcmVUeXBlXG4gIH0pO1xuXG4gIHJldHVybiA8Um93IG5hbWU9e2ZpZWxkLm5hbWV9IHZhbHVlPXtkaXNwbGF5VmFsdWV9IGRlbHRhVmFsdWU9e2Rpc3BsYXlEZWx0YVZhbHVlfSAvPjtcbn07XG5cbi8vIFRPRE86IHN1cHBvcnRpbmcgY29tcGFyYXRpdmUgdmFsdWUgZm9yIGFnZ3JlZ2F0ZWQgY2VsbHMgYXMgd2VsbFxuY29uc3QgQ2VsbEluZm8gPSAoe2RhdGEsIGxheWVyfSkgPT4ge1xuICBjb25zdCB7Y29sb3JGaWVsZCwgc2l6ZUZpZWxkfSA9IGxheWVyLmNvbmZpZztcblxuICByZXR1cm4gKFxuICAgIDx0Ym9keT5cbiAgICAgIDxSb3cgbmFtZT17J3RvdGFsIHBvaW50cyd9IGtleT1cImNvdW50XCIgdmFsdWU9e2RhdGEucG9pbnRzICYmIGRhdGEucG9pbnRzLmxlbmd0aH0gLz5cbiAgICAgIHtjb2xvckZpZWxkICYmIGxheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yID8gKFxuICAgICAgICA8Um93XG4gICAgICAgICAgbmFtZT17bGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKCdjb2xvcicpLm1lYXN1cmV9XG4gICAgICAgICAga2V5PVwiY29sb3JcIlxuICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbG9yVmFsdWUgfHwgJ04vQSd9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaXplRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSA/IChcbiAgICAgICAgPFJvd1xuICAgICAgICAgIG5hbWU9e2xheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbignc2l6ZScpLm1lYXN1cmV9XG4gICAgICAgICAga2V5PVwic2l6ZVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGEuZWxldmF0aW9uVmFsdWUgfHwgJ04vQSd9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L3Rib2R5PlxuICApO1xufTtcblxuY29uc3QgTGF5ZXJIb3ZlckluZm9GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBMYXllckhvdmVySW5mbyA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7ZGF0YSwgbGF5ZXJ9ID0gcHJvcHM7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWxheWVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fbGF5ZXItaW5mb1wiPlxuICAgICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XG4gICAgICAgICAgPExheWVycyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICB7cHJvcHMubGF5ZXIuY29uZmlnLmxhYmVsfVxuICAgICAgICA8L1N0eWxlZExheWVyTmFtZT5cbiAgICAgICAgPFN0eWxlZFRhYmxlPlxuICAgICAgICAgIHtwcm9wcy5sYXllci5pc0FnZ3JlZ2F0ZWQgPyA8Q2VsbEluZm8gey4uLnByb3BzfSAvPiA6IDxFbnRyeUluZm8gey4uLnByb3BzfSAvPn1cbiAgICAgICAgPC9TdHlsZWRUYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgTGF5ZXJIb3ZlckluZm8ucHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZmllbGRzVG9TaG93OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSwgUHJvcFR5cGVzLm9iamVjdF0pXG4gIH07XG4gIHJldHVybiBMYXllckhvdmVySW5mbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVySG92ZXJJbmZvRmFjdG9yeTtcbiJdfQ==