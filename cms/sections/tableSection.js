const tableSection = {
    label: 'Table Section',
    name: 'table_section',
    required: false,
    fields: [{
      label: "Section ID",
      name: "section_id",
      required: false,
      widget: "string",
      summary: "{{section_title}}",
      hint: "this id should match the navigation anchor link on the side",
      default: ""
    },{
      label: "Section Title",
      name: "section_title",
      required: false,
      widget: "string",
      hint: "",
      default: ""
    }, {
      label: "Table Content",
      name: "table_content",
      required: false,
      widget: "markdown",
      hint: "",
      default: ""
    }]
  }

  export default tableSection