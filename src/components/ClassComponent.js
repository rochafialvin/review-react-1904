import { Component } from "react";
import axios from "axios";

class ClassComponent extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.fetchUsers();
    }, 2000);
  }

  fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: res.data });
  };

  render() {
    if (!this.state.users.length) {
      return <h1>Loading ...</h1>;
    }

    return (
      <div
        style={{
          flex: 1,
          backgroundColor: "cornsilk",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Class Component</h1>
        <h3>User list</h3>
        {this.state.users.map((user) => (
          <p>{user.name} </p>
        ))}
      </div>
    );
  }
}

export default ClassComponent;
