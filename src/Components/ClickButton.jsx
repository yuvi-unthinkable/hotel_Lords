import React from "react";

export default function Button(prop) {
  return (
    <div
      className={
        prop.inside ? "book-now-ClickButton aboutData" : "book-now-ClickButton"
      }
    >
      <input type="button" value={prop.val} />
    </div>
  );
}
