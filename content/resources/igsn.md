<!--
author:   Rorie Edmunds, Torsten Kahlert (adapted for LiaScript)
email:
version:  0.1
language: en
narrator: US English Female
comment:  A practical training module on IGSN IDs for repository managers.
license:  CC BY 4.0
link:     https://creativecommons.org/licenses/by/4.0/

@style
.callout {
  background: #e8f4fd;
  border-left: 4px solid #1a9bd7;
  padding: 0.8em 1em;
  margin: 1em 0;
}
@end
-->

# Registering IGSN IDs: A Guide for Repository Managers

**Authors:** Rorie Edmunds; adopted for LiaScript by Torsten Kahlert | **Version:** 0.1 | **License:** CC BY 4.0

---

Welcome to this training module on **International Generic Sample Numbers (IGSN IDs)**. It is designed specifically for **repository managers** working within or connected to the German National Research Data Infrastructure (NFDI).

By the end of this module you will be able to:

- Explain what an IGSN ID is and how it relates to DOIs
- Identify which objects in your repository can receive an IGSN ID
- Describe the four key purposes IGSN IDs serve for sample management
- Outline the steps your organization needs to take to register IGSN IDs
- Know when to use a Registered Service Provider instead of a custom workflow

> ⏱️ **Estimated time:** 10–15 minutes

---

## 1. What is the IGSN ID?

The **International Generic Sample Number (IGSN ID)** is a globally unique and persistent identifier (PID) for **material samples** — physical objects from any research discipline.

Its core purpose is to enable **transparent and traceable connections** among research activities and related entities: samples, collections, instruments, grants, datasets, publications, people, and organizations.

### The DOI connection

A key fact for repository managers: IGSN IDs are **functionally DataCite DOIs**.

This is the result of a 2021 partnership between **IGSN e.V.** and **DataCite**.
Under this partnership:

- DataCite provides IGSN ID registration through its existing services
- IGSN e.V. focuses on community advocacy and expanding the global samples ecosystem
- IGSN IDs inherit the credibility, wide recognition, and long-term sustainability of the DOI system

> 💡 **Key point:** If your organization already registers DataCite DOIs, you are already most of the way to registering IGSN IDs.

Even if DataCite were to cease operations, all registered IGSN IDs would continue to persist — the same guarantee that applies to all DOIs.

---

## 2. What Can Receive an IGSN ID?

An IGSN ID can be assigned to **any material sample from any discipline**, including both living specimens and lab-synthesized or manufactured materials.

The IGSN ID is assigned to the **physical object itself** — not to images of it, nor to analytical data derived from it.

### Types of assignable objects

**Individual samples**
The most common case. Any single physical specimen, rock, tissue, artefact, prototype, or similar object.

**Sample aggregations**
A collection of related objects that need to be referenced as a whole. Individual samples within the collection become *children* of the parent and can be linked hierarchically in the metadata.

**Sample collection sites**
The physical location where field sampling was carried out. Samples from that site are registered as children of the site record.

**Ephemeral samples**
Samples that no longer exist — for example, consumed or destroyed during analysis — can still receive an IGSN ID, provided the metadata clearly documents the sample's current status.

### Disciplinary scope

The IGSN ID is genuinely cross-disciplinary. Examples include:

- **Physical & Earth Sciences:** rocks, minerals, sediment cores, soil, ice cores, atmospheric/water samples
- **Life Sciences:** tissues, cells, plant specimens, insects, microorganisms
- **Social Sciences & Humanities:** fossils, artefacts, tools, written records
- **Applied Sciences:** seed accessions, synthetic materials, prototypes
- **The Arts:** ceramics, sculptures, musical instruments, fashion/costume items

> 💡 **Key point for repository managers:** Around **13 million** publicly available IGSN IDs have been registered globally to date, with just over **200,000 from Germany** — primarily geoscience and material science samples.

---

## 3. The Four Purposes of IGSN IDs

The IGSN ID addresses four practical problems in sample management. As a repository manager, these map directly to services you may already be providing or planning to provide.

### 3.1 Discovery and Access

An IGSN ID **landing page** gives a sample its digital footprint — it makes the sample part of Open Science by showing that the sample exists and that metadata about it is available.

This is particularly important for **unique samples** where long-term preservation of the object and its associated metadata is critical.

Landing page metadata should be:

- As rich and complete as possible
- Sensitive-information aware (not everything needs to be public)
- Enriched with images, maps/diagrams, and hierarchical relationship views

### 3.2 Inventory and Collection Management

IGSN IDs provide a simple, machine-readable way to link a physical sample with its digital record by encoding the IGSN ID as an **actionable URI** within a QR code or barcode affixed as a label to the sample.

This augments existing inventory and collection management systems without replacing them. Labels should ideally also include the IGSN ID in **human-readable** form alongside any local identifiers.

### 3.3 Unambiguous Sample Identity

Local sample identifiers have limited scope — they are often ambiguous outside an organization, and they frequently change across different stages of the sample management lifecycle.

The IGSN ID solves this by providing a **globally unique, stable identifier** that persists as a sample moves between laboratories, archives, and institutions.

> ✅ **Best practice:** Register IGSN IDs as early as possible in the sample lifecycle — ideally at the point of **collection or creation**. Early registration is the most effective way to avoid ambiguity.

### 3.4 Crosslinking and Citation

IGSN ID metadata enables **structured relationships** to be described between a sample and related research outputs — datasets, publications, parent/child samples — using globally unique identifiers.

This supports:

- Citation of samples in publications
- Showing provenance of research results
- Appropriate attribution to individuals and organizations
- Reuse of samples with confidence

---

## 4. Mid-Course Check ✅

Four questions to consolidate what we have covered so far.

**Question 1**

Which statement about IGSN IDs is correct?

    [( )] IGSN IDs are a completely separate system from DOIs.
    [(X)] IGSN IDs are functionally DataCite DOIs using the same infrastructure.
    [( )] IGSN IDs can only be assigned to geoscience samples.
    [( )] IGSN IDs replace all local sample identifiers and require renaming existing samples.

**Question 2**

A researcher destroyed several soil cores during lab analysis. Can those samples still receive an IGSN ID?

    [(X)] Yes — ephemeral samples can be registered as long as the metadata documents their current status.
    [( )] No — only samples that still physically exist can be registered.
    [( )] Only if photographic evidence was captured before destruction.

**Question 3**

At what point in a sample's lifecycle should an IGSN ID ideally be assigned?

    [( )] After the sample has been published in a journal article.
    [( )] When the sample is transferred to a long-term archive.
    [(X)] At the point of collection or creation — as early as possible.
    [( )] Only once the sample has been assigned a local identifier by the collecting institution.

**Question 4**

Which of the following is NOT a valid use of IGSN IDs?

    [( )] Assigning an identifier to a collection of related archaeological artefacts.
    [( )] Registering the field site where soil samples were collected.
    [(X)] Assigning an identifier to a dataset containing measurements derived from a sample.
    [( )] Registering a synthesized material science sample created in a laboratory.

---

## 5. How to Register IGSN IDs

### Who governs IGSN IDs?

IGSN IDs are governed through a partnership between two German-based associations:

**IGSN e.V.**
An international nonprofit with more than 20 members, operating a central registration system since 2011. It focuses on community advocacy, expanding the global samples ecosystem, and facilitating a *Community of Communities* for standard methods of identifying, citing, and locating material samples. IGSN e.V. is a member of NFDI.

**DataCite e.V.**
A community-led organization operating across more than 60 countries since 2009. Under the partnership, DataCite provides IGSN ID registration through its services and supports their ongoing sustainability. DataCite works with NFDI-related organizations through its involvement in the PID4NFDI project.

### Who can register?

All **DataCite Direct Members**, **Consortium Leads**, and **Consortium Organizations** can register IGSN IDs using DataCite services.

If your organization is not yet part of the DataCite community, the easiest and most cost-effective route for German organizations is to join the **DataCite Consortium led by TIB** (German National Library of Science and Technology) — by far the largest DataCite consortium, with extensive technical support for IGSN ID and DOI registration.

More information: https://datacite.org/become-a-member

> 💡 **Special case:** Individual researchers connected to a **Helmholtz Centre** in the geosciences can reach out to the Data Services at the GFZ Helmholtz > Centre for Geosciences for IGSN ID registration support.

### What does it cost?

IGSN IDs use the **same fee model as DataCite DOIs**. There are no additional membership or service charges. With 1 IGSN ID = 1 DOI, your organization is simply charged for the total number of DOIs + IGSN IDs registered under the standard fee tiers.

---

## 6. How IGSN IDs Work in DataCite Services

### Structure of an IGSN ID

An IGSN ID follows the standard DOI convention:

```
https://doi.org / 10.21384 / AU1234
                  ────────   ──────
                  Prefix     Suffix
```

- **Prefix:** A fixed number starting with `10.` — globally unique to the metadata collection
- **Suffix:** A customizable string that uniquely identifies the sample within that collection

> 💡 **Practical tip:** You can incorporate your organization's existing local sample identifiers as the suffix. The combination of prefix + suffix guarantees global uniqueness, so your internal naming conventions do not need to change.

### The IGSN ID Catalog Repository

The critical technical difference from standard DOI registration:

IGSN IDs must be registered in a **specific DataCite Repository type** called the **IGSN ID Catalog**. This means:

- At least one **IGSN ID Catalog Repository** must be created in DataCite Fabrica
  alongside your existing DOI Repository account(s)
- The IGSN ID Catalog Repository has its own **separate credentials and prefix**
- It must be used **exclusively** for IGSN IDs — and vice versa, IGSN IDs must
  only be registered within an IGSN ID Catalog Repository

This is how IGSN IDs are differentiated within DataCite services — at the metadata collection/prefix level, not at the individual record level.

### DataCite tooling

Because they are DataCite DOIs, IGSN IDs can be created and managed via:

- **DataCite Fabrica** — the web interface
- **DataCite APIs** — for automated/bulk registration
- **Registered Service Providers (RSPs)** — third-party integrations (see Section 7)

IGSN IDs also appear in **DataCite Commons** with dedicated search facets for material samples, parent/child relationships, and connections to other DOIs.

### Metadata

IGSN ID metadata follows the **DataCite Metadata Schema**. The IGSN–DataCite Crosswalk and Metadata Management Working Group has published dedicated **IGSN ID Metadata Recommendations and Best Practices** to help map sample metadata to the schema and ensure high quality and completeness.

---

## 7. Do You Need to Change Existing Workflows?

The short answer for most organizations: **probably not much**.

### Checklist for your organization

Before starting IGSN ID registration, gather the right people — researchers with domain knowledge, data and information specialists — and work through these questions:

- [ ] Can our current DOI registration system handle **multiple Repository credentials and prefixes**? If not, does it need to be modified, or should a new system be created?
- [ ] Should the team managing DOI registration also control the IGSN ID Catalog Repository, or should domain experts manage it?
- [ ] Should the team creating DOI landing pages also build IGSN ID landing pages, or should domain experts handle those?
- [ ] What **metadata sources** are available for sample discovery? (See also: *Integrating Disciplinary Metadata into PID Metadata Schemas*)
- [ ] Is a **common landing page template** feasible, or do different sample types require customized pages?
- [ ] How will we handle **linking related research outputs**, granularity, versioning, and embargos? (See also: *Linking Research Entities & Outputs in PID Metadata*)

---

## 8. Using a Registered Service Provider

If your organization is a DataCite Member or Consortium Organization but
**does not have the capacity** to set up a sample registration workflow,
you can work with one of DataCite's **Registered Service Providers (RSPs)**.

Currently two RSPs offer IGSN ID registration services, both with links to Germany:

**RSpace (Research Space)**
An electronic lab notebook and research data management platform.
Offers IGSN ID registration integrated into sample and inventory management.
→ [RSpace Website](https://www.researchspace.com) |
[IGSN ID Exemplars Blog Post](https://datacite.org/blog/) |
[Samples 101 guidance document](https://datacite.org/blog/)

**SESAR (System for Earth and Extraterrestrial Sample Registration)**
A long-running community sample registry, particularly strong in geosciences.
Can also support **individual researchers** with sample management and IGSN ID registration.
→ [SESAR Website](https://www.geosamples.org) |
[IGSN ID Exemplars Blog Post](https://datacite.org/blog/)

For more information about these RSPs:
📧 support@datacite.org

---

## 9. Benefits Summary: IGSN IDs and FAIR

IGSN IDs help ensure samples adhere to the **FAIR Principles** and the principles of **Open Science**:

| Principle | How IGSN IDs help |
|-----------|-------------------|
| **Findable** | Samples become discoverable and citable over time via landing pages and DataCite Commons |
| **Accessible** | Provides access to samples distributed across multiple repositories and their metadata |
| **Interoperable** | Standard metadata schema enables consistent identification and integration across systems |
| **Reusable** | Enables confident referencing, reuse, and proper attribution |
| **Open** | Metadata is in the public domain under CC0; sample existence is exposed globally |
| **CARE** | Metadata can include Traditional Knowledge or Biocultural Notices and Labels to recognize indigenous data sovereignty |

---

## 10. Final Assessment ✅

**Question 1**

Your organization already registers DataCite DOIs. What additional step is specifically required to start registering IGSN IDs?

    [( )] Register as a new DataCite member with a separate membership fee for IGSN IDs.
    [(X)] Create at least one IGSN ID Catalog Repository in DataCite Fabrica with a separate prefix.
    [( )] Switch all existing DOI registrations to IGSN ID format.
    [( )] Contact IGSN e.V. directly to request a registration token.

**Question 2**

Which of the following suffix strategies for IGSN IDs is explicitly supported?

    [( )] Suffixes must follow a standardized global format defined by IGSN e.V.
    [(X)] Existing local sample identifiers can be incorporated as the suffix.
    [( )] Suffixes are always auto-generated by DataCite Fabrica and cannot be customized.
    [( )] Suffixes must be identical to the sample's DOI suffix if one exists.

**Question 3**

What is the cost implication of registering IGSN IDs for an organization already registered with DataCite?

    [( )] There is an additional annual fee for the IGSN ID service on top of the DataCite membership.
    [( )] IGSN IDs are free of charge — no cost applies regardless of how many are registered.
    [(X)] No additional membership fees apply; IGSN IDs count as DOIs under existing fee tiers.
    [( )] Costs depend on the number of samples and must be negotiated with IGSN e.V. separately.

**Question 4**

Which statement about IGSN IDs and FAIR principles is correct?

    [( )] IGSN IDs only address Findability, since they are primarily a discovery tool.
    [( )] IGSN ID metadata is proprietary and cannot be shared openly.
    [(X)] IGSN IDs support all four FAIR principles as well as Open Science and CARE principles.
    [( )] IGSN IDs are only relevant for Reusability because they enable proper attribution.

**Question 5**

Your repository serves a small geosciences research group without a dedicated data team. They want to register IGSN IDs but cannot build a custom workflow. What is the most appropriate recommendation?

    [( )] Ask them to wait until your organization can build a full integration.
    [( )] Recommend they register IGSN IDs manually one by one via DataCite Fabrica only.
    [(X)] Direct them to SESAR or RSpace as Registered Service Providers that can handle registration for them.
    [( )] Advise them that IGSN IDs are not suitable for small research groups.

---

## Summary and Next Steps

You have completed the module. Here is what to take away:

**What IGSN IDs are**
Globally unique PIDs for physical samples — functionally DataCite DOIs, governed jointly by IGSN e.V. and DataCite.

**What they can be assigned to**
Any material sample from any discipline, including aggregations, collection sites, and ephemeral samples.

**Why they matter**
They support discovery, inventory management, unambiguous identity, and crosslinking — making samples FAIR and citable.

**How to get started**
If your organization is a DataCite member: create an IGSN ID Catalog Repository in Fabrica, assign a separate prefix, and start registering. If not: join via TIB's DataCite Consortium or work with an RSP.

---

### Further Resources

- **PID4NFDI:** https://pid.services.base4nfdi.de
- **DataCite membership:** https://datacite.org/become-a-member
- **IGSN ID Metadata Recommendations:** https://igsn.github.io/metadata
- **DataCite Commons (sample search):** https://commons.datacite.org
- **TIB DataCite Consortium:** https://www.tib.eu
- **Contact DataCite:** info@datacite.org | support@datacite.org

---

*This training material was produced as part of the PID4NFDI project. PID4NFDI is the Basic Service for persistent identifiers in the German National Research Data Infrastructure (NFDI), funded by DFG (Grant No. 521466146) as part of Base4NFDI.*
