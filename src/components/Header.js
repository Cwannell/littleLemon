import React from "react"
import { Link } from "react-router-dom";
import Bannerimg from "./Images/bannerimg.jpg"


const Header = () => {
return(
    <header className="header">
      <section>
        <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
                We are a family owned meditteranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Link to="/bookingPage">
            <button id="btn1"aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div className="banner-img">
            <img src={Bannerimg} alt="family restaurant"/>
        </div>
      </section>
    </header>
);
};

export default Header;
