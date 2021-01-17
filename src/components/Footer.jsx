import React from "react";
import footerStyles from "../styles/Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div id={footerStyles.details}>
      <p>&nbsp;&nbsp; &copy; Designed by Rishi </p>
      <ul className={footerStyles.icons}>
        <li>
          <a href="/#">
            <FaTwitter size="2em" />
          </a>
        </li>
        <li>
          <a href="/#">
            <FaFacebook size="2em" />
          </a>
        </li>
        <li>
          <a href="/#">
            <FaInstagram size="2em" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
