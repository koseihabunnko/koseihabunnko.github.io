window.onwheel = (WheelEvent) => {
  const novel = document.getElementsByTagName("body")[0];
  novel.scrollBy(-WheelEvent.deltaY, 0);
}
window.addEventListener(scroll, (event) => {
  event.preventDefault();
  console.log("scroll event")
}, { passive: false })