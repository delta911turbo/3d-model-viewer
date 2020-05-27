import Stats from "three/examples/jsm/libs/stats.module.js";

const performanceOutput = () => {
  const stats = new Stats();
  stats.dom.style.position = "absolute";
  return stats;
};

export default performanceOutput;
