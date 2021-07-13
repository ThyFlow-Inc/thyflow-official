import Image from 'next/image'

const HomeHero =()=>(
    <section className="home-hero">
         <div className="home-hero__header">
                    <div className="home-hero__text-content">
                        <h1 className="home-hero__heading-secondary">
                            Save time while getting
                        </h1>
                        <h2 className="home-hero__heading-primary">
                            more done
                        </h2>
                        <div>
                            <button className="btn btn--primary hero__button">
                                <span className="btn__text">join beta</span>
                            </button>
                        </div>
                    </div>
                    <div className="image">
                    <Image 
                        src="/images/Subtract.png"
                        width={230}
                        height={650}
                        alt="phone image"
                    />
                    </div>
                </div>
    </section>
);

export default HomeHero;