"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _window = require("global/window");

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _dataProcessor = require("../processors/data-processor");

var _datasetSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// version v0
var fieldPropertiesV0 = {
  name: null,
  type: null
};
var fieldPropertiesV1 = {
  name: null,
  type: null,
  format: null,
  analyzerType: null
};

var FieldSchema = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(FieldSchema, _Schema);

  var _super = _createSuper(FieldSchema);

  function FieldSchema() {
    (0, _classCallCheck2["default"])(this, FieldSchema);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FieldSchema, [{
    key: "save",
    value: function save(fields) {
      var _this = this;

      return (0, _defineProperty2["default"])({}, this.key, fields.map(function (f) {
        return _this.savePropertiesOrApplySchema(f)[_this.key];
      }));
    }
  }, {
    key: "load",
    value: function load(fields) {
      return (0, _defineProperty2["default"])({}, this.key, fields);
    }
  }]);
  return FieldSchema;
}(_schema["default"]);

var propertiesV0 = {
  id: null,
  label: null,
  color: null,
  allData: null,
  fields: new FieldSchema({
    key: 'fields',
    version: _versions.VERSIONS.v0,
    properties: fieldPropertiesV0
  })
};

var propertiesV1 = _objectSpread(_objectSpread({}, propertiesV0), {}, {
  fields: new FieldSchema({
    key: 'fields',
    version: _versions.VERSIONS.v1,
    properties: fieldPropertiesV1
  })
});

var DatasetSchema = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DatasetSchema, _Schema2);

  var _super2 = _createSuper(DatasetSchema);

  function DatasetSchema() {
    var _this2;

    (0, _classCallCheck2["default"])(this, DatasetSchema);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "key", 'dataset');
    return _this2;
  }

  (0, _createClass2["default"])(DatasetSchema, [{
    key: "save",
    value: function save(dataset) {
      return this.savePropertiesOrApplySchema(dataset)[this.key];
    }
  }, {
    key: "load",
    value: function load(dataset) {
      var fields = dataset.fields,
          allData = dataset.allData;
      var updatedFields = fields; // recalculate field type
      // because we have updated type-analyzer
      // we need to add format to each field

      var needCalculateMeta = fields[0] && (!fields[0].hasOwnProperty('format') || !fields[0].hasOwnProperty('analyzerType'));

      if (needCalculateMeta) {
        var fieldOrder = fields.map(function (f) {
          return f.name;
        });
        var sampleData = (0, _dataProcessor.getSampleForTypeAnalyze)({
          fields: fieldOrder,
          allData: allData
        });
        var meta = (0, _dataProcessor.getFieldsFromData)(sampleData, fieldOrder);
        updatedFields = meta.map(function (f, i) {
          return _objectSpread(_objectSpread({}, (0, _lodash["default"])(meta[i], ['name', 'type', 'format'])), {}, {
            analyzerType: meta[i].analyzerType
          });
        });
        updatedFields.forEach(function (f, i) {
          if (fields[i].type !== f.type) {
            // if newly detected field type is different from saved type
            // we log it but won't update it, cause we don't want to break people's map
            _window.console.warn("detect ".concat(f.name, " type is now ").concat(f.type, " instead of ").concat(fields[i].type));
          }
        });
      } // get format of all fields


      return {
        data: {
          fields: updatedFields,
          rows: dataset.allData
        },
        info: (0, _lodash["default"])(dataset, ['id', 'label', 'color'])
      };
    }
  }]);
  return DatasetSchema;
}(_schema["default"]);

var datasetSchema = (_datasetSchema = {}, (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v0, new DatasetSchema({
  key: 'dataset',
  version: _versions.VERSIONS.v0,
  properties: propertiesV0
})), (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v1, new DatasetSchema({
  key: 'dataset',
  version: _versions.VERSIONS.v1,
  properties: propertiesV1
})), _datasetSchema);
var _default = datasetSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2RhdGFzZXQtc2NoZW1hLmpzIl0sIm5hbWVzIjpbImZpZWxkUHJvcGVydGllc1YwIiwibmFtZSIsInR5cGUiLCJmaWVsZFByb3BlcnRpZXNWMSIsImZvcm1hdCIsImFuYWx5emVyVHlwZSIsIkZpZWxkU2NoZW1hIiwiZmllbGRzIiwia2V5IiwibWFwIiwiZiIsInNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIlNjaGVtYSIsInByb3BlcnRpZXNWMCIsImlkIiwibGFiZWwiLCJjb2xvciIsImFsbERhdGEiLCJ2ZXJzaW9uIiwiVkVSU0lPTlMiLCJ2MCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVjEiLCJ2MSIsIkRhdGFzZXRTY2hlbWEiLCJkYXRhc2V0IiwidXBkYXRlZEZpZWxkcyIsIm5lZWRDYWxjdWxhdGVNZXRhIiwiaGFzT3duUHJvcGVydHkiLCJmaWVsZE9yZGVyIiwic2FtcGxlRGF0YSIsIm1ldGEiLCJpIiwiZm9yRWFjaCIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwiZGF0YSIsInJvd3MiLCJpbmZvIiwiZGF0YXNldFNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFO0FBRmtCLENBQTFCO0FBS0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJGLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFLElBRmtCO0FBR3hCRSxFQUFBQSxNQUFNLEVBQUUsSUFIZ0I7QUFJeEJDLEVBQUFBLFlBQVksRUFBRTtBQUpVLENBQTFCOztJQU9NQyxXOzs7Ozs7Ozs7Ozs7V0FDSixjQUFLQyxNQUFMLEVBQWE7QUFBQTs7QUFDWCxrREFDRyxLQUFLQyxHQURS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SUFBZCxrQkFBNkJ6QixDQUFDLENBQUNULElBQS9CLDBCQUFtRFMsQ0FBQyxDQUFDUixJQUFyRCx5QkFBd0VLLE1BQU0sQ0FBQ3lCLENBQUQsQ0FBTixDQUFVOUIsSUFBbEY7QUFDRDtBQUNGLFNBTkQ7QUFPRCxPQTdCVyxDQStCWjs7O0FBQ0EsYUFBTztBQUNMa0MsUUFBQUEsSUFBSSxFQUFFO0FBQUM3QixVQUFBQSxNQUFNLEVBQUVtQixhQUFUO0FBQXdCVyxVQUFBQSxJQUFJLEVBQUVaLE9BQU8sQ0FBQ1I7QUFBdEMsU0FERDtBQUVMcUIsUUFBQUEsSUFBSSxFQUFFLHdCQUFLYixPQUFMLEVBQWMsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixPQUFoQixDQUFkO0FBRkQsT0FBUDtBQUlEOzs7RUExQ3lCYixrQjs7QUE2QzVCLElBQU0yQixhQUFhLDBFQUNoQnBCLG1CQUFTQyxFQURPLEVBQ0YsSUFBSUksYUFBSixDQUFrQjtBQUMvQmhCLEVBQUFBLEdBQUcsRUFBRSxTQUQwQjtBQUUvQlUsRUFBQUEsT0FBTyxFQUFFQyxtQkFBU0MsRUFGYTtBQUcvQkMsRUFBQUEsVUFBVSxFQUFFUjtBQUhtQixDQUFsQixDQURFLG9EQU1oQk0sbUJBQVNJLEVBTk8sRUFNRixJQUFJQyxhQUFKLENBQWtCO0FBQy9CaEIsRUFBQUEsR0FBRyxFQUFFLFNBRDBCO0FBRS9CVSxFQUFBQSxPQUFPLEVBQUVDLG1CQUFTSSxFQUZhO0FBRy9CRixFQUFBQSxVQUFVLEVBQUVDO0FBSG1CLENBQWxCLENBTkUsa0JBQW5CO2VBYWVpQixhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuaW1wb3J0IHtjb25zb2xlIGFzIGdsb2JhbENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHtnZXRGaWVsZHNGcm9tRGF0YSwgZ2V0U2FtcGxlRm9yVHlwZUFuYWx5emV9IGZyb20gJ3Byb2Nlc3NvcnMvZGF0YS1wcm9jZXNzb3InO1xuXG4vLyB2ZXJzaW9uIHYwXG5jb25zdCBmaWVsZFByb3BlcnRpZXNWMCA9IHtcbiAgbmFtZTogbnVsbCxcbiAgdHlwZTogbnVsbFxufTtcblxuY29uc3QgZmllbGRQcm9wZXJ0aWVzVjEgPSB7XG4gIG5hbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIGZvcm1hdDogbnVsbCxcbiAgYW5hbHl6ZXJUeXBlOiBudWxsXG59O1xuXG5jbGFzcyBGaWVsZFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIHNhdmUoZmllbGRzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkcy5tYXAoZiA9PiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmKVt0aGlzLmtleV0pXG4gICAgfTtcbiAgfVxuICBsb2FkKGZpZWxkcykge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogZmllbGRzfTtcbiAgfVxufVxuXG5jb25zdCBwcm9wZXJ0aWVzVjAgPSB7XG4gIGlkOiBudWxsLFxuICBsYWJlbDogbnVsbCxcbiAgY29sb3I6IG51bGwsXG4gIGFsbERhdGE6IG51bGwsXG4gIGZpZWxkczogbmV3IEZpZWxkU2NoZW1hKHtcbiAgICBrZXk6ICdmaWVsZHMnLFxuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGZpZWxkUHJvcGVydGllc1YwXG4gIH0pXG59O1xuXG5jb25zdCBwcm9wZXJ0aWVzVjEgPSB7XG4gIC4uLnByb3BlcnRpZXNWMCxcbiAgZmllbGRzOiBuZXcgRmllbGRTY2hlbWEoe1xuICAgIGtleTogJ2ZpZWxkcycsXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogZmllbGRQcm9wZXJ0aWVzVjFcbiAgfSlcbn07XG5cbmNsYXNzIERhdGFzZXRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnZGF0YXNldCc7XG5cbiAgc2F2ZShkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGRhdGFzZXQpW3RoaXMua2V5XTtcbiAgfVxuICBsb2FkKGRhdGFzZXQpIHtcbiAgICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XG4gICAgbGV0IHVwZGF0ZWRGaWVsZHMgPSBmaWVsZHM7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBmaWVsZCB0eXBlXG4gICAgLy8gYmVjYXVzZSB3ZSBoYXZlIHVwZGF0ZWQgdHlwZS1hbmFseXplclxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGZvcm1hdCB0byBlYWNoIGZpZWxkXG4gICAgY29uc3QgbmVlZENhbGN1bGF0ZU1ldGEgPVxuICAgICAgZmllbGRzWzBdICYmXG4gICAgICAoIWZpZWxkc1swXS5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0JykgfHwgIWZpZWxkc1swXS5oYXNPd25Qcm9wZXJ0eSgnYW5hbHl6ZXJUeXBlJykpO1xuXG4gICAgaWYgKG5lZWRDYWxjdWxhdGVNZXRhKSB7XG4gICAgICBjb25zdCBmaWVsZE9yZGVyID0gZmllbGRzLm1hcChmID0+IGYubmFtZSk7XG5cbiAgICAgIGNvbnN0IHNhbXBsZURhdGEgPSBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZSh7ZmllbGRzOiBmaWVsZE9yZGVyLCBhbGxEYXRhfSk7XG4gICAgICBjb25zdCBtZXRhID0gZ2V0RmllbGRzRnJvbURhdGEoc2FtcGxlRGF0YSwgZmllbGRPcmRlcik7XG5cbiAgICAgIHVwZGF0ZWRGaWVsZHMgPSBtZXRhLm1hcCgoZiwgaSkgPT4gKHtcbiAgICAgICAgLi4ucGljayhtZXRhW2ldLCBbJ25hbWUnLCAndHlwZScsICdmb3JtYXQnXSksXG4gICAgICAgIGFuYWx5emVyVHlwZTogbWV0YVtpXS5hbmFseXplclR5cGVcbiAgICAgIH0pKTtcblxuICAgICAgdXBkYXRlZEZpZWxkcy5mb3JFYWNoKChmLCBpKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZHNbaV0udHlwZSAhPT0gZi50eXBlKSB7XG4gICAgICAgICAgLy8gaWYgbmV3bHkgZGV0ZWN0ZWQgZmllbGQgdHlwZSBpcyBkaWZmZXJlbnQgZnJvbSBzYXZlZCB0eXBlXG4gICAgICAgICAgLy8gd2UgbG9nIGl0IGJ1dCB3b24ndCB1cGRhdGUgaXQsIGNhdXNlIHdlIGRvbid0IHdhbnQgdG8gYnJlYWsgcGVvcGxlJ3MgbWFwXG4gICAgICAgICAgZ2xvYmFsQ29uc29sZS53YXJuKGBkZXRlY3QgJHtmLm5hbWV9IHR5cGUgaXMgbm93ICR7Zi50eXBlfSBpbnN0ZWFkIG9mICR7ZmllbGRzW2ldLnR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGdldCBmb3JtYXQgb2YgYWxsIGZpZWxkc1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7ZmllbGRzOiB1cGRhdGVkRmllbGRzLCByb3dzOiBkYXRhc2V0LmFsbERhdGF9LFxuICAgICAgaW5mbzogcGljayhkYXRhc2V0LCBbJ2lkJywgJ2xhYmVsJywgJ2NvbG9yJ10pXG4gICAgfTtcbiAgfVxufVxuXG5jb25zdCBkYXRhc2V0U2NoZW1hID0ge1xuICBbVkVSU0lPTlMudjBdOiBuZXcgRGF0YXNldFNjaGVtYSh7XG4gICAga2V5OiAnZGF0YXNldCcsXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YwXG4gIH0pLFxuICBbVkVSU0lPTlMudjFdOiBuZXcgRGF0YXNldFNjaGVtYSh7XG4gICAga2V5OiAnZGF0YXNldCcsXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YxXG4gIH0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhc2V0U2NoZW1hO1xuIl19