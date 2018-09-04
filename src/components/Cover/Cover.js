import React from 'react';

import classes from './Cover.css';
import Typing from './Typing/Typing';
import Button from '../UI/Button/Button';

const cover = (props) => (
  <div className={props.coverShow ? 
    [classes.Cover, classes.Open].join(' ') : [classes.Cover, classes.Close].join(' ')}>
    
    <div style={{paddingLeft: '25px'}}>
      <Typing />
      <div className={classes.btnContainer}>
        <Button clicked={props.coverTrigger} 
                btnType='White' 
                btnSize='Large'>Know more about my Skills & Products!</Button>
      </div>
    </div>
  </div>
);

export default cover;