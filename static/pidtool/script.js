let expertScores = {};
let selectedEntities = [];
let currentSection = 0;
let questionsBySection = {};
let profile = "standard";
let answers = {}; // Speicher für ausgewählte Antworten

function startTool() {
  selectedEntities = Array.from(document.querySelectorAll('#entity-selection input[type="checkbox"]:checked'))
                          .map(cb => cb.value);
  document.getElementById('section-intro').style.display = 'none';
  profile = "standard";
  loadQuestions();
}

function applyProfileAndContinue() {
  profile = "standard";
  document.getElementById('pidtool-intro').style.display = 'none';
  document.getElementById('entity-selection').style.display = 'none';
  document.getElementById('section-profile').style.display = 'none';
  selectedEntities = Array.from(document.querySelectorAll('#entity-selection input[type="checkbox"]:checked'))
                          .map(cb => cb.value);
  loadQuestions();
}

function loadQuestions() {
Promise.all([
  fetch('/pidtool/config.json?v=' + Date.now()).then(res => res.json()),
  fetch('/pidtool/pid-expert-scores.json?v=' + Date.now()).then(res => res.json())

])
.then(([data, scores]) => {
  expertScores = scores;
  organizeSections(data.questions);
  showSection(currentSection);
})
.catch(err => {
  console.error("❌ Fetch failed:", err);
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


function createMiniScoreBars(questionIndex, userValue) {
  const container = document.createElement("div");
  container.className = "statement-scores";

  for (let pid in expertScores) {
    const expertValue = expertScores[pid][questionIndex];
    if (expertValue === undefined) continue;

    const distance = Math.abs(expertValue - userValue);
    const score = ((2 - distance) / 2) * 100; // Skala 0–100

    const barWrapper = document.createElement("div");
    barWrapper.className = "mini-score";

    const label = document.createElement("span");
    label.textContent = pid;
    label.className = "mini-score-label";

    const bar = document.createElement("div");
    bar.className = "mini-bar";
    bar.style.width = `${score}%`;
    bar.style.backgroundColor = score >= 70 ? 'green' : score >= 40 ? 'orange' : 'red';

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
    document.getElementById('pidtool-intro').style.display = 'none';
    document.getElementById('entity-selection').style.display = 'none';
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
    const selectedValue = answers[q.index];
    div.innerHTML = `
  <p><strong>${q.text}</strong><button class="more-info-btn" onclick="toggleHelp(this)">More info</button></p>
  <div class="help-text">${q.help}</div>
  <div class="likert">
    ${[1, 3, 5].map(i => `
      <label>
        <input type="radio" name="q${q.index}" value="${i}" ${selectedValue == i ? 'checked' : ''} onchange="updateMiniBars(${q.index}, ${i}, this)">
        ${{
          1: 'Disagree',
          3: 'Neutral',
          5: 'Agree'
        }[i]}
      </label>
    `).join('')}
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

function updateMiniBars(questionIndex, value, inputElement) {
  const wrapper = document.getElementById(`mini-bars-${questionIndex}`);
  wrapper.innerHTML = ''; // vorherige Balken löschen
  const miniBars = createMiniScoreBars(questionIndex, value);
  wrapper.appendChild(miniBars);
}


function saveAnswers() {
  document.querySelectorAll('input[type="radio"]:checked').forEach(input => {
    const index = parseInt(input.name.substring(1));
    answers[index] = parseInt(input.value);
  });
}

function calculateWahlOMatScores(answers, expertScores) {
  let results = {};
  for (let pid in expertScores) {
    let sum = 0;
    expertScores[pid].forEach((expertValue, index) => {
      const userValue = answers[index];
      if (userValue !== undefined) {
        const diff = expertValue - userValue;
        sum += diff * diff;
      }
    });
    results[pid] = sum;
  }
  return results;
}

function toggleHelp(btn) {
  const helpText = btn.parentElement.nextElementSibling;
  helpText.style.display = helpText.style.display === 'block' ? 'none' : 'block';
}

function showResults() {
  saveAnswers();
  fetch('/pidtool/pid-expert-scores.json')
    .then(res => res.json())
    .then(expertScores => {
      const rawScores = calculateWahlOMatScores(answers, expertScores);
      const maxScore = Math.max(...Object.values(rawScores));
      let scores = {};
      for (let pid in rawScores) {
        scores[pid] = Math.round((1 - rawScores[pid] / (maxScore || 1)) * 100);
      }
      displayResults(scores);
    })
    .catch(err => console.error("❌ Failed to load expert scores:", err));
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('section-results').style.display = 'block';
}

function displayResults(scores) {
  const pidDescriptions = {
    "DataCite DOI": "DOIs from DataCite are widely used for research data and publications.",
    "ePIC handle": "ePIC handles are used in European research infrastructures and built on the Handle system.",
    "URN:NBN": "URN:NBN is typically used for long-term preservation in national libraries.",
    "Handle": "Handles are flexible identifiers used in institutional repositories.",
    "ARK": "ARKs are often used in museums and archives for persistent referencing.",
    "Wikidata ID": "Wikidata IDs are part of a linked data ecosystem and good for semantic referencing."
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
    showSection(currentSection - 1);
  };
  resultDiv.appendChild(backButton);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("📦 DOM fully loaded");
});
