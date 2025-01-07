import React from 'react'
import { Link,  } from 'react-scroll'
import './css/Navbar.css'
function Navbar() {
  return (
    <nav>
      <div className="company-name"><Link to='HeroSection'smooth={true} ><h1>Company Name</h1></Link></div>
      <div className="optoins">
        <ul>
          <li><Link to='HeroSection'smooth={true} >Home</Link></li>
          <li><Link to='company'smooth={true} >Company</Link></li>
          <li><Link to='pricing'smooth={true} >Pricing</Link></li>
          <li><Link to='footer'smooth={true} >Contact</Link></li>
        </ul>
      </div>
      <div className="nav-btn">
        {/* <h2>Login</h2> */}
      </div>
    </nav>
  )
}

export default Navbar
