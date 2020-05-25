/**
 * @description return size of canvas based of current width and chosen ratio
 * @param {string} currentRatio ratio available options ["16:9","4:3","1:1","fullscreen"]
 * @param {number} containerWidth width of target component
 * @returns {{width:number, height:number}}{ width, height }
 */
const aspectRatio = (currentRatio, containerWidth) => {
  const width = containerWidth;

  switch (currentRatio) {
    case "16:9":
      return { width, height: Math.round(containerWidth / 1.78) };
    case "4:3":
      return { width, height: Math.round(containerWidth / 1.33) };
    case "1:1":
      return { width, height: width };
    case "fullscreen":
      return { width: window.innerWidth, height: window.innerHeight };
    default:
      return { width, height: Math.round(containerWidth / 1.78) };
  }
};

export default aspectRatio;
