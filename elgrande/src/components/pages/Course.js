import React from "react";
import "../../App.css";
import "./Course.css";

function Course() {
  return (
    <>
      <div className="course">
        <h1 className="titleCourse">Jak WZIĄĆ UDZIAŁ W KURSIE?</h1>
        <div className="courseContainer">
          <div className="courseWrapper">
            <ul className="courseItems">
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/register1.png" alt="register photo" />
                </div>
                <div className="courseItemContainerText">
                  Kliknij zapisz się
                  <br /> i wypełnij formularz
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/cash.png" alt="payment photo" />
                </div>
                <div className="courseItemContainerText">Opłać kurs</div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/mail.png" alt="mail photo" />
                </div>
                <div className="courseItemContainerText">
                  Otrzymasz mail <br />z potwierdzeniem
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/login1.png" alt="login photo" />
                </div>
                <div className="courseItemContainerText">
                  Zaloguj się <br />
                  do platformy
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/goal.png" alt="gain goal photo" />
                </div>
                <div className="courseItemContainerText">Zdobywaj wiedzę!</div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
