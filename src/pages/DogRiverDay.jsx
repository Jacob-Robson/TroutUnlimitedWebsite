import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DogRiverDay() {
  return (
    <div className="content">
      <Helmet>
        <title>Dog River Day | MadDogTU</title>
      </Helmet>
      
      <br></br><br></br><br></br>
      <div className="content-container">
        {/* Dog River Day Tying */}
        <div className="info-section">
          <img
            src="/dogriverday.jpg"
            alt="Dog River Day Lineup"
            className="section-image"
          />

          <div className="section-text">
            <h2>Dog River Day</h2>
            <p className="main-text">
              On October 18, 2025, the MadDog Chapter hosted the first Dog River Days in Northfield, VT. This event was part of the 
              ongoing Dog River Wild Trout Initiative, a multi-year effort with a goal to restore this wild trout fishery and raise 
              awareness of caring for the Dog River. MadDog was joined by VT Fish & Wildlife, Friends of the Winooski River, Northfield 
              River Walk, the Lake Champlain Basin Program, the Vermont Natural Resources Council, Let’s Go Fishing, Dog River Fly, and 
              the Fly Rod Shop. Thanks to all the groups and everyone that joined us on the Northfield Common.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
