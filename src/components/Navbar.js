import React from 'react'
// import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import facebook from '../assets/b763699fd1fa3bfb374442593ae642e1.png'
import bobbysButton from '../assets/bobyysbutton-darker-orange.png'
import instagram from '../assets/instagram_icon_138461.png'
const Navbar = () => {
  return (

    <nav className="navbar is-white	">
      <div className="container is-flex is-justify-content-space-between	">
        <div className="navbar-start ">
          <div className="navbar-brand image is-128x128 is-64x64">
            <Link to="/"> <img src={bobbysButton} alt="" />
            </Link>
          </div>

        </div>
        <div className="columns is-vcentered is-hidden-mobile">
          {/* <div className="column"></div> */}<div className=""> </div>
          <h1 className="center column ml-2 is-size-6-mobile	">Coming Soon.
          </h1>
        </div>
        <div className="navbar-end is-flex ">
          <a href="https://www.facebook.com/bobbysbournemouth/"><img className="mt-5 is-centered is-64x64 image" src={facebook} alt="" /></a>
          <a href="https://www.instagram.com/bobbysbournemouth/"><img className="mt-5 is-centered is-64x64 image" src={instagram} alt="" /></a>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
