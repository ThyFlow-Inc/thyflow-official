const HomeHero =()=>(
    <section className="home-hero">
        <div className="home-hero__service-card-list">
            <p className="home-hero__service-card-item">pet grooming</p>
            <p className="home-hero__service-card-item">braiding</p>
            <p className="home-hero__service-card-item active">haircut</p>
            <p className="home-hero__service-card-item">dry cleaning</p>
            <p className="home-hero__service-card-item">car wash</p>
        </div>
        <div className="home-hero__text-content">
            <h2 className="home-hero__heading-secondary">
                Save time while getting 
            </h2>
            <h1 className="home-hero__heading-primary">
                more done
            </h1>
            <h3 className="home-hero__countdown">
                Live in 42 days 9 hours
            </h3>
        </div>
    </section>
);

export default HomeHero;