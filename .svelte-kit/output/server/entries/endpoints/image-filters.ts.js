const resetImages = (images) => {
  return [];
};
const filterRelated = (originalImage, imageArray) => {
  let relatedImage;
  const relatedImageArray = [];
  originalImage.references.forEach((reference) => {
    relatedImage = imageArray.find((image) => {
      if (reference.inventoryNumber === image.inventoryNumber) {
        return image;
      }
    });
    if (relatedImage) {
      relatedImageArray.push(relatedImage);
    }
  });
  return relatedImageArray;
};
export { filterRelated, resetImages };
