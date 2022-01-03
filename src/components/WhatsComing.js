import React from 'react'
import pictureOne from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-43_websize.jpg'
import pictureTwo from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-44_websize.jpg'
import pictureThree from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-41_websize.jpg'
import pictureFour from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-34_websize.jpg'

const WhatsComing = () => {
  return (

    <div className="our-story">
      <section className="hero">
        <div className="hero-body is-flex image-height" id="hero-padding">
          <figure className="image">
            <img src={pictureThree} alt="image-1" />
          </figure>
          <figure className="image ">
            <img src={pictureFour} alt="image-3" />
          </figure>
          <figure className="image ">
            <img src={pictureTwo} alt="image-2" />
          </figure>
          <figure className="image ">
            <img src={pictureOne} alt="image-3" />
          </figure>

        </div>
      </section>
      <section className="container has-text-centered">

        <h2 className="mt-6 title">
          What’s coming next

        </h2>
        <p className="m-6 is-size-6-touch">
        There will be a delay bringing other elements of the building back into use, due to the need for building work. Coming in 2022 is a top floor restaurant and roof terrace bar, a bakery, event space, a smokery and craft ale bar, further food offerings and specialist retail. 
        </p>
        <p className="m-6 is-size-6-touch">
        Priority was given to restore the exterior and activate the ground floor to ensure the public face to The Square sent out a positive message in a world of general retail gloom. Public patience will now be needed whilst the work continues but it will be worth the wait!
        </p>
      </section>
    </div>
  )
}

export default WhatsComing
