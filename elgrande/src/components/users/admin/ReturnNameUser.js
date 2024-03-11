import { useState } from "react";
import { request } from "../../../axios_helper";

export const fetchUserData = (email) => {
  return new Promise((resolve, reject) => {
    request("GET", `http://localhost:8080/api/v1/users/by-${email}`, {})
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem("role", response.data.userRoles[0].name);

          console.log(
            "user forstname from Return " +
              response.data.firstName +
              " " +
              response.data.email
          );
          const userData = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
          };

          resolve(userData);
        } else {
          throw new Error("Failed to fetch user data");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        reject(error);
      });
  });
};
