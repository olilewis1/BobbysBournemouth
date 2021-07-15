import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import Careers from './components/Careers'
import WhatsInside from './components/WhatsInside'
import WhatsComing from './components/WhatsComing'
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
        <Route exact path='/whatsinside'>
          <WhatsInside />
        </Route>
        <Route exact path='/whatscoming'>
          <WhatsComing />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
