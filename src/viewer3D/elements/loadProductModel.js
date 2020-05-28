/* eslint-disable no-param-reassign */
import modelLoader from "../../loader/gltfLoader";

const loadProductModel = async (modelSrc) => {
  const model = await modelLoader(modelSrc);

  model.scene.position.set(0, -22, 0);
  model.scenes[0].scale.set(0.5, 0.5, 0.5);

  model.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.emissiveIntensity = 0;
      node.castShadow = true;
    }
  });
  return model.scene;
};

export default loadProductModel;
