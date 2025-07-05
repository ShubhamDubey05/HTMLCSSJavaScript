var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", (details) => {
  var rectangleLocation = rectangle.getBoundingClientRect();
  var mouseInnerLocation = details.clientX - rectangleLocation.left;

  if (mouseInnerLocation < rectangleLocation.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      mouseInnerLocation
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      mouseInnerLocation
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0, 0, ${blueColor})`, 
    });
  }
});

rectangle.addEventListener("mouseleave", () => {
  gsap.to(rectangle, {
    backgroundColor: "white", 
  });
});
