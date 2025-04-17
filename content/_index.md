---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-29
type: landing

sections:
  - block: hero
    content:
        title: |
            <span style="font-size: 3rem;">Persistent Identifier Services for NFDI</span>
            <br />
            <span style="color: #6c808099; font-size: 1.4rem;">in development</span>
        image:
            filename: PID4NFDI-top-neg.png

  - block: markdown
    content:
        title: PID Coordination Hub
        subtitle: Driving FAIR, Open and Persistent Research Practices
        text: |
            The PID Coordination Hub serves as a centralized infrastructure for managing persistent identifiers (PIDs) within Germany’s National Research Data Infrastructure (NFDI). Developed under PID4NFDI, PID Coordination Hub aims to standardize PID usage, enhance governance, and support interoperability across NFDI consortia. By integrating various PID providers and consolidating metadata practices, it addresses challenges in infrastructure consistency, policy development, and long-term PID management. Through collaborative frameworks, it assists both mature and developing institutions in effectively implementing FAIR (Findable, Accessible, Interoperable, and Reusable) data principles, fostering a unified research data ecosystem.
            
            <div class="row row-cols-3" style="margin: 1rem;">
            <div class="col">
            {{% cta cta_alt_link="./get-pid/start" cta_alt_text="Get started, get a PID" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./get-pid/providers" cta_alt_text="Find a PID provider" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./services/metadata-support-assessment" cta_alt_text="Metadata support and assessment" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./resources/use-cases" cta_alt_text="Explore use cases" %}}
            </div>
            </div>
            
            {{< cta cta_alt_link="./about/contact" cta_alt_text="Other questions? Contact us!">}}
    design:
        columns: '1'
  
  - block: markdown
    content:
        title: What are PIDs?
        text: |
            A persistent identifier, or short PID, is a unique alphanumeric code that makes it possible to uniquely and sustainably reference objects, persons and organizations. Importantly, a PID is linked to descriptive information (metadata) about the resource, thereby providing context information. The use of PIDs is growing steadily and is being extended to more and more areas of research, for example through the development of PIDs for samples, data management plans or research projects.
            
            Hence, a growing variety of resource types/entities are covered by PIDs. Among them are: research data, instruments, cultural objects, data management plans, organisations, projects, persons, physical objects (samples), publication services and repositories, research information systems, research tools (such as electronic lab notebooks), scientific events, software, text publications. The use of PIDs is an essential component for the implementation of the [FAIR principles](https://www.go-fair.org/fair-principles/) that promote the findability, accessibility, interoperability and re-usability of research data. The mandatory and standardized metadata associated with PIDs make research data findable, accessible and citable.
            
            You can learn more about PIDs, their use cases and technical implementation at our partners [PID Network Germany](https://www.pid-network.de/en/) and the [PID Competence Center of TIB](https://projects.tib.eu/pid-service/en/persistent-identifiers/persistent-identifiers-pids/). Or watch this introductory video [_The power of PIDs_](https://doi.org/10.5281/zenodo.3977942) by the [FREYA project](https://www.project-freya.eu/):
            <br>
            
            {{< video src="FREYA_The_power_of_PIDs_540p.mp4" controls="yes" poster="FREYA_The_power_of_PIDs_preview.png">}}
    
    design:
        columns: '2'

  - block: collection
    content:
      title: Latest Blog Posts
      subtitle:
      text:
      count: 3
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
        folders:
          - blog
      offset: 0
      order: desc
    design:
      view: compact
      columns: '2'

  - block: collection
    content:
        title: Upcoming Events
        text:
        count: 3
        filters:
            folders:
                - events
        order: desc
    design:
        view: compact
        columns: '2'

#  - block: collection
#    content:
#      title: Latest Publications
#      text: ""
#      count: 5
#      filters:
#        folders:
#          - publication
#        #publication_type: 'article'
#    design:
#      view: list
#      columns: '1'

  - block: markdown
    content:
        title: About
        subtitle: PID4NFDI – Persistent Identifier Services for the German National Research Data Infrastructure (NFDI)
        text: |
            <div class="row row-cols-4">
            <div class="col">
            {{% cta cta_alt_link="./about/" cta_alt_text="More about the project" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./publication/" cta_alt_text="Latest publications" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./about/team/" cta_alt_text="Meet the team" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./about/contact/" cta_alt_text="Contact us" %}}
            </div>
            </div>
    design:
        columns: '1'

---
