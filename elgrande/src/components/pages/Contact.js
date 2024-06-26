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
        <h1 className="titleContact">Jesteśmy do Twojej Dyspozycji</h1>
        <div className="contactContainer">
          <div className="contactWrapper">
            <ul className="contactItems">
              <div className="contactItemContainerImage">
                <div className="imgContainer">
                  <img
                    src="./picture/contact.png"
                    alt="contact to the office"
                  />
                </div>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div className="phoneContainer">
                    <div className="phone">621 259 357</div>
                    <div className="phone">633 888 317</div>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="mailContainer">
                    <div className="mail">matma5.0kurs@gmail.com</div>
                    <div className="mail">matma5.0kurs@onet.pl</div>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="socialMedia">
                    <div className="icon">
                      <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faSquareFacebook} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faTiktok} />
                    </div>
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
