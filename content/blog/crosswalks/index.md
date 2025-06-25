---
# Documentation: https://docs.hugoblox.com/ and https://gohugo.io/content-management/

title: "Background"
subtitle: ""
summary: "Background of Crosswalks etc."
authors: ["sara"]
tags: ["PID4NFDI", "information", "NFDI", "Base4NFDI"]
categories: []
date: 2025-06-19
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
profile: false

# Show a link to the next article in the series?
pager: false

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

Introduction sentence

<!--more-->

## 📚 1. Start with Metadata

DataCite metadata is structured data in JSON. It tells us things like:

{
  "title": "Climate Data 2024",
  
  "creator": "Alice Smith",
  
  "publicationYear": "2024"
}

This is useful, but only humans (or systems programmed specifically for this format) know what these fields mean.


## 🧠 2. Add Meaning with an Ontology

An ontology defines:

* What creator means (e.g., it refers to a Person)
* What title means (e.g., it’s a label for a resource)
* How these things relate (e.g., every Dataset must have at least one title)

It uses **RDF, RDFS, and OWL** to formalize this. Once you do that, machines can understand the structure and the meaning. This is great for automated reasoning, quality checks, and linking with other systems.


## 🔗 3. Align Concepts with Mappings

But DataCite isn’t the only standard. Others, like [DCAT](https://www.w3.org/TR/vocab-dcat-3/), [schema.org](https://schema.org), [Dublin Core](https://dublincore.org), and [Wikidata](https://wikidata.org), also define things like title, creator, and publicationYear.
To make DataCite metadata understandable to those systems, we create **mappings**.

Mappings say:
* DataCite creator = foaf:maker or schema:author
* DataCite title = dct:title or schema:name

| They use statements like:                    |
|--------------------------|
| <span style="color: green;">ex:hasCreator owl:equivalentProperty schema:author .</span> |

So if a tool understands schema:author, it can now understand DataCite’s creator field too.

#ä 🔁 4. Transform Records with Crosswalks
A **crosswalk** is a recipe for transforming a full record from one format/schema into another.
Think of it like a conversion chart:

| **DataCite Field** | **schema.org Equivalent** |
            |---------------|-----------------|
            | title | name |
            | creator.name | author.name |
            | publicationYear | datePublished |

This allows you to:
* Export DataCite metadata in schema.org JSON-LD
* Harvest and reuse metadata in another system (e.g., a library catalog or web search engine)

## 🚀 Putting It All Together
Here’s how they all relate:

| **Role**       | **What it does** | **How it helps with DataCite** |
|----------------|-------------------|------------------------------|
| **Ontology**   | Describes what the data means using concepts, logic, and relationships | Helps machines understand and reason over DataCite metadata |
| **Mapping**    | Aligns concepts in DataCite to other vocabularies (like schema.org or Dublin Core) | Enables linking and integration with other systems |
| **Crosswalk**  | Translates complete records from one metadata format into another | Makes DataCite metadata usable in external formats like schema.org JSON-LD |

**Ontologies define meaning; mappings align that meaning across systems.**

## 🧩 Example in Action

Let’s say you want to expose a DataCite record in schema.org so Google Dataset Search can find it:
1. **Ontology**: Define that your resource is a Dataset, and creator is a Person.
2. **Mapping**: Link your creator field to schema:author.
3. **Crosswalk**: Use a table to translate the JSON fields:

✅ This is a schema.org JSON-LD representation of a dataset.
🟢 It reflects metadata from DataCite fields, translated into schema.org terms.

| <span style="color:green;">{ “@type”: “Dataset”,<br>“name”: “Climate Data 2024”,<br>“author”: {<br>   “name”: “Alice Smith”<br>},<br>“datePublished”: “2024”<br>}</span> |

The crosswalk can be:
* A table
* A script or mapping file (e.g., XSLT, SPARQL CONSTRUCT, or Python script)
* An ontology alignment (owl:equivalentProperty)

It’s what enables the **conversion** of a DataCite JSON record into the JSON-LD snippet

Now your data is:
✅ Machine-readable
✅ Interoperable
✅ Findable on the web

## Understanding Crosswalks and Mappings

Crosswalks and mappings play a critical role in making metadata **interoperable** across different schemas, domains, and systems. While ontologies formalize the **semantics** of a single schema, crosswalks and mappings are about **connecting concepts** between multiple schemas.

**A crosswalk** is a structured mapping between elements in two or more metadata standards. It shows how a field or concept in one schema (e.g., DataCite) aligns with one in another (e.g., Dublin Core, schema.org, MARC).

Mappings can be:
* **Exact** (e.g., DataCite:title is equivalent to dct:title)
* **Close** (e.g., creatorName maps to foaf:name, though with some nuance)
* **One-to-many** (e.g., a complex DataCite creator object may map to multiple elements in another schema)

**Why Crosswalks & Mappings Matter**
* **Interoperability**: They allow metadata from one system to be interpreted and used in another.
* **Aggregation**: Services like Europeana or OpenAIRE rely on mappings to bring together data from multiple sources.
* **Conversion & Exchange**: Enables tools to export/import data in different formats (e.g., JSON-LD, XML, RDF)
* **Schema Alignment**: Helps unify different vocabularies under common terms (e.g., aligning DataCite and schema.org for dataset indexing by search engines).

**Common Mapping Targets for DataCite**

 | **DataCite Field**             | **Target Vocabulary Term**                                              |
|----------------------|--------------------------------------------------------|
| identifier           | dct:identifier                                         |
| creator              | foaf:Person, schema:creator                            |
| title                | dct:title, schema:name                                 |
| publicationYear      | dct:issued, schema:datePublished                       |
| resourceType         | dcat:Dataset, bibo:Document                            |


Mappings can be formalized using semantic web technologies:
* <span style="color: green;">owl:equivalentProperty or owl:equivalentClass /span> for exact semantic alignment
* <span style="color: green;">skos:exactMatch, skos:closeMatch, and skos:relatedMatch /span> for vocabulary-level mapping

Crosswalks can also be maintained in structured formats like spreadsheets, RDF, JSON-LD, or XSLT depending on the application context.

## Understanding Ontologies in the context of DataCite

An **ontology** defines the **concepts, relationships, constraints, and logical rules** that describe a particular domain. Unlike a traditional metadata schema that primarily captures structure and formatting, an ontology captures **semantic meaning**. This enables **automated reasoning, data integration**, and **intelligent querying** across systems.

In practice, an ontology allows you to:

* **Define classes** (e.g., Dataset, Person, Organization)
* **Specify properties** (e.g., hasAuthor, hasPublicationYear)
* **Declare relationships** (e.g., a Dataset is authored by a Person)
* **Add logic and constraints** (e.g., every Dataset must have at least one title)

### Metadata Schema vs Ontology

| **Feature** | **Metadata Schema** | **Ontology** |
|--------------|---------------------|--------------|
| Purpose | Structural – defines fields and formats | Semantic – defines meaning, logic, and relationships |
| Example (DataCite) | JSON structure without formal semantics | OWL representation with reasoning support |

While the **DataCite metadata schema** is highly structured, it lacks formal semantics. It defines fields like <span style="color: green;">creator</span>, <span style="color: green;">title</span>, and <span style="color: green;">publicationYear</span>, but it does not describe their interrelationships or logical constraints in a machine-interpretable way.

### Why Use an Ontology for DataCite?

#### From Structure to Meaning
* **Metadata Schema** (e.g., DataCite JSON): says "This field is called creator and its value is a name."
* **Ontology (RDF/OWL)**: expresses "This Dataset must be linked to a Person as a creator, who may have an ORCID, and may be affiliated with an institution that has a country of operation."

#### Benefits
**1. Semantic Search** Enables concept-based search:
"Find all works authored by researchers affiliated with EU institutions."
Even if the institution names vary, ontologies allow reasoning over geographic and organizational relationships. <br>
**2. Reasoning** Lets machines infer new facts:
If an author is affiliated with an institution located in France, the system can infer the author is a French researcher, unless appropriate constraints are added. <br>
**3. Knowledge Graph Integration** Ontologies support linking to external vocabularies like:
* <span style="color: green;">dct:title, dct:identifier /span> 
* <span style="color: green;">foaf:Person, schema:Dataset /span> 
* <span style="color: green;">owl:sameAs /span> for external identifiers like ORCID, ROR

| Example mappings | 
|---------------------|
| <span style="color: green;">ex:hasTitle owl:equivalentProperty dct:title . /span> |
| <span style="color: green;">ex:hasCreator owl:equivalentProperty foaf:maker . /span> |
| <span style="color: green;">ex:Dataset owl:equivalentClass schema:Dataset . /span> |

**4. Machine Interoperability** Supports intelligent agents, recommendation engines, and automated workflows.

### How RDF, RDFS, OWL, and SKOS Compare

| **Language** | **What it Does** | **Why Use It for DataCite** |
|--------------|------------------|----------------------------|
| RDF          | Language | Foundation layer to model metadata as a graph |
| RDFS         | What it Does | Defines the roles and types of metadata elements |
| OWL          | Stores data as triples | Enables validation, reasoning, AI integration |
| SKOS         | Adds class/property structure | Ideal for tagging, browsing, subject vocabularies |

### JSON vs RDF/RDFS/OWL - Example Comparison

<div style="overflow-x:auto;">
<table>
  | **Concept** | **DataCite JSON** | **Explanation (JSON)** | **RDF** | **Explanation (RDF)** | **RDFS** | **Explanation (RDFS)** | **OWL** | **Explanation (OWL)** |
|--------------|-------------------|------------------------|---------|-----------------------|----------|------------------------|---------|------------------------|
| Creator | "<span style="color:green;">"creators": [{"name": "Smith, Alice"}]</span> | Lists the dataset's creator using a simple string value. ex:Dataset123 ex:hasCreator ex:AliceSmith | Links the dataset to a named individual as a resource. ex:hasCreator rdfs:domain ex:Dataset ; rdfs:range ex:Person | Declares that hasCreator links datasets to persons. Restriction: someValuesFrom ex:Person | Adds logic: every dataset must have at least one creator of type person. |  |  |  |
| Creator ORCID | "<span style="color:green;">"nameIdentifier": "https://orcid.org/..."</span>" | Specifies a string ORCID ID attached to the creator. ex:AliceSmith ex:hasORCID "https://orcid.org/..." | Connects the person to their ORCID using a data property. ex:hasORCID rdfs:range xsd:anyURI | Declares the expected type of ORCID values (URI strings). ex:AliceSmith owl:sameAs <https://orcid.org/...> | Semantically links the individual to their global ORCID identity. |  |  |  |
</table>
</div>


### SKOS: A Lightweight Alternative

**SKOS** (Simple Knowledge Organization System) is used to model controlled vocabularies, taxonomies, and thesauri.

Use SKOS when you want:
* Subject tagging (e.g., marine biology)
* Simple hierarchies (broader/narrower concepts)
* Multilingual support

| Example: | 
| -------- |
| <span style="color: green;">ex:marineBiology a  skos:Concept ;<br>    skos:prefLabel "Marine Biology"@en ;<br>    skos:broader ex:biology . /span> |


SKOS does **not** support logical constraints or inference, unlike OWL.
