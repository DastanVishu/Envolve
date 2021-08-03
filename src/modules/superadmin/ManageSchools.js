import React, { Component, forwardRef } from 'react'
import MaterialTable from "material-table";

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
      <button type="button" className="btn btn-outline-success" style={{padding:'8px'}}>
        <i className="mdi mdi-upload" style={{fontSize:'17px'}}></i>
      </button>
      <button type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
        <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
      </button>
      
      <button type="button" className="btn btn-outline-primary" style={{padding:'8px'}}>
        <i className="mdi mdi-account-key"style={{fontSize:'17px'}}></i>
      </button>

      <span>
      <button type="button" className="btn btn-outline-light" style={{padding:'8px'}}>
        <i className="mdi mdi-key-variant"style={{fontSize:'17px'}}></i>
      </button>
      
      </span>

    </span>)
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