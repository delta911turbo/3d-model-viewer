import ProgressBar from "./progressBar";
import loadingAnimation from "./loadingAnimation";
import { LoadingManager } from "three";

const loadingManager = new LoadingManager();

loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
  console.log("_____________________________START_____________________");
  // console.log(
  //   "Started loading file: " +
  //     url +
  //     ".\nLoaded " +
  //     itemsLoaded +
  //     " of " +
  //     itemsTotal +
  //     " files."
  // );
};

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  console.log(
    "Loading file: " + url + ".\nLoaded " + itemsLoaded + " of " + itemsTotal + " files."
  );
};

loadingManager.onLoad = () => {
  console.log("Loading complete!");
};

loadingManager.onError = (url) => {
  console.log("There was an error loading " + url);
};

export default loadingManager;
