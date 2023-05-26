export default function Box(props) {
  const nativeProp = {
    top: props?.top,
    bottom: props?.bottom,
    left: props?.left,
    right: props?.right,
    id: props?.id,
  };
  const { top, bottom, left, right, id } = nativeProp;

  function setBorder() {
    let borderStyle = "";
    const properties = [top, bottom, left, right];
    const propertiesName = ["top", "bottom", "left", "right"];
    let i = 0;
    properties.forEach((property) => {
      if (!property) {
        borderStyle += `border-${propertiesName[i]}: 0; `;
      }
      i++;
    });

    return borderStyle;
  }

  return `
  <div
    class="Box"
    id="${id}"
    style="border: 3px solid white; ${setBorder()};
    "
  ></div>

  `;
}
