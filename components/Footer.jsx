import React from 'react'
import styles from '@/styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <div>
          <img src="./img/logo.svg" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>
        <div className={styles.footer_width}>
          <nav>
            <ul className={styles.footer_nav}>
              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About us</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.footer_bot}>
        <div className={styles.footer_bot_flex}>
          <p>© 2020 Flowbase. Powered by Webflow</p>
          <div className={styles.footer_bot_img}>
            <img src="./img/facebook.svg" alt="" />
            <img src="./img/x.svg" alt="" />
            <img src="./img/inst.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
