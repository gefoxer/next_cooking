import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import Styles from '@/styles/blog.module.css'
import Inbox from '@/components/Inbox'
import DishMini from '@/components/DishMini'

export default function page() {
  return (
    <div className={Styles.owner}>
      <Header />

      <section className={Styles.full}>
        <div>
          <p className={Styles.full_big_text}>Full Guide to Becoming a Professional Chef</p>
        </div>
        <div className={Styles.full_img}>
          <div className={Styles.full_img_flex}>
            <img src="./img/john.jpg" alt="" />
            <p>John Smith</p>
          </div>
          <div className={Styles.full_img_border}>
            <p className={Styles.full_small_text}>15 March 2022</p>
          </div>
        </div>
        <div className={Styles.full_small_text_block}>
          <p className={Styles.full_small_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
        </div>
      </section>

      <section className={Styles.img_chef}>
        <img src="./img/cheffull.jpg" alt="" />
      </section>

      <section className={Styles.guide}>
        <div className={Styles.guide_main_info}>
          <div>
            <h5>How did you start out in the food industry?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={Styles.guide_main_info_pt}>
            <h5>What do you like most about your job?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div>
            <h5>Do you cook at home on your days off?</h5>
            <img className={Styles.gap} src="./img/womenchef.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={Styles.guide_main_info_pt}>
            <h5>What would your advice be to young people looking to get their foot in the door?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
          <div className={Styles.quote}>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>
          </div>
          <div className={Styles.guide_main_info_pt}>
            <h5>What is the biggest misconception that people have about being a professional chef?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
          </div>
        
      </div>
        <div className={Styles.guide_link}>
          <p>SHARE THIS ON:</p>
          <img src="./img/facebook.svg" alt="" />
          <img src="./img/x.svg" alt="" />
          <img src="./img/inst.svg" alt="" />
        </div>
        

      
      </section>

      <section>
        <Inbox />
      </section>

      <section className={Styles.dish_blog}>
        <p className={Styles.dish_block_text}>Check out the delicious recipe</p>
        <div className={Styles.dish_flex}>
          <div className={Styles.cost}><DishMini /></div>
          <div className={Styles.cost}><DishMini /></div>
          <div className={Styles.cost}><DishMini /></div>
          <div className={Styles.cost}><DishMini /></div>
         
        </div>

      </section>


      <Footer />
    </div>
  )
}
