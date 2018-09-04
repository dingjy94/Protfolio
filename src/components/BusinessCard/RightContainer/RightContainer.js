import React from 'react';

import classes from './RightContainer.css';

const rightContanier = (props) => (
  <div className={classes.RightContainer}>
    {props.children}
  </div>
);

export default rightContanier;