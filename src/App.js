import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Auth, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  state = {
    SplitMe: null
  }

  showSplitMe = () => {
    import('components/SplitMe').then(({ default: SplitMe}) => {
      this.setState({
        SplitMe
      });
    });
  }

  render() {
    const {SplitMe} = this.state;
    return (
      <div>
        <Menu/>
        {SplitMe && <SplitMe/>}
        <button onClick={this.showSplitMe}>Click me</button>
        <Route exact path='/' component={Home}/>
        <Route path='/posts' component={Posts}/>
        <Switch>
          <Route path='/auth/:name' component={Auth} />
          <Route path='/auth' component={Auth}/>
        </Switch>
      </div>
    );
  }
}

export default App;
