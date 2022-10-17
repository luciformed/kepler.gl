"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultFilter = getDefaultFilter;
exports.shouldApplyFilter = shouldApplyFilter;
exports.validatePolygonFilter = validatePolygonFilter;
exports.validateFilter = validateFilter;
exports.validateFilterWithData = validateFilterWithData;
exports.getFilterProps = getFilterProps;
exports.getFilterFunction = getFilterFunction;
exports.updateFilterDataId = updateFilterDataId;
exports.filterDataByFilterTypes = filterDataByFilterTypes;
exports.getFilterRecord = getFilterRecord;
exports.diffFilters = diffFilters;
exports.adjustValueToFilterDomain = adjustValueToFilterDomain;
exports.getNumericFieldDomain = getNumericFieldDomain;
exports.getNumericStepSize = getNumericStepSize;
exports.getTimestampFieldDomain = getTimestampFieldDomain;
exports.histogramConstruct = histogramConstruct;
exports.getHistogram = getHistogram;
exports.formatNumberByStep = formatNumberByStep;
exports.isInRange = isInRange;
exports.isInPolygon = isInPolygon;
exports.isValidTimeDomain = isValidTimeDomain;
exports.getTimeWidgetTitleFormatter = getTimeWidgetTitleFormatter;
exports.getTimeWidgetHintFormatter = getTimeWidgetHintFormatter;
exports.isValidFilterValue = isValidFilterValue;
exports.getFilterPlot = getFilterPlot;
exports.getDefaultFilterPlotType = getDefaultFilterPlotType;
exports.applyFiltersToDatasets = applyFiltersToDatasets;
exports.applyFilterFieldName = applyFilterFieldName;
exports.mergeFilterDomainStep = mergeFilterDomainStep;
exports.generatePolygonFilter = generatePolygonFilter;
exports.filterDatasetCPU = filterDatasetCPU;
exports.validateFiltersUpdateDatasets = validateFiltersUpdateDatasets;
exports.getIntervalBins = getIntervalBins;
exports.getFilterIdInFeature = exports.featureToFilterValue = exports.getPolygonFilterFunctor = exports.LAYER_FILTERS = exports.FILTER_ID_LENGTH = exports.DEFAULT_FILTER_STRUCTURE = exports.FILTER_COMPONENTS = exports.LIMITED_FILTER_EFFECT_PROPS = exports.FILTER_UPDATER_PROPS = exports.PLOT_TYPES = exports.enlargedHistogramBins = exports.histogramBins = exports.TimestampStepMap = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _d3Array = require("d3-array");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _console = require("global/console");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));

var _helpers = require("@turf/helpers");

var _decimal = require("decimal.js");

var _defaultSettings = require("../constants/default-settings");

var _dataUtils = require("./data-utils");

var ScaleUtils = _interopRequireWildcard(require("./data-scale-utils"));

var _types = require("../layers/types");

var _utils = require("./utils");

var _h3Utils = require("../layers/h3-hexagon-layer/h3-utils");

var _FILTER_TYPES$timeRan, _FILTER_TYPES$range, _SupportedPlotType, _FILTER_COMPONENTS;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// TYPE

/** @typedef {import('./table-utils/kepler-table').FilterRecord} FilterRecord */

/** @typedef {import('./filter-utils').FilterResult} FilterResult */
var TimestampStepMap = [{
  max: 1,
  step: 0.05
}, {
  max: 10,
  step: 0.1
}, {
  max: 100,
  step: 1
}, {
  max: 500,
  step: 5
}, {
  max: 1000,
  step: 10
}, {
  max: 5000,
  step: 50
}, {
  max: Number.POSITIVE_INFINITY,
  step: 1000
}];
exports.TimestampStepMap = TimestampStepMap;
var histogramBins = 30;
exports.histogramBins = histogramBins;
var enlargedHistogramBins = 100;
exports.enlargedHistogramBins = enlargedHistogramBins;
var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationYear = durationDay * 365;
var PLOT_TYPES = (0, _keymirror["default"])({
  histogram: null,
  lineChart: null
});
exports.PLOT_TYPES = PLOT_TYPES;
var FILTER_UPDATER_PROPS = (0, _keymirror["default"])({
  dataId: null,
  name: null,
  layerId: null
});
exports.FILTER_UPDATER_PROPS = FILTER_UPDATER_PROPS;
var LIMITED_FILTER_EFFECT_PROPS = (0, _keymirror["default"])((0, _defineProperty2["default"])({}, FILTER_UPDATER_PROPS.name, null));
/**
 * Max number of filter value buffers that deck.gl provides
 */

exports.LIMITED_FILTER_EFFECT_PROPS = LIMITED_FILTER_EFFECT_PROPS;
var SupportedPlotType = (_SupportedPlotType = {}, (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.timeRange, (_FILTER_TYPES$timeRan = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$timeRan, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$timeRan)), (0, _defineProperty2["default"])(_SupportedPlotType, _defaultSettings.FILTER_TYPES.range, (_FILTER_TYPES$range = {
  "default": 'histogram'
}, (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.integer, 'lineChart'), (0, _defineProperty2["default"])(_FILTER_TYPES$range, _defaultSettings.ALL_FIELD_TYPES.real, 'lineChart'), _FILTER_TYPES$range)), _SupportedPlotType);
var FILTER_COMPONENTS = (_FILTER_COMPONENTS = {}, (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.select, 'SingleSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.multiSelect, 'MultiSelectFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.timeRange, 'TimeRangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.range, 'RangeFilter'), (0, _defineProperty2["default"])(_FILTER_COMPONENTS, _defaultSettings.FILTER_TYPES.polygon, 'PolygonFilter'), _FILTER_COMPONENTS);
exports.FILTER_COMPONENTS = FILTER_COMPONENTS;
var DEFAULT_FILTER_STRUCTURE = {
  dataId: [],
  // [string]
  freeze: false,
  id: null,
  // time range filter specific
  fixedDomain: false,
  enlarged: false,
  isAnimating: false,
  animationWindow: _defaultSettings.ANIMATION_WINDOW.free,
  speed: 1,
  // field specific
  name: [],
  // string
  type: null,
  fieldIdx: [],
  // [integer]
  domain: null,
  value: null,
  // plot
  plotType: PLOT_TYPES.histogram,
  yAxis: null,
  interval: null,
  // mode
  gpu: false
};
exports.DEFAULT_FILTER_STRUCTURE = DEFAULT_FILTER_STRUCTURE;
var FILTER_ID_LENGTH = 4;
exports.FILTER_ID_LENGTH = FILTER_ID_LENGTH;
var LAYER_FILTERS = [_defaultSettings.FILTER_TYPES.polygon];
/**
 * Generates a filter with a dataset id as dataId
 * @type {typeof import('./filter-utils').getDefaultFilter}
 */

exports.LAYER_FILTERS = LAYER_FILTERS;

function getDefaultFilter(dataId) {
  return _objectSpread(_objectSpread({}, DEFAULT_FILTER_STRUCTURE), {}, {
    // store it as dataId and it could be one or many
    dataId: (0, _utils.toArray)(dataId),
    id: (0, _utils.generateHashId)(FILTER_ID_LENGTH)
  });
}
/**
 * Check if a filter is valid based on the given dataId
 * @param  filter to validate
 * @param  datasetId id to validate filter against
 * @return true if a filter is valid, false otherwise
 * @type {typeof import('./filter-utils').shouldApplyFilter}
 */


function shouldApplyFilter(filter, datasetId) {
  var dataIds = (0, _utils.toArray)(filter.dataId);
  return dataIds.includes(datasetId) && filter.value !== null;
}
/**
 * Validates and modifies polygon filter structure
 * @param dataset
 * @param filter
 * @param layers
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validatePolygonFilter}
 */


function validatePolygonFilter(dataset, filter, layers) {
  var failed = {
    dataset: dataset,
    filter: null
  };
  var value = filter.value,
      layerId = filter.layerId,
      type = filter.type,
      dataId = filter.dataId;

  if (!layerId || !isValidFilterValue(type, value)) {
    return failed;
  }

  var isValidDataset = dataId.includes(dataset.id);

  if (!isValidDataset) {
    return failed;
  }

  var layer = layers.find(function (l) {
    return layerId.includes(l.id);
  });

  if (!layer) {
    return failed;
  }

  return {
    filter: _objectSpread(_objectSpread({}, filter), {}, {
      freeze: true,
      fieldIdx: []
    }),
    dataset: dataset
  };
}
/**
 * Custom filter validators
 */


var filterValidators = (0, _defineProperty2["default"])({}, _defaultSettings.FILTER_TYPES.polygon, validatePolygonFilter);
/**
 * Default validate filter function
 * @param dataset
 * @param filter
 * @return - {filter, dataset}
 * @type {typeof import('./filter-utils').validateFilter}
 */

function validateFilter(dataset, filter) {
  // match filter.dataId
  var failed = {
    dataset: dataset,
    filter: null
  };
  var filterDataId = (0, _utils.toArray)(filter.dataId);
  var filterDatasetIndex = filterDataId.indexOf(dataset.id);

  if (filterDatasetIndex < 0) {
    // the current filter is not mapped against the current dataset
    return failed;
  }

  var initializeFilter = _objectSpread(_objectSpread(_objectSpread({}, getDefaultFilter(filter.dataId)), filter), {}, {
    dataId: filterDataId,
    name: (0, _utils.toArray)(filter.name)
  });

  var fieldName = initializeFilter.name[filterDatasetIndex];

  var _applyFilterFieldName = applyFilterFieldName(initializeFilter, dataset, fieldName, filterDatasetIndex, {
    mergeDomain: true
  }),
      updatedFilter = _applyFilterFieldName.filter,
      updatedDataset = _applyFilterFieldName.dataset;

  if (!updatedFilter) {
    return failed;
  }

  updatedFilter.value = adjustValueToFilterDomain(filter.value, updatedFilter);
  updatedFilter.enlarged = typeof filter.enlarged === 'boolean' ? filter.enlarged : updatedFilter.enlarged;

  if (updatedFilter.value === null) {
    // cannot adjust saved value to filter
    return failed;
  }

  return {
    filter: validateFilterYAxis(updatedFilter, updatedDataset),
    dataset: updatedDataset
  };
}
/**
 * Validate saved filter config with new data,
 * calculate domain and fieldIdx based new fields and data
 *
 * @param dataset
 * @param filter - filter to be validate
 * @param layers - layers
 * @return validated filter
 * @type {typeof import('./filter-utils').validateFilterWithData}
 */


function validateFilterWithData(dataset, filter, layers) {
  // @ts-ignore
  return filterValidators.hasOwnProperty(filter.type) ? filterValidators[filter.type](dataset, filter, layers) : validateFilter(dataset, filter);
}
/**
 * Validate YAxis
 * @param filter
 * @param dataset
 * @return {*}
 */


function validateFilterYAxis(filter, dataset) {
  // TODO: validate yAxis against other datasets
  var fields = dataset.fields;
  var _filter = filter,
      yAxis = _filter.yAxis; // TODO: validate yAxis against other datasets

  if (yAxis) {
    var matchedAxis = fields.find(function (_ref) {
      var name = _ref.name,
          type = _ref.type;
      return name === yAxis.name && type === yAxis.type;
    });
    filter = matchedAxis ? _objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }, getFilterPlot(_objectSpread(_objectSpread({}, filter), {}, {
      yAxis: matchedAxis
    }), dataset)) : filter;
  }

  return filter;
}
/**
 * Get default filter prop based on field type
 *
 * @param field
 * @param fieldDomain
 * @returns default filter
 * @type {typeof import('./filter-utils').getFilterProps}
 */


function getFilterProps(field, fieldDomain) {
  var filterProps = _objectSpread(_objectSpread({}, fieldDomain), {}, {
    fieldType: field.type
  });

  switch (field.type) {
    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        value: fieldDomain.domain,
        type: _defaultSettings.FILTER_TYPES.range,
        typeOptions: [_defaultSettings.FILTER_TYPES.range],
        gpu: true
      });

    case _defaultSettings.ALL_FIELD_TYPES["boolean"]:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.select,
        value: true,
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.multiSelect,
        value: [],
        gpu: false
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      return _objectSpread(_objectSpread({}, filterProps), {}, {
        type: _defaultSettings.FILTER_TYPES.timeRange,
        enlarged: true,
        fixedDomain: true,
        value: filterProps.domain,
        gpu: true
      });

    default:
      return {};
  }
}

var getPolygonFilterFunctor = function getPolygonFilterFunctor(layer, filter) {
  var getPosition = layer.getPositionAccessor();

  switch (layer.type) {
    case _types.LAYER_TYPES.point:
    case _types.LAYER_TYPES.icon:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    case _types.LAYER_TYPES.arc:
    case _types.LAYER_TYPES.line:
      return function (data) {
        var pos = getPosition({
          data: data
        });
        return pos.every(Number.isFinite) && [[pos[0], pos[1]], [pos[3], pos[4]]].every(function (point) {
          return isInPolygon(point, filter.value);
        });
      };

    case _types.LAYER_TYPES.hexagonId:
      if (layer.dataToFeature && layer.dataToFeature.centroids) {
        return function (data, index) {
          // null or getCentroid({id})
          var centroid = layer.dataToFeature.centroids[index];
          return centroid && isInPolygon(centroid, filter.value);
        };
      }

      return function (data) {
        var id = getPosition({
          data: data
        });

        if (!(0, _h3Utils.h3IsValid)(id)) {
          return false;
        }

        var pos = (0, _h3Utils.getCentroid)({
          id: id
        });
        return pos.every(Number.isFinite) && isInPolygon(pos, filter.value);
      };

    default:
      return function () {
        return true;
      };
  }
};
/**
 * @param field dataset Field
 * @param dataId Dataset id
 * @param filter Filter object
 * @param layers list of layers to filter upon
 * @return filterFunction
 * @type {typeof import('./filter-utils').getFilterFunction}
 */


exports.getPolygonFilterFunctor = getPolygonFilterFunctor;

function getFilterFunction(field, dataId, filter, layers) {
  // field could be null in polygon filter
  var valueAccessor = field ? field.valueAccessor : function (data) {
    return null;
  };

  var defaultFunc = function defaultFunc(d) {
    return true;
  };

  switch (filter.type) {
    case _defaultSettings.FILTER_TYPES.range:
      return function (data) {
        return isInRange(valueAccessor(data), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return function (data) {
        return filter.value.includes(valueAccessor(data));
      };

    case _defaultSettings.FILTER_TYPES.select:
      return function (data) {
        return valueAccessor(data) === filter.value;
      };

    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!field) {
        return defaultFunc;
      }

      var mappedValue = (0, _lodash["default"])(field, ['filterProps', 'mappedValue']);
      var accessor = Array.isArray(mappedValue) ? function (data, index) {
        return mappedValue[index];
      } : function (data) {
        return (0, _dataUtils.timeToUnixMilli)(valueAccessor(data), field.format);
      };
      return function (data, index) {
        return isInRange(accessor(data, index), filter.value);
      };

    case _defaultSettings.FILTER_TYPES.polygon:
      if (!layers || !layers.length) {
        return defaultFunc;
      } // @ts-ignore


      var layerFilterFunctions = filter.layerId.map(function (id) {
        return layers.find(function (l) {
          return l.id === id;
        });
      }).filter(function (l) {
        return l && l.config.dataId === dataId;
      }).map(function (layer) {
        return getPolygonFilterFunctor(layer, filter);
      });
      return function (data, index) {
        return layerFilterFunctions.every(function (filterFunc) {
          return filterFunc(data, index);
        });
      };

    default:
      return defaultFunc;
  }
}

function updateFilterDataId(dataId) {
  return getDefaultFilter(dataId);
}
/**
 * @type {typeof import('./filter-utils').filterDataByFilterTypes}
 */


function filterDataByFilterTypes(_ref2, allData) {
  var dynamicDomainFilters = _ref2.dynamicDomainFilters,
      cpuFilters = _ref2.cpuFilters,
      filterFuncs = _ref2.filterFuncs;

  var result = _objectSpread(_objectSpread({}, dynamicDomainFilters ? {
    filteredIndexForDomain: []
  } : {}), cpuFilters ? {
    filteredIndex: []
  } : {});

  var _loop = function _loop(i) {
    var d = allData[i];
    var matchForDomain = dynamicDomainFilters && dynamicDomainFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForDomain) {
      // @ts-ignore
      result.filteredIndexForDomain.push(i);
    }

    var matchForRender = cpuFilters && cpuFilters.every(function (filter) {
      return filterFuncs[filter.id](d, i);
    });

    if (matchForRender) {
      // @ts-ignore
      result.filteredIndex.push(i);
    }
  };

  for (var i = 0; i < allData.length; i++) {
    _loop(i);
  }

  return result;
}
/**
 * Get a record of filters based on domain type and gpu / cpu
 * @type {typeof import('./filter-utils').getFilterRecord}
 */


function getFilterRecord(dataId, filters) {
  var opt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  /**
   * @type {FilterRecord}
   */
  var filterRecord = {
    dynamicDomain: [],
    fixedDomain: [],
    cpu: [],
    gpu: []
  };
  filters.forEach(function (f) {
    if (isValidFilterValue(f.type, f.value) && (0, _utils.toArray)(f.dataId).includes(dataId)) {
      (f.fixedDomain || opt.ignoreDomain ? filterRecord.fixedDomain : filterRecord.dynamicDomain).push(f);
      (f.gpu && !opt.cpuOnly ? filterRecord.gpu : filterRecord.cpu).push(f);
    }
  });
  return filterRecord;
}
/**
 * Compare filter records to get what has changed
 * @type {typeof import('./filter-utils').diffFilters}
 */


function diffFilters(filterRecord) {
  var oldFilterRecord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var filterChanged = {};
  Object.entries(filterRecord).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
        record = _ref4[0],
        items = _ref4[1];

    items.forEach(function (filter) {
      var oldFilter = (oldFilterRecord[record] || []).find(function (f) {
        return f.id === filter.id;
      });

      if (!oldFilter) {
        // added
        filterChanged = (0, _utils.set)([record, filter.id], 'added', filterChanged);
      } else {
        // check  what has changed
        ['name', 'value', 'dataId'].forEach(function (prop) {
          if (filter[prop] !== oldFilter[prop]) {
            filterChanged = (0, _utils.set)([record, filter.id], "".concat(prop, "_changed"), filterChanged);
          }
        });
      }
    });
    (oldFilterRecord[record] || []).forEach(function (oldFilter) {
      // deleted
      if (!items.find(function (f) {
        return f.id === oldFilter.id;
      })) {
        filterChanged = (0, _utils.set)([record, oldFilter.id], 'deleted', filterChanged);
      }
    });

    if (!filterChanged[record]) {
      filterChanged[record] = null;
    }
  }); // @ts-ignore

  return filterChanged;
}
/**
 * Call by parsing filters from URL
 * Check if value of filter within filter domain, if not adjust it to match
 * filter domain
 *
 * @type {typeof import('./filter-utils').adjustValueToFilterDomain}
 * @returns value - adjusted value to match filter or null to remove filter
 */

/* eslint-disable complexity */


function adjustValueToFilterDomain(value, _ref5) {
  var domain = _ref5.domain,
      type = _ref5.type;

  if (!domain || !type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      if (!Array.isArray(value) || value.length !== 2) {
        return domain.map(function (d) {
          return d;
        });
      }

      return value.map(function (d, i) {
        return (0, _dataUtils.notNullorUndefined)(d) && isInRange(d, domain) ? d : domain[i];
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      if (!Array.isArray(value)) {
        return [];
      }

      var filteredValue = value.filter(function (d) {
        return domain.includes(d);
      });
      return filteredValue.length ? filteredValue : [];

    case _defaultSettings.FILTER_TYPES.select:
      return domain.includes(value) ? value : true;

    default:
      return null;
  }
}
/* eslint-enable complexity */

/**
 * Calculate numeric domain and suitable step
 *
 * @type {typeof import('./filter-utils').getNumericFieldDomain}
 */


function getNumericFieldDomain(data, valueAccessor) {
  var domain = [0, 1];
  var step = 0.1;
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];

  if (Array.isArray(data) && data.length > 1) {
    domain = ScaleUtils.getLinearDomain(mappedValue);
    var diff = domain[1] - domain[0]; // in case equal domain, [96, 96], which will break quantize scale

    if (!diff) {
      domain[1] = domain[0] + 1;
    }

    step = getNumericStepSize(diff) || step;
    domain[0] = formatNumberByStep(domain[0], step, 'floor');
    domain[1] = formatNumberByStep(domain[1], step, 'ceil');
  } // @ts-ignore


  var _getHistogram = getHistogram(domain, mappedValue),
      histogram = _getHistogram.histogram,
      enlargedHistogram = _getHistogram.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * Calculate step size for range and timerange filter
 *
 * @type {typeof import('./filter-utils').getNumericStepSize}
 */


function getNumericStepSize(diff) {
  diff = Math.abs(diff);

  if (diff > 100) {
    return 1;
  } else if (diff > 3) {
    return 0.01;
  } else if (diff > 1) {
    return 0.001;
  } // Try to get at least 1000 steps - and keep the step size below that of
  // the (diff > 1) case.


  var x = diff / 1000; // Find the exponent and truncate to 10 to the power of that exponent

  var exponentialForm = x.toExponential();
  var exponent = parseFloat(exponentialForm.split('e')[1]); // Getting ready for node 12
  // this is why we need decimal.js
  // Math.pow(10, -5) = 0.000009999999999999999
  // the above result shows in browser and node 10
  // node 12 behaves correctly

  return new _decimal.Decimal(10).pow(exponent).toNumber();
}
/**
 * Calculate timestamp domain and suitable step
 *
 * @type {typeof import('./filter-utils').getTimestampFieldDomain}
 */


function getTimestampFieldDomain(data, valueAccessor) {
  // to avoid converting string format time to epoch
  // every time we compare we store a value mapped to int in filter domain
  var mappedValue = Array.isArray(data) ? data.map(valueAccessor) : [];
  var domain = ScaleUtils.getLinearDomain(mappedValue);
  var defaultTimeFormat = getTimeWidgetTitleFormatter(domain);
  var step = 0.01;
  var diff = domain[1] - domain[0];
  var entry = TimestampStepMap.find(function (f) {
    return f.max >= diff;
  });

  if (entry) {
    step = entry.step;
  }

  var _getHistogram2 = getHistogram(domain, mappedValue),
      histogram = _getHistogram2.histogram,
      enlargedHistogram = _getHistogram2.enlargedHistogram;

  return {
    domain: domain,
    step: step,
    mappedValue: mappedValue,
    histogram: histogram,
    enlargedHistogram: enlargedHistogram,
    defaultTimeFormat: defaultTimeFormat
  };
}
/**
 *
 * @type {typeof import('./filter-utils').histogramConstruct}
 */


function histogramConstruct(domain, mappedValue, bins) {
  return (0, _d3Array.histogram)().thresholds((0, _d3Array.ticks)(domain[0], domain[1], bins)).domain(domain)(mappedValue).map(function (bin) {
    return {
      count: bin.length,
      x0: bin.x0,
      x1: bin.x1
    };
  });
}
/**
 * Calculate histogram from domain and array of values
 *
 * @type {typeof import('./filter-utils').getHistogram}
 */


function getHistogram(domain, mappedValue) {
  var histogram = histogramConstruct(domain, mappedValue, histogramBins);
  var enlargedHistogram = histogramConstruct(domain, mappedValue, enlargedHistogramBins);
  return {
    histogram: histogram,
    enlargedHistogram: enlargedHistogram
  };
}
/**
 * round number based on step
 *
 * @param {Number} val
 * @param {Number} step
 * @param {string} bound
 * @returns {Number} rounded number
 */


function formatNumberByStep(val, step, bound) {
  if (bound === 'floor') {
    return Math.floor(val * (1 / step)) / (1 / step);
  }

  return Math.ceil(val * (1 / step)) / (1 / step);
}
/**
 *
 * @type {typeof import('./filter-utils').isInRange}
 */


function isInRange(val, domain) {
  if (!Array.isArray(domain)) {
    return false;
  }

  return val >= domain[0] && val <= domain[1];
}
/**
 * Determines whether a point is within the provided polygon
 *
 * @param point as input search [lat, lng]
 * @param polygon Points must be within these (Multi)Polygon(s)
 * @return {boolean}
 */


function isInPolygon(point, polygon) {
  return (0, _booleanWithin["default"])((0, _helpers.point)(point), polygon);
}

function isValidTimeDomain(domain) {
  return Array.isArray(domain) && domain.every(Number.isFinite);
}

function getTimeWidgetTitleFormatter(domain) {
  if (!isValidTimeDomain(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0]; // Local aware formats
  // https://momentjs.com/docs/#/parsing/string-format

  return diff > durationYear ? 'L' : diff > durationDay ? 'L LT' : 'L LTS';
}

function getTimeWidgetHintFormatter(domain) {
  if (!isValidTimeDomain(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationWeek ? 'L' : diff > durationDay ? 'L LT' : diff > durationHour ? 'LT' : 'LTS';
}
/**
 * Sanity check on filters to prepare for save
 * @type {typeof import('./filter-utils').isValidFilterValue}
 */

/* eslint-disable complexity */


function isValidFilterValue(type, value) {
  if (!type) {
    return false;
  }

  switch (type) {
    case _defaultSettings.FILTER_TYPES.select:
      return value === true || value === false;

    case _defaultSettings.FILTER_TYPES.range:
    case _defaultSettings.FILTER_TYPES.timeRange:
      return Array.isArray(value) && value.every(function (v) {
        return v !== null && !isNaN(v);
      });

    case _defaultSettings.FILTER_TYPES.multiSelect:
      return Array.isArray(value) && Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.input:
      return Boolean(value.length);

    case _defaultSettings.FILTER_TYPES.polygon:
      var coordinates = (0, _lodash["default"])(value, ['geometry', 'coordinates']);
      return Boolean(value && value.id && coordinates);

    default:
      return true;
  }
}
/**
 *
 * @type {typeof import('./filter-utils').getFilterPlot}
 */


function getFilterPlot(filter, dataset) {
  if (filter.plotType === PLOT_TYPES.histogram || !filter.yAxis) {
    // histogram should be calculated when create filter
    return {};
  }

  var _filter$mappedValue = filter.mappedValue,
      mappedValue = _filter$mappedValue === void 0 ? [] : _filter$mappedValue;
  var yAxis = filter.yAxis;
  var fieldIdx = dataset.getColumnFieldIdx(yAxis.name);

  if (fieldIdx < 0) {
    _console.console.warn("yAxis ".concat(yAxis.name, " does not exist in dataset"));

    return {
      lineChart: {},
      yAxis: yAxis
    };
  } // return lineChart


  var series = dataset.allData.map(function (d, i) {
    return {
      x: mappedValue[i],
      y: d[fieldIdx]
    };
  }).filter(function (_ref6) {
    var x = _ref6.x,
        y = _ref6.y;
    return Number.isFinite(x) && Number.isFinite(y);
  }).sort(function (a, b) {
    return (0, _d3Array.ascending)(a.x, b.x);
  });
  var yDomain = (0, _d3Array.extent)(series, function (d) {
    return d.y;
  });
  var xDomain = [series[0].x, series[series.length - 1].x];
  return {
    lineChart: {
      series: series,
      yDomain: yDomain,
      xDomain: xDomain
    },
    yAxis: yAxis
  };
}

function getDefaultFilterPlotType(filter) {
  var filterPlotTypes = SupportedPlotType[filter.type];

  if (!filterPlotTypes) {
    return null;
  }

  if (!filter.yAxis) {
    return filterPlotTypes["default"];
  }

  return filterPlotTypes[filter.yAxis.type] || null;
}
/**
 *
 * @param datasetIds list of dataset ids to be filtered
 * @param datasets all datasets
 * @param filters all filters to be applied to datasets
 * @return datasets - new updated datasets
 * @type {typeof import('./filter-utils').applyFiltersToDatasets}
 */


function applyFiltersToDatasets(datasetIds, datasets, filters, layers) {
  var dataIds = (0, _utils.toArray)(datasetIds);
  return dataIds.reduce(function (acc, dataId) {
    var layersToFilter = (layers || []).filter(function (l) {
      return l.config.dataId === dataId;
    });
    var appliedFilters = filters.filter(function (d) {
      return shouldApplyFilter(d, dataId);
    });
    var table = datasets[dataId];
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, dataId, table.filterTable(appliedFilters, layersToFilter, {})));
  }, datasets);
}
/**
 * Applies a new field name value to fielter and update both filter and dataset
 * @param filter - to be applied the new field name on
 * @param dataset - dataset the field belongs to
 * @param fieldName - field.name
 * @param filterDatasetIndex - field.name
 * @param option
 * @return - {filter, datasets}
 * @type {typeof import('./filter-utils').applyFilterFieldName}
 */


function applyFilterFieldName(filter, dataset, fieldName) {
  var filterDatasetIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var option = arguments.length > 4 ? arguments[4] : undefined;
  // using filterDatasetIndex we can filter only the specified dataset
  var mergeDomain = option && option.hasOwnProperty('mergeDomain') ? option.mergeDomain : false;
  var fieldIndex = dataset.getColumnFieldIdx(fieldName); // if no field with same name is found, move to the next datasets

  if (fieldIndex === -1) {
    // throw new Error(`fieldIndex not found. Dataset must contain a property with name: ${fieldName}`);
    return {
      filter: null,
      dataset: dataset
    };
  } // TODO: validate field type


  var filterProps = dataset.getColumnFilterProps(fieldName);

  var newFilter = _objectSpread(_objectSpread({}, mergeDomain ? mergeFilterDomainStep(filter, filterProps) : _objectSpread(_objectSpread({}, filter), filterProps)), {}, {
    name: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.name)), (0, _defineProperty2["default"])({}, filterDatasetIndex, fieldName)),
    fieldIdx: Object.assign((0, _toConsumableArray2["default"])((0, _utils.toArray)(filter.fieldIdx)), (0, _defineProperty2["default"])({}, filterDatasetIndex, fieldIndex)),
    // TODO, since we allow to add multiple fields to a filter we can no longer freeze the filter
    freeze: true
  });

  return {
    filter: newFilter,
    dataset: dataset
  };
}
/**
 * Merge one filter with other filter prop domain
 * @type {typeof import('./filter-utils').mergeFilterDomainStep}
 */

/* eslint-disable complexity */


function mergeFilterDomainStep(filter, filterProps) {
  if (!filter) {
    return null;
  }

  if (!filterProps) {
    return filter;
  }

  if (filter.fieldType && filter.fieldType !== filterProps.fieldType || !filterProps.domain) {
    return filter;
  }

  var combinedDomain = !filter.domain ? filterProps.domain : [].concat((0, _toConsumableArray2["default"])(filter.domain || []), (0, _toConsumableArray2["default"])(filterProps.domain || [])).sort(function (a, b) {
    return a - b;
  });

  var newFilter = _objectSpread(_objectSpread(_objectSpread({}, filter), filterProps), {}, {
    domain: [combinedDomain[0], combinedDomain[combinedDomain.length - 1]]
  });

  switch (filterProps.fieldType) {
    case _defaultSettings.ALL_FIELD_TYPES.string:
    case _defaultSettings.ALL_FIELD_TYPES.date:
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        domain: (0, _dataUtils.unique)(combinedDomain).sort()
      });

    case _defaultSettings.ALL_FIELD_TYPES.timestamp:
      // @ts-ignore
      var step = filter.step < filterProps.step ? filter.step : filterProps.step;
      return _objectSpread(_objectSpread({}, newFilter), {}, {
        step: step
      });

    case _defaultSettings.ALL_FIELD_TYPES.real:
    case _defaultSettings.ALL_FIELD_TYPES.integer:
    default:
      return newFilter;
  }
}
/* eslint-enable complexity */

/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').featureToFilterValue}
 */


var featureToFilterValue = function featureToFilterValue(feature, filterId) {
  var properties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread(_objectSpread({}, feature), {}, {
    id: feature.id,
    properties: _objectSpread(_objectSpread(_objectSpread({}, feature.properties), properties), {}, {
      filterId: filterId
    })
  });
};
/**
 * @type {typeof import('./filter-utils').getFilterIdInFeature}
 */


exports.featureToFilterValue = featureToFilterValue;

var getFilterIdInFeature = function getFilterIdInFeature(f) {
  return (0, _lodash["default"])(f, ['properties', 'filterId']);
};
/**
 * Generates polygon filter
 * @type {typeof import('./filter-utils').generatePolygonFilter}
 */


exports.getFilterIdInFeature = getFilterIdInFeature;

function generatePolygonFilter(layers, feature) {
  var dataId = layers.map(function (l) {
    return l.config.dataId;
  }).filter(function (d) {
    return d;
  });
  var layerId = layers.map(function (l) {
    return l.id;
  });
  var name = layers.map(function (l) {
    return l.config.label;
  }); // @ts-ignore

  var filter = getDefaultFilter(dataId);
  return _objectSpread(_objectSpread({}, filter), {}, {
    fixedDomain: true,
    type: _defaultSettings.FILTER_TYPES.polygon,
    name: name,
    layerId: layerId,
    value: featureToFilterValue(feature, filter.id, {
      isVisible: true
    })
  });
}
/**
 * Run filter entirely on CPU
 * @type {typeof import('./filter-utils').filterDatasetCPU}
 */


function filterDatasetCPU(state, dataId) {
  var datasetFilters = state.filters.filter(function (f) {
    return f.dataId.includes(dataId);
  });
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var cpuFilteredDataset = dataset.filterTableCPU(datasetFilters, state.layers);
  return (0, _utils.set)(['datasets', dataId], cpuFilteredDataset, state);
}
/**
 * Validate parsed filters with datasets and add filterProps to field
 * @type {typeof import('./filter-utils').validateFiltersUpdateDatasets}
 */


function validateFiltersUpdateDatasets(state) {
  var filtersToValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validated = [];
  var failed = [];
  var datasets = state.datasets;
  var updatedDatasets = datasets; // merge filters

  filtersToValidate.forEach(function (filter) {
    // we can only look for datasets define in the filter dataId
    var datasetIds = (0, _utils.toArray)(filter.dataId); // we can merge a filter only if all datasets in filter.dataId are loaded

    if (datasetIds.every(function (d) {
      return datasets[d];
    })) {
      // all datasetIds in filter must be present the state datasets
      var _datasetIds$reduce = datasetIds.reduce(function (acc, datasetId) {
        var dataset = updatedDatasets[datasetId];
        var layers = state.layers.filter(function (l) {
          return l.config.dataId === dataset.id;
        });

        var _validateFilterWithDa = validateFilterWithData(acc.augmentedDatasets[datasetId] || dataset, filter, layers),
            updatedFilter = _validateFilterWithDa.filter,
            updatedDataset = _validateFilterWithDa.dataset;

        if (updatedFilter) {
          return _objectSpread(_objectSpread({}, acc), {}, {
            // merge filter props
            filter: acc.filter ? _objectSpread(_objectSpread({}, acc.filter), mergeFilterDomainStep(acc, updatedFilter)) : updatedFilter,
            applyToDatasets: [].concat((0, _toConsumableArray2["default"])(acc.applyToDatasets), [datasetId]),
            augmentedDatasets: _objectSpread(_objectSpread({}, acc.augmentedDatasets), {}, (0, _defineProperty2["default"])({}, datasetId, updatedDataset))
          });
        }

        return acc;
      }, {
        filter: null,
        applyToDatasets: [],
        augmentedDatasets: {}
      }),
          validatedFilter = _datasetIds$reduce.filter,
          applyToDatasets = _datasetIds$reduce.applyToDatasets,
          augmentedDatasets = _datasetIds$reduce.augmentedDatasets;

      if (validatedFilter && (0, _lodash2["default"])(datasetIds, applyToDatasets)) {
        validated.push(validatedFilter);
        updatedDatasets = _objectSpread(_objectSpread({}, updatedDatasets), augmentedDatasets);
      }
    } else {
      failed.push(filter);
    }
  });
  return {
    validated: validated,
    failed: failed,
    updatedDatasets: updatedDatasets
  };
}
/**
 * Retrieve interval bins for time filter
 * @type {typeof import('./filter-utils').getIntervalBins}
 */


function getIntervalBins(filter) {
  var _filter$plotType;

  var bins = filter.bins;
  var interval = (_filter$plotType = filter.plotType) === null || _filter$plotType === void 0 ? void 0 : _filter$plotType.interval;

  if (!interval || !bins || Object.keys(bins).length === 0) {
    return null;
  }

  var values = Object.values(bins);
  return values[0] ? values[0][interval] : null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWx0ZXItdXRpbHMuanMiXSwibmFtZXMiOlsiVGltZXN0YW1wU3RlcE1hcCIsIm1heCIsInN0ZXAiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImhpc3RvZ3JhbUJpbnMiLCJlbmxhcmdlZEhpc3RvZ3JhbUJpbnMiLCJkdXJhdGlvblNlY29uZCIsImR1cmF0aW9uTWludXRlIiwiZHVyYXRpb25Ib3VyIiwiZHVyYXRpb25EYXkiLCJkdXJhdGlvbldlZWsiLCJkdXJhdGlvblllYXIiLCJQTE9UX1RZUEVTIiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwiRklMVEVSX1VQREFURVJfUFJPUFMiLCJkYXRhSWQiLCJuYW1lIiwibGF5ZXJJZCIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsIlN1cHBvcnRlZFBsb3RUeXBlIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwiQUxMX0ZJRUxEX1RZUEVTIiwiaW50ZWdlciIsInJlYWwiLCJyYW5nZSIsIkZJTFRFUl9DT01QT05FTlRTIiwic2VsZWN0IiwibXVsdGlTZWxlY3QiLCJwb2x5Z29uIiwiREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFIiwiZnJlZXplIiwiaWQiLCJmaXhlZERvbWFpbiIsImVubGFyZ2VkIiwiaXNBbmltYXRpbmciLCJhbmltYXRpb25XaW5kb3ciLCJBTklNQVRJT05fV0lORE9XIiwiZnJlZSIsInNwZWVkIiwidHlwZSIsImZpZWxkSWR4IiwiZG9tYWluIiwidmFsdWUiLCJwbG90VHlwZSIsInlBeGlzIiwiaW50ZXJ2YWwiLCJncHUiLCJGSUxURVJfSURfTEVOR1RIIiwiTEFZRVJfRklMVEVSUyIsImdldERlZmF1bHRGaWx0ZXIiLCJzaG91bGRBcHBseUZpbHRlciIsImZpbHRlciIsImRhdGFzZXRJZCIsImRhdGFJZHMiLCJpbmNsdWRlcyIsInZhbGlkYXRlUG9seWdvbkZpbHRlciIsImRhdGFzZXQiLCJsYXllcnMiLCJmYWlsZWQiLCJpc1ZhbGlkRmlsdGVyVmFsdWUiLCJpc1ZhbGlkRGF0YXNldCIsImxheWVyIiwiZmluZCIsImwiLCJmaWx0ZXJWYWxpZGF0b3JzIiwidmFsaWRhdGVGaWx0ZXIiLCJmaWx0ZXJEYXRhSWQiLCJmaWx0ZXJEYXRhc2V0SW5kZXgiLCJpbmRleE9mIiwiaW5pdGlhbGl6ZUZpbHRlciIsImZpZWxkTmFtZSIsImFwcGx5RmlsdGVyRmllbGROYW1lIiwibWVyZ2VEb21haW4iLCJ1cGRhdGVkRmlsdGVyIiwidXBkYXRlZERhdGFzZXQiLCJhZGp1c3RWYWx1ZVRvRmlsdGVyRG9tYWluIiwidmFsaWRhdGVGaWx0ZXJZQXhpcyIsInZhbGlkYXRlRmlsdGVyV2l0aERhdGEiLCJoYXNPd25Qcm9wZXJ0eSIsImZpZWxkcyIsIm1hdGNoZWRBeGlzIiwiZ2V0RmlsdGVyUGxvdCIsImdldEZpbHRlclByb3BzIiwiZmllbGQiLCJmaWVsZERvbWFpbiIsImZpbHRlclByb3BzIiwiZmllbGRUeXBlIiwidHlwZU9wdGlvbnMiLCJzdHJpbmciLCJkYXRlIiwidGltZXN0YW1wIiwiZ2V0UG9seWdvbkZpbHRlckZ1bmN0b3IiLCJnZXRQb3NpdGlvbiIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJMQVlFUl9UWVBFUyIsInBvaW50IiwiaWNvbiIsImRhdGEiLCJwb3MiLCJldmVyeSIsImlzRmluaXRlIiwiaXNJblBvbHlnb24iLCJhcmMiLCJsaW5lIiwiaGV4YWdvbklkIiwiZGF0YVRvRmVhdHVyZSIsImNlbnRyb2lkcyIsImluZGV4IiwiY2VudHJvaWQiLCJnZXRGaWx0ZXJGdW5jdGlvbiIsInZhbHVlQWNjZXNzb3IiLCJkZWZhdWx0RnVuYyIsImQiLCJpc0luUmFuZ2UiLCJtYXBwZWRWYWx1ZSIsImFjY2Vzc29yIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9ybWF0IiwibGVuZ3RoIiwibGF5ZXJGaWx0ZXJGdW5jdGlvbnMiLCJtYXAiLCJjb25maWciLCJmaWx0ZXJGdW5jIiwidXBkYXRlRmlsdGVyRGF0YUlkIiwiZmlsdGVyRGF0YUJ5RmlsdGVyVHlwZXMiLCJhbGxEYXRhIiwiZHluYW1pY0RvbWFpbkZpbHRlcnMiLCJjcHVGaWx0ZXJzIiwiZmlsdGVyRnVuY3MiLCJyZXN1bHQiLCJmaWx0ZXJlZEluZGV4Rm9yRG9tYWluIiwiZmlsdGVyZWRJbmRleCIsImkiLCJtYXRjaEZvckRvbWFpbiIsInB1c2giLCJtYXRjaEZvclJlbmRlciIsImdldEZpbHRlclJlY29yZCIsImZpbHRlcnMiLCJvcHQiLCJmaWx0ZXJSZWNvcmQiLCJkeW5hbWljRG9tYWluIiwiY3B1IiwiZm9yRWFjaCIsImYiLCJpZ25vcmVEb21haW4iLCJjcHVPbmx5IiwiZGlmZkZpbHRlcnMiLCJvbGRGaWx0ZXJSZWNvcmQiLCJmaWx0ZXJDaGFuZ2VkIiwiT2JqZWN0IiwiZW50cmllcyIsInJlY29yZCIsIml0ZW1zIiwib2xkRmlsdGVyIiwicHJvcCIsImZpbHRlcmVkVmFsdWUiLCJnZXROdW1lcmljRmllbGREb21haW4iLCJTY2FsZVV0aWxzIiwiZ2V0TGluZWFyRG9tYWluIiwiZGlmZiIsImdldE51bWVyaWNTdGVwU2l6ZSIsImZvcm1hdE51bWJlckJ5U3RlcCIsImdldEhpc3RvZ3JhbSIsImVubGFyZ2VkSGlzdG9ncmFtIiwiTWF0aCIsImFicyIsIngiLCJleHBvbmVudGlhbEZvcm0iLCJ0b0V4cG9uZW50aWFsIiwiZXhwb25lbnQiLCJwYXJzZUZsb2F0Iiwic3BsaXQiLCJEZWNpbWFsIiwicG93IiwidG9OdW1iZXIiLCJnZXRUaW1lc3RhbXBGaWVsZERvbWFpbiIsImRlZmF1bHRUaW1lRm9ybWF0IiwiZ2V0VGltZVdpZGdldFRpdGxlRm9ybWF0dGVyIiwiZW50cnkiLCJoaXN0b2dyYW1Db25zdHJ1Y3QiLCJiaW5zIiwidGhyZXNob2xkcyIsImJpbiIsImNvdW50IiwieDAiLCJ4MSIsInZhbCIsImJvdW5kIiwiZmxvb3IiLCJjZWlsIiwiaXNWYWxpZFRpbWVEb21haW4iLCJnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlciIsInYiLCJpc05hTiIsIkJvb2xlYW4iLCJpbnB1dCIsImNvb3JkaW5hdGVzIiwiZ2V0Q29sdW1uRmllbGRJZHgiLCJDb25zb2xlIiwid2FybiIsInNlcmllcyIsInkiLCJzb3J0IiwiYSIsImIiLCJ5RG9tYWluIiwieERvbWFpbiIsImdldERlZmF1bHRGaWx0ZXJQbG90VHlwZSIsImZpbHRlclBsb3RUeXBlcyIsImFwcGx5RmlsdGVyc1RvRGF0YXNldHMiLCJkYXRhc2V0SWRzIiwiZGF0YXNldHMiLCJyZWR1Y2UiLCJhY2MiLCJsYXllcnNUb0ZpbHRlciIsImFwcGxpZWRGaWx0ZXJzIiwidGFibGUiLCJmaWx0ZXJUYWJsZSIsIm9wdGlvbiIsImZpZWxkSW5kZXgiLCJnZXRDb2x1bW5GaWx0ZXJQcm9wcyIsIm5ld0ZpbHRlciIsIm1lcmdlRmlsdGVyRG9tYWluU3RlcCIsImFzc2lnbiIsImNvbWJpbmVkRG9tYWluIiwiZmVhdHVyZVRvRmlsdGVyVmFsdWUiLCJmZWF0dXJlIiwiZmlsdGVySWQiLCJwcm9wZXJ0aWVzIiwiZ2V0RmlsdGVySWRJbkZlYXR1cmUiLCJnZW5lcmF0ZVBvbHlnb25GaWx0ZXIiLCJsYWJlbCIsImlzVmlzaWJsZSIsImZpbHRlckRhdGFzZXRDUFUiLCJzdGF0ZSIsImRhdGFzZXRGaWx0ZXJzIiwiY3B1RmlsdGVyZWREYXRhc2V0IiwiZmlsdGVyVGFibGVDUFUiLCJ2YWxpZGF0ZUZpbHRlcnNVcGRhdGVEYXRhc2V0cyIsImZpbHRlcnNUb1ZhbGlkYXRlIiwidmFsaWRhdGVkIiwidXBkYXRlZERhdGFzZXRzIiwiYXVnbWVudGVkRGF0YXNldHMiLCJhcHBseVRvRGF0YXNldHMiLCJ2YWxpZGF0ZWRGaWx0ZXIiLCJnZXRJbnRlcnZhbEJpbnMiLCJrZXlzIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7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Q0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSSxlQUFULENBQXlCbk0sTUFBekIsRUFBaUM7QUFBQTs7QUFDdEMsTUFBT2tJLElBQVAsR0FBZWxJLE1BQWYsQ0FBT2tJLElBQVA7QUFDQSxNQUFNeEksUUFBUSx1QkFBR00sTUFBTSxDQUFDUixRQUFWLHFEQUFHLGlCQUFpQkUsUUFBbEM7O0FBQ0EsTUFBSSxDQUFDQSxRQUFELElBQWEsQ0FBQ3dJLElBQWQsSUFBc0IvQixNQUFNLENBQUNpRyxJQUFQLENBQVlsRSxJQUFaLEVBQWtCOUQsTUFBbEIsS0FBNkIsQ0FBdkQsRUFBMEQ7QUFDeEQsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTWlJLE1BQU0sR0FBR2xHLE1BQU0sQ0FBQ2tHLE1BQVAsQ0FBY25FLElBQWQsQ0FBZjtBQUNBLFNBQU9tRSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVTNNLFFBQVYsQ0FBWixHQUFrQyxJQUF6QztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIxIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHthc2NlbmRpbmcsIGV4dGVudCwgaGlzdG9ncmFtIGFzIGQzSGlzdG9ncmFtLCB0aWNrc30gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IGtleU1pcnJvciBmcm9tICdrZXltaXJyb3InO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC9jb25zb2xlJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2guaXNlcXVhbCc7XG5cbmltcG9ydCBib29sZWFuV2l0aGluIGZyb20gJ0B0dXJmL2Jvb2xlYW4td2l0aGluJztcbmltcG9ydCB7cG9pbnQgYXMgdHVyZlBvaW50fSBmcm9tICdAdHVyZi9oZWxwZXJzJztcbmltcG9ydCB7RGVjaW1hbH0gZnJvbSAnZGVjaW1hbC5qcyc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFUywgRklMVEVSX1RZUEVTLCBBTklNQVRJT05fV0lORE9XfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge25vdE51bGxvclVuZGVmaW5lZCwgdW5pcXVlLCB0aW1lVG9Vbml4TWlsbGl9IGZyb20gJy4vZGF0YS11dGlscyc7XG5pbXBvcnQgKiBhcyBTY2FsZVV0aWxzIGZyb20gJy4vZGF0YS1zY2FsZS11dGlscyc7XG5pbXBvcnQge0xBWUVSX1RZUEVTfSBmcm9tICdsYXllcnMvdHlwZXMnO1xuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZCwgc2V0LCB0b0FycmF5fSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Z2V0Q2VudHJvaWQsIGgzSXNWYWxpZH0gZnJvbSAnbGF5ZXJzL2gzLWhleGFnb24tbGF5ZXIvaDMtdXRpbHMnO1xuXG4vLyBUWVBFXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi90YWJsZS11dGlscy9rZXBsZXItdGFibGUnKS5GaWx0ZXJSZWNvcmR9IEZpbHRlclJlY29yZCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuRmlsdGVyUmVzdWx0fSBGaWx0ZXJSZXN1bHQgKi9cblxuZXhwb3J0IGNvbnN0IFRpbWVzdGFtcFN0ZXBNYXAgPSBbXG4gIHttYXg6IDEsIHN0ZXA6IDAuMDV9LFxuICB7bWF4OiAxMCwgc3RlcDogMC4xfSxcbiAge21heDogMTAwLCBzdGVwOiAxfSxcbiAge21heDogNTAwLCBzdGVwOiA1fSxcbiAge21heDogMTAwMCwgc3RlcDogMTB9LFxuICB7bWF4OiA1MDAwLCBzdGVwOiA1MH0sXG4gIHttYXg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgc3RlcDogMTAwMH1cbl07XG5cbmV4cG9ydCBjb25zdCBoaXN0b2dyYW1CaW5zID0gMzA7XG5leHBvcnQgY29uc3QgZW5sYXJnZWRIaXN0b2dyYW1CaW5zID0gMTAwO1xuXG5jb25zdCBkdXJhdGlvblNlY29uZCA9IDEwMDA7XG5jb25zdCBkdXJhdGlvbk1pbnV0ZSA9IGR1cmF0aW9uU2Vjb25kICogNjA7XG5jb25zdCBkdXJhdGlvbkhvdXIgPSBkdXJhdGlvbk1pbnV0ZSAqIDYwO1xuY29uc3QgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNDtcbmNvbnN0IGR1cmF0aW9uV2VlayA9IGR1cmF0aW9uRGF5ICogNztcbmNvbnN0IGR1cmF0aW9uWWVhciA9IGR1cmF0aW9uRGF5ICogMzY1O1xuXG5leHBvcnQgY29uc3QgUExPVF9UWVBFUyA9IGtleU1pcnJvcih7XG4gIGhpc3RvZ3JhbTogbnVsbCxcbiAgbGluZUNoYXJ0OiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9VUERBVEVSX1BST1BTID0ga2V5TWlycm9yKHtcbiAgZGF0YUlkOiBudWxsLFxuICBuYW1lOiBudWxsLFxuICBsYXllcklkOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IExJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyA9IGtleU1pcnJvcih7XG4gIFtGSUxURVJfVVBEQVRFUl9QUk9QUy5uYW1lXTogbnVsbFxufSk7XG4vKipcbiAqIE1heCBudW1iZXIgb2YgZmlsdGVyIHZhbHVlIGJ1ZmZlcnMgdGhhdCBkZWNrLmdsIHByb3ZpZGVzXG4gKi9cblxuY29uc3QgU3VwcG9ydGVkUGxvdFR5cGUgPSB7XG4gIFtGSUxURVJfVFlQRVMudGltZVJhbmdlXToge1xuICAgIGRlZmF1bHQ6ICdoaXN0b2dyYW0nLFxuICAgIFtBTExfRklFTERfVFlQRVMuaW50ZWdlcl06ICdsaW5lQ2hhcnQnLFxuICAgIFtBTExfRklFTERfVFlQRVMucmVhbF06ICdsaW5lQ2hhcnQnXG4gIH0sXG4gIFtGSUxURVJfVFlQRVMucmFuZ2VdOiB7XG4gICAgZGVmYXVsdDogJ2hpc3RvZ3JhbScsXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogJ2xpbmVDaGFydCcsXG4gICAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogJ2xpbmVDaGFydCdcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9DT01QT05FTlRTID0ge1xuICBbRklMVEVSX1RZUEVTLnNlbGVjdF06ICdTaW5nbGVTZWxlY3RGaWx0ZXInLFxuICBbRklMVEVSX1RZUEVTLm11bHRpU2VsZWN0XTogJ011bHRpU2VsZWN0RmlsdGVyJyxcbiAgW0ZJTFRFUl9UWVBFUy50aW1lUmFuZ2VdOiAnVGltZVJhbmdlRmlsdGVyJyxcbiAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06ICdSYW5nZUZpbHRlcicsXG4gIFtGSUxURVJfVFlQRVMucG9seWdvbl06ICdQb2x5Z29uRmlsdGVyJ1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRklMVEVSX1NUUlVDVFVSRSA9IHtcbiAgZGF0YUlkOiBbXSwgLy8gW3N0cmluZ11cbiAgZnJlZXplOiBmYWxzZSxcbiAgaWQ6IG51bGwsXG5cbiAgLy8gdGltZSByYW5nZSBmaWx0ZXIgc3BlY2lmaWNcbiAgZml4ZWREb21haW46IGZhbHNlLFxuICBlbmxhcmdlZDogZmFsc2UsXG4gIGlzQW5pbWF0aW5nOiBmYWxzZSxcbiAgYW5pbWF0aW9uV2luZG93OiBBTklNQVRJT05fV0lORE9XLmZyZWUsXG4gIHNwZWVkOiAxLFxuXG4gIC8vIGZpZWxkIHNwZWNpZmljXG4gIG5hbWU6IFtdLCAvLyBzdHJpbmdcbiAgdHlwZTogbnVsbCxcbiAgZmllbGRJZHg6IFtdLCAvLyBbaW50ZWdlcl1cbiAgZG9tYWluOiBudWxsLFxuICB2YWx1ZTogbnVsbCxcblxuICAvLyBwbG90XG4gIHBsb3RUeXBlOiBQTE9UX1RZUEVTLmhpc3RvZ3JhbSxcbiAgeUF4aXM6IG51bGwsXG4gIGludGVydmFsOiBudWxsLFxuXG4gIC8vIG1vZGVcbiAgZ3B1OiBmYWxzZVxufTtcblxuZXhwb3J0IGNvbnN0IEZJTFRFUl9JRF9MRU5HVEggPSA0O1xuXG5leHBvcnQgY29uc3QgTEFZRVJfRklMVEVSUyA9IFtGSUxURVJfVFlQRVMucG9seWdvbl07XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZmlsdGVyIHdpdGggYSBkYXRhc2V0IGlkIGFzIGRhdGFJZFxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZ2V0RGVmYXVsdEZpbHRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRGaWx0ZXIoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgLi4uREVGQVVMVF9GSUxURVJfU1RSVUNUVVJFLFxuICAgIC8vIHN0b3JlIGl0IGFzIGRhdGFJZCBhbmQgaXQgY291bGQgYmUgb25lIG9yIG1hbnlcbiAgICBkYXRhSWQ6IHRvQXJyYXkoZGF0YUlkKSxcbiAgICBpZDogZ2VuZXJhdGVIYXNoSWQoRklMVEVSX0lEX0xFTkdUSClcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGZpbHRlciBpcyB2YWxpZCBiYXNlZCBvbiB0aGUgZ2l2ZW4gZGF0YUlkXG4gKiBAcGFyYW0gIGZpbHRlciB0byB2YWxpZGF0ZVxuICogQHBhcmFtICBkYXRhc2V0SWQgaWQgdG8gdmFsaWRhdGUgZmlsdGVyIGFnYWluc3RcbiAqIEByZXR1cm4gdHJ1ZSBpZiBhIGZpbHRlciBpcyB2YWxpZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5zaG91bGRBcHBseUZpbHRlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEFwcGx5RmlsdGVyKGZpbHRlciwgZGF0YXNldElkKSB7XG4gIGNvbnN0IGRhdGFJZHMgPSB0b0FycmF5KGZpbHRlci5kYXRhSWQpO1xuICByZXR1cm4gZGF0YUlkcy5pbmNsdWRlcyhkYXRhc2V0SWQpICYmIGZpbHRlci52YWx1ZSAhPT0gbnVsbDtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgYW5kIG1vZGlmaWVzIHBvbHlnb24gZmlsdGVyIHN0cnVjdHVyZVxuICogQHBhcmFtIGRhdGFzZXRcbiAqIEBwYXJhbSBmaWx0ZXJcbiAqIEBwYXJhbSBsYXllcnNcbiAqIEByZXR1cm4gLSB7ZmlsdGVyLCBkYXRhc2V0fVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykudmFsaWRhdGVQb2x5Z29uRmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQb2x5Z29uRmlsdGVyKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKSB7XG4gIGNvbnN0IGZhaWxlZCA9IHtkYXRhc2V0LCBmaWx0ZXI6IG51bGx9O1xuICBjb25zdCB7dmFsdWUsIGxheWVySWQsIHR5cGUsIGRhdGFJZH0gPSBmaWx0ZXI7XG5cbiAgaWYgKCFsYXllcklkIHx8ICFpc1ZhbGlkRmlsdGVyVmFsdWUodHlwZSwgdmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhaWxlZDtcbiAgfVxuXG4gIGNvbnN0IGlzVmFsaWREYXRhc2V0ID0gZGF0YUlkLmluY2x1ZGVzKGRhdGFzZXQuaWQpO1xuXG4gIGlmICghaXNWYWxpZERhdGFzZXQpIHtcbiAgICByZXR1cm4gZmFpbGVkO1xuICB9XG5cbiAgY29uc3QgbGF5ZXIgPSBsYXllcnMuZmluZChsID0+IGxheWVySWQuaW5jbHVkZXMobC5pZCkpO1xuXG4gIGlmICghbGF5ZXIpIHtcbiAgICByZXR1cm4gZmFpbGVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXI6IHtcbiAgICAgIC4uLmZpbHRlcixcbiAgICAgIGZyZWV6ZTogdHJ1ZSxcbiAgICAgIGZpZWxkSWR4OiBbXVxuICAgIH0sXG4gICAgZGF0YXNldFxuICB9O1xufVxuXG4vKipcbiAqIEN1c3RvbSBmaWx0ZXIgdmFsaWRhdG9yc1xuICovXG5jb25zdCBmaWx0ZXJWYWxpZGF0b3JzID0ge1xuICBbRklMVEVSX1RZUEVTLnBvbHlnb25dOiB2YWxpZGF0ZVBvbHlnb25GaWx0ZXJcbn07XG5cbi8qKlxuICogRGVmYXVsdCB2YWxpZGF0ZSBmaWx0ZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSBkYXRhc2V0XG4gKiBAcGFyYW0gZmlsdGVyXG4gKiBAcmV0dXJuIC0ge2ZpbHRlciwgZGF0YXNldH1cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLnZhbGlkYXRlRmlsdGVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGaWx0ZXIoZGF0YXNldCwgZmlsdGVyKSB7XG4gIC8vIG1hdGNoIGZpbHRlci5kYXRhSWRcbiAgY29uc3QgZmFpbGVkID0ge2RhdGFzZXQsIGZpbHRlcjogbnVsbH07XG4gIGNvbnN0IGZpbHRlckRhdGFJZCA9IHRvQXJyYXkoZmlsdGVyLmRhdGFJZCk7XG5cbiAgY29uc3QgZmlsdGVyRGF0YXNldEluZGV4ID0gZmlsdGVyRGF0YUlkLmluZGV4T2YoZGF0YXNldC5pZCk7XG4gIGlmIChmaWx0ZXJEYXRhc2V0SW5kZXggPCAwKSB7XG4gICAgLy8gdGhlIGN1cnJlbnQgZmlsdGVyIGlzIG5vdCBtYXBwZWQgYWdhaW5zdCB0aGUgY3VycmVudCBkYXRhc2V0XG4gICAgcmV0dXJuIGZhaWxlZDtcbiAgfVxuXG4gIGNvbnN0IGluaXRpYWxpemVGaWx0ZXIgPSB7XG4gICAgLi4uZ2V0RGVmYXVsdEZpbHRlcihmaWx0ZXIuZGF0YUlkKSxcbiAgICAuLi5maWx0ZXIsXG4gICAgZGF0YUlkOiBmaWx0ZXJEYXRhSWQsXG4gICAgbmFtZTogdG9BcnJheShmaWx0ZXIubmFtZSlcbiAgfTtcblxuICBjb25zdCBmaWVsZE5hbWUgPSBpbml0aWFsaXplRmlsdGVyLm5hbWVbZmlsdGVyRGF0YXNldEluZGV4XTtcbiAgY29uc3Qge2ZpbHRlcjogdXBkYXRlZEZpbHRlciwgZGF0YXNldDogdXBkYXRlZERhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgaW5pdGlhbGl6ZUZpbHRlcixcbiAgICBkYXRhc2V0LFxuICAgIGZpZWxkTmFtZSxcbiAgICBmaWx0ZXJEYXRhc2V0SW5kZXgsXG4gICAge21lcmdlRG9tYWluOiB0cnVlfVxuICApO1xuXG4gIGlmICghdXBkYXRlZEZpbHRlcikge1xuICAgIHJldHVybiBmYWlsZWQ7XG4gIH1cblxuICB1cGRhdGVkRmlsdGVyLnZhbHVlID0gYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbihmaWx0ZXIudmFsdWUsIHVwZGF0ZWRGaWx0ZXIpO1xuICB1cGRhdGVkRmlsdGVyLmVubGFyZ2VkID1cbiAgICB0eXBlb2YgZmlsdGVyLmVubGFyZ2VkID09PSAnYm9vbGVhbicgPyBmaWx0ZXIuZW5sYXJnZWQgOiB1cGRhdGVkRmlsdGVyLmVubGFyZ2VkO1xuXG4gIGlmICh1cGRhdGVkRmlsdGVyLnZhbHVlID09PSBudWxsKSB7XG4gICAgLy8gY2Fubm90IGFkanVzdCBzYXZlZCB2YWx1ZSB0byBmaWx0ZXJcbiAgICByZXR1cm4gZmFpbGVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXI6IHZhbGlkYXRlRmlsdGVyWUF4aXModXBkYXRlZEZpbHRlciwgdXBkYXRlZERhdGFzZXQpLFxuICAgIGRhdGFzZXQ6IHVwZGF0ZWREYXRhc2V0XG4gIH07XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgZmlsdGVyIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxuICogY2FsY3VsYXRlIGRvbWFpbiBhbmQgZmllbGRJZHggYmFzZWQgbmV3IGZpZWxkcyBhbmQgZGF0YVxuICpcbiAqIEBwYXJhbSBkYXRhc2V0XG4gKiBAcGFyYW0gZmlsdGVyIC0gZmlsdGVyIHRvIGJlIHZhbGlkYXRlXG4gKiBAcGFyYW0gbGF5ZXJzIC0gbGF5ZXJzXG4gKiBAcmV0dXJuIHZhbGlkYXRlZCBmaWx0ZXJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLnZhbGlkYXRlRmlsdGVyV2l0aERhdGF9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhKGRhdGFzZXQsIGZpbHRlciwgbGF5ZXJzKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZpbHRlclZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkoZmlsdGVyLnR5cGUpXG4gICAgPyBmaWx0ZXJWYWxpZGF0b3JzW2ZpbHRlci50eXBlXShkYXRhc2V0LCBmaWx0ZXIsIGxheWVycylcbiAgICA6IHZhbGlkYXRlRmlsdGVyKGRhdGFzZXQsIGZpbHRlcik7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgWUF4aXNcbiAqIEBwYXJhbSBmaWx0ZXJcbiAqIEBwYXJhbSBkYXRhc2V0XG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZpbHRlcllBeGlzKGZpbHRlciwgZGF0YXNldCkge1xuICAvLyBUT0RPOiB2YWxpZGF0ZSB5QXhpcyBhZ2FpbnN0IG90aGVyIGRhdGFzZXRzXG5cbiAgY29uc3Qge2ZpZWxkc30gPSBkYXRhc2V0O1xuICBjb25zdCB7eUF4aXN9ID0gZmlsdGVyO1xuICAvLyBUT0RPOiB2YWxpZGF0ZSB5QXhpcyBhZ2FpbnN0IG90aGVyIGRhdGFzZXRzXG4gIGlmICh5QXhpcykge1xuICAgIGNvbnN0IG1hdGNoZWRBeGlzID0gZmllbGRzLmZpbmQoKHtuYW1lLCB0eXBlfSkgPT4gbmFtZSA9PT0geUF4aXMubmFtZSAmJiB0eXBlID09PSB5QXhpcy50eXBlKTtcblxuICAgIGZpbHRlciA9IG1hdGNoZWRBeGlzXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5maWx0ZXIsXG4gICAgICAgICAgeUF4aXM6IG1hdGNoZWRBeGlzLFxuICAgICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLmZpbHRlciwgeUF4aXM6IG1hdGNoZWRBeGlzfSwgZGF0YXNldClcbiAgICAgICAgfVxuICAgICAgOiBmaWx0ZXI7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyO1xufVxuXG4vKipcbiAqIEdldCBkZWZhdWx0IGZpbHRlciBwcm9wIGJhc2VkIG9uIGZpZWxkIHR5cGVcbiAqXG4gKiBAcGFyYW0gZmllbGRcbiAqIEBwYXJhbSBmaWVsZERvbWFpblxuICogQHJldHVybnMgZGVmYXVsdCBmaWx0ZXJcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlclByb3BzfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyUHJvcHMoZmllbGQsIGZpZWxkRG9tYWluKSB7XG4gIGNvbnN0IGZpbHRlclByb3BzID0ge1xuICAgIC4uLmZpZWxkRG9tYWluLFxuICAgIGZpZWxkVHlwZTogZmllbGQudHlwZVxuICB9O1xuXG4gIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnJlYWw6XG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuaW50ZWdlcjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpbHRlclByb3BzLFxuICAgICAgICB2YWx1ZTogZmllbGREb21haW4uZG9tYWluLFxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMucmFuZ2UsXG4gICAgICAgIHR5cGVPcHRpb25zOiBbRklMVEVSX1RZUEVTLnJhbmdlXSxcbiAgICAgICAgZ3B1OiB0cnVlXG4gICAgICB9O1xuXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuYm9vbGVhbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpbHRlclByb3BzLFxuICAgICAgICB0eXBlOiBGSUxURVJfVFlQRVMuc2VsZWN0LFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgZ3B1OiBmYWxzZVxuICAgICAgfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnN0cmluZzpcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5kYXRlOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmlsdGVyUHJvcHMsXG4gICAgICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdCxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICBncHU6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmlsdGVyUHJvcHMsXG4gICAgICAgIHR5cGU6IEZJTFRFUl9UWVBFUy50aW1lUmFuZ2UsXG4gICAgICAgIGVubGFyZ2VkOiB0cnVlLFxuICAgICAgICBmaXhlZERvbWFpbjogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZpbHRlclByb3BzLmRvbWFpbixcbiAgICAgICAgZ3B1OiB0cnVlXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UG9seWdvbkZpbHRlckZ1bmN0b3IgPSAobGF5ZXIsIGZpbHRlcikgPT4ge1xuICBjb25zdCBnZXRQb3NpdGlvbiA9IGxheWVyLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcblxuICBzd2l0Y2ggKGxheWVyLnR5cGUpIHtcbiAgICBjYXNlIExBWUVSX1RZUEVTLnBvaW50OlxuICAgIGNhc2UgTEFZRVJfVFlQRVMuaWNvbjpcbiAgICAgIHJldHVybiBkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGF9KTtcbiAgICAgICAgcmV0dXJuIHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpICYmIGlzSW5Qb2x5Z29uKHBvcywgZmlsdGVyLnZhbHVlKTtcbiAgICAgIH07XG4gICAgY2FzZSBMQVlFUl9UWVBFUy5hcmM6XG4gICAgY2FzZSBMQVlFUl9UWVBFUy5saW5lOlxuICAgICAgcmV0dXJuIGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YX0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpICYmXG4gICAgICAgICAgW1xuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdXSxcbiAgICAgICAgICAgIFtwb3NbM10sIHBvc1s0XV1cbiAgICAgICAgICBdLmV2ZXJ5KHBvaW50ID0+IGlzSW5Qb2x5Z29uKHBvaW50LCBmaWx0ZXIudmFsdWUpKVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICBjYXNlIExBWUVSX1RZUEVTLmhleGFnb25JZDpcbiAgICAgIGlmIChsYXllci5kYXRhVG9GZWF0dXJlICYmIGxheWVyLmRhdGFUb0ZlYXR1cmUuY2VudHJvaWRzKSB7XG4gICAgICAgIHJldHVybiAoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyBudWxsIG9yIGdldENlbnRyb2lkKHtpZH0pXG4gICAgICAgICAgY29uc3QgY2VudHJvaWQgPSBsYXllci5kYXRhVG9GZWF0dXJlLmNlbnRyb2lkc1tpbmRleF07XG4gICAgICAgICAgcmV0dXJuIGNlbnRyb2lkICYmIGlzSW5Qb2x5Z29uKGNlbnRyb2lkLCBmaWx0ZXIudmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IGdldFBvc2l0aW9uKHtkYXRhfSk7XG4gICAgICAgIGlmICghaDNJc1ZhbGlkKGlkKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3MgPSBnZXRDZW50cm9pZCh7aWR9KTtcbiAgICAgICAgcmV0dXJuIHBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpICYmIGlzSW5Qb2x5Z29uKHBvcywgZmlsdGVyLnZhbHVlKTtcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSBmaWVsZCBkYXRhc2V0IEZpZWxkXG4gKiBAcGFyYW0gZGF0YUlkIERhdGFzZXQgaWRcbiAqIEBwYXJhbSBmaWx0ZXIgRmlsdGVyIG9iamVjdFxuICogQHBhcmFtIGxheWVycyBsaXN0IG9mIGxheWVycyB0byBmaWx0ZXIgdXBvblxuICogQHJldHVybiBmaWx0ZXJGdW5jdGlvblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZ2V0RmlsdGVyRnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJGdW5jdGlvbihmaWVsZCwgZGF0YUlkLCBmaWx0ZXIsIGxheWVycykge1xuICAvLyBmaWVsZCBjb3VsZCBiZSBudWxsIGluIHBvbHlnb24gZmlsdGVyXG4gIGNvbnN0IHZhbHVlQWNjZXNzb3IgPSBmaWVsZCA/IGZpZWxkLnZhbHVlQWNjZXNzb3IgOiBkYXRhID0+IG51bGw7XG4gIGNvbnN0IGRlZmF1bHRGdW5jID0gZCA9PiB0cnVlO1xuXG4gIHN3aXRjaCAoZmlsdGVyLnR5cGUpIHtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5yYW5nZTpcbiAgICAgIHJldHVybiBkYXRhID0+IGlzSW5SYW5nZSh2YWx1ZUFjY2Vzc29yKGRhdGEpLCBmaWx0ZXIudmFsdWUpO1xuICAgIGNhc2UgRklMVEVSX1RZUEVTLm11bHRpU2VsZWN0OlxuICAgICAgcmV0dXJuIGRhdGEgPT4gZmlsdGVyLnZhbHVlLmluY2x1ZGVzKHZhbHVlQWNjZXNzb3IoZGF0YSkpO1xuICAgIGNhc2UgRklMVEVSX1RZUEVTLnNlbGVjdDpcbiAgICAgIHJldHVybiBkYXRhID0+IHZhbHVlQWNjZXNzb3IoZGF0YSkgPT09IGZpbHRlci52YWx1ZTtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy50aW1lUmFuZ2U6XG4gICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RnVuYztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcHBlZFZhbHVlID0gZ2V0KGZpZWxkLCBbJ2ZpbHRlclByb3BzJywgJ21hcHBlZFZhbHVlJ10pO1xuICAgICAgY29uc3QgYWNjZXNzb3IgPSBBcnJheS5pc0FycmF5KG1hcHBlZFZhbHVlKVxuICAgICAgICA/IChkYXRhLCBpbmRleCkgPT4gbWFwcGVkVmFsdWVbaW5kZXhdXG4gICAgICAgIDogZGF0YSA9PiB0aW1lVG9Vbml4TWlsbGkodmFsdWVBY2Nlc3NvcihkYXRhKSwgZmllbGQuZm9ybWF0KTtcbiAgICAgIHJldHVybiAoZGF0YSwgaW5kZXgpID0+IGlzSW5SYW5nZShhY2Nlc3NvcihkYXRhLCBpbmRleCksIGZpbHRlci52YWx1ZSk7XG4gICAgY2FzZSBGSUxURVJfVFlQRVMucG9seWdvbjpcbiAgICAgIGlmICghbGF5ZXJzIHx8ICFsYXllcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RnVuYztcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGxheWVyRmlsdGVyRnVuY3Rpb25zID0gZmlsdGVyLmxheWVySWRcbiAgICAgICAgLm1hcChpZCA9PiBsYXllcnMuZmluZChsID0+IGwuaWQgPT09IGlkKSlcbiAgICAgICAgLmZpbHRlcihsID0+IGwgJiYgbC5jb25maWcuZGF0YUlkID09PSBkYXRhSWQpXG4gICAgICAgIC5tYXAobGF5ZXIgPT4gZ2V0UG9seWdvbkZpbHRlckZ1bmN0b3IobGF5ZXIsIGZpbHRlcikpO1xuXG4gICAgICByZXR1cm4gKGRhdGEsIGluZGV4KSA9PiBsYXllckZpbHRlckZ1bmN0aW9ucy5ldmVyeShmaWx0ZXJGdW5jID0+IGZpbHRlckZ1bmMoZGF0YSwgaW5kZXgpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRlZmF1bHRGdW5jO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWx0ZXJEYXRhSWQoZGF0YUlkKSB7XG4gIHJldHVybiBnZXREZWZhdWx0RmlsdGVyKGRhdGFJZCk7XG59XG5cbi8qKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmlsdGVyRGF0YUJ5RmlsdGVyVHlwZXN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJEYXRhQnlGaWx0ZXJUeXBlcyh7ZHluYW1pY0RvbWFpbkZpbHRlcnMsIGNwdUZpbHRlcnMsIGZpbHRlckZ1bmNzfSwgYWxsRGF0YSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgLi4uKGR5bmFtaWNEb21haW5GaWx0ZXJzID8ge2ZpbHRlcmVkSW5kZXhGb3JEb21haW46IFtdfSA6IHt9KSxcbiAgICAuLi4oY3B1RmlsdGVycyA/IHtmaWx0ZXJlZEluZGV4OiBbXX0gOiB7fSlcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkID0gYWxsRGF0YVtpXTtcblxuICAgIGNvbnN0IG1hdGNoRm9yRG9tYWluID1cbiAgICAgIGR5bmFtaWNEb21haW5GaWx0ZXJzICYmIGR5bmFtaWNEb21haW5GaWx0ZXJzLmV2ZXJ5KGZpbHRlciA9PiBmaWx0ZXJGdW5jc1tmaWx0ZXIuaWRdKGQsIGkpKTtcblxuICAgIGlmIChtYXRjaEZvckRvbWFpbikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzdWx0LmZpbHRlcmVkSW5kZXhGb3JEb21haW4ucHVzaChpKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaEZvclJlbmRlciA9IGNwdUZpbHRlcnMgJiYgY3B1RmlsdGVycy5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyRnVuY3NbZmlsdGVyLmlkXShkLCBpKSk7XG5cbiAgICBpZiAobWF0Y2hGb3JSZW5kZXIpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJlc3VsdC5maWx0ZXJlZEluZGV4LnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgYSByZWNvcmQgb2YgZmlsdGVycyBiYXNlZCBvbiBkb21haW4gdHlwZSBhbmQgZ3B1IC8gY3B1XG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJSZWNvcmR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJSZWNvcmQoZGF0YUlkLCBmaWx0ZXJzLCBvcHQgPSB7fSkge1xuICAvKipcbiAgICogQHR5cGUge0ZpbHRlclJlY29yZH1cbiAgICovXG4gIGNvbnN0IGZpbHRlclJlY29yZCA9IHtcbiAgICBkeW5hbWljRG9tYWluOiBbXSxcbiAgICBmaXhlZERvbWFpbjogW10sXG4gICAgY3B1OiBbXSxcbiAgICBncHU6IFtdXG4gIH07XG5cbiAgZmlsdGVycy5mb3JFYWNoKGYgPT4ge1xuICAgIGlmIChpc1ZhbGlkRmlsdGVyVmFsdWUoZi50eXBlLCBmLnZhbHVlKSAmJiB0b0FycmF5KGYuZGF0YUlkKS5pbmNsdWRlcyhkYXRhSWQpKSB7XG4gICAgICAoZi5maXhlZERvbWFpbiB8fCBvcHQuaWdub3JlRG9tYWluXG4gICAgICAgID8gZmlsdGVyUmVjb3JkLmZpeGVkRG9tYWluXG4gICAgICAgIDogZmlsdGVyUmVjb3JkLmR5bmFtaWNEb21haW5cbiAgICAgICkucHVzaChmKTtcblxuICAgICAgKGYuZ3B1ICYmICFvcHQuY3B1T25seSA/IGZpbHRlclJlY29yZC5ncHUgOiBmaWx0ZXJSZWNvcmQuY3B1KS5wdXNoKGYpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlclJlY29yZDtcbn1cblxuLyoqXG4gKiBDb21wYXJlIGZpbHRlciByZWNvcmRzIHRvIGdldCB3aGF0IGhhcyBjaGFuZ2VkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5kaWZmRmlsdGVyc31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZGaWx0ZXJzKGZpbHRlclJlY29yZCwgb2xkRmlsdGVyUmVjb3JkID0ge30pIHtcbiAgbGV0IGZpbHRlckNoYW5nZWQgPSB7fTtcblxuICBPYmplY3QuZW50cmllcyhmaWx0ZXJSZWNvcmQpLmZvckVhY2goKFtyZWNvcmQsIGl0ZW1zXSkgPT4ge1xuICAgIGl0ZW1zLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgIGNvbnN0IG9sZEZpbHRlciA9IChvbGRGaWx0ZXJSZWNvcmRbcmVjb3JkXSB8fCBbXSkuZmluZChmID0+IGYuaWQgPT09IGZpbHRlci5pZCk7XG5cbiAgICAgIGlmICghb2xkRmlsdGVyKSB7XG4gICAgICAgIC8vIGFkZGVkXG4gICAgICAgIGZpbHRlckNoYW5nZWQgPSBzZXQoW3JlY29yZCwgZmlsdGVyLmlkXSwgJ2FkZGVkJywgZmlsdGVyQ2hhbmdlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjaGVjayAgd2hhdCBoYXMgY2hhbmdlZFxuICAgICAgICBbJ25hbWUnLCAndmFsdWUnLCAnZGF0YUlkJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBpZiAoZmlsdGVyW3Byb3BdICE9PSBvbGRGaWx0ZXJbcHJvcF0pIHtcbiAgICAgICAgICAgIGZpbHRlckNoYW5nZWQgPSBzZXQoW3JlY29yZCwgZmlsdGVyLmlkXSwgYCR7cHJvcH1fY2hhbmdlZGAsIGZpbHRlckNoYW5nZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAob2xkRmlsdGVyUmVjb3JkW3JlY29yZF0gfHwgW10pLmZvckVhY2gob2xkRmlsdGVyID0+IHtcbiAgICAgIC8vIGRlbGV0ZWRcbiAgICAgIGlmICghaXRlbXMuZmluZChmID0+IGYuaWQgPT09IG9sZEZpbHRlci5pZCkpIHtcbiAgICAgICAgZmlsdGVyQ2hhbmdlZCA9IHNldChbcmVjb3JkLCBvbGRGaWx0ZXIuaWRdLCAnZGVsZXRlZCcsIGZpbHRlckNoYW5nZWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFmaWx0ZXJDaGFuZ2VkW3JlY29yZF0pIHtcbiAgICAgIGZpbHRlckNoYW5nZWRbcmVjb3JkXSA9IG51bGw7XG4gICAgfVxuICB9KTtcblxuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmaWx0ZXJDaGFuZ2VkO1xufVxuLyoqXG4gKiBDYWxsIGJ5IHBhcnNpbmcgZmlsdGVycyBmcm9tIFVSTFxuICogQ2hlY2sgaWYgdmFsdWUgb2YgZmlsdGVyIHdpdGhpbiBmaWx0ZXIgZG9tYWluLCBpZiBub3QgYWRqdXN0IGl0IHRvIG1hdGNoXG4gKiBmaWx0ZXIgZG9tYWluXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbn1cbiAqIEByZXR1cm5zIHZhbHVlIC0gYWRqdXN0ZWQgdmFsdWUgdG8gbWF0Y2ggZmlsdGVyIG9yIG51bGwgdG8gcmVtb3ZlIGZpbHRlclxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZnVuY3Rpb24gYWRqdXN0VmFsdWVUb0ZpbHRlckRvbWFpbih2YWx1ZSwge2RvbWFpbiwgdHlwZX0pIHtcbiAgaWYgKCFkb21haW4gfHwgIXR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy5yYW5nZTpcbiAgICBjYXNlIEZJTFRFUl9UWVBFUy50aW1lUmFuZ2U6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCAhPT0gMikge1xuICAgICAgICByZXR1cm4gZG9tYWluLm1hcChkID0+IGQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWUubWFwKChkLCBpKSA9PiAobm90TnVsbG9yVW5kZWZpbmVkKGQpICYmIGlzSW5SYW5nZShkLCBkb21haW4pID8gZCA6IGRvbWFpbltpXSkpO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMubXVsdGlTZWxlY3Q6XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB2YWx1ZS5maWx0ZXIoZCA9PiBkb21haW4uaW5jbHVkZXMoZCkpO1xuICAgICAgcmV0dXJuIGZpbHRlcmVkVmFsdWUubGVuZ3RoID8gZmlsdGVyZWRWYWx1ZSA6IFtdO1xuXG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxuICAgICAgcmV0dXJuIGRvbWFpbi5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6IHRydWU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIENhbGN1bGF0ZSBudW1lcmljIGRvbWFpbiBhbmQgc3VpdGFibGUgc3RlcFxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldE51bWVyaWNGaWVsZERvbWFpbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE51bWVyaWNGaWVsZERvbWFpbihkYXRhLCB2YWx1ZUFjY2Vzc29yKSB7XG4gIGxldCBkb21haW4gPSBbMCwgMV07XG4gIGxldCBzdGVwID0gMC4xO1xuXG4gIGNvbnN0IG1hcHBlZFZhbHVlID0gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEubWFwKHZhbHVlQWNjZXNzb3IpIDogW107XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgZG9tYWluID0gU2NhbGVVdGlscy5nZXRMaW5lYXJEb21haW4obWFwcGVkVmFsdWUpO1xuICAgIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG5cbiAgICAvLyBpbiBjYXNlIGVxdWFsIGRvbWFpbiwgWzk2LCA5Nl0sIHdoaWNoIHdpbGwgYnJlYWsgcXVhbnRpemUgc2NhbGVcbiAgICBpZiAoIWRpZmYpIHtcbiAgICAgIGRvbWFpblsxXSA9IGRvbWFpblswXSArIDE7XG4gICAgfVxuXG4gICAgc3RlcCA9IGdldE51bWVyaWNTdGVwU2l6ZShkaWZmKSB8fCBzdGVwO1xuICAgIGRvbWFpblswXSA9IGZvcm1hdE51bWJlckJ5U3RlcChkb21haW5bMF0sIHN0ZXAsICdmbG9vcicpO1xuICAgIGRvbWFpblsxXSA9IGZvcm1hdE51bWJlckJ5U3RlcChkb21haW5bMV0sIHN0ZXAsICdjZWlsJyk7XG4gIH1cblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHtoaXN0b2dyYW0sIGVubGFyZ2VkSGlzdG9ncmFtfSA9IGdldEhpc3RvZ3JhbShkb21haW4sIG1hcHBlZFZhbHVlKTtcblxuICByZXR1cm4ge2RvbWFpbiwgc3RlcCwgaGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHN0ZXAgc2l6ZSBmb3IgcmFuZ2UgYW5kIHRpbWVyYW5nZSBmaWx0ZXJcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXROdW1lcmljU3RlcFNpemV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1lcmljU3RlcFNpemUoZGlmZikge1xuICBkaWZmID0gTWF0aC5hYnMoZGlmZik7XG5cbiAgaWYgKGRpZmYgPiAxMDApIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMykge1xuICAgIHJldHVybiAwLjAxO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAxKSB7XG4gICAgcmV0dXJuIDAuMDAxO1xuICB9XG4gIC8vIFRyeSB0byBnZXQgYXQgbGVhc3QgMTAwMCBzdGVwcyAtIGFuZCBrZWVwIHRoZSBzdGVwIHNpemUgYmVsb3cgdGhhdCBvZlxuICAvLyB0aGUgKGRpZmYgPiAxKSBjYXNlLlxuICBjb25zdCB4ID0gZGlmZiAvIDEwMDA7XG4gIC8vIEZpbmQgdGhlIGV4cG9uZW50IGFuZCB0cnVuY2F0ZSB0byAxMCB0byB0aGUgcG93ZXIgb2YgdGhhdCBleHBvbmVudFxuXG4gIGNvbnN0IGV4cG9uZW50aWFsRm9ybSA9IHgudG9FeHBvbmVudGlhbCgpO1xuICBjb25zdCBleHBvbmVudCA9IHBhcnNlRmxvYXQoZXhwb25lbnRpYWxGb3JtLnNwbGl0KCdlJylbMV0pO1xuXG4gIC8vIEdldHRpbmcgcmVhZHkgZm9yIG5vZGUgMTJcbiAgLy8gdGhpcyBpcyB3aHkgd2UgbmVlZCBkZWNpbWFsLmpzXG4gIC8vIE1hdGgucG93KDEwLCAtNSkgPSAwLjAwMDAwOTk5OTk5OTk5OTk5OTk5OVxuICAvLyB0aGUgYWJvdmUgcmVzdWx0IHNob3dzIGluIGJyb3dzZXIgYW5kIG5vZGUgMTBcbiAgLy8gbm9kZSAxMiBiZWhhdmVzIGNvcnJlY3RseVxuICByZXR1cm4gbmV3IERlY2ltYWwoMTApLnBvdyhleHBvbmVudCkudG9OdW1iZXIoKTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGltZXN0YW1wIGRvbWFpbiBhbmQgc3VpdGFibGUgc3RlcFxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldFRpbWVzdGFtcEZpZWxkRG9tYWlufVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXN0YW1wRmllbGREb21haW4oZGF0YSwgdmFsdWVBY2Nlc3Nvcikge1xuICAvLyB0byBhdm9pZCBjb252ZXJ0aW5nIHN0cmluZyBmb3JtYXQgdGltZSB0byBlcG9jaFxuICAvLyBldmVyeSB0aW1lIHdlIGNvbXBhcmUgd2Ugc3RvcmUgYSB2YWx1ZSBtYXBwZWQgdG8gaW50IGluIGZpbHRlciBkb21haW5cblxuICBjb25zdCBtYXBwZWRWYWx1ZSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhLm1hcCh2YWx1ZUFjY2Vzc29yKSA6IFtdO1xuICBjb25zdCBkb21haW4gPSBTY2FsZVV0aWxzLmdldExpbmVhckRvbWFpbihtYXBwZWRWYWx1ZSk7XG4gIGNvbnN0IGRlZmF1bHRUaW1lRm9ybWF0ID0gZ2V0VGltZVdpZGdldFRpdGxlRm9ybWF0dGVyKGRvbWFpbik7XG5cbiAgbGV0IHN0ZXAgPSAwLjAxO1xuXG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG4gIGNvbnN0IGVudHJ5ID0gVGltZXN0YW1wU3RlcE1hcC5maW5kKGYgPT4gZi5tYXggPj0gZGlmZik7XG4gIGlmIChlbnRyeSkge1xuICAgIHN0ZXAgPSBlbnRyeS5zdGVwO1xuICB9XG5cbiAgY29uc3Qge2hpc3RvZ3JhbSwgZW5sYXJnZWRIaXN0b2dyYW19ID0gZ2V0SGlzdG9ncmFtKGRvbWFpbiwgbWFwcGVkVmFsdWUpO1xuXG4gIHJldHVybiB7XG4gICAgZG9tYWluLFxuICAgIHN0ZXAsXG4gICAgbWFwcGVkVmFsdWUsXG4gICAgaGlzdG9ncmFtLFxuICAgIGVubGFyZ2VkSGlzdG9ncmFtLFxuICAgIGRlZmF1bHRUaW1lRm9ybWF0XG4gIH07XG59XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmhpc3RvZ3JhbUNvbnN0cnVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhpc3RvZ3JhbUNvbnN0cnVjdChkb21haW4sIG1hcHBlZFZhbHVlLCBiaW5zKSB7XG4gIHJldHVybiBkM0hpc3RvZ3JhbSgpXG4gICAgLnRocmVzaG9sZHModGlja3MoZG9tYWluWzBdLCBkb21haW5bMV0sIGJpbnMpKVxuICAgIC5kb21haW4oZG9tYWluKShtYXBwZWRWYWx1ZSlcbiAgICAubWFwKGJpbiA9PiAoe1xuICAgICAgY291bnQ6IGJpbi5sZW5ndGgsXG4gICAgICB4MDogYmluLngwLFxuICAgICAgeDE6IGJpbi54MVxuICAgIH0pKTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIGhpc3RvZ3JhbSBmcm9tIGRvbWFpbiBhbmQgYXJyYXkgb2YgdmFsdWVzXG4gKlxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZ2V0SGlzdG9ncmFtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGlzdG9ncmFtKGRvbWFpbiwgbWFwcGVkVmFsdWUpIHtcbiAgY29uc3QgaGlzdG9ncmFtID0gaGlzdG9ncmFtQ29uc3RydWN0KGRvbWFpbiwgbWFwcGVkVmFsdWUsIGhpc3RvZ3JhbUJpbnMpO1xuICBjb25zdCBlbmxhcmdlZEhpc3RvZ3JhbSA9IGhpc3RvZ3JhbUNvbnN0cnVjdChkb21haW4sIG1hcHBlZFZhbHVlLCBlbmxhcmdlZEhpc3RvZ3JhbUJpbnMpO1xuXG4gIHJldHVybiB7aGlzdG9ncmFtLCBlbmxhcmdlZEhpc3RvZ3JhbX07XG59XG5cbi8qKlxuICogcm91bmQgbnVtYmVyIGJhc2VkIG9uIHN0ZXBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsXG4gKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICogQHBhcmFtIHtzdHJpbmd9IGJvdW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSByb3VuZGVkIG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyQnlTdGVwKHZhbCwgc3RlcCwgYm91bmQpIHtcbiAgaWYgKGJvdW5kID09PSAnZmxvb3InKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodmFsICogKDEgLyBzdGVwKSkgLyAoMSAvIHN0ZXApO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguY2VpbCh2YWwgKiAoMSAvIHN0ZXApKSAvICgxIC8gc3RlcCk7XG59XG5cbi8qKlxuICpcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmlzSW5SYW5nZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZSh2YWwsIGRvbWFpbikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tYWluKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2YWwgPj0gZG9tYWluWzBdICYmIHZhbCA8PSBkb21haW5bMV07XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgcG9pbnQgaXMgd2l0aGluIHRoZSBwcm92aWRlZCBwb2x5Z29uXG4gKlxuICogQHBhcmFtIHBvaW50IGFzIGlucHV0IHNlYXJjaCBbbGF0LCBsbmddXG4gKiBAcGFyYW0gcG9seWdvbiBQb2ludHMgbXVzdCBiZSB3aXRoaW4gdGhlc2UgKE11bHRpKVBvbHlnb24ocylcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luUG9seWdvbihwb2ludCwgcG9seWdvbikge1xuICByZXR1cm4gYm9vbGVhbldpdGhpbih0dXJmUG9pbnQocG9pbnQpLCBwb2x5Z29uKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkVGltZURvbWFpbihkb21haW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZG9tYWluKSAmJiBkb21haW4uZXZlcnkoTnVtYmVyLmlzRmluaXRlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIoZG9tYWluKSB7XG4gIGlmICghaXNWYWxpZFRpbWVEb21haW4oZG9tYWluKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZGlmZiA9IGRvbWFpblsxXSAtIGRvbWFpblswXTtcblxuICAvLyBMb2NhbCBhd2FyZSBmb3JtYXRzXG4gIC8vIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9wYXJzaW5nL3N0cmluZy1mb3JtYXRcbiAgcmV0dXJuIGRpZmYgPiBkdXJhdGlvblllYXIgPyAnTCcgOiBkaWZmID4gZHVyYXRpb25EYXkgPyAnTCBMVCcgOiAnTCBMVFMnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIoZG9tYWluKSB7XG4gIGlmICghaXNWYWxpZFRpbWVEb21haW4oZG9tYWluKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZGlmZiA9IGRvbWFpblsxXSAtIGRvbWFpblswXTtcbiAgcmV0dXJuIGRpZmYgPiBkdXJhdGlvbldlZWtcbiAgICA/ICdMJ1xuICAgIDogZGlmZiA+IGR1cmF0aW9uRGF5XG4gICAgPyAnTCBMVCdcbiAgICA6IGRpZmYgPiBkdXJhdGlvbkhvdXJcbiAgICA/ICdMVCdcbiAgICA6ICdMVFMnO1xufVxuXG4vKipcbiAqIFNhbml0eSBjaGVjayBvbiBmaWx0ZXJzIHRvIHByZXBhcmUgZm9yIHNhdmVcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmlzVmFsaWRGaWx0ZXJWYWx1ZX1cbiAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRGaWx0ZXJWYWx1ZSh0eXBlLCB2YWx1ZSkge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBGSUxURVJfVFlQRVMuc2VsZWN0OlxuICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcblxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnJhbmdlOlxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnRpbWVSYW5nZTpcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5ldmVyeSh2ID0+IHYgIT09IG51bGwgJiYgIWlzTmFOKHYpKTtcblxuICAgIGNhc2UgRklMVEVSX1RZUEVTLm11bHRpU2VsZWN0OlxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEJvb2xlYW4odmFsdWUubGVuZ3RoKTtcblxuICAgIGNhc2UgRklMVEVSX1RZUEVTLmlucHV0OlxuICAgICAgcmV0dXJuIEJvb2xlYW4odmFsdWUubGVuZ3RoKTtcblxuICAgIGNhc2UgRklMVEVSX1RZUEVTLnBvbHlnb246XG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldCh2YWx1ZSwgWydnZW9tZXRyeScsICdjb29yZGluYXRlcyddKTtcbiAgICAgIHJldHVybiBCb29sZWFuKHZhbHVlICYmIHZhbHVlLmlkICYmIGNvb3JkaW5hdGVzKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRGaWx0ZXJQbG90fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyUGxvdChmaWx0ZXIsIGRhdGFzZXQpIHtcbiAgaWYgKGZpbHRlci5wbG90VHlwZSA9PT0gUExPVF9UWVBFUy5oaXN0b2dyYW0gfHwgIWZpbHRlci55QXhpcykge1xuICAgIC8vIGhpc3RvZ3JhbSBzaG91bGQgYmUgY2FsY3VsYXRlZCB3aGVuIGNyZWF0ZSBmaWx0ZXJcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdCB7bWFwcGVkVmFsdWUgPSBbXX0gPSBmaWx0ZXI7XG4gIGNvbnN0IHt5QXhpc30gPSBmaWx0ZXI7XG4gIGNvbnN0IGZpZWxkSWR4ID0gZGF0YXNldC5nZXRDb2x1bW5GaWVsZElkeCh5QXhpcy5uYW1lKTtcbiAgaWYgKGZpZWxkSWR4IDwgMCkge1xuICAgIENvbnNvbGUud2FybihgeUF4aXMgJHt5QXhpcy5uYW1lfSBkb2VzIG5vdCBleGlzdCBpbiBkYXRhc2V0YCk7XG4gICAgcmV0dXJuIHtsaW5lQ2hhcnQ6IHt9LCB5QXhpc307XG4gIH1cblxuICAvLyByZXR1cm4gbGluZUNoYXJ0XG4gIGNvbnN0IHNlcmllcyA9IGRhdGFzZXQuYWxsRGF0YVxuICAgIC5tYXAoKGQsIGkpID0+ICh7XG4gICAgICB4OiBtYXBwZWRWYWx1ZVtpXSxcbiAgICAgIHk6IGRbZmllbGRJZHhdXG4gICAgfSkpXG4gICAgLmZpbHRlcigoe3gsIHl9KSA9PiBOdW1iZXIuaXNGaW5pdGUoeCkgJiYgTnVtYmVyLmlzRmluaXRlKHkpKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhc2NlbmRpbmcoYS54LCBiLngpKTtcblxuICBjb25zdCB5RG9tYWluID0gZXh0ZW50KHNlcmllcywgZCA9PiBkLnkpO1xuICBjb25zdCB4RG9tYWluID0gW3Nlcmllc1swXS54LCBzZXJpZXNbc2VyaWVzLmxlbmd0aCAtIDFdLnhdO1xuXG4gIHJldHVybiB7bGluZUNoYXJ0OiB7c2VyaWVzLCB5RG9tYWluLCB4RG9tYWlufSwgeUF4aXN9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlKGZpbHRlcikge1xuICBjb25zdCBmaWx0ZXJQbG90VHlwZXMgPSBTdXBwb3J0ZWRQbG90VHlwZVtmaWx0ZXIudHlwZV07XG4gIGlmICghZmlsdGVyUGxvdFR5cGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWZpbHRlci55QXhpcykge1xuICAgIHJldHVybiBmaWx0ZXJQbG90VHlwZXMuZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJQbG90VHlwZXNbZmlsdGVyLnlBeGlzLnR5cGVdIHx8IG51bGw7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBkYXRhc2V0SWRzIGxpc3Qgb2YgZGF0YXNldCBpZHMgdG8gYmUgZmlsdGVyZWRcbiAqIEBwYXJhbSBkYXRhc2V0cyBhbGwgZGF0YXNldHNcbiAqIEBwYXJhbSBmaWx0ZXJzIGFsbCBmaWx0ZXJzIHRvIGJlIGFwcGxpZWQgdG8gZGF0YXNldHNcbiAqIEByZXR1cm4gZGF0YXNldHMgLSBuZXcgdXBkYXRlZCBkYXRhc2V0c1xuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuYXBwbHlGaWx0ZXJzVG9EYXRhc2V0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoZGF0YXNldElkcywgZGF0YXNldHMsIGZpbHRlcnMsIGxheWVycykge1xuICBjb25zdCBkYXRhSWRzID0gdG9BcnJheShkYXRhc2V0SWRzKTtcbiAgcmV0dXJuIGRhdGFJZHMucmVkdWNlKChhY2MsIGRhdGFJZCkgPT4ge1xuICAgIGNvbnN0IGxheWVyc1RvRmlsdGVyID0gKGxheWVycyB8fCBbXSkuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkID09PSBkYXRhSWQpO1xuICAgIGNvbnN0IGFwcGxpZWRGaWx0ZXJzID0gZmlsdGVycy5maWx0ZXIoZCA9PiBzaG91bGRBcHBseUZpbHRlcihkLCBkYXRhSWQpKTtcbiAgICBjb25zdCB0YWJsZSA9IGRhdGFzZXRzW2RhdGFJZF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjLFxuICAgICAgW2RhdGFJZF06IHRhYmxlLmZpbHRlclRhYmxlKGFwcGxpZWRGaWx0ZXJzLCBsYXllcnNUb0ZpbHRlciwge30pXG4gICAgfTtcbiAgfSwgZGF0YXNldHMpO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBuZXcgZmllbGQgbmFtZSB2YWx1ZSB0byBmaWVsdGVyIGFuZCB1cGRhdGUgYm90aCBmaWx0ZXIgYW5kIGRhdGFzZXRcbiAqIEBwYXJhbSBmaWx0ZXIgLSB0byBiZSBhcHBsaWVkIHRoZSBuZXcgZmllbGQgbmFtZSBvblxuICogQHBhcmFtIGRhdGFzZXQgLSBkYXRhc2V0IHRoZSBmaWVsZCBiZWxvbmdzIHRvXG4gKiBAcGFyYW0gZmllbGROYW1lIC0gZmllbGQubmFtZVxuICogQHBhcmFtIGZpbHRlckRhdGFzZXRJbmRleCAtIGZpZWxkLm5hbWVcbiAqIEBwYXJhbSBvcHRpb25cbiAqIEByZXR1cm4gLSB7ZmlsdGVyLCBkYXRhc2V0c31cbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmFwcGx5RmlsdGVyRmllbGROYW1lfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoZmlsdGVyLCBkYXRhc2V0LCBmaWVsZE5hbWUsIGZpbHRlckRhdGFzZXRJbmRleCA9IDAsIG9wdGlvbikge1xuICAvLyB1c2luZyBmaWx0ZXJEYXRhc2V0SW5kZXggd2UgY2FuIGZpbHRlciBvbmx5IHRoZSBzcGVjaWZpZWQgZGF0YXNldFxuICBjb25zdCBtZXJnZURvbWFpbiA9IG9wdGlvbiAmJiBvcHRpb24uaGFzT3duUHJvcGVydHkoJ21lcmdlRG9tYWluJykgPyBvcHRpb24ubWVyZ2VEb21haW4gOiBmYWxzZTtcblxuICBjb25zdCBmaWVsZEluZGV4ID0gZGF0YXNldC5nZXRDb2x1bW5GaWVsZElkeChmaWVsZE5hbWUpO1xuICAvLyBpZiBubyBmaWVsZCB3aXRoIHNhbWUgbmFtZSBpcyBmb3VuZCwgbW92ZSB0byB0aGUgbmV4dCBkYXRhc2V0c1xuICBpZiAoZmllbGRJbmRleCA9PT0gLTEpIHtcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYGZpZWxkSW5kZXggbm90IGZvdW5kLiBEYXRhc2V0IG11c3QgY29udGFpbiBhIHByb3BlcnR5IHdpdGggbmFtZTogJHtmaWVsZE5hbWV9YCk7XG4gICAgcmV0dXJuIHtmaWx0ZXI6IG51bGwsIGRhdGFzZXR9O1xuICB9XG5cbiAgLy8gVE9ETzogdmFsaWRhdGUgZmllbGQgdHlwZVxuICBjb25zdCBmaWx0ZXJQcm9wcyA9IGRhdGFzZXQuZ2V0Q29sdW1uRmlsdGVyUHJvcHMoZmllbGROYW1lKTtcblxuICBjb25zdCBuZXdGaWx0ZXIgPSB7XG4gICAgLi4uKG1lcmdlRG9tYWluID8gbWVyZ2VGaWx0ZXJEb21haW5TdGVwKGZpbHRlciwgZmlsdGVyUHJvcHMpIDogey4uLmZpbHRlciwgLi4uZmlsdGVyUHJvcHN9KSxcbiAgICBuYW1lOiBPYmplY3QuYXNzaWduKFsuLi50b0FycmF5KGZpbHRlci5uYW1lKV0sIHtbZmlsdGVyRGF0YXNldEluZGV4XTogZmllbGROYW1lfSksXG4gICAgZmllbGRJZHg6IE9iamVjdC5hc3NpZ24oWy4uLnRvQXJyYXkoZmlsdGVyLmZpZWxkSWR4KV0sIHtcbiAgICAgIFtmaWx0ZXJEYXRhc2V0SW5kZXhdOiBmaWVsZEluZGV4XG4gICAgfSksXG4gICAgLy8gVE9ETywgc2luY2Ugd2UgYWxsb3cgdG8gYWRkIG11bHRpcGxlIGZpZWxkcyB0byBhIGZpbHRlciB3ZSBjYW4gbm8gbG9uZ2VyIGZyZWV6ZSB0aGUgZmlsdGVyXG4gICAgZnJlZXplOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBmaWx0ZXI6IG5ld0ZpbHRlcixcbiAgICBkYXRhc2V0XG4gIH07XG59XG5cbi8qKlxuICogTWVyZ2Ugb25lIGZpbHRlciB3aXRoIG90aGVyIGZpbHRlciBwcm9wIGRvbWFpblxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykubWVyZ2VGaWx0ZXJEb21haW5TdGVwfVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGaWx0ZXJEb21haW5TdGVwKGZpbHRlciwgZmlsdGVyUHJvcHMpIHtcbiAgaWYgKCFmaWx0ZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghZmlsdGVyUHJvcHMpIHtcbiAgICByZXR1cm4gZmlsdGVyO1xuICB9XG5cbiAgaWYgKChmaWx0ZXIuZmllbGRUeXBlICYmIGZpbHRlci5maWVsZFR5cGUgIT09IGZpbHRlclByb3BzLmZpZWxkVHlwZSkgfHwgIWZpbHRlclByb3BzLmRvbWFpbikge1xuICAgIHJldHVybiBmaWx0ZXI7XG4gIH1cblxuICBjb25zdCBjb21iaW5lZERvbWFpbiA9ICFmaWx0ZXIuZG9tYWluXG4gICAgPyBmaWx0ZXJQcm9wcy5kb21haW5cbiAgICA6IFsuLi4oZmlsdGVyLmRvbWFpbiB8fCBbXSksIC4uLihmaWx0ZXJQcm9wcy5kb21haW4gfHwgW10pXS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgY29uc3QgbmV3RmlsdGVyID0ge1xuICAgIC4uLmZpbHRlcixcbiAgICAuLi5maWx0ZXJQcm9wcyxcbiAgICBkb21haW46IFtjb21iaW5lZERvbWFpblswXSwgY29tYmluZWREb21haW5bY29tYmluZWREb21haW4ubGVuZ3RoIC0gMV1dXG4gIH07XG5cbiAgc3dpdGNoIChmaWx0ZXJQcm9wcy5maWVsZFR5cGUpIHtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5zdHJpbmc6XG4gICAgY2FzZSBBTExfRklFTERfVFlQRVMuZGF0ZTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld0ZpbHRlcixcbiAgICAgICAgZG9tYWluOiB1bmlxdWUoY29tYmluZWREb21haW4pLnNvcnQoKVxuICAgICAgfTtcblxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcDpcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHN0ZXAgPSBmaWx0ZXIuc3RlcCA8IGZpbHRlclByb3BzLnN0ZXAgPyBmaWx0ZXIuc3RlcCA6IGZpbHRlclByb3BzLnN0ZXA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld0ZpbHRlcixcbiAgICAgICAgc3RlcFxuICAgICAgfTtcbiAgICBjYXNlIEFMTF9GSUVMRF9UWVBFUy5yZWFsOlxuICAgIGNhc2UgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXdGaWx0ZXI7XG4gIH1cbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4vKipcbiAqIEdlbmVyYXRlcyBwb2x5Z29uIGZpbHRlclxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmVhdHVyZVRvRmlsdGVyVmFsdWV9XG4gKi9cbmV4cG9ydCBjb25zdCBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSA9IChmZWF0dXJlLCBmaWx0ZXJJZCwgcHJvcGVydGllcyA9IHt9KSA9PiAoe1xuICAuLi5mZWF0dXJlLFxuICBpZDogZmVhdHVyZS5pZCxcbiAgcHJvcGVydGllczoge1xuICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcbiAgICAuLi5wcm9wZXJ0aWVzLFxuICAgIGZpbHRlcklkXG4gIH1cbn0pO1xuXG4vKipcbiAqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2ZpbHRlci11dGlscycpLmdldEZpbHRlcklkSW5GZWF0dXJlfVxuICovXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVySWRJbkZlYXR1cmUgPSBmID0+IGdldChmLCBbJ3Byb3BlcnRpZXMnLCAnZmlsdGVySWQnXSk7XG5cbi8qKlxuICogR2VuZXJhdGVzIHBvbHlnb24gZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZW5lcmF0ZVBvbHlnb25GaWx0ZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIobGF5ZXJzLCBmZWF0dXJlKSB7XG4gIGNvbnN0IGRhdGFJZCA9IGxheWVycy5tYXAobCA9PiBsLmNvbmZpZy5kYXRhSWQpLmZpbHRlcihkID0+IGQpO1xuICBjb25zdCBsYXllcklkID0gbGF5ZXJzLm1hcChsID0+IGwuaWQpO1xuICBjb25zdCBuYW1lID0gbGF5ZXJzLm1hcChsID0+IGwuY29uZmlnLmxhYmVsKTtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBmaWx0ZXIgPSBnZXREZWZhdWx0RmlsdGVyKGRhdGFJZCk7XG4gIHJldHVybiB7XG4gICAgLi4uZmlsdGVyLFxuICAgIGZpeGVkRG9tYWluOiB0cnVlLFxuICAgIHR5cGU6IEZJTFRFUl9UWVBFUy5wb2x5Z29uLFxuICAgIG5hbWUsXG4gICAgbGF5ZXJJZCxcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmVhdHVyZSwgZmlsdGVyLmlkLCB7aXNWaXNpYmxlOiB0cnVlfSlcbiAgfTtcbn1cblxuLyoqXG4gKiBSdW4gZmlsdGVyIGVudGlyZWx5IG9uIENQVVxuICogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vZmlsdGVyLXV0aWxzJykuZmlsdGVyRGF0YXNldENQVX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRhdGFzZXRDUFUoc3RhdGUsIGRhdGFJZCkge1xuICBjb25zdCBkYXRhc2V0RmlsdGVycyA9IHN0YXRlLmZpbHRlcnMuZmlsdGVyKGYgPT4gZi5kYXRhSWQuaW5jbHVkZXMoZGF0YUlkKSk7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuXG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGNwdUZpbHRlcmVkRGF0YXNldCA9IGRhdGFzZXQuZmlsdGVyVGFibGVDUFUoZGF0YXNldEZpbHRlcnMsIHN0YXRlLmxheWVycyk7XG5cbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgY3B1RmlsdGVyZWREYXRhc2V0LCBzdGF0ZSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgcGFyc2VkIGZpbHRlcnMgd2l0aCBkYXRhc2V0cyBhbmQgYWRkIGZpbHRlclByb3BzIHRvIGZpZWxkXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS52YWxpZGF0ZUZpbHRlcnNVcGRhdGVEYXRhc2V0c31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRmlsdGVyc1VwZGF0ZURhdGFzZXRzKHN0YXRlLCBmaWx0ZXJzVG9WYWxpZGF0ZSA9IFtdKSB7XG4gIGNvbnN0IHZhbGlkYXRlZCA9IFtdO1xuICBjb25zdCBmYWlsZWQgPSBbXTtcbiAgY29uc3Qge2RhdGFzZXRzfSA9IHN0YXRlO1xuICBsZXQgdXBkYXRlZERhdGFzZXRzID0gZGF0YXNldHM7XG5cbiAgLy8gbWVyZ2UgZmlsdGVyc1xuICBmaWx0ZXJzVG9WYWxpZGF0ZS5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgLy8gd2UgY2FuIG9ubHkgbG9vayBmb3IgZGF0YXNldHMgZGVmaW5lIGluIHRoZSBmaWx0ZXIgZGF0YUlkXG4gICAgY29uc3QgZGF0YXNldElkcyA9IHRvQXJyYXkoZmlsdGVyLmRhdGFJZCk7XG5cbiAgICAvLyB3ZSBjYW4gbWVyZ2UgYSBmaWx0ZXIgb25seSBpZiBhbGwgZGF0YXNldHMgaW4gZmlsdGVyLmRhdGFJZCBhcmUgbG9hZGVkXG4gICAgaWYgKGRhdGFzZXRJZHMuZXZlcnkoZCA9PiBkYXRhc2V0c1tkXSkpIHtcbiAgICAgIC8vIGFsbCBkYXRhc2V0SWRzIGluIGZpbHRlciBtdXN0IGJlIHByZXNlbnQgdGhlIHN0YXRlIGRhdGFzZXRzXG4gICAgICBjb25zdCB7ZmlsdGVyOiB2YWxpZGF0ZWRGaWx0ZXIsIGFwcGx5VG9EYXRhc2V0cywgYXVnbWVudGVkRGF0YXNldHN9ID0gZGF0YXNldElkcy5yZWR1Y2UoXG4gICAgICAgIChhY2MsIGRhdGFzZXRJZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSB1cGRhdGVkRGF0YXNldHNbZGF0YXNldElkXTtcbiAgICAgICAgICBjb25zdCBsYXllcnMgPSBzdGF0ZS5sYXllcnMuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkID09PSBkYXRhc2V0LmlkKTtcbiAgICAgICAgICBjb25zdCB7ZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBkYXRhc2V0OiB1cGRhdGVkRGF0YXNldH0gPSB2YWxpZGF0ZUZpbHRlcldpdGhEYXRhKFxuICAgICAgICAgICAgYWNjLmF1Z21lbnRlZERhdGFzZXRzW2RhdGFzZXRJZF0gfHwgZGF0YXNldCxcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIGxheWVyc1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAodXBkYXRlZEZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgICAgICAvLyBtZXJnZSBmaWx0ZXIgcHJvcHNcbiAgICAgICAgICAgICAgZmlsdGVyOiBhY2MuZmlsdGVyXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmFjYy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lcmdlRmlsdGVyRG9tYWluU3RlcChhY2MsIHVwZGF0ZWRGaWx0ZXIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB1cGRhdGVkRmlsdGVyLFxuXG4gICAgICAgICAgICAgIGFwcGx5VG9EYXRhc2V0czogWy4uLmFjYy5hcHBseVRvRGF0YXNldHMsIGRhdGFzZXRJZF0sXG5cbiAgICAgICAgICAgICAgYXVnbWVudGVkRGF0YXNldHM6IHtcbiAgICAgICAgICAgICAgICAuLi5hY2MuYXVnbWVudGVkRGF0YXNldHMsXG4gICAgICAgICAgICAgICAgW2RhdGFzZXRJZF06IHVwZGF0ZWREYXRhc2V0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZpbHRlcjogbnVsbCxcbiAgICAgICAgICBhcHBseVRvRGF0YXNldHM6IFtdLFxuICAgICAgICAgIGF1Z21lbnRlZERhdGFzZXRzOiB7fVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAodmFsaWRhdGVkRmlsdGVyICYmIGlzRXF1YWwoZGF0YXNldElkcywgYXBwbHlUb0RhdGFzZXRzKSkge1xuICAgICAgICB2YWxpZGF0ZWQucHVzaCh2YWxpZGF0ZWRGaWx0ZXIpO1xuICAgICAgICB1cGRhdGVkRGF0YXNldHMgPSB7XG4gICAgICAgICAgLi4udXBkYXRlZERhdGFzZXRzLFxuICAgICAgICAgIC4uLmF1Z21lbnRlZERhdGFzZXRzXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhaWxlZC5wdXNoKGZpbHRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge3ZhbGlkYXRlZCwgZmFpbGVkLCB1cGRhdGVkRGF0YXNldHN9O1xufVxuXG4vKipcbiAqIFJldHJpZXZlIGludGVydmFsIGJpbnMgZm9yIHRpbWUgZmlsdGVyXG4gKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9maWx0ZXItdXRpbHMnKS5nZXRJbnRlcnZhbEJpbnN9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRlcnZhbEJpbnMoZmlsdGVyKSB7XG4gIGNvbnN0IHtiaW5zfSA9IGZpbHRlcjtcbiAgY29uc3QgaW50ZXJ2YWwgPSBmaWx0ZXIucGxvdFR5cGU/LmludGVydmFsO1xuICBpZiAoIWludGVydmFsIHx8ICFiaW5zIHx8IE9iamVjdC5rZXlzKGJpbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYmlucyk7XG4gIHJldHVybiB2YWx1ZXNbMF0gPyB2YWx1ZXNbMF1baW50ZXJ2YWxdIDogbnVsbDtcbn1cbiJdfQ==