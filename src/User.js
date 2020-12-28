import React from "react";

export function User(props) {
  function newPage(){
    window.open( props.userInfo.url, '_blank')
  }
  return (
    <div className="ui link cards" onClick={newPage}>
      <div className="card">
        <div className="image">
          <img src={props.userInfo.image} alt="slika" href="#" />
        </div>
        <div className="content">
          <div className="header">{props.userInfo.name}</div>
          <div className="meta">
            <a>Status: {props.userInfo.status}</a>
          </div>
          <div className="description">Species: {props.userInfo.species}</div>
        </div>
      </div>
    </div>
  );
}
