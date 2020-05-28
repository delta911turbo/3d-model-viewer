import { Scene, Color, CameraHelper } from "three";

import onWindowResize from "./events/onWindowResize";
import ViewerCamera from "./elements/camera";
import performanceOutput from "./dev/performanceOutput";
import RotationCamera, { controlButton } from "./elements/RotationCamera";
import ViewerLight from "./elements/CreateLight";
import CreateRenderer from "./elements/CreateRenderer";
import CreateBackground from "./elements/CreateBackground";
import loadProductModel from "./elements/loadProductModel";
import ProgressBar from "./loading/progressBar";

const bgModel = {
  floor: "../models/background/floor/floor.gltf",
  pillars: "../models/background/pillar/pillar.gltf",
};

async function modelViewerCanvas(container, src, { width, height, ratio }, dev) {
  let stats;

  let xd = "start";
  console.log(xd);

  const progressBar = new ProgressBar();
  container.appendChild(progressBar.create());

  // fps for dev
  if (dev) {
    stats = performanceOutput();
    container.appendChild(stats.dom);
  }

  const scene = new Scene();
  scene.background = new Color(0x000000);

  // init renderer and add to DOM
  const renderer = CreateRenderer(width, height);
  container.appendChild(renderer.domElement);

  // init camera and attach to orbitViewer
  const camera = ViewerCamera(width, height);
  const rotationCameraControl = RotationCamera(camera, renderer.domElement, true);
  const updateAutoRotate = () => {
    if (rotationCameraControl.autoRotate) {
      rotationCameraControl.autoRotate = false;
    } else {
      rotationCameraControl.autoRotate = true;
    }
  };

  // add light
  const light = ViewerLight();
  light.map((l) => scene.add(l));

  // DEV: camera  helper
  if (dev) {
    light.forEach((l) => {
      if (l.type !== "AmbientLight") scene.add(new CameraHelper(l.shadow.camera));
    });
  }

  const background = await CreateBackground(bgModel);
  background.map((bg) => scene.add(bg));

  const model = await loadProductModel(src);

  scene.add(model);
  container.appendChild(controlButton(updateAutoRotate));

  function render() {
    renderer.render(scene, camera);
  }

  function animate() {
    if (dev) stats.update();

    rotationCameraControl.update();
    requestAnimationFrame(animate);
    render();
  }

  window.addEventListener(
    "resize",
    () => onWindowResize(camera, renderer, render, ratio, container.offsetWidth),
    false
  );

  console.log((xd = "stop"));
  animate();
}

export default modelViewerCanvas;
