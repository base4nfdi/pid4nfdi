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

         <div class="use-case-card-grid">

          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h2>PID Service for Dataset Elements (Konsort SWD)</h2>
            <h5> <span style="background-color:gold;"> high-granular data</span> &nbsp <span style="background-color:sandybrown;">large numbers of PIDs</span></h5>            
            <p>The purpose of this analysis is to showcase PID integration in a new PID service that is being developed within the KonsortSWD consortium. This service aims to reference elements below the dataset, study, or publication level via PID, enhancing FAIRness of low-granular dataset elements and fulfilling requirements such as handling a large number of PIDs.</p>
            <p>&nbsp</p>
            <h5>Resource types:&nbsp dataset elements</h5>
            <h5>PID Providers: &nbsp &nbsp ePIC</h5>
            <h5>Research Field: &nbsp social sciences</h5>   
            <h2> <a href="https://zenodo.org/records/14327770" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h2>DOIs for Instruments at the Helmholtz-Zentrum Berlin</h2>
            <h5> <span style="background-color:lightskyblue;"> connection metadata</span></h5>
            <p>The Helmholtz Zentrum Berlin für Materialien und Energie (HZB) operates the BESSY II synchrotron radiation source and, until the end of 2019, operated the BER II neutron source. The synchrotron radiation of BESSY II (respectively neutrons at BER II) are directed through beamlines to experiment stations, where researchers can examine the interaction of the radiation with a sample, resulting in recorded measurements. The HZB registers DOIs via DataCite for its beamlines and experiment stations to uniquely identify these devices. Researchers can use the DOIs to link their publication data to the devices they have used to generate their measurements.</p>
            <p>&nbsp</p>
            <h5>Resource types:&nbsp instruments</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp photon- and neutron physics</h5>   
            <h2> <a href="https://zenodo.org/records/14327770" target="_blank">Learn more</a></h2>
          </div>

          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h2>Genebank Information System (FAIRAgro)</h2>
            <h5> <span style="background-color:plum;"> metadata analysis </span></h5>
            <p>The purpose of this analysis is to showcase PID integration within the Text+ consortium using the example of the SUB Göttingen. The report focuses on two well-integratied and long-running repositories (DARIAH-DE and TextGrid) for text-based research data from the humanities. We give details on different types of integrated PIDs, metadata quality handling, interaction with major infrastructures such as DARIAH and CLARIN, and describe new requirements and developments such as improved user input interfaces.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp seeds, samples</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite, IGSN</h5>
            <h5>Research Field: &nbsp agrosystem research</h5>   
            <h2> <a href="https://zenodo.org/records/14506202" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h2>PID Adoption at SUB Göttingen (Text+)</h2>
            <h5> <span style="background-color:lightsteelblue;"> general </span></h5>
            <p>The purpose of this analysis is to showcase PID integration within the Text+ consortium using the example of the SUB Göttingen. The report focuses on two well-integratied and long-running repositories (DARIAH-DE and TextGrid) for text-based research data from the humanities. We give details on different types of integrated PIDs, metadata quality handling, interaction with major infrastructures such as DARIAH and CLARIN, and describe new requirements and developments such as improved user input interfaces.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp text-based research data</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite, ePIC</h5>
            <h5>Research Field: &nbsp humanities</h5>   
            <h2> <a href="https://zenodo.org/records/14327691" target="_blank">Learn more</a></h2>
          </div>
        
          <div class="pid-card" data-type="Intro" data-provider="Community" data-domain="Generic" data-lang="EN" data-year="2021">
            <h2>StrainInfo (NFDI4Microbiota)</h2>
            <h5> <span style="background-color:plum;"> metadata analysis </span></h5>
            <p>The purpose of this analysis is a comprehensive evaluation of the metadata quality and completeness for the StrainInfo service. StrainInfo, operated by the Leibniz Institute DSMZ – German Collection of Microorganisms and Cell Cultures GmbH, is an integral part of the NFDI4Microbiota consortium. This analysis, conducted by DataCite, highlights the current state of metadata in StrainInfo, offering insights into its alignment with persistent identifier and metadata best practices.</p>
            <p>&nbsp</p>         
            <h5>Resource types:&nbsp microbial strains</h5>
            <h5>PID Providers: &nbsp &nbsp DataCite</h5>
            <h5>Research Field: &nbsp microbiology, biodiversity</h5>   
            <h2> <a href="https://zenodo.org/records/14357800" target="_blank">Learn more</a></h2>
          </div>
        
        </div>
        
    design:
      spacing:
        padding: ["pt-4", "pb-4"]
---
