import React, { Component } from 'react';
import './container.scss';

class Container extends Component {

  render() {
    let conteinerSize = this.props.toggleSidebar? "containerB":"containerS";

    return (

        <main className={conteinerSize} >
            container<br/>
            container<br/>
            container<br/>
        </main>
    );
  }
}

export default Container;