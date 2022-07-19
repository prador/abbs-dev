const anchorSection = {
    label: 'Anchor Section',
    name: 'anchor_section',
    required: false,
    fields: [{
      label: 'Links',
      name: 'links',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{anchor_label}}",
      fields: [{
        label: "Anchor Label",
        name: "anchor_label",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Anchor Location",
        name: "anchor_loc",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }

export default anchorSection