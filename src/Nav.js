import React from "react"
import Logo from './Images/Logo.svg'

const Nav = () => {
return (
    <nav className='navbar'>
        <a className='logo' href='/'><img src={Logo}/></a>
        <ul className='nav-list'>
            <li className='nav-item'><a href="">Home</a></li>
            <li className='nav-item'><a href="">About</a></li>
            <li className='nav-item'><a href="">Menu</a></li>
            <li className='nav-item'><a href="">Reservations</a></li>
            <li className='nav-item'><a href="">Order Online</a></li>
            <li className='nav-item'><a href="">Login</a></li>
            
        </ul>
    </nav>
)
}
export default Nav;