import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import loadingStatus from "./loading/loadingStatus";

const loader = new GLTFLoader();

const modelLoader = async (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => resolve(gltf), loadingStatus, reject);
  });
};

export default modelLoader;
