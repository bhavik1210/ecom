
import './Sections.css'
import React from "react";
import Slider from "react-slick";



function Sections() {

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows:false
   
  };
  return (
    // <div>
      <div className="slider-container">
      <Slider {...settings}>
        <div id="home">
    <div className="home_page ">
      <div className="home_img ">
      </div>
      <div className="home_txt ">
        <p className="collectio ">SUMMER COLLECTION</p>
        <h2>FALL - WINTER<br/>Collection 2024</h2>
        <div className="home_label ">
          <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to
            exceptional quality.</p>
        </div>
        <button><a href="#sellers">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
        
      </div>
    </div>
  </div>

  <div id="home">
    <div className="home_page1 ">
      <div className="home_img ">
      </div>
      <div className="home_txt ">
        <p className="collectio ">WINTER COLLECTION</p>
        <h2>FALL - WINTER<br/>Collection 2024</h2>
        <div className="home_label ">
          <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to
            exceptional quality.</p>
        </div>
        <button><a href="#sellers">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
        
      </div>
    </div>
  </div>
  <div id="home">
    <div className="home_page2 ">
      <div className="home_img ">
      </div>
      <div className="home_txt ">
        <p className="collectio ">SUMMER COLLECTION</p>
        <h2>FALL - WINTER<br/>Collection 2024</h2>
        <div className="home_label ">
          <p>A specialist label creating luxury essentials. Ethically crafted<br/>with an unwavering commitment to
            exceptional quality.</p>
        </div>
        <button><a href="#sellers">SHOP NOW</a><i className='bx bx-right-arrow-alt'></i></button>
        
      </div>
    </div>
  </div>
  </Slider>
    </div>
    // </div>
  )
}

export default Sections