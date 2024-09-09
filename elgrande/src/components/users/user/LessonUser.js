import React from "react";
import "../../../App.css";
import "./User.css";
import "../admin/Sidebar.css";
import SidebarUser from "../user/SidebarUser";
import { Link } from "react-router-dom";

function LessonUser() {
  return (
    <>
      <SidebarUser click={false} />
      <style>
        {`
        #lessonsId{
          border: 1px solid black; ;
          background-color:#d33175;
          accent-color: black;

          #caretDown, #caretUp{
            display: block
        }      
          `}
      </style>

      <div className="textLesson">
        <div className="firstPartLessons">
          Na samym początku pobierz wzory maturalne
          <span className="mathematicalCard">
            <a
              href="https://www.oke.waw.pl/files/oke_waw_3498wybrane_wzory_matematyczne_EM2023.pdf.pdf"
              target="_blank"
            >
              KARTA WZORÓW
            </a>
          </span>
          jeśli ich jeszcze nie masz i wydrukuj (najlepiej dwustronnie). Staraj
          się rozwiązywać zadania wraz z ich użyciem. Regularna praca wraz z
          kartą wzorów zagwarantuje Ci, że w trakcie pisania egzaminu
          maturalnego nie będziesz tracił czasu na ich odnajdywanie.
        </div>
        <br></br>

        <div className="secondPartLessons">
          <p>
            Wykonując każdą lekcję, staraj się przerabiać cały materiał, nie
            pomijaj żadnych kroków:
          </p>
          <br></br>
          <p className="learnSteps">
            <span className="number">1.</span> Na początku zapoznaj się z
            teorią.
          </p>
          <p className="learnSteps">
            <span className="number">2.</span> Kolejno wykonaj quiz, który
            sprawdzi zapamiętaną wiedzę.
          </p>
          <p className="learnSteps">
            <span className="number">3.</span> Następnie obejrzyj filmiki z
            rozwiązywanych zadań i spróbuj je sam przerobić.
          </p>
          <p className="learnSteps">
            <span className="number">4.</span> Po obejrzeniu filmików przejdź do
            sekcji rozwiązywania zadań.
          </p>
          <br></br>
          <Link to="/user-lesson-1">
            <span className="nameOfLesson">Liczby i potęgi</span>
          </Link>

          <span className="contactContainerImageGoal">
            <img src="./picture/goal.png" alt="goal" />
          </span>
        </div>
      </div>
    </>
  );
}

export default LessonUser;
