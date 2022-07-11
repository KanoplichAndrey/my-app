import React from 'react';




const Menu = () => {

    let menuItems = [
        'Home',
        'Features',
        'Pricing',
        'About Us',
    ]
    
   
 
    return (
        <ul>
 {/* <NavLink to= {'/' + value}>{value}  </NavLink> */}

            {menuItems.map((value, index) => {
                return <li   key={index}><NavLink to lable={value } /> </li>
                
            })}

        </ul>
    )
   
}


const NavLink = (props) => {

    const url  = '#' + props.lable 
    
    return (

         <a  href={url}  > {props.lable}</a>
    
    )

}


export default Menu;