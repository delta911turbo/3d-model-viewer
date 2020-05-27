/* eslint-disable no-param-reassign */
import modelLoader from "../../loader/modelLoader";

const CreateBackground = async ({ floor, pillars }) => {
  const floorModel = await modelLoader(floor);
  floorModel.scene.position.set(0, -27, 0);
  floorModel.scene.traverse((node) => {
    if (node.isMesh) {
      node.receiveShadow = true;
    }
  });

  const pillarsModel = await modelLoader(pillars);
  pillarsModel.scene.position.set(0, -27, 0);
  pillarsModel.scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
    }
  });

  return [floorModel.scene, pillarsModel.scene];
};

export default CreateBackground;
