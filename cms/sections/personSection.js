const personSection = {
    label: 'Person Section',
    name: 'person_section',
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
      label: 'People',
      name: 'people',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{name}}",
      fields: [{
        label: "Name",
        name: "name",
        widget: "string",
        required: true
      },
      {
        label: "Qualifications",
        name: "qualifications",
        widget: "string",
        required: false
      },
      {
        label: "Position",
        name: "position",
        widget: "string",
        required: false
      },
      {
        label: "Featured Image",
        name: "thumbnail",
        widget: "image",
        required: false
      },
      {
        label: "Description",
        name: "body",
        widget: "markdown",
        required: false
      }]
    }]
  }

  export default personSection