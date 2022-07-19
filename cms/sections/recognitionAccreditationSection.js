const recognitionAccreditationSection = {
    label: 'Recognition and Accreditation',
    name: 'rec_acc_section',
    required: false,
    widget: "object",
    fields: [{
      label: "Section ID",
      name: "section_id",
      required: false,
      widget: "string",
      hint: "this id should match the navigation anchor link on the side",
      default: ""
    }, {
      label: "Section Image",
      name: "section_image",
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
      label: "Section Grid Size",
      name: "section_grid_size",
      widget: "select",
      options: ["grid-2", "grid-3", "grid-4"],
      required: false
    }, {
      label: "Section Text",
      name: "section_text",
      widget: "text",
      required: false
    },{
      label: 'Logos',
      name: 'logos',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{logo_title}}",
      fields: [{
        label: "Logo Image",
        name: "logo_image",
        widget: "image",
        required: false
      }, {
        label: "Logo Size",
        name: "logo_size",
        widget: "select",
        options: ["small", "medium", "large"],
        required: false
      }, {
        label: "Logo Title",
        name: "logo_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Logo Subtitle",
        name: "logo_subtitle",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Logo Link",
        name: "logo_link",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }

export default recognitionAccreditationSection