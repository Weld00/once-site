const STORAGE_LANGUAGE_KEY = "yisi_preferred_language";
const SUPPORTED_LANGUAGES = new Set(["zh", "en"]);
const ZH_COUNTRY_CODES = new Set(["CN", "HK", "MO", "TW"]);

const I18N = {
  zh: {
    "meta.title": "一思 | 大事多一思，小事只一思",
    "meta.description": "一思是一个纯静态、本地运行的决策工具，帮助你把纠结分成值得想和不值得耗的两类。",
    "language.button.toEnglish": "English",
    "language.button.toChinese": "中文",
    "language.aria.toEnglish": "Switch to English",
    "language.aria.toChinese": "切换为中文",
    "gate.headline": "大事多一思，小事只一思",
    "gate.summary.line1": "先分清这件事值不值得多想，",
    "gate.summary.line2": "再决定该认真判断，还是快速定掉。",
    "gate.aria.entries": "选择入口",
    "gate.major.label": "适合重要问题",
    "gate.major.title": "认真判断",
    "gate.major.desc.line1": "用在影响时间长、代价高、做错难回头的事。",
    "gate.major.desc.line2": "你输入条件，一思帮你把风险、信息和得失拆开看。",
    "gate.major.button": "进入认真判断",
    "gate.minor.label": "适合轻量选择",
    "gate.minor.title": "快速决定",
    "gate.minor.desc.line1": "用在低风险、低代价、不值得继续耗心力的小问题。",
    "gate.minor.desc.line2": "直接给出答案，帮你尽快结束内耗。",
    "gate.minor.button": "进入快速决定",
    "gate.note": "所有输入都只在当前浏览器处理，不登录、不上传、不保存。",
    "action.backHome": "返回首页",
    "main.aria.tool": "决策工具",
    "mode.major": "当前模式：认真判断",
    "mode.minor": "当前模式：快速决定",
    "major.panel.kicker": "认真判断",
    "major.panel.title": "把重要问题拆开来看",
    "major.panel.desc.line1": "适合影响较长、代价较大、需要认真权衡的决定。",
    "major.panel.desc.line2": "你提供条件，一思给出结构化倾向，而不是替你武断拍板。",
    "major.field.question": "问题描述",
    "major.field.optionA": "选项 A",
    "major.field.optionB": "选项 B",
    "major.field.loss": "最担心失去什么",
    "major.field.gain": "最想得到什么",
    "major.field.reversible": "是否可逆",
    "major.field.risk": "风险感受",
    "major.field.info": "信息是否充分",
    "major.option.reversible.high": "可逆",
    "major.option.reversible.medium": "部分可逆",
    "major.option.reversible.low": "不可逆",
    "major.option.risk.low": "低",
    "major.option.risk.medium": "中",
    "major.option.risk.high": "高",
    "major.option.info.low": "不充分",
    "major.option.info.medium": "一般",
    "major.option.info.high": "充分",
    "major.placeholder.question": "例如：我在纠结要不要换工作 / 要不要现在买 / 要不要继续投入",
    "major.placeholder.optionA": "例如：继续留在现在岗位",
    "major.placeholder.optionB": "例如：接受新机会",
    "major.placeholder.loss": "例如：稳定、现金流、关系、时间",
    "major.placeholder.gain": "例如：成长、自由、效率、机会",
    "major.submit": "开始分析",
    "major.result.placeholder": "填好问题后，这里会输出建议倾向、核心理由、下一步建议和决策提醒。",
    "major.feedback.updated": "分析已更新，你可以修改条件后重新判断。",
    "major.feedback.emptyQuestion": "请先写下你正在纠结的大问题。",
    "major.feedback.requiredFields": "请确认可逆性、风险感受和信息充分度。",
    "major.result.title": "“{question}”的判断结果",
    "major.result.tendency": "当前建议倾向：{value}",
    "major.result.compare": "当前比较的是 {optionA} 与 {optionB}。",
    "major.result.section.reasons": "核心判断理由",
    "major.result.section.steps": "下一步建议",
    "major.result.section.reminder": "决策提醒",
    "major.result.reminder": "决策工具只能辅助，真正承担结果的是你自己。",
    "major.recommendation.act": "偏向行动",
    "major.recommendation.stop": "偏向不行动",
    "major.recommendation.wait": "暂缓决定",
    "major.recommendation.info": "先补信息",
    "major.reason.info.low": "你当前掌握的信息还不充分，直接判断容易受猜测和情绪影响。",
    "major.reason.info.medium": "信息处于一般水平，已经能初步判断，但还不适合过度自信。",
    "major.reason.info.high": "信息相对充分，已经具备做阶段性决定的基础。",
    "major.reason.reversible.high": "这件事可逆，试错成本相对可控，更适合小步行动。",
    "major.reason.reversible.medium": "这件事部分可逆，可以行动，但最好提前想清楚回撤条件。",
    "major.reason.reversible.low": "这件事不可逆，一旦做错，修正代价会明显偏高。",
    "major.reason.risk.low": "你的风险感受较低，阻力主要不在承受能力，而在是否值得。",
    "major.reason.risk.medium": "风险在中间区间，关键是值不值得承担，而不是冲不冲。",
    "major.reason.risk.high": "你对风险的感受已经偏高，说明当前仍缺关键安全边界。",
    "major.reason.tradeoff.both": "你最想得到“{gain}”，最担心失去“{loss}”，真正难点是取舍而不是答案本身。",
    "major.reason.tradeoff.gain": "你能说清楚最想得到“{gain}”，目标相对明确。",
    "major.reason.tradeoff.loss": "你最担心失去“{loss}”，顾虑是真实存在的，不适合轻率决定。",
    "major.reason.tradeoff.none": "你还没明确最想得到和最怕失去，判断标准仍偏模糊。",
    "major.reason.options": "你当前在比较“{optionA}”与“{optionB}”两条路径。",
    "major.reason.signal.familiarity": "问题里有“方向不熟/经验不足”信号，信息质量比执行速度更重要。",
    "major.reason.signal.specialist": "这类问题涉及专业判断，单次主观感受通常不足以支撑最终结论。",
    "major.reason.signal.emotional": "问题中有明显情绪或冲动时点，直接决策容易放大短期波动。",
    "major.reason.signal.financial": "问题包含高杠杆或翻本心态信号，亏损扩大风险通常高于潜在收益。",
    "major.step.info.low": "先补一个关键事实，再回来做判断。",
    "major.step.info.medium": "补一条最影响结论的信息，避免在模糊地带硬选。",
    "major.step.info.keyFact": "优先找那个一旦确认就会明显改变结论的事实。",
    "major.step.reversible.high": "先做一个低成本试探版本，不要一次性全押。",
    "major.step.reversible.low": "先设止损线和回撤边界，再考虑要不要继续。",
    "major.step.risk.medium": "把最坏情况、发生概率和损失上限拆开逐条看。",
    "major.step.risk.high": "先确认最坏情况是否扛得住，再决定是否推进。",
    "major.step.tradeoff.write": "写一句话：做了最想得到什么，不做最怕失去什么。",
    "major.step.signal.familiarity": "先补一轮一手信息，例如访谈、试做或请教有实操经验的人。",
    "major.step.signal.specialist": "至少补一条专业意见（如医生第二意见、法律条款确认）再定。",
    "major.step.signal.emotional": "先离开当前情绪高点，给自己至少一个冷静窗口再决定。",
    "major.step.signal.financial": "把现金流安全放在第一位，不要用高风险动作去弥补旧损失。",
    "major.step.result.act": "给自己一个起步版本和观察期限，先行动再验证。",
    "major.step.result.stop": "把“不做”的判断标准写下来，避免反复被同一问题消耗。",
    "major.step.result.wait.1": "给自己一个明确观察期限，而不是无限拖延。",
    "major.step.result.wait.2": "尽量不要在高情绪状态下做最终决定。",
    "minor.panel.kicker": "快速决定",
    "minor.panel.title": "把小问题立刻定掉",
    "minor.panel.desc.line1": "适合低风险、低代价、无需反复推演的选择。",
    "minor.panel.desc.line2": "目标不是最优答案，而是尽快停止不必要的拉扯。",
    "minor.field.question": "小问题描述",
    "minor.field.optionA": "候选答案一（可选）",
    "minor.field.optionB": "候选答案二（可选）",
    "minor.placeholder.question": "例如：今天要不要去 / 吃面还是吃饭 / 现在做还是晚点做",
    "minor.placeholder.optionA": "例如：去",
    "minor.placeholder.optionB": "例如：不去",
    "minor.submit": "替我决定",
    "minor.result.placeholder": "输入问题后，一思会立刻给出一个干脆答案。",
    "minor.feedback.updated": "结果已生成，别再反复犹豫。",
    "minor.feedback.emptyQuestion": "请先写下你要快速决定的小问题。",
    "minor.result.title": "小问题结果",
    "minor.result.badge": "快速决定：{answer}",
    "minor.result.section.note": "补一句",
    "minor.result.section.question": "当前问题",
    "minor.note.1": "这类小事到这里就够了，别继续拉扯。",
    "minor.note.2": "现在最值钱的不是完美答案，而是把纠结停下来。",
    "minor.note.3": "低代价问题不必追求最优，先往下走。",
    "footer.line1": "所有判断仅供辅助，决定仍属于你自己。",
    "footer.line2": "默认本地处理，不上传、不留痕。",
  },
  en: {
    "meta.title": "Yisi | More Once for Big Things. Just Once for Small Things.",
    "meta.description":
      "Yisi is a local-first decision tool that helps you separate choices worth deep thinking from choices that should be settled quickly.",
    "language.button.toEnglish": "English",
    "language.button.toChinese": "中文",
    "language.aria.toEnglish": "Switch to English",
    "language.aria.toChinese": "Switch to Chinese",
    "gate.headline": "More Once for Big Things. Just Once for Small Things.",
    "gate.summary.line1": "Decide first if this choice deserves deep thought.",
    "gate.summary.line2": "Then choose deliberate analysis or a quick pick.",
    "gate.aria.entries": "Choose an entry mode",
    "gate.major.label": "For major choices",
    "gate.major.title": "Deliberate Analysis",
    "gate.major.desc.line1": "Use this for long-term, costly, and hard-to-reverse decisions.",
    "gate.major.desc.line2": "Add your context. Yisi separates risk, information, and trade-offs.",
    "gate.major.button": "Enter Deliberate Analysis",
    "gate.minor.label": "For quick choices",
    "gate.minor.title": "Quick Pick",
    "gate.minor.desc.line1": "Use this for low-risk, low-cost choices not worth extra mental load.",
    "gate.minor.desc.line2": "Get one answer, reduce hesitation, and move on.",
    "gate.minor.button": "Enter Quick Pick",
    "gate.note": "All input stays in your browser. No login, no upload, no storage.",
    "action.backHome": "Back",
    "main.aria.tool": "Decision workspace",
    "mode.major": "Mode: Deliberate Analysis",
    "mode.minor": "Mode: Quick Pick",
    "major.panel.kicker": "Deliberate Analysis",
    "major.panel.title": "Break down important decisions clearly",
    "major.panel.desc.line1": "Best for choices with meaningful cost, risk, or long-term impact.",
    "major.panel.desc.line2": "Yisi gives a structured direction, not a forced final answer.",
    "major.field.question": "Your decision question",
    "major.field.optionA": "Option A",
    "major.field.optionB": "Option B",
    "major.field.loss": "What are you most afraid of losing?",
    "major.field.gain": "What do you most want to gain?",
    "major.field.reversible": "Reversibility",
    "major.field.risk": "Perceived risk",
    "major.field.info": "Information sufficiency",
    "major.option.reversible.high": "Reversible",
    "major.option.reversible.medium": "Partially reversible",
    "major.option.reversible.low": "Hard to reverse",
    "major.option.risk.low": "Low",
    "major.option.risk.medium": "Medium",
    "major.option.risk.high": "High",
    "major.option.info.low": "Insufficient",
    "major.option.info.medium": "Moderate",
    "major.option.info.high": "Sufficient",
    "major.placeholder.question": "Example: Should I change jobs now / buy now / keep investing in this path?",
    "major.placeholder.optionA": "Example: Stay in my current role",
    "major.placeholder.optionB": "Example: Take the new role",
    "major.placeholder.loss": "Example: Stability, cash flow, relationships, time",
    "major.placeholder.gain": "Example: Growth, freedom, efficiency, opportunity",
    "major.submit": "Start Analysis",
    "major.result.placeholder":
      "After you submit, this area shows a suggested direction, key reasons, next steps, and a reminder.",
    "major.feedback.updated": "Analysis updated. You can adjust inputs and run it again.",
    "major.feedback.emptyQuestion": "Please describe the major decision you're currently weighing.",
    "major.feedback.requiredFields": "Please confirm reversibility, risk, and information readiness.",
    "major.result.title": "Analysis: \"{question}\"",
    "major.result.tendency": "Suggested direction: {value}",
    "major.result.compare": "You are comparing {optionA} and {optionB}.",
    "major.result.section.reasons": "Core reasons",
    "major.result.section.steps": "Next steps",
    "major.result.section.reminder": "Reminder",
    "major.result.reminder": "This tool supports your thinking. You still own the final decision and consequences.",
    "major.recommendation.act": "Lean toward acting",
    "major.recommendation.stop": "Lean toward not acting",
    "major.recommendation.wait": "Pause for now",
    "major.recommendation.info": "Gather information first",
    "major.reason.info.low":
      "Your current information is insufficient. A direct decision now is more likely to be driven by assumptions or mood.",
    "major.reason.info.medium": "Your information is usable but incomplete. A tentative judgment is possible, overconfidence is not.",
    "major.reason.info.high": "Your information is relatively complete and supports a staged decision.",
    "major.reason.reversible.high": "This decision is reversible, so trial-and-adjust cost is relatively controllable.",
    "major.reason.reversible.medium":
      "This is partially reversible. You can move, but rollback conditions should be clear in advance.",
    "major.reason.reversible.low": "This decision is hard to reverse, so correction cost can be substantial.",
    "major.reason.risk.low": "Perceived risk is low. The key issue is priority and fit, not risk tolerance.",
    "major.reason.risk.medium": "Risk is in the middle range. The core question is whether the trade-off is worth it.",
    "major.reason.risk.high": "Perceived risk is already high, which usually means safety boundaries are still unclear.",
    "major.reason.tradeoff.both":
      "You want \"{gain}\" and fear losing \"{loss}\". The real challenge is trade-off design, not lack of options.",
    "major.reason.tradeoff.gain": "You can clearly name your desired upside: \"{gain}\". That gives the decision direction.",
    "major.reason.tradeoff.loss": "You clearly fear losing \"{loss}\", which signals a downside that deserves real weight.",
    "major.reason.tradeoff.none": "You have not named your key upside/downside yet, so your decision criteria remain fuzzy.",
    "major.reason.options": "Your current comparison is between \"{optionA}\" and \"{optionB}\".",
    "major.reason.signal.familiarity": "Your wording suggests unfamiliar territory. Information quality matters more than execution speed here.",
    "major.reason.signal.specialist":
      "This decision touches specialist judgment. Subjective confidence alone is usually not enough.",
    "major.reason.signal.emotional":
      "Your wording includes emotional or impulsive timing, which can amplify short-term noise.",
    "major.reason.signal.financial":
      "The question includes leverage or sunk-cost signals. In these cases, downside expansion often dominates upside.",
    "major.step.info.low": "Fill one critical fact first, then reassess.",
    "major.step.info.medium": "Add the one fact that would most change your conclusion.",
    "major.step.info.keyFact": "Prioritize the fact that would materially shift your decision either way.",
    "major.step.reversible.high": "Run a low-cost trial before making a full commitment.",
    "major.step.reversible.low": "Define stop-loss and rollback boundaries before moving.",
    "major.step.risk.medium": "Split risk into worst case, probability, and maximum tolerable loss.",
    "major.step.risk.high": "Confirm you can absorb the worst-case downside before progressing.",
    "major.step.tradeoff.write": "Write one line: what you gain if you do it, and what you lose if you do not.",
    "major.step.signal.familiarity": "Close at least one first-hand information gap via interview, pilot, or operator input.",
    "major.step.signal.specialist": "Get at least one specialist opinion (for example legal or medical) before finalizing.",
    "major.step.signal.emotional": "Step away from the emotional peak and decide after a cooldown window.",
    "major.step.signal.financial": "Protect cash-flow safety first. Do not use higher risk to recover past losses.",
    "major.step.result.act": "Set a small starting scope and a review deadline. Act, then validate.",
    "major.step.result.stop": "Write down why \"not acting\" is rational now to avoid repeated mental drain.",
    "major.step.result.wait.1": "Set a clear review date instead of delaying indefinitely.",
    "major.step.result.wait.2": "Avoid making the final call while emotions are elevated.",
    "minor.panel.kicker": "Quick Pick",
    "minor.panel.title": "Settle small choices quickly",
    "minor.panel.desc.line1": "Best for low-risk, low-cost choices that do not deserve repeated analysis.",
    "minor.panel.desc.line2": "The goal is not perfection. The goal is to stop wasting attention.",
    "minor.field.question": "Small question",
    "minor.field.optionA": "Candidate option A (optional)",
    "minor.field.optionB": "Candidate option B (optional)",
    "minor.placeholder.question": "Example: Should I go tonight / noodles or rice / do it now or later?",
    "minor.placeholder.optionA": "Example: Go",
    "minor.placeholder.optionB": "Example: Skip",
    "minor.submit": "Decide for Me",
    "minor.result.placeholder": "Enter a small question and Yisi will return one direct answer.",
    "minor.feedback.updated": "Decision generated. Move on without looping.",
    "minor.feedback.emptyQuestion": "Please enter the small choice you want to settle.",
    "minor.result.title": "Quick result",
    "minor.result.badge": "Quick decision: {answer}",
    "minor.result.section.note": "A short note",
    "minor.result.section.question": "Current question",
    "minor.note.1": "For this kind of small choice, this is enough. No need to keep pulling it apart.",
    "minor.note.2": "The valuable move now is not perfection, but ending hesitation.",
    "minor.note.3": "For low-cost choices, momentum beats over-optimization.",
    "footer.line1": "All outputs are decision support only. Final responsibility remains yours.",
    "footer.line2": "Runs locally by default. No upload, no account, no retained traces.",
  },
};

const MINOR_ANSWER_POOL = {
  zh: ["去", "不去", "买", "不买", "现在做", "晚点再说", "选第一个", "选第二个", "今天别纠结了"],
  en: [
    "Go",
    "Skip it",
    "Buy",
    "Pass",
    "Do it now",
    "Do it later",
    "Option A",
    "Option B",
    "Stop overthinking today",
  ],
};

let currentLanguage = "zh";
let currentMode = "";
let userLanguageLocked = false;

function compactText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function normalizeLanguage(languageCode) {
  const normalized = compactText(languageCode).toLowerCase();
  if (!normalized) return null;
  if (normalized.startsWith("zh")) return "zh";
  if (normalized.startsWith("en")) return "en";
  return null;
}

function formatText(template, params = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => String(params[key] ?? ""));
}

function t(key, params = {}, language = currentLanguage) {
  const dictionary = I18N[language] || I18N.zh;
  const fallbackDictionary = I18N.zh;
  const raw = dictionary[key] ?? fallbackDictionary[key] ?? key;
  return formatText(raw, params);
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

function showMessage(node, message, type = "") {
  if (!node) return;
  node.textContent = message;
  node.className = "form-feedback";
  if (type) {
    node.classList.add(`is-${type}`);
  }
}

function resetResult(node, placeholder, placeholderKey = "") {
  if (!node) return;
  node.classList.add("is-resetting");
  node.dataset.state = "placeholder";
  node.dataset.placeholderKey = placeholderKey;
  node.innerHTML = `<div class="result-placeholder">${escapeHtml(placeholder)}</div>`;
  window.setTimeout(() => {
    node.classList.remove("is-resetting");
  }, 80);
}

function renderResult(node, html) {
  if (!node) return;
  node.classList.add("is-resetting");
  node.dataset.state = "result";
  node.dataset.placeholderKey = "";
  window.setTimeout(() => {
    node.innerHTML = html;
    node.classList.remove("is-resetting");
  }, 100);
}

function sanitizeQuestionText(question) {
  return compactText(question).replace(/[。！？!?]+$/g, "");
}

function parseMinorCandidates(question) {
  const normalized = sanitizeQuestionText(question);
  if (!normalized) return [];

  const separators = ["还是", "或者", "/", "／", "|", " or ", " OR ", " vs ", " VS ", " versus ", " VERSUS "];
  for (const separator of separators) {
    if (!normalized.includes(separator)) continue;
    const parts = normalized
      .split(separator)
      .map((item) => compactText(item))
      .filter(Boolean);
    if (parts.length >= 2) {
      return parts.slice(0, 2);
    }
  }

  const shouldMatch = normalized.match(/(?:要不要|该不该|可不可以|能不能|是否)(.+)$/);
  if (shouldMatch) {
    const action = compactText(shouldMatch[1]);
    if (action) {
      return [action, `不${action}`];
    }
  }

  const goPattern = normalized.match(/去不去(.+)$/);
  if (goPattern) {
    const target = compactText(goPattern[1]);
    if (target) {
      return [`去${target}`, `不去${target}`];
    }
    return ["去", "不去"];
  }

  const buyPattern = normalized.match(/买不买(.+)$/);
  if (buyPattern) {
    const target = compactText(buyPattern[1]);
    if (target) {
      return [`买${target}`, `不买${target}`];
    }
    return ["买", "不买"];
  }

  const shouldI = normalized.match(/^should i (.+)$/i);
  if (shouldI) {
    const action = compactText(shouldI[1]);
    if (action) {
      return [action, `Not ${action}`];
    }
  }

  return [];
}

function derivePairFromSingleOption(option, language = "zh") {
  const value = compactText(option);
  if (!value) return [];

  if (value.startsWith("不要")) {
    const positive = compactText(value.slice(2));
    return positive ? [value, positive] : [value];
  }

  if (value.startsWith("不")) {
    const positive = compactText(value.slice(1));
    return positive ? [value, positive] : [value];
  }

  if (/^not\s+/i.test(value)) {
    const positive = compactText(value.replace(/^not\s+/i, ""));
    return positive ? [value, positive] : [value];
  }

  if (/^don['’]?t\s+/i.test(value)) {
    const positive = compactText(value.replace(/^don['’]?t\s+/i, ""));
    return positive ? [value, positive] : [value];
  }

  if (language === "en") {
    return [value, `Not ${value}`];
  }

  return [value, `不${value}`];
}

function analyzeQuestionSignals(question) {
  const source = compactText(question);
  const lower = source.toLowerCase();

  const familiarityGap =
    /(不熟|陌生|不了解|没经验|看不懂|不确定|不清楚|unfamiliar|unknown|new field|no experience)/i.test(source);
  const specialistDomain =
    /(手术|诊断|医疗|合同|协议|竞业|法律|条款|税务|medical|surgery|contract|agreement|legal|tax)/i.test(source);
  const emotionalImpulse =
    /(吵架|冲动|生气|情绪|立刻|马上|明天就|刚认识|分手|结婚|break up|impulsive|angry|marry)/i.test(source);
  const financialRedFlag =
    /(借网贷|网贷|高杠杆|加杠杆|贷款买房|翻本|追加投入|借\d+万|借钱|all[- ]?in|leverage|margin|loan)/i.test(source) ||
    (lower.includes("high return") && lower.includes("borrow"));

  return {
    familiarityGap,
    specialistDomain,
    emotionalImpulse,
    financialRedFlag,
  };
}

function scoreMajorDecision(data, language = "zh") {
  const lang = SUPPORTED_LANGUAGES.has(language) ? language : "zh";
  const reasons = [];
  const nextSteps = [];
  let score = 0;

  if (data.info === "low") {
    score -= 3;
    reasons.push(t("major.reason.info.low", {}, lang));
    nextSteps.push(t("major.step.info.low", {}, lang));
  } else if (data.info === "medium") {
    reasons.push(t("major.reason.info.medium", {}, lang));
    nextSteps.push(t("major.step.info.medium", {}, lang));
  } else {
    score += 2;
    reasons.push(t("major.reason.info.high", {}, lang));
  }

  if (data.reversible === "high") {
    score += 2;
    reasons.push(t("major.reason.reversible.high", {}, lang));
    nextSteps.push(t("major.step.reversible.high", {}, lang));
  } else if (data.reversible === "medium") {
    reasons.push(t("major.reason.reversible.medium", {}, lang));
  } else {
    score -= 2;
    reasons.push(t("major.reason.reversible.low", {}, lang));
    nextSteps.push(t("major.step.reversible.low", {}, lang));
  }

  if (data.risk === "low") {
    score += 2;
    reasons.push(t("major.reason.risk.low", {}, lang));
  } else if (data.risk === "medium") {
    reasons.push(t("major.reason.risk.medium", {}, lang));
    nextSteps.push(t("major.step.risk.medium", {}, lang));
  } else {
    score -= 3;
    reasons.push(t("major.reason.risk.high", {}, lang));
    nextSteps.push(t("major.step.risk.high", {}, lang));
  }

  if (data.gain && data.loss) {
    reasons.push(t("major.reason.tradeoff.both", { gain: data.gain, loss: data.loss }, lang));
  } else if (data.gain) {
    score += 1;
    reasons.push(t("major.reason.tradeoff.gain", { gain: data.gain }, lang));
  } else if (data.loss) {
    score -= 1;
    reasons.push(t("major.reason.tradeoff.loss", { loss: data.loss }, lang));
  } else {
    reasons.push(t("major.reason.tradeoff.none", {}, lang));
    nextSteps.push(t("major.step.tradeoff.write", {}, lang));
  }

  if (data.optionA && data.optionB) {
    reasons.push(t("major.reason.options", { optionA: data.optionA, optionB: data.optionB }, lang));
  }

  const signals = analyzeQuestionSignals([data.question, data.optionA, data.optionB].join(" "));
  if (signals.familiarityGap && data.info !== "high") {
    reasons.push(t("major.reason.signal.familiarity", {}, lang));
    nextSteps.push(t("major.step.signal.familiarity", {}, lang));
  }
  if (signals.specialistDomain) {
    reasons.push(t("major.reason.signal.specialist", {}, lang));
    nextSteps.push(t("major.step.signal.specialist", {}, lang));
  }
  if (signals.emotionalImpulse) {
    reasons.push(t("major.reason.signal.emotional", {}, lang));
    nextSteps.push(t("major.step.signal.emotional", {}, lang));
  }
  if (signals.financialRedFlag) {
    reasons.push(t("major.reason.signal.financial", {}, lang));
    nextSteps.push(t("major.step.signal.financial", {}, lang));
  }

  let recommendationKey = "wait";
  let badgeClass = "is-wait";

  if (data.info === "low" || (signals.familiarityGap && data.info !== "high")) {
    recommendationKey = "info";
    badgeClass = "is-wait";
  } else if (signals.specialistDomain && data.risk !== "low" && data.reversible !== "high") {
    recommendationKey = "info";
    badgeClass = "is-wait";
  } else if (signals.emotionalImpulse && (data.risk === "high" || data.reversible === "low")) {
    recommendationKey = "wait";
    badgeClass = "is-wait";
  } else if (signals.financialRedFlag) {
    recommendationKey = "stop";
    badgeClass = "is-stop";
  } else if (score >= 3 && data.risk !== "high") {
    recommendationKey = "act";
    badgeClass = "";
  } else if (score <= -4 && data.info === "high") {
    recommendationKey = "stop";
    badgeClass = "is-stop";
  } else if (score <= -2) {
    recommendationKey = "wait";
    badgeClass = "is-wait";
  } else {
    recommendationKey = "wait";
    badgeClass = "is-wait";
  }

  if (recommendationKey === "act") {
    nextSteps.push(t("major.step.result.act", {}, lang));
  } else if (recommendationKey === "stop") {
    nextSteps.push(t("major.step.result.stop", {}, lang));
  } else if (recommendationKey === "wait") {
    nextSteps.push(t("major.step.result.wait.1", {}, lang));
    nextSteps.push(t("major.step.result.wait.2", {}, lang));
  } else if (recommendationKey === "info") {
    nextSteps.push(t("major.step.info.keyFact", {}, lang));
  }

  return {
    recommendationKey,
    recommendation: t(`major.recommendation.${recommendationKey}`, {}, "zh"),
    recommendationLabel: t(`major.recommendation.${recommendationKey}`, {}, lang),
    badgeClass,
    reasons: uniqueList(reasons).slice(0, 4),
    nextSteps: uniqueList(nextSteps).slice(0, 3),
    reminder: t("major.result.reminder", {}, lang),
  };
}

function generateMinorDecision(data, language = "zh") {
  const lang = SUPPORTED_LANGUAGES.has(language) ? language : "zh";
  let candidates = [];
  const question = sanitizeQuestionText(data.question);

  if (data.optionA && data.optionB) {
    candidates = [data.optionA, data.optionB];
  } else if (data.optionA || data.optionB) {
    const single = data.optionA || data.optionB;
    const parsed = parseMinorCandidates(question);
    if (parsed.length >= 2) {
      const merged = uniqueList([single, ...parsed]);
      candidates = merged.slice(0, 2);
    }
    if (candidates.length < 2) {
      candidates = derivePairFromSingleOption(single, lang);
    }
  } else {
    candidates = parseMinorCandidates(question);
  }

  candidates = uniqueList(candidates).slice(0, 2);
  if (candidates.length < 2) {
    candidates = MINOR_ANSWER_POOL[lang];
  }

  const answer = pickRandom(candidates);
  const notePool = [t("minor.note.1", {}, lang), t("minor.note.2", {}, lang), t("minor.note.3", {}, lang)];

  return {
    answer,
    note: pickRandom(notePool),
  };
}

function getMajorFormData(formNode) {
  const formData = new FormData(formNode);
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

function getMinorFormData(formNode) {
  const formData = new FormData(formNode);
  return {
    question: compactText(formData.get("question")),
    optionA: compactText(formData.get("optionA")),
    optionB: compactText(formData.get("optionB")),
  };
}

function validateMajorForm(data) {
  if (!data.question) {
    return { valid: false, message: t("major.feedback.emptyQuestion"), focusId: "major-question" };
  }
  if (!data.reversible || !data.risk || !data.info) {
    return { valid: false, message: t("major.feedback.requiredFields"), focusId: "major-question" };
  }
  return { valid: true };
}

function validateMinorForm(data) {
  if (!data.question) {
    return { valid: false, message: t("minor.feedback.emptyQuestion"), focusId: "minor-question" };
  }
  return { valid: true };
}

function renderMajorResult(result, data, language = currentLanguage) {
  const title = escapeHtml(t("major.result.title", { question: data.question }, language));
  const tendency = escapeHtml(t("major.result.tendency", { value: result.recommendationLabel }, language));
  const compareLine =
    data.optionA && data.optionB
      ? `<p class="result-text">${escapeHtml(
          t("major.result.compare", { optionA: data.optionA, optionB: data.optionB }, language),
        )}</p>`
      : "";

  return `
    <h3 class="result-title">${title}</h3>
    <div class="result-badge ${result.badgeClass}">${tendency}</div>
    ${compareLine}
    <div class="result-block">
      <h3>${escapeHtml(t("major.result.section.reasons", {}, language))}</h3>
      <ol class="result-list">
        ${result.reasons.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>
    <div class="result-block">
      <h3>${escapeHtml(t("major.result.section.steps", {}, language))}</h3>
      <ol class="result-list">
        ${result.nextSteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>
    <div class="result-block">
      <h3>${escapeHtml(t("major.result.section.reminder", {}, language))}</h3>
      <p class="result-text">${escapeHtml(result.reminder)}</p>
    </div>
  `;
}

function renderMinorResult(result, data, language = currentLanguage) {
  const answerText = compactText(result.answer);
  const answerClass = answerText.length > 8 ? "minor-answer minor-answer-long" : "minor-answer";

  return `
    <h3 class="result-title">${escapeHtml(t("minor.result.title", {}, language))}</h3>
    <div class="result-badge">${escapeHtml(t("minor.result.badge", { answer: result.answer }, language))}</div>
    <p class="${answerClass}">${escapeHtml(result.answer)}</p>
    <div class="result-block">
      <h3>${escapeHtml(t("minor.result.section.note", {}, language))}</h3>
      <p class="result-text">${escapeHtml(result.note)}</p>
    </div>
    <div class="result-block">
      <h3>${escapeHtml(t("minor.result.section.question", {}, language))}</h3>
      <p class="result-text">${escapeHtml(data.question)}</p>
    </div>
  `;
}

function mapCountryToLanguage(countryCode) {
  const code = compactText(countryCode).toUpperCase();
  if (!code) return null;
  return ZH_COUNTRY_CODES.has(code) ? "zh" : "en";
}

async function fetchJsonWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } finally {
    window.clearTimeout(timer);
  }
}

async function detectLanguageByIp() {
  const providers = [
    async () => {
      const payload = await fetchJsonWithTimeout("https://ipwho.is/?fields=success,country_code", 2200);
      if (payload && payload.success && payload.country_code) {
        return mapCountryToLanguage(payload.country_code);
      }
      return null;
    },
    async () => {
      const payload = await fetchJsonWithTimeout("https://ipapi.co/json/", 2200);
      if (payload && payload.country_code) {
        return mapCountryToLanguage(payload.country_code);
      }
      return null;
    },
  ];

  for (const provider of providers) {
    try {
      const detected = await provider();
      if (detected) return detected;
    } catch (_error) {
      continue;
    }
  }
  return null;
}

function updateModeTitle(modeTitleNode) {
  if (!modeTitleNode) return;
  if (currentMode === "major") {
    modeTitleNode.textContent = t("mode.major");
  } else if (currentMode === "minor") {
    modeTitleNode.textContent = t("mode.minor");
  } else {
    modeTitleNode.textContent = "";
  }
}

function applyStaticTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });

  root.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.getAttribute("data-i18n-placeholder")));
  });

  root.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria-label")));
  });
}

function markPlaceholderState(resultNode, placeholderKey) {
  if (!resultNode) return;
  resultNode.dataset.state = "placeholder";
  resultNode.dataset.placeholderKey = placeholderKey;
}

function setLanguage(language, options = {}) {
  const normalized = normalizeLanguage(language);
  if (!normalized) return;
  const { persist = false, resetPanels = false } = options;
  currentLanguage = normalized;

  document.documentElement.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = t("meta.title");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", t("meta.description"));
  }

  applyStaticTranslations(document);

  const toggle = document.querySelector("#language-toggle");
  if (toggle) {
    if (normalized === "zh") {
      toggle.textContent = t("language.button.toEnglish");
      toggle.setAttribute("aria-label", t("language.aria.toEnglish"));
    } else {
      toggle.textContent = t("language.button.toChinese");
      toggle.setAttribute("aria-label", t("language.aria.toChinese"));
    }
  }

  updateModeTitle(document.querySelector("#mode-title"));

  if (resetPanels) {
    const majorResult = document.querySelector("#major-result");
    const minorResult = document.querySelector("#minor-result");
    const majorFeedback = document.querySelector("#major-feedback");
    const minorFeedback = document.querySelector("#minor-feedback");

    resetResult(majorResult, t("major.result.placeholder"), "major.result.placeholder");
    resetResult(minorResult, t("minor.result.placeholder"), "minor.result.placeholder");
    showMessage(majorFeedback, "");
    showMessage(minorFeedback, "");
  } else {
    const majorResult = document.querySelector("#major-result");
    const minorResult = document.querySelector("#minor-result");

    if (majorResult && majorResult.dataset.state === "placeholder") {
      resetResult(majorResult, t("major.result.placeholder"), "major.result.placeholder");
    }
    if (minorResult && minorResult.dataset.state === "placeholder") {
      resetResult(minorResult, t("minor.result.placeholder"), "minor.result.placeholder");
    }
  }

  if (persist) {
    try {
      window.localStorage.setItem(STORAGE_LANGUAGE_KEY, normalized);
    } catch (_error) {
      // ignore storage failures
    }
  }
}

function setMode(mode, nodes) {
  const { body, modeTitleNode } = nodes;
  currentMode = mode || "";

  body.classList.remove("is-gated", "mode-major", "mode-minor");
  if (!mode) {
    body.classList.add("is-gated");
  } else {
    body.classList.add(`mode-${mode}`);
  }

  updateModeTitle(modeTitleNode);
}

function initializeLanguage() {
  let storedLanguage = null;
  try {
    storedLanguage = window.localStorage.getItem(STORAGE_LANGUAGE_KEY);
  } catch (_error) {
    storedLanguage = null;
  }

  if (SUPPORTED_LANGUAGES.has(storedLanguage)) {
    userLanguageLocked = true;
    setLanguage(storedLanguage, { persist: false, resetPanels: false });
    return;
  }

  const browserGuess = normalizeLanguage(window.navigator.language) || "zh";
  setLanguage(browserGuess, { persist: false, resetPanels: false });

  detectLanguageByIp().then((detectedLanguage) => {
    if (!detectedLanguage || userLanguageLocked) return;
    if (detectedLanguage !== currentLanguage) {
      setLanguage(detectedLanguage, { persist: false, resetPanels: false });
    }
  });
}

function bindDomEvents() {
  if (typeof document === "undefined") return;

  const body = document.body;
  const enterMajorButton = document.querySelector("#enter-major");
  const enterMinorButton = document.querySelector("#enter-minor");
  const backToGateButton = document.querySelector("#back-to-gate");
  const modeTitleNode = document.querySelector("#mode-title");
  const majorSection = document.querySelector("#major-section");
  const minorSection = document.querySelector("#minor-section");
  const majorForm = document.querySelector("#major-form");
  const minorForm = document.querySelector("#minor-form");
  const majorResult = document.querySelector("#major-result");
  const minorResult = document.querySelector("#minor-result");
  const majorFeedback = document.querySelector("#major-feedback");
  const minorFeedback = document.querySelector("#minor-feedback");
  const majorQuestionInput = document.querySelector("#major-question");
  const minorQuestionInput = document.querySelector("#minor-question");
  const languageToggle = document.querySelector("#language-toggle");

  markPlaceholderState(majorResult, "major.result.placeholder");
  markPlaceholderState(minorResult, "minor.result.placeholder");

  setMode("", { body, modeTitleNode });
  initializeLanguage();

  function enterTool(target) {
    const isMajor = target === "major";
    const section = isMajor ? majorSection : minorSection;
    const input = isMajor ? majorQuestionInput : minorQuestionInput;
    setMode(target, { body, modeTitleNode });

    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        input.focus();
      }, 180);
    });
  }

  enterMajorButton?.addEventListener("click", () => {
    enterTool("major");
  });

  enterMinorButton?.addEventListener("click", () => {
    enterTool("minor");
  });

  backToGateButton?.addEventListener("click", () => {
    setMode("", { body, modeTitleNode });
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  languageToggle?.addEventListener("click", () => {
    userLanguageLocked = true;
    const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
    setLanguage(nextLanguage, { persist: true, resetPanels: true });
  });

  majorForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage(majorFeedback, "");
    resetResult(majorResult, t("major.result.placeholder"), "major.result.placeholder");

    const data = getMajorFormData(majorForm);
    const validation = validateMajorForm(data);
    if (!validation.valid) {
      showMessage(majorFeedback, validation.message, "error");
      const input = document.getElementById(validation.focusId);
      input?.focus();
      return;
    }

    const result = scoreMajorDecision(data, currentLanguage);
    renderResult(majorResult, renderMajorResult(result, data, currentLanguage));
    showMessage(majorFeedback, t("major.feedback.updated"), "success");
  });

  minorForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage(minorFeedback, "");
    resetResult(minorResult, t("minor.result.placeholder"), "minor.result.placeholder");

    const data = getMinorFormData(minorForm);
    const validation = validateMinorForm(data);
    if (!validation.valid) {
      showMessage(minorFeedback, validation.message, "error");
      const input = document.getElementById(validation.focusId);
      input?.focus();
      return;
    }

    const result = generateMinorDecision(data, currentLanguage);
    renderResult(minorResult, renderMinorResult(result, data, currentLanguage));
    showMessage(minorFeedback, t("minor.feedback.updated"), "success");
  });
}

if (typeof document !== "undefined") {
  bindDomEvents();
}

if (typeof window !== "undefined") {
  window.YisiDecisionUtils = {
    scoreMajorDecision,
    parseMinorCandidates,
    generateMinorDecision,
    detectLanguageByIp,
    setLanguage,
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    scoreMajorDecision,
    parseMinorCandidates,
    generateMinorDecision,
    analyzeQuestionSignals,
  };
}
