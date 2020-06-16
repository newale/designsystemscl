import React from 'react'

// TODO: Update the type in here
interface Props {}

const MainNav: React.FunctionComponent<Props> = ({children}) => (
  <nav>
    <ul>
      {children}
    </ul>
  </nav>
)

export default MainNav
