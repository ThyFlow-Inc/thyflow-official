import Image from 'next/image'

const Features =()=> (
    <section className="features">
        <h2 className="features__heading-secondary">
            Book on-demand services with ease
        </h2>
        <p className="features__text">
        Most popular services
        </p>
        <div className="features__cards">
            <div className="features__card">
                <img 
                    src="/images/rectangle 39.png"
                    alt="service image"
                    className="features__card-image"
                />
                <div className="features__card-title">
                    <span className="features__card-text">On-Demand Barbers</span>
                    <span className="features__card-rating">4.7
                    <Image 
                        src="/images/star.svg"
                        alt="star"
                        width={15}
                        height={15}
                        className="star"
                    />
                    </span>
                </div>
                
                <div className="features__card-bottom">
                    <Image 
                        src="/images/user.svg"
                        alt="user"
                        width={15}
                        height={15}
                        className="user"
                    />
                    <span className="features__card-name">Maksym T</span>
                </div>
            </div>
            <div className="features__card">
            <img 
                    src="/images/rectangle 31.png"
                    alt="service image"
                    className="features__card-image"
                />
                <div className="features__card-title">
                    <span className="features__card-text">Pet Grooming Services</span>
                    <span className="features__card-rating">4.9
                    <Image 
                        src="/images/star.svg"
                        alt="star"
                        width={15}
                        height={15}
                        className="star"
                    />
                    </span>
                </div>
                
                <div className="features__card-bottom">
                    <Image 
                        src="/images/user.svg"
                        alt="star"
                        width={15}
                        height={15}
                        className="user"
                    />
                    <span className="features__card-name">Tammie A</span>
                </div>
            </div>
            <div className="features__card">
                <img 
                    src="/images/rectangle 53.png"
                    alt="service image"
                    className="features__card-image"
                   
                />
                <div className="features__card-title">
                    <span className="features__card-text">On-Demand Car Wash</span>
                    <span className="features__card-rating">4.7
                    <Image 
                        src="/images/star.svg"
                        alt="star"
                        width={15}
                        height={15}
                        className="star"
                    />
                    </span>
                </div>
                
                <div className="features__card-bottom">
                    <Image 
                        src="/images/user.svg"
                        alt="star"
                        width={15}
                        height={15}
                        className="user"
                    />
                    <span className="features__card-name">Adrian D</span>
                </div>
            </div>
            <div className="features__card">
                <img 
                    src="/images/group 2.png"
                    alt="service image"
                    className="features__card-more-image"
                />
                <div className="features__card-title">
                    <span className="features__card-more">And many more!</span>     
                </div>
                <div className="features__button">
                        <button className="btn btn--primary">
                        <span className="btn__text">view more</span> 
                        </button>
                </div>    
            </div>
        </div>
    </section>
);
export default Features;