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
                return <li   key={index}><a  href= {'#' + value}>{value}  </a> </li>
                
            })}

        </ul>
    )  
}


export default Menu;