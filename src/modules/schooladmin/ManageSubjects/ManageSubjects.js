import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageSubjects extends Component {
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
            subject: 'science'
          },
          {
            _id: 2,
            subject:'english'
          },
          {
            _id: 3,
            subject:'hindi'
          },
          {
            _id: 4,
            subject:'maths'
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
              title: "Subjects",
              field: "subject",
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
                <h3 className="page-title"> Subjects </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <Form.Group className="row">
                                            <label className="col-sm-2 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
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
                                <div className="col-8"></div>
                                <div className="col-2" style={{ padding: '0.5rem 0rem'}}>
                                    <Link>Download Excel Table Formate</Link>
                                </div>
                                <div className="col-2" style={{ padding: '0.5rem 0rem'}}>
                                    <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Upload</button>  
                                </div>
                            </div>            
                        </nav>                   
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

export default ManageSubjects;