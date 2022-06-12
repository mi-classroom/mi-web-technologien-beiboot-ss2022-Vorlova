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
    images = [];
    jsonObj.items.forEach(item => {
        if(item.isBestOf == true) {
            const medium: string = removeBrackets(item.medium);

            images.push({
                src: item.images.overall.images[0].sizes.medium.src,
                title: item.metadata.title,
                date: item.metadata.date,
                medium,
                repository: item.repository,
                sortingPosition: item.sortingNumber,
            });
        }
    });
}

export const sortImages = (images: any) => {
    images.sort((a: any, b: any) => {
        return a.sortingPosition.localeCompare(b.sortingPosition);
    });
}

export const removeBrackets = (entry: string): string => {
    return entry.split('(')[0].split('[')[0];
}
