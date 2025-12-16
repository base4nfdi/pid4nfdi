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
        **Persistent Identifiers (PIDs)** are unique, permanent digital references for research resources — from datasets and publications to researchers, institutions, and instruments. They ensure the long-term findability and citability of research outputs, independent of changes in URLs or institutional structures.
        &nbsp;
        <br>
        **The PID Coordination Hub** was developed as part of the **PID4NFDI** project and serves as a central support infrastructure for managing persistent identifiers within Germany's [National Research Data Infrastructure (NFDI)](https://www.nfdi.de/). Our goal is to foster the standardization of PID usage, strengthen governance structures, and promote interoperability among NFDI consortia. By integrating various PID providers and harmonizing metadata practices, we support research institutions in implementing the FAIR principles (Findable, Accessible, Interoperable, Reusable).

        <h2 style="text-align: center;">What we offer</h2>

        <div class="pid-card-grid">
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📘 Fundamentals</h3>
            <p class="pid-description">New to PIDs? Learn why persistent identifiers are important and how they make your research FAIR.</p>
            <div class="pid-actions">
              <a href="https://pid.services.base4nfdi.de/get-pid/start/" class="pid-btn-open" target="_blank" rel="noopener">Learn more</a>
            </div>
            </div>
          
        
        
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🛒 Services</h3>
        <p class="pid-description">Explore the practical solutions we develop to strengthen research data management: </p>
        <ul class="pid-service-list">
            <li><a href="https://pid.services.base4nfdi.de/services/instruments/" target="_blank" rel="noopener">Persistent Identification of Instruments</a></li>
            <li><a href="https://pid.services.base4nfdi.de/services/metadata-support-assessment/" target="_blank" rel="noopener">Metadata Support and Assessment</a></li>
            <li><a href="https://pid.services.base4nfdi.de/services/prefix-registration/" target="_blank" rel="noopener">Prefix Registration</a></li>
        </ul>
          </div>
          
         
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>💬 Community</h3>
        <p class="pid-description">Dive into the core of our collaborative network. The Community section is your hub for connecting with peers and leveraging shared knowledge.</p>
        <ul class="pid-service-list">
            <li><a href="https://pid.services.base4nfdi.de/community/focus-groups/" target="_blank" rel="noopener">Focus groups</a></li>
            <li><a href="https://pid.services.base4nfdi.de/community/support/" target="_blank" rel="noopener">Support</a></li>
            <li><a href="https://pid.services.base4nfdi.de/community/use-cases/" target="_blank" rel="noopener">Use Cases</a></li>
            <li><a href="https://pid.services.base4nfdi.de/community/consortia-services/" target="_blank" rel="noopener">Consortia Services</a></li>
        </ul>
          </div>
          
        
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>📖 Knowledge Base</h3>
        <p class="pid-description">Find practical Training Materials & Guides to implement PIDs, alongside key Publications detailing our latest efforts in the field.</p>
        <ul class="pid-service-list">
            <li><a href="https://pid.services.base4nfdi.de/resources/training-material/" target="_blank" rel="noopener">Training Materials & Guides</a></li>
            <li><a href="https://pid.services.base4nfdi.de/publication/" target="_blank" rel="noopener">Publications</a></li>
        </ul>
          </div>
          
        
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>🗓️ Events</h3>
        <p class="pid-description">Stay informed about our recent and upcoming activities. See below ⬇️</p>
          </div>
                  
         
          <div class="pid-card" data-type="Guide" data-provider="Community" data-domain="Generic" data-lang="EN">
            <h3>ℹ️ About</h3>
        <p class="pid-description">The About section provides a comprehensive overview of the project and its team.</p>
        <ul class="pid-service-list">
            <li><a href="https://pid.services.base4nfdi.de/about/" target="_blank" rel="noopener">About PID4NFDI</a></li>
            <li><a href="https://pid.services.base4nfdi.de/about/roadmap-faqs/" target="_blank" rel="noopener">Roadmap & FAQs</a></li>
            <li><a href="https://pid.services.base4nfdi.de/about/team/" target="_blank" rel="noopener">Team</a></li>
            <li><a href="https://pid.services.base4nfdi.de/about/contact/" target="_blank" rel="noopener">Contact</a></li>
        </ul>
          </div>
         </div>
    

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
    

---