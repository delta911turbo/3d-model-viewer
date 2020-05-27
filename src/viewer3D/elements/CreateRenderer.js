import { WebGLRenderer, PCFSoftShadowMap } from "three";

const CreateRenderer = (width, height) => {
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  return renderer;
};

export default CreateRenderer;
