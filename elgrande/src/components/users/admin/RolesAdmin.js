import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Sidebar.css";
import "./Admin.css";
import { request } from "../../../axios_helper.js";
import ButtonUpdate from "../../button/ButtonUpdate.js";
import ButtonDelete from "../../button/ButtonDelete.js";
import Sidebar from "./Sidebar";

function RolesAdmin() {
  const [error, setError] = useState("");
  const [errorUpdate, setErrorUpdate] = useState("");

  const [roles, setRoles] = useState([]);
  const [state, setState] = useState({ name: "" });

  const [editRoleId, setEditRoleId] = useState(null);
  const [editedRoleName, setEditedRoleName] = useState("");

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleEditClick = (id, name) => {
    setEditRoleId(id);
    setEditedRoleName(name);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEditedRoleName(value);
  };

  const handleCancel = () => {
    setEditedRoleName("");
    setEditRoleId(null);
    document.getElementsByClassName("errorUpdate")[0].textContent = "";
  };

  useEffect(() => {
    request("GET", "http://localhost:8080/api/v1/admin/roles")
      .then((response) => {
        setRoles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error during get all roless:", error);
      });
  }, []);

  const handleUpdateRole = (id) => {
    request("PATCH", `http://localhost:8080/api/v1/admin/roles/${id}`, {
      name: editedRoleName,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.name);
          document.getElementsByClassName("errorUpdate")[0].textContent = "";

          setRoles(
            roles.map((course) => {
              if (course.id === id) {
                return { ...course, name: editedRoleName };
              }
              return course;
            })
          );
          setEditedRoleName("");
          setEditRoleId(null);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");
        }
        setErrorUpdate(error.response.data.info);
      });
  };

  const handleDeleteRole = (id) => {
    request("DELETE", `http://localhost:8080/api/v1/admin/roles/${id}`, {})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setRoles(
            roles.filter((role) => {
              return role.id !== id;
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error during delete:", error);

        if (error.response && error.response.status === 401) {
          console.log("Unauthorized - invalid credentials");
        }
      });
  };

  const handleAddNewRole = (e) => {
    e.preventDefault();
    request("POST", "http://localhost:8080/api/v1/admin/roles", {
      name: state.name,
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          document.getElementById("newRole").value = "";
          setRoles([...roles, response.data]);

          document.getElementsByClassName("error")[0].textContent = "";
        }
      })
      .catch((error) => {
        console.error("Error during add new role:", error);

        setError(error.response.data.info);
      });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content-holder">
        <div className="content-grid-one">
          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Role użytkownika:</h3>
            </div>
            <div className="grid-c1-content">
              <span className="errorUpdate">{errorUpdate}</span>
              {roles.map((role) => (
                <ul>
                  <li className="roleLine" key={role.id}>
                    {editRoleId === role.id ? (
                      <textarea
                        className="updatedText"
                        type="text"
                        value={editedRoleName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      role.name
                    )}

                    <span className="spanButtonsRole">
                      {editRoleId === role.id ? (
                        [
                          <ButtonUpdate
                            onClick={() => handleUpdateRole(role.id)}
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
                            onClick={() => handleEditClick(role.id, role.name)}
                          />
                          <ButtonDelete
                            onClick={() => handleDeleteRole(role.id)}
                          />
                        </>
                      )}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Stwórz nową role: </h3>
            </div>
            <div className="grid-c1-content">
              <div className="loginItemContainer">
                <li className="loginItem">
                  <div className="containerFormLogin">
                    <span className="error">{error}</span>
                    <form onSubmit={handleAddNewRole}>
                      <div className="personalDataLogin">
                        <input
                          type="text"
                          id="newRole"
                          name="name"
                          placeholder="nazwa roli"
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
export default RolesAdmin;
