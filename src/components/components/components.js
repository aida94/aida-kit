import React, { Component } from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";
import DataComponent from './data.js';


let routes = DataComponent;

class Components extends Component {


  render() {


    return (
      <div className="Components">
            
        <ul>
            {routes.filter(elem => elem.showComponent)
              .map((route, index) => 
                <li key={index} className="drpComp">
                  <NavLink to={route.path} onClick={(e) => e.stopPropagation()}> 
                    <span className="">
                      {route.name}
                    </span>

                  </NavLink>
                </li>)}
        </ul>

      </div>
    );
  }
}

export default Components;