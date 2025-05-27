import React from 'react'
import Styles from '@/styles/dishmini.module.css'

export default function DishMini() {
  return (
    <section className={Styles.dish}>
        <div className={Styles.like_dish}>
        <img className={Styles.dish_img} src="./img/minidish.jpg" alt="" />
        <div>
        <img className={Styles.like_dish_rel} src="./img/like.svg" alt="" />

        </div>
        </div>
        

        <p className={Styles.dish_name}>Mixed Tropical Fruit Salad with Superfood Boosts </p>
        <div className={Styles.dish_info}>
            <div className={Styles.dish_timer}>
                <img src="./img/timer.svg" alt="" />
                <p>30 Minutes</p>
            </div>
            <div className={Styles.dish_knife}>
                <img src="./img/knife.svg" alt="" />
                <p>Healthy</p>
            </div>
        </div>
    </section>
  )
}
