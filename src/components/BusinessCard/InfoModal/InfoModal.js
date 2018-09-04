import React from 'react';

import classes from './InfoModal.css';

const InfoModal = (props) => (
  <div className={classes.InfoModal}>
    <div className={classes.LogoField}>
      <i className={props.logo}></i>
      <p>{props.attrTitle}</p>
    </div>
    <ul>
      {props.attrList.map((attr) => (
        <li key={attr.attrname}>
          <p><strong>{attr.attrname}</strong></p>
          <p>{attr.info}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default InfoModal;