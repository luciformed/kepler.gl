"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATASET_FORMATS = exports.LOADING_METHODS = exports.MAP_INFO_CHARACTER = exports.MAP_THUMBNAIL_DIMENSION = exports.MAX_GPU_FILTERS = exports.EDITOR_AVAILABLE_LAYERS = exports.EDITOR_MODES = exports.GEOCODER_ICON_SIZE = exports.GEOCODER_ICON_COLOR = exports.GEOCODER_GEO_OFFSET = exports.GEOCODER_LAYER_ID = exports.GEOCODER_DATASET_NAME = exports.SPEED_CONTROL_STEP = exports.SPEED_CONTROL_RANGE = exports.DEFAULT_TIME_FORMAT = exports.ANIMATION_WINDOW = exports.FPS = exports.BASE_SPEED = exports.THROTTLE_NOTIFICATION_TIME = exports.DEFAULT_NOTIFICATION_TOPICS = exports.DEFAULT_NOTIFICATION_TYPES = exports.DEFAULT_NOTIFICATION_MESSAGE = exports.DEFAULT_UUID_COUNT = exports.EXPORT_HTML_MAP_MODE_OPTIONS = exports.EXPORT_MAP_FORMAT_OPTIONS = exports.EXPORT_HTML_MAP_MODES = exports.EXPORT_MAP_FORMATS = exports.EXPORT_DATA_TYPE_OPTIONS = exports.EXPORT_DATA_TYPE = exports.EXPORT_IMG_RESOLUTION_OPTIONS = exports.EXPORT_IMG_RATIO_OPTIONS = exports.EXPORT_IMG_RATIOS = exports.RESOLUTIONS = exports.MAX_DEFAULT_TOOLTIPS = exports.LAYER_BLENDINGS = exports.NO_VALUE_COLOR = exports.DEFAULT_TOOLTIP_FIELDS = exports.DEFAULT_LAYER_COLOR = exports.CHANNEL_SCALE_SUPPORTED_FIELDS = exports.FIELD_OPTS = exports.DEFAULT_AGGREGATION = exports.notSupportAggrOpts = exports.notSupportedScaleOpts = exports.ordinalFieldAggrScaleFunctions = exports.ordinalFieldScaleFunctions = exports.linearFieldAggrScaleFunctions = exports.linearFieldScaleFunctions = exports.AGGREGATION_TYPES = exports.CHANNEL_SCALES = exports.HIGHLIGH_COLOR_3D = exports.FIELD_COLORS = exports.FILED_TYPE_DISPLAY = exports.TABLE_OPTION_LIST = exports.TABLE_OPTION = exports.SORT_ORDER = exports.ALL_FIELD_TYPES = exports.SCALE_FUNC = exports.SCALE_TYPES = exports.FILTER_TYPES = exports.TRIP_ARC_FIELDS = exports.TRIP_POINT_FIELDS = exports.ICON_FIELDS = exports.GEOJSON_FIELDS = exports.DEFAULT_MAP_STYLES = exports.DEFAULT_LAYER_GROUPS = exports.PANELS = exports.SIDEBAR_PANELS = exports.THEME = exports.DIMENSIONS = exports.KEPLER_GL_WEBSITE = exports.KEPLER_GL_VERSION = exports.KEPLER_GL_NAME = exports.SHARE_MAP_ID = exports.OVERWRITE_MAP_ID = exports.SAVE_MAP_ID = exports.EXPORT_MAP_ID = exports.ADD_MAP_STYLE_ID = exports.EXPORT_DATA_ID = exports.EXPORT_IMAGE_ID = exports.ADD_DATA_ID = exports.DELETE_DATA_ID = exports.DATA_TABLE_ID = exports.DEFAULT_MAPBOX_API_URL = exports.ICON_PREFIX = exports.CLOUDFRONT = exports.ACTION_PREFIX = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _keymirror = _interopRequireDefault(require("keymirror"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _d3Scale = require("d3-scale");

var _icons = require("../components/common/icons");

var _utils = require("../utils/utils");

var _tooltip = require("./tooltip");

var _types = require("../layers/types");

var _SCALE_FUNC, _FILED_TYPE_DISPLAY, _linearFieldScaleFunc, _CHANNEL_SCALES$color, _CHANNEL_SCALES$sizeA, _linearFieldAggrScale, _ordinalFieldScaleFun, _CHANNEL_SCALES$color2, _ordinalFieldAggrScal, _notSupportedScaleOpt, _notSupportAggrOpts, _DEFAULT_AGGREGATION;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ACTION_PREFIX = '@@kepler.gl/';
exports.ACTION_PREFIX = ACTION_PREFIX;
var CLOUDFRONT = 'https://d1a3f4spazzrp4.cloudfront.net/kepler.gl';
exports.CLOUDFRONT = CLOUDFRONT;
var ICON_PREFIX = "".concat(CLOUDFRONT, "/geodude");
exports.ICON_PREFIX = ICON_PREFIX;
var DEFAULT_MAPBOX_API_URL = 'https://api.mapbox.com'; // Modal Ids

/**
 * Modal id: data table
 * @constant
 * @type {string}
 * @public
 */

exports.DEFAULT_MAPBOX_API_URL = DEFAULT_MAPBOX_API_URL;
var DATA_TABLE_ID = 'dataTable';
/**
 * Modal id: delete dataset confirm dialog
 * @constant
 * @type {string}
 * @public
 */

exports.DATA_TABLE_ID = DATA_TABLE_ID;
var DELETE_DATA_ID = 'deleteData';
/**
 * Modal id: add data modal
 * @constant
 * @type {string}
 * @public
 */

exports.DELETE_DATA_ID = DELETE_DATA_ID;
var ADD_DATA_ID = 'addData';
/**
 * Modal id: export image modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_DATA_ID = ADD_DATA_ID;
var EXPORT_IMAGE_ID = 'exportImage';
/**
 * Modal id: export data modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_IMAGE_ID = EXPORT_IMAGE_ID;
var EXPORT_DATA_ID = 'exportData';
/**
 * Modal id: add custom map style modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_DATA_ID = EXPORT_DATA_ID;
var ADD_MAP_STYLE_ID = 'addMapStyle';
/**
 * Modal id: export map modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_MAP_STYLE_ID = ADD_MAP_STYLE_ID;
var EXPORT_MAP_ID = 'exportMap';
/**
 * Modal id: save map modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_MAP_ID = EXPORT_MAP_ID;
var SAVE_MAP_ID = 'saveMap';
/**
 * Modal id: confirm to overwrite saved map
 * @constant
 * @type {string}
 * @public
 */

exports.SAVE_MAP_ID = SAVE_MAP_ID;
var OVERWRITE_MAP_ID = 'overwriteMap';
/**
 * Modal id: share map url modal
 * @constant
 * @type {string}
 * @public
 */

exports.OVERWRITE_MAP_ID = OVERWRITE_MAP_ID;
var SHARE_MAP_ID = 'shareMap';
exports.SHARE_MAP_ID = SHARE_MAP_ID;
var KEPLER_GL_NAME = 'kepler.gl'; // __PACKAGE_VERSION__ is automatically injected by Babel/Webpack during the building process
// Since we are injecting this during the build process with babel
// while developing VERSION is not defined, we capture the exception and return
// an empty string which will allow us to retrieve the latest umd version

exports.KEPLER_GL_NAME = KEPLER_GL_NAME;
var KEPLER_GL_VERSION = "2.5.1";
exports.KEPLER_GL_VERSION = KEPLER_GL_VERSION;
var KEPLER_GL_WEBSITE = 'http://kepler.gl/';
exports.KEPLER_GL_WEBSITE = KEPLER_GL_WEBSITE;
var DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {
      top: 20,
      left: 20,
      bottom: 30,
      right: 20
    },
    headerHeight: 96
  },
  mapControl: {
    width: 184,
    padding: 12
  }
};
/**
 * Theme name that can be passed to `KeplerGl` `prop.theme`.
 * Available themes are `THEME.light` and `THEME.dark`. Default theme is `THEME.dark`
 * @constant
 * @type {object}
 * @public
 * @example
 * ```js
 * const Map = () => <KeplerGl theme={THEME.light} id="map"/>
 * ```
 */

exports.DIMENSIONS = DIMENSIONS;
var THEME = (0, _keymirror["default"])({
  light: null,
  dark: null,
  base: null
});
exports.THEME = THEME;
var SIDEBAR_PANELS = [{
  id: 'layer',
  label: 'sidebar.panels.layer',
  iconComponent: _icons.Layers
}, {
  id: 'filter',
  label: 'sidebar.panels.filter',
  iconComponent: _icons.FilterFunnel
}, {
  id: 'interaction',
  label: 'sidebar.panels.interaction',
  iconComponent: _icons.CursorClick
}, {
  id: 'map',
  label: 'sidebar.panels.basemap',
  iconComponent: _icons.Settings
}]; // backward compatibility

exports.SIDEBAR_PANELS = SIDEBAR_PANELS;
var PANELS = SIDEBAR_PANELS; // MAP STYLES

exports.PANELS = PANELS;
var DEFAULT_LAYER_GROUPS = [{
  slug: 'label',
  filter: function filter(_ref) {
    var id = _ref.id;
    return id.match(/(?=(label|place-|poi-))/);
  },
  defaultVisibility: true
}, {
  slug: 'road',
  filter: function filter(_ref2) {
    var id = _ref2.id;
    return id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/);
  },
  defaultVisibility: true
}, {
  slug: 'border',
  filter: function filter(_ref3) {
    var id = _ref3.id;
    return id.match(/border|boundaries/);
  },
  defaultVisibility: false
}, {
  slug: 'building',
  filter: function filter(_ref4) {
    var id = _ref4.id;
    return id.match(/building/);
  },
  defaultVisibility: true
}, {
  slug: 'water',
  filter: function filter(_ref5) {
    var id = _ref5.id;
    return id.match(/(?=(water|stream|ferry))/);
  },
  defaultVisibility: true
}, {
  slug: 'land',
  filter: function filter(_ref6) {
    var id = _ref6.id;
    return id.match(/(?=(parks|landcover|industrial|sand|hillshade))/);
  },
  defaultVisibility: true
}, {
  slug: '3d building',
  filter: function filter() {
    return false;
  },
  defaultVisibility: false
}];
exports.DEFAULT_LAYER_GROUPS = DEFAULT_LAYER_GROUPS;
var DEFAULT_MAP_STYLES = [{
  id: 'dark',
  label: 'Dark',
  url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
  icon: "".concat(ICON_PREFIX, "/UBER_DARK_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'light',
  label: 'Light',
  url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
  icon: "".concat(ICON_PREFIX, "/UBER_LIGHT_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted',
  label: 'Muted Light',
  url: 'mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_LIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted_night',
  label: 'Muted Night',
  url: 'mapbox://styles/uberdata/cjfxhlikmaj1b2soyzevnywgs',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_NIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'satellite',
  label: 'Satellite',
  url: "mapbox://styles/mapbox/satellite-v9",
  icon: "".concat(ICON_PREFIX, "/UBER_SATELLITE.png")
}];
exports.DEFAULT_MAP_STYLES = DEFAULT_MAP_STYLES;
var GEOJSON_FIELDS = {
  geojson: ['_geojson', 'all_points', 'geojson']
};
exports.GEOJSON_FIELDS = GEOJSON_FIELDS;
var ICON_FIELDS = {
  icon: ['icon']
};
exports.ICON_FIELDS = ICON_FIELDS;
var TRIP_POINT_FIELDS = [['lat', 'lng'], ['lat', 'lon'], ['latitude', 'longitude']];
exports.TRIP_POINT_FIELDS = TRIP_POINT_FIELDS;
var TRIP_ARC_FIELDS = {
  lat0: 'begintrip',
  lng0: 'begintrip',
  lat1: 'dropoff',
  lng1: 'dropoff'
};
exports.TRIP_ARC_FIELDS = TRIP_ARC_FIELDS;
var FILTER_TYPES = (0, _keymirror["default"])({
  range: null,
  select: null,
  input: null,
  timeRange: null,
  multiSelect: null,
  polygon: null
});
exports.FILTER_TYPES = FILTER_TYPES;
var SCALE_TYPES = (0, _keymirror["default"])({
  ordinal: null,
  quantile: null,
  quantize: null,
  linear: null,
  sqrt: null,
  log: null,
  // ordinal domain to linear range
  point: null
});
exports.SCALE_TYPES = SCALE_TYPES;
var SCALE_FUNC = (_SCALE_FUNC = {}, (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.linear, _d3Scale.scaleLinear), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantize, _d3Scale.scaleQuantize), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.quantile, _d3Scale.scaleQuantile), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.ordinal, _d3Scale.scaleOrdinal), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.sqrt, _d3Scale.scaleSqrt), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.log, _d3Scale.scaleLog), (0, _defineProperty2["default"])(_SCALE_FUNC, SCALE_TYPES.point, _d3Scale.scalePoint), _SCALE_FUNC);
exports.SCALE_FUNC = SCALE_FUNC;
var ALL_FIELD_TYPES = (0, _keymirror["default"])({
  "boolean": null,
  date: null,
  geojson: null,
  integer: null,
  real: null,
  string: null,
  timestamp: null,
  point: null
}); // Data Table

exports.ALL_FIELD_TYPES = ALL_FIELD_TYPES;
var SORT_ORDER = (0, _keymirror["default"])({
  ASCENDING: null,
  DESCENDING: null,
  UNSORT: null
});
exports.SORT_ORDER = SORT_ORDER;
var TABLE_OPTION = (0, _keymirror["default"])({
  SORT_ASC: null,
  SORT_DES: null,
  UNSORT: null,
  PIN: null,
  UNPIN: null,
  COPY: null
});
exports.TABLE_OPTION = TABLE_OPTION;
var TABLE_OPTION_LIST = [{
  value: TABLE_OPTION.SORT_ASC,
  display: 'Sort Ascending',
  icon: _icons.ArrowUp,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.ASCENDING;
  }
}, {
  value: TABLE_OPTION.SORT_DES,
  display: 'Sort Descending',
  icon: _icons.ArrowDown,
  condition: function condition(props) {
    return props.sortMode !== SORT_ORDER.DESCENDING;
  }
}, {
  value: TABLE_OPTION.UNSORT,
  display: 'Unsort Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isSorted;
  }
}, {
  value: TABLE_OPTION.PIN,
  display: 'Pin Column',
  icon: _icons.Pin,
  condition: function condition(props) {
    return !props.isPinned;
  }
}, {
  value: TABLE_OPTION.UNPIN,
  display: 'Unpin Column',
  icon: _icons.Cancel,
  condition: function condition(props) {
    return props.isPinned;
  }
}, {
  value: TABLE_OPTION.COPY,
  display: 'Copy Column',
  icon: _icons.Clipboard
}];
exports.TABLE_OPTION_LIST = TABLE_OPTION_LIST;
var ORANGE = '248, 194, 28';
var PINK = '231, 189, 194';
var PURPLE = '160, 106, 206';
var BLUE = '140, 210, 205';
var BLUE2 = '106, 160, 206';
var BLUE3 = '0, 172, 237';
var GREEN = '106, 160, 56';
var RED = '237, 88, 106';
var FILED_TYPE_DISPLAY = (_FILED_TYPE_DISPLAY = {}, (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES["boolean"], {
  label: 'bool',
  color: PINK
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.date, {
  label: 'date',
  color: PURPLE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.geojson, {
  label: 'geo',
  color: BLUE2
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.integer, {
  label: 'int',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.real, {
  label: 'float',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.string, {
  label: 'string',
  color: BLUE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.timestamp, {
  label: 'time',
  color: GREEN
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.point, {
  label: 'point',
  color: BLUE3
}), _FILED_TYPE_DISPLAY);
exports.FILED_TYPE_DISPLAY = FILED_TYPE_DISPLAY;
var FIELD_COLORS = {
  "default": RED
};
exports.FIELD_COLORS = FIELD_COLORS;
var HIGHLIGH_COLOR_3D = [255, 255, 255, 60];
exports.HIGHLIGH_COLOR_3D = HIGHLIGH_COLOR_3D;
var CHANNEL_SCALES = (0, _keymirror["default"])({
  color: null,
  radius: null,
  size: null,
  colorAggr: null,
  sizeAggr: null
});
exports.CHANNEL_SCALES = CHANNEL_SCALES;
var AGGREGATION_TYPES = {
  // default
  count: 'count',
  // linear
  average: 'average',
  maximum: 'maximum',
  minimum: 'minimum',
  median: 'median',
  stdev: 'stdev',
  sum: 'sum',
  variance: 'variance',
  // ordinal
  mode: 'mode',
  countUnique: 'count unique'
};
exports.AGGREGATION_TYPES = AGGREGATION_TYPES;
var linearFieldScaleFunctions = (_linearFieldScaleFunc = {}, (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.color, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.radius, [SCALE_TYPES.sqrt]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.size, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _linearFieldScaleFunc);
exports.linearFieldScaleFunctions = linearFieldScaleFunctions;
var linearFieldAggrScaleFunctions = (_linearFieldAggrScale = {}, (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.average, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.maximum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.minimum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.median, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.stdev, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.sum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.variance, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color)), (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.sizeAggr, (_CHANNEL_SCALES$sizeA = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.average, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.maximum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.minimum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.median, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.stdev, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.sum, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.variance, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log]), _CHANNEL_SCALES$sizeA)), _linearFieldAggrScale);
exports.linearFieldAggrScaleFunctions = linearFieldAggrScaleFunctions;
var ordinalFieldScaleFunctions = (_ordinalFieldScaleFun = {}, (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.color, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.radius, [SCALE_TYPES.point]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.size, [SCALE_TYPES.point]), _ordinalFieldScaleFun);
exports.ordinalFieldScaleFunctions = ordinalFieldScaleFunctions;
var ordinalFieldAggrScaleFunctions = (_ordinalFieldAggrScal = {}, (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color2 = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.mode, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.countUnique, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color2)), (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.sizeAggr, {}), _ordinalFieldAggrScal);
exports.ordinalFieldAggrScaleFunctions = ordinalFieldAggrScaleFunctions;
var notSupportedScaleOpts = (_notSupportedScaleOpt = {}, (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.color, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.radius, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.size, []), _notSupportedScaleOpt);
exports.notSupportedScaleOpts = notSupportedScaleOpts;
var notSupportAggrOpts = (_notSupportAggrOpts = {}, (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.colorAggr, {}), (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.sizeAggr, {}), _notSupportAggrOpts);
/**
 * Default aggregation are based on ocunt
 */

exports.notSupportAggrOpts = notSupportAggrOpts;
var DEFAULT_AGGREGATION = (_DEFAULT_AGGREGATION = {}, (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.colorAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.quantize, SCALE_TYPES.quantile])), (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.sizeAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.linear, SCALE_TYPES.sqrt, SCALE_TYPES.log])), _DEFAULT_AGGREGATION);
/**
 * Define what type of scale operation is allowed on each type of fields
 */

exports.DEFAULT_AGGREGATION = DEFAULT_AGGREGATION;
var FIELD_OPTS = {
  string: {
    type: 'categorical',
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: []
    }
  },
  real: {
    type: 'numerical',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  timestamp: {
    type: 'time',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE_TIME]
    }
  },
  integer: {
    type: 'numerical',
    scale: _objectSpread(_objectSpread({}, linearFieldScaleFunctions), linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DECIMAL, _tooltip.TOOLTIP_FORMAT_TYPES.PERCENTAGE]
    }
  },
  "boolean": {
    type: 'boolean',
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.BOOLEAN]
    }
  },
  date: {
    scale: _objectSpread(_objectSpread({}, ordinalFieldScaleFunctions), ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      },
      tooltip: [_tooltip.TOOLTIP_FORMAT_TYPES.NONE, _tooltip.TOOLTIP_FORMAT_TYPES.DATE]
    }
  },
  geojson: {
    type: 'geometry',
    scale: _objectSpread(_objectSpread({}, notSupportedScaleOpts), notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return '...';
      },
      tooltip: []
    }
  }
};
exports.FIELD_OPTS = FIELD_OPTS;
var CHANNEL_SCALE_SUPPORTED_FIELDS = Object.keys(CHANNEL_SCALES).reduce(function (accu, key) {
  return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, Object.keys(FIELD_OPTS).filter(function (ft) {
    return Object.keys(FIELD_OPTS[ft].scale[key]).length;
  })));
}, {});
exports.CHANNEL_SCALE_SUPPORTED_FIELDS = CHANNEL_SCALE_SUPPORTED_FIELDS;
var DEFAULT_LAYER_COLOR = {
  tripArc: '#9226C6',
  begintrip_lat: '#1E96BE',
  dropoff_lat: '#FF991F',
  request_lat: '#52A353'
}; // let user pass in default tooltip fields

exports.DEFAULT_LAYER_COLOR = DEFAULT_LAYER_COLOR;
var DEFAULT_TOOLTIP_FIELDS = [];
exports.DEFAULT_TOOLTIP_FIELDS = DEFAULT_TOOLTIP_FIELDS;
var NO_VALUE_COLOR = [0, 0, 0, 0];
exports.NO_VALUE_COLOR = NO_VALUE_COLOR;
var LAYER_BLENDINGS = {
  additive: {
    label: 'layerBlending.additive',
    blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: 'FUNC_ADD'
  },
  normal: {
    // reference to
    // https://limnu.com/webgl-blending-youre-probably-wrong/
    label: 'layerBlending.normal',
    blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
    blendEquation: ['FUNC_ADD', 'FUNC_ADD']
  },
  subtractive: {
    label: 'layerBlending.subtractive',
    blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
  }
};
exports.LAYER_BLENDINGS = LAYER_BLENDINGS;
var MAX_DEFAULT_TOOLTIPS = 5;
exports.MAX_DEFAULT_TOOLTIPS = MAX_DEFAULT_TOOLTIPS;
var RESOLUTIONS = (0, _keymirror["default"])({
  ONE_X: null,
  TWO_X: null
});
exports.RESOLUTIONS = RESOLUTIONS;
var EXPORT_IMG_RATIOS = (0, _keymirror["default"])({
  SCREEN: null,
  FOUR_BY_THREE: null,
  SIXTEEN_BY_NINE: null,
  CUSTOM: null
});
exports.EXPORT_IMG_RATIOS = EXPORT_IMG_RATIOS;
var EXPORT_IMG_RATIO_OPTIONS = [{
  id: EXPORT_IMG_RATIOS.SCREEN,
  label: 'modal.exportImage.ratioOriginalScreen',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.CUSTOM,
  hidden: true,
  label: 'modal.exportImage.ratioCustom',
  getSize: function getSize(mapW, mapH) {
    return {
      width: mapW,
      height: mapH
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.FOUR_BY_THREE,
  label: 'modal.exportImage.ratio4_3',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.75)
    };
  }
}, {
  id: EXPORT_IMG_RATIOS.SIXTEEN_BY_NINE,
  label: 'modal.exportImage.ratio16_9',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.5625)
    };
  }
}];
exports.EXPORT_IMG_RATIO_OPTIONS = EXPORT_IMG_RATIO_OPTIONS;
var EXPORT_IMG_RESOLUTION_OPTIONS = [{
  id: RESOLUTIONS.ONE_X,
  label: '1x',
  available: true,
  scale: 1,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RESOLUTIONS.TWO_X,
  label: '2x',
  available: true,
  scale: 2,
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW * 2,
      height: screenH * 2
    };
  }
}];
exports.EXPORT_IMG_RESOLUTION_OPTIONS = EXPORT_IMG_RESOLUTION_OPTIONS;
var EXPORT_DATA_TYPE = (0, _keymirror["default"])({
  CSV: null // SHAPEFILE: null,
  // JSON: null,
  // GEOJSON: null,
  // TOPOJSON: null

});
exports.EXPORT_DATA_TYPE = EXPORT_DATA_TYPE;
var EXPORT_DATA_TYPE_OPTIONS = [{
  id: EXPORT_DATA_TYPE.CSV,
  label: EXPORT_DATA_TYPE.CSV.toLowerCase(),
  available: true
} // {
//   id: EXPORT_DATA_TYPE.SHAPEFILE,
//   label: 'shapefile',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.JSON,
//   label: 'json',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.GEOJSON,
//   label: 'geojson',
//   available: false
// },
// {
//   id: EXPORT_DATA_TYPE.TOPOJSON,
//   label: 'topojson',
//   available: false
// }
]; // Export map types

exports.EXPORT_DATA_TYPE_OPTIONS = EXPORT_DATA_TYPE_OPTIONS;
var EXPORT_MAP_FORMATS = (0, _keymirror["default"])({
  HTML: null,
  JSON: null
});
exports.EXPORT_MAP_FORMATS = EXPORT_MAP_FORMATS;
var EXPORT_HTML_MAP_MODES = (0, _keymirror["default"])({
  READ: null,
  EDIT: null
}); // Export map options

exports.EXPORT_HTML_MAP_MODES = EXPORT_HTML_MAP_MODES;
var EXPORT_MAP_FORMAT_OPTIONS = Object.entries(EXPORT_MAP_FORMATS).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true
  };
});
exports.EXPORT_MAP_FORMAT_OPTIONS = EXPORT_MAP_FORMAT_OPTIONS;
var EXPORT_HTML_MAP_MODE_OPTIONS = Object.entries(EXPORT_HTML_MAP_MODES).map(function (entry) {
  return {
    id: entry[0],
    label: "modal.exportMap.html.".concat(entry[1].toLowerCase()),
    available: true,
    url: (0, _utils.getHTMLMapModeTileUrl)(entry[1])
  };
});
exports.EXPORT_HTML_MAP_MODE_OPTIONS = EXPORT_HTML_MAP_MODE_OPTIONS;
var DEFAULT_UUID_COUNT = 6;
exports.DEFAULT_UUID_COUNT = DEFAULT_UUID_COUNT;
var DEFAULT_NOTIFICATION_MESSAGE = 'MESSAGE_NOT_PROVIDED';
exports.DEFAULT_NOTIFICATION_MESSAGE = DEFAULT_NOTIFICATION_MESSAGE;
var DEFAULT_NOTIFICATION_TYPES = (0, _keymirror["default"])({
  info: null,
  error: null,
  warning: null,
  success: null
});
exports.DEFAULT_NOTIFICATION_TYPES = DEFAULT_NOTIFICATION_TYPES;
var DEFAULT_NOTIFICATION_TOPICS = (0, _keymirror["default"])({
  global: null,
  file: null
}); // Minimum time between identical notifications about deck.gl errors

exports.DEFAULT_NOTIFICATION_TOPICS = DEFAULT_NOTIFICATION_TOPICS;
var THROTTLE_NOTIFICATION_TIME = 2500; // Animation

exports.THROTTLE_NOTIFICATION_TIME = THROTTLE_NOTIFICATION_TIME;
var BASE_SPEED = 600;
exports.BASE_SPEED = BASE_SPEED;
var FPS = 60;
/**
 * 4 Animation Window Types
 * 1. free
 *  |->  |->
 * Current time is a fixed range, animation controller calls next animation frames continuously to animation a moving window
 * The increment id based on domain / BASE_SPEED * SPEED
 *
 * 2. incremental
 * |    |->
 * Same as free, current time is a growing range, only the max value of range increment during animation.
 * The increment is also based on domain / BASE_SPEED * SPEED
 *
 * 3. point
 * o -> o
 * Current time is a point, animation controller calls next animation frame continuously to animation a moving point
 * The increment is based on domain / BASE_SPEED * SPEED
 *
 * 4. interval
 * o ~> o
 * Current time is a point. An array of sorted time steps need to be provided.
 * animation controller calls next animation at a interval when the point jumps to the next step
 */

exports.FPS = FPS;
var ANIMATION_WINDOW = (0, _keymirror["default"])({
  free: null,
  incremental: null,
  point: null,
  interval: null
});
exports.ANIMATION_WINDOW = ANIMATION_WINDOW;
var DEFAULT_TIME_FORMAT = 'MM/DD/YY HH:mm:ssa';
exports.DEFAULT_TIME_FORMAT = DEFAULT_TIME_FORMAT;
var SPEED_CONTROL_RANGE = [0, 10];
exports.SPEED_CONTROL_RANGE = SPEED_CONTROL_RANGE;
var SPEED_CONTROL_STEP = 0.001; // Geocoder

exports.SPEED_CONTROL_STEP = SPEED_CONTROL_STEP;
var GEOCODER_DATASET_NAME = 'geocoder_dataset';
exports.GEOCODER_DATASET_NAME = GEOCODER_DATASET_NAME;
var GEOCODER_LAYER_ID = 'geocoder_layer';
exports.GEOCODER_LAYER_ID = GEOCODER_LAYER_ID;
var GEOCODER_GEO_OFFSET = 0.05;
exports.GEOCODER_GEO_OFFSET = GEOCODER_GEO_OFFSET;
var GEOCODER_ICON_COLOR = [255, 0, 0];
exports.GEOCODER_ICON_COLOR = GEOCODER_ICON_COLOR;
var GEOCODER_ICON_SIZE = 80; // We could use directly react-map-gl-draw EditorMode but this would
// create a direct dependency with react-map-gl-draw
// Created this map to be independent from react-map-gl-draw

exports.GEOCODER_ICON_SIZE = GEOCODER_ICON_SIZE;
var EDITOR_MODES = {
  READ_ONLY: _reactMapGlDraw.EditorModes.READ_ONLY,
  DRAW_POLYGON: _reactMapGlDraw.EditorModes.DRAW_POLYGON,
  DRAW_RECTANGLE: _reactMapGlDraw.EditorModes.DRAW_RECTANGLE,
  EDIT: _reactMapGlDraw.EditorModes.EDIT_VERTEX
};
exports.EDITOR_MODES = EDITOR_MODES;
var EDITOR_AVAILABLE_LAYERS = [_types.LAYER_TYPES.point, _types.LAYER_TYPES.hexagon, _types.LAYER_TYPES.arc, _types.LAYER_TYPES.line, _types.LAYER_TYPES.hexagonId]; // GPU Filtering

/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.EDITOR_AVAILABLE_LAYERS = EDITOR_AVAILABLE_LAYERS;
var MAX_GPU_FILTERS = 4;
exports.MAX_GPU_FILTERS = MAX_GPU_FILTERS;
var MAP_THUMBNAIL_DIMENSION = {
  width: 300,
  height: 200
};
exports.MAP_THUMBNAIL_DIMENSION = MAP_THUMBNAIL_DIMENSION;
var MAP_INFO_CHARACTER = {
  title: 100,
  description: 100
}; // Load data

exports.MAP_INFO_CHARACTER = MAP_INFO_CHARACTER;
var LOADING_METHODS = (0, _keymirror["default"])({
  upload: null,
  storage: null
});
exports.LOADING_METHODS = LOADING_METHODS;
var DATASET_FORMATS = (0, _keymirror["default"])({
  row: null,
  geojson: null,
  csv: null,
  keplergl: null
});
exports.DATASET_FORMATS = DATASET_FORMATS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05fUFJFRklYIiwiQ0xPVURGUk9OVCIsIklDT05fUFJFRklYIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIkRBVEFfVEFCTEVfSUQiLCJERUxFVEVfREFUQV9JRCIsIkFERF9EQVRBX0lEIiwiRVhQT1JUX0lNQUdFX0lEIiwiRVhQT1JUX0RBVEFfSUQiLCJBRERfTUFQX1NUWUxFX0lEIiwiRVhQT1JUX01BUF9JRCIsIlNBVkVfTUFQX0lEIiwiT1ZFUldSSVRFX01BUF9JRCIsIlNIQVJFX01BUF9JRCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJLRVBMRVJfR0xfV0VCU0lURSIsIkRJTUVOU0lPTlMiLCJzaWRlUGFuZWwiLCJ3aWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImhlYWRlckhlaWdodCIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwiVEhFTUUiLCJsaWdodCIsImRhcmsiLCJiYXNlIiwiU0lERUJBUl9QQU5FTFMiLCJpZCIsImxhYmVsIiwiaWNvbkNvbXBvbmVudCIsIkxheWVycyIsIkZpbHRlckZ1bm5lbCIsIkN1cnNvckNsaWNrIiwiU2V0dGluZ3MiLCJQQU5FTFMiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsInNsdWciLCJmaWx0ZXIiLCJtYXRjaCIsImRlZmF1bHRWaXNpYmlsaXR5IiwiREVGQVVMVF9NQVBfU1RZTEVTIiwidXJsIiwiaWNvbiIsImxheWVyR3JvdXBzIiwiR0VPSlNPTl9GSUVMRFMiLCJnZW9qc29uIiwiSUNPTl9GSUVMRFMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsIlRSSVBfQVJDX0ZJRUxEUyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJGSUxURVJfVFlQRVMiLCJyYW5nZSIsInNlbGVjdCIsImlucHV0IiwidGltZVJhbmdlIiwibXVsdGlTZWxlY3QiLCJwb2x5Z29uIiwiU0NBTEVfVFlQRVMiLCJvcmRpbmFsIiwicXVhbnRpbGUiLCJxdWFudGl6ZSIsImxpbmVhciIsInNxcnQiLCJsb2ciLCJwb2ludCIsIlNDQUxFX0ZVTkMiLCJzY2FsZUxpbmVhciIsInNjYWxlUXVhbnRpemUiLCJzY2FsZVF1YW50aWxlIiwic2NhbGVPcmRpbmFsIiwic2NhbGVTcXJ0Iiwic2NhbGVMb2ciLCJzY2FsZVBvaW50IiwiQUxMX0ZJRUxEX1RZUEVTIiwiZGF0ZSIsImludGVnZXIiLCJyZWFsIiwic3RyaW5nIiwidGltZXN0YW1wIiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIkRFU0NFTkRJTkciLCJVTlNPUlQiLCJUQUJMRV9PUFRJT04iLCJTT1JUX0FTQyIsIlNPUlRfREVTIiwiUElOIiwiVU5QSU4iLCJDT1BZIiwiVEFCTEVfT1BUSU9OX0xJU1QiLCJ2YWx1ZSIsImRpc3BsYXkiLCJBcnJvd1VwIiwiY29uZGl0aW9uIiwicHJvcHMiLCJzb3J0TW9kZSIsIkFycm93RG93biIsIkNhbmNlbCIsImlzU29ydGVkIiwiUGluIiwiaXNQaW5uZWQiLCJDbGlwYm9hcmQiLCJPUkFOR0UiLCJQSU5LIiwiUFVSUExFIiwiQkxVRSIsIkJMVUUyIiwiQkxVRTMiLCJHUkVFTiIsIlJFRCIsIkZJTEVEX1RZUEVfRElTUExBWSIsImNvbG9yIiwiRklFTERfQ09MT1JTIiwiSElHSExJR0hfQ09MT1JfM0QiLCJDSEFOTkVMX1NDQUxFUyIsInJhZGl1cyIsInNpemUiLCJjb2xvckFnZ3IiLCJzaXplQWdnciIsIkFHR1JFR0FUSU9OX1RZUEVTIiwiY291bnQiLCJhdmVyYWdlIiwibWF4aW11bSIsIm1pbmltdW0iLCJtZWRpYW4iLCJzdGRldiIsInN1bSIsInZhcmlhbmNlIiwibW9kZSIsImNvdW50VW5pcXVlIiwibGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyIsImxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zIiwib3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMiLCJvcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMiLCJub3RTdXBwb3J0ZWRTY2FsZU9wdHMiLCJub3RTdXBwb3J0QWdnck9wdHMiLCJERUZBVUxUX0FHR1JFR0FUSU9OIiwiRklFTERfT1BUUyIsInR5cGUiLCJzY2FsZSIsImZvcm1hdCIsImxlZ2VuZCIsImQiLCJ0b29sdGlwIiwiVE9PTFRJUF9GT1JNQVRfVFlQRVMiLCJOT05FIiwiREVDSU1BTCIsIlBFUkNFTlRBR0UiLCJEQVRFIiwiREFURV9USU1FIiwiQk9PTEVBTiIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwia2V5IiwiZnQiLCJsZW5ndGgiLCJERUZBVUxUX0xBWUVSX0NPTE9SIiwidHJpcEFyYyIsImJlZ2ludHJpcF9sYXQiLCJkcm9wb2ZmX2xhdCIsInJlcXVlc3RfbGF0IiwiREVGQVVMVF9UT09MVElQX0ZJRUxEUyIsIk5PX1ZBTFVFX0NPTE9SIiwiTEFZRVJfQkxFTkRJTkdTIiwiYWRkaXRpdmUiLCJibGVuZEZ1bmMiLCJibGVuZEVxdWF0aW9uIiwibm9ybWFsIiwic3VidHJhY3RpdmUiLCJNQVhfREVGQVVMVF9UT09MVElQUyIsIlJFU09MVVRJT05TIiwiT05FX1giLCJUV09fWCIsIkVYUE9SVF9JTUdfUkFUSU9TIiwiU0NSRUVOIiwiRk9VUl9CWV9USFJFRSIsIlNJWFRFRU5fQllfTklORSIsIkNVU1RPTSIsIkVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyIsImdldFNpemUiLCJzY3JlZW5XIiwic2NyZWVuSCIsImhlaWdodCIsImhpZGRlbiIsIm1hcFciLCJtYXBIIiwiTWF0aCIsInJvdW5kIiwiRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMiLCJhdmFpbGFibGUiLCJFWFBPUlRfREFUQV9UWVBFIiwiQ1NWIiwiRVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TIiwidG9Mb3dlckNhc2UiLCJFWFBPUlRfTUFQX0ZPUk1BVFMiLCJIVE1MIiwiSlNPTiIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJFRElUIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMiLCJERUZBVUxUX1VVSURfQ09VTlQiLCJERUZBVUxUX05PVElGSUNBVElPTl9NRVNTQUdFIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVFlQRVMiLCJpbmZvIiwiZXJyb3IiLCJ3YXJuaW5nIiwic3VjY2VzcyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsImZpbGUiLCJUSFJPVFRMRV9OT1RJRklDQVRJT05fVElNRSIsIkJBU0VfU1BFRUQiLCJGUFMiLCJBTklNQVRJT05fV0lORE9XIiwiZnJlZSIsImluY3JlbWVudGFsIiwiaW50ZXJ2YWwiLCJERUZBVUxUX1RJTUVfRk9STUFUIiwiU1BFRURfQ09OVFJPTF9SQU5HRSIsIlNQRUVEX0NPTlRST0xfU1RFUCIsIkdFT0NPREVSX0RBVEFTRVRfTkFNRSIsIkdFT0NPREVSX0xBWUVSX0lEIiwiR0VPQ09ERVJfR0VPX09GRlNFVCIsIkdFT0NPREVSX0lDT05fQ09MT1IiLCJHRU9DT0RFUl9JQ09OX1NJWkUiLCJFRElUT1JfTU9ERVMiLCJSRUFEX09OTFkiLCJFZGl0b3JNb2RlcyIsIkRSQVdfUE9MWUdPTiIsIkRSQVdfUkVDVEFOR0xFIiwiRURJVF9WRVJURVgiLCJFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyIsIkxBWUVSX1RZUEVTIiwiaGV4YWdvbiIsImFyYyIsImxpbmUiLCJoZXhhZ29uSWQiLCJNQVhfR1BVX0ZJTFRFUlMiLCJNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiIsIk1BUF9JTkZPX0NIQVJBQ1RFUiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJMT0FESU5HX01FVEhPRFMiLCJ1cGxvYWQiLCJzdG9yYWdlIiwiREFUQVNFVF9GT1JNQVRTIiwicm93IiwiY3N2Iiwia2VwbGVyZ2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztB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RVA7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxZQUFZLEdBQUc7QUFDMUJDLEVBQUFBLFNBQVMsRUFBRUMsNEJBQVlELFNBREc7QUFFMUJFLEVBQUFBLFlBQVksRUFBRUQsNEJBQVlDLFlBRkE7QUFHMUJDLEVBQUFBLGNBQWMsRUFBRUYsNEJBQVlFLGNBSEY7QUFJMUJuQyxFQUFBQSxJQUFJLEVBQUVpQyw0QkFBWUc7QUFKUSxDQUFyQjs7QUFPQSxJQUFNQyx1QkFBdUIsR0FBRyxDQUNyQ0MsbUJBQVloTCxLQUR5QixFQUVyQ2dMLG1CQUFZQyxPQUZ5QixFQUdyQ0QsbUJBQVlFLEdBSHlCLEVBSXJDRixtQkFBWUcsSUFKeUIsRUFLckNILG1CQUFZSSxTQUx5QixDQUFoQyxDLENBT1A7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxlQUFlLEdBQUcsQ0FBeEI7O0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUc7QUFDckM1TyxFQUFBQSxLQUFLLEVBQUUsR0FEOEI7QUFFckMrSyxFQUFBQSxNQUFNLEVBQUU7QUFGNkIsQ0FBaEM7O0FBS0EsSUFBTThELGtCQUFrQixHQUFHO0FBQ2hDQyxFQUFBQSxLQUFLLEVBQUUsR0FEeUI7QUFFaENDLEVBQUFBLFdBQVcsRUFBRTtBQUZtQixDQUEzQixDLENBS1A7OztBQUNPLElBQU1DLGVBQWUsR0FBRywyQkFBVTtBQUN2Q0MsRUFBQUEsTUFBTSxFQUFFLElBRCtCO0FBRXZDQyxFQUFBQSxPQUFPLEVBQUU7QUFGOEIsQ0FBVixDQUF4Qjs7QUFLQSxJQUFNQyxlQUFlLEdBQUcsMkJBQVU7QUFDdkNDLEVBQUFBLEdBQUcsRUFBRSxJQURrQztBQUV2Q3BOLEVBQUFBLE9BQU8sRUFBRSxJQUY4QjtBQUd2Q3FOLEVBQUFBLEdBQUcsRUFBRSxJQUhrQztBQUl2Q0MsRUFBQUEsUUFBUSxFQUFFO0FBSjZCLENBQVYsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQga2V5TWlycm9yIGZyb20gJ2tleW1pcnJvcic7XG5pbXBvcnQge0VkaXRvck1vZGVzfSBmcm9tICdyZWFjdC1tYXAtZ2wtZHJhdyc7XG5cbmltcG9ydCB7XG4gIHNjYWxlTGluZWFyLFxuICBzY2FsZVF1YW50aXplLFxuICBzY2FsZVF1YW50aWxlLFxuICBzY2FsZU9yZGluYWwsXG4gIHNjYWxlU3FydCxcbiAgc2NhbGVMb2csXG4gIHNjYWxlUG9pbnRcbn0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtcbiAgTGF5ZXJzLFxuICBGaWx0ZXJGdW5uZWwsXG4gIFNldHRpbmdzLFxuICBDdXJzb3JDbGljayxcbiAgUGluLFxuICBBcnJvd0Rvd24sXG4gIEFycm93VXAsXG4gIENsaXBib2FyZCxcbiAgQ2FuY2VsXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7Z2V0SFRNTE1hcE1vZGVUaWxlVXJsfSBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQge1RPT0xUSVBfRk9STUFUX1RZUEVTfSBmcm9tICcuL3Rvb2x0aXAnO1xuaW1wb3J0IHtMQVlFUl9UWVBFU30gZnJvbSAnbGF5ZXJzL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9QUkVGSVggPSAnQEBrZXBsZXIuZ2wvJztcbmV4cG9ydCBjb25zdCBDTE9VREZST05UID0gJ2h0dHBzOi8vZDFhM2Y0c3BhenpycDQuY2xvdWRmcm9udC5uZXQva2VwbGVyLmdsJztcbmV4cG9ydCBjb25zdCBJQ09OX1BSRUZJWCA9IGAke0NMT1VERlJPTlR9L2dlb2R1ZGVgO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFQQk9YX0FQSV9VUkwgPSAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbSc7XG5cbi8vIE1vZGFsIElkc1xuLyoqXG4gKiBNb2RhbCBpZDogZGF0YSB0YWJsZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREFUQV9UQUJMRV9JRCA9ICdkYXRhVGFibGUnO1xuLyoqXG4gKiBNb2RhbCBpZDogZGVsZXRlIGRhdGFzZXQgY29uZmlybSBkaWFsb2dcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURV9EQVRBX0lEID0gJ2RlbGV0ZURhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogYWRkIGRhdGEgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFERF9EQVRBX0lEID0gJ2FkZERhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IGltYWdlIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBFWFBPUlRfSU1BR0VfSUQgPSAnZXhwb3J0SW1hZ2UnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IGRhdGEgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX0lEID0gJ2V4cG9ydERhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogYWRkIGN1c3RvbSBtYXAgc3R5bGUgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFERF9NQVBfU1RZTEVfSUQgPSAnYWRkTWFwU3R5bGUnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IG1hcCBtb2RhbFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9JRCA9ICdleHBvcnRNYXAnO1xuLyoqXG4gKiBNb2RhbCBpZDogc2F2ZSBtYXAgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IFNBVkVfTUFQX0lEID0gJ3NhdmVNYXAnO1xuLyoqXG4gKiBNb2RhbCBpZDogY29uZmlybSB0byBvdmVyd3JpdGUgc2F2ZWQgbWFwXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBPVkVSV1JJVEVfTUFQX0lEID0gJ292ZXJ3cml0ZU1hcCc7XG4vKipcbiAqIE1vZGFsIGlkOiBzaGFyZSBtYXAgdXJsIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBTSEFSRV9NQVBfSUQgPSAnc2hhcmVNYXAnO1xuXG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX05BTUUgPSAna2VwbGVyLmdsJztcblxuLy8gX19QQUNLQUdFX1ZFUlNJT05fXyBpcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGJ5IEJhYmVsL1dlYnBhY2sgZHVyaW5nIHRoZSBidWlsZGluZyBwcm9jZXNzXG4vLyBTaW5jZSB3ZSBhcmUgaW5qZWN0aW5nIHRoaXMgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzIHdpdGggYmFiZWxcbi8vIHdoaWxlIGRldmVsb3BpbmcgVkVSU0lPTiBpcyBub3QgZGVmaW5lZCwgd2UgY2FwdHVyZSB0aGUgZXhjZXB0aW9uIGFuZCByZXR1cm5cbi8vIGFuIGVtcHR5IHN0cmluZyB3aGljaCB3aWxsIGFsbG93IHVzIHRvIHJldHJpZXZlIHRoZSBsYXRlc3QgdW1kIHZlcnNpb25cbmV4cG9ydCBjb25zdCBLRVBMRVJfR0xfVkVSU0lPTiA9ICdfX1BBQ0tBR0VfVkVSU0lPTl9fJztcbmV4cG9ydCBjb25zdCBLRVBMRVJfR0xfV0VCU0lURSA9ICdodHRwOi8va2VwbGVyLmdsLyc7XG5cbmV4cG9ydCBjb25zdCBESU1FTlNJT05TID0ge1xuICBzaWRlUGFuZWw6IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIG1hcmdpbjoge3RvcDogMjAsIGxlZnQ6IDIwLCBib3R0b206IDMwLCByaWdodDogMjB9LFxuICAgIGhlYWRlckhlaWdodDogOTZcbiAgfSxcbiAgbWFwQ29udHJvbDoge1xuICAgIHdpZHRoOiAxODQsXG4gICAgcGFkZGluZzogMTJcbiAgfVxufTtcblxuLyoqXG4gKiBUaGVtZSBuYW1lIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBgS2VwbGVyR2xgIGBwcm9wLnRoZW1lYC5cbiAqIEF2YWlsYWJsZSB0aGVtZXMgYXJlIGBUSEVNRS5saWdodGAgYW5kIGBUSEVNRS5kYXJrYC4gRGVmYXVsdCB0aGVtZSBpcyBgVEhFTUUuZGFya2BcbiAqIEBjb25zdGFudFxuICogQHR5cGUge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29uc3QgTWFwID0gKCkgPT4gPEtlcGxlckdsIHRoZW1lPXtUSEVNRS5saWdodH0gaWQ9XCJtYXBcIi8+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFRIRU1FID0ga2V5TWlycm9yKHtcbiAgbGlnaHQ6IG51bGwsXG4gIGRhcms6IG51bGwsXG4gIGJhc2U6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgU0lERUJBUl9QQU5FTFMgPSBbXG4gIHtcbiAgICBpZDogJ2xheWVyJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmxheWVyJyxcbiAgICBpY29uQ29tcG9uZW50OiBMYXllcnNcbiAgfSxcbiAge1xuICAgIGlkOiAnZmlsdGVyJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmZpbHRlcicsXG4gICAgaWNvbkNvbXBvbmVudDogRmlsdGVyRnVubmVsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2ludGVyYWN0aW9uJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxzLmludGVyYWN0aW9uJyxcbiAgICBpY29uQ29tcG9uZW50OiBDdXJzb3JDbGlja1xuICB9LFxuICB7XG4gICAgaWQ6ICdtYXAnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5wYW5lbHMuYmFzZW1hcCcsXG4gICAgaWNvbkNvbXBvbmVudDogU2V0dGluZ3NcbiAgfVxuXTtcblxuLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuZXhwb3J0IGNvbnN0IFBBTkVMUyA9IFNJREVCQVJfUEFORUxTO1xuXG4vLyBNQVAgU1RZTEVTXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX0dST1VQUyA9IFtcbiAge1xuICAgIHNsdWc6ICdsYWJlbCcsXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShsYWJlbHxwbGFjZS18cG9pLSkpLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IHRydWVcbiAgfSxcbiAge1xuICAgIHNsdWc6ICdyb2FkJyxcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHJvYWR8cmFpbHdheXx0dW5uZWx8c3RyZWV0fGJyaWRnZSkpKD8hLipsYWJlbCkvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ2JvcmRlcicsXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goL2JvcmRlcnxib3VuZGFyaWVzLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnYnVpbGRpbmcnLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnd2F0ZXInLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0od2F0ZXJ8c3RyZWFtfGZlcnJ5KSkvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ2xhbmQnLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0ocGFya3N8bGFuZGNvdmVyfGluZHVzdHJpYWx8c2FuZHxoaWxsc2hhZGUpKS8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnM2QgYnVpbGRpbmcnLFxuICAgIGZpbHRlcjogKCkgPT4gZmFsc2UsXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IGZhbHNlXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUF9TVFlMRVMgPSBbXG4gIHtcbiAgICBpZDogJ2RhcmsnLFxuICAgIGxhYmVsOiAnRGFyaycsXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2Nqb3FiYmY2bDlrMzAyc2w5NnR5dmthMDknLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX0RBUktfVjIucG5nYCxcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcbiAgfSxcbiAge1xuICAgIGlkOiAnbGlnaHQnLFxuICAgIGxhYmVsOiAnTGlnaHQnLFxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jam9xYjlqMzM5azFmMnNsOXQ1aWM1Ym40JyxcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9MSUdIVF9WMi5wbmdgLFxuICAgIGxheWVyR3JvdXBzOiBERUZBVUxUX0xBWUVSX0dST1VQU1xuICB9LFxuICB7XG4gICAgaWQ6ICdtdXRlZCcsXG4gICAgbGFiZWw6ICdNdXRlZCBMaWdodCcsXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2NqZnlsMDNrcDF0dWwyc21mNXYydGJkZDQnLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX01VVEVEX0xJR0hULnBuZ2AsXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXG4gIH0sXG4gIHtcbiAgICBpZDogJ211dGVkX25pZ2h0JyxcbiAgICBsYWJlbDogJ011dGVkIE5pZ2h0JyxcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pmeGhsaWttYWoxYjJzb3l6ZXZueXdncycsXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfTVVURURfTklHSFQucG5nYCxcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcbiAgfSxcbiAge1xuICAgIGlkOiAnc2F0ZWxsaXRlJyxcbiAgICBsYWJlbDogJ1NhdGVsbGl0ZScsXG4gICAgdXJsOiBgbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjlgLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX1NBVEVMTElURS5wbmdgXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBHRU9KU09OX0ZJRUxEUyA9IHtcbiAgZ2VvanNvbjogWydfZ2VvanNvbicsICdhbGxfcG9pbnRzJywgJ2dlb2pzb24nXVxufTtcblxuZXhwb3J0IGNvbnN0IElDT05fRklFTERTID0ge1xuICBpY29uOiBbJ2ljb24nXVxufTtcblxuZXhwb3J0IGNvbnN0IFRSSVBfUE9JTlRfRklFTERTID0gW1xuICBbJ2xhdCcsICdsbmcnXSxcbiAgWydsYXQnLCAnbG9uJ10sXG4gIFsnbGF0aXR1ZGUnLCAnbG9uZ2l0dWRlJ11cbl07XG5cbmV4cG9ydCBjb25zdCBUUklQX0FSQ19GSUVMRFMgPSB7XG4gIGxhdDA6ICdiZWdpbnRyaXAnLFxuICBsbmcwOiAnYmVnaW50cmlwJyxcbiAgbGF0MTogJ2Ryb3BvZmYnLFxuICBsbmcxOiAnZHJvcG9mZidcbn07XG5cbmV4cG9ydCBjb25zdCBGSUxURVJfVFlQRVMgPSBrZXlNaXJyb3Ioe1xuICByYW5nZTogbnVsbCxcbiAgc2VsZWN0OiBudWxsLFxuICBpbnB1dDogbnVsbCxcbiAgdGltZVJhbmdlOiBudWxsLFxuICBtdWx0aVNlbGVjdDogbnVsbCxcbiAgcG9seWdvbjogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBTQ0FMRV9UWVBFUyA9IGtleU1pcnJvcih7XG4gIG9yZGluYWw6IG51bGwsXG4gIHF1YW50aWxlOiBudWxsLFxuICBxdWFudGl6ZTogbnVsbCxcbiAgbGluZWFyOiBudWxsLFxuICBzcXJ0OiBudWxsLFxuICBsb2c6IG51bGwsXG5cbiAgLy8gb3JkaW5hbCBkb21haW4gdG8gbGluZWFyIHJhbmdlXG4gIHBvaW50OiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNDQUxFX0ZVTkMgPSB7XG4gIFtTQ0FMRV9UWVBFUy5saW5lYXJdOiBzY2FsZUxpbmVhcixcbiAgW1NDQUxFX1RZUEVTLnF1YW50aXplXTogc2NhbGVRdWFudGl6ZSxcbiAgW1NDQUxFX1RZUEVTLnF1YW50aWxlXTogc2NhbGVRdWFudGlsZSxcbiAgW1NDQUxFX1RZUEVTLm9yZGluYWxdOiBzY2FsZU9yZGluYWwsXG4gIFtTQ0FMRV9UWVBFUy5zcXJ0XTogc2NhbGVTcXJ0LFxuICBbU0NBTEVfVFlQRVMubG9nXTogc2NhbGVMb2csXG4gIFtTQ0FMRV9UWVBFUy5wb2ludF06IHNjYWxlUG9pbnRcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfRklFTERfVFlQRVMgPSBrZXlNaXJyb3Ioe1xuICBib29sZWFuOiBudWxsLFxuICBkYXRlOiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBpbnRlZ2VyOiBudWxsLFxuICByZWFsOiBudWxsLFxuICBzdHJpbmc6IG51bGwsXG4gIHRpbWVzdGFtcDogbnVsbCxcbiAgcG9pbnQ6IG51bGxcbn0pO1xuXG4vLyBEYXRhIFRhYmxlXG5leHBvcnQgY29uc3QgU09SVF9PUkRFUiA9IGtleU1pcnJvcih7XG4gIEFTQ0VORElORzogbnVsbCxcbiAgREVTQ0VORElORzogbnVsbCxcbiAgVU5TT1JUOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFRBQkxFX09QVElPTiA9IGtleU1pcnJvcih7XG4gIFNPUlRfQVNDOiBudWxsLFxuICBTT1JUX0RFUzogbnVsbCxcbiAgVU5TT1JUOiBudWxsLFxuICBQSU46IG51bGwsXG4gIFVOUElOOiBudWxsLFxuICBDT1BZOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFRBQkxFX09QVElPTl9MSVNUID0gW1xuICB7XG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5TT1JUX0FTQyxcbiAgICBkaXNwbGF5OiAnU29ydCBBc2NlbmRpbmcnLFxuICAgIGljb246IEFycm93VXAsXG4gICAgY29uZGl0aW9uOiBwcm9wcyA9PiBwcm9wcy5zb3J0TW9kZSAhPT0gU09SVF9PUkRFUi5BU0NFTkRJTkdcbiAgfSxcbiAge1xuICAgIHZhbHVlOiBUQUJMRV9PUFRJT04uU09SVF9ERVMsXG4gICAgZGlzcGxheTogJ1NvcnQgRGVzY2VuZGluZycsXG4gICAgaWNvbjogQXJyb3dEb3duLFxuICAgIGNvbmRpdGlvbjogcHJvcHMgPT4gcHJvcHMuc29ydE1vZGUgIT09IFNPUlRfT1JERVIuREVTQ0VORElOR1xuICB9LFxuICB7XG4gICAgdmFsdWU6IFRBQkxFX09QVElPTi5VTlNPUlQsXG4gICAgZGlzcGxheTogJ1Vuc29ydCBDb2x1bW4nLFxuICAgIGljb246IENhbmNlbCxcbiAgICBjb25kaXRpb246IHByb3BzID0+IHByb3BzLmlzU29ydGVkXG4gIH0sXG4gIHt2YWx1ZTogVEFCTEVfT1BUSU9OLlBJTiwgZGlzcGxheTogJ1BpbiBDb2x1bW4nLCBpY29uOiBQaW4sIGNvbmRpdGlvbjogcHJvcHMgPT4gIXByb3BzLmlzUGlubmVkfSxcbiAge1xuICAgIHZhbHVlOiBUQUJMRV9PUFRJT04uVU5QSU4sXG4gICAgZGlzcGxheTogJ1VucGluIENvbHVtbicsXG4gICAgaWNvbjogQ2FuY2VsLFxuICAgIGNvbmRpdGlvbjogcHJvcHMgPT4gcHJvcHMuaXNQaW5uZWRcbiAgfSxcbiAge3ZhbHVlOiBUQUJMRV9PUFRJT04uQ09QWSwgZGlzcGxheTogJ0NvcHkgQ29sdW1uJywgaWNvbjogQ2xpcGJvYXJkfVxuXTtcblxuY29uc3QgT1JBTkdFID0gJzI0OCwgMTk0LCAyOCc7XG5jb25zdCBQSU5LID0gJzIzMSwgMTg5LCAxOTQnO1xuY29uc3QgUFVSUExFID0gJzE2MCwgMTA2LCAyMDYnO1xuY29uc3QgQkxVRSA9ICcxNDAsIDIxMCwgMjA1JztcbmNvbnN0IEJMVUUyID0gJzEwNiwgMTYwLCAyMDYnO1xuY29uc3QgQkxVRTMgPSAnMCwgMTcyLCAyMzcnO1xuY29uc3QgR1JFRU4gPSAnMTA2LCAxNjAsIDU2JztcbmNvbnN0IFJFRCA9ICcyMzcsIDg4LCAxMDYnO1xuXG5leHBvcnQgY29uc3QgRklMRURfVFlQRV9ESVNQTEFZID0ge1xuICBbQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW5dOiB7XG4gICAgbGFiZWw6ICdib29sJyxcbiAgICBjb2xvcjogUElOS1xuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmRhdGVdOiB7XG4gICAgbGFiZWw6ICdkYXRlJyxcbiAgICBjb2xvcjogUFVSUExFXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMuZ2VvanNvbl06IHtcbiAgICBsYWJlbDogJ2dlbycsXG4gICAgY29sb3I6IEJMVUUyXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMuaW50ZWdlcl06IHtcbiAgICBsYWJlbDogJ2ludCcsXG4gICAgY29sb3I6IE9SQU5HRVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnJlYWxdOiB7XG4gICAgbGFiZWw6ICdmbG9hdCcsXG4gICAgY29sb3I6IE9SQU5HRVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLnN0cmluZ106IHtcbiAgICBsYWJlbDogJ3N0cmluZycsXG4gICAgY29sb3I6IEJMVUVcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXBdOiB7XG4gICAgbGFiZWw6ICd0aW1lJyxcbiAgICBjb2xvcjogR1JFRU5cbiAgfSxcbiAgLy8gZmllbGQgcGFpcnNcbiAgW0FMTF9GSUVMRF9UWVBFUy5wb2ludF06IHtcbiAgICBsYWJlbDogJ3BvaW50JyxcbiAgICBjb2xvcjogQkxVRTNcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEZJRUxEX0NPTE9SUyA9IHtcbiAgZGVmYXVsdDogUkVEXG59O1xuZXhwb3J0IGNvbnN0IEhJR0hMSUdIX0NPTE9SXzNEID0gWzI1NSwgMjU1LCAyNTUsIDYwXTtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1NDQUxFUyA9IGtleU1pcnJvcih7XG4gIGNvbG9yOiBudWxsLFxuICByYWRpdXM6IG51bGwsXG4gIHNpemU6IG51bGwsXG4gIGNvbG9yQWdncjogbnVsbCxcbiAgc2l6ZUFnZ3I6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgQUdHUkVHQVRJT05fVFlQRVMgPSB7XG4gIC8vIGRlZmF1bHRcbiAgY291bnQ6ICdjb3VudCcsXG4gIC8vIGxpbmVhclxuICBhdmVyYWdlOiAnYXZlcmFnZScsXG4gIG1heGltdW06ICdtYXhpbXVtJyxcbiAgbWluaW11bTogJ21pbmltdW0nLFxuICBtZWRpYW46ICdtZWRpYW4nLFxuICBzdGRldjogJ3N0ZGV2JyxcbiAgc3VtOiAnc3VtJyxcbiAgdmFyaWFuY2U6ICd2YXJpYW5jZScsXG4gIC8vIG9yZGluYWxcbiAgbW9kZTogJ21vZGUnLFxuICBjb3VudFVuaXF1ZTogJ2NvdW50IHVuaXF1ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgW0NIQU5ORUxfU0NBTEVTLnJhZGl1c106IFtTQ0FMRV9UWVBFUy5zcXJ0XSxcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXG59O1xuXG5leHBvcnQgY29uc3QgbGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMgPSB7XG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiB7XG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2VdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWF4aW11bV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1lZGlhbl06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdGRldl06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMudmFyaWFuY2VdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXVxuICB9LFxuXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHtcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZV06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ10sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWVkaWFuXTogW1NDQUxFX1RZUEVTLmxpbmVhciwgU0NBTEVfVFlQRVMuc3FydCwgU0NBTEVfVFlQRVMubG9nXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3RkZXZdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy52YXJpYW5jZV06IFtTQ0FMRV9UWVBFUy5saW5lYXIsIFNDQUxFX1RZUEVTLnNxcnQsIFNDQUxFX1RZUEVTLmxvZ11cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG9yZGluYWxGaWVsZFNjYWxlRnVuY3Rpb25zID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbU0NBTEVfVFlQRVMub3JkaW5hbF0sXG4gIFtDSEFOTkVMX1NDQUxFUy5yYWRpdXNdOiBbU0NBTEVfVFlQRVMucG9pbnRdLFxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZV06IFtTQ0FMRV9UWVBFUy5wb2ludF1cbn07XG5cbmV4cG9ydCBjb25zdCBvcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMgPSB7XG4gIC8vIFtDSEFOTkVMX1NDQUxFUy5jb2xvckFnZ3JdOiBbU0NBTEVfVFlQRVMub3JkaW5hbCwgU0NBTEVfVFlQRVMubGluZWFyXSxcbiAgW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IHtcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubW9kZV06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRVbmlxdWVdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXVxuICB9LFxuXG4gIC8vIEN1cnJlbnRseSBkb2Vzbid0IHN1cHBvcnQgeWV0XG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHt9XG59O1xuXG5leHBvcnQgY29uc3Qgbm90U3VwcG9ydGVkU2NhbGVPcHRzID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbXSxcbiAgW0NIQU5ORUxfU0NBTEVTLnJhZGl1c106IFtdLFxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZV06IFtdXG59O1xuXG5leHBvcnQgY29uc3Qgbm90U3VwcG9ydEFnZ3JPcHRzID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge30sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHt9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgYWdncmVnYXRpb24gYXJlIGJhc2VkIG9uIG9jdW50XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FHR1JFR0FUSU9OID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge1xuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudF06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXG4gIH0sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHtcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRdOiBbU0NBTEVfVFlQRVMubGluZWFyLCBTQ0FMRV9UWVBFUy5zcXJ0LCBTQ0FMRV9UWVBFUy5sb2ddXG4gIH1cbn07XG5cbi8qKlxuICogRGVmaW5lIHdoYXQgdHlwZSBvZiBzY2FsZSBvcGVyYXRpb24gaXMgYWxsb3dlZCBvbiBlYWNoIHR5cGUgb2YgZmllbGRzXG4gKi9cbmV4cG9ydCBjb25zdCBGSUVMRF9PUFRTID0ge1xuICBzdHJpbmc6IHtcbiAgICB0eXBlOiAnY2F0ZWdvcmljYWwnLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtdXG4gICAgfVxuICB9LFxuICByZWFsOiB7XG4gICAgdHlwZTogJ251bWVyaWNhbCcsXG4gICAgc2NhbGU6IHtcbiAgICAgIC4uLmxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5saW5lYXJGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuTk9ORSxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuREVDSU1BTCxcbiAgICAgICAgVE9PTFRJUF9GT1JNQVRfVFlQRVMuUEVSQ0VOVEFHRVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgdGltZXN0YW1wOiB7XG4gICAgdHlwZTogJ3RpbWUnLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5saW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zLFxuICAgICAgLi4ubm90U3VwcG9ydEFnZ3JPcHRzXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIGxlZ2VuZDogZCA9PiBkLFxuICAgICAgdG9vbHRpcDogW1xuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5OT05FLFxuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFLFxuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFX1RJTUVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGludGVnZXI6IHtcbiAgICB0eXBlOiAnbnVtZXJpY2FsJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLmxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIGxlZ2VuZDogZCA9PiBkLFxuICAgICAgdG9vbHRpcDogW1xuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5OT05FLFxuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5ERUNJTUFMLFxuICAgICAgICBUT09MVElQX0ZPUk1BVF9UWVBFUy5QRVJDRU5UQUdFXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBib29sZWFuOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtUT09MVElQX0ZPUk1BVF9UWVBFUy5OT05FLCBUT09MVElQX0ZPUk1BVF9UWVBFUy5CT09MRUFOXVxuICAgIH1cbiAgfSxcbiAgZGF0ZToge1xuICAgIHNjYWxlOiB7XG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZCxcbiAgICAgIHRvb2x0aXA6IFtUT09MVElQX0ZPUk1BVF9UWVBFUy5OT05FLCBUT09MVElQX0ZPUk1BVF9UWVBFUy5EQVRFXVxuICAgIH1cbiAgfSxcbiAgZ2VvanNvbjoge1xuICAgIHR5cGU6ICdnZW9tZXRyeScsXG4gICAgc2NhbGU6IHtcbiAgICAgIC4uLm5vdFN1cHBvcnRlZFNjYWxlT3B0cyxcbiAgICAgIC4uLm5vdFN1cHBvcnRBZ2dyT3B0c1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gJy4uLicsXG4gICAgICB0b29sdGlwOiBbXVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyA9IE9iamVjdC5rZXlzKENIQU5ORUxfU0NBTEVTKS5yZWR1Y2UoXG4gIChhY2N1LCBrZXkpID0+ICh7XG4gICAgLi4uYWNjdSxcbiAgICBba2V5XTogT2JqZWN0LmtleXMoRklFTERfT1BUUykuZmlsdGVyKGZ0ID0+IE9iamVjdC5rZXlzKEZJRUxEX09QVFNbZnRdLnNjYWxlW2tleV0pLmxlbmd0aClcbiAgfSksXG4gIHt9XG4pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQVlFUl9DT0xPUiA9IHtcbiAgdHJpcEFyYzogJyM5MjI2QzYnLFxuICBiZWdpbnRyaXBfbGF0OiAnIzFFOTZCRScsXG4gIGRyb3BvZmZfbGF0OiAnI0ZGOTkxRicsXG4gIHJlcXVlc3RfbGF0OiAnIzUyQTM1Mydcbn07XG5cbi8vIGxldCB1c2VyIHBhc3MgaW4gZGVmYXVsdCB0b29sdGlwIGZpZWxkc1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTFRJUF9GSUVMRFMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IE5PX1ZBTFVFX0NPTE9SID0gWzAsIDAsIDAsIDBdO1xuXG5leHBvcnQgY29uc3QgTEFZRVJfQkxFTkRJTkdTID0ge1xuICBhZGRpdGl2ZToge1xuICAgIGxhYmVsOiAnbGF5ZXJCbGVuZGluZy5hZGRpdGl2ZScsXG4gICAgYmxlbmRGdW5jOiBbJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcbiAgICBibGVuZEVxdWF0aW9uOiAnRlVOQ19BREQnXG4gIH0sXG4gIG5vcm1hbDoge1xuICAgIC8vIHJlZmVyZW5jZSB0b1xuICAgIC8vIGh0dHBzOi8vbGltbnUuY29tL3dlYmdsLWJsZW5kaW5nLXlvdXJlLXByb2JhYmx5LXdyb25nL1xuICAgIGxhYmVsOiAnbGF5ZXJCbGVuZGluZy5ub3JtYWwnLFxuICAgIGJsZW5kRnVuYzogWydTUkNfQUxQSEEnLCAnT05FX01JTlVTX1NSQ19BTFBIQScsICdPTkUnLCAnT05FX01JTlVTX1NSQ19BTFBIQSddLFxuICAgIGJsZW5kRXF1YXRpb246IFsnRlVOQ19BREQnLCAnRlVOQ19BREQnXVxuICB9LFxuICBzdWJ0cmFjdGl2ZToge1xuICAgIGxhYmVsOiAnbGF5ZXJCbGVuZGluZy5zdWJ0cmFjdGl2ZScsXG4gICAgYmxlbmRGdW5jOiBbJ09ORScsICdPTkVfTUlOVVNfRFNUX0NPTE9SJywgJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcbiAgICBibGVuZEVxdWF0aW9uOiBbJ0ZVTkNfU1VCVFJBQ1QnLCAnRlVOQ19BREQnXVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFYX0RFRkFVTFRfVE9PTFRJUFMgPSA1O1xuXG5leHBvcnQgY29uc3QgUkVTT0xVVElPTlMgPSBrZXlNaXJyb3Ioe1xuICBPTkVfWDogbnVsbCxcbiAgVFdPX1g6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0lNR19SQVRJT1MgPSBrZXlNaXJyb3Ioe1xuICBTQ1JFRU46IG51bGwsXG4gIEZPVVJfQllfVEhSRUU6IG51bGwsXG4gIFNJWFRFRU5fQllfTklORTogbnVsbCxcbiAgQ1VTVE9NOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IEVYUE9SVF9JTUdfUkFUSU9fT1BUSU9OUyA9IFtcbiAge1xuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5TQ1JFRU4sXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpb09yaWdpbmFsU2NyZWVuJyxcbiAgICBnZXRTaXplOiAoc2NyZWVuVywgc2NyZWVuSCkgPT4gKHt3aWR0aDogc2NyZWVuVywgaGVpZ2h0OiBzY3JlZW5IfSlcbiAgfSxcbiAge1xuICAgIGlkOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT00sXG4gICAgaGlkZGVuOiB0cnVlLFxuICAgIGxhYmVsOiAnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9DdXN0b20nLFxuICAgIGdldFNpemU6IChtYXBXLCBtYXBIKSA9PiAoe3dpZHRoOiBtYXBXLCBoZWlnaHQ6IG1hcEh9KVxuICB9LFxuICB7XG4gICAgaWQ6IEVYUE9SVF9JTUdfUkFUSU9TLkZPVVJfQllfVEhSRUUsXG4gICAgbGFiZWw6ICdtb2RhbC5leHBvcnRJbWFnZS5yYXRpbzRfMycsXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XG4gICAgICB3aWR0aDogc2NyZWVuVyxcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZChzY3JlZW5XICogMC43NSlcbiAgICB9KVxuICB9LFxuICB7XG4gICAgaWQ6IEVYUE9SVF9JTUdfUkFUSU9TLlNJWFRFRU5fQllfTklORSxcbiAgICBsYWJlbDogJ21vZGFsLmV4cG9ydEltYWdlLnJhdGlvMTZfOScsXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XG4gICAgICB3aWR0aDogc2NyZWVuVyxcbiAgICAgIGhlaWdodDogTWF0aC5yb3VuZChzY3JlZW5XICogMC41NjI1KVxuICAgIH0pXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBFWFBPUlRfSU1HX1JFU09MVVRJT05fT1BUSU9OUyA9IFtcbiAge1xuICAgIGlkOiBSRVNPTFVUSU9OUy5PTkVfWCxcbiAgICBsYWJlbDogJzF4JyxcbiAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgc2NhbGU6IDEsXG4gICAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XG4gICAgICB3aWR0aDogc2NyZWVuVyxcbiAgICAgIGhlaWdodDogc2NyZWVuSFxuICAgIH0pXG4gIH0sXG4gIHtcbiAgICBpZDogUkVTT0xVVElPTlMuVFdPX1gsXG4gICAgbGFiZWw6ICcyeCcsXG4gICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgIHNjYWxlOiAyLFxuICAgIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe1xuICAgICAgd2lkdGg6IHNjcmVlblcgKiAyLFxuICAgICAgaGVpZ2h0OiBzY3JlZW5IICogMlxuICAgIH0pXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9UWVBFID0ga2V5TWlycm9yKHtcbiAgQ1NWOiBudWxsXG4gIC8vIFNIQVBFRklMRTogbnVsbCxcbiAgLy8gSlNPTjogbnVsbCxcbiAgLy8gR0VPSlNPTjogbnVsbCxcbiAgLy8gVE9QT0pTT046IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TID0gW1xuICB7XG4gICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuQ1NWLFxuICAgIGxhYmVsOiBFWFBPUlRfREFUQV9UWVBFLkNTVi50b0xvd2VyQ2FzZSgpLFxuICAgIGF2YWlsYWJsZTogdHJ1ZVxuICB9XG4gIC8vIHtcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5TSEFQRUZJTEUsXG4gIC8vICAgbGFiZWw6ICdzaGFwZWZpbGUnLFxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLkpTT04sXG4gIC8vICAgbGFiZWw6ICdqc29uJyxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5HRU9KU09OLFxuICAvLyAgIGxhYmVsOiAnZ2VvanNvbicsXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuVE9QT0pTT04sXG4gIC8vICAgbGFiZWw6ICd0b3BvanNvbicsXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxuICAvLyB9XG5dO1xuXG4vLyBFeHBvcnQgbWFwIHR5cGVzXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9GT1JNQVRTID0ga2V5TWlycm9yKHtcbiAgSFRNTDogbnVsbCxcbiAgSlNPTjogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBFWFBPUlRfSFRNTF9NQVBfTU9ERVMgPSBrZXlNaXJyb3Ioe1xuICBSRUFEOiBudWxsLFxuICBFRElUOiBudWxsXG59KTtcblxuLy8gRXhwb3J0IG1hcCBvcHRpb25zXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9NQVBfRk9STUFUUykubWFwKGVudHJ5ID0+ICh7XG4gIGlkOiBlbnRyeVswXSxcbiAgbGFiZWw6IGVudHJ5WzFdLnRvTG93ZXJDYXNlKCksXG4gIGF2YWlsYWJsZTogdHJ1ZVxufSkpO1xuXG5leHBvcnQgY29uc3QgRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyA9IE9iamVjdC5lbnRyaWVzKEVYUE9SVF9IVE1MX01BUF9NT0RFUykubWFwKGVudHJ5ID0+ICh7XG4gIGlkOiBlbnRyeVswXSxcbiAgbGFiZWw6IGBtb2RhbC5leHBvcnRNYXAuaHRtbC4ke2VudHJ5WzFdLnRvTG93ZXJDYXNlKCl9YCxcbiAgYXZhaWxhYmxlOiB0cnVlLFxuICB1cmw6IGdldEhUTUxNYXBNb2RlVGlsZVVybChlbnRyeVsxXSlcbn0pKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVVVJRF9DT1VOVCA9IDY7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9NRVNTQUdFID0gJ01FU1NBR0VfTk9UX1BST1ZJREVEJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTID0ga2V5TWlycm9yKHtcbiAgaW5mbzogbnVsbCxcbiAgZXJyb3I6IG51bGwsXG4gIHdhcm5pbmc6IG51bGwsXG4gIHN1Y2Nlc3M6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTID0ga2V5TWlycm9yKHtcbiAgZ2xvYmFsOiBudWxsLFxuICBmaWxlOiBudWxsXG59KTtcblxuLy8gTWluaW11bSB0aW1lIGJldHdlZW4gaWRlbnRpY2FsIG5vdGlmaWNhdGlvbnMgYWJvdXQgZGVjay5nbCBlcnJvcnNcbmV4cG9ydCBjb25zdCBUSFJPVFRMRV9OT1RJRklDQVRJT05fVElNRSA9IDI1MDA7XG5cbi8vIEFuaW1hdGlvblxuZXhwb3J0IGNvbnN0IEJBU0VfU1BFRUQgPSA2MDA7XG5leHBvcnQgY29uc3QgRlBTID0gNjA7XG5cbi8qKlxuICogNCBBbmltYXRpb24gV2luZG93IFR5cGVzXG4gKiAxLiBmcmVlXG4gKiAgfC0+ICB8LT5cbiAqIEN1cnJlbnQgdGltZSBpcyBhIGZpeGVkIHJhbmdlLCBhbmltYXRpb24gY29udHJvbGxlciBjYWxscyBuZXh0IGFuaW1hdGlvbiBmcmFtZXMgY29udGludW91c2x5IHRvIGFuaW1hdGlvbiBhIG1vdmluZyB3aW5kb3dcbiAqIFRoZSBpbmNyZW1lbnQgaWQgYmFzZWQgb24gZG9tYWluIC8gQkFTRV9TUEVFRCAqIFNQRUVEXG4gKlxuICogMi4gaW5jcmVtZW50YWxcbiAqIHwgICAgfC0+XG4gKiBTYW1lIGFzIGZyZWUsIGN1cnJlbnQgdGltZSBpcyBhIGdyb3dpbmcgcmFuZ2UsIG9ubHkgdGhlIG1heCB2YWx1ZSBvZiByYW5nZSBpbmNyZW1lbnQgZHVyaW5nIGFuaW1hdGlvbi5cbiAqIFRoZSBpbmNyZW1lbnQgaXMgYWxzbyBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAqXG4gKiAzLiBwb2ludFxuICogbyAtPiBvXG4gKiBDdXJyZW50IHRpbWUgaXMgYSBwb2ludCwgYW5pbWF0aW9uIGNvbnRyb2xsZXIgY2FsbHMgbmV4dCBhbmltYXRpb24gZnJhbWUgY29udGludW91c2x5IHRvIGFuaW1hdGlvbiBhIG1vdmluZyBwb2ludFxuICogVGhlIGluY3JlbWVudCBpcyBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAqXG4gKiA0LiBpbnRlcnZhbFxuICogbyB+PiBvXG4gKiBDdXJyZW50IHRpbWUgaXMgYSBwb2ludC4gQW4gYXJyYXkgb2Ygc29ydGVkIHRpbWUgc3RlcHMgbmVlZCB0byBiZSBwcm92aWRlZC5cbiAqIGFuaW1hdGlvbiBjb250cm9sbGVyIGNhbGxzIG5leHQgYW5pbWF0aW9uIGF0IGEgaW50ZXJ2YWwgd2hlbiB0aGUgcG9pbnQganVtcHMgdG8gdGhlIG5leHQgc3RlcFxuICovXG5leHBvcnQgY29uc3QgQU5JTUFUSU9OX1dJTkRPVyA9IGtleU1pcnJvcih7XG4gIGZyZWU6IG51bGwsXG4gIGluY3JlbWVudGFsOiBudWxsLFxuICBwb2ludDogbnVsbCxcbiAgaW50ZXJ2YWw6IG51bGxcbn0pO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElNRV9GT1JNQVQgPSAnTU0vREQvWVkgSEg6bW06c3NhJztcbmV4cG9ydCBjb25zdCBTUEVFRF9DT05UUk9MX1JBTkdFID0gWzAsIDEwXTtcbmV4cG9ydCBjb25zdCBTUEVFRF9DT05UUk9MX1NURVAgPSAwLjAwMTtcblxuLy8gR2VvY29kZXJcbmV4cG9ydCBjb25zdCBHRU9DT0RFUl9EQVRBU0VUX05BTUUgPSAnZ2VvY29kZXJfZGF0YXNldCc7XG5leHBvcnQgY29uc3QgR0VPQ09ERVJfTEFZRVJfSUQgPSAnZ2VvY29kZXJfbGF5ZXInO1xuZXhwb3J0IGNvbnN0IEdFT0NPREVSX0dFT19PRkZTRVQgPSAwLjA1O1xuZXhwb3J0IGNvbnN0IEdFT0NPREVSX0lDT05fQ09MT1IgPSBbMjU1LCAwLCAwXTtcbmV4cG9ydCBjb25zdCBHRU9DT0RFUl9JQ09OX1NJWkUgPSA4MDtcblxuLy8gV2UgY291bGQgdXNlIGRpcmVjdGx5IHJlYWN0LW1hcC1nbC1kcmF3IEVkaXRvck1vZGUgYnV0IHRoaXMgd291bGRcbi8vIGNyZWF0ZSBhIGRpcmVjdCBkZXBlbmRlbmN5IHdpdGggcmVhY3QtbWFwLWdsLWRyYXdcbi8vIENyZWF0ZWQgdGhpcyBtYXAgdG8gYmUgaW5kZXBlbmRlbnQgZnJvbSByZWFjdC1tYXAtZ2wtZHJhd1xuZXhwb3J0IGNvbnN0IEVESVRPUl9NT0RFUyA9IHtcbiAgUkVBRF9PTkxZOiBFZGl0b3JNb2Rlcy5SRUFEX09OTFksXG4gIERSQVdfUE9MWUdPTjogRWRpdG9yTW9kZXMuRFJBV19QT0xZR09OLFxuICBEUkFXX1JFQ1RBTkdMRTogRWRpdG9yTW9kZXMuRFJBV19SRUNUQU5HTEUsXG4gIEVESVQ6IEVkaXRvck1vZGVzLkVESVRfVkVSVEVYXG59O1xuXG5leHBvcnQgY29uc3QgRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMgPSBbXG4gIExBWUVSX1RZUEVTLnBvaW50LFxuICBMQVlFUl9UWVBFUy5oZXhhZ29uLFxuICBMQVlFUl9UWVBFUy5hcmMsXG4gIExBWUVSX1RZUEVTLmxpbmUsXG4gIExBWUVSX1RZUEVTLmhleGFnb25JZFxuXTtcbi8vIEdQVSBGaWx0ZXJpbmdcbi8qKlxuICogTWF4IG51bWJlciBvZiBmaWx0ZXIgdmFsdWUgYnVmZmVycyB0aGF0IGRlY2suZ2wgcHJvdmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9HUFVfRklMVEVSUyA9IDQ7XG5leHBvcnQgY29uc3QgTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04gPSB7XG4gIHdpZHRoOiAzMDAsXG4gIGhlaWdodDogMjAwXG59O1xuXG5leHBvcnQgY29uc3QgTUFQX0lORk9fQ0hBUkFDVEVSID0ge1xuICB0aXRsZTogMTAwLFxuICBkZXNjcmlwdGlvbjogMTAwXG59O1xuXG4vLyBMb2FkIGRhdGFcbmV4cG9ydCBjb25zdCBMT0FESU5HX01FVEhPRFMgPSBrZXlNaXJyb3Ioe1xuICB1cGxvYWQ6IG51bGwsXG4gIHN0b3JhZ2U6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgREFUQVNFVF9GT1JNQVRTID0ga2V5TWlycm9yKHtcbiAgcm93OiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBjc3Y6IG51bGwsXG4gIGtlcGxlcmdsOiBudWxsXG59KTtcbiJdfQ==