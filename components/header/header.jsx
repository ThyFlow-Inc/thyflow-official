import Link from 'next/link';
import Image from 'next/image';


const Header =()=> (
    <header>
        <div className="logo-box">
            <Link href="/">
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
                    <Link href="/">
                        <a className="nav__link">home</a>
                    </Link>
                </li>
                <li className="nav__list">
                    <Link href="/about/about/">
                        <a className="nav__link">about</a>
                    </Link>
                </li>
                <li className="nav__list">
                    <Link href="/services/services/">
                        <a className="nav__link">services</a>
                    </Link>
                </li>
                <li className="nav__list">
                    <Link href="/contact/contact/">
                        <a className="nav__link">contact</a>
                    </Link>
                </li>
                <li className="nav__list">
                    <Link href="/blog/blog/">
                        <a className="nav__link">blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <div>
            <Link href="/">
                <button className="btn btn--primary">
                   <span className="btn__text">join beta</span> 
                </button>
            </Link>
        </div>
    </header>
);

export default Header;