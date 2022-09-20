export const resetImages = (images: any) => {
    return images = [];
}

export const filterRelated = (originalImage: any, imageArray: any[]) => {
    let relatedImage: any[];
    const relatedImageArray: any[] = [];

    originalImage.references.forEach(
        (reference: any) => {
            relatedImage = imageArray.find( (image: any) => {
                if (reference.inventoryNumber === image.inventoryNumber) {
                    return image;
                }
            })
            if (relatedImage) {
                relatedImageArray.push(relatedImage)
            }
        }
    );
    return relatedImageArray;
}
