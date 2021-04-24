import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import ShowDataPage from "./pages/ShowDataPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={RegisterPage} />
        <Route exact path="/hospitel-reh-app" component={RegisterPage} />
        <Route exact path="/hospitel-reh-app/showdata" component={ShowDataPage} />
        <Route
          render={function () {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="error-template">
                      <h1>Oops!</h1>
                      <h2>404 Not Found</h2>
                      <div className="error-details">
                        Sorry, an error has occured, Requested page not found!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
