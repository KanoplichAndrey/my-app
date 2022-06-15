import React from 'react';

const Pricing = () => {
    return   <div className='Pricing'>
    <div className='cart_Pricing starter'>
      <div><p>Starter</p></div>
      <div><span>$49</span><span>/month</span></div>
      <div><p>Period</p></div>

      <form action="#" method="#">
     <p>
       <select name="month">
          <option disabled>Monthly</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </p>
      <div><p>Teammates</p></div>
      <p>
       <select name="month">
          <option disabled>User 1</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          
        </select>
      </p>
       
      <input type="submit" value="Choose Plan"></input>
      </form>




      
    </div>
    <div className='cart_Pricing premium'>
    <div><p>Premium</p></div>
      <div><span>$89</span><span>/month</span></div>
      <div><p>Period</p></div>

      <form action="#" method="#">
     <p>
       <select name="month">
          <option disabled>Monthly</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </p>
      <div><p>Teammates</p></div>
      <p>
       <select name="month">
          <option disabled>User 1</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          
        </select>
      </p>
       
      <input type="submit" value="Choose Plan"></input>
      </form>




      
    </div> 
    <div className='cart_Pricing unlimited'>
    <div><p>Unlimited</p></div>
      <div><span>$199</span><span>/month</span></div>
      <div><p>Period</p></div>

      <form action="#" method="#">
      <p>
       <select name="month">
          <option disabled>Monthly</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </p>
      <div><p>Teammates</p></div>
      <p>
       <select name="month">
          <option disabled>User 1</option>
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          
        </select>
      </p>
       
      <input type="submit" value="Choose Plan"></input>
      </form>




      
    </div> 

  </div>     
};

export default Pricing;