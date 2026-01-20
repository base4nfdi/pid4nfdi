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

<!-- Show the intro section -->

<div id="intro-page">
  
  <!-- Display the intro text -->

  <div id="intro-text">
    <p>The <strong>PID Selection Tool</strong> is designed for individuals or groups – such as <strong>repository and 
    infrastructure managers</strong> – who plan to integrate <em>Persistent Identifiers (PIDs)</em> into an existing or new 
    research service, repository, or tool. It supports the decision-making process by helping you explore which PID system 
    best fits your specific use case and integration goals.</p>
    <p>The tool guides you through <strong>14 short statements</strong> divided into four thematic sections: 
    <em>Persistence and Costs</em>, <em>Purpose</em>, <em>Metadata &amp; Interoperability</em>, and <em>Technical Setup 
    and Training</em>. Each statement reflects a typical requirement or consideration when selecting PID services – for 
    example, “It is important for us that the PID service demonstrates a strong, long-term commitment to persistence.”</p>
    <p>For each statement, you can indicate whether you <strong>don’t need that</strong>, find that <strong>somewhat 
    important</strong>, <strong>important</strong>, or <strong>very important</strong>. If a statement does not apply or 
    you don’t know, you may skip it. Your responses remain visible as you progress through the sections, and you can also 
    go back to adjust them. The process takes just a few minutes.</p>
    <p>After completing the statements, the tool compares your selections with expert evaluations prepared for several PID
    services. Based on these comparisons, you will receive a <strong>ranking and visual overview</strong> showing how well
    each PID service aligns with your preferences.</p>
    <p>Currently, the tool covers four <em>object-related</em> PID services – <strong>DataCite DOI</strong>, <strong>ePIC 
    Handles (GWDG)</strong>, <strong>URN:NBN</strong>, and <strong>ARK</strong> – with evaluations developed by PID4NFDI 
    in cooperation with experts from the field.</p>
    <div class="note">
      <p><strong>Note:</strong> Alongside these object-related PID services, we recommend also integrating complementary 
      PID systems such as 
      <a href="https://orcid.org" target="_blank">ORCID</a> for persons and
      <a href="https://ror.org" target="_blank">ROR</a> for institutions.</p>
      <p>You can skip questions, but the results are getting better, the more questions are answered.</p>
      <p>If you are generally interested in PIDs or want to learn more about the broader PID ecosystem – including 
      identifiers such as ORCID, ROR, or Wikidata – we recommend our
      <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a>, 
      which provides background knowledge and further training materials.</p>
    </div>
  </div>
  
  <!-- Display the PID volume pre-question (no scoring) -->
  
  <div class="question">
    <strong>How many PIDs do you plan to register per year?</strong>
    <div class="answer-options">
      <label>
        <input type="radio" id="less than 100,000" name="pid-volume" value="3">
        less than 100,000
      </label>
      <label>
        <input type="radio" id="more than 100,000" name="pid-volume" value="1">
        more than 100,000
      </label>
      <label>
        <input type="radio" id="I don’t know" name="pid-volume" value="2" checked>
        I don’t know
      </label>
    </div>
    <p id="volume-note">This does not affect your answers; it only fine-tunes one rule for DataCite.</p>
  </div>
  
  <!-- Display the start button -->
  
  <button id="run-tool">Start the PID Selection Tool</button>

</div>

<!-- Show the Questions Section -->

<!-- Show the Results Section -->

<div id="results-page">

  <!-- Display the results text -->

  <h2>Results</h2>
  <div id="results-container"></div>
  <button id="download-results-button">Download results</button>  
  <div class="note">
    <p><strong>Note:</strong> This tool focuses on object-related Persistent Identifiers. We recommend also integrating 
    complementary PID systems such as <a href="https://orcid.org" target="_blank">ORCID</a> for persons and
    <a href="https://ror.org" target="_blank">ROR</a> for institutions.</p>
    <p>For more guidance, see our 
    <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a>.</p>  
  </div>
  <p><em>If you have further questions about the results or how to use the tool, please 
  <a href="https://pid.services.base4nfdi.de/about/contact/" target="_blank">contact us</a>.</em></p>
  <button id="back-to-questions-button">Back to questions</button>  
</div>

<!-- Load the tool's styles and scripts -->

<div id="load">
  <script src="/pidtool1/script.js"></script>
  <link rel="stylesheet" href="/pidtool1/style.css">
</div>
