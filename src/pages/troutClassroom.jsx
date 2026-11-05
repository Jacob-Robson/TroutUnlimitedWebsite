import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TroutClassroom() {
  return (
    <div className="content">
      <Helmet>
        <title>Trout In The Classroom | MadDogTU</title>
      </Helmet>
      
      <br></br><br></br><br></br>
      <div className="content-container">
        {/* Trout in the Classroom */}
        <div className="info-section reverse">

          <div className="section-text">
            <h2>Trout in the Classroom</h2>
            <p className="main-text">
              With support from the Vermont Fish & Wildlife Department and the Vermont chapter of Trout Unlimited, 
              a range of school classes throughout the state are nearing the end of their respective “Trout in the Classroom” projects, 
              a several month effort to hatch and raise healthy trout before turning them free to Vermont’s rivers and streams.
              <br></br><br></br>
              Our local liaison is board member Clark Amadon. Contact Clark for more information.
            </p>
          </div>
        </div>

        <div className="section-text">
          <h2>Links</h2>
          <p className="main-text">
            <a className="inline-link" href="www.vermonttroutintheclassroom.weebly.com" target="_blank">Trout in the Classroom Website</a>
          </p>
        </div>
        
        <br></br>

        <div className="info-section-three-piece reverse">
          <img
            src="/troutclassroom01.jpg"
            alt="Trout In Classroom"
            className="section-image-three-piece"
          />
                    
          <img
            src="/troutclassroom02.jpg"
            alt="Trout In Classroom netting in the river with students"
            className="section-image-three-piece"
          />
          
          <img
            src="/troutclassroom03.jpg"
            alt="Trout In Classroom"
            className="section-image-three-piece"
          />


        </div>

      </div>

    </div>
  );
}
