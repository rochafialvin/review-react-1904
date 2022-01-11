import { useEffect, useState } from "react";
import axios from "axios";

function FunctionComponent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 2000);
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };

  if (!users.length) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "antiquewhite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Function Component</h1>;<h3>User list</h3>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
}

export default FunctionComponent;
