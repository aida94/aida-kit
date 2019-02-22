import React, { Component } from 'react';
import './navbar.scss';
import userImage from './../../images/user.jfif';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchIcon: false,
      userProfile:false
    }

    this.handleToggleBar = this.handleToggleBar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUserProfile = this.handleUserProfile.bind(this)
  }

  handleToggleBar(){
    this.props.onChange();
  }

  handleSearch(){
    this.setState({searchIcon: !this.state.searchIcon});
  }

  handleUserProfile () {
    this.setState({ userProfile: !this.state.userProfile})
  }


  render() {

    let toggleIcon = this.props.toggleSidebar? "fa fa-times togBtn":"fa fa-bars togBtn";
    let searchIcon = this.state.searchIcon? "visible" : "hidden";
    let userProfile = this.state.userProfile? "inline" : "none";

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="tobar">
        <i className={toggleIcon} onClick={this.handleToggleBar} />
        <a className="navbar-brand" href="#11"> Navbar</a>

        <div className="navbar ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item d-none d-lg-block">
            <form className="form-inline my-2 my-lg-0">
              <input className="inp" type="search" placeholder="Search" aria-label="Search" style={{visibility: searchIcon}}/>
              <i className='fa fa-search searchBtn' onClick={this.handleSearch} />
              {/* <button className="bttn" type="submit"></button> */}
            </form>
            </li>
            <li className="nav-item d-none d-lg-block">
              <img className="" style={{width: 40}} src={userImage} alt="user"/>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle dropbtn" href="#11" onClick={this.handleUserProfile }>
                User Name
              </a>
              <div className="dropdown-content" style={{display:userProfile}}>
                <a className="" href="#11">My profile</a>
                <a className="" href="#11">Calendar</a>
                <a className="" href="#11">Notifications</a>
                <a className="" href="#11">Inbox</a>
                <div className="dropdown-divider"></div>
                <a className="" href="#11">Log out</a>
              </div>
            </li>

        
          </ul>
        </div>
      </nav>

    );
  }
}

export default Navbar;