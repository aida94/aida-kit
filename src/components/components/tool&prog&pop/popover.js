import React, { Component } from 'react';

class Popover extends Component {
  render() {
    return (
      <div>
        
        <div className='popOver'>
          <button className='btn btn-primary text-white m-2'>Popover on top</button>
          <div className='cardPop popTop' >
            <div className='headerPop'>
              Featured
            </div>
            <p className='bodyPop'>Cras justo odio</p>
          </div>
        </div>

        <div className='popOver'>
          <button className='btn btn-primary text-white m-2'>Popover on left</button>
          <div className='cardPop popLeft' >
            <div className='headerPop'>
              Featured
            </div>
            <p className='bodyPop'>Cras justo odio</p>
          </div>
        </div>

        <div className='popOver'>
          <button className='btn btn-primary text-white m-2'>Popover on bottom</button>
          <div className='cardPop popBottom' >
            <div className='headerPop'>
              Featured
            </div>
            <p className='bodyPop'>Cras justo odio</p>
          </div>
        </div>

        <div className='popOver'>
          <button className='btn btn-primary text-white m-2'>Popover on right</button>
          <div className='cardPop popRight' >
            <div className='headerPop'>
              Featured
            </div>
            <p className='bodyPop'>Cras justo</p>
          </div>
        </div>       
      </div>
    );
  }
}

export default Popover;
