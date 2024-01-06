import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card" style={{ width: '15rem', backgroundImage: `url(${props.image})` }} id={props.styleCMD}>
      <div className="card-body">
        <strong className="card-title">{props.uc} UC</strong>
        <p className="card-text">{props.azn} AZN</p>
      </div>
    </div>
  );
}

export default Card;
