import React, { Component } from 'react';
import './notifications.scss';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false,
      float: '',
      index: 100 };

    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ show: false }),
      6000,
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  

  handleShow(float) {
    this.setState({ show: true, float, index: this.state.index + 1 });
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const hide = this.state.show ? 'd-block' : 'd-none';

    let float = 'leftNot';
    if (this.state.float === 'right') {
      float = 'rightNot';
    } else if (this.state.float === 'top') {
      float = 'topNot';
    }


    return (

      <div>
        <button type='button' className={this.props.btnClass} data-toggle='modal' data-target='#exampleModal' onClick={() => this.handleShow('left')}>
          Launch left
        </button>

        <button type='button' className={this.props.btnClass} data-toggle='modal' data-target='#exampleModal' onClick={() => this.handleShow('right')}>
          Launch right
        </button>

        <button type='button' className={this.props.btnClass} data-toggle='modal' data-target='#exampleModal' onClick={() => this.handleShow('top')}>
          Launch top
        </button>
                
        <div className={`mt-5 ${float} ${hide}`} id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true' style={{ zIndex: this.state.index }}>
            <div className={`modal-content ${this.props.class}`}>
              <div className='boxHeader m-2'>
                <h6 className='modal-title' id='exampleModalLabel'>Notification title</h6>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={handleHide}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='m-2'>
                <small>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</small>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Notification;
