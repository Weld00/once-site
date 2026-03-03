const majorForm = document.querySelector("#major-form");
const minorForm = document.querySelector("#minor-form");
const majorResult = document.querySelector("#major-result");
const minorResult = document.querySelector("#minor-result");
const majorFeedback = document.querySelector("#major-feedback");
const minorFeedback = document.querySelector("#minor-feedback");

const MAJOR_PLACEHOLDER =
  "填好问题后，这里会输出建议倾向、核心理由、下一步建议和决策提醒。";
const MINOR_PLACEHOLDER = "输入问题后，一思会立刻给出一个干脆答案。";

const MINOR_ANSWER_POOL = [
  "去",
  "不去",
  "买",
  "不买",
  "现在做",
  "晚点再说",
  "选第一个",
  "选第二个",
  "今天别纠结了",
];

function compactText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function showMessage(node, message, type = "") {
  node.textContent = message;
  node.className = "form-feedback";
  if (type) {
    node.classList.add(`is-${type}`);
  }
}

function resetResult(node, placeholder) {
  node.classList.add("is-resetting");
  node.innerHTML = `<div class="result-placeholder">${placeholder}</div>`;
  window.setTimeout(() => {
    node.classList.remove("is-resetting");
  }, 80);
}

function renderResult(node, html) {
  node.classList.add("is-resetting");
  window.setTimeout(() => {
    node.innerHTML = html;
    node.classList.remove("is-resetting");
  }, 100);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getMajorFormData() {
  const formData = new FormData(majorForm);
  return {
    question: compactText(formData.get("question")),
    optionA: compactText(formData.get("optionA")),
    optionB: compactText(formData.get("optionB")),
    loss: compactText(formData.get("loss")),
    gain: compactText(formData.get("gain")),
    reversible: formData.get("reversible"),
    risk: formData.get("risk"),
    info: formData.get("info"),
  };
}

function getMinorFormData() {
  const formData = new FormData(minorForm);
  return {
    question: compactText(formData.get("question")),
    optionA: compactText(formData.get("optionA")),
    optionB: compactText(formData.get("optionB")),
  };
}

function validateMajorForm(data) {
  if (!data.question) {
    return {
      valid: false,
      message: "请先写下你正在纠结的大问题。",
      focusId: "major-question",
    };
  }

  if (!data.reversible || !data.risk || !data.info) {
    return {
      valid: false,
      message: "请确认可逆性、风险感受和信息充分度。",
      focusId: "major-question",
    };
  }

  return { valid: true };
}

function validateMinorForm(data) {
  if (!data.question) {
    return {
      valid: false,
      message: "请先写下你要快速决定的小问题。",
      focusId: "minor-question",
    };
  }

  return { valid: true };
}

function scoreMajorDecision(data) {
  let score = 0;
  const reasons = [];
  const nextSteps = [];

  if (data.info === "low") {
    score -= 4;
    reasons.push("你当前掌握的信息还不充分，直接下判断更容易受猜测和情绪影响。");
    nextSteps.push("先补一个最关键的事实，再回来做判断。");
  } else if (data.info === "medium") {
    reasons.push("信息处于一般水平，已经能初步判断，但还不适合过度自信。");
    nextSteps.push("补一条最影响结论的信息，避免在模糊地带硬选。");
  } else {
    score += 2;
    reasons.push("你掌握的信息相对充分，已经具备做阶段性决定的基础。");
  }

  if (data.reversible === "high") {
    score += 2;
    reasons.push("这件事可逆，说明试错成本相对可控，更适合考虑小步行动。");
    nextSteps.push("优先做一个低成本版本的试探，而不是一次性全押。");
  } else if (data.reversible === "medium") {
    reasons.push("这件事部分可逆，可以行动，但最好先想清楚回撤条件。");
  } else {
    score -= 2;
    reasons.push("这件事不可逆，意味着一旦做错，修正代价会比较高。");
    nextSteps.push("先设止损线和回撤边界，再考虑要不要继续。");
  }

  if (data.risk === "low") {
    score += 2;
    reasons.push("你的风险感受较低，说明阻力主要不在承受能力，而在是否值得。");
  } else if (data.risk === "medium") {
    reasons.push("风险处于中间区间，重点不是冲不冲，而是值不值得承担。");
    nextSteps.push("把风险拆成最坏情况、发生概率和损失上限，再逐条看。");
  } else {
    score -= 3;
    reasons.push("你对风险的感受已经偏高，这通常意味着现在还缺安全边界。");
    nextSteps.push("先不要在高风险感受下仓促推进，先确认最坏情况是否扛得住。");
  }

  if (data.gain && data.loss) {
    reasons.push(`你最想得到“${data.gain}”，最担心失去“${data.loss}”，这说明真正难的是取舍，不是答案本身。`);
  } else if (data.gain) {
    score += 1;
    reasons.push(`你已经能说清楚自己最想得到“${data.gain}”，目标相对明确。`);
  } else if (data.loss) {
    score -= 1;
    reasons.push(`你最担心失去“${data.loss}”，这说明顾虑是真实存在的，不适合轻率决定。`);
  } else {
    reasons.push("你还没有明确最想得到什么、最怕失去什么，判断标准仍然偏模糊。");
    nextSteps.push("先写一句话：做了最想得到什么，不做最怕失去什么。");
  }

  if (data.optionA && data.optionB) {
    reasons.push(`如果要比较，当前其实是在比较“${data.optionA}”和“${data.optionB}”这两条路径。`);
  }

  let recommendation = "暂缓决定";
  let badgeClass = "is-wait";

  if (data.info === "low") {
    recommendation = "先补信息";
    badgeClass = "is-wait";
  } else if (data.risk === "high" && data.reversible === "low") {
    recommendation = "偏向不行动";
    badgeClass = "is-stop";
  } else if (score >= 3) {
    recommendation = "偏向行动";
    badgeClass = "";
  } else if (score <= -2) {
    recommendation = "偏向不行动";
    badgeClass = "is-stop";
  } else {
    recommendation = "暂缓决定";
    badgeClass = "is-wait";
  }

  if (recommendation === "偏向行动") {
    nextSteps.push("给自己一个起步版本和观察期限，先行动再验证。");
  }

  if (recommendation === "偏向不行动") {
    nextSteps.push("把“不做”的判断标准写下来，避免之后被同样的问题反复消耗。");
  }

  if (recommendation === "暂缓决定") {
    nextSteps.push("给自己一个明确期限，而不是无限拖延。");
    nextSteps.push("尽量不要在高情绪状态下做最终决定。");
  }

  if (recommendation === "先补信息") {
    nextSteps.push("优先找那个一旦确认就会明显改变结论的事实。");
  }

  return {
    recommendation,
    badgeClass,
    reasons: uniqueList(reasons).slice(0, 4),
    nextSteps: uniqueList(nextSteps).slice(0, 3),
    reminder: "决策工具只能辅助，真正承担结果的是你自己。",
  };
}

function renderMajorResult(result, data) {
  const compareLine =
    data.optionA && data.optionB
      ? `<p class="result-text">当前比较的是 <strong>${escapeHtml(data.optionA)}</strong> 与 <strong>${escapeHtml(data.optionB)}</strong>。</p>`
      : "";

  return `
    <h3 class="result-title">“${escapeHtml(data.question)}”的判断结果</h3>
    <div class="result-badge ${result.badgeClass}">当前建议倾向：${escapeHtml(result.recommendation)}</div>
    ${compareLine}
    <div class="result-block">
      <h3>核心判断理由</h3>
      <ol class="result-list">
        ${result.reasons.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>
    <div class="result-block">
      <h3>下一步建议</h3>
      <ol class="result-list">
        ${result.nextSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>
    <div class="result-block">
      <h3>决策提醒</h3>
      <p class="result-text">${escapeHtml(result.reminder)}</p>
    </div>
  `;
}

function parseMinorCandidates(question) {
  const separators = ["还是", "或者", "/", "／", "|", " or ", " OR "];
  for (const separator of separators) {
    if (question.includes(separator)) {
      const items = question
        .split(separator)
        .map((item) => compactText(item))
        .filter(Boolean);
      if (items.length >= 2) {
        return items.slice(0, 2);
      }
    }
  }

  return [];
}

function generateMinorDecision(data) {
  let candidates = [];

  if (data.optionA && data.optionB) {
    candidates = [data.optionA, data.optionB];
  } else {
    candidates = parseMinorCandidates(data.question);
  }

  if (candidates.length < 2) {
    candidates = MINOR_ANSWER_POOL;
  }

  const answer = pickRandom(candidates);
  const notePool = [
    "这类小事到这里就够了，别继续拉扯。",
    "现在最值钱的不是完美答案，而是把纠结停下来。",
    "低代价问题不必追求最优，先往下走。",
  ];

  return {
    answer,
    note: pickRandom(notePool),
  };
}

function renderMinorResult(result, data) {
  return `
    <h3 class="result-title">小问题结果</h3>
    <div class="result-badge">快速决定：${escapeHtml(result.answer)}</div>
    <p class="minor-answer">${escapeHtml(result.answer)}</p>
    <div class="result-block">
      <h3>补一句</h3>
      <p class="result-text">${escapeHtml(result.note)}</p>
    </div>
    <div class="result-block">
      <h3>当前问题</h3>
      <p class="result-text">${escapeHtml(data.question)}</p>
    </div>
  `;
}

function handleMajorSubmit(event) {
  event.preventDefault();
  showMessage(majorFeedback, "");
  resetResult(majorResult, MAJOR_PLACEHOLDER);

  const data = getMajorFormData();
  const validation = validateMajorForm(data);
  if (!validation.valid) {
    showMessage(majorFeedback, validation.message, "error");
    document.getElementById(validation.focusId).focus();
    return;
  }

  const result = scoreMajorDecision(data);
  renderResult(majorResult, renderMajorResult(result, data));
  showMessage(majorFeedback, "分析已更新，你可以修改条件后重新判断。", "success");
}

function handleMinorSubmit(event) {
  event.preventDefault();
  showMessage(minorFeedback, "");
  resetResult(minorResult, MINOR_PLACEHOLDER);

  const data = getMinorFormData();
  const validation = validateMinorForm(data);
  if (!validation.valid) {
    showMessage(minorFeedback, validation.message, "error");
    document.getElementById(validation.focusId).focus();
    return;
  }

  const result = generateMinorDecision(data);
  renderResult(minorResult, renderMinorResult(result, data));
  showMessage(minorFeedback, "结果已生成，别再反复犹豫。", "success");
}

majorForm.addEventListener("submit", handleMajorSubmit);
minorForm.addEventListener("submit", handleMinorSubmit);
