/* eslint-disable no-param-reassign */
import modelLoader from "../../loader/modelLoader";

const createProductModel = async (modelSrc) => {
  const model = await modelLoader(modelSrc);
  model.scenes[0].scale.set(0.15, 0.15, 0.15);
  model.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });
  return model.scene;
};

export default createProductModel;
