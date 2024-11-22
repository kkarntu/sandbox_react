import React from "react";

const UserFilter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default UserFilter;
