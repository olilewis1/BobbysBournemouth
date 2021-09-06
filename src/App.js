import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Navbar from './components/Navbar'
import OurStory from './components/OurStory'
import Footer from './components/Footer'
import Careers from './components/Careers'
import WhatsInside from './components/WhatsInside'
import WhatsComing from './components/WhatsComing'
import ScrollToTop from './components/ScrollToTop'
import Refund from './components/Refund'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ourstory">
          <ScrollToTop>
            <OurStory />
          </ScrollToTop>
        </Route>
        <Route exact path='/careers'>
          <Careers />
        </Route>
        <Route exact path='/whatsinside'>
          <WhatsInside />
        </Route>
        <Route exact path='/whatscoming'>
          <ScrollToTop>
            <WhatsComing />
          </ScrollToTop>
        </Route>
        <Route exact path='/refund'>
          <ScrollToTop>
            <Refund />
          </ScrollToTop>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
