import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import loadingManager from "../viewer3D/loading/loadingManager";

const loader = new GLTFLoader(loadingManager);

const modelLoader = async (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf), null, reject, null);
  });
};

export default modelLoader;
