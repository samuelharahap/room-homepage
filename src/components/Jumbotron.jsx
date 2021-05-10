import { ReactComponent as ArrowIcon } from '../images/icon-arrow.svg'
import styles from './Jumbotron.module.css'

function Jumbotron() {
  return (
    <div className={styles.jumbotronContainer}>
      <h1 className="main-heading">Discover innovative ways to decorate</h1>
      <p className="default-paragraph mb-0">
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <a className={styles.jumbotronLink} href="#">
        <span>SHOP NOW</span>
        <ArrowIcon style={{ marginLeft: '40px' }} />
      </a>
    </div>
  )
}

export default Jumbotron
