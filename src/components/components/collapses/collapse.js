import React, { Component } from 'react';
import './collapses.scss';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false };

    this.handleCollapse = this.handleCollapse.bind(this);  
  }

  handleCollapse() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const collapseContainer = this.state.collapse ? 'd-block' : 'd-none';
    let iconToggle = this.props.icon;

    if (this.state.collapse) {
      iconToggle += this.props.iconCollapse;
    } else {
      iconToggle += this.props.iconNotCollapse;
    }


    return (

      <div className={this.props.card}>
        <div className={this.props.header} onClick={this.handleCollapse}>
        <span><i className={iconToggle}></i></span>  {this.props.text}
        </div>
        <div className={`${collapseContainer} ${this.props.container}`}>
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default Collapse;
