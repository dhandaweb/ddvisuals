import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AlertPage from './../Pages/Alert'
import ButtonPage from './../Pages/Button'

function Main() {
  return (
    <div>
      <Switch>
        <Route path="/alert">
          <AlertPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/">
          This is the default page .
          </Route>
      </Switch>
    </div>
  );
}

export default Main;