const TextSection = {
    // Visible label
    label: 'Text Section',
    // Internal id of the component
    id: 'text_section',
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      {
        label: "Section ID",
        name: "section_id",
        required: true,
        widget: "string",
        hint: "this id should match the navigation anchor link on the side",
        default: ""
      },
      {
        label: "Section Image",
        name: "section_image",
        widget: "image",
        required: false
      },
      {
        label: "Section Title",
        name: "section_title",
        required: true,
        widget: "string",
        hint: "",
        default: ""
      }, {
        label: "Section Text",
        name: "section_text",
        required: true,
        widget: "text",
        hint: "",
        default: ""
      },{
        label: "Section Button Label",
        name: "section_button_label",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      },{
        label: "Section Button Link",
        name: "section_button_link",
        required: false,
        widget: "string",
        hint: "",
        default: ""
      }
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^<span>(.*)<\/span>*$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        section_id: match[1],
        section_image: match[2],
        section_title: match[3],
        section_text: match[4],
        section_button_label: match[5],
        section_button_link: match[6],
      }
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
      return `
      ${obj.section_id}
      ${obj.section_image}
      ${obj.section_title}
      ${obj.section_text}
      ${obj.section_button_label}
      ${obj.section_button_link}
      `;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {
      return `
      ${obj.section_id}
      ${obj.section_image}
      ${obj.section_title}
      ${obj.section_text}
      ${obj.section_button_label}
      ${obj.section_button_link}
      `;
    }
  }
  
  export default TextSection;