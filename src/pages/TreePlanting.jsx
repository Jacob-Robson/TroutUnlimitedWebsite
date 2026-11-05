import { Helmet } from "react-helmet-async";
import treePlanting01 from "/treeplanting01.jpg";
import treePlanting02 from "/treeplanting02.jpg";
import treePlanting04 from "/treeplanting04.jpg";

export default function TreePlanting() {
  return (
    <div className="content">
      <Helmet>
        <title>Tree Planting | MadDogTU</title>
      </Helmet>
      
      <div className="content-container">
        {/* Welcome Trout Camp */}
        <div className="info-section reverse">

          <div className="section-text">
            <h2>Tree Planting</h2>
            <p className="main-text">
              MadDog Trout has planted thousands of trees and shrubs along the Dog River, Mad River and 
              several tributaries. We know from scientific studies the “wood is good” and that “trout grow on trees”.
              MDTU is always on the lookout for fragile riparian habitats to continue this work. Native trees and shrubs (which we prefer to
              use) hold the soil together, slow rushing water, and catch debris that help with flood mitigation. Riparian buffers serve other
              important functions as well. They are used as wildlife corridors for birds and mammals, soak up in-coming pollutants, provide shade
              for fish and other aquatic species, and add a beautiful aesthetic to the landscape. Buffers are the working class of the environment.
              They do a great deal of work with little reward or recognition.
            </p>
          </div>
        </div>

        {/* Trout Camp Links */}
        <div className="info-section-three-piece reverse">
          <img
            src={treePlanting04}
            alt="Planting the tree with shovel"
            className="section-image-three-piece"
          />

          <img
            src={treePlanting01}
            alt="Group photo of those who came to the tree planting"
            className="section-image-three-piece"
          />

          <img
            src={treePlanting02}
            alt="Putting rebar in the ground for tree planting"
            className="section-image-three-piece"
          />

        

        </div>
      </div>

    </div>
  );
}
