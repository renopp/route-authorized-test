import Login from "./pages/login/Login";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Logout from "./pages/status/Logout";
import Transaksi from "./pages/transaksi/Transaksi";
import AuthorizedRoute from "./AuthorizedRoute";
import RestrictedWrapper from "./RestrictedWrapper";
import { AuthorizedContextProvider } from "./AuthorizedContext";

function App() {
  return (
    <AuthorizedContextProvider>
      <Router>
        <Switch>
          <Route path="/signin" exact>
            <RestrictedWrapper>
              <Login />
            </RestrictedWrapper>
          </Route>
          <AuthorizedRoute
            path="/transaksi"
            exact
            component={Transaksi}
          ></AuthorizedRoute>
          <Route path="/signout" exact component={Logout} />
          <AuthorizedRoute path="/" exact component={Home}></AuthorizedRoute>
        </Switch>
      </Router>
    </AuthorizedContextProvider>
  );
}

export default App;
