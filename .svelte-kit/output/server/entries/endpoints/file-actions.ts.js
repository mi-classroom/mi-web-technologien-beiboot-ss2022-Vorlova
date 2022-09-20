import { resetData } from "./scene-creation.ts.js";
import { imageCollections } from "./stores.ts.js";
import "three";
import "three/examples/jsm/geometries/TextGeometry";
import "three/examples/jsm/loaders/FontLoader.js";
import "../../chunks/index-23786d4b.js";
let years = [];
const handleSubmit = (files) => {
  handleJSON(files).then(function(value) {
    const extractedImages = extractImageItems(value);
    years = [];
    const chronologicalImages = extractedImages;
    sortImagesBySortingPosition(chronologicalImages);
    imageCollections.chronologicalImages.set(chronologicalImages);
    chronologicalImages.forEach((image) => {
      years.push(image.cleanedUpDate);
    });
    resetData(chronologicalImages);
  });
};
const handleJSON = async (files) => {
  const text = await files[0].text();
  const jsonObj = JSON.parse(text);
  return jsonObj;
};
const extractImageItems = (jsonObj) => {
  const images = [];
  jsonObj.items.forEach((item) => {
    if (item.isBestOf == true) {
      const medium = removeBrackets(item.medium);
      const title = removeBrackets(item.metadata.title);
      const dimensions = formatDimensions(item.images.overall.images[0].sizes.medium.dimensions);
      const cleanedUpDate = cleanUpYear(item.sortingNumber);
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
        references: item.references
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
const sortImagesBySortingPosition = (images) => {
  images.sort((a, b) => {
    return a.sortingPosition.localeCompare(b.sortingPosition);
  });
};
const cleanUpYear = (itemDate) => {
  const itemYear = itemDate.split("-");
  return itemYear[0];
};
export { handleSubmit, sortImagesBySortingPosition, years };
