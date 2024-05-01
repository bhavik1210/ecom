import Mens from "./Mens/Mens"
import Navbar from "./Navbar/Navbar"
import { Route ,Routes } from "react-router-dom"
import Sections from "./Sections/Sections"
import Mainpage from "./Sections/Mainpage"
import './App.css'
import Cardetails from "./Carddetails/Cardetails"
import { useState } from "react"
import Womens from "./Womens/Womens"
import Stepper from "./Stepper/Stepper"
import Submit from "./Stepper/Submit"
import Necklace from './Necklace/Necklace'
import CardDetailspage from "./Carddetails/CardDetailspage"

function App() {

  const[search,setsearch] =useState('')

  return (
      <div>
       <Navbar search={search} setsearch={setsearch}/>
        <Routes >
        <Route path="/" element={<Mainpage />}/>

          <Route path="/Ring" element={<Mens search={search} />}/>
          <Route path="/Earring" element={<Womens search={search} />}/>
          <Route path="/Necklace" element={<Necklace search={search} />}/>

          <Route path="/checkout" element={<Stepper />}/>



          <Route path="/cartdetails/:id" element={<Cardetails />}/>
          <Route path="/cartdetailspage/:id" element={<CardDetailspage />}/>


          
          <Route path="/success" element={<Submit />}/>


        </Routes>
        

  
      </div>
      
  )
}

export default App
