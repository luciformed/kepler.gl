"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueFunc = getValueFunc;
exports.getScaleFunctor = getScaleFunctor;
exports.getGetValue = getGetValue;
exports.getDimensionSortedBins = getDimensionSortedBins;
exports.getDimensionValueDomain = getDimensionValueDomain;
exports.getDimensionScale = getDimensionScale;
exports.getAggregatedData = getAggregatedData;
exports["default"] = exports.defaultDimensions = exports.defaultElevationDimension = exports.defaultColorDimension = exports.defaultAggregation = exports.DECK_AGGREGATION_MAP = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _aggregationLayers = require("@deck.gl/aggregation-layers");

var _window = require("global/window");

var _aggregateUtils = require("../../utils/aggregate-utils");

var _defaultSettings = require("../../constants/default-settings");

var _DECK_AGGREGATION_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DECK_AGGREGATION_MAP = (_DECK_AGGREGATION_MAP = {}, (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.SUM, _defaultSettings.AGGREGATION_TYPES.sum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MEAN, _defaultSettings.AGGREGATION_TYPES.average), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MIN, _defaultSettings.AGGREGATION_TYPES.minimum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MAX, _defaultSettings.AGGREGATION_TYPES.maximum), _DECK_AGGREGATION_MAP);
exports.DECK_AGGREGATION_MAP = DECK_AGGREGATION_MAP;

function getValueFunc(aggregation, accessor) {
  if (!aggregation || !_aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()]) {
    _window.console.warn("Aggregation ".concat(aggregation, " is not supported"));
  }

  var op = _aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()] || _aggregationLayers.AGGREGATION_OPERATION.SUM;

  var keplerOp = DECK_AGGREGATION_MAP[op];
  return function (pts) {
    return (0, _aggregateUtils.aggregate)(pts.map(accessor), keplerOp);
  };
}

function getScaleFunctor(scaleType) {
  if (!scaleType || !_defaultSettings.SCALE_FUNC[scaleType]) {
    _window.console.warn("Scale ".concat(scaleType, " is not supported"));
  }

  return _defaultSettings.SCALE_FUNC[scaleType] || _defaultSettings.SCALE_FUNC.quantize;
}

function nop() {}

function getGetValue(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers = step.triggers,
      value = _step$triggers.value,
      weight = _step$triggers.weight,
      aggregation = _step$triggers.aggregation;
  var getValue = props[value.prop];

  if (getValue === null) {
    // If `getValue` is not provided from props, build it with aggregation and weight.
    getValue = getValueFunc(props[aggregation.prop], props[weight.prop]);
  }

  if (getValue) {
    this._setDimensionState(key, {
      getValue: getValue
    });
  }
}

function getDimensionSortedBins(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var getValue = this.state.dimensions[key].getValue;
  var sortedBins = new _aggregationLayers._BinSorter(this.state.layerData.data || [], {
    getValue: getValue,
    filterData: props._filterData
  });

  this._setDimensionState(key, {
    sortedBins: sortedBins
  });
}

function getDimensionValueDomain(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers2 = step.triggers,
      lowerPercentile = _step$triggers2.lowerPercentile,
      upperPercentile = _step$triggers2.upperPercentile,
      scaleType = _step$triggers2.scaleType;

  if (!this.state.dimensions[key].sortedBins) {
    // the previous step should set sortedBins, if not, something went wrong
    return;
  } // for log and sqrt scale, returns linear domain by default
  // TODO: support other scale function domain in bin sorter


  var valueDomain = this.state.dimensions[key].sortedBins.getValueDomainByScale(props[scaleType.prop], [props[lowerPercentile.prop], props[upperPercentile.prop]]);

  this._setDimensionState(key, {
    valueDomain: valueDomain
  });
}

function getDimensionScale(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers3 = step.triggers,
      domain = _step$triggers3.domain,
      range = _step$triggers3.range,
      scaleType = _step$triggers3.scaleType;
  var onSet = step.onSet;

  if (!this.state.dimensions[key].valueDomain) {
    // the previous step should set valueDomain, if not, something went wrong
    return;
  }

  var dimensionRange = props[range.prop];
  var dimensionDomain = props[domain.prop] || this.state.dimensions[key].valueDomain;
  var scaleFunctor = getScaleFunctor(scaleType && props[scaleType.prop])();
  var scaleFunc = scaleFunctor.domain(dimensionDomain).range(dimensionRange);

  if ((0, _typeof2["default"])(onSet) === 'object' && typeof props[onSet.props] === 'function') {
    props[onSet.props](scaleFunc.domain());
  }

  this._setDimensionState(key, {
    scaleFunc: scaleFunc
  });
}

function normalizeResult() {
  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // support previous hexagonAggregator API
  if (result.hexagons) {
    return Object.assign({
      data: result.hexagons
    }, result);
  } else if (result.layerData) {
    return Object.assign({
      data: result.layerData
    }, result);
  }

  return result;
}

function getAggregatedData(step, props, aggregation, aggregationParams) {
  var aggr = step.triggers.aggregator;
  var aggregator = props[aggr.prop]; // result should contain a data array and other props
  // result = {data: [], ...other props}

  var result = aggregator(props, aggregationParams);
  this.setState({
    layerData: normalizeResult(result)
  });
}

var defaultAggregation = {
  key: 'position',
  updateSteps: [{
    key: 'aggregate',
    triggers: {
      cellSize: {
        prop: 'cellSize'
      },
      position: {
        prop: 'getPosition',
        updateTrigger: 'getPosition'
      },
      aggregator: {
        prop: 'gridAggregator'
      }
    },
    updater: getAggregatedData
  }]
};
exports.defaultAggregation = defaultAggregation;

function getSubLayerAccessor(dimensionState, dimension, layerProps) {
  return function (cell) {
    var sortedBins = dimensionState.sortedBins,
        scaleFunc = dimensionState.scaleFunc;
    var bin = sortedBins.binMap[cell.index];

    if (bin && bin.counts === 0) {
      // no points left in bin after filtering
      return dimension.nullValue;
    }

    var cv = bin && bin.value;
    var domain = scaleFunc.domain();
    var isValueInDomain = cv >= domain[0] && cv <= domain[domain.length - 1]; // if cell value is outside domain, set alpha to 0

    return isValueInDomain ? scaleFunc(cv) : dimension.nullValue;
  };
}

var defaultColorDimension = {
  key: 'fillColor',
  accessor: 'getFillColor',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var colorValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      colorValue: colorValue
    };
  },
  nullValue: [0, 0, 0, 0],
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getColorValue',
        updateTrigger: 'getColorValue'
      },
      weight: {
        prop: 'getColorWeight',
        updateTrigger: 'getColorWeight'
      },
      aggregation: {
        prop: 'colorAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'lowerPercentile'
      },
      upperPercentile: {
        prop: 'upperPercentile'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'colorDomain'
      },
      range: {
        prop: 'colorRange'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    onSet: {
      props: 'onSetColorDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultColorDimension = defaultColorDimension;
var defaultElevationDimension = {
  key: 'elevation',
  accessor: 'getElevation',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var elevationValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      elevationValue: elevationValue
    };
  },
  nullValue: -1,
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getElevationValue',
        updateTrigger: 'getElevationValue'
      },
      weight: {
        prop: 'getElevationWeight',
        updateTrigger: 'getElevationWeight'
      },
      aggregation: {
        prop: 'elevationAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'elevationLowerPercentile'
      },
      upperPercentile: {
        prop: 'elevationUpperPercentile'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'elevationDomain'
      },
      range: {
        prop: 'elevationRange'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    onSet: {
      props: 'onSetElevationDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultElevationDimension = defaultElevationDimension;
var _defaultDimensions = [defaultColorDimension, defaultElevationDimension];
exports.defaultDimensions = _defaultDimensions;

var CPUAggregator = /*#__PURE__*/function () {
  function CPUAggregator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CPUAggregator);
    this.state = _objectSpread({
      layerData: {},
      dimensions: {// color: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // },
        // elevation: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // }
      }
    }, opts.initialState);
    this.dimensionUpdaters = {};
    this.aggregationUpdater = {};

    this._addDimension(opts.dimensions || _defaultDimensions);

    this._addAggregation(opts.aggregation || defaultAggregation);
  }

  (0, _createClass2["default"])(CPUAggregator, [{
    key: "updateAllDimensions",
    value: function updateAllDimensions(props) {
      var dimensionChanges = []; // update all dimensions

      for (var dim in this.dimensionUpdaters) {
        var updaters = this._accumulateUpdaters(0, props, this.dimensionUpdaters[dim]);

        dimensionChanges = dimensionChanges.concat(updaters);
      }

      dimensionChanges.forEach(function (f) {
        return typeof f === 'function' && f();
      });
    }
  }, {
    key: "updateAggregation",
    value: function updateAggregation(props, aggregationParams) {
      var updaters = this._accumulateUpdaters(0, props, this.aggregationUpdater);

      updaters.forEach(function (f) {
        return typeof f === 'function' && f(aggregationParams);
      });
    }
  }, {
    key: "updateState",
    value: function updateState(opts, aggregationParams) {
      var oldProps = opts.oldProps,
          props = opts.props,
          changeFlags = opts.changeFlags;
      var dimensionChanges = [];

      if (changeFlags.dataChanged) {
        // if data changed update everything
        this.updateAggregation(props, aggregationParams);
        this.updateAllDimensions(props);
        return this.state;
      }

      var aggregationChanges = this._getAggregationChanges(oldProps, props, changeFlags);

      if (aggregationChanges && aggregationChanges.length) {
        // get aggregatedData
        aggregationChanges.forEach(function (f) {
          return typeof f === 'function' && f(aggregationParams);
        });
        this.updateAllDimensions(props);
      } else {
        // only update dimensions
        dimensionChanges = this._getDimensionChanges(oldProps, props, changeFlags) || [];
        dimensionChanges.forEach(function (f) {
          return typeof f === 'function' && f();
        });
      }

      return this.state;
    } // Update private state

  }, {
    key: "setState",
    value: function setState(updateObject) {
      this.state = Object.assign({}, this.state, updateObject);
    } // Update private state.dimensions

  }, {
    key: "_setDimensionState",
    value: function _setDimensionState(key, updateObject) {
      this.setState({
        dimensions: Object.assign({}, this.state.dimensions, (0, _defineProperty2["default"])({}, key, Object.assign({}, this.state.dimensions[key], updateObject)))
      });
    }
  }, {
    key: "_addAggregation",
    value: function _addAggregation(aggregation) {
      this.aggregationUpdater = aggregation;
    }
  }, {
    key: "_addDimension",
    value: function _addDimension() {
      var _this = this;

      var dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      dimensions.forEach(function (dimension) {
        var key = dimension.key;
        _this.dimensionUpdaters[key] = dimension;
      });
    }
  }, {
    key: "_needUpdateStep",
    value: function _needUpdateStep(dimensionStep, oldProps, props, changeFlags) {
      // whether need to update current dimension step
      // dimension step is the value, domain, scaleFunction of each dimension
      // each step is an object with properties links to layer prop and whether the prop is
      // controlled by updateTriggers
      return Object.values(dimensionStep.triggers).some(function (item) {
        if (item.updateTrigger) {
          // check based on updateTriggers change first
          return changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged[item.updateTrigger]);
        } // fallback to direct comparison


        return oldProps[item.prop] !== props[item.prop];
      });
    }
  }, {
    key: "_accumulateUpdaters",
    value: function _accumulateUpdaters(step, props, dimension) {
      var updaters = [];

      for (var i = step; i < dimension.updateSteps.length; i++) {
        if (typeof dimension.updateSteps[i].updater === 'function') {
          updaters.push(dimension.updateSteps[i].updater.bind(this, dimension.updateSteps[i], props, dimension));
        }
      }

      return updaters;
    }
  }, {
    key: "_getAllUpdaters",
    value: function _getAllUpdaters(dimension, oldProps, props, changeFlags) {
      var _this2 = this;

      var updaters = [];
      var needUpdateStep = dimension.updateSteps.findIndex(function (step) {
        return _this2._needUpdateStep(step, oldProps, props, changeFlags);
      });

      if (needUpdateStep > -1) {
        updaters = updaters.concat(this._accumulateUpdaters(needUpdateStep, props, dimension));
      }

      return updaters;
    }
  }, {
    key: "_getAggregationChanges",
    value: function _getAggregationChanges(oldProps, props, changeFlags) {
      var updaters = this._getAllUpdaters(this.aggregationUpdater, oldProps, props, changeFlags);

      return updaters.length ? updaters : null;
    }
  }, {
    key: "_getDimensionChanges",
    value: function _getDimensionChanges(oldProps, props, changeFlags) {
      var updaters = []; // get dimension to be updated

      for (var key in this.dimensionUpdaters) {
        // return the first triggered updater for each dimension
        var dimension = this.dimensionUpdaters[key];

        var dimensionUpdaters = this._getAllUpdaters(dimension, oldProps, props, changeFlags);

        updaters = updaters.concat(dimensionUpdaters);
      }

      return updaters.length ? updaters : null;
    }
  }, {
    key: "getUpdateTriggers",
    value: function getUpdateTriggers(props) {
      var _this3 = this;

      var _updateTriggers = props.updateTriggers || {};

      var updateTriggers = {};

      var _loop = function _loop(key) {
        var _this3$dimensionUpdat = _this3.dimensionUpdaters[key],
            accessor = _this3$dimensionUpdat.accessor,
            updateSteps = _this3$dimensionUpdat.updateSteps; // fold dimension triggers into each accessor

        updateTriggers[accessor] = {};
        updateSteps.forEach(function (step) {
          Object.values(step.triggers || []).forEach(function (_ref) {
            var prop = _ref.prop,
                updateTrigger = _ref.updateTrigger;

            if (updateTrigger) {
              // if prop is based on updateTrigger e.g. getColorValue, getColorWeight
              // and updateTriggers is passed in from layer prop
              // fold the updateTriggers into accessor
              var fromProp = _updateTriggers[updateTrigger];

              if ((0, _typeof2["default"])(fromProp) === 'object' && !Array.isArray(fromProp)) {
                // if updateTrigger is an object spread it
                Object.assign(updateTriggers[accessor], fromProp);
              } else if (fromProp !== undefined) {
                updateTriggers[accessor][prop] = fromProp;
              }
            } else {
              // if prop is not based on updateTrigger
              updateTriggers[accessor][prop] = props[prop];
            }
          });
        });
      };

      for (var key in this.dimensionUpdaters) {
        _loop(key);
      }

      return updateTriggers;
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2, layerProps) {
      var info = _ref2.info;
      var isPicked = info.picked && info.index > -1;
      var object = null;

      if (isPicked) {
        var cell = this.state.layerData.data[info.index];
        var binInfo = {};

        for (var key in this.dimensionUpdaters) {
          var getPickingInfo = this.dimensionUpdaters[key].getPickingInfo;

          if (typeof getPickingInfo === 'function') {
            binInfo = Object.assign({}, binInfo, getPickingInfo(this.state.dimensions[key], cell, layerProps));
          }
        }

        object = Object.assign(binInfo, cell, {
          points: cell.filteredPoints || cell.points
        });
      } // add bin  and  to info


      return Object.assign(info, {
        picked: Boolean(object),
        // override object with picked cell
        object: object
      });
    }
  }, {
    key: "getAccessor",
    value: function getAccessor(dimensionKey, layerProps) {
      if (!this.dimensionUpdaters.hasOwnProperty(dimensionKey)) {
        return nop;
      }

      return this.dimensionUpdaters[dimensionKey].getSubLayerAccessor(this.state.dimensions[dimensionKey], this.dimensionUpdaters[dimensionKey], layerProps);
    }
  }], [{
    key: "defaultDimensions",
    value: function defaultDimensions() {
      return _defaultDimensions;
    }
  }]);
  return CPUAggregator;
}();

exports["default"] = CPUAggregator;
CPUAggregator.getDimensionScale = getDimensionScale;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL2NwdS1hZ2dyZWdhdG9yLmpzIl0sIm5hbWVzIjpbIkRFQ0tfQUdHUkVHQVRJT05fTUFQIiwiQUdHUkVHQVRJT05fT1BFUkFUSU9OIiwiU1VNIiwiQUdHUkVHQVRJT05fVFlQRVMiLCJzdW0iLCJNRUFOIiwiYXZlcmFnZSIsIk1JTiIsIm1pbmltdW0iLCJNQVgiLCJtYXhpbXVtIiwiZ2V0VmFsdWVGdW5jIiwiYWdncmVnYXRpb24iLCJhY2Nlc3NvciIsInRvVXBwZXJDYXNlIiwiQ29uc29sZSIsIndhcm4iLCJvcCIsImtlcGxlck9wIiwicHRzIiwibWFwIiwiZ2V0U2NhbGVGdW5jdG9yIiwic2NhbGVUeXBlIiwiU0NBTEVfRlVOQyIsInF1YW50aXplIiwibm9wIiwiZ2V0R2V0VmFsdWUiLCJzdGVwIiwicHJvcHMiLCJkaW1lbnNpb25VcGRhdGVyIiwia2V5IiwidHJpZ2dlcnMiLCJ2YWx1ZSIsIndlaWdodCIsImdldFZhbHVlIiwicHJvcCIsIl9zZXREaW1lbnNpb25TdGF0ZSIsImdldERpbWVuc2lvblNvcnRlZEJpbnMiLCJzdGF0ZSIsImRpbWVuc2lvbnMiLCJzb3J0ZWRCaW5zIiwiQmluU29ydGVyIiwibGF5ZXJEYXRhIiwiZGF0YSIsImZpbHRlckRhdGEiLCJfZmlsdGVyRGF0YSIsImdldERpbWVuc2lvblZhbHVlRG9tYWluIiwibG93ZXJQZXJjZW50aWxlIiwidXBwZXJQZXJjZW50aWxlIiwidmFsdWVEb21haW4iLCJnZXRWYWx1ZURvbWFpbkJ5U2NhbGUiLCJnZXREaW1lbnNpb25TY2FsZSIsImRvbWFpbiIsInJhbmdlIiwib25TZXQiLCJkaW1lbnNpb25SYW5nZSIsImRpbWVuc2lvbkRvbWFpbiIsInNjYWxlRnVuY3RvciIsInNjYWxlRnVuYyIsIm5vcm1hbGl6ZVJlc3VsdCIsInJlc3VsdCIsImhleGFnb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0QWdncmVnYXRlZERhdGEiLCJhZ2dyZWdhdGlvblBhcmFtcyIsImFnZ3IiLCJhZ2dyZWdhdG9yIiwic2V0U3RhdGUiLCJkZWZhdWx0QWdncmVnYXRpb24iLCJ1cGRhdGVTdGVwcyIsImNlbGxTaXplIiwicG9zaXRpb24iLCJ1cGRhdGVUcmlnZ2VyIiwidXBkYXRlciIsImdldFN1YkxheWVyQWNjZXNzb3IiLCJkaW1lbnNpb25TdGF0ZSIsImRpbWVuc2lvbiIsImxheWVyUHJvcHMiLCJjZWxsIiwiYmluIiwiYmluTWFwIiwiaW5kZXgiLCJjb3VudHMiLCJudWxsVmFsdWUiLCJjdiIsImlzVmFsdWVJbkRvbWFpbiIsImxlbmd0aCIsImRlZmF1bHRDb2xvckRpbWVuc2lvbiIsImdldFBpY2tpbmdJbmZvIiwiY29sb3JWYWx1ZSIsImRlZmF1bHRFbGV2YXRpb25EaW1lbnNpb24iLCJlbGV2YXRpb25WYWx1ZSIsImRlZmF1bHREaW1lbnNpb25zIiwiQ1BVQWdncmVnYXRvciIsIm9wdHMiLCJpbml0aWFsU3RhdGUiLCJkaW1lbnNpb25VcGRhdGVycyIsImFnZ3JlZ2F0aW9uVXBkYXRlciIsIl9hZGREaW1lbnNpb24iLCJfYWRkQWdncmVnYXRpb24iLCJkaW1lbnNpb25DaGFuZ2VzIiwiZGltIiwidXBkYXRlcnMiLCJfYWNjdW11bGF0ZVVwZGF0ZXJzIiwiY29uY2F0IiwiZm9yRWFjaCIsImYiLCJvbGRQcm9wcyIsImNoYW5nZUZsYWdzIiwiZGF0YUNoYW5nZWQiLCJ1cGRhdGVBZ2dyZWdhdGlvbiIsInVwZGF0ZUFsbERpbWVuc2lvbnMiLCJhZ2dyZWdhdGlvbkNoYW5nZXMiLCJfZ2V0QWdncmVnYXRpb25DaGFuZ2VzIiwiX2dldERpbWVuc2lvbkNoYW5nZXMiLCJ1cGRhdGVPYmplY3QiLCJkaW1lbnNpb25TdGVwIiwidmFsdWVzIiwic29tZSIsIml0ZW0iLCJ1cGRhdGVUcmlnZ2Vyc0NoYW5nZWQiLCJhbGwiLCJpIiwicHVzaCIsImJpbmQiLCJuZWVkVXBkYXRlU3RlcCIsImZpbmRJbmRleCIsIl9uZWVkVXBkYXRlU3RlcCIsIl9nZXRBbGxVcGRhdGVycyIsIl91cGRhdGVUcmlnZ2VycyIsInVwZGF0ZVRyaWdnZXJzIiwiZnJvbVByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJpbmZvIiwiaXNQaWNrZWQiLCJwaWNrZWQiLCJvYmplY3QiLCJiaW5JbmZvIiwicG9pbnRzIiwiZmlsdGVyZWRQb2ludHMiLCJCb29sZWFuIiwiZGltZW5zaW9uS2V5IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSxvQkFBb0Isd0ZBQzlCQyx5Q0FBc0JDLEdBRFEsRUFDRkMsbUNBQWtCQyxHQURoQiwyREFFOUJILHlDQUFzQkksSUFGUSxFQUVERixtQ0FBa0JHLE9BRmpCLDJEQUc5QkwseUNBQXNCTSxHQUhRLEVBR0ZKLG1DQUFrQkssT0FIaEIsMkRBSTlCUCx5Q0FBc0JRLEdBSlEsRUFJRk4sbUNBQWtCTyxPQUpoQix5QkFBMUI7OztBQU9BLFNBQVNDLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUNsRCxNQUFJLENBQUNELFdBQUQsSUFBZ0IsQ0FBQ1gseUNBQXNCVyxXQUFXLENBQUNFLFdBQVosRUFBdEIsQ0FBckIsRUFBdUU7QUFDckVDLG9CQUFRQyxJQUFSLHVCQUE0QkosV0FBNUI7QUFDRDs7QUFFRCxNQUFNSyxFQUFFLEdBQUdoQix5Q0FBc0JXLFdBQVcsQ0FBQ0UsV0FBWixFQUF0QixLQUFvRGIseUNBQXNCQyxHQUFyRjs7QUFDQSxNQUFNZ0IsUUFBUSxHQUFHbEIsb0JBQW9CLENBQUNpQixFQUFELENBQXJDO0FBRUEsU0FBTyxVQUFBRSxHQUFHO0FBQUEsV0FBSSwrQkFBVUEsR0FBRyxDQUFDQyxHQUFKLENBQVFQLFFBQVIsQ0FBVixFQUE2QkssUUFBN0IsQ0FBSjtBQUFBLEdBQVY7QUFDRDs7QUFFTSxTQUFTRyxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUN6QyxNQUFJLENB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eUIsT0FBcEIsQ0FBUDtBQUtEOzs7V0FFRCxxQkFBWUssWUFBWixFQUEwQmxFLFVBQTFCLEVBQXNDO0FBQ3BDLFVBQUksQ0FBQyxLQUFLbUIsaUJBQUwsQ0FBdUJnRCxjQUF2QixDQUFzQ0QsWUFBdEMsQ0FBTCxFQUEwRDtBQUN4RCxlQUFPdkgsR0FBUDtBQUNEOztBQUNELGFBQU8sS0FBS3dFLGlCQUFMLENBQXVCK0MsWUFBdkIsRUFBcUNyRSxtQkFBckMsQ0FDTCxLQUFLckMsS0FBTCxDQUFXQyxVQUFYLENBQXNCeUcsWUFBdEIsQ0FESyxFQUVMLEtBQUsvQyxpQkFBTCxDQUF1QitDLFlBQXZCLENBRkssRUFHTGxFLFVBSEssQ0FBUDtBQUtEOzs7V0FsTkQsNkJBQTJCO0FBQ3pCLGFBQU9lLGtCQUFQO0FBQ0Q7Ozs7OztBQW1OSEMsYUFBYSxDQUFDM0MsaUJBQWQsR0FBa0NBLGlCQUFsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xuaW1wb3J0IHtBR0dSRUdBVElPTl9PUEVSQVRJT04sIF9CaW5Tb3J0ZXIgYXMgQmluU29ydGVyfSBmcm9tICdAZGVjay5nbC9hZ2dyZWdhdGlvbi1sYXllcnMnO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG5pbXBvcnQge2FnZ3JlZ2F0ZX0gZnJvbSAndXRpbHMvYWdncmVnYXRlLXV0aWxzJztcbmltcG9ydCB7QUdHUkVHQVRJT05fVFlQRVMsIFNDQUxFX0ZVTkN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IERFQ0tfQUdHUkVHQVRJT05fTUFQID0ge1xuICBbQUdHUkVHQVRJT05fT1BFUkFUSU9OLlNVTV06IEFHR1JFR0FUSU9OX1RZUEVTLnN1bSxcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NRUFOXTogQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZSxcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NSU5dOiBBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtLFxuICBbQUdHUkVHQVRJT05fT1BFUkFUSU9OLk1BWF06IEFHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZ1bmMoYWdncmVnYXRpb24sIGFjY2Vzc29yKSB7XG4gIGlmICghYWdncmVnYXRpb24gfHwgIUFHR1JFR0FUSU9OX09QRVJBVElPTlthZ2dyZWdhdGlvbi50b1VwcGVyQ2FzZSgpXSkge1xuICAgIENvbnNvbGUud2FybihgQWdncmVnYXRpb24gJHthZ2dyZWdhdGlvbn0gaXMgbm90IHN1cHBvcnRlZGApO1xuICB9XG5cbiAgY29uc3Qgb3AgPSBBR0dSRUdBVElPTl9PUEVSQVRJT05bYWdncmVnYXRpb24udG9VcHBlckNhc2UoKV0gfHwgQUdHUkVHQVRJT05fT1BFUkFUSU9OLlNVTTtcbiAgY29uc3Qga2VwbGVyT3AgPSBERUNLX0FHR1JFR0FUSU9OX01BUFtvcF07XG5cbiAgcmV0dXJuIHB0cyA9PiBhZ2dyZWdhdGUocHRzLm1hcChhY2Nlc3NvciksIGtlcGxlck9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlRnVuY3RvcihzY2FsZVR5cGUpIHtcbiAgaWYgKCFzY2FsZVR5cGUgfHwgIVNDQUxFX0ZVTkNbc2NhbGVUeXBlXSkge1xuICAgIENvbnNvbGUud2FybihgU2NhbGUgJHtzY2FsZVR5cGV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgfVxuICByZXR1cm4gU0NBTEVfRlVOQ1tzY2FsZVR5cGVdIHx8IFNDQUxFX0ZVTkMucXVhbnRpemU7XG59XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHZXRWYWx1ZShzdGVwLCBwcm9wcywgZGltZW5zaW9uVXBkYXRlcikge1xuICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvblVwZGF0ZXI7XG4gIGNvbnN0IHt2YWx1ZSwgd2VpZ2h0LCBhZ2dyZWdhdGlvbn0gPSBzdGVwLnRyaWdnZXJzO1xuXG4gIGxldCBnZXRWYWx1ZSA9IHByb3BzW3ZhbHVlLnByb3BdO1xuXG4gIGlmIChnZXRWYWx1ZSA9PT0gbnVsbCkge1xuICAgIC8vIElmIGBnZXRWYWx1ZWAgaXMgbm90IHByb3ZpZGVkIGZyb20gcHJvcHMsIGJ1aWxkIGl0IHdpdGggYWdncmVnYXRpb24gYW5kIHdlaWdodC5cbiAgICBnZXRWYWx1ZSA9IGdldFZhbHVlRnVuYyhwcm9wc1thZ2dyZWdhdGlvbi5wcm9wXSwgcHJvcHNbd2VpZ2h0LnByb3BdKTtcbiAgfVxuXG4gIGlmIChnZXRWYWx1ZSkge1xuICAgIHRoaXMuX3NldERpbWVuc2lvblN0YXRlKGtleSwge2dldFZhbHVlfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpbWVuc2lvblNvcnRlZEJpbnMoc3RlcCwgcHJvcHMsIGRpbWVuc2lvblVwZGF0ZXIpIHtcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xuICBjb25zdCB7Z2V0VmFsdWV9ID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV07XG5cbiAgY29uc3Qgc29ydGVkQmlucyA9IG5ldyBCaW5Tb3J0ZXIodGhpcy5zdGF0ZS5sYXllckRhdGEuZGF0YSB8fCBbXSwge1xuICAgIGdldFZhbHVlLFxuICAgIGZpbHRlckRhdGE6IHByb3BzLl9maWx0ZXJEYXRhXG4gIH0pO1xuICB0aGlzLl9zZXREaW1lbnNpb25TdGF0ZShrZXksIHtzb3J0ZWRCaW5zfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaW1lbnNpb25WYWx1ZURvbWFpbihzdGVwLCBwcm9wcywgZGltZW5zaW9uVXBkYXRlcikge1xuICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvblVwZGF0ZXI7XG4gIGNvbnN0IHtcbiAgICB0cmlnZ2Vyczoge2xvd2VyUGVyY2VudGlsZSwgdXBwZXJQZXJjZW50aWxlLCBzY2FsZVR5cGV9XG4gIH0gPSBzdGVwO1xuXG4gIGlmICghdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0uc29ydGVkQmlucykge1xuICAgIC8vIHRoZSBwcmV2aW91cyBzdGVwIHNob3VsZCBzZXQgc29ydGVkQmlucywgaWYgbm90LCBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZvciBsb2cgYW5kIHNxcnQgc2NhbGUsIHJldHVybnMgbGluZWFyIGRvbWFpbiBieSBkZWZhdWx0XG4gIC8vIFRPRE86IHN1cHBvcnQgb3RoZXIgc2NhbGUgZnVuY3Rpb24gZG9tYWluIGluIGJpbiBzb3J0ZXJcbiAgY29uc3QgdmFsdWVEb21haW4gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XS5zb3J0ZWRCaW5zLmdldFZhbHVlRG9tYWluQnlTY2FsZShcbiAgICBwcm9wc1tzY2FsZVR5cGUucHJvcF0sXG4gICAgW3Byb3BzW2xvd2VyUGVyY2VudGlsZS5wcm9wXSwgcHJvcHNbdXBwZXJQZXJjZW50aWxlLnByb3BdXVxuICApO1xuXG4gIHRoaXMuX3NldERpbWVuc2lvblN0YXRlKGtleSwge3ZhbHVlRG9tYWlufSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaW1lbnNpb25TY2FsZShzdGVwLCBwcm9wcywgZGltZW5zaW9uVXBkYXRlcikge1xuICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvblVwZGF0ZXI7XG4gIGNvbnN0IHtkb21haW4sIHJhbmdlLCBzY2FsZVR5cGV9ID0gc3RlcC50cmlnZ2VycztcbiAgY29uc3Qge29uU2V0fSA9IHN0ZXA7XG4gIGlmICghdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0udmFsdWVEb21haW4pIHtcbiAgICAvLyB0aGUgcHJldmlvdXMgc3RlcCBzaG91bGQgc2V0IHZhbHVlRG9tYWluLCBpZiBub3QsIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGltZW5zaW9uUmFuZ2UgPSBwcm9wc1tyYW5nZS5wcm9wXTtcbiAgY29uc3QgZGltZW5zaW9uRG9tYWluID0gcHJvcHNbZG9tYWluLnByb3BdIHx8IHRoaXMuc3RhdGUuZGltZW5zaW9uc1trZXldLnZhbHVlRG9tYWluO1xuXG4gIGNvbnN0IHNjYWxlRnVuY3RvciA9IGdldFNjYWxlRnVuY3RvcihzY2FsZVR5cGUgJiYgcHJvcHNbc2NhbGVUeXBlLnByb3BdKSgpO1xuXG4gIGNvbnN0IHNjYWxlRnVuYyA9IHNjYWxlRnVuY3Rvci5kb21haW4oZGltZW5zaW9uRG9tYWluKS5yYW5nZShkaW1lbnNpb25SYW5nZSk7XG5cbiAgaWYgKHR5cGVvZiBvblNldCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHByb3BzW29uU2V0LnByb3BzXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3BzW29uU2V0LnByb3BzXShzY2FsZUZ1bmMuZG9tYWluKCkpO1xuICB9XG4gIHRoaXMuX3NldERpbWVuc2lvblN0YXRlKGtleSwge3NjYWxlRnVuY30pO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVSZXN1bHQocmVzdWx0ID0ge30pIHtcbiAgLy8gc3VwcG9ydCBwcmV2aW91cyBoZXhhZ29uQWdncmVnYXRvciBBUElcbiAgaWYgKHJlc3VsdC5oZXhhZ29ucykge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtkYXRhOiByZXN1bHQuaGV4YWdvbnN9LCByZXN1bHQpO1xuICB9IGVsc2UgaWYgKHJlc3VsdC5sYXllckRhdGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ZGF0YTogcmVzdWx0LmxheWVyRGF0YX0sIHJlc3VsdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdncmVnYXRlZERhdGEoc3RlcCwgcHJvcHMsIGFnZ3JlZ2F0aW9uLCBhZ2dyZWdhdGlvblBhcmFtcykge1xuICBjb25zdCB7XG4gICAgdHJpZ2dlcnM6IHthZ2dyZWdhdG9yOiBhZ2dyfVxuICB9ID0gc3RlcDtcbiAgY29uc3QgYWdncmVnYXRvciA9IHByb3BzW2FnZ3IucHJvcF07XG5cbiAgLy8gcmVzdWx0IHNob3VsZCBjb250YWluIGEgZGF0YSBhcnJheSBhbmQgb3RoZXIgcHJvcHNcbiAgLy8gcmVzdWx0ID0ge2RhdGE6IFtdLCAuLi5vdGhlciBwcm9wc31cbiAgY29uc3QgcmVzdWx0ID0gYWdncmVnYXRvcihwcm9wcywgYWdncmVnYXRpb25QYXJhbXMpO1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBsYXllckRhdGE6IG5vcm1hbGl6ZVJlc3VsdChyZXN1bHQpXG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFnZ3JlZ2F0aW9uID0ge1xuICBrZXk6ICdwb3NpdGlvbicsXG4gIHVwZGF0ZVN0ZXBzOiBbXG4gICAge1xuICAgICAga2V5OiAnYWdncmVnYXRlJyxcbiAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgIGNlbGxTaXplOiB7XG4gICAgICAgICAgcHJvcDogJ2NlbGxTaXplJ1xuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgIHByb3A6ICdnZXRQb3NpdGlvbicsXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldFBvc2l0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICBhZ2dyZWdhdG9yOiB7XG4gICAgICAgICAgcHJvcDogJ2dyaWRBZ2dyZWdhdG9yJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlcjogZ2V0QWdncmVnYXRlZERhdGFcbiAgICB9XG4gIF1cbn07XG5cbmZ1bmN0aW9uIGdldFN1YkxheWVyQWNjZXNzb3IoZGltZW5zaW9uU3RhdGUsIGRpbWVuc2lvbiwgbGF5ZXJQcm9wcykge1xuICByZXR1cm4gY2VsbCA9PiB7XG4gICAgY29uc3Qge3NvcnRlZEJpbnMsIHNjYWxlRnVuY30gPSBkaW1lbnNpb25TdGF0ZTtcbiAgICBjb25zdCBiaW4gPSBzb3J0ZWRCaW5zLmJpbk1hcFtjZWxsLmluZGV4XTtcblxuICAgIGlmIChiaW4gJiYgYmluLmNvdW50cyA9PT0gMCkge1xuICAgICAgLy8gbm8gcG9pbnRzIGxlZnQgaW4gYmluIGFmdGVyIGZpbHRlcmluZ1xuICAgICAgcmV0dXJuIGRpbWVuc2lvbi5udWxsVmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgY3YgPSBiaW4gJiYgYmluLnZhbHVlO1xuICAgIGNvbnN0IGRvbWFpbiA9IHNjYWxlRnVuYy5kb21haW4oKTtcblxuICAgIGNvbnN0IGlzVmFsdWVJbkRvbWFpbiA9IGN2ID49IGRvbWFpblswXSAmJiBjdiA8PSBkb21haW5bZG9tYWluLmxlbmd0aCAtIDFdO1xuXG4gICAgLy8gaWYgY2VsbCB2YWx1ZSBpcyBvdXRzaWRlIGRvbWFpbiwgc2V0IGFscGhhIHRvIDBcbiAgICByZXR1cm4gaXNWYWx1ZUluRG9tYWluID8gc2NhbGVGdW5jKGN2KSA6IGRpbWVuc2lvbi5udWxsVmFsdWU7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29sb3JEaW1lbnNpb24gPSB7XG4gIGtleTogJ2ZpbGxDb2xvcicsXG4gIGFjY2Vzc29yOiAnZ2V0RmlsbENvbG9yJyxcbiAgZ2V0UGlja2luZ0luZm86IChkaW1lbnNpb25TdGF0ZSwgY2VsbCkgPT4ge1xuICAgIGNvbnN0IHtzb3J0ZWRCaW5zfSA9IGRpbWVuc2lvblN0YXRlO1xuICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBzb3J0ZWRCaW5zLmJpbk1hcFtjZWxsLmluZGV4XSAmJiBzb3J0ZWRCaW5zLmJpbk1hcFtjZWxsLmluZGV4XS52YWx1ZTtcbiAgICByZXR1cm4ge2NvbG9yVmFsdWV9O1xuICB9LFxuICBudWxsVmFsdWU6IFswLCAwLCAwLCAwXSxcbiAgdXBkYXRlU3RlcHM6IFtcbiAgICB7XG4gICAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgICB0cmlnZ2Vyczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHByb3A6ICdnZXRDb2xvclZhbHVlJyxcbiAgICAgICAgICB1cGRhdGVUcmlnZ2VyOiAnZ2V0Q29sb3JWYWx1ZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2VpZ2h0OiB7XG4gICAgICAgICAgcHJvcDogJ2dldENvbG9yV2VpZ2h0JyxcbiAgICAgICAgICB1cGRhdGVUcmlnZ2VyOiAnZ2V0Q29sb3JXZWlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIGFnZ3JlZ2F0aW9uOiB7XG4gICAgICAgICAgcHJvcDogJ2NvbG9yQWdncmVnYXRpb24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVyOiBnZXRHZXRWYWx1ZVxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ2V0QmlucycsXG4gICAgICB0cmlnZ2Vyczoge1xuICAgICAgICBfZmlsdGVyRGF0YToge1xuICAgICAgICAgIHByb3A6ICdfZmlsdGVyRGF0YScsXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ19maWx0ZXJEYXRhJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uU29ydGVkQmluc1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ2V0RG9tYWluJyxcbiAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgIGxvd2VyUGVyY2VudGlsZToge1xuICAgICAgICAgIHByb3A6ICdsb3dlclBlcmNlbnRpbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHVwcGVyUGVyY2VudGlsZToge1xuICAgICAgICAgIHByb3A6ICd1cHBlclBlcmNlbnRpbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlVHlwZToge3Byb3A6ICdjb2xvclNjYWxlVHlwZSd9XG4gICAgICB9LFxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uVmFsdWVEb21haW5cbiAgICB9LFxuICAgIHtcbiAgICAgIGtleTogJ2dldFNjYWxlRnVuYycsXG4gICAgICB0cmlnZ2Vyczoge1xuICAgICAgICBkb21haW46IHtwcm9wOiAnY29sb3JEb21haW4nfSxcbiAgICAgICAgcmFuZ2U6IHtwcm9wOiAnY29sb3JSYW5nZSd9LFxuICAgICAgICBzY2FsZVR5cGU6IHtwcm9wOiAnY29sb3JTY2FsZVR5cGUnfVxuICAgICAgfSxcbiAgICAgIG9uU2V0OiB7XG4gICAgICAgIHByb3BzOiAnb25TZXRDb2xvckRvbWFpbidcbiAgICAgIH0sXG4gICAgICB1cGRhdGVyOiBnZXREaW1lbnNpb25TY2FsZVxuICAgIH1cbiAgXSxcbiAgZ2V0U3ViTGF5ZXJBY2Nlc3NvclxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbGV2YXRpb25EaW1lbnNpb24gPSB7XG4gIGtleTogJ2VsZXZhdGlvbicsXG4gIGFjY2Vzc29yOiAnZ2V0RWxldmF0aW9uJyxcbiAgZ2V0UGlja2luZ0luZm86IChkaW1lbnNpb25TdGF0ZSwgY2VsbCkgPT4ge1xuICAgIGNvbnN0IHtzb3J0ZWRCaW5zfSA9IGRpbWVuc2lvblN0YXRlO1xuICAgIGNvbnN0IGVsZXZhdGlvblZhbHVlID0gc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0gJiYgc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0udmFsdWU7XG4gICAgcmV0dXJuIHtlbGV2YXRpb25WYWx1ZX07XG4gIH0sXG4gIG51bGxWYWx1ZTogLTEsXG4gIHVwZGF0ZVN0ZXBzOiBbXG4gICAge1xuICAgICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBwcm9wOiAnZ2V0RWxldmF0aW9uVmFsdWUnLFxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRFbGV2YXRpb25WYWx1ZSdcbiAgICAgICAgfSxcbiAgICAgICAgd2VpZ2h0OiB7XG4gICAgICAgICAgcHJvcDogJ2dldEVsZXZhdGlvbldlaWdodCcsXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ2dldEVsZXZhdGlvbldlaWdodCdcbiAgICAgICAgfSxcbiAgICAgICAgYWdncmVnYXRpb246IHtcbiAgICAgICAgICBwcm9wOiAnZWxldmF0aW9uQWdncmVnYXRpb24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGVyOiBnZXRHZXRWYWx1ZVxuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ2V0QmlucycsXG4gICAgICB0cmlnZ2Vyczoge1xuICAgICAgICBfZmlsdGVyRGF0YToge1xuICAgICAgICAgIHByb3A6ICdfZmlsdGVyRGF0YScsXG4gICAgICAgICAgdXBkYXRlVHJpZ2dlcjogJ19maWx0ZXJEYXRhJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uU29ydGVkQmluc1xuICAgIH0sXG4gICAge1xuICAgICAga2V5OiAnZ2V0RG9tYWluJyxcbiAgICAgIHRyaWdnZXJzOiB7XG4gICAgICAgIGxvd2VyUGVyY2VudGlsZToge1xuICAgICAgICAgIHByb3A6ICdlbGV2YXRpb25Mb3dlclBlcmNlbnRpbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHVwcGVyUGVyY2VudGlsZToge1xuICAgICAgICAgIHByb3A6ICdlbGV2YXRpb25VcHBlclBlcmNlbnRpbGUnXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlVHlwZToge3Byb3A6ICdlbGV2YXRpb25TY2FsZVR5cGUnfVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblZhbHVlRG9tYWluXG4gICAgfSxcbiAgICB7XG4gICAgICBrZXk6ICdnZXRTY2FsZUZ1bmMnLFxuICAgICAgdHJpZ2dlcnM6IHtcbiAgICAgICAgZG9tYWluOiB7cHJvcDogJ2VsZXZhdGlvbkRvbWFpbid9LFxuICAgICAgICByYW5nZToge3Byb3A6ICdlbGV2YXRpb25SYW5nZSd9LFxuICAgICAgICBzY2FsZVR5cGU6IHtwcm9wOiAnZWxldmF0aW9uU2NhbGVUeXBlJ31cbiAgICAgIH0sXG4gICAgICBvblNldDoge1xuICAgICAgICBwcm9wczogJ29uU2V0RWxldmF0aW9uRG9tYWluJ1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblNjYWxlXG4gICAgfVxuICBdLFxuICBnZXRTdWJMYXllckFjY2Vzc29yXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdERpbWVuc2lvbnMgPSBbZGVmYXVsdENvbG9yRGltZW5zaW9uLCBkZWZhdWx0RWxldmF0aW9uRGltZW5zaW9uXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ1BVQWdncmVnYXRvciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsYXllckRhdGE6IHt9LFxuICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAvLyBjb2xvcjoge1xuICAgICAgICAvLyAgIGdldFZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgLy8gICBzb3J0ZWRCaW5zOiBudWxsLFxuICAgICAgICAvLyAgIHNjYWxlRnVuYzogbm9wXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGVsZXZhdGlvbjoge1xuICAgICAgICAvLyAgIGdldFZhbHVlOiBudWxsLFxuICAgICAgICAvLyAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgLy8gICBzb3J0ZWRCaW5zOiBudWxsLFxuICAgICAgICAvLyAgIHNjYWxlRnVuYzogbm9wXG4gICAgICAgIC8vIH1cbiAgICAgIH0sXG4gICAgICAuLi5vcHRzLmluaXRpYWxTdGF0ZVxuICAgIH07XG4gICAgdGhpcy5kaW1lbnNpb25VcGRhdGVycyA9IHt9O1xuICAgIHRoaXMuYWdncmVnYXRpb25VcGRhdGVyID0ge307XG5cbiAgICB0aGlzLl9hZGREaW1lbnNpb24ob3B0cy5kaW1lbnNpb25zIHx8IGRlZmF1bHREaW1lbnNpb25zKTtcbiAgICB0aGlzLl9hZGRBZ2dyZWdhdGlvbihvcHRzLmFnZ3JlZ2F0aW9uIHx8IGRlZmF1bHRBZ2dyZWdhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdERpbWVuc2lvbnMoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHREaW1lbnNpb25zO1xuICB9XG5cbiAgdXBkYXRlQWxsRGltZW5zaW9ucyhwcm9wcykge1xuICAgIGxldCBkaW1lbnNpb25DaGFuZ2VzID0gW107XG4gICAgLy8gdXBkYXRlIGFsbCBkaW1lbnNpb25zXG4gICAgZm9yIChjb25zdCBkaW0gaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xuICAgICAgY29uc3QgdXBkYXRlcnMgPSB0aGlzLl9hY2N1bXVsYXRlVXBkYXRlcnMoMCwgcHJvcHMsIHRoaXMuZGltZW5zaW9uVXBkYXRlcnNbZGltXSk7XG4gICAgICBkaW1lbnNpb25DaGFuZ2VzID0gZGltZW5zaW9uQ2hhbmdlcy5jb25jYXQodXBkYXRlcnMpO1xuICAgIH1cblxuICAgIGRpbWVuc2lvbkNoYW5nZXMuZm9yRWFjaChmID0+IHR5cGVvZiBmID09PSAnZnVuY3Rpb24nICYmIGYoKSk7XG4gIH1cblxuICB1cGRhdGVBZ2dyZWdhdGlvbihwcm9wcywgYWdncmVnYXRpb25QYXJhbXMpIHtcbiAgICBjb25zdCB1cGRhdGVycyA9IHRoaXMuX2FjY3VtdWxhdGVVcGRhdGVycygwLCBwcm9wcywgdGhpcy5hZ2dyZWdhdGlvblVwZGF0ZXIpO1xuICAgIHVwZGF0ZXJzLmZvckVhY2goZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmKGFnZ3JlZ2F0aW9uUGFyYW1zKSk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShvcHRzLCBhZ2dyZWdhdGlvblBhcmFtcykge1xuICAgIGNvbnN0IHtvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzfSA9IG9wdHM7XG4gICAgbGV0IGRpbWVuc2lvbkNoYW5nZXMgPSBbXTtcblxuICAgIGlmIChjaGFuZ2VGbGFncy5kYXRhQ2hhbmdlZCkge1xuICAgICAgLy8gaWYgZGF0YSBjaGFuZ2VkIHVwZGF0ZSBldmVyeXRoaW5nXG4gICAgICB0aGlzLnVwZGF0ZUFnZ3JlZ2F0aW9uKHByb3BzLCBhZ2dyZWdhdGlvblBhcmFtcyk7XG4gICAgICB0aGlzLnVwZGF0ZUFsbERpbWVuc2lvbnMocHJvcHMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBhZ2dyZWdhdGlvbkNoYW5nZXMgPSB0aGlzLl9nZXRBZ2dyZWdhdGlvbkNoYW5nZXMob2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncyk7XG5cbiAgICBpZiAoYWdncmVnYXRpb25DaGFuZ2VzICYmIGFnZ3JlZ2F0aW9uQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICAgIC8vIGdldCBhZ2dyZWdhdGVkRGF0YVxuICAgICAgYWdncmVnYXRpb25DaGFuZ2VzLmZvckVhY2goZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmKGFnZ3JlZ2F0aW9uUGFyYW1zKSk7XG4gICAgICB0aGlzLnVwZGF0ZUFsbERpbWVuc2lvbnMocHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvbmx5IHVwZGF0ZSBkaW1lbnNpb25zXG4gICAgICBkaW1lbnNpb25DaGFuZ2VzID0gdGhpcy5fZ2V0RGltZW5zaW9uQ2hhbmdlcyhvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB8fCBbXTtcbiAgICAgIGRpbWVuc2lvbkNoYW5nZXMuZm9yRWFjaChmID0+IHR5cGVvZiBmID09PSAnZnVuY3Rpb24nICYmIGYoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICAvLyBVcGRhdGUgcHJpdmF0ZSBzdGF0ZVxuICBzZXRTdGF0ZSh1cGRhdGVPYmplY3QpIHtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgdXBkYXRlT2JqZWN0KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBwcml2YXRlIHN0YXRlLmRpbWVuc2lvbnNcbiAgX3NldERpbWVuc2lvblN0YXRlKGtleSwgdXBkYXRlT2JqZWN0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaW1lbnNpb25zOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRpbWVuc2lvbnMsIHtcbiAgICAgICAgW2tleV06IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGltZW5zaW9uc1trZXldLCB1cGRhdGVPYmplY3QpXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgX2FkZEFnZ3JlZ2F0aW9uKGFnZ3JlZ2F0aW9uKSB7XG4gICAgdGhpcy5hZ2dyZWdhdGlvblVwZGF0ZXIgPSBhZ2dyZWdhdGlvbjtcbiAgfVxuXG4gIF9hZGREaW1lbnNpb24oZGltZW5zaW9ucyA9IFtdKSB7XG4gICAgZGltZW5zaW9ucy5mb3JFYWNoKGRpbWVuc2lvbiA9PiB7XG4gICAgICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvbjtcbiAgICAgIHRoaXMuZGltZW5zaW9uVXBkYXRlcnNba2V5XSA9IGRpbWVuc2lvbjtcbiAgICB9KTtcbiAgfVxuXG4gIF9uZWVkVXBkYXRlU3RlcChkaW1lbnNpb25TdGVwLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB7XG4gICAgLy8gd2hldGhlciBuZWVkIHRvIHVwZGF0ZSBjdXJyZW50IGRpbWVuc2lvbiBzdGVwXG4gICAgLy8gZGltZW5zaW9uIHN0ZXAgaXMgdGhlIHZhbHVlLCBkb21haW4sIHNjYWxlRnVuY3Rpb24gb2YgZWFjaCBkaW1lbnNpb25cbiAgICAvLyBlYWNoIHN0ZXAgaXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBsaW5rcyB0byBsYXllciBwcm9wIGFuZCB3aGV0aGVyIHRoZSBwcm9wIGlzXG4gICAgLy8gY29udHJvbGxlZCBieSB1cGRhdGVUcmlnZ2Vyc1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGRpbWVuc2lvblN0ZXAudHJpZ2dlcnMpLnNvbWUoaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS51cGRhdGVUcmlnZ2VyKSB7XG4gICAgICAgIC8vIGNoZWNrIGJhc2VkIG9uIHVwZGF0ZVRyaWdnZXJzIGNoYW5nZSBmaXJzdFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNoYW5nZUZsYWdzLnVwZGF0ZVRyaWdnZXJzQ2hhbmdlZCAmJlxuICAgICAgICAgIChjaGFuZ2VGbGFncy51cGRhdGVUcmlnZ2Vyc0NoYW5nZWQuYWxsIHx8XG4gICAgICAgICAgICBjaGFuZ2VGbGFncy51cGRhdGVUcmlnZ2Vyc0NoYW5nZWRbaXRlbS51cGRhdGVUcmlnZ2VyXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGZhbGxiYWNrIHRvIGRpcmVjdCBjb21wYXJpc29uXG4gICAgICByZXR1cm4gb2xkUHJvcHNbaXRlbS5wcm9wXSAhPT0gcHJvcHNbaXRlbS5wcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIF9hY2N1bXVsYXRlVXBkYXRlcnMoc3RlcCwgcHJvcHMsIGRpbWVuc2lvbikge1xuICAgIGNvbnN0IHVwZGF0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IHN0ZXA7IGkgPCBkaW1lbnNpb24udXBkYXRlU3RlcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgZGltZW5zaW9uLnVwZGF0ZVN0ZXBzW2ldLnVwZGF0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdXBkYXRlcnMucHVzaChcbiAgICAgICAgICBkaW1lbnNpb24udXBkYXRlU3RlcHNbaV0udXBkYXRlci5iaW5kKHRoaXMsIGRpbWVuc2lvbi51cGRhdGVTdGVwc1tpXSwgcHJvcHMsIGRpbWVuc2lvbilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlcnM7XG4gIH1cblxuICBfZ2V0QWxsVXBkYXRlcnMoZGltZW5zaW9uLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB7XG4gICAgbGV0IHVwZGF0ZXJzID0gW107XG4gICAgY29uc3QgbmVlZFVwZGF0ZVN0ZXAgPSBkaW1lbnNpb24udXBkYXRlU3RlcHMuZmluZEluZGV4KHN0ZXAgPT5cbiAgICAgIHRoaXMuX25lZWRVcGRhdGVTdGVwKHN0ZXAsIG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpXG4gICAgKTtcblxuICAgIGlmIChuZWVkVXBkYXRlU3RlcCA+IC0xKSB7XG4gICAgICB1cGRhdGVycyA9IHVwZGF0ZXJzLmNvbmNhdCh0aGlzLl9hY2N1bXVsYXRlVXBkYXRlcnMobmVlZFVwZGF0ZVN0ZXAsIHByb3BzLCBkaW1lbnNpb24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlcnM7XG4gIH1cblxuICBfZ2V0QWdncmVnYXRpb25DaGFuZ2VzKG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpIHtcbiAgICBjb25zdCB1cGRhdGVycyA9IHRoaXMuX2dldEFsbFVwZGF0ZXJzKHRoaXMuYWdncmVnYXRpb25VcGRhdGVyLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKTtcbiAgICByZXR1cm4gdXBkYXRlcnMubGVuZ3RoID8gdXBkYXRlcnMgOiBudWxsO1xuICB9XG5cbiAgX2dldERpbWVuc2lvbkNoYW5nZXMob2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncykge1xuICAgIGxldCB1cGRhdGVycyA9IFtdO1xuXG4gICAgLy8gZ2V0IGRpbWVuc2lvbiB0byBiZSB1cGRhdGVkXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xuICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCB0cmlnZ2VyZWQgdXBkYXRlciBmb3IgZWFjaCBkaW1lbnNpb25cbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uVXBkYXRlcnNba2V5XTtcbiAgICAgIGNvbnN0IGRpbWVuc2lvblVwZGF0ZXJzID0gdGhpcy5fZ2V0QWxsVXBkYXRlcnMoZGltZW5zaW9uLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKTtcbiAgICAgIHVwZGF0ZXJzID0gdXBkYXRlcnMuY29uY2F0KGRpbWVuc2lvblVwZGF0ZXJzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlcnMubGVuZ3RoID8gdXBkYXRlcnMgOiBudWxsO1xuICB9XG5cbiAgZ2V0VXBkYXRlVHJpZ2dlcnMocHJvcHMpIHtcbiAgICBjb25zdCBfdXBkYXRlVHJpZ2dlcnMgPSBwcm9wcy51cGRhdGVUcmlnZ2VycyB8fCB7fTtcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xuICAgICAgY29uc3Qge2FjY2Vzc29yLCB1cGRhdGVTdGVwc30gPSB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2tleV07XG4gICAgICAvLyBmb2xkIGRpbWVuc2lvbiB0cmlnZ2VycyBpbnRvIGVhY2ggYWNjZXNzb3JcbiAgICAgIHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXSA9IHt9O1xuXG4gICAgICB1cGRhdGVTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICBPYmplY3QudmFsdWVzKHN0ZXAudHJpZ2dlcnMgfHwgW10pLmZvckVhY2goKHtwcm9wLCB1cGRhdGVUcmlnZ2VyfSkgPT4ge1xuICAgICAgICAgIGlmICh1cGRhdGVUcmlnZ2VyKSB7XG4gICAgICAgICAgICAvLyBpZiBwcm9wIGlzIGJhc2VkIG9uIHVwZGF0ZVRyaWdnZXIgZS5nLiBnZXRDb2xvclZhbHVlLCBnZXRDb2xvcldlaWdodFxuICAgICAgICAgICAgLy8gYW5kIHVwZGF0ZVRyaWdnZXJzIGlzIHBhc3NlZCBpbiBmcm9tIGxheWVyIHByb3BcbiAgICAgICAgICAgIC8vIGZvbGQgdGhlIHVwZGF0ZVRyaWdnZXJzIGludG8gYWNjZXNzb3JcbiAgICAgICAgICAgIGNvbnN0IGZyb21Qcm9wID0gX3VwZGF0ZVRyaWdnZXJzW3VwZGF0ZVRyaWdnZXJdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcm9tUHJvcCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoZnJvbVByb3ApKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHVwZGF0ZVRyaWdnZXIgaXMgYW4gb2JqZWN0IHNwcmVhZCBpdFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXSwgZnJvbVByb3ApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmcm9tUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXVtwcm9wXSA9IGZyb21Qcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBwcm9wIGlzIG5vdCBiYXNlZCBvbiB1cGRhdGVUcmlnZ2VyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyc1thY2Nlc3Nvcl1bcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZVRyaWdnZXJzO1xuICB9XG5cbiAgZ2V0UGlja2luZ0luZm8oe2luZm99LCBsYXllclByb3BzKSB7XG4gICAgY29uc3QgaXNQaWNrZWQgPSBpbmZvLnBpY2tlZCAmJiBpbmZvLmluZGV4ID4gLTE7XG4gICAgbGV0IG9iamVjdCA9IG51bGw7XG5cbiAgICBpZiAoaXNQaWNrZWQpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnN0YXRlLmxheWVyRGF0YS5kYXRhW2luZm8uaW5kZXhdO1xuXG4gICAgICBsZXQgYmluSW5mbyA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xuICAgICAgICBjb25zdCB7Z2V0UGlja2luZ0luZm99ID0gdGhpcy5kaW1lbnNpb25VcGRhdGVyc1trZXldO1xuICAgICAgICBpZiAodHlwZW9mIGdldFBpY2tpbmdJbmZvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYmluSW5mbyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGJpbkluZm8sXG4gICAgICAgICAgICBnZXRQaWNraW5nSW5mbyh0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XSwgY2VsbCwgbGF5ZXJQcm9wcylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9iamVjdCA9IE9iamVjdC5hc3NpZ24oYmluSW5mbywgY2VsbCwge1xuICAgICAgICBwb2ludHM6IGNlbGwuZmlsdGVyZWRQb2ludHMgfHwgY2VsbC5wb2ludHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFkZCBiaW4gIGFuZCAgdG8gaW5mb1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGluZm8sIHtcbiAgICAgIHBpY2tlZDogQm9vbGVhbihvYmplY3QpLFxuICAgICAgLy8gb3ZlcnJpZGUgb2JqZWN0IHdpdGggcGlja2VkIGNlbGxcbiAgICAgIG9iamVjdFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWNjZXNzb3IoZGltZW5zaW9uS2V5LCBsYXllclByb3BzKSB7XG4gICAgaWYgKCF0aGlzLmRpbWVuc2lvblVwZGF0ZXJzLmhhc093blByb3BlcnR5KGRpbWVuc2lvbktleSkpIHtcbiAgICAgIHJldHVybiBub3A7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2RpbWVuc2lvbktleV0uZ2V0U3ViTGF5ZXJBY2Nlc3NvcihcbiAgICAgIHRoaXMuc3RhdGUuZGltZW5zaW9uc1tkaW1lbnNpb25LZXldLFxuICAgICAgdGhpcy5kaW1lbnNpb25VcGRhdGVyc1tkaW1lbnNpb25LZXldLFxuICAgICAgbGF5ZXJQcm9wc1xuICAgICk7XG4gIH1cbn1cblxuQ1BVQWdncmVnYXRvci5nZXREaW1lbnNpb25TY2FsZSA9IGdldERpbWVuc2lvblNjYWxlO1xuIl19