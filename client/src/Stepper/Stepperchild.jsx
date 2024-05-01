// import React, { useState } from 'react'
// import './Stepper.css'

// function Stepperchild({steps}) {

//     const[currentstep,setcurrentstep] =useState(1);
//     const[iscomplete,setiscomplete] =useState(false);

//     if(!steps.length){
//         return <></>
//     }
//     // const  ActiveComp = steps[currentstep - 1].component

//     // const  ActiveComp = () =>{
//     //     return  steps[currentstep - 1 ]?.component
       

//     // }

//     // function handleclick(){
//     //     setcurrentstep((prevstep)=>{
//     //          if (prevstep == steps.length) {
//     //             setiscomplete(true)
//     //             return prevstep
                 
//     //          } else {
//     //             return prevstep + 1
//     //          }
//     //     })

//     function handleClick() {
//         if (currentstep === steps.length) {
//             setiscomplete(true);
//         } else {
//           setcurrentstep(prevStep => prevStep + 1);
//         }
//       }
    


//     }

//     function calculate(){
//         return (
//             (currentstep -1)  / (steps.length -1 )*100
//         )
//     }
//   return (
//     <>
//     <div className='Stepper'>
//         {
//             steps.map((step,i)=>{
//                 return (
//                     <>
//                     <div className='StepperMain' key={i}>
//                         <div className={`StepperNum ${currentstep > i +1 || iscomplete ? "complete": ''} 
//                         ${currentstep === i+1 ? "active" : ''}
//                         `}>
//                             {currentstep > i +1 || iscomplete ? (<span>&#10003;</span>) :  i + 1  }
                           
//                         </div>

//                         <div className='StepperName'>
//                             {step.name}
//                         </div>

                        
//                     </div>
//                     </>

//                 )
                
                
//             })
//         }
//     </div>

//     <div className="progressbar">
//         <div className="progress" style={{width:`${calculate()}%`}}></div>
//     </div>
//     {steps[currentstep].component()}

//     {
//         !iscomplete && 
//     <button onClick={handleclick}>{currentstep === steps.length ? "Finish" :"Next"}</button>
//     }
//         </>
//   )
// }

// export default Stepperchild