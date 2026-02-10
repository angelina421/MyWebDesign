const tabbar = document.querySelector(".tabbar");
const tabs = document.querySelectorAll(".tab");
const a_items = tabbar.querySelectorAll("a");

a_items[0].classList.add("active");
tabs[0].classList.add("active");

tabbar.addEventListener("mouseover", (e) => {
  const item = e.target.closest("a");
  const items = tabbar.querySelectorAll("a");
  if (!item) return;

  const index = item.dataset.index;

  // 高亮当前 tabbar
  items.forEach((i) => i.classList.remove("active"));
  item.classList.add("active");

  // 显示对应 tab
  tabs.forEach((p, i) => {
    if (i == index) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
});