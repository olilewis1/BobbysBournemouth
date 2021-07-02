import React from 'react'

import pictureOne from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 1-min.JPG'
// import pictureTwo from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 2.JPG'
// import pictureThree from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 3.JPG'
import pictureFour from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 4-min.JPG'
import pictureFive from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 5-min.JPG'
import pictureSix from '../assets/B&Co PHOTO COLLAGE/COLLAGE POST 6-min.JPG'
import beautyAssociate from '../assets/rewebpage/Beauty Associate copy.pdf'
import beautySeniorAssociate from '../assets/rewebpage/Beauty Senior Associate.pdf'
import stockMerchandiser from '../assets/rewebpage/Beauty Stock Merchandiser.pdf'
// import beautyTeamleader from '../assets/rewebpage/Beauty Team Leader.pdf'
import droolGeneralAssissant from '../assets/rewebpage/Drool General Assistant.pdf'
import iceCreamGeneralAssisstant from '../assets/rewebpage/Ice Cream Parlour General Assistant.pdf'
import iceCreamTeamLeader from '../assets/rewebpage/Ice Cream Parlour Team Leader.pdf'


const Careers = () => {
  return (
    <div>
      <div className="our-story">
        <section className="hero">
          <div className="hero-body is-flex image-height">
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
            Please make your application with a covering email to <a href="mailto: careers@bobbysbournemouth.com" className="is-size-6-touch">careers@bobbysbournemouth.com</a>. With your application please also specify
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
              Stock Merchandiser – Full time
            </h4>
            <div className="m-6 is-size-6-touch">
              Your role is to support the Bobby’s Beauty team in an exciting new beauty hall venture at the Iconic Bobby’s building in
              Bournemouth town centre. Fundamentally, you will control stock through inventory management, handling procedures,
              deliveries, and replenishment, whilst also playing a supporting role in customer service and the daily operation of the shop
              floor.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={stockMerchandiser} className="is-size-6-touch" download>DOWNLOAD PDF </a>

                </p>
              </div>
            </div>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              Senior Associate – Full time
            </h4>
            <div className="m-6 is-size-6-touch">
              Your role is to support the Bobby’s Beauty team in an exciting new beauty hall venture at the Iconic Bobby’s building in
              Bournemouth town centre. Fundamentally, you will provide first class customer service through utilising your extensive
              knowledge of beauty products to drive sales and profit. As an experienced retailer you will play a supporting role in the
              leadership of the Bobby’s Beauty team and the stock handling processes within the business.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={beautySeniorAssociate} className="is-size-6-touch" download>DOWNLOAD PDF </a>

                </p>
              </div>
            </div>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              Associate – Full time, part time and weekend hours available
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
          </section>
          <section className="Ice-cream">
            <h2 className="mt-6 title">
              Ice Cream Parlour
            </h2>
            <h4 className="title size-job is-size-4-touch mx-6">
              Team Leader – Full time
            </h4>
            <div className="m-6 is-size-6-touch">
              Your role is to lead the Bobby’s Ice Cream Parlour team in an exciting new food and beverage venture at the Iconic Bobby’s
              building in Bournemouth town centre. Fundamentally, your role is to drive sales and profit through effective leadership of
              your General Assistants to provide exceptional customer service whilst maintaining excellent product quality, displays and
              hygiene standards. The effective operation of the business will be your priority whilst also leading from the front in a
              customer facing role.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={iceCreamTeamLeader} className="is-size-6-touch" download>DOWNLOAD PDF </a>
                </p>
              </div>
            </div>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              General Assistant – Full time, part time and week hours available
            </h4>
            <div className="m-6 is-size-6-touch">
              Your role is to support the Bobby’s Ice Cream Parlour team in an exciting new food and beverage venture at the Iconic
              Bobby’s building in Bournemouth town centre. Fundamentally, your role is to provide exceptional customer service, maintain
              excellent product quality, displays, and hygiene standards.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={iceCreamGeneralAssisstant} className="is-size-6-touch" download>DOWNLOAD PDF </a>

                </p>
              </div>
            </div>
          </section>
          <section className="Drool">
            <h2 className="mt-6 title">
              Drool
            </h2>
            <h4 className="title size-job mt-6 is-size-4-touch mx-6">
              General Assistant – Full time, part time and week hours available
            </h4>
            <div className="m-6 is-size-6-touch">
              You will assist in keeping Drool running like clockwork and keeping the tails wagging. Holding a customer facing position you
              will welcome dogs and their humans into Drool and assist both in their journey from entry to Lick ‘n’ Mix, the tuck shop,
              and finally the pay desk. You will be key in ensuring a dog friendly and unique atmosphere, help satisfy customers and be
              the crucial difference in ensuring the Drool experience is fun and unique for both humans and dogs. It is a chance to be
              part of something unique and the dream job for any dog lover.
              <div className="mx-6">
                <p className="mt-6 is-size-6-touch ">
                  Full Job Description: <a href={droolGeneralAssissant} className="is-size-6-touch" download>DOWNLOAD PDF </a>

                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Careers
