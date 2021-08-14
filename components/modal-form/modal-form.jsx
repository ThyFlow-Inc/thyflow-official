import MailchimpSubscribe from "react-mailchimp-subscribe"
import Fade from 'react-reveal/Fade';

const url = "thyflow.us17.list-manage.com/subscribe/post?u=4a9e6b182d2b79f3650fa90db&id=597aa5123a";

const CustomForm = ({ status, message, onValidated })=>{
    let email, firstName, lastName, city;

    
    const handleSubmit = () => 
       
        email && 
        firstName &&
        lastName &&
        city &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            Email: email.value,
            MERGE1: firstName.value,
            MERGE2: lastName.value,
            MERGE3: city.value
        });
  

    return(
            <>
            <h4 className="head-title">Fill the form bellow to receive your special invitation link</h4>
            <p className="head-text">Use the link to download the ThyFlow App to be amongst the first users to access On-Demand Services with ease!</p>
                {status === "sending" && <div className="modal-form__notification" style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                <div
                className="modal-form__notification"  style={{ color: "red" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
                )}
                {status === "success" && (
                <div
                className="modal-form__notification"   style={{ color: "green" }}
                    dangerouslySetInnerHTML={{ __html: "Thanks for joining us, We'll notify you when the app is ready" }}
                />
                )}            
            
                <div className="modal-form__form-input">
                    <label className="modal-form__form-label">First name</label>
                    <input type="text" 
                        className="modal-form__input" 
                        placeholder="John" 
                        ref={node => (firstName = node)}
                    />
                </div>
                <div className="modal-form__form-input">
                    <label className="modal-form__form-label">Last name</label>
                    <input type="text" 
                        className="modal-form__input" 
                        placeholder="Doe"
                        ref={node => (lastName = node)} 
                    />
                </div>
            
                <div className="modal-form__form-input">
                    <label className="modal-form__form-label">Email</label>
                    <input type="email" 
                        className="modal-form__input" 
                        placeholder="johndoe@gmail.com" 
                        ref={node => (email = node)}
                    />
                </div>
                
                <div className="modal-form__form-input">
                    <label className="modal-form__form-label">City</label>
                    <input type="text" 
                        className="modal-form__input" 
                        placeholder="San Franscisco" 
                        ref={node => (city = node)}    
                    />
                </div>
            <p className="grey-text">
                The app is currently in the invite-only beta phase. We are sending invitations to only 100 users per week. Links are given in order of requests received.
            </p>
            <div className="modal-form__button">
                <button className="btn btn--primary" onClick={handleSubmit}>
                    <span className="btn__text">Apply for beta access </span>
                </button>
            </div>
            </>

    )
}

const ModalForm =()=>{
   
    return(
        <Fade bottom>
        <div className="modal-form">
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
        </Fade>
    )
    
}

export default  ModalForm