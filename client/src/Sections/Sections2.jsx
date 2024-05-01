import React from 'react'
import './Sections2.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import postimg1 from  './images/postimg1.jpg'
import postimg2 from  './images/postimg2.webp'
import postimg3 from  './images/postimg3.webp'

function Sections2() {
    const navigate = useNavigate()

    function top(){
        scrollTo({ top: 0 });
        navigate("/Ring")
    }

    function top1(){
        scrollTo({ top: 0 });
        navigate("/Earring")
    }

    function top2(){
        scrollTo({ top: 0 });
        navigate("/Necklace")
    }
  return (
    <div>
     <section id="collection">
        <div className="collections ">
            <div className="content">
                <img src={postimg1} alt="img" />
                <div className="img-content">
                    <p>Ring's Collections</p>
                    <button onClick={top}>SHOP NOW</button>
                </div>
            </div>
            <div className="content2">
                <img src={postimg2} alt="img" />
                <div className="img-content2">
                    <p>Earing's Collections</p>
                    <button onClick={top1}><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
            <div className="content3">
                <img src={postimg3} alt="img" />
                <div className="img-content3">
                    <p>Necklace Collections</p>
                    <button onClick={top2}><a href="#sellers">SHOP NOW</a></button>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Sections2