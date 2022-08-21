import { React, useState } from 'react';
import s from './Form.module.css';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';

const Form = () => {
  const [state, useStatee] = useState(true);
  function showhidepassword (e) {
    useStatee(!state);
    e.preventDefault();
  };
  // useEffect(() => {

  // }, []);

  const {
    register,
    formState: { errors }, // isValid
    handleSubmit,
    reset
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
        <div className={s.SingUpWrap}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label ><b>Username</b></label>
                <input className={s.a} {...register('USERNAME', {
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
                <label ><b>email</b></label>
                <input className={s.b} {...register('EMAIL', {
                  pattern: /@/,
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
                <label ><b>Password</b></label>
<div className={s.j}>
                <input className={s.h} type={state ? 'password' : 'text'} autoComplete="off" {...register('PASSWORD', {
                  required: 'Поле обязательно к заполнению',
                  minLength: {
                    value: 2,
                    message: 'Должно содержать минимуи два символа'
                  }
                })}
                />
                <a href="#" className={state ? s.c : s.k} onClick={showhidepassword}></a>
</div>
                <div className={s.Password} >
                    {errors.PASSWORD && <span>{errors.PASSWORD.message || 'Error!'}</span>}
                </div>
                <div className={s.clearfix}>
                    <Button text={'Sign Up'} type="submit" customClass={s.btn}/>
                    <p>By signing up you agree with our  <a href='/'>Terms of Conditions</a> and Privacy Policy rules</p>
                </div>
            </form>
        </div>
  );
};

export default Form;
