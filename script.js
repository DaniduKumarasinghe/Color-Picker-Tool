const colorPicker = document.getElementById("colorPicker");
const previewBox = document.getElementById("previewBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");
const copiedMessage = document.getElementById("copiedMessage");

colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  previewBox.style.backgroundColor = color;
  hexCode.textContent = color;
  rgbCode.textContent = hexToRGB(color);
  copiedMessage.classList.add("hidden");
});

function hexToRGB(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function copyColorCode() {
  const color = hexCode.textContent;
  navigator.clipboard.writeText(color).then(() => {
    copiedMessage.classList.remove("hidden");
    setTimeout(() => copiedMessage.classList.add("hidden"), 2000);
  });
}
