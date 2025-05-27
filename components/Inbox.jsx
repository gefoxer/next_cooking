import React from 'react'
import styles from '@/styles/inbox.module.css'

export default function Inbox() {
  return (
    <section className={styles.inbox}>
        <img src="" alt="" />
        <div className={styles.inbox_menu}>
          <h6>Deliciousness to your inbox</h6>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <form className={styles.subscription_form}>
            <div className={styles.input_group}>
                <input type="email" className={styles.email_input}  placeholder="Ваш email" required/>
                <button type="submit" className={styles.subscribe_button}>Subscribe</button>
            </div>
          </form>
        </div>
    </section>
  )
}
