---
title: "Persistent Identification of Instruments"
date: 2025-10-16
type: "landing"

sections:
  - block: markdown
    content:
        title: Persistent Identification of Instruments
        text: |
          A Persistent Identifier (PID) for Instruments is a globally unique and enduring reference assigned to scientific instruments, such as sensors, microscopes, or telescopes. It is used for the identification of individual physical devices, not to categorize model types in general. These PIDs ensure that instruments are unambiguously identifiable across various platforms and over time, facilitating data provenance, reproducibility, and proper attribution in research.
          As part of the PID4NFDI project, we are providing the NFDI and the broader research community with two tools for creating, managing and exploring instrument PIDs:
          
          - [Federated Search]({{<ref "#federated" >}}): Explore the PID graph for instruments, which contains instrument PIDs registered with both DataCite and B2Inst.
          
          - [B2INST]({{<ref "#B2INST" >}}): Assign PIDs to your research instruments.

          To learn more about persistent identification of instruments, check out our [PID4NFDI Cookbook](https://pid4nfdi-training.readthedocs.io/en/latest/pidinst.html) for a comprehensive summary, and our two use-case reports which give insights into how PIDs for instruments are implemented for two real-world examples. 
          
          - [instruments at the Helmholtz Zentrum Berlin für Materialien und Energie](https://pid.services.base4nfdi.de/community/use-cases/instruments-at-hzb/) (DataCite DOIs)
          
          - instruments at the NFDI4Earth Sensor Management System (ePIC PIDs with B2INST)

            
  - block: markdown
    content:
        title: Federated Search
        subtitle: Search and Explore Instrument PIDs
        text: |
          ## {#federated}     
          Text here
          
          ## [Open Tool](https://search.pidinst.org/)
    design:
      columns: 1

  - block: markdown
    content:
        title: B2INST
        subtitle: Create and Manage Instrument PIDs
        text: |
          ## {#B2INST}
          B2INST is a service offered by EUDAT that enables researchers and institutes to register their instruments and to be able to persistently refer to these registrations in other services or publications. The tool assigns an ePIC PID to each registered instrument. It is free and open to everyone, with various log-in options available. 

          B2INST can be used by institutions and researchers alike. 

          - As an individual researcher, you can register a PID for your personal research instruments via the user interface or API. 

          - If you would like to assign PIDs for many instruments at your institution, you have the possibility to implement an automated workflow which uses the B2INST API to automatically assign instrument PIDs.

          B2INST adopts the [PIDINST metadata schema](https://doi.org/10.15497/RDA00070). Communities can be used to extend the PIDINST metadata schema with further metadata fields that are relevant for your use-case. If you have questions about instrument registration or would like to set up a consultation meeting regarding instrument registration at your institution, please contact us at pid4nfdi@lists.nfdi.de or via our [contact form](https://pid.services.base4nfdi.de/about/contact/). 

          ## [Open Tool](https://b2inst.gwdg.de/)
    design:
      columns: 1
---
