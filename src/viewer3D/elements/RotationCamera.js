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

export default RotationCamera;
