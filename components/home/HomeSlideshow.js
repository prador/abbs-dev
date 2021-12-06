
import Image from 'next/image'
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ArrowLeft from '../../assets/icons/arrow-left-white.svg'
import ArrowRight from '../../assets/icons/arrow-right-white.svg'
export default ({att}) => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop:true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(s) {
      setLoaded(true)
      s.container.addEventListener("mouseover", () => {
        setPause(true)
      })
      s.container.addEventListener("mouseout", () => {
        setPause(false)
      })
    },
  })
  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && instanceRef && !document.hidden) {
        instanceRef.current?.next()
      }
    }, 5000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, instanceRef])

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {att.map((slide,id,index) =>(
            <div key={id} className="keen-slider__slide" style={{backgroundImage: `url(${slide.slide_image})`}}>
              <div className="slide-content">
              {slide.slide_title ? <h2>{slide.slide_title} </h2> : "" }
              {slide.slide_text ? <p>{slide.slide_text}</p> :"" }
              {slide.slide_button_label ? <a className="btn btn-outline slide-btn" target="_blank" href={slide.slide_button_link ? slide.slide_button_link : "#"}>{slide.slide_button_label}</a> :"" }
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <div className="slide-controls">
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />
            <div className="slide-count"><span>{currentSlide+1}</span> / <span>{instanceRef.current.track.details.slides.length}</span></div>
            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </div>
        )}
      </div>
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <span className="arrow-bounding">
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.71 29.67"
    >
      {props.left && (
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_200" data-name="Group 200"><g id="Group_8-2" data-name="Group 8-2"><g id="Path_36-2" data-name="Path 36-2"><path className="cls-1" d="M1.48,13.24H38.23a1.48,1.48,0,1,1,0,3H1.48a1.48,1.48,0,0,1,0-3Z"/></g><g id="Path_37-2" data-name="Path 37-2"><path className="cls-1" d="M16,0a1.47,1.47,0,0,1,1.09.48A1.48,1.48,0,0,1,17,2.57L3.67,14.84,17,27.1a1.48,1.48,0,0,1,.09,2.09,1.47,1.47,0,0,1-2.09.09L.48,15.93A1.51,1.51,0,0,1,0,14.84a1.49,1.49,0,0,1,.48-1.09L15,.39A1.47,1.47,0,0,1,16,0Z"/></g></g></g></g></g> 
        )}
      {!props.left && (
        <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_200" data-name="Group 200"><g id="Group_8-2" data-name="Group 8-2"><path className="cls-1" d="M38.23 16.43H1.48a1.48 1.48 0 1 1 0-3h36.75a1.48 1.48 0 1 1 0 3Z" id="Path_36-2" data-name="Path 36-2"/><path className="cls-1" d="M23.69 29.67a1.47 1.47 0 0 1-1.09-.48 1.48 1.48 0 0 1 .09-2.09L36 14.84 22.69 2.57a1.48 1.48 0 1 1 2-2.18l14.53 13.36a1.46 1.46 0 0 1 .49 1.09 1.48 1.48 0 0 1-.49 1.09L24.69 29.28a1.47 1.47 0 0 1-1 .39Z" id="Path_37-2" data-name="Path 37-2"/></g></g></g></g>      
        )} 
    </svg>
    </span>
  )
}
