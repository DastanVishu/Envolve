import React, { Component, forwardRef } from 'react'
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageSchool extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      tooltipOpen: false,
    }
  }

  componentDidMount(){
    let re = [
      {
        _id: 1,
        schoolName:'S.D.M school',
        principal:'Ashok',
        teacherCount:'10',
        studentCount:"4000",
        city:'Amritsar',
        state:'Punjab'
      },
      {
        _id: 2,
        schoolName:'Shivalic public school',
        principal:'Jitu',
        teacherCount:'20',
        studentCount:"3000",
        city:'Amritsar',
        state:'Punjab'
      }
    ];
    this.setState({records: re})
  }

  renderAction = (props, index) => {
    
    return(<span>

      <ReactTooltip id='Edit' type='warning' effect='solid'>
        <span>Edit</span>
      </ReactTooltip>
        <button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
            <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
        </button>
      
      <ReactTooltip id='User' effect='solid'>
        <span>User log</span>
      </ReactTooltip>
      <button data-tip data-for="User" type="button" className="btn btn-outline-primary" style={{padding:'8px'}}>
        <i className="mdi mdi-account-key"style={{fontSize:'17px'}}></i>
      </button>

      <ReactTooltip id='Key' effect='solid'>
        <span>Key will show here</span>
      </ReactTooltip>
      <button data-tip data-for="Key" type="button" className="btn btn-outline-light" style={{padding:'8px'}}>
        <i className="mdi mdi-key-variant"style={{fontSize:'17px'}}></i>
      </button>
    </span>)
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

  render() {
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
        title: "School ",
        field: "schoolName",
      },
      {
        field: "principal",
        title: "Principal ",
      },
      {
        field: "teacherCount",
        title: "Teacher No.",
      },
      {
        field: "studentCount",
        title: "Student No.",
      },
      {
        field: "city",
        title: "City ",
      },
      {
        field: "state",
        title: "State ",
      },
      {
        name: "action",
        title: "Actions ",
        render: this.renderAction,
      },
    ];
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Manage Schools </h3>
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
              columns={fields}
              options={{ search: true, paging: true, exportButton: true }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageSchool;