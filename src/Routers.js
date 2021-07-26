import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from './modules/Spinner';
import Dashboard from './modules/superadmin/index';
import AddSchool from './modules/superadmin/AddSchool';
import ManageSchools from './modules/superadmin/ManageSchools';

import Login from './modules/Login';
import Logout from './modules/Logout';
import Error404 from './modules/Error404';
import Error500 from './modules/Error500';

class Routers extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/setupschool" component={AddSchool} />
          <Route path="/manageschool" component={ManageSchools} />
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