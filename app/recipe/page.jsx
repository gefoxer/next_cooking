import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Styles from '@/styles/recipe.module.css'
import Inbox from '@/components/Inbox'
import DishMini from '@/components/DishMini'
import prisma from '@/lib/prisma'

export default async function page() {

  const minicards = await prisma.minicard.findMany({
    take: 4,
    orderBy: {
      id: 'desc'
    }
  });



  return (
    <div className={Styles.main}>
      <Header />
      <section className={Styles.recipe}>
        <div className={Styles.recipe_text}>
          <h1>Health Japanese Fried Rice</h1>
          <div className={Styles.recipe_text_flex}>
            <div className={Styles.recipe_smalltext_flex_none}>
              <img src="./img/john.svg" alt="" />
              <div>
                <h2>John Smith</h2>
                <p>15 March 2022</p>
              </div>
            </div>
            <div className={Styles.recipe_smalltext_flex}>
              <img src="./img/timer.svg" alt="" />
              <div>
                <h2>PREP TIME</h2>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className={Styles.recipe_smalltext_flex}>
              <img src="./img/timer.svg" alt="" />
              <div>
                <h2>COOK TIME</h2>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className={Styles.recipe_smalltext_flex}>
              <img src="./img/knife.svg" alt="" />
              <p>Chicken</p>
            </div>
          </div>
        </div>
        <div className={Styles.recipe_button}>
          <div>
            <div className={Styles.recipe_button_wh}>
              <img src="./img/printer.svg" alt="" />
            </div> 
            <p>PRINT</p>
          </div>
          <div>
            <div className={Styles.recipe_button_wh}>
              <img src="./img/share.svg" alt="" />
            </div> 
            <p>SHARE</p>
          </div>
        </div>      
      </section>
      <section className={Styles.recipe_img}>
          <div>
            <img className={Styles.recipe_img_border} src="./img/back_recipe.jpg" alt="" />
          </div>
          <div className={Styles.coll}>
            <h2>Nutrition Information</h2>
           
            <div className={Styles.recipe_col}>
              <p className={Styles.recipe_colp}>Calories</p>
              <p className={Styles.recipe_colt}>219.9 kcal</p>
            </div>
            <div className={Styles.recipe_col}>
              <p className={Styles.recipe_colp}>Total Fat</p>
              <p className={Styles.recipe_colt}>10.7 g</p>
            </div>
            <div className={Styles.recipe_col}>
              <p className={Styles.recipe_colp}>Protein</p>
              <p className={Styles.recipe_colt}>7.9 g</p>
            </div>
            <div className={Styles.recipe_col}>
              <p className={Styles.recipe_colp}>Carbohydrate</p>
              <p className={Styles.recipe_colt} >22.3 g</p>
            </div>
            <div className={Styles.recipe_col}>
              <p className={Styles.recipe_colp}>Cholesterol</p>
              <p className={Styles.recipe_colt}>37.4 mg</p>
            </div>
            <p className={Styles.ricipe_colt_button}>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
      </section>
      <p className={Styles.lorem}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></p>
      <Inbox />

      <section className={Styles.dishmini}>

        <p className={Styles.dishminitext}>You may like these recipe too</p>
        <div className={Styles.dish}>
          {
            minicards.map((minicard) => <DishMini key={minicard.id} minicard={minicard} />)
          }
          
        </div>

      </section>
      <Footer />
    </div>
  )
}
