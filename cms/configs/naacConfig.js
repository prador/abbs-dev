const naacConfig = {
    name: "NAAC_docs",
    label: "NAAC Docs",
    create: true,
    format: "frontmatter",
    folder: "content/naac_docs/",
    slug: "{{slug}}",
    fields: [{
        label: "Title",
        name: "title",
        widget: "string",
        required: true
      },
      {
        label: "Description",
        name: "description",
        widget: "string",
        required: false
      },
      {
        label: "Index number",
        name: "index",
        widget: "string",
        required: true
      },
      {
        label: "Section",
        name: "section",
        required: true,
        widget: "select",
        multiple: false,
        options: ["SSR","DVV"],
        hint: "",
        default: "SSR"
      },
      {
        label: "Category",
        name: "category",
        required: false,
        widget: "select",
        multiple: false,
        options: ["ABBS NAAC Visit video","Self Study Report","Extended Profile","Criteria - 1 Curricular Aspects","Criteria - 2 Teaching Learning and Evaluation","Criteria - 3 Research, Consultancy and Extension","Criteria - 4 Infrastructure and Learning Resources","Criteria - 5 Student Support and Progression","Criteria - 6 Governance, Leadership and Management","Criteria - 7 Institutional values and Best Practices"],
        hint: "",
        default: ""
      },
      {
        label: "Document",
        name: "document",
        widget: "file",
        required: false,
        allow_multiple: true
      },
      {
        label: "Show in Docs",
        name: "show_toggle",
        widget: "boolean",
        default: true
      },
      {
        label: "Publish Date",
        name: "date",
        widget: "datetime",
        required: true
      }
    ]
  }

  export default naacConfig