import { useState } from 'react'

import slidesItem1 from '../images/mobile-image-hero-1.jpg'
import slidesItem2 from '../images/mobile-image-hero-2.jpg'
import slidesItem3 from '../images/mobile-image-hero-3.jpg'
import jumbotronSlides from '../data/jumbotron'

import { ReactComponent as PrevSlideIcon } from '../images/icon-angle-left.svg'
import { ReactComponent as NextSlideIcon } from '../images/icon-angle-right.svg'
import { ReactComponent as ArrowIcon } from '../images/icon-arrow.svg'

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
    <div>
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
      <div className={styles.jumbotronSlider}>
        <div
          className={styles.jumbotronSliderContainer}
          style={{
            transform: `translateX(${activeSliderIdx * -100}%)`
          }}
        >
          {jumbotronSlides.map((jumbotron) => (
            <div className={styles.jumbotronSliderItem}>
              <h2 className="main-heading">{jumbotron.title}</h2>
              <p className="default-paragraph mb-0">{jumbotron.paragraph}</p>
              <a className={styles.jumbotronLink} href="#">
                <span>SHOP NOW</span>
                <ArrowIcon style={{ marginLeft: '40px' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
