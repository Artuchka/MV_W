// Model
import {useEffect, useState} from "react";

interface User {
  id: number;
  name: string;
}

// ViewModel
const UserViewModel = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulating API call to fetch users
    const fetchUsers = async () => {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const deleteUser = (userId: number) => {
    // Simulating deletion of a user
    setUsers(users.filter((user) => user.id !== userId));
  };

  return { users, deleteUser };
};

// View
const UserList = () => {
  const { users, deleteUser } = UserViewModel();

  return (
      <ul>
        {users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
        ))}
      </ul>
  );
};

export default UserList
