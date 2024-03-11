import React from "react";
import "../../App.css";
import "./../users/user/User.css";
import SidebarUser from "./../users/user/SidebarUser";
import "./../users/admin/Sidebar.css";

function Lesson1() {
  return (
    <>
      <SidebarUser click={true} />
      <style>
        {`
        #lessonsId{
          border: 1px solid black; 
          background-color:#d33175;
          accent-color: black;

          #caretDown, #caretUp{
            display: block
        }
        
    

      
              
          `}
      </style>

      <div className="main-content-holder">
        <h1 className="titleAdmin"> LEKCJA 1 - LICZBY I POTĘGI</h1>
        <div className="content-grid-three"></div>
      </div>
    </>
  );
}

export default Lesson1;
