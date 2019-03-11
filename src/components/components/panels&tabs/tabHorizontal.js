import React, { Component } from 'react';

class TabHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Home',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    const tabs = [
      { label: 'Home',
        children: 'This is home tab' },
      { label: 'Profile',
        children: 'This is profile tab' },
      { label: 'Contact',
        children: 'This is contact tab' },
    ];

    return (
      <React.Fragment>
        <ul className='nav nav-tabs' id='myTab' role='tablist'>
          {tabs.map((tab, index) => (
            <li key={index} className='nav-item'>
              <a className={this.state.activeTab === tab.label ? 'nav-link active' : 'nav-link'} data-toggle='tab' href={`#${tab.label}`} role='tab' onClick={() => this.handleClick(tab.label)}>{tab.label}</a>
            </li>
          ))}
        </ul>
        <div className='tab-content' id='myTabContent'>
          {tabs.map((tab, index) => (
            <div key={index} className={this.state.activeTab === tab.label ? 'tab-pane fade mt-2 show active' : 'tab-pane fade mt-2'} role='tabpanel'>{tab.children}</div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default TabHorizontal;
