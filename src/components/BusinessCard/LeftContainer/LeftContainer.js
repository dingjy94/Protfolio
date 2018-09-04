import React from 'react';

import classes from './LeftContainer.css';

const leftContainer = (props) => (
  <div className={classes.LeftContainer}>
    {props.children}
  </div>
);

export default leftContainer;