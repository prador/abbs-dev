const highlightSection = {
    label: 'Highlights Section',
    name: 'highlights_section',
    required: false,
    summary: "{{section_title}}",
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
      label: 'Highlights',
      name: 'highlights',
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
        label: "Logo Statistic",
        name: "logo_stat",
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

  export default highlightSection