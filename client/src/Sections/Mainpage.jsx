import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sections from './Sections'
import Sections2 from './Sections2'
import Sectiondesign from './Sectiondesign'
import Banner from './Banner'
import Footer from './Footer'

function Mainpage() {
  return (
    <div>
        {/* <Navbar /> */}
        <Sections />
        <Sectiondesign />
        <Banner />
        <Sections2 />

        <Footer />
    </div>
  )
}

export default Mainpage