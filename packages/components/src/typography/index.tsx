import React from 'react'

interface Props {}

const H1: React.FunctionComponent<Props> = ({children}) => (
  <h1 role='heading'>
    {children}
  </h1>
)

export default H1
