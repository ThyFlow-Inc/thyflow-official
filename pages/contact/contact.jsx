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
                   <label htmlFor="" className="contact__form-label">First name</label>
                   <input type="text" className="contact__form-input" placeholder="John" />
                   <label htmlFor="" className="contact__form-label">Last name</label>
                   <input type="text" className="contact__form-input" placeholder="Doe" />
                   <label htmlFor="" className="contact__form-label">Email</label>
                   <input type="text" className="contact__form-input" placeholder="johndoe@gmail.com" />
                   <label htmlFor="" className="contact__form-label">Messagee</label>
                   <input type="text" className="contact__form-input contact__form-input--message" placeholder="" />
                   <div className="">
                       <button className="btn btn--color">
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