import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div>
        <Link
          to="https://www.facebook.com/groups/MadDogTU/"
          target="_blank"
          className="social-media-container"
        >
          <img
            src="/facebooklogo.png"
            alt="Facebook Logo"
            className="social-media"
          />
        </Link>
        
        <Link
          to="https://www.instagram.com/maddogtu/"
          target="_blank"
          className="social-media-container"
        >
          <img
            src="/instagramLogo.png"
            alt="Instagram Logo"
            className="social-media"
          />
        </Link>
      </div>

      <div className="footer-info">
        <a href="mailto:eventmaddogtu@gmail.com">eventmaddogtu@gmail.com</a>
      </div>

      <div className="footer-info">
        <p className="footer-address">
          PO Box 892
          Montpelier
          VT 05601
        </p>


      </div>

      <div className="footer-info">
        <p>© 2026 Mad Dog Trout Unlimited Chapter 539</p>
      </div>

    </footer>
  );
}