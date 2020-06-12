import * as React from 'react'
import Header from './Header';

interface Props {
  children: any
}

const Layout: React.FunctionComponent<Props> = ({children}) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
)

export default Layout