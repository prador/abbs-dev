import textSection from "../sections/textSection"
import logoSection from "../sections/logoSection"
import anchorSection from "../sections/anchorSection"
import accordionSection from "../sections/accordionSection"
import gallerySection from "../sections/gallerySection"
import imageSection from "../sections/imageSection"
import embedSection from "../sections/embedSection"
import programDetailsSection from "../sections/programDetailsSection"
import programBriefSection from "../sections/programBriefSection"
import personSection from "../sections/personSection"
import testimonialsSection from "../sections/testimonialsSection"
import tableSection from "../sections/tableSection"
import collectionSection from "../sections/collectionSection"

const conferenceConfig = {
    name: "conference",
    label: "Conference",
    create: true,
    format: "frontmatter",
    folder: "content/conferences/",
    slug: "{{slug}}",
    fields: [{
        label: "Title",
        name: "title",
        widget: "string",
        required: true
      },
      {
        label: "Slug",
        name: "slug",
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
        widget: "date",
        required: true
      },
      {
        label: "Event End Date",
        name: "event_end_date",
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
        label: 'Content Sections',
        hint: "Adding one of multiple extra fields for the page, based on the need",
        name: 'sections',
        required: false,
        widget: "list",
        types: [
          textSection,
          logoSection,
          anchorSection,
          accordionSection,
          gallerySection,
          imageSection,
          embedSection,
          programDetailsSection,
          programBriefSection,
          personSection,
          testimonialsSection,
          tableSection,
          collectionSection
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
}


export default conferenceConfig