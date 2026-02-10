// // const NavGroup = document.querySelector(".nav_group");
// // const NavItems = document.querySelectorAll(".nav_item");
// // const Panels = document.querySelectorAll(".panel");

// // NavGroup.addEventListener("click", (e) => {
// //   const item = e.target.closest(".nav_item");
// //   if (!item || item.classList.contains("active")) return;

// //   const targetId = item.dataset.id;

// //   // 同步导航项状态
// //   NavItems.forEach(nav => nav.classList.remove("active"));
// //   item.classList.add("active");

// //   // 同步面板状态
// //   Panels.forEach(panel => {
// //     if (panel.id === targetId) {
// //       panel.classList.add("active");
// //     } else {
// //       panel.classList.remove("active");
// //     }
// //   });

// //   console.log(`Magic Panel Switched to: ${targetId}`);
// // });
// window.onload = function() {
//   const currentPath = window.location.pathname;
//   const navItems = document.querySelectorAll(".nav_item");
  
//   navItems.forEach(item => {
//     // 如果链接地址包含当前文件名，则设为激活态
//     if (item.getAttribute('href') && currentPath.includes(item.getAttribute('href'))) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// };