const loadAttributes = (container) => {
  const att = container.attributes;

  const src = att?.src?.value;
  if (!src) {
    throw new Error("3D loader error: missing path to 3d model");
  }

  const ratio = att?.ratio ? att.ratio.value : "16:9";

  const dev = !!att?.dev;

  return { src, ratio, dev };
};

export default loadAttributes;
