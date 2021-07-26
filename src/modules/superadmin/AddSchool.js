import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";

class AddSchool extends Component {
    state = {
        startDate: new Date(),
        color: '#ffffff',
        fontcolor: '#ffffff',
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
                    <h4 className="card-title">Setup School</h4>
                    <p className="card-description">School Info</p>
                    <form className="forms-sample">
                        <Form.Group>
                            <label htmlFor="exampleInputName1">School Name</label>
                            <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                        </Form.Group>
                        <div className="row">
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
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">State</label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                      <option>Punjab</option>
                                      <option>Bihar</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">City</label>
                                  <div className="col-sm-9">
                                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                                  </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Pin code</label>
                                  <div className="col-sm-9">
                                    <Form.Control type="text" className="form-control" id="exampleInputName12" placeholder="Pin code" />
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        <Form.Group>
                            <label htmlFor="exampleTextarea1">Address</label>
                            <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                        </Form.Group>

                        {/* ===================================== principal ================================== */}
                        <h4 className="card-title">Principal info</h4>
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
                                <label className="col-sm-3 col-form-label">Mobile No.</label>
                                <div className="col-sm-9">
                                    <Form.Control  type="number" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="email" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        {/* ===================================== /principal/ ================================== */}

                        {/* ===================================== logo/color scheme for schools ====================================== */}
                        
                        <h4 className="card-title">logo/color scheme for school</h4>
                        <Form.Group>
                            <label>School logo</label>
                            <div className="custom-file">
                            <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                            <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                            </div>
                        </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">color code #</label>
                                <div className="col-sm-9">
                                  <Form.Control type="text" className="form-control" id="exampleInputName1" value={this.state.color} placeholder="Name" />
                                  <HexColorPicker color={this.state.color} onChange={(e) => this.setState({color: e})} />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">font color code #</label>
                                    <div className="col-sm-9">
                                      <Form.Control type="text" className="form-control" id="exampleInputName1" value={this.state.fontcolor} placeholder="Name" />
                                      <HexColorPicker color={this.state.fontcolor} onChange={(e) => this.setState({fontcolor: e})} />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        {/* ===================================== / logo/color scheme for schools / ====================================== */}

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
                                <label className="col-sm-3 col-form-label">Mobile No.</label>
                                <div className="col-sm-9">
                                    <Form.Control  type="number" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <Form.Control type="email" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">UserName</label>
                              <div className="col-sm-9">
                              <Form.Control type="text"/>
                              </div>
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">Password</label>
                              <div className="col-sm-9">
                              <Form.Control type="password"/>
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