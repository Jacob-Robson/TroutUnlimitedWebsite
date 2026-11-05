import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FlyTying() {
  return (
    <div className="content">
      <Helmet>
        <title>Fly Tying | MadDogTU</title>
      </Helmet>
      
      <br></br><br></br><br></br>
      <div className="content-container">
        {/* Winter Fly Tying */}
        <div className="info-section reverse">

          <div className="section-text">
            <h2>Winter Fly Tying</h2>
            <p className="main-text">
              Our chapter provides both beginner and intermediate fly tying classes. A wide variety of flies are tied, and all tools 
              and materials are provided in each of these sections. Our beginner classes traditionally start in February and intermediate 
              classes in March.  Both sections consist of 4 classes, 2 hours long, and meet once a week. Sign-ups will be made available 
              through the Vermont Fish and Wildlife website.
              <br></br><br></br>
              $30 Beginner: (6:00-8:00 PM) Dewey Building @ National Life
              <br></br>
              Thursday Feb. 4, 11, 18, 25 (weather date Thu March 4th)
              <br></br><br></br>
              $30 Intermediate: (6:00-8:00 PM) Dewey Building @ National Life
              <br></br>
              Thursday March 11, 18, 15, April 1 (Weather date Thu Apr 8th)
            </p>
          </div>
          <img
            src="/woolybugger.jpeg"
            alt="Wooly bugger in a vise"
            className="section-image"
          />
        </div>

        {/* Fly Tying Links */}
        <div className="info-section reverse">
          {/* <img
            src="/troutCampRiver.jpg"
            alt="Trout Camp Logo"
            className="section-image"
          /> */}

          <div className="section-text">
            <h2>Links</h2>
            <p className="main-text">
              <a className="inline-link" href="https://www.register-ed.com/events/view/249684" target="_blank">Introduction to Fly Tying Signup</a>
              <br></br>
            </p>
            <p className="main-text">
              <a className="inline-link" href="https://www.register-ed.com/events/view/249685" target="_blank">Intermediate Fly Tying Signup</a>
              <br></br>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
