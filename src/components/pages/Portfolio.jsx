import React, { useContext, useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { Link } from "@mui/material"
import { Themedark } from "./Pages"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  const dark = useContext(Themedark);

  const Mystyle = {
    // backgroundColor: dark ? 'rgb(249, 249, 253)': 'black',
    color: dark ? 'lightblue': '#d0d6da'
  }

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Some of my personal Projects' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down' style={Mystyle}>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay'>
                  <Link href={item.link}><h3>{item.title}</h3></Link>
                  <Link href={item.link}><span>{item.name}</span></Link>
                  <Link href={item.link}><VisibilityOutlinedIcon /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
