const Footer =()=>(
    <footer className="footer">
        <div className="footer__sitemap">
            <p className="footer__title-text">site map</p>
            <ul>
                <li className="footer__list">home</li>
                <li className="footer__list">about</li>
                <li className="footer__list">services</li>
                <li className="footer__list">blog</li>
                <li className="footer__list">contact</li>
            </ul>
        </div>
        <div className="footer__connect">
            <p className="footer__title-text">connect</p>
            <ul>
                <li className="footer__list">Follow us on Instagram</li>
                <li className="footer__list">Subscribe to our newsletter</li>
                <li className="footer__list">Customer support</li>
                <li className="footer__list">Corporate</li>
            </ul>
        </div>
        <div className="footer__legal">
            <p className="footer__title-text">legal</p>
            <p className="footer__text">
            Legal © 2021 ThyFlow Inc.
            All Rights Reserved
            </p>
            <ul>
                <li className="footer__list">Privacy Policy</li>
                <li className="footer__list">Terms of Service</li>
            </ul>
        </div>
        <div className="footer__address">
            <p className="footer__title-text">address</p>
            <address className="footer__text">
                1390 Market St
                Suite 200
                San Francisco
                CA 94102
            </address>
        </div>
    </footer>
);
export default Footer;