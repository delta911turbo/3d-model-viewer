import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import loadingStatus from "../viewer3D/loading/loadingStatus";

const loader = new GLTFLoader();

const modelLoader = async (url, scene) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf), loadingStatus, reject, null);
  });
};

export default modelLoader;
