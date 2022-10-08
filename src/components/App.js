import React, { Suspense } from "react";
import { connect } from "react-redux";
import {  BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";

//Components
import Loading from "./Loading/Loading";

/* PAGES */
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Error from "../pages/ErrorPage";

class App extends React.Component {
  render() {
    return (

        <Suspense fallback={<Loading />}>
          <HashRouter >

              <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route component={Error} />
              </Switch>

          </HashRouter>
        </Suspense>

    );
  }
}

// Redux
const mapStateToProps = (state) => ({
  currentUser: state.authReducer.currentUser,
  accessToken: state.authReducer.accessToken,
});

export default connect(mapStateToProps)(App);
