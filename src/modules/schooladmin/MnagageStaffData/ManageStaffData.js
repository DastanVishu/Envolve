import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

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
                <h3 className="page-title"> Staff Data </h3>
                <Link className="nav-link" to="/admin/addstaff">
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

export default ManageStaffData;