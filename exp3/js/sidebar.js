const sidebar = document.querySelector(".sidebar");
const panels = document.querySelectorAll(".panel");
const a_items = sidebar.querySelectorAll("a");

a_items[0].classList.add("active");
panels[0].classList.add("active");

sidebar.addEventListener("mouseover", (e) => {
  const item = e.target.closest("a");
  const items = sidebar.querySelectorAll("a");
  if (!item) return;

  const index = item.dataset.index;

  // 高亮当前 sidebar
  items.forEach((i) => i.classList.remove("active"));
  item.classList.add("active");

  // 显示对应 panel
  panels.forEach((p, i) => {
    if (i == index) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
});
