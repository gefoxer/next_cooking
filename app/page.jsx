import Header from '@/components/Header'
import Dish from '@/components/Dish'
import styles from '@/styles/page.module.css'
import Footer from '@/components/Footer'
import Inst from '@/components/Inst'
import Inbox from '@/components/Inbox'
import DishMini from '@/components/DishMini'

export default function Home() {
  return (
    <div>
      <Header />

      <section className={styles.hot}>
        <img className={styles.position} src="./img/badge.png" alt="" />

        <div className={styles.block_one}>
          <div>
            <div className={styles.hot_text}>
              <img src="./img/text.jpg" alt="" />
              <p>Hot Recipes</p>
            </div>
            <h2>
              {' '}
              Spicy delicious <br /> chicken wings{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{' '}
            </p>
            <div className={styles.hot_table}>
              <div className={styles.hot_time}>
                <img src="./img/timer.svg" alt="timer" />
                <p>30 Minutes</p>
              </div>
              <div className={styles.hot_knife}>
                <img src="./img/knife.svg" alt="knife" />
                <p>Chicken</p>
              </div>
            </div>
            <div className={styles.john_table}>
              <div className={styles.john}>
                <img src="./img/john.svg" alt="john" />
                <div className={styles.john_width}>
                  <p>John Smith</p>
                  <p>15 March 2022</p>
                </div>
              </div>
              <button className={styles.play}>
                <p>View Recipes</p>
                <img src="./img/play.svg" alt="play" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.block_two}>
          <img src="./img/back.jpg" alt="" />
        </div>
      </section>
<section>
  <div></div>
</section>
      <section className={styles.categories}>
        <div className={styles.search_category}>
          <p>Categories</p>
          <div className={styles.viev_category}>
            <p>View All Categories</p>
          </div>
        </div>
        <div className={styles.categories_cards}>
          <div
            className={styles.categories_card}
            style={{
              background: '#708246',
              background:
                'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/breakfast.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/breakfast.svg"
                alt=""
              />
            </div>
            <p>Breakfast</p>
          </div>
          <div
            className={styles.categories_card}
            style={{
              background: '#6CC63F',
              background:
                'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/vegan.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/vegan.svg"
                alt=""
              />
            </div>
            <p>Vegan</p>
          </div>
          <div
            className={styles.categories_card}
            style={{
              background: ' #CC261B',
              background:
                'linear-gradient(180deg,rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/meat.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/meat.svg"
                alt=""
              />
            </div>
            <p>Meat</p>
          </div>
          <div
            className={styles.categories_card}
            style={{
              background: '#F09E00',
              background:
                'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/dessert.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/dessert.svg"
                alt=""
              />
            </div>
            <p>Dessert</p>
          </div>
          <div
            className={styles.categories_card}
            style={{
              background: '#6CC63F',
              background:
                'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/lunch.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/lunch.svg"
                alt=""
              />
            </div>
            <p>Lunch</p>
          </div>
          <div
            className={styles.categories_card}
            style={{
              background: '#6CC63F',
              background:
                'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)',
            }}
          >
            <div className={styles.categories_un_blur}>
              <img src="./img/chocolate.svg" alt="" />
              <img
                className={styles.categories_blur}
                src="./img/chocolate.svg"
                alt=""
              />
            </div>
            <p>Chocolate</p>
          </div>
        </div>
      </section>

      <section className={styles.best}>
        <div className={styles.best_text}>
          <h4>Simple and tasty recipes</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut <br /> labore et dolore magna aliqut enim ad
            minim{' '}
          </p>
        </div>

        <div className={styles.dish}>
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
        </div>
      </section>

      <section className={styles.chef}>
        <div className={styles.chef_info}>
          <h3>
            Everyone can be a <br /> chef in their own kitchen
          </h3>
          <p className={styles.chef_info_p}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqut enim{' '}
            <br /> ad minim{' '}
          </p>
          <button className={styles.chef_button}>
            <p className={styles.chef_button_p}>Learn More</p>
          </button>
        </div>
        <div className={styles.chef_photo}>
          <img src="./img/happy_chef.png" alt="" />
        </div>
      </section>

      <section>
        
      </section>

      <section className={styles.recipe_day} >
        <div className={styles.day_info}>
          <p className={styles.day_info_main}>Try this delicious recipe <br /> to make your day</p>
          <p className={styles.day_info_help}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>

        <div className={styles.recipe_dish}>
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
          <DishMini />
          
          
        </div>
     

      </section>

      <section className={styles.inbox}>
        <Inbox />
      </section>t


      


      

      <Footer />
    </div>
  )
}
