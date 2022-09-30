import React, { useContext } from "react"
import { social } from "../data/dummydata"
import { Themedark } from "../pages/Pages";

const Footer = () => {
  const dark = useContext(Themedark);

  const Mystyle = {
    backgroundColor: dark ? '#212222': '#212222',
    color: dark ? 'green': '#d0d6da'
  }
  return (
    <>
      <footer style={Mystyle}>
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
