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

            images.push({
                src: item.images.overall.images[0].sizes.medium.src,
                title,
                date: item.metadata.date,
                medium,
                repository: item.repository,
                sortingPosition: item.sortingNumber,
                artist: item.involvedPersons[0].name,
            });
        }
    });
    return images;
}

const removeBrackets = (entry: string): string => {
    return entry.split('(')[0].split('[')[0];
}
