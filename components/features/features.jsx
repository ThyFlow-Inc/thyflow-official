import Link from "next/link"

const Features =()=> (
    <section className="features">
        <h2 className="features__heading-secondary">
        Browse our most popular services
        </h2>
      
        <div className="features__cards">
            <Link href="/services/services/">            
                <div className="features__card">
                    <img 
                        src="/images/Rectangle 9.png"
                        alt="service image"
                        className="features__card-image"
                    />
                    <div className="features__card-title">
                        <span className="features__card-text">ThyFlow On-Demand Barbers</span>   
                    </div>
                </div>
            </Link>
            <Link href="/services/services/">   
                <div className="features__card">
                    <img 
                        src="/images/Rectangle 3.png"
                        alt="service image"
                        className="features__card-image"
                    />
                    <div className="features__card-title">
                        <span className="features__card-text">ThyFlow Pet Grooming Services</span>
                    </div>
                
                </div>
            </Link>
            <Link href="/services/services/">   
                <div className="features__card">
                    <img 
                        src="/images/Rectangle 5.png"
                        alt="service image"
                        className="features__card-image"
                    
                    />
                    <div className="features__card-title">
                        <span className="features__card-text">ThyFlow On-Demand Car Wash & Detailing Services</span>
                    </div>
                </div>
            </Link>
            <Link href="/services/services/">   
                <div className="features__card">
                    <img 
                        src="/images/Group.png"
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
            </Link>
        </div>
    </section>
);
export default Features;