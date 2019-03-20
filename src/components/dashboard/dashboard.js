import React, { Component } from 'react';
import Panel from '../components/panels&tabs/panel';
import DashLineChart from '../components/charts/dashLineChart';
import DashDoughtnutChart from '../components/charts/dashDoughnutChart';


class Dashboard extends Component {
  render() {
    return (
      <div className='text-secondary' id='dashboard'>
        <section className='mx-3 mt-1 mb-4'>
          <h3 className='mb-4'>Dashboard</h3>

          <div className='row'>
            <div className='col-md-3 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 text-primary shadow'>
                <div className=''>
                  <span className='h4'>2 000</span> 
                  <span className='float-right text-secondary'> <i className='fa fa-level-up-alt mr-3' ></i> </span> 
                  <small className='d-block text-secondary'>TOTAL CUSTOMERS</small>
                </div>
                <div className='text-right'> 60% 
                  <div className='progress m-1' style={{ height: '10px' }}>
                    <div className='progress-bar bg-primary' role='progressbar' style={{ width: '60%' }} aria-valuenow='60' aria-valuemin='0' aria-valuemax='100'></div>
                  </div> 
                </div> 
              </div>
            </div>

            <div className='col-md-3 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 text-warning shadow'>
                <div className=''>
                  <span className='h4'>85</span> 
                  <span className='float-right text-secondary'> <i className='fa fa-level-down-alt mr-3' ></i> </span> 
                  <small className='d-block text-secondary'>PRODUCT CANCELS</small>
                </div>
                <div className='text-right'> 35% 
                  <div className='progress m-1' style={{ height: '10px' }}>
                    <div className='progress-bar bg-warning' role='progressbar' style={{ width: '35%' }} aria-valuenow='35' aria-valuemin='0' aria-valuemax='100'></div>
                  </div> 
                </div> 
              </div>
            </div>

            <div className='col-md-3 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 text-success shadow'>
                <div className=''>
                  <span className='h4'>$40 000</span> 
                  <span className='float-right text-secondary'> <i className='fa fa-level-up-alt mr-3' ></i> </span> 
                  <small className='d-block text-secondary'>YEAR PROFIT EARNED</small>
                </div>
                <div className='text-right'> 75% 
                  <div className='progress m-1' style={{ height: '10px' }}>
                    <div className='progress-bar bg-success' role='progressbar' style={{ width: '75%' }} aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
                  </div> 
                </div> 
              </div>
            </div>

            <div className='col-md-3 mb-5'>
              <div className='bg-white rounded p-2 p-md-3 mr-md-4 text-danger shadow'>
                <div className=''>
                  <span className='h4'>$300</span> 
                  <span className='float-right text-secondary'> <i className='fa fa-level-down-alt mr-3' ></i> </span> 
                  <small className='d-block text-secondary'>MONTHLY PROFIT EARNED</small>
                </div>
                <div className='text-right'> 25% 
                  <div className='progress m-1' style={{ height: '10px' }}>
                    <div className='progress-bar bg-danger' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                  </div> 
                </div> 
              </div>
            </div>
          </div>

          <div className='row'>
            <Panel classDiv='col-md-4 mb-5' classHeader='bg-white rounded-top p-2 mr-md-4 shadow' headerText='TRADE CHART' classBody='bg-white rounded-bottom p-4 mr-md-4 shadow'> 
              <DashDoughtnutChart />             
            </Panel>
            
            <Panel classDiv='col-md-8 mb-5' classHeader='bg-white rounded-top p-2 mr-md-4 shadow' headerText='TRADE HISTORY' classBody='bg-white rounded-bottom px-5 pb-3 mr-md-4 shadow'> 
              <DashLineChart />
            </Panel>
          </div>

          <div className='row'>
            <Panel classDiv='col-md-12 mb-5' classHeader='bg-white rounded-top p-2 mr-md-4 shadow' headerText='TRADE TABLE' classBody='bg-white rounded-bottom px-5 pb-3 mr-md-4 shadow'> 
              <table className="table table-striped table-borderless text-secondary">
                <thead className="">
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Sold</th>
                    <th scope="col">Bounce rate</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-success'>BTC</td>
                    <td className='text-success'><b>|||||</b></td>
                    <td><button className='btn rounded-pill btn-success text-white'>Completed</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-success' role='progressbar' style={{ width: '100%' }} aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>100%</div>
                      </div>
                    </td>
                    <td>$1000</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-primary'>ETH</td>
                    <td className='text-primary'><b>||||</b></td>
                    <td><button className='btn rounded-pill btn-primary text-white'>In Progress</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-primary' role='progressbar' style={{ width: '80%' }} aria-valuenow='80' aria-valuemin='0' aria-valuemax='80'>80%</div>
                      </div>
                    </td>
                    <td>$850</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-warning'>NEO</td>
                    <td className='text-warning'><b>||</b></td>
                    <td><button className='btn rounded-pill btn-warning text-white'>Pending</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-warning' role='progressbar' style={{ width: '40%' }} aria-valuenow='40' aria-valuemin='0' aria-valuemax='100'>40%</div>
                      </div>
                    </td>
                    <td>$500</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-primary'>BIT</td>
                    <td className='text-primary'><b>||||</b></td>
                    <td><button className='btn rounded-pill btn-primary text-white'>In Progress</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-primary' role='progressbar' style={{ width: '80%' }} aria-valuenow='80' aria-valuemin='0' aria-valuemax='80'>80%</div>
                      </div>
                    </td>
                    <td>$720</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-success'>STE</td>
                    <td className='text-success'><b>|||||</b></td>
                    <td><button className='btn rounded-pill btn-success text-white'>Completed</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-success' role='progressbar' style={{ width: '100%' }} aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>100%</div>
                      </div>
                    </td>
                    <td>$900</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-danger'>EOS</td>
                    <td className='text-danger'><b>|</b></td>
                    <td><button className='btn rounded-pill btn-danger text-white'>Denied</button></td>
                    <td>
                      <div className='progress m-1 w-75'>
                      <div className='progress-bar bg-danger' role='progressbar' style={{ width: '15%' }} aria-valuenow='15' aria-valuemin='0' aria-valuemax='100'>15%</div>
                      </div>
                    </td>
                    <td>$50</td>
                    <td>
                      <div className='popOver'>
                        <b>...</b>
                        <div className='cardPop popDash' >
                          <div className='p-3 text-left'>
                            <a className='text-secondary' href='#edit'> Edit </a>
                            <a className='text-secondary' href='#delete'> Delete </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </Panel>
          </div>

        </section>
      </div>
            
    );
  }
}

export default Dashboard;
