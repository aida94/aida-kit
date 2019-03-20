import React, { Component } from 'react';

class DefaultModal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }


  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    // eslint-disable-next-line no-alert
    const handleSave = () => alert('Data saved');

    const hide = this.state.show ? 'd-block' : 'd-none';

    return (

      <div className='text-dark'>
        <button type='button' className='btn text-white btn-primary' data-toggle='modal' data-target='#exampleModal' onClick={handleShow}>
          Launch modal
        </button>
        
        <div className={`modal mt-5 ${hide}`} id='exampleModal' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>Modal title</h5>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={handleHide}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={handleHide}>Close</button>
                <button type='button' className='btn btn-primary text-white' onClick={handleSave}>Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default DefaultModal;
