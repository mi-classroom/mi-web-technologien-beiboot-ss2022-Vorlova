import { resetData } from "./scene-creation";
import { imageCollections } from "./stores";

export let years: string[] = [];

export const handleSubmit = (files: any) => {
    handleJSON(files).then(
        function(value) {
            const extractedImages = extractImageItems(value);
            years = [];
            
            // set up image collections
            const chronologicalImages = extractedImages;
            sortImagesBySortingPosition(chronologicalImages);
            imageCollections.chronologicalImages.set(chronologicalImages);
            chronologicalImages.forEach( (image) => {
                years.push(
                    image.cleanedUpDate
                )
            })
            resetData(chronologicalImages)
        }
    );
}

const handleJSON = async (files: [any]) => {
    const text = await files[0].text();
    const jsonObj = JSON.parse(text);
    
    return jsonObj;
}

const extractImageItems = (
    jsonObj: {
        items: [any],
    },
) => {
    const images: any[] = [];
    jsonObj.items.forEach(item => {
        if(item.isBestOf == true) {
            const medium: string = removeBrackets(item.medium);
            const title: string = removeBrackets(item.metadata.title);
            const dimensions = formatDimensions(item.images.overall.images[0].sizes.medium.dimensions);
            const cleanedUpDate = cleanUpYear(item.sortingNumber)

            images.push({
                src: item.images.overall.images[0].sizes.medium.src,
                title,
                date: item.metadata.date,
                cleanedUpDate,
                medium,
                repository: item.repository,
                sortingPosition: item.sortingNumber,
                artist: item.involvedPersons[0].name,
                dimensions,
                inventoryNumber: item.inventoryNumber,
                references: item.references,
            });
        }
    });
    return images;
}

const removeBrackets = (entry: string): string => {
    return entry.split('(')[0].split('[')[0];
}

const formatDimensions = (dimensions: {
    'width': number,
    'height': number,
}) => {
    return {
        'width': dimensions.width / 10,
        'height': dimensions.height / 10,
    }
}

export const sortImagesBySortingPosition = (images: any) => {
    images.sort((a: any, b: any) => {
        return a.sortingPosition.localeCompare(b.sortingPosition);
    });
}

const cleanUpYear = (itemDate: string) => {
    const itemYear = itemDate.split('-');
    return itemYear[0];
}
