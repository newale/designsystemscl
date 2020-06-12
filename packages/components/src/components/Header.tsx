import * as React from 'react'

interface Props {}

const Header: React.FunctionComponent<Props> = () => (
  <header>
    <nav>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>blog</li>
        <li>#social</li>
      </ul>
    </nav>
  </header>
)

export default Header