import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

class ManageClassForEmployees extends Component {
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
            name: 'Manr singh',
            email: 'sdfaf@gmail.com',
            mobile: '8976540321',
            category: 'Driver'
          },
          {
            _id: 2,
            name: 'vip',
            email: 'sdfa2f@gmail.com',
            mobile: '8976540321',
            category: 'peon'
          },
          {
            _id: 3,
            name: 'Ram singh',
            email: 'sdfaf4@gmail.com',
            mobile: '8976540321',
            category: 'gate'
          },
          {
            _id: 4,
            name: 'Manr singh',
            email: 'sdfaf55@gmail.com',
            mobile: '8976520321',
            category: 'keeper'
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
              title: "Category",
              field: "category",
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
                <h3 className="page-title"> Class 4 Employees </h3>
                <Link className="nav-link" to="/admin/addclass4employees">
					        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                </Link>
                </div>
                <div className="row">
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
            </div>
        )
    }
}

export default ManageClassForEmployees;