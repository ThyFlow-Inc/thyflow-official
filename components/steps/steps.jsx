import Fade from 'react-reveal/Fade';

const Steps =() =>(
    <section className="steps">
        <h2 className="steps__heading-secondary">How thyFlow works</h2>
        <div className="steps__cards">
            <div className="steps__card">
                <Fade top>
                <h1 className="steps__number">
                    1
                </h1>
                </Fade>
                <p className="steps__card-text">
                   <span className="bold"> Download the THYFLOW App </span>  and set up an account to view the list of on-demand services available in your city.
                </p>
            </div>
            <div className="steps__card">
                <Fade top>
            <h1 className="steps__number">
                    2
                </h1>
                </Fade>
                <p className="steps__card-text">
                   <span className="bold">Choose the service you want</span> and add location, date and time.
                </p>
            </div>
            <div className="steps__card">
                <Fade top>
            <h1 className="steps__number">
                    3
                </h1>
                </Fade>
                <p className="steps__card-text">
                   <span className="bold">You’re ready to FLOW.</span> A verified on-demand professional service provider will arrive at your location to perform the service you booked.
                </p>
            </div>
        </div>
        
    </section>
);

export default Steps;