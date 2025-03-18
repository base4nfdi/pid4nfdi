---
title: Contact
date: 2025-03-18

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        Questions? Suggestions? Something else? We're glad to hear from you.
        
        If possible and applicable, please help us reply to your inquiry in the best way possible, by giving us more information about your PID use case or context. For example, answer (some of) the following questions:
        * Is this about a planned PID or an already implemented PID use case or scenario?
        * Do you have any specific challenges you need support for? For example metadata quality and harmonization, interoperability using different PIDs, interoperability of own system with PID provider requirements, training, governance of PIDs (financing, organization requirements)?
        * Do you need support from a specific PID provider? For example concerning metadata interpretation, quality, completeness, reporting?
        * Would you like to present anything at the PID Working Group OpenHour?
        
        <!-- Put form here as HTML, because the hugo template does not support custom URLs for contact forms. -->
        <div class="mb-3">
         <form action="https://pid.nfdiform.techfak.de/create" method="post">
          <div class="container mt-5">
            <div class="form-group row">
              <label for="subject" class="col-sm-2 col-form-label">Subject:</label>
              <input required type="text" id="subject" name="subject" class="form-control col-sm-10" placeholder="Enter subject">
            </div>
            <div class="form-group row">
              <label for="requester" class="col-sm-2 col-form-label">Your name:</label>
              <input required type="text" id="requester" name="requester" class="form-control col-sm-10" placeholder="Enter your name">
            </div>
            <div class="form-group row">
              <label for="organisation" class="col-sm-2 col-form-label">Your organisation:</label>
              <input required type="text" id="organisation" name="organisation" class="form-control col-sm-10" placeholder="Enter the name of your organisation">
            </div>
            <div class="form-group row">
              <label for="nfdi_affiliation" class="col-sm-2 col-form-label">Your NFDI Consortium / Section (if applicable):</label>
              <input required type="text" id="nfdi_affiliation" name="nfdi_affiliation" class="form-control col-sm-10" placeholder="Enter your affiliation within NFDI">
            </div>
            <div class="form-group row">
              <label for="mail" class="col-sm-2 col-form-label">Your contact e-mail:</label>
              <input required type="email" id="mail" name="mail" class="form-control col-sm-10" placeholder="Enter your e-mail">
            </div>
            <div class="form-group row">
              <label for="description" class="col-sm-2 col-form-label">Detailed description of your enquiry:</label>
              <textarea id="description" name="description" class="form-control col-sm-10" rows="3"></textarea>
            </div>
              <div class="form-group row" style="display: none;">
                  <label for="bl4nk" class="col-sm-2 col-form-label">Bot check:</label>
                  <input type="text" id="bl4nk" name="bl4nk" class="form-control col-sm-10" placeholder="">
              </div>
            <button type="submit" class="btn btn-primary col-sm-2 offset-sm-5">Send</button>
          </div>
        </form>
        </div>
        
        Or contact us by email:
        
      email: pid4nfdi@lists.nfdi.de
      #appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
      # Automatically link email and phone or display as text?
      autolink: true
    
    design:
      columns: '1'

  - block: markdown
    content:
      title: Imprint (Legal Notice)
      #subtitle: Imprint for this website – also serves as provider identification according to § 5 Digitale Dienste Gesetz (DDG)
      text: |
            
            <div class="small-text-section">
            
            ## Site Provider:
            <p>Chair of Geoinformatics<br />
            Faculty of Environmental Sciences<br />
            Technische Universität Dresden</p>
            
            <p>Prof. Dr. rer. nat. Lars Bernard<br />
            Helmholtzstraße 10<br />
            01069 Dresden</p>
            
            ## Technical Administrator:
            <p>Daniel Henzen<br />
            Phone: (+49) 351 463 33576<br />
            Email: Daniel.Henzen@tu-dresden.de</p>
            
            ## Content Management:
            <p>PID4NFDI / Base4NFDI</p>
            
            </div>
    
    design:
      columns: '2'

---
