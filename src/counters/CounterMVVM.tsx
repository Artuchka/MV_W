import {useEffect, useState} from "react";



// ----- Model -----
interface User {
  id: number;
  name: string;
}

// ----- ViewModel -----
const UserViewModel = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulating API call to fetch users
    const fetchUsers = async () => {
      // const response = await fetch('https://api.example.com/users');
      // const data = await response.json();
      const data = [
        {id: 1, name: "first user"},
        {id: 2, name: "second user"},
        {id: 3, name: "third user"},
        {id: 4, name: "german spy"},
        {id: 5, name: "police man"},
      ]
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

// ----- View -----
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
