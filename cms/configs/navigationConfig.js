const navigationConfig = {
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
  }


export default navigationConfig