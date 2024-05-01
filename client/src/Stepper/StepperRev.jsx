import React, { useState } from 'react'
import './Stepper.css'


function StepperRev({steps }) {
    // console.log(steps.length)
    // if(!steps.length){
    //             return <></>
    //         }
    const[currentstep,setcurrentstep] =useState(1)
    const[iscompeleted,setiscompeleted] =useState(false)

    function handlenext(){
        setcurrentstep((prevstep)=>{
            if(prevstep === steps.length){
                setiscompeleted(true)
                return prevstep;
            }else{
                return prevstep + 1
            }
        })
    }

    function handlePrev() {
        setcurrentstep(prevStep => {
          // If the current step is already 1, don't decrease further
          if (prevStep === 1) {
            return 1;
          } else {
            return prevStep - 1;
          }
        });
      }

    function cal(){
        return(
            (currentstep -1) / (steps.length -1 ) *100
        )
    }



  return (
    <div>

    <div className="Stepper">
        {
            steps.map((step,index)=>{
                return(
                    <div key={index} className={`StepperMain ${currentstep > index + 1 || iscompeleted ? "complete" : ""}  
                    ${currentstep === index + 1 ? "active" : ''}
                    `}>

                        <div className='StepperNum'>
                            {currentstep > index+1 || iscompeleted ? <span>&#10003;</span> : (index+1)}
                            {/* {index + 1} */}
                        </div>
                        <div className='StepperName'>
                            {step.name}
                        </div>
                    </div>
                )     
            })
        }
        </div>
        <div className='wrap'>

        <div className="progressbar">
            <div className="progress" style={{width:`${cal()}%`}}></div>
        </div>
        </div>
        {
            !iscompeleted &&  
            <div className='btnsnextprev'>
                <button onClick={handlePrev} disabled={currentstep === 1}>Previous</button>
                <button onClick={handlenext}>{currentstep === steps.length ? "Finish" :"Next"}</button>   
            </div>
        }

        { steps[currentstep - 1].component()}
    </div>
  )
}

export default StepperRev