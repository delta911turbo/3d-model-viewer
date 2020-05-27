const loadingAnimation = (xhr) => {
  const percentComplete = (xhr.loaded / xhr.total) * 100;
  console.log(Math.round(percentComplete, 2) + "% loaded");
};

export default loadingAnimation;
