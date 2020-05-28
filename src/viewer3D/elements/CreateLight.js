import { SpotLight, AmbientLight } from "three";

const createProductSpotLight = (position = [0, 0, 0], power = 0, name = "") => {
  const sLight = new SpotLight(0xffffff, power);
  if (name) sLight.name = name;
  sLight.position.set(position[0], position[1], position[2]);
  sLight.castShadow = true;

  sLight.penumbra = 1;
  sLight.distance = 800;
  sLight.angle = Math.PI / 3;

  sLight.shadow.camera.near = 1;
  sLight.shadow.camera.far = 1500;
  sLight.shadow.mapSize.width = 2048;
  sLight.shadow.mapSize.height = 2048;

  return sLight;
};

const ambientLight = new AmbientLight(0x404040);

const centralLight = () => {
  const sLight = new SpotLight(0xffffff, 3);
  sLight.name = "Central Spot Light";
  sLight.position.set(0, 700, 0);
  sLight.castShadow = true;

  sLight.penumbra = 1;
  sLight.distance = 1200;
  sLight.angle = Math.PI / 4;

  sLight.shadow.camera.near = 200;
  sLight.shadow.camera.far = 1120;
  sLight.shadow.mapSize.width = 1024;
  sLight.shadow.mapSize.height = 1024;

  return sLight;
};

const productLight = () => {
  const sLightFrontRight = createProductSpotLight(
    [-175, 100, 140],
    2,
    "Front Right Light"
  );

  const sLightFrontLeft = createProductSpotLight(
    [-175, 100, -140],
    2,
    "Front Right Light"
  );

  const sLightBackRight = createProductSpotLight([175, 100, -140], 2, "Back Right Light");

  const sLightBackLeft = createProductSpotLight([175, 100, 140], 2, "Back Right Light");

  return [sLightFrontRight, sLightFrontLeft, sLightBackRight, sLightBackLeft];
};

const ViewerLight = () => {
  const clLight = centralLight();
  const plLight = productLight();

  return [ambientLight, clLight, ...plLight];
};

export default ViewerLight;
