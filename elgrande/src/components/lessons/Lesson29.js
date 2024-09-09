import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";
import { Link } from "react-router-dom";
import NavbarLesson29 from "../navbarLessons/NavbarLesson29";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function Lesson29() {
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
        <h1 className="titleAdmin"> LEKCJA 29 - ARKUSZ MATURALNY 10</h1>
        <div className="lessonStructure">
          <NavbarLesson29 />
          <div className="lessonBody">
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
          <div className="lessonFooter">
            <Link to="/user-lesson-28">
              <span className="nameOfLesson">
                <FontAwesomeIcon icon={faCaretLeft} id="caretLeft" />
                Arkusz maturalny 9
              </span>
            </Link>
            <Link to="/user-lesson-29">
              <span className="nameOfLesson">
                Arkusz maturalny 11
                <FontAwesomeIcon icon={faCaretRight} id="caretRight" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson29;
