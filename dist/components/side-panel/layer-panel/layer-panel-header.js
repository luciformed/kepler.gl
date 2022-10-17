"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTitleSectionFactory = LayerTitleSectionFactory;
exports["default"] = exports.LayerLabelEditor = exports.DragHandle = exports.defaultProps = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

var _localization = require("../../../localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var propTypes = {
  // required
  layerId: _propTypes["default"].string.isRequired,
  isVisible: _propTypes["default"].bool.isRequired,
  onToggleVisibility: _propTypes["default"].func.isRequired,
  onUpdateLayerLabel: _propTypes["default"].func.isRequired,
  onToggleEnableConfig: _propTypes["default"].func.isRequired,
  onRemoveLayer: _propTypes["default"].func.isRequired,
  onDuplicateLayer: _propTypes["default"].func.isRequired,
  isConfigActive: _propTypes["default"].bool.isRequired,
  // optional
  showRemoveLayer: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  layerType: _propTypes["default"].string,
  isDragNDropEnabled: _propTypes["default"].bool,
  labelRCGColorValues: _propTypes["default"].arrayOf(_propTypes["default"].number)
};
var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
exports.defaultProps = defaultProps;
var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n  }\n"])), function (props) {
  return props.theme.layerPanelHeaderHeight;
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n"])), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var StyledDragHandle = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});

var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});
exports.DragHandle = DragHandle;

var LayerLabelEditor = function LayerLabelEditor(_ref2) {
  var layerId = _ref2.layerId,
      label = _ref2.label,
      onEdit = _ref2.onEdit;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: onEdit,
    id: "".concat(layerId, ":input-layer-label")
  });
};

exports.LayerLabelEditor = LayerLabelEditor;

function LayerTitleSectionFactory() {
  var StyledLayerTitleSection = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 4px;\n\n    .layer__title__type {\n      color: ", ";\n      font-size: 10px;\n      line-height: 12px;\n      letter-spacing: 0.37px;\n      text-transform: capitalize;\n    }\n  "])), function (props) {
    return props.theme.subtextColor;
  });

  var LayerTitleSection = function LayerTitleSection(_ref3) {
    var layerType = _ref3.layerType,
        layerId = _ref3.layerId,
        label = _ref3.label,
        onUpdateLayerLabel = _ref3.onUpdateLayerLabel;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerTitleSection, {
      className: "layer__title"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(LayerLabelEditor, {
      layerId: layerId,
      label: label,
      onEdit: onUpdateLayerLabel
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer__title__type"
    }, layerType && /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "layer.type.".concat(layerType.toLowerCase())
    }))));
  };

  return LayerTitleSection;
}

LayerPanelHeaderFactory.deps = [LayerTitleSectionFactory, _panelHeaderAction["default"]];
var defaultActionIcons = {
  remove: _icons.Trash,
  visible: _icons.EyeSeen,
  hidden: _icons.EyeUnseen,
  enableConfig: _icons.ArrowDown,
  duplicate: _icons.Copy
};

function LayerPanelHeaderFactory(LayerTitleSection, PanelHeaderAction) {
  var LayerPanelHeader = function LayerPanelHeader(_ref4) {
    var isConfigActive = _ref4.isConfigActive,
        isDragNDropEnabled = _ref4.isDragNDropEnabled,
        isVisible = _ref4.isVisible,
        label = _ref4.label,
        layerId = _ref4.layerId,
        layerType = _ref4.layerType,
        labelRCGColorValues = _ref4.labelRCGColorValues,
        onToggleVisibility = _ref4.onToggleVisibility,
        onUpdateLayerLabel = _ref4.onUpdateLayerLabel,
        onToggleEnableConfig = _ref4.onToggleEnableConfig,
        onDuplicateLayer = _ref4.onDuplicateLayer,
        onRemoveLayer = _ref4.onRemoveLayer,
        showRemoveLayer = _ref4.showRemoveLayer,
        _ref4$actionIcons = _ref4.actionIcons,
        actionIcons = _ref4$actionIcons === void 0 ? defaultActionIcons : _ref4$actionIcons;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isOpen = _useState2[0],
        setOpen = _useState2[1];

    var toggleLayerConfigurator = function toggleLayerConfigurator(e) {
      setOpen(!isOpen);
      onToggleEnableConfig(e);
    };

    return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
      className: (0, _classnames["default"])('layer-panel__header', {
        'sort--handle': !isConfigActive
      }),
      active: isConfigActive,
      labelRCGColorValues: labelRCGColorValues,
      onClick: toggleLayerConfigurator
    }, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
      className: "layer-panel__header__content"
    }, isDragNDropEnabled && /*#__PURE__*/_react["default"].createElement(DragHandle, {
      className: "layer__drag-handle"
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
      height: "20px"
    })), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
      layerId: layerId,
      label: label,
      onUpdateLayerLabel: onUpdateLayerLabel,
      layerType: layerType
    })), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
      className: "layer-panel__header__actions"
    }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__remove-layer",
      id: layerId,
      tooltip: 'tooltip.removeLayer',
      onClick: onRemoveLayer,
      tooltipType: "error",
      IconComponent: actionIcons.remove
    }) : null, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__visibility-toggle",
      id: layerId,
      tooltip: isVisible ? 'tooltip.hideLayer' : 'tooltip.showLayer',
      onClick: onToggleVisibility,
      IconComponent: isVisible ? actionIcons.visible : actionIcons.hidden
    }), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__duplicate",
      id: layerId,
      tooltip: 'tooltip.duplicateLayer',
      onClick: onDuplicateLayer,
      IconComponent: actionIcons.duplicate
    }), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: (0, _classnames["default"])('layer__enable-config ', {
        'is-open': isOpen
      }),
      id: layerId,
      tooltip: 'tooltip.layerSettings',
      onClick: toggleLayerConfigurator,
      IconComponent: actionIcons.enableConfig
    })));
  };

  LayerPanelHeader.propTypes = propTypes;
  LayerPanelHeader.defaultProps = defaultProps;
  return LayerPanelHeader;
}

var _default = LayerPanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImxheWVySWQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiaXNWaXNpYmxlIiwiYm9vbCIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsImZ1bmMiLCJvblVwZGF0ZUxheWVyTGFiZWwiLCJvblRvZ2dsZUVuYWJsZUNvbmZpZyIsIm9uUmVtb3ZlTGF5ZXIiLCJvbkR1cGxpY2F0ZUxheWVyIiwiaXNDb25maWdBY3RpdmUiLCJzaG93UmVtb3ZlTGF5ZXIiLCJsYWJlbCIsImxheWVyVHlwZSIsImlzRHJhZ05Ecm9wRW5hYmxlZCIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsImxheWVyUGFuZWxIZWFkZXJIZWlnaHQiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIkhlYWRlckxhYmVsU2VjdGlvbiIsInN0eWxlZCIsImRpdiIsInRleHRDb2xvciIsIkhlYWRlckFjdGlvblNlY3Rpb24iLCJTdHlsZWREcmFnSGFuZGxlIiwidGV4dENvbG9ySGwiLCJEcmFnSGFuZGxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJMYXllckxhYmVsRWRpdG9yIiwib25FZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkxheWVyVGl0bGVTZWN0aW9uRmFjdG9yeSIsIlN0eWxlZExheWVyVGl0bGVTZWN0aW9uIiwic3VidGV4dENvbG9yIiwiTGF5ZXJUaXRsZVNlY3Rpb24iLCJ0b0xvd2VyQ2FzZSIsIkxheWVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiZGVwcyIsIlBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeSIsImRlZmF1bHRBY3Rpb25JY29ucyIsInJlbW92ZSIsIlRyYXNoIiwidmlzaWJsZSIsIkV5ZVNlZW4iLCJoaWRkZW4iLCJFeWVVbnNlZW4iLCJlbmFibGVDb25maWciLCJBcnJvd0Rvd24iLCJkdXBsaWNhdGUiLCJDb3B5IiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJMYXllclBhbmVsSGVhZGVyIiwiYWN0aW9uSWNvbnMiLCJpc09wZW4iLCJzZXRPcGVuIiwidG9nZ2xlTGF5ZXJDb25maWd1cmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlY7QUFHaEJDLEVBQUFBLFNBQVMsRUFBRUgsc0JBQVVJLElBQVYsQ0FBZUYsVUFIVjtBQUloQkcsRUFBQUEsa0JBQWtCLEVBQUVMLHNCQUFVTSxJQUFWLENBQWVKLFVBSm5CO0FBS2hCSyxFQUFBQSxrQkFBa0IsRUFBRVAsc0JBQVVNLElBQVYsQ0FBZUosVUFMbkI7QUFNaEJNLEVBQUFBLG9CQUFvQixFQUFFUixzQkFBVU0sSUFBVixDQUFlSixVQU5yQjtBQU9oQk8sRUFBQUEsYUFBYSxFQUFFVCxzQkFBVU0sSUFBVixDQUFlSixVQVBkO0FBUWhCUSxFQUFBQSxnQkFBZ0IsRUFBRVYsc0JBQVVNLElBQVYsQ0FBZUosVUFSakI7QUFTaEJTLEVBQUFBLGNBQWMsRUFBRVgsc0JBQVVJLElBQVYsQ0FBZUYsVUFUZjtBQVdoQjtBQUNBVSxFQUFBQSxlQUFlLEVBQUVaLHNCQUFVSSxJQVpYO0FBYWhCUyxFQUFBQSxLQUFLLEVBQUViLHNCQUFVQyxNQWJEO0FBY2hCYSxFQUFBQSxTQUFTLEVBQUVkLHNCQUFVQyxNQWRMO0FBZWhCYyxFQUFBQSxrQkFBa0IsRUFBRWYsc0JBQVVJLElBZmQ7QUFnQmhCWSxFQUFBQSxtQkFBbUIsRUFBRWhCLHNCQUFVaUIsT0FB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RixTQUFTLEdBQUcwRCxXQUFXLENBQUNWLE9BQWYsR0FBeUJVLFdBQVcsQ0FBQ1I7QUFML0QsTUFYRixlQWtCRSxnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLGtCQURaO0FBRUUsTUFBQSxFQUFFLEVBQUV0RCxPQUZOO0FBR0UsTUFBQSxPQUFPLEVBQUUsd0JBSFg7QUFJRSxNQUFBLE9BQU8sRUFBRVcsZ0JBSlg7QUFLRSxNQUFBLGFBQWEsRUFBRW1ELFdBQVcsQ0FBQ0o7QUFMN0IsTUFsQkYsZUF5QkUsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyx1QkFBWCxFQUFvQztBQUM3QyxtQkFBV0s7QUFEa0MsT0FBcEMsQ0FEYjtBQUlFLE1BQUEsRUFBRSxFQUFFL0QsT0FKTjtBQUtFLE1BQUEsT0FBTyxFQUFFLHVCQUxYO0FBTUUsTUFBQSxPQUFPLEVBQUVpRSx1QkFOWDtBQU9FLE1BQUEsYUFBYSxFQUFFSCxXQUFXLENBQUNOO0FBUDdCLE1BekJGLENBckJGLENBREY7QUEyREQsR0FoRkQ7O0FBa0ZBSyxFQUFBQSxnQkFBZ0IsQ0FBQzlELFNBQWpCLEdBQTZCQSxTQUE3QjtBQUNBOEQsRUFBQUEsZ0JBQWdCLENBQUN6QyxZQUFqQixHQUFnQ0EsWUFBaEM7QUFFQSxTQUFPeUMsZ0JBQVA7QUFDRDs7ZUFFY2YsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1NvcnRhYmxlSGFuZGxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5pbXBvcnQge0NvcHksIEFycm93RG93biwgRXllU2VlbiwgRXllVW5zZWVuLCBUcmFzaCwgVmVydERvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuaW1wb3J0IHtJbmxpbmVJbnB1dCwgU3R5bGVkUGFuZWxIZWFkZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnbG9jYWxpemF0aW9uJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvLyByZXF1aXJlZFxuICBsYXllcklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblVwZGF0ZUxheWVyTGFiZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uVG9nZ2xlRW5hYmxlQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkR1cGxpY2F0ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc0NvbmZpZ0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvLyBvcHRpb25hbFxuICBzaG93UmVtb3ZlTGF5ZXI6IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGF5ZXJUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0RyYWdORHJvcEVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbFJDR0NvbG9yVmFsdWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgaXNEcmFnTkRyb3BFbmFibGVkOiB0cnVlLFxuICBzaG93UmVtb3ZlTGF5ZXI6IHRydWVcbn07XG5cbmNvbnN0IFN0eWxlZExheWVyUGFuZWxIZWFkZXIgPSBzdHlsZWQoU3R5bGVkUGFuZWxIZWFkZXIpYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJQYW5lbEhlYWRlckhlaWdodH1weDtcbiAgLmxheWVyX19yZW1vdmUtbGF5ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG5cbiAgICAubGF5ZXJfX2RyYWctaGFuZGxlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmxheWVyX19yZW1vdmUtbGF5ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlckxhYmVsU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5jb25zdCBIZWFkZXJBY3Rpb25TZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdIYW5kbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRHJhZ0hhbmRsZSA9IFNvcnRhYmxlSGFuZGxlKCh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+IChcbiAgPFN0eWxlZERyYWdIYW5kbGUgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L1N0eWxlZERyYWdIYW5kbGU+XG4pKTtcblxuZXhwb3J0IGNvbnN0IExheWVyTGFiZWxFZGl0b3IgPSAoe2xheWVySWQsIGxhYmVsLCBvbkVkaXR9KSA9PiAoXG4gIDxJbmxpbmVJbnB1dFxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBjbGFzc05hbWU9XCJsYXllcl9fdGl0bGVfX2VkaXRvclwiXG4gICAgdmFsdWU9e2xhYmVsfVxuICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9fVxuICAgIG9uQ2hhbmdlPXtvbkVkaXR9XG4gICAgaWQ9e2Ake2xheWVySWR9OmlucHV0LWxheWVyLWxhYmVsYH1cbiAgLz5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXllclRpdGxlU2VjdGlvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IFN0eWxlZExheWVyVGl0bGVTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuXG4gICAgLmxheWVyX190aXRsZV9fdHlwZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zN3B4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICBgO1xuICBjb25zdCBMYXllclRpdGxlU2VjdGlvbiA9ICh7bGF5ZXJUeXBlLCBsYXllcklkLCBsYWJlbCwgb25VcGRhdGVMYXllckxhYmVsfSkgPT4gKFxuICAgIDxTdHlsZWRMYXllclRpdGxlU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllcl9fdGl0bGVcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMYXllckxhYmVsRWRpdG9yIGxheWVySWQ9e2xheWVySWR9IGxhYmVsPXtsYWJlbH0gb25FZGl0PXtvblVwZGF0ZUxheWVyTGFiZWx9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlX190eXBlXCI+XG4gICAgICAgICAge2xheWVyVHlwZSAmJiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YGxheWVyLnR5cGUuJHtsYXllclR5cGUudG9Mb3dlckNhc2UoKX1gfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZExheWVyVGl0bGVTZWN0aW9uPlxuICApO1xuICByZXR1cm4gTGF5ZXJUaXRsZVNlY3Rpb247XG59XG5cbkxheWVyUGFuZWxIZWFkZXJGYWN0b3J5LmRlcHMgPSBbTGF5ZXJUaXRsZVNlY3Rpb25GYWN0b3J5LCBQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnldO1xuY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICByZW1vdmU6IFRyYXNoLFxuICB2aXNpYmxlOiBFeWVTZWVuLFxuICBoaWRkZW46IEV5ZVVuc2VlbixcbiAgZW5hYmxlQ29uZmlnOiBBcnJvd0Rvd24sXG4gIGR1cGxpY2F0ZTogQ29weVxufTtcbmZ1bmN0aW9uIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5KExheWVyVGl0bGVTZWN0aW9uLCBQYW5lbEhlYWRlckFjdGlvbikge1xuICBjb25zdCBMYXllclBhbmVsSGVhZGVyID0gKHtcbiAgICBpc0NvbmZpZ0FjdGl2ZSxcbiAgICBpc0RyYWdORHJvcEVuYWJsZWQsXG4gICAgaXNWaXNpYmxlLFxuICAgIGxhYmVsLFxuICAgIGxheWVySWQsXG4gICAgbGF5ZXJUeXBlLFxuICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXMsXG4gICAgb25Ub2dnbGVWaXNpYmlsaXR5LFxuICAgIG9uVXBkYXRlTGF5ZXJMYWJlbCxcbiAgICBvblRvZ2dsZUVuYWJsZUNvbmZpZyxcbiAgICBvbkR1cGxpY2F0ZUxheWVyLFxuICAgIG9uUmVtb3ZlTGF5ZXIsXG4gICAgc2hvd1JlbW92ZUxheWVyLFxuICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zXG4gIH0pID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGVMYXllckNvbmZpZ3VyYXRvciA9IGUgPT4ge1xuICAgICAgc2V0T3BlbighaXNPcGVuKTtcbiAgICAgIG9uVG9nZ2xlRW5hYmxlQ29uZmlnKGUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclBhbmVsSGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItcGFuZWxfX2hlYWRlcicsIHtcbiAgICAgICAgICAnc29ydC0taGFuZGxlJzogIWlzQ29uZmlnQWN0aXZlXG4gICAgICAgIH0pfVxuICAgICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtsYWJlbFJDR0NvbG9yVmFsdWVzfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVMYXllckNvbmZpZ3VyYXRvcn1cbiAgICAgID5cbiAgICAgICAgPEhlYWRlckxhYmVsU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAge2lzRHJhZ05Ecm9wRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8RHJhZ0hhbmRsZSBjbGFzc05hbWU9XCJsYXllcl9fZHJhZy1oYW5kbGVcIj5cbiAgICAgICAgICAgICAgPFZlcnREb3RzIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExheWVyVGl0bGVTZWN0aW9uXG4gICAgICAgICAgICBsYXllcklkPXtsYXllcklkfVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgb25VcGRhdGVMYXllckxhYmVsPXtvblVwZGF0ZUxheWVyTGFiZWx9XG4gICAgICAgICAgICBsYXllclR5cGU9e2xheWVyVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWRlckxhYmVsU2VjdGlvbj5cbiAgICAgICAgPEhlYWRlckFjdGlvblNlY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXItcGFuZWxfX2hlYWRlcl9fYWN0aW9uc1wiPlxuICAgICAgICAgIHtzaG93UmVtb3ZlTGF5ZXIgPyAoXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3JlbW92ZS1sYXllclwiXG4gICAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgICB0b29sdGlwPXsndG9vbHRpcC5yZW1vdmVMYXllcid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlTGF5ZXJ9XG4gICAgICAgICAgICAgIHRvb2x0aXBUeXBlPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXthY3Rpb25JY29ucy5yZW1vdmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3Zpc2liaWxpdHktdG9nZ2xlXCJcbiAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgdG9vbHRpcD17aXNWaXNpYmxlID8gJ3Rvb2x0aXAuaGlkZUxheWVyJyA6ICd0b29sdGlwLnNob3dMYXllcid9XG4gICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVZpc2liaWxpdHl9XG4gICAgICAgICAgICBJY29uQ29tcG9uZW50PXtpc1Zpc2libGUgPyBhY3Rpb25JY29ucy52aXNpYmxlIDogYWN0aW9uSWNvbnMuaGlkZGVufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllcl9fZHVwbGljYXRlXCJcbiAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAuZHVwbGljYXRlTGF5ZXInfVxuICAgICAgICAgICAgb25DbGljaz17b25EdXBsaWNhdGVMYXllcn1cbiAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmR1cGxpY2F0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXllcl9fZW5hYmxlLWNvbmZpZyAnLCB7XG4gICAgICAgICAgICAgICdpcy1vcGVuJzogaXNPcGVuXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAubGF5ZXJTZXR0aW5ncyd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMYXllckNvbmZpZ3VyYXRvcn1cbiAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWRlckFjdGlvblNlY3Rpb24+XG4gICAgICA8L1N0eWxlZExheWVyUGFuZWxIZWFkZXI+XG4gICAgKTtcbiAgfTtcblxuICBMYXllclBhbmVsSGVhZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiAgTGF5ZXJQYW5lbEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgcmV0dXJuIExheWVyUGFuZWxIZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUGFuZWxIZWFkZXJGYWN0b3J5O1xuIl19