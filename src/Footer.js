  import React from "react"
  

  const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-list'>
        <h3>Doormat <br/>Navigation</h3>
      <ul >
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
      </div>
      <div className='footer-list'>
      <h3>Contact</h3>
      <ul >
        <li><a href="">Address</a></li>
        <li><a href="">Phone Number</a></li>
        <li><a href="">Email</a></li>
      </ul>
      </div>
      <div className='footer-list'>
      <h3>Social Media <br/>Links</h3>
      <ul >
        <li><a href="">Instagram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Github</a></li>

      </ul>
      </div>
    </footer>
  )
}
 export default Footer;