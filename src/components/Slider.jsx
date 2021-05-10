import { useState } from 'react'
// import TinySlider from 'tiny-slider-react'

import slidesItem1 from '../images/mobile-image-hero-1.jpg'
import slidesItem2 from '../images/mobile-image-hero-2.jpg'
import slidesItem3 from '../images/mobile-image-hero-3.jpg'

import { ReactComponent as PrevSlideIcon } from '../images/icon-angle-left.svg'
import { ReactComponent as NextSlideIcon } from '../images/icon-angle-right.svg'
import styles from './Slider.module.css'

function Slider() {
  const slides = [slidesItem1, slidesItem2, slidesItem3]

  const [activeSliderIdx, setActiveSliderIdx] = useState(0)

  const goTo = (dir) => {
    const lastIndex = slides.length - 1
    const getNewIndex = {
      next: () => (activeSliderIdx === lastIndex ? 0 : activeSliderIdx + 1),
      prev: () => (activeSliderIdx === 0 ? lastIndex : activeSliderIdx - 1)
    }

    const newIndex = getNewIndex[dir]()
    setActiveSliderIdx(newIndex)
  }

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderContainer}
        style={{
          transform: `translateX(${activeSliderIdx * -100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={`slider-item-${index}`}
            src={slide}
            data-src={slide}
            alt={`slider-item-${index}`}
            className={styles.sliderItem}
          />
        ))}
      </div>
      <div className={styles.sliderNavigationContainer}>
        <button
          className={styles.sliderNavigation}
          type="button"
          onClick={() => goTo('prev')}
        >
          <PrevSlideIcon />
        </button>
        <button
          className={styles.sliderNavigation}
          type="button"
          onClick={() => goTo('next')}
        >
          <NextSlideIcon />
        </button>
      </div>
    </div>
  )
}

export default Slider
