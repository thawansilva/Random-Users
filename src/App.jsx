import React, { useEffect, useState } from "react";
import OptionChoice from "./components/Options";
import ShowUsers from "./components/ShowUsers";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("https://randomuser.me/api/?results=10", { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        if (e.name === "AbortError") {
        } else {
          setIsPending(false);
          setError(e.message);
        }
      });
    return () => abortCont.abort();
  }, []);

  // Defining gender filter
  const filterUsers = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div className="app">
      <h1 className="title">Random Users</h1>
      <p className="subtitle">
        This is a application where you receive 10 random users and you can
        filter by gender.
      </p>
      <OptionChoice filterUsers={filterUsers} />
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {users && <ShowUsers users={users} filter={filter} />}
    </div>
  );
}
