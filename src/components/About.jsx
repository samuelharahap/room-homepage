import styles from './About.module.css'

import imageAboutDark from '../images/image-about-dark.jpg'
import imageAboutLight from '../images/image-about-light.jpg'

function About() {
  return (
    <div>
      <img
        src={imageAboutDark}
        alt="about-dark"
        className={styles.aboutImage}
      />
      <div className={styles.aboutContainer}>
        <h2 className="sub-heading">About our furniture</h2>
        <p className="default-paragraph mb-0">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        src={imageAboutLight}
        alt="about-light"
        className={styles.aboutImage}
      />
    </div>
  )
}

export default About
