import React from 'react'
import './CartCartIPad.css'
import IconePerso from '../IconePerson/IconePerso'

const commonClass = 'default-profession'

const commonClass1 = 'default-contcart'
const commonClass2 = 'default-contInf'
const commonClass3 = 'default-profession'

const CartIPad = ({ text = "", customClass = "",  profession, infoPerson, time }) => {
  return (
      <div className={`${commonClass1} ${customClass}`}>{text}
         <IconePerso  />  
         <div className={`${commonClass} ${customClass}`}>{text}  
           <div className={`${commonClass2} ${customClass}`}>{text}  
               <p>{infoPerson} </p>
               <p>{time}</p>  
            </div> 
            <div className={`${commonClass3} ${customClass}`}>{text} 
               <p>{profession}</p>
            </div>
         </div>
      </div>
  )
}

export default CartIPad
