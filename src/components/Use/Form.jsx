import React from 'react';
import s from './Form.module.css';
import { useForm } from 'react-hook-form';
    




export   const Form = () => {
    const { 
        register,
        formState: {
        errors,
    },
    handleSubmit,
 } = useForm();

 const onSubmit = (data) => {
    alert(JSON.stringify(data))
 }
    
    return (
      <div className='FormWrap'>
        <h1>react hook form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>  
                <input 
                    {...register('firsName',{
                        required: true,
                    })}
                />  
            </label>
        </form>
      </div>  
    )
   
}


export default Form;