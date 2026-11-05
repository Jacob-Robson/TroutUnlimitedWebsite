import { Helmet } from "react-helmet-async";
import treePlanting from "/treePlanting.jpg";

export default function Calendar() {
  return (
    <div className="content">
      <Helmet>
        <title>Calendar | MadDogTU</title>
      </Helmet>
      
      <br></br><br></br><br></br>
      <div className="content-container">
        {/* Welcome */}
        <div className="info-section">
          <img
            src={treePlanting}
            alt="Planting a Tree"
            className="section-image"
          />

          <div className="section-text">
            <h2>Get Involved</h2>
            <p className="main-text">
              MadDog TU’s mission is to conserve, protect and restore north-central Vermont coldwater fisheries and watersheds
              through education, advocacy, and boots-on-the-ground conservation. We do this by planting trees to protect the Dog River and its riparian banks.
              To education and outreach with local communities about dam removals. We have something for everyone.
            </p>
          </div>
        </div>
      </div>

      <main className="event-page">

        <div className="event-grid">

          {/* Event */}
          <div className="card">
            <h2>Trout Unlimited Events in Vermont</h2>

            <iframe
              src="https://tu.myeventscenter.com/calendar/2/0?mode=image&cta=REGISTER&cti=DETAILS&state=vt"
              title="Event"
              frameBorder="0"
            />
          </div>
          
          {/* Calendar */}
          <div className="card">
            <h2>Chapter Calendar</h2>

            <iframe
              src="https://calendar.google.com/calendar/embed?src=355d65b0f2b3cfbb96ccb26683c0746c8ec1d47cf9fffe7530252dbb089d84fd%40group.calendar.google.com&ctz=America%2FDetroit"
              title="Calendar"
              frameBorder="0"
            />
          </div>

        </div>

      </main>
    </div>
  );
}