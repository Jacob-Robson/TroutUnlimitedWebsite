import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../components/Home/Home.css";
import miRiver from "/miRiver.png";
import madRiver from "/madRiver.jpg";
import anr from "/anr.jpg";
import brownTrout from "/brownTrout.png";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home | MadDogTU</title>
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero">
        <img
          src={miRiver}
          alt="Brown Trout"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="banner">
            Protect, Reconnect, Restore, Sustain, Conserve
          </h1>

          <Link to="/calendar" className="btn main-blue">
            Get Involved
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content">
        <div className="content-container">
          {/* Welcome */}
          <div className="info-section">
            <img
              src={madRiver}
              alt="Mad River"
              className="section-image"
            />

            <div className="section-text">
              <h2>Welcome to the MadDog Chapter of Trout Unlimited</h2>
              <p className="main-text">
                Trout Unlimited is a national organization with more than 150,000 members organized into about 400 chapters 
                from Maine to Montana to Alaska. This dedicated grassroots army is matched by a respected staff of lawyers, 
                policy experts and scientists, who work out of more than 30 offices nationwide. These conservation professionals 
                ensure that TU is at the forefront of fisheries restoration work at the local, state and national levels.
              </p>
            </div>
          </div>

          <div className="info-section reverse">
            <img
              src={anr}
              alt="Fishing Handling"
              className="section-image"
            />

            <div className="section-text">
              <h2>Our Mission</h2>
              <p className="main-text">
                Our mission is to conserve, protect and restore north-central Vermont coldwater fisheries 
                and watersheds through education, advocacy, and boots-on-the-ground conservation.
              </p>
            </div>

          </div>

          <div className="info-section">
            <img
              src={brownTrout}
              alt="Brown Trout"
              className="section-image"
            />

            <div className="section-text">
            <h2>Vision</h2>
              <p className="main-text">
                The vision of the MadDog Chapter of Vermont Trout Unlimited will ensure that robust populations of native and wild 
                coldwater fisheries once again thrive, so that future generations can enjoy healthy fisheries in their home waters.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
