console.log("PID Tool build stamp:", "2025-08-25 16:18 CET", "commit", "abc1234");

let expertScores = {};
let selectedEntities = [];
let currentSection = 0;
let questionsBySection = {};
let profile = "standard";
let answers = {}; // Speicher für ausgewählte Antworten

// Skalen
const LIKERT_USER_MAX = 3;    // User 0..3 (Don’t need … Very important)
const LIKERT_EXPERT_MAX = 5;  // Expert 1..5

// Normalisierung NUR für Mini-Bars (0..1)
function user01(v)   { v = Number(v); return (v - 0) / (LIKERT_USER_MAX - 0); }  // 0..3 -> 0..1
function expert01(v) { v = Number(v); return (v - 1) / (LIKERT_EXPERT_MAX - 1); } // 1..5 -> 0..1

// Pre-question
let plannedPidVolume = "unknown";     // "lt100k" | "gt100k" | "unknown"
let qIndexById = {};                  // Frage-ID -> Index
const DATACITE_KEY = "DataCite DOI";

// Likert-UI (links->rechts: 0..3)
const LIKERT_OPTIONS_DEFAULT = [
  { value: 0, label: "Don’t need that" },
  { value: 1, label: "Somewhat important" },
  { value: 2, label: "Important" },
  { value: 3, label: "Very important" }
];

function startTool() {
  document.getElementById('section-intro').style.display = 'none';
  profile = "standard";
  selectedEntities = [];
  loadQuestions();
}

function loadQuestions() {
  Promise.all([
    fetch('/pidtool/config.json?v=' + Date.now()).then(res => {
      if (!res.ok) throw new Error(`Failed to load config.json (${res.status})`);
      return res.json();
    }),
    fetch('/pidtool/pid-expert-scores.json?v=' + Date.now()).then(res => {
      if (!res.ok) throw new Error(`Failed to load pid-expert-scores.json (${res.status})`);
      return res.json();
    })
  ])
  .then(([data, scores]) => {
    expertScores = scores;
    organizeSections(data.questions);

    // Map ID -> Index
    qIndexById = {};
    data.questions.forEach((q, idx) => {
      const id = q.id ?? (idx + 1);
      qIndexById[id] = idx;
    });

    showSection(currentSection);
  })
  .catch(err => {
    console.error("❌ Fetch failed:", err);
    const container = document.getElementById('question-container');
    container.style.display = 'block';
    container.innerHTML = `
      <div class="error-message">
        ⚠️ Error: Unable to load required files.<br>
        Please check if <code>config.json</code> and <code>pid-expert-scores.json</code> 
        are available in <code>/pidtool/</code>.
      </div>
    `;
  });
}

function organizeSections(questions) {
  questionsBySection = {};
  questions.forEach((q, idx) => {
    if (!questionsBySection[q.section]) {
      questionsBySection[q.section] = [];
    }
    q.index = idx;
    q.id = q.id || idx + 1;
    questionsBySection[q.section].push(q);
  });
}

function updateProgressBar(index) {
  const totalSections = Object.keys(questionsBySection).length;
  const progress = ((index + 1) / totalSections) * 100;
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = progress + '%';
}

function clampExpert(v) {
  if (v < 1) return 1; // min 1
  if (v > LIKERT_EXPERT_MAX) return LIKERT_EXPERT_MAX; // 5
  return v;
}

/**
 * DataCite & Statement 3 Regel:
 * - <100k  → +1 (geclamped)
 * - >100k  → -1 (geclamped)
 * - unknown → keine Änderung
 */
function getEffectiveExpertScore(providerName, qIndex) {
  let base = expertScores?.[providerName]?.[qIndex];
  if (base == null) return base;

  const idxStmt3 = qIndexById?.[3];
  if (providerName === DATACITE_KEY && qIndex === idxStmt3) {
    if (plannedPidVolume === "lt100k") {
      base = clampExpert(base + 1);
    } else if (plannedPidVolume === "gt100k") {
      base = clampExpert(base - 1);
    }
  }
  return base;
}

function createMiniScoreBars(questionIndex, userValue) {
  userValue = Number(userValue);
  const container = document.createElement("div");
  container.className = "statement-scores";

  for (let pid in expertScores) {
    const expertValue = getEffectiveExpertScore(pid, questionIndex);
    if (expertValue === undefined) continue;

    const u = user01(userValue);       // 0..1
    const e = expert01(expertValue);   // 0..1
    const distance = Math.abs(e - u);  // 0..1
    const score = (1 - distance) * 100;

    const barWrapper = document.createElement("div");
    barWrapper.className = "mini-score";

    const label = document.createElement("span");
    label.textContent = pid;
    label.className = "mini-score-label";

    const bar = document.createElement("div");
    bar.className = "mini-bar";

    const minWidth = 20;
    const maxWidth = 200;
    const scaledWidth = minWidth + (score / 100) * (maxWidth - minWidth);
    bar.style.width = `${scaledWidth}px`;
    bar.style.backgroundColor = score >= 60 ? 'green' : score >= 40 ? 'orange' : 'red';

    barWrapper.appendChild(label);
    barWrapper.appendChild(bar);
    container.appendChild(barWrapper);
  }

  return container;
}

function showSection(index) {
  const sections = Object.keys(questionsBySection);
  if (index >= sections.length) {
    showResults();
    return;
  }
  if (index === 0) {
    const intro = document.getElementById('pidtool-intro');
    if (intro) intro.style.display = 'none';
    const entitySel = document.getElementById('entity-selection');
    if (entitySel) entitySel.style.display = 'none';
  }

  updateProgressBar(index);

  const container = document.getElementById('question-container');
  container.innerHTML = '';
  container.style.display = 'block';

  const sectionName = sections[index];
  const section = document.createElement('section');
  section.className = 'question-section';
  section.innerHTML = `<h2>${sectionName}</h2>`;

  questionsBySection[sectionName].forEach(q => {
    const div = document.createElement('div');
    div.className = 'question';
    const selectedValue = answers[q.index] ? answers[q.index].value : null;

    div.innerHTML = `
      <p><strong>${q.text}</strong><button class="more-info-btn" onclick="toggleHelp(this)">More info</button></p>
      <div class="help-text">${q.help}</div>
      <div class="likert">
        ${((q.options && Array.isArray(q.options) ? q.options : LIKERT_OPTIONS_DEFAULT)
          .sort((a, b) => a.value - b.value)
        ).map(opt => `
          <label>
            <input type="radio" name="q${q.index}" value="${opt.value}" ${selectedValue == opt.value ? 'checked' : ''} onchange="updateMiniBars(${q.index}, this.value, this)">
            ${opt.label}
          </label>
        `).join('')}
      </div>
      <div class="skip-option">
        <button type="button" class="clear-btn" data-q="${q.index}" onclick="skipAnswer(${q.index})" style="${selectedValue === null ? 'display:none;' : ''}">Clear</button>
      </div>
      <div class="mini-bar-wrapper" id="mini-bars-${q.index}"></div>
    `;

    section.appendChild(div);
  });

  const nav = document.createElement('div');
  nav.className = 'nav-buttons';
  if (index > 0) {
    const backBtn = document.createElement('button');
    backBtn.textContent = "Back";
    backBtn.onclick = () => {
      saveAnswers();
      currentSection--;
      showSection(currentSection);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    nav.appendChild(backBtn);
  }
  const nextBtn = document.createElement('button');
  nextBtn.textContent = "Next";
  nextBtn.onclick = () => {
    saveAnswers();
    currentSection++;
    showSection(currentSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  nav.appendChild(nextBtn);
  section.appendChild(nav);

  container.appendChild(section);
}

function updateMiniBars(questionIndex, value) {
  const wrapper = document.getElementById(`mini-bars-${questionIndex}`);
  wrapper.innerHTML = '';
  const miniBars = createMiniScoreBars(questionIndex, Number(value));
  wrapper.appendChild(miniBars);

  const skipBtn = document.querySelector(`.skip-option button[data-q="${questionIndex}"]`);
  if (skipBtn) skipBtn.style.display = 'inline';
}

function skipAnswer(questionIndex) {
  if (answers[questionIndex]) delete answers[questionIndex];

  document.querySelectorAll(`input[name="q${questionIndex}"]`).forEach(r => r.checked = false);

  const wrapper = document.getElementById(`mini-bars-${questionIndex}`);
  if (wrapper) wrapper.innerHTML = '';

  const skipBtn = document.querySelector(`.skip-option button[data-q="${questionIndex}"]`);
  if (skipBtn) skipBtn.style.display = 'none';
}

function saveAnswers() {
  document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
    const index = parseInt(input.name.substring(1));
    if (!answers[index]) answers[index] = {};
    answers[index].value = parseInt(input.value);
  });

  console.clear();
  console.table(answers);
}

// Einfaches, section-unabhängiges Scoring:
// Σ (effectiveExpert(1..5) * user(0..3) * weight) → pro PID relativ zu eigenem Max (→ 0..100)
function calculateSimplePercentScores(answers, expertScores) {
  const resultsRaw = {};
  const resultsMax = {};
  const providers = Object.keys(expertScores);

  const answeredIndexes = Object.keys(answers)
    .map(k => parseInt(k, 10))
    .filter(i => Number.isInteger(i) && answers[i]?.value != null);

  if (answeredIndexes.length === 0) {
    const zeroed = {};
    providers.forEach(pid => { zeroed[pid] = 0; });
    return zeroed;
  }

  providers.forEach(pid => {
  let sum = 0;
  let maxSum = 0;

  answeredIndexes.forEach(qIndex => {
    const userVal = Number(answers[qIndex].value);
    if (!(userVal > 0)) return; // 0 behandeln wie "nicht gewertet"

    const eff = getEffectiveExpertScore(pid, qIndex);
    if (eff == null) return;

    // Zähler: expert * user
    sum += eff * userVal;

    // Nenner: nur für >0-Antworten
    maxSum += LIKERT_EXPERT_MAX * LIKERT_USER_MAX; // 5 * 3
  });

  resultsRaw[pid] = sum;
  resultsMax[pid] = Math.max(1, maxSum);
});

  const percent = {};
  providers.forEach(pid => {
    percent[pid] = Math.round((resultsRaw[pid] / resultsMax[pid]) * 100);
  });
  return percent;
}

function toggleHelp(btn) {
  const helpText = btn.parentElement.nextElementSibling;
  helpText.style.display = helpText.style.display === 'block' ? 'none' : 'block';
}

function showResults() {
  saveAnswers();
  // expertScores ist bereits global geladen – kein Re-Fetch nötig.
  const scores = calculateSimplePercentScores(answers, expertScores);
  displayResults(scores);

  document.getElementById('question-container').style.display = 'none';
  document.getElementById('section-results').style.display = 'block';
}

function displayResults(scores) {
  const pidDescriptions = {
    "DataCite DOI": "DOIs from DataCite are widely used for research data and publications.",
    "ePIC handle": "ePIC handles are used in European research infrastructures and built on the Handle system.",
    "URN:NBN": "URN:NBN is typically used for long-term preservation in national libraries.",
    "ARK": "ARKs are often used in museums and archives for persistent referencing.",
  };

  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";

  if (selectedEntities.length > 0) {
    const entityDiv = document.createElement("div");
    entityDiv.className = "selected-entities";
    entityDiv.innerHTML = `<p><strong>Your selected object types:</strong> ${selectedEntities.join(', ')}</p>`;
    resultDiv.appendChild(entityDiv);
  }

  const sortedPIDs = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  for (let pid of sortedPIDs) {
    const score = scores[pid];
    const color = score >= 70 ? "green" : score >= 40 ? "orange" : "red";
    const card = document.createElement("div");
    card.className = "result-card";
    card.style.borderLeft = `10px solid ${color}`;
    card.innerHTML = `
      <h3>${pid}</h3>
      <div class="score-bar-container">
        <div class="score-bar" style="width: ${score}%; background-color: ${color};"></div>
      </div>
      <p>Score: ${score}</p>
      <p class="pid-description">${pidDescriptions[pid] || ''}</p>
    `;
    resultDiv.appendChild(card);
  }

  const exportBtn = document.createElement('button');
  exportBtn.textContent = "Download results";
  exportBtn.onclick = () => {
    let text = "PID Selection Tool – Your Results\n\n";
    text += "Selected entities: " + selectedEntities.join(', ') + "\n\n";
    for (let pid of sortedPIDs) {
      text += `${pid}\nScore: ${scores[pid]}\nDescription: ${pidDescriptions[pid] || ''}\n\n`;
    }
    text += "\nNote: Complementary PID systems such as ORCID and ROR are recommended for persons and institutions.\n";
    text += "More info: https://pid4nfdi-training.readthedocs.io/en/latest/";
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pid-selection-results.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
  resultDiv.appendChild(exportBtn);

  const infoText = document.createElement("div");
  infoText.className = "result-info";
  infoText.innerHTML = `
    <hr>
    <p><strong>Note:</strong> This tool focuses on object-related Persistent Identifiers. 
    We recommend also integrating complementary PID systems such as 
    <a href="https://orcid.org" target="_blank">ORCID</a> for persons and 
    <a href="https://ror.org" target="_blank">ROR</a> for institutions.</p>
    <p>For more guidance, see our 
    <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a>.</p>
  `;
  resultDiv.appendChild(infoText);

  const contactNote = document.createElement("div");
  contactNote.className = "result-contact-note";
  contactNote.innerHTML = `
    <p>If you have further questions about the results or how to use the tool, 
    please <a href="https://pid.services.base4nfdi.de/about/contact/" target="_blank">contact us</a>.</p>
  `;
  resultDiv.appendChild(contactNote);

  const backButton = document.createElement('button');
  backButton.textContent = "Back to questions";
  backButton.style.marginTop = "2em";
  backButton.style.marginBottom = "3em";
  backButton.onclick = () => {
    document.getElementById('section-results').style.display = 'none';
    if (currentSection > 0) currentSection--;
    showSection(currentSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  resultDiv.appendChild(backButton);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("📦 DOM fully loaded");

  // Pre-question listener
  document.querySelectorAll('input[name="pid-volume"]').forEach(r => {
    r.addEventListener('change', () => {
      plannedPidVolume = r.value; // "lt100k" | "gt100k" | "unknown"
      // optional: aktuell geöffnete Section neu rendern:
      // showSection(currentSection);
    });
  });
});
