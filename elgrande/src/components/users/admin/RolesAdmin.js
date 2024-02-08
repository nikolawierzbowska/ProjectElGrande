// import React from "react";
// import "../../../App.css";
// import "./Sidebar.css";
// import "./Admin.css";
// import Sidebar from "./Sidebar";

// function RolesAdmin() {
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     request(
//       "GET",
//       "http://localhost:8080/api/v1/courses/0b20d02b-42d9-4328-9254-e91421e356ac/opinions"
//     )
//       .then((response) => {
//         setOpinion(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Error during get all opinions:", error);
//       });
//   }, []);
//   return (
//     <>
//       <Sidebar />
//       <div className="main-content-holder">
//         <div className="content-grid-one">
//           <div className="grid-one-item grid-common grid-c1">
//             <div className="grid-c-title">
//               <h3 className="grid-c-title-text">Role użytkownika </h3>
//             </div>
//             <div className="grid-c1-content">
//               <p> Istniejące role: </p>
//               <li>1</li>
//               <li>2</li>
//             </div>
//           </div>

//           <div className="grid-one-item grid-common grid-c1">
//             <div className="grid-c-title">
//               <h3 className="grid-c-title-text">Zarządzaj rolami </h3>
//             </div>
//             <div className="grid-c1-content">
//               <p> Istniejące role: </p>
//               <li>1</li>
//               <li>2</li>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RolesAdmin;
