window.onload = function () {
  let ele = document.querySelector(".tetrahedron");
  let angleY = 0;
  let isHovering = false;

  function animate() {
    if (!isHovering) {
      angleY += 0.005;
      ele.style.transform = `rotateX(-20deg) rotateY(${angleY * 50}deg)`;
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  ele.addEventListener("mouseenter", () => (isHovering = true));
  ele.addEventListener("mouseleave", () => (isHovering = false));
};
