const textSection = {
    label: 'Text Section',
    name: 'text_section',
    required: false,
    widget: "list",
    hint: "",
    summary: "{{section_title}}",
    allow_add: true,
    fields: [{
      label: "Section ID",
      name: "section_id",
      required: false,
      widget: "string",
      hint: "this id should match the navigation anchor link on the side",
      default: ""
    }, {
      label: "Section Title",
      name: "section_title",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Section Image",
      name: "section_image",
      widget: "image",
      required: false
    }, {
      label: "Image Position",
      name: "image_position",
      widget: "select",
      options: ["Above Content", "Content Left", "Content Right", "Below Content"],
      required: false
    }, {
      label: "Section Text",
      name: "section_text",
      required: false,
      widget: "markdown",
      hint: "",
      default: ""
    }, {
      label: 'Buttons',
      name: 'buttons',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{button_label}}",
      fields: [{
        label: "Button Label",
        name: "button_label",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Button Link",
        name: "button_link",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }
export default textSection