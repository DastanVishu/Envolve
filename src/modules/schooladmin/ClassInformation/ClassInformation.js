import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';

class ClassInformation extends Component {
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
            classes:'Class-1-A',
            subjects: ['english', 'hindi', 'maths', 'science']
          },
          {
            _id: 2,
            classes:'Class-1-B',
            subjects: ['english', 'hindi', 'maths', 'science']
          }
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
              title: "Classes",
              field: "classes",
            },
            {
              title: "Subjects",
              render: this.ShowSubjects,
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
                <h3 className="page-title"> Classes </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Class Name<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Section<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-2">
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

export default ClassInformation;