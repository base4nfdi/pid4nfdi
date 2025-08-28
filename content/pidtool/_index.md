---
title: PID Selection Tool
type: page
layout: page
draft: false
_build:
  list: never             # Nicht in Listen (z. B. Menüs, Übersichtseiten)
  render: always          # Aber rendern, wenn direkt aufgerufen
  publishResources: false     # Ressourcen (z. B. Bilder) nicht extra verlinken
---

<!-- Load the tool's styles and scripts -->
<div id="pidtool-container">
  <script src="/pidtool/script.js"></script>
  <link rel="stylesheet" href="/pidtool/style.css">
</div>

<!-- Initial intro and entity selection page -->
<div id="section-intro">
  <div id="pidtool-intro">
    <p>
The PID Selection Tool is designed for individuals or groups such as infrastructure managers who want to set up or optimize a service, repository, or research infrastructure that assigns persistent identifiers (PIDs). It helps you explore which PID provider may best fit your specific needs.
</p>

<p>
The tool works by asking you to evaluate a series of 14 short statements, such as <em>“It is important for us that the PID provider demonstrates a strong, long-term commitment to persistence.”</em> For each statement, you can indicate whether you <strong>don’t need that</strong>, find that <strong>somewhat important</strong>, <strong>important</strong>, or <strong>very important</strong>. If a statement does not apply or you don’t know, you may skip it. Your responses remain visible as you progress through the sections. You can also go back. The process takes just a few minutes. At the end, you'll receive a ranking for different PID types according to your preferences.
</p>

<p>
After completing the statements, the tool compares your selections with evaluations prepared for four different PID systems: <strong>DataCite DOI</strong>, <strong>ePIC Handles (GWDG)</strong>, <strong>URN:NBN</strong>, and <strong>ARK</strong>. These evaluations were developed by PID4NFDI in cooperation with experts from the field to reflect how well each PID provider aligns with the various statements.
</p>

<p>
This is a beta version for early feedback at the UC4B 2025 in Aachen.
</p>

<p>
Disclaimer: Some of the statements are evaluated based on local circumstances.
</p>


  </div>

<!-- PID volume pre-question (no scoring; just a switch used later in JS) -->
<div id="pid-volume-block" class="question" style="margin: 1rem 0 1.25rem 0;">
  <label><strong>How many PIDs do you plan to register per year?</strong></label>
  <div class="likert" style="margin-top: .5rem;">
    <label>
      <input type="radio" name="pid-volume" value="lt100k">
      less than 100,000
    </label>
    <label>
      <input type="radio" name="pid-volume" value="gt100k">
      more than 100,000
    </label>
    <label>
      <input type="radio" name="pid-volume" value="unknown" checked>
      I don’t know
    </label>
  </div>
  <p style="font-size:.9rem;color:#666;margin:.4rem 0 0;">
    This does not affect your answers; it only fine-tunes one rule for DataCite.
  </p>
</div>

  
<!-- taken out for the moment - might come in later again
  <div id="entity-selection">
    <h2>I want a PID for:</h2>
    <label><input type="checkbox" value="research data"> Research data (datasets)</label><br>
    <label><input type="checkbox" value="text"> Texts (articles, books, reports, etc.)</label><br>
    <label><input type="checkbox" value="ontology"> Ontologies, vocabularies, standards</label><br>
    <label><input type="checkbox" value="granular"> Granular dataset parts (e.g., annotations)</label><br>
    <label><input type="checkbox" value="physical"> Physical objects (artefacts, samples)</label><br>
    <label><input type="checkbox" value="instruments"> Instruments or hardware</label><br>
    <label><input type="checkbox" value="software"> Software</label><br><br>
  </div>
-->
  <button onclick="startTool()">Start the PID Selection Tool</button>
</div>

<!-- Progress bar -->
<div class="progress-container" style="background-color: #e0e0e0; height: 10px; width: 100%; margin: 20px 0;">
  <div id="progress-bar" style="height: 10px; background-color: #4caf50; width: 0%;"></div>
</div>

<!-- Main question container -->
<div id="question-container" style="display:none;"></div>

<!-- Results display -->
<div id="section-results" style="display:none;">
  <h2>Results</h2>
  <div id="results"></div>
</div>
