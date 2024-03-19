const eventConfig = {
    name: "events",
    label: "Events",
    create: true,
    format: "frontmatter",
    folder: "content/events/",
    slug: "{{slug}}",
    fields: [{
        label: "Title",
        name: "title",
        widget: "string",
        required: true
      },
      {
        label: "SEO Description",
        name: "seo_description",
        widget: "string",
        required: false
      },
      {
        label: "Publish Date",
        name: "date",
        widget: "datetime",
        required: true
      },
      {
        label: "Featured Image",
        name: "thumbnail",
        widget: "image",
        required: false
      },
      {
        label: "Event Date",
        name: "event_date",
        widget: "date",
        required: true
      },
      {
        label: "Event Link",
        name: "event_link",
        widget: "string",
        required: false
      },
      {
        label: "Tags",
        name: "tags",
        multiple: false,
        widget: "select",
        options: ["Education","Student Council","Festivals"],
        required: true
      },
      {
        label: "Body",
        name: "body",
        widget: "markdown",
        required: true
      }        
    ]
  }

  export default eventConfig