
export const makeCanvasMark = async (): Promise<string> => {
  // 非浏览器环境直接返回
  if (!window || !window.document) {
    return '';
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "20pt Arial";
  context.textBaseline = "top";
  context.fillText("finger print", 2, 2);
  return canvas.toDataURL("image/jpeg");
}
