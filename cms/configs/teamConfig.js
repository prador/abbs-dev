const teamConfig = {
    name: "team",
    label: "Team",
    create: true,
    format: "frontmatter",
    folder: "content/team/",
    slug: "{{slug}}",
    sortable_fields: ['order', 'title', 'name'],
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
        required: true
      },
      {
        label: "Title",
        name: "title",
        widget: "string",
        required: true
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
        options: ["Leadership Team", "Advisory Council", "Faculty Directory","Blank"],
      },
      {
        label: "Order",
        name: "order",
        widget: "number",
        required: false
      },
      {
        label: "Featured Image",
        name: "thumbnail",
        widget: "image",
        required: false
      },
      {
        label: "Body",
        name: "body",
        widget: "markdown",
        required: false
      }
    ]
  }

  export default teamConfig