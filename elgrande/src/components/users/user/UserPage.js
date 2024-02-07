import React from "react";
import "../../../App.css";
import "./UserPage.css";

function UserPage() {
  return (
    <>
      <div className="contact">
        <h1 className="titleContact">ADMIN PAGE</h1>
        <div className="contactContainer">
          <div className="contactWrapper">
            <ul className="contactItems">
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="icon"></div>
                  <div className="phoneContainer">
                    <div className="phone">621 259 357</div>
                    <div className="phone">633 888 317</div>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="icon"></div>
                  <div className="mailContainer">
                    <div className="mail">matma5.0kurs@gmail.com</div>
                    <div className="mail">matma5.0kurs@onet.pl</div>
                  </div>
                </li>
              </div>
              <div className="contactItemContainer">
                <li className="contactItem">
                  <div className="socialMedia">
                    <div className="icon"></div>
                    <div className="icon"></div>
                    <div className="icon"></div>
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

export default UserPage;
