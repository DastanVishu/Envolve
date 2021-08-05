import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import ToggleDays from "./ToggleDays";

class ManageBusData extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          }
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
						routeNo:'route-1',
            busNo:'CH-02',
            driver:"maan singh",
            monitor:"sector 21",
            start:"school",
						stop:"sector-15",
						student:"20",
						
          },
          {
            _id: 2,
						routeNo:'route-2',
            busNo:'CH-04',
            driver:"amrit singh",
            monitor:"kamal",
            start:"school",
						stop:"sector-16",
						student:"22",
          },
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
              title: "Route No.",
              field: "routeNo",
            },
						{
              title: "Bus No.",
              field: "busNo",
            },
            {
              title: "Driver",
              field: "driver",
              render: this.DriverHyperlink
            },
            {
              title: "Monitor",
              field: "monitor",
            },
            {
              title: "Start",
              field: "start",
            },
            {
              title: "Stop",
              field: "stop",
            },
            {
              title: "Students",
              field: "student",
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

    DriverHyperlink = (props) => {
        return(
          <>
          <Link to="/admin/busdata">{props.driver}</Link>
          </>
        )
    }

    studentHyperlink = (props) => {
        return(
          <>
          <Link to="/admin/busdata">{props.student}</Link>
          </>
        )
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Bus Data </h3>
								<Link className="nav-link" to="/admin/addbusroute">
										<button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
								</Link>
                </div>
                <div className="row">
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
            </div>
        )
    }
}

export default ManageBusData;