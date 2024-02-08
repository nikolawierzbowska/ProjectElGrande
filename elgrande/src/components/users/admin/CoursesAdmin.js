import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Sidebar.css";
import "./Admin.css";
import Sidebar from "./Sidebar";
import { request } from "../../../axios_helper.js";
import ButtonUpdate from "../../button/ButtonUpdate.js";
import ButtonDelete from "../../button/ButtonDelete.js";

function CoursesAdmin() {
  const [courses, setCourses] = useState([]);
  const [state, setState] = useState({ name: "" });

  const [editCourseId, setEditCourseId] = useState(null);
  const [editedCourseName, setEditedCourseName] = useState("");

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleEditClick = (id, name) => {
    setEditCourseId(id);
    setEditedCourseName(name);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEditedCourseName(value);
  };

  const handleCancel = () => {
    setEditedCourseName("");
    setEditCourseId(null);
    document.getElementsByClassName("errorUpdate")[0].textContent = "";
  };

  useEffect(() => {
    request("GET", "http://localhost:8080/api/v1/admin/courses")
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error during get all courses:", error);
      });
  }, []);

  const handleUpdateCourse = (id) => {
    request("PATCH", `http://localhost:8080/api/v1/admin/courses/${id}`, {
      name: editedCourseName,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.name);
          // document.getElementById("newCourse").value = "";
          document.getElementsByClassName("errorUpdate")[0].textContent = "";

          setCourses(
            courses.map((course) => {
              if (course.id === id) {
                return { ...course, name: editedCourseName };
              }
              return course;
            })
          );
          setEditedCourseName("");
          setEditCourseId(null);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");

          const errorInfo = document.getElementsByClassName("errorUpdate");
          errorInfo[0].textContent =
            "Max. długość 35 / już istnieje taka nazwa ";
        }
      });
  };

  const handleDeleteCourse = (id) => {
    request("DELETE", `http://localhost:8080/api/v1/admin/courses/${id}`, {})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setCourses(
            courses.filter((course) => {
              return course.id !== id;
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");
        }
      });
  };

  const handleAddNewCourse = (e) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/admin/courses", {
      name: state.name,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          document.getElementById("newCourse").value = "";
          setCourses([...courses, response.data]);

          document.getElementsByClassName("error")[0].textContent = "";
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");

          const errorInfo = document.getElementsByClassName("error");
          errorInfo[0].textContent =
            "Max. długość 35 / już istnieje taka nazwa ";
        }
      });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content-holder">
        <div className="content-grid-one">
          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">
                Istniejące kursy na platformie:
              </h3>
            </div>
            <div className="grid-c1-content">
              <span className="errorUpdate"></span>
              {courses.map((course) => (
                <li className="courseLine" key={course.id}>
                  {editCourseId === course.id ? (
                    <textarea
                      className="updatedText"
                      type="text"
                      value={editedCourseName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    course.name
                  )}

                  <span className="spanButtons">
                    {editCourseId === course.id ? (
                      [
                        <ButtonUpdate
                          onClick={() => handleUpdateCourse(course.id)}
                        >
                          Zapisz
                        </ButtonUpdate>,
                        <ButtonDelete onClick={() => handleCancel()}>
                          Anuluj
                        </ButtonDelete>,
                      ]
                    ) : (
                      <>
                        <ButtonUpdate
                          onClick={() =>
                            handleEditClick(course.id, course.name)
                          }
                        />
                        <ButtonDelete
                          onClick={() => handleDeleteCourse(course.id)}
                        />
                      </>
                    )}
                  </span>
                </li>
              ))}
            </div>
          </div>

          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Dodaj nowy kurs: </h3>
            </div>
            <div className="grid-c1-content">
              <div className="loginItemContainer">
                <li className="loginItem">
                  <div className="containerFormLogin">
                    <span className="error"></span>
                    <form onSubmit={handleAddNewCourse}>
                      <div className="personalDataLogin">
                        <input
                          type="text"
                          id="newCourse"
                          name="name"
                          placeholder="nazwa kursu"
                          onChange={onChangeHandler}
                          required
                        ></input>
                      </div>

                      <div className="buttonContainerLogin">
                        <button type="submit" className="btn--outline--accept">
                          ZAPISZ
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoursesAdmin;
