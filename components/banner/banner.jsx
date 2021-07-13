const Banner =()=>(
    <section className="banner">
        <div className="banner__card">
            <div className="banner__text-content">
                <h2 className="banner__heading">Join now to reserve your spot in the beta!</h2>
                <p className="banner__text">We are sending invitations to only 100 users per week. Links are given in order of requests received.</p>
                <div>
                    <button className="btn btn--primary">
                        <span className="btn__text">join beta</span>
                    </button>
                </div>
            </div>
            <div className="banner__image-content">
                <img src="/images/image 8.png" alt="banner" className="banner__image"/>
            </div>
        </div>
    </section>
);

export default Banner;