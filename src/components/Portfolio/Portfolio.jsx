import React from 'react'
import './portfolio.css'
import HashtagFinder from './../../assets/hastag-finder.png'
import Pokedex from './../../assets/pokedex.png'
import IMG1 from './../../assets/portfolio1.jpg'
import IMG2 from './../../assets/portfolio2.jpg'
import IMG3 from './../../assets/portfolio3.jpg'
import IMG4 from './../../assets/portfolio4.jpg'

const data = [
  {
    id: 1,
    image: HashtagFinder,
    title: 'Hashtag search application, using Twitter API.',
    github: 'https://github.com/alekiss/Hashtag-finder',
    demo: 'https://felippealves.github.io/Hashtag-finder/#/'
  },
  {
    id: 2,
    image: Pokedex,
    title: 'Pokemon search application, using pokeAPI.',
    github: 'https://github.com/alekiss/Pokedex_Zappts_Newtab',
    demo: ''
  },
  {
    id: 3,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/alekiss',
    demo: ''
  },
  {
    id: 4,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/alekiss',
    demo: ''
  },
  {
    id: 5,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/alekiss',
    demo: ''
  },
  {
    id: 6,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/alekiss',
    demo: ''
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                </div>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">GitHub</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio