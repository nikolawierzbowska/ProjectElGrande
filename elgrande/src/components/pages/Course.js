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
                  <img
                    src="./picture/register1.png"
                    className="photoFirst"
                    alt="register photo"
                  />
                </div>
                <div className="courseItemContainerText">
                  <p className="textToTheImage">
                    Kliknij zapisz się
                    <br /> i wypełnij formularz
                  </p>
                  <p className="numbers">1</p>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img
                    src="./picture/cash.png"
                    className="photoSecond"
                    alt="payment photo"
                  />
                </div>
                <div className="courseItemContainerText">
                  <p className="textToTheImage">Opłać kurs</p>

                  <p className="numbers">2</p>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/mail.png" alt="mail photo" />
                </div>
                <div className="courseItemContainerText">
                  <p className="textToTheImage">
                    Otrzymasz mail <br />z potwierdzeniem
                  </p>
                  <p className="numbers">3</p>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/login1.png" alt="login photo" />
                </div>
                <div className="courseItemContainerText">
                  <p className="textToTheImage">
                    Zaloguj się <br />
                    do platformy
                  </p>
                  <p className="numbers">4</p>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/goal.png" alt="gain goal photo" />
                </div>
                <div className="courseItemContainerText">
                  <p className="textToTheImage">Zdobywaj wiedzę!</p>
                  <p className="numbers">5</p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
