window.addEventListener("mousemove", (eve) => {
  var rect = document.querySelector("#rect");
  var halfRectWidth = rect.getBoundingClientRect().width / 2;

  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + halfRectWidth,
    window.innerWidth - (100 + halfRectWidth),
    eve.clientX
  );

  gsap.to("#rect", {
    left: xval + "px",
    ease: Power3,
  });
});
