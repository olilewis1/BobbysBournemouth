import React, { useState } from 'react'
// import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import facebook from '../assets/b763699fd1fa3bfb374442593ae642e1.png'
import bobbysButton from '../assets/bobyysbutton-darker-orange.png'
// import instagram from '../assets/instagram_icon_138461.png'
const Navbar = () => {

  const [addClass, setAddClass] = useState(false)
  const handleToggle = (event) => {
    console.log(event)
    setAddClass('is-active')
    if (addClass === 'is-active') { 
      setAddClass('')
    }
  }

  return (
    <>
      <nav className="navbar navvy" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <img src={bobbysButton} alt="" width="112" height="28" className="pt-2" />
          </Link>

          <a role="button" className={`navbar-burger ${addClass}`} aria-label="menu" aria-expanded="false" onClick={handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-center ">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>

            </div>

          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar
