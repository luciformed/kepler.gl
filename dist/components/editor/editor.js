"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditorFactory;

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGlDraw = require("react-map-gl-draw");

var _window = _interopRequireDefault(require("global/window"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _reselect = require("reselect");

var _featureActionPanel = _interopRequireDefault(require("./feature-action-panel"));

var _defaultSettings = require("../../constants/default-settings");

var _featureStyles = require("./feature-styles");

var _handleStyle = require("./handle-style");

var _keyevent = _interopRequireDefault(require("../../constants/keyevent"));

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: ", ";\n  position: relative;\n"])), function (props) {
  return props.editor.mode === _defaultSettings.EDITOR_MODES.EDIT ? 'pointer' : 'crosshair';
});

var editorLayerFilter = function editorLayerFilter(layer) {
  return _defaultSettings.EDITOR_AVAILABLE_LAYERS.includes(layer.type);
};

EditorFactory.deps = [_featureActionPanel["default"]];

function EditorFactory(FeatureActionPanel) {
  var Editor = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Editor, _Component);

    var _super = _createSuper(Editor);

    function Editor() {
      var _this;

      (0, _classCallCheck2["default"])(this, Editor);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showActions: false,
        lastPosition: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", function (props) {
        return props.layersToRender;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureIdSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'selectedFeature', 'id']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "editorFeatureSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'features']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentFilterSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.selectedFeatureIdSelector, function (filters, selectedFeatureId) {
        return filters.find(function (f) {
          return f.value && f.value.id === selectedFeatureId;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableLayersSeletor", (0, _reselect.createSelector)(_this.layerSelector, _this.layersToRenderSelector, function (layers, layersToRender) {
        return layers.filter(editorLayerFilter).filter(function (layer) {
          return layersToRender[layer.id];
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allFeaturesSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.editorFeatureSelector, function (filters, editorFeatures) {
        return filters.filter(function (f) {
          return f.type === _defaultSettings.FILTER_TYPES.polygon;
        }).map(function (f) {
          return f.value;
        }).concat(editorFeatures);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyPressed", function (event) {
        var isEnabled = _this.props.isEnabled;

        if (!isEnabled) {
          return;
        }

        switch (event.keyCode) {
          case _keyevent["default"].DOM_VK_DELETE:
          case _keyevent["default"].DOM_VK_BACK_SPACE:
            _this._onDeleteSelectedFeature();

            break;

          case _keyevent["default"].DOM_VK_ESCAPE:
            _this.props.onSelect(null);

            break;

          default:
            break;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelect", function (_ref) {
        var selectedFeatureId = _ref.selectedFeatureId,
            sourceEvent = _ref.sourceEvent;

        var allFeatures = _this.allFeaturesSelector(_this.props);

        _this.setState(_objectSpread({}, sourceEvent.rightButton ? {
          showActions: true,
          lastPosition: {
            x: sourceEvent.changedPointers[0].offsetX,
            y: sourceEvent.changedPointers[0].offsetY
          }
        } : null), function () {
          _this.props.onSelect(allFeatures.find(function (f) {
            return f.id === selectedFeatureId;
          }));
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeleteSelectedFeature", function () {
        if (_this.state.showActions) {
          _this.setState({
            showActions: false
          });
        }

        var editor = _this.props.editor;
        var _editor$selectedFeatu = editor.selectedFeature,
            selectedFeature = _editor$selectedFeatu === void 0 ? {} : _editor$selectedFeatu;

        _this.props.onDeleteFeature(selectedFeature);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeFeatureAction", function () {
        _this.setState({
          showActions: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleLayer", function (layer) {
        var selectedFeature = _this.props.editor.selectedFeature;

        if (!selectedFeature) {
          return;
        }

        _this.props.onTogglePolygonFilter(layer, selectedFeature);
      });
      return _this;
    }

    (0, _createClass2["default"])(Editor, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        _window["default"].addEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _window["default"].removeEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            clickRadius = _this$props.clickRadius,
            datasets = _this$props.datasets,
            editor = _this$props.editor,
            onUpdate = _this$props.onUpdate,
            style = _this$props.style;
        var _this$state = this.state,
            lastPosition = _this$state.lastPosition,
            showActions = _this$state.showActions;
        var selectedFeatureId = (0, _lodash["default"])(editor, ['selectedFeature', 'id']);
        var currentFilter = this.currentFilterSelector(this.props);
        var availableLayers = this.availableLayersSeletor(this.props);
        var allFeatures = this.allFeaturesSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
          editor: editor,
          className: (0, _classnames["default"])('editor', className),
          style: style
        }, /*#__PURE__*/_react["default"].createElement(_reactMapGlDraw.Editor, {
          clickRadius: clickRadius,
          mode: editor.mode,
          features: allFeatures,
          selectedFeatureId: selectedFeatureId,
          onSelect: this._onSelect,
          onUpdate: onUpdate,
          getEditHandleShape: _handleStyle.getEditHandleShape,
          getFeatureStyle: _featureStyles.getStyle,
          getEditHandleStyle: _handleStyle.getStyle
        }), showActions && Boolean(selectedFeatureId) ? /*#__PURE__*/_react["default"].createElement(FeatureActionPanel, {
          datasets: datasets,
          layers: availableLayers,
          currentFilter: currentFilter,
          onClose: this._closeFeatureAction,
          onDeleteFeature: this._onDeleteSelectedFeature,
          onToggleLayer: this._onToggleLayer,
          position: lastPosition
        }) : null);
      }
    }]);
    return Editor;
  }(_react.Component);

  (0, _defineProperty2["default"])(Editor, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
    datasets: _propTypes["default"].object.isRequired,
    editor: _propTypes["default"].object.isRequired,
    layersToRender: _propTypes["default"].object.isRequired,
    onSelect: _propTypes["default"].func.isRequired,
    onUpdate: _propTypes["default"].func.isRequired,
    onDeleteFeature: _propTypes["default"].func.isRequired,
    onTogglePolygonFilter: _propTypes["default"].func.isRequired,
    index: _propTypes["default"].number,
    classnames: _propTypes["default"].string,
    clickRadius: _propTypes["default"].number,
    isEnabled: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(Editor, "defaultProps", {
    clickRadius: _featureStyles.DEFAULT_RADIUS
  });
  Editor.displayName = 'Editor';
  return Editor;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9lZGl0b3IuanMiXSwibmFtZXMiOlsiU3R5bGVkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiZWRpdG9yIiwibW9kZSIsIkVESVRPUl9NT0RFUyIsIkVESVQiLCJlZGl0b3JMYXllckZpbHRlciIsImxheWVyIiwiRURJVE9SX0FWQUlMQUJMRV9MQVlFUlMiLCJpbmNsdWRlcyIsInR5cGUiLCJFZGl0b3JGYWN0b3J5IiwiZGVwcyIsIkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkiLCJGZWF0dXJlQWN0aW9uUGFuZWwiLCJFZGl0b3IiLCJzaG93QWN0aW9ucyIsImxhc3RQb3NpdGlvbiIsImxheWVycyIsImxheWVyc1RvUmVuZGVyIiwiZmlsdGVycyIsImZpbHRlclNlbGVjdG9yIiwic2VsZWN0ZWRGZWF0dXJlSWRTZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZUlkIiwiZmluZCIsImYiLCJ2YWx1ZSIsImlkIiwibGF5ZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJlZGl0b3JGZWF0dXJlU2VsZWN0b3IiLCJlZGl0b3JGZWF0dXJlcyIsIkZJTFRFUl9UWVBFUyIsInBvbHlnb24iLCJtYXAiLCJjb25jYXQiLCJldmVudCIsImlzRW5hYmxlZCIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19ERUxFVEUiLCJET01fVktfQkFDS19TUEFDRSIsIl9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSIsIkRPTV9WS19FU0NBUEUiLCJvblNlbGVjdCIsInNvdXJjZUV2ZW50IiwiYWxsRmVhdHVyZXMiLCJhbGxGZWF0dXJlc1NlbGVjdG9yIiwic2V0U3RhdGUiLCJyaWdodEJ1dHRvbiIsIngiLCJjaGFuZ2VkUG9pbnRlcnMiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJzdGF0ZSIsInNlbGVjdGVkRmVhdHVyZSIsIm9uRGVsZXRlRmVhdHVyZSIsIm9uVG9nZ2xlUG9seWdvbkZpbHRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25LZXlQcmVzc2VkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImNsaWNrUmFkaXVzIiwiZGF0YXNldHMiLCJvblVwZGF0ZSIsInN0eWxlIiwiY3VycmVudEZpbHRlciIsImN1cnJlbnRGaWx0ZXJTZWxlY3RvciIsImF2YWlsYWJsZUxheWVycyIsImF2YWlsYWJsZUxheWVyc1NlbGV0b3IiLCJfb25TZWxlY3QiLCJnZXRFZGl0SGFuZGxlU2hhcGUiLCJnZXRGZWF0dXJlU3R5bGUiLCJnZXRFZGl0SGFuZGxlU3R5bGUiLCJCb29sZWFuIiwiX2Nsb3NlRmVhdHVyZUFjdGlvbiIsIl9vblRvZ2dsZUxheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiaW5kZXgiLCJudW1iZXIiLCJjbGFzc25hbWVzIiwic3RyaW5nIiwiYm9vbCIsIkRFRkFVTFRfUkFESVVTIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsaUlBQ1AsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLEtBQXNCQyw4QkFBYUMsSUFBbkMsR0FBMEMsU0FBMUMsR0FBc0QsV0FBM0Q7QUFBQSxDQURFLENBQW5COztBQUtBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsS0FBSztBQUFBLFNBQUlDLHlDQUF3QkMsUUFBeEIsQ0FBaUNGLEtBQUssQ0FBQ0csSUFBdkMsQ0FBSjtBQUFBLENBQS9COztBQUVBQyxhQUFhLENBQUNDLElBQWQsR0FB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LFVBSFY7QUFJakJsRixJQUFBQSxNQUFNLEVBQUUrRSxzQkFBVUUsTUFBVixDQUFpQkMsVUFKUjtBQUtqQmpFLElBQUFBLGNBQWMsRUFBRThELHNCQUFVRSxNQUFWLENBQWlCQyxVQUxoQjtBQU1qQnZDLElBQUFBLFFBQVEsRUFBRW9DLHNCQUFVSSxJQUFWLENBQWVELFVBTlI7QUFPakJqQixJQUFBQSxRQUFRLEVBQUVjLHNCQUFVSSxJQUFWLENBQWVELFVBUFI7QUFRakIxQixJQUFBQSxlQUFlLEVBQUV1QixzQkFBVUksSUFBVixDQUFlRCxVQVJmO0FBU2pCekIsSUFBQUEscUJBQXFCLEVBQUVzQixzQkFBVUksSUFBVixDQUFlRCxVQVRyQjtBQVdqQkUsSUFBQUEsS0FBSyxFQUFFTCxzQkFBVU0sTUFYQTtBQVlqQkMsSUFBQUEsVUFBVSxFQUFFUCxzQkFBVVEsTUFaTDtBQWFqQnhCLElBQUFBLFdBQVcsRUFBRWdCLHNCQUFVTSxNQWJOO0FBY2pCakQsSUFBQUEsU0FBUyxFQUFFMkMsc0JBQVVTO0FBZEosR0FGbUM7QUFBQSxtQ0FDbEQzRSxNQURrRCxrQkFtQmhDO0FBQ3BCa0QsSUFBQUEsV0FBVyxFQUFFMEI7QUFETyxHQW5CZ0M7QUF3S3hENUUsRUFBQUEsTUFBTSxDQUFDNkUsV0FBUCxHQUFxQixRQUFyQjtBQUVBLFNBQU83RSxNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RWRpdG9yIGFzIERyYXd9IGZyb20gJ3JlYWN0LW1hcC1nbC1kcmF3JztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5IGZyb20gJy4vZmVhdHVyZS1hY3Rpb24tcGFuZWwnO1xuaW1wb3J0IHtGSUxURVJfVFlQRVMsIEVESVRPUl9NT0RFUywgRURJVE9SX0FWQUlMQUJMRV9MQVlFUlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtERUZBVUxUX1JBRElVUywgZ2V0U3R5bGUgYXMgZ2V0RmVhdHVyZVN0eWxlfSBmcm9tICcuL2ZlYXR1cmUtc3R5bGVzJztcbmltcG9ydCB7Z2V0U3R5bGUgYXMgZ2V0RWRpdEhhbmRsZVN0eWxlLCBnZXRFZGl0SGFuZGxlU2hhcGV9IGZyb20gJy4vaGFuZGxlLXN0eWxlJztcbmltcG9ydCBLZXlFdmVudCBmcm9tICdjb25zdGFudHMva2V5ZXZlbnQnO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiAke3Byb3BzID0+IChwcm9wcy5lZGl0b3IubW9kZSA9PT0gRURJVE9SX01PREVTLkVESVQgPyAncG9pbnRlcicgOiAnY3Jvc3NoYWlyJyl9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBlZGl0b3JMYXllckZpbHRlciA9IGxheWVyID0+IEVESVRPUl9BVkFJTEFCTEVfTEFZRVJTLmluY2x1ZGVzKGxheWVyLnR5cGUpO1xuXG5FZGl0b3JGYWN0b3J5LmRlcHMgPSBbRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvckZhY3RvcnkoRmVhdHVyZUFjdGlvblBhbmVsKSB7XG4gIGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgZWRpdG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnNUb1JlbmRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvblVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uRGVsZXRlRmVhdHVyZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9uVG9nZ2xlUG9seWdvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBjbGFzc25hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgY2xpY2tSYWRpdXM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBpc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBjbGlja1JhZGl1czogREVGQVVMVF9SQURJVVNcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBzaG93QWN0aW9uczogZmFsc2UsXG4gICAgICBsYXN0UG9zaXRpb246IG51bGxcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5UHJlc3NlZCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5UHJlc3NlZCk7XG4gICAgfVxuXG4gICAgbGF5ZXJTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxheWVycztcbiAgICBsYXllcnNUb1JlbmRlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJzVG9SZW5kZXI7XG4gICAgZmlsdGVyU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXJzO1xuICAgIHNlbGVjdGVkRmVhdHVyZUlkU2VsZWN0b3IgPSBwcm9wcyA9PiBnZXQocHJvcHMsIFsnZWRpdG9yJywgJ3NlbGVjdGVkRmVhdHVyZScsICdpZCddKTtcbiAgICBlZGl0b3JGZWF0dXJlU2VsZWN0b3IgPSBwcm9wcyA9PiBnZXQocHJvcHMsIFsnZWRpdG9yJywgJ2ZlYXR1cmVzJ10pO1xuXG4gICAgY3VycmVudEZpbHRlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVJZFNlbGVjdG9yLFxuICAgICAgKGZpbHRlcnMsIHNlbGVjdGVkRmVhdHVyZUlkKSA9PiBmaWx0ZXJzLmZpbmQoZiA9PiBmLnZhbHVlICYmIGYudmFsdWUuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKVxuICAgICk7XG5cbiAgICBhdmFpbGFibGVMYXllcnNTZWxldG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmxheWVyU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IsXG4gICAgICAobGF5ZXJzLCBsYXllcnNUb1JlbmRlcikgPT5cbiAgICAgICAgbGF5ZXJzLmZpbHRlcihlZGl0b3JMYXllckZpbHRlcikuZmlsdGVyKGxheWVyID0+IHtcbiAgICAgICAgICByZXR1cm4gbGF5ZXJzVG9SZW5kZXJbbGF5ZXIuaWRdO1xuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBhbGxGZWF0dXJlc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5lZGl0b3JGZWF0dXJlU2VsZWN0b3IsXG4gICAgICAoZmlsdGVycywgZWRpdG9yRmVhdHVyZXMpID0+XG4gICAgICAgIGZpbHRlcnNcbiAgICAgICAgICAuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbilcbiAgICAgICAgICAubWFwKGYgPT4gZi52YWx1ZSlcbiAgICAgICAgICAuY29uY2F0KGVkaXRvckZlYXR1cmVzKVxuICAgICk7XG5cbiAgICBfb25LZXlQcmVzc2VkID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qge2lzRW5hYmxlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19ERUxFVEU6XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0JBQ0tfU1BBQ0U6XG4gICAgICAgICAgdGhpcy5fb25EZWxldGVTZWxlY3RlZEZlYXR1cmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRVNDQVBFOlxuICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vblNlbGVjdCA9ICh7c2VsZWN0ZWRGZWF0dXJlSWQsIHNvdXJjZUV2ZW50fSkgPT4ge1xuICAgICAgY29uc3QgYWxsRmVhdHVyZXMgPSB0aGlzLmFsbEZlYXR1cmVzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgLi4uKHNvdXJjZUV2ZW50LnJpZ2h0QnV0dG9uXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzaG93QWN0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsYXN0UG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgIHg6IHNvdXJjZUV2ZW50LmNoYW5nZWRQb2ludGVyc1swXS5vZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgeTogc291cmNlRXZlbnQuY2hhbmdlZFBvaW50ZXJzWzBdLm9mZnNldFlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbClcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoYWxsRmVhdHVyZXMuZmluZChmID0+IGYuaWQgPT09IHNlbGVjdGVkRmVhdHVyZUlkKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfTtcblxuICAgIF9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dBY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7ZWRpdG9yfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7c2VsZWN0ZWRGZWF0dXJlID0ge319ID0gZWRpdG9yO1xuICAgICAgdGhpcy5wcm9wcy5vbkRlbGV0ZUZlYXR1cmUoc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICB9O1xuXG4gICAgX2Nsb3NlRmVhdHVyZUFjdGlvbiA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dBY3Rpb25zOiBmYWxzZX0pO1xuICAgIH07XG5cbiAgICBfb25Ub2dnbGVMYXllciA9IGxheWVyID0+IHtcbiAgICAgIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gdGhpcy5wcm9wcy5lZGl0b3I7XG4gICAgICBpZiAoIXNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMub25Ub2dnbGVQb2x5Z29uRmlsdGVyKGxheWVyLCBzZWxlY3RlZEZlYXR1cmUpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7Y2xhc3NOYW1lLCBjbGlja1JhZGl1cywgZGF0YXNldHMsIGVkaXRvciwgb25VcGRhdGUsIHN0eWxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtsYXN0UG9zaXRpb24sIHNob3dBY3Rpb25zfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBzZWxlY3RlZEZlYXR1cmVJZCA9IGdldChlZGl0b3IsIFsnc2VsZWN0ZWRGZWF0dXJlJywgJ2lkJ10pO1xuICAgICAgY29uc3QgY3VycmVudEZpbHRlciA9IHRoaXMuY3VycmVudEZpbHRlclNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgYXZhaWxhYmxlTGF5ZXJzID0gdGhpcy5hdmFpbGFibGVMYXllcnNTZWxldG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgYWxsRmVhdHVyZXMgPSB0aGlzLmFsbEZlYXR1cmVzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyIGVkaXRvcj17ZWRpdG9yfSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2VkaXRvcicsIGNsYXNzTmFtZSl9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPERyYXdcbiAgICAgICAgICAgIGNsaWNrUmFkaXVzPXtjbGlja1JhZGl1c31cbiAgICAgICAgICAgIG1vZGU9e2VkaXRvci5tb2RlfVxuICAgICAgICAgICAgZmVhdHVyZXM9e2FsbEZlYXR1cmVzfVxuICAgICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlSWQ9e3NlbGVjdGVkRmVhdHVyZUlkfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuX29uU2VsZWN0fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgZ2V0RWRpdEhhbmRsZVNoYXBlPXtnZXRFZGl0SGFuZGxlU2hhcGV9XG4gICAgICAgICAgICBnZXRGZWF0dXJlU3R5bGU9e2dldEZlYXR1cmVTdHlsZX1cbiAgICAgICAgICAgIGdldEVkaXRIYW5kbGVTdHlsZT17Z2V0RWRpdEhhbmRsZVN0eWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3Nob3dBY3Rpb25zICYmIEJvb2xlYW4oc2VsZWN0ZWRGZWF0dXJlSWQpID8gKFxuICAgICAgICAgICAgPEZlYXR1cmVBY3Rpb25QYW5lbFxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgIGxheWVycz17YXZhaWxhYmxlTGF5ZXJzfVxuICAgICAgICAgICAgICBjdXJyZW50RmlsdGVyPXtjdXJyZW50RmlsdGVyfVxuICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZUZlYXR1cmVBY3Rpb259XG4gICAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dGhpcy5fb25EZWxldGVTZWxlY3RlZEZlYXR1cmV9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlTGF5ZXI9e3RoaXMuX29uVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtsYXN0UG9zaXRpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZFdyYXBwZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEVkaXRvci5kaXNwbGF5TmFtZSA9ICdFZGl0b3InO1xuXG4gIHJldHVybiBFZGl0b3I7XG59XG4iXX0=