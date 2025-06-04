import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Styles from '@/styles/contact.module.css'
import Inbox from '@/components/Inbox'
import { PrismaClient } from "@prisma/client";
import DishMini from '@/components/DishMini'

export default  async function page() {
  const prisma = new PrismaClient();

  const minicards = await prisma.minicard.findMany({take: 4,
    orderBy: {
      id: 'desc'
    }});
  return (
    <div className={Styles.owner}>
      <Header />
      <h2 className={Styles.us}>Contact us</h2>
      <section className={Styles.contact}>

        <div className={Styles.contact_img}>
          <img src="/img/likechef.png" alt="likechef" />
        </div>  
        
        <div className={Styles.contact_input}>
          <div className={Styles.plase_flex}>
            <div>
              <div className={Styles.label_flex}>
                <label htmlFor="">NAME</label>
                <input type="text" placeholder='Enter your name...' />
              </div>
              <div className={Styles.label_flex}>
                <label htmlFor="">EMAIL ADRESS</label>
                <input type="email" placeholder='Your email address...'/>
              </div>
            </div>
            <div className={Styles.input_gap}>
              <div className={Styles.label_flex}>
                <label htmlFor="">SUBJECT</label>
                <input type="text" placeholder='Enter subject...' />
              </div>
              <div className={Styles.label_flex}>
                <label htmlFor="">ENQUIRE TIPE</label>
                <input type="text" placeholder='Advertising' />
              </div>
            </div>
          </div>
          <div className={Styles.label_flex_solo}>
            <label htmlFor="">MESSAGE</label>
            <textarea type="text" placeholder='Enter your messages...' />
          </div>
          

          <button className={Styles.in_but}><p>Submit</p></button>

        </div>

      </section>

      <div className={Styles.inboxx}>
        <Inbox />
      </div>

      <div className={Styles.minidish}>
        <p className={Styles.minidish_p}>Check out the delicious recipe</p>
        <div className={Styles.minidish_flex}>
          {
            minicards.map((minicard) => <DishMini minicard={minicard} />)

          }
        </div>
      </div>

      


      <Footer />
    </div>
  )
}
