import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import HomeButton from "./Button";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/portfolio");
  };
  return (
    <div className="bg">
      <div className="content">
        <h1>Wedmaker's Photography</h1>
        <p>Capturing the essence of life through the lens</p>
        <HomeButton Click={handleButtonClick} >Enter Site</HomeButton>
      </div>
    </div>
  );
};

export default Home;
