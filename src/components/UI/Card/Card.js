import React from 'react';

import classes from './Card.css';

const card = (props) => (
  <div className={classes.Card} onClick={props.clicked}>
    <img src={props.photo} alt={props.name} />
    <div className={classes.Container}>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
    </div>
  </div>
);

export default card;