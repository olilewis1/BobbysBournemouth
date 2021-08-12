import React, { useState, useEffect } from 'react'
import { ImageOverlay } from 'react-image-overlay-effect'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
// import bobbysPicOld from '../assets/Screenshot 2021-06-03 at 19.24.38.png'
import stuartSemple from '../assets/close up front v8-min2-new.jpg'
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
      <div className="homepage">
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
                <div className="flex-hero"> <div className="pl-4" id="overlay-content-hero">
                  <p className="hero-p  is-size-5-mobile is-hidden-mobile "> Bringing Bobbys back to Bournemouth.</p>
                  <button onClick={handleClick}
                    position={'bottomRight'} id="hero-button" className="m-6  is-size-7-touch has-text-centered button  * ">Opening Dates & Times
                  </button>
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
                  <p className="mt-1 is-size-6-touch is-size4" id="modal-homepage">
                    Bobby’s Ice Cream Parlour (the pop-up) and GIANT Gallery are now open. We are open from 10.00 - 18.00 Monday to Saturday and 10.30 - 16.30 on Sundays.

                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
                    Bobby’s Beauty Hall, Sushi Bar, DROOL, South Coast Makers Shop and Bobby’s Ice Cream Parlour in it’s permanent home will be open from Thursday 9th September.
                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
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
          <div className="is-flex-tablet has-background-grey-light		">
            <p className="mx-6 mb-5	has-text-weight-bold p-5 is-size-5-mobile">
              This is the future of bricks and mortar retail, and the Bobby’s Beauty Hall, DROOL, Sushi Bar, Ice Cream Parlour, South Coast Makers Shop and Art gallery will be one of the first elements to open in September 2021.
            </p>
            <p className="mx-6 mb-5 p-5	is-size-5-mobile">
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

            <div className=" pt-6 fade-div	" id="fade-div">
              <Fade left>
                <div className="fade-text is-flex is-flex-direction-column is-justify-content-space-evenly ">
                  <h2 className="fade-header">Changing the world is possible. We’ve done it before.</h2>
                  <p className="fade-p">Our leadership team bring years of experience to bear on the greatest challenge of our time. We’re results driven, with a proven record of previous successes. </p>
                  <button id="hero-button" className="button"> Learn More</button>
                </div>
              </Fade>
              <Fade right>
                <img className="image" height="300" width="400" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png" />

              </Fade>
            </div>
          </Zoom>
          <Zoom>

            <div className="fade-div pt-6	">
              <Fade left>
                <img className="image fade-image" height="300" width="400" src="https://source.unsplash.com/random/300x400" />
              </Fade>
              <Fade right>
                <div className="fade-text is-flex is-flex-direction-column is-justify-content-space-evenly ml-5">
                  <h2 className="fade-header">Changing the world is possible. We’ve done it before.</h2>
                  <p className="fade-p">Our leadership team bring years of experience to bear on the greatest challenge of our time. We’re results driven, with a proven record of previous successes. </p>
                  <button id="hero-button" className="button"> Learn More</button>
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
              src={stuartSemple}
              className="image-overlay"
              id="overlay-center"
              description={<div className="pl-4 overlay-center" id="overlay-center">
                <p className="bottom-p  is-size-5-mobile "> “Clarkson has helped accomplish over 200 of its partners’ major conservation goals. They inspire everyone to care for the planet.”</p>
                <p> — Quote Source</p>
              </div>} />
            {/* <img className="image-height" src={stuartSemple} alt="Coming Soon" /> */}

            {/* <div className="is-overlay is-flex is-justify-content-center"> <p className=" is-flex is-align-self-center"> ±HIiiiiiiiiii</p> </div> */}
          </div>
          <div className="columns is-vcentered has-text-centered	is-hidden-tablet	 ">
            {/* <div className="column"></div> */}<div className=""> </div>
          </div>
          {/* </Carousel> */}

        </section>
      </div>
    </>
  )
}

export default Home
