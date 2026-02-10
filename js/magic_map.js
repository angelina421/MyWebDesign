document.addEventListener("DOMContentLoaded", () => {
  const locations = [
    {
      id: 1,
      name: "Starfall Abyss",
      cn_name: "星坠深渊",
      x: 26,
      y: 28,
      desc: "物理法则在此地彻底崩坏，紫罗兰色的虚空风暴撕裂了重力枷锁。无数破碎的岛屿如尘埃般悬浮在星河之中，彼此间仅由脆弱的以太锁链相连。这里是现实与幻境的夹缝，风中裹挟着陨落神祇的呓语，诱惑着每一个妄图窥探禁忌知识的旅人，稍有不慎便会坠入永恒的虚无。",
      cover: "../assets/images/abyss/abyss.jpg",
    },
    {
      id: 2,
      name: "Frozen Spire",
      cn_name: "永冻之塔",
      x: 71.7,
      y: 32,
      desc: "极寒的暴风雪并非自然形成，而是时间停滞的具象化。晶莹剔透的尖塔刺破苍穹，将万年的历史封冻在绝对零度的镜面之中。在这里，每一片雪花都记录着一段被遗忘的记忆，踏入此塔者将不仅要对抗严寒，更要在静止的时间洪流中守住自己的神智，以免成为永恒的冰雕。",
      cover: "../assets/images/frozen/frozen.jpg",
    },
    {
      id: 3,
      name: "Crimson Corridor",
      cn_name: "绯红回廊",
      x: 17,
      y: 78,
      desc: "大地如同被巨剑劈开，滚烫的液态黄金与地脉熔岩在裂隙中交织奔涌，释放出令人窒息的热浪与魔力。这里是炼金术师的朝圣之地，也是贪婪者的葬身之所。空气中弥漫着硫磺与金属气味，每一步都踏在毁灭与重生的边缘，只有最疯狂的头脑才能驾驭这股狂暴的能量。",
      cover: "../assets/images/crimson/crimson.jpg",
    },
    {
      id: 4,
      name: "Silent Grove",
      cn_name: "静谧林地",
      x: 80,
      y: 81,
      desc: "这里没有风声，也没有虫鸣，只有发光的古老巨树在幽暗中静默伫立。森林拥有活着的意识，它贪婪地汲取着过客的记忆与情感。任何踏入者的心声都会被具象化为发光的灵体，在这里，你最大的敌人不是猛兽，而是你内心深处最隐秘的恐惧与渴望，它们将如影随形。",
      cover: "../assets/images/grove/grove.jpg",
    },
  ];

  const map_stage = document.getElementById("mapStage");
  const loc_title = document.getElementById("locTitle");
  const loc_desc = document.getElementById("locDesc");
  const carousel_track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators_container = document.getElementById("carouselIndicators");

  let currentIndex = 0;

  function init() {
    init_map_points();
    init_carousel_slides();
    init_indicators();
    bind_events();

    activate_location(0);
  }

  /* 初始化地图点 */
  function init_map_points() {
    map_stage.innerHTML = '<div class="land_map"></div>';

    locations.forEach((loc, index) => {
      const point = document.createElement("div");
      point.className = "map_point";
      point.style.left = loc.x + "%";
      point.style.top = loc.y + "%";
      point.dataset.index = index;

      point.innerHTML = `
        <div class="point_pulse"></div>
        <div class="point_icon">✦</div>
        <span class="point_label">${loc.cn_name}</span>
      `;

      point.addEventListener("click", () => {
        activate_location(index);
      });

      map_stage.appendChild(point);
    });
  }

  /* 初始化轮播图轨道 */
  function init_carousel_slides() {
    carousel_track.innerHTML = "";

    locations.forEach((loc) => {
      const slide = document.createElement("div");
      slide.className = "carousel_slide";
      const imgUrl = loc.cover || loc.images?.[0];

      slide.innerHTML = `
        <img src="${imgUrl}" alt="${loc.name}">
        <div class="slide_label">${loc.cn_name}</div>
      `;
      carousel_track.appendChild(slide);
    });
  }

  /* 初始化点 */
  function init_indicators() {
    indicators_container.innerHTML = "";
    locations.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "indicator_dot";
      dot.addEventListener("click", () => activate_location(index));
      indicators_container.appendChild(dot);
    });
  }

  /* 绑定箭头事件 */
  function bind_events() {
    prevBtn.onclick = () => {
      currentIndex = (currentIndex - 1 + locations.length) % locations.length;
      activate_location(currentIndex);
    };
    nextBtn.onclick = () => {
      currentIndex = (currentIndex + 1) % locations.length;
      activate_location(currentIndex);
    };
  }

  /* 更新位置 */
  function activate_location(index) {
    // 同步当前索引
    currentIndex = index;

    // 更新地图点状态
    const points = map_stage.querySelectorAll(".map_point");
    points.forEach((p) => p.classList.remove("active"));
    if (points[index]) points[index].classList.add("active");

    // 更新指示点状态
    const dots = document.querySelectorAll(".indicator_dot");
    dots.forEach((d) => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");

    // 更新文字描述
    loc_title.style.opacity = 0;
    loc_desc.style.opacity = 0;
    setTimeout(() => {
      const loc = locations[index];
      loc_title.innerHTML = `${loc.name} <span style="font-size:0.6em; color:#888;">${loc.cn_name}</span>`;
      loc_desc.innerText = loc.desc;
      loc_title.style.opacity = 1;
      loc_desc.style.opacity = 1;
    }, 200);

    // 移动轮播图轨道
    const translateValue = index * -100;
    carousel_track.style.transform = `translateX(${translateValue}%)`;

    const slides = carousel_track.querySelectorAll(".carousel_slide");
    slides.forEach((s) => s.classList.remove("active"));
    if (slides[index]) slides[index].classList.add("active");
  }

  init();
});
