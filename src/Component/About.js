import React from 'react'
import About1 from '../Image/T-shit.jpg'
import About2 from '../Image/clothes 1.jpg'
import About3 from '../Image/clothes 2.jpg'
import About4 from '../Image/clothes 3.jpg'
import About5 from '../Image/clothes 5.jpg'
import About6 from '../Image/clothes 6.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
   <>
   
<div className="background-image">
  <div className="inner-back-text">
    <h1>ROCK  WORLD <br />
      <span>Creative &amp; Professional</span></h1>
    <p>
    Online Shopping Site for Fashion & Lifestyle in India. Buy Shoes, Clothing, Accessories and lifestyle products for women & men. Best Online Fashion Store Easy returns and exchanges
      </p>
    <div className="inner-back-btn">
    <button className='btn btn-warning'>Read More </button>
    </div>
  </div>
</div>


<div className="our-gallery">
  <h1>Product  <span>A</span> available </h1>
  <div className="main-gallery mt-5">
    <div className="inner-gallery">
      <img src={About1} alt />
    </div>
    <div className="inner-gallery">
      <img src={About2} alt />
    </div>
    <div className="inner-gallery">
      <img src={About3} alt />
    </div>
    <div className="inner-gallery">
      <img src={About4} alt />
    </div>
    <div className="inner-gallery">
      <img src={About5} alt />
    </div>
    <div className="inner-gallery">
      <img src={About6} alt />
    </div>
    
  </div>
</div>




<div id='futter' className="futter-content mt-5 bg-dark">
          <div className="futter-content-icon pt-4">
            <Link className="navbar-brand fs-1 text-danger" to="#">
              <i className="bi bi-bing me-2"></i> ROCK WORLD
            </Link>
          </div>
          <div className="all-futter-content d-flex justify-content-between text-light">
            <div className="futter-content-text">
              <ul>
                <h4>About Us</h4>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Successful fashion designer and entrepreneur Sarah Donofrio credits Our clothes.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
                <li>Trend Spotting: Regularly share posts highlighting the latest fashion trends.</li>
              </ul>
            </div>

            {/* Learn More */}
            <ul style={{ listStyle: "none" }} className="footer-list">
              <li>
                <p className="h4 footer-list-title text-light">Learn More</p>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">About Us</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Our Story</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Terms of Use</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">About Us</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Our Story</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Terms of Use</Link>
              </li>
              <li>
                <Link to="#" className="footer-link text-light">Privacy Policy</Link>
              </li>
            </ul>

            {/* Footer Comment */}
            <div className="futter-content-comment">
              <div className="mb-3">
                <label htmlFor="text" className="form-label">
                  <h4>Connect Me</h4>
                </label>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-geo-alt text-primary me-3"></i>
                  Rajasthan 125, Jagatpura, Jaipur
                </li>
                <li style={{ listStyle: "none" }}>
                  <i className="bi bi-envelope-at text-primary me-3"></i>
                  ROCKWORLD@gmail.com
                </li>
              </div>

              <div className='social-media'>
                <Link to="tel:+918426809853">
                  <i className="bi bi-whatsapp text-success"></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-instagram ms-2 text-danger"></i>
                </Link>
                <Link to="#">
                  <i className="bi bi-youtube ms-2 text-danger"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>





   
   </>
  )
}
