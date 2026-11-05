import React from "react";
import { Helmet } from "react-helmet-async";

export default function DamRemoval() {
  return (
    <div className="content">
      <Helmet>
        <title>Dam Removal | MadDogTU</title>
      </Helmet>
      
      <div className="content-container">
        {/* Welcome Trout Camp */}
        <div className="info-section reverse">

          <div className="section-text">
            <h2>Dam Removal</h2>
            <p className="main-text">
              MDTU actively seeks out artificial barriers on rivers and streams. Namely dams and perched culverts. 
              Removing dams and enlarging culverts provide a number of benefits, including restoration of the natural 
              flow dynamics in rivers and streams. Removingbarriers provide for natural spawning of trout and other aquatic 
              organism passage. Dam removal also mitigates the danger of flood/high water damage to residences dams and
              also removes silt build-up as well as increasing the transport of water, debris and gravel. – which tangentially 
              will help create a healthier environment for the insects and other aquatic life on which a sound wild trout population 
              depends. If you know of a derelict and useless dam pass on your ideas to MDTU.
            </p>
          </div>
        </div>

        {/* Trout Camp Links */}
        <div className="info-section reverse">
          <img
            src="/damremoval03.jpg"
            alt="More of the dam being taken down"
            className="section-image-three-piece"
          />

          <img
            src="/damremoval02.jpg"
            alt="Group photo of those from MadDogTu who assisted in dam removal"
            className="section-image-three-piece"
          />

          <img
            src="/damremoval01.jpg"
            alt="Excavator starting to remove the dam on Cox Brook"
            className="section-image-three-piece"
          />

        

        </div>
      </div>

    </div>
  );
}
