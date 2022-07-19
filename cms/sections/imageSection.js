const imageSection = {
    label: 'Image Section',
    name: 'image_section',
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
      label: 'Galleries',
      name: 'galleries',
      required: false,
      hint: "",
    }]
  }

export default imageSection