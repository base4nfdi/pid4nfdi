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
            <option>DataCite</option><option>ePIC</option><option>EUDAT</option>
            <option>ROR</option><option>ORCID</option><option>ARK</option>
            <option>DARIAH</option><option>AHRC/TANC</option><option>CERN</option>
            <option>ELIXIR</option><option>NFDI4Ing</option><option>PID4NFDI</option>
            <option>Community</option>
          </select>

          <select id="f-domain" aria-label="Domain">
            <option value="">Domain</option>
            <option>Generic</option><option>Life Sciences</option><option>Heritage</option>
            <option>Engineering</option><option>Social Sciences</option>
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


        <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.4574566" target="_blank">PIDs 101: A Beginners' Guide to Persistent Identifiers</a></h3>
            <p class="pid-description">Whether you are new to the world of persistent identifiers or just in need of a basic PID refresher, this introductory session is for you! We’ll explain what a persistent identifier is, what they can...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">RAiD</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Alice Meadows, Helena Cousijn, Maria Gould, Ginny Hendricks, Julie Petro, &amp; Natasha Simons</dd>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2019">
            <h3>📘 <a href="https://doi.org/10.1629/uksg.457" target="_blank">Persistent Identifiers: The Building Blocks of the Research Information Infrastructure</a></h3>
            <p class="pid-description">Persistent identifiers (PIDs) – for people (researchers), places (their organizations) and things (their research outputs and other contributions) – are foundational elements in the overall research...</p>
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


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h3>📊 <a href="https://doi.org/10.5446/48030" target="_blank">The Power of PIDs: using persistent identifiers to enable connections throughout the research lifecycle</a></h3>
            <p class="pid-description">This slide deck from the U.S. Department of Energy’s Office of Scientific and Technical Information provides a comprehensive introduction to the role of persistent identifiers (PIDs) across the...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ROR</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Robinson, Carly * , https://orcid.org/0000-0002-8523-1478</dd>
              <dt>Organisation:</dt>
              <dd>United States Department of Energy: Washington D.C., US, https://ror.org/01bj3aw27</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              <dt>Duration:</dt>
              <dd>Video: 35:08 PDF Slides: 30</dd>
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


          <div class="pid-card" data-type="webinar" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2022">
            <h3>📘 <a href="https://campus.dariah.eu/resource/posts/introduction-to-persistent-identifiers" target="_blank">Introduction to Persistent Identifiers</a></h3>
            <p class="pid-description">As part of the DARIAH Friday Frontiers in-house webinar series, Dr. Tibor Kálman (GWDG) gives an introduction to Persistent Identifiers. Why do we need them, how do we apply them, and how do...</p>
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
              <a href="https://campus.dariah.eu/resource/posts/introduction-to-persistent-identifiers" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2024">
            <h3>📊 <a href="https://www.pid-network.de/en/news/events/online-seminar-zu-pids-fuer-instrumente" target="_blank">Online seminar on PIDs for instruments</a></h3>
            <p class="pid-description">The &quot;PID Network Germany&quot; project hosted the online seminar &quot;PIDs for instruments&quot; on 7 May 2024. A combination of informative presentations on the areas of application and specific examples of PIDs...</p>
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


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📊 <a href="https://www.bodleian.ox.ac.uk/sites/default/files/bodreader/documents/media/iskills-oa-introduction-persistent-identifiers.pdf" target="_blank">Introduction to Persistent Identifiers. Bodleian iSkills</a></h3>
            <p class="pid-description">This introductory slide deck from Bodleian iSkills (University of Oxford) explains what persistent identifiers (PIDs) are, why they matter, and how they help solve problems of ambiguity in research...</p>
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


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2024">
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
              <dd>To understand the role of PIDs in the research workflow. To get an overview of the PID ecosystem. To get informed on how the quality of a PID policy can be assessed. To get an overview of the role of DANS in &quot;all of this&quot;.</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.14185370" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://sis.web.cern.ch/submit-and-publish/persistent-identifiers" target="_blank">Persistent Identifiers</a></h3>
            <p class="pid-description">This web page by the CERN Scientific Information Service (SIS) defines persistent identifiers (PIDs) and explains their importance, the major types (for objects, people, grants, organisations) and...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ROR</span>
              <span class="pid-type-badge">ARK</span>
              <span class="pid-type-badge">handle</span>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="DE" data-year="2024">
            <h3>📘 <a href="https://www.forschungsdaten.info/themen/veroeffentlichen-und-archivieren/persistente-identifikatoren/" target="_blank">Persistente Identifikatoren</a></h3>
            <p class="pid-description">This webpage from the portal forschungsdaten.info explains the concept of persistent identifiers (PIDs) in the context of publishing and archiving research data. It defines what a PID is, gives an...</p>
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


          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="" data-year="2025">
            <h3>🎥 <a href="https://doi.org/10.5281/zenodo.14888190" target="_blank">Video: Was sind PIDs?</a></h3>
            <p class="pid-description">In diesem Video &quot;Was sind persistente Identifikatoren (PIDs)?&quot; wird auf eine humorvolle und zugängliche Weise erklärt, was genau PIDs sind und welche Relevanz sie in der Forschungswelt haben. Als...</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Agniashvili, Ana (Editor) https://orcid.org/0009-0005-9113-266X;, Adlung, Robin (Editor); , Schmidt, Diana (Editor) https://orcid.org/0000-0001-7852-7214; , Kanaki, Elisavet (Editor) https://orcid.org/0000-0001-7714-0536;</dd>
              <dt>Organisation:</dt>
              <dd>Forschungsdatenmanagement Niedersachsen (FDM-NDS);, HAWK Hochschule für Angewandte Wissenschaft und Kunst Hildesheim/Holzminden/Göttingen</dd>
              <dt>Duration:</dt>
              <dd>Video: 3:50</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.14888190" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2023">
            <h3>📊 <a href="https://arks-stg.cdlib.org/assets/documents/2023/06/ARK-Training-Tutorial-IIIF-2023-slides.pdf" target="_blank">ARK Training, 2023-06-06, 3-hour tutorial from 2023 IIIF Annual Conference.</a></h3>
            <p class="pid-description">A comprehensive 3-hour tutorial introducing ARK persistent identifiers, covering why ARKs are used, use cases from major institutions, metadata for object development and persistence, minting and...</p>
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


          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2022">
            <h3>🎥 <a href="https://www.youtube.com/watch?v=iea6d5oI8Ag" target="_blank">What are Persistent Identifiers and why to use them?</a></h3>
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


          <div class="pid-card" data-type="game" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2024">
            <h3>📘 <a href="https://dans.knaw.nl/en/dans-data-game/" target="_blank">DANS Data Game</a></h3>
            <p class="pid-description">The game gives an impression of the research data landscape and was specially produced for the 15th anniversary of DANS. In advance of the 20th anniversary of DANS, we present here the 2024 updated...</p>
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
              <a href="https://dans.knaw.nl/en/dans-data-game/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.7841734" target="_blank">Digital Presence Checklist</a></h3>
            <p class="pid-description"></p>
            <div class="pid-actions">
              <a href="https://doi.org/10.5281/zenodo.7841734" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="DE">
            <h3>📊 <a href="https://www.forschungsdaten.org/images/0/0d/PID_nestorDINI_Workshop_Einsteigersession.pdf" target="_blank">Der Weg zum PID: Praktische Einführung in DOI und ePIC</a></h3>
            <p class="pid-description">This workshop slide deck from the 7th DINI/nestor Workshop (2017) provides a practical introduction to persistent identifiers with a focus on DOIs and ePIC handles. It explains the underlying Handle...</p>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="DE">
            <h3>📘 <a href="https://wiki.tib.eu/fabricahandbuch" target="_blank">Fabrica Handbuch – TIB Wiki</a></h3>
            <p class="pid-description">Detailed German manual for working with DataCite Fabrica</p>
            <div class="pid-actions">
              <a href="https://wiki.tib.eu/fabricahandbuch" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://faircookbook.elixir-europe.org/" target="_blank">FAIR Cookbook – Life Sciences</a></h3>
            <p class="pid-description">Practical guide for implementing FAIR principles in the life sciences, with PID references</p>
            <div class="pid-actions">
              <a href="https://faircookbook.elixir-europe.org/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://fairsoftwarechecklist.net/v0.2?f=00&a=00000&i=00000&r=000" target="_blank">FAIR Software Checklist</a></h3>
            <p class="pid-description">Interactive checklist for assessing the FAIRness of research software</p>
            <div class="pid-actions">
              <a href="https://fairsoftwarechecklist.net/v0.2?f=00&a=00000&i=00000&r=000" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a></h3>
            <p class="pid-description">Practical guide for individuals and organizations implementing PIDs in research workflows</p>
            <div class="pid-actions">
              <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2020">
            <h3>🎥 <a href="https://youtu.be/lIRrC3CjeFM" target="_blank">The Paper and The Data: Module 5 – Persistent Identifiers Video</a></h3>
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


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📊 <a href="https://doi.org/10.5281/zenodo.3744660" target="_blank">The Paper and The Data: Module 5 - Persistent Idenifiers Slides</a></h3>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://doi.org/10.5446/37823" target="_blank">Findability of Research Data and Software Through PIDs</a></h3>
            <p class="pid-description">Video presentation on using PIDs and FAIR repositories to improve findability</p>
            <div class="pid-actions">
              <a href="https://doi.org/10.5446/37823" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://support.datacite.org/docs/getting-started" target="_blank">Getting Started – DataCite</a></h3>
            <p class="pid-description">Introductory guide to working with DOIs and metadata via DataCite</p>
            <div class="pid-actions">
              <a href="https://support.datacite.org/docs/getting-started" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://ror.readme.io/docs/basics" target="_blank">ROR Basics</a></h3>
            <p class="pid-description"></p>
            <div class="pid-actions">
              <a href="https://ror.readme.io/docs/basics" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="DE">
            <h3>📘 <a href="https://info.orcid.org/de/Video-Tutorials/" target="_blank">ORCID Video Tutorials</a></h3>
            <p class="pid-description">German-language video tutorials on ORCID</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://info.orcid.org/de/Video-Tutorials/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://www.pidwijzer.nl/en/pid_results/new#tab-1" target="_blank">PID Guide – pidwijzer.nl</a></h3>
            <p class="pid-description">Interactive tool for selecting PID systems based on use case</p>
            <div class="pid-actions">
              <a href="https://www.pidwijzer.nl/en/pid_results/new#tab-1" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Docs/API" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2023">
            <h3>📄 <a href="https://eosc.eu/roadmap-category-level-1/persistent-identifiers/" target="_blank">EOSC Macro‑Roadmap – Persistent Identifiers (PIDs)</a></h3>
            <p class="pid-description">Collection of strategic contributions and implementation plans for PIDs within the EOSC context. Covers establishment of coordination mechanisms for PID service providers, alignment with EOSC PID...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
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


          <div class="pid-card" data-type="blog article" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2025">
            <h3>📘 <a href="https://www.softwareheritage.org/2025/06/13/software-hash-identifier-swhid-tutorial/" target="_blank">Using the SoftWare Hash Identifier (SWHID): A tutorial</a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.softwareheritage.org/2025/06/13/software-hash-identifier-swhid-tutorial/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://www.softwareheritage.org/how-to-archive-reference-code/" target="_blank">How to archive and reference your code</a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.softwareheritage.org/how-to-archive-reference-code/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Hands-on" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2017">
            <h3>🎓 <a href="#" target="_blank">Working with PIDs CURL</a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">B2Inst</span>
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
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="#" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Hands-on" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2017">
            <h3>🎓 <a href="#" target="_blank">Working with Persistent Identifiers - Hands-on</a></h3>
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


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training" target="_blank">EUDAT B2SAFE-B2STAGE Training</a></h3>
            <p class="pid-description">This training module provides you with instructions on how to deploy B2SAFE and B2STAGE. It also shows you how to use these services. Moreover, the module provides hands-on training on Persistent...</p>
            <div class="pid-actions">
              <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Docs/API" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📄 <a href="https://doc.pidconsortium.eu/" target="_blank">ePIC API Documentation</a></h3>
            <p class="pid-description">API documentation for implementing persistent identifiers with ePIC</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doc.pidconsortium.eu/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Docs/API" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2024">
            <h3>📄 <a href="https://nfdi4cat.github.io/pid4cat-model/latest/" target="_blank">pid4cat – PID Model for Catalysis</a></h3>
            <p class="pid-description">A FAIR PID model for research data in catalysis, based on the Handle system. PID4Cat builds upon the handle system with a custom API and provides a LinkML metadata model for PID-related metadata...</p>
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
              <dd>Source code and data model: MIT License, Documentation and images: CC-BY 4.0</dd>
              <dt>Learning Outcomes:</dt>
              <dd>Understanding Handle-based PIDs, implementing PID4Cat system, working with LinkML metadata models</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://nfdi4cat.github.io/pid4cat-model/latest/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="webpages" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://docs.eudat.eu/b2inst/" target="_blank">B2INST User Guide</a></h3>
            <p class="pid-description">B2INST is a community-driven solution for global and unique identification of instruments operated within the research domain. Various (scientific) instruments, such as sensors used in environmental...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">B2Inst</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>competent, proficient, expert</dd>
              <dt>License:</dt>
              <dd>CC-BY-SA-3.0</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://docs.eudat.eu/b2inst/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2023">
            <h3>📊 <a href="https://hal.science/hal-04121507v1" target="_blank">SWHID specification kickoff meeting</a></h3>
            <p class="pid-description"></p>
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
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://hal.science/hal-04121507v1" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2025">
            <h3>📊 <a href="https://doi.org/10.5281/zenodo.15324036" target="_blank">FAIR Implementation Workshop -Meet the SoftWare Hash Identifier: Do one thing and do it well</a></h3>
            <p class="pid-description">The session highlighted that software identification was essential for ensuring the long-term traceability of scholarly outputs. However, as often happened with software, the process was not as...</p>
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
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://doi.org/10.5281/zenodo.15324036" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2023">
            <h3>📊 <a href="https://repository.publisso.de/resource/frl:6452685/data" target="_blank">Online Training Workshop on Research Data Management in (Bio-)Medicine</a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">Crossref DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">IGSN</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>Justine Vandendorpe, Birte Lindstädt, Aliaksandra Shutsko &amp; Katharina Markus ZB MED - Information Centre for Life Sciences</dd>
              <dt>Organisation:</dt>
              <dd>ZB Med</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://repository.publisso.de/resource/frl:6452685/data" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Docs/API" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📄 <a href="https://www.swhid.org/swhid-specification/" target="_blank"></a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://www.swhid.org/swhid-specification/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Docs/API" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📄 <a href="https://docs.softwareheritage.org/" target="_blank"></a></h3>
            <p class="pid-description">Software Heritage documentation</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">SWHID</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Organisation:</dt>
              <dd>Software Heritage</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://docs.softwareheritage.org/" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="collection of resources / database" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h3>📘 <a href="https://tanc-ahrc.github.io/PIDResources/" target="_blank">Developing Identifiers for Heritage Collections</a></h3>
            <p class="pid-description">This resource describes the different aspects of developing persistent identifiers (PIDs) in the context of Heritage Collections. Following consultation through May 2021, the resource is now...</p>
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


          <div class="pid-card" data-type="collection of resources / database" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://tess.elixir-europe.org/materials" target="_blank">Collection /database of Training material for the Life Science cellected by the the Elixir project</a></h3>
            <p class="pid-description"></p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient, expert</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://tess.elixir-europe.org/materials" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2023">
            <h3>🎥 <a href="https://support.datacite.org/docs/datacite-training" target="_blank">DataCite Training (Collection)</a></h3>
            <p class="pid-description"></p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DOI</span>
            </div>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>various authors from DataCite</dd>
              <dt>Organisation:</dt>
              <dd>DataCite</dd>
              <dt>Proficiency Level:</dt>
              <dd>novice, advanced beginner, competent, proficient</dd>
              <dt>Duration:</dt>
              <dd>6 videos of various length plus supplementary material</dd>
              </dl>
            </div>
            <div class="pid-actions">
              <button class="pid-toggle-details" onclick="toggleDetails(this)">Show details ↓</button>
              <a href="https://support.datacite.org/docs/datacite-training" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="">
            <h3>📘 <a href="https://www.zotero.org/groups/5597931/pid4nfdi/library" target="_blank">PID4NFDI Zotero Group Library</a></h3>
            <p class="pid-description"></p>
            <div class="pid-actions">
              <a href="https://www.zotero.org/groups/5597931/pid4nfdi/library" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://support.datacite.org/docs/datacite-training" target="_blank">DataCite Training</a></h3>
            <p class="pid-description">Training portal from DataCite with guides, videos, and workshops</p>
            <div class="pid-actions">
              <a href="https://support.datacite.org/docs/datacite-training" class="pid-btn-open" target="_blank" rel="noopener">Open resource ↗</a>
            </div>
          </div>


          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2024">
            <h3>🎥 <a href="https://ardc.edu.au/resource-hub/" target="_blank">ARDC Resource Hub</a></h3>
            <p class="pid-description">Comprehensive collection of training materials, documentation, datasets, tools and resources for research data management and PID systems. Includes training courses like &quot;23 (Research Data) Things&quot;,...</p>
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


          <div class="pid-card" data-type="online platform, discussion forum" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2019">
            <h3>📘 <a href="https://www.pidforum.org/" target="_blank">The PID Forum</a></h3>
            <p class="pid-description">A global information and discussion platform for persistent identifiers (PIDs), which brings together the various communities working with PIDs in the research world. Includes Knowledge Hub, User...</p>
            <div class="pid-types-badges">
              <span class="pid-type-badge">DataCite DOI</span>
              <span class="pid-type-badge">ORCID</span>
              <span class="pid-type-badge">PIDInst</span>
              <span class="pid-type-badge">ePIC handle</span>
              <span class="pid-type-badge">handle</span>
              <span class="pid-type-badge">ROR</span>
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


          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="DE" data-year="2021">
            <h3>📊 <a href="https://education.nfdi4ing.de/startpage.html#/" target="_blank">NFDI4Ing Training Platform</a></h3>
            <p class="pid-description">German-language platform for RDM training materials specifically tailored for engineering sciences. Provides self-paced online courses, interactive elements (H5P quizzes, assignments), and...</p>
            <div class="pid-details" hidden>
              <dl class="pid-metadata">
              <dt>Authors:</dt>
              <dd>NFDI4Ing Team (Base Service S-6, Community Cluster CC-2, SIG RDM Training &amp; Education)</dd>
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


        <style>
          /* Basic Filter & Grid Styles */
          .pid-filter { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin:1rem 0 1.5rem }
          .pid-filter input, .pid-filter select { padding:.4rem .6rem; border:1px solid #e3e3e3; border-radius:.5rem }
          .pid-filter button { padding:.4rem .7rem; border:1px solid #ccc; border-radius:.5rem; background:#fff; cursor:pointer }
          .pid-filter label { display: flex; align-items: center; gap: 0.3rem; padding: 0.4rem 0.6rem; font-size: 0.9rem; }
          #pid-count { margin-left:auto; font-size:.9rem; opacity:.8 }

          .pid-card-grid {
            display: grid !important;
            gap: 1.5rem !important;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)) !important;
            width: 100% !important;
          }
          .pid-card-grid .pid-card[hidden]{ display:none !important }

          .pid-card {
            padding: 1.2rem 1.3rem;
            border:1px solid #e8e8e8; border-radius:12px; background:#fff;
            box-shadow: 0 1px 0 rgba(0,0,0,.02);
            transition: transform .08s ease, box-shadow .12s ease, border-color .12s ease;
          }
          .pid-card:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.06); border-color:#ddd; }
          .pid-card h3 { font-size: 1.25rem; line-height:1.25; margin:.1rem 0 .5rem; }

          .pid-badges { display:flex; flex-wrap:wrap; gap:.4rem; margin:.2rem 0 .7rem; }
          .pid-badge { display:inline-block; padding:.18rem .5rem; border-radius:.55rem; font-size:.8rem; font-weight:500;
                      background:#f3f4f6; border:1px solid #e5e7eb; color:#222; }

          .pid-badge.type-intro    { background:#d1ecf1; border-color:#bee5eb; }
          .pid-badge.type-guide    { background:#fff3cd; border-color:#ffeeba; }
          .pid-badge.type-slides   { background:#e2e3e5; border-color:#d6d8d9; }
          .pid-badge.type-video    { background:#f8d7da; border-color:#f5c6cb; }
          .pid-badge.type-hands-on,
          .pid-badge.type-tool     { background:#d4edda; border-color:#c3e6cb; }
          .pid-badge.type-docs-api { background:#cce5ff; border-color:#b8daff; }

          .pid-badge.provider-datacite { background:#b3e5fc; border-color:#81d4fa; }
          .pid-badge.provider-epic     { background:#ffe0b2; border-color:#ffcc80; }
          .pid-badge.provider-eudat    { background:#e1f5fe; border-color:#b3e5fc; }
          .pid-badge.provider-ark      { background:#e1bee7; border-color:#ce93d8; }
          .pid-badge.provider-orcid    { background:#c8e6c9; border-color:#a5d6a7; }
          .pid-badge.provider-ror      { background:#ffccbc; border-color:#ffab91; }
          .pid-badge.provider-community{ background:#eee; border-color:#ddd; }
          .pid-badge.provider-pid4nfdi { background:#e8f5e9; border-color:#c8e6c9; }
          .pid-badge.provider-dariah   { background:#f3e5f5; border-color:#e1bee7; }
          .pid-badge.provider-cern     { background:#e3f2fd; border-color:#bbdefb; }
          .pid-badge.provider-elixir   { background:#e8f5e9; border-color:#c8e6c9; }
          .pid-badge.provider-nfdi4ing { background:#fff9c4; border-color:#fff59d; }

          .pid-badge.lang-en { background:#e0f7fa; border-color:#b2ebf2; }
          .pid-badge.lang-de { background:#fce4ec; border-color:#f8bbd0; }

          .pid-actions { display:flex; gap:.5rem; margin:.8rem 0 .6rem; }
          .pid-btn-more, .pid-btn-open, .pid-toggle-details{
            display:inline-block;
            padding:.35rem .7rem;
            border:1px solid #e0e0e0;
            border-radius:.5rem;
            font-size:.85rem;
            text-decoration:none;
            transition:all .15s ease;
            line-height:1.1;
            background: #fff;
            cursor: pointer;
          }
          .pid-btn-more:hover, .pid-btn-open:hover, .pid-toggle-details:hover{
            border-color:#cfcfcf;
            transform: translateY(-1px);
          }
          .pid-btn-open{ border-color:#d9e8ff; background:#f5faff; }
          .pid-btn-open:hover{ border-color:#bcd6ff; }
          .pid-toggle-details:hover { background: #f8f9fa; }
          .pid-toggle-details:active { transform: translateY(0); }

          .container:has(.pid-card-grid),
          .universal-wrapper:has(.pid-card-grid) { max-width: 1400px; }

          /* Beschreibungstext */
          .pid-description {
            margin: 0.5rem 0 0.8rem 0;
            color: #495057;
            line-height: 1.5;
            font-size: 0.95rem;
          }

          /* Details-Bereich (ausklappbar) */
          .pid-details {
            margin-top: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 3px solid #007bff;
          }

          .pid-details[hidden] {
            display: none !important;
          }

          /* Metadata-Liste */
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

          /* Vollständige Beschreibung */
          .pid-full-description {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #dee2e6;
          }

          .pid-full-description h4 {
            font-size: 1rem;
            margin: 0 0 0.5rem 0;
            color: #495057;
            font-weight: 600;
          }

          .pid-full-description p {
            margin: 0;
            color: #212529;
            line-height: 1.6;
          }

          /* PID Types Badges in Übersicht */
          .pid-types-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin: 0.6rem 0 0.8rem 0;
            padding-top: 0.4rem;
            border-top: 1px solid #f0f0f0;
          }

          /* Basis-Style für einzelne Badges */
          .pid-type-badge {
            display: inline-block;
            padding: 0.25rem 0.6rem;
            font-size: 0.75rem;
            font-weight: 500;
            border-radius: 0.4rem;
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

          /* Last Updated Footer */
          .last-updated-footer {
            clear: both;
            width: 100%;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #e9ecef;
            text-align: left;
          }

          .last-updated-footer p {
            margin: 0.5rem 0;
            color: #6c757d;
            font-size: 0.9rem;
          }

          .last-updated-footer p:first-child {
            margin-top: 0;
          }

          .last-updated-footer strong {
            color: #495057;
            font-weight: 600;
          }

          /* Responsive */
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

        <!-- ====================================
            JAVASCRIPT FÜR FILTER & TOGGLE
            ==================================== -->
        <script>
        // ====================================
        // TOGGLE-FUNKTIONALITÄT FÜR DETAILS
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
        // FILTER-LOGIK
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
        // HILFSFUNKTIONEN
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

        // NEU: PID Type Badge Filter (liest aus Badges statt Metadaten)
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
        // FILTER ANWENDEN
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
                    && hasPidTypeBadge(card, filters.pidTypes?.value)  // VERWENDET BADGES!
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
        // URL PARAMETER
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
        // FILTER-OPTIONEN BEFÜLLEN
        // ====================================
        
        function populateFilters() {
          // Proficiency Level - MIT KORREKTER SORTIERUNG (novice → expert)
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
                        if (cleaned && !cleaned.includes('and expert')) { // Filter ungültige Einträge
                          levels.add(cleaned);
                        }
                      });
                    }
                  }
                });
              }
            });
      
              // Custom Sortierung: novice → expert (nicht alphabetisch!)
              const levelOrder = ['novice', 'advanced beginner', 'competent', 'proficient', 'expert'];
              Array.from(levels).sort((a, b) => {
                const indexA = levelOrder.indexOf(a.toLowerCase());
                const indexB = levelOrder.indexOf(b.toLowerCase());
                // Falls nicht in Liste, ans Ende
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

            // PID Types - AUS BADGES LESEN (nicht aus Metadaten!)
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
          // AUTO-BADGES
          // ====================================
          
          const cls = {
            type: v => 'type-' + v.toLowerCase().replace(/\s+/g,'-'),
            provider: v => 'provider-' + v.toLowerCase().replace(/\s+/g,'-').replace(/\//g,'-'),
            lang: v => 'lang-' + v.toLowerCase()
          };
          
          cards.forEach(card=>{
            const box = document.createElement('div');
            box.className = 'pid-badges';
            ['type','provider','lang'].forEach(key=>{
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
          // ACTION BUTTONS
          // ====================================
          
          function contentInsertionPoint(card){
            const candidates = card.querySelectorAll('p, ul, ol');
            if(candidates.length) return candidates[candidates.length - 1];
            return card.querySelector('.pid-badges') || card.querySelector('h2, h3');
          }

          cards.forEach(card=>{
            const titleLink = card.querySelector('h2 a, h3 a');
            const more = card.dataset.more;
            if(!more && !titleLink) return;

            let row = card.querySelector('.pid-actions');
            if(!row){
              row = document.createElement('div');
              row.className = 'pid-actions';
              const after = contentInsertionPoint(card);
              if(after && after.parentNode){
                after.insertAdjacentElement('afterend', row);
              } else {
                card.appendChild(row);
              }
            }

            if(more && !card.querySelector('.pid-btn-more')){
              const moreBtn = document.createElement('a');
              moreBtn.className = 'pid-btn-more';
              moreBtn.href = more;
              moreBtn.textContent = 'More info →';
              moreBtn.setAttribute('aria-label','More information');
              row.appendChild(moreBtn);
            }

            if(titleLink && !card.querySelector('.pid-btn-open')){
              const openBtn = document.createElement('a');
              openBtn.className = 'pid-btn-open';
              openBtn.href = titleLink.href;
              openBtn.target = '_blank';
              openBtn.rel = 'noopener';
              openBtn.textContent = 'Open resource ↗';
              openBtn.setAttribute('aria-label','Open resource in new tab');
              row.appendChild(openBtn);
            }
          });

          // ====================================
          // INITIALISIERUNG
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