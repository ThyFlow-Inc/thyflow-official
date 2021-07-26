import Image from 'next/image'

const HomeHero =()=>(
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
                        <div>
                            <button className="btn btn--primary hero__button">
                                <span className="btn__text">join beta</span>
                            </button>
                        </div>
                        <p className="home-hero__text">
                        ThyFlow. Life, your way.
                        </p>
                    </div>
                    <div className="image">
                    <Image 
                        src="/images/MainContent.png"
                        width={400}
                        height={800}
                        alt="phone image"
                    />
                    </div>
                </div>
    </section>
);

export default HomeHero;