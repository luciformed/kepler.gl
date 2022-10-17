"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.ChannelByValueSelectorFactory = ChannelByValueSelectorFactory;
exports.AggregationTypeSelector = exports.AggrScaleSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerDataset = exports.getLayerFields = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../../localization");

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

var _types = require("../../../layers/types");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: ", ";\n  padding: ", ";\n  border-left: ", " dashed\n    ", ";\n"])), function (props) {
  return props.theme.layerConfiguratorMargin;
}, function (props) {
  return props.theme.layerConfiguratorPadding;
}, function (props) {
  return props.theme.layerConfiguratorBorder;
}, function (props) {
  return props.theme.layerConfiguratorBorderColor;
});

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"])));

var getLayerFields = function getLayerFields(datasets, layer) {
  return layer.config && datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerDataset = function getLayerDataset(datasets, layer) {
  return layer.config && datasets[layer.config.dataId] ? datasets[layer.config.dataId] : null;
};

exports.getLayerDataset = getLayerDataset;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"], _visConfigSlider["default"], _textLabelPanel["default"], _layerConfigGroup["default"], ChannelByValueSelectorFactory, _layerColumnConfig["default"], _layerTypeSelector["default"], _visConfigSwitch["default"]];

function LayerConfiguratorFactory(SourceDataSelector, VisConfigSlider, TextLabelPanel, LayerConfigGroup, ChannelByValueSelector, LayerColumnConfig, LayerTypeSelector, VisConfigSwitch) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled || {
          label: 'layer.color'
        }, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _types.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(TextLabelPanel, {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel,
          colorPalette: visConfiguratorProps.colorPalette,
          setColorPaletteUI: visConfiguratorProps.setColorPaletteUI
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius'
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'layer.elevationByDescription';
        var colorByDescription = 'layer.colorByDescription';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggrScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.sourceColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))));
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.trailLength",
          description: "layer.trailLengthDescription"
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModel',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModelOptions',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.elevationScale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            _ref11$fieldPairs = _ref11.fieldPairs,
            fieldPairs = _ref11$fieldPairs === void 0 ? undefined : _ref11$fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var dataset = getLayerDataset(datasets, layer);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(HowToButton, {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(LayerTypeSelector, {
          datasets: datasets,
          layer: layer,
          layerTypeOptions: layerTypeOptions,
          onSelect: updateLayerType
        }), Object.keys(datasets).length > 1 && /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          dataId: config.dataId,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(LayerColumnConfig, {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer),
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig,
          updateLayerType: this.props.updateLayerType
        })), this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          dataset: dataset,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    openModal: _propTypes["default"].func.isRequired,
    updateLayerConfig: _propTypes["default"].func.isRequired,
    updateLayerType: _propTypes["default"].func.isRequired,
    updateLayerVisConfig: _propTypes["default"].func.isRequired,
    updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired,
    updateLayerColorUI: _propTypes["default"].func.isRequired
  });
  return LayerConfigurator;
}
/*
 * Componentize config component into pure functional components
 */


var StyledHowToButton = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"])));

var HowToButton = function HowToButton(_ref12) {
  var onClick = _ref12.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledHowToButton, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layerConfiguration.howTo'
  })));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChange = _ref13.onChange,
      label = _ref13.label,
      selectedColor = _ref13.selectedColor,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref14) {
  var layer = _ref14.layer,
      onChangeConfig = _ref14.onChangeConfig,
      onChangeVisConfig = _ref14.onChangeVisConfig,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'color' : _ref14$property,
      _setColorUI2 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange,
      _ref15$property = _ref15.property,
      property = _ref15$property === void 0 ? 'colorRange' : _ref15$property,
      _setColorUI3 = _ref15.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;
ChannelByValueSelectorFactory.deps = [_visConfigByFieldSelector["default"]];

function ChannelByValueSelectorFactory(VisConfigByFieldSelector) {
  var ChannelByValueSelector = function ChannelByValueSelector(_ref16) {
    var layer = _ref16.layer,
        channel = _ref16.channel,
        onChange = _ref16.onChange,
        fields = _ref16.fields,
        description = _ref16.description;
    var channelScaleType = channel.channelScaleType,
        domain = channel.domain,
        field = channel.field,
        key = channel.key,
        property = channel.property,
        range = channel.range,
        scale = channel.scale,
        defaultMeasure = channel.defaultMeasure,
        supportedFieldTypes = channel.supportedFieldTypes;
    var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
    var supportedFields = fields.filter(function (_ref17) {
      var type = _ref17.type;
      return channelSupportedFieldTypes.includes(type);
    });
    var scaleOptions = layer.getScaleOptions(channel.key);
    var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
    var defaultDescription = 'layerConfiguration.defaultDescription';
    return /*#__PURE__*/_react["default"].createElement(VisConfigByFieldSelector, {
      channel: channel.key,
      description: description || defaultDescription,
      domain: layer.config[domain],
      fields: supportedFields,
      id: layer.id,
      key: "".concat(key, "-channel-selector"),
      property: property,
      placeholder: defaultMeasure || 'placeholder.selectField',
      range: layer.config.visConfig[range],
      scaleOptions: scaleOptions,
      scaleType: scale ? layer.config[scale] : null,
      selectedField: layer.config[field],
      showScale: showScale,
      updateField: function updateField(val) {
        return onChange((0, _defineProperty2["default"])({}, field, val), key);
      },
      updateScale: function updateScale(val) {
        return onChange((0, _defineProperty2["default"])({}, scale, val), key);
      }
    });
  };

  return ChannelByValueSelector;
}

var AggrScaleSelector = function AggrScaleSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      onChange = _ref18.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggrScaleSelector = AggrScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref19) {
  var layer = _ref19.layer,
      channel = _ref19.channel,
      _onChange6 = _ref19.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layer.aggregateBy',
    values: {
      field: selectedField.name
    }
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread(_objectSpread({}, layer.config.visConfig), {}, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwibGF5ZXJDb25maWd1cmF0b3JNYXJnaW4iLCJsYXllckNvbmZpZ3VyYXRvclBhZGRpbmciLCJsYXllckNvbmZpZ3VyYXRvckJvcmRlciIsImxheWVyQ29uZmlndXJhdG9yQm9yZGVyQ29sb3IiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsImdldExheWVyRmllbGRzIiwiZGF0YXNldHMiLCJsYXllciIsImNvbmZpZyIsImRhdGFJZCIsImZpZWxkcyIsImdldExheWVyRGF0YXNldCIsImdldExheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJvbkNoYW5nZSIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2V0Q29sb3JVSSIsInVwZGF0ZUxheWVyQ29sb3JVSSIsImdldFZpc0NvbmZpZ3VyYXRvclByb3BzIiwidXBkYXRlTGF5ZXJWaXNDb25maWciLCJnZXRMYXllckNoYW5uZWxDb25maWdQcm9wcyIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsIkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeSIsImRlcHMiLCJTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5IiwiVmlzQ29uZmlnU2xpZGVyRmFjdG9yeSIsIlRleHRMYWJlbFBhbmVsRmFjdG9yeSIsIkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5IiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkiLCJMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkiLCJMYXllclR5cGVTZWxlY3RvckZhY3RvcnkiLCJWaXNDb25maWdTd2l0Y2hGYWN0b3J5IiwiU291cmNlRGF0YVNlbGVjdG9yIiwiVmlzQ29uZmlnU2xpZGVyIiwiVGV4dExhYmVsUGFuZWwiLCJMYXllckNvbmZpZ0dyb3VwIiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciIsIkxheWVyQ29sdW1uQ29uZmlnIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJWaXNDb25maWdTd2l0Y2giLCJMYXllckNvbmZpZ3VyYXRvciIsIl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImxhYmVsIiwiY29sb3JGaWVsZCIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJjb2xvclBhbGV0dGUiLCJzZXRDb2xvclBhbGV0dGVVSSIsImNvbG9yQWdncmVnYXRpb24iLCJjb25kaXRpb24iLCJjbHVzdGVyUmFkaXVzIiwid2VpZ2h0IiwiX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWciLCJlbmFibGUzZCIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJwZXJjZW50aWxlIiwid29ybGRVbml0U2l6ZSIsImNvdmVyYWdlIiwiZWxldmF0aW9uU2NhbGUiLCJzaXplUmFuZ2UiLCJzaXplQWdncmVnYXRpb24iLCJlbGV2YXRpb25QZXJjZW50aWxlIiwiY292ZXJhZ2VGaWVsZCIsImNvdmVyYWdlUmFuZ2UiLCJhcmdzIiwiX3JlbmRlckxpbmVMYXllckNvbmZpZyIsInNvdXJjZUNvbG9yIiwibWV0YSIsImZlYXR1cmVUeXBlcyIsInBvbHlnb24iLCJzdHJva2VkIiwidHJhaWxMZW5ndGgiLCJzdHJva2VPcGFjaXR5IiwiaGVpZ2h0Iiwid2lyZWZyYW1lIiwicmFkaXVzRmllbGQiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzY2VuZWdyYXBoIiwic2l6ZVNjYWxlIiwiYW5nbGVYIiwiYW5nbGVZIiwiYW5nbGVaIiwiaGVpZ2h0UmFuZ2UiLCJsYXllclR5cGVPcHRpb25zIiwidXBkYXRlTGF5ZXJUeXBlIiwiZmllbGRQYWlycyIsInVuZGVmaW5lZCIsImRhdGFzZXQiLCJyZW5kZXJUZW1wbGF0ZSIsImxheWVySW5mb01vZGFsIiwib3Blbk1vZGFsIiwiaGFzQWxsQ29sdW1ucyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpZCIsInZhbHVlIiwiY29sdW1uUGFpcnMiLCJjb2x1bW5zIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJiaW5kIiwiYXNzaWduQ29sdW1uIiwiY29sdW1uTGFiZWxzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiU3R5bGVkSG93VG9CdXR0b24iLCJIb3dUb0J1dHRvbiIsIm9uQ2xpY2siLCJMYXllckNvbG9yU2VsZWN0b3IiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiY29sb3JVSSIsIm5ld0NvbmZpZyIsIkFyY0xheWVyQ29sb3JTZWxlY3RvciIsIm9uQ2hhbmdlQ29uZmlnIiwib25DaGFuZ2VWaXNDb25maWciLCJ0YXJnZXRDb2xvciIsIkxheWVyQ29sb3JSYW5nZVNlbGVjdG9yIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5IiwiVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMvQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRG9DLENBQWpCLENBQUgsOExBSWIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyx1QkFBaEI7QUFBQSxDQUpRLEVBS2hCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsd0JBQWhCO0FBQUEsQ0FMVyxFQU1aLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsdUJBQWhCO0FBQUEsQ0FOTyxFQU92QixVQUFBSixLQUFLO0FBQUEs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bmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdsb2NhbGl6YXRpb24nO1xuXG5pbXBvcnQge0J1dHRvbiwgSW5wdXQsIFBhbmVsTGFiZWwsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcblxuaW1wb3J0IFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkgZnJvbSAnLi9sYXllci1jb2x1bW4tY29uZmlnJztcbmltcG9ydCBMYXllclR5cGVTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9sYXllci10eXBlLXNlbGVjdG9yJztcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL2NvbW1vbi9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQgVmlzQ29uZmlnU3dpdGNoRmFjdG9yeSBmcm9tICcuL3Zpcy1jb25maWctc3dpdGNoJztcbmltcG9ydCBWaXNDb25maWdTbGlkZXJGYWN0b3J5IGZyb20gJy4vdmlzLWNvbmZpZy1zbGlkZXInO1xuaW1wb3J0IExheWVyQ29uZmlnR3JvdXBGYWN0b3J5LCB7Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnR9IGZyb20gJy4vbGF5ZXItY29uZmlnLWdyb3VwJztcbmltcG9ydCBUZXh0TGFiZWxQYW5lbEZhY3RvcnkgZnJvbSAnLi90ZXh0LWxhYmVsLXBhbmVsJztcblxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7TEFZRVJfVFlQRVN9IGZyb20gJ2xheWVycy90eXBlcyc7XG5cbmNvbnN0IFN0eWxlZExheWVyQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWcnXG59KWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlndXJhdG9yTWFyZ2lufTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ3VyYXRvclBhZGRpbmd9O1xuICBib3JkZXItbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ3VyYXRvckJvcmRlcn0gZGFzaGVkXG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ3VyYXRvckJvcmRlckNvbG9yfTtcbmA7XG5cbmNvbnN0IFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWdfX3Zpc3VhbEMtY29uZmlnJ1xufSlgXG4gIG1hcmdpbi10b3A6IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJGaWVsZHMgPSAoZGF0YXNldHMsIGxheWVyKSA9PlxuICBsYXllci5jb25maWcgJiYgZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0gPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXS5maWVsZHMgOiBbXTtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyRGF0YXNldCA9IChkYXRhc2V0cywgbGF5ZXIpID0+XG4gIGxheWVyLmNvbmZpZyAmJiBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdIDogbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyQ29uZmlnLFxuICBzZXRDb2xvclVJOiBwcm9wcy51cGRhdGVMYXllckNvbG9yVUlcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnLFxuICBzZXRDb2xvclVJOiBwcm9wcy51cGRhdGVMYXllckNvbG9yVUlcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMgPSBwcm9wcyA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xufSk7XG5cbkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeS5kZXBzID0gW1xuICBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5LFxuICBWaXNDb25maWdTbGlkZXJGYWN0b3J5LFxuICBUZXh0TGFiZWxQYW5lbEZhY3RvcnksXG4gIExheWVyQ29uZmlnR3JvdXBGYWN0b3J5LFxuICBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeSxcbiAgTGF5ZXJDb2x1bW5Db25maWdGYWN0b3J5LFxuICBMYXllclR5cGVTZWxlY3RvckZhY3RvcnksXG4gIFZpc0NvbmZpZ1N3aXRjaEZhY3Rvcnlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheWVyQ29uZmlndXJhdG9yRmFjdG9yeShcbiAgU291cmNlRGF0YVNlbGVjdG9yLFxuICBWaXNDb25maWdTbGlkZXIsXG4gIFRleHRMYWJlbFBhbmVsLFxuICBMYXllckNvbmZpZ0dyb3VwLFxuICBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yLFxuICBMYXllckNvbHVtbkNvbmZpZyxcbiAgTGF5ZXJUeXBlU2VsZWN0b3IsXG4gIFZpc0NvbmZpZ1N3aXRjaFxuKSB7XG4gIGNsYXNzIExheWVyQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllclR5cGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgb3Blbk1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllclR5cGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB1cGRhdGVMYXllclZpc0NvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyQ29sb3JVSTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfcmVuZGVyUG9pbnRMYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJJY29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBGaWxsIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4uKGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpbGxlZCB8fCB7bGFiZWw6ICdsYXllci5jb2xvcid9KX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBvdXRsaW5lIGNvbG9yICovfVxuICAgICAgICAgIHtsYXllci50eXBlID09PSBMQVlFUl9UWVBFUy5wb2ludCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vdXRsaW5lfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy5vdXRsaW5lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnNpemVGaWVsZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcuc2l6ZUZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZml4ZWRSYWRpdXN9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiB0ZXh0IGxhYmVsICovfVxuICAgICAgICAgIDxUZXh0TGFiZWxQYW5lbFxuICAgICAgICAgICAgZmllbGRzPXt2aXNDb25maWd1cmF0b3JQcm9wcy5maWVsZHN9XG4gICAgICAgICAgICB1cGRhdGVMYXllclRleHRMYWJlbD17dGhpcy5wcm9wcy51cGRhdGVMYXllclRleHRMYWJlbH1cbiAgICAgICAgICAgIHRleHRMYWJlbD17bGF5ZXIuY29uZmlnLnRleHRMYWJlbH1cbiAgICAgICAgICAgIGNvbG9yUGFsZXR0ZT17dmlzQ29uZmlndXJhdG9yUHJvcHMuY29sb3JQYWxldHRlfVxuICAgICAgICAgICAgc2V0Q29sb3JQYWxldHRlVUk9e3Zpc0NvbmZpZ3VyYXRvclByb3BzLnNldENvbG9yUGFsZXR0ZVVJfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJDbHVzdGVyTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogQ2x1c3RlciBSYWRpdXMgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNsdXN0ZXJSYWRpdXN9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVySGVhdG1hcExheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgIHsvKiBSYWRpdXMgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5yYWRpdXMnfT5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7LyogV2VpZ2h0ICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIud2VpZ2h0J30+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy53ZWlnaHR9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyR3JpZExheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckhleGFnb25MYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuICAgICAgY29uc3Qge1xuICAgICAgICB2aXNDb25maWc6IHtlbmFibGUzZH1cbiAgICAgIH0gPSBjb25maWc7XG4gICAgICBjb25zdCBlbGV2YXRpb25CeURlc2NyaXB0aW9uID0gJ2xheWVyLmVsZXZhdGlvbkJ5RGVzY3JpcHRpb24nO1xuICAgICAgY29uc3QgY29sb3JCeURlc2NyaXB0aW9uID0gJ2xheWVyLmNvbG9yQnlEZXNjcmlwdGlvbic7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPEFnZ3JTY2FsZVNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn0gLz5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29sb3JCeURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlICYmXG4gICAgICAgICAgICAgIGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENlbGwgc2l6ZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxBZ2dyU2NhbGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWxldmF0aW9uQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW5hYmxlM2R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBTaGFuIG1vdmUgdGhlc2UgaW50byBsYXllciBjbGFzc1xuICAgIF9yZW5kZXJIZXhhZ29uSWRMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENvdmVyYWdlICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY292ZXJhZ2UnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLmNvdmVyYWdlRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2VSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb3ZlcmFnZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBoZWlnaHQgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5oZWlnaHRSYW5nZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckFyY0xheWVyQ29uZmlnKGFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJMaW5lTGF5ZXJDb25maWcoYXJncyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckxpbmVMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QXJjTGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgIHNldENvbG9yVUk9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMuc2V0Q29sb3JVSX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbmZpZz17bGF5ZXJDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZpc0NvbmZpZz17dmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNvdXJjZUNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogdGhpY2tuZXNzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuc3Ryb2tlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyVHJpcExheWVyQ29uZmlnKHtcbiAgICAgIGxheWVyLFxuICAgICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgICB9KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX1cbiAgICAgIH0gPSBsYXllcjtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IGxhYmVsPVwibGF5ZXIuc3Ryb2tlV2lkdGhcIiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFRyYWlsIExlbmd0aCovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICB7Li4uKGZlYXR1cmVUeXBlcy5wb2x5Z29uID8gbGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZCA6IHt9KX1cbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIudHJhaWxMZW5ndGhcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJsYXllci50cmFpbExlbmd0aERlc2NyaXB0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50cmFpbExlbmd0aH1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckdlb2pzb25MYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319LFxuICAgICAgICBjb25maWc6IHt2aXNDb25maWd9XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogRmlsbCBDb2xvciAqL31cbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gfHwgZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpbGxlZH1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD1cImxheWVyLmZpbGxDb2xvclwiXG4gICAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7Lyogc3Ryb2tlIGNvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuc3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VPcGFjaXR5fVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLihmZWF0dXJlVHlwZXMucG9seWdvbiA/IGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWQgOiB7fSl9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIEVsZXZhdGlvbiAqL31cbiAgICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF2aXNDb25maWcuZmlsbGVkfVxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53aXJlZnJhbWV9IC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXIzRExheWVyQ29uZmlnKHtsYXllciwgdmlzQ29uZmlndXJhdG9yUHJvcHN9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci4zRE1vZGVsJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuZ2xiLC5nbHRmXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZSh7c2NlbmVncmFwaDogdXJsfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci4zRE1vZGVsT3B0aW9ucyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVNjYWxlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5hbmdsZVh9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmFuZ2xlWX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVafVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyUzJMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb25maWc6IHt2aXNDb25maWd9XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLmZpbGxDb2xvclwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogU3Ryb2tlICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuc3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IGxhYmVsPVwibGF5ZXIuc3Ryb2tlV2lkdGhcIiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuaGVpZ2h0fVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuZWxldmF0aW9uU2NhbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5oZWlnaHRSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuaGVpZ2h0UmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndpcmVmcmFtZX0gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXIsIGRhdGFzZXRzLCB1cGRhdGVMYXllckNvbmZpZywgbGF5ZXJUeXBlT3B0aW9ucywgdXBkYXRlTGF5ZXJUeXBlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnMgPSB1bmRlZmluZWR9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgICA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdXG4gICAgICAgIDoge307XG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuXG4gICAgICBjb25zdCB2aXNDb25maWd1cmF0b3JQcm9wcyA9IGdldFZpc0NvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyA9IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBsYXllckNoYW5uZWxDb25maWdQcm9wcyA9IGdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgZGF0YXNldCA9IGdldExheWVyRGF0YXNldChkYXRhc2V0cywgbGF5ZXIpO1xuICAgICAgY29uc3QgcmVuZGVyVGVtcGxhdGUgPSBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxuICAgICAgICAgICAgPEhvd1RvQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbk1vZGFsKGxheWVyLmxheWVySW5mb01vZGFsKX0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmJhc2ljJ30gY29sbGFwc2libGUgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9PlxuICAgICAgICAgICAgPExheWVyVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICBsYXllclR5cGVPcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxTb3VyY2VEYXRhU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17Y29uZmlnLmRhdGFJZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4gdXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TGF5ZXJDb2x1bW5Db25maWdcbiAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxuICAgICAgICAgICAgICBjb2x1bW5zPXtsYXllci5jb25maWcuY29sdW1uc31cbiAgICAgICAgICAgICAgYXNzaWduQ29sdW1uUGFpcnM9e2xheWVyLmFzc2lnbkNvbHVtblBhaXJzLmJpbmQobGF5ZXIpfVxuICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgY29sdW1uTGFiZWxzPXtsYXllci5jb2x1bW5MYWJlbHN9XG4gICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy5wcm9wcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7dGhpc1tyZW5kZXJUZW1wbGF0ZV0gJiZcbiAgICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdKHtcbiAgICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICAgIGRhdGFzZXQsXG4gICAgICAgICAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgICAgICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICAgICAgICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBMYXllckNvbmZpZ3VyYXRvcjtcbn1cbi8qXG4gKiBDb21wb25lbnRpemUgY29uZmlnIGNvbXBvbmVudCBpbnRvIHB1cmUgZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gKi9cblxuY29uc3QgU3R5bGVkSG93VG9CdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IC00cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSG93VG9CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cbiAgICA8QnV0dG9uIGxpbmsgc21hbGwgb25DbGljaz17b25DbGlja30+XG4gICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2xheWVyQ29uZmlndXJhdGlvbi5ob3dUbyd9IC8+XG4gICAgPC9CdXR0b24+XG4gIDwvU3R5bGVkSG93VG9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclNlbGVjdG9yID0gKHtcbiAgbGF5ZXIsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgc2VsZWN0ZWRDb2xvcixcbiAgcHJvcGVydHkgPSAnY29sb3InLFxuICBzZXRDb2xvclVJXG59KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHNlbGVjdGVkQ29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogcmdiVmFsdWV9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZUNvbmZpZyxcbiAgb25DaGFuZ2VWaXNDb25maWcsXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcbiAgc2V0Q29sb3JVSVxufSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZVZpc0NvbmZpZyh7dGFyZ2V0Q29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclJhbmdlU2VsZWN0b3IgPSAoe2xheWVyLCBvbkNoYW5nZSwgcHJvcGVydHkgPSAnY29sb3JSYW5nZScsIHNldENvbG9yVUl9KSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldLFxuICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgc2V0Q29sb3I6IGNvbG9yUmFuZ2UgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGNvbG9yUmFuZ2V9KVxuICAgICAgICB9XG4gICAgICBdfVxuICAgICAgY29sb3JVST17bGF5ZXIuY29uZmlnLmNvbG9yVUlbcHJvcGVydHldfVxuICAgICAgc2V0Q29sb3JVST17bmV3Q29uZmlnID0+IHNldENvbG9yVUkocHJvcGVydHksIG5ld0NvbmZpZyl9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcbmV4cG9ydCBmdW5jdGlvbiBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeShWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IpIHtcbiAgY29uc3QgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciA9ICh7bGF5ZXIsIGNoYW5uZWwsIG9uQ2hhbmdlLCBmaWVsZHMsIGRlc2NyaXB0aW9ufSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5uZWxTY2FsZVR5cGUsXG4gICAgICBkb21haW4sXG4gICAgICBmaWVsZCxcbiAgICAgIGtleSxcbiAgICAgIHByb3BlcnR5LFxuICAgICAgcmFuZ2UsXG4gICAgICBzY2FsZSxcbiAgICAgIGRlZmF1bHRNZWFzdXJlLFxuICAgICAgc3VwcG9ydGVkRmllbGRUeXBlc1xuICAgIH0gPSBjaGFubmVsO1xuICAgIGNvbnN0IGNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzID1cbiAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xuICAgIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT4gY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMuaW5jbHVkZXModHlwZSkpO1xuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucyhjaGFubmVsLmtleSk7XG4gICAgY29uc3Qgc2hvd1NjYWxlID0gIWxheWVyLmlzQWdncmVnYXRlZCAmJiBsYXllci5jb25maWdbc2NhbGVdICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxO1xuICAgIGNvbnN0IGRlZmF1bHREZXNjcmlwdGlvbiA9ICdsYXllckNvbmZpZ3VyYXRpb24uZGVmYXVsdERlc2NyaXB0aW9uJztcblxuICAgIHJldHVybiAoXG4gICAgICA8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yXG4gICAgICAgIGNoYW5uZWw9e2NoYW5uZWwua2V5fVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb24gfHwgZGVmYXVsdERlc2NyaXB0aW9ufVxuICAgICAgICBkb21haW49e2xheWVyLmNvbmZpZ1tkb21haW5dfVxuICAgICAgICBmaWVsZHM9e3N1cHBvcnRlZEZpZWxkc31cbiAgICAgICAgaWQ9e2xheWVyLmlkfVxuICAgICAgICBrZXk9e2Ake2tleX0tY2hhbm5lbC1zZWxlY3RvcmB9XG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZWFzdXJlIHx8ICdwbGFjZWhvbGRlci5zZWxlY3RGaWVsZCd9XG4gICAgICAgIHJhbmdlPXtsYXllci5jb25maWcudmlzQ29uZmlnW3JhbmdlXX1cbiAgICAgICAgc2NhbGVPcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cbiAgICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cbiAgICAgICAgc2hvd1NjYWxlPXtzaG93U2NhbGV9XG4gICAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XG4gICAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENoYW5uZWxCeVZhbHVlU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBBZ2dyU2NhbGVTZWxlY3RvciA9ICh7Y2hhbm5lbCwgbGF5ZXIsIG9uQ2hhbmdlfSkgPT4ge1xuICBjb25zdCB7c2NhbGUsIGtleX0gPSBjaGFubmVsO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoa2V5KTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShzY2FsZU9wdGlvbnMpICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxID8gKFxuICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXG4gICAgICBsYWJlbD17YCR7a2V5fSBTY2FsZWB9XG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZ1tzY2FsZV19XG4gICAgICBvblNlbGVjdD17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgIC8+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yID0gKHtsYXllciwgY2hhbm5lbCwgb25DaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IHtmaWVsZCwgYWdncmVnYXRpb24sIGtleX0gPSBjaGFubmVsO1xuICBjb25zdCBzZWxlY3RlZEZpZWxkID0gbGF5ZXIuY29uZmlnW2ZpZWxkXTtcbiAgY29uc3Qge3Zpc0NvbmZpZ30gPSBsYXllci5jb25maWc7XG5cbiAgLy8gYWdncmVnYXRpb24gc2hvdWxkIG9ubHkgYmUgc2VsZWN0YWJsZSB3aGVuIGZpZWxkIGlzIHNlbGVjdGVkXG4gIGNvbnN0IGFnZ3JlZ2F0aW9uT3B0aW9ucyA9IGxheWVyLmdldEFnZ3JlZ2F0aW9uT3B0aW9ucyhrZXkpO1xuXG4gIHJldHVybiAoXG4gICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydsYXllci5hZ2dyZWdhdGVCeSd9IHZhbHVlcz17e2ZpZWxkOiBzZWxlY3RlZEZpZWxkLm5hbWV9fSAvPlxuICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFubmVsLmtleVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4iXX0=