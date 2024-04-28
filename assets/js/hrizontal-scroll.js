window.onwheel = (WheelEvent) => {
  window.scrollBy(-WheelEvent.deltaY, 0);
}
window.addEventListener(scroll, (event) => {
  event.preventDefault();
  console.log("scroll event")
}, { passive: false })