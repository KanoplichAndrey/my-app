import React from 'react'
import './Input.css'
const commonClass = 'defaul-Input'
const commonClass1 = 'defaul-button'
const commonClass2 = 'defaul-form'
const Input = ({ text = '', customClass = '' }) => {
  return <form className={`${commonClass2} ${customClass}`}>{text}
		<button type="submit" className={`${commonClass1} ${customClass}`} />{text}
		<input type="search" placeholder="  Search chat" className={`${commonClass} ${customClass}`} />{text}

	</form>
}

export default Input
