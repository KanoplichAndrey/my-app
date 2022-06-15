import React from 'react';
import imageSrc from '../picture.png';

const Sing_Up_Form = () => {
    return   <div className='Sing_Up_Form'>
    <div className='Sing_Up_Form_wrap'>
    

<h3>Sign Up to Learn More About Design Struct</h3>
<p>Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to the process</p>

<div className='Sing_Up_Wrap'>

<form action="">
  <label for="Username"><b>Username</b></label>
<input type="text" name="Username" ></input>

<label for="email"><b>email</b></label>
<input type="text" name="email" required></input>

<label for="Password"><b>Password</b></label>
<input type="text"  name="Password" required></input>
</form>

</div>


<div class="clearfix">
<button type="submit" className='button-sign'>Sign Up</button>
 <p>By signing up you agree with our  <a href='#'>Terms of Conditions</a> and Privacy Policy rules</p>
</div>


    </div>

    <div className='Sing_Up_Form picture'>
    <img title="my-img" src={imageSrc} alt="my-img"/>
    </div>


  </div> 
       
};

export default Sing_Up_Form;