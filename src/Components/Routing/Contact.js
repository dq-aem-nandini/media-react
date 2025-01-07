import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import '../Routing/contact.css';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 

    emailjs
      .sendForm(
        'service_c0hhubg', 
        'template_vk3mkbq', 
        form.current,
        'ZMkfyJpu7lmiZJJmm' 
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
          setIsSubmitting(false); 
        },
        (error) => {
          console.error('EmailJS Error:', error); 
          alert('Error sending message. Check console for details.');
          setIsSubmitting(false); 
        }
      );

    e.target.reset(); 
  };

  return (
    <div>
      <Navbar />
      <div className="header-container">
        <h1 className="portfolio-title">Contact Us</h1>
        <div className="social-media">
          <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number."
            />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <FaPhone style={{ marginRight: '10px' }} /> +91 7995112432
          </p>
          <p>
            <FaEnvelope style={{ marginRight: '10px' }} /> wedmakers.co@gmail.com
          </p>
          <h3>Visit Us:</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2170496012927!2d-74.00601528460894!3d40.71277597933183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19cfae3b5d%3A0x9b6c748e63f91f60!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1614790626114!5m2!1sen!2sus"
            title="Google Maps Location"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div> 
      {/*  */} 

      <footer className="footer">
              <div className="footer-section">
                <h3>About Us</h3>
                <p style={{width:"70%"}}>We are a creative team dedicated to capturing your moments with precision and artistry.</p>
              </div>
              <div className="footer-section">
                <h3>Quick Links</h3>
                <p><a href="/">Home</a></p>
                <p><a href="/portfolio">Portfolio</a></p>
                <p><a href="/about">About Us</a></p>
                <p><a href="/contact">Contact</a></p>
              </div>
              <div className="footer-section">
                <h3>Contact Us</h3>
                <p>Email: wedmakers.co@gmail.com</p>
                <p>Phone: +91 7995112432</p>
                <p>Address: Hyderabad, India</p>
              </div>
              <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.instagram.com/wedmakers.co" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon" />
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2025 WEDMAKER'S.CO All Rights Reserved.</p>
              </div>
            </footer>
    </div>
  );
};

export default Contact;
