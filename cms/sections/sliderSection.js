const sliderSection = {
    label: "Slider",
    name: "slider",
    fields: [{
      label: "Slides",
      name: "slides",
      required: true,
      widget: "list",
      summary: "{{slide_title}}",
      allow_add: true,
      fields: [{
        label: "Slide Image",
        name: "slide_image",
        widget: "image",
        required: false
      }, {
        label: "Slide Image Mobile",
        name: "slide_image_mobile",
        widget: "image",
        required: false
      }, {
        label: "Slide Title",
        name: "slide_title",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Slide Text",
        name: "slide_text",
        required: false,
        widget: "text",
        hint: "",
        default: ""
      }, {
        label: "Slide Button Label",
        name: "slide_button_label",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Slide Button Link",
        name: "slide_button_link",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }],
    }]
  }

export default sliderSection