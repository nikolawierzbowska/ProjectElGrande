import { request } from "../../../axios_helper";

export const fetchUserData = (email) => {
  request("GET", `http://localhost:8080/api/v1/users/by-${email}`, {})
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);

        window.localStorage.setItem("name", response.data.firstName);
        window.localStorage.setItem("role", response.data.userRoles[0].name);
        if (window.localStorage.getItem("role") === "ADMIN") {
          window.location.href = "/admin-profile";
        } else {
          window.location.href = "/user-profile";
        }
      } else {
        throw new Error("Failed to fetch user data");
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};
