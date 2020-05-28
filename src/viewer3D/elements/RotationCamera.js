import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const RotationCamera = (camera, domElement, autoRotate = true) => {
  const rotationCameraControl = new OrbitControls(camera, domElement);
  if (autoRotate) {
    rotationCameraControl.autoRotate = true;
    rotationCameraControl.autoRotateSpeed = 1;
  }
  rotationCameraControl.minDistance = 45;
  rotationCameraControl.maxDistance = 150;
  rotationCameraControl.maxPolarAngle = Math.PI * 0.55;

  return rotationCameraControl;
};

export const controlButton = (btnEvent) => {
  const btn = document.createElement("div");
  btn.setAttribute("id", "ModelViewer_autoRotateBtn");
  btn.innerText = "►";
  btn.setAttribute("class", "ModelViewer_Button");
  btn.setAttribute(
    "style",
    "position: absolute; height: 40px; width: 40px; bottom: 0; margin: 15px; display: flex; justify-content: center; align-items: center;"
  );

  btn.addEventListener("click", () => btnEvent());

  return btn;
};

export default RotationCamera;
