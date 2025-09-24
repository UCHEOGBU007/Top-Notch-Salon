import React from "react";
import Style from "../Css/Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import { SiMinutemailer } from "react-icons/si";
import { CiHome } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineRoundaboutLeft } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className={Style.footercontainer}>
        <div>
          <img src="/Logo.jpg" alt="Logo" className={Style.logo} />
        </div>

        <nav className={Style.section}>
          <h5>NAVIGATION:</h5>
          <ul>
            <li>
              <Link to="/" className={Style.link}>
                <CiHome /> HOME
              </Link>
            </li>
            <li>
              <Link to="/About" className={Style.link}>
                <MdOutlineRoundaboutLeft /> ABOUT
              </Link>
            </li>

            <li>
              <Link to="/Appointment" className={Style.link}>
                <CiCalendarDate /> APPOINTMENT
              </Link>
            </li>
          </ul>
        </nav>

        <address className={Style.section}>
          <h5>CONTACTS:</h5>
          <a href="tel:+1234567890">📞 +123-456-7890</a>
          {/* <a href="mailto:info@yourdomain.com">📧 Email Us</a> */}
          <div className={Style.mediaicons}>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/top_notchbarbers_?igsh=bml6cDVhN3M5NXNl&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
          <h5 className={Style.subscribeh5}>Subscribe News Letter:</h5>

          <form className={Style.newsletterForm} action="" method="post">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className={Style.emailInput}
            />
            <button type="submit" className={Style.submitButton}>
              Subscribe <SiMinutemailer />
            </button>
          </form>
        </address>
      </footer>

      <div className={Style.copyright}>
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Top Notch Barbers and Salon. All
          rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
