const majorQuestionInput = document.querySelector("#major-question");
const minorQuestionInput = document.querySelector("#minor-question");
const optionAInput = document.querySelector("#option-a");
const optionBInput = document.querySelector("#option-b");
const analyzeBtn = document.querySelector("#analyze-btn");
const decideBtn = document.querySelector("#decide-btn");
const majorResult = document.querySelector("#major-result");
const minorResult = document.querySelector("#minor-result");
const pageShell = document.querySelector(".page-shell");
const majorCard = document.querySelector("#major-card");
const minorCard = document.querySelector("#minor-card");
const closeCardButtons = document.querySelectorAll("[data-close-card]");

const majorCriteria = [
  { key: "growth", label: "长期价值" },
  { key: "feasibility", label: "现实可行性" },
  { key: "risk", label: "风险承受度" },
  { key: "desire", label: "内心意愿" },
];

const majorTemplates = {
  goals: [
    "先界定你真正想保住的核心目标，是稳定、成长、自由，还是关系与安全感。",
    "把表面问题往下追一层，确认你要解决的是短期焦虑，还是长期方向。",
    "先分清这是“想得到更多”还是“避免失去更多”，判断标准会完全不同。",
  ],
  gains: [
    "如果选择推进，最可能得到的是新机会、环境变化和更强的主动权。",
    "积极的一面往往不是立刻见效，而是为未来打开新的可能性和空间。",
    "这类决定的收益通常来自长期复利，而不是眼前舒适。",
  ],
  risks: [
    "主要风险通常在于信息不完整、情绪放大和低估后续代价。",
    "你需要正视最坏情况是否可承受，而不是只看最好情况是否诱人。",
    "真正危险的部分可能不是做错，而是仓促行动后没有回撤空间。",
  ],
  costs: [
    "除了金钱，也要把时间、精力、关系消耗和机会成本一起算进去。",
    "别只问“做要付出什么”，也要问“不做会持续失去什么”。",
    "很多大问题的成本藏在后续维护里，而不是启动那一刻。",
  ],
  actions: [
    "更稳妥的做法是先补足关键信息，再设置一个清晰的决定期限。",
    "如果暂时无法下结论，可以先做低成本试探，而不是立刻全押。",
    "把决定拆成下一步动作，会比继续空想更快接近真实答案。",
  ],
};

const minorFallbackChoices = [
  "就选这个",
  "直接定它",
  "别再拖了，就它",
  "今天按这个来",
];

const minorActionLines = [
  "这类小事的关键不是最优，而是立刻结束内耗。",
  "你的时间比这个选择本身更贵，执行就行。",
  "低风险问题不必追求完美，选了就往下走。",
  "把纠结省下来给真正重要的事情。",
];

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function compactQuestion(value) {
  return value.replace(/\s+/g, " ").trim();
}

function clampScore(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return fallback;
  }

  return Math.min(10, Math.max(1, parsed));
}

function splitOptions(question) {
  const normalized = question
    .replace(/[？?]/g, "")
    .replace(/[，,]/g, " ")
    .trim();

  const separators = ["还是", "或者", " or ", " OR ", "/", "／", "|"];
  for (const separator of separators) {
    if (normalized.includes(separator)) {
      return normalized
        .split(separator)
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  return [];
}

function setFocusedCard(type) {
  const isMajor = type === "major";
  const isMinor = type === "minor";

  pageShell.classList.toggle("is-focused", isMajor || isMinor);
  document.body.classList.toggle("locked", isMajor || isMinor);
  majorCard.classList.toggle("is-active", isMajor);
  minorCard.classList.toggle("is-active", isMinor);
}

function buildWeightedDecision() {
  const optionA = compactQuestion(optionAInput.value) || "方案 A";
  const optionB = compactQuestion(optionBInput.value) || "方案 B";

  const rows = majorCriteria.map((criterion) => {
    const weight = clampScore(
      document.querySelector(`#weight-${criterion.key}`).value,
      5,
    );
    const scoreA = clampScore(
      document.querySelector(`#score-a-${criterion.key}`).value,
      5,
    );
    const scoreB = clampScore(
      document.querySelector(`#score-b-${criterion.key}`).value,
      5,
    );

    return {
      ...criterion,
      weight,
      scoreA,
      scoreB,
      weightedA: weight * scoreA,
      weightedB: weight * scoreB,
    };
  });

  const totalA = rows.reduce((sum, row) => sum + row.weightedA, 0);
  const totalB = rows.reduce((sum, row) => sum + row.weightedB, 0);
  const difference = Math.abs(totalA - totalB);
  const winner = totalA >= totalB ? optionA : optionB;
  const loser = totalA >= totalB ? optionB : optionA;
  const decisiveRow = rows.reduce((best, row) => {
    const gap = Math.abs(row.weightedA - row.weightedB);
    if (!best || gap > best.gap) {
      return { label: row.label, gap };
    }

    return best;
  }, null);

  return {
    optionA,
    optionB,
    totalA,
    totalB,
    difference,
    winner,
    loser,
    decisiveLabel: decisiveRow ? decisiveRow.label : "综合判断",
  };
}

function renderMajorResult(question) {
  const safeQuestion = escapeHtml(question);
  const decision = buildWeightedDecision();
  const scoreLeadText =
    decision.difference <= 12
      ? `两边总分接近，目前更像是偏向 ${escapeHtml(decision.winner)}，但还没有拉开决定性差距。`
      : `${escapeHtml(decision.winner)} 的加权总分更高，当前更值得优先推进。`;

  const actionText =
    decision.difference <= 12
      ? `建议把争议最大的“${decision.decisiveLabel}”单独补信息，再给自己一个最终决定期限。`
      : `建议先按 ${escapeHtml(decision.winner)} 往前走，同时为 ${escapeHtml(decision.loser)} 保留最低成本的回撤空间。`;
  const sections = [
    ["先看目标", pickRandom(majorTemplates.goals)],
    ["加权判断", scoreLeadText],
    ["可能收益", `${pickRandom(majorTemplates.gains)} 从当前评分看，更占优的是 ${escapeHtml(decision.winner)}。`],
    ["主要风险", `${pickRandom(majorTemplates.risks)} 眼下最需要继续核实的维度是“${decision.decisiveLabel}”。`],
    ["现实成本", pickRandom(majorTemplates.costs)],
    ["处理意见", `${pickRandom(majorTemplates.actions)} ${actionText}`],
  ];

  majorResult.innerHTML = `
    <h3 class="result-title">关于“${safeQuestion}”的多一思</h3>
    <div class="score-badge">加权比较结果</div>
    <div class="score-summary">
      <div class="score-stat">
        <strong>${escapeHtml(decision.optionA)}</strong>
        <span>${decision.totalA}</span>
      </div>
      <div class="score-stat">
        <strong>${escapeHtml(decision.optionB)}</strong>
        <span>${decision.totalB}</span>
      </div>
    </div>
    ${sections
      .map(
        ([title, content]) => `
          <div class="result-block">
            <h3>${title}</h3>
            <p>${content}</p>
          </div>
        `,
      )
      .join("")}
  `;
}

function renderMinorResult(question) {
  const options = splitOptions(question);
  const chosenOption =
    options.length >= 2 ? pickRandom(options) : pickRandom(minorFallbackChoices);
  const summary =
    options.length >= 2
      ? `一思替你拍板：${escapeHtml(chosenOption)}`
      : `一思的建议：${escapeHtml(chosenOption)}`;

  const questionLabel =
    options.length >= 2
      ? `你问的是：${escapeHtml(question)}`
      : "这个问题没有明显的选项分隔，我先直接给你一个行动信号。";

  minorResult.innerHTML = `
    <div class="decision-pill">随机决断已生成</div>
    <h3 class="minor-choice">${escapeHtml(chosenOption)}</h3>
    <p class="minor-summary">${summary}</p>
    <div class="result-block">
      <h3>一句理由</h3>
      <p class="minor-detail">${pickRandom(minorActionLines)}</p>
    </div>
    <div class="result-block">
      <h3>当前问题</h3>
      <p class="minor-detail">${questionLabel}</p>
    </div>
  `;
}

analyzeBtn.addEventListener("click", () => {
  const question = compactQuestion(majorQuestionInput.value);
  setFocusedCard("major");

  if (!question) {
    majorResult.innerHTML = `
      <div class="result-empty">
        先写下那个真正让你犹豫的大问题，再来做分析。
      </div>
    `;
    return;
  }

  renderMajorResult(question);
});

decideBtn.addEventListener("click", () => {
  const question = compactQuestion(minorQuestionInput.value);
  setFocusedCard("minor");

  if (!question) {
    minorResult.innerHTML = `
      <div class="result-empty">
        先输入一个小问题，比如“喝咖啡还是喝茶”，我再替你快选。
      </div>
    `;
    return;
  }

  renderMinorResult(question);
});

majorQuestionInput.addEventListener("focus", () => {
  setFocusedCard("major");
});

minorQuestionInput.addEventListener("focus", () => {
  setFocusedCard("minor");
});

closeCardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFocusedCard("");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setFocusedCard("");
  }
});
