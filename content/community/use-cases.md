---
title: Use Cases
date: 2025-10-14
type: landing

sections:
  - block: markdown
    content:
      title: "Use Cases"
      text: |
        <p> PID4NFI works with several different PID use cases from NFDI, in close collaboration with stakeholders from the respective consortia and services.
        
        Explore real-world examples of PID integrations across NFDI consortia and discover use cases that bridge diverse disciplines – from PID registration workflows in life sciences to metadata harmonization in social sciences – illustrating how PIDs enhance interoperability, reproducibility, and long-term accessibility. The examples reflect PID4NFDI’s aim to standardize PID usage, enhance governance, and support interoperability across NFDI consortia.<br /></p>

        <!-- Filter bar -->
        <div id="pid-filter" class="pid-filter not-prose">
          <input id="pid-search" type="search" placeholder="Search title/desc…" aria-label="Search">
          
          <select id="f-type" aria-label="Type">
            <option value="">Label</option>
            <option>Connection metadata</option>
            <option>FAIR digital objects</option>
            <option>General</option>
            <option>High-granular data</option>
            <option>Implementation concept</option>
            <option>Large numbers of PIDs</option>
            <option>Metadata analysis</option>
            <option>Metadata mapping</option>
            <option>Resource type clarification</option>
            <option>Warm data</option>
            <option>Controlled vocabulary</option>
          </select>
          
          <select id="f-provider" aria-label="Provider">
            <option value="">PID Provider</option>
            <option>DataCite</option>
            <option>ePIC</option>
          </select>
          
          <select id="f-domain" aria-label="Domain">
            <option value="">Research Field</option>
            <option>Agrosystem research</option>
            <option>Biodiversity</option>
            <option>Generic</option>
            <option>Humanities</option>
            <option>Microbiology</option>
            <option>Materials sciences</option>
            <option>Photon- and neutron sciences</option>    
            <option>Social sciences</option>
            <option>Earth System Sciences</option>
          </select>
          
          <select id="f-lang" aria-label="Language">
            <option value="">Resource Type</option>
            <option>Collections</option>
            <option>Datasets</option>
            <option>Dataset elements</option>
            <option>Instruments</option>
            <option>Projects</option>
            <option>Samples</option>
            <option>Services</option>
            <option>Storage Resources</option>
            <option>Strains</option>
            <option>Text-based</option>
          </select>
          
          <button id="pid-clear" type="button">Clear</button>
          <span id="pid-count" aria-live="polite"></span>
        </div>

         <div class="use-case-card-grid">
          <div class="pid-card" data-type="Large numbers of PIDs,High-granular data" data-provider="ePIC" data-domain="Social Sciences" data-lang="Dataset elements" >
            <h2>PID Service for Dataset Elements</h2>
            <h5> <span style="background-color:gold;"> &nbsp high-granular data &nbsp</span> &nbsp <span style="background-color:sandybrown;"> &nbsp large numbers of PIDs &nbsp </span></h5>            
            <p>The purpose of this analysis is to showcase PID integration in a new PID service that is being developed within the KonsortSWD consortium. This service aims to reference elements below the dataset, study, or publication level via PID, enhancing FAIRness of low-granular dataset elements and fulfilling requirements such as handling a large number of PIDs.</p>
            <p>&nbsp</p>
            <h5>Resource types:&nbsp dataset elements</h5>
            <h5>PID Providers: &nbsp &nbsp ePIC</h5>
            <h5>Research Field: &nbsp social sciences</h5>   
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp KonsortSWD<h5>
            <h5>Organizations:&nbsp &nbsp GESIS</h5>
            <h2> <a href="https://doi.org/10.5281/zenodo.14327770" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="Connection metadata" data-provider="DataCite" data-domain="Photon- and neutron sciences" data-lang="Instruments" >
            <h2>Instrument PIDs at the Helmholtz-Zentrum Berlin</h2>
            <h5> <span style="background-color:#E0B0FF;"> &nbsp connection metadata &nbsp </span></h5>
            <p>The Helmholtz Zentrum Berlin für Materialien und Energie (HZB) operates the BESSY II synchrotron radiation source and, until the end of 2019, operated the BER II neutron source. The synchrotron radiation of BESSY II (respectively neutrons at BER II) are directed through beamlines to experiment stations, where researchers can examine the interaction of the radiation with a sample, resulting in recorded measurements. The HZB registers DOIs via DataCite for its beamlines and experiment stations to uniquely identify these devices. Researchers can use the DOIs to link their publication data to the devices they have used to generate their measurements.</p>
            <p>&nbsp</p>
            <h5>Resource types:&nbsp instruments</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp photon- and neutron sciences</h5> 
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp DAPHNE4NFDI<h5>
            <h5>Organizations:&nbsp &nbsp HZB</h5>
            <h2> <a href="https://pid.services.base4nfdi.de/community/use-cases/instruments-at-hzb/" target="_blank">Learn more</a></h2>
          </div>

          <div class="pid-card" data-type="Controlled vocabulary,Metadata analysis" data-provider="ePIC" data-domain="Earth System Sciences" data-lang="Instruments" >
            <h2>Instrument PIDs in the Sensor Management System</h2>
            <h5> <span style="background-color:plum;"> &nbsp metadata analysis &nbsp </span> &nbsp <span style="background-color:mediumseagreen;"> &nbsp controlled vocabulary &nbsp </span></h5>
            <p>This analysis describes the integration of B2INST into the Sensor Management System (SMS), which enables standardized management of sensor metadata in the Earth System Sciences. By combining rich, machine-actionable metadata, controlled vocabulary, and persistent identifiers, the SMS makes instrument information readily reusable by automated workflows (e.g., knowledge graphs and AI/ML-driven discovery and quality control). The SMS has been developed by the four Helmholtz Centers from the Research Field Earth and Environment – Helmholtz Centre for Geosciences (GFZ), Helmholtz Center for Environmental Research (UFZ), Jülich Research Centre (FZJ), and Karlsruhe Institute of Technology (KIT) – as part of the Helmholtz DataHub initiative. Most instruments registered in B2INST originate from the SMS instances operated by these organizations. The report focuses on instrument metadata and curation processes, the seamlessly integrated PID registration workflow, and the lessons learned that can guide the adoption of instrument PIDs in equipment databases.</p>
            <p>&nbsp</p>
            <h5>Resource types:&nbsp instruments</h5>
            <h5>PID Providers: &nbsp &nbsp ePIC</h5>
            <h5>Research Field: &nbsp Earth System Sciences</h5> 
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp NFDI4Earth<h5>
            <h5>Organizations:&nbsp &nbsp GFZ, UFZ, KIT, FZJ</h5>
            <h2> <a href="https://zenodo.org/records/17733707" target="_blank">Learn more</a></h2>
          </div>

          <div class="pid-card" data-type="Metadata analysis" data-provider="DataCite" data-domain="Agrosystem research" data-lang="Datasets" >
            <h2>Metadata Analysis for the Genebank Information System</h2>
            <h5> <span style="background-color:plum;"> &nbsp metadata analysis &nbsp </span></h5>
            <p>The purpose of this report is to provide a comprehensive evaluation of the metadata quality and completeness of the FAIRAgro consortium. This analysis, conducted by DataCite, highlights the current state of metadata, offering insights into its alignment with persistent identifier and metadata best practices.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp datasets</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp agrosystem research</h5>   
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp FAIRagro<h5>
            <h5>Organizations:&nbsp &nbsp IPK Gatersleben</h5>
            <h2> <a href="https://doi.org/10.5281/zenodo.14506202" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="General" data-provider="DataCite,ePIC" data-domain="Humanities" data-lang="Text-based" >
            <h2>PID Adoption at the SUB Göttingen</h2>
            <h5> <span style="background-color:lightsteelblue;"> &nbsp general &nbsp </span> &nbsp <span style="background-color:plum;"> &nbsp metadata analysis &nbsp </span></h5>
            <p>The purpose of this analysis is to showcase PID integration within the Text+ consortium using the example of the SUB Göttingen. The report focuses on two well-integratied and long-running repositories (DARIAH-DE and TextGrid) for text-based research data from the humanities. We give details on different types of integrated PIDs, metadata quality handling, interaction with major infrastructures such as DARIAH and CLARIN, and describe new requirements and developments such as improved user input interfaces.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp text-based research data</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite, ePIC</h5>
            <h5>Research Field: &nbsp humanities</h5>   
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp Text+<h5>
            <h5>Organizations:&nbsp &nbsp SUB Göttingen</h5>
            <h2> <a href="https://doi.org/10.5281/zenodo.14327691" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="Metadata analysis" data-provider="DataCite" data-domain="Microbiology,Biodiversity" data-lang="Strains" >
            <h2>Metadata Analysis for StrainInfo</h2>
            <h5> <span style="background-color:plum;"> &nbsp metadata analysis &nbsp </span></h5>
            <p>The purpose of this analysis is a comprehensive evaluation of the metadata quality and completeness for the StrainInfo service. StrainInfo, operated by the Leibniz Institute DSMZ – German Collection of Microorganisms and Cell Cultures GmbH, is an integral part of the NFDI4Microbiota consortium. This analysis, conducted by DataCite, highlights the current state of metadata in StrainInfo, offering insights into its alignment with persistent identifier and metadata best practices.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp microbial strains</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp microbiology, biodiversity</h5>  
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp NFDI4Microbiota<h5>
            <h5>Organizations:&nbsp &nbsp DSMZ</h5>
            <h2> <a href="https://doi.org/10.5281/zenodo.14357800" target="_blank">Learn more</a></h2>
          </div>    
        
          <div class="pid-card" data-type="Metadata mapping,Implementation concept" data-provider="DataCite" data-domain="Generic" data-lang="Projects,Services" >
            <h2>PIDs for Services – Mapping Base4NFDI Requirements to DataCite Metadata</h2>
            <h5> 
              <span style="background-color:lightpink;"> &nbsp metadata mapping &nbsp </span> &nbsp
              <span style="background-color:lightskyblue;"> &nbsp implementation concept &nbsp </span>
            </h5>
            <p>The purpose of this work is to evaluate how Base4NFDI basic services (e.g. PID4NFDI, TS4NFDI, DMP4NFDI) can be assigned DOIs using the DataCite Metadata Schema. The analysis maps Base4NFDI portfolio requirements to DataCite’s metadata properties, identifies gaps and ambiguities, and formulates governance, workflow, and landing page recommendations for compliant DOI registration of services. The goal is to increase FAIRness, citation stability, discoverability, provenance tracking, and impact measurement of NFDI basic services.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp projects, services (NFDI basic services)</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp generic, research data management</h5>  
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp Base4NFDI<h5>
            <h5>Organizations:&nbsp &nbsp TIB</h5>
          </div>    
          
          <div class="pid-card" data-type="Metadata analysis,Resource type clarification" data-provider="DataCite" data-domain="Materials sciences" data-lang="Collections" >
            <h2>NOMAD – Clarifying Resource Type for DOI Registration of Aggregated Data</h2>
            <h5> 
              <span style="background-color:plum;"> &nbsp metadata analysis &nbsp </span> &nbsp
              <span style="background-color:#CCCCFF;"> &nbsp resource type clarification &nbsp </span>
            </h5>
            <p>This use case analyses how NOMAD “Projects” (aggregations of uploaded files, directories, and derived entries) should be represented in the DataCite Metadata Schema for DOI registration. Our analysis showed that these “Projects” function as curated collections of heterogeneous research objects (nested files, heterogeneous data types, derived entries). They are not project descriptions in the sense of RAiDs, but structured aggregations of multiple items that are bundled and assigned a DOI. On that basis, the recommended resourceTypeGeneral is Collection rather than Dataset or Project. We therefore supported NOMAD in clarifying what exactly is being identified, how those aggregated objects should be described, and how the associated metadata can be enriched in a structured and interoperable way.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp collections (recommended for NOMAD Projects)</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp materials science, computational materials research</h5>  
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp FAIRmat<h5>
            <h5>Organizations:&nbsp &nbsp Humboldt-Universität zu Berlin (NOMAD repository operator)</h5>
          </div>  
        
          <div class="pid-card" data-type="Warm data,FAIR digital objects" data-provider="ePIC" data-domain="Generic" data-lang="Projects,Storage resources" >
            <h2>Coscine: Assigning PIDs for Projects and Storage Resources</h2>
            <h5> 
              <span style="background-color:#E5AA70;"> &nbsp Warm data &nbsp </span> &nbsp
              <span style="background-color:#AFE1AF;"> &nbsp FAIR digital objects &nbsp </span>
            </h5>
            <p>Cosine is a web-based research data management (RDM) platform developed at RWTH Aachen University in collaboration with NFDI4Ing/NFDI-MatWerk. It can be used to store, manage and archive any kinds of general research data that arise from research projects. The platform focuses on making warm/active data FAIR by collecting rich, customizable metadata and assigning PIDs as early as possible, whereas the final publication of research results is not part of Coscine. The RDM platform assigns ePIC PIDs in the form of FAIR digital objects (FDOs) to enhance FAIRness and interoperability across systems.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp projects, storage resources</h5>
            <h5>PID Providers: &nbsp &nbsp ePIC</h5>
            <h5>Research Field: &nbsp generic</h5>  
            <h5>Consortia: &nbsp &nbsp &nbsp &nbsp &nbsp NFDI4ING, NFDI-MatWerk<h5>
            <h5>Organizations:&nbsp &nbsp RWTH Aachen University</h5>
          </div>   
        
        <!-- minimal CSS for filters -->
        <style>
          .pid-filter { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin:1rem 0 1.5rem }
          .pid-filter input, .pid-filter select { padding:.4rem .6rem; border:1px solid #e3e3e3; border-radius:.5rem }
          .pid-filter button { padding:.4rem .7rem; border:1px solid #ccc; border-radius:.5rem; background:#fff; cursor:pointer }
          .use-case-card-grid .pid-card[hidden]{ display:none !important }
          #pid-count { margin-left:auto; font-size:.9rem; opacity:.8 }
        </style>

        <!-- tiny filtering script -->
        <script>
          (function(){
            const q = s => document.querySelector(s);
            const qa = s => Array.from(document.querySelectorAll(s));
            const cards = qa('.use-case-card-grid .pid-card');
            const search = q('#pid-search'), ftype = q('#f-type'), fprov = q('#f-provider'), fdom = q('#f-domain'), flang = q('#f-lang');
            const clearBtn = q('#pid-clear'), counter = q('#pid-count');

            function matches(card, sel, key){
              const val = sel.value?.trim();
              if(!val) return true;
              if (!card.dataset[key]) return false;
              const cardValues = card.dataset[key].toLowerCase().split(',');
              return cardValues.includes(val.toLowerCase());
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
              if(p.get('q')) search.value = p.get('q');
            }
            [search, ftype, fprov, fdom, flang].forEach(el=>el.addEventListener('input', apply));
            clearBtn.addEventListener('click', ()=>{
              [search, ftype, fprov, fdom, flang].forEach(el=>el.value='');
              apply();
            });
            restoreFromURL(); apply();
          })();
        </script>
        
    design:
      spacing:
        padding: ["pt-4", "pb-4"]
---
