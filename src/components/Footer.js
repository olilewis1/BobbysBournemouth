import React from 'react'

import bobbysButton from '../assets/B&CO EST 1915 ORANGE.png'
const Footer = () => {
  return (
    <footer className="footer has-background-light-grey	mt-6	">
      <div className="content has-text-centered is-size-7">
        <p className="is-justify-content-center is-size-7-touch">
          <img className=" " src={bobbysButton} alt="bobbys" width="120" height="28" />
        </p>
        <div>
          <a href="mailto: enquiries@bobbysbournemouth.com" className="is-size-5 sis-size-6-touch">enquries@bobbysbournemouth.com</a>
        </div>
      </div>
    </footer>

  )
}

export default Footer
