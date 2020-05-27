import startScreen from "./container/startScreen";
import aspectRatio from "./container/aspectRatio";
import loadAttributes from "./container/loadAttributes";
import modelViewerCanvas from "./viewer3D/modelViewerCanvas";

export const initModelViewer = (start = true) => {
  const canvasDOM = document.getElementById("ModelViewer");
  // load options from attributes
  const { src, ratio, dev } = loadAttributes(canvasDOM);
  const { width, height } = aspectRatio(ratio, canvasDOM.offsetWidth);

  // add start screen event
  const btnEvent = (el) => {
    console.log(el);
    el.remove();
    modelViewerCanvas(canvasDOM, src, { width, height }, dev);
  };

  // create start screen
  const prepScreen = startScreen(width, height, btnEvent);
  canvasDOM.appendChild(prepScreen);

  // if (!start) {
  //   canvasDOM.appendChild(startScreen(width, height));
  // } else {
  //   modelViewerCanvas(canvasDOM, src, { width, height }, dev);
  // }
};

if (document.getElementById("ModelViewer")) initModelViewer();
