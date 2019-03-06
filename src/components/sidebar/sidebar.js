import React, { Component } from 'react';
import './sidebar.scss';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentDrp: false,
    };
    this.toggleRef = React.createRef();

    this.handleComponentDrp = this.handleComponentDrp.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }
  
  handleComponentDrp() {
    this.setState({ componentDrp: !this.state.componentDrp });
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickOutsideHandler(event) {
    if (this.state.componentDrp && !this.toggleRef.current.contains(event.target)) {
      this.setState({ componentDrp: false });
    } 
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    const routes = this.props.routes;
    const lightgray = '#F1F1F2';
    const sidebarSize = this.props.toggleSidebar ? 'main-menu ' : 'main-menu mainSmall';
    const conteinerSize = this.props.toggleSidebar ? 'containerS' : 'containerB';

    let componentDrpBig = 'none';
    let componentDrpSmall = 'none';
    if (this.state.componentDrp && this.props.toggleSidebar) {
      componentDrpBig = 'inline';
    } else if (this.state.componentDrp && !this.props.toggleSidebar) {
      componentDrpSmall = 'inline';
    }

    let componentIconToggle = '';
    if (routes.length > 0) {
      if (!this.state.componentDrp) {
        componentIconToggle = 'fa fa-angle-right faSidebar';
      } else {
        componentIconToggle = 'fa fa-angle-down faSidebar';
      }
    } else {
      componentIconToggle = 'fa';
    }

    return (
      <React.Fragment>
        <Router>
          
          {/* sidebar */}
          <nav className={sidebarSize}>
            <ul>
              <li className='sidemenu mt-4'>
                <NavLink exact to='/' activeStyle={{ backgroundColor: lightgray, width: '200px' }}>  
                  <i className='fa fa-home faSidebar' />
                  <span className='nav-text'>
                      Dashboard
                  </span>
                </NavLink>
              </li>

              <li className='sidemenu' onClick={this.handleComponentDrp} ref={this.toggleRef} >
                <NavLink to='#' > 
                  <i className='fa fa-list faSidebar' />
                  <span className='nav-text'>
                    Components
                  </span>
                  <i className={componentIconToggle} />
                </NavLink>
                
                {/* show this ul if toggleSidebar is true */}
                <ul style={{ display: componentDrpBig }}>
                  {routes.filter(elem => elem.showComponent)
                    .map((route, index) => <li key={index} className='drpCompDown'>
                      <NavLink to={route.path} onClick={e => e.stopPropagation()} activeStyle={{}}> 
                        <span className=''>
                          {route.name}
                        </span>
                      </NavLink>
                    </li>)}
                </ul>

                {/* show this ul if toggleSidebar is false */}
                <ul style={{ display: componentDrpSmall }} className='drpCompRight' onClick={e => e.stopPropagation()}>
                  {routes.filter(elem => elem.showComponent)
                    .map((route, index) => <NavLink key={index} to={route.path} onClick={e => e.stopPropagation()} activeStyle={{}}> 
                        <span className=''>
                          {route.name}
                        </span>
                      </NavLink>)}
                </ul>

              </li>
              <li className='sidemenu'>
                <NavLink to='/utilities' activeStyle={{ backgroundColor: lightgray, width: '200px' }}> 
                  <i className='fa fa-folder-open faSidebar' />
                  <span className='nav-text'>
                    Utilities
                  </span>
                </NavLink>
              </li>
              <li className='sidemenu'>
                <NavLink to='/documentation' activeStyle={{ backgroundColor: lightgray, width: '200px' }}> 
                  <i className='fa fa-info faSidebar' />
                  <span className='nav-text'>
                    Documentation
                  </span>
                </NavLink>
              </li>
            </ul>

            <ul className='logout'>
              <li>
              <NavLink to='/login' activeStyle={{ backgroundColor: lightgray, width: '200px' }}> 
                <i className='fa fa-power-off faSidebar' />
                <span className='nav-text'>
                  Log out
                </span>
              </NavLink>
              </li>  
            </ul>
          </nav>

          {/* container */}
          <main className={`${conteinerSize} mt-4`} >
            {routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} component={route.main}/>))}
            <div className='footer'></div>
          </main>
              
        </Router>
      </React.Fragment>
    );
  }
}

export default Sidebar;
