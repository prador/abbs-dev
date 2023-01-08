const textColumnSection = {
    label: 'Text Column Section',
    name: 'text_column_section',
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
      label: "Section Text",
      name: "section_text",
      required: false,
      widget: "markdown",
      hint: "",
      default: ""
    }, {
      label: 'Blocks',
      name: 'blocks',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{block_label}}",
      fields: [{
        label: "Block Title",
        name: "block_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      },{
        label: "Block Subtitle",
        name: "block_subtitle",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      },{
        label: "Block Image",
        name: "block_image",
        widget: "image",
        required: false
      },{
        label: "Background Color",
        name: "bg_color",
        widget: "color",
        required: false
      },{
        label: "Block Text",
        name: "block_text",
        required: false,
        widget: "markdown",
        hint: "",
        default: ""
      },{
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
export default textColumnSection