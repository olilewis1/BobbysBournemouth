import React, { useState } from 'react'
// import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import facebook from '../assets/b763699fd1fa3bfb374442593ae642e1.png'
import bobbysButton from '../assets/B&CO EST 1915 ORANGE.png'
import instagram from '../assets/instagram_icon_138461.png'
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

          <img src={bobbysButton} alt="" width="140" height="28" className="pt-2" />

          <a role="button" className={`navbar-burger mt-5 ${addClass}`} aria-label="menu" aria-expanded="false" onClick={handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${addClass}`}>
          <div className="navbar-end ">
            <Link to="/" className=" navbar-item">
              <a className="has-text-black">
                Home
              </a>
            </Link>

            <Link to="/ourstory" className=" navbar-item">
              <a className="has-text-black">
                Our Story
              </a>
            </Link>
            <Link to="/" className=" navbar-item">
              <a className="has-text-black">
                Careers
              </a>
            </Link>

          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="https://www.facebook.com/bobbysbournemouth/" className="navbar-item"><img className="image-buttons" src={facebook} alt="image" /></a>
                <a href="https://www.instagram.com/bobbysbournemouth/" className="navbar-item"><img className="image-buttons" src={instagram} alt="image" /></a>
              </div>
            </div>
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navbar
