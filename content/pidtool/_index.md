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
  <script src="/pid-tool/script.js"></script>
  <link rel="stylesheet" href="/pid-tool/style.css">
</div>

<!-- Initial intro and entity selection page -->
<div id="section-intro">
  <div id="pidtool-intro">
    <p>
      This tool helps you select a suitable Persistent Identifier (PID) system based on your use case.
      Answering a few short questions will generate a recommendation based on your needs for governance,
      metadata, technical features, and community practices.
      Your selections remain visible as you move between sections.
      At the end, you'll receive a color-coded recommendation for different PID types.
    </p>
  </div>

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

  <button onclick="startTool()">Continue</button>
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
