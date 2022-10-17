"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processCsvData = processCsvData;
exports.parseRowsByFields = parseRowsByFields;
exports.getSampleForTypeAnalyze = getSampleForTypeAnalyze;
exports.parseCsvRowsByFieldType = parseCsvRowsByFieldType;
exports.getFieldsFromData = getFieldsFromData;
exports.renameDuplicateFields = renameDuplicateFields;
exports.analyzerTypeToFieldType = analyzerTypeToFieldType;
exports.processRowObject = processRowObject;
exports.processGeojson = processGeojson;
exports.formatCsv = formatCsv;
exports.validateInputData = validateInputData;
exports.processKeplerglJSON = processKeplerglJSON;
exports.processKeplerglDataset = processKeplerglDataset;
exports.Processors = exports.DATASET_HANDLERS = exports.PARSE_FIELD_VALUE_FROM_STRING = exports.CSV_NULLS = exports.ACCEPTED_ANALYZER_TYPES = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Dsv = require("d3-dsv");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _assert = _interopRequireDefault(require("assert"));

var _typeAnalyzer = require("type-analyzer");

var _geojsonNormalize = _interopRequireDefault(require("@mapbox/geojson-normalize"));

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("../utils/data-utils");

var _schemas = _interopRequireDefault(require("../schemas"));

var _userGuides = require("../constants/user-guides");

var _utils = require("../utils/utils");

var _PARSE_FIELD_VALUE_FR, _DATASET_HANDLERS;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACCEPTED_ANALYZER_TYPES = [_typeAnalyzer.DATA_TYPES.DATE, _typeAnalyzer.DATA_TYPES.TIME, _typeAnalyzer.DATA_TYPES.DATETIME, _typeAnalyzer.DATA_TYPES.NUMBER, _typeAnalyzer.DATA_TYPES.INT, _typeAnalyzer.DATA_TYPES.FLOAT, _typeAnalyzer.DATA_TYPES.BOOLEAN, _typeAnalyzer.DATA_TYPES.STRING, _typeAnalyzer.DATA_TYPES.GEOMETRY, _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING, _typeAnalyzer.DATA_TYPES.ZIPCODE, _typeAnalyzer.DATA_TYPES.ARRAY, _typeAnalyzer.DATA_TYPES.OBJECT]; // if any of these value occurs in csv, parse it to null;
// const CSV_NULLS = ['', 'null', 'NULL', 'Null', 'NaN', '/N'];
// matches empty string

exports.ACCEPTED_ANALYZER_TYPES = ACCEPTED_ANALYZER_TYPES;
var CSV_NULLS = /^(null|NULL|Null|NaN|\/N||)$/;
exports.CSV_NULLS = CSV_NULLS;
var IGNORE_DATA_TYPES = Object.keys(_typeAnalyzer.DATA_TYPES).filter(function (type) {
  return !ACCEPTED_ANALYZER_TYPES.includes(type);
});
var PARSE_FIELD_VALUE_FROM_STRING = (_PARSE_FIELD_VALUE_FR = {}, (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES["boolean"], {
  valid: function valid(d) {
    return typeof d === 'boolean';
  },
  parse: function parse(d) {
    return d === 'true' || d === 'True' || d === 'TRUE' || d === '1';
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.integer, {
  valid: function valid(d) {
    return parseInt(d, 10) === d;
  },
  parse: function parse(d) {
    return parseInt(d, 10);
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.timestamp, {
  valid: function valid(d, field) {
    return ['x', 'X'].includes(field.format) ? typeof d === 'number' : typeof d === 'string';
  },
  parse: function parse(d, field) {
    return ['x', 'X'].includes(field.format) ? Number(d) : d;
  }
}), (0, _defineProperty2["default"])(_PARSE_FIELD_VALUE_FR, _defaultSettings.ALL_FIELD_TYPES.real, {
  valid: function valid(d) {
    return parseFloat(d) === d;
  },
  // Note this will result in NaN for some string
  parse: parseFloat
}), _PARSE_FIELD_VALUE_FR);
/**
 * Process csv data, output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and pass to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * @param rawData raw csv string
 * @returns  data object `{fields: [], rows: []}` can be passed to addDataToMaps
 * @type {typeof import('./data-processor').processCsvData}
 * @public
 * @example
 * import {processCsvData} from 'kepler.gl/processors';
 *
 * const testData = `gps_data.utc_timestamp,gps_data.lat,gps_data.lng,gps_data.types,epoch,has_result,id,time,begintrip_ts_utc,begintrip_ts_local,date
 * 2016-09-17 00:09:55,29.9900937,31.2590542,driver_analytics,1472688000000,False,1,2016-09-23T00:00:00.000Z,2016-10-01 09:41:39+00:00,2016-10-01 09:41:39+00:00,2016-09-23
 * 2016-09-17 00:10:56,29.9927699,31.2461142,driver_analytics,1472688000000,False,2,2016-09-23T00:00:00.000Z,2016-10-01 09:46:37+00:00,2016-10-01 16:46:37+00:00,2016-09-23
 * 2016-09-17 00:11:56,29.9907261,31.2312742,driver_analytics,1472688000000,False,3,2016-09-23T00:00:00.000Z,,,2016-09-23
 * 2016-09-17 00:12:58,29.9870074,31.2175827,driver_analytics,1472688000000,False,4,2016-09-23T00:00:00.000Z,,,2016-09-23`
 *
 * const dataset = {
 *  info: {id: 'test_data', label: 'My Csv'},
 *  data: processCsvData(testData)
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: [dataset],
 *  options: {centerMap: true, readOnly: true}
 * }));
 */

exports.PARSE_FIELD_VALUE_FROM_STRING = PARSE_FIELD_VALUE_FROM_STRING;

function processCsvData(rawData, header) {
  var rows;
  var headerRow;

  if (typeof rawData === 'string') {
    var _parsedRows = (0, _d3Dsv.csvParseRows)(rawData);

    if (!Array.isArray(_parsedRows) || _parsedRows.length < 2) {
      // looks like an empty file, throw error to be catch
      throw new Error('process Csv Data Failed: CSV is empty');
    }

    headerRow = _parsedRows[0];
    rows = _parsedRows.slice(1);
  } else if (Array.isArray(rawData) && rawData.length) {
    rows = rawData;
    headerRow = header;

    if (!Array.isArray(headerRow)) {
      // if data is passed in as array of rows and missing header
      // assume first row is header
      headerRow = rawData[0];
      rows = rawData.slice(1);
    }
  }

  if (!rows || !headerRow) {
    throw new Error('invalid input passed to processCsvData');
  } // here we assume the csv file that people uploaded will have first row
  // as name of the column


  cleanUpFalsyCsvValue(rows); // No need to run type detection on every data point
  // here we get a list of none null values to run analyze on

  var sample = getSampleForTypeAnalyze({
    fields: headerRow,
    allData: rows
  });
  var fields = getFieldsFromData(sample, headerRow);
  var parsedRows = parseRowsByFields(rows, fields);
  return {
    fields: fields,
    rows: parsedRows
  };
}
/**
 * Parse rows of csv by analyzed field types. So that `'1'` -> `1`, `'True'` -> `true`
 * @param {Array<Array>} rows
 * @param {Array<Object>} fields
 */


function parseRowsByFields(rows, fields) {
  // Edit rows in place
  var geojsonFieldIdx = fields.findIndex(function (f) {
    return f.name === '_geojson';
  });
  fields.forEach(parseCsvRowsByFieldType.bind(null, rows, geojsonFieldIdx));
  return rows;
}
/**
 * Getting sample data for analyzing field type.
 *
 * @type {typeof import('./data-processor').getSampleForTypeAnalyze}
 */


function getSampleForTypeAnalyze(_ref) {
  var fields = _ref.fields,
      allData = _ref.allData,
      _ref$sampleCount = _ref.sampleCount,
      sampleCount = _ref$sampleCount === void 0 ? 50 : _ref$sampleCount;
  var total = Math.min(sampleCount, allData.length); // const fieldOrder = fields.map(f => f.name);

  var sample = (0, _d3Array.range)(0, total, 1).map(function (d) {
    return {};
  }); // collect sample data for each field

  fields.forEach(function (field, fieldIdx) {
    // data counter
    var i = 0; // sample counter

    var j = 0;

    while (j < total) {
      if (i >= allData.length) {
        // if depleted data pool
        sample[j][field] = null;
        j++;
      } else if ((0, _dataUtils.notNullorUndefined)(allData[i][fieldIdx])) {
        sample[j][field] = allData[i][fieldIdx];
        j++;
        i++;
      } else {
        i++;
      }
    }
  });
  return sample;
}
/**
 * Convert falsy value in csv including `'', 'null', 'NULL', 'Null', 'NaN'` to `null`,
 * so that type-analyzer won't detect it as string
 *
 * @param {Array<Array>} rows
 */


function cleanUpFalsyCsvValue(rows) {
  var re = new RegExp(CSV_NULLS, 'g');

  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].length; j++) {
      // analyzer will set any fields to 'string' if there are empty values
      // which will be parsed as '' by d3.csv
      // here we parse empty data as null
      // TODO: create warning when deltect `CSV_NULLS` in the data
      if (typeof rows[i][j] === 'string' && rows[i][j].match(re)) {
        rows[i][j] = null;
      }
    }
  }
}
/**
 * Process uploaded csv file to parse value by field type
 *
 * @param rows
 * @param geoFieldIdx field index
 * @param field
 * @param i
 * @type {typeof import('./data-processor').parseCsvRowsByFieldType}
 */


function parseCsvRowsByFieldType(rows, geoFieldIdx, field, i) {
  var parser = PARSE_FIELD_VALUE_FROM_STRING[field.type];

  if (parser) {
    // check first not null value of it's already parsed
    var first = rows.find(function (r) {
      return (0, _dataUtils.notNullorUndefined)(r[i]);
    });

    if (!first || parser.valid(first[i], field)) {
      return;
    }

    rows.forEach(function (row) {
      // parse string value based on field type
      if (row[i] !== null) {
        row[i] = parser.parse(row[i], field);

        if (geoFieldIdx > -1 && row[geoFieldIdx] && row[geoFieldIdx].properties) {
          row[geoFieldIdx].properties[field.name] = row[i];
        }
      }
    });
  }
}
/**
 * Analyze field types from data in `string` format, e.g. uploaded csv.
 * Assign `type`, `fieldIdx` and `format` (timestamp only) to each field
 *
 * @param data array of row object
 * @param fieldOrder array of field names as string
 * @returns formatted fields
 * @type {typeof import('./data-processor').getFieldsFromData}
 * @public
 * @example
 *
 * import {getFieldsFromData} from 'kepler.gl/processors';
 * const data = [{
 *   time: '2016-09-17 00:09:55',
 *   value: '4',
 *   surge: '1.2',
 *   isTrip: 'true',
 *   zeroOnes: '0'
 * }, {
 *   time: '2016-09-17 00:30:08',
 *   value: '3',
 *   surge: null,
 *   isTrip: 'false',
 *   zeroOnes: '1'
 * }, {
 *   time: null,
 *   value: '2',
 *   surge: '1.3',
 *   isTrip: null,
 *   zeroOnes: '1'
 * }];
 *
 * const fieldOrder = ['time', 'value', 'surge', 'isTrip', 'zeroOnes'];
 * const fields = getFieldsFromData(data, fieldOrder);
 * // fields = [
 * // {name: 'time', format: 'YYYY-M-D H:m:s', fieldIdx: 1, type: 'timestamp'},
 * // {name: 'value', format: '', fieldIdx: 4, type: 'integer'},
 * // {name: 'surge', format: '', fieldIdx: 5, type: 'real'},
 * // {name: 'isTrip', format: '', fieldIdx: 6, type: 'boolean'},
 * // {name: 'zeroOnes', format: '', fieldIdx: 7, type: 'integer'}];
 *
 */


function getFieldsFromData(data, fieldOrder) {
  // add a check for epoch timestamp
  var metadata = _typeAnalyzer.Analyzer.computeColMeta(data, [{
    regex: /.*geojson|all_points/g,
    dataType: 'GEOMETRY'
  }, {
    regex: /.*census/g,
    dataType: 'STRING'
  }], {
    ignoredDataTypes: IGNORE_DATA_TYPES
  });

  var _renameDuplicateField = renameDuplicateFields(fieldOrder),
      fieldByIndex = _renameDuplicateField.fieldByIndex;

  var result = fieldOrder.map(function (field, index) {
    var name = fieldByIndex[index];
    var fieldMeta = metadata.find(function (m) {
      return m.key === field;
    });

    var _ref2 = fieldMeta || {},
        type = _ref2.type,
        format = _ref2.format;

    return {
      name: name,
      format: format,
      fieldIdx: index,
      type: analyzerTypeToFieldType(type),
      analyzerType: type,
      valueAccessor: function valueAccessor(values) {
        return values[index];
      }
    };
  }); // @ts-ignore

  return result;
}
/**
 * pass in an array of field names, rename duplicated one
 * and return a map from old field index to new name
 *
 * @param {Array} fieldOrder
 * @returns {Object} new field name by index
 */


function renameDuplicateFields(fieldOrder) {
  return fieldOrder.reduce(function (accu, field, i) {
    var allNames = accu.allNames;
    var fieldName = field; // add a counter to duplicated names

    if (allNames.includes(field)) {
      var counter = 0;

      while (allNames.includes("".concat(field, "-").concat(counter))) {
        counter++;
      }

      fieldName = "".concat(field, "-").concat(counter);
    }

    accu.fieldByIndex[i] = fieldName;
    accu.allNames.push(fieldName);
    return accu;
  }, {
    allNames: [],
    fieldByIndex: {}
  });
}
/**
 * Convert type-analyzer output to kepler.gl field types
 *
 * @param aType
 * @returns corresponding type in `ALL_FIELD_TYPES`
 * @type {typeof import('./data-processor').analyzerTypeToFieldType}}
 */

/* eslint-disable complexity */


function analyzerTypeToFieldType(aType) {
  var DATE = _typeAnalyzer.DATA_TYPES.DATE,
      TIME = _typeAnalyzer.DATA_TYPES.TIME,
      DATETIME = _typeAnalyzer.DATA_TYPES.DATETIME,
      NUMBER = _typeAnalyzer.DATA_TYPES.NUMBER,
      INT = _typeAnalyzer.DATA_TYPES.INT,
      FLOAT = _typeAnalyzer.DATA_TYPES.FLOAT,
      BOOLEAN = _typeAnalyzer.DATA_TYPES.BOOLEAN,
      STRING = _typeAnalyzer.DATA_TYPES.STRING,
      GEOMETRY = _typeAnalyzer.DATA_TYPES.GEOMETRY,
      GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.GEOMETRY_FROM_STRING,
      PAIR_GEOMETRY_FROM_STRING = _typeAnalyzer.DATA_TYPES.PAIR_GEOMETRY_FROM_STRING,
      ZIPCODE = _typeAnalyzer.DATA_TYPES.ZIPCODE,
      ARRAY = _typeAnalyzer.DATA_TYPES.ARRAY,
      OBJECT = _typeAnalyzer.DATA_TYPES.OBJECT; // TODO: un recognized types
  // CURRENCY PERCENT NONE

  switch (aType) {
    case DATE:
      return _defaultSettings.ALL_FIELD_TYPES.date;

    case TIME:
    case DATETIME:
      return _defaultSettings.ALL_FIELD_TYPES.timestamp;

    case FLOAT:
      return _defaultSettings.ALL_FIELD_TYPES.real;

    case INT:
      return _defaultSettings.ALL_FIELD_TYPES.integer;

    case BOOLEAN:
      return _defaultSettings.ALL_FIELD_TYPES["boolean"];

    case GEOMETRY:
    case GEOMETRY_FROM_STRING:
    case PAIR_GEOMETRY_FROM_STRING:
    case ARRAY:
    case OBJECT:
      // TODO: create a new data type for objects and arrays
      return _defaultSettings.ALL_FIELD_TYPES.geojson;

    case NUMBER:
    case STRING:
    case ZIPCODE:
      return _defaultSettings.ALL_FIELD_TYPES.string;

    default:
      _window.console.warn("Unsupported analyzer type: ".concat(aType));

      return _defaultSettings.ALL_FIELD_TYPES.string;
  }
}
/* eslint-enable complexity */

/**
 * Process data where each row is an object, output can be passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * NOTE: This function may mutate input.
 * @param rawData an array of row object, each object should have the same number of keys
 * @returns dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processRowObject}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processRowObject} from 'kepler.gl/processors';
 *
 * const data = [
 *  {lat: 31.27, lng: 127.56, value: 3},
 *  {lat: 31.22, lng: 126.26, value: 1}
 * ];
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {label: 'My Data', id: 'my_data'},
 *    data: processRowObject(data)
 *  }
 * }));
 */


function processRowObject(rawData) {
  if (!Array.isArray(rawData) || !rawData.length) {
    return null;
  }

  var keys = Object.keys(rawData[0]);
  var rows = rawData.map(function (d) {
    return keys.map(function (key) {
      return d[key];
    });
  }); // row object an still contain values like `Null` or `N/A`

  cleanUpFalsyCsvValue(rows);
  return processCsvData(rows, keys);
}
/**
 * Process GeoJSON [`FeatureCollection`](http://wiki.geojson.org/GeoJSON_draft_version_6#FeatureCollection),
 * output a data object with `{fields: [], rows: []}`.
 * The data object can be wrapped in a `dataset` and passed to [`addDataToMap`](../actions/actions.md#adddatatomap)
 * NOTE: This function may mutate input.
 *
 * @param  rawData raw geojson feature collection
 * @returns  dataset containing `fields` and `rows`
 * @type {typeof import('./data-processor').processGeojson}
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processGeojson} from 'kepler.gl/processors';
 *
 * const geojson = {
 * 	"type" : "FeatureCollection",
 * 	"features" : [{
 * 		"type" : "Feature",
 * 		"properties" : {
 * 			"capacity" : "10",
 * 			"type" : "U-Rack"
 * 		},
 * 		"geometry" : {
 * 			"type" : "Point",
 * 			"coordinates" : [ -71.073283, 42.417500 ]
 * 		}
 * 	}]
 * };
 *
 * dispatch(addDataToMap({
 *  datasets: {
 *    info: {
 *      label: 'Sample Taxi Trips in New York City',
 *      id: 'test_trip_data'
 *    },
 *    data: processGeojson(geojson)
 *  }
 * }));
 */


function processGeojson(rawData) {
  var normalizedGeojson = (0, _geojsonNormalize["default"])(rawData);

  if (!normalizedGeojson || !Array.isArray(normalizedGeojson.features)) {
    var error = new Error("Read File Failed: File is not a valid GeoJSON. Read more about [supported file format](".concat(_userGuides.GUIDES_FILE_FORMAT_DOC, ")"));
    throw error; // fail to normalize geojson
  } // getting all feature fields


  var allDataRows = [];

  for (var i = 0; i < normalizedGeojson.features.length; i++) {
    var f = normalizedGeojson.features[i];

    if (f.geometry) {
      allDataRows.push(_objectSpread({
        // add feature to _geojson field
        _geojson: f
      }, f.properties || {}));
    }
  } // get all the field


  var fields = allDataRows.reduce(function (prev, curr) {
    Object.keys(curr).forEach(function (key) {
      if (!prev.includes(key)) {
        prev.push(key);
      }
    });
    return prev;
  }, []); // make sure each feature has exact same fields

  allDataRows.forEach(function (d) {
    fields.forEach(function (f) {
      if (!(f in d)) {
        d[f] = null;
        d._geojson.properties[f] = null;
      }
    });
  });
  return processRowObject(allDataRows);
}
/**
 * On export data to csv
 * @param {Array<Array>} data `dataset.allData` or filtered data `dataset.data`
 * @param {Array<Object>} fields `dataset.fields`
 * @returns {string} csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  data.forEach(function (row) {
    formattedData.push(row.map(function (d, i) {
      return (0, _dataUtils.parseFieldValue)(d, fields[i].type);
    }));
  });
  return (0, _d3Dsv.csvFormatRows)(formattedData);
}
/**
 * Validate input data, adding missing field types, rename duplicate columns
 * @type {typeof import('./data-processor').validateInputData}
 */


function validateInputData(data) {
  if (!(0, _utils.isPlainObject)(data)) {
    (0, _assert["default"])('addDataToMap Error: dataset.data cannot be null');
    return null;
  } else if (!Array.isArray(data.fields)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.fields to be an array');
    return null;
  } else if (!Array.isArray(data.rows)) {
    (0, _assert["default"])('addDataToMap Error: expect dataset.data.rows to be an array');
    return null;
  }

  var fields = data.fields,
      rows = data.rows; // check if all fields has name, format and type

  var allValid = fields.every(function (f, i) {
    if (!(0, _utils.isPlainObject)(f)) {
      (0, _assert["default"])("fields needs to be an array of object, but find ".concat((0, _typeof2["default"])(f)));
      fields[i] = {};
    }

    if (!f.name) {
      (0, _assert["default"])("field.name is required but missing in ".concat(JSON.stringify(f))); // assign a name

      fields[i].name = "column_".concat(i);
    }

    if (!_defaultSettings.ALL_FIELD_TYPES[f.type]) {
      (0, _assert["default"])("unknown field type ".concat(f.type));
      return false;
    }

    if (!fields.every(function (field) {
      return field.analyzerType;
    })) {
      (0, _assert["default"])('field missing analyzerType');
      return false;
    } // check time format is correct based on first 10 not empty element


    if (f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
      var sample = findNonEmptyRowsAtField(rows, i, 10).map(function (r) {
        return {
          ts: r[i]
        };
      });

      var analyzedType = _typeAnalyzer.Analyzer.computeColMeta(sample)[0];

      return analyzedType && analyzedType.category === 'TIME' && analyzedType.format === f.format;
    }

    return true;
  });

  if (allValid) {
    return {
      rows: rows,
      fields: fields
    };
  } // if any field has missing type, recalculate it for everyone
  // because we simply lost faith in humanity


  var sampleData = getSampleForTypeAnalyze({
    fields: fields.map(function (f) {
      return f.name;
    }),
    allData: rows
  });
  var fieldOrder = fields.map(function (f) {
    return f.name;
  });
  var meta = getFieldsFromData(sampleData, fieldOrder);
  var updatedFields = fields.map(function (f, i) {
    return _objectSpread(_objectSpread({}, f), {}, {
      type: meta[i].type,
      format: meta[i].format,
      analyzerType: meta[i].analyzerType
    });
  });
  return {
    fields: updatedFields,
    rows: rows
  };
}

function findNonEmptyRowsAtField(rows, fieldIdx, total) {
  var sample = [];
  var i = 0;

  while (sample.length < total && i < rows.length) {
    if ((0, _dataUtils.notNullorUndefined)(rows[i][fieldIdx])) {
      sample.push(rows[i]);
    }

    i++;
  }

  return sample;
}
/**
 * Process saved kepler.gl json to be pass to [`addDataToMap`](../actions/actions.md#adddatatomap).
 * The json object should contain `datasets` and `config`.
 * @param {Object} rawData
 * @param {Array} rawData.datasets
 * @param {Object} rawData.config
 * @returns {Object} datasets and config `{datasets: {}, config: {}}`
 * @public
 * @example
 * import {addDataToMap} from 'kepler.gl/actions';
 * import {processKeplerglJSON} from 'kepler.gl/processors';
 *
 * dispatch(addDataToMap(processKeplerglJSON(keplerGlJson)));
 */


function processKeplerglJSON(rawData) {
  return rawData ? _schemas["default"].load(rawData.datasets, rawData.config) : null;
}
/**
 * Parse a single or an array of datasets saved using kepler.gl schema
 * @param {Array | Array<Object>} rawData
 */


function processKeplerglDataset(rawData) {
  if (!rawData) {
    return null;
  }

  var results = _schemas["default"].parseSavedData((0, _utils.toArray)(rawData));

  if (!results) {
    return null;
  }

  return Array.isArray(rawData) ? results : results[0];
}

var DATASET_HANDLERS = (_DATASET_HANDLERS = {}, (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.row, processRowObject), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.geojson, processGeojson), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.csv, processCsvData), (0, _defineProperty2["default"])(_DATASET_HANDLERS, _defaultSettings.DATASET_FORMATS.keplergl, processKeplerglDataset), _DATASET_HANDLERS);
exports.DATASET_HANDLERS = DATASET_HANDLERS;
var Processors = {
  processGeojson: processGeojson,
  processCsvData: processCsvData,
  processRowObject: processRowObject,
  processKeplerglJSON: processKeplerglJSON,
  processKeplerglDataset: processKeplerglDataset,
  analyzerTypeToFieldType: analyzerTypeToFieldType,
  getFieldsFromData: getFieldsFromData,
  parseCsvRowsByFieldType: parseCsvRowsByFieldType,
  formatCsv: formatCsv
};
exports.Processors = Processors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yLmpzIl0sIm5hbWVzIjpbIkFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTIiwiQW5hbHl6ZXJEQVRBX1RZUEVTIiwiREFURSIsIlRJTUUiLCJEQVRFVElNRSIsIk5VTUJFUiIsIklOVCIsIkZMT0FUIiwiQk9PTEVBTiIsIlNUUklORyIsIkdFT01FVFJZIiwiR0VPTUVUUllfRlJPTV9TVFJJTkciLCJQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HIiwiWklQQ09ERSIsIkFSUkFZIiwiT0JKRUNUIiwiQ1NWX05VTExTIiwiSUdOT1JFX0RBVEFfVFlQRVMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwidHlwZSIsImluY2x1ZGVzIiwiUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkciLCJBTExfRklFTERfVFlQRVMiLCJ2YWxpZCIsImQiLCJwYXJzZSIsImludGVnZXIiLCJwYXJzZUludCIsInRpbWVzdGFtcCIsImZpZWxkIiwiZm9ybWF0IiwiTnVtYmVyIiwicmVhbCIsInBhcnNlRmxvYXQiLCJwcm9jZXNzQ3N2RGF0YSIsInJhd0RhdGEiLCJoZWFkZXIiLCJyb3dzIiwiaGVhZGVyUm93IiwicGFyc2VkUm93cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkVycm9yIiwic2xpY2UiLCJjbGVhblVwRmFsc3lDc3ZWYWx1ZSIsInNhbXBsZSIsImdldFNhbXBsZUZvclR5cGVBbmFseXplIiwiZmllbGRzIiwiYWxsRGF0YSIsImdldEZpZWxkc0Zyb21EYXRhIiwicGFyc2VSb3dzQnlGaWVsZHMiLCJnZW9qc29uRmllbGRJZHgiLCJmaW5kSW5kZXgiLCJmIiwibmFtZSIsImZvckVhY2giLCJwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZSIsImJpbmQiLCJzYW1wbGVDb3VudCIsInRvdGFsIiwiTWF0aCIsIm1pbiIsIm1hcCIsImZpZWxkSWR4IiwiaSIsImoiLCJyZSIsIlJlZ0V4cCIsIm1hdGNoIiwiZ2VvRmllbGRJZHgiLCJwYXJzZXIiLCJmaXJzdCIsImZpbmQiLCJyIiwicm93IiwicHJvcGVydGllcyIsImRhdGEiLCJmaWVsZE9yZGVyIiwibWV0YWRhdGEiLCJBbmFseXplciIsImNvbXB1dGVDb2xNZXRhIiwicmVnZXgiLCJkYXRhVHlwZSIsImlnbm9yZWREYXRhVHlwZXMiLCJyZW5hbWVEdXBsaWNhdGVGaWVsZHMiLCJmaWVsZEJ5SW5kZXgiLCJyZXN1bHQiLCJpbmRleCIsImZpZWxkTWV0YSIsIm0iLCJrZXkiLCJhbmFseXplclR5cGVUb0ZpZWxkVHlwZSIsImFuYWx5emVyVHlwZSIsInZhbHVlQWNjZXNzb3IiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2N1IiwiYWxsTmFtZXMiLCJmaWVsZE5hbWUiLCJjb3VudGVyIiwicHVzaCIsImFUeXBlIiwiZGF0ZSIsImdlb2pzb24iLCJzdHJpbmciLCJnbG9iYWxDb25zb2xlIiwid2FybiIsInByb2Nlc3NSb3dPYmplY3QiLCJwcm9jZXNzR2VvanNvbiIsIm5vcm1hbGl6ZWRHZW9qc29uIiwiZmVhdHVyZXMiLCJlcnJvciIsIkdVSURFU19GSUxFX0ZPUk1BVF9ET0MiLCJhbGxEYXRhUm93cyIsImdlb21ldHJ5IiwiX2dlb2pzb24iLCJwcmV2IiwiY3VyciIsImZvcm1hdENzdiIsImNvbHVtbnMiLCJmb3JtYXR0ZWREYXRhIiwidmFsaWRhdGVJbnB1dERhdGEiLCJhbGxWYWxpZCIsImV2ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbmROb25FbXB0eVJvd3NBdEZpZWxkIiwidHMiLCJhbmFseXplZFR5cGUiLCJjYXRlZ29yeSIsInNhbXBsZURhdGEiLCJtZXRhIiwidXBkYXRlZEZpZWxkcyIsInByb2Nlc3NLZXBsZXJnbEpTT04iLCJLZXBsZXJHbFNjaGVtYSIsImxvYWQiLCJkYXRhc2V0cyIsImNvbmZpZyIsInByb2Nlc3NLZXBsZXJnbERhdGFzZXQiLCJyZXN1bHRzIiwicGFyc2VTYXZlZERhdGEiLCJEQVRBU0VUX0hBTkRMRVJTIiwiREFUQVNFVF9GT1JN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TUFBTXlHLE9BQU8sR0FBR0wsb0JBQWVNLGNBQWYsQ0FBOEIsb0JBQVExRyxPQUFSLENBQTlCLENBQWhCOztBQUNBLE1BQUksQ0FBQ3lHLE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU9wRyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sT0FBZCxJQUF5QnlHLE9BQXpCLEdBQW1DQSxPQUFPLENBQUMsQ0FBRCxDQUFqRDtBQUNEOztBQUVNLElBQU1FLGdCQUFnQixnRkFDMUJDLGlDQUFnQnBFLEdBRFUsRUFDSmlDLGdCQURJLHVEQUUxQm1DLGlDQUFnQnZDLE9BRlUsRUFFQUssY0FGQSx1REFHMUJrQyxpQ0FBZ0JDLEdBSFUsRUFHSjlHLGNBSEksdURBSTFCNkcsaUNBQWdCRSxRQUpVLEVBSUNOLHNCQUpELHFCQUF0Qjs7QUFPQSxJQUFNTyxVQUFVLEdBQUc7QUFDeEJyQyxFQUFBQSxjQUFjLEVBQWRBLGNBRHdCO0FBRXhCM0UsRUFBQUEsY0FBYyxFQUFkQSxjQUZ3QjtBQUd4QjBFLEVBQUFBLGdCQUFnQixFQUFoQkEsZ0JBSHdCO0FBSXhCMEIsRUFBQUEsbUJBQW1CLEVBQW5CQSxtQkFKd0I7QUFLeEJLLEVBQUFBLHNCQUFzQixFQUF0QkEsc0JBTHdCO0FBTXhCL0MsRUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFOd0I7QUFPeEIxQyxFQUFBQSxpQkFBaUIsRUFBakJBLGlCQVB3QjtBQVF4Qk8sRUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFSd0I7QUFTeEI4RCxFQUFBQSxTQUFTLEVBQVRBO0FBVHdCLENBQW5CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjc3ZQYXJzZVJvd3MsIGNzdkZvcm1hdFJvd3N9IGZyb20gJ2QzLWRzdic7XG5pbXBvcnQge3JhbmdlfSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQge2NvbnNvbGUgYXMgZ2xvYmFsQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge0FuYWx5emVyLCBEQVRBX1RZUEVTIGFzIEFuYWx5emVyREFUQV9UWVBFU30gZnJvbSAndHlwZS1hbmFseXplcic7XG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJ0BtYXBib3gvZ2VvanNvbi1ub3JtYWxpemUnO1xuaW1wb3J0IHtBTExfRklFTERfVFlQRVMsIERBVEFTRVRfRk9STUFUU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWQsIHBhcnNlRmllbGRWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAnc2NoZW1hcyc7XG5pbXBvcnQge0dVSURFU19GSUxFX0ZPUk1BVF9ET0N9IGZyb20gJ2NvbnN0YW50cy91c2VyLWd1aWRlcyc7XG5pbXBvcnQge2lzUGxhaW5PYmplY3QsIHRvQXJyYXl9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEFDQ0VQVEVEX0FOQUxZWkVSX1RZUEVTID0gW1xuICBBbmFseXplckRBVEFfVFlQRVMuREFURSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlRJTUUsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5EQVRFVElNRSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLk5VTUJFUixcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLklOVCxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkZMT0FULFxuICBBbmFseXplckRBVEFfVFlQRVMuQk9PTEVBTixcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLlNUUklORyxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkdFT01FVFJZLFxuICBBbmFseXplckRBVEFfVFlQRVMuR0VPTUVUUllfRlJPTV9TVFJJTkcsXG4gIEFuYWx5emVyREFUQV9UWVBFUy5QQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HLFxuICBBbmFseXplckRBVEFfVFlQRVMuWklQQ09ERSxcbiAgQW5hbHl6ZXJEQVRBX1RZUEVTLkFSUkFZLFxuICBBbmFseXplckRBVEFfVFlQRVMuT0JKRUNUXG5dO1xuXG4vLyBpZiBhbnkgb2YgdGhlc2UgdmFsdWUgb2NjdXJzIGluIGNzdiwgcGFyc2UgaXQgdG8gbnVsbDtcbi8vIGNvbnN0IENTVl9OVUxMUyA9IFsnJywgJ251bGwnLCAnTlVMTCcsICdOdWxsJywgJ05hTicsICcvTiddO1xuLy8gbWF0Y2hlcyBlbXB0eSBzdHJpbmdcbmV4cG9ydCBjb25zdCBDU1ZfTlVMTFMgPSAvXihudWxsfE5VTEx8TnVsbHxOYU58XFwvTnx8KSQvO1xuXG5jb25zdCBJR05PUkVfREFUQV9UWVBFUyA9IE9iamVjdC5rZXlzKEFuYWx5emVyREFUQV9UWVBFUykuZmlsdGVyKFxuICB0eXBlID0+ICFBQ0NFUFRFRF9BTkFMWVpFUl9UWVBFUy5pbmNsdWRlcyh0eXBlKVxuKTtcblxuZXhwb3J0IGNvbnN0IFBBUlNFX0ZJRUxEX1ZBTFVFX0ZST01fU1RSSU5HID0ge1xuICBbQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW5dOiB7XG4gICAgdmFsaWQ6IGQgPT4gdHlwZW9mIGQgPT09ICdib29sZWFuJyxcbiAgICBwYXJzZTogZCA9PiBkID09PSAndHJ1ZScgfHwgZCA9PT0gJ1RydWUnIHx8IGQgPT09ICdUUlVFJyB8fCBkID09PSAnMSdcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXToge1xuICAgIHZhbGlkOiBkID0+IHBhcnNlSW50KGQsIDEwKSA9PT0gZCxcbiAgICBwYXJzZTogZCA9PiBwYXJzZUludChkLCAxMClcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXBdOiB7XG4gICAgdmFsaWQ6IChkLCBmaWVsZCkgPT5cbiAgICAgIFsneCcsICdYJ10uaW5jbHVkZXMoZmllbGQuZm9ybWF0KSA/IHR5cGVvZiBkID09PSAnbnVtYmVyJyA6IHR5cGVvZiBkID09PSAnc3RyaW5nJyxcbiAgICBwYXJzZTogKGQsIGZpZWxkKSA9PiAoWyd4JywgJ1gnXS5pbmNsdWRlcyhmaWVsZC5mb3JtYXQpID8gTnVtYmVyKGQpIDogZClcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXToge1xuICAgIHZhbGlkOiBkID0+IHBhcnNlRmxvYXQoZCkgPT09IGQsXG4gICAgLy8gTm90ZSB0aGlzIHdpbGwgcmVzdWx0IGluIE5hTiBmb3Igc29tZSBzdHJpbmdcbiAgICBwYXJzZTogcGFyc2VGbG9hdFxuICB9XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgY3N2IGRhdGEsIG91dHB1dCBhIGRhdGEgb2JqZWN0IHdpdGggYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gLlxuICogVGhlIGRhdGEgb2JqZWN0IGNhbiBiZSB3cmFwcGVkIGluIGEgYGRhdGFzZXRgIGFuZCBwYXNzIHRvIFtgYWRkRGF0YVRvTWFwYF0oLi4vYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcClcbiAqIEBwYXJhbSByYXdEYXRhIHJhdyBjc3Ygc3RyaW5nXG4gKiBAcmV0dXJucyAgZGF0YSBvYmplY3QgYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gIGNhbiBiZSBwYXNzZWQgdG8gYWRkRGF0YVRvTWFwc1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzQ3N2RGF0YX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3Byb2Nlc3NDc3ZEYXRhfSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG4gKlxuICogY29uc3QgdGVzdERhdGEgPSBgZ3BzX2RhdGEudXRjX3RpbWVzdGFtcCxncHNfZGF0YS5sYXQsZ3BzX2RhdGEubG5nLGdwc19kYXRhLnR5cGVzLGVwb2NoLGhhc19yZXN1bHQsaWQsdGltZSxiZWdpbnRyaXBfdHNfdXRjLGJlZ2ludHJpcF90c19sb2NhbCxkYXRlXG4gKiAyMDE2LTA5LTE3IDAwOjA5OjU1LDI5Ljk5MDA5MzcsMzEuMjU5MDU0Mixkcml2ZXJfYW5hbHl0aWNzLDE0NzI2ODgwMDAwMDAsRmFsc2UsMSwyMDE2LTA5LTIzVDAwOjAwOjAwLjAwMFosMjAxNi0xMC0wMSAwOTo0MTozOSswMDowMCwyMDE2LTEwLTAxIDA5OjQxOjM5KzAwOjAwLDIwMTYtMDktMjNcbiAqIDIwMTYtMDktMTcgMDA6MTA6NTYsMjkuOTkyNzY5OSwzMS4yNDYxMTQyLGRyaXZlcl9hbmFseXRpY3MsMTQ3MjY4ODAwMDAwMCxGYWxzZSwyLDIwMTYtMDktMjNUMDA6MDA6MDAuMDAwWiwyMDE2LTEwLTAxIDA5OjQ2OjM3KzAwOjAwLDIwMTYtMTAtMDEgMTY6NDY6MzcrMDA6MDAsMjAxNi0wOS0yM1xuICogMjAxNi0wOS0xNyAwMDoxMTo1NiwyOS45OTA3MjYxLDMxLjIzMTI3NDIsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDMsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLCwsMjAxNi0wOS0yM1xuICogMjAxNi0wOS0xNyAwMDoxMjo1OCwyOS45ODcwMDc0LDMxLjIxNzU4MjcsZHJpdmVyX2FuYWx5dGljcywxNDcyNjg4MDAwMDAwLEZhbHNlLDQsMjAxNi0wOS0yM1QwMDowMDowMC4wMDBaLCwsMjAxNi0wOS0yM2BcbiAqXG4gKiBjb25zdCBkYXRhc2V0ID0ge1xuICogIGluZm86IHtpZDogJ3Rlc3RfZGF0YScsIGxhYmVsOiAnTXkgQ3N2J30sXG4gKiAgZGF0YTogcHJvY2Vzc0NzdkRhdGEodGVzdERhdGEpXG4gKiB9O1xuICpcbiAqIGRpc3BhdGNoKGFkZERhdGFUb01hcCh7XG4gKiAgZGF0YXNldHM6IFtkYXRhc2V0XSxcbiAqICBvcHRpb25zOiB7Y2VudGVyTWFwOiB0cnVlLCByZWFkT25seTogdHJ1ZX1cbiAqIH0pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NDc3ZEYXRhKHJhd0RhdGEsIGhlYWRlcikge1xuICBsZXQgcm93cztcbiAgbGV0IGhlYWRlclJvdztcblxuICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcGFyc2VkUm93cyA9IGNzdlBhcnNlUm93cyhyYXdEYXRhKTtcblxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXJzZWRSb3dzKSB8fCBwYXJzZWRSb3dzLmxlbmd0aCA8IDIpIHtcbiAgICAgIC8vIGxvb2tzIGxpa2UgYW4gZW1wdHkgZmlsZSwgdGhyb3cgZXJyb3IgdG8gYmUgY2F0Y2hcbiAgICAgIHRocm93IG5ldyBFcnJvcigncHJvY2VzcyBDc3YgRGF0YSBGYWlsZWQ6IENTViBpcyBlbXB0eScpO1xuICAgIH1cbiAgICBoZWFkZXJSb3cgPSBwYXJzZWRSb3dzWzBdO1xuICAgIHJvd3MgPSBwYXJzZWRSb3dzLnNsaWNlKDEpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmF3RGF0YSkgJiYgcmF3RGF0YS5sZW5ndGgpIHtcbiAgICByb3dzID0gcmF3RGF0YTtcbiAgICBoZWFkZXJSb3cgPSBoZWFkZXI7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaGVhZGVyUm93KSkge1xuICAgICAgLy8gaWYgZGF0YSBpcyBwYXNzZWQgaW4gYXMgYXJyYXkgb2Ygcm93cyBhbmQgbWlzc2luZyBoZWFkZXJcbiAgICAgIC8vIGFzc3VtZSBmaXJzdCByb3cgaXMgaGVhZGVyXG4gICAgICBoZWFkZXJSb3cgPSByYXdEYXRhWzBdO1xuICAgICAgcm93cyA9IHJhd0RhdGEuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyb3dzIHx8ICFoZWFkZXJSb3cpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5wdXQgcGFzc2VkIHRvIHByb2Nlc3NDc3ZEYXRhJyk7XG4gIH1cblxuICAvLyBoZXJlIHdlIGFzc3VtZSB0aGUgY3N2IGZpbGUgdGhhdCBwZW9wbGUgdXBsb2FkZWQgd2lsbCBoYXZlIGZpcnN0IHJvd1xuICAvLyBhcyBuYW1lIG9mIHRoZSBjb2x1bW5cblxuICBjbGVhblVwRmFsc3lDc3ZWYWx1ZShyb3dzKTtcbiAgLy8gTm8gbmVlZCB0byBydW4gdHlwZSBkZXRlY3Rpb24gb24gZXZlcnkgZGF0YSBwb2ludFxuICAvLyBoZXJlIHdlIGdldCBhIGxpc3Qgb2Ygbm9uZSBudWxsIHZhbHVlcyB0byBydW4gYW5hbHl6ZSBvblxuICBjb25zdCBzYW1wbGUgPSBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7ZmllbGRzOiBoZWFkZXJSb3csIGFsbERhdGE6IHJvd3N9KTtcbiAgY29uc3QgZmllbGRzID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlLCBoZWFkZXJSb3cpO1xuICBjb25zdCBwYXJzZWRSb3dzID0gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKTtcblxuICByZXR1cm4ge2ZpZWxkcywgcm93czogcGFyc2VkUm93c307XG59XG5cbi8qKlxuICogUGFyc2Ugcm93cyBvZiBjc3YgYnkgYW5hbHl6ZWQgZmllbGQgdHlwZXMuIFNvIHRoYXQgYCcxJ2AgLT4gYDFgLCBgJ1RydWUnYCAtPiBgdHJ1ZWBcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSByb3dzXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSb3dzQnlGaWVsZHMocm93cywgZmllbGRzKSB7XG4gIC8vIEVkaXQgcm93cyBpbiBwbGFjZVxuICBjb25zdCBnZW9qc29uRmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSAnX2dlb2pzb24nKTtcbiAgZmllbGRzLmZvckVhY2gocGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGUuYmluZChudWxsLCByb3dzLCBnZW9qc29uRmllbGRJZHgpKTtcblxuICByZXR1cm4gcm93cztcbn1cbi8qKlxuICogR2V0dGluZyBzYW1wbGUgZGF0YSBmb3IgYW5hbHl6aW5nIGZpZWxkIHR5cGUuXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5nZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHMsIGFsbERhdGEsIHNhbXBsZUNvdW50ID0gNTB9KSB7XG4gIGNvbnN0IHRvdGFsID0gTWF0aC5taW4oc2FtcGxlQ291bnQsIGFsbERhdGEubGVuZ3RoKTtcbiAgLy8gY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xuICBjb25zdCBzYW1wbGUgPSByYW5nZSgwLCB0b3RhbCwgMSkubWFwKGQgPT4gKHt9KSk7XG5cbiAgLy8gY29sbGVjdCBzYW1wbGUgZGF0YSBmb3IgZWFjaCBmaWVsZFxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQsIGZpZWxkSWR4KSA9PiB7XG4gICAgLy8gZGF0YSBjb3VudGVyXG4gICAgbGV0IGkgPSAwO1xuICAgIC8vIHNhbXBsZSBjb3VudGVyXG4gICAgbGV0IGogPSAwO1xuXG4gICAgd2hpbGUgKGogPCB0b3RhbCkge1xuICAgICAgaWYgKGkgPj0gYWxsRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgLy8gaWYgZGVwbGV0ZWQgZGF0YSBwb29sXG4gICAgICAgIHNhbXBsZVtqXVtmaWVsZF0gPSBudWxsO1xuICAgICAgICBqKys7XG4gICAgICB9IGVsc2UgaWYgKG5vdE51bGxvclVuZGVmaW5lZChhbGxEYXRhW2ldW2ZpZWxkSWR4XSkpIHtcbiAgICAgICAgc2FtcGxlW2pdW2ZpZWxkXSA9IGFsbERhdGFbaV1bZmllbGRJZHhdO1xuICAgICAgICBqKys7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzYW1wbGU7XG59XG5cbi8qKlxuICogQ29udmVydCBmYWxzeSB2YWx1ZSBpbiBjc3YgaW5jbHVkaW5nIGAnJywgJ251bGwnLCAnTlVMTCcsICdOdWxsJywgJ05hTidgIHRvIGBudWxsYCxcbiAqIHNvIHRoYXQgdHlwZS1hbmFseXplciB3b24ndCBkZXRlY3QgaXQgYXMgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IHJvd3NcbiAqL1xuZnVuY3Rpb24gY2xlYW5VcEZhbHN5Q3N2VmFsdWUocm93cykge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoQ1NWX05VTExTLCAnZycpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3NbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIGFuYWx5emVyIHdpbGwgc2V0IGFueSBmaWVsZHMgdG8gJ3N0cmluZycgaWYgdGhlcmUgYXJlIGVtcHR5IHZhbHVlc1xuICAgICAgLy8gd2hpY2ggd2lsbCBiZSBwYXJzZWQgYXMgJycgYnkgZDMuY3N2XG4gICAgICAvLyBoZXJlIHdlIHBhcnNlIGVtcHR5IGRhdGEgYXMgbnVsbFxuICAgICAgLy8gVE9ETzogY3JlYXRlIHdhcm5pbmcgd2hlbiBkZWx0ZWN0IGBDU1ZfTlVMTFNgIGluIHRoZSBkYXRhXG4gICAgICBpZiAodHlwZW9mIHJvd3NbaV1bal0gPT09ICdzdHJpbmcnICYmIHJvd3NbaV1bal0ubWF0Y2gocmUpKSB7XG4gICAgICAgIHJvd3NbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFByb2Nlc3MgdXBsb2FkZWQgY3N2IGZpbGUgdG8gcGFyc2UgdmFsdWUgYnkgZmllbGQgdHlwZVxuICpcbiAqIEBwYXJhbSByb3dzXG4gKiBAcGFyYW0gZ2VvRmllbGRJZHggZmllbGQgaW5kZXhcbiAqIEBwYXJhbSBmaWVsZFxuICogQHBhcmFtIGlcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2RhdGEtcHJvY2Vzc29yJykucGFyc2VDc3ZSb3dzQnlGaWVsZFR5cGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNzdlJvd3NCeUZpZWxkVHlwZShyb3dzLCBnZW9GaWVsZElkeCwgZmllbGQsIGkpIHtcbiAgY29uc3QgcGFyc2VyID0gUEFSU0VfRklFTERfVkFMVUVfRlJPTV9TVFJJTkdbZmllbGQudHlwZV07XG4gIGlmIChwYXJzZXIpIHtcbiAgICAvLyBjaGVjayBmaXJzdCBub3QgbnVsbCB2YWx1ZSBvZiBpdCdzIGFscmVhZHkgcGFyc2VkXG4gICAgY29uc3QgZmlyc3QgPSByb3dzLmZpbmQociA9PiBub3ROdWxsb3JVbmRlZmluZWQocltpXSkpO1xuICAgIGlmICghZmlyc3QgfHwgcGFyc2VyLnZhbGlkKGZpcnN0W2ldLCBmaWVsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAvLyBwYXJzZSBzdHJpbmcgdmFsdWUgYmFzZWQgb24gZmllbGQgdHlwZVxuICAgICAgaWYgKHJvd1tpXSAhPT0gbnVsbCkge1xuICAgICAgICByb3dbaV0gPSBwYXJzZXIucGFyc2Uocm93W2ldLCBmaWVsZCk7XG4gICAgICAgIGlmIChnZW9GaWVsZElkeCA+IC0xICYmIHJvd1tnZW9GaWVsZElkeF0gJiYgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgcm93W2dlb0ZpZWxkSWR4XS5wcm9wZXJ0aWVzW2ZpZWxkLm5hbWVdID0gcm93W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbmFseXplIGZpZWxkIHR5cGVzIGZyb20gZGF0YSBpbiBgc3RyaW5nYCBmb3JtYXQsIGUuZy4gdXBsb2FkZWQgY3N2LlxuICogQXNzaWduIGB0eXBlYCwgYGZpZWxkSWR4YCBhbmQgYGZvcm1hdGAgKHRpbWVzdGFtcCBvbmx5KSB0byBlYWNoIGZpZWxkXG4gKlxuICogQHBhcmFtIGRhdGEgYXJyYXkgb2Ygcm93IG9iamVjdFxuICogQHBhcmFtIGZpZWxkT3JkZXIgYXJyYXkgb2YgZmllbGQgbmFtZXMgYXMgc3RyaW5nXG4gKiBAcmV0dXJucyBmb3JtYXR0ZWQgZmllbGRzXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLmdldEZpZWxkc0Zyb21EYXRhfVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQge2dldEZpZWxkc0Zyb21EYXRhfSBmcm9tICdrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG4gKiBjb25zdCBkYXRhID0gW3tcbiAqICAgdGltZTogJzIwMTYtMDktMTcgMDA6MDk6NTUnLFxuICogICB2YWx1ZTogJzQnLFxuICogICBzdXJnZTogJzEuMicsXG4gKiAgIGlzVHJpcDogJ3RydWUnLFxuICogICB6ZXJvT25lczogJzAnXG4gKiB9LCB7XG4gKiAgIHRpbWU6ICcyMDE2LTA5LTE3IDAwOjMwOjA4JyxcbiAqICAgdmFsdWU6ICczJyxcbiAqICAgc3VyZ2U6IG51bGwsXG4gKiAgIGlzVHJpcDogJ2ZhbHNlJyxcbiAqICAgemVyb09uZXM6ICcxJ1xuICogfSwge1xuICogICB0aW1lOiBudWxsLFxuICogICB2YWx1ZTogJzInLFxuICogICBzdXJnZTogJzEuMycsXG4gKiAgIGlzVHJpcDogbnVsbCxcbiAqICAgemVyb09uZXM6ICcxJ1xuICogfV07XG4gKlxuICogY29uc3QgZmllbGRPcmRlciA9IFsndGltZScsICd2YWx1ZScsICdzdXJnZScsICdpc1RyaXAnLCAnemVyb09uZXMnXTtcbiAqIGNvbnN0IGZpZWxkcyA9IGdldEZpZWxkc0Zyb21EYXRhKGRhdGEsIGZpZWxkT3JkZXIpO1xuICogLy8gZmllbGRzID0gW1xuICogLy8ge25hbWU6ICd0aW1lJywgZm9ybWF0OiAnWVlZWS1NLUQgSDptOnMnLCBmaWVsZElkeDogMSwgdHlwZTogJ3RpbWVzdGFtcCd9LFxuICogLy8ge25hbWU6ICd2YWx1ZScsIGZvcm1hdDogJycsIGZpZWxkSWR4OiA0LCB0eXBlOiAnaW50ZWdlcid9LFxuICogLy8ge25hbWU6ICdzdXJnZScsIGZvcm1hdDogJycsIGZpZWxkSWR4OiA1LCB0eXBlOiAncmVhbCd9LFxuICogLy8ge25hbWU6ICdpc1RyaXAnLCBmb3JtYXQ6ICcnLCBmaWVsZElkeDogNiwgdHlwZTogJ2Jvb2xlYW4nfSxcbiAqIC8vIHtuYW1lOiAnemVyb09uZXMnLCBmb3JtYXQ6ICcnLCBmaWVsZElkeDogNywgdHlwZTogJ2ludGVnZXInfV07XG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRzRnJvbURhdGEoZGF0YSwgZmllbGRPcmRlcikge1xuICAvLyBhZGQgYSBjaGVjayBmb3IgZXBvY2ggdGltZXN0YW1wXG4gIGNvbnN0IG1ldGFkYXRhID0gQW5hbHl6ZXIuY29tcHV0ZUNvbE1ldGEoXG4gICAgZGF0YSxcbiAgICBbXG4gICAgICB7cmVnZXg6IC8uKmdlb2pzb258YWxsX3BvaW50cy9nLCBkYXRhVHlwZTogJ0dFT01FVFJZJ30sXG4gICAgICB7cmVnZXg6IC8uKmNlbnN1cy9nLCBkYXRhVHlwZTogJ1NUUklORyd9XG4gICAgXSxcbiAgICB7aWdub3JlZERhdGFUeXBlczogSUdOT1JFX0RBVEFfVFlQRVN9XG4gICk7XG5cbiAgY29uc3Qge2ZpZWxkQnlJbmRleH0gPSByZW5hbWVEdXBsaWNhdGVGaWVsZHMoZmllbGRPcmRlcik7XG5cbiAgY29uc3QgcmVzdWx0ID0gZmllbGRPcmRlci5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBmaWVsZEJ5SW5kZXhbaW5kZXhdO1xuXG4gICAgY29uc3QgZmllbGRNZXRhID0gbWV0YWRhdGEuZmluZChtID0+IG0ua2V5ID09PSBmaWVsZCk7XG4gICAgY29uc3Qge3R5cGUsIGZvcm1hdH0gPSBmaWVsZE1ldGEgfHwge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIGZvcm1hdCxcbiAgICAgIGZpZWxkSWR4OiBpbmRleCxcbiAgICAgIHR5cGU6IGFuYWx5emVyVHlwZVRvRmllbGRUeXBlKHR5cGUpLFxuICAgICAgYW5hbHl6ZXJUeXBlOiB0eXBlLFxuICAgICAgdmFsdWVBY2Nlc3NvcjogdmFsdWVzID0+IHZhbHVlc1tpbmRleF1cbiAgICB9O1xuICB9KTtcblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogcGFzcyBpbiBhbiBhcnJheSBvZiBmaWVsZCBuYW1lcywgcmVuYW1lIGR1cGxpY2F0ZWQgb25lXG4gKiBhbmQgcmV0dXJuIGEgbWFwIGZyb20gb2xkIGZpZWxkIGluZGV4IHRvIG5ldyBuYW1lXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZmllbGRPcmRlclxuICogQHJldHVybnMge09iamVjdH0gbmV3IGZpZWxkIG5hbWUgYnkgaW5kZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZUR1cGxpY2F0ZUZpZWxkcyhmaWVsZE9yZGVyKSB7XG4gIHJldHVybiBmaWVsZE9yZGVyLnJlZHVjZShcbiAgICAoYWNjdSwgZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IHthbGxOYW1lc30gPSBhY2N1O1xuICAgICAgbGV0IGZpZWxkTmFtZSA9IGZpZWxkO1xuXG4gICAgICAvLyBhZGQgYSBjb3VudGVyIHRvIGR1cGxpY2F0ZWQgbmFtZXNcbiAgICAgIGlmIChhbGxOYW1lcy5pbmNsdWRlcyhmaWVsZCkpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAoYWxsTmFtZXMuaW5jbHVkZXMoYCR7ZmllbGR9LSR7Y291bnRlcn1gKSkge1xuICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgICBmaWVsZE5hbWUgPSBgJHtmaWVsZH0tJHtjb3VudGVyfWA7XG4gICAgICB9XG5cbiAgICAgIGFjY3UuZmllbGRCeUluZGV4W2ldID0gZmllbGROYW1lO1xuICAgICAgYWNjdS5hbGxOYW1lcy5wdXNoKGZpZWxkTmFtZSk7XG5cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sXG4gICAge2FsbE5hbWVzOiBbXSwgZmllbGRCeUluZGV4OiB7fX1cbiAgKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHR5cGUtYW5hbHl6ZXIgb3V0cHV0IHRvIGtlcGxlci5nbCBmaWVsZCB0eXBlc1xuICpcbiAqIEBwYXJhbSBhVHlwZVxuICogQHJldHVybnMgY29ycmVzcG9uZGluZyB0eXBlIGluIGBBTExfRklFTERfVFlQRVNgXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLmFuYWx5emVyVHlwZVRvRmllbGRUeXBlfX1cbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5emVyVHlwZVRvRmllbGRUeXBlKGFUeXBlKSB7XG4gIGNvbnN0IHtcbiAgICBEQVRFLFxuICAgIFRJTUUsXG4gICAgREFURVRJTUUsXG4gICAgTlVNQkVSLFxuICAgIElOVCxcbiAgICBGTE9BVCxcbiAgICBCT09MRUFOLFxuICAgIFNUUklORyxcbiAgICBHRU9NRVRSWSxcbiAgICBHRU9NRVRSWV9GUk9NX1NUUklORyxcbiAgICBQQUlSX0dFT01FVFJZX0ZST01fU1RSSU5HLFxuICAgIFpJUENPREUsXG4gICAgQVJSQVksXG4gICAgT0JKRUNUXG4gIH0gPSBBbmFseXplckRBVEFfVFlQRVM7XG5cbiAgLy8gVE9ETzogdW4gcmVjb2duaXplZCB0eXBlc1xuICAvLyBDVVJSRU5DWSBQRVJDRU5UIE5PTkVcbiAgc3dpdGNoIChhVHlwZSkge1xuICAgIGNhc2UgREFURTpcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuZGF0ZTtcbiAgICBjYXNlIFRJTUU6XG4gICAgY2FzZSBEQVRFVElNRTpcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMudGltZXN0YW1wO1xuICAgIGNhc2UgRkxPQVQ6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnJlYWw7XG4gICAgY2FzZSBJTlQ6XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI7XG4gICAgY2FzZSBCT09MRUFOOlxuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuO1xuICAgIGNhc2UgR0VPTUVUUlk6XG4gICAgY2FzZSBHRU9NRVRSWV9GUk9NX1NUUklORzpcbiAgICBjYXNlIFBBSVJfR0VPTUVUUllfRlJPTV9TVFJJTkc6XG4gICAgY2FzZSBBUlJBWTpcbiAgICBjYXNlIE9CSkVDVDpcbiAgICAgIC8vIFRPRE86IGNyZWF0ZSBhIG5ldyBkYXRhIHR5cGUgZm9yIG9iamVjdHMgYW5kIGFycmF5c1xuICAgICAgcmV0dXJuIEFMTF9GSUVMRF9UWVBFUy5nZW9qc29uO1xuICAgIGNhc2UgTlVNQkVSOlxuICAgIGNhc2UgU1RSSU5HOlxuICAgIGNhc2UgWklQQ09ERTpcbiAgICAgIHJldHVybiBBTExfRklFTERfVFlQRVMuc3RyaW5nO1xuICAgIGRlZmF1bHQ6XG4gICAgICBnbG9iYWxDb25zb2xlLndhcm4oYFVuc3VwcG9ydGVkIGFuYWx5emVyIHR5cGU6ICR7YVR5cGV9YCk7XG4gICAgICByZXR1cm4gQUxMX0ZJRUxEX1RZUEVTLnN0cmluZztcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbi8qKlxuICogUHJvY2VzcyBkYXRhIHdoZXJlIGVhY2ggcm93IGlzIGFuIG9iamVjdCwgb3V0cHV0IGNhbiBiZSBwYXNzZWQgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKVxuICogTk9URTogVGhpcyBmdW5jdGlvbiBtYXkgbXV0YXRlIGlucHV0LlxuICogQHBhcmFtIHJhd0RhdGEgYW4gYXJyYXkgb2Ygcm93IG9iamVjdCwgZWFjaCBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGtleXNcbiAqIEByZXR1cm5zIGRhdGFzZXQgY29udGFpbmluZyBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnByb2Nlc3NSb3dPYmplY3R9XG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIGltcG9ydCB7cHJvY2Vzc1Jvd09iamVjdH0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuICpcbiAqIGNvbnN0IGRhdGEgPSBbXG4gKiAge2xhdDogMzEuMjcsIGxuZzogMTI3LjU2LCB2YWx1ZTogM30sXG4gKiAge2xhdDogMzEuMjIsIGxuZzogMTI2LjI2LCB2YWx1ZTogMX1cbiAqIF07XG4gKlxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtcbiAqICBkYXRhc2V0czoge1xuICogICAgaW5mbzoge2xhYmVsOiAnTXkgRGF0YScsIGlkOiAnbXlfZGF0YSd9LFxuICogICAgZGF0YTogcHJvY2Vzc1Jvd09iamVjdChkYXRhKVxuICogIH1cbiAqIH0pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NSb3dPYmplY3QocmF3RGF0YSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocmF3RGF0YSkgfHwgIXJhd0RhdGEubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmF3RGF0YVswXSk7XG4gIGNvbnN0IHJvd3MgPSByYXdEYXRhLm1hcChkID0+IGtleXMubWFwKGtleSA9PiBkW2tleV0pKTtcblxuICAvLyByb3cgb2JqZWN0IGFuIHN0aWxsIGNvbnRhaW4gdmFsdWVzIGxpa2UgYE51bGxgIG9yIGBOL0FgXG4gIGNsZWFuVXBGYWxzeUNzdlZhbHVlKHJvd3MpO1xuXG4gIHJldHVybiBwcm9jZXNzQ3N2RGF0YShyb3dzLCBrZXlzKTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzIEdlb0pTT04gW2BGZWF0dXJlQ29sbGVjdGlvbmBdKGh0dHA6Ly93aWtpLmdlb2pzb24ub3JnL0dlb0pTT05fZHJhZnRfdmVyc2lvbl82I0ZlYXR1cmVDb2xsZWN0aW9uKSxcbiAqIG91dHB1dCBhIGRhdGEgb2JqZWN0IHdpdGggYHtmaWVsZHM6IFtdLCByb3dzOiBbXX1gLlxuICogVGhlIGRhdGEgb2JqZWN0IGNhbiBiZSB3cmFwcGVkIGluIGEgYGRhdGFzZXRgIGFuZCBwYXNzZWQgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKVxuICogTk9URTogVGhpcyBmdW5jdGlvbiBtYXkgbXV0YXRlIGlucHV0LlxuICpcbiAqIEBwYXJhbSAgcmF3RGF0YSByYXcgZ2VvanNvbiBmZWF0dXJlIGNvbGxlY3Rpb25cbiAqIEByZXR1cm5zICBkYXRhc2V0IGNvbnRhaW5pbmcgYGZpZWxkc2AgYW5kIGByb3dzYFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZGF0YS1wcm9jZXNzb3InKS5wcm9jZXNzR2VvanNvbn1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogaW1wb3J0IHtwcm9jZXNzR2VvanNvbn0gZnJvbSAna2VwbGVyLmdsL3Byb2Nlc3NvcnMnO1xuICpcbiAqIGNvbnN0IGdlb2pzb24gPSB7XG4gKiBcdFwidHlwZVwiIDogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICogXHRcImZlYXR1cmVzXCIgOiBbe1xuICogXHRcdFwidHlwZVwiIDogXCJGZWF0dXJlXCIsXG4gKiBcdFx0XCJwcm9wZXJ0aWVzXCIgOiB7XG4gKiBcdFx0XHRcImNhcGFjaXR5XCIgOiBcIjEwXCIsXG4gKiBcdFx0XHRcInR5cGVcIiA6IFwiVS1SYWNrXCJcbiAqIFx0XHR9LFxuICogXHRcdFwiZ2VvbWV0cnlcIiA6IHtcbiAqIFx0XHRcdFwidHlwZVwiIDogXCJQb2ludFwiLFxuICogXHRcdFx0XCJjb29yZGluYXRlc1wiIDogWyAtNzEuMDczMjgzLCA0Mi40MTc1MDAgXVxuICogXHRcdH1cbiAqIFx0fV1cbiAqIH07XG4gKlxuICogZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtcbiAqICBkYXRhc2V0czoge1xuICogICAgaW5mbzoge1xuICogICAgICBsYWJlbDogJ1NhbXBsZSBUYXhpIFRyaXBzIGluIE5ldyBZb3JrIENpdHknLFxuICogICAgICBpZDogJ3Rlc3RfdHJpcF9kYXRhJ1xuICogICAgfSxcbiAqICAgIGRhdGE6IHByb2Nlc3NHZW9qc29uKGdlb2pzb24pXG4gKiAgfVxuICogfSkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0dlb2pzb24ocmF3RGF0YSkge1xuICBjb25zdCBub3JtYWxpemVkR2VvanNvbiA9IG5vcm1hbGl6ZShyYXdEYXRhKTtcblxuICBpZiAoIW5vcm1hbGl6ZWRHZW9qc29uIHx8ICFBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRHZW9qc29uLmZlYXR1cmVzKSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgYFJlYWQgRmlsZSBGYWlsZWQ6IEZpbGUgaXMgbm90IGEgdmFsaWQgR2VvSlNPTi4gUmVhZCBtb3JlIGFib3V0IFtzdXBwb3J0ZWQgZmlsZSBmb3JtYXRdKCR7R1VJREVTX0ZJTEVfRk9STUFUX0RPQ30pYFxuICAgICk7XG4gICAgdGhyb3cgZXJyb3I7XG4gICAgLy8gZmFpbCB0byBub3JtYWxpemUgZ2VvanNvblxuICB9XG5cbiAgLy8gZ2V0dGluZyBhbGwgZmVhdHVyZSBmaWVsZHNcbiAgY29uc3QgYWxsRGF0YVJvd3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3JtYWxpemVkR2VvanNvbi5mZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGYgPSBub3JtYWxpemVkR2VvanNvbi5mZWF0dXJlc1tpXTtcbiAgICBpZiAoZi5nZW9tZXRyeSkge1xuICAgICAgYWxsRGF0YVJvd3MucHVzaCh7XG4gICAgICAgIC8vIGFkZCBmZWF0dXJlIHRvIF9nZW9qc29uIGZpZWxkXG4gICAgICAgIF9nZW9qc29uOiBmLFxuICAgICAgICAuLi4oZi5wcm9wZXJ0aWVzIHx8IHt9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIGdldCBhbGwgdGhlIGZpZWxkXG4gIGNvbnN0IGZpZWxkcyA9IGFsbERhdGFSb3dzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgIE9iamVjdC5rZXlzKGN1cnIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmICghcHJldi5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHByZXYucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSk7XG5cbiAgLy8gbWFrZSBzdXJlIGVhY2ggZmVhdHVyZSBoYXMgZXhhY3Qgc2FtZSBmaWVsZHNcbiAgYWxsRGF0YVJvd3MuZm9yRWFjaChkID0+IHtcbiAgICBmaWVsZHMuZm9yRWFjaChmID0+IHtcbiAgICAgIGlmICghKGYgaW4gZCkpIHtcbiAgICAgICAgZFtmXSA9IG51bGw7XG4gICAgICAgIGQuX2dlb2pzb24ucHJvcGVydGllc1tmXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9jZXNzUm93T2JqZWN0KGFsbERhdGFSb3dzKTtcbn1cblxuLyoqXG4gKiBPbiBleHBvcnQgZGF0YSB0byBjc3ZcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhIGBkYXRhc2V0LmFsbERhdGFgIG9yIGZpbHRlcmVkIGRhdGEgYGRhdGFzZXQuZGF0YWBcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmllbGRzIGBkYXRhc2V0LmZpZWxkc2BcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzdiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdENzdihkYXRhLCBmaWVsZHMpIHtcbiAgY29uc3QgY29sdW1ucyA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xuICBjb25zdCBmb3JtYXR0ZWREYXRhID0gW2NvbHVtbnNdO1xuXG4gIC8vIHBhcnNlIGdlb2pzb24gb2JqZWN0IGFzIHN0cmluZ1xuICBkYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICBmb3JtYXR0ZWREYXRhLnB1c2gocm93Lm1hcCgoZCwgaSkgPT4gcGFyc2VGaWVsZFZhbHVlKGQsIGZpZWxkc1tpXS50eXBlKSkpO1xuICB9KTtcblxuICByZXR1cm4gY3N2Rm9ybWF0Um93cyhmb3JtYXR0ZWREYXRhKTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSBpbnB1dCBkYXRhLCBhZGRpbmcgbWlzc2luZyBmaWVsZCB0eXBlcywgcmVuYW1lIGR1cGxpY2F0ZSBjb2x1bW5zXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9kYXRhLXByb2Nlc3NvcicpLnZhbGlkYXRlSW5wdXREYXRhfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbnB1dERhdGEoZGF0YSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBhc3NlcnQoJ2FkZERhdGFUb01hcCBFcnJvcjogZGF0YXNldC5kYXRhIGNhbm5vdCBiZSBudWxsJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5maWVsZHMpKSB7XG4gICAgYXNzZXJ0KCdhZGREYXRhVG9NYXAgRXJyb3I6IGV4cGVjdCBkYXRhc2V0LmRhdGEuZmllbGRzIHRvIGJlIGFuIGFycmF5Jyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YS5yb3dzKSkge1xuICAgIGFzc2VydCgnYWRkRGF0YVRvTWFwIEVycm9yOiBleHBlY3QgZGF0YXNldC5kYXRhLnJvd3MgdG8gYmUgYW4gYXJyYXknKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHtmaWVsZHMsIHJvd3N9ID0gZGF0YTtcblxuICAvLyBjaGVjayBpZiBhbGwgZmllbGRzIGhhcyBuYW1lLCBmb3JtYXQgYW5kIHR5cGVcbiAgY29uc3QgYWxsVmFsaWQgPSBmaWVsZHMuZXZlcnkoKGYsIGkpID0+IHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoZikpIHtcbiAgICAgIGFzc2VydChgZmllbGRzIG5lZWRzIHRvIGJlIGFuIGFycmF5IG9mIG9iamVjdCwgYnV0IGZpbmQgJHt0eXBlb2YgZn1gKTtcbiAgICAgIGZpZWxkc1tpXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghZi5uYW1lKSB7XG4gICAgICBhc3NlcnQoYGZpZWxkLm5hbWUgaXMgcmVxdWlyZWQgYnV0IG1pc3NpbmcgaW4gJHtKU09OLnN0cmluZ2lmeShmKX1gKTtcbiAgICAgIC8vIGFzc2lnbiBhIG5hbWVcbiAgICAgIGZpZWxkc1tpXS5uYW1lID0gYGNvbHVtbl8ke2l9YDtcbiAgICB9XG5cbiAgICBpZiAoIUFMTF9GSUVMRF9UWVBFU1tmLnR5cGVdKSB7XG4gICAgICBhc3NlcnQoYHVua25vd24gZmllbGQgdHlwZSAke2YudHlwZX1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWZpZWxkcy5ldmVyeShmaWVsZCA9PiBmaWVsZC5hbmFseXplclR5cGUpKSB7XG4gICAgICBhc3NlcnQoJ2ZpZWxkIG1pc3NpbmcgYW5hbHl6ZXJUeXBlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgdGltZSBmb3JtYXQgaXMgY29ycmVjdCBiYXNlZCBvbiBmaXJzdCAxMCBub3QgZW1wdHkgZWxlbWVudFxuICAgIGlmIChmLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXApIHtcbiAgICAgIGNvbnN0IHNhbXBsZSA9IGZpbmROb25FbXB0eVJvd3NBdEZpZWxkKHJvd3MsIGksIDEwKS5tYXAociA9PiAoe3RzOiByW2ldfSkpO1xuICAgICAgY29uc3QgYW5hbHl6ZWRUeXBlID0gQW5hbHl6ZXIuY29tcHV0ZUNvbE1ldGEoc2FtcGxlKVswXTtcbiAgICAgIHJldHVybiBhbmFseXplZFR5cGUgJiYgYW5hbHl6ZWRUeXBlLmNhdGVnb3J5ID09PSAnVElNRScgJiYgYW5hbHl6ZWRUeXBlLmZvcm1hdCA9PT0gZi5mb3JtYXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGlmIChhbGxWYWxpZCkge1xuICAgIHJldHVybiB7cm93cywgZmllbGRzfTtcbiAgfVxuXG4gIC8vIGlmIGFueSBmaWVsZCBoYXMgbWlzc2luZyB0eXBlLCByZWNhbGN1bGF0ZSBpdCBmb3IgZXZlcnlvbmVcbiAgLy8gYmVjYXVzZSB3ZSBzaW1wbHkgbG9zdCBmYWl0aCBpbiBodW1hbml0eVxuICBjb25zdCBzYW1wbGVEYXRhID0gZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emUoe1xuICAgIGZpZWxkczogZmllbGRzLm1hcChmID0+IGYubmFtZSksXG4gICAgYWxsRGF0YTogcm93c1xuICB9KTtcbiAgY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xuICBjb25zdCBtZXRhID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlRGF0YSwgZmllbGRPcmRlcik7XG4gIGNvbnN0IHVwZGF0ZWRGaWVsZHMgPSBmaWVsZHMubWFwKChmLCBpKSA9PiAoe1xuICAgIC4uLmYsXG4gICAgdHlwZTogbWV0YVtpXS50eXBlLFxuICAgIGZvcm1hdDogbWV0YVtpXS5mb3JtYXQsXG4gICAgYW5hbHl6ZXJUeXBlOiBtZXRhW2ldLmFuYWx5emVyVHlwZVxuICB9KSk7XG5cbiAgcmV0dXJuIHtmaWVsZHM6IHVwZGF0ZWRGaWVsZHMsIHJvd3N9O1xufVxuXG5mdW5jdGlvbiBmaW5kTm9uRW1wdHlSb3dzQXRGaWVsZChyb3dzLCBmaWVsZElkeCwgdG90YWwpIHtcbiAgY29uc3Qgc2FtcGxlID0gW107XG4gIGxldCBpID0gMDtcbiAgd2hpbGUgKHNhbXBsZS5sZW5ndGggPCB0b3RhbCAmJiBpIDwgcm93cy5sZW5ndGgpIHtcbiAgICBpZiAobm90TnVsbG9yVW5kZWZpbmVkKHJvd3NbaV1bZmllbGRJZHhdKSkge1xuICAgICAgc2FtcGxlLnB1c2gocm93c1tpXSk7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuICByZXR1cm4gc2FtcGxlO1xufVxuLyoqXG4gKiBQcm9jZXNzIHNhdmVkIGtlcGxlci5nbCBqc29uIHRvIGJlIHBhc3MgdG8gW2BhZGREYXRhVG9NYXBgXSguLi9hY3Rpb25zL2FjdGlvbnMubWQjYWRkZGF0YXRvbWFwKS5cbiAqIFRoZSBqc29uIG9iamVjdCBzaG91bGQgY29udGFpbiBgZGF0YXNldHNgIGFuZCBgY29uZmlnYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByYXdEYXRhXG4gKiBAcGFyYW0ge0FycmF5fSByYXdEYXRhLmRhdGFzZXRzXG4gKiBAcGFyYW0ge09iamVjdH0gcmF3RGF0YS5jb25maWdcbiAqIEByZXR1cm5zIHtPYmplY3R9IGRhdGFzZXRzIGFuZCBjb25maWcgYHtkYXRhc2V0czoge30sIGNvbmZpZzoge319YFxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQge3Byb2Nlc3NLZXBsZXJnbEpTT059IGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbiAqXG4gKiBkaXNwYXRjaChhZGREYXRhVG9NYXAocHJvY2Vzc0tlcGxlcmdsSlNPTihrZXBsZXJHbEpzb24pKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzS2VwbGVyZ2xKU09OKHJhd0RhdGEpIHtcbiAgcmV0dXJuIHJhd0RhdGEgPyBLZXBsZXJHbFNjaGVtYS5sb2FkKHJhd0RhdGEuZGF0YXNldHMsIHJhd0RhdGEuY29uZmlnKSA6IG51bGw7XG59XG5cbi8qKlxuICogUGFyc2UgYSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgZGF0YXNldHMgc2F2ZWQgdXNpbmcga2VwbGVyLmdsIHNjaGVtYVxuICogQHBhcmFtIHtBcnJheSB8IEFycmF5PE9iamVjdD59IHJhd0RhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NLZXBsZXJnbERhdGFzZXQocmF3RGF0YSkge1xuICBpZiAoIXJhd0RhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBLZXBsZXJHbFNjaGVtYS5wYXJzZVNhdmVkRGF0YSh0b0FycmF5KHJhd0RhdGEpKTtcbiAgaWYgKCFyZXN1bHRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmF3RGF0YSkgPyByZXN1bHRzIDogcmVzdWx0c1swXTtcbn1cblxuZXhwb3J0IGNvbnN0IERBVEFTRVRfSEFORExFUlMgPSB7XG4gIFtEQVRBU0VUX0ZPUk1BVFMucm93XTogcHJvY2Vzc1Jvd09iamVjdCxcbiAgW0RBVEFTRVRfRk9STUFUUy5nZW9qc29uXTogcHJvY2Vzc0dlb2pzb24sXG4gIFtEQVRBU0VUX0ZPUk1BVFMuY3N2XTogcHJvY2Vzc0NzdkRhdGEsXG4gIFtEQVRBU0VUX0ZPUk1BVFMua2VwbGVyZ2xdOiBwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0XG59O1xuXG5leHBvcnQgY29uc3QgUHJvY2Vzc29ycyA9IHtcbiAgcHJvY2Vzc0dlb2pzb24sXG4gIHByb2Nlc3NDc3ZEYXRhLFxuICBwcm9jZXNzUm93T2JqZWN0LFxuICBwcm9jZXNzS2VwbGVyZ2xKU09OLFxuICBwcm9jZXNzS2VwbGVyZ2xEYXRhc2V0LFxuICBhbmFseXplclR5cGVUb0ZpZWxkVHlwZSxcbiAgZ2V0RmllbGRzRnJvbURhdGEsXG4gIHBhcnNlQ3N2Um93c0J5RmllbGRUeXBlLFxuICBmb3JtYXRDc3Zcbn07XG4iXX0=