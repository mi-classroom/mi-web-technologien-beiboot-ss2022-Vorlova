const resetImages = (images) => {
  return [];
};
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const filterForInventoryNumbersBy = (imageArray, tag) => {
  let smallArray = [];
  const bigArray = [];
  imageArray.forEach((image) => {
    smallArray = [];
    image.references.forEach((ref) => {
      if (ref.kind === tag) {
        smallArray.push(ref.inventoryNumber);
      }
    });
    if (smallArray.length > 0) {
      smallArray.push(image.inventoryNumber);
      smallArray.sort((a, b) => {
        return a.localeCompare(b);
      });
      bigArray.push(smallArray);
    }
  });
  const uniqueArray = bigArray.filter(onlyUnique);
  return uniqueArray;
};
export { filterForInventoryNumbersBy, resetImages };
