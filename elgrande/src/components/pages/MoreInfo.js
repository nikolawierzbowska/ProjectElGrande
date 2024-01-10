import React from "react";
import "../../App.css";
import "./MoreInfo.css";
import { ButtonSave } from "../button/ButtonSave";

function MoreInfo() {
  return (
    <>
      <div className="moreInfo">
        <h1 className="titleInfo">Kurs maturalny z matematyki podstawowej</h1>
        <div className="moreInfoContainer">
          <div className="moreInfoWrapper">
            <ul className="moreInfoItems">
              <div className="moreInfoItemContainerBlank">
                <li className="moreInfoItemText">
                  <div className="infoTextContainer">
                    <p className="infoText">
                      Kurs obejmuje wszystkie zagadnienia obecne na egzaminie.
                      Składa sie z 30 lekcji. Na początku każdej lekcji jest
                      wprowadzenie teoretyczne, następnie omawianie wraz z
                      rozwiązaniem zadań oraz zadania do samodzielnego
                      rozwiązania. Każde zadanie posiada rozwiązanie wraz z
                      komentarzem.
                    </p>
                  </div>
                </li>
              </div>
              <div className="moreInfoItemContainerImage">
                <div className="imgContainerInfo">
                  <img src="./picture/info.png" alt="contact photo" />
                </div>
              </div>
              <div className="moreInfoItemContainer">
                <li className="moreInfoItem">
                  <div className="infoContainer">
                    <div className="infoTextContainer2">
                      <p className="infoTextTable">
                        Zagadnienia omawiane w kursie:
                      </p>
                    </div>

                    <div className="taskContainer">
                      <div className="task">
                        Liczby i Potęgi
                        <br /> Logarytmy
                        <br /> Procenty
                        <br /> Równania
                        <br /> Nierówności
                      </div>
                      <div className="task">
                        Funkcja liniowa
                        <br /> Funkcja kwadratowa
                        <br /> Funkcja wymierna
                        <br />
                        Funkcja wykładnicza
                        <br /> Funkcja logarytmiczna
                      </div>
                      <div className="task">
                        Wyrażenia algebraiczne
                        <br /> Wielomiany <br />
                        Ciągi
                        <br /> Trygonometria <br />
                        Geometria anlityczna
                      </div>
                      <div className="task">
                        Planimetria <br /> Stereometria <br /> Statystyka <br />{" "}
                        Prawdopodobieństwo <br />
                        Arkusze maturalne
                      </div>
                    </div>
                    <ButtonSave buttonStyle="btn--outline--save" />
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

export default MoreInfo;
