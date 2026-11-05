import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TwoFly() {
  return (
    <div className="content">
      <Helmet>
        <title>2 Fly | MadDogTU</title>
      </Helmet>
      
      <div className="content-container">
        {/* 2Fly Competition  */}
        <div className="info-section reverse">
          <img
            src="/2FlyComp.jpg"
            alt="Old Creel, the trophy for the two fly competition"
            className="section-image-camp"
          />

          <div className="section-text">
            <h2>2Fly Competition</h2>
            <p className="main-text">
                This event is a catch and release tournament of 2 person teams to raise money for the Vermont Trout Camp. But the real reason to 
                attend is to get you name on the old wicker creel! Or if you catch the largest fish your name will be added to the wood carved trout, 
                both of these are on display at the Fly Rod Shop in Stowe, VT. The tournament awards points based on the length of the fish, 
                different trout species caught, and trash picked up along the river. So grab a partner and come join the fun and friendly competition 
                on Sunday, September 22, 2024.
            </p>
          </div>
        </div>

        {/* Trout Camp Links */}
        <div className="info-section reverse">
          <img
            src="/2flylogo.jpg"
            alt="Two Fly Logo"
            className="section-image"
          />

          <div className="section-text">
            <p className="main-text">
                <b>Location</b><br></br>
                Fly Rod Shop 2703 Waterbury Road Stowe, VT 05672<br></br>
                <br></br><br></br>
                <b>Schedule for the day</b><br></br>
                8:00 - 8:30 pre-fishing meeting at The Fly Rod Shop in Stowe<br></br>
                8:30 - 3:30 competitive fishing time<br></br>
                3:30 - 3:45 turn in scorecards<br></br>
                4:00 - 5:00 socialize and announce winners, snacks and drinks provided<br></br>
                <br></br><br></br>
                <b>Where</b><br></br>
                The Winooski River, and its tributaries, upstream from the Bridge St bridge in Richmond; and the Lamoille River, and its 
                tributaries, upstream from the VT 108 bridge in Cambridge. Start and finish will be at The Fly Rod Shop in Stowe VT<br></br>
                <br></br><br></br>
                <b>Who</b><br></br>
                Teams of 2 - limited to 20 teams<br></br>
                <br></br><br></br>
                <b>Why</b><br></br>
                All proceeds to benefit the <a className="inline-link" href="http://www.vermonttroutcamp.com/" target="_blank">Vermont Trout Camp</a>
                <br></br><br></br>
                <b>Cost</b><br></br>
                $100 per team
                <br></br><br></br>
                <b>Contact</b><br></br>
                Shawn Nailor, nailorvt@gmail.com
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
