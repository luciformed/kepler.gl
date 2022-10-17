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
    weight: 'pes',
    label: 'etiqueta',
    fillColor: 'color fons',
    color: 'color',
    coverage: 'cobertura',
    strokeColor: 'color de traç',
    radius: 'radi',
    outline: 'outline',
    stroke: 'traç',
    density: 'densitat',
    height: 'alçada',
    sum: 'suma',
    pointCount: 'Recompte de Punts'
  },
  placeholder: {
    search: 'Cerca',
    selectField: 'Selecciona un camp',
    yAxis: 'Eix Y',
    selectType: 'Selecciona un Tipus',
    selectValue: 'Selecciona un Valor',
    enterValue: 'Entra un valor',
    empty: 'buit'
  },
  misc: {
    by: '',
    valuesIn: 'Valors a',
    valueEquals: 'Valor igual a',
    dataSource: 'Font de dades',
    brushRadius: 'Radi del pinzell (km)',
    empty: ' '
  },
  mapLayers: {
    title: 'Capes del mapa',
    label: 'Etiqueta',
    road: 'Carretera',
    border: 'Frontera',
    building: 'Edifici',
    water: 'Aigua',
    land: 'Terra',
    '3dBuilding': 'Edifici 3D'
  },
  panel: {
    text: {
      label: 'etiqueta',
      labelWithId: 'Etiqueta {labelId}',
      fontSize: 'Mida de la font',
      fontColor: 'Color de la font',
      textAnchor: 'Àncora del text',
      alignment: 'Alineació',
      addMoreLabel: 'Afegeix més etiquetes'
    }
  },
  sidebar: {
    panels: {
      layer: 'Capes',
      filter: 'Filtres',
      interaction: 'Interaccions',
      basemap: 'Mapa base'
    }
  },
  layer: {
    required: 'Requerit*',
    radius: 'Radi',
    color: 'Color',
    fillColor: 'Color fons',
    outline: 'Contorn',
    weight: 'Gruix',
    propertyBasedOn: '{property} basada en',
    coverage: 'Cobertura',
    stroke: 'Traç',
    strokeWidth: 'Amplada de traç',
    strokeColor: 'Color de traç',
    basic: 'Basic',
    trailLength: 'Longitud de pista',
    trailLengthDescription: 'Nombre de segons fins que desapareix el camí',
    newLayer: 'nova capa',
    elevationByDescription: "Si desactivat, l'alçada es basa en el recompte de punts",
    colorByDescription: 'Si desactivat, el color es basa en el recompte de punts',
    aggregateBy: '{field} agregat per',
    '3DModel': 'Model 3D',
    '3DModelOptions': 'Opcions del model 3D',
    type: {
      point: 'punt',
      arc: 'arc',
      line: 'línia',
      grid: 'malla',
      hexbin: 'hexbin',
      polygon: 'polígon',
      geojson: 'geojson',
      cluster: 'cluster',
      icon: 'icona',
      heatmap: 'heatmap',
      hexagon: 'hexàgon',
      hexagonid: 'H3',
      trip: 'viatge',
      s2: 'S2',
      '3d': '3D'
    }
  },
  layerVisConfigs: {
    angle: 'Angle',
    strokeWidth: 'Amplada traç',
    strokeWidthRange: 'Rang amplada de traç',
    radius: 'Radi',
    fixedRadius: 'Radi fixe a mesurar',
    fixedRadiusDescription: 'Ajusta el radi al radi absolut en metres, p.ex 5 a 5 metres',
    radiusRange: 'Rang de radi',
    clusterRadius: 'Radi Cluster en Pixels',
    radiusRangePixels: 'Rang del radi en pixels',
    opacity: 'Opacitat',
    coverage: 'Cobertura',
    outline: 'Outline',
    colorRange: 'Rang de color',
    stroke: 'Traç',
    strokeColor: 'Color de traç',
    strokeColorRange: 'Rang de color de traç',
    targetColor: 'Color destí',
    colorAggregation: 'Agregació de color',
    heightAggregation: 'Agregació alçada',
    resolutionRange: 'Rang de resolució',
    sizeScale: 'Mida escala',
    worldUnitSize: 'Mida de la unitat mundial',
    elevationScale: 'Escala elevació',
    heightScale: 'Escala alçada',
    coverageRange: 'Rang ed cobertura',
    highPrecisionRendering: 'Representació alta precisió',
    highPrecisionRenderingDescription: 'La precisió alta tindrà rendiment més baix',
    height: 'Alçada',
    heightDescription: 'Fes clic al botó a dalt a la dreta del mapa per canviar a vista 3D',
    fill: 'Omple',
    enablePolygonHeight: 'Activa alçada del polígon',
    showWireframe: 'Mostra Wireframe',
    weightIntensity: 'Intensitat de pes',
    zoomScale: 'Escala de zoom',
    heightRange: 'Rang alçada'
  },
  layerManager: {
    addData: 'Afegeix Dades',
    addLayer: 'Afegeix Capes',
    layerBlending: 'Combinar capes'
  },
  mapManager: {
    mapStyle: 'Estil de mapa',
    addMapStyle: 'Afegeix estils de mapa',
    '3dBuildingColor': 'Color edifici 3D'
  },
  layerConfiguration: {
    defaultDescription: 'Calcula {property} segons el camp seleccionat',
    howTo: 'How to'
  },
  filterManager: {
    addFilter: 'Afegeix Filtre'
  },
  datasetTitle: {
    showDataTable: 'Mostra taula de dades',
    removeDataset: 'Elimina conjunt de dades'
  },
  datasetInfo: {
    rowCount: '{rowCount} files'
  },
  tooltip: {
    hideLayer: 'oculta la capa',
    showLayer: 'mostra la capa',
    hideFeature: "Amaga l'objecte",
    showFeature: "Mostra l'objecte",
    hide: 'amaga',
    show: 'mostra',
    removeLayer: 'Elimina capa',
    layerSettings: 'Configuració de capa',
    closePanel: 'Tanca panel actual',
    switchToDualView: 'Canvia a la vista de mapa dual',
    showLegend: 'mostra llegenda',
    disable3DMap: 'Desactiva mapa 3D',
    DrawOnMap: 'Dibuixa al mapa',
    selectLocale: 'Selecciona configuració regional',
    hideLayerPanel: 'Oculta el tauler de capes',
    showLayerPanel: 'Mostra el tauler de capes',
    moveToTop: 'Desplaça a dalt de tot de les capes de dades',
    selectBaseMapStyle: 'Selecciona estil de mapa base',
    "delete": 'Esborra',
    timePlayback: 'Reproducció de temps',
    cloudStorage: 'Emmagatzematge al núvol',
    '3DMap': 'Mapa 3D',
    animationByWindow: 'Finestra Temporal Mòbil',
    animationByIncremental: 'Finestra Temporal Incremental',
    speed: 'velocitat',
    play: 'iniciar',
    pause: 'pausar',
    reset: 'reiniciar'
  },
  toolbar: _objectSpread({
    exportImage: 'Exporta imatge',
    exportData: 'Exporta dades',
    exportMap: 'Exporta mapa',
    shareMapURL: 'Comparteix URL del mapa',
    saveMap: 'Desa mapa',
    select: 'selecciona',
    polygon: 'polígon',
    rectangle: 'rectangle',
    hide: 'amaga',
    show: 'mostra'
  }, _locales.LOCALES),
  modal: {
    title: {
      deleteDataset: 'Esborra conjunt de dades',
      addDataToMap: 'Afegeix dades al mapa',
      exportImage: 'Exporta imatge',
      exportData: 'Exporta dades',
      exportMap: 'Exporta mapa',
      addCustomMapboxStyle: 'Afegeix estil Mapbox propi',
      saveMap: 'Desa mapa',
      shareURL: 'Comparteix URL'
    },
    button: {
      "delete": 'Esborra',
      download: 'Descarrega',
      "export": 'Exporta',
      addStyle: 'Afegeix estil',
      save: 'Desa',
      defaultCancel: 'Cancel·la',
      defaultConfirm: 'Confirma'
    },
    exportImage: {
      ratioTitle: 'Ràtio',
      ratioDescription: 'Escull ràtio per diversos usos.',
      ratioOriginalScreen: 'Pantalla original',
      ratioCustom: 'Personalitzat',
      ratio4_3: '4:3',
      ratio16_9: '16:9',
      resolutionTitle: 'Resolució',
      resolutionDescription: 'Alta resolució és millor per a les impressions.',
      mapLegendTitle: 'Llegenda del mapa',
      mapLegendAdd: 'Afegir llegenda al mapa'
    },
    exportData: {
      datasetTitle: 'Conjunt de dades',
      datasetSubtitle: 'Escull els conjunts de dades que vols exportar',
      allDatasets: 'Tots',
      dataTypeTitle: 'Tipus de dades',
      dataTypeSubtitle: 'Escull els tipus de dades que vols exportar',
      filterDataTitle: 'Filtra dades',
      filterDataSubtitle: 'Pots escollir exportar les dades originals o les filtrades',
      filteredData: 'Dades filtrades',
      unfilteredData: 'Dades sense filtrar',
      fileCount: '{fileCount} Arxius',
      rowCount: '{rowCount} Files'
    },
    deleteData: {
      warning: "estàs a punt d'esborrar aquest conjunt de dades. Afectarà {length} capes"
    },
    addStyle: {
      publishTitle: "2. Publica el teu estil a Mapbox o proporciona el token d'accés",
      publishSubtitle1: 'Pots crear el teu propi estil de mapa a',
      publishSubtitle2: 'i',
      publishSubtitle3: 'publicar',
      publishSubtitle4: 'ho.',
      publishSubtitle5: 'Per utilitzar un estil privat, enganxa el teu',
      publishSubtitle6: "token d'accés",
      publishSubtitle7: 'aquí. *kepler.gl és una aplicació client, les dades romanen al teu navegador..',
      exampleToken: 'p.ex. pk.abcdefg.xxxxxx',
      pasteTitle: "1. Enganxa la URL de l'estil",
      pasteSubtitle1: 'Què és un',
      pasteSubtitle2: "URL de l'estil",
      namingTitle: '3. Posa nom al teu estil'
    },
    shareMap: {
      shareUriTitle: 'Comparteix URL del mapa',
      shareUriSubtitle: 'Genera una URL del mapa per compartir amb altri',
      cloudTitle: 'Emmagatzematge al núvol',
      cloudSubtitle: 'Accedeix i carrega dades de mapa al teu emmagatzematge al núvol personal',
      shareDisclaimer: 'kepler.gl desarà les dades del mapa al teu emmagatzematge al núvol personal, només qui tingui la URL podrà accedir al mapa i a les dades . ' + "Pots editar/esborrar l'arxiu de dades en el teu compte al núvol en qualsevol moment.",
      gotoPage: 'Ves a la pàgina de {currentProvider} de Kepler.gl'
    },
    statusPanel: {
      mapUploading: 'Carregar un mapa',
      error: 'Error'
    },
    saveMap: {
      title: 'Emmagatzematge al núvol',
      subtitle: 'Accedeix per desar el mapa al teu emmagatzematge al núvol'
    },
    exportMap: {
      formatTitle: 'Format de mapa',
      formatSubtitle: 'Escull el format amb què vols exportar el teu mapa',
      html: {
        selection: 'Exporta el teu mapa com un arxiu HTML interactiu.',
        tokenTitle: "Token d'accés de Mapbox",
        tokenSubtitle: "Utilitza el teu token d'accés de Mapbox a l'arxiu HTML (opcional)",
        tokenPlaceholder: "Enganxa el teu token d'accés a Mapbox",
        tokenMisuseWarning: '* Si no proporciones el teu propi token, el mapa podria fallar en qualsevol moment quan reemplacem el nostre token per evitar abusos. ',
        tokenDisclaimer: 'Pots canviar el toke de Mapbox més endavant fent servir aquestes instruccions: ',
        tokenUpdate: 'Com actualitzar un token preexistent.',
        modeTitle: 'Mode mapa',
        modeSubtitle1: 'Selecciona mode app. Més ',
        modeSubtitle2: 'informació',
        modeDescription: 'Permet als usuaris {mode} el mapa',
        read: 'llegir',
        edit: 'editar'
      },
      json: {
        configTitle: 'Configuració del mapa',
        configDisclaimer: "La configuració del mapa s'inclourà a l'arxiu Json. Si utilitzes kepler.gl a la teva pròpia app pots copiar aquesta configuració i passar-la a  ",
        selection: 'Exporta les dades del mapa i la configuració en un sol arxiu Json. Més endavant pots obrir aquest mateix mapa carregant aquest mateix arxiu a kepler.gl.',
        disclaimer: "* La configuració del mapa es combina amb els conjunts de dades carregats. ‘dataId’ s'utilitza per lligar capes, filtres i suggeriments a un conjunt de dades específic. " + "Quan passis aquesta configuració a addDataToMap, assegura que l'identificador del conjunt de dades coincideixi amb els ‘dataId’ d'aquesta configuració."
      }
    },
    loadingDialog: {
      loading: 'Carregant...'
    },
    loadData: {
      upload: 'Carregar arxius',
      storage: "Carregar des d'emmagatzematge"
    },
    tripInfo: {
      title: 'Com habilitar l’animació de viatge',
      description1: 'Per animar la ruta, les dades geoJSON han de contenir `LineString` en la seva geometria i les coordenades de LineString han de tenir 4 elements en els formats de ',
      code: ' [longitude, latitude, altitude, timestamp] ',
      description2: 'i el darrer element ha de ser la marca de temps. Els formats vàlids per a la marca de temps inclouen Unix en segons com `1564184363` o en milisegons com `1564184363000`.',
      example: 'Exemple:'
    },
    iconInfo: {
      title: 'Com dibuixar icones',
      description1: "En el teu CSV crea una columna i posa-hi el nom de la icona que vols dibuixar. Pots deixar la cel·la buida quan no vulguis que es mostri per a certs punts. Quan la columna s'anomena",
      code: 'icon',
      description2: " kepler.gl automàticament crearà una capa d'icona.",
      example: 'Exemple:',
      icons: 'Icones'
    },
    storageMapViewer: {
      lastModified: 'Darrera modificació fa {lastUpdated}',
      back: 'Enrere'
    },
    overwriteMap: {
      title: 'Desant mapa...',
      alreadyExists: 'ja existeix a {mapSaved}. El vols sobreescriure?'
    },
    loadStorageMap: {
      back: 'Enrere',
      goToPage: 'Ves a la pàgina {displayName} de Kepler.gl',
      storageMaps: 'Emmagatzematge / Mapes',
      noSavedMaps: 'Cap mapa desat encara'
    }
  },
  header: {
    visibleLayers: 'Capes visibles',
    layerLegend: 'Llegenda de capes'
  },
  interactions: {
    tooltip: 'Suggeriment',
    brush: 'Pinzell',
    coordinate: 'Coordenades',
    geocoder: 'Geocodificador'
  },
  layerBlending: {
    title: 'Combinació de capes',
    additive: 'additiva',
    normal: 'normal',
    subtractive: 'substractiva'
  },
  columns: {
    title: 'Columnes',
    lat: 'lat',
    lng: 'lon',
    altitude: 'alçada',
    icon: 'icona',
    geojson: 'geojson',
    arc: {
      lat0: 'lat origen',
      lng0: 'lng origen ',
      lat1: 'lat destinació',
      lng1: 'lng destinació'
    },
    grid: {
      worldUnitSize: 'Mida de malla (km)'
    },
    hexagon: {
      worldUnitSize: "Radi d'hexàgon (km)"
    },
    hex_id: 'id hex'
  },
  color: {
    customPalette: 'Paleta personalitzada',
    steps: 'intervals',
    type: 'tipus',
    reversed: 'invertida'
  },
  scale: {
    colorScale: 'Escala de color',
    sizeScale: 'Escala de mides',
    strokeScale: 'Escala de traç',
    scale: 'Escala'
  },
  fileUploader: {
    message: "Arrossega i deixa anar l'arxiu aquí",
    chromeMessage: '*usuari de Chrome: la mida màxima són 250mb, si has de carrgar un arxiu més gran fes servir Safari',
    disclaimer: '*kepler.gl és una aplicació a la banda client que no es recolza en cap servidor. Les dades només existeixen a la teva màquina/navegador. ' + "No s'envien dades ni mapes a cap servidor.",
    configUploadMessage: 'Carrega {fileFormatNames} o un mapa desat en **Json**. Més informació sobre [**supported file formats**]',
    browseFiles: 'navega pels teus arxius',
    uploading: 'Carregant',
    fileNotSupported: "L'arxiu {errorFiles} no és compatible.",
    or: 'o'
  },
  geocoder: {
    title: 'Introdueix una adreça'
  },
  fieldSelector: {
    clearAll: 'Treure tots',
    formatting: 'Format'
  },
  compare: {
    modeLabel: 'Mode Comparació',
    typeLabel: 'Tipus de Comparació',
    types: {
      absolute: 'Absoluta',
      relative: 'Relativa'
    }
  },
  mapPopover: {
    primary: 'Principal'
  },
  density: 'densitat',
  'Bug Report': "Informe d'errors",
  'User Guide': "Guia d'usuari",
  Save: 'Desa',
  Share: 'Comparteix'
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vY2EuanMiXSwibmFtZXMiOlsicHJvcGVydHkiLCJ3ZWlnaHQiLCJsYWJlbCIsImZpbGxDb2xvciIsImNvbG9yIiwiY292ZXJhZ2UiLCJzdHJva2VDb2xvciIsInJhZGl1cyIsIm91dGxpbmUiLCJzdHJva2UiLCJkZW5zaXR5IiwiaGVpZ2h0Iiwic3VtIiwicG9pbnRDb3VudCIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic2VsZWN0RmllbGQiLCJ5QXhpcyIsInNlbGVjdFR5cGUiLCJzZWxlY3RWYWx1ZSIsImVudGVyVmFsdWUiLCJlbXB0eSIsIm1pc2MiLCJieSIsInZhbHVlc0luIiwidmFsdWVFcXVhbHMiLCJkYXRhU291cmNlIiwiYnJ1c2hSYWRpdXMiLCJtYXBMYXllcnMiLCJ0aXRsZSIsInJvYWQiLCJib3JkZXIiLCJidWlsZGluZyIsIndhdGVyIiwibGFuZCIsInBhbmVsIiwidGV4dCIsImxhYmVsV2l0aElkIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYWxpZ25tZW50IiwiYWRkTW9yZUxhYmVsIiwic2lkZWJhciIsInBhbmVscyIsImxheWVyIiwiZmlsdGVyIiwiaW50ZXJhY3Rpb24iLCJiYXNlbWFwIiwicmVxdWlyZWQiLCJwcm9wZXJ0eUJhc2VkT24iLCJzdHJva2VXaWR0aCIsImJhc2ljIiwidHJhaWxMZW5ndGgiLCJ0cmFpbExlbmd0aERlc2NyaXB0aW9uIiwibmV3TGF5ZXIiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwiYWdncmVnYXRlQnkiLCJ0eXBlIiwicG9pbnQiLCJhcmMiLCJsaW5lIiwiZ3JpZCIsImhleGJpbiIsInBvbHlnb24iLCJnZW9qc29uIiwiY2x1c3RlciIsImljb24iLCJoZWF0bWFwIiwiaGV4YWdvbiIsImhleGFnb25pZCIsInRyaXAiLCJzMiIsImxheWVyVmlzQ29uZmlncyIsImFuZ2xlIiwic3Ryb2tlV2lkdGhSYW5nZSIsImZpeGVkUmFkaXVzIiwiZml4ZWRSYWRpdXNEZXNjcmlwdGlvbiIsInJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1cyIsInJhZGl1c1JhbmdlUGl4ZWxzIiwib3BhY2l0eSIsImNvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiaGVpZ2h0QWdncmVnYXRpb24iLCJyZXNvbHV0aW9uUmFuZ2UiLCJzaXplU2NhbGUiLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJoZWlnaHRTY2FsZSIsImNvdmVyYWdlUmFuZ2UiLCJoaWdoUHJlY2lzaW9uUmVuZGVyaW5nIiwiaGlnaFByZWNpc2lvblJlbmRlcmluZ0Rlc2NyaXB0aW9uIiwiaGVpZ2h0RGVzY3JpcHRpb24iLCJmaWxsIiwiZW5hYmxlUG9seWdvbkhlaWdodCIsInNob3dXaXJlZnJhbWUiLCJ3ZWlnaHRJbnRlbnNpdHkiLCJ6b29tU2NhbGUiLCJoZWlnaHRSYW5nZSIsImxheWVyTWFuYWdlciIsImFkZERhdGEiLCJhZGRMYXllciIsImxheWVyQmxlbmRpbmciLCJtYXBNYW5hZ2VyIiwibWFwU3R5bGUiLCJhZGRNYXBTdHlsZSIsImxheWVyQ29uZmlndXJhdGlvbiIsImRlZmF1bHREZXNjcmlwdGlvbiIsImhvd1RvIiwiZmlsdGVyTWFuYWdlciIsImFkZEZpbHRlciIsImRhdGFzZXRUaXRsZSIsInNob3dEYXRhVGFibGUiLCJyZW1vdmVEYXRhc2V0IiwiZGF0YXNldEluZm8iLCJyb3dDb3VudCIsInRvb2x0aXAiLCJoaWRlTGF5ZXIiLCJzaG93TGF5ZXIiLCJoaWRlRmVhdHVyZSIsInNob3dGZWF0dXJlIiwiaGlkZSIsInNob3ciLCJyZW1vdmVMYXllciIsImxheWVyU2V0dGluZ3MiLCJjbG9zZVBhbmVsIiwic3dpdGNoVG9EdWFsVmlldyIsInNob3dMZWdlbmQiLCJkaXNhYmxlM0RNYXAiLCJEcmF3T25NYXAiLCJzZWxlY3RMb2NhbGUiLCJoaWRlTGF5ZXJQYW5lbCIsInNob3dMYXllclBhbmVsIiwibW92ZVRvVG9wIiwic2VsZWN0QmFzZU1hcFN0eWxlIiwidGltZVBsYXliYWNrIiwiY2xvdWRTdG9yYWdlIiwiYW5pbWF0aW9uQnlXaW5kb3ciLCJhbmltYXRpb25CeUluY3JlbWVudGFsIiwic3BlZWQiLCJwbGF5IiwicGF1c2UiLCJyZXNldCIsInRvb2xiYXIiLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJzaGFyZU1hcFVSTCIsInNhdmVNYXAiLCJzZWxlY3QiLCJyZWN0YW5nbGUiLCJMT0NBTEVTIiwibW9kYWwiLCJkZWxldGVEYXRhc2V0IiwiYWRkRGF0YVRvTWFwIiwiYWRkQ3VzdG9tTWFwYm94U3R5bGUiLCJzaGFyZVVSTCIsImJ1dHRvbiIsImRvd25sb2FkIiwiYWRkU3R5bGUiLCJzYXZlIiwiZGVmYXVsdENhbmNlbCIsImRlZmF1bHRDb25maXJtIiwicmF0aW9UaXRsZSIsInJhdGlvRGVzY3JpcHRpb24iLCJyYXRpb09yaWdpbmFsU2NyZWVuIiwicmF0aW9DdXN0b20iLCJyYXRpbzRfMyIsInJhdGlvMTZfOSIsInJlc29sdXRpb25UaXRsZSIsInJlc29sdXRpb25EZXNjcmlwdGlvbiIsIm1hcExlZ2VuZFRpdGxlIiwibWFwTGVnZW5kQWRkIiwiZGF0YXNldFN1YnRpdGxlIiwiYWxsRGF0YXNldHMiLCJkYXRhVHlwZVRpdGxlIiwiZGF0YVR5cGVTdWJ0aXRsZSIsImZpbHRlckRhdGFUaXRsZSIsImZpbHRlckRhdGFTdWJ0aXRsZSIsImZpbHRlcmVkRGF0YSIsInVuZmlsdGVyZWREYXRhIiwiZmlsZUNvdW50IiwiZGVsZXRlRGF0YSIsIndhcm5pbmciLCJwdWJsaXNoVGl0bGUiLCJwdWJsaXNoU3VidGl0bGUxIiwicHVibGlzaFN1YnRpdGxlMiIsInB1Ymxpc2hTdWJ0aXRsZTMiLCJwdWJsaXNoU3VidGl0bGU0IiwicHVibGlzaFN1YnRpdGxlNSIsInB1Ymxpc2hTdWJ0aXRsZTYiLCJwdWJsaXNoU3VidGl0bGU3IiwiZXhhbXBsZVRva2VuIiwicGFzdGVUaXRsZSIsInBhc3RlU3VidGl0bGUxIiwicGFzdGVTdWJ0aXRsZTIiLCJuYW1pbmdUaXRsZSIsInNoYXJlTWFwIiwic2hhcmVVcmlUaXRsZSIsInNoYXJlVXJpU3VidGl0bGUiLCJjbG91ZFRpdGxlIiwiY2xvdWRTdWJ0aXRsZSIsInNoYXJlRGlzY2xhaW1lciIsImdvdG9QYWdlIiwic3RhdHVzUGFuZWwiLCJtYXBVcGxvYWRpbmciLCJlcnJvciIsInN1YnRpdGxlIiwiZm9ybWF0VGl0bGUiLCJmb3JtYXRTdWJ0aXRsZSIsImh0bWwiLCJzZWxlY3Rpb24iLCJ0b2tlblRpdGxlIiwidG9rZW5TdWJ0aXRsZSIsInRva2VuUGxhY2Vob2xkZXIiLCJ0b2tlbk1pc3VzZVdhcm5pbmciLCJ0b2tlbkRpc2NsYWltZXIiLCJ0b2tlblVwZGF0ZSIsIm1vZGVUaXRsZSIsIm1vZGVTdWJ0aXRsZTEiLCJtb2RlU3VidGl0bGUyIiwibW9kZURlc2NyaXB0aW9uIiwicmVhZCIsImVkaXQiLCJqc29uIiwiY29uZmlnVGl0bGUiLCJjb25maWdEaXNjbGFpbWVyIiwiZGlzY2xhaW1lciIsImxvYWRpbmdEaWFsb2ciLCJsb2FkaW5nIiwibG9hZERhdGEiLCJ1cGxvYWQiLCJzdG9yYWdlIiwidHJpcEluZm8iLCJkZXNjcmlwdGlvbjEiLCJjb2RlIiwiZGVzY3JpcHRpb24yIiwiZXhhbXBsZSIsImljb25JbmZvIiwiaWNvbnMiLCJzdG9yYWdlTWFwVmlld2VyIiwibGFzdE1vZGlmaWVkIiwiYmFjayIsIm92ZXJ3cml0ZU1hcCIsImFscmVhZHlFeGlzdHMiLCJsb2FkU3RvcmFnZU1hcCIsImdvVG9QYWdlIiwic3RvcmFnZU1hcHMiLCJub1NhdmVkTWFwcyIsImhlYWRlciIsInZpc2libGVMYXllcnMiLCJsYXllckxlZ2VuZCIsImludGVyYWN0aW9ucyIsImJydXNoIiwiY29vcmRpbmF0ZSIsImdlb2NvZGVyIiwiYWRkaXRpdmUiLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsImNvbHVtbnMiLCJsYXQiLCJsbmciLCJhbHRpdHVkZSIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJoZXhfaWQiLCJjdXN0b21QYWxldHRlIiwic3RlcHMiLCJyZXZlcnNlZCIsInNjYWxlIiwiY29sb3JTY2FsZSIsInN0cm9rZVNjYWxlIiwiZmlsZVVwbG9hZGVyIiwibWVzc2FnZSIsImNocm9tZU1lc3NhZ2UiLCJjb25maWdVcGxvYWRNZXNzYWdlIiwiYnJvd3NlRmlsZXMiLCJ1cGxvYWRpbmciLCJmaWxlTm90U3VwcG9ydGVkIiwib3IiLCJmaWVsZFNlbGVjdG9yIiwiY2xlYXJBbGwiLCJmb3JtYXR0aW5nIiwiY29tcGFyZSIsIm1vZGVMYWJlbCIsInR5cGVMYWJlbCIsInR5cGVzIiwiYWJzb2x1dGUiLCJyZWxhdGl2ZSIsIm1hcFBvcG92ZXIiLCJwcmltYXJ5IiwiU2F2ZSIsIlNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7Ozs7O2VBRWU7QUFDYkEsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRSxLQURBO0FBRVJDLElBQUFBLEtBQUssRUFBRSxVQUZDO0FBR1JDLElBQUFBLFNBQVMsRUFBRSxZQUhIO0FBSVJDLElBQUFBLEtBQUssRUFBRSxPQUpDO0FBS1JDLElBQUFBLFFBQVEsRUFBRSxXQUxGO0FBTVJDLElBQUFBLFdBQVcsRUFBRSxlQU5MO0FBT1JDLElBQUFBLE1BQU0sRUFBRSxNQVBBO0FBUVJDLElBQUFBLE9BQU8sRUFBRSxTQVJEO0FBU1JDLElBQUFBLE1BQU0sRUFBRSxNQVRBO0FBVVJDLElBQUFBLE9BQU8sRUFBRSxVQVZEO0FBV1JDLElBQUFBLE1BQU0sRUFBRSxRQVhBO0FBWVJDLElBQUFBLEdBQUcsRUFBRSxNQVpHO0FBYVJDLElBQUFBLFVBQVUsRUFBRTtBQWJKLEdBREc7QUFnQmJDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUUsT0FERztBQUVYQyxJQUFBQSxXQUFXLEVBQUUsb0JBRkY7QUFHWEMsSUFBQUEsS0FBSyxFQUFFLE9BSEk7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RSxNQTFiTztBQTJiYkMsRUFBQUEsS0FBSyxFQUFFO0FBM2JNLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjEgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0xPQ0FMRVN9IGZyb20gJy4vbG9jYWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcGVydHk6IHtcbiAgICB3ZWlnaHQ6ICdwZXMnLFxuICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgIGZpbGxDb2xvcjogJ2NvbG9yIGZvbnMnLFxuICAgIGNvbG9yOiAnY29sb3InLFxuICAgIGNvdmVyYWdlOiAnY29iZXJ0dXJhJyxcbiAgICBzdHJva2VDb2xvcjogJ2NvbG9yIGRlIHRyYcOnJyxcbiAgICByYWRpdXM6ICdyYWRpJyxcbiAgICBvdXRsaW5lOiAnb3V0bGluZScsXG4gICAgc3Ryb2tlOiAndHJhw6cnLFxuICAgIGRlbnNpdHk6ICdkZW5zaXRhdCcsXG4gICAgaGVpZ2h0OiAnYWzDp2FkYScsXG4gICAgc3VtOiAnc3VtYScsXG4gICAgcG9pbnRDb3VudDogJ1JlY29tcHRlIGRlIFB1bnRzJ1xuICB9LFxuICBwbGFjZWhvbGRlcjoge1xuICAgIHNlYXJjaDogJ0NlcmNhJyxcbiAgICBzZWxlY3RGaWVsZDogJ1NlbGVjY2lvbmEgdW4gY2FtcCcsXG4gICAgeUF4aXM6ICdFaXggWScsXG4gICAgc2VsZWN0VHlwZTogJ1NlbGVjY2lvbmEgdW4gVGlwdXMnLFxuICAgIHNlbGVjdFZhbHVlOiAnU2VsZWNjaW9uYSB1biBWYWxvcicsXG4gICAgZW50ZXJWYWx1ZTogJ0VudHJhIHVuIHZhbG9yJyxcbiAgICBlbXB0eTogJ2J1aXQnXG4gIH0sXG4gIG1pc2M6IHtcbiAgICBieTogJycsXG4gICAgdmFsdWVzSW46ICdWYWxvcnMgYScsXG4gICAgdmFsdWVFcXVhbHM6ICdWYWxvciBpZ3VhbCBhJyxcbiAgICBkYXRhU291cmNlOiAnRm9udCBkZSBkYWRlcycsXG4gICAgYnJ1c2hSYWRpdXM6ICdSYWRpIGRlbCBwaW56ZWxsIChrbSknLFxuICAgIGVtcHR5OiAnICdcbiAgfSxcbiAgbWFwTGF5ZXJzOiB7XG4gICAgdGl0bGU6ICdDYXBlcyBkZWwgbWFwYScsXG4gICAgbGFiZWw6ICdFdGlxdWV0YScsXG4gICAgcm9hZDogJ0NhcnJldGVyYScsXG4gICAgYm9yZGVyOiAnRnJvbnRlcmEnLFxuICAgIGJ1aWxkaW5nOiAnRWRpZmljaScsXG4gICAgd2F0ZXI6ICdBaWd1YScsXG4gICAgbGFuZDogJ1RlcnJhJyxcbiAgICAnM2RCdWlsZGluZyc6ICdFZGlmaWNpIDNEJ1xuICB9LFxuICBwYW5lbDoge1xuICAgIHRleHQ6IHtcbiAgICAgIGxhYmVsOiAnZXRpcXVldGEnLFxuICAgICAgbGFiZWxXaXRoSWQ6ICdFdGlxdWV0YSB7bGFiZWxJZH0nLFxuICAgICAgZm9udFNpemU6ICdNaWRhIGRlIGxhIGZvbnQnLFxuICAgICAgZm9udENvbG9yOiAnQ29sb3IgZGUgbGEgZm9udCcsXG4gICAgICB0ZXh0QW5jaG9yOiAnw4BuY29yYSBkZWwgdGV4dCcsXG4gICAgICBhbGlnbm1lbnQ6ICdBbGluZWFjacOzJyxcbiAgICAgIGFkZE1vcmVMYWJlbDogJ0FmZWdlaXggbcOpcyBldGlxdWV0ZXMnXG4gICAgfVxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcGFuZWxzOiB7XG4gICAgICBsYXllcjogJ0NhcGVzJyxcbiAgICAgIGZpbHRlcjogJ0ZpbHRyZXMnLFxuICAgICAgaW50ZXJhY3Rpb246ICdJbnRlcmFjY2lvbnMnLFxuICAgICAgYmFzZW1hcDogJ01hcGEgYmFzZSdcbiAgICB9XG4gIH0sXG4gIGxheWVyOiB7XG4gICAgcmVxdWlyZWQ6ICdSZXF1ZXJpdConLFxuICAgIHJhZGl1czogJ1JhZGknLFxuICAgIGNvbG9yOiAnQ29sb3InLFxuICAgIGZpbGxDb2xvcjogJ0NvbG9yIGZvbnMnLFxuICAgIG91dGxpbmU6ICdDb250b3JuJyxcbiAgICB3ZWlnaHQ6ICdHcnVpeCcsXG4gICAgcHJvcGVydHlCYXNlZE9uOiAne3Byb3BlcnR5fSBiYXNhZGEgZW4nLFxuICAgIGNvdmVyYWdlOiAnQ29iZXJ0dXJhJyxcbiAgICBzdHJva2U6ICdUcmHDpycsXG4gICAgc3Ryb2tlV2lkdGg6ICdBbXBsYWRhIGRlIHRyYcOnJyxcbiAgICBzdHJva2VDb2xvcjogJ0NvbG9yIGRlIHRyYcOnJyxcbiAgICBiYXNpYzogJ0Jhc2ljJyxcbiAgICB0cmFpbExlbmd0aDogJ0xvbmdpdHVkIGRlIHBpc3RhJyxcbiAgICB0cmFpbExlbmd0aERlc2NyaXB0aW9uOiAnTm9tYnJlIGRlIHNlZ29ucyBmaW5zIHF1ZSBkZXNhcGFyZWl4IGVsIGNhbcOtJyxcbiAgICBuZXdMYXllcjogJ25vdmEgY2FwYScsXG4gICAgZWxldmF0aW9uQnlEZXNjcmlwdGlvbjogXCJTaSBkZXNhY3RpdmF0LCBsJ2Fsw6dhZGEgZXMgYmFzYSBlbiBlbCByZWNvbXB0ZSBkZSBwdW50c1wiLFxuICAgIGNvbG9yQnlEZXNjcmlwdGlvbjogJ1NpIGRlc2FjdGl2YXQsIGVsIGNvbG9yIGVzIGJhc2EgZW4gZWwgcmVjb21wdGUgZGUgcHVudHMnLFxuICAgIGFnZ3JlZ2F0ZUJ5OiAne2ZpZWxkfSBhZ3JlZ2F0IHBlcicsXG4gICAgJzNETW9kZWwnOiAnTW9kZWwgM0QnLFxuICAgICczRE1vZGVsT3B0aW9ucyc6ICdPcGNpb25zIGRlbCBtb2RlbCAzRCcsXG4gICAgdHlwZToge1xuICAgICAgcG9pbnQ6ICdwdW50JyxcbiAgICAgIGFyYzogJ2FyYycsXG4gICAgICBsaW5lOiAnbMOtbmlhJyxcbiAgICAgIGdyaWQ6ICdtYWxsYScsXG4gICAgICBoZXhiaW46ICdoZXhiaW4nLFxuICAgICAgcG9seWdvbjogJ3BvbMOtZ29uJyxcbiAgICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICAgIGNsdXN0ZXI6ICdjbHVzdGVyJyxcbiAgICAgIGljb246ICdpY29uYScsXG4gICAgICBoZWF0bWFwOiAnaGVhdG1hcCcsXG4gICAgICBoZXhhZ29uOiAnaGV4w6Bnb24nLFxuICAgICAgaGV4YWdvbmlkOiAnSDMnLFxuICAgICAgdHJpcDogJ3ZpYXRnZScsXG4gICAgICBzMjogJ1MyJyxcbiAgICAgICczZCc6ICczRCdcbiAgICB9XG4gIH0sXG4gIGxheWVyVmlzQ29uZmlnczoge1xuICAgIGFuZ2xlOiAnQW5nbGUnLFxuICAgIHN0cm9rZVdpZHRoOiAnQW1wbGFkYSB0cmHDpycsXG4gICAgc3Ryb2tlV2lkdGhSYW5nZTogJ1JhbmcgYW1wbGFkYSBkZSB0cmHDpycsXG4gICAgcmFkaXVzOiAnUmFkaScsXG4gICAgZml4ZWRSYWRpdXM6ICdSYWRpIGZpeGUgYSBtZXN1cmFyJyxcbiAgICBmaXhlZFJhZGl1c0Rlc2NyaXB0aW9uOiAnQWp1c3RhIGVsIHJhZGkgYWwgcmFkaSBhYnNvbHV0IGVuIG1ldHJlcywgcC5leCA1IGEgNSBtZXRyZXMnLFxuICAgIHJhZGl1c1JhbmdlOiAnUmFuZyBkZSByYWRpJyxcbiAgICBjbHVzdGVyUmFkaXVzOiAnUmFkaSBDbHVzdGVyIGVuIFBpeGVscycsXG4gICAgcmFkaXVzUmFuZ2VQaXhlbHM6ICdSYW5nIGRlbCByYWRpIGVuIHBpeGVscycsXG4gICAgb3BhY2l0eTogJ09wYWNpdGF0JyxcbiAgICBjb3ZlcmFnZTogJ0NvYmVydHVyYScsXG4gICAgb3V0bGluZTogJ091dGxpbmUnLFxuICAgIGNvbG9yUmFuZ2U6ICdSYW5nIGRlIGNvbG9yJyxcbiAgICBzdHJva2U6ICdUcmHDpycsXG4gICAgc3Ryb2tlQ29sb3I6ICdDb2xvciBkZSB0cmHDpycsXG4gICAgc3Ryb2tlQ29sb3JSYW5nZTogJ1JhbmcgZGUgY29sb3IgZGUgdHJhw6cnLFxuICAgIHRhcmdldENvbG9yOiAnQ29sb3IgZGVzdMOtJyxcbiAgICBjb2xvckFnZ3JlZ2F0aW9uOiAnQWdyZWdhY2nDsyBkZSBjb2xvcicsXG4gICAgaGVpZ2h0QWdncmVnYXRpb246ICdBZ3JlZ2FjacOzIGFsw6dhZGEnLFxuICAgIHJlc29sdXRpb25SYW5nZTogJ1JhbmcgZGUgcmVzb2x1Y2nDsycsXG4gICAgc2l6ZVNjYWxlOiAnTWlkYSBlc2NhbGEnLFxuICAgIHdvcmxkVW5pdFNpemU6ICdNaWRhIGRlIGxhIHVuaXRhdCBtdW5kaWFsJyxcbiAgICBlbGV2YXRpb25TY2FsZTogJ0VzY2FsYSBlbGV2YWNpw7MnLFxuICAgIGhlaWdodFNjYWxlOiAnRXNjYWxhIGFsw6dhZGEnLFxuICAgIGNvdmVyYWdlUmFuZ2U6ICdSYW5nIGVkIGNvYmVydHVyYScsXG4gICAgaGlnaFByZWNpc2lvblJlbmRlcmluZzogJ1JlcHJlc2VudGFjacOzIGFsdGEgcHJlY2lzacOzJyxcbiAgICBoaWdoUHJlY2lzaW9uUmVuZGVyaW5nRGVzY3JpcHRpb246ICdMYSBwcmVjaXNpw7MgYWx0YSB0aW5kcsOgIHJlbmRpbWVudCBtw6lzIGJhaXgnLFxuICAgIGhlaWdodDogJ0Fsw6dhZGEnLFxuICAgIGhlaWdodERlc2NyaXB0aW9uOiAnRmVzIGNsaWMgYWwgYm90w7MgYSBkYWx0IGEgbGEgZHJldGEgZGVsIG1hcGEgcGVyIGNhbnZpYXIgYSB2aXN0YSAzRCcsXG4gICAgZmlsbDogJ09tcGxlJyxcbiAgICBlbmFibGVQb2x5Z29uSGVpZ2h0OiAnQWN0aXZhIGFsw6dhZGEgZGVsIHBvbMOtZ29uJyxcbiAgICBzaG93V2lyZWZyYW1lOiAnTW9zdHJhIFdpcmVmcmFtZScsXG4gICAgd2VpZ2h0SW50ZW5zaXR5OiAnSW50ZW5zaXRhdCBkZSBwZXMnLFxuICAgIHpvb21TY2FsZTogJ0VzY2FsYSBkZSB6b29tJyxcbiAgICBoZWlnaHRSYW5nZTogJ1JhbmcgYWzDp2FkYSdcbiAgfSxcbiAgbGF5ZXJNYW5hZ2VyOiB7XG4gICAgYWRkRGF0YTogJ0FmZWdlaXggRGFkZXMnLFxuICAgIGFkZExheWVyOiAnQWZlZ2VpeCBDYXBlcycsXG4gICAgbGF5ZXJCbGVuZGluZzogJ0NvbWJpbmFyIGNhcGVzJ1xuICB9LFxuICBtYXBNYW5hZ2VyOiB7XG4gICAgbWFwU3R5bGU6ICdFc3RpbCBkZSBtYXBhJyxcbiAgICBhZGRNYXBTdHlsZTogJ0FmZWdlaXggZXN0aWxzIGRlIG1hcGEnLFxuICAgICczZEJ1aWxkaW5nQ29sb3InOiAnQ29sb3IgZWRpZmljaSAzRCdcbiAgfSxcbiAgbGF5ZXJDb25maWd1cmF0aW9uOiB7XG4gICAgZGVmYXVsdERlc2NyaXB0aW9uOiAnQ2FsY3VsYSB7cHJvcGVydHl9IHNlZ29ucyBlbCBjYW1wIHNlbGVjY2lvbmF0JyxcbiAgICBob3dUbzogJ0hvdyB0bydcbiAgfSxcbiAgZmlsdGVyTWFuYWdlcjoge1xuICAgIGFkZEZpbHRlcjogJ0FmZWdlaXggRmlsdHJlJ1xuICB9LFxuICBkYXRhc2V0VGl0bGU6IHtcbiAgICBzaG93RGF0YVRhYmxlOiAnTW9zdHJhIHRhdWxhIGRlIGRhZGVzJyxcbiAgICByZW1vdmVEYXRhc2V0OiAnRWxpbWluYSBjb25qdW50IGRlIGRhZGVzJ1xuICB9LFxuICBkYXRhc2V0SW5mbzoge1xuICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBmaWxlcydcbiAgfSxcbiAgdG9vbHRpcDoge1xuICAgIGhpZGVMYXllcjogJ29jdWx0YSBsYSBjYXBhJyxcbiAgICBzaG93TGF5ZXI6ICdtb3N0cmEgbGEgY2FwYScsXG4gICAgaGlkZUZlYXR1cmU6IFwiQW1hZ2EgbCdvYmplY3RlXCIsXG4gICAgc2hvd0ZlYXR1cmU6IFwiTW9zdHJhIGwnb2JqZWN0ZVwiLFxuICAgIGhpZGU6ICdhbWFnYScsXG4gICAgc2hvdzogJ21vc3RyYScsXG4gICAgcmVtb3ZlTGF5ZXI6ICdFbGltaW5hIGNhcGEnLFxuICAgIGxheWVyU2V0dGluZ3M6ICdDb25maWd1cmFjacOzIGRlIGNhcGEnLFxuICAgIGNsb3NlUGFuZWw6ICdUYW5jYSBwYW5lbCBhY3R1YWwnLFxuICAgIHN3aXRjaFRvRHVhbFZpZXc6ICdDYW52aWEgYSBsYSB2aXN0YSBkZSBtYXBhIGR1YWwnLFxuICAgIHNob3dMZWdlbmQ6ICdtb3N0cmEgbGxlZ2VuZGEnLFxuICAgIGRpc2FibGUzRE1hcDogJ0Rlc2FjdGl2YSBtYXBhIDNEJyxcbiAgICBEcmF3T25NYXA6ICdEaWJ1aXhhIGFsIG1hcGEnLFxuICAgIHNlbGVjdExvY2FsZTogJ1NlbGVjY2lvbmEgY29uZmlndXJhY2nDsyByZWdpb25hbCcsXG4gICAgaGlkZUxheWVyUGFuZWw6ICdPY3VsdGEgZWwgdGF1bGVyIGRlIGNhcGVzJyxcbiAgICBzaG93TGF5ZXJQYW5lbDogJ01vc3RyYSBlbCB0YXVsZXIgZGUgY2FwZXMnLFxuICAgIG1vdmVUb1RvcDogJ0Rlc3BsYcOnYSBhIGRhbHQgZGUgdG90IGRlIGxlcyBjYXBlcyBkZSBkYWRlcycsXG4gICAgc2VsZWN0QmFzZU1hcFN0eWxlOiAnU2VsZWNjaW9uYSBlc3RpbCBkZSBtYXBhIGJhc2UnLFxuICAgIGRlbGV0ZTogJ0VzYm9ycmEnLFxuICAgIHRpbWVQbGF5YmFjazogJ1JlcHJvZHVjY2nDsyBkZSB0ZW1wcycsXG4gICAgY2xvdWRTdG9yYWdlOiAnRW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sJyxcbiAgICAnM0RNYXAnOiAnTWFwYSAzRCcsXG4gICAgYW5pbWF0aW9uQnlXaW5kb3c6ICdGaW5lc3RyYSBUZW1wb3JhbCBNw7JiaWwnLFxuICAgIGFuaW1hdGlvbkJ5SW5jcmVtZW50YWw6ICdGaW5lc3RyYSBUZW1wb3JhbCBJbmNyZW1lbnRhbCcsXG4gICAgc3BlZWQ6ICd2ZWxvY2l0YXQnLFxuICAgIHBsYXk6ICdpbmljaWFyJyxcbiAgICBwYXVzZTogJ3BhdXNhcicsXG4gICAgcmVzZXQ6ICdyZWluaWNpYXInXG4gIH0sXG4gIHRvb2xiYXI6IHtcbiAgICBleHBvcnRJbWFnZTogJ0V4cG9ydGEgaW1hdGdlJyxcbiAgICBleHBvcnREYXRhOiAnRXhwb3J0YSBkYWRlcycsXG4gICAgZXhwb3J0TWFwOiAnRXhwb3J0YSBtYXBhJyxcbiAgICBzaGFyZU1hcFVSTDogJ0NvbXBhcnRlaXggVVJMIGRlbCBtYXBhJyxcbiAgICBzYXZlTWFwOiAnRGVzYSBtYXBhJyxcbiAgICBzZWxlY3Q6ICdzZWxlY2Npb25hJyxcbiAgICBwb2x5Z29uOiAncG9sw61nb24nLFxuICAgIHJlY3RhbmdsZTogJ3JlY3RhbmdsZScsXG4gICAgaGlkZTogJ2FtYWdhJyxcbiAgICBzaG93OiAnbW9zdHJhJyxcbiAgICAuLi5MT0NBTEVTXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGRlbGV0ZURhdGFzZXQ6ICdFc2JvcnJhIGNvbmp1bnQgZGUgZGFkZXMnLFxuICAgICAgYWRkRGF0YVRvTWFwOiAnQWZlZ2VpeCBkYWRlcyBhbCBtYXBhJyxcbiAgICAgIGV4cG9ydEltYWdlOiAnRXhwb3J0YSBpbWF0Z2UnLFxuICAgICAgZXhwb3J0RGF0YTogJ0V4cG9ydGEgZGFkZXMnLFxuICAgICAgZXhwb3J0TWFwOiAnRXhwb3J0YSBtYXBhJyxcbiAgICAgIGFkZEN1c3RvbU1hcGJveFN0eWxlOiAnQWZlZ2VpeCBlc3RpbCBNYXBib3ggcHJvcGknLFxuICAgICAgc2F2ZU1hcDogJ0Rlc2EgbWFwYScsXG4gICAgICBzaGFyZVVSTDogJ0NvbXBhcnRlaXggVVJMJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBkZWxldGU6ICdFc2JvcnJhJyxcbiAgICAgIGRvd25sb2FkOiAnRGVzY2FycmVnYScsXG4gICAgICBleHBvcnQ6ICdFeHBvcnRhJyxcbiAgICAgIGFkZFN0eWxlOiAnQWZlZ2VpeCBlc3RpbCcsXG4gICAgICBzYXZlOiAnRGVzYScsXG4gICAgICBkZWZhdWx0Q2FuY2VsOiAnQ2FuY2VswrdsYScsXG4gICAgICBkZWZhdWx0Q29uZmlybTogJ0NvbmZpcm1hJ1xuICAgIH0sXG4gICAgZXhwb3J0SW1hZ2U6IHtcbiAgICAgIHJhdGlvVGl0bGU6ICdSw6B0aW8nLFxuICAgICAgcmF0aW9EZXNjcmlwdGlvbjogJ0VzY3VsbCByw6B0aW8gcGVyIGRpdmVyc29zIHVzb3MuJyxcbiAgICAgIHJhdGlvT3JpZ2luYWxTY3JlZW46ICdQYW50YWxsYSBvcmlnaW5hbCcsXG4gICAgICByYXRpb0N1c3RvbTogJ1BlcnNvbmFsaXR6YXQnLFxuICAgICAgcmF0aW80XzM6ICc0OjMnLFxuICAgICAgcmF0aW8xNl85OiAnMTY6OScsXG4gICAgICByZXNvbHV0aW9uVGl0bGU6ICdSZXNvbHVjacOzJyxcbiAgICAgIHJlc29sdXRpb25EZXNjcmlwdGlvbjogJ0FsdGEgcmVzb2x1Y2nDsyDDqXMgbWlsbG9yIHBlciBhIGxlcyBpbXByZXNzaW9ucy4nLFxuICAgICAgbWFwTGVnZW5kVGl0bGU6ICdMbGVnZW5kYSBkZWwgbWFwYScsXG4gICAgICBtYXBMZWdlbmRBZGQ6ICdBZmVnaXIgbGxlZ2VuZGEgYWwgbWFwYSdcbiAgICB9LFxuICAgIGV4cG9ydERhdGE6IHtcbiAgICAgIGRhdGFzZXRUaXRsZTogJ0Nvbmp1bnQgZGUgZGFkZXMnLFxuICAgICAgZGF0YXNldFN1YnRpdGxlOiAnRXNjdWxsIGVscyBjb25qdW50cyBkZSBkYWRlcyBxdWUgdm9scyBleHBvcnRhcicsXG4gICAgICBhbGxEYXRhc2V0czogJ1RvdHMnLFxuICAgICAgZGF0YVR5cGVUaXRsZTogJ1RpcHVzIGRlIGRhZGVzJyxcbiAgICAgIGRhdGFUeXBlU3VidGl0bGU6ICdFc2N1bGwgZWxzIHRpcHVzIGRlIGRhZGVzIHF1ZSB2b2xzIGV4cG9ydGFyJyxcbiAgICAgIGZpbHRlckRhdGFUaXRsZTogJ0ZpbHRyYSBkYWRlcycsXG4gICAgICBmaWx0ZXJEYXRhU3VidGl0bGU6ICdQb3RzIGVzY29sbGlyIGV4cG9ydGFyIGxlcyBkYWRlcyBvcmlnaW5hbHMgbyBsZXMgZmlsdHJhZGVzJyxcbiAgICAgIGZpbHRlcmVkRGF0YTogJ0RhZGVzIGZpbHRyYWRlcycsXG4gICAgICB1bmZpbHRlcmVkRGF0YTogJ0RhZGVzIHNlbnNlIGZpbHRyYXInLFxuICAgICAgZmlsZUNvdW50OiAne2ZpbGVDb3VudH0gQXJ4aXVzJyxcbiAgICAgIHJvd0NvdW50OiAne3Jvd0NvdW50fSBGaWxlcydcbiAgICB9LFxuICAgIGRlbGV0ZURhdGE6IHtcbiAgICAgIHdhcm5pbmc6IFwiZXN0w6BzIGEgcHVudCBkJ2VzYm9ycmFyIGFxdWVzdCBjb25qdW50IGRlIGRhZGVzLiBBZmVjdGFyw6Age2xlbmd0aH0gY2FwZXNcIlxuICAgIH0sXG4gICAgYWRkU3R5bGU6IHtcbiAgICAgIHB1Ymxpc2hUaXRsZTogXCIyLiBQdWJsaWNhIGVsIHRldSBlc3RpbCBhIE1hcGJveCBvIHByb3BvcmNpb25hIGVsIHRva2VuIGQnYWNjw6lzXCIsXG4gICAgICBwdWJsaXNoU3VidGl0bGUxOiAnUG90cyBjcmVhciBlbCB0ZXUgcHJvcGkgZXN0aWwgZGUgbWFwYSBhJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTI6ICdpJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTM6ICdwdWJsaWNhcicsXG4gICAgICBwdWJsaXNoU3VidGl0bGU0OiAnaG8uJyxcbiAgICAgIHB1Ymxpc2hTdWJ0aXRsZTU6ICdQZXIgdXRpbGl0emFyIHVuIGVzdGlsIHByaXZhdCwgZW5nYW54YSBlbCB0ZXUnLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNjogXCJ0b2tlbiBkJ2FjY8Opc1wiLFxuICAgICAgcHVibGlzaFN1YnRpdGxlNzpcbiAgICAgICAgJ2FxdcOtLiAqa2VwbGVyLmdsIMOpcyB1bmEgYXBsaWNhY2nDsyBjbGllbnQsIGxlcyBkYWRlcyByb21hbmVuIGFsIHRldSBuYXZlZ2Fkb3IuLicsXG4gICAgICBleGFtcGxlVG9rZW46ICdwLmV4LiBway5hYmNkZWZnLnh4eHh4eCcsXG4gICAgICBwYXN0ZVRpdGxlOiBcIjEuIEVuZ2FueGEgbGEgVVJMIGRlIGwnZXN0aWxcIixcbiAgICAgIHBhc3RlU3VidGl0bGUxOiAnUXXDqCDDqXMgdW4nLFxuICAgICAgcGFzdGVTdWJ0aXRsZTI6IFwiVVJMIGRlIGwnZXN0aWxcIixcbiAgICAgIG5hbWluZ1RpdGxlOiAnMy4gUG9zYSBub20gYWwgdGV1IGVzdGlsJ1xuICAgIH0sXG4gICAgc2hhcmVNYXA6IHtcbiAgICAgIHNoYXJlVXJpVGl0bGU6ICdDb21wYXJ0ZWl4IFVSTCBkZWwgbWFwYScsXG4gICAgICBzaGFyZVVyaVN1YnRpdGxlOiAnR2VuZXJhIHVuYSBVUkwgZGVsIG1hcGEgcGVyIGNvbXBhcnRpciBhbWIgYWx0cmknLFxuICAgICAgY2xvdWRUaXRsZTogJ0VtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCcsXG4gICAgICBjbG91ZFN1YnRpdGxlOiAnQWNjZWRlaXggaSBjYXJyZWdhIGRhZGVzIGRlIG1hcGEgYWwgdGV1IGVtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCBwZXJzb25hbCcsXG4gICAgICBzaGFyZURpc2NsYWltZXI6XG4gICAgICAgICdrZXBsZXIuZ2wgZGVzYXLDoCBsZXMgZGFkZXMgZGVsIG1hcGEgYWwgdGV1IGVtbWFnYXR6ZW1hdGdlIGFsIG7DunZvbCBwZXJzb25hbCwgbm9tw6lzIHF1aSB0aW5ndWkgbGEgVVJMIHBvZHLDoCBhY2NlZGlyIGFsIG1hcGEgaSBhIGxlcyBkYWRlcyAuICcgK1xuICAgICAgICBcIlBvdHMgZWRpdGFyL2VzYm9ycmFyIGwnYXJ4aXUgZGUgZGFkZXMgZW4gZWwgdGV1IGNvbXB0ZSBhbCBuw7p2b2wgZW4gcXVhbHNldm9sIG1vbWVudC5cIixcbiAgICAgIGdvdG9QYWdlOiAnVmVzIGEgbGEgcMOgZ2luYSBkZSB7Y3VycmVudFByb3ZpZGVyfSBkZSBLZXBsZXIuZ2wnXG4gICAgfSxcbiAgICBzdGF0dXNQYW5lbDoge1xuICAgICAgbWFwVXBsb2FkaW5nOiAnQ2FycmVnYXIgdW4gbWFwYScsXG4gICAgICBlcnJvcjogJ0Vycm9yJ1xuICAgIH0sXG4gICAgc2F2ZU1hcDoge1xuICAgICAgdGl0bGU6ICdFbW1hZ2F0emVtYXRnZSBhbCBuw7p2b2wnLFxuICAgICAgc3VidGl0bGU6ICdBY2NlZGVpeCBwZXIgZGVzYXIgZWwgbWFwYSBhbCB0ZXUgZW1tYWdhdHplbWF0Z2UgYWwgbsO6dm9sJ1xuICAgIH0sXG4gICAgZXhwb3J0TWFwOiB7XG4gICAgICBmb3JtYXRUaXRsZTogJ0Zvcm1hdCBkZSBtYXBhJyxcbiAgICAgIGZvcm1hdFN1YnRpdGxlOiAnRXNjdWxsIGVsIGZvcm1hdCBhbWIgcXXDqCB2b2xzIGV4cG9ydGFyIGVsIHRldSBtYXBhJyxcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgc2VsZWN0aW9uOiAnRXhwb3J0YSBlbCB0ZXUgbWFwYSBjb20gdW4gYXJ4aXUgSFRNTCBpbnRlcmFjdGl1LicsXG4gICAgICAgIHRva2VuVGl0bGU6IFwiVG9rZW4gZCdhY2PDqXMgZGUgTWFwYm94XCIsXG4gICAgICAgIHRva2VuU3VidGl0bGU6IFwiVXRpbGl0emEgZWwgdGV1IHRva2VuIGQnYWNjw6lzIGRlIE1hcGJveCBhIGwnYXJ4aXUgSFRNTCAob3BjaW9uYWwpXCIsXG4gICAgICAgIHRva2VuUGxhY2Vob2xkZXI6IFwiRW5nYW54YSBlbCB0ZXUgdG9rZW4gZCdhY2PDqXMgYSBNYXBib3hcIixcbiAgICAgICAgdG9rZW5NaXN1c2VXYXJuaW5nOlxuICAgICAgICAgICcqIFNpIG5vIHByb3BvcmNpb25lcyBlbCB0ZXUgcHJvcGkgdG9rZW4sIGVsIG1hcGEgcG9kcmlhIGZhbGxhciBlbiBxdWFsc2V2b2wgbW9tZW50IHF1YW4gcmVlbXBsYWNlbSBlbCBub3N0cmUgdG9rZW4gcGVyIGV2aXRhciBhYnVzb3MuICcsXG4gICAgICAgIHRva2VuRGlzY2xhaW1lcjpcbiAgICAgICAgICAnUG90cyBjYW52aWFyIGVsIHRva2UgZGUgTWFwYm94IG3DqXMgZW5kYXZhbnQgZmVudCBzZXJ2aXIgYXF1ZXN0ZXMgaW5zdHJ1Y2Npb25zOiAnLFxuICAgICAgICB0b2tlblVwZGF0ZTogJ0NvbSBhY3R1YWxpdHphciB1biB0b2tlbiBwcmVleGlzdGVudC4nLFxuICAgICAgICBtb2RlVGl0bGU6ICdNb2RlIG1hcGEnLFxuICAgICAgICBtb2RlU3VidGl0bGUxOiAnU2VsZWNjaW9uYSBtb2RlIGFwcC4gTcOpcyAnLFxuICAgICAgICBtb2RlU3VidGl0bGUyOiAnaW5mb3JtYWNpw7MnLFxuICAgICAgICBtb2RlRGVzY3JpcHRpb246ICdQZXJtZXQgYWxzIHVzdWFyaXMge21vZGV9IGVsIG1hcGEnLFxuICAgICAgICByZWFkOiAnbGxlZ2lyJyxcbiAgICAgICAgZWRpdDogJ2VkaXRhcidcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIGNvbmZpZ1RpdGxlOiAnQ29uZmlndXJhY2nDsyBkZWwgbWFwYScsXG4gICAgICAgIGNvbmZpZ0Rpc2NsYWltZXI6XG4gICAgICAgICAgXCJMYSBjb25maWd1cmFjacOzIGRlbCBtYXBhIHMnaW5jbG91csOgIGEgbCdhcnhpdSBKc29uLiBTaSB1dGlsaXR6ZXMga2VwbGVyLmdsIGEgbGEgdGV2YSBwcsOycGlhIGFwcCBwb3RzIGNvcGlhciBhcXVlc3RhIGNvbmZpZ3VyYWNpw7MgaSBwYXNzYXItbGEgYSAgXCIsXG4gICAgICAgIHNlbGVjdGlvbjpcbiAgICAgICAgICAnRXhwb3J0YSBsZXMgZGFkZXMgZGVsIG1hcGEgaSBsYSBjb25maWd1cmFjacOzIGVuIHVuIHNvbCBhcnhpdSBKc29uLiBNw6lzIGVuZGF2YW50IHBvdHMgb2JyaXIgYXF1ZXN0IG1hdGVpeCBtYXBhIGNhcnJlZ2FudCBhcXVlc3QgbWF0ZWl4IGFyeGl1IGEga2VwbGVyLmdsLicsXG4gICAgICAgIGRpc2NsYWltZXI6XG4gICAgICAgICAgXCIqIExhIGNvbmZpZ3VyYWNpw7MgZGVsIG1hcGEgZXMgY29tYmluYSBhbWIgZWxzIGNvbmp1bnRzIGRlIGRhZGVzIGNhcnJlZ2F0cy4g4oCYZGF0YUlk4oCZIHMndXRpbGl0emEgcGVyIGxsaWdhciBjYXBlcywgZmlsdHJlcyBpIHN1Z2dlcmltZW50cyBhIHVuIGNvbmp1bnQgZGUgZGFkZXMgZXNwZWPDrWZpYy4gXCIgK1xuICAgICAgICAgIFwiUXVhbiBwYXNzaXMgYXF1ZXN0YSBjb25maWd1cmFjacOzIGEgYWRkRGF0YVRvTWFwLCBhc3NlZ3VyYSBxdWUgbCdpZGVudGlmaWNhZG9yIGRlbCBjb25qdW50IGRlIGRhZGVzIGNvaW5jaWRlaXhpIGFtYiBlbHMg4oCYZGF0YUlk4oCZIGQnYXF1ZXN0YSBjb25maWd1cmFjacOzLlwiXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkaW5nRGlhbG9nOiB7XG4gICAgICBsb2FkaW5nOiAnQ2FycmVnYW50Li4uJ1xuICAgIH0sXG4gICAgbG9hZERhdGE6IHtcbiAgICAgIHVwbG9hZDogJ0NhcnJlZ2FyIGFyeGl1cycsXG4gICAgICBzdG9yYWdlOiBcIkNhcnJlZ2FyIGRlcyBkJ2VtbWFnYXR6ZW1hdGdlXCJcbiAgICB9LFxuICAgIHRyaXBJbmZvOiB7XG4gICAgICB0aXRsZTogJ0NvbSBoYWJpbGl0YXIgbOKAmWFuaW1hY2nDsyBkZSB2aWF0Z2UnLFxuICAgICAgZGVzY3JpcHRpb24xOlxuICAgICAgICAnUGVyIGFuaW1hciBsYSBydXRhLCBsZXMgZGFkZXMgZ2VvSlNPTiBoYW4gZGUgY29udGVuaXIgYExpbmVTdHJpbmdgIGVuIGxhIHNldmEgZ2VvbWV0cmlhIGkgbGVzIGNvb3JkZW5hZGVzIGRlIExpbmVTdHJpbmcgaGFuIGRlIHRlbmlyIDQgZWxlbWVudHMgZW4gZWxzIGZvcm1hdHMgZGUgJyxcbiAgICAgIGNvZGU6ICcgW2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGFsdGl0dWRlLCB0aW1lc3RhbXBdICcsXG4gICAgICBkZXNjcmlwdGlvbjI6XG4gICAgICAgICdpIGVsIGRhcnJlciBlbGVtZW50IGhhIGRlIHNlciBsYSBtYXJjYSBkZSB0ZW1wcy4gRWxzIGZvcm1hdHMgdsOgbGlkcyBwZXIgYSBsYSBtYXJjYSBkZSB0ZW1wcyBpbmNsb3VlbiBVbml4IGVuIHNlZ29ucyBjb20gYDE1NjQxODQzNjNgIG8gZW4gbWlsaXNlZ29ucyBjb20gYDE1NjQxODQzNjMwMDBgLicsXG4gICAgICBleGFtcGxlOiAnRXhlbXBsZTonXG4gICAgfSxcbiAgICBpY29uSW5mbzoge1xuICAgICAgdGl0bGU6ICdDb20gZGlidWl4YXIgaWNvbmVzJyxcbiAgICAgIGRlc2NyaXB0aW9uMTpcbiAgICAgICAgXCJFbiBlbCB0ZXUgQ1NWIGNyZWEgdW5hIGNvbHVtbmEgaSBwb3NhLWhpIGVsIG5vbSBkZSBsYSBpY29uYSBxdWUgdm9scyBkaWJ1aXhhci4gUG90cyBkZWl4YXIgbGEgY2VswrdsYSBidWlkYSBxdWFuIG5vIHZ1bGd1aXMgcXVlIGVzIG1vc3RyaSBwZXIgYSBjZXJ0cyBwdW50cy4gUXVhbiBsYSBjb2x1bW5hIHMnYW5vbWVuYVwiLFxuICAgICAgY29kZTogJ2ljb24nLFxuICAgICAgZGVzY3JpcHRpb24yOiBcIiBrZXBsZXIuZ2wgYXV0b23DoHRpY2FtZW50IGNyZWFyw6AgdW5hIGNhcGEgZCdpY29uYS5cIixcbiAgICAgIGV4YW1wbGU6ICdFeGVtcGxlOicsXG4gICAgICBpY29uczogJ0ljb25lcydcbiAgICB9LFxuICAgIHN0b3JhZ2VNYXBWaWV3ZXI6IHtcbiAgICAgIGxhc3RNb2RpZmllZDogJ0RhcnJlcmEgbW9kaWZpY2FjacOzIGZhIHtsYXN0VXBkYXRlZH0nLFxuICAgICAgYmFjazogJ0VucmVyZSdcbiAgICB9LFxuICAgIG92ZXJ3cml0ZU1hcDoge1xuICAgICAgdGl0bGU6ICdEZXNhbnQgbWFwYS4uLicsXG4gICAgICBhbHJlYWR5RXhpc3RzOiAnamEgZXhpc3RlaXggYSB7bWFwU2F2ZWR9LiBFbCB2b2xzIHNvYnJlZXNjcml1cmU/J1xuICAgIH0sXG4gICAgbG9hZFN0b3JhZ2VNYXA6IHtcbiAgICAgIGJhY2s6ICdFbnJlcmUnLFxuICAgICAgZ29Ub1BhZ2U6ICdWZXMgYSBsYSBww6BnaW5hIHtkaXNwbGF5TmFtZX0gZGUgS2VwbGVyLmdsJyxcbiAgICAgIHN0b3JhZ2VNYXBzOiAnRW1tYWdhdHplbWF0Z2UgLyBNYXBlcycsXG4gICAgICBub1NhdmVkTWFwczogJ0NhcCBtYXBhIGRlc2F0IGVuY2FyYSdcbiAgICB9XG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIHZpc2libGVMYXllcnM6ICdDYXBlcyB2aXNpYmxlcycsXG4gICAgbGF5ZXJMZWdlbmQ6ICdMbGVnZW5kYSBkZSBjYXBlcydcbiAgfSxcbiAgaW50ZXJhY3Rpb25zOiB7XG4gICAgdG9vbHRpcDogJ1N1Z2dlcmltZW50JyxcbiAgICBicnVzaDogJ1BpbnplbGwnLFxuICAgIGNvb3JkaW5hdGU6ICdDb29yZGVuYWRlcycsXG4gICAgZ2VvY29kZXI6ICdHZW9jb2RpZmljYWRvcidcbiAgfSxcbiAgbGF5ZXJCbGVuZGluZzoge1xuICAgIHRpdGxlOiAnQ29tYmluYWNpw7MgZGUgY2FwZXMnLFxuICAgIGFkZGl0aXZlOiAnYWRkaXRpdmEnLFxuICAgIG5vcm1hbDogJ25vcm1hbCcsXG4gICAgc3VidHJhY3RpdmU6ICdzdWJzdHJhY3RpdmEnXG4gIH0sXG4gIGNvbHVtbnM6IHtcbiAgICB0aXRsZTogJ0NvbHVtbmVzJyxcbiAgICBsYXQ6ICdsYXQnLFxuICAgIGxuZzogJ2xvbicsXG4gICAgYWx0aXR1ZGU6ICdhbMOnYWRhJyxcbiAgICBpY29uOiAnaWNvbmEnLFxuICAgIGdlb2pzb246ICdnZW9qc29uJyxcbiAgICBhcmM6IHtcbiAgICAgIGxhdDA6ICdsYXQgb3JpZ2VuJyxcbiAgICAgIGxuZzA6ICdsbmcgb3JpZ2VuICcsXG4gICAgICBsYXQxOiAnbGF0IGRlc3RpbmFjacOzJyxcbiAgICAgIGxuZzE6ICdsbmcgZGVzdGluYWNpw7MnXG4gICAgfSxcbiAgICBncmlkOiB7XG4gICAgICB3b3JsZFVuaXRTaXplOiAnTWlkYSBkZSBtYWxsYSAoa20pJ1xuICAgIH0sXG4gICAgaGV4YWdvbjoge1xuICAgICAgd29ybGRVbml0U2l6ZTogXCJSYWRpIGQnaGV4w6Bnb24gKGttKVwiXG4gICAgfSxcbiAgICBoZXhfaWQ6ICdpZCBoZXgnXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgY3VzdG9tUGFsZXR0ZTogJ1BhbGV0YSBwZXJzb25hbGl0emFkYScsXG4gICAgc3RlcHM6ICdpbnRlcnZhbHMnLFxuICAgIHR5cGU6ICd0aXB1cycsXG4gICAgcmV2ZXJzZWQ6ICdpbnZlcnRpZGEnXG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgY29sb3JTY2FsZTogJ0VzY2FsYSBkZSBjb2xvcicsXG4gICAgc2l6ZVNjYWxlOiAnRXNjYWxhIGRlIG1pZGVzJyxcbiAgICBzdHJva2VTY2FsZTogJ0VzY2FsYSBkZSB0cmHDpycsXG4gICAgc2NhbGU6ICdFc2NhbGEnXG4gIH0sXG4gIGZpbGVVcGxvYWRlcjoge1xuICAgIG1lc3NhZ2U6IFwiQXJyb3NzZWdhIGkgZGVpeGEgYW5hciBsJ2FyeGl1IGFxdcOtXCIsXG4gICAgY2hyb21lTWVzc2FnZTpcbiAgICAgICcqdXN1YXJpIGRlIENocm9tZTogbGEgbWlkYSBtw6B4aW1hIHPDs24gMjUwbWIsIHNpIGhhcyBkZSBjYXJyZ2FyIHVuIGFyeGl1IG3DqXMgZ3JhbiBmZXMgc2VydmlyIFNhZmFyaScsXG4gICAgZGlzY2xhaW1lcjpcbiAgICAgICcqa2VwbGVyLmdsIMOpcyB1bmEgYXBsaWNhY2nDsyBhIGxhIGJhbmRhIGNsaWVudCBxdWUgbm8gZXMgcmVjb2x6YSBlbiBjYXAgc2Vydmlkb3IuIExlcyBkYWRlcyBub23DqXMgZXhpc3RlaXhlbiBhIGxhIHRldmEgbcOgcXVpbmEvbmF2ZWdhZG9yLiAnICtcbiAgICAgIFwiTm8gcydlbnZpZW4gZGFkZXMgbmkgbWFwZXMgYSBjYXAgc2Vydmlkb3IuXCIsXG4gICAgY29uZmlnVXBsb2FkTWVzc2FnZTpcbiAgICAgICdDYXJyZWdhIHtmaWxlRm9ybWF0TmFtZXN9IG8gdW4gbWFwYSBkZXNhdCBlbiAqKkpzb24qKi4gTcOpcyBpbmZvcm1hY2nDsyBzb2JyZSBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdJyxcbiAgICBicm93c2VGaWxlczogJ25hdmVnYSBwZWxzIHRldXMgYXJ4aXVzJyxcbiAgICB1cGxvYWRpbmc6ICdDYXJyZWdhbnQnLFxuICAgIGZpbGVOb3RTdXBwb3J0ZWQ6IFwiTCdhcnhpdSB7ZXJyb3JGaWxlc30gbm8gw6lzIGNvbXBhdGlibGUuXCIsXG4gICAgb3I6ICdvJ1xuICB9LFxuICBnZW9jb2Rlcjoge1xuICAgIHRpdGxlOiAnSW50cm9kdWVpeCB1bmEgYWRyZcOnYSdcbiAgfSxcbiAgZmllbGRTZWxlY3Rvcjoge1xuICAgIGNsZWFyQWxsOiAnVHJldXJlIHRvdHMnLFxuICAgIGZvcm1hdHRpbmc6ICdGb3JtYXQnXG4gIH0sXG4gIGNvbXBhcmU6IHtcbiAgICBtb2RlTGFiZWw6ICdNb2RlIENvbXBhcmFjacOzJyxcbiAgICB0eXBlTGFiZWw6ICdUaXB1cyBkZSBDb21wYXJhY2nDsycsXG4gICAgdHlwZXM6IHtcbiAgICAgIGFic29sdXRlOiAnQWJzb2x1dGEnLFxuICAgICAgcmVsYXRpdmU6ICdSZWxhdGl2YSdcbiAgICB9XG4gIH0sXG4gIG1hcFBvcG92ZXI6IHtcbiAgICBwcmltYXJ5OiAnUHJpbmNpcGFsJ1xuICB9LFxuICBkZW5zaXR5OiAnZGVuc2l0YXQnLFxuICAnQnVnIFJlcG9ydCc6IFwiSW5mb3JtZSBkJ2Vycm9yc1wiLFxuICAnVXNlciBHdWlkZSc6IFwiR3VpYSBkJ3VzdWFyaVwiLFxuICBTYXZlOiAnRGVzYScsXG4gIFNoYXJlOiAnQ29tcGFydGVpeCdcbn07XG4iXX0=