---
# Leave the homepage title empty to use the site title
title:
date: 2024-07-15
type: landing

sections:
  - block: hero
    content:
      title: PID4NFDI
      image:
        filename: pid4nfdi_small.jpg
      text: |
        … is a basic service for persistent identifiers (PIDs) in development for the German National Research Data Infrastructure ([Nationale Forschungsdaten&shy;infrastruktur – NFDI](https://www.nfdi.de/?lang=en)). We are currently working on building a NFDI foundation service on established PID infrastructures to offer various services related to PIDs for stakeholders in the NFDI.

        {{% cta cta_link="./about/" cta_text="Read more" %}}
  
  - block: markdown
    content:
      title: What are PIDs?
      text: |
        A persistent identifier, or short PID, is a unique alphanumeric code that makes it possible to uniquely and sustainably reference objects, persons and organizations. Importantly, a PID is linked to descriptive information (metadata) about the resource, thereby providing context information. The use of PIDs is growing steadily and is being extended to more and more areas of research, for example through the development of PIDs for samples, data management plans or research projects.

        Hence, a growing variety of resource types/entities are covered by PIDs. Among them are: research data, instruments, cultural objects, data management plans, organisations, projects, persons, physical objects (samples), publication services and repositories, research information systems, research tools (such as electronic lab notebooks), scientific events, software, text publications. The use of PIDs is an essential component for the implementation of the [FAIR principles](https://www.go-fair.org/fair-principles/) that promote the findability, accessibility, interoperability and re-usability of research data. The mandatory and standardized metadata associated with PIDs make research data findable, accessible and citable.

        You can learn more about PIDs, their use cases and technical implementation at our partners [PID Network Germany](https://www.pid-network.de/en/) and the [PID Competence Center of TIB](https://projects.tib.eu/pid-service/en/persistent-identifiers/persistent-identifiers-pids/). Or watch this introductory video [_The power of PIDs_](https://doi.org/10.5281/zenodo.3977942) by the [FREYA project](https://www.project-freya.eu/):
        
        {{< video src="https://zenodo.org/records/3977942/files/FREYA%20-%20The%20power%20of%20PIDs%20-%20V05_1.mp4" controls="yes" >}}

    design:
      columns: '1'
  
#  - block: collection
#    content:
#      title: Latest Blog Posts
#      subtitle:
#      text:
#      count: 5
#      filters:
#        author: ''
#        category: ''
#        exclude_featured: false
#        publication_type: ''
#        tag: ''
#        folders:
#          - blog
#      offset: 0
#      order: desc
#    design:
#      view: card
#      columns: '1'

#  - block: collection
#    content:
#      title: Latest Publications
#      text: ""
#      count: 5
#      filters:
#        folders:
#          - publications
#        #publication_type: 'article'
#    design:
#      view: list
#      columns: '1'

  - block: markdown
    content:
      title: About
      subtitle: PID4NFDI – Persistent Identifier Services for the German National Research Data Infrastructure
      text: |
        {{% cta cta_link="./about/" cta_text="More about the project" %}}
        {{% cta cta_link="./publications/" cta_text="Latest publications" %}}
        {{% cta cta_link="./people/" cta_text="Meet the team" %}}
        {{% cta cta_link="./contact/" cta_text="Contact us" %}}
    design:
      columns: '1'
---
