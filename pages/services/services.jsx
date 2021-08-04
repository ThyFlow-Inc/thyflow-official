import Image from 'next/image'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";
import Head from 'next/head'
import ModalForm from '../../components/modal-form/modal-form';
import Modal from 'react-modal'
import React, {useState} from 'react'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';



Modal.setAppElement('#main')

const Services =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen)
    }

return(
    <>
        <Head>
            <title>ThyFlow - Services</title>
            <meta name="description" content="Hi, we are ThyFlow." />
            <link rel="icon" href="/images/ThyFlowlogo.png" />
        </Head>
        <Header />
        <main id="main">
        <section className="services">
                <div className="services__hero">
                    <div className="services__hero-text-content">
                        <h1 className="services__heading-primary">
                            Skip the back and forth 
                        </h1>
                        <h2 className="services__heading-secondary">
                            and get straight to the good stuff
                        </h2>
                        <p className="services__text">
                            Browse through our current on-demand services
                        </p>
                    </div>
                    <Fade right>
                    <Image 
                        src="/images/maincontent.png"
                        width={300}
                        height={600}
                        alt="phone image"
                    />
                    </Fade>
                </div>
                <div className="services__cards">
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 31.png"
                                alt="service image"
                                className="services__card-image"
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">ThyFlow Pet Grooming Services</span>
                                <span className="services__card-subtitle">Our ThyFlow pet groomers meet you right where you and your pawed pal are and operate from their fully-equipped and customized pet grooming van. They provide personalized one-on-one professional pet grooming, ensuring that your furry friend is taken care of, and given top-priority care.</span>  
                            </div>
                        </div>
                        
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 39.png"
                                alt="service image"
                                className="services__card-image"
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">ThyFlow On-Demand Barbers</span>
                                <span className="services__card-subtitle">Our ThyFlow barbers provide top-notch, high-quality haircut services for adults and children right where you are. Each barber is carefully selected to align with ThyFlow’s values and quality standards and is available at the tap of a button. Book your haircut, trim, or personal grooming services today.</span>  
                            </div>
                        </div>
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 52.png"
                                alt="service image"
                                className="services__card-image"
                            
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">ThyFlow Dry Cleaning Services</span>
                                <span className="services__card-subtitle">Save time on laundry, and finally tick those other tasks off your to-do list. Our professional dry-cleaners provide superior services. They are dedicated to staying time-efficient and professional. Book your dry-cleaning service today and arrange a pick-up and drop-off time. It’s as simple as that.</span>  
                            </div>
                        </div>
                    <div className="services__card">
                    <img 
                            src="/images/rectangle 53.png"
                            alt="service image"
                            className="services__card-image"
                        />
                        <div className="services__card-text">
                            <span className="services__card-title">ThyFlow On-Demand Car Wash & Detailing Services</span>
                            <span className="services__card-subtitle">Time for a car wash, but just not getting around to it? No worries - our ThyFlow Car Wash services provide eco-friendly, convenient, and affordable services. Each car wash uses no more than three cups of water, yet still ensures that your car is thoroughly cleaned, inside and out - so you can spend your time driving to your next adventure.</span>  
                        </div>
                    </div>
                    <div className="services__card">
                        <img 
                            src="/images/rectangle 48.png"
                            alt="service image"
                            className="services__card-image"
                        
                        />
                        <div className="services__card-text">
                            <span className="services__card-title">braiding</span>
                            <span className="services__card-subtitle">ThyFlow makes it easy to connect you with verified local barbers or braiders who can provide you with braiding services at the level you desire.</span>  
                        </div>
                    </div>
                    <div className="services__card">
                        <img 
                            src="/images/group 2.png"
                            alt="service image"
                            className="services__card-more-image"
                        />
                        <div className="services__more">
                            <span className="services__card-more">And many more!</span>   
                            <span className="services__card-more-title">We’re constantly curating services for you. Stay updated by subscribing to our newsletter!</span>

                        </div>
                        <div className="services__button">
                                <button className="btn btn--primary services__btn">
                                <span className="btn__text">subscribe</span> 
                                </button>
                                
                        </div>    
                    </div>
                </div>
              
                <p className="services__text xs">
                    Each one of our services is tailored to save you time, resources, and effort. 
                </p>
                <p className="services__text xs">
                 Join our BETA test group and be one of the first to access our exclusive on-demand services.
                </p>
                    <Flip>
                    <button className="btn btn--primary services__btn">
                        <span className="btn__text">Join Beta</span>
                    </button>
                    </Flip>
                    <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModal}
                                contentLabel="My dialog"
                            >
                                 <button className="modalbutton" onClick={toggleModal}>modal</button>
                                <ModalForm />
                            </Modal>
                           
              
            <div className="services__end-section">
              <div>
                    <h1 className="services__heading-secondary right">
                    Not finding 
                    </h1>
                    <h1 className="services__heading-primary right">
                    what you’re looking for? 
                    </h1>
              </div>
              <div className="line"></div>
              <div>
                <p className="services__text">
                Connect with us here and we’ll help you find the service you’re looking for. 
                </p>
                
              </div>
            </div>
        </section>
        </main>
        <Footer />
    </>
)
    }
export default Services;