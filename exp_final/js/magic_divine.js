const destinyData = [
  {
    name: "太阳 (The Sun)",
    icon: "☀️",
    mean: "充满活力、成功与喜悦。即使在黑暗中，希望之光也从未熄灭。",
  },
  {
    name: "月亮 (The Moon)",
    icon: "🌙",
    mean: "直觉、潜意识与未知的迷茫。相信直觉，看清幻象背后的真实。",
  },
  {
    name: "星星 (The Star)",
    icon: "⭐",
    mean: "治愈、灵感与宁静的指引。风暴已过，现在是重拾信心的时刻。",
  },
  {
    name: "命运之轮",
    icon: "🎡",
    mean: "改变、循环与不可抗拒的命运。无论顺境逆境，都应顺势而为。",
  },
  {
    name: "隐士 (The Hermit)",
    icon: "🕯️",
    mean: "内省、孤独与寻求真理。现在适合独自思考，答案就在你心中。",
  },
  {
    name: "战车 (The Chariot)",
    icon: "🛡️",
    mean: "意志力、胜利与自我控制。保持坚定的目标，就能冲破阻碍。",
  },
];

let isDivining = false;

function start_divination() {
  if (isDivining) return;
  isDivining = true;

  const ball = document.getElementById("magicBall");
  const instruction = document.getElementById("instruction");
  const layout = document.getElementById("magicTabs");

  instruction.innerText = "正在沟通星灵...";
  ball.classList.add("shaking");

  if (layout) layout.classList.remove("show");

  setTimeout(() => {
    instruction.innerText = "命运已揭晓：";

    const results = get_random_cards(3);
    render_results(results);

    isDivining = false;
  }, 2000);
}

function get_random_cards(count) {
  let shuffled = [...destinyData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function render_results(cards) {
  const positionMeanings = [
    "这张牌揭示了过去的能量根基，它是你现在的因。",
    "这是你当下的核心状态，也是命运的转折点。",
    "若保持当前轨迹，这是星辰指引的可能未来。",
  ];

  cards.forEach((card, index) => {
    const tabContent = document.getElementById(`tab_${index}`);

    if (tabContent) {
      tabContent.innerHTML = `
          <h3>${card.icon} ${card.name}</h3>
          <p><strong>🔮 牌面含义：</strong><br>${card.mean}</p>
          <div class="magic_quote">“${positionMeanings[index]}”</div>
        `;
    }
  });

  const layout = document.getElementById("magicTabs");
  if (layout) {
    layout.classList.add("show");
    document
      .querySelector('.tabbar a[data-index="0"]')
      .dispatchEvent(new Event("mouseover"));
  }
}

window.start_divination = start_divination;
