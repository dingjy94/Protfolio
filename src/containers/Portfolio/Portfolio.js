import React, { Component } from 'react';

import classes from './Portfolio.css';
import Card from '../../components/UI/Card/Card';
import ChatRoomPhoto from '../../assets/chatRoom.png';
import Modal from '../../components/UI/Modal/Modal';
import PopupWindow from '../../components/UI/PopupWindow/PopupWindow';
import CardList from '../../components/UI/CardList/CardList';
import MemoryGame from '../../assets/MemoryGame.png';
import Typing from '../../assets/Type.png';
import TopBar from '../../components/UI/TopBar/TopBar';
import Aux from '../../hoc/Aux';
import SelfIntro from '../../components/SelfIntro/SelfIntro';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

class Portfolio extends Component {
  state = {
    selfIntroTitle: 'Hello, this is Jingyi, Nice to meet you!',
    selfIntro: 'I\'m a New Graduate student recently completed my Master degree. ' 
              + 'I love coding and enjoy creating & developing cool products. '
              + 'Also, I am always curious about new tech and keep learning to improve myself day by day.',
    bcardInfo: [
      {
        logo: 'fas fa-code',
        attrTitle: 'Skills',
        attrList: [
          {
            attrname: 'Language',
            info: 'Java, JavaScript(ES5/ES6), HTML5, CSS3, Some Scala and Python'
          },
          {
            attrname: 'Front-end',
            info: 'React, Redux, Bootstrap'
          },
          {
            attrname: 'Back-end',
            info: 'Node.js, Express.js, MySQL, MongoDB, Mocha.js'
          },
          {
            attrname: 'Cloud',
            info: 'AWS, GCP, Firebase, Heroku'
          },
          {
            attrname: 'Tools',
            info: 'Linux/maxOS, Github, Chrome, VS Code, Postman'
          },
        ]
      },
      {
        logo: 'fas fa-file',
        attrTitle: 'Experience',
        attrList: [
          {
            attrname: 'Working Experience',
            info: 'Software Engineer intern in one of the largest internet compaies in China.'
          },
          {
            attrname: 'Education',
            info: 'MS in Computer Engineering (University of Florida)'
          },
          {
            attrname: null,
            info: 'Bachelor in Information System and Information Management (China)'
          },
          {
            attrname: 'Certification',
            info: 'Nanodegree of Front-end Web Developer (Udacity)'
          },
        ]
      }
    ],
    webApplication: [
      {
        name: 'ChatRoom Application',
        description: 'Real-time chat room applicaiton built with Socket.io and Express.js',
        information: 'Real-time chat room application allows users to select rooms and chat with room members or share their locations.',
        techs: ['Socket.io', 'Express.js', 'HTML5', 'CSS3', 'JavaScript(jQuery)'],
        photo: ChatRoomPhoto,
        github: 'https://github.com/dingjy94/NodeChatApp',
        link: 'https://serene-sea-25990.herokuapp.com'
      }
    ],
    javaScript: [
      {
        name: 'Memory Game',
        description: 'The traditional card memory game. Click cards and find the matching pair.',
        information: 'Click cards and find the matching pair. After you find all 8 pairs, the game will finish. And also, you can click the refresh button to refresh the game (it will shuffle the cards). This is the course project of Udacity front-end development nenodegree.',
        techs: ['HTML5', 'CSS3', 'JavaScript(ES5)'],
        photo: MemoryGame,
        github: 'https://github.com/dingjy94/memory-game',
        link: 'http://jingyid.me/memory-game/'
      }
    ],
    ui: [
      {
        name: 'Typing Animation',
        description: 'Typying animation using pure CSS',
        information: 'Typing animation created by HTML & CSS, the one used on this cover page. Care the length of paragraphs.',
        techs: ['HTML5', 'CSS3'],
        photo: Typing,
        github: 'https://github.com/dingjy94/MyUI/tree/master/TypingAnimation',
        link: 'https://codepen.io/dingjy94/pen/PdpVeo'
      }
    ],
    selectedCard: null,
    showPop: false,
    contactShow: false
  }

  CardClickHandler = (app) => {
    console.log(app);
    this.setState({showPop: true, selectedCard: app});
  }

  PopCloseHandler = () => {
    this.setState({showPop: false});
  }

  ContactShowHandler = () => {
    this.setState({contactShow: true});
    console.log(this.state.contactShow);
  }

  ContactCloseHandler = () => {
    this.setState({contactShow: false});
  }

  render() {
    let attachedClasses = [classes.Portfolio, classes.Close];
    if (this.props.show) {
      attachedClasses = [classes.Portfolio];
    }
    let popupWindow = null;
    if (this.state.selectedCard) {
      popupWindow = <PopupWindow selected={this.state.selectedCard}/>
    }
    return (
      <Aux>
        <main className={attachedClasses.join(' ')}>
          <div >
            <TopBar contact={this.ContactShowHandler} />
            <Modal show={this.state.showPop} modalClosed={this.PopCloseHandler}>
              {popupWindow}
            </Modal>  
            <Modal show={this.state.contactShow} modalClosed={this.ContactCloseHandler}>
              <ContactInfo />
            </Modal> 
            <SelfIntro introTitle={this.state.selfIntroTitle} intro={this.state.selfIntro} />
            <div className={classes.BusinessCard}>
              <BusinessCard bcardInfo={this.state.bcardInfo} />
            </div>
            <CardList 
              title='Web Application'
              subtitle='Web applications with complete UI, fetch data from back-end server or third party API.' 
              >
              {this.state.webApplication.map((app) => (
                <li key={app.name}>
                  <Card
                    key={app.name}
                    photo={app.photo}
                    name={app.name}
                    description={app.description}
                    clicked={() => this.CardClickHandler(app)} />
                </li>
              ))}
            </CardList>
            <CardList
              title='JavaScript Playgroud'
              subtitle='JavaScript! JavaScript! Some interesting projects play with JS.'
            >
              {this.state.javaScript.map((app) => (
                <li key={app.name}>
                  <Card
                    key={app.name}
                    photo={app.photo}
                    name={app.name}
                    description={app.description}
                    clicked={() => this.CardClickHandler(app)} />
                </li>
              ))}
            </CardList>
            <CardList
              title='UI Collections'
              subtitle='My UI design & collections. Beauty of CSS.'
            >
              {this.state.ui.map((app) => (
                <li key={app.name}>
                  <Card
                    key={app.name}
                    photo={app.photo}
                    name={app.name}
                    description={app.description}
                    clicked={() => this.CardClickHandler(app)} />
                </li>
              ))}
            </CardList>
          </div>
        </main>
      </Aux>
    );
  }
}

export default Portfolio;