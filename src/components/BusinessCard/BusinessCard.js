import React from 'react';

import classes from './BusinessCard.css';
import InfoModal from './InfoModal/InfoModal';
import LeftContainer from './LeftContainer/LeftContainer';
import RightContainer from './RightContainer/RightContainer';
import Icon from '../../assets/icon.png';

const businessCard = (props) => (
  <div className={classes.BusinessCard}>
    <LeftContainer>
      {props.bcardInfo.map((info) => (
        <InfoModal 
          key={info.attrTitle}
          logo={info.logo}
          attrTitle={info.attrTitle}
          attrList={info.attrList} />
      ))}
    </LeftContainer>
    <RightContainer>
      <img src={Icon} alt='Jingyi by Ling'/>
      <h1>Jingyi Ding</h1>
      <h2>Developer & Learner</h2>
    </RightContainer>
  </div>
);

export default businessCard;