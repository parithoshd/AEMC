import React from "react";
import { useRef } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_ssxdejo', 'template_jh5axmp', form.current, '4UITaNAVR6kWoTpXK')
    form.current.reset()
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
  };

  return (<>
    <div className="d-flex" id="hello">
      <div className="col-xs-6 col-md-3 Cmain ">
        <h1>Contact</h1>
        <div className="Contact-main" id="contact_main">
          <h1>Get In Touch</h1>
          <p>AEMC strives to provide the best service possible with every contact!
            <p>Have questions about medical coding? Our entire team receives specialized training regularly to ensure you're receiving the best information possible. From basic questions to complex compliance inquiries, we're here to help!</p>
            <p>Interested in learning more about our services? Our Customer Success Executives take the time to discuss your existing medical coding program and help you make smart decisions that best meet your needs</p>
            <p>Contact Us Today!</p>
          </p>

          <ul className="Contact-Information">
            <li >
              <div className="Contact-Address">
                <h2>Our Address</h2>
                <p>Ask Experts Medical Coding Academy Pvt Ltd
                  No 316-P1 & 317-P1 Hebbal Industrial Area
                  Mysore, Karnataka, India – 570026</p>
              </div>
            </li>
            <li>
              <div className="Contact-Info">
                <h2>Contact</h2>
                <div>
                  <p>Contact No: 8861866399</p>
                  <p>Website: www.aemedicalcoding.com</p>
                  <p>Mail: info@aemedicalcoding.com</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} id="#form">
          <h2 className="contact-form-heading">Ready to Get Started?</h2> <br />
          <p className="contact-form-info">Your email address will not be published. Required fields are marked *</p>
          <div class="large-group">
            <div class="small-group">
              <label for="name">Name</label>
              <input id="name" type="text" name="from_name" />
            </div>


            <div class="small-group">
              <label for="email">Email</label>
              <input id="email" type="email" name="from_email" />
            </div>

            <div class="textarea-div">
              <label for="message">Message</label>
              <textarea id="message" type="text" name="message"></textarea>
            </div>

            <input id="submit" class="contact-btn" type="submit" name="submit" value="Send" />

          </div>
        </form>
      </div>
    </div>
  </>
  )
};

export default Contact;
