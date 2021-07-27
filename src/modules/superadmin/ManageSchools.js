import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import FilterableTable from 'react-filterable-table';
import Pager from 'react-pager';
import { Tooltip } from "reactstrap";

class ManageSchool extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      tooltipOpen: false
    }
  }

  componentDidMount(){
    let re = [
      {
        _id: 1,
        schoolName:'S.D.M school',
        principal:'Ashok',
        city:'Amritsar',
        state:'Punjab'
      },
      {
        _id: 2,
        schoolName:'Shivalic public school',
        principal:'Jitu',
        city:'Amritsar',
        state:'Punjab'
      }
    ];
    this.setState({records: re})
  }

  renderAction = (props, index) => {
    
    return(<span>
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
        name: "Deactive",
        displayName: "",
        inputFilterable: true,
        exactFilterable: true,
        render: this.DeactiveAction,
      },
      {
        name: "schoolName",
        displayName: "School ",
        inputFilterable: true,
        sortable: true,
      },
      {
        name: "principal",
        displayName: "Principal ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        name: "city",
        displayName: "City ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        name: "state",
        displayName: "State ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        name: "action",
        displayName: "Actions ",
        inputFilterable: true,
        exactFilterable: true,
        render: this.renderAction,
      },
    ];
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> #Schools </h3>
        </div>
        <div className="row">
          
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">School List</h4>
                
                <FilterableTable
                  namespace="school_records"
                  initialSort="schoolName"
                  data={this.state.records}
                  fields={fields}
                  topPagerVisible={false}
                  pageSize={10}
                  pageSizes={[10, 20, 50, 100]}
                  autofocusFilter={true}
                  noRecordsMessage="There are no School Records"
                  noFilteredRecordsMessage="No Recording match your filters!"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageSchool;