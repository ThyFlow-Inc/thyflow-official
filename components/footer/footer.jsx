const Footer =()=>(
    <footer className="footer">
        <div className="footer__sitemap">
            <p className="footer__title-text">site map</p>
            <ul className="footer__item">
                <li className="footer__list">home</li>
                <li className="footer__list">about</li>
                <li className="footer__list">services</li>
                <li className="footer__list">blog</li>
                <li className="footer__list">contact</li>
            </ul>
        </div>
        <div className="footer__connect">
            <p className="footer__title-text">connect</p>
            <ul className="footer__item">
                <li className="footer__list">Follow us on Instagram</li>
                <li className="footer__list">Subscribe to our newsletter</li>
                <li className="footer__list">Customer support</li>
                <li className="footer__list">Corporate</li>
            </ul>
        </div>
        <div className="footer__legal">
            <p className="footer__title-text">legal</p>
           
            <ul className="footer__item">
                <li className="footer__list">Legal © 2021 ThyFlow Inc.</li>
                <li className="footer__list">All Rights Reserved</li>
                <li className="footer__list">Privacy Policy</li>
                <li className="footer__list">Terms of Service</li>
            </ul>
        </div>
        <div className="footer__address">
            <p className="footer__title-text">address</p>
            <ul className="footer__item">
                <li className="footer__list">1390 Market St</li>
                <li className="footer__list">Suite 200</li>
                <li className="footer__list">San Francisco</li>
                <li className="footer__list">CA 94102</li>
            </ul>
        </div>
    </footer>
);
export default Footer;