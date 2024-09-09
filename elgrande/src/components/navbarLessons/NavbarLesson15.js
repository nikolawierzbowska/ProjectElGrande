import React, { useState, useEffect } from "react";
import "../../App.css";
import "../users/user/User.css";
import Lesson1Theory from "../theory/Lesson1Theory";
import Lesson1Films from "../films/Lesson1Films";
import Lesson1Tasks from "../tasks/Lesson1Tasks";
import Lesson1Answers from "../answers/Lesson1Answers";

const NavbarLesson15 = () => {
  const [showTheory, setShowTheory] = useState(true);
  const [showQuiz, setShowQuize] = useState(false);
  const [showFilms, setShowFilms] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleTheoryClick = () => {
    setShowTheory(!showTheory);
    setShowFilms(false);
    setShowTasks(false);
    setShowAnswers(false);
  };
  const handleFilmsClick = () => {
    setShowFilms(!showFilms);
    setShowTheory(false);
    setShowTasks(false);
    setShowAnswers(false);
  };
  const handleTasksClick = () => {
    setShowTasks(!showTasks);
    setShowTheory(false);
    setShowFilms(false);
    setShowAnswers(false);
  };

  const handleAnswersClick = () => {
    setShowAnswers(!showAnswers);
    setShowTheory(false);
    setShowFilms(false);
    setShowTasks(false);
  };

  return (
    <>
      <div className="navigationLesson">
        <button className="nameOfNav" onClick={handleTheoryClick}>
          Teoria
        </button>

        <button className="nameOfNav" onClick={handleFilmsClick}>
          Filmy
        </button>
        <button className="nameOfNav" onClick={handleTasksClick}>
          Zadania do rozwiązania
        </button>
        <button className="nameOfNav" onClick={handleAnswersClick}>
          Odpowiedzi
        </button>
        {/* <div className="lessonBody">
          {showTheory ? <Lesson1Theory /> : ""}
          {showFilms ? <Lesson1Films /> : ""}
          {showTasks ? <Lesson1Tasks /> : ""}
          {showAnswers ? <Lesson1Answers /> : ""}
        </div> */}
      </div>
    </>
  );
};
export default NavbarLesson15;
