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
        format:"frontmatter",
        files: [
          {
            label: "Home",
            name: "home",
            file: "content/home.md",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string"
              },
              {
                label: "Publish Date",
                name: "date",
                widget: "datetime"
              },
              {
                label: "Body",
                name: "body",
                widget: "markdown"
              }
            ]
          },
          {
            label: "About",
            name: "about",
            file: "content/about.md",
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string"
              },
              {
                label: "Publish Date",
                name: "date",
                widget: "datetime"
              },
              {
                label: "Body",
                name: "body",
                widget: "markdown"
              }
            ]
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
            widget: "image",
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
            widget: "image",
            required: true
          },
          {
            label: "Body",
            name: "body",
            widget: "markdown",
            required: true
          }
        ]
      }
    ]
  }