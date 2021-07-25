import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

class AddSchool extends Component {
    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
      componentDidMount() {
        bsCustomFileInput.init()
        }
      render() {
        return (
          <div>
            <div className="page-header">
              <h3 className="page-title"> Form </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                  <li className="breadcrumb-item active" aria-current="page">School&Admin</li>
                </ol>
              </nav>
            </div>
            <div className="row">

              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Add School&Admin</h4>
                    <p className="card-description">School Info</p>
                    <form className="forms-sample">
                        <Form.Group>
                            <label htmlFor="exampleInputName1">School Name</label>
                            <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <label>School logo</label>
                            <div className="custom-file">
                            <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                            <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputCity1">City</label>
                            <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputCity1">Address</label>
                            <Form.Control type="text" className="form-control" id="exampleAddress1" placeholder="Address..." />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleTextarea1">Textarea</label>
                            <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                        </Form.Group>
                        {/* ========================================================== */}
                        <h4 className="card-title">Admin Info</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">First Name</label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Last Name</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Gender</label>
                                    <div className="col-sm-9">
                                        <select className="form-control">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Date of Birth</label>
                                    <div className="col-sm-9">
                                        <DatePicker className="form-control w-100"
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Category</label>
                                    <div className="col-sm-9">
                                        <select className="form-control">
                                            <option>Super Admin</option>
                                            <option>Admin</option>
                                        </select>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group>
                                    <label className="col-sm-3 col-form-label">Admin Photo</label>
                                    <div className="custom-file col-sm-9">
                                        <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang1" lang="es"/>
                                        <label className="custom-file-label" htmlFor="customFileLang1">Upload image</label>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                      <p className="card-description"> Address </p>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Address 1</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">State 1</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Address 2</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">Postcode</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group className="row">
                            <label className="col-sm-3 col-form-label">City</label>
                            <div className="col-sm-9">
                            <Form.Control type="text"/>
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="row">  
                            <label className="col-sm-3 col-form-label">Country</label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>India</option>
                                <option>Italy</option>
                                <option>Russia</option>
                                <option>Britain</option>
                              </select>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                  
                        {/* ========================================================== */}
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}

export default AddSchool;