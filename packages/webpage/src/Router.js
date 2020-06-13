import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Layout} from '@dscl/components';

import Home from './pages';
import Social from './pages/social';
import Blog from './pages/blog';
import About from './pages/about';

const Pages = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/dashboard">
      <Social />
    </Route>
  </Switch>
)

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">blog</Link></li>
      <li><Link to="/social">social</Link></li>
    </ul>
  </nav>
)

const AppRouter = () => (
  <Layout nav={Nav}>
    

  </Layout>
    
);

export default AppRouter;
