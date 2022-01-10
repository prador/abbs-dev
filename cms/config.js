module.exports = {
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: "git-gateway",
    branch: "master",
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/static/img/",
  display_url: "abbs.edu.in",
  logo_url: "../00-abbs-logo-black.svg",
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
          label: "Slider Images",
          name: "slider_images",
          required: true,
          widget: "list",
          hint: "",
          default: "#",
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
        },
        {
          label: 'Recognition and Accreditation Section',
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
          label: "Body",
          name: "body",
          widget: "markdown",
          required: false
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
              label: 'Program Section',
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
      label: "Nog",
      name: "nog",
      format: "frontmatter",
      folder: "content/bopPosts",
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
          label: "Body",
          name: "body",
          widget: "markdown",
          required: true
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
          widget: "image"
        },
        {
          label: "Event Date",
          name: "event_date",
          widget: "datetime",
          required: true
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
          required: true
        },
        {
          label: "Event Link",
          name: "event_link",
          widget: "string",
          required: true
        },
        {
          label: "Tags",
          name: "tags",
          multiple: false,
          widget: "select",
          options: ["Education","Student Council","Festivals"],
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
          widget: "image"
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
          options: ["2017-2018","2018-2019","2019-2020","2020-2021"],
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
      name: "Videos",
      label: "Videos",
      create: true,
      format: "frontmatter",
      folder: "content/videos/",
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
        },
        {
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
          multiple: false,
          options: ["large", "half", "auto"],
          hint: "",
          default: ""
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
      name: "Partners",
      label: "Partners",
      create: true,
      format: "frontmatter",
      folder: "content/partners/",
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
          label: "Tags",
          name: "tags",
          widget: "select",
          multiple: true,
          required: true,
          options: ["Leadership Team", "Advisory Council", "Faculty"]
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
    }
  ]
}