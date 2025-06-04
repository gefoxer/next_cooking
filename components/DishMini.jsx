import React from 'react'
import Styles from '@/styles/dishmini.module.css'
import { PrismaClient } from '@prisma/client'

export default function DishMini({minicard}) {

  const prisma = new PrismaClient();

  return (
    <section className={Styles.dish}>
      <div className={Styles.like_dish}>
        <img className={Styles.dish_img} src={minicard.image} alt="" />
          <div>
            <img className={Styles.like_dish_rel} src="./img/like.svg" alt="" />
          </div>
      </div>
        
      <p className={minicard.title}>Mixed Tropical Fruit Salad with Superfood Boosts </p>
      <div className={Styles.dish_info}>
          <div className={Styles.dish_timer}>
              <img src="./img/timer.svg" alt="" />
              <p>{minicard.time}</p>
          </div>
          <div className={Styles.dish_knife}>
              <img src="./img/knife.svg" alt="" />
              <p>{minicard.type}</p>
          </div>
      </div>
    </section>
  )
}
