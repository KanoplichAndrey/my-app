import React from 'react'
import Cart from '../Cart/Cart'

const RenderCart = () => {
  const array = [
    {
      tarifplan: 'Starter',
      prise: '$49',
      prisePeriud: '/month',
      nameSelect: 'Period',
      Teammates: 'Teammates'
    }, {
      tarifplan: 'Premium',
      prise: '$89',
      prisePeriud: '/month',
      nameSelect: 'Period',
      Teammates: 'Teammates'
    }, {
      tarifplan: 'Unlimited',
      prise: '$199',
      prisePeriud: '/month',
      nameSelect: 'Period',
      Teammates: 'Teammates'
    }

  ]
  const res1 = array.map(function (item, index) {
    return <Cart {...item} key={index} />
  })

  return <>
    {res1}

  </>
}

export default RenderCart
