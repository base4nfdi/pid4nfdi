---
title: "IGSN"
date: 2026-02-25
type: "landing"

sections:
  # 1) Intro / overview block
  - block: markdown
    content:
      title: IGSN Communities, Services, and Training Material
      text: |
        The International Generic Sample Number (IGSN) is a globally unique, persistent identifier for physical samples - rock samples, sediment cores, water samples, biological specimens, cultural heritage objects, and many more.
             
        ## They enable:

        - persistent citation of samples
        - interoperability across repositories
        - integration into the global PID ecosystem
        - machine-actionable linking between samples, datasets, publications, projects, people and instruments


        ## This page serves as:

        - a mapping of IGSN-related activities within and around NFDI
        - an overview of available IGSN services
        - a curated collection of training and guidance materials
        - a coordination space for ongoing and planned activities

  # 2) block A
  - block: markdown
    content:
      title: 🌐 International Coordination, Governance and Technical Infrastructure
      subtitle: 
      text: |

        #### IGSN e.V.
        - Governing body of the IGSN system and metadata schema
        - Defines policies, governance and development roadmap
        - Provides documentation and resources
        - https://ev.igsn.org/


        <hr style="height:0px; visibility:hidden;" />

        #### DataCite

        DataCite became the technical registrar for IGSN IDs in 2022. Any DataCite member repository can register IGSN IDs, provided they meet the metadata requirements.

        - Service: DataCite IGSN ID: https://support.datacite.org/docs/igsn-ids
        - Metadata recommendations: https://support.datacite.org/docs/igsn-id-metadata-recommendations
       
        <hr style="height:0px; visibility:hidden;" />

# 2) block B
  - block: markdown
    content:
     title: 🧩 Communities Working with IGSNs
     subtitle: 
     text: |
    

        ## 
        IGSNs are used across a wide range of scientific domains. Below is an overview of active communities and initiatives.

        #### Earth and Environmental Sciences
        IGSNs originated in the geoscience community and remain most widely adopted here. Key institutions and projects include:

        - GFZ German Research Centre for Geosciences - One of the leading IGSN implementers in Germany. GFZ Data Services operates an IGSN service and has published detailed implementation exemplars (see the DataCite blog post on https://datacite.org/blog/igsn-id-implementation-exemplars-gfz-data-services/). GFZ also hosts the IGSN e.V. secretariat.
        - Helmholtz Metadata Collaboration (HMC) – Earth and Environment Hub – Operated the FAIR WISH project (with partners AWI, Hereon and GFZ), which developed discipline-specific IGSN metadata schemas and semi-automated workflows for IGSN registration. FAIR WISH results feed into the follow-up project FAIR AIMS.
        - NFDI4Earth – The German NFDI consortium for Earth System Sciences. Its User Support Network (USN) at GFZ Data Services provides support for IGSN assignment to physical samples and collections.

        #### Archaeology / Cultural Heritage
        A growing international community is establishing IGSN use for cultural heritage samples:
        
        - Heritage Samples / E-RIHS – An international consortium (including CNRS, Getty Conservation Institute and others) is building an IGSN service for cultural heritage. A rough landing page exists at heritagesamples.org. A community survey to reach relevant communities is being prepared.
        - The crosswalks between the IGSN core schema and heritage metadata have been published: https://doi.org/10.5281/zenodo.17446558 
        - The original Archaeology metadata schema: https://doi.org/10.5281/zenodo.17254975 
        - A working Heritage Samples Data Architecture (HSDA) profile on GitHub: https://github.com/E-RIHS/HSDA/blob/main/schema/Sample-v0.8.schema.json

# 2) block C
  - block: markdown
    content:
     title: ⚙️ IGSN Services
     subtitle: 
     text: |
        
        #### Registering IGSN IDs with DataCite
        https://support.datacite.org/docs/igsn-id-registration-guide

        #### GFZ Data Services - Sample Catalogue
        https://dataservices.gfz-potsdam.de/igsn-new/

        #### Uni Kiel IGSN Service
        - The Kiel IGSN service is operated by the Zentralen Forschungsdatenmanagement und Rechenzentrums at Christian-Albrechts-Universität zu Kiel.
        - Documentation (DE): https://igsn.uni-kiel.de/documentation/de/

        #### ARDC IGSN Service (Australia)
        The Australian Research Data Commons (ARDC) provides a dedicated IGSN service, primarily for Australian researchers but relevant as a reference implementation.
        - Service documentation: https://documentation.ardc.edu.au/igsn/igsn-service-overview
        - IGSN Service Access: https://documentation.ardc.edu.au/igsn/igsn-service-access
        - Metadata guide: https://documentation.ardc.edu.au/igsn/igsn-descriptive-metadata


# 2) block D
  - block: markdown
    content:
     title: 🚀 Projects that foster IGSN implementation
     subtitle: 
     text: |

        #### FAIR-Impact
        FAIR-Impact
        FAIR-Impact is a European project supporting the practical implementation of FAIR principles across research infrastructures, including guidance, support actions, and community coordination relevant to persistent identifiers such as IGSNs.        
        https://fair-impact.eu/ 

        #### FAIR WISH
        FAIR WISH (FAIR Workflows for IGSN-based Sample Handling) was a Helmholtz-led project that developed domain-specific IGSN metadata profiles and semi-automated workflows to facilitate standardized sample registration and interoperability in Earth and environmental sciences.        
        https://helmholtz-metadaten.de/de/inf-projects/fair-wish 
        
        #### FAIR AIMS
        FAIR AIMS builds on the outcomes of FAIR WISH to further operationalise IGSN-based sample identification by refining metadata profiles, improving integration into infrastructure workflows, and strengthening cross-community adoption.        
        https://www.gfz.de/sektion/daten-und-informationsmanagement/projekte/fair-aims 


# 2) block C
  - block: markdown
    content:
     title: 📚 Existing Training Material
     subtitle: 
     text: |

        ##### Forschungsdaten.org        
        - https://www.forschungsdaten.org/index.php/IGSN 

        ##### IGSN e.V.        
        - https://ev.igsn.org/resources

        ##### DataCite
        - Support: https://support.datacite.org/docs/igsn-ids        
        - Implementation example GFZ: https://datacite.org/blog/igsn-id-implementation-exemplars-gfz-data-services/        
        - Metadata Recommendations: https://support.datacite.org/docs/igsn-id-metadata-recommendations

        ##### Helmholtz HMC Earth and Environment
        - FAQ page: https://helmholtz-metadaten.de/de/erde-und-umwelt/faq-igsn        
        - HMC wiki on IGSN: https://earth-and-environment.helmholtz-metadaten.de/wiki/doku.php?id=wiki:1_fair-building-blocks:0_pid:3_igsn:start

        ##### Output of FAIR WISH project (Helmholtz) 
        - https://helmholtz-metadaten.de/inf-projects/fair-wish        
        - https://meetingorganizer.copernicus.org/EGU23/EGU23-13514.html        
        - https://helmholtz-metadaten.de/inf-projects/fairaims
      
        ##### IGSN Service der Universität Kiel
        Dokumentation des IGSN-Dienstes des Zentralen Forschungsdatenmanagements und Rechenzentrums der Christian-Albrechts-Universität zu Kiel
        https://igsn.uni-kiel.de/documentation/de/

        ##### ARDC
        - https://documentation.ardc.edu.au/igsn/igsn-service-overview         
        - Descriptive Metadata for Earth Science: https://documentation.ardc.edu.au/igsn/igsn-descriptive-metadata

        ##### Archeology
        - development of an international IGSN service for cultural heritage: https://heritagesamples.org/     
        - crosswalks https://zenodo.org/records/17446558        
        - original Archaeology metadata schema https://zenodo.org/records/17254975        
        - working profile for heritage samples on GitHub: https://github.com/E-RIHS/HSDA/blob/main/schema/Sample-v0.8.schema.json

       

        <!-- Contact text / contact form / email -->



  
    
---