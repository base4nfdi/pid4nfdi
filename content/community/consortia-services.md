---
title: Consortia Services
date: 2025-08-11
type: landing

sections:
  - block: markdown
    content:
      title: Consortia Services
      text: |
        The NFDI community is actively involved in developing tools that effectively utilize PIDs across various use cases. We want to acknowledge this work, make it visible, and facilitate networking. You will find an overview of the PID services provided by the NFDI consortia below (open for additions).
        Would you like to make your tool visible on this page? If so, please [contact us](https://pid.services.base4nfdi.de/about/contact/). We look forward to your support!
    design:
      columns: '1'

  - block: markdown
    content:
      title: <h2>PID-Checker (NFDI4Energy)</h2>
      #subtitle: <h3>...</h3>
      text: |
        The PID Service is a web-based tool developed within TIB. It automatically checks and reports on the resolvability and status of Class IRIs, which can follow PID patterns in ontologies. It supports both scheduled, large-scale analysis of registered ontologies and on-demand checks for any ontology file available online in <span style="color: green;">.ttl</span> or <span style="color: green;">owl format</span>.  
        <h3>Main Features</h3>  
        * Batch PID Checking: Every two weeks, the service checks the ontologies from the NFDI4ING and NFDI4Energy collections (hosted by the TIB Terminology Service) for PID resolvability and status. Results are stored for reporting and monitoring.<br>
        * On-Demand PID Checking: Users can submit a link to any ontology file (in <span style="color: green;">.ttl</span> or <span style="color: green;">owl format</span>, e.g., from a Git repository) for immediate analysis. The results remain available for about one hour before they are automatically deleted.<br>
        * Detailed Reports: The service provides statistics such as the number of IRIs checked, how many are not working, PID pattern usage, and general ontology metadata.<br>
        * Result Downloads: Users can download the analysis results as CSV or Excel files — either for entire ontologies or just for filtered results. It is also possible to download results for a single ontology.<br>
        * Progress Tracking: For large external files, users receive a task ID and can track the progress and results asynchronously.  
        * REST API Access: All features can be accessed via a documented REST API.<br>

        <h3>How it relates to Persistent Identifiers (PIDs)</h3>  
        The service supports the FAIR data principles by checking that PIDs used in ontologies are working and maintained. It helps ontology developers and users ensure that PIDs are reliable, which is essential for data reuse and long-term accessibility.  

        <h3>Target Audience</h3>  
       * Ontology developers and curators  
       * Researchers or users interested in the quality and stability of PIDs in semantic resources  

        <h3>Conditions of Use</h3>  
       * The service is currently open to all users.  
       * It is provided by TIB as part of the NFDI4Energy project.  
        
        The tool is still under active development. If you notice any issues or have feature requests, feel free to create an issue in the repository or contact us by email — we’d be happy to help.  

        {{% cta cta_alt_link="https://terminology.nfdi4ing.de/ts/sandbox/pidChecker" cta_alt_text="Link to Service" %}}
    design:
      columns: '2'

  - block: markdown
    content:
      title: <h2>pid4cat (NFDI4Cat)</h2>
      #subtitle: <h3>Metadata Analysis</h3>
      text: |
        pid4cat is a service that is designed to assign persistent identifiers for resources generated in the catalysis research community, such as collections, samples, materials, devices, datasets, and services.  
        The pid4cat service builds upon existing PID infrastructure, i.e., it assigns [ePIC PIDs](https://www.pidconsortium.net/) based on the [Handle System](https://www.handle.net/). pid4cat enables partner organizations to manage their own sub-namespaces while maintaining a consistent approach to identifier creation and metadata management.  
        
        Key features of the pid4cat service include:  
        *low cost per PID for partner organizations  
        
        The pid4cat service has been developed within NFDI4Cat and is provided and managed by the HLRS (High Performance Computing Center Stuttgart). The service is made available to end-users (researchers from the catalysis research community) via partner organizations. To become a partner organization and provide a PID issuing service (e.g., repository) for your researchers, organizations have to apply to become a Sub-Name Assigning Authority in pid4cat. Details on the application process can be found [here](https://nfdi4cat.github.io/pid4cat-model/latest/getting-started/).

        {{% cta cta_alt_link="https://nfdi4cat.github.io/pid4cat-model/latest/" cta_alt_text="Link to main documentation" %}}
    design:
      columns: '2'

  - block: markdown
    content:
      title: <h2>PIDA</h2>
      #subtitle: <h3>Use Case Analysis</h3>
      text: |
        PIDA is a service providing unique persistent URLs (PURLs) for referencing digital assets on the web. Using our service will help you to ensure that your digital assets remain findable and can be accessed reliably by both humans and machines in the long term. The service provides content negotiation and is thus ideally suited to be used for the development of ontologies.  
        Some of PIDA’s key features are:
       * provides persistent and globally unique identifiers (PURLs)  
       * easy to create and update  
       * supports content negotiation (i.e. HTML, OWL, TTL, RDF)  
       * secure https communications protocol  
       * persistent for 10+ years  

        PIDA is a service provided by Hub Information and the FAIR Data Commons of the [Helmholtz Metadata Collaboration (HMC)](https://helmholtz-metadaten.de/en), an incubator platform of the Helmholtz Association within the framework of the Information and Data Science strategic initiative. It is developed, deployed and maintained by the [Institute for Advanced Simulation - Materials Data Science and Informatics (IAS-9)](https://fz-juelich.de/ias/ias-9/EN/Home/home_node.html) of the Forschungszentrum Jülich GmbH. PIDA service was started in August 2022.  
        PIDA can be used free of charge by academic (and non commercial) projects. 

        
        {{% cta cta_alt_link="https://purls.helmholtz-metadaten.de/" cta_alt_text="Link to service" %}}
    design:
      columns: '2'

---