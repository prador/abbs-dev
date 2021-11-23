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
  
    // Where to link the images
    public_folder: "static/img/",
    collections: [
      {
        name: "pages",
        label: "Pages",
        create: true,
        format:"frontmatter",
        folder: "content/pages/",
        slug: "{{slug}}",
        fields: [
          {
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
        label: "Blog",
        name: "blog",
        format:"frontmatter",
        folder: "content/blogPosts",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}_{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/bopPosts",
        create: true,
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/faqs/",
        slug: "{{slug}}",
        fields: [
          {
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
        name: "News",
        label: "News",
        create: true,
        format:"frontmatter",
        folder: "content/news/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/testimonials/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/videos/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/programs/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/gallery/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/faculty/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/docs/",
        slug: "{{slug}}",
        fields: [
          {
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
        format:"frontmatter",
        folder: "content/partners/",
        slug: "{{slug}}",
        fields: [
          {
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
        name: "Team",
        label: "Team",
        create: true,
        format:"frontmatter",
        folder: "content/team/",
        slug: "{{slug}}",
        fields: [
          {
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
        name: "Navigation",
        label: "Navigation",
        files: [
          {
            label: "Sidenav",
            name: "sidenav",
            slug: "{{slug}}",
            file: "content/navigation/sidenav.md",
            fields: [
              {
                label: "Logo",
                name: "logo",
                widget: "image"
              }
            ]
          },
          {
            label: "Footer",
            name: "footer",
            slug: "{{slug}}",
            file: "content/navigation/footer.md",
            fields: [
              {
                label: "Logo",
                name: "logo",
                widget: "image"
              }
            ]
          }
        ]
      }
    ]
  }