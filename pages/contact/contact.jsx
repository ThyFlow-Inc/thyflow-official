import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../../styles/Home.module.css"

const Contact =()=>(
    <> 
        <Header />
        <main className={styles.main}>
           <section className="contact">
               <h2 className="contact__header">
                   contact us
               </h2>
               <div className="contact__container">
               <form action="" className="contact__form">
                   <div className="contact__form-input">
                        <label htmlFor="" className="contact__form-label">First name</label>
                        <input type="text" className="contact__input" placeholder="John" />
                   </div>
                   <div className="contact__form-input">
                        <label htmlFor="" className="contact__form-label">Last name</label>
                        <input type="text" className="contact__input" placeholder="Doe" />
                   </div>
                  
                   <div className="contact__form-input">
                        <label htmlFor="" className="contact__form-label">Email</label>
                        <input type="text" className="contact__input" placeholder="johndoe@gmail.com" />
                   </div>
                   
                   <div className="contact__form-input">
                        <label htmlFor="" className="contact__form-label">Message</label>
                        <input type="text" className="contact__input contact__input--message" placeholder="" />
                   </div>
                   <div className="contact__button">
                       <button className="btn btn--primary">
                           <span className="btn__text">submit</span>
                        </button>
                    </div>
               </form>
               <div className="contact__text-content">
                   <h4 className="contact__text">
                   For business inquiries,
                    please email us at 
                    <span className="bold"> support@thyflow.com</span>
                   </h4>
               </div>
               </div>
               
           </section>
        </main>
        <Footer />
    </>
 );

 export default Contact;