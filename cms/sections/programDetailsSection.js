const programDetailsSection = {
    label: "Program Details",
    name: "program_details",
    required: true,
    widget: "object",
    hint: "",
    default: "#",
    allow_add: true,
    fields: [{
      label: "Next Intake",
      name: "next_intake",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Duration",
      name: "duration",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Credentials",
      name: "credentials",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Apply Form",
      name: "apply_form",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Contact Form",
      name: "contact_form",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Request Brochure Link",
      name: "request_brochure_link",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Brochure",
      name: "brochure",
      required: false,
      widget: "file",
      hint: "",
      default: ""
    }
  ]
  }

  export default programDetailsSection