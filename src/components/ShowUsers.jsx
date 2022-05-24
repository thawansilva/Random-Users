import "./components.css";
import React from "react";

export default function ShowUsers({ users, filter }) {
  const listUsers = users
    .filter((user) => {
      // Gender check
      return filter ? user.gender == filter : user;
    })
    .map((user) => {
      return (
        <div className="user-box" key={user.login.username}>
          <img src={user.picture.large} alt="user picture" />
          <p>
            My name is {user.name.first} {user.name.last}
          </p>
          <p>Gender: {user.gender}</p>
          <p>I am {user.dob.age} years old</p>
        </div>
      );
    });
  return (
    <div className="container">
      <div className="grid">{listUsers}</div>
    </div>
  );
}