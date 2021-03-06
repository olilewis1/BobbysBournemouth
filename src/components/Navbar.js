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
  const [addClassModal, setAddClassModal] = useState('is-active')
  const handleClick = (event) => {
    console.log(event)
    if (addClassModal === 'is-active') {
      setAddClassModal('')
    }
    if (addClassModal === '') {
      setAddClassModal('is-active')
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
          <div className="navbar-item ">
            <Link to="/" className="  ">
              <img src={bobbysButton} alt="" width="140" height="28" className="navvvy-item pt-2" />
            </Link>
          </div>
          <div role="button" className={`navbar-burger mt-5 ${addClass}`} aria-label="menu" aria-expanded="false" onClick={handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navbarBasicExample" className={`navbar-menu ${addClass}`}>
          <div className="navbar-end ">


            <Link to="/whatsinside" className=" navbar-item ">
              <p className="has-text-black button-nav">
                What’s Inside
              </p>
            </Link>
            <a className=" navbar-item is-hidden-touch">
              <p className="has-text-black">
                -
              </p>
            </a>
            <a onClick={handleClick} className=" navbar-item button-nav navbar-item has-text-black"> Opening Times
            </a>
            <a className=" navbar-item is-hidden-touch">
              <p className="has-text-black">
                -
              </p>
            </a>
            <a href="https://www.whatsonatbobbys.com" className=" navbar-item button-nav navbar-item has-text-black"> News
            </a>
            <a className=" navbar-item is-hidden-touch">
              <p className="has-text-black">
                -
              </p>
            </a>
            <a href="https://www.whatsonatbobbys.com/the-beauty-hall" className=" navbar-item button-nav navbar-item has-text-black"> Beauty Hall
            </a>
            <a className=" navbar-item is-hidden-touch">

            </a>
            <div className="navbar-item">
              <section className="handle-modal">
                <div className={`modal ${addClassModal}`}>
                  <div className="modal-background"></div>
                  <div className="modal-content ">
                    <div className="modal-card-head">
                      <h1 className="modal-card-title has-text-centered is-size-6-touch">

                      </h1>
                    </div>
                    <div className="modal-card-body has-text-centered" >
                      <p className="mt-4 " id="modal-homepage">
                        Opening Times                     </p>
                      <p className="mt-4 " id="modal-homepage">
                        Monday-Saturday: 10:00AM-5:30PM
                      </p>
                      <p className="mt-4 " id="modal-homepage">
                        Sunday: 10:30AM-4:30PM
                      </p>
                      <p className="mt-4 smaller"  id="">
                        *Please note independent concession opening times may vary. Check their independent sites for more details.
                      </p>
                      <p className="mt-4 " id="modal-homepage">
                        Re-opening
                      </p>
                      <p className="mt-4 " id="modal-homepage">
                        From Saturday 18th June, The Venue Beauty Salon will be partially re-opening and offering an array of beauty treatments and services. Follow their instagram or check their website for their latest offerings.
                      </p>
                    </div>
                    {/* <div className="modal-card-foot modal-card-title">Statement from Ashley Nicholson – Director of Verve Properties </div> */}
                  </div>
                  <button onClick={handleClick} className="modal-close is-large" aria-label="close"></button>
                </div>
              </section>
            </div>
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
