import React from "react";

export function User(props) {
  return (
    <div className="ui link cards">
      <div className="card">
         <div className="image">
          <img src={props.userInfo.image} alt="slika" href="#" />
        </div>
        <div className="content">
          <div className="header">{props.userInfo.origin.name}</div>
          <div className="meta">
            <a>Status: {props.userInfo.status}</a>
          </div>
          <div className="description">
            Location: {props.userInfo.location.name}
          </div>
        </div> 
      </div>
    </div>
  );
}
