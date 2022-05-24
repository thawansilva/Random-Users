import "./components.css";
import React from "react";

export default function OptionChoice({ filterUsers }) {
  return (
    <div className="buttons">
      <button onClick={filterUsers} id="">
        All
      </button>
      <button onClick={filterUsers} id="male">
        Male
      </button>
      <button onClick={filterUsers} id="female">
        Female
      </button>
    </div>
  );
}
