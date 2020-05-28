const startScreen = (width, height, btnEvent) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "ModelViewer_Activate");
  wrapper.setAttribute("style", `width:${width}px;height:${height}px;`);

  const btn = document.createElement("button");
  btn.textContent = "Click to load";

  btn.setAttribute("id", "ModelViewer_StartButton");
  btn.setAttribute("class", "ModelViewer_Button");
  btn.addEventListener("click", () => btnEvent(wrapper));

  const descriptions = document.createElement("p");
  descriptions.textContent = "Click to start loading model";

  wrapper.appendChild(btn);
  wrapper.appendChild(descriptions);

  return wrapper;
};

export default startScreen;
