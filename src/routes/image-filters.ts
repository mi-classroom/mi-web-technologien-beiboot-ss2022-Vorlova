export const resetImages = (images: any) => {
    return images = [];
}

const onlyUnique = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index;
}

export const filterForInventoryNumbersBy = (imageArray: any, tag: string) => {
    let smallArray: any[] = [];
    const bigArray: any[] = [];

    // create a list of [tag] inventory numbers per image
    imageArray.forEach( (image: any) => {
        smallArray = [];

        image.references.forEach( (ref: any) => {
            if( ref.kind === tag) {
                smallArray.push(ref.inventoryNumber);
            }
        });
        if(smallArray.length > 0) {
            smallArray.push(image.inventoryNumber);
            smallArray.sort( (a: any, b:any) => {
                return a.localeCompare(b)
            });
            bigArray.push(smallArray);
        }

    });
    const uniqueArray = bigArray.filter(onlyUnique);
    return uniqueArray;
}

const referencesExist = (value: any) => {
    return value.references.length > 0;
}

const filterForReferences = (images: any) => {
    return images.filter(referencesExist);
}

const filterRelated = (imageArray: any) => {
    // create list of images which have related in content to entry (do I need this tho)
    return imageArray.filter(
        (entry: any) => {
            return entry.references.find( (value: any) => {
                return value.kind === "RELATED_IN_CONTENT_TO"
            })
        }
    );
}
