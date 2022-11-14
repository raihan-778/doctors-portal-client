import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <section
      style={{
        background: `url(${footerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" text-black"
    >
      <footer className="footer p-10  ">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">Oral Helth</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
