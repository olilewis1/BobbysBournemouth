import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import Careers from './components/Careers'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ourstory">
          <OurStory />
        </Route>
        <Route exact path='/careers'>
          <Careers />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
