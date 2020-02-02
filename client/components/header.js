import React from 'react';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';
import Home from '../main_home';
import App from '../main_cs';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/main_cs">Course Search</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/main_cs">
            <AppHeader />
          </Route>
          <Route path="/">
            <HomeHeader />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function HomeHeader() {
  return <h2>Home</h2>;
}

function AppHeader() {
  return <h2>Course Search</h2>;
}
