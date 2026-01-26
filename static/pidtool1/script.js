/* ----------------------------------------Configuration---------------------------------- */

// README:
// To insert a new question (determine the question type first! --> feature vs. comparison), the following variables need to be updated in the Configuration below:
// - questions: insert the question in the desired location and update the id of all consecutive questions (+1)
// - page_size: adapt the number of questions per section -> +1 for the section where the question was added
// - expert_scores: insert the expert scores and feedback texts for the new question in the desired location
// - index_cost_question: If the new question is inserted previous to the cost question, then you need to update the index_cost_question variable (+1).

/* Questions, Answers, and Sections of the PID Selection Tool */
const STANDARD_ANSWER_OPTIONS = [
  {
    'text': "Don't need that",
    'value': 0
  },
  {
    'text': "Somewhat important",
    'value': 1
  },
  {
    'text': "Important",
    'value': 2
  },
  {
    'text': "Very important",
    'value': 3
  },
  {
    'text': "I don't know // Skip",
    'value': 1
  }
];


// Note: question ids must start at zero and be consecutive integers, otherwise it will not work out
const questions = [
  {
    'title': 'Persistence and Costs',
    'questions': [
      {
        'id': 0,
        'text': '1. It is important for us that the PID provider demonstrates a strong, long-term commitment to persistence.',
        'help': 'Persistence is the core promise of a PID - but it’s not guaranteed by the technology alone. It depends on long-term organizational and financial commitment. Systems like DataCite DOIs, ePIC Handles, and URN:NBN:DE are backed by stable institutions/organizations that explicitly commit to maintaining resolvability over time. ARKs can also support persistence, but this varies with the implementation, especially as ARKs need to be hosted by the assigning institution.',
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 1,
        "text": "2. It is important for us that the PID system allows flexible PID lifecycles, including deletion or deactivation where appropriate.",
        "help": "While many PID systems are designed for long-term reference and persistence, some use cases - especially during early research phases or for internal workflows - may require the option to delete or deactivate PIDs. ARKs support flexible lifecycles, including deletion and the definition of a persistence policy (e.g., how long a identifier will be available) for the PIDs of a namespace. In contrast, DataCite DOIs, ePIC Handles, and URN:NBN:DE are designed to be permanent and generally do not support deletion. Instead, it is possible and considered good practice to set a tombstone for an object that is not available anymore, such that at least the metadata is still available. Whether different persistence policies and deletion are allowed depends on the provider’s policies and the intended role of the PID.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 2,
        "text": "3. The ability to assign PIDs at low cost is one of the most important criteria when choosing a PID provider.",
        "help": "When registering PIDs, different types of costs can occur for the registering institution: 1) Membership fees or fees per registered PID: When registering many PIDs (e.g. more than 100k identifiers per year), costs can quickly accumulate. Some PID providers, such as URN:NBN:DE and ARK, offer free models that support large-scale usage. Others, like DataCite DOIs and ePIC Handles, have tiered pricing or institutional membership models, which scale more or less strongly with the total number of PIDs registered and end up at different pre-defined upper cost bounds. Choosing a cost-effective provider is especially important when you plan to register many PIDs over time. 2) Costs for hosting PID infrastructure: ARKs require self-hosting of the PID infrastructure, which incurs significant personal and material costs for setting up and maintaining PID infrastructure.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      }
    ]
  },
  {
    'title': 'Purpose',
    'questions': [
      {
        "id": 3,
        "text": "4. It is important for us that our identifiers are globally recognized in scholarly publishing with stable citation practices.",
        "help": "If it is important for your institution that the identifiers used are globally recognized in scholarly publishing with stable citation practices, DataCite DOIs are the most suitable choice. They have strong, well-established support across publishers, citation styles, and research indexing services. Other identifiers such as ePIC Handles, ARKs, and URNs offer persistence but are not as universally accepted and integrated for formal scholarly citation.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 4,
        "text": "5. It is important for us that my PID supports early PID adoption (especially, a PID should be minted before publishing the digital object).",
        "help": "Early PID adoption means assigning persistent identifiers at the earliest stages of research asset creation, often while data is being generated or processed, before formal publication. Assigning PIDs early facilitates collaboration by enabling referencing of in-progress datasets or materials, allows early metadata capture, and ensures persistent connection between related outputs through the research workflow. ePIC Handles, ARKs, and DataCite DOIs support early PID assignment in the research data lifecycle, including pre-publication phases. In comparison, URN:NBN:DE are assigned when the digital object is published.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 5,
        "text": "6. It is important for us that my PIDs can be assigned to high-granular entities (e.g., parts of data within files or containers such as text excerpts, parts of images, variables, etc).",
        "help": "If your PID use-case requires PID adoption on a relatively fine-grained level, you might first consider to assign ARKs or ePIC Handles. Often when PIDs are registered for high-granular data, the number of PIDs assigned is high and costs can quickly accumulate, e.g. for DOI. Also, ARKs and Handles offer technical features (suffix passthrough/template Handles) that allow to append paramteres to the PID during resolution to change or extend the resolution URL. Although not offering these specified features, DataCite DOIs are also generally capable of identifying high-granular entities, whereas URN:NBN:DEs are not used for high-granular entities.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 6,
        "text": "7. It is important for us that the PID provider supports cataloging, archiving, and stable referencing within national or academic library infrastructures.",
        "help": "URN:NBN:DE are specialized persistent identifiers designed primarily for use by national libraries and archival institutions. It provides stable, location-independent naming of digital and physical resources that often lack other standard identifiers like ISBN or ISSN. URN:NBN:DEs supports comprehensive cataloging and long-term archival needs by uniquely identifying materials such as digitized manuscripts, reports, cultural heritage objects, and institutional publications within library collections. They are collected and discoverable in the central catalog of the German National Library.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      }
    ]
  },
  {
    'title': 'Metadata & Interoperability',
    'questions': [
      {
        "id": 7,
        "text": "8. Do you prefer to work with a PID provider with a widely used/recognized and standardized metadata schema, or would you like to have full control on the PID metadata (that is, you can define all metadata fields yourself, including whether the fields are openly accessible/private, mandatory/optional)?",
        "help": "Some PID providers define a metadata schema that must be adopted when working with the PID Provider. Working with a PID provider that mandates a widely used and standardized metadata schema ensures consistency in how data is described and shared across different systems and organizations. This uniformity enhances interoperability across systems, eases metadata harvesting, and supports automated processing and research workflows. DataCite defines a widely used, standardized metadata schema for research data and scholarly outputs. URN:NBN:DE defines a national schema that is applied by the DNB catalog. </br>Other PID providers (e.g., ePIC, ARK) do not fix the metadata schema in advance. The infrastructure administrator can define the metadata schema that defines the PID metadata fields according to his needs. Flexibility supports adjusting to use-case specific needs of different domains or workflows. Not only the fields themselves can be freely defined, but also whether metadata fields should be mandatory or optional and whether they should be publicly available or private to restricted sets of users. </br>Please also note that if the PID provider mandates a metadata schema, this does not preclude the possibility of additional metadata. Rather, in combination with the mandated metadata schema that <strong>must</strong> be used, additional metadata <strong>can</strong> be stored outside the PID infrastructure. For instance, URN:NBN:DE enables institutions to define their own metadata requirements for external library catalogues, archives or domain-specific repositories. In addition to the DataCite metadata, domain-specific metadata could be stored in customised repository software outside the PID infrastructure.",
        'type': 'comparison',
        'options': [
          {
            'text': "We definitely want a standardized metadata schema.",
            'value': 3
          },
          {
            'text': "Not sure yet, but more likely standardized.",
            'value': 2
          },
          {
            'text': "Not sure yet, but more likely full control.",
            'value': 2
          },
          {
            'text': "We definitely want full control on the metadata schema.",
            'value': 3
          },
          {
            'text': "Both are fine.",
            'value': 3
          },
          {
            'text': "I don't know // Skip",
            'value': 1
          }
        ],
        'default': {
          'text': "I don't know // Skip",
          'value': 1
        }
      },
      {
        "id": 8,
        "text": "9. It is important for us that the PID provider offers additional metadata services on top of simple PID registration, such as metadata tooling, statistics, and visualisation.",
        "help": "Some PID providers, such as DataCite DOI, offer a range of services on top of simple PID registration. These additional services may include: 1) Extensive metadata tooling for enriching and managing PID-related metadata. 2) Statistics and visualizations to track PID usage, citations, and connections. - These enhanced services provide features that can improve discovery, management, and outreach. Other PID providers (such as ePIC Handles, URN:NBN:DE, ARK) do not offer similar extensive metadata tooling features.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      }
    ]
  },
  {
    'title': 'Technical Setup and Training',
    'questions': [
      {
        "id": 9,
        "text": "10. It is important for us to have the freedom to choose what kind of location our PIDs resolve to (that is, our PIDs should not just resolve to human-readable landing pages, but some PIDs should also resolve to digital resources directly, or to machine-readable metadata records).",
        "help": "Different PIDs by default may resolve to different kinds of resources. Some PIDs resolve to landing pages with human readable metadata, others resolve to a set of machine readable metadata or directly to the research entity (e.g., a file). Some PID systems (such as DataCite DOIs) require that the PID resolves to a landing page which must contain human-readable metadata. Other PID types (e.g. ePIC PID, ARKs, URN:NBN:DE) are allowed to resolve to whatever URL the user requires. Resolving directly to an object may be reasonable if, for example, many (high-granular) data are generated during the research process which might not be published in the end, but still receive a PID that points to the raw data.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      },
      {
        "id": 10,
        "text": "11. Do you prefer to self-host your PID resolver/infrastructure in-house, or that a PID provider does this for you?",
        "help": "Self-hosting can provide higher performance and more technical options but requires technical capacity, staff, and demands long-term commitment to maintain the services in order to guarantee for persistence. Self-hosting can make sense if performance is critical, for example, if lots of PIDs should be registered within a very short time frame. The closer the client to the server, the more performant is PID registration. Self-hosting can also make sense if a PID service should follow a specific technical setup (e.g., a specific database-engine under the Handle System, which fits a specific purpose, or more RAM for fast queries). Another reason could be specialized solutions for user management. For ePICs, ARKs and URN:NBN:DE, there is the option to self-host the PID resolver/infrastructure. Other providers such as DataCite are centrally managed and do not provide the option of self-hosting. On the other hand, ARKs require self-hosting because there are currently no ARK service providers available in Germany. The infrastructure for ePIC Handles, DataCite DOIs and URN:NBN:DE can be all hosted by service providers, hence, no self-hosting is required.",
        'type': 'comparison',
        'options': [
          {
            'text': "We definitely want to self-host.",
            'value': 3
          },
          {
            'text': "Not sure yet, but more likely self-hosting.",
            'value': 2
          },
          {
            'text': "Not sure yet, but more likely provider hosting.",
            'value': 2
          },
          {
            'text': "We definitely want provider hosting.",
            'value': 3
          },
          {
            'text': "Both are fine.",
            'value': 3
          },
          {
            'text': "I don't know // Skip",
            'value': 1
          }
        ],
        'default': {
          'text': "I don't know // Skip",
          'value': 1
        }
      },
      {
        "id": 11,
        "text": "12. It is important for us that the PID provider offers extensive training material.",
        "help": "Training resources and user support can make a big difference, especially during onboarding or when integrating PIDs into institutional workflows. DataCite offers extensive documentation, webinars, community calls, and helpdesk support. ARKs, URN:NBN:DE and ePIC Handles are supported through technical documentation and user communities, but additional training offers are limited. ARKs provide rich information through their website, including best practices, presentations and video tutorials. URN systems usually depend on national libraries, where training and support may be limited or targeted to specific institutional partners.",
        'type': 'feature',
        'options': STANDARD_ANSWER_OPTIONS,
        'default': STANDARD_ANSWER_OPTIONS[1]
      }
    ]
  }
];

/* Config for Pagination */
const page_size = [3, 4, 2, 3];
let current_page_number = -1; // do not change

/* This sets the index of the question for the cost (which needs to be known to apply the PID volumen question to it). */
const index_cost_question = 2;

/* Expert Scores */
// Note: Do NOT change the order of the array elements
const expert_scores = [
  {
    'provider': 'DataCite DOIs',
    'result_hint': 'DOIs from DataCite are widely used for research data and publications.',
    'expert_scores': [5, 2, 2, 5, 4, 2, 0,
      {
        "We definitely want a standardized metadata schema.": 5,
        "Not sure yet, but more likely standardized.": 3.5,
        "Not sure yet, but more likely full control.": 1.5,
        "We definitely want full control on the metadata schema.": 0,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      5, 0,
      {
        "We definitely want to self-host.": 0,
        "Not sure yet, but more likely self-hosting.": 1.5,
        "Not sure yet, but more likely provider hosting.": 3.5,
        "We definitely want provider hosting.": 5,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      5
    ],
    'feedback': [
      "...show a strong long-term commitment to persistence.",
      "",
      "...are not as cost-efficient as URN:NBN:DE and ePIC, especially for large numbers of PIDs.",
      "...are globally recognized in scholarly publishing with stable citation practices.",
      "...support early PID adoption.",
      "",
      "...do not sufficiently supports cataloging, archiving, and stable referencing within national or academic library infrastructures.",
      {
        "We definitely want a standardized metadata schema.": "...comply to the widely used/recognized standardized DataCite metadata schema.",
        "Not sure yet, but more likely standardized.": "...comply to the widely used/recognized standardized DataCite metadata schema.",
        "Not sure yet, but more likely full control.": "...do not offer full control on the PID metadata because they have a standardized schema.",
        "We definitely want full control on the metadata schema.": "...do not offer full control on the PID metadata because they have a standardized schema.",
        "Both are fine.": "...comply to the widely used/recognized standardized DataCite metadata schema."
      },
      "...offer additional metadata services on top of simple PID registration, such as metadata tooling, statistics, and visualisation.",
      "...are only allowed to resolve to landing pages (not to other locations such as the resource directly).",
      {
        "We definitely want to self-host.": "...do not offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely self-hosting.": "...do not offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely provider hosting.": "...will host the PID infrastructure for you.",
        "We definitely want provider hosting.": "...will host the PID infrastructure for you.",
        "Both are fine.": "...will host the PID infrastructure for you."
      },
      "...offer extensive training material."
    ]
  },
  {
    'provider': 'ePIC Handles',
    'result_hint': 'ePIC Handles are widely used in research data infrastructures and built on the Handle system.',
    'expert_scores': [5, 2, 4, 3, 4, 5, 0,
      {
        "We definitely want a standardized metadata schema.": 0,
        "Not sure yet, but more likely standardized.": 1.5,
        "Not sure yet, but more likely full control.": 3.5,
        "We definitely want full control on the metadata schema.": 5,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      0, 5,
      {
        "We definitely want to self-host.": 5,
        "Not sure yet, but more likely self-hosting.": 5,
        "Not sure yet, but more likely provider hosting.": 5,
        "We definitely want provider hosting.": 5,
        "Both are fine.": 5,
        "I don't know // Skip": 5
      },
      1
    ],
    'feedback': [
      "...show a strong long-term commitment to persistence.",
      "",
      "...are comparably cost-efficient, especially for large numbers of PIDs.",
      "",
      "...support early PID adoption.",
      "...are highly suitable for assigning PIDs to high-granular entities.",
      "...do not sufficiently support cataloging, archiving, and stable referencing within national or academic library infrastructures.",
      {
        "We definitely want a standardized metadata schema.": "....do not provide a widely used/recognized standardized metadata schema.",
        "Not sure yet, but more likely standardized.": "...do not provide a widely used/recognized standardized metadata schema.",
        "Not sure yet, but more likely full control.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema.",
        "We definitely want full control on the metadata schema.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema.",
        "Both are fine.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema."
      },
      "...do not offer any additional metadata services on top of simple PID registration.",
      "...can resolve to any desired location (e.g., landing pages, the resource itself, ...).",
      {
        "We definitely want to self-host.": "...offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely self-hosting.": "...offer both self-hosting and provider hosting of the PID infrastructure.",
        "Not sure yet, but more likely provider hosting.": "...offer both self-hosting and provider hosting of the PID infrastructure.",
        "We definitely want provider hosting.": "...will host the PID infrastructure for you.",
        "Both are fine.": "...offer both self-hosting and provider hosting of the PID infrastructure."
      },
      "...do not offer as extensive training material as other providers."
    ]
  },
  {
    'provider': 'URN:NBNs',
    'result_hint': 'URN:NBN is typically used for long-term preservation in national libraries.',
    'expert_scores': [5, 2, 5, 3, 0, 0, 5,
      {
        "We definitely want a standardized metadata schema.": 5,
        "Not sure yet, but more likely standardized.": 3.5,
        "Not sure yet, but more likely full control.": 1.5,
        "We definitely want full control on the metadata schema.": 0,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      0, 5,
      {
        "We definitely want to self-host.": 5,
        "Not sure yet, but more likely self-hosting.": 5,
        "Not sure yet, but more likely provider hosting.": 5,
        "We definitely want provider hosting.": 5,
        "Both are fine.": 5,
        "I don't know // Skip": 5
      },
      1
    ],
    'feedback': [
      "...show a strong long-term commitment to persistence.",
      "",
      "...are the most cost-efficient of the PIDs.",
      "",
      "...do not sufficiently support early PID adoption.",
      "...are not suitable for assigning PIDs to high-granular entities.",
      "...mainly focus on cataloging, archiving, and stable referencing within national or academic library infrastructures.",
      {
        "We definitely want a standardized metadata schema.": "...comply to the widely used/recognized standardized metadata schema of the DNB catalog.",
        "Not sure yet, but more likely standardized.": "...comply to the widely used/recognized standardized metadata schema of the DNB catalog.",
        "Not sure yet, but more likely full control.": "...do not offer full control on the PID metadata because they have a standardized schema.",
        "We definitely want full control on the metadata schema.": "...do not offer full control on the PID metadata because they have a standardized schema.",
        "Both are fine.": "...comply to the widely used/recognized standardized metadata schema of the DNB catalog."
      },
      "...do not offer any additional metadata services on top of simple PID registration.",
      "...can resolve to any desired location (e.g., landing pages, the resource itself, ...).",
      {
        "We definitely want to self-host.": "...offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely self-hosting.": "...offer both self-hosting and provider hosting of the PID infrastructure.",
        "Not sure yet, but more likely provider hosting.": "...offer both self-hosting and provider hosting of the PID infrastructure.",
        "We definitely want provider hosting.": "...will host the PID infrastructure for you.",
        "Both are fine.": "...offer both self-hosting and provider hosting of the PID infrastructure."
      },
      "...do not offer as extensive training material as other providers."
    ]
  },
  {
    'provider': 'ARKs',
    'result_hint': 'ARKs are often used in museums and archives for persistent referencing.',
    'expert_scores': [3, 5, 0, 3, 5, 5, 0,
      {
        "We definitely want a standardized metadata schema.": 0,
        "Not sure yet, but more likely standardized.": 1.5,
        "Not sure yet, but more likely full control.": 3.5,
        "We definitely want full control on the metadata schema.": 5,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      0, 5,
      {
        "We definitely want to self-host.": 5,
        "Not sure yet, but more likely self-hosting.": 3.5,
        "Not sure yet, but more likely provider hosting.": 1.5,
        "We definitely want provider hosting.": 0,
        "Both are fine.": 5,
        "I don't know // Skip": 2.5
      },
      4
    ],
    'feedback': [
      "",
      "...strongly support flexible PID lifecycles, including deletion or deactivation where appropriate",
      "...are comparably expensive because PID infrastructure needs to be self-hosted.",
      "",
      "...support early PID adoption.",
      "...are highly suitable for assigning PIDs to high-granular entities.",
      "...do not sufficiently support cataloging, archiving, and stable referencing within national or academic library infrastructures.",
      {
        "We definitely want a standardized metadata schema.": "....do not provide a widely used/recognized standardized metadata schema.",
        "Not sure yet, but more likely standardized.": "...do not provide a widely used/recognized standardized metadata schema.",
        "Not sure yet, but more likely full control.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema.",
        "We definitely want full control on the metadata schema.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema.",
        "Both are fine.": "...offer full control on the PID metadata, e.g. one can reuse existing schemas or define an own schema."
      },
      "...do not offer any additional metadata services on top of simple PID registration.",
      "...can resolve to any desired location (e.g., landing pages, the resource itself, ...).",
      {
        "We definitely want to self-host.": "...offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely self-hosting.": "...offer the possibility to self-host the PID infrastructure.",
        "Not sure yet, but more likely provider hosting.": "...will not host the PID infrastructure for you.",
        "We definitely want provider hosting.": "...will not host the PID infrastructure for you.",
        "Both are fine.": "offer the possibility to self-host the PID infrastructure."
      },
      "...offer extensive training material.",
    ]
  }
]


/* -------------------------------------Run the Tool------------------------------------------- */

// get some html elements from the document
const run_tool_button = document.getElementById('run-tool');
const back_to_questions_button = document.getElementById('back-to-questions-button');
const download_results_button = document.getElementById('download-results-button');
const intro_page = document.getElementById('intro-page');
const results_page = document.getElementById('results-page');
const root = intro_page.parentNode;

// hide the results page
root.removeChild(results_page);

// variables to track the user choice
// before the tool is started, the user choice is filled with the default answer options
let user_choice_text = [];
let user_choice_score = [];
for (const section of questions) {
  for (const question of section['questions']) {
    user_choice_text.push(question['default']['text']);
    user_choice_score.push(question['default']['value']);
  }
}

// start the questions section after the 'Start Tool' button is clicked
run_tool_button.onclick = function () {
  current_page_number++;

  // adapt DataCite expert score depending on the pre-question on PID volume
  const selected_pid_volume_button = document.querySelector('input[type="radio"]:checked');
  expert_scores[0]['expert_scores'][index_cost_question] = parseInt(selected_pid_volume_button.value);

  // remove intro and scroll to top of page
  root.removeChild(intro_page);
  window.scrollTo({top: 0, behavior: 'smooth'});

  // this variable stores a progress bar, a heading, all questions and the next button of a section
  let section_container = document.createElement('div');
  root.appendChild(section_container);

  // this variable will contain the questions
  let question_container = document.createElement('div');
  question_container.className = 'questions';

  // show progress bar
  let progress_bar_container = document.createElement('div');
  progress_bar_container.id = 'progress-container';
  section_container.appendChild(progress_bar_container);
  let progress_bar = document.createElement('div');
  progress_bar.id = 'progress-bar';
  progress_bar_container.appendChild(progress_bar);
  updateProgressBar(current_page_number);

  // show section heading
  let current_section = questions[0]['title'];
  let current_heading = document.createElement('h2');
  current_heading.innerText = current_section;
  section_container.appendChild(current_heading);

  // show section questions
  for (const question of questions[0]['questions']) {
    // show questions in this section
    const new_item = create_question_node(question);
    question_container.appendChild(new_item);
  }
  section_container.appendChild(question_container);

  // construct navigation buttons
  const nav = document.createElement('div');
  nav.id = 'nav-buttons';
  section_container.appendChild(nav);

  // show previous button
  let previous_button_node = document.createElement('button');
  previous_button_node.id = 'previous-button';
  previous_button_node.innerText = 'Back';
  previous_button_node.addEventListener('click', function () {
    show_previous_section(section_container, question_container, current_heading);
  });
  nav.appendChild(previous_button_node);

  // show next button
  let next_button_node = document.createElement('button');
  next_button_node.id = 'next-button';
  next_button_node.innerText = 'Next';
  next_button_node.addEventListener('click', function () {
    show_next_section(section_container, question_container, current_heading);
  });
  nav.appendChild(next_button_node);
}


// this function builds the previous question section
function show_previous_section(section_container, question_container, current_heading) {
  // Save the user-selected values
  const selected_radio_buttons = document.querySelectorAll('input[type="radio"]:checked');
  for (const radio_button of selected_radio_buttons) {
    user_choice_text[radio_button.name] = radio_button.id;
    user_choice_score[radio_button.name] = radio_button.value;
  }
  // decrease page number
  current_page_number--;

  // scroll to top of page
  window.scrollTo({top: 0, behavior: 'smooth'});

  // break out of function and go back to the intro page
  if (current_page_number === -1) {
    section_container.innerHTML = '';
    root.appendChild(intro_page);
    return;
  }
  // update progress bar
  updateProgressBar(current_page_number);

  // show previous heading
  current_heading.innerText = questions[current_page_number]['title'];

  // show previous questions
  question_container.innerHTML = '';
  for (const question of questions[current_page_number]['questions']) {
    const new_item = create_question_node(question);
    question_container.appendChild(new_item);
  }
}


// this function builds the next question section
function show_next_section(section_container, question_container, current_heading) {
  // Save the user-selected values
  const selected_radio_buttons = document.querySelectorAll('input[type="radio"]:checked');
  for (const radio_button of selected_radio_buttons) {
    user_choice_text[radio_button.name] = radio_button.id;
    user_choice_score[radio_button.name] = radio_button.value;
  }
  // increase page size
  current_page_number++;

  // scroll to top of page
  window.scrollTo({top: 0, behavior: 'smooth'});

  // break out of function, do computations, and go to the results page
  if (current_page_number === page_size.length) {
    // compute results
    const results = compute_results();
    // show results on final page
    render_results_page(results, section_container, question_container, current_heading);
    return;
  }
  // update progress bar
  updateProgressBar(current_page_number);

  // show next heading
  current_heading.innerText = questions[current_page_number]['title'];

  // show next questions
  question_container.innerHTML = '';
  for (const question of questions[current_page_number]['questions']) {
    const new_item = create_question_node(question);
    question_container.appendChild(new_item);
  }
}


// this function runs when the "Back to questions" button on the results page is pressed
function back_to_questions(section_container, question_container, current_heading, results_container) {
  // remove the results page and clear the result cards
  root.removeChild(root.lastChild);
  results_container.innerHTML = '';

  // show previous section
  root.appendChild(section_container);
  show_previous_section(section_container, question_container, current_heading);
}


// this function uopdates the progress bar which is shown on the questions section
function updateProgressBar(current_page_number) {
  const totalSections = page_size.length;
  const progress = ((current_page_number + 1) / totalSections) * 100;
  const bar = document.getElementById('progress-bar');
  bar.style.width = progress + '%';
}


// this function constructs a question together with it's answer options
function create_question_node(question) {
  // get question content
  const question_text = question['text'];
  const question_id = question['id'];
  const question_help = question['help'];
  const question_answer_options = question['options'];
  const question_type = question['type'];

  // create all element to build the question node
  // create question node
  let question_node = document.createElement('div');
  question_node.className = 'question';

  // create text node for question text and append it
  let question_text_node = document.createElement('strong');
  question_text_node.innerText = question_text;
  question_node.appendChild(question_text_node);

  // create help button and append it
  let question_help_button_node = document.createElement('button');
  question_help_button_node.className = 'more-info-btn';
  question_help_button_node.innerText = 'More info';
  question_help_button_node.addEventListener('click', function () {
    show_or_remove_help(question_help_button_node, question_help);
  });
  question_node.appendChild(question_help_button_node);

  // create node for answer options container
  let question_answer_options_node = document.createElement('div');
  question_answer_options_node.className = 'answer-options';

  // add one node for each answer option
  for (const answer_option of question_answer_options) {
    let question_answer_option_node = document.createElement('label');
    question_answer_option_node.htmlFor = "${answer_option['text']}";
    if (user_choice_text[question_id] === answer_option['text']) {
      question_answer_option_node.innerHTML =
        `<input type='radio' name='${question_id}' id="${answer_option['text']}" value="${answer_option['value']}" checked>
        ${answer_option['text']}`; // button with default value/user chosen value
    } else {
      question_answer_option_node.innerHTML =
        `<input type='radio' name='${question_id}' id="${answer_option['text']}" value="${answer_option['value']}">
        ${answer_option['text']}`;
    }
    question_answer_option_node.addEventListener('click', function () {
      show_mini_bars(question_node, question_id, question_type, answer_option);
    });
    question_answer_options_node.appendChild(question_answer_option_node);
  }
  // append answer options and return the question node
  question_node.appendChild(question_answer_options_node);
  return question_node;
}


// add the info text to the questions if the more-info button is clicked; remove help on a second click
function show_or_remove_help(question_help_button_node, question_help) {
  // show help
  if (!question_help_button_node.nextSibling.classList.contains('help-text')) {
    let question_help_text_node = document.createElement('div');
    question_help_text_node.className = 'help-text';
    question_help_text_node.innerHTML = question_help;
    question_help_button_node.after(question_help_text_node);
    question_help_button_node.innerText = 'Less info';
  }
  // remove help
  else {
    question_help_button_node.parentNode.removeChild(question_help_button_node.nextSibling);
    question_help_button_node.innerText = 'More info';
  }
}


// show the mini bars under each question in response to the user's choice
function show_mini_bars(question_node, question_id, question_type, answer_option) {
  // remove previous mini bars, if they exist
  if (question_node.lastChild.classList.contains('mini-bars-container')) {
    question_node.removeChild(question_node.lastChild);
  }
  // check whether the chosen answer is "I don't know // skip" If so, then do not show mini bars
  if (answer_option['text'] === "I don't know // Skip") {
    return;
  }
  // create a container for all mini bars
  const mini_bars_container = document.createElement("div");
  mini_bars_container.className = "mini-bars-container";

  // iterate over providers to compute the score for each provider
  for (let i = 0; i < expert_scores.length; i++) {
    // compute question score
    const user_val = answer_option['value'];
    let expert_val;
    // the computation depends on the question type (feature vs. comparison)
    if (question_type === 'feature') {
      expert_val = expert_scores[i]['expert_scores'][question_id];
    }
    else if (question_type === 'comparison') {
      expert_val = expert_scores[i]['expert_scores'][question_id][answer_option['text']];
    }
    const score = user_val * expert_val;

    // create container for labels and minibars
    const label_and_mini_bar = document.createElement("div");
    label_and_mini_bar.className = "label-and-mini-bar";

    // create labels for mini bars
    const label = document.createElement("span");
    label.className = "mini-label";
    const provider = expert_scores[i]['provider'];
    label.innerText = provider;

    // create mini bars
    const mini_bar = document.createElement("div");
    mini_bar.className = "mini-bar";
    const minWidth = 4;  // etwas kleineres Minimum reicht hier
    const maxWidth = question_node.offsetWidth - 220;
    const scaledWidth = minWidth + (score) / 15.0 * maxWidth;
    mini_bar.style.width = `${scaledWidth}px`;

    label_and_mini_bar.appendChild(label);
    label_and_mini_bar.appendChild(mini_bar);
    mini_bars_container.appendChild(label_and_mini_bar);
    question_node.appendChild(mini_bars_container);

    // color of the bars is adapted to the reached score
    let color;
    if (expert_val >= 3.5) {
      color = 'green';
    } else if (expert_val >= 2) {
      color = 'orange';
    } else {
      color = 'red';
    }
    mini_bar.style.backgroundColor = color;

    // show a tooltip with raw value for expert score, user score and expert*user score
    mini_bar.title = `Expert: ${expert_val} / 5     User: ${user_val} / 3 \nStatement Score for ${provider}: ${expert_val}*${user_val}=${score}`;
  }
}


// compute the results when the results page is hown
function compute_results() {
  // this variable will store the final score
  let results = [];
  // compute the final score for each provider
  for (let i = 0; i < expert_scores.length; i++) { // iterate over providers
    results[i] = {
      'provider': expert_scores[i]['provider'],
      'score': 0,
      'result_hint': expert_scores[i]['result_hint']
    };
    for (let j = 0; j < user_choice_score.length; j++) { // iterate over scores, j is the question-id
      const question_type = get_question_type(j);
      if (question_type === 'feature') {
        results[i]['score'] += user_choice_score[j] * expert_scores[i]['expert_scores'][j];
      }
      else if (question_type === 'comparison') {
        results[i]['score'] += user_choice_score[j] * expert_scores[i]['expert_scores'][j][user_choice_text[j]];
      }
    }
  }
  // return the final score for each provider
  return results;
}


// find out the question type for a given question id
function get_question_type(question_id) {
  let j= 0;
  for (const section of questions) {
    for (const question of section['questions']) {
      if (j===question_id) {
        return question['type'];
      }
      j++;
    }
  }
}


// this function shows the results page
function render_results_page(results, section_container, question_container, current_heading) {
  // remove the questions section and show the results page
  root.removeChild(root.lastChild);
  root.append(results_page);

  // get the results container which will contain the results cards
  let results_container = document.getElementById('results-container');

  // sort the results by score and get the largest score
  const sorted_results = results.sort((a, b) => b['score'] - a['score']);
  const max_score = sorted_results[0]['score'];

  // create a results card for each provider and append it to the container
  let feedback_texts = {};
  for (const res of sorted_results) {
    const [feedback_text_advantages, feedback_text_disadvantages] = generate_feedback_texts(res['provider']);
    // store the feedback texts for the download results part
    feedback_texts[res['provider']] = {
      'advantages': feedback_text_advantages,
      'disadvantages': feedback_text_disadvantages,
    }
    const result_card = create_result_card(res, max_score, feedback_text_advantages, feedback_text_disadvantages);
    results_container.appendChild(result_card);
  }
  // if the 'Back to questions' button is pushed, run the back_to_questions function
  back_to_questions_button.addEventListener('click', function () {
      back_to_questions(section_container, question_container, current_heading, results_container);
    },
    { once: true }
  );
  // if the 'Download results' button is pushed, run the download_results function
  download_results_button.addEventListener('click', function () {
    download_results(sorted_results, feedback_texts);
  },
    { once: true });
}


// for each pid provider, a results card is generated
function create_result_card(res, max_score, feedback_text_advantages, feedback_text_disadvantages) {
  // create an empty result card
  let result_card = document.createElement("div");
  result_card.className = "result-card";

  // show a heading
  let result_card_heading = document.createElement('h3');
  result_card_heading.innerText = res['provider'];
  result_card.appendChild(result_card_heading);

  // show the score bar
  const result_bar_container = document.createElement('div');
  result_bar_container.className = "result-bar-container";
  const result_bar = document.createElement('div');
  result_bar.className = "result-bar";
  result_bar.style.width = res['score'] / max_score * 100 + '%';
  result_bar_container.appendChild(result_bar);
  result_card.appendChild(result_bar_container);

  // show the score
  let result_card_score = document.createElement('p');
  result_card_score.innerText = 'Score: ' + res['score'].toString();
  result_card.appendChild(result_card_score);

  // show the result hint
  let result_card_hint = document.createElement('p');
  result_card_hint.innerText = res['result_hint'];
  result_card.appendChild(result_card_hint);

  // show the foldable details of the result card
  const foldable_details = create_foldable_details(res['provider'], feedback_text_advantages, feedback_text_disadvantages);
  result_card_hint.appendChild(foldable_details);

  // return the result card
  return result_card;
}


// function to generate the foldable results that are displayed together with the scores when the result card of a provider is shown
function create_foldable_details(provider, feedback_text_advantages, feedback_text_disadvantages) {
  // create HTML list of advantages
  let advantages_list_container = document.createElement('ul');
  for (let i = 0; i < feedback_text_advantages.length; i++) {
    let list_element = document.createElement('li');
    list_element.innerText = feedback_text_advantages[i];
    advantages_list_container.appendChild(list_element);
  }
  // create HTML list of disadvantages
  let disadvantages_list_container = document.createElement('ul');
  for (let i = 0; i < feedback_text_disadvantages.length; i++) {
    let list_element = document.createElement('li');
    list_element.innerText = feedback_text_disadvantages[i];
    disadvantages_list_container.appendChild(list_element);
  }
  // create the foldable details
  let details = document.createElement('details');
  const heading = document.createElement('summary');
  heading.innerText = 'View Details';
  details.appendChild(heading);
  const line_break = document.createElement('br');
  details.appendChild(line_break);

  // add advantages
  let plus = document.createElement('span');
  plus.id = 'plus';
  plus.innerText = '+ ';
  details.appendChild(plus);
  let underlined_adv = document.createElement('u');
  underlined_adv.innerText = `Advantages with respect to your choice: ${provider}...`;
  details.appendChild(underlined_adv);
  details.appendChild(advantages_list_container);

  // add disadvantages
  let minus = document.createElement('span');
  minus.id = 'minus';
  minus.innerText = '- ';
  details.appendChild(minus);
  let underlined_dis = document.createElement('u');
  underlined_dis.innerText = `Disdvantages with respect to your choice: ${provider}...`;
  details.appendChild(underlined_dis);
  details.appendChild(disadvantages_list_container);

  // return the foldable details
  return details;
}


// function to generate the text snippets that that show the advantages and disadvantages with respect to certain providers
function generate_feedback_texts(provider_name) {
  // objects to be generated
  let feedback_text_advantages = [];
  let feedback_text_disadvantages = [];

  // find the index which in the expert scores that corresponds to the provider name
  const provider_index = expert_scores.findIndex(elem => elem['provider']===provider_name);
  const provider = expert_scores[provider_index];

  // check for each question whether a text should be shown
  for (let j = 0; j < user_choice_score.length; j++) {
    // check that the user finds this feature important or very important (2 or 3)
    const userVal = user_choice_score[j];
    if (userVal >= 2) {
      // check whether the PID provider supports or not supports the feature
      const question_type = get_question_type(j);
      if (question_type === 'feature') {
        const expertVal = provider['expert_scores'][j];
        if (expertVal >= 3.5) {
          feedback_text_advantages.push(provider['feedback'][j]);
        }
        else if (expertVal <= 1.5){
          feedback_text_disadvantages.push(provider['feedback'][j]);
        }
      }
      else if (question_type === 'comparison') {
        const expertVal = provider['expert_scores'][j][user_choice_text[j]];
        if (expertVal >= 3.5) {
          feedback_text_advantages.push(provider['feedback'][j][user_choice_text[j]]);
        }
        else if (expertVal <= 1.5){
          feedback_text_disadvantages.push(provider['feedback'][j][user_choice_text[j]]);
        }
      }
    }
  }
  return [feedback_text_advantages, feedback_text_disadvantages];
}


// this function runs when the download button is pushed. It generates a results document
function download_results(sorted_results, feedback_texts) {
  // get the selected pid volume
  root.appendChild(intro_page);
  const selected_pid_volume_button = document.querySelector('input[type="radio"]:checked');
  root.removeChild(root.lastChild);
  const planned_pid_volume = selected_pid_volume_button.id;

  // get the current date
  const today = new Date().toDateString();

  // create the introductory text for the download document
  let text = `PID Selection Tool – Your Results\n`;
  text += `${today}\n\n`;
  text += `Planned PID volume: ${planned_pid_volume}\n\n`;

  // add scores, advantages and disadvantages for each provider
  text += "\n\n\n=== Scores ===\n\n";
  for (let provider of sorted_results) {
    // score
    text += `${provider['provider']}\n  Score: ${provider['score']}\n  Description: ${provider['result_hint']}\n\n`;
    // advantages
    text += `  Advantages with respect to your choice: ${provider['provider']}... \n`;
    if (feedback_texts[provider['provider']]['advantages'].length > 0) {
      for (const adv of feedback_texts[provider['provider']]['advantages']) {
        text += `    +${adv}\n`;
      }
    }
    else {
      text += `    ---\n`;
    }
    text+= `\n`;
    // disadvantages
    text += `  Disadvantages with respect to your choice: ${provider['provider']}... \n`;
    if (feedback_texts[provider['provider']]['disadvantages'].length > 0) {
      for (const disadv of feedback_texts[provider['provider']]['disadvantages']) {
        text += `    -${disadv}\n`;
      }
    }
    else {
      text += `    ---\n`;
    }
    text+= `\n`;
  }
  // add the questions and user's answers
  text+= `\n\n\n=== Your Answers ===\n\n`
  for (const section of questions) {
    text+= `[${section['title']}]\n\n`
    for (const question of section['questions']) {
      const question_id = question['id'];
      text += `  ${question['text']}\n`
      text += `  Answer: ${user_choice_score[question_id]} (${user_choice_text[question_id]})\n\n`
    }
  }
  // add the result notes
  text += "\n\n\n=== Note: ===\n\nThis tool focuses on object-related Persistent Identifiers.\n";
  text += "Complementary systems like ORCID (persons) and ROR (institutions) are recommended.\n";
  text += "More info: https://pid4nfdi-training.readthedocs.io/en/latest/\n";

  // create the download
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'pid-selection-results.txt';
  a.click();
  URL.revokeObjectURL(url);
}
