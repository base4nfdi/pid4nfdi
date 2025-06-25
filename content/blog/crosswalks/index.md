---
# Documentation: https://docs.hugoblox.com/ and https://gohugo.io/content-management/

title: "Background"
subtitle: ""
summary: "Background of Crosswalks etc."
authors: ["sara"]
tags: ["PID4NFDI", "information", "NFDI", "Base4NFDI"]
categories: []
date: 2025-06-19
#lastmod: 2025-06-19

# Draft?
draft: false

# Show publish date?
show_date: true

# Show reading time?
reading_time: true

# Display in the Featured block on the homepage?
featured: true

# Hide in search results?
private: false

# Show social sharing links?
share: false

# Show author profile (photo and bio) under the content? Edit your author profiles in the content/authors/ folder. Then reference their folder names with the authors front matter option above.
profile: false

# Show a link to the next article in the series?
pager: false

# Show recommendations for related content?
show_related: false

# Featured image
#   To use, add an image named `featured.jpg/png` to your page's folder.
#   Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), reuses [work by Premeditated](https://w.wiki/CvkA)"
  focal_point: ""
  preview_only: false
  alt_text: ""

# Projects
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

It has been an eventful and fruitful first year for PID4NFDI, the basic service for persistent identifiers in development for [NFDI](https://www.nfdi.de/), the German National Research Data Infrastructure. PID4NFDI completed its first [service development phase](https://base4nfdi.de/process), the initialisation phase, at the end of 2024 and now heads into a second term, the two-year integration phase running in 2025 and 2026. In this blog post, we review and summarise PID4NFDI’s activities and outputs from the initialisation phase and preview what’s to come in the next two years.

<!--more-->

## 📚 1. Start with Metadata

DataCite metadata is structured data in JSON. It tells us things like:

{
  "title": "Climate Data 2024",
  "creator": "Alice Smith",
  "publicationYear": "2024"
}

This is useful, but only humans (or systems programmed specifically for this format) know what these fields mean.


## 🧠 2. Add Meaning with an Ontology

An ontology defines:

* What creator means (e.g., it refers to a Person)
* What title means (e.g., it’s a label for a resource)
* How these things relate (e.g., every Dataset must have at least one title)

It uses **RDF, RDFS, and OWL** to formalize this. Once you do that, machines can understand the structure and the meaning. This is great for automated reasoning, quality checks, and linking with other systems.

### PID Landscape Survey and Stakeholder Requirements
fgrefgdrrgr

### Guides and Training

As a practical guide designed to help individuals and organizations to get started with PID registration and usage, PID4NFDI created the [**PID4NFDI Cookbook**](https://pid4nfdi-training.readthedocs.io/en/latest/). It provides support for understanding what PIDs are, why they are important for long-term access and citation of digital resources, and how to integrate them into your workflows. Also check out our [overview of PID services and providers](../../get-pid/services-provider/).

PID4NFDI plans a modular, multi-level training approach to promote the effective use of PIDs across NFDI. The [**PID4NFDI Training Concept**](https://doi.org/10.5281/zenodo.14267399) describes a roadmap for the development of according training offers and support services.

### Use Case Analyses

Four different **PID use cases within NFDI** have been analysed by PID4NFDI in close collaboration with stakeholders from the respective consortia. Two of the use case analyses focus on an evaluation of the metadata quality and completeness (in the consortia FAIRagro and for the StrainInfo service within NFDI4Microbiota), while one takes a closer look at an example of PID adoption in the Text+ consortium and another one focuses on a PID registration service for dataset elements as offered by KonsortSWD. The use case analyses have been published as individual reports:
- [FAIRagro Metadata Analysis](https://doi.org/10.5281/zenodo.14506202)
- [StrainInfo Metadata Analysis](https://doi.org/10.5281/zenodo.14357800)
- [PID Adoption in the Text+ Consortium using the Example of SUB Göttingen](https://doi.org/10.5281/zenodo.14327691)
- [KonsortSWD Persistent Identifier Registration Service for Dataset Elements](https://doi.org/10.5281/zenodo.14327770)

### Technical Implementation and Metadata Interoperability

To support and enhance technical implementation of PIDs and metadata interoperability, PID4NFDI has published a **concept for metadata interoperability, harmonization and technical integration of PID infrastructure**. A [recently published report](https://doi.org/10.5281/zenodo.14506138) presents the conceptual framework, which integrates insights from community surveys, interviews with use case partners, and extensive engagement with NFDI consortia members.

As an accompanying resource, a **catalogue of metadata standards relevant to NFDI** was developed. The [catalogue itself](https://docs.google.com/spreadsheets/d/1mWpqGqsl_y17YI2-9XE8RFucIUy-qJtQ64bI0OvcrL0/edit?gid=103618958#gid=103618958) (currently made available as a spreadsheet Google Docs) lists discipline-specific and generic metadata standards and is [supplemented by a document](https://doi.org/10.5281/zenodo.14512768) which introduces, describes and contextualises the catalogue, and links to the actual catalogue itself.

You can find out more about PIDs and metadata in our [metadata guide](../../services/metadata-support-assessment/).

### Governance, Business Models, Licensing

Another task of PID4NFDI is the analysis and documentation of governance, business, and license models of various PID providers and types. Complementing our [overview of PID services and providers](../../get-pid/services-provider/) and similar upcoming support resources, a **companion document outlining the conceptual and practical foundations for evaluating and selecting PID providers** [was published](https://doi.org/10.5281/zenodo.14328204). It provides context for the overview of the current landscape of PID providers and types, and focuses on the principles of openness, sustainability, and governance as defined by the Principles of Open Scholarly Infrastructure (POSI).

As groundwork for a future governance structure for integrating PID services in NFDI, a **concept for sustainable PID registration workflows** that align with the NFDI’s governance and funding structure was developed and also [recently published](https://doi.org/10.5281/zenodo.14267446). It outlines framework conditions for an efficient and sustainable PID management within NFDI, the development of a PID selection and integration framework and the subsequent tasks for the PID Coordination Hub as the central point of contact for all questions related to PIDs within NFDI.

## Outlook

After PID4NFDI’s initialisation phase and [another successful funding proposal](../../blog/pid4nfdi-funding-integration-phase/), starting with 2025, PID4NFDI has now progressed to the second phase of [Base4NFDI’s iterative development phase model for service candidates](https://base4nfdi.de/process). In this integration phase, running for two years, we will further enhance PID integration within NFDI consortia, considering varying provider maturity levels and community adoption. We will focus on supporting consortia infrastructure services to integrate PIDs throughout the research data lifecycle, using Data Management Plans (DMPs) and Electronic Lab Notebooks (ELNs) as pilot implementations. Special emphasis will be placed on the integration of PIDs for entities for which PID registration is still emerging, such as research instruments, material samples, highly granular data, as well as projects and awards. Our goal is to boost the impact of PIDs by improving metadata quality and interoperability through technical, organisational, and strategic measures. Furthermore, governance guidelines, outreach efforts, and an extended, modular training concept will promote PID awareness and adoption across disciplines. This approach will be prototyped collaboratively with NFDI consortium partners, ensuring broad applicability within the NFDI framework. These efforts will together form the _PID Coordination Hub_, which will be a central entry point for users of the PID4NFDI service portfolio.

The PID4NFDI service team is looking forward to two more years of fruitful collaborations and discussions and to contributing in furthering the developments of the PID landscape in NFDI and beyond.