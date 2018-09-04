import React from 'react';

import classes from './Button.css';
import Aux from '../../../hoc/Aux';

const button = (props) => {
  let button = <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType], classes[props.btnSize]].join(' ')}
    onClick={props.clicked}>{props.children}</button>;
  if (props.link) {
    button = <a
      target="_blank" rel="noopener noreferrer"
      className={[classes.Button, classes[props.btnType], classes[props.btnSize]].join(' ')}
      href={props.link}>{props.children}</a>
  }
  return (
    <Aux>
      {button}
    </Aux>
  );
};

export default button;