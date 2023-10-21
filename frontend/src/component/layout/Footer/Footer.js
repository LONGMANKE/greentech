import React from 'react'
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";

import "./Footer.css"

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="leftFooter">
        {/* <h4>DOWNLOAD OUR APP</h4> */}
        <h4>KEEP IT CLEAN GREEN</h4>
        <img src={logo} alt="logo" />
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>GreenTech Collectors</h1>
        <p>"Our vision is to be a global leader in sustainable waste collection, management and recycling solutions, creating a cleaner, greener,
          and healthier planet for future generations."</p>

        <p>Copyrights 2023 &copy; GreenTech Collectors</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/">Instagram</a>
        <a href="https://youtube.com/">Youtube</a>
        <a href="http://facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer