import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './screens/home';
import Details from './screens/details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Redirect from="*" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
