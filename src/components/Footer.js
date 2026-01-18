  import React from "react"
  // import small_logo from "./Images./"

  const Footer = () => {
  return (
    <footer className='footer-container'>
      <section>
      <div className='footer-list'>
        {/* <img src={small_logo} alt=""/> */}
        <p>we are a family owned Medirterranian restaurant, focused on traditional recipes served with a modern twist. </p>
        </div>
        <div>
        <h3>Important Links</h3>
      <ul >
        <li><a href="/">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="./reservation">Reservations</a></li>
        <li><a href="">Order Online</a></li>
        <li><a href="">Login</a></li>
      </ul>
      </div>
      <div>
      <h3>Contact</h3>
      <ul >
        <li>Address: <br/> 123 Town Street, Chicago</li>
        <li>Phone: <br/>+00 123 456 789</li>
        <li>Email: <br/>little@lemon.com</li>
      </ul>
      </div>
      <div>
      <h3>Social Media Links</h3>
      <ul >
        <li><a href="">Instagram</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Github</a></li>
      </ul>
      </div>
      </section>
    </footer>
  )
}
 export default Footer;