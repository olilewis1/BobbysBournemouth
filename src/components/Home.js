import React, { useState } from 'react'
import { ImageOverlay } from 'react-image-overlay-effect'

// import bobbysPicOld from '../assets/Screenshot 2021-06-03 at 19.24.38.png'
import stuartSemple from '../assets/close up front v8-min2.jpg'
// import { Carousel } from 'react-responsive-carousel'
const Home = () => {
  // const [intervalz, setIntervalz] = useState(3000) //initial state here represents the interval for first image.

  // const onChange = (index, item) => {
  //   setIntervalz(item.props['data-interval'])
  // }
  const [addClass, setAddClass] = useState('is-active')
  const handleClick = (event) => {
    console.log(event)
    setAddClass('is-active')
    if (addClass === 'is-active') {
      setAddClass('')
    }

  }

  return (
    // 
    //   <img src={bobbysPicOld} alt="" /> 
    // 
    <>
      <div className="homepage">
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


          <div data-interval={3000}>
            {/* div style={{ display: "inline-block" } */}
            < ImageOverlay
              src={stuartSemple}
              description={<button onClick={handleClick} id="font-header" className="m-6 is-size-6-mobile has-text-centered button is-dark *">Statement from our Director</button>} />
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
                    Statement from Ashley Nicholson – Director of Verve Properties
                  </h1>
                </div>
                <div className="modal-card-body has-text-centered" >
                  <p className="mt-1 is-size-6-touch is-size4" id="modal-homepage">
                    Over the past few weeks and months, our dedicated team have been working hard to prepare the first phase of the revival of Bobby’s of Bournemouth.
                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
                    This week we have found ourselves in the unfortunate position of many of our dedicated team having to self-isolate.Whilst works to the inside have progressed well, the main delays affect the exterior.
                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
                    With the current situation affecting so many people, we’ve taken the difficult decision to delay the opening by five weeks.
                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
                    Unless unexpected additional covid restrictions are put in place between now and then, the new opening date will be Thursday 9th September. This will include the Beauty Hall, Sushi Bar and DROOL Food Hall for Dogs.
                  </p>
                  <p className="mt-4 is-size-6-touch " id="modal-homepage">
                    The UK’s largest run contemporary-gallery and Bobby’s Ice Cream Parlour will still be opening as originally  planned in August.
                  </p>
                  <p className="mt-4 is-size-6-touch" id="modal-homepage">
                    As much as it is frustrating to delay the launch, we are excited as ever to forge ahead. We look forward to throwing open our doors when we will be able to show you phase one of Bobby’s in its best light.
                  </p>
                </div>
                {/* <div className="modal-card-foot modal-card-title">Statement from Ashley Nicholson – Director of Verve Properties </div> */}
              </div>
              <button onClick={handleClick} className="modal-close is-large" aria-label="close"></button>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Home
