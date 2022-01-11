import { Component } from "react";

class AppClass extends Component {
  state = {
    day: "Sunday",
    year: 2021,
    isLoading: false,
    isStorageChecked: false,
    number: 1,
  };

  // running hanya satu kali setelah render pertama
  // componentDidMount() {
  //   console.log("Component Did Mount");
  // }

  // running setiap ada state yang berubah
  componentDidUpdate() {
    console.log("Component Did Update");
  }

  onChangeClick = () => {
    this.setState({ day: "Sunday" });
  };

  onUpdateClick = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 2 };
    });
  };

  render() {
    console.log("Render Class");
    return (
      <div>
        <h1>App Class Component</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.onUpdateClick}>Update Class</button>
      </div>
    );
  }
}

export default AppClass;
