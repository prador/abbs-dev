const testimonialsSection = {
    label: 'Testimonials Section',
    name: 'testimonials_section',
    required: false,
    fields: [{
        label: "Section ID",
        name: "section_id",
        required: false,
        widget: "string",
        hint: "this id should match the navigation anchor link on the side",
        default: ""
      },{
        label: "Section Title",
        name: "section_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      },
      {
        label: "Show / Hide",
        name: "show_toggle",
        widget: "boolean",
        default: true
      },{
        label: "Program",
        name: "program",
        widget: "select",
        multiple: false,
        options: ["MBA","BBA","BBA Aviation Management","B. Sc. Biotechnology","M. Com.","B. Com.","B. Com Supply Chain & Logistics","BA Psychology","BA Journalism","BA Economics","BCA"],
        required: true
      },{
        label: "Testimonial Limit",
        name: "limit",
        widget: "number",
        default: 2,
        value_type: "int",
        min: 1,
        max: 5,
        step: 1
      }
    ]
  }

export default testimonialsSection