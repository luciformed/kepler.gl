"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _locales = require("./locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  property: {
    weight: 'weight',
    label: 'label',
    fillColor: 'fill color',
    color: 'color',
    coverage: 'coverage',
    strokeColor: 'stroke color',
    radius: 'radius',
    outline: 'outline',
    stroke: 'stroke',
    density: 'density',
    height: 'height',
    sum: 'sum',
    pointCount: 'Point Count'
  },
  placeholder: {
    search: 'Search',
    selectField: 'Select a field',
    yAxis: 'Y Axis',
    selectType: 'Select A Type',
    selectValue: 'Select A Value',
    enterValue: 'Enter a value',
    empty: 'empty'
  },
  misc: {
    by: '',
    valuesIn: 'Values in',
    valueEquals: 'Value equals',
    dataSource: 'Data Source',
    brushRadius: 'Brush Radius (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Map Layers',
    label: 'Label',
    road: 'Road',
    border: 'Border',
    building: 'Building',
    water: 'Water',
    land: 'Land',
    '3dBuilding': '3d Building'
  },
  panel: {
    text: {
      label: 'label',
      labelWithId: 'Label {labelId}',
      fontSize: 'Font size',
      fontColor: 'Font color',
      textAnchor: 'Text anchor',
      alignment: 'Alignment',
      addMoreLabel: 'Add More Label'
    }
  },
  sidebar: {
    panels: {
      layer: 'Layers',
      filter: 'Filters',
      interaction: 'Interactions',
      basemap: 'Base map'
    }
  },
  layer: {
    required: 'Required*',
    radius: 'Radius',
    color: 'Color',
    fillColor: 'Fill Color',
    outline: 'Outline',
    weight: 'Weight',
    propertyBasedOn: '{property} based on',
    coverage: 'Coverage',
    stroke: 'Stroke',
    strokeWidth: 'Stroke Width',
    strokeColor: 'Stroke Color',
    basic: 'Basic',
    trailLength: 'Trail Length',
    trailLengthDescription: 'Number of seconds for a path to completely fade out',
    newLayer: 'new layer',
    elevationByDescription: 'When off, height is based on count of points',
    colorByDescription: 'When off, color is based on count of points',
    aggregateBy: 'Aggregate {field} by',
    '3DModel': '3D Model',
    '3DModelOptions': '3D Model Options',
    type: {
      point: 'point',
      arc: 'arc',
      line: 'line',
      grid: 'grid',
      hexbin: 'hexbin',
      polygon: 'polygon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icon',
      heatmap: 'heatmap',
      hexagon: 'hexagon',
      hexagonid: 'H3',
      trip: 'trip',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Stroke Width (Pixels)',
    strokeWidthRange: 'Stroke Width Range',
    radius: 'Radius',
    fixedRadius: 'Fixed Radius to meter',
    fixedRadiusDescription: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    radiusRange: 'Radius Range',
    clusterRadius: 'Cluster Radius in Pixels',
    radiusRangePixels: 'Radius Range in pixels',
    opacity: 'Opacity',
    coverage: 'Coverage',
    outline: 'Outline',
    colorRange: 'Color range',
    stroke: 'Stroke',
    strokeColor: 'Stroke Color',
    strokeColorRange: 'Stroke Color range',
    targetColor: 'Target Color',
    colorAggregation: 'Color Aggregation',
    heightAggregation: 'Height Aggregation',
    resolutionRange: 'Resolution range',
    sizeScale: 'Size Scale',
    worldUnitSize: 'World Unit Size',
    elevationScale: 'Elevation Scale',
    heightScale: 'Height Scale',
    coverageRange: 'Coverage Range',
    highPrecisionRendering: 'High Precision Rendering',
    highPrecisionRenderingDescription: 'High precision will result in slower performance',
    height: 'Height',
    heightDescription: 'Click button at top right of the map to switch to 3d view',
    fill: 'Fill',
    enablePolygonHeight: 'Enable Polygon Height',
    showWireframe: 'Show Wireframe',
    weightIntensity: 'Weight Intensity',
    zoomScale: 'Zoom Scale',
    heightRange: 'Height Range'
  },
  layerManager: {
    addData: 'Add Data',
    addLayer: 'Add Layer',
    layerBlending: 'Layer Blending'
  },
  mapManager: {
    mapStyle: 'Map style',
    addMapStyle: 'Add Map Style',
    '3dBuildingColor': '3D Building Color'
  },
  layerConfiguration: {
    defaultDescription: 'Calculate {property} based on selected field',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Add Filter'
  },
  datasetTitle: {
    showDataTable: 'Show data table',
    removeDataset: 'Remove dataset'
  },
  datasetInfo: {
    rowCount: '{rowCount} rows'
  },
  tooltip: {
    hideLayer: 'hide layer',
    showLayer: 'show layer',
    hideFeature: 'Hide Feature',
    showFeature: 'Show feature',
    hide: 'hide',
    show: 'show',
    removeLayer: 'Remove layer',
    duplicateLayer: 'Duplicate layer',
    layerSettings: 'Layer settings',
    closePanel: 'Close current panel',
    switchToDualView: 'Switch to dual map view',
    showLegend: 'show legend',
    disable3DMap: 'Disable 3D Map',
    DrawOnMap: 'Draw on map',
    selectLocale: 'Select locale',
    hideLayerPanel: 'Hide layer panel',
    showLayerPanel: 'Show layer panel',
    moveToTop: 'Move to top of data layers',
    selectBaseMapStyle: 'Select Base Map Style',
    "delete": 'Delete',
    timePlayback: 'Time Playback',
    cloudStorage: 'Cloud Storage',
    '3DMap': '3D Map',
    animationByWindow: 'Moving Time Window',
    animationByIncremental: 'Incremental Time Window',
    speed: 'speed',
    play: 'play',
    pause: 'pause',
    reset: 'reset'
  },
  toolbar: _objectSpread({
    exportImage: 'Export Image',
    exportData: 'Export Data',
    exportMap: 'Export Map',
    shareMapURL: 'Share Map URL',
    saveMap: 'Save Map',
    select: 'select',
    polygon: 'polygon',
    rectangle: 'rectangle',
    hide: 'hide',
    show: 'show'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Delete Dataset',
      addDataToMap: 'Add Data To Map',
      exportImage: 'Export Image',
      exportData: 'Export Data',
      exportMap: 'Export Map',
      addCustomMapboxStyle: 'Add Custom Map Style',
      saveMap: 'Save Map',
      shareURL: 'Share URL'
    },
    button: {
      "delete": 'Delete',
      download: 'Download',
      "export": 'Export',
      addStyle: 'Add Style',
      save: 'Save',
      defaultCancel: 'Cancel',
      defaultConfirm: 'Confirm'
    },
    exportImage: {
      ratioTitle: 'Ratio',
      ratioDescription: 'Choose the ratio for various usages.',
      ratioOriginalScreen: 'Original Screen',
      ratioCustom: 'Custom',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolution',
      resolutionDescription: 'High resolution is better for prints.',
      mapLegendTitle: 'Map Legend',
      mapLegendAdd: 'Add legend on map'
    },
    exportData: {
      datasetTitle: 'Dataset',
      datasetSubtitle: 'Choose the datasets you want to export',
      allDatasets: 'All',
      dataTypeTitle: 'Data Type',
      dataTypeSubtitle: 'Choose the type of data you want to export',
      filterDataTitle: 'Filter Data',
      filterDataSubtitle: 'You can choose exporting original data or filtered data',
      filteredData: 'Filtered data',
      unfilteredData: 'Unfiltered Data',
      fileCount: '{fileCount} Files',
      rowCount: '{rowCount} Rows'
    },
    deleteData: {
      warning: 'you are going to delete this dataset. It will affect {length} layers'
    },
    addStyle: {
      publishTitle: '2. If entered mapbox stule url in step.1, publish your style at mapbox or provide access token. (Optional)',
      publishSubtitle1: 'You can create your own map style at',
      publishSubtitle2: 'and',
      publishSubtitle3: 'publish',
      publishSubtitle4: 'it.',
      publishSubtitle5: 'To use private style, paste your',
      publishSubtitle6: 'access token',
      publishSubtitle7: 'here. *kepler.gl is a client-side application, data stays in your browser..',
      exampleToken: 'e.g. pk.abcdefg.xxxxxx',
      pasteTitle: '1. Paste style url',
      pasteSubtitle0: 'Style url can be a mapbox',
      pasteSubtitle1: 'What is a',
      pasteSubtitle2: 'style URL',
      pasteSubtitle3: 'or a style.json using the',
      pasteSubtitle4: 'Mapbox GL Style Spec',
      namingTitle: '3. Name your style'
    },
    shareMap: {
      shareUriTitle: 'Share Map Url',
      shareUriSubtitle: 'Generate a map url to share with others',
      cloudTitle: 'Cloud storage',
      cloudSubtitle: 'Login and upload map data to your personal cloud storage',
      shareDisclaimer: 'kepler.gl will save your map data to your personal cloud storage, only people with the URL can access your map and data. ' + 'You can edit/delete the data file in your cloud account anytime.',
      gotoPage: 'Go to your Kepler.gl {currentProvider} page'
    },
    statusPanel: {
      mapUploading: 'Map Uploading',
      error: 'Error'
    },
    saveMap: {
      title: 'Cloud storage',
      subtitle: 'Login to save map to your personal cloud storage'
    },
    exportMap: {
      formatTitle: 'Map format',
      formatSubtitle: 'Choose the format to export your map to',
      html: {
        selection: 'Export your map into an interactive html file.',
        tokenTitle: 'Mapbox access token',
        tokenSubtitle: 'Use your own Mapbox access token in the html (optional)',
        tokenPlaceholder: 'Paste your Mapbox access token',
        tokenMisuseWarning: '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ',
        tokenDisclaimer: 'You can change the Mapbox token later using the following instructions: ',
        tokenUpdate: 'How to update an existing map token.',
        modeTitle: 'Map Mode',
        modeSubtitle1: 'Select the app mode. More ',
        modeSubtitle2: 'info',
        modeDescription: 'Allow users to {mode} the map',
        read: 'read',
        edit: 'edit'
      },
      json: {
        configTitle: 'Map Config',
        configDisclaimer: 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ',
        selection: 'Export current map data and config into a single Json file. You can later open the same map by uploading this file to kepler.gl.',
        disclaimer: '* Map config is coupled with loaded datasets. ‘dataId’ is used to bind layers, filters, and tooltips to a specific dataset. ' + 'When passing this config to addDataToMap, make sure the dataset id matches the dataId/s in this config.'
      }
    },
    loadingDialog: {
      loading: 'Loading...'
    },
    loadData: {
      upload: 'Load Files',
      storage: 'Load from Storage'
    },
    tripInfo: {
      title: 'How to enable trip animation',
      description1: 'In order to animate the path, the geoJSON data needs to contain `LineString` in its feature geometry, and the coordinates in the LineString need to have 4 elements in the formats of',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'with the last element being a timestamp. Valid timestamp formats include unix in seconds such as `1564184363` or in milliseconds such as `1564184363000`.',
      example: 'Example:'
    },
    iconInfo: {
      title: 'How to draw icons',
      description1: 'In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named',
      code: 'icon',
      description2: ' kepler.gl will automatically create a icon layer for you.',
      example: 'Example:',
      icons: 'Icons'
    },
    storageMapViewer: {
      lastModified: 'Last modified {lastUpdated} ago',
      back: 'Back'
    },
    overwriteMap: {
      title: 'Saving map...',
      alreadyExists: 'already exists in your {mapSaved}. Would you like to overwrite it?'
    },
    loadStorageMap: {
      back: 'Back',
      goToPage: 'Go to your Kepler.gl {displayName} page',
      storageMaps: 'Storage / Maps',
      noSavedMaps: 'No saved maps yet'
    }
  },
  header: {
    visibleLayers: 'Visible layers',
    layerLegend: 'Layer Legend'
  },
  interactions: {
    tooltip: 'Tooltip',
    brush: 'Brush',
    coordinate: 'Coordinates',
    geocoder: 'Geocoder'
  },
  layerBlending: {
    title: 'Layer Blending',
    additive: 'additive',
    normal: 'normal',
    subtractive: 'subtractive'
  },
  columns: {
    title: 'Columns',
    lat: 'lat',
    lng: 'lon',
    altitude: 'altitude',
    icon: 'icon',
    geojson: 'geojson',
    token: 'token',
    arc: {
      lat0: 'source lat',
      lng0: 'source lng',
      lat1: 'target lat',
      lng1: 'target lng'
    },
    grid: {
      worldUnitSize: 'Grid Size (km)'
    },
    hexagon: {
      worldUnitSize: 'Hexagon Radius (km)'
    },
    hex_id: 'hex id'
  },
  color: {
    customPalette: 'Custom Palette',
    steps: 'steps',
    type: 'type',
    reversed: 'reversed'
  },
  scale: {
    colorScale: 'Color Scale',
    sizeScale: 'Size Scale',
    strokeScale: 'Stroke Scale',
    scale: 'Scale'
  },
  fileUploader: {
    message: 'Drag & Drop Your File(s) Here',
    chromeMessage: '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari',
    disclaimer: '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.',
    configUploadMessage: 'Upload {fileFormatNames} or saved map **Json**. Read more about [**supported file formats**]',
    browseFiles: 'browse your files',
    uploading: 'Uploading',
    fileNotSupported: 'File {errorFiles} is not supported.',
    or: 'or'
  },
  geocoder: {
    title: 'Enter an address or coordinates, ex 37.79,-122.40'
  },
  fieldSelector: {
    clearAll: 'Clear All',
    formatting: 'Formatting'
  },
  compare: {
    modeLabel: 'Comparison Mode',
    typeLabel: 'Comparison Type',
    types: {
      absolute: 'Absolute',
      relative: 'Relative'
    }
  },
  mapPopover: {
    primary: 'Primary'
  },
  density: 'density',
  'Bug Report': 'Bug Report',
  'User Guide': 'User Guide',
  Save: 'Save',
  Share: 'Share'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vZW4uanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImxheWVyTWFuYWdlciIsImFkZERhdGEiLCJhZGRMYXllciIsImxheWVyQmxlbmRpbmciLCJtYXBNYW5hZ2VyIiwibWFwU3R5bGUiLCJhZGRNYXBTdHlsZSIsImxheWVyQ29uZmlndXJhdGlvbiIsImRlZmF1bHREZXNjcmlwdGlvbiIsImhvd1RvIiwiZmlsdGVyTWFuYWdlciIsImFkZEZpbHRlciIsImRhdGFzZXRUaXRsZSIsInNob3dEYXRhVGFibGUiLCJyZW1vdmVEYXRhc2V0IiwiZGF0YXNldEluZm8iLCJyb3dDb3VudCIsInRvb2x0aXAiLCJoaWRlTGF5ZXIiLCJzaG93TGF5ZXIiLCJoaWRlRmVhdHVyZSIsInNob3dGZWF0dXJlIiwiaGlkZSIsInNob3ciLCJyZW1vdmVMYXllciIsImR1cGxpY2F0ZUxheWVyIiwibGF5ZXJTZXR0aW5ncyIsImNsb3NlUGFuZWwiLCJzd2l0Y2hUb0R1YWxWaWV3Iiwic2hvd0xlZ2VuZCIsImRpc2FibGUzRE1hcCIsIkRyYXdPbk1hcCIsInNlbGVjdExvY2FsZSIsImhpZGVMYXllclBhbmVsIiwic2hvd0xheWVyUGFuZWwiLCJtb3ZlVG9Ub3AiLCJzZWxlY3RCYXNlTWFwU3R5bGUiLCJ0aW1lUGxheWJhY2siLCJjbG91ZFN0b3JhZ2UiLCJhbmltYXRpb25CeVdpbmRvdyIsImFuaW1hdGlvbkJ5SW5jcmVtZW50YWwiLCJzcGVlZCIsInBsYXkiLCJwYXVzZSIsInJlc2V0IiwidG9vbGJhciIsImV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImV4cG9ydE1hcCIsInNoYXJlTWFwVVJMIiwic2F2ZU1hcCIsInNlbGVjdCIsInJlY3RhbmdsZSIsIkxPQ0FMRVMiLCJtb2RhbCIsImRlbGV0ZURhdGFzZXQiLCJhZGREYXRhVG9NYXAiLCJhZGRDdXN0b21NYXBib3hTdHlsZSIsInNoYXJlVVJMIiwiYnV0dG9uIiwiZG93bmxvYWQiLCJhZGRTdHlsZSIsInNhdmUiLCJkZWZhdWx0Q2FuY2VsIiwiZGVmYXVsdENvbmZpcm0iLCJyYXRpb1RpdGxlIiwicmF0aW9EZXNjcmlwdGlvbiIsInJhdGlvT3JpZ2luYWxTY3JlZW4iLCJyYXRpb0N1c3RvbSIsInJhdGlvNF8zIiwicmF0aW8xNl85IiwicmVzb2x1dGlvblRpdGxlIiwicmVzb2x1dGlvbkRlc2NyaXB0aW9uIiwibWFwTGVnZW5kVGl0bGUiLCJtYXBMZWdlbmRBZGQiLCJkYXRhc2V0U3VidGl0bGUiLCJhbGxEYXRhc2V0cyIsImRhdGFUeXBlVGl0bGUiLCJkYXRhVHlwZVN1YnRpdGxlIiwiZmlsdGVyRGF0YVRpdGxlIiwiZmlsdGVyRGF0YVN1YnRpdGxlIiwiZmlsdGVyZWREYXRhIiwidW5maWx0ZXJlZERhdGEiLCJmaWxlQ291bnQiLCJkZWxldGVEYXRhIiwid2FybmluZyIsInB1Ymxpc2hUaXRsZSIsInB1Ymxpc2hTdWJ0aXRsZTEiLCJwdWJsaXNoU3VidGl0bGUyIiwicHVibGlzaFN1YnRpdGxlMyIsInB1Ymxpc2hTdWJ0aXRsZTQiLCJwdWJsaXNoU3VidGl0bGU1IiwicHVibGlzaFN1YnRpdGxlNiIsInB1Ymxpc2hTdWJ0aXRsZTciLCJleGFtcGxlVG9rZW4iLCJwYXN0ZVRpdGxlIiwicGFzdGVTdWJ0aXRsZTAiLCJwYXN0ZVN1YnRpdGxlMSIsInBhc3RlU3VidGl0bGUyIiwicGFzdGVTdWJ0aXRsZTMiLCJwYXN0ZVN1YnRpdGxlNCIsIm5hbWluZ1RpdGxlIiwic2hhcmVNYXAiLCJzaGFyZVVyaVRpdGxlIiwic2hhcmVVcmlTdWJ0aXRsZSIsImNsb3VkVGl0bGUiLCJjbG91ZFN1YnRpdGxlIiwic2hhcmVEaXNjbGFpbWVyIiwiZ290b1BhZ2UiLCJzdGF0dXNQYW5lbCIsIm1hcFVwbG9hZGluZyIsImVycm9yIiwic3VidGl0bGUiLCJmb3JtYXRUaXRsZSIsImZvcm1hdFN1YnRpdGxlIiwiaHRtbCIsInNlbGVjdGlvbiIsInRva2VuVGl0bGUiLCJ0b2tlblN1YnRpdGxlIiwidG9rZW5QbGFjZWhvbGRlciIsInRva2VuTWlzdXNlV2FybmluZyIsInRva2VuRGlzY2xhaW1lciIsInRva2VuVXBkYXRlIiwibW9kZVRpdGxlIiwibW9kZVN1YnRpdGxlMSIsIm1vZGVTdWJ0aXRsZTIiLCJtb2RlRGVzY3JpcHRpb24iLCJyZWFkIiwiZWRpdCIsImpzb24iLCJjb25maWdUaXRsZSIsImNvbmZpZ0Rpc2NsYWltZXIiLCJkaXNjbGFpbWVyIiwibG9hZGluZ0RpYWxvZyIsImxvYWRpbmciLCJsb2FkRGF0YSIsInVwbG9hZCIsInN0b3JhZ2UiLCJ0cmlwSW5mbyIsImRlc2NyaXB0aW9uMSIsImNvZGUiLCJkZXNjcmlwdGlvbjIiLCJleGFtcGxlIiwiaWNvbkluZm8iLCJpY29ucyIsInN0b3JhZ2VNYXBWaWV3ZXIiLCJsYXN0TW9kaWZpZWQiLCJiYWNrIiwib3ZlcndyaXRlTWFwIiwiYWxyZWFkeUV4aXN0cyIsImxvYWRTdG9yYWdlTWFwIiwiZ29Ub1BhZ2UiLCJzdG9yYWdlTWFwcyIsIm5vU2F2ZWRNYXBzIiwiaGVhZGVyIiwidmlzaWJsZUxheWVycyIsImxheWVyTGVnZW5kIiwiaW50ZXJhY3Rpb25zIiwiYnJ1c2giLCJjb29yZGluYXRlIiwiZ2VvY29kZXIiLCJhZGRpdGl2ZSIsIm5vcm1hbCIsInN1YnRyYWN0aXZlIiwiY29sdW1ucyIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwidG9rZW4iLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiaGV4X2lkIiwiY3VzdG9tUGFsZXR0ZSIsInN0ZXBzIiwicmV2ZXJzZWQiLCJzY2FsZSIsImNvbG9yU2NhbGUiLCJzdHJva2VTY2FsZSIsImZpbGVVcGxvYWRlciIsIm1lc3NhZ2UiLCJjaHJvbWVNZXNzYWdlIiwiY29uZmlnVXBsb2FkTWVzc2FnZSIsImJyb3dzZUZpbGVzIiwidXBsb2FkaW5nIiwiZmlsZU5vdFN1cHBvcnRlZCIsIm9yIiwiZmllbGRTZWxlY3RvciIsImNsZWFyQWxsIiwiZm9ybWF0dGluZyIsImNvbXBhcmUiLCJtb2RlTGFiZWwiLCJ0eXBlTGFiZWwiLCJ0eXBlcyIsImFic29sdXRlIiwicmVsYXRpdmUiLCJtYXBQb3BvdmVyIiwicHJpbWFyeSIsIlNhdmUiLCJTaGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7OztlQUVlO0FBQ2JBLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUUsUUFEQTtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsT0FGQztBQUdSQyxJQUFBQSxTQUFTLEVBQUUsWUFISDtBQUlSQyxJQUFBQSxLQUFLLEVBQUUsT0FKQztBQUtSQyxJQUFBQSxRQUFRLEVBQUUsVUFMRjtBQU1SQyxJQUFBQSxXQUFXLEVBQUUsY0FOTDtBQU9SQyxJQUFBQSxNQUFNLEVBQUUsUUFQQTtBQVFSQyxJQUFBQSxPQUFPLEVBQUUsU0FSRDtBQVNSQyxJQUFBQSxNQUFNLEVBQUUsUUFUQTtBQVVSQyxJQUFBQSxPQUFPLEVBQUUsU0FWRDtBQVdSQyxJQUFBQSxNQUFNLEVBQUUsUUFYQTtBQVlSQyxJQUFBQSxHQUFHLEVBQUUsS0FaRztBQWFSQyxJQUFBQSxVQUFVLEVBQUU7QUFiSixHQURHO0FBZ0JiQyxFQUFBQSxXQUFXLEVBQUU7QUFDWEMs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QURMO0FBRUxDLE1BQUFBLFFBQVEsRUFBRTtBQUZMO0FBSEEsR0FqYkk7QUF5YmJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxPQUFPLEVBQUU7QUFEQyxHQXpiQztBQTRiYm5TLEVBQUFBLE9BQU8sRUFBRSxTQTViSTtBQTZiYixnQkFBYyxZQTdiRDtBQThiYixnQkFBYyxZQTliRDtBQStiYm9TLEVBQUFBLElBQUksRUFBRSxNQS9iTztBQWdjYkMsRUFBQUEsS0FBSyxFQUFFO0FBaGNNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICd3ZWlnaHQnLFxuICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgIGZpbGxDb2xvcjogJ2ZpbGwgY29sb3InLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICAgIHN0cm9rZUNvbG9yOiAnc3Ryb2tlIGNvbG9yJyxcbiAgICByYWRpdXM6ICdyYWRpdXMnLFxuICAgIG91dGxpbmU6ICdvdXRsaW5lJyxcbiAgICBzdHJva2U6ICdzdHJva2UnLFxuICAgIGRlbnNpdHk6ICdkZW5zaXR5JyxcbiAgICBoZWlnaHQ6ICdoZWlnaHQnLFxuICAgIHN1bTogJ3N1bScsXG4gICAgcG9pbnRDb3VudDogJ1BvaW50IENvdW50J1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgc2VsZWN0RmllbGQ6ICdTZWxlY3QgYSBmaWVsZCcsXG4gICAgeUF4aXM6ICdZIEF4aXMnLFxuICAgIHNlbGVjdFR5cGU6ICdTZWxlY3QgQSBUeXBlJyxcbiAgICBzZWxlY3RWYWx1ZTogJ1NlbGVjdCBBIFZhbHVlJyxcbiAgICBlbnRlclZhbHVlOiAnRW50ZXIgYSB2YWx1ZScsXG4gICAgZW1wdHk6ICdlbXB0eSdcbiAgfSxcbiAgbWlzYzoge1xuICAgIGJ5OiAnJyxcbiAgICB2YWx1ZXNJbjogJ1ZhbHVlcyBpbicsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWx1ZSBlcXVhbHMnLFxuICAgIGRhdGFTb3VyY2U6ICdEYXRhIFNvdXJjZScsXG4gICAgYnJ1c2hSYWRpdXM6ICdCcnVzaCBSYWRpdXMgKGttKScsXG4gICAgZW1wdHk6ICcgJ1xuICB9LFxuICBtYXBMYXllcnM6IHtcbiAgICB0aXRsZTogJ01hcCBMYXllcnMnLFxuICAgIGxhYmVsOiAnTGFiZWwnLFxuICAgIHJvYWQ6ICdSb2FkJyxcbiAgICBib3JkZXI6ICdCb3JkZXInLFxuICAgIGJ1aWxkaW5nOiAnQnVpbGRpbmcnLFxuICAgIHdhdGVyOiAnV2F0ZXInLFxuICAgIGxhbmQ6ICdMYW5kJyxcbiAgICAnM2RCdWlsZGluZyc6ICczZCBCdWlsZGluZydcbiAgfSxcbiAgcGFuZWw6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgIGxhYmVsV2l0aElkOiAnTGFiZWwge2xhYmVsSWR9JyxcbiAgICAgIGZvbnRTaXplOiAnRm9udCBzaXplJyxcbiAgICAgIGZvbnRDb2xvcjogJ0ZvbnQgY29sb3InLFxuICAgICAgdGV4dEFuY2hvcjogJ1RleHQgYW5jaG9yJyxcbiAgICAgIGFsaWdubWVudDogJ0FsaWdubWVudCcsXG4gICAgICBhZGRNb3JlTGFiZWw6ICdBZGQgTW9yZSBMYWJlbCdcbiAgICB9XG4gIH0sXG4gIHNpZGViYXI6IHtcbiAgICBwYW5lbHM6IHtcbiAgICAgIGxheWVyOiAnTGF5ZXJzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRlcnMnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjdGlvbnMnLFxuICAgICAgYmFzZW1hcDogJ0Jhc2UgbWFwJ1xuICAgIH1cbiAgfSxcbiAgbGF5ZXI6IHtcbiAgICByZXF1aXJlZDogJ1JlcXVpcmVkKicsXG4gICAgcmFkaXVzOiAnUmFkaXVzJyxcbiAgICBjb2xvcjogJ0NvbG9yJyxcbiAgICBmaWxsQ29sb3I6ICdGaWxsIENvbG9yJyxcbiAgICBvdXRsaW5lOiAnT3V0bGluZScsXG4gICAgd2VpZ2h0OiAnV2VpZ2h0JyxcbiAgICBwcm9wZXJ0eUJhc2VkT246ICd7cHJvcGVydHl9IGJhc2VkIG9uJyxcbiAgICBjb3ZlcmFnZTogJ0NvdmVyYWdlJyxcbiAgICBzdHJva2U6ICdTdHJva2UnLFxuICAgIHN0cm9rZVdpZHRoOiAnU3Ryb2tlIFdpZHRoJyxcbiAgICBzdHJva2VDb2xvcjogJ1N0cm9rZSBDb2xvcicsXG4gICAgYmFzaWM6ICdCYXNpYycsXG4gICAgdHJhaWxMZW5ndGg6ICdUcmFpbCBMZW5ndGgnLFxuICAgIHRyYWlsTGVuZ3RoRGVzY3JpcHRpb246ICdOdW1iZXIgb2Ygc2Vjb25kcyBmb3IgYSBwYXRoIHRvIGNvbXBsZXRlbHkgZmFkZSBvdXQnLFxuICAgIG5ld0xheWVyOiAnbmV3IGxheWVyJyxcbiAgICBlbGV2YXRpb25CeURlc2NyaXB0aW9uOiAnV2hlbiBvZmYsIGhlaWdodCBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1doZW4gb2ZmLCBjb2xvciBpcyBiYXNlZCBvbiBjb3VudCBvZiBwb2ludHMnLFxuICAgIGFnZ3JlZ2F0ZUJ5OiAnQWdncmVnYXRlIHtmaWVsZH0gYnknLFxuICAgICczRE1vZGVsJzogJzNEIE1vZGVsJyxcbiAgICAnM0RNb2RlbE9wdGlvbnMnOiAnM0QgTW9kZWwgT3B0aW9ucycsXG4gICAgdHlwZToge1xuICAgICAgcG9pbnQ6ICdwb2ludCcsXG4gICAgICBhcmM6ICdhcmMnLFxuICAgICAgbGluZTogJ2xpbmUnLFxuICAgICAgZ3JpZDogJ2dyaWQnLFxuICAgICAgaGV4YmluOiAnaGV4YmluJyxcbiAgICAgIHBvbHlnb246ICdwb2x5Z29uJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdjbHVzdGVyJyxcbiAgICAgIGljb246ICdpY29uJyxcbiAgICAgIGhlYXRtYXA6ICdoZWF0bWFwJyxcbiAgICAgIGhleGFnb246ICdoZXhhZ29uJyxcbiAgICAgIGhleGFnb25pZDogJ0gzJyxcbiAgICAgIHRyaXA6ICd0cmlwJyxcbiAgICAgIHMyOiAnUzInLFxuICAgICAgJzNkJzogJzNEJ1xuICAgIH1cbiAgfSxcbiAgbGF5ZXJWaXNDb25maWdzOiB7XG4gICAgYW5nbGU6ICdBbmdsZScsXG4gICAgc3Ryb2tlV2lkdGg6ICdTdHJva2UgV2lkdGggKFBpeGVscyknLFxuICAgIHN0cm9rZVdpZHRoUmFuZ2U6ICdTdHJva2UgV2lkdGggUmFuZ2UnLFxuICAgIHJhZGl1czogJ1JhZGl1cycsXG4gICAgZml4ZWRSYWRpdXM6ICdGaXhlZCBSYWRpdXMgdG8gbWV0ZXInLFxuICAgIGZpeGVkUmFkaXVzRGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXG4gICAgcmFkaXVzUmFuZ2U6ICdSYWRpdXMgUmFuZ2UnLFxuICAgIGNsdXN0ZXJSYWRpdXM6ICdDbHVzdGVyIFJhZGl1cyBpbiBQaXhlbHMnLFxuICAgIHJhZGl1c1JhbmdlUGl4ZWxzOiAnUmFkaXVzIFJhbmdlIGluIHBpeGVscycsXG4gICAgb3BhY2l0eTogJ09wYWNpdHknLFxuICAgIGNvdmVyYWdlOiAnQ292ZXJhZ2UnLFxuICAgIG91dGxpbmU6ICdPdXRsaW5lJyxcbiAgICBjb2xvclJhbmdlOiAnQ29sb3IgcmFuZ2UnLFxuICAgIHN0cm9rZTogJ1N0cm9rZScsXG4gICAgc3Ryb2tlQ29sb3I6ICdTdHJva2UgQ29sb3InLFxuICAgIHN0cm9rZUNvbG9yUmFuZ2U6ICdTdHJva2UgQ29sb3IgcmFuZ2UnLFxuICAgIHRhcmdldENvbG9yOiAnVGFyZ2V0IENvbG9yJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQ29sb3IgQWdncmVnYXRpb24nLFxuICAgIGhlaWdodEFnZ3JlZ2F0aW9uOiAnSGVpZ2h0IEFnZ3JlZ2F0aW9uJyxcbiAgICByZXNvbHV0aW9uUmFuZ2U6ICdSZXNvbHV0aW9uIHJhbmdlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICB3b3JsZFVuaXRTaXplOiAnV29ybGQgVW5pdCBTaXplJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VsZXZhdGlvbiBTY2FsZScsXG4gICAgaGVpZ2h0U2NhbGU6ICdIZWlnaHQgU2NhbGUnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdDb3ZlcmFnZSBSYW5nZScsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ0hpZ2ggUHJlY2lzaW9uIFJlbmRlcmluZycsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uOiAnSGlnaCBwcmVjaXNpb24gd2lsbCByZXN1bHQgaW4gc2xvd2VyIHBlcmZvcm1hbmNlJyxcbiAgICBoZWlnaHQ6ICdIZWlnaHQnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnQ2xpY2sgYnV0dG9uIGF0IHRvcCByaWdodCBvZiB0aGUgbWFwIHRvIHN3aXRjaCB0byAzZCB2aWV3JyxcbiAgICBmaWxsOiAnRmlsbCcsXG4gICAgZW5hYmxlUG9seWdvbkhlaWdodDogJ0VuYWJsZSBQb2x5Z29uIEhlaWdodCcsXG4gICAgc2hvd1dpcmVmcmFtZTogJ1Nob3cgV2lyZWZyYW1lJyxcbiAgICB3ZWlnaHRJbnRlbnNpdHk6ICdXZWlnaHQgSW50ZW5zaXR5JyxcbiAgICB6b29tU2NhbGU6ICdab29tIFNjYWxlJyxcbiAgICBoZWlnaHRSYW5nZTogJ0hlaWdodCBSYW5nZSdcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ0FkZCBEYXRhJyxcbiAgICBhZGRMYXllcjogJ0FkZCBMYXllcicsXG4gICAgbGF5ZXJCbGVuZGluZzogJ0xheWVyIEJsZW5kaW5nJ1xuICB9LFxuICBtYXBNYW5hZ2VyOiB7XG4gICAgbWFwU3R5bGU6ICdNYXAgc3R5bGUnLFxuICAgIGFkZE1hcFN0eWxlOiAnQWRkIE1hcCBTdHlsZScsXG4gICAgJzNkQnVpbGRpbmdDb2xvcic6ICczRCBCdWlsZGluZyBDb2xvcidcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYXRlIHtwcm9wZXJ0eX0gYmFzZWQgb24gc2VsZWN0ZWQgZmllbGQnLFxuICAgIGhvd1RvOiAnSG93IHRvJ1xuICB9LFxuICBmaWx0ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRmlsdGVyOiAnQWRkIEZpbHRlcidcbiAgfSxcbiAgZGF0YXNldFRpdGxlOiB7XG4gICAgc2hvd0RhdGFUYWJsZTogJ1Nob3cgZGF0YSB0YWJsZScsXG4gICAgcmVtb3ZlRGF0YXNldDogJ1JlbW92ZSBkYXRhc2V0J1xuICB9LFxuICBkYXRhc2V0SW5mbzoge1xuICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSByb3dzJ1xuICB9LFxuICB0b29sdGlwOiB7XG4gICAgaGlkZUxheWVyOiAnaGlkZSBsYXllcicsXG4gICAgc2hvd0xheWVyOiAnc2hvdyBsYXllcicsXG4gICAgaGlkZUZlYXR1cmU6ICdIaWRlIEZlYXR1cmUnLFxuICAgIHNob3dGZWF0dXJlOiAnU2hvdyBmZWF0dXJlJyxcbiAgICBoaWRlOiAnaGlkZScsXG4gICAgc2hvdzogJ3Nob3cnLFxuICAgIHJlbW92ZUxheWVyOiAnUmVtb3ZlIGxheWVyJyxcbiAgICBkdXBsaWNhdGVMYXllcjogJ0R1cGxpY2F0ZSBsYXllcicsXG4gICAgbGF5ZXJTZXR0aW5nczogJ0xheWVyIHNldHRpbmdzJyxcbiAgICBjbG9zZVBhbmVsOiAnQ2xvc2UgY3VycmVudCBwYW5lbCcsXG4gICAgc3dpdGNoVG9EdWFsVmlldzogJ1N3aXRjaCB0byBkdWFsIG1hcCB2aWV3JyxcbiAgICBzaG93TGVnZW5kOiAnc2hvdyBsZWdlbmQnLFxuICAgIGRpc2FibGUzRE1hcDogJ0Rpc2FibGUgM0QgTWFwJyxcbiAgICBEcmF3T25NYXA6ICdEcmF3IG9uIG1hcCcsXG4gICAgc2VsZWN0TG9jYWxlOiAnU2VsZWN0IGxvY2FsZScsXG4gICAgaGlkZUxheWVyUGFuZWw6ICdIaWRlIGxheWVyIHBhbmVsJyxcbiAgICBzaG93TGF5ZXJQYW5lbDogJ1Nob3cgbGF5ZXIgcGFuZWwnLFxuICAgIG1vdmVUb1RvcDogJ01vdmUgdG8gdG9wIG9mIGRhdGEgbGF5ZXJzJyxcbiAgICBzZWxlY3RCYXNlTWFwU3R5bGU6ICdTZWxlY3QgQmFzZSBNYXAgU3R5bGUnLFxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXG4gICAgdGltZVBsYXliYWNrOiAnVGltZSBQbGF5YmFjaycsXG4gICAgY2xvdWRTdG9yYWdlOiAnQ2xvdWQgU3RvcmFnZScsXG4gICAgJzNETWFwJzogJzNEIE1hcCcsXG4gICAgYW5pbWF0aW9uQnlXaW5kb3c6ICdNb3ZpbmcgVGltZSBXaW5kb3cnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICdJbmNyZW1lbnRhbCBUaW1lIFdpbmRvdycsXG4gICAgc3BlZWQ6ICdzcGVlZCcsXG4gICAgcGxheTogJ3BsYXknLFxuICAgIHBhdXNlOiAncGF1c2UnLFxuICAgIHJlc2V0OiAncmVzZXQnXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgZXhwb3J0RGF0YTogJ0V4cG9ydCBEYXRhJyxcbiAgICBleHBvcnRNYXA6ICdFeHBvcnQgTWFwJyxcbiAgICBzaGFyZU1hcFVSTDogJ1NoYXJlIE1hcCBVUkwnLFxuICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgc2VsZWN0OiAnc2VsZWN0JyxcbiAgICBwb2x5Z29uOiAncG9seWdvbicsXG4gICAgcmVjdGFuZ2xlOiAncmVjdGFuZ2xlJyxcbiAgICBoaWRlOiAnaGlkZScsXG4gICAgc2hvdzogJ3Nob3cnLFxuICAgIC4uLkxPQ0FMRVNcbiAgfSxcbiAgbW9kYWw6IHtcbiAgICB0aXRsZToge1xuICAgICAgZGVsZXRlRGF0YXNldDogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgIGFkZERhdGFUb01hcDogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICBleHBvcnRJbWFnZTogJ0V4cG9ydCBJbWFnZScsXG4gICAgICBleHBvcnREYXRhOiAnRXhwb3J0IERhdGEnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0IE1hcCcsXG4gICAgICBhZGRDdXN0b21NYXBib3hTdHlsZTogJ0FkZCBDdXN0b20gTWFwIFN0eWxlJyxcbiAgICAgIHNhdmVNYXA6ICdTYXZlIE1hcCcsXG4gICAgICBzaGFyZVVSTDogJ1NoYXJlIFVSTCdcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgZGVsZXRlOiAnRGVsZXRlJyxcbiAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQnLFxuICAgICAgZXhwb3J0OiAnRXhwb3J0JyxcbiAgICAgIGFkZFN0eWxlOiAnQWRkIFN0eWxlJyxcbiAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgIGRlZmF1bHRDYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgZGVmYXVsdENvbmZpcm06ICdDb25maXJtJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSYXRpbycsXG4gICAgICByYXRpb0Rlc2NyaXB0aW9uOiAnQ2hvb3NlIHRoZSByYXRpbyBmb3IgdmFyaW91cyB1c2FnZXMuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdPcmlnaW5hbCBTY3JlZW4nLFxuICAgICAgcmF0aW9DdXN0b206ICdDdXN0b20nLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHV0aW9uJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0hpZ2ggcmVzb2x1dGlvbiBpcyBiZXR0ZXIgZm9yIHByaW50cy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdNYXAgTGVnZW5kJyxcbiAgICAgIG1hcExlZ2VuZEFkZDogJ0FkZCBsZWdlbmQgb24gbWFwJ1xuICAgIH0sXG4gICAgZXhwb3J0RGF0YToge1xuICAgICAgZGF0YXNldFRpdGxlOiAnRGF0YXNldCcsXG4gICAgICBkYXRhc2V0U3VidGl0bGU6ICdDaG9vc2UgdGhlIGRhdGFzZXRzIHlvdSB3YW50IHRvIGV4cG9ydCcsXG4gICAgICBhbGxEYXRhc2V0czogJ0FsbCcsXG4gICAgICBkYXRhVHlwZVRpdGxlOiAnRGF0YSBUeXBlJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdDaG9vc2UgdGhlIHR5cGUgb2YgZGF0YSB5b3Ugd2FudCB0byBleHBvcnQnLFxuICAgICAgZmlsdGVyRGF0YVRpdGxlOiAnRmlsdGVyIERhdGEnLFxuICAgICAgZmlsdGVyRGF0YVN1YnRpdGxlOiAnWW91IGNhbiBjaG9vc2UgZXhwb3J0aW5nIG9yaWdpbmFsIGRhdGEgb3IgZmlsdGVyZWQgZGF0YScsXG4gICAgICBmaWx0ZXJlZERhdGE6ICdGaWx0ZXJlZCBkYXRhJyxcbiAgICAgIHVuZmlsdGVyZWREYXRhOiAnVW5maWx0ZXJlZCBEYXRhJyxcbiAgICAgIGZpbGVDb3VudDogJ3tmaWxlQ291bnR9IEZpbGVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBSb3dzJ1xuICAgIH0sXG4gICAgZGVsZXRlRGF0YToge1xuICAgICAgd2FybmluZzogJ3lvdSBhcmUgZ29pbmcgdG8gZGVsZXRlIHRoaXMgZGF0YXNldC4gSXQgd2lsbCBhZmZlY3Qge2xlbmd0aH0gbGF5ZXJzJ1xuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTpcbiAgICAgICAgJzIuIElmIGVudGVyZWQgbWFwYm94IHN0dWxlIHVybCBpbiBzdGVwLjEsIHB1Ymxpc2ggeW91ciBzdHlsZSBhdCBtYXBib3ggb3IgcHJvdmlkZSBhY2Nlc3MgdG9rZW4uIChPcHRpb25hbCknLFxuICAgICAgcHVibGlzaFN1YnRpdGxlMTogJ1lvdSBjYW4gY3JlYXRlIHlvdXIgb3duIG1hcCBzdHlsZSBhdCcsXG4gICAgICBwdWJsaXNoU3VidGl0bGUyOiAnYW5kJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaXNoJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTQ6ICdpdC4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNTogJ1RvIHVzZSBwcml2YXRlIHN0eWxlLCBwYXN0ZSB5b3VyJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTY6ICdhY2Nlc3MgdG9rZW4nLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2hlcmUuICprZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiwgZGF0YSBzdGF5cyBpbiB5b3VyIGJyb3dzZXIuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdlLmcuIHBrLmFiY2RlZmcueHh4eHh4JyxcbiAgICAgIHBhc3RlVGl0bGU6ICcxLiBQYXN0ZSBzdHlsZSB1cmwnLFxuICAgICAgcGFzdGVTdWJ0aXRsZTA6ICdTdHlsZSB1cmwgY2FuIGJlIGEgbWFwYm94JyxcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnV2hhdCBpcyBhJyxcbiAgICAgIHBhc3RlU3VidGl0bGUyOiAnc3R5bGUgVVJMJyxcbiAgICAgIHBhc3RlU3VidGl0bGUzOiAnb3IgYSBzdHlsZS5qc29uIHVzaW5nIHRoZScsXG4gICAgICBwYXN0ZVN1YnRpdGxlNDogJ01hcGJveCBHTCBTdHlsZSBTcGVjJyxcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gTmFtZSB5b3VyIHN0eWxlJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdTaGFyZSBNYXAgVXJsJyxcbiAgICAgIHNoYXJlVXJpU3VidGl0bGU6ICdHZW5lcmF0ZSBhIG1hcCB1cmwgdG8gc2hhcmUgd2l0aCBvdGhlcnMnLFxuICAgICAgY2xvdWRUaXRsZTogJ0Nsb3VkIHN0b3JhZ2UnLFxuICAgICAgY2xvdWRTdWJ0aXRsZTogJ0xvZ2luIGFuZCB1cGxvYWQgbWFwIGRhdGEgdG8geW91ciBwZXJzb25hbCBjbG91ZCBzdG9yYWdlJyxcbiAgICAgIHNoYXJlRGlzY2xhaW1lcjpcbiAgICAgICAgJ2tlcGxlci5nbCB3aWxsIHNhdmUgeW91ciBtYXAgZGF0YSB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2UsIG9ubHkgcGVvcGxlIHdpdGggdGhlIFVSTCBjYW4gYWNjZXNzIHlvdXIgbWFwIGFuZCBkYXRhLiAnICtcbiAgICAgICAgJ1lvdSBjYW4gZWRpdC9kZWxldGUgdGhlIGRhdGEgZmlsZSBpbiB5b3VyIGNsb3VkIGFjY291bnQgYW55dGltZS4nLFxuICAgICAgZ290b1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7Y3VycmVudFByb3ZpZGVyfSBwYWdlJ1xuICAgIH0sXG4gICAgc3RhdHVzUGFuZWw6IHtcbiAgICAgIG1hcFVwbG9hZGluZzogJ01hcCBVcGxvYWRpbmcnLFxuICAgICAgZXJyb3I6ICdFcnJvcidcbiAgICB9LFxuICAgIHNhdmVNYXA6IHtcbiAgICAgIHRpdGxlOiAnQ2xvdWQgc3RvcmFnZScsXG4gICAgICBzdWJ0aXRsZTogJ0xvZ2luIHRvIHNhdmUgbWFwIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZSdcbiAgICB9LFxuICAgIGV4cG9ydE1hcDoge1xuICAgICAgZm9ybWF0VGl0bGU6ICdNYXAgZm9ybWF0JyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnQ2hvb3NlIHRoZSBmb3JtYXQgdG8gZXhwb3J0IHlvdXIgbWFwIHRvJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0IHlvdXIgbWFwIGludG8gYW4gaW50ZXJhY3RpdmUgaHRtbCBmaWxlLicsXG4gICAgICAgIHRva2VuVGl0bGU6ICdNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5TdWJ0aXRsZTogJ1VzZSB5b3VyIG93biBNYXBib3ggYWNjZXNzIHRva2VuIGluIHRoZSBodG1sIChvcHRpb25hbCknLFxuICAgICAgICB0b2tlblBsYWNlaG9sZGVyOiAnUGFzdGUgeW91ciBNYXBib3ggYWNjZXNzIHRva2VuJyxcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIElmIHlvdSBkbyBub3QgcHJvdmlkZSB5b3VyIG93biB0b2tlbiwgdGhlIG1hcCBtYXkgZmFpbCB0byBkaXNwbGF5IGF0IGFueSB0aW1lIHdoZW4gd2UgcmVwbGFjZSBvdXJzIHRvIGF2b2lkIG1pc3VzZS4gJyxcbiAgICAgICAgdG9rZW5EaXNjbGFpbWVyOiAnWW91IGNhbiBjaGFuZ2UgdGhlIE1hcGJveCB0b2tlbiBsYXRlciB1c2luZyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uczogJyxcbiAgICAgICAgdG9rZW5VcGRhdGU6ICdIb3cgdG8gdXBkYXRlIGFuIGV4aXN0aW5nIG1hcCB0b2tlbi4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNYXAgTW9kZScsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTE6ICdTZWxlY3QgdGhlIGFwcCBtb2RlLiBNb3JlICcsXG4gICAgICAgIG1vZGVTdWJ0aXRsZTI6ICdpbmZvJyxcbiAgICAgICAgbW9kZURlc2NyaXB0aW9uOiAnQWxsb3cgdXNlcnMgdG8ge21vZGV9IHRoZSBtYXAnLFxuICAgICAgICByZWFkOiAncmVhZCcsXG4gICAgICAgIGVkaXQ6ICdlZGl0J1xuICAgICAgfSxcbiAgICAgIGpzb246IHtcbiAgICAgICAgY29uZmlnVGl0bGU6ICdNYXAgQ29uZmlnJyxcbiAgICAgICAgY29uZmlnRGlzY2xhaW1lcjpcbiAgICAgICAgICAnTWFwIGNvbmZpZyB3aWxsIGJlIGluY2x1ZGVkIGluIHRoZSBKc29uIGZpbGUuIElmIHlvdSBhcmUgdXNpbmcga2VwbGVyLmdsIGluIHlvdXIgb3duIGFwcC4gWW91IGNhbiBjb3B5IHRoaXMgY29uZmlnIGFuZCBwYXNzIGl0IHRvICcsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0IGN1cnJlbnQgbWFwIGRhdGEgYW5kIGNvbmZpZyBpbnRvIGEgc2luZ2xlIEpzb24gZmlsZS4gWW91IGNhbiBsYXRlciBvcGVuIHRoZSBzYW1lIG1hcCBieSB1cGxvYWRpbmcgdGhpcyBmaWxlIHRvIGtlcGxlci5nbC4nLFxuICAgICAgICBkaXNjbGFpbWVyOlxuICAgICAgICAgICcqIE1hcCBjb25maWcgaXMgY291cGxlZCB3aXRoIGxvYWRlZCBkYXRhc2V0cy4g4oCYZGF0YUlk4oCZIGlzIHVzZWQgdG8gYmluZCBsYXllcnMsIGZpbHRlcnMsIGFuZCB0b29sdGlwcyB0byBhIHNwZWNpZmljIGRhdGFzZXQuICcgK1xuICAgICAgICAgICdXaGVuIHBhc3NpbmcgdGhpcyBjb25maWcgdG8gYWRkRGF0YVRvTWFwLCBtYWtlIHN1cmUgdGhlIGRhdGFzZXQgaWQgbWF0Y2hlcyB0aGUgZGF0YUlkL3MgaW4gdGhpcyBjb25maWcuJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZGluZ0RpYWxvZzoge1xuICAgICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nXG4gICAgfSxcbiAgICBsb2FkRGF0YToge1xuICAgICAgdXBsb2FkOiAnTG9hZCBGaWxlcycsXG4gICAgICBzdG9yYWdlOiAnTG9hZCBmcm9tIFN0b3JhZ2UnXG4gICAgfSxcbiAgICB0cmlwSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZW5hYmxlIHRyaXAgYW5pbWF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgJ0luIG9yZGVyIHRvIGFuaW1hdGUgdGhlIHBhdGgsIHRoZSBnZW9KU09OIGRhdGEgbmVlZHMgdG8gY29udGFpbiBgTGluZVN0cmluZ2AgaW4gaXRzIGZlYXR1cmUgZ2VvbWV0cnksIGFuZCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIExpbmVTdHJpbmcgbmVlZCB0byBoYXZlIDQgZWxlbWVudHMgaW4gdGhlIGZvcm1hdHMgb2YnLFxuICAgICAgY29kZTogJyBbbG9uZ2l0dWRlLCBsYXRpdHVkZSwgYWx0aXR1ZGUsIHRpbWVzdGFtcF0gJyxcbiAgICAgIGRlc2NyaXB0aW9uMjpcbiAgICAgICAgJ3dpdGggdGhlIGxhc3QgZWxlbWVudCBiZWluZyBhIHRpbWVzdGFtcC4gVmFsaWQgdGltZXN0YW1wIGZvcm1hdHMgaW5jbHVkZSB1bml4IGluIHNlY29uZHMgc3VjaCBhcyBgMTU2NDE4NDM2M2Agb3IgaW4gbWlsbGlzZWNvbmRzIHN1Y2ggYXMgYDE1NjQxODQzNjMwMDBgLicsXG4gICAgICBleGFtcGxlOiAnRXhhbXBsZTonXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdIb3cgdG8gZHJhdyBpY29ucycsXG4gICAgICBkZXNjcmlwdGlvbjE6XG4gICAgICAgICdJbiB5b3VyIGNzdiwgY3JlYXRlIGEgY29sdW1uLCBwdXQgdGhlIG5hbWUgb2YgdGhlIGljb24geW91IHdhbnQgdG8gZHJhdyBpbiBpdC4gWW91IGNhbiBsZWF2ZSB0aGUgY2VsbCBlbXB0eSBpZiB5b3UgZG8gbm90IHdhbnQgdGhlIGljb24gdG8gc2hvdyBmb3Igc29tZSBwb2ludHMuIFdoZW4gdGhlIGNvbHVtbiBpcyBuYW1lZCcsXG4gICAgICBjb2RlOiAnaWNvbicsXG4gICAgICBkZXNjcmlwdGlvbjI6ICcga2VwbGVyLmdsIHdpbGwgYXV0b21hdGljYWxseSBjcmVhdGUgYSBpY29uIGxheWVyIGZvciB5b3UuJyxcbiAgICAgIGV4YW1wbGU6ICdFeGFtcGxlOicsXG4gICAgICBpY29uczogJ0ljb25zJ1xuICAgIH0sXG4gICAgc3RvcmFnZU1hcFZpZXdlcjoge1xuICAgICAgbGFzdE1vZGlmaWVkOiAnTGFzdCBtb2RpZmllZCB7bGFzdFVwZGF0ZWR9IGFnbycsXG4gICAgICBiYWNrOiAnQmFjaydcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdTYXZpbmcgbWFwLi4uJyxcbiAgICAgIGFscmVhZHlFeGlzdHM6ICdhbHJlYWR5IGV4aXN0cyBpbiB5b3VyIHttYXBTYXZlZH0uIFdvdWxkIHlvdSBsaWtlIHRvIG92ZXJ3cml0ZSBpdD8nXG4gICAgfSxcbiAgICBsb2FkU3RvcmFnZU1hcDoge1xuICAgICAgYmFjazogJ0JhY2snLFxuICAgICAgZ29Ub1BhZ2U6ICdHbyB0byB5b3VyIEtlcGxlci5nbCB7ZGlzcGxheU5hbWV9IHBhZ2UnLFxuICAgICAgc3RvcmFnZU1hcHM6ICdTdG9yYWdlIC8gTWFwcycsXG4gICAgICBub1NhdmVkTWFwczogJ05vIHNhdmVkIG1hcHMgeWV0J1xuICAgIH1cbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgdmlzaWJsZUxheWVyczogJ1Zpc2libGUgbGF5ZXJzJyxcbiAgICBsYXllckxlZ2VuZDogJ0xheWVyIExlZ2VuZCdcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1Rvb2x0aXAnLFxuICAgIGJydXNoOiAnQnJ1c2gnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGluYXRlcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RlcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnTGF5ZXIgQmxlbmRpbmcnLFxuICAgIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJ0cmFjdGl2ZSdcbiAgfSxcbiAgY29sdW1uczoge1xuICAgIHRpdGxlOiAnQ29sdW1ucycsXG4gICAgbGF0OiAnbGF0JyxcbiAgICBsbmc6ICdsb24nLFxuICAgIGFsdGl0dWRlOiAnYWx0aXR1ZGUnLFxuICAgIGljb246ICdpY29uJyxcbiAgICBnZW9qc29uOiAnZ2VvanNvbicsXG4gICAgdG9rZW46ICd0b2tlbicsXG4gICAgYXJjOiB7XG4gICAgICBsYXQwOiAnc291cmNlIGxhdCcsXG4gICAgICBsbmcwOiAnc291cmNlIGxuZycsXG4gICAgICBsYXQxOiAndGFyZ2V0IGxhdCcsXG4gICAgICBsbmcxOiAndGFyZ2V0IGxuZydcbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdHcmlkIFNpemUgKGttKSdcbiAgICB9LFxuICAgIGhleGFnb246IHtcbiAgICAgIHdvcmxkVW5pdFNpemU6ICdIZXhhZ29uIFJhZGl1cyAoa20pJ1xuICAgIH0sXG4gICAgaGV4X2lkOiAnaGV4IGlkJ1xuICB9LFxuICBjb2xvcjoge1xuICAgIGN1c3RvbVBhbGV0dGU6ICdDdXN0b20gUGFsZXR0ZScsXG4gICAgc3RlcHM6ICdzdGVwcycsXG4gICAgdHlwZTogJ3R5cGUnLFxuICAgIHJldmVyc2VkOiAncmV2ZXJzZWQnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0NvbG9yIFNjYWxlJyxcbiAgICBzaXplU2NhbGU6ICdTaXplIFNjYWxlJyxcbiAgICBzdHJva2VTY2FsZTogJ1N0cm9rZSBTY2FsZScsXG4gICAgc2NhbGU6ICdTY2FsZSdcbiAgfSxcbiAgZmlsZVVwbG9hZGVyOiB7XG4gICAgbWVzc2FnZTogJ0RyYWcgJiBEcm9wIFlvdXIgRmlsZShzKSBIZXJlJyxcbiAgICBjaHJvbWVNZXNzYWdlOlxuICAgICAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgICAgICdObyBpbmZvcm1hdGlvbiBvciBtYXAgZGF0YSBpcyBzZW50IHRvIGFueSBzZXJ2ZXIuJyxcbiAgICBjb25maWdVcGxvYWRNZXNzYWdlOlxuICAgICAgJ1VwbG9hZCB7ZmlsZUZvcm1hdE5hbWVzfSBvciBzYXZlZCBtYXAgKipKc29uKiouIFJlYWQgbW9yZSBhYm91dCBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ2Jyb3dzZSB5b3VyIGZpbGVzJyxcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6ICdGaWxlIHtlcnJvckZpbGVzfSBpcyBub3Qgc3VwcG9ydGVkLicsXG4gICAgb3I6ICdvcidcbiAgfSxcbiAgZ2VvY29kZXI6IHtcbiAgICB0aXRsZTogJ0VudGVyIGFuIGFkZHJlc3Mgb3IgY29vcmRpbmF0ZXMsIGV4IDM3Ljc5LC0xMjIuNDAnXG4gIH0sXG4gIGZpZWxkU2VsZWN0b3I6IHtcbiAgICBjbGVhckFsbDogJ0NsZWFyIEFsbCcsXG4gICAgZm9ybWF0dGluZzogJ0Zvcm1hdHRpbmcnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdDb21wYXJpc29uIE1vZGUnLFxuICAgIHR5cGVMYWJlbDogJ0NvbXBhcmlzb24gVHlwZScsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGUnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbWFyeSdcbiAgfSxcbiAgZGVuc2l0eTogJ2RlbnNpdHknLFxuICAnQnVnIFJlcG9ydCc6ICdCdWcgUmVwb3J0JyxcbiAgJ1VzZXIgR3VpZGUnOiAnVXNlciBHdWlkZScsXG4gIFNhdmU6ICdTYXZlJyxcbiAgU2hhcmU6ICdTaGFyZSdcbn07XG4iXX0=