import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h1 className='fontSize' data-aos='fade-right'>
              {val.text},
            </h1>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <Link to='/resume'>
            <button className='primaryBtn' data-aos='fade-up-right'>
              Download CV
            </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}
