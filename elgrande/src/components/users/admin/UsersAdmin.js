import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./Sidebar.css";
import "./Admin.css";
import { request } from "../../../axios_helper.js";
import ButtonUpdate from "../../button/ButtonUpdate.js";
import ButtonDelete from "../../button/ButtonDelete.js";
import Sidebar from "./Sidebar";

function UsersAdmin() {
  const [errorUpdate, setErrorUpdate] = useState("");

  const [users, setUsers] = useState([]);
  const [state, setState] = useState({ name: "" });

  const [editUserId, setEditUserId] = useState(null);
  const [editRoleId, setEditRoleId] = useState(null);
  const [editedRoleName, setEditedRoleName] = useState("");

  // const onChangeHandler = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setState({ ...state, [name]: value });
  // };

  const handleEditClick = (id, name, roleId) => {
    setEditUserId(id);
    setEditedRoleName(name);
    setEditRoleId(roleId);
  };

  const handleInputChange = (event) => {
    const value = event.target.value.toUpperCase();
    setEditedRoleName(value);
  };

  const handleCancel = () => {
    setEditedRoleName("");
    setEditUserId(null);
    setEditRoleId(null);
    document.getElementsByClassName("errorUpdate")[0].textContent = "";
  };

  useEffect(() => {
    request("GET", "http://localhost:8080/api/v1/admin/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error during get all users:", error);
      });
  }, []);

  const handleDeleteUser = (id) => {
    request("DELETE", `http://localhost:8080/api/v1/admin/users/${id}`, {})
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setUsers(
            users.filter((user) => {
              return user.id !== id;
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

  const handleUpdateUserRole = (roleId, id) => {
    request(
      "PATCH",
      `http://localhost:8080/api/v1/admin/roles/${roleId}/users/${id}`,
      {
        name: editedRoleName,
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.name);
          document.getElementsByClassName("errorUpdate")[0].textContent = "";

          setUsers(
            users.map((user) => {
              if (user.id === id) {
                const updatedUserRoles = user.uerRoles.map((role) => {
                  if (role.id === roleId) {
                    return { ...role, name: editedRoleName };
                  }
                  return role;
                });

                return { ...user, uerRoles: updatedUserRoles };
              }
              return user;
            })
          );
          setEditedRoleName("");
          setEditUserId(null);
        }
      })
      .catch((error) => {
        console.error("Error during update:", error);

        setErrorUpdate(error.response.data.info);
      });
  };

  return (
    <>
      <Sidebar />
      <style>
        {`
        #usersAdminId{
          border: 1px solid black; 
          background-color:#d33175;
          accent-color: black;
        }      
          `}
      </style>
      <div className="main-content-holder">
        <h1 className="titleAdmin"> LISTA UŻYKOWNIKÓW</h1>

        <div className="content-grid-three">
          {users.map((user) => (
            <div className="grid-one-item grid-common grid-c1" key={user.id}>
              {/* <div className="grid-c-title">
                <h3 className="grid-c-title-text">Lista użytkowników:</h3>
              </div> */}
              <div className="grid-c1-content">
                <span className="errorUpdate">{errorUpdate}</span>

                <li className="userLine">
                  <ul>
                    {user.userRoles.map((role) => (
                      <li key={role.id}>
                        {editUserId === user.id && editRoleId === role.id ? (
                          <textarea
                            className="updatedTextUser"
                            type="text"
                            value={editedRoleName}
                            onChange={handleInputChange}
                          />
                        ) : (
                          <div>
                            <div>Email: {user.email}</div>
                            <div>Imię: {user.firstName}</div>
                            <div>Nazwisko: {user.lastName}</div>
                            User Roles:
                            {role.name}
                          </div>
                        )}

                        <span className="spanButtonsUser">
                          {editUserId === user.id ? (
                            [
                              <ButtonUpdate
                                onClick={() =>
                                  handleUpdateUserRole(user.id, role.id)
                                }
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
                                  handleEditClick(user.id, role.name, role.id)
                                }
                              />
                              <ButtonDelete
                                onClick={() => handleDeleteUser(user.id)}
                              />
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              </div>
            </div>
          ))}

          {/* <div className="grid-one-item grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">.... </h3>
            </div>
            <div className="grid-c1-content"></div>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default UsersAdmin;
