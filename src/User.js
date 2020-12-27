export function User(props) {
  return (
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src="https://semantic-ui.com/images/avatar2/large/matthew.png" />
        </div>
        <div className="content">
          <div className="header">{props.userInfo.name}</div>
          <div className="meta">
            <a>{props.userInfo.job}</a>
          </div>
          <div className="description">
            Matthew is an interior designer living in New York.
            </div>
        </div>
       
      
      </div>
    </div>
  );
}
