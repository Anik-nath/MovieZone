import React from "react";
import style from "../../CSS/style.module.css";
const Footer = () => {
  return (
    <div className={style.footerbackground}>
      <div className="container text-white pt-5">
        <div className="row px-3 px-lg-0 px-md-0 py-3 pb-5">
          <div className="col-lg-4 col-md-4 col-12">
            <h5 className="text-uppercase">
              <span className="h5 bg-black p-1 text-danger me-2">MZ</span>
              movieZone
            </h5>
            <p className="text-white-50 py-2">
              <i className="fas fa-map-marker-alt me-2 pt-2"></i>
              5th Floor, XYZ Tower Sitakunda
              <br /> Chittagong, Bangladesh.
            </p>
            <p className="text-white py-3">
              <i className="fas fa-phone me-2 py-2"></i>
              Call Us: (+880) 175 472 234548
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-12 my-3 my-lg-0 my-md-0">
            <h5 className="pb-4">Resources</h5>
            <ul className="text-white-50 list-unstyled">
              <li>About Us</li>
              <li>Blockbuster</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 col-12">
            <h5 className="pb-4">Legal</h5>
            <ul className="text-white-50 list-unstyled">
              <li>Terms of Use Service</li>
              <li>Privacy Policy</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <h5 className="pb-3">Newsletter</h5>
            <p className="text-white-50">
              Subscribe our news letter system now to get lettest movie news
              from us.
            </p>
            <input
              className="bg-transparent border border-secondary text-white-50 rounded px-3 py-1"
              type="email"
              placeholder="Enter email"
            />
            <div className="pt-3 fs-5">
              <a
                className={style.textcolor}
                style={{ textDecoration: "none" }}
                href="#!"
              >
                Subscribe Now{" "}
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-center pb-3">
            <small className="text-white-50">
              {" "}
              &copy; Copywrite 2021{" "}
              <span className="text-light">MovieZone.com</span>. Design by Anik
              Nath{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
