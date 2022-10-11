import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { getArrayRenderCartBase } from '../../../servis/servis';
const RenderCart = () => {
//   const array = [
//     {
//       tarifplan: 'Starter',
//       prise: '$49',
//       prisePeriud: '/month',
//       nameSelect: 'Period',
//       Teammates: 'Teammates'
//     }, {
//       tarifplan: 'Premium',
//       prise: '$89',
//       prisePeriud: '/month',
//       nameSelect: 'Period',
//       Teammates: 'Teammates'
//     }, {
//       tarifplan: 'Unlimited',
//       prise: '$199',
//       prisePeriud: '/month',
//       nameSelect: 'Period',
//       Teammates: 'Teammates'
//     }

  //   ];
  const [arrayRenderCart, setArrayRenderCart] = useState([]);
  useEffect(() => {
    const servisarrayRenderCart = getArrayRenderCartBase();
    setArrayRenderCart(servisarrayRenderCart);
  }, []);
  return <>
    { arrayRenderCart.map((item, index) => {
      return <Cart {...item} key={index} />;
    })}

  </>;
};

export default RenderCart;
