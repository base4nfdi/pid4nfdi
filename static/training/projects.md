<!--
author:   PID4NFDI Coordination Hub
email:    pid@services.base4nfdi.de
version:  1.0.0
language: en
narrator: US English Female
license:  CC BY 4.0

comment:  A 10–15 minute course for repository managers on persistent identifiers for
          research projects, using NFDI consortia as the primary example.
          Based on: El-Gebali, Kahlert, Hagemann-Wilholt (2025).
          "Identifying NFDI Consortia with Persistent Identifiers" (v1.0).
          DOI: https://doi.org/10.5281/zenodo.17743199
          PID4NFDI is funded by DFG (Grant Number: 521453681) via Base4NFDI.
          License: CC BY 4.0 https://creativecommons.org/licenses/by/4.0/
-->

# Project PIDs for Repository Managers

> ⏱️ **Estimated time:** 10–15 minutes
>
> 🎯 **Audience:** Repository managers and research data management professionals
>
> 📄 **Based on:** *Identifying NFDI Consortia with Persistent Identifiers* (v1.0),
> PID4NFDI Coordination Hub, December 2025.
> DOI: [10.5281/zenodo.17743199](https://doi.org/10.5281/zenodo.17743199)

Research outputs — datasets, publications, software — are increasingly well-covered by
persistent identifiers. But what about the **research projects** that produce them?

This course introduces project-level PIDs: why they are needed, which systems exist,
and what this means for your work as a repository manager. We use NFDI consortia as
the primary real-world example throughout.

---

**What you will learn:**

- Why research projects need their own persistent identifiers
- How DataCite DOIs with `resourceTypeGeneral = "Project"` work
- Why ROR is *not* the right tool for identifying projects
- What Wikidata IRIs contribute to the PID landscape
- What RAiD is and when it will be relevant in Germany
- How these systems form a layered, interoperable PID framework

---

## 1. Why Projects Need PIDs

When a researcher publishes a dataset, the repository assigns a DOI. When they publish
a paper, the journal assigns a DOI. When they log into a system, their ORCID identifies
them.

But what identifies the **research project** that connected all of this?

Without a project-level PID:

- Outputs from the same project cannot be automatically grouped or discovered
- Attribution of activities to consortia or collaborations requires manual effort
- Reporting to funders means collecting scattered references by hand
- Cross-infrastructure linking (e.g., between OpenAIRE, ORCID, and EOSC) is fragile

> 💡 **Key point:** A project PID is the connective tissue of the research record.
> It links people, outputs, services, and funding into a coherent, machine-readable picture.

---

### The NFDI Example

Germany's National Research Data Infrastructure (NFDI) is made up of 27 domain-specific
and cross-cutting consortia, plus several Basic Services such as PID4NFDI itself.

Each consortium:

- operates under multiple names and acronyms (e.g., *Mathematische
  Forschungsdateninitiative*, *Mathematical Research Data Initiative*, *MaRDI*, *mardi4nfdi*)
- produces publications, datasets, software, and services
- is coordinated by multiple institutions, none of which "owns" the consortium
- has a defined project lifetime tied to DFG funding cycles

Without a project PID, answers to questions like *"What has MaRDI published?"* require
matching inconsistent strings across dozens of systems.

> 💡 **Key point:** The naming problem is not unique to NFDI. Any multi-institutional
> project faces the same disambiguation challenge. A project PID solves it at the source.

---

## 2. DataCite DOIs for Projects

The recommended solution for identifying research projects is a **DataCite DOI** registered
with `resourceTypeGeneral = "Project"`.

DataCite's metadata schema supports multiple resource types. The `"Project"` type was
introduced precisely to describe coordinated research activities rather than documents
or datasets.

---

### What a Project DOI captures

A Project DOI record typically includes:

| Metadata field         | Example value                                        |
|------------------------|------------------------------------------------------|
| `title`                | Mathematical Research Data Initiative (MaRDI)        |
| `resourceTypeGeneral`  | Project                                              |
| `creator`              | Lead institution(s) with ROR IDs                     |
| `publisher`            | Registering organization (e.g., TIB, GWDG)           |
| `fundingReference`     | DFG, funder ROR, grant/award number                  |
| `relatedIdentifier`    | Links to outputs, sub-projects, Wikidata IRI, RAiD   |
| `description`          | Scope and goals of the project                       |
| `dates`                | Start date, end date, modification date              |

> 💡 **Key point:** The `relatedIdentifier` field is what makes the DOI a hub —
> it can point to datasets, publications, software, sub-projects, and identifiers in other
> systems, all in one machine-readable record.

---

### Project DOIs vs. Award/Grant DOIs

It is important to distinguish two related but separate entity types:

**Project PID** — describes the *research activity*: who is involved, what work is being
done, what outputs are produced, and the project lifecycle.

**Award/Grant PID** — describes the *funding decision*: which organization provided
the money, under which program, and the associated award number.

These are managed by different parties:

- **Funders** (e.g., DFG, European Commission) register Award DOIs and are the
  authoritative source for grant metadata.
- **Projects/consortia** register Project DOIs and document project-level details.

> ⚠️ **Common mistake:** Treating the DFG grant number as a substitute for a project PID.
> A grant number identifies a funding decision, not the project itself. The project may
> outlast or span multiple grants.

---

### Key advantages of DataCite Project DOIs

- **Established infrastructure** — DOIs are globally supported across ORCID, OpenAIRE,
  EOSC, and scholarly communication systems.
- **Transparent cost model** — e.g., DataCite consortium membership via TIB costs
  approximately 350 EUR/year for up to 2,000 DOIs.
- **Flexible scope** — DOIs can be assigned to entire projects, sub-projects, services, or
  infrastructure components, with hierarchical links between them.
- **Future-proof** — Project DOIs can later be linked to RAiDs, RORs, and Wikidata IRIs
  as the PID ecosystem matures.
- **Authoritative landing pages** — the DOI resolves to a stable page documenting the
  project. Redirects can be updated without changing the identifier.

---

## 3. Why ROR Is Not the Right Tool for Projects

At this point you may be asking: *"Could we just use a ROR ID?"*

It is a reasonable question — ROR (Research Organization Registry) is well-known,
widely used, and interoperable. The answer, however, is **no** for projects and consortia,
and understanding why matters for your work.

---

### What ROR is designed for

ROR identifies **independent research organizations**: universities, research institutes,
hospitals, government agencies, and similar entities with their own governance, staff,
and legal or institutional standing.

ROR's own scope criteria require that a registered entity must:

1. Demonstrate independence from other organizations to which it is related, and
2. Not exist as a subdivision within a single standalone organization or named entity.

ROR **explicitly excludes**:

- University departments and faculties
- Funding programs and schemes
- **Projects or initiatives that are not organizations**
- Single-person consultancies
- Journals

---

### Why NFDI consortia fall outside ROR's scope

NFDI consortia are project-based alliances of multiple institutions. They have:

- No independent legal status
- No separate governance structure distinct from their member institutions
- A defined, time-bound project lifecycle
- No staff employed directly by the "consortium" as an entity

They are, in ROR's own language, *"projects or initiatives that are not organizations"*.

> 💡 **Key point:** The NFDI Association (NFDI e.V.) *does* have a valid ROR ID
> ([ror.org/05qj6w324](https://ror.org/05qj6w324)) because it is a legally registered body
> with independent governance. Individual consortia do not meet this threshold.

---

### What happened when consortia tried to use ROR

In 2024, several NFDI consortia (including DAPHNE4NFDI and PUNCH4NFDI) were
registered in ROR and subsequently withdrawn in a coordinated action. The reason:
assigning ROR IDs to project structures raised concerns about unintended legal and
tax-related implications, as well as misrepresenting their organizational status.

Only two consortia — NFDI4DS and MaRDI — currently retain active ROR entries,
and their status remains under discussion.

> ⚠️ **For repository managers:** If a researcher asks you to add a ROR ID for their
> consortium, check whether it genuinely meets ROR's inclusion criteria. For NFDI
> consortia and similar project structures, a DataCite Project DOI is the correct answer.

---

### ROR still matters — for the *organizations within* a project

ROR is the right identifier for the **institutions that participate in or host** a project:

- The spokesperson institution
- Co-applicant universities and research centres
- The funder (if they have a ROR entry)

These ROR IDs belong in the `creator` and `fundingReference` fields of the Project DOI
record — linking the project to its organizational context without misusing ROR for the
project itself.

---

## 4. Mid-Course Check

Let's check your understanding so far.

---

**Question 1**

A researcher asks you to register a DOI for their new multi-institution research project.
Which `resourceTypeGeneral` value should you use in DataCite?

[( )] `Dataset`
[( )] `Text`
[(X)] `Project`
[( )] `Collection`

[[?]] Think about what entity type a research project represents in the DataCite schema.

---

**Question 2**

Which statement about ROR and NFDI consortia is correct?

[( )] ROR is the recommended identifier for all NFDI consortia.
[(X)] NFDI consortia fall outside ROR's scope because they are projects, not independent organizations.
[( )] ROR can be used for consortia but only if they have more than five member institutions.
[( )] ROR is only for funders, not for research organizations.

[[?]] Think about ROR's own inclusion criteria and what NFDI consortia actually are structurally.

---

**Question 3**

A Project DOI and an Award/Grant DOI describe the same thing.

[( )] True — they are interchangeable.
[(X)] False — a Project DOI describes the research activity; an Award/Grant DOI describes the funding decision.
[( )] True — but only when the funder is DFG.
[( )] False — Project DOIs do not exist in DataCite.

[[?]] Consider who registers each type and what information they contain.

---

**Question 4**

Where in a DataCite Project DOI record would you reference the ROR IDs of participating
institutions?

[( )] In the `resourceTypeGeneral` field
[(X)] In the `creator` and `fundingReference` fields
[( )] In the `license` field
[( )] ROR IDs cannot be included in DataCite records

[[?]] Think about which metadata fields describe the people and organizations associated with the project.

---

✅ **Well done — halfway through!** The next sections cover Wikidata IRIs, RAiD, and
how all four systems work together as a layered framework.

---

## 5. Wikidata IRIs as Complementary Identifiers

Wikidata is a freely available, community-curated knowledge base that assigns stable
IRIs (Internationalized Resource Identifiers) to entities — including research projects,
organizations, people, and topics.

Unlike DOIs, Wikidata does not require membership or registration fees, and data is
published as RDF (Resource Description Framework), making it natively part of the
global **Linked Open Data (LOD)** ecosystem.

---

### Coverage in NFDI

All 26 NFDI consortia (plus Base4NFDI) already have Wikidata entries, many of which
include:

- Participant institutions and co-applicants
- Links to related initiatives and projects
- Machine-readable metadata queryable via SPARQL

Example entries:

| Consortium       | Wikidata IRI                                                              |
|------------------|---------------------------------------------------------------------------|
| MaRDI            | [Q108327788](https://www.wikidata.org/entity/Q108327788)                  |
| FAIRmat          | [Q108542373](https://www.wikidata.org/entity/Q108542373)                  |
| BERD@NFDI        | [Q108542181](https://www.wikidata.org/entity/Q108542181)                  |
| NFDI4DataScience | [Q108542422](https://www.wikidata.org/entity/Q108542422)                  |
| Base4NFDI        | [Q113544452](https://www.wikidata.org/entity/Q113544452)                  |

A complete list of NFDI consortia IRIs is available via SPARQL query at
[query.wikidata.org](https://query.wikidata.org).

---

### Strengths

- **Existing coverage** — no registration effort required for NFDI consortia
- **Linked Open Data integration** — entries are automatically part of the global
  knowledge graph, enabling semantic search and reasoning
- **Cross-linking** — Wikidata IRIs can reference DOIs, RORs, RAiDs, and any other
  identifier, extending the PID network into the semantic web
- **Open and cost-free** — no membership or fees
- **Rich metadata** — co-applicants, participant organizations, project relationships,
  and more, with full version history

---

### Limitations

- **No formal validation** — records are community-curated with no approval mechanism;
  data quality depends on community engagement
- **Mutable content** — anyone can modify a record at any time; this makes Wikidata
  unsuitable as the *sole* authoritative identifier for citation or reproducibility purposes
- **Limited provenance control** — Wikidata IRIs lack the controlled assignment and
  metadata traceability that DataCite DOI registration provides

> 💡 **Key point:** Wikidata IRIs are powerful *complementary* identifiers. They provide
> semantic richness and LOD integration that DOIs alone do not offer — but they should
> *complement*, not replace, a Project DOI.

---

### How to link Wikidata IRIs in DataCite metadata

Wikidata IRIs can be included in a Project DOI record via the `relatedIdentifier` field:

```
relatedIdentifier:
  relatedIdentifierType: "URL"
  relationType: "IsIdenticalTo"
  relatedIdentifier: "https://www.wikidata.org/entity/Q108327788"
```

This creates a machine-readable bridge between the authoritative DOI record and the
semantically rich Wikidata entry.

---

## 6. RAiD: The Research Activity Identifier

RAiD (Research Activity Identifier) is an emerging international standard specifically
designed for persistent identification of **research activities** — the projects, programmes,
and collaborations that connect people, organizations, and outputs over time.

---

### What RAiD is designed to do

Where a DataCite Project DOI primarily identifies a project as a *citable object*, RAiD is
designed to **track the lifecycle and relationships** of a research activity dynamically:

- Linking people (via ORCID), organizations (via ROR), and outputs (via DOI) to a project
  over time as the project evolves
- Capturing the history of project changes — team members joining or leaving, new
  outputs being added, funding phases beginning and ending
- Providing a landing page and registry managed by national aggregators

> 💡 **Key point:** RAiD and Project DOIs are conceptually complementary.
> A Project DOI is authoritative and citable; a RAiD record is dynamic and relational.
> The plan is to link them via `relatedIdentifier`, not choose between them.

---

### Current status in Germany

RAiD is managed by the **RAiD International Agency** (hosted at the Australian Research
Data Commons, ARDC). National aggregators register and manage RAiD records for their
country.

**At the time of writing (early 2026):**

- RAiD is operational in **Australia** and the **Netherlands**
- A governance and cost model for integration into **EOSC** is not yet in place
- RAiD is **not yet available for use in Germany**
- Integration pathways with NFDI infrastructures are not yet mature

> ⚠️ **For repository managers:** Do not wait for RAiD before implementing project PIDs.
> Register a DataCite Project DOI now. When RAiD becomes operational in Germany,
> the PID4NFDI Coordination Hub will update its guidance and support linking DOI records
> to RAiD records.

---

### What to do when RAiD arrives

When RAiD becomes available in Germany, the recommended approach will be:

1. Keep the existing Project DOI as the authoritative, citable identifier
2. Register a RAiD record to track the project's evolving relationships
3. Link the two via `relatedIdentifier` in the DOI metadata

This creates a record that is both **stable** (DOI) and **dynamic** (RAiD), combining
the strengths of both systems.

---

## 7. The Layered PID Framework

No single PID system covers all aspects of a research project. The recommended
approach is a **layered framework** where each system does what it does best:

---

| PID system     | Best suited for                        | Role for NFDI consortia           | Status in Germany |
|----------------|----------------------------------------|-----------------------------------|-------------------|
| DataCite DOI   | Citable, authoritative identification  | **Primary identifier** for the project | ✅ Available now  |
| ROR            | Independent research organizations     | Identifying *member institutions* and the NFDI Association | ✅ Available now  |
| Wikidata IRI   | Semantic web / Linked Open Data        | Semantic enrichment, discovery, cross-linking | ✅ Available now (all consortia already covered) |
| RAiD           | Tracking project lifecycle & relations | Complementing DOI with dynamic relationship tracking | 🔜 Not yet available in Germany |

---

### How the systems connect

A mature project PID record looks like this:

```
Project DOI (DataCite)
  ├── creator: Institution A [ROR: ror.org/xxxxx]
  ├── creator: Institution B [ROR: ror.org/yyyyy]
  ├── fundingReference: DFG [ROR: ror.org/018mejw64], Award 521453681
  ├── relatedIdentifier: Wikidata IRI [IsIdenticalTo]
  ├── relatedIdentifier: RAiD [IsIdenticalTo]  ← when available
  ├── relatedIdentifier: Dataset DOI [HasPart]
  ├── relatedIdentifier: Publication DOI [HasPart]
  └── relatedIdentifier: Software DOI [HasPart]
```

> 💡 **Key point:** The Project DOI is the hub. ROR, Wikidata, and RAiD are spokes
> that connect the project to the broader research ecosystem. Together they form a
> connected, interoperable, and FAIR-aligned record.

---

### What this means for repository managers

As a repository manager, your role in this framework is to:

1. **Ask researchers whether their project has a Project DOI** — if not, guide them to
   register one through their spokesperson institution's DataCite membership or via TIB.
2. **Include the Project DOI in deposit forms** — as a `relatedIdentifier` with relation
   type `IsPartOf` or `IsOutputOf` when researchers deposit datasets or other outputs.
3. **Use ROR IDs for institutions** — not for the project itself. Map institution names to
   ROR IDs in your metadata schema.
4. **Be aware of Wikidata IRIs** — they may already exist and can be referenced for
   richer semantic linking.
5. **Watch for RAiD guidance** — when PID4NFDI updates its recommendations to
   include RAiD, integrate the new linking step into your deposit workflow.

---

## 8. Implementation Paths for Project DOIs

If a project needs a DOI and does not yet have one, there are four practical routes:

---

**Option 1: Direct DataCite membership**

The project's lead institution joins DataCite directly. Provides full autonomy over metadata
but incurs the highest administrative overhead.

*Best for:* Large institutions with many projects to register.

---

**Option 2: NFDI e.V. consortium membership**

NFDI e.V. joins DataCite as a consortium and registers DOIs on behalf of all NFDI
consortia. Ensures metadata harmonization and governance continuity across consortia.

*Best for:* Centralized, NFDI-wide metadata management.

---

**Option 3: Registration via a third-party service provider**

A service provider such as TIB registers the DOI on behalf of the project. TIB DataCite
consortium membership costs approximately 350 EUR/year for up to 2,000 DOIs.

*Best for:* Projects needing only a small number of DOIs.

---

**Option 4: Registration via the spokesperson organization** ✅ *Recommended*

Over 90% of NFDI member institutions are already DataCite members (direct or
consortium). The spokesperson institution registers the Project DOI on behalf of the
consortium.

*Best for:* Gives the project team full control of metadata, integrates naturally with
existing institutional data workflows, and requires no new memberships.

> 💡 **Key point for repository managers:** If your institution is already a DataCite member,
> you likely already have the infrastructure to register Project DOIs. Contact your DataCite
> contact person and ask about enabling `resourceTypeGeneral = "Project"` registration.

---

## 9. Final Assessment

Test your knowledge across the full course.

---

**Question 1**

What is the primary recommended persistent identifier for identifying a research project
or NFDI consortium?

[( )] A ROR ID with type "Project"
[( )] An ORCID iD for the project lead
[(X)] A DataCite DOI with `resourceTypeGeneral = "Project"`
[( )] A Wikidata QID used as the canonical identifier

[[?]] Think about what system combines authoritative registration, provenance control, and mature infrastructure.

---

**Question 2**

Why did several NFDI consortia withdraw their ROR entries in 2024?

[( )] ROR changed its pricing model and became too expensive.
[( )] DataCite launched a competing system that made ROR obsolete.
[(X)] Consortia fall outside ROR's scope as projects rather than independent organizations, and the entries raised legal and tax-related concerns.
[( )] ROR only supports German-language metadata.

[[?]] Recall ROR's inclusion criteria and what happened in 2024.

---

**Question 3**

A researcher deposits a dataset from their DFG-funded project. You want to link the
dataset to the project in the deposit metadata. What should you add?

[( )] The DFG grant number in the title field
[(X)] The project's DOI as a `relatedIdentifier` with an appropriate relation type
[( )] A ROR ID for the project
[( )] Nothing — dataset DOIs are self-sufficient

[[?]] Think about the `relatedIdentifier` field and how it connects outputs to their project.

---

**Question 4**

Which statement about Wikidata IRIs is correct?

[( )] They replace DataCite DOIs for NFDI consortia.
[( )] They can only be used for organizations, not projects.
[(X)] They are valuable complementary identifiers for semantic integration but lack the provenance control of DataCite DOIs.
[( )] They require paid membership to create or use.

[[?]] Consider Wikidata's strengths (LOD, openness, coverage) and its limitations (mutability, provenance).

---

**Question 5**

What is the correct relationship between a Project DOI and a RAiD record?

[( )] RAiD replaces Project DOIs once it becomes operational in Germany.
[(X)] They are complementary: the Project DOI is authoritative and citable; the RAiD record is dynamic and tracks project relationships over time.
[( )] RAiD and DOIs cannot be linked — they are separate, incompatible systems.
[( )] RAiD is only for Australian projects.

[[?]] Think about what each system is designed to do and how they connect via `relatedIdentifier`.

---

**Question 6**

Which of the following is the recommended implementation path for a NFDI consortium
that wants to register a Project DOI?

[( )] Create a new legal entity so the consortium qualifies for a ROR ID, then request a DOI.
[(X)] Register via the spokesperson institution, which is likely already a DataCite member.
[( )] Wait for RAiD to become available in Germany before registering any project PID.
[( )] Use a Wikidata QID as the project's primary identifier to avoid registration costs.

[[?]] Recall the four implementation options and which one is recommended.

---

**Question 7**

In the layered PID framework, what is the role of ROR within a Project DOI record?

[( )] ROR IDs identify the project itself as an organization.
[( )] ROR IDs are listed in the `license` field of the DOI record.
[(X)] ROR IDs identify the participating and funding institutions referenced in the `creator` and `fundingReference` fields.
[( )] ROR has no role in project DOI metadata.

[[?]] Think about what ROR is designed for and where institution identifiers appear in a DataCite record.

---

✅ **Course complete!**

---

## 10. Summary & Further Resources

### What you have learned

- Research projects need their own PIDs to link people, outputs, and funding into a
  coherent, machine-readable record.
- **DataCite DOIs** with `resourceTypeGeneral = "Project"` are the recommended
  primary identifier for research projects and NFDI consortia.
- **ROR** identifies the *organizations within* a project (member institutions, funders)
  but explicitly excludes projects themselves from its scope.
- **Wikidata IRIs** provide semantic enrichment and Linked Open Data integration as
  complementary identifiers; all NFDI consortia already have entries.
- **RAiD** will complement Project DOIs by tracking dynamic project relationships —
  but is not yet operational in Germany.
- The four systems form a **layered, interoperable PID framework** in which the
  Project DOI serves as the authoritative hub.

---

### Your action checklist

- [ ] Check whether projects depositing outputs at your repository have a Project DOI
- [ ] Include a `relatedIdentifier` field in your deposit form for project PIDs
- [ ] Use ROR IDs for institutions, not for the project itself
- [ ] Be aware that Wikidata IRIs may already exist for major projects/consortia
- [ ] Subscribe to PID4NFDI updates for RAiD guidance when it becomes available in Germany

---

### Key sources

- **This course is based on:**
  El-Gebali S., Kahlert T., Hagemann-Wilholt S. (2025). *Identifying NFDI Consortia
  with Persistent Identifiers* (v1.0). PID4NFDI Coordination Hub.
  [https://doi.org/10.5281/zenodo.17743199](https://doi.org/10.5281/zenodo.17743199)

---

### Further resources

| Resource | URL |
|---|---|
| PID4NFDI Coordination Hub | [pid.services.base4nfdi.de](https://pid.services.base4nfdi.de) |
| DataCite metadata schema | [schema.datacite.org](https://schema.datacite.org) |
| DataCite resourceTypeGeneral documentation | [support.datacite.org](https://support.datacite.org/docs/datacite-metadata-schema-44) |
| ROR inclusion criteria | [ror.org/about/scope](https://ror.org/about/scope) |
| RAiD international | [raid.org](https://raid.org) |
| Wikidata SPARQL query service | [query.wikidata.org](https://query.wikidata.org) |
| NFDI consortia overview | [nfdi.de/konsortien](https://www.nfdi.de/konsortien/) |

---

> **About PID4NFDI**
>
> PID4NFDI coordinates persistent identifier services for Germany's National Research
> Data Infrastructure (NFDI). PID4NFDI is part of and funded through Base4NFDI.
> Funded by DFG as part of NFDI. DFG Grant Number: 521453681.
>
> This course is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
> You are free to share and adapt this material with appropriate attribution.
