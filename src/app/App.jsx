import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Homepage from "../pages/Homepage";
import Items from "../pages/Items";

const App = () => {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/" component={Homepage}/>
                  <Route exact path="/items" component={Items}/>
              </Switch>

          </Router>
      </>
  );
};
export default App;