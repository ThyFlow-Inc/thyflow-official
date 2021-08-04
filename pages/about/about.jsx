import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import SubscribeForm from "../../components/subscribe-form/subscribe-form";
import Head  from 'next/head'
import Modal from 'react-modal'
import ModalForm from "../../components/modal-form/modal-form";
import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

Modal.setAppElement('#main')

const About =()=>{
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen)
    }


    return(
    <>
         <Head>
            <title>ThyFlow - About Us</title>
            <meta name="description" content="Hi, we are ThyFlow." />
            <link rel="icon" href="/images/ThyFlowlogo.png" />
        </Head>
        <Header />
        <main id="main">
        <section className="about">
            <Fade left>
            <h2 className="about__heading-secondary">
                Our mission is to
            </h2>
            </Fade>
            <Fade left>
            <h1 className="about__heading-primary">
                to save you time
            </h1>
            </Fade>
            <Fade right>
            <h2 className="about__heading-secondary align-right">
                while connecting you to
            </h2>
            </Fade>
            <Fade right>
            <h2 className="about__heading-secondary align-right">
              
                vetted profesional service providers
            </h2>
            </Fade>


            <div className="about__us">
                <h4 className="about__us-title">Our team</h4>
                <p className="about__us-text">
                    To become a one-stop marketplace community app for a wide range of on-demand personal services.
                </p>
                <h4 className="about__us-title">Our Mission</h4>
                <p className="about__us-text">
                    To build an all-inclusive marketplace app for on-demand personal services to support work-life balance and reposition the individual at the center of their lives.
                </p>
                <h4 className="about__us-title">Life, your way. Remember?</h4>
                <p className="about__us-text">
                Our app was created to help restore work-life balance and encourage users to live a life in flow outside of routine, obligations, and the day to day tasks that consume so much of our time. 
                </p>
                <p className="about__us-text">
                    “Time is the only luxury.”
                </p>
               
                <p className="about__us-text">
                    We describe ourselves as an all-in-one marketplace app for finding and booking on-demand personal services, however we believe that there’s so much more to it. Hands up if you have ever felt drained, overwhelmed, and like you just aren’t getting everything done on that to-do list? We sure have! Hence, our mission to help you increase productivity and save time so that you can prioritize yourself and the things you enjoy above all else.
                </p>

                <p className="about__us-text">
                Let is tell you how the ThyFlow app supports your life in flow:

                    -Life, simplified. ThyFlow simplifies the process of finding and booking on-demand personal services. Our providers come to you, wherever you are, whenever you want.
                    -Life, uninterrupted. ThyFlow eliminates the constant back and forth associated with finding, booking and confirming personal services, as well as travel time.
                    -Life, optimized. ThyFlow can help you increase productivity and gain back control of your time by providing you with quick, convenient access to an array of personal services in a few taps. 
                    -Life, monetized. Do you offer on-demand services? ThyFlow makes it easy to find and connect with your ideal customers.  
                </p>
                <p className="about__us-text">
                    We describe ourselves as an all-in-one marketplace app for finding and booking on-demand personal services, however we believe that there’s so much more to it. Hands up if you have ever felt drained, overwhelmed, and like you just aren’t getting everything done on that to-do list? We sure have! Hence, our mission to help you increase productivity and save time so that you can prioritize yourself and the things you enjoy above all else.
                </p>
                <h4 className="about__us-title">Don’t go with the flow; be the flow.</h4>
                <p className="about__us-text">
                    At ThyFlow our heart and passion for helping you regain your balance and flow in life are rooted in everything we do. This is why we also provide tailored educational content on our blog to open up conversations around living life in flow, creating sustainable work-life balance, and prioritizing self without compromise.
                </p>
                
                <h4 className="about__us-title">We believe in Community</h4>
                <p className="about__us-text">
                ThyFlow prides itself on building an all-inclusive community and an intentional space to grow, connect and belong. 
                </p>

                <h4 className="about__us-title">We believe in Integrity</h4>
                <p className="about__us-text">
                    Life is too short to beat around the bush. We are unapologetically fair, honest, and transparent in everything we do.  
                </p>

                <h4 className="about__us-title">We believe in Quality</h4>
                <p className="about__us-text">
                    We continuously work to provide you with high-quality and reliable service every time. We carefully curate our on-demand services to ensure they are aligned with the ThyFlow philosophy and values.   
                </p>
                
                <h4 className="about__us-title">That’s enough about us, we’d love to hear more about you. </h4>

                <h4 className="about__us-title">Connect with us today and join the ThyFlow community. </h4>
                    <Flip left>
                    <button className="btn btn--primary about__btn">
                        <span className="btn__text">Join Beta</span>
                    </button>
                    </Flip>
                    <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModal}
                                contentLabel="My dialog"
                            >
                                 <button className="modalbutton" onClick={toggleModal}>Close</button>
                                <ModalForm />
                            </Modal>
            </div>
            <SubscribeForm />  
        </section>
        </main>
        <Footer />
    </>
    
)

}
export default About;