import React from "react";
import "./ipadCart.css";
const commonClass = "default-ipad";
const commonClass1 = "default-iperson";
const commonClass2 = "default-infoperson";

const IpadCart = ({ text = "", customClass = "", name, status }) => {
   return (
      <div className={`${commonClass} ${customClass}`}>{text}     
         <div className={`${commonClass1} ${customClass}`}>{text}</div>
         <div className={`${commonClass2} ${customClass}`}>{text}
            <ul>
               <li>{name}</li>
               <li>{status}</li>
            </ul>
         </div>
      </div>
   );
};

export default IpadCart;
