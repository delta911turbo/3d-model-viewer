import * as THREE from "three";

import Stats from "three/examples/jsm/libs/stats.module.js";

import modelLoader from "modelLoader";
import activateButton from "./container/activateButton";
import onWindowResize from "./onWindowResize";
import aspectRatio from "./aspectRatio/aspectRatio";
import loadAttributes from "./container/loadAttributes";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

async function modelViewerCanvas(container, src, { width, height }, dev) {
  container.addEventListener("resize", onWindowResize, false);

  // fps for dev
  if (dev) {
    const stats = new Stats();
    stats.dom.style.position = "absolute";
    container.appendChild(stats.dom);
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);

  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  // camera.rotation.y = (45 / 180) * Math.PI;
  // camera.position.x = -688;
  // camera.position.y = 92;
  camera.position.z = 390;

  const hLight = new THREE.AmbientLight(0x404040, 5);
  scene.add(hLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const model = await modelLoader(src);
  scene.add(model.scene);
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  // render();
  // stats.update();
}

const startPreview = (container) => {
  // modelViewerCanvas(container);
};

export const initModelViewer = (start = false) => {
  const canvasDOM = document.getElementById("ModelViewer");
  // load options from attributes
  const { src, ratio, dev } = loadAttributes(canvasDOM);

  const { width, height } = aspectRatio(ratio, canvasDOM.offsetWidth);

  if (!start) {
    canvasDOM.appendChild(activateButton(width, height));
  } else {
    modelViewerCanvas(canvasDOM, src, { width, height }, dev);
  }
  // canvasDOM = activateButton();
};

if (document.getElementById("ModelViewer")) initModelViewer();
