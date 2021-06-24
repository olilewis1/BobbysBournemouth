import React, { useState } from 'react'
// import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import facebook from '../assets/b763699fd1fa3bfb374442593ae642e1.png'
import bobbysButton from '../assets/B&Co EST 1915-01.png'
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

  // const [addModal, setAddModal] = useState('')

  // const handleModal = () => {
  //   if (addModal === '')
  //     setAddModal('is-active')
  //   if (addModal === 'is-active') {
  //     setAddModal('')
  //   }
  // }

  return (
    <>
      <nav className="navbar navvy" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={bobbysButton} alt="" width="140" height="28" className="pt-2" />
          </div>
          <div role="button" className={`navbar-burger mt-5 ${addClass}`} aria-label="menu" aria-expanded="false" onClick={handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${addClass}`}>
          <div className="navbar-end ">
            <Link to="/" className=" navbar-item">
              <p className="has-text-black">
                Home
              </p>
            </Link>
            <Link to="/ourstory" className=" navbar-item">
              <p className="has-text-black">
                The Story
              </p>
            </Link>
            <Link to="/careers" className="navbar-item">
              <p className="has-text-black " >
                Careers
              </p>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {/* <Link to={{ pathname: 'https://www.facebook.com/bobbysbournemouth/' }} > <img className="image-buttons" src={facebook} alt="image" /></Link> */}
                <a href="https://www.facebook.com/bobbysbournemouth/" className="navbar-item"><img className="image-buttons" src={facebook} alt="image" /></a>
                <a href="https://www.instagram.com/bobbysbournemouth/" className="navbar-item"><img className="image-buttons" src={instagram} alt="image" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`modal ${addModal}`}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <p> Coming soon.</p>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={handleModal}></button>
        </div> */}
      </nav >
    </>
  )
}

export default Navbar
