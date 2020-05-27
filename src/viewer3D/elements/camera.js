import { PerspectiveCamera } from "three";

const ViewerCamera = (width, height) => {
  const camera = new PerspectiveCamera(75, width / height, 1, 800);
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.set(-47, 14, 30);

  return camera;
};

export default ViewerCamera;
