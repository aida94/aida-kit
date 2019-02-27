import React, { Component } from 'react';
import './sidebar.scss';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DataComponent  from './../data.js';


const routes = DataComponent;

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentsDrop: false,
    }
    this.toggleRef = React.createRef();

    this.handleCompDrop = this.handleCompDrop.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }
  
  handleCompDrop() {
    this.setState({componentsDrop: !this.state.componentsDrop});
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickOutsideHandler(event) {
    if (this.state.componentsDrop && !this.toggleRef.current.contains(event.target) ){
      this.setState({ componentsDrop: false });
    } 
  }

  render() {
    
    let sidebarSize = this.props.toggleSidebar? "main-menu ":"main-menu mainSmall";
    let conteinerSize = this.props.toggleSidebar? "containerS":"containerB";

    let compDrp = 'none';
    let aida = 'none';
    if(this.state.componentsDrop && this.props.toggleSidebar){
      compDrp = "inline";
    } else if(this.state.componentsDrop && !this.props.toggleSidebar){
      aida = "inline"
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
                <NavLink exact to='/' activeStyle={{backgroundColor: '#999', color: 'white',width: '200px' }}>  
                  <i className="fa fa-home fa-2x" />
                  <span className="nav-text">
                      Dashboard
                  </span>
                </NavLink>
              </li>

              <li className="sidemenu" onClick={this.handleCompDrop} ref={this.toggleRef} >
                <NavLink to='alerts' > 
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
                        <NavLink to={route.path} onClick={(e) => e.stopPropagation()} activeStyle={{}}> 
                          <span className="">
                            {route.name}
                          </span>
                        </NavLink>
                      </li>)}
                </ul>

                <ul style={{display: aida}} className="drop-content" onClick={(e) => e.stopPropagation()}>
                  {routes.filter(elem => elem.showComponent)
                    .map((route, index) => 
                      <NavLink key={index} to={route.path} onClick={(e) => e.stopPropagation()} activeStyle={{}}> 
                        <span className="">
                          {route.name}
                        </span>
                      </NavLink>
                    )}
                </ul>

              </li>
              <li className="sidemenu">
                <NavLink to='/utilities' activeStyle={{backgroundColor: '#999', color: 'white',width: '200px' }}> 
                  <i className="fa fa-folder-open fa-2x" />
                  <span className="nav-text">
                    Utilities
                  </span>
                </NavLink>
              </li>
              <li className="sidemenu">
                <NavLink to='/documentation' activeStyle={{backgroundColor: '#999', color: 'white',width: '200px' }}> 
                  <i className="fa fa-info fa-2x" />
                  <span className="nav-text">
                    Documentation
                  </span>
                </NavLink>
              </li>
            </ul>

            <ul className="logout">
              <li>
              <NavLink to='/login' activeStyle={{backgroundColor: '#999', color: 'white', width: '200px' }}> 
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