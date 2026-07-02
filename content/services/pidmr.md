---
title: PID Metaresolver
date: 2026-04-21
type: landing

sections:
  - block: markdown
    content:
      title: PID Metaresolver
      text: |
        The [PID Metaresolver (PIDMR)](https://pidmr.argo.grnet.gr/) is a technical service that can be used to resolve 
        PIDs irrespective of the PID system in use (e.g., it can resolve DOIs, ORCIDs, ePIC PIDs, and many more). It 
        accepts a PID as input, detects the corresponding PID system or provider, and exposes standardised resolution 
        methods to retrieve the PID’s landing page, associated metadata, or, where supported, the referenced digital 
        object itself. Currently, the PIDMR supports approximately 50 different types of PIDs. The full list can be found 
        [here](https://pidmr.argo.grnet.gr/supported-pids). 
        
        The PIDMR has been developed as a component of the European [FAIRCORE4EOSC](https://faircore4eosc.eu/) project and is offered to the NFDI 
        community and beyond through the PID4NFDI service platform. PID4NFDI contributes to the further development of 
        the PIDMR.

        <br/>
        
        The PIDMR has the following service capabilities:
          - [User interface](https://pidmr.argo.grnet.gr/): PIDMR can be used for quick detection and resolution of single 
            PIDs with one of three modes: a) Get PID's landing page b) Get PID's metadata, c) Get PID's resource.  
          - [API for workflow integrations](https://api.pidmr.argo.grnet.gr/swagger-ui/): A machine-accessible API 
            provides unified resolution and detection, allowing to integrate programmatic PID resolution into data 
            processing pipelines and other research infrastructures.
          - [PID provider API](https://api.pidmr.argo.grnet.gr/swagger-ui/): Registered administrators can contribute by 
            incorporating PID Provider resolution mechanisms into the tool.
---
