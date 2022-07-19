const programAccordionSection = {
    label: "Program Accordion",
    name: "program_accordion",
    required: true,
    widget: "list",
    hint: "",
    default: "#",
    allow_add: true,
    fields: [{
      label: "programs",
      name: "programs",
      widget: "list",
      summary: "{{program}}",
      allow_add: true,
      fields: [{
        label: "Icon",
        name: "icon",
        widget: "image",
        required: false
      }, {
        label: "Background Image",
        name: "bg_image",
        widget: "image",
        required: false
      }, 
      {
        label: "Background Color",
        name: "bg_color",
        widget: "color",
        required: false
      },
      {
        label: "Program",
        name: "program",
        widget: "string",
        required: false
      }, {
        label: 'Links',
        name: 'links',
        required: false,
        widget: "list",
        hint: "",
        allow_add: true,
        fields: [{
          label: "Program Name",
          name: "name",
          required: false,
          widget: "string",
          hint: "",
          default: ""
        }, {
          label: "Program Location",
          name: "loc",
          required: false,
          widget: "string",
          hint: "",
          default: ""
        }]
      }]
    }]
  }

  export default programAccordionSection