import React from 'react'
import './IconePerson.css'

const commonClass = 'default-IconePerson'

function IconePerso ({ text = '', customClass = '' }) {
  return <div className={`${commonClass} ${customClass}`}>{text}</div>
}
// function IconePerso () {
//   return <div className='defaultIconePerson' ></div>
// }

export default IconePerso
