import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class TimeTable extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible: false,
          selectedClass: '',
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
            class:'Class-1-A',
            subject: 'hindi',
						teacher: 'Shalini Devi',
						day: 'Monday',
						time: '9:00AM To 10:00AM',
					},
          {
            _id: 2,
            class:'Class-2-A',
            subject: 'Maths',
						teacher: 'Ravinder Kumar',
						day: 'Monday',
						time: '10:00AM To 11:00AM',
					}
        ];
        this.setState({records: re})
    }

    renderAction = (props) => {
    
        return(
            <span>
              <ReactTooltip id='Edit' type='warning' effect='solid'>
                <span>Edit</span>
              </ReactTooltip>
                <button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }



    field = () => {
        const fields = [
            {
              title: "Class",
              field: "class",
              width: "0%",
            },
            {
              title: "Subject",
              field: "subject",
            },
						{
              title: "Teacher",
              field: "teacher",
            },
						{
              title: "Day",
              field: "day",
            },
						{
              title: "Time",
              field: "time",
            },

            {
              name: "action",
              title: "Actions ",
              width: "0%",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    handleClose = () => {
        this.setState({selectedClass:"", isModalVisible: false})
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Time Tables </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Select Class<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>1-A</option>
                                                        <option>1-B</option>
																												<option>2-A</option>
																												<option>2-B</option>
                                                        <option>2-C</option>
                                                        <option>3-A</option>
																												<option>3-B</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>English</option>
                                                        <option>Hindi</option>
                                                        <option>History</option>
                                                        <option>Maths</option>
																												<option>Science</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Teacher<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>Shalini Devi</option>
                                                        <option>Ravinder Kumar</option>
                                                        <option>Gaurav Sharma</option>
                                                        <option>Pratibha Kumari</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Day<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>Monday</option>
                                                        <option>Tuesday</option>
                                                        <option>Wednesday</option>
                                                        <option>Thursday</option>
																												<option>Friday</option>
																												<option>Saturday</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Time<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-5">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingDepartureTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
																						<div className="col-sm-1 mt-3"> to </div>
																						<div className="col-sm-5">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingDepartureTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
										
                                        
                                        <div className="col-md-2 mt-5">
                                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                                        </div>
																				
                                    </div>

                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <nav aria-label="breadcrumb">
                              <div className="row">
                                <div class="col">
                                  <button type="button" class="btn mr-0 pr-0">
                                    <i class="mdi mdi-import" style={{fontSize: "24px"}}></i>
                                  </button>Import Bulk Data (<code><a href="" class="sm-text">Download &amp; View File Format</a></code>)
                                </div>
                              </div>            
                          </nav>                     
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            {/* ================================= */}

            {/* ================================= */}
            </div>
        )
    }
}

export default TimeTable;