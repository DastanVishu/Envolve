import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageHolidaysData extends Component {
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
            festival:'Republic Day',
            day:'Tuesday',
            date:'26-January,2021',
          },
          {
            _id: 2,
            festival:'Mahashivratri',
            day:'Thursday',
            date:'11-March,2021',
          },
					{
            _id: 3,
            festival:'Mahashivratri',
            day:'Saturday',
            date:'25-December,2021',
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
		
		DeactiveAction = (props, index) => {

				return(
					<span>
						<ReactTooltip id='activate' type='error' effect='solid'>
								<span>Activate/Deactive</span>
							</ReactTooltip>  
						<span  data-tip data-for="activate" className="form-check form-check-danger" style={{display:'inline-flex'}}>
							<label className="form-check-label">
								<input type="checkbox" className="form-check-input" defaultChecked />
								<i className="input-helper"></i>
							</label>
						</span>
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
							// name: "",
							// field: "Deactive",
							name: "action",
							title: "",
							width: "0%",
							align:"center",
							render: this.DeactiveAction,
						},
            {
              title: "Festivals",
              field: "festival",
            },
            {
              title: "Day(s)",
              field: "day",
            },
						{
              title: "Date(s)",
              field: "date",
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
                <h3 className="page-title"> Master Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
								{/* =================================== Add holiday============================== */}
									<h4 className="card-title">Add Holiday</h4>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Festival<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Date<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-5">
                                                <Form.Control  type="date" />
                                            </div>
																						<div className="col-sm-1 mt-3"> to </div>
																						<div className="col-sm-5">
                                                <Form.Control  type="date" />
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
                        {/*<nav aria-label="breadcrumb">
                            <div className="row">
                                <div className="col">
                                <button type="button" className="btn mr-0 pr-0">
                                    <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                                </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
                                </div>
                            </div>            
                        </nav> */ }                     
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
								</div>
            </div>
        )
    }
}

export default ManageHolidaysData;