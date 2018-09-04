import React from 'react';

import classes from './SelfIntro.css';

const selfIntro = (props) => (
  <div className={classes.SelfIntro}>
    <h1>{props.introTitle}</h1>
    <p>{props.intro}</p>
    <p>Let me introduce a litte bit more about myself and my works ...</p>
  </div>
);

export default selfIntro;