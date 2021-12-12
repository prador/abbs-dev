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
  display_url: "https://your-site.com",
  logo_url: "../public/static/img/00-abbs-logo-black.svg",
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
            label:"Icon",
            name:"icon",
            widget: "image",
            required: false
          }, { 
            label:"Background Image",
            name:"bg_image",
            widget: "image",
            required: false
          }, {
            label:"Background Color",
            name:"bg_color",
            widget: "color",
            required: false
          }, {
            label:"Program",
            name:"program",
            widget: "string",
            required: false
          },{
            label: 'Links',
            name: 'links',
            required: false,
            widget: "list",
            hint: "",
            allow_add: true,
            fields: [ {
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
          label: "Body",
          name: "body",
          widget: "markdown",
          required: true
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
              fields: [
                {
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
                },{
                  label: "Section Image",
                  name: "section_image",
                  widget: "image",
                  required: false
                },{
                  label: "Image Position",
                  name:"image_position",
                  width:"select",
                  options: ["Above Title","Next to Content","After Content"],
                  required: false
                },{
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
                    fields: [ {
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
                label: 'Logos',
                name: 'logos',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{logo_title}}",
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
                },{
                  label: "Logo Image",
                  name: "logo_image",
                  widget: "image",
                  required: false
                }, {
                  label: "Logo Title",
                  name: "logo_title",
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
                fields: [ {
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
              },{
                label: 'Accordions',
                name: 'accordions',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{accordion_title}}",
                fields: [ {
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
              },{
                label: 'Galleries',
                name: 'galleries',
                required: false,
                hint: "",
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
              },{
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
              },{
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
                options: ["full", "half", "auto"],
                hint: "",
                default: ""
              }]
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
              },{
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
              },{
                label: "Collection Content",
                name: "collection_content",
                required: false,
                widget: "relation",
                hint: "",
                default: "",
                collection: "team",
                multiple: true,
                search_fields: ["name", "title"],
                display_fields: ["name", "title"],
                value_field: "title"
              }]
            },           
            {
              label: 'Text Image Section',
              name: 'text_image_section',
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
              },{
                label: 'Galleries',
                name: 'galleries',
                required: false,
                widget: "list",
                hint: "",
                allow_add: true,
                summary: "{{accordion_title}}",
                fields: [ {
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
      name: "FAQs",
      label: "FAQs",
      create: true,
      format: "frontmatter",
      folder: "content/faqs/",
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
        }
      ]
    },
    {
      name: "Programs",
      label: "Programs",
      create: true,
      format: "frontmatter",
      folder: "content/programs/",
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
      name: "Gallery",
      label: "Gallery",
      create: true,
      format: "frontmatter",
      folder: "content/gallery/",
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
      sortable_fields: ['order','title','name'],
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
          }, {
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
                }],
              }
            ]
          }]
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
          }]
        }
      ]
    }
  ]
}