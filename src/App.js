import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleSidebar: false,
    }

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange(){
    this.setState({toggleSidebar: !this.state.toggleSidebar});
  }

  render() {

    return (
      <div className="App">

        <Navbar toggleSidebar={this.state.toggleSidebar} onChange={this.handleToggleChange}/>
        <Sidebar toggleSidebar={this.state.toggleSidebar}/>

      </div>
    );
  }
}

export default App;
