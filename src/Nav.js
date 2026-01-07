import React, {useState} from "react"
import Logo from './Images/Logo.svg'

const Nav = () => {
 
    const [menuOpen, SetMenuOpen] = useState(false);

    const toggleMenu = () => {
        SetMenuOpen(!menuOpen);
    }


return (
    <nav className={`navbar ${menuOpen ? 'open' : ""} `}>
        <a className='logo' href='/'>
        <img src={Logo} alt='Logo'/>
        </a>

        {/* nav-icon */}

        <div className='nav-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            
        </div>

       <ul className={`nav-list ${menuOpen ? 'visible' : ""}`}>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/">About</a></li>
            <li className='nav-item'><a href="/">Menu</a></li>
            <li className='nav-item'><a href="/">Reservations</a></li>
            <li className='nav-item'><a href="/">Order Online</a></li>
            <li className='nav-item'><a href="/">Login</a></li>
            
        </ul>
    </nav>
)
}
export default Nav;