"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = exports.LAYER_ID_LENGTH = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _extensions = require("@deck.gl/extensions");

var _core = require("@deck.gl/core");

var _layers = require("@deck.gl/layers");

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _layerUpdate = require("./layer-update");

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _colorUtils = require("../utils/color-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _marked = /*#__PURE__*/_regenerator["default"].mark(generateColor);

/** @typedef {import('./index').Layer} LayerClass} */

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var LAYER_ID_LENGTH = 6;
exports.LAYER_ID_LENGTH = LAYER_ID_LENGTH;
var MAX_SAMPLE_SIZE = 5000;
var defaultDomain = [0, 1];
var dataFilterExtension = new _extensions.DataFilterExtension({
  filterSize: _defaultSettings.MAX_GPU_FILTERS
});

var identity = function identity(d) {
  return d;
};

var defaultDataAccessor = function defaultDataAccessor(d) {
  return d.data;
};

var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return field.valueAccessor(d);
};
/** @type {LayerClass} */


var Layer = /*#__PURE__*/function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(LAYER_ID_LENGTH); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {}; // @ts-ignore

    this.config = this.getDefaultLayerConfig(_objectSpread({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible', 'hidden'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color,
          nullValue: _defaultSettings.NO_VALUE_COLOR,
          defaultValue: function defaultValue(config) {
            return config.color;
          }
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size,
          nullValue: 0,
          defaultValue: 1
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically find props to create layer based on it
     * and return the props and previous found layers.
     * By default, no layers will be found
     */

  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        hidden: props.hidden || false,
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: _defaultSettings.SCALE_TYPES.quantile,
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: _defaultSettings.SCALE_TYPES.linear,
        sizeField: null,
        visConfig: {},
        textLabel: [_layerFactory.DEFAULT_TEXT_LABEL],
        colorUI: {
          color: _layerFactory.DEFAULT_COLOR_UI,
          colorRange: _layerFactory.DEFAULT_COLOR_UI
        },
        animation: {
          enabled: false
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.fieldIdx
      } : {
        value: null,
        fieldIdx: -1
      };
      return _objectSpread(_objectSpread({}, this.config.columns), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, this.config.columns[key]), update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {object} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _this$columnPairs, _this$columnPairs2, _this$columnPairs3, _objectSpread3;

      if (!this.columnPairs || !((_this$columnPairs = this.columnPairs) !== null && _this$columnPairs !== void 0 && _this$columnPairs[key])) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = (_this$columnPairs2 = this.columnPairs) === null || _this$columnPairs2 === void 0 ? void 0 : _this$columnPairs2[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;

      var _this$columnPairs$par = (_this$columnPairs3 = this.columnPairs) === null || _this$columnPairs3 === void 0 ? void 0 : _this$columnPairs3[partnerKey],
          partnerFieldPairKey = _this$columnPairs$par.fieldPairKey;

      return _objectSpread(_objectSpread({}, this.config.columns), {}, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
     * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
     * @param {object} mapState
     * @param {number} mapState.zoom - actual zoom
     * @param {number | void} mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
     * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
     * @param {object} mapState
     * @param {number} mapState.zoom - actual zoom
     * @param {number | void} mapState.zoomOffset - zoomOffset when render in the plot container for export image
     * @returns {number}
     */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      // don't deep merge color range, reversed: is not a key by default
      var shallowCopy = ['colorRange', 'strokeColorRange'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.field;
      })); // don't copy over domain and animation

      var notToCopy = ['animation'].concat(Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      })); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && _this.visConfigSettings[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        shallowCopy: shallowCopy,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} shallowCopy - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$shallowCopy = _ref3.shallowCopy,
          shallowCopy = _ref3$shallowCopy === void 0 ? [] : _ref3$shallowCopy,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !shallowCopy.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            shallowCopy: shallowCopy,
            notToCopy: notToCopy
          });
        } else if ((0, _dataUtils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item].hasOwnProperty(p);
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var columnValidators = this.columnValidators || {};
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, columnValidators[key] ? {
          value: null,
          fieldIdx: -1,
          validator: columnValidators[key]
        } : {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return _objectSpread(_objectSpread({}, required), optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = _objectSpread(_objectSpread({}, this.config), newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = _objectSpread(_objectSpread({}, this.config.visConfig), newVisConfig);
      return this;
    }
  }, {
    key: "updateLayerColorUI",
    value: function updateLayerColorUI(prop, newConfig) {
      var _this$config = this.config,
          previous = _this$config.colorUI,
          visConfig = _this$config.visConfig;

      if (!(0, _utils.isPlainObject)(newConfig) || typeof prop !== 'string') {
        return this;
      }

      var colorUIProp = Object.entries(newConfig).reduce(function (accu, _ref4) {
        var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(accu[key]) && (0, _utils.isPlainObject)(value) ? _objectSpread(_objectSpread({}, accu[key]), value) : value));
      }, previous[prop] || _layerFactory.DEFAULT_COLOR_UI);

      var colorUI = _objectSpread(_objectSpread({}, previous), {}, (0, _defineProperty2["default"])({}, prop, colorUIProp));

      this.updateLayerConfig({
        colorUI: colorUI
      }); // if colorUI[prop] is colorRange

      var isColorRange = visConfig[prop] && visConfig[prop].colors;

      if (isColorRange) {
        this.updateColorUIByColorRange(newConfig, prop);
        this.updateColorRangeByColorUI(newConfig, previous, prop);
        this.updateCustomPalette(newConfig, previous, prop);
      }

      return this;
    }
  }, {
    key: "updateCustomPalette",
    value: function updateCustomPalette(newConfig, previous, prop) {
      if (!newConfig.colorRangeConfig || !newConfig.colorRangeConfig.custom) {
        return;
      }

      var _this$config2 = this.config,
          colorUI = _this$config2.colorUI,
          visConfig = _this$config2.visConfig;
      if (!visConfig[prop]) return;
      var colors = visConfig[prop].colors;

      var customPalette = _objectSpread(_objectSpread({}, colorUI[prop].customPalette), {}, {
        name: 'Custom Palette',
        colors: (0, _toConsumableArray2["default"])(colors)
      });

      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          customPalette: customPalette
        })))
      });
    }
    /**
     * if open dropdown and prop is color range
     * Automatically set colorRangeConfig's step and reversed
     * @param {*} newConfig
     * @param {*} prop
     */

  }, {
    key: "updateColorUIByColorRange",
    value: function updateColorUIByColorRange(newConfig, prop) {
      if (typeof newConfig.showDropdown !== 'number') return;
      var _this$config3 = this.config,
          colorUI = _this$config3.colorUI,
          visConfig = _this$config3.visConfig;
      this.updateLayerConfig({
        colorUI: _objectSpread(_objectSpread({}, colorUI), {}, (0, _defineProperty2["default"])({}, prop, _objectSpread(_objectSpread({}, colorUI[prop]), {}, {
          colorRangeConfig: _objectSpread(_objectSpread({}, colorUI[prop].colorRangeConfig), {}, {
            steps: visConfig[prop].colors.length,
            reversed: Boolean(visConfig[prop].reversed)
          })
        })))
      });
    }
  }, {
    key: "updateColorRangeByColorUI",
    value: function updateColorRangeByColorUI(newConfig, previous, prop) {
      // only update colorRange if changes in UI is made to 'reversed', 'steps' or steps
      var shouldUpdate = newConfig.colorRangeConfig && ['reversed', 'steps'].some(function (key) {
        return newConfig.colorRangeConfig.hasOwnProperty(key) && newConfig.colorRangeConfig[key] !== (previous[prop] || _layerFactory.DEFAULT_COLOR_UI).colorRangeConfig[key];
      });
      if (!shouldUpdate) return;
      var _this$config4 = this.config,
          colorUI = _this$config4.colorUI,
          visConfig = _this$config4.visConfig;
      var _colorUI$prop$colorRa = colorUI[prop].colorRangeConfig,
          steps = _colorUI$prop$colorRa.steps,
          reversed = _colorUI$prop$colorRa.reversed;
      var colorRange = visConfig[prop]; // find based on step or reversed

      var update;

      if (newConfig.colorRangeConfig.hasOwnProperty('steps')) {
        var group = (0, _colorUtils.getColorGroupByName)(colorRange);

        if (group) {
          var sameGroup = _colorRanges.COLOR_RANGES.filter(function (cr) {
            return (0, _colorUtils.getColorGroupByName)(cr) === group;
          });

          update = sameGroup.find(function (cr) {
            return cr.colors.length === steps;
          });

          if (update && colorRange.reversed) {
            update = (0, _colorUtils.reverseColorRange)(true, update);
          }
        }
      }

      if (newConfig.colorRangeConfig.hasOwnProperty('reversed')) {
        update = (0, _colorUtils.reverseColorRange)(reversed, update || colorRange);
      }

      if (update) {
        this.updateLayerVisConfig((0, _defineProperty2["default"])({}, prop, update));
      }
    }
    /**
     * Check whether layer has all columns
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.config.isVisible && this.hasAllColumns() && this.hasLayerData(data) && typeof this.renderLayer === 'function';
    }
  }, {
    key: "getColorScale",
    value: function getColorScale(colorScale, colorDomain, colorRange) {
      if (Array.isArray(colorRange.colorMap)) {
        var cMap = new Map();
        colorRange.colorMap.forEach(function (_ref6) {
          var _ref7 = (0, _slicedToArray2["default"])(_ref6, 2),
              k = _ref7[0],
              v = _ref7[1];

          cMap.set(k, typeof v === 'string' ? (0, _colorUtils.hexToRgb)(v) : v);
        });

        var scale = _defaultSettings.SCALE_FUNC[_defaultSettings.SCALE_TYPES.ordinal]().domain(cMap.keys()).range(cMap.values()).unknown(cMap.get(_layerFactory.UNKNOWN_COLOR_KEY) || _defaultSettings.NO_VALUE_COLOR);

        return scale;
      }

      return this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb));
    }
    /**
     * Mapping from visual channels to deck.gl accesors
     * @param {Function} dataAccessor - access kepler.gl layer data from deck.gl layer
     * @return {Object} attributeAccessors - deck.gl layer attribute accessors
     */

  }, {
    key: "getAttributeAccessors",
    value: function getAttributeAccessors() {
      var _this4 = this;

      var dataAccessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDataAccessor;
      var attributeAccessors = {};
      Object.keys(this.visualChannels).forEach(function (channel) {
        var _this4$visualChannels = _this4.visualChannels[channel],
            field = _this4$visualChannels.field,
            fixed = _this4$visualChannels.fixed,
            scale = _this4$visualChannels.scale,
            domain = _this4$visualChannels.domain,
            range = _this4$visualChannels.range,
            accessor = _this4$visualChannels.accessor,
            defaultValue = _this4$visualChannels.defaultValue,
            getAttributeValue = _this4$visualChannels.getAttributeValue,
            nullValue = _this4$visualChannels.nullValue,
            channelScaleType = _this4$visualChannels.channelScaleType;
        var shouldGetScale = _this4.config[field];

        if (shouldGetScale) {
          var args = [_this4.config[scale], _this4.config[domain], _this4.config.visConfig[range]];
          var isFixed = fixed && _this4.config.visConfig[fixed];
          var scaleFunction = channelScaleType === _defaultSettings.CHANNEL_SCALES.color ? _this4.getColorScale.apply(_this4, args) : _this4.getVisChannelScale.apply(_this4, args.concat([isFixed]));

          attributeAccessors[accessor] = function (d) {
            return _this4.getEncodedChannelValue(scaleFunction, dataAccessor(d), _this4.config[field], nullValue);
          };
        } else if (typeof getAttributeValue === 'function') {
          attributeAccessors[accessor] = getAttributeValue(_this4.config);
        } else {
          attributeAccessors[accessor] = typeof defaultValue === 'function' ? defaultValue(_this4.config) : defaultValue;
        }

        if (!attributeAccessors[accessor]) {
          _window.console.warn("Failed to provide accesso function for ".concat(accessor || channel));
        }
      });
      return attributeAccessors;
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData) {
      var getPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identity;
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getChangedTriggers",
    value: function getChangedTriggers(dataUpdateTriggers) {
      var triggerChanged = (0, _layerUpdate.diffUpdateTriggers)(dataUpdateTriggers, this._oldDataUpdateTriggers);
      this._oldDataUpdateTriggers = dataUpdateTriggers;
      return triggerChanged;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var nullValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);

      if (!(0, _dataUtils.notNullorUndefined)(value)) {
        return nullValue;
      }

      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!(0, _dataUtils.notNullorUndefined)(attributeValue)) {
        attributeValue = nullValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = _objectSpread(_objectSpread({}, this.meta), meta);
    }
  }, {
    key: "getDataUpdateTriggers",
    value: function getDataUpdateTriggers(_ref8) {
      var filteredIndex = _ref8.filteredIndex,
          id = _ref8.id;
      var columns = this.config.columns;
      return _objectSpread({
        getData: {
          datasetId: id,
          columns: columns,
          filteredIndex: filteredIndex
        },
        getMeta: {
          datasetId: id,
          columns: columns
        }
      }, (this.config.textLabel || []).reduce(function (accu, tl, i) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, "getLabelCharacterSet-".concat(i), tl.field ? tl.field.name : null));
      }, {}));
    }
  }, {
    key: "updateData",
    value: function updateData(datasets, oldLayerData) {
      if (!this.config.dataId) {
        return {};
      }

      var layerDataset = datasets[this.config.dataId];
      var allData = datasets[this.config.dataId].allData;
      var getPosition = this.getPositionAccessor();
      var dataUpdateTriggers = this.getDataUpdateTriggers(layerDataset);
      var triggerChanged = this.getChangedTriggers(dataUpdateTriggers);

      if (triggerChanged.getMeta) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data = [];

      if (!triggerChanged.getData && oldLayerData && oldLayerData.data) {
        // same data
        data = oldLayerData.data;
      } else {
        data = this.calculateDataAttribute(layerDataset, getPosition);
      }

      return {
        data: data,
        triggerChanged: triggerChanged
      };
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} datasets
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(datasets, newFilter) {
      var _this5 = this;

      var table = this.getDataset(datasets);

      if (!table) {
        return this;
      }

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this5.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this5.calculateLayerDomain(table, channel);

          _this5.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
  }, {
    key: "getDataset",
    value: function getDataset(datasets) {
      return this.config.dataId ? datasets[this.config.dataId] : null;
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "getVisualChannelUpdateTriggers",
    value: function getVisualChannelUpdateTriggers() {
      var _this6 = this;

      var updateTriggers = {};
      Object.values(this.visualChannels).forEach(function (visualChannel) {
        var _objectSpread11;

        // field range scale domain
        var accessor = visualChannel.accessor,
            field = visualChannel.field,
            scale = visualChannel.scale,
            domain = visualChannel.domain,
            range = visualChannel.range,
            defaultValue = visualChannel.defaultValue,
            fixed = visualChannel.fixed;
        updateTriggers[accessor] = _objectSpread((_objectSpread11 = {}, (0, _defineProperty2["default"])(_objectSpread11, field, _this6.config[field]), (0, _defineProperty2["default"])(_objectSpread11, scale, _this6.config[scale]), (0, _defineProperty2["default"])(_objectSpread11, domain, _this6.config[domain]), (0, _defineProperty2["default"])(_objectSpread11, range, _this6.config.visConfig[range]), (0, _defineProperty2["default"])(_objectSpread11, "defaultValue", typeof defaultValue === 'function' ? defaultValue(_this6.config) : defaultValue), _objectSpread11), fixed ? (0, _defineProperty2["default"])({}, fixed, _this6.config.visConfig[fixed]) : {});
      });
      return updateTriggers;
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      return dataset.getColumnLayerDomain(field, scaleType) || defaultDomain;
    }
  }, {
    key: "hasHoveredObject",
    value: function hasHoveredObject(objectInfo) {
      return this.isLayerHovered(objectInfo) && objectInfo.object ? objectInfo.object : null;
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      var _objectInfo$layer, _objectInfo$layer$pro;

      return (objectInfo === null || objectInfo === void 0 ? void 0 : objectInfo.picked) && (objectInfo === null || objectInfo === void 0 ? void 0 : (_objectInfo$layer = objectInfo.layer) === null || _objectInfo$layer === void 0 ? void 0 : (_objectInfo$layer$pro = _objectInfo$layer.props) === null || _objectInfo$layer$pro === void 0 ? void 0 : _objectInfo$layer$pro.id) === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius; // @ts-ignore

      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this7 = this;

      return props.some(function (p) {
        return !_this7.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "getBrushingExtensionProps",
    value: function getBrushingExtensionProps(interactionConfig, brushingTarget) {
      var brush = interactionConfig.brush;
      return {
        // brushing
        autoHighlight: !brush.enabled,
        brushingRadius: brush.config.size * 1000,
        brushingTarget: brushingTarget || 'source',
        brushingEnabled: brush.enabled
      };
    }
  }, {
    key: "getDefaultDeckLayerProps",
    value: function getDefaultDeckLayerProps(_ref10) {
      var idx = _ref10.idx,
          gpuFilter = _ref10.gpuFilter,
          mapState = _ref10.mapState;
      return {
        id: this.id,
        idx: idx,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT,
        pickable: true,
        wrapLongitude: true,
        parameters: {
          depthTest: Boolean(mapState.dragRotate || this.config.visConfig.enable3d)
        },
        hidden: this.config.hidden,
        // visconfig
        opacity: this.config.visConfig.opacity,
        highlightColor: this.config.highlightColor,
        // data filtering
        extensions: [dataFilterExtension],
        filterRange: gpuFilter ? gpuFilter.filterRange : undefined
      };
    }
  }, {
    key: "getDefaultHoverLayerProps",
    value: function getDefaultHoverLayerProps() {
      return {
        id: "".concat(this.id, "-hovered"),
        pickable: false,
        wrapLongitude: true,
        coordinateSystem: _core.COORDINATE_SYSTEM.LNGLAT
      };
    }
  }, {
    key: "renderTextLabelLayer",
    value: function renderTextLabelLayer(_ref11, renderOpts) {
      var _this8 = this;

      var getPosition = _ref11.getPosition,
          getPixelOffset = _ref11.getPixelOffset,
          updateTriggers = _ref11.updateTriggers,
          sharedProps = _ref11.sharedProps;
      var data = renderOpts.data,
          mapState = renderOpts.mapState;
      var textLabel = this.config.textLabel;
      return data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          var _textLabel$i$field, _textLabel$i$field2;

          accu.push(new _layers.TextLayer(_objectSpread(_objectSpread({}, sharedProps), {}, {
            id: "".concat(_this8.id, "-label-").concat((_textLabel$i$field = textLabel[i].field) === null || _textLabel$i$field === void 0 ? void 0 : _textLabel$i$field.name),
            data: data.data,
            getText: d.getText,
            getPosition: getPosition,
            characterSet: d.characterSet,
            getPixelOffset: getPixelOffset(textLabel[i]),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            getFilterValue: data.getFilterValue,
            updateTriggers: _objectSpread(_objectSpread({}, updateTriggers), {}, {
              getText: (_textLabel$i$field2 = textLabel[i].field) === null || _textLabel$i$field2 === void 0 ? void 0 : _textLabel$i$field2.name,
              getPixelOffset: _objectSpread(_objectSpread({}, updateTriggers.getRadius), {}, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            })
          })));
        }

        return accu;
      }, []);
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(dataset, getPosition) {
      // implemented in subclasses
      return [];
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {// implemented in subclasses
    }
  }, {
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      // implemented in subclasses
      return function () {
        return null;
      };
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(dataset, foundLayers) {
      return {
        props: [],
        foundLayers: foundLayers
      };
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.fieldIdx
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

var _default = Layer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTEFZRVJfSURfTEVOR1RIIiwiTUFYX1NBTVBMRV9TSVpFIiwiZGVmYXVsdERvbWFpbiIsImRhdGFGaWx0ZXJFeHRlbnNpb24iLCJEYXRhRmlsdGVyRXh0ZW5zaW9uIiwiZmlsdGVyU2l6ZSIsIk1BWF9HUFVfRklMVEVSUyIsImlkZW50aXR5IiwiZCIsImRlZmF1bHREYXRhQWNjZXNzb3IiLCJkYXRhIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJ2YWx1ZUFjY2Vzc29yIiwiTGF5ZXIiLCJwcm9wcyIsImlkIiwibWV0YSIsInZpc0NvbmZpZ1NldHRpbmdzIiwiY29uZmlnIiwiZ2V0RGVmYXVsdExheWVyQ29uZmlnIiwiY29sdW1ucyIsImdldExheWVyQ29sdW1ucyIsIkRlZmF1bHRMYXllckljb24iLCJ0eXBlIiwiY29sb3IiLCJwcm9wZXJ0eSIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJudWxsVmFsdWUiLCJOT19WQUxVRV9DT0xPUiIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJsYXQiLCJwYWlyIiwiZmllbGRQYWlyS2V5IiwibG5nIiwibGF0MCIsImxuZzAiLCJsYXQxIiwibG5nMSIsImRhdGFJZCIsImxhYmVsIiwibmV4dCIsInZhbHVlIiwiaXNWaXNpYmxlIiwiaXNDb25maWdBY3RpdmUiLCJoaWdobGlnaHRDb2xvciIsImhpZGRlbiIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yU2NhbGUiLCJTQ0FMRV9UWVBFUyIsInF1YW50aWxlIiwic2l6ZURvbWFpbiIsInNpemVTY2FsZSIsImxpbmVhciIsInNpemVGaWVsZCIsInZpc0NvbmZpZyIsInRleHRMYWJlbCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImNvbG9yVUkiLCJERUZBVUxUX0NPTE9SX1VJIiwiY29sb3JSYW5nZSIsImFuaW1hdGlvbiIsImVuYWJsZWQiLCJ2aXN1YWxDaGFubmVscyIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsImNvbHVtblBhaXJzIiwicGFydG5lcktleSIsInBhcnRuZXJGaWVsZFBhaXJLZXkiLCJ6b29tIiwiem9vbU9mZnNldCIsIk1hdGgiLCJwb3ciLCJtYXgiLCJkYXRhc2V0cyIsImZpbHRlcmVkSW5kZXgiLCJvYmplY3QiLCJjb25maWdUb0NvcHkiLCJzaGFsbG93Q29weSIsImNvbmNhdCIsInYiLCJub3RUb0NvcHkiLCJmb3JFYWNoIiwiZ3JvdXAiLCJwdXNoIiwiY3VycmVudENvbmZpZyIsImNvcGllZCIsImNvcHlMYXllckNvbmZpZyIsInVwZGF0ZUxheWVyQ29uZmlnIiwia2V5cyIsImNoYW5uZWwiLCJ2YWxpZGF0ZVZpc3VhbENoYW5uZWwiLCJpbmNsdWRlcyIsImxheWVyVmlzQ29uZmlncyIsIml0ZW0iLCJMQVlFUl9WSVNfQ09ORklHUyIsImV2ZXJ5IiwicCIsImhhc093blByb3BlcnR5IiwiY29sdW1uVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwicmVxdWlyZWRMYXllckNvbHVtbnMiLCJyZWR1Y2UiLCJhY2N1IiwidmFsaWRhdG9yIiwib3B0aW9uYWwiLCJvcHRpb25hbENvbHVtbnMiLCJuZXdDb25maWciLCJuZXdWaXNDb25maWciLCJwcm9wIiwicHJldmlvdXMiLCJjb2xvclVJUHJvcCIsImVudHJpZXMiLCJpc0NvbG9yUmFuZ2UiLCJjb2xvcnMiLCJ1cGRhdGVDb2xvclVJQnlDb2xvclJhbmdlIiwidXBkYXRlQ29sb3JSYW5nZUJ5Q29sb3JVSSIsInVwZGF0ZUN1c3RvbVBhbGV0dGUiLCJjb2xvclJhbmdlQ29uZmlnIiwiY3VzdG9tIiwiY3VzdG9tUGFsZXR0ZSIsInNob3dEcm9wZG93biIsInN0ZXBzIiwicmV2ZXJzZWQiLCJCb29sZWFuIiwic2hvdWxkVXBkYXRlIiwic29tZSIsInNhbWVHcm91cCIsIkNPTE9SX1JBTkdFUyIsImZpbHRlciIsImNyIiwiZmluZCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwibGF5ZXJEYXRhIiwiaGFzQWxsQ29sdW1ucyIsImhhc0xheWVyRGF0YSIsInJlbmRlckxheWVyIiwiQXJyYXkiLCJpc0FycmF5IiwiY29sb3JNYXAiLCJjTWFwIiwiTWFwIiwiayIsInNldCIsIlNDQUxFX0ZVTkMiLCJvcmRpbmFsIiwidW5rbm93biIsImdldCIsIlVOS05PV05fQ09MT1JfS0VZIiwiZ2V0VmlzQ2hhbm5lbFNjYWxlIiwiZGF0YUFjY2Vzc29yIiwiYXR0cmlidXRlQWNjZXNzb3JzIiwiZml4ZWQiLCJhY2Nlc3NvciIsImdldEF0dHJpYnV0ZVZhbHVlIiwic2hvdWxkR2V0U2NhbGUiLCJhcmdzIiwiaXNGaXhlZCIsInNjYWxlRnVuY3Rpb24iLCJnZXRDb2xvclNjYWxlIiwiZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZSIsIkNvbnNvbGUiLCJ3YXJuIiwiYWxsRGF0YSIsImdldFBvc2l0aW9uIiwic2FtcGxlRGF0YSIsInBvaW50cyIsImxhdEJvdW5kcyIsImxuZ0JvdW5kcyIsImRhdGFVcGRhdGVUcmlnZ2VycyIsInRyaWdnZXJDaGFuZ2VkIiwiX29sZERhdGFVcGRhdGVUcmlnZ2VycyIsImdldFZhbHVlIiwiYXR0cmlidXRlVmFsdWUiLCJBTExfRklFTERfVFlQRVMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0RGF0YSIsImRhdGFzZXRJZCIsImdldE1ldGEiLCJ0bCIsImkiLCJvbGRMYXllckRhdGEiLCJsYXllckRhdGFzZXQiLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiZ2V0RGF0YVVwZGF0ZVRyaWdnZXJzIiwiZ2V0Q2hhbmdlZFRyaWdnZXJzIiwidXBkYXRlTGF5ZXJNZXRhIiwiY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZSIsIm5ld0ZpbHRlciIsInRhYmxlIiwiZ2V0RGF0YXNldCIsInNjYWxlVHlwZSIsInVwZGF0ZWREb21haW4iLCJjYWxjdWxhdGVMYXllckRvbWFpbiIsInZhbGlkYXRlRmllbGRUeXBlIiwidmFsaWRhdGVTY2FsZSIsInZpc3VhbENoYW5uZWwiLCJzdXBwb3J0ZWRGaWVsZFR5cGVzIiwiY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMiLCJDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJGSUVMRF9PUFRTIiwiZGF0YXNldCIsInVwZGF0ZVRyaWdnZXJzIiwiZ2V0Q29sdW1uTGF5ZXJEb21haW4iLCJvYmplY3RJbmZvIiwiaXNMYXllckhvdmVyZWQiLCJwaWNrZWQiLCJsYXllciIsIm1hcFN0YXRlIiwiZml4ZWRSYWRpdXMiLCJyYWRpdXNDaGFubmVsIiwidmMiLCJ1bmRlZmluZWQiLCJyYWRpdXMiLCJnZXRab29tRmFjdG9yIiwibm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzIiwiaW50ZXJhY3Rpb25Db25maWciLCJicnVzaGluZ1RhcmdldCIsImJydXNoIiwiYXV0b0hpZ2hsaWdodCIsImJydXNoaW5nUmFkaXVzIiwiYnJ1c2hpbmdFbmFibGVkIiwiaWR4IiwiZ3B1RmlsdGVyIiwiY29vcmRpbmF0ZVN5c3RlbSIsIkNPT1JESU5BVEVfU1lTVEVNIiwiTE5HTEFUIiwicGlja2FibGUiLCJ3cmFwTG9uZ2l0dWRlIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsImRyYWdSb3RhdGUiLCJlbmFibGUzZCIsIm9wYWNpdHkiLCJleHRlbnNpb25zIiwiZmlsdGVyUmFuZ2UiLCJyZW5kZXJPcHRzIiwiZ2V0UGl4ZWxPZmZzZXQiLCJzaGFyZWRQcm9wcyIsInRleHRMYWJlbHMiLCJnZXRUZXh0IiwiVGV4dExheWVyIiwiY2hhcmFjdGVyU2V0IiwiZ2V0U2l6ZSIsImdldFRleHRBbmNob3IiLCJhbmNob3IiLCJnZXRBbGlnbm1lbnRCYXNlbGluZSIsImFsaWdubWVudCIsImdldENvbG9yIiwiZ2V0RmlsdGVyVmFsdWUiLCJnZXRSYWRpdXMiLCJmb3VuZExheWVycyIsImRlZmF1bHRGaWVsZHMiLCJhbGxGaWVsZHMiLCJyZXF1aXJlZENvbHVtbnMiLCJwcmV2IiwicmVxdWlyZWRGaWVsZHMiLCJmIiwiZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyIsImFsbEtleXMiLCJwb2ludGVycyIsImNvdW50UGVyS2V5IiwicGFpcnMiLCJpbmNyZW1lbnRQb2ludGVycyIsIm5ld1BhaXIiLCJjdXVyIiwicHRzIiwiY291bnRzIiwiYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQVVBOztBQUNBOztBQUNBOztBQU9BOztBQUVBOztBQUVBOzs7Ozs7d0RBc0JVQSxhOztBQXBCVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLGVBQWUsR0FBRyxDQUF4Qjs7QUFFUCxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF0QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLElBQUlDLCtCQUFKLENBQXdCO0FBQUNDLEVBQUFBLFVBQVUsRUFBRUM7QUFBYixDQUF4QixDQUE1Qjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBSjtBQUFBLENBQWxCOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUQsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0UsSUFBTjtBQUFBLENBQTdCOztBQUVPLElBQU1DLFlBQVksR0FBRywyQkFBVTtBQUNwQ0MsRUFBQUEsTUFBTSxFQUFFLElBRDRCO0FBRXBDQyxFQUFBQSxRQUFRLEVBQUU7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QUFDLENBQUQsQ0FBSCxLQUFXQyxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVksQ0FBMUMsRUFBNkM7QUFDM0M7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBRUQsWUFBSUQsR0FBRyxDQUFDL1EsS0FBRCxDQUFILEdBQWEsQ0FBYixHQUFpQmdSLE1BQU0sQ0FBQ2hSLEtBQUQsQ0FBM0IsRUFBb0M7QUFDbEMrUSxVQUFBQSxHQUFHLENBQUMvUSxLQUFELENBQUgsR0FBYStRLEdBQUcsQ0FBQy9RLEtBQUQsQ0FBSCxHQUFhLENBQTFCO0FBQ0EsaUJBQU8sSUFBUDtBQUNEOztBQUVEK1EsUUFBQUEsR0FBRyxDQUFDL1EsS0FBRCxDQUFILEdBQWEsQ0FBYjtBQUNBLGVBQU80USxpQkFBaUIsQ0FBQ0csR0FBRCxFQUFNQyxNQUFOLEVBQWNoUixLQUFLLEdBQUcsQ0FBdEIsQ0FBeEI7QUFDRDs7QUFFRCxhQUFPMlEsS0FBUDtBQUNEOzs7V0FFRCxrQkFBZ0JNLENBQWhCLEVBQW1CO0FBQ2pCLGFBQU8sMEJBQVNBLENBQVQsQ0FBUDtBQUNEOzs7OztlQTAxQlkzUSxLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IGtleW1pcnJvciBmcm9tICdrZXltaXJyb3InO1xuaW1wb3J0IHtEYXRhRmlsdGVyRXh0ZW5zaW9ufSBmcm9tICdAZGVjay5nbC9leHRlbnNpb25zJztcbmltcG9ydCB7Q09PUkRJTkFURV9TWVNURU19IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IHtUZXh0TGF5ZXJ9IGZyb20gJ0BkZWNrLmdsL2xheWVycyc7XG5cbmltcG9ydCBEZWZhdWx0TGF5ZXJJY29uIGZyb20gJy4vZGVmYXVsdC1sYXllci1pY29uJztcbmltcG9ydCB7ZGlmZlVwZGF0ZVRyaWdnZXJzfSBmcm9tICcuL2xheWVyLXVwZGF0ZSc7XG5cbmltcG9ydCB7XG4gIEFMTF9GSUVMRF9UWVBFUyxcbiAgTk9fVkFMVUVfQ09MT1IsXG4gIFNDQUxFX1RZUEVTLFxuICBDSEFOTkVMX1NDQUxFUyxcbiAgRklFTERfT1BUUyxcbiAgU0NBTEVfRlVOQyxcbiAgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTLFxuICBNQVhfR1BVX0ZJTFRFUlNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtDT0xPUl9SQU5HRVN9IGZyb20gJ2NvbnN0YW50cy9jb2xvci1yYW5nZXMnO1xuaW1wb3J0IHtEYXRhVml6Q29sb3JzfSBmcm9tICdjb25zdGFudHMvY3VzdG9tLWNvbG9yLXJhbmdlcyc7XG5pbXBvcnQge1xuICBMQVlFUl9WSVNfQ09ORklHUyxcbiAgREVGQVVMVF9URVhUX0xBQkVMLFxuICBERUZBVUxUX0NPTE9SX1VJLFxuICBVTktOT1dOX0NPTE9SX0tFWVxufSBmcm9tICcuL2xheWVyLWZhY3RvcnknO1xuXG5pbXBvcnQge2dlbmVyYXRlSGFzaElkLCBpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7Z2V0U2FtcGxlRGF0YSwgZ2V0TGF0TG5nQm91bmRzLCBub3ROdWxsb3JVbmRlZmluZWR9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5pbXBvcnQge2hleFRvUmdiLCBnZXRDb2xvckdyb3VwQnlOYW1lLCByZXZlcnNlQ29sb3JSYW5nZX0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9pbmRleCcpLkxheWVyfSBMYXllckNsYXNzfSAqL1xuXG4vKipcbiAqIEFwcHJveC4gbnVtYmVyIG9mIHBvaW50cyB0byBzYW1wbGUgaW4gYSBsYXJnZSBkYXRhIHNldFxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IExBWUVSX0lEX0xFTkdUSCA9IDY7XG5cbmNvbnN0IE1BWF9TQU1QTEVfU0laRSA9IDUwMDA7XG5jb25zdCBkZWZhdWx0RG9tYWluID0gWzAsIDFdO1xuY29uc3QgZGF0YUZpbHRlckV4dGVuc2lvbiA9IG5ldyBEYXRhRmlsdGVyRXh0ZW5zaW9uKHtmaWx0ZXJTaXplOiBNQVhfR1BVX0ZJTFRFUlN9KTtcbmNvbnN0IGlkZW50aXR5ID0gZCA9PiBkO1xuY29uc3QgZGVmYXVsdERhdGFBY2Nlc3NvciA9IGQgPT4gZC5kYXRhO1xuXG5leHBvcnQgY29uc3QgT1ZFUkxBWV9UWVBFID0ga2V5bWlycm9yKHtcbiAgZGVja2dsOiBudWxsLFxuICBtYXBib3hnbDogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBsYXllckNvbG9ycyA9IE9iamVjdC52YWx1ZXMoRGF0YVZpekNvbG9ycykubWFwKGhleFRvUmdiKTtcbmZ1bmN0aW9uKiBnZW5lcmF0ZUNvbG9yKCkge1xuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBsYXllckNvbG9ycy5sZW5ndGggKyAxKSB7XG4gICAgaWYgKGluZGV4ID09PSBsYXllckNvbG9ycy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICB9XG4gICAgeWllbGQgbGF5ZXJDb2xvcnNbaW5kZXgrK107XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yTWFrZXIgPSBnZW5lcmF0ZUNvbG9yKCk7XG5jb25zdCBkZWZhdWx0R2V0RmllbGRWYWx1ZSA9IChmaWVsZCwgZCkgPT4gZmllbGQudmFsdWVBY2Nlc3NvcihkKTtcblxuLyoqIEB0eXBlIHtMYXllckNsYXNzfSAqL1xuY2xhc3MgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5pZCA9IHByb3BzLmlkIHx8IGdlbmVyYXRlSGFzaElkKExBWUVSX0lEX0xFTkdUSCk7XG5cbiAgICAvLyBtZXRhXG4gICAgdGhpcy5tZXRhID0ge307XG5cbiAgICAvLyB2aXNDb25maWdTZXR0aW5nc1xuICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3MgPSB7fTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHtcbiAgICAgIGNvbHVtbnM6IHRoaXMuZ2V0TGF5ZXJDb2x1bW5zKCksXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gRGVmYXVsdExheWVySWNvbjtcbiAgfVxuXG4gIGdldCBvdmVybGF5VHlwZSgpIHtcbiAgICByZXR1cm4gT1ZFUkxBWV9UWVBFLmRlY2tnbDtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldCBvcHRpb25hbENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0IG5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcygpIHtcbiAgICByZXR1cm4gWydsYWJlbCcsICdvcGFjaXR5JywgJ3RoaWNrbmVzcycsICdpc1Zpc2libGUnLCAnaGlkZGVuJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHByb3BlcnR5OiAnY29sb3InLFxuICAgICAgICBmaWVsZDogJ2NvbG9yRmllbGQnLFxuICAgICAgICBzY2FsZTogJ2NvbG9yU2NhbGUnLFxuICAgICAgICBkb21haW46ICdjb2xvckRvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnY29sb3JSYW5nZScsXG4gICAgICAgIGtleTogJ2NvbG9yJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3IsXG4gICAgICAgIG51bGxWYWx1ZTogTk9fVkFMVUVfQ09MT1IsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnID0+IGNvbmZpZy5jb2xvclxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgcHJvcGVydHk6ICdzaXplJyxcbiAgICAgICAgZmllbGQ6ICdzaXplRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3NpemVTY2FsZScsXG4gICAgICAgIGRvbWFpbjogJ3NpemVEb21haW4nLFxuICAgICAgICByYW5nZTogJ3NpemVSYW5nZScsXG4gICAgICAgIGtleTogJ3NpemUnLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5zaXplLFxuICAgICAgICBudWxsVmFsdWU6IDAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogMVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBDb2x1bW4gcGFpcnMgbWFwcyBsYXllciBjb2x1bW4gdG8gYSBzcGVjaWZpYyBmaWVsZCBwYWlycyxcbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG51bGxcbiAgICovXG4gIGdldCBjb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qXG4gICAqIERlZmF1bHQgcG9pbnQgY29sdW1uIHBhaXJzLCBjYW4gYmUgdXNlZCBmb3IgcG9pbnQgYmFzZWQgbGF5ZXJzOiBwb2ludCwgaWNvbiBldGMuXG4gICAqL1xuICBnZXQgZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhdDoge3BhaXI6ICdsbmcnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcbiAgICAgIGxuZzoge3BhaXI6ICdsYXQnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfVxuICAgIH07XG4gIH1cblxuICAvKlxuICAgKiBEZWZhdWx0IGxpbmsgY29sdW1uIHBhaXJzLCBjYW4gYmUgdXNlZCBmb3IgbGluayBiYXNlZCBsYXllcnM6IGFyYywgbGluZSBldGNcbiAgICovXG4gIGdldCBkZWZhdWx0TGlua0NvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXQwOiB7cGFpcjogJ2xuZzAnLCBmaWVsZFBhaXJLZXk6ICdsYXQnfSxcbiAgICAgIGxuZzA6IHtwYWlyOiAnbGF0MCcsIGZpZWxkUGFpcktleTogJ2xuZyd9LFxuICAgICAgbGF0MToge3BhaXI6ICdsbmcxJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmcxOiB7cGFpcjogJ2xhdDEnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgUmVhY3QgY29tcG9uZW50IGZvciB0byByZW5kZXIgbGF5ZXIgaW5zdHJ1Y3Rpb25zIGluIGEgbW9kYWxcbiAgICogQHJldHVybnMge29iamVjdH0gLSBhbiBvYmplY3RcbiAgICogQGV4YW1wbGVcbiAgICogIHJldHVybiB7XG4gICAqICAgIGlkOiAnaWNvbkluZm8nLFxuICAgKiAgICB0ZW1wbGF0ZTogSWNvbkluZm9Nb2RhbCxcbiAgICogICAgbW9kYWxQcm9wczoge1xuICAgKiAgICAgIHRpdGxlOiAnSG93IHRvIGRyYXcgaWNvbnMnXG4gICAqICAgfTtcbiAgICogfVxuICAgKi9cbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qXG4gICAqIEdpdmVuIGEgZGF0YXNldCwgYXV0b21hdGljYWxseSBmaW5kIHByb3BzIHRvIGNyZWF0ZSBsYXllciBiYXNlZCBvbiBpdFxuICAgKiBhbmQgcmV0dXJuIHRoZSBwcm9wcyBhbmQgcHJldmlvdXMgZm91bmQgbGF5ZXJzLlxuICAgKiBCeSBkZWZhdWx0LCBubyBsYXllcnMgd2lsbCBiZSBmb3VuZFxuICAgKi9cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyhkYXRhc2V0LCBmb3VuZExheWVycykge1xuICAgIHJldHVybiB7cHJvcHM6IFtdLCBmb3VuZExheWVyc307XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBhcnJheSBvZiBwcmVzZXQgcmVxdWlyZWQgY29sdW1uIG5hbWVzXG4gICAqIGZvdW5kIGZpZWxkIHRoYXQgaGFzIHRoZSBzYW1lIG5hbWUgdG8gc2V0IGFzIGxheWVyIGNvbHVtblxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGVmYXVsdEZpZWxkc1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBhbGxGaWVsZHNcbiAgICogQHJldHVybnMge29iamVjdFtdIHwgbnVsbH0gYWxsIHBvc3NpYmxlIHJlcXVpcmVkIGxheWVyIGNvbHVtbiBwYWlyc1xuICAgKi9cbiAgc3RhdGljIGZpbmREZWZhdWx0Q29sdW1uRmllbGQoZGVmYXVsdEZpZWxkcywgYWxsRmllbGRzKSB7XG4gICAgLy8gZmluZCBhbGwgbWF0Y2hlZCBmaWVsZHMgZm9yIGVhY2ggcmVxdWlyZWQgY29sXG4gICAgY29uc3QgcmVxdWlyZWRDb2x1bW5zID0gT2JqZWN0LmtleXMoZGVmYXVsdEZpZWxkcykucmVkdWNlKChwcmV2LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gYWxsRmllbGRzLmZpbHRlcihcbiAgICAgICAgZiA9PiBmLm5hbWUgPT09IGRlZmF1bHRGaWVsZHNba2V5XSB8fCBkZWZhdWx0RmllbGRzW2tleV0uaW5jbHVkZXMoZi5uYW1lKVxuICAgICAgKTtcblxuICAgICAgcHJldltrZXldID0gcmVxdWlyZWRGaWVsZHMubGVuZ3RoXG4gICAgICAgID8gcmVxdWlyZWRGaWVsZHMubWFwKGYgPT4gKHtcbiAgICAgICAgICAgIHZhbHVlOiBmLm5hbWUsXG4gICAgICAgICAgICBmaWVsZElkeDogZi5maWVsZElkeFxuICAgICAgICAgIH0pKVxuICAgICAgICA6IG51bGw7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAoIU9iamVjdC52YWx1ZXMocmVxdWlyZWRDb2x1bW5zKS5ldmVyeShCb29sZWFuKSkge1xuICAgICAgLy8gaWYgYW55IGZpZWxkIG1pc3NpbmcsIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzKHJlcXVpcmVkQ29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyhyZXF1aXJlZENvbHVtbnMpIHtcbiAgICAvLyBmb3IgbXVsdGlwbGUgbWF0Y2hlZCBmaWVsZCBmb3Igb25lIHJlcXVpcmVkIGNvbHVtbiwgcmV0dXJuIG11bHRpcGxlXG4gICAgLy8gY29tYmluYXRpb25zLCBlLiBnLiBpZiBjb2x1bW4gYSBoYXMgMiBtYXRjaGVkLCBjb2x1bW4gYiBoYXMgMyBtYXRjaGVkXG4gICAgLy8gNiBwb3NzaWJsZSBjb2x1bW4gcGFpcnMgd2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZENvbHVtbnMpO1xuICAgIGNvbnN0IHBvaW50ZXJzID0gYWxsS2V5cy5tYXAoKGssIGkpID0+ICgoaSA9PT0gYWxsS2V5cy5sZW5ndGggLSAxID8gLTEgOiAwKSkpO1xuICAgIGNvbnN0IGNvdW50UGVyS2V5ID0gYWxsS2V5cy5tYXAoayA9PiByZXF1aXJlZENvbHVtbnNba10ubGVuZ3RoKTtcbiAgICBjb25zdCBwYWlycyA9IFtdO1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4gICAgd2hpbGUgKGluY3JlbWVudFBvaW50ZXJzKHBvaW50ZXJzLCBjb3VudFBlcktleSwgcG9pbnRlcnMubGVuZ3RoIC0gMSkpIHtcbiAgICAgIGNvbnN0IG5ld1BhaXIgPSBwb2ludGVycy5yZWR1Y2UoKHByZXYsIGN1dXIsIGkpID0+IHtcbiAgICAgICAgcHJldlthbGxLZXlzW2ldXSA9IHJlcXVpcmVkQ29sdW1uc1thbGxLZXlzW2ldXVtjdXVyXTtcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIHBhaXJzLnB1c2gobmV3UGFpcik7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbG9vcC1mdW5jICovXG5cbiAgICAvLyByZWN1cnNpdmVseSBpbmNyZW1lbnQgcG9pbnRlcnNcbiAgICBmdW5jdGlvbiBpbmNyZW1lbnRQb2ludGVycyhwdHMsIGNvdW50cywgaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBwdHNbMF0gPT09IGNvdW50c1swXSAtIDEpIHtcbiAgICAgICAgLy8gbm90aGluZyB0byBpbmNyZW1lbnRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHRzW2luZGV4XSArIDEgPCBjb3VudHNbaW5kZXhdKSB7XG4gICAgICAgIHB0c1tpbmRleF0gPSBwdHNbaW5kZXhdICsgMTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHB0c1tpbmRleF0gPSAwO1xuICAgICAgcmV0dXJuIGluY3JlbWVudFBvaW50ZXJzKHB0cywgY291bnRzLCBpbmRleCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBwYWlycztcbiAgfVxuXG4gIHN0YXRpYyBoZXhUb1JnYihjKSB7XG4gICAgcmV0dXJuIGhleFRvUmdiKGMpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YUlkOiBwcm9wcy5kYXRhSWQgfHwgbnVsbCxcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCB8fCAnbmV3IGxheWVyJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5jb2xvciB8fCBjb2xvck1ha2VyLm5leHQoKS52YWx1ZSxcbiAgICAgIGNvbHVtbnM6IHByb3BzLmNvbHVtbnMgfHwgbnVsbCxcbiAgICAgIGlzVmlzaWJsZTogcHJvcHMuaXNWaXNpYmxlIHx8IGZhbHNlLFxuICAgICAgaXNDb25maWdBY3RpdmU6IHByb3BzLmlzQ29uZmlnQWN0aXZlIHx8IGZhbHNlLFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHByb3BzLmhpZ2hsaWdodENvbG9yIHx8IFsyNTIsIDI0MiwgMjYsIDI1NV0sXG4gICAgICBoaWRkZW46IHByb3BzLmhpZGRlbiB8fCBmYWxzZSxcblxuICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpcyBpbnRvIHNlcGFyYXRlIHZpc3VhbCBDaGFubmVsIGNvbmZpZ1xuICAgICAgLy8gY29sb3IgYnkgZmllbGQsIGRvbWFpbiBpcyBzZXQgYnkgZmlsdGVycywgZmllbGQsIHNjYWxlIHR5cGVcbiAgICAgIGNvbG9yRmllbGQ6IG51bGwsXG4gICAgICBjb2xvckRvbWFpbjogWzAsIDFdLFxuICAgICAgY29sb3JTY2FsZTogU0NBTEVfVFlQRVMucXVhbnRpbGUsXG5cbiAgICAgIC8vIGNvbG9yIGJ5IHNpemUsIGRvbWFpbiBpcyBzZXQgYnkgZmlsdGVycywgZmllbGQsIHNjYWxlIHR5cGVcbiAgICAgIHNpemVEb21haW46IFswLCAxXSxcbiAgICAgIHNpemVTY2FsZTogU0NBTEVfVFlQRVMubGluZWFyLFxuICAgICAgc2l6ZUZpZWxkOiBudWxsLFxuXG4gICAgICB2aXNDb25maWc6IHt9LFxuXG4gICAgICB0ZXh0TGFiZWw6IFtERUZBVUxUX1RFWFRfTEFCRUxdLFxuXG4gICAgICBjb2xvclVJOiB7XG4gICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SX1VJLFxuICAgICAgICBjb2xvclJhbmdlOiBERUZBVUxUX0NPTE9SX1VJXG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7ZW5hYmxlZDogZmFsc2V9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRlc2NyaXB0aW9uIG9mIGEgdmlzdWFsQ2hhbm5lbCBjb25maWdcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcmV0dXJucyB7e2xhYmVsOiBzdHJpbmcsIG1lYXN1cmU6IChzdHJpbmd8c3RyaW5nKX19XG4gICAqL1xuICBnZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oa2V5KSB7XG4gICAgLy8gZS5nLiBsYWJlbDogQ29sb3IsIG1lYXN1cmU6IFZlaGljbGUgVHlwZVxuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogdGhpcy52aXNDb25maWdTZXR0aW5nc1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0ucmFuZ2VdLmxhYmVsLFxuICAgICAgbWVhc3VyZTogdGhpcy5jb25maWdbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXVxuICAgICAgICA/IHRoaXMuY29uZmlnW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0ubmFtZVxuICAgICAgICA6IHRoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5kZWZhdWx0TWVhc3VyZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGEgZmllbGQgdG8gbGF5ZXIgY29sdW1uLCByZXR1cm4gY29sdW1uIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5IC0gQ29sdW1uIEtleVxuICAgKiBAcGFyYW0gZmllbGQgLSBTZWxlY3RlZCBmaWVsZFxuICAgKiBAcmV0dXJucyB7e319IC0gQ29sdW1uIGNvbmZpZ1xuICAgKi9cbiAgYXNzaWduQ29sdW1uKGtleSwgZmllbGQpIHtcbiAgICAvLyBmaWVsZCB2YWx1ZSBjb3VsZCBiZSBudWxsIGZvciBvcHRpb25hbCBjb2x1bW5zXG4gICAgY29uc3QgdXBkYXRlID0gZmllbGRcbiAgICAgID8ge1xuICAgICAgICAgIHZhbHVlOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIGZpZWxkSWR4OiBmaWVsZC5maWVsZElkeFxuICAgICAgICB9XG4gICAgICA6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgW2tleV06IHtcbiAgICAgICAgLi4udGhpcy5jb25maWcuY29sdW1uc1trZXldLFxuICAgICAgICAuLi51cGRhdGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFzc2lnbiBhIGZpZWxkIHBhaXIgdG8gY29sdW1uIGNvbmZpZywgcmV0dXJuIGNvbHVtbiBjb25maWdcbiAgICogQHBhcmFtIGtleSAtIENvbHVtbiBLZXlcbiAgICogQHBhcmFtIHBhaXIgLSBmaWVsZCBQYWlyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gQ29sdW1uIGNvbmZpZ1xuICAgKi9cbiAgYXNzaWduQ29sdW1uUGFpcnMoa2V5LCBwYWlyKSB7XG4gICAgaWYgKCF0aGlzLmNvbHVtblBhaXJzIHx8ICF0aGlzLmNvbHVtblBhaXJzPy5ba2V5XSkge1xuICAgICAgLy8gc2hvdWxkIG5vdCBlbmQgaW4gdGhpcyBzdGF0ZVxuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29uc3Qge3BhaXI6IHBhcnRuZXJLZXksIGZpZWxkUGFpcktleX0gPSB0aGlzLmNvbHVtblBhaXJzPy5ba2V5XTtcbiAgICBjb25zdCB7ZmllbGRQYWlyS2V5OiBwYXJ0bmVyRmllbGRQYWlyS2V5fSA9IHRoaXMuY29sdW1uUGFpcnM/LltwYXJ0bmVyS2V5XTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgW2tleV06IHBhaXJbZmllbGRQYWlyS2V5XSxcbiAgICAgIFtwYXJ0bmVyS2V5XTogcGFpcltwYXJ0bmVyRmllbGRQYWlyS2V5XVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGEgcmFkaXVzIHpvb20gbXVsdGlwbGllciB0byByZW5kZXIgcG9pbnRzLCBzbyB0aGV5IGFyZSB2aXNpYmxlIGluIGFsbCB6b29tIGxldmVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtYXBTdGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWFwU3RhdGUuem9vbSAtIGFjdHVhbCB6b29tXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgdm9pZH0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldFpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCgxNCAtIHpvb20gKyB6b29tT2Zmc2V0LCAwKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGEgZWxldmF0aW9uIHpvb20gbXVsdGlwbGllciB0byByZW5kZXIgcG9pbnRzLCBzbyB0aGV5IGFyZSB2aXNpYmxlIGluIGFsbCB6b29tIGxldmVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtYXBTdGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWFwU3RhdGUuem9vbSAtIGFjdHVhbCB6b29tXG4gICAqIEBwYXJhbSB7bnVtYmVyIHwgdm9pZH0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEVsZXZhdGlvblpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCg4IC0gem9vbSArIHpvb21PZmZzZXQsIDApKTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgZmlsdGVyZWRJbmRleCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldEhvdmVyRGF0YShvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIGJ5IGRlZmF1bHQsIGVhY2ggZW50cnkgb2YgbGF5ZXJEYXRhIHNob3VsZCBoYXZlIGEgZGF0YSBwcm9wZXJ0eSBwb2ludHNcbiAgICAvLyB0byB0aGUgb3JpZ2luYWwgaXRlbSBpbiB0aGUgYWxsRGF0YSBhcnJheVxuICAgIC8vIGVhY2ggbGF5ZXIgY2FuIGltcGxlbWVudCBpdHMgb3duIGdldEhvdmVyRGF0YSBtZXRob2RcbiAgICByZXR1cm4gb2JqZWN0LmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiBjaGFuZ2UgbGF5ZXIgdHlwZSwgdHJ5IHRvIGNvcHkgb3ZlciBsYXllciBjb25maWdzIGFzIG11Y2ggYXMgcG9zc2libGVcbiAgICogQHBhcmFtIGNvbmZpZ1RvQ29weSAtIGNvbmZpZyB0byBjb3B5IG92ZXJcbiAgICogQHBhcmFtIHZpc0NvbmZpZ1NldHRpbmdzIC0gdmlzQ29uZmlnIHNldHRpbmdzIG9mIGNvbmZpZyB0byBjb3B5XG4gICAqL1xuICBhc3NpZ25Db25maWdUb0xheWVyKGNvbmZpZ1RvQ29weSwgdmlzQ29uZmlnU2V0dGluZ3MpIHtcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIHZpc3VhbENoYW5uZWwgZmllbGRcbiAgICAvLyBkb24ndCBkZWVwIG1lcmdlIGNvbG9yIHJhbmdlLCByZXZlcnNlZDogaXMgbm90IGEga2V5IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBzaGFsbG93Q29weSA9IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ10uY29uY2F0KFxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmZpZWxkKVxuICAgICk7XG5cbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgZG9tYWluIGFuZCBhbmltYXRpb25cbiAgICBjb25zdCBub3RUb0NvcHkgPSBbJ2FuaW1hdGlvbiddLmNvbmNhdChPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLm1hcCh2ID0+IHYuZG9tYWluKSk7XG4gICAgLy8gaWYgcmFuZ2UgaXMgZm9yIHRoZSBzYW1lIHByb3BlcnR5IGdyb3VwIGNvcHkgaXQsIG90aGVyd2lzZSwgbm90IHRvIGNvcHlcbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2godiA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbmZpZ1RvQ29weS52aXNDb25maWdbdi5yYW5nZV0gJiZcbiAgICAgICAgdGhpcy52aXNDb25maWdTZXR0aW5nc1t2LnJhbmdlXSAmJlxuICAgICAgICB2aXNDb25maWdTZXR0aW5nc1t2LnJhbmdlXS5ncm91cCAhPT0gdGhpcy52aXNDb25maWdTZXR0aW5nc1t2LnJhbmdlXS5ncm91cFxuICAgICAgKSB7XG4gICAgICAgIG5vdFRvQ29weS5wdXNoKHYucmFuZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZG9uJ3QgY29weSBvdmVyIHZpc3VhbENoYW5uZWwgcmFuZ2VcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgY29waWVkID0gdGhpcy5jb3B5TGF5ZXJDb25maWcoY3VycmVudENvbmZpZywgY29uZmlnVG9Db3B5LCB7XG4gICAgICBzaGFsbG93Q29weSxcbiAgICAgIG5vdFRvQ29weVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyhjb3BpZWQpO1xuICAgIC8vIHZhbGlkYXRlIHZpc3VhbENoYW5uZWwgZmllbGQgdHlwZSBhbmQgc2NhbGUgdHlwZXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKGNoYW5uZWwgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBSZWN1cnNpdmVseSBjb3B5IGNvbmZpZyBvdmVyIHRvIGFuIGVtcHR5IGxheWVyXG4gICAqIHdoZW4gcmVjZWl2ZWQgc2F2ZWQgY29uZmlnLCBvciBjb3B5IGNvbmZpZyBvdmVyIGZyb20gYSBkaWZmZXJlbnQgbGF5ZXIgdHlwZVxuICAgKiBtYWtlIHN1cmUgdG8gb25seSBjb3B5IG92ZXIgdmFsdWUgdG8gZXhpc3Rpbmcga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gY3VycmVudENvbmZpZyAtIGV4aXN0aW5nIGNvbmZpZyB0byBiZSBvdmVycmlkZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnVG9Db3B5IC0gbmV3IENvbmZpZyB0byBjb3B5IG92ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhbGxvd0NvcHkgLSBhcnJheSBvZiBwcm9wZXJ0aWVzIHRvIG5vdCB0byBiZSBkZWVwIGNvcGllZFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBub3RUb0NvcHkgLSBhcnJheSBvZiBwcm9wZXJ0aWVzIG5vdCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gY29waWVkIGNvbmZpZ1xuICAgKi9cbiAgY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWcsIGNvbmZpZ1RvQ29weSwge3NoYWxsb3dDb3B5ID0gW10sIG5vdFRvQ29weSA9IFtdfSA9IHt9KSB7XG4gICAgY29uc3QgY29waWVkID0ge307XG4gICAgT2JqZWN0LmtleXMoY3VycmVudENvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpc1BsYWluT2JqZWN0KGN1cnJlbnRDb25maWdba2V5XSkgJiZcbiAgICAgICAgaXNQbGFpbk9iamVjdChjb25maWdUb0NvcHlba2V5XSkgJiZcbiAgICAgICAgIXNoYWxsb3dDb3B5LmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgIW5vdFRvQ29weS5pbmNsdWRlcyhrZXkpXG4gICAgICApIHtcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgYXNzaWduIG9iamVjdCB2YWx1ZVxuICAgICAgICBjb3BpZWRba2V5XSA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWdba2V5XSwgY29uZmlnVG9Db3B5W2tleV0sIHtcbiAgICAgICAgICBzaGFsbG93Q29weSxcbiAgICAgICAgICBub3RUb0NvcHlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5vdE51bGxvclVuZGVmaW5lZChjb25maWdUb0NvcHlba2V5XSkgJiYgIW5vdFRvQ29weS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIC8vIGNvcHlcbiAgICAgICAgY29waWVkW2tleV0gPSBjb25maWdUb0NvcHlba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGtlZXAgZXhpc3RpbmdcbiAgICAgICAgY29waWVkW2tleV0gPSBjdXJyZW50Q29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29waWVkO1xuICB9XG5cbiAgcmVnaXN0ZXJWaXNDb25maWcobGF5ZXJWaXNDb25maWdzKSB7XG4gICAgT2JqZWN0LmtleXMobGF5ZXJWaXNDb25maWdzKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyAmJiBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dKSB7XG4gICAgICAgIC8vIGlmIGFzc2lnbmVkIG9uZSBvZiBkZWZhdWx0IExBWUVSX0NPTkZJR1NcbiAgICAgICAgdGhpcy5jb25maWcudmlzQ29uZmlnW2l0ZW1dID0gTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbaXRlbV0gPSBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dO1xuICAgICAgfSBlbHNlIGlmIChbJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJ10uZXZlcnkocCA9PiBsYXllclZpc0NvbmZpZ3NbaXRlbV0uaGFzT3duUHJvcGVydHkocCkpKSB7XG4gICAgICAgIC8vIGlmIHByb3ZpZGVkIGN1c3RvbWl6ZWQgdmlzQ29uZmlnLCBhbmQgaGFzIHR5cGUgJiYgZGVmYXVsdFZhbHVlXG4gICAgICAgIC8vIFRPRE86IGZ1cnRoZXIgY2hlY2sgaWYgY3VzdG9taXplZCB2aXNDb25maWcgaXMgdmFsaWRcbiAgICAgICAgdGhpcy5jb25maWcudmlzQ29uZmlnW2l0ZW1dID0gbGF5ZXJWaXNDb25maWdzW2l0ZW1dLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy52aXNDb25maWdTZXR0aW5nc1tpdGVtXSA9IGxheWVyVmlzQ29uZmlnc1tpdGVtXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldExheWVyQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bW5WYWxpZGF0b3JzID0gdGhpcy5jb2x1bW5WYWxpZGF0b3JzIHx8IHt9O1xuICAgIGNvbnN0IHJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZExheWVyQ29sdW1ucy5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XTogY29sdW1uVmFsaWRhdG9yc1trZXldXG4gICAgICAgICAgPyB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMSwgdmFsaWRhdG9yOiBjb2x1bW5WYWxpZGF0b3JzW2tleV19XG4gICAgICAgICAgOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuICAgIGNvbnN0IG9wdGlvbmFsID0gdGhpcy5vcHRpb25hbENvbHVtbnMucmVkdWNlKFxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgW2tleV06IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuXG4gICAgcmV0dXJuIHsuLi5yZXF1aXJlZCwgLi4ub3B0aW9uYWx9O1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJDb25maWcobmV3Q29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLm5ld0NvbmZpZ307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVMYXllclZpc0NvbmZpZyhuZXdWaXNDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZy52aXNDb25maWcgPSB7Li4udGhpcy5jb25maWcudmlzQ29uZmlnLCAuLi5uZXdWaXNDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJDb2xvclVJKHByb3AsIG5ld0NvbmZpZykge1xuICAgIGNvbnN0IHtjb2xvclVJOiBwcmV2aW91cywgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KG5ld0NvbmZpZykgfHwgdHlwZW9mIHByb3AgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvclVJUHJvcCA9IE9iamVjdC5lbnRyaWVzKG5ld0NvbmZpZykucmVkdWNlKChhY2N1LCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiBpc1BsYWluT2JqZWN0KGFjY3Vba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWx1ZSkgPyB7Li4uYWNjdVtrZXldLCAuLi52YWx1ZX0gOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LCBwcmV2aW91c1twcm9wXSB8fCBERUZBVUxUX0NPTE9SX1VJKTtcblxuICAgIGNvbnN0IGNvbG9yVUkgPSB7XG4gICAgICAuLi5wcmV2aW91cyxcbiAgICAgIFtwcm9wXTogY29sb3JVSVByb3BcbiAgICB9O1xuXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7Y29sb3JVSX0pO1xuICAgIC8vIGlmIGNvbG9yVUlbcHJvcF0gaXMgY29sb3JSYW5nZVxuICAgIGNvbnN0IGlzQ29sb3JSYW5nZSA9IHZpc0NvbmZpZ1twcm9wXSAmJiB2aXNDb25maWdbcHJvcF0uY29sb3JzO1xuXG4gICAgaWYgKGlzQ29sb3JSYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVDb2xvclVJQnlDb2xvclJhbmdlKG5ld0NvbmZpZywgcHJvcCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbG9yUmFuZ2VCeUNvbG9yVUkobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1c3RvbVBhbGV0dGUobmV3Q29uZmlnLCBwcmV2aW91cywgcHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGVDdXN0b21QYWxldHRlKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApIHtcbiAgICBpZiAoIW5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnIHx8ICFuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZy5jdXN0b20pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7Y29sb3JVSSwgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgaWYgKCF2aXNDb25maWdbcHJvcF0pIHJldHVybjtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHZpc0NvbmZpZ1twcm9wXTtcbiAgICBjb25zdCBjdXN0b21QYWxldHRlID0ge1xuICAgICAgLi4uY29sb3JVSVtwcm9wXS5jdXN0b21QYWxldHRlLFxuICAgICAgbmFtZTogJ0N1c3RvbSBQYWxldHRlJyxcbiAgICAgIGNvbG9yczogWy4uLmNvbG9yc11cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgICAgY29sb3JVSToge1xuICAgICAgICAuLi5jb2xvclVJLFxuICAgICAgICBbcHJvcF06IHtcbiAgICAgICAgICAuLi5jb2xvclVJW3Byb3BdLFxuICAgICAgICAgIGN1c3RvbVBhbGV0dGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBpZiBvcGVuIGRyb3Bkb3duIGFuZCBwcm9wIGlzIGNvbG9yIHJhbmdlXG4gICAqIEF1dG9tYXRpY2FsbHkgc2V0IGNvbG9yUmFuZ2VDb25maWcncyBzdGVwIGFuZCByZXZlcnNlZFxuICAgKiBAcGFyYW0geyp9IG5ld0NvbmZpZ1xuICAgKiBAcGFyYW0geyp9IHByb3BcbiAgICovXG4gIHVwZGF0ZUNvbG9yVUlCeUNvbG9yUmFuZ2UobmV3Q29uZmlnLCBwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBuZXdDb25maWcuc2hvd0Ryb3Bkb3duICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXG4gICAgY29uc3Qge2NvbG9yVUksIHZpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgIGNvbG9yVUk6IHtcbiAgICAgICAgLi4uY29sb3JVSSxcbiAgICAgICAgW3Byb3BdOiB7XG4gICAgICAgICAgLi4uY29sb3JVSVtwcm9wXSxcbiAgICAgICAgICBjb2xvclJhbmdlQ29uZmlnOiB7XG4gICAgICAgICAgICAuLi5jb2xvclVJW3Byb3BdLmNvbG9yUmFuZ2VDb25maWcsXG4gICAgICAgICAgICBzdGVwczogdmlzQ29uZmlnW3Byb3BdLmNvbG9ycy5sZW5ndGgsXG4gICAgICAgICAgICByZXZlcnNlZDogQm9vbGVhbih2aXNDb25maWdbcHJvcF0ucmV2ZXJzZWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVDb2xvclJhbmdlQnlDb2xvclVJKG5ld0NvbmZpZywgcHJldmlvdXMsIHByb3ApIHtcbiAgICAvLyBvbmx5IHVwZGF0ZSBjb2xvclJhbmdlIGlmIGNoYW5nZXMgaW4gVUkgaXMgbWFkZSB0byAncmV2ZXJzZWQnLCAnc3RlcHMnIG9yIHN0ZXBzXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID1cbiAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnICYmXG4gICAgICBbJ3JldmVyc2VkJywgJ3N0ZXBzJ10uc29tZShcbiAgICAgICAga2V5ID0+XG4gICAgICAgICAgbmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJlxuICAgICAgICAgIG5ld0NvbmZpZy5jb2xvclJhbmdlQ29uZmlnW2tleV0gIT09XG4gICAgICAgICAgICAocHJldmlvdXNbcHJvcF0gfHwgREVGQVVMVF9DT0xPUl9VSSkuY29sb3JSYW5nZUNvbmZpZ1trZXldXG4gICAgICApO1xuICAgIGlmICghc2hvdWxkVXBkYXRlKSByZXR1cm47XG5cbiAgICBjb25zdCB7Y29sb3JVSSwgdmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IHtzdGVwcywgcmV2ZXJzZWR9ID0gY29sb3JVSVtwcm9wXS5jb2xvclJhbmdlQ29uZmlnO1xuICAgIGNvbnN0IGNvbG9yUmFuZ2UgPSB2aXNDb25maWdbcHJvcF07XG4gICAgLy8gZmluZCBiYXNlZCBvbiBzdGVwIG9yIHJldmVyc2VkXG4gICAgbGV0IHVwZGF0ZTtcbiAgICBpZiAobmV3Q29uZmlnLmNvbG9yUmFuZ2VDb25maWcuaGFzT3duUHJvcGVydHkoJ3N0ZXBzJykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZ2V0Q29sb3JHcm91cEJ5TmFtZShjb2xvclJhbmdlKTtcblxuICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IHNhbWVHcm91cCA9IENPTE9SX1JBTkdFUy5maWx0ZXIoY3IgPT4gZ2V0Q29sb3JHcm91cEJ5TmFtZShjcikgPT09IGdyb3VwKTtcblxuICAgICAgICB1cGRhdGUgPSBzYW1lR3JvdXAuZmluZChjciA9PiBjci5jb2xvcnMubGVuZ3RoID09PSBzdGVwcyk7XG5cbiAgICAgICAgaWYgKHVwZGF0ZSAmJiBjb2xvclJhbmdlLnJldmVyc2VkKSB7XG4gICAgICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UodHJ1ZSwgdXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdDb25maWcuY29sb3JSYW5nZUNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgncmV2ZXJzZWQnKSkge1xuICAgICAgdXBkYXRlID0gcmV2ZXJzZUNvbG9yUmFuZ2UocmV2ZXJzZWQsIHVwZGF0ZSB8fCBjb2xvclJhbmdlKTtcbiAgICB9XG5cbiAgICBpZiAodXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtbcHJvcF06IHVwZGF0ZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGxheWVyIGhhcyBhbGwgY29sdW1uc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0geWVzIG9yIG5vXG4gICAqL1xuICBoYXNBbGxDb2x1bW5zKCkge1xuICAgIGNvbnN0IHtjb2x1bW5zfSA9IHRoaXMuY29uZmlnO1xuICAgIHJldHVybiAoXG4gICAgICAoY29sdW1ucyAmJlxuICAgICAgT2JqZWN0LnZhbHVlcyhjb2x1bW5zKS5ldmVyeSh2ID0+IHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odi5vcHRpb25hbCB8fCAodi52YWx1ZSAmJiB2LmZpZWxkSWR4ID4gLTEpKTtcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5IHwgT2JqZWN0fSBsYXllckRhdGFcbiAgICogQHJldHVybnMge2Jvb2xlYW59IHllcyBvciBub1xuICAgKi9cbiAgaGFzTGF5ZXJEYXRhKGxheWVyRGF0YSkge1xuICAgIGlmICghbGF5ZXJEYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBCb29sZWFuKGxheWVyRGF0YS5kYXRhICYmIGxheWVyRGF0YS5kYXRhLmxlbmd0aCk7XG4gIH1cblxuICBpc1ZhbGlkVG9TYXZlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgJiYgdGhpcy5oYXNBbGxDb2x1bW5zKCk7XG4gIH1cblxuICBzaG91bGRSZW5kZXJMYXllcihkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLnR5cGUgJiZcbiAgICAgIHRoaXMuY29uZmlnLmlzVmlzaWJsZSAmJlxuICAgICAgdGhpcy5oYXNBbGxDb2x1bW5zKCkgJiZcbiAgICAgIHRoaXMuaGFzTGF5ZXJEYXRhKGRhdGEpICYmXG4gICAgICB0eXBlb2YgdGhpcy5yZW5kZXJMYXllciA9PT0gJ2Z1bmN0aW9uJylcbiAgICApO1xuICB9XG5cbiAgZ2V0Q29sb3JTY2FsZShjb2xvclNjYWxlLCBjb2xvckRvbWFpbiwgY29sb3JSYW5nZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbG9yUmFuZ2UuY29sb3JNYXApKSB7XG4gICAgICBjb25zdCBjTWFwID0gbmV3IE1hcCgpO1xuICAgICAgY29sb3JSYW5nZS5jb2xvck1hcC5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgICAgY01hcC5zZXQoaywgdHlwZW9mIHYgPT09ICdzdHJpbmcnID8gaGV4VG9SZ2IodikgOiB2KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzY2FsZSA9IFNDQUxFX0ZVTkNbU0NBTEVfVFlQRVMub3JkaW5hbF0oKVxuICAgICAgICAuZG9tYWluKGNNYXAua2V5cygpKVxuICAgICAgICAucmFuZ2UoY01hcC52YWx1ZXMoKSlcbiAgICAgICAgLnVua25vd24oY01hcC5nZXQoVU5LTk9XTl9DT0xPUl9LRVkpIHx8IE5PX1ZBTFVFX0NPTE9SKTtcbiAgICAgIHJldHVybiBzY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoY29sb3JTY2FsZSwgY29sb3JEb21haW4sIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYikpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcHBpbmcgZnJvbSB2aXN1YWwgY2hhbm5lbHMgdG8gZGVjay5nbCBhY2Nlc29yc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkYXRhQWNjZXNzb3IgLSBhY2Nlc3Mga2VwbGVyLmdsIGxheWVyIGRhdGEgZnJvbSBkZWNrLmdsIGxheWVyXG4gICAqIEByZXR1cm4ge09iamVjdH0gYXR0cmlidXRlQWNjZXNzb3JzIC0gZGVjay5nbCBsYXllciBhdHRyaWJ1dGUgYWNjZXNzb3JzXG4gICAqL1xuICBnZXRBdHRyaWJ1dGVBY2Nlc3NvcnMoZGF0YUFjY2Vzc29yID0gZGVmYXVsdERhdGFBY2Nlc3Nvcikge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUFjY2Vzc29ycyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaChjaGFubmVsID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGZpeGVkLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgZG9tYWluLFxuICAgICAgICByYW5nZSxcbiAgICAgICAgYWNjZXNzb3IsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgZ2V0QXR0cmlidXRlVmFsdWUsXG4gICAgICAgIG51bGxWYWx1ZSxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZVxuICAgICAgfSA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG5cbiAgICAgIGNvbnN0IHNob3VsZEdldFNjYWxlID0gdGhpcy5jb25maWdbZmllbGRdO1xuXG4gICAgICBpZiAoc2hvdWxkR2V0U2NhbGUpIHtcbiAgICAgICAgY29uc3QgYXJncyA9IFt0aGlzLmNvbmZpZ1tzY2FsZV0sIHRoaXMuY29uZmlnW2RvbWFpbl0sIHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tyYW5nZV1dO1xuICAgICAgICBjb25zdCBpc0ZpeGVkID0gZml4ZWQgJiYgdGhpcy5jb25maWcudmlzQ29uZmlnW2ZpeGVkXTtcblxuICAgICAgICBjb25zdCBzY2FsZUZ1bmN0aW9uID1cbiAgICAgICAgICBjaGFubmVsU2NhbGVUeXBlID09PSBDSEFOTkVMX1NDQUxFUy5jb2xvclxuICAgICAgICAgICAgPyB0aGlzLmdldENvbG9yU2NhbGUoLi4uYXJncylcbiAgICAgICAgICAgIDogdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoLi4uYXJncywgaXNGaXhlZCk7XG5cbiAgICAgICAgYXR0cmlidXRlQWNjZXNzb3JzW2FjY2Vzc29yXSA9IGQgPT5cbiAgICAgICAgICB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoXG4gICAgICAgICAgICBzY2FsZUZ1bmN0aW9uLFxuICAgICAgICAgICAgZGF0YUFjY2Vzc29yKGQpLFxuICAgICAgICAgICAgdGhpcy5jb25maWdbZmllbGRdLFxuICAgICAgICAgICAgbnVsbFZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdldEF0dHJpYnV0ZVZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF0dHJpYnV0ZUFjY2Vzc29yc1thY2Nlc3Nvcl0gPSBnZXRBdHRyaWJ1dGVWYWx1ZSh0aGlzLmNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVBY2Nlc3NvcnNbYWNjZXNzb3JdID1cbiAgICAgICAgICB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhdHRyaWJ1dGVBY2Nlc3NvcnNbYWNjZXNzb3JdKSB7XG4gICAgICAgIENvbnNvbGUud2FybihgRmFpbGVkIHRvIHByb3ZpZGUgYWNjZXNzbyBmdW5jdGlvbiBmb3IgJHthY2Nlc3NvciB8fCBjaGFubmVsfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZUFjY2Vzc29ycztcbiAgfVxuXG4gIGdldFZpc0NoYW5uZWxTY2FsZShzY2FsZSwgZG9tYWluLCByYW5nZSwgZml4ZWQpIHtcbiAgICByZXR1cm4gU0NBTEVfRlVOQ1tmaXhlZCA/ICdsaW5lYXInIDogc2NhbGVdKClcbiAgICAgIC5kb21haW4oZG9tYWluKVxuICAgICAgLnJhbmdlKGZpeGVkID8gZG9tYWluIDogcmFuZ2UpO1xuICB9XG5cbiAgZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGdldFBvc2l0aW9uID0gaWRlbnRpdHkpIHtcbiAgICAvLyBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCB0aGUgZW50aXJlIGRhdGFzZXRcbiAgICAvLyBnZXQgYSBzYW1wbGUgb2YgZGF0YSB0byBjYWxjdWxhdGUgYm91bmRzXG4gICAgY29uc3Qgc2FtcGxlRGF0YSA9XG4gICAgICBhbGxEYXRhLmxlbmd0aCA+IE1BWF9TQU1QTEVfU0laRSA/IGdldFNhbXBsZURhdGEoYWxsRGF0YSwgTUFYX1NBTVBMRV9TSVpFKSA6IGFsbERhdGE7XG4gICAgY29uc3QgcG9pbnRzID0gc2FtcGxlRGF0YS5tYXAoZ2V0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgbGF0Qm91bmRzID0gZ2V0TGF0TG5nQm91bmRzKHBvaW50cywgMSwgWy05MCwgOTBdKTtcbiAgICBjb25zdCBsbmdCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAwLCBbLTE4MCwgMTgwXSk7XG5cbiAgICBpZiAoIWxhdEJvdW5kcyB8fCAhbG5nQm91bmRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2xuZ0JvdW5kc1swXSwgbGF0Qm91bmRzWzBdLCBsbmdCb3VuZHNbMV0sIGxhdEJvdW5kc1sxXV07XG4gIH1cblxuICBnZXRDaGFuZ2VkVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzKSB7XG4gICAgY29uc3QgdHJpZ2dlckNoYW5nZWQgPSBkaWZmVXBkYXRlVHJpZ2dlcnMoZGF0YVVwZGF0ZVRyaWdnZXJzLCB0aGlzLl9vbGREYXRhVXBkYXRlVHJpZ2dlcnMpO1xuICAgIHRoaXMuX29sZERhdGFVcGRhdGVUcmlnZ2VycyA9IGRhdGFVcGRhdGVUcmlnZ2VycztcblxuICAgIHJldHVybiB0cmlnZ2VyQ2hhbmdlZDtcbiAgfVxuXG4gIGdldEVuY29kZWRDaGFubmVsVmFsdWUoXG4gICAgc2NhbGUsXG4gICAgZGF0YSxcbiAgICBmaWVsZCxcbiAgICBudWxsVmFsdWUgPSBOT19WQUxVRV9DT0xPUixcbiAgICBnZXRWYWx1ZSA9IGRlZmF1bHRHZXRGaWVsZFZhbHVlXG4gICkge1xuICAgIGNvbnN0IHt0eXBlfSA9IGZpZWxkO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZmllbGQsIGRhdGEpO1xuXG4gICAgaWYgKCFub3ROdWxsb3JVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xuICAgICAgLy8gc2hvdWxkbid0IG5lZWQgdG8gY29udmVydCBoZXJlXG4gICAgICAvLyBzY2FsZSBGdW5jdGlvbiBzaG91bGQgdGFrZSBjYXJlIG9mIGl0XG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKG5ldyBEYXRlKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc2NhbGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghbm90TnVsbG9yVW5kZWZpbmVkKGF0dHJpYnV0ZVZhbHVlKSkge1xuICAgICAgYXR0cmlidXRlVmFsdWUgPSBudWxsVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICB9XG5cbiAgdXBkYXRlTWV0YShtZXRhKSB7XG4gICAgdGhpcy5tZXRhID0gey4uLnRoaXMubWV0YSwgLi4ubWV0YX07XG4gIH1cblxuICBnZXREYXRhVXBkYXRlVHJpZ2dlcnMoe2ZpbHRlcmVkSW5kZXgsIGlkfSkge1xuICAgIGNvbnN0IHtjb2x1bW5zfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldERhdGE6IHtkYXRhc2V0SWQ6IGlkLCBjb2x1bW5zLCBmaWx0ZXJlZEluZGV4fSxcbiAgICAgIGdldE1ldGE6IHtkYXRhc2V0SWQ6IGlkLCBjb2x1bW5zfSxcbiAgICAgIC4uLih0aGlzLmNvbmZpZy50ZXh0TGFiZWwgfHwgW10pLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIHRsLCBpKSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW2BnZXRMYWJlbENoYXJhY3RlclNldC0ke2l9YF06IHRsLmZpZWxkID8gdGwuZmllbGQubmFtZSA6IG51bGxcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSkge1xuICAgIGlmICghdGhpcy5jb25maWcuZGF0YUlkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IGxheWVyRGF0YXNldCA9IGRhdGFzZXRzW3RoaXMuY29uZmlnLmRhdGFJZF07XG4gICAgY29uc3Qge2FsbERhdGF9ID0gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG4gICAgY29uc3QgZGF0YVVwZGF0ZVRyaWdnZXJzID0gdGhpcy5nZXREYXRhVXBkYXRlVHJpZ2dlcnMobGF5ZXJEYXRhc2V0KTtcbiAgICBjb25zdCB0cmlnZ2VyQ2hhbmdlZCA9IHRoaXMuZ2V0Q2hhbmdlZFRyaWdnZXJzKGRhdGFVcGRhdGVUcmlnZ2Vycyk7XG5cbiAgICBpZiAodHJpZ2dlckNoYW5nZWQuZ2V0TWV0YSkge1xuICAgICAgdGhpcy51cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0UG9zaXRpb24pO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gW107XG5cbiAgICBpZiAoIXRyaWdnZXJDaGFuZ2VkLmdldERhdGEgJiYgb2xkTGF5ZXJEYXRhICYmIG9sZExheWVyRGF0YS5kYXRhKSB7XG4gICAgICAvLyBzYW1lIGRhdGFcbiAgICAgIGRhdGEgPSBvbGRMYXllckRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHRoaXMuY2FsY3VsYXRlRGF0YUF0dHJpYnV0ZShsYXllckRhdGFzZXQsIGdldFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2RhdGEsIHRyaWdnZXJDaGFuZ2VkfTtcbiAgfVxuICAvKipcbiAgICogaGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBvbmUgbGF5ZXIgZG9tYWluIHdoZW4gc3RhdGUuZGF0YSBjaGFuZ2VkXG4gICAqIGlmIHN0YXRlLmRhdGEgY2hhbmdlIGlzIGR1ZSBvdCB1cGRhdGUgZmlsdGVyLCBuZXdGaWxlciB3aWxsIGJlIHBhc3NlZFxuICAgKiBjYWxsZWQgYnkgdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0c1xuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3RmlsdGVyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGxheWVyXG4gICAqL1xuICB1cGRhdGVMYXllckRvbWFpbihkYXRhc2V0cywgbmV3RmlsdGVyKSB7XG4gICAgY29uc3QgdGFibGUgPSB0aGlzLmdldERhdGFzZXQoZGF0YXNldHMpO1xuICAgIGlmICghdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICBjb25zdCB7c2NhbGV9ID0gY2hhbm5lbDtcbiAgICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcbiAgICAgIC8vIG9yZGluYWwgZG9tYWluIGlzIGJhc2VkIG9uIGFsbERhdGEsIGlmIG9ubHkgZmlsdGVyIGNoYW5nZWRcbiAgICAgIC8vIG5vIG5lZWQgdG8gdXBkYXRlIG9yZGluYWwgZG9tYWluXG4gICAgICBpZiAoIW5ld0ZpbHRlciB8fCBzY2FsZVR5cGUgIT09IFNDQUxFX1RZUEVTLm9yZGluYWwpIHtcbiAgICAgICAgY29uc3Qge2RvbWFpbn0gPSBjaGFubmVsO1xuICAgICAgICBjb25zdCB1cGRhdGVkRG9tYWluID0gdGhpcy5jYWxjdWxhdGVMYXllckRvbWFpbih0YWJsZSwgY2hhbm5lbCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe1tkb21haW5dOiB1cGRhdGVkRG9tYWlufSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldERhdGFzZXQoZGF0YXNldHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZGF0YUlkID8gZGF0YXNldHNbdGhpcy5jb25maWcuZGF0YUlkXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmlzdWFsIGNoYW5uZWwgZmllbGQgYW5kIHNjYWxlcyBiYXNlZCBvbiBzdXBwb3J0ZWQgZmllbGQgJiBzY2FsZSB0eXBlXG4gICAqIEBwYXJhbSBjaGFubmVsXG4gICAqL1xuICB2YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCkge1xuICAgIHRoaXMudmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCk7XG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGZpZWxkIHR5cGUgYmFzZWQgb24gY2hhbm5lbFNjYWxlVHlwZVxuICAgKi9cbiAgdmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgY2hhbm5lbFNjYWxlVHlwZSwgc3VwcG9ydGVkRmllbGRUeXBlc30gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnW2ZpZWxkXSkge1xuICAgICAgLy8gaWYgZmllbGQgaXMgc2VsZWN0ZWQsIGNoZWNrIGlmIGZpZWxkIHR5cGUgaXMgc3VwcG9ydGVkXG4gICAgICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xuXG4gICAgICBpZiAoIWNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHRoaXMuY29uZmlnW2ZpZWxkXS50eXBlKSkge1xuICAgICAgICAvLyBmaWVsZCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQsIHNldCBpdCBiYWNrIHRvIG51bGxcbiAgICAgICAgLy8gc2V0IHNjYWxlIGJhY2sgdG8gZGVmYXVsdFxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZmllbGRdOiBudWxsfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHNjYWxlIHR5cGUgYmFzZWQgb24gYWdncmVnYXRpb25cbiAgICovXG4gIHZhbGlkYXRlU2NhbGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtzY2FsZX0gPSB2aXN1YWxDaGFubmVsO1xuICAgIGlmICghc2NhbGUpIHtcbiAgICAgIC8vIHZpc3VhbENoYW5uZWwgZG9lc24ndCBoYXZlIHNjYWxlXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IHRoaXMuZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwpO1xuICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgc2VsZWN0ZWQgc2NhbGUgaXNcbiAgICAvLyBzdXBwb3J0ZWQsIGlmIG5vdCwgY2hhbmdlIHRvIGRlZmF1bHRcbiAgICBpZiAoIXNjYWxlT3B0aW9ucy5pbmNsdWRlcyh0aGlzLmNvbmZpZ1tzY2FsZV0pKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbc2NhbGVdOiBzY2FsZU9wdGlvbnNbMF19KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgc2NhbGUsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tmaWVsZF1cbiAgICAgID8gRklFTERfT1BUU1t0aGlzLmNvbmZpZ1tmaWVsZF0udHlwZV0uc2NhbGVbY2hhbm5lbFNjYWxlVHlwZV1cbiAgICAgIDogW3RoaXMuZ2V0RGVmYXVsdExheWVyQ29uZmlnKClbc2NhbGVdXTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG4gICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gICAgLy8gY2FsY3VsYXRlIGxheWVyIGNoYW5uZWwgZG9tYWluXG4gICAgY29uc3QgdXBkYXRlZERvbWFpbiA9IHRoaXMuY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCk7XG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W3Zpc3VhbENoYW5uZWwuZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICB9XG5cbiAgZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKCkge1xuICAgIGNvbnN0IHVwZGF0ZVRyaWdnZXJzID0ge307XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKHZpc3VhbENoYW5uZWwgPT4ge1xuICAgICAgLy8gZmllbGQgcmFuZ2Ugc2NhbGUgZG9tYWluXG4gICAgICBjb25zdCB7YWNjZXNzb3IsIGZpZWxkLCBzY2FsZSwgZG9tYWluLCByYW5nZSwgZGVmYXVsdFZhbHVlLCBmaXhlZH0gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgICB1cGRhdGVUcmlnZ2Vyc1thY2Nlc3Nvcl0gPSB7XG4gICAgICAgIFtmaWVsZF06IHRoaXMuY29uZmlnW2ZpZWxkXSxcbiAgICAgICAgW3NjYWxlXTogdGhpcy5jb25maWdbc2NhbGVdLFxuICAgICAgICBbZG9tYWluXTogdGhpcy5jb25maWdbZG9tYWluXSxcbiAgICAgICAgW3JhbmdlXTogdGhpcy5jb25maWcudmlzQ29uZmlnW3JhbmdlXSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnKSA6IGRlZmF1bHRWYWx1ZSxcbiAgICAgICAgLi4uKGZpeGVkID8ge1tmaXhlZF06IHRoaXMuY29uZmlnLnZpc0NvbmZpZ1tmaXhlZF19IDoge30pXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB1cGRhdGVUcmlnZ2VycztcbiAgfVxuXG4gIGNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIHZpc3VhbENoYW5uZWwpIHtcbiAgICBjb25zdCB7c2NhbGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBjb25zdCBzY2FsZVR5cGUgPSB0aGlzLmNvbmZpZ1tzY2FsZV07XG5cbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnW3Zpc3VhbENoYW5uZWwuZmllbGRdO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIC8vIGlmIGNvbG9yRmllbGQgb3Igc2l6ZUZpZWxkIHdlcmUgc2V0IGJhY2sgdG8gbnVsbFxuICAgICAgcmV0dXJuIGRlZmF1bHREb21haW47XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFzZXQuZ2V0Q29sdW1uTGF5ZXJEb21haW4oZmllbGQsIHNjYWxlVHlwZSkgfHwgZGVmYXVsdERvbWFpbjtcbiAgfVxuXG4gIGhhc0hvdmVyZWRPYmplY3Qob2JqZWN0SW5mbykge1xuICAgIHJldHVybiB0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEluZm8pICYmIG9iamVjdEluZm8ub2JqZWN0ID8gb2JqZWN0SW5mby5vYmplY3QgOiBudWxsO1xuICB9XG5cbiAgaXNMYXllckhvdmVyZWQob2JqZWN0SW5mbykge1xuICAgIHJldHVybiBvYmplY3RJbmZvPy5waWNrZWQgJiYgb2JqZWN0SW5mbz8ubGF5ZXI/LnByb3BzPy5pZCA9PT0gdGhpcy5pZDtcbiAgfVxuXG4gIGdldFJhZGl1c1NjYWxlQnlab29tKG1hcFN0YXRlLCBmaXhlZFJhZGl1cykge1xuICAgIGNvbnN0IHJhZGl1c0NoYW5uZWwgPSBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZpbmQodmMgPT4gdmMucHJvcGVydHkgPT09ICdyYWRpdXMnKTtcblxuICAgIGlmICghcmFkaXVzQ2hhbm5lbCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGQgPSByYWRpdXNDaGFubmVsLmZpZWxkO1xuICAgIGNvbnN0IGZpeGVkID0gZml4ZWRSYWRpdXMgPT09IHVuZGVmaW5lZCA/IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA6IGZpeGVkUmFkaXVzO1xuICAgIGNvbnN0IHtyYWRpdXN9ID0gdGhpcy5jb25maWcudmlzQ29uZmlnO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBmaXhlZCA/IDEgOiAodGhpcy5jb25maWdbZmllbGRdID8gMSA6IHJhZGl1cykgKiB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICB9XG5cbiAgc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnNvbWUocCA9PiAhdGhpcy5ub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMuaW5jbHVkZXMocCkpO1xuICB9XG5cbiAgZ2V0QnJ1c2hpbmdFeHRlbnNpb25Qcm9wcyhpbnRlcmFjdGlvbkNvbmZpZywgYnJ1c2hpbmdUYXJnZXQpIHtcbiAgICBjb25zdCB7YnJ1c2h9ID0gaW50ZXJhY3Rpb25Db25maWc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gYnJ1c2hpbmdcbiAgICAgIGF1dG9IaWdobGlnaHQ6ICFicnVzaC5lbmFibGVkLFxuICAgICAgYnJ1c2hpbmdSYWRpdXM6IGJydXNoLmNvbmZpZy5zaXplICogMTAwMCxcbiAgICAgIGJydXNoaW5nVGFyZ2V0OiBicnVzaGluZ1RhcmdldCB8fCAnc291cmNlJyxcbiAgICAgIGJydXNoaW5nRW5hYmxlZDogYnJ1c2guZW5hYmxlZFxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0RGVja0xheWVyUHJvcHMoe2lkeCwgZ3B1RmlsdGVyLCBtYXBTdGF0ZX0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBpZHgsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiBDT09SRElOQVRFX1NZU1RFTS5MTkdMQVQsXG4gICAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHdyYXBMb25naXR1ZGU6IHRydWUsXG4gICAgICBwYXJhbWV0ZXJzOiB7ZGVwdGhUZXN0OiBCb29sZWFuKG1hcFN0YXRlLmRyYWdSb3RhdGUgfHwgdGhpcy5jb25maWcudmlzQ29uZmlnLmVuYWJsZTNkKX0sXG4gICAgICBoaWRkZW46IHRoaXMuY29uZmlnLmhpZGRlbixcbiAgICAgIC8vIHZpc2NvbmZpZ1xuICAgICAgb3BhY2l0eTogdGhpcy5jb25maWcudmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICBoaWdobGlnaHRDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAvLyBkYXRhIGZpbHRlcmluZ1xuICAgICAgZXh0ZW5zaW9uczogW2RhdGFGaWx0ZXJFeHRlbnNpb25dLFxuICAgICAgZmlsdGVyUmFuZ2U6IGdwdUZpbHRlciA/IGdwdUZpbHRlci5maWx0ZXJSYW5nZSA6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuICBnZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogYCR7dGhpcy5pZH0taG92ZXJlZGAsXG4gICAgICBwaWNrYWJsZTogZmFsc2UsXG4gICAgICB3cmFwTG9uZ2l0dWRlOiB0cnVlLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogQ09PUkRJTkFURV9TWVNURU0uTE5HTEFUXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlclRleHRMYWJlbExheWVyKHtnZXRQb3NpdGlvbiwgZ2V0UGl4ZWxPZmZzZXQsIHVwZGF0ZVRyaWdnZXJzLCBzaGFyZWRQcm9wc30sIHJlbmRlck9wdHMpIHtcbiAgICBjb25zdCB7ZGF0YSwgbWFwU3RhdGV9ID0gcmVuZGVyT3B0cztcbiAgICBjb25zdCB7dGV4dExhYmVsfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgcmV0dXJuIGRhdGEudGV4dExhYmVscy5yZWR1Y2UoKGFjY3UsIGQsIGkpID0+IHtcbiAgICAgIGlmIChkLmdldFRleHQpIHtcbiAgICAgICAgYWNjdS5wdXNoKFxuICAgICAgICAgIG5ldyBUZXh0TGF5ZXIoe1xuICAgICAgICAgICAgLi4uc2hhcmVkUHJvcHMsXG4gICAgICAgICAgICBpZDogYCR7dGhpcy5pZH0tbGFiZWwtJHt0ZXh0TGFiZWxbaV0uZmllbGQ/Lm5hbWV9YCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgIGdldFRleHQ6IGQuZ2V0VGV4dCxcbiAgICAgICAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgICAgICAgY2hhcmFjdGVyU2V0OiBkLmNoYXJhY3RlclNldCxcbiAgICAgICAgICAgIGdldFBpeGVsT2Zmc2V0OiBnZXRQaXhlbE9mZnNldCh0ZXh0TGFiZWxbaV0pLFxuICAgICAgICAgICAgZ2V0U2l6ZTogMSxcbiAgICAgICAgICAgIHNpemVTY2FsZTogdGV4dExhYmVsW2ldLnNpemUsXG4gICAgICAgICAgICBnZXRUZXh0QW5jaG9yOiB0ZXh0TGFiZWxbaV0uYW5jaG9yLFxuICAgICAgICAgICAgZ2V0QWxpZ25tZW50QmFzZWxpbmU6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnQsXG4gICAgICAgICAgICBnZXRDb2xvcjogdGV4dExhYmVsW2ldLmNvbG9yLFxuICAgICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgICAvLyB0ZXh0IHdpbGwgYWx3YXlzIHNob3cgb24gdG9wIG9mIGFsbCBsYXllcnNcbiAgICAgICAgICAgICAgZGVwdGhUZXN0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0RmlsdGVyVmFsdWU6IGRhdGEuZ2V0RmlsdGVyVmFsdWUsXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgICAgICAuLi51cGRhdGVUcmlnZ2VycyxcbiAgICAgICAgICAgICAgZ2V0VGV4dDogdGV4dExhYmVsW2ldLmZpZWxkPy5uYW1lLFxuICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDoge1xuICAgICAgICAgICAgICAgIC4uLnVwZGF0ZVRyaWdnZXJzLmdldFJhZGl1cyxcbiAgICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgICBhbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgICAgYWxpZ25tZW50OiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdldFRleHRBbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgIGdldEFsaWdubWVudEJhc2VsaW5lOiB0ZXh0TGFiZWxbaV0uYWxpZ25tZW50LFxuICAgICAgICAgICAgICBnZXRDb2xvcjogdGV4dExhYmVsW2ldLmNvbG9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGFBdHRyaWJ1dGUoZGF0YXNldCwgZ2V0UG9zaXRpb24pIHtcbiAgICAvLyBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldFBvc2l0aW9uKSB7XG4gICAgLy8gaW1wbGVtZW50ZWQgaW4gc3ViY2xhc3Nlc1xuICB9XG5cbiAgZ2V0UG9zaXRpb25BY2Nlc3NvcigpIHtcbiAgICAvLyBpbXBsZW1lbnRlZCBpbiBzdWJjbGFzc2VzXG4gICAgcmV0dXJuICgpID0+IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXI7XG4iXX0=