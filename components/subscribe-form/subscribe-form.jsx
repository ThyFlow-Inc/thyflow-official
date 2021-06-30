const SubscribeForm =()=>(
    <>
    <div className="subscribe">
        <h1 className="subscribe__form-title">
                Stay updated with ThyFlow
            </h1>
            <h2 className="subscribe__heading-secondary">
                Subscribe to our weekly newsletter to get tips sent to your inbox.
            </h2>
            <form action="" className="subscribe__form">
                <input type="text" className="subscribe__input" placeholder="Your Email here"/>
                <div>
            
                <button className="btn btn--primary pad">
                   <span className="btn__text">Subscribe</span> 
                </button>
                </div>
            </form>
            </div>
    </>
);

export default SubscribeForm;