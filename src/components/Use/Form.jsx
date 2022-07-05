// import React from 'react';
// import s from'./Form.module.css'
// import { useForm } from 'react-hook-form';
    




//    const Form = () => {
//     const { 
//         register,
//         formState: { errors, },//isValid 
//         handleSubmit,
//         reset,
//     } = useForm({
//         mode:'onBlur'
//     });
   
   

//  const onSubmit = (data) => {
//     alert(JSON.stringify(data))
//     reset()
//  }
    
//     return (
    
//     <div className={s.SingUpWrap}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//         <label for="Username"><b>Username</b></label>
//                  <input   {...register('firstName', {
//                         required: 'Поле обязательно к заполнению',
//                         minLength: {
//                             value: 2,
//                         message: 'Должно содержать минимуи два символа'
//                         }  
//                     })}  
//                 />  
            
//             {/* <div  > */}
//                 {errors.firstName && <p>{errors.firstName.message || 'Error!'}</p>} 
//             {/* </div>   */}

//             <label for="email"><b>email</b></label> 
                 
//                  <input   {...register('firstName', {
//                         required: 'Поле обязательно к заполнению',
//                         minLength: {
//                             value: 2,
//                         message: 'Должно содержать минимуи два символа'
//                         }
//                     })}
//                 />  
            
//             {/* <div  > */}
//                 {errors.firstName && <p>{errors.firstName.message || 'Error!'}</p>} 
//             {/* </div>   */}

              
//             <label for="Password"><b>Password</b></label>
                 
//                  <input   {...register('firstName', {
//                         required: 'Поле обязательно к заполнению',
//                         minLength: {
//                             value: 2,
//                         message: 'Должно содержать минимуи два символа'
//                         }
//                     })}
//                 />  
           
//             {/* <div > */}
//                 {errors.firstName && <p>{errors.firstName.message || 'Error!'}</p>} 
//             {/* </div>   */}
//               {/* disabled={!isValid} */}

//         </form>
//        </div>  
//     )
   
// }


// export default Form;