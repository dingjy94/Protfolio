import React from 'react';

import classes from './ContactInfo.css';

const contactInfo = (props) => (
  <div className={classes.ContactInfo}>
    <div>
      <h1>Current Status:</h1>
      <p>
        I'm currently located in California Bay Area and actively seeking an opportunity to
        work as a Software/Front-end developer. <br />
        <br /> 
        My ideal target is a Front-end or Full-stack 
        developer job, but I also open to other Software Developer roles. Also, I'm open to both full-time
        and internship position. <br/> 
        <br/>
        Also, I'm an international student, so that I may need visa sponsorship in the future (Currently first year of OPT).<br/>
        <br/>
        If you're interested, please email <a href='mailto:jingyi.ding23@gmail.com'>jingyi.ding23@gmail.com</a> and ~let's talk.
      </p>
    </div>
    <h2>Social Network</h2>
    <div className={classes.Social}>
      <a className={classes.Linkedin} target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/jingyiding/'>
        <i className="fab fa-linkedin-in"></i>  LINKEDIN</a>
      <a className={classes.Github} target="_blank" rel="noopener noreferrer" href='https://github.com/dingjy94'>
        <i className="fab fa-github"></i>  GITHUB</a>
      <a className={classes.Facebook} target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/jingyi.ding.14'>
        <i className="fab fa-facebook-f"></i>  FACEBOOK</a>
    </div>
  </div>
);

export default contactInfo;