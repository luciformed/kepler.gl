"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../common/styled-components");

var _mapStyleSelector = _interopRequireDefault(require("./map-style-panel/map-style-selector"));

var _mapLayerSelector = _interopRequireDefault(require("./map-style-panel/map-layer-selector"));

var _icons = require("../common/icons");

var _colorSelector = _interopRequireDefault(require("./layer-panel/color-selector"));

var _reselect = require("reselect");

var _reactIntl = require("react-intl");

var _localization = require("../../localization");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

MapManagerFactory.deps = [_mapStyleSelector["default"], _mapLayerSelector["default"]];

function MapManagerFactory(MapStyleSelector, LayerGroupSelector) {
  var MapManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapManager, _Component);

    var _super = _createSuper(MapManager);

    function MapManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSelecting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "buildingColorSelector", function (props) {
        return props.mapStyle.threeDBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setColorSelector", function (props) {
        return props.set3dBuildingColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSelecting", function () {
        _this.setState({
          isSelecting: !_this.state.isSelecting
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectStyle", function (val) {
        _this.props.onStyleChange(val);

        _this._toggleSelecting();
      });
      return _this;
    }

    (0, _createClass2["default"])(MapManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapStyle = _this$props.mapStyle,
            intl = _this$props.intl;
        var currentStyle = mapStyle.mapStyles[mapStyle.styleType] || {};
        var editableLayers = (currentStyle.layerGroups || []).map(function (lg) {
          return lg.slug;
        });
        var hasBuildingLayer = mapStyle.visibleLayerGroups['3d building'];
        var colorSetSelector = (0, _reselect.createSelector)(this.buildingColorSelector, this.setColorSelector, function (selectedColor, setColor) {
          return [{
            selectedColor: selectedColor,
            setColor: setColor,
            isRange: false,
            label: intl.formatMessage({
              id: 'mapManager.3dBuildingColor'
            })
          }];
        });
        var colorSets = colorSetSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-style-panel"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapStyleSelector, {
          mapStyle: mapStyle,
          isSelecting: this.state.isSelecting,
          onChange: this._selectStyle,
          toggleActive: this._toggleSelecting
        }), editableLayers.length ? /*#__PURE__*/_react["default"].createElement(LayerGroupSelector, {
          layers: mapStyle.visibleLayerGroups,
          editableLayers: editableLayers,
          topLayers: mapStyle.topLayerGroups,
          onChange: this.props.onConfigChange
        }) : null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
          colorSets: colorSets,
          disabled: !hasBuildingLayer
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          className: "add-map-style-button",
          onClick: this.props.showAddMapStyleModal,
          secondary: true
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'mapManager.addMapStyle'
        }))));
      }
    }]);
    return MapManager;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapManager, "propTypes", {
    mapStyle: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired,
    onStyleChange: _propTypes["default"].func.isRequired,
    showAddMapStyleModal: _propTypes["default"].func.isRequired
  });
  return (0, _reactIntl.injectIntl)(MapManager);
}

var _default = MapManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiTWFwTWFuYWdlckZhY3RvcnkiLCJkZXBzIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IiwiTWFwU3R5bGVTZWxlY3RvciIsIkxheWVyR3JvdXBTZWxlY3RvciIsIk1hcE1hbmFnZXIiLCJpc1NlbGVjdGluZyIsInByb3BzIiwibWFwU3R5bGUiLCJ0aHJlZURCdWlsZGluZ0NvbG9yIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwic2V0U3RhdGUiLCJzdGF0ZSIsInZhbCIsIm9uU3R5bGVDaGFuZ2UiLCJfdG9nZ2xlU2VsZWN0aW5nIiwiaW50bCIsImN1cnJlbnRTdHlsZSIsIm1hcFN0eWxlcyIsInN0eWxlVHlwZSIsImVkaXRhYmxlTGF5ZXJzIiwibGF5ZXJHcm91cHMiLCJtYXAiLCJsZyIsInNsdWciLCJoYXNCdWlsZGluZ0xheWVyIiwidmlzaWJsZUxheWVyR3JvdXBzIiwiY29sb3JTZXRTZWxlY3RvciIsImJ1aWxkaW5nQ29sb3JTZWxlY3RvciIsInNldENvbG9yU2VsZWN0b3IiLCJzZWxlY3RlZENvbG9yIiwic2V0Q29sb3IiLCJpc1JhbmdlIiwibGFiZWwiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJjb2xvclNldHMiLCJfc2VsZWN0U3R5bGUiLCJsZW5ndGgiLCJ0b3BMYXllckdyb3VwcyIsIm9uQ29uZmlnQ2hhbmdlIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FB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LGVBa0JFLGdDQUFDLHdCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsc0JBRFo7QUFFRSxVQUFBLE9BQU8sRUFBRSxLQUFLbEIsS0FBTCxDQUFXa0Msb0JBRnRCO0FBR0UsVUFBQSxTQUFTO0FBSFgsd0JBS0UsZ0NBQUMsVUFBRDtBQUFLLFVBQUEsTUFBTSxFQUFDO0FBQVosVUFMRixlQU1FLGdDQUFDLDhCQUFEO0FBQWtCLFVBQUEsRUFBRSxFQUFFO0FBQXRCLFVBTkYsQ0FsQkYsQ0FERixDQURGO0FBK0JEO0FBNUU0RDtBQUFBO0FBQUEsSUFDdENDLGdCQURzQzs7QUFBQSxtQ0FDekRyQyxVQUR5RCxlQUUxQztBQUNqQkcsSUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFakJMLElBQUFBLGNBQWMsRUFBRUcsc0JBQVVHLElBQVYsQ0FBZUQsVUFGZDtBQUdqQi9CLElBQUFBLGFBQWEsRUFBRTZCLHNCQUFVRyxJQUFWLENBQWVELFVBSGI7QUFJakJKLElBQUFBLG9CQUFvQixFQUFFRSxzQkFBVUcsSUFBVixDQUFlRDtBQUpwQixHQUYwQztBQThFL0QsU0FBTywyQkFBV3hDLFVBQVgsQ0FBUDtBQUNEOztlQUVjTixpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtCdXR0b24sIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvcic7XG5pbXBvcnQgTGF5ZXJHcm91cFNlbGVjdG9yRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvcic7XG5cbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2xheWVyLXBhbmVsL2NvbG9yLXNlbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7aW5qZWN0SW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ2xvY2FsaXphdGlvbic7XG5cbk1hcE1hbmFnZXJGYWN0b3J5LmRlcHMgPSBbTWFwU3R5bGVTZWxlY3RvckZhY3RvcnksIExheWVyR3JvdXBTZWxlY3RvckZhY3RvcnldO1xuXG5mdW5jdGlvbiBNYXBNYW5hZ2VyRmFjdG9yeShNYXBTdHlsZVNlbGVjdG9yLCBMYXllckdyb3VwU2VsZWN0b3IpIHtcbiAgY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBvbkNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uU3R5bGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIGlzU2VsZWN0aW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBidWlsZGluZ0NvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBTdHlsZS50aHJlZURCdWlsZGluZ0NvbG9yO1xuICAgIHNldENvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zZXQzZEJ1aWxkaW5nQ29sb3I7XG5cbiAgICBfdG9nZ2xlU2VsZWN0aW5nID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTZWxlY3Rpbmc6ICF0aGlzLnN0YXRlLmlzU2VsZWN0aW5nfSk7XG4gICAgfTtcblxuICAgIF9zZWxlY3RTdHlsZSA9IHZhbCA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uU3R5bGVDaGFuZ2UodmFsKTtcbiAgICAgIHRoaXMuX3RvZ2dsZVNlbGVjdGluZygpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bWFwU3R5bGUsIGludGx9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IG1hcFN0eWxlLm1hcFN0eWxlc1ttYXBTdHlsZS5zdHlsZVR5cGVdIHx8IHt9O1xuICAgICAgY29uc3QgZWRpdGFibGVMYXllcnMgPSAoY3VycmVudFN0eWxlLmxheWVyR3JvdXBzIHx8IFtdKS5tYXAobGcgPT4gbGcuc2x1Zyk7XG4gICAgICBjb25zdCBoYXNCdWlsZGluZ0xheWVyID0gbWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzWyczZCBidWlsZGluZyddO1xuICAgICAgY29uc3QgY29sb3JTZXRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgICB0aGlzLmJ1aWxkaW5nQ29sb3JTZWxlY3RvcixcbiAgICAgICAgdGhpcy5zZXRDb2xvclNlbGVjdG9yLFxuICAgICAgICAoc2VsZWN0ZWRDb2xvciwgc2V0Q29sb3IpID0+IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZENvbG9yLFxuICAgICAgICAgICAgc2V0Q29sb3IsXG4gICAgICAgICAgICBpc1JhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbWFwTWFuYWdlci4zZEJ1aWxkaW5nQ29sb3InfSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGNvbG9yU2V0cyA9IGNvbG9yU2V0U2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXN0eWxlLXBhbmVsXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXBTdHlsZVNlbGVjdG9yXG4gICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e3RoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlPXt0aGlzLl90b2dnbGVTZWxlY3Rpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2VkaXRhYmxlTGF5ZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgPExheWVyR3JvdXBTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxheWVycz17bWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzfVxuICAgICAgICAgICAgICAgIGVkaXRhYmxlTGF5ZXJzPXtlZGl0YWJsZUxheWVyc31cbiAgICAgICAgICAgICAgICB0b3BMYXllcnM9e21hcFN0eWxlLnRvcExheWVyR3JvdXBzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3IgY29sb3JTZXRzPXtjb2xvclNldHN9IGRpc2FibGVkPXshaGFzQnVpbGRpbmdMYXllcn0gLz5cbiAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLW1hcC1zdHlsZS1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dBZGRNYXBTdHlsZU1vZGFsfVxuICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFkZCBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtYXBNYW5hZ2VyLmFkZE1hcFN0eWxlJ30gLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmplY3RJbnRsKE1hcE1hbmFnZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==