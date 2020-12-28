import React from "react";
import "./App.css";
import { User } from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      userInfo: {
        name: "John",
        job: "Developer",
      },
      allUsers: [],
      loading: true,
      counter: 0,
    };
    this.setCounter = this.setCounter.bind(this);
    this.setCounterDecrement = this.setCounterDecrement.bind(this);
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        let allUsers = response.results;
        this.setState({ allUsers, loading: false });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // componentDidUpdate(prevState, prevProps){
  //   console.log(prevProps, prevState);
  //   if(prevState.name == this.state.name){
  //     console.log("to je too");
  //   }
  // }

  usersToShow() {
    let counter = this.state.counter;
    let allUsers = this.state.allUsers.slice(counter, counter + 1, counter - 1);
    // let userInput = this.state.userInput
    // let allUsers = this.state.allUsers.filter((el)=> el.name.indexOf(userInput) >= 0)
    return allUsers.map((el, id) => {
      return <User key={id} userInfo={el} />;
    });
  }

  setCounterDecrement() {
    let counterr =
      this.state.allUsers.length > this.state.counter - 1
        ? this.state.counter - 1
        : 0;
    this.setState({ counter: counterr });
    console.log(counterr);
  }

  setCounter() {
    let counter =
      this.state.allUsers.length > this.state.counter + 1
        ? this.state.counter + 1
        : 0;
    this.setState({ counter });
    console.log(counter);
  }

  handleSearchChange = (e) => {
    console.log("tu sam, mijenjam se", e.target.value);
    let userInput = e.target.value;
    this.setState({ userInput });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div className="ui segment" style={{ height: "100vh" }}>
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      );
    }
    return (
      <div className="wrapper">
        <button
          className="ui left labeled icon button"
          onClick={this.setCounterDecrement}
        >
          <i className="left arrow icon"></i>
          Prev
        </button>
        <button
          className="ui right labeled icon button"
          onClick={this.setCounter}
        >
          <i className="right arrow icon"></i>
          Next
        </button>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            onChange={this.handleSearchChange}
          />
          <i className="search icon"></i>
        </div>
        <div>{this.usersToShow()}</div>
      </div>
    );
  }
}

export default App;
