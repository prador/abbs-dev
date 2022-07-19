const facultyConfig = {
    name: "Faculty",
    label: "Faculty",
    create: true,
    format: "frontmatter",
    folder: "content/faculty/",
    slug: "{{slug}}",
    sortable_fields: ['order', 'title', 'name'],
    fields: [{
        label: "Title",
        name: "title",
        widget: "string",
        required: true
      },
      {
        label: "Publish Date",
        name: "date",
        widget: "datetime",
        required: true
      },        
      {
        label: "Order",
        name: "order",
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
        label: "Tags",
        name: "tags",
        widget: "select",
        multiple: true,
        required: true,
        options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
        default:"Faculty Directory"
      },
      {
        label: "Featured Image",
        name: "thumbnail",
        widget: "image"
      },
      {
        label: "Description",
        name: "body",
        widget: "markdown",
        required: false
      },
      {
        label: "Full Description",
        name: "full_description",
        widget: "markdown",
        required: false
      }
    ]
  }

  export default facultyConfig