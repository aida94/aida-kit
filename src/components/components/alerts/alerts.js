import React, { Component } from 'react';
import Alert from './alert';

class Alerts extends Component {

  render() {

    return (
        <React.Fragment>
            <div className="container m-5"> 

                <div className="row ">
                    <div className="col-6 p-3">
                        <Alert class="alert alert-primary"> 
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Alert>

                        <Alert class="alert alert-secondary" />
                        <Alert class="alert alert-warning " />
                        <Alert class="alert alert-primary" />
                        <Alert class="alert alert-primary" />
                    </div>
                    <div className="col-6 p-3">
                        <Alert class="alert alert-primary"> 
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Alert>

                        <Alert class="alert alert-secondary" />
                        <Alert class="alert alert-warning " />
                        <Alert class="alert alert-primary" />
                        <Alert class="alert alert-primary" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Alert class="alert alert-primary"> 
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Alert>

                        <Alert class="alert alert-secondary" />
                        <Alert class="alert alert-warning " />
                        <Alert class="alert alert-primary" />
                        <Alert class="alert alert-primary" />
                    </div>
                    <div className="col-6">
                        <Alert class="alert alert-primary"> 
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </Alert>

                        <Alert class="alert alert-secondary" />
                        <Alert class="alert alert-warning " />
                        <Alert class="alert alert-primary" />
                        <Alert class="alert alert-primary" />
                    </div>
                </div>
           
            
            </div>
            
        </React.Fragment>
        
    );
  }
}

export default Alerts;