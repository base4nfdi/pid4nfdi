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
The <strong>PID Selection Tool</strong> is designed for individuals or groups – such as <strong>repository and infrastructure managers</strong> – who plan to integrate <em>Persistent Identifiers (PIDs)</em> into an existing or new research service, repository, or tool. It supports the decision-making process by helping you explore which PID system best fits your specific use case and integration goals.
</p>

<p>
While the tool is generally applicable beyond national contexts, its primary target audience is the German research landscape and the <strong>National Research Data Infrastructure (NFDI)</strong>. This focus influences both the formulation of the statements and the underlying expert evaluations, which reflect requirements, governance structures, and practical considerations relevant to PID adoption in Germany and within NFDI contexts.
</p>

<p>
The tool guides you through <strong>14 short statements</strong> divided into four thematic sections: <em>Persistence and Costs</em>, <em>Purpose</em>, <em>Metadata &amp; Interoperability</em>, and <em>Technical Setup and Training</em>. Each statement reflects a typical requirement or consideration when selecting PID services – for example, “It is important for us that the PID service demonstrates a strong, long-term commitment to persistence.” 
</p>

<p>
For each statement, you can indicate whether you <strong>don’t need that</strong>, find that <strong>somewhat important</strong>, <strong>important</strong>, or <strong>very important</strong>. If a statement does not apply or you don’t know, you may skip it. Your responses remain visible as you progress through the sections, and you can also go back to adjust them. The process takes just a few minutes.
</p>

<p>
After completing the statements, the tool compares your selections with expert evaluations prepared for several PID services. Based on these comparisons, you will receive a <strong>ranking and visual overview</strong> showing how well each PID service aligns with your preferences.
</p>

<p>
Currently, the tool covers four <em>object-related</em> PID services – <strong>DataCite DOI</strong>, <strong>ePIC Handles (GWDG)</strong>, <strong>URN:NBN</strong>, and <strong>ARK</strong> – with evaluations developed by PID4NFDI in cooperation with experts from the field.
</p>

<div class="result-info">
  <p><strong>Note:</strong> Alongside these object-related PID services, we recommend also integrating complementary PID systems such as
  <a href="https://orcid.org" target="_blank" rel="noopener">ORCID</a> for persons and
  <a href="https://ror.org" target="_blank" rel="noopener">ROR</a> for institutions.</p>

  <p>You can skip questions, but the results are getting better, the more questions are answered.</p>

  <p>If you are generally interested in PIDs or want to learn more about the broader PID ecosystem – including identifiers such as ORCID, ROR, or Wikidata – we recommend our
  <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank" rel="noopener">PID4NFDI Cookbook</a>, which provides background knowledge and further training materials.</p>
</div>


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
