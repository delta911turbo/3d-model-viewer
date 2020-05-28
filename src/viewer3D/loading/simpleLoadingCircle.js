const animationBody = `<div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>`;

const simpleLoadingCircle = () => {
  const el = document.createElement("div");
  el.setAttribute("id", "ModelViewer_progressBar");
  el.setAttribute(
    "style",
    "position:absolute;top: 50%;left: 50%;margin-right: -50%;transform: translate(-50%, -50%)"
  );
  el.innerHTML = animationBody;

  return el;
};

export default simpleLoadingCircle;
