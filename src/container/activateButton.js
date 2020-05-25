import { initModelViewer } from "..";

const CreateActivateWrapper = (width, height) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "ModelViewer_Activate");
  wrapper.setAttribute("style", `width:${width}px;height:${height}px`);

  const btn = document.createElement("button");
  btn.textContent = "Click to load";

  btn.setAttribute("id", "ModelViewer_StartButton");
  btn.addEventListener("click", function () {
    wrapper.remove();
    initModelViewer(true);
  });

  const descriptions = document.createElement("p");
  descriptions.textContent = "Click to start loading model";

  wrapper.appendChild(btn);
  wrapper.appendChild(descriptions);

  return wrapper;
};

const activateButton = (width, height) => {
  return CreateActivateWrapper(width, height);
};

export default activateButton;
