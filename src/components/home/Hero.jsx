import React, { useContext } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom"
import { Themedark } from "../pages/Pages"

export const Hero = () => {
  const dark = useContext(Themedark);

  const Mystyle = {
    backgroundColor: dark ? 'rgb(249, 249, 253)': 'black',
    color: dark ? 'grey': '#d0d6da'
  }

  const Herotext = {
    // backgroundColor: dark ? 'rgb(249, 249, 253)': 'black',
    color: dark ? 'grey': '#d0d6da'
  }

  return (
    <>
      <section className='hero' style={Mystyle}>
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
            <p data-aos='fade-left' style={Herotext}>{val.desc}</p>
            <Link to='/resume'>
            <button className='primaryBtn' data-aos='fade-up-right' style={Mystyle}>
              Download CV
            </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}
