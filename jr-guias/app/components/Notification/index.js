import React from "react";


function Notification({ show, message }) {
  return (
   
      <div>
        <div id="snackbar" className={show ? "animation-in" : "not-show"}>
          {message}
        </div>
      </div>
   
  );
}

export default Notification;

