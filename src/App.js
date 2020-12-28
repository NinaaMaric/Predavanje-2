import React from 'react'
import "./App.css";
import { User } from "./User";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: {
        name: 'John',
        job: 'Developer'
      }
    }
    fetch('https://rickandmortyapi.com/api/character')
    .then((response)=>{
      return response.json()
    })
    .then((response)=>{
      console.log(response.results);
      let userInfo = response.results[3];
      this.setState({userInfo})
    })
    .catch(function(error){
      console.log(error);
    })
    
  }
  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <User userInfo={this.state.userInfo}></User>
      </div>
    );
  }
}

export default App;
