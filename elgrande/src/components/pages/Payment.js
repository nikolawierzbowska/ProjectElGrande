import React from "react";
import "../../App.css";
import "./Price.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { ButtonSignUp } from "../button/ButtonSignUp";

function Payment() {
  return (
    <>
      <div className="price">
        <h1 className="titlePrice">Znajdź Plan, Który Pasuje Do Ciebie!</h1>
        <div className="pricesContainer">
          <div className="priceWrapper">
            <ul className="priceItems">
              <div className="priceContainer">
                <li className="priceItem">
                  <p className="cardImg">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </p>
                  <p className="money">200zł</p>
                  <p className="info">Dostęp do platformy:</p>
                  <p className="infoDate">3 miesiące</p>
                  <div className="buttonContainerPrice">
                    <ButtonSignUp buttonStyle="btn--outline--buy">
                      WYBIERZ
                    </ButtonSignUp>
                  </div>
                </li>
              </div>
              <div className="priceContainer">
                <li className="priceItem">
                  <p className="cardImg">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </p>
                  <p className="money">300zł</p>
                  <p className="info">Dostęp do platformy:</p>
                  <p className="infoDate">6 miesięcy</p>
                  <div className="buttonContainerPrice">
                    <ButtonSignUp buttonStyle="btn--outline--buy">
                      WYBIERZ
                    </ButtonSignUp>
                  </div>
                </li>
              </div>
              <div className="priceContainer">
                <li className="priceItem">
                  <p className="cardImg">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </p>
                  <p className="money">400zł</p>
                  <p className="info">Dostęp do platformy:</p>
                  <p className="infoDate">12 miesięcy</p>
                  <div className="buttonContainerPrice">
                    <ButtonSignUp buttonStyle="btn--outline--buy">
                      WYBIERZ
                    </ButtonSignUp>
                  </div>
                </li>
              </div>
              <div className="priceContainerImage">
                <div className="imgContainerPrice">
                  <img
                    src="./picture/money1.png"
                    alt="student is paying for course"
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
