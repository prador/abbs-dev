const docsConfig = {
    name: "Docs",
    label: "Docs",
    create: true,
    format: "frontmatter",
    folder: "content/docs/",
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
        label: "Order",
        name: "order",
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
        label: "Certification",
        name: "certification",
        required: true,
        widget: "select",
        multiple: false,
        options: ["Academics","Affiliation Copy","AISHE","AICTE","AQAR","PO&CO","Calendar of Events","Compliance with RTI","Code of Conduct","Form 10B","IACBE","IQAC","NAAC","NBA","NIRF Data","Student Hand Book","Student feedback survey","UGC","Patents"],
        hint: "",
        default: ""
      },{
        label: "Asset",
        name: "asset",
        widget: "file",
        required: true,
        allow_multiple: true
      },
      {
        label: "Show in Docs",
        name: "show_toggle",
        widget: "boolean",
        default: true
      }
    ]
  }

export default docsConfig