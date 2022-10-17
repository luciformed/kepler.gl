"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateSchema = exports.visStateSchemaV1 = exports.visStateSchemaV0 = exports.propertiesV1 = exports.propertiesV0 = exports.filterPropsV1 = exports.SplitMapsSchema = exports.DimensionFieldSchema = exports.filterPropsV0 = exports.InteractionSchemaV1 = exports.FilterSchemaV0 = exports.LayerSchemaV0 = exports.layerPropsV1 = exports.layerPropsV0 = exports.dimensionPropsV0 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _versions = require("./versions");

var _filterUtils = require("../utils/filter-utils");

var _layerFactory = require("../layers/layer-factory");

var _schema = _interopRequireDefault(require("./schema"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _dataUtils = require("../utils/data-utils");

var _visStateSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * V0 Schema
 */
var dimensionPropsV0 = ['name', 'type']; // in v0 geojson there is only sizeField
// in v1 geojson
// stroke base on -> sizeField
// height based on -> heightField
// radius based on -> radiusField
// here we make our wiredst guess on which channel sizeField belongs to

exports.dimensionPropsV0 = dimensionPropsV0;

function geojsonSizeFieldV0ToV1(config) {
  var defaultRaiuds = 10;
  var defaultRadiusRange = [0, 50]; // if extruded, sizeField is most likely used for height

  if (config.visConfig.extruded) {
    return 'heightField';
  } // if show stroke enabled, sizeField is most likely used for stroke


  if (config.visConfig.stroked) {
    return 'sizeField';
  } // if radius changed, or radius Range Changed, sizeField is most likely used for radius
  // this is the most unreliable guess, that's why we put it in the end


  if (config.visConfig.radius !== defaultRaiuds || config.visConfig.radiusRange.some(function (d, i) {
    return d !== defaultRadiusRange[i];
  })) {
    return 'radiusField';
  }

  return 'sizeField';
} // convert v0 to v1 layer config


var DimensionFieldSchemaV0 = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(DimensionFieldSchemaV0, _Schema);

  var _super = _createSuper(DimensionFieldSchemaV0);

  function DimensionFieldSchemaV0() {
    var _this;

    (0, _classCallCheck2["default"])(this, DimensionFieldSchemaV0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v0);
    return _this;
  }

  (0, _createClass2["default"])(DimensionFieldSchemaV0, [{
    key: "save",
    value: function save(field) {
      // should not be called anymore
      return (0, _defineProperty2["default"])({}, this.key, field !== null ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field, parents, accumulated) {
      var _parents$slice = parents.slice(-1),
          _parents$slice2 = (0, _slicedToArray2["default"])(_parents$slice, 1),
          config = _parents$slice2[0];

      var fieldName = this.key;

      if (config.type === 'geojson' && this.key === 'sizeField' && field) {
        fieldName = geojsonSizeFieldV0ToV1(config);
      } // fold into visualChannels to be load by VisualChannelSchemaV1


      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, fieldName, field))
      };
    }
  }]);
  return DimensionFieldSchemaV0;
}(_schema["default"]);

var DimensionScaleSchemaV0 = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DimensionScaleSchemaV0, _Schema2);

  var _super2 = _createSuper(DimensionScaleSchemaV0);

  function DimensionScaleSchemaV0() {
    var _this2;

    (0, _classCallCheck2["default"])(this, DimensionScaleSchemaV0);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "version", _versions.VERSIONS.v0);
    return _this2;
  }

  (0, _createClass2["default"])(DimensionScaleSchemaV0, [{
    key: "save",
    value: function save(scale) {
      return (0, _defineProperty2["default"])({}, this.key, scale);
    }
  }, {
    key: "load",
    value: function load(scale, parents, accumulated) {
      var _parents$slice3 = parents.slice(-1),
          _parents$slice4 = (0, _slicedToArray2["default"])(_parents$slice3, 1),
          config = _parents$slice4[0]; // fold into visualChannels to be load by VisualChannelSchemaV1


      if (this.key === 'sizeScale' && config.type === 'geojson') {
        // sizeScale now split into radiusScale, heightScale
        // no user customization, just use default
        return {};
      }

      return {
        visualChannels: _objectSpread(_objectSpread({}, accumulated.visualChannels || {}), {}, (0, _defineProperty2["default"])({}, this.key, scale))
      };
    }
  }]);
  return DimensionScaleSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config


var LayerConfigSchemaV0 = /*#__PURE__*/function (_Schema3) {
  (0, _inherits2["default"])(LayerConfigSchemaV0, _Schema3);

  var _super3 = _createSuper(LayerConfigSchemaV0);

  function LayerConfigSchemaV0() {
    var _this3;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaV0);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "version", _versions.VERSIONS.v0);
    return _this3;
  }

  (0, _createClass2["default"])(LayerConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
      };
    }
  }]);
  return LayerConfigSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer columns
// only return column value for each column


var LayerColumnsSchemaV0 = /*#__PURE__*/function (_Schema4) {
  (0, _inherits2["default"])(LayerColumnsSchemaV0, _Schema4);

  var _super4 = _createSuper(LayerColumnsSchemaV0);

  function LayerColumnsSchemaV0() {
    var _this4;

    (0, _classCallCheck2["default"])(this, LayerColumnsSchemaV0);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _super4.call.apply(_super4, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "version", _versions.VERSIONS.v0);
    return _this4;
  }

  (0, _createClass2["default"])(LayerColumnsSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key, flatten columns
      return {
        config: _objectSpread(_objectSpread({}, accumulated.config || {}), {}, {
          columns: Object.keys(saved).reduce(function (accu, key) {
            return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, saved[key].value));
          }, {})
        })
      };
    }
  }]);
  return LayerColumnsSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config.visConfig


var LayerConfigToVisConfigSchemaV0 = /*#__PURE__*/function (_Schema5) {
  (0, _inherits2["default"])(LayerConfigToVisConfigSchemaV0, _Schema5);

  var _super5 = _createSuper(LayerConfigToVisConfigSchemaV0);

  function LayerConfigToVisConfigSchemaV0() {
    var _this5;

    (0, _classCallCheck2["default"])(this, LayerConfigToVisConfigSchemaV0);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = _super5.call.apply(_super5, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "version", _versions.VERSIONS.v0);
    return _this5;
  }

  (0, _createClass2["default"])(LayerConfigToVisConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.visConfig
      var accumulatedConfig = accumulated.config || {};
      return {
        config: _objectSpread(_objectSpread({}, accumulatedConfig), {}, {
          visConfig: _objectSpread(_objectSpread({}, accumulatedConfig.visConfig || {}), {}, (0, _defineProperty2["default"])({}, this.key, saved))
        })
      };
    }
  }]);
  return LayerConfigToVisConfigSchemaV0;
}(_schema["default"]);

var LayerVisConfigSchemaV0 = /*#__PURE__*/function (_Schema6) {
  (0, _inherits2["default"])(LayerVisConfigSchemaV0, _Schema6);

  var _super6 = _createSuper(LayerVisConfigSchemaV0);

  function LayerVisConfigSchemaV0() {
    var _this6;

    (0, _classCallCheck2["default"])(this, LayerVisConfigSchemaV0);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = _super6.call.apply(_super6, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "version", _versions.VERSIONS.v0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "key", 'visConfig');
    return _this6;
  }

  (0, _createClass2["default"])(LayerVisConfigSchemaV0, [{
    key: "load",
    value: function load(visConfig, parents, accumulator) {
      var _parents$slice5 = parents.slice(-1),
          _parents$slice6 = (0, _slicedToArray2["default"])(_parents$slice5, 1),
          config = _parents$slice6[0];

      var rename = {
        geojson: {
          extruded: 'enable3d',
          elevationRange: 'heightRange'
        }
      };

      if (config.type in rename) {
        var propToRename = rename[config.type];
        return {
          config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
            visConfig: Object.keys(visConfig).reduce(function (accu, key) {
              return _objectSpread(_objectSpread({}, accu), propToRename[key] ? (0, _defineProperty2["default"])({}, propToRename[key], visConfig[key]) : (0, _defineProperty2["default"])({}, key, visConfig[key]));
            }, {})
          })
        };
      }

      return {
        config: _objectSpread(_objectSpread({}, accumulator.config || {}), {}, {
          visConfig: visConfig
        })
      };
    }
  }]);
  return LayerVisConfigSchemaV0;
}(_schema["default"]);

var LayerConfigSchemaDeleteV0 = /*#__PURE__*/function (_Schema7) {
  (0, _inherits2["default"])(LayerConfigSchemaDeleteV0, _Schema7);

  var _super7 = _createSuper(LayerConfigSchemaDeleteV0);

  function LayerConfigSchemaDeleteV0() {
    var _this7;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaDeleteV0);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this7 = _super7.call.apply(_super7, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "version", _versions.VERSIONS.v0);
    return _this7;
  }

  (0, _createClass2["default"])(LayerConfigSchemaDeleteV0, [{
    key: "load",
    value: function load(value) {
      return {};
    }
  }]);
  return LayerConfigSchemaDeleteV0;
}(_schema["default"]);
/**
 * V0 -> V1 Changes
 * - layer is now a class
 * - config saved in a config object
 * - id, type, isAggregated is outside layer.config
 * - visualChannels is outside config, it defines available visual channel and
 *   property names for field, scale, domain and range of each visual chanel.
 * - enable3d, colorAggregation and sizeAggregation are moved into visConfig
 * - GeojsonLayer - added height, radius specific properties
 */


var layerPropsV0 = {
  id: null,
  type: null,
  // move into layer.config
  dataId: new LayerConfigSchemaV0({
    key: 'dataId'
  }),
  label: new LayerConfigSchemaV0({
    key: 'label'
  }),
  color: new LayerConfigSchemaV0({
    key: 'color'
  }),
  isVisible: new LayerConfigSchemaV0({
    key: 'isVisible'
  }),
  hidden: new LayerConfigSchemaV0({
    key: 'hidden'
  }),
  // convert visConfig
  visConfig: new LayerVisConfigSchemaV0({
    key: 'visConfig'
  }),
  // move into layer.config
  // flatten
  columns: new LayerColumnsSchemaV0(),
  // save into visualChannels
  colorField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'colorField'
  }),
  colorScale: new DimensionScaleSchemaV0({
    key: 'colorScale'
  }),
  sizeField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'sizeField'
  }),
  sizeScale: new DimensionScaleSchemaV0({
    key: 'sizeScale'
  }),
  // move into config.visConfig
  enable3d: new LayerConfigToVisConfigSchemaV0({
    key: 'enable3d'
  }),
  colorAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'colorAggregation'
  }),
  sizeAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'sizeAggregation'
  }),
  // delete
  isAggregated: new LayerConfigSchemaDeleteV0()
};
/**
 * V1 Schema
 */

exports.layerPropsV0 = layerPropsV0;

var ColumnSchemaV1 = /*#__PURE__*/function (_Schema8) {
  (0, _inherits2["default"])(ColumnSchemaV1, _Schema8);

  var _super8 = _createSuper(ColumnSchemaV1);

  function ColumnSchemaV1() {
    (0, _classCallCheck2["default"])(this, ColumnSchemaV1);
    return _super8.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColumnSchemaV1, [{
    key: "save",
    value: function save(columns, state) {
      // starting from v1, only save column value
      // fieldIdx will be calculated during merge
      return (0, _defineProperty2["default"])({}, this.key, Object.keys(columns).reduce(function (accu, ckey) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, ckey, columns[ckey].value));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(columns) {
      return {
        columns: columns
      };
    }
  }]);
  return ColumnSchemaV1;
}(_schema["default"]);

var TextLabelSchemaV1 = /*#__PURE__*/function (_Schema9) {
  (0, _inherits2["default"])(TextLabelSchemaV1, _Schema9);

  var _super9 = _createSuper(TextLabelSchemaV1);

  function TextLabelSchemaV1() {
    (0, _classCallCheck2["default"])(this, TextLabelSchemaV1);
    return _super9.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLabelSchemaV1, [{
    key: "save",
    value: function save(textLabel) {
      return (0, _defineProperty2["default"])({}, this.key, textLabel.map(function (tl) {
        return _objectSpread(_objectSpread({}, tl), {}, {
          field: tl.field ? (0, _lodash["default"])(tl.field, ['name', 'type']) : null
        });
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: Array.isArray(textLabel) ? textLabel : [textLabel]
      };
    }
  }]);
  return TextLabelSchemaV1;
}(_schema["default"]);

var visualChannelModificationV1 = {
  geojson: function geojson(vc, parents, accumulator) {
    var _parents$slice7 = parents.slice(-1),
        _parents$slice8 = (0, _slicedToArray2["default"])(_parents$slice7, 1),
        layer = _parents$slice8[0];

    var isOld = !vc.hasOwnProperty('strokeColorField'); // make our best guess if this geojson layer contains point

    var isPoint = vc.radiusField || layer.config.visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld && !isPoint && layer.config.visConfig.stroked) {
      // if stroked is true, copy color config to stroke color config
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale
      };
    }

    return {};
  }
};
/**
 * V1: save [field]: {name, type}, [scale]: '' for each channel
 */

var VisualChannelSchemaV1 = /*#__PURE__*/function (_Schema10) {
  (0, _inherits2["default"])(VisualChannelSchemaV1, _Schema10);

  var _super10 = _createSuper(VisualChannelSchemaV1);

  function VisualChannelSchemaV1() {
    (0, _classCallCheck2["default"])(this, VisualChannelSchemaV1);
    return _super10.apply(this, arguments);
  }

  (0, _createClass2["default"])(VisualChannelSchemaV1, [{
    key: "save",
    value: function save(visualChannels, parents) {
      // only save field and scale of each channel
      var _parents$slice9 = parents.slice(-1),
          _parents$slice10 = (0, _slicedToArray2["default"])(_parents$slice9, 1),
          layer = _parents$slice10[0];

      return (0, _defineProperty2["default"])({}, this.key, Object.keys(visualChannels).reduce( //  save channel to null if didn't select any field
      function (accu, key) {
        var _objectSpread8;

        return _objectSpread(_objectSpread({}, accu), {}, (_objectSpread8 = {}, (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].field, layer.config[visualChannels[key].field] ? (0, _lodash["default"])(layer.config[visualChannels[key].field], ['name', 'type']) : null), (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].scale, layer.config[visualChannels[key].scale]), _objectSpread8));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(vc, parents, accumulator) {
      // fold channels into config
      var _parents$slice11 = parents.slice(-1),
          _parents$slice12 = (0, _slicedToArray2["default"])(_parents$slice11, 1),
          layer = _parents$slice12[0];

      var modified = visualChannelModificationV1[layer.type] ? visualChannelModificationV1[layer.type](vc, parents, accumulator) : {};
      return _objectSpread(_objectSpread({}, accumulator), {}, {
        config: _objectSpread(_objectSpread(_objectSpread({}, accumulator.config || {}), vc), modified)
      });
    }
  }]);
  return VisualChannelSchemaV1;
}(_schema["default"]);

var visConfigModificationV1 = {
  point: function point(visConfig, parents, accumulated) {
    var modified = {};

    var _parents$slice13 = parents.slice(-2, -1),
        _parents$slice14 = (0, _slicedToArray2["default"])(_parents$slice13, 1),
        layer = _parents$slice14[0];

    var isOld = !visConfig.hasOwnProperty('filled') && !visConfig.strokeColor && !visConfig.strokeColorRange;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (visConfig.outline) {
        // point layer now supports both outline and fill
        // for older schema where filled has not been added to point layer
        // set it to false
        modified.filled = false;
      }
    }

    return modified;
  },
  geojson: function geojson(visConfig, parents, accumulated) {
    // is points?
    var modified = {};

    var _parents$slice15 = parents.slice(-2, -1),
        _parents$slice16 = (0, _slicedToArray2["default"])(_parents$slice15, 1),
        layer = _parents$slice16[0];

    var isOld = layer.visualChannels && !layer.visualChannels.hasOwnProperty('strokeColorField') && !visConfig.strokeColor && !visConfig.strokeColorRange; // make our best guess if this geojson layer contains point

    var isPoint = layer.visualChannels && layer.visualChannels.radiusField || visConfig && visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (isPoint) {
        // if is point, set stroke to false
        modified.filled = true;
        modified.stroked = false;
      }
    }

    return modified;
  }
};

var VisConfigSchemaV1 = /*#__PURE__*/function (_Schema11) {
  (0, _inherits2["default"])(VisConfigSchemaV1, _Schema11);

  var _super11 = _createSuper(VisConfigSchemaV1);

  function VisConfigSchemaV1() {
    var _this8;

    (0, _classCallCheck2["default"])(this, VisConfigSchemaV1);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this8 = _super11.call.apply(_super11, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "key", 'visConfig');
    return _this8;
  }

  (0, _createClass2["default"])(VisConfigSchemaV1, [{
    key: "load",
    value: function load(visConfig, parents, accumulated) {
      var _parents$slice17 = parents.slice(-2, -1),
          _parents$slice18 = (0, _slicedToArray2["default"])(_parents$slice17, 1),
          layer = _parents$slice18[0];

      var modified = visConfigModificationV1[layer.type] ? visConfigModificationV1[layer.type](visConfig, parents, accumulated) : {};
      return {
        visConfig: _objectSpread(_objectSpread({}, visConfig), modified)
      };
    }
  }]);
  return VisConfigSchemaV1;
}(_schema["default"]);

var layerPropsV1 = {
  id: null,
  type: null,
  config: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    key: 'config',
    properties: {
      dataId: null,
      label: null,
      color: null,
      columns: new ColumnSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'columns'
      }),
      isVisible: null,
      visConfig: new VisConfigSchemaV1({
        version: _versions.VERSIONS.v1
      }),
      hidden: null,
      textLabel: new TextLabelSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'textLabel'
      })
    }
  }),
  visualChannels: new VisualChannelSchemaV1({
    version: _versions.VERSIONS.v1,
    key: 'visualChannels'
  })
};
exports.layerPropsV1 = layerPropsV1;

var LayerSchemaV0 = /*#__PURE__*/function (_Schema12) {
  (0, _inherits2["default"])(LayerSchemaV0, _Schema12);

  var _super12 = _createSuper(LayerSchemaV0);

  function LayerSchemaV0() {
    var _this9;

    (0, _classCallCheck2["default"])(this, LayerSchemaV0);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this9 = _super12.call.apply(_super12, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "key", 'layers');
    return _this9;
  }

  (0, _createClass2["default"])(LayerSchemaV0, [{
    key: "save",
    value: function save(layers, parents) {
      var _this10 = this;

      var _parents$slice19 = parents.slice(-1),
          _parents$slice20 = (0, _slicedToArray2["default"])(_parents$slice19, 1),
          visState = _parents$slice20[0];

      return (0, _defineProperty2["default"])({}, this.key, visState.layerOrder.reduce(function (saved, index) {
        // save layers according to their rendering order
        var layer = layers[index];

        if (layer.isValidToSave()) {
          saved.push(_this10.savePropertiesOrApplySchema(layer).layers);
        }

        return saved;
      }, []));
    }
  }, {
    key: "load",
    value: function load(layers) {
      var _this11 = this;

      return (0, _defineProperty2["default"])({}, this.key, layers.map(function (layer) {
        return _this11.loadPropertiesOrApplySchema(layer, layers).layers;
      }));
    }
  }]);
  return LayerSchemaV0;
}(_schema["default"]);

exports.LayerSchemaV0 = LayerSchemaV0;

var FilterSchemaV0 = /*#__PURE__*/function (_Schema13) {
  (0, _inherits2["default"])(FilterSchemaV0, _Schema13);

  var _super13 = _createSuper(FilterSchemaV0);

  function FilterSchemaV0() {
    var _this12;

    (0, _classCallCheck2["default"])(this, FilterSchemaV0);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this12 = _super13.call.apply(_super13, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "key", 'filters');
    return _this12;
  }

  (0, _createClass2["default"])(FilterSchemaV0, [{
    key: "save",
    value: function save(filters) {
      var _this13 = this;

      return {
        filters: filters.filter(_filterUtils.isValidFilterValue).map(function (filter) {
          return _this13.savePropertiesOrApplySchema(filter).filters;
        })
      };
    }
  }, {
    key: "load",
    value: function load(filters) {
      return {
        filters: filters
      };
    }
  }]);
  return FilterSchemaV0;
}(_schema["default"]);

exports.FilterSchemaV0 = FilterSchemaV0;
var interactionPropsV0 = ['tooltip', 'brush'];

var InteractionSchemaV0 = /*#__PURE__*/function (_Schema14) {
  (0, _inherits2["default"])(InteractionSchemaV0, _Schema14);

  var _super14 = _createSuper(InteractionSchemaV0);

  function InteractionSchemaV0() {
    var _this14;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV0);

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    _this14 = _super14.call.apply(_super14, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "key", 'interactionConfig');
    return _this14;
  }

  (0, _createClass2["default"])(InteractionSchemaV0, [{
    key: "save",
    value: function save(interactionConfig) {
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), interactionConfig[key].enabled ? (0, _defineProperty2["default"])({}, key, interactionConfig[key].config) : {});
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      // convert v0 -> v1
      // return enabled: false if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key] || {}), {}, {
          enabled: Boolean(interactionConfig[key])
        })));
      }, {})) : {};
    }
  }]);
  return InteractionSchemaV0;
}(_schema["default"]);

var interactionPropsV1 = [].concat(interactionPropsV0, ['geocoder', 'coordinate']);

var InteractionSchemaV1 = /*#__PURE__*/function (_Schema15) {
  (0, _inherits2["default"])(InteractionSchemaV1, _Schema15);

  var _super15 = _createSuper(InteractionSchemaV1);

  function InteractionSchemaV1() {
    var _this15;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV1);

    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    _this15 = _super15.call.apply(_super15, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this15), "key", 'interactionConfig');
    return _this15;
  }

  (0, _createClass2["default"])(InteractionSchemaV1, [{
    key: "save",
    value: function save(interactionConfig) {
      // save config even if disabled,
      return Array.isArray(this.properties) ? (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, interactionConfig[key].config), {}, {
          enabled: interactionConfig[key].enabled
        })));
      }, {})) : {};
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      var _this16 = this;

      var modifiedConfig = interactionConfig;
      Object.keys(interactionConfig).forEach(function (configType) {
        if (configType === 'tooltip') {
          var fieldsToShow = modifiedConfig[configType].fieldsToShow;

          if (!(0, _dataUtils.notNullorUndefined)(fieldsToShow)) {
            return (0, _defineProperty2["default"])({}, _this16.key, modifiedConfig);
          }

          Object.keys(fieldsToShow).forEach(function (key) {
            fieldsToShow[key] = fieldsToShow[key].map(function (fieldData) {
              if (!fieldData.name) {
                return {
                  name: fieldData,
                  format: null
                };
              }

              return fieldData;
            });
          });
        }

        return;
      });
      return (0, _defineProperty2["default"])({}, this.key, modifiedConfig);
    }
  }]);
  return InteractionSchemaV1;
}(_schema["default"]);

exports.InteractionSchemaV1 = InteractionSchemaV1;
var filterPropsV0 = {
  dataId: null,
  id: null,
  name: null,
  type: null,
  value: null,
  enlarged: null
};
exports.filterPropsV0 = filterPropsV0;

var DimensionFieldSchema = /*#__PURE__*/function (_Schema16) {
  (0, _inherits2["default"])(DimensionFieldSchema, _Schema16);

  var _super16 = _createSuper(DimensionFieldSchema);

  function DimensionFieldSchema() {
    (0, _classCallCheck2["default"])(this, DimensionFieldSchema);
    return _super16.apply(this, arguments);
  }

  (0, _createClass2["default"])(DimensionFieldSchema, [{
    key: "save",
    value: function save(field) {
      return (0, _defineProperty2["default"])({}, this.key, field ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field) {
      return (0, _defineProperty2["default"])({}, this.key, field);
    }
  }]);
  return DimensionFieldSchema;
}(_schema["default"]);

exports.DimensionFieldSchema = DimensionFieldSchema;

var SplitMapsSchema = /*#__PURE__*/function (_Schema17) {
  (0, _inherits2["default"])(SplitMapsSchema, _Schema17);

  var _super17 = _createSuper(SplitMapsSchema);

  function SplitMapsSchema() {
    (0, _classCallCheck2["default"])(this, SplitMapsSchema);
    return _super17.apply(this, arguments);
  }

  (0, _createClass2["default"])(SplitMapsSchema, [{
    key: "convertLayerSettings",
    value: function convertLayerSettings(accu, _ref18) {
      var _ref19 = (0, _slicedToArray2["default"])(_ref18, 2),
          key = _ref19[0],
          value = _ref19[1];

      if (typeof value === 'boolean') {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, value));
      } else if (value && (0, _typeof2["default"])(value) === 'object' && value.isAvailable) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, Boolean(value.isVisible)));
      }

      return accu;
    }
  }, {
    key: "load",
    value: function load(splitMaps) {
      var _this17 = this;

      // previous splitMaps Schema {layers: {layerId: {isVisible, isAvailable}}}
      if (!Array.isArray(splitMaps) || !splitMaps.length) {
        return {
          splitMaps: []
        };
      }

      return {
        splitMaps: splitMaps.map(function (settings) {
          return _objectSpread(_objectSpread({}, settings), {}, {
            layers: Object.entries(settings.layers || {}).reduce(_this17.convertLayerSettings, {})
          });
        })
      };
    }
  }]);
  return SplitMapsSchema;
}(_schema["default"]);

exports.SplitMapsSchema = SplitMapsSchema;

var filterPropsV1 = _objectSpread(_objectSpread({}, filterPropsV0), {}, {
  plotType: null,
  animationWindow: null,
  yAxis: new DimensionFieldSchema({
    version: _versions.VERSIONS.v1,
    key: 'yAxis',
    properties: {
      name: null,
      type: null
    }
  }),
  // polygon filter properties
  layerId: null,
  speed: null
});

exports.filterPropsV1 = filterPropsV1;
var propertiesV0 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: filterPropsV0
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: layerPropsV0
  }),
  interactionConfig: new InteractionSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: interactionPropsV0
  }),
  layerBlending: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: filterPropsV1
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: layerPropsV1
  }),
  interactionConfig: new InteractionSchemaV1({
    version: _versions.VERSIONS.v1,
    properties: interactionPropsV1
  }),
  layerBlending: null,
  splitMaps: new SplitMapsSchema({
    key: 'splitMaps',
    version: _versions.VERSIONS.v1
  }),
  animationConfig: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    properties: {
      currentTime: null,
      speed: null
    },
    key: 'animationConfig'
  })
};
exports.propertiesV1 = propertiesV1;
var visStateSchemaV0 = new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'visState'
});
exports.visStateSchemaV0 = visStateSchemaV0;
var visStateSchemaV1 = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'visState'
});
exports.visStateSchemaV1 = visStateSchemaV1;
var visStateSchema = (_visStateSchema = {}, (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v0, {
  save: function save(toSave) {
    return visStateSchemaV0.save(toSave);
  },
  load: function load(toLoad) {
    return visStateSchemaV1.load(visStateSchemaV0.load(toLoad).visState);
  }
}), (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v1, visStateSchemaV1), _visStateSchema); // test load v0

exports.visStateSchema = visStateSchema;
var _default = visStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiaGlkZGVuIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwidmMiLCJsYXllciIsImlzT2xkIiwiaGFzT3duUHJvcGVydHkiLCJpc1BvaW50IiwicmFkaXVzRmllbGQiLCJMQVlFUl9WSVNfQ09ORklHUyIsImRlZmF1bHRWYWx1ZSIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvclNjYWxlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInBvaW50Iiwic3Ryb2tlQ29sb3IiLCJzdHJva2VDb2xvclJhbmdlIiwiY29sb3JSYW5nZSIsIm91dGxpbmUiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJpbnRlcmFjdGlvblByb3BzVjEiLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwibW9kaWZpZWRDb25maWciLCJmb3JFYWNoIiwiY29uZmlnVHlwZSIsImZpZWxkc1RvU2hvdyIsImZpZWxkRGF0YSIsIm5hbWUiLCJmb3JtYXQiLCJmaWx0ZXJQcm9wc1YwIiwiZW5sYXJnZWQiLCJEaW1lbnNpb25GaWVsZFNjaGVtYSIsIlNwbGl0TWFwc1NjaGVtYSIsImlzQXZhaWxhYmxlIiwic3BsaXRNYXBzIiwibGVuZ3RoIiwic2V0dGluZ3MiLCJlbnRyaWVzIiwiY29udmVydExheWVyU2V0dGluZ3MiLCJmaWx0ZXJQcm9wc1YxIiwicGxvdFR5cGUiLCJhbmltYXRpb25XaW5kb3ciLCJ5QXhpcyIsImxheWVySWQiLCJzcGVlZCIsInByb3BlcnRpZXNWMCIsImxheWVyQmxlbmRpbmciLCJwcm9wZXJ0aWVzVjEiLCJhbmltYXRpb25Db25maWciLCJjdXJyZW50VGltZSIsInZpc1N0YXRlU2NoZW1hVjAiLCJ2aXNTdGF0ZVNjaGVtYVYxIiwidmlzU3RhdGVTY2hlbWEiLCJzYXZlIiwidG9TYXZlIiwibG9hZCIsInRvTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULENBQXpCLEMsQ0FFUDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxTQUFTQyxzQkFBVCxDQUFnQ0MsTUFBaEMsRUFBd0M7QUFDdEMsTUFBTUMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixDQUEzQixDQUZzQyxDQUl0Qzs7QUFDQSxNQUFJRixNQUFNLENBQUNHLFNBQVAsQ0FBaUJDLFFBQXJCLEVBQStCO0FBQzdCLFdBQU8sYUFBUDtBQUNELEdBUHFDLENBU3RDOzs7QUFDQSxNQUFJSixNQUFNLENBQUNHLFNBQVAsQ0FBaUJFLE9BQXJCLEVBQThCO0FBQzVCLFdBQU8sV0FBUDtBQUNELEdBWnFDLENBY3RDO0FBQ0E7OztBQUNBLE1BQ0VMLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkcsTUFBakIsS0FBNEJMLGFBQTVCLElBQ0FELE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkksV0FBakIsQ0FBNkJDLElBQTdCLENBQWtDLFVBQUNDLENBQUQs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RixNQUFBQSxXQUFXLEVBQUUsSUFESDtBQUVWTCxNQUFBQSxLQUFLLEVBQUU7QUFGRyxLQUZjO0FBTTFCdkgsSUFBQUEsR0FBRyxFQUFFO0FBTnFCLEdBQVg7QUFsQlMsQ0FBckI7O0FBNEJBLElBQU02SCxnQkFBZ0IsR0FBRyxJQUFJckgsa0JBQUosQ0FBVztBQUN6Q29FLEVBQUFBLE9BQU8sRUFBRS9FLG1CQUFTQyxFQUR1QjtBQUV6Q3VDLEVBQUFBLFVBQVUsRUFBRW1GLFlBRjZCO0FBR3pDeEgsRUFBQUEsR0FBRyxFQUFFO0FBSG9DLENBQVgsQ0FBekI7O0FBTUEsSUFBTThILGdCQUFnQixHQUFHLElBQUl0SCxrQkFBSixDQUFXO0FBQ3pDb0UsRUFBQUEsT0FBTyxFQUFFL0UsbUJBQVNnRixFQUR1QjtBQUV6Q3hDLEVBQUFBLFVBQVUsRUFBRXFGLFlBRjZCO0FBR3pDMUgsRUFBQUEsR0FBRyxFQUFFO0FBSG9DLENBQVgsQ0FBekI7O0FBTUEsSUFBTStILGNBQWMsNEVBQ3hCbEksbUJBQVNDLEVBRGUsRUFDVjtBQUNia0ksRUFBQUEsSUFBSSxFQUFFLGNBQUFDLE1BQU07QUFBQSxXQUFJSixnQkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0JDLE1BQXRCLENBQUo7QUFBQSxHQURDO0FBRWJDLEVBQUFBLElBQUksRUFBRSxjQUFBQyxNQUFNO0FBQUEsV0FBSUwsZ0JBQWdCLENBQUNJLElBQWpCLENBQXNCTCxnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0JDLE1BQXRCLEVBQThCbkQsUUFBcEQsQ0FBSjtBQUFBO0FBRkMsQ0FEVSxxREFLeEJuRixtQkFBU2dGLEVBTGUsRUFLVmlELGdCQUxVLG1CQUFwQixDLENBUVA7OztlQUNlQyxjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQge2lzVmFsaWRGaWx0ZXJWYWx1ZX0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuLyoqXG4gKiBWMCBTY2hlbWFcbiAqL1xuXG5leHBvcnQgY29uc3QgZGltZW5zaW9uUHJvcHNWMCA9IFsnbmFtZScsICd0eXBlJ107XG5cbi8vIGluIHYwIGdlb2pzb24gdGhlcmUgaXMgb25seSBzaXplRmllbGRcblxuLy8gaW4gdjEgZ2VvanNvblxuLy8gc3Ryb2tlIGJhc2Ugb24gLT4gc2l6ZUZpZWxkXG4vLyBoZWlnaHQgYmFzZWQgb24gLT4gaGVpZ2h0RmllbGRcbi8vIHJhZGl1cyBiYXNlZCBvbiAtPiByYWRpdXNGaWVsZFxuLy8gaGVyZSB3ZSBtYWtlIG91ciB3aXJlZHN0IGd1ZXNzIG9uIHdoaWNoIGNoYW5uZWwgc2l6ZUZpZWxkIGJlbG9uZ3MgdG9cbmZ1bmN0aW9uIGdlb2pzb25TaXplRmllbGRWMFRvVjEoY29uZmlnKSB7XG4gIGNvbnN0IGRlZmF1bHRSYWl1ZHMgPSAxMDtcbiAgY29uc3QgZGVmYXVsdFJhZGl1c1JhbmdlID0gWzAsIDUwXTtcblxuICAvLyBpZiBleHRydWRlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIGhlaWdodFxuICBpZiAoY29uZmlnLnZpc0NvbmZpZy5leHRydWRlZCkge1xuICAgIHJldHVybiAnaGVpZ2h0RmllbGQnO1xuICB9XG5cbiAgLy8gaWYgc2hvdyBzdHJva2UgZW5hYmxlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIHN0cm9rZVxuICBpZiAoY29uZmlnLnZpc0NvbmZpZy5zdHJva2VkKSB7XG4gICAgcmV0dXJuICdzaXplRmllbGQnO1xuICB9XG5cbiAgLy8gaWYgcmFkaXVzIGNoYW5nZWQsIG9yIHJhZGl1cyBSYW5nZSBDaGFuZ2VkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3IgcmFkaXVzXG4gIC8vIHRoaXMgaXMgdGhlIG1vc3QgdW5yZWxpYWJsZSBndWVzcywgdGhhdCdzIHdoeSB3ZSBwdXQgaXQgaW4gdGhlIGVuZFxuICBpZiAoXG4gICAgY29uZmlnLnZpc0NvbmZpZy5yYWRpdXMgIT09IGRlZmF1bHRSYWl1ZHMgfHxcbiAgICBjb25maWcudmlzQ29uZmlnLnJhZGl1c1JhbmdlLnNvbWUoKGQsIGkpID0+IGQgIT09IGRlZmF1bHRSYWRpdXNSYW5nZVtpXSlcbiAgKSB7XG4gICAgcmV0dXJuICdyYWRpdXNGaWVsZCc7XG4gIH1cblxuICByZXR1cm4gJ3NpemVGaWVsZCc7XG59XG5cbi8vIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnXG5jbGFzcyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBzYXZlKGZpZWxkKSB7XG4gICAgLy8gc2hvdWxkIG5vdCBiZSBjYWxsZWQgYW55bW9yZVxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBmaWVsZCAhPT0gbnVsbCA/IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGZpZWxkKVt0aGlzLmtleV0gOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQoZmllbGQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICBsZXQgZmllbGROYW1lID0gdGhpcy5rZXk7XG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicgJiYgdGhpcy5rZXkgPT09ICdzaXplRmllbGQnICYmIGZpZWxkKSB7XG4gICAgICBmaWVsZE5hbWUgPSBnZW9qc29uU2l6ZUZpZWxkVjBUb1YxKGNvbmZpZyk7XG4gICAgfVxuICAgIC8vIGZvbGQgaW50byB2aXN1YWxDaGFubmVscyB0byBiZSBsb2FkIGJ5IFZpc3VhbENoYW5uZWxTY2hlbWFWMVxuICAgIHJldHVybiB7XG4gICAgICB2aXN1YWxDaGFubmVsczoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQudmlzdWFsQ2hhbm5lbHMgfHwge30pLFxuICAgICAgICBbZmllbGROYW1lXTogZmllbGRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIERpbWVuc2lvblNjYWxlU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIHNhdmUoc2NhbGUpIHtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IHNjYWxlfTtcbiAgfVxuICBsb2FkKHNjYWxlLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gICAgaWYgKHRoaXMua2V5ID09PSAnc2l6ZVNjYWxlJyAmJiBjb25maWcudHlwZSA9PT0gJ2dlb2pzb24nKSB7XG4gICAgICAvLyBzaXplU2NhbGUgbm93IHNwbGl0IGludG8gcmFkaXVzU2NhbGUsIGhlaWdodFNjYWxlXG4gICAgICAvLyBubyB1c2VyIGN1c3RvbWl6YXRpb24sIGp1c3QgdXNlIGRlZmF1bHRcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzdWFsQ2hhbm5lbHM6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLnZpc3VhbENoYW5uZWxzIHx8IHt9KSxcbiAgICAgICAgW3RoaXMua2V5XTogc2NhbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWdcbmNsYXNzIExheWVyQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy5rZXlcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC5jb25maWcgfHwge30pLFxuICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbHVtbnNcbi8vIG9ubHkgcmV0dXJuIGNvbHVtbiB2YWx1ZSBmb3IgZWFjaCBjb2x1bW5cbmNsYXNzIExheWVyQ29sdW1uc1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcua2V5LCBmbGF0dGVuIGNvbHVtbnNcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC5jb25maWcgfHwge30pLFxuICAgICAgICBjb2x1bW5zOiBPYmplY3Qua2V5cyhzYXZlZCkucmVkdWNlKFxuICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2tleV06IHNhdmVkW2tleV0udmFsdWVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7fVxuICAgICAgICApXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnLnZpc0NvbmZpZ1xuY2xhc3MgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcudmlzQ29uZmlnXG4gICAgY29uc3QgYWNjdW11bGF0ZWRDb25maWcgPSBhY2N1bXVsYXRlZC5jb25maWcgfHwge307XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi5hY2N1bXVsYXRlZENvbmZpZyxcbiAgICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgICAgLi4uKGFjY3VtdWxhdGVkQ29uZmlnLnZpc0NvbmZpZyB8fCB7fSksXG4gICAgICAgICAgW3RoaXMua2V5XTogc2F2ZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAga2V5ID0gJ3Zpc0NvbmZpZyc7XG5cbiAgbG9hZCh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICBjb25zdCByZW5hbWUgPSB7XG4gICAgICBnZW9qc29uOiB7XG4gICAgICAgIGV4dHJ1ZGVkOiAnZW5hYmxlM2QnLFxuICAgICAgICBlbGV2YXRpb25SYW5nZTogJ2hlaWdodFJhbmdlJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnR5cGUgaW4gcmVuYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVG9SZW5hbWUgPSByZW5hbWVbY29uZmlnLnR5cGVdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgICAgdmlzQ29uZmlnOiBPYmplY3Qua2V5cyh2aXNDb25maWcpLnJlZHVjZShcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIC4uLihwcm9wVG9SZW5hbWVba2V5XVxuICAgICAgICAgICAgICAgID8ge1twcm9wVG9SZW5hbWVba2V5XV06IHZpc0NvbmZpZ1trZXldfVxuICAgICAgICAgICAgICAgIDoge1trZXldOiB2aXNDb25maWdba2V5XX0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIHZpc0NvbmZpZ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFEZWxldGVWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZCh2YWx1ZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG4vKipcbiAqIFYwIC0+IFYxIENoYW5nZXNcbiAqIC0gbGF5ZXIgaXMgbm93IGEgY2xhc3NcbiAqIC0gY29uZmlnIHNhdmVkIGluIGEgY29uZmlnIG9iamVjdFxuICogLSBpZCwgdHlwZSwgaXNBZ2dyZWdhdGVkIGlzIG91dHNpZGUgbGF5ZXIuY29uZmlnXG4gKiAtIHZpc3VhbENoYW5uZWxzIGlzIG91dHNpZGUgY29uZmlnLCBpdCBkZWZpbmVzIGF2YWlsYWJsZSB2aXN1YWwgY2hhbm5lbCBhbmRcbiAqICAgcHJvcGVydHkgbmFtZXMgZm9yIGZpZWxkLCBzY2FsZSwgZG9tYWluIGFuZCByYW5nZSBvZiBlYWNoIHZpc3VhbCBjaGFuZWwuXG4gKiAtIGVuYWJsZTNkLCBjb2xvckFnZ3JlZ2F0aW9uIGFuZCBzaXplQWdncmVnYXRpb24gYXJlIG1vdmVkIGludG8gdmlzQ29uZmlnXG4gKiAtIEdlb2pzb25MYXllciAtIGFkZGVkIGhlaWdodCwgcmFkaXVzIHNwZWNpZmljIHByb3BlcnRpZXNcbiAqL1xuXG5leHBvcnQgY29uc3QgbGF5ZXJQcm9wc1YwID0ge1xuICBpZDogbnVsbCxcbiAgdHlwZTogbnVsbCxcblxuICAvLyBtb3ZlIGludG8gbGF5ZXIuY29uZmlnXG4gIGRhdGFJZDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2RhdGFJZCd9KSxcbiAgbGFiZWw6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdsYWJlbCd9KSxcbiAgY29sb3I6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdjb2xvcid9KSxcbiAgaXNWaXNpYmxlOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnaXNWaXNpYmxlJ30pLFxuICBoaWRkZW46IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdoaWRkZW4nfSksXG5cbiAgLy8gY29udmVydCB2aXNDb25maWdcbiAgdmlzQ29uZmlnOiBuZXcgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCh7a2V5OiAndmlzQ29uZmlnJ30pLFxuXG4gIC8vIG1vdmUgaW50byBsYXllci5jb25maWdcbiAgLy8gZmxhdHRlblxuICBjb2x1bW5zOiBuZXcgTGF5ZXJDb2x1bW5zU2NoZW1hVjAoKSxcblxuICAvLyBzYXZlIGludG8gdmlzdWFsQ2hhbm5lbHNcbiAgY29sb3JGaWVsZDogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hVjAoe1xuICAgIHByb3BlcnRpZXM6IGRpbWVuc2lvblByb3BzVjAsXG4gICAga2V5OiAnY29sb3JGaWVsZCdcbiAgfSksXG4gIGNvbG9yU2NhbGU6IG5ldyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwKHtcbiAgICBrZXk6ICdjb2xvclNjYWxlJ1xuICB9KSxcbiAgc2l6ZUZpZWxkOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWFWMCh7XG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcbiAgICBrZXk6ICdzaXplRmllbGQnXG4gIH0pLFxuICBzaXplU2NhbGU6IG5ldyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwKHtcbiAgICBrZXk6ICdzaXplU2NhbGUnXG4gIH0pLFxuXG4gIC8vIG1vdmUgaW50byBjb25maWcudmlzQ29uZmlnXG4gIGVuYWJsZTNkOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICdlbmFibGUzZCd9KSxcbiAgY29sb3JBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7XG4gICAga2V5OiAnY29sb3JBZ2dyZWdhdGlvbidcbiAgfSksXG4gIHNpemVBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7a2V5OiAnc2l6ZUFnZ3JlZ2F0aW9uJ30pLFxuXG4gIC8vIGRlbGV0ZVxuICBpc0FnZ3JlZ2F0ZWQ6IG5ldyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwKClcbn07XG5cbi8qKlxuICogVjEgU2NoZW1hXG4gKi9cbmNsYXNzIENvbHVtblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAgc2F2ZShjb2x1bW5zLCBzdGF0ZSkge1xuICAgIC8vIHN0YXJ0aW5nIGZyb20gdjEsIG9ubHkgc2F2ZSBjb2x1bW4gdmFsdWVcbiAgICAvLyBmaWVsZElkeCB3aWxsIGJlIGNhbGN1bGF0ZWQgZHVyaW5nIG1lcmdlXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKGNvbHVtbnMpLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIGNrZXkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICBbY2tleV06IGNvbHVtbnNbY2tleV0udmFsdWVcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQoY29sdW1ucykge1xuICAgIHJldHVybiB7Y29sdW1uc307XG4gIH1cbn1cblxuY2xhc3MgVGV4dExhYmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHRleHRMYWJlbCkge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB0ZXh0TGFiZWwubWFwKHRsID0+ICh7XG4gICAgICAgIC4uLnRsLFxuICAgICAgICBmaWVsZDogdGwuZmllbGQgPyBwaWNrKHRsLmZpZWxkLCBbJ25hbWUnLCAndHlwZSddKSA6IG51bGxcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cblxuICBsb2FkKHRleHRMYWJlbCkge1xuICAgIHJldHVybiB7dGV4dExhYmVsOiBBcnJheS5pc0FycmF5KHRleHRMYWJlbCkgPyB0ZXh0TGFiZWwgOiBbdGV4dExhYmVsXX07XG4gIH1cbn1cblxuY29uc3QgdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxID0ge1xuICBnZW9qc29uOiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJyk7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIHZjLnJhZGl1c0ZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBMQVlFUl9WSVNfQ09ORklHUy5yYWRpdXMuZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKGlzT2xkICYmICFpc1BvaW50ICYmIGxheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgICAgLy8gaWYgc3Ryb2tlZCBpcyB0cnVlLCBjb3B5IGNvbG9yIGNvbmZpZyB0byBzdHJva2UgY29sb3IgY29uZmlnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG4vKipcbiAqIFYxOiBzYXZlIFtmaWVsZF06IHtuYW1lLCB0eXBlfSwgW3NjYWxlXTogJycgZm9yIGVhY2ggY2hhbm5lbFxuICovXG5jbGFzcyBWaXN1YWxDaGFubmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHZpc3VhbENoYW5uZWxzLCBwYXJlbnRzKSB7XG4gICAgLy8gb25seSBzYXZlIGZpZWxkIGFuZCBzY2FsZSBvZiBlYWNoIGNoYW5uZWxcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKHZpc3VhbENoYW5uZWxzKS5yZWR1Y2UoXG4gICAgICAgIC8vICBzYXZlIGNoYW5uZWwgdG8gbnVsbCBpZiBkaWRuJ3Qgc2VsZWN0IGFueSBmaWVsZFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgICAgID8gcGljayhsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0sIFsnbmFtZScsICd0eXBlJ10pXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5zY2FsZV1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikge1xuICAgIC8vIGZvbGQgY2hhbm5lbHMgaW50byBjb25maWdcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcilcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjdW11bGF0b3IsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIC4uLnZjLFxuICAgICAgICAuLi5tb2RpZmllZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxID0ge1xuICBwb2ludDogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgIXZpc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZmlsbGVkJykgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvciAmJiAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgaWYgKGlzT2xkKSB7XG4gICAgICAvLyBjb2xvciBjb2xvciAmIGNvbG9yIHJhbmdlIHRvIHN0cm9rZSBjb2xvclxuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3IgPSBsYXllci5jb25maWcuY29sb3I7XG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvclJhbmdlID0gY2xvbmVEZWVwKHZpc0NvbmZpZy5jb2xvclJhbmdlKTtcbiAgICAgIGlmICh2aXNDb25maWcub3V0bGluZSkge1xuICAgICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxuICAgICAgICAvLyBzZXQgaXQgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xuICB9LFxuICBnZW9qc29uOiAodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkgPT4ge1xuICAgIC8vIGlzIHBvaW50cz9cbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPVxuICAgICAgbGF5ZXIudmlzdWFsQ2hhbm5lbHMgJiZcbiAgICAgICFsYXllci52aXN1YWxDaGFubmVscy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2U7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIChsYXllci52aXN1YWxDaGFubmVscyAmJiBsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXNGaWVsZCkgfHxcbiAgICAgICh2aXNDb25maWcgJiYgdmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZSk7XG5cbiAgICBpZiAoaXNPbGQpIHtcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xuICAgICAgaWYgKGlzUG9pbnQpIHtcbiAgICAgICAgLy8gaWYgaXMgcG9pbnQsIHNldCBzdHJva2UgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kaWZpZWQuc3Ryb2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZDtcbiAgfVxufTtcblxuY2xhc3MgVmlzQ29uZmlnU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV0odmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZClcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIC4uLnZpc0NvbmZpZyxcbiAgICAgICAgLi4ubW9kaWZpZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjEgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICBjb25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ2NvbmZpZycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZGF0YUlkOiBudWxsLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBjb2xvcjogbnVsbCxcbiAgICAgIGNvbHVtbnM6IG5ldyBDb2x1bW5TY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgICAgICBrZXk6ICdjb2x1bW5zJ1xuICAgICAgfSksXG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNDb25maWc6IG5ldyBWaXNDb25maWdTY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gICAgICB9KSxcbiAgICAgIGhpZGRlbjogbnVsbCxcbiAgICAgIHRleHRMYWJlbDogbmV3IFRleHRMYWJlbFNjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgICAgIGtleTogJ3RleHRMYWJlbCdcbiAgICAgIH0pXG4gICAgfVxuICB9KSxcbiAgdmlzdWFsQ2hhbm5lbHM6IG5ldyBWaXN1YWxDaGFubmVsU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3Zpc3VhbENoYW5uZWxzJ1xuICB9KVxufTtcblxuZXhwb3J0IGNsYXNzIExheWVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnbGF5ZXJzJztcblxuICBzYXZlKGxheWVycywgcGFyZW50cykge1xuICAgIGNvbnN0IFt2aXNTdGF0ZV0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcblxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB2aXNTdGF0ZS5sYXllck9yZGVyLnJlZHVjZSgoc2F2ZWQsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIHNhdmUgbGF5ZXJzIGFjY29yZGluZyB0byB0aGVpciByZW5kZXJpbmcgb3JkZXJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBsYXllcnNbaW5kZXhdO1xuICAgICAgICBpZiAobGF5ZXIuaXNWYWxpZFRvU2F2ZSgpKSB7XG4gICAgICAgICAgc2F2ZWQucHVzaCh0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllcikubGF5ZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2F2ZWQ7XG4gICAgICB9LCBbXSlcbiAgICB9O1xuICB9XG5cbiAgbG9hZChsYXllcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogbGF5ZXJzLm1hcChsYXllciA9PiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllciwgbGF5ZXJzKS5sYXllcnMpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnZmlsdGVycyc7XG4gIHNhdmUoZmlsdGVycykge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEZpbHRlclZhbHVlKVxuICAgICAgICAubWFwKGZpbHRlciA9PiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWx0ZXIpLmZpbHRlcnMpXG4gICAgfTtcbiAgfVxuICBsb2FkKGZpbHRlcnMpIHtcbiAgICByZXR1cm4ge2ZpbHRlcnN9O1xuICB9XG59XG5cbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMCA9IFsndG9vbHRpcCcsICdicnVzaCddO1xuXG5jbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wZXJ0aWVzKVxuICAgICAgPyB7XG4gICAgICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzLnJlZHVjZShcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIC4uLihpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWQgPyB7W2tleV06IGludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnfSA6IHt9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gY29udmVydCB2MCAtPiB2MVxuICAgIC8vIHJldHVybiBlbmFibGVkOiBmYWxzZSBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BlcnRpZXMpXG4gICAgICA/IHtcbiAgICAgICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAgICAgICAuLi4oaW50ZXJhY3Rpb25Db25maWdba2V5XSB8fCB7fSksXG4gICAgICAgICAgICAgICAgICBlbmFibGVkOiBCb29sZWFuKGludGVyYWN0aW9uQ29uZmlnW2tleV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IHt9O1xuICB9XG59XG5cbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMSA9IFsuLi5pbnRlcmFjdGlvblByb3BzVjAsICdnZW9jb2RlcicsICdjb29yZGluYXRlJ107XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gc2F2ZSBjb25maWcgZXZlbiBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BlcnRpZXMpXG4gICAgICA/IHtcbiAgICAgICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBpbnRlcmFjdGlvbkNvbmZpZ1trZXldLmVuYWJsZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB7fVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiB7fTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgY29uc3QgbW9kaWZpZWRDb25maWcgPSBpbnRlcmFjdGlvbkNvbmZpZztcbiAgICBPYmplY3Qua2V5cyhpbnRlcmFjdGlvbkNvbmZpZykuZm9yRWFjaChjb25maWdUeXBlID0+IHtcbiAgICAgIGlmIChjb25maWdUeXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgY29uc3QgZmllbGRzVG9TaG93ID0gbW9kaWZpZWRDb25maWdbY29uZmlnVHlwZV0uZmllbGRzVG9TaG93O1xuICAgICAgICBpZiAoIW5vdE51bGxvclVuZGVmaW5lZChmaWVsZHNUb1Nob3cpKSB7XG4gICAgICAgICAgcmV0dXJuIHtbdGhpcy5rZXldOiBtb2RpZmllZENvbmZpZ307XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRzVG9TaG93KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgZmllbGRzVG9TaG93W2tleV0gPSBmaWVsZHNUb1Nob3dba2V5XS5tYXAoZmllbGREYXRhID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGREYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWVsZERhdGEsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBudWxsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmllbGREYXRhO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9KTtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IG1vZGlmaWVkQ29uZmlnfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMCA9IHtcbiAgZGF0YUlkOiBudWxsLFxuICBpZDogbnVsbCxcbiAgbmFtZTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIGVubGFyZ2VkOiBudWxsXG59O1xuXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkID8gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmllbGQpW3RoaXMua2V5XSA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbG9hZChmaWVsZCkge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogZmllbGR9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdE1hcHNTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBjb252ZXJ0TGF5ZXJTZXR0aW5ncyhhY2N1LCBba2V5LCB2YWx1ZV0pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUuaXNBdmFpbGFibGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiBCb29sZWFuKHZhbHVlLmlzVmlzaWJsZSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhY2N1O1xuICB9XG5cbiAgbG9hZChzcGxpdE1hcHMpIHtcbiAgICAvLyBwcmV2aW91cyBzcGxpdE1hcHMgU2NoZW1hIHtsYXllcnM6IHtsYXllcklkOiB7aXNWaXNpYmxlLCBpc0F2YWlsYWJsZX19fVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNwbGl0TWFwcykgfHwgIXNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7c3BsaXRNYXBzOiBbXX07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiAoe1xuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICAgICAgbGF5ZXJzOiBPYmplY3QuZW50cmllcyhzZXR0aW5ncy5sYXllcnMgfHwge30pLnJlZHVjZSh0aGlzLmNvbnZlcnRMYXllclNldHRpbmdzLCB7fSlcbiAgICAgIH0pKVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlclByb3BzVjEgPSB7XG4gIC4uLmZpbHRlclByb3BzVjAsXG4gIHBsb3RUeXBlOiBudWxsLFxuICBhbmltYXRpb25XaW5kb3c6IG51bGwsXG4gIHlBeGlzOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3lBeGlzJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdHlwZTogbnVsbFxuICAgIH1cbiAgfSksXG5cbiAgLy8gcG9seWdvbiBmaWx0ZXIgcHJvcGVydGllc1xuICBsYXllcklkOiBudWxsLFxuICBzcGVlZDogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMCA9IHtcbiAgZmlsdGVyczogbmV3IEZpbHRlclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBmaWx0ZXJQcm9wc1YwXG4gIH0pLFxuICBsYXllcnM6IG5ldyBMYXllclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBsYXllclByb3BzVjBcbiAgfSksXG4gIGludGVyYWN0aW9uQ29uZmlnOiBuZXcgSW50ZXJhY3Rpb25TY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogaW50ZXJhY3Rpb25Qcm9wc1YwXG4gIH0pLFxuICBsYXllckJsZW5kaW5nOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YxID0ge1xuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGZpbHRlclByb3BzVjFcbiAgfSksXG4gIGxheWVyczogbmV3IExheWVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMVxuICB9KSxcbiAgaW50ZXJhY3Rpb25Db25maWc6IG5ldyBJbnRlcmFjdGlvblNjaGVtYVYxKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiBpbnRlcmFjdGlvblByb3BzVjFcbiAgfSksXG4gIGxheWVyQmxlbmRpbmc6IG51bGwsXG4gIHNwbGl0TWFwczogbmV3IFNwbGl0TWFwc1NjaGVtYSh7XG4gICAga2V5OiAnc3BsaXRNYXBzJyxcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MVxuICB9KSxcbiAgYW5pbWF0aW9uQ29uZmlnOiBuZXcgU2NoZW1hKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBjdXJyZW50VGltZTogbnVsbCxcbiAgICAgIHNwZWVkOiBudWxsXG4gICAgfSxcbiAgICBrZXk6ICdhbmltYXRpb25Db25maWcnXG4gIH0pXG59O1xuXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWFWMCA9IG5ldyBTY2hlbWEoe1xuICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgcHJvcGVydGllczogcHJvcGVydGllc1YwLFxuICBrZXk6ICd2aXNTdGF0ZSdcbn0pO1xuXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWFWMSA9IG5ldyBTY2hlbWEoe1xuICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgcHJvcGVydGllczogcHJvcGVydGllc1YxLFxuICBrZXk6ICd2aXNTdGF0ZSdcbn0pO1xuXG5leHBvcnQgY29uc3QgdmlzU3RhdGVTY2hlbWEgPSB7XG4gIFtWRVJTSU9OUy52MF06IHtcbiAgICBzYXZlOiB0b1NhdmUgPT4gdmlzU3RhdGVTY2hlbWFWMC5zYXZlKHRvU2F2ZSksXG4gICAgbG9hZDogdG9Mb2FkID0+IHZpc1N0YXRlU2NoZW1hVjEubG9hZCh2aXNTdGF0ZVNjaGVtYVYwLmxvYWQodG9Mb2FkKS52aXNTdGF0ZSlcbiAgfSxcbiAgW1ZFUlNJT05TLnYxXTogdmlzU3RhdGVTY2hlbWFWMVxufTtcblxuLy8gdGVzdCBsb2FkIHYwXG5leHBvcnQgZGVmYXVsdCB2aXNTdGF0ZVNjaGVtYTtcbiJdfQ==