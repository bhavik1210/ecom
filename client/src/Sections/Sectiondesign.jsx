import React from 'react'
import './Sectiondesign.css'
import img1 from './images/bigimg1.png'
import img2 from './images/bigimg2.png'
import img3 from './images/bigimg3.png'
import img4 from './images/bigimg4.png'
import img5 from './images/bigimg5.png'
import img6 from './images/bigimg6.png'


function Sectiondesign() {
  return (
    <div className='visualstabs'>
        <section className='visualgrid'>
            <div className="visualtab">
                <img src={img1} alt="" />
            </div>
            <div className="visualtab">
                <img src={img2} alt="" />
            </div>
            <div className="visualtab">
                <img src={img3} alt="" />
            </div>
            <div className="visualtab">
                <img src={img4} alt="" />
            </div><div className="visualtab">
                <img src={img5} alt="" />
            </div><div className="visualtab">
                <img src={img6} alt="" />
            </div>



        </section>
        
    </div>
  )
}

export default Sectiondesign