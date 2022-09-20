import { n as noop, a as safe_not_equal } from "../../chunks/index-23786d4b.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const imageBaseWidth = 20;
const imageBaseHeight = 40;
const textPlaneBaseHeight = 25;
const textPlaneBaseWidth = 100;
const chronologicalImages = writable([]);
const relatedImages = writable([]);
const imageCollections = {
  chronologicalImages,
  relatedImages
};
const materials = writable();
const yearGeometries = writable([]);
const allTextGeo = writable([]);
const defaultCameraPosition = [-5600, 50, 15];
const defaultImagePosition = [-5500, imageBaseHeight / 2 + textPlaneBaseHeight + 10, imageBaseWidth / 2];
const defaultTextPlanePosition = [-5500, textPlaneBaseHeight / 2 + 5, textPlaneBaseWidth / 2];
const defaultAllTextPosition = [defaultTextPlanePosition[0], defaultTextPlanePosition[1] + textPlaneBaseHeight / 2 - 3, defaultTextPlanePosition[2] - textPlaneBaseWidth / 2 + 1];
const imagePosition = writable([...defaultImagePosition]);
const yearPosition = writable([defaultImagePosition[0], defaultImagePosition[1], defaultImagePosition[2] - 100]);
const textPlanePosition = writable([...defaultTextPlanePosition]);
const allTextPosition = writable([...defaultAllTextPosition]);
export { allTextGeo, allTextPosition, defaultAllTextPosition, defaultCameraPosition, defaultImagePosition, defaultTextPlanePosition, imageBaseHeight, imageBaseWidth, imageCollections, imagePosition, materials, textPlaneBaseHeight, textPlaneBaseWidth, textPlanePosition, yearGeometries, yearPosition };
