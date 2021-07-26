import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

class ManageSchool extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">School Table</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">School List</h4>
                {/* <p className="card-description"> Add className <code>.table-dark</code>
                </p> */}
                <div className="table-responsive">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> School name </th>
                        <th> Edit Details </th>
                        <th> Active/Deactivate </th>
                        <th> login Access </th>
                        <th> Password </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td>
                          <button type="button" className="btn btn-outline-warning">
                            <i className="mdi mdi-border-color"></i>
                          </button>
                        </td>
                        <td>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" defaultChecked /> Deactivate
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-primary">
                            Admin login
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-light">
                            <i className="mdi mdi-key-variant"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Beck </td>
                        <td>
                          <button type="button" className="btn btn-outline-warning">
                            <i className="mdi mdi-border-color"></i>
                          </button>
                        </td>
                        <td>
                        <div className="form-check form-check-danger">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" /> Deactivate
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-primary">
                            Admin login
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-light">
                            <i className="mdi mdi-key-variant"></i>
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageSchool;