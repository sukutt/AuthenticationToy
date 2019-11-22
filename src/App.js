import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Auth } from 'pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}/>
        <Switch>
          <Route path='/auth/:name' component={Auth} />
          <Route path='/auth' component={Auth}/>
        </Switch>
      </div>
    );
  }
}

export default App;
