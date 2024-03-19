const newsConfig = {
name: "news",
label: "News",
create: true,
format: "frontmatter",
folder: "content/news/",
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
    widget: "image"
  },
  {
    label: "Brief Description",
    name: "brief_description",
    widget: "text",
    required: false
  },
  {
    label: "Body",
    name: "body",
    widget: "markdown",
    required: true
  },
  {
    label: "Tags",
    name: "tags",
    multiple: false,
    widget: "select",
    options: ["Education","Student Council","Festivals"],
    required: false
  }
]
}

export default newsConfig