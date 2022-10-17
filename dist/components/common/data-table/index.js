"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableSection = exports.Container = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _optionDropdown = _interopRequireDefault(require("./option-dropdown"));

var _grid = _interopRequireDefault(require("./grid"));

var _button = _interopRequireDefault(require("./button"));

var _icons = require("../icons");

var _dataUtils = require("../../../utils/data-utils");

var _cellSize = require("./cell-size");

var _defaultSettings = require("../../../constants/default-settings");

var _fieldToken = _interopRequireDefault(require("../field-token"));

var _fieldToAlignRight, _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var defaultHeaderRowHeight = 55;
var defaultRowHeight = 32;
var overscanColumnCount = 10;
var overscanRowCount = 10;
var fieldToAlignRight = (_fieldToAlignRight = {}, (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.integer, true), (0, _defineProperty2["default"])(_fieldToAlignRight, _defaultSettings.ALL_FIELD_TYPES.real, true), _fieldToAlignRight);

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 11px;\n  flex-grow: 1;\n  color: ", ";\n  width: 100%;\n\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n\n  .cell {\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  .results-table-wrapper {\n    position: relative;\n    min-height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    overflow: hidden;\n    border-top: none;\n\n    .scroll-in-ui-thread::after {\n      content: '';\n      height: 100%;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      width: 100%;\n    }\n\n    .grid-row {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n    }\n    .grid-column {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 auto;\n    }\n    .pinned-grid-container {\n      flex: 0 0 75px;\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-right: 2px solid ", ";\n    }\n\n    .header-grid {\n      overflow: hidden !important;\n    }\n\n    .even-row {\n      background-color: ", ";\n    }\n    .odd-row {\n      background-color: ", ";\n    }\n    .cell,\n    .header-cell {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: center;\n      overflow: hidden;\n\n      .n-sort-idx {\n        font-size: 9px;\n      }\n    }\n    .cell {\n      border-bottom: 1px solid ", ";\n      border-right: 1px solid ", ";\n      white-space: nowrap;\n      overflow: auto;\n      padding: 0 ", "px;\n      font-size: ", "px;\n\n      .result-link {\n        text-decoration: none;\n      }\n    }\n    .cell.end-cell,\n    .header-cell.end-cell {\n      border-right: none;\n      padding-right: ", "px;\n    }\n    .cell.first-cell,\n    .header-cell.first-cell {\n      padding-left: ", "px;\n    }\n    .cell.bottom-cell {\n      border-bottom: none;\n    }\n    .cell.align-right {\n      align-items: flex-end;\n    }\n    .header-cell {\n      border-bottom: 1px solid ", ";\n      border-top: 1px solid ", ";\n      padding-top: ", "px;\n      padding-right: 0;\n      padding-bottom: ", "px;\n      padding-left: ", "px;\n      align-items: center;\n      justify-content: space-between;\n      display: flex;\n      flex-direction: row;\n      background-color: ", ";\n\n      &:hover {\n        .more {\n          color: ", ";\n        }\n      }\n      .n-sort-idx {\n        font-size: 9px;\n      }\n      .details {\n        font-weight: 500;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        height: 100%;\n        overflow: hidden;\n        flex-grow: 1;\n\n        .col-name {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          cursor: pointer;\n\n          .col-name__left {\n            display: flex;\n            align-items: center;\n            overflow: hidden;\n            svg {\n              margin-left: 6px;\n            }\n          }\n          .col-name__name {\n            overflow: hidden;\n            white-space: nowrap;\n          }\n        }\n      }\n\n      .more {\n        color: transparent;\n        margin-left: 5px;\n      }\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.theme.dataTableTextColor;
}, function (props) {
  return props.theme.pinnedGridBorderColor;
}, function (props) {
  return props.theme.evenRowBackground;
}, function (props) {
  return props.theme.oddRowBackground;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.cellFontSize;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerPaddingTop;
}, function (props) {
  return props.theme.headerPaddingBottom;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.headerCellBackground;
}, function (props) {
  return props.theme.headerCellIconColor;
});

exports.Container = Container;
var defaultColumnWidth = 200;

var columnWidthFunction = function columnWidthFunction(columns, cellSizeCache, ghost) {
  return function (_ref) {
    var index = _ref.index;
    return (columns[index] || {}).ghost ? ghost : cellSizeCache[columns[index]] || defaultColumnWidth;
  };
};
/*
 * This is an accessor method used to generalize getting a cell from a data row
 */


var getRowCell = function getRowCell(_ref2) {
  var rows = _ref2.rows,
      columns = _ref2.columns,
      column = _ref2.column,
      colMeta = _ref2.colMeta,
      rowIndex = _ref2.rowIndex,
      sortOrder = _ref2.sortOrder;
  var rowIdx = sortOrder && sortOrder.length ? (0, _lodash["default"])(sortOrder, rowIndex) : rowIndex;
  var type = colMeta[column].type;
  return (0, _dataUtils.parseFieldValue)((0, _lodash["default"])(rows, [rowIdx, columns.indexOf(column)], 'Err'), type);
};

var TableSection = function TableSection(_ref3) {
  var classList = _ref3.classList,
      isPinned = _ref3.isPinned,
      columns = _ref3.columns,
      headerGridProps = _ref3.headerGridProps,
      fixedWidth = _ref3.fixedWidth,
      _ref3$fixedHeight = _ref3.fixedHeight,
      fixedHeight = _ref3$fixedHeight === void 0 ? undefined : _ref3$fixedHeight,
      onScroll = _ref3.onScroll,
      scrollTop = _ref3.scrollTop,
      dataGridProps = _ref3.dataGridProps,
      columnWidth = _ref3.columnWidth,
      setGridRef = _ref3.setGridRef,
      headerCellRender = _ref3.headerCellRender,
      dataCellRender = _ref3.dataCellRender,
      _ref3$scrollLeft = _ref3.scrollLeft,
      scrollLeft = _ref3$scrollLeft === void 0 ? undefined : _ref3$scrollLeft;
  return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref4) {
    var width = _ref4.width,
        height = _ref4.height;
    var gridDimension = {
      columnCount: columns.length,
      columnWidth: columnWidth,
      width: fixedWidth || width
    };
    var dataGridHeight = fixedHeight || height;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.header)
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: headerCellRender
    }, headerGridProps, gridDimension, {
      scrollLeft: scrollLeft
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames3["default"])('scroll-in-ui-thread', classList.rows),
      style: {
        top: headerGridProps.height
      }
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: dataCellRender
    }, dataGridProps, gridDimension, {
      className: isPinned ? 'pinned-grid' : 'body-grid',
      height: dataGridHeight - headerGridProps.height,
      onScroll: onScroll,
      scrollTop: scrollTop,
      setGridRef: setGridRef
    }))));
  });
};

exports.TableSection = TableSection;
DataTableFactory.deps = [_fieldToken["default"]];

function DataTableFactory(FieldToken) {
  var DataTable = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(DataTable, _Component);

    var _super = _createSuper(DataTable);

    function DataTable() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        cellSizeCache: {},
        moreOptionsColumn: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", function (props) {
        return props.columns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedColumns", function (props) {
        return props.pinnedColumns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedColumns", (0, _reselect.createSelector)(_this.columns, _this.pinnedColumns, function (columns, pinnedColumns) {
        return !Array.isArray(pinnedColumns) ? columns : columns.filter(function (c) {
          return !pinnedColumns.includes(c);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMoreOptions", function (moreOptionsColumn) {
        return _this.setState({
          moreOptionsColumn: _this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCellSizeCache", function () {
        var _this$props = _this.props,
            propsCache = _this$props.cellSizeCache,
            fixedWidth = _this$props.fixedWidth,
            pinnedColumns = _this$props.pinnedColumns;

        var unpinnedColumns = _this.unpinnedColumns(_this.props);

        var width = fixedWidth ? fixedWidth : _this.root.current ? _this.root.current.clientWidth : 0; // pin column border is 2 pixel vs 1 pixel

        var adjustWidth = pinnedColumns.length ? width - 1 : width;

        var _adjustCellsToContain = (0, _cellSize.adjustCellsToContainer)(adjustWidth, propsCache, pinnedColumns, unpinnedColumns),
            cellSizeCache = _adjustCellsToContain.cellSizeCache,
            ghost = _adjustCellsToContain.ghost;

        return {
          cellSizeCache: cellSizeCache,
          ghost: ghost
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScaleCellsToWidth", function () {
        _this.setState(_this.getCellSizeCache());
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleCellsToWidth", (0, _lodash2["default"])(_this.doScaleCellsToWidth, 300));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHeaderCell", function (columns, isPinned, props, toggleMoreOptions, moreOptionsColumn, TokenComponent) {
        // eslint-disable-next-line react/display-name
        return function (cellInfo) {
          var _classnames;

          var columnIndex = cellInfo.columnIndex,
              key = cellInfo.key,
              style = cellInfo.style;
          var colMeta = props.colMeta,
              sortColumn = props.sortColumn,
              _sortTableColumn = props.sortTableColumn,
              _pinTableColumn = props.pinTableColumn,
              _copyTableColumn = props.copyTableColumn;
          var column = columns[columnIndex];
          var isGhost = column.ghost;
          var isSorted = sortColumn[column];
          var firstCell = columnIndex === 0;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames3["default"])('header-cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "column-".concat(columnIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-header-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), _classnames)),
            key: key,
            style: style,
            onClick: function onClick(e) {
              e.shiftKey ? _sortTableColumn(column) : null;
            },
            onDoubleClick: function onDoubleClick() {
              return _sortTableColumn(column);
            },
            title: column
          }, isGhost ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
            className: "details"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name__left"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "col-name__name"
          }, colMeta[column].name), /*#__PURE__*/_react["default"].createElement(_button["default"], {
            className: "col-name__sort",
            onClick: function onClick() {
              return _sortTableColumn(column);
            }
          }, isSorted ? isSorted === _defaultSettings.SORT_ORDER.ASCENDING ? /*#__PURE__*/_react["default"].createElement(_icons.ArrowUp, {
            height: "14px"
          }) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
            height: "14px"
          }) : null)), /*#__PURE__*/_react["default"].createElement(_button["default"], {
            className: "more",
            onClick: function onClick() {
              return toggleMoreOptions(column);
            }
          }, /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
            height: "14px"
          }))), /*#__PURE__*/_react["default"].createElement(FieldToken, {
            type: colMeta[column].type
          })), /*#__PURE__*/_react["default"].createElement("section", {
            className: "options"
          }, /*#__PURE__*/_react["default"].createElement(_optionDropdown["default"], {
            isOpened: moreOptionsColumn === column,
            type: colMeta[column].type,
            column: column,
            toggleMoreOptions: toggleMoreOptions,
            sortTableColumn: function sortTableColumn(mode) {
              return _sortTableColumn(column, mode);
            },
            sortMode: sortColumn && sortColumn[column],
            pinTableColumn: function pinTableColumn() {
              return _pinTableColumn(column);
            },
            copyTableColumn: function copyTableColumn() {
              return _copyTableColumn(column);
            },
            isSorted: isSorted,
            isPinned: isPinned
          }))));
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderDataCell", function (columns, isPinned, props) {
        return function (cellInfo) {
          var _classnames2;

          var columnIndex = cellInfo.columnIndex,
              key = cellInfo.key,
              style = cellInfo.style,
              rowIndex = cellInfo.rowIndex;
          var rows = props.rows,
              colMeta = props.colMeta;
          var column = columns[columnIndex];
          var isGhost = column.ghost;
          var rowCell = isGhost ? '' : getRowCell(_objectSpread(_objectSpread({}, props), {}, {
            column: column,
            rowIndex: rowIndex
          }));
          var type = isGhost ? null : colMeta[column].type;
          var endCell = columnIndex === columns.length - 1;
          var firstCell = columnIndex === 0;
          var bottomCell = rowIndex === rows.length - 1;
          var alignRight = fieldToAlignRight[type];

          var cell = /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames3["default"])('cell', (_classnames2 = {}, (0, _defineProperty2["default"])(_classnames2, rowIndex % 2 === 0 ? 'even-row' : 'odd-row', true), (0, _defineProperty2["default"])(_classnames2, "row-".concat(rowIndex), true), (0, _defineProperty2["default"])(_classnames2, 'pinned-cell', isPinned), (0, _defineProperty2["default"])(_classnames2, 'first-cell', firstCell), (0, _defineProperty2["default"])(_classnames2, 'end-cell', endCell), (0, _defineProperty2["default"])(_classnames2, 'bottom-cell', bottomCell), (0, _defineProperty2["default"])(_classnames2, 'align-right', alignRight), _classnames2)),
            key: key,
            style: style,
            title: isGhost ? undefined : rowCell
          }, "".concat(rowCell).concat(endCell ? '\n' : '\t'));

          return cell;
        };
      });
      return _this;
    }

    (0, _createClass2["default"])(DataTable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.scaleCellsToWidth);
        this.scaleCellsToWidth();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.cellSizeCache !== prevProps.cellSizeCache || this.props.pinnedColumns !== prevProps.pinnedColumns) {
          this.scaleCellsToWidth();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.scaleCellsToWidth); // fix Warning: Can't perform a React state update on an unmounted component

        this.setState = function () {
          return;
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            rows = _this$props2.rows,
            pinnedColumns = _this$props2.pinnedColumns,
            _this$props2$theme = _this$props2.theme,
            theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
            fixedWidth = _this$props2.fixedWidth,
            fixedHeight = _this$props2.fixedHeight;
        var unpinnedColumns = this.unpinnedColumns(this.props);
        var _this$state = this.state,
            cellSizeCache = _this$state.cellSizeCache,
            moreOptionsColumn = _this$state.moreOptionsColumn,
            ghost = _this$state.ghost;
        var unpinnedColumnsGhost = ghost ? [].concat((0, _toConsumableArray2["default"])(unpinnedColumns), [{
          ghost: true
        }]) : unpinnedColumns;
        var pinnedColumnsWidth = pinnedColumns.reduce(function (acc, val) {
          return acc + (0, _lodash["default"])(cellSizeCache, val, 0);
        }, 0);
        var hasPinnedColumns = Boolean(pinnedColumns.length);
        var _theme$headerRowHeigh = theme.headerRowHeight,
            headerRowHeight = _theme$headerRowHeigh === void 0 ? defaultHeaderRowHeight : _theme$headerRowHeigh,
            _theme$rowHeight = theme.rowHeight,
            rowHeight = _theme$rowHeight === void 0 ? defaultRowHeight : _theme$rowHeight;
        var headerGridProps = {
          cellSizeCache: cellSizeCache,
          className: 'header-grid',
          height: headerRowHeight,
          rowCount: 1,
          rowHeight: headerRowHeight
        };
        var dataGridProps = {
          cellSizeCache: cellSizeCache,
          overscanColumnCount: overscanColumnCount,
          overscanRowCount: overscanRowCount,
          rowCount: (rows || []).length,
          rowHeight: rowHeight
        };
        return /*#__PURE__*/_react["default"].createElement(Container, {
          className: "data-table-container",
          ref: this.root
        }, Object.keys(cellSizeCache).length && /*#__PURE__*/_react["default"].createElement(_reactVirtualized.ScrollSync, null, function (_ref5) {
          var _onScroll = _ref5.onScroll,
              scrollLeft = _ref5.scrollLeft,
              scrollTop = _ref5.scrollTop;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "results-table-wrapper"
          }, hasPinnedColumns && /*#__PURE__*/_react["default"].createElement("div", {
            key: "pinned-columns",
            className: "pinned-columns grid-row"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: {
              header: 'pinned-columns--header pinned-grid-container',
              rows: 'pinned-columns--rows pinned-grid-container'
            },
            isPinned: true,
            columns: pinnedColumns,
            headerGridProps: headerGridProps,
            fixedWidth: pinnedColumnsWidth,
            onScroll: function onScroll(args) {
              return _onScroll(_objectSpread(_objectSpread({}, args), {}, {
                scrollLeft: scrollLeft
              }));
            },
            scrollTop: scrollTop,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(pinnedGrid) {
              return _this2.pinnedGrid = pinnedGrid;
            },
            columnWidth: columnWidthFunction(pinnedColumns, cellSizeCache),
            headerCellRender: _this2.renderHeaderCell(pinnedColumns, true, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this2.renderDataCell(pinnedColumns, true, _this2.props)
          })), /*#__PURE__*/_react["default"].createElement("div", {
            key: "unpinned-columns",
            style: {
              marginLeft: "".concat(hasPinnedColumns ? "".concat(pinnedColumnsWidth, "px") : '0')
            },
            className: "unpinned-columns grid-column"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: {
              header: 'unpinned-columns--header unpinned-grid-container',
              rows: 'unpinned-columns--rows unpinned-grid-container'
            },
            isPinned: false,
            columns: unpinnedColumnsGhost,
            headerGridProps: headerGridProps,
            fixedWidth: fixedWidth,
            fixedHeight: fixedHeight,
            onScroll: _onScroll,
            scrollTop: scrollTop,
            scrollLeft: scrollLeft,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(unpinnedGrid) {
              return _this2.unpinnedGrid = unpinnedGrid;
            },
            columnWidth: columnWidthFunction(unpinnedColumnsGhost, cellSizeCache, ghost),
            headerCellRender: _this2.renderHeaderCell(unpinnedColumnsGhost, false, _this2.props, _this2.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this2.renderDataCell(unpinnedColumnsGhost, false, _this2.props)
          })));
        }));
      }
    }]);
    return DataTable;
  }(_react.Component);

  (0, _defineProperty2["default"])(DataTable, "defaultProps", {
    rows: [],
    pinnedColumns: [],
    colMeta: {},
    cellSizeCache: {},
    sortColumn: {},
    fixedWidth: null,
    fixedHeight: null,
    theme: {}
  });
  return (0, _styledComponents.withTheme)(DataTable);
}

var _default = DataTableFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9kYXRhLXRhYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRIZWFkZXJSb3dIZWlnaHQiLCJkZWZhdWx0Um93SGVpZ2h0Iiwib3ZlcnNjYW5Db2x1bW5Db3VudCIsIm92ZXJzY2FuUm93Q291bnQiLCJmaWVsZFRvQWxpZ25SaWdodCIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImRhdGFUYWJsZVRleHRDb2xvciIsInBpbm5lZEdyaWRCb3JkZXJDb2xvciIsImV2ZW5Sb3dCYWNrZ3JvdW5kIiwib2RkUm93QmFja2dyb3VuZCIsImNlbGxCb3JkZXJDb2xvciIsImNlbGxQYWRkaW5nU2lkZSIsImNlbGxGb250U2l6ZSIsImVkZ2VDZWxsUGFkZGluZ1NpZGUiLCJoZWFkZXJDZWxsQm9yZGVyQ29sb3IiLCJoZWFkZXJQYWRkaW5nVG9wIiwiaGVhZGVyUGFkZGluZ0JvdHRvbSIsImhlYWRlckNlbGxCYWNrZ3JvdW5kIiwiaGVhZGVyQ2VsbEljb25Db2xvciIsImRlZmF1bHRDb2x1bW5XaWR0aCIsImNvbHVtbldpZHRoRnVuY3Rpb24iLCJjb2x1bW5zIiwiY2VsbFNpemVDYWNoZSIsImdob3N0IiwiaW5kZXgiLCJnZXRSb3dDZWxsIiwicm93cyIsImNvbHVtbiIsImNvbE1ldGEiLCJyb3dJbmRleCIsInNvcnRPcmRlciIsInJvd0lkeCIsImxlbmd0aCIsInR5cGUiLCJpbmRleE9mIiwiVGFibGVTZWN0aW9uIiwiY2xhc3NMaXN0IiwiaXNQaW5uZWQiLCJoZWFkZXJHcmlkUHJvcHMiLCJmaXhlZFdpZHRoIiwiZml4ZWRIZWlnaHQiLCJ1bmRlZmluZWQiLCJvblNjcm9sbCIsInNjcm9sbFRvcCIsImRhdGFHcmlkUHJvcHMiLCJjb2x1bW5XaWR0aCIsInNldEdyaWRSZWYiLCJoZWFkZXJDZWxsUmVuZGVyIiwiZGF0YUNlbGxSZW5kZXIiLCJzY3JvbGxMZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJncmlkRGltZW5zaW9uIiwiY29sdW1uQ291bnQiLCJkYXRhR3JpZEhlaWdodCIsImhlYWRlciIsInRvcCIsIkRhdGFUYWJsZUZhY3RvcnkiLCJkZXBzIiwiRmllbGRUb2tlbkZhY3RvcnkiLCJGaWVsZFRva2VuIiwiRGF0YVRhYmxlIiwibW9yZU9wdGlvbnNDb2x1bW4iLCJwaW5uZWRDb2x1bW5zIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIiwiYyIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJzdGF0ZSIsInByb3BzQ2FjaGUiLCJ1bnBpbm5lZENvbHVtbnMiLCJyb290IiwiY3VycmVudCIsImNsaWVudFdpZHRoIiwiYWRqdXN0V2lkdGgiLCJnZXRDZWxsU2l6ZUNhY2hlIiwiZG9TY2FsZUNlbGxzVG9XaWR0aCIsInRvZ2dsZU1vcmVPcHRpb25zIiwiVG9rZW5Db21wb25lbnQiLCJjZWxsSW5mbyIsImNvbHVtbkluZGV4Iiwia2V5Iiwic3R5bGUiLCJzb3J0Q29sdW1uIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJpc0dob3N0IiwiaXNTb3J0ZWQiLCJmaXJzdENlbGwiLCJlIiwic2hpZnRLZXkiLCJuYW1lIiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIm1vZGUiLCJyb3dDZWxsIiwiZW5kQ2VsbCIsImJvdHRvbUNlbGwiLCJhbGlnblJpZ2h0IiwiY2VsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY2FsZUNlbGxzVG9XaWR0aCIsInByZXZQcm9wcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bnBpbm5lZENvbHVtbnNHaG9zdCIsInBpbm5lZENvbHVtbnNXaWR0aCIsInJlZHVjZSIsImFjYyIsInZhbCIsImhhc1Bpbm5lZENvbHVtbnMiLCJCb29sZWFuIiwiaGVhZGVyUm93SGVpZ2h0Iiwicm93SGVpZ2h0IiwiY2xhc3NOYW1lIiwicm93Q291bnQiLCJPYmplY3QiLCJrZXlzIiwiYXJncyIsInBpbm5lZEdyaWQiLCJyZW5kZXJIZWFkZXJDZWxsIiwicmVuZGVyRGF0YUNlbGwiLCJtYXJnaW5MZWZ0IiwidW5waW5uZWRHcmlkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsRUFBL0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7QUFDQSxJQUFNQyxpQkFBaUIsa0ZBQ3BCQyxpQ0FBZ0JDLE9BREksRUFDTSxJQUROLHdEQUVwQkQsaUNBQWdCRSxJQUZJLEVBRUcsSUFGSCxzQkFBdkI7O0FBS08sSUFBTUMsU0FBUyxHQUFHQyw2QkFBT0MsR0FBVixvK0dBSVgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxrQkFBaEI7QUFBQSxDQUpNLEVBMERVLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUscUJBQWhCO0FBQUEsQ0ExRGYsRUFrRUksVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxpQkFBaEI7QUFBQSxDQWxFVCxFQXFFSSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLGdCQUFoQjtBQUFBLENBckVULEVBdUZXLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQXZGaEIsRUF3RlUsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxlQUFo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QSxXQUFXLEVBQUUxRyxtQkFBbUIsQ0FDOUJ3RixvQkFEOEIsRUFFOUJ0RixhQUY4QixFQUc5QkMsS0FIOEIsQ0FmbEM7QUFvQkUsWUFBQSxnQkFBZ0IsRUFBRSxNQUFJLENBQUNvRyxnQkFBTCxDQUNoQmYsb0JBRGdCLEVBRWhCLEtBRmdCLEVBR2hCLE1BQUksQ0FBQ3hHLEtBSFcsRUFJaEIsTUFBSSxDQUFDMkUsaUJBSlcsRUFLaEJqQixpQkFMZ0IsQ0FwQnBCO0FBMkJFLFlBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQzhELGNBQUwsQ0FDZGhCLG9CQURjLEVBRWQsS0FGYyxFQUdkLE1BQUksQ0FBQ3hHLEtBSFM7QUEzQmxCLFlBUEYsQ0E1QkYsQ0FERjtBQXdFRCxTQTFFSCxDQUZKLENBREY7QUFrRkQ7QUF0VGlDO0FBQUE7QUFBQSxJQUNaMkgsZ0JBRFk7O0FBQUEsbUNBQzlCbEUsU0FEOEIsa0JBRVo7QUFDcEJuQyxJQUFBQSxJQUFJLEVBQUUsRUFEYztBQUVwQnFDLElBQUFBLGFBQWEsRUFBRSxFQUZLO0FBR3BCbkMsSUFBQUEsT0FBTyxFQUFFLEVBSFc7QUFJcEJOLElBQUFBLGFBQWEsRUFBRSxFQUpLO0FBS3BCK0QsSUFBQUEsVUFBVSxFQUFFLEVBTFE7QUFNcEI5QyxJQUFBQSxVQUFVLEVBQUUsSUFOUTtBQU9wQkMsSUFBQUEsV0FBVyxFQUFFLElBUE87QUFRcEJuQyxJQUFBQSxLQUFLLEVBQUU7QUFSYSxHQUZZO0FBeVRwQyxTQUFPLGlDQUFVd0QsU0FBVixDQUFQO0FBQ0Q7O2VBRWNKLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2Nyb2xsU3luYywgQXV0b1NpemVyfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuaW1wb3J0IE9wdGlvbkRyb3Bkb3duIGZyb20gJy4vb3B0aW9uLWRyb3Bkb3duJztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9ncmlkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHtBcnJvd1VwLCBBcnJvd0Rvd259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7VmVydFRocmVlRG90c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHthZGp1c3RDZWxsc1RvQ29udGFpbmVyfSBmcm9tICcuL2NlbGwtc2l6ZSc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTLCBTT1JUX09SREVSfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgRmllbGRUb2tlbkZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtdG9rZW4nO1xuXG5jb25zdCBkZWZhdWx0SGVhZGVyUm93SGVpZ2h0ID0gNTU7XG5jb25zdCBkZWZhdWx0Um93SGVpZ2h0ID0gMzI7XG5jb25zdCBvdmVyc2NhbkNvbHVtbkNvdW50ID0gMTA7XG5jb25zdCBvdmVyc2NhblJvd0NvdW50ID0gMTA7XG5jb25zdCBmaWVsZFRvQWxpZ25SaWdodCA9IHtcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogdHJ1ZSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZmxleC1ncm93OiAxO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kYXRhVGFibGVUZXh0Q29sb3J9O1xuICB3aWR0aDogMTAwJTtcblxuICAuUmVhY3RWaXJ0dWFsaXplZF9fR3JpZDpmb2N1cyxcbiAgLlJlYWN0VmlydHVhbGl6ZWRfX0dyaWQ6YWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLmNlbGwge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgKjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIC5yZXN1bHRzLXRhYmxlLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbiAgICAuc2Nyb2xsLWluLXVpLXRocmVhZDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZ3JpZC1yb3cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5ncmlkLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICAucGlubmVkLWdyaWQtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDAgMCA3NXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5waW5uZWRHcmlkQm9yZGVyQ29sb3J9O1xuICAgIH1cblxuICAgIC5oZWFkZXItZ3JpZCB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmV2ZW4tcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXZlblJvd0JhY2tncm91bmR9O1xuICAgIH1cbiAgICAub2RkLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9kZFJvd0JhY2tncm91bmR9O1xuICAgIH1cbiAgICAuY2VsbCxcbiAgICAuaGVhZGVyLWNlbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAubi1zb3J0LWlkeCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsRm9udFNpemV9cHg7XG5cbiAgICAgIC5yZXN1bHQtbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNlbGwuZW5kLWNlbGwsXG4gICAgLmhlYWRlci1jZWxsLmVuZC1jZWxsIHtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlICsgcHJvcHMudGhlbWUuZWRnZUNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICB9XG4gICAgLmNlbGwuZmlyc3QtY2VsbCxcbiAgICAuaGVhZGVyLWNlbGwuZmlyc3QtY2VsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlICsgcHJvcHMudGhlbWUuZWRnZUNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICB9XG4gICAgLmNlbGwuYm90dG9tLWNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgLmNlbGwuYWxpZ24tcmlnaHQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAuaGVhZGVyLWNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyQ2VsbEJvcmRlckNvbG9yfTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XG4gICAgICBwYWRkaW5nLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJQYWRkaW5nVG9wfXB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdCb3R0b219cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlfXB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQmFja2dyb3VuZH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAubW9yZSB7XG4gICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyQ2VsbEljb25Db2xvcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5uLXNvcnQtaWR4IHtcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICB9XG4gICAgICAuZGV0YWlscyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgLmNvbC1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgIC5jb2wtbmFtZV9fbGVmdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sLW5hbWVfX25hbWUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5tb3JlIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgZGVmYXVsdENvbHVtbldpZHRoID0gMjAwO1xuXG5jb25zdCBjb2x1bW5XaWR0aEZ1bmN0aW9uID0gKGNvbHVtbnMsIGNlbGxTaXplQ2FjaGUsIGdob3N0KSA9PiAoe2luZGV4fSkgPT4ge1xuICByZXR1cm4gKGNvbHVtbnNbaW5kZXhdIHx8IHt9KS5naG9zdCA/IGdob3N0IDogY2VsbFNpemVDYWNoZVtjb2x1bW5zW2luZGV4XV0gfHwgZGVmYXVsdENvbHVtbldpZHRoO1xufTtcblxuLypcbiAqIFRoaXMgaXMgYW4gYWNjZXNzb3IgbWV0aG9kIHVzZWQgdG8gZ2VuZXJhbGl6ZSBnZXR0aW5nIGEgY2VsbCBmcm9tIGEgZGF0YSByb3dcbiAqL1xuY29uc3QgZ2V0Um93Q2VsbCA9ICh7cm93cywgY29sdW1ucywgY29sdW1uLCBjb2xNZXRhLCByb3dJbmRleCwgc29ydE9yZGVyfSkgPT4ge1xuICBjb25zdCByb3dJZHggPSBzb3J0T3JkZXIgJiYgc29ydE9yZGVyLmxlbmd0aCA/IGdldChzb3J0T3JkZXIsIHJvd0luZGV4KSA6IHJvd0luZGV4O1xuICBjb25zdCB7dHlwZX0gPSBjb2xNZXRhW2NvbHVtbl07XG5cbiAgcmV0dXJuIHBhcnNlRmllbGRWYWx1ZShnZXQocm93cywgW3Jvd0lkeCwgY29sdW1ucy5pbmRleE9mKGNvbHVtbildLCAnRXJyJyksIHR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFRhYmxlU2VjdGlvbiA9ICh7XG4gIGNsYXNzTGlzdCxcbiAgaXNQaW5uZWQsXG4gIGNvbHVtbnMsXG4gIGhlYWRlckdyaWRQcm9wcyxcbiAgZml4ZWRXaWR0aCxcbiAgZml4ZWRIZWlnaHQgPSB1bmRlZmluZWQsXG4gIG9uU2Nyb2xsLFxuICBzY3JvbGxUb3AsXG4gIGRhdGFHcmlkUHJvcHMsXG4gIGNvbHVtbldpZHRoLFxuICBzZXRHcmlkUmVmLFxuICBoZWFkZXJDZWxsUmVuZGVyLFxuICBkYXRhQ2VsbFJlbmRlcixcbiAgc2Nyb2xsTGVmdCA9IHVuZGVmaW5lZFxufSkgPT4gKFxuICA8QXV0b1NpemVyPlxuICAgIHsoe3dpZHRoLCBoZWlnaHR9KSA9PiB7XG4gICAgICBjb25zdCBncmlkRGltZW5zaW9uID0ge1xuICAgICAgICBjb2x1bW5Db3VudDogY29sdW1ucy5sZW5ndGgsXG4gICAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgICB3aWR0aDogZml4ZWRXaWR0aCB8fCB3aWR0aFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRhdGFHcmlkSGVpZ2h0ID0gZml4ZWRIZWlnaHQgfHwgaGVpZ2h0O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsLWluLXVpLXRocmVhZCcsIGNsYXNzTGlzdC5oZWFkZXIpfT5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGNlbGxSZW5kZXJlcj17aGVhZGVyQ2VsbFJlbmRlcn1cbiAgICAgICAgICAgICAgey4uLmhlYWRlckdyaWRQcm9wc31cbiAgICAgICAgICAgICAgey4uLmdyaWREaW1lbnNpb259XG4gICAgICAgICAgICAgIHNjcm9sbExlZnQ9e3Njcm9sbExlZnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsLWluLXVpLXRocmVhZCcsIGNsYXNzTGlzdC5yb3dzKX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRvcDogaGVhZGVyR3JpZFByb3BzLmhlaWdodFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBjZWxsUmVuZGVyZXI9e2RhdGFDZWxsUmVuZGVyfVxuICAgICAgICAgICAgICB7Li4uZGF0YUdyaWRQcm9wc31cbiAgICAgICAgICAgICAgey4uLmdyaWREaW1lbnNpb259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNQaW5uZWQgPyAncGlubmVkLWdyaWQnIDogJ2JvZHktZ3JpZCd9XG4gICAgICAgICAgICAgIGhlaWdodD17ZGF0YUdyaWRIZWlnaHQgLSBoZWFkZXJHcmlkUHJvcHMuaGVpZ2h0fVxuICAgICAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGx9XG4gICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICBzZXRHcmlkUmVmPXtzZXRHcmlkUmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH19XG4gIDwvQXV0b1NpemVyPlxuKTtcblxuRGF0YVRhYmxlRmFjdG9yeS5kZXBzID0gW0ZpZWxkVG9rZW5GYWN0b3J5XTtcbmZ1bmN0aW9uIERhdGFUYWJsZUZhY3RvcnkoRmllbGRUb2tlbikge1xuICBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICByb3dzOiBbXSxcbiAgICAgIHBpbm5lZENvbHVtbnM6IFtdLFxuICAgICAgY29sTWV0YToge30sXG4gICAgICBjZWxsU2l6ZUNhY2hlOiB7fSxcbiAgICAgIHNvcnRDb2x1bW46IHt9LFxuICAgICAgZml4ZWRXaWR0aDogbnVsbCxcbiAgICAgIGZpeGVkSGVpZ2h0OiBudWxsLFxuICAgICAgdGhlbWU6IHt9XG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgY2VsbFNpemVDYWNoZToge30sXG4gICAgICBtb3JlT3B0aW9uc0NvbHVtbjogbnVsbFxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKTtcbiAgICAgIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJvcHMuY2VsbFNpemVDYWNoZSAhPT0gcHJldlByb3BzLmNlbGxTaXplQ2FjaGUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5waW5uZWRDb2x1bW5zICE9PSBwcmV2UHJvcHMucGlubmVkQ29sdW1uc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnNjYWxlQ2VsbHNUb1dpZHRoKTtcbiAgICAgIC8vIGZpeCBXYXJuaW5nOiBDYW4ndCBwZXJmb3JtIGEgUmVhY3Qgc3RhdGUgdXBkYXRlIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnRcbiAgICAgIHRoaXMuc2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcm9vdCA9IGNyZWF0ZVJlZigpO1xuICAgIGNvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5jb2x1bW5zO1xuICAgIHBpbm5lZENvbHVtbnMgPSBwcm9wcyA9PiBwcm9wcy5waW5uZWRDb2x1bW5zO1xuICAgIHVucGlubmVkQ29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY29sdW1ucywgdGhpcy5waW5uZWRDb2x1bW5zLCAoY29sdW1ucywgcGlubmVkQ29sdW1ucykgPT5cbiAgICAgICFBcnJheS5pc0FycmF5KHBpbm5lZENvbHVtbnMpID8gY29sdW1ucyA6IGNvbHVtbnMuZmlsdGVyKGMgPT4gIXBpbm5lZENvbHVtbnMuaW5jbHVkZXMoYykpXG4gICAgKTtcblxuICAgIHRvZ2dsZU1vcmVPcHRpb25zID0gbW9yZU9wdGlvbnNDb2x1bW4gPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3JlT3B0aW9uc0NvbHVtbjpcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vcmVPcHRpb25zQ29sdW1uID09PSBtb3JlT3B0aW9uc0NvbHVtbiA/IG51bGwgOiBtb3JlT3B0aW9uc0NvbHVtblxuICAgICAgfSk7XG5cbiAgICBnZXRDZWxsU2l6ZUNhY2hlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2NlbGxTaXplQ2FjaGU6IHByb3BzQ2FjaGUsIGZpeGVkV2lkdGgsIHBpbm5lZENvbHVtbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMudW5waW5uZWRDb2x1bW5zKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCB3aWR0aCA9IGZpeGVkV2lkdGggPyBmaXhlZFdpZHRoIDogdGhpcy5yb290LmN1cnJlbnQgPyB0aGlzLnJvb3QuY3VycmVudC5jbGllbnRXaWR0aCA6IDA7XG5cbiAgICAgIC8vIHBpbiBjb2x1bW4gYm9yZGVyIGlzIDIgcGl4ZWwgdnMgMSBwaXhlbFxuICAgICAgY29uc3QgYWRqdXN0V2lkdGggPSBwaW5uZWRDb2x1bW5zLmxlbmd0aCA/IHdpZHRoIC0gMSA6IHdpZHRoO1xuICAgICAgY29uc3Qge2NlbGxTaXplQ2FjaGUsIGdob3N0fSA9IGFkanVzdENlbGxzVG9Db250YWluZXIoXG4gICAgICAgIGFkanVzdFdpZHRoLFxuICAgICAgICBwcm9wc0NhY2hlLFxuICAgICAgICBwaW5uZWRDb2x1bW5zLFxuICAgICAgICB1bnBpbm5lZENvbHVtbnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNlbGxTaXplQ2FjaGUsXG4gICAgICAgIGdob3N0XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBkb1NjYWxlQ2VsbHNUb1dpZHRoID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmdldENlbGxTaXplQ2FjaGUoKSk7XG4gICAgfTtcblxuICAgIHNjYWxlQ2VsbHNUb1dpZHRoID0gZGVib3VuY2UodGhpcy5kb1NjYWxlQ2VsbHNUb1dpZHRoLCAzMDApO1xuXG4gICAgcmVuZGVySGVhZGVyQ2VsbCA9IChcbiAgICAgIGNvbHVtbnMsXG4gICAgICBpc1Bpbm5lZCxcbiAgICAgIHByb3BzLFxuICAgICAgdG9nZ2xlTW9yZU9wdGlvbnMsXG4gICAgICBtb3JlT3B0aW9uc0NvbHVtbixcbiAgICAgIFRva2VuQ29tcG9uZW50XG4gICAgKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICByZXR1cm4gY2VsbEluZm8gPT4ge1xuICAgICAgICBjb25zdCB7Y29sdW1uSW5kZXgsIGtleSwgc3R5bGV9ID0gY2VsbEluZm87XG4gICAgICAgIGNvbnN0IHtjb2xNZXRhLCBzb3J0Q29sdW1uLCBzb3J0VGFibGVDb2x1bW4sIHBpblRhYmxlQ29sdW1uLCBjb3B5VGFibGVDb2x1bW59ID0gcHJvcHM7XG5cbiAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG4gICAgICAgIGNvbnN0IGlzR2hvc3QgPSBjb2x1bW4uZ2hvc3Q7XG4gICAgICAgIGNvbnN0IGlzU29ydGVkID0gc29ydENvbHVtbltjb2x1bW5dO1xuICAgICAgICBjb25zdCBmaXJzdENlbGwgPSBjb2x1bW5JbmRleCA9PT0gMDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnaGVhZGVyLWNlbGwnLCB7XG4gICAgICAgICAgICAgIFtgY29sdW1uLSR7Y29sdW1uSW5kZXh9YF06IHRydWUsXG4gICAgICAgICAgICAgICdwaW5uZWQtaGVhZGVyLWNlbGwnOiBpc1Bpbm5lZCxcbiAgICAgICAgICAgICAgJ2ZpcnN0LWNlbGwnOiBmaXJzdENlbGxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgZS5zaGlmdEtleSA/IHNvcnRUYWJsZUNvbHVtbihjb2x1bW4pIDogbnVsbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoKSA9PiBzb3J0VGFibGVDb2x1bW4oY29sdW1uKX1cbiAgICAgICAgICAgIHRpdGxlPXtjb2x1bW59XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzR2hvc3QgPyAoXG4gICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1uYW1lX19sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZV9fbmFtZVwiPntjb2xNZXRhW2NvbHVtbl0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNvbC1uYW1lX19zb3J0XCIgb25DbGljaz17KCkgPT4gc29ydFRhYmxlQ29sdW1uKGNvbHVtbil9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzU29ydGVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NvcnRlZCA9PT0gU09SVF9PUkRFUi5BU0NFTkRJTkcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93VXAgaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93biBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vcmVcIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVNb3JlT3B0aW9ucyhjb2x1bW4pfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VmVydFRocmVlRG90cyBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17Y29sTWV0YVtjb2x1bW5dLnR5cGV9IC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPE9wdGlvbkRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbmVkPXttb3JlT3B0aW9uc0NvbHVtbiA9PT0gY29sdW1ufVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtjb2xNZXRhW2NvbHVtbl0udHlwZX1cbiAgICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmVPcHRpb25zPXt0b2dnbGVNb3JlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXttb2RlID0+IHNvcnRUYWJsZUNvbHVtbihjb2x1bW4sIG1vZGUpfVxuICAgICAgICAgICAgICAgICAgICBzb3J0TW9kZT17c29ydENvbHVtbiAmJiBzb3J0Q29sdW1uW2NvbHVtbl19XG4gICAgICAgICAgICAgICAgICAgIHBpblRhYmxlQ29sdW1uPXsoKSA9PiBwaW5UYWJsZUNvbHVtbihjb2x1bW4pfVxuICAgICAgICAgICAgICAgICAgICBjb3B5VGFibGVDb2x1bW49eygpID0+IGNvcHlUYWJsZUNvbHVtbihjb2x1bW4pfVxuICAgICAgICAgICAgICAgICAgICBpc1NvcnRlZD17aXNTb3J0ZWR9XG4gICAgICAgICAgICAgICAgICAgIGlzUGlubmVkPXtpc1Bpbm5lZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZW5kZXJEYXRhQ2VsbCA9IChjb2x1bW5zLCBpc1Bpbm5lZCwgcHJvcHMpID0+IHtcbiAgICAgIHJldHVybiBjZWxsSW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IHtjb2x1bW5JbmRleCwga2V5LCBzdHlsZSwgcm93SW5kZXh9ID0gY2VsbEluZm87XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2xNZXRhfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgY29uc3QgaXNHaG9zdCA9IGNvbHVtbi5naG9zdDtcblxuICAgICAgICBjb25zdCByb3dDZWxsID0gaXNHaG9zdCA/ICcnIDogZ2V0Um93Q2VsbCh7Li4ucHJvcHMsIGNvbHVtbiwgcm93SW5kZXh9KTtcbiAgICAgICAgY29uc3QgdHlwZSA9IGlzR2hvc3QgPyBudWxsIDogY29sTWV0YVtjb2x1bW5dLnR5cGU7XG5cbiAgICAgICAgY29uc3QgZW5kQ2VsbCA9IGNvbHVtbkluZGV4ID09PSBjb2x1bW5zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGNvbHVtbkluZGV4ID09PSAwO1xuICAgICAgICBjb25zdCBib3R0b21DZWxsID0gcm93SW5kZXggPT09IHJvd3MubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgYWxpZ25SaWdodCA9IGZpZWxkVG9BbGlnblJpZ2h0W3R5cGVdO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjZWxsJywge1xuICAgICAgICAgICAgICBbcm93SW5kZXggJSAyID09PSAwID8gJ2V2ZW4tcm93JyA6ICdvZGQtcm93J106IHRydWUsXG4gICAgICAgICAgICAgIFtgcm93LSR7cm93SW5kZXh9YF06IHRydWUsXG4gICAgICAgICAgICAgICdwaW5uZWQtY2VsbCc6IGlzUGlubmVkLFxuICAgICAgICAgICAgICAnZmlyc3QtY2VsbCc6IGZpcnN0Q2VsbCxcbiAgICAgICAgICAgICAgJ2VuZC1jZWxsJzogZW5kQ2VsbCxcbiAgICAgICAgICAgICAgJ2JvdHRvbS1jZWxsJzogYm90dG9tQ2VsbCxcbiAgICAgICAgICAgICAgJ2FsaWduLXJpZ2h0JzogYWxpZ25SaWdodFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHRpdGxlPXtpc0dob3N0ID8gdW5kZWZpbmVkIDogcm93Q2VsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YCR7cm93Q2VsbH0ke2VuZENlbGwgPyAnXFxuJyA6ICdcXHQnfWB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7cm93cywgcGlubmVkQ29sdW1ucywgdGhlbWUgPSB7fSwgZml4ZWRXaWR0aCwgZml4ZWRIZWlnaHR9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHVucGlubmVkQ29sdW1ucyA9IHRoaXMudW5waW5uZWRDb2x1bW5zKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCB7Y2VsbFNpemVDYWNoZSwgbW9yZU9wdGlvbnNDb2x1bW4sIGdob3N0fSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB1bnBpbm5lZENvbHVtbnNHaG9zdCA9IGdob3N0ID8gWy4uLnVucGlubmVkQ29sdW1ucywge2dob3N0OiB0cnVlfV0gOiB1bnBpbm5lZENvbHVtbnM7XG4gICAgICBjb25zdCBwaW5uZWRDb2x1bW5zV2lkdGggPSBwaW5uZWRDb2x1bW5zLnJlZHVjZShcbiAgICAgICAgKGFjYywgdmFsKSA9PiBhY2MgKyBnZXQoY2VsbFNpemVDYWNoZSwgdmFsLCAwKSxcbiAgICAgICAgMFxuICAgICAgKTtcblxuICAgICAgY29uc3QgaGFzUGlubmVkQ29sdW1ucyA9IEJvb2xlYW4ocGlubmVkQ29sdW1ucy5sZW5ndGgpO1xuICAgICAgY29uc3Qge2hlYWRlclJvd0hlaWdodCA9IGRlZmF1bHRIZWFkZXJSb3dIZWlnaHQsIHJvd0hlaWdodCA9IGRlZmF1bHRSb3dIZWlnaHR9ID0gdGhlbWU7XG5cbiAgICAgIGNvbnN0IGhlYWRlckdyaWRQcm9wcyA9IHtcbiAgICAgICAgY2VsbFNpemVDYWNoZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnaGVhZGVyLWdyaWQnLFxuICAgICAgICBoZWlnaHQ6IGhlYWRlclJvd0hlaWdodCxcbiAgICAgICAgcm93Q291bnQ6IDEsXG4gICAgICAgIHJvd0hlaWdodDogaGVhZGVyUm93SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXRhR3JpZFByb3BzID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBvdmVyc2NhbkNvbHVtbkNvdW50LFxuICAgICAgICBvdmVyc2NhblJvd0NvdW50LFxuICAgICAgICByb3dDb3VudDogKHJvd3MgfHwgW10pLmxlbmd0aCxcbiAgICAgICAgcm93SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRhdGEtdGFibGUtY29udGFpbmVyXCIgcmVmPXt0aGlzLnJvb3R9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhjZWxsU2l6ZUNhY2hlKS5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPFNjcm9sbFN5bmM+XG4gICAgICAgICAgICAgIHsoe29uU2Nyb2xsLCBzY3JvbGxMZWZ0LCBzY3JvbGxUb3B9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0cy10YWJsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtoYXNQaW5uZWRDb2x1bW5zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInBpbm5lZC1jb2x1bW5zXCIgY2xhc3NOYW1lPVwicGlubmVkLWNvbHVtbnMgZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiAncGlubmVkLWNvbHVtbnMtLWhlYWRlciBwaW5uZWQtZ3JpZC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6ICdwaW5uZWQtY29sdW1ucy0tcm93cyBwaW5uZWQtZ3JpZC1jb250YWluZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGlubmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3Bpbm5lZENvbHVtbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckdyaWRQcm9wcz17aGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZFdpZHRoPXtwaW5uZWRDb2x1bW5zV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXthcmdzID0+IG9uU2Nyb2xsKHsuLi5hcmdzLCBzY3JvbGxMZWZ0fSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhR3JpZFByb3BzPXtkYXRhR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHcmlkUmVmPXtwaW5uZWRHcmlkID0+ICh0aGlzLnBpbm5lZEdyaWQgPSBwaW5uZWRHcmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg9e2NvbHVtbldpZHRoRnVuY3Rpb24ocGlubmVkQ29sdW1ucywgY2VsbFNpemVDYWNoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNlbGxSZW5kZXI9e3RoaXMucmVuZGVySGVhZGVyQ2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaW5uZWRDb2x1bW5zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckRhdGFDZWxsKHBpbm5lZENvbHVtbnMsIHRydWUsIHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT1cInVucGlubmVkLWNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtoYXNQaW5uZWRDb2x1bW5zID8gYCR7cGlubmVkQ29sdW1uc1dpZHRofXB4YCA6ICcwJ31gXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bnBpbm5lZC1jb2x1bW5zIGdyaWQtY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6ICd1bnBpbm5lZC1jb2x1bW5zLS1oZWFkZXIgdW5waW5uZWQtZ3JpZC1jb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiAndW5waW5uZWQtY29sdW1ucy0tcm93cyB1bnBpbm5lZC1ncmlkLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Bpbm5lZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXt1bnBpbm5lZENvbHVtbnNHaG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckdyaWRQcm9wcz17aGVhZGVyR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRXaWR0aD17Zml4ZWRXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkSGVpZ2h0PXtmaXhlZEhlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdD17c2Nyb2xsTGVmdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFHcmlkUHJvcHM9e2RhdGFHcmlkUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHcmlkUmVmPXt1bnBpbm5lZEdyaWQgPT4gKHRoaXMudW5waW5uZWRHcmlkID0gdW5waW5uZWRHcmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoPXtjb2x1bW5XaWR0aEZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bnBpbm5lZENvbHVtbnNHaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFNpemVDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckhlYWRlckNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVucGlubmVkQ29sdW1uc0dob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3JlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9yZU9wdGlvbnNDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2VsbFJlbmRlcj17dGhpcy5yZW5kZXJEYXRhQ2VsbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zR2hvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvU2Nyb2xsU3luYz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhUaGVtZShEYXRhVGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVGYWN0b3J5O1xuIl19