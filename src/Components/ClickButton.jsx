import React from "react";
import { Navigate } from "react-router";

export default function Button(prop) {

  // const hanndleClick = (() => {
  //   <Navigate to="/profile"/>
  // })
  return (
    <div
      className={
        prop.inside ? "book-now-ClickButton aboutData" : "book-now-ClickButton"
      }
    >
      <input type="button" value={prop.val}  />
    </div>
  );
}
