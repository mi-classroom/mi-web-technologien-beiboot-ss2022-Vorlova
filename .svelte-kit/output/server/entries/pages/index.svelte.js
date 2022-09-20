import { g as getContext, s as setContext, o as onDestroy, c as create_ssr_component, b as add_attribute, d as createEventDispatcher, v as validate_component, e as escape, f as each } from "../../chunks/index-23786d4b.js";
import { years } from "../endpoints/file-actions.ts.js";
import { groundGeometry, groundMaterial, generateYearGeometry, generateAllText, calculatePosition, shiftYear, lineMaterial, textPlaneGeometry, imageGeometry, calculatePositionUp } from "../endpoints/scene-creation.ts.js";
import { imageCollections, allTextPosition, imagePosition, textPlanePosition, yearPosition, yearGeometries, defaultImagePosition, materials, defaultCameraPosition } from "../endpoints/stores.ts.js";
import * as THREE from "three";
import { PerspectiveCamera, Vector3, TextureLoader, Color, MeshBasicMaterial, BoxGeometry } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "three/examples/jsm/helpers/VertexNormalsHelper.js";
import { filterRelated } from "../endpoints/image-filters.ts.js";
import "three/examples/jsm/geometries/TextGeometry";
import "three/examples/jsm/loaders/FontLoader.js";
const ROOT = {};
const PARENT = {};
function setup(self) {
  const root = getContext(ROOT);
  const parent = getContext(PARENT) || root.scene;
  if (self) {
    setContext(PARENT, self);
    parent.add(self);
    onDestroy(() => {
      parent.remove(self);
      root.invalidate();
    });
  }
  return {
    root,
    parent,
    self
  };
}
function set_root(context) {
  setContext(ROOT, context);
  return context;
}
var Canvas_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1uqz219,canvas.svelte-1uqz219{position:absolute;width:100%;height:100%;left:0;top:0}")();
const css$1 = {
  code: ".container.svelte-1uqz219,canvas.svelte-1uqz219{position:absolute;width:100%;height:100%;left:0;top:0}",
  map: null
};
const Canvas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { background = null } = $$props;
  let { environment = null } = $$props;
  let { fog = null } = $$props;
  let { overrideMaterial = null } = $$props;
  let { precision = "highp" } = $$props;
  let { powerPreference = "default" } = $$props;
  let { alpha = false } = $$props;
  let { premultipliedAlpha = true } = $$props;
  let { antialias = false } = $$props;
  let { stencil = true } = $$props;
  let { preserveDrawingBuffer = false } = $$props;
  let { failIfMajorPerformanceCaveat = false } = $$props;
  let { depth = true } = $$props;
  let { logarithmicDepthBuffer = false } = $$props;
  let { autoClear = true } = $$props;
  let { autoClearColor = true } = $$props;
  let { autoClearDepth = true } = $$props;
  let { autoClearStencil = true } = $$props;
  let { checkShaderErrors = true } = $$props;
  let { gammaFactor = 2 } = $$props;
  let { localClippingEnabled = false } = $$props;
  let { physicallyCorrectLights = false } = $$props;
  let { outputEncoding = void 0 } = $$props;
  let { clippingPlanes = [] } = $$props;
  let { shadows = void 0 } = $$props;
  let { toneMapping = THREE.NoToneMapping } = $$props;
  let { toneMappingExposure = 1 } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { pixelRatio = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1 } = $$props;
  function info() {
    return root.renderer.info;
  }
  let _width;
  let _height;
  let container;
  let frame = null;
  const run = (fn) => fn();
  const invalidate = () => {
    if (frame)
      return;
    frame = requestAnimationFrame(() => {
      frame = null;
      before_render.forEach(run);
      root.renderer.render(root.scene, root.camera.object);
    });
  };
  const before_render = [];
  const root = set_root({
    canvas: null,
    scene: null,
    renderer: null,
    camera: {
      object: null,
      callback: () => {
        console.warn("no camera is set");
      },
      set: (camera, callback) => {
        root.camera.object = camera;
        root.camera.callback = callback;
        if (root.controls.callback) {
          root.controls.callback(root.camera.object, root.canvas);
        }
        invalidate();
      }
    },
    controls: {
      object: null,
      callback: null,
      set: (callback) => {
        root.controls.callback = callback;
        if (root.camera.object) {
          root.controls.object = callback(root.camera.object, root.canvas);
        }
      }
    },
    before_render(fn) {
      before_render.push(fn);
      onDestroy(() => {
        const i = before_render.indexOf(fn);
        before_render.splice(i, 1);
      });
    },
    invalidate
  });
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.environment === void 0 && $$bindings.environment && environment !== void 0)
    $$bindings.environment(environment);
  if ($$props.fog === void 0 && $$bindings.fog && fog !== void 0)
    $$bindings.fog(fog);
  if ($$props.overrideMaterial === void 0 && $$bindings.overrideMaterial && overrideMaterial !== void 0)
    $$bindings.overrideMaterial(overrideMaterial);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.powerPreference === void 0 && $$bindings.powerPreference && powerPreference !== void 0)
    $$bindings.powerPreference(powerPreference);
  if ($$props.alpha === void 0 && $$bindings.alpha && alpha !== void 0)
    $$bindings.alpha(alpha);
  if ($$props.premultipliedAlpha === void 0 && $$bindings.premultipliedAlpha && premultipliedAlpha !== void 0)
    $$bindings.premultipliedAlpha(premultipliedAlpha);
  if ($$props.antialias === void 0 && $$bindings.antialias && antialias !== void 0)
    $$bindings.antialias(antialias);
  if ($$props.stencil === void 0 && $$bindings.stencil && stencil !== void 0)
    $$bindings.stencil(stencil);
  if ($$props.preserveDrawingBuffer === void 0 && $$bindings.preserveDrawingBuffer && preserveDrawingBuffer !== void 0)
    $$bindings.preserveDrawingBuffer(preserveDrawingBuffer);
  if ($$props.failIfMajorPerformanceCaveat === void 0 && $$bindings.failIfMajorPerformanceCaveat && failIfMajorPerformanceCaveat !== void 0)
    $$bindings.failIfMajorPerformanceCaveat(failIfMajorPerformanceCaveat);
  if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
    $$bindings.depth(depth);
  if ($$props.logarithmicDepthBuffer === void 0 && $$bindings.logarithmicDepthBuffer && logarithmicDepthBuffer !== void 0)
    $$bindings.logarithmicDepthBuffer(logarithmicDepthBuffer);
  if ($$props.autoClear === void 0 && $$bindings.autoClear && autoClear !== void 0)
    $$bindings.autoClear(autoClear);
  if ($$props.autoClearColor === void 0 && $$bindings.autoClearColor && autoClearColor !== void 0)
    $$bindings.autoClearColor(autoClearColor);
  if ($$props.autoClearDepth === void 0 && $$bindings.autoClearDepth && autoClearDepth !== void 0)
    $$bindings.autoClearDepth(autoClearDepth);
  if ($$props.autoClearStencil === void 0 && $$bindings.autoClearStencil && autoClearStencil !== void 0)
    $$bindings.autoClearStencil(autoClearStencil);
  if ($$props.checkShaderErrors === void 0 && $$bindings.checkShaderErrors && checkShaderErrors !== void 0)
    $$bindings.checkShaderErrors(checkShaderErrors);
  if ($$props.gammaFactor === void 0 && $$bindings.gammaFactor && gammaFactor !== void 0)
    $$bindings.gammaFactor(gammaFactor);
  if ($$props.localClippingEnabled === void 0 && $$bindings.localClippingEnabled && localClippingEnabled !== void 0)
    $$bindings.localClippingEnabled(localClippingEnabled);
  if ($$props.physicallyCorrectLights === void 0 && $$bindings.physicallyCorrectLights && physicallyCorrectLights !== void 0)
    $$bindings.physicallyCorrectLights(physicallyCorrectLights);
  if ($$props.outputEncoding === void 0 && $$bindings.outputEncoding && outputEncoding !== void 0)
    $$bindings.outputEncoding(outputEncoding);
  if ($$props.clippingPlanes === void 0 && $$bindings.clippingPlanes && clippingPlanes !== void 0)
    $$bindings.clippingPlanes(clippingPlanes);
  if ($$props.shadows === void 0 && $$bindings.shadows && shadows !== void 0)
    $$bindings.shadows(shadows);
  if ($$props.toneMapping === void 0 && $$bindings.toneMapping && toneMapping !== void 0)
    $$bindings.toneMapping(toneMapping);
  if ($$props.toneMappingExposure === void 0 && $$bindings.toneMappingExposure && toneMappingExposure !== void 0)
    $$bindings.toneMappingExposure(toneMappingExposure);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.pixelRatio === void 0 && $$bindings.pixelRatio && pixelRatio !== void 0)
    $$bindings.pixelRatio(pixelRatio);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css$1);
  {
    if (root.scene) {
      root.scene.background = background;
      root.scene.environment = environment;
      root.scene.fog = fog;
      root.scene.overrideMaterial = overrideMaterial;
    }
  }
  {
    if (root.renderer) {
      root.renderer.autoClear = autoClear;
      root.renderer.autoClearColor = autoClearColor;
      root.renderer.autoClearDepth = autoClearDepth;
      root.renderer.autoClearStencil = autoClearStencil;
      root.renderer.debug.checkShaderErrors = checkShaderErrors;
      root.renderer.gammaFactor = gammaFactor;
      root.renderer.localClippingEnabled = localClippingEnabled;
      root.renderer.physicallyCorrectLights = physicallyCorrectLights;
      if (outputEncoding != null)
        root.renderer.outputEncoding = outputEncoding;
      root.renderer.clippingPlanes = clippingPlanes;
      root.renderer.toneMapping = toneMapping;
      root.renderer.toneMappingExposure = toneMappingExposure;
      if (shadows) {
        root.renderer.shadowMap.enabled = true;
        root.renderer.shadowMap.autoUpdate = true;
        root.renderer.shadowMap.type = shadows === true ? THREE.PCFShadowMap : shadows;
      } else {
        root.renderer.shadowMap.enabled = false;
      }
      invalidate();
    }
  }
  {
    if (root.renderer) {
      const w = width !== void 0 ? width : _width;
      const h = height !== void 0 ? height : _height;
      root.renderer.setSize(w, h, false);
      root.camera.callback(w, h);
      root.renderer.setPixelRatio(pixelRatio);
      invalidate();
    }
  }
  return `

<div class="${"container svelte-1uqz219"}"${add_attribute("this", container, 0)}><canvas class="${"svelte-1uqz219"}"${add_attribute("this", root.canvas, 0)}></canvas>

	${root.scene ? `${slots.default ? slots.default({}) : ``}` : ``}
</div>`;
});
function transform(object, position2, rotation2, scale2) {
  object.position.set(position2[0], position2[1], position2[2]);
  object.rotation.set(rotation2[0], rotation2[1], rotation2[2], rotation2[3]);
  if (typeof scale2 === "number") {
    object.scale.set(scale2, scale2, scale2);
  } else {
    object.scale.set(scale2[0], scale2[1], scale2[2]);
  }
}
let position = [0, 0, 0];
let rotation = [0, 0, 0];
let scale = [1, 1, 1];
let geometry = new THREE.BufferGeometry();
let material = new THREE.MeshNormalMaterial();
const Mesh = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { geometry: geometry$1 = geometry } = $$props;
  let { material: material$1 = material } = $$props;
  let { position: position$1 = position } = $$props;
  let { rotation: rotation$1 = rotation } = $$props;
  let { scale: scale$1 = scale } = $$props;
  let { castShadow = false } = $$props;
  let { receiveShadow = false } = $$props;
  let { frustumCulled = true } = $$props;
  let { renderOrder = 0 } = $$props;
  const { root, self } = setup(new THREE.Mesh(geometry$1, material$1));
  if ($$props.geometry === void 0 && $$bindings.geometry && geometry$1 !== void 0)
    $$bindings.geometry(geometry$1);
  if ($$props.material === void 0 && $$bindings.material && material$1 !== void 0)
    $$bindings.material(material$1);
  if ($$props.position === void 0 && $$bindings.position && position$1 !== void 0)
    $$bindings.position(position$1);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation$1 !== void 0)
    $$bindings.rotation(rotation$1);
  if ($$props.scale === void 0 && $$bindings.scale && scale$1 !== void 0)
    $$bindings.scale(scale$1);
  if ($$props.castShadow === void 0 && $$bindings.castShadow && castShadow !== void 0)
    $$bindings.castShadow(castShadow);
  if ($$props.receiveShadow === void 0 && $$bindings.receiveShadow && receiveShadow !== void 0)
    $$bindings.receiveShadow(receiveShadow);
  if ($$props.frustumCulled === void 0 && $$bindings.frustumCulled && frustumCulled !== void 0)
    $$bindings.frustumCulled(frustumCulled);
  if ($$props.renderOrder === void 0 && $$bindings.renderOrder && renderOrder !== void 0)
    $$bindings.renderOrder(renderOrder);
  {
    {
      if (self.geometry && geometry$1 !== self.geometry) {
        self.geometry.dispose();
      }
      self.geometry = geometry$1;
      self.material = material$1;
      self.castShadow = castShadow;
      self.receiveShadow = receiveShadow;
      self.frustumCulled = frustumCulled;
      self.renderOrder = renderOrder;
      transform(self, position$1, rotation$1, scale$1);
      root.invalidate();
    }
  }
  return `${slots.default ? slots.default({}) : ``}`;
});
const PerspectiveCamera_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fov = 45 } = $$props;
  let { near = 0.1 } = $$props;
  let { far = 2e3 } = $$props;
  let { zoom = 1 } = $$props;
  let { viewOffset = void 0 } = $$props;
  let { position: position2 = [0, 0, 5] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  const { root, self } = setup(new PerspectiveCamera());
  const target_vector = new Vector3();
  root.camera.set(self, (w, h) => {
    self.aspect = w / h;
    self.updateProjectionMatrix();
  });
  if ($$props.fov === void 0 && $$bindings.fov && fov !== void 0)
    $$bindings.fov(fov);
  if ($$props.near === void 0 && $$bindings.near && near !== void 0)
    $$bindings.near(near);
  if ($$props.far === void 0 && $$bindings.far && far !== void 0)
    $$bindings.far(far);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.viewOffset === void 0 && $$bindings.viewOffset && viewOffset !== void 0)
    $$bindings.viewOffset(viewOffset);
  if ($$props.position === void 0 && $$bindings.position && position2 !== void 0)
    $$bindings.position(position2);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  {
    {
      self.fov = fov;
      self.near = near;
      self.far = far;
      self.zoom = zoom;
      if (viewOffset) {
        self.setViewOffset(viewOffset.fullWidth, viewOffset.fullHeight, viewOffset.x, viewOffset.y, viewOffset.width, viewOffset.height);
      }
      self.position.set(position2[0], position2[1], position2[2]);
      target_vector.set(target[0], target[1], target[2]);
      self.lookAt(target_vector);
      self.updateProjectionMatrix();
      root.invalidate();
    }
  }
  return ``;
});
const OrbitControls_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { autoRotate = false } = $$props;
  let { autoRotateSpeed = 2 } = $$props;
  let { dampingFactor = 0.05 } = $$props;
  let { enableDamping = false } = $$props;
  let { enabled = true } = $$props;
  let { enablePan = true } = $$props;
  let { enableRotate = true } = $$props;
  let { enableZoom = true } = $$props;
  let { keyPanSpeed = 7 } = $$props;
  let { keys = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    BOTTOM: "ArrowDown"
  } } = $$props;
  let { maxAzimuthAngle = Infinity } = $$props;
  let { maxDistance = Infinity } = $$props;
  let { maxPolarAngle = Math.PI } = $$props;
  let { maxZoom = Infinity } = $$props;
  let { minAzimuthAngle = Infinity } = $$props;
  let { minDistance = 0 } = $$props;
  let { minPolarAngle = 0 } = $$props;
  let { minZoom = 0 } = $$props;
  let { mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  } } = $$props;
  let { panSpeed = 1 } = $$props;
  let { rotateSpeed = 1 } = $$props;
  let { screenSpacePanning = true } = $$props;
  let { touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  } } = $$props;
  let { zoomSpeed = 1 } = $$props;
  let { target = [0, 0, 0] } = $$props;
  const { root } = setup();
  const dispatch = createEventDispatcher();
  let controls;
  root.controls.set((camera, canvas) => {
    controls = new OrbitControls(camera, canvas);
    controls.addEventListener("start", (e) => {
      dispatch("start", e);
    });
    controls.addEventListener("end", (e) => {
      dispatch("end", e);
    });
    controls.addEventListener("change", (e) => {
      dispatch("change", e);
      if (!target || controls.target.x !== target[0] || controls.target.y !== target[1] || controls.target.z !== target[2]) {
        target = [controls.target.x, controls.target.y, controls.target.z];
      }
      root.invalidate();
    });
    return controls;
  });
  if ($$props.autoRotate === void 0 && $$bindings.autoRotate && autoRotate !== void 0)
    $$bindings.autoRotate(autoRotate);
  if ($$props.autoRotateSpeed === void 0 && $$bindings.autoRotateSpeed && autoRotateSpeed !== void 0)
    $$bindings.autoRotateSpeed(autoRotateSpeed);
  if ($$props.dampingFactor === void 0 && $$bindings.dampingFactor && dampingFactor !== void 0)
    $$bindings.dampingFactor(dampingFactor);
  if ($$props.enableDamping === void 0 && $$bindings.enableDamping && enableDamping !== void 0)
    $$bindings.enableDamping(enableDamping);
  if ($$props.enabled === void 0 && $$bindings.enabled && enabled !== void 0)
    $$bindings.enabled(enabled);
  if ($$props.enablePan === void 0 && $$bindings.enablePan && enablePan !== void 0)
    $$bindings.enablePan(enablePan);
  if ($$props.enableRotate === void 0 && $$bindings.enableRotate && enableRotate !== void 0)
    $$bindings.enableRotate(enableRotate);
  if ($$props.enableZoom === void 0 && $$bindings.enableZoom && enableZoom !== void 0)
    $$bindings.enableZoom(enableZoom);
  if ($$props.keyPanSpeed === void 0 && $$bindings.keyPanSpeed && keyPanSpeed !== void 0)
    $$bindings.keyPanSpeed(keyPanSpeed);
  if ($$props.keys === void 0 && $$bindings.keys && keys !== void 0)
    $$bindings.keys(keys);
  if ($$props.maxAzimuthAngle === void 0 && $$bindings.maxAzimuthAngle && maxAzimuthAngle !== void 0)
    $$bindings.maxAzimuthAngle(maxAzimuthAngle);
  if ($$props.maxDistance === void 0 && $$bindings.maxDistance && maxDistance !== void 0)
    $$bindings.maxDistance(maxDistance);
  if ($$props.maxPolarAngle === void 0 && $$bindings.maxPolarAngle && maxPolarAngle !== void 0)
    $$bindings.maxPolarAngle(maxPolarAngle);
  if ($$props.maxZoom === void 0 && $$bindings.maxZoom && maxZoom !== void 0)
    $$bindings.maxZoom(maxZoom);
  if ($$props.minAzimuthAngle === void 0 && $$bindings.minAzimuthAngle && minAzimuthAngle !== void 0)
    $$bindings.minAzimuthAngle(minAzimuthAngle);
  if ($$props.minDistance === void 0 && $$bindings.minDistance && minDistance !== void 0)
    $$bindings.minDistance(minDistance);
  if ($$props.minPolarAngle === void 0 && $$bindings.minPolarAngle && minPolarAngle !== void 0)
    $$bindings.minPolarAngle(minPolarAngle);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.mouseButtons === void 0 && $$bindings.mouseButtons && mouseButtons !== void 0)
    $$bindings.mouseButtons(mouseButtons);
  if ($$props.panSpeed === void 0 && $$bindings.panSpeed && panSpeed !== void 0)
    $$bindings.panSpeed(panSpeed);
  if ($$props.rotateSpeed === void 0 && $$bindings.rotateSpeed && rotateSpeed !== void 0)
    $$bindings.rotateSpeed(rotateSpeed);
  if ($$props.screenSpacePanning === void 0 && $$bindings.screenSpacePanning && screenSpacePanning !== void 0)
    $$bindings.screenSpacePanning(screenSpacePanning);
  if ($$props.touches === void 0 && $$bindings.touches && touches !== void 0)
    $$bindings.touches(touches);
  if ($$props.zoomSpeed === void 0 && $$bindings.zoomSpeed && zoomSpeed !== void 0)
    $$bindings.zoomSpeed(zoomSpeed);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  {
    if (controls) {
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = autoRotateSpeed;
      controls.dampingFactor = dampingFactor;
      controls.enableDamping = enableDamping;
      controls.enabled = enabled;
      controls.enablePan = enablePan;
      controls.enableRotate = enableRotate;
      controls.enableZoom = enableZoom;
      controls.keyPanSpeed = keyPanSpeed;
      controls.keys = keys;
      controls.maxAzimuthAngle = maxAzimuthAngle;
      controls.maxDistance = maxDistance;
      controls.maxPolarAngle = maxPolarAngle;
      controls.maxZoom = maxZoom;
      controls.minAzimuthAngle = minAzimuthAngle;
      controls.minDistance = minDistance;
      controls.minPolarAngle = minPolarAngle;
      controls.minZoom = minZoom;
      controls.mouseButtons = mouseButtons;
      controls.panSpeed = panSpeed;
      controls.rotateSpeed = rotateSpeed;
      controls.screenSpacePanning = screenSpacePanning;
      controls.touches = touches;
      controls.zoomSpeed = zoomSpeed;
      controls.update();
    }
  }
  {
    if (target && (controls.target.x !== target[0] || controls.target.y !== target[1] || controls.target.z !== target[2])) {
      controls.target.set(target[0], target[1], target[2]);
      controls.update();
    }
  }
  return ``;
});
const AmbientLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  const { root, self } = setup(new THREE.AmbientLight(color, intensity));
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  {
    {
      self.color.set(color);
      self.intensity = intensity;
      root.invalidate();
    }
  }
  return ``;
});
const DirectionalLight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = 16777215 } = $$props;
  let { intensity = 1 } = $$props;
  let { position: position2 = [0, 1, 0] } = $$props;
  let { target = [0, 0, 0] } = $$props;
  let { shadow = null } = $$props;
  const { root, self } = setup(new THREE.DirectionalLight());
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.intensity === void 0 && $$bindings.intensity && intensity !== void 0)
    $$bindings.intensity(intensity);
  if ($$props.position === void 0 && $$bindings.position && position2 !== void 0)
    $$bindings.position(position2);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  {
    {
      self.color.set(color);
      self.intensity = intensity;
      self.position.set(position2[0], position2[1], position2[2]);
      self.target.position.set(target[0], target[1], target[2]);
      root.invalidate();
    }
  }
  {
    {
      if (shadow) {
        const { mapSize = [512, 512], camera: { left = -5, bottom = -5, right = 5, top = 5, near = 0.5, far = 500 } = {}, bias = 0, radius = 1 } = shadow === true ? {} : shadow;
        self.shadow.mapSize.set(mapSize[0], mapSize[1]);
        self.shadow.camera.left = left;
        self.shadow.camera.top = top;
        self.shadow.camera.right = right;
        self.shadow.camera.bottom = bottom;
        self.shadow.camera.near = near;
        self.shadow.camera.far = far;
        self.shadow.bias = bias;
        self.shadow.radius = radius;
        self.castShadow = true;
      } else {
        self.castShadow = false;
      }
      root.invalidate();
    }
  }
  return ``;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".gallery.svelte-1mxod5q{width:99%;height:85%;position:absolute}")();
const css = {
  code: ".gallery.svelte-1mxod5q{width:99%;height:85%;position:absolute}",
  map: null
};
const basicDepth = 1;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allTextPositionList = [];
  let allTextPosition$1;
  let imagePositionList = [];
  let imagePosition$1;
  let relatedImagePosition;
  let textPlanePositionList = [];
  let textPlanePosition$1;
  let yearPositionList = [];
  let yearPosition$1;
  let materialsListChronological = [];
  let materialsListRelated = [];
  let yearGeometries$1 = [];
  let chronologicalImages = [];
  let allTextGeo;
  let cameraPosition = defaultCameraPosition;
  let relatedImages;
  imageCollections.chronologicalImages.subscribe((value) => {
    chronologicalImages = value;
  });
  allTextPosition.subscribe((value) => {
    allTextPosition$1 = value;
  });
  imagePosition.subscribe((value) => {
    imagePosition$1 = value;
  });
  textPlanePosition.subscribe((value) => {
    textPlanePosition$1 = value;
  });
  yearPosition.subscribe((value) => {
    yearPosition$1 = value;
  });
  yearGeometries.subscribe((value) => {
    yearGeometries$1 = value;
  });
  const loader = new TextureLoader();
  const loadImageTextures = (images) => {
    const imageMaterials = [];
    images.forEach((image) => {
      const url = image.src;
      const newUrl = url.replace("imageserver-2022", "data-proxy/image.php?subpath=");
      imageMaterials.push([
        new MeshBasicMaterial({ color: 0 }),
        new MeshBasicMaterial({ color: 0 }),
        new MeshBasicMaterial({ color: 0 }),
        new MeshBasicMaterial({ color: 0 }),
        new MeshBasicMaterial({ color: 0 }),
        new MeshBasicMaterial({ map: loader.load(newUrl) })
      ]);
    });
    return imageMaterials;
  };
  $$result.css.add(css);
  return `<form>
	<label for="${"source-file"}">Upload a JSON source for the images:</label>
	<input accept="${"application/JSON"}" id="${"source-file"}" name="${"source-file"}" type="${"file"}">
	<button type="${"submit"}">Use this file</button></form>

<h1>Gallery:</h1>
<div><button type="${"button"}">Reset Camera to Start</button></div>

<div class="${"gallery svelte-1mxod5q"}">${validate_component(Canvas, "SC.Canvas").$$render($$result, {
    antialias: true,
    background: new Color(180, 180, 180),
    shadows: true
  }, {}, {
    default: () => {
      return `${validate_component(PerspectiveCamera_1, "SC.PerspectiveCamera").$$render($$result, {
        position: cameraPosition,
        target: defaultImagePosition
      }, {}, {})}
		${validate_component(OrbitControls_1, "SC.OrbitControls").$$render($$result, {
        enableZoom: true,
        enableRotate: true,
        maxPolarAngle: Math.PI * 0.51
      }, {}, {})}
		${validate_component(AmbientLight, "SC.AmbientLight").$$render($$result, { intensity: 1 }, {}, {})}
		${validate_component(DirectionalLight, "SC.DirectionalLight").$$render($$result, {
        intensity: 0.6,
        position: [-2, 3, 2],
        shadow: { mapSize: [2048, 2048] }
      }, {}, {})}

		${validate_component(Mesh, "SC.Mesh").$$render($$result, {
        geometry: groundGeometry,
        material: groundMaterial,
        position: [0, 0, 500],
        receiveShadow: true
      }, {}, {})}

		${escape(materialsListChronological = loadImageTextures(chronologicalImages))}
		${escape(materials.set([...materialsListChronological]))}

		${each(chronologicalImages, (item, index) => {
        return `${escape(console.log("Loading " + index + "of " + chronologicalImages.length))}

			${escape(relatedImages = filterRelated(item, chronologicalImages))}
			${escape(materialsListRelated = loadImageTextures(relatedImages))}

			
			${escape(yearGeometries$1.push(generateYearGeometry(years[index])))}

			
			${escape(allTextGeo = generateAllText(item))}
			${escape(allTextPositionList.push(allTextPosition$1))}
			${escape(textPlanePositionList.push(textPlanePosition$1))}
			${escape(imagePositionList.push(imagePosition$1))}
			${escape(yearPositionList.push(yearPosition$1))}
			
			
			${years.length === 1 || years[index - 1] != years[index] ? `${escape(calculatePosition("back", chronologicalImages, item, index))}
				${escape(shiftYear())}` : `${escape(calculatePosition("side", chronologicalImages, item, index))}`}

			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: yearGeometries$1[index],
          material: lineMaterial,
          position: yearPositionList[index],
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}

			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: textPlaneGeometry,
          material: new MeshBasicMaterial({ color: 16777215 }),
          position: textPlanePositionList[index],
          rotation: [0, Math.PI / 2, 0],
          castShadow: true
        }, {}, {})}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: allTextGeo,
          material: lineMaterial,
          position: allTextPositionList[index],
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}

			
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: item.dimensions ? new BoxGeometry(item.dimensions.width, item.dimensions.height, basicDepth) : imageGeometry,
          material: materialsListChronological[index],
          position: imagePositionList[index],
          rotation: [0, Math.PI / 2, 0],
          castShadow: true
        }, {}, {})}

			
			${relatedImages && relatedImages.length > 0 ? `${escape(relatedImagePosition = [...imagePositionList[index]])}
				${each(relatedImages, (relatedItem, rIndex) => {
          return `${escape(relatedImagePosition = calculatePositionUp(relatedImagePosition, item, relatedImages, relatedItem, rIndex))}
					${validate_component(Mesh, "SC.Mesh").$$render($$result, {
            geometry: relatedItem.dimensions ? new BoxGeometry(relatedItem.dimensions.width / 2, relatedItem.dimensions.height / 2, basicDepth) : imageGeometry,
            material: materialsListRelated[rIndex],
            position: [...relatedImagePosition],
            rotation: [0, Math.PI / 2, 0]
          }, {}, {})}`;
        })}` : ``}`;
      })}`;
    }
  })}
</div>`;
});
export { Routes as default };
