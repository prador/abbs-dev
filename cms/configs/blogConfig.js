const blogConfig = {
    label: "Blog",
    name: "blog",
    format: "frontmatter",
    folder: "content/blogPosts",
    create: true,
    slug: "{{slug}}",
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
        label: "Featured Image",
        name: "thumbnail",
        widget: "image"
      },
      {
        label: "Body",
        name: "body",
        widget: "markdown",
        required: true
      }
    ]
  }

export default blogConfig