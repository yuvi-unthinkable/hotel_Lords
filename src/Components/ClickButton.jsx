import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function Button(prop) {

  const navigate = useNavigate();

  const handleOnclick = (() => {
    if(prop.val==="Profile"){
      navigate("/profile")
    }
  })

  return (
    <div
      className={
        prop.inside ? "book-now-ClickButton aboutData" : "book-now-ClickButton"
      }
    >
      <input type="button" value={prop.val}  onClick={handleOnclick}/>
    </div>
  );
}
