// ----- Model -----
import {FC, useState} from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

// ----- View -----
interface UserViewProps {
  user: UserData;
  onUpdateName: (name: string) => void;
}

const UserView: FC<UserViewProps> = ({ user, onUpdateName }) => {
  return (
      <div>
        <h2>User Details</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <input
            type="text"
            value={user.name}
            onChange={(e) => onUpdateName(e.target.value)}
        />
      </div>
  );
};

// ----- Presenter -----
interface UserPresenterProps {
  user: UserData;
  updateUser: (updatedUser: UserData) => void;
}

const UserPresenter: FC<UserPresenterProps> = ({ user, updateUser }) => {
  const handleUpdateName = (name: string) => {
    const updatedUser = { ...user, name };
    updateUser(updatedUser);
  };

  return <UserView user={user} onUpdateName={handleUpdateName} />;
};

// ----- Usage in parent component -----
const App: FC = () => {
  const initialUser: UserData = { id: 1, name: "John Doe", email: "john@example.com" };
  const [user, setUser] = useState(initialUser);

  const handleUpdateUser = (updatedUser: UserData) => {
    setUser(updatedUser);
  };

  return (
      <div>
        <UserPresenter user={user} updateUser={handleUpdateUser} />
      </div>
  );
};
export default App
