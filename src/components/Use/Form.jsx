import React from 'react';
import s from'./Form.module.css'
import { useForm } from 'react-hook-form';
   




   const Form = () => {
    const { 
        register,
        formState: { errors, },//isValid 
        handleSubmit,
        reset,
    } = useForm({
        mode:'onBlur'
    });
   
   

 const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
 }
    
    return (
    
    <div className={s.SingUpWrap}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label for="Username"><b>Username</b></label>
                 <input className={s.a}  {...register('USERNAME', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 2,
                        message: 'Должно содержать минимуи два символа'
                        }  
                    })}  
                />  
            
            <div className={s.Usernam}>
                {errors.USERNAME && <span>{errors.USERNAME.message || 'Error!'}</span>} 
            </div>

            <label for="email"><b>email</b></label> 
                 
                 <input  className={s.b} {...register('EMAIL', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 2,
                        message: 'Должно содержать минимуи два символа'
                        }
                    })}
                />  
            
                <div className={s.email}>
                {errors.EMAIL && <span>{errors.EMAIL.message || 'Error!'}</span>} 
                </div>

              
            <label for="Password"><b>Password</b></label>
                 
                 <input className={s.c} type="Password"  {...register('PASSWORD', {
                        required: 'Поле обязательно к заполнению',
                        minLength: {
                            value: 2,
                        message: 'Должно содержать минимуи два символа'
                        }
                    })}
                />  
           
           <div className={s.Password} >
                {errors.PASSWORD && <span>{errors.PASSWORD.message || 'Error!'}</span>} 
            </div>
              {/* disabled={!isValid} */}
        <div class={s.clearfix}>
        <button type="submit"  className={s.btn}>Sign Up</button>
        <p>By signing up you agree with our  <a href='#'>Terms of Conditions</a> and Privacy Policy rules</p>
      </div>
        </form>

        
       </div>  
    )
   
}


export default Form;