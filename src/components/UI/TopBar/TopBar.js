import React from 'react';

import Button from '../Button/Button';
import classes from './TopBar.css';

const topBar = (props) => (
  <header className={classes.TopBar}>
    <Button btnType='WhiteBorder' clicked={props.contact}>
      Contact Me
    </Button>
  </header>
);

export default topBar;