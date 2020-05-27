import startScreen from "./container/startScreen";
import aspectRatio from "./container/aspectRatio";
import loadAttributes from "./container/loadAttributes";
import modelViewerCanvas from "./viewer3D/modelViewerCanvas";

export const initModelViewer = () => {
  const canvasDOM = document.getElementById("ModelViewer");
  // load options from attributes
  const { src, ratio, dev } = loadAttributes(canvasDOM);
  const { width, height } = aspectRatio(ratio, canvasDOM.offsetWidth);

  // event for brn resize
  const windowResize = () => {
    const { width: w, height: h } = aspectRatio(ratio, canvasDOM.offsetWidth);
    canvasDOM.children[0].setAttribute("style", `width:${w}px;height:${h}px;`);
  };

  // add start screen event
  const btnEvent = (el) => {
    window.removeEventListener("resize", windowResize, false);
    el.remove();
    modelViewerCanvas(canvasDOM, src, { width, height, ratio }, dev);
  };

  // create start screen
  const prepScreen = startScreen(width, height, btnEvent);
  window.addEventListener("resize", windowResize, false);
  canvasDOM.appendChild(prepScreen);
};

if (document.getElementById("ModelViewer")) initModelViewer();
