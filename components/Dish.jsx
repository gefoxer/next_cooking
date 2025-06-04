  import React from 'react'
  import styles from '@/styles/dish.module.css'
  import { PrismaClient } from '@prisma/client'

  export default async function Dish({card}) {

    const prisma = new PrismaClient();

    const cards = await prisma.card.findMany();

    return (
      <div className={styles.dish_card}>
            <div>
              <div className={styles.dish_img}>
                <img src={card.image} alt="" />
              </div>

              <p className={styles.dish_name}>{card.title}</p>
        
              <div className={styles.dish_time_knife}>
                <div className={styles.dish_flex}>
                  <img src="./img/timer.svg" alt="" />
                  <p>{card.time}</p>
                </div>
                <div className={styles.dish_flex}>
                  <img src="./img/knife.svg" alt="" />
                  <p>{card.type}</p>
                </div>
              </div>       
          </div> 
      </div>
    )
  }
