import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login'
import {withRouter} from 'react-router'
import pageNotFound from './pages/pageNotFound'
class App extends React.Component {
  render() {
    return (

    <Switch>
     <Route path ='/login' component={Login} />
      <Route path ='/conta' component={Signup} />
      <Route  component={pageNotFound} />
    </Switch>

    )
  }
}

export default withRouter(App);
