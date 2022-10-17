"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGeoJson = isGeoJson;
exports.isFeature = isFeature;
exports.isFeatureCollection = isFeatureCollection;
exports.isRowObject = isRowObject;
exports.isKeplerGlMap = isKeplerGlMap;
exports.makeProgressIterator = makeProgressIterator;
exports.readBatch = readBatch;
exports.readFileInBatches = readFileInBatches;
exports.processFileData = processFileData;
exports.filesToDataPayload = filesToDataPayload;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _awaitAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/awaitAsyncGenerator"));

var _wrapAsyncGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapAsyncGenerator"));

var _asyncIterator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncIterator"));

require("@loaders.gl/polyfills");

var _core = require("@loaders.gl/core");

var _json = require("@loaders.gl/json");

var _csv = require("@loaders.gl/csv");

var _dataProcessor = require("./data-processor");

var _utils = require("../utils/utils");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var BATCH_TYPE = {
  METADATA: 'metadata',
  PARTIAL_RESULT: 'partial-result',
  FINAL_RESULT: 'final-result'
};
var CSV_LOADER_OPTIONS = {
  batchSize: 4000,
  // Auto de tect number of rows per batch (network batch size)
  rowFormat: 'object',
  dynamicTyping: false // not working for now

};
var JSON_LOADER_OPTIONS = {
  // instruct loaders.gl on what json paths to stream
  jsonpaths: ['$', // JSON Row array
  '$.features', // GeoJSON
  '$.datasets' // KeplerGL JSON
  ]
};

function isGeoJson(json) {
  // json can be feature collection
  // or single feature
  return (0, _utils.isPlainObject)(json) && (isFeature(json) || isFeatureCollection(json));
}

function isFeature(json) {
  return json.type === 'Feature' && json.geometry;
}

function isFeatureCollection(json) {
  return json.type === 'FeatureCollection' && json.features;
}

function isRowObject(json) {
  return Array.isArray(json) && (0, _utils.isPlainObject)(json[0]);
}

function isKeplerGlMap(json) {
  return Boolean((0, _utils.isPlainObject)(json) && json.datasets && json.config && json.info && json.info.app === 'kepler.gl');
}

function makeProgressIterator(_x, _x2) {
  return _makeProgressIterator.apply(this, arguments);
} // eslint-disable-next-line complexity


function _makeProgressIterator() {
  _makeProgressIterator = (0, _wrapAsyncGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(asyncIterator, info) {
    var rowCount, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, batch, rowCountInBatch, percent, progress;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rowCount = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _context.prev = 3;
            _iterator = (0, _asyncIterator2["default"])(asyncIterator);

          case 5:
            _context.next = 7;
            return (0, _awaitAsyncGenerator2["default"])(_iterator.next());

          case 7:
            _step = _context.sent;
            _iteratorNormalCompletion = _step.done;
            _context.next = 11;
            return (0, _awaitAsyncGenerator2["default"])(_step.value);

          case 11:
            _value = _context.sent;

            if (_iteratorNormalCompletion) {
              _context.next = 23;
              break;
            }

            batch = _value;
            rowCountInBatch = batch.data && batch.data.length || 0;
            rowCount += rowCountInBatch;
            percent = Number.isFinite(batch.bytesUsed) ? batch.bytesUsed / info.size : null; // Update progress object

            progress = _objectSpread({
              rowCount: rowCount,
              rowCountInBatch: rowCountInBatch
            }, Number.isFinite(percent) ? {
              percent: percent
            } : {});
            _context.next = 20;
            return _objectSpread(_objectSpread({}, batch), {}, {
              progress: progress
            });

          case 20:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 23:
            _context.next = 29;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 29:
            _context.prev = 29;
            _context.prev = 30;

            if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
              _context.next = 34;
              break;
            }

            _context.next = 34;
            return (0, _awaitAsyncGenerator2["default"])(_iterator["return"]());

          case 34:
            _context.prev = 34;

            if (!_didIteratorError) {
              _context.next = 37;
              break;
            }

            throw _iteratorError;

          case 37:
            return _context.finish(34);

          case 38:
            return _context.finish(29);

          case 39:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 25, 29, 39], [30,, 34, 38]]);
  }));
  return _makeProgressIterator.apply(this, arguments);
}

function readBatch(_x3, _x4) {
  return _readBatch.apply(this, arguments);
}

function _readBatch() {
  _readBatch = (0, _wrapAsyncGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(asyncIterator, fileName) {
    var result, batches, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _value2, batch, streamingPath, i;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = null;
            batches = [];
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _context2.prev = 4;
            _iterator2 = (0, _asyncIterator2["default"])(asyncIterator);

          case 6:
            _context2.next = 8;
            return (0, _awaitAsyncGenerator2["default"])(_iterator2.next());

          case 8:
            _step2 = _context2.sent;
            _iteratorNormalCompletion2 = _step2.done;
            _context2.next = 12;
            return (0, _awaitAsyncGenerator2["default"])(_step2.value);

          case 12:
            _value2 = _context2.sent;

            if (_iteratorNormalCompletion2) {
              _context2.next = 21;
              break;
            }

            batch = _value2;

            // Last batch will have this special type and will provide all the root
            // properties of the parsed document.
            // Only json parse will have `FINAL_RESULT`
            if (batch.batchType === BATCH_TYPE.FINAL_RESULT) {
              if (batch.container) {
                result = _objectSpread({}, batch.container);
              } // Set the streamed data correctly is Batch json path is set
              // and the path streamed is not the top level object (jsonpath = '$')


              if (batch.jsonpath && batch.jsonpath.length > 1) {
                streamingPath = new _json._JSONPath(batch.jsonpath);
                streamingPath.setFieldAtPath(result, batches);
              } else if (batch.jsonpath && batch.jsonpath.length === 1) {
                // The streamed object is a ROW JSON-batch (jsonpath = '$')
                // row objects
                result = batches;
              }
            } else {
              for (i = 0; i < batch.data.length; i++) {
                batches.push(batch.data[i]);
              }
            }

            _context2.next = 18;
            return _objectSpread(_objectSpread(_objectSpread({}, batch), batch.schema ? {
              headers: Object.keys(batch.schema)
            } : {}), {}, {
              fileName: fileName,
              // if dataset is CSV, data is set to the raw batches
              data: result ? result : batches
            });

          case 18:
            _iteratorNormalCompletion2 = true;
            _context2.next = 6;
            break;

          case 21:
            _context2.next = 27;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](4);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t0;

          case 27:
            _context2.prev = 27;
            _context2.prev = 28;

            if (!(!_iteratorNormalCompletion2 && _iterator2["return"] != null)) {
              _context2.next = 32;
              break;
            }

            _context2.next = 32;
            return (0, _awaitAsyncGenerator2["default"])(_iterator2["return"]());

          case 32:
            _context2.prev = 32;

            if (!_didIteratorError2) {
              _context2.next = 35;
              break;
            }

            throw _iteratorError2;

          case 35:
            return _context2.finish(32);

          case 36:
            return _context2.finish(27);

          case 37:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 23, 27, 37], [28,, 32, 36]]);
  }));
  return _readBatch.apply(this, arguments);
}

function readFileInBatches(_x5) {
  return _readFileInBatches.apply(this, arguments);
}

function _readFileInBatches() {
  _readFileInBatches = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref) {
    var file, _ref$fileCache, fileCache, _ref$loaders, loaders, _ref$loadOptions, loadOptions, batchIterator, progressIterator;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            file = _ref.file, _ref$fileCache = _ref.fileCache, fileCache = _ref$fileCache === void 0 ? [] : _ref$fileCache, _ref$loaders = _ref.loaders, loaders = _ref$loaders === void 0 ? [] : _ref$loaders, _ref$loadOptions = _ref.loadOptions, loadOptions = _ref$loadOptions === void 0 ? {} : _ref$loadOptions;
            loaders = [_json.JSONLoader, _csv.CSVLoader].concat((0, _toConsumableArray2["default"])(loaders));
            loadOptions = _objectSpread({
              csv: CSV_LOADER_OPTIONS,
              json: JSON_LOADER_OPTIONS,
              metadata: true
            }, loadOptions);
            _context3.next = 5;
            return (0, _core.parseInBatches)(file, loaders, loadOptions);

          case 5:
            batchIterator = _context3.sent;
            progressIterator = makeProgressIterator(batchIterator, {
              size: file.size
            });
            return _context3.abrupt("return", readBatch(progressIterator, file.name));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _readFileInBatches.apply(this, arguments);
}

function processFileData(_ref2) {
  var content = _ref2.content,
      fileCache = _ref2.fileCache;
  return new Promise(function (resolve, reject) {
    var data = content.data;
    var format;
    var processor;

    if (isKeplerGlMap(data)) {
      format = _defaultSettings.DATASET_FORMATS.keplergl;
      processor = _dataProcessor.processKeplerglJSON;
    } else if (isRowObject(data)) {
      format = _defaultSettings.DATASET_FORMATS.row;
      processor = _dataProcessor.processRowObject;
    } else if (isGeoJson(data)) {
      format = _defaultSettings.DATASET_FORMATS.geojson;
      processor = _dataProcessor.processGeojson;
    }

    if (format && processor) {
      var result = processor(data);
      resolve([].concat((0, _toConsumableArray2["default"])(fileCache), [{
        data: result,
        info: {
          label: content.fileName,
          format: format
        }
      }]));
    }

    reject('Unknow File Format');
  });
}

function filesToDataPayload(fileCache) {
  // seperate out files which could be a single datasets. or a keplergl map json
  var collection = fileCache.reduce(function (accu, file) {
    var data = file.data,
        _file$info = file.info,
        info = _file$info === void 0 ? {} : _file$info;
    var format = info.format;

    if (format === _defaultSettings.DATASET_FORMATS.keplergl) {
      // if file contains a single kepler map dataset & config
      accu.keplerMaps.push(_objectSpread(_objectSpread({}, data), {}, {
        options: {
          centerMap: !(data.config && data.config.mapState)
        }
      }));
    } else if (_defaultSettings.DATASET_FORMATS[format]) {
      // if file contains only data
      var newDataset = {
        data: data,
        info: _objectSpread({
          id: info.id || (0, _utils.generateHashId)(4)
        }, info)
      };
      accu.datasets.push(newDataset);
    }

    return accu;
  }, {
    datasets: [],
    keplerMaps: []
  }); // add kepler map first with config
  // add datasets later in one add data call

  return collection.keplerMaps.concat({
    datasets: collection.datasets
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2ZpbGUtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJCQVRDSF9UWVBFIiwiTUVUQURBVEEiLCJQQVJUSUFMX1JFU1VMVCIsIkZJTkFMX1JFU1VMVCIsIkNTVl9MT0FERVJfT1BUSU9OUyIsImJhdGNoU2l6ZSIsInJvd0Zvcm1hdCIsImR5bmFtaWNUeXBpbmciLCJKU09OX0xPQURFUl9PUFRJT05TIiwianNvbnBhdGhzIiwiaXNHZW9Kc29uIiwianNvbiIsImlzRmVhdHVyZSIsImlzRmVhdHVyZUNvbGxlY3Rpb24iLCJ0eXBlIiwiZ2VvbWV0cnkiLCJmZWF0dXJlcyIsImlzUm93T2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiaXNLZXBsZXJHbE1hcCIsIkJvb2xlYW4iLCJkYXRhc2V0cyIsImNvbmZpZyIsImluZm8iLCJhcHAiLCJtYWtlUHJvZ3Jlc3NJdGVyYXRvciIsImFzeW5jSXRlcmF0b3IiLCJyb3dDb3VudCIsImJhdGNoIiwicm93Q291bnRJbkJhdGNoIiwiZGF0YSIsImxlbmd0aCIsInBlcmNlbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImJ5dGVzVXNlZCIsInNpemUiLCJwcm9ncmVzcyIsInJlYWRCYXRjaCIsImZpbGVOYW1lIiwicmVzdWx0IiwiYmF0Y2hlcyIsImJhdGNoVHlwZSIsImNvbnRhaW5lciIsImpzb25wYXRoIiwic3RyZWFtaW5nUGF0aCIsIl9KU09OUGF0aCIsInNldEZpZWxkQXRQYXRoIiwiaSIsInB1c2giLCJzY2hlbWEiLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsInJlYWRGaWxlSW5CYXRjaGVzIiwiZmlsZSIsImZpbGVDYWNoZSIsImxvYWRlcnMiLCJsb2FkT3B0aW9ucyIsIkpTT05Mb2FkZXIiLCJDU1ZMb2FkZXIiLCJjc3YiLCJtZXRhZGF0YSIsImJhdGNoSXRlcmF0b3IiLCJwcm9ncmVzc0l0ZXJhdG9yIiwibmFtZSIsInByb2Nlc3NGaWxlRGF0YSIsImNvbnRlbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZvcm1hdCIsInByb2Nlc3NvciIsIkRBVEFTRVRfRk9STUFUUyIsImtlcGxlcmdsIiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsInJvdyIsInByb2Nlc3NSb3dPYmplY3QiLCJnZW9qc29uIiwicHJvY2Vzc0dlb2pzb24iLCJsYWJlbCIsImZpbGVzVG9EYXRhUGF5bG9hZCIsImNvbGxlY3Rpb24iLCJyZWR1Y2UiLCJhY2N1Iiwia2VwbGVyTWFwcyIsIm9wdGlvbnMiLCJjZW50ZXJNYXAiLCJtYXBTdGF0ZSIsIm5ld0RhdGFzZXQiLCJpZCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsUUFBUSxFQUFFLFVBRE87QUFFakJDLEVBQUFBLGNBQWMsRUFBRSxnQkFGQztBQUdqQkMsRUFBQUEsWUFBWSxFQUFFO0FBSEcsQ0FBbkI7QUFNQSxJQUFNQyxrQkFBa0IsR0FBRztBQUN6QkMsRUFBQUEsU0FBUyxFQUFFLElBRGM7QUFDUjtBQUNqQkMsRUFBQUEsU0FBUyxFQUFFLFFBRmM7QUFHekJDLEVBQUFBLGFBQWEsRUFBRSxLQUhVLENBR0o7O0FBSEksQ0FBM0I7QUFNQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQjtBQUNBQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVCxHQURTLEVBQ0o7QUFDTCxjQUZTLEVBRUs7QUFDZCxjQUhTLENBR0k7QUFISjtBQUZlLENBQTVCOztBQVNPLFNBQVNDLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzlCO0FBQ0E7QUFDQSxTQUFPLDBCQUFjQSxJQUFkLE1BQXdCQyxTQUFTLENBQUNELElBQUQsQ0FBVCxJQUFtQkUsbUJBQW1CLENBQUNGLElBQUQsQ0FBOUQsQ0FBUDtBQUNEOztBQUVNLFNBQVNDLFNBQVQsQ0FBbUJELElBQW5CLEVBQXlCO0FBQzlC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LHFCQUEwQnlCLElBQTFCLENBQWFoQyxJQUFiO0FBQUEsUUFBYUEsSUFBYiwyQkFBb0IsRUFBcEI7QUFDQSxRQUFPZ0QsTUFBUCxHQUFpQmhELElBQWpCLENBQU9nRCxNQUFQOztBQUNBLFFBQUlBLE1BQU0sS0FBS0UsaUNBQWdCQyxRQUEvQixFQUF5QztBQUN2QztBQUNBVSxNQUFBQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JwQyxJQUFoQixpQ0FDS25CLElBREw7QUFFRXdELFFBQUFBLE9BQU8sRUFBRTtBQUNQQyxVQUFBQSxTQUFTLEVBQUUsRUFBRXpELElBQUksQ0FBQ1IsTUFBTCxJQUFlUSxJQUFJLENBQUNSLE1BQUwsQ0FBWWtFLFFBQTdCO0FBREo7QUFGWDtBQU1ELEtBUkQsTUFRTyxJQUFJZixpQ0FBZ0JGLE1BQWhCLENBQUosRUFBNkI7QUFDbEM7QUFDQSxVQUFNa0IsVUFBVSxHQUFHO0FBQ2pCM0QsUUFBQUEsSUFBSSxFQUFKQSxJQURpQjtBQUVqQlAsUUFBQUEsSUFBSTtBQUNGbUUsVUFBQUEsRUFBRSxFQUFFbkUsSUFBSSxDQUFDbUUsRUFBTCxJQUFXLDJCQUFlLENBQWY7QUFEYixXQUVDbkUsSUFGRDtBQUZhLE9BQW5CO0FBT0E2RCxNQUFBQSxJQUFJLENBQUMvRCxRQUFMLENBQWM0QixJQUFkLENBQW1Cd0MsVUFBbkI7QUFDRDs7QUFDRCxXQUFPTCxJQUFQO0FBQ0QsR0F4QmdCLEVBeUJqQjtBQUFDL0QsSUFBQUEsUUFBUSxFQUFFLEVBQVg7QUFBZWdFLElBQUFBLFVBQVUsRUFBRTtBQUEzQixHQXpCaUIsQ0FBbkIsQ0FGNEMsQ0E4QjVDO0FBQ0E7O0FBQ0EsU0FBT0gsVUFBVSxDQUFDRyxVQUFYLENBQXNCTSxNQUF0QixDQUE2QjtBQUFDdEUsSUFBQUEsUUFBUSxFQUFFNkQsVUFBVSxDQUFDN0Q7QUFBdEIsR0FBN0IsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0ICdAbG9hZGVycy5nbC9wb2x5ZmlsbHMnO1xuaW1wb3J0IHtwYXJzZUluQmF0Y2hlc30gZnJvbSAnQGxvYWRlcnMuZ2wvY29yZSc7XG5pbXBvcnQge0pTT05Mb2FkZXIsIF9KU09OUGF0aH0gZnJvbSAnQGxvYWRlcnMuZ2wvanNvbic7XG5pbXBvcnQge0NTVkxvYWRlcn0gZnJvbSAnQGxvYWRlcnMuZ2wvY3N2JztcbmltcG9ydCB7cHJvY2Vzc0dlb2pzb24sIHByb2Nlc3NLZXBsZXJnbEpTT04sIHByb2Nlc3NSb3dPYmplY3R9IGZyb20gJy4vZGF0YS1wcm9jZXNzb3InO1xuaW1wb3J0IHtpc1BsYWluT2JqZWN0LCBnZW5lcmF0ZUhhc2hJZH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtEQVRBU0VUX0ZPUk1BVFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgQkFUQ0hfVFlQRSA9IHtcbiAgTUVUQURBVEE6ICdtZXRhZGF0YScsXG4gIFBBUlRJQUxfUkVTVUxUOiAncGFydGlhbC1yZXN1bHQnLFxuICBGSU5BTF9SRVNVTFQ6ICdmaW5hbC1yZXN1bHQnXG59O1xuXG5jb25zdCBDU1ZfTE9BREVSX09QVElPTlMgPSB7XG4gIGJhdGNoU2l6ZTogNDAwMCwgLy8gQXV0byBkZSB0ZWN0IG51bWJlciBvZiByb3dzIHBlciBiYXRjaCAobmV0d29yayBiYXRjaCBzaXplKVxuICByb3dGb3JtYXQ6ICdvYmplY3QnLFxuICBkeW5hbWljVHlwaW5nOiBmYWxzZSAvLyBub3Qgd29ya2luZyBmb3Igbm93XG59O1xuXG5jb25zdCBKU09OX0xPQURFUl9PUFRJT05TID0ge1xuICAvLyBpbnN0cnVjdCBsb2FkZXJzLmdsIG9uIHdoYXQganNvbiBwYXRocyB0byBzdHJlYW1cbiAganNvbnBhdGhzOiBbXG4gICAgJyQnLCAvLyBKU09OIFJvdyBhcnJheVxuICAgICckLmZlYXR1cmVzJywgLy8gR2VvSlNPTlxuICAgICckLmRhdGFzZXRzJyAvLyBLZXBsZXJHTCBKU09OXG4gIF1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dlb0pzb24oanNvbikge1xuICAvLyBqc29uIGNhbiBiZSBmZWF0dXJlIGNvbGxlY3Rpb25cbiAgLy8gb3Igc2luZ2xlIGZlYXR1cmVcbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoanNvbikgJiYgKGlzRmVhdHVyZShqc29uKSB8fCBpc0ZlYXR1cmVDb2xsZWN0aW9uKGpzb24pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmVhdHVyZShqc29uKSB7XG4gIHJldHVybiBqc29uLnR5cGUgPT09ICdGZWF0dXJlJyAmJiBqc29uLmdlb21ldHJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGZWF0dXJlQ29sbGVjdGlvbihqc29uKSB7XG4gIHJldHVybiBqc29uLnR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicgJiYganNvbi5mZWF0dXJlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUm93T2JqZWN0KGpzb24pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoanNvbikgJiYgaXNQbGFpbk9iamVjdChqc29uWzBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzS2VwbGVyR2xNYXAoanNvbikge1xuICByZXR1cm4gQm9vbGVhbihcbiAgICBpc1BsYWluT2JqZWN0KGpzb24pICYmXG4gICAgICBqc29uLmRhdGFzZXRzICYmXG4gICAgICBqc29uLmNvbmZpZyAmJlxuICAgICAganNvbi5pbmZvICYmXG4gICAgICBqc29uLmluZm8uYXBwID09PSAna2VwbGVyLmdsJ1xuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24qIG1ha2VQcm9ncmVzc0l0ZXJhdG9yKGFzeW5jSXRlcmF0b3IsIGluZm8pIHtcbiAgbGV0IHJvd0NvdW50ID0gMDtcblxuICBmb3IgYXdhaXQgKGNvbnN0IGJhdGNoIG9mIGFzeW5jSXRlcmF0b3IpIHtcbiAgICBjb25zdCByb3dDb3VudEluQmF0Y2ggPSAoYmF0Y2guZGF0YSAmJiBiYXRjaC5kYXRhLmxlbmd0aCkgfHwgMDtcbiAgICByb3dDb3VudCArPSByb3dDb3VudEluQmF0Y2g7XG4gICAgY29uc3QgcGVyY2VudCA9IE51bWJlci5pc0Zpbml0ZShiYXRjaC5ieXRlc1VzZWQpID8gYmF0Y2guYnl0ZXNVc2VkIC8gaW5mby5zaXplIDogbnVsbDtcblxuICAgIC8vIFVwZGF0ZSBwcm9ncmVzcyBvYmplY3RcbiAgICBjb25zdCBwcm9ncmVzcyA9IHtcbiAgICAgIHJvd0NvdW50LFxuICAgICAgcm93Q291bnRJbkJhdGNoLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgLi4uKE51bWJlci5pc0Zpbml0ZShwZXJjZW50KSA/IHtwZXJjZW50fSA6IHt9KVxuICAgIH07XG5cbiAgICB5aWVsZCB7Li4uYmF0Y2gsIHByb2dyZXNzfTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uKiByZWFkQmF0Y2goYXN5bmNJdGVyYXRvciwgZmlsZU5hbWUpIHtcbiAgbGV0IHJlc3VsdCA9IG51bGw7XG4gIGNvbnN0IGJhdGNoZXMgPSBbXTtcblxuICBmb3IgYXdhaXQgKGNvbnN0IGJhdGNoIG9mIGFzeW5jSXRlcmF0b3IpIHtcbiAgICAvLyBMYXN0IGJhdGNoIHdpbGwgaGF2ZSB0aGlzIHNwZWNpYWwgdHlwZSBhbmQgd2lsbCBwcm92aWRlIGFsbCB0aGUgcm9vdFxuICAgIC8vIHByb3BlcnRpZXMgb2YgdGhlIHBhcnNlZCBkb2N1bWVudC5cbiAgICAvLyBPbmx5IGpzb24gcGFyc2Ugd2lsbCBoYXZlIGBGSU5BTF9SRVNVTFRgXG4gICAgaWYgKGJhdGNoLmJhdGNoVHlwZSA9PT0gQkFUQ0hfVFlQRS5GSU5BTF9SRVNVTFQpIHtcbiAgICAgIGlmIChiYXRjaC5jb250YWluZXIpIHtcbiAgICAgICAgcmVzdWx0ID0gey4uLmJhdGNoLmNvbnRhaW5lcn07XG4gICAgICB9XG4gICAgICAvLyBTZXQgdGhlIHN0cmVhbWVkIGRhdGEgY29ycmVjdGx5IGlzIEJhdGNoIGpzb24gcGF0aCBpcyBzZXRcbiAgICAgIC8vIGFuZCB0aGUgcGF0aCBzdHJlYW1lZCBpcyBub3QgdGhlIHRvcCBsZXZlbCBvYmplY3QgKGpzb25wYXRoID0gJyQnKVxuICAgICAgaWYgKGJhdGNoLmpzb25wYXRoICYmIGJhdGNoLmpzb25wYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtaW5nUGF0aCA9IG5ldyBfSlNPTlBhdGgoYmF0Y2guanNvbnBhdGgpO1xuICAgICAgICBzdHJlYW1pbmdQYXRoLnNldEZpZWxkQXRQYXRoKHJlc3VsdCwgYmF0Y2hlcyk7XG4gICAgICB9IGVsc2UgaWYgKGJhdGNoLmpzb25wYXRoICYmIGJhdGNoLmpzb25wYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBUaGUgc3RyZWFtZWQgb2JqZWN0IGlzIGEgUk9XIEpTT04tYmF0Y2ggKGpzb25wYXRoID0gJyQnKVxuICAgICAgICAvLyByb3cgb2JqZWN0c1xuICAgICAgICByZXN1bHQgPSBiYXRjaGVzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdGNoLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmF0Y2hlcy5wdXNoKGJhdGNoLmRhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpZWxkIHtcbiAgICAgIC4uLmJhdGNoLFxuICAgICAgLi4uKGJhdGNoLnNjaGVtYSA/IHtoZWFkZXJzOiBPYmplY3Qua2V5cyhiYXRjaC5zY2hlbWEpfSA6IHt9KSxcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgLy8gaWYgZGF0YXNldCBpcyBDU1YsIGRhdGEgaXMgc2V0IHRvIHRoZSByYXcgYmF0Y2hlc1xuICAgICAgZGF0YTogcmVzdWx0ID8gcmVzdWx0IDogYmF0Y2hlc1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlYWRGaWxlSW5CYXRjaGVzKHtmaWxlLCBmaWxlQ2FjaGUgPSBbXSwgbG9hZGVycyA9IFtdLCBsb2FkT3B0aW9ucyA9IHt9fSkge1xuICBsb2FkZXJzID0gW0pTT05Mb2FkZXIsIENTVkxvYWRlciwgLi4ubG9hZGVyc107XG4gIGxvYWRPcHRpb25zID0ge1xuICAgIGNzdjogQ1NWX0xPQURFUl9PUFRJT05TLFxuICAgIGpzb246IEpTT05fTE9BREVSX09QVElPTlMsXG4gICAgbWV0YWRhdGE6IHRydWUsXG4gICAgLi4ubG9hZE9wdGlvbnNcbiAgfTtcblxuICBjb25zdCBiYXRjaEl0ZXJhdG9yID0gYXdhaXQgcGFyc2VJbkJhdGNoZXMoZmlsZSwgbG9hZGVycywgbG9hZE9wdGlvbnMpO1xuICBjb25zdCBwcm9ncmVzc0l0ZXJhdG9yID0gbWFrZVByb2dyZXNzSXRlcmF0b3IoYmF0Y2hJdGVyYXRvciwge3NpemU6IGZpbGUuc2l6ZX0pO1xuXG4gIHJldHVybiByZWFkQmF0Y2gocHJvZ3Jlc3NJdGVyYXRvciwgZmlsZS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGaWxlRGF0YSh7Y29udGVudCwgZmlsZUNhY2hlfSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IGNvbnRlbnQ7XG5cbiAgICBsZXQgZm9ybWF0O1xuICAgIGxldCBwcm9jZXNzb3I7XG4gICAgaWYgKGlzS2VwbGVyR2xNYXAoZGF0YSkpIHtcbiAgICAgIGZvcm1hdCA9IERBVEFTRVRfRk9STUFUUy5rZXBsZXJnbDtcbiAgICAgIHByb2Nlc3NvciA9IHByb2Nlc3NLZXBsZXJnbEpTT047XG4gICAgfSBlbHNlIGlmIChpc1Jvd09iamVjdChkYXRhKSkge1xuICAgICAgZm9ybWF0ID0gREFUQVNFVF9GT1JNQVRTLnJvdztcbiAgICAgIHByb2Nlc3NvciA9IHByb2Nlc3NSb3dPYmplY3Q7XG4gICAgfSBlbHNlIGlmIChpc0dlb0pzb24oZGF0YSkpIHtcbiAgICAgIGZvcm1hdCA9IERBVEFTRVRfRk9STUFUUy5nZW9qc29uO1xuICAgICAgcHJvY2Vzc29yID0gcHJvY2Vzc0dlb2pzb247XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCAmJiBwcm9jZXNzb3IpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHByb2Nlc3NvcihkYXRhKTtcblxuICAgICAgcmVzb2x2ZShbXG4gICAgICAgIC4uLmZpbGVDYWNoZSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IHJlc3VsdCxcbiAgICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgICBsYWJlbDogY29udGVudC5maWxlTmFtZSxcbiAgICAgICAgICAgIGZvcm1hdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KCdVbmtub3cgRmlsZSBGb3JtYXQnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxlc1RvRGF0YVBheWxvYWQoZmlsZUNhY2hlKSB7XG4gIC8vIHNlcGVyYXRlIG91dCBmaWxlcyB3aGljaCBjb3VsZCBiZSBhIHNpbmdsZSBkYXRhc2V0cy4gb3IgYSBrZXBsZXJnbCBtYXAganNvblxuICBjb25zdCBjb2xsZWN0aW9uID0gZmlsZUNhY2hlLnJlZHVjZShcbiAgICAoYWNjdSwgZmlsZSkgPT4ge1xuICAgICAgY29uc3Qge2RhdGEsIGluZm8gPSB7fX0gPSBmaWxlO1xuICAgICAgY29uc3Qge2Zvcm1hdH0gPSBpbmZvO1xuICAgICAgaWYgKGZvcm1hdCA9PT0gREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsKSB7XG4gICAgICAgIC8vIGlmIGZpbGUgY29udGFpbnMgYSBzaW5nbGUga2VwbGVyIG1hcCBkYXRhc2V0ICYgY29uZmlnXG4gICAgICAgIGFjY3Uua2VwbGVyTWFwcy5wdXNoKHtcbiAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNlbnRlck1hcDogIShkYXRhLmNvbmZpZyAmJiBkYXRhLmNvbmZpZy5tYXBTdGF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChEQVRBU0VUX0ZPUk1BVFNbZm9ybWF0XSkge1xuICAgICAgICAvLyBpZiBmaWxlIGNvbnRhaW5zIG9ubHkgZGF0YVxuICAgICAgICBjb25zdCBuZXdEYXRhc2V0ID0ge1xuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgaWQ6IGluZm8uaWQgfHwgZ2VuZXJhdGVIYXNoSWQoNCksXG4gICAgICAgICAgICAuLi5pbmZvXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBhY2N1LmRhdGFzZXRzLnB1c2gobmV3RGF0YXNldCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9LFxuICAgIHtkYXRhc2V0czogW10sIGtlcGxlck1hcHM6IFtdfVxuICApO1xuXG4gIC8vIGFkZCBrZXBsZXIgbWFwIGZpcnN0IHdpdGggY29uZmlnXG4gIC8vIGFkZCBkYXRhc2V0cyBsYXRlciBpbiBvbmUgYWRkIGRhdGEgY2FsbFxuICByZXR1cm4gY29sbGVjdGlvbi5rZXBsZXJNYXBzLmNvbmNhdCh7ZGF0YXNldHM6IGNvbGxlY3Rpb24uZGF0YXNldHN9KTtcbn1cbiJdfQ==