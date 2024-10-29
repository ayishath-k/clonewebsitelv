import React from 'react'

function Footer() {
  return (
   <>
       <footer className="footer">
      <div className="footer-sections "  style={{fontSize:'15px'}}>
        <div className="footer-section " style={{fontSize:'15px'}}>
          <h6>Help</h6>
          <p>A Client Advisor is available at <a href="tel:18001039988">1800 103 9988</a>.</p>
          <p>You can also <a href="#">chat</a> or <a href="#">email us</a>.</p>
          <ul >
            <li style={{fontSize:'15px'}}><a href="#">FAQ's</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Product Care</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Stores</a></li>
          </ul>
        </div>
        <div className="footer-section" >
          <h6>Services</h6>
          <ul>
            <li style={{fontSize:'15px'}}><a href="#">Repairs</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Personalisation</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Art of Gifting</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Download our Apps</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>About Louis Vuitton</h6>
          <ul>
            <li style={{fontSize:'15px'}}><a href="#">Fashion Shows</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Arts & Culture</a></li>
            <li style={{fontSize:'15px'}}><a href="#">La Maison</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Sustainability</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Latest News</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Careers</a></li>
            <li style={{fontSize:'15px'}}><a href="#">Foundation Louis Vuitton</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Connect</h6>
          <p>Sign up for Louis Vuitton emails and receive the latest news from the Maison, including exclusive online pre-launches and new collections.</p>
          <p><a href="#">Follow Us</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Louis Vuitton India Retail Private Limited</p>
        <ul>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Legal & Privacy</a></li>
        </ul>
      </div>
    </footer>
   </>
  )
}

export default Footer