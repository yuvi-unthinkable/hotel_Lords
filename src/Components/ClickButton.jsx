import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function Button({val, inside, datePass, dateOnClick, backButton }) {

  const navigate = useNavigate();

  const handleOnclick = (() => {
    if(val==="Profile"){
      navigate("/profile")
    }
  })

  return (
    <div
      className={
        inside ? "book-now-ClickButton aboutData" : "book-now-ClickButton"
      }
    >
      <input type="button" typeof="submit" value={val}  onClick={datePass ? dateOnClick : handleOnclick}/>
    </div>
  );
}
