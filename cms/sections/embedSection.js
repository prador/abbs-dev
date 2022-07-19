const embedSection = {
    label: 'Embed Section',
    name: 'embed_section',
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
        label: "Embed Source",
        name: "embed_source",
        required: false,
        widget: "text",
        hint: "",
        default: ""
      },
      {
        label: "Embed Size",
        name: "embed_size",
        required: false,
        widget: "select",
        options: ["large", "half", "auto"],
        hint: "",
        default: ""
      }
    ]
  }

  export default embedSection