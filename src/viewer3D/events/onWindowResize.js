/* eslint-disable no-param-reassign */
import aspectRatio from "../../container/aspectRatio";

const onWindowResize = (camera, renderer, render, ratio, currWidth) => {
  const { width, height } = aspectRatio(ratio, currWidth);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  render();
};

export default onWindowResize;
