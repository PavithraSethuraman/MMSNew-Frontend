import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {

const load = ()=>{
    window.location.reload()
}

  return (
    <div className="body-wrapper font-cambria">    

    <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to='/'>  <a href="" onClick={load}>
                    <img  style={{width:"75px",height:"50px",marginBottom:"25px"}} src="assets/img/mms.png" alt="logo"/><span style={{fontSize:"50px"}}>MMS</span>
                </a></Link>
            </div>
            <div className="header-right-area d-flex justify-content-between">
                <div className="main-menu d-none d-xl-block me-xl-5">
                    <ul>
                        
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <Link to='/login'><a href="contact.html" className="theme-btn style-3 d-none d-sm-block">Login</a></Link>
                    <div className="d-inline-block ms-4 d-xl-none">
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger">
                                <i className="fal fa-bars"></i>
                            </div>
                           
                            <div className="mobile-nav">
                                <button type="button" className="close-nav">
                                    <i className="fal fa-times-circle"></i>
                                </button>
                                <nav className="sidebar-nav">
                                    <ul className="metismenu" id="mobile-menu">
                                       
                                       <Link to='/login'> <li><a href="">Login</a></li></Link>
                                    </ul>
                                </nav>
        
                                
                            </div>                            
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <section className="hero-wrapper hero-3">
        <div className="welcome-slide">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 pe-lg-0">
                        <div className="hero-content text-center text-md-start">
                            <h1>Digital Marketing</h1>
                            <h2><span>Agency</span></h2>
                            <p>Our promise as a contractor is to build community value into every projects while delivering professional</p>
                            <a href="#" className="theme-btn style-3 mt-35">Read More</a>

                            <div className="hero-funfact mt-5">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="hero-image">
                            <div className="big-img">
                                <img src="assets/img/home3/hero-big-img.jpg" alt=""/>
                                
                                <div className="element">
                                    <img src="assets/img/home3/3d-element.png" alt=""/>
                                    <img src="assets/img/home3/element-wave.png" alt=""/>
                                </div>
                            </div>
                            <div className="card-img">
                                <img src="assets/img/home3/card.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="play-icon d-none d-lg-block">
                <img src="assets/img/home3/play-icon.png" alt=""/>
            </div>
        </div>
    </section>

  

</div>
  )
}

export default Home