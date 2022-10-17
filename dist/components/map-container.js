"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _react2 = _interopRequireDefault(require("@deck.gl/react"));

var _reselect = require("reselect");

var _viewportMercatorProject = _interopRequireDefault(require("viewport-mercator-project"));

var _notificationsUtils = require("../utils/notifications-utils");

var _mapPopover = _interopRequireDefault(require("./map/map-popover"));

var _mapControl = _interopRequireDefault(require("./map/map-control"));

var _styledComponents = require("./common/styled-components");

var _editor = _interopRequireDefault(require("./editor/editor"));

var _mapboxUtils = require("../layers/mapbox-utils");

var _glUtils = require("../utils/gl-utils");

var _mapboxUtils2 = require("../utils/map-style-utils/mapbox-utils");

var _layerUtils = require("../utils/layer-utils");

var _dBuildingLayer = _interopRequireDefault(require("../deckgl-layers/3d-building-layer/3d-building-layer"));

var _defaultSettings = require("../constants/default-settings");

var _baseLayer = require("../layers/base-layer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @type {{[key: string]: React.CSSProperties}} */
var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative'
  },
  top: {
    position: 'absolute',
    top: '0px',
    pointerEvents: 'none'
  }
};
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';
var TRANSITION_DURATION = 0;

var Attribution = function Attribution() {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledAttrbution, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-logo"
  }, "Basemap by:", /*#__PURE__*/_react["default"].createElement("a", {
    className: "mapboxgl-ctrl-logo",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.mapbox.com/",
    "aria-label": "Mapbox logo"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-link"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://kepler.gl/policy/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 kepler.gl |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.mapbox.com/about/maps/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 Mapbox |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://www.openstreetmap.org/copyright",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\xA9 OpenStreetMap |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.mapbox.com/map-feedback/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Improve this map"))));
};

MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"], _editor["default"]];

function MapContainerFactory(MapPopover, MapControl, Editor) {
  var MapContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapContainer, _Component);

    var _super = _createSuper(MapContainer);

    function MapContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerDataSelector", function (props) {
        return props.layerData;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", function (props) {
        return props.mapLayers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerOrderSelector", function (props) {
        return props.layerOrder;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, // {[id]: true \ false}
      function (layers, layerData, mapLayers) {
        return layers.reduce(function (accu, layer, idx) {
          return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, layer.id, layer.id !== _defaultSettings.GEOCODER_LAYER_ID && layer.shouldRenderLayer(layerData[idx]) && _this._isVisibleMapLayer(layer, mapLayers)));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filtersSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "polygonFilters", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _mapboxUtils.generateMapboxLayers));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerSetDomain", function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.layers[idx], {
          colorDomain: colorDomain
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMapToggleLayer", function (layerId) {
        var _this$props = _this.props,
            _this$props$index = _this$props.index,
            mapIndex = _this$props$index === void 0 ? 0 : _this$props$index,
            visStateActions = _this$props.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapboxStyleUpdate", function () {
        // force refresh mapboxgl layers
        _this.previousLayers = {};

        _this._updateMapboxLayers();

        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setMapboxMap", function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap(); // i noticed in certain context we don't access the actual map element

          if (!_this._map) {
            return;
          } // bind mapboxgl event listener


          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);

          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }

        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapbox, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBeforeRender", function (_ref) {
        var gl = _ref.gl;
        (0, _glUtils.setLayerBlending)(gl, _this.props.layerBlending);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeckError", function (error, layer) {
        var errorMessage = "An error in deck.gl: ".concat(error.message, " in ").concat(layer.id);
        var notificationId = "".concat(layer.id, "-").concat(error.message); // Throttle error notifications, as React doesn't like too many state changes from here.

        _this._deckGLErrorsElapsed = _this._deckGLErrorsElapsed || {};
        var lastShown = _this._deckGLErrorsElapsed[notificationId];

        if (!lastShown || lastShown < Date.now() - _defaultSettings.THROTTLE_NOTIFICATION_TIME) {
          _this._deckGLErrorsElapsed[notificationId] = Date.now(); // Create new error notification or update existing one with same id.
          // Update is required to preserve the order of notifications as they probably are going to "jump" based on order of errors.

          var uiStateActions = _this.props.uiStateActions;
          uiStateActions.addNotification((0, _notificationsUtils.errorNotification)({
            message: errorMessage,
            id: notificationId
          }));
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onViewportChange", function (viewState) {
        if (typeof _this.props.onViewStateChange === 'function') {
          _this.props.onViewStateChange(viewState);
        }

        _this.props.mapStateActions.updateMap(viewState);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleMapControl", function (panelId) {
        var _this$props2 = _this.props,
            index = _this$props2.index,
            uiStateActions = _this$props2.uiStateActions;
        uiStateActions.toggleMapControl(panelId, index);
      });
      _this.previousLayers = {// [layers.id]: mapboxLayerConfig
      };
      _this._deck = null;
      return _this;
    }

    (0, _createClass2["default"])(MapContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          this._map.off(MAPBOXGL_STYLE_UPDATE);

          this._map.off(MAPBOXGL_RENDER);
        }
      }
    }, {
      key: "_isVisibleMapLayer",
      value:
      /* component private functions */
      function _isVisibleMapLayer(layer, mapLayers) {
        // if layer.id is not in mapLayers, don't render it
        return !mapLayers || mapLayers && mapLayers[layer.id];
      }
    }, {
      key: "_onDeckInitialized",
      value: function _onDeckInitialized(gl) {
        if (this.props.onDeckInitialized) {
          this.props.onDeckInitialized(this._deck, gl);
        }
      }
    }, {
      key: "_renderMapPopover",
      value:
      /* component render functions */

      /* eslint-disable complexity */
      function _renderMapPopover(layersToRender) {
        // TODO: move this into reducer so it can be tested
        var _this$props3 = this.props,
            mapState = _this$props3.mapState,
            hoverInfo = _this$props3.hoverInfo,
            clicked = _this$props3.clicked,
            datasets = _this$props3.datasets,
            interactionConfig = _this$props3.interactionConfig,
            layers = _this$props3.layers,
            _this$props3$mousePos = _this$props3.mousePos,
            mousePosition = _this$props3$mousePos.mousePosition,
            coordinate = _this$props3$mousePos.coordinate,
            pinned = _this$props3$mousePos.pinned;

        if (!mousePosition) {
          return null;
        } // if clicked something, ignore hover behavior


        var layerHoverProp = null;
        var layerPinnedProp = null;
        var position = {
          x: mousePosition[0],
          y: mousePosition[1]
        };
        var pinnedPosition = {};
        layerHoverProp = (0, _layerUtils.getLayerHoverProp)({
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          layers: layers,
          layersToRender: layersToRender,
          datasets: datasets
        });
        var compareMode = interactionConfig.tooltip.config ? interactionConfig.tooltip.config.compareMode : false;
        var hasTooltip = pinned || clicked;
        var hasComparisonTooltip = compareMode || !clicked && !pinned;

        if (hasTooltip) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var viewport = new _viewportMercatorProject["default"](mapState);
          var lngLat = clicked ? clicked.lngLat : pinned.coordinate;
          pinnedPosition = this._getHoverXY(viewport, lngLat);
          layerPinnedProp = (0, _layerUtils.getLayerHoverProp)({
            interactionConfig: interactionConfig,
            hoverInfo: clicked,
            layers: layers,
            layersToRender: layersToRender,
            datasets: datasets
          });

          if (layerHoverProp && layerPinnedProp) {
            layerHoverProp.primaryData = layerPinnedProp.data;
            layerHoverProp.compareType = interactionConfig.tooltip.config.compareType;
          }
        }

        var commonProp = {
          onClose: this._onCloseMapPopover,
          mapW: mapState.width,
          mapH: mapState.height,
          zoom: mapState.zoom
        };
        return /*#__PURE__*/_react["default"].createElement("div", null, hasTooltip && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, pinnedPosition, commonProp, {
          layerHoverProp: layerPinnedProp,
          coordinate: interactionConfig.coordinate.enabled && (pinned || {}).coordinate,
          frozen: Boolean(hasTooltip),
          isBase: compareMode
        })), hasComparisonTooltip && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, position, commonProp, {
          layerHoverProp: layerHoverProp,
          coordinate: interactionConfig.coordinate.enabled && coordinate
        })));
      }
      /* eslint-enable complexity */

    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersToRender) {
        var _this2 = this;

        var _this$props4 = this.props,
            mapState = _this$props4.mapState,
            mapStyle = _this$props4.mapStyle,
            layerData = _this$props4.layerData,
            layerOrder = _this$props4.layerOrder,
            layers = _this$props4.layers,
            visStateActions = _this$props4.visStateActions,
            mapboxApiAccessToken = _this$props4.mapboxApiAccessToken,
            mapboxApiUrl = _this$props4.mapboxApiUrl;
        var deckGlLayers = []; // wait until data is ready before render data layers

        if (layerData && layerData.length) {
          // last layer render first
          deckGlLayers = layerOrder.slice().reverse().filter(function (idx) {
            return layers[idx].overlayType === _baseLayer.OVERLAY_TYPE.deckgl && layersToRender[layers[idx].id];
          }).reduce(function (overlays, idx) {
            var layerCallbacks = {
              onSetLayerDomain: function onSetLayerDomain(val) {
                return _this2._onLayerSetDomain(idx, val);
              }
            };
            var layerOverlay = (0, _layerUtils.renderDeckGlLayer)(_this2.props, layerCallbacks, idx);
            return overlays.concat(layerOverlay || []);
          }, []);
        }

        if (mapStyle.visibleLayerGroups['3d building']) {
          deckGlLayers.push(new _dBuildingLayer["default"]({
            id: '_keplergl_3d-building',
            mapboxApiAccessToken: mapboxApiAccessToken,
            mapboxApiUrl: mapboxApiUrl,
            threeDBuildingColor: mapStyle.threeDBuildingColor,
            updateTriggers: {
              getFillColor: mapStyle.threeDBuildingColor
            }
          }));
        }

        return /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({}, this.props.deckGlProps, {
          viewState: mapState,
          id: "default-deckgl-overlay",
          layers: deckGlLayers,
          onBeforeRender: this._onBeforeRender,
          onHover: visStateActions.onLayerHover,
          onClick: visStateActions.onLayerClick,
          onError: this._onDeckError,
          ref: function ref(comp) {
            if (comp && comp.deck && !_this2._deck) {
              _this2._deck = comp.deck;
            }
          },
          onWebGLInitialized: function onWebGLInitialized(gl) {
            return _this2._onDeckInitialized(gl);
          }
        }));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);

        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }

        (0, _mapboxUtils.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            mapState = _this$props5.mapState,
            mapStyle = _this$props5.mapStyle,
            mapStateActions = _this$props5.mapStateActions,
            mapLayers = _this$props5.mapLayers,
            layers = _this$props5.layers,
            MapComponent = _this$props5.MapComponent,
            datasets = _this$props5.datasets,
            mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
            mapboxApiUrl = _this$props5.mapboxApiUrl,
            mapControls = _this$props5.mapControls,
            locale = _this$props5.locale,
            uiStateActions = _this$props5.uiStateActions,
            visStateActions = _this$props5.visStateActions,
            interactionConfig = _this$props5.interactionConfig,
            editor = _this$props5.editor,
            index = _this$props5.index,
            isExport = _this$props5.isExport;
        var layersToRender = this.layersToRenderSelector(this.props);

        if (!mapStyle.bottomMapStyle) {
          // style not yet loaded
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        var mapProps = _objectSpread(_objectSpread({}, mapState), {}, {
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          onViewportChange: this._onViewportChange,
          transformRequest: _mapboxUtils2.transformRequest
        });

        var isEdit = (mapControls.mapDraw || {}).active;
        var hasGeocoderLayer = layers.find(function (l) {
          return l.id === _defaultSettings.GEOCODER_LAYER_ID;
        });
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledMapContainer, {
          style: MAP_STYLE.container
        }, /*#__PURE__*/_react["default"].createElement(MapControl, {
          datasets: datasets,
          dragRotate: mapState.dragRotate,
          isSplit: Boolean(mapLayers),
          isExport: isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          top: interactionConfig.geocoder && interactionConfig.geocoder.enabled ? 52 : 0,
          editor: editor,
          locale: locale,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onSetEditorMode: visStateActions.setEditorMode,
          onSetLocale: uiStateActions.setLocale,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility
        }), /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "bottom",
          ref: this._setMapboxMap,
          mapStyle: mapStyle.bottomMapStyle,
          getCursor: this.props.hoverInfo ? function () {
            return 'pointer';
          } : undefined,
          transitionDuration: TRANSITION_DURATION,
          onMouseMove: this.props.visStateActions.onMouseMove
        }), this._renderDeckOverlay(layersToRender), this._renderMapboxOverlays(), /*#__PURE__*/_react["default"].createElement(Editor, {
          index: index,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFilters(this.props),
          isEnabled: isEdit,
          layers: layers,
          layersToRender: layersToRender,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onUpdate: visStateActions.setFeatures,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          style: {
            pointerEvents: isEdit ? 'all' : 'none',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        })), mapStyle.topMapStyle || hasGeocoderLayer ? /*#__PURE__*/_react["default"].createElement("div", {
          style: MAP_STYLE.top
        }, /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({}, mapProps, {
          key: "top",
          mapStyle: mapStyle.topMapStyle
        }), this._renderDeckOverlay((0, _defineProperty2["default"])({}, _defaultSettings.GEOCODER_LAYER_ID, true)))) : null, this._renderMapPopover(layersToRender), /*#__PURE__*/_react["default"].createElement(Attribution, null));
      }
    }]);
    return MapContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapContainer, "propTypes", {
    // required
    datasets: _propTypes["default"].object,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerOrder: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerData: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    mapState: _propTypes["default"].object.isRequired,
    mapControls: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    mousePos: _propTypes["default"].object.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    // optional
    readOnly: _propTypes["default"].bool,
    isExport: _propTypes["default"].bool,
    clicked: _propTypes["default"].object,
    hoverInfo: _propTypes["default"].object,
    mapLayers: _propTypes["default"].object,
    onMapToggleLayer: _propTypes["default"].func,
    onMapStyleLoaded: _propTypes["default"].func,
    onMapRender: _propTypes["default"].func,
    getMapboxRef: _propTypes["default"].func,
    index: _propTypes["default"].number
  });
  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl["default"],
    deckGlProps: {},
    index: 0
  });
  MapContainer.displayName = 'MapContainer';
  return MapContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21hcC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiTUFQX1NUWUxFIiwiY29udGFpbmVyIiwiZGlzcGxheSIsInBvc2l0aW9uIiwidG9wIiwicG9pbnRlckV2ZW50cyIsIk1BUEJPWEdMX1NUWUxFX1VQREFURSIsIk1BUEJPWEdMX1JFTkRFUiIsIlRSQU5TSVRJT05fRFVSQVRJT04iLCJBdHRyaWJ1dGlvbiIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJkZXBzIiwiTWFwUG9wb3ZlckZhY3RvcnkiLCJNYXBDb250cm9sRmFjdG9yeSIsIkVkaXRvckZhY3RvcnkiLCJNYXBQb3BvdmVyIiwiTWFwQ29udHJvbCIsIkVkaXRvciIsIk1hcENvbnRhaW5lciIsInByb3BzIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibWFwTGF5ZXJzIiwibGF5ZXJPcmRlciIsImxheWVyc1NlbGVjdG9yIiwibGF5ZXJEYXRhU2VsZWN0b3IiLCJtYXBMYXllcnNTZWxlY3RvciIsInJlZHVjZSIsImFjY3UiLCJsYXllciIsImlkeCIsImlkIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJzaG91bGRSZW5kZXJMYXllciIsIl9pc1Zpc2libGVNYXBMYXllciIsImZpbHRlcnMiLCJmaWx0ZXJzU2VsZWN0b3IiLCJmaWx0ZXIiLCJmIiwidHlwZSIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJsYXllck9yZGVyU2VsZWN0b3IiLCJsYXllcnNUb1JlbmRlclNlbGVjdG9yIiwiZ2VuZXJhdGVNYXBib3hMYXllcnMiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJvbkxheWVyQ2xpY2siLCJjb2xvckRvbWFpbiIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJJZCIsImluZGV4IiwibWFwSW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcCIsInByZXZpb3VzTGF5ZXJzIiwiX3VwZGF0ZU1hcGJveExheWVycyIsIm9uTWFwU3R5bGVMb2FkZWQiLCJfbWFwIiwibWFwYm94IiwiZ2V0TWFwIiwib24iLCJfb25NYXBib3hTdHlsZVVwZGF0ZSIsIm9uTWFwUmVuZGVyIiwiZ2V0TWFwYm94UmVmIiwiZ2wiLCJsYXllckJsZW5kaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9uSWQiLCJfZGVja0dMRXJyb3JzRWxhcHNlZCIsImxhc3RTaG93biIsIkRhdGUiLCJub3ciLCJUSFJPVFRMRV9OT1RJRklDQVRJT05fVElNRSIsInVpU3RhdGVBY3Rpb25zIiwiYWRkTm90aWZpY2F0aW9uIiwidmlld1N0YXRlIiwib25WaWV3U3RhdGVDaGFuZ2UiLCJtYXBTdGF0ZUFjdGlvbnMiLCJ1cGRhdGVNYXAiLCJwYW5lbElkIiwidG9nZ2xlTWFwQ29udHJvbCIsIl9kZWNrIiwib2ZmIiwib25EZWNrSW5pdGlhbGl6ZWQiLCJsYXllcnNUb1JlbmRlciIsIm1hcFN0YXRlIiwiaG92ZXJJbmZvIiwiY2xpY2tlZCIsImRhdGFzZXRzIiwiaW50ZXJhY3Rpb25Db25maWciLCJtb3VzZVBvcyIsIm1vdXNlUG9zaXRpb24iLCJjb29yZGluYXRlIiwicGlubmVkIiwibGF5ZXJIb3ZlclByb3AiLCJsYXllclBpbm5lZFByb3AiLCJ4IiwieSIsInBpbm5lZFBvc2l0aW9uIiwiY29tcGFyZU1vZGUiLCJ0b29sdGlwIiwiY29uZmlnIiwiaGFzVG9vbHRpcCIsImhhc0NvbXBhcmlzb25Ub29sdGlwIiwidmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwibG5nTGF0IiwiX2dldEhvdmVyWFkiLCJwcmltYXJ5RGF0YSIsImRhdGEiLCJjb21wYXJlVHlwZSIsImNvbW1vblByb3AiLCJvbkNsb3NlIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwibWFwVyIsIndpZHRoIiwibWFwSCIsImhlaWdodCIsInpvb20iLCJlbmFibGVkIiwiQm9vbGVhbiIsInNjcmVlbkNvb3JkIiwicHJvamVjdCIsIm1hcFN0eWxlIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJkZWNrR2xMYXllcnMiLCJsZW5ndGgiLCJzbGljZSIsInJldmVyc2UiLCJvdmVybGF5VHlwZSIsIk9WRVJMQVlfVFlQRSIsImRlY2tnbCIsIm92ZXJsYXlzIiwibGF5ZXJDYWxsYmFja3MiLCJvblNldExheWVyRG9tYWluIiwidmFsIiwiX29uTGF5ZXJTZXREb21haW4iLCJsYXllck92ZXJsYXkiLCJjb25jYXQiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJwdXNoIiwiVGhyZWVEQnVpbGRpbmdMYXllciIsInRocmVlREJ1aWxkaW5nQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldEZpbGxDb2xvciIsImRlY2tHbFByb3BzIiwiX29uQmVmb3JlUmVuZGVyIiwib25MYXllckhvdmVyIiwiX29uRGVja0Vycm9yIiwiY29tcCIsImRlY2siLCJfb25EZWNrSW5pdGlhbGl6ZWQiLCJtYXBib3hMYXllcnMiLCJtYXBib3hMYXllcnNTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJpc1N0eWxlTG9hZGVkIiwiTWFwQ29tcG9uZW50IiwibWFwQ29udHJvbHMiLCJsb2NhbGUiLCJlZGl0b3IiLCJpc0V4cG9ydCIsImJvdHRvbU1hcFN0eWxlIiwibWFwUHJvcHMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJvblZpZXdwb3J0Q2hhbmdlIiwiX29uVmlld3BvcnRDaGFuZ2UiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiaXNFZGl0IiwibWFwRHJhdyIsImFjdGl2ZSIsImhhc0dlb2NvZGVyTGF5ZXIiLCJmaW5kIiwibCIsImRyYWdSb3RhdGUiLCJyZWFkT25seSIsInNjYWxlIiwiZ2VvY29kZXIiLCJ0b2dnbGVQZXJzcGVjdGl2ZSIsInRvZ2dsZVNwbGl0TWFwIiwiX2hhbmRsZU1hcFRvZ2dsZUxheWVyIiwiX3RvZ2dsZU1hcENvbnRyb2wiLCJzZXRFZGl0b3JNb2RlIiwic2V0TG9jYWxlIiwidG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSIsIl9zZXRNYXBib3hNYXAiLCJ1bmRlZmluZWQiLCJvbk1vdXNlTW92ZSIsIl9yZW5kZXJEZWNrT3ZlcmxheSIsIl9yZW5kZXJNYXBib3hPdmVybGF5cyIsInBvbHlnb25GaWx0ZXJzIiwiZGVsZXRlRmVhdHVyZSIsInNldFNlbGVjdGVkRmVhdHVyZSIsInNldEZlYXR1cmVzIiwic2V0UG9seWdvbkZpbHRlckxheWVyIiwidmlzaWJsZSIsInRvcE1hcFN0eWxlIiwiX3JlbmRlck1hcFBvcG92ZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJvbk1hcFRvZ2dsZUxheWVyIiwiZnVuYyIsIm51bWJlciIsIk1hcGJveEdMTWFwIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLE9BQU8sRUFBRSxjQURBO0FBRVRDLElBQUFBLFFBQVEsRUFBRTtBQUZELEdBREs7QUFLaEJDLEVBQUFBLEdBQUcsRUFBRTtBQUNIRCxJQUFBQSxRQUFRLEVBQUUsVUFEUDtBQUVIQyxJQUFBQSxHQUFHLEVBQUUsS0FGRjtBQUdIQyxJQUFBQSxhQUFhLEVBQUU7QUFIWjtBQUxXLENBQWxCO0FBWUEsSUFBTUMscUJBQXFCLEdBQUcsWUFBOUI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsUUFBeEI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxDQUE1Qjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNsQixnQ0FBQyxrQ0FBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsaUNBRUU7QUFDRSxJQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVF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O0FBY2pCN0UsSUFBQUEsWUFBWSxFQUFFMkUsc0JBQVVHLE1BZFA7QUFlakIvSixJQUFBQSxlQUFlLEVBQUU0SixzQkFBVUMsTUFBVixDQUFpQkMsVUFmakI7QUFnQmpCN0gsSUFBQUEsZUFBZSxFQUFFMkgsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBaEJqQjtBQWlCakJqSSxJQUFBQSxjQUFjLEVBQUUrSCxzQkFBVUMsTUFBVixDQUFpQkMsVUFqQmhCO0FBbUJqQjtBQUNBMUIsSUFBQUEsUUFBUSxFQUFFd0Isc0JBQVVNLElBcEJIO0FBcUJqQjVDLElBQUFBLFFBQVEsRUFBRXNDLHNCQUFVTSxJQXJCSDtBQXNCakJ2SCxJQUFBQSxPQUFPLEVBQUVpSCxzQkFBVUMsTUF0QkY7QUF1QmpCbkgsSUFBQUEsU0FBUyxFQUFFa0gsc0JBQVVDLE1BdkJKO0FBd0JqQnBMLElBQUFBLFNBQVMsRUFBRW1MLHNCQUFVQyxNQXhCSjtBQXlCakJNLElBQUFBLGdCQUFnQixFQUFFUCxzQkFBVVEsSUF6Qlg7QUEwQmpCMUosSUFBQUEsZ0JBQWdCLEVBQUVrSixzQkFBVVEsSUExQlg7QUEyQmpCcEosSUFBQUEsV0FBVyxFQUFFNEksc0JBQVVRLElBM0JOO0FBNEJqQm5KLElBQUFBLFlBQVksRUFBRTJJLHNCQUFVUSxJQTVCUDtBQTZCakIvSixJQUFBQSxLQUFLLEVBQUV1SixzQkFBVVM7QUE3QkEsR0FGcUQ7QUFBQSxtQ0FDcEVoTSxZQURvRSxrQkFrQ2xEO0FBQ3BCNkksSUFBQUEsWUFBWSxFQUFFb0Qsc0JBRE07QUFFcEJoRSxJQUFBQSxXQUFXLEVBQUUsRUFGTztBQUdwQmpHLElBQUFBLEtBQUssRUFBRTtBQUhhLEdBbENrRDtBQStkMUVoQyxFQUFBQSxZQUFZLENBQUNrTSxXQUFiLEdBQTJCLGNBQTNCO0FBRUEsU0FBT2xNLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIGxpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1hcGJveEdMTWFwIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgRGVja0dMIGZyb20gJ0BkZWNrLmdsL3JlYWN0JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBXZWJNZXJjYXRvclZpZXdwb3J0IGZyb20gJ3ZpZXdwb3J0LW1lcmNhdG9yLXByb2plY3QnO1xuaW1wb3J0IHtlcnJvck5vdGlmaWNhdGlvbn0gZnJvbSAndXRpbHMvbm90aWZpY2F0aW9ucy11dGlscyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBNYXBQb3BvdmVyRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlcic7XG5pbXBvcnQgTWFwQ29udHJvbEZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9tYXAvbWFwLWNvbnRyb2wnO1xuaW1wb3J0IHtTdHlsZWRNYXBDb250YWluZXIsIFN0eWxlZEF0dHJidXRpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEVkaXRvckZhY3RvcnkgZnJvbSAnLi9lZGl0b3IvZWRpdG9yJztcblxuLy8gdXRpbHNcbmltcG9ydCB7Z2VuZXJhdGVNYXBib3hMYXllcnMsIHVwZGF0ZU1hcGJveExheWVyc30gZnJvbSAnbGF5ZXJzL21hcGJveC11dGlscyc7XG5pbXBvcnQge3NldExheWVyQmxlbmRpbmd9IGZyb20gJ3V0aWxzL2dsLXV0aWxzJztcbmltcG9ydCB7dHJhbnNmb3JtUmVxdWVzdH0gZnJvbSAndXRpbHMvbWFwLXN0eWxlLXV0aWxzL21hcGJveC11dGlscyc7XG5pbXBvcnQge2dldExheWVySG92ZXJQcm9wLCByZW5kZXJEZWNrR2xMYXllcn0gZnJvbSAndXRpbHMvbGF5ZXItdXRpbHMnO1xuXG4vLyBkZWZhdWx0LXNldHRpbmdzXG5pbXBvcnQgVGhyZWVEQnVpbGRpbmdMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLWxheWVyJztcbmltcG9ydCB7XG4gIEZJTFRFUl9UWVBFUyxcbiAgR0VPQ09ERVJfTEFZRVJfSUQsXG4gIFRIUk9UVExFX05PVElGSUNBVElPTl9USU1FXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7T1ZFUkxBWV9UWVBFfSBmcm9tICdsYXllcnMvYmFzZS1sYXllcic7XG5cbi8qKiBAdHlwZSB7e1trZXk6IHN0cmluZ106IFJlYWN0LkNTU1Byb3BlcnRpZXN9fSAqL1xuY29uc3QgTUFQX1NUWUxFID0ge1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9XG59O1xuXG5jb25zdCBNQVBCT1hHTF9TVFlMRV9VUERBVEUgPSAnc3R5bGUubG9hZCc7XG5jb25zdCBNQVBCT1hHTF9SRU5ERVIgPSAncmVuZGVyJztcbmNvbnN0IFRSQU5TSVRJT05fRFVSQVRJT04gPSAwO1xuXG5jb25zdCBBdHRyaWJ1dGlvbiA9ICgpID0+IChcbiAgPFN0eWxlZEF0dHJidXRpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdHRyaXRpb24tbG9nb1wiPlxuICAgICAgQmFzZW1hcCBieTpcbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cIm1hcGJveGdsLWN0cmwtbG9nb1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiTWFwYm94IGxvZ29cIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1saW5rXCI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9rZXBsZXIuZ2wvcG9saWN5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgwqkga2VwbGVyLmdsIHx7JyAnfVxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYWJvdXQvbWFwcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIMKpIE1hcGJveCB8eycgJ31cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgwqkgT3BlblN0cmVldE1hcCB8eycgJ31cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL21hcC1mZWVkYmFjay9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIDxzdHJvbmc+SW1wcm92ZSB0aGlzIG1hcDwvc3Ryb25nPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L1N0eWxlZEF0dHJidXRpb24+XG4pO1xuXG5NYXBDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwUG9wb3ZlckZhY3RvcnksIE1hcENvbnRyb2xGYWN0b3J5LCBFZGl0b3JGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQ29udGFpbmVyRmFjdG9yeShNYXBQb3BvdmVyLCBNYXBDb250cm9sLCBFZGl0b3IpIHtcbiAgY2xhc3MgTWFwQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgLy8gcmVxdWlyZWRcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyT3JkZXI6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckRhdGE6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbW91c2VQb3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdWlTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgICAgLy8gb3B0aW9uYWxcbiAgICAgIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGlzRXhwb3J0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGNsaWNrZWQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBob3ZlckluZm86IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBvbk1hcFRvZ2dsZUxheWVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIG9uTWFwU3R5bGVMb2FkZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgb25NYXBSZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgZ2V0TWFwYm94UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBNYXBDb21wb25lbnQ6IE1hcGJveEdMTWFwLFxuICAgICAgZGVja0dsUHJvcHM6IHt9LFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgdGhpcy5wcmV2aW91c0xheWVycyA9IHtcbiAgICAgICAgLy8gW2xheWVycy5pZF06IG1hcGJveExheWVyQ29uZmlnXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kZWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIHVuYmluZCBtYXBib3hnbCBldmVudCBsaXN0ZW5lclxuICAgICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgICB0aGlzLl9tYXAub2ZmKE1BUEJPWEdMX1NUWUxFX1VQREFURSk7XG4gICAgICAgIHRoaXMuX21hcC5vZmYoTUFQQk9YR0xfUkVOREVSKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcbiAgICBsYXllckRhdGFTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVyRGF0YTtcbiAgICBtYXBMYXllcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcExheWVycztcbiAgICBsYXllck9yZGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYXllck9yZGVyO1xuICAgIGxheWVyc1RvUmVuZGVyU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgdGhpcy5tYXBMYXllcnNTZWxlY3RvcixcbiAgICAgIC8vIHtbaWRdOiB0cnVlIFxcIGZhbHNlfVxuICAgICAgKGxheWVycywgbGF5ZXJEYXRhLCBtYXBMYXllcnMpID0+XG4gICAgICAgIGxheWVycy5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGxheWVyLCBpZHgpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2xheWVyLmlkXTpcbiAgICAgICAgICAgICAgbGF5ZXIuaWQgIT09IEdFT0NPREVSX0xBWUVSX0lEICYmXG4gICAgICAgICAgICAgIGxheWVyLnNob3VsZFJlbmRlckxheWVyKGxheWVyRGF0YVtpZHhdKSAmJlxuICAgICAgICAgICAgICB0aGlzLl9pc1Zpc2libGVNYXBMYXllcihsYXllciwgbWFwTGF5ZXJzKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgIClcbiAgICApO1xuXG4gICAgZmlsdGVyc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVycztcbiAgICBwb2x5Z29uRmlsdGVycyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmlsdGVyc1NlbGVjdG9yLCBmaWx0ZXJzID0+XG4gICAgICBmaWx0ZXJzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gRklMVEVSX1RZUEVTLnBvbHlnb24pXG4gICAgKTtcblxuICAgIG1hcGJveExheWVyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmxheWVyc1NlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllckRhdGFTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJPcmRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yLFxuICAgICAgZ2VuZXJhdGVNYXBib3hMYXllcnNcbiAgICApO1xuXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX2lzVmlzaWJsZU1hcExheWVyKGxheWVyLCBtYXBMYXllcnMpIHtcbiAgICAgIC8vIGlmIGxheWVyLmlkIGlzIG5vdCBpbiBtYXBMYXllcnMsIGRvbid0IHJlbmRlciBpdFxuICAgICAgcmV0dXJuICFtYXBMYXllcnMgfHwgKG1hcExheWVycyAmJiBtYXBMYXllcnNbbGF5ZXIuaWRdKTtcbiAgICB9XG5cbiAgICBfb25DbG9zZU1hcFBvcG92ZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5vbkxheWVyQ2xpY2sobnVsbCk7XG4gICAgfTtcblxuICAgIF9vbkxheWVyU2V0RG9tYWluID0gKGlkeCwgY29sb3JEb21haW4pID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXJzW2lkeF0sIHtcbiAgICAgICAgY29sb3JEb21haW5cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfaGFuZGxlTWFwVG9nZ2xlTGF5ZXIgPSBsYXllcklkID0+IHtcbiAgICAgIGNvbnN0IHtpbmRleDogbWFwSW5kZXggPSAwLCB2aXNTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIHZpc1N0YXRlQWN0aW9ucy50b2dnbGVMYXllckZvck1hcChtYXBJbmRleCwgbGF5ZXJJZCk7XG4gICAgfTtcblxuICAgIF9vbk1hcGJveFN0eWxlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgLy8gZm9yY2UgcmVmcmVzaCBtYXBib3hnbCBsYXllcnNcbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSB7fTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcGJveExheWVycygpO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWFwU3R5bGVMb2FkZWQodGhpcy5fbWFwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldE1hcGJveE1hcCA9IG1hcGJveCA9PiB7XG4gICAgICBpZiAoIXRoaXMuX21hcCAmJiBtYXBib3gpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwYm94LmdldE1hcCgpO1xuICAgICAgICAvLyBpIG5vdGljZWQgaW4gY2VydGFpbiBjb250ZXh0IHdlIGRvbid0IGFjY2VzcyB0aGUgYWN0dWFsIG1hcCBlbGVtZW50XG4gICAgICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgdGhpcy5fb25NYXBib3hTdHlsZVVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1JFTkRFUiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFJlbmRlcih0aGlzLl9tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmdldE1hcGJveFJlZikge1xuICAgICAgICAvLyBUaGUgcGFyZW50IGNvbXBvbmVudCBjYW4gZ2FpbiBhY2Nlc3MgdG8gb3VyIE1hcGJveEdsTWFwIGJ5XG4gICAgICAgIC8vIHByb3ZpZGluZyB0aGlzIGNhbGxiYWNrLiBOb3RlIHRoYXQgJ21hcGJveCcgd2lsbCBiZSBudWxsIHdoZW4gdGhlXG4gICAgICAgIC8vIHJlZiBpcyB1bnNldCAoZS5nLiB3aGVuIGEgc3BsaXQgbWFwIGlzIGNsb3NlZCkuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKG1hcGJveCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRlY2tJbml0aWFsaXplZChnbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlY2tJbml0aWFsaXplZCh0aGlzLl9kZWNrLCBnbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uQmVmb3JlUmVuZGVyID0gKHtnbH0pID0+IHtcbiAgICAgIHNldExheWVyQmxlbmRpbmcoZ2wsIHRoaXMucHJvcHMubGF5ZXJCbGVuZGluZyk7XG4gICAgfTtcblxuICAgIF9vbkRlY2tFcnJvciA9IChlcnJvciwgbGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBBbiBlcnJvciBpbiBkZWNrLmdsOiAke2Vycm9yLm1lc3NhZ2V9IGluICR7bGF5ZXIuaWR9YDtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbklkID0gYCR7bGF5ZXIuaWR9LSR7ZXJyb3IubWVzc2FnZX1gO1xuXG4gICAgICAvLyBUaHJvdHRsZSBlcnJvciBub3RpZmljYXRpb25zLCBhcyBSZWFjdCBkb2Vzbid0IGxpa2UgdG9vIG1hbnkgc3RhdGUgY2hhbmdlcyBmcm9tIGhlcmUuXG4gICAgICB0aGlzLl9kZWNrR0xFcnJvcnNFbGFwc2VkID0gdGhpcy5fZGVja0dMRXJyb3JzRWxhcHNlZCB8fCB7fTtcbiAgICAgIGNvbnN0IGxhc3RTaG93biA9IHRoaXMuX2RlY2tHTEVycm9yc0VsYXBzZWRbbm90aWZpY2F0aW9uSWRdO1xuICAgICAgaWYgKCFsYXN0U2hvd24gfHwgbGFzdFNob3duIDwgRGF0ZS5ub3coKSAtIFRIUk9UVExFX05PVElGSUNBVElPTl9USU1FKSB7XG4gICAgICAgIHRoaXMuX2RlY2tHTEVycm9yc0VsYXBzZWRbbm90aWZpY2F0aW9uSWRdID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGVycm9yIG5vdGlmaWNhdGlvbiBvciB1cGRhdGUgZXhpc3Rpbmcgb25lIHdpdGggc2FtZSBpZC5cbiAgICAgICAgLy8gVXBkYXRlIGlzIHJlcXVpcmVkIHRvIHByZXNlcnZlIHRoZSBvcmRlciBvZiBub3RpZmljYXRpb25zIGFzIHRoZXkgcHJvYmFibHkgYXJlIGdvaW5nIHRvIFwianVtcFwiIGJhc2VkIG9uIG9yZGVyIG9mIGVycm9ycy5cbiAgICAgICAgY29uc3Qge3VpU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLmFkZE5vdGlmaWNhdGlvbihcbiAgICAgICAgICBlcnJvck5vdGlmaWNhdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBpZDogbm90aWZpY2F0aW9uSWRcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9ucyAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIF9yZW5kZXJNYXBQb3BvdmVyKGxheWVyc1RvUmVuZGVyKSB7XG4gICAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgaW50byByZWR1Y2VyIHNvIGl0IGNhbiBiZSB0ZXN0ZWRcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIG1vdXNlUG9zOiB7bW91c2VQb3NpdGlvbiwgY29vcmRpbmF0ZSwgcGlubmVkfVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICghbW91c2VQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIGlmIGNsaWNrZWQgc29tZXRoaW5nLCBpZ25vcmUgaG92ZXIgYmVoYXZpb3JcbiAgICAgIGxldCBsYXllckhvdmVyUHJvcCA9IG51bGw7XG4gICAgICBsZXQgbGF5ZXJQaW5uZWRQcm9wID0gbnVsbDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0ge3g6IG1vdXNlUG9zaXRpb25bMF0sIHk6IG1vdXNlUG9zaXRpb25bMV19O1xuICAgICAgbGV0IHBpbm5lZFBvc2l0aW9uID0ge307XG5cbiAgICAgIGxheWVySG92ZXJQcm9wID0gZ2V0TGF5ZXJIb3ZlclByb3Aoe1xuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBsYXllcnMsXG4gICAgICAgIGxheWVyc1RvUmVuZGVyLFxuICAgICAgICBkYXRhc2V0c1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbXBhcmVNb2RlID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWdcbiAgICAgICAgPyBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5jb21wYXJlTW9kZVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgICBjb25zdCBoYXNUb29sdGlwID0gcGlubmVkIHx8IGNsaWNrZWQ7XG4gICAgICBjb25zdCBoYXNDb21wYXJpc29uVG9vbHRpcCA9IGNvbXBhcmVNb2RlIHx8ICghY2xpY2tlZCAmJiAhcGlubmVkKTtcblxuICAgICAgaWYgKGhhc1Rvb2x0aXApIHtcbiAgICAgICAgLy8gcHJvamVjdCBsbmdsYXQgdG8gc2NyZWVuIHNvIHRoYXQgdG9vbHRpcCBmb2xsb3dzIHRoZSBvYmplY3Qgb24gem9vbVxuICAgICAgICBjb25zdCB2aWV3cG9ydCA9IG5ldyBXZWJNZXJjYXRvclZpZXdwb3J0KG1hcFN0YXRlKTtcbiAgICAgICAgY29uc3QgbG5nTGF0ID0gY2xpY2tlZCA/IGNsaWNrZWQubG5nTGF0IDogcGlubmVkLmNvb3JkaW5hdGU7XG4gICAgICAgIHBpbm5lZFBvc2l0aW9uID0gdGhpcy5fZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KTtcbiAgICAgICAgbGF5ZXJQaW5uZWRQcm9wID0gZ2V0TGF5ZXJIb3ZlclByb3Aoe1xuICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICAgIGhvdmVySW5mbzogY2xpY2tlZCxcbiAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgICAgZGF0YXNldHNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXllckhvdmVyUHJvcCAmJiBsYXllclBpbm5lZFByb3ApIHtcbiAgICAgICAgICBsYXllckhvdmVyUHJvcC5wcmltYXJ5RGF0YSA9IGxheWVyUGlubmVkUHJvcC5kYXRhO1xuICAgICAgICAgIGxheWVySG92ZXJQcm9wLmNvbXBhcmVUeXBlID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuY29tcGFyZVR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbW1vblByb3AgPSB7XG4gICAgICAgIG9uQ2xvc2U6IHRoaXMuX29uQ2xvc2VNYXBQb3BvdmVyLFxuICAgICAgICBtYXBXOiBtYXBTdGF0ZS53aWR0aCxcbiAgICAgICAgbWFwSDogbWFwU3RhdGUuaGVpZ2h0LFxuICAgICAgICB6b29tOiBtYXBTdGF0ZS56b29tXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtoYXNUb29sdGlwICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHsuLi5waW5uZWRQb3NpdGlvbn1cbiAgICAgICAgICAgICAgey4uLmNvbW1vblByb3B9XG4gICAgICAgICAgICAgIGxheWVySG92ZXJQcm9wPXtsYXllclBpbm5lZFByb3B9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiAocGlubmVkIHx8IHt9KS5jb29yZGluYXRlfVxuICAgICAgICAgICAgICBmcm96ZW49e0Jvb2xlYW4oaGFzVG9vbHRpcCl9XG4gICAgICAgICAgICAgIGlzQmFzZT17Y29tcGFyZU1vZGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2hhc0NvbXBhcmlzb25Ub29sdGlwICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHsuLi5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgey4uLmNvbW1vblByb3B9XG4gICAgICAgICAgICAgIGxheWVySG92ZXJQcm9wPXtsYXllckhvdmVyUHJvcH1cbiAgICAgICAgICAgICAgY29vcmRpbmF0ZT17aW50ZXJhY3Rpb25Db25maWcuY29vcmRpbmF0ZS5lbmFibGVkICYmIGNvb3JkaW5hdGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxuICAgIF9nZXRIb3ZlclhZKHZpZXdwb3J0LCBsbmdMYXQpIHtcbiAgICAgIGNvbnN0IHNjcmVlbkNvb3JkID0gIXZpZXdwb3J0IHx8ICFsbmdMYXQgPyBudWxsIDogdmlld3BvcnQucHJvamVjdChsbmdMYXQpO1xuICAgICAgcmV0dXJuIHNjcmVlbkNvb3JkICYmIHt4OiBzY3JlZW5Db29yZFswXSwgeTogc2NyZWVuQ29vcmRbMV19O1xuICAgIH1cblxuICAgIF9yZW5kZXJEZWNrT3ZlcmxheShsYXllcnNUb1JlbmRlcikge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmxcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBsZXQgZGVja0dsTGF5ZXJzID0gW107XG4gICAgICAvLyB3YWl0IHVudGlsIGRhdGEgaXMgcmVhZHkgYmVmb3JlIHJlbmRlciBkYXRhIGxheWVyc1xuICAgICAgaWYgKGxheWVyRGF0YSAmJiBsYXllckRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIGxhc3QgbGF5ZXIgcmVuZGVyIGZpcnN0XG4gICAgICAgIGRlY2tHbExheWVycyA9IGxheWVyT3JkZXJcbiAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgIC5yZXZlcnNlKClcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgaWR4ID0+IGxheWVyc1tpZHhdLm92ZXJsYXlUeXBlID09PSBPVkVSTEFZX1RZUEUuZGVja2dsICYmIGxheWVyc1RvUmVuZGVyW2xheWVyc1tpZHhdLmlkXVxuICAgICAgICAgIClcbiAgICAgICAgICAucmVkdWNlKChvdmVybGF5cywgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllckNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgICAgb25TZXRMYXllckRvbWFpbjogdmFsID0+IHRoaXMuX29uTGF5ZXJTZXREb21haW4oaWR4LCB2YWwpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJPdmVybGF5ID0gcmVuZGVyRGVja0dsTGF5ZXIodGhpcy5wcm9wcywgbGF5ZXJDYWxsYmFja3MsIGlkeCk7XG4gICAgICAgICAgICByZXR1cm4gb3ZlcmxheXMuY29uY2F0KGxheWVyT3ZlcmxheSB8fCBbXSk7XG4gICAgICAgICAgfSwgW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzWyczZCBidWlsZGluZyddKSB7XG4gICAgICAgIGRlY2tHbExheWVycy5wdXNoKFxuICAgICAgICAgIG5ldyBUaHJlZURCdWlsZGluZ0xheWVyKHtcbiAgICAgICAgICAgIGlkOiAnX2tlcGxlcmdsXzNkLWJ1aWxkaW5nJyxcbiAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICAgICAgdGhyZWVEQnVpbGRpbmdDb2xvcjogbWFwU3R5bGUudGhyZWVEQnVpbGRpbmdDb2xvcixcbiAgICAgICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XG4gICAgICAgICAgICAgIGdldEZpbGxDb2xvcjogbWFwU3R5bGUudGhyZWVEQnVpbGRpbmdDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEZWNrR0xcbiAgICAgICAgICB7Li4udGhpcy5wcm9wcy5kZWNrR2xQcm9wc31cbiAgICAgICAgICB2aWV3U3RhdGU9e21hcFN0YXRlfVxuICAgICAgICAgIGlkPVwiZGVmYXVsdC1kZWNrZ2wtb3ZlcmxheVwiXG4gICAgICAgICAgbGF5ZXJzPXtkZWNrR2xMYXllcnN9XG4gICAgICAgICAgb25CZWZvcmVSZW5kZXI9e3RoaXMuX29uQmVmb3JlUmVuZGVyfVxuICAgICAgICAgIG9uSG92ZXI9e3Zpc1N0YXRlQWN0aW9ucy5vbkxheWVySG92ZXJ9XG4gICAgICAgICAgb25DbGljaz17dmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGlja31cbiAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkRlY2tFcnJvcn1cbiAgICAgICAgICByZWY9e2NvbXAgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXAgJiYgY29tcC5kZWNrICYmICF0aGlzLl9kZWNrKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2RlY2sgPSBjb21wLmRlY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbldlYkdMSW5pdGlhbGl6ZWQ9e2dsID0+IHRoaXMuX29uRGVja0luaXRpYWxpemVkKGdsKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZU1hcGJveExheWVycygpIHtcbiAgICAgIGNvbnN0IG1hcGJveExheWVycyA9IHRoaXMubWFwYm94TGF5ZXJzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG1hcGJveExheWVycykubGVuZ3RoICYmICFPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzTGF5ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVNYXBib3hMYXllcnModGhpcy5fbWFwLCBtYXBib3hMYXllcnMsIHRoaXMucHJldmlvdXNMYXllcnMpO1xuXG4gICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0gbWFwYm94TGF5ZXJzO1xuICAgIH1cblxuICAgIF9yZW5kZXJNYXBib3hPdmVybGF5cygpIHtcbiAgICAgIGlmICh0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLmlzU3R5bGVMb2FkZWQoKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVNYXBib3hMYXllcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25WaWV3cG9ydENoYW5nZSA9IHZpZXdTdGF0ZSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25WaWV3U3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblZpZXdTdGF0ZUNoYW5nZSh2aWV3U3RhdGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBTdGF0ZUFjdGlvbnMudXBkYXRlTWFwKHZpZXdTdGF0ZSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVNYXBDb250cm9sID0gcGFuZWxJZCA9PiB7XG4gICAgICBjb25zdCB7aW5kZXgsIHVpU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1hcENvbnRyb2wocGFuZWxJZCwgaW5kZXgpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBMYXllcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgTWFwQ29tcG9uZW50LFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwQ29udHJvbHMsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGVkaXRvcixcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGlzRXhwb3J0XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbGF5ZXJzVG9SZW5kZXIgPSB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIGlmICghbWFwU3R5bGUuYm90dG9tTWFwU3R5bGUpIHtcbiAgICAgICAgLy8gc3R5bGUgbm90IHlldCBsb2FkZWRcbiAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcFByb3BzID0ge1xuICAgICAgICAuLi5tYXBTdGF0ZSxcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlOiB0aGlzLl9vblZpZXdwb3J0Q2hhbmdlLFxuICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpc0VkaXQgPSAobWFwQ29udHJvbHMubWFwRHJhdyB8fCB7fSkuYWN0aXZlO1xuXG4gICAgICBjb25zdCBoYXNHZW9jb2RlckxheWVyID0gbGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBHRU9DT0RFUl9MQVlFUl9JRCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgc3R5bGU9e01BUF9TVFlMRS5jb250YWluZXJ9PlxuICAgICAgICAgIDxNYXBDb250cm9sXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBkcmFnUm90YXRlPXttYXBTdGF0ZS5kcmFnUm90YXRlfVxuICAgICAgICAgICAgaXNTcGxpdD17Qm9vbGVhbihtYXBMYXllcnMpfVxuICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICBsYXllcnNUb1JlbmRlcj17bGF5ZXJzVG9SZW5kZXJ9XG4gICAgICAgICAgICBtYXBJbmRleD17aW5kZXh9XG4gICAgICAgICAgICBtYXBDb250cm9scz17bWFwQ29udHJvbHN9XG4gICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cbiAgICAgICAgICAgIHNjYWxlPXttYXBTdGF0ZS5zY2FsZSB8fCAxfVxuICAgICAgICAgICAgdG9wPXtpbnRlcmFjdGlvbkNvbmZpZy5nZW9jb2RlciAmJiBpbnRlcmFjdGlvbkNvbmZpZy5nZW9jb2Rlci5lbmFibGVkID8gNTIgOiAwfVxuICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVQZXJzcGVjdGl2ZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVTcGxpdE1hcH1cbiAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e3RoaXMuX2hhbmRsZU1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sPXt0aGlzLl90b2dnbGVNYXBDb250cm9sfVxuICAgICAgICAgICAgb25TZXRFZGl0b3JNb2RlPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RWRpdG9yTW9kZX1cbiAgICAgICAgICAgIG9uU2V0TG9jYWxlPXt1aVN0YXRlQWN0aW9ucy5zZXRMb2NhbGV9XG4gICAgICAgICAgICBvblRvZ2dsZUVkaXRvclZpc2liaWxpdHk9e3Zpc1N0YXRlQWN0aW9ucy50b2dnbGVFZGl0b3JWaXNpYmlsaXR5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hcENvbXBvbmVudFxuICAgICAgICAgICAgey4uLm1hcFByb3BzfVxuICAgICAgICAgICAga2V5PVwiYm90dG9tXCJcbiAgICAgICAgICAgIHJlZj17dGhpcy5fc2V0TWFwYm94TWFwfVxuICAgICAgICAgICAgbWFwU3R5bGU9e21hcFN0eWxlLmJvdHRvbU1hcFN0eWxlfVxuICAgICAgICAgICAgZ2V0Q3Vyc29yPXt0aGlzLnByb3BzLmhvdmVySW5mbyA/ICgpID0+ICdwb2ludGVyJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17VFJBTlNJVElPTl9EVVJBVElPTn1cbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5vbk1vdXNlTW92ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5fcmVuZGVyRGVja092ZXJsYXkobGF5ZXJzVG9SZW5kZXIpfVxuICAgICAgICAgICAge3RoaXMuX3JlbmRlck1hcGJveE92ZXJsYXlzKCl9XG4gICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBlZGl0b3I9e2VkaXRvcn1cbiAgICAgICAgICAgICAgZmlsdGVycz17dGhpcy5wb2x5Z29uRmlsdGVycyh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgaXNFbmFibGVkPXtpc0VkaXR9XG4gICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICBsYXllcnNUb1JlbmRlcj17bGF5ZXJzVG9SZW5kZXJ9XG4gICAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dmlzU3RhdGVBY3Rpb25zLmRlbGV0ZUZlYXR1cmV9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt2aXNTdGF0ZUFjdGlvbnMuc2V0U2VsZWN0ZWRGZWF0dXJlfVxuICAgICAgICAgICAgICBvblVwZGF0ZT17dmlzU3RhdGVBY3Rpb25zLnNldEZlYXR1cmVzfVxuICAgICAgICAgICAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogaXNFZGl0ID8gJ2FsbCcgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZWRpdG9yLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTWFwQ29tcG9uZW50PlxuICAgICAgICAgIHttYXBTdHlsZS50b3BNYXBTdHlsZSB8fCBoYXNHZW9jb2RlckxheWVyID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFQX1NUWUxFLnRvcH0+XG4gICAgICAgICAgICAgIDxNYXBDb21wb25lbnQgey4uLm1hcFByb3BzfSBrZXk9XCJ0b3BcIiBtYXBTdHlsZT17bWFwU3R5bGUudG9wTWFwU3R5bGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJEZWNrT3ZlcmxheSh7W0dFT0NPREVSX0xBWUVSX0lEXTogdHJ1ZX0pfVxuICAgICAgICAgICAgICA8L01hcENvbXBvbmVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBQb3BvdmVyKGxheWVyc1RvUmVuZGVyKX1cbiAgICAgICAgICA8QXR0cmlidXRpb24gLz5cbiAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIE1hcENvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdNYXBDb250YWluZXInO1xuXG4gIHJldHVybiBNYXBDb250YWluZXI7XG59XG4iXX0=