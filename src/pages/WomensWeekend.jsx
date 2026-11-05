import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function WomensWeekend() {
  return (
    <div className="content">
      <Helmet>
        <title>Women's Weekend | MadDogTU</title>
      </Helmet>
      
      <div className="content-container">
        {/* Women's Weekend */}
        <div className="info-section">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="section-image-camp">
            <source src="/weekendDrone.mp4" type="video/mp4" />
          </video>

          <div className="section-text">
            <h2>Women's Weekend</h2>
            <p className="main-text">
                Back and better than ever! MadDog TU is very excited to announce this year's Women's Weekend. May 29 - May 
                31, 2026. Two nights at the beautiful Quimby Country in Averill, VT. This is an all inclusive escape 
                where you will learn to fly fish and all that entails. Led by passionate and experienced anglers, 
                we're ready to simplify this beautiful yet complex sport while you connect with other women, sharing an experience 
                you'll remember forever.
                <br></br><br></br>
                A truly unique Vermont experience in the heart of the Northeast Kingdom. Join us.
            </p>
          </div>
        </div>

        {/* Women's Weekend Links */}
        <div className="info-section">

          <div className="section-text">
            <h2>Links</h2>
            <p className="main-text">
              <a className="inline-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe3Y89oj05zW5JJ8PZzD3p3ZUDboJf43c3aCHLLtULk9k7WRQ/viewform?usp=header" target="_blank">Women's Weekend Signup</a>
            </p>
          </div>

          <img
            src="/weekendAll.webp"
            alt="All who attended Women's Weekend 2025"
            className="section-image-camp"
          />
        </div>
      </div>

    </div>
  );
}
