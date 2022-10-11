/* eslint-disable react/no-unescaped-entities */
import { React } from 'react';
import Button from '../button/Button';
import s from './modal.module.css';

const ModalWindow = ({ state, setState }) => {
  return (

    <>
    {/* <Button customClass={s.button} onClick={showModal} /> */}
<div className={state ? s.fon : s.none } >
  </div>
      <dialog open = {state ? 'open' : ''} className={s.modal} >
        <h2>Это загаловок</h2>
         <p >
        What is Lorem Ipsum?

        </p>
        <Button customClass={s.btn} text='close' onClick={setState} />
      </dialog>

      </>

  );
};

export default ModalWindow;
