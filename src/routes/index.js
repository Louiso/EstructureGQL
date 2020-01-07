import React from 'react'
import { Router } from "@reach/router"
import Home from '../containers/Home'
const Root = () => {
  return(
    <Router>
      <Home path="/"/>
    </Router>
  )
}

export default Root