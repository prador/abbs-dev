import Link from 'next/link';
import react from 'react';
import remark from 'remark';
import html from 'remark-html';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    autoplaySpeed: 3000,
    boxShadow: 'none',
    disableKeyboardControls: false,
    disablePanzoom: false,
    disableWheelControls: false,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.3,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(30, 30, 30, 0.9)',
    slideAnimationType: 'fade',
    slideSpringValues: [300, 50],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
    usingPreact: false
  },
  buttons: {
    backgroundColor: 'rgba(30,30,36,0.8)',
    iconColor: 'rgba(255, 255, 255, 0.8)',
    iconPadding: '10px',
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
    size: '40px'
  }
}
const GallerySection = ({att}) => {
  return (
  <>
    <section className="gallery-section-wrapper">
    {att.section_title ? <h2 className="section-title" id={att.section_id}><span className="header-hyphen"></span>{att.section_title}</h2> : "" }
    {att.images ?
        <div className={"image-section-block "+`${att.section_grid_size ? att.section_grid_size : ""}`}>
        <SRLWrapper options={options} >
          {att.images.map((image) => (
          <div key={image.id} className="gallery-image">
            <img src={"../"+image.image} className={"image-image "+`${image.image_size ? image.image_size : ""}`} alt={image.image_title}/>
            {image.image_title ? <h6 className="image-title">{image.image_title}</h6> : ""}
          </div>
        ))}
        </SRLWrapper>
      </div>
      : "" }
    </section>
  </>
)}

export default GallerySection
