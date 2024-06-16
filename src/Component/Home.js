import React from 'react'
import MainImg1 from '../Image/img 2.jpg'
import MainImg2 from '../Image/img 3.jpg'
import MainImg3 from '../Image/img 4.jpg'
import { Link } from 'react-router-dom'
import card1 from '../Image/T-shit.jpg'





export default function Home() {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="image carousel-item active">
                        <img style={{ height: "650px", width: "100%" }} src={MainImg1} />
                    </div>
                    <div className="image carousel-item active">
                        <img style={{ height: "650px", width: "100%" }} src={MainImg2} alt="Image" className="rounded-md " />
                    </div>
                    <div className="image carousel-item active">
                        <img style={{ height: "650px", width: "100%" }} src={MainImg3} alt="Image" className="rounded-md " />
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



             <div className='bg-dark'>
            <div className='d-flex justify-content-around  mt-5 pt-5 flex-wrap'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>  <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>



            </div>

            

            <div className='d-flex justify-content-around  mt-5 flex-wrap'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>  <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>



            </div>


            <div className='d-flex justify-content-around  mt-5 pb-5 flex-wrap'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
                </div>  <div className="card" style={{ width: '18rem' }}>
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">Some quick example text to build on the T-shirt and make up the bulk of the card's content.</p>
                        <Link href="#" className="btn btn-primary">Add To cart</Link>
                    </div>
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
