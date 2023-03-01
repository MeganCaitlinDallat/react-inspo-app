//sets the background value in app.css
export default function setDynamicBackground({ color }) {
  console.log("setDynamicBackground called with color:", color);
  document.documentElement.style.setProperty("--dynamicColor", color);
}
