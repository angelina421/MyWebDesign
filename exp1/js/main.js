document.addEventListener("DOMContentLoaded", function () {
  // 获取元素
  var links = document.querySelectorAll(".sidebar nav a");
  var pages = document.querySelectorAll(".page");
  var layout = document.querySelector(".layout");
  var toggleSidebarBtn = document.getElementById("toggleSidebar");

  // 页面切换
  for (var i = 0; i < links.length; i++) {
    (function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var target = link.getAttribute("data-page");

        for (var j = 0; j < pages.length; j++) {
          pages[j].classList.remove("active");
        }

        var targetPage = document.getElementById(target);
        if (targetPage) {
          targetPage.classList.add("active");
        }
      });
    })(links[i]); // 用 IIFE 保留每次循环的 link
  }

  // 折叠/展开侧边栏
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", function () {
      if (layout.classList.contains("sidebar-collapsed")) {
        layout.classList.remove("sidebar-collapsed");
      } else {
        layout.classList.add("sidebar-collapsed");
      }
    });
  }
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 } // 元素有 10% 出现在视口就触发
);

reveals.forEach((el) => observer.observe(el));