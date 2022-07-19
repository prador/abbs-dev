const gallerySection = {
    label: 'Gallery Section',
    name: 'gallery_section',
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
      label: "Section Grid Size",
      name: "section_grid_size",
      widget: "select",
      options: ["grid-2", "grid-3", "grid-4"],
      required: false
    }, {
      label: 'Images',
      name: 'images',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      fields: [{
        label: "Image",
        name: "image",
        widget: "image",
        required: false
      }, {
        label: "Image Size",
        name: "image_size",
        widget: "select",
        options: ["small", "medium", "large"],
        required: false
      }, {
        label: "Image Title",
        name: "image_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }

  export default gallerySection