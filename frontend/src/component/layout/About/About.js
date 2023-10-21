import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fmba5-1.fna.fbcdn.net/v/t39.30808-6/279487560_367102132134489_1917100017830799356_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-f8UO4_IOtsAX-Asxdp&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fmba5-1.fna&oh=00_AfABtuBYu8V7PpRBO2-RYcsWd103LXzsgf5KDR23QQhHQQ&oe=6538B4D1"
              alt="Founder"
            />
            <Typography>GreenTech Collectors</Typography>
            <p>
              Our Vision
            </p>
            <span>
            Our vision is to be a global leader in sustainable waste collection, management and recycling solutions, creating a cleaner, greener, and healthier planet for future generations.
            </span>
           
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://youtube.com/channel/UCY4w6WS1XMPBqIEmPypifVQ"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="http://instagram.com/m.b.u.r.u.u" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <br></br>
            <p>
            Our Mission
            </p>
            <span>
              Our mission is to harness the power of technology to deliver comprehensive waste collection, management and recycling services that enhance well-being of communities, protect aquatic animals and plants, and foster a cleaner environment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
