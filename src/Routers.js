import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './modules/Spinner';
// Super admin
import Dashboard from './modules/superadmin/index';
import AddSchool from './modules/superadmin/AddSchool';
import ManageSchools from './modules/superadmin/ManageSchools';

// school admin
import AdminDashboard from './modules/schooladmin/Dashboard/AdminDashboard';
import ClassInformation from './modules/schooladmin/ClassInformation/ClassInformation';
import ManageBusData from './modules/schooladmin/ManageBusData/ManageBusData';
import ManageFeeData from './modules/schooladmin/MasterData/ManageFeeData';
import ManageStaffData from './modules/schooladmin/MnagageStaffData/ManageStaffData';
import ManageStudentData from './modules/schooladmin/ManageStudentsData/ManageStudentData';
import AddStudent from './modules/schooladmin/ManageStudentsData/AddStudent';
import ManageSubjects from './modules/schooladmin/ManageSubjects/ManageSubjects';
import AccessLevels from './modules/schooladmin/AccessLevels/AccessLevels';
import ManageClassForEmployees from './modules/schooladmin/ManageClass4Employees/ManageClassForEmployees';
import AddStaff from './modules/schooladmin/MnagageStaffData/AddStarff';
import AddClass4Employees from './modules/schooladmin/ManageClass4Employees/AddClass4Employees';
import AddAccessLevels from './modules/schooladmin/AccessLevels/AddAccessLevels';
import ManageConcessionData from './modules/schooladmin/MasterData/ManageConcessionData';
import CreateFees from './modules/schooladmin/MasterData/CreateFees';
import StudentsFees from './modules/schooladmin/ManageFeeData/StudentsFees';
import SubmitStudentFee from './modules/schooladmin/ManageFeeData/SubmitStudentFee';
import AddBusRoute from './modules/schooladmin/ManageBusData/AddBusRoute';
import ManageCategoryData from './modules/schooladmin/MasterData/ManageCategoryData';

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
          <Route path="/admin/masterdata/feedata" component={ManageFeeData} />
          <Route path="/admin/class4employees" component={ManageClassForEmployees} />
          <Route path="/admin/staffmembers" component={ManageStaffData} />
					<Route path="/admin/accesslevels" component={AccessLevels} />
          <Route path="/admin/subjects" component={ManageSubjects} />
          <Route path="/admin/busdata" component={ManageBusData} />
          <Route path="/admin/addstaff" component={AddStaff} />
          <Route path="/admin/addclass4employees" component={AddClass4Employees} />
          <Route path="/admin/addaccesslevels" component={AddAccessLevels} />
          <Route path="/admin/masterdata/createfees" component={CreateFees} />
          <Route path="/admin/studentsfees" component={StudentsFees} />
          <Route path="/admin/submitstudentfee" component={SubmitStudentFee} />
					<Route path="/admin/addbusroute" component={AddBusRoute} />
					<Route path="/admin/masterdata/category" component={ManageCategoryData} />
          <Route path="/admin/masterdata/concession" component={ManageConcessionData} />

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