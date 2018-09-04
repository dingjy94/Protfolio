import React from 'react';

import classes from './CardList.css';
import Aux from '../../../hoc/Aux';

const cardList = (props) => (
  <Aux>
    <h3 className={classes.title}>{props.title}</h3>
    <p className={classes.subtitle}>{props.subtitle}</p>
    <ul className={classes.CardList}>
      {props.children}
    </ul>
    <hr />
  </Aux>
);

export default cardList;