---
title: Training Material
date: 2024-09-09
type: landing

sections:
  - block: markdown
    content:
      title: "PID Training Materials & Guides"
      text: |
        <p>This is a growing, curated collection of publicly available training materials, handbooks, cookbooks, documentation, and guides focused on persistent identifiers (PIDs) — both in general and for specific PID systems and providers.<br /><br />
        The resources originate from various institutions and initiatives and are not maintained by us. As a work in progress, this overview will evolve to reflect the needs of the NFDI research communities. Suggestions are welcome.<br /></p>
        
        <h2 class="pid-section-heading">🧭 Getting Started: Understanding PIDs</h2>
        <p>
          Fundamentals, significance, and an overview of the PID ecosystem. Includes beginner-friendly introductions, insights into governance, and the conceptual role of PIDs in research infrastructure.
          <ul>
            <li>What are PIDs?</li>
            <li>Why are they important?</li>
            <li>How is the PID ecosystem structured?</li>
          </ul>
        </p>        

        <!-- Filter bar -->
        <div id="pid-filter" class="pid-filter not-prose">
          <input id="pid-search" type="search" placeholder="Search title/desc…" aria-label="Search">

          <select id="f-type" aria-label="Type">
            <option value="">Type</option>
            <option>Intro</option><option>Guide</option><option>Hands-on</option>
            <option>Docs/API</option><option>Slides</option><option>Video</option><option>Tool</option>
          </select>

          <select id="f-provider" aria-label="Provider">
        <option value="">Provider</option>
          <option>DataCite</option>
          <option>ORCID</option>
          <option>ePIC</option>
          <option>ROR</option>
          <option>Crossref</option>
          <option>ARK</option>
          <option>Software Heritage</option>
          <option>ARDC</option>
          <option>DOI</option>
          <option>Community</option>
          </select>

          <select id="f-domain" aria-label="Domain">
            <option value="">Domain</option>
            <option>general audience</option>
            <option>life sciences</option>
            <option>GLAM</option>
            <option>heritage</option>
            <option>engineering sciences</option>
            <option>Social Sciences</option>
            <option>Humanities</option>
            <option>earth sciences</option>
          </select>

          <select id="f-lang" aria-label="Language">
            <option value="">Language</option>
            <option>EN</option><option>DE</option>
          </select>

          <select id="f-year" aria-label="Year">
            <option value="">Year</option>
            <option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option>
          </select>

          <select id="f-proficiency" aria-label="Proficiency Level">
            <option value="">Proficiency Level</option>
          </select>

          <select id="f-pid-types" aria-label="PID Types">
            <option value="">PID Types</option>
          </select>

          <select id="f-license" aria-label="License">
            <option value="">License</option>
          </select>

          <label>
            <input type="checkbox" id="f-outcomes">
            With Learning Outcomes
          </label>

          <button id="pid-clear" type="button">Clear</button>
          <span id="pid-count" aria-live="polite"></span>
        </div>

        
        <!-- Card Grid -->
        <div class="pid-card-grid">


        

          
          <div class="pid-card" data-type="Guide" data-provider="DOI" data-domain="general audience" data-lang="en">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.4574566" target="_blank">PIDs 101: A Beginners' Guide to Persistent Identifiers</a></h3>
            <p class="pid-description">Whether you are new to the world of persistent identifiers or just in need of a basic PID refresher, this introductory session is for you! We’ll explain what a persistent identifier is, what they can </p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">RAiD</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Alice Meadows, Helena Cousijn, Maria Gould, Ginny Hendricks, Julie Petro, & Natasha Simons</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              <dt>Duration:</dt>
              <dd>24 slides</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.4574566" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2019">
            <h3>📘 <a href="https://doi.org/10.1629/uksg.457" target="_blank">Persistent Identifiers: The Building Blocks of the Research Information Infrastructure</a></h3>
            <p class="pid-description">Persistent identifiers (PIDs) – for people (researchers), places (their organizations) and things (their research outputs and other contributions) – are foundational elements in the overall research i</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Meadows, Alice; Haak, Laurel L.; Brown, Josh</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              <dt>Duration:</dt>
              <dd>9 pages</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.1629/uksg.457" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="presentation" data-provider="DataCite" data-domain="general audience, US" data-lang="en" data-year="2021">
            <h3>📊 <a href="https://doi.org/10.5446/48030" target="_blank">The Power of PIDs: using persistent identifiers to enable connections throughout the research lifecycle</a></h3>
            <p class="pid-description">This slide deck from the U.S. Department of Energy’s Office of Scientific and Technical Information provides a comprehensive introduction to the role of persistent identifiers (PIDs) across the resear</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Robinson, Carly, https://orcid.org/0000-0002-8523-1478</dd>
              <dt>Organisation:</dt>
              <dd>United States Department of Energy: Washington D.C., US, https://ror.org/01bj3aw27</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Duration:</dt>
              <dd>Video: 35:08, PDF Slides: 30</dd>
              <dt>License:</dt>
              <dd>CC-BY-3.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what persistent identifiers (PIDs) are and why they matter. Recognize key PID types (DOIs, ORCID iDs, ROR IDs). See how PIDs support the research lifecycle and FAIR practices. Gain a basic overview of DOE/OSTI PID services for data, software, awards, people, and organizations. Understand how connecting PIDs improves metadata and research visibility.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5446/48030" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="Social Sciences, Humanities" data-lang="en" data-year="2022">
            <h3>📘 <a href="https://campus.dariah.eu/resource/posts/introduction-to-persistent-identifiers *" target="_blank">Introduction to Persistent Identifiers</a></h3>
            <p class="pid-description">As part of the DARIAH Friday Frontiers in-house webinar series, Dr. Tibor Kálman (GWDG) gives an introduction to Persistent Identifiers. Why do we need them, how do we apply them, and how do (digital)</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">B2Inst</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Kálman, Tibor</dd>
              <dt>Organisation:</dt>
              <dd>DARIAH-Campus</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, competent</dd>
              <dt>Duration:</dt>
              <dd>Video: 47:39</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what is meant by Persistent Identifier (PID). Recognise how they can be used to improve accessibility and openness of (digital) humanities and arts data and research outputs</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://campus.dariah.eu/resource/posts/introduction-to-persistent-identifiers *" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="ePIC" data-domain="general audience interested in PIDs for Instruments" data-lang="en" data-year="2024">
            <h3>📘 <a href="https://www.pid-network.de/en/news/events/online-seminar-zu-pids-fuer-instrumente" target="_blank">Online seminar on PIDs for instruments</a></h3>
            <p class="pid-description">The "PID Network Germany" project hosted the online seminar "PIDs for instruments" on 7 May 2024. A combination of informative presentations on the areas of application and specific examples of PIDs f</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">B2Inst</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Genderjahn, Steffi et al., https://orcid.org/0000-0002-8912-184X</dd>
              <dt>Organisation:</dt>
              <dd>PID Network Germany</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, competent, novice, proficient</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.pid-network.de/en/news/events/online-seminar-zu-pids-fuer-instrumente" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DOI" data-domain="general audience" data-lang="en">
            <h3>📘 <a href="https://www.bodleian.ox.ac.uk/sites/default/files/bodreader/documents/media/iskills-oa-introduction-persistent-identifiers.pdf" target="_blank">Introduction to Persistent Identifiers. Bodleian iSkills</a></h3>
            <p class="pid-description">This introductory slide deck from Bodleian iSkills (University of Oxford) explains what persistent identifiers (PIDs) are, why they matter, and how they help solve problems of ambiguity in research ou</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Jefferies, Neil, https://orcid.org/0000-0003-3311-3741</dd>
              <dt>Organisation:</dt>
              <dd>Bodleian Libraries, University of Oxford</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice</dd>
              <dt>Duration:</dt>
              <dd>19 slides</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the basic concept and purpose of persistent identifiers. Recognize key PID types used in research (DOIs, ORCID, ROR). See how PIDs solve disambiguation challenges and support reliable metadata. Gain an overview of PID workflows and integrations in practice (e.g., ORCID, DataCite, Crossref). Become aware of national PID strategies and initiatives in the UK.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.bodleian.ox.ac.uk/sites/default/files/bodreader/documents/media/iskills-oa-introduction-persistent-identifiers.pdf" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="slides" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2024">
            <h3>📊 <a href="https://doi.org/10.5281/zenodo.14185370" target="_blank">What lies beneath – A closer look at the PID ecosystem</a></h3>
            <p class="pid-description">Workshop slides on the structure and governance of the PID ecosystem</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">RAiD</span>
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Wim, Hugo; van Horik, René</dd>
              <dt>Organisation:</dt>
              <dd>DANS (https://ror.org/008pnp284)</dd>
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, advanced beginner</dd>
              <dt>Duration:</dt>
              <dd>21 slides</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>To understand the role of PIDs in the research workflow. To get an overview of the PID ecosystem. To get informed on how the quality of a PID policy can be assessed. To get an overview of the role of DANS in "all of this".</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.14185370" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="general audience" data-lang="en">
            <h3>📘 <a href="https://sis.web.cern.ch/submit-and-publish/persistent-identifiers" target="_blank">Persistent Identifiers</a></h3>
            <p class="pid-description">This web page by the CERN Scientific Information Service (SIS) defines persistent identifiers (PIDs) and explains their importance, the major types (for objects, people, grants, organisations) and how</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">URN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>CERN</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Grasp what persistent identifiers (PIDs) are and why they matter. Recognise the key categories of PIDs (objects, people, grants, organisations). Identify typical PID systems (DOI, ORCID, ROR, ISBN/ISSN). Understand how to obtain relevant PIDs in a research workflow.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://sis.web.cern.ch/submit-and-publish/persistent-identifiers" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="general audience" data-lang="de" data-year="2024">
            <h3>📘 <a href="https://www.forschungsdaten.info/themen/veroeffentlichen-und-archivieren/persistente-identifikatoren/" target="_blank">Persistente Identifikatoren</a></h3>
            <p class="pid-description">This webpage from the portal forschungsdaten.info explains the concept of persistent identifiers (PIDs) in the context of publishing and archiving research data. It defines what a PID is, gives an ove</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">URN</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">GND</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Baden-Württembergischen Landesinitiative für Forschungsdatenmanagement bwFDM, Universität Konstanz</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              <dt>License:</dt>
              <dd>CC0-1.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what a persistent identifier (PID) is and why it is needed. Recognise key PID systems for research outputs, people, and institutions (e.g., DOI, URN, ORCID, ROR). Comprehend how PIDs enhance the findability, citability and reuse of research data. Gain insight into structural elements and workflow requirements for assigning PIDs.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.forschungsdaten.info/themen/veroeffentlichen-und-archivieren/persistente-identifikatoren/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="general audience" data-lang="" data-year="2025">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.14888190" target="_blank">Video: Was sind PIDs?</a></h3>
            <p class="pid-description">In diesem Video "Was sind persistente Identifikatoren (PIDs)?" wird auf eine humorvolle und zugängliche Weise erklärt, was genau PIDs sind und welche Relevanz sie in der Forschungswelt haben. Als eine</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Agniashvili, Ana (Editor), https://orcid.org/0009-0005-9113-266X, Adlung, Robin (Editor), Schmidt, Diana (Editor) https://orcid.org/0000-0001-7852-7214, Kanaki, Elisavet (Editor) https://orcid.org/0000-0001-7714-0536</dd>
              <dt>Organisation:</dt>
              <dd>Forschungsdatenmanagement Niedersachsen (FDM-NDS); HAWK Hochschule für Angewandte Wissenschaft und Kunst Hildesheim/Holzminden/Göttingen</dd>
              <dt>Duration:</dt>
              <dd>Video: 3:50</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.14888190" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="tutorial, slides, hands-on" data-provider="ARK" data-domain="IIIF community, GLAM, general audience" data-lang="en" data-year="2023">
            <h3>📊 <a href="https://arks-stg.cdlib.org/assets/documents/2023/06/ARK-Training-Tutorial-IIIF-2023-slides.pdf" target="_blank">ARK Training, 2023-06-06, 3-hour tutorial from 2023 IIIF Annual Conference.</a></h3>
            <p class="pid-description">A comprehensive 3-hour tutorial introducing ARK persistent identifiers, covering why ARKs are used, use cases from major institutions, metadata for object development and persistence, minting and assi</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ARK</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>John Kunze, Donny Winston</dd>
              <dt>Organisation:</dt>
              <dd>ARK Alliance</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Duration:</dt>
              <dd>3 hours (180 minutes)</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding ARK identifiers, ability to create and manage ARKs, understanding ARK metadata vocabulary, practical experience with ARK registration</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://arks-stg.cdlib.org/assets/documents/2023/06/ARK-Training-Tutorial-IIIF-2023-slides.pdf" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="general audience" data-lang="en" data-year="2022">
            <h3>📘 <a href="https://www.youtube.com/watch?v=iea6d5oI8Ag" target="_blank">What are Persistent Identifiers and why to use them?</a></h3>
            <p class="pid-description">A short video explaining what persistent identifiers are and why they are important in the context of FAIR data principles</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>FAIRsFAIR</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding the concept of persistent identifiers and their role in FAIR data</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.youtube.com/watch?v=iea6d5oI8Ag" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="game" data-provider="DOI" data-domain="general audience" data-lang="en" data-year="2024">
            <h3>📘 <a href="https://dans.knaw.nl/en/dans-data-game/;" target="_blank">DANS Data Game</a></h3>
            <p class="pid-description">The game gives an impression of the research data landscape and was specially produced for the 15th anniversary of DANS. In advance of the 20th anniversary of DANS, we present here the 2024 updated ve</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Data Archiving and Networked Services</dd>
              <dt>Organisation:</dt>
              <dd>DANS</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>License:</dt>
              <dd>CC-BY-SA-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://dans.knaw.nl/en/dans-data-game/;" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="tutorials" data-provider="DataCite" data-domain="Generic" data-lang="en">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.7841734" target="_blank">Digital Presence Checklist</a></h3>
            <p class="pid-description">This checklist provides practical guidance for improving a researcher’s digital presence using persistent identifiers such as ORCID and DOIs. It outlines best practices for connecting publications, da</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Stall, Shelley, Specht, Alison, Amato, Jennifer Gonçalves, Corrêa, Pedro Luiz, Pizzigatti, Curivil, Francine Aparecida Lante, David, Romain, Erdmann, Christopher, Machicao, Jeaneth, Miyairi, Nobuko, Murayama, Yasuhiro, O'Brien, Margaret, Santos, Solange, Wyborn, Lesley, Vellenich, Danton Ferreira, & Mabile, Laurence</dd>
              <dt>Duration:</dt>
              <dd>2 slides</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how ORCID and DOIs help increase visibility and attribution for research outputs. Know how to connect publications, datasets, and software to their ORCID record. Recognize best practices for depositing data and software using PIDs and open licenses. Be able to apply practical steps to maintain an effective and discoverable digital research profile.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.7841734" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="presentation" data-provider="DataCite" data-domain="general audience" data-lang="de">
            <h3>📊 <a href="https://www.forschungsdaten.org/images/0/0d/PID_nestorDINI_Workshop_Einsteigersession.pdf" target="_blank">Der Weg zum PID: Praktische Einführung in DOI und ePIC</a></h3>
            <p class="pid-description">This workshop slide deck from the 7th DINI/nestor Workshop (2017) provides a practical introduction to persistent identifiers with a focus on DOIs and ePIC handles. It explains the underlying Handle S</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Sven Bingert (Gesellschaft für wissenschaftliche Datenverarbeitungen Göttingen GWDG), Katja Pletsch (ZB MED – Informationszentrum Lebenswissenschaften), Jessika Rücknagel (Niedersächsische Staats‐ und Universitätsbibliothek Göttingen</dd>
              <dt>Duration:</dt>
              <dd>52 slides</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the differences and shared foundations of ePIC handles and DataCite DOIs. Gain insight into how PIDs are created, resolved, and maintained using the Handle System. Recognize when to use ePIC vs. DOI in research workflows (e.g., collaborative data vs. published data). Learn the basic steps and requirements for registering PIDs (metadata, prefixes, APIs, landing pages). Become familiar with the responsibilities of data centres, PID consortia, and registration agencies.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.forschungsdaten.org/images/0/0d/PID_nestorDINI_Workshop_Einsteigersession.pdf" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation" data-provider="DataCite" data-domain="general audience" data-lang="de">
            <h3>📄 <a href="https://wiki.tib.eu/confluence/spaces/pid/pages/131488647/DataCite+Fabrica+Handbuch+Startseite" target="_blank">Fabrica Handbuch – TIB Wiki</a></h3>
            <p class="pid-description">This comprehensive manual from TIB – Leibniz Information Centre for Science and Technology provides detailed guidance on how to use DataCite Fabrica, the metadata registration tool for DataCite DOIs. </p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Taller, Nelli et al.</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how DataCite Fabrica supports the registration and management of DOIs and their metadata. Know how to assign prefixes, register new DOIs, update metadata, and monitor statuses in Fabrica. Recognise the role of accurate and complete metadata in PID workflows and how to implement it in Fabrica. Become familiar with best practices and quality assurance processes for PID metadata via Fabrica.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://wiki.tib.eu/confluence/spaces/pid/pages/131488647/DataCite+Fabrica+Handbuch+Startseite" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="cookbook" data-provider="DataCite" data-domain="life sciences" data-lang="en">
            <h3>📘 <a href="https://faircookbook.elixir-europe.org/" target="_blank">FAIR Cookbook – Life Sciences</a></h3>
            <p class="pid-description">The FAIR Cookbook is an open, online “cookbook” of use-cases (“recipes”) for making research data Findable, Accessible, Interoperable and Reusable (FAIR). Developed within the life sciences under ELIX</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>FAIRplus project</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, competent, proficient</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the FAIR principles and why they are important for research data. Recognise how persistent identifiers (PIDs) contribute to making data findable and reusable. Identify and apply practical “recipes” for metadata, workflows and tools relating to FAIR data. Gain insight into life-science-specific FAIR practices, including how PIDs integrate into data-sharing and management pipelines.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://faircookbook.elixir-europe.org/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="en" data-year="2024">
            <h3>📘 <a href="https://fairsoftwarechecklist.net/v0.2?f=00&a=00000&i=00000&r=000" target="_blank">FAIR Software Checklist</a></h3>
            <p class="pid-description">This online self-assessment tool from the Netherlands eScience Center and the Australian Research Data Commons allows research software authors to evaluate how well their software aligns with the FAIR</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Netherlands eScience Center; Australian Research Data Commons</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Recognise how the FAIR principles apply specifically to research software. Understand the importance of persistent identifiers (e.g., DOIs, PURLs, Handles) for software versioning and citation. Assess their software project's compliance against FAIR criteria (findability, accessibility, interoperability, reusability). Identify practical improvement steps to increase a software project's FAIRness and visibility.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://fairsoftwarechecklist.net/v0.2?f=00&a=00000&i=00000&r=000" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="cookbook" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2024">
            <h3>📘 <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a></h3>
            <p class="pid-description">The “PID4NFDI Cookbook” is an open-access online training manual developed under the German National Research Data Infrastructure (NFDI) initiative. It offers a practical guide for individuals and org</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">B2Inst</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">IGSN</span>
              <span class="pid-type-badge">URN</span>
              <span class="pid-type-badge">GND</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>PID4NFDI</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what a persistent identifier (PID) is and why it's essential in research infrastructures. Identify different PID systems (e.g., DOI, ePIC, ORCID, IGSN, ROR, ARK) and know how to select among them for given use-cases. Recognise how to embed PIDs in research workflows and metadata schemas, and integrate them into organisational processes. Gain practical guidance to initiate PID implementation within institutions or projects (prefix registration, provider choice, metadata requirements).</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="video" data-provider="Community" data-domain="earth sciences" data-lang="en" data-year="2020">
            <h3>🎥 <a href="https://youtu.be/lIRrC3CjeFM" target="_blank">The Paper and The Data: Module 5 – Persistent Identifiers – Video</a></h3>
            <p class="pid-description">Video explaining PID use in scholarly publishing</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://youtu.be/lIRrC3CjeFM" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="ORCID" data-domain="earth sciences" data-lang="en">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.3744660" target="_blank">The Paper and The Data: Module 5 – Persistent Idenifiers – Slides</a></h3>
            <p class="pid-description">Module 5, Video on Persitent Identifiers</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">Crossref DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Stall, Shelley; Townsend, Randy; Robinson, Erin</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.3744660" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="en" data-year="2018">
            <h3>📘 <a href="https://doi.org/10.5446/37823" target="_blank">Findability of Research Data and Software Through PIDs</a></h3>
            <p class="pid-description">Video presentation on using PIDs and FAIR repositories to improve findability</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Kraft, Angelina; Leinweber, Katrin</dd>
              <dt>Organisation:</dt>
              <dd>Technische Informationsbibliothek (TIB)</dd>
              <dt>License:</dt>
              <dd>CC-BY-3.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5446/37823" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation, tutorials" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2025">
            <h3>📄 <a href="https://support.datacite.org/docs/getting-started" target="_blank">Getting Started – DataCite</a></h3>
            <p class="pid-description">The “Getting Started” guide from DataCite provides new members and repositories with a clear, step-by-step introduction to registering DOIs: setting up accounts, creating DOI prefixes, using the Fabri</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">RAiD</span>
              <span class="pid-type-badge">IGSN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>DataCite</dd>
              <dt>Duration:</dt>
              <dd>01:46 h</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how to set up a DataCite account and select the appropriate membership and repository type. Know how to register their first DOI using the Fabrica web interface or REST/MDS APIs. Be aware of metadata requirements, DOI prefix structure and best practices for landing pages. Recognize the importance of versioning, persistence and how to maintain DOI metadata over time.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://support.datacite.org/docs/getting-started" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation, manual" data-provider="ROR" data-domain="general audience" data-lang="en">
            <h3>📄 <a href="https://ror.readme.io/docs/basics" target="_blank">ROR Basics</a></h3>
            <p class="pid-description">The “ROR Basics” guide explains what the ROR identifier system is, how it works, and how it supports open scholarly infrastructure. ROR provides persistent identifiers (ROR IDs) for research organisat</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>ROR</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what a ROR ID is and how it differs from other persistent identifiers. Recognise why organisational identifiers matter in research metadata and workflows. Know how to access, search and use the ROR registry (UI, REST API, data dump). Appreciate how ROR integrates with other systems (e.g., ORCID, Crossref, DataCite) and supports institutional affiliation linking.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://ror.readme.io/docs/basics" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="video" data-provider="ORCID" data-domain="general audience" data-lang="de">
            <h3>🎥 <a href="https://info.orcid.org/de/Video-Tutorials/" target="_blank">ORCID Video Tutorials</a></h3>
            <p class="pid-description">The ORCID Video Tutorials page provides a library of short guidance videos aimed at helping researchers create and manage their ORCID iD (persistent identifier for researchers). It covers topics such </p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ORCID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>ORCID</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what an ORCID iD is and why it is important for researchers. Know how to register for an ORCID iD and set up their profile. Learn how to use their ORCID iD to link publications and research outputs. Gain awareness of best-practices for maintaining their ORCID record over time.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://info.orcid.org/de/Video-Tutorials/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="interactive exercises" data-provider="DataCite" data-domain="heritage, GLAM" data-lang="en" data-year="2023">
            <h3>📘 <a href="https://www.pidwijzer.nl/en/pid_results/new#tab-1" target="_blank">PID Guide – pidwijzer.nl</a></h3>
            <p class="pid-description">The “PID Guide” is an interactive web-based tool developed by the Netherlands Digital Heritage network (NDE). It helps organisations select the most appropriate persistent identifier (PID) system by g</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">URN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Digital Heritage Network Netherlands</dd>
              <dt>License:</dt>
              <dd>CC0-1.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand key decision-factors when choosing a PID system (object type, workflow, machine vs human use, costs). Recognise major PID systems (ARK, Handle, DOI, URN:NBN) and how they differ in purpose and requirements. Be able to assess their organisation’s needs and filter PID options accordingly. Learn how organisational context (technical capacity, support, deletion policy, statistics) affects PID system choice.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.pidwijzer.nl/en/pid_results/new#tab-1" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="strategic documentation, policy documents, roadmap" data-provider="DataCite" data-domain="Generic" data-lang="en" data-year="2023">
            <h3>📄 <a href="https://eosc.eu/roadmap-category-level-1/persistent-identifiers/" target="_blank">EOSC Macro‑Roadmap – Persistent Identifiers (PIDs)</a></h3>
            <p class="pid-description">Collection of strategic contributions and implementation plans for PIDs within the EOSC context. Covers establishment of coordination mechanisms for PID service providers, alignment with EOSC PID poli</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">RAiD</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>EOSC Association, various EOSC working groups and task forces</dd>
              <dt>Organisation:</dt>
              <dd>EOSC Association</dd>
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding EOSC PID policy landscape, strategic implementation planning, coordination mechanisms</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://eosc.eu/roadmap-category-level-1/persistent-identifiers/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="ARK" data-domain="general audience, GLAM" data-lang="en">
            <h3>📘 <a href="https://youtu.be/-RkMGFCGRic" target="_blank">Getting started with ARK (Archival Resource Key) Persistent Identifiers</a></h3>
            <p class="pid-description">A 30-minute introduction to ARK persistent identifiers, explaining what they are, how to use them, and their benefits</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ARK</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>John Kunze, Donny Winston</dd>
              <dt>Organisation:</dt>
              <dd>ARK Alliance</dd>
              <dt>Duration:</dt>
              <dd>30 minutes</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding ARK identifiers, how to get started with ARKs, benefits of decentralized PIDs</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://youtu.be/-RkMGFCGRic" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="tutorials" data-provider="Software Heritage" data-domain="Generic" data-lang="en" data-year="2025">
            <h3>📘 <a href="https://www.softwareheritage.org/2025/06/13/software-hash-identifier-swhid-tutorial/" target="_blank">Using the SoftWare Hash Identifier (SWHID): A tutorial</a></h3>
            <p class="pid-description">This tutorial explains the persistent identifier scheme SWHID (Software Hash Identifier) developed by Software Heritage. It covers why traditional identifiers like DOIs may not always fit software art</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage Foundation</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what a SWHID is and how it differs from other PIDs (e.g., DOIs). Recognize the different SWHID object types (CNT, DIR, REV, RL, SNP) and their use cases. Learn how to generate or retrieve SWHIDs for software artifacts and how context parameters affect them. Appreciate how SWHIDs support software citation, reproducibility and long-term reference of code.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.softwareheritage.org/2025/06/13/software-hash-identifier-swhid-tutorial/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Software Heritage" data-domain="Generic" data-lang="en">
            <h3>📘 <a href="https://www.softwareheritage.org/how-to-archive-reference-code/" target="_blank">How to archive and reference your code</a></h3>
            <p class="pid-description">The “How to archive and reference your code” guide published by Software Heritage provides step-by-step instructions for preparing software repositories, archiving them in the Software Heritage archiv</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage Foundation</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how to prepare a public software repository for long-term archival (README, AUTHORS, LICENSE). Learn how to archive code into Software Heritage (via “Save Code Now”, browser extension, APIs). Recognise how to reference archival software artifacts using SWHIDs (full repo, version, file, snippet). Appreciate how persistent identifiers for software support reproducibility, citation and long-term access.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.softwareheritage.org/how-to-archive-reference-code/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Software Heritage" data-domain="Generic" data-lang="en">
            <h3>📘 <a href="https://annex.softwareheritage.org/public/talks/2023/2023-03-27-SWHID-kickoff.mp4" target="_blank">Kick-off session of the SWHID specification</a></h3>
            <p class="pid-description">This is a recorded talk titled “Kick-off session of the SWHID specification” (March 27 2023) by Software Heritage. It introduces the design, purpose, and upcoming roadmap of the SWHID (Software Hash I</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage Foundation</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, competent, proficient</dd>
              <dt>Duration:</dt>
              <dd>56:02 minutes</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the motivation behind the SWHID system and how it addresses software citation challenges. Recognise the core vs qualified variants of SWHID and when to use each in practice. Gain awareness of the SWHID specification development process and future roadmap. Be introduced to examples of software­ing artifacts, versioning, and how SWHIDs enable reproducible referencing.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://annex.softwareheritage.org/public/talks/2023/2023-03-27-SWHID-kickoff.mp4" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="manual" data-provider="Community" data-domain="general audience" data-lang="en" data-year="2017">
            <h3>📘 <a href="#" target="_blank">Working with PIDs CURL</a></h3>
            <p class="pid-description">This manual from the EUDAT training repository introduces how to work with persistent identifiers (PIDs) using command-line tools (cURL) in the context of the B2SAFE/B2STAGE services. It covers key PI</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">B2SAFE/B2STAGE</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Staiger, Christine, https://orcid.org/0000-0002-6754-7647</dd>
              <dt>Organisation:</dt>
              <dd>DTLS - Dutch Techcentre For Life Sciences, https://ror.org/055d8gs64</dd>
              <dt>Proficiency Level:</dt>
              <dd>proficient, expert</dd>
              <dt>Duration:</dt>
              <dd>477 lines</dd>
              <dt>License:</dt>
              <dd>MIT</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how to interact with PID services programmatically using cURL commands. Recognise typical API endpoints for PID registration, metadata querying and updates. Practice working with PIDs in a data-management workflow via command-line tools. Gain insights into how PIDs support automation of data workflows and service integrations.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="#" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="ePIC" data-domain="general audience" data-lang="en" data-year="2017">
            <h3>📘 <a href="#" target="_blank">Working with Persistent Identifiers - Hands-on</a></h3>
            <p class="pid-description">This lecture illustrates the use of PIDs, more specifically it shows how to employ handles using the B2HANDLE library</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ARK</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Staiger, Christine, https://orcid.org/0000-0002-6754-7647</dd>
              <dt>Organisation:</dt>
              <dd>DTLS - Dutch Techcentre For Life Sciences, https://ror.org/055d8gs64</dd>
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>Duration:</dt>
              <dd>282 lines</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="#" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="en">
            <h3>📘 <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training" target="_blank">EUDAT B2SAFE-B2STAGE Training</a></h3>
            <p class="pid-description">This training module provides you with instructions on how to deploy B2SAFE and B2STAGE. It also shows you how to use these services. Moreover, the module provides hands-on training on Persistent Iden</p>
            <div class="pid-actions">
              <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation" data-provider="ePIC" data-domain="Generic" data-lang="en">
            <h3>📄 <a href="https://doc.pidconsortium.eu/" target="_blank">ePIC API Documentation</a></h3>
            <p class="pid-description">The ePIC Documentation site provides developer-and institution-oriented guidance on using the ePIC API to register and manage persistent identifiers (PIDs) via the ePIC service. It covers API endpoint</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">ePIC handle</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the role and scope of the ePIC PID system (for research organisations, datasets, software, etc.). Know how to use the ePIC API to create, resolve, update and manage PIDs programmatically. Recognise the metadata and operational requirements for ePIC PIDs (prefixes, identifiers, landing pages). Be able to evaluate how to integrate ePIC PID services into institutional workflows and repositories.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doc.pidconsortium.eu/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="technical documentation, model specification" data-provider="ePIC" data-domain="catalysis research community, NFDI4Cat, chemistry" data-lang="en" data-year="2024">
            <h3>📄 <a href="https://nfdi4cat.github.io/pid4cat-model/latest/" target="_blank">pid4cat – PID Model for Catalysis</a></h3>
            <p class="pid-description">A FAIR PID model for research data in catalysis, based on the Handle system. PID4Cat builds upon the handle system with a custom API and provides a LinkML metadata model for PID-related metadata store</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ePIC handle</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>NFDI4Cat Team (entwickelt von der NFDI4Cat-Community)</dd>
              <dt>Organisation:</dt>
              <dd>NFDI4Cat (National Research Data Infrastructure for Catalysis-Related Sciences)</dd>
              <dt>Proficiency Level:</dt>
              <dd>proficient, expert</dd>
              <dt>License:</dt>
              <dd>Source code and data model: MIT License Documentation and images: CC-BY 4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding Handle-based PIDs, implementing PID4Cat system, working with LinkML metadata models</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://nfdi4cat.github.io/pid4cat-model/latest/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation" data-provider="ePIC" data-domain="environmental sciences, life sciences" data-lang="en" data-year="2024">
            <h3>📄 <a href="https://docs.eudat.eu/b2inst/" target="_blank">B2INST User Guide</a></h3>
            <p class="pid-description">B2INST is a community-driven solution for global and unique identification of instruments operated within the research domain. Various (scientific) instruments, such as sensors used in environmental s</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">B2Inst</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>GWDG</dd>
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>License:</dt>
              <dd>CC-BY-SA-3.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the purpose of B2INST as a PID service for research instruments. Recognise how instrument identifiers can be used to register, describe and reference scientific equipment across domains. Be familiar with the target audiences and workflows of B2INST in data-management contexts. Know the licensing and governance aspects of the documentation (CC BY-SA 3.0).</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://docs.eudat.eu/b2inst/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="slides" data-provider="Software Heritage" data-domain="general audience" data-lang="en" data-year="2023">
            <h3>📊 <a href="https://hal.science/hal-04121507v1" target="_blank">SWHID specification kickoff meeting</a></h3>
            <p class="pid-description">This paper, titled “SWHID: Specifications for intrinsic software heritage identifiers”, provides a formal specification of the SWHID scheme, developed by Software Heritage Foundation. It details synta</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Cosmo, Roberto Di</dd>
              <dt>Organisation:</dt>
              <dd>Universite Paris Cite</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what SWHIDs are and why they are needed for software artefacts. Recognise the difference between “core” and “qualified” SWHIDs and their syntax. Appreciate how software archiving and referenceability benefit from SWHID adoption. Be able to locate and interpret the specification to apply SWHIDs in research software workflows.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://hal.science/hal-04121507v1" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Software Heritage" data-domain="Generic" data-lang="en" data-year="2025">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.15324036" target="_blank">FAIR Implementation Workshop -Meet the SoftWare Hash Identifier: Do one thing and do it well</a></h3>
            <p class="pid-description">The session highlighted that software identification was essential for ensuring the long-term traceability of scholarly outputs. However, as often happened with software, the process was not as straig</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Gruenpeter, Morane; Granger, Sabrina</dd>
              <dt>Organisation:</dt>
              <dd>Inria Centre de Recherche de Paris; Inria Lyon Centre</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, novice, competent</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.15324036" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="slides" data-provider="DataCite" data-domain="life sciences" data-lang="en" data-year="2023">
            <h3>📊 <a href="https://repository.publisso.de/resource/frl:6452685/data" target="_blank">Online Training Workshop on Research Data Management in (Bio-)Medicine</a></h3>
            <p class="pid-description">This slide deck from the ZB MED / Repository for Life Sciences (FRL) workshop introduces the fundamentals of persistent identifiers (PIDs) in a research-data context. It contains one dedicated chapter</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">IGSN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Justine Vandendorpe, Birte Lindstädt, Aliaksandra Shutsko & Katharina Markus ZB MED - Information Centre for Life Sciences</dd>
              <dt>Organisation:</dt>
              <dd>ZB Med</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the role of persistent identifiers (PIDs) in the lifecycle of research data. Recognise how DOIs are assigned to research data and what metadata standards apply. Identify best practices for referencing and citing data in the life sciences domain. Be aware of the integration of PIDs into repository workflows and metadata capture.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://repository.publisso.de/resource/frl:6452685/data" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation" data-provider="Software Heritage" data-domain="Generic" data-lang="en">
            <h3>📄 <a href="https://www.swhid.org/swhid-specification/" target="_blank">SWHID Specification</a></h3>
            <p class="pid-description">The SWHID Specification provides a formal standard for software-heritage identifiers, defining both “core identifiers” and “qualified identifiers” for software artifacts preserved by the Software Heri</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage Foundation</dd>
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand what a SWHID is and how it differs from other PID types for software. Recognise the syntax and structure of “core identifiers” vs “qualified identifiers” in the SWHID scheme. Appreciate the role of software preservation (via Software Heritage) in PID assignment and long-term referenceability. Be able to identify how SWHIDs integrate into research workflows for software citation, archiving, and reuse.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.swhid.org/swhid-specification/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="documentation" data-provider="Software Heritage" data-domain="Generic" data-lang="en">
            <h3>📄 <a href="https://docs.softwareheritage.org/" target="_blank">Software Heritage documentation</a></h3>
            <p class="pid-description">The Documentation site for Software Heritage (docs.softwareheritage.org) offers a comprehensive developer- and user-oriented guide to their universal archive of source code. It covers sections such as</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage Foundation</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the mission of Software Heritage and how it archives source code globally. Recognise the role of SWHIDs (persistent identifiers for software) and how they are supported in the archive. Become familiar with how to browse, reference, deposit, and use software artefacts via the archive’s tools and API. Gain insight into the underlying data model and architecture of a large-scale software archival system.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://docs.softwareheritage.org/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="collection of resources / database, tutorials" data-provider="DataCite" data-domain="GLAM, Memory, Objects" data-lang="en" data-year="2021">
            <h3>📘 <a href="https://tanc-ahrc.github.io/PIDResources/" target="_blank">Developing Identifiers for Heritage Collections</a></h3>
            <p class="pid-description">This resource describes the different aspects of developing persistent identifiers (PIDs) in the context of Heritage Collections. Following consultation through May 2021, the resource is now available</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Kotarski et al.</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, novice, competent</dd>
              <dt>License:</dt>
              <dd>AGPL-3.0-only</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://tanc-ahrc.github.io/PIDResources/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="life sciences" data-lang="en">
            <h3>📘 <a href="https://tess.elixir-europe.org/materials" target="_blank">ELIXIR TeSS – Catalogue of Training Materials for the Life Sciences</a></h3>
            <p class="pid-description">The TeSS (Training eSupport System) portal of ELIXIR aggregates a comprehensive catalogue of training materials in the life sciences - including tutorials, decks, videos, and hand-on modules. The “Mat</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>ELIXIR Europe</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient, expert</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand how to discover and access a wide range of training materials via the TeSS portal. Recognise the value of aggregated, curated resources in life-science training workflows. Learn how to filter and select materials by topic, level, license, and format. Be able to navigate the TeSS “Materials” section to support self-guided learning or find resources for reuse or adaptation.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://tess.elixir-europe.org/materials" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="tutorials" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2023">
            <h3>📘 <a href="https://support.datacite.org/docs/datacite-training" target="_blank">DataCite Training (Collection)</a></h3>
            <p class="pid-description">The DataCite Training portal provides a comprehensive set of training modules designed for DataCite Members, Consortium Organisations and Repositories. It covers key services such as metadata, the Fab</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">RAiD</span>
              <span class="pid-type-badge">IGSN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>DataCite</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient</dd>
              <dt>Duration:</dt>
              <dd>6 videos of various length plus supplementary material</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understand the foundational metadata schema and workflows of DataCite (DOIs, registration, updates). Gain practical skills in using Fabrica to create, update and manage DOIs. Learn how to use DataCite Commons to explore metadata, organisations, repositories and researcher profiles. Be able to work with DataCite’s APIs (REST, GraphQL, OAI-PMH) for automating DOI and metadata workflows. Recognise how citations, related identifiers and emerging PID types (IGSN, DMP ID, RAiD) are integrated with DataCite services.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://support.datacite.org/docs/datacite-training" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="collection of resources / database" data-provider="DataCite" data-domain="general audience" data-lang="en, de" data-year="2024">
            <h3>📘 <a href="https://www.zotero.org/groups/5597931/pid4nfdi/library" target="_blank">PID4NFDI Zotero Group Library</a></h3>
            <p class="pid-description">The PID4NFDI Zotero Group Library is an openly accessible, curated collection of literature related to Persistent Identifiers (PIDs) in research and research data management. It brings together key pa</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">SWHID</span>
              <span class="pid-type-badge">B2Inst</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">RAiD</span>
              <span class="pid-type-badge">IGSN</span>
              <span class="pid-type-badge">URN</span>
              <span class="pid-type-badge">GND</span>
              <span class="pid-type-badge">B2SAFE/B2STAGE</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>PID4NFDI</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient, expert</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.zotero.org/groups/5597931/pid4nfdi/library" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="collection of resources, training courses, guides, self-assessment tools, documentation" data-provider="Community" data-domain="general audience" data-lang="en" data-year="2024">
            <h3>📘 <a href="https://ardc.edu.au/resource-hub/" target="_blank">ARDC Resource Hub</a></h3>
            <p class="pid-description">Comprehensive collection of training materials, documentation, datasets, tools and resources for research data management and PID systems. Includes training courses like "23 (Research Data) Things", "</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Australian Research Data Commons (ARDC) Team</dd>
              <dt>Organisation:</dt>
              <dd>ARDC - Australian Research Data Commons</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Enhanced RDM skills, understanding FAIR principles, evaluating dataset FAIRness, implementing PIDs according to Australian strategy</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://ardc.edu.au/resource-hub/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="online community, forum, knowledge hub" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2019">
            <h3>📘 <a href="https://www.pidforum.org/" target="_blank">The PID Forum</a></h3>
            <p class="pid-description">A global information and discussion platform for persistent identifiers (PIDs), which brings together the various communities working with PIDs in the research world. Includes Knowledge Hub, User Stor</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">B2Inst</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">RAiD</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Community-Plattform</dd>
              <dt>Organisation:</dt>
              <dd>NISO (National Information Standards Organization) - Host seit 2021, ursprünglich FREYA Project</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient, expert</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Exchange of PID experiences, knowledge sharing, community coordination, staying informed about PID developments</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.pidforum.org/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="online course, self-paced training, interactive exercises, quizzes, slides" data-provider="Community" data-domain="engineering sciences community, NFDI4Ing" data-lang="de" data-year="2021">
            <h3>📊 <a href="https://education.nfdi4ing.de/startpage.html#/" target="_blank">NFDI4Ing Training Platform</a></h3>
            <p class="pid-description">German-language platform for RDM training materials specifically tailored for engineering sciences. Provides self-paced online courses, interactive elements (H5P quizzes, assignments), and engineering</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>NFDI4Ing Team (Base Service S-6, Community Cluster CC-2, SIG RDM Training & Education)</dd>
              <dt>Organisation:</dt>
              <dd>NFDI4Ing</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Duration:</dt>
              <dd>varies by module (self-paced)</dd>
              <dt>License:</dt>
              <dd>CC-BY-4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding RDM in engineering context, applying FAIR principles, creating data management plans, managing data through lifecycle phases</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://education.nfdi4ing.de/startpage.html#/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>

          <div class="pid-card" data-type="guide, handbook, best practice documentation" data-provider="DataCite" data-domain="general audience" data-lang="en" data-year="2025">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.3559799" target="_blank">DataCite Best Practice Guide</a></h3>
            <p class="pid-description">The DataCite Best Practice Guide provides a comprehensive, practical handbook for implementing the official DataCite Metadata Schema (v4.6). It is designed primarily as support documentation for resea</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Bayer, C., Frech, A., Gabriel, V., Kümmet, S., Lücke, S., Meier, L., Munke, J., Putnings, M., Rohrwild, J., Schulz, J., Spenger, M., & Weber, T.</dd>
              <dt>Organisation:</dt>
              <dd>IT-Gruppe Geisteswissenschaften (LMU); Leibniz Supercomputing Centre; Max Weber Stiftung - Deutsche Geisteswissenschaftliche Institute im Ausland; Universitätsbibliothek der FAU; Universitätsbibliothek der LMU München; VerbaAlpina</dd>
              <dt>Proficiency Level:</dt>
              <dd>advanced beginner, competent, novice</dd>
              <dt>License:</dt>
              <dd>CC-BY-SA-4.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.3559799" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


        <!-- COMPLETE WORKING STYLE & SCRIPT SECTION -->
        <!-- Replace everything from <style> to </script> with this -->

        <style>
          /* ====================================
            FILTER BAR STYLES
            ==================================== */
          .pid-filter { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 0.5rem; 
            align-items: center; 
            margin: 1rem 0 1.5rem;
          }
          
          .pid-filter input, 
          .pid-filter select { 
            padding: 0.4rem 0.6rem; 
            border: 1px solid #e3e3e3; 
            border-radius: 0.5rem; /* RUNDE ECKEN */
          }
          
          .pid-filter button { 
            padding: 0.4rem 0.7rem; 
            border: 1px solid #ccc; 
            border-radius: 0.5rem; /* RUNDE ECKEN */
            background: #fff; 
            cursor: pointer;
          }
          
          .pid-filter label { 
            display: flex; 
            align-items: center; 
            gap: 0.3rem; 
            padding: 0.4rem 0.6rem; 
            font-size: 0.9rem;
          }
          
          #pid-count { 
            margin-left: auto; 
            font-size: 0.9rem; 
            opacity: 0.8;
          }

          /* ====================================
            CARD GRID LAYOUT
            ==================================== */
          .pid-card-grid {
            display: grid !important;
            gap: 1.5rem !important;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)) !important;
            width: 100% !important;
          }
          
          .pid-card-grid .pid-card[hidden] { 
            display: none !important;
          }

          /* ====================================
            CARD STYLES
            ==================================== */
          .pid-card {
            padding: 1.2rem 1.3rem;
            border: 1px solid #e8e8e8; 
            border-radius: 12px; /* RUNDE ECKEN */
            background: #fff;
            box-shadow: 0 1px 0 rgba(0,0,0,0.02);
            transition: transform 0.08s ease, box-shadow 0.12s ease, border-color 0.12s ease;
          }
          
          .pid-card:hover { 
            transform: translateY(-1px); 
            box-shadow: 0 6px 16px rgba(0,0,0,0.06); 
            border-color: #ddd;
          }
          
          .pid-card h3 { 
            font-size: 1.25rem; 
            line-height: 1.25; 
            margin: 0.1rem 0 0.5rem;
          }

          /* ====================================
            BADGES ABOVE DESCRIPTION (Type + Language)
            ==================================== */
          .pid-badges { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 0.4rem; 
            margin: 0.2rem 0 0.7rem;
          }
          
          .pid-badge { 
            display: inline-block; 
            padding: 0.18rem 0.5rem; 
            border-radius: 0.55rem; /* RUNDE ECKEN */
            font-size: 0.8rem; 
            font-weight: 500;
            background: #f3f4f6; 
            border: 1px solid #e5e7eb; 
            color: #222;
          }

          /* Type Badge Colors */
          .pid-badge.type-intro    { background: #d1ecf1; border-color: #bee5eb; }
          .pid-badge.type-guide    { background: #fff3cd; border-color: #ffeeba; }
          .pid-badge.type-slides   { background: #e2e3e5; border-color: #d6d8d9; }
          .pid-badge.type-video    { background: #f8d7da; border-color: #f5c6cb; }
          .pid-badge.type-hands-on,
          .pid-badge.type-tool     { background: #d4edda; border-color: #c3e6cb; }
          .pid-badge.type-docs-api { background: #cce5ff; border-color: #b8daff; }

          /* Language Badge Colors */
          .pid-badge.lang-en { background: #e0f7fa; border-color: #b2ebf2; }
          .pid-badge.lang-de { background: #fce4ec; border-color: #f8bbd0; }

          /* ====================================
            DESCRIPTION TEXT
            ==================================== */
          .pid-description {
            margin: 0.5rem 0 0.8rem 0;
            color: #495057;
            line-height: 1.5;
            font-size: 0.95rem;
          }

          /* ====================================
            PID TYPE BADGES BELOW DESCRIPTION
            ==================================== */
          .pid-types-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin: 0.6rem 0 0.8rem 0;
            padding-top: 0.4rem;
            border-top: 1px solid #f0f0f0;
          }

          .pid-type-badge {
            display: inline-block;
            padding: 0.25rem 0.6rem;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.4rem; /* RUNDE ECKEN */
            transition: transform 0.15s ease, box-shadow 0.15s ease;
            background: #f5f7fa;
            color: #4a5568;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          }

          .pid-type-badge:hover {
            transform: translateY(-1px);
            background: #edf2f7;
            border-color: #cbd5e0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          /* ====================================
            ACTION BUTTONS
            ==================================== */
          .pid-actions { 
            display: flex; 
            gap: 0.5rem; 
            margin: 0.8rem 0 0.6rem;
          }
          
          .pid-btn-more, 
          .pid-btn-open, 
          .pid-toggle-details {
            display: inline-block;
            padding: 0.35rem 0.7rem;
            border: 1px solid #e0e0e0;
            border-radius: 0.5rem; /* RUNDE ECKEN */
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.15s ease;
            line-height: 1.1;
            background: #fff;
            cursor: pointer;
          }
          
          .pid-btn-more:hover, 
          .pid-btn-open:hover, 
          .pid-toggle-details:hover {
            border-color: #cfcfcf;
            transform: translateY(-1px);
          }
          
          .pid-btn-open { 
            border-color: #d9e8ff; 
            background: #f5faff;
          }
          
          .pid-btn-open:hover { 
            border-color: #bcd6ff;
          }
          
          .pid-toggle-details:hover { 
            background: #f8f9fa;
          }
          
          .pid-toggle-details:active { 
            transform: translateY(0);
          }

          /* ====================================
            DETAILS SECTION (Collapsible)
            ==================================== */
          .pid-details {
            margin-top: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px; /* RUNDE ECKEN */
            border-left: 3px solid #007bff;
          }

          .pid-details[hidden] {
            display: none !important;
          }

          /* ====================================
            METADATA LIST
            ==================================== */
          .pid-metadata {
            display: grid;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
          }

          .pid-metadata dt {
            font-weight: 600;
            color: #495057;
            margin-bottom: 0.2rem;
            font-size: 0.9rem;
            margin-top: 0.3rem;
          }

          .pid-metadata dd {
            margin: 0 0 0.8rem 0;
            color: #212529;
            font-size: 0.9rem;
            line-height: 1.5;
          }

          .pid-metadata dd:last-child {
            margin-bottom: 0;
          }

          /* ====================================
            CONTAINER WIDTH
            ==================================== */
          .container:has(.pid-card-grid),
          .universal-wrapper:has(.pid-card-grid) { 
            max-width: 1400px;
          }

          /* ====================================
            RESPONSIVE DESIGN
            ==================================== */
          @media (max-width: 768px) {
            .pid-card-grid {
              grid-template-columns: 1fr !important;
            }
            
            .pid-filter {
              flex-direction: column;
              align-items: stretch;
            }
            
            .pid-filter input,
            .pid-filter select,
            .pid-filter button,
            .pid-filter label {
              width: 100%;
            }
            
            #pid-count {
              margin-left: 0;
              text-align: center;
            }
          }
        </style>

        <script>
        // ====================================
        // TOGGLE DETAILS FUNCTIONALITY
        // ====================================
        function toggleDetails(button) {
          const card = button.closest('.pid-card');
          const details = card.querySelector('.pid-details');
          
          if (details) {
            const isHidden = details.hasAttribute('hidden');
            
            if (isHidden) {
              details.removeAttribute('hidden');
              button.textContent = 'Hide details ↑';
            } else {
              details.setAttribute('hidden', '');
              button.textContent = 'Show details ↓';
            }
          }
        }

        // ====================================
        // MAIN FILTER & BADGE LOGIC
        // ====================================
        (function(){
          const q = s => document.querySelector(s);
          const qa = s => Array.from(document.querySelectorAll(s));
          const cards = qa('.pid-card-grid .pid-card');

          const filters = {
            search: q('#pid-search'),
            type: q('#f-type'),
            provider: q('#f-provider'),
            domain: q('#f-domain'),
            lang: q('#f-lang'),
            year: q('#f-year'),
            proficiency: q('#f-proficiency'),
            pidTypes: q('#f-pid-types'),
            license: q('#f-license'),
            outcomes: q('#f-outcomes')
          };

          const clearBtn = q('#pid-clear'), counter = q('#pid-count');

          // ====================================
          // HELPER FUNCTIONS
          // ====================================
          
          const has = (card, sel, key) => {
            const val = sel?.value?.trim();
            if(!val) return true;
            const raw = (card.dataset[key] || '').toLowerCase();
            const arr = raw.split(',').map(s=>s.trim()).filter(Boolean);
            return arr.some(item => item.includes(val.toLowerCase()));
          };

          const matchesSearch = (card, term) => {
            if(!term) return true;
            return (card.textContent || '').toLowerCase().includes(term.toLowerCase());
          };

          const hasMetadata = (card, field, value) => {
            if (!value) return true;
            const metadata = card.querySelector('.pid-metadata');
            if (!metadata) return false;
            
            const dts = metadata.querySelectorAll('dt');
            for (const dt of dts) {
              if (dt.textContent.includes(field)) {
                const dd = dt.nextElementSibling;
                if (dd) {
                  return dd.textContent.toLowerCase().includes(value.toLowerCase());
                }
              }
            }
            return false;
          };

          const hasPidTypeBadge = (card, value) => {
            if (!value) return true;
            const badges = card.querySelectorAll('.pid-type-badge');
            if (!badges.length) return false;
            
            for (const badge of badges) {
              if (badge.textContent.toLowerCase().includes(value.toLowerCase())) {
                return true;
              }
            }
            return false;
          };

          const hasLearningOutcomes = (card) => {
            const metadata = card.querySelector('.pid-metadata');
            if (!metadata) return false;
            const dts = metadata.querySelectorAll('dt');
            for (const dt of dts) {
              if (dt.textContent.includes('Learning Outcomes')) return true;
            }
            return false;
          };

          // ====================================
          // APPLY FILTERS
          // ====================================
          
          function apply(){
            const term = filters.search?.value?.trim()?.toLowerCase() || '';
            const outcomesChecked = filters.outcomes?.checked || false;
            
            let visible = 0;
            cards.forEach(card=>{
              const ok = has(card, filters.type, 'type')
                      && has(card, filters.provider, 'provider')
                      && has(card, filters.domain, 'domain')
                      && has(card, filters.lang, 'lang')
                      && has(card, filters.year, 'year')
                      && matchesSearch(card, term)
                      && hasMetadata(card, 'Proficiency', filters.proficiency?.value)
                      && hasPidTypeBadge(card, filters.pidTypes?.value)
                      && hasMetadata(card, 'License', filters.license?.value)
                      && (!outcomesChecked || hasLearningOutcomes(card));
              
              card.hidden = !ok;
              if(ok) visible++;
            });
            
            if(counter) {
              counter.textContent = visible + ' shown / ' + cards.length + ' total';
            }

            updateURL();
          }

          // ====================================
          // URL PARAMETER SYNC
          // ====================================
          
          function updateURL(){
            const p = new URLSearchParams();
            if(filters.type?.value) p.set('type', filters.type.value);
            if(filters.provider?.value) p.set('provider', filters.provider.value);
            if(filters.domain?.value) p.set('domain', filters.domain.value);
            if(filters.lang?.value) p.set('lang', filters.lang.value);
            if(filters.year?.value) p.set('year', filters.year.value);
            if(filters.proficiency?.value) p.set('proficiency', filters.proficiency.value);
            if(filters.pidTypes?.value) p.set('pid-types', filters.pidTypes.value);
            if(filters.license?.value) p.set('license', filters.license.value);
            if(filters.search?.value) p.set('q', filters.search.value);
            if(filters.outcomes?.checked) p.set('outcomes', 'true');
            history.replaceState(null,'', p.toString() ? ('?'+p.toString()) : location.pathname);
          }

          function restore(){
            const p = new URLSearchParams(location.search);
            if(p.get('type') && filters.type) filters.type.value = p.get('type');
            if(p.get('provider') && filters.provider) filters.provider.value = p.get('provider');
            if(p.get('domain') && filters.domain) filters.domain.value = p.get('domain');
            if(p.get('lang') && filters.lang) filters.lang.value = p.get('lang');
            if(p.get('year') && filters.year) filters.year.value = p.get('year');
            if(p.get('proficiency') && filters.proficiency) filters.proficiency.value = p.get('proficiency');
            if(p.get('pid-types') && filters.pidTypes) filters.pidTypes.value = p.get('pid-types');
            if(p.get('license') && filters.license) filters.license.value = p.get('license');
            if(p.get('q') && filters.search) filters.search.value = p.get('q');
            if(p.get('outcomes') && filters.outcomes) filters.outcomes.checked = p.get('outcomes') === 'true';
          }

          // ====================================
          // EVENT LISTENERS
          // ====================================
          
          Object.values(filters).forEach(filter => {
            if(filter) {
              filter.addEventListener('input', apply);
              filter.addEventListener('change', apply);
            }
          });
          
          if(clearBtn) {
            clearBtn.addEventListener('click', ()=>{ 
              Object.values(filters).forEach(f => {
                if(f) {
                  if(f.type === 'checkbox') f.checked = false;
                  else f.value='';
                }
              }); 
              apply(); 
            });
          }

          // ====================================
          // POPULATE FILTER DROPDOWNS
          // ====================================
          
          function populateFilters() {
            // Proficiency Level (sorted: novice → expert)
            if (filters.proficiency && filters.proficiency.children.length <= 1) {
              const levels = new Set();
              cards.forEach(card => {
                const metadata = card.querySelector('.pid-metadata');
                if (metadata) {
                  const dts = metadata.querySelectorAll('dt');
                  dts.forEach(dt => {
                    if (dt.textContent.includes('Proficiency')) {
                      const dd = dt.nextElementSibling;
                      if (dd) {
                        dd.textContent.split(',').forEach(level => {
                          const cleaned = level.trim();
                          if (cleaned && !cleaned.includes('and expert')) {
                            levels.add(cleaned);
                          }
                        });
                      }
                    }
                  });
                }
              });

              const levelOrder = ['novice', 'advanced beginner', 'competent', 'proficient', 'expert'];
              Array.from(levels).sort((a, b) => {
                const indexA = levelOrder.indexOf(a.toLowerCase());
                const indexB = levelOrder.indexOf(b.toLowerCase());
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
              }).forEach(level => {
                const opt = document.createElement('option');
                opt.value = level;
                opt.textContent = level;
                filters.proficiency.appendChild(opt);
              });
            }

            // PID Types (from badges below description)
            if (filters.pidTypes && filters.pidTypes.children.length <= 1) {
              const types = new Set();
              cards.forEach(card => {
                const badges = card.querySelectorAll('.pid-type-badge');
                badges.forEach(badge => {
                  const cleaned = badge.textContent.trim();
                  if (cleaned) types.add(cleaned);
                });
              });
              
              Array.from(types).sort().forEach(pid => {
                const opt = document.createElement('option');
                opt.value = pid;
                opt.textContent = pid;
                filters.pidTypes.appendChild(opt);
              });
            }

            // Licenses
            if (filters.license && filters.license.children.length <= 1) {
              const licenses = new Set();
              cards.forEach(card => {
                const metadata = card.querySelector('.pid-metadata');
                if (metadata) {
                  const dts = metadata.querySelectorAll('dt');
                  dts.forEach(dt => {
                    if (dt.textContent.includes('License')) {
                      const dd = dt.nextElementSibling;
                      if (dd) {
                        const cleaned = dd.textContent.trim();
                        if (cleaned) licenses.add(cleaned);
                      }
                    }
                  });
                }
              });
              
              Array.from(licenses).sort().forEach(license => {
                const opt = document.createElement('option');
                opt.value = license;
                opt.textContent = license;
                filters.license.appendChild(opt);
              });
            }
          }

          // ====================================
          // AUTO-GENERATE BADGES ABOVE DESCRIPTION
          // (Type + Language only)
          // ====================================
          
          const cls = {
            type: v => 'type-' + v.toLowerCase().replace(/\s+/g,'-'),
            lang: v => 'lang-' + v.toLowerCase()
          };
          
          cards.forEach(card=>{
            const box = document.createElement('div');
            box.className = 'pid-badges';
            ['type','lang'].forEach(key=>{
              const raw = card.dataset[key];
              if(!raw) return;
              raw.split(',').map(s=>s.trim()).filter(Boolean).forEach(val=>{
                const tag = document.createElement('span');
                tag.className = `pid-badge ${cls[key](val)}`;
                tag.textContent = val;
                box.appendChild(tag);
              });
            });
            const h = card.querySelector('h2,h3') || card.firstChild;
            if(h && h.nextSibling) h.parentNode.insertBefore(box, h.nextSibling);
            else card.insertBefore(box, card.firstChild);
          });

          // ====================================
          // INITIALIZATION
          // ====================================
          
          populateFilters();
          restore(); 
          apply();
        })();
        </script>


    design:
      spacing:
        padding: ["pt-4", "pb-4"]
---