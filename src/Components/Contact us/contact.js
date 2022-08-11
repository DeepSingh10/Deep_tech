import React, {useState} from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"

const Result = () =>{
    return(
        <p>Your message has been successfully sent.We will contact you soon.</p>
    )
}
function Contact (props){
 const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
        'service_15w3a1h',
        'template_mkuv0op', 
        e.target,
        'ZG-dRklTS7wSypSf9'
        ).then(
            (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
      );    
      e.target.result();
      showResult(true);
    };

    setTimeout(() => {
        showResult(false)
    }, 5000);
  return (

    <div className="login">
      <h1>Contact Us here</h1>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="user_email" />
        <label>Message</label>
        <textarea name="message" rows="4" />
        <input className='button' type="submit" value="send" />
        <span className='row'>
            {result ? <Result /> : null}
        </span>
        </form>
    </div>
  )
}

export default Contact


