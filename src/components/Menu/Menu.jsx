import React from 'react';
// import { NavLink } from 'react-router-dom';





const Menu = () => {

    let menuItems = [
        'Home',
        'Features',
        'Pricing',
        'About Us',
    ]
    // const setActive = ({ isActive }) => ({ color: isActive ? '#27a759' : '' });
    return (
        <ul>

            {menuItems.map((value, index) => {
                return <li key={index}> <NavLink to lable={value} /></li>

            })}

        </ul>
    )
    // }
}

const NavLink = (props) => {

    const url = '/' + props.lable

    return (

        <a href={url}> {props.lable}</a>

    )

}


export default Menu;