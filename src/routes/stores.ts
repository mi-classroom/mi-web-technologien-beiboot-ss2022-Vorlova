import { writable } from 'svelte/store';

export const imageBaseWidth = 20;
export const imageBaseHeight = 40;
export const textPlaneBaseHeight = 20;
export const textPlaneBaseWidth = 70;

const chronologicalImages = writable([]);

export const imageCollections = {
    chronologicalImages,
}

export const materials = writable();

export const yearGeometries = writable([]);
export const allTextGeo = writable([]);

// Geometry default Positions
export const defaultCameraPosition: [number, number, number] = [-2050, 50, 15];
export const defaultImagePosition: [number, number, number] = [-2000, imageBaseHeight/2 + textPlaneBaseHeight + 10, imageBaseWidth/2];
export const defaultTextPlanePosition: [number, number, number] = [-2000, textPlaneBaseHeight/2 + 5, textPlaneBaseWidth/2];
export const defaultAllTextPosition: [number, number, number] = [ defaultTextPlanePosition[0], defaultTextPlanePosition[1] + textPlaneBaseHeight/2 - 3, defaultTextPlanePosition[2] - textPlaneBaseWidth/2 + 1];

export const imagePosition = writable([...defaultImagePosition])
export const yearPosition = writable([ defaultImagePosition[0], defaultImagePosition[1], defaultImagePosition[2] - 100 ])
export const textPlanePosition = writable([...defaultTextPlanePosition])
export const allTextPosition = writable([...defaultAllTextPosition])