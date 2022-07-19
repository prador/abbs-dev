const testimonialConfig = {
    name: "Testimonials",
    label: "Testimonials",
    create: true,
    format: "frontmatter",
    folder: "content/testimonials/",
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
        widget: "image",
        required: false
      },
      {
        label: "Program",
        name: "program",
        widget: "select",
        multiple: false,
        options: ["MBA","BBA","BBA Aviation Management","B. Sc. Biotechnology","M. Com.","B. Com.","B. Com Supply Chain & Logistics","BA Psychology","BA Journalism","BA Economics","BCA"],
        required: true
      },
      {
        label: "Batch",
        name: "batch",
        widget: "select",
        multiple: false,
        options: ["2017-2018","2018-2019","2019-2020","2020-2021","2018-2021","2020","2021","2022","2023","2024"],
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

  export default testimonialConfig