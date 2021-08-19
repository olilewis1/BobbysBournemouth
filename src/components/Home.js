import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageOverlay } from 'react-image-overlay-effect'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
// import bobbysPicOld from '../assets/Screenshot 2021-06-03 at 19.24.38.png'
import stuartSemple from '../assets/close up front v8-min2-new.jpg'
import bobbysBackground from '../assets/image.jpg'
import facebook from '../assets/b763699fd1fa3bfb374442593ae642e1.png'
import instagram from '../assets/instagram_icon_138461.png'
import bobbysSquare from '../assets/2021_BOBBYS_INTERIOR_JB_-63_websize.jpg'
import bobbysFlowers from '../assets/2021_BOBBYS_INTERIOR_JB_-41_websize.jpg'
// import { Carousel } from 'react-responsive-carousel'
const Home = () => {
  // const [intervalz, setIntervalz] = useState(3000) //initial state here represents the interval for first image.

  // const onChange = (index, item) => {
  //   setIntervalz(item.props['data-interval'])
  // }
  const [addClass, setAddClass] = useState('')
  const handleClick = (event) => {
    console.log(event)
    if (addClass === 'is-active') {
      setAddClass('')
    }
    if (addClass === '') {
      setAddClass('is-active')
    }

  }

  useEffect(() => {
    const isItVisited = localStorage.getItem('visited')
    if (isItVisited === null) {
      setAddClass('is-active')
    }
    const toVisit = 'yes'
    localStorage.setItem('visited', JSON.stringify(toVisit))
    console.log(toVisit)

  }, [])

  return (
    // 
    //   <img src={bobbysPicOld} alt="" /> 
    // 
    <>
      <div className="homepage is-size-6-touch">
        <section className="hero has-background-grey-light">
          {/* <Carousel
        onChange={onChange}
        autoPlay
        interval={intervalz}
        infiniteLoop={false}> */}
          {/* <div data-interval={3000}>
          <img className="image-height" src={bobbysPicOld} alt="Coming Soon" />
          <p className="legend">Legend 1</p>
        </div> */}


          <div data-interval={3000} >
            {/* div style={{ display: "inline-block" } */}
            < ImageOverlay
              src={stuartSemple}
              description={
                <div className="overlay-main-hero "> <div className="" id="">
                  <div className="">
                    <p className="hero-p  is-size-5-mobile is-hidden-mobile "> Bringing Bobby’s back to Bournemouth.</p>
                    <button onClick={handleClick}
                      position={'bottomRight'} id="hero-button" className=" is-size-7-touch has-text-centered button  * ">Opening Dates & Times
                    </button>
                  </div>
                  <div className=""> </div>
                </div>
                </div>} />
            {/* <img className="image-height" src={stuartSemple} alt="Coming Soon" /> */}

            {/* <div className="is-overlay is-flex is-justify-content-center"> <p className=" is-flex is-align-self-center"> ±HIiiiiiiiiii</p> </div> */}
          </div>
          <div className="columns is-vcentered has-text-centered	is-hidden-tablet	 ">
            {/* <div className="column"></div> */}<div className=""> </div>
          </div>
          {/* </Carousel> */}

        </section>

        <div className="our-story">
          <section className="container has-text-centered">
            {/* <p className="m-6 is-size-6-touch">
              The iconic Bobby’s is returning to Bournemouth on Saturday 7th August - we can’t wait to welcome you back and show you what we have in store!
            </p> */}

          </section>
          <section className="handle-modal">
            <div className={`modal ${addClass}`}>
              <div className="modal-background"></div>
              <div className="modal-content ">
                <div className="modal-card-head">
                  <h1 className="modal-card-title has-text-centered is-size-6-touch">

                  </h1>
                </div>
                <div className="modal-card-body has-text-centered" >
                  <p className="mt-1 is-size4" id="modal-homepage">
                    Bobby’s Ice Cream Parlour (the pop-up) and GIANT Gallery are now open. We are open from 10.00 - 18.00 Monday to Saturday and 10.30 - 16.30 on Sundays.

                  </p>
                  <p className="mt-4 " id="modal-homepage">
                    Bobby’s Beauty Hall, Sushi Bar, DROOL, South Coast Makers Shop and Bobby’s Ice Cream Parlour in it’s permanent home will be open from Thursday 9th September.
                  </p>
                  <p className="mt-4 " id="modal-homepage">
                    We can’t wait to see you all at Bobby’s very soon.

                  </p>

                </div>
                {/* <div className="modal-card-foot modal-card-title">Statement from Ashley Nicholson – Director of Verve Properties </div> */}
              </div>
              <button onClick={handleClick} className="modal-close is-large" aria-label="close"></button>
            </div>

          </section>
        </div>
        <section>
          <div className="is-flex-tablet has-background-grey-light pt-6 pb-6 maindiv-flex">
            <p className="	has-text-weight-bold is-size-5-mobile right-div">
              This is the future of bricks and mortar retail, and the Bobby’s Beauty Hall, DROOL, Sushi Bar, Ice Cream Parlour, South Coast Makers Shop and Art gallery will be one of the first elements to open in September 2021.
            </p>
            <p className="	is-size-5-mobile left-div">
              The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
            </p>
          </div>
        </section>
        <section>
          {/* <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p>            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
            The vision is to create a new experiential shopping destination led by beauty, health, food and beverage, and wellbeing focused businesses.
          </p> */}
          <Zoom>

            <div className=" pt-6 fade-div padding-to-add	" id="fade-div">
              <Fade left>
                <div className="fade-text is-flex is-flex-direction-column is-justify-content-space-evenly ">
                  <h2 className="fade-header padding-to-add"> The story of Bobby & Co.</h2>
                  <p className="fade-p">The property was acquired in late 2019 and Verve Properties who recently transformed The Avenue Centre just up the road are at the helm to bring the Bobby’s building back to life. </p>
                  <Link to="/ourstory">
                    <button id="fade-button" className="button fade-button"> Learn More</button>
                  </Link>
                </div>
              </Fade>
              <Fade right className="padding-to-add">
                <img className="image fade-image padding-to-add" height="300" width="400" src={bobbysSquare} />

              </Fade>
            </div>
          </Zoom>
          <Zoom>

            <div className="fade-div pt-6	fade-left">
              <Fade left>
                <img className="image fade-image" height="300" width="400" src={bobbysFlowers} />
              </Fade>
              <Fade right>
                <div className="fade-text is-flex is-flex-direction-column is-justify-content-space-evenly fade-second ">
                  <h2 className="fade-header">Here is what’s to come.</h2>
                  <p className="fade-p">There is lots to look forward to over the next few months and into 2022, with further elements of the store opening. All of which feature local independent traders and businesses. </p>
                  <Link to="/whatscoming" >
                    <button className="button fade-button"> Learn More</button>
                  </Link>
                </div>
              </Fade>
            </div>
          </Zoom>
        </section>
        <section className="hero">
          {/* <Carousel
        onChange={onChange}
        autoPlay
        interval={intervalz}
        infiniteLoop={false}> */}
          {/* <div data-interval={3000}>
          <img className="image-height" src={bobbysPicOld} alt="Coming Soon" />
          <p className="legend">Legend 1</p>
        </div> */}


          <div data-interval={3000} className="pt-6" >
            {/* div style={{ display: "inline-block" } */}
            < ImageOverlay
              src={bobbysBackground}
              className="image-overlay image-bottom-overlay"
              id="overlay-center"
              description={<div className="pl-4 overlay-center" id="overlay-center">
                <p className="bottom-p  "> “Community, localism, sustainability, and experience will dominate the new era of inperson shopping – and we have worked to ensure they will be the focus of our repurposing of Bobby’s. We aim to be an iconic building of regional significance in the heart of Bournemouth town centre. The aim of our project is to prove that there is a future for high streets across the UK.”</p>
                <p className="director-p pl-4">Ashley Nicholson — Director, Verve Properties</p>
              </div>} />
            {/* <img className="image-height" src={stuartSemple} alt="Coming Soon" /> */}

            {/* <div className="is-overlay is-flex is-justify-content-center"> <p className=" is-flex is-align-self-center"> ±HIiiiiiiiiii</p> </div> */}
          </div>
          <div className="columns is-vcentered has-text-centered	is-hidden-tablet	 ">
            {/* <div className="column"></div> */}<div className=""> </div>
          </div>

          {/* </Carousel> */}

        </section>
        <section>
          <div className="social-media mt-6 maindiv-flex">
            <div className="social-media-right right-div">
              <p className="fade-header ">
                Follow us on social media to find out what we are up to next.
              </p>
            </div>
            <div className="social-media-left left-div">
              <p className="fade-p">
                The way forward is to bring together the community by hosting an ever-changing rota of events and activities whilst providing products locally sourced that can’t be bought or experienced on the internet. Sustainability isn’t and must not be a fad - it is the new everyday.
              </p>
              <div>
                <div className="buttons pt-3">
                  {/* <Link to={{ pathname: 'https://www.facebook.com/bobbysbournemouth/' }} > <img className="image-buttons" src={facebook} alt="image" /></Link> */}
                  <div className="social-media-item">
                    <a href="https://www.facebook.com/bobbysbournemouth/" ><img className="image-buttons" src={facebook} alt="image" /></a>
                  </div>
                  <div className="social-media-item">
                    <a href="https://www.instagram.com/bobbysbournemouth/" ><img className="image-buttons" src={instagram} alt="image" /></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
