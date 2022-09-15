import * as OpenFont from '../assets/fonts/Open_Sans_Regular.json';

import { BoxGeometry, LineBasicMaterial, MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from 'three';
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
import { set_store_value } from 'svelte/internal';
import { getStores } from '$app/stores';

const font = new Font( OpenFont );

let textPlanePosition: [number, number, number];
let allTextPosition: [number, number, number];
let imagePosition: [number, number, number];
let yearPosition: [number, number, number];

const basicDepth = 1;

const heightSpacer = 10;
const depthSpacer = 150;
const loader = new TextureLoader();

// Materials
export const lineMaterial = new LineBasicMaterial( { color: 0x222222 } );
export const groundMaterial = new MeshStandardMaterial({ color: 0xb4b4b4 });

export const loadImageTextures = (images: any) => {
    const imageMaterials: any[] = [];
    images.forEach((image: any) => {
        // replace url
        const url = image.src;
        const newUrl = url.replace( "imageserver-2022", "data-proxy/image.php?subpath=");

        imageMaterials.push([
            // right
            new MeshBasicMaterial({ color: 0x000000 }),
            // left
            new MeshBasicMaterial({ color: 0x000000 }),
            // top
            new MeshBasicMaterial({ color: 0x000000 }),
            // bottom
            new MeshBasicMaterial({ color: 0x000000 }),
            // back ?
            new MeshBasicMaterial({ color: 0x000000 }),
            // front ?
            // new MeshBasicMaterial({ color: 0x000000 }),
            new MeshBasicMaterial({map: loader.load(newUrl)}),
        ]);
    });
    console.log(imageMaterials)
    globalMaterials.set(imageMaterials);
    console.log("Loaded Textures")
}

// Geometries
export const groundGeometry = new BoxGeometry( 5000, 0, 1024);
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

            globalTextPlanePosition.set(textPlanePosition);
            globalAllTextPosition.set(allTextPosition);
            globalImagePosition.set(imagePosition);
            break;
        }
        case 'up': {
            textPlanePosition[1] =
            textPlanePosition[1] + images[index - 1].dimensions.height + imageBaseWidth + heightSpacer + 5;
            allTextPosition[1] =
                allTextPosition[1] +  images[index - 1].dimensions.height + imageBaseWidth + heightSpacer + 5;
            imagePosition[1] = 
                imagePosition[1] + item.dimensions.height/2 + images[index - 1].dimensions.height/2 + imageBaseWidth + heightSpacer + 5;
            
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
    globalYearPosition.set(yearPosition);
}
