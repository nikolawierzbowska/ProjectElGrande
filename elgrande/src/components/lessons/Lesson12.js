import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";
import { Link } from "react-router-dom";
import NavbarLesson12 from "../navbarLessons/NavbarLesson12";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function Lesson12() {
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
        <h1 className="titleAdmin"> LEKCJA 12 - WIELOMIANY</h1>
        <div className="lessonStructure">
          <NavbarLesson12 />
          <div className="lessonBody">
            <br></br> <br></br> <br></br> <br></br> <br></br>
          </div>
          <div className="lessonFooter">
            <Link to="/user-lesson-1">
              <span className="nameOfLesson">
                <FontAwesomeIcon icon={faCaretLeft} id="caretLeft" />
                Wyrażenia algebraiczne
              </span>
            </Link>
            <Link to="/user-lesson-3">
              <span className="nameOfLesson">
                Ciągi
                <FontAwesomeIcon icon={faCaretRight} id="caretRight" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lesson12;
