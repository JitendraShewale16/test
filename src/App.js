import React, { Component } from 'react';
import './App.css';
import ProfileDetails from './ProfileDetails'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/profiledetails"/>
                )}/>
                 <Route exact path='/profiledetails' component={ProfileDetails} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
