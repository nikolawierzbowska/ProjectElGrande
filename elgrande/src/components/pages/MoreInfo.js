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
                      rozwiązania. Każde zadanie posiada rozwiązanie.
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
                        <p className="taskName">Liczby i Potęgi</p>

                        <p className="taskName">Logarytmy</p>

                        <p className="taskName">Procenty</p>

                        <p className="taskName">Równania</p>

                        <p className="taskName">Nierówności</p>
                      </div>
                      <div className="task">
                        <p className="taskName">Funkcja liniowa</p>

                        <p className="taskName">Funkcja kwadratowa</p>

                        <p className="taskName">Funkcja wymierna</p>

                        <p className="taskName">Funkcja wykładnicza</p>

                        <p className="taskName">Funkcja logarytmiczna</p>
                      </div>
                      <div className="task">
                        <p className="taskName">Wyrażenia algebraiczne</p>

                        <p className="taskName">Wielomiany</p>

                        <p className="taskName">Ciągi</p>

                        <p className="taskName">Trygonometria</p>

                        <p className="taskName">Geometria anlityczna</p>
                      </div>
                      <div className="task">
                        <p className="taskName">Planimetria</p>

                        <p className="taskName">Stereometria</p>

                        <p className="taskName">Statystyka </p>

                        <p className="taskName">Prawdopodobieństwo</p>

                        <p className="taskName">Arkusze maturalne</p>
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
