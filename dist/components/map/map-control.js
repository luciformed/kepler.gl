"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapLegendPanelFactory = MapLegendPanelFactory;
exports.SplitMapButtonFactory = SplitMapButtonFactory;
exports.Toggle3dButtonFactory = Toggle3dButtonFactory;
exports.MapDrawPanelFactory = MapDrawPanelFactory;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("../../localization");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

var _verticalToolbar = _interopRequireDefault(require("../common/vertical-toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _defaultSettings = require("../../constants/default-settings");

var _locales = require("../../localization/locales");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledMapControl = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  padding: ", "px;\n  z-index: 10;\n  margin-top: ", "px;\n  position: absolute;\n"])), function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top || 0;
});

var StyledMapControlAction = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"])));

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"])), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-content'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  min-width: ", "px;\n  overflow: auto;\n"])), function (props) {
  return props.theme.dropdownScrollBar;
}, function (props) {
  return props.theme.mapControl.width;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-header'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"])), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});

var ActionPanel = function ActionPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlAction, {
    className: className
  }, children);
};

ActionPanel.displayName = 'ActionPanel';
/** @type {import('./map-control').MapControlTooltipComponent} */

var MapControlTooltip = /*#__PURE__*/_react["default"].memo(function (_ref2) {
  var id = _ref2.id,
      message = _ref2.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: message
  })));
});

MapControlTooltip.displayName = 'MapControlTooltip';

var MapLegendTooltip = function MapLegendTooltip(_ref3) {
  var id = _ref3.id,
      message = _ref3.message;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: message
  })));
};
/** @type {import('./map-control').LayerSelectorPanelComponent} */


var LayerSelectorPanel = /*#__PURE__*/_react["default"].memo(function (_ref4) {
  var items = _ref4.items,
      onMapToggleLayer = _ref4.onMapToggleLayer,
      isActive = _ref4.isActive,
      toggleMenuPanel = _ref4.toggleMenuPanel;
  return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "toggle-layer",
    message: isActive ? 'tooltip.hideLayerPanel' : 'tooltip.showLayerPanel'
  })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
    header: "header.visibleLayers",
    onClick: toggleMenuPanel
  }, /*#__PURE__*/_react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
});

LayerSelectorPanel.displayName = 'LayerSelectorPanel';
/** @type {import('./map-control').MapControlPanelComponent} */

var MapControlPanel = /*#__PURE__*/_react["default"].memo(function (_ref5) {
  var children = _ref5.children,
      header = _ref5.header,
      onClick = _ref5.onClick,
      _ref5$scale = _ref5.scale,
      scale = _ref5$scale === void 0 ? 1 : _ref5$scale,
      isExport = _ref5.isExport,
      _ref5$disableClose = _ref5.disableClose,
      disableClose = _ref5$disableClose === void 0 ? false : _ref5$disableClose,
      logoComponent = _ref5.logoComponent;
  return /*#__PURE__*/_react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ")"),
      marginBottom: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeader, null, isExport && logoComponent ? logoComponent : header ? /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: header
  })) : null, isExport ? null : /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, {
    className: "close-map-control-item",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    height: "16px"
  }))), /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelContent, null, children));
});

MapControlPanel.displayName = 'MapControlPanel';
MapLegendPanelFactory.deps = [];

function MapLegendPanelFactory() {
  var defaultActionIcons = {
    legend: _icons.Legend
  };
  /** @type {import('./map-control').MapLegendPanelComponent} */

  var MapLegendPanel = function MapLegendPanel(_ref6) {
    var layers = _ref6.layers,
        isActive = _ref6.isActive,
        scale = _ref6.scale,
        onToggleMenuPanel = _ref6.onToggleMenuPanel,
        isExport = _ref6.isExport,
        disableClose = _ref6.disableClose,
        logoComponent = _ref6.logoComponent,
        _ref6$actionIcons = _ref6.actionIcons,
        actionIcons = _ref6$actionIcons === void 0 ? defaultActionIcons : _ref6$actionIcons;
    return !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      key: 2,
      "data-tip": true,
      "data-for": "show-legend",
      className: "map-control-button show-legend",
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleMenuPanel();
      }
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.legend, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapLegendTooltip, {
      id: "show-legend",
      message: 'tooltip.showLegend'
    })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
      scale: scale,
      header: 'header.layerLegend',
      onClick: onToggleMenuPanel,
      isExport: isExport,
      disableClose: disableClose,
      logoComponent: logoComponent
    }, /*#__PURE__*/_react["default"].createElement(_mapLegend["default"], {
      layers: layers
    }));
  };

  MapLegendPanel.displayName = 'MapControlPanel';
  return MapLegendPanel;
}

SplitMapButtonFactory.deps = [];

function SplitMapButtonFactory() {
  var defaultActionIcons = {
    "delete": _icons.Delete,
    split: _icons.Split
  };
  /** @type {import('./map-control').SplitMapButtonComponent} */

  var SplitMapButton = /*#__PURE__*/_react["default"].memo(function (_ref7) {
    var isSplit = _ref7.isSplit,
        mapIndex = _ref7.mapIndex,
        onToggleSplitMap = _ref7.onToggleSplitMap,
        _ref7$actionIcons = _ref7.actionIcons,
        actionIcons = _ref7$actionIcons === void 0 ? defaultActionIcons : _ref7$actionIcons;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      active: isSplit,
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleSplitMap(isSplit ? mapIndex : undefined);
      },
      key: "split-".concat(isSplit),
      className: (0, _classnames["default"])('map-control-button', 'split-map', {
        'close-map': isSplit
      }),
      "data-tip": true,
      "data-for": "action-toggle"
    }, isSplit ? /*#__PURE__*/_react["default"].createElement(actionIcons["delete"], {
      height: "18px"
    }) : /*#__PURE__*/_react["default"].createElement(actionIcons.split, {
      height: "18px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "action-toggle",
      message: isSplit ? 'tooltip.closePanel' : 'tooltip.switchToDualView'
    }));
  });

  SplitMapButton.displayName = 'SplitMapButton';
  return SplitMapButton;
}

Toggle3dButtonFactory.deps = [];

function Toggle3dButtonFactory() {
  var defaultActionIcons = {
    cube: _icons.Cube3d
  };
  /** @type {import('./map-control').Toggle3dButtonComponent} */

  var Toggle3dButton = /*#__PURE__*/_react["default"].memo(function (_ref8) {
    var dragRotate = _ref8.dragRotate,
        onTogglePerspective = _ref8.onTogglePerspective,
        _ref8$actionIcons = _ref8.actionIcons,
        actionIcons = _ref8$actionIcons === void 0 ? defaultActionIcons : _ref8$actionIcons;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      onClick: function onClick(e) {
        e.preventDefault();
        onTogglePerspective();
      },
      active: dragRotate,
      "data-tip": true,
      "data-for": "action-3d"
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.cube, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "action-3d",
      message: dragRotate ? 'tooltip.disable3DMap' : 'tooltip.3DMap'
    }));
  });

  Toggle3dButton.displayName = 'Toggle3dButton';
  return Toggle3dButton;
}

var StyledToolbar = (0, _styledComponents["default"])(_verticalToolbar["default"])(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 32px;\n"])));
MapDrawPanelFactory.deps = [];

function MapDrawPanelFactory() {
  var defaultActionIcons = {
    visible: _icons.EyeSeen,
    hidden: _icons.EyeUnseen,
    polygon: _icons.DrawPolygon,
    cursor: _icons.CursorClick,
    innerPolygon: _icons.Polygon,
    rectangle: _icons.Rectangle
  };
  /** @type {import('./map-control').MapDrawPanelComponent} */

  var MapDrawPanel = /*#__PURE__*/_react["default"].memo(function (_ref9) {
    var editor = _ref9.editor,
        isActive = _ref9.isActive,
        onToggleMenuPanel = _ref9.onToggleMenuPanel,
        onSetEditorMode = _ref9.onSetEditorMode,
        onToggleEditorVisibility = _ref9.onToggleEditorVisibility,
        _ref9$actionIcons = _ref9.actionIcons,
        actionIcons = _ref9$actionIcons === void 0 ? defaultActionIcons : _ref9$actionIcons;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-draw-controls",
      style: {
        position: 'relative'
      }
    }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: isActive
    }, /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "edit-feature",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.EDIT);
      },
      label: "toolbar.select",
      icon: actionIcons.cursor,
      active: editor.mode === _defaultSettings.EDITOR_MODES.EDIT
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-feature",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_POLYGON);
      },
      label: "toolbar.polygon",
      icon: actionIcons.innerPolygon,
      active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_POLYGON
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-rectangle",
      onClick: function onClick() {
        return onSetEditorMode(_defaultSettings.EDITOR_MODES.DRAW_RECTANGLE);
      },
      label: "toolbar.rectangle",
      icon: actionIcons.rectangle,
      active: editor.mode === _defaultSettings.EDITOR_MODES.DRAW_RECTANGLE
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "toggle-features",
      onClick: onToggleEditorVisibility,
      label: editor.visible ? 'toolbar.hide' : 'toolbar.show',
      icon: editor.visible ? actionIcons.visible : actionIcons.hidden
    })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleMenuPanel();
      },
      active: isActive,
      "data-tip": true,
      "data-for": "map-draw"
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.polygon, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "map-draw",
      message: "tooltip.DrawOnMap"
    })));
  });

  MapDrawPanel.displayName = 'MapDrawPanel';
  return MapDrawPanel;
}
/** @type {import('./map-control').LocalePanelComponent} */


var LocalePanel = /*#__PURE__*/_react["default"].memo(function (_ref10) {
  var availableLocales = _ref10.availableLocales,
      isActive = _ref10.isActive,
      onToggleMenuPanel = _ref10.onToggleMenuPanel,
      onSetLocale = _ref10.onSetLocale,
      activeLocale = _ref10.activeLocale;
  var onClickItem = (0, _react.useCallback)(function (locale) {
    onSetLocale(locale);
  }, [onSetLocale]);
  var onClickButton = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    onToggleMenuPanel();
  }, [onToggleMenuPanel]);
  var getLabel = (0, _react.useCallback)(function (locale) {
    return "toolbar.".concat(locale);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, isActive ? /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
    show: isActive
  }, availableLocales.map(function (locale) {
    return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      key: locale,
      onClick: function onClick() {
        return onClickItem(locale);
      },
      label: getLabel(locale),
      active: activeLocale === locale
    });
  })) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
    onClick: onClickButton,
    active: isActive,
    "data-tip": true,
    "data-for": "locale"
  }, activeLocale.toUpperCase(), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
    id: "locale",
    message: "tooltip.selectLocale"
  })));
});

LocalePanel.displayName = 'LocalePanel';

var LegendLogo = /*#__PURE__*/_react["default"].createElement(_logo["default"], {
  version: false,
  appName: "kepler.gl"
});

MapControlFactory.deps = [MapDrawPanelFactory, Toggle3dButtonFactory, SplitMapButtonFactory, MapLegendPanelFactory];

function MapControlFactory(MapDrawPanel, Toggle3dButton, SplitMapButton, MapLegendPanel) {
  var MapControl = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapControl, _Component);

    var _super = _createSuper(MapControl);

    function MapControl() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapControl);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerPanelItemsSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(function (l) {
          return l.config.isVisible;
        }).map(function (layer) {
          return {
            id: layer.id,
            name: layer.config.label,
            // layer
            isVisible: layersToRender[layer.id]
          };
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(MapControl, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            dragRotate = _this$props.dragRotate,
            layers = _this$props.layers,
            layersToRender = _this$props.layersToRender,
            isSplit = _this$props.isSplit,
            isExport = _this$props.isExport,
            mapIndex = _this$props.mapIndex,
            mapControls = _this$props.mapControls,
            onTogglePerspective = _this$props.onTogglePerspective,
            onToggleSplitMap = _this$props.onToggleSplitMap,
            onMapToggleLayer = _this$props.onMapToggleLayer,
            onToggleMapControl = _this$props.onToggleMapControl,
            editor = _this$props.editor,
            scale = _this$props.scale,
            readOnly = _this$props.readOnly,
            locale = _this$props.locale,
            top = _this$props.top,
            logoComponent = _this$props.logoComponent;
        var _mapControls$visibleL = mapControls.visibleLayers,
            visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
            _mapControls$mapLegen = mapControls.mapLegend,
            mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
            _mapControls$toggle3d = mapControls.toggle3d,
            toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
            _mapControls$splitMap = mapControls.splitMap,
            splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap,
            _mapControls$mapDraw = mapControls.mapDraw,
            mapDraw = _mapControls$mapDraw === void 0 ? {} : _mapControls$mapDraw,
            _mapControls$mapLocal = mapControls.mapLocale,
            mapLocale = _mapControls$mapLocal === void 0 ? {} : _mapControls$mapLocal;
        return /*#__PURE__*/_react["default"].createElement(StyledMapControl, {
          className: "map-control",
          top: top
        }, splitMap.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "split-map",
          key: 0
        }, /*#__PURE__*/_react["default"].createElement(SplitMapButton, {
          isSplit: isSplit,
          mapIndex: mapIndex,
          onToggleSplitMap: onToggleSplitMap
        })) : null, isSplit && visibleLayers.show && readOnly !== true ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "map-layers",
          key: 1
        }, /*#__PURE__*/_react["default"].createElement(LayerSelectorPanel, {
          items: this.layerPanelItemsSelector(this.props),
          onMapToggleLayer: onMapToggleLayer,
          isActive: visibleLayers.active,
          toggleMenuPanel: function toggleMenuPanel() {
            return onToggleMapControl('visibleLayers');
          }
        })) : null, toggle3d.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "toggle-3d",
          key: 2
        }, /*#__PURE__*/_react["default"].createElement(Toggle3dButton, {
          dragRotate: dragRotate,
          onTogglePerspective: onTogglePerspective
        })) : null, mapLegend.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          className: "show-legend",
          key: 3
        }, /*#__PURE__*/_react["default"].createElement(MapLegendPanel, {
          layers: layers.filter(function (l) {
            return layersToRender[l.id];
          }),
          scale: scale,
          isExport: isExport,
          onMapToggleLayer: onMapToggleLayer,
          isActive: mapLegend.active,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLegend');
          },
          disableClose: mapLegend.disableClose,
          logoComponent: logoComponent
        })) : null, mapDraw.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 4
        }, /*#__PURE__*/_react["default"].createElement(MapDrawPanel, {
          isActive: mapDraw.active && mapDraw.activeMapIndex === mapIndex,
          editor: editor,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapDraw');
          },
          onSetEditorMode: this.props.onSetEditorMode,
          onToggleEditorVisibility: this.props.onToggleEditorVisibility
        })) : null, mapLocale.show ? /*#__PURE__*/_react["default"].createElement(ActionPanel, {
          key: 5
        }, /*#__PURE__*/_react["default"].createElement(LocalePanel, {
          isActive: mapLocale.active,
          activeLocale: locale,
          availableLocales: Object.keys(_locales.LOCALE_CODES),
          onSetLocale: this.props.onSetLocale,
          onToggleMenuPanel: function onToggleMenuPanel() {
            return onToggleMapControl('mapLocale');
          },
          disableClose: mapLocale.disableClose
        })) : null);
      }
    }]);
    return MapControl;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapControl, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    dragRotate: _propTypes["default"].bool.isRequired,
    isSplit: _propTypes["default"].bool.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
    layersToRender: _propTypes["default"].object.isRequired,
    mapIndex: _propTypes["default"].number.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    onTogglePerspective: _propTypes["default"].func.isRequired,
    onToggleSplitMap: _propTypes["default"].func.isRequired,
    onToggleMapControl: _propTypes["default"].func.isRequired,
    onSetEditorMode: _propTypes["default"].func.isRequired,
    onToggleEditorVisibility: _propTypes["default"].func.isRequired,
    top: _propTypes["default"].number.isRequired,
    onSetLocale: _propTypes["default"].func.isRequired,
    locale: _propTypes["default"].string.isRequired,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    // optional
    readOnly: _propTypes["default"].bool,
    scale: _propTypes["default"].number,
    mapLayers: _propTypes["default"].object,
    editor: _propTypes["default"].object
  });
  (0, _defineProperty2["default"])(MapControl, "defaultProps", {
    isSplit: false,
    top: 0,
    mapIndex: 0,
    logoComponent: LegendLogo
  });
  MapControl.displayName = 'MapControl';
  return MapControl;
}

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJwYWRkaW5nIiwidG9wIiwiU3R5bGVkTWFwQ29udHJvbEFjdGlvbiIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbCIsIm1hcFBhbmVsQmFja2dyb3VuZENvbG9yIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiZHJvcGRvd25TY3JvbGxCYXIiLCJ3aWR0aCIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciIsIm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yIiwidGl0bGVUZXh0Q29sb3IiLCJBY3Rpb25QYW5lbCIsImNoaWxkcmVuIiwiZGlzcGxheU5hbWUiLCJNYXBDb250cm9sVG9vbHRpcCIsIlJlYWN0IiwibWVtbyIsImlkIiwibWVzc2FnZSIsIk1hcExlZ2VuZFRvb2x0aXAiLCJMYXllclNlbGVjdG9yUGFuZWwiLCJpdGVtcyIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJpc0FjdGl2ZSIsInRvZ2dsZU1lbnVQYW5lbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1hcENvbnRyb2xQYW5lbCIsImhlYWRlciIsIm9uQ2xpY2siLCJzY2FsZSIsImlzRXhwb3J0IiwiZGlzYWJsZUNsb3NlIiwibG9nb0NvbXBvbmVudCIsInRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInZlcnRpY2FsQWxpZ24iLCJNYXBMZWdlbmRQYW5lbEZhY3RvcnkiLCJkZXBzIiwiZGVmYXVsdEFjdGlvbkljb25zIiwibGVnZW5kIiwiTGVnZW5kIiwiTWFwTGVnZW5kUGFuZWwiLCJsYXllcnMiLCJvblRvZ2dsZU1lbnVQYW5lbCIsImFjdGlvbkljb25zIiwiU3BsaXRNYXBCdXR0b25GYWN0b3J5IiwiRGVsZXRlIiwic3BsaXQiLCJTcGxpdCIsIlNwbGl0TWFwQnV0dG9uIiwiaXNTcGxpdCIsIm1hcEluZGV4Iiwib25Ub2dnbGVTcGxpdE1hcCIsInVuZGVmaW5lZCIsIlRvZ2dsZTNkQnV0dG9uRmFjdG9yeSIsImN1YmUiLCJDdWJlM2QiLCJUb2dnbGUzZEJ1dHRvbiIsImRyYWdSb3RhdGUiLCJvblRvZ2dsZVBlcnNwZWN0aXZlIiwiU3R5bGVkVG9vbGJhciIsIlZlcnRpY2FsVG9vbGJhciIsIk1hcERyYXdQYW5lbEZhY3RvcnkiLCJ2aXNpYmxlIiwiRXllU2VlbiIsImhpZGRlbiIsIkV5ZVVuc2VlbiIsInBvbHlnb24iLCJEcmF3UG9seWdvbiIsImN1cnNvciIsIkN1cnNvckNsaWNrIiwiaW5uZXJQb2x5Z29uIiwiUG9seWdvbiIsInJlY3RhbmdsZSIsIlJlY3RhbmdsZSIsIk1hcERyYXdQYW5lbCIsImVkaXRvciIsIm9uU2V0RWRpdG9yTW9kZSIsIm9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsInBvc2l0aW9uIiwiRURJVE9SX01PREVTIiwiRURJVCIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJEUkFXX1JFQ1RBTkdMRSIsIkxvY2FsZVBhbmVsIiwiYXZhaWxhYmxlTG9jYWxlcyIsIm9uU2V0TG9jYWxlIiwiYWN0aXZlTG9jYWxlIiwib25DbGlja0l0ZW0iLCJsb2NhbGUiLCJvbkNsaWNrQnV0dG9uIiwiZ2V0TGFiZWwiLCJtYXAiLCJ0b1VwcGVyQ2FzZSIsIkxlZ2VuZExvZ28iLCJNYXBDb250cm9sRmFjdG9yeSIsIk1hcENvbnRyb2wiLCJsYXllcnNUb1JlbmRlciIsImxheWVyU2VsZWN0b3IiLCJsYXllcnNUb1JlbmRlclNlbGVjdG9yIiwiZmlsdGVyIiwibCIsImNvbmZpZyIsImlzVmlzaWJsZSIsImxheWVyIiwibmFtZSIsImxhYmVsIiwibWFwQ29udHJvbHMiLCJvblRvZ2dsZU1hcENvbnRyb2wiLCJyZWFkT25seSIsInZpc2libGVMYXllcnMiLCJtYXBMZWdlbmQiLCJ0b2dnbGUzZCIsInNwbGl0TWFwIiwibWFwRHJhdyIsIm1hcExvY2FsZSIsInNob3ciLCJsYXllclBhbmVsSXRlbXNTZWxlY3RvciIsImFjdGl2ZSIsImFjdGl2ZU1hcEluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIkxPQ0FMRV9DT0RFUyIsIkNvbXBvbmVudCIsImRhdGFzZXRzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheU9mIiwibnVtYmVyIiwiZnVuYyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJtYXBMYXllcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBY0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsR0FBVix3TEFFVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQVosQ0FBdUJDLE9BQTNCO0FBQUEsQ0FGSSxFQUlOLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNJLEdBQU4sSUFBYSxDQUFqQjtBQUFBLENBSkMsQ0FBdEI7O0FBUUEsSUFBTUMsc0JBQXNCLEdBQUdQLDZCQUFPQyxHQUFWLDZKQUE1Qjs7QUFNQSxJQUFNTyxxQkFBcUIsR0FBR1IsNkJBQU9DLEdBQVYseUxBQ0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSx1QkFBaEI7QUFBQSxDQURBLENBQTNCOztBQVNBLElBQU1DLDRCQUE0QixHQUFHViw2QkFBT0MsR0FBUCxDQUFXVSxLQUFYLENBQWlCO0FBQ3BEQyxFQUFBQSxTQUFTLEVBQUU7QUFEeUMsQ0FBakIsQ0FBSCx5TEFHOUIsVUFBQVYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxpQkFBaEI7QUFBQSxDQUh5QixFQU1uQixVQUFBWCxLQUFLO0FB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YUFBYSxFQUFFOEYsc0JBQVVRLFNBQVYsQ0FBb0IsQ0FBQ1Isc0JBQVVTLE9BQVgsRUFBb0JULHNCQUFVTSxJQUE5QixDQUFwQixDQWhCRTtBQWtCakI7QUFDQXRCLElBQUFBLFFBQVEsRUFBRWdCLHNCQUFVRyxJQW5CSDtBQW9CakJwRyxJQUFBQSxLQUFLLEVBQUVpRyxzQkFBVUssTUFwQkE7QUFxQmpCSyxJQUFBQSxTQUFTLEVBQUVWLHNCQUFVQyxNQXJCSjtBQXNCakJuRCxJQUFBQSxNQUFNLEVBQUVrRCxzQkFBVUM7QUF0QkQsR0FGa0U7QUFBQSxtQ0FDakY5QixVQURpRixrQkEyQi9EO0FBQ3BCL0MsSUFBQUEsT0FBTyxFQUFFLEtBRFc7QUFFcEJwRCxJQUFBQSxHQUFHLEVBQUUsQ0FGZTtBQUdwQnFELElBQUFBLFFBQVEsRUFBRSxDQUhVO0FBSXBCbkIsSUFBQUEsYUFBYSxFQUFFK0Q7QUFKSyxHQTNCK0Q7QUE2SnZGRSxFQUFBQSxVQUFVLENBQUNyRixXQUFYLEdBQXlCLFlBQXpCO0FBRUEsU0FBT3FGLFVBQVA7QUFDRDs7ZUFFY0QsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHtJY29uUm91bmRTbWFsbCwgTWFwQ29udHJvbEJ1dHRvbiwgVG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbWFwLWxheWVyLXNlbGVjdG9yJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQge1xuICBDbG9zZSxcbiAgQ3ViZTNkLFxuICBDdXJzb3JDbGljayxcbiAgRGVsZXRlLFxuICBEcmF3UG9seWdvbixcbiAgRXllU2VlbixcbiAgRXllVW5zZWVuLFxuICBMYXllcnMsXG4gIExlZ2VuZCxcbiAgUG9seWdvbixcbiAgUmVjdGFuZ2xlLFxuICBTcGxpdFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgVmVydGljYWxUb29sYmFyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3ZlcnRpY2FsLXRvb2xiYXInO1xuaW1wb3J0IFRvb2xiYXJJdGVtIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3Rvb2xiYXItaXRlbSc7XG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ2xvY2FsaXphdGlvbi9sb2NhbGVzJztcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbCA9IHN0eWxlZC5kaXZgXG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wucGFkZGluZ31weDtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wIHx8IDB9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2xfX3BhbmVsLWNvbnRlbnQnXG59KWBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn07XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wud2lkdGh9cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuYDtcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ21hcC1jb250cm9sX19wYW5lbC1oZWFkZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yfTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuYDtcblxuY29uc3QgQWN0aW9uUGFuZWwgPSAoe2NsYXNzTmFtZSA9ICcnLCBjaGlsZHJlbn0pID0+IChcbiAgPFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xBY3Rpb24+XG4pO1xuXG5BY3Rpb25QYW5lbC5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbCc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL21hcC1jb250cm9sJykuTWFwQ29udHJvbFRvb2x0aXBDb21wb25lbnR9ICovXG5jb25zdCBNYXBDb250cm9sVG9vbHRpcCA9IFJlYWN0Lm1lbW8oKHtpZCwgbWVzc2FnZX0pID0+IChcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgIDxzcGFuPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21lc3NhZ2V9IC8+XG4gICAgPC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pKTtcblxuTWFwQ29udHJvbFRvb2x0aXAuZGlzcGxheU5hbWUgPSAnTWFwQ29udHJvbFRvb2x0aXAnO1xuXG5jb25zdCBNYXBMZWdlbmRUb29sdGlwID0gKHtpZCwgbWVzc2FnZX0pID0+IChcbiAgPFRvb2x0aXAgaWQ9e2lkfSBwbGFjZT1cImxlZnRcIiBlZmZlY3Q9XCJzb2xpZFwiPlxuICAgIDxzcGFuPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21lc3NhZ2V9IC8+XG4gICAgPC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9tYXAtY29udHJvbCcpLkxheWVyU2VsZWN0b3JQYW5lbENvbXBvbmVudH0gKi9cbmNvbnN0IExheWVyU2VsZWN0b3JQYW5lbCA9IFJlYWN0Lm1lbW8oKHtpdGVtcywgb25NYXBUb2dnbGVMYXllciwgaXNBY3RpdmUsIHRvZ2dsZU1lbnVQYW5lbH0pID0+XG4gICFpc0FjdGl2ZSA/IChcbiAgICAoPE1hcENvbnRyb2xCdXR0b25cbiAgICAgIGtleT17MX1cbiAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiB0b2dnbGUtbGF5ZXJcIlxuICAgICAgZGF0YS10aXBcbiAgICAgIGRhdGEtZm9yPVwidG9nZ2xlLWxheWVyXCJcbiAgICA+XG4gICAgICA8TGF5ZXJzIGhlaWdodD1cIjIycHhcIiAvPlxuICAgICAgPE1hcENvbnRyb2xUb29sdGlwXG4gICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcbiAgICAgICAgbWVzc2FnZT17aXNBY3RpdmUgPyAndG9vbHRpcC5oaWRlTGF5ZXJQYW5lbCcgOiAndG9vbHRpcC5zaG93TGF5ZXJQYW5lbCd9XG4gICAgICAvPlxuICAgIDwvTWFwQ29udHJvbEJ1dHRvbj4pXG4gICkgOiAoXG4gICAgKDxNYXBDb250cm9sUGFuZWwgaGVhZGVyPVwiaGVhZGVyLnZpc2libGVMYXllcnNcIiBvbkNsaWNrPXt0b2dnbGVNZW51UGFuZWx9PlxuICAgICAgPE1hcExheWVyU2VsZWN0b3IgbGF5ZXJzPXtpdGVtc30gb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn0gLz5cbiAgICA8L01hcENvbnRyb2xQYW5lbD4pXG4gIClcbik7XG5cbkxheWVyU2VsZWN0b3JQYW5lbC5kaXNwbGF5TmFtZSA9ICdMYXllclNlbGVjdG9yUGFuZWwnO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9tYXAtY29udHJvbCcpLk1hcENvbnRyb2xQYW5lbENvbXBvbmVudH0gKi9cbmNvbnN0IE1hcENvbnRyb2xQYW5lbCA9IFJlYWN0Lm1lbW8oXG4gICh7Y2hpbGRyZW4sIGhlYWRlciwgb25DbGljaywgc2NhbGUgPSAxLCBpc0V4cG9ydCwgZGlzYWJsZUNsb3NlID0gZmFsc2UsIGxvZ29Db21wb25lbnR9KSA9PiAoXG4gICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbFxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pYCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4J1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgICAgICB7aXNFeHBvcnQgJiYgbG9nb0NvbXBvbmVudCA/IChcbiAgICAgICAgICBsb2dvQ29tcG9uZW50XG4gICAgICAgICkgOiBoZWFkZXIgPyAoXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2hlYWRlcn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7aXNFeHBvcnQgPyBudWxsIDogKFxuICAgICAgICAgIDxJY29uUm91bmRTbWFsbCBjbGFzc05hbWU9XCJjbG9zZS1tYXAtY29udHJvbC1pdGVtXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgPC9JY29uUm91bmRTbWFsbD5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudD5cbiAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbD5cbiAgKVxuKTtcblxuTWFwQ29udHJvbFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XG5cbk1hcExlZ2VuZFBhbmVsRmFjdG9yeS5kZXBzID0gW107XG5leHBvcnQgZnVuY3Rpb24gTWFwTGVnZW5kUGFuZWxGYWN0b3J5KCkge1xuICBjb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gICAgbGVnZW5kOiBMZWdlbmRcbiAgfTtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vbWFwLWNvbnRyb2wnKS5NYXBMZWdlbmRQYW5lbENvbXBvbmVudH0gKi9cbiAgY29uc3QgTWFwTGVnZW5kUGFuZWwgPSAoe1xuICAgIGxheWVycyxcbiAgICBpc0FjdGl2ZSxcbiAgICBzY2FsZSxcbiAgICBvblRvZ2dsZU1lbnVQYW5lbCxcbiAgICBpc0V4cG9ydCxcbiAgICBkaXNhYmxlQ2xvc2UsXG4gICAgbG9nb0NvbXBvbmVudCxcbiAgICBhY3Rpb25JY29ucyA9IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9KSA9PlxuICAgICFpc0FjdGl2ZSA/IChcbiAgICAgICg8TWFwQ29udHJvbEJ1dHRvblxuICAgICAgICBrZXk9ezJ9XG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPVwic2hvdy1sZWdlbmRcIlxuICAgICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gc2hvdy1sZWdlbmRcIlxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWwoKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGFjdGlvbkljb25zLmxlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgPE1hcExlZ2VuZFRvb2x0aXAgaWQ9XCJzaG93LWxlZ2VuZFwiIG1lc3NhZ2U9eyd0b29sdGlwLnNob3dMZWdlbmQnfSAvPlxuICAgICAgPC9NYXBDb250cm9sQnV0dG9uPilcbiAgICApIDogKFxuICAgICAgKDxNYXBDb250cm9sUGFuZWxcbiAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICBoZWFkZXI9eydoZWFkZXIubGF5ZXJMZWdlbmQnfVxuICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZU1lbnVQYW5lbH1cbiAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICBkaXNhYmxlQ2xvc2U9e2Rpc2FibGVDbG9zZX1cbiAgICAgICAgbG9nb0NvbXBvbmVudD17bG9nb0NvbXBvbmVudH1cbiAgICAgID5cbiAgICAgICAgPE1hcExlZ2VuZCBsYXllcnM9e2xheWVyc30gLz5cbiAgICAgIDwvTWFwQ29udHJvbFBhbmVsPilcbiAgICApO1xuXG4gIE1hcExlZ2VuZFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xQYW5lbCc7XG4gIHJldHVybiBNYXBMZWdlbmRQYW5lbDtcbn1cblxuU3BsaXRNYXBCdXR0b25GYWN0b3J5LmRlcHMgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBTcGxpdE1hcEJ1dHRvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgICBkZWxldGU6IERlbGV0ZSxcbiAgICBzcGxpdDogU3BsaXRcbiAgfTtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vbWFwLWNvbnRyb2wnKS5TcGxpdE1hcEJ1dHRvbkNvbXBvbmVudH0gKi9cbiAgY29uc3QgU3BsaXRNYXBCdXR0b24gPSBSZWFjdC5tZW1vKFxuICAgICh7aXNTcGxpdCwgbWFwSW5kZXgsIG9uVG9nZ2xlU3BsaXRNYXAsIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zfSkgPT4gKFxuICAgICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgICAgYWN0aXZlPXtpc1NwbGl0fVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcChpc1NwbGl0ID8gbWFwSW5kZXggOiB1bmRlZmluZWQpO1xuICAgICAgICB9fVxuICAgICAgICBrZXk9e2BzcGxpdC0ke2lzU3BsaXR9YH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtYXAtY29udHJvbC1idXR0b24nLCAnc3BsaXQtbWFwJywgeydjbG9zZS1tYXAnOiBpc1NwbGl0fSl9XG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPVwiYWN0aW9uLXRvZ2dsZVwiXG4gICAgICA+XG4gICAgICAgIHtpc1NwbGl0ID8gPGFjdGlvbkljb25zLmRlbGV0ZSBoZWlnaHQ9XCIxOHB4XCIgLz4gOiA8YWN0aW9uSWNvbnMuc3BsaXQgaGVpZ2h0PVwiMThweFwiIC8+fVxuICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXBcbiAgICAgICAgICBpZD1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgICAgIG1lc3NhZ2U9e2lzU3BsaXQgPyAndG9vbHRpcC5jbG9zZVBhbmVsJyA6ICd0b29sdGlwLnN3aXRjaFRvRHVhbFZpZXcnfVxuICAgICAgICAvPlxuICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgIClcbiAgKTtcblxuICBTcGxpdE1hcEJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdTcGxpdE1hcEJ1dHRvbic7XG4gIHJldHVybiBTcGxpdE1hcEJ1dHRvbjtcbn1cblxuVG9nZ2xlM2RCdXR0b25GYWN0b3J5LmRlcHMgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBUb2dnbGUzZEJ1dHRvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgICBjdWJlOiBDdWJlM2RcbiAgfTtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vbWFwLWNvbnRyb2wnKS5Ub2dnbGUzZEJ1dHRvbkNvbXBvbmVudH0gKi9cbiAgY29uc3QgVG9nZ2xlM2RCdXR0b24gPSBSZWFjdC5tZW1vKFxuICAgICh7ZHJhZ1JvdGF0ZSwgb25Ub2dnbGVQZXJzcGVjdGl2ZSwgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnN9KSA9PiAoXG4gICAgICA8TWFwQ29udHJvbEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgb25Ub2dnbGVQZXJzcGVjdGl2ZSgpO1xuICAgICAgICB9fVxuICAgICAgICBhY3RpdmU9e2RyYWdSb3RhdGV9XG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPVwiYWN0aW9uLTNkXCJcbiAgICAgID5cbiAgICAgICAgPGFjdGlvbkljb25zLmN1YmUgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICAgIDxNYXBDb250cm9sVG9vbHRpcFxuICAgICAgICAgIGlkPVwiYWN0aW9uLTNkXCJcbiAgICAgICAgICBtZXNzYWdlPXtkcmFnUm90YXRlID8gJ3Rvb2x0aXAuZGlzYWJsZTNETWFwJyA6ICd0b29sdGlwLjNETWFwJ31cbiAgICAgICAgLz5cbiAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICApXG4gICk7XG5cbiAgVG9nZ2xlM2RCdXR0b24uZGlzcGxheU5hbWUgPSAnVG9nZ2xlM2RCdXR0b24nO1xuICByZXR1cm4gVG9nZ2xlM2RCdXR0b247XG59XG5jb25zdCBTdHlsZWRUb29sYmFyID0gc3R5bGVkKFZlcnRpY2FsVG9vbGJhcilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMycHg7XG5gO1xuXG5NYXBEcmF3UGFuZWxGYWN0b3J5LmRlcHMgPSBbXTtcbmV4cG9ydCBmdW5jdGlvbiBNYXBEcmF3UGFuZWxGYWN0b3J5KCkge1xuICBjb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gICAgdmlzaWJsZTogRXllU2VlbixcbiAgICBoaWRkZW46IEV5ZVVuc2VlbixcbiAgICBwb2x5Z29uOiBEcmF3UG9seWdvbixcbiAgICBjdXJzb3I6IEN1cnNvckNsaWNrLFxuICAgIGlubmVyUG9seWdvbjogUG9seWdvbixcbiAgICByZWN0YW5nbGU6IFJlY3RhbmdsZVxuICB9O1xuICAvKiogQHR5cGUge2ltcG9ydCgnLi9tYXAtY29udHJvbCcpLk1hcERyYXdQYW5lbENvbXBvbmVudH0gKi9cbiAgY29uc3QgTWFwRHJhd1BhbmVsID0gUmVhY3QubWVtbyhcbiAgICAoe1xuICAgICAgZWRpdG9yLFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBvblRvZ2dsZU1lbnVQYW5lbCxcbiAgICAgIG9uU2V0RWRpdG9yTW9kZSxcbiAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSxcbiAgICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zXG4gICAgfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtZHJhdy1jb250cm9sc1wiIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgICA8U3R5bGVkVG9vbGJhciBzaG93PXtpc0FjdGl2ZX0+XG4gICAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtZmVhdHVyZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZXRFZGl0b3JNb2RlKEVESVRPUl9NT0RFUy5FRElUKX1cbiAgICAgICAgICAgICAgICBsYWJlbD1cInRvb2xiYXIuc2VsZWN0XCJcbiAgICAgICAgICAgICAgICBpY29uPXthY3Rpb25JY29ucy5jdXJzb3J9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkVESVR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyYXctZmVhdHVyZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZXRFZGl0b3JNb2RlKEVESVRPUl9NT0RFUy5EUkFXX1BPTFlHT04pfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5wb2x5Z29uXCJcbiAgICAgICAgICAgICAgICBpY29uPXthY3Rpb25JY29ucy5pbm5lclBvbHlnb259XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2V0RWRpdG9yTW9kZShFRElUT1JfTU9ERVMuRFJBV19SRUNUQU5HTEUpfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5yZWN0YW5nbGVcIlxuICAgICAgICAgICAgICAgIGljb249e2FjdGlvbkljb25zLnJlY3RhbmdsZX1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19SRUNUQU5HTEV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvZ2dsZS1mZWF0dXJlc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5fVxuICAgICAgICAgICAgICAgIGxhYmVsPXtlZGl0b3IudmlzaWJsZSA/ICd0b29sYmFyLmhpZGUnIDogJ3Rvb2xiYXIuc2hvdyd9XG4gICAgICAgICAgICAgICAgaWNvbj17ZWRpdG9yLnZpc2libGUgPyBhY3Rpb25JY29ucy52aXNpYmxlIDogYWN0aW9uSWNvbnMuaGlkZGVufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TdHlsZWRUb29sYmFyPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgZGF0YS1mb3I9XCJtYXAtZHJhd1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFjdGlvbkljb25zLnBvbHlnb24gaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXAgaWQ9XCJtYXAtZHJhd1wiIG1lc3NhZ2U9XCJ0b29sdGlwLkRyYXdPbk1hcFwiIC8+XG4gICAgICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIE1hcERyYXdQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBEcmF3UGFuZWwnO1xuICByZXR1cm4gTWFwRHJhd1BhbmVsO1xufVxuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9tYXAtY29udHJvbCcpLkxvY2FsZVBhbmVsQ29tcG9uZW50fSAqL1xuY29uc3QgTG9jYWxlUGFuZWwgPSBSZWFjdC5tZW1vKFxuICAoe2F2YWlsYWJsZUxvY2FsZXMsIGlzQWN0aXZlLCBvblRvZ2dsZU1lbnVQYW5lbCwgb25TZXRMb2NhbGUsIGFjdGl2ZUxvY2FsZX0pID0+IHtcbiAgICBjb25zdCBvbkNsaWNrSXRlbSA9IHVzZUNhbGxiYWNrKFxuICAgICAgbG9jYWxlID0+IHtcbiAgICAgICAgb25TZXRMb2NhbGUobG9jYWxlKTtcbiAgICAgIH0sXG4gICAgICBbb25TZXRMb2NhbGVdXG4gICAgKTtcblxuICAgIGNvbnN0IG9uQ2xpY2tCdXR0b24gPSB1c2VDYWxsYmFjayhcbiAgICAgIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsKCk7XG4gICAgICB9LFxuICAgICAgW29uVG9nZ2xlTWVudVBhbmVsXVxuICAgICk7XG4gICAgY29uc3QgZ2V0TGFiZWwgPSB1c2VDYWxsYmFjayhsb2NhbGUgPT4gYHRvb2xiYXIuJHtsb2NhbGV9YCwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICB7aXNBY3RpdmUgPyAoXG4gICAgICAgICAgPFN0eWxlZFRvb2xiYXIgc2hvdz17aXNBY3RpdmV9PlxuICAgICAgICAgICAge2F2YWlsYWJsZUxvY2FsZXMubWFwKGxvY2FsZSA9PiAoXG4gICAgICAgICAgICAgIDxUb29sYmFySXRlbVxuICAgICAgICAgICAgICAgIGtleT17bG9jYWxlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJdGVtKGxvY2FsZSl9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2dldExhYmVsKGxvY2FsZSl9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVMb2NhbGUgPT09IGxvY2FsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3R5bGVkVG9vbGJhcj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxNYXBDb250cm9sQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259IGFjdGl2ZT17aXNBY3RpdmV9IGRhdGEtdGlwIGRhdGEtZm9yPVwibG9jYWxlXCI+XG4gICAgICAgICAge2FjdGl2ZUxvY2FsZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cImxvY2FsZVwiIG1lc3NhZ2U9XCJ0b29sdGlwLnNlbGVjdExvY2FsZVwiIC8+XG4gICAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbik7XG5cbkxvY2FsZVBhbmVsLmRpc3BsYXlOYW1lID0gJ0xvY2FsZVBhbmVsJztcblxuY29uc3QgTGVnZW5kTG9nbyA9IDxLZXBsZXJHbExvZ28gdmVyc2lvbj17ZmFsc2V9IGFwcE5hbWU9XCJrZXBsZXIuZ2xcIiAvPjtcbk1hcENvbnRyb2xGYWN0b3J5LmRlcHMgPSBbXG4gIE1hcERyYXdQYW5lbEZhY3RvcnksXG4gIFRvZ2dsZTNkQnV0dG9uRmFjdG9yeSxcbiAgU3BsaXRNYXBCdXR0b25GYWN0b3J5LFxuICBNYXBMZWdlbmRQYW5lbEZhY3Rvcnlcbl07XG5mdW5jdGlvbiBNYXBDb250cm9sRmFjdG9yeShNYXBEcmF3UGFuZWwsIFRvZ2dsZTNkQnV0dG9uLCBTcGxpdE1hcEJ1dHRvbiwgTWFwTGVnZW5kUGFuZWwpIHtcbiAgY2xhc3MgTWFwQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBkcmFnUm90YXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgaXNTcGxpdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgICBsYXllcnNUb1JlbmRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwSW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25Ub2dnbGVTcGxpdE1hcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uU2V0RWRpdG9yTW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgb25TZXRMb2NhbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBsb2NhbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxvZ29Db21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgICAvLyBvcHRpb25hbFxuICAgICAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBlZGl0b3I6IFByb3BUeXBlcy5vYmplY3RcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGlzU3BsaXQ6IGZhbHNlLFxuICAgICAgdG9wOiAwLFxuICAgICAgbWFwSW5kZXg6IDAsXG4gICAgICBsb2dvQ29tcG9uZW50OiBMZWdlbmRMb2dvXG4gICAgfTtcblxuICAgIGxheWVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllcnM7XG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyc1RvUmVuZGVyO1xuICAgIGxheWVyUGFuZWxJdGVtc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmxheWVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXG4gICAgICAobGF5ZXJzLCBsYXllcnNUb1JlbmRlcikgPT5cbiAgICAgICAgbGF5ZXJzXG4gICAgICAgICAgLmZpbHRlcihsID0+IGwuY29uZmlnLmlzVmlzaWJsZSlcbiAgICAgICAgICAubWFwKGxheWVyID0+ICh7XG4gICAgICAgICAgICBpZDogbGF5ZXIuaWQsXG4gICAgICAgICAgICBuYW1lOiBsYXllci5jb25maWcubGFiZWwsXG4gICAgICAgICAgICAvLyBsYXllclxuICAgICAgICAgICAgaXNWaXNpYmxlOiBsYXllcnNUb1JlbmRlcltsYXllci5pZF1cbiAgICAgICAgICB9KSlcbiAgICApO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkcmFnUm90YXRlLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyc1RvUmVuZGVyLFxuICAgICAgICBpc1NwbGl0LFxuICAgICAgICBpc0V4cG9ydCxcbiAgICAgICAgbWFwSW5kZXgsXG4gICAgICAgIG1hcENvbnRyb2xzLFxuICAgICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlLFxuICAgICAgICBvblRvZ2dsZVNwbGl0TWFwLFxuICAgICAgICBvbk1hcFRvZ2dsZUxheWVyLFxuICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2wsXG4gICAgICAgIGVkaXRvcixcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHJlYWRPbmx5LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHRvcCxcbiAgICAgICAgbG9nb0NvbXBvbmVudFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlzaWJsZUxheWVycyA9IHt9LFxuICAgICAgICBtYXBMZWdlbmQgPSB7fSxcbiAgICAgICAgdG9nZ2xlM2QgPSB7fSxcbiAgICAgICAgc3BsaXRNYXAgPSB7fSxcbiAgICAgICAgbWFwRHJhdyA9IHt9LFxuICAgICAgICBtYXBMb2NhbGUgPSB7fVxuICAgICAgfSA9IG1hcENvbnRyb2xzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTWFwQ29udHJvbCBjbGFzc05hbWU9XCJtYXAtY29udHJvbFwiIHRvcD17dG9wfT5cbiAgICAgICAgICB7LyogU3BsaXQgTWFwICovfVxuICAgICAgICAgIHtzcGxpdE1hcC5zaG93ICYmIHJlYWRPbmx5ICE9PSB0cnVlID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGNsYXNzTmFtZT1cInNwbGl0LW1hcFwiIGtleT17MH0+XG4gICAgICAgICAgICAgIDxTcGxpdE1hcEJ1dHRvblxuICAgICAgICAgICAgICAgIGlzU3BsaXQ9e2lzU3BsaXR9XG4gICAgICAgICAgICAgICAgbWFwSW5kZXg9e21hcEluZGV4fVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e29uVG9nZ2xlU3BsaXRNYXB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIE1hcCBMYXllcnMgKi99XG4gICAgICAgICAge2lzU3BsaXQgJiYgdmlzaWJsZUxheWVycy5zaG93ICYmIHJlYWRPbmx5ICE9PSB0cnVlID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGNsYXNzTmFtZT1cIm1hcC1sYXllcnNcIiBrZXk9ezF9PlxuICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RvclBhbmVsXG4gICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMubGF5ZXJQYW5lbEl0ZW1zU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17dmlzaWJsZUxheWVycy5hY3RpdmV9XG4gICAgICAgICAgICAgICAgdG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ3Zpc2libGVMYXllcnMnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogM0QgTWFwICovfVxuICAgICAgICAgIHt0b2dnbGUzZC5zaG93ID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGNsYXNzTmFtZT1cInRvZ2dsZS0zZFwiIGtleT17Mn0+XG4gICAgICAgICAgICAgIDxUb2dnbGUzZEJ1dHRvbiBkcmFnUm90YXRlPXtkcmFnUm90YXRlfSBvblRvZ2dsZVBlcnNwZWN0aXZlPXtvblRvZ2dsZVBlcnNwZWN0aXZlfSAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHsvKiBNYXAgTGVnZW5kICovfVxuICAgICAgICAgIHttYXBMZWdlbmQuc2hvdyA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJzaG93LWxlZ2VuZFwiIGtleT17M30+XG4gICAgICAgICAgICAgIDxNYXBMZWdlbmRQYW5lbFxuICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzLmZpbHRlcihsID0+IGxheWVyc1RvUmVuZGVyW2wuaWRdKX1cbiAgICAgICAgICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e21hcExlZ2VuZC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwTGVnZW5kJyl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlPXttYXBMZWdlbmQuZGlzYWJsZUNsb3NlfVxuICAgICAgICAgICAgICAgIGxvZ29Db21wb25lbnQ9e2xvZ29Db21wb25lbnR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge21hcERyYXcuc2hvdyA/IChcbiAgICAgICAgICAgIDxBY3Rpb25QYW5lbCBrZXk9ezR9PlxuICAgICAgICAgICAgICA8TWFwRHJhd1BhbmVsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e21hcERyYXcuYWN0aXZlICYmIG1hcERyYXcuYWN0aXZlTWFwSW5kZXggPT09IG1hcEluZGV4fVxuICAgICAgICAgICAgICAgIGVkaXRvcj17ZWRpdG9yfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlTWVudVBhbmVsPXsoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcERyYXcnKX1cbiAgICAgICAgICAgICAgICBvblNldEVkaXRvck1vZGU9e3RoaXMucHJvcHMub25TZXRFZGl0b3JNb2RlfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eT17dGhpcy5wcm9wcy5vblRvZ2dsZUVkaXRvclZpc2liaWxpdHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge21hcExvY2FsZS5zaG93ID8gKFxuICAgICAgICAgICAgPEFjdGlvblBhbmVsIGtleT17NX0+XG4gICAgICAgICAgICAgIDxMb2NhbGVQYW5lbFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBMb2NhbGUuYWN0aXZlfVxuICAgICAgICAgICAgICAgIGFjdGl2ZUxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZUxvY2FsZXM9e09iamVjdC5rZXlzKExPQ0FMRV9DT0RFUyl9XG4gICAgICAgICAgICAgICAgb25TZXRMb2NhbGU9e3RoaXMucHJvcHMub25TZXRMb2NhbGV9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwTG9jYWxlJyl9XG4gICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlPXttYXBMb2NhbGUuZGlzYWJsZUNsb3NlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRNYXBDb250cm9sPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBNYXBDb250cm9sLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2wnO1xuXG4gIHJldHVybiBNYXBDb250cm9sO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBDb250cm9sRmFjdG9yeTtcbiJdfQ==