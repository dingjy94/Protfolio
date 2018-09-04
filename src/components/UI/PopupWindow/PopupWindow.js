import React from 'react';

import classes from './PopupWindow.css';
import Button from '../Button/Button';

const popupWindow = (props) => (
  <div className={classes.Window}>
    <div className={classes.TitleLine}>
      <div>
        <h2>{props.selected.name}</h2>
      </div>
      <div className={classes.Link}>
        <Button btnType='Black' link={props.selected.github}>
          <i className="fab fa-github"></i> Github Repository
        </Button>
        <Button btnType='White' link={props.selected.link}>
          <i className="fas fa-link"></i> Website/Demo
        </Button>
      </div>
    </div>

    <div className={classes.Information}>
      <div>
        <img src={props.selected.photo} alt="Avatar" />
      </div>

      <div className={classes.Overview}>
        <div className={classes.Description}>
          <p>{props.selected.information}</p>
        </div>
        <div className={classes.Tech}>
          <p>Tech Stack:</p>
          <ul>
            {props.selected.techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default popupWindow;