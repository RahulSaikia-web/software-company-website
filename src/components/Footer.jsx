import React from 'react'
import './css/Footer.css'
function Footer() {
  return (
    <div id='footer' className='footer'>
      <div className="contact-box">
        <div className="sub-box">
        <h1>Company Name</h1>
            <h2>Subscribe for more updates</h2>
            <p>stay updated with our company</p>
            <input type="email" placeholder='Enter Email here... ' />
            <button>Subscribe</button>
        </div>
        <div className="contact-links">
            <h3>Contact us on : </h3>
            <ul>
                <li><a href="instagram.com">Instagram</a></li>
                <li><a href="facebook.com">Facebook</a></li>
                <li><a href="tweeter.com">Tweeter</a></li>
            </ul>
            <ol>
            <li>Website : <a href="#">companywebsite.com</a></li>
                <li>Mail : <a href="mailto:company@email.com">company@email.com</a> </li>
                <li>Contact Number : 1234567890</li>
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Footer
