import React from "react";
import "../../App.css";
import "../users/user/User.css";
import "./../users/admin/Sidebar.css";

function Lesson2Theory() {
  return (
    <>
      <div className="typeOfNumber">
        <div className="divLogPic">
          <img className="logPic" src="./imgTheory/log.JPG" alt="log" />
        </div>
        <p className="titleOfTypeNumer">Definicja </p>
        Logarytmem liczby <b>b</b> przy podstawie <b>a</b> nazywamy taką liczbę
        <b> c</b>, że <b>a</b> podniesione do potęgi <b>c</b> daje liczbę{" "}
        <b>b</b>. Matematycznie zapiszemy tę definicję tak:<br></br>{" "}
        <div className="divLogDef">
          <img
            className="logPicDef"
            src="./imgTheory/logDef.JPG"
            alt="logDef"
          />
        </div>
      </div>

      <div className="typeOfNumber">
        Logarytm istnieje tylko wówczas, gdy spełnione są trzy warunki, które
        często nazywamy <b>założeniami</b> lub <b>dziedziną logarytmu:</b>{" "}
        <br></br>- podstawa logarytmu musi być zawsze liczbą dodatnią,
        <b>
          czyli:
          {"a>0 "}{" "}
        </b>{" "}
        , <br></br>- podstawa jest różna od 1,<b> zatem: a≠1</b>, <br></br>-
        liczba logarytmowana musi być dodatnia, <b> czyli: {"b>0 "} </b>
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Logarytm iloczynu</p>
        Logarytm iloczynu jest równy sumie logarytmów:
        <br></br>
        <div className="logFunction">
          <img src="./imgTheory/changeLog4.JPG" alt="log" />
        </div>
      </div>
      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Logarytm ilorazu</p>
        Logarytm iloczynu jest równy różnicy logarytmów:
        <br></br>
        <div className="logFunction">
          <img src="./imgTheory/changeLog5.JPG" alt="log" />
        </div>
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Zamiana podstawy logarytmu</p>
        <div className="logFunction">
          <img src="./imgTheory/changeLog.JPG" alt="log" />
          <img src="./imgTheory/changeLog1.JPG" alt="log" />
        </div>
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">
          Działania na logarytmach - pozostałe wzory
          <div className="logFunction">
            <img src="./imgTheory/changeLog2.JPG" alt="log" />
          </div>
          <div className="logFunction">
            <img src="./imgTheory/changeLog3.JPG" alt="log" />
          </div>
        </p>
      </div>
    </>
  );
}

export default Lesson2Theory;
