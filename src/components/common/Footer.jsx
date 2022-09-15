import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p>Copyright © Princewill {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Footer
