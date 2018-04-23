import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound } from '../index';

class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Home} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
export default index;
