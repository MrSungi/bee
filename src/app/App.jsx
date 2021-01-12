import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Homepage from "../pages/Homepage";
import Items from "../pages/Items";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs";
import Apiary from "../pages/Apiary";
import Login from "../pages/Login";

const App = () => {
  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/" component={Homepage}/>
                  <Route exact path="/apiary" component={Apiary}/>
                  <Route exact path="/items" component={Items}/>
                  <Route exact path="/contacts" component={Contacts}/>
                  <Route exact path="/about" component={AboutUs}/>
                  <Route exact path="/login" component={Login}/>
              </Switch>

          </Router>
      </>
  );
};
export default App;