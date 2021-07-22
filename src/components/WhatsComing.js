import React from 'react'
import pictureOne from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-43_websize.jpg'
import pictureTwo from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-44_websize.jpg'
import pictureThree from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-41_websize.jpg'
import pictureFour from '../assets/comingsoon/2021_BOBBYS_RESTORATION_JB_-34_websize.jpg'

const WhatsComing = () => {
  return (

    <div className="our-story">
      <section className="hero">
        <div className="hero-body is-flex image-height">
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
          Bobby’s Brasserie, Bar and Rooftop Gardens

        </h2>
        <p className="m-6 is-size-6-touch">
          Draw back the curtain. Bobby’s is back. An iconic destination reborn.

          Timeless fashionistas. Evocative Design. The Roaring twenties. A Decadent Era.

          Now get ready to experience Bobby’s reinvigorated for the modern age.

          Let us introduce you to the top floor; Bobby’s Brasserie, Bar & Rooftop Gardens.

          Experience the Brasserie restaurant, Sun Lounge speakeasy & our very own Plantation Rooftop Garden bar.

          Coming Soon. Late Spring 2022.


        </p>
        <h2 className="mt-6 title">
          THE MARKET HALL

        </h2>
        <p className="m-6 is-size-6-touch">
          Housed in the Old Bobby & Co Department store The Bobby & Co Market Hall will combine a striking mix of Art Deco and regency design with innovative, fresh and independent food traders. The Market Hall is set to feature independent Food offerings with cuisines from around the world and will be spread across the entire first floor alongside Bobby’s Bar, the Deli, Coffee Lounge and Bobby’s Emporium Liquor store nestled amongst a mix of artisan traders. The Bobby & Co Market Hall is set to be a food & drink Mecca in the centre of Bournemouth. With live music, a communal bar and coffee lounge and seating for up to 400 people - it will be a truly unique and exciting setting. Whether it be for a coffee in the morning, a quick lunch or socialising with cocktails and food with friends in the evening. The Market Hall as part of Bobby & Co’s department store regeneration is about to set Bournemouth on the map.


        </p>
        <h2 className="mt-6 title">
        DISTRICT
        </h2>
        <p className="m-6 is-size-6-touch">
          Information incoming...

        </p>
      </section>
    </div>
  )
}

export default WhatsComing