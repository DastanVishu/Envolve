import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageConcessionData extends Component {
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
            concessionType:'Type1',
            concessionId:'CID001',
            concession:'20%',
            students:'10',
          },
          {
            _id: 2,
            concessionType:'Type2',
            concessionId:'CID002',
            concession:'Rs. 500',
            students:'20',
          }
        ];
        this.setState({records: re})
				let re1 = [
          {
            _id: 1,
            categories:'ews',
			students:'20',
          },
          {
            _id: 2,
            categories:'general',
			students:'500',
          }
        ];
        this.setState({records1: re1})
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

    ShowSubjects = (props) => {
        console.log(props)
        return(
            <span>
                <button onClick={() => this.setState({selectedClass:props.classes, isModalVisible: !this.state.isModalVisible})} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-link-variant" style={{fontSize:'17px'}}></i>
                </button>    
            </span>
        )
    }

    field = () => {
        const fields = [
            {
              title: "Concession Type",
              field: "concessionType",
            },
            {
              title: "Concession Id",
              field: "concessionId",
            },
						{
              title: "Concession",
              field: "concession",
            },
						{
              title: "Students",
              field: "students",
            },
						{
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }    
		field1 = () => {
        const fields = [
            {
              title: "Categories",
              field: "categories",
            },
            {
              title: "Students",
              field: "students",
            },
						{
              name: "action",
              title: "Actions ",
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
                <h3 className="page-title"> Manage Concession Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
								{/* =================================== Bus============================== */}
									<h4 className="card-title">Create Conession</h4>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                                <label className="col-sm-6 col-form-label">
                                                <input type="radio" className="form-check-input mt-0 col-sm-10" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
                                                <i className="input-helper"></i>
                                                Percent
                                                </label><label className="col-sm-6 col-form-label">
                                                <input type="radio" className="form-check-input  mt-0 col-sm-10" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
                                                <i className="input-helper"></i>
                                                Amount
                                                </label>
                                            </Form.Group>
                                        </div>
										
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Concession Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control  type="text" />
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
                                <div className="col">
                                <button type="button" className="btn mr-0 pr-0">
                                    <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                                </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
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
										<div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
									{/* =================================== Bus============================== */}
									<h4 className="card-title">Manage Categories</h4>
                                    <div className="row">
                                        <div className="col-md-9">
                                            <Form.Group className="row">
                                            <label className="col-sm-2 col-form-label">Category<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-10">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
																			
                                        <div className="col-md-3">
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
                                <div className="col">
                                <button type="button" className="btn mr-0 pr-0">
                                    <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                                </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
                                </div>
                            </div>            
                        </nav>                         
                            <MaterialTable
                            title=""
                            data={this.state.records1}
                            columns={this.field1()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageConcessionData;