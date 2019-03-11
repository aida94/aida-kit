import React, { Component } from 'react';

class TabVertical extends Component {
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
      { label: 'Messages',
        children: 'This is messages tab' },
    ];
    return (
      <React.Fragment>
        {tabs.map((tab, index) => (
          <div key={index} className='row'>
            <div className='col-3'>
              <div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
                <a className={this.state.activeTab === tab.label ? 'nav-link active' : 'nav-link'} data-toggle='pill' href={`#${tab.label}`} role='tab' onClick={() => this.handleClick(tab.label)}>{tab.label}</a>
              </div>
            </div>
            <div className='col-9'>
              <div className='tab-content' id='v-pills-tabContent'>
                <div className={this.state.activeTab === tab.label ? 'tab-pane fade show active' : 'tab-pane fade'} role='tabpanel'>{tab.children}</div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default TabVertical;
