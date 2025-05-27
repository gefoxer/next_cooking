import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Styles from '@/styles/recipe.module.css'

export default function page() {
  return (
    <div className={Styles.owner}>
      <Header />
      <section className={Styles.recipe}>
        
      </section>
      <Footer />
    </div>
  )
}
