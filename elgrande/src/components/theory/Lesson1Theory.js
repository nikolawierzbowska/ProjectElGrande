import React from "react";
import "../../App.css";
import "../users/user/User.css";
import "./../users/admin/Sidebar.css";

function Lesson1Theory() {
  return (
    <>
      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Liczby Naturalne</p>
        Liczby naturalne to jeden z podstawowych rodzajów liczb, które występują
        w matematyce. Liczby naturalne rozpoczynają się od 0 i nie mają górnej
        granicy. Oznaczane są najczęściej literą N. <br></br>N = 1, 2, 3, 4...
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Liczby Całkowite</p>
        Liczby całkowite to liczby naturalne oraz ich ujemne odpowiedniki, a
        także liczba zero. Oznaczane są najczęściej literą Z.
        <br></br>Z =...-4, -3, -2, -1, 0, 1, 2, 3, 4...
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Liczby Wymierne</p>
        Liczby wymierne to takie liczby które możemy przedstawić za pomocą
        ułamka zwykłego nieskracalnego w takiej postaci: Q = p / q. Ten zapis
        oznacza, że nasz ułamek jest nieskracalny, czyli nie da się go już
        bardziej uprościć.
        <br></br>Q =... -&#188;,-&#189;, &#188;, &#189;...
      </div>
      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Liczby Niewymierne</p>
        Liczby niewymierne to takie liczby których nie można zapisać za pomocą
        ułamka zwykłego.
        <br></br>NW =...-2√7, 3√5 ...
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Liczby Rzeczywiste</p>
        Liczby rzeczywiste to zbiór liczb rzeczywistych, to zbiór wszystkich
        liczb - wymiernych i niewymiernych. Zbiór liczb rzeczywistych oznaczamy
        symbolem R.
        <br></br>Z =...0, 1, -3, 56, , π...
      </div>

      <div className="numbersPicture">
        <img src="./imgTheory/numbers.JPG" alt="numbers" />
      </div>

      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Potęgi</p>
        <div className="logFunction">
          <img src="./imgTheory/numbers2.JPG" alt="numbers" />
        </div>
      </div>
      <div className="typeOfNumber">
        <p className="titleOfTypeNumer">Działania na potęgach</p>
        <div className="logFunction">
          <img src="./imgTheory/numbers1.JPG" alt="numbers" />
        </div>
      </div>
    </>
  );
}

export default Lesson1Theory;
