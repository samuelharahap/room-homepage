import { useState } from 'react'

import slidesItemDesktop1 from '../images/desktop-image-hero-1.jpg'
import slidesItemDesktop2 from '../images/desktop-image-hero-2.jpg'
import slidesItemDesktop3 from '../images/desktop-image-hero-3.jpg'

import slidesItemMobile1 from '../images/mobile-image-hero-1.jpg'
import slidesItemMobile2 from '../images/mobile-image-hero-2.jpg'
import slidesItemMobile3 from '../images/mobile-image-hero-3.jpg'

import jumbotronSlides from '../data/jumbotron'

import { ReactComponent as PrevSlideIcon } from '../images/icon-angle-left.svg'
import { ReactComponent as NextSlideIcon } from '../images/icon-angle-right.svg'
import { ReactComponent as ArrowIcon } from '../images/icon-arrow.svg'

import styles from './Slider.module.css'

function Slider() {
  const [activeSliderIdx, setActiveSliderIdx] = useState(0)
  const sliderItems = [
    {
      desktop: slidesItemDesktop1,
      mobile: slidesItemMobile1
    },
    {
      desktop: slidesItemDesktop2,
      mobile: slidesItemMobile2
    },
    {
      desktop: slidesItemDesktop3,
      mobile: slidesItemMobile3
    }
  ]

  const goTo = (dir) => {
    const lastIndex = sliderItems.length - 1
    const getNewIndex = {
      next: () => (activeSliderIdx === lastIndex ? 0 : activeSliderIdx + 1),
      prev: () => (activeSliderIdx === 0 ? lastIndex : activeSliderIdx - 1)
    }

    const newIndex = getNewIndex[dir]()
    setActiveSliderIdx(newIndex)
  }

  return (
    <div className={styles.sliderSectionContainer}>
      <div id="slider-container" className={styles.slider}>
        <div className={styles.sliderWrapper}>
          <div
            className={styles.sliderContainer}
            style={{
              transform: `translateX(${activeSliderIdx * -100}%)`
            }}
          >
            {sliderItems.map((slide, index) => (
              <img
                key={`slider-item-${index}`}
                alt={`slider-item-${index}`}
                className={styles.sliderItem}
                srcset={`${slide.mobile} 375w,
                        ${slide.desktop} 840w`}
                sizes="(max-width: 768px) 375px,
                      840px"
                src={slide.mobile}
              />
            ))}
          </div>
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
          {jumbotronSlides.map((jumbotron, index) => (
            <div
              className={styles.jumbotronSliderItem}
              key={`jumbotron-slider-item-${index}`}
            >
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
