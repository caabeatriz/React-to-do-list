import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './pages/home'
import Signup from './pages/signup';
import Login from './pages/login';
import pageNotFound from './pages/pageNotFound';
import Navbar from './components/navbar';
import {startServer} from './infra/apiconfig'

class App extends React.Component {
  render() {
    startServer()
    return (

      <React.Fragment>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/conta' component={Signup} />          
          <Route component={pageNotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
