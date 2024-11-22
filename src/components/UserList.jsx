import React from "react";

const UserList = ({ users, onDelete }) => {
  if (users.length === 0) {
    return <li>No users found</li>;
  }

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>
          <span>
            {user.first_name} {user.last_name}
          </span>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </li>
      ))}
    </>
  );
};

export default UserList;
