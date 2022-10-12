export * from './mapbox-utils';
export function generateMapboxLayers(
  layers: any[],
  layerData: any[],
  layerOrder: any[],
  layersToRender: {}
): {
  [key: string]: {
    id: string;
  };
};

export function updateMapboxLayers(map: any, newLayers: any, oldLayers: any): void;
