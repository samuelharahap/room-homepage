import { useState, useEffect } from 'react'

import styles from './Header.module.css'

import { ReactComponent as HamburgerIcon } from '../images/icon-hamburger.svg'
import { ReactComponent as CloseIcon } from '../images/icon-close.svg'
import { ReactComponent as Logo } from '../images/logo.svg'

function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false)
  const [isMenuInvert, setIsMenuInvert] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      setIsMenuInvert(!entries[0]?.isIntersecting)
    })
    observer.observe(document.getElementById('slider-container'))

    return () => observer.disconnect()
  })

  return (
    <div
      className={`u-display-flex u-display-flex-align-center ${styles.header} ${
        isMenuShown ? styles.headerShown : ''
      } ${isMenuInvert ? styles.headerInvert : ''}`}
    >
      <button
        className={`u-pointer ${styles.menuTrigger}`}
        type="button"
        onClick={() => setIsMenuShown(!isMenuShown)}
      >
        {isMenuShown ? (
          <CloseIcon />
        ) : (
          <HamburgerIcon className={styles.burgerIcon} />
        )}
      </button>
      <div className={`u-display-flex-grow-1 ${styles.menuContainer}`}>
        <a className={styles.logo} href="/">
          <Logo className={styles.logoIcon} />
        </a>
        <nav>
          <ul className={styles.listMenu}>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/">shop</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
