import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './modules/Spinner';
// Super admin
import Dashboard from './modules/superadmin/index';
import AddSchool from './modules/superadmin/AddSchool';
import ManageSchools from './modules/superadmin/ManageSchools';

// school admin
import AdminDashboard from './modules/schooladmin/AdminDashboard';
import ClassInformation from './modules/schooladmin/ClassInformation';
import ManageBusData from './modules/schooladmin/ManageBusData';
import ManageFeeData from './modules/schooladmin/ManageFeeData';
import ManageStaffData from './modules/schooladmin/ManageStaffData';
import ManageStudentData from './modules/schooladmin/ManageStudentData';
import AddStudent from './modules/schooladmin/AddStudent';
import ManageSubjects from './modules/schooladmin/ManageSubjects';
import AccessLevels from './modules/schooladmin/AccessLevels';
import ManageClassForEmployees from './modules/schooladmin/ManageClassForEmployees';

// common
import Login from './modules/Login';
import Logout from './modules/Logout';
import Error404 from './modules/Error404';
import Error500 from './modules/Error500';

class Routers extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          {/* supper admin */}
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/setupschool" component={AddSchool} />
          <Route path="/manageschool" component={ManageSchools} />

          {/* school admin */}
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/admin/classes" component={ClassInformation} />
          <Route path="/admin/students" component={ManageStudentData} />
					<Route path="/admin/addstudent" component={AddStudent} />
          <Route path="/admin/feedata" component={ManageFeeData} />
          <Route path="/admin/class4employees" component={ManageClassForEmployees} />
          <Route path="/admin/staffmembers" component={ManageStaffData} />
          <Route path="/admin/accesslevels" component={AccessLevels} />
          <Route path="/admin/subjects" component={ManageSubjects} />
          <Route path="/admin/busdata" component={ManageBusData} />

          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/" component={Login} />
          <Route path="/error-404" component={ Error404 } />
          <Route path="/error-500" component={ Error500 } />
        </Switch>
      </Suspense>
    );
  }
}

export default Routers;