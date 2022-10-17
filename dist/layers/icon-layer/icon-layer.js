"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pointVisConfigs = exports.iconRequiredColumns = exports.iconAccessor = exports.iconPosAccessor = exports.SVG_ICON_URL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _window = _interopRequireDefault(require("global/window"));

var _extensions = require("@deck.gl/extensions");

var _svgIconLayer = _interopRequireDefault(require("../../deckgl-layers/svg-icon-layer/svg-icon-layer"));

var _iconLayerIcon = _interopRequireDefault(require("./icon-layer-icon"));

var _defaultSettings = require("../../constants/default-settings");

var _iconInfoModal = _interopRequireDefault(require("./icon-info-modal"));

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _layerTextLabel = require("../layer-text-label");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var brushingExtension = new _extensions.BrushingExtension();
var SVG_ICON_URL = "".concat(_defaultSettings.CLOUDFRONT, "/icons/svg-icons.json");
exports.SVG_ICON_URL = SVG_ICON_URL;

var iconPosAccessor = function iconPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  return function (d) {
    return [d.data[lng.fieldIdx], d.data[lat.fieldIdx]];
  };
};

exports.iconPosAccessor = iconPosAccessor;

var iconAccessor = function iconAccessor(_ref2) {
  var icon = _ref2.icon;
  return function (d) {
    return d.data[icon.fieldIdx];
  };
};

exports.iconAccessor = iconAccessor;
var iconRequiredColumns = ['lat', 'lng', 'icon'];
exports.iconRequiredColumns = iconRequiredColumns;
var pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  colorRange: 'colorRange',
  radiusRange: 'radiusRange'
};
exports.pointVisConfigs = pointVisConfigs;

function flatterIconPositions(icon) {
  // had to flip y, since @luma modal has changed
  return icon.mesh.cells.reduce(function (prev, cell) {
    cell.forEach(function (p) {
      prev.push.apply(prev, [icon.mesh.positions[p][0], -icon.mesh.positions[p][1], icon.mesh.positions[p][2]]);
    });
    return prev;
  }, []);
}

var IconLayer = /*#__PURE__*/function (_Layer) {
  (0, _inherits2["default"])(IconLayer, _Layer);

  var _super = _createSuper(IconLayer);

  function IconLayer() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, IconLayer);
    _this = _super.call(this, props);

    _this.registerVisConfig(pointVisConfigs);

    _this.getPositionAccessor = function () {
      return iconPosAccessor(_this.config.columns);
    };

    _this.getIconAccessor = function () {
      return iconAccessor(_this.config.columns);
    }; // prepare layer info modal


    _this._layerInfoModal = (0, _iconInfoModal["default"])();
    _this.iconGeometry = props.iconGeometry || null;

    _this.getSvgIcons();

    return _this;
  }

  (0, _createClass2["default"])(IconLayer, [{
    key: "type",
    get: function get() {
      return 'icon';
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return iconRequiredColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _iconLayerIcon["default"];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconLayer.prototype), "visualChannels", this).color), {}, {
          accessor: 'getFillColor',
          defaultValue: function defaultValue(config) {
            return config.color;
          }
        }),
        size: _objectSpread(_objectSpread({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(IconLayer.prototype), "visualChannels", this).size), {}, {
          property: 'radius',
          range: 'radiusRange',
          channelScaleType: 'radius',
          accessor: 'getRadius',
          defaultValue: 1
        })
      };
    }
  }, {
    key: "layerInfoModal",
    get: function get() {
      return {
        id: 'iconInfo',
        template: this._layerInfoModal,
        modalProps: {
          title: 'modal.iconInfo.title'
        }
      };
    }
  }, {
    key: "getSvgIcons",
    value: function getSvgIcons() {
      var _this2 = this;

      var fetchConfig = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
      };

      if (_window["default"].fetch) {
        _window["default"].fetch(SVG_ICON_URL, fetchConfig).then(function (response) {
          return response.json();
        }).then(function () {
          var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _parsed$svgIcons = parsed.svgIcons,
              svgIcons = _parsed$svgIcons === void 0 ? [] : _parsed$svgIcons;
          _this2.iconGeometry = svgIcons.reduce(function (accu, curr) {
            return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, curr.id, flatterIconPositions(curr)));
          }, {});
          _this2._layerInfoModal = (0, _iconInfoModal["default"])(svgIcons);
        });
      }
    }
  }, {
    key: "calculateDataAttribute",
    value: function calculateDataAttribute(_ref3, getPosition) {
      var allData = _ref3.allData,
          filteredIndex = _ref3.filteredIndex;
      var getIcon = this.getIconAccessor();
      var data = [];

      for (var i = 0; i < filteredIndex.length; i++) {
        var index = filteredIndex[i];
        var pos = getPosition({
          data: allData[index]
        });
        var icon = getIcon({
          data: allData[index]
        }); // if doesn't have point lat or lng, do not add the point
        // deck.gl can't handle position = null

        if (pos.every(Number.isFinite) && typeof icon === 'string') {
          data.push({
            index: index,
            icon: icon,
            data: allData[index]
          });
        }
      }

      return data;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(datasets, oldLayerData) {
      var textLabel = this.config.textLabel;
      var getPosition = this.getPositionAccessor();
      var gpuFilter = datasets[this.config.dataId].gpuFilter;

      var _this$updateData = this.updateData(datasets, oldLayerData),
          data = _this$updateData.data,
          triggerChanged = _this$updateData.triggerChanged; // get all distinct characters in the text labels


      var textLabels = (0, _layerTextLabel.formatTextLabelData)({
        textLabel: textLabel,
        triggerChanged: triggerChanged,
        oldLayerData: oldLayerData,
        data: data
      });
      var accessors = this.getAttributeAccessors();
      return _objectSpread({
        data: data,
        getPosition: getPosition,
        getFilterValue: gpuFilter.filterValueAccessor(),
        textLabels: textLabels
      }, accessors);
    }
  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData, getPosition) {
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(opts) {
      var _this3 = this;

      var data = opts.data,
          gpuFilter = opts.gpuFilter,
          objectHovered = opts.objectHovered,
          mapState = opts.mapState,
          interactionConfig = opts.interactionConfig;
      var radiusScale = this.getRadiusScaleByZoom(mapState);

      var layerProps = _objectSpread({
        radiusScale: radiusScale
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });

      var updateTriggers = _objectSpread({
        getPosition: this.config.columns,
        getFilterValue: gpuFilter.filterValueUpdateTriggers
      }, this.getVisualChannelUpdateTriggers());

      var defaultLayerProps = this.getDefaultDeckLayerProps(opts);
      var brushingProps = this.getBrushingExtensionProps(interactionConfig);
      var getPixelOffset = (0, _layerTextLabel.getTextOffsetByRadius)(radiusScale, data.getRadius, mapState);
      var extensions = [].concat((0, _toConsumableArray2["default"])(defaultLayerProps.extensions), [brushingExtension]); // shared Props between layer and label layer

      var sharedProps = _objectSpread({
        getFilterValue: data.getFilterValue,
        extensions: extensions,
        filterRange: defaultLayerProps.filterRange
      }, brushingProps);

      var labelLayers = (0, _toConsumableArray2["default"])(this.renderTextLabelLayer({
        getPosition: data.getPosition,
        sharedProps: sharedProps,
        getPixelOffset: getPixelOffset,
        updateTriggers: updateTriggers
      }, opts));
      var hoveredObject = this.hasHoveredObject(objectHovered);
      return !this.iconGeometry ? [] : [new _svgIconLayer["default"](_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultLayerProps), brushingProps), layerProps), data), {}, {
        getIconGeometry: function getIconGeometry(id) {
          return _this3.iconGeometry[id];
        },
        // update triggers
        updateTriggers: updateTriggers,
        extensions: extensions
      }))].concat((0, _toConsumableArray2["default"])(hoveredObject ? [new _svgIconLayer["default"](_objectSpread(_objectSpread(_objectSpread({}, this.getDefaultHoverLayerProps()), layerProps), {}, {
        data: [hoveredObject],
        getPosition: data.getPosition,
        getRadius: data.getRadius,
        getFillColor: this.config.highlightColor,
        getIconGeometry: function getIconGeometry(id) {
          return _this3.iconGeometry[id];
        }
      }))] : []), (0, _toConsumableArray2["default"])(labelLayers));
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _ref4$fieldPairs = _ref4.fieldPairs,
          fieldPairs = _ref4$fieldPairs === void 0 ? [] : _ref4$fieldPairs,
          _ref4$fields = _ref4.fields,
          fields = _ref4$fields === void 0 ? [] : _ref4$fields;
      var notFound = {
        props: []
      };

      if (!fieldPairs.length || !fields.length) {
        return notFound;
      }

      var iconFields = fields.filter(function (_ref5) {
        var name = _ref5.name;
        return name.replace(/[_,.]+/g, ' ').trim().split(' ').some(function (seg) {
          return _defaultSettings.ICON_FIELDS.icon.some(function (t) {
            return t.includes(seg);
          });
        });
      });

      if (!iconFields.length) {
        return notFound;
      } // create icon layers for first point pair


      var ptPair = fieldPairs[0];
      var props = iconFields.map(function (iconField) {
        return {
          label: iconField.name.replace(/[_,.]+/g, ' ').trim(),
          columns: {
            lat: ptPair.pair.lat,
            lng: ptPair.pair.lng,
            icon: {
              value: iconField.name,
              fieldIdx: iconField.fieldIdx
            }
          },
          isVisible: true
        };
      });
      return {
        props: props
      };
    }
  }]);
  return IconLayer;
}(_baseLayer["default"]);

exports["default"] = IconLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImJydXNoaW5nRXh0ZW5zaW9uIiwiQnJ1c2hpbmdFeHRlbnNpb24iLCJTVkdfSUNPTl9VUkwiLCJDTE9VREZST05UIiwiaWNvblBvc0FjY2Vzc29yIiwibGF0IiwibG5nIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsImljb25BY2Nlc3NvciIsImljb24iLCJpY29uUmVxdWlyZWRDb2x1bW5zIiwicG9pbnRWaXNDb25maWdzIiwicmFkaXVzIiwiZml4ZWRSYWRpdXMiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiZmxhdHRlckljb25Qb3NpdGlvbnMiLCJtZXNoIiwiY2VsbHMiLCJyZWR1Y2UiLCJwcmV2IiwiY2VsbCIsImZvckVhY2giLCJwIiwicHVzaCIsInBvc2l0aW9ucyIsIkljb25MYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJnZXRQb3NpdGlvbkFjY2Vzc29yIiwiY29uZmlnIiwiY29sdW1ucyIsImdldEljb25BY2Nlc3NvciIsIl9sYXllckluZm9Nb2RhbCIsImljb25HZW9tZXRyeSIsImdldFN2Z0ljb25zIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJJY29uTGF5ZXJJY29uIiwiY29sb3IiLCJhY2Nlc3NvciIsImRlZmF1bHRWYWx1ZSIsInNpemUiLCJwcm9wZXJ0eSIsInJhbmdlIiwiY2hhbm5lbFNjYWxlVHlwZSIsImlkIiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwidGl0bGUiLCJmZXRjaENvbmZpZyIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlZCIsInN2Z0ljb25zIiwiYWNjdSIsImN1cnIiLCJnZXRQb3NpdGlvbiIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4IiwiZ2V0SWNvbiIsImkiLCJsZW5ndGgiLCJpbmRleCIsInBvcyIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJkYXRhc2V0cyIsIm9sZExheWVyRGF0YSIsInRleHRMYWJlbCIsImdwdUZpbHRlciIsImRhdGFJZCIsInVwZGF0ZURhdGEiLCJ0cmlnZ2VyQ2hhbmdlZCIsInRleHRMYWJlbHMiLCJhY2Nlc3NvcnMiLCJnZXRBdHRyaWJ1dGVBY2Nlc3NvcnMiLCJnZXRGaWx0ZXJWYWx1ZSIsImZpbHRlclZhbHVlQWNjZXNzb3IiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwib3B0cyIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwicmFkaXVzU2NhbGUiLCJnZXRSYWRpdXNTY2FsZUJ5Wm9vbSIsImxheWVyUHJvcHMiLCJ2aXNDb25maWciLCJyYWRpdXNNYXhQaXhlbHMiLCJ1cGRhdGVUcmlnZ2VycyIsImZpbHRlclZhbHVlVXBkYXRlVHJpZ2dlcnMiLCJnZXRWaXN1YWxDaGFubmVsVXBkYXRlVHJpZ2dlcnMiLCJkZWZhdWx0TGF5ZXJQcm9wcyIsImdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyIsImJydXNoaW5nUHJvcHMiLCJnZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzIiwiZ2V0UGl4ZWxPZmZzZXQiLCJnZXRSYWRpdXMiLCJleHRlbnNpb25zIiwic2hhcmVkUHJvcHMiLCJmaWx0ZXJSYW5nZSIsImxhYmVsTGF5ZXJzIiwicmVuZGVyVGV4dExhYmVsTGF5ZXIiLCJob3ZlcmVkT2JqZWN0IiwiaGFzSG92ZXJlZE9iamVjdCIsIlN2Z0ljb25MYXllciIsImdldEljb25HZW9tZXRyeSIsImdldERlZmF1bHRIb3ZlckxheWVyUHJvcHMiLCJnZXRGaWxsQ29sb3IiLCJoaWdobGlnaHRDb2xvciIsImZpZWxkUGFpcnMiLCJmaWVsZHMiLCJub3RGb3VuZCIsImljb25GaWVsZHMiLCJmaWx0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInRyaW0iLCJzcGxpdCIsInNvbWUiLCJzZWciLCJJQ09OX0ZJRUxEUyIsInQiLCJpbmNsdWRlcyIsInB0UGFpciIsIm1hcCIsImljb25GaWVsZCIsImxhYmVsIiwicGFpciIsInZhbHVlIiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxJQUFJQyw2QkFBSixFQUExQjtBQUVPLElBQU1DLFlBQVksYUFBTUMsMkJBQU4sMEJBQWxCOzs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxRQUFPQSxHQUFQO0FBQUEsU0FBZ0IsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FBQ0EsQ0FBQyxDQUFDQyxJQUFGLENBQU9GLEdBQUcsQ0FBQ0csUUFBWCxDQUFELEVBQXVCRixDQUFDLENBQUNDLElBQUYsQ0FBT0gsR0FBRyxDQUFDSSxRQUFYLENBQXZCLENBQUo7QUFBQSxHQUFqQjtBQUFBLENBQXhCOzs7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFFQyxJQUFGLFNBQUVBLElBQUY7QUFBQSxTQUFZLFVBQUFKLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLElBQUYsQ0FBT0csSUFBSSxDQUFDRixRQUFaLENBQUo7QUFBQSxHQUFiO0FBQUEsQ0FBckI7OztBQUVBLElBQU1HLG1CQUFtQixHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLENBQTVCOztBQUVBLElBQU1DLGVBQWUsR0FBRztBQUM3QkMsRUFBQUEsTUFBTSxFQUFFLFFBRHFCO0FBRTdCQyxFQUFBQSxXQUFXLEVBQUUsYUFGZ0I7QUFHN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUhvQjtBQUk3QkMsRUFBQUEsVUFBVSxFQUFFLFlBSmlCO0FBSzdCQyxFQUFBQSxXQUFXLEVBQUU7QUFMZ0Is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QVdILEdBQVgsQ0FBSjtBQUFBLFdBQXZCLENBQUo7QUFBQSxTQUpYLENBRCtCO0FBQUEsT0FBZCxDQUFuQjs7QUFRQSxVQUFJLENBQUNQLFVBQVUsQ0FBQ3RELE1BQWhCLEVBQXdCO0FBQ3RCLGVBQU9xRCxRQUFQO0FBQ0QsT0FoQjBELENBa0IzRDs7O0FBQ0EsVUFBTVksTUFBTSxHQUFHZCxVQUFVLENBQUMsQ0FBRCxDQUF6QjtBQUVBLFVBQU0zRixLQUFLLEdBQUc4RixVQUFVLENBQUNZLEdBQVgsQ0FBZSxVQUFBQyxTQUFTO0FBQUEsZUFBSztBQUN6Q0MsVUFBQUEsS0FBSyxFQUFFRCxTQUFTLENBQUNYLElBQVYsQ0FBZUMsT0FBZixDQUF1QixTQUF2QixFQUFrQyxHQUFsQyxFQUF1Q0MsSUFBdkMsRUFEa0M7QUFFekM5RixVQUFBQSxPQUFPLEVBQUU7QUFDUDdCLFlBQUFBLEdBQUcsRUFBRWtJLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZdEksR0FEVjtBQUVQQyxZQUFBQSxHQUFHLEVBQUVpSSxNQUFNLENBQUNJLElBQVAsQ0FBWXJJLEdBRlY7QUFHUEssWUFBQUEsSUFBSSxFQUFFO0FBQ0ppSSxjQUFBQSxLQUFLLEVBQUVILFNBQVMsQ0FBQ1gsSUFEYjtBQUVKckgsY0FBQUEsUUFBUSxFQUFFZ0ksU0FBUyxDQUFDaEk7QUFGaEI7QUFIQyxXQUZnQztBQVV6Q29JLFVBQUFBLFNBQVMsRUFBRTtBQVY4QixTQUFMO0FBQUEsT0FBeEIsQ0FBZDtBQWFBLGFBQU87QUFBQy9HLFFBQUFBLEtBQUssRUFBTEE7QUFBRCxPQUFQO0FBQ0Q7OztFQXZIb0NnSCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge0JydXNoaW5nRXh0ZW5zaW9ufSBmcm9tICdAZGVjay5nbC9leHRlbnNpb25zJztcblxuaW1wb3J0IFN2Z0ljb25MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL3N2Zy1pY29uLWxheWVyL3N2Zy1pY29uLWxheWVyJztcbmltcG9ydCBJY29uTGF5ZXJJY29uIGZyb20gJy4vaWNvbi1sYXllci1pY29uJztcbmltcG9ydCB7SUNPTl9GSUVMRFMsIENMT1VERlJPTlR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCBJY29uSW5mb01vZGFsRmFjdG9yeSBmcm9tICcuL2ljb24taW5mby1tb2RhbCc7XG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQge2dldFRleHRPZmZzZXRCeVJhZGl1cywgZm9ybWF0VGV4dExhYmVsRGF0YX0gZnJvbSAnLi4vbGF5ZXItdGV4dC1sYWJlbCc7XG5cbmNvbnN0IGJydXNoaW5nRXh0ZW5zaW9uID0gbmV3IEJydXNoaW5nRXh0ZW5zaW9uKCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfSUNPTl9VUkwgPSBgJHtDTE9VREZST05UfS9pY29ucy9zdmctaWNvbnMuanNvbmA7XG5cbmV4cG9ydCBjb25zdCBpY29uUG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nfSkgPT4gZCA9PiBbZC5kYXRhW2xuZy5maWVsZElkeF0sIGQuZGF0YVtsYXQuZmllbGRJZHhdXTtcbmV4cG9ydCBjb25zdCBpY29uQWNjZXNzb3IgPSAoe2ljb259KSA9PiBkID0+IGQuZGF0YVtpY29uLmZpZWxkSWR4XTtcblxuZXhwb3J0IGNvbnN0IGljb25SZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnLCAnaWNvbiddO1xuXG5leHBvcnQgY29uc3QgcG9pbnRWaXNDb25maWdzID0ge1xuICByYWRpdXM6ICdyYWRpdXMnLFxuICBmaXhlZFJhZGl1czogJ2ZpeGVkUmFkaXVzJyxcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnXG59O1xuXG5mdW5jdGlvbiBmbGF0dGVySWNvblBvc2l0aW9ucyhpY29uKSB7XG4gIC8vIGhhZCB0byBmbGlwIHksIHNpbmNlIEBsdW1hIG1vZGFsIGhhcyBjaGFuZ2VkXG4gIHJldHVybiBpY29uLm1lc2guY2VsbHMucmVkdWNlKChwcmV2LCBjZWxsKSA9PiB7XG4gICAgY2VsbC5mb3JFYWNoKHAgPT4ge1xuICAgICAgcHJldi5wdXNoKFxuICAgICAgICAuLi5baWNvbi5tZXNoLnBvc2l0aW9uc1twXVswXSwgLWljb24ubWVzaC5wb3NpdGlvbnNbcF1bMV0sIGljb24ubWVzaC5wb3NpdGlvbnNbcF1bMl1dXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBwcmV2O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25MYXllciBleHRlbmRzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcocG9pbnRWaXNDb25maWdzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IgPSAoKSA9PiBpY29uUG9zQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG4gICAgdGhpcy5nZXRJY29uQWNjZXNzb3IgPSAoKSA9PiBpY29uQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1ucyk7XG5cbiAgICAvLyBwcmVwYXJlIGxheWVyIGluZm8gbW9kYWxcbiAgICB0aGlzLl9sYXllckluZm9Nb2RhbCA9IEljb25JbmZvTW9kYWxGYWN0b3J5KCk7XG4gICAgdGhpcy5pY29uR2VvbWV0cnkgPSBwcm9wcy5pY29uR2VvbWV0cnkgfHwgbnVsbDtcbiAgICB0aGlzLmdldFN2Z0ljb25zKCk7XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ljb24nO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xuICAgIHJldHVybiBpY29uUmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IGNvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQb2ludENvbHVtblBhaXJzO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gSWNvbkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sb3I6IHtcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuY29sb3IsXG4gICAgICAgIGFjY2Vzc29yOiAnZ2V0RmlsbENvbG9yJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBjb25maWcgPT4gY29uZmlnLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXG4gICAgICAgIHJhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiAncmFkaXVzJyxcbiAgICAgICAgYWNjZXNzb3I6ICdnZXRSYWRpdXMnLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IDFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0IGxheWVySW5mb01vZGFsKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogJ2ljb25JbmZvJyxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLl9sYXllckluZm9Nb2RhbCxcbiAgICAgIG1vZGFsUHJvcHM6IHtcbiAgICAgICAgdGl0bGU6ICdtb2RhbC5pY29uSW5mby50aXRsZSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0U3ZnSWNvbnMoKSB7XG4gICAgY29uc3QgZmV0Y2hDb25maWcgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgY2FjaGU6ICduby1jYWNoZSdcbiAgICB9O1xuXG4gICAgaWYgKHdpbmRvdy5mZXRjaCkge1xuICAgICAgd2luZG93XG4gICAgICAgIC5mZXRjaChTVkdfSUNPTl9VUkwsIGZldGNoQ29uZmlnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChwYXJzZWQgPSB7fSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtzdmdJY29ucyA9IFtdfSA9IHBhcnNlZDtcbiAgICAgICAgICB0aGlzLmljb25HZW9tZXRyeSA9IHN2Z0ljb25zLnJlZHVjZShcbiAgICAgICAgICAgIChhY2N1LCBjdXJyKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgICBbY3Vyci5pZF06IGZsYXR0ZXJJY29uUG9zaXRpb25zKGN1cnIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMuX2xheWVySW5mb01vZGFsID0gSWNvbkluZm9Nb2RhbEZhY3Rvcnkoc3ZnSWNvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZFBhaXJzID0gW10sIGZpZWxkcyA9IFtdfSkge1xuICAgIGNvbnN0IG5vdEZvdW5kID0ge3Byb3BzOiBbXX07XG4gICAgaWYgKCFmaWVsZFBhaXJzLmxlbmd0aCB8fCAhZmllbGRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5vdEZvdW5kO1xuICAgIH1cblxuICAgIGNvbnN0IGljb25GaWVsZHMgPSBmaWVsZHMuZmlsdGVyKCh7bmFtZX0pID0+XG4gICAgICBuYW1lXG4gICAgICAgIC5yZXBsYWNlKC9bXywuXSsvZywgJyAnKVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5zb21lKHNlZyA9PiBJQ09OX0ZJRUxEUy5pY29uLnNvbWUodCA9PiB0LmluY2x1ZGVzKHNlZykpKVxuICAgICk7XG5cbiAgICBpZiAoIWljb25GaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbm90Rm91bmQ7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGljb24gbGF5ZXJzIGZvciBmaXJzdCBwb2ludCBwYWlyXG4gICAgY29uc3QgcHRQYWlyID0gZmllbGRQYWlyc1swXTtcblxuICAgIGNvbnN0IHByb3BzID0gaWNvbkZpZWxkcy5tYXAoaWNvbkZpZWxkID0+ICh7XG4gICAgICBsYWJlbDogaWNvbkZpZWxkLm5hbWUucmVwbGFjZSgvW18sLl0rL2csICcgJykudHJpbSgpLFxuICAgICAgY29sdW1uczoge1xuICAgICAgICBsYXQ6IHB0UGFpci5wYWlyLmxhdCxcbiAgICAgICAgbG5nOiBwdFBhaXIucGFpci5sbmcsXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICB2YWx1ZTogaWNvbkZpZWxkLm5hbWUsXG4gICAgICAgICAgZmllbGRJZHg6IGljb25GaWVsZC5maWVsZElkeFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHtwcm9wc307XG4gIH1cblxuICBjYWxjdWxhdGVEYXRhQXR0cmlidXRlKHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4fSwgZ2V0UG9zaXRpb24pIHtcbiAgICBjb25zdCBnZXRJY29uID0gdGhpcy5nZXRJY29uQWNjZXNzb3IoKTtcbiAgICBjb25zdCBkYXRhID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkSW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyZWRJbmRleFtpXTtcbiAgICAgIGNvbnN0IHBvcyA9IGdldFBvc2l0aW9uKHtkYXRhOiBhbGxEYXRhW2luZGV4XX0pO1xuICAgICAgY29uc3QgaWNvbiA9IGdldEljb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgIC8vIGlmIGRvZXNuJ3QgaGF2ZSBwb2ludCBsYXQgb3IgbG5nLCBkbyBub3QgYWRkIHRoZSBwb2ludFxuICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICBpZiAocG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiYgdHlwZW9mIGljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGRhdGEucHVzaCh7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaWNvbixcbiAgICAgICAgICBkYXRhOiBhbGxEYXRhW2luZGV4XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvcm1hdExheWVyRGF0YShkYXRhc2V0cywgb2xkTGF5ZXJEYXRhKSB7XG4gICAgY29uc3Qge3RleHRMYWJlbH0gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuXG4gICAgY29uc3Qge2dwdUZpbHRlcn0gPSBkYXRhc2V0c1t0aGlzLmNvbmZpZy5kYXRhSWRdO1xuICAgIGNvbnN0IHtkYXRhLCB0cmlnZ2VyQ2hhbmdlZH0gPSB0aGlzLnVwZGF0ZURhdGEoZGF0YXNldHMsIG9sZExheWVyRGF0YSk7XG5cbiAgICAvLyBnZXQgYWxsIGRpc3RpbmN0IGNoYXJhY3RlcnMgaW4gdGhlIHRleHQgbGFiZWxzXG4gICAgY29uc3QgdGV4dExhYmVscyA9IGZvcm1hdFRleHRMYWJlbERhdGEoe1xuICAgICAgdGV4dExhYmVsLFxuICAgICAgdHJpZ2dlckNoYW5nZWQsXG4gICAgICBvbGRMYXllckRhdGEsXG4gICAgICBkYXRhXG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvcnMgPSB0aGlzLmdldEF0dHJpYnV0ZUFjY2Vzc29ycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBnZXRQb3NpdGlvbixcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVBY2Nlc3NvcigpLFxuICAgICAgdGV4dExhYmVscyxcbiAgICAgIC4uLmFjY2Vzc29yc1xuICAgIH07XG4gIH1cblxuICB1cGRhdGVMYXllck1ldGEoYWxsRGF0YSwgZ2V0UG9zaXRpb24pIHtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKHtkYXRhOiBkfSkpO1xuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XG4gIH1cblxuICByZW5kZXJMYXllcihvcHRzKSB7XG4gICAgY29uc3Qge2RhdGEsIGdwdUZpbHRlciwgb2JqZWN0SG92ZXJlZCwgbWFwU3RhdGUsIGludGVyYWN0aW9uQ29uZmlnfSA9IG9wdHM7XG5cbiAgICBjb25zdCByYWRpdXNTY2FsZSA9IHRoaXMuZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUpO1xuXG4gICAgY29uc3QgbGF5ZXJQcm9wcyA9IHtcbiAgICAgIHJhZGl1c1NjYWxlLFxuICAgICAgLi4uKHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA/IHt9IDoge3JhZGl1c01heFBpeGVsczogNTAwfSlcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB7XG4gICAgICBnZXRQb3NpdGlvbjogdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgIGdldEZpbHRlclZhbHVlOiBncHVGaWx0ZXIuZmlsdGVyVmFsdWVVcGRhdGVUcmlnZ2VycyxcbiAgICAgIC4uLnRoaXMuZ2V0VmlzdWFsQ2hhbm5lbFVwZGF0ZVRyaWdnZXJzKClcbiAgICB9O1xuXG4gICAgY29uc3QgZGVmYXVsdExheWVyUHJvcHMgPSB0aGlzLmdldERlZmF1bHREZWNrTGF5ZXJQcm9wcyhvcHRzKTtcbiAgICBjb25zdCBicnVzaGluZ1Byb3BzID0gdGhpcy5nZXRCcnVzaGluZ0V4dGVuc2lvblByb3BzKGludGVyYWN0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBnZXRQaXhlbE9mZnNldCA9IGdldFRleHRPZmZzZXRCeVJhZGl1cyhyYWRpdXNTY2FsZSwgZGF0YS5nZXRSYWRpdXMsIG1hcFN0YXRlKTtcbiAgICBjb25zdCBleHRlbnNpb25zID0gWy4uLmRlZmF1bHRMYXllclByb3BzLmV4dGVuc2lvbnMsIGJydXNoaW5nRXh0ZW5zaW9uXTtcblxuICAgIC8vIHNoYXJlZCBQcm9wcyBiZXR3ZWVuIGxheWVyIGFuZCBsYWJlbCBsYXllclxuICAgIGNvbnN0IHNoYXJlZFByb3BzID0ge1xuICAgICAgZ2V0RmlsdGVyVmFsdWU6IGRhdGEuZ2V0RmlsdGVyVmFsdWUsXG4gICAgICBleHRlbnNpb25zLFxuICAgICAgZmlsdGVyUmFuZ2U6IGRlZmF1bHRMYXllclByb3BzLmZpbHRlclJhbmdlLFxuICAgICAgLi4uYnJ1c2hpbmdQcm9wc1xuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbExheWVycyA9IFtcbiAgICAgIC4uLnRoaXMucmVuZGVyVGV4dExhYmVsTGF5ZXIoXG4gICAgICAgIHtcbiAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICBzaGFyZWRQcm9wcyxcbiAgICAgICAgICBnZXRQaXhlbE9mZnNldCxcbiAgICAgICAgICB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgICB9LFxuICAgICAgICBvcHRzXG4gICAgICApXG4gICAgXTtcbiAgICBjb25zdCBob3ZlcmVkT2JqZWN0ID0gdGhpcy5oYXNIb3ZlcmVkT2JqZWN0KG9iamVjdEhvdmVyZWQpO1xuXG4gICAgcmV0dXJuICF0aGlzLmljb25HZW9tZXRyeVxuICAgICAgPyBbXVxuICAgICAgOiBbXG4gICAgICAgICAgbmV3IFN2Z0ljb25MYXllcih7XG4gICAgICAgICAgICAuLi5kZWZhdWx0TGF5ZXJQcm9wcyxcbiAgICAgICAgICAgIC4uLmJydXNoaW5nUHJvcHMsXG4gICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGdldEljb25HZW9tZXRyeTogaWQgPT4gdGhpcy5pY29uR2VvbWV0cnlbaWRdLFxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgdHJpZ2dlcnNcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzLFxuICAgICAgICAgICAgZXh0ZW5zaW9uc1xuICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgLi4uKGhvdmVyZWRPYmplY3RcbiAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgIG5ldyBTdmdJY29uTGF5ZXIoe1xuICAgICAgICAgICAgICAgICAgLi4udGhpcy5nZXREZWZhdWx0SG92ZXJMYXllclByb3BzKCksXG4gICAgICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICAgICAgZGF0YTogW2hvdmVyZWRPYmplY3RdLFxuICAgICAgICAgICAgICAgICAgZ2V0UG9zaXRpb246IGRhdGEuZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICAgICAgZ2V0RmlsbENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgICAgIGdldEljb25HZW9tZXRyeTogaWQgPT4gdGhpcy5pY29uR2VvbWV0cnlbaWRdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBbXSksXG5cbiAgICAgICAgICAvLyB0ZXh0IGxhYmVsIGxheWVyXG4gICAgICAgICAgLi4ubGFiZWxMYXllcnNcbiAgICAgICAgXTtcbiAgfVxufVxuIl19