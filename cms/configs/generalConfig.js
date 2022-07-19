const generalConfig = {
    name: "general",
    label: "General",
    create: false,
    delete: false,
    format: "frontmatter",
    folder: "content/general/",
    slug: "{{slug}}",
    sortable_fields: ['order', 'title', 'name'],
    fields: [
      {
        label: "Header Scripts",
        name: "header_scripts",
        widget: "markdown",
        required: false,
        hint: "Add content or scripts here to be added on all pages, in the header"
      },
      {
        label: "Body Scripts",
        name: "body_scripts",
        widget: "markdown",
        required: false,
        hint: "Add content or scripts here to be added on all pages, in the body"
      }
    ]
  }

export default generalConfig