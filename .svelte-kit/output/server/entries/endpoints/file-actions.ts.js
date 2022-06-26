const handleJSON = async (files) => {
  const text = await files[0].text();
  const jsonObj = JSON.parse(text);
  return jsonObj;
};
const extractImageItems = (jsonObj, images) => {
  jsonObj.items.forEach((item) => {
    if (item.isBestOf == true) {
      const medium = removeBrackets(item.medium);
      const title = removeBrackets(item.metadata.title);
      const dimensions = formatDimensions(item.images.overall.images[0].sizes.medium.dimensions);
      images.push({
        src: item.images.overall.images[0].sizes.medium.src,
        title,
        date: item.metadata.date,
        medium,
        repository: item.repository,
        sortingPosition: item.sortingNumber,
        artist: item.involvedPersons[0].name,
        dimensions
      });
    }
  });
  return images;
};
const removeBrackets = (entry) => {
  return entry.split("(")[0].split("[")[0];
};
const formatDimensions = (dimensions) => {
  return {
    "width": dimensions.width / 10,
    "height": dimensions.height / 10
  };
};
export { extractImageItems, handleJSON };
