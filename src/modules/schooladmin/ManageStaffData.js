import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';

class ManageStaffData extends Component {
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
            name: 'Ram Kumar',
            email: 'sdfaf@gmail.com',
            mobile: '8976540321',
            class: '1-A'
          },
          {
            _id: 2,
            name: 'Kunal Sharma',
            email: 'sdfa2f@gmail.com',
            mobile: '8976540321',
            class: '1-B'
          },
          {
            _id: 3,
            name: 'Vineet Sethi',
            email: 'sdfaf4@gmail.com',
            mobile: '8976540321',
            class: '2-A'
          },
          {
            _id: 4,
            name: 'Aditya Saini',
            email: 'sdfaf55@gmail.com',
            mobile: '8976520321',
            class: '2-B'
          },
        ];
        this.setState({records: re})
    }

    renderAction = (props) => {
    
        return(
            <span>
                <button type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>

                <button type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }


    field = () => {
        const fields = [
            {
              title: "Name",
              field: "name",
            },
            {
              title: "Email",
              field: "email",
            },
            {
              title: "Moblie",
              field: "mobile",
            },
            {
              title: "Class",
              field: "class",
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Staff Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
														<h4 className="card-title">Add Staff Member</h4>
                                <form className="forms-sample">
                                    {/* ================================================ */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">First Name <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" placeholder="First Name" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Last Name <span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mobile No. <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="number" placeholder="Mobile No." />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Email <span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="email" placeholder="Enter Email" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Country <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>India</option>
                                                <option>Italy</option>
                                                <option>Russia</option>
                                                <option>Britain</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">State <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                <option>Punjab</option>
                                                <option>Bihar</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">City <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Pin code <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" id="exampleInputName12" placeholder="Pin code" />
                                            </div>
                                        </Form.Group>
                                        </div>
                                    </div>
                        
                                    <div className="row">
																				<div className="col-md-6">
																					<Form.Group className="row">
																						<label className="col-sm-3 col-form-label">Address</label>
																						<div className="col-sm-9">
																						<Form.Control type="text"/>
																						</div>
																					</Form.Group>
																				</div>
                                        <div className="col-md-6">
																					<Form.Group className="row">
																						<label className="col-sm-3 col-form-label"> Photo <span style={this.state.startstyle}>*</span></label>
																						<div className="custom-file col-sm-9">
																							<Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
																							<label className="custom-file-label" htmlFor="customFileLang">Browse</label>
																						</div>
																					</Form.Group>
																				</div>
                                    </div>
																		{/* ================== associate teacher class======================= */}
																		<h4 className="card-title">Associate Teacher With Class & Subjects</h4>
																		<div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Class <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
																							<select className="form-control">
																									<option>1</option>
																									<option>2</option>
																									<option>3</option>
																									<option>4</option>
																							</select>
                                            </div>
                                            </Form.Group>
                                        </div>
																		</div>
																		<div className="row">
																				<div className="col-12">
																						<Form.Group className="row">
																						<div className="form-check mr-3">
																							<label className="form-check-label">
																								<input type="checkbox" className="form-check-input"/>
																								<i className="input-helper"></i>
																								English
																							</label>
																						</div>
																						<div className="form-check mr-3">
																							<label className="form-check-label">
																								<input type="checkbox" className="form-check-input"/>
																								<i className="input-helper"></i>
																								Yoga
																							</label>
																						</div>
																						<div className="form-check mr-3">
																							<label className="form-check-label">
																								<input type="checkbox" className="form-check-input"/>
																								<i className="input-helper"></i>
																								Math
																							</label>
																						</div>
																						<div className="form-check mr-3">
																							<label className="form-check-label">
																								<input type="checkbox" className="form-check-input"/>
																								<i className="input-helper"></i>
																								Music
																							</label>
																						</div>
																						<div className="form-check mr-3">
																							<label className="form-check-label">
																								<input type="checkbox" className="form-check-input"/>
																								<i className="input-helper"></i>
																								Drawing
																							</label>
																						</div>
																						</Form.Group>
																				</div>
																		</div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Submit</button>
                                        </div>
                                    </div>
                                    {/* ========================================================== */}
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
                            options={{ search: true, paging: true, filtering: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageStaffData;