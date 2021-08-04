import Modal from 'react-modal'
import React, {useState} from 'react'
import ModalForm from '../modal-form/modal-form';
import Flip from 'react-reveal/Flip';


const Banner =()=>{
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen)
    }

    return(
    <section className="banner">
        <div className="banner__card">
            <div className="banner__text-content">
                <h2 className="banner__heading">Don’t miss out! Join the ThyFlow app BETA test group now.</h2>
                <p className="banner__text">Beta testing will be limited to 100 users a week as we work to expand our services. Join requests are processed on a first come, first serve basis.</p>
                <p className="banner__text">Reserve your spot now!</p>
                <div>
                    <Flip>
                    <button className="btn btn--primary" onClick={toggleModal}>
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
                </div>
            </div>
            <div className="banner__image-content">
                <img src="/images/image 8.png" alt="banner" className="banner__image"/>
            </div>
        </div>
    </section>
);
}
export default Banner;