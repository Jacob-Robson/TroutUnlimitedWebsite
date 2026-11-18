import { Helmet } from "react-helmet-async";
import jockeyhollow from "/jockeyhollow.jpeg";

export default function JockeyHollow() {
  return (
    <div className="content">
      <Helmet>
        <title>Jockey Hollow | MadDogTU</title>
      </Helmet>
      
      <br></br><br></br><br></br>
      <div className="content-container">
        {/* Jockey Hollow */}
        <div className="info-section reverse">

          <div className="section-text">
            <h2>Jockey Hollow Falls</h2>
            <p className="main-text">
              Jockey Hollow Dam was a 12-foot high concrete gravity dam built by the City of Barre in 1925. In 2025, the
              dam and all associated scrap metal and machinery were removed. After the dam removal, volunteers from the 
              Barre Rivers Collective and Mad River Trout Unlimited helped restore the newly reconnected floodplain by planting 
              native trees, shrubs, and live stakes. Now folks can walk on a 0.2 mile trail, swim, and view wildlife.
            </p>
          </div>
          <img
            src={jockeyhollow}
            alt="Jockey Hollow Trail Sign"
            className="section-image"
          />
        </div>

      </div>

    </div>
  );
}
