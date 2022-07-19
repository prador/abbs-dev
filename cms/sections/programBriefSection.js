const programBriefSection = {
    label: 'Program Brief Section',
    name: 'program_section',
    summary: "{{section_title}} Programs ",
    required: false,
    fields: [{
      label: "Section ID",
      name: "section_id",
      required: false,
      widget: "string",
      hint: "this id should match the navigation anchor link on the side",
      default: ""
    }, {
      label: "Section Logo",
      name: "section_logo",
      widget: "image",
      required: false
    }, {
      label: "Section Title",
      name: "section_title",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: 'Programs',
      name: 'programs',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{program_title}}",
      fields: [{
        label: "Program Title",
        name: "program_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Program Content",
        name: "program_content",
        required: false,
        widget: "markdown",
        hint: "",
        default: ""
      },{
        label: "Program Link Label",
        name: "program_link_label",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Program Link Location",
        name: "program_link_loc",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }

  export default programBriefSection