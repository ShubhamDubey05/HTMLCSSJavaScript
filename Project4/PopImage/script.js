var cen = document.querySelector("#center");

const throttle = (fn, delay) => {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
};

cen.addEventListener("mousemove", throttle((details) => {
  var div = document.createElement("div");
  div.classList.add("imgdiv");

  // Correct mouse position relative to #center
  let rect = cen.getBoundingClientRect();
  let x = details.clientX - rect.left;
  let y = details.clientY - rect.top;

  div.style.left = x + 'px';
  div.style.top = y + 'px';

  var img = document.createElement("img");
  img.setAttribute("src", "https://images.unsplash.com/photo-1751217335778-d4425ce82ee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D");

  div.appendChild(img);
  cen.appendChild(div);

  // Animate image in
  gsap.to(img, {
    y: 0,
    ease: "power3.out",
    duration: 0.2
  });

  // Animate image out after short delay
  gsap.to(img, {
    y: "100%",
    ease: "power2.in",
    duration: 0.5,
    delay: 1.5
  });

  setTimeout(() => {
    div.remove();
  }, 2000);
}, 400));
