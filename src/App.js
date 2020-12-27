import React from 'react'
import "./App.css";
import { User } from "./User";

class App extends React.Component {
  constructor(props){
    
    super(props)
    console.log(this);
  }
  render() {
    return (
      <div className="wrapper">
        <User userInfo={{ name: "John", job: "Front-end Developer" }}></User>
      </div>
    );
  }
}

export default App;
