const slideCount = 6;

const move = document.querySelector(".move");
const menuItems = document.querySelectorAll(".menu a");

function switchSlide(index) {
  const offset = 100 / slideCount;
  move.style.transform = `translateX(-${index * offset }%)`;

  menuItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    switchSlide(Number(item.dataset.index));
  });
});

switchSlide(0);