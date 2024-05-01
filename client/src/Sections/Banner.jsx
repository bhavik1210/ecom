import React from 'react'
import './Sectiondesign.css'
import bannerpost from './images/banner.webp'
function Banner() {
  return (
    <div className='bannneermain'> 
        <section>
            <div className='baneer'>
                <img src={bannerpost} alt="" />

            </div>
        </section>
    </div>
  )
}

export default Banner