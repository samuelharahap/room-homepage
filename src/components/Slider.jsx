import { useState } from 'react'
import TinySlider from 'tiny-slider-react'

import slidesItem1 from '../images/desktop-image-hero-1.jpg'
import slidesItem2 from '../images/desktop-image-hero-2.jpg'
import slidesItem3 from '../images/desktop-image-hero-3.jpg'

import { ReactComponent as PrevSlideIcon } from '../images/icon-angle-left.svg'
import { ReactComponent as NextSlideIcon } from '../images/icon-angle-right.svg'
import styles from './Slider.module.css'

const tinySliderSettings = {
  nav: false,
  mouseDrag: true,
  controls: false
}

function Slider() {
  const slides = [slidesItem1, slidesItem2, slidesItem3]

  const [tinySlider, setTinySlider] = useState(null)
  const onGoTo = (dir) => tinySlider?.slider.goTo(dir)

  return (
    <div className={styles.sliderContainer}>
      <TinySlider settings={tinySliderSettings} ref={(ts) => setTinySlider(ts)}>
        {slides.map((slide, index) => (
          <img
            key={`slider-item-${index}`}
            src={slide}
            data-src={slide}
            alt={`slider-item-${index}`}
          />
        ))}
      </TinySlider>
      <div className={styles.sliderNavigationContainer}>
        <button
          className={styles.sliderNavigation}
          type="button"
          onClick={() => onGoTo('prev')}
        >
          <PrevSlideIcon />
        </button>
        <button
          className={styles.sliderNavigation}
          type="button"
          onClick={() => onGoTo('next')}
        >
          <NextSlideIcon />
        </button>
      </div>
    </div>
  )
}

export default Slider
