import * as OpenFont from '../assets/fonts/Open_Sans_Regular.json';

import { BoxGeometry, LineBasicMaterial, MeshStandardMaterial } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Font } from 'three/examples/jsm/loaders/FontLoader.js';
import {
    allTextGeo,
    allTextPosition as globalAllTextPosition,
    defaultAllTextPosition,
    defaultImagePosition,
    defaultTextPlanePosition,
    imageBaseHeight,
    imageBaseWidth,
    imagePosition as globalImagePosition,
    materials as globalMaterials,
    textPlaneBaseHeight,
    textPlaneBaseWidth,
    textPlanePosition as globalTextPlanePosition,
    yearGeometries,
    yearPosition as globalYearPosition,
} from './stores';

const font = new Font( OpenFont );

let textPlanePosition: [number, number, number];
let allTextPosition: [number, number, number];
let imagePosition: [number, number, number];
let yearPosition: [number, number, number];

const basicDepth = 1;

const heightSpacer = 20;
const depthSpacer = 300;

// Materials
export const lineMaterial = new LineBasicMaterial( { color: 0x333333 } );
export const groundMaterial = new MeshStandardMaterial({ color: 0xf2f2f2 });

// Geometries
export const groundGeometry = new BoxGeometry( 11000, 0, 2048);
export const imageGeometry = new BoxGeometry( imageBaseWidth, imageBaseHeight, basicDepth);
export const textPlaneGeometry = new BoxGeometry( textPlaneBaseWidth, textPlaneBaseHeight, basicDepth);

export const generateAllText = (image: any) => {
    const text: string =
        'Title: ' + image.title + 
        '\nDate: ' + image.date +
        '\nArtist: ' + image.artist +
        '\nMedium: ' + image.medium +
        '\nRepository: ' + image.repository;
    return new TextGeometry( text, {
        font: font,
        size: 2,
        height: 1,
    } );
}

export const generateYearGeometry = (year: string) => {
    return new TextGeometry( year, {
        font: font,
        size: 12,
        height: 1,
    } );
}

export const resetData = (images: any) => {
    globalMaterials.set([]);
    allTextGeo.set([]);
    yearGeometries.set([]);

    globalYearPosition.set([ defaultImagePosition[0], defaultImagePosition[1], defaultImagePosition[2]- 100 ]);
    globalImagePosition.set([ defaultImagePosition[0], (images[0].dimensions.height/2) + textPlaneBaseHeight + 10, images[0].dimensions.width/2]);
    globalTextPlanePosition.set([...defaultTextPlanePosition]);
    globalAllTextPosition.set([...defaultAllTextPosition])
}

export const calculatePosition = (
    tag: string,
    images: any,
    item: any,
    index: number,
) => {
    globalTextPlanePosition.subscribe(
        value => {
            textPlanePosition = value;
        }
    )
    globalAllTextPosition.subscribe(
        value => {
            allTextPosition = value;
        }
    )
    globalImagePosition.subscribe(
        value => {
            imagePosition = value;
        }
    )
    switch (tag){
        case 'back': {
            textPlanePosition[0] = textPlanePosition[0] + depthSpacer;
            allTextPosition[0] = allTextPosition[0] + depthSpacer;
            imagePosition[0] = imagePosition[0] + depthSpacer;
            
            textPlanePosition[1] = defaultTextPlanePosition[1];
            allTextPosition[1] = defaultAllTextPosition[1];
            imagePosition[1] = item.dimensions ?
                item.dimensions.height/2 + textPlaneBaseHeight + 10 :
                imageBaseHeight/2 + textPlaneBaseHeight + 10;

            textPlanePosition[2] = defaultTextPlanePosition[2]
            allTextPosition[2] = defaultAllTextPosition[2]
            imagePosition[2] = item.dimensions ?
                item.dimensions.width/2 :
                defaultImagePosition[2]

            globalTextPlanePosition.set(textPlanePosition);
            globalAllTextPosition.set(allTextPosition);
            globalImagePosition.set(imagePosition);
            break;
        }
        case 'side': {
            imagePosition[1] = item.dimensions ?
                item.dimensions.height/2 + textPlaneBaseHeight + 10 :
                imageBaseHeight/2 + textPlaneBaseHeight + 10;

            textPlanePosition[2] =
            textPlanePosition[2] + images[index - 1].dimensions.width + textPlaneBaseHeight + heightSpacer *2;
            allTextPosition[2] =
                allTextPosition[2] +  images[index - 1].dimensions.width + textPlaneBaseHeight + heightSpacer *2;
            imagePosition[2] = 
                imagePosition[2] + item.dimensions.width/2 + images[index - 1].dimensions.width/2 + textPlaneBaseHeight + heightSpacer *2;
            
            globalTextPlanePosition.set(textPlanePosition);
            globalAllTextPosition.set(allTextPosition);
            globalImagePosition.set(imagePosition);
            break;
        }
    }
}

export const shiftYear = () => {
    globalYearPosition.subscribe(
        value => {
            yearPosition = value;
        }
    )
    yearPosition[0] = yearPosition[0] + depthSpacer;
    globalYearPosition.set([...yearPosition]);
}

export const calculatePositionUp = (
    position: any[],
    imageBefore: any,
    images: any,
    item: any,
    index: number,
) => {

    position[1] = 
        images[index-1] ?
        position[1] + item.dimensions.height/2 + images[index - 1].dimensions.height/2 + textPlaneBaseHeight + heightSpacer + 5 :
        position[1] + item.dimensions.height/2 + imageBefore.dimensions.height/2 + textPlaneBaseHeight + heightSpacer + 5;

    return position
}
