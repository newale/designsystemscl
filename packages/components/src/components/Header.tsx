import * as React from 'react';

interface Props {
  children: any,
}

const Header: React.FunctionComponent<Props> = ({children}) => (
  <header>
    {children}
  </header>
)

export default Header