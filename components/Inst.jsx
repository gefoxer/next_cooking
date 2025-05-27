import React from 'react'
import Styles from '@/styles/inst.module.css'

export default function Inst() {
  return (
    <section className={Styles.card}>
      <div className={Styles.top_card}>
          <div className={Styles.name_card}>
            <img src="./img/inst_logo.svg" alt="" />
            <div className={Styles.name_flex}>
              <div className={Styles.veref_card}>
                <p className={Styles.inst_name}>Foodieland.</p>
                <img src="./img/ver.svg" alt="" />
              </div>
              <p className={Styles.geo}>Tokyo, Japan</p>
            </div>
          </div>
          <div className={Styles.shape_card}>
            <img src="./img/shape.svg" alt="" />
          </div>
      </div>  
      <div>
      </div>
    </section>
  )
}
