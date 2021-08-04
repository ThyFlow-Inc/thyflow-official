import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://thyflow.us17.list-manage.com/subscribe/post?u=4a9e6b182d2b79f3650fa90db&id=99b153b64d";


const CustomForm = ({ status, message, onValidated }) => {
    let email, firstName;

    const submit = () =>
    
      email &&
      firstName &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        MERGE1: firstName.value
      });
  
     
  
    return (
        <div  className="subscribe__form">
        {status === "sending" && <div className="subscribe__notification" style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
           className="subscribe__notification"  style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
          className="subscribe__notification"   style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
       
                <input
                    className="subscribe__input" 
                    placeholder="Your Email here"
                    type="email"
                    ref={node => (email = node)}
                />
                <input
                    className="subscribe__input" 
                    placeholder="Your Name here"
                    type="text"
                    ref={node => (firstName = node)}
                />
                <div>   
                <button className="btn btn--primary pad" onClick={submit}>
                   <span className="btn__text">Subscribe</span> 
                </button>
                </div>
           
     
        </div>
    );
  };

const SubscribeForm =()=>(
    <>
    <div className="subscribe">
        <h1 className="subscribe__form-title">
            Stay updated with ThyFlow
        </h1>
        <h2 className="subscribe__heading-secondary">
            Subscribe to our weekly newsletter to get tips sent to your inbox.
        </h2>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />   
    </div>
    </>
)


export default SubscribeForm;