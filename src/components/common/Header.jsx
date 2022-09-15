import { Menu } from "@mui/icons-material"
import { Button } from "@mui/material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className='container flexsbar'>
          <div className='logo'>
            {/* <img src={logo} alt='' data-aos='zoom-in-right' /> */}
            <h1 style={{fontWeight: 600, color: 'aqua'}}>PO.</h1>
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <>
              <Link to={links.url} key={i} data-aos='zoom-in-left'>
                {links.text}
              </Link>
            </>
            ))}
          </div>
          <div className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </div>
        </div>
      </header>
    </>
  )
}
