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
            **Persistent Identifiers (PIDs)** are unique, permanent digital references for research resources — from datasets and publications to researchers, institutions, and instruments. They ensure the long-term findability and citability of research outputs, independent of changes in URLs or institutional structures.  
            **The PID Coordination Hub** was developed as part of the **PID4NFDI** project and serves as a central support infrastructure for managing persistent identifiers within Germany's [National Research Data Infrastructure (NFDI)](https://www.nfdi.de/). Our goal is to foster the standardization of PID usage, strengthen governance structures, and promote interoperability among NFDI consortia. By integrating various PID providers and harmonizing metadata practices, we support research institutions in implementing the FAIR principles (Findable, Accessible, Interoperable, Reusable).
            
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
            {{% cta cta_alt_link="./services/prefix-registration" cta_alt_text="Register a prefix" %}}
            </div>
            <div class="col">
            {{% cta cta_alt_link="./community/use-cases" cta_alt_text="Explore use cases" %}}
            </div>
            </div>
            {{< cta cta_alt_link="./about/contact" cta_alt_text="Other questions? Contact us!">}}
    design:
        columns: '1'

#  - block: collection
#    content:
#      title: Latest Blog Posts
#      subtitle:
#      text:
#      count: 3
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
#      view: compact
#      columns: '2'

  - block: collection
    content:
        title: Recent & Upcoming Events
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
