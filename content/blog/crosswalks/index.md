---
# Documentation: https://docs.hugoblox.com/ and https://gohugo.io/content-management/

title: "Making DataCite Metadata Work: Ontologies, Mappings, and Crosswalks"
subtitle: ""
summary: "Ontologies, Mappings, and Crosswalks"
authors: ["sara"]
tags: ["PID4NFDI", "information", "NFDI", "Base4NFDI"]
categories: []
date: 2026-04-17
#lastmod: 2025-06-19

# Draft?
draft: false

# Show publish date?
show_date: true

# Show reading time?
reading_time: true

# Display in the Featured block on the homepage?
featured: true

# Hide in search results?
private: false

# Show social sharing links?
share: false

# Show author profile (photo and bio) under the content? Edit your author profiles in the content/authors/ folder. Then reference their folder names with the authors front matter option above.
profile: true

# Show a link to the next article in the series?
pager: true

# Show recommendations for related content?
show_related: false

# Featured image
#   To use, add an image named `featured.jpg/png` to your page's folder.
#   Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), reuses [work by Premeditated](https://w.wiki/CvkA)"
  focal_point: ""
  preview_only: false
  alt_text: ""

# Projects
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## TL;DR

DataCite metadata already gives research outputs a reliable descriptive foundation: titles, creators, identifiers, dates, resource types, relationships, funding information, and more. That foundation is strong, but a record in a DataCite-specific format is not automatically understandable to every external system that may want to use it.

To make DataCite metadata work across repositories, search engines, library catalogs, data portals, knowledge graphs, and automated workflows, we need three complementary layers:

### 📚 1\. Start with metadata

Metadata records describe research outputs in a structured way. A simplified DataCite-style record might say:

```json
{
  "titles": [{ "title": "Climate Data 2024" }],
  "creators": [{ "name": "Smith, Alice" }],
  "publicationYear": "2024",
  "types": { "resourceTypeGeneral": "Dataset" }
}
```

This is useful because the fields are consistent and documented. But a system still needs to know what those fields *mean* and how they relate to other standards.

### 🧠 2\. Add meaning with an ontology

An ontology defines the concepts, properties, relationships, and rules behind the metadata. It can say that a dataset is a type of research output, that a creator is a person or organization connected to that output, and that a title is a label used to identify the resource. This gives machines more than field names, it gives them a model they can reason over.

### 🔗 3\. Align concepts with mappings

DataCite is not the only metadata standard. Other communities use schema.org, Dublin Core, DCAT, FOAF, Wikidata, MARC, and many domain-specific vocabularies. Mappings explain how a DataCite concept relates to a concept in one of those vocabularies, and crucially, *how strong that relationship is*.

```
ex:hasTitle owl:equivalentProperty dcterms:title .
ex:Dataset  owl:equivalentClass    schema:Dataset .
```

### 🔁 4\. Transform records with crosswalks

A crosswalk applies mappings to a complete record. It is the practical recipe for translating one metadata format into another, including the transformation rules, edge cases, and known information loss.

| DataCite field | schema.org field |
| :---- | :---- |
| `titles.title` | `name` |
| `creators.name` | `creator.name` |
| `publicationYear` | `datePublished` |
| `identifier` | `identifier` |
| `descriptions.description` | `description` |

### 🚀 The outcome

When metadata, ontology, mappings, and crosswalks work together, DataCite records become:

✅ Machine-readable  
✅ Semantically explicit  
✅ Easier to validate and transform  
✅ Interoperable across standards  
✅ More findable on the web and in research infrastructure

---

## 🌐 Why Interoperability Matters

Research metadata rarely stays inside one system. A dataset registered with a DataCite DOI may be harvested by an institutional repository, indexed by a web search engine, aggregated into OpenAIRE, exposed through a national research data portal, imported into a library catalog, or linked to people, organizations, grants, instruments, samples, software, and publications in a knowledge graph.

Each of those systems may use a different metadata model. DataCite, schema.org, Dublin Core[^1], DCAT[^2], MARC, and Wikidata were created by different communities for different workflows. They overlap, but they are not identical, and none of them speak each other's language natively.

Without a translation layer, three things happen: information is lost because rich fields are flattened or ignored; connections are missed because equivalent concepts are named differently; and reuse becomes expensive because every integration requires custom interpretation built from scratch.

This is not a DataCite-specific weakness, it is the normal cost of a diverse metadata ecosystem. But DataCite is in an unusually strong position to address it, because its metadata is already structured, well-maintained, and widely adopted. The question is not whether the data is good enough. It is. The question is how to make that structure legible and reusable by systems that were never designed to speak DataCite's language.

The answer involves three interrelated tools: **ontologies, mappings, and crosswalks**.

---

## 📚 Start with DataCite Metadata

The DataCite Metadata Schema[^3] defines core properties for identifying, citing, discovering, and reusing research outputs. It supports datasets, software, text, physical objects, instruments, models, workflows, presentations, and other research products.

A DataCite record is valuable because it answers the questions every discovery system needs answered: What is this called? Who created it? When was it published? What type of resource is it? What identifier points to it? How is it related to other outputs? What organizations, funders, or contributors are involved?

For a DataCite-aware system, this structure is enough to parse and display the record reliably. The interoperability challenge appears when the same record moves outside a DataCite-aware environment. A general-purpose crawler, data portal, or reasoning engine may not know that:

- `creators` is comparable to `schema:creator`, `dcterms:creator`, or `foaf:maker`

- `titles.title` is comparable to `schema:name` or `dcterms:title`

- `resourceTypeGeneral: Dataset` can often be represented as `schema:Dataset` or `dcat:Dataset`

- a DataCite DOI is a persistent identifier that should remain connected to the object across transformations

The record has structure. What we add next is explicit, machine-actionable *meaning*.

---

## 🧠 Add Meaning with an Ontology

An ontology is a formal model of a domain. It defines the types of things that exist, the properties that describe them, the relationships between them, and the logical rules that govern those relationships.

A metadata schema and an ontology are related, but they do different jobs.

| Feature | Metadata schema | Ontology |
| :---- | :---- | :---- |
| **Main purpose** | Defines fields, structure, obligation, and allowed values | Defines concepts, relationships, semantics, and logic |
| **Typical question** | "Which fields can appear in a valid record?" | "What do these fields mean, and how do they relate?" |
| **DataCite example** | `creators` is a metadata property | a `Dataset` has a creator who is a `Person` or `Organization` |
| **Machine use** | Parsing, display, exchange, schema conformance | Reasoning, linking, inference, semantic integration |

In DataCite terms, an ontology could define:

- **Classes**, `Dataset`, `Software`, `Text`, `Person`, `Organization`, `Identifier`, `FundingReference`, `RelatedResource`

- **Properties**, `hasCreator`, `hasTitle`, `hasIdentifier`, `hasPublisher`, `isFundedBy`, `isSupplementTo`

- **Relationships**, a dataset can be created by a person, published by an organization, funded by a grant, and linked to related outputs

- **Constraints**, a DataCite DOI record is expected to have an identifier, creator, title, publisher, publication year, and resource type

This allows machines to move beyond string matching. A system can understand that "Alice Smith", her ORCID, her affiliation, and the dataset she created are connected resources in a graph, not isolated text values sitting in separate fields.

### What this enables

**🔍 Semantic search.** A query like "find datasets created by researchers affiliated with EU institutions" becomes executable, even when those institutions have different names, use different identifiers, or appear in records from different repositories. The ontology provides the connective tissue that lets a system reason across variations.

**🔄 Automated inference.** Machines can derive useful facts from explicit relationships without human intervention. If a dataset is created by a person affiliated with an organization, a graph can support queries that traverse from the dataset to the person to the organization, without any of those links needing to be explicitly stated in the original record.

**🕸️ Knowledge graph integration.** DataCite records can be linked to ORCID records for people, ROR records for organizations, grant identifiers for funding, Wikidata entities, schema.org pages, and domain vocabularies. This is how research metadata becomes part of the broader knowledge graph rather than an isolated silo.

**⚙️ Machine interoperability.** Intelligent agents, recommendation systems, and automated workflows can operate on ontologically described data without being pre-programmed for DataCite's specific vocabulary. They reason from the semantics up.

---

## 🛠️ The Semantic Web Toolkit

The semantic web stack provides standard ways to express metadata as linked, machine-interpretable data. These technologies are complementary layers, each building on the one below, not competing alternatives.

| Standard | What it does | Role for DataCite |
| :---- | :---- | :---- |
| **RDF**[^4] | Represents data as triples: subject, predicate, object | Turns metadata records into graphs of connected resources |
| **RDFS** | Defines basic classes and properties | States that a creator property links a resource to an agent |
| **OWL**[^5] | Adds richer ontology modelling and formal semantics | Supports equivalence, class logic, and reasoning |
| **SKOS**[^6] | Represents concept schemes, thesauri, taxonomies, and vocabulary mappings | Works well for controlled vocabularies, subjects, resource types, and community term lists |
| **SHACL**[^7] | Validates RDF graphs against shapes and constraints | Checks whether records satisfy expected structural patterns |

Understanding how these layers work together is clearest when you trace the *same field* through each layer. Take the DataCite `creator` field.

**In DataCite JSON**, the creator is a structured value:

```json
{
  "creators": [
    {
      "name": "Smith, Alice",
      "nameIdentifiers": [
        {
          "nameIdentifier": "https://orcid.org/0000-0001-2345-6789",
          "nameIdentifierScheme": "ORCID"
        }
      ]
    }
  ]
}
```

This tells a parser that the field exists and what values it holds. It says nothing about what a creator *is* in any deeper sense.

**In RDF**, the creator becomes a linked resource, a node in a graph:

```
ex:dataset-123 ex:hasCreator ex:alice-smith .
ex:alice-smith a schema:Person ;
  schema:name  "Smith, Alice" ;
  schema:sameAs <https://orcid.org/0000-0001-2345-6789> .
```

The dataset and the person are now connected nodes. We can navigate that graph and ask questions about it.

**In RDFS**, we define the expected structure of that relationship:

```
ex:hasCreator rdfs:domain ex:ResearchOutput ;
              rdfs:comment "Links a research output to the person or organization responsible for creating it." .
```

Now the system knows that `hasCreator` connects a research output to its creator, not to a date, a keyword, or a number.

**In OWL**, we align local concepts with external vocabularies and add formal semantics:

```
ex:Dataset    owl:equivalentClass    schema:Dataset .
ex:hasTitle   owl:equivalentProperty dcterms:title .
ex:hasCreator rdfs:subPropertyOf     schema:creator .
```

A system that understands `schema:creator` can now understand DataCite's `hasCreator`, because OWL declares the relationship explicitly. That single statement, `owl:sameAs <https://orcid.org/...>`, connects Alice's local representation to her global identity on the open web, enabling disambiguation and linking across systems worldwide.

### 🗂️ SKOS: Managing Controlled Vocabularies

Not every semantic need requires the full expressiveness of OWL. For controlled vocabularies, lists of subjects, resource types, disciplines, or keywords, the **Simple Knowledge Organization System (SKOS)** is often the right tool. SKOS supports preferred and alternative labels (including multilingual), hierarchical broader/narrower relationships, associative links between related concepts, and mapping relationships to equivalent terms in other vocabularies.

```
ex:marineBiology a skos:Concept ;
  skos:prefLabel "Marine biology"@en ;
  skos:prefLabel "Biologie marine"@fr ;
  skos:broader   ex:biology .
```

SKOS does not support logical constraints or automated inference, it is not a replacement for OWL when rigorous reasoning is needed. But the two are natural complements: OWL describes the structure and logic of the data model, while SKOS organises the controlled terms used within it.

### ✅ SHACL: Validating Graph Data

SHACL (Shapes Constraint Language) is worth calling out separately because its role is often misunderstood. While OWL supports inference, deriving new facts from existing data, SHACL supports *validation*: checking whether a given RDF graph satisfies agreed structural constraints. In practice, a mature DataCite ontology would use OWL for semantic alignment and reasoning, and SHACL shapes for operational data quality checks.

---

## 🔗 Align Concepts with Mappings

An ontology makes DataCite metadata meaningful within its own domain. But interoperability means crossing domains, making DataCite metadata legible to systems that use different standards. That is the work of mappings.

A **mapping** is a documented relationship between a concept in one vocabulary and a concept in another. Mappings are the bridge between DataCite and the wider metadata ecosystem. Critically, they should be explicit about the *type* of relationship, because not every apparent match is an exact match, and conflating them causes silent information loss.

| Mapping type | Meaning | Example |
| :---- | :---- | :---- |
| **Exact match** | Concepts can be treated as semantically equivalent | `titles.title` → `dcterms:title` |
| **Close match** | Concepts overlap but are not identical | `publicationYear` → `schema:datePublished`, one may be a year-only value while the other accepts a full date |
| **Broader / narrower** | One concept is more general or more specific | DataCite `resourceTypeGeneral` values compared with broader catalog types |
| **One-to-many** | One source field must be split into multiple target fields | A DataCite creator object becomes `creator.name`, `creator.sameAs`, and separate affiliation fields |
| **Many-to-one** | Several source fields combine into one target field | Multiple description fields collapsed into a single target `description` value |

Good mappings do more than say "A equals B." They document the source field and target field, relationship type, transformation rule, expected data types, cardinality, controlled vocabulary handling, known information loss, worked examples, and review status. This matters because a loose mapping can silently distort meaning, mapping a full DataCite creator object to a single text field may preserve a display name but lose the ORCID, affiliation, and name-type information entirely.

### Common Mapping Targets for DataCite

| DataCite concept | Common target | Notes |
| :---- | :---- | :---- |
| DOI or identifier | `schema:identifier`, `dcterms:identifier` | Preserve persistent identifiers as resolvable URLs wherever possible |
| Title | `schema:name`, `dcterms:title` | Usually straightforward; multilingual titles require care |
| Creator | `schema:creator`, `dcterms:creator`, `foaf:maker` | Preserve ORCID and affiliation when available |
| Publisher | `schema:publisher`, `dcterms:publisher` | Organization identifiers such as ROR improve linking |
| Publication year | `schema:datePublished`, `dcterms:issued` | Year-only values may need formatting rules |
| Resource type | `schema:Dataset`, `dcat:Dataset`, BIBO classes | Depends on the resource type and target system |
| Related identifier | schema.org relationship properties, DCAT relations, `dcterms:relation` | Relation type semantics must be preserved, not just the identifier value |
| Subject | `schema:keywords`, SKOS concepts, domain vocabularies | Controlled terms should remain identifiable, not flattened to free text |

---

## 🔁 Transform Records with Crosswalks

A crosswalk is the implementable specification that translates a *complete record* from one metadata format into another. It uses mappings, but it also includes the operational detail needed for a real transformation.

If a mapping says:

`DataCite titles.title` maps to `schema.org name`

the crosswalk says:

For each DataCite title object, use the primary title as `schema:name`. If there are translated titles, preserve language tags where the target supports them. If the target accepts only one name value, record which title was selected and why.

A useful crosswalk specification includes field-level mappings, transformation rules, handling for repeated values and language tags, controlled vocabulary conversions, identifier normalization, before-and-after examples, validation checks, and version and provenance information.

Crosswalks can be maintained in several forms, and in a mature workflow, more than one form coexists:

| Form | Best for |
| :---- | :---- |
| **Spreadsheet** | Community review, editorial governance, transparent discussion |
| **RDF or OWL** | Machine-readable semantic alignment |
| **JSON-LD context or profile** | Web publication and linked-data serialization |
| **XSLT** | XML-to-XML or XML-to-HTML transformations |
| **SPARQL CONSTRUCT** | RDF graph transformations |
| **Python or other scripts** | Production pipelines with conditional logic |

A spreadsheet can serve as the governance layer, RDF as the semantic publication layer, and scripts as the production implementation. None of these excludes the others.

---

## 🧩 Worked Example: DataCite to schema.org

To see how ontology, mappings, and crosswalk interact in practice, consider a concrete goal: making a DataCite dataset record discoverable by Google Dataset Search.[^8]

Google Dataset Search indexes datasets described using **schema.org JSON-LD**[^9], a format different from DataCite's native JSON. Bridging the gap requires all three components.

### Step 1, Start with the DataCite record

```json
{
  "identifier": {
    "identifier": "10.1234/example.climate.2024",
    "identifierType": "DOI"
  },
  "titles": [{ "title": "Climate Data 2024" }],
  "creators": [
    {
      "name": "Smith, Alice",
      "nameIdentifiers": [
        {
          "nameIdentifier": "https://orcid.org/0000-0001-2345-6789",
          "nameIdentifierScheme": "ORCID"
        }
      ]
    }
  ],
  "publisher": "Example Research Repository",
  "publicationYear": "2024",
  "types": { "resourceTypeGeneral": "Dataset" },
  "descriptions": [
    {
      "description": "Measurements from an example climate monitoring campaign conducted in 2024.",
      "descriptionType": "Abstract"
    }
  ]
}
```

### Step 2, Define the ontology layer

The ontology states that the object is a `Dataset`, that the dataset has a `creator`, and that the creator can be represented as a `Person` with an ORCID identity.

```
ex:Dataset       owl:equivalentClass    schema:Dataset .
ex:hasCreator    rdfs:subPropertyOf     schema:creator .
ex:hasIdentifier rdfs:subPropertyOf     schema:identifier .
```

### Step 3, Define the mapping

| DataCite source | schema.org target | Transformation note |
| :---- | :---- | :---- |
| `types.resourceTypeGeneral = Dataset` | `@type = Dataset` | Use `schema:Dataset` when the DataCite resource type supports it |
| `titles[0].title` | `name` | Use the primary title |
| `descriptions[Abstract].description` | `description` | Use the abstract or best available description |
| `creators[].name` | `creator[].name` | Preserve each creator as a person or organization |
| `creators[].nameIdentifiers[ORCID]` | `creator[].sameAs` | Keep ORCID as a resolvable identity link |
| `publisher` | `publisher.name` | Represent publisher as an organization |
| `publicationYear` | `datePublished` | Use year-only value when only the year is available |
| `identifier.identifier` | `identifier` | Prefer DOI URL form for web markup |

### Step 4, Apply the crosswalk

The output is schema.org JSON-LD, ready to embed in the dataset landing page:

```json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "Climate Data 2024",
  "description": "Measurements from an example climate monitoring campaign conducted in 2024.",
  "identifier": "https://doi.org/10.1234/example.climate.2024",
  "creator": [
    {
      "@type": "Person",
      "name": "Smith, Alice",
      "sameAs": "https://orcid.org/0000-0001-2345-6789"
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "Example Research Repository"
  },
  "datePublished": "2024"
}
```

When Google's crawler encounters this snippet on the landing page, the dataset becomes discoverable in Dataset Search, with no manual submission, no custom integration, and no knowledge of DataCite's internal structure required on Google's part.

The ontology gives the model meaning. The mapping provides the semantic alignment that makes the crosswalk principled rather than arbitrary. The crosswalk performs the actual record transformation.

---

## 📦 What a DataCite Crosswalk Effort Should Produce

A useful community effort should not stop at a diagram or a one-off conversion script. It should produce durable artifacts that people and machines can reuse:

- **A scoped DataCite ontology profile**, defining the key classes, properties, and relationships needed for the chosen use cases

- **Authoritative mapping tables**, from DataCite to high-priority targets such as schema.org, Dublin Core, DCAT, and selected domain vocabularies

- **Executable crosswalks**, transforming representative DataCite records into target formats

- **Worked examples**, showing before-and-after records for datasets, software, text, physical samples, instruments, and other priority resource types

- **Validation rules**, for checking whether outputs meet the expectations of the target format

- **Governance documentation**, covering versioning, maintenance, provenance, review cycles, and community ownership

At the time of drafting (April 2026), DataCite Metadata Schema 4\.7[^10] [^11] is the latest minor version. Any ontology or crosswalk work should choose an explicit schema baseline and document how updates will be handled when the schema changes.

---

## 🗺️ Next Steps

- [ ] **Prioritize use cases.** Decide which real workflows the work should support first: schema.org exposure, DCAT export, knowledge graph integration, repository exchange, PID graph enrichment, or another target.

- [ ] **Select target standards.** Start with a small set of high-value targets rather than mapping everything to everything.

- [ ] **Define mapping principles.** Agree on when to use exact, close, broad, narrow, one-to-many, and many-to-one relationships, and document the rules.

- [ ] **Inventory DataCite elements.** Identify which properties, sub-properties, controlled lists, and relation types need semantic treatment.

- [ ] **Build a reviewable mapping table.** Include examples, transformation notes, known information loss, and open questions.

- [ ] **Create executable crosswalks.** Implement at least one transformation path end to end, such as DataCite to schema.org JSON-LD.

- [ ] **Validate with real records.** Test examples from multiple resource types and repositories.

- [ ] **Engage stakeholders.** Bring in PID4NFDI, DataCite members, repository teams, metadata working groups, domain experts, and target-standard communities.

- [ ] **Decide on hosting and governance.** Use persistent URLs, version-controlled repositories, release notes, and clear ownership.

- [ ] **Publish documentation.** Provide both human-readable guidance and machine-readable artifacts.

---

## ✅ FAIRness Checklist

The ontology, mappings, and crosswalks should themselves follow FAIR principles. Before publication, ask:

- **Findable**: Are the artifacts indexed, clearly named, and assigned persistent identifiers?

- **Accessible**: Are they openly available through stable, resolvable URLs?

- **Interoperable**: Do they use RDF, OWL, SKOS, SHACL, JSON-LD, or other well-documented standards?

- **Reusable**: Are licenses, provenance, version history, examples, and maintenance responsibilities clear?

- **Understandable**: Are labels, definitions, examples, and scope notes written for both technical and non-technical users?

- **Governed**: Is there a recognized community or organization responsible for review and updates?

✅ A FAIR crosswalk is not just a spreadsheet.  
✅ A FAIR ontology is not just a diagram.  
✅ Both need persistence, documentation, examples, governance, and maintenance.

---

[^1]: DCMI Metadata Terms (Dublin Core). [https://www.dublincore.org/specifications/dublin-core/dcmi-terms/](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/)

[^2]: W3C Data Catalog Vocabulary (DCAT) Version 3\. [https://www.w3.org/TR/vocab-dcat-3/](https://www.w3.org/TR/vocab-dcat-3/)

[^3]: DataCite Metadata Schema. [https://schema.datacite.org/](https://schema.datacite.org/)

[^4]: W3C RDF 1.1 Concepts and Abstract Syntax. [https://www.w3.org/TR/rdf11-concepts/](https://www.w3.org/TR/rdf11-concepts/)

[^5]: W3C OWL 2 Web Ontology Language, Document Overview. [https://www.w3.org/TR/owl2-overview/](https://www.w3.org/TR/owl2-overview/)

[^6]: W3C SKOS Simple Knowledge Organization System Reference. [https://www.w3.org/TR/skos-reference/](https://www.w3.org/TR/skos-reference/)

[^7]: W3C Shapes Constraint Language (SHACL). [https://www.w3.org/TR/shacl/](https://www.w3.org/TR/shacl/)

[^8]: Google Search Central: Dataset structured data guidance. [https://developers.google.com/search/docs/appearance/structured-data/dataset](https://developers.google.com/search/docs/appearance/structured-data/dataset)

[^9]: schema.org Dataset type definition. [https://schema.org/Dataset](https://schema.org/Dataset)

[^10]: DataCite Metadata Schema 4.7, full documentation. [https://datacite-metadata-schema.readthedocs.io/](https://datacite-metadata-schema.readthedocs.io/)

[^11]: DataCite Schema 4.7 release notes. [https://datacite.org/blog/get-started-with-schema-4-7/](https://datacite.org/blog/get-started-with-schema-4-7/)