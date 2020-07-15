import React from "react";

const PlayerSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img
              src="soccer.jpg"
              alt="Soccer"
            />
            <span className="card-title">
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className="card-content">
            <p>
              Phone : {props.player.phone} - Email : {props.player.email}
            </p>
            <p>
              Speed : {props.player.speed} - Strength : {props.player.strength}
            </p>
            <p>
              Techniques : {props.player.techniques} - Endurance :
              {props.player.endurance}
            </p>
            <p>
              Ability : {props.player.ability} - Tactical :
              {props.player.tactical}
            </p>
          </div>
          <div className="card-action">Team : {props.player.team}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
