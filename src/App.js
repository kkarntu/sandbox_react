import React, { useState } from "react";
import { getUsers, deleteUser } from "./api.Methods";
import UserList from "../src/components/UserList";
import FilterBox from "../src/components/FilterBox";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = () => {
    getUsers().then((data) => {
      setUsers(data.data);
    });
  };

  const handleDelete = (userId) => {
    deleteUser(userId).then(() => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    });
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <button onClick={fetchUsers} className="fetch-button">
        Load Users
      </button>
      <FilterBox filter={filter} onFilterChange={setFilter} />
      <UserList users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
