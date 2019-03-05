import React, { Component } from 'react';

class Tooltip extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>

      </div>
    );
  }
}

export default Tooltip;
