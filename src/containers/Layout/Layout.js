import React, { Component } from 'react';

import Cover from '../../components/Cover/Cover';
import Aux from '../../hoc/Aux';
import Portfolio from '../Portfolio/Portfolio';

class Layout extends Component {
  state = {
    coverShow: true
  }

  coverOpen = () => {
    if (this.state.coverShow === false) {
      this.setState({ coverShow: true });
    }
  }

  coverClose = () => {
    if (this.state.coverShow === true) {
      this.setState({ coverShow: false });
    }
  }

  render() {
    return (
      <Aux>
        <Cover 
          coverShow={this.state.coverShow}
          coverTrigger={() => this.coverClose()} />

        <Portfolio 
          show={this.state.coverShow}
          coverOpen={() => this.coverOpen()} />
      </Aux>
    );
  }
}

export default Layout;