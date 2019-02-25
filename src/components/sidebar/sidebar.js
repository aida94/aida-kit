import React, { Component } from 'react';
import './sidebar.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    name: "utilities",
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Utilities />
  },
  {
    path: "/documentation",
    name: "documentation",
    icon: 'fa fa-user',
    showComponent: false,
    main: () => <Documentation />
  },
  {
    path: "/button",
    name: "button",
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Button/>
  },
  {
    path: "/cards",
    name: "cards",
    icon: 'fa fa-user',
    showComponent: true,
    main: () => <Cards />
  },
  {
    path: "/alerts",
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

    let sidebarSize = this.props.toggleSidebar? "main-menu mainSmall":"main-menu";
    let conteinerSize = this.props.toggleSidebar? "containerB":"containerS";

    let compDrp;
    if(this.state.componentsDrop && !this.props.toggleSidebar){
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
              <li className="sidemenu mt-2">
                <Link to='/'> <i className="fa fa-home fa-2x" />
                  <span className="nav-text">
                      Dashboard
                  </span>
                </Link>
              </li>
              <li className="sidemenu" onClick={this.handleCompDrop}>

                <Link to={this.props.toggleSidebar ? '/pages' : '#'}>
                  <i className="fa fa-list fa-2x" />
                  <span className="nav-text">
                    Components
                  </span>
                  <i className={compTog} />
                </Link>
                <ul style={{display: compDrp }}>

                  {routes.filter(elem => elem.showComponent)
                    .map((route, index) => 
                      <li key={index} className="drpComp">
                        <Link to={route.path} onClick={(e) => e.stopPropagation()}>
                          <span className="">
                            {route.name}
                          </span>

                        </Link>
                      </li>)}

                </ul>
              </li>
              <li className="sidemenu">
                <Link to='/utilities'> 
                  <i className="fa fa-folder-open fa-2x" />
                  <span className="nav-text">
                    Utilities
                  </span>
                </Link>
              </li>
              <li className="sidemenu">
                <Link to='/documentation'> 
                  <i className="fa fa-info fa-2x" />
                  <span className="nav-text">
                    Documentation
                  </span>
                </Link>
              </li>
            </ul>

            <ul className="logout">
              <li>
              <Link to='/login'> 
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text">
                  Log out
                </span>
              </Link>
              </li>  
            </ul>
          </nav>

          <main className={`${conteinerSize} mt-4`} >
            {routes.map((route, index) => ( <Route key={index} path={route.path} exact={route.exact} component={route.main}/> ))}
          </main>
              
        </Router>
      </React.Fragment>
    );
  }
}

export default Sidebar;