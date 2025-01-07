import React from "react";
import Navbar from "./Navbar";
import "../Routing/clientAlbum.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import img16 from "../assets/images/img16.jpg";
import img3 from "../assets/images/img3.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img14 from "../assets/images/img14.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
import img11 from "../assets/images/img11.jpg";
import img12 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img13.jpg";
import img17 from "../assets/images/img17.jpg";
import img15 from "../assets/images/img15.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ClientAlbum = () => {
  const images = [
    img16,
    img3,
    img5,
    img6,
    img7,
    img14, 
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img17,
    img15,
    img3,
  ];

  return (
    <div>
      <Navbar />
     
      <div className="header-container">
        <h1 className="portfolio-title">Client Album</h1>
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

      
      <div>
        <a href="../media-project/work.html">
          <i
            className="fa-solid fa-arrow-left"
            style={{
              fontSize: 30,
              color: "black",
              paddingLeft: 30,
              paddingTop: 30,
            }}
          />
        </a>
      </div>

    
      <h1>
  Sneha <FontAwesomeIcon icon={faHeart} style={{ color: "black" }} /> Santosh
</h1>


    
      <div className="gallery">
        {images.map((image,index)=>
        <div key={index} className="gallery-item">
        <img src={image} alt={`Gallery Image ${index + 1}`} />
      </div>)}
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

export default ClientAlbum;
