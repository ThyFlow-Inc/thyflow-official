import React, { useRef, useState } from 'react';

const SubscribeForm =()=>{
  //    // 1. Create a reference to the input so we can fetch/clear it's value.
  // const inputEl = useRef(null);
  // const inputName = useRef(null);
  // // 2. Hold a message in state to handle the response from our API.
  // const [message, setMessage] = useState('');

  // const subscribe = async (e) => {
  //   e.preventDefault();

  //   // 3. Send a request to our API with the user's email address.
  //   const res = await fetch('/api/subscribe', {
  //     body: JSON.stringify({
  //       email: inputEl.current.value,
  //       name: inputName.current.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   });

  //   const { error } = await res.json();

  //   if (error) {
  //     // 4. If there was an error, update the message in state.
  //     setMessage(error);

  //     return;
  //   }

  //   // 5. Clear the input value and show a success message.
  //   inputEl.current.value = '';
  //   inputName.current.value = '';
    
  //   setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  // };
    return(
    <>
    <div className="subscribe">
        <h1 className="subscribe__form-title">
                Stay updated with ThyFlow
            </h1>
            <h2 className="subscribe__heading-secondary">
                Subscribe to our weekly newsletter to get tips sent to your inbox.
            </h2>
            <form action="" className="subscribe__form" onSubmit={subscribe}>
            <div className="message">
                    {message
                    ? message
                    : ''}
                </div>
                <input type="text" 
                    className="subscribe__input" 
                    placeholder="Your Name here"
                    ref={inputName}
                    required
                    type="text"
                />
                <input type="text" 
                    className="subscribe__input" 
                    placeholder="Your Email here"
                    ref={inputEl}
                    required
                    type="email"
                />
                <div>   
                <button className="btn btn--primary pad">
                   <span className="btn__text">Subscribe</span> 
                </button>
                </div>
            </form>
            </div>
    </>
)
}

export default SubscribeForm;