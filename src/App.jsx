import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth } from './config/firebase'

import AuthLayout from "layouts/Auth/Auth.js";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

class App extends Component {

    state = {
      firebaseUser: null
    }

    render() {
      return <>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          <Redirect from="/" to="/auth/lock-screen" />
        </Switch>
      </BrowserRouter>,
      </>
    }
}

export default App