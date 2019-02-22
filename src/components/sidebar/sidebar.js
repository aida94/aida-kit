import React, { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentsDrop: false,
    }

    this.handleCompDrop = this.handleCompDrop.bind(this);
  }
  
  handleCompDrop() {
    this.setState({componentsDrop: !this.state.componentsDrop});
  }

  render() {

    let sidebarSize = this.props.toggleSidebar? "main-menu mainSmall":"main-menu";
    let componentsDrop = this.state.componentsDrop? "inline" : "none";
    let componentList = [1];

    let compTog = '';
    if (componentList.length > 0){
      if(!this.state.componentsDrop){
        compTog = "fa fa-angle-right";
      }else {
        compTog = "fa fa-angle-down";
      }
    } else {
      compTog = "fa";
    }

    return (
      <nav className={sidebarSize}>

        <ul>
          <li className=" mt-5">
            <a href="1">
              <i className="fa fa-home fa-2x" />
              <span className="nav-text">
                  Dashboard
              </span>
            </a>
          </li>
          <li className="has-subnav" onClick={this.handleCompDrop}>
            <a href="#1">
              <i className="fa fa-list fa-2x" />
              <span className="nav-text">
                  Components
              </span>
              <i className={compTog} />
            </a>
            <ul style={{display: componentsDrop}}>
              {componentList.map((component,index) => <li key={index}>{component}</li>)}
            </ul>
          </li>
          <li className="has-subnav">
            <a href="#1">
              <i className="fa fa-folder-open fa-2x" />
              <span className="nav-text">
                  Pages
              </span>
            </a>
          </li>
          <li>
            <a href="#1">
              <i className="fa fa-info fa-2x" />
              <span className="nav-text">
                  Documentation
              </span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#1">
              <i className="fa fa-power-off fa-2x" />
              <span className="nav-text">
                  Logout
              </span>
            </a>
          </li>  
        </ul>
        
      </nav>
    );
  }
}

export default Sidebar;