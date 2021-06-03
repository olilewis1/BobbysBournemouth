import React, { useState } from 'react'
import bobbysPicOld from '../assets/Screenshot 2021-06-03 at 19.24.38.png'
import stuartSemple from '../assets/close up front v5.jpg'
import { Carousel } from 'react-responsive-carousel'
const Home = () => {
  const [intervalz, setIntervalz] = useState(3000) //initial state here represents the interval for first image.

  const onChange = (index, item) => {
    setIntervalz(item.props['data-interval'])
  }

  return (
    // 
    //   <img src={bobbysPicOld} alt="" /> 
    // 
    <section className="hero is-medium">
      <Carousel
        onChange={onChange}
        autoPlay
        interval={intervalz}
        infiniteLoop={false}>
        <div data-interval={3000}>
          <img className="image-height" src={bobbysPicOld} alt="Coming Soon" />
          <p className="legend">Legend 1</p>
        </div>

        <div data-interval={3000}>
          <img className="image-height" src={stuartSemple} alt="Coming Soon" />
          <p className="legend">Legend 3</p>
        </div>

      </Carousel>
    </section>
  )
}

export default Home
