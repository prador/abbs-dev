const announceSection = {
    label: 'Announcement Section',
    name: 'announcement_section',
    summary: "Announcement Section",
    required: false,
    widget: "object",
    fields: [{
      label: 'Announcements',
      name: 'announcements',
      required: false,
      widget: "list",
      hint: "",
      allow_add: true,
      summary: "{{Announcement_title}}",
      fields: [{
        label: "Announcement Title",
        name: "announcement_title",
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Announcement Link",
        name: "announcement_link",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }]
    }]
  }

export default announceSection