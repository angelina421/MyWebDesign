const bg = document.getElementById("bg");
const color_input = document.getElementById("color");
const range_input = document.getElementById("range");

const form = document.getElementById("info_form");

color_input.addEventListener("input", update_background);
range_input.addEventListener("input", update_background);

form.addEventListener("submit", update_card);

function hexToRgba(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function update_background() {
  const color = color_input.value;
  const opacity = range_input.value / 100;
  bg.style.background = `linear-gradient(135deg, ${hexToRgba(
    color,
    opacity
  )}, #ffffff)`;
}

function scroll_top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function update_card(evt) {
  evt.preventDefault();

  alert("提交成功！正在跳转至名片...");

  location.hash = "#business_card";

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const genderValue = gender ? gender.value : "未选择";

  const hobbies = Array.from(
    document.querySelectorAll('input[name="hobby"]:checked')
  ).map((h) => h.value);
  const hobbyText = hobbies.length > 0 ? hobbies.join("、") : "暂无";

  // 更新名片内容
  document.getElementById("card_name").innerText = name;
  document.getElementById("card_phone").innerText = "电话：" + phone;
  document.getElementById("card_age").innerText = "年龄：" + age;
  document.getElementById("card_gender").innerText = "性别：" + genderValue;
  document.getElementById("card_hobby").innerText = "爱好：" + hobbyText;
}

function init() {
  update_background();
}

init();
