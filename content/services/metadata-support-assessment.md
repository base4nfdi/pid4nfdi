---
title: Metadata Support and Assessment
date: 2024-10-09
type: landing

sections:
  
  - block: markdown
    content:
        title: Metadata Support and Assessment
        text: |
            Metadata is essentially *data about data*, providing descriptive information that helps in organizing, finding, and understanding resources. Therefore, metadata support (creating, managing and maintaining metadata) and metadata assessment (evaluating the quality and effectiveness of metadata, and its adherence to standards) are crucial for managing and utilizing digital resources such as research data effectively. Most important is that data is FAIR, which means that the data – and its metadata – meet the [FAIR principles](https://www.go-fair.org/fair-principles/), so that data is **F**indable, **A**ccessible, **I**nteroperable and **R**eusable. Persistent identifiers (PIDs) play a crucial role in making data FAIR, as outlined in the principles themselves and the [FAIR principles' interpretation by the GO FAIR community](https://www.gofair.foundation/interpretation).
    design:
        columns: '2'

  - block: markdown
    content:
        title: Tools for Quality Assessment of Metadata
        text: |
            The following tools can help you with assessing metadata, for example if it is in compliance with the FAIR principles or other metadata standards. Furthermore, published overviews and comparisons of the tools for FAIR data assessment give more detailed insights into the workings of the tools and can help you selecting the right one for your purpose.
            
            | **Tool Name** | **Description** |
            |---------------|-----------------|
            | [FAIR-Checker](https://fair-checker.france-bioinformatique.fr) | The FAIR-Checker makes use of semantic web technologies to check if metadata is compliant with the FAIR principles. It was developed by the [French Institute for Bioinformatics](https://www.france-bioinformatique.fr/en/home/). |
            | [F-UJI FAIR Assessment](https://www.f-uji.net/?action=test) | F-UJI FAIR Assessment assesses the FAIRness of research data objects (datasets) based on metrics developed by the [FAIRsFAIR project](https://www.fairsfair.eu). It only requires a PID or URL of the dataset which is to be assessed. |
            | [FAIR Enough](https://fair-enough.semanticscience.org) | FAIR Enough checks if and how much online resources follow the FAIR principles. It is developed by the [Institute of Data Science at Maastricht University](https://www.maastrichtuniversity.nl/research/institute-data-science). It too only requires a PID or URL of the dataset which is to be assessed. |
            | [ARDC FAIR Data Self Assessment Tool](https://ardc.edu.au/resource/fair-data-self-assessment-tool/) | The ARDC FAIR Data Self Assessment Tool assesses how FAIR your research dataset is based on a checklist and gives practical tips on how to enhance its FAIRness. It is developed by the [Australian Research Data Commons (ARDC)](https://ardc.edu.au/). |
            | [FAIR Evaluation Services](https://fairsharing.github.io/FAIR-Evaluator-FrontEnd) | The FAIR Evaluation Services collect resources and guidelines to assess the FAIRness of digital resources. It focuses on maturity indicator tests. It is maintained by the [FAIRmetrics](https://github.com/FAIRMetrics) and the [FAIRsharing](https://sansonegroup.eng.ox.ac.uk/) groups. |
            | [AtMoDat Data Checker](https://www.atmodat.de/adc) | The AtMoDat Data Checker is a Python-based library that contains checks to ensure compliance with the [AtMoDat Standard](https://www.atmodat.de/atmodat-standard). It is based on the [IOOS compliance checker](https://github.com/ioos/compliance-checker) and was developed for the climate research community. |
    design:
      columns: '1'

  - block: markdown
    content:
        title: Overviews and Comparisons of Tools for FAIR Data Assessment
        text: |
            - The Hyve, a support portal for the life sciences, published an [overview and evaluation of the aforementioned four FAIR data assessment tools](https://www.thehyve.nl/articles/evaluation-fair-data-assessment-tools) (2023).
            - The EOSC FAIR-IMPACT project has also reviewed three of these tools, focusing on their application and potential repurposing to assess compliance with the [FAIR for Research Software (FAIR4RS) principles](https://fair-impact.eu/news/comparison-tools-automated-fair-software-assessment) (2024).
    design:
      columns: '2'

  - block: markdown
    content:
        title: Catalog of Metadata Standards
        text: |
            A [catalog of metadata standards relevant to NFDI](https://docs.google.com/spreadsheets/d/1mWpqGqsl_y17YI2-9XE8RFucIUy-qJtQ64bI0OvcrL0/edit?gid=103618958#gid=103618958) was compiled during the initialisation phase of PID4NFDI. It contains a list of metadata standards that are applied within NFDI repositories, a list of PID provider defined metadata standards, and a list of working groups around metadata issues. The catalog is treated as a living document and will be continuously updated within the current project phase. For example, a list of metadata mappings will be added, and the current tables will be extended. The catalog can act as guidance for stakeholders to address questions around metadata standards, such as:
            * I want to develop a service that will issue PIDs and l am looking for a discipline specific or generic metadata standard to use. Which standards are used in NFDI by the other consortia and by which specific services? Which are the most popular standards used within NFDI? If I decide for standard X, which other services or consortia will my service be interoperable with, such that data can flow seamlessly between them?
            * I am not sure which PID provider my organization should work with. Which provider has its own metadata schema and where can I find it? Do they have a mapping I can use?
            * I am interested in joining a metadata group. Which groups do other NFDI consortia engage with and are those groups discussing discipline specific metadata issues?
            
            The catalog was part of the deliverables in the initialisation phase of PID4NFDI. For the deliverable, see: [_Catalog of Metadata Standards Relevant to NFDI (D2.2)_](/publication/2024-boehm-b/)

    design:
      columns: '1'

  - block: markdown
    content:
        title: Metadata Working Groups within NFDI
        text: |
            Of the sections of the NFDI, which work on cross-sectional topics across the consortia, the one most relevant in terms of PIDs is the section [_(Meta)data, Termino­­lo­gies, Provenance_](https://www.nfdi.de/section-meta/?lang=en). The section includes all consortia and communities and strives for connecting and harmonizing the developments in consortia that work with similar data structures, standards and tools in the topics of the section. Its goals are concepts and recommendations for the harmonization of (meta)data and the evaluation of existing approaches and best practices for the NFDI and beyond, among others. These goals are pursued in the section's different working groups.
    design:
      columns: '1'

---