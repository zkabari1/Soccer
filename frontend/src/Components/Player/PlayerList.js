import React from "react";

const PlayerList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players</h4>
        </li>
        {props.players.map((item) => (
          <a
            key={item._id}
            href="#!"
            className="collection-item"
            onClick={props.updateCurrentPlayer.bind(this, item)}
          >
            {item.firstName} {item.lastName} 
          </a>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
