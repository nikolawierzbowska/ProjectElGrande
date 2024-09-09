import React from "react";
import "../../App.css";
import "../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";
import { Link } from "react-router-dom";
import NavbarLesson1 from "../navbarLessons/NavbarLesson1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Lesson1() {
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
        <h1 className="titleAdmin"> LEKCJA 1 - LICZBY I POTĘGI</h1>
        <div className="lessonStructure">
          <NavbarLesson1 />

          <div className="lessonFooter">
            <Link to="/user-lesson-2">
              <span className="nameOfLesson">
                Logarytmy
                <FontAwesomeIcon icon={faCaretRight} id="caretRight" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson1;
