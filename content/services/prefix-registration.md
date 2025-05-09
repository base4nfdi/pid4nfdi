---
title: Prefix Registration
date: 2025-05-09

type: landing

sections:
  - block: contact
    content:
      title: Prefix Registration
      text: |
        If you are a member of a NFDI consortium and seeking to establish a service for registering persistent identifiers (PIDs) for your PID use case, our prefix registration service offers a rapid path to PID adoption. These PID prefixes, which are based on the Handle System, are provided through the [Persistent Identifier Consortium for eResearch (ePIC)](https://www.pidconsortium.net/), with [GWDG](https://gwdg.de/) serving as the issuing organization.
        
        To obtain a prefix, please complete the form below. You can choose between two types of prefixes:
        1. Test Prefix: Ideal for experimental purposes. PIDs under test prefixes are resolvable but not persistent, allowing you to explore and test the ePIC PID service without long-term commitments.
        2. Productive Prefix: Designed for long-term use. PIDs under productive prefixes are fully persistent, ensuring the longevity and reliability of your identifiers.
        
        We offer free test prefixes (for up to 50.000 PIDs per year) and a limited number of free productive prefixes (for up to 50.000 PIDs per year) for your PID use cases during the project period. However, please note that dedicated contracts with GWDG will be necessary to continue PID generation after the PID4NFDI project concludes, or if more than 50.000 PIDs should be generated. For more detailed information on the ePIC PID service, please also check out our [PID4NFDI Cookbook](/pid4nfdi/get-pid/start).
        
        <!-- Put form here as HTML, because the hugo template does not support custom URLs for contact forms. -->
        <div class="mb-3">
         <form action="https://pidprefix.nfdiform.techfak.de/create" method="post">
          <div class="container mt-5">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Your name:</label>
              <input required type="text" id="name" name="name" class="form-control col-sm-10" placeholder="Enter your name">
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Your contact email address:</label>
              <input required type="email" id="email" name="email" class="form-control col-sm-10" placeholder="Enter your email address">
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Your organisation:</label>
              <input required type="text" id="organisation" name="organisation" class="form-control col-sm-10" placeholder="Enter the name of your organisation">
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Your NFDI consortium:</label>
              <input required type="text" id="nfdi-affiliation" name="nfdi-affiliation" class="form-control col-sm-10" placeholder="Enter your affiliation within NFDI">
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Please give a short description of your PID use case:</label>
              <input type="text" id="description" name="description" class="form-control col-sm-10" placeholder="Enter a short description">
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Select the prefix that you would like to request:</label>
              <select required name="prefix-type" class="form-control col-sm-10">
                <option value="selected disabled hidden>Please select</option>
                <option value="test-prefix">Test prefix (<50.000 PIDs per year)</option>
                <option value="productive-prefix">Productive Prefix (<50.000 PIDs per year)</option>
				<option value="productive-prefix">Productive Prefix (<1.000.000 PIDs per year)</option>
				<option value="productive-prefix">Productive Prefix (>1.000.000 PIDs per year)</option>
              </select>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">I have read and accept the <a href="/privacy/">privacy policy</a>.</label>
              <input required type="checkbox" id="accept-privacy-policy" name="accept-privacy-policy" class="">
            </div>
            <div class="form-group row" style="display: none;">
              <label for="bl4nk" class="col-sm-2 col-form-label">Bot check:</label>
              <input type="text" id="bl4nk" name="bl4nk" class="form-control col-sm-10" placeholder="">
            </div>
            <button type="submit" class="btn btn-primary col-sm-2 offset-sm-5">Send</button>
          </div>
        </form>
        </div>
        
    design:
      columns: '1'

---
