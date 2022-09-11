export const handleJSON = async (files: [any]) => {
    const text = await files[0].text();
    const jsonObj = JSON.parse(text);

    return jsonObj;
}

export const extractImageItems = (
    jsonObj: {
        items: [any],
    },
    images: any,
) => {
    jsonObj.items.forEach(item => {
        if(item.isBestOf == true) {
            const medium: string = removeBrackets(item.medium);
            const title: string = removeBrackets(item.metadata.title);
            const dimensions = formatDimensions(item.images.overall.images[0].sizes.medium.dimensions);

            images.push({
                src: item.images.overall.images[0].sizes.medium.src,
                title,
                date: item.metadata.date,
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
