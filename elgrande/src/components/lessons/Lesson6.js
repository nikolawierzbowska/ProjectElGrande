import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";
import { Link } from "react-router-dom";
import NavbarLesson6 from "../navbarLessons/NavbarLesson6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function Lesson6() {
  return (
    <>
      <SidebarUser click={true} />
      <style>
        {`
        #lessonsId{
          border: 1px solid black; 
          background-color:#d33175;
          accent-color: black;

          #caretDown, #caretUp{
            display: block
        } 
          `}
      </style>

      <div className="main-content-holder">
        <h1 className="titleAdmin"> LEKCJA 6 - FUNCKJA LINIOWA</h1>
        <div className="lessonStructure">
          <NavbarLesson6 />

          <div className="lessonFooter">
            <Link to="/user-lesson-1">
              <span className="nameOfLesson">
                <FontAwesomeIcon icon={faCaretLeft} id="caretLeft" />
                Nierówności
              </span>
            </Link>
            <Link to="/user-lesson-3">
              <span className="nameOfLesson">
                Funkcja kwadratowa
                <FontAwesomeIcon icon={faCaretRight} id="caretRight" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson6;
