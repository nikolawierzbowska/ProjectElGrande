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
                  <div className="textToTheImage">
                    Kliknij zapisz się
                    <br /> i wypełnij formularz
                  </div>
                  <div className="numbers">1</div>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img
                    src="./picture/cash.png"
                    className="photoSecond"
                    alt="payment"
                  />
                </div>
                <div className="courseItemContainerText">
                  <div className="textToTheImage">Opłać kurs</div>

                  <div className="numbers">2</div>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/mail.png" alt="mail photo" />
                </div>
                <div className="courseItemContainerText">
                  <div className="textToTheImage">
                    Otrzymasz mail <br />z potwierdzeniem
                  </div>
                  <div className="numbers">3</div>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/login1.png" alt="login photo" />
                </div>
                <div className="courseItemContainerText">
                  <div className="textToTheImage">
                    Zaloguj się <br />
                    do platformy
                  </div>
                  <div className="numbers">4</div>
                </div>
              </div>
              <div className="courseItemContainerImage">
                <div className="imgContainerCourse">
                  <img src="./picture/goal.png" alt="gain goal photo" />
                </div>
                <div className="courseItemContainerText">
                  <div className="textToTheImage">Zdobywaj wiedzę!</div>
                  <div className="numbers">5</div>
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
