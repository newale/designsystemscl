import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Header, MainNav, Main} from '@dscl/components'

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

export default BasicLayout
