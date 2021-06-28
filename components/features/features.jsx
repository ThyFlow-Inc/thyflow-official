import Image from 'next/image'
import Link from 'next/link'

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
                    src="/images/rectangle 15.png"
                    alt="service image"
                    className="features__card-image"
                />
                <div className="features__card-title">
                    <span className="features__card-text">haircut</span>
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
                    src="/images/rectangle 17.png"
                    alt="service image"
                    className="features__card-image"
                />
                <div className="features__card-title">
                    <span className="features__card-text">braiding</span>
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
                    src="/images/rectangle 24.png"
                    alt="service image"
                    className="features__card-image"
                   
                />
                <div className="features__card-title">
                    <span className="features__card-text">car wash</span>
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
                    <Link href="">
                        <button className="btn btn--primary">
                        <span className="btn__text">view more</span> 
                        </button>
                    </Link>
                </div>    
            
            </div>
        </div>
    </section>
);
export default Features;