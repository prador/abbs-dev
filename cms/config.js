module.exports = {
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: "git-gateway",
    branch: "main",
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/static/img/",
  display_url: "abbs.edu.in",
  logo_url: "static/img/00-abbs-logo-black.svg",
  // Where to link the images
  public_folder: "static/img/",
  collections: [{
      name: "homepage",
      label: "Homepage",
      create: false,
      delete: false,
      format: "frontmatter",
      folder: "content/home/",
      slug: "{{slug}}",
      fields: [{
          label: "Title",
          name: "title",
          widget: "string",
          required: true
        },
        {
          label: "SEO Title",
          name: "seo_title",
          widget: "string",
          // required: true
        },
        {
          label: "SEO Description",
          name: "seo_description",
          widget: "string",
          // required: true
        },
        {
          label: "SEO Keywords",
          name: "seo_keywords",
          widget: "string"
        },        
        
        {
          label: "Publish Date",
          name: "date",
          widget: "datetime",
          required: true
        },
        {
          label: 'Content Sections',
          hint: "Adding one of multiple extra fields for the page, based on the need",
          name: 'sections',
          required: false,
          widget: "list",
          types: [{
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
          },
          {
            label: "Program Selector",
            name: "program_select",
            fields: [{
              label: "Show Program Selector",
              name: "show_program_select",
              widget: "boolean",
              default: true
            }]
          },
          {
            label: "News and Events",
            name: "news_events_section",
            fields: [{
              label: "Show News and Events",
              name: "show_news_events",
              widget: "boolean",
              default: true
            }]
          },
          {
            label: "Program Accordion",
            name: "program_accordion",
            required: true,
            widget: "list",
            hint: "",
            default: "#",
            allow_add: true,
            fields: [{
              label: "programs",
              name: "programs",
              widget: "list",
              summary: "{{program}}",
              allow_add: true,
              fields: [{
                label: "Icon",
                name: "icon",
                widget: "image",
                required: false
              }, {
                label: "Background Image",
                name: "bg_image",
                widget: "image",
                required: false
              }, 
              {
                label: "Background Color",
                name: "bg_color",
                widget: "color",
                required: false
              },
              {
                label: "Program",
                name: "program",
                widget: "string",
                required: false
              }, {
                label: 'Links',
                name: 'links',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                fields: [{
                  label: "Program Name",
                  name: "name",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Program Location",
                  name: "loc",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            }]
          },
          {
            label: 'Recognition and Accreditation',
            name: 'rec_acc_section',
            required: false,
            widget: "object",
            fields: [{
              label: "Section ID",
              name: "section_id",
              required: false,
              widget: "string",
              hint: "this id should match the navigation anchor link on the side",
              default: ""
            }, {
              label: "Section Image",
              name: "section_image",
              widget: "image",
              required: false
            }, {
              label: "Section Title",
              name: "section_title",
              required: false,
              widget: "string",
              hint: "",
              default: ""
            }, {
              label: "Section Grid Size",
              name: "section_grid_size",
              widget: "select",
              options: ["grid-2", "grid-3", "grid-4"],
              required: false
            }, {
              label: "Section Text",
              name: "section_text",
              widget: "text",
              required: false
            },{
              label: 'Logos',
              name: 'logos',
              required: false,
              widget: "list",
              hint: "",
              allow_add: true,
              summary: "{{logo_title}}",
              fields: [{
                label: "Logo Image",
                name: "logo_image",
                widget: "image",
                required: false
              }, {
                label: "Logo Size",
                name: "logo_size",
                widget: "select",
                options: ["small", "medium", "large"],
                required: false
              }, {
                label: "Logo Title",
                name: "logo_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Logo Subtitle",
                name: "logo_subtitle",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Logo Link",
                name: "logo_link",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }]
            }]
          },
          {
            label: 'FAQ Section',
            name: 'faq_section',
            summary: "FAQ Section",
            required: false,
            widget: "object",
            fields: [{
              label: "Section ID",
              name: "section_id",
              required: false,
              widget: "string",
              hint: "this id should match the navigation anchor link on the side",
              default: ""
            }, {
              label: "Section Image",
              name: "section_image",
              widget: "image",
              required: false
            },{
              label: "Image Position",
              name: "image_position",
              widget: "select",
              options: ["Above Content", "Content Left", "Content Right", "Below Content"],
              required: false
            }, {
              label: "Section Title",
              name: "section_title",
              required: false,
              widget: "string",
              hint: "",
              default: ""
            }, {
              label: 'Accordions',
              name: 'accordions',
              required: false,
              widget: "list",
              hint: "",
              allow_add: true,
              summary: "{{accordion_title}}",
              fields: [{
                label: "Accordion Title",
                name: "accordion_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Accordion Content",
                name: "accordion_content",
                required: false,
                widget: "markdown",
                hint: "",
                default: ""
              }]
            }]
          },{
              label: 'Text Section',
              name: 'text_section',
              required: false,
              widget: "list",
              hint: "",
              summary: "{{section_title}}",
              allow_add: true,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Image Position",
                name: "image_position",
                widget: "select",
                options: ["Above Content", "Content Left", "Content Right", "Below Content"],
                required: false
              }, {
                label: "Section Text",
                name: "section_text",
                required: false,
                widget: "markdown",
                hint: "",
                default: ""
              }, {
                label: 'Buttons',
                name: 'buttons',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{button_label}}",
                fields: [{
                  label: "Button Label",
                  name: "button_label",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Button Link",
                  name: "button_link",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Logo Section',
              name: 'logo_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Grid Size",
                name: "section_grid_size",
                widget: "select",
                options: ["grid-2", "grid-3", "grid-4"],
                required: false
              }, {
                label: 'Logos',
                name: 'logos',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{logo_title}}",
                fields: [{
                  label: "Logo Image",
                  name: "logo_image",
                  widget: "image",
                  required: false
                }, {
                  label: "Logo Size",
                  name: "logo_size",
                  widget: "select",
                  options: ["small", "medium", "large"],
                  required: false
                }, {
                  label: "Logo Title",
                  name: "logo_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Logo Subtitle",
                  name: "logo_subtitle",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Logo Link",
                  name: "logo_link",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
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
            },
            {
              label: 'Accordion Section',
              name: 'accordion_section',
              summary: "{{section_title}}",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Accordions',
                name: 'accordions',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{accordion_title}}",
                fields: [{
                  label: "Accordion Title",
                  name: "accordion_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Accordion Content",
                  name: "accordion_content",
                  required: false,
                  widget: "markdown",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Gallery Section',
              name: 'gallery_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Grid Size",
                name: "section_grid_size",
                widget: "select",
                options: ["grid-2", "grid-3", "grid-4"],
                required: false
              }, {
                label: 'Images',
                name: 'images',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                fields: [{
                  label: "Image",
                  name: "image",
                  widget: "image",
                  required: false
                }, {
                  label: "Image Size",
                  name: "image_size",
                  widget: "select",
                  options: ["small", "medium", "large"],
                  required: false
                }, {
                  label: "Image Title",
                  name: "image_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Image Section',
              name: 'image_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Galleries',
                name: 'galleries',
                required: false,
                hint: "",
              }]
            },
            {
              label: 'Embed Section',
              name: 'embed_section',
              required: false,
              fields: [{
                  label: "Section ID",
                  name: "section_id",
                  required: false,
                  widget: "string",
                  hint: "this id should match the navigation anchor link on the side",
                  default: ""
                }, {
                  label: "Section Image",
                  name: "section_image",
                  widget: "image",
                  required: false
                }, {
                  label: "Section Title",
                  name: "section_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Embed Source",
                  name: "embed_source",
                  required: false,
                  widget: "text",
                  hint: "",
                  default: ""
                },
                {
                  label: "Embed Size",
                  name: "embed_size",
                  required: false,
                  widget: "select",
                  options: ["large", "half", "auto"],
                  hint: "",
                  default: ""
                }
              ]
            },
            {
              label: "Program Details",
              name: "program_details",
              required: true,
              widget: "object",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                label: "Next Intake",
                name: "next_intake",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Duration",
                name: "duration",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Credentials",
                name: "credentials",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Apply Form",
                name: "apply_form",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Contact Form",
                name: "contact_form",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Request Brochure Link",
                name: "request_brochure_link",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Brochure",
                name: "brochure",
                required: false,
                widget: "file",
                hint: "",
                default: ""
              }
            ]
            },
            {
              label: 'Program Brief Section',
              name: 'program_section',
              summary: "{{section_title}} Programs ",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Logo",
                name: "section_logo",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Programs',
                name: 'programs',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{program_title}}",
                fields: [{
                  label: "Program Title",
                  name: "program_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Program Content",
                  name: "program_content",
                  required: false,
                  widget: "markdown",
                  hint: "",
                  default: ""
                },{
                  label: "Program Link Label",
                  name: "program_link_label",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Program Link Location",
                  name: "program_link_loc",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Person Section',
              name: 'person_section',
              summary: "{{section_title}}",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'People',
                name: 'people',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{name}}",
                fields: [{
                  label: "Name",
                  name: "name",
                  widget: "string",
                  required: true
                },
                {
                  label: "Qualifications",
                  name: "qualifications",
                  widget: "string",
                  required: false
                },
                {
                  label: "Position",
                  name: "position",
                  widget: "string",
                  required: false
                },
                {
                  label: "Featured Image",
                  name: "thumbnail",
                  widget: "image",
                  required: false
                },
                {
                  label: "Description",
                  name: "body",
                  widget: "markdown",
                  required: false
                }]
              }]
            },
            {
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
            },
            {
              label: 'Table Section',
              name: 'table_section',
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
              }, {
                label: "Table Content",
                name: "table_content",
                required: false,
                widget: "markdown",
                hint: "",
                default: ""
              }]
            },
            {
              label: 'Collection Section',
              name: 'collection_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Collection Content",
                name: "collection_content",
                required: false,
                widget: "select",
                options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
                hint: "",
              }]
            }
          ]
        },
        {
          label: "Header Scripts",
          name: "header_scripts",
          widget: "text",
          required: false,
          hint: "Add content or scripts here to be added on all pages, in the header"
        },
        {
          label: "Body Scripts",
          name: "body_scripts",
          widget: "text",
          required: false,
          hint: "Add content or scripts here to be added on all pages, in the body"
        }
      ]
    },
    {
      name: "pages",
      label: "Pages",
      create: true,
      delete: false,
      format: "frontmatter",
      folder: "content/pages/",
      slug: "{{slug}}",
      nested: {
        depth: 10
      },
      meta: {
        path: {
          widget: "string",
          label: 'Path',
          index_file: "index"
        }
      },
      fields: [{
          label: "Title",
          name: "title",
          widget: "string",
          required: true
        },
        {
          label: "SEO Title",
          name: "seo_title",
          widget: "string",
          required: false
        },
        {
          label: "SEO Description",
          name: "seo_description",
          widget: "string",
          required: false
        },
        {
          label: "SEO Keywords",
          name: "seo_keywords",
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
          label: "Body",
          name: "body",
          widget: "markdown",
          required: false
        },
        {
          label: 'Content Sections',
          hint: "Adding one of multiple extra fields for the page, based on the need",
          name: 'sections',
          required: false,
          widget: "list",
          types: [{
              label: 'Text Section',
              name: 'text_section',
              required: false,
              widget: "list",
              hint: "",
              summary: "{{section_title}}",
              allow_add: true,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Image Position",
                name: "image_position",
                widget: "select",
                options: ["Above Content", "Content Left", "Content Right", "Below Content"],
                required: false
              }, {
                label: "Section Text",
                name: "section_text",
                required: false,
                widget: "markdown",
                hint: "",
                default: ""
              }, {
                label: 'Buttons',
                name: 'buttons',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{button_label}}",
                fields: [{
                  label: "Button Label",
                  name: "button_label",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Button Link",
                  name: "button_link",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Logo Section',
              name: 'logo_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Grid Size",
                name: "section_grid_size",
                widget: "select",
                options: ["grid-2", "grid-3", "grid-4"],
                required: false
              }, {
                label: 'Logos',
                name: 'logos',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{logo_title}}",
                fields: [{
                  label: "Logo Image",
                  name: "logo_image",
                  widget: "image",
                  required: false
                }, {
                  label: "Logo Size",
                  name: "logo_size",
                  widget: "select",
                  options: ["small", "medium", "large"],
                  required: false
                }, {
                  label: "Logo Title",
                  name: "logo_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Logo Subtitle",
                  name: "logo_subtitle",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Logo Link",
                  name: "logo_link",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
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
            },
            {
              label: 'Accordion Section',
              name: 'accordion_section',
              summary: "{{section_title}}",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Accordions',
                name: 'accordions',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{accordion_title}}",
                fields: [{
                  label: "Accordion Title",
                  name: "accordion_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Accordion Content",
                  name: "accordion_content",
                  required: false,
                  widget: "markdown",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Gallery Section',
              name: 'gallery_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Section Grid Size",
                name: "section_grid_size",
                widget: "select",
                options: ["grid-2", "grid-3", "grid-4"],
                required: false
              }, {
                label: 'Images',
                name: 'images',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                fields: [{
                  label: "Image",
                  name: "image",
                  widget: "image",
                  required: false
                }, {
                  label: "Image Size",
                  name: "image_size",
                  widget: "select",
                  options: ["small", "medium", "large"],
                  required: false
                }, {
                  label: "Image Title",
                  name: "image_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Image Section',
              name: 'image_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Galleries',
                name: 'galleries',
                required: false,
                hint: "",
              }]
            },
            {
              label: 'Embed Section',
              name: 'embed_section',
              required: false,
              fields: [{
                  label: "Section ID",
                  name: "section_id",
                  required: false,
                  widget: "string",
                  hint: "this id should match the navigation anchor link on the side",
                  default: ""
                }, {
                  label: "Section Image",
                  name: "section_image",
                  widget: "image",
                  required: false
                }, {
                  label: "Section Title",
                  name: "section_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Embed Source",
                  name: "embed_source",
                  required: false,
                  widget: "text",
                  hint: "",
                  default: ""
                },
                {
                  label: "Embed Size",
                  name: "embed_size",
                  required: false,
                  widget: "select",
                  options: ["large", "half", "auto"],
                  hint: "",
                  default: ""
                }
              ]
            },
            {
              label: "Program Details",
              name: "program_details",
              required: true,
              widget: "object",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                label: "Next Intake",
                name: "next_intake",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Duration",
                name: "duration",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Credentials",
                name: "credentials",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Apply Form",
                name: "apply_form",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Contact Form",
                name: "contact_form",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Request Brochure Link",
                name: "request_brochure_link",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Brochure",
                name: "brochure",
                required: false,
                widget: "file",
                hint: "",
                default: ""
              }
            ]
            },
            {
              label: 'Program Brief Section',
              name: 'program_section',
              summary: "{{section_title}} Programs ",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Logo",
                name: "section_logo",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'Programs',
                name: 'programs',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{program_title}}",
                fields: [{
                  label: "Program Title",
                  name: "program_title",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Program Content",
                  name: "program_content",
                  required: false,
                  widget: "markdown",
                  hint: "",
                  default: ""
                },{
                  label: "Program Link Label",
                  name: "program_link_label",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }, {
                  label: "Program Link Location",
                  name: "program_link_loc",
                  required: false,
                  widget: "string",
                  hint: "",
                  default: ""
                }]
              }]
            },
            {
              label: 'Person Section',
              name: 'person_section',
              summary: "{{section_title}}",
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: 'People',
                name: 'people',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{name}}",
                fields: [{
                  label: "Name",
                  name: "name",
                  widget: "string",
                  required: true
                },
                {
                  label: "Qualifications",
                  name: "qualifications",
                  widget: "string",
                  required: false
                },
                {
                  label: "Position",
                  name: "position",
                  widget: "string",
                  required: false
                },
                {
                  label: "Featured Image",
                  name: "thumbnail",
                  widget: "image",
                  required: false
                },
                {
                  label: "Description",
                  name: "body",
                  widget: "markdown",
                  required: false
                }]
              }]
            },
            {
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
            },
            {
              label: 'Table Section',
              name: 'table_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Table Content",
                name: "table_content",
                required: false,
                widget: "markdown",
                hint: "",
                default: ""
              }]
            },
            {
              label: 'Collection Section',
              name: 'collection_section',
              required: false,
              fields: [{
                label: "Section ID",
                name: "section_id",
                required: false,
                widget: "string",
                hint: "this id should match the navigation anchor link on the side",
                default: ""
              }, {
                label: "Section Image",
                name: "section_image",
                widget: "image",
                required: false
              }, {
                label: "Section Title",
                name: "section_title",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Collection Content",
                name: "collection_content",
                required: false,
                widget: "select",
                options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
                hint: "",
              }]
            }
          ]
        }
      ]
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      name: "Faculty",
      label: "Faculty",
      create: true,
      format: "frontmatter",
      folder: "content/faculty/",
      slug: "{{slug}}",
      sortable_fields: ['order', 'title', 'name'],
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
          label: "Qualifications",
          name: "qualifications",
          widget: "string",
          required: false
        },
        {
          label: "Position",
          name: "position",
          widget: "string",
          required: false
        },
        {
          label: "Tags",
          name: "tags",
          widget: "select",
          multiple: true,
          required: true,
          options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
          default:"Faculty Directory"
        },
        {
          label: "Featured Image",
          name: "thumbnail",
          widget: "image"
        },
        {
          label: "Description",
          name: "body",
          widget: "markdown",
          required: false
        },
        {
          label: "Full Description",
          name: "full_description",
          widget: "markdown",
          required: false
        }
      ]
    },
    {
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
          options: ["Academics","Affiliation Copy","AISHE","AICTE","AQAR","PO&CO","Calendar of Events","Compliance with RTI","Code of Conduct","Form 10B","IACBE","IQAC","NAAC","NBA","NIRF Data","Student Hand Book","Student feedback survey","UGC"],
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
    },
    {
      name: "NAAC_docs",
      label: "NAAC Docs",
      create: true,
      format: "frontmatter",
      folder: "content/naac_docs/",
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
          label: "Index number",
          name: "index",
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
          label: "Section",
          name: "section",
          required: true,
          widget: "select",
          multiple: false,
          options: ["SSR","DVV"],
          hint: "",
          default: ""
        },
        {
          label: "Category",
          name: "category",
          required: false,
          widget: "select",
          multiple: false,
          options: ["ABBS NAAC Visit video","Self Study Report","Extended Profile","Criteria - 1 Curricular Aspects","Criteria - 2 Teaching Learning and Evaluation","Criteria - 3 Research, Consultancy and Extension","Criteria - 4 Infrastructure and Learning Resources","Criteria - 5 Student Support and Progression","Criteria - 6 Governance, Leadership and Management","Criteria - 7 Innovations and Best Practices"],
          hint: "",
          default: ""
        },
        {
          label: "Document",
          name: "document",
          widget: "file",
          required: false,
          allow_multiple: true
        },
        {
          label: "Show in Docs",
          name: "show_toggle",
          widget: "boolean",
          default: true
        }
      ]
    },
    {
      name: "team",
      label: "Team",
      create: true,
      format: "frontmatter",
      folder: "content/team/",
      slug: "{{slug}}",
      sortable_fields: ['order', 'title', 'name'],
      fields: [{
          label: "Name",
          name: "name",
          widget: "string",
          required: true
        },
        {
          label: "Qualifications",
          name: "qualifications",
          widget: "string",
          required: true
        },
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true
        },
        {
          label: "Position",
          name: "position",
          widget: "string",
          required: false
        },
        {
          label: "Tags",
          name: "tags",
          widget: "select",
          multiple: true,
          required: true,
          options: ["Leadership Team", "Advisory Council", "Faculty Directory"],
        },
        {
          label: "Order",
          name: "order",
          widget: "number",
          required: false
        },
        {
          label: "Featured Image",
          name: "thumbnail",
          widget: "image",
          required: false
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
          required: false
        }
      ]
    },
    {
      name: "Navigation",
      label: "Navigation",
      files: [{
          label: "Sidenav",
          name: "sidenav",
          slug: "{{slug}}",
          file: "content/navigation/sidenav.md",
          fields: [{
              label: "Logo",
              name: "logo",
              widget: "image"
            },
            {
              label: "Top Level Menu",
              name: "top_menu",
              required: true,
              widget: "list",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                  label: "Menu Title",
                  name: "menu_title",
                  required: true,
                  widget: "string",
                  hint: "Name of the menu level",
                  default: ""
                },
                {
                  label: "Menu ID",
                  name: "menu_id",
                  required: false,
                  widget: "string",
                  hint: "Id for the menu. It should be lowercase, separated by hypens. Like 'abbs-edge' ",
                  default: ""
                }, {
                  label: "Parent Menu ID",
                  name: "parent_menu_id",
                  required: false,
                  widget: "string",
                  hint: "Id for the parent menu. Leave blank for root menu. add menu_id for level 1 and level 2 menus. It should be lowercase, separated by hypens. Like 'abbs-edge' ",
                  default: ""
                }, {
                  label: "Menu Links List",
                  name: "menu_nav_list",
                  required: false,
                  widget: "list",
                  hint: "List of links to be added to the menu",
                  allow_add: true,
                  fields: [{
                    label: "Menu Nav Label",
                    name: "menu_nav_label",
                    required: false,
                    widget: "string",
                    hint: "",
                    default: ""
                  }, {
                    label: "Menu Nav Link",
                    name: "menu_nav_link",
                    required: false,
                    widget: "string",
                    hint: "",
                    hint: "",
                    default: ""
                  }, {
                    label: "SubMenu Link",
                    name: "submenu_link",
                    required: false,
                    widget: "string",
                    hint: "If the link navigated to a submenu, add the id of the submenu. If not, leave blank",
                    default: ""
                  }, {
                    label: "Show in menu",
                    name: "show",
                    required: false,
                    widget: "boolean",
                    default: true
                  },
                  {
                    label: "Nav Link Colour",
                    name: "nav_link_color",
                    widget:"color",
                    default:"transparent",
                    required: false
                  }],
                }
              ]
            }
          ]
        },
        {
          label: "Footer",
          name: "footer",
          slug: "{{slug}}",
          file: "content/navigation/footer.md",
          fields: [{
              label: "Logo",
              name: "logo",
              widget: "image"
            },
            {
              label: "Social Links",
              name: "social_links",
              required: true,
              widget: "list",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                label: "Column Link Label",
                name: "links_label",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Column Link Location",
                name: "links_loc",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Show in menu",
                name: "show",
                required: false,
                widget: "boolean",
                default: true
              }]
            },
            {
              label: "Footer copyright",
              name: "footer_copyright",
              required: false,
              widget: "string",
              hint: "",
              default: ""
            },
            {
              label: "Footer Links",
              name: "footer_links",
              required: true,
              widget: "list",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                label: "Link Label",
                name: "links_label",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Link Location",
                name: "links_loc",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Show in menu",
                name: "show",
                required: false,
                widget: "boolean",
                default: true
              }]
            },
            {
              label: "Contact Info",
              name: "contact_info",
              required: true,
              widget: "object",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                label: "Address",
                name: "address",
                required: false,
                widget: "text",
                hint: "",
                default: ""
              }, {
                label: "Contact number",
                name: "contact_number",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Whatsapp number",
                name: "whatsapp_number",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Admissions number",
                name: "admissions_number",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Contact email",
                name: "contact_email",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }, {
                label: "Admissions email",
                name: "admissions_email",
                required: false,
                widget: "string",
                hint: "",
                default: ""
              }
            ]
            },
            {
              label: "Columns",
              name: "columns",
              required: true,
              widget: "list",
              hint: "",
              default: "#",
              allow_add: true,
              fields: [{
                  label: "Column Title",
                  name: "col_title",
                  required: true,
                  widget: "string",
                  hint: "Name of the menu level",
                  default: ""
                },
                {
                  label: "Column ID",
                  name: "col_id",
                  required: false,
                  widget: "string",
                  hint: "Id for the menu. It should be lowercase, separated by hypens. Like 'abbs-edge' ",
                  default: ""
                }, {
                  label: "Columns Links List",
                  name: "links_list",
                  required: false,
                  widget: "list",
                  hint: "List of links to be added to the menu",
                  allow_add: true,
                  fields: [{
                    label: "Column Link Label",
                    name: "links_label",
                    required: false,
                    widget: "string",
                    hint: "",
                    default: ""
                  }, {
                    label: "Column Link Location",
                    name: "links_loc",
                    required: false,
                    widget: "string",
                    hint: "",
                    default: ""
                  }, {
                    label: "Show in menu",
                    name: "show",
                    required: false,
                    widget: "boolean",
                    default: true
                  }],
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "general",
      label: "General",
      create: false,
      delete: false,
      format: "frontmatter",
      folder: "content/general/",
      slug: "{{slug}}",
      sortable_fields: ['order', 'title', 'name'],
      fields: [
        {
          label: "Header Scripts",
          name: "header_scripts",
          widget: "markdown",
          required: false,
          hint: "Add content or scripts here to be added on all pages, in the header"
        },
        {
          label: "Body Scripts",
          name: "body_scripts",
          widget: "markdown",
          required: false,
          hint: "Add content or scripts here to be added on all pages, in the body"
        }
      ]
    }
  ]
}