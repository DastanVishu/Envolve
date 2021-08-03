import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
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

    DeactiveAction = (props, index) => {
    
        return(
          <span>  
            <span className="form-check form-check-danger" style={{display:'inline-flex'}}>
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
              </label>
            </span>
          </span>
        )
    }

    field = () => {
        const fields = [
            {
                name: "action",
                title: "",
                width: "0%",
                align:"center",
                render: this.DeactiveAction,
            },
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
              render: this.studentHyperlink
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    studentHyperlink = (props) => {
      return(
        <>
        <Link onClick={() => this.setState({selectedClass:props.class, isModalVisible: true})}>{props.class}</Link>
        </>
      )
  }

    handleClose = () => {
      this.setState({selectedClass:"", isModalVisible: false})
    }

    render() {
        return(
            <div>
                <div className="page-header">
                  <h3 className="page-title"> Staff Data </h3>
                  
                  <Link className="nav-link" to="/admin/addstaff">
                    <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                  </Link>
                      
                </div>
                
                <div className="row">
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
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            
            {/* ================================= */}
            <Modal show={this.state.isModalVisible} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
        <h3 className="page-title"> {this.state.selectedClass} - Subjects </h3>
        </Modal.Header>
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Hindi 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> English 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Maths 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                        <div className="col-sm-6">
                            <Form.Group>
                            <div className="form-check form-check-success">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" defaultChecked /> Punjabi 
                                    <i className="input-helper"></i>
                                </label>
                            </div>
                            </Form.Group>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Modal.Footer style={{backgroundColor: '#ffffff'}}>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {/* ================================= */}

            </div>
        )
    }
}

export default ManageStaffData;