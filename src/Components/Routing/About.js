import React from "react";
import Navbar from "./Navbar";
import "../Routing/about.css"; 
import ai1 from  "../assets/images/ai1.jpg"
import { FaInstagram, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="header-container">
        <h1 className="portfolio-title">About</h1>
        <div className="social-media">
          <a
            href="https://www.instagram.com/wedmakers.co?igsh=MW9rYzYwOHpxaTNqZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://youtube.com/@wedmakers?si=wnURn1LP7zlckZoQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="social-icon" />
          </a>
        </div>
      </div>

      <div className="about-section">
        <div className="text-container">
          <p>
            <strong>Welcome to my world of photography!</strong>
          </p>
          <p>
            Wedmaker’s.Co is a young team of wedding photographers. We capture
            every moment on your important day. Our intention is to bring out
            beautiful stories of unforgettable moments that you'll cherish
            forever.
          </p>
          <p>
            Our team provides photography, videography, and cinematography
            services. We approach events with a friendly demeanor to capture
            your natural moments.
          </p>
          <p>We capture and travel around the world.</p>
          <p>
            <strong>
              I fell in love with love, and photographing weddings has become my
              favorite event to capture.
            </strong>
          </p>
        </div>
        <div className="about-image-container">
          {/* <img
            src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
            alt="Wedding photography"
          />  */}
          <img src={ai1} alt="ai images" id="ai-image"/>
        </div>
      </div>

      <div className="extra-divs-container">
        <div className="section-heading">
          <h2>The Way We Work</h2>
        </div>

        <div className="extra-divs">
          <div className="extra-div">
            <h3>01</h3>
            <h4>Our Support</h4>
            <p>
              Every client that approaches us receives support from stem to
              stern. We advise what might be ideal for your wedding, maternity,
              or newborn photoshoot considering that we are people with
              expertise and vision.
            </p>
          </div>
          <div className="extra-div">
            <h3>02</h3>
            <h4>Propose the Best</h4>
            <p>
              We recommend the best for your event at your budget. As promised,
              we offer top services and exceptional shots while working within
              your budget. We do it all, from flowers to color schemes, and we
              make sure it doesn't break the bank.
            </p>
          </div>
          <div className="extra-div">
            <h3>03</h3>
            <h4>What We Stand For</h4>
            <p>
              If you decide to join us, we will make sure to keep you updated on
              all the crucial aspects, such as how we arrange the finest
              photoshoot for your big day and how to choose the album, themes,
              and colors for your event.
            </p>
          </div>
          <div className="extra-div">
            <h3>04</h3>
            <h4>Cordial Relationship</h4>
            <p>
              We love to maintain a cordial relationship with our clients. We
              value long-term partnerships with our clients. Our clients are our
              friends, and we do everything to meet their requirements and
              answer all their questions.
            </p>
          </div>
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
                    <FaInstagram className="social-icon"  />
                  </a>
                
                  <a href="https://youtube.com/@wedmakers" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="social-icon"  />
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© 2025 WEDMAKER'S.CO All Rights Reserved.</p>
              </div>
            </footer>
    </>
  );
};
export default About;
