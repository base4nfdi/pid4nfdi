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

          <br/>

          ## 📚 Resources 
          
          The following resources provide you with useful information on how to register and manage instrument PIDs.
    
          - **Comprehensive Summary**: The [PID4NFDI Cookbook](https://pid4nfdi-training.readthedocs.io/en/latest/pidinst.html) is a good starting point to get an overview of instrument PIDs and how to register them.
          
           <hr style="height:0px; visibility:hidden;" />

          - **Use-Case reports**: Our use-case reports give insights into how PIDs for instruments are implemented in two real-world examples. 
    
            - Use-case: [DataCite DOIs for instruments at the Helmholtz Zentrum Berlin für Materialien und Energie](https://pid.services.base4nfdi.de/community/use-cases/instruments-at-hzb/)  
            
            - Use-case: Assigning ePIC PIDs via B2INST for instruments at the NFDI4Earth Sensor Management System *[coming soon]* 
    
          <hr style="height:0px; visibility:hidden;" />

          - **Recommendations and examples for instrument metadata**: To make optimal use of instrument PIDs, it is crucial to fill in the metadata fields carefully. This is not always easy, especially as there did not exist much guidance on this topic so far. 
            
            - Recommendations: Linking instrument PIDs to other research entities *[coming soon]*
            
            - Recommendations: Optimal use of DataCite metadata fields for instruments *[coming soon]*

          <br/>      

          ## ⚙️ Services and Tools 
          
          As part of the PID4NFDI project, we are providing tools for the NFDI and the broader research community for creating, managing and exploring instrument PIDs:
      
          - [B2INST]({{<ref "#B2INST" >}}) and [DataCite]({{<ref "#DataCite" >}}): Assign PIDs to your research instruments.

          - [Federated Search]({{<ref "#federated" >}}): Explore instruments registered with either DataCite or B2INST, find connections to other research outputs or examine instrument metadata statistics.

          <br/>

          ## 💬 Support

          If you have questions about instrument registration or would like to set up a consultation meeting regarding instrument registration at your institution, please contact us at pid4nfdi@lists.nfdi.de or via our [contact form](https://pid.services.base4nfdi.de/about/contact/). 

  - block: markdown
    content:
        title: B2INST 
        subtitle: Create and Manage Instrument PIDs
        text: |
          ## {#B2INST}
          [B2INST](https://b2inst.gwdg.de/) is a service offered by EUDAT that enables researchers and institutes to register their instruments and to be able to persistently refer to these registrations in other services or publications. The tool assigns an ePIC PID to each registered instrument. It is free and open to everyone, with various log-in options available. 

          B2INST can be used by institutions and researchers alike. 

          - As an individual researcher, you can register a PID for your personal research instruments via the user interface or API. 

          - If you would like to assign PIDs for many instruments at your institution, you have the possibility to implement an automated workflow which uses the B2INST API to automatically assign instrument PIDs.

          B2INST adopts the [PIDINST metadata schema](https://doi.org/10.15497/RDA00070). Communities can be used to extend the PIDINST metadata schema with further metadata fields that are relevant for your use-case.  

          ## [Open B2INST](https://b2inst.gwdg.de/)
    design:
      columns: 1 
      
  - block: markdown
    content:
        title: DataCite 
        subtitle: Create and Manage Instrument PIDs
        text: |
          ## {#DataCite}
          
          DataCite enables the registration of DOIs for instruments using its generic metadata schema, either through the Fabrica registration interface or via the REST API. The specific [ResourceType “Instrument”](https://datacite-metadata-schema.readthedocs.io/en/4.6/appendices/appendix-1/resourceTypeGeneral/#instrument) was introduced in schema version 4.5 with metadata requirements [mapped](https://datacite-metadata-schema.readthedocs.io/en/4.6/mappings/pidinst/) to the PIDInst metadata schema. 

          Registering instrument DOIs allows the inclusion of provenance information on instruments and facilitates seamless linking to related resources, such as research data, publications, or other instruments via PIDs.

          Access to DataCite services requires [membership](https://datacite.org/become-a-member/#Types-of-Membership) of DataCite or a [DataCite consortium](https://projects.tib.eu/pid-service/en/tib-doi-konsortium/become-a-member/).

          ## [More Information](https://support.datacite.org/docs/can-i-register-a-doi-for-an-instrument)
         

    design:
      columns: 1 
      
  - block: markdown
    content:
        title: Federated Search
        subtitle: Search and Explore Instrument PIDs
        text: |
          ## {#federated}     
          With the [Federated Search](https://search.pidinst.org), research instruments registered with a PID can be found through a single, unified interface. The platform queries all instrument records from both DataCite and [B2INST]({{<ref "#B2INST" >}}), making key metadata fields from the [PIDINST metadata schema](https://doi.org/10.15497/RDA00070) jointly searchable – namely PID, owner, manufacturer, instrument type, model type, and measured variables. Result lists can be downloaded easily as JSON or (flattened) CSV files.
        
          In the statistics section of this tool, you can explore your search results. Interactive line graphs and frequency tables illustrate the distributions for different metadata fields. You can also filter your data by clicking on table cells to find out more about subsets of your initial sample:

          ![Instruments-1](/images/instruments/search-tool-1.png)

          Figure 1: Selecting a property value dynamically filters the statistics to the corresponding subset of records. Try it out [here](https://search.pidinst.org/plot?instrument_type=Soil+moisture+and+temperature+sensor).  
          
          The index page provides an option to retrieve statistics for all instruments, allowing you to explore the full landscape of registered instruments. For example, you can see how instrument PIDs are still emerging but steadily growing:
          
          ![Instruments-2](/images/instruments/search-tool-2.png)

          Figure 2: The number of registered instruments over time by PID provider (Try it out [here](https://search.pidinst.org/all)).

          While the statistics give an overview of the entire result set, connection plots can be retrieved for individual instrument records. Each plot illustrates how a specific instrument is linked to other PID-identified research resources, enabling you to see, for example, which datasets were generated using that instrument or which publications describe it. Take a look at the connections of the [LSST Camera](https://lsstcam.lsst.io/ ) as an example of a large-scale instrument:

          ![Instruments-3](/images/instruments/search-tool-3.png)
          
          Figure 3: Clicking on a node opens a tab with the landing page of the resource (Try it out [here](https://search.pidinst.org/connections/10.71929/rubin/2571927))

          If you are interested in a detailed explanation of the tool's features and/or the motivation for its provision, you can find our report on it as a deliverable within the PID4NFDI integration phase [here](https://zenodo.org/records/17734216).          

          ## [Open Federated Search](https://search.pidinst.org/)
    design:
      columns: 1
---
