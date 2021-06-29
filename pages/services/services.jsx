import Image from 'next/image'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";

import styles from "../../styles/Home.module.css"

const Services =()=>(
    <>
        <Header />
        <main className={styles.main}>
        <section className="services">
                <div className="services__hero">
                    <div className="services__hero-text-content">
                        <h1 className="services__heading-primary">
                            Stop wasting time
                        </h1>
                        <h2 className="services__heading-secondary">
                            searching for local businesses.
                        </h2>
                        <p className="services__text">
                            ThyFlow does the heavy lifting for you by easily connecting you to verified on-demand service providers. <br />
                            With ThyFlow,  businesses come to you.
                        </p>
                    </div>
                    <Image 
                        src="/images/maincontent.png"
                        width={400}
                        height={800}
                        alt="phone image"
                    />
                </div>
                <div className="services__cards">
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 31.png"
                                alt="service image"
                                className="services__card-image"
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">pet grooming</span>
                                <span className="services__card-subtitle">Partnered groomers operate from their customized company vehicles to provide a complete grooming experience for you and your pet.</span>  
                            </div>
                        </div>
                        
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 39.png"
                                alt="service image"
                                className="services__card-image"
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">haircuts</span>
                                <span className="services__card-subtitle">ThyFlow offers on-demand, professionaly trained, expert haircut services for both adults and children. Book a haircut, beard cleanup and line ups with just a few taps.</span>  
                            </div>
                        </div>
                        <div className="services__card">
                            <img 
                                src="/images/rectangle 52.png"
                                alt="service image"
                                className="services__card-image"
                            
                            />
                            <div className="services__card-text">
                                <span className="services__card-title">Dry Cleaning</span>
                                <span className="services__card-subtitle">Our partners provide the highest quality dry cleaning services in the Bay Area. From silks to leathers, to drapes and wedding gowns, get it done efficiently at your convenience.</span>  
                            </div>
                        </div>
                    <div className="services__card">
                    <img 
                            src="/images/rectangle 24.png"
                            alt="service image"
                            className="services__card-image"
                        />
                        <div className="services__card-text">
                            <span className="services__card-title">car washing</span>
                            <span className="services__card-subtitle">ThyFlow connects you with professional detailers that provide you interior and exterior hand washing, tire cleaning and shine, vacuuming, glass and interior wipe downs, and many more.</span>  
                        </div>
                    </div>
                    <div className="services__card">
                        <img 
                            src="/images/rectangle 17.png"
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
                        <div className="services__card-title">
                            <span className="services__card-more-title">We’re constantly curating services for you. Stay updated by subscribing to our newsletter!</span>
                            <span className="services__card-more">And many more!</span>     
                        </div>
                        <div className="services__button">
                            
                                <button className="btn btn--primary">
                                <span className="btn__text">view more</span> 
                                </button>
                           
                        </div>    
                    </div>
                </div>
            
            <div className="services__end-section">
              <div>
                    <h1 className="services__heading-secondary">
                        Save time while getting
                    </h1>
                    <h1 className="services__heading-primary">
                        more time
                    </h1>
              </div>
              <div>
                <p className="services__text">
                No need to spend the time searching for top-rated local business.
                </p>
                <p className="services__text">
                    ThyFlow App easily connects you to verified on-demand service providers that will bring their service to you!
                </p>
                <p className="services__text">
                    The salon now comes to you with ThyFlow.
                </p>
              </div>
            </div>
        </section>
        </main>
        <Footer />
    </>
);
export default Services;