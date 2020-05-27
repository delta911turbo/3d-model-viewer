import loadingIndicator from "./loadingIndicator";
import loadingAnimation from "./loadingAnimation";

const loadingStatus = (xhr) => {
  if (xhr.lengthComputable) {
    loadingAnimation(xhr);
  } else {
    loadingIndicator(xhr);
  }
};
export default loadingStatus;
