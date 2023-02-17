const accordionSection = {
    label: 'Accordion Section',
    name: 'accordion_section',
    summary: "{{section_title}}",
    required: false,
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
      label: 'Accordions',
      name: 'accordions',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{accordion_title}}",
      fields: [{
        label: "Accordion Title",
        name: "accordion_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Accordion Content",
        name: "accordion_content",
        required: false,
        widget: "markdown",
        hint: "",
        default: ""
      },
      {
        label: "Asset",
        name: "accordion_asset",
        widget: "file",
        required: false
      }]
    }]
  }

  export default accordionSection