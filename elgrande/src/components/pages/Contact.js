import React from "react";
import "../../App.css";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="title">KONTAKT</h1>
        <div className="contactContainer">
          <div className="contactWrapper">
            <ul className="contactItems">
              <div className="contactItemContainer">
                <li className="contactItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </p>
                  <div className="phoneContainer">
                    <p className="phone">621 259 357</p>
                    <p className="phone">633 888 317</p>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <p className="quote">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </p>
                  <div className="mailContainer">
                    <p className="mail">matma5.0kurs@gamil.com</p>
                    <p className="mail">matma5.0kurs@onet.pl</p>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="socialMedia">
                    <p className="quote">
                      <FontAwesomeIcon icon={faInstagram} />
                    </p>
                    <p className="quote">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </p>
                    <p className="quote">
                      <FontAwesomeIcon icon={faTiktok} />
                    </p>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
