"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSuffixAndDelimiters = removeSuffixAndDelimiters;
exports.findPointFieldPairs = findPointFieldPairs;
exports.sortDatasetByColumn = sortDatasetByColumn;
exports.copyTable = copyTable;
exports.copyTableAndUpdate = copyTableAndUpdate;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _console = require("global/console");

var _defaultSettings = require("../../constants/default-settings");

var _d3Array = require("d3-array");

var _utils = require("../utils");

var _gpuFilterUtils = require("../gpu-filter-utils");

var _filterUtils = require("../filter-utils");

var _dataUtils = require("../data-utils");

var _dataScaleUtils = require("../data-scale-utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Unique identifier of each field
var FID_KEY = 'name';
/** @typedef {import('./kepler-table').KeplerTable} KeplerTableClass} */

/**
 * @type {KeplerTableClass}
 */

var KeplerTable = /*#__PURE__*/function () {
  function KeplerTable(_ref) {
    var _ref$info = _ref.info,
        info = _ref$info === void 0 ? {} : _ref$info,
        data = _ref.data,
        color = _ref.color,
        metadata = _ref.metadata;
    (0, _classCallCheck2["default"])(this, KeplerTable);
    // TODO - what to do if validation fails? Can kepler handle exceptions?
    // const validatedData = validateInputData(data);
    // if (!validatedData) {
    //   return this;
    // }
    var allData = data.rows;

    var datasetInfo = _objectSpread({
      id: (0, _utils.generateHashId)(4),
      label: 'new dataset'
    }, info || {});

    var dataId = datasetInfo.id;
    var fields = data.fields.map(function (f, i) {
      return _objectSpread(_objectSpread({}, f), {}, {
        fieldIdx: i,
        valueAccessor: _dataUtils.maybeToDate.bind(null, // is time
        f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp, i, f.format)
      });
    });
    var allIndexes = allData.map(function (_, i) {
      return i;
    });
    this.id = datasetInfo.id;
    this.label = datasetInfo.label;
    this.color = color;
    this.metadata = _objectSpread(_objectSpread({}, metadata), {}, {
      id: datasetInfo.id,
      label: datasetInfo.label
    });
    this.allData = allData;
    this.allIndexes = allIndexes;
    this.filteredIndex = allIndexes;
    this.filteredIndexForDomain = allIndexes;
    this.fieldPairs = findPointFieldPairs(fields);
    this.fields = fields;
    this.gpuFilter = (0, _gpuFilterUtils.getGpuFilterProps)([], dataId, fields);
  }
  /**
   * Get field
   * @param columnName
   */


  (0, _createClass2["default"])(KeplerTable, [{
    key: "getColumnField",
    value: function getColumnField(columnName) {
      var field = this.fields.find(function (fd) {
        return fd[FID_KEY] === columnName;
      });

      this._assetField(columnName, field);

      return field;
    }
    /**
     * Get fieldIdx
     * @param columnName
     */

  }, {
    key: "getColumnFieldIdx",
    value: function getColumnFieldIdx(columnName) {
      var fieldIdx = this.fields.findIndex(function (fd) {
        return fd[FID_KEY] === columnName;
      });

      this._assetField(columnName, Boolean(fieldIdx > -1));

      return fieldIdx;
    }
    /**
     * Get the value of a cell
     */

  }, {
    key: "getValue",
    value: function getValue(columnName, rowIdx) {
      var field = this.getColumnField(columnName);
      return field ? field.valueAccessor(this.allData[rowIdx]) : null;
    }
    /**
     * Updates existing field with a new object
     * @param fieldIdx
     * @param newField
     */

  }, {
    key: "updateColumnField",
    value: function updateColumnField(fieldIdx, newField) {
      this.fields = Object.assign((0, _toConsumableArray2["default"])(this.fields), (0, _defineProperty2["default"])({}, fieldIdx, newField));
    }
    /**
     * Save filterProps to field and retrieve it
     * @param {string} columnName
     */

  }, {
    key: "getColumnFilterProps",
    value: function getColumnFilterProps(columnName) {
      var fieldIdx = this.getColumnFieldIdx(columnName);

      if (fieldIdx < 0) {
        return null;
      }

      var field = this.fields[fieldIdx];

      if (field.hasOwnProperty('filterProps')) {
        return field.filterProps;
      }

      var fieldDomain = this.getColumnFilterDomain(field);

      if (!fieldDomain) {
        return null;
      }

      var filterProps = (0, _filterUtils.getFilterProps)(field, fieldDomain);

      var newField = _objectSpread(_objectSpread({}, field), {}, {
        filterProps: filterProps
      });

      this.updateColumnField(fieldIdx, newField);
      return filterProps;
    }
    /**
     *
     * Apply filters to dataset, return the filtered dataset with updated `gpuFilter`, `filterRecord`, `filteredIndex`, `filteredIndexForDomain`
     * @param filters
     * @param layers
     * @param opt
     */

  }, {
    key: "filterTable",
    value: function filterTable(filters, layers, opt) {
      var _this = this;

      var allData = this.allData,
          dataId = this.id,
          oldFilterRecord = this.filterRecord,
          fields = this.fields; // if there is no filters

      var filterRecord = (0, _filterUtils.getFilterRecord)(dataId, filters, opt || {});
      this.filterRecord = filterRecord;
      this.gpuFilter = (0, _gpuFilterUtils.getGpuFilterProps)(filters, dataId, fields); // const newDataset = set(['filterRecord'], filterRecord, dataset);

      if (!filters.length) {
        this.filteredIndex = this.allIndexes;
        this.filteredIndexForDomain = this.allIndexes;
        return this;
      }

      this.changedFilters = (0, _filterUtils.diffFilters)(filterRecord, oldFilterRecord); // generate 2 sets of filter result
      // filteredIndex used to calculate layer data
      // filteredIndexForDomain used to calculate layer Domain

      var shouldCalDomain = Boolean(this.changedFilters.dynamicDomain);
      var shouldCalIndex = Boolean(this.changedFilters.cpu);
      var filterResult = {};

      if (shouldCalDomain || shouldCalIndex) {
        var dynamicDomainFilters = shouldCalDomain ? filterRecord.dynamicDomain : null;
        var cpuFilters = shouldCalIndex ? filterRecord.cpu : null;
        var filterFuncs = filters.reduce(function (acc, filter) {
          var fieldIndex = (0, _gpuFilterUtils.getDatasetFieldIndexForFilter)(_this.id, filter);
          var field = fieldIndex !== -1 ? fields[fieldIndex] : null;
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, filter.id, (0, _filterUtils.getFilterFunction)(field, _this.id, filter, layers)));
        }, {});
        filterResult = (0, _filterUtils.filterDataByFilterTypes)({
          dynamicDomainFilters: dynamicDomainFilters,
          cpuFilters: cpuFilters,
          filterFuncs: filterFuncs
        }, allData);
      }

      this.filteredIndex = filterResult.filteredIndex || this.filteredIndex;
      this.filteredIndexForDomain = filterResult.filteredIndexForDomain || this.filteredIndexForDomain;
      return this;
    }
    /**
     * Apply filters to a dataset all on CPU, assign to `filteredIdxCPU`, `filterRecordCPU`
     * @param filters
     * @param layers
     */

  }, {
    key: "filterTableCPU",
    value: function filterTableCPU(filters, layers) {
      var opt = {
        cpuOnly: true,
        ignoreDomain: true
      }; // no filter

      if (!filters.length) {
        this.filteredIdxCPU = this.allIndexes;
        this.filterRecordCPU = (0, _filterUtils.getFilterRecord)(this.id, filters, opt);
        return this;
      } // no gpu filter


      if (!filters.find(function (f) {
        return f.gpu;
      })) {
        this.filteredIdxCPU = this.filteredIndex;
        this.filterRecordCPU = (0, _filterUtils.getFilterRecord)(this.id, filters, opt);
        return this;
      } // make a copy for cpu filtering


      var copied = copyTable(this);
      copied.filterRecord = this.filterRecordCPU;
      copied.filteredIndex = this.filteredIdxCPU || [];
      var filtered = copied.filterTable(filters, layers, opt);
      this.filteredIdxCPU = filtered.filteredIndex;
      this.filterRecordCPU = filtered.filterRecord;
      return this;
    }
    /**
     * Calculate field domain based on field type and data
     * for Filter
     */

  }, {
    key: "getColumnFilterDomain",
    value: function getColumnFilterDomain(field) {
      var allData = this.allData;
      var valueAccessor = field.valueAccessor;
      var domain;

      switch (field.type) {
        case _defaultSettings.ALL_FIELD_TYPES.real:
        case _defaultSettings.ALL_FIELD_TYPES.integer:
          // calculate domain and step
          return (0, _filterUtils.getNumericFieldDomain)(allData, valueAccessor);

        case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
          return {
            domain: [true, false]
          };

        case _defaultSettings.ALL_FIELD_TYPES.string:
        case _defaultSettings.ALL_FIELD_TYPES.date:
          domain = (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);
          return {
            domain: domain
          };

        case _defaultSettings.ALL_FIELD_TYPES.timestamp:
          return (0, _filterUtils.getTimestampFieldDomain)(allData, valueAccessor);

        default:
          return {
            domain: (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor)
          };
      }
    }
    /**
     *  Get the domain of this column based on scale type
     */

  }, {
    key: "getColumnLayerDomain",
    value: function getColumnLayerDomain(field, scaleType) {
      var allData = this.allData,
          filteredIndexForDomain = this.filteredIndexForDomain;

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _console.console.error("scale type ".concat(scaleType, " not supported"));

        return null;
      }

      var valueAccessor = field.valueAccessor;

      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.log:
          return (0, _dataScaleUtils.getLogDomain)(filteredIndexForDomain, indexValueAccessor);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
    /**
     * Get a sample of rows to calculate layer boundaries
     */
    // getSampleData(rows)

    /**
     * Parse cell value based on column type and return a string representation
     * Value the field value, type the field type
     */
    // parseFieldValue(value, type)
    // sortDatasetByColumn()

    /**
     * Assert whether field exist
     * @param fieldName
     * @param condition
     */

  }, {
    key: "_assetField",
    value: function _assetField(fieldName, condition) {
      if (!condition) {
        _console.console.error("".concat(fieldName, " doesnt exist in dataset ").concat(this.id));
      }
    }
  }]);
  return KeplerTable;
}(); // HELPER FUNCTIONS (MAINLY EXPORTED FOR TEST...)


function removeSuffixAndDelimiters(layerName, suffix) {
  return layerName.replace(new RegExp(suffix, 'ig'), '').replace(/[_,.]+/g, ' ').trim();
}
/**
 * Find point fields pairs from fields
 *
 * @param fields
 * @returns found point fields
 * @type {typeof import('./kepler-table').findPointFieldPairs}
 */


function findPointFieldPairs(fields) {
  var allNames = fields.map(function (f) {
    return f.name.toLowerCase();
  }); // get list of all fields with matching suffixes

  return allNames.reduce(function (carry, fieldName, idx) {
    // This search for pairs will early exit if found.
    var _iterator = _createForOfIteratorHelper(_defaultSettings.TRIP_POINT_FIELDS),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var suffixPair = _step.value;

        // match first suffix```
        if (fieldName.endsWith(suffixPair[0])) {
          var _ret = function () {
            // match second suffix
            var otherPattern = new RegExp("".concat(suffixPair[0], "$"));
            var partner = fieldName.replace(otherPattern, suffixPair[1]);
            var partnerIdx = allNames.findIndex(function (d) {
              return d === partner;
            });

            if (partnerIdx > -1) {
              var defaultName = removeSuffixAndDelimiters(fieldName, suffixPair[0]);
              carry.push({
                defaultName: defaultName,
                pair: {
                  lat: {
                    fieldIdx: idx,
                    value: fields[idx].name
                  },
                  lng: {
                    fieldIdx: partnerIdx,
                    value: fields[partnerIdx].name
                  }
                },
                suffix: suffixPair
              });
              return {
                v: carry
              };
            }
          }();

          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return carry;
  }, []);
}
/**
 *
 * @param dataset
 * @param column
 * @param mode
 * @type {typeof import('./kepler-table').sortDatasetByColumn}
 */


function sortDatasetByColumn(dataset, column, mode) {
  var allIndexes = dataset.allIndexes,
      fields = dataset.fields,
      allData = dataset.allData;
  var fieldIndex = fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIndex < 0) {
    return dataset;
  }

  var sortBy = _defaultSettings.SORT_ORDER[mode] || _defaultSettings.SORT_ORDER.ASCENDING;

  if (sortBy === _defaultSettings.SORT_ORDER.UNSORT) {
    return _objectSpread(_objectSpread({}, dataset), {}, {
      sortColumn: {},
      sortOrder: null
    });
  }

  var sortFunction = sortBy === _defaultSettings.SORT_ORDER.ASCENDING ? _d3Array.ascending : _d3Array.descending;
  var sortOrder = allIndexes.slice().sort(function (a, b) {
    return sortFunction(allData[a][fieldIndex], allData[b][fieldIndex]);
  });
  return _objectSpread(_objectSpread({}, dataset), {}, {
    sortColumn: (0, _defineProperty2["default"])({}, column, sortBy),
    sortOrder: sortOrder
  });
}

function copyTable(original) {
  return Object.assign(Object.create(Object.getPrototypeOf(original)), original);
}

function copyTableAndUpdate(original) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.entries(options).reduce(function (acc, entry) {
    acc[entry[0]] = entry[1];
    return acc;
  }, copyTable(original));
}

var _default = KeplerTable;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy90YWJsZS11dGlscy9rZXBsZXItdGFibGUuanMiXSwibmFtZXMiOlsiRklEX0tFWSIsIktlcGxlclRhYmxlIiwiaW5mbyIsImRhdGEiLCJjb2xvciIsIm1ldGFkYXRhIiwiYWxsRGF0YSIsInJvd3MiLCJkYXRhc2V0SW5mbyIsImlkIiwibGFiZWwiLCJkYXRhSWQiLCJmaWVsZHMiLCJtYXAiLCJmIiwiaSIsImZpZWxkSWR4IiwidmFsdWVBY2Nlc3NvciIsIm1heWJlVG9EYXRlIiwiYmluZCIsInR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJ0aW1lc3RhbXAiLCJmb3JtYXQiLCJhbGxJbmRleGVzIiwiXyIsImZpbHRlcmVkSW5kZXgiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZmllbGRQYWlycyIsImZpbmRQb2ludEZpZWxkUGFpcnMiLCJncHVGaWx0ZXIiLCJjb2x1bW5OYW1lIiwiZmllbGQiLCJmaW5kIiwiZmQiLCJfYXNzZXRGaWVsZCIsImZpbmRJbmRleCIsIkJvb2xlYW4iLCJyb3dJZHgiLCJnZXRDb2x1bW5GaWVsZCIsIm5ld0ZpZWxkIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0Q29sdW1uRmllbGRJZHgiLCJoYXNPd25Qcm9wZXJ0eSIsImZpbHRlclByb3BzIiwiZmllbGREb21haW4iLCJnZXRDb2x1bW5GaWx0ZXJEb21haW4iLCJ1cGRhdGVDb2x1bW5GaWVsZCIsImZpbHRlcnMiLCJsYXllcnMiLCJvcHQiLCJvbGRGaWx0ZXJSZWNvcmQiLCJmaWx0ZXJSZWNvcmQiLCJsZW5ndGgiLCJjaGFuZ2VkRmlsdGVycyIsInNob3VsZENhbERvbWFpbiIsImR5bmFtaWNEb21haW4iLCJzaG91bGRDYWxJbmRleCIsImNwdSIsImZpbHRlclJlc3VsdCIsImR5bmFtaWNEb21haW5GaWx0ZXJzIiwiY3B1RmlsdGVycyIsImZpbHRlckZ1bmNzIiwicmVkdWNlIiwiYWNjIiwiZmlsdGVyIiwiZmllbGRJbmRleCIsImNwdU9ubHkiLCJpZ25vcmVEb21haW4iLCJmaWx0ZXJlZElkeENQVSIsImZpbHRlclJlY29yZENQVSIsImdwdSIsImNvcGllZCIsImNvcHlUYWJsZSIsImZpbHRlcmVkIiwiZmlsdGVyVGFibGUiLCJkb21haW4iLCJyZWFsIiwiaW50ZWdlciIsInN0cmluZyIsImRhdGUiLCJzY2FsZVR5cGUiLCJTQ0FMRV9UWVBFUyIsIkNvbnNvbGUiLCJlcnJvciIsImluZGV4VmFsdWVBY2Nlc3NvciIsInNvcnRGdW5jdGlvbiIsIm9yZGluYWwiLCJwb2ludCIsInF1YW50aWxlIiwibG9nIiwicXVhbnRpemUiLCJsaW5lYXIiLCJzcXJ0IiwiZmllbGROYW1lIiwiY29uZGl0aW9uIiwicmVtb3ZlU3VmZml4QW5kRGVsaW1pdGVycyIsImxheWVyTmFtZSIsInN1ZmZpeCIsInJlcGxhY2UiLCJSZWdFeHAiLCJ0cmltIiwiYWxsTmFtZXMiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjYXJyeSIsImlkeCIsIlRSSVBfUE9JTlRfRklFTERTIiwic3VmZml4UGFpciIsImVuZHNXaXRoIiwib3RoZXJQYXR0ZXJuIiwicGFydG5lciIsInBhcnRuZXJJZHgiLCJkIiwiZGVmYXVsdE5hbWUiLCJwdXNoIiwicGFpciIsImxhdCIsInZhbHVlIiwibG5nIiwic29ydERhdGFzZXRCeUNvbHVtbiIsImRhdGFzZXQiLCJjb2x1bW4iLCJtb2RlIiwic29ydEJ5IiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIlVOU09SVCIsInNvcnRDb2x1bW4iLCJzb3J0T3JkZXIiLCJhc2NlbmRpbmciLCJkZXNjZW5kaW5nIiwic2xpY2UiLCJzb3J0IiwiYSIsImIiLCJvcmlnaW5hbCIsImNyZWF0ZSIsImdldFByb3RvdHlwZU9mIiwiY29weVRhYmxlQW5kVXBkYXRlIiwib3B0aW9ucyIsImVudHJpZXMiLCJlbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQVNBOztBQUNB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QUFELENBQU4sQ0FBSCxHQUFnQkEsS0FBSyxDQUFDLENBQUQsQ0FBckI7QUFDQSxXQUFPOUUsR0FBUDtBQUNELEdBSE0sRUFHSlMsU0FBUyxDQUFDK0QsUUFBRCxDQUhMLENBQVA7QUFJRDs7ZUFFY3hJLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL2NvbnNvbGUnO1xuaW1wb3J0IHtUUklQX1BPSU5UX0ZJRUxEUywgU09SVF9PUkRFUn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHthc2NlbmRpbmcsIGRlc2NlbmRpbmd9IGZyb20gJ2QzLWFycmF5JztcblxuLy8gaW1wb3J0IHt2YWxpZGF0ZUlucHV0RGF0YX0gZnJvbSAncHJvY2Vzc29ycy9kYXRhLXByb2Nlc3Nvcic7XG5pbXBvcnQge2dlbmVyYXRlSGFzaElkfSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge2dldEdwdUZpbHRlclByb3BzLCBnZXREYXRhc2V0RmllbGRJbmRleEZvckZpbHRlcn0gZnJvbSAndXRpbHMvZ3B1LWZpbHRlci11dGlscyc7XG5pbXBvcnQge1xuICBnZXRGaWx0ZXJQcm9wcyxcbiAgZ2V0RmlsdGVyUmVjb3JkLFxuICBkaWZmRmlsdGVycyxcbiAgZ2V0RmlsdGVyRnVuY3Rpb24sXG4gIGZpbHRlckRhdGFCeUZpbHRlclR5cGVzLFxuICBnZXROdW1lcmljRmllbGREb21haW4sXG4gIGdldFRpbWVzdGFtcEZpZWxkRG9tYWluXG59IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge21heWJlVG9EYXRlLCBnZXRTb3J0aW5nRnVuY3Rpb259IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHtcbiAgZ2V0UXVhbnRpbGVEb21haW4sXG4gIGdldE9yZGluYWxEb21haW4sXG4gIGdldExvZ0RvbWFpbixcbiAgZ2V0TGluZWFyRG9tYWluXG59IGZyb20gJ3V0aWxzL2RhdGEtc2NhbGUtdXRpbHMnO1xuXG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFUywgU0NBTEVfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuLy8gVW5pcXVlIGlkZW50aWZpZXIgb2YgZWFjaCBmaWVsZFxuY29uc3QgRklEX0tFWSA9ICduYW1lJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4va2VwbGVyLXRhYmxlJykuS2VwbGVyVGFibGV9IEtlcGxlclRhYmxlQ2xhc3N9ICovXG5cbi8qKlxuICogQHR5cGUge0tlcGxlclRhYmxlQ2xhc3N9XG4gKi9cbmNsYXNzIEtlcGxlclRhYmxlIHtcbiAgY29uc3RydWN0b3Ioe2luZm8gPSB7fSwgZGF0YSwgY29sb3IsIG1ldGFkYXRhfSkge1xuICAgIC8vIFRPRE8gLSB3aGF0IHRvIGRvIGlmIHZhbGlkYXRpb24gZmFpbHM/IENhbiBrZXBsZXIgaGFuZGxlIGV4Y2VwdGlvbnM/XG4gICAgLy8gY29uc3QgdmFsaWRhdGVkRGF0YSA9IHZhbGlkYXRlSW5wdXREYXRhKGRhdGEpO1xuICAgIC8vIGlmICghdmFsaWRhdGVkRGF0YSkge1xuICAgIC8vICAgcmV0dXJuIHRoaXM7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgYWxsRGF0YSA9IGRhdGEucm93cztcbiAgICBjb25zdCBkYXRhc2V0SW5mbyA9IHtcbiAgICAgIGlkOiBnZW5lcmF0ZUhhc2hJZCg0KSxcbiAgICAgIGxhYmVsOiAnbmV3IGRhdGFzZXQnLFxuICAgICAgLi4uKGluZm8gfHwge30pXG4gICAgfTtcbiAgICBjb25zdCBkYXRhSWQgPSBkYXRhc2V0SW5mby5pZDtcblxuICAgIGNvbnN0IGZpZWxkcyA9IGRhdGEuZmllbGRzLm1hcCgoZiwgaSkgPT4gKHtcbiAgICAgIC4uLmYsXG4gICAgICBmaWVsZElkeDogaSxcbiAgICAgIHZhbHVlQWNjZXNzb3I6IG1heWJlVG9EYXRlLmJpbmQoXG4gICAgICAgIG51bGwsXG4gICAgICAgIC8vIGlzIHRpbWVcbiAgICAgICAgZi50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wLFxuICAgICAgICBpLFxuICAgICAgICBmLmZvcm1hdFxuICAgICAgKVxuICAgIH0pKTtcblxuICAgIGNvbnN0IGFsbEluZGV4ZXMgPSBhbGxEYXRhLm1hcCgoXywgaSkgPT4gaSk7XG5cbiAgICB0aGlzLmlkID0gZGF0YXNldEluZm8uaWQ7XG4gICAgdGhpcy5sYWJlbCA9IGRhdGFzZXRJbmZvLmxhYmVsO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1ldGFkYXRhID0ge1xuICAgICAgLi4ubWV0YWRhdGEsXG4gICAgICBpZDogZGF0YXNldEluZm8uaWQsXG4gICAgICBsYWJlbDogZGF0YXNldEluZm8ubGFiZWxcbiAgICB9O1xuICAgIHRoaXMuYWxsRGF0YSA9IGFsbERhdGE7XG4gICAgdGhpcy5hbGxJbmRleGVzID0gYWxsSW5kZXhlcztcbiAgICB0aGlzLmZpbHRlcmVkSW5kZXggPSBhbGxJbmRleGVzO1xuICAgIHRoaXMuZmlsdGVyZWRJbmRleEZvckRvbWFpbiA9IGFsbEluZGV4ZXM7XG4gICAgdGhpcy5maWVsZFBhaXJzID0gZmluZFBvaW50RmllbGRQYWlycyhmaWVsZHMpO1xuICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIHRoaXMuZ3B1RmlsdGVyID0gZ2V0R3B1RmlsdGVyUHJvcHMoW10sIGRhdGFJZCwgZmllbGRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZmllbGRcbiAgICogQHBhcmFtIGNvbHVtbk5hbWVcbiAgICovXG4gIGdldENvbHVtbkZpZWxkKGNvbHVtbk5hbWUpIHtcbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzLmZpbmQoZmQgPT4gZmRbRklEX0tFWV0gPT09IGNvbHVtbk5hbWUpO1xuICAgIHRoaXMuX2Fzc2V0RmllbGQoY29sdW1uTmFtZSwgZmllbGQpO1xuICAgIHJldHVybiBmaWVsZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZmllbGRJZHhcbiAgICogQHBhcmFtIGNvbHVtbk5hbWVcbiAgICovXG4gIGdldENvbHVtbkZpZWxkSWR4KGNvbHVtbk5hbWUpIHtcbiAgICBjb25zdCBmaWVsZElkeCA9IHRoaXMuZmllbGRzLmZpbmRJbmRleChmZCA9PiBmZFtGSURfS0VZXSA9PT0gY29sdW1uTmFtZSk7XG4gICAgdGhpcy5fYXNzZXRGaWVsZChjb2x1bW5OYW1lLCBCb29sZWFuKGZpZWxkSWR4ID4gLTEpKTtcbiAgICByZXR1cm4gZmllbGRJZHg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNlbGxcbiAgICovXG4gIGdldFZhbHVlKGNvbHVtbk5hbWUsIHJvd0lkeCkge1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZXRDb2x1bW5GaWVsZChjb2x1bW5OYW1lKTtcbiAgICByZXR1cm4gZmllbGQgPyBmaWVsZC52YWx1ZUFjY2Vzc29yKHRoaXMuYWxsRGF0YVtyb3dJZHhdKSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBleGlzdGluZyBmaWVsZCB3aXRoIGEgbmV3IG9iamVjdFxuICAgKiBAcGFyYW0gZmllbGRJZHhcbiAgICogQHBhcmFtIG5ld0ZpZWxkXG4gICAqL1xuICB1cGRhdGVDb2x1bW5GaWVsZChmaWVsZElkeCwgbmV3RmllbGQpIHtcbiAgICB0aGlzLmZpZWxkcyA9IE9iamVjdC5hc3NpZ24oWy4uLnRoaXMuZmllbGRzXSwge1tmaWVsZElkeF06IG5ld0ZpZWxkfSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBmaWx0ZXJQcm9wcyB0byBmaWVsZCBhbmQgcmV0cmlldmUgaXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbHVtbk5hbWVcbiAgICovXG4gIGdldENvbHVtbkZpbHRlclByb3BzKGNvbHVtbk5hbWUpIHtcbiAgICBjb25zdCBmaWVsZElkeCA9IHRoaXMuZ2V0Q29sdW1uRmllbGRJZHgoY29sdW1uTmFtZSk7XG4gICAgaWYgKGZpZWxkSWR4IDwgMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHNbZmllbGRJZHhdO1xuICAgIGlmIChmaWVsZC5oYXNPd25Qcm9wZXJ0eSgnZmlsdGVyUHJvcHMnKSkge1xuICAgICAgcmV0dXJuIGZpZWxkLmZpbHRlclByb3BzO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkRG9tYWluID0gdGhpcy5nZXRDb2x1bW5GaWx0ZXJEb21haW4oZmllbGQpO1xuICAgIGlmICghZmllbGREb21haW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlclByb3BzID0gZ2V0RmlsdGVyUHJvcHMoZmllbGQsIGZpZWxkRG9tYWluKTtcbiAgICBjb25zdCBuZXdGaWVsZCA9IHtcbiAgICAgIC4uLmZpZWxkLFxuICAgICAgZmlsdGVyUHJvcHNcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVDb2x1bW5GaWVsZChmaWVsZElkeCwgbmV3RmllbGQpO1xuXG4gICAgcmV0dXJuIGZpbHRlclByb3BzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFwcGx5IGZpbHRlcnMgdG8gZGF0YXNldCwgcmV0dXJuIHRoZSBmaWx0ZXJlZCBkYXRhc2V0IHdpdGggdXBkYXRlZCBgZ3B1RmlsdGVyYCwgYGZpbHRlclJlY29yZGAsIGBmaWx0ZXJlZEluZGV4YCwgYGZpbHRlcmVkSW5kZXhGb3JEb21haW5gXG4gICAqIEBwYXJhbSBmaWx0ZXJzXG4gICAqIEBwYXJhbSBsYXllcnNcbiAgICogQHBhcmFtIG9wdFxuICAgKi9cbiAgZmlsdGVyVGFibGUoZmlsdGVycywgbGF5ZXJzLCBvcHQpIHtcbiAgICBjb25zdCB7YWxsRGF0YSwgaWQ6IGRhdGFJZCwgZmlsdGVyUmVjb3JkOiBvbGRGaWx0ZXJSZWNvcmQsIGZpZWxkc30gPSB0aGlzO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZmlsdGVyc1xuICAgIGNvbnN0IGZpbHRlclJlY29yZCA9IGdldEZpbHRlclJlY29yZChkYXRhSWQsIGZpbHRlcnMsIG9wdCB8fCB7fSk7XG5cbiAgICB0aGlzLmZpbHRlclJlY29yZCA9IGZpbHRlclJlY29yZDtcbiAgICB0aGlzLmdwdUZpbHRlciA9IGdldEdwdUZpbHRlclByb3BzKGZpbHRlcnMsIGRhdGFJZCwgZmllbGRzKTtcblxuICAgIC8vIGNvbnN0IG5ld0RhdGFzZXQgPSBzZXQoWydmaWx0ZXJSZWNvcmQnXSwgZmlsdGVyUmVjb3JkLCBkYXRhc2V0KTtcblxuICAgIGlmICghZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJbmRleCA9IHRoaXMuYWxsSW5kZXhlcztcbiAgICAgIHRoaXMuZmlsdGVyZWRJbmRleEZvckRvbWFpbiA9IHRoaXMuYWxsSW5kZXhlcztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZEZpbHRlcnMgPSBkaWZmRmlsdGVycyhmaWx0ZXJSZWNvcmQsIG9sZEZpbHRlclJlY29yZCk7XG5cbiAgICAvLyBnZW5lcmF0ZSAyIHNldHMgb2YgZmlsdGVyIHJlc3VsdFxuICAgIC8vIGZpbHRlcmVkSW5kZXggdXNlZCB0byBjYWxjdWxhdGUgbGF5ZXIgZGF0YVxuICAgIC8vIGZpbHRlcmVkSW5kZXhGb3JEb21haW4gdXNlZCB0byBjYWxjdWxhdGUgbGF5ZXIgRG9tYWluXG4gICAgY29uc3Qgc2hvdWxkQ2FsRG9tYWluID0gQm9vbGVhbih0aGlzLmNoYW5nZWRGaWx0ZXJzLmR5bmFtaWNEb21haW4pO1xuICAgIGNvbnN0IHNob3VsZENhbEluZGV4ID0gQm9vbGVhbih0aGlzLmNoYW5nZWRGaWx0ZXJzLmNwdSk7XG5cbiAgICBsZXQgZmlsdGVyUmVzdWx0ID0ge307XG4gICAgaWYgKHNob3VsZENhbERvbWFpbiB8fCBzaG91bGRDYWxJbmRleCkge1xuICAgICAgY29uc3QgZHluYW1pY0RvbWFpbkZpbHRlcnMgPSBzaG91bGRDYWxEb21haW4gPyBmaWx0ZXJSZWNvcmQuZHluYW1pY0RvbWFpbiA6IG51bGw7XG4gICAgICBjb25zdCBjcHVGaWx0ZXJzID0gc2hvdWxkQ2FsSW5kZXggPyBmaWx0ZXJSZWNvcmQuY3B1IDogbnVsbDtcblxuICAgICAgY29uc3QgZmlsdGVyRnVuY3MgPSBmaWx0ZXJzLnJlZHVjZSgoYWNjLCBmaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgZmllbGRJbmRleCA9IGdldERhdGFzZXRGaWVsZEluZGV4Rm9yRmlsdGVyKHRoaXMuaWQsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRJbmRleCAhPT0gLTEgPyBmaWVsZHNbZmllbGRJbmRleF0gOiBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtmaWx0ZXIuaWRdOiBnZXRGaWx0ZXJGdW5jdGlvbihmaWVsZCwgdGhpcy5pZCwgZmlsdGVyLCBsYXllcnMpXG4gICAgICAgIH07XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGZpbHRlclJlc3VsdCA9IGZpbHRlckRhdGFCeUZpbHRlclR5cGVzKFxuICAgICAgICB7ZHluYW1pY0RvbWFpbkZpbHRlcnMsIGNwdUZpbHRlcnMsIGZpbHRlckZ1bmNzfSxcbiAgICAgICAgYWxsRGF0YVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbHRlcmVkSW5kZXggPSBmaWx0ZXJSZXN1bHQuZmlsdGVyZWRJbmRleCB8fCB0aGlzLmZpbHRlcmVkSW5kZXg7XG4gICAgdGhpcy5maWx0ZXJlZEluZGV4Rm9yRG9tYWluID1cbiAgICAgIGZpbHRlclJlc3VsdC5maWx0ZXJlZEluZGV4Rm9yRG9tYWluIHx8IHRoaXMuZmlsdGVyZWRJbmRleEZvckRvbWFpbjtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGZpbHRlcnMgdG8gYSBkYXRhc2V0IGFsbCBvbiBDUFUsIGFzc2lnbiB0byBgZmlsdGVyZWRJZHhDUFVgLCBgZmlsdGVyUmVjb3JkQ1BVYFxuICAgKiBAcGFyYW0gZmlsdGVyc1xuICAgKiBAcGFyYW0gbGF5ZXJzXG4gICAqL1xuICBmaWx0ZXJUYWJsZUNQVShmaWx0ZXJzLCBsYXllcnMpIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBjcHVPbmx5OiB0cnVlLFxuICAgICAgaWdub3JlRG9tYWluOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIG5vIGZpbHRlclxuICAgIGlmICghZmlsdGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJZHhDUFUgPSB0aGlzLmFsbEluZGV4ZXM7XG4gICAgICB0aGlzLmZpbHRlclJlY29yZENQVSA9IGdldEZpbHRlclJlY29yZCh0aGlzLmlkLCBmaWx0ZXJzLCBvcHQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gbm8gZ3B1IGZpbHRlclxuICAgIGlmICghZmlsdGVycy5maW5kKGYgPT4gZi5ncHUpKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkSWR4Q1BVID0gdGhpcy5maWx0ZXJlZEluZGV4O1xuICAgICAgdGhpcy5maWx0ZXJSZWNvcmRDUFUgPSBnZXRGaWx0ZXJSZWNvcmQodGhpcy5pZCwgZmlsdGVycywgb3B0KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYSBjb3B5IGZvciBjcHUgZmlsdGVyaW5nXG4gICAgY29uc3QgY29waWVkID0gY29weVRhYmxlKHRoaXMpO1xuXG4gICAgY29waWVkLmZpbHRlclJlY29yZCA9IHRoaXMuZmlsdGVyUmVjb3JkQ1BVO1xuICAgIGNvcGllZC5maWx0ZXJlZEluZGV4ID0gdGhpcy5maWx0ZXJlZElkeENQVSB8fCBbXTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gY29waWVkLmZpbHRlclRhYmxlKGZpbHRlcnMsIGxheWVycywgb3B0KTtcblxuICAgIHRoaXMuZmlsdGVyZWRJZHhDUFUgPSBmaWx0ZXJlZC5maWx0ZXJlZEluZGV4O1xuICAgIHRoaXMuZmlsdGVyUmVjb3JkQ1BVID0gZmlsdGVyZWQuZmlsdGVyUmVjb3JkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGZpZWxkIGRvbWFpbiBiYXNlZCBvbiBmaWVsZCB0eXBlIGFuZCBkYXRhXG4gICAqIGZvciBGaWx0ZXJcbiAgICovXG4gIGdldENvbHVtbkZpbHRlckRvbWFpbihmaWVsZCkge1xuICAgIGNvbnN0IHthbGxEYXRhfSA9IHRoaXM7XG4gICAgY29uc3Qge3ZhbHVlQWNjZXNzb3J9ID0gZmllbGQ7XG5cbiAgICBsZXQgZG9tYWluO1xuXG4gICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxuICAgICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcbiAgICAgICAgLy8gY2FsY3VsYXRlIGRvbWFpbiBhbmQgc3RlcFxuICAgICAgICByZXR1cm4gZ2V0TnVtZXJpY0ZpZWxkRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpO1xuXG4gICAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuOlxuICAgICAgICByZXR1cm4ge2RvbWFpbjogW3RydWUsIGZhbHNlXX07XG5cbiAgICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnN0cmluZzpcbiAgICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmRhdGU6XG4gICAgICAgIGRvbWFpbiA9IGdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XG4gICAgICAgIHJldHVybiB7ZG9tYWlufTtcblxuICAgICAgY2FzZSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wOlxuICAgICAgICByZXR1cm4gZ2V0VGltZXN0YW1wRmllbGREb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7ZG9tYWluOiBnZXRPcmRpbmFsRG9tYWluKGFsbERhdGEsIHZhbHVlQWNjZXNzb3IpfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogIEdldCB0aGUgZG9tYWluIG9mIHRoaXMgY29sdW1uIGJhc2VkIG9uIHNjYWxlIHR5cGVcbiAgICovXG4gIGdldENvbHVtbkxheWVyRG9tYWluKGZpZWxkLCBzY2FsZVR5cGUpIHtcbiAgICBjb25zdCB7YWxsRGF0YSwgZmlsdGVyZWRJbmRleEZvckRvbWFpbn0gPSB0aGlzO1xuXG4gICAgaWYgKCFTQ0FMRV9UWVBFU1tzY2FsZVR5cGVdKSB7XG4gICAgICBDb25zb2xlLmVycm9yKGBzY2FsZSB0eXBlICR7c2NhbGVUeXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7dmFsdWVBY2Nlc3Nvcn0gPSBmaWVsZDtcbiAgICBjb25zdCBpbmRleFZhbHVlQWNjZXNzb3IgPSBpID0+IHZhbHVlQWNjZXNzb3IoYWxsRGF0YVtpXSk7XG4gICAgY29uc3Qgc29ydEZ1bmN0aW9uID0gZ2V0U29ydGluZ0Z1bmN0aW9uKGZpZWxkLnR5cGUpO1xuXG4gICAgc3dpdGNoIChzY2FsZVR5cGUpIHtcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMub3JkaW5hbDpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucG9pbnQ6XG4gICAgICAgIC8vIGRvIG5vdCByZWNhbGN1bGF0ZSBvcmRpbmFsIGRvbWFpbiBiYXNlZCBvbiBmaWx0ZXJlZCBkYXRhXG4gICAgICAgIC8vIGRvbid0IG5lZWQgdG8gdXBkYXRlIG9yZGluYWwgZG9tYWluIGV2ZXJ5IHRpbWVcbiAgICAgICAgcmV0dXJuIGdldE9yZGluYWxEb21haW4oYWxsRGF0YSwgdmFsdWVBY2Nlc3Nvcik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucXVhbnRpbGU6XG4gICAgICAgIHJldHVybiBnZXRRdWFudGlsZURvbWFpbihmaWx0ZXJlZEluZGV4Rm9yRG9tYWluLCBpbmRleFZhbHVlQWNjZXNzb3IsIHNvcnRGdW5jdGlvbik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMubG9nOlxuICAgICAgICByZXR1cm4gZ2V0TG9nRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvcik7XG5cbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMucXVhbnRpemU6XG4gICAgICBjYXNlIFNDQUxFX1RZUEVTLmxpbmVhcjpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMuc3FydDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBnZXRMaW5lYXJEb21haW4oZmlsdGVyZWRJbmRleEZvckRvbWFpbiwgaW5kZXhWYWx1ZUFjY2Vzc29yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgc2FtcGxlIG9mIHJvd3MgdG8gY2FsY3VsYXRlIGxheWVyIGJvdW5kYXJpZXNcbiAgICovXG4gIC8vIGdldFNhbXBsZURhdGEocm93cylcblxuICAvKipcbiAgICogUGFyc2UgY2VsbCB2YWx1ZSBiYXNlZCBvbiBjb2x1bW4gdHlwZSBhbmQgcmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAqIFZhbHVlIHRoZSBmaWVsZCB2YWx1ZSwgdHlwZSB0aGUgZmllbGQgdHlwZVxuICAgKi9cbiAgLy8gcGFyc2VGaWVsZFZhbHVlKHZhbHVlLCB0eXBlKVxuXG4gIC8vIHNvcnREYXRhc2V0QnlDb2x1bW4oKVxuXG4gIC8qKlxuICAgKiBBc3NlcnQgd2hldGhlciBmaWVsZCBleGlzdFxuICAgKiBAcGFyYW0gZmllbGROYW1lXG4gICAqIEBwYXJhbSBjb25kaXRpb25cbiAgICovXG4gIF9hc3NldEZpZWxkKGZpZWxkTmFtZSwgY29uZGl0aW9uKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoYCR7ZmllbGROYW1lfSBkb2VzbnQgZXhpc3QgaW4gZGF0YXNldCAke3RoaXMuaWR9YCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlMgKE1BSU5MWSBFWFBPUlRFRCBGT1IgVEVTVC4uLilcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVN1ZmZpeEFuZERlbGltaXRlcnMobGF5ZXJOYW1lLCBzdWZmaXgpIHtcbiAgcmV0dXJuIGxheWVyTmFtZVxuICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoc3VmZml4LCAnaWcnKSwgJycpXG4gICAgLnJlcGxhY2UoL1tfLC5dKy9nLCAnICcpXG4gICAgLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBGaW5kIHBvaW50IGZpZWxkcyBwYWlycyBmcm9tIGZpZWxkc1xuICpcbiAqIEBwYXJhbSBmaWVsZHNcbiAqIEByZXR1cm5zIGZvdW5kIHBvaW50IGZpZWxkc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4va2VwbGVyLXRhYmxlJykuZmluZFBvaW50RmllbGRQYWlyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQb2ludEZpZWxkUGFpcnMoZmllbGRzKSB7XG4gIGNvbnN0IGFsbE5hbWVzID0gZmllbGRzLm1hcChmID0+IGYubmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAvLyBnZXQgbGlzdCBvZiBhbGwgZmllbGRzIHdpdGggbWF0Y2hpbmcgc3VmZml4ZXNcbiAgcmV0dXJuIGFsbE5hbWVzLnJlZHVjZSgoY2FycnksIGZpZWxkTmFtZSwgaWR4KSA9PiB7XG4gICAgLy8gVGhpcyBzZWFyY2ggZm9yIHBhaXJzIHdpbGwgZWFybHkgZXhpdCBpZiBmb3VuZC5cbiAgICBmb3IgKGNvbnN0IHN1ZmZpeFBhaXIgb2YgVFJJUF9QT0lOVF9GSUVMRFMpIHtcbiAgICAgIC8vIG1hdGNoIGZpcnN0IHN1ZmZpeGBgYFxuICAgICAgaWYgKGZpZWxkTmFtZS5lbmRzV2l0aChzdWZmaXhQYWlyWzBdKSkge1xuICAgICAgICAvLyBtYXRjaCBzZWNvbmQgc3VmZml4XG4gICAgICAgIGNvbnN0IG90aGVyUGF0dGVybiA9IG5ldyBSZWdFeHAoYCR7c3VmZml4UGFpclswXX1cXCRgKTtcbiAgICAgICAgY29uc3QgcGFydG5lciA9IGZpZWxkTmFtZS5yZXBsYWNlKG90aGVyUGF0dGVybiwgc3VmZml4UGFpclsxXSk7XG5cbiAgICAgICAgY29uc3QgcGFydG5lcklkeCA9IGFsbE5hbWVzLmZpbmRJbmRleChkID0+IGQgPT09IHBhcnRuZXIpO1xuICAgICAgICBpZiAocGFydG5lcklkeCA+IC0xKSB7XG4gICAgICAgICAgY29uc3QgZGVmYXVsdE5hbWUgPSByZW1vdmVTdWZmaXhBbmREZWxpbWl0ZXJzKGZpZWxkTmFtZSwgc3VmZml4UGFpclswXSk7XG5cbiAgICAgICAgICBjYXJyeS5wdXNoKHtcbiAgICAgICAgICAgIGRlZmF1bHROYW1lLFxuICAgICAgICAgICAgcGFpcjoge1xuICAgICAgICAgICAgICBsYXQ6IHtcbiAgICAgICAgICAgICAgICBmaWVsZElkeDogaWR4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZHNbaWR4XS5uYW1lXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxuZzoge1xuICAgICAgICAgICAgICAgIGZpZWxkSWR4OiBwYXJ0bmVySWR4LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZHNbcGFydG5lcklkeF0ubmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VmZml4OiBzdWZmaXhQYWlyXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYXJyeTtcbiAgfSwgW10pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZGF0YXNldFxuICogQHBhcmFtIGNvbHVtblxuICogQHBhcmFtIG1vZGVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2tlcGxlci10YWJsZScpLnNvcnREYXRhc2V0QnlDb2x1bW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzb3J0RGF0YXNldEJ5Q29sdW1uKGRhdGFzZXQsIGNvbHVtbiwgbW9kZSkge1xuICBjb25zdCB7YWxsSW5kZXhlcywgZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XG4gIGNvbnN0IGZpZWxkSW5kZXggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSBjb2x1bW4pO1xuICBpZiAoZmllbGRJbmRleCA8IDApIHtcbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRCeSA9IFNPUlRfT1JERVJbbW9kZV0gfHwgU09SVF9PUkRFUi5BU0NFTkRJTkc7XG5cbiAgaWYgKHNvcnRCeSA9PT0gU09SVF9PUkRFUi5VTlNPUlQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YXNldCxcbiAgICAgIHNvcnRDb2x1bW46IHt9LFxuICAgICAgc29ydE9yZGVyOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHNvcnRGdW5jdGlvbiA9IHNvcnRCeSA9PT0gU09SVF9PUkRFUi5BU0NFTkRJTkcgPyBhc2NlbmRpbmcgOiBkZXNjZW5kaW5nO1xuICBjb25zdCBzb3J0T3JkZXIgPSBhbGxJbmRleGVzXG4gICAgLnNsaWNlKClcbiAgICAuc29ydCgoYSwgYikgPT4gc29ydEZ1bmN0aW9uKGFsbERhdGFbYV1bZmllbGRJbmRleF0sIGFsbERhdGFbYl1bZmllbGRJbmRleF0pKTtcblxuICByZXR1cm4ge1xuICAgIC4uLmRhdGFzZXQsXG4gICAgc29ydENvbHVtbjoge1xuICAgICAgW2NvbHVtbl06IHNvcnRCeVxuICAgIH0sXG4gICAgc29ydE9yZGVyXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGFibGUob3JpZ2luYWwpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3JpZ2luYWwpKSwgb3JpZ2luYWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weVRhYmxlQW5kVXBkYXRlKG9yaWdpbmFsLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpLnJlZHVjZSgoYWNjLCBlbnRyeSkgPT4ge1xuICAgIGFjY1tlbnRyeVswXV0gPSBlbnRyeVsxXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBjb3B5VGFibGUob3JpZ2luYWwpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgS2VwbGVyVGFibGU7XG4iXX0=