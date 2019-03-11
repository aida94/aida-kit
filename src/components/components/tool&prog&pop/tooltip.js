import React, { Component } from 'react';
import './tpp.scss';

class Tooltip extends Component {
  render() {
    return (
      <div>
        <div className='btn btn-secondary m-2 toolTip'>Tooltip on top
          <span className='toolT tooltipTop'>Tooltip text</span>
        </div>
        <div className='btn btn-secondary m-2 toolTip'>Tooltip on left
          <span className='toolT tooltipLeft'>Tooltip text</span>
        </div>
        <div className='btn btn-secondary m-2 toolTip'>Tooltip on bottom
          <span className='toolT tooltipBottom'>Tooltip text</span>
        </div>
        <div className='btn btn-secondary m-2 toolTip'>Tooltip on right
          <span className='toolT tooltipRight'>Tooltip text</span>
        </div>        
      </div>
    );
  }
}

export default Tooltip;
