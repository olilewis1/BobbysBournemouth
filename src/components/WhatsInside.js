import React from 'react'
import pictureOne from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-01.png'
import pictureTwo from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-02.png'
import pictureThree from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-03.png'
import pictureFour from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-04.png'
import pictureFive from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-05.png'
import pictureSix from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-06.png'
import pictureSeven from '../assets/SOCIAL MEDIA BUTTONS_AVATARS/CIRCLE COL OP-08.png'

const WhatsInside = () => {
  return (

    <div className="our-story">
      <section className="hero">
        <div className="hero-body is-flex image-height">
          <figure className="image">
            <img src={pictureThree} alt="image-1" />
          </figure>
          <figure className="image ">
            <img src={pictureTwo} alt="image-2" />
          </figure>
          <figure className="image ">
            <img src={pictureOne} alt="image-3" />
          </figure>
          <figure className="image ">
            <img src={pictureFour} alt="image-3" />
          </figure>
          <figure className="image ">
            <img src={pictureFive} alt="image-3" />
          </figure>
          <figure className="image ">
            <img src={pictureSix} alt="image-3" />
          </figure>
          <figure className="image ">
            <img src={pictureSeven} alt="image-3" />
          </figure>
        </div>
      </section>
      <section className="container has-text-centered">

        <h2 className="mt-6 title">
          Beauty Hall
        </h2>
        <p className="m-6 is-size-6-touch">
          The Bobby’s Beauty Hall offers a fresh new look at health and wellbeing retail. Housing the global brands that we all know and love as well as a dedicated section for local, sustainable and conscious beauty and health products, many of which are exclusive to Bobby’s. The Beauty Hall has been designed to be full of greenery and warm wooden surfaces to create a light and airy feel so you can relax and enjoy your shopping experience.  Our performance area sits immediately adjacent to the Beauty Hall where we host events including product sampling, make-up tutorials and where founders come along and tell the story behind the development of their products and how to use them.

        </p>
        <h2 className="mt-6 title">
          Bobby’s Ice Cream Parlour
        </h2>
        <p className="m-6 is-size-6-touch">
          A small, locally run parlour set within the historic Bobby’s of Bournemouth building. Our friendly team will be serving up a selection of delicious homemade ice cream, freshly ground coffee (from local legends Bad Hand) and hand baked cookies every day of the week and welcome all to pop in.

        </p>
        <h2 className="mt-6 title">
          Drool
        </h2>
        <p className="m-6 is-size-6-touch">
          The summer pop-up that has got both tongues and tails wagging: DROOL the first food hall devoted entirely to dogs. Featuring a cake shop, a “Lick ‘n’ Mix station”,a doggy tuck shop, a dog ball recycling centre (for the eco conscious canine in your life), Fish & Chip Flavour Dog Treats, Seaside Theme Biscuits, “Cherry Barkwells”, Dog Doughnuts and even Liver Cakes. With the abundance of new dog owners over the pandemic, this is the must visit destination this summer for you and your four legged friend.

        </p>
        <h2 className="mt-6 title">
          Sushi Bar
        </h2>
        <p className="m-6 is-size-6-touch">
          Information incoming...

        </p>
        <h2 className="mt-6 title">
          South Coast Makers Shop

        </h2>
        <p className="m-6 is-size-6-touch">
          Discover South Coast Makers shop which will be showcasing a varied collection of one-of-a-kind art, design and craft work handmade by brilliant Makers from the South Coast.

          Our ever changing collection includes ceramics, woodwork, homewares, stationery, greeting cards, candles, prints alongside locally produced food and drink such as artisan gin, handmade fudge and local honey.
        </p>
        <h2 className="mt-6 title">
          Art Gallery

        </h2>
        <p className="m-6 is-size-6-touch">
          Information incoming...

        </p>

      </section>
    </div>
  )

}

export default WhatsInside
