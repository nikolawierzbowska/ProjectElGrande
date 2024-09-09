import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";
import { Link } from "react-router-dom";
import NavbarLesson19 from "../navbarLessons/NavbarLesson19";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function Lesson19() {
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
        <h1 className="titleAdmin"> LEKCJA 19 - PRAWDOPODOBIEŃSTWO</h1>
        <div className="lessonStructure">
          <NavbarLesson19 />
          <div className="lessonBody">
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
          <div className="lessonFooter">
            <Link to="/user-lesson-1">
              <span className="nameOfLesson">
                <FontAwesomeIcon icon={faCaretLeft} id="caretLeft" />
                Statystyka
              </span>
            </Link>
            <Link to="/user-lesson-3">
              <span className="nameOfLesson">
                Arkusz maturalny 1
                <FontAwesomeIcon icon={faCaretRight} id="caretRight" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson19;
