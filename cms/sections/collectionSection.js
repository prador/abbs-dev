const collectionSection = {
    label: 'Collection Section',
    name: 'collection_section',
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
      label: "Collection Content",
      name: "collection_content",
      required: false,
      widget: "select",
      options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
      hint: "",
    },{
      label: "Show in page",
      name: "show_toggle",
      widget: "boolean",
      default: true
    }]
  }

  export default collectionSection