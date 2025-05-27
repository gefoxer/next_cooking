import React from 'react'
import styles from '@/styles/dish.module.css'

export default function Dish() {
  return (
    <div className={styles.dish_card}>
      <div className={styles.dish_img}>
        <img src="./img/eat.jpg" alt="" />
      </div>

      <p className={styles.dish_name}>Big and Juicy Wagyu Beef Cheeseburger</p>

      <div className={styles.dish_time_knife}>
        <div className={styles.dish_flex}>
          <img src="./img/timer.svg" alt="" />
          <p>Minutes</p>
        </div>
        <div className={styles.dish_flex}>
          <img src="./img/knife.svg" alt="" />
          <p>Sweet</p>
        </div>
      </div>
    </div>
  )
}
