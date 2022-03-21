/**
 * @type  {HTMLDivElement}
 */
const slider = document.querySelector("div.slider");
const links = document.querySelectorAll("nav .items a");

links.forEach((e, i) => {
  e.onclick = () => {
    slider.style.left = `${i * 20}%`;
  };
});
