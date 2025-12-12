---
# Leave the homepage title empty to use the site title
title:
date: 2025-12-09
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

        ## What we offer

        <div class="pid-card-grid">
        <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 Fundamentals</h3>
            <p class="pid-description">New to PIDs? Learn why persistent identifiers are important and how they make your research FAIR.</p>
        </div>
        
        <div class="pid-actions">
            <button class="pid-toggle-details" onclick="window.open('https://pid.services.base4nfdi.de/get-pid/start/', '_blank');">Learn more</button>
        </div>
        </div>
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