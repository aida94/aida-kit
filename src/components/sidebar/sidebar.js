import React, { Component } from 'react';
import './sidebar.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Dashboard from './../dashboard/dashboard';
import Utilities from '../utilities/utilities';
import Documentation from './../documentation/documentation';

import Button from './../components/buttons/button';
import Cards from './../components/cards/cards';
import Alerts from '../components/alerts/alerts';


const routes = [
  {
    path: "/",
    exact: true,
    name: "dashboard",
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Dashboard />
  },
  {
    path: "/utilities",
    exact: false,
    name: "utilities",
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Utilities />
  },
  {
    path: "/documentation",
    exact: false,
    name: "documentation",
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Documentation />
  },
  {
    path: "/button",
    exact: false,
    name: "button",
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Button/>
  },
  {
    path: "/cards",
    exact: false,
    name: "cards",
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Cards />
  },
  {
    path: "/alerts",
    exact: false,
    name: "alert",
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Alerts />
  },
];

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

    let sidebarSize = this.props.toggleSidebar? "main-menu ":"main-menu mainSmall";
    let conteinerSize = this.props.toggleSidebar? "containerS":"containerB";

    let compDrp;
    if(this.state.componentsDrop && this.props.toggleSidebar){
      compDrp = "inline";
    }else {
      compDrp = "none"
    }

    let compTog = '';
    if (routes.length > 0){
      if(!this.state.componentsDrop){
        compTog = "fa fa-angle-right";
      }else {
        compTog = "fa fa-angle-down";
      }
    } else {
      compTog = "fa";
    }

    return (
      <React.Fragment>
        <Router>
          <nav className={sidebarSize}>
            <ul>
              <li className="sidemenu mt-4">
                <NavLink exact to='/' activeStyle={{backgroundColor: '#999', color: 'white' }}>  
                  <i className="fa fa-home fa-2x" />
                  <span className="nav-text">
                      Dashboard
                  </span>
                </NavLink>
              </li>
              <li className="sidemenu" onClick={this.handleCompDrop}>

                <NavLink to={this.props.toggleSidebar ? '#' : '/pages'} activeStyle={{backgroundColor: '#999', color: 'white' }}> 
                  <i className="fa fa-list fa-2x" />
                  <span className="nav-text">
                    Components
                  </span>
                  <i className={compTog} />
                </NavLink>
                <ul style={{display: compDrp }}>

                  {routes.filter(elem => elem.showComponent)
                    .map((route, index) => 
                      <li key={index} className="drpComp">
                        <NavLink to={route.path} onClick={(e) => e.stopPropagation()} activeStyle={{backgroundColor: '#999', color: 'white' }}> 
                          <span className="">
                            {route.name}
                          </span>

                        </NavLink>
                      </li>)}

                </ul>
              </li>
              <li className="sidemenu">
                <NavLink to='/utilities' activeStyle={{backgroundColor: '#999', color: 'white' }}> 
                  <i className="fa fa-folder-open fa-2x" />
                  <span className="nav-text">
                    Utilities
                  </span>
                </NavLink>
              </li>
              <li className="sidemenu">
                <NavLink to='/documentation' activeStyle={{backgroundColor: '#999', color: 'white' }}> 
                  <i className="fa fa-info fa-2x" />
                  <span className="nav-text">
                    Documentation
                  </span>
                </NavLink>
              </li>
            </ul>

            <ul className="logout">
              <li>
              <NavLink to='/login' activeStyle={{backgroundColor: '#999', color: 'white' }}> 
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text">
                  Log out
                </span>
              </NavLink>
              </li>  
            </ul>
          </nav>

          <main className={`${conteinerSize} mt-4`} >
            {routes.map((route, index) => ( <Route key={index} path={route.path} exact={route.exact} component={route.main}/> ))}
            <div className="footer" ></div>
          </main>
              
        </Router>
      </React.Fragment>
    );
  }
}

export default Sidebar;