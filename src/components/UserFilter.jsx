import React from "react";

const UserFilter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or surname"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default UserFilter;
