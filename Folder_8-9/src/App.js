import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import "./App.css";
import UserList from "./components/User/UserList";

const App = () => {
  const [Ul, sUl] = useState([]);
  const onAddUserHandler = (uName, iAge) => {
    sUl((prevL) => {
      return [...prevL, {name: uName, age: iAge, id: Math.random().toString()}]
    });
  };
  return (
    <>
      <AddUser onAddUser={onAddUserHandler}/>
      <UserList users={Ul}/>
    </> // This is fragments
    // Fragments allow us to write cleaner code and helps adding unnecessary html tags.

  );
};

export default App;
