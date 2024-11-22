import React, { useState } from "react";
import useUsers from "./hooks/useUsers";
import UserList from "./components/UserList";
import UserFilter from "./components/UserFilter";
import "./styles.css";

function App() {
  const { users, deleteUser, loading } = useUsers();
  const [filter, setFilter] = useState(""); // Фільтр для пошуку

  // Фільтрація користувачів за first_name та last_name
  const filteredUsers = users.filter(
    (user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(filter.toLowerCase()) // Перевіряємо наявність фільтра в ім'ї або прізвищі
  );

  return (
    <div className="App">
      <h2>Users from API:</h2>
      <UserFilter filter={filter} onChange={setFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <UserList users={filteredUsers} onDelete={deleteUser} />
        </ul>
      )}
    </div>
  );
}

export default App;
