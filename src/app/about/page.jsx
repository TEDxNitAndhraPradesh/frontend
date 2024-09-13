import React from "react";
import IN from "../../images/Home.png";
import Image from "next/image";
import "./about.css";
import Footer from "@/components/Footer";
import MemberList from "@/components/TeamMember/TeamMember";

const Page = () => {
  return (
    <div className="bg-black h-[100vh]">
      {/* Below nav or hero section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">A brief description of your content</p>
        </div>
      </header>
      <br/>

      <h1 className="heading1 ">Our Mission</h1>

      <div className="responsive-container-block bigContainer">
        {/* Our Mission Section */}
        <div className="responsive-container-block Container">
          <Image
            className="mainImg"
            src={IN}
            alt="Our Mission"
          />
          <div className="allText aboveText">
            <p className="text-blk headingText">Our Mission</p>
            <p className="text-blk subHeadingText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-blk description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
              ullamcorper quis vestibulum ligula elementum ut.
            </p>
            <button className="explore">Explore</button>
          </div>
        </div>

        {/* Our Vision Section */}
        {/* 
        <div className="responsive-container-block Container bottomContainer">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg"
            alt="Our Vision"
          />
          <div className="allText bottomText">
            <p className="text-blk headingText">Our Vision</p>
            <p className="text-blk subHeadingText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-blk description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
              ullamcorper quis vestibulum ligula elementum ut.
            </p>
            <button className="explore">Explore</button>
          </div>
        </div> 
        */}
      </div>

      <h1 className="heading1">Our Team</h1>
      <MemberList />
      <Footer />
    </div>
  );
};

export default Page;
