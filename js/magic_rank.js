const rank_data = {
  1: {
    title: "NOVICE · 初阶魔女",
    desc: "刚刚觉醒以太感知，只能进行最基础的精神冥想。",
    spells: [
      {
        name: "以太感应",
        element: "aether",
        elementName: "以太",
        effect: "感知周围魔力流动",
        detail: "感知环境中的以太变化，是所有施法与符文操作的前置能力。",
        icon: "aether",
      },
      {
        name: "基础冥想术",
        element: "mind",
        elementName: "精神",
        effect: "恢复魔力并稳定精神",
        detail: "通过呼吸与精神集中，缓慢恢复魔力，同时降低精神紊乱风险。",
        icon: "mind",
      },
    ],
  },

  2: {
    title: "APPRENTICE · 学徒魔女",
    desc: "可以稳定引导魔力，开始尝试符文与简单法术。",
    spells: [
      {
        name: "符文刻印",
        element: "rune",
        elementName: "符文",
        effect: "存储或放大法术效果",
        detail: "在媒介上刻写基础符文，用于延迟释放或增强法术。",
        icon: "rune",
      },
      {
        name: "微光护盾",
        element: "shield",
        elementName: "防护",
        effect: "抵挡少量伤害",
        detail: "生成一层不稳定的能量护盾，可抵挡轻微物理与魔法冲击。",
        icon: "shield",
      },
      {
        name: "魔力聚焦",
        element: "focus",
        elementName: "能量",
        effect: "提升施法精度",
        detail: "短时间内集中魔力，提高命中与稳定性，但会加剧精神疲劳。",
        icon: "focus",
      },
    ],
  },

  3: {
    title: "WITCH · 正式魔女",
    desc: "掌握完整施法流程，可在战斗与仪式中独立运用魔法。",
    spells: [
      {
        name: "元素塑形",
        element: "elemental",
        elementName: "元素",
        effect: "操控并塑造基础元素",
        detail: "对火、水、风等基础元素进行定向塑形，是战斗法术的核心能力。",
        icon: "elemental",
      },
      {
        name: "灵魂共鸣",
        element: "soul",
        elementName: "灵魂",
        effect: "增强法术稳定性",
        detail: "通过灵魂频率共振，使连续施法更加稳定可靠。",
        icon: "soul",
      },
      {
        name: "诅咒术",
        element: "curse",
        elementName: "暗蚀",
        effect: "削弱目标状态",
        detail: "向目标施加持续性的负面影响，效果随时间加深。",
        icon: "curse",
      },
    ],
  },

  4: {
    title: "MAGUS · 高阶法师",
    desc: "对魔力结构具有深刻理解，能够改写法术本身。",
    spells: [
      {
        name: "法术重构",
        element: "arcane",
        elementName: "奥术",
        effect: "修改法术结构",
        detail: "在施法过程中即时调整法术参数，如范围、形态或触发方式。",
        icon: "arcane",
      },
      {
        name: "领域展开",
        element: "domain",
        elementName: "领域",
        effect: "构建持续性法术区域",
        detail: "在指定区域内展开魔法领域，使自身法术获得持续强化。",
        icon: "domain",
      },
      {
        name: "高阶召唤",
        element: "summon",
        elementName: "召唤",
        effect: "召唤强力魔法存在",
        detail: "召唤具有自主行动能力的魔法实体，需持续维持魔力供给。",
        icon: "summon",
      },
    ],
  },

  5: {
    title: "ARCHMAGE · 大法师",
    desc: "以太法则的掌控者，魔法已成为本能反射。",
    spells: [
      {
        name: "现实干涉",
        element: "reality",
        elementName: "现实",
        effect: "短暂改变现实状态",
        detail: "直接干预现实法则，使不可能的现象在短时间内成立。",
        icon: "reality",
      },
      {
        name: "法则重构",
        element: "law",
        elementName: "法则",
        effect: "永久改变魔法规则",
        detail: "对局部区域的魔法法则进行重写，其影响可能长期存在。",
        icon: "law",
      },
      {
        name: "禁忌仪式",
        element: "forbidden",
        elementName: "禁忌",
        effect: "引发灾难级结果",
        detail: "以巨大代价换取超规格效果，施术者往往无法全身而退。",
        icon: "forbidden",
      },
    ],
  },
};

function getIcon(key) {
  const common = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  
  const icons = {
    // --- Rank 1: Novice ---
    aether: `
      <svg viewBox="0 0 24 24" ${common}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    `,
    mind: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M12 3a7 7 0 0 1 7 7v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-4a7 7 0 0 1 7-7z" />
        <path d="M9 10h.01M15 10h.01M12 14v1" />
      </svg>
    `,

    // --- Rank 2: Apprentice ---
    rune: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M12 2l10 6-3 14H5L2 8z" />
        <path d="M12 6v12M8 10l8 4M8 14l8-4" />
      </svg>
    `,
    shield: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    `,
    focus: `
      <svg viewBox="0 0 24 24" ${common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M12 12h.01" stroke-width="3"/>
      </svg>
    `,

    // --- Rank 3: Witch ---
    elemental: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.2-2.2.6-3.3a7 7 0 0 0 2.9 2.8z" />
      </svg>
    `,
    soul: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-dasharray="2 2"/>
        <path d="M12 8a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3z" />
      </svg>
    `,
    curse: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M9 2L7 6h10l-2-4" />
        <path d="M5 8h14v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" />
        <path d="M9 13l6-3M9 10l6 3" />
      </svg>
    `,

    // --- Rank 4: Magus ---
    arcane: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M2 8h20L12 22 2 8z" />
        <circle cx="12" cy="14" r="2" />
      </svg>
    `,
    domain: `
      <svg viewBox="0 0 24 24" ${common}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="5" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      </svg>
    `,
    summon: `
      <svg viewBox="0 0 24 24" ${common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3l2 7h7l-5 4 2 7-6-4-6 4 2-7-5-4h7z" />
      </svg>
    `,

    // --- Rank 5: Archmage ---
    reality: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M4 4l16 16M4 20L20 4" stroke-width="1" />
        <rect x="2" y="2" width="20" height="20" rx="2" stroke-dasharray="4 4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    `,
    law: `
      <svg viewBox="0 0 24 24" ${common}>
        <path d="M16 3h5v5M4 20L20 4M3 16v5h5" />
        <path d="M8 21s-2-4-2-8 2-8 6-8 6 4 6 8-2 8-6 8z" />
      </svg>
    `,
    forbidden: `
      <svg viewBox="0 0 24 24" ${common}>
        <circle cx="12" cy="12" r="10" stroke-dasharray="2 4"/>
        <path d="M12 8a4 4 0 0 0-4 4c0 4 4 8 4 8s4-4 4-8a4 4 0 0 0-4-4z" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    `,
  };

  return icons[key] || icons['aether']; 
}

function renderSpell(spell) {
  return `
    <div class="skill_card element_${spell.element}">
      <div class="skill_header">
        <div class="skill_icon_wrapper">
          ${getIcon(spell.icon)}
        </div>
        <div class="skill_title">
          <h5>${spell.name}</h5>
          <span class="skill_element">${spell.elementName}</span>
        </div>
      </div>

      <div class="skill_effect">
        <strong>主要作用：</strong>${spell.effect}
      </div>

      <details class="skill_detail">
        <summary>技能说明</summary>
        <p>${spell.detail}</p>
      </details>
    </div>
  `;
}

const slider = document.getElementById("magicRank");
const info = document.getElementById("magicInfo");

const rank_thresholds = [20, 40, 60, 80, 100];

function get_rank_by_value(value) {
  for (let i = 0; i < rank_thresholds.length; i++) {
    if (value < rank_thresholds[i]) return i + 1;
  }
  return rank_thresholds.length;
}

function update_rank(value) {
  const rank = get_rank_by_value(value);
  slider.className = `magic_slider rank_${rank}`;

  const percent = value;
  slider.style.setProperty("--percent", `${percent}%`);

  const data = rank_data[rank];
  info.innerHTML = `
    <h4>${data.title}</h4>
    <p>${data.desc}</p>

    <div class="skill_grid">
      ${data.spells.map(renderSpell).join("")}
    </div>
`;
}

slider.addEventListener("input", (e) => update_rank(+e.target.value));

update_rank(slider.value);
