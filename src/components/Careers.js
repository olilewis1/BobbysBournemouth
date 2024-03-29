import React from 'react'

import pictureOne from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 1-min.JPG'
// import pictureTwo from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 2.JPG'
// import pictureThree from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 3.JPG'
import pictureFour from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 4-min.JPG'
import pictureFive from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 5-min.JPG'
import pictureSix from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 6-min.JPG'
import beautyAssociate from '../assets/rewebpage/Beauty Associate copy.pdf'
// import beautySeniorAssociate from '../assets/rewebpage/Beauty Senior Associate.pdf'
// import stockMerchandiser from '../assets/rewebpage/Beauty Stock Merchandiser.pdf'
// import beautyTeamleader from '../assets/rewebpage/Beauty Team Leader.pdf'
// import droolGeneralAssissant from '../assets/rewebpage/Drool General Assistant.pdf'
// import iceCreamGeneralAssisstant from '../assets/rewebpage/Ice Cream Parlour General Assistant.pdf'
// import iceCreamTeamLeader from '../assets/rewebpage/Ice Cream Parlour Team Leader.pdf'


const Careers = () => {
  return (
    <div>
      <div className="our-story">
        <section className="hero">
          <div className="hero-body is-flex image-height" id="hero-padding">
            {/* <figure className="image">
              <img src={pictureThree} alt="image-1" />
            </figure>
            <figure className="image ">
              <img src={pictureTwo} alt="image-2" />
            </figure> */}
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
          </div>
        </section>

        <section className="container has-text-centered">
          <h1 className="title">Vacancies Available
          </h1>
          <h4 className="is-size-4-touch">
            Application Instructions:
          </h4>
          <div className="m-6 is-size-6-touch">
            Please make your application with a covering email and CV to <a href="mailto: careers@bobbysbournemouth.com" className="is-size-6-touch">careers@bobbysbournemouth.com</a>. With your application please also specify
            the role you are applying to, availability of hours you can work, your flexibility of when you can work, and whether you are eligible to
            work in the UK.
            <p className="mt-3 is-size-6-touch">
              All roles are based at Bobby’s, The Square, Bourne Avenue, Bournemouth, BH2 5LY
            </p>
          </div>
          <section className="beauty">
            <h2 className="mt-6 title">
              Beauty Hall
            </h2>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              Associate – Full time, part time and weekend hours available to temporary positions available
            </h4>
            <div className="m-6 is-size-6-touch">
              Your role is to support the Bobby’s Beauty team in an exciting new beauty hall venture at the Iconic Bobby’s building in
              Bournemouth town centre. Fundamentally, you will provide first class customer service through utilising your extensive
              knowledge of beauty products to drive sales and profit.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={beautyAssociate} className="is-size-6-touch" download>DOWNLOAD PDF </a>

                </p>
              </div>

            </div>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              Brow Threader - Full time
            </h4>

            <div>
              <p className="mt-6 is-size-6-touch ">
              </p></div>

          </section>

        </section>
      </div>
    </div>
  )
}

export default Careers
