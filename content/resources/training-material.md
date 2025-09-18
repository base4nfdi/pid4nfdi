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

        <h2 class="pid-section-heading">🧭 Understanding PIDs: Concepts & Ecosystem</h2>
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
            <option>ELIXIR</option><option>NFDI4Ing</option>
          </select>
          <select id="f-domain" aria-label="Domain">
            <option value="">Domain</option>
            <option>Generic</option><option>Life Sciences</option><option>Heritage</option>
            <option>Engineering</option>
          </select>
          <select id="f-lang" aria-label="Language">
            <option value="">Language</option>
            <option>EN</option><option>DE</option>
          </select>
          <select id="f-year" aria-label="Year">
            <option value="">Year</option>
            <option>2025</option><option>2024</option><option>2023</option><option>2022</option><option>2021</option>
          </select>
          <button id="pid-clear" type="button">Clear</button>
          <span id="pid-count" aria-live="polite"></span>
        </div>

        <div class="pid-card-grid">

          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h3>📘 <a href="https://doi.org/10.5281/zenodo.4574566" target="_blank">PIDs 101: A Beginners' Guide to Persistent Identifiers</a></h3>
            <p>Introductory slide deck for those new to persistent identifiers (EN)</p>
          </div>

          <div class="pid-card" data-type="Slides" data-provider="PID4NFDI" data-domain="Generic" data-lang="EN" data-year="2025">
            <h3>🔍 <a href="https://doi.org/10.5281/zenodo.14185370" target="_blank">What lies beneath – A closer look at the PID ecosystem</a></h3>
            <p>Workshop slides on the structure and governance of the PID ecosystem (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🏗️ <a href="https://doi.org/10.1629/uksg.457" target="_blank">Persistent Identifiers: The Building Blocks of the Research Information Infrastructure</a></h3>
            <p>Article on the foundational role of PIDs in research infrastructure (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🧭 <a href="https://doi.org/10.5281/zenodo.7841734" target="_blank">Digital Presence Checklist</a></h3>
            <p>Checklist to assess and improve the digital visibility of research outputs (EN)</p>
          </div>

          <div class="pid-card" data-type="Intro" data-provider="CERN" data-domain="Generic" data-lang="EN">
            <h3>🧪 <a href="https://sis.web.cern.ch/submit-and-publish/persistent-identifiers" target="_blank">Persistent Identifiers – CERN</a></h3>
            <p>Overview of how PIDs are used at CERN (EN)</p>
          </div>

          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="DE">
            <h3>🔗 <a href="https://www.forschungsdaten.info/themen/veroeffentlichen-und-archivieren/persistente-identifikatoren/" target="_blank">Persistente Identifikatoren</a></h3>
            <p>Introductory article in German on persistent identifiers in research (DE)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="DE" data-year="2025">
            <h3>🎥 <a href="https://doi.org/10.5281/zenodo.14888190" target="_blank">Video: Was sind PIDs?</a></h3>
            <p>Introductory video (DE) — alt.: former landing page via FDM NDS/HAWK</p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📚 <a href="https://www.zotero.org/groups/5597931/pid4nfdi/library" target="_blank">PID4NFDI Zotero Group Library</a></h3>
            <p>Living collection of PID-related literature maintained by the PID4NFDI consortium (EN/DE)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="AHRC/TANC" data-domain="Heritage" data-lang="EN">
            <h3>🏛️ <a href="https://tanc-ahrc.github.io/PIDResources/" target="_blank">Developing Identifiers for Heritage Collections</a></h3>
            <p>Guide from the AHRC/TANC project on implementing identifiers in heritage contexts (EN)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🎥 <a href="https://doi.org/10.5446/48030" target="_blank">The Power of PIDs: enabling connections across the research lifecycle</a></h3>
            <p>Recorded talk on end-to-end PID connections (EN) — alt.: <a href="https://zenodo.org/record/5028301" target="_blank">slides @ Zenodo</a></p>
          </div>

          <div class="pid-card" data-type="Intro" data-provider="DARIAH" data-domain="Heritage" data-lang="EN">
            <h3>🏫 <a href="https://campus.dariah.eu/resource/posts/introduction-to-persistent-identifiers" target="_blank">Introduction to Persistent Identifiers (DARIAH-Campus)</a></h3>
            <p>Beginner-friendly introduction with examples (EN) — alt.: <a href="https://campus.dariah.eu/id/4uEjJqTVxczKYmJyc3w9n" target="_blank">permalink</a></p>
          </div>

          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📄 <a href="https://www.bodleian.ox.ac.uk/sites/default/files/bodreader/documents/media/iskills-oa-introduction-persistent-identifiers.pdf" target="_blank">Introduction to Persistent Identifiers (Bodleian iSkills)</a></h3>
            <p>Slide handout introducing PIDs in scholarly communication (EN)</p>
          </div>

        </div>

        <h2 class="pid-section-heading">🛠️ Applying PIDs in Practice</h2>
        <p>
          Hands-on guides and checklists for using PIDs in research workflows. Includes practical comparisons, assignment procedures, and community-specific strategies.
          <ul>
            <li>How to assign and use PIDs?</li>
            <li>When to choose which system?</li>
            <li>Best practices and lessons learned</li>
          </ul>
        </p>
        <div class="pid-card-grid">

          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="DE">
            <h3>📌 <a href="https://www.forschungsdaten.org/images/0/0d/PID_nestorDINI_Workshop_Einsteigersession.pdf" target="_blank">DOI und ePIC – Ein Vergleich</a></h3>
            <p>Workshop slide deck comparing DOI and ePIC PID systems (DE)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="Generic" data-lang="DE">
            <h3>🇩🇪 <a href="https://wiki.tib.eu/confluence/spaces/pid/pages/147892950/Schnelleinstieg" target="_blank">In drei Schritten zur DOI – TIB</a></h3>
            <p>Step-by-step guide to DOI registration via DataCite (DE)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="Generic" data-lang="DE">
            <h3>🧾 <a href="https://wiki.tib.eu/fabricahandbuch" target="_blank">Fabrica Handbuch – TIB Wiki</a></h3>
            <p>Detailed German manual for working with DataCite Fabrica (DE)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="ELIXIR" data-domain="Life Sciences" data-lang="EN">
            <h3>🍳 <a href="https://faircookbook.elixir-europe.org/" target="_blank">FAIR Cookbook – Life Sciences</a></h3>
            <p>Practical recipes for implementing FAIR principles in the life sciences, with PID references (EN)</p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🧪 <a href="https://fairsoftwarechecklist.net/v0.2?f=00&a=00000&i=00000&r=000" target="_blank">FAIR Software Checklist</a></h3>
            <p>Interactive checklist for assessing the FAIRness of research software (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="PID4NFDI" data-domain="Generic" data-lang="EN">
            <h3>📖 <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank">PID4NFDI Cookbook</a></h3>
            <p>Practical guide for individuals and organizations implementing PIDs in research workflows (EN)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🎬 <a href="https://youtu.be/lIRrC3CjeFM" target="_blank">The Paper and The Data: Module 5 – Persistent Identifiers</a></h3>
            <p>Video explaining PID use in scholarly publishing (EN)</p>
          </div>

          <div class="pid-card" data-type="Slides" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📑 <a href="https://doi.org/10.5281/zenodo.3744660" target="_blank">Slides: The Paper and The Data – Module 5</a></h3>
            <p>Slide deck accompanying the AGU PID training module (EN)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🎓 <a href="https://doi.org/10.5446/37823" target="_blank">Findability of Research Data and Software Through PIDs</a></h3>
            <p>Recorded presentation on using PIDs & FAIR repositories to improve findability (EN)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="PID Network" data-domain="Generic" data-lang="EN">
            <h3>🛠️ <a href="https://www.pid-network.de/en/news/events/online-seminar-zu-pids-fuer-instrumente" target="_blank">Online seminar on PIDs for instruments</a></h3>
            <p>Seminar on instrument PIDs (EN/DE) — event DOI: <a href="https://doi.org/10.25798/zvca-d585" target="_blank">10.25798/zvca-d585</a></p>
          </div>

        </div>

        <h2 class="pid-section-heading">🔍 PID Systems & Provider-specific Training</h2>
        <p>
          Resources from specific PID providers and infrastructure operators. Covers technical usage, metadata, APIs, and workflows.
          <ul>
            <li>DataCite, ePIC, ROR, ORCID, ARK</li>
            <li>APIs, Fabrica, repositories</li>
            <li>Metadata schemas and implementation</li>
          </ul>
        </p>
        <div class="pid-card-grid">

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://support.datacite.org/docs/getting-started" target="_blank">Getting Started – DataCite</a></h3>
            <p>Introductory guide to working with DOIs and metadata via DataCite (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="DataCite" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://support.datacite.org/docs/datacite-training" target="_blank">DataCite Training</a></h3>
            <p>Training portal from DataCite with guides, videos, and workshops (EN)</p>
          </div>

          <div class="pid-card" data-type="Hands-on" data-provider="EUDAT" data-domain="Generic" data-lang="EN">
            <h3>🔧 <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training" target="_blank">EUDAT B2SAFE-B2STAGE Training</a></h3>
            <p>Technical training materials for using EUDAT infrastructure with PIDs (EN)</p>
          </div>

          <div class="pid-card" data-type="Hands-on" data-provider="EUDAT" data-domain="Generic" data-lang="EN" data-year="2020">
            <h3>💻 <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training/blob/master/07a-Working-with-PIDs_CURL.md" target="_blank">Working with PIDs (CURL)</a></h3>
            <p>Hands-on tutorial from EUDAT B2SAFE/B2STAGE on PID usage with CURL (EN)</p>
          </div>

          <div class="pid-card" data-type="Hands-on" data-provider="EUDAT" data-domain="Generic" data-lang="EN">
            <h3>🧰 <a href="https://github.com/EUDAT-Training/B2SAFE-B2STAGE-Training/blob/master/07c-Working-with-PIDs_B2HANDLE.md" target="_blank">Working with Persistent Identifiers – Hands-on</a></h3>
            <p>Practical training on using the B2HANDLE service (EN)</p>
          </div>

          <div class="pid-card" data-type="Docs/API" data-provider="ePIC" data-domain="Generic" data-lang="EN">
            <h3>🧾 <a href="https://doc.pidconsortium.eu/" target="_blank">ePIC API Documentation</a></h3>
            <p>API docs for implementing persistent identifiers with ePIC (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="EUDAT" data-domain="Generic" data-lang="EN">
            <h3>📘 <a href="https://docs.eudat.eu/b2inst/" target="_blank">B2INST User Guide</a></h3>
            <p>Guide for PID registration and management with EUDAT B2INST (EN)</p>
          </div>

          <div class="pid-card" data-type="Docs/API" data-provider="ROR" data-domain="Generic" data-lang="EN">
            <h3>🏷️ <a href="https://ror.readme.io/docs/basics" target="_blank">ROR Basics</a></h3>
            <p>Documentation and API details for the Research Organization Registry (EN)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="ORCID" data-domain="Generic" data-lang="DE">
            <h3>🎓 <a href="https://info.orcid.org/de/Video-Tutorials/" target="_blank">ORCID Video Tutorials</a></h3>
            <p>German-language video tutorials on ORCID (DE)</p>
          </div>

          <div class="pid-card" data-type="Video" data-provider="ARK" data-domain="Generic" data-lang="EN">
            <h3>🎥 <a href="https://youtu.be/-RkMGFCGRic" target="_blank">Getting Started with ARK Persistent Identifiers</a></h3>
            <p>Introductory ARK video tutorial (EN)</p>
          </div>

          <div class="pid-card" data-type="Slides" data-provider="ARK" data-domain="Generic" data-lang="EN">
            <h3>🖥️ <a href="https://arks-stg.cdlib.org/assets/documents/2023/06/ARK-Training-Tutorial-IIIF-2023-slides.pdf" target="_blank">ARK Training Tutorial (IIIF 2023)</a></h3>
            <p>3-hour tutorial slide deck on ARKs (EN)</p>
          </div>

        </div>

        <h2 class="pid-section-heading">🧰 Tools, Platforms & Interactive Resources</h2>
        <p>
          Tools and online platforms that support PID usage, decision-making, and community discussions.
          <ul>
            <li>PID selection tools</li>
            <li>Community platforms</li>
            <li>Self-assessment resources</li>
          </ul>
        </p>
        <div class="pid-card-grid">

          <div class="pid-card" data-type="Tool" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🎯 <a href="https://www.pidwijzer.nl/en/pid_results/new#tab-1" target="_blank">PID Guide – pidwijzer.nl</a></h3>
            <p>Interactive tool for selecting PID systems based on use case (EN)</p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="ELIXIR" data-domain="Life Sciences" data-lang="EN">
            <h3>🧬 <a href="https://tess.elixir-europe.org/materials" target="_blank">ELIXIR TeSS – Life Sciences Training Materials</a></h3>
            <p>Searchable catalogue of training materials including PIDs in life science contexts (EN)</p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>💬 <a href="https://www.pidforum.org" target="_blank">The PID Forum</a></h3>
            <p>Online community for sharing questions, answers, and discussions about PIDs (EN)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🌐 <a href="https://eosc.eu/roadmap-category-level-1/persistent-identifiers/" target="_blank">EOSC Macro-Roadmap – Persistent Identifiers (PIDs)</a></h3>
            <p>Collected contributions on PIDs in the EOSC context (EN)</p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🎮 <a href="https://dans.knaw.nl/en/dans-data-game/" target="_blank">DANS Data Game</a></h3>
            <p>Interactive game for research data & PID awareness (EN) — data: <a href="https://doi.org/10.5281/zenodo.10523390" target="_blank">Zenodo</a></p>
          </div>

          <div class="pid-card" data-type="Tool" data-provider="ARDC" data-domain="Generic" data-lang="EN">
            <h3>🧰 <a href="https://ardc.edu.au/resource-hub/" target="_blank">ARDC Resource Hub</a></h3>
            <p>Collection of training and documentation on PID systems (EN)</p>
          </div>

        </div>

        <h2 class="pid-section-heading">🔬 Domain-specific Use Cases & Models</h2>
        <p>
          Examples and models tailored to specific research communities or disciplines. Shows how PIDs are applied in specialized contexts.
          <ul>
            <li>Community-specific workflows</li>
            <li>Discipline-adapted PID models</li>
            <li>Integrating PIDs into domain infrastructures</li>
          </ul>
        </p>
        <div class="pid-card-grid">

          <div class="pid-card" data-type="Guide" data-provider="NFDI4Ing" data-domain="Engineering" data-lang="DE">
            <h3>🧑‍🏫 <a href="https://education.nfdi4ing.de/startpage.html#/" target="_blank">NFDI4Ing Training Platform</a></h3>
            <p>German-language platform for RDM and PID-related training materials (DE)</p>
          </div>

          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Engineering" data-lang="EN">
            <h3>⚗️ <a href="https://nfdi4cat.github.io/pid4cat-model/latest/" target="_blank">pid4cat – PID Model for Catalysis</a></h3>
            <p>FAIR PID model for research data in catalysis, based on Handle (EN)</p>
          </div>

        </div>

        <!-- minimal CSS for filters -->
        <style>
          .pid-filter { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin:1rem 0 1.5rem }
          .pid-filter input, .pid-filter select { padding:.4rem .6rem; border:1px solid #e3e3e3; border-radius:.5rem }
          .pid-filter button { padding:.4rem .7rem; border:1px solid #ccc; border-radius:.5rem; background:#fff; cursor:pointer }
          .pid-card-grid .pid-card[hidden]{ display:none !important }
          #pid-count { margin-left:auto; font-size:.9rem; opacity:.8 }
        </style>

        <!-- tiny filtering script -->
        <script>
          (function(){
            const q = s => document.querySelector(s);
            const qa = s => Array.from(document.querySelectorAll(s));
            const cards = qa('.pid-card-grid .pid-card');
            const search = q('#pid-search'), ftype = q('#f-type'), fprov = q('#f-provider'), fdom = q('#f-domain'), flang = q('#f-lang'), fyear = q('#f-year');
            const clearBtn = q('#pid-clear'), counter = q('#pid-count');

            function matches(card, sel, key){
              const val = sel.value?.trim();
              if(!val) return true;
              return (card.dataset[key]||'').toLowerCase() === val.toLowerCase();
            }
            function matchesSearch(card, term){
              if(!term) return true;
              const t = term.toLowerCase();
              const text = (card.textContent || '').toLowerCase();
              return text.includes(t);
            }
            function apply(){
              const term = search.value.trim().toLowerCase();
              let visible = 0;
              cards.forEach(card=>{
                const ok = matches(card, ftype, 'type')
                      && matches(card, fprov, 'provider')
                      && matches(card, fdom, 'domain')
                      && matches(card, flang, 'lang')
                      && matches(card, fyear, 'year')
                      && matchesSearch(card, term);
                card.hidden = !ok;
                if(ok) visible++;
              });
              counter.textContent = visible + ' shown / ' + cards.length + ' total';
              const params = new URLSearchParams();
              if(ftype.value) params.set('type', ftype.value);
              if(fprov.value) params.set('provider', fprov.value);
              if(fdom.value) params.set('domain', fdom.value);
              if(flang.value) params.set('lang', flang.value);
              if(fyear.value) params.set('year', fyear.value);
              if(search.value) params.set('q', search.value);
              const qs = params.toString();
              history.replaceState(null,'', qs ? ('?'+qs) : location.pathname);
            }
            function restoreFromURL(){
              const p = new URLSearchParams(location.search);
              if(p.get('type')) ftype.value = p.get('type');
              if(p.get('provider')) fprov.value = p.get('provider');
              if(p.get('domain')) fdom.value = p.get('domain');
              if(p.get('lang')) flang.value = p.get('lang');
              if(p.get('year')) fyear.value = p.get('year');
              if(p.get('q')) search.value = p.get('q');
            }
            [search, ftype, fprov, fdom, flang, fyear].forEach(el=>el.addEventListener('input', apply));
            clearBtn.addEventListener('click', ()=>{
              [search, ftype, fprov, fdom, flang, fyear].forEach(el=>el.value='');
              apply();
            });
            restoreFromURL(); apply();
          })();
        </script>

    design:
      spacing:
        padding: ["pt-4", "pb-4"]
---
