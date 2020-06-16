import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import {Header, MainNav, Main} from '@dscl/components'
import * as serviceWorker from './serviceWorker'
import './index.css'

// Pages
import Home from './pages';
import Social from './pages/social';
import Blog from './pages/blog';
import About from './pages/about';

const BasicLayout = ({ children }) => (
  <>
    <Header>
      <MainNav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/social'>Social</Link></li>
      </MainNav>
    </Header>
    <Main>
      {children}
    </Main>
  </>
)

// TODO This is wrong
const Application = ({children}) => (
  <Router>
    <Header>
      <MainNav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/social'>Social</Link></li>
      </MainNav>
    </Header>
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/social" component={Social} />
      </Switch>
    </Main>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
