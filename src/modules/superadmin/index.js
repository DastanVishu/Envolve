import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';

export class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      saleOptions : {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
          xAxes: [{
            display: false,
            position: 'bottom',
            gridLines: {
              drawBorder: false,
              display: false,
              drawTicks: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }],
        },
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: .4
          }
        },
        tooltips: {
          backgroundColor: 'rgba(2, 171, 254, 1)',
        },
    
      },
      salespredictionData: {},
      salesprediction2Data : {},
      salesprediction3Data : {},
      salesprediction4Data : {},

    }
  }

  toggleProBanner() {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  render () {
    return (
      <div>
        {/* <div className="row proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!</p>
              <a href="https://www.bootstrapdash.com/product/connect-plus-react/?utm_source=organic&utm_medium=banner&utm_campaign=free-preview" rel="noopener noreferrer" target="_blank" className="btn purchase-button ml-auto">Check Pro Version</a>
              <i className="mdi mdi-close bannerClose" onClick={this.toggleProBanner}></i>
            </span>
          </div>
        </div> */}
        <div>
          <div className="d-sm-flex justify-content-between align-items-start">
            <h2 className="text-dark font-weight-bold mb-2"> Dashboard </h2>
            <div className="d-sm-flex justify-content-xl-between align-items-center mb-2">
              <div className="btn-group d-none d-xl-flex bg-white p-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-link text-light py-0 font-weight-medium border-right">7 Days</button>
                <button type="button" className="btn btn-link text-dark py-0 font-weight-medium border-right">1 Month</button>
                <button type="button" className="btn btn-link text-light font-weight-medium py-0">3 Month</button>
              </div>
              <div className="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <Dropdown alignRight>
                  <Dropdown.Toggle className="bg-white dropdown-toggle border-0 p-3 mr-0 text-muted d-flex align-items-center">
                  <i className="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>24 Mar 2019 - 24 Mar 2019</Dropdown.Item>
                    <Dropdown.Item>24 April 2019 - 24 May 2019</Dropdown.Item>
                    <Dropdown.Item>24 May 2019 - 24 Jun 2019</Dropdown.Item>
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item>24 Jun 2019 - 24 July 2019</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          
          <div className="row mt-2">
            <div className="col-md-12">
              <div className="justify-content-between align-items-center tab-transparent">
                <div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body text-center">
                          <h5 className="mb-2 text-dark font-weight-normal">School</h5>
                          <h2 className="mb-4 text-dark font-weight-bold">9</h2>
                          {/* <div className="px-4 d-flex align-items-center">
                            <svg width="0" height="0">
                              <defs>
                                <linearGradient id="progress-order">
                                  <stop offset="0%" stopColor="#1579ff"/>
                                  <stop offset="100%" stopColor="#7922e5"/>
                                </linearGradient>
                              </defs>
                            </svg>
                            <CircularProgressbarWithChildren className="progress-order"
                            value={70}>
                              <div>
                                <i className="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                              </div>
                            </CircularProgressbarWithChildren>
                          </div> */}
                          {/* <p className="mt-4 mb-0">Completed</p>
                          <h3 className="mb-0 font-weight-bold mt-2 text-dark">5</h3> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body text-center">
                          <h5 className="mb-2 text-dark font-weight-normal">Teacher</h5>
                          <h2 className="mb-4 text-dark font-weight-bold">100</h2>
                            {/* <div className="px-4 d-flex align-items-center">
                              <svg width="0" height="0">
                                <defs>
                                  <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#b4ec51"/>
                                    <stop offset="100%" stopColor="#429321"/>
                                  </linearGradient>
                                </defs>
                            </svg>
                            <CircularProgressbarWithChildren className="progress-visitors"
                            value={90}>
                              <div>
                                <i className="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                              </div>
                            </CircularProgressbarWithChildren>
                            </div> */}
                          {/* <p className="mt-4 mb-0">Present Teacher</p>
                          <h3 className="mb-0 font-weight-bold mt-2 text-dark">90%</h3> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body text-center">
                          <h5 className="mb-2 text-dark font-weight-normal">Admin</h5>
                          <h2 className="mb-4 text-dark font-weight-bold">18</h2>
                            {/* <div className="px-4 d-flex align-items-center">
                              <svg width="0" height="0">
                                <defs>
                                  <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fad961"/>
                                    <stop offset="100%" stopColor="#f76b1c"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                              <CircularProgressbarWithChildren className="progress-impressions"
                              value={90}>
                                <div>
                                  <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                </div>
                              </CircularProgressbarWithChildren>
                            </div>                               */}
                          {/* <p className="mt-4 mb-0">Active</p>
                          <h3 className="mb-0 font-weight-bold mt-2 text-dark">90%</h3> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body text-center">
                          <h5 className="mb-2 text-dark font-weight-normal">Student</h5>
                          <h2 className="mb-4 text-dark font-weight-bold">15k</h2>
                            {/* <div className="px-4 d-flex align-items-center">
                              <svg width="0" height="0">
                                <defs>
                                  <linearGradient id="progress-followers" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#f5515f"/>
                                    <stop offset="100%" stopColor="#9f041b"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                              <CircularProgressbarWithChildren className="progress-followers"
                              value={85}>
                                <div>
                                  <i className="mdi mdi-eye icon-md absolute-center text-dark"></i>
                                </div>
                              </CircularProgressbarWithChildren>
                            </div>   */}
                          {/* <p className="mt-4 mb-0">Present</p>
                          <h3 className="mb-0 font-weight-bold mt-2 text-dark">85%</h3> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-12 grid-margin">
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="d-flex justify-content-between align-items-center">
                                <h4 className="card-title">Recent Activity</h4>
                                <div className="dropdown dropdown-arrow-none">
                                  <Dropdown alignRight>
                                    <Dropdown.Toggle className="btn p-0 text-dark bg-transparent border-0 hide-carret">
                                      <i className="mdi mdi-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                      <Dropdown.Item><i className="mdi mdi-eye-outline mr-2"></i>View Project </Dropdown.Item>
                                      <Dropdown.Item><i className="mdi mdi-pencil-outline mr-2"></i>Edit Project </Dropdown.Item>
                                      <Dropdown.Item><i className="mdi mdi-delete-outline mr-2"></i>Delete Project </Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-4 grid-margin  grid-margin-lg-0">
                              <div className="wrapper pb-5 border-bottom">
                                <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                  <p className="mb-0 text-dark">Total Profit</p>
                                  <span className="text-success"><i className="mdi mdi-arrow-up"></i>2.95%</span>
                                </div>
                                <h3 className="mb-0 text-dark font-weight-bold">$ 92556</h3>
                                <Line data={this.totalProfitData} options={this.totalProfitOptions} />
                              </div>
                              <div className="wrapper pt-5">
                                <div className="text-wrapper d-flex align-items-center justify-content-between mb-2">
                                  <p className="mb-0 text-dark">Expenses</p>
                                  <span className="text-success"><i className="mdi mdi-arrow-up"></i>52.95%</span>
                                </div>
                                <h3 className="mb-4 text-dark font-weight-bold">$ 59565</h3>
                                <Line data={this.totalExpencesData} options={this.totalExpencesOptions} />
                              </div>
                            </div>
                            <div className="col-lg-9 col-sm-8 grid-margin  grid-margin-lg-0">
                              <div className="pl-0 pl-lg-4 ">
                                <div className="d-xl-flex justify-content-between align-items-center mb-2">
                                  <div className="d-lg-flex align-items-center mb-2 mb-xl-0">
                                    <h3 className="text-dark font-weight-bold mr-2 mb-0">Devices sales</h3>
                                    <h5 className="mb-0">( growth 62% )</h5>
                                  </div>
                                  <div className="d-lg-flex">
                                    <p className="mr-2 mb-0">Timezone:</p>
                                    <p className="text-dark font-weight-bold mb-0">GMT-0400 Eastern Delight Time</p>
                                  </div>
                                </div>
                                <div id="visit-sale-chart-legend" className="legend-top-right float-right">
                                  <ul className="legend-horizontal">
                                    <li>
                                      <span className="legend-dots bg-info">
                                      </span>Demand
                                    </li>
                                    <li>
                                      <span className="legend-dots bg-danger">
                                      </span>Supply
                                    </li>
                                  </ul>
                                </div>
                                <Bar data={this.deviceSaleData} options={this.deviceSaleOptions} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 grid-margin stretch-card">
                      <div className="card card-danger-gradient">
                        <div className="card-body mb-4">
                          <h4 className="card-title mb-3 text-white">Account Retention</h4>
                          <Bar data={this.accountRetensionData} options={this.accountRetensionOptions} />
                        </div>
                        <div className="card-body bg-white p-md-1 pt-4">
                          <div className="row pt-4">
                            <div className="col-xl-6">
                              <div className="text-center conversion-border">
                                <h4>Conversion</h4>
                                <h1 className="text-dark font-weight-bold mb-md-3">$306</h1>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="text-center">
                                <h4>Cancellation</h4>
                                <h1 className="text-dark font-weight-bold">$1,520</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8  grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-xl-flex justify-content-between mb-2">
                            <h4 className="card-title">Page views analytics</h4>
                            <div id="visit-sale-chart-legend" className="legend-top-right float-right">
                              <ul className="legend-horizontal">
                                <li>
                                  <span className="legend-dots bg-success">
                                  </span>This week
                                </li>
                                <li>
                                  <span className="legend-dots bg-primary">
                                  </span>Current week
                                </li>
                              </ul>
                            </div>
                          </div>
                          <Line data={this.pageViewAnalyticData} options={this.pageViewAnalyticOptions} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-12 col-sm-12 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body recent-activity">
                          <h4 className="card-title">Recent Activity</h4>
                          <div className="d-flex mb-3">
                            <div>
                              <div className="activity-info bg-danger"> I </div>
                            </div>
                            <div className="activity-details">
                              <h4 className="text-dark font-weight-normal">Iva Barber</h4>
                              <p className="mb-0">added new task on trello</p>
                              <p className="text-small mb-0">05:58AM</p>
                            </div>
                          </div>
                          <div className="d-flex mb-3">
                            <div className="activity-info bg-warning"> D </div>
                            <div className="activity-details">
                              <h4 className="text-dark font-weight-normal">Dorothy Romero</h4>
                              <p className="mb-0">added new task on trello</p>
                              <p className="text-small mb-0">02:50PM</p>
                            </div>
                          </div>
                          <div className="d-flex mb-3">
                            <div className="activity-info bg-success"> R </div>
                            <div className="activity-details">
                              <h4 className="text-dark font-weight-normal">Ricardo Hawkins</h4>
                              <p className="mb-0">added new task on trello</p>
                              <p className="text-small mb-0">05:22AM</p>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="activity-info hide-border bg-info"> N </div>
                            <div className="activity-details">
                              <h4 className="text-dark font-weight-normal">Noah Montgomery</h4>
                              <p className="mb-0">added new task on trello</p>
                              <p className="text-small mb-0">08:19PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">My Balance</h4>
                          <div className="d-lg-flex justify-content-between align-items-center">
                            <h1 className="text-dark mb-0">$3258</h1>
                            <p className="text-success mb-0 font-weight-medium">+30.56% ($121)</p>
                          </div>
                          <p className="mb-5 pb-1">Deposit: <span className="font-weight-bold">$5430</span></p>
                          <Bar data={this.myBalanceData} options={this.myBalanceOptions} />
                          <div className="border p-3 mt-2">
                            <div className="row">
                              <div className="col-sm-6 mb-4 mb-lg-0">
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                  <div className="text-small text-dark">Available :</div>
                                  <span className="font-weight-bold text-dark text-small ">30.56%</span>
                                </div>
                                  <ProgressBar variant="success" now={30}/>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-lg-flex justify-content-between align-items-center mb-1">
                                  <div className="text-small text-dark">Pending :</div>
                                  <span className="font-weight-bold text-small text-dark">69.44%</span>
                                </div>
                                  <ProgressBar variant="info" now={70}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="dotted-border p-3 mb-3">
                            <div className="row">
                              <div className="col-sm-12">
                                <h4 className="card-title mb-1">Sales Prediction</h4>
                              </div>
                              <div className="col-sm-6">
                                <Line data={this.state.salespredictionData} options={this.state.saleOptions} id="prediction1"/>
                                <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                <p className="text-muted mb-0">350-985 sales</p>
                              </div>
                              <div className="col-sm-6">
                              <Line data={this.state.salesprediction2Data} options={this.state.saleOptions}  id="prediction2"/>
                                <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                <p className="text-muted mb-0">350-985 sales</p>
                              </div>
                            </div>
                          </div>
                          <div className="dotted-border p-3">
                            <div className="row">
                              <div className="col-sm-12">
                                <h4 className="card-title mb-1">Stock History</h4>
                              </div>
                              <div className="col-sm-6">
                              <Line data={this.state.salesprediction3Data} options={this.state.saleOptions}  id="prediction3"/>
                                <h3 className="font-weight-bold mt-3 text-dark">$3258</h3>
                                <p className="mb-0 text-muted">350-985 sales</p>
                              </div>
                              <div className="col-sm-6">
                              <Line data={this.state.salesprediction4Data} options={this.state.saleOptions}  id="prediction4"/>
                                <h3 className="font-weight-bold text-dark  mt-3">$3258</h3>
                                <p className="mb-0 text-muted">350-985 sales</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 */}
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}
export default Dashboard;