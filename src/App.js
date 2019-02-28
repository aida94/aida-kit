import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import CompData from './CompData';

const routeData = CompData;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSidebar: false,
    };

    this.handleToggleChange = this.handleToggleChange.bind(this);
  }

  handleToggleChange() {
    this.setState({ toggleSidebar: !this.state.toggleSidebar });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
  
          <Navbar toggleSidebar={this.state.toggleSidebar} onChange={this.handleToggleChange} routes={routeData}/>
          <Sidebar toggleSidebar={this.state.toggleSidebar} routes={routeData}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
