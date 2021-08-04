import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';

class SubmitStudentFee extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          totalAmount: 2000,
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
            class: '1-A',
            feesForMonths: 'April May',
            feesPaid:'16000',
            amountPaid:'10000',
            paymentDate:'9-04-2021',
            notPaid:'6200'
          },
        ];
        this.setState({records: re})
    }

    field = () => {
        const fields = [
            {
              title: "Class",
              field: "class",
            },
            {
              title: "fees For Months",
              field: "feesForMonths",
            },
            {
              title: "Fees Paid",
              field: "feesPaid",
            },
            {
              title: "Amount Paid",
              field: "amountPaid",
            },
            {
              title: "Payment Date",
              field: "paymentDate",
            },
            {
              title: "Not Paid",
              field: "notPaid",
            }
        ];
        return fields;
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

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Pay Fees </h3>
                <Link className="nav-link" to="/admin/submitstudentfee">
                    <button type="button" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Previous Fee Records</button>
                </Link>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
								
                                <form className="forms-sample">
                                    {/* ================================================ */}
                                    <h4 className="card-title">Student Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-3 col-form-label">Name: </label>
                                                <div className="col-sm-9 col-form-label"><span>Jasmeen kour</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Admission No.</label>
                                            <div className="col-sm-9 col-form-label"><span>30322</span></div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-3 col-form-label">Father Name: </label>
                                                <div className="col-sm-9 col-form-label"><span>Santinder Singh</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Class:</label>
                                            <div className="col-sm-9 col-form-label"><span>1-A</span></div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Fees For Month<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <DropdownMultiselect
                                                    options={["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"]}
                                                    name="Months"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Year<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ================================ here show dynamic filed ========================== */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Admission fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Activity fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tution fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Security fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Sports fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Late fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Bus fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    {/* ================================ here show dynamic filed end ========================== */}
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Concession Apple<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payment Date<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payment Mode:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>Cash</option>
                                                <option>UPI</option>
                                                <option>Cheque</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Bank Name: <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>HDFC</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Branch Name:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payable Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Realized Date: <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Cheque status:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>open</option>
                                                <option>close</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Total Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9 col-form-label">
                                                <sapn>40000</sapn>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Pay Fees</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">                 
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true, }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubmitStudentFee;