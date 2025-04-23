<!-- PID‑Provider Karten – Logos aus assets/media =======================================
     Variante, die Logos direkt aus dem Hugo‑`assets/`‑Ordner lädt.  
     Vorteil: keine Duplikate in `static/` nötig; Hugo kann die Bilder – falls
     gewünscht – noch optimieren.  
     Hinweis:  .logo enthält nun den Pfad relativ zu assets/, z. B. `media/datacite.png`.
     Im Template wird `resources.Get` verwendet, um `RelPermalink` zu erzeugen. -->

---
title: "PID Providers"
date: 2024-10-09
widget: "blank"
providers:
  - name: "DataCite"
    logo: "media/datacite.png"
    pid_type: "DOI"
    year: 2009
    description: "Globales Non‑Profit‑Consortium zur Vergabe von DOIs für Forschungsdaten und andere Outputs. Unterstützt ROR, ORCID & Cross‑repository‑Suche."
    pid_example: "https://doi.org/10.5438/1dgk-1m22"
    membership: "https://datacite.org/become-a-member/"
    posi: "https://doi.org/10.5438/vy7h-g464"
    url: "https://datacite.org/"
  - name: "ORCID"
    logo: "media/orcid.png"
    pid_type: "ORCID iD"
    year: 2012
    description: "Eindeutige Kennung für Forschende, um ihre Publikationen & Beiträge zu verknüpfen."
    pid_example: "https://orcid.org/0000-0001-2345-6789"
    membership: "https://support.orcid.org/hc/en-us/articles/360006897454-How-do-I-register-for-an-ORCID-ID"
    posi: "https://info.orcid.org/orcids-self-assessment-of-the-posi-principles/"
    url: "https://orcid.org/"
  # … (alle weiteren Provider analog, logo z. B. "media/ror.png")
---

> Persistent identifiers (PIDs) are provided by different organizations (\*PID providers\*). One provider may cover several PID types, and one PID type can be offered by multiple providers. The list is work‑in‑progress – suggestions welcome!

<style>
.providers{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-block:1.5rem;list-style:none;padding:0}
.provider-card{background:var(--card-bg,#fff);border:1px solid #e5e7eb;border-radius:.75rem;padding:1.25rem;box-shadow:0 2px 4px rgb(0 0 0 / 5%);transition:transform .15s,box-shadow .15s}
.provider-card:hover{transform:translateY(-2px);box-shadow:0 4px 10px rgb(0 0 0 / 8%)}
.provider-logo{max-width:120px;height:auto;margin-bottom:.5rem;object-fit:contain}
.provider-card h3{margin:0 0 .25rem;font-size:1.125rem}
.provider-meta{font-size:.875rem;color:#666;margin-bottom:.5rem;line-height:1.35}
.provider-links a{display:inline-block;font-size:.75rem;margin-right:.75rem;margin-top:.5rem;text-decoration:none}
.provider-links a:hover{text-decoration:underline}
</style>

<ul class="providers">
  {{ range sort .Params.providers "name" }}
    <li class="provider-card">
      {{ with .logo }}
        {{ $img := resources.Get . }}
        <img class="provider-logo" src="{{ $img.RelPermalink }}" alt="Logo {{ $.name }}" loading="lazy" decoding="async">
      {{ end }}
      <h3>{{ .name }}</h3>
      <div class="provider-meta">
        {{ with .pid_type }}PID‑Typ: {{ . }}<br>{{ end }}
        {{ with .year }}Start: {{ . }}<br>{{ end }}
      </div>
      <p>{{ .description }}</p>
      <div class="provider-links">
        {{ with .pid_example }}<a href="{{ . }}" target="_blank" rel="noopener">PID‑Beispiel ↗</a>{{ end }}
        {{ with .membership }}<a href="{{ . }}" target="_blank" rel="noopener">Mitglied / Register ↗</a>{{ end }}
        {{ with .posi }}<a href="{{ . }}" target="_blank" rel="noopener">POSI ↗</a>{{ end }}
      </div>
      <a href="{{ .url }}" target="_blank" rel="noopener" style="display:inline-block;margin-top:.75rem;font-weight:600">Website ↗</a>
    </li>
  {{ end }}
</ul>

<!-- Tipp: Wenn du Bildoptimierung (WebP) willst, ersetze oberhalb resources.Get
     durch z. B.  {{ $img := (resources.Get .).Fit "240x" }}  und nutze dann
     $img.RelPermalink. -->

#---
#title: PID Providers
#date: 2024-10-09
#type: landing

#sections:
#  - block: markdown
#    content:
#        title: PID Providers
#        text: |
#            Persistent identifiers (PIDs) are provided by different organizations, so called PID providers. While often one provider focuses on one type of PID, a provider could have a service range offering several different types of PIDs. Vice versa, one type of PID can be offered by more than one provider, such as in the case of DOIs, but could also be exclusive to one particular provider, such as in the case of ORCID. The following table gives an overview of PIDs and PID providers. Please note that this list is not comprehensive and is a work in progress. We welcome any suggestions for additional PIDs or providers that could be added to this list.
            
#            | **Provider** | **Description** | **Year started** | **Example for PID** | **Register / Membership Info** | **Alignment with POSI Principles** |
#           |--------------|-----------------|------------------|---------------------|--------------------------------|------------------------------------|
#            | <span style="text-align: center;">[DataCite](https://datacite.org/)</span><br /><br />![](datacite.png) | DataCite is a global non-profit organization that provides persistent identifiers (DOIs) for research data and other scholarly outputs, helping to improve the discoverability, accessibility, and reuse of research. It collaborates with institutions, researchers, and data centers to make data a first-class research output through the use of metadata and persistent identifiers. | 2009 | https://doi.org/10.5438/1dgk-1m22 | [_DataCite: Become a Member_](https://datacite.org/become-a-member/) | [_DataCite’s commitment to The Principles of Open Scholarly Infrastructure_](https://doi.org/10.5438/vy7h-g464) |
#            | <span style="text-align: center;">[ORCID](https://orcid.org/)</span><br /><br />![](orcid.png) | ORCID iD (Open Researcher and Contributor ID) is a unique identifier for researchers, used to track their publications and contributions. | 2012 | https://orcid.org/0000-0001-2345-6789 | [_How do I register for an ORCID ID_](https://support.orcid.org/hc/en-us/articles/360006897454-How-do-I-register-for-an-ORCID-ID) | [_ORCID's Self-Assessment of the POSI Principles_](https://info.orcid.org/orcids-self-assessment-of-the-posi-principles/) |
#            | <span style="text-align: center;">[ROR (Research Organization Registry)](https://ror.org/)</span><br /><br />![](ror.png) | ROR is a global, community-led registry of open persistent identifiers for research organizations. | 2019 | https://ror.org/04achrx04 | [_ROR: Registry_](https://ror.org/registry/) | [_Aligning ROR with the Principles of Open Scholarly Infrastructure_](https://doi.org/10.71938/n0kg-4k60) |
#            | <span style="text-align: center;">[Persistent Identifiers for eResearch (ePIC)](https://www.pidconsortium.net/)</span><br /><br />![](epic.png) | ePIC was founded in 2009 by a consortium of European partners in order to provide PID services for the European Research Community, based on the handle system (TM, https://www.handle.net/), for the allocation and resolution of persistent identifiers. The consortium signed a Memorandum of Understanding aiming to provide long term reliability for the PID services. Meanwhile ePIC is an international consortium and open to partners from the research community worldwide. | 2009 | https://hdl.handle.net/21.11101/0000-0007-D649-6 | [_European Persistent Identifier Consortium Documentation_](https://doc.pidconsortium.eu/) |  |
#            | <span style="text-align: center;">[Wikidata](https://www.wikidata.org/)</span><br /><br />![](wikidata.png) | Wikidata is a free, collaborative knowledge base that stores structured data to support Wikimedia projects like Wikipedia, enabling machine-readable access to information. It serves as a centralized source for data that can be reused across different languages and platforms​. | 2012 | https://www.wikidata.org/wiki/Q3914 | Anyone can use it |  |
#            | <span style="text-align: center;">[ARK](https://arks.org/)</span><br /><br />![](ark.png) | A PID system designed for identifying information objects, particularly in the context of long-term preservation. | 2001 | https://n2t.net/ark:/99166/w66d60p2 | [_ARK: Getting started_](https://arks.org/about/getting-started-implementing-arks/) |  |
#            | <span style="text-align: center;">[Crossref](https://www.crossref.org/)</span><br /><br />![](crossref.png) | Crossref is a non-profit organization that provides Digital Object Identifiers (DOIs) for scholarly publications, making it easier to cite, link, and discover research outputs. It works with publishers and research organizations to ensure that scholarly content is properly registered and tracked across the global research ecosystem. | 1999 | https://doi.org/10.1038/sdata.2016.18 | [_Crossref: Setting up as a member_](https://en.wikipedia.org/wiki/Crossref) |  |
#            | <span style="text-align: center;">[URN (Uniform Resource Name)](https://www.dnb.de/DE/Professionell/Services/URN-Service/urn-service_node.html)</span><br /><br />![](urn.png) | A type of URI (Uniform Resource Identifier) that provides a persistent, location-independent resource name. | 1997 | [https://nbn-resolving.org/urn:nbn\:de\:bvb:91-diss20060308-1417541491](https://nbn-resolving.org/urn:nbn:de:bvb:91-diss20060308-1417541491) |  |  |
#            | <span style="text-align: center;">[IGSN](http://igsn.org/)</span><br /><br />![](igsn.png) | An IGSN ID is a globally unique and persistent identifier for material samples. The core purpose of the IGSN ID is to enable transparent and traceable connections between research activities and objects, including samples, collections, instruments, grants, data, publications, people, and organizations. Through the partnership between IGSN e.V. and DataCite, IGSN IDs are functionally DOIs and registered through DataCite services. | 2011 | http://igsn.org/ICDP5054ECYD101 | [_IGSN: Membership_](https://ev.igsn.org/membership) |  |
#            | <span style="text-align: center;">[PIDA](https://purls.helmholtz-metadaten.de/)</span><br /><br />![](pida.png) | PIDA is a service for providing web resources with Permanent URLs (PURLs), to ensure they remain available and can be accessed reliably remain available for future access by both humans and machines. | 2022 | https://purls.helmholtz-metadaten.de/[prefix]/[subdirectory] | Free of charge |  |
#            | <span style="text-align: center;">[EUPID](https://services.eupid.eu/)</span><br /><br />![](eupid.png) | EUPID is a privacy-preserving record linking service designed for managing pseudonymous patient identities in clinical and research settings. It provides a secure way to manage patient identities across different contexts while ensuring data privacy and interoperability. EUPID services can be integrated into existing services and platforms using an API. EUPID has been designed to facilitate secondary use of datasets in Biomedical Research and Healthcare by addressing the following major requirements: No universal patient ID; Distinct pseudonyms for different registration contexts; Privacy-preserving record linkage algorithm; Re-identification by a trusted third party; Protected link between the different pseudonyms; Merged datasets for secondary use | 2017 | https://ror.org/04achrx04 | license model |  |

#sections:
#  - block: markdown
#    content:
#        title: PID Providers
#        text: |
#            Persistent identifiers (PIDs) are provided by different organizations, so called PID providers. While often one provider focuses on one type of PID, a provider could have a service range offering several different types of PIDs. Vice versa, one type of PID can be offered by more than one provider, such as in the case of DOIs, but could also be exclusive to one particular provider, such as in the case of ORCID. The following table gives an overview of PIDs and PID providers. Please note that this list is not comprehensive and is a work in progress. We welcome any suggestions for additional PIDs or providers that could be added to this list.
#            
#            <iframe class="airtable-embed" src="https://airtable.com/embed/applO9hvRa7mWleNZ/shrjnkx6iKFyYw7wC?viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

---
