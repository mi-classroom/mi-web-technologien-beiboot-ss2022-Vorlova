import { g as getContext, s as setContext, o as onDestroy, c as create_ssr_component, a as add_attribute, b as createEventDispatcher, v as validate_component, d as each, e as escape } from "../../chunks/index-c9d940db.js";
import { Font } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as THREE from "three";
import { PerspectiveCamera, Vector3, TextureLoader, LineBasicMaterial, MeshStandardMaterial, BoxGeometry, Color, MeshBasicMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "three/examples/jsm/helpers/VertexNormalsHelper.js";
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
const glyphs = {
  "0": {
    ha: 794,
    x_min: 70,
    x_max: 724,
    o: "m 724 497 q 705 281 724 376 q 648 121 687 186 q 546 21 608 55 q 396 -14 484 -14 q 213 47 286 -14 q 105 221 141 107 q 70 497 70 336 q 102 770 70 656 q 206 946 134 884 q 396 1007 278 1007 q 581 946 508 1007 q 688 771 653 886 q 724 497 724 657 m 183 497 q 204 267 183 359 q 272 129 225 174 q 396 83 319 83 q 520 128 473 83 q 588 266 567 174 q 610 497 610 358 q 589 725 610 633 q 521 864 568 817 q 396 910 474 910 q 271 864 318 910 q 204 725 224 817 q 183 497 183 633 z "
  },
  "1": {
    ha: 794,
    x_min: 125,
    x_max: 488,
    o: "m 488 0 l 378 0 l 378 703 q 378 771 378 743 q 379 824 378 800 q 382 873 380 848 q 343 837 361 852 q 298 799 325 821 l 184 708 l 125 785 l 394 991 l 488 991 l 488 0 z "
  },
  "2": {
    ha: 794,
    x_min: 68,
    x_max: 718,
    o: "m 718 0 l 68 0 l 68 94 l 334 363 q 458 496 408 438 q 535 611 509 555 q 562 736 562 668 q 512 864 562 820 q 380 909 462 909 q 254 884 309 909 q 142 815 199 860 l 81 891 q 167 950 121 924 q 267 991 214 976 q 380 1006 320 1006 q 538 974 472 1006 q 641 883 605 942 q 677 743 677 824 q 646 596 677 664 q 559 463 615 529 q 427 323 503 397 l 212 108 l 212 103 l 718 103 l 718 0 z "
  },
  "3": {
    ha: 794,
    x_min: 62,
    x_max: 712,
    o: "m 682 760 q 656 645 682 694 q 584 565 630 596 q 475 522 538 534 l 475 517 q 653 441 593 502 q 712 281 712 380 q 672 128 712 195 q 548 24 631 62 q 336 -14 465 -14 q 190 -1 257 -14 q 62 41 123 12 l 62 146 q 197 99 124 116 q 337 81 269 81 q 533 135 473 81 q 593 283 593 189 q 560 387 593 347 q 464 445 526 427 q 313 464 401 464 l 214 464 l 214 560 l 313 560 q 450 584 394 560 q 536 651 507 608 q 566 753 566 694 q 515 869 566 828 q 379 910 465 910 q 283 899 326 910 q 201 869 239 888 q 125 825 163 850 l 68 903 q 201 975 123 945 q 378 1006 279 1006 q 606 937 530 1006 q 682 760 682 867 z "
  },
  "4": {
    ha: 794,
    x_min: 30,
    x_max: 768,
    o: "m 768 230 l 619 230 l 619 0 l 509 0 l 509 230 l 30 230 l 30 325 l 502 997 l 619 997 l 619 332 l 768 332 l 768 230 m 509 332 l 509 656 q 510 723 509 693 q 512 780 511 753 q 514 829 513 806 q 516 876 515 853 l 511 876 q 481 819 498 849 q 448 765 465 789 l 142 332 l 509 332 z "
  },
  "5": {
    ha: 794,
    x_min: 90,
    x_max: 714,
    o: "m 382 606 q 557 572 483 606 q 673 473 632 538 q 714 315 714 408 q 670 139 714 213 q 543 26 626 66 q 345 -14 460 -14 q 201 0 268 -14 q 90 41 135 14 l 90 148 q 210 100 139 118 q 347 83 280 83 q 478 107 422 83 q 567 180 535 131 q 598 304 598 229 q 537 457 598 403 q 346 511 477 511 q 254 504 304 511 q 171 489 203 497 l 114 526 l 152 991 l 645 991 l 645 888 l 248 888 l 223 589 q 290 601 249 595 q 382 606 330 606 z "
  },
  "6": {
    ha: 794,
    x_min: 79,
    x_max: 727,
    o: "m 79 424 q 91 599 79 513 q 134 758 104 684 q 215 887 163 831 q 343 974 267 943 q 528 1006 420 1006 q 594 1003 559 1006 q 652 993 629 1000 l 652 896 q 595 909 627 905 q 530 913 563 913 q 332 858 404 913 q 228 709 260 803 q 191 498 196 615 l 199 498 q 252 559 220 532 q 331 603 285 587 q 439 619 378 619 q 591 584 526 619 q 691 481 656 549 q 727 319 727 414 q 689 142 727 216 q 581 27 651 67 q 414 -14 511 -14 q 280 14 341 -14 q 174 97 219 42 q 104 234 129 152 q 79 424 79 315 m 412 81 q 560 140 505 81 q 616 319 616 199 q 566 473 616 416 q 417 530 517 530 q 299 502 349 530 q 221 431 249 474 q 193 345 193 389 q 207 254 193 300 q 247 168 220 208 q 315 105 274 129 q 412 81 357 81 z "
  },
  "7": {
    ha: 794,
    x_min: 63,
    x_max: 724,
    o: "m 197 0 l 604 888 l 63 888 l 63 991 l 724 991 l 724 905 l 320 0 l 197 0 z "
  },
  "8": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 396 1006 q 549 979 482 1006 q 653 899 615 951 q 690 770 690 846 q 664 664 690 709 q 594 586 638 619 q 496 526 550 552 q 611 460 560 496 q 692 374 663 423 q 722 256 722 324 q 682 112 722 173 q 569 19 642 52 q 399 -14 496 -14 q 220 18 294 -14 q 108 109 146 50 q 70 252 70 168 q 99 371 70 320 q 176 458 128 421 q 281 519 224 494 q 191 581 232 547 q 126 662 150 616 q 102 770 102 709 q 140 898 102 846 q 245 978 178 951 q 396 1006 312 1006 m 180 251 q 234 126 180 175 q 396 77 288 77 q 555 126 499 77 q 612 255 612 175 q 586 342 612 304 q 513 410 560 380 q 401 464 465 439 l 376 473 q 270 415 314 447 q 203 344 227 384 q 180 251 180 304 m 395 913 q 264 875 315 913 q 213 765 213 837 q 238 678 213 713 q 305 617 262 642 q 401 570 348 591 q 492 617 452 591 q 555 680 532 644 q 578 766 578 715 q 528 876 578 838 q 395 913 477 913 z "
  },
  "9": {
    ha: 794,
    x_min: 70,
    x_max: 720,
    o: "m 720 569 q 707 393 720 479 q 664 234 694 308 q 583 104 634 160 q 453 17 531 49 q 268 -14 376 -14 q 201 -11 239 -14 q 140 0 164 -7 l 140 98 q 199 84 165 89 q 266 79 233 79 q 465 133 393 79 q 570 282 538 188 q 606 493 602 376 l 597 493 q 544 433 577 460 q 465 389 511 406 q 355 372 418 372 q 205 408 269 372 q 105 510 141 443 q 70 672 70 577 q 109 849 70 774 q 218 965 148 924 q 385 1006 289 1006 q 519 978 458 1006 q 625 895 580 950 q 695 758 670 840 q 720 569 720 677 m 385 910 q 238 851 294 910 q 182 673 182 792 q 231 518 182 575 q 379 461 279 461 q 499 489 448 461 q 577 559 549 517 q 604 647 604 602 q 591 738 604 692 q 551 823 578 784 q 482 886 524 862 q 385 910 441 910 z "
  },
  "\0": {
    ha: 0,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\r": {
    ha: 361,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  " ": {
    ha: 361,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "!": {
    ha: 367,
    x_min: 102,
    x_max: 263,
    o: "m 220 275 l 146 275 l 115 991 l 252 991 l 220 275 m 102 71 q 125 138 102 118 q 182 158 148 158 q 240 138 216 158 q 263 71 263 118 q 240 2 263 24 q 182 -19 216 -19 q 125 2 148 -19 q 102 71 102 24 z "
  },
  '"': {
    ha: 553,
    x_min: 92,
    x_max: 462,
    o: "m 214 991 l 188 633 l 117 633 l 92 991 l 214 991 m 462 991 l 437 633 l 366 633 l 340 991 l 462 991 z "
  },
  "#": {
    ha: 897,
    x_min: 35,
    x_max: 861,
    o: "m 665 610 l 621 379 l 812 379 l 812 293 l 604 293 l 546 0 l 454 0 l 512 293 l 305 293 l 250 0 l 159 0 l 213 293 l 35 293 l 35 379 l 230 379 l 275 610 l 87 610 l 87 694 l 291 694 l 347 991 l 440 991 l 384 694 l 592 694 l 648 991 l 738 991 l 682 694 l 861 694 l 861 610 l 665 610 m 321 379 l 528 379 l 573 610 l 366 610 l 321 379 z "
  },
  $: {
    ha: 794,
    x_min: 86,
    x_max: 710,
    o: "m 351 -81 l 351 62 q 202 75 273 63 q 87 107 132 87 l 87 217 q 207 179 134 195 q 351 161 280 163 l 351 460 q 203 517 262 485 q 115 596 144 549 q 86 709 86 643 q 119 828 86 779 q 212 905 152 877 q 351 937 271 932 l 351 1054 l 434 1054 l 434 938 q 566 922 507 936 q 677 886 626 908 l 642 792 q 542 823 595 810 q 434 841 488 836 l 434 545 q 586 488 525 518 q 679 414 648 458 q 710 300 710 370 q 637 141 710 201 q 434 67 565 80 l 434 -81 l 351 -81 m 434 168 q 558 208 517 176 q 600 293 600 240 q 584 355 600 331 q 532 398 568 380 q 434 432 496 416 l 434 168 m 351 573 l 351 838 q 266 819 300 835 q 214 779 231 804 q 197 719 197 753 q 212 652 197 679 q 261 607 227 625 q 351 573 296 588 z "
  },
  "%": {
    ha: 1148,
    x_min: 69,
    x_max: 1079,
    o: "m 271 1006 q 425 925 372 1006 q 477 696 477 844 q 427 466 477 548 q 271 383 376 383 q 121 466 173 383 q 69 696 69 548 q 119 925 69 844 q 271 1006 168 1006 m 271 925 q 190 868 216 925 q 164 696 164 810 q 190 523 164 581 q 271 465 216 465 q 355 523 328 465 q 383 696 383 581 q 356 867 383 810 q 271 925 328 925 m 899 991 l 349 0 l 250 0 l 800 991 l 899 991 m 872 608 q 1026 527 973 608 q 1079 298 1079 446 q 1028 69 1079 151 q 872 -14 977 -14 q 722 69 774 -14 q 671 298 671 151 q 720 527 671 446 q 872 608 769 608 m 872 527 q 791 470 817 527 q 766 298 766 413 q 791 126 766 184 q 872 68 817 68 q 957 125 929 68 q 985 298 985 182 q 957 470 985 412 q 872 527 930 527 z "
  },
  "&": {
    ha: 1012,
    x_min: 75,
    x_max: 1004,
    o: "m 422 1007 q 549 982 496 1007 q 631 909 602 956 q 660 794 660 861 q 603 645 660 706 q 457 534 545 584 l 732 267 q 793 367 770 310 q 833 492 817 425 l 947 492 q 891 327 926 402 q 806 195 857 252 l 1004 0 l 852 0 l 729 120 q 636 50 686 80 q 525 3 586 20 q 387 -14 465 -14 q 222 18 292 -14 q 114 109 152 49 q 75 257 75 170 q 102 380 75 329 q 177 472 128 432 q 294 550 226 512 q 233 622 262 585 q 187 700 205 658 q 170 791 170 741 q 200 907 170 859 q 288 981 231 956 q 422 1007 345 1007 m 361 479 q 271 418 309 448 q 213 351 233 389 q 193 261 193 314 q 247 134 193 182 q 390 86 300 86 q 547 117 482 86 q 657 191 612 147 l 361 479 m 418 914 q 318 882 357 914 q 280 792 280 850 q 308 697 280 741 q 387 601 336 654 q 510 691 472 648 q 549 794 549 735 q 513 881 549 848 q 418 914 477 914 z "
  },
  "'": {
    ha: 304,
    x_min: 92,
    x_max: 214,
    o: "m 214 991 l 188 633 l 117 633 l 92 991 l 214 991 z "
  },
  "(": {
    ha: 410,
    x_min: 56,
    x_max: 368,
    o: "m 56 380 q 78 604 56 495 q 145 810 100 712 q 260 991 191 909 l 368 991 q 220 705 269 863 q 170 382 170 548 q 192 168 170 273 q 258 -35 214 62 q 366 -220 302 -133 l 260 -220 q 145 -42 191 -138 q 78 161 100 54 q 56 380 56 268 z "
  },
  ")": {
    ha: 410,
    x_min: 42,
    x_max: 354,
    o: "m 354 382 q 332 161 354 269 q 265 -43 310 54 q 150 -220 220 -139 l 43 -220 q 152 -35 109 -134 q 218 169 196 63 q 240 382 240 274 q 218 600 240 493 q 152 806 195 707 q 42 991 108 905 l 150 991 q 265 810 220 908 q 332 604 310 712 q 354 382 354 496 z "
  },
  "*": {
    ha: 765,
    x_min: 60,
    x_max: 701,
    o: "m 441 1055 l 416 786 l 684 864 l 701 745 l 445 719 l 610 498 l 500 438 l 378 680 l 265 438 l 151 498 l 315 719 l 60 745 l 79 864 l 343 786 l 317 1055 l 441 1055 z "
  },
  "+": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 442 536 l 722 536 l 722 444 l 442 444 l 442 156 l 349 156 l 349 444 l 70 444 l 70 536 l 349 536 l 349 825 l 442 825 l 442 536 z "
  },
  ",": {
    ha: 359,
    x_min: 56,
    x_max: 256,
    o: "m 248 161 l 256 146 q 225 40 244 96 q 185 -73 207 -16 q 140 -179 163 -130 l 56 -179 q 84 -65 71 -125 q 109 54 98 -5 q 127 161 120 113 l 248 161 z "
  },
  "-": {
    ha: 447,
    x_min: 56,
    x_max: 392,
    o: "m 56 323 l 56 423 l 392 423 l 392 323 l 56 323 z "
  },
  ".": {
    ha: 365,
    x_min: 102,
    x_max: 263,
    o: "m 102 71 q 125 138 102 118 q 181 158 148 158 q 239 138 216 158 q 263 71 263 118 q 239 2 263 24 q 181 -19 216 -19 q 125 2 148 -19 q 102 71 102 24 z "
  },
  "/": {
    ha: 509,
    x_min: 14,
    x_max: 494,
    o: "m 494 991 l 125 0 l 14 0 l 384 991 l 494 991 z "
  },
  ":": {
    ha: 365,
    x_min: 102,
    x_max: 263,
    o: "m 102 71 q 125 138 102 118 q 181 158 148 158 q 239 138 216 158 q 263 71 263 118 q 239 2 263 24 q 181 -19 216 -19 q 125 2 148 -19 q 102 71 102 24 m 102 672 q 125 741 102 721 q 181 761 148 761 q 239 741 216 761 q 263 672 263 721 q 239 605 263 626 q 181 584 216 584 q 125 605 148 584 q 102 672 102 626 z "
  },
  ";": {
    ha: 365,
    x_min: 44,
    x_max: 260,
    o: "m 236 161 l 245 146 q 214 40 233 97 q 173 -73 195 -16 q 130 -179 151 -130 l 44 -179 q 72 -65 58 -125 q 97 54 85 -5 q 116 161 109 113 l 236 161 m 99 672 q 122 741 99 721 q 178 761 145 761 q 237 741 214 761 q 260 672 260 721 q 237 605 260 626 q 178 584 214 584 q 122 605 145 584 q 99 672 99 626 z "
  },
  "<": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 722 165 l 70 454 l 70 518 l 722 841 l 722 741 l 192 490 l 722 264 l 722 165 z "
  },
  "=": {
    ha: 794,
    x_min: 78,
    x_max: 714,
    o: "m 78 582 l 78 673 l 714 673 l 714 582 l 78 582 m 78 304 l 78 396 l 714 396 l 714 304 l 78 304 z "
  },
  ">": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 70 264 l 601 489 l 70 741 l 70 841 l 722 518 l 722 454 l 70 165 l 70 264 z "
  },
  "?": {
    ha: 600,
    x_min: 21,
    x_max: 562,
    o: "m 195 275 l 195 311 q 205 404 195 365 q 241 477 216 443 q 312 549 267 511 q 396 624 365 593 q 440 686 427 654 q 454 761 454 717 q 408 869 454 831 q 280 907 363 907 q 161 890 213 907 q 60 849 109 873 l 21 940 q 142 987 77 969 q 287 1006 207 1006 q 490 941 418 1006 q 562 763 562 876 q 541 655 562 700 q 484 574 521 611 q 395 496 446 537 q 327 429 351 458 q 294 370 303 400 q 286 298 286 340 l 286 275 l 195 275 m 165 71 q 188 138 165 118 q 245 158 210 158 q 302 138 279 158 q 326 71 326 118 q 302 2 326 24 q 245 -19 279 -19 q 188 2 210 -19 q 165 71 165 24 z "
  },
  "@": {
    ha: 1245,
    x_min: 80,
    x_max: 1166,
    o: "m 1166 495 q 1151 369 1166 431 q 1107 259 1137 308 q 1033 180 1077 210 q 928 151 988 151 q 827 188 865 151 q 783 275 790 224 l 777 275 q 701 186 751 221 q 578 151 651 151 q 415 221 473 151 q 358 408 358 292 q 394 569 358 499 q 497 680 431 640 q 653 720 563 720 q 770 710 713 720 q 861 688 827 700 l 848 414 q 846 376 847 389 q 846 355 846 363 q 872 257 846 282 q 935 231 898 231 q 1011 267 981 231 q 1059 362 1042 302 q 1075 496 1075 422 q 1023 717 1075 625 q 879 857 970 808 q 667 905 787 905 q 457 867 549 905 q 301 762 365 830 q 205 600 238 694 q 173 393 173 507 q 222 158 173 255 q 367 11 271 61 q 599 -40 462 -40 q 758 -22 682 -40 q 895 20 835 -3 l 895 -68 q 762 -110 836 -94 q 599 -125 688 -125 q 319 -64 435 -125 q 142 113 203 -3 q 80 389 80 228 q 120 630 80 520 q 237 821 161 740 q 422 946 313 901 q 667 990 531 990 q 925 930 813 990 q 1102 759 1038 870 q 1166 495 1166 648 m 459 406 q 495 273 459 315 q 595 231 531 231 q 710 290 673 231 q 753 446 747 349 l 761 623 q 713 634 741 629 q 654 638 685 638 q 542 605 585 638 q 479 519 498 572 q 459 406 459 466 z "
  },
  A: {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 z "
  },
  B: {
    ha: 897,
    x_min: 136,
    x_max: 822,
    o: "m 136 991 l 416 991 q 696 936 602 991 q 789 747 789 880 q 767 643 789 689 q 703 568 745 597 q 600 526 661 538 l 600 519 q 715 482 665 509 q 793 406 765 455 q 822 282 822 357 q 780 127 822 191 q 660 32 737 64 q 477 0 583 0 l 136 0 l 136 991 m 251 566 l 441 566 q 620 609 570 566 q 670 734 670 652 q 611 856 670 819 q 422 893 551 893 l 251 893 l 251 566 m 251 469 l 251 98 l 457 98 q 644 150 589 98 q 699 290 699 202 q 674 387 699 347 q 594 448 650 427 q 447 469 539 469 l 251 469 z "
  },
  C: {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 z "
  },
  D: {
    ha: 1008,
    x_min: 136,
    x_max: 923,
    o: "m 923 505 q 862 225 923 338 q 685 57 801 113 q 405 0 570 0 l 136 0 l 136 991 l 435 991 q 695 936 586 991 q 864 773 804 881 q 923 505 923 665 m 802 501 q 757 722 802 635 q 627 851 713 808 q 417 893 541 893 l 251 893 l 251 99 l 391 99 q 699 200 596 99 q 802 501 802 301 z "
  },
  E: {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 z "
  },
  F: {
    ha: 717,
    x_min: 136,
    x_max: 688,
    o: "m 251 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 526 l 661 526 l 661 425 l 251 425 l 251 0 z "
  },
  G: {
    ha: 1010,
    x_min: 85,
    x_max: 906,
    o: "m 559 519 l 906 519 l 906 39 q 746 -1 828 12 q 562 -14 663 -14 q 301 48 407 -14 q 140 224 195 110 q 85 496 85 338 q 145 764 85 650 q 321 942 206 879 q 597 1006 436 1006 q 754 990 680 1006 q 892 947 829 975 l 848 847 q 727 888 793 871 q 591 905 661 905 q 383 854 469 905 q 251 713 296 804 q 205 496 205 621 q 245 280 205 372 q 370 137 285 188 q 588 86 454 86 q 703 94 655 86 q 791 113 751 102 l 791 416 l 559 416 l 559 519 z "
  },
  H: {
    ha: 1024,
    x_min: 136,
    x_max: 887,
    o: "m 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 772 569 l 772 991 l 887 991 l 887 0 z "
  },
  I: {
    ha: 388,
    x_min: 136,
    x_max: 251,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 z "
  },
  J: {
    ha: 373,
    x_min: -111,
    x_max: 245,
    o: "m -7 -261 q -67 -256 -41 -261 q -111 -243 -93 -252 l -111 -145 q -64 -156 -90 -152 q -10 -159 -39 -159 q 60 -144 28 -159 q 111 -94 92 -130 q 130 5 130 -58 l 130 991 l 245 991 l 245 14 q 215 -140 245 -79 q 127 -231 184 -201 q -7 -261 71 -261 z "
  },
  K: {
    ha: 850,
    x_min: 136,
    x_max: 850,
    o: "m 850 0 l 714 0 l 357 482 l 251 387 l 251 0 l 136 0 l 136 991 l 251 991 l 251 497 q 330 585 290 541 q 411 673 371 629 l 701 991 l 836 991 l 441 562 l 850 0 z "
  },
  L: {
    ha: 725,
    x_min: 136,
    x_max: 691,
    o: "m 136 0 l 136 991 l 251 991 l 251 103 l 691 103 l 691 0 l 136 0 z "
  },
  M: {
    ha: 1249,
    x_min: 136,
    x_max: 1114,
    o: "m 572 0 l 239 878 l 233 878 q 238 810 236 850 q 241 723 240 770 q 243 627 243 675 l 243 0 l 136 0 l 136 991 l 307 991 l 621 167 l 625 167 l 944 991 l 1114 991 l 1114 0 l 1000 0 l 1000 635 q 1001 723 1000 679 q 1004 807 1002 768 q 1008 876 1006 847 l 1003 876 l 666 0 l 572 0 z "
  },
  N: {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 z "
  },
  O: {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  P: {
    ha: 836,
    x_min: 136,
    x_max: 764,
    o: "m 395 991 q 675 917 587 991 q 764 702 764 842 q 743 582 764 639 q 676 483 722 526 q 555 415 630 439 q 372 390 480 390 l 251 390 l 251 0 l 136 0 l 136 991 l 395 991 m 384 893 l 251 893 l 251 489 l 359 489 q 517 509 454 489 q 612 575 581 530 q 644 697 644 621 q 581 845 644 796 q 384 893 518 893 z "
  },
  Q: {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 962 276 996 375 q 864 109 929 177 q 701 9 798 40 l 934 -236 l 769 -236 l 577 -12 q 559 -13 568 -12 q 541 -14 550 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  R: {
    ha: 857,
    x_min: 136,
    x_max: 834,
    o: "m 404 991 q 605 961 526 991 q 724 869 685 931 q 764 712 764 808 q 735 581 764 633 q 661 496 707 528 q 562 446 614 463 l 834 0 l 700 0 l 457 414 l 251 414 l 251 0 l 136 0 l 136 991 l 404 991 m 397 892 l 251 892 l 251 511 l 408 511 q 587 561 530 511 q 644 707 644 610 q 584 850 644 808 q 397 892 523 892 z "
  },
  S: {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 z "
  },
  T: {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 z "
  },
  U: {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 z "
  },
  V: {
    ha: 828,
    x_min: 0,
    x_max: 828,
    o: "m 828 991 l 472 0 l 356 0 l 0 991 l 121 991 l 353 338 q 378 263 367 299 q 398 194 389 227 q 414 130 407 161 q 429 194 420 161 q 450 264 438 228 q 475 340 461 300 l 706 991 l 828 991 z "
  },
  W: {
    ha: 1282,
    x_min: 20,
    x_max: 1262,
    o: "m 1262 991 l 997 0 l 881 0 l 684 667 q 668 725 675 696 q 653 780 660 753 q 642 826 646 806 q 635 856 637 846 q 630 826 634 846 q 621 781 627 806 q 607 726 615 755 q 591 667 600 696 l 399 0 l 283 0 l 20 991 l 140 991 l 300 370 q 315 308 308 338 q 328 250 322 278 q 338 194 334 221 q 347 141 343 167 q 356 196 351 168 q 368 255 361 225 q 382 315 374 285 q 399 376 390 346 l 577 991 l 696 991 l 882 372 q 899 309 891 340 q 914 248 907 277 q 925 192 920 218 q 935 141 930 165 q 946 211 939 174 q 962 288 953 248 q 982 370 971 328 l 1141 991 l 1262 991 z "
  },
  X: {
    ha: 802,
    x_min: 4,
    x_max: 798,
    o: "m 798 0 l 667 0 l 399 437 l 127 0 l 4 0 l 334 517 l 27 991 l 155 991 l 403 596 l 652 991 l 774 991 l 467 519 l 798 0 z "
  },
  Y: {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 z "
  },
  Z: {
    ha: 795,
    x_min: 53,
    x_max: 741,
    o: "m 741 0 l 53 0 l 53 87 l 587 888 l 71 888 l 71 991 l 727 991 l 727 905 l 193 103 l 741 103 l 741 0 z "
  },
  "[": {
    ha: 454,
    x_min: 113,
    x_max: 420,
    o: "m 420 -220 l 113 -220 l 113 991 l 420 991 l 420 899 l 222 899 l 222 -126 l 420 -126 l 420 -220 z "
  },
  "\\": {
    ha: 509,
    x_min: 14,
    x_max: 496,
    o: "m 125 991 l 496 0 l 384 0 l 14 991 l 125 991 z "
  },
  "]": {
    ha: 454,
    x_min: 35,
    x_max: 342,
    o: "m 35 -126 l 232 -126 l 232 899 l 35 899 l 35 991 l 342 991 l 342 -220 l 35 -220 l 35 -126 z "
  },
  "^": {
    ha: 794,
    x_min: 54,
    x_max: 741,
    o: "m 54 372 l 352 999 l 417 999 l 741 372 l 640 372 l 386 878 l 155 372 l 54 372 z "
  },
  _: {
    ha: 608,
    x_min: -3,
    x_max: 611,
    o: "m 611 -208 l -3 -208 l -3 -125 l 611 -125 l 611 -208 z "
  },
  "`": {
    ha: 385,
    x_min: 56,
    x_max: 330,
    o: "m 190 1064 q 230 995 206 1033 q 281 920 254 956 q 330 858 308 884 l 330 842 l 254 842 q 200 888 229 861 q 143 946 172 916 q 92 1003 115 976 q 56 1050 68 1031 l 56 1064 l 190 1064 z "
  },
  a: {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 z "
  },
  b: {
    ha: 850,
    x_min: 119,
    x_max: 772,
    o: "m 231 1055 l 231 791 q 229 703 231 746 q 225 637 227 661 l 231 637 q 319 722 262 687 q 467 756 377 756 q 689 660 606 756 q 772 372 772 563 q 734 161 772 247 q 627 31 696 75 q 464 -14 558 -14 q 319 19 376 -14 q 232 100 262 52 l 223 100 l 200 0 l 119 0 l 119 1055 l 231 1055 m 448 662 q 320 630 368 662 q 252 535 273 599 q 231 375 231 472 l 231 369 q 278 154 231 229 q 448 80 325 80 q 604 156 552 80 q 656 373 656 232 q 605 589 656 517 q 448 662 553 662 z "
  },
  c: {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 z "
  },
  d: {
    ha: 850,
    x_min: 77,
    x_max: 730,
    o: "m 383 -14 q 160 83 242 -14 q 77 369 77 179 q 161 659 77 561 q 385 757 245 757 q 488 741 444 757 q 564 700 532 726 q 618 640 596 673 l 626 640 q 621 698 623 661 q 618 758 618 734 l 618 1055 l 730 1055 l 730 0 l 640 0 l 623 106 l 618 106 q 565 45 597 73 q 488 2 532 18 q 383 -14 444 -14 m 401 80 q 570 148 520 80 q 619 349 619 216 l 619 370 q 572 587 619 511 q 401 663 525 663 q 245 584 297 663 q 194 366 194 504 q 245 155 194 229 q 401 80 296 80 z "
  },
  e: {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 z "
  },
  f: {
    ha: 467,
    x_min: 20,
    x_max: 530,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 z "
  },
  g: {
    ha: 754,
    x_min: 21,
    x_max: 726,
    o: "m 326 -334 q 100 -279 180 -334 q 21 -126 21 -224 q 65 -7 21 -56 q 189 59 110 43 q 139 100 159 73 q 118 162 118 127 q 141 234 118 203 q 210 293 163 264 q 116 373 152 317 q 79 505 79 430 q 113 642 79 585 q 209 728 146 699 q 361 758 272 758 q 401 756 381 758 q 439 752 421 755 q 471 745 458 749 l 726 745 l 726 672 l 589 655 q 623 591 610 629 q 637 509 637 554 q 562 332 637 397 q 355 267 486 267 q 291 272 323 267 q 240 231 258 254 q 223 180 223 209 q 236 145 223 158 q 275 126 250 132 q 335 121 300 121 l 466 121 q 652 70 587 121 q 717 -79 717 19 q 616 -268 717 -202 q 326 -334 516 -334 m 330 -245 q 483 -227 422 -245 q 573 -173 543 -208 q 604 -90 604 -138 q 583 -23 604 -45 q 524 8 563 0 q 427 16 484 16 l 298 16 q 211 0 248 16 q 154 -46 174 -16 q 134 -122 134 -77 q 184 -214 134 -182 q 330 -245 235 -245 m 359 349 q 480 389 439 349 q 521 508 521 430 q 479 633 521 591 q 357 675 438 675 q 238 632 280 675 q 197 506 197 589 q 239 389 197 430 q 359 349 281 349 z "
  },
  h: {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 231 1055 l 231 740 q 230 685 231 713 q 225 635 229 658 l 233 635 q 291 701 256 674 q 372 742 327 728 q 469 755 418 755 q 618 727 558 755 q 708 639 678 699 q 739 484 739 579 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 323 630 372 662 q 253 538 274 599 q 231 389 231 477 l 231 0 l 119 0 l 119 1055 l 231 1055 z "
  },
  i: {
    ha: 351,
    x_min: 109,
    x_max: 244,
    o: "m 231 743 l 231 0 l 119 0 l 119 743 l 231 743 m 176 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 q 128 1003 109 985 q 176 1021 147 1021 z "
  },
  j: {
    ha: 351,
    x_min: -76,
    x_max: 244,
    o: "m 29 -334 q -31 -329 -5 -334 q -76 -317 -57 -323 l -76 -225 q -33 -236 -55 -232 q 16 -239 -12 -239 q 90 -214 62 -239 q 119 -120 119 -188 l 119 743 l 231 743 l 231 -117 q 210 -234 231 -185 q 143 -308 188 -282 q 29 -334 98 -334 m 109 947 q 128 1003 109 985 q 176 1021 147 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 z "
  },
  k: {
    ha: 730,
    x_min: 119,
    x_max: 719,
    o: "m 231 1055 l 231 507 q 229 441 231 480 q 225 372 227 402 l 230 372 q 272 425 244 390 q 318 480 299 459 l 565 743 l 697 743 l 398 426 l 719 0 l 583 0 l 321 352 l 231 269 l 231 0 l 119 0 l 119 1055 l 231 1055 z "
  },
  l: {
    ha: 351,
    x_min: 119,
    x_max: 232,
    o: "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 z "
  },
  m: {
    ha: 1286,
    x_min: 119,
    x_max: 1173,
    o: "m 926 757 q 1111 693 1048 757 q 1173 487 1173 629 l 1173 0 l 1062 0 l 1062 481 q 1023 617 1062 572 q 907 662 984 662 q 751 600 800 662 q 702 416 702 537 l 702 0 l 590 0 l 590 481 q 573 582 590 542 q 521 642 555 622 q 435 662 487 662 q 316 631 361 662 q 251 541 271 601 q 231 393 231 481 l 231 0 l 119 0 l 119 743 l 210 743 l 227 638 l 233 638 q 289 703 255 677 q 365 743 323 730 q 454 757 407 757 q 596 725 539 757 q 680 629 654 694 l 686 629 q 786 725 722 694 q 926 757 850 757 z "
  },
  n: {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 671 692 603 757 q 739 484 739 627 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 281 592 332 662 q 231 389 231 522 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 z "
  },
  o: {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 z "
  },
  p: {
    ha: 850,
    x_min: 119,
    x_max: 772,
    o: "m 468 757 q 690 661 607 757 q 772 374 772 566 q 734 161 772 247 q 628 31 696 75 q 465 -14 559 -14 q 361 2 406 -14 q 285 44 317 18 q 232 102 253 71 l 224 102 q 229 38 226 75 q 232 -27 232 1 l 232 -332 l 119 -332 l 119 743 l 212 743 l 227 633 l 232 633 q 285 695 254 667 q 361 740 316 724 q 468 757 406 757 m 448 662 q 324 632 371 662 q 255 543 277 602 q 232 394 233 484 l 232 372 q 253 213 232 278 q 321 114 273 148 q 450 80 369 80 q 565 117 519 80 q 634 221 611 155 q 656 375 656 288 q 605 584 656 507 q 448 662 554 662 z "
  },
  q: {
    ha: 850,
    x_min: 77,
    x_max: 730,
    o: "m 617 -332 l 617 -14 q 618 47 617 13 q 623 107 620 82 l 616 107 q 527 21 585 56 q 378 -14 469 -14 q 159 83 242 -14 q 77 370 77 179 q 115 582 77 496 q 222 712 153 668 q 385 757 292 757 q 530 722 473 757 q 618 637 586 687 l 623 637 l 640 743 l 730 743 l 730 -332 l 617 -332 m 399 80 q 526 110 478 80 q 595 199 573 139 q 618 347 617 258 l 618 371 q 570 589 618 515 q 399 663 521 663 q 244 584 295 663 q 193 368 193 504 q 244 156 193 231 q 399 80 295 80 z "
  },
  r: {
    ha: 568,
    x_min: 119,
    x_max: 547,
    o: "m 456 757 q 503 754 479 757 q 547 748 528 752 l 532 644 q 492 651 514 648 q 450 654 469 654 q 365 636 405 654 q 296 584 326 618 q 249 504 266 551 q 232 399 232 456 l 232 0 l 119 0 l 119 743 l 212 743 l 224 606 l 229 606 q 285 682 252 648 q 360 736 317 716 q 456 757 404 757 z "
  },
  s: {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 z "
  },
  t: {
    ha: 495,
    x_min: 22,
    x_max: 463,
    o: "m 359 79 q 416 83 387 79 q 463 95 445 88 l 463 7 q 409 -7 444 -1 q 340 -14 374 -14 q 233 7 281 -14 q 156 77 185 28 q 127 214 127 127 l 127 655 l 22 655 l 22 710 l 128 754 l 173 916 l 241 916 l 241 743 l 458 743 l 458 655 l 241 655 l 241 218 q 273 113 241 148 q 359 79 305 79 z "
  },
  u: {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 z "
  },
  v: {
    ha: 694,
    x_min: 0,
    x_max: 694,
    o: "m 282 0 l 0 743 l 121 743 l 284 294 q 319 192 301 248 q 343 102 336 136 l 348 102 q 375 192 356 136 q 410 294 394 248 l 573 743 l 694 743 l 411 0 l 282 0 z "
  },
  w: {
    ha: 1076,
    x_min: 16,
    x_max: 1060,
    o: "m 724 1 l 591 434 q 575 489 583 462 q 561 540 567 515 q 549 586 554 565 q 541 623 544 608 l 536 623 q 528 586 533 608 q 517 540 524 565 q 503 487 511 515 q 486 432 496 460 l 348 1 l 221 1 l 16 745 l 133 745 l 240 334 q 261 254 251 294 q 278 179 271 214 q 288 119 285 144 l 294 119 q 303 159 298 136 q 314 210 308 183 q 328 263 321 237 q 343 314 336 290 l 480 745 l 602 745 l 734 315 q 754 247 744 282 q 772 179 764 212 q 783 120 780 146 l 789 120 q 799 177 791 143 q 816 252 806 211 q 837 334 826 292 l 945 745 l 1060 745 l 854 1 l 724 1 z "
  },
  x: {
    ha: 727,
    x_min: 26,
    x_max: 701,
    o: "m 296 380 l 39 743 l 168 743 l 363 457 l 559 743 l 686 743 l 429 380 l 701 0 l 572 0 l 363 303 l 154 0 l 26 0 l 296 380 z "
  },
  y: {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 z "
  },
  z: {
    ha: 651,
    x_min: 54,
    x_max: 596,
    o: "m 596 0 l 54 0 l 54 75 l 462 655 l 80 655 l 80 743 l 587 743 l 587 660 l 185 87 l 596 87 l 596 0 z "
  },
  "{": {
    ha: 521,
    x_min: 39,
    x_max: 476,
    o: "m 476 -220 q 331 -195 392 -219 q 238 -123 271 -171 q 206 -2 206 -75 l 206 205 q 187 283 206 254 q 131 326 168 313 q 39 340 94 340 l 39 433 q 131 447 94 434 q 187 490 168 460 q 206 567 206 519 l 206 776 q 240 896 206 848 q 335 968 274 944 q 476 991 395 991 l 476 899 q 390 884 426 898 q 336 840 355 869 q 317 765 317 811 l 317 561 q 281 448 317 490 q 171 391 245 405 l 171 383 q 282 328 247 370 q 317 214 317 285 l 317 5 q 336 -70 317 -41 q 390 -112 354 -98 q 476 -126 425 -125 l 476 -220 z "
  },
  "|": {
    ha: 763,
    x_min: 334,
    x_max: 428,
    o: "m 334 1056 l 428 1056 l 428 -336 l 334 -336 l 334 1056 z "
  },
  "}": {
    ha: 521,
    x_min: 45,
    x_max: 483,
    o: "m 45 -220 l 45 -126 q 131 -111 96 -125 q 185 -68 166 -97 q 203 7 203 -39 l 203 212 q 240 326 203 283 q 350 382 276 369 l 350 390 q 239 446 275 404 q 203 559 203 489 l 203 766 q 185 842 203 812 q 132 885 167 871 q 45 899 96 899 l 45 991 q 190 967 130 991 q 282 896 250 943 q 315 774 315 848 l 315 568 q 334 490 315 519 q 390 447 353 460 q 483 433 428 433 l 483 340 q 390 326 428 340 q 334 283 353 313 q 315 207 315 254 l 315 -3 q 281 -123 315 -75 q 186 -196 247 -172 q 45 -220 126 -220 z "
  },
  "~": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 376 446 q 294 476 328 468 q 229 485 261 485 q 148 462 191 485 q 70 404 104 439 l 70 505 q 145 559 104 541 q 237 577 187 577 q 318 568 279 577 q 418 533 358 559 q 500 503 467 512 q 563 494 532 494 q 646 517 603 494 q 722 576 688 541 l 722 476 q 648 421 690 441 q 557 402 607 402 q 476 411 516 402 q 376 446 436 420 z "
  },
  "\xA0": {
    ha: 361,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\xA1": {
    ha: 367,
    x_min: 102,
    x_max: 263,
    o: "m 144 462 l 219 462 l 250 -254 l 113 -254 l 144 462 m 263 668 q 240 601 263 621 q 182 581 216 581 q 125 601 149 581 q 102 668 102 621 q 125 735 102 714 q 182 757 149 757 q 240 735 216 757 q 263 668 263 714 z "
  },
  "\xA2": {
    ha: 794,
    x_min: 125,
    x_max: 671,
    o: "m 488 1006 l 488 894 q 588 881 541 892 q 671 854 636 870 l 638 760 q 556 785 601 774 q 473 795 511 795 q 343 763 395 795 q 266 666 292 730 q 241 504 241 601 q 266 345 241 408 q 341 251 291 282 q 465 220 391 220 q 571 232 525 220 q 659 261 617 243 l 659 163 q 582 134 622 144 q 487 121 541 123 l 487 -14 l 400 -14 l 400 125 q 254 179 315 137 q 159 301 192 222 q 125 503 125 380 q 159 708 125 627 q 255 832 193 789 q 400 888 317 876 l 400 1006 l 488 1006 z "
  },
  "\xA3": {
    ha: 794,
    x_min: 46,
    x_max: 741,
    o: "m 465 1004 q 600 988 541 1004 q 707 949 660 972 l 667 859 q 575 894 625 878 q 468 910 524 910 q 343 867 386 910 q 300 727 300 823 l 300 532 l 583 532 l 583 446 l 300 446 l 300 296 q 287 201 300 239 q 251 141 273 163 q 203 103 229 118 l 741 103 l 741 0 l 46 0 l 46 96 q 119 128 87 105 q 169 192 151 151 q 187 294 187 233 l 187 446 l 52 446 l 52 532 l 187 532 l 187 739 q 221 882 187 823 q 318 973 256 941 q 465 1004 380 1004 z "
  },
  "\xA4": {
    ha: 794,
    x_min: 82,
    x_max: 710,
    o: "m 124 490 q 138 573 124 533 q 175 647 152 614 l 82 743 l 144 804 l 238 713 q 312 750 271 736 q 397 763 353 763 q 480 750 441 763 q 553 713 519 736 l 648 804 l 710 743 l 618 648 q 655 575 641 615 q 670 490 670 534 q 657 406 670 447 q 618 332 644 365 l 709 238 l 648 178 l 553 269 q 481 232 521 245 q 397 219 441 219 q 311 232 353 219 q 238 270 270 245 l 144 178 l 83 239 l 175 333 q 138 407 152 366 q 124 490 124 447 m 211 490 q 236 396 211 438 q 303 329 260 353 q 397 304 345 304 q 492 329 450 304 q 560 396 535 354 q 585 490 585 439 q 560 586 585 543 q 492 654 535 629 q 397 680 450 680 q 303 654 345 680 q 236 586 260 629 q 211 490 211 543 z "
  },
  "\xA5": {
    ha: 794,
    x_min: 21,
    x_max: 770,
    o: "m 396 503 l 652 991 l 770 991 l 486 469 l 665 469 l 665 385 l 451 385 l 451 267 l 665 267 l 665 184 l 451 184 l 451 0 l 341 0 l 341 184 l 127 184 l 127 267 l 341 267 l 341 385 l 127 385 l 127 469 l 303 469 l 21 991 l 141 991 l 396 503 z "
  },
  "\xA6": {
    ha: 763,
    x_min: 334,
    x_max: 428,
    o: "m 334 1056 l 428 1056 l 428 529 l 334 529 l 334 1056 m 334 191 l 428 191 l 428 -336 l 334 -336 l 334 191 z "
  },
  "\xA7": {
    ha: 713,
    x_min: 83,
    x_max: 618,
    o: "m 95 549 q 130 660 95 617 q 210 724 164 703 q 129 788 158 750 q 100 883 100 825 q 170 1014 100 966 q 370 1062 240 1062 q 500 1049 447 1062 q 605 1015 554 1036 l 570 928 q 476 961 524 947 q 363 974 428 974 q 241 951 278 974 q 205 886 205 928 q 222 837 205 858 q 281 796 240 816 q 391 751 322 777 q 512 697 461 726 q 590 628 563 667 q 618 532 618 589 q 586 416 618 461 q 511 347 553 370 q 588 284 561 321 q 616 193 616 248 q 537 46 616 99 q 317 -6 459 -6 q 183 6 241 -6 q 83 39 126 18 l 83 137 q 153 110 113 123 q 235 88 192 96 q 322 80 279 80 q 468 111 427 80 q 508 184 508 142 q 493 234 508 213 q 438 276 478 255 q 325 323 399 296 q 202 378 254 350 q 123 447 151 407 q 95 549 95 488 m 192 561 q 212 498 192 525 q 275 447 231 471 q 391 397 319 424 l 427 384 q 491 436 463 404 q 520 515 520 468 q 500 581 520 552 q 432 634 480 609 q 299 685 384 659 q 224 642 257 674 q 192 561 192 609 z "
  },
  "\xA8": {
    ha: 805,
    x_min: 210,
    x_max: 593,
    o: "m 210 945 q 228 995 210 979 q 271 1010 245 1010 q 316 995 298 1010 q 334 945 334 979 q 316 896 334 912 q 271 879 298 879 q 228 896 245 879 q 210 945 210 912 m 471 945 q 488 995 471 979 q 531 1010 506 1010 q 575 995 557 1010 q 593 945 593 979 q 575 896 593 912 q 531 879 557 879 q 488 896 506 879 q 471 945 471 912 z "
  },
  "\xA9": {
    ha: 1156,
    x_min: 68,
    x_max: 1088,
    o: "m 578 -14 q 374 24 467 -14 q 212 131 281 62 q 105 293 143 199 q 68 496 68 386 q 106 700 68 606 q 213 861 144 793 q 375 968 281 930 q 578 1006 468 1006 q 777 967 684 1006 q 939 860 869 929 q 1048 699 1009 791 q 1088 496 1088 606 q 1050 293 1088 386 q 943 131 1012 199 q 781 24 874 62 q 578 -14 688 -14 m 600 186 q 393 270 463 186 q 324 496 324 355 q 357 655 324 586 q 453 765 390 725 q 605 804 515 804 q 694 793 650 804 q 777 763 738 783 l 739 684 q 671 711 705 702 q 606 720 638 720 q 473 660 520 720 q 425 496 425 600 q 468 329 425 387 q 604 271 511 271 q 677 279 638 271 q 751 302 716 288 l 751 220 q 683 195 718 205 q 600 186 648 186 m 578 56 q 747 88 668 56 q 886 180 826 121 q 979 320 945 239 q 1013 496 1013 400 q 981 666 1013 587 q 890 806 949 745 q 752 902 832 867 q 578 936 673 936 q 403 903 483 936 q 265 811 323 871 q 174 672 206 752 q 142 496 142 591 q 174 325 142 405 q 264 185 205 245 q 402 90 323 124 q 578 56 482 56 z "
  },
  "\xAA": {
    ha: 490,
    x_min: 46,
    x_max: 422,
    o: "m 244 1003 q 377 966 332 1003 q 422 848 422 928 l 422 543 l 360 543 l 345 602 q 279 553 318 572 q 189 534 241 534 q 113 549 145 534 q 63 594 81 564 q 46 670 46 625 q 70 747 46 716 q 142 795 94 779 q 265 815 191 812 l 341 818 l 341 850 q 312 916 341 897 q 241 935 283 935 q 169 925 204 935 q 103 899 134 915 l 74 963 q 153 992 109 981 q 244 1003 197 1003 m 341 758 l 275 755 q 160 731 191 753 q 130 670 130 709 q 151 617 130 634 q 208 601 172 601 q 310 634 278 601 q 341 724 341 668 l 341 758 z "
  },
  "\xAB": {
    ha: 688,
    x_min: 54,
    x_max: 637,
    o: "m 54 377 l 284 654 l 365 608 l 170 369 l 365 130 l 284 83 l 54 359 l 54 377 m 323 377 l 557 654 l 637 608 l 443 369 l 637 130 l 557 83 l 323 359 l 323 377 z "
  },
  "\xAC": {
    ha: 794,
    x_min: 70,
    x_max: 719,
    o: "m 719 536 l 719 178 l 628 178 l 628 444 l 70 444 l 70 536 l 719 536 z "
  },
  "\xAD": {
    ha: 447,
    x_min: 56,
    x_max: 392,
    o: "m 56 323 l 56 423 l 392 423 l 392 323 l 56 323 z "
  },
  "\xAE": {
    ha: 1156,
    x_min: 68,
    x_max: 1088,
    o: "m 390 193 l 390 798 l 567 798 q 730 754 677 798 q 783 620 783 709 q 750 516 783 554 q 673 460 716 477 l 833 193 l 722 193 l 582 434 l 488 434 l 488 193 l 390 193 m 488 514 l 564 514 q 652 542 620 514 q 684 617 684 570 q 654 692 684 669 q 562 715 625 715 l 488 715 l 488 514 m 578 -14 q 374 24 467 -14 q 212 131 281 62 q 105 293 143 199 q 68 496 68 386 q 106 700 68 606 q 213 861 144 793 q 375 968 281 930 q 578 1006 468 1006 q 777 967 684 1006 q 939 860 869 929 q 1048 699 1009 791 q 1088 496 1088 606 q 1050 293 1088 386 q 943 131 1012 199 q 781 24 874 62 q 578 -14 688 -14 m 578 56 q 747 88 668 56 q 886 180 826 121 q 979 320 945 239 q 1013 496 1013 400 q 981 666 1013 587 q 890 806 949 745 q 752 902 832 867 q 578 936 673 936 q 403 903 483 936 q 265 811 323 871 q 174 672 206 752 q 142 496 142 591 q 174 325 142 405 q 264 185 205 245 q 402 90 323 124 q 578 56 482 56 z "
  },
  "\xAF": {
    ha: 694,
    x_min: -4,
    x_max: 699,
    o: "m 699 1055 l -4 1055 l -4 1141 l 699 1141 l 699 1055 z "
  },
  "\xB0": {
    ha: 595,
    x_min: 79,
    x_max: 515,
    o: "m 297 583 q 183 609 232 583 q 107 683 134 635 q 79 793 79 731 q 106 904 79 857 q 182 979 133 952 q 297 1006 231 1006 q 411 979 361 1006 q 488 904 460 952 q 515 793 515 857 q 488 683 515 731 q 411 609 460 635 q 297 583 361 583 m 298 660 q 398 697 365 660 q 431 793 431 734 q 397 893 431 856 q 298 930 363 930 q 197 893 230 930 q 163 793 163 856 q 196 697 163 734 q 298 660 229 660 z "
  },
  "\xB1": {
    ha: 794,
    x_min: 70,
    x_max: 723,
    o: "m 70 0 l 70 92 l 723 92 l 723 0 l 70 0 m 442 539 l 722 539 l 722 447 l 442 447 l 442 159 l 349 159 l 349 447 l 70 447 l 70 539 l 349 539 l 349 828 l 442 828 l 442 539 z "
  },
  "\xB2": {
    ha: 483,
    x_min: 34,
    x_max: 425,
    o: "m 425 578 l 34 578 l 34 648 l 195 806 q 280 895 250 860 q 321 957 310 929 q 332 1017 332 985 q 306 1085 332 1061 q 235 1109 279 1109 q 158 1094 193 1109 q 87 1050 123 1078 l 42 1110 q 130 1164 83 1144 q 236 1185 178 1185 q 374 1141 324 1185 q 425 1021 425 1097 q 406 937 425 975 q 351 859 387 898 q 262 770 315 819 l 147 659 l 425 659 l 425 578 z "
  },
  "\xB3": {
    ha: 483,
    x_min: 25,
    x_max: 443,
    o: "m 230 1185 q 376 1142 327 1185 q 426 1033 426 1099 q 396 940 426 976 q 323 891 366 904 l 323 887 q 411 841 378 876 q 443 749 443 805 q 385 618 443 668 q 206 568 327 568 q 111 576 155 568 q 25 606 66 585 l 25 688 q 118 654 71 666 q 207 642 165 642 q 315 671 280 642 q 350 751 350 701 q 310 826 350 803 q 196 850 269 850 l 115 850 l 115 922 l 196 922 q 299 949 267 922 q 332 1023 332 977 q 303 1088 332 1067 q 231 1110 275 1110 q 150 1096 188 1110 q 75 1057 113 1081 l 29 1118 q 119 1166 71 1148 q 230 1185 166 1185 z "
  },
  "\xB4": {
    ha: 385,
    x_min: 56,
    x_max: 330,
    o: "m 330 1064 l 330 1050 q 293 1003 317 1031 q 241 946 270 976 q 184 888 213 916 q 131 842 155 861 l 56 842 l 56 858 q 103 920 77 884 q 153 995 129 956 q 194 1064 178 1033 l 330 1064 z "
  },
  "\xB5": {
    ha: 859,
    x_min: 119,
    x_max: 740,
    o: "m 740 743 l 740 0 l 648 0 l 631 103 l 625 103 q 570 40 602 66 q 495 0 538 14 q 398 -14 453 -14 q 299 5 340 -14 q 231 54 258 23 l 225 54 q 229 14 227 38 q 231 -40 230 -10 q 231 -106 231 -71 l 231 -334 l 119 -334 l 119 743 l 231 743 l 231 263 q 275 126 231 173 q 406 80 318 80 q 538 112 490 80 q 607 204 586 143 q 627 352 627 264 l 627 743 l 740 743 z "
  },
  "\xB6": {
    ha: 909,
    x_min: 83,
    x_max: 758,
    o: "m 758 -176 l 682 -176 l 682 983 l 536 983 l 536 -176 l 460 -176 l 460 391 q 412 382 439 385 q 361 379 386 379 q 214 412 276 379 q 117 518 151 445 q 83 714 83 592 q 120 917 83 842 q 224 1023 157 991 q 382 1055 292 1055 l 758 1055 l 758 -176 z "
  },
  "\xB7": {
    ha: 365,
    x_min: 102,
    x_max: 263,
    o: "m 102 484 q 125 552 102 532 q 181 572 148 572 q 239 552 216 572 q 263 484 263 532 q 239 416 263 437 q 181 395 216 395 q 125 416 148 395 q 102 484 102 437 z "
  },
  "\xB8": {
    ha: 308,
    x_min: 19,
    x_max: 290,
    o: "m 290 -194 q 239 -297 290 -260 q 90 -334 188 -334 q 50 -331 68 -334 q 19 -326 31 -329 l 19 -255 q 52 -260 32 -258 q 93 -262 73 -262 q 171 -247 144 -262 q 198 -197 198 -232 q 162 -142 198 -159 q 69 -119 125 -125 l 130 0 l 205 0 l 168 -76 q 230 -97 202 -83 q 273 -135 257 -111 q 290 -194 290 -159 z "
  },
  "\xB9": {
    ha: 483,
    x_min: 52,
    x_max: 326,
    o: "m 326 1173 l 326 578 l 235 578 l 235 962 q 235 1007 235 986 q 237 1049 236 1029 q 239 1090 238 1070 q 208 1063 225 1077 q 170 1036 190 1048 l 96 983 l 52 1047 l 233 1173 l 326 1173 z "
  },
  "\xBA": {
    ha: 519,
    x_min: 45,
    x_max: 475,
    o: "m 475 770 q 417 596 475 659 q 258 534 358 534 q 105 594 164 534 q 45 770 45 655 q 103 943 45 882 q 261 1004 161 1004 q 375 976 327 1004 q 449 897 422 949 q 475 770 475 844 m 127 770 q 159 645 127 688 q 259 603 190 603 q 360 645 328 603 q 391 770 391 688 q 360 892 391 851 q 260 934 329 934 q 159 893 191 934 q 127 770 127 852 z "
  },
  "\xBB": {
    ha: 688,
    x_min: 52,
    x_max: 635,
    o: "m 635 359 l 401 83 l 323 130 l 517 370 l 323 608 l 401 654 l 635 378 l 635 359 m 363 359 l 132 83 l 52 130 l 246 370 l 52 608 l 132 654 l 363 378 l 363 359 z "
  },
  "\xBC": {
    ha: 1028,
    x_min: 45,
    x_max: 1015,
    o: "m 178 0 l 774 991 l 871 991 l 275 0 l 178 0 m 228 397 l 228 781 q 229 827 228 806 q 230 869 229 848 q 233 909 231 890 q 201 882 218 897 q 163 854 183 868 l 90 803 l 45 867 l 226 991 l 319 991 l 319 397 l 228 397 m 832 0 l 832 139 l 559 139 l 559 205 l 834 599 l 928 599 l 928 216 l 1015 216 l 1015 139 l 928 139 l 928 0 l 832 0 m 651 216 l 832 216 l 832 357 q 833 424 832 387 q 836 494 833 461 q 807 446 828 477 q 771 391 787 414 l 651 216 z "
  },
  "\xBD": {
    ha: 1067,
    x_min: 30,
    x_max: 1009,
    o: "m 141 0 l 737 991 l 834 991 l 238 0 l 141 0 m 212 397 l 212 781 q 213 816 212 800 q 214 848 213 833 q 216 879 215 864 q 218 909 217 895 q 185 882 203 897 q 149 854 168 868 l 75 803 l 30 867 l 211 991 l 304 991 l 304 397 l 212 397 m 618 0 l 618 71 l 779 228 q 864 317 834 282 q 905 379 894 351 q 917 439 917 407 q 890 508 917 484 q 819 532 863 532 q 742 516 777 532 q 671 472 707 500 l 627 532 q 714 587 667 566 q 820 607 762 607 q 958 563 908 607 q 1008 444 1008 519 q 989 359 1008 397 q 935 281 970 320 q 846 192 899 241 l 731 81 l 1009 81 l 1009 0 l 618 0 z "
  },
  "\xBE": {
    ha: 1081,
    x_min: 22,
    x_max: 1069,
    o: "m 241 0 l 838 991 l 935 991 l 339 0 l 241 0 m 203 387 q 109 396 153 387 q 22 425 64 405 l 22 507 q 116 473 68 485 q 205 461 163 461 q 313 490 278 461 q 348 571 348 519 q 307 646 348 623 q 193 669 267 669 l 113 669 l 113 741 l 193 741 q 297 769 264 741 q 330 842 330 797 q 301 908 330 886 q 229 930 272 930 q 148 915 185 930 q 73 877 111 901 l 26 937 q 116 986 68 968 q 228 1004 164 1004 q 374 961 324 1004 q 423 852 423 918 q 393 760 423 795 q 321 711 363 724 l 321 706 q 408 660 376 695 q 441 568 441 625 q 382 437 441 488 q 203 387 324 387 m 886 0 l 886 139 l 613 139 l 613 205 l 888 599 l 982 599 l 982 216 l 1069 216 l 1069 139 l 982 139 l 982 0 l 886 0 m 705 216 l 886 216 l 886 357 q 887 424 886 387 q 890 494 888 461 q 861 446 881 477 q 825 391 840 414 l 705 216 z "
  },
  "\xBF": {
    ha: 600,
    x_min: 36,
    x_max: 576,
    o: "m 402 464 l 402 429 q 392 336 402 375 q 356 262 382 296 q 286 191 331 229 q 201 116 233 146 q 157 54 170 85 q 144 -22 144 22 q 190 -130 144 -92 q 317 -168 235 -168 q 437 -150 385 -168 q 537 -110 489 -133 l 576 -201 q 456 -248 521 -230 q 311 -267 391 -267 q 108 -202 180 -267 q 36 -24 36 -137 q 56 84 36 39 q 114 165 77 128 q 202 243 152 202 q 271 310 248 281 q 303 369 294 339 q 312 441 312 399 l 312 464 l 402 464 m 432 669 q 410 601 432 621 q 352 581 388 581 q 295 601 319 581 q 272 669 272 621 q 295 737 272 715 q 352 758 319 758 q 410 737 388 758 q 432 669 432 715 z "
  },
  "\xC0": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 391 1313 q 432 1243 408 1282 q 483 1169 456 1205 q 532 1107 509 1133 l 532 1090 l 455 1090 q 402 1137 431 1110 q 345 1195 373 1164 q 293 1252 316 1225 q 257 1299 270 1280 l 257 1313 l 391 1313 z "
  },
  "\xC1": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 634 1313 l 634 1299 q 597 1252 621 1280 q 545 1195 574 1225 q 488 1137 517 1164 q 435 1090 459 1110 l 359 1090 l 359 1107 q 407 1169 381 1133 q 457 1243 433 1205 q 498 1313 481 1282 l 634 1313 z "
  },
  "\xC2": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 496 1312 q 544 1243 513 1282 q 608 1168 574 1205 q 669 1105 642 1132 l 669 1090 l 589 1090 q 513 1149 552 1114 q 438 1221 475 1183 q 364 1149 401 1183 q 290 1090 326 1115 l 212 1090 l 212 1105 q 271 1169 238 1133 q 334 1244 304 1206 q 382 1312 364 1282 l 496 1312 z "
  },
  "\xC3": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 182 1093 q 198 1165 186 1133 q 229 1219 210 1197 q 274 1254 248 1242 q 332 1265 300 1265 q 391 1253 363 1265 q 446 1224 420 1240 q 495 1196 471 1208 q 542 1183 519 1183 q 592 1203 574 1183 q 620 1267 610 1223 l 686 1267 q 640 1140 677 1187 q 537 1093 602 1093 q 479 1106 507 1093 q 426 1134 452 1118 q 375 1163 400 1150 q 327 1175 351 1175 q 276 1155 294 1175 q 249 1093 258 1135 l 182 1093 z "
  },
  "\xC4": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 245 1194 q 263 1244 245 1228 q 307 1259 281 1259 q 351 1244 333 1259 q 369 1194 369 1228 q 351 1144 369 1161 q 307 1128 333 1128 q 263 1144 281 1128 q 245 1194 245 1161 m 506 1194 q 524 1244 506 1228 q 566 1259 541 1259 q 610 1244 592 1259 q 629 1194 629 1228 q 610 1144 629 1161 q 566 1128 592 1128 q 524 1144 541 1128 q 506 1194 506 1161 z "
  },
  "\xC5": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 436 930 q 328 969 370 930 q 286 1077 286 1008 q 328 1183 286 1145 q 436 1222 370 1222 q 545 1183 500 1222 q 589 1078 589 1145 q 545 969 589 1008 q 436 930 502 930 m 436 996 q 495 1018 472 996 q 517 1077 517 1040 q 494 1136 517 1114 q 436 1158 471 1158 q 379 1136 402 1158 q 355 1077 355 1114 q 376 1018 355 1040 q 436 996 397 996 z "
  },
  "\xC6": {
    ha: 1206,
    x_min: -1,
    x_max: 1129,
    o: "m 1129 0 l 611 0 l 611 315 l 269 315 l 118 0 l -1 0 l 465 991 l 1129 991 l 1129 890 l 726 890 l 726 569 l 1103 569 l 1103 469 l 726 469 l 726 102 l 1129 102 l 1129 0 m 313 417 l 611 417 l 611 888 l 533 888 l 313 417 z "
  },
  "\xC7": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 652 -194 q 601 -297 652 -260 q 452 -334 550 -334 q 412 -331 431 -334 q 381 -326 393 -329 l 381 -255 q 414 -260 394 -258 q 455 -262 435 -262 q 533 -247 506 -262 q 560 -197 560 -232 q 524 -142 560 -159 q 431 -119 488 -125 l 492 0 l 567 0 l 530 -76 q 592 -97 564 -83 q 635 -135 619 -111 q 652 -194 652 -159 z "
  },
  "\xC8": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 378 1313 q 418 1243 394 1282 q 469 1169 442 1205 q 518 1107 496 1133 l 518 1090 l 441 1090 q 388 1137 417 1110 q 331 1195 359 1164 q 279 1252 302 1225 q 243 1299 256 1280 l 243 1313 l 378 1313 z "
  },
  "\xC9": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 621 1313 l 621 1299 q 584 1252 608 1280 q 532 1195 561 1225 q 475 1137 504 1164 q 422 1090 446 1110 l 347 1090 l 347 1107 q 394 1169 368 1133 q 444 1243 420 1205 q 485 1313 469 1282 l 621 1313 z "
  },
  "\xCA": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 483 1312 q 530 1243 500 1282 q 595 1168 561 1205 q 655 1105 629 1132 l 655 1090 l 575 1090 q 500 1149 538 1114 q 425 1221 461 1183 q 350 1149 388 1183 q 276 1090 313 1115 l 199 1090 l 199 1105 q 257 1169 224 1133 q 320 1244 290 1206 q 368 1312 351 1282 l 483 1312 z "
  },
  "\xCB": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 233 1194 q 250 1244 233 1228 q 294 1259 268 1259 q 338 1244 320 1259 q 356 1194 356 1228 q 338 1144 356 1161 q 294 1128 320 1128 q 250 1144 268 1128 q 233 1194 233 1161 m 493 1194 q 511 1244 493 1228 q 553 1259 528 1259 q 597 1244 579 1259 q 616 1194 616 1228 q 597 1144 616 1161 q 553 1128 579 1128 q 511 1144 528 1128 q 493 1194 493 1161 z "
  },
  "\xCC": {
    ha: 388,
    x_min: -8,
    x_max: 267,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 126 1313 q 166 1243 142 1282 q 217 1169 191 1205 q 267 1107 244 1133 l 267 1090 l 190 1090 q 137 1137 165 1110 q 79 1195 108 1164 q 28 1252 51 1225 q -8 1299 5 1280 l -8 1313 l 126 1313 z "
  },
  "\xCD": {
    ha: 388,
    x_min: 122,
    x_max: 397,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 397 1313 l 397 1299 q 360 1252 383 1280 q 308 1195 336 1225 q 251 1137 279 1164 q 197 1090 222 1110 l 122 1090 l 122 1107 q 170 1169 144 1133 q 220 1243 195 1205 q 260 1313 244 1282 l 397 1313 z "
  },
  "\xCE": {
    ha: 388,
    x_min: -34,
    x_max: 422,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 250 1312 q 298 1243 267 1282 q 362 1168 328 1205 q 422 1105 396 1132 l 422 1090 l 342 1090 q 267 1149 306 1114 q 192 1221 229 1183 q 118 1149 155 1183 q 43 1090 80 1115 l -34 1090 l -34 1105 q 25 1169 -8 1133 q 88 1244 58 1206 q 136 1312 118 1282 l 250 1312 z "
  },
  "\xCF": {
    ha: 388,
    x_min: 4,
    x_max: 387,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 4 1194 q 22 1244 4 1228 q 65 1259 39 1259 q 110 1244 92 1259 q 127 1194 127 1228 q 110 1144 127 1161 q 65 1128 92 1128 q 22 1144 39 1128 q 4 1194 4 1161 m 264 1194 q 282 1244 264 1228 q 325 1259 300 1259 q 369 1244 351 1259 q 387 1194 387 1228 q 369 1144 387 1161 q 325 1128 351 1128 q 282 1144 300 1128 q 264 1194 264 1161 z "
  },
  "\xD0": {
    ha: 1008,
    x_min: 39,
    x_max: 923,
    o: "m 435 991 q 695 936 585 991 q 864 773 804 881 q 923 505 923 665 q 862 225 923 338 q 685 57 801 113 q 404 0 569 0 l 144 0 l 144 440 l 39 440 l 39 541 l 144 541 l 144 991 l 435 991 m 417 893 l 259 893 l 259 541 l 511 541 l 511 440 l 259 440 l 259 99 l 391 99 q 699 200 597 99 q 802 501 802 301 q 757 722 802 635 q 626 851 712 808 q 417 893 541 893 z "
  },
  "\xD1": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 m 270 1093 q 286 1165 274 1133 q 316 1219 297 1197 q 361 1254 335 1242 q 419 1265 387 1265 q 479 1253 450 1265 q 533 1224 507 1240 q 583 1196 559 1208 q 629 1183 607 1183 q 680 1203 662 1183 q 707 1267 698 1223 l 774 1267 q 727 1140 765 1187 q 625 1093 689 1093 q 567 1106 595 1093 q 513 1134 539 1118 q 463 1163 488 1150 q 414 1175 438 1175 q 363 1155 381 1175 q 336 1093 346 1135 l 270 1093 z "
  },
  "\xD2": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 495 1313 q 535 1243 511 1282 q 586 1169 559 1205 q 635 1107 613 1133 l 635 1090 l 559 1090 q 506 1137 534 1110 q 448 1195 477 1164 q 397 1252 420 1225 q 361 1299 374 1280 l 361 1313 l 495 1313 z "
  },
  "\xD3": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 737 1313 l 737 1299 q 700 1252 724 1280 q 648 1195 677 1225 q 591 1137 620 1164 q 538 1090 562 1110 l 463 1090 l 463 1107 q 510 1169 484 1133 q 560 1243 536 1205 q 601 1313 585 1282 l 737 1313 z "
  },
  "\xD4": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 600 1312 q 647 1243 616 1282 q 711 1168 677 1205 q 772 1105 745 1132 l 772 1090 l 692 1090 q 616 1149 655 1114 q 541 1221 578 1183 q 467 1149 505 1183 q 393 1090 429 1115 l 315 1090 l 315 1105 q 374 1169 341 1133 q 437 1244 407 1206 q 485 1312 467 1282 l 600 1312 z "
  },
  "\xD5": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 285 1093 q 300 1165 289 1133 q 331 1219 312 1197 q 376 1254 350 1242 q 434 1265 402 1265 q 494 1253 465 1265 q 548 1224 522 1240 q 598 1196 574 1208 q 644 1183 622 1183 q 695 1203 677 1183 q 722 1267 713 1223 l 789 1267 q 742 1140 780 1187 q 640 1093 704 1093 q 582 1106 610 1093 q 528 1134 554 1118 q 478 1163 503 1150 q 429 1175 453 1175 q 378 1155 396 1175 q 351 1093 361 1135 l 285 1093 z "
  },
  "\xD6": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 349 1194 q 366 1244 349 1228 q 410 1259 384 1259 q 454 1244 436 1259 q 472 1194 472 1228 q 454 1144 472 1161 q 410 1128 436 1128 q 366 1144 384 1128 q 349 1194 349 1161 m 609 1194 q 627 1244 609 1228 q 669 1259 644 1259 q 713 1244 695 1259 q 732 1194 732 1228 q 713 1144 732 1161 q 669 1128 695 1128 q 627 1144 644 1128 q 609 1194 609 1161 z "
  },
  "\xD7": {
    ha: 794,
    x_min: 90,
    x_max: 701,
    o: "m 637 796 l 701 730 l 461 490 l 701 250 l 636 184 l 395 423 l 158 184 l 91 250 l 330 490 l 90 729 l 157 796 l 396 555 l 637 796 z "
  },
  "\xD8": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 396 4 461 -14 q 281 56 331 21 l 212 -42 l 133 9 l 208 115 q 115 280 146 183 q 85 498 85 378 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 679 990 616 1007 q 793 941 742 972 l 859 1036 l 937 982 l 865 882 q 962 718 928 815 q 996 497 996 621 m 874 497 q 855 662 874 588 q 799 787 836 735 l 342 144 q 430 101 380 117 q 541 86 479 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 m 206 497 q 224 337 206 409 q 277 214 241 266 l 731 852 q 648 892 694 878 q 543 905 601 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  "\xD9": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 460 1313 q 501 1243 477 1282 q 552 1169 525 1205 q 601 1107 578 1133 l 601 1090 l 524 1090 q 471 1137 500 1110 q 414 1195 442 1164 q 362 1252 385 1225 q 326 1299 339 1280 l 326 1313 l 460 1313 z "
  },
  "\xDA": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 703 1313 l 703 1299 q 666 1252 690 1280 q 614 1195 643 1225 q 557 1137 586 1164 q 504 1090 528 1110 l 429 1090 l 429 1107 q 476 1169 450 1133 q 526 1243 502 1205 q 567 1313 551 1282 l 703 1313 z "
  },
  "\xDB": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 566 1312 q 613 1243 583 1282 q 677 1168 644 1205 q 738 1105 711 1132 l 738 1090 l 658 1090 q 583 1149 621 1114 q 507 1221 544 1183 q 433 1149 471 1183 q 359 1090 395 1115 l 281 1090 l 281 1105 q 340 1169 307 1133 q 403 1244 373 1206 q 451 1312 433 1282 l 566 1312 z "
  },
  "\xDC": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 315 1194 q 333 1244 315 1228 q 376 1259 351 1259 q 421 1244 403 1259 q 439 1194 439 1228 q 421 1144 439 1161 q 376 1128 403 1128 q 333 1144 351 1128 q 315 1194 315 1161 m 576 1194 q 593 1244 576 1228 q 636 1259 611 1259 q 680 1244 662 1259 q 699 1194 699 1228 q 680 1144 699 1161 q 636 1128 662 1128 q 593 1144 611 1128 q 576 1194 576 1161 z "
  },
  "\xDD": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 585 1313 l 585 1299 q 548 1252 572 1280 q 496 1195 525 1225 q 439 1137 468 1164 q 386 1090 410 1110 l 311 1090 l 311 1107 q 358 1169 332 1133 q 408 1243 384 1205 q 449 1313 433 1282 l 585 1313 z "
  },
  "\xDE": {
    ha: 836,
    x_min: 136,
    x_max: 764,
    o: "m 764 530 q 744 410 764 467 q 678 310 724 353 q 556 242 632 267 q 370 218 481 218 l 251 218 l 251 0 l 136 0 l 136 991 l 251 991 l 251 818 l 393 818 q 677 743 589 818 q 764 530 764 668 m 251 316 l 358 316 q 519 337 456 316 q 614 403 583 357 q 645 524 645 449 q 583 672 645 624 q 383 720 521 720 l 251 720 l 251 316 z "
  },
  "\xDF": {
    ha: 865,
    x_min: 119,
    x_max: 801,
    o: "m 712 860 q 692 777 712 812 q 644 716 673 743 q 586 667 615 690 q 538 623 557 645 q 518 574 518 601 q 528 536 518 553 q 565 499 538 520 q 642 446 591 479 q 726 380 690 413 q 782 306 762 347 q 801 210 801 266 q 769 84 801 134 q 680 11 737 35 q 546 -14 623 -14 q 431 -2 480 -14 q 346 32 382 10 l 346 134 q 402 107 371 120 q 470 86 434 94 q 543 78 506 78 q 656 112 621 78 q 691 202 691 145 q 679 264 691 238 q 637 316 666 291 q 560 373 608 342 q 471 439 504 410 q 423 499 437 469 q 409 568 409 530 q 428 642 409 612 q 475 695 447 672 q 532 740 504 718 q 579 788 560 762 q 598 853 598 815 q 549 941 598 913 q 422 968 500 968 q 326 954 370 968 q 257 904 283 939 q 231 808 231 869 l 231 0 l 119 0 l 119 808 q 158 957 119 901 q 266 1038 197 1013 q 422 1063 334 1063 q 574 1040 509 1063 q 676 972 640 1017 q 712 860 712 927 z "
  },
  "\xE0": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 339 1064 q 379 995 355 1033 q 430 920 404 956 q 479 858 457 884 l 479 842 l 403 842 q 350 888 378 861 q 292 946 321 916 q 241 1003 264 976 q 205 1050 218 1031 l 205 1064 l 339 1064 z "
  },
  "\xE1": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 583 1064 l 583 1050 q 546 1003 569 1031 q 494 946 522 976 q 436 888 465 916 q 383 842 408 861 l 308 842 l 308 858 q 355 920 330 884 q 406 995 381 956 q 446 1064 430 1033 l 583 1064 z "
  },
  "\xE2": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 444 1063 q 492 995 461 1033 q 556 920 522 956 q 616 857 590 883 l 616 842 l 536 842 q 461 900 500 865 q 386 972 422 935 q 312 900 349 935 q 237 842 274 866 l 160 842 l 160 857 q 219 920 186 884 q 282 995 252 957 q 330 1063 312 1033 l 444 1063 z "
  },
  "\xE3": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 130 844 q 145 916 134 884 q 176 970 157 948 q 221 1005 195 993 q 279 1017 247 1017 q 338 1004 310 1017 q 393 976 367 991 q 443 947 418 960 q 489 935 467 935 q 539 955 522 935 q 567 1018 557 975 l 633 1018 q 587 891 625 939 q 484 844 549 844 q 427 857 454 844 q 373 885 399 869 q 322 914 347 901 q 274 926 298 926 q 223 906 241 926 q 196 844 205 886 l 130 844 z "
  },
  "\xE4": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 194 945 q 212 995 194 979 q 255 1010 229 1010 q 299 995 281 1010 q 317 945 317 979 q 299 896 317 912 q 255 879 281 879 q 212 896 229 879 q 194 945 194 912 m 454 945 q 472 995 454 979 q 515 1010 490 1010 q 559 995 541 1010 q 577 945 577 979 q 559 896 577 912 q 515 879 541 879 q 472 896 490 879 q 454 945 454 912 z "
  },
  "\xE5": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 386 842 q 278 881 320 842 q 236 989 236 920 q 278 1095 236 1057 q 386 1134 319 1134 q 494 1095 450 1134 q 538 990 538 1057 q 495 881 538 920 q 386 842 452 842 m 386 907 q 445 929 422 907 q 467 989 467 951 q 444 1048 467 1026 q 386 1069 420 1069 q 329 1048 352 1069 q 305 989 305 1026 q 326 929 305 951 q 386 907 347 907 z "
  },
  "\xE6": {
    ha: 1198,
    x_min: 64,
    x_max: 1126,
    o: "m 838 757 q 992 715 928 757 q 1092 597 1057 673 q 1126 423 1126 522 l 1126 352 l 645 352 q 704 149 648 215 q 866 83 760 83 q 986 96 934 83 q 1093 134 1038 109 l 1093 35 q 984 -2 1038 9 q 863 -14 931 -14 q 744 5 798 -14 q 649 60 690 24 q 581 149 608 96 q 512 63 550 100 q 423 6 475 26 q 299 -14 372 -14 q 178 10 231 -14 q 94 82 125 34 q 64 204 64 130 q 101 329 64 278 q 215 409 139 380 q 404 440 290 437 l 530 446 l 530 494 q 487 626 530 588 q 371 665 444 665 q 263 648 316 665 q 162 608 210 631 l 127 693 q 244 738 177 720 q 380 755 312 755 q 523 725 467 755 q 606 626 579 694 q 701 722 642 688 q 838 757 760 757 m 527 366 l 420 361 q 235 316 290 356 q 181 203 181 276 q 218 109 181 139 q 317 78 255 78 q 425 102 378 78 q 500 176 473 127 q 527 298 527 224 l 527 366 m 836 665 q 705 607 754 665 q 648 441 655 550 l 1006 441 q 989 558 1007 508 q 932 637 970 609 q 836 665 895 665 z "
  },
  "\xE7": {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 527 -194 q 476 -297 527 -260 q 327 -334 425 -334 q 287 -331 306 -334 q 256 -326 268 -329 l 256 -255 q 290 -260 269 -258 q 330 -262 310 -262 q 408 -247 381 -262 q 435 -197 435 -232 q 399 -142 435 -159 q 307 -119 363 -125 l 367 0 l 442 0 l 406 -76 q 467 -97 439 -83 q 511 -135 494 -111 q 527 -194 527 -159 z "
  },
  "\xE8": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 349 1064 q 389 995 365 1033 q 440 920 413 956 q 489 858 467 884 l 489 842 l 412 842 q 359 888 388 861 q 302 946 330 916 q 250 1003 273 976 q 214 1050 227 1031 l 214 1064 l 349 1064 z "
  },
  "\xE9": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 591 1064 l 591 1050 q 554 1003 578 1031 q 503 946 531 976 q 445 888 474 916 q 392 842 416 861 l 317 842 l 317 858 q 364 920 338 884 q 414 995 390 956 q 455 1064 439 1033 l 591 1064 z "
  },
  "\xEA": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 454 1063 q 501 995 471 1033 q 566 920 532 956 q 626 857 600 883 l 626 842 l 546 842 q 471 900 509 865 q 395 972 432 935 q 321 900 359 935 q 247 842 283 866 l 170 842 l 170 857 q 228 920 195 884 q 291 995 261 957 q 339 1063 321 1033 l 454 1063 z "
  },
  "\xEB": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 203 945 q 221 995 203 979 q 264 1010 239 1010 q 309 995 291 1010 q 327 945 327 979 q 309 896 327 912 q 264 879 291 879 q 221 896 239 879 q 203 945 203 912 m 464 945 q 481 995 464 979 q 524 1010 499 1010 q 568 995 550 1010 q 587 945 587 979 q 568 896 587 912 q 524 879 550 879 q 481 896 499 879 q 464 945 464 912 z "
  },
  "\xEC": {
    ha: 351,
    x_min: -5,
    x_max: 269,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 129 1064 q 169 995 145 1033 q 220 920 193 956 q 269 858 247 884 l 269 842 l 193 842 q 139 888 168 861 q 82 946 111 916 q 31 1003 54 976 q -5 1050 7 1031 l -5 1064 l 129 1064 z "
  },
  "\xED": {
    ha: 351,
    x_min: 97,
    x_max: 372,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 372 1064 l 372 1050 q 335 1003 358 1031 q 283 946 311 976 q 225 888 254 916 q 172 842 197 861 l 97 842 l 97 858 q 144 920 119 884 q 195 995 170 956 q 235 1064 219 1033 l 372 1064 z "
  },
  "\xEE": {
    ha: 351,
    x_min: -51,
    x_max: 406,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 233 1063 q 281 995 250 1033 q 345 920 311 956 q 406 857 379 883 l 406 842 l 326 842 q 250 900 289 865 q 175 972 212 935 q 101 900 138 935 q 26 842 63 866 l -51 842 l -51 857 q 8 920 -25 884 q 71 995 41 957 q 119 1063 101 1033 l 233 1063 z "
  },
  "\xEF": {
    ha: 351,
    x_min: -17,
    x_max: 366,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m -17 945 q 1 995 -17 979 q 44 1010 18 1010 q 89 995 71 1010 q 106 945 106 979 q 89 896 106 912 q 44 879 71 879 q 1 896 18 879 q -17 945 -17 912 m 243 945 q 261 995 243 979 q 304 1010 279 1010 q 348 995 330 1010 q 366 945 366 979 q 348 896 366 912 q 304 879 330 879 q 261 896 279 879 q 243 945 243 912 z "
  },
  "\xF0": {
    ha: 833,
    x_min: 77,
    x_max: 756,
    o: "m 298 1061 q 388 1015 344 1040 q 471 961 432 990 l 631 1054 l 680 985 l 541 904 q 654 765 606 844 q 729 589 703 686 q 756 381 756 493 q 715 164 756 252 q 598 31 675 76 q 414 -14 522 -14 q 238 27 315 -14 q 119 143 162 68 q 77 322 77 219 q 117 500 77 426 q 230 615 157 575 q 401 656 302 656 q 493 647 452 656 q 567 619 534 637 q 621 573 599 601 l 627 575 q 558 727 605 657 q 452 852 512 797 l 271 747 l 222 818 l 379 908 q 317 948 350 928 q 252 984 285 967 l 298 1061 m 418 564 q 290 536 340 564 q 215 452 239 507 q 191 318 191 397 q 215 193 191 248 q 289 109 239 139 q 416 79 339 79 q 587 149 532 79 q 642 354 642 220 q 629 434 642 396 q 589 501 616 471 q 519 547 562 530 q 418 564 477 564 z "
  },
  "\xF1": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 671 692 603 757 q 739 484 739 627 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 281 592 332 662 q 231 389 231 522 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 m 172 844 q 188 916 176 884 q 218 970 199 948 q 263 1005 237 993 q 321 1017 290 1017 q 381 1004 353 1017 q 435 976 410 991 q 485 947 461 960 q 532 935 509 935 q 582 955 564 935 q 610 1018 600 975 l 676 1018 q 629 891 667 939 q 527 844 591 844 q 469 857 497 844 q 416 885 441 869 q 365 914 390 901 q 317 926 340 926 q 266 906 283 926 q 239 844 248 886 l 172 844 z "
  },
  "\xF2": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 372 1064 q 412 995 388 1033 q 463 920 436 956 q 512 858 490 884 l 512 842 l 435 842 q 382 888 411 861 q 325 946 353 916 q 273 1003 296 976 q 237 1050 250 1031 l 237 1064 l 372 1064 z "
  },
  "\xF3": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 615 1064 l 615 1050 q 578 1003 602 1031 q 526 946 555 976 q 469 888 498 916 q 416 842 440 861 l 340 842 l 340 858 q 388 920 362 884 q 438 995 414 956 q 479 1064 463 1033 l 615 1064 z "
  },
  "\xF4": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 477 1063 q 524 995 494 1033 q 589 920 555 956 q 649 857 623 883 l 649 842 l 569 842 q 494 900 532 865 q 418 972 455 935 q 344 900 382 935 q 270 842 307 866 l 193 842 l 193 857 q 251 920 218 884 q 314 995 284 957 q 362 1063 345 1033 l 477 1063 z "
  },
  "\xF5": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 163 844 q 178 916 167 884 q 209 970 190 948 q 254 1005 228 993 q 312 1017 280 1017 q 372 1004 343 1017 q 426 976 400 991 q 476 947 452 960 q 522 935 500 935 q 573 955 555 935 q 600 1018 591 975 l 667 1018 q 620 891 658 939 q 517 844 582 844 q 460 857 488 844 q 406 885 432 869 q 356 914 380 901 q 307 926 331 926 q 256 906 274 926 q 229 844 239 886 l 163 844 z "
  },
  "\xF6": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 227 945 q 244 995 227 979 q 288 1010 262 1010 q 332 995 314 1010 q 350 945 350 979 q 332 896 350 912 q 288 879 314 879 q 244 896 262 879 q 227 945 227 912 m 487 945 q 505 995 487 979 q 547 1010 522 1010 q 591 995 573 1010 q 610 945 610 979 q 591 896 610 912 q 547 879 573 879 q 505 896 522 879 q 487 945 487 912 z "
  },
  "\xF7": {
    ha: 794,
    x_min: 70,
    x_max: 723,
    o: "m 70 444 l 70 536 l 723 536 l 723 444 l 70 444 m 396 172 q 344 191 365 172 q 323 252 323 210 q 344 313 323 296 q 396 331 365 331 q 447 313 426 331 q 468 252 468 296 q 447 191 468 210 q 396 172 426 172 m 396 648 q 344 667 365 648 q 323 728 323 686 q 344 789 323 771 q 396 806 365 806 q 447 789 426 806 q 468 728 468 771 q 447 667 468 686 q 396 648 426 648 z "
  },
  "\xF8": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 316 -1 362 -14 q 232 37 271 12 l 172 -45 l 98 5 l 164 95 q 100 215 123 146 q 77 373 77 285 q 169 656 77 556 q 420 757 261 757 q 520 743 473 757 q 605 704 567 730 l 663 785 l 739 735 l 673 646 q 736 528 713 596 q 760 373 760 459 m 194 373 q 202 271 194 317 q 230 189 211 224 l 547 623 q 490 652 522 642 q 418 662 457 662 q 248 585 302 662 q 194 373 194 509 m 643 373 q 634 472 643 427 q 608 552 625 517 l 290 117 q 347 90 314 99 q 418 80 380 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 z "
  },
  "\xF9": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 380 1064 q 420 995 396 1033 q 471 920 444 956 q 520 858 498 884 l 520 842 l 444 842 q 390 888 419 861 q 333 946 361 916 q 281 1003 304 976 q 245 1050 258 1031 l 245 1064 l 380 1064 z "
  },
  "\xFA": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 623 1064 l 623 1050 q 586 1003 609 1031 q 534 946 562 976 q 476 888 505 916 q 423 842 448 861 l 348 842 l 348 858 q 395 920 370 884 q 446 995 421 956 q 486 1064 470 1033 l 623 1064 z "
  },
  "\xFB": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 484 1063 q 532 995 501 1033 q 596 920 562 956 q 656 857 630 883 l 656 842 l 576 842 q 501 900 540 865 q 426 972 463 935 q 352 900 389 935 q 277 842 314 866 l 200 842 l 200 857 q 259 920 226 884 q 322 995 292 957 q 370 1063 352 1033 l 484 1063 z "
  },
  "\xFC": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 234 945 q 252 995 234 979 q 295 1010 269 1010 q 339 995 321 1010 q 357 945 357 979 q 339 896 357 912 q 295 879 321 879 q 252 896 269 879 q 234 945 234 912 m 494 945 q 512 995 494 979 q 555 1010 530 1010 q 599 995 581 1010 q 617 945 617 979 q 599 896 617 912 q 555 879 581 879 q 512 896 530 879 q 494 945 494 912 z "
  },
  "\xFD": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 544 1064 l 544 1050 q 507 1003 530 1031 q 455 946 484 976 q 398 888 427 916 q 345 842 369 861 l 269 842 l 269 858 q 317 920 291 884 q 367 995 342 956 q 408 1064 391 1033 l 544 1064 z "
  },
  "\xFE": {
    ha: 850,
    x_min: 119,
    x_max: 772,
    o: "m 772 374 q 734 161 772 247 q 628 31 696 75 q 467 -14 559 -14 q 362 2 407 -14 q 286 44 317 18 q 232 102 254 70 l 224 102 q 227 66 225 90 q 231 18 229 43 q 232 -22 232 -6 l 232 -332 l 119 -332 l 119 1055 l 232 1055 l 232 743 q 231 688 232 722 q 228 635 229 655 l 233 635 q 286 696 254 669 q 362 740 317 724 q 468 757 407 757 q 690 660 607 757 q 772 374 772 563 m 656 375 q 606 590 656 519 q 450 662 555 662 q 283 595 333 662 q 232 397 233 528 l 232 372 q 280 156 232 231 q 450 80 328 80 q 565 114 519 80 q 634 214 611 149 q 656 375 656 280 z "
  },
  "\xFF": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 155 945 q 173 995 155 979 q 216 1010 191 1010 q 261 995 243 1010 q 279 945 279 979 q 261 896 279 912 q 216 879 243 879 q 173 896 191 879 q 155 945 155 912 m 416 945 q 433 995 416 979 q 476 1010 451 1010 q 520 995 502 1010 q 538 945 538 979 q 520 896 538 912 q 476 879 502 879 q 433 896 451 879 q 416 945 416 912 z "
  },
  "\u0100": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 640 1183 l 640 1092 l 234 1092 l 234 1183 l 640 1183 z "
  },
  "\u0101": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 588 934 l 588 843 l 182 843 l 182 934 l 588 934 z "
  },
  "\u0102": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 654 1274 q 623 1178 649 1219 q 551 1114 597 1137 q 439 1090 505 1090 q 289 1140 340 1090 q 232 1274 237 1190 l 302 1274 q 323 1216 307 1236 q 370 1189 340 1196 q 442 1182 400 1182 q 509 1190 479 1182 q 558 1218 539 1198 q 582 1274 577 1238 l 654 1274 z "
  },
  "\u0103": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 602 1025 q 571 929 597 970 q 498 865 545 888 q 387 842 452 842 q 236 891 288 842 q 180 1025 185 941 l 250 1025 q 271 967 254 987 q 318 940 288 947 q 390 933 348 933 q 457 941 427 933 q 506 969 487 949 q 530 1025 525 989 l 602 1025 z "
  },
  "\u0104": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 745 -163 q 762 -212 745 -195 q 810 -229 779 -229 q 849 -225 833 -229 q 877 -220 865 -222 l 877 -293 q 838 -301 858 -298 q 792 -305 819 -305 q 687 -271 721 -305 q 652 -176 652 -237 q 672 -100 652 -137 q 722 -32 692 -63 q 781 20 751 -1 l 844 0 q 771 -81 796 -43 q 745 -163 745 -119 z "
  },
  "\u0105": {
    ha: 772,
    x_min: 64,
    x_max: 693,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 562 -163 q 578 -212 562 -195 q 627 -229 595 -229 q 665 -225 649 -229 q 693 -220 682 -222 l 693 -293 q 654 -301 674 -298 q 608 -305 635 -305 q 503 -271 537 -305 q 469 -176 469 -237 q 488 -100 469 -137 q 538 -32 508 -63 q 597 20 568 -1 l 660 0 q 587 -81 612 -43 q 562 -163 562 -119 z "
  },
  "\u0106": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 723 1313 l 723 1299 q 686 1252 709 1280 q 634 1195 663 1225 q 577 1137 606 1164 q 524 1090 548 1110 l 448 1090 l 448 1107 q 496 1169 470 1133 q 546 1243 522 1205 q 587 1313 570 1282 l 723 1313 z "
  },
  "\u0107": {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 591 1064 l 591 1050 q 554 1003 578 1031 q 503 946 531 976 q 445 888 474 916 q 392 842 416 861 l 317 842 l 317 858 q 364 920 338 884 q 414 995 390 956 q 455 1064 439 1033 l 591 1064 z "
  },
  "\u0108": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 585 1312 q 632 1243 602 1282 q 696 1168 663 1205 q 757 1105 730 1132 l 757 1090 l 677 1090 q 602 1149 640 1114 q 526 1221 563 1183 q 452 1149 490 1183 q 378 1090 414 1115 l 300 1090 l 300 1105 q 359 1169 326 1133 q 422 1244 392 1206 q 470 1312 452 1282 l 585 1312 z "
  },
  "\u0109": {
    ha: 665,
    x_min: 77,
    x_max: 625,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 453 1063 q 500 995 470 1033 q 565 920 531 956 q 625 857 599 883 l 625 842 l 545 842 q 470 900 509 865 q 395 972 431 935 q 320 900 358 935 q 246 842 283 866 l 169 842 l 169 857 q 228 920 195 884 q 291 995 260 957 q 338 1063 321 1033 l 453 1063 z "
  },
  "\u010A": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 529 1270 q 577 1252 557 1270 q 597 1196 597 1234 q 577 1141 597 1159 q 529 1122 557 1122 q 480 1141 500 1122 q 461 1196 461 1159 q 480 1252 461 1234 q 529 1270 500 1270 z "
  },
  "\u010B": {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 396 1021 q 444 1003 424 1021 q 464 947 464 985 q 444 892 464 910 q 396 873 424 873 q 348 892 367 873 q 328 947 328 910 q 348 1003 328 985 q 396 1021 367 1021 z "
  },
  "\u010C": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 468 1090 q 420 1159 450 1122 q 356 1233 389 1196 q 298 1295 323 1269 l 298 1312 l 376 1312 q 451 1252 412 1287 q 524 1179 490 1217 q 600 1252 561 1217 q 675 1312 638 1287 l 755 1312 l 755 1295 q 694 1233 728 1269 q 630 1159 661 1196 q 583 1090 600 1122 l 468 1090 z "
  },
  "\u010D": {
    ha: 665,
    x_min: 77,
    x_max: 623,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 336 842 q 288 910 318 873 q 224 984 257 947 q 166 1046 191 1020 l 166 1063 l 243 1063 q 319 1003 280 1038 q 392 930 358 968 q 467 1003 429 968 q 543 1063 506 1038 l 623 1063 l 623 1046 q 562 984 596 1020 q 498 910 528 947 q 450 842 467 873 l 336 842 z "
  },
  "\u010E": {
    ha: 1008,
    x_min: 136,
    x_max: 923,
    o: "m 923 505 q 862 225 923 338 q 685 57 801 113 q 405 0 570 0 l 136 0 l 136 991 l 435 991 q 695 936 586 991 q 864 773 804 881 q 923 505 923 665 m 802 501 q 757 722 802 635 q 627 851 713 808 q 417 893 541 893 l 251 893 l 251 99 l 391 99 q 699 200 596 99 q 802 501 802 301 m 441 1090 q 393 1159 423 1122 q 329 1233 362 1196 q 271 1295 296 1269 l 271 1312 l 349 1312 q 424 1252 385 1287 q 497 1179 463 1217 q 572 1252 534 1217 q 648 1312 611 1287 l 728 1312 l 728 1295 q 667 1233 701 1269 q 603 1159 633 1196 q 555 1090 572 1122 l 441 1090 z "
  },
  "\u010F": {
    ha: 850,
    x_min: 77,
    x_max: 944,
    o: "m 383 -14 q 160 83 242 -14 q 77 369 77 179 q 161 659 77 561 q 385 757 245 757 q 488 741 444 757 q 564 700 532 726 q 618 640 596 673 l 626 640 q 621 698 623 661 q 618 758 618 734 l 618 1055 l 730 1055 l 730 0 l 640 0 l 623 106 l 618 106 q 565 45 597 73 q 488 2 532 18 q 383 -14 444 -14 m 401 80 q 570 148 520 80 q 619 349 619 216 l 619 370 q 572 587 619 511 q 401 663 525 663 q 245 584 297 663 q 194 366 194 504 q 245 155 194 229 q 401 80 296 80 m 944 1055 l 944 1044 q 922 980 938 1017 q 887 903 907 942 q 846 833 867 865 l 784 833 l 784 849 q 799 895 791 869 q 812 949 806 920 q 824 1005 819 978 q 832 1055 829 1033 l 944 1055 z "
  },
  "\u0110": {
    ha: 1008,
    x_min: 39,
    x_max: 923,
    o: "m 435 991 q 695 936 585 991 q 864 773 804 881 q 923 505 923 665 q 862 225 923 338 q 685 57 801 113 q 404 0 569 0 l 144 0 l 144 440 l 39 440 l 39 541 l 144 541 l 144 991 l 435 991 m 417 893 l 259 893 l 259 541 l 511 541 l 511 440 l 259 440 l 259 99 l 391 99 q 699 200 597 99 q 802 501 802 301 q 757 722 802 635 q 626 851 712 808 q 417 893 541 893 z "
  },
  "\u0111": {
    ha: 852,
    x_min: 77,
    x_max: 836,
    o: "m 383 -14 q 160 82 242 -14 q 77 366 77 178 q 161 657 77 561 q 385 753 245 753 q 488 738 444 753 q 564 696 532 722 q 618 637 596 669 l 626 637 q 620 694 623 658 q 618 755 618 731 l 618 844 l 317 844 l 317 929 l 618 929 l 618 1055 l 730 1055 l 730 929 l 836 929 l 836 844 l 730 844 l 730 0 l 638 0 l 622 106 l 616 106 q 564 45 595 73 q 487 2 532 18 q 383 -14 443 -14 m 401 80 q 570 147 521 80 q 618 347 618 214 l 618 368 q 572 585 618 511 q 401 660 525 660 q 246 582 297 660 q 195 366 195 504 q 245 154 195 229 q 401 80 296 80 z "
  },
  "\u0112": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 627 1183 l 627 1092 l 221 1092 l 221 1183 l 627 1183 z "
  },
  "\u0113": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 598 934 l 598 843 l 192 843 l 192 934 l 598 934 z "
  },
  "\u0114": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 640 1274 q 609 1178 635 1219 q 537 1114 583 1137 q 426 1090 491 1090 q 275 1140 326 1090 q 218 1274 224 1190 l 289 1274 q 310 1216 293 1236 q 357 1189 327 1196 q 429 1182 387 1182 q 496 1190 466 1182 q 545 1218 526 1198 q 568 1274 564 1238 l 640 1274 z "
  },
  "\u0115": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 612 1025 q 581 929 607 970 q 509 865 555 888 q 397 842 463 842 q 247 891 298 842 q 190 1025 195 941 l 260 1025 q 281 967 264 987 q 328 940 298 947 q 400 933 358 933 q 467 941 437 933 q 516 969 497 949 q 540 1025 535 989 l 612 1025 z "
  },
  "\u0116": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 426 1270 q 474 1252 454 1270 q 494 1196 494 1234 q 474 1141 494 1159 q 426 1122 454 1122 q 377 1141 397 1122 q 358 1196 358 1159 q 377 1252 358 1234 q 426 1270 397 1270 z "
  },
  "\u0117": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 397 1021 q 445 1003 425 1021 q 465 947 465 985 q 445 892 465 910 q 397 873 425 873 q 348 892 368 873 q 329 947 329 910 q 348 1003 329 985 q 397 1021 368 1021 z "
  },
  "\u0118": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 549 -163 q 566 -212 549 -195 q 614 -229 583 -229 q 653 -225 637 -229 q 681 -220 669 -222 l 681 -293 q 642 -301 662 -298 q 596 -305 623 -305 q 491 -271 525 -305 q 456 -176 456 -237 q 476 -100 456 -137 q 526 -32 496 -63 q 585 20 555 -1 l 648 0 q 575 -81 600 -43 q 549 -163 549 -119 z "
  },
  "\u0119": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 534 -163 q 551 -212 534 -195 q 599 -229 568 -229 q 638 -225 621 -229 q 665 -220 654 -222 l 665 -293 q 627 -301 646 -298 q 581 -305 608 -305 q 476 -271 510 -305 q 441 -176 441 -237 q 461 -100 441 -137 q 511 -32 481 -63 q 570 22 541 0 l 673 34 q 588 -43 618 -9 q 546 -105 558 -77 q 534 -163 534 -134 m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 z "
  },
  "\u011A": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 366 1090 q 318 1159 349 1122 q 255 1233 288 1196 q 197 1295 222 1269 l 197 1312 l 274 1312 q 350 1252 311 1287 q 422 1179 389 1217 q 498 1252 459 1217 q 573 1312 536 1287 l 653 1312 l 653 1295 q 593 1233 627 1269 q 528 1159 559 1196 q 481 1090 498 1122 l 366 1090 z "
  },
  "\u011B": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 336 842 q 288 910 319 873 q 225 984 258 947 q 167 1046 192 1020 l 167 1063 l 244 1063 q 320 1003 281 1038 q 393 930 359 968 q 468 1003 429 968 q 543 1063 507 1038 l 623 1063 l 623 1046 q 563 984 597 1020 q 498 910 529 947 q 451 842 468 873 l 336 842 z "
  },
  "\u011C": {
    ha: 1010,
    x_min: 85,
    x_max: 906,
    o: "m 559 519 l 906 519 l 906 39 q 746 -1 828 12 q 562 -14 663 -14 q 301 48 407 -14 q 140 224 195 110 q 85 496 85 338 q 145 764 85 650 q 321 942 206 879 q 597 1006 436 1006 q 754 990 680 1006 q 892 947 829 975 l 848 847 q 727 888 793 871 q 591 905 661 905 q 383 854 469 905 q 251 713 296 804 q 205 496 205 621 q 245 280 205 372 q 370 137 285 188 q 588 86 454 86 q 703 94 655 86 q 791 113 751 102 l 791 416 l 559 416 l 559 519 m 620 1312 q 667 1243 637 1282 q 732 1168 698 1205 q 792 1105 766 1132 l 792 1090 l 712 1090 q 637 1149 675 1114 q 562 1221 598 1183 q 487 1149 525 1183 q 413 1090 450 1115 l 336 1090 l 336 1105 q 394 1169 361 1133 q 457 1244 427 1206 q 505 1312 488 1282 l 620 1312 z "
  },
  "\u011D": {
    ha: 754,
    x_min: 21,
    x_max: 726,
    o: "m 326 -334 q 100 -279 180 -334 q 21 -126 21 -224 q 65 -7 21 -56 q 189 59 110 43 q 139 100 159 73 q 118 162 118 127 q 141 234 118 203 q 210 293 163 264 q 116 373 152 317 q 79 505 79 430 q 113 642 79 585 q 209 728 146 699 q 361 758 272 758 q 401 756 381 758 q 439 752 421 755 q 471 745 458 749 l 726 745 l 726 672 l 589 655 q 623 591 610 629 q 637 509 637 554 q 562 332 637 397 q 355 267 486 267 q 291 272 323 267 q 240 231 258 254 q 223 180 223 209 q 236 145 223 158 q 275 126 250 132 q 335 121 300 121 l 466 121 q 652 70 587 121 q 717 -79 717 19 q 616 -268 717 -202 q 326 -334 516 -334 m 330 -245 q 483 -227 422 -245 q 573 -173 543 -208 q 604 -90 604 -138 q 583 -23 604 -45 q 524 8 563 0 q 427 16 484 16 l 298 16 q 211 0 248 16 q 154 -46 174 -16 q 134 -122 134 -77 q 184 -214 134 -182 q 330 -245 235 -245 m 359 349 q 480 389 439 349 q 521 508 521 430 q 479 633 521 591 q 357 675 438 675 q 238 632 280 675 q 197 506 197 589 q 239 389 197 430 q 359 349 281 349 m 414 1063 q 462 995 431 1033 q 526 920 492 956 q 587 857 560 883 l 587 842 l 507 842 q 431 900 470 865 q 356 972 393 935 q 282 900 319 935 q 208 842 244 866 l 130 842 l 130 857 q 189 920 156 884 q 252 995 222 957 q 300 1063 282 1033 l 414 1063 z "
  },
  "\u011E": {
    ha: 1010,
    x_min: 85,
    x_max: 906,
    o: "m 559 519 l 906 519 l 906 39 q 746 -1 828 12 q 562 -14 663 -14 q 301 48 407 -14 q 140 224 195 110 q 85 496 85 338 q 145 764 85 650 q 321 942 206 879 q 597 1006 436 1006 q 754 990 680 1006 q 892 947 829 975 l 848 847 q 727 888 793 871 q 591 905 661 905 q 383 854 469 905 q 251 713 296 804 q 205 496 205 621 q 245 280 205 372 q 370 137 285 188 q 588 86 454 86 q 703 94 655 86 q 791 113 751 102 l 791 416 l 559 416 l 559 519 m 777 1274 q 746 1178 772 1219 q 674 1114 720 1137 q 563 1090 628 1090 q 412 1140 463 1090 q 355 1274 361 1190 l 426 1274 q 447 1216 430 1236 q 494 1189 464 1196 q 566 1182 524 1182 q 633 1190 603 1182 q 682 1218 663 1198 q 705 1274 701 1238 l 777 1274 z "
  },
  "\u011F": {
    ha: 754,
    x_min: 21,
    x_max: 726,
    o: "m 326 -334 q 100 -279 180 -334 q 21 -126 21 -224 q 65 -7 21 -56 q 189 59 110 43 q 139 100 159 73 q 118 162 118 127 q 141 234 118 203 q 210 293 163 264 q 116 373 152 317 q 79 505 79 430 q 113 642 79 585 q 209 728 146 699 q 361 758 272 758 q 401 756 381 758 q 439 752 421 755 q 471 745 458 749 l 726 745 l 726 672 l 589 655 q 623 591 610 629 q 637 509 637 554 q 562 332 637 397 q 355 267 486 267 q 291 272 323 267 q 240 231 258 254 q 223 180 223 209 q 236 145 223 158 q 275 126 250 132 q 335 121 300 121 l 466 121 q 652 70 587 121 q 717 -79 717 19 q 616 -268 717 -202 q 326 -334 516 -334 m 330 -245 q 483 -227 422 -245 q 573 -173 543 -208 q 604 -90 604 -138 q 583 -23 604 -45 q 524 8 563 0 q 427 16 484 16 l 298 16 q 211 0 248 16 q 154 -46 174 -16 q 134 -122 134 -77 q 184 -214 134 -182 q 330 -245 235 -245 m 359 349 q 480 389 439 349 q 521 508 521 430 q 479 633 521 591 q 357 675 438 675 q 238 632 280 675 q 197 506 197 589 q 239 389 197 430 q 359 349 281 349 m 569 1025 q 538 929 564 970 q 466 865 512 888 q 355 842 420 842 q 204 891 255 842 q 147 1025 153 941 l 218 1025 q 239 967 222 987 q 286 940 256 947 q 357 933 315 933 q 425 941 395 933 q 473 969 454 949 q 497 1025 492 989 l 569 1025 z "
  },
  "\u0120": {
    ha: 1010,
    x_min: 85,
    x_max: 906,
    o: "m 559 519 l 906 519 l 906 39 q 746 -1 828 12 q 562 -14 663 -14 q 301 48 407 -14 q 140 224 195 110 q 85 496 85 338 q 145 764 85 650 q 321 942 206 879 q 597 1006 436 1006 q 754 990 680 1006 q 892 947 829 975 l 848 847 q 727 888 793 871 q 591 905 661 905 q 383 854 469 905 q 251 713 296 804 q 205 496 205 621 q 245 280 205 372 q 370 137 285 188 q 588 86 454 86 q 703 94 655 86 q 791 113 751 102 l 791 416 l 559 416 l 559 519 m 564 1270 q 611 1252 591 1270 q 631 1196 631 1234 q 611 1141 631 1159 q 564 1122 591 1122 q 515 1141 534 1122 q 496 1196 496 1159 q 515 1252 496 1234 q 564 1270 534 1270 z "
  },
  "\u0121": {
    ha: 754,
    x_min: 21,
    x_max: 726,
    o: "m 326 -334 q 100 -279 180 -334 q 21 -126 21 -224 q 65 -7 21 -56 q 189 59 110 43 q 139 100 159 73 q 118 162 118 127 q 141 234 118 203 q 210 293 163 264 q 116 373 152 317 q 79 505 79 430 q 113 642 79 585 q 209 728 146 699 q 361 758 272 758 q 401 756 381 758 q 439 752 421 755 q 471 745 458 749 l 726 745 l 726 672 l 589 655 q 623 591 610 629 q 637 509 637 554 q 562 332 637 397 q 355 267 486 267 q 291 272 323 267 q 240 231 258 254 q 223 180 223 209 q 236 145 223 158 q 275 126 250 132 q 335 121 300 121 l 466 121 q 652 70 587 121 q 717 -79 717 19 q 616 -268 717 -202 q 326 -334 516 -334 m 330 -245 q 483 -227 422 -245 q 573 -173 543 -208 q 604 -90 604 -138 q 583 -23 604 -45 q 524 8 563 0 q 427 16 484 16 l 298 16 q 211 0 248 16 q 154 -46 174 -16 q 134 -122 134 -77 q 184 -214 134 -182 q 330 -245 235 -245 m 359 349 q 480 389 439 349 q 521 508 521 430 q 479 633 521 591 q 357 675 438 675 q 238 632 280 675 q 197 506 197 589 q 239 389 197 430 q 359 349 281 349 m 359 1021 q 407 1003 387 1021 q 427 947 427 985 q 407 892 427 910 q 359 873 387 873 q 311 892 330 873 q 292 947 292 910 q 311 1003 292 985 q 359 1021 330 1021 z "
  },
  "\u0122": {
    ha: 1010,
    x_min: 85,
    x_max: 906,
    o: "m 559 519 l 906 519 l 906 39 q 746 -1 828 12 q 562 -14 663 -14 q 301 48 407 -14 q 140 224 195 110 q 85 496 85 338 q 145 764 85 650 q 321 942 206 879 q 597 1006 436 1006 q 754 990 680 1006 q 892 947 829 975 l 848 847 q 727 888 793 871 q 591 905 661 905 q 383 854 469 905 q 251 713 296 804 q 205 496 205 621 q 245 280 205 372 q 370 137 285 188 q 588 86 454 86 q 703 94 655 86 q 791 113 751 102 l 791 416 l 559 416 l 559 519 m 640 -85 l 640 -96 q 617 -161 633 -123 q 579 -238 601 -199 q 532 -307 557 -277 l 471 -307 l 471 -291 q 493 -231 481 -268 q 515 -154 505 -194 q 528 -85 525 -115 l 640 -85 z "
  },
  "\u0123": {
    ha: 754,
    x_min: 21,
    x_max: 726,
    o: "m 452 1063 l 452 1048 q 429 987 441 1025 q 407 910 416 950 q 393 841 397 871 l 281 841 l 281 854 q 304 917 288 880 q 342 994 320 955 q 389 1063 364 1033 l 452 1063 m 326 -334 q 100 -279 180 -334 q 21 -126 21 -224 q 65 -7 21 -56 q 189 59 110 43 q 139 100 159 73 q 118 162 118 127 q 141 234 118 203 q 210 293 163 264 q 116 373 152 317 q 79 505 79 430 q 113 642 79 585 q 209 728 146 699 q 361 758 272 758 q 401 756 381 758 q 439 752 421 755 q 471 745 458 749 l 726 745 l 726 672 l 589 655 q 623 591 610 629 q 637 509 637 554 q 562 332 637 397 q 355 267 486 267 q 291 272 323 267 q 240 231 258 254 q 223 180 223 209 q 236 145 223 158 q 275 126 250 132 q 335 121 300 121 l 466 121 q 652 70 587 121 q 717 -79 717 19 q 616 -268 717 -202 q 326 -334 516 -334 m 330 -245 q 483 -227 422 -245 q 573 -173 543 -208 q 604 -90 604 -138 q 583 -23 604 -45 q 524 8 563 0 q 427 16 484 16 l 298 16 q 211 0 248 16 q 154 -46 174 -16 q 134 -122 134 -77 q 184 -214 134 -182 q 330 -245 235 -245 m 359 349 q 480 389 439 349 q 521 508 521 430 q 479 633 521 591 q 357 675 438 675 q 238 632 280 675 q 197 506 197 589 q 239 389 197 430 q 359 349 281 349 z "
  },
  "\u0124": {
    ha: 1024,
    x_min: 136,
    x_max: 887,
    o: "m 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 772 569 l 772 991 l 887 991 l 887 0 m 572 1312 q 619 1243 589 1282 q 684 1168 650 1205 q 744 1105 718 1132 l 744 1090 l 664 1090 q 589 1149 627 1114 q 513 1221 550 1183 q 439 1149 477 1183 q 365 1090 401 1115 l 288 1090 l 288 1105 q 346 1169 313 1133 q 409 1244 379 1206 q 457 1312 439 1282 l 572 1312 z "
  },
  "\u0125": {
    ha: 852,
    x_min: -50,
    x_max: 739,
    o: "m 231 1055 l 231 740 q 230 685 231 713 q 225 635 229 658 l 233 635 q 291 701 256 674 q 372 742 327 728 q 469 755 418 755 q 618 727 558 755 q 708 639 678 699 q 739 484 739 579 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 323 630 372 662 q 253 538 274 599 q 231 389 231 477 l 231 0 l 119 0 l 119 1055 l 231 1055 m 235 1376 q 282 1307 252 1345 q 347 1232 313 1269 q 407 1169 380 1196 l 407 1154 l 327 1154 q 252 1213 290 1178 q 176 1284 213 1247 q 102 1213 140 1247 q 28 1154 64 1179 l -50 1154 l -50 1169 q 9 1233 -24 1196 q 72 1308 42 1270 q 120 1376 102 1345 l 235 1376 z "
  },
  "\u0126": {
    ha: 1024,
    x_min: 0,
    x_max: 1023,
    o: "m 136 0 l 136 730 l 0 730 l 0 823 l 136 823 l 136 991 l 251 991 l 251 823 l 772 823 l 772 991 l 887 991 l 887 823 l 1023 823 l 1023 730 l 887 730 l 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 m 251 569 l 772 569 l 772 730 l 251 730 l 251 569 z "
  },
  "\u0127": {
    ha: 852,
    x_min: 14,
    x_max: 739,
    o: "m 231 1055 l 231 928 l 530 928 l 530 843 l 231 843 l 231 715 q 230 661 231 688 q 225 611 229 634 l 233 611 q 291 677 256 650 q 373 718 327 704 q 470 732 418 732 q 618 704 559 732 q 708 615 678 675 q 739 460 739 555 l 739 0 l 627 0 l 627 452 q 585 591 627 545 q 455 637 543 637 q 323 606 372 637 q 253 514 274 574 q 231 365 231 453 l 231 0 l 119 0 l 119 843 l 14 843 l 14 928 l 119 928 l 119 1055 l 231 1055 z "
  },
  "\u0128": {
    ha: 388,
    x_min: -56,
    x_max: 448,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m -56 1093 q -41 1165 -52 1133 q -10 1219 -29 1197 q 35 1254 9 1242 q 93 1265 61 1265 q 153 1253 124 1265 q 207 1224 181 1240 q 257 1196 233 1208 q 303 1183 281 1183 q 354 1203 336 1183 q 381 1267 372 1223 l 448 1267 q 401 1140 439 1187 q 298 1093 363 1093 q 241 1106 269 1093 q 187 1134 213 1118 q 137 1163 161 1150 q 88 1175 112 1175 q 37 1155 55 1175 q 10 1093 20 1135 l -56 1093 z "
  },
  "\u0129": {
    ha: 351,
    x_min: -81,
    x_max: 423,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m -81 844 q -65 916 -77 884 q -35 970 -54 948 q 11 1005 -16 993 q 68 1017 37 1017 q 128 1004 100 1017 q 182 976 157 991 q 232 947 208 960 q 279 935 256 935 q 329 955 311 935 q 357 1018 347 975 l 423 1018 q 376 891 414 939 q 274 844 338 844 q 216 857 244 844 q 163 885 189 869 q 112 914 137 901 q 64 926 87 926 q 13 906 31 926 q -14 844 -5 886 l -81 844 z "
  },
  "\u012A": {
    ha: 388,
    x_min: -9,
    x_max: 397,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 397 1183 l 397 1092 l -9 1092 l -9 1183 l 397 1183 z "
  },
  "\u012B": {
    ha: 351,
    x_min: -28,
    x_max: 378,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 378 934 l 378 843 l -28 843 l -28 934 l 378 934 z "
  },
  "\u012C": {
    ha: 388,
    x_min: -17,
    x_max: 405,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 405 1274 q 374 1178 400 1219 q 302 1114 348 1137 q 191 1090 256 1090 q 40 1140 91 1090 q -17 1274 -12 1190 l 54 1274 q 75 1216 58 1236 q 121 1189 92 1196 q 193 1182 151 1182 q 260 1190 231 1182 q 309 1218 290 1198 q 333 1274 328 1238 l 405 1274 z "
  },
  "\u012D": {
    ha: 351,
    x_min: -31,
    x_max: 391,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 391 1025 q 360 929 387 970 q 288 865 334 888 q 177 842 242 842 q 26 891 77 842 q -31 1025 -25 941 l 40 1025 q 61 967 44 987 q 108 940 78 947 q 180 933 138 933 q 247 941 217 933 q 296 969 277 949 q 319 1025 315 989 l 391 1025 z "
  },
  "\u012E": {
    ha: 388,
    x_min: 60,
    x_max: 284,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 153 -163 q 170 -212 153 -195 q 218 -229 186 -229 q 256 -225 240 -229 q 284 -220 273 -222 l 284 -293 q 245 -301 265 -298 q 199 -305 226 -305 q 94 -271 128 -305 q 60 -176 60 -237 q 79 -100 60 -137 q 129 -32 99 -63 q 189 20 159 -1 l 251 0 q 178 -81 203 -43 q 153 -163 153 -119 z "
  },
  "\u012F": {
    ha: 351,
    x_min: 33,
    x_max: 258,
    o: "m 231 743 l 231 0 l 119 0 l 119 743 l 231 743 m 176 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 q 128 1003 109 985 q 176 1021 147 1021 m 126 -163 q 143 -212 126 -195 q 191 -229 160 -229 q 230 -225 214 -229 q 258 -220 246 -222 l 258 -293 q 219 -301 239 -298 q 173 -305 199 -305 q 67 -271 102 -305 q 33 -176 33 -237 q 53 -100 33 -137 q 102 -32 73 -63 q 162 20 132 -1 l 224 0 q 152 -81 177 -43 q 126 -163 126 -119 z "
  },
  "\u0130": {
    ha: 388,
    x_min: 128,
    x_max: 264,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 196 1270 q 244 1252 224 1270 q 264 1196 264 1234 q 244 1141 264 1159 q 196 1122 224 1122 q 148 1141 167 1122 q 128 1196 128 1159 q 148 1252 128 1234 q 196 1270 167 1270 z "
  },
  "\u0132": {
    ha: 761,
    x_min: 136,
    x_max: 633,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 380 -261 q 321 -256 347 -261 q 277 -243 295 -252 l 277 -145 q 323 -156 298 -152 q 378 -159 349 -159 q 448 -144 416 -159 q 498 -94 479 -130 q 517 5 517 -58 l 517 991 l 633 991 l 633 14 q 603 -140 633 -79 q 515 -231 572 -201 q 380 -261 458 -261 z "
  },
  "\u0133": {
    ha: 701,
    x_min: 109,
    x_max: 595,
    o: "m 231 743 l 231 0 l 119 0 l 119 743 l 231 743 m 176 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 q 128 1003 109 985 q 176 1021 147 1021 m 380 -334 q 319 -329 345 -334 q 275 -317 294 -323 l 275 -225 q 317 -236 296 -232 q 366 -239 339 -239 q 441 -214 412 -239 q 469 -120 469 -188 l 469 743 l 582 743 l 582 -117 q 560 -234 582 -185 q 494 -308 538 -282 q 380 -334 449 -334 m 459 947 q 478 1003 459 985 q 527 1021 498 1021 q 575 1003 555 1021 q 595 947 595 985 q 575 892 595 910 q 527 873 555 873 q 478 892 498 873 q 459 947 459 910 z "
  },
  "\u0134": {
    ha: 373,
    x_min: -111,
    x_max: 418,
    o: "m -7 -261 q -67 -256 -41 -261 q -111 -243 -93 -252 l -111 -145 q -64 -156 -90 -152 q -10 -159 -39 -159 q 60 -144 28 -159 q 111 -94 92 -130 q 130 5 130 -58 l 130 991 l 245 991 l 245 14 q 215 -140 245 -79 q 127 -231 184 -201 q -7 -261 71 -261 m 246 1312 q 294 1243 263 1282 q 358 1168 324 1205 q 418 1105 392 1132 l 418 1090 l 338 1090 q 263 1149 302 1114 q 188 1221 224 1183 q 114 1149 151 1183 q 39 1090 76 1115 l -38 1090 l -38 1105 q 21 1169 -12 1133 q 84 1244 54 1206 q 132 1312 114 1282 l 246 1312 z "
  },
  "\u0135": {
    ha: 351,
    x_min: -76,
    x_max: 406,
    o: "m 29 -334 q -31 -329 -5 -334 q -76 -317 -57 -323 l -76 -225 q -33 -236 -55 -232 q 16 -239 -12 -239 q 90 -214 62 -239 q 119 -120 119 -188 l 119 743 l 231 743 l 231 -117 q 210 -234 231 -185 q 143 -308 188 -282 q 29 -334 98 -334 m 233 1063 q 281 995 250 1033 q 345 920 311 956 q 406 857 379 883 l 406 842 l 326 842 q 250 900 289 865 q 175 972 212 935 q 101 900 138 935 q 26 842 63 866 l -51 842 l -51 857 q 8 920 -25 884 q 71 995 41 957 q 119 1063 101 1033 l 233 1063 z "
  },
  "\u0136": {
    ha: 850,
    x_min: 136,
    x_max: 850,
    o: "m 850 0 l 714 0 l 357 482 l 251 387 l 251 0 l 136 0 l 136 991 l 251 991 l 251 497 q 330 585 290 541 q 411 673 371 629 l 701 991 l 836 991 l 441 562 l 850 0 m 538 -85 l 538 -96 q 515 -161 531 -123 q 476 -238 498 -199 q 430 -307 454 -277 l 368 -307 l 368 -291 q 390 -231 378 -268 q 412 -154 402 -194 q 426 -85 422 -115 l 538 -85 z "
  },
  "\u0137": {
    ha: 730,
    x_min: 119,
    x_max: 719,
    o: "m 231 1055 l 231 507 q 229 441 231 480 q 225 372 227 402 l 230 372 q 272 425 244 390 q 318 480 299 459 l 565 743 l 697 743 l 398 426 l 719 0 l 583 0 l 321 352 l 231 269 l 231 0 l 119 0 l 119 1055 l 231 1055 m 451 -85 l 451 -96 q 428 -161 444 -123 q 390 -238 412 -199 q 343 -307 368 -277 l 281 -307 l 281 -291 q 303 -231 292 -268 q 326 -154 315 -194 q 339 -85 336 -115 l 451 -85 z "
  },
  "\u0138": {
    ha: 730,
    x_min: 119,
    x_max: 719,
    o: "m 696 743 l 414 415 l 719 0 l 585 0 l 335 342 l 238 258 l 238 0 l 119 0 l 119 743 l 238 743 l 238 549 q 236 440 238 494 q 230 354 233 386 l 233 354 q 261 391 246 372 q 290 427 277 410 l 559 743 l 696 743 z "
  },
  "\u0139": {
    ha: 725,
    x_min: 113,
    x_max: 691,
    o: "m 136 0 l 136 991 l 251 991 l 251 103 l 691 103 l 691 0 l 136 0 m 388 1313 l 388 1299 q 351 1252 374 1280 q 299 1195 328 1225 q 242 1137 271 1164 q 189 1090 213 1110 l 113 1090 l 113 1107 q 161 1169 135 1133 q 211 1243 186 1205 q 252 1313 235 1282 l 388 1313 z "
  },
  "\u013A": {
    ha: 351,
    x_min: 97,
    x_max: 372,
    o: "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 m 372 1377 l 372 1363 q 335 1316 358 1343 q 283 1258 311 1289 q 225 1201 254 1228 q 172 1154 197 1174 l 97 1154 l 97 1171 q 144 1233 119 1196 q 195 1307 170 1269 q 235 1377 219 1345 l 372 1377 z "
  },
  "\u013B": {
    ha: 725,
    x_min: 136,
    x_max: 691,
    o: "m 136 0 l 136 991 l 251 991 l 251 103 l 691 103 l 691 0 l 136 0 m 498 -85 l 498 -96 q 475 -161 491 -123 q 436 -238 458 -199 q 390 -307 414 -277 l 328 -307 l 328 -291 q 350 -231 338 -268 q 372 -154 362 -194 q 386 -85 382 -115 l 498 -85 z "
  },
  "\u013C": {
    ha: 351,
    x_min: 89,
    x_max: 258,
    o: "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 m 258 -85 l 258 -96 q 235 -161 252 -123 q 197 -238 219 -199 q 151 -307 175 -277 l 89 -307 l 89 -291 q 111 -231 99 -268 q 133 -154 123 -194 q 146 -85 143 -115 l 258 -85 z "
  },
  "\u013D": {
    ha: 725,
    x_min: 136,
    x_max: 691,
    o: "m 136 0 l 136 991 l 251 991 l 251 103 l 691 103 l 691 0 l 136 0 m 689 991 l 689 980 q 667 916 683 954 q 632 840 652 878 q 591 770 612 801 l 529 770 l 529 785 q 544 831 536 805 q 557 885 551 857 q 569 942 564 914 q 577 991 574 969 l 689 991 z "
  },
  "\u013E": {
    ha: 351,
    x_min: 119,
    x_max: 451,
    o: "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 m 451 1055 l 451 1044 q 429 980 445 1017 q 394 903 414 942 q 353 833 374 865 l 291 833 l 291 849 q 306 895 298 869 q 319 949 313 920 q 331 1005 326 978 q 339 1055 336 1033 l 451 1055 z "
  },
  "\u013F": {
    ha: 725,
    x_min: 136,
    x_max: 691,
    o: "m 136 0 l 136 991 l 251 991 l 251 103 l 691 103 l 691 0 l 136 0 m 528 575 q 575 557 555 575 q 595 501 595 539 q 575 446 595 464 q 528 427 555 427 q 479 446 498 427 q 460 501 460 464 q 479 557 460 539 q 528 575 498 575 z "
  },
  "\u0140": {
    ha: 363,
    x_min: 119,
    x_max: 425,
    o: "m 232 0 l 119 0 l 119 1055 l 232 1055 l 232 0 m 357 602 q 405 584 385 602 q 425 528 425 566 q 405 473 425 491 q 357 454 385 454 q 308 473 328 454 q 289 528 289 491 q 308 584 289 566 q 357 602 328 602 z "
  },
  "\u0141": {
    ha: 725,
    x_min: 18,
    x_max: 691,
    o: "m 136 0 l 136 349 l 63 307 l 18 383 l 136 455 l 136 991 l 251 991 l 251 523 l 447 640 l 493 558 l 251 416 l 251 103 l 691 103 l 691 0 l 136 0 z "
  },
  "\u0142": {
    ha: 351,
    x_min: -9,
    x_max: 363,
    o: "m 111 0 l 111 404 l 37 357 l -9 433 l 111 511 l 111 1055 l 224 1055 l 224 584 l 315 647 l 363 571 l 224 477 l 224 0 l 111 0 z "
  },
  "\u0143": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 m 720 1313 l 720 1299 q 683 1252 706 1280 q 631 1195 659 1225 q 573 1137 602 1164 q 520 1090 545 1110 l 445 1090 l 445 1107 q 492 1169 467 1133 q 543 1243 518 1205 q 583 1313 567 1282 l 720 1313 z "
  },
  "\u0144": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 671 692 603 757 q 739 484 739 627 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 281 592 332 662 q 231 389 231 522 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 m 625 1064 l 625 1050 q 588 1003 611 1031 q 536 946 564 976 q 478 888 507 916 q 425 842 450 861 l 350 842 l 350 858 q 397 920 372 884 q 448 995 423 956 q 488 1064 472 1033 l 625 1064 z "
  },
  "\u0145": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 m 606 -85 l 606 -96 q 583 -161 600 -123 q 545 -238 567 -199 q 498 -307 523 -277 l 437 -307 l 437 -291 q 459 -231 447 -268 q 481 -154 471 -194 q 494 -85 491 -115 l 606 -85 z "
  },
  "\u0146": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 671 692 603 757 q 739 484 739 627 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 281 592 332 662 q 231 389 231 522 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 m 509 -85 l 509 -96 q 486 -161 503 -123 q 448 -238 470 -199 q 401 -307 426 -277 l 340 -307 l 340 -291 q 362 -231 350 -268 q 384 -154 374 -194 q 397 -85 394 -115 l 509 -85 z "
  },
  "\u0147": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 m 465 1090 q 416 1159 447 1122 q 353 1233 386 1196 q 295 1295 320 1269 l 295 1312 l 372 1312 q 448 1252 409 1287 q 521 1179 487 1217 q 596 1252 557 1217 q 671 1312 635 1287 l 751 1312 l 751 1295 q 691 1233 725 1269 q 627 1159 657 1196 q 579 1090 596 1122 l 465 1090 z "
  },
  "\u0148": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 671 692 603 757 q 739 484 739 627 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 281 592 332 662 q 231 389 231 522 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 m 370 842 q 321 910 352 873 q 258 984 291 947 q 200 1046 225 1020 l 200 1063 l 277 1063 q 353 1003 314 1038 q 426 930 392 968 q 501 1003 463 968 q 576 1063 540 1038 l 656 1063 l 656 1046 q 596 984 630 1020 q 532 910 562 947 q 484 842 501 873 l 370 842 z "
  },
  "\u0149": {
    ha: 939,
    x_min: 1,
    x_max: 826,
    o: "m 558 757 q 758 692 690 757 q 826 484 826 627 l 826 0 l 715 0 l 715 477 q 672 616 715 570 q 543 662 630 662 q 369 592 419 662 q 319 389 319 522 l 319 0 l 206 0 l 206 743 l 297 743 l 314 636 l 320 636 q 380 702 344 675 q 463 743 417 729 q 558 757 508 757 m 191 991 l 201 977 q 170 870 189 927 q 129 758 151 814 q 84 652 106 701 l 1 652 q 22 734 12 690 q 42 824 33 779 q 59 912 52 869 q 73 991 67 955 l 191 991 z "
  },
  "\u014A": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 655 -261 q 594 -256 621 -261 q 549 -243 568 -252 l 549 -146 q 597 -156 570 -152 q 655 -159 625 -159 q 726 -145 693 -159 q 781 -96 760 -131 q 802 1 802 -60 l 237 833 l 232 833 q 237 758 234 805 q 241 658 239 711 q 243 555 243 604 l 243 0 l 136 0 l 136 991 l 268 991 l 806 185 l 811 185 q 807 260 809 216 q 804 355 805 304 q 802 455 802 406 l 802 991 l 911 991 l 911 7 q 880 -143 911 -83 q 791 -232 848 -203 q 655 -261 734 -261 z "
  },
  "\u014B": {
    ha: 852,
    x_min: 119,
    x_max: 740,
    o: "m 546 -334 q 490 -329 513 -334 q 449 -317 467 -323 l 449 -225 q 487 -236 467 -232 q 532 -239 507 -239 q 601 -214 574 -239 q 627 -120 627 -188 l 627 478 q 585 616 627 571 q 456 662 543 662 q 325 631 374 662 q 253 539 275 600 q 231 391 231 479 l 231 0 l 119 0 l 119 743 l 210 743 l 228 636 l 234 636 q 293 702 258 675 q 374 743 329 729 q 470 757 419 757 q 620 728 560 757 q 710 640 680 700 q 740 486 740 581 l 740 -117 q 719 -234 740 -185 q 654 -308 697 -282 q 546 -334 612 -334 z "
  },
  "\u014C": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 743 1183 l 743 1092 l 337 1092 l 337 1183 l 743 1183 z "
  },
  "\u014D": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 621 934 l 621 843 l 214 843 l 214 934 l 621 934 z "
  },
  "\u014E": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 757 1274 q 726 1178 752 1219 q 654 1114 700 1137 q 543 1090 608 1090 q 392 1140 443 1090 q 335 1274 340 1190 l 406 1274 q 427 1216 410 1236 q 473 1189 444 1196 q 545 1182 503 1182 q 612 1190 583 1182 q 661 1218 642 1198 q 685 1274 680 1238 l 757 1274 z "
  },
  "\u014F": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 634 1025 q 603 929 629 970 q 531 865 577 888 q 420 842 485 842 q 269 891 320 842 q 212 1025 218 941 l 283 1025 q 304 967 287 987 q 351 940 321 947 q 422 933 380 933 q 490 941 460 933 q 538 969 519 949 q 562 1025 557 989 l 634 1025 z "
  },
  "\u0150": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 861 1313 l 861 1299 q 829 1253 850 1280 q 782 1195 808 1225 q 729 1138 755 1165 q 679 1090 702 1110 l 614 1090 l 614 1107 q 657 1170 634 1133 q 702 1244 680 1206 q 738 1313 724 1282 l 861 1313 m 619 1313 l 619 1299 q 587 1253 608 1280 q 539 1195 566 1225 q 487 1138 513 1165 q 437 1090 460 1110 l 372 1090 l 372 1107 q 415 1170 392 1133 q 459 1244 437 1206 q 496 1313 481 1282 l 619 1313 z "
  },
  "\u0151": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 739 1064 l 739 1050 q 706 1004 727 1031 q 659 946 685 977 q 606 889 633 916 q 556 842 579 861 l 491 842 l 491 858 q 534 921 511 884 q 579 995 557 957 q 615 1064 601 1033 l 739 1064 m 496 1064 l 496 1050 q 464 1004 485 1031 q 417 946 443 977 q 364 889 391 916 q 314 842 337 861 l 249 842 l 249 858 q 292 921 269 884 q 336 995 315 957 q 373 1064 358 1033 l 496 1064 z "
  },
  "\u0152": {
    ha: 1284,
    x_min: 85,
    x_max: 1201,
    o: "m 535 1006 q 603 1002 570 1006 q 667 991 636 999 l 1201 991 l 1201 890 l 791 890 l 791 569 l 1175 569 l 1175 469 l 791 469 l 791 102 l 1201 102 l 1201 0 l 673 0 q 610 -9 643 -5 q 541 -12 576 -12 q 286 52 387 -12 q 135 230 184 115 q 85 498 85 345 q 135 766 85 652 q 284 943 184 880 q 535 1006 385 1006 m 545 904 q 394 876 458 904 q 288 795 330 848 q 225 667 246 743 q 205 497 205 592 q 241 279 205 371 q 353 137 277 187 q 543 87 428 87 q 616 93 581 87 q 677 109 650 99 l 677 884 q 616 899 650 895 q 545 904 583 904 z "
  },
  "\u0153": {
    ha: 1317,
    x_min: 76,
    x_max: 1244,
    o: "m 945 755 q 1106 714 1040 755 q 1208 597 1173 672 q 1244 420 1244 522 l 1244 351 l 743 351 q 805 148 746 214 q 976 83 865 83 q 1102 96 1048 83 q 1211 134 1155 109 l 1211 35 q 1101 -2 1155 9 q 975 -14 1048 -14 q 803 28 876 -14 q 688 150 730 69 q 576 28 648 70 q 410 -14 505 -14 q 236 32 311 -14 q 118 164 161 77 q 76 373 76 250 q 117 580 76 494 q 233 710 157 665 q 414 755 309 755 q 576 713 506 755 q 685 593 646 671 q 749 681 711 644 q 837 736 787 717 q 945 755 886 755 m 409 662 q 245 588 296 662 q 194 373 194 515 q 217 213 194 278 q 287 114 239 147 q 411 80 335 80 q 534 113 486 80 q 604 211 581 146 q 627 368 627 275 q 604 530 627 465 q 533 629 581 595 q 409 662 485 662 m 945 663 q 806 607 858 663 q 746 441 755 550 l 1124 441 q 1105 558 1124 508 q 1047 636 1086 608 q 945 663 1007 663 z "
  },
  "\u0154": {
    ha: 857,
    x_min: 136,
    x_max: 834,
    o: "m 404 991 q 605 961 526 991 q 724 869 685 931 q 764 712 764 808 q 735 581 764 633 q 661 496 707 528 q 562 446 614 463 l 834 0 l 700 0 l 457 414 l 251 414 l 251 0 l 136 0 l 136 991 l 404 991 m 397 892 l 251 892 l 251 511 l 408 511 q 587 561 530 511 q 644 707 644 610 q 584 850 644 808 q 397 892 523 892 m 628 1313 l 628 1299 q 591 1252 614 1280 q 539 1195 568 1225 q 482 1137 511 1164 q 429 1090 453 1110 l 353 1090 l 353 1107 q 401 1169 375 1133 q 451 1243 427 1205 q 492 1313 475 1282 l 628 1313 z "
  },
  "\u0155": {
    ha: 568,
    x_min: 119,
    x_max: 547,
    o: "m 456 757 q 503 754 479 757 q 547 748 528 752 l 532 644 q 492 651 514 648 q 450 654 469 654 q 365 636 405 654 q 296 584 326 618 q 249 504 266 551 q 232 399 232 456 l 232 0 l 119 0 l 119 743 l 212 743 l 224 606 l 229 606 q 285 682 252 648 q 360 736 317 716 q 456 757 404 757 m 526 1064 l 526 1050 q 489 1003 513 1031 q 437 946 466 976 q 380 888 409 916 q 327 842 351 861 l 252 842 l 252 858 q 299 920 273 884 q 349 995 325 956 q 390 1064 374 1033 l 526 1064 z "
  },
  "\u0156": {
    ha: 857,
    x_min: 136,
    x_max: 834,
    o: "m 404 991 q 605 961 526 991 q 724 869 685 931 q 764 712 764 808 q 735 581 764 633 q 661 496 707 528 q 562 446 614 463 l 834 0 l 700 0 l 457 414 l 251 414 l 251 0 l 136 0 l 136 991 l 404 991 m 397 892 l 251 892 l 251 511 l 408 511 q 587 561 530 511 q 644 707 644 610 q 584 850 644 808 q 397 892 523 892 m 535 -85 l 535 -96 q 512 -161 528 -123 q 474 -238 496 -199 q 427 -307 452 -277 l 366 -307 l 366 -291 q 388 -231 376 -268 q 410 -154 399 -194 q 423 -85 420 -115 l 535 -85 z "
  },
  "\u0157": {
    ha: 568,
    x_min: 85,
    x_max: 547,
    o: "m 456 757 q 503 754 479 757 q 547 748 528 752 l 532 644 q 492 651 514 648 q 450 654 469 654 q 365 636 405 654 q 296 584 326 618 q 249 504 266 551 q 232 399 232 456 l 232 0 l 119 0 l 119 743 l 212 743 l 224 606 l 229 606 q 285 682 252 648 q 360 736 317 716 q 456 757 404 757 m 254 -85 l 254 -96 q 231 -161 248 -123 q 193 -238 215 -199 q 146 -307 171 -277 l 85 -307 l 85 -291 q 107 -231 95 -268 q 129 -154 119 -194 q 142 -85 139 -115 l 254 -85 z "
  },
  "\u0158": {
    ha: 857,
    x_min: 136,
    x_max: 834,
    o: "m 404 991 q 605 961 526 991 q 724 869 685 931 q 764 712 764 808 q 735 581 764 633 q 661 496 707 528 q 562 446 614 463 l 834 0 l 700 0 l 457 414 l 251 414 l 251 0 l 136 0 l 136 991 l 404 991 m 397 892 l 251 892 l 251 511 l 408 511 q 587 561 530 511 q 644 707 644 610 q 584 850 644 808 q 397 892 523 892 m 373 1090 q 325 1159 355 1122 q 261 1233 294 1196 q 203 1295 229 1269 l 203 1312 l 281 1312 q 356 1252 317 1287 q 429 1179 395 1217 q 505 1252 466 1217 q 580 1312 543 1287 l 660 1312 l 660 1295 q 600 1233 633 1269 q 535 1159 566 1196 q 488 1090 505 1122 l 373 1090 z "
  },
  "\u0159": {
    ha: 568,
    x_min: 101,
    x_max: 557,
    o: "m 456 757 q 503 754 479 757 q 547 748 528 752 l 532 644 q 492 651 514 648 q 450 654 469 654 q 365 636 405 654 q 296 584 326 618 q 249 504 266 551 q 232 399 232 456 l 232 0 l 119 0 l 119 743 l 212 743 l 224 606 l 229 606 q 285 682 252 648 q 360 736 317 716 q 456 757 404 757 m 271 842 q 222 910 253 873 q 159 984 192 947 q 101 1046 126 1020 l 101 1063 l 178 1063 q 254 1003 215 1038 q 327 930 293 968 q 402 1003 363 968 q 477 1063 441 1038 l 557 1063 l 557 1046 q 497 984 531 1020 q 433 910 463 947 q 385 842 402 873 l 271 842 z "
  },
  "\u015A": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 m 592 1313 l 592 1299 q 555 1252 578 1280 q 503 1195 532 1225 q 446 1137 475 1164 q 393 1090 417 1110 l 317 1090 l 317 1107 q 365 1169 339 1133 q 415 1243 391 1205 q 456 1313 439 1282 l 592 1313 z "
  },
  "\u015B": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 m 528 1064 l 528 1050 q 491 1003 515 1031 q 439 946 468 976 q 382 888 411 916 q 329 842 353 861 l 254 842 l 254 858 q 301 920 275 884 q 351 995 327 956 q 392 1064 376 1033 l 528 1064 z "
  },
  "\u015C": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 m 454 1312 q 502 1243 471 1282 q 566 1168 532 1205 q 627 1105 600 1132 l 627 1090 l 547 1090 q 471 1149 510 1114 q 396 1221 433 1183 q 322 1149 359 1183 q 248 1090 284 1115 l 170 1090 l 170 1105 q 229 1169 196 1133 q 292 1244 262 1206 q 340 1312 322 1282 l 454 1312 z "
  },
  "\u015D": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 m 390 1063 q 437 995 407 1033 q 502 920 468 956 q 562 857 536 883 l 562 842 l 482 842 q 407 900 446 865 q 332 972 368 935 q 257 900 295 935 q 183 842 220 866 l 106 842 l 106 857 q 164 920 132 884 q 228 995 197 957 q 275 1063 258 1033 l 390 1063 z "
  },
  "\u015E": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 m 495 -194 q 444 -297 495 -260 q 295 -334 393 -334 q 255 -331 274 -334 q 224 -326 236 -329 l 224 -255 q 258 -260 237 -258 q 298 -262 278 -262 q 376 -247 349 -262 q 404 -197 404 -232 q 367 -142 404 -159 q 275 -119 331 -125 l 335 0 l 410 0 l 374 -76 q 435 -97 408 -83 q 479 -135 463 -111 q 495 -194 495 -159 z "
  },
  "\u015F": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 m 468 -194 q 417 -297 468 -260 q 268 -334 366 -334 q 228 -331 247 -334 q 197 -326 209 -329 l 197 -255 q 231 -260 210 -258 q 271 -262 251 -262 q 349 -247 322 -262 q 376 -197 376 -232 q 340 -142 376 -159 q 248 -119 304 -125 l 308 0 l 383 0 l 347 -76 q 408 -97 380 -83 q 452 -135 435 -111 q 468 -194 468 -159 z "
  },
  "\u0160": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 m 337 1090 q 289 1159 319 1122 q 225 1233 258 1196 q 168 1295 193 1269 l 168 1312 l 245 1312 q 320 1252 281 1287 q 393 1179 359 1217 q 469 1252 430 1217 q 544 1312 507 1287 l 624 1312 l 624 1295 q 564 1233 597 1269 q 499 1159 530 1196 q 452 1090 469 1122 l 337 1090 z "
  },
  "\u0161": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 m 273 842 q 224 910 255 873 q 161 984 194 947 q 103 1046 128 1020 l 103 1063 l 180 1063 q 256 1003 217 1038 q 329 930 295 968 q 404 1003 366 968 q 479 1063 443 1038 l 559 1063 l 559 1046 q 499 984 533 1020 q 435 910 465 947 q 387 842 404 873 l 273 842 z "
  },
  "\u021A": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 m 465 -85 l 465 -96 q 442 -161 458 -123 q 404 -238 426 -199 q 357 -307 382 -277 l 296 -307 l 296 -291 q 318 -231 306 -268 q 340 -154 330 -194 q 353 -85 350 -115 l 465 -85 z "
  },
  "\u021B": {
    ha: 495,
    x_min: 22,
    x_max: 463,
    o: "m 359 79 q 416 83 387 79 q 463 95 445 88 l 463 7 q 409 -7 444 -1 q 340 -14 374 -14 q 233 7 281 -14 q 156 77 185 28 q 127 214 127 127 l 127 655 l 22 655 l 22 710 l 128 754 l 173 916 l 241 916 l 241 743 l 458 743 l 458 655 l 241 655 l 241 218 q 273 113 241 148 q 359 79 305 79 m 376 -85 l 376 -96 q 353 -161 370 -123 q 315 -238 337 -199 q 269 -307 293 -277 l 207 -307 l 207 -291 q 229 -231 217 -268 q 251 -154 241 -194 q 264 -85 261 -115 l 376 -85 z "
  },
  "\u0164": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 m 323 1090 q 275 1159 306 1122 q 212 1233 245 1196 q 154 1295 179 1269 l 154 1312 l 231 1312 q 307 1252 268 1287 q 380 1179 346 1217 q 455 1252 416 1217 q 530 1312 494 1287 l 610 1312 l 610 1295 q 550 1233 584 1269 q 486 1159 516 1196 q 438 1090 455 1122 l 323 1090 z "
  },
  "\u0165": {
    ha: 495,
    x_min: 22,
    x_max: 637,
    o: "m 359 79 q 416 83 387 79 q 463 95 445 88 l 463 7 q 409 -7 444 -1 q 340 -14 374 -14 q 233 7 281 -14 q 156 77 185 28 q 127 214 127 127 l 127 655 l 22 655 l 22 710 l 128 754 l 173 916 l 241 916 l 241 743 l 458 743 l 458 655 l 241 655 l 241 218 q 273 113 241 148 q 359 79 305 79 m 637 1055 l 637 1044 q 616 980 631 1017 q 580 903 600 942 q 539 833 560 865 l 477 833 l 477 849 q 492 895 485 869 q 506 949 499 920 q 518 1005 513 978 q 526 1055 523 1033 l 637 1055 z "
  },
  "\u0166": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 323 0 l 323 456 l 110 456 l 110 551 l 323 551 l 323 888 l 12 888 l 12 991 l 751 991 l 751 888 l 438 888 l 438 551 l 650 551 l 650 456 l 438 456 l 438 0 l 323 0 z "
  },
  "\u0167": {
    ha: 495,
    x_min: 22,
    x_max: 463,
    o: "m 33 389 l 33 475 l 444 475 l 444 389 l 33 389 m 359 79 q 416 83 387 79 q 463 95 445 88 l 463 7 q 409 -7 444 -1 q 340 -14 374 -14 q 233 7 281 -14 q 156 77 185 28 q 127 214 127 127 l 127 655 l 22 655 l 22 710 l 128 754 l 173 916 l 241 916 l 241 743 l 458 743 l 458 655 l 241 655 l 241 218 q 273 113 241 148 q 359 79 305 79 z "
  },
  "\u0168": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 255 1093 q 271 1165 259 1133 q 301 1219 282 1197 q 346 1254 320 1242 q 404 1265 372 1265 q 464 1253 435 1265 q 518 1224 492 1240 q 568 1196 544 1208 q 614 1183 592 1183 q 665 1203 647 1183 q 692 1267 683 1223 l 759 1267 q 712 1140 750 1187 q 610 1093 674 1093 q 552 1106 580 1093 q 498 1134 524 1118 q 448 1163 473 1150 q 399 1175 423 1175 q 349 1155 366 1175 q 321 1093 331 1135 l 255 1093 z "
  },
  "\u0169": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 173 844 q 189 916 177 884 q 219 970 200 948 q 264 1005 238 993 q 322 1017 290 1017 q 382 1004 353 1017 q 436 976 410 991 q 486 947 462 960 q 532 935 510 935 q 583 955 565 935 q 610 1018 601 975 l 677 1018 q 630 891 668 939 q 528 844 592 844 q 470 857 498 844 q 416 885 442 869 q 366 914 391 901 q 317 926 341 926 q 267 906 284 926 q 239 844 249 886 l 173 844 z "
  },
  "\u016A": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 709 1183 l 709 1092 l 303 1092 l 303 1183 l 709 1183 z "
  },
  "\u016B": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 629 934 l 629 843 l 222 843 l 222 934 l 629 934 z "
  },
  "\u016C": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 723 1274 q 692 1178 718 1219 q 620 1114 666 1137 q 509 1090 574 1090 q 358 1140 409 1090 q 301 1274 307 1190 l 372 1274 q 393 1216 376 1236 q 439 1189 410 1196 q 511 1182 469 1182 q 578 1190 549 1182 q 627 1218 608 1198 q 651 1274 646 1238 l 723 1274 z "
  },
  "\u016D": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 642 1025 q 611 929 637 970 q 539 865 585 888 q 428 842 493 842 q 277 891 328 842 q 220 1025 226 941 l 291 1025 q 312 967 295 987 q 359 940 329 947 q 431 933 389 933 q 498 941 468 933 q 547 969 528 949 q 570 1025 566 989 l 642 1025 z "
  },
  "\u016E": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 507 1091 q 399 1130 441 1091 q 357 1238 357 1168 q 399 1344 357 1305 q 507 1383 441 1383 q 616 1344 572 1383 q 660 1239 660 1305 q 616 1130 660 1169 q 507 1091 573 1091 m 507 1156 q 566 1178 543 1156 q 589 1238 589 1200 q 565 1297 589 1275 q 507 1318 542 1318 q 450 1297 473 1318 q 427 1238 427 1275 q 448 1178 427 1200 q 507 1156 469 1156 z "
  },
  "\u016F": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 427 842 q 319 881 361 842 q 277 989 277 920 q 318 1095 277 1057 q 427 1134 360 1134 q 535 1095 491 1134 q 579 990 579 1057 q 536 881 579 920 q 427 842 492 842 m 427 907 q 485 929 463 907 q 508 989 508 951 q 485 1048 508 1026 q 427 1069 461 1069 q 369 1048 393 1069 q 346 989 346 1026 q 367 929 346 951 q 427 907 388 907 z "
  },
  "\u0170": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 827 1313 l 827 1299 q 795 1253 816 1280 q 748 1195 774 1225 q 695 1138 722 1165 q 645 1090 668 1110 l 580 1090 l 580 1107 q 623 1170 600 1133 q 668 1244 646 1206 q 704 1313 690 1282 l 827 1313 m 585 1313 l 585 1299 q 553 1253 574 1280 q 506 1195 532 1225 q 453 1138 479 1165 q 403 1090 426 1110 l 338 1090 l 338 1107 q 381 1170 358 1133 q 425 1244 404 1206 q 462 1313 447 1282 l 585 1313 z "
  },
  "\u0171": {
    ha: 852,
    x_min: 111,
    x_max: 746,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 746 1064 l 746 1050 q 713 1004 734 1031 q 666 946 692 977 q 613 889 640 916 q 564 842 587 861 l 498 842 l 498 858 q 542 921 519 884 q 587 995 565 957 q 623 1064 608 1033 l 746 1064 m 504 1064 l 504 1050 q 471 1004 492 1031 q 424 946 450 977 q 371 889 398 916 q 321 842 345 861 l 256 842 l 256 858 q 299 921 277 884 q 344 995 322 957 q 380 1064 366 1033 l 504 1064 z "
  },
  "\u0172": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 642 -151 q 659 -211 642 -193 q 707 -229 676 -229 q 745 -225 729 -229 q 773 -220 762 -222 l 773 -293 q 735 -301 754 -298 q 689 -305 715 -305 q 583 -270 617 -305 q 549 -164 549 -234 q 571 -77 549 -120 q 625 1 593 -35 q 686 57 657 36 l 766 69 q 698 -13 726 24 q 656 -83 670 -50 q 642 -151 642 -116 m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 z "
  },
  "\u0173": {
    ha: 852,
    x_min: 111,
    x_max: 745,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 613 -163 q 630 -212 613 -195 q 678 -229 647 -229 q 717 -225 701 -229 q 745 -220 733 -222 l 745 -293 q 706 -301 726 -298 q 660 -305 686 -305 q 554 -271 589 -305 q 520 -176 520 -237 q 540 -100 520 -137 q 589 -32 559 -63 q 649 20 619 -1 l 711 0 q 638 -81 664 -43 q 613 -163 613 -119 z "
  },
  "\u0174": {
    ha: 1282,
    x_min: 20,
    x_max: 1262,
    o: "m 1262 991 l 997 0 l 881 0 l 684 667 q 668 725 675 696 q 653 780 660 753 q 642 826 646 806 q 635 856 637 846 q 630 826 634 846 q 621 781 627 806 q 607 726 615 755 q 591 667 600 696 l 399 0 l 283 0 l 20 991 l 140 991 l 300 370 q 315 308 308 338 q 328 250 322 278 q 338 194 334 221 q 347 141 343 167 q 356 196 351 168 q 368 255 361 225 q 382 315 374 285 q 399 376 390 346 l 577 991 l 696 991 l 882 372 q 899 309 891 340 q 914 248 907 277 q 925 192 920 218 q 935 141 930 165 q 946 211 939 174 q 962 288 953 248 q 982 370 971 328 l 1141 991 l 1262 991 m 699 1312 q 747 1243 716 1282 q 811 1168 777 1205 q 871 1105 845 1132 l 871 1090 l 791 1090 q 716 1149 755 1114 q 641 1221 677 1183 q 567 1149 604 1183 q 492 1090 529 1115 l 415 1090 l 415 1105 q 474 1169 441 1133 q 537 1244 507 1206 q 585 1312 567 1282 l 699 1312 z "
  },
  "\u0175": {
    ha: 1076,
    x_min: 16,
    x_max: 1060,
    o: "m 724 1 l 591 434 q 575 489 583 462 q 561 540 567 515 q 549 586 554 565 q 541 623 544 608 l 536 623 q 528 586 533 608 q 517 540 524 565 q 503 487 511 515 q 486 432 496 460 l 348 1 l 221 1 l 16 745 l 133 745 l 240 334 q 261 254 251 294 q 278 179 271 214 q 288 119 285 144 l 294 119 q 303 159 298 136 q 314 210 308 183 q 328 263 321 237 q 343 314 336 290 l 480 745 l 602 745 l 734 315 q 754 247 744 282 q 772 179 764 212 q 783 120 780 146 l 789 120 q 799 177 791 143 q 816 252 806 211 q 837 334 826 292 l 945 745 l 1060 745 l 854 1 l 724 1 m 598 1063 q 646 995 615 1033 q 710 920 676 956 q 770 857 744 883 l 770 842 l 690 842 q 615 900 654 865 q 540 972 576 935 q 466 900 503 935 q 391 842 428 866 l 314 842 l 314 857 q 373 920 340 884 q 436 995 406 957 q 484 1063 466 1033 l 598 1063 z "
  },
  "\u0176": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 447 1312 q 494 1243 464 1282 q 559 1168 525 1205 q 619 1105 593 1132 l 619 1090 l 539 1090 q 464 1149 503 1114 q 389 1221 425 1183 q 314 1149 352 1183 q 240 1090 277 1115 l 163 1090 l 163 1105 q 221 1169 189 1133 q 284 1244 254 1206 q 332 1312 315 1282 l 447 1312 z "
  },
  "\u0177": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 406 1063 q 454 995 423 1033 q 518 920 484 956 q 578 857 552 883 l 578 842 l 498 842 q 423 900 462 865 q 348 972 385 935 q 274 900 311 935 q 199 842 236 866 l 122 842 l 122 857 q 181 920 148 884 q 244 995 214 957 q 292 1063 274 1033 l 406 1063 z "
  },
  "\u0178": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 197 1194 q 214 1244 197 1228 q 258 1259 232 1259 q 302 1244 284 1259 q 320 1194 320 1228 q 302 1144 320 1161 q 258 1128 284 1128 q 214 1144 232 1128 q 197 1194 197 1161 m 457 1194 q 475 1244 457 1228 q 517 1259 492 1259 q 562 1244 543 1259 q 580 1194 580 1228 q 562 1144 580 1161 q 517 1128 543 1128 q 475 1144 492 1128 q 457 1194 457 1161 z "
  },
  "\u0179": {
    ha: 795,
    x_min: 53,
    x_max: 741,
    o: "m 741 0 l 53 0 l 53 87 l 587 888 l 71 888 l 71 991 l 727 991 l 727 905 l 193 103 l 741 103 l 741 0 m 600 1313 l 600 1299 q 563 1252 586 1280 q 511 1195 539 1225 q 453 1137 482 1164 q 400 1090 425 1110 l 325 1090 l 325 1107 q 372 1169 347 1133 q 422 1243 398 1205 q 463 1313 447 1282 l 600 1313 z "
  },
  "\u017A": {
    ha: 651,
    x_min: 54,
    x_max: 596,
    o: "m 596 0 l 54 0 l 54 75 l 462 655 l 80 655 l 80 743 l 587 743 l 587 660 l 185 87 l 596 87 l 596 0 m 522 1064 l 522 1050 q 485 1003 508 1031 q 433 946 461 976 q 375 888 404 916 q 322 842 347 861 l 247 842 l 247 858 q 294 920 269 884 q 345 995 320 956 q 385 1064 369 1033 l 522 1064 z "
  },
  "\u017B": {
    ha: 795,
    x_min: 53,
    x_max: 741,
    o: "m 741 0 l 53 0 l 53 87 l 587 888 l 71 888 l 71 991 l 727 991 l 727 905 l 193 103 l 741 103 l 741 0 m 405 1270 q 453 1252 433 1270 q 473 1196 473 1234 q 453 1141 473 1159 q 405 1122 433 1122 q 356 1141 376 1122 q 337 1196 337 1159 q 356 1252 337 1234 q 405 1270 376 1270 z "
  },
  "\u017C": {
    ha: 651,
    x_min: 54,
    x_max: 596,
    o: "m 596 0 l 54 0 l 54 75 l 462 655 l 80 655 l 80 743 l 587 743 l 587 660 l 185 87 l 596 87 l 596 0 m 328 1021 q 375 1003 355 1021 q 395 947 395 985 q 375 892 395 910 q 328 873 355 873 q 279 892 298 873 q 260 947 260 910 q 279 1003 260 985 q 328 1021 298 1021 z "
  },
  "\u017D": {
    ha: 795,
    x_min: 53,
    x_max: 741,
    o: "m 741 0 l 53 0 l 53 87 l 587 888 l 71 888 l 71 991 l 727 991 l 727 905 l 193 103 l 741 103 l 741 0 m 344 1090 q 296 1159 326 1122 q 232 1233 265 1196 q 174 1295 199 1269 l 174 1312 l 252 1312 q 327 1252 288 1287 q 400 1179 366 1217 q 475 1252 437 1217 q 551 1312 514 1287 l 631 1312 l 631 1295 q 570 1233 604 1269 q 506 1159 536 1196 q 458 1090 475 1122 l 344 1090 z "
  },
  "\u017E": {
    ha: 651,
    x_min: 54,
    x_max: 596,
    o: "m 596 0 l 54 0 l 54 75 l 462 655 l 80 655 l 80 743 l 587 743 l 587 660 l 185 87 l 596 87 l 596 0 m 267 842 q 218 910 249 873 q 155 984 188 947 q 97 1046 122 1020 l 97 1063 l 174 1063 q 250 1003 211 1038 q 323 930 289 968 q 398 1003 359 968 q 473 1063 437 1038 l 553 1063 l 553 1046 q 493 984 527 1020 q 429 910 459 947 q 381 842 398 873 l 267 842 z "
  },
  "\u017F": {
    ha: 448,
    x_min: 119,
    x_max: 494,
    o: "m 359 968 q 266 930 299 968 q 232 802 232 892 l 232 0 l 119 0 l 119 803 q 149 953 119 896 q 233 1037 178 1010 q 361 1063 287 1063 q 435 1055 402 1063 q 494 1038 468 1047 l 466 948 q 416 962 444 956 q 359 968 388 968 z "
  },
  "\u0192": {
    ha: 794,
    x_min: 129,
    x_max: 704,
    o: "m 565 1006 q 642 997 607 1006 q 704 978 677 987 l 676 890 q 625 904 653 897 q 568 911 597 911 q 475 877 505 911 q 446 753 446 842 l 446 654 l 633 654 l 633 566 l 448 566 l 448 -94 q 422 -233 448 -180 q 346 -310 396 -286 q 224 -334 296 -334 q 172 -330 197 -334 q 129 -321 147 -326 l 129 -227 q 172 -236 150 -232 q 217 -239 194 -239 q 304 -207 277 -239 q 332 -93 332 -175 l 332 566 l 188 566 l 188 621 l 332 659 l 332 753 q 359 902 332 847 q 438 982 386 958 q 565 1006 490 1006 z "
  },
  "\u01FA": {
    ha: 880,
    x_min: -1,
    x_max: 880,
    o: "m -1 0 l 361 840 q 307 889 327 857 q 288 968 288 921 q 330 1075 288 1036 q 437 1114 372 1114 q 548 1076 503 1114 q 592 968 592 1037 q 572 890 592 923 q 519 841 553 858 l 880 0 l 760 0 l 642 273 l 231 273 l 117 0 l -1 0 m 271 376 l 608 376 l 488 668 q 472 706 481 684 q 455 753 464 728 q 439 802 446 779 q 427 765 433 784 q 414 728 420 746 q 402 693 408 709 q 392 666 397 677 l 271 376 m 437 885 q 497 907 474 885 q 519 968 519 928 q 497 1027 519 1006 q 437 1048 474 1048 q 379 1027 402 1048 q 356 968 356 1006 q 378 907 356 929 q 437 885 399 885 m 378 1150 l 378 1162 q 421 1215 398 1185 q 465 1275 444 1244 q 500 1332 486 1305 l 636 1332 l 636 1321 q 604 1282 625 1305 q 557 1236 583 1260 q 504 1189 531 1212 q 454 1150 477 1166 l 378 1150 z "
  },
  "\u01FB": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 393 1064 q 335 1042 358 1064 q 312 983 312 1021 q 333 924 312 946 q 393 902 355 902 q 451 924 429 902 q 473 983 473 946 q 450 1042 473 1021 q 393 1064 427 1064 m 393 1128 q 471 1111 437 1128 q 525 1061 505 1093 q 545 984 545 1029 q 502 876 545 915 q 393 837 459 837 q 285 876 327 837 q 243 983 243 914 q 285 1090 243 1051 q 393 1128 327 1128 m 608 1329 l 608 1321 q 555 1277 593 1303 q 474 1225 517 1251 q 399 1181 431 1199 l 318 1181 l 318 1192 q 361 1235 338 1211 q 406 1283 385 1259 q 441 1329 427 1308 l 608 1329 z "
  },
  "\u01FC": {
    ha: 1206,
    x_min: -1,
    x_max: 1129,
    o: "m 1129 0 l 611 0 l 611 315 l 269 315 l 118 0 l -1 0 l 465 991 l 1129 991 l 1129 890 l 726 890 l 726 569 l 1103 569 l 1103 469 l 726 469 l 726 102 l 1129 102 l 1129 0 m 313 417 l 611 417 l 611 888 l 533 888 l 313 417 m 867 1313 l 867 1299 q 830 1252 854 1280 q 779 1195 807 1225 q 721 1137 750 1164 q 668 1090 692 1110 l 593 1090 l 593 1107 q 640 1169 614 1133 q 690 1243 666 1205 q 731 1313 715 1282 l 867 1313 z "
  },
  "\u01FD": {
    ha: 1198,
    x_min: 64,
    x_max: 1126,
    o: "m 838 757 q 992 715 928 757 q 1092 597 1057 673 q 1126 423 1126 522 l 1126 352 l 645 352 q 704 149 648 215 q 866 83 760 83 q 986 96 934 83 q 1093 134 1038 109 l 1093 35 q 984 -2 1038 9 q 863 -14 931 -14 q 744 5 798 -14 q 649 60 690 24 q 581 149 608 96 q 512 63 550 100 q 423 6 475 26 q 299 -14 372 -14 q 178 10 231 -14 q 94 82 125 34 q 64 204 64 130 q 101 329 64 278 q 215 409 139 380 q 404 440 290 437 l 530 446 l 530 494 q 487 626 530 588 q 371 665 444 665 q 263 648 316 665 q 162 608 210 631 l 127 693 q 244 738 177 720 q 380 755 312 755 q 523 725 467 755 q 606 626 579 694 q 701 722 642 688 q 838 757 760 757 m 527 366 l 420 361 q 235 316 290 356 q 181 203 181 276 q 218 109 181 139 q 317 78 255 78 q 425 102 378 78 q 500 176 473 127 q 527 298 527 224 l 527 366 m 836 665 q 705 607 754 665 q 648 441 655 550 l 1006 441 q 989 558 1007 508 q 932 637 970 609 q 836 665 895 665 m 804 1064 l 804 1050 q 767 1003 790 1031 q 715 946 743 976 q 657 888 686 916 q 604 842 629 861 l 529 842 l 529 858 q 576 920 551 884 q 627 995 602 956 q 667 1064 651 1033 l 804 1064 z "
  },
  "\u01FE": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 396 4 461 -14 q 281 56 331 21 l 212 -42 l 133 9 l 208 115 q 115 280 146 183 q 85 498 85 378 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 679 990 616 1007 q 793 941 742 972 l 859 1036 l 937 982 l 865 882 q 962 718 928 815 q 996 497 996 621 m 874 497 q 855 662 874 588 q 799 787 836 735 l 342 144 q 430 101 380 117 q 541 86 479 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 m 206 497 q 224 337 206 409 q 277 214 241 266 l 731 852 q 648 892 694 878 q 543 905 601 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 739 1313 l 739 1299 q 702 1252 725 1280 q 650 1195 678 1225 q 592 1137 621 1164 q 539 1090 564 1110 l 464 1090 l 464 1107 q 511 1169 486 1133 q 562 1243 537 1205 q 602 1313 586 1282 l 739 1313 z "
  },
  "\u01FF": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 316 -1 362 -14 q 232 37 271 12 l 172 -45 l 98 5 l 164 95 q 100 215 123 146 q 77 373 77 285 q 169 656 77 556 q 420 757 261 757 q 520 743 473 757 q 605 704 567 730 l 663 785 l 739 735 l 673 646 q 736 528 713 596 q 760 373 760 459 m 194 373 q 202 271 194 317 q 230 189 211 224 l 547 623 q 490 652 522 642 q 418 662 457 662 q 248 585 302 662 q 194 373 194 509 m 643 373 q 634 472 643 427 q 608 552 625 517 l 290 117 q 347 90 314 99 q 418 80 380 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 m 615 1064 l 615 1050 q 578 1003 602 1031 q 526 946 555 976 q 469 888 498 916 q 416 842 440 861 l 340 842 l 340 858 q 388 920 362 884 q 438 995 414 956 q 479 1064 463 1033 l 615 1064 z "
  },
  "\u0218": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 m 441 -85 l 441 -96 q 418 -161 435 -123 q 380 -238 402 -199 q 334 -307 358 -277 l 272 -307 l 272 -291 q 294 -231 282 -268 q 316 -154 306 -194 q 330 -85 326 -115 l 441 -85 z "
  },
  "\u0219": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 m 414 -85 l 414 -96 q 391 -161 408 -123 q 353 -238 375 -199 q 307 -307 331 -277 l 245 -307 l 245 -291 q 267 -231 255 -268 q 289 -154 279 -194 q 302 -85 299 -115 l 414 -85 z "
  },
  "\u02C6": {
    ha: 568,
    x_min: 56,
    x_max: 512,
    o: "m 340 1063 q 387 995 357 1033 q 452 920 418 956 q 512 857 486 883 l 512 842 l 432 842 q 357 900 395 865 q 281 972 318 935 q 207 900 245 935 q 133 842 170 866 l 56 842 l 56 857 q 114 920 81 884 q 177 995 147 957 q 225 1063 208 1033 l 340 1063 z "
  },
  "\u02C7": {
    ha: 568,
    x_min: 56,
    x_max: 512,
    o: "m 225 842 q 177 910 208 873 q 114 984 146 947 q 56 1046 81 1020 l 56 1063 l 133 1063 q 209 1003 170 1038 q 281 930 248 968 q 357 1003 318 968 q 432 1063 395 1038 l 512 1063 l 512 1046 q 452 984 486 1020 q 387 910 418 947 q 340 842 357 873 l 225 842 z "
  },
  "\u02C9": {
    ha: 517,
    x_min: 56,
    x_max: 462,
    o: "m 462 934 l 462 843 l 56 843 l 56 934 l 462 934 z "
  },
  "\u02D8": {
    ha: 533,
    x_min: 56,
    x_max: 477,
    o: "m 477 1025 q 447 929 473 970 q 374 865 420 888 q 263 842 328 842 q 112 891 163 842 q 56 1025 61 941 l 126 1025 q 147 967 130 987 q 194 940 164 947 q 266 933 224 933 q 333 941 303 933 q 382 969 363 949 q 406 1025 401 989 l 477 1025 z "
  },
  "\u02D9": {
    ha: 247,
    x_min: 56,
    x_max: 191,
    o: "m 123 1021 q 171 1003 151 1021 q 191 947 191 985 q 171 892 191 910 q 123 873 151 873 q 75 892 94 873 q 56 947 56 910 q 75 1003 56 985 q 123 1021 94 1021 z "
  },
  "\u02DA": {
    ha: 414,
    x_min: 56,
    x_max: 358,
    o: "m 205 842 q 98 881 140 842 q 56 989 56 920 q 97 1095 56 1057 q 205 1134 139 1134 q 314 1095 270 1134 q 358 990 358 1057 q 315 881 358 920 q 205 842 271 842 m 205 907 q 264 929 241 907 q 287 989 287 951 q 263 1048 287 1026 q 205 1069 240 1069 q 148 1048 172 1069 q 125 989 125 1026 q 146 929 125 951 q 205 907 167 907 z "
  },
  "\u02DB": {
    ha: 336,
    x_min: 56,
    x_max: 280,
    o: "m 149 -163 q 165 -212 149 -195 q 214 -229 182 -229 q 252 -225 236 -229 q 280 -220 269 -222 l 280 -293 q 241 -301 261 -298 q 195 -305 222 -305 q 90 -271 124 -305 q 56 -176 56 -237 q 75 -100 56 -137 q 125 -32 95 -63 q 184 20 155 -1 l 247 0 q 174 -81 199 -43 q 149 -163 149 -119 z "
  },
  "\u02DC": {
    ha: 614,
    x_min: 56,
    x_max: 559,
    o: "m 56 844 q 71 916 60 884 q 102 970 83 948 q 147 1005 121 993 q 205 1017 173 1017 q 264 1004 236 1017 q 319 976 293 991 q 369 947 345 960 q 415 935 393 935 q 466 955 448 935 q 493 1018 484 975 l 559 1018 q 513 891 551 939 q 410 844 475 844 q 353 857 380 844 q 299 885 325 869 q 249 914 273 901 q 200 926 224 926 q 149 906 167 926 q 122 844 132 886 l 56 844 z "
  },
  "\u02DD": {
    ha: 601,
    x_min: 56,
    x_max: 545,
    o: "m 545 1064 l 545 1050 q 513 1004 534 1031 q 466 946 492 977 q 413 889 439 916 q 363 842 386 861 l 298 842 l 298 858 q 341 921 318 884 q 386 995 364 957 q 422 1064 408 1033 l 545 1064 m 303 1064 l 303 1050 q 271 1004 292 1031 q 223 946 250 977 q 171 889 197 916 q 121 842 144 861 l 56 842 l 56 858 q 99 921 76 884 q 143 995 121 957 q 180 1064 165 1033 l 303 1064 z "
  },
  "\u0384": {
    ha: 802,
    x_min: 353,
    x_max: 538,
    o: "m 353 842 l 353 860 q 372 918 362 886 q 390 986 382 951 q 406 1056 399 1021 q 416 1118 412 1090 l 538 1118 l 538 1103 q 511 1025 530 1072 q 469 929 492 978 q 422 842 445 880 l 353 842 z "
  },
  "\u0385": {
    ha: 802,
    x_min: 195,
    x_max: 618,
    o: "m 541 1164 l 541 1150 q 506 1085 528 1121 q 460 1011 485 1048 q 410 941 435 973 l 355 941 l 355 956 q 377 1021 366 985 q 400 1094 389 1057 q 417 1164 411 1132 l 541 1164 m 256 1010 q 299 995 281 1010 q 316 945 316 979 q 299 896 316 912 q 256 879 281 879 q 213 896 230 879 q 195 945 195 912 q 213 995 195 979 q 256 1010 230 1010 m 557 1010 q 600 995 582 1010 q 618 945 618 979 q 600 896 618 912 q 557 879 582 879 q 514 896 530 879 q 497 945 497 912 q 514 995 497 979 q 557 1010 530 1010 z "
  },
  "\u0386": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 18 768 l 18 786 q 38 844 28 812 q 56 912 47 877 q 71 982 64 947 q 82 1044 78 1016 l 203 1044 l 203 1029 q 177 951 196 998 q 134 855 158 904 q 87 768 111 806 l 18 768 z "
  },
  "\u0387": {
    ha: 365,
    x_min: 102,
    x_max: 263,
    o: "m 102 673 q 125 741 102 721 q 181 761 148 761 q 239 741 216 761 q 263 673 263 721 q 239 605 263 627 q 181 584 216 584 q 125 605 148 584 q 102 673 102 627 z "
  },
  "\u0388": {
    ha: 882,
    x_min: -1,
    x_max: 798,
    o: "m 798 0 l 246 0 l 246 991 l 798 991 l 798 890 l 361 890 l 361 569 l 773 569 l 773 469 l 361 469 l 361 102 l 798 102 l 798 0 m -1 768 l -1 786 q 18 844 8 812 q 36 912 28 877 q 52 982 45 947 q 62 1044 58 1016 l 184 1044 l 184 1029 q 157 951 176 998 q 115 855 138 904 q 68 768 91 806 l -1 768 z "
  },
  "\u0389": {
    ha: 1135,
    x_min: -1,
    x_max: 998,
    o: "m 998 0 l 882 0 l 882 467 l 361 467 l 361 0 l 246 0 l 246 991 l 361 991 l 361 569 l 882 569 l 882 991 l 998 991 l 998 0 m -1 768 l -1 786 q 18 844 8 812 q 36 912 28 877 q 52 982 45 947 q 62 1044 58 1016 l 184 1044 l 184 1029 q 157 951 176 998 q 115 855 138 904 q 68 768 91 806 l -1 768 z "
  },
  "\u038A": {
    ha: 502,
    x_min: -1,
    x_max: 364,
    o: "m 249 0 l 249 991 l 364 991 l 364 0 l 249 0 m -1 768 l -1 786 q 18 844 8 812 q 36 912 28 877 q 52 982 45 947 q 62 1044 58 1016 l 184 1044 l 184 1029 q 157 951 176 998 q 115 855 138 904 q 68 768 91 806 l -1 768 z "
  },
  "\u038C": {
    ha: 1139,
    x_min: -1,
    x_max: 1053,
    o: "m 1053 497 q 1024 289 1053 382 q 938 127 995 195 q 795 23 880 60 q 599 -14 711 -14 q 398 23 484 -14 q 255 127 312 60 q 171 290 199 195 q 142 498 142 384 q 193 765 142 650 q 345 943 243 880 q 601 1007 447 1007 q 849 944 748 1007 q 1001 767 949 881 q 1053 497 1053 652 m 264 497 q 300 279 264 371 q 410 136 336 186 q 599 86 484 86 q 788 136 714 86 q 897 279 861 186 q 932 497 932 371 q 851 797 932 689 q 601 905 771 905 q 411 856 486 905 q 300 715 336 806 q 264 497 264 624 m -1 768 l -1 786 q 18 844 8 812 q 36 912 28 877 q 52 982 45 947 q 62 1044 58 1016 l 184 1044 l 184 1029 q 157 951 176 998 q 115 855 138 904 q 68 768 91 806 l -1 768 z "
  },
  "\u038E": {
    ha: 987,
    x_min: -1,
    x_max: 986,
    o: "m 598 494 l 862 991 l 986 991 l 656 385 l 656 0 l 541 0 l 541 379 l 210 991 l 336 991 l 598 494 m -1 768 l -1 786 q 18 844 8 812 q 36 912 28 877 q 52 982 45 947 q 62 1044 58 1016 l 184 1044 l 184 1029 q 157 951 176 998 q 115 855 138 904 q 68 768 91 806 l -1 768 z "
  },
  "\u038F": {
    ha: 1131,
    x_min: -9,
    x_max: 1080,
    o: "m 589 905 q 404 863 477 905 q 294 742 330 821 q 258 554 258 663 q 282 376 258 458 q 359 224 307 294 q 498 92 412 154 l 498 0 l 101 0 l 101 102 l 355 102 q 244 214 294 148 q 165 366 195 279 q 136 558 136 452 q 190 796 136 695 q 345 952 243 897 q 589 1007 446 1007 q 837 952 735 1007 q 991 798 939 898 q 1044 559 1044 697 q 1016 366 1044 453 q 937 213 987 279 q 826 102 888 147 l 1080 102 l 1080 0 l 682 0 l 682 92 q 823 224 770 153 q 900 377 876 294 q 924 554 924 459 q 887 743 924 664 q 776 863 850 821 q 589 905 702 905 m -9 769 l -9 787 q 10 846 0 813 q 28 913 20 878 q 43 983 37 949 q 54 1046 50 1017 l 176 1046 l 176 1031 q 149 952 168 999 q 106 857 130 905 q 60 769 83 808 l -9 769 z "
  },
  "\u0390": {
    ha: 471,
    x_min: -29,
    x_max: 447,
    o: "m 225 743 l 225 218 q 252 113 225 148 q 336 79 279 79 q 397 84 366 79 q 447 94 429 89 l 447 7 q 392 -8 428 -2 q 321 -14 356 -14 q 214 6 260 -14 q 140 76 167 26 q 114 215 114 126 l 114 743 l 225 743 m 317 1164 l 317 1150 q 282 1085 303 1121 q 235 1011 260 1048 q 185 941 210 973 l 130 941 l 130 956 q 153 1021 141 985 q 176 1094 165 1057 q 193 1164 186 1132 l 317 1164 m 31 1010 q 74 995 57 1010 q 92 945 92 979 q 74 896 92 912 q 31 879 57 879 q -12 896 5 879 q -29 945 -29 912 q -12 995 -29 979 q 31 1010 5 1010 m 333 1010 q 376 995 357 1010 q 394 945 394 979 q 376 896 394 912 q 333 879 357 879 q 289 896 306 879 q 273 945 273 912 q 289 995 273 979 q 333 1010 306 1010 z "
  },
  "\u0391": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 z "
  },
  "\u0392": {
    ha: 897,
    x_min: 136,
    x_max: 822,
    o: "m 136 991 l 416 991 q 696 936 602 991 q 789 747 789 880 q 767 643 789 689 q 703 568 745 597 q 600 526 661 538 l 600 519 q 715 482 665 509 q 793 406 765 455 q 822 282 822 357 q 780 127 822 191 q 660 32 737 64 q 477 0 583 0 l 136 0 l 136 991 m 251 566 l 441 566 q 620 609 570 566 q 670 734 670 652 q 611 856 670 819 q 422 893 551 893 l 251 893 l 251 566 m 251 469 l 251 98 l 457 98 q 644 150 589 98 q 699 290 699 202 q 674 387 699 347 q 594 448 650 427 q 447 469 539 469 l 251 469 z "
  },
  "\u0393": {
    ha: 722,
    x_min: 136,
    x_max: 692,
    o: "m 692 991 l 692 888 l 251 888 l 251 0 l 136 0 l 136 991 l 692 991 z "
  },
  "\u0394": {
    ha: 804,
    x_min: 25,
    x_max: 779,
    o: "m 459 991 l 779 69 l 779 0 l 25 0 l 25 71 l 345 991 l 459 991 m 652 102 l 466 644 q 440 724 452 685 q 418 798 428 762 q 400 866 408 834 q 382 799 392 834 q 362 726 373 763 q 338 650 351 688 l 149 102 l 652 102 z "
  },
  "\u0395": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 z "
  },
  "\u0396": {
    ha: 795,
    x_min: 53,
    x_max: 741,
    o: "m 741 0 l 53 0 l 53 87 l 587 888 l 71 888 l 71 991 l 727 991 l 727 905 l 193 103 l 741 103 l 741 0 z "
  },
  "\u0397": {
    ha: 1024,
    x_min: 136,
    x_max: 887,
    o: "m 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 772 569 l 772 991 l 887 991 l 887 0 z "
  },
  "\u0398": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 752 554 l 752 454 l 327 454 l 327 554 l 752 554 m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  "\u0399": {
    ha: 388,
    x_min: 136,
    x_max: 251,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 z "
  },
  "\u039A": {
    ha: 850,
    x_min: 136,
    x_max: 850,
    o: "m 850 0 l 714 0 l 357 482 l 251 387 l 251 0 l 136 0 l 136 991 l 251 991 l 251 497 q 330 585 290 541 q 411 673 371 629 l 701 991 l 836 991 l 441 562 l 850 0 z "
  },
  "\u039B": {
    ha: 838,
    x_min: 0,
    x_max: 836,
    o: "m 477 991 l 836 0 l 715 0 l 486 644 q 459 724 472 685 q 435 798 446 762 q 416 865 425 833 q 399 798 409 833 q 376 724 389 762 q 349 645 363 686 l 122 0 l 0 0 l 357 991 l 477 991 z "
  },
  "\u039C": {
    ha: 1249,
    x_min: 136,
    x_max: 1114,
    o: "m 572 0 l 239 878 l 233 878 q 238 810 236 850 q 241 723 240 770 q 243 627 243 675 l 243 0 l 136 0 l 136 991 l 307 991 l 621 167 l 625 167 l 944 991 l 1114 991 l 1114 0 l 1000 0 l 1000 635 q 1001 723 1000 679 q 1004 807 1002 768 q 1008 876 1006 847 l 1003 876 l 666 0 l 572 0 z "
  },
  "\u039D": {
    ha: 1046,
    x_min: 136,
    x_max: 911,
    o: "m 911 0 l 778 0 l 237 833 l 232 833 q 237 757 234 800 q 241 667 239 715 q 243 570 243 619 l 243 0 l 136 0 l 136 991 l 268 991 l 806 161 l 811 161 q 808 229 810 185 q 804 323 806 273 q 802 417 802 374 l 802 991 l 911 991 l 911 0 z "
  },
  "\u039E": {
    ha: 765,
    x_min: 45,
    x_max: 719,
    o: "m 45 0 l 45 102 l 719 102 l 719 0 l 45 0 m 129 468 l 129 569 l 635 569 l 635 468 l 129 468 m 73 890 l 73 991 l 691 991 l 691 890 l 73 890 z "
  },
  "\u039F": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  "\u03A0": {
    ha: 1011,
    x_min: 136,
    x_max: 874,
    o: "m 136 0 l 136 991 l 874 991 l 874 0 l 760 0 l 760 890 l 251 890 l 251 0 l 136 0 z "
  },
  "\u03A1": {
    ha: 836,
    x_min: 136,
    x_max: 764,
    o: "m 395 991 q 675 917 587 991 q 764 702 764 842 q 743 582 764 639 q 676 483 722 526 q 555 415 630 439 q 372 390 480 390 l 251 390 l 251 0 l 136 0 l 136 991 l 395 991 m 384 893 l 251 893 l 251 489 l 359 489 q 517 509 454 489 q 612 575 581 530 q 644 697 644 621 q 581 845 644 796 q 384 893 518 893 z "
  },
  "\u03A3": {
    ha: 787,
    x_min: 49,
    x_max: 755,
    o: "m 49 0 l 49 95 l 381 518 l 57 896 l 57 991 l 715 991 l 715 888 l 351 888 q 298 888 330 888 q 237 889 267 888 q 191 890 207 889 l 510 519 l 176 100 q 278 101 227 100 q 382 102 329 102 l 755 102 l 755 0 l 49 0 z "
  },
  "\u03A4": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 z "
  },
  "\u03A5": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 z "
  },
  "\u03A6": {
    ha: 1107,
    x_min: 71,
    x_max: 1034,
    o: "m 610 1006 l 610 884 q 860 832 767 881 q 994 701 953 783 q 1034 515 1034 619 q 1013 378 1034 445 q 942 259 991 312 q 811 173 893 205 q 610 139 730 141 l 610 -14 l 496 -14 l 496 139 q 291 174 373 141 q 161 261 209 208 q 92 380 113 315 q 71 514 71 446 q 94 655 71 589 q 166 772 116 722 q 297 852 216 823 q 496 884 378 882 l 496 1006 l 610 1006 m 496 786 q 316 750 383 783 q 218 656 248 716 q 189 515 189 597 q 221 368 189 430 q 322 272 254 306 q 496 234 391 237 l 496 786 m 610 786 l 610 234 q 786 273 718 237 q 886 370 854 308 q 918 517 918 433 q 888 658 918 599 q 790 750 858 718 q 610 786 723 783 z "
  },
  "\u03A7": {
    ha: 802,
    x_min: 4,
    x_max: 798,
    o: "m 798 0 l 667 0 l 399 437 l 127 0 l 4 0 l 334 517 l 27 991 l 155 991 l 403 596 l 652 991 l 774 991 l 467 519 l 798 0 z "
  },
  "\u03A8": {
    ha: 1107,
    x_min: 75,
    x_max: 1029,
    o: "m 1029 991 l 1029 665 q 1009 525 1029 591 q 940 409 988 459 q 810 331 891 359 q 607 302 728 302 l 607 0 l 494 0 l 494 302 q 292 331 373 302 q 163 410 211 360 q 96 526 116 460 q 75 664 75 591 l 75 991 l 191 991 l 191 667 q 222 518 191 577 q 321 431 254 460 q 494 401 389 402 l 494 991 l 607 991 l 607 401 q 782 431 715 402 q 880 519 849 460 q 911 665 911 577 l 911 991 l 1029 991 z "
  },
  "\u03A9": {
    ha: 1084,
    x_min: 54,
    x_max: 1032,
    o: "m 542 905 q 356 863 430 905 q 247 742 283 821 q 211 554 211 663 q 235 376 211 458 q 312 224 259 294 q 451 92 365 154 l 451 0 l 54 0 l 54 102 l 308 102 q 197 214 247 148 q 118 366 147 279 q 89 558 89 452 q 142 796 89 695 q 297 952 196 897 q 542 1007 399 1007 q 789 952 688 1007 q 944 798 891 898 q 997 559 997 697 q 968 366 997 453 q 890 213 939 279 q 779 102 840 147 l 1032 102 l 1032 0 l 635 0 l 635 92 q 775 224 722 153 q 852 377 828 294 q 876 554 876 459 q 840 743 876 664 q 729 863 803 821 q 542 905 654 905 z "
  },
  "\u03AA": {
    ha: 388,
    x_min: 4,
    x_max: 387,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 4 1194 q 22 1244 4 1228 q 65 1259 39 1259 q 110 1244 92 1259 q 127 1194 127 1228 q 110 1144 127 1161 q 65 1128 92 1128 q 22 1144 39 1128 q 4 1194 4 1161 m 264 1194 q 282 1244 264 1228 q 325 1259 300 1259 q 369 1244 351 1259 q 387 1194 387 1228 q 369 1144 387 1161 q 325 1128 351 1128 q 282 1144 300 1128 q 264 1194 264 1161 z "
  },
  "\u03AB": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 197 1194 q 214 1244 197 1228 q 258 1259 232 1259 q 302 1244 284 1259 q 320 1194 320 1228 q 302 1144 320 1161 q 258 1128 284 1128 q 214 1144 232 1128 q 197 1194 197 1161 m 457 1194 q 475 1244 457 1228 q 517 1259 492 1259 q 562 1244 543 1259 q 580 1194 580 1228 q 562 1144 580 1161 q 517 1128 543 1128 q 475 1144 492 1128 q 457 1194 457 1161 z "
  },
  "\u03AC": {
    ha: 848,
    x_min: 77,
    x_max: 829,
    o: "m 401 80 q 526 111 479 80 q 595 204 573 141 q 616 362 616 267 l 616 373 q 569 589 616 515 q 401 662 522 662 q 245 587 296 662 q 194 368 194 511 q 244 153 194 225 q 401 80 294 80 m 382 -14 q 161 83 244 -14 q 77 369 77 179 q 161 657 77 557 q 394 757 244 757 q 532 727 477 757 q 623 639 587 697 l 631 639 q 647 693 636 665 q 673 743 658 722 l 762 743 q 744 664 752 712 q 732 562 736 616 q 728 456 728 507 l 728 164 q 745 98 728 117 q 787 79 762 79 q 810 81 798 79 q 829 86 823 83 l 829 3 q 810 -4 823 -1 q 784 -11 798 -8 q 754 -14 769 -14 q 670 12 703 -14 q 625 106 638 38 l 616 106 q 565 46 595 73 q 491 3 535 19 q 382 -14 446 -14 m 376 842 l 376 860 q 396 918 386 886 q 414 986 406 951 q 429 1056 422 1021 q 440 1118 436 1090 l 562 1118 l 562 1103 q 535 1025 554 1072 q 492 929 516 978 q 446 842 469 880 l 376 842 z "
  },
  "\u03AD": {
    ha: 663,
    x_min: 60,
    x_max: 616,
    o: "m 487 434 l 487 342 l 388 342 q 268 327 316 342 q 197 282 220 312 q 173 208 173 252 q 199 133 173 161 q 271 92 225 104 q 374 79 316 79 q 508 96 450 79 q 613 136 567 114 l 613 36 q 511 0 571 14 q 368 -14 452 -14 q 136 48 211 -14 q 60 201 60 109 q 109 325 60 284 q 225 385 157 366 l 225 392 q 124 453 161 411 q 87 560 87 494 q 123 668 87 624 q 223 734 159 711 q 368 757 287 757 q 504 744 447 757 q 616 705 561 730 l 574 615 q 480 650 528 636 q 368 663 431 663 q 238 635 281 663 q 195 552 195 606 q 253 461 195 489 q 410 434 311 434 l 487 434 m 316 842 l 316 860 q 335 918 326 886 q 354 986 345 951 q 369 1056 362 1021 q 380 1118 376 1090 l 501 1118 l 501 1103 q 475 1025 494 1072 q 432 929 456 978 q 385 842 408 880 l 316 842 z "
  },
  "\u03AE": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 618 728 559 757 q 708 640 678 700 q 739 484 739 580 l 739 -334 l 627 -334 l 627 477 q 585 616 627 570 q 455 662 543 662 q 325 631 374 662 q 253 539 275 600 q 231 389 231 478 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 m 397 842 l 397 860 q 417 918 407 886 q 435 986 427 951 q 450 1056 444 1021 q 461 1118 457 1090 l 583 1118 l 583 1103 q 556 1025 575 1072 q 513 929 537 978 q 467 842 490 880 l 397 842 z "
  },
  "\u03AF": {
    ha: 471,
    x_min: 114,
    x_max: 447,
    o: "m 225 743 l 225 218 q 252 113 225 148 q 336 79 279 79 q 397 84 366 79 q 447 94 429 89 l 447 7 q 392 -8 428 -2 q 321 -14 356 -14 q 214 6 260 -14 q 140 76 167 26 q 114 215 114 126 l 114 743 l 225 743 m 124 842 l 124 860 q 143 918 134 886 q 162 986 153 951 q 177 1056 170 1021 q 188 1118 184 1090 l 309 1118 l 309 1103 q 283 1025 302 1072 q 240 929 264 978 q 193 842 216 880 l 124 842 z "
  },
  "\u03B0": {
    ha: 847,
    x_min: 111,
    x_max: 770,
    o: "m 423 -14 q 235 32 303 -14 q 139 156 167 77 q 111 336 111 235 l 111 743 l 223 743 l 223 340 q 273 148 223 217 q 432 79 323 79 q 601 160 545 79 q 656 410 656 241 q 645 583 656 506 q 612 743 633 661 l 726 743 q 750 637 740 688 q 765 529 760 585 q 770 406 770 473 q 682 89 770 191 q 423 -14 595 -14 m 565 1164 l 565 1150 q 530 1085 551 1121 q 484 1011 509 1048 q 433 941 458 973 l 378 941 l 378 956 q 401 1021 389 985 q 424 1094 413 1057 q 441 1164 435 1132 l 565 1164 m 279 1010 q 322 995 305 1010 q 340 945 340 979 q 322 896 340 912 q 279 879 305 879 q 236 896 254 879 q 219 945 219 912 q 236 995 219 979 q 279 1010 254 1010 m 581 1010 q 624 995 606 1010 q 642 945 642 979 q 624 896 642 912 q 581 879 606 879 q 537 896 554 879 q 521 945 521 912 q 537 995 521 979 q 581 1010 554 1010 z "
  },
  "\u03B1": {
    ha: 848,
    x_min: 77,
    x_max: 829,
    o: "m 401 80 q 526 111 479 80 q 595 204 573 141 q 616 362 616 267 l 616 373 q 569 589 616 515 q 401 662 522 662 q 245 587 296 662 q 194 368 194 511 q 244 153 194 225 q 401 80 294 80 m 382 -14 q 161 83 244 -14 q 77 369 77 179 q 161 657 77 557 q 394 757 244 757 q 532 727 477 757 q 623 639 587 697 l 631 639 q 647 693 636 665 q 673 743 658 722 l 762 743 q 744 664 752 712 q 732 562 736 616 q 728 456 728 507 l 728 164 q 745 98 728 117 q 787 79 762 79 q 810 81 798 79 q 829 86 823 83 l 829 3 q 810 -4 823 -1 q 784 -11 798 -8 q 754 -14 769 -14 q 670 12 703 -14 q 625 106 638 38 l 616 106 q 565 46 595 73 q 491 3 535 19 q 382 -14 446 -14 z "
  },
  "\u03B2": {
    ha: 871,
    x_min: 119,
    x_max: 807,
    o: "m 449 1063 q 612 1033 541 1063 q 723 945 683 1004 q 764 799 764 886 q 710 640 764 699 q 555 564 656 581 l 555 558 q 743 476 679 544 q 807 283 807 408 q 767 122 807 189 q 651 22 726 56 q 469 -13 576 -13 q 334 1 390 -13 q 232 38 279 14 l 232 -334 l 119 -334 l 119 744 q 161 924 119 854 q 278 1029 203 995 q 449 1063 353 1063 m 446 968 q 338 947 387 968 q 261 876 290 926 q 232 738 232 825 l 232 140 q 335 96 281 113 q 460 80 389 80 q 638 135 581 80 q 694 290 694 190 q 664 411 694 363 q 579 482 634 459 q 448 505 524 505 l 374 505 l 374 601 l 435 601 q 596 653 545 601 q 648 793 648 705 q 593 924 648 880 q 446 968 539 968 z "
  },
  "\u03B3": {
    ha: 710,
    x_min: 6,
    x_max: 702,
    o: "m 702 743 l 428 22 q 391 -99 406 -35 q 368 -224 376 -163 q 359 -334 359 -286 l 237 -334 q 247 -234 237 -293 q 272 -110 256 -174 q 308 9 288 -46 l 6 743 l 123 743 l 288 337 q 317 260 302 302 q 343 180 332 218 q 360 117 355 142 l 366 117 q 381 179 370 140 q 406 260 393 218 q 431 332 420 302 l 585 743 l 702 743 z "
  },
  "\u03B4": {
    ha: 833,
    x_min: 76,
    x_max: 758,
    o: "m 441 1057 q 601 1034 534 1057 q 724 983 668 1011 l 675 895 q 564 944 622 924 q 437 964 507 964 q 339 934 371 964 q 308 862 308 904 q 326 799 308 827 q 386 743 345 772 q 495 677 427 715 q 636 582 578 632 q 726 470 695 532 q 758 326 758 408 q 715 141 758 216 q 596 26 673 65 q 414 -14 519 -14 q 239 23 315 -14 q 119 129 163 59 q 76 296 76 198 q 113 451 76 385 q 217 564 151 518 q 368 635 283 610 q 276 699 315 666 q 215 772 237 732 q 194 863 194 812 q 264 1007 194 958 q 441 1057 335 1057 m 458 585 q 336 538 397 570 q 234 448 275 506 q 193 296 193 389 q 220 183 193 232 q 296 107 246 134 q 414 80 345 80 q 537 109 487 80 q 614 192 588 137 q 641 324 641 246 q 592 481 641 420 q 458 585 544 541 z "
  },
  "\u03B5": {
    ha: 663,
    x_min: 60,
    x_max: 616,
    o: "m 487 434 l 487 342 l 388 342 q 268 327 316 342 q 197 282 220 312 q 173 208 173 252 q 199 133 173 161 q 271 92 225 104 q 374 79 316 79 q 508 96 450 79 q 613 136 567 114 l 613 36 q 511 0 571 14 q 368 -14 452 -14 q 136 48 211 -14 q 60 201 60 109 q 109 325 60 284 q 225 385 157 366 l 225 392 q 124 453 161 411 q 87 560 87 494 q 123 668 87 624 q 223 734 159 711 q 368 757 287 757 q 504 744 447 757 q 616 705 561 730 l 574 615 q 480 650 528 636 q 368 663 431 663 q 238 635 281 663 q 195 552 195 606 q 253 461 195 489 q 410 434 311 434 l 487 434 z "
  },
  "\u03B6": {
    ha: 668,
    x_min: 77,
    x_max: 631,
    o: "m 629 -61 q 603 -174 629 -121 q 543 -271 577 -227 l 431 -271 q 473 -209 454 -241 q 505 -145 493 -176 q 517 -90 517 -114 q 505 -51 517 -68 q 456 -19 492 -33 q 347 8 420 -5 q 198 60 258 24 q 107 158 138 96 q 77 311 77 220 q 110 500 77 414 q 200 663 142 586 q 334 814 258 740 q 496 966 410 888 q 457 965 488 966 q 384 963 427 964 q 296 962 341 962 l 119 962 l 119 1055 l 631 1055 l 631 970 q 402 755 488 850 q 270 583 315 660 q 210 442 225 507 q 194 319 194 378 q 222 197 194 240 q 303 134 250 155 q 432 97 356 113 q 546 62 503 83 q 609 11 589 41 q 629 -61 629 -20 z "
  },
  "\u03B7": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 471 757 q 618 728 559 757 q 708 640 678 700 q 739 484 739 580 l 739 -334 l 627 -334 l 627 477 q 585 616 627 570 q 455 662 543 662 q 325 631 374 662 q 253 539 275 600 q 231 389 231 478 l 231 0 l 119 0 l 119 743 l 210 743 l 227 636 l 233 636 q 293 702 256 675 q 375 743 330 729 q 471 757 420 757 z "
  },
  "\u03B8": {
    ha: 821,
    x_min: 77,
    x_max: 744,
    o: "m 744 526 q 710 235 744 355 q 602 50 676 114 q 408 -14 528 -14 q 158 128 239 -14 q 77 526 77 270 q 111 817 77 696 q 218 1001 144 937 q 408 1064 291 1064 q 661 924 578 1064 q 744 526 744 784 m 408 79 q 572 182 519 79 q 630 492 625 286 l 191 492 q 245 183 194 288 q 408 79 296 79 m 408 971 q 249 874 300 971 q 191 586 197 778 l 629 586 q 570 874 622 778 q 408 971 517 971 z "
  },
  "\u03B9": {
    ha: 471,
    x_min: 114,
    x_max: 447,
    o: "m 225 743 l 225 218 q 252 113 225 148 q 336 79 279 79 q 397 84 366 79 q 447 94 429 89 l 447 7 q 392 -8 428 -2 q 321 -14 356 -14 q 214 6 260 -14 q 140 76 167 26 q 114 215 114 126 l 114 743 l 225 743 z "
  },
  "\u03BA": {
    ha: 730,
    x_min: 119,
    x_max: 719,
    o: "m 696 743 l 414 415 l 719 0 l 585 0 l 335 342 l 238 258 l 238 0 l 119 0 l 119 743 l 238 743 l 238 549 q 236 440 238 494 q 230 354 233 386 l 233 354 q 261 391 246 372 q 290 427 277 410 l 559 743 l 696 743 z "
  },
  "\u03BB": {
    ha: 743,
    x_min: -8,
    x_max: 745,
    o: "m -8 0 l 313 732 l 274 842 q 224 937 251 903 q 139 970 197 970 q 96 967 115 970 q 63 961 77 964 l 63 1053 q 90 1058 75 1056 q 120 1062 104 1061 q 152 1064 136 1064 q 262 1040 220 1064 q 333 967 304 1017 q 390 840 362 918 l 635 153 q 654 111 644 127 q 676 87 664 95 q 704 79 688 79 q 726 82 714 79 q 745 86 738 84 l 745 2 q 723 -6 735 -2 q 698 -12 711 -9 q 669 -14 685 -14 q 613 -3 637 -14 q 572 33 589 8 q 541 96 555 57 l 431 406 q 413 459 422 431 q 393 515 403 487 q 376 570 384 544 q 365 614 369 595 l 360 614 q 329 517 348 569 q 288 413 309 465 l 109 0 l -8 0 z "
  },
  "\u03BC": {
    ha: 859,
    x_min: 119,
    x_max: 740,
    o: "m 740 743 l 740 0 l 648 0 l 631 103 l 625 103 q 570 40 602 66 q 495 0 538 14 q 398 -14 453 -14 q 299 5 340 -14 q 231 54 258 23 l 225 54 q 229 14 227 38 q 231 -40 230 -10 q 231 -106 231 -71 l 231 -334 l 119 -334 l 119 743 l 231 743 l 231 263 q 275 126 231 173 q 406 80 318 80 q 538 112 490 80 q 607 204 586 143 q 627 352 627 264 l 627 743 l 740 743 z "
  },
  "\u03BD": {
    ha: 751,
    x_min: 0,
    x_max: 695,
    o: "m 0 743 l 117 743 l 275 315 q 301 244 287 286 q 329 162 316 202 q 349 96 342 122 l 354 96 q 490 280 440 182 q 562 492 541 378 q 584 743 584 606 l 695 743 q 668 470 695 596 q 577 228 642 343 q 398 0 512 113 l 277 0 l 0 743 z "
  },
  "\u03BE": {
    ha: 659,
    x_min: 76,
    x_max: 629,
    o: "m 76 287 q 103 410 76 357 q 176 498 131 463 q 274 549 221 534 l 274 557 q 193 594 227 570 q 141 656 159 618 q 123 748 123 694 q 151 858 123 814 q 227 927 180 901 q 331 969 275 954 q 286 965 313 967 q 228 963 259 964 q 164 962 196 962 l 119 962 l 119 1055 l 595 1055 l 595 968 l 557 968 q 440 955 498 968 q 335 915 382 941 q 260 847 288 888 q 232 750 232 806 q 285 637 232 676 q 463 599 338 599 l 576 599 l 576 512 l 460 512 q 315 484 374 512 q 225 407 256 456 q 194 295 194 358 q 223 186 194 224 q 307 131 253 149 q 436 97 361 113 q 549 60 507 82 q 610 8 591 38 q 629 -61 629 -22 q 603 -173 629 -120 q 547 -271 577 -227 l 439 -271 q 480 -208 462 -240 q 510 -144 499 -176 q 521 -88 521 -113 q 509 -51 521 -67 q 460 -19 497 -34 q 349 9 423 -5 q 198 59 259 24 q 107 150 138 94 q 76 287 76 206 z "
  },
  "\u03BF": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 z "
  },
  "\u03C0": {
    ha: 904,
    x_min: 17,
    x_max: 861,
    o: "m 781 79 q 815 83 800 79 q 841 92 831 87 l 841 3 q 807 -8 830 -3 q 752 -14 784 -14 q 641 30 679 -14 q 602 160 602 74 l 602 649 l 279 649 l 279 0 l 168 0 l 168 649 l 17 649 l 17 700 l 119 743 l 861 743 l 861 649 l 713 649 l 713 169 q 732 99 713 119 q 781 79 750 79 z "
  },
  "\u03C1": {
    ha: 835,
    x_min: 111,
    x_max: 758,
    o: "m 758 372 q 719 161 758 247 q 606 31 680 75 q 431 -14 533 -14 q 319 3 372 -14 q 225 50 265 20 l 219 50 q 224 -23 222 25 q 225 -131 225 -71 l 225 -334 l 111 -334 l 111 383 q 151 591 111 509 q 264 715 191 674 q 439 757 338 757 q 606 713 534 757 q 718 583 678 669 q 758 372 758 497 m 434 662 q 276 591 328 662 q 225 380 225 520 l 225 150 q 319 98 266 115 q 431 80 372 80 q 592 154 542 80 q 643 372 643 228 q 594 590 643 517 q 434 662 545 662 z "
  },
  "\u03C2": {
    ha: 670,
    x_min: 77,
    x_max: 632,
    o: "m 433 757 q 541 746 488 757 q 632 718 593 734 l 597 624 q 517 648 559 637 q 429 659 475 659 q 249 581 304 659 q 194 355 194 503 q 214 223 194 272 q 287 146 234 174 q 435 98 339 119 q 549 61 507 83 q 610 9 591 39 q 629 -61 629 -21 q 603 -175 629 -121 q 547 -271 576 -229 l 439 -271 q 480 -209 462 -241 q 511 -145 499 -176 q 522 -88 522 -114 q 510 -50 522 -66 q 461 -18 498 -33 q 351 10 425 -3 q 242 45 292 22 q 155 109 192 68 q 98 209 118 149 q 77 353 77 269 q 122 581 77 492 q 247 713 167 670 q 433 757 327 757 z "
  },
  "\u03C3": {
    ha: 850,
    x_min: 77,
    x_max: 816,
    o: "m 758 342 q 719 160 758 241 q 603 33 680 79 q 414 -14 527 -14 q 236 29 312 -14 q 119 154 160 72 q 77 354 77 236 q 126 577 77 492 q 265 703 174 663 q 480 743 355 743 l 816 743 l 816 649 l 637 649 q 724 519 691 595 q 758 342 758 444 m 194 354 q 217 212 194 274 q 290 115 240 151 q 418 80 339 80 q 589 153 535 80 q 642 340 642 226 q 629 456 642 401 q 589 559 615 511 q 526 649 563 608 l 480 649 q 264 581 335 649 q 194 354 194 513 z "
  },
  "\u03C4": {
    ha: 657,
    x_min: 14,
    x_max: 618,
    o: "m 618 743 l 618 648 l 328 648 l 328 227 q 365 111 328 144 q 463 77 401 77 q 526 81 494 77 q 580 92 558 85 l 580 7 q 524 -8 560 -1 q 447 -15 487 -15 q 330 5 382 -15 q 245 74 277 24 q 214 214 214 124 l 214 648 l 14 648 l 14 700 l 115 743 l 618 743 z "
  },
  "\u03C5": {
    ha: 847,
    x_min: 111,
    x_max: 770,
    o: "m 423 -14 q 235 32 303 -14 q 139 156 167 77 q 111 336 111 235 l 111 743 l 223 743 l 223 340 q 273 148 223 217 q 432 79 323 79 q 601 160 545 79 q 656 410 656 241 q 645 583 656 506 q 612 743 633 661 l 726 743 q 750 637 740 688 q 765 529 760 585 q 770 406 770 473 q 682 89 770 191 q 423 -14 595 -14 z "
  },
  "\u03C6": {
    ha: 996,
    x_min: 77,
    x_max: 918,
    o: "m 219 751 l 306 690 q 222 547 254 623 q 190 373 190 471 q 222 209 190 271 q 311 116 255 146 q 435 80 367 86 l 435 503 q 492 692 435 627 q 650 757 549 757 q 794 711 734 757 q 886 583 854 665 q 918 391 918 500 q 867 171 918 258 q 732 38 817 83 q 545 -13 647 -7 l 545 -334 l 435 -334 l 435 -13 q 250 34 330 -7 q 123 159 169 75 q 77 376 77 243 q 117 583 77 490 q 219 751 157 676 m 651 663 q 576 627 606 663 q 545 504 545 591 l 545 80 q 678 122 620 86 q 770 224 736 157 q 804 389 804 291 q 785 538 804 477 q 730 631 765 600 q 651 663 696 663 z "
  },
  "\u03C7": {
    ha: 756,
    x_min: -11,
    x_max: 747,
    o: "m 119 749 q 191 730 163 749 q 239 676 218 711 q 279 588 259 640 l 380 331 l 597 743 l 717 743 l 429 222 l 561 -113 q 594 -184 578 -156 q 632 -226 610 -212 q 686 -240 654 -240 q 720 -238 704 -240 q 747 -235 735 -237 l 747 -322 q 713 -330 732 -326 q 665 -334 693 -334 q 568 -312 606 -334 q 505 -249 530 -290 q 458 -151 480 -208 l 354 122 l 110 -334 l -11 -334 l 302 235 l 182 543 q 140 627 163 597 q 83 656 117 656 q 58 654 70 656 q 37 648 46 652 l 37 737 q 71 745 51 742 q 119 749 92 749 z "
  },
  "\u03C8": {
    ha: 1048,
    x_min: 111,
    x_max: 962,
    o: "m 581 1054 l 581 83 q 725 125 665 90 q 818 226 785 160 q 851 392 851 292 q 840 568 851 488 q 806 743 828 649 l 918 743 q 951 570 940 652 q 962 396 962 488 q 912 168 962 256 q 776 37 862 80 q 581 -12 690 -5 l 581 -334 l 471 -334 l 471 -12 q 283 32 364 -7 q 156 156 201 72 q 111 374 111 239 l 111 743 l 222 743 l 222 372 q 255 205 222 267 q 346 115 289 144 q 471 82 402 87 l 471 1054 l 581 1054 z "
  },
  "\u03C9": {
    ha: 1075,
    x_min: 78,
    x_max: 996,
    o: "m 913 743 q 960 619 942 680 q 987 495 979 558 q 996 359 996 432 q 967 166 996 250 q 880 34 938 81 q 735 -14 822 -14 q 610 19 658 -14 q 540 113 562 52 l 534 113 q 464 19 513 52 q 340 -14 416 -14 q 197 33 256 -14 q 108 163 138 79 q 78 359 78 247 q 87 495 78 432 q 115 618 96 558 q 161 743 133 679 l 276 743 q 212 557 233 646 q 191 358 191 469 q 233 150 191 220 q 347 80 275 80 q 424 104 394 80 q 469 169 454 127 q 484 264 484 211 l 484 477 l 591 477 l 591 264 q 607 164 591 205 q 653 102 623 123 q 726 80 683 80 q 810 112 775 80 q 865 205 846 143 q 884 358 884 267 q 863 557 884 469 q 798 743 842 646 l 913 743 z "
  },
  "\u03CA": {
    ha: 471,
    x_min: -16,
    x_max: 447,
    o: "m 225 743 l 225 218 q 252 113 225 148 q 336 79 279 79 q 397 84 366 79 q 447 94 429 89 l 447 7 q 392 -8 428 -2 q 321 -14 356 -14 q 214 6 260 -14 q 140 76 167 26 q 114 215 114 126 l 114 743 l 225 743 m -16 945 q 2 995 -16 979 q 45 1010 20 1010 q 90 995 72 1010 q 108 945 108 979 q 90 896 108 912 q 45 879 72 879 q 2 896 20 879 q -16 945 -16 912 m 245 945 q 262 995 245 979 q 305 1010 280 1010 q 349 995 331 1010 q 368 945 368 979 q 349 896 368 912 q 305 879 331 879 q 262 896 280 879 q 245 945 245 912 z "
  },
  "\u03CB": {
    ha: 847,
    x_min: 111,
    x_max: 770,
    o: "m 423 -14 q 235 32 303 -14 q 139 156 167 77 q 111 336 111 235 l 111 743 l 223 743 l 223 340 q 273 148 223 217 q 432 79 323 79 q 601 160 545 79 q 656 410 656 241 q 645 583 656 506 q 612 743 633 661 l 726 743 q 750 637 740 688 q 765 529 760 585 q 770 406 770 473 q 682 89 770 191 q 423 -14 595 -14 m 233 945 q 250 995 233 979 q 294 1010 268 1010 q 338 995 320 1010 q 356 945 356 979 q 338 896 356 912 q 294 879 320 879 q 250 896 268 879 q 233 945 233 912 m 493 945 q 511 995 493 979 q 553 1010 528 1010 q 597 995 579 1010 q 616 945 616 979 q 597 896 616 912 q 553 879 579 879 q 511 896 528 879 q 493 945 493 912 z "
  },
  "\u03CC": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 366 842 l 366 860 q 386 918 376 886 q 404 986 395 951 q 419 1056 412 1021 q 430 1118 426 1090 l 551 1118 l 551 1103 q 525 1025 544 1072 q 482 929 506 978 q 435 842 458 880 l 366 842 z "
  },
  "\u03CD": {
    ha: 847,
    x_min: 111,
    x_max: 770,
    o: "m 423 -14 q 235 32 303 -14 q 139 156 167 77 q 111 336 111 235 l 111 743 l 223 743 l 223 340 q 273 148 223 217 q 432 79 323 79 q 601 160 545 79 q 656 410 656 241 q 645 583 656 506 q 612 743 633 661 l 726 743 q 750 637 740 688 q 765 529 760 585 q 770 406 770 473 q 682 89 770 191 q 423 -14 595 -14 m 372 842 l 372 860 q 392 918 382 886 q 410 986 401 951 q 425 1056 418 1021 q 436 1118 432 1090 l 557 1118 l 557 1103 q 531 1025 550 1072 q 488 929 512 978 q 441 842 465 880 l 372 842 z "
  },
  "\u03CE": {
    ha: 1075,
    x_min: 78,
    x_max: 996,
    o: "m 913 743 q 960 619 942 680 q 987 495 979 558 q 996 359 996 432 q 967 166 996 250 q 880 34 938 81 q 735 -14 822 -14 q 610 19 658 -14 q 540 113 562 52 l 534 113 q 464 19 513 52 q 340 -14 416 -14 q 197 33 256 -14 q 108 163 138 79 q 78 359 78 247 q 87 495 78 432 q 115 618 96 558 q 161 743 133 679 l 276 743 q 212 557 233 646 q 191 358 191 469 q 233 150 191 220 q 347 80 275 80 q 424 104 394 80 q 469 169 454 127 q 484 264 484 211 l 484 477 l 591 477 l 591 264 q 607 164 591 205 q 653 102 623 123 q 726 80 683 80 q 810 112 775 80 q 865 205 846 143 q 884 358 884 267 q 863 557 884 469 q 798 743 842 646 l 913 743 m 483 842 l 483 860 q 502 918 492 886 q 520 986 512 951 q 536 1056 529 1021 q 547 1118 543 1090 l 668 1118 l 668 1103 q 642 1025 661 1072 q 599 929 623 978 q 552 842 575 880 l 483 842 z "
  },
  "\u0401": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 233 1194 q 250 1244 233 1228 q 294 1259 268 1259 q 338 1244 320 1259 q 356 1194 356 1228 q 338 1144 356 1161 q 294 1128 320 1128 q 250 1144 268 1128 q 233 1194 233 1161 m 493 1194 q 511 1244 493 1228 q 553 1259 528 1259 q 597 1244 579 1259 q 616 1194 616 1228 q 597 1144 616 1161 q 553 1128 579 1128 q 511 1144 528 1128 q 493 1194 493 1161 z "
  },
  "\u0402": {
    ha: 1019,
    x_min: 12,
    x_max: 912,
    o: "m 663 -14 q 604 -9 631 -14 q 559 2 576 -5 l 559 102 q 604 92 581 96 q 659 89 627 89 q 724 102 692 89 q 777 151 756 116 q 798 250 798 186 l 798 341 q 757 464 798 424 q 617 505 715 505 l 357 505 l 357 0 l 243 0 l 243 890 l 12 890 l 12 991 l 667 991 l 667 890 l 357 890 l 357 606 l 627 606 q 838 542 764 606 q 912 355 912 478 l 912 257 q 842 54 912 121 q 663 -14 772 -14 z "
  },
  "\u0403": {
    ha: 722,
    x_min: 136,
    x_max: 692,
    o: "m 692 991 l 692 888 l 251 888 l 251 0 l 136 0 l 136 991 l 692 991 m 618 1313 l 618 1299 q 581 1252 604 1280 q 529 1195 557 1225 q 472 1137 500 1164 q 418 1090 443 1110 l 343 1090 l 343 1107 q 391 1169 365 1133 q 441 1243 416 1205 q 481 1313 465 1282 l 618 1313 z "
  },
  "\u0404": {
    ha: 888,
    x_min: 85,
    x_max: 848,
    o: "m 565 904 q 427 882 489 904 q 319 818 365 861 q 245 712 273 774 q 210 566 218 649 l 701 566 l 701 466 l 206 466 q 233 306 210 376 q 301 187 257 235 q 411 113 346 138 q 562 87 476 87 q 692 99 631 87 q 811 127 753 110 l 811 26 q 691 -4 757 6 q 547 -14 626 -14 q 286 50 388 -14 q 134 229 183 114 q 85 497 85 344 q 116 705 85 611 q 209 866 148 799 q 361 970 271 934 q 568 1007 451 1007 q 723 991 654 1007 q 848 947 791 975 l 801 848 q 693 888 751 873 q 565 904 635 904 z "
  },
  "\u0405": {
    ha: 762,
    x_min: 71,
    x_max: 695,
    o: "m 695 264 q 651 114 695 176 q 529 19 608 52 q 344 -14 450 -14 q 237 -8 288 -14 q 145 7 187 -3 q 71 33 103 18 l 71 143 q 195 104 122 122 q 349 86 269 86 q 475 106 423 86 q 553 164 526 126 q 580 254 580 201 q 557 339 580 305 q 483 402 535 374 q 342 462 431 430 q 231 511 279 484 q 150 572 182 538 q 101 650 117 606 q 84 753 84 695 q 124 889 84 832 q 236 976 165 945 q 401 1006 308 1006 q 548 991 480 1006 q 671 951 615 976 l 635 852 q 522 889 582 874 q 398 904 462 904 q 291 885 334 904 q 224 833 247 867 q 201 752 201 799 q 223 665 201 700 q 293 604 245 631 q 422 548 342 577 q 570 480 509 516 q 663 394 631 445 q 695 264 695 342 z "
  },
  "\u0406": {
    ha: 388,
    x_min: 136,
    x_max: 251,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 z "
  },
  "\u0407": {
    ha: 388,
    x_min: 4,
    x_max: 387,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 4 1194 q 22 1244 4 1228 q 65 1259 39 1259 q 110 1244 92 1259 q 127 1194 127 1228 q 110 1144 127 1161 q 65 1128 92 1128 q 22 1144 39 1128 q 4 1194 4 1161 m 264 1194 q 282 1244 264 1228 q 325 1259 300 1259 q 369 1244 351 1259 q 387 1194 387 1228 q 369 1144 387 1161 q 325 1128 351 1128 q 282 1144 300 1128 q 264 1194 264 1161 z "
  },
  "\u0408": {
    ha: 373,
    x_min: -111,
    x_max: 245,
    o: "m -7 -261 q -67 -256 -41 -261 q -111 -243 -93 -252 l -111 -145 q -64 -156 -90 -152 q -10 -159 -39 -159 q 60 -144 28 -159 q 111 -94 92 -130 q 130 5 130 -58 l 130 991 l 245 991 l 245 14 q 215 -140 245 -79 q 127 -231 184 -201 q -7 -261 71 -261 z "
  },
  "\u0409": {
    ha: 1299,
    x_min: 1,
    x_max: 1243,
    o: "m 89 -16 q 42 -11 65 -16 q 1 1 19 -6 l 1 98 q 36 86 16 91 q 77 81 55 81 q 143 115 119 81 q 183 201 168 148 q 209 313 197 254 q 230 432 218 361 q 254 591 241 503 q 281 781 267 680 q 309 991 295 883 l 770 991 l 770 570 l 864 570 q 1088 534 1005 570 q 1207 435 1171 498 q 1243 290 1243 372 q 1156 78 1243 157 q 884 0 1069 0 l 655 0 l 655 890 l 406 890 q 390 764 398 829 q 372 632 381 698 q 353 502 362 566 q 334 382 343 439 q 315 281 325 326 q 271 120 297 186 q 202 19 245 54 q 89 -16 159 -16 m 770 99 l 869 99 q 1062 146 1000 99 q 1124 290 1124 193 q 1094 396 1124 357 q 1003 452 1064 435 q 850 469 942 469 l 770 469 l 770 99 z "
  },
  "\u040A": {
    ha: 1331,
    x_min: 136,
    x_max: 1275,
    o: "m 136 0 l 136 991 l 251 991 l 251 570 l 686 570 l 686 991 l 803 991 l 803 570 l 896 570 q 1120 534 1037 570 q 1239 435 1202 498 q 1275 290 1275 372 q 1188 78 1275 157 q 918 0 1101 0 l 686 0 l 686 468 l 251 468 l 251 0 l 136 0 m 803 99 l 903 99 q 1094 146 1032 99 q 1156 290 1156 193 q 1126 396 1156 357 q 1035 452 1096 435 q 882 469 975 469 l 803 469 l 803 99 z "
  },
  "\u040B": {
    ha: 1019,
    x_min: 12,
    x_max: 912,
    o: "m 702 991 l 702 888 l 357 888 l 357 605 l 633 605 q 840 542 768 605 q 912 355 912 479 l 912 0 l 798 0 l 798 341 q 758 464 798 425 q 624 503 719 503 l 357 503 l 357 0 l 241 0 l 241 888 l 12 888 l 12 991 l 702 991 z "
  },
  "\u040C": {
    ha: 847,
    x_min: 136,
    x_max: 846,
    o: "m 846 0 l 707 0 l 251 503 l 251 0 l 136 0 l 136 991 l 251 991 l 251 511 l 695 991 l 827 991 l 389 510 l 846 0 m 656 1313 l 656 1299 q 619 1252 642 1280 q 567 1195 595 1225 q 510 1137 538 1164 q 456 1090 481 1110 l 381 1090 l 381 1107 q 429 1169 403 1133 q 479 1243 454 1205 q 519 1313 503 1282 l 656 1313 z "
  },
  "\u040E": {
    ha: 858,
    x_min: 15,
    x_max: 858,
    o: "m 858 991 l 535 273 q 450 114 493 178 q 347 18 406 50 q 195 -14 287 -14 q 122 -8 156 -14 q 62 7 89 -2 l 62 121 q 121 101 90 109 q 188 94 153 94 q 277 110 240 94 q 343 161 315 126 q 397 254 372 196 l 15 991 l 141 991 l 423 437 q 435 414 429 427 q 447 387 441 401 q 458 359 453 373 l 463 359 q 472 383 467 370 q 482 410 477 397 q 492 433 488 424 l 735 991 l 858 991 m 690 1298 q 656 1183 684 1230 q 574 1114 628 1137 q 435 1090 519 1090 q 294 1113 347 1090 q 215 1182 241 1136 q 185 1298 190 1228 l 291 1298 q 331 1196 298 1223 q 437 1169 363 1169 q 539 1198 502 1169 q 584 1298 576 1226 l 690 1298 z "
  },
  "\u040F": {
    ha: 1011,
    x_min: 136,
    x_max: 874,
    o: "m 874 0 l 561 0 l 561 -259 l 442 -259 l 442 0 l 136 0 l 136 991 l 251 991 l 251 103 l 760 103 l 760 991 l 874 991 l 874 0 z "
  },
  "\u0410": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 z "
  },
  "\u0411": {
    ha: 850,
    x_min: 136,
    x_max: 775,
    o: "m 136 0 l 136 991 l 718 991 l 718 890 l 251 890 l 251 570 l 405 570 q 629 534 548 570 q 742 436 709 499 q 775 290 775 373 q 693 76 775 153 q 422 0 612 0 l 136 0 m 251 99 l 410 99 q 601 146 545 99 q 656 290 656 193 q 629 396 656 357 q 544 452 602 435 q 391 469 486 469 l 251 469 l 251 99 z "
  },
  "\u0412": {
    ha: 897,
    x_min: 136,
    x_max: 822,
    o: "m 136 991 l 416 991 q 696 936 602 991 q 789 747 789 880 q 767 643 789 689 q 703 568 745 597 q 600 526 661 538 l 600 519 q 715 482 665 509 q 793 406 765 455 q 822 282 822 357 q 780 127 822 191 q 660 32 737 64 q 477 0 583 0 l 136 0 l 136 991 m 251 566 l 441 566 q 620 609 570 566 q 670 734 670 652 q 611 856 670 819 q 422 893 551 893 l 251 893 l 251 566 m 251 469 l 251 98 l 457 98 q 644 150 589 98 q 699 290 699 202 q 674 387 699 347 q 594 448 650 427 q 447 469 539 469 l 251 469 z "
  },
  "\u0413": {
    ha: 722,
    x_min: 136,
    x_max: 692,
    o: "m 692 991 l 692 888 l 251 888 l 251 0 l 136 0 l 136 991 l 692 991 z "
  },
  "\u0414": {
    ha: 950,
    x_min: 8,
    x_max: 918,
    o: "m 796 991 l 796 103 l 918 103 l 918 -259 l 808 -259 l 808 0 l 119 0 l 119 -259 l 8 -259 l 8 103 l 84 103 q 179 298 135 190 q 259 525 224 406 q 316 762 294 643 q 344 991 338 882 l 796 991 m 682 888 l 446 888 q 418 700 439 804 q 365 488 397 597 q 291 280 332 380 q 206 103 251 180 l 682 103 l 682 888 z "
  },
  "\u0415": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 z "
  },
  "\u0416": {
    ha: 1168,
    x_min: 3,
    x_max: 1164,
    o: "m 406 510 l 18 991 l 146 991 l 528 511 l 528 991 l 640 991 l 640 511 l 1022 991 l 1150 991 l 762 511 l 1164 0 l 1031 0 l 640 503 l 640 0 l 528 0 l 528 503 l 136 0 l 3 0 l 406 510 z "
  },
  "\u0417": {
    ha: 810,
    x_min: 54,
    x_max: 734,
    o: "m 714 759 q 652 599 714 658 q 485 523 589 541 l 485 518 q 671 439 607 500 q 734 279 734 378 q 691 126 734 192 q 559 23 647 60 q 342 -14 472 -14 q 188 -1 261 -14 q 54 41 115 12 l 54 147 q 144 112 96 127 q 244 89 193 97 q 340 81 294 81 q 544 133 475 81 q 614 279 614 185 q 533 421 614 376 q 308 465 453 465 l 165 465 l 165 562 l 303 562 q 465 585 401 562 q 562 649 530 608 q 594 748 594 691 q 537 868 594 826 q 390 910 481 910 q 234 886 296 910 q 114 824 172 862 l 58 903 q 148 955 98 931 q 259 992 198 978 q 391 1006 320 1006 q 568 974 496 1006 q 677 887 640 943 q 714 759 714 831 z "
  },
  "\u0418": {
    ha: 1055,
    x_min: 137,
    x_max: 920,
    o: "m 137 991 l 245 991 l 245 418 q 244 348 245 386 q 242 273 243 309 q 239 206 241 236 q 236 160 237 176 l 241 160 l 793 991 l 920 991 l 920 0 l 812 0 l 812 566 q 814 643 812 602 q 817 721 815 683 q 821 789 819 759 q 823 836 823 819 l 817 836 l 264 0 l 137 0 l 137 991 z "
  },
  "\u0419": {
    ha: 1055,
    x_min: 137,
    x_max: 920,
    o: "m 137 991 l 245 991 l 245 418 q 244 348 245 386 q 242 273 243 309 q 239 206 241 236 q 236 160 237 176 l 241 160 l 793 991 l 920 991 l 920 0 l 812 0 l 812 566 q 814 643 812 602 q 817 721 815 683 q 821 789 819 759 q 823 836 823 819 l 817 836 l 264 0 l 137 0 l 137 991 m 798 1298 q 763 1183 791 1230 q 681 1114 735 1137 q 542 1090 627 1090 q 401 1113 454 1090 q 322 1182 348 1136 q 292 1298 297 1228 l 398 1298 q 438 1196 406 1223 q 544 1169 471 1169 q 646 1198 609 1169 q 691 1298 684 1226 l 798 1298 z "
  },
  "\u041A": {
    ha: 847,
    x_min: 136,
    x_max: 846,
    o: "m 846 0 l 707 0 l 251 503 l 251 0 l 136 0 l 136 991 l 251 991 l 251 511 l 695 991 l 827 991 l 389 510 l 846 0 z "
  },
  "\u041B": {
    ha: 977,
    x_min: 1,
    x_max: 841,
    o: "m 841 0 l 726 0 l 726 890 l 404 890 q 384 731 395 814 q 361 566 373 648 q 338 411 350 484 q 315 281 327 338 q 272 120 298 186 q 202 19 245 54 q 89 -16 159 -16 q 42 -11 65 -16 q 1 1 18 -6 l 1 98 q 36 86 16 91 q 77 81 55 81 q 144 116 119 81 q 183 203 169 150 q 209 311 198 256 q 229 428 218 357 q 254 588 241 498 q 280 781 267 678 q 308 991 294 883 l 841 991 l 841 0 z "
  },
  "\u041C": {
    ha: 1249,
    x_min: 136,
    x_max: 1114,
    o: "m 572 0 l 239 878 l 233 878 q 238 810 236 850 q 241 723 240 770 q 243 627 243 675 l 243 0 l 136 0 l 136 991 l 307 991 l 621 167 l 625 167 l 944 991 l 1114 991 l 1114 0 l 1000 0 l 1000 635 q 1001 723 1000 679 q 1004 807 1002 768 q 1008 876 1006 847 l 1003 876 l 666 0 l 572 0 z "
  },
  "\u041D": {
    ha: 1024,
    x_min: 136,
    x_max: 887,
    o: "m 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 772 569 l 772 991 l 887 991 l 887 0 z "
  },
  "\u041E": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 z "
  },
  "\u041F": {
    ha: 1011,
    x_min: 136,
    x_max: 874,
    o: "m 136 0 l 136 991 l 874 991 l 874 0 l 760 0 l 760 890 l 251 890 l 251 0 l 136 0 z "
  },
  "\u0420": {
    ha: 836,
    x_min: 136,
    x_max: 764,
    o: "m 395 991 q 675 917 587 991 q 764 702 764 842 q 743 582 764 639 q 676 483 722 526 q 555 415 630 439 q 372 390 480 390 l 251 390 l 251 0 l 136 0 l 136 991 l 395 991 m 384 893 l 251 893 l 251 489 l 359 489 q 517 509 454 489 q 612 575 581 530 q 644 697 644 621 q 581 845 644 796 q 384 893 518 893 z "
  },
  "\u0421": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 z "
  },
  "\u0422": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 z "
  },
  "\u0423": {
    ha: 858,
    x_min: 15,
    x_max: 858,
    o: "m 858 991 l 535 273 q 450 114 493 178 q 347 18 406 50 q 195 -14 287 -14 q 122 -8 156 -14 q 62 7 89 -2 l 62 121 q 121 101 90 109 q 188 94 153 94 q 277 110 240 94 q 343 161 315 126 q 397 254 372 196 l 15 991 l 141 991 l 423 437 q 435 414 429 427 q 447 387 441 401 q 458 359 453 373 l 463 359 q 472 383 467 370 q 482 410 477 397 q 492 433 488 424 l 735 991 l 858 991 z "
  },
  "\u0424": {
    ha: 1107,
    x_min: 71,
    x_max: 1034,
    o: "m 610 1006 l 610 884 q 860 832 767 881 q 994 701 953 783 q 1034 515 1034 619 q 1013 378 1034 445 q 942 259 991 312 q 811 173 893 205 q 610 139 730 141 l 610 -14 l 496 -14 l 496 139 q 291 174 373 141 q 161 261 209 208 q 92 380 113 315 q 71 514 71 446 q 94 655 71 589 q 166 772 116 722 q 297 852 216 823 q 496 884 378 882 l 496 1006 l 610 1006 m 496 786 q 316 750 383 783 q 218 656 248 716 q 189 515 189 597 q 221 368 189 430 q 322 272 254 306 q 496 234 391 237 l 496 786 m 610 786 l 610 234 q 786 273 718 237 q 886 370 854 308 q 918 517 918 433 q 888 658 918 599 q 790 750 858 718 q 610 786 723 783 z "
  },
  "\u0425": {
    ha: 802,
    x_min: 4,
    x_max: 798,
    o: "m 798 0 l 667 0 l 399 437 l 127 0 l 4 0 l 334 517 l 27 991 l 155 991 l 403 596 l 652 991 l 774 991 l 467 519 l 798 0 z "
  },
  "\u0426": {
    ha: 1024,
    x_min: 136,
    x_max: 993,
    o: "m 993 102 l 993 -259 l 882 -259 l 882 0 l 136 0 l 136 991 l 251 991 l 251 103 l 760 103 l 760 991 l 874 991 l 874 102 l 993 102 z "
  },
  "\u0427": {
    ha: 963,
    x_min: 113,
    x_max: 827,
    o: "m 827 0 l 712 0 l 712 411 q 562 365 633 382 q 404 347 490 347 q 188 412 263 347 q 113 598 113 477 l 113 991 l 229 991 l 229 614 q 272 491 229 532 q 415 449 316 449 q 565 464 498 449 q 712 508 631 479 l 712 991 l 827 991 l 827 0 z "
  },
  "\u0428": {
    ha: 1433,
    x_min: 136,
    x_max: 1296,
    o: "m 1296 0 l 136 0 l 136 991 l 251 991 l 251 103 l 657 103 l 657 991 l 772 991 l 772 103 l 1179 103 l 1179 991 l 1296 991 l 1296 0 z "
  },
  "\u0429": {
    ha: 1440,
    x_min: 136,
    x_max: 1397,
    o: "m 1397 102 l 1397 -259 l 1286 -259 l 1286 0 l 136 0 l 136 991 l 251 991 l 251 103 l 648 103 l 648 991 l 765 991 l 765 103 l 1163 103 l 1163 991 l 1278 991 l 1278 102 l 1397 102 z "
  },
  "\u042A": {
    ha: 953,
    x_min: 10,
    x_max: 882,
    o: "m 241 0 l 241 890 l 10 890 l 10 991 l 356 991 l 356 570 l 518 570 q 732 533 653 570 q 847 434 812 497 q 882 290 882 370 q 798 78 882 157 q 535 0 713 0 l 241 0 m 356 99 l 522 99 q 704 146 646 99 q 762 290 762 193 q 734 396 762 357 q 648 452 705 435 q 504 469 591 469 l 356 469 l 356 99 z "
  },
  "\u042B": {
    ha: 1178,
    x_min: 136,
    x_max: 1038,
    o: "m 136 0 l 136 991 l 251 991 l 251 570 l 410 570 q 623 533 544 570 q 737 434 703 497 q 772 290 772 370 q 688 78 772 157 q 425 0 604 0 l 136 0 m 251 98 l 414 98 q 594 146 536 98 q 652 290 652 193 q 624 396 652 357 q 539 451 596 435 q 397 468 483 468 l 251 468 l 251 98 m 922 0 l 922 991 l 1038 991 l 1038 0 l 922 0 z "
  },
  "\u042C": {
    ha: 880,
    x_min: 136,
    x_max: 808,
    o: "m 136 0 l 136 991 l 251 991 l 251 570 l 439 570 q 655 533 574 570 q 772 434 736 497 q 808 290 808 370 q 721 78 808 157 q 455 0 633 0 l 136 0 m 251 99 l 443 99 q 628 146 566 99 q 690 290 690 193 q 659 396 690 357 q 570 452 629 435 q 425 469 511 469 l 251 469 l 251 99 z "
  },
  "\u042D": {
    ha: 876,
    x_min: 43,
    x_max: 789,
    o: "m 321 904 q 195 888 253 904 q 90 851 137 873 l 43 948 q 173 991 100 976 q 323 1006 245 1006 q 529 969 441 1006 q 675 867 617 933 q 761 710 732 800 q 789 512 789 620 q 736 233 789 351 q 577 51 684 115 q 312 -14 471 -14 q 166 -4 226 -14 q 49 26 106 6 l 49 127 q 166 99 106 111 q 294 87 227 87 q 454 113 385 87 q 570 186 523 138 q 641 306 616 235 q 668 467 666 376 l 178 467 l 178 569 l 667 569 q 634 710 661 648 q 563 815 608 772 q 457 881 518 859 q 321 904 397 904 z "
  },
  "\u042E": {
    ha: 1455,
    x_min: 136,
    x_max: 1369,
    o: "m 1369 497 q 1342 289 1369 382 q 1259 127 1314 195 q 1123 23 1204 59 q 933 -14 1041 -14 q 696 46 792 -14 q 550 213 600 105 q 494 467 499 321 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 568 l 496 568 q 556 800 505 701 q 701 953 608 899 q 931 1007 795 1007 q 1172 944 1074 1007 q 1319 766 1269 880 q 1369 497 1369 651 m 614 499 q 648 280 614 372 q 751 137 682 187 q 930 86 821 86 q 1112 136 1041 86 q 1215 279 1182 186 q 1249 497 1249 371 q 1216 715 1249 623 q 1113 856 1183 806 q 932 905 1043 905 q 752 856 823 905 q 648 716 682 807 q 614 499 614 625 z "
  },
  "\u042F": {
    ha: 878,
    x_min: 31,
    x_max: 743,
    o: "m 424 414 l 166 0 l 31 0 l 309 435 q 207 484 254 452 q 131 571 160 515 q 102 713 102 627 q 195 920 102 849 q 471 991 288 991 l 743 991 l 743 0 l 627 0 l 627 414 l 424 414 m 627 893 l 475 893 q 336 874 393 893 q 250 814 279 855 q 221 708 221 774 q 283 563 221 614 q 474 513 346 513 l 627 513 l 627 893 z "
  },
  "\u0430": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 z "
  },
  "\u0431": {
    ha: 826,
    x_min: 80,
    x_max: 750,
    o: "m 80 446 q 111 717 80 605 q 205 898 141 829 q 370 991 269 966 q 547 1032 457 1015 q 721 1062 636 1049 l 741 963 q 651 949 698 957 q 557 933 604 941 q 469 915 511 924 q 396 897 428 906 q 297 842 338 881 q 231 736 255 804 q 202 565 207 668 l 210 565 q 266 624 231 595 q 350 672 301 653 q 460 692 399 692 q 621 650 556 692 q 718 533 685 608 q 750 357 750 458 q 708 153 750 235 q 591 28 667 70 q 414 -14 516 -14 q 274 17 336 -14 q 169 106 212 47 q 103 251 125 165 q 80 446 80 336 m 423 80 q 534 107 488 80 q 606 193 581 134 q 631 346 631 252 q 586 531 631 464 q 442 597 541 597 q 330 571 380 597 q 245 509 280 545 q 195 445 211 473 q 205 311 195 376 q 241 193 216 245 q 310 111 266 141 q 423 80 355 80 z "
  },
  "\u0432": {
    ha: 798,
    x_min: 119,
    x_max: 734,
    o: "m 709 557 q 669 448 709 487 q 564 395 628 409 l 564 390 q 684 340 633 380 q 734 217 734 300 q 704 104 734 153 q 608 28 673 56 q 439 0 543 0 l 119 0 l 119 743 l 436 743 q 577 725 516 743 q 674 667 639 707 q 709 557 709 626 m 617 217 q 567 312 617 283 q 422 341 517 341 l 232 341 l 232 92 l 425 92 q 568 120 519 92 q 617 217 617 149 m 595 544 q 556 623 595 597 q 429 649 517 649 l 232 649 l 232 435 l 410 435 q 548 462 501 435 q 595 544 595 488 z "
  },
  "\u0433": {
    ha: 599,
    x_min: 119,
    x_max: 570,
    o: "m 570 743 l 570 648 l 232 648 l 232 0 l 119 0 l 119 743 l 570 743 z "
  },
  "\u0434": {
    ha: 798,
    x_min: 26,
    x_max: 770,
    o: "m 663 743 l 663 96 l 770 96 l 770 -257 l 661 -257 l 661 0 l 134 0 l 134 -257 l 26 -257 l 26 96 l 85 96 q 191 289 149 184 q 254 510 233 394 q 277 743 276 625 l 663 743 m 554 654 l 378 654 q 349 452 372 555 q 289 257 326 350 q 202 96 252 165 l 554 96 l 554 654 z "
  },
  "\u0435": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 z "
  },
  "\u0436": {
    ha: 1021,
    x_min: 3,
    x_max: 1016,
    o: "m 989 743 l 680 382 l 1016 0 l 887 0 l 562 377 l 562 0 l 456 0 l 456 377 l 132 0 l 3 0 l 338 382 l 28 743 l 153 743 l 456 382 l 456 743 l 562 743 l 562 382 l 867 743 l 989 743 z "
  },
  "\u0437": {
    ha: 671,
    x_min: 45,
    x_max: 608,
    o: "m 310 757 q 454 734 393 757 q 549 668 515 711 q 582 562 582 625 q 545 455 582 495 q 444 397 509 415 l 444 392 q 527 357 490 380 q 586 297 564 334 q 608 205 608 260 q 574 93 608 143 q 471 15 540 43 q 296 -14 401 -14 q 197 -8 243 -14 q 112 9 150 -2 q 45 35 74 20 l 45 137 q 157 96 93 114 q 294 79 220 79 q 397 92 351 79 q 469 135 442 105 q 496 212 496 164 q 472 285 496 256 q 401 328 448 314 q 282 342 354 342 l 182 342 l 182 434 l 264 434 q 417 461 360 434 q 474 553 474 488 q 430 636 474 608 q 304 663 386 663 q 196 651 243 663 q 95 615 149 638 l 55 705 q 177 744 113 731 q 310 757 241 757 z "
  },
  "\u0438": {
    ha: 883,
    x_min: 119,
    x_max: 762,
    o: "m 226 743 l 226 276 q 225 241 226 262 q 223 196 224 220 q 221 150 222 172 q 218 113 220 127 l 624 743 l 762 743 l 762 0 l 657 0 l 657 456 q 658 511 657 477 q 660 578 659 545 q 662 629 661 611 l 258 0 l 119 0 l 119 743 l 226 743 z "
  },
  "\u0439": {
    ha: 883,
    x_min: 119,
    x_max: 762,
    o: "m 226 743 l 226 276 q 225 241 226 262 q 223 196 224 220 q 221 150 222 172 q 218 113 220 127 l 624 743 l 762 743 l 762 0 l 657 0 l 657 456 q 658 511 657 477 q 660 578 659 545 q 662 629 661 611 l 258 0 l 119 0 l 119 743 l 226 743 m 707 1049 q 672 935 701 981 q 590 865 644 888 q 451 842 536 842 q 310 864 363 842 q 232 933 257 887 q 201 1049 206 979 l 307 1049 q 347 947 315 975 q 453 920 380 920 q 555 949 518 920 q 600 1049 593 977 l 707 1049 z "
  },
  "\u043A": {
    ha: 718,
    x_min: 119,
    x_max: 702,
    o: "m 552 743 l 676 743 l 355 385 l 702 0 l 570 0 l 232 377 l 232 0 l 119 0 l 119 743 l 232 743 l 232 382 l 552 743 z "
  },
  "\u043B": {
    ha: 795,
    x_min: 9,
    x_max: 676,
    o: "m 676 0 l 562 0 l 562 649 l 336 649 q 301 348 322 473 q 250 144 281 223 q 175 28 219 65 q 71 -9 132 -9 q 37 -7 53 -9 q 9 0 20 -5 l 9 85 q 27 81 18 83 q 48 80 37 80 q 104 105 79 80 q 150 182 130 131 q 187 313 171 234 q 216 499 203 392 q 238 743 229 607 l 676 743 l 676 0 z "
  },
  "\u043C": {
    ha: 1019,
    x_min: 118,
    x_max: 903,
    o: "m 903 743 l 903 0 l 802 0 l 802 484 q 803 545 802 514 q 808 607 805 576 l 804 607 l 557 0 l 461 0 l 220 607 l 216 607 q 219 545 218 576 q 220 480 220 514 l 220 0 l 118 0 l 118 743 l 269 743 l 509 136 l 753 743 l 903 743 z "
  },
  "\u043D": {
    ha: 879,
    x_min: 119,
    x_max: 759,
    o: "m 232 743 l 232 431 l 646 431 l 646 743 l 759 743 l 759 0 l 646 0 l 646 336 l 232 336 l 232 0 l 119 0 l 119 743 l 232 743 z "
  },
  "\u043E": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 z "
  },
  "\u043F": {
    ha: 861,
    x_min: 119,
    x_max: 741,
    o: "m 741 743 l 741 0 l 628 0 l 628 646 l 232 646 l 232 0 l 119 0 l 119 743 l 741 743 z "
  },
  "\u0440": {
    ha: 850,
    x_min: 119,
    x_max: 772,
    o: "m 468 757 q 690 661 607 757 q 772 374 772 566 q 734 161 772 247 q 628 31 696 75 q 465 -14 559 -14 q 361 2 406 -14 q 285 44 317 18 q 232 102 253 71 l 224 102 q 229 38 226 75 q 232 -27 232 1 l 232 -332 l 119 -332 l 119 743 l 212 743 l 227 633 l 232 633 q 285 695 254 667 q 361 740 316 724 q 468 757 406 757 m 448 662 q 324 632 371 662 q 255 543 277 602 q 232 394 233 484 l 232 372 q 253 213 232 278 q 321 114 273 148 q 450 80 369 80 q 565 117 519 80 q 634 221 611 155 q 656 375 656 288 q 605 584 656 507 q 448 662 554 662 z "
  },
  "\u0441": {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 z "
  },
  "\u0442": {
    ha: 654,
    x_min: 28,
    x_max: 625,
    o: "m 625 648 l 380 648 l 380 0 l 269 0 l 269 648 l 28 648 l 28 743 l 625 743 l 625 648 z "
  },
  "\u0443": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 z "
  },
  "\u0444": {
    ha: 994,
    x_min: 76,
    x_max: 916,
    o: "m 551 1055 l 551 754 q 743 697 661 745 q 871 567 825 649 q 916 372 916 485 q 872 178 916 260 q 747 47 829 95 q 551 -11 665 -1 l 551 -334 l 441 -334 l 441 -11 q 249 45 330 -3 q 121 176 167 93 q 76 372 76 258 q 120 567 76 485 q 245 697 163 650 q 444 754 328 745 l 444 1055 l 551 1055 m 444 661 q 302 617 358 653 q 220 519 247 581 q 193 372 193 458 q 220 223 193 286 q 303 125 248 161 q 444 81 359 90 l 444 661 m 551 659 l 551 81 q 691 127 636 90 q 773 225 747 163 q 800 372 800 287 q 739 573 800 500 q 551 659 677 646 z "
  },
  "\u0445": {
    ha: 727,
    x_min: 26,
    x_max: 701,
    o: "m 296 380 l 39 743 l 168 743 l 363 457 l 559 743 l 686 743 l 429 380 l 701 0 l 572 0 l 363 303 l 154 0 l 26 0 l 296 380 z "
  },
  "\u0446": {
    ha: 869,
    x_min: 119,
    x_max: 842,
    o: "m 842 -257 l 732 -257 l 732 0 l 119 0 l 119 743 l 232 743 l 232 96 l 626 96 l 626 743 l 739 743 l 739 94 l 842 94 l 842 -257 z "
  },
  "\u0447": {
    ha: 843,
    x_min: 104,
    x_max: 724,
    o: "m 217 743 l 217 476 q 255 373 217 406 q 367 340 294 340 q 495 361 437 340 q 612 420 553 383 l 612 743 l 724 743 l 724 0 l 612 0 l 612 333 q 489 270 549 293 q 345 247 429 247 q 167 307 230 247 q 104 468 104 366 l 104 743 l 217 743 z "
  },
  "\u0448": {
    ha: 1236,
    x_min: 119,
    x_max: 1116,
    o: "m 1116 743 l 1116 0 l 119 0 l 119 743 l 231 743 l 231 96 l 560 96 l 560 743 l 673 743 l 673 96 l 1003 96 l 1003 743 l 1116 743 z "
  },
  "\u0449": {
    ha: 1246,
    x_min: 119,
    x_max: 1221,
    o: "m 1115 743 l 1115 94 l 1221 94 l 1221 -256 l 1108 -256 l 1108 0 l 119 0 l 119 743 l 231 743 l 231 96 l 560 96 l 560 743 l 673 743 l 673 96 l 1003 96 l 1003 743 l 1115 743 z "
  },
  "\u044A": {
    ha: 954,
    x_min: 26,
    x_max: 882,
    o: "m 373 743 l 373 437 l 588 437 q 753 413 688 437 q 850 342 818 389 q 882 227 882 296 q 851 106 882 157 q 755 28 821 56 q 585 0 690 0 l 260 0 l 260 648 l 26 648 l 26 743 l 373 743 m 583 342 l 373 342 l 373 92 l 585 92 q 721 122 671 92 q 770 221 770 152 q 724 315 770 289 q 583 342 677 342 z "
  },
  "\u044B": {
    ha: 1067,
    x_min: 119,
    x_max: 948,
    o: "m 119 0 l 119 743 l 232 743 l 232 437 l 435 437 q 592 413 530 437 q 683 342 653 389 q 713 227 713 296 q 683 106 713 157 q 591 28 654 56 q 428 0 528 0 l 119 0 m 232 92 l 417 92 q 551 121 501 92 q 602 221 602 151 q 555 316 602 290 q 420 343 508 343 l 232 343 l 232 92 m 836 0 l 836 743 l 948 743 l 948 0 l 836 0 z "
  },
  "\u044C": {
    ha: 819,
    x_min: 119,
    x_max: 744,
    o: "m 232 437 l 460 437 q 618 413 555 437 q 712 342 681 389 q 744 227 744 296 q 713 106 744 157 q 618 28 682 56 q 453 0 554 0 l 119 0 l 119 743 l 232 743 l 232 437 m 631 221 q 582 316 631 290 q 447 343 534 343 l 232 343 l 232 92 l 448 92 q 580 122 529 92 q 631 221 631 152 z "
  },
  "\u044D": {
    ha: 686,
    x_min: 44,
    x_max: 610,
    o: "m 240 -14 q 131 -3 177 -14 q 44 26 84 7 l 44 124 q 134 95 86 107 q 242 83 182 83 q 373 111 318 83 q 458 195 427 138 q 494 336 489 252 l 117 336 l 117 429 l 492 429 q 427 603 484 547 q 258 660 370 660 q 171 649 218 660 q 85 623 123 637 l 54 715 q 148 745 93 733 q 258 757 202 757 q 442 718 363 757 q 566 594 522 678 q 610 373 610 509 q 564 157 610 243 q 434 29 517 71 q 240 -14 351 -14 z "
  },
  "\u044E": {
    ha: 1152,
    x_min: 119,
    x_max: 1074,
    o: "m 1074 373 q 1035 165 1074 252 q 924 32 996 78 q 750 -14 851 -14 q 586 27 656 -14 q 475 146 515 68 q 429 336 435 224 l 231 336 l 231 0 l 119 0 l 119 743 l 231 743 l 231 431 l 430 431 q 480 607 439 534 q 590 718 521 680 q 753 757 659 757 q 923 711 850 757 q 1035 579 995 665 q 1074 373 1074 494 m 544 373 q 565 214 544 279 q 632 114 587 149 q 751 80 678 80 q 870 114 824 80 q 937 213 916 148 q 958 373 958 279 q 937 530 958 466 q 869 628 915 595 q 751 662 824 662 q 633 628 679 662 q 566 530 587 595 q 544 373 544 466 z "
  },
  "\u044F": {
    ha: 769,
    x_min: 23,
    x_max: 650,
    o: "m 155 0 l 23 0 l 237 313 q 151 348 191 323 q 86 416 111 373 q 61 524 61 460 q 133 687 61 631 q 321 743 204 743 l 650 743 l 650 0 l 538 0 l 538 298 l 349 298 l 155 0 m 170 524 q 218 425 170 457 q 353 393 265 393 l 538 393 l 538 649 l 334 649 q 209 614 247 649 q 170 524 170 579 z "
  },
  "\u0451": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 203 945 q 221 995 203 979 q 264 1010 239 1010 q 309 995 291 1010 q 327 945 327 979 q 309 896 327 912 q 264 879 291 879 q 221 896 239 879 q 203 945 203 912 m 464 945 q 481 995 464 979 q 524 1010 499 1010 q 568 995 550 1010 q 587 945 587 979 q 568 896 587 912 q 524 879 550 879 q 481 896 499 879 q 464 945 464 912 z "
  },
  "\u0452": {
    ha: 852,
    x_min: 14,
    x_max: 740,
    o: "m 552 -334 q 499 -329 522 -334 q 460 -317 477 -323 l 460 -224 q 497 -234 478 -231 q 537 -238 515 -238 q 602 -212 576 -238 q 627 -120 627 -186 l 627 454 q 585 592 627 547 q 456 637 543 637 q 325 606 374 637 q 254 514 276 574 q 233 365 233 453 l 233 0 l 119 0 l 119 844 l 14 844 l 14 928 l 119 928 l 119 1055 l 231 1055 l 231 928 l 506 928 l 506 844 l 231 844 l 231 715 q 230 662 231 688 q 227 611 229 635 l 233 611 q 292 677 256 650 q 373 718 328 704 q 470 732 419 732 q 620 704 559 732 q 710 615 680 675 q 740 461 740 555 l 740 -116 q 719 -233 740 -184 q 656 -308 698 -282 q 552 -334 614 -334 z "
  },
  "\u0453": {
    ha: 599,
    x_min: 119,
    x_max: 570,
    o: "m 570 743 l 570 648 l 232 648 l 232 0 l 119 0 l 119 743 l 570 743 m 542 1064 l 542 1050 q 505 1003 528 1031 q 453 946 481 976 q 396 888 425 916 q 342 842 367 861 l 267 842 l 267 858 q 315 920 289 884 q 365 995 340 956 q 406 1064 389 1033 l 542 1064 z "
  },
  "\u0454": {
    ha: 685,
    x_min: 77,
    x_max: 637,
    o: "m 429 -14 q 245 27 325 -14 q 122 152 166 68 q 77 368 77 237 q 124 589 77 503 q 251 716 170 675 q 435 757 332 757 q 545 746 492 757 q 637 718 598 735 l 604 625 q 519 650 566 640 q 433 660 473 660 q 309 634 359 660 q 230 557 258 608 q 194 429 201 506 l 570 429 l 570 336 l 193 336 q 223 196 197 253 q 300 111 250 140 q 427 83 351 83 q 537 95 488 83 q 627 124 586 107 l 627 26 q 541 -3 588 7 q 429 -14 494 -14 z "
  },
  "\u0455": {
    ha: 662,
    x_min: 70,
    x_max: 600,
    o: "m 600 203 q 564 84 600 132 q 462 11 528 35 q 304 -14 396 -14 q 170 -1 227 -14 q 70 33 113 11 l 70 137 q 178 96 115 115 q 307 78 241 78 q 447 109 404 78 q 490 194 490 140 q 473 248 490 224 q 415 293 456 271 q 302 342 374 315 q 179 396 231 369 q 99 461 127 422 q 71 562 71 500 q 148 706 71 656 q 348 757 224 757 q 474 744 415 757 q 583 708 532 730 l 545 618 q 447 651 499 637 q 340 665 395 665 q 221 639 262 665 q 179 568 179 613 q 198 511 179 534 q 260 469 218 489 q 373 423 303 450 q 494 370 443 397 q 572 303 545 342 q 600 203 600 264 z "
  },
  "\u0456": {
    ha: 351,
    x_min: 109,
    x_max: 244,
    o: "m 231 743 l 231 0 l 119 0 l 119 743 l 231 743 m 176 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 q 128 1003 109 985 q 176 1021 147 1021 z "
  },
  "\u0457": {
    ha: 351,
    x_min: -17,
    x_max: 366,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m -17 945 q 1 995 -17 979 q 44 1010 18 1010 q 89 995 71 1010 q 106 945 106 979 q 89 896 106 912 q 44 879 71 879 q 1 896 18 879 q -17 945 -17 912 m 243 945 q 261 995 243 979 q 304 1010 279 1010 q 348 995 330 1010 q 366 945 366 979 q 348 896 366 912 q 304 879 330 879 q 261 896 279 879 q 243 945 243 912 z "
  },
  "\u0458": {
    ha: 351,
    x_min: -76,
    x_max: 244,
    o: "m 29 -334 q -31 -329 -5 -334 q -76 -317 -57 -323 l -76 -225 q -33 -236 -55 -232 q 16 -239 -12 -239 q 90 -214 62 -239 q 119 -120 119 -188 l 119 743 l 231 743 l 231 -117 q 210 -234 231 -185 q 143 -308 188 -282 q 29 -334 98 -334 m 109 947 q 128 1003 109 985 q 176 1021 147 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 z "
  },
  "\u0459": {
    ha: 1166,
    x_min: 9,
    x_max: 1091,
    o: "m 631 743 l 631 437 l 811 437 q 969 413 907 437 q 1061 342 1031 389 q 1091 227 1091 296 q 1061 106 1091 157 q 966 28 1031 56 q 797 0 901 0 l 517 0 l 517 648 l 334 648 q 301 347 321 472 q 249 144 280 222 q 175 28 218 65 q 73 -9 132 -9 q 36 -7 52 -9 q 9 0 20 -5 l 9 84 q 26 80 16 82 q 47 79 36 79 q 103 104 77 79 q 149 181 128 130 q 186 313 170 233 q 216 499 203 392 q 238 743 229 607 l 631 743 m 790 342 l 631 342 l 631 92 l 792 92 q 928 122 877 92 q 979 221 979 152 q 930 315 979 289 q 790 342 882 342 z "
  },
  "\u045A": {
    ha: 1235,
    x_min: 119,
    x_max: 1158,
    o: "m 698 743 l 698 435 l 876 435 q 1036 412 973 435 q 1128 342 1098 389 q 1158 227 1158 296 q 1129 106 1158 157 q 1035 28 1099 56 q 866 0 970 0 l 581 0 l 581 338 l 234 338 l 234 0 l 119 0 l 119 743 l 234 743 l 234 433 l 584 433 l 584 743 l 698 743 m 860 342 l 695 342 l 695 92 l 860 92 q 996 122 945 92 q 1046 221 1046 152 q 999 315 1046 289 q 860 342 952 342 z "
  },
  "\u045B": {
    ha: 852,
    x_min: 14,
    x_max: 739,
    o: "m 231 1055 l 231 928 l 530 928 l 530 843 l 231 843 l 231 715 q 230 661 231 688 q 225 611 229 634 l 233 611 q 291 677 256 650 q 373 718 327 704 q 470 732 418 732 q 618 704 559 732 q 708 615 678 675 q 739 460 739 555 l 739 0 l 627 0 l 627 452 q 585 591 627 545 q 455 637 543 637 q 323 606 372 637 q 253 514 274 574 q 231 365 231 453 l 231 0 l 119 0 l 119 843 l 14 843 l 14 928 l 119 928 l 119 1055 l 231 1055 z "
  },
  "\u045C": {
    ha: 718,
    x_min: 119,
    x_max: 702,
    o: "m 552 743 l 676 743 l 355 385 l 702 0 l 570 0 l 232 377 l 232 0 l 119 0 l 119 743 l 232 743 l 232 382 l 552 743 m 577 1064 l 577 1050 q 540 1003 564 1031 q 488 946 517 976 q 431 888 460 916 q 378 842 402 861 l 302 842 l 302 858 q 350 920 324 884 q 400 995 376 956 q 441 1064 425 1033 l 577 1064 z "
  },
  "\u045E": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 604 1049 q 570 935 598 981 q 488 865 542 888 q 349 842 433 842 q 208 864 261 842 q 129 933 155 887 q 99 1049 104 979 l 205 1049 q 245 947 212 975 q 351 920 277 920 q 453 949 416 920 q 498 1049 490 977 l 604 1049 z "
  },
  "\u045F": {
    ha: 863,
    x_min: 119,
    x_max: 743,
    o: "m 379 0 l 119 0 l 119 743 l 232 743 l 232 96 l 631 96 l 631 743 l 743 743 l 743 0 l 489 0 l 489 -256 l 379 -256 l 379 0 z "
  },
  "\u0490": {
    ha: 732,
    x_min: 136,
    x_max: 703,
    o: "m 703 1196 l 703 888 l 251 888 l 251 0 l 136 0 l 136 991 l 595 991 l 595 1196 l 703 1196 z "
  },
  "\u0491": {
    ha: 602,
    x_min: 119,
    x_max: 572,
    o: "m 572 961 l 572 655 l 232 655 l 232 0 l 119 0 l 119 743 l 462 743 l 462 961 l 572 961 z "
  },
  "\u1E80": {
    ha: 1282,
    x_min: 20,
    x_max: 1262,
    o: "m 1262 991 l 997 0 l 881 0 l 684 667 q 668 725 675 696 q 653 780 660 753 q 642 826 646 806 q 635 856 637 846 q 630 826 634 846 q 621 781 627 806 q 607 726 615 755 q 591 667 600 696 l 399 0 l 283 0 l 20 991 l 140 991 l 300 370 q 315 308 308 338 q 328 250 322 278 q 338 194 334 221 q 347 141 343 167 q 356 196 351 168 q 368 255 361 225 q 382 315 374 285 q 399 376 390 346 l 577 991 l 696 991 l 882 372 q 899 309 891 340 q 914 248 907 277 q 925 192 920 218 q 935 141 930 165 q 946 211 939 174 q 962 288 953 248 q 982 370 971 328 l 1141 991 l 1262 991 m 595 1313 q 635 1243 611 1282 q 686 1169 659 1205 q 735 1107 713 1133 l 735 1090 l 659 1090 q 605 1137 634 1110 q 548 1195 576 1164 q 496 1252 519 1225 q 460 1299 473 1280 l 460 1313 l 595 1313 z "
  },
  "\u1E81": {
    ha: 1076,
    x_min: 16,
    x_max: 1060,
    o: "m 724 1 l 591 434 q 575 489 583 462 q 561 540 567 515 q 549 586 554 565 q 541 623 544 608 l 536 623 q 528 586 533 608 q 517 540 524 565 q 503 487 511 515 q 486 432 496 460 l 348 1 l 221 1 l 16 745 l 133 745 l 240 334 q 261 254 251 294 q 278 179 271 214 q 288 119 285 144 l 294 119 q 303 159 298 136 q 314 210 308 183 q 328 263 321 237 q 343 314 336 290 l 480 745 l 602 745 l 734 315 q 754 247 744 282 q 772 179 764 212 q 783 120 780 146 l 789 120 q 799 177 791 143 q 816 252 806 211 q 837 334 826 292 l 945 745 l 1060 745 l 854 1 l 724 1 m 494 1064 q 534 995 510 1033 q 585 920 558 956 q 634 858 612 884 l 634 842 l 557 842 q 504 888 533 861 q 447 946 475 916 q 395 1003 418 976 q 359 1050 372 1031 l 359 1064 l 494 1064 z "
  },
  "\u1E82": {
    ha: 1282,
    x_min: 20,
    x_max: 1262,
    o: "m 1262 991 l 997 0 l 881 0 l 684 667 q 668 725 675 696 q 653 780 660 753 q 642 826 646 806 q 635 856 637 846 q 630 826 634 846 q 621 781 627 806 q 607 726 615 755 q 591 667 600 696 l 399 0 l 283 0 l 20 991 l 140 991 l 300 370 q 315 308 308 338 q 328 250 322 278 q 338 194 334 221 q 347 141 343 167 q 356 196 351 168 q 368 255 361 225 q 382 315 374 285 q 399 376 390 346 l 577 991 l 696 991 l 882 372 q 899 309 891 340 q 914 248 907 277 q 925 192 920 218 q 935 141 930 165 q 946 211 939 174 q 962 288 953 248 q 982 370 971 328 l 1141 991 l 1262 991 m 838 1313 l 838 1299 q 801 1252 825 1280 q 749 1195 778 1225 q 692 1137 721 1164 q 639 1090 663 1110 l 564 1090 l 564 1107 q 611 1169 585 1133 q 661 1243 637 1205 q 702 1313 686 1282 l 838 1313 z "
  },
  "\u1E83": {
    ha: 1076,
    x_min: 16,
    x_max: 1060,
    o: "m 724 1 l 591 434 q 575 489 583 462 q 561 540 567 515 q 549 586 554 565 q 541 623 544 608 l 536 623 q 528 586 533 608 q 517 540 524 565 q 503 487 511 515 q 486 432 496 460 l 348 1 l 221 1 l 16 745 l 133 745 l 240 334 q 261 254 251 294 q 278 179 271 214 q 288 119 285 144 l 294 119 q 303 159 298 136 q 314 210 308 183 q 328 263 321 237 q 343 314 336 290 l 480 745 l 602 745 l 734 315 q 754 247 744 282 q 772 179 764 212 q 783 120 780 146 l 789 120 q 799 177 791 143 q 816 252 806 211 q 837 334 826 292 l 945 745 l 1060 745 l 854 1 l 724 1 m 736 1064 l 736 1050 q 700 1003 723 1031 q 648 946 676 976 q 590 888 619 916 q 537 842 562 861 l 462 842 l 462 858 q 509 920 484 884 q 559 995 535 956 q 600 1064 584 1033 l 736 1064 z "
  },
  "\u1E84": {
    ha: 1282,
    x_min: 20,
    x_max: 1262,
    o: "m 1262 991 l 997 0 l 881 0 l 684 667 q 668 725 675 696 q 653 780 660 753 q 642 826 646 806 q 635 856 637 846 q 630 826 634 846 q 621 781 627 806 q 607 726 615 755 q 591 667 600 696 l 399 0 l 283 0 l 20 991 l 140 991 l 300 370 q 315 308 308 338 q 328 250 322 278 q 338 194 334 221 q 347 141 343 167 q 356 196 351 168 q 368 255 361 225 q 382 315 374 285 q 399 376 390 346 l 577 991 l 696 991 l 882 372 q 899 309 891 340 q 914 248 907 277 q 925 192 920 218 q 935 141 930 165 q 946 211 939 174 q 962 288 953 248 q 982 370 971 328 l 1141 991 l 1262 991 m 449 1194 q 467 1244 449 1228 q 510 1259 484 1259 q 554 1244 536 1259 q 572 1194 572 1228 q 554 1144 572 1161 q 510 1128 536 1128 q 467 1144 484 1128 q 449 1194 449 1161 m 709 1194 q 727 1244 709 1228 q 770 1259 745 1259 q 814 1244 795 1259 q 832 1194 832 1228 q 814 1144 832 1161 q 770 1128 795 1128 q 727 1144 745 1128 q 709 1194 709 1161 z "
  },
  "\u1E85": {
    ha: 1076,
    x_min: 16,
    x_max: 1060,
    o: "m 724 1 l 591 434 q 575 489 583 462 q 561 540 567 515 q 549 586 554 565 q 541 623 544 608 l 536 623 q 528 586 533 608 q 517 540 524 565 q 503 487 511 515 q 486 432 496 460 l 348 1 l 221 1 l 16 745 l 133 745 l 240 334 q 261 254 251 294 q 278 179 271 214 q 288 119 285 144 l 294 119 q 303 159 298 136 q 314 210 308 183 q 328 263 321 237 q 343 314 336 290 l 480 745 l 602 745 l 734 315 q 754 247 744 282 q 772 179 764 212 q 783 120 780 146 l 789 120 q 799 177 791 143 q 816 252 806 211 q 837 334 826 292 l 945 745 l 1060 745 l 854 1 l 724 1 m 348 945 q 366 995 348 979 q 409 1010 383 1010 q 453 995 435 1010 q 471 945 471 979 q 453 896 471 912 q 409 879 435 879 q 366 896 383 879 q 348 945 348 912 m 608 945 q 626 995 608 979 q 669 1010 644 1010 q 713 995 694 1010 q 731 945 731 979 q 713 896 731 912 q 669 879 694 879 q 626 896 644 879 q 608 945 608 912 z "
  },
  "\u1EF2": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 342 1313 q 382 1243 358 1282 q 433 1169 406 1205 q 482 1107 460 1133 l 482 1090 l 406 1090 q 352 1137 381 1110 q 295 1195 323 1164 q 243 1252 267 1225 q 208 1299 220 1280 l 208 1313 l 342 1313 z "
  },
  "\u1EF3": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 302 1064 q 342 995 318 1033 q 393 920 366 956 q 442 858 420 884 l 442 842 l 366 842 q 312 888 341 861 q 255 946 283 916 q 203 1003 227 976 q 168 1050 180 1031 l 168 1064 l 302 1064 z "
  },
  "\u2013": {
    ha: 694,
    x_min: 56,
    x_max: 639,
    o: "m 56 323 l 56 423 l 639 423 l 639 323 l 56 323 z "
  },
  "\u2014": {
    ha: 1389,
    x_min: 56,
    x_max: 1333,
    o: "m 56 323 l 56 423 l 1333 423 l 1333 323 l 56 323 z "
  },
  "\u2015": {
    ha: 1389,
    x_min: 56,
    x_max: 1333,
    o: "m 56 323 l 56 423 l 1333 423 l 1333 323 l 56 323 z "
  },
  "\u2017": {
    ha: 568,
    x_min: -3,
    x_max: 571,
    o: "m 571 -306 l -3 -306 l -3 -222 l 571 -222 l 571 -306 m 571 -129 l -3 -129 l -3 -46 l 571 -46 l 571 -129 z "
  },
  "\u2018": {
    ha: 235,
    x_min: 18,
    x_max: 218,
    o: "m 26 652 l 18 667 q 50 773 31 716 q 91 886 68 829 q 136 991 113 943 l 218 991 q 191 879 205 939 q 165 759 177 819 q 146 652 154 700 l 26 652 z "
  },
  "\u2019": {
    ha: 235,
    x_min: 18,
    x_max: 218,
    o: "m 208 991 l 218 977 q 186 870 205 927 q 145 758 168 814 q 100 652 123 701 l 18 652 q 38 734 28 690 q 58 824 49 779 q 76 912 68 869 q 89 991 83 955 l 208 991 z "
  },
  "\u201A": {
    ha: 340,
    x_min: 44,
    x_max: 244,
    o: "m 234 161 l 244 146 q 213 40 232 96 q 172 -73 194 -17 q 127 -179 149 -130 l 44 -179 q 65 -96 54 -140 q 85 -7 75 -52 q 102 81 94 39 q 115 161 110 124 l 234 161 z "
  },
  "\u201B": {
    ha: 235,
    x_min: 18,
    x_max: 220,
    o: "m 148 991 q 166 884 155 943 q 192 764 178 824 q 220 652 205 703 l 136 652 q 91 758 114 701 q 50 870 68 814 q 18 977 31 927 l 28 991 l 148 991 z "
  },
  "\u201C": {
    ha: 484,
    x_min: 18,
    x_max: 467,
    o: "m 467 991 q 439 879 453 939 q 414 759 425 818 q 395 652 402 700 l 275 652 l 265 667 q 297 772 277 716 q 339 885 316 829 q 385 991 361 942 l 467 991 m 218 991 q 190 879 203 939 q 164 759 176 818 q 146 652 153 700 l 26 652 l 18 667 q 49 772 31 716 q 90 885 68 829 q 136 991 113 942 l 218 991 z "
  },
  "\u201D": {
    ha: 484,
    x_min: 18,
    x_max: 467,
    o: "m 456 991 l 467 977 q 435 870 454 926 q 394 757 416 813 q 349 652 372 701 l 264 652 q 293 764 279 703 q 319 884 307 824 q 337 991 330 943 l 456 991 m 207 991 l 216 977 q 185 870 205 926 q 144 757 166 813 q 99 652 121 701 l 18 652 q 38 734 28 690 q 58 824 49 779 q 75 912 67 869 q 87 991 83 955 l 207 991 z "
  },
  "\u201E": {
    ha: 568,
    x_min: 44,
    x_max: 493,
    o: "m 483 161 l 493 146 q 462 39 481 96 q 420 -74 443 -18 q 376 -179 398 -130 l 291 -179 q 319 -67 305 -127 q 345 53 334 -7 q 363 161 357 113 l 483 161 m 233 161 l 243 146 q 212 39 231 96 q 170 -74 193 -18 q 125 -179 148 -130 l 44 -179 q 65 -96 54 -140 q 84 -7 75 -52 q 101 81 94 39 q 114 161 109 124 l 233 161 z "
  },
  "\u2020": {
    ha: 706,
    x_min: 88,
    x_max: 618,
    o: "m 618 680 l 379 699 l 411 0 l 283 0 l 314 699 l 88 680 l 88 791 l 314 772 l 283 1055 l 411 1055 l 379 772 l 618 791 l 618 680 z "
  },
  "\u2021": {
    ha: 706,
    x_min: 82,
    x_max: 623,
    o: "m 385 332 l 623 351 l 623 242 l 385 260 l 415 0 l 286 0 l 316 260 l 82 242 l 82 351 l 316 332 l 290 533 l 316 724 l 82 705 l 82 814 l 316 795 l 286 1055 l 415 1055 l 385 795 l 623 814 l 623 705 l 385 724 l 410 533 l 385 332 z "
  },
  "\u2022": {
    ha: 522,
    x_min: 116,
    x_max: 406,
    o: "m 116 507 q 135 602 116 566 q 187 654 154 637 q 261 670 220 670 q 335 654 302 670 q 387 602 368 637 q 406 507 406 566 q 387 414 406 450 q 335 361 368 378 q 261 344 302 344 q 187 361 220 344 q 135 414 154 378 q 116 507 116 450 z "
  },
  "\u2026": {
    ha: 1080,
    x_min: 102,
    x_max: 979,
    o: "m 102 71 q 125 138 102 118 q 181 158 148 158 q 239 138 216 158 q 263 71 263 118 q 239 2 263 24 q 181 -19 216 -19 q 125 2 148 -19 q 102 71 102 24 m 460 71 q 484 138 460 118 q 540 158 507 158 q 598 138 574 158 q 622 71 622 118 q 598 2 622 24 q 540 -19 574 -19 q 484 2 507 -19 q 460 71 460 24 m 817 71 q 840 138 817 118 q 897 158 863 158 q 955 138 931 158 q 979 71 979 118 q 955 2 979 24 q 897 -19 931 -19 q 840 2 863 -19 q 817 71 817 24 z "
  },
  "\u2030": {
    ha: 1626,
    x_min: 69,
    x_max: 1557,
    o: "m 271 1006 q 425 925 372 1006 q 477 696 477 844 q 427 466 477 548 q 271 383 376 383 q 121 466 173 383 q 69 696 69 548 q 119 925 69 844 q 271 1006 168 1006 m 271 925 q 190 868 216 925 q 164 696 164 810 q 190 523 164 581 q 271 465 216 465 q 355 523 328 465 q 383 696 383 581 q 356 867 383 810 q 271 925 328 925 m 899 991 l 349 0 l 250 0 l 800 991 l 899 991 m 872 608 q 1026 527 973 608 q 1079 298 1079 446 q 1028 69 1079 151 q 872 -14 977 -14 q 722 69 774 -14 q 671 298 671 151 q 720 527 671 446 q 872 608 769 608 m 872 527 q 791 470 817 527 q 766 298 766 413 q 791 126 766 184 q 872 68 817 68 q 957 125 929 68 q 985 298 985 182 q 957 470 985 412 q 872 527 930 527 m 1351 608 q 1505 527 1452 608 q 1557 298 1557 446 q 1507 69 1557 151 q 1351 -14 1456 -14 q 1201 69 1253 -14 q 1149 298 1149 151 q 1199 527 1149 446 q 1351 608 1248 608 m 1351 527 q 1270 470 1295 527 q 1244 298 1244 413 q 1270 126 1244 184 q 1351 68 1295 68 q 1435 125 1407 68 q 1463 298 1463 182 q 1435 470 1463 412 q 1351 527 1408 527 z "
  },
  "\u2032": {
    ha: 319,
    x_min: 54,
    x_max: 350,
    o: "m 235 991 l 350 991 l 130 635 l 54 635 l 235 991 z "
  },
  "\u2033": {
    ha: 559,
    x_min: 54,
    x_max: 590,
    o: "m 294 635 l 475 991 l 590 991 l 369 635 l 294 635 m 54 635 l 235 991 l 350 991 l 130 635 l 54 635 z "
  },
  "\u2039": {
    ha: 417,
    x_min: 54,
    x_max: 365,
    o: "m 54 377 l 284 654 l 365 608 l 170 369 l 365 130 l 284 83 l 54 359 l 54 377 z "
  },
  "\u203A": {
    ha: 417,
    x_min: 52,
    x_max: 363,
    o: "m 132 654 l 363 378 l 363 359 l 132 83 l 52 130 l 246 370 l 52 608 l 132 654 z "
  },
  "\u203C": {
    ha: 681,
    x_min: 102,
    x_max: 577,
    o: "m 220 275 l 146 275 l 115 991 l 252 991 l 220 275 m 102 71 q 125 138 102 118 q 182 158 148 158 q 240 138 216 158 q 263 71 263 118 q 240 2 263 24 q 182 -19 216 -19 q 125 2 148 -19 q 102 71 102 24 m 534 275 l 460 275 l 429 991 l 566 991 l 534 275 m 416 71 q 439 138 416 118 q 496 158 462 158 q 554 138 530 158 q 577 71 577 118 q 554 2 577 24 q 496 -19 530 -19 q 439 2 462 -19 q 416 71 416 24 z "
  },
  "\u2044": {
    ha: 178,
    x_min: -258,
    x_max: 435,
    o: "m 435 991 l -161 0 l -258 0 l 338 991 l 435 991 z "
  },
  "\u207F": {
    ha: 553,
    x_min: 77,
    x_max: 480,
    o: "m 306 853 q 436 814 392 853 q 480 689 480 775 l 480 399 l 408 399 l 408 685 q 380 768 408 741 q 296 796 353 796 q 183 754 216 796 q 151 632 151 712 l 151 399 l 77 399 l 77 845 l 136 845 l 147 781 l 151 781 q 216 834 174 816 q 306 853 257 853 z "
  },
  "\u20A3": {
    ha: 794,
    x_min: 64,
    x_max: 718,
    o: "m 183 0 l 183 184 l 64 184 l 64 269 l 183 269 l 183 991 l 718 991 l 718 890 l 295 890 l 295 533 l 692 533 l 692 432 l 295 432 l 295 269 l 512 269 l 512 184 l 295 184 l 295 0 l 183 0 z "
  },
  "\u20A4": {
    ha: 794,
    x_min: 47,
    x_max: 742,
    o: "m 468 1004 q 604 989 544 1004 q 709 951 663 974 l 669 863 q 576 896 626 882 q 469 909 526 909 q 347 866 391 909 q 302 727 302 823 l 302 606 l 582 606 l 582 522 l 302 522 l 302 402 l 582 402 l 582 317 l 301 317 q 289 212 301 254 q 255 144 277 170 q 205 103 234 118 l 742 103 l 742 0 l 47 0 l 47 96 q 124 131 93 104 q 173 203 156 157 q 189 317 189 249 l 54 317 l 54 402 l 189 402 l 189 522 l 54 522 l 54 606 l 189 606 l 189 701 q 218 864 189 796 q 309 968 247 932 q 468 1004 370 1004 z "
  },
  "\u20A7": {
    ha: 1067,
    x_min: 107,
    x_max: 1019,
    o: "m 284 991 q 549 917 467 991 q 631 702 631 842 q 613 581 631 637 q 551 481 594 524 q 438 413 509 437 q 262 389 367 389 l 219 389 l 219 0 l 107 0 l 107 991 l 284 991 m 277 892 l 219 892 l 219 488 l 256 488 q 453 537 389 488 q 517 696 517 585 q 459 844 517 796 q 277 892 400 892 m 847 718 l 847 574 l 1001 574 l 1001 487 l 847 487 l 847 189 q 866 106 847 134 q 930 78 885 78 q 978 82 951 78 q 1019 91 1004 86 l 1019 7 q 974 -7 1003 -1 q 903 -14 945 -14 q 816 7 852 -14 q 760 69 780 28 q 741 174 741 111 l 741 487 l 633 487 l 633 539 l 742 585 l 781 718 l 847 718 z "
  },
  "\u20AC": {
    ha: 794,
    x_min: 35,
    x_max: 774,
    o: "m 530 1005 q 659 990 600 1005 q 774 943 718 975 l 726 850 q 636 888 688 871 q 530 905 585 905 q 433 888 477 905 q 355 837 389 871 q 298 750 321 802 q 261 629 274 699 l 603 629 l 603 545 l 252 545 q 251 518 252 532 q 251 489 251 504 q 251 459 251 475 q 252 429 252 444 l 566 429 l 566 345 l 262 345 q 314 205 278 262 q 406 117 349 147 q 541 86 463 86 q 648 99 595 86 q 745 131 702 112 l 745 30 q 651 -1 703 12 q 534 -14 600 -14 q 344 29 423 -14 q 217 152 265 72 q 149 345 168 232 l 35 345 l 35 429 l 138 429 q 137 458 138 446 q 137 488 137 470 q 138 520 137 504 q 138 545 138 536 l 35 545 l 35 629 l 147 629 q 213 828 164 744 q 341 959 262 913 q 530 1005 421 1005 z "
  },
  "\u2105": {
    ha: 1136,
    x_min: 92,
    x_max: 1044,
    o: "m 884 991 l 334 0 l 235 0 l 785 991 l 884 991 m 1044 227 q 986 54 1044 115 q 830 -7 927 -7 q 681 54 740 -7 q 621 227 621 114 q 679 399 621 338 q 834 460 737 460 q 985 400 925 460 q 1044 227 1044 340 m 710 227 q 739 109 710 154 q 833 64 767 64 q 925 109 896 64 q 954 227 954 153 q 926 345 954 300 q 833 389 898 389 q 739 345 767 389 q 710 227 710 300 m 326 532 q 158 588 225 532 q 92 762 92 644 q 123 898 92 846 q 210 975 155 950 q 333 999 264 999 q 404 992 369 999 q 464 975 438 985 l 441 906 q 387 921 416 916 q 331 927 357 927 q 218 885 255 927 q 180 764 180 844 q 217 643 180 684 q 328 603 254 603 q 397 609 363 603 q 457 627 430 616 l 457 558 q 395 539 431 546 q 326 532 360 532 z "
  },
  "\u2113": {
    ha: 718,
    x_min: 76,
    x_max: 624,
    o: "m 427 75 q 514 107 479 75 q 556 220 550 140 l 624 220 q 596 94 621 146 q 528 14 572 41 q 416 -14 483 -14 q 311 10 359 -14 q 235 85 264 33 q 207 225 207 138 l 207 388 q 142 367 175 376 q 76 349 109 357 l 76 425 q 144 445 111 435 q 207 467 176 456 l 207 801 q 227 905 207 859 q 290 979 247 951 q 401 1006 333 1006 q 528 952 481 1006 q 575 802 575 899 q 541 638 575 713 q 448 509 507 564 q 312 420 389 454 l 312 231 q 340 116 312 157 q 427 75 368 75 m 488 799 q 467 897 488 864 q 401 930 445 930 q 331 895 349 930 q 312 799 312 859 l 312 505 q 444 624 399 550 q 488 799 488 697 z "
  },
  "\u2116": {
    ha: 1415,
    x_min: 134,
    x_max: 1346,
    o: "m 134 0 l 134 991 l 261 991 l 726 165 l 731 165 q 727 247 730 200 q 724 340 725 294 q 722 420 722 387 l 722 991 l 825 991 l 825 0 l 700 0 l 230 829 l 224 829 q 229 745 227 793 q 233 651 231 698 q 235 566 235 604 l 235 0 l 134 0 m 962 0 l 962 89 l 1313 89 l 1313 0 l 962 0 m 1137 186 q 1031 213 1077 186 q 959 293 985 240 q 932 421 932 345 q 988 595 932 534 q 1141 655 1044 655 q 1247 628 1201 655 q 1320 549 1293 601 q 1346 421 1346 497 q 1290 247 1346 307 q 1137 186 1234 186 m 1139 262 q 1230 302 1201 262 q 1258 421 1258 343 q 1230 538 1258 500 q 1139 577 1202 577 q 1048 538 1078 577 q 1019 421 1019 500 q 1048 302 1019 343 q 1139 262 1077 262 z "
  },
  "\u2122": {
    ha: 1061,
    x_min: 21,
    x_max: 958,
    o: "m 446 503 l 446 991 l 568 991 l 702 609 l 840 991 l 958 991 l 958 503 l 876 503 l 876 783 q 877 832 876 799 q 879 885 878 865 l 874 885 l 731 503 l 662 503 l 526 885 l 520 885 q 523 832 522 861 q 524 790 524 804 l 524 503 l 446 503 m 163 503 l 163 921 l 21 921 l 21 991 l 388 991 l 388 921 l 245 921 l 245 503 l 163 503 z "
  },
  "\u2126": {
    ha: 1084,
    x_min: 54,
    x_max: 1032,
    o: "m 542 905 q 356 863 430 905 q 247 742 283 821 q 211 554 211 663 q 235 376 211 458 q 312 224 259 294 q 451 92 365 154 l 451 0 l 54 0 l 54 102 l 308 102 q 197 214 247 148 q 118 366 147 279 q 89 558 89 452 q 142 796 89 695 q 297 952 196 897 q 542 1007 399 1007 q 789 952 688 1007 q 944 798 891 898 q 997 559 997 697 q 968 366 997 453 q 890 213 939 279 q 779 102 840 147 l 1032 102 l 1032 0 l 635 0 l 635 92 q 775 224 722 153 q 852 377 828 294 q 876 554 876 459 q 840 743 876 664 q 729 863 803 821 q 542 905 654 905 z "
  },
  "\u212E": {
    ha: 860,
    x_min: 69,
    x_max: 789,
    o: "m 429 -24 q 232 31 312 -24 q 110 172 151 85 q 69 359 69 260 q 101 532 69 460 q 185 652 132 605 q 302 721 238 699 q 429 743 366 743 q 613 696 532 743 q 741 564 694 650 q 789 359 789 478 l 228 359 l 228 118 q 312 60 258 86 q 429 35 367 35 q 590 76 530 35 q 697 193 650 118 l 746 165 q 673 71 713 114 q 574 2 632 28 q 429 -24 515 -24 m 632 418 l 632 606 q 553 660 606 633 q 428 686 500 686 q 310 662 359 686 q 228 607 260 638 l 228 418 l 632 418 z "
  },
  "\u215B": {
    ha: 1143,
    x_min: 42,
    x_max: 1034,
    o: "m 158 0 l 754 991 l 851 991 l 256 0 l 158 0 m 225 397 l 225 781 q 226 827 225 806 q 228 869 227 848 q 230 909 229 890 q 198 882 215 897 q 161 854 181 868 l 87 803 l 42 867 l 224 991 l 317 991 l 317 397 l 225 397 m 827 62 q 916 88 886 62 q 945 155 945 114 q 914 224 945 196 q 827 269 883 252 l 808 276 q 754 244 776 262 q 721 205 732 227 q 710 155 710 183 q 739 89 710 115 q 827 62 768 62 m 829 -10 q 675 34 729 -10 q 622 155 622 79 q 636 223 622 194 q 675 274 650 252 q 731 311 700 296 q 663 369 686 338 q 640 452 640 399 q 695 565 640 526 q 829 605 751 605 q 960 568 905 605 q 1014 456 1014 531 q 985 371 1014 405 q 912 315 956 337 q 1001 254 968 292 q 1034 159 1034 216 q 977 36 1034 83 q 829 -10 920 -10 m 830 350 q 900 390 874 366 q 926 454 926 414 q 900 513 926 492 q 827 534 873 534 q 755 513 781 534 q 729 454 729 492 q 758 391 729 416 q 830 350 786 367 z "
  },
  "\u215C": {
    ha: 1143,
    x_min: 25,
    x_max: 1058,
    o: "m 207 0 l 803 991 l 899 991 l 304 0 l 207 0 m 206 387 q 111 396 155 387 q 25 425 66 405 l 25 507 q 118 473 71 485 q 207 461 165 461 q 315 490 280 461 q 350 571 350 519 q 310 646 350 623 q 196 669 269 669 l 115 669 l 115 741 l 196 741 q 299 769 267 741 q 332 842 332 797 q 303 908 332 886 q 231 930 275 930 q 150 915 188 930 q 75 877 113 901 l 29 937 q 119 986 71 968 q 230 1004 166 1004 q 376 961 327 1004 q 426 852 426 918 q 396 760 426 795 q 323 711 366 724 l 323 706 q 411 660 378 695 q 443 568 443 625 q 385 437 443 488 q 206 387 327 387 m 850 62 q 940 88 911 62 q 968 155 968 114 q 938 224 968 196 q 850 269 907 252 l 832 276 q 778 244 800 262 q 745 205 756 227 q 734 155 734 183 q 763 89 734 115 q 850 62 792 62 m 852 -10 q 700 34 753 -10 q 646 155 646 79 q 660 223 646 194 q 699 274 674 252 q 755 311 724 296 q 687 369 711 338 q 664 452 664 399 q 720 565 664 526 q 852 605 776 605 q 984 568 929 605 q 1038 456 1038 531 q 1009 371 1038 405 q 936 315 980 337 q 1025 254 992 292 q 1058 159 1058 216 q 1001 36 1058 83 q 852 -10 944 -10 m 854 350 q 924 390 898 366 q 950 454 950 414 q 924 513 950 492 q 851 534 897 534 q 779 513 805 534 q 753 454 753 492 q 782 391 753 416 q 854 350 810 367 z "
  },
  "\u215D": {
    ha: 1143,
    x_min: 49,
    x_max: 1057,
    o: "m 202 0 l 798 991 l 895 991 l 299 0 l 202 0 m 220 385 q 127 394 175 385 q 49 422 79 404 l 49 509 q 133 473 87 486 q 218 460 180 460 q 320 489 282 460 q 357 580 357 518 q 320 665 357 635 q 214 695 283 695 q 153 689 179 695 q 106 678 127 684 l 65 705 l 87 991 l 420 991 l 420 920 l 163 920 l 149 762 q 188 768 167 765 q 233 771 208 771 q 387 723 326 771 q 448 587 448 674 q 390 438 448 491 q 220 385 331 385 m 849 62 q 938 88 909 62 q 967 155 967 114 q 936 224 967 196 q 849 269 905 252 l 831 276 q 777 244 799 262 q 744 205 755 227 q 732 155 732 183 q 762 89 732 115 q 849 62 791 62 m 852 -10 q 698 34 752 -10 q 644 155 644 79 q 659 223 644 194 q 698 274 673 252 q 754 311 723 296 q 686 369 709 338 q 663 452 663 399 q 719 565 663 526 q 851 605 774 605 q 982 568 928 605 q 1037 456 1037 531 q 1008 371 1037 405 q 935 315 979 337 q 1024 254 991 292 q 1057 159 1057 216 q 1000 36 1057 83 q 852 -10 943 -10 m 852 350 q 923 390 897 366 q 949 454 949 414 q 923 513 949 492 q 850 534 896 534 q 778 513 804 534 q 751 454 751 492 q 780 391 751 416 q 852 350 809 367 z "
  },
  "\u215E": {
    ha: 1143,
    x_min: 64,
    x_max: 1044,
    o: "m 142 0 l 738 991 l 834 991 l 239 0 l 142 0 m 136 397 l 374 913 l 64 913 l 64 991 l 470 991 l 470 928 l 231 397 l 136 397 m 837 62 q 926 88 897 62 q 955 155 955 114 q 924 224 955 196 q 838 269 894 252 l 819 276 q 764 244 786 262 q 731 205 742 227 q 720 155 720 183 q 749 89 720 115 q 837 62 779 62 m 840 -10 q 687 34 741 -10 q 633 155 633 79 q 664 251 633 214 q 742 311 695 288 q 674 369 697 338 q 650 452 650 399 q 706 565 650 526 q 839 605 762 605 q 970 568 916 605 q 1025 456 1025 531 q 996 371 1025 405 q 923 315 967 337 q 1012 254 979 292 q 1044 159 1044 216 q 987 36 1044 83 q 840 -10 930 -10 m 840 350 q 910 390 884 366 q 937 454 937 414 q 910 513 937 492 q 838 534 884 534 q 766 513 791 534 q 740 454 740 492 q 768 391 740 416 q 840 350 796 367 z "
  },
  "\u2202": {
    ha: 804,
    x_min: 68,
    x_max: 728,
    o: "m 441 1004 q 579 975 524 1004 q 667 895 634 946 q 714 777 700 844 q 728 632 728 709 q 713 459 728 549 q 667 285 699 369 q 586 133 635 201 q 469 26 537 66 q 313 -14 401 -14 q 168 24 221 -14 q 91 122 114 61 q 68 254 68 182 q 81 366 68 307 q 119 482 93 425 q 186 585 144 539 q 286 659 227 631 q 420 686 344 686 q 533 656 484 686 q 612 575 582 625 q 614 607 614 590 q 615 635 615 623 q 593 786 614 726 q 531 878 572 847 q 426 908 489 908 q 337 893 385 908 q 253 854 289 878 l 253 962 q 307 983 276 974 q 373 998 338 992 q 441 1004 408 1004 m 432 597 q 322 564 368 597 q 245 477 275 530 q 200 364 215 424 q 186 252 186 304 q 217 130 186 178 q 319 81 249 81 q 421 115 375 81 q 501 203 467 148 q 559 325 536 258 q 592 458 582 391 q 536 557 577 517 q 432 597 494 597 z "
  },
  "\u2206": {
    ha: 804,
    x_min: 25,
    x_max: 779,
    o: "m 459 991 l 779 69 l 779 0 l 25 0 l 25 71 l 345 991 l 459 991 m 652 102 l 466 644 q 440 724 452 685 q 418 798 428 762 q 400 866 408 834 q 382 799 392 834 q 362 726 373 763 q 338 650 351 688 l 149 102 l 652 102 z "
  },
  "\u220F": {
    ha: 1025,
    x_min: 135,
    x_max: 890,
    o: "m 135 -336 l 135 991 l 890 991 l 890 -336 l 775 -336 l 775 888 l 250 888 l 250 -336 l 135 -336 z "
  },
  "\u2211": {
    ha: 874,
    x_min: 50,
    x_max: 842,
    o: "m 50 -336 l 50 -264 l 479 363 l 62 920 l 62 991 l 798 991 l 798 890 l 222 890 l 616 367 l 207 -234 l 842 -234 l 842 -336 l 50 -336 z "
  },
  "\u2212": {
    ha: 794,
    x_min: 70,
    x_max: 723,
    o: "m 70 444 l 70 536 l 723 536 l 723 444 l 70 444 z "
  },
  "\u221A": {
    ha: 762,
    x_min: 25,
    x_max: 823,
    o: "m 337 -9 l 148 521 l 25 521 l 25 611 l 218 611 l 380 144 l 730 1145 l 823 1145 l 422 -9 l 337 -9 z "
  },
  "\u221E": {
    ha: 978,
    x_min: 79,
    x_max: 899,
    o: "m 899 488 q 873 381 899 430 q 803 302 848 332 q 698 273 758 273 q 584 309 636 273 q 488 424 532 345 q 394 314 446 352 q 282 276 342 276 q 177 303 222 276 q 105 378 131 330 q 79 490 79 427 q 105 598 79 550 q 176 675 130 646 q 282 703 222 703 q 393 668 340 703 q 488 554 445 632 q 581 663 528 625 q 699 701 634 701 q 843 642 788 701 q 899 488 899 583 m 444 490 q 372 590 409 559 q 286 621 334 621 q 197 583 230 621 q 165 490 165 545 q 196 398 165 436 q 287 360 227 360 q 371 392 333 360 q 444 490 409 423 m 813 488 q 780 582 813 545 q 691 618 747 618 q 608 587 646 618 q 534 488 571 556 q 606 390 568 422 q 692 358 644 358 q 780 395 747 358 q 813 488 813 433 z "
  },
  "\u222B": {
    ha: 532,
    x_min: 6,
    x_max: 515,
    o: "m 99 -334 q 49 -330 74 -334 q 6 -319 24 -326 l 6 -227 q 44 -238 22 -233 q 89 -243 66 -243 q 182 -199 154 -243 q 210 -79 210 -155 l 210 808 q 237 950 210 895 q 313 1030 263 1004 q 430 1055 362 1055 q 476 1052 452 1055 q 515 1044 499 1049 l 515 949 q 479 960 500 956 q 437 965 459 965 q 369 945 395 965 q 331 887 342 924 q 319 800 319 850 l 319 -87 q 259 -275 319 -217 q 99 -334 199 -334 z "
  },
  "\u2248": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 376 582 q 294 612 328 604 q 229 621 261 621 q 148 597 191 621 q 70 539 104 574 l 70 640 q 145 694 104 676 q 237 713 187 713 q 318 704 279 713 q 418 669 358 694 q 500 639 467 648 q 563 630 532 630 q 646 653 603 630 q 722 711 688 676 l 722 612 q 648 557 690 576 q 557 538 607 538 q 476 547 516 538 q 376 582 436 555 m 376 314 q 294 344 328 336 q 229 353 261 353 q 148 330 191 353 q 70 271 104 307 l 70 372 q 145 427 104 408 q 237 445 187 445 q 318 436 279 445 q 418 401 358 427 q 500 371 467 380 q 563 362 532 362 q 646 385 603 362 q 722 444 688 408 l 722 344 q 648 289 690 309 q 557 270 607 270 q 476 279 516 270 q 376 314 436 288 z "
  },
  "\u2260": {
    ha: 794,
    x_min: 70,
    x_max: 722,
    o: "m 523 869 l 606 831 l 531 673 l 722 673 l 722 582 l 490 582 l 401 396 l 722 396 l 722 304 l 358 304 l 269 112 l 186 149 l 260 304 l 70 304 l 70 396 l 302 396 l 388 582 l 70 582 l 70 673 l 431 673 l 523 869 z "
  },
  "\u2264": {
    ha: 794,
    x_min: 70,
    x_max: 723,
    o: "m 722 168 l 70 457 l 70 522 l 722 844 l 722 744 l 192 494 l 722 268 l 722 168 m 70 -1 l 70 92 l 723 92 l 723 -1 l 70 -1 z "
  },
  "\u2265": {
    ha: 794,
    x_min: 70,
    x_max: 723,
    o: "m 70 268 l 601 492 l 70 744 l 70 844 l 722 522 l 722 457 l 70 168 l 70 268 m 70 -1 l 70 92 l 723 92 l 723 -1 l 70 -1 z "
  },
  "\u25CA": {
    ha: 809,
    x_min: 73,
    x_max: 734,
    o: "m 379 0 l 73 498 l 379 999 l 429 999 l 734 498 l 429 0 l 379 0 m 404 135 l 623 498 l 404 863 l 187 498 l 404 135 z "
  },
  "\u0326": {
    ha: 0,
    x_min: -85,
    x_max: 85,
    o: "m 85 -85 l 85 -96 q 62 -161 78 -123 q 23 -238 45 -199 q -23 -307 1 -277 l -85 -307 l -85 -291 q -63 -231 -75 -268 q -41 -154 -51 -194 q -27 -85 -31 -115 l 85 -85 z "
  },
  "\u2074": {
    ha: 483,
    x_min: 14,
    x_max: 470,
    o: "m 470 717 l 383 717 l 383 578 l 287 578 l 287 717 l 14 717 l 14 783 l 289 1177 l 383 1177 l 383 794 l 470 794 l 470 717 m 287 794 l 287 935 q 288 1002 287 964 q 291 1072 289 1039 q 263 1023 283 1055 q 227 968 242 991 l 106 794 l 287 794 z "
  },
  "\u2075": {
    ha: 483,
    x_min: 42,
    x_max: 441,
    o: "m 414 1173 l 414 1101 l 156 1101 l 143 943 q 181 949 161 946 q 227 951 202 951 q 380 903 319 951 q 441 768 441 855 q 383 619 441 672 q 214 566 325 566 q 121 575 168 566 q 42 602 73 585 l 42 689 q 127 654 80 667 q 211 641 174 641 q 313 670 275 641 q 351 760 351 699 q 314 845 351 815 q 209 876 277 876 q 146 870 172 876 q 100 859 121 865 l 59 885 l 81 1173 l 414 1173 z "
  },
  "\u2077": {
    ha: 483,
    x_min: 39,
    x_max: 446,
    o: "m 111 578 l 350 1095 l 39 1095 l 39 1173 l 446 1173 l 446 1109 l 206 578 l 111 578 z "
  },
  "\u2078": {
    ha: 483,
    x_min: 35,
    x_max: 448,
    o: "m 242 1183 q 373 1146 319 1183 q 428 1034 428 1109 q 399 949 428 983 q 326 893 370 915 q 415 832 382 870 q 448 737 448 794 q 391 614 448 661 q 242 568 334 568 q 130 588 176 568 q 59 645 83 608 q 35 733 35 682 q 50 801 35 772 q 89 852 64 830 q 145 889 114 873 q 77 947 100 916 q 54 1030 54 977 q 110 1143 54 1103 q 242 1183 165 1183 m 222 854 q 168 822 190 840 q 135 783 146 805 q 123 733 123 761 q 153 666 123 692 q 240 640 182 640 q 329 666 300 640 q 358 733 358 692 q 327 801 358 774 q 240 847 296 829 l 222 854 m 241 1112 q 169 1090 195 1112 q 142 1031 142 1069 q 171 969 142 994 q 243 928 200 945 q 314 968 288 944 q 340 1031 340 992 q 314 1090 340 1069 q 241 1112 287 1112 z "
  },
  "\u2000": {
    ha: 694,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2001": {
    ha: 1389,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2002": {
    ha: 694,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2003": {
    ha: 1389,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2004": {
    ha: 463,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2005": {
    ha: 347,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2006": {
    ha: 232,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2007": {
    ha: 794,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2008": {
    ha: 365,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u2009": {
    ha: 231,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u200A": {
    ha: 139,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\u200B": {
    ha: 0,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\uFEFF": {
    ha: 0,
    x_min: 0,
    x_max: 0,
    o: ""
  },
  "\uFFFC": {
    ha: 1389,
    x_min: 57,
    x_max: 1346,
    o: "m 57 823 l 57 1029 l 262 1029 l 262 954 l 132 954 l 132 823 l 57 823 m 1140 954 l 1140 1029 l 1346 1029 l 1346 823 l 1272 823 l 1272 954 l 1140 954 m 57 -260 l 57 -54 l 132 -54 l 132 -186 l 262 -186 l 262 -260 l 57 -260 m 1140 -260 l 1140 -186 l 1272 -186 l 1272 -54 l 1346 -54 l 1346 -260 l 1140 -260 m 875 -260 l 875 -186 l 1060 -186 l 1060 -260 l 875 -260 m 345 -260 l 345 -186 l 528 -186 l 528 -260 l 345 -260 m 345 954 l 345 1029 l 528 1029 l 528 954 l 345 954 m 1346 26 l 1272 26 l 1272 210 l 1346 210 l 1346 26 m 1346 558 l 1272 558 l 1272 742 l 1346 742 l 1346 558 m 610 -260 l 610 -186 l 794 -186 l 794 -260 l 610 -260 m 132 26 l 57 26 l 57 210 l 132 210 l 132 26 m 610 954 l 610 1029 l 794 1029 l 794 954 l 610 954 m 875 954 l 875 1029 l 1060 1029 l 1060 954 l 875 954 m 132 292 l 57 292 l 57 476 l 132 476 l 132 292 m 132 558 l 57 558 l 57 742 l 132 742 l 132 558 m 1346 292 l 1272 292 l 1272 476 l 1346 476 l 1346 292 m 586 427 q 543 279 586 335 q 408 222 500 222 q 274 279 317 222 q 231 427 231 335 q 274 575 231 519 q 408 631 317 631 q 543 575 500 631 q 586 427 586 519 m 317 427 q 339 329 317 364 q 408 293 361 293 q 478 329 456 293 q 500 427 500 364 q 478 524 500 489 q 408 559 456 559 q 339 524 361 559 q 317 427 317 489 m 643 625 l 760 625 q 872 603 834 625 q 909 524 909 580 q 894 468 909 490 q 848 440 878 446 l 848 435 q 900 409 879 429 q 921 343 921 390 q 884 258 921 289 q 783 228 847 228 l 643 228 l 643 625 m 726 468 l 771 468 q 814 479 802 468 q 827 513 827 491 q 812 546 827 536 q 766 555 798 555 l 726 555 l 726 468 m 726 401 l 726 297 l 777 297 q 822 312 810 297 q 835 351 835 326 q 822 387 835 373 q 774 401 809 401 l 726 401 m 1011 224 q 957 231 979 224 l 957 300 q 979 296 968 298 q 1003 294 989 294 q 1045 307 1028 294 q 1061 353 1061 319 l 1061 625 l 1146 625 l 1146 355 q 1108 255 1146 287 q 1011 224 1071 224 z "
  },
  "\uFFFD": {
    ha: 1389,
    x_min: 57,
    x_max: 1331,
    o: "m 693 1055 l 1331 419 l 693 -216 l 57 419 l 693 1055 m 737 249 l 737 281 q 751 336 737 315 q 811 392 766 357 q 878 452 851 424 q 917 514 904 481 q 930 593 930 547 q 866 737 930 686 q 692 789 802 789 q 612 780 653 789 q 533 755 571 770 q 464 722 495 741 l 519 602 q 609 640 566 625 q 689 656 652 656 q 753 636 732 656 q 774 585 774 616 q 756 521 774 545 q 692 461 738 497 q 617 381 640 420 q 595 289 595 343 l 595 249 l 737 249 m 576 62 q 604 -8 576 14 q 672 -29 631 -29 q 738 -8 710 -29 q 766 62 766 14 q 738 135 766 114 q 672 155 710 155 q 604 135 631 155 q 576 62 576 114 z "
  },
  "\u01F0": {
    ha: 351,
    x_min: -76,
    x_max: 404,
    o: "m 29 -334 q -31 -329 -5 -334 q -76 -317 -57 -323 l -76 -225 q -33 -236 -55 -232 q 16 -239 -12 -239 q 90 -214 62 -239 q 119 -120 119 -188 l 119 743 l 231 743 l 231 -117 q 210 -234 231 -185 q 143 -308 188 -282 q 29 -334 98 -334 m 117 842 q 68 910 99 873 q 5 984 38 947 q -53 1046 -28 1020 l -53 1063 l 24 1063 q 100 1003 61 1038 q 173 930 139 968 q 248 1003 210 968 q 323 1063 287 1038 l 404 1063 l 404 1046 q 343 984 377 1020 q 279 910 309 947 q 231 842 248 873 l 117 842 z "
  },
  "\u02BC": {
    ha: 235,
    x_min: 18,
    x_max: 218,
    o: "m 208 991 l 218 977 q 186 870 205 927 q 145 758 168 814 q 100 652 123 701 l 18 652 q 38 734 28 690 q 58 824 49 779 q 76 912 68 869 q 89 991 83 955 l 208 991 z "
  },
  "\u03D1": {
    ha: 855,
    x_min: 8,
    x_max: 834,
    o: "m 393 1064 q 526 1037 468 1064 q 627 958 585 1010 q 697 831 670 906 q 737 662 725 757 l 834 662 l 834 568 l 745 568 q 747 534 746 553 q 747 494 747 515 q 725 292 747 385 q 657 131 703 199 q 541 24 611 62 q 374 -14 470 -14 q 255 6 303 -14 q 178 60 207 26 q 136 138 149 94 q 123 229 123 182 q 129 306 123 268 q 138 377 134 343 q 143 434 143 410 q 130 479 143 467 q 95 492 117 492 q 61 487 78 492 q 33 475 43 481 l 8 555 q 64 574 32 566 q 132 583 96 583 q 225 547 197 583 q 252 458 252 512 q 248 390 252 426 q 238 314 243 353 q 233 232 233 274 q 267 123 233 169 q 378 78 302 78 q 519 124 463 78 q 605 264 576 171 q 633 498 633 358 q 633 533 633 514 q 631 568 632 553 q 355 608 460 570 q 203 712 251 646 q 156 859 156 777 q 181 963 156 917 q 259 1037 206 1010 q 393 1064 311 1064 m 390 971 q 296 940 327 971 q 266 852 266 908 q 301 755 266 798 q 415 688 336 713 q 623 662 494 663 q 594 793 614 736 q 543 891 573 851 q 474 951 513 930 q 390 971 435 971 z "
  },
  "\u03D2": {
    ha: 786,
    x_min: 0,
    x_max: 781,
    o: "m 386 487 q 435 601 410 542 q 486 718 460 661 q 533 822 511 774 q 573 899 555 869 q 613 955 592 932 q 660 989 633 977 q 721 1000 686 1000 q 755 998 741 1000 q 781 989 770 995 l 781 899 q 762 902 773 901 q 742 903 751 903 q 703 891 722 903 q 659 835 684 879 q 616 756 642 806 q 559 641 589 705 q 498 507 528 577 q 442 369 467 437 l 442 0 l 325 0 l 325 379 l 0 991 l 126 991 l 386 487 z "
  },
  "\u03D6": {
    ha: 1169,
    x_min: 15,
    x_max: 1126,
    o: "m 1126 743 l 1126 649 l 957 649 q 998 539 981 595 q 1025 426 1015 483 q 1034 311 1034 368 q 1005 133 1034 205 q 917 23 975 60 q 772 -14 859 -14 q 647 19 696 -14 q 576 113 599 52 l 572 113 q 500 19 549 52 q 376 -14 452 -14 q 183 67 250 -14 q 115 311 115 147 q 126 426 115 368 q 157 541 138 484 q 202 649 177 597 l 15 649 l 15 699 l 114 743 l 1126 743 m 846 649 l 313 649 q 271 546 290 601 q 240 432 252 490 q 228 317 228 374 q 270 132 228 184 q 385 80 311 80 q 486 132 452 80 q 520 264 520 184 l 520 400 l 629 400 l 629 264 q 646 164 629 205 q 693 102 663 123 q 766 80 724 80 q 880 133 839 80 q 920 317 920 186 q 911 432 920 374 q 886 544 902 489 q 846 649 869 599 z "
  },
  "\u1E3E": {
    ha: 1249,
    x_min: 136,
    x_max: 1114,
    o: "m 572 0 l 239 878 l 233 878 q 238 810 236 850 q 241 723 240 770 q 243 627 243 675 l 243 0 l 136 0 l 136 991 l 307 991 l 621 167 l 625 167 l 944 991 l 1114 991 l 1114 0 l 1000 0 l 1000 635 q 1001 723 1000 679 q 1004 807 1002 768 q 1008 876 1006 847 l 1003 876 l 666 0 l 572 0 m 823 1313 l 823 1299 q 786 1252 809 1280 q 734 1195 762 1225 q 676 1137 705 1164 q 623 1090 648 1110 l 548 1090 l 548 1107 q 595 1169 570 1133 q 646 1243 621 1205 q 686 1313 670 1282 l 823 1313 z "
  },
  "\u1E3F": {
    ha: 1286,
    x_min: 119,
    x_max: 1173,
    o: "m 926 757 q 1111 693 1048 757 q 1173 487 1173 629 l 1173 0 l 1062 0 l 1062 481 q 1023 617 1062 572 q 907 662 984 662 q 751 600 800 662 q 702 416 702 537 l 702 0 l 590 0 l 590 481 q 573 582 590 542 q 521 642 555 622 q 435 662 487 662 q 316 631 361 662 q 251 541 271 601 q 231 393 231 481 l 231 0 l 119 0 l 119 743 l 210 743 l 227 638 l 233 638 q 289 703 255 677 q 365 743 323 730 q 454 757 407 757 q 596 725 539 757 q 680 629 654 694 l 686 629 q 786 725 722 694 q 926 757 850 757 m 855 1064 l 855 1050 q 818 1003 842 1031 q 766 946 795 976 q 709 888 738 916 q 656 842 680 861 l 581 842 l 581 858 q 628 920 602 884 q 678 995 654 956 q 719 1064 703 1033 l 855 1064 z "
  },
  "\u1E00": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 438 -378 q 330 -339 372 -378 q 288 -232 288 -300 q 330 -125 288 -164 q 438 -85 372 -85 q 547 -125 503 -85 q 592 -231 592 -164 q 548 -339 592 -300 q 438 -378 504 -378 m 438 -313 q 497 -291 474 -313 q 519 -232 519 -269 q 496 -172 519 -193 q 438 -151 472 -151 q 380 -172 403 -151 q 357 -232 357 -193 q 378 -291 357 -269 q 438 -313 399 -313 z "
  },
  "\u1E01": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 364 -378 q 256 -339 298 -378 q 214 -232 214 -300 q 256 -125 214 -164 q 364 -85 298 -85 q 473 -125 429 -85 q 518 -231 518 -164 q 474 -339 518 -300 q 364 -378 430 -378 m 364 -313 q 423 -291 400 -313 q 446 -232 446 -269 q 422 -172 446 -193 q 364 -151 398 -151 q 306 -172 329 -151 q 283 -232 283 -193 q 304 -291 283 -269 q 364 -313 325 -313 z "
  },
  "\u02F3": {
    ha: 463,
    x_min: 79,
    x_max: 383,
    o: "m 229 -378 q 121 -339 163 -378 q 79 -232 79 -300 q 121 -125 79 -164 q 229 -85 163 -85 q 338 -125 294 -85 q 383 -231 383 -164 q 339 -339 383 -300 q 229 -378 295 -378 m 229 -313 q 288 -291 265 -313 q 311 -232 311 -269 q 287 -172 311 -193 q 229 -151 263 -151 q 171 -172 194 -151 q 149 -232 149 -193 q 169 -291 149 -269 q 229 -313 190 -313 z "
  },
  "\u01A0": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 z "
  },
  "\u01A1": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 z "
  },
  "\u01AF": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 z "
  },
  "\u01B0": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 z "
  },
  "\u0400": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 378 1313 q 418 1243 394 1282 q 469 1169 442 1205 q 518 1107 496 1133 l 518 1090 l 441 1090 q 388 1137 417 1110 q 331 1195 359 1164 q 279 1252 302 1225 q 243 1299 256 1280 l 243 1313 l 378 1313 z "
  },
  "\u040D": {
    ha: 1055,
    x_min: 137,
    x_max: 920,
    o: "m 137 991 l 245 991 l 245 418 q 244 348 245 386 q 242 273 243 309 q 239 206 241 236 q 236 160 237 176 l 241 160 l 793 991 l 920 991 l 920 0 l 812 0 l 812 566 q 814 643 812 602 q 817 721 815 683 q 821 789 819 759 q 823 836 823 819 l 817 836 l 264 0 l 137 0 l 137 991 m 495 1313 q 535 1243 511 1282 q 586 1169 559 1205 q 635 1107 613 1133 l 635 1090 l 559 1090 q 506 1137 534 1110 q 448 1195 477 1164 q 397 1252 420 1225 q 361 1299 374 1280 l 361 1313 l 495 1313 z "
  },
  "\u0450": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 349 1064 q 389 995 365 1033 q 440 920 413 956 q 489 858 467 884 l 489 842 l 412 842 q 359 888 388 861 q 302 946 330 916 q 250 1003 273 976 q 214 1050 227 1031 l 214 1064 l 349 1064 z "
  },
  "\u045D": {
    ha: 883,
    x_min: 119,
    x_max: 762,
    o: "m 226 743 l 226 276 q 225 241 226 262 q 223 196 224 220 q 221 150 222 172 q 218 113 220 127 l 624 743 l 762 743 l 762 0 l 657 0 l 657 456 q 658 511 657 477 q 660 578 659 545 q 662 629 661 611 l 258 0 l 119 0 l 119 743 l 226 743 m 405 1064 q 445 995 421 1033 q 496 920 469 956 q 545 858 523 884 l 545 842 l 469 842 q 415 888 444 861 q 358 946 387 916 q 307 1003 330 976 q 271 1050 283 1031 l 271 1064 l 405 1064 z "
  },
  "\u0460": {
    ha: 1271,
    x_min: 35,
    x_max: 1236,
    o: "m 331 -7 q 223 210 274 92 q 132 456 172 327 q 67 721 92 585 q 35 991 41 856 l 155 991 q 184 740 161 863 q 239 503 207 616 q 309 294 272 390 q 379 125 345 198 l 386 125 q 412 217 395 165 q 450 326 429 269 l 590 703 q 575 801 582 751 q 563 900 568 851 q 557 991 559 949 l 677 991 q 704 750 682 872 q 762 513 727 629 q 837 297 796 398 q 917 119 878 197 l 922 119 q 1021 366 979 231 q 1088 659 1064 501 q 1115 991 1113 816 l 1236 991 q 1201 625 1232 803 q 1111 288 1169 448 q 968 -7 1053 127 l 866 -7 q 798 117 831 50 q 734 257 764 185 q 678 401 703 330 q 635 535 653 472 l 440 -7 l 331 -7 z "
  },
  "\u0461": {
    ha: 1085,
    x_min: 26,
    x_max: 1051,
    o: "m 1051 745 q 1015 482 1045 609 q 930 235 985 355 q 797 0 876 115 l 691 0 q 634 107 663 49 q 580 226 605 165 q 538 342 555 287 l 371 0 l 269 0 q 183 153 225 69 q 108 333 142 237 q 52 532 74 429 q 26 745 31 636 l 138 745 q 175 491 146 611 q 243 272 203 371 q 321 102 282 173 l 325 102 q 346 150 334 125 q 370 198 357 174 q 394 248 382 223 l 499 460 q 473 603 482 528 q 462 745 464 677 l 574 745 q 602 517 578 631 q 662 296 625 403 q 741 98 699 190 l 747 98 q 840 279 798 178 q 907 498 881 380 q 940 745 933 616 l 1051 745 z "
  },
  "\u0462": {
    ha: 937,
    x_min: 14,
    x_max: 865,
    o: "m 233 0 l 233 751 l 14 751 l 14 848 l 233 848 l 233 991 l 349 991 l 349 848 l 634 848 l 634 751 l 349 751 l 349 570 l 488 570 q 712 533 630 570 q 830 434 795 497 q 865 290 865 370 q 781 78 865 157 q 509 0 696 0 l 233 0 m 349 98 l 495 98 q 686 146 627 98 q 746 290 746 193 q 717 395 746 356 q 628 451 688 434 q 475 468 568 468 l 349 468 l 349 98 z "
  },
  "\u0463": {
    ha: 878,
    x_min: 14,
    x_max: 802,
    o: "m 290 895 l 290 743 l 527 743 l 527 649 l 290 649 l 290 435 l 508 435 q 730 382 657 435 q 802 227 802 330 q 771 106 802 157 q 675 28 741 56 q 504 0 609 0 l 179 0 l 179 649 l 14 649 l 14 743 l 179 743 l 179 895 l 290 895 m 498 342 l 290 342 l 290 92 l 498 92 q 638 122 585 92 q 691 221 691 152 q 641 315 691 289 q 498 342 591 342 z "
  },
  "\u0464": {
    ha: 1280,
    x_min: 136,
    x_max: 1240,
    o: "m 949 -14 q 699 46 799 -14 q 549 213 600 106 q 494 466 498 321 l 251 466 l 251 0 l 136 0 l 136 991 l 251 991 l 251 568 l 497 568 q 542 746 507 665 q 636 884 576 826 q 781 974 696 942 q 973 1006 865 1005 q 1117 988 1049 1006 q 1240 943 1185 971 l 1194 845 q 1091 886 1146 869 q 969 904 1036 904 q 831 882 892 904 q 726 816 770 859 q 654 711 682 773 q 618 568 627 648 l 1095 568 l 1095 467 l 615 467 q 642 307 618 377 q 709 188 665 237 q 817 113 753 138 q 965 87 881 87 q 1090 99 1032 87 q 1205 127 1148 110 l 1205 26 q 1091 -4 1151 6 q 949 -14 1031 -14 z "
  },
  "\u0465": {
    ha: 1036,
    x_min: 119,
    x_max: 987,
    o: "m 786 -14 q 610 24 686 -14 q 489 139 534 62 q 437 334 444 216 l 232 334 l 232 0 l 119 0 l 119 743 l 232 743 l 232 431 l 439 431 q 498 615 450 543 q 621 722 545 688 q 790 757 696 757 q 898 746 846 757 q 987 718 949 734 l 954 625 q 873 650 917 640 q 790 660 830 660 q 667 634 717 660 q 589 558 616 609 q 554 431 562 507 l 922 431 l 922 334 l 553 334 q 584 196 557 252 q 661 111 610 140 q 786 83 711 83 q 891 95 846 83 q 978 124 937 107 l 978 26 q 895 -3 940 7 q 786 -14 850 -14 z "
  },
  "\u0466": {
    ha: 935,
    x_min: 0,
    x_max: 930,
    o: "m 521 991 l 930 0 l 808 0 l 621 460 l 517 460 l 517 0 l 412 0 l 412 460 l 308 460 l 119 0 l 0 0 l 410 991 l 521 991 m 465 877 q 453 839 460 861 q 438 793 446 817 q 420 744 429 768 q 403 699 411 720 l 349 559 l 582 559 l 522 710 q 507 750 515 730 q 492 791 499 770 q 477 833 484 812 q 465 877 471 854 z "
  },
  "\u0467": {
    ha: 777,
    x_min: 5,
    x_max: 766,
    o: "m 454 743 l 766 0 l 651 0 l 515 328 l 437 328 l 437 0 l 336 0 l 336 328 l 254 328 l 121 0 l 5 0 l 317 743 l 454 743 m 388 665 l 382 665 q 368 621 376 642 q 352 577 361 600 q 334 530 344 555 l 291 421 l 479 421 l 437 529 q 417 581 427 556 q 400 627 408 606 q 388 665 393 648 z "
  },
  "\u0468": {
    ha: 1274,
    x_min: 136,
    x_max: 1281,
    o: "m 872 991 l 1281 0 l 1155 0 l 968 464 l 868 464 l 868 0 l 764 0 l 764 464 l 661 464 l 473 0 l 350 0 l 541 464 l 251 464 l 251 0 l 136 0 l 136 991 l 251 991 l 251 566 l 584 566 l 760 991 l 872 991 m 814 877 q 803 837 810 857 q 790 796 797 817 q 774 753 783 775 q 755 707 766 731 l 701 564 l 928 564 l 871 713 q 855 756 863 735 q 840 797 847 777 q 826 837 833 817 q 814 877 820 857 z "
  },
  "\u0469": {
    ha: 1059,
    x_min: 119,
    x_max: 1051,
    o: "m 739 743 l 1051 0 l 937 0 l 799 332 l 722 332 l 722 0 l 620 0 l 620 332 l 543 332 l 404 0 l 289 0 l 429 332 l 229 332 l 229 0 l 119 0 l 119 743 l 229 743 l 229 427 l 470 427 l 602 743 l 739 743 m 673 665 l 669 665 q 654 624 663 647 q 637 574 646 600 q 617 522 628 548 l 576 426 l 763 426 l 721 532 q 702 583 711 559 q 686 628 692 607 q 673 665 679 649 z "
  },
  "\u046A": {
    ha: 1004,
    x_min: 16,
    x_max: 987,
    o: "m 897 991 l 897 906 l 610 566 q 754 530 701 561 q 839 444 808 499 q 894 311 870 389 l 987 0 l 869 0 l 777 307 q 733 411 756 374 q 671 462 711 448 q 559 477 631 477 l 559 0 l 444 0 l 444 477 q 333 462 372 477 q 272 410 294 447 q 230 307 250 374 l 138 0 l 16 0 l 109 311 q 147 414 126 368 q 198 492 168 459 q 275 543 229 524 q 389 566 321 562 l 107 906 l 107 991 l 897 991 m 757 888 l 245 888 l 501 579 l 757 888 z "
  },
  "\u046B": {
    ha: 881,
    x_min: 8,
    x_max: 870,
    o: "m 779 743 l 779 675 l 551 431 q 669 398 627 425 q 736 329 711 372 q 782 229 760 286 l 870 0 l 757 0 l 670 224 q 632 300 652 273 q 580 340 612 328 q 492 352 548 352 l 492 0 l 387 0 l 387 352 q 297 340 329 352 q 247 301 265 329 q 208 224 228 273 l 120 0 l 8 0 l 96 229 q 142 328 118 285 q 209 397 167 371 q 326 431 252 424 l 98 675 l 98 743 l 779 743 m 637 650 l 241 650 l 439 433 l 637 650 z "
  },
  "\u046C": {
    ha: 1356,
    x_min: 136,
    x_max: 1348,
    o: "m 1256 991 l 1256 906 l 970 565 q 1115 529 1061 560 q 1199 444 1168 498 q 1253 311 1230 389 l 1348 0 l 1234 0 l 1139 307 q 1094 413 1118 377 q 1030 462 1069 449 q 920 475 990 475 l 920 0 l 803 0 l 803 475 q 692 460 732 475 q 630 408 652 445 q 587 307 607 372 l 495 0 l 374 0 l 473 315 q 510 411 491 374 q 556 469 530 448 l 251 469 l 251 0 l 136 0 l 136 991 l 251 991 l 251 571 l 743 571 l 466 906 l 466 991 l 1256 991 m 1116 888 l 606 888 l 862 578 l 1116 888 z "
  },
  "\u046D": {
    ha: 1167,
    x_min: 119,
    x_max: 1159,
    o: "m 1069 743 l 1069 675 l 841 430 q 959 397 917 423 q 1025 329 1001 372 q 1071 229 1049 286 l 1159 0 l 1046 0 l 960 224 q 921 299 941 272 q 869 339 901 327 q 781 351 838 351 l 781 0 l 677 0 l 677 351 q 588 339 621 351 q 536 300 555 328 q 498 224 517 272 l 410 0 l 297 0 l 385 229 q 414 293 399 264 q 447 338 429 321 l 229 338 l 229 0 l 119 0 l 119 743 l 229 743 l 229 433 l 614 433 l 388 675 l 388 743 l 1069 743 m 927 650 l 530 650 l 728 437 l 927 650 z "
  },
  "\u046E": {
    ha: 808,
    x_min: 43,
    x_max: 732,
    o: "m 580 1183 q 618 1180 602 1183 q 647 1174 635 1177 l 647 1100 q 625 1105 638 1103 q 600 1107 612 1107 q 529 1077 567 1107 q 460 1001 492 1047 q 647 920 582 985 q 711 759 711 854 q 646 598 711 658 q 475 522 580 539 l 475 517 q 664 440 597 499 q 732 281 732 380 q 709 163 732 216 q 641 73 687 111 q 522 14 594 35 q 348 -9 449 -7 q 231 -23 271 -12 q 176 -53 191 -35 q 162 -94 162 -71 q 188 -148 162 -127 q 283 -168 213 -168 q 383 -165 340 -168 q 466 -160 426 -163 q 551 -158 505 -158 q 644 -165 609 -158 q 699 -184 679 -172 l 699 -294 q 647 -271 684 -282 q 545 -260 610 -260 q 464 -261 501 -260 q 385 -265 427 -263 q 285 -267 343 -267 q 141 -244 194 -267 q 66 -182 88 -222 q 43 -94 43 -143 q 73 0 43 -39 q 170 61 103 39 q 346 87 236 83 q 547 138 483 90 q 611 282 611 186 q 529 423 611 380 q 305 465 446 465 l 163 465 l 163 562 l 302 562 q 463 585 399 562 q 560 649 528 608 q 592 748 592 691 q 535 868 592 826 q 387 910 478 910 q 237 886 302 910 q 113 824 172 862 l 56 903 q 168 964 108 938 q 304 1000 229 990 q 253 1057 281 1027 q 198 1114 225 1086 q 151 1162 172 1142 l 151 1179 l 233 1179 q 309 1120 267 1157 q 385 1046 350 1083 q 442 1111 412 1079 q 506 1163 472 1142 q 580 1183 541 1183 z "
  },
  "\u046F": {
    ha: 671,
    x_min: 18,
    x_max: 608,
    o: "m 517 920 q 555 918 538 920 q 583 911 572 915 l 583 837 q 562 842 574 840 q 538 844 549 844 q 470 817 505 844 q 404 747 435 789 q 535 683 487 730 q 583 563 583 635 q 545 455 583 496 q 442 397 507 415 l 442 392 q 525 358 488 380 q 585 300 562 336 q 608 210 608 264 q 574 100 608 148 q 471 23 541 52 q 291 -7 401 -5 q 183 -19 220 -9 q 134 -45 146 -28 q 121 -85 121 -62 q 145 -133 121 -117 q 233 -149 170 -149 q 326 -147 282 -149 q 410 -143 370 -145 q 483 -142 450 -142 q 556 -149 529 -142 q 597 -169 583 -156 l 597 -264 q 549 -243 580 -250 q 485 -235 518 -235 q 411 -237 453 -235 q 320 -241 368 -239 q 222 -243 272 -243 q 100 -221 144 -243 q 37 -162 55 -198 q 18 -86 18 -126 q 42 -2 18 -39 q 122 57 66 35 q 273 83 178 80 q 391 98 340 85 q 468 139 441 111 q 496 215 496 168 q 472 287 496 259 q 400 329 448 315 q 281 342 353 342 l 182 342 l 182 435 l 264 435 q 418 462 361 435 q 475 553 475 489 q 430 636 475 608 q 304 663 386 663 q 199 651 250 663 q 95 615 149 639 l 55 705 q 139 736 98 724 q 227 753 180 748 q 184 805 208 779 q 137 857 160 832 q 94 900 113 882 l 94 917 l 176 917 q 247 859 210 892 q 322 787 284 825 q 378 850 349 820 q 443 901 408 881 q 517 920 477 920 z "
  },
  "\u0470": {
    ha: 1107,
    x_min: 75,
    x_max: 1029,
    o: "m 1029 991 l 1029 665 q 1009 525 1029 591 q 940 409 988 459 q 810 331 891 359 q 607 302 728 302 l 607 0 l 494 0 l 494 302 q 292 331 373 302 q 163 410 211 360 q 96 526 116 460 q 75 664 75 591 l 75 991 l 191 991 l 191 667 q 222 518 191 577 q 321 431 254 460 q 494 401 389 402 l 494 991 l 607 991 l 607 401 q 782 431 715 402 q 880 519 849 460 q 911 665 911 577 l 911 991 l 1029 991 z "
  },
  "\u0471": {
    ha: 1048,
    x_min: 111,
    x_max: 962,
    o: "m 581 1054 l 581 83 q 725 125 665 90 q 818 226 785 160 q 851 392 851 292 q 840 568 851 488 q 806 743 828 649 l 918 743 q 951 570 940 652 q 962 396 962 488 q 912 168 962 256 q 776 37 862 80 q 581 -12 690 -5 l 581 -334 l 471 -334 l 471 -12 q 283 32 364 -7 q 156 156 201 72 q 111 374 111 239 l 111 743 l 222 743 l 222 372 q 255 205 222 267 q 346 115 289 144 q 471 82 402 87 l 471 1054 l 581 1054 z "
  },
  "\u0472": {
    ha: 1082,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 541 86 q 722 131 650 86 q 831 258 793 175 q 873 456 868 341 l 208 456 q 251 258 214 341 q 360 131 288 176 q 541 86 432 86 m 543 905 q 365 863 436 905 q 254 742 293 821 q 208 555 216 664 l 871 555 q 780 813 860 720 q 543 905 701 905 z "
  },
  "\u0473": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 418 80 q 539 110 492 80 q 612 196 587 139 q 642 334 637 253 l 194 334 q 223 196 198 253 q 297 110 249 139 q 418 80 346 80 m 418 662 q 258 602 311 662 q 195 429 204 543 l 642 429 q 609 556 635 504 q 536 635 583 608 q 418 662 488 662 z "
  },
  "\u0474": {
    ha: 871,
    x_min: 0,
    x_max: 916,
    o: "m 848 905 q 794 885 816 905 q 754 823 772 865 q 715 713 736 781 l 490 0 l 359 0 l 0 991 l 121 991 l 354 342 q 382 258 370 296 q 405 187 395 220 q 422 119 414 153 q 435 172 428 145 q 450 229 442 199 q 468 290 458 258 q 488 356 477 321 l 604 724 q 663 885 635 825 q 729 973 690 945 q 833 1000 768 1000 q 878 996 857 1000 q 916 987 899 991 l 916 892 q 883 901 899 897 q 848 905 867 905 z "
  },
  "\u0475": {
    ha: 707,
    x_min: 0,
    x_max: 736,
    o: "m 683 751 q 712 749 699 751 q 736 744 725 747 l 736 655 q 715 661 728 659 q 691 663 703 663 q 654 650 670 663 q 626 612 639 637 q 601 546 614 586 l 425 0 l 277 0 l 0 743 l 117 743 l 298 245 q 331 146 317 189 q 349 82 345 104 l 354 82 q 371 159 360 111 q 398 254 382 207 l 500 568 q 547 680 524 640 q 601 735 569 720 q 683 751 632 751 z "
  },
  "\u0476": {
    ha: 871,
    x_min: 0,
    x_max: 916,
    o: "m 848 905 q 794 885 816 905 q 754 823 772 865 q 715 713 736 781 l 490 0 l 359 0 l 0 991 l 121 991 l 354 342 q 382 258 370 296 q 405 187 395 220 q 422 119 414 153 q 435 172 428 145 q 450 229 442 199 q 468 290 458 258 q 488 356 477 321 l 604 724 q 663 885 635 825 q 729 973 690 945 q 833 1000 768 1000 q 878 996 857 1000 q 916 987 899 991 l 916 892 q 883 901 899 897 q 848 905 867 905 m 488 1313 q 525 1244 503 1282 q 569 1170 546 1206 q 612 1107 592 1133 l 612 1090 l 547 1090 q 497 1138 524 1110 q 444 1195 470 1165 q 397 1253 418 1225 q 364 1299 376 1280 l 364 1313 l 488 1313 m 247 1313 q 283 1244 262 1282 q 327 1170 304 1206 q 370 1107 350 1133 l 370 1090 l 305 1090 q 254 1138 281 1110 q 201 1195 227 1165 q 155 1253 176 1225 q 122 1299 134 1280 l 122 1313 l 247 1313 z "
  },
  "\u0477": {
    ha: 707,
    x_min: 0,
    x_max: 736,
    o: "m 683 751 q 712 749 699 751 q 736 744 725 747 l 736 655 q 715 661 728 659 q 691 663 703 663 q 654 650 670 663 q 626 612 639 637 q 601 546 614 586 l 425 0 l 277 0 l 0 743 l 117 743 l 298 245 q 331 146 317 189 q 349 82 345 104 l 354 82 q 371 159 360 111 q 398 254 382 207 l 500 568 q 547 680 524 640 q 601 735 569 720 q 683 751 632 751 m 414 1064 q 451 995 429 1033 q 495 921 472 957 q 538 858 518 884 l 538 842 l 473 842 q 423 889 450 861 q 370 946 396 916 q 323 1004 344 977 q 290 1050 302 1031 l 290 1064 l 414 1064 m 173 1064 q 209 995 188 1033 q 253 921 230 957 q 296 858 276 884 l 296 842 l 231 842 q 180 889 208 861 q 127 946 153 916 q 81 1004 102 977 q 48 1050 60 1031 l 48 1064 l 173 1064 z "
  },
  "\u0478": {
    ha: 1675,
    x_min: 85,
    x_max: 1668,
    o: "m 920 497 q 893 289 920 382 q 814 127 867 195 q 684 23 762 60 q 503 -14 606 -14 q 318 23 397 -14 q 188 127 239 60 q 110 290 136 195 q 85 498 85 384 q 131 765 85 650 q 270 943 176 880 q 505 1007 363 1007 q 733 944 641 1007 q 873 767 825 881 q 920 497 920 652 m 205 497 q 237 279 205 371 q 335 136 269 186 q 503 86 401 86 q 672 136 607 86 q 768 279 737 186 q 799 497 799 371 q 768 716 799 625 q 672 857 737 808 q 505 905 607 905 q 336 856 402 905 q 237 715 269 806 q 205 497 205 624 m 977 743 l 1095 743 l 1263 309 q 1290 238 1278 273 q 1311 172 1302 203 q 1326 110 1320 140 l 1332 110 q 1358 198 1339 144 q 1396 310 1376 253 l 1550 743 l 1668 743 l 1348 -109 q 1287 -229 1322 -178 q 1204 -307 1253 -279 q 1086 -334 1155 -334 q 1029 -331 1053 -334 q 986 -322 1004 -327 l 986 -232 q 1023 -238 1002 -235 q 1067 -241 1044 -241 q 1140 -225 1109 -241 q 1194 -178 1171 -209 q 1233 -106 1217 -148 l 1274 -1 l 977 743 z "
  },
  "\u0479": {
    ha: 1504,
    x_min: 77,
    x_max: 1503,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 809 743 l 930 743 l 1094 312 q 1120 239 1108 274 q 1142 172 1133 204 q 1157 111 1152 140 l 1162 111 q 1189 200 1171 144 q 1227 313 1206 255 l 1382 743 l 1503 743 l 1180 -109 q 1120 -229 1154 -178 q 1037 -307 1086 -279 q 919 -334 988 -334 q 863 -331 887 -334 q 821 -322 838 -327 l 821 -232 q 857 -238 836 -235 q 901 -241 878 -241 q 974 -225 943 -241 q 1027 -178 1005 -209 q 1066 -106 1050 -148 l 1107 -1 l 809 743 z "
  },
  "\u047A": {
    ha: 1133,
    x_min: 85,
    x_max: 1044,
    o: "m 568 -79 q 507 -62 531 -79 q 475 -7 483 -45 q 307 48 380 6 q 184 156 234 90 q 110 309 135 222 q 85 498 85 396 q 130 742 85 635 q 262 915 175 848 q 476 1000 349 981 q 508 1053 484 1038 q 568 1069 532 1069 q 626 1053 602 1069 q 659 1000 650 1038 q 867 914 781 981 q 999 741 953 847 q 1044 497 1044 635 q 1019 309 1044 395 q 944 157 993 223 q 823 49 895 92 q 660 -7 751 7 q 627 -62 651 -45 q 568 -79 602 -79 m 475 96 q 510 139 487 126 q 568 152 532 152 q 623 139 600 152 q 658 96 646 125 q 805 167 746 114 q 894 304 864 220 q 924 497 924 388 q 856 766 924 663 q 658 897 789 870 q 623 852 647 865 q 568 839 600 839 q 510 852 532 839 q 476 896 487 865 q 327 826 387 879 q 236 690 267 773 q 205 497 205 606 q 235 303 205 387 q 326 166 266 219 q 475 96 387 113 z "
  },
  "\u047B": {
    ha: 903,
    x_min: 77,
    x_max: 825,
    o: "m 825 373 q 791 186 825 267 q 692 57 757 106 q 535 -7 627 8 q 508 -56 529 -41 q 452 -71 488 -71 q 396 -56 416 -71 q 370 -6 376 -41 q 216 57 281 9 q 114 185 150 106 q 77 373 77 265 q 155 630 77 532 q 371 751 232 728 q 396 799 376 785 q 452 812 416 812 q 508 799 487 812 q 535 749 529 785 q 689 685 624 734 q 790 557 754 635 q 825 373 825 478 m 709 373 q 690 508 709 450 q 633 603 671 566 q 534 654 594 640 q 505 615 525 627 q 452 604 486 604 q 398 615 418 604 q 371 655 378 627 q 237 563 279 635 q 194 373 194 491 q 237 181 194 254 q 372 87 279 108 q 399 126 379 115 q 452 138 418 138 q 505 126 485 138 q 534 89 526 115 q 667 183 625 110 q 709 373 709 256 z "
  },
  "\u047C": {
    ha: 1415,
    x_min: 85,
    x_max: 1330,
    o: "m 465 1265 l 465 1284 q 475 1349 465 1321 q 507 1395 486 1376 q 556 1423 527 1413 q 623 1432 585 1432 q 701 1420 663 1432 q 778 1392 739 1408 q 860 1363 817 1375 q 956 1351 903 1351 l 966 1351 l 966 1270 l 953 1270 q 847 1282 895 1270 q 761 1309 800 1293 q 689 1336 722 1324 q 625 1348 656 1348 q 567 1327 587 1348 q 547 1265 547 1306 l 465 1265 m 612 1045 l 612 1093 q 673 1123 652 1105 q 694 1160 694 1141 q 684 1180 694 1173 q 661 1192 674 1186 q 638 1206 648 1197 q 628 1234 628 1215 q 645 1271 628 1259 q 691 1284 663 1284 q 750 1261 728 1284 q 772 1198 772 1238 q 754 1132 772 1162 q 701 1080 736 1102 q 612 1045 665 1058 m 468 -14 q 255 52 340 -14 q 128 235 170 118 q 85 506 85 353 q 110 712 85 620 q 181 870 134 804 q 293 970 227 935 q 440 1006 358 1006 q 545 989 494 1006 q 637 944 596 972 l 593 857 q 525 895 562 881 q 448 909 489 909 q 344 881 390 909 q 267 801 298 853 q 219 673 235 748 q 203 504 203 598 q 235 284 203 377 q 331 140 267 191 q 489 89 395 89 q 574 105 534 89 q 648 150 613 122 l 648 452 l 764 452 l 764 150 q 841 105 800 121 q 928 89 881 89 q 1085 140 1022 89 q 1181 284 1149 191 q 1213 504 1213 377 q 1197 673 1213 598 q 1148 801 1180 748 q 1072 881 1117 853 q 968 909 1026 909 q 890 895 926 909 q 822 857 854 881 l 778 944 q 870 989 819 972 q 975 1006 922 1006 q 1123 970 1058 1006 q 1235 870 1189 935 q 1305 712 1281 804 q 1330 506 1330 620 q 1306 295 1330 391 q 1235 131 1282 200 q 1116 24 1187 62 q 949 -14 1044 -14 q 816 8 876 -14 q 708 71 756 29 q 600 8 659 29 q 468 -14 541 -14 z "
  },
  "\u047D": {
    ha: 1246,
    x_min: 81,
    x_max: 1166,
    o: "m 608 1068 q 667 1045 645 1068 q 690 983 690 1022 q 671 916 690 946 q 617 864 653 886 q 528 829 581 842 l 528 876 q 589 908 568 890 q 610 945 610 926 q 600 965 610 959 q 577 977 590 972 q 554 990 564 982 q 545 1017 545 999 q 561 1056 545 1043 q 608 1068 578 1068 m 540 1215 q 618 1203 581 1215 q 695 1175 656 1191 q 777 1147 734 1160 q 871 1135 820 1135 l 884 1135 l 884 1053 l 869 1053 q 763 1065 810 1053 q 677 1093 716 1077 q 606 1120 639 1108 q 542 1132 572 1132 q 484 1112 504 1132 q 465 1049 465 1092 l 382 1049 l 382 1069 q 392 1133 382 1105 q 423 1179 403 1160 q 473 1206 444 1197 q 540 1215 503 1215 m 397 -14 q 264 12 323 -14 q 165 86 205 37 q 102 207 124 136 q 81 369 81 278 q 116 581 81 494 q 218 713 152 667 q 376 758 284 758 q 460 747 422 758 q 532 718 498 736 l 494 631 q 433 654 463 646 q 376 663 404 663 q 243 589 289 663 q 197 370 197 514 q 211 250 197 304 q 252 159 225 197 q 317 101 279 121 q 404 81 355 81 q 491 99 454 81 q 567 155 528 117 l 567 378 l 680 378 l 680 157 q 731 114 706 130 q 783 89 755 97 q 844 81 810 81 q 955 117 909 81 q 1025 217 1001 152 q 1049 370 1049 281 q 1003 589 1049 514 q 869 663 957 663 q 814 654 842 663 q 753 630 785 646 l 715 718 q 786 747 748 736 q 871 758 824 758 q 1029 713 963 758 q 1131 581 1095 667 q 1166 369 1166 494 q 1128 162 1166 248 q 1019 32 1090 77 q 850 -14 947 -14 q 715 15 771 -14 q 623 86 659 43 q 531 14 586 41 q 397 -14 476 -14 z "
  },
  "\u047E": {
    ha: 1271,
    x_min: 35,
    x_max: 1236,
    o: "m 331 -7 q 223 210 274 92 q 132 456 172 327 q 67 721 92 585 q 35 991 41 856 l 155 991 q 184 740 161 863 q 239 503 207 616 q 309 294 272 390 q 379 125 345 198 l 386 125 q 412 217 395 165 q 450 326 429 269 l 590 703 q 575 801 582 751 q 563 900 568 851 q 557 991 559 949 l 677 991 q 704 750 682 872 q 762 513 727 629 q 837 297 796 398 q 917 119 878 197 l 922 119 q 1021 366 979 231 q 1088 659 1064 501 q 1115 991 1113 816 l 1236 991 q 1201 625 1232 803 q 1111 288 1169 448 q 968 -7 1053 127 l 866 -7 q 798 117 831 50 q 734 257 764 185 q 678 401 703 330 q 635 535 653 472 l 440 -7 l 331 -7 m 920 1228 l 920 1206 l 868 1094 l 846 1094 l 815 1163 l 683 1163 l 652 1094 l 629 1094 l 598 1163 l 468 1163 l 437 1094 l 415 1094 l 365 1206 l 365 1228 l 920 1228 z "
  },
  "\u047F": {
    ha: 1085,
    x_min: 26,
    x_max: 1051,
    o: "m 1051 745 q 1015 482 1045 609 q 930 235 985 355 q 797 0 876 115 l 691 0 q 634 107 663 49 q 580 226 605 165 q 538 342 555 287 l 371 0 l 269 0 q 183 153 225 69 q 108 333 142 237 q 52 532 74 429 q 26 745 31 636 l 138 745 q 175 491 146 611 q 243 272 203 371 q 321 102 282 173 l 325 102 q 346 150 334 125 q 370 198 357 174 q 394 248 382 223 l 499 460 q 473 603 482 528 q 462 745 464 677 l 574 745 q 602 517 578 631 q 662 296 625 403 q 741 98 699 190 l 747 98 q 840 279 798 178 q 907 498 881 380 q 940 745 933 616 l 1051 745 m 809 981 l 809 959 l 758 846 l 736 846 l 705 916 l 572 916 l 541 846 l 519 846 l 488 916 l 357 916 l 326 846 l 304 846 l 254 959 l 254 981 l 809 981 z "
  },
  "\u0480": {
    ha: 888,
    x_min: 84,
    x_max: 848,
    o: "m 571 1006 q 719 990 648 1006 q 848 948 791 975 l 801 849 q 695 887 753 872 q 569 903 637 903 q 418 874 485 903 q 303 793 351 846 q 231 665 256 740 q 206 495 206 589 q 244 280 206 371 q 362 140 282 189 q 568 90 442 90 q 629 94 600 90 q 683 106 658 97 l 683 -334 l 568 -334 l 568 -14 q 386 11 465 -14 q 249 80 307 35 q 155 189 192 125 q 101 330 119 252 q 84 496 84 408 q 117 702 84 608 q 212 863 149 795 q 365 968 275 931 q 571 1006 455 1006 z "
  },
  "\u0481": {
    ha: 680,
    x_min: 77,
    x_max: 633,
    o: "m 435 757 q 544 746 490 757 q 633 718 598 734 l 601 623 q 519 648 565 637 q 432 659 473 659 q 300 627 353 659 q 220 531 247 595 q 194 369 194 467 q 221 206 194 269 q 302 113 249 143 q 433 83 355 83 q 502 91 474 83 q 555 109 530 98 l 555 -334 l 443 -334 l 443 -14 q 287 9 355 -14 q 172 78 219 32 q 101 197 125 125 q 77 368 77 269 q 124 589 77 503 q 251 716 170 675 q 435 757 332 757 z "
  },
  "\u0482": {
    ha: 845,
    x_min: 74,
    x_max: 769,
    o: "m 623 871 l 700 828 l 574 610 l 769 497 l 725 423 l 532 536 l 389 290 l 583 176 l 541 102 l 346 215 l 220 -1 l 143 41 l 269 260 l 74 373 l 117 447 l 313 333 l 454 580 l 259 692 l 302 768 l 497 654 l 623 871 z "
  },
  "\u0488": {
    ha: 1373,
    x_min: 29,
    x_max: 1345,
    o: "m 932 643 q 969 738 935 703 q 1072 772 1004 772 q 1174 736 1138 772 q 1215 643 1211 701 l 1164 643 q 1133 693 1159 681 q 1072 705 1107 705 q 1008 694 1031 705 q 981 643 985 684 l 932 643 m 150 -26 q 188 68 153 34 q 290 103 222 103 q 392 67 356 103 q 433 -26 429 32 l 382 -26 q 351 23 377 12 q 290 35 326 35 q 226 25 249 35 q 199 -26 203 14 l 150 -26 m 539 -215 q 577 -121 543 -155 q 679 -86 611 -86 q 782 -122 745 -86 q 822 -215 818 -158 l 771 -215 q 740 -165 766 -177 q 679 -153 714 -153 q 615 -164 637 -153 q 587 -215 593 -175 l 539 -215 m 29 313 q 67 407 33 373 q 170 441 101 441 q 272 406 235 441 q 313 313 308 370 l 261 313 q 230 363 256 351 q 170 374 204 374 q 105 364 128 374 q 78 313 83 353 l 29 313 m 150 643 q 188 738 153 703 q 290 772 222 772 q 392 736 356 772 q 433 643 429 701 l 382 643 q 351 693 377 681 q 290 705 326 705 q 226 694 249 705 q 199 643 203 684 l 150 643 m 932 -26 q 969 68 935 34 q 1072 103 1004 103 q 1174 67 1138 103 q 1215 -26 1211 32 l 1164 -26 q 1133 23 1159 12 q 1072 35 1107 35 q 1008 25 1031 35 q 981 -26 985 14 l 932 -26 m 1061 313 q 1099 407 1065 373 q 1202 441 1133 441 q 1303 406 1267 441 q 1345 313 1340 370 l 1293 313 q 1262 362 1289 351 q 1202 374 1236 374 q 1138 364 1160 374 q 1109 313 1115 353 l 1061 313 m 539 836 q 576 931 543 897 q 679 965 610 965 q 781 930 745 965 q 822 836 817 895 l 771 836 q 740 886 766 874 q 679 898 714 898 q 615 887 637 898 q 587 836 593 877 l 539 836 z "
  },
  "\u0489": {
    ha: 1328,
    x_min: 29,
    x_max: 1301,
    o: "m 1122 804 l 1167 760 q 1061 693 1116 730 q 965 627 1006 657 l 903 689 l 904 700 q 971 737 935 718 q 1047 773 1008 755 q 1122 804 1086 791 m 366 97 l 428 35 l 426 24 q 359 -13 396 6 q 283 -48 322 -31 q 208 -80 244 -66 l 163 -37 q 269 31 214 -6 q 366 97 325 67 m 29 448 q 152 420 87 433 q 267 399 217 407 l 267 311 l 257 304 q 144 340 205 317 q 29 386 83 362 l 29 448 m 729 -24 l 736 -33 q 701 -146 724 -85 q 654 -261 678 -208 l 592 -261 q 621 -138 607 -203 q 641 -24 634 -73 l 729 -24 m 991 123 l 1003 122 q 1040 55 1021 92 q 1075 -21 1058 18 q 1106 -96 1093 -60 l 1063 -140 q 996 -35 1032 -90 q 929 61 959 21 l 991 123 m 266 863 q 333 758 297 813 q 400 661 370 702 l 338 600 l 326 601 q 272 706 299 647 q 223 819 244 764 l 266 863 m 1074 445 q 1147 424 1108 437 q 1226 395 1186 410 q 1301 363 1265 380 l 1301 301 q 1179 329 1244 315 q 1064 349 1114 342 l 1064 437 l 1074 445 m 739 1011 q 711 889 725 954 q 691 774 698 824 l 603 774 l 595 783 q 617 857 604 818 q 646 936 630 896 q 677 1011 661 975 l 739 1011 z "
  },
  "\u048A": {
    ha: 1075,
    x_min: 136,
    x_max: 1051,
    o: "m 817 -259 l 924 0 l 812 0 l 812 566 q 813 655 812 606 q 818 752 815 704 q 823 834 821 800 l 817 834 l 262 0 l 136 0 l 136 991 l 243 991 l 243 417 q 242 325 243 374 q 238 232 240 275 q 235 159 236 188 l 240 159 l 792 991 l 918 991 l 918 102 l 1051 102 l 949 -259 l 817 -259 m 528 1072 q 388 1095 441 1072 q 310 1163 335 1117 q 281 1280 286 1209 l 384 1280 q 424 1178 391 1205 q 530 1152 457 1152 q 632 1180 595 1152 q 677 1280 670 1208 l 783 1280 q 750 1165 779 1211 q 667 1096 722 1119 q 528 1072 612 1072 z "
  },
  "\u048B": {
    ha: 901,
    x_min: 119,
    x_max: 888,
    o: "m 682 -256 l 768 0 l 657 0 l 657 456 q 658 516 657 484 q 660 579 659 549 q 662 631 661 610 l 257 0 l 119 0 l 119 743 l 226 743 l 226 294 q 225 234 226 266 q 222 171 224 202 q 218 113 220 140 l 624 743 l 762 743 l 762 96 l 888 96 l 797 -256 l 682 -256 m 451 842 q 311 864 364 842 q 233 933 258 887 q 203 1049 208 979 l 307 1049 q 347 947 313 975 q 453 920 380 920 q 555 949 517 920 q 600 1049 593 977 l 707 1049 q 673 935 701 981 q 590 865 645 888 q 451 842 536 842 z "
  },
  "\u048C": {
    ha: 847,
    x_min: 30,
    x_max: 775,
    o: "m 251 991 l 251 861 l 472 861 l 472 761 l 251 761 l 251 570 l 385 570 q 615 534 530 570 q 738 435 701 498 q 775 290 775 372 q 686 76 775 153 q 408 0 596 0 l 136 0 l 136 761 l 30 761 l 30 861 l 136 861 l 136 991 l 251 991 m 394 468 l 251 468 l 251 98 l 401 98 q 592 146 530 98 q 655 290 655 193 q 625 395 655 356 q 536 451 594 434 q 394 468 477 468 z "
  },
  "\u048D": {
    ha: 825,
    x_min: 20,
    x_max: 750,
    o: "m 238 1055 l 238 888 l 438 888 l 438 802 l 238 802 l 238 437 l 455 437 q 621 413 555 437 q 718 342 686 389 q 750 227 750 296 q 719 106 750 157 q 622 28 688 56 q 450 0 555 0 l 125 0 l 125 802 l 20 802 l 20 888 l 125 888 l 125 1055 l 238 1055 m 444 342 l 238 342 l 238 92 l 445 92 q 585 122 532 92 q 637 221 637 152 q 588 315 637 289 q 444 342 539 342 z "
  },
  "\u048E": {
    ha: 844,
    x_min: 136,
    x_max: 772,
    o: "m 772 702 q 737 552 772 621 q 624 441 702 483 l 703 336 l 636 281 l 539 409 q 465 395 504 399 q 378 390 425 390 l 251 390 l 251 0 l 136 0 l 136 991 l 404 991 q 683 917 593 991 q 772 702 772 842 m 251 489 l 368 489 q 425 491 398 489 q 476 496 451 492 l 406 590 l 477 644 l 567 528 q 630 593 608 552 q 653 697 653 634 q 588 845 653 796 q 389 893 524 893 l 251 893 l 251 489 z "
  },
  "\u048F": {
    ha: 850,
    x_min: 119,
    x_max: 772,
    o: "m 465 -14 q 361 2 406 -14 q 285 44 317 18 q 232 102 253 71 l 224 102 q 230 33 227 72 q 232 -27 232 -5 l 232 -332 l 119 -332 l 119 743 l 212 743 l 228 633 l 233 633 q 286 695 254 667 q 362 740 317 724 q 468 757 407 757 q 690 661 607 757 q 772 374 772 566 q 741 176 772 258 q 652 47 709 95 l 729 -58 l 662 -111 l 575 5 q 524 -8 551 -3 q 465 -14 496 -14 m 448 662 q 324 632 371 662 q 255 543 277 602 q 232 395 233 484 l 232 372 q 253 213 232 278 q 321 114 273 148 q 450 80 369 80 q 484 83 467 80 q 515 92 500 86 l 433 199 l 504 252 l 589 140 q 640 235 623 176 q 656 375 656 294 q 605 590 656 519 q 448 662 554 662 z "
  },
  "\u0492": {
    ha: 729,
    x_min: 31,
    x_max: 701,
    o: "m 701 991 l 701 888 l 251 888 l 251 541 l 539 541 l 539 440 l 251 440 l 251 0 l 136 0 l 136 440 l 31 440 l 31 541 l 136 541 l 136 991 l 701 991 z "
  },
  "\u0493": {
    ha: 600,
    x_min: 11,
    x_max: 571,
    o: "m 571 743 l 571 648 l 231 648 l 231 414 l 466 414 l 466 327 l 231 327 l 231 0 l 118 0 l 118 327 l 11 327 l 11 414 l 118 414 l 118 743 l 571 743 z "
  },
  "\u0494": {
    ha: 899,
    x_min: 136,
    x_max: 845,
    o: "m 382 444 q 312 440 351 444 q 251 433 273 437 l 251 0 l 136 0 l 136 991 l 709 991 l 709 888 l 251 888 l 251 532 q 319 542 277 537 q 401 546 361 546 q 595 515 512 546 q 734 426 679 484 q 817 286 789 368 q 845 102 845 204 q 818 -95 845 -10 q 743 -235 791 -179 q 626 -319 694 -292 q 477 -347 559 -347 q 372 -339 416 -347 q 288 -314 328 -331 l 288 -211 q 373 -236 331 -228 q 464 -244 416 -244 q 576 -222 528 -244 q 658 -155 625 -199 q 708 -46 691 -111 q 724 102 724 18 q 685 290 724 214 q 569 405 645 366 q 382 444 492 444 z "
  },
  "\u0495": {
    ha: 735,
    x_min: 119,
    x_max: 694,
    o: "m 578 743 l 578 648 l 232 648 l 232 422 q 282 429 256 426 q 336 432 309 432 q 532 391 452 432 q 653 263 612 349 q 694 41 694 177 q 654 -176 694 -92 q 548 -300 615 -260 q 395 -340 480 -340 q 304 -330 343 -340 q 231 -301 265 -320 l 231 -201 q 303 -230 263 -218 q 391 -241 343 -241 q 530 -171 481 -241 q 578 42 578 -101 q 518 262 578 192 q 333 333 458 333 q 282 330 309 333 q 232 321 256 327 l 232 0 l 119 0 l 119 743 l 578 743 z "
  },
  "\u0496": {
    ha: 1230,
    x_min: 3,
    x_max: 1210,
    o: "m 1150 991 l 762 511 l 1084 103 l 1210 103 l 1210 -259 l 1100 -259 l 1100 0 l 1031 0 l 640 503 l 640 0 l 528 0 l 528 503 l 136 0 l 3 0 l 406 510 l 18 991 l 146 991 l 528 511 l 528 991 l 640 991 l 640 511 l 1022 991 l 1150 991 z "
  },
  "\u0497": {
    ha: 1080,
    x_min: 3,
    x_max: 1061,
    o: "m 989 743 l 680 382 l 932 94 l 1061 94 l 1061 -256 l 952 -256 l 952 0 l 887 0 l 562 377 l 562 0 l 456 0 l 456 377 l 132 0 l 3 0 l 338 382 l 28 743 l 153 743 l 456 382 l 456 743 l 562 743 l 562 382 l 867 743 l 989 743 z "
  },
  "\u0498": {
    ha: 810,
    x_min: 54,
    x_max: 734,
    o: "m 714 759 q 652 599 714 658 q 485 523 589 541 l 485 518 q 671 439 607 500 q 734 279 734 378 q 691 126 734 192 q 559 23 647 60 q 342 -14 472 -14 q 188 -1 261 -14 q 54 41 115 12 l 54 147 q 144 112 96 127 q 244 89 193 97 q 340 81 294 81 q 544 133 475 81 q 614 279 614 185 q 533 421 614 376 q 308 465 453 465 l 165 465 l 165 562 l 303 562 q 465 585 401 562 q 562 649 530 608 q 594 748 594 691 q 537 868 594 826 q 390 910 481 910 q 234 886 296 910 q 114 824 172 862 l 58 903 q 148 955 98 931 q 259 992 198 978 q 391 1006 320 1006 q 568 974 496 1006 q 677 887 640 943 q 714 759 714 831 m 391 -163 q 365 -84 391 -124 q 293 0 339 -43 l 372 2 q 449 -72 413 -28 q 484 -174 484 -115 q 449 -270 484 -235 q 348 -305 414 -305 q 307 -302 327 -305 q 269 -294 286 -298 l 269 -221 q 296 -227 279 -224 q 329 -229 312 -229 q 373 -212 355 -229 q 391 -163 391 -195 z "
  },
  "\u0499": {
    ha: 671,
    x_min: 45,
    x_max: 608,
    o: "m 310 757 q 454 734 393 757 q 549 668 515 711 q 582 562 582 625 q 545 455 582 495 q 444 397 509 415 l 444 392 q 527 357 490 380 q 586 297 564 334 q 608 205 608 260 q 574 93 608 143 q 471 15 540 43 q 296 -14 401 -14 q 197 -8 243 -14 q 112 9 150 -2 q 45 35 74 20 l 45 137 q 157 96 93 114 q 294 79 220 79 q 397 92 351 79 q 469 135 442 105 q 496 212 496 164 q 472 285 496 256 q 401 328 448 314 q 282 342 354 342 l 182 342 l 182 434 l 264 434 q 417 461 360 434 q 474 553 474 488 q 430 636 474 608 q 304 663 386 663 q 196 651 243 663 q 95 615 149 638 l 55 705 q 177 744 113 731 q 310 757 241 757 m 333 -163 q 307 -84 333 -124 q 235 0 281 -43 l 315 2 q 391 -72 355 -28 q 427 -174 427 -115 q 391 -270 427 -235 q 290 -305 356 -305 q 249 -302 269 -305 q 211 -294 229 -298 l 211 -221 q 238 -227 222 -224 q 271 -229 254 -229 q 315 -212 298 -229 q 333 -163 333 -195 z "
  },
  "\u049A": {
    ha: 919,
    x_min: 136,
    x_max: 897,
    o: "m 827 991 l 389 510 l 754 103 l 897 103 l 897 -259 l 786 -259 l 786 0 l 707 0 l 251 503 l 251 0 l 136 0 l 136 991 l 251 991 l 251 511 l 695 991 l 827 991 z "
  },
  "\u049B": {
    ha: 756,
    x_min: 119,
    x_max: 737,
    o: "m 629 -256 l 629 0 l 570 0 l 232 377 l 232 0 l 119 0 l 119 743 l 232 743 l 232 382 l 552 743 l 676 743 l 355 385 l 618 96 l 737 96 l 737 -256 l 629 -256 z "
  },
  "\u049C": {
    ha: 850,
    x_min: 136,
    x_max: 846,
    o: "m 422 197 l 343 197 l 343 832 l 422 832 l 422 197 m 846 0 l 707 0 l 251 503 l 251 0 l 136 0 l 136 991 l 251 991 l 251 511 l 695 991 l 827 991 l 389 510 l 846 0 z "
  },
  "\u049D": {
    ha: 718,
    x_min: 119,
    x_max: 702,
    o: "m 397 688 l 397 64 l 313 64 l 313 688 l 397 688 m 552 743 l 676 743 l 355 385 l 702 0 l 570 0 l 232 377 l 232 0 l 119 0 l 119 743 l 232 743 l 232 382 l 552 743 z "
  },
  "\u049E": {
    ha: 847,
    x_min: 21,
    x_max: 846,
    o: "m 21 770 l 21 872 l 388 872 l 388 770 l 21 770 m 846 0 l 707 0 l 251 503 l 251 0 l 136 0 l 136 991 l 251 991 l 251 511 l 695 991 l 827 991 l 389 510 l 846 0 z "
  },
  "\u049F": {
    ha: 730,
    x_min: 12,
    x_max: 702,
    o: "m 232 1055 l 232 928 l 479 928 l 479 844 l 232 844 l 232 382 l 552 743 l 676 743 l 355 385 l 702 0 l 570 0 l 232 377 l 232 0 l 119 0 l 119 844 l 12 844 l 12 928 l 119 928 l 119 1055 l 232 1055 z "
  },
  "\u04A0": {
    ha: 951,
    x_min: 9,
    x_max: 947,
    o: "m 928 991 l 490 510 l 947 0 l 808 0 l 352 503 l 352 0 l 236 0 l 236 888 l 9 888 l 9 991 l 352 991 l 352 511 l 796 991 l 928 991 z "
  },
  "\u04A1": {
    ha: 846,
    x_min: 26,
    x_max: 840,
    o: "m 814 743 l 494 383 l 840 0 l 709 0 l 370 377 l 370 0 l 260 0 l 260 650 l 26 650 l 26 743 l 370 743 l 370 382 l 692 743 l 814 743 z "
  },
  "\u04A2": {
    ha: 1041,
    x_min: 136,
    x_max: 1004,
    o: "m 893 -259 l 893 0 l 773 0 l 773 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 773 569 l 773 991 l 887 991 l 887 103 l 1004 103 l 1004 -259 l 893 -259 z "
  },
  "\u04A3": {
    ha: 904,
    x_min: 119,
    x_max: 867,
    o: "m 755 -256 l 755 0 l 646 0 l 646 336 l 232 336 l 232 0 l 119 0 l 119 743 l 232 743 l 232 431 l 646 431 l 646 743 l 759 743 l 759 96 l 867 96 l 867 -256 l 755 -256 z "
  },
  "\u04A4": {
    ha: 1124,
    x_min: 136,
    x_max: 1114,
    o: "m 136 0 l 136 991 l 251 991 l 251 569 l 772 569 l 772 991 l 1114 991 l 1114 888 l 887 888 l 887 0 l 772 0 l 772 467 l 251 467 l 251 0 l 136 0 z "
  },
  "\u04A5": {
    ha: 1015,
    x_min: 119,
    x_max: 994,
    o: "m 119 0 l 119 743 l 232 743 l 232 431 l 646 431 l 646 743 l 994 743 l 994 650 l 759 650 l 759 0 l 646 0 l 646 336 l 232 336 l 232 0 l 119 0 z "
  },
  "\u04A6": {
    ha: 1469,
    x_min: 136,
    x_max: 1415,
    o: "m 840 991 l 840 535 q 906 542 867 540 q 983 545 946 545 q 1170 513 1089 545 q 1304 424 1250 482 q 1387 283 1359 366 q 1415 99 1415 201 q 1388 -95 1415 -12 q 1313 -235 1362 -178 q 1198 -319 1265 -291 q 1049 -347 1131 -347 q 943 -338 985 -347 q 860 -314 901 -330 l 860 -211 q 945 -235 902 -227 q 1035 -244 987 -244 q 1146 -221 1098 -244 q 1228 -155 1195 -199 q 1277 -46 1261 -111 q 1294 100 1294 18 q 1273 248 1294 184 q 1212 355 1253 312 q 1113 421 1172 399 q 975 443 1053 443 q 902 440 943 443 q 840 432 862 437 l 840 0 l 726 0 l 726 888 l 251 888 l 251 0 l 136 0 l 136 991 l 840 991 z "
  },
  "\u04A7": {
    ha: 1198,
    x_min: 119,
    x_max: 1158,
    o: "m 715 743 l 715 422 q 764 429 739 426 q 814 432 790 432 q 991 392 913 432 q 1113 267 1068 353 q 1158 41 1158 181 q 1121 -176 1158 -92 q 1022 -300 1084 -260 q 879 -340 959 -340 q 792 -330 829 -340 q 724 -301 755 -320 l 724 -201 q 790 -230 753 -218 q 871 -241 826 -241 q 998 -171 954 -241 q 1042 42 1042 -101 q 985 262 1042 192 q 810 333 928 333 q 762 330 788 333 q 715 319 736 326 l 715 0 l 602 0 l 602 648 l 232 648 l 232 0 l 119 0 l 119 743 l 715 743 z "
  },
  "\u04A8": {
    ha: 1078,
    x_min: 85,
    x_max: 1019,
    o: "m 991 462 q 967 295 991 372 q 903 162 943 219 q 815 71 863 105 q 865 53 837 59 q 926 46 892 46 q 976 50 952 46 q 1019 61 1000 54 l 1019 -40 q 991 -50 1007 -45 q 956 -55 975 -54 q 919 -57 938 -57 q 801 -39 854 -57 q 699 11 747 -21 q 622 -7 665 -1 q 532 -14 578 -14 q 341 22 424 -14 q 201 123 258 58 q 114 281 144 189 q 85 486 85 373 q 132 765 85 648 q 276 944 180 882 q 520 1007 373 1007 q 606 1000 566 1007 q 670 983 645 993 l 640 886 q 587 899 622 892 q 519 905 553 905 q 377 877 437 905 q 280 795 318 849 q 223 664 241 741 q 205 490 205 587 q 246 266 205 356 q 362 131 287 176 q 538 86 437 86 q 576 89 558 86 q 610 95 595 91 q 543 200 570 141 q 500 327 515 259 q 486 465 486 394 q 505 616 486 552 q 558 723 524 680 q 638 786 592 765 q 739 806 684 806 q 867 772 810 806 q 958 663 924 739 q 991 462 991 587 m 874 458 q 859 593 874 536 q 814 680 844 650 q 741 711 784 711 q 681 692 707 711 q 638 641 656 674 q 612 561 621 607 q 604 458 604 515 q 619 330 604 391 q 661 219 634 269 q 724 132 688 170 q 805 213 771 163 q 856 326 838 263 q 874 458 874 389 z "
  },
  "\u04A9": {
    ha: 883,
    x_min: 77,
    x_max: 833,
    o: "m 398 757 q 464 752 437 757 q 512 741 492 747 l 488 649 q 449 657 473 653 q 397 662 425 662 q 239 584 286 662 q 193 363 193 506 q 216 217 193 281 q 289 117 239 153 q 420 80 339 80 q 463 84 444 80 q 488 90 481 87 q 419 197 446 135 q 392 343 392 260 q 419 481 392 427 q 495 562 447 536 q 605 589 543 589 q 710 563 665 589 q 782 483 756 537 q 808 343 808 429 q 768 179 808 248 q 674 72 729 111 q 711 58 688 64 q 755 52 733 52 q 794 55 774 52 q 833 62 814 57 l 833 -29 q 793 -37 817 -35 q 747 -39 770 -39 q 651 -25 697 -39 q 565 14 604 -11 q 500 -5 536 3 q 414 -14 465 -14 q 230 37 305 -14 q 116 174 155 87 q 77 365 77 260 q 97 525 77 453 q 158 649 117 597 q 258 729 198 701 q 398 757 318 757 m 604 500 q 550 481 572 500 q 516 426 528 462 q 505 339 505 391 q 531 213 505 267 q 595 128 557 159 q 669 212 640 158 q 697 342 697 267 q 687 427 697 392 q 656 481 677 463 q 604 500 635 500 z "
  },
  "\u04AA": {
    ha: 875,
    x_min: 85,
    x_max: 832,
    o: "m 559 904 q 412 876 477 904 q 301 794 347 848 q 231 666 255 741 q 206 496 206 591 q 245 280 206 372 q 362 138 284 188 q 556 87 439 87 q 681 99 623 87 q 795 127 740 110 l 795 26 q 682 -4 741 6 q 540 -14 622 -14 q 287 49 389 -14 q 135 227 186 112 q 85 497 85 341 q 116 703 85 610 q 209 864 148 796 q 358 969 269 932 q 561 1006 446 1006 q 706 991 636 1006 q 832 948 776 976 l 786 850 q 682 888 739 872 q 559 904 625 904 m 528 -163 q 502 -84 528 -124 q 430 0 476 -43 l 509 2 q 586 -72 550 -28 q 621 -174 621 -115 q 586 -270 621 -235 q 485 -305 551 -305 q 444 -302 464 -305 q 406 -294 423 -298 l 406 -221 q 433 -227 416 -224 q 466 -229 449 -229 q 510 -212 492 -229 q 528 -163 528 -195 z "
  },
  "\u04AB": {
    ha: 665,
    x_min: 77,
    x_max: 620,
    o: "m 416 -14 q 239 28 316 -14 q 120 154 163 69 q 77 368 77 239 q 122 588 77 503 q 247 715 168 674 q 427 757 326 757 q 535 746 483 757 q 620 718 587 734 l 586 623 q 508 648 552 637 q 425 659 463 659 q 296 625 347 659 q 219 528 245 592 q 194 369 194 463 q 219 215 194 279 q 293 118 243 151 q 416 84 342 84 q 522 97 475 84 q 608 126 570 109 l 608 26 q 525 -3 571 7 q 416 -14 479 -14 m 416 -163 q 391 -84 416 -124 q 319 0 365 -43 l 398 2 q 474 -72 439 -28 q 510 -174 510 -115 q 475 -270 510 -235 q 374 -305 439 -305 q 332 -302 353 -305 q 294 -294 312 -298 l 294 -221 q 321 -227 305 -224 q 355 -229 338 -229 q 399 -212 381 -229 q 416 -163 416 -195 z "
  },
  "\u04AC": {
    ha: 765,
    x_min: 11,
    x_max: 751,
    o: "m 445 -259 l 445 0 l 323 0 l 323 888 l 11 888 l 11 991 l 751 991 l 751 888 l 438 888 l 438 103 l 555 103 l 555 -259 l 445 -259 z "
  },
  "\u04AD": {
    ha: 653,
    x_min: 28,
    x_max: 624,
    o: "m 624 743 l 624 649 l 380 649 l 380 94 l 488 94 l 488 -256 l 378 -256 l 378 0 l 269 0 l 269 649 l 28 649 l 28 743 l 624 743 z "
  },
  "\u04AE": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 z "
  },
  "\u04AF": {
    ha: 694,
    x_min: 0,
    x_max: 694,
    o: "m 403 -334 l 290 -334 l 290 -2 l 0 743 l 117 743 l 280 319 q 318 206 300 264 q 344 114 337 148 l 351 114 q 377 205 359 148 q 415 319 394 263 l 576 743 l 694 743 l 403 -2 l 403 -334 z "
  },
  "\u04B0": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 331 0 l 331 243 l 123 243 l 123 345 l 331 345 l 331 379 l 0 991 l 126 991 l 389 494 l 652 991 l 777 991 l 446 385 l 446 345 l 652 345 l 652 243 l 446 243 l 446 0 l 331 0 z "
  },
  "\u04B1": {
    ha: 694,
    x_min: 0,
    x_max: 694,
    o: "m 694 743 l 404 0 l 595 0 l 595 -87 l 403 -87 l 403 -334 l 290 -334 l 290 -87 l 97 -87 l 97 0 l 289 0 l 0 743 l 117 743 l 277 322 q 318 210 300 261 q 344 114 335 158 l 349 114 q 378 211 360 158 q 420 327 397 264 l 576 743 l 694 743 z "
  },
  "\u04B2": {
    ha: 858,
    x_min: 4,
    x_max: 846,
    o: "m 735 -259 l 735 0 l 667 0 l 399 437 l 127 0 l 4 0 l 334 517 l 27 991 l 155 991 l 403 596 l 652 991 l 774 991 l 467 519 l 730 103 l 846 103 l 846 -259 l 735 -259 z "
  },
  "\u04B3": {
    ha: 755,
    x_min: 26,
    x_max: 739,
    o: "m 629 -256 l 629 0 l 572 0 l 363 303 l 154 0 l 26 0 l 296 380 l 39 743 l 168 743 l 363 457 l 559 743 l 686 743 l 429 380 l 633 96 l 739 96 l 739 -256 l 629 -256 z "
  },
  "\u04B4": {
    ha: 1192,
    x_min: 12,
    x_max: 1158,
    o: "m 1049 -259 l 1049 0 l 299 0 l 299 888 l 12 888 l 12 991 l 739 991 l 739 888 l 415 888 l 415 103 l 923 103 l 923 991 l 1038 991 l 1038 103 l 1158 103 l 1158 -259 l 1049 -259 z "
  },
  "\u04B5": {
    ha: 997,
    x_min: 28,
    x_max: 971,
    o: "m 861 -256 l 861 0 l 243 0 l 243 649 l 28 649 l 28 743 l 600 743 l 600 649 l 355 649 l 355 96 l 747 96 l 747 743 l 861 743 l 861 94 l 971 94 l 971 -256 l 861 -256 z "
  },
  "\u04B6": {
    ha: 969,
    x_min: 113,
    x_max: 943,
    o: "m 827 991 l 827 103 l 943 103 l 943 -259 l 833 -259 l 833 0 l 712 0 l 712 411 q 562 365 633 382 q 404 347 490 347 q 188 412 263 347 q 113 598 113 477 l 113 991 l 229 991 l 229 614 q 272 491 229 532 q 415 449 316 449 q 565 464 498 449 q 712 508 631 479 l 712 991 l 827 991 z "
  },
  "\u04B7": {
    ha: 854,
    x_min: 104,
    x_max: 832,
    o: "m 724 743 l 724 96 l 832 96 l 832 -257 l 720 -257 l 720 0 l 612 0 l 612 333 q 489 270 549 293 q 345 247 429 247 q 167 307 230 247 q 104 468 104 366 l 104 743 l 217 743 l 217 476 q 255 373 217 406 q 367 340 294 340 q 495 361 437 340 q 612 420 553 383 l 612 743 l 724 743 z "
  },
  "\u04B8": {
    ha: 963,
    x_min: 113,
    x_max: 827,
    o: "m 827 991 l 827 0 l 710 0 l 710 408 q 612 374 661 389 q 506 353 562 359 l 506 142 l 427 142 l 427 347 q 291 363 350 347 q 193 410 233 378 q 133 488 153 441 q 113 598 113 535 l 113 991 l 229 991 l 229 614 q 275 490 229 532 q 427 449 321 449 l 427 687 l 506 687 l 506 454 q 613 473 562 459 q 710 505 665 488 l 710 991 l 827 991 z "
  },
  "\u04B9": {
    ha: 836,
    x_min: 104,
    x_max: 715,
    o: "m 715 743 l 715 0 l 602 0 l 602 333 q 521 286 561 305 q 435 256 481 266 l 435 87 l 358 87 l 358 247 q 350 246 354 246 q 340 245 346 245 q 165 306 226 245 q 104 467 104 366 l 104 743 l 217 743 l 217 475 q 253 373 217 406 q 358 338 288 340 l 358 543 l 435 543 l 435 347 q 519 374 479 355 q 602 420 560 393 l 602 743 l 715 743 z "
  },
  "\u04BA": {
    ha: 963,
    x_min: 136,
    x_max: 850,
    o: "m 136 991 l 251 991 l 251 581 q 405 627 330 610 q 559 644 479 644 q 774 580 699 644 q 850 394 850 515 l 850 0 l 734 0 l 734 377 q 690 502 734 460 q 547 543 647 543 q 398 528 464 543 q 251 484 332 512 l 251 0 l 136 0 l 136 991 z "
  },
  "\u04BB": {
    ha: 852,
    x_min: 119,
    x_max: 739,
    o: "m 231 1055 l 231 740 q 230 685 231 713 q 225 635 229 658 l 233 635 q 291 701 256 674 q 372 742 327 728 q 469 755 418 755 q 618 727 558 755 q 708 639 678 699 q 739 484 739 579 l 739 0 l 627 0 l 627 477 q 585 616 627 570 q 455 662 543 662 q 323 630 372 662 q 253 538 274 599 q 231 389 231 477 l 231 0 l 119 0 l 119 1055 l 231 1055 z "
  },
  "\u04BC": {
    ha: 1167,
    x_min: 38,
    x_max: 1084,
    o: "m 680 1007 q 913 946 825 1007 q 1043 775 1002 885 q 1084 520 1084 666 l 1084 454 l 361 454 q 409 255 368 337 q 526 131 449 174 q 716 87 602 87 q 831 95 778 87 q 931 115 884 103 q 1020 142 978 127 l 1020 37 q 887 1 962 16 q 704 -14 812 -14 q 457 43 557 -14 q 303 204 357 100 q 240 454 249 309 l 209 454 q 85 497 133 454 q 38 612 38 540 q 44 662 38 640 q 57 701 50 685 l 154 701 q 144 669 149 690 q 140 625 140 649 q 160 572 140 590 q 220 553 180 553 l 241 553 q 288 748 254 663 q 377 890 322 832 q 509 978 433 948 q 680 1007 585 1007 m 679 904 q 552 881 608 904 q 455 813 496 858 q 391 703 414 768 q 361 553 367 638 l 962 553 q 895 812 962 720 q 679 904 829 904 z "
  },
  "\u04BD": {
    ha: 917,
    x_min: 31,
    x_max: 844,
    o: "m 541 755 q 704 713 637 755 q 808 596 772 671 q 844 420 844 521 l 844 351 l 330 351 q 394 148 332 213 q 569 83 455 83 q 700 95 648 83 q 811 133 753 108 l 811 35 q 699 -2 755 9 q 569 -14 644 -14 q 424 10 489 -14 q 313 79 359 33 q 241 194 267 125 q 212 351 215 262 q 113 368 153 351 q 51 417 72 385 q 31 500 31 450 q 36 547 31 526 q 49 584 41 569 l 141 584 q 132 553 136 573 q 127 511 127 534 q 146 459 127 477 q 203 440 165 440 l 217 440 q 274 618 229 548 q 388 722 319 688 q 541 755 456 755 m 538 663 q 394 606 448 663 q 332 440 340 549 l 726 440 q 706 557 726 507 q 645 635 686 608 q 538 663 603 663 z "
  },
  "\u04BE": {
    ha: 1167,
    x_min: 38,
    x_max: 1084,
    o: "m 680 1007 q 913 946 825 1007 q 1043 777 1002 886 q 1084 524 1084 668 l 1084 454 l 361 454 q 409 255 368 337 q 526 131 449 174 q 716 87 602 87 q 831 95 778 87 q 931 115 884 103 q 1020 142 978 127 l 1020 37 q 898 3 965 16 q 740 -11 831 -9 l 740 -260 l 629 -260 l 629 -7 q 422 65 506 5 q 293 224 338 125 q 240 454 248 323 l 209 454 q 85 497 133 454 q 38 612 38 540 q 44 662 38 640 q 57 701 50 685 l 154 701 q 144 669 149 690 q 140 625 140 649 q 160 572 140 590 q 220 553 180 553 l 241 553 q 286 748 252 663 q 375 890 319 832 q 508 978 431 948 q 680 1007 585 1007 m 679 904 q 552 881 608 904 q 455 813 496 858 q 391 703 414 768 q 361 553 367 638 l 962 553 q 898 812 962 720 q 679 904 834 904 z "
  },
  "\u04BF": {
    ha: 917,
    x_min: 31,
    x_max: 844,
    o: "m 491 -6 q 345 52 406 7 q 249 172 283 96 q 212 351 215 247 q 113 368 153 351 q 51 417 72 385 q 31 500 31 450 q 36 547 31 526 q 49 584 41 569 l 141 584 q 132 553 136 573 q 127 511 127 534 q 146 459 127 477 q 203 440 165 440 l 217 440 q 275 615 231 545 q 388 720 319 685 q 541 755 456 755 q 704 713 637 755 q 808 596 772 671 q 844 420 844 521 l 844 351 l 330 351 q 394 148 332 213 q 569 83 455 83 q 700 95 648 83 q 811 133 753 108 l 811 35 q 712 1 762 12 q 601 -11 663 -9 l 601 -256 l 491 -256 l 491 -6 m 538 663 q 394 606 448 663 q 332 440 340 549 l 726 440 q 706 557 726 507 q 645 635 686 608 q 538 663 603 663 z "
  },
  "\u04C0": {
    ha: 388,
    x_min: 136,
    x_max: 251,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 z "
  },
  "\u04C1": {
    ha: 1168,
    x_min: 3,
    x_max: 1164,
    o: "m 406 510 l 18 991 l 146 991 l 528 511 l 528 991 l 640 991 l 640 511 l 1022 991 l 1150 991 l 762 511 l 1164 0 l 1031 0 l 640 503 l 640 0 l 528 0 l 528 503 l 136 0 l 3 0 l 406 510 m 842 1298 q 807 1183 836 1230 q 725 1114 779 1137 q 586 1090 671 1090 q 445 1113 498 1090 q 367 1182 392 1136 q 336 1298 341 1228 l 442 1298 q 482 1196 450 1223 q 588 1169 515 1169 q 690 1198 653 1169 q 735 1298 728 1226 l 842 1298 z "
  },
  "\u04C2": {
    ha: 1021,
    x_min: 3,
    x_max: 1016,
    o: "m 989 743 l 680 382 l 1016 0 l 887 0 l 562 377 l 562 0 l 456 0 l 456 377 l 132 0 l 3 0 l 338 382 l 28 743 l 153 743 l 456 382 l 456 743 l 562 743 l 562 382 l 867 743 l 989 743 m 764 1049 q 730 935 758 981 q 648 865 702 888 q 509 842 593 842 q 368 864 421 842 q 289 933 315 887 q 259 1049 264 979 l 365 1049 q 405 947 372 975 q 511 920 437 920 q 613 949 576 920 q 658 1049 650 977 l 764 1049 z "
  },
  "\u04C3": {
    ha: 956,
    x_min: 136,
    x_max: 881,
    o: "m 829 991 l 397 530 q 415 530 407 530 q 434 530 424 530 q 631 500 547 530 q 770 415 715 471 q 853 279 826 359 q 881 100 881 200 q 853 -97 881 -13 q 774 -237 825 -181 q 655 -320 724 -292 q 505 -347 586 -347 q 400 -339 443 -347 q 315 -314 357 -331 l 315 -211 q 401 -236 358 -228 q 500 -244 445 -244 q 609 -222 560 -244 q 691 -156 657 -199 q 744 -48 726 -113 q 762 100 762 16 q 737 247 762 184 q 665 351 711 310 q 553 413 618 393 q 409 434 488 434 q 319 428 359 434 q 251 413 279 422 l 251 0 l 136 0 l 136 991 l 251 991 l 251 502 q 318 582 283 540 q 389 662 354 624 l 690 991 l 829 991 z "
  },
  "\u04C4": {
    ha: 771,
    x_min: 119,
    x_max: 722,
    o: "m 722 41 q 680 -175 722 -91 q 570 -300 639 -260 q 418 -340 500 -340 q 331 -330 368 -340 q 261 -301 293 -320 l 261 -203 q 330 -231 292 -219 q 412 -243 367 -243 q 515 -212 471 -243 q 585 -118 559 -181 q 610 41 610 -55 q 579 203 610 140 q 489 294 548 265 q 347 323 431 323 q 290 319 321 323 q 231 307 258 315 l 231 0 l 119 0 l 119 743 l 231 743 l 231 394 l 557 743 l 682 743 l 371 417 q 554 378 475 416 q 677 258 633 340 q 722 41 722 176 z "
  },
  "\u04C5": {
    ha: 989,
    x_min: 1,
    x_max: 972,
    o: "m 841 103 l 972 103 l 871 -259 l 739 -259 l 846 0 l 726 0 l 726 890 l 404 890 q 384 731 395 814 q 361 566 373 648 q 338 411 350 484 q 315 281 327 338 q 272 120 298 186 q 202 19 245 54 q 89 -16 159 -16 q 42 -11 65 -16 q 1 1 18 -6 l 1 98 q 36 86 16 91 q 77 81 55 81 q 144 116 119 81 q 183 203 169 150 q 209 311 198 256 q 229 428 218 357 q 254 588 241 498 q 280 781 267 678 q 308 991 294 883 l 841 991 l 841 103 z "
  },
  "\u04C6": {
    ha: 806,
    x_min: 9,
    x_max: 800,
    o: "m 675 96 l 800 96 l 708 -256 l 593 -256 l 681 0 l 562 0 l 562 649 l 334 649 q 301 349 321 473 q 249 145 280 224 q 175 29 218 66 q 71 -8 131 -8 q 37 -6 53 -8 q 9 0 20 -4 l 9 86 q 27 83 18 84 q 48 82 37 82 q 104 107 79 82 q 150 184 130 133 q 186 315 170 236 q 215 500 203 393 q 237 743 228 607 l 675 743 l 675 96 z "
  },
  "\u04C7": {
    ha: 1013,
    x_min: 136,
    x_max: 887,
    o: "m 887 991 l 887 95 q 841 -155 887 -57 q 713 -300 795 -253 q 524 -347 631 -347 q 415 -339 458 -347 q 332 -315 373 -330 l 332 -212 q 417 -237 374 -229 q 510 -245 460 -245 q 706 -163 639 -245 q 773 92 773 -80 l 773 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 773 569 l 773 991 l 887 991 z "
  },
  "\u04C8": {
    ha: 860,
    x_min: 119,
    x_max: 759,
    o: "m 759 743 l 759 26 q 724 -185 759 -104 q 627 -302 688 -265 q 489 -339 566 -339 q 402 -329 439 -339 q 336 -301 366 -319 l 336 -201 q 401 -228 365 -216 q 480 -240 437 -240 q 603 -178 561 -240 q 645 26 645 -117 l 645 336 l 232 336 l 232 0 l 119 0 l 119 743 l 232 743 l 232 431 l 645 431 l 645 743 l 759 743 z "
  },
  "\u04C9": {
    ha: 1042,
    x_min: 136,
    x_max: 1020,
    o: "m 887 103 l 1020 103 l 916 -259 l 785 -259 l 892 0 l 773 0 l 773 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 773 569 l 773 991 l 887 991 l 887 103 z "
  },
  "\u04CA": {
    ha: 909,
    x_min: 119,
    x_max: 884,
    o: "m 119 0 l 119 743 l 232 743 l 232 431 l 646 431 l 646 743 l 759 743 l 759 96 l 884 96 l 793 -256 l 677 -256 l 765 0 l 646 0 l 646 336 l 232 336 l 232 0 l 119 0 z "
  },
  "\u04CB": {
    ha: 963,
    x_min: 113,
    x_max: 827,
    o: "m 827 0 l 709 0 l 709 -259 l 599 -259 l 599 103 l 712 103 l 712 411 q 562 365 633 382 q 404 347 490 347 q 188 412 263 347 q 113 598 113 477 l 113 991 l 229 991 l 229 614 q 272 491 229 532 q 415 449 316 449 q 565 464 498 449 q 712 508 631 479 l 712 991 l 827 991 l 827 0 z "
  },
  "\u04CC": {
    ha: 843,
    x_min: 104,
    x_max: 724,
    o: "m 724 743 l 724 0 l 616 0 l 616 -257 l 506 -257 l 506 96 l 612 96 l 612 333 q 489 270 549 293 q 345 247 429 247 q 167 307 230 247 q 104 468 104 366 l 104 743 l 217 743 l 217 476 q 255 373 217 406 q 367 340 294 340 q 495 361 437 340 q 612 420 553 383 l 612 743 l 724 743 z "
  },
  "\u04CD": {
    ha: 1261,
    x_min: 136,
    x_max: 1245,
    o: "m 572 0 l 239 878 l 233 878 q 238 819 236 851 q 240 753 239 787 q 242 690 241 720 q 243 637 243 660 l 243 0 l 136 0 l 136 991 l 307 991 l 621 167 l 627 167 l 944 991 l 1114 991 l 1114 103 l 1245 103 l 1143 -259 l 1010 -259 l 1119 0 l 1000 0 l 1000 646 q 1000 700 1000 669 q 1002 763 1001 730 q 1005 825 1003 795 q 1008 876 1006 855 l 1003 876 l 666 0 l 572 0 z "
  },
  "\u04CE": {
    ha: 1029,
    x_min: 118,
    x_max: 1028,
    o: "m 1028 96 l 937 -256 l 821 -256 l 909 0 l 802 0 l 802 484 q 803 545 802 514 q 808 607 805 576 l 804 607 l 557 0 l 461 0 l 220 607 l 216 607 q 219 545 218 576 q 220 480 220 514 l 220 0 l 118 0 l 118 743 l 269 743 l 509 136 l 753 743 l 903 743 l 903 96 l 1028 96 z "
  },
  "\u04CF": {
    ha: 388,
    x_min: 136,
    x_max: 251,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 z "
  },
  "\u04D0": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 694 1298 q 660 1183 688 1230 q 578 1114 632 1137 q 439 1090 524 1090 q 298 1113 351 1090 q 219 1182 245 1136 q 189 1298 194 1228 l 295 1298 q 335 1196 302 1223 q 441 1169 368 1169 q 543 1198 506 1169 q 588 1298 581 1226 l 694 1298 z "
  },
  "\u04D1": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 642 1049 q 608 935 636 981 q 526 865 580 888 q 387 842 471 842 q 246 864 299 842 q 167 933 193 887 q 137 1049 142 979 l 243 1049 q 283 947 250 975 q 389 920 315 920 q 491 949 454 920 q 536 1049 528 977 l 642 1049 z "
  },
  "\u04D2": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 245 1194 q 263 1244 245 1228 q 307 1259 281 1259 q 351 1244 333 1259 q 369 1194 369 1228 q 351 1144 369 1161 q 307 1128 333 1128 q 263 1144 281 1128 q 245 1194 245 1161 m 506 1194 q 524 1244 506 1228 q 566 1259 541 1259 q 610 1244 592 1259 q 629 1194 629 1228 q 610 1144 629 1161 q 566 1128 592 1128 q 524 1144 541 1128 q 506 1194 506 1161 z "
  },
  "\u04D3": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 194 945 q 212 995 194 979 q 255 1010 229 1010 q 299 995 281 1010 q 317 945 317 979 q 299 896 317 912 q 255 879 281 879 q 212 896 229 879 q 194 945 194 912 m 454 945 q 472 995 454 979 q 515 1010 490 1010 q 559 995 541 1010 q 577 945 577 979 q 559 896 577 912 q 515 879 541 879 q 472 896 490 879 q 454 945 454 912 z "
  },
  "\u04D4": {
    ha: 1206,
    x_min: -1,
    x_max: 1129,
    o: "m 1129 0 l 611 0 l 611 315 l 269 315 l 118 0 l -1 0 l 465 991 l 1129 991 l 1129 890 l 726 890 l 726 569 l 1103 569 l 1103 469 l 726 469 l 726 102 l 1129 102 l 1129 0 m 313 417 l 611 417 l 611 888 l 533 888 l 313 417 z "
  },
  "\u04D5": {
    ha: 1198,
    x_min: 64,
    x_max: 1126,
    o: "m 838 757 q 992 715 928 757 q 1092 597 1057 673 q 1126 423 1126 522 l 1126 352 l 645 352 q 704 149 648 215 q 866 83 760 83 q 986 96 934 83 q 1093 134 1038 109 l 1093 35 q 984 -2 1038 9 q 863 -14 931 -14 q 744 5 798 -14 q 649 60 690 24 q 581 149 608 96 q 512 63 550 100 q 423 6 475 26 q 299 -14 372 -14 q 178 10 231 -14 q 94 82 125 34 q 64 204 64 130 q 101 329 64 278 q 215 409 139 380 q 404 440 290 437 l 530 446 l 530 494 q 487 626 530 588 q 371 665 444 665 q 263 648 316 665 q 162 608 210 631 l 127 693 q 244 738 177 720 q 380 755 312 755 q 523 725 467 755 q 606 626 579 694 q 701 722 642 688 q 838 757 760 757 m 527 366 l 420 361 q 235 316 290 356 q 181 203 181 276 q 218 109 181 139 q 317 78 255 78 q 425 102 378 78 q 500 176 473 127 q 527 298 527 224 l 527 366 m 836 665 q 705 607 754 665 q 648 441 655 550 l 1006 441 q 989 558 1007 508 q 932 637 970 609 q 836 665 895 665 z "
  },
  "\u04D6": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 680 1298 q 646 1183 674 1230 q 564 1114 618 1137 q 425 1090 509 1090 q 284 1113 337 1090 q 205 1182 231 1136 q 175 1298 180 1228 l 281 1298 q 321 1196 288 1223 q 427 1169 353 1169 q 529 1198 492 1169 q 574 1298 566 1226 l 680 1298 z "
  },
  "\u04D7": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 651 1049 q 617 935 645 981 q 534 865 589 888 q 395 842 480 842 q 255 864 308 842 q 176 933 201 887 q 146 1049 151 979 l 252 1049 q 292 947 259 975 q 397 920 324 920 q 500 949 463 920 q 545 1049 537 977 l 651 1049 z "
  },
  "\u04D8": {
    ha: 1018,
    x_min: 81,
    x_max: 932,
    o: "m 456 905 q 341 898 395 905 q 238 877 286 890 q 146 850 190 865 l 146 956 q 232 981 186 970 q 332 1000 277 993 q 458 1007 388 1007 q 663 971 574 1007 q 811 868 751 935 q 901 706 871 800 q 932 495 932 612 q 903 286 932 379 q 819 125 875 192 q 680 22 762 58 q 490 -14 597 -14 q 255 48 345 -14 q 123 223 165 109 q 81 494 81 336 l 81 540 l 810 540 q 763 737 804 655 q 647 862 723 819 q 456 905 571 905 m 490 87 q 653 129 584 87 q 763 248 723 170 q 810 438 804 326 l 204 438 q 232 248 204 327 q 323 129 260 170 q 490 87 386 87 z "
  },
  "\u04D9": {
    ha: 780,
    x_min: 72,
    x_max: 703,
    o: "m 347 757 q 534 713 454 757 q 659 585 614 669 q 703 377 703 500 q 662 170 703 257 q 548 34 622 82 q 375 -14 475 -14 q 212 28 280 -14 q 108 146 144 71 q 72 323 72 222 l 72 393 l 586 393 q 520 592 583 523 q 342 661 458 661 q 218 648 273 661 q 105 610 164 635 l 105 709 q 217 745 161 734 q 347 757 273 757 m 583 302 l 191 302 q 211 185 191 236 q 272 107 231 135 q 376 79 313 79 q 521 138 467 79 q 583 302 574 197 z "
  },
  "\u04DA": {
    ha: 1018,
    x_min: 81,
    x_max: 932,
    o: "m 456 905 q 341 898 395 905 q 238 877 286 890 q 146 850 190 865 l 146 956 q 232 981 186 970 q 332 1000 277 993 q 458 1007 388 1007 q 663 971 574 1007 q 811 868 751 935 q 901 706 871 800 q 932 495 932 612 q 903 286 932 379 q 819 125 875 192 q 680 22 762 58 q 490 -14 597 -14 q 255 48 345 -14 q 123 223 165 109 q 81 494 81 336 l 81 540 l 810 540 q 763 737 804 655 q 647 862 723 819 q 456 905 571 905 m 490 87 q 653 129 584 87 q 763 248 723 170 q 810 438 804 326 l 204 438 q 232 248 204 327 q 323 129 260 170 q 490 87 386 87 m 289 1194 q 307 1244 289 1228 q 350 1259 324 1259 q 394 1244 376 1259 q 412 1194 412 1228 q 394 1144 412 1161 q 350 1128 376 1128 q 307 1144 324 1128 q 289 1194 289 1161 m 549 1194 q 567 1244 549 1228 q 610 1259 585 1259 q 654 1244 635 1259 q 672 1194 672 1228 q 654 1144 672 1161 q 610 1128 635 1128 q 567 1144 585 1128 q 549 1194 549 1161 z "
  },
  "\u04DB": {
    ha: 780,
    x_min: 72,
    x_max: 703,
    o: "m 347 757 q 534 713 454 757 q 659 585 614 669 q 703 377 703 500 q 662 170 703 257 q 548 34 622 82 q 375 -14 475 -14 q 212 28 280 -14 q 108 146 144 71 q 72 323 72 222 l 72 393 l 586 393 q 520 592 583 523 q 342 661 458 661 q 218 648 273 661 q 105 610 164 635 l 105 709 q 217 745 161 734 q 347 757 273 757 m 583 302 l 191 302 q 211 185 191 236 q 272 107 231 135 q 376 79 313 79 q 521 138 467 79 q 583 302 574 197 m 188 945 q 205 995 188 979 q 249 1010 223 1010 q 293 995 275 1010 q 311 945 311 979 q 293 896 311 912 q 249 879 275 879 q 205 896 223 879 q 188 945 188 912 m 448 945 q 466 995 448 979 q 509 1010 484 1010 q 553 995 534 1010 q 571 945 571 979 q 553 896 571 912 q 509 879 534 879 q 466 896 484 879 q 448 945 448 912 z "
  },
  "\u04DC": {
    ha: 1168,
    x_min: 3,
    x_max: 1164,
    o: "m 406 510 l 18 991 l 146 991 l 528 511 l 528 991 l 640 991 l 640 511 l 1022 991 l 1150 991 l 762 511 l 1164 0 l 1031 0 l 640 503 l 640 0 l 528 0 l 528 503 l 136 0 l 3 0 l 406 510 m 394 1194 q 412 1244 394 1228 q 455 1259 429 1259 q 499 1244 481 1259 q 517 1194 517 1228 q 499 1144 517 1161 q 455 1128 481 1128 q 412 1144 429 1128 q 394 1194 394 1161 m 654 1194 q 672 1244 654 1228 q 715 1259 690 1259 q 759 1244 741 1259 q 777 1194 777 1228 q 759 1144 777 1161 q 715 1128 741 1128 q 672 1144 690 1128 q 654 1194 654 1161 z "
  },
  "\u04DD": {
    ha: 1021,
    x_min: 3,
    x_max: 1016,
    o: "m 989 743 l 680 382 l 1016 0 l 887 0 l 562 377 l 562 0 l 456 0 l 456 377 l 132 0 l 3 0 l 338 382 l 28 743 l 153 743 l 456 382 l 456 743 l 562 743 l 562 382 l 867 743 l 989 743 m 316 945 q 334 995 316 979 q 377 1010 351 1010 q 421 995 404 1010 q 439 945 439 979 q 421 896 439 912 q 377 879 404 879 q 334 896 351 879 q 316 945 316 912 m 576 945 q 594 995 576 979 q 637 1010 612 1010 q 681 995 663 1010 q 699 945 699 979 q 681 896 699 912 q 637 879 663 879 q 594 896 612 879 q 576 945 576 912 z "
  },
  "\u04DE": {
    ha: 810,
    x_min: 54,
    x_max: 734,
    o: "m 714 759 q 652 599 714 658 q 485 523 589 541 l 485 518 q 671 439 607 500 q 734 279 734 378 q 691 126 734 192 q 559 23 647 60 q 342 -14 472 -14 q 188 -1 261 -14 q 54 41 115 12 l 54 147 q 144 112 96 127 q 244 89 193 97 q 340 81 294 81 q 544 133 475 81 q 614 279 614 185 q 533 421 614 376 q 308 465 453 465 l 165 465 l 165 562 l 303 562 q 465 585 401 562 q 562 649 530 608 q 594 748 594 691 q 537 868 594 826 q 390 910 481 910 q 234 886 296 910 q 114 824 172 862 l 58 903 q 148 955 98 931 q 259 992 198 978 q 391 1006 320 1006 q 568 974 496 1006 q 677 887 640 943 q 714 759 714 831 m 203 1194 q 221 1244 203 1228 q 264 1259 239 1259 q 309 1244 291 1259 q 327 1194 327 1228 q 309 1144 327 1161 q 264 1128 291 1128 q 221 1144 239 1128 q 203 1194 203 1161 m 464 1194 q 481 1244 464 1228 q 524 1259 499 1259 q 568 1244 550 1259 q 587 1194 587 1228 q 568 1144 587 1161 q 524 1128 550 1128 q 481 1144 499 1128 q 464 1194 464 1161 z "
  },
  "\u04DF": {
    ha: 671,
    x_min: 45,
    x_max: 608,
    o: "m 310 757 q 454 734 393 757 q 549 668 515 711 q 582 562 582 625 q 545 455 582 495 q 444 397 509 415 l 444 392 q 527 357 490 380 q 586 297 564 334 q 608 205 608 260 q 574 93 608 143 q 471 15 540 43 q 296 -14 401 -14 q 197 -8 243 -14 q 112 9 150 -2 q 45 35 74 20 l 45 137 q 157 96 93 114 q 294 79 220 79 q 397 92 351 79 q 469 135 442 105 q 496 212 496 164 q 472 285 496 256 q 401 328 448 314 q 282 342 354 342 l 182 342 l 182 434 l 264 434 q 417 461 360 434 q 474 553 474 488 q 430 636 474 608 q 304 663 386 663 q 196 651 243 663 q 95 615 149 638 l 55 705 q 177 744 113 731 q 310 757 241 757 m 129 945 q 146 995 129 979 q 190 1010 164 1010 q 234 995 216 1010 q 252 945 252 979 q 234 896 252 912 q 190 879 216 879 q 146 896 164 879 q 129 945 129 912 m 389 945 q 407 995 389 979 q 450 1010 425 1010 q 494 995 475 1010 q 512 945 512 979 q 494 896 512 912 q 450 879 475 879 q 407 896 425 879 q 389 945 389 912 z "
  },
  "\u04E0": {
    ha: 810,
    x_min: 50,
    x_max: 728,
    o: "m 689 991 l 689 901 l 347 564 q 626 489 525 558 q 728 283 728 420 q 685 129 728 196 q 554 24 642 62 q 335 -14 467 -14 q 183 -1 254 -14 q 50 41 111 12 l 50 147 q 189 99 113 116 q 336 81 265 81 q 487 105 427 81 q 577 174 547 129 q 608 284 608 220 q 572 389 608 348 q 470 450 537 430 q 304 470 402 470 l 213 470 l 213 564 l 542 888 l 77 888 l 77 991 l 689 991 z "
  },
  "\u04E1": {
    ha: 682,
    x_min: 20,
    x_max: 635,
    o: "m 600 743 l 600 661 l 288 312 q 466 270 388 307 q 590 166 545 234 q 635 -1 635 99 q 591 -174 635 -99 q 466 -291 547 -249 q 274 -334 385 -334 q 129 -321 193 -334 q 20 -286 65 -308 l 20 -182 q 132 -221 66 -203 q 279 -239 199 -239 q 407 -211 352 -239 q 492 -129 462 -182 q 523 -3 523 -76 q 487 125 523 75 q 387 198 452 175 q 233 222 322 222 l 155 222 l 155 300 l 467 648 l 39 648 l 39 743 l 600 743 z "
  },
  "\u04E2": {
    ha: 1055,
    x_min: 137,
    x_max: 920,
    o: "m 137 991 l 245 991 l 245 418 q 244 348 245 386 q 242 273 243 309 q 239 206 241 236 q 236 160 237 176 l 241 160 l 793 991 l 920 991 l 920 0 l 812 0 l 812 566 q 814 643 812 602 q 817 721 815 683 q 821 789 819 759 q 823 836 823 819 l 817 836 l 264 0 l 137 0 l 137 991 m 744 1183 l 744 1092 l 338 1092 l 338 1183 l 744 1183 z "
  },
  "\u04E3": {
    ha: 883,
    x_min: 119,
    x_max: 762,
    o: "m 226 743 l 226 276 q 225 241 226 262 q 223 196 224 220 q 221 150 222 172 q 218 113 220 127 l 624 743 l 762 743 l 762 0 l 657 0 l 657 456 q 658 511 657 477 q 660 578 659 545 q 662 629 661 611 l 258 0 l 119 0 l 119 743 l 226 743 m 653 934 l 653 843 l 247 843 l 247 934 l 653 934 z "
  },
  "\u04E4": {
    ha: 1055,
    x_min: 137,
    x_max: 920,
    o: "m 137 991 l 245 991 l 245 418 q 244 348 245 386 q 242 273 243 309 q 239 206 241 236 q 236 160 237 176 l 241 160 l 793 991 l 920 991 l 920 0 l 812 0 l 812 566 q 814 643 812 602 q 817 721 815 683 q 821 789 819 759 q 823 836 823 819 l 817 836 l 264 0 l 137 0 l 137 991 m 349 1194 q 367 1244 349 1228 q 410 1259 385 1259 q 455 1244 437 1259 q 473 1194 473 1228 q 455 1144 473 1161 q 410 1128 437 1128 q 367 1144 385 1128 q 349 1194 349 1161 m 610 1194 q 627 1244 610 1228 q 670 1259 645 1259 q 714 1244 696 1259 q 732 1194 732 1228 q 714 1144 732 1161 q 670 1128 696 1128 q 627 1144 645 1128 q 610 1194 610 1161 z "
  },
  "\u04E5": {
    ha: 883,
    x_min: 119,
    x_max: 762,
    o: "m 226 743 l 226 276 q 225 241 226 262 q 223 196 224 220 q 221 150 222 172 q 218 113 220 127 l 624 743 l 762 743 l 762 0 l 657 0 l 657 456 q 658 511 657 477 q 660 578 659 545 q 662 629 661 611 l 258 0 l 119 0 l 119 743 l 226 743 m 259 945 q 277 995 259 979 q 320 1010 294 1010 q 365 995 347 1010 q 382 945 382 979 q 365 896 382 912 q 320 879 347 879 q 277 896 294 879 q 259 945 259 912 m 519 945 q 537 995 519 979 q 580 1010 555 1010 q 624 995 606 1010 q 642 945 642 979 q 624 896 642 912 q 580 879 606 879 q 537 896 555 879 q 519 945 519 912 z "
  },
  "\u04E6": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 349 1194 q 366 1244 349 1228 q 410 1259 384 1259 q 454 1244 436 1259 q 472 1194 472 1228 q 454 1144 472 1161 q 410 1128 436 1128 q 366 1144 384 1128 q 349 1194 349 1161 m 609 1194 q 627 1244 609 1228 q 669 1259 644 1259 q 713 1244 695 1259 q 732 1194 732 1228 q 713 1144 732 1161 q 669 1128 695 1128 q 627 1144 644 1128 q 609 1194 609 1161 z "
  },
  "\u04E7": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 227 945 q 244 995 227 979 q 288 1010 262 1010 q 332 995 314 1010 q 350 945 350 979 q 332 896 350 912 q 288 879 314 879 q 244 896 262 879 q 227 945 227 912 m 487 945 q 505 995 487 979 q 547 1010 522 1010 q 591 995 573 1010 q 610 945 610 979 q 591 896 610 912 q 547 879 573 879 q 505 896 522 879 q 487 945 487 912 z "
  },
  "\u04E8": {
    ha: 1082,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 541 86 q 722 131 650 86 q 831 258 793 175 q 873 456 868 341 l 208 456 q 251 258 214 341 q 360 131 288 176 q 541 86 432 86 m 543 905 q 365 863 436 905 q 254 742 293 821 q 208 555 216 664 l 871 555 q 780 813 860 720 q 543 905 701 905 z "
  },
  "\u04E9": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 418 80 q 539 110 492 80 q 612 196 587 139 q 642 334 637 253 l 194 334 q 223 196 198 253 q 297 110 249 139 q 418 80 346 80 m 418 662 q 258 602 311 662 q 195 429 204 543 l 642 429 q 609 556 635 504 q 536 635 583 608 q 418 662 488 662 z "
  },
  "\u04EA": {
    ha: 1082,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 541 86 q 722 131 650 86 q 831 258 793 175 q 873 456 868 341 l 208 456 q 251 258 214 341 q 360 131 288 176 q 541 86 432 86 m 543 905 q 365 863 436 905 q 254 742 293 821 q 208 555 216 664 l 871 555 q 780 813 860 720 q 543 905 701 905 m 349 1175 q 366 1224 349 1208 q 410 1240 384 1240 q 454 1224 436 1240 q 472 1175 472 1208 q 454 1125 472 1141 q 410 1108 436 1108 q 366 1125 384 1108 q 349 1175 349 1141 m 609 1175 q 627 1224 609 1208 q 669 1240 644 1240 q 713 1224 695 1240 q 732 1175 732 1208 q 713 1125 732 1141 q 669 1108 695 1108 q 627 1125 644 1108 q 609 1175 609 1141 z "
  },
  "\u04EB": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 418 80 q 539 110 492 80 q 612 196 587 139 q 642 334 637 253 l 194 334 q 223 196 198 253 q 297 110 249 139 q 418 80 346 80 m 418 662 q 258 602 311 662 q 195 429 204 543 l 642 429 q 609 556 635 504 q 536 635 583 608 q 418 662 488 662 m 225 945 q 243 995 225 979 q 286 1010 260 1010 q 331 995 313 1010 q 349 945 349 979 q 331 896 349 912 q 286 879 313 879 q 243 896 260 879 q 225 945 225 912 m 486 945 q 503 995 486 979 q 546 1010 521 1010 q 590 995 572 1010 q 608 945 608 979 q 590 896 608 912 q 546 879 572 879 q 503 896 521 879 q 486 945 486 912 z "
  },
  "\u04EC": {
    ha: 876,
    x_min: 43,
    x_max: 789,
    o: "m 321 904 q 195 888 253 904 q 90 851 137 873 l 43 948 q 173 991 100 976 q 323 1006 245 1006 q 529 969 441 1006 q 675 867 617 933 q 761 710 732 800 q 789 512 789 620 q 736 233 789 351 q 577 51 684 115 q 312 -14 471 -14 q 166 -4 226 -14 q 49 26 106 6 l 49 127 q 166 99 106 111 q 294 87 227 87 q 454 113 385 87 q 570 186 523 138 q 641 306 616 235 q 668 467 666 376 l 178 467 l 178 569 l 667 569 q 634 710 661 648 q 563 815 608 772 q 457 881 518 859 q 321 904 397 904 m 179 1175 q 197 1224 179 1208 q 240 1240 214 1240 q 284 1224 267 1240 q 302 1175 302 1208 q 284 1125 302 1141 q 240 1108 267 1108 q 197 1125 214 1108 q 179 1175 179 1141 m 439 1175 q 457 1224 439 1208 q 500 1240 475 1240 q 544 1224 526 1240 q 562 1175 562 1208 q 544 1125 562 1141 q 500 1108 526 1108 q 457 1125 475 1108 q 439 1175 439 1141 z "
  },
  "\u04ED": {
    ha: 686,
    x_min: 44,
    x_max: 610,
    o: "m 240 -14 q 131 -3 177 -14 q 44 26 84 7 l 44 124 q 134 95 86 107 q 242 83 182 83 q 373 111 318 83 q 458 195 427 138 q 494 336 489 252 l 117 336 l 117 429 l 492 429 q 427 603 484 547 q 258 660 370 660 q 171 649 218 660 q 85 623 123 637 l 54 715 q 148 745 93 733 q 258 757 202 757 q 442 718 363 757 q 566 594 522 678 q 610 373 610 509 q 564 157 610 243 q 434 29 517 71 q 240 -14 351 -14 m 98 945 q 116 995 98 979 q 159 1010 134 1010 q 204 995 186 1010 q 222 945 222 979 q 204 896 222 912 q 159 879 186 879 q 116 896 134 879 q 98 945 98 912 m 359 945 q 376 995 359 979 q 419 1010 394 1010 q 463 995 445 1010 q 481 945 481 979 q 463 896 481 912 q 419 879 445 879 q 376 896 394 879 q 359 945 359 912 z "
  },
  "\u04EE": {
    ha: 858,
    x_min: 15,
    x_max: 858,
    o: "m 858 991 l 535 273 q 450 114 493 178 q 347 18 406 50 q 195 -14 287 -14 q 122 -8 156 -14 q 62 7 89 -2 l 62 121 q 121 101 90 109 q 188 94 153 94 q 277 110 240 94 q 343 161 315 126 q 397 254 372 196 l 15 991 l 141 991 l 423 437 q 435 414 429 427 q 447 387 441 401 q 458 359 453 373 l 463 359 q 472 383 467 370 q 482 410 477 397 q 492 433 488 424 l 735 991 l 858 991 m 651 1183 l 651 1092 l 245 1092 l 245 1183 l 651 1183 z "
  },
  "\u04EF": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 550 934 l 550 843 l 144 843 l 144 934 l 550 934 z "
  },
  "\u04F0": {
    ha: 858,
    x_min: 15,
    x_max: 858,
    o: "m 858 991 l 535 273 q 450 114 493 178 q 347 18 406 50 q 195 -14 287 -14 q 122 -8 156 -14 q 62 7 89 -2 l 62 121 q 121 101 90 109 q 188 94 153 94 q 277 110 240 94 q 343 161 315 126 q 397 254 372 196 l 15 991 l 141 991 l 423 437 q 435 414 429 427 q 447 387 441 401 q 458 359 453 373 l 463 359 q 472 383 467 370 q 482 410 477 397 q 492 433 488 424 l 735 991 l 858 991 m 256 1194 q 274 1244 256 1228 q 317 1259 292 1259 q 362 1244 344 1259 q 380 1194 380 1228 q 362 1144 380 1161 q 317 1128 344 1128 q 274 1144 292 1128 q 256 1194 256 1161 m 517 1194 q 534 1244 517 1228 q 577 1259 552 1259 q 621 1244 603 1259 q 640 1194 640 1228 q 621 1144 640 1161 q 577 1128 603 1128 q 534 1144 552 1128 q 517 1194 517 1161 z "
  },
  "\u04F1": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 155 945 q 173 995 155 979 q 216 1010 191 1010 q 261 995 243 1010 q 279 945 279 979 q 261 896 279 912 q 216 879 243 879 q 173 896 191 879 q 155 945 155 912 m 416 945 q 433 995 416 979 q 476 1010 451 1010 q 520 995 502 1010 q 538 945 538 979 q 520 896 538 912 q 476 879 502 879 q 433 896 451 879 q 416 945 416 912 z "
  },
  "\u04F2": {
    ha: 858,
    x_min: 15,
    x_max: 858,
    o: "m 858 991 l 535 273 q 450 114 493 178 q 347 18 406 50 q 195 -14 287 -14 q 122 -8 156 -14 q 62 7 89 -2 l 62 121 q 121 101 90 109 q 188 94 153 94 q 277 110 240 94 q 343 161 315 126 q 397 254 372 196 l 15 991 l 141 991 l 423 437 q 435 414 429 427 q 447 387 441 401 q 458 359 453 373 l 463 359 q 472 383 467 370 q 482 410 477 397 q 492 433 488 424 l 735 991 l 858 991 m 768 1313 l 768 1299 q 736 1253 757 1280 q 689 1195 715 1225 q 636 1138 663 1165 q 586 1090 609 1110 l 521 1090 l 521 1107 q 564 1170 541 1133 q 609 1244 587 1206 q 645 1313 631 1282 l 768 1313 m 526 1313 l 526 1299 q 494 1253 515 1280 q 447 1195 473 1225 q 394 1138 420 1165 q 344 1090 367 1110 l 279 1090 l 279 1107 q 322 1170 299 1133 q 366 1244 345 1206 q 403 1313 388 1282 l 526 1313 z "
  },
  "\u04F3": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 668 1064 l 668 1050 q 635 1004 656 1031 q 588 946 614 977 q 535 889 562 916 q 486 842 509 861 l 420 842 l 420 858 q 464 921 441 884 q 509 995 487 957 q 545 1064 530 1033 l 668 1064 m 426 1064 l 426 1050 q 393 1004 414 1031 q 346 946 372 977 q 293 889 320 916 q 243 842 267 861 l 178 842 l 178 858 q 221 921 199 884 q 266 995 244 957 q 302 1064 288 1033 l 426 1064 z "
  },
  "\u04F4": {
    ha: 963,
    x_min: 113,
    x_max: 827,
    o: "m 827 0 l 712 0 l 712 411 q 562 365 633 382 q 404 347 490 347 q 188 412 263 347 q 113 598 113 477 l 113 991 l 229 991 l 229 614 q 272 491 229 532 q 415 449 316 449 q 565 464 498 449 q 712 508 631 479 l 712 991 l 827 991 l 827 0 m 277 1194 q 294 1244 277 1228 q 338 1259 312 1259 q 382 1244 364 1259 q 400 1194 400 1228 q 382 1144 400 1161 q 338 1128 364 1128 q 294 1144 312 1128 q 277 1194 277 1161 m 537 1194 q 555 1244 537 1228 q 597 1259 572 1259 q 642 1244 623 1259 q 660 1194 660 1228 q 642 1144 660 1161 q 597 1128 623 1128 q 555 1144 572 1128 q 537 1194 537 1161 z "
  },
  "\u04F5": {
    ha: 843,
    x_min: 104,
    x_max: 724,
    o: "m 217 743 l 217 476 q 255 373 217 406 q 367 340 294 340 q 495 361 437 340 q 612 420 553 383 l 612 743 l 724 743 l 724 0 l 612 0 l 612 333 q 489 270 549 293 q 345 247 429 247 q 167 307 230 247 q 104 468 104 366 l 104 743 l 217 743 m 220 945 q 237 995 220 979 q 281 1010 255 1010 q 325 995 307 1010 q 343 945 343 979 q 325 896 343 912 q 281 879 307 879 q 237 896 255 879 q 220 945 220 912 m 480 945 q 498 995 480 979 q 541 1010 515 1010 q 585 995 566 1010 q 603 945 603 979 q 585 896 603 912 q 541 879 566 879 q 498 896 515 879 q 480 945 480 912 z "
  },
  "\u04F6": {
    ha: 730,
    x_min: 136,
    x_max: 701,
    o: "m 701 991 l 701 888 l 251 888 l 251 103 l 366 103 l 366 -259 l 257 -259 l 257 0 l 136 0 l 136 991 l 701 991 z "
  },
  "\u04F7": {
    ha: 599,
    x_min: 119,
    x_max: 568,
    o: "m 568 743 l 568 649 l 232 649 l 232 94 l 340 94 l 340 -256 l 228 -256 l 228 0 l 119 0 l 119 743 l 568 743 z "
  },
  "\u04F8": {
    ha: 1178,
    x_min: 136,
    x_max: 1038,
    o: "m 136 0 l 136 991 l 251 991 l 251 570 l 410 570 q 623 533 544 570 q 737 434 703 497 q 772 290 772 370 q 688 78 772 157 q 425 0 604 0 l 136 0 m 251 98 l 414 98 q 594 146 536 98 q 652 290 652 193 q 624 396 652 357 q 539 451 596 435 q 397 468 483 468 l 251 468 l 251 98 m 922 0 l 922 991 l 1038 991 l 1038 0 l 922 0 m 400 1194 q 418 1244 400 1228 q 461 1259 435 1259 q 506 1244 488 1259 q 524 1194 524 1228 q 506 1144 524 1161 q 461 1128 488 1128 q 418 1144 435 1128 q 400 1194 400 1161 m 661 1194 q 678 1244 661 1228 q 721 1259 696 1259 q 765 1244 747 1259 q 783 1194 783 1228 q 765 1144 783 1161 q 721 1128 747 1128 q 678 1144 696 1128 q 661 1194 661 1161 z "
  },
  "\u04F9": {
    ha: 1067,
    x_min: 119,
    x_max: 948,
    o: "m 119 0 l 119 743 l 232 743 l 232 437 l 435 437 q 592 413 530 437 q 683 342 653 389 q 713 227 713 296 q 683 106 713 157 q 591 28 654 56 q 428 0 528 0 l 119 0 m 232 92 l 417 92 q 551 121 501 92 q 602 221 602 151 q 555 316 602 290 q 420 343 508 343 l 232 343 l 232 92 m 836 0 l 836 743 l 948 743 l 948 0 l 836 0 m 338 945 q 356 995 338 979 q 399 1010 374 1010 q 444 995 426 1010 q 462 945 462 979 q 444 896 462 912 q 399 879 426 879 q 356 896 374 879 q 338 945 338 912 m 599 945 q 616 995 599 979 q 659 1010 634 1010 q 703 995 685 1010 q 722 945 722 979 q 703 896 722 912 q 659 879 685 879 q 616 896 634 879 q 599 945 599 912 z "
  },
  "\u04FA": {
    ha: 729,
    x_min: 31,
    x_max: 701,
    o: "m 701 991 l 701 888 l 251 888 l 251 541 l 539 541 l 539 440 l 251 440 l 251 0 l 136 0 l 136 440 l 31 440 l 31 541 l 136 541 l 136 991 l 701 991 m 199 -271 q 153 -265 174 -271 q 119 -254 132 -259 l 119 -160 q 148 -169 130 -165 q 187 -173 166 -173 q 223 -165 208 -173 q 245 -141 237 -157 q 253 -99 253 -124 l 253 0 l 237 0 l 237 103 l 355 103 l 355 -93 q 338 -190 355 -150 q 287 -250 321 -229 q 199 -271 252 -271 z "
  },
  "\u04FB": {
    ha: 600,
    x_min: 11,
    x_max: 571,
    o: "m 177 -271 q 131 -265 152 -271 q 96 -254 110 -259 l 96 -160 q 126 -169 108 -165 q 165 -173 144 -173 q 201 -165 186 -173 q 223 -141 216 -157 q 231 -99 231 -124 l 231 0 l 118 0 l 118 327 l 11 327 l 11 414 l 118 414 l 118 743 l 571 743 l 571 648 l 231 648 l 231 414 l 466 414 l 466 327 l 231 327 l 231 87 l 333 87 l 333 -93 q 316 -190 333 -150 q 264 -250 299 -229 q 177 -271 230 -271 z "
  },
  "\u04FC": {
    ha: 859,
    x_min: 4,
    x_max: 836,
    o: "m 681 -271 q 634 -265 655 -271 q 600 -254 613 -259 l 600 -160 q 629 -169 612 -165 q 668 -173 647 -173 q 704 -165 689 -173 q 726 -141 718 -157 q 734 -99 734 -124 l 734 0 l 667 0 l 399 437 l 127 0 l 4 0 l 334 517 l 27 991 l 155 991 l 403 596 l 652 991 l 774 991 l 467 519 l 732 103 l 836 103 l 836 -93 q 819 -190 836 -150 q 768 -250 802 -229 q 681 -271 734 -271 z "
  },
  "\u04FD": {
    ha: 753,
    x_min: 26,
    x_max: 734,
    o: "m 578 -271 q 532 -265 553 -271 q 498 -254 511 -259 l 498 -160 q 527 -169 509 -165 q 566 -173 545 -173 q 602 -165 587 -173 q 625 -141 617 -157 q 633 -99 633 -124 l 633 0 l 572 0 l 363 303 l 154 0 l 26 0 l 296 380 l 39 743 l 168 743 l 363 457 l 559 743 l 686 743 l 429 380 l 637 87 l 734 87 l 734 -93 q 718 -190 734 -150 q 666 -250 701 -229 q 578 -271 632 -271 z "
  },
  "\u04FE": {
    ha: 802,
    x_min: 3,
    x_max: 798,
    o: "m 87 574 l 296 574 l 27 991 l 155 991 l 403 595 l 651 991 l 774 991 l 503 574 l 715 574 l 715 472 l 497 472 l 798 0 l 667 0 l 399 437 l 127 0 l 3 0 l 304 472 l 87 472 l 87 574 z "
  },
  "\u04FF": {
    ha: 727,
    x_min: 26,
    x_max: 701,
    o: "m 80 427 l 263 427 l 39 743 l 168 743 l 363 457 l 559 743 l 686 743 l 460 427 l 647 427 l 647 339 l 458 339 l 701 0 l 572 0 l 363 303 l 154 0 l 26 0 l 267 339 l 80 339 l 80 427 z "
  },
  "\u0500": {
    ha: 848,
    x_min: 85,
    x_max: 726,
    o: "m 446 0 q 169 71 252 0 q 85 273 85 142 q 122 423 85 355 q 240 531 158 490 q 456 572 321 572 l 610 572 l 610 991 l 726 991 l 726 0 l 446 0 m 466 99 l 610 99 l 610 471 l 465 471 q 318 450 376 471 q 232 386 260 428 q 204 282 204 344 q 265 142 204 186 q 466 99 326 99 z "
  },
  "\u0501": {
    ha: 850,
    x_min: 77,
    x_max: 730,
    o: "m 383 -14 q 160 83 242 -14 q 77 369 77 179 q 161 659 77 561 q 385 757 245 757 q 488 741 444 757 q 564 700 532 726 q 618 640 596 673 l 626 640 q 621 698 623 661 q 618 758 618 734 l 618 1055 l 730 1055 l 730 0 l 640 0 l 623 106 l 618 106 q 565 45 597 73 q 488 2 532 18 q 383 -14 444 -14 m 401 80 q 570 148 520 80 q 619 349 619 216 l 619 370 q 572 587 619 511 q 401 663 525 663 q 245 584 297 663 q 194 366 194 504 q 245 155 194 229 q 401 80 296 80 z "
  },
  "\u0502": {
    ha: 1242,
    x_min: 85,
    x_max: 1116,
    o: "m 694 991 l 694 248 q 735 125 694 163 q 850 86 776 86 q 961 128 920 86 q 1002 251 1002 170 l 1002 575 l 1116 575 l 1116 245 q 1049 59 1116 131 q 850 -14 982 -14 q 712 17 766 -14 q 628 103 658 48 q 538 19 595 52 q 393 -13 482 -13 q 224 19 292 -13 q 120 115 155 52 q 85 272 85 178 q 107 394 85 339 q 176 488 129 448 q 297 549 223 528 q 475 570 371 570 l 579 570 l 579 991 l 694 991 m 579 468 l 474 468 q 324 448 385 468 q 234 385 264 428 q 203 271 203 341 q 225 169 203 210 q 290 107 247 127 q 398 86 334 86 q 537 133 495 86 q 579 245 579 180 l 579 468 z "
  },
  "\u0503": {
    ha: 1240,
    x_min: 76,
    x_max: 1131,
    o: "m 711 1055 l 711 276 q 743 132 711 184 q 866 80 775 80 q 981 125 944 80 q 1017 264 1017 171 l 1017 475 l 1131 475 l 1131 254 q 1114 136 1131 186 q 1063 53 1097 86 q 981 4 1030 20 q 868 -12 932 -12 q 755 5 799 -12 q 687 53 712 22 q 644 125 661 83 q 583 55 618 86 q 499 5 549 24 q 380 -14 450 -14 q 159 82 241 -14 q 76 368 76 178 q 158 658 76 559 q 374 757 241 757 q 474 741 432 757 q 547 700 517 726 q 597 640 577 673 l 606 640 q 601 697 604 661 q 599 758 599 734 l 599 1055 l 711 1055 m 391 662 q 242 586 291 662 q 193 366 193 510 q 241 152 193 223 q 392 80 290 80 q 553 147 507 80 q 601 348 600 214 l 601 370 q 556 587 601 511 q 391 662 511 662 z "
  },
  "\u0504": {
    ha: 1247,
    x_min: 52,
    x_max: 1125,
    o: "m 368 1006 q 538 974 469 1006 q 643 887 607 943 q 680 760 680 832 q 617 598 680 658 q 459 522 555 539 l 459 517 q 589 474 536 505 q 669 394 642 444 q 698 276 697 345 q 708 190 699 226 q 735 131 717 154 q 784 98 754 109 q 857 87 814 87 q 975 130 937 87 q 1013 264 1013 172 l 1013 575 l 1125 575 l 1125 254 q 1055 53 1125 119 q 857 -14 984 -14 q 743 2 794 -14 q 656 52 692 18 q 600 138 619 85 q 579 265 580 191 q 560 357 579 319 q 505 419 541 395 q 414 454 468 443 q 292 465 361 465 l 155 465 l 155 559 l 288 559 q 439 582 378 559 q 530 648 499 606 q 560 748 560 691 q 506 868 560 826 q 366 910 452 910 q 223 886 284 910 q 109 825 162 861 l 52 903 q 138 955 89 931 q 244 992 186 978 q 368 1006 302 1006 z "
  },
  "\u0505": {
    ha: 1111,
    x_min: 54,
    x_max: 1e3,
    o: "m 296 757 q 436 734 376 757 q 530 668 496 711 q 563 562 563 625 q 527 455 563 495 q 431 397 492 415 l 431 392 q 510 362 477 383 q 564 307 544 340 q 587 224 584 273 q 606 148 590 180 q 654 99 622 116 q 741 81 687 81 q 852 126 815 81 q 889 264 889 172 l 889 475 l 1000 475 l 1000 253 q 984 136 1000 186 q 936 52 968 85 q 856 3 904 19 q 742 -14 807 -14 q 630 1 678 -14 q 548 43 581 15 q 498 113 515 71 q 477 210 480 155 q 451 285 473 256 q 386 328 429 314 q 275 342 342 342 l 177 342 l 177 434 l 258 434 q 401 461 348 434 q 454 553 454 488 q 412 636 454 608 q 292 663 370 663 q 191 651 239 663 q 91 615 144 638 l 54 705 q 165 744 109 731 q 296 757 222 757 z "
  },
  "\u0506": {
    ha: 865,
    x_min: 52,
    x_max: 838,
    o: "m 378 1006 q 552 974 481 1006 q 660 887 623 943 q 697 760 697 832 q 633 599 697 658 q 467 523 568 541 l 467 518 q 652 440 587 500 q 717 279 717 379 l 717 103 l 838 103 l 838 -259 l 728 -259 l 728 0 l 606 0 l 606 279 q 585 363 606 328 q 524 421 564 398 q 426 454 484 444 q 293 465 368 465 l 154 465 l 154 559 l 297 559 q 456 582 392 559 q 551 648 519 606 q 583 748 583 691 q 527 867 583 825 q 379 910 471 910 q 229 885 293 910 q 109 825 165 861 l 52 903 q 139 955 90 931 q 249 992 189 978 q 378 1006 309 1006 z "
  },
  "\u0507": {
    ha: 730,
    x_min: 54,
    x_max: 712,
    o: "m 305 755 q 448 733 387 755 q 542 666 509 710 q 576 559 576 623 q 539 454 576 493 q 440 397 503 415 l 440 391 q 521 356 485 378 q 579 297 557 334 q 600 205 600 260 l 600 94 l 712 94 l 712 -256 l 602 -256 l 602 0 l 492 0 l 492 206 q 469 281 492 251 q 399 326 446 311 q 281 340 353 340 l 178 340 l 178 434 l 262 434 q 416 461 359 434 q 473 551 473 488 q 428 635 473 606 q 305 663 384 663 q 197 650 248 663 q 95 614 145 637 l 54 704 q 175 743 111 730 q 305 755 239 755 z "
  },
  "\u0508": {
    ha: 1356,
    x_min: -1,
    x_max: 1236,
    o: "m 816 991 l 816 260 q 853 128 816 169 q 969 87 891 87 q 1084 131 1045 87 q 1122 264 1122 174 l 1122 575 l 1236 575 l 1236 254 q 1164 53 1236 119 q 969 -14 1093 -14 q 830 13 890 -14 q 735 99 769 40 q 701 255 701 158 l 701 888 l 403 888 q 390 784 397 838 q 376 675 383 730 q 361 566 369 620 q 346 460 354 511 q 331 363 338 409 q 315 279 323 317 q 271 119 297 185 q 202 19 245 54 q 89 -16 159 -16 q 42 -11 65 -16 q -1 1 19 -6 l -1 98 q 35 85 16 90 q 75 80 54 80 q 143 114 118 80 q 182 201 168 147 q 208 313 196 254 q 229 431 217 361 q 253 591 240 502 q 280 781 267 680 q 308 991 294 882 l 816 991 z "
  },
  "\u0509": {
    ha: 1182,
    x_min: 9,
    x_max: 1072,
    o: "m 663 259 q 699 125 663 169 q 814 81 734 81 q 922 126 886 81 q 958 263 958 172 l 958 475 l 1072 475 l 1072 254 q 1055 136 1072 186 q 1006 53 1039 86 q 926 3 974 20 q 815 -14 878 -14 q 702 3 751 -14 q 619 52 653 19 q 568 136 585 85 q 550 255 550 186 l 550 649 l 334 649 q 301 349 321 473 q 249 145 280 224 q 175 29 218 66 q 71 -8 131 -8 q 37 -6 53 -8 q 9 0 20 -4 l 9 86 q 27 83 18 84 q 48 82 37 82 q 104 107 79 82 q 150 184 130 133 q 186 315 170 236 q 215 500 203 393 q 237 743 228 607 l 663 743 l 663 259 z "
  },
  "\u050A": {
    ha: 1403,
    x_min: 136,
    x_max: 1277,
    o: "m 859 991 l 859 262 q 897 129 859 170 q 1013 87 935 87 q 1127 130 1089 87 q 1164 264 1164 172 l 1164 575 l 1277 575 l 1277 254 q 1206 53 1277 119 q 1013 -14 1136 -14 q 873 13 934 -14 q 779 99 813 40 q 745 256 745 159 l 745 467 l 251 467 l 251 0 l 136 0 l 136 991 l 251 991 l 251 569 l 745 569 l 745 991 l 859 991 z "
  },
  "\u050B": {
    ha: 1265,
    x_min: 119,
    x_max: 1151,
    o: "m 232 743 l 232 431 l 630 431 l 630 743 l 743 743 l 743 260 q 779 125 743 169 q 895 81 815 81 q 1003 127 966 81 q 1040 264 1040 172 l 1040 475 l 1151 475 l 1151 254 q 1135 136 1151 186 q 1087 53 1119 86 q 1007 3 1055 20 q 895 -14 959 -14 q 783 3 832 -14 q 699 53 733 20 q 648 137 665 86 q 630 255 630 187 l 630 336 l 232 336 l 232 0 l 119 0 l 119 743 l 232 743 z "
  },
  "\u050C": {
    ha: 1049,
    x_min: 85,
    x_max: 972,
    o: "m 585 511 l 972 511 l 972 451 q 948 254 972 340 q 873 108 924 168 q 743 17 822 48 q 553 -14 663 -14 q 300 48 404 -14 q 140 224 195 110 q 85 496 85 338 q 143 763 85 648 q 315 942 201 878 q 593 1006 429 1006 q 752 989 674 1006 q 893 945 831 973 l 849 846 q 724 887 795 870 q 582 905 653 905 q 376 854 460 905 q 248 713 292 804 q 205 496 205 621 q 244 280 205 372 q 361 137 283 188 q 555 86 439 86 q 728 127 663 86 q 822 241 793 168 q 851 410 851 314 l 585 410 l 585 511 z "
  },
  "\u050D": {
    ha: 885,
    x_min: 77,
    x_max: 812,
    o: "m 465 392 l 812 392 l 812 345 q 791 192 812 258 q 727 79 770 125 q 618 10 684 33 q 463 -14 552 -14 q 251 33 337 -14 q 121 165 165 79 q 77 370 77 251 q 124 575 77 488 q 263 709 172 662 q 489 757 355 757 q 636 742 571 757 q 755 701 701 727 l 716 612 q 614 648 672 632 q 487 665 555 665 q 326 629 391 665 q 227 528 260 593 q 194 370 194 462 q 259 158 194 238 q 463 79 323 79 q 597 105 545 79 q 673 181 649 132 q 698 298 698 231 l 465 298 l 465 392 z "
  },
  "\u050E": {
    ha: 983,
    x_min: 11,
    x_max: 857,
    o: "m 743 991 l 743 888 l 430 888 l 430 260 q 470 127 430 169 q 587 86 509 86 q 704 129 664 86 q 743 263 743 172 l 743 575 l 857 575 l 857 254 q 784 53 857 119 q 587 -14 711 -14 q 446 13 508 -14 q 350 99 385 40 q 315 255 315 158 l 315 888 l 11 888 l 11 991 l 743 991 z "
  },
  "\u050F": {
    ha: 901,
    x_min: 28,
    x_max: 789,
    o: "m 615 743 l 615 650 l 377 650 l 377 260 q 414 125 377 169 q 530 81 451 81 q 640 124 603 81 q 677 260 677 167 l 677 475 l 789 475 l 789 254 q 773 136 789 186 q 723 53 756 86 q 642 3 690 20 q 530 -14 594 -14 q 418 3 468 -14 q 335 52 369 19 q 282 136 300 85 q 264 255 264 186 l 264 650 l 28 650 l 28 743 l 615 743 z "
  },
  "\u0510": {
    ha: 811,
    x_min: 75,
    x_max: 755,
    o: "m 439 1006 q 564 994 508 1006 q 667 960 621 981 q 755 911 714 939 l 693 828 q 576 886 637 864 q 431 907 516 907 q 279 866 336 907 q 223 745 223 824 q 254 647 223 688 q 347 584 285 606 q 503 562 410 562 l 644 562 l 644 467 l 505 467 q 277 420 359 467 q 195 276 195 373 q 263 132 195 179 q 456 84 332 84 q 565 92 513 84 q 664 114 616 100 q 751 147 711 128 l 751 40 q 617 0 691 13 q 452 -14 543 -14 q 244 21 329 -14 q 117 119 160 56 q 75 269 75 182 q 143 437 75 372 q 334 517 212 501 l 334 522 q 213 562 264 532 q 134 640 162 591 q 106 755 106 688 q 145 885 106 829 q 258 974 184 941 q 439 1006 332 1006 z "
  },
  "\u0511": {
    ha: 663,
    x_min: 60,
    x_max: 616,
    o: "m 487 434 l 487 342 l 388 342 q 268 327 316 342 q 197 282 220 312 q 173 208 173 252 q 199 133 173 161 q 271 92 225 104 q 374 79 316 79 q 508 96 450 79 q 613 136 567 114 l 613 36 q 511 0 571 14 q 368 -14 452 -14 q 136 48 211 -14 q 60 201 60 109 q 109 325 60 284 q 225 385 157 366 l 225 392 q 124 453 161 411 q 87 560 87 494 q 123 668 87 624 q 223 734 159 711 q 368 757 287 757 q 504 744 447 757 q 616 705 561 730 l 574 615 q 480 650 528 636 q 368 663 431 663 q 238 635 281 663 q 195 552 195 606 q 253 461 195 489 q 410 434 311 434 l 487 434 z "
  },
  "\u0512": {
    ha: 982,
    x_min: 1,
    x_max: 944,
    o: "m 789 -271 q 743 -265 764 -271 q 709 -254 722 -259 l 709 -160 q 738 -169 720 -165 q 777 -173 755 -173 q 812 -165 798 -173 q 834 -141 827 -157 q 842 -99 842 -124 l 842 0 l 726 0 l 726 890 l 404 890 q 384 731 395 814 q 361 566 373 648 q 338 411 350 484 q 315 281 327 338 q 272 120 298 186 q 202 19 245 54 q 89 -16 159 -16 q 42 -11 65 -16 q 1 1 18 -6 l 1 98 q 36 86 16 91 q 77 81 55 81 q 144 116 119 81 q 183 203 169 150 q 209 311 198 256 q 229 428 218 357 q 254 588 241 498 q 280 781 267 678 q 308 991 294 883 l 841 991 l 841 103 l 944 103 l 944 -93 q 927 -190 944 -150 q 876 -250 911 -229 q 789 -271 842 -271 z "
  },
  "\u0513": {
    ha: 804,
    x_min: 9,
    x_max: 779,
    o: "m 624 -271 q 578 -265 599 -271 q 543 -254 557 -259 l 543 -160 q 572 -169 555 -165 q 611 -173 590 -173 q 647 -165 632 -173 q 670 -141 662 -157 q 677 -99 677 -124 l 677 0 l 562 0 l 562 649 l 336 649 q 301 348 322 473 q 250 144 281 223 q 175 28 219 65 q 71 -9 132 -9 q 37 -7 53 -9 q 9 0 20 -5 l 9 85 q 27 81 18 83 q 48 80 37 80 q 104 105 79 80 q 150 182 130 131 q 187 313 171 234 q 216 499 203 392 q 238 743 229 607 l 676 743 l 676 87 l 779 87 l 779 -93 q 762 -190 779 -150 q 711 -250 745 -229 q 624 -271 677 -271 z "
  },
  "\u1EA0": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 443 -238 q 395 -220 414 -238 q 375 -164 375 -201 q 395 -108 375 -126 q 443 -90 414 -90 q 492 -108 472 -90 q 511 -164 511 -126 q 492 -220 511 -201 q 443 -238 472 -238 z "
  },
  "\u1EA1": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 385 -238 q 337 -220 357 -238 q 317 -164 317 -201 q 337 -108 317 -126 q 385 -90 357 -90 q 434 -108 414 -90 q 454 -164 454 -126 q 434 -220 454 -201 q 385 -238 414 -238 z "
  },
  "\u1EA2": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 594 1245 q 562 1164 594 1193 q 481 1124 530 1135 l 475 1048 l 404 1048 l 395 1166 q 477 1191 448 1175 q 507 1241 507 1208 q 480 1286 507 1274 q 414 1299 454 1299 q 377 1297 395 1299 q 346 1293 358 1295 l 346 1360 q 378 1367 359 1364 q 424 1369 397 1369 q 550 1338 506 1369 q 594 1245 594 1308 z "
  },
  "\u1EA3": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 533 1016 q 501 935 533 964 q 420 895 469 906 l 414 819 l 343 819 l 334 937 q 416 962 387 945 q 446 1012 446 979 q 419 1057 446 1045 q 353 1069 393 1069 q 316 1068 334 1069 q 285 1063 297 1066 l 285 1131 q 317 1138 298 1135 q 363 1140 336 1140 q 489 1109 445 1140 q 533 1016 533 1078 z "
  },
  "\u1EA4": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 644 1071 l 581 1071 q 509 1124 546 1095 q 437 1186 472 1153 q 365 1124 401 1153 q 294 1071 329 1095 l 230 1071 l 230 1087 q 280 1142 254 1113 q 332 1202 307 1171 q 379 1264 358 1234 l 496 1264 q 542 1202 517 1234 q 594 1142 568 1171 q 644 1087 621 1113 l 644 1071 m 591 1219 q 638 1283 618 1253 q 679 1357 657 1314 l 792 1357 l 792 1343 q 727 1268 763 1303 q 656 1203 692 1232 l 591 1203 l 591 1219 z "
  },
  "\u1EA5": {
    ha: 772,
    x_min: 64,
    x_max: 736,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 589 842 l 525 842 q 453 895 490 865 q 382 957 416 924 q 310 895 346 924 q 239 842 273 865 l 174 842 l 174 858 q 224 913 198 884 q 277 973 251 942 q 323 1035 302 1004 l 440 1035 q 487 973 461 1004 q 538 913 512 942 q 589 858 565 884 l 589 842 m 535 989 q 582 1054 563 1023 q 623 1128 602 1084 l 736 1128 l 736 1114 q 672 1039 707 1074 q 600 974 636 1003 l 535 974 l 535 989 z "
  },
  "\u1EA6": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 229 1071 l 229 1086 q 279 1141 252 1112 q 331 1201 305 1170 q 378 1263 357 1232 l 496 1263 q 544 1201 518 1232 q 595 1141 569 1170 q 645 1086 621 1112 l 645 1071 l 580 1071 q 509 1124 545 1095 q 437 1186 473 1153 q 365 1124 401 1153 q 293 1071 328 1095 l 229 1071 m 221 1203 q 148 1268 182 1232 q 83 1343 113 1303 l 83 1357 l 195 1357 q 236 1283 216 1314 q 283 1217 256 1252 l 283 1203 l 221 1203 z "
  },
  "\u1EA7": {
    ha: 772,
    x_min: 31,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 177 842 l 177 857 q 227 911 200 882 q 279 972 253 941 q 326 1034 305 1003 l 444 1034 q 491 972 466 1003 q 543 911 517 941 q 593 857 569 882 l 593 842 l 528 842 q 456 895 492 865 q 385 957 420 924 q 313 895 349 924 q 241 842 276 865 l 177 842 m 169 974 q 95 1039 130 1003 q 31 1114 60 1074 l 31 1128 l 142 1128 q 184 1054 164 1084 q 231 988 203 1023 l 231 974 l 169 974 z "
  },
  "\u1EA8": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 490 1264 q 537 1202 511 1234 q 589 1142 562 1171 q 639 1087 615 1113 l 639 1071 l 575 1071 q 504 1124 541 1095 q 432 1186 467 1153 q 360 1124 396 1153 q 289 1071 323 1095 l 224 1071 l 224 1087 q 275 1142 248 1113 q 327 1202 301 1171 q 374 1264 353 1234 l 490 1264 m 627 1438 q 723 1415 689 1438 q 757 1343 757 1392 q 731 1284 757 1304 q 669 1255 706 1263 l 665 1200 l 612 1200 l 606 1288 q 668 1305 646 1294 q 689 1341 689 1316 q 670 1375 689 1365 q 621 1384 652 1384 q 592 1383 606 1384 q 570 1379 579 1381 l 570 1433 q 594 1437 580 1436 q 627 1438 608 1438 z "
  },
  "\u1EA9": {
    ha: 772,
    x_min: 64,
    x_max: 711,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 445 1035 q 491 973 466 1004 q 543 913 517 942 q 593 858 570 884 l 593 842 l 530 842 q 458 895 495 865 q 387 957 421 924 q 314 895 351 924 q 243 842 278 865 l 179 842 l 179 858 q 229 913 203 884 q 281 973 256 942 q 328 1035 307 1004 l 445 1035 m 582 1209 q 677 1186 644 1209 q 711 1114 711 1162 q 686 1055 711 1075 q 624 1026 661 1034 l 620 971 l 566 971 l 560 1059 q 622 1076 601 1065 q 644 1112 644 1086 q 625 1145 644 1136 q 575 1155 606 1155 q 547 1154 560 1155 q 525 1150 534 1152 l 525 1204 q 549 1208 534 1206 q 582 1209 563 1209 z "
  },
  "\u1EAA": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 497 1262 q 545 1200 519 1232 q 597 1140 570 1169 q 647 1086 623 1112 l 647 1071 l 585 1071 q 512 1123 549 1095 q 440 1185 476 1152 q 367 1123 405 1152 q 295 1071 330 1095 l 233 1071 l 233 1086 q 282 1140 256 1112 q 335 1200 309 1169 q 382 1262 361 1232 l 497 1262 m 658 1455 q 638 1378 654 1412 q 595 1326 622 1345 q 532 1308 568 1308 q 483 1318 507 1308 q 437 1341 459 1328 q 393 1364 414 1354 q 352 1375 372 1375 q 309 1358 324 1375 q 285 1305 294 1341 l 225 1305 q 265 1412 233 1370 q 352 1454 298 1454 q 402 1444 378 1454 q 449 1420 427 1434 q 493 1396 472 1407 q 533 1386 514 1386 q 576 1403 561 1386 q 599 1455 591 1420 l 658 1455 z "
  },
  "\u1EAB": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 441 1033 q 488 971 463 1002 q 541 911 514 940 q 591 857 567 882 l 591 842 l 528 842 q 456 894 492 865 q 384 956 420 922 q 311 894 349 922 q 239 842 273 865 l 176 842 l 176 857 q 226 911 199 882 q 279 971 253 940 q 326 1033 305 1002 l 441 1033 m 602 1226 q 582 1149 597 1183 q 539 1097 566 1116 q 475 1078 512 1078 q 427 1088 450 1078 q 380 1112 403 1099 q 337 1135 358 1125 q 296 1145 315 1145 q 253 1129 268 1145 q 229 1076 237 1112 l 169 1076 q 209 1183 176 1141 q 296 1225 241 1225 q 346 1215 321 1225 q 393 1191 370 1204 q 437 1167 416 1177 q 477 1157 458 1157 q 519 1174 505 1157 q 543 1226 534 1191 l 602 1226 z "
  },
  "\u1EAC": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 443 -238 q 395 -220 414 -238 q 375 -164 375 -201 q 395 -108 375 -126 q 443 -90 414 -90 q 492 -108 472 -90 q 511 -164 511 -126 q 492 -220 511 -201 q 443 -238 472 -238 m 496 1312 q 544 1243 513 1282 q 608 1168 574 1205 q 669 1105 642 1132 l 669 1090 l 589 1090 q 513 1149 552 1114 q 438 1221 475 1183 q 364 1149 401 1183 q 290 1090 326 1115 l 212 1090 l 212 1105 q 271 1169 238 1133 q 334 1244 304 1206 q 382 1312 364 1282 l 496 1312 z "
  },
  "\u1EAD": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 444 1063 q 492 995 461 1033 q 556 920 522 956 q 616 857 590 883 l 616 842 l 536 842 q 461 900 500 865 q 386 972 422 935 q 312 900 349 935 q 237 842 274 866 l 160 842 l 160 857 q 219 920 186 884 q 282 995 252 957 q 330 1063 312 1033 l 444 1063 m 378 -238 q 330 -220 349 -238 q 310 -164 310 -201 q 330 -108 310 -126 q 378 -90 349 -90 q 427 -108 407 -90 q 446 -164 446 -126 q 427 -220 446 -201 q 378 -238 407 -238 z "
  },
  "\u1EAE": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 642 1250 q 584 1119 635 1167 q 439 1071 534 1071 q 293 1118 342 1071 q 239 1250 244 1165 l 308 1250 q 347 1174 313 1192 q 440 1156 380 1156 q 530 1176 494 1156 q 573 1250 566 1195 l 642 1250 m 595 1402 l 595 1388 q 553 1337 576 1362 q 507 1289 531 1312 q 458 1248 483 1267 l 395 1248 l 395 1263 q 442 1328 422 1297 q 483 1402 463 1359 l 595 1402 z "
  },
  "\u1EAF": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 588 1021 q 530 890 581 938 q 385 842 479 842 q 239 889 288 842 q 184 1021 190 936 l 254 1021 q 293 945 259 963 q 386 927 326 927 q 476 946 439 927 q 519 1021 512 966 l 588 1021 m 541 1173 l 541 1159 q 499 1108 522 1133 q 453 1060 477 1082 q 404 1019 429 1038 l 341 1019 l 341 1034 q 388 1099 368 1067 q 429 1173 408 1130 l 541 1173 z "
  },
  "\u1EB0": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 642 1250 q 584 1119 634 1167 q 438 1071 534 1071 q 293 1118 341 1071 q 238 1250 244 1165 l 307 1250 q 346 1174 313 1192 q 439 1156 380 1156 q 530 1175 494 1156 q 572 1250 566 1194 l 642 1250 m 389 1402 q 430 1328 410 1359 q 476 1263 449 1297 l 476 1248 l 414 1248 q 366 1289 391 1267 q 319 1337 342 1312 q 277 1388 297 1362 l 277 1402 l 389 1402 z "
  },
  "\u1EB1": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 587 1021 q 529 890 579 938 q 383 842 479 842 q 238 889 286 842 q 183 1021 189 936 l 252 1021 q 291 945 258 963 q 385 927 325 927 q 475 946 439 927 q 517 1021 511 965 l 587 1021 m 334 1173 q 375 1099 355 1130 q 421 1034 394 1067 l 421 1019 l 359 1019 q 311 1060 336 1038 q 264 1108 287 1082 q 222 1159 242 1133 l 222 1173 l 334 1173 z "
  },
  "\u1EB2": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 642 1250 q 584 1119 634 1167 q 438 1071 534 1071 q 293 1118 341 1071 q 238 1250 244 1165 l 307 1250 q 346 1174 313 1192 q 439 1156 380 1156 q 530 1175 494 1156 q 572 1250 566 1194 l 642 1250 m 412 1449 q 506 1426 473 1449 q 539 1354 539 1402 q 514 1295 539 1315 q 453 1267 489 1275 l 449 1237 l 395 1237 l 389 1301 q 450 1318 429 1307 q 471 1353 471 1329 q 453 1386 471 1377 q 404 1396 434 1396 q 375 1394 389 1396 q 353 1391 361 1392 l 353 1442 q 377 1447 363 1446 q 412 1449 392 1449 z "
  },
  "\u1EB3": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 591 1021 q 534 890 584 938 q 388 842 484 842 q 242 889 291 842 q 188 1021 194 936 l 257 1021 q 296 945 262 963 q 389 927 330 927 q 479 946 444 927 q 522 1021 515 965 l 591 1021 m 361 1219 q 456 1196 423 1219 q 489 1125 489 1173 q 464 1066 489 1086 q 403 1038 439 1046 l 399 1008 l 345 1008 l 339 1072 q 400 1088 379 1078 q 421 1124 421 1099 q 402 1157 421 1147 q 354 1166 384 1166 q 325 1165 338 1166 q 302 1162 311 1163 l 302 1213 q 327 1218 313 1217 q 361 1219 342 1219 z "
  },
  "\u1EB4": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 637 1248 q 580 1118 630 1166 q 434 1071 530 1071 q 289 1117 337 1071 q 234 1248 240 1164 l 303 1248 q 342 1174 309 1191 q 435 1156 376 1156 q 526 1174 490 1156 q 568 1248 562 1192 l 637 1248 m 658 1451 q 638 1376 654 1409 q 595 1324 622 1343 q 532 1305 568 1305 q 483 1316 507 1305 q 436 1339 458 1326 q 392 1363 414 1353 q 351 1373 371 1373 q 309 1357 323 1373 q 284 1304 294 1340 l 224 1304 q 264 1409 232 1369 q 352 1450 297 1450 q 402 1440 378 1450 q 449 1416 427 1430 q 493 1393 472 1403 q 533 1383 514 1383 q 576 1400 561 1383 q 598 1451 591 1417 l 658 1451 z "
  },
  "\u1EB5": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 587 1019 q 529 889 579 937 q 383 842 479 842 q 238 888 286 842 q 183 1019 189 935 l 252 1019 q 291 944 258 962 q 385 927 325 927 q 475 945 439 927 q 517 1019 511 963 l 587 1019 m 607 1222 q 587 1146 603 1179 q 544 1095 571 1114 q 481 1076 517 1076 q 432 1086 456 1076 q 385 1110 408 1097 q 341 1134 363 1124 q 300 1144 320 1144 q 258 1127 273 1144 q 233 1075 243 1111 l 174 1075 q 214 1180 181 1139 q 301 1221 246 1221 q 351 1211 327 1221 q 398 1187 376 1200 q 442 1164 421 1174 q 482 1154 463 1154 q 525 1171 510 1154 q 547 1222 540 1187 l 607 1222 z "
  },
  "\u1EB6": {
    ha: 878,
    x_min: 0,
    x_max: 877,
    o: "m 758 0 l 635 315 l 238 315 l 117 0 l 0 0 l 388 996 l 492 996 l 877 0 l 758 0 m 601 417 l 485 730 q 472 770 481 742 q 453 827 463 798 q 437 876 444 857 q 423 820 431 848 q 408 769 415 793 q 395 730 400 746 l 277 417 l 601 417 m 654 1274 q 623 1178 649 1219 q 551 1114 597 1137 q 439 1090 505 1090 q 289 1140 340 1090 q 232 1274 237 1190 l 302 1274 q 323 1216 307 1236 q 370 1189 340 1196 q 442 1182 400 1182 q 509 1190 479 1182 q 558 1218 539 1198 q 582 1274 577 1238 l 654 1274 m 443 -238 q 395 -220 414 -238 q 375 -164 375 -201 q 395 -108 375 -126 q 443 -90 414 -90 q 492 -108 472 -90 q 511 -164 511 -126 q 492 -220 511 -201 q 443 -238 472 -238 z "
  },
  "\u1EB7": {
    ha: 772,
    x_min: 64,
    x_max: 659,
    o: "m 397 755 q 594 696 530 755 q 659 505 659 636 l 659 0 l 576 0 l 555 110 l 549 110 q 484 42 518 69 q 406 0 450 14 q 297 -14 361 -14 q 177 10 229 -14 q 94 82 124 34 q 64 204 64 130 q 152 375 64 315 q 420 440 240 435 l 549 446 l 549 491 q 507 626 549 587 q 391 665 466 665 q 279 648 332 665 q 179 608 227 631 l 144 693 q 260 737 195 719 q 397 755 325 755 m 547 366 l 434 361 q 238 316 295 356 q 181 203 181 276 q 220 109 181 139 q 322 78 258 78 q 484 133 421 78 q 547 298 547 188 l 547 366 m 602 1025 q 571 929 597 970 q 498 865 545 888 q 387 842 452 842 q 236 891 288 842 q 180 1025 185 941 l 250 1025 q 271 967 254 987 q 318 940 288 947 q 390 933 348 933 q 457 941 427 933 q 506 969 487 949 q 530 1025 525 989 l 602 1025 m 364 -238 q 316 -220 336 -238 q 296 -164 296 -201 q 316 -108 296 -126 q 364 -90 336 -90 q 413 -108 393 -90 q 433 -164 433 -126 q 413 -220 433 -201 q 364 -238 393 -238 z "
  },
  "\u1EB8": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 414 -238 q 366 -220 386 -238 q 347 -164 347 -201 q 366 -108 347 -126 q 414 -90 386 -90 q 463 -108 444 -90 q 483 -164 483 -126 q 463 -220 483 -201 q 414 -238 444 -238 z "
  },
  "\u1EB9": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 415 -238 q 367 -220 387 -238 q 347 -164 347 -201 q 367 -108 347 -126 q 415 -90 387 -90 q 464 -108 444 -90 q 484 -164 484 -126 q 464 -220 484 -201 q 415 -238 444 -238 z "
  },
  "\u1EBA": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 563 1245 q 531 1164 563 1193 q 450 1124 499 1135 l 444 1048 l 373 1048 l 364 1166 q 446 1191 416 1175 q 475 1241 475 1208 q 449 1286 475 1274 q 383 1299 423 1299 q 346 1297 364 1299 q 315 1293 327 1295 l 315 1360 q 347 1367 328 1364 q 393 1369 366 1369 q 519 1338 475 1369 q 563 1245 563 1308 z "
  },
  "\u1EBB": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 558 1016 q 526 935 558 964 q 445 895 494 906 l 439 819 l 368 819 l 359 937 q 441 962 412 945 q 471 1012 471 979 q 445 1057 471 1045 q 378 1069 418 1069 q 341 1068 359 1069 q 310 1063 322 1066 l 310 1131 q 342 1138 323 1135 q 388 1140 361 1140 q 514 1109 470 1140 q 558 1016 558 1078 z "
  },
  "\u1EBC": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 168 1093 q 184 1165 172 1133 q 214 1219 195 1197 q 259 1254 233 1242 q 317 1265 286 1265 q 377 1253 349 1265 q 431 1224 406 1240 q 481 1196 457 1208 q 528 1183 505 1183 q 578 1203 560 1183 q 606 1267 596 1223 l 672 1267 q 625 1140 663 1187 q 523 1093 587 1093 q 465 1106 493 1093 q 412 1134 437 1118 q 361 1163 386 1150 q 313 1175 336 1175 q 262 1155 279 1175 q 235 1093 244 1135 l 168 1093 z "
  },
  "\u1EBD": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 139 844 q 155 916 143 884 q 185 970 166 948 q 230 1005 204 993 q 288 1017 256 1017 q 348 1004 319 1017 q 402 976 376 991 q 452 947 428 960 q 498 935 476 935 q 549 955 531 935 q 576 1018 567 975 l 643 1018 q 596 891 634 939 q 494 844 558 844 q 436 857 464 844 q 382 885 408 869 q 332 914 357 901 q 283 926 307 926 q 233 906 250 926 q 205 844 215 886 l 139 844 z "
  },
  "\u1EBE": {
    ha: 772,
    x_min: 136,
    x_max: 766,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 618 1071 l 555 1071 q 483 1124 520 1095 q 412 1186 446 1153 q 339 1124 376 1153 q 269 1071 303 1095 l 204 1071 l 204 1087 q 254 1142 228 1113 q 307 1202 281 1171 q 353 1264 332 1234 l 470 1264 q 516 1202 491 1234 q 568 1142 542 1171 q 618 1087 595 1113 l 618 1071 m 565 1219 q 612 1283 593 1253 q 653 1357 631 1314 l 766 1357 l 766 1343 q 702 1268 737 1303 q 630 1203 666 1232 l 565 1203 l 565 1219 z "
  },
  "\u1EBF": {
    ha: 780,
    x_min: 77,
    x_max: 754,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 606 842 l 543 842 q 471 895 508 865 q 399 957 434 924 q 327 895 363 924 q 256 842 291 865 l 192 842 l 192 858 q 242 913 216 884 q 294 973 269 942 q 341 1035 320 1004 l 458 1035 q 504 973 479 1004 q 556 913 530 942 q 606 858 583 884 l 606 842 m 553 989 q 600 1054 581 1023 q 641 1128 619 1084 l 754 1128 l 754 1114 q 689 1039 725 1074 q 618 974 654 1003 l 553 974 l 553 989 z "
  },
  "\u1EC0": {
    ha: 772,
    x_min: 62,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 209 1071 l 209 1086 q 258 1141 232 1112 q 311 1201 285 1170 q 358 1263 337 1232 l 476 1263 q 523 1201 498 1232 q 575 1141 549 1170 q 625 1086 601 1112 l 625 1071 l 559 1071 q 488 1124 524 1095 q 416 1186 452 1153 q 345 1124 381 1153 q 273 1071 308 1095 l 209 1071 m 201 1203 q 127 1268 162 1232 q 62 1343 92 1303 l 62 1357 l 174 1357 q 216 1283 196 1314 q 262 1217 235 1252 l 262 1203 l 201 1203 z "
  },
  "\u1EC1": {
    ha: 780,
    x_min: 50,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 196 842 l 196 857 q 245 911 219 882 q 298 972 272 941 q 345 1034 324 1003 l 463 1034 q 510 972 485 1003 q 562 911 536 941 q 612 857 588 882 l 612 842 l 547 842 q 475 895 511 865 q 404 957 439 924 q 332 895 368 924 q 260 842 295 865 l 196 842 m 188 974 q 114 1039 149 1003 q 50 1114 79 1074 l 50 1128 l 161 1128 q 203 1054 183 1084 q 250 988 222 1023 l 250 974 l 188 974 z "
  },
  "\u1EC2": {
    ha: 772,
    x_min: 136,
    x_max: 736,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 469 1264 q 516 1202 490 1234 q 568 1142 541 1171 q 618 1087 594 1113 l 618 1071 l 554 1071 q 483 1124 519 1095 q 411 1186 446 1153 q 339 1124 375 1153 q 268 1071 302 1095 l 203 1071 l 203 1087 q 254 1142 227 1113 q 306 1202 280 1171 q 353 1264 332 1234 l 469 1264 m 606 1438 q 702 1415 668 1438 q 736 1343 736 1392 q 710 1284 736 1304 q 648 1255 685 1263 l 644 1200 l 591 1200 l 585 1288 q 647 1305 625 1294 q 668 1341 668 1316 q 649 1375 668 1365 q 600 1384 631 1384 q 571 1383 585 1384 q 549 1379 558 1381 l 549 1433 q 573 1437 559 1436 q 606 1438 587 1438 z "
  },
  "\u1EC3": {
    ha: 780,
    x_min: 77,
    x_max: 719,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 452 1035 q 499 973 473 1004 q 551 913 524 942 q 601 858 577 884 l 601 842 l 537 842 q 466 895 503 865 q 394 957 429 924 q 322 895 358 924 q 251 842 286 865 l 186 842 l 186 858 q 237 913 210 884 q 289 973 263 942 q 336 1035 315 1004 l 452 1035 m 589 1209 q 685 1186 651 1209 q 719 1114 719 1162 q 693 1055 719 1075 q 631 1026 668 1034 l 627 971 l 574 971 l 568 1059 q 630 1076 608 1065 q 651 1112 651 1086 q 632 1145 651 1136 q 583 1155 614 1155 q 554 1154 568 1155 q 532 1150 541 1152 l 532 1204 q 556 1208 542 1206 q 589 1209 570 1209 z "
  },
  "\u1EC4": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 469 1262 q 516 1200 490 1232 q 568 1140 542 1169 q 618 1086 595 1112 l 618 1071 l 556 1071 q 484 1123 520 1095 q 412 1185 448 1152 q 339 1123 376 1152 q 267 1071 301 1095 l 204 1071 l 204 1086 q 254 1140 227 1112 q 307 1200 281 1169 q 354 1262 333 1232 l 469 1262 m 629 1455 q 609 1378 625 1412 q 567 1326 593 1345 q 503 1308 540 1308 q 454 1318 478 1308 q 408 1341 431 1328 q 365 1364 386 1354 q 323 1375 343 1375 q 280 1358 296 1375 q 256 1305 265 1341 l 197 1305 q 237 1412 204 1370 q 323 1454 269 1454 q 374 1444 349 1454 q 421 1420 398 1434 q 465 1396 444 1407 q 505 1386 486 1386 q 547 1403 532 1386 q 570 1455 562 1420 l 629 1455 z "
  },
  "\u1EC5": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 455 1033 q 503 971 477 1002 q 555 911 528 940 q 605 857 581 882 l 605 842 l 543 842 q 470 894 507 865 q 398 956 434 922 q 325 894 363 922 q 253 842 288 865 l 191 842 l 191 857 q 240 911 214 882 q 293 971 267 940 q 340 1033 319 1002 l 455 1033 m 616 1226 q 596 1149 612 1183 q 553 1097 580 1116 q 490 1078 526 1078 q 441 1088 465 1078 q 395 1112 417 1099 q 351 1135 372 1125 q 310 1145 330 1145 q 267 1129 282 1145 q 243 1076 252 1112 l 183 1076 q 223 1183 191 1141 q 310 1225 256 1225 q 360 1215 336 1225 q 407 1191 385 1204 q 451 1167 430 1177 q 491 1157 472 1157 q 534 1174 519 1157 q 557 1226 549 1191 l 616 1226 z "
  },
  "\u1EC6": {
    ha: 772,
    x_min: 136,
    x_max: 688,
    o: "m 688 0 l 136 0 l 136 991 l 688 991 l 688 890 l 251 890 l 251 569 l 663 569 l 663 469 l 251 469 l 251 102 l 688 102 l 688 0 m 414 -238 q 366 -220 386 -238 q 347 -164 347 -201 q 366 -108 347 -126 q 414 -90 386 -90 q 463 -108 444 -90 q 483 -164 483 -126 q 463 -220 483 -201 q 414 -238 444 -238 m 483 1312 q 530 1243 500 1282 q 595 1168 561 1205 q 655 1105 629 1132 l 655 1090 l 575 1090 q 500 1149 538 1114 q 425 1221 461 1183 q 350 1149 388 1183 q 276 1090 313 1115 l 199 1090 l 199 1105 q 257 1169 224 1133 q 320 1244 290 1206 q 368 1312 351 1282 l 483 1312 z "
  },
  "\u1EC7": {
    ha: 780,
    x_min: 77,
    x_max: 707,
    o: "m 405 757 q 568 715 500 757 q 671 597 635 673 q 707 420 707 522 l 707 351 l 194 351 q 259 151 196 220 q 437 83 322 83 q 562 96 507 83 q 674 134 616 109 l 674 35 q 563 -2 618 9 q 432 -14 507 -14 q 245 30 325 -14 q 121 159 165 74 q 77 366 77 243 q 118 574 77 486 q 232 709 158 662 q 405 757 305 757 m 404 665 q 260 606 313 665 q 196 441 206 547 l 589 441 q 569 558 589 507 q 508 636 549 608 q 404 665 467 665 m 454 1063 q 501 995 471 1033 q 566 920 532 956 q 626 857 600 883 l 626 842 l 546 842 q 471 900 509 865 q 395 972 432 935 q 321 900 359 935 q 247 842 283 866 l 170 842 l 170 857 q 228 920 195 884 q 291 995 261 957 q 339 1063 321 1033 l 454 1063 m 415 -238 q 367 -220 387 -238 q 347 -164 347 -201 q 367 -108 347 -126 q 415 -90 387 -90 q 464 -108 444 -90 q 484 -164 484 -126 q 464 -220 484 -201 q 415 -238 444 -238 z "
  },
  "\u1EC8": {
    ha: 388,
    x_min: 96,
    x_max: 345,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 345 1245 q 313 1164 345 1193 q 231 1124 281 1135 l 225 1048 l 155 1048 l 146 1166 q 228 1191 198 1175 q 257 1241 257 1208 q 231 1286 257 1274 q 165 1299 205 1299 q 127 1297 146 1299 q 96 1293 109 1295 l 96 1360 q 129 1367 110 1364 q 174 1369 148 1369 q 300 1338 256 1369 q 345 1245 345 1308 z "
  },
  "\u1EC9": {
    ha: 351,
    x_min: 81,
    x_max: 329,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 m 329 1016 q 297 935 329 964 q 216 895 265 906 l 210 819 l 139 819 l 130 937 q 212 962 182 945 q 241 1012 241 979 q 215 1057 241 1045 q 149 1069 189 1069 q 112 1068 130 1069 q 81 1063 93 1066 l 81 1131 q 113 1138 94 1135 q 159 1140 132 1140 q 285 1109 241 1140 q 329 1016 329 1078 z "
  },
  "\u1ECA": {
    ha: 388,
    x_min: 125,
    x_max: 261,
    o: "m 136 0 l 136 991 l 251 991 l 251 0 l 136 0 m 193 -238 q 144 -220 164 -238 q 125 -164 125 -201 q 144 -108 125 -126 q 193 -90 164 -90 q 241 -108 222 -90 q 261 -164 261 -126 q 241 -220 261 -201 q 193 -238 222 -238 z "
  },
  "\u1ECB": {
    ha: 351,
    x_min: 109,
    x_max: 245,
    o: "m 231 743 l 231 0 l 119 0 l 119 743 l 231 743 m 176 1021 q 224 1003 204 1021 q 244 947 244 985 q 224 892 244 910 q 176 873 204 873 q 128 892 147 873 q 109 947 109 910 q 128 1003 109 985 q 176 1021 147 1021 m 176 -238 q 128 -220 148 -238 q 109 -164 109 -201 q 128 -108 109 -126 q 176 -90 148 -90 q 225 -108 205 -90 q 245 -164 245 -126 q 225 -220 245 -201 q 176 -238 205 -238 z "
  },
  "\u1ECC": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 541 -238 q 493 -220 513 -238 q 473 -164 473 -201 q 493 -108 473 -126 q 541 -90 513 -90 q 590 -108 570 -90 q 610 -164 610 -126 q 590 -220 610 -201 q 541 -238 570 -238 z "
  },
  "\u1ECD": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 414 -238 q 366 -220 386 -238 q 347 -164 347 -201 q 366 -108 347 -126 q 414 -90 386 -90 q 463 -108 444 -90 q 483 -164 483 -126 q 463 -220 483 -201 q 414 -238 444 -238 z "
  },
  "\u1ECE": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 692 1245 q 660 1164 692 1193 q 578 1124 628 1135 l 572 1048 l 502 1048 l 493 1166 q 575 1191 545 1175 q 604 1241 604 1208 q 578 1286 604 1274 q 512 1299 552 1299 q 474 1297 493 1299 q 444 1293 456 1295 l 444 1360 q 476 1367 457 1364 q 522 1369 495 1369 q 648 1338 604 1369 q 692 1245 692 1308 z "
  },
  "\u1ECF": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 568 1016 q 536 935 568 964 q 455 895 505 906 l 449 819 l 378 819 l 370 937 q 451 962 422 945 q 481 1012 481 979 q 455 1057 481 1045 q 389 1069 429 1069 q 351 1068 370 1069 q 320 1063 332 1066 l 320 1131 q 353 1138 334 1135 q 398 1140 372 1140 q 524 1109 480 1140 q 568 1016 568 1078 z "
  },
  "\u1ED0": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 747 1071 l 683 1071 q 611 1124 648 1095 q 540 1186 574 1153 q 468 1124 504 1153 q 397 1071 431 1095 l 332 1071 l 332 1087 q 382 1142 356 1113 q 435 1202 409 1171 q 481 1264 460 1234 l 598 1264 q 645 1202 619 1234 q 696 1142 670 1171 q 747 1087 723 1113 l 747 1071 m 693 1219 q 740 1283 721 1253 q 781 1357 760 1314 l 895 1357 l 895 1343 q 830 1268 865 1303 q 758 1203 794 1232 l 693 1203 l 693 1219 z "
  },
  "\u1ED1": {
    ha: 836,
    x_min: 77,
    x_max: 771,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 623 842 l 559 842 q 488 895 525 865 q 416 957 451 924 q 344 895 380 924 q 273 842 308 865 l 209 842 l 209 858 q 259 913 233 884 q 311 973 286 942 q 358 1035 337 1004 l 475 1035 q 521 973 496 1004 q 573 913 547 942 q 623 858 600 884 l 623 842 m 570 989 q 617 1054 597 1023 q 658 1128 636 1084 l 771 1128 l 771 1114 q 706 1039 742 1074 q 635 974 671 1003 l 570 974 l 570 989 z "
  },
  "\u1ED2": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 335 1071 l 335 1086 q 385 1141 358 1112 q 437 1201 411 1170 q 484 1263 463 1232 l 602 1263 q 649 1201 624 1232 q 701 1141 675 1170 q 751 1086 727 1112 l 751 1071 l 686 1071 q 614 1124 650 1095 q 543 1186 578 1153 q 471 1124 507 1153 q 399 1071 434 1095 l 335 1071 m 327 1203 q 253 1268 288 1232 q 189 1343 218 1303 l 189 1357 l 300 1357 q 342 1283 322 1314 q 389 1217 361 1252 l 389 1203 l 327 1203 z "
  },
  "\u1ED3": {
    ha: 836,
    x_min: 65,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 212 842 l 212 857 q 261 911 235 882 q 314 972 288 941 q 361 1034 340 1003 l 479 1034 q 526 972 500 1003 q 577 911 551 941 q 627 857 604 882 l 627 842 l 562 842 q 491 895 527 865 q 419 957 455 924 q 347 895 384 924 q 275 842 311 865 l 212 842 m 203 974 q 130 1039 165 1003 q 65 1114 95 1074 l 65 1128 l 177 1128 q 218 1054 199 1084 q 265 988 238 1023 l 265 974 l 203 974 z "
  },
  "\u1ED4": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 597 1264 q 643 1202 618 1234 q 695 1142 669 1171 q 745 1087 722 1113 l 745 1071 l 682 1071 q 610 1124 647 1095 q 538 1186 573 1153 q 466 1124 503 1153 q 395 1071 430 1095 l 331 1071 l 331 1087 q 381 1142 355 1113 q 433 1202 408 1171 q 480 1264 459 1234 l 597 1264 m 734 1438 q 829 1415 795 1438 q 863 1343 863 1392 q 838 1284 863 1304 q 776 1255 812 1263 l 772 1200 l 718 1200 l 712 1288 q 774 1305 753 1294 q 795 1341 795 1316 q 777 1375 795 1365 q 727 1384 758 1384 q 699 1383 712 1384 q 677 1379 686 1381 l 677 1433 q 701 1437 686 1436 q 734 1438 715 1438 z "
  },
  "\u1ED5": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 475 1035 q 521 973 496 1004 q 573 913 547 942 q 623 858 600 884 l 623 842 l 559 842 q 488 895 525 865 q 416 957 451 924 q 344 895 380 924 q 273 842 308 865 l 209 842 l 209 858 q 259 913 233 884 q 311 973 286 942 q 358 1035 337 1004 l 475 1035 m 612 1209 q 707 1186 673 1209 q 741 1114 741 1162 q 716 1055 741 1075 q 654 1026 690 1034 l 650 971 l 596 971 l 590 1059 q 652 1076 631 1065 q 673 1112 673 1086 q 655 1145 673 1136 q 605 1155 636 1155 q 577 1154 590 1155 q 555 1150 564 1152 l 555 1204 q 578 1208 564 1206 q 612 1209 593 1209 z "
  },
  "\u1ED6": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 597 1262 q 645 1200 619 1232 q 697 1140 671 1169 q 747 1086 724 1112 l 747 1071 l 685 1071 q 613 1123 649 1095 q 541 1185 576 1152 q 468 1123 505 1152 q 395 1071 430 1095 l 333 1071 l 333 1086 q 383 1140 356 1112 q 436 1200 410 1169 q 483 1262 462 1232 l 597 1262 m 758 1455 q 738 1378 754 1412 q 695 1326 722 1345 q 632 1308 669 1308 q 583 1318 607 1308 q 537 1341 559 1328 q 493 1364 515 1354 q 452 1375 472 1375 q 409 1358 425 1375 q 385 1305 394 1341 l 326 1305 q 366 1412 333 1370 q 452 1454 398 1454 q 503 1444 478 1454 q 550 1420 527 1434 q 593 1396 572 1407 q 633 1386 614 1386 q 676 1403 661 1386 q 699 1455 691 1420 l 758 1455 z "
  },
  "\u1ED7": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 475 1033 q 522 971 496 1002 q 574 911 548 940 q 625 857 601 882 l 625 842 l 562 842 q 490 894 526 865 q 418 956 454 922 q 345 894 382 922 q 273 842 307 865 l 210 842 l 210 857 q 260 911 233 882 q 313 971 287 940 q 360 1033 339 1002 l 475 1033 m 635 1226 q 615 1149 631 1183 q 573 1097 600 1116 q 509 1078 546 1078 q 460 1088 484 1078 q 414 1112 437 1099 q 371 1135 392 1125 q 330 1145 349 1145 q 287 1129 302 1145 q 262 1076 271 1112 l 203 1076 q 243 1183 210 1141 q 330 1225 275 1225 q 380 1215 355 1225 q 427 1191 404 1204 q 471 1167 450 1177 q 511 1157 492 1157 q 553 1174 538 1157 q 576 1226 568 1191 l 635 1226 z "
  },
  "\u1ED8": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 541 -238 q 493 -220 513 -238 q 473 -164 473 -201 q 493 -108 473 -126 q 541 -90 513 -90 q 590 -108 570 -90 q 610 -164 610 -126 q 590 -220 610 -201 q 541 -238 570 -238 m 600 1312 q 647 1243 616 1282 q 711 1168 677 1205 q 772 1105 745 1132 l 772 1090 l 692 1090 q 616 1149 655 1114 q 541 1221 578 1183 q 467 1149 505 1183 q 393 1090 429 1115 l 315 1090 l 315 1105 q 374 1169 341 1133 q 437 1244 407 1206 q 485 1312 467 1282 l 600 1312 z "
  },
  "\u1ED9": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 414 -238 q 366 -220 386 -238 q 347 -164 347 -201 q 366 -108 347 -126 q 414 -90 386 -90 q 463 -108 444 -90 q 483 -164 483 -126 q 463 -220 483 -201 q 414 -238 444 -238 m 477 1063 q 524 995 494 1033 q 589 920 555 956 q 649 857 623 883 l 649 842 l 569 842 q 494 900 532 865 q 418 972 455 935 q 344 900 382 935 q 270 842 307 866 l 193 842 l 193 857 q 251 920 218 884 q 314 995 284 957 q 362 1063 345 1033 l 477 1063 z "
  },
  "\u1EDA": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 m 737 1313 l 737 1299 q 700 1252 724 1280 q 648 1195 677 1225 q 591 1137 620 1164 q 538 1090 562 1110 l 463 1090 l 463 1107 q 510 1169 484 1133 q 560 1243 536 1205 q 601 1313 585 1282 l 737 1313 z "
  },
  "\u1EDB": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 m 615 1064 l 615 1050 q 578 1003 602 1031 q 526 946 555 976 q 469 888 498 916 q 416 842 440 861 l 340 842 l 340 858 q 388 920 362 884 q 438 995 414 956 q 479 1064 463 1033 l 615 1064 z "
  },
  "\u1EDC": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 m 495 1313 q 535 1243 511 1282 q 586 1169 559 1205 q 635 1107 613 1133 l 635 1090 l 559 1090 q 506 1137 534 1110 q 448 1195 477 1164 q 397 1252 420 1225 q 361 1299 374 1280 l 361 1313 l 495 1313 z "
  },
  "\u1EDD": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 m 372 1064 q 412 995 388 1033 q 463 920 436 956 q 512 858 490 884 l 512 842 l 435 842 q 382 888 411 861 q 325 946 353 916 q 273 1003 296 976 q 237 1050 250 1031 l 237 1064 l 372 1064 z "
  },
  "\u1EDE": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 m 692 1245 q 661 1164 692 1193 q 579 1124 629 1135 l 573 1048 l 503 1048 l 494 1166 q 575 1191 546 1175 q 605 1241 605 1208 q 579 1286 605 1274 q 513 1299 553 1299 q 475 1297 494 1299 q 444 1293 456 1295 l 444 1360 q 477 1367 458 1364 q 522 1369 496 1369 q 648 1338 604 1369 q 692 1245 692 1308 z "
  },
  "\u1EDF": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 m 568 1016 q 536 935 568 964 q 455 895 505 906 l 449 819 l 378 819 l 370 937 q 451 962 422 945 q 481 1012 481 979 q 455 1057 481 1045 q 389 1069 429 1069 q 351 1068 370 1069 q 320 1063 332 1066 l 320 1131 q 353 1138 334 1135 q 398 1140 372 1140 q 524 1109 480 1140 q 568 1016 568 1078 z "
  },
  "\u1EE0": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 m 285 1093 q 300 1165 289 1133 q 331 1219 312 1197 q 376 1254 350 1242 q 434 1265 402 1265 q 494 1253 465 1265 q 548 1224 522 1240 q 598 1196 574 1208 q 644 1183 622 1183 q 695 1203 677 1183 q 722 1267 713 1223 l 789 1267 q 742 1140 780 1187 q 640 1093 704 1093 q 582 1106 610 1093 q 528 1134 554 1118 q 478 1163 503 1150 q 429 1175 453 1175 q 378 1155 396 1175 q 351 1093 361 1135 l 285 1093 z "
  },
  "\u1EE1": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 m 163 844 q 178 916 167 884 q 209 970 190 948 q 254 1005 228 993 q 312 1017 280 1017 q 372 1004 343 1017 q 426 976 400 991 q 476 947 452 960 q 522 935 500 935 q 573 955 555 935 q 600 1018 591 975 l 667 1018 q 620 891 658 939 q 517 844 582 844 q 460 857 488 844 q 406 885 432 869 q 356 914 380 901 q 307 926 331 926 q 256 906 274 926 q 229 844 239 886 l 163 844 z "
  },
  "\u1EE2": {
    ha: 1084,
    x_min: 85,
    x_max: 1108,
    o: "m 994 497 q 965 289 994 382 q 879 127 937 195 q 738 23 822 60 q 541 -14 653 -14 q 339 23 425 -14 q 197 127 254 60 q 113 290 140 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 742 968 656 1007 q 886 861 828 930 q 943 898 924 871 q 970 965 963 925 q 978 1055 978 1005 l 1099 1055 l 1108 1041 q 1055 889 1094 956 q 930 790 1015 822 q 978 657 962 730 q 994 497 994 583 m 206 497 q 242 279 206 371 q 352 136 277 186 q 541 86 426 86 q 730 136 657 86 q 838 279 804 186 q 873 497 873 371 q 793 797 873 688 q 543 905 714 905 q 353 856 427 905 q 242 715 278 806 q 206 497 206 623 m 537 -238 q 489 -220 509 -238 q 469 -164 469 -201 q 489 -108 469 -126 q 537 -90 509 -90 q 586 -108 566 -90 q 606 -164 606 -126 q 586 -220 606 -201 q 537 -238 566 -238 z "
  },
  "\u1EE3": {
    ha: 848,
    x_min: 77,
    x_max: 884,
    o: "m 760 373 q 718 164 760 251 q 599 32 676 78 q 416 -14 522 -14 q 240 32 317 -14 q 120 164 163 78 q 77 373 77 251 q 169 656 77 556 q 420 757 261 757 q 556 732 494 757 q 661 661 617 707 q 722 701 701 673 q 749 768 742 728 q 755 857 755 808 l 875 857 l 884 843 q 852 730 873 779 q 797 646 831 680 q 711 591 763 611 q 747 492 734 547 q 760 373 760 437 m 194 373 q 217 213 194 278 q 291 114 241 147 q 418 80 340 80 q 547 114 497 80 q 620 213 596 148 q 643 373 643 279 q 620 531 643 467 q 547 629 596 595 q 418 662 497 662 q 248 588 301 662 q 194 373 194 515 m 416 -238 q 368 -220 387 -238 q 348 -164 348 -201 q 368 -108 348 -126 q 416 -90 387 -90 q 465 -108 445 -90 q 484 -164 484 -126 q 465 -220 484 -201 q 416 -238 445 -238 z "
  },
  "\u1EE4": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 503 -238 q 455 -220 475 -238 q 435 -164 435 -201 q 455 -108 435 -126 q 503 -90 475 -90 q 552 -108 532 -90 q 572 -164 572 -126 q 552 -220 572 -201 q 503 -238 532 -238 z "
  },
  "\u1EE5": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 406 -238 q 357 -220 377 -238 q 338 -164 338 -201 q 357 -108 338 -126 q 406 -90 377 -90 q 454 -108 435 -90 q 474 -164 474 -126 q 454 -220 474 -201 q 406 -238 435 -238 z "
  },
  "\u1EE6": {
    ha: 1013,
    x_min: 125,
    x_max: 886,
    o: "m 886 991 l 886 350 q 843 163 886 245 q 715 34 801 81 q 501 -14 630 -14 q 221 86 317 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 349 q 308 155 241 223 q 508 86 375 86 q 657 119 599 86 q 743 211 715 152 q 771 349 771 271 l 771 991 l 886 991 m 652 1245 q 621 1164 652 1193 q 539 1124 589 1135 l 533 1048 l 463 1048 l 454 1166 q 535 1191 506 1175 q 565 1241 565 1208 q 539 1286 565 1274 q 473 1299 513 1299 q 435 1297 454 1299 q 404 1293 416 1295 l 404 1360 q 437 1367 418 1364 q 482 1369 456 1369 q 608 1338 564 1369 q 652 1245 652 1308 z "
  },
  "\u1EE7": {
    ha: 852,
    x_min: 111,
    x_max: 732,
    o: "m 732 743 l 732 0 l 640 0 l 624 104 l 618 104 q 558 39 595 66 q 476 0 522 13 q 378 -14 430 -14 q 231 15 290 -14 q 141 103 171 43 q 111 256 111 163 l 111 743 l 224 743 l 224 264 q 267 126 224 172 q 395 80 309 80 q 527 111 477 80 q 597 203 576 142 q 619 352 619 264 l 619 743 l 732 743 m 568 1016 q 536 935 568 964 q 455 895 505 906 l 449 819 l 378 819 l 370 937 q 451 962 422 945 q 481 1012 481 979 q 455 1057 481 1045 q 389 1069 429 1069 q 351 1068 370 1069 q 320 1063 332 1066 l 320 1131 q 353 1138 334 1135 q 398 1140 372 1140 q 524 1109 480 1140 q 568 1016 568 1078 z "
  },
  "\u1EE8": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 m 703 1313 l 703 1299 q 666 1252 690 1280 q 614 1195 643 1225 q 557 1137 586 1164 q 504 1090 528 1110 l 429 1090 l 429 1107 q 476 1169 450 1133 q 526 1243 502 1205 q 567 1313 551 1282 l 703 1313 z "
  },
  "\u1EE9": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 m 623 1064 l 623 1050 q 586 1003 609 1031 q 534 946 562 976 q 476 888 505 916 q 423 842 448 861 l 348 842 l 348 858 q 395 920 370 884 q 446 995 421 956 q 486 1064 470 1033 l 623 1064 z "
  },
  "\u1EEA": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 m 460 1313 q 501 1243 477 1282 q 552 1169 525 1205 q 601 1107 578 1133 l 601 1090 l 524 1090 q 471 1137 500 1110 q 414 1195 442 1164 q 362 1252 385 1225 q 326 1299 339 1280 l 326 1313 l 460 1313 z "
  },
  "\u1EEB": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 m 380 1064 q 420 995 396 1033 q 471 920 444 956 q 520 858 498 884 l 520 842 l 444 842 q 390 888 419 861 q 333 946 361 916 q 281 1003 304 976 q 245 1050 258 1031 l 245 1064 l 380 1064 z "
  },
  "\u1EEC": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 m 659 1245 q 627 1164 659 1193 q 546 1124 595 1135 l 540 1048 l 469 1048 l 460 1166 q 542 1191 513 1175 q 572 1241 572 1208 q 546 1286 572 1274 q 479 1299 519 1299 q 442 1297 460 1299 q 411 1293 423 1295 l 411 1360 q 444 1367 425 1364 q 489 1369 463 1369 q 615 1338 571 1369 q 659 1245 659 1308 z "
  },
  "\u1EED": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 m 572 1016 q 540 935 572 964 q 458 895 508 906 l 452 819 l 382 819 l 373 937 q 455 962 425 945 q 484 1012 484 979 q 458 1057 484 1045 q 392 1069 432 1069 q 354 1068 373 1069 q 323 1063 336 1066 l 323 1131 q 356 1138 337 1135 q 401 1140 375 1140 q 528 1109 484 1140 q 572 1016 572 1078 z "
  },
  "\u1EEE": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 m 251 1093 q 267 1165 255 1133 q 297 1219 278 1197 q 342 1254 316 1242 q 400 1265 368 1265 q 460 1253 431 1265 q 514 1224 488 1240 q 564 1196 540 1208 q 610 1183 588 1183 q 661 1203 643 1183 q 688 1267 679 1223 l 755 1267 q 708 1140 746 1187 q 606 1093 670 1093 q 548 1106 576 1093 q 494 1134 520 1118 q 444 1163 469 1150 q 395 1175 419 1175 q 345 1155 362 1175 q 317 1093 327 1135 l 251 1093 z "
  },
  "\u1EEF": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 m 170 844 q 185 916 174 884 q 216 970 197 948 q 261 1005 235 993 q 319 1017 287 1017 q 378 1004 350 1017 q 433 976 407 991 q 483 947 458 960 q 529 935 507 935 q 579 955 562 935 q 607 1018 597 975 l 673 1018 q 627 891 665 939 q 524 844 589 844 q 467 857 494 844 q 413 885 439 869 q 362 914 387 901 q 314 926 338 926 q 263 906 281 926 q 236 844 245 886 l 170 844 z "
  },
  "\u1EF0": {
    ha: 1073,
    x_min: 125,
    x_max: 1123,
    o: "m 886 991 l 886 856 q 953 889 930 863 q 986 957 977 915 q 995 1055 995 999 l 1114 1055 l 1123 1041 q 1100 948 1115 991 q 1058 869 1084 904 q 989 810 1031 834 q 886 776 947 787 l 886 350 q 846 163 886 245 q 724 34 806 81 q 511 -14 641 -14 q 224 86 323 -14 q 125 353 125 186 l 125 991 l 241 991 l 241 348 q 310 155 241 223 q 513 86 378 86 q 661 119 604 86 q 745 211 718 152 q 771 347 771 270 l 771 991 l 886 991 m 509 -238 q 461 -220 481 -238 q 441 -164 441 -201 q 461 -108 441 -126 q 509 -90 481 -90 q 558 -108 538 -90 q 578 -164 578 -126 q 558 -220 578 -201 q 509 -238 538 -238 z "
  },
  "\u1EF1": {
    ha: 920,
    x_min: 111,
    x_max: 965,
    o: "m 956 859 l 965 844 q 942 750 958 795 q 901 669 927 705 q 833 610 874 633 q 732 579 792 586 l 732 0 l 640 0 l 624 104 l 618 104 q 559 39 595 66 q 477 0 523 13 q 381 -14 432 -14 q 231 15 292 -14 q 141 103 171 43 q 111 256 111 163 l 111 742 l 224 742 l 224 264 q 267 126 224 172 q 395 80 309 80 q 569 150 518 80 q 619 352 619 220 l 619 742 l 732 742 l 732 659 q 798 694 776 667 q 829 762 821 720 q 837 859 837 804 l 956 859 m 405 -238 q 357 -220 376 -238 q 337 -164 337 -201 q 357 -108 337 -126 q 405 -90 376 -90 q 454 -108 434 -90 q 473 -164 473 -126 q 454 -220 473 -201 q 405 -238 434 -238 z "
  },
  "\u1EF4": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 386 -238 q 338 -220 357 -238 q 318 -164 318 -201 q 338 -108 318 -126 q 386 -90 357 -90 q 435 -108 415 -90 q 454 -164 454 -126 q 435 -220 454 -201 q 386 -238 415 -238 z "
  },
  "\u1EF5": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 522 -258 q 474 -240 494 -258 q 454 -184 454 -222 q 474 -129 454 -146 q 522 -111 494 -111 q 571 -129 551 -111 q 591 -184 591 -146 q 571 -240 591 -222 q 522 -258 551 -258 z "
  },
  "\u1EF6": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 538 1245 q 507 1164 538 1193 q 425 1124 475 1135 l 419 1048 l 349 1048 l 340 1166 q 421 1191 392 1175 q 451 1241 451 1208 q 425 1286 451 1274 q 359 1299 399 1299 q 321 1297 340 1299 q 290 1293 302 1295 l 290 1360 q 323 1367 304 1364 q 368 1369 342 1369 q 494 1338 450 1369 q 538 1245 538 1308 z "
  },
  "\u1EF7": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 493 1016 q 461 935 493 964 q 380 895 429 906 l 374 819 l 303 819 l 294 937 q 376 962 347 945 q 406 1012 406 979 q 379 1057 406 1045 q 313 1069 353 1069 q 276 1068 294 1069 q 245 1063 257 1066 l 245 1131 q 277 1138 258 1135 q 323 1140 296 1140 q 449 1109 405 1140 q 493 1016 493 1078 z "
  },
  "\u1EF8": {
    ha: 777,
    x_min: 0,
    x_max: 777,
    o: "m 389 494 l 652 991 l 777 991 l 446 385 l 446 0 l 331 0 l 331 379 l 0 991 l 126 991 l 389 494 m 132 1093 q 148 1165 136 1133 q 178 1219 159 1197 q 223 1254 197 1242 q 281 1265 250 1265 q 341 1253 313 1265 q 395 1224 370 1240 q 445 1196 421 1208 q 492 1183 469 1183 q 542 1203 524 1183 q 570 1267 560 1223 l 636 1267 q 589 1140 627 1187 q 487 1093 551 1093 q 429 1106 457 1093 q 376 1134 401 1118 q 325 1163 350 1150 q 277 1175 300 1175 q 226 1155 243 1175 q 199 1093 208 1135 l 132 1093 z "
  },
  "\u1EF9": {
    ha: 696,
    x_min: 1,
    x_max: 696,
    o: "m 1 743 l 122 743 l 286 312 q 313 239 300 274 q 334 172 325 204 q 349 111 344 140 l 354 111 q 381 200 363 144 q 419 313 399 255 l 574 743 l 696 743 l 372 -109 q 312 -229 347 -178 q 229 -307 278 -279 q 111 -334 180 -334 q 55 -331 79 -334 q 13 -322 31 -327 l 13 -232 q 49 -238 28 -235 q 94 -241 71 -241 q 166 -225 136 -241 q 220 -178 197 -209 q 258 -106 242 -148 l 299 -1 l 1 743 m 92 844 q 107 916 96 884 q 138 970 119 948 q 183 1005 157 993 q 241 1017 209 1017 q 300 1004 272 1017 q 355 976 329 991 q 405 947 380 960 q 451 935 429 935 q 502 955 484 935 q 529 1018 519 975 l 595 1018 q 549 891 587 939 q 446 844 511 844 q 389 857 416 844 q 335 885 361 869 q 284 914 309 901 q 236 926 260 926 q 185 906 203 926 q 158 844 168 886 l 92 844 z "
  },
  "\u20AB": {
    ha: 852,
    x_min: 77,
    x_max: 836,
    o: "m 383 -14 q 160 82 242 -14 q 77 366 77 178 q 161 657 77 561 q 385 753 245 753 q 488 738 444 753 q 564 696 532 722 q 618 637 596 669 l 626 637 q 620 694 623 658 q 618 755 618 731 l 618 844 l 317 844 l 317 929 l 618 929 l 618 1055 l 730 1055 l 730 929 l 836 929 l 836 844 l 730 844 l 730 0 l 638 0 l 622 106 l 616 106 q 564 45 595 73 q 487 2 532 18 q 383 -14 443 -14 m 401 80 q 570 147 521 80 q 618 347 618 214 l 618 368 q 572 585 618 511 q 401 660 525 660 q 246 582 297 660 q 195 366 195 504 q 245 154 195 229 q 401 80 296 80 m 774 -208 l 160 -208 l 160 -125 l 774 -125 l 774 -208 z "
  },
  "\u0162": {
    ha: 765,
    x_min: 12,
    x_max: 751,
    o: "m 440 0 l 324 0 l 324 890 l 12 890 l 12 991 l 751 991 l 751 890 l 440 890 l 440 0 m 518 -194 q 467 -297 518 -260 q 318 -334 416 -334 q 278 -331 297 -334 q 248 -326 259 -329 l 248 -255 q 281 -260 260 -258 q 321 -262 301 -262 q 399 -247 372 -262 q 427 -197 427 -232 q 390 -142 427 -159 q 298 -119 354 -125 l 358 0 l 433 0 l 397 -76 q 458 -97 431 -83 q 502 -135 486 -111 q 518 -194 518 -159 z "
  },
  "\u0163": {
    ha: 495,
    x_min: 22,
    x_max: 463,
    o: "m 359 79 q 416 83 387 79 q 463 95 445 88 l 463 7 q 409 -7 444 -1 q 340 -14 374 -14 q 233 7 281 -14 q 156 77 185 28 q 127 214 127 127 l 127 655 l 22 655 l 22 710 l 128 754 l 173 916 l 241 916 l 241 743 l 458 743 l 458 655 l 241 655 l 241 218 q 273 113 241 148 q 359 79 305 79 m 430 -194 q 379 -297 430 -260 q 230 -334 328 -334 q 190 -331 209 -334 q 159 -326 171 -329 l 159 -255 q 193 -260 172 -258 q 233 -262 213 -262 q 311 -247 284 -262 q 338 -197 338 -232 q 302 -142 338 -159 q 210 -119 266 -125 l 270 0 l 345 0 l 309 -76 q 370 -97 342 -83 q 414 -135 397 -111 q 430 -194 430 -159 z "
  },
  "\u01EA": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 530 -163 q 547 -212 530 -195 q 595 -229 564 -229 q 633 -225 617 -229 q 661 -220 650 -222 l 661 -293 q 623 -301 642 -298 q 576 -305 603 -305 q 471 -271 505 -305 q 437 -176 437 -237 q 456 -100 437 -137 q 506 -32 476 -63 q 566 20 536 -1 l 628 0 q 555 -81 581 -43 q 530 -163 530 -119 z "
  },
  "\u01EB": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 413 -163 q 430 -212 413 -195 q 478 -229 447 -229 q 517 -225 500 -229 q 545 -220 533 -222 l 545 -293 q 506 -301 526 -298 q 460 -305 486 -305 q 354 -271 389 -305 q 320 -176 320 -237 q 340 -100 320 -137 q 389 -32 359 -63 q 449 20 419 -1 l 511 0 q 438 -81 464 -43 q 413 -163 413 -119 z "
  },
  "\u01EC": {
    ha: 1080,
    x_min: 85,
    x_max: 996,
    o: "m 996 497 q 966 289 996 382 q 880 127 937 195 q 738 23 823 60 q 541 -14 653 -14 q 340 23 426 -14 q 198 127 254 60 q 113 290 141 195 q 85 498 85 384 q 135 765 85 650 q 287 943 185 880 q 543 1007 389 1007 q 791 944 690 1007 q 944 767 892 881 q 996 497 996 652 m 206 497 q 242 279 206 371 q 352 136 278 186 q 541 86 427 86 q 730 136 656 86 q 839 279 804 186 q 874 497 874 371 q 794 797 874 689 q 543 905 713 905 q 353 856 428 905 q 242 715 279 806 q 206 497 206 624 m 743 1183 l 743 1092 l 337 1092 l 337 1183 l 743 1183 m 549 -163 q 566 -212 549 -195 q 614 -229 583 -229 q 652 -225 636 -229 q 680 -220 669 -222 l 680 -293 q 642 -301 661 -298 q 595 -305 622 -305 q 490 -271 524 -305 q 456 -176 456 -237 q 475 -100 456 -137 q 525 -32 495 -63 q 585 20 555 -1 l 647 0 q 574 -81 600 -43 q 549 -163 549 -119 z "
  },
  "\u01ED": {
    ha: 836,
    x_min: 77,
    x_max: 760,
    o: "m 760 373 q 736 210 760 281 q 667 88 712 138 q 559 13 623 39 q 416 -14 496 -14 q 279 13 341 -14 q 172 88 217 39 q 102 210 127 138 q 77 373 77 281 q 119 581 77 495 q 237 712 160 667 q 420 757 314 757 q 598 711 522 757 q 717 580 675 666 q 760 373 760 494 m 194 373 q 218 218 194 283 q 291 116 241 152 q 418 80 340 80 q 546 116 496 80 q 619 218 595 152 q 643 373 643 283 q 619 527 643 462 q 546 627 595 591 q 418 662 496 662 q 248 585 302 662 q 194 373 194 509 m 621 934 l 621 843 l 214 843 l 214 934 l 621 934 m 413 -163 q 430 -212 413 -195 q 478 -229 447 -229 q 517 -225 500 -229 q 545 -220 533 -222 l 545 -293 q 506 -301 526 -298 q 460 -305 486 -305 q 354 -271 389 -305 q 320 -176 320 -237 q 340 -100 320 -137 q 389 -32 359 -63 q 449 20 419 -1 l 511 0 q 438 -81 464 -43 q 413 -163 413 -119 z "
  },
  "\u0259": {
    ha: 780,
    x_min: 72,
    x_max: 703,
    o: "m 347 757 q 534 713 454 757 q 659 585 614 669 q 703 377 703 500 q 662 170 703 257 q 548 34 622 82 q 375 -14 475 -14 q 212 28 280 -14 q 108 146 144 71 q 72 323 72 222 l 72 393 l 586 393 q 520 592 583 523 q 342 661 458 661 q 218 648 273 661 q 105 610 164 635 l 105 709 q 217 745 161 734 q 347 757 273 757 m 583 302 l 191 302 q 211 185 191 236 q 272 107 231 135 q 376 79 313 79 q 521 138 467 79 q 583 302 574 197 z "
  },
  "\u0309": {
    ha: 0,
    x_min: -517,
    x_max: -269,
    o: "m -269 1016 q -301 935 -269 964 q -382 895 -333 906 l -389 819 l -459 819 l -468 937 q -386 962 -416 945 q -357 1012 -357 979 q -383 1057 -357 1045 q -449 1069 -409 1069 q -487 1068 -468 1069 q -517 1063 -505 1066 l -517 1131 q -485 1138 -504 1135 q -439 1140 -466 1140 q -313 1109 -357 1140 q -269 1016 -269 1078 z "
  },
  "\u1F4D": {
    ha: 1295,
    x_min: 1,
    x_max: 1210,
    o: "m 1210 497 q 1181 289 1210 382 q 1094 127 1152 195 q 952 23 1037 60 q 755 -14 867 -14 q 554 23 640 -14 q 412 127 469 60 q 327 290 355 195 q 299 498 299 384 q 349 765 299 650 q 502 943 399 880 q 758 1007 604 1007 q 1005 944 905 1007 q 1158 767 1106 881 q 1210 497 1210 652 m 420 497 q 456 279 420 371 q 567 136 492 186 q 755 86 641 86 q 944 136 871 86 q 1053 279 1018 186 q 1088 497 1088 371 q 1008 797 1088 689 q 758 905 928 905 q 568 856 642 905 q 457 715 493 806 q 420 497 420 624 m 180 777 l 180 793 q 214 890 196 834 q 243 992 233 945 l 367 992 l 367 978 q 332 915 353 949 q 286 845 311 880 q 235 777 260 809 l 180 777 m 148 765 q 36 813 72 773 q 1 924 1 853 q 19 982 1 960 q 70 1004 38 1004 q 119 989 99 1004 q 138 941 138 974 q 133 913 138 924 q 118 893 127 901 q 96 882 109 886 q 68 878 83 878 q 86 836 68 855 q 148 813 104 817 l 148 765 z "
  },
  "\u1FDE": {
    ha: 807,
    x_min: 250,
    x_max: 616,
    o: "m 429 846 l 429 863 q 463 959 445 903 q 492 1061 481 1015 l 616 1061 l 616 1047 q 581 984 602 1019 q 534 914 559 949 q 484 846 509 878 l 429 846 m 397 834 q 285 882 321 842 q 250 993 250 922 q 268 1051 250 1029 q 319 1074 287 1074 q 368 1058 348 1074 q 387 1010 387 1043 q 382 982 387 994 q 367 963 376 970 q 345 951 357 955 q 317 947 332 947 q 335 905 317 924 q 397 882 353 886 l 397 834 z "
  },
  "\u2070": {
    ha: 483,
    x_min: 28,
    x_max: 454,
    o: "m 240 567 q 81 646 134 567 q 28 876 28 725 q 79 1104 28 1025 q 240 1184 130 1184 q 400 1105 347 1184 q 454 876 454 1027 q 404 648 454 728 q 240 567 353 567 m 240 648 q 332 704 302 648 q 361 876 361 760 q 332 1047 361 991 q 240 1103 302 1103 q 150 1047 179 1103 q 121 875 121 991 q 150 704 121 760 q 240 648 178 648 z "
  },
  "\u2076": {
    ha: 483,
    x_min: 28,
    x_max: 456,
    o: "m 324 1183 q 369 1181 345 1183 q 409 1174 393 1178 l 409 1097 q 369 1106 393 1102 q 319 1109 345 1109 q 200 1080 244 1109 q 137 1001 157 1051 q 113 889 117 951 l 119 889 q 177 939 138 919 q 273 960 215 960 q 406 911 355 960 q 456 774 456 863 q 431 664 456 710 q 359 592 406 617 q 249 567 312 567 q 136 596 186 567 q 57 684 86 625 q 28 831 28 743 q 41 965 28 901 q 87 1077 54 1028 q 178 1155 120 1126 q 324 1183 235 1183 m 251 888 q 181 873 211 888 q 134 835 151 859 q 117 785 117 812 q 132 716 117 749 q 176 662 146 683 q 247 641 205 641 q 335 674 301 641 q 368 772 368 707 q 338 857 368 826 q 251 888 309 888 z "
  },
  "\u2079": {
    ha: 483,
    x_min: 24,
    x_max: 453,
    o: "m 231 1186 q 344 1158 294 1186 q 424 1072 394 1130 q 453 923 453 1014 q 440 789 453 853 q 394 675 427 725 q 305 596 362 625 q 160 567 248 567 q 112 570 136 567 q 72 576 87 572 l 72 655 q 109 645 87 649 q 165 641 132 641 q 283 672 241 641 q 346 753 326 703 q 368 864 365 804 l 361 864 q 307 815 342 837 q 214 793 271 793 q 75 842 126 793 q 24 982 24 892 q 80 1129 24 1072 q 231 1186 137 1186 m 231 1112 q 146 1080 180 1112 q 112 985 112 1048 q 140 898 112 930 q 229 865 169 865 q 298 879 268 865 q 345 917 328 894 q 362 967 362 941 q 348 1041 362 1008 q 305 1093 334 1074 q 231 1112 276 1112 z "
  },
  "\uFB00": {
    ha: 935,
    x_min: 20,
    x_max: 998,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 m 917 655 l 732 655 l 732 0 l 619 0 l 619 655 l 488 655 l 488 709 l 619 747 l 619 796 q 647 948 619 890 q 728 1035 675 1007 q 857 1063 781 1063 q 935 1055 899 1063 q 998 1038 970 1048 l 968 949 q 917 963 945 957 q 858 970 888 970 q 763 928 793 970 q 732 798 732 886 l 732 743 l 917 743 l 917 655 z "
  },
  "\uFB01": {
    ha: 818,
    x_min: 20,
    x_max: 711,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 m 699 743 l 699 0 l 586 0 l 586 743 l 699 743 m 644 1021 q 691 1003 671 1021 q 711 947 711 985 q 691 892 711 910 q 644 873 671 873 q 595 892 614 873 q 576 947 576 910 q 595 1003 576 985 q 644 1021 614 1021 z "
  },
  "\uFB02": {
    ha: 818,
    x_min: 20,
    x_max: 699,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 m 699 0 l 586 0 l 586 1055 l 699 1055 l 699 0 z "
  },
  "\uFB03": {
    ha: 1284,
    x_min: 20,
    x_max: 1179,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 m 917 655 l 732 655 l 732 0 l 619 0 l 619 655 l 488 655 l 488 709 l 619 747 l 619 796 q 647 948 619 890 q 728 1035 675 1007 q 857 1063 781 1063 q 935 1055 899 1063 q 998 1038 970 1048 l 968 949 q 917 963 945 957 q 858 970 888 970 q 763 928 793 970 q 732 798 732 886 l 732 743 l 917 743 l 917 655 m 1166 743 l 1166 0 l 1053 0 l 1053 743 l 1166 743 m 1111 1021 q 1159 1003 1139 1021 q 1179 947 1179 985 q 1159 892 1179 910 q 1111 873 1139 873 q 1062 892 1082 873 q 1043 947 1043 910 q 1062 1003 1043 985 q 1111 1021 1082 1021 z "
  },
  "\uFB04": {
    ha: 1284,
    x_min: 20,
    x_max: 1166,
    o: "m 450 655 l 264 655 l 264 0 l 152 0 l 152 655 l 20 655 l 20 709 l 152 747 l 152 796 q 180 948 152 890 q 260 1035 208 1007 q 389 1063 313 1063 q 468 1055 432 1063 q 530 1038 503 1048 l 501 949 q 449 963 478 957 q 391 970 420 970 q 295 928 326 970 q 264 798 264 886 l 264 743 l 450 743 l 450 655 m 917 655 l 732 655 l 732 0 l 619 0 l 619 655 l 488 655 l 488 709 l 619 747 l 619 796 q 647 948 619 890 q 728 1035 675 1007 q 857 1063 781 1063 q 935 1055 899 1063 q 998 1038 970 1048 l 968 949 q 917 963 945 957 q 858 970 888 970 q 763 928 793 970 q 732 798 732 886 l 732 743 l 917 743 l 917 655 m 1166 0 l 1053 0 l 1053 1055 l 1166 1055 l 1166 0 z "
  },
  "\u1E9E": {
    ha: 977,
    x_min: 126,
    x_max: 927,
    o: "m 496 1006 q 652 978 587 1006 q 759 901 717 951 q 823 784 801 852 l 623 570 q 780 534 711 568 q 888 438 848 500 q 927 287 927 376 q 891 132 927 199 q 780 25 855 64 q 585 -13 704 -13 q 449 -1 512 -13 q 333 39 386 11 l 333 144 q 452 99 387 115 q 580 82 518 82 q 753 136 699 82 q 807 288 807 191 q 745 428 807 380 q 562 475 684 475 l 482 475 l 482 560 l 698 790 q 654 851 682 826 q 586 891 627 877 q 489 905 545 905 q 349 872 404 905 q 267 780 294 839 q 240 644 240 722 l 240 0 l 126 0 l 126 644 q 167 830 126 748 q 290 959 208 911 q 496 1006 372 1006 z "
  },
  "\uA7B3": {
    ha: 891,
    x_min: -18,
    x_max: 878,
    o: "m 133 1007 q 209 991 180 1007 q 258 943 237 976 q 298 857 278 909 l 448 494 l 705 991 l 829 991 l 498 370 l 695 -101 q 737 -188 720 -157 q 772 -229 754 -218 q 816 -240 791 -240 q 844 -238 827 -240 q 878 -232 861 -236 l 878 -317 q 833 -329 858 -325 q 782 -334 808 -334 q 694 -311 727 -334 q 637 -238 662 -288 q 580 -109 612 -189 l 432 252 l 106 -332 l -18 -332 l 379 376 l 208 791 q 165 882 184 851 q 110 913 146 913 q 80 911 97 913 q 43 901 64 908 l 43 987 q 84 1001 62 994 q 133 1007 105 1007 z "
  },
  "\uA7B4": {
    ha: 886,
    x_min: 132,
    x_max: 810,
    o: "m 132 991 l 422 991 q 699 929 612 991 q 785 743 785 867 q 762 639 785 684 q 696 565 739 594 q 594 525 654 536 l 594 519 q 712 480 664 509 q 785 404 760 452 q 810 286 810 356 q 765 126 810 189 q 640 31 720 62 q 453 0 560 0 l 248 0 l 248 -334 l 132 -334 l 132 991 m 248 564 l 435 564 q 612 607 557 564 q 667 734 667 650 q 605 859 667 819 q 419 899 543 899 l 248 899 l 248 564 m 248 472 l 248 94 l 448 94 q 629 144 570 94 q 689 292 689 195 q 661 391 689 351 q 577 452 633 431 q 435 472 522 472 l 248 472 z "
  },
  "\u0131": {
    ha: 351,
    x_min: 119,
    x_max: 231,
    o: "m 231 0 l 119 0 l 119 743 l 231 743 l 231 0 z "
  },
  "\u0237": {
    ha: 351,
    x_min: -76,
    x_max: 231,
    o: "m 29 -334 q -31 -329 -5 -334 q -76 -317 -57 -323 l -76 -225 q -33 -236 -55 -232 q 16 -239 -12 -239 q 90 -214 62 -239 q 119 -120 119 -188 l 119 743 l 231 743 l 231 -117 q 210 -234 231 -185 q 143 -308 188 -282 q 29 -334 98 -334 z "
  },
  "\uA7B5": {
    ha: 871,
    x_min: 119,
    x_max: 807,
    o: "m 449 1063 q 612 1033 541 1063 q 723 945 683 1004 q 764 799 764 886 q 710 640 764 699 q 555 564 656 581 l 555 558 q 743 476 679 544 q 807 283 807 408 q 767 122 807 189 q 651 22 726 56 q 469 -13 576 -13 q 334 1 390 -13 q 232 38 279 14 l 232 -334 l 119 -334 l 119 744 q 161 924 119 854 q 278 1029 203 995 q 449 1063 353 1063 m 446 968 q 338 947 387 968 q 261 876 290 926 q 232 738 232 825 l 232 140 q 335 96 281 113 q 460 80 389 80 q 638 135 581 80 q 694 290 694 190 q 664 411 694 363 q 579 482 634 459 q 448 505 524 505 l 374 505 l 374 601 l 435 601 q 596 653 545 601 q 648 793 648 705 q 593 924 648 880 q 446 968 539 968 z "
  },
  "\uAB53": {
    ha: 756,
    x_min: -11,
    x_max: 747,
    o: "m 119 749 q 191 730 163 749 q 239 676 218 711 q 279 588 259 640 l 380 331 l 597 743 l 717 743 l 429 222 l 561 -113 q 594 -184 578 -156 q 632 -226 610 -212 q 686 -240 654 -240 q 720 -238 704 -240 q 747 -235 735 -237 l 747 -322 q 713 -330 732 -326 q 665 -334 693 -334 q 568 -312 606 -334 q 505 -249 530 -290 q 458 -151 480 -208 l 354 122 l 110 -334 l -11 -334 l 302 235 l 182 543 q 140 627 163 597 q 83 656 117 656 q 58 654 70 656 q 37 648 46 652 l 37 737 q 71 745 51 742 q 119 749 92 749 z "
  },
  "\u2095": {
    ha: 553,
    x_min: 77,
    x_max: 480,
    o: "m 151 500 l 151 311 q 150 277 151 294 q 146 248 149 261 l 151 248 q 214 301 174 282 q 304 319 255 319 q 436 281 391 319 q 480 157 480 242 l 480 -134 l 408 -134 l 408 153 q 380 236 408 208 q 296 264 353 264 q 183 221 215 264 q 151 100 151 179 l 151 -134 l 77 -134 l 77 500 l 151 500 z "
  },
  "\u2096": {
    ha: 474,
    x_min: 77,
    x_max: 467,
    o: "m 150 500 l 150 171 q 149 131 150 155 q 146 90 147 108 l 149 90 q 176 121 159 100 q 207 155 194 142 l 367 313 l 453 313 l 259 122 l 467 -134 l 379 -134 l 208 77 l 150 28 l 150 -134 l 77 -134 l 77 500 l 150 500 z "
  },
  "\u2097": {
    ha: 229,
    x_min: 77,
    x_max: 151,
    o: "m 151 -134 l 77 -134 l 77 500 l 151 500 l 151 -134 z "
  },
  "\u2098": {
    ha: 836,
    x_min: 77,
    x_max: 763,
    o: "m 602 321 q 722 282 682 321 q 763 159 763 243 l 763 -134 l 690 -134 l 690 155 q 665 237 690 210 q 590 264 640 264 q 488 226 519 264 q 456 116 456 189 l 456 -134 l 384 -134 l 384 155 q 358 237 384 210 q 283 264 333 264 q 205 245 235 264 q 163 191 176 227 q 151 102 151 155 l 151 -134 l 77 -134 l 77 313 l 136 313 l 147 250 l 151 250 q 188 288 165 273 q 237 312 210 304 q 296 321 264 321 q 387 302 350 321 q 441 244 425 283 l 446 244 q 511 302 469 283 q 602 321 553 321 z "
  },
  "\u2099": {
    ha: 553,
    x_min: 77,
    x_max: 480,
    o: "m 306 321 q 436 282 392 321 q 480 157 480 243 l 480 -134 l 408 -134 l 408 153 q 380 236 408 208 q 296 264 353 264 q 183 222 216 264 q 151 100 151 180 l 151 -134 l 77 -134 l 77 313 l 136 313 l 147 248 l 151 248 q 216 302 174 283 q 306 321 257 321 z "
  },
  "\u209A": {
    ha: 552,
    x_min: 77,
    x_max: 502,
    o: "m 304 321 q 448 263 395 321 q 502 91 502 205 q 448 -83 502 -24 q 302 -142 393 -142 q 208 -121 245 -142 q 151 -73 171 -101 l 146 -73 q 149 -111 146 -88 q 151 -150 151 -133 l 151 -333 l 77 -333 l 77 313 l 138 313 l 147 246 l 151 246 q 208 299 172 277 q 304 321 243 321 m 292 264 q 184 223 216 264 q 151 103 152 183 l 151 90 q 182 -40 151 5 q 292 -85 213 -85 q 393 -36 359 -85 q 427 92 427 13 q 393 217 427 170 q 292 264 360 264 z "
  },
  "\u209B": {
    ha: 430,
    x_min: 45,
    x_max: 390,
    o: "m 390 -12 q 338 -109 390 -75 q 198 -142 287 -142 q 110 -134 147 -142 q 45 -114 73 -127 l 45 -52 q 116 -76 75 -65 q 199 -87 157 -87 q 291 -68 262 -87 q 319 -17 319 -50 q 308 15 319 1 q 270 42 296 29 q 197 71 243 56 q 116 104 150 87 q 64 143 83 120 q 46 203 46 166 q 96 290 46 260 q 226 321 145 321 q 308 313 270 321 q 379 291 346 304 l 355 237 q 290 257 324 249 q 221 265 256 265 q 144 250 171 265 q 117 208 117 234 q 129 173 117 186 q 170 148 142 159 q 243 120 197 136 q 321 89 288 105 q 372 48 354 72 q 390 -12 390 25 z "
  },
  "\u209C": {
    ha: 322,
    x_min: 14,
    x_max: 301,
    o: "m 233 -86 q 270 -83 252 -86 q 301 -77 289 -81 l 301 -129 q 266 -138 288 -134 q 221 -142 243 -142 q 123 -113 163 -142 q 83 -5 83 -83 l 83 260 l 14 260 l 14 292 l 83 319 l 113 416 l 157 416 l 157 313 l 298 313 l 298 260 l 157 260 l 157 -3 q 177 -65 157 -45 q 233 -86 198 -86 z "
  },
  "\u05D0": {
    ha: 817,
    x_min: 77,
    x_max: 739,
    o: "m 77 0 l 77 308 q 81 386 77 350 q 97 453 85 421 q 130 515 108 485 q 180 564 149 544 q 254 593 211 583 l 81 876 l 206 876 l 511 371 q 529 378 521 374 q 544 388 537 382 q 598 449 582 411 q 614 555 614 487 l 614 876 l 726 876 l 726 555 q 717 454 726 498 q 688 376 708 410 q 640 323 672 348 q 564 286 608 298 l 739 0 l 614 0 l 307 508 q 253 488 283 507 q 206 428 222 470 q 189 308 189 383 l 189 0 l 77 0 z "
  },
  "\u05D1": {
    ha: 726,
    x_min: 56,
    x_max: 697,
    o: "m 56 0 l 56 93 l 482 93 l 482 622 q 446 740 482 702 q 338 788 409 778 q 299 793 321 791 q 250 795 277 795 q 170 792 218 795 q 56 785 123 790 l 56 880 q 155 887 106 884 q 253 889 204 889 q 367 883 321 889 q 454 863 412 878 q 524 823 496 847 q 568 760 551 798 q 585 721 579 742 q 594 676 591 700 q 597 625 597 652 l 597 93 l 697 93 l 697 0 l 56 0 z "
  },
  "\u05D2": {
    ha: 563,
    x_min: 33,
    x_max: 452,
    o: "m 121 -5 q 81 -3 103 -5 q 33 3 59 -1 l 48 106 q 89 100 68 102 q 132 98 109 98 q 228 123 184 98 q 298 195 271 149 q 327 266 317 227 q 337 353 337 305 l 337 667 q 319 760 337 725 q 246 794 302 794 q 196 791 222 794 q 138 781 170 787 l 138 876 q 257 889 197 889 q 337 878 303 889 q 393 847 370 867 q 438 774 425 819 q 452 671 452 728 l 452 0 l 360 0 l 346 140 l 339 140 q 308 92 324 114 q 277 57 292 71 q 209 11 248 27 q 121 -5 169 -5 z "
  },
  "\u05D3": {
    ha: 701,
    x_min: 30,
    x_max: 671,
    o: "m 419 0 l 419 607 q 428 674 419 644 q 450 724 437 705 q 477 759 464 746 q 507 783 490 772 l 30 783 l 30 876 l 671 876 l 671 792 q 609 763 637 780 q 564 720 581 746 q 534 606 534 678 l 534 0 l 419 0 z "
  },
  "\u05D4": {
    ha: 872,
    x_min: 119,
    x_max: 760,
    o: "m 645 0 l 645 622 q 609 739 645 701 q 503 787 574 777 q 461 793 486 791 q 403 795 435 795 q 291 791 360 795 q 119 778 221 787 l 119 873 q 181 878 151 876 q 240 882 212 880 q 337 887 294 886 q 413 889 380 889 q 537 882 490 889 q 627 858 585 876 q 697 813 669 840 q 741 743 725 786 q 756 687 751 716 q 760 622 760 658 l 760 0 l 645 0 m 119 0 l 119 542 l 233 542 l 233 0 l 119 0 z "
  },
  "\u05D5": {
    ha: 352,
    x_min: 119,
    x_max: 233,
    o: "m 119 0 l 119 876 l 233 876 l 233 0 l 119 0 z "
  },
  "\u05D6": {
    ha: 369,
    x_min: 42,
    x_max: 347,
    o: "m 124 0 l 124 494 q 136 605 124 553 q 167 693 147 656 q 199 745 183 723 q 233 783 216 768 l 42 783 l 42 876 l 347 876 l 347 791 q 320 765 332 781 q 296 731 307 749 q 276 693 285 713 q 257 638 265 668 q 245 579 250 608 q 240 539 241 560 q 238 494 238 517 l 238 0 l 124 0 z "
  },
  "\u05D7": {
    ha: 872,
    x_min: 119,
    x_max: 760,
    o: "m 119 0 l 119 873 q 146 876 127 874 q 195 880 165 877 q 312 887 258 884 q 411 889 366 889 q 537 882 489 889 q 627 859 585 876 q 697 814 669 841 q 741 744 725 787 q 756 688 751 718 q 760 622 760 659 l 760 0 l 645 0 l 645 622 q 608 742 645 703 q 496 790 570 781 q 457 793 481 792 q 404 795 434 795 q 330 793 372 795 q 233 787 287 791 l 233 0 l 119 0 z "
  },
  "\u05D8": {
    ha: 869,
    x_min: 112,
    x_max: 795,
    o: "m 452 -14 q 361 -4 404 -14 q 282 26 317 5 q 215 80 245 47 q 163 159 185 113 q 124 283 137 214 q 112 441 112 353 l 112 876 l 227 876 l 227 441 q 244 266 227 338 q 298 149 262 193 q 362 100 323 118 q 452 83 401 83 q 545 101 505 83 q 610 153 585 120 q 664 280 650 203 q 677 440 677 357 q 665 596 677 522 q 616 720 652 670 q 545 777 587 759 q 454 794 503 794 q 426 792 440 794 q 398 788 412 791 l 398 883 q 436 888 417 886 q 472 889 454 889 q 562 879 519 889 q 639 848 604 869 q 704 793 675 827 q 751 713 732 760 q 784 593 772 661 q 795 441 795 526 q 787 314 795 372 q 762 208 779 256 q 708 102 741 146 q 628 31 674 58 q 547 -2 591 9 q 452 -14 503 -14 z "
  },
  "\u05D9": {
    ha: 334,
    x_min: 110,
    x_max: 224,
    o: "m 110 317 l 110 876 l 224 876 l 224 419 l 142 317 l 110 317 z "
  },
  "\u05DA": {
    ha: 685,
    x_min: 23,
    x_max: 574,
    o: "m 458 -334 l 458 488 q 448 602 458 551 q 414 692 437 652 q 387 729 403 713 q 353 758 372 746 q 214 795 300 795 q 155 792 183 795 q 102 783 127 789 q 62 774 86 781 q 23 764 37 767 l 23 861 q 62 871 40 867 q 113 880 85 876 q 172 886 141 884 q 237 888 203 888 q 368 865 307 888 q 467 804 429 842 q 502 762 486 785 q 530 713 517 739 q 563 609 552 665 q 574 488 574 553 l 574 -334 l 458 -334 z "
  },
  "\u05DB": {
    ha: 673,
    x_min: 47,
    x_max: 599,
    o: "m 262 -14 q 148 -8 200 -14 q 47 9 96 -2 l 47 113 q 104 99 70 106 q 177 87 138 92 q 253 83 216 83 q 332 95 297 83 q 391 127 367 107 q 431 172 414 146 q 458 224 448 197 q 476 289 468 251 q 484 368 484 326 l 484 488 q 468 623 484 563 q 419 722 452 682 q 343 777 389 758 q 239 795 297 795 q 159 789 199 795 q 77 772 119 783 q 58 766 66 768 q 47 764 51 764 l 47 861 q 88 873 69 869 q 134 881 107 877 q 194 887 161 885 q 262 888 226 888 q 392 865 331 888 q 492 804 454 842 q 526 762 511 785 q 555 713 542 739 q 579 645 570 681 q 594 571 589 610 q 599 488 599 532 l 599 368 q 590 260 599 310 q 562 168 581 211 q 524 104 547 132 q 471 55 502 76 q 368 0 424 13 q 262 -14 311 -14 z "
  },
  "\u05DC": {
    ha: 673,
    x_min: 37,
    x_max: 618,
    o: "m 313 0 l 377 335 l 506 781 l 37 781 l 37 1061 l 151 1061 l 151 879 l 618 879 l 618 782 l 492 340 l 427 0 l 313 0 z "
  },
  "\u05DD": {
    ha: 867,
    x_min: 114,
    x_max: 755,
    o: "m 114 0 l 114 873 q 141 876 122 874 q 189 879 160 877 q 307 887 252 884 q 406 889 361 889 q 534 882 486 889 q 627 857 583 875 q 692 814 666 840 q 736 748 719 789 q 751 695 746 724 q 755 631 755 666 l 755 0 l 114 0 m 229 93 l 640 93 l 640 633 q 629 707 640 677 q 593 755 617 736 q 551 778 576 770 q 495 790 526 787 q 455 794 479 793 q 399 795 431 795 q 325 793 368 795 q 229 787 282 791 l 229 93 z "
  },
  "\u05DE": {
    ha: 862,
    x_min: 67,
    x_max: 743,
    o: "m 67 0 l 128 652 q 130 674 130 665 q 130 694 130 684 q 128 732 130 714 q 120 773 125 750 q 113 796 119 780 q 103 827 108 812 q 96 847 98 842 q 91 863 94 855 q 85 879 87 871 l 195 879 q 216 828 208 852 q 228 785 224 805 l 237 785 q 272 819 245 798 q 324 852 298 839 q 394 878 351 867 q 487 889 437 889 q 570 878 532 889 q 636 846 607 866 q 673 812 656 831 q 702 772 690 793 q 733 685 722 734 q 743 576 743 635 l 743 0 l 444 0 l 444 93 l 629 93 l 629 576 q 617 668 629 628 q 583 735 606 709 q 551 766 569 753 q 510 786 533 779 q 456 793 486 793 q 374 781 413 793 q 312 751 336 768 q 272 714 290 734 q 243 672 254 694 l 180 0 l 67 0 z "
  },
  "\u05DF": {
    ha: 345,
    x_min: 68,
    x_max: 227,
    o: "m 113 -331 l 113 600 q 109 687 113 644 q 96 771 104 730 q 77 848 88 812 q 73 862 75 855 q 68 876 71 869 l 183 876 q 189 858 186 868 q 195 835 192 848 q 208 778 201 818 q 221 690 216 739 q 227 600 227 642 l 227 -331 l 113 -331 z "
  },
  "\u05E0": {
    ha: 598,
    x_min: 79,
    x_max: 494,
    o: "m 79 0 l 79 93 l 364 93 q 376 166 372 130 q 380 237 380 202 l 380 667 q 372 726 380 700 q 347 769 363 752 q 318 787 334 781 q 279 794 301 794 q 224 791 252 794 q 165 783 195 788 l 165 879 q 221 887 191 884 q 286 889 251 889 q 355 882 326 889 q 406 861 384 874 q 441 829 426 848 q 467 788 456 810 q 487 734 480 764 q 494 667 494 703 l 494 237 q 491 165 494 203 q 483 92 488 127 q 473 35 478 57 l 467 0 l 79 0 z "
  },
  "\u05E1": {
    ha: 832,
    x_min: 75,
    x_max: 758,
    o: "m 416 -14 q 252 24 321 -14 q 166 96 203 51 q 108 207 130 142 q 83 313 92 254 q 75 439 75 371 q 87 584 75 519 q 125 699 100 649 q 189 785 151 749 l 191 787 l 87 782 l 87 878 q 206 884 149 882 q 316 888 263 886 q 416 889 368 889 q 519 876 471 889 q 606 834 567 862 q 669 775 642 810 q 716 692 697 739 q 748 579 737 642 q 758 439 758 516 q 752 328 758 380 q 732 232 745 276 q 674 109 711 160 q 586 28 637 58 q 416 -14 514 -14 m 416 82 q 509 101 469 82 q 574 154 549 120 q 613 233 599 186 q 634 333 628 279 q 640 439 640 387 q 614 641 640 568 q 547 751 589 715 q 490 783 524 772 q 420 795 457 795 q 359 794 385 795 q 306 791 333 793 q 220 646 248 731 q 193 439 193 561 q 209 268 193 339 q 258 154 225 196 q 323 101 283 120 q 416 82 363 82 z "
  },
  "\u05E2": {
    ha: 818,
    x_min: 41,
    x_max: 773,
    o: "m 41 -37 l 41 58 l 222 85 q 261 92 241 88 q 301 102 281 96 l 96 876 l 209 876 l 313 483 l 394 138 q 507 221 458 169 q 588 342 557 273 q 628 494 619 411 l 665 876 l 773 876 l 736 497 q 716 389 731 440 q 678 291 702 337 q 621 203 654 244 q 473 68 565 121 q 258 -4 382 14 q 142 -21 197 -14 q 41 -37 88 -29 z "
  },
  "\u05E3": {
    ha: 848,
    x_min: 60,
    x_max: 736,
    o: "m 621 -334 l 621 438 q 604 610 621 539 q 555 723 587 682 q 487 776 528 759 q 395 793 446 793 q 297 777 344 793 q 223 726 251 760 q 183 660 197 697 q 169 582 169 623 q 185 488 169 528 q 233 423 201 448 q 279 398 253 408 q 336 382 304 388 l 357 379 l 338 294 l 321 295 q 208 319 259 295 q 122 387 157 343 q 77 473 93 423 q 60 583 60 522 q 82 700 60 646 q 140 791 104 754 q 183 827 157 809 q 232 855 210 844 q 310 881 269 872 q 394 889 350 889 q 492 878 447 889 q 574 843 538 867 q 636 791 608 823 q 684 718 663 760 q 723 595 709 665 q 736 438 736 525 l 736 -334 l 621 -334 z "
  },
  "\u05E4": {
    ha: 825,
    x_min: 75,
    x_max: 749,
    o: "m 406 -14 q 325 -12 364 -14 q 253 -8 286 -11 q 195 -2 220 -5 l 167 1 l 167 94 q 288 84 228 87 q 408 81 348 81 q 496 98 458 81 q 560 143 535 115 q 603 219 587 173 q 625 315 618 265 q 629 375 628 346 q 631 438 631 404 q 625 546 631 498 q 606 640 620 594 q 567 719 591 686 q 505 772 543 753 q 460 788 484 783 q 410 793 437 793 q 318 779 358 793 q 253 743 277 765 q 201 670 220 713 q 182 582 182 627 q 198 492 182 532 q 241 425 214 451 q 291 394 264 405 q 350 382 318 382 l 370 379 l 352 294 l 334 295 q 264 304 297 296 q 203 329 231 313 q 156 365 178 344 q 119 411 134 385 q 86 488 97 445 q 75 581 75 531 q 101 713 75 654 q 172 808 128 772 q 281 869 221 849 q 408 889 342 889 q 511 876 464 889 q 597 838 559 863 q 653 788 627 818 q 696 720 678 758 q 736 596 722 667 q 749 438 749 526 q 734 270 749 343 q 691 143 719 196 q 638 74 669 103 q 572 27 608 45 q 496 -3 538 7 q 406 -14 454 -14 z "
  },
  "\u05E5": {
    ha: 671,
    x_min: 2,
    x_max: 596,
    o: "m 186 -334 l 186 378 l 2 876 l 121 876 l 295 393 q 335 404 315 398 q 374 414 355 409 q 453 475 425 427 q 482 602 482 524 l 482 876 l 596 876 l 596 599 q 581 485 596 535 q 537 400 566 435 q 475 352 514 374 q 385 320 436 330 l 301 299 l 301 -334 l 186 -334 z "
  },
  "\u05E6": {
    ha: 774,
    x_min: 54,
    x_max: 705,
    o: "m 56 0 l 56 93 l 475 93 l 561 92 l 353 394 l 54 876 l 178 876 l 418 479 l 455 421 q 541 544 509 475 q 581 696 572 613 l 597 876 l 705 876 l 689 703 q 682 650 686 675 q 672 602 678 625 q 658 556 666 578 q 636 504 649 529 q 609 454 624 479 q 566 392 589 421 q 514 337 542 362 l 701 68 l 701 0 l 56 0 z "
  },
  "\u05E7": {
    ha: 827,
    x_min: 119,
    x_max: 783,
    o: "m 461 0 q 461 9 461 5 q 461 18 461 14 q 473 109 461 53 q 499 223 485 165 q 510 266 503 238 q 527 328 517 294 q 545 391 536 361 l 663 783 l 119 783 l 119 876 l 783 876 l 783 794 l 661 390 q 649 351 657 379 q 632 292 641 322 q 619 244 624 262 q 606 196 614 227 q 591 130 599 165 q 579 65 584 96 q 574 18 574 35 l 574 0 l 461 0 m 119 -334 l 119 518 l 233 518 l 233 -334 l 119 -334 z "
  },
  "\u05E8": {
    ha: 694,
    x_min: 30,
    x_max: 585,
    o: "m 470 0 l 470 622 q 433 740 470 702 q 324 789 397 779 q 289 793 308 792 q 248 795 269 795 q 182 794 221 795 q 102 790 142 793 q 30 786 61 788 l 30 881 q 140 887 90 885 q 232 889 191 889 q 361 882 313 889 q 452 858 410 876 q 522 813 494 840 q 566 743 549 787 q 580 687 576 716 q 585 622 585 658 l 585 0 l 470 0 z "
  },
  "\u05E9": {
    ha: 982,
    x_min: 56,
    x_max: 932,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 z "
  },
  "\u05EA": {
    ha: 882,
    x_min: 27,
    x_max: 765,
    o: "m 91 -3 q 62 0 77 -3 q 27 8 46 3 l 27 96 q 82 92 53 92 q 156 124 131 92 q 181 222 181 156 l 181 785 q 132 781 157 783 q 83 778 108 779 l 83 873 q 210 882 152 878 q 317 887 269 886 q 406 889 366 889 q 510 886 468 889 q 583 874 552 882 q 642 853 614 866 q 707 808 682 835 q 748 740 732 782 q 761 687 757 716 q 765 625 765 659 l 765 0 l 651 0 l 651 622 q 614 741 651 703 q 503 789 576 779 q 419 795 472 795 q 363 794 394 795 q 296 791 332 793 l 296 222 q 291 154 296 185 q 273 97 286 123 q 226 35 256 58 q 168 6 201 16 q 91 -3 134 -3 z "
  },
  "\uFB2A": {
    ha: 982,
    x_min: 56,
    x_max: 932,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 m 882 946 q 836 998 836 946 q 848 1038 836 1025 q 882 1051 860 1051 q 919 1038 906 1051 q 931 998 931 1024 q 919 959 931 972 q 882 946 906 946 z "
  },
  "\uFB2B": {
    ha: 982,
    x_min: 52,
    x_max: 932,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 m 98 945 q 63 958 75 945 q 52 997 52 971 q 63 1037 52 1023 q 98 1050 75 1050 q 134 1036 122 1050 q 146 997 146 1023 q 134 958 146 971 q 98 945 122 945 z "
  },
  "\uFB2C": {
    ha: 982,
    x_min: 56,
    x_max: 934,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 m 544 252 q 498 304 498 252 q 510 343 498 330 q 544 357 522 357 q 580 343 568 357 q 593 304 593 330 q 580 265 593 279 q 544 252 568 252 m 885 946 q 839 998 839 946 q 851 1038 839 1025 q 885 1051 863 1051 q 921 1038 909 1051 q 934 998 934 1024 q 921 959 934 972 q 885 946 909 946 z "
  },
  "\uFB2D": {
    ha: 982,
    x_min: 54,
    x_max: 932,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 m 544 252 q 498 304 498 252 q 510 343 498 330 q 544 357 522 357 q 580 343 568 357 q 593 304 593 330 q 580 265 593 279 q 544 252 568 252 m 100 945 q 66 958 77 945 q 54 997 54 971 q 66 1037 54 1023 q 100 1050 78 1050 q 137 1036 125 1050 q 149 997 149 1023 q 137 958 149 971 q 100 945 125 945 z "
  },
  "\uFB2E": {
    ha: 817,
    x_min: 77,
    x_max: 739,
    o: "m 77 0 l 77 308 q 81 386 77 350 q 97 453 85 421 q 130 515 108 485 q 180 564 149 544 q 254 593 211 583 l 81 876 l 206 876 l 511 371 q 529 378 521 374 q 544 388 537 382 q 598 449 582 411 q 614 555 614 487 l 614 876 l 726 876 l 726 555 q 717 454 726 498 q 688 376 708 410 q 640 323 672 348 q 564 286 608 298 l 739 0 l 614 0 l 307 508 q 253 488 283 507 q 206 428 222 470 q 189 308 189 383 l 189 0 l 77 0 m 282 -151 l 282 -95 l 530 -95 l 530 -151 l 282 -151 z "
  },
  "\uFB2F": {
    ha: 817,
    x_min: 77,
    x_max: 739,
    o: "m 77 0 l 77 308 q 81 386 77 350 q 97 453 85 421 q 130 515 108 485 q 180 564 149 544 q 254 593 211 583 l 81 876 l 206 876 l 511 371 q 529 378 521 374 q 544 388 537 382 q 598 449 582 411 q 614 555 614 487 l 614 876 l 726 876 l 726 555 q 717 454 726 498 q 688 376 708 410 q 640 323 672 348 q 564 286 608 298 l 739 0 l 614 0 l 307 508 q 253 488 283 507 q 206 428 222 470 q 189 308 189 383 l 189 0 l 77 0 m 378 -288 l 378 -151 l 282 -151 l 282 -95 l 528 -95 l 528 -151 l 433 -151 l 433 -288 l 378 -288 z "
  },
  "\uFB30": {
    ha: 817,
    x_min: 77,
    x_max: 739,
    o: "m 77 0 l 77 308 q 81 386 77 350 q 97 453 85 421 q 130 515 108 485 q 180 564 149 544 q 254 593 211 583 l 81 876 l 206 876 l 511 371 q 529 378 521 374 q 544 388 537 382 q 598 449 582 411 q 614 555 614 487 l 614 876 l 726 876 l 726 555 q 717 454 726 498 q 688 376 708 410 q 640 323 672 348 q 564 286 608 298 l 739 0 l 614 0 l 307 508 q 253 488 283 507 q 206 428 222 470 q 189 308 189 383 l 189 0 l 77 0 m 326 167 q 279 219 279 167 q 291 259 279 245 q 326 272 303 272 q 362 258 349 272 q 374 219 374 245 q 362 180 374 194 q 326 167 349 167 z "
  },
  "\uFB31": {
    ha: 726,
    x_min: 56,
    x_max: 697,
    o: "m 56 0 l 56 93 l 482 93 l 482 622 q 446 740 482 702 q 338 788 409 778 q 299 793 321 791 q 250 795 277 795 q 170 792 218 795 q 56 785 123 790 l 56 880 q 155 887 106 884 q 253 889 204 889 q 367 883 321 889 q 454 863 412 878 q 524 823 496 847 q 568 760 551 798 q 585 721 579 742 q 594 676 591 700 q 597 625 597 652 l 597 93 l 697 93 l 697 0 l 56 0 m 258 399 q 212 452 212 399 q 224 491 212 478 q 258 505 236 505 q 295 491 282 505 q 307 452 307 477 q 295 413 307 427 q 258 399 282 399 z "
  },
  "\uFB32": {
    ha: 563,
    x_min: 33,
    x_max: 452,
    o: "m 121 -5 q 81 -3 103 -5 q 33 3 59 -1 l 48 106 q 89 100 68 102 q 132 98 109 98 q 228 123 184 98 q 298 195 271 149 q 327 266 317 227 q 337 353 337 305 l 337 667 q 319 760 337 725 q 246 794 302 794 q 196 791 222 794 q 138 781 170 787 l 138 876 q 257 889 197 889 q 337 878 303 889 q 393 847 370 867 q 438 774 425 819 q 452 671 452 728 l 452 0 l 360 0 l 346 140 l 339 140 q 308 92 324 114 q 277 57 292 71 q 209 11 248 27 q 121 -5 169 -5 m 172 399 q 126 452 126 399 q 138 491 126 478 q 172 505 150 505 q 209 491 196 505 q 221 452 221 477 q 209 413 221 427 q 172 399 196 399 z "
  },
  "\uFB33": {
    ha: 701,
    x_min: 30,
    x_max: 671,
    o: "m 419 0 l 419 607 q 428 674 419 644 q 450 724 437 705 q 477 759 464 746 q 507 783 490 772 l 30 783 l 30 876 l 671 876 l 671 792 q 609 763 637 780 q 564 720 581 746 q 534 606 534 678 l 534 0 l 419 0 m 237 399 q 191 452 191 399 q 202 491 191 478 q 237 505 214 505 q 273 491 260 505 q 286 452 286 477 q 273 413 286 427 q 237 399 260 399 z "
  },
  "\uFB34": {
    ha: 872,
    x_min: 119,
    x_max: 760,
    o: "m 645 0 l 645 622 q 609 739 645 701 q 503 787 574 777 q 461 793 486 791 q 403 795 435 795 q 291 791 360 795 q 119 778 221 787 l 119 873 q 181 878 151 876 q 240 882 212 880 q 337 887 294 886 q 413 889 380 889 q 537 882 490 889 q 627 858 585 876 q 697 813 669 840 q 741 743 725 786 q 756 687 751 716 q 760 622 760 658 l 760 0 l 645 0 m 119 0 l 119 542 l 233 542 l 233 0 l 119 0 m 434 399 q 388 452 388 399 q 400 491 388 478 q 434 505 412 505 q 470 491 458 505 q 483 452 483 477 q 470 413 483 427 q 434 399 458 399 z "
  },
  "\uFB35": {
    ha: 352,
    x_min: -45,
    x_max: 233,
    o: "m 119 0 l 119 876 l 233 876 l 233 0 l 119 0 m 1 399 q -45 452 -45 399 q -33 491 -45 478 q 1 505 -21 505 q 38 491 25 505 q 50 452 50 477 q 38 413 50 427 q 1 399 25 399 z "
  },
  "\uFB36": {
    ha: 369,
    x_min: -39,
    x_max: 347,
    o: "m 124 0 l 124 494 q 136 605 124 553 q 167 693 147 656 q 199 745 183 723 q 233 783 216 768 l 42 783 l 42 876 l 347 876 l 347 791 q 320 765 332 781 q 296 731 307 749 q 276 693 285 713 q 257 638 265 668 q 245 579 250 608 q 240 539 241 560 q 238 494 238 517 l 238 0 l 124 0 m 7 400 q -39 452 -39 400 q -27 492 -39 479 q 7 505 -15 505 q 44 492 31 505 q 56 452 56 478 q 44 414 56 427 q 7 400 31 400 z "
  },
  "\uFB38": {
    ha: 869,
    x_min: 112,
    x_max: 795,
    o: "m 452 -14 q 361 -4 404 -14 q 282 26 317 5 q 215 80 245 47 q 163 159 185 113 q 124 283 137 214 q 112 441 112 353 l 112 876 l 227 876 l 227 441 q 244 266 227 338 q 298 149 262 193 q 362 100 323 118 q 452 83 401 83 q 545 101 505 83 q 610 153 585 120 q 664 280 650 203 q 677 440 677 357 q 665 596 677 522 q 616 720 652 670 q 545 777 587 759 q 454 794 503 794 q 426 792 440 794 q 398 788 412 791 l 398 883 q 436 888 417 886 q 472 889 454 889 q 562 879 519 889 q 639 848 604 869 q 704 793 675 827 q 751 713 732 760 q 784 593 772 661 q 795 441 795 526 q 787 314 795 372 q 762 208 779 256 q 708 102 741 146 q 628 31 674 58 q 547 -2 591 9 q 452 -14 503 -14 m 446 399 q 399 452 399 399 q 411 491 399 478 q 446 505 423 505 q 482 491 469 505 q 494 452 494 477 q 482 413 494 427 q 446 399 469 399 z "
  },
  "\uFB39": {
    ha: 334,
    x_min: -41,
    x_max: 224,
    o: "m 110 317 l 110 876 l 224 876 l 224 419 l 142 317 l 110 317 m 5 562 q -41 614 -41 562 q -30 653 -41 640 q 5 667 -18 667 q 41 653 28 667 q 54 614 54 640 q 41 575 54 589 q 5 562 28 562 z "
  },
  "\uFB3A": {
    ha: 685,
    x_min: 23,
    x_max: 574,
    o: "m 458 -334 l 458 488 q 448 602 458 551 q 414 692 437 652 q 387 729 403 713 q 353 758 372 746 q 214 795 300 795 q 155 792 183 795 q 102 783 127 789 q 62 774 86 781 q 23 764 37 767 l 23 861 q 62 871 40 867 q 113 880 85 876 q 172 886 141 884 q 237 888 203 888 q 368 865 307 888 q 467 804 429 842 q 502 762 486 785 q 530 713 517 739 q 563 609 552 665 q 574 488 574 553 l 574 -334 l 458 -334 m 235 400 q 189 452 189 400 q 201 492 189 479 q 235 505 213 505 q 272 492 259 505 q 284 452 284 478 q 272 414 284 427 q 235 400 259 400 z "
  },
  "\uFB3B": {
    ha: 673,
    x_min: 47,
    x_max: 599,
    o: "m 262 -14 q 148 -8 200 -14 q 47 9 96 -2 l 47 113 q 104 99 70 106 q 177 87 138 92 q 253 83 216 83 q 332 95 297 83 q 391 127 367 107 q 431 172 414 146 q 458 224 448 197 q 476 289 468 251 q 484 368 484 326 l 484 488 q 468 623 484 563 q 419 722 452 682 q 343 777 389 758 q 239 795 297 795 q 159 789 199 795 q 77 772 119 783 q 58 766 66 768 q 47 764 51 764 l 47 861 q 88 873 69 869 q 134 881 107 877 q 194 887 161 885 q 262 888 226 888 q 392 865 331 888 q 492 804 454 842 q 526 762 511 785 q 555 713 542 739 q 579 645 570 681 q 594 571 589 610 q 599 488 599 532 l 599 368 q 590 260 599 310 q 562 168 581 211 q 524 104 547 132 q 471 55 502 76 q 368 0 424 13 q 262 -14 311 -14 m 240 400 q 194 452 194 400 q 206 492 194 479 q 240 505 218 505 q 276 492 264 505 q 289 452 289 478 q 276 414 289 427 q 240 400 264 400 z "
  },
  "\uFB3C": {
    ha: 673,
    x_min: 37,
    x_max: 618,
    o: "m 313 0 l 377 335 l 506 781 l 37 781 l 37 1061 l 151 1061 l 151 879 l 618 879 l 618 782 l 492 340 l 427 0 l 313 0 m 217 399 q 171 452 171 399 q 183 491 171 478 q 217 505 195 505 q 253 491 241 505 q 266 452 266 477 q 253 413 266 427 q 217 399 241 399 z "
  },
  "\uFB3E": {
    ha: 862,
    x_min: 67,
    x_max: 743,
    o: "m 67 0 l 128 652 q 130 674 130 665 q 130 694 130 684 q 128 732 130 714 q 120 773 125 750 q 113 796 119 780 q 103 827 108 812 q 96 847 98 842 q 91 863 94 855 q 85 879 87 871 l 195 879 q 216 828 208 852 q 228 785 224 805 l 237 785 q 272 819 245 798 q 324 852 298 839 q 394 878 351 867 q 487 889 437 889 q 570 878 532 889 q 636 846 607 866 q 673 812 656 831 q 702 772 690 793 q 733 685 722 734 q 743 576 743 635 l 743 0 l 444 0 l 444 93 l 629 93 l 629 576 q 617 668 629 628 q 583 735 606 709 q 551 766 569 753 q 510 786 533 779 q 456 793 486 793 q 374 781 413 793 q 312 751 336 768 q 272 714 290 734 q 243 672 254 694 l 180 0 l 67 0 m 427 399 q 380 452 380 399 q 392 491 380 478 q 427 505 404 505 q 463 491 450 505 q 475 452 475 477 q 463 413 475 427 q 427 399 450 399 z "
  },
  "\uFB40": {
    ha: 598,
    x_min: 79,
    x_max: 494,
    o: "m 79 0 l 79 93 l 364 93 q 376 166 372 130 q 380 237 380 202 l 380 667 q 372 726 380 700 q 347 769 363 752 q 318 787 334 781 q 279 794 301 794 q 224 791 252 794 q 165 783 195 788 l 165 879 q 221 887 191 884 q 286 889 251 889 q 355 882 326 889 q 406 861 384 874 q 441 829 426 848 q 467 788 456 810 q 487 734 480 764 q 494 667 494 703 l 494 237 q 491 165 494 203 q 483 92 488 127 q 473 35 478 57 l 467 0 l 79 0 m 235 400 q 189 452 189 400 q 200 492 189 479 q 235 505 212 505 q 271 492 258 505 q 283 452 283 478 q 271 414 283 427 q 235 400 258 400 z "
  },
  "\uFB41": {
    ha: 832,
    x_min: 75,
    x_max: 758,
    o: "m 416 -14 q 252 24 321 -14 q 166 96 203 51 q 108 207 130 142 q 83 313 92 254 q 75 439 75 371 q 87 584 75 519 q 125 699 100 649 q 189 785 151 749 l 191 787 l 87 782 l 87 878 q 206 884 149 882 q 316 888 263 886 q 416 889 368 889 q 519 876 471 889 q 606 834 567 862 q 669 775 642 810 q 716 692 697 739 q 748 579 737 642 q 758 439 758 516 q 752 328 758 380 q 732 232 745 276 q 674 109 711 160 q 586 28 637 58 q 416 -14 514 -14 m 416 82 q 509 101 469 82 q 574 154 549 120 q 613 233 599 186 q 634 333 628 279 q 640 439 640 387 q 614 641 640 568 q 547 751 589 715 q 490 783 524 772 q 420 795 457 795 q 359 794 385 795 q 306 791 333 793 q 220 646 248 731 q 193 439 193 561 q 209 268 193 339 q 258 154 225 196 q 323 101 283 120 q 416 82 363 82 m 415 399 q 369 452 369 399 q 381 491 369 478 q 415 505 393 505 q 451 491 439 505 q 464 452 464 477 q 451 413 464 427 q 415 399 439 399 z "
  },
  "\uFB43": {
    ha: 848,
    x_min: 60,
    x_max: 736,
    o: "m 621 -334 l 621 438 q 604 610 621 539 q 555 723 587 682 q 487 776 528 759 q 395 793 446 793 q 297 777 344 793 q 223 726 251 760 q 183 660 197 697 q 169 582 169 623 q 185 488 169 528 q 233 423 201 448 q 279 398 253 408 q 336 382 304 388 l 357 379 l 338 294 l 321 295 q 208 319 259 295 q 122 387 157 343 q 77 473 93 423 q 60 583 60 522 q 82 700 60 646 q 140 791 104 754 q 183 827 157 809 q 232 855 210 844 q 310 881 269 872 q 394 889 350 889 q 492 878 447 889 q 574 843 538 867 q 636 791 608 823 q 684 718 663 760 q 723 595 709 665 q 736 438 736 525 l 736 -334 l 621 -334 m 391 529 q 345 581 345 529 q 357 621 345 608 q 391 634 369 634 q 428 621 415 634 q 440 581 440 607 q 428 543 440 556 q 391 529 415 529 z "
  },
  "\uFB44": {
    ha: 825,
    x_min: 75,
    x_max: 749,
    o: "m 406 -14 q 325 -12 364 -14 q 253 -8 286 -11 q 195 -2 220 -5 l 167 1 l 167 94 q 288 84 228 87 q 408 81 348 81 q 496 98 458 81 q 560 143 535 115 q 603 219 587 173 q 625 315 618 265 q 629 375 628 346 q 631 438 631 404 q 625 546 631 498 q 606 640 620 594 q 567 719 591 686 q 505 772 543 753 q 460 788 484 783 q 410 793 437 793 q 318 779 358 793 q 253 743 277 765 q 201 670 220 713 q 182 582 182 627 q 198 492 182 532 q 241 425 214 451 q 291 394 264 405 q 350 382 318 382 l 370 379 l 352 294 l 334 295 q 264 304 297 296 q 203 329 231 313 q 156 365 178 344 q 119 411 134 385 q 86 488 97 445 q 75 581 75 531 q 101 713 75 654 q 172 808 128 772 q 281 869 221 849 q 408 889 342 889 q 511 876 464 889 q 597 838 559 863 q 653 788 627 818 q 696 720 678 758 q 736 596 722 667 q 749 438 749 526 q 734 270 749 343 q 691 143 719 196 q 638 74 669 103 q 572 27 608 45 q 496 -3 538 7 q 406 -14 454 -14 m 410 520 q 364 572 364 520 q 376 612 364 599 q 410 625 388 625 q 447 612 434 625 q 459 572 459 598 q 447 534 459 547 q 410 520 434 520 z "
  },
  "\uFB46": {
    ha: 774,
    x_min: 54,
    x_max: 705,
    o: "m 56 0 l 56 93 l 475 93 l 561 92 l 353 394 l 54 876 l 178 876 l 418 479 l 455 421 q 541 544 509 475 q 581 696 572 613 l 597 876 l 705 876 l 689 703 q 682 650 686 675 q 672 602 678 625 q 658 556 666 578 q 636 504 649 529 q 609 454 624 479 q 566 392 589 421 q 514 337 542 362 l 701 68 l 701 0 l 56 0 m 178 288 q 132 340 132 288 q 143 380 132 367 q 178 393 155 393 q 214 380 201 393 q 227 340 227 366 q 214 302 227 315 q 178 288 201 288 z "
  },
  "\uFB47": {
    ha: 827,
    x_min: 119,
    x_max: 783,
    o: "m 461 0 q 461 9 461 5 q 461 18 461 14 q 473 109 461 53 q 499 223 485 165 q 510 266 503 238 q 527 328 517 294 q 545 391 536 361 l 663 783 l 119 783 l 119 876 l 783 876 l 783 794 l 661 390 q 649 351 657 379 q 632 292 641 322 q 619 244 624 262 q 606 196 614 227 q 591 130 599 165 q 579 65 584 96 q 574 18 574 35 l 574 0 l 461 0 m 119 -334 l 119 518 l 233 518 l 233 -334 l 119 -334 m 398 399 q 352 451 352 399 q 364 491 352 477 q 398 504 376 504 q 434 490 422 504 q 447 451 447 477 q 434 412 447 426 q 398 399 422 399 z "
  },
  "\uFB48": {
    ha: 694,
    x_min: 30,
    x_max: 585,
    o: "m 470 0 l 470 622 q 433 740 470 702 q 324 789 397 779 q 289 793 308 792 q 248 795 269 795 q 182 794 221 795 q 102 790 142 793 q 30 786 61 788 l 30 881 q 140 887 90 885 q 232 889 191 889 q 361 882 313 889 q 452 858 410 876 q 522 813 494 840 q 566 743 549 787 q 580 687 576 716 q 585 622 585 658 l 585 0 l 470 0 m 230 399 q 184 452 184 399 q 196 491 184 478 q 230 505 208 505 q 266 491 254 505 q 279 452 279 477 q 266 413 279 427 q 230 399 254 399 z "
  },
  "\uFB49": {
    ha: 982,
    x_min: 56,
    x_max: 932,
    o: "m 130 0 l 56 876 l 165 876 l 206 376 q 293 406 252 387 q 361 457 334 425 q 409 551 393 496 q 431 670 425 607 l 450 876 l 557 876 l 538 671 q 509 515 529 580 q 447 402 488 450 q 354 329 409 356 q 219 288 298 302 q 216 288 218 288 q 214 288 215 288 l 231 92 l 420 92 q 593 143 513 92 q 726 285 673 193 q 789 495 777 378 l 825 876 l 932 876 l 895 494 q 865 348 888 416 q 807 220 843 279 q 722 115 770 161 q 608 41 674 70 q 515 9 564 19 q 413 0 466 0 l 130 0 m 544 252 q 498 304 498 252 q 510 343 498 330 q 544 357 522 357 q 580 343 568 357 q 593 304 593 330 q 580 265 593 279 q 544 252 568 252 z "
  },
  "\uFB4A": {
    ha: 882,
    x_min: 27,
    x_max: 765,
    o: "m 91 -3 q 62 0 77 -3 q 27 8 46 3 l 27 96 q 82 92 53 92 q 156 124 131 92 q 181 222 181 156 l 181 785 q 132 781 157 783 q 83 778 108 779 l 83 873 q 210 882 152 878 q 317 887 269 886 q 406 889 366 889 q 510 886 468 889 q 583 874 552 882 q 642 853 614 866 q 707 808 682 835 q 748 740 732 782 q 761 687 757 716 q 765 625 765 659 l 765 0 l 651 0 l 651 622 q 614 741 651 703 q 503 789 576 779 q 419 795 472 795 q 363 794 394 795 q 296 791 332 793 l 296 222 q 291 154 296 185 q 273 97 286 123 q 226 35 256 58 q 168 6 201 16 q 91 -3 134 -3 m 460 398 q 414 450 414 398 q 426 490 414 477 q 460 503 438 503 q 497 490 484 503 q 509 450 509 476 q 497 412 509 425 q 460 398 484 398 z "
  },
  "\uFB4B": {
    ha: 352,
    x_min: 119,
    x_max: 233,
    o: "m 119 0 l 119 876 l 233 876 l 233 0 l 119 0 m 176 903 q 130 955 130 903 q 141 995 130 981 q 176 1008 153 1008 q 212 994 200 1008 q 224 955 224 981 q 212 916 224 929 q 176 903 200 903 z "
  },
  "\u0300": {
    ha: 0,
    x_min: -677,
    x_max: -403,
    o: "m -543 1064 q -503 995 -527 1033 q -452 920 -479 956 q -403 858 -425 884 l -403 842 l -479 842 q -533 888 -504 861 q -590 946 -562 916 q -642 1003 -618 976 q -677 1050 -665 1031 l -677 1064 l -543 1064 z "
  },
  "\u0301": {
    ha: 0,
    x_min: -434,
    x_max: -159,
    o: "m -159 1064 l -159 1050 q -196 1003 -173 1031 q -248 946 -220 976 q -306 888 -277 916 q -359 842 -334 861 l -434 842 l -434 858 q -387 920 -412 884 q -336 995 -361 956 q -296 1064 -312 1033 l -159 1064 z "
  },
  "\u0302": {
    ha: 0,
    x_min: -228,
    x_max: 229,
    o: "m 56 1063 q 104 995 73 1033 q 168 920 134 956 q 229 857 202 883 l 229 842 l 149 842 q 73 900 112 865 q -2 972 35 935 q -76 900 -39 935 q -151 842 -114 866 l -228 842 l -228 857 q -169 920 -202 884 q -106 995 -136 957 q -58 1063 -76 1033 l 56 1063 z "
  },
  "\u0303": {
    ha: 0,
    x_min: -678,
    x_max: -174,
    o: "m -678 844 q -663 916 -674 884 q -632 970 -651 948 q -587 1005 -613 993 q -529 1017 -561 1017 q -469 1004 -498 1017 q -415 976 -441 991 q -365 947 -389 960 q -319 935 -341 935 q -268 955 -286 935 q -241 1018 -250 975 l -174 1018 q -221 891 -183 939 q -323 844 -259 844 q -381 857 -353 844 q -435 885 -409 869 q -485 914 -460 901 q -534 926 -510 926 q -585 906 -567 926 q -612 844 -602 886 l -678 844 z "
  },
  "\u0304": {
    ha: 0,
    x_min: -203,
    x_max: 203,
    o: "m 203 934 l 203 843 l -203 843 l -203 934 l 203 934 z "
  },
  "\u0306": {
    ha: 0,
    x_min: -210,
    x_max: 212,
    o: "m 212 1025 q 181 929 207 970 q 109 865 155 888 q -3 842 62 842 q -154 891 -102 842 q -210 1025 -205 941 l -140 1025 q -119 967 -136 987 q -72 940 -102 947 q 0 933 -42 933 q 67 941 37 933 q 116 969 97 949 q 140 1025 135 989 l 212 1025 z "
  },
  "\u0307": {
    ha: 0,
    x_min: -66,
    x_max: 69,
    o: "m 1 1021 q 49 1003 29 1021 q 69 947 69 985 q 49 892 69 910 q 1 873 29 873 q -47 892 -28 873 q -66 947 -66 910 q -47 1003 -66 985 q 1 1021 -28 1021 z "
  },
  "\u0308": {
    ha: 0,
    x_min: -192,
    x_max: 191,
    o: "m -192 945 q -174 995 -192 979 q -131 1010 -157 1010 q -86 995 -104 1010 q -68 945 -68 979 q -86 896 -68 912 q -131 879 -104 879 q -174 896 -157 879 q -192 945 -192 912 m 68 945 q 86 995 68 979 q 129 1010 104 1010 q 173 995 155 1010 q 191 945 191 979 q 173 896 191 912 q 129 879 155 879 q 86 896 104 879 q 68 945 68 912 z "
  },
  "\u030A": {
    ha: 0,
    x_min: -149,
    x_max: 154,
    o: "m 1 842 q -106 881 -64 842 q -149 989 -149 920 q -107 1095 -149 1057 q 1 1134 -65 1134 q 110 1095 66 1134 q 154 990 154 1057 q 111 881 154 920 q 1 842 67 842 m 1 907 q 60 929 37 907 q 83 989 83 951 q 59 1048 83 1026 q 1 1069 36 1069 q -56 1048 -33 1069 q -79 989 -79 1026 q -58 929 -79 951 q 1 907 -37 907 z "
  },
  "\u030B": {
    ha: 0,
    x_min: -170,
    x_max: 320,
    o: "m 320 1064 l 320 1050 q 288 1004 309 1031 q 240 946 267 977 q 188 889 214 916 q 138 842 161 861 l 73 842 l 73 858 q 116 921 93 884 q 161 995 139 957 q 197 1064 182 1033 l 320 1064 m 78 1064 l 78 1050 q 45 1004 66 1031 q -2 946 24 977 q -55 889 -28 916 q -104 842 -81 861 l -170 842 l -170 858 q -126 921 -149 884 q -82 995 -104 957 q -45 1064 -60 1033 l 78 1064 z "
  },
  "\u030C": {
    ha: 0,
    x_min: -229,
    x_max: 228,
    o: "m -59 842 q -107 910 -77 873 q -171 984 -138 947 q -229 1046 -203 1020 l -229 1063 l -151 1063 q -76 1003 -115 1038 q -3 930 -37 968 q 73 1003 34 968 q 148 1063 111 1038 l 228 1063 l 228 1046 q 168 984 201 1020 q 103 910 134 947 q 56 842 73 873 l -59 842 z "
  },
  "\u030F": {
    ha: 0,
    x_min: -713,
    x_max: -223,
    o: "m -347 1064 q -310 995 -332 1033 q -266 921 -289 957 q -223 858 -243 884 l -223 842 l -288 842 q -338 889 -311 861 q -391 946 -365 916 q -438 1004 -417 977 q -471 1050 -459 1031 l -471 1064 l -347 1064 m -588 1064 q -552 995 -573 1033 q -508 921 -531 957 q -465 858 -485 884 l -465 842 l -530 842 q -581 889 -553 861 q -633 946 -608 916 q -680 1004 -659 977 q -713 1050 -701 1031 l -713 1064 l -588 1064 z "
  },
  "\u0312": {
    ha: 0,
    x_min: -108,
    x_max: 92,
    o: "m -100 652 l -108 667 q -77 773 -96 716 q -35 886 -58 829 q 9 991 -13 943 l 92 991 q 65 879 79 939 q 39 759 51 819 q 20 652 28 700 l -100 652 z "
  },
  "\u0323": {
    ha: 0,
    x_min: -481,
    x_max: -345,
    o: "m -414 -238 q -462 -220 -442 -238 q -481 -164 -481 -201 q -462 -108 -481 -126 q -414 -90 -442 -90 q -365 -108 -385 -90 q -345 -164 -345 -126 q -365 -220 -345 -201 q -414 -238 -385 -238 z "
  },
  "\u0327": {
    ha: 0,
    x_min: -136,
    x_max: 134,
    o: "m 134 -194 q 83 -297 134 -260 q -66 -334 33 -334 q -106 -331 -87 -334 q -136 -326 -125 -329 l -136 -255 q -103 -260 -123 -258 q -62 -262 -83 -262 q 16 -247 -12 -262 q 43 -197 43 -232 q 6 -142 43 -159 q -86 -119 -30 -125 l -26 0 l 50 0 l 13 -76 q 74 -97 47 -83 q 118 -135 102 -111 q 134 -194 134 -159 z "
  },
  "\u0328": {
    ha: 0,
    x_min: -112,
    x_max: 113,
    o: "m -19 -163 q -2 -212 -19 -195 q 46 -229 15 -229 q 85 -225 68 -229 q 113 -220 101 -222 l 113 -293 q 74 -301 94 -298 q 28 -305 54 -305 q -78 -271 -43 -305 q -112 -176 -112 -237 q -92 -100 -112 -137 q -43 -32 -73 -63 q 17 20 -13 -1 l 79 0 q 6 -81 32 -43 q -19 -163 -19 -119 z "
  },
  "\u0485": {
    ha: 0,
    x_min: -477,
    x_max: -315,
    o: "m -477 993 q -454 1056 -477 1031 q -394 1080 -431 1080 q -347 1066 -364 1080 q -330 1027 -330 1053 q -340 1000 -330 1009 q -363 986 -351 991 q -387 975 -376 981 q -397 954 -397 968 q -377 918 -397 935 q -315 889 -357 901 l -315 840 q -405 875 -368 854 q -459 926 -441 897 q -477 993 -477 956 z "
  },
  "\u0486": {
    ha: 0,
    x_min: -475,
    x_max: -314,
    o: "m -314 993 q -332 926 -314 956 q -386 875 -351 897 q -475 840 -422 854 l -475 889 q -414 918 -435 901 q -393 954 -393 935 q -404 975 -393 968 q -427 986 -414 981 q -450 1000 -439 991 q -460 1027 -460 1009 q -443 1066 -460 1053 q -396 1080 -425 1080 q -336 1056 -359 1080 q -314 993 -314 1031 z "
  },
  "\u0483": {
    ha: 0,
    x_min: -635,
    x_max: -138,
    o: "m -513 857 q -530 810 -516 827 q -575 793 -543 793 q -622 811 -608 793 q -635 862 -635 829 q -622 911 -635 897 q -574 925 -608 925 l -263 925 q -245 973 -260 957 q -200 989 -231 989 q -153 972 -167 989 q -138 922 -138 956 q -144 884 -138 898 q -164 863 -151 869 q -201 857 -178 857 l -513 857 z "
  },
  "\u0484": {
    ha: 0,
    x_min: -633,
    x_max: -131,
    o: "m -288 1015 q -221 1006 -250 1015 q -172 979 -192 997 q -141 933 -152 960 q -131 869 -131 906 l -131 848 l -212 848 q -235 916 -212 899 q -290 932 -258 932 q -355 921 -321 932 q -429 893 -389 909 q -516 865 -469 877 q -621 853 -564 853 l -633 853 l -633 935 l -623 935 q -527 947 -570 935 q -444 975 -483 960 q -367 1003 -405 991 q -288 1015 -328 1015 z "
  },
  "\u05B0": {
    ha: 0,
    x_min: -43,
    x_max: 52,
    o: "m 3 -163 q -31 -150 -19 -163 q -43 -111 -43 -136 q -31 -71 -43 -85 q 3 -58 -19 -58 q 39 -71 27 -58 q 52 -111 52 -85 q 39 -150 52 -136 q 3 -163 27 -163 m 3 -338 q -31 -325 -19 -338 q -43 -286 -43 -311 q -31 -246 -43 -260 q 3 -233 -19 -233 q 39 -246 27 -233 q 52 -285 52 -260 q 39 -325 52 -311 q 3 -338 27 -338 z "
  },
  "\u05B1": {
    ha: 0,
    x_min: -239,
    x_max: 226,
    o: "m -192 -165 q -227 -152 -215 -165 q -239 -113 -239 -138 q -227 -73 -239 -87 q -192 -60 -215 -60 q -157 -73 -169 -60 q -144 -113 -144 -87 q -157 -152 -144 -138 q -192 -165 -169 -165 m 4 -165 q -43 -113 -43 -165 q -31 -73 -43 -87 q 4 -60 -19 -60 q 39 -73 27 -60 q 52 -113 52 -87 q 39 -152 52 -138 q 4 -165 27 -165 m -94 -340 q -129 -327 -117 -340 q -141 -288 -141 -314 q -129 -248 -141 -261 q -94 -235 -117 -235 q -58 -248 -71 -235 q -46 -288 -46 -262 q -58 -327 -46 -313 q -94 -340 -71 -340 m 178 -340 q 144 -327 156 -340 q 132 -288 132 -314 q 144 -248 132 -262 q 178 -235 156 -235 q 214 -248 202 -235 q 226 -288 226 -262 q 214 -327 226 -313 q 178 -340 202 -340 m 178 -165 q 144 -152 156 -165 q 132 -113 132 -138 q 144 -73 132 -87 q 178 -60 156 -60 q 214 -73 202 -60 q 226 -113 226 -87 q 214 -152 226 -138 q 178 -165 202 -165 z "
  },
  "\u05B2": {
    ha: 0,
    x_min: -205,
    x_max: 195,
    o: "m -205 -140 l -205 -84 l 39 -84 l 39 -140 l -205 -140 m 146 -340 q 112 -327 123 -340 q 100 -288 100 -314 q 112 -248 100 -261 q 146 -235 124 -235 q 182 -248 170 -235 q 195 -288 195 -262 q 182 -327 195 -313 q 146 -340 170 -340 m 146 -165 q 112 -152 123 -165 q 100 -113 100 -138 q 112 -73 100 -86 q 146 -60 124 -60 q 182 -73 170 -60 q 195 -113 195 -87 q 182 -152 195 -138 q 146 -165 170 -165 z "
  },
  "\u05B3": {
    ha: 0,
    x_min: -205,
    x_max: 195,
    o: "m -111 -277 l -111 -140 l -205 -140 l -205 -84 l 38 -84 l 38 -140 l -56 -140 l -56 -277 l -111 -277 m 146 -340 q 112 -327 123 -340 q 100 -288 100 -314 q 112 -248 100 -262 q 146 -235 123 -235 q 182 -248 170 -235 q 195 -288 195 -262 q 182 -327 195 -313 q 146 -340 170 -340 m 146 -165 q 112 -152 123 -165 q 100 -113 100 -138 q 112 -73 100 -87 q 146 -60 123 -60 q 182 -73 170 -60 q 195 -113 195 -87 q 182 -152 195 -138 q 146 -165 170 -165 z "
  },
  "\u05B4": {
    ha: 0,
    x_min: -47,
    x_max: 47,
    o: "m -1 -165 q -47 -112 -47 -165 q -36 -73 -47 -86 q -1 -59 -24 -59 q 35 -73 23 -59 q 47 -112 47 -86 q 35 -151 47 -138 q -1 -165 23 -165 z "
  },
  "\u05B5": {
    ha: 0,
    x_min: -151,
    x_max: 140,
    o: "m 92 -161 q 57 -148 69 -161 q 45 -109 45 -135 q 57 -70 45 -83 q 92 -56 69 -56 q 128 -70 115 -56 q 140 -109 140 -83 q 128 -148 140 -134 q 92 -161 115 -161 m -104 -161 q -139 -148 -127 -161 q -151 -109 -151 -135 q -138 -69 -151 -82 q -104 -56 -126 -56 q -69 -70 -81 -56 q -57 -109 -57 -83 q -69 -148 -57 -134 q -104 -161 -81 -161 z "
  },
  "\u05B6": {
    ha: 0,
    x_min: -151,
    x_max: 140,
    o: "m -6 -340 q -41 -327 -29 -340 q -53 -288 -53 -314 q -41 -248 -53 -262 q -6 -235 -29 -235 q 30 -248 18 -235 q 42 -288 42 -262 q 30 -327 42 -313 q -6 -340 18 -340 m 92 -165 q 57 -152 69 -165 q 45 -113 45 -139 q 57 -73 45 -87 q 92 -60 69 -60 q 128 -73 115 -60 q 140 -113 140 -87 q 128 -152 140 -138 q 92 -165 115 -165 m -104 -165 q -139 -152 -127 -165 q -151 -113 -151 -138 q -138 -73 -151 -86 q -104 -60 -126 -60 q -69 -73 -81 -60 q -57 -113 -57 -87 q -69 -152 -57 -138 q -104 -165 -81 -165 z "
  },
  "\u05B7": {
    ha: 0,
    x_min: -126,
    x_max: 121,
    o: "m -126 -132 l -126 -77 l 121 -77 l 121 -132 l -126 -132 z "
  },
  "\u05B8": {
    ha: 0,
    x_min: -125,
    x_max: 121,
    o: "m -29 -272 l -29 -136 l -125 -136 l -125 -79 l 121 -79 l 121 -136 l 26 -136 l 26 -272 l -29 -272 z "
  },
  "\u05B9": {
    ha: 0,
    x_min: -47,
    x_max: 48,
    o: "m -1 953 q -47 1005 -47 953 q -35 1045 -47 1031 q 0 1058 -23 1058 q 36 1044 24 1058 q 48 1005 48 1031 q 36 966 48 979 q -1 953 24 953 z "
  },
  "\u05BA": {
    ha: 0,
    x_min: -43,
    x_max: 52,
    o: "m 3 852 q -32 866 -20 852 q -43 905 -43 879 q -32 944 -43 931 q 3 958 -20 958 q 39 944 26 958 q 52 905 52 930 q 39 866 52 879 q 3 852 26 852 z "
  },
  "\u05BB": {
    ha: 0,
    x_min: -146,
    x_max: 155,
    o: "m -100 -167 q -135 -154 -123 -167 q -146 -115 -146 -140 q -134 -75 -146 -88 q -100 -62 -122 -62 q -65 -75 -77 -62 q -53 -115 -53 -89 q -65 -154 -53 -140 q -100 -167 -77 -167 m 3 -264 q -32 -250 -20 -264 q -44 -210 -44 -237 q -32 -171 -44 -184 q 3 -157 -20 -157 q 39 -171 26 -157 q 51 -210 51 -184 q 39 -250 51 -236 q 3 -264 26 -264 m 107 -360 q 72 -347 84 -360 q 60 -307 60 -333 q 72 -267 60 -281 q 107 -254 84 -254 q 143 -267 131 -254 q 155 -307 155 -281 q 143 -347 155 -333 q 107 -360 131 -360 z "
  },
  "\u05BC": {
    ha: 0,
    x_min: -43,
    x_max: 52,
    o: "m 3 345 q -43 397 -43 345 q -32 436 -43 423 q 3 450 -20 450 q 39 436 26 450 q 52 397 52 422 q 39 358 52 372 q 3 345 26 345 z "
  },
  "\u05BD": {
    ha: 0,
    x_min: -33,
    x_max: 31,
    o: "m -33 -311 l -33 -96 l 31 -96 l 31 -311 l -33 -311 z "
  },
  "\u05C1": {
    ha: 0,
    x_min: -43,
    x_max: 52,
    o: "m 3 852 q -43 905 -43 852 q -32 944 -43 931 q 3 958 -20 958 q 39 944 26 958 q 52 905 52 930 q 39 866 52 879 q 3 852 26 852 z "
  },
  "\u05C2": {
    ha: 0,
    x_min: -47,
    x_max: 47,
    o: "m -1 852 q -36 866 -24 852 q -47 905 -47 879 q -36 944 -47 931 q -1 958 -24 958 q 35 944 23 958 q 47 905 47 930 q 35 866 47 879 q -1 852 23 852 z "
  },
  "\u05C7": {
    ha: 0,
    x_min: -117,
    x_max: 97,
    o: "m -37 -198 l -37 -100 l -117 -100 l -117 -47 l 97 -47 l 97 -100 l 16 -100 l 16 -198 l -37 -198 z "
  },
  "\u2080": {
    ha: 483,
    x_min: 28,
    x_max: 454,
    o: "m 240 -191 q 81 -112 134 -191 q 28 118 28 -33 q 79 346 28 267 q 240 426 130 426 q 400 347 347 426 q 454 118 454 269 q 404 -111 454 -30 q 240 -191 353 -191 m 240 -110 q 332 -54 302 -110 q 361 118 361 2 q 332 289 361 233 q 240 345 302 345 q 150 289 179 345 q 121 117 121 233 q 150 -54 121 2 q 240 -110 178 -110 z "
  },
  "\u2081": {
    ha: 483,
    x_min: 52,
    x_max: 326,
    o: "m 326 414 l 326 -180 l 235 -180 l 235 203 q 235 249 235 228 q 237 291 236 271 q 239 332 238 312 q 208 304 225 319 q 170 277 190 290 l 96 225 l 52 289 l 233 414 l 326 414 z "
  },
  "\u2082": {
    ha: 483,
    x_min: 34,
    x_max: 425,
    o: "m 425 -180 l 34 -180 l 34 -110 l 195 47 q 280 136 250 102 q 321 199 310 171 q 332 258 332 227 q 306 327 332 303 q 235 351 279 351 q 158 335 193 351 q 87 292 123 319 l 42 352 q 130 406 83 386 q 236 427 178 427 q 374 383 324 427 q 425 263 425 339 q 406 178 425 217 q 351 100 387 140 q 262 12 315 61 l 147 -100 l 425 -100 l 425 -180 z "
  },
  "\u2083": {
    ha: 483,
    x_min: 25,
    x_max: 443,
    o: "m 230 427 q 376 384 327 427 q 426 275 426 341 q 396 182 426 218 q 323 133 366 146 l 323 129 q 411 82 378 118 q 443 -9 443 47 q 385 -140 443 -90 q 206 -191 327 -191 q 111 -182 155 -191 q 25 -153 66 -173 l 25 -71 q 118 -104 71 -92 q 207 -117 165 -117 q 315 -87 280 -117 q 350 -7 350 -58 q 310 68 350 45 q 196 92 269 92 l 115 92 l 115 163 l 196 163 q 299 191 267 163 q 332 264 332 219 q 303 330 332 309 q 231 352 275 352 q 150 337 188 352 q 75 299 113 323 l 29 359 q 119 408 71 390 q 230 427 166 427 z "
  },
  "\u2084": {
    ha: 483,
    x_min: 14,
    x_max: 470,
    o: "m 470 -41 l 383 -41 l 383 -180 l 287 -180 l 287 -41 l 14 -41 l 14 25 l 289 418 l 383 418 l 383 36 l 470 36 l 470 -41 m 287 36 l 287 176 q 288 243 287 206 q 291 314 289 281 q 263 265 283 297 q 227 210 242 233 l 106 36 l 287 36 z "
  },
  "\u2085": {
    ha: 483,
    x_min: 42,
    x_max: 441,
    o: "m 414 414 l 414 342 l 156 342 l 143 184 q 181 191 161 188 q 227 193 202 193 q 380 145 319 193 q 441 10 441 97 q 383 -139 441 -86 q 214 -193 325 -193 q 121 -183 168 -193 q 42 -156 73 -174 l 42 -69 q 127 -104 80 -92 q 211 -117 174 -117 q 313 -88 275 -117 q 351 2 351 -59 q 314 87 351 57 q 209 117 277 117 q 146 112 172 117 q 100 101 121 106 l 59 127 l 81 414 l 414 414 z "
  },
  "\u2086": {
    ha: 483,
    x_min: 28,
    x_max: 456,
    o: "m 324 425 q 369 422 345 425 q 409 416 393 420 l 409 338 q 369 348 393 344 q 319 351 345 351 q 200 322 244 351 q 137 243 157 293 q 113 131 117 193 l 119 131 q 177 181 138 161 q 273 201 215 201 q 406 153 355 201 q 456 16 456 104 q 431 -95 456 -48 q 359 -166 406 -141 q 249 -191 312 -191 q 136 -162 186 -191 q 57 -75 86 -134 q 28 73 28 -16 q 41 207 28 143 q 87 319 54 270 q 178 397 120 368 q 324 425 235 425 m 251 130 q 181 115 211 130 q 134 77 151 100 q 117 27 117 54 q 132 -42 117 -9 q 176 -96 146 -75 q 247 -117 205 -117 q 335 -84 301 -117 q 368 14 368 -52 q 338 99 368 68 q 251 130 309 130 z "
  },
  "\u2087": {
    ha: 483,
    x_min: 39,
    x_max: 446,
    o: "m 111 -180 l 350 336 l 39 336 l 39 414 l 446 414 l 446 351 l 206 -180 l 111 -180 z "
  },
  "\u2088": {
    ha: 483,
    x_min: 35,
    x_max: 448,
    o: "m 242 425 q 373 388 319 425 q 428 276 428 351 q 399 191 428 224 q 326 135 370 157 q 415 74 382 112 q 448 -21 448 36 q 391 -144 448 -98 q 242 -191 334 -191 q 130 -171 176 -191 q 59 -113 83 -151 q 35 -25 35 -76 q 50 43 35 14 q 89 94 64 72 q 145 131 114 115 q 77 189 100 158 q 54 272 54 219 q 110 385 54 345 q 242 425 165 425 m 222 96 q 168 64 190 81 q 135 25 146 47 q 123 -25 123 3 q 153 -92 123 -66 q 240 -118 182 -118 q 329 -92 300 -118 q 358 -25 358 -66 q 327 43 358 16 q 240 89 296 71 l 222 96 m 241 353 q 169 332 195 353 q 142 273 142 311 q 171 211 142 235 q 243 170 200 186 q 314 210 288 186 q 340 273 340 234 q 314 332 340 311 q 241 353 287 353 z "
  },
  "\u2089": {
    ha: 483,
    x_min: 24,
    x_max: 453,
    o: "m 231 428 q 344 400 294 428 q 424 314 394 372 q 453 165 453 256 q 440 31 453 95 q 394 -83 427 -33 q 305 -162 362 -134 q 160 -191 248 -191 q 112 -189 136 -191 q 72 -182 87 -186 l 72 -103 q 109 -113 87 -109 q 165 -117 132 -117 q 283 -86 241 -117 q 346 -5 326 -56 q 368 106 365 46 l 361 106 q 307 57 342 79 q 214 35 271 35 q 75 84 126 35 q 24 224 24 134 q 80 371 24 314 q 231 428 137 428 m 231 353 q 146 321 180 353 q 112 227 112 290 q 140 139 112 172 q 229 106 169 106 q 298 121 268 106 q 345 159 328 136 q 362 209 362 182 q 348 283 362 250 q 305 334 334 315 q 231 353 276 353 z "
  },
  "\u05BE": {
    ha: 447,
    x_min: 56,
    x_max: 392,
    o: "m 56 783 l 56 876 l 392 876 l 392 783 l 56 783 z "
  },
  "\u207D": {
    ha: 311,
    x_min: 54,
    x_max: 269,
    o: "m 54 693 q 87 901 54 810 q 182 1063 121 993 l 269 1063 q 170 894 203 989 q 136 693 136 799 q 169 494 136 590 q 269 322 203 398 l 182 322 q 89 483 123 389 q 54 693 54 576 z "
  },
  "\u208D": {
    ha: 311,
    x_min: 54,
    x_max: 269,
    o: "m 54 92 q 87 300 54 208 q 182 462 121 391 l 269 462 q 170 293 203 388 q 136 92 136 197 q 169 -107 136 -12 q 269 -279 203 -203 l 182 -279 q 89 -119 123 -213 q 54 92 54 -25 z "
  },
  "\u207E": {
    ha: 311,
    x_min: 41,
    x_max: 257,
    o: "m 257 695 q 223 486 257 578 q 129 322 189 393 l 41 322 q 143 494 109 397 q 176 694 176 591 q 142 895 176 800 q 41 1063 108 989 l 129 1063 q 224 899 191 993 q 257 695 257 804 z "
  },
  "\u208E": {
    ha: 311,
    x_min: 41,
    x_max: 257,
    o: "m 257 94 q 223 -116 257 -24 q 129 -279 189 -208 l 41 -279 q 143 -107 109 -204 q 176 92 176 -10 q 142 293 176 199 q 41 462 108 387 l 129 462 q 224 297 191 391 q 257 94 257 203 z "
  },
  "\u207A": {
    ha: 465,
    x_min: 49,
    x_max: 416,
    o: "m 199 445 l 199 599 l 49 599 l 49 667 l 199 667 l 199 820 l 267 820 l 267 667 l 416 667 l 416 599 l 267 599 l 267 445 l 199 445 z "
  },
  "\u207C": {
    ha: 465,
    x_min: 49,
    x_max: 416,
    o: "m 49 675 l 49 742 l 416 742 l 416 675 l 49 675 m 49 522 l 49 590 l 416 590 l 416 522 l 49 522 z "
  },
  "\u208A": {
    ha: 465,
    x_min: 49,
    x_max: 416,
    o: "m 199 -157 l 199 -3 l 49 -3 l 49 65 l 199 65 l 199 218 l 267 218 l 267 65 l 416 65 l 416 -3 l 267 -3 l 267 -157 l 199 -157 z "
  },
  "\u208C": {
    ha: 465,
    x_min: 49,
    x_max: 416,
    o: "m 49 73 l 49 140 l 416 140 l 416 73 l 49 73 m 49 -79 l 49 -12 l 416 -12 l 416 -79 l 49 -79 z "
  },
  "\u2215": {
    ha: 509,
    x_min: 14,
    x_max: 494,
    o: "m 494 991 l 125 0 l 14 0 l 384 991 l 494 991 z "
  },
  "\u20AA": {
    ha: 1090,
    x_min: 118,
    x_max: 978,
    o: "m 118 0 l 118 991 l 430 991 q 592 953 528 991 q 688 846 656 915 q 720 685 720 777 l 720 253 l 616 253 l 616 684 q 593 804 616 755 q 525 878 570 852 q 418 903 481 903 l 222 903 l 222 0 l 118 0 m 367 739 l 471 739 l 471 89 l 660 89 q 778 114 730 89 q 850 189 826 140 q 874 309 874 239 l 874 991 l 978 991 l 978 309 q 946 152 978 222 q 847 41 915 81 q 669 0 779 0 l 367 0 l 367 739 z "
  },
  "\u2120": {
    ha: 1116,
    x_min: 77,
    x_max: 1013,
    o: "m 501 503 l 501 991 l 623 991 l 758 609 l 896 991 l 1013 991 l 1013 503 l 930 503 l 930 783 q 932 832 930 799 q 935 885 934 865 l 929 885 l 786 503 l 718 503 l 581 885 l 576 885 q 578 832 577 861 q 579 790 579 804 l 579 503 l 501 503 m 219 493 q 142 500 180 493 q 80 519 105 507 l 80 588 q 146 567 108 577 q 225 557 184 557 q 309 577 280 557 q 338 631 338 597 q 309 684 338 666 q 224 724 281 703 q 156 753 191 736 q 99 797 122 769 q 77 872 77 825 q 125 971 77 939 q 255 1004 174 1004 q 331 997 296 1004 q 397 976 366 989 l 376 911 q 319 933 351 925 q 252 942 287 942 q 179 924 204 942 q 154 871 154 906 q 182 818 154 835 q 267 781 210 802 q 348 746 315 764 q 398 703 381 728 q 416 635 416 677 q 392 557 416 589 q 324 509 368 526 q 219 493 280 493 z "
  }
};
const familyName = "Open Sans";
const ascender = 1485;
const descender = -407;
const underlinePosition = -68;
const underlineThickness = 34;
const boundingBox = {
  yMin: -378,
  xMin: -762,
  yMax: 1455,
  xMax: 1668
};
const resolution = 1e3;
const original_font_information = {
  format: 0,
  copyright: "Copyright 2020 The Open Sans Project Authors (https://github.com/googlefonts/opensans)",
  fontFamily: "Open Sans",
  fontSubfamily: "Regular",
  uniqueID: "3.000;GOOG;OpenSans-Regular",
  fullName: "Open Sans Regular",
  version: "Version 3.000",
  postScriptName: "OpenSans-Regular",
  trademark: "Open Sans is a trademark of Google and may be registered in certain jurisdictions.",
  manufacturer: "Monotype Imaging Inc.",
  designer: "Monotype Design Team",
  description: "Designed by Monotype design team.",
  manufacturerURL: "http://www.google.com/get/noto/",
  designerURL: "http://www.monotype.com/studio",
  licence: "This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: https://scripts.sil.org/OFL",
  licenceURL: "http://scripts.sil.org/OFL",
  unknown1: "OpenSansRoman",
  unknown2: "Weight",
  unknown3: "Width",
  unknown4: "Regular",
  unknown5: "Normal",
  unknown6: "Italic",
  unknown7: "Roman"
};
const cssFontWeight = "normal";
const cssFontStyle = "normal";
var Open_Sans_Regular = {
  glyphs,
  familyName,
  ascender,
  descender,
  underlinePosition,
  underlineThickness,
  boundingBox,
  resolution,
  original_font_information,
  cssFontWeight,
  cssFontStyle
};
var OpenFont = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  glyphs,
  familyName,
  ascender,
  descender,
  underlinePosition,
  underlineThickness,
  boundingBox,
  resolution,
  original_font_information,
  cssFontWeight,
  cssFontStyle,
  "default": Open_Sans_Regular
}, Symbol.toStringTag, { value: "Module" }));
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".gallery.svelte-1mxod5q{width:99%;height:85%;position:absolute}")();
const css = {
  code: ".gallery.svelte-1mxod5q{width:99%;height:85%;position:absolute}",
  map: null
};
const imageBasicWidth = 20;
const imageBasicHeight = 40;
const imageBasicDepth = 1;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [];
  let years = [];
  let itemYear;
  const font = new Font(OpenFont);
  images.push({
    src: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    title: "Title 1",
    sortingPosition: "2022",
    artist: "Somebody"
  }, {
    src: "https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 2",
    sortingPosition: "2023-03",
    artist: "Photographer"
  });
  const loader = new TextureLoader();
  const lineMaterial = new LineBasicMaterial({ color: 2236962 });
  const groundMaterial = new MeshStandardMaterial({ color: 11842740 });
  let groundGeometry = new BoxGeometry(5e3, 0, 1024);
  let imageGeometry = new BoxGeometry(imageBasicWidth, imageBasicHeight, imageBasicDepth);
  const defaultImagePosition = [-1e3, 50, 15];
  let imagePosition = defaultImagePosition.slice();
  const cameraPosition = [-1020, 50, 15];
  let titleGeometries = [];
  const generateTitle = (image) => {
    const text = "Title: " + image.title;
    titleGeometries.push(new TextGeometry(text, { font, size: 2, height: 1 }));
  };
  let titlePosition = [imagePosition[0], imagePosition[1], imagePosition[2] + 40];
  let dateGeometries = [];
  const generateDate = (image) => {
    const text = "Date: " + image.date;
    dateGeometries.push(new TextGeometry(text, { font, size: 2, height: 1 }));
  };
  let datePosition = [titlePosition[0], titlePosition[1] - 5, titlePosition[2]];
  let artistGeometries = [];
  const generateArtist = (image) => {
    const text = "Artist: " + image.artist;
    artistGeometries.push(new TextGeometry(text, { font, size: 2, height: 1 }));
  };
  let artistPosition = [datePosition[0], datePosition[1] - 5, datePosition[2]];
  let mediumGeometries = [];
  const generateMedium = (image) => {
    const text = "Medium: " + image.medium;
    mediumGeometries.push(new TextGeometry(text, { font, size: 2, height: 1 }));
  };
  let mediumPosition = [artistPosition[0], artistPosition[1] - 5, artistPosition[2]];
  let repositoryGeometries = [];
  const generateRepository = (image) => {
    const text = "Repository: " + image.repository;
    repositoryGeometries.push(new TextGeometry(text, { font, size: 2, height: 1 }));
  };
  let repositoryPosition = [mediumPosition[0], mediumPosition[1] - 5, mediumPosition[2]];
  let yearGeometries = [];
  let yearPosition = [imagePosition[0], imagePosition[1], imagePosition[2] - 100];
  let materials = [];
  const loadImageTextures = (image) => {
    let url = image.src;
    let newUrl = url.replace("imageserver-2022", "data-proxy/image.php?subpath=");
    materials.push([
      new MeshBasicMaterial({ color: 0 }),
      new MeshBasicMaterial({ color: 0 }),
      new MeshBasicMaterial({ color: 0 }),
      new MeshBasicMaterial({ color: 0 }),
      new MeshBasicMaterial({ color: 0 }),
      new MeshBasicMaterial({ map: loader.load(newUrl) })
    ]);
  };
  const cleanUpYear = (itemDate) => {
    itemYear = itemDate.split("-");
    years.push(itemYear[0]);
  };
  $$result.css.add(css);
  return `<form>
	<label for="${"source-file"}">Upload a JSON source for the images:</label>
	<input accept="${"application/JSON"}" id="${"source-file"}" name="${"source-file"}" type="${"file"}">
	<button type="${"submit"}">Use this file</button></form>

<h1>Gallery:</h1>
<div class="${"gallery svelte-1mxod5q"}">${validate_component(Canvas, "SC.Canvas").$$render($$result, {
    antialias: true,
    background: new Color(180, 180, 180)
  }, {}, {
    default: () => {
      return `${validate_component(PerspectiveCamera_1, "SC.PerspectiveCamera").$$render($$result, {
        position: cameraPosition,
        target: [10, 25, 0]
      }, {}, {})}
		${validate_component(OrbitControls_1, "SC.OrbitControls").$$render($$result, { enableZoom: true, enableRotate: true }, {}, {})}
		${validate_component(AmbientLight, "SC.AmbientLight").$$render($$result, { intensity: 1 }, {}, {})}
		${validate_component(DirectionalLight, "SC.DirectionalLight").$$render($$result, {
        intensity: 0.6,
        position: [-2, 3, 2],
        shadow: { mapSize: [2048, 2048] }
      }, {}, {})}

		${validate_component(Mesh, "SC.Mesh").$$render($$result, {
        geometry: groundGeometry,
        material: groundMaterial,
        position: [0, 0, 0],
        receiveShadow: true
      }, {}, {})}

		${each(images, (item, index) => {
        return `${escape(loadImageTextures(item))}
			${escape(cleanUpYear(item.sortingPosition))}
			${escape(yearGeometries.push(new TextGeometry(years[index], { font, size: 12, height: 2 })))}
			${years[index - 1] != years[index] || years.length == 1 ? `${escape(imagePosition[0] = imagePosition[0] + 150)}
				${escape(titlePosition[0] = titlePosition[0] + 150)}
				${escape(datePosition[0] = datePosition[0] + 150)}
				${escape(artistPosition[0] = artistPosition[0] + 150)}
				${escape(mediumPosition[0] = mediumPosition[0] + 150)}
				${escape(repositoryPosition[0] = repositoryPosition[0] + 150)}

				${escape(imagePosition[1] = defaultImagePosition[1])}
				${escape(titlePosition[1] = imagePosition[1] - 25)}
				${escape(datePosition[1] = titlePosition[1] - 5)}
				${escape(artistPosition[1] = datePosition[1] - 5)}
				${escape(mediumPosition[1] = artistPosition[1] - 5)}
				${escape(repositoryPosition[1] = mediumPosition[1] - 5)}
				${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: yearGeometries[index],
          material: lineMaterial,
          position: yearPosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
				${escape(yearPosition[0] = yearPosition[0] + 150)}` : `${escape(imagePosition[1] = imagePosition[1] + item.dimensions.height + 50)}
				${escape(titlePosition[1] = titlePosition[1] + item.dimensions.height + 50)}
				${escape(datePosition[1] = datePosition[1] + item.dimensions.height + 50)}
				${escape(artistPosition[1] = artistPosition[1] + item.dimensions.height + 50)}
				${escape(mediumPosition[1] = mediumPosition[1] + item.dimensions.height + 50)}
				${escape(repositoryPosition[1] = repositoryPosition[1] + item.dimensions.height + 50)}`}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: item.dimensions ? new BoxGeometry(item.dimensions.width, item.dimensions.height, imageBasicDepth) : imageGeometry,
          material: materials[index],
          position: imagePosition,
          rotation: [0, Math.PI / 2, 0],
          castShadow: true
        }, {}, {})}
			
			${escape(generateTitle(item))}
			${escape(generateArtist(item))}
			${escape(generateMedium(item))}
			${escape(generateRepository(item))}
			${escape(generateDate(item))}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: titleGeometries[index],
          material: lineMaterial,
          position: titlePosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: dateGeometries[index],
          material: lineMaterial,
          position: datePosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: artistGeometries[index],
          material: lineMaterial,
          position: artistPosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: mediumGeometries[index],
          material: lineMaterial,
          position: mediumPosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
			${validate_component(Mesh, "SC.Mesh").$$render($$result, {
          geometry: repositoryGeometries[index],
          material: lineMaterial,
          position: repositoryPosition,
          rotation: [0, Math.PI / -2, 0]
        }, {}, {})}
			`;
      })}`;
    }
  })}
</div>`;
});
export { Routes as default };
