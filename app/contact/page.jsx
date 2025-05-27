import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Styles from '@/styles/contact.module.css'
import Inbox from '@/components/Inbox'
import DishMini from '@/components/DishMini'

export default function page() {
  return (
    <div className={Styles.owner}>
      <Header />

      <section className={Styles.contact}>
        <div>
          <div>
            <img src="./img/cheflike.jpg" alt="" />
          </div>
          <div>

          </div>
        </div>


      </section>

      <Inbox />

      <div className={Styles.dish}>
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
      </div>

      




      <Footer />
    </div>
  )
}
