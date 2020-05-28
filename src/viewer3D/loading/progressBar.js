const progressBarWrapper = () => {
  const el = document.createElement("div");
  el.setAttribute("id", "ModelViewer_progressBar");
  el.setAttribute(
    "style",
    `position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)`
  );
  return el;
};

const bar = () => {
  const el = document.createElement("div");
  el.setAttribute(
    "style",
    "height: 40px; nim-width: 100px; bottom: 0; display: flex; justify-content: center; align-items: center;"
  );
  return el;
};

const status = document.createElement("p");
status.innerText = "Loading models";

const info = document.createElement("p");
info.innerText = "loaded component name";

class ProgressBar {
  constructor() {
    this.wrapper = progressBarWrapper();
    this.bar = bar();
    this.status = status;
    this.info = info;
  }

  create() {
    this.wrapper.appendChild(this.status);
    this.wrapper.appendChild(this.bar);
    this.wrapper.appendChild(this.info);

    return this.wrapper;
  }

  updateBar() {
    console.log(console.log(this.bar));
  }

  updateStatus() {
    console.log(console.log(this.info));
  }

  updateInfo() {
    console.log(console.log(this.info));
  }
}

export default ProgressBar;
