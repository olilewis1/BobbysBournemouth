import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path = "/ourstory"> 
          <OurStory />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
