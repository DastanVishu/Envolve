import React, { Component, forwardRef } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import FilterableTable from 'react-filterable-table';
import Pager from 'react-pager';
import { Tooltip } from "reactstrap";
import MaterialTable from "material-table";
import { 
  AddBox,
  ArrowDownward,
  Check,
  Clear,
  DeleteOutline,
  ChevronRight,
  Edit,
  SaveAlt,
  FilterList,
  FirstPage,
  LastPage,
  ChevronLeft,
  Search,
  Remove,
  ViewColumn
} from "@material-ui/icons";

class ManageSchool extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      tooltipOpen: false,
      tableIcons: {}
    }
  }

  componentDidMount(){
    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
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
    this.setState({records: re, tableIcons})
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
        // name: "",
        // field: "Deactive",
        name: "action",
        title: "",
        inputFilterable: true,
        exactFilterable: true,
        render: this.DeactiveAction,
      },
      {
        title: "School ",
        field: "schoolName",
        inputFilterable: true,
        sortable: true,
      },
      {
        field: "principal",
        title: "Principal ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        field: "city",
        title: "City ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        field: "state",
        title: "State ",
        inputFilterable: true,
        exactFilterable: true,
        sortable: true,
      },
      {
        name: "action",
        title: "Actions ",
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
                
              <MaterialTable
              title="School List"
              icons={this.state.tableIcons}
              data={this.state.records}
              columns={fields}
              options={{ search: true, paging: true, filtering: true, exportButton: true }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageSchool;