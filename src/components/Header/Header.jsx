import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import DownArrow from "/downArrow.png";
import LogoImproved from "/logoImproved.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [conservationOpen, setConservationOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);

  function closeMenus(){
    setMenuOpen(false); 
    setEducationOpen(false);
    setConservationOpen(false);
  }

  return (
    <header className="header main-yellow">

      {/* LOGO */}
      <Link to="/" className="logo-container">
        <img
          src={LogoImproved}
          alt="Mad Dog Logo"
          className="logo"
          onClick={() => setMenuOpen(false)}
        />
      </Link>

      {/* MOBILE BUTTON */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* NAVIGATION */}
      <nav className={`main-yellow nav ${menuOpen ? "active" : ""}`}>

        <ul className="nav-links">
          <li><Link to="/" onClick={() => closeMenus()}>Home</Link></li>
          <li><Link to="/about" onClick={() => closeMenus()}>About</Link></li>
          <li><Link to="/calendar" onClick={() => closeMenus()}>Calendar</Link></li>
          {/* First drop down menu */}
          <li
            className="nav-link-dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setConservationOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setConservationOpen(false)}
          >
            <div
              className="dropdown-trigger"
              onClick={() => setConservationOpen(!conservationOpen) && setEducationOpen(!educationOpen)}
            >
              <p className="nav-links-dropdown-anchor">
                Conservation
              </p>

              <img
                className={`smaller-arrow ${conservationOpen ? "rotate" : ""}`}
                src={DownArrow}
                alt="dropdown arrow"
              />
            </div>

            <div className={`dropdown-menu ${conservationOpen ? "show" : ""}`}>
              <Link to="/damremoval" onClick={() => closeMenus()}>Dam Removal</Link>
              <Link to="/dogriverday" onClick={() => closeMenus()}>Dog River Day</Link>
              <Link to="/treeplanting" onClick={() => closeMenus()}>Tree Planting</Link>
            </div>
            
          </li>
          {/* Second drop down menu */}
          <li
            className="nav-link-dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setEducationOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setEducationOpen(false)}
          >
            <div
              className="dropdown-trigger"
              onClick={() => setEducationOpen(!educationOpen) && setConservationOpen(!conservationOpen)}
            >
              <p className="nav-links-dropdown-anchor">
                Education
              </p>

              <img
                className={`smaller-arrow ${educationOpen ? "rotate" : ""}`}
                src={DownArrow}
                alt="dropdown arrow"
              />
            </div>

            <div className={`dropdown-menu ${educationOpen ? "show" : ""}`}>
              <Link to="/troutcamp" onClick={() => closeMenus()}>Trout Camp</Link>
              <Link to="/troutclassroom" onClick={() => closeMenus()}>Trout in The Classroom</Link>
              <Link to="/flytying" onClick={() => closeMenus()}>Winter Fly Tying Classes</Link>
              <Link to="/womensweekend" onClick={() => closeMenus()}>Women's Weekend</Link>
              {/* <Link to="/twofly" onClick={() => closeEduMenus()}>2Fly Competition</Link> */}
            </div>
            
          </li>

        </ul>

        {/* JOIN */}
        <div className="header-buttons">
          <form method="post" target="_blank" action="https://crm.tu.org/eweb/SnapFormsDonations.aspx?tu_source=WACQHP&amp;instance=tujoinbase&amp;marketing_campaign=&amp;marketing_source=MWL-WFO-WEBACQWL-GIDD&amp;_gl=1*12d7eqe*_gcl_au*OTA4ODEwMjI2LjE3NjM0OTM5Njc.*_ga*MTcyNzI1MDAxNC4xNzM2NDYwNjky*_ga_D3P9D95QQV*czE3NjM0OTM5NjckbzIkZzAkdDE3NjM0OTM5NjckajYwJGwwJGgw">
            <button className="header-button main-green">
              Join
            </button>
          </form>

          {/* DONATE */}
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <div>
              <input type="hidden" name="cmd" value="_donations"></input>
              <input type="hidden" name="bn" value="TipsandTricks_SP"></input>
              <input type="hidden" name="business" value="troutunlimitedmaddog@yahoo.com"></input>
              <input type="hidden" name="return" value="https://www.maddogtu.org/thanks-for-donation/"></input>
              <input type="hidden" name="rm" value="0"></input>
              <input type="hidden" name="currency_code" value="USD"></input>

              <button type="submit" className="header-button main-brown">
                Donate
              </button>
            </div>
          </form>
          
        </div>

      </nav>
    </header>
  );
}