import React from 'react'

import pictureOne from '../assets/ILLUSTRATION POST 1-min.JPG'
import pictureTwo from '../assets/ILLUSTRATION POST 2-min.JPG'
import pictureThree from '../assets/ILLUSTRATION POST 3-min.JPG'
const OurStory = () => {
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
        </div>
      </section>
      <section className="container has-text-centered">
        <h1 className="title">Bobby & Co - The Story
        </h1>
        <p className="m-6 is-size-6-touch">
          The property was acquired in late 2019 and Verve Properties who recently transformed The Avenue Centre just up the road are at the helm to bring the Bobby’s building back to life. After the collapse of Debenhams their plans to revive the building and revive The Square in the centre of town were accelerated and plans were quickly in place to re-open the building with a multitude of offerings as soon as possible.
        </p>
        <p className="m-6 is-size-6-touch">
          Verve Properties are an ethical property firm that regenerates old buildings with the intent to bring communities together and provide an offering for everyone. The company have a sustainable ethos and focus on working with and securing local, independent, and socially conscious brands and businesses, to ensure that the regeneration reflects the changes Covid has accelerated in social and shopping patterns.
        </p>
        <p className="m-6 is-size-6-touch">
          Building work has been split into a number of phases to ensure the store remains open. With its prominent position in town, it would be disatrous if the lights were turned off until the full renovation is complete. Phase one opened on 9th September 2021, with more elements opening throughout the year and into 2022. First to open was Bobby’s Beauty Hall, Bobby’s Ice Cream Parlour, GIANT art gallery, In Time watch repair and The South Coast Makers Shop.
        </p>
        <p className="m-6 is-size-6-touch">
          The beauty hall houses local, sustainable, and conscious brands which sit alongside the big global brands we are all familiar with. As an independent beauty operation, Bobby’s Beauty Hall offers products and brands not previously available at Debenhams. The second phase welcomed DRGNFLY Sushi and Champagne bar onto the Ground Floor and The Venue Beuaty Salon.
        </p>
        <p className="m-6 is-size-6-touch">
          On the first floor the large windows overlooking the Square have been opened up with new balconies installed to match the original balconies on the second floor. This space is currently used for a range of community and local small business supporting events including The South Coast Makers Market which ran for 6 weeks over the Christmas period and will return over Easter this year. The permanent fixture for this floor is due to open in late 2022 and more exciting details will be revealed very soon!
        </p>

        <p className="m-6 is-size-6-touch"> 
        Future plans include opening the access to the building from Terrace Road. Old buildings at the rear, including the original bakery will reopen and the space reorganised to create a garden area and a craft ale smokery bar. Following that, plans are in place to open a fourth floor bar/restaurant and roof terrace bar. – all with a key focus on the local community.
        </p>
        <p className="m-6 is-size-6-touch"> 
        Back in 1915, Bobby & Co opened in The Square in Bournemouth and remained under that name for over 50 years, only being rebranded in 1972 as part of the Debenhams group that has now departed the building. The reactions to hearing about the closure of the Debenhams in The Square had caused concern as local people had worried that without the department store that has dominated shopping on The Square and been a focal point of socialisation for over a century, that people would be driven away. There are also concerns about losses of local jobs. 
        </p>

        <p className="m-6 is-size-6-touch">
        Ashley Nicholson Director of Verve Properties says, “Bobby’s has historically always been at the heart of the town centre and the community. When we started our research into the history, we kept unearthing how bedded into the community the building was. We also found much of the architectural detail had survived but was covered up - so we took inspiration from that and have sought to restore what we can to bring back the grandeur of this iconic building, whilst the same time introducing some modernity to make it fitting for today. The copper domes will be repaired, the flagpoles reinstated, the 1970’s canopy removed and replaced by the original design, the 1933 front entrance designs brought back, new ornate first floor balconies to match the others installed and so on, all of which aims to be front and centre of our plans for a rebirth and celebration of both the Bobby’s name and original architectural style”. 
        </p>
        <p className="m-6 is-size-6-touch"> 
        Verve’s decision to take the project on came about due to a strong belief in the potential for UK high streets to reinvent themselves after the economic downturn of the past 10 years. Online shopping and the pandemic have each played a part in dismantling the structures upon which high street retail used to rely. Responding to that issue, Ashley goes on to say, “If shoppers are going to be tempted back into town centres, then retailers need to value three key elements in any new structure and design. The first is to consider what kind of shopping experience people will still want “in real life”- beauty, clothing and footwear are good examples of retail that people want to try out in person. The second element should focus on how to make the shopping experience a fun and enjoyable one. The third should be to remember that ultimately town centres are there to serve the local community. It will take time to deliver Bobby’s back to its former glory, the building has suffered a lack of investment over many years, but with the patience and support of the community this project can play a significant role in the re-imagining of the town centre in a post Covid world. Regeneration is vital, but gentrification that alienates a community is the opposite of what new retail projects should be aiming for. We are therefore very excited to be able to bring this ethos to our plans for Bobby’s bringing back the glamour and the style of the original Bobby’s from the early 20th Century”.
        </p>
      </section>
    </div>
  )
}

export default OurStory
