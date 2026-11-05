import { Helmet } from "react-helmet-async";
import troutCamp from "/troutCamp.jpg";
import troutCampRiver from "/troutCampRiver.jpg";

export default function TroutCamp() {
  return (
    <div className="content">
      <Helmet>
        <title>Trout Camp | MadDogTU</title>
      </Helmet>
      
      <div className="content-container">
        {/* Welcome Trout Camp */}
        <div className="info-section">
          <img
            src={troutCamp}
            alt="Trout Camp Logo"
            className="section-image-camp"
          />

          <div className="section-text">
            <h2>Vermont Trout Camp</h2>
            <p className="main-text">
              Applications are currently being accepted for the 14th annual Vermont Trout Camp for Teens, sponsored 
              by Trout Unlimited, and well-known industry leaders like Orvis, Cortland Line, LL Bean, & Patagonia. 
              Media depictions of fly fishing regularly tell us that fly fishing is not only the most conservative 
              way to fish, but also the most fun. This program for teens between the ages of 13-16, will be held 
              June 21-25, 2026 at the beautiful Quimby Country in Averill, VT.
            </p>
          </div>
        </div>

        {/* Trout Camp Links */}
        <div className="info-section">
          <img
            src={troutCampRiver}
            alt="Trout Camp Logo"
            className="section-image"
          />

          <div className="section-text">
            <h2>Links</h2>
            <p className="main-text">
              <a className="inline-link" href="https://quimbycountry.com/" target="_blank">Quimby Country Website</a>
              <br></br>
              <a className="inline-link" href="http://www.vermonttroutcamp.com/" target="_blank">Vermont Trout Camp</a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
