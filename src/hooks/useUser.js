import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        if (response.data && response.data.data) {
          setUsers(response.data.data);
        } else {
          console.error("No users found in the API response");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const deleteUser = (id) => {
    if (!id) {
      console.error("Invalid user ID");
      return;
    }

    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return { users, deleteUser, loading };
};

export default useUsers;
