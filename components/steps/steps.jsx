import Link from 'next/link'

const Steps =() =>(
    <section className="steps">
        <h2 className="steps__heading-secondary">How thyflow works</h2>
        <div className="steps__cards">
            <div className="steps__card">
                <h1 className="steps__number">
                    1
                </h1>
                <p className="steps__card-text">
                   <span className="bold"> Download the app </span> and sign up to view your available services
                </p>
            </div>
            <div className="steps__card">
            <h1 className="steps__number">
                    2
                </h1>
                <p className="steps__card-text">
                   <span className="bold"> Choose your preffered</span> on-demand service, location, time and book!
                </p>
            </div>
            <div className="steps__card">
            <h1 className="steps__number">
                    3
                </h1>
                <p className="steps__card-text">
                   <span className="bold"> The service provider </span>will come to your location to perform your service!
                </p>
            </div>
        </div>
        <div>
            <Link href="">
                <button className="btn btn--primary button">
                   <span className="btn__text">join beta</span> 
                </button>
            </Link>
        </div>
    </section>
);

export default Steps;