import Link from 'next/link';
import Image from 'next/image';
import { stack as Menu } from 'react-burger-menu'
import Modal from "../modal/modal"
import React, {useState} from 'react'



function Header() {
    const [showModal, setShowModal] = useState(false); 
    return(
        <header>
                <div className="logo-box">
                    <Link href="/" >
                    <Image 
                            src="/images/thyflowlogo.png"
                            height="74"
                            width="74"
                            alt="logo"
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
                            <Link href="/" >
                                <a className="nav__link">blog</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="mobile-menu-button">
                    <Link href="/">
                        <button className="btn btn--primary" onClick={() => setShowModal(true)}>
                        <span className="btn__text">join beta</span> 
                        </button>
                    </Link>
                    <Modal
                            onClose={() => setShowModal(false)}
                            show={showModal}
                            >
                            Hello from the modal!
                        </Modal>
                </div>
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
                                <a className="nav__mobile-link">blog</a>
                            </Link>

                             <div>
                         
                            <a className="nav__mobile-join">join beta</a>
                          
                        </div>
                </Menu>
            </header>
        );
    }
export default Header;