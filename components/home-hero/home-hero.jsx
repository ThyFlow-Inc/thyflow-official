import Image from 'next/image'
import Modal from 'react-modal'
import React, {useState} from 'react'
import ModalForm from '../modal-form/modal-form';
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip';

const HomeHero =()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen)
    }


    return(
    <section className="home-hero">
         <div className="home-hero__header">
                    <div className="home-hero__text-content">
                        <h1 className="home-hero__heading-secondary">
                            We are a free marketplace app for finding and booking professional on-demand personal services.
                        </h1>
                        <p className="home-hero__text">
                            Are you looking for a quality mobile dry-cleaning service or a mobile groomer for your 
                            pet? What about a mobile barber or hairstylist? Or perhaps its car detailing services you need at home?
                        </p>
                        <p className="home-hero__text">
                        Whatever your needs, we’ve got you covered! The ThyFlow app will connect you with the best personal 
                        service providers in your city, wherever you are, whenever you want.
                        </p>
                        <p className="home-hero__text">
                        Join our BETA test group and let us help you save time so you can focus on what matters to you most.
                        </p>

                            <Flip left>
                            <button className="btn btn--primary home-hero__button" onClick={toggleModal}>
                                <span className="btn__text">join beta</span>
                            </button>
                            </Flip>   
                            <Modal
                                isOpen={isOpen}
                                onRequestClose={toggleModal}
                                className="mymodal"
                            >
                                 <button className="modalbutton" onClick={toggleModal}>Close</button>
                                <ModalForm />
                            </Modal>
                      
                        <p className="home-hero__text">
                        ThyFlow. Life, your way.
                        </p>
                    </div>
                    <div className="image">
                    <Fade right>
                        <Image 
                            src="/images/MainContent.png"
                            width={400}
                            height={800}
                            alt="phone image"
                        />
                    </Fade>
                    </div>
                    
                </div>
    </section>
);
    }
export default HomeHero;