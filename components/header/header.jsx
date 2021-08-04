import Link from 'next/link';
import Image from 'next/image';
import { stack as Menu } from 'react-burger-menu'
import React, {useState} from 'react'
import Modal from 'react-modal'
import ModalForm from '../modal-form/modal-form';


function Header() {  
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal =()=>{
        setIsOpen(!isOpen)
    }


    return(
        <header>
                <div className="logo-box">
                    <Link href="/" >
                    <Image 
                            src="/images/ThyFlow Logo.png"
                            height="50"
                            width="160"
                            alt="logo"
                            className="logo"
                    />   
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__list">
                            <Link href="/" >
                                <a className="nav__link">home</a>
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link href="/about/about/" >
                                <a className="nav__link">about</a>
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link href="/services/services/" >
                                <a className="nav__link">services</a>
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link href="/contact/contact/" >
                                <a className="nav__link">contact</a>
                            </Link>
                        </li>
                        <li className="nav__list">
                            <Link href="/">
                                <a className="nav__link">thyBlog</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn--primary home-hero__button mobile-menu-button" onClick={toggleModal}>
                   <span className="btn__text">Join Beta</span> 
                </button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    className="mymodal"
                >
                     <button className="modalbutton" onClick={toggleModal}>Close</button>
                   <ModalForm />
                </Modal>
                <Menu className="mobile-menu" right>
                            <Link href="/"  >
                                <a className="nav__mobile-link">home</a>
                            </Link> 
                            <Link href="/about/about/"  >
                                <a className="nav__mobile-link">about</a>
                            </Link>
                        
                            <Link href="/services/services/"  >
                                <a className="nav__mobile-link">services</a>
                            </Link>
                        
                            <Link href="/contact/contact/" >
                                <a className="nav__mobile-link">contact</a>
                            </Link>
                       
                            <Link href="/" >
                                <a className="nav__mobile-link">thyBlog</a>
                            </Link>

                             <div>
                         
                            <a className="nav__mobile-join" onClick={toggleModal}>join beta</a>
                          
                        </div>
                </Menu>
            </header>
        );
    }
export default Header;