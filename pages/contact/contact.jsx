import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Head from "next/head"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Fade from 'react-reveal/Fade';

const url = "https://thyflow.us17.list-manage.com/subscribe/post?u=4a9e6b182d2b79f3650fa90db&id=99b153b64d";


const CustomForm = ({ status, message, onValidated }) => {

    let email, firstName, lastName, messageField;

    const submit =()=>
    email &&
    firstName &&
    lastName &&
    messageField && 
    email.value.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email.value,
        MERGE1: firstName.value,
        MERGE2: lastName.value,
        MERGE3: messageField.value,
        tags: "contact form"
    })

    

    return(
        <div className="contact__form">
             {status === "sending" && <div className="contact__notification" style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                <div
                className="contact__notification"  style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === "success" && (
                <div
                className="contact__notification"   style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: "Thanks for contacting us, we'll get back to you" }}
                />
                )}
       
                   <div className="contact__form-input">
                        <label className="contact__form-label">First name</label>
                        <input 
                            type="text" 
                            className="contact__input" 
                            placeholder="John" 
                            ref={node => (firstName = node)}
                            required/>
                   </div>
             
                   <div className="contact__form-input">
                        <label className="contact__form-label">Last name</label>
                        <input 
                            type="text" 
                            className="contact__input" 
                            placeholder="Doe" 
                            ref={node => (lastName = node)}
                            />
                   </div>
                  
                   <div className="contact__form-input">
                        <label className="contact__form-label">Email</label>
                        <input 
                            type="email" 
                            className="contact__input" 
                            placeholder="johndoe@gmail.com" 
                            ref={node => (email = node)}
                            />
                   </div>
                   
                   <div className="contact__form-input">
                        <label className="contact__form-label">Message</label>
                        <input 
                            type="text" 
                            className="contact__input contact__input--message" 
                            placeholder="Tell Us, What's on your mind" 
                            ref={node => (messageField = node)}
                            />
                   </div>
                   <div className="contact__button">
                       <button className="btn btn--primary" onClick={submit}>
                           <span className="btn__text">submit</span>
                        </button>
                    </div>
                    </div>
    )
}

const Contact =()=>(
    <> 
        <Head>
            <title>ThyFlow - Contact Us</title>
            <meta name="description" content="Hi, we are ThyFlow." />
            <link rel="icon" href="/images/ThyFlowlogo.png" />
        </Head>
        <Header />
        <main>
           <section className="contact">
               <h2 className="contact__header">
                   contact us
               </h2>

               <div className="contact__container">
                <Fade>
               <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                    />
                )}
                /> 
                </Fade>  
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

