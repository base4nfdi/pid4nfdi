---
title: PID4NFDI Technical Service Components Documentation
date: 2025-05-20
type: landing

sections:
  - block: markdown
    content:
      title: PID4NFDI Technical Service Components Documentation
      subtitle: An overview of the technical building blocks that make up the PID4NFDI service portfolio
      text: |
        This page documents the individual technical service components that together form the PID4NFDI Coordination Hub. Each component addresses a distinct aspect of PID adoption, metadata quality, and infrastructure interoperability within NFDI.
    design:
      columns: '2'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: ''
      text: |
        <div style="background-color: #ffffff; padding: 1.5rem; border-radius: 10px; margin-top: 2rem;">

        <div style="background-color: #f5f7fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 1.25rem 1.75rem; margin-bottom: 2.5rem;">
        <p style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #555; margin-bottom: 0.75rem;">Contents</p>
        <ol style="margin: 0; padding-left: 1.25rem; line-height: 2;">
          <li><a href="#pid4nfdi-coordination-hub-website">PID4NFDI Coordination Hub Website</a></li>
          <li><a href="#pid-selection-tool">PID Selection Tool</a></li>
          <li><a href="#pid-cookbook">PID Cookbook</a></li>
          <li><a href="#pidinst-search">PIDINST Search</a></li>
          <li><a href="#epic-prefix-registration">ePIC Prefix Registration</a></li>
          <li><a href="#b2inst">B2INST</a></li>
          <li><a href="#data-type-registry">Data Type Registry</a></li>
          <li><a href="#pid-meta-resolver">PID Meta Resolver</a></li>
          <li><a href="#cat-compliance-assessment-toolkit">CAT – Compliance Assessment Toolkit</a></li>
          <li><a href="#datacite-schema-46-namespace">DataCite Schema 4.6 Namespace</a></li>
          <li><a href="#crosswalks-for-semantic-interoperability">Crosswalks for Semantic Interoperability</a></li>
          <li><a href="#early-lifecycle-semantic-integration">Early Lifecycle Semantic Integration</a></li>
          <li><a href="#zotero-library">Zotero Library</a></li>
        </ol>
        </div>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 0rem;">
        <h2 id="pid4nfdi-coordination-hub-website">PID4NFDI Coordination Hub Website</h2>
        </div>

        <p>The PID Coordination Hub is the central technical and strategic heart of the PID4NFDI project. It is primarily realized through a dedicated <a href="https://pid.services.base4nfdi.de/" target="_blank" rel="noopener">website</a> that serves as the central entry point to PID4NFDI's services and knowledge base. This platform consolidates technical, organizational, and strategic measures to enhance metadata quality and interoperability across the NFDI landscape. Through the website, repository managers, infrastructure providers, and researchers gain direct access to a modular service portfolio, including technical tools, governance guidelines, best practices, and comprehensive training materials such as FAQs and toolkits. By ensuring continuous technical maintenance and editorial development of the website, the Hub functions as a consolidated knowledge base that fosters exchange between NFDI consortia and optimizes the standardized use of PIDs across disciplines by integrating concrete use cases and technical advancements, such as expanded access to PID-referenced information (e.g. <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank" rel="noopener">Cookbook</a>).</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="pid-selection-tool">PID Selection Tool</h2>
        </div>

        <p>The <a href="https://pid.services.base4nfdi.de/pidtool/" target="_blank" rel="noopener">PID Selection Tool</a> is an interactive decision-support tool designed to help repository and infrastructure managers identify which PID system best fits their specific use case and integration requirements. It guides users through short statements across four thematic sections – Persistence and Costs, Purpose, Metadata &amp; Interoperability, and Technical Setup and Training – each reflecting a typical consideration when selecting a PID service. Users rate the importance of each statement, and the tool then compares their preferences against expert evaluations to produce a ranked visual overview of suitable PID services. Currently, the tool covers four object-related PID services: DataCite DOI, ePIC Handles (GWDG), URN:NBN, and ARK. While broadly applicable, the tool is primarily oriented toward the German research landscape and the NFDI context.</p>
        <p>Technically, the tool is implemented as a client-side HTML and JavaScript application, embedded as a page within the PID4NFDI website, which is built using the Hugo static site generator with the <a href="https://github.com/HugoBlox/theme-research-group" target="_blank" rel="noopener">HugoBlox (Research) theme</a> and hosted via GitHub Pages. All processing occurs in the browser without any backend, ensuring a lightweight and privacy-friendly user experience. Development and maintenance take place in a version-controlled <a href="https://github.com/base4nfdi/pid4nfdi" target="_blank" rel="noopener">GitHub repository</a>.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="pid-cookbook">PID Cookbook</h2>
        </div>

        <p>The <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank" rel="noopener">PID4NFDI Cookbook</a> is a training resource to support researchers, data stewards, and infrastructure providers in understanding and implementing PIDs in research workflows. Its purpose is to explain what PIDs are, why they are essential for FAIR research data management, and how different PID systems can be selected and integrated in practice. The Cookbook is maintained as a version-controlled documentation project in a <a href="https://github.com/stephw-tib/pid4nfdi-training" target="_blank" rel="noopener">GitHub repository</a>, built using <a href="https://www.sphinx-doc.org/en/master/" target="_blank" rel="noopener">Sphinx</a> as a static documentation generator, and automatically compiled and hosted via <a href="https://about.readthedocs.com/?ref=app.readthedocs.org" target="_blank" rel="noopener">Read the Docs</a>.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="pidinst-search">PIDINST Search</h2>
        </div>

        <p><a href="https://search.pidinst.org/" target="_blank" rel="noopener">PIDINST Search</a> is a Flask-based web application designed to support the discovery and exploration of research instruments registered with a PID. It is hosted at the TIB as part of the homepage of the <a href="https://www.pidinst.org/" target="_blank" rel="noopener">PIDINST working group</a>. The tool was <a href="https://zenodo.org/records/17734216" target="_blank" rel="noopener">developed as a prototype</a> for integrating emerging PID resource types into PID-based knowledge graphs. It brings together instrument records from DataCite and ePIC (via B2INST) within a single, unified search interface. As well as providing direct PID lookup (including prefix search), it enables users to perform free-text searches in key metadata fields defined by the PIDINST metadata schema. An integrated <a href="https://search.pidinst.org//all" target="_blank" rel="noopener">statistics section</a> allows for further analysis of search result sets using interactive line graphs and frequency tables, with filtering options for examining subsets of the data. Development and maintenance take place in a version-controlled <a href="https://gitlab.com/TIBHannover/lki/pidinst-search" target="_blank" rel="noopener">GitLab repository</a>.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="epic-prefix-registration">ePIC Prefix Registration</h2>
        </div>

        <p>The <a href="https://pid.services.base4nfdi.de/services/prefix-registration" target="_blank" rel="noopener">prefix registration service</a> provides NFDI consortia with Handle-based PID prefixes via the ePIC consortium, issued by GWDG as a PID provider. Consortia can request test or production prefixes through an online form, enabling quick onboarding into PID workflows. A prefix enables consortia and organizations to assign PIDs under this namespace. During the PID4NFDI project runtime, free test prefixes and a limited number of free productive prefixes (each prefix allowing registration of up to 50,000 PIDs/year) are available. For long-term or larger-scale use beyond these limits, dedicated contracts with GWDG ensure sustainable operation. The service is embedded in the broader PID4NFDI offering and is supported by guidance such as the <a href="https://pid4nfdi-training.readthedocs.io/en/latest/" target="_blank" rel="noopener">PID4NFDI Cookbook</a>.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="b2inst">B2INST</h2>
        </div>

        <p><a href="https://b2inst.gwdg.de/" target="_blank" rel="noopener">B2INST</a> is a service offered by <a href="https://eudat.eu/" target="_blank" rel="noopener">EUDAT</a> and run by GWDG that supports the registration of research instruments with persistent identifiers (ePIC PIDs). The service is available free of charge to NFDI. It can be used by both institutions and individual researchers, either via a web user interface or an API. The service supports manual registration of single instruments as well as automated assignment of PIDs for large numbers of instruments through institutional workflows that integrate the B2INST API. B2INST implements the <a href="https://docs.pidinst.org/en/latest/white-paper/metadata-schema.html" target="_blank" rel="noopener">PIDINST metadata schema</a> and allows communities to extend this schema with additional metadata fields relevant to their specific use cases. B2INST uses the software <a href="https://inveniosoftware.org/products/rdm/" target="_blank" rel="noopener">InvenioRDM v13.0</a>.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="data-type-registry">Data Type Registry</h2>
        </div>

        <p>The <a href="https://typeregistry.lab.pidconsortium.net/" target="_blank" rel="noopener">Data Type Registry</a> (DTR) is a service for defining, managing, and publishing machine-actionable "PID information types" that can be used in PID records. It allows communities to register types (such as standard metadata attributes or technical properties), assign them PIDs, and combine them into more complex type structures. The registered PID types can be used to generate JSON schemas via the associated <a href="https://typeapi.lab.pidconsortium.net/" target="_blank" rel="noopener">Type API</a>. These schemas can then be used to validate PID-related metadata in other systems. The service will soon be offered as part of the PID4NFDI Coordination Hub to support harmonised but flexible handling of PID information across NFDI services and domains. The DTR has been developed as a component of the European <a href="https://faircore4eosc.eu/" target="_blank" rel="noopener">FAIRCORE4EOSC</a> project and uses the <a href="https://www.cordra.org/" target="_blank" rel="noopener">Cordra</a> software, which provides a Handle-based digital object repository and API framework.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="pid-meta-resolver">PID Meta Resolver</h2>
        </div>

        <p>The <a href="https://pidmr.argo.grnet.gr/" target="_blank" rel="noopener">PID Meta Resolver</a> (PIDMR) is a technical service that provides a unified resolution API for multiple PID systems and providers. It accepts a PID as input, detects the corresponding PID system or provider, and exposes standardised resolution methods to retrieve the PID's landing page, associated metadata, or, where supported, the referenced digital object itself. The service offers both a web user interface and machine-accessible APIs, allowing integration into data processing pipelines and other research infrastructures. It has been developed as a component of the European <a href="https://faircore4eosc.eu/" target="_blank" rel="noopener">FAIRCORE4EOSC</a> project and will soon be integrated into the PID4NFDI Coordination Hub as a service offering for the NFDI community.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="cat-compliance-assessment-toolkit">CAT – Compliance Assessment Toolkit</h2>
        </div>

        <p>The <a href="https://cat.argo.grnet.gr/" target="_blank" rel="noopener">Compliance Assessment Toolkit</a> (CAT) provides machine-actionable assessment of PID-related services against the EOSC PID policy. It formally encodes the policy requirements and allows for automated compliance testing via APIs, complemented by user interfaces for interactive evaluation and reporting. The CAT tool was developed as part of the European <a href="https://faircore4eosc.eu/" target="_blank" rel="noopener">FAIRCORE4EOSC</a> project. Hence, the PID4NFDI project does not operate this service but recommends it for the purpose of compliance testing. It is also planned to design an NFDI PID policy within the next PID4NFDI project phase, which would then be integrated into CAT, enabling future assessments of NFDI services against both EOSC and NFDI PID policies.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="datacite-schema-46-namespace">DataCite Schema 4.6 Namespace</h2>
        </div>

        <p>DataCite Linked Data is a GitHub-based project that publishes a staged linked-data representation of parts of the <a href="https://schema.datacite.org/" target="_blank" rel="noopener">DataCite Metadata Schema 4.6</a>. Developed as a semantic layer around the existing schema, it provides resolvable JSON-LD resources for schema classes, properties, and controlled vocabularies, together with reusable JSON-LD contexts, a manifest of published resources, and bundled distribution files in JSON-LD, Turtle, and RDF/XML.</p>
        <p>The project is designed to make the meaning of DataCite metadata easier to interpret, connect, and reuse across systems, supporting graph-based interoperability while remaining compatible with familiar JSON- and XML-oriented workflows.</p>
        <p>In addition to the machine-readable resources themselves, the repository includes human-browsable index pages for the <a href="https://schema.stage.datacite.org/linked-data/" target="_blank" rel="noopener">website</a>, generation scripts, and beginner-friendly documentation, and is maintained as a version-controlled GitHub repository to support ongoing review and development.</p>
        <p>In collaboration with <a href="https://terminology.services.base4nfdi.de/" target="_blank" rel="noopener">TS4NFDI</a>, as an incubator project, DataCite's controlled vocabularies are made available through terminology services, enabling users to search and select schema terms directly within host systems.</p>
        <p>For each selected term, resolvable URIs and essential semantic context (label, definition, and concept scheme) are provided to support machine-actionable metadata storage.</p>
        <p>Official vocabularies, including relationType, resourceTypeGeneral, and other controlled lists, are also supplied as structured JSON/JSKOS concept schemes to facilitate integration into terminology service infrastructures, tools and downstream PID workflows.</p>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="crosswalks-for-semantic-interoperability">Crosswalks for Semantic Interoperability</h2>
        </div>

        <p>The SKOS and JSKOS mappings establish machine-actionable crosswalks that align the DataCite Metadata Schema 4.6 with external vocabularies, supporting semantic interoperability across metadata systems and knowledge graph services.</p>
        <p>Developed in collaboration with the NFDI Metadata Task Force, this work follows the recommendations of the NFDI Section Metadata, which identifies DataCite, DCAT, and schema.org as the three generic metadata schemas that should serve as primary alignment points across the NFDI landscape.</p>
        <p>Using SKOS and JSKOS, the mappings connect DataCite classes, properties, and controlled vocabulary terms to corresponding concepts in DCAT, schema.org, DCTERMS, and related linked data resources. This enables structured reuse in metadata registries, crosswalk services, terminology services, and graph-based workflows.</p>
        <p>As part of the PID4NFDI contribution, mapping artefacts are created and curated as versioned JSKOS files and SSSOM format, to support broader interoperability requirements.</p>
        <p>Through the TS4NFDI incubator collaboration, these mappings are integrated into Cocoda, where they are stored in JSKOS and can be manually curated to maintain quality and consistency. Cocoda exposes the mappings via a REST API, enabling lookup by source concept and programmatic retrieval by external systems. A pilot integration is underway to load the DataCite alignment sets into Cocoda and test practical retrieval scenarios, including terminology service widgets and metadata transformation workflows.</p>
        <ul>
          <li><a href="https://github.com/selgebali/datacite4.6-jsonld/tree/main/docs/skos-mappings" target="_blank" rel="noopener">GitHub Repository</a></li>
          <li><a href="https://terminology.services.base4nfdi.de/incubators" target="_blank" rel="noopener">Incubator Project</a></li>
          <li><a href="https://doi.org/10.5281/zenodo.15516280" target="_blank" rel="noopener">NFDI Metadata Workshop</a></li>
        </ul>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="early-lifecycle-semantic-integration">Early Lifecycle Semantic Integration</h2>
        </div>

        <p>This component supports research infrastructures at the earliest stages of the research lifecycle to enable high-quality, standards-aligned metadata capture at the point of creation. In collaboration with RSpace during the TS4NFDI incubator phase, PID4NFDI is introducing machine-actionable semantics directly into the RSpace user interface. The objective is to facilitate the selection of controlled terms, reduce ambiguity in metadata entry, and ensure that RSpace objects can connect reliably to downstream PID infrastructures such as DataCite, RAiD, and related services across the NFDI ecosystem.</p>
        <p>The approach builds on components of the Terminology Service Suite (TSS), focusing during the incubator phase on a limited set of high-impact, technically feasible integrations. This includes evaluating whether embedded TSS widgets can return canonical URIs that align with DataCite-compatible workflows and support structured, machine-actionable metadata.</p>
        <p>PID4NFDI supports via consultations for identifying targeted insertion points for controlled vocabularies within the RSpace interface and by providing mapping artefacts in JSON, JSKOS, and SSSOM formats to support potential cross-schema exports (e.g., schema.org, DCAT), should RSpace implement export functionality in the future.</p>
        <ul>
          <li><a href="https://zenodo.org/records/15130045" target="_blank" rel="noopener">October Hackathon</a> identifying core elements for a machine-actionable DMP</li>          
        </ul>

        <div style="border-left: 8px solid #2a6ebc; padding-left: 1rem; margin-top: 3rem;">
        <h2 id="zotero-library">Zotero Library</h2>
        </div>

        <p>The <a href="https://www.zotero.org/groups/pid4nfdi" target="_blank" rel="noopener">PID4NFDI Zotero Library</a> is a publicly accessible, collaboratively maintained reference collection curating literature related to Persistent Identifiers and FAIR Research Data Management. It serves as a shared knowledge base for the PID4NFDI team and the broader community, collecting scholarly articles, reports, guidelines, and other relevant publications from across the PID ecosystem. The library is hosted as an open group library on Zotero and can be browsed directly via the Zotero web interface without requiring an account. It is maintained using Zotero's group library functionality, which enables collaborative editing and curation by multiple contributors.</p>

        </div>
    design:
      columns: '1'
      align: center
      spacing:
        padding: ['5px', '0', '40px', '0']
    background:
      color: 'white'
---