import React from 'react'
import '../Login/style.css'

const ForgotPassword = () => {
  return (
    <div id="top">
<div class="login-30 tab-box">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-12 bg-img">
                <div class="informeson">
                    <div class="logo">
                        <a href="login-30.html">
                        <h1 style={{color:"#ffc801",fontSize:"40px",fontWeight:"500"}}>MMS</h1>
                        </a>
                    </div>
                    <h2><span>We Make Spectacular</span></h2>
                    <div class="btn-section">
                        <a href="login-30.html" class="btn-theme-2">Login</a>
                        <a href="register-30.html" class="btn-theme-2">Register</a>
                    </div>
                </div>
                <div class="social-box">
                   
                </div>
                <div id="bg">
                    <canvas></canvas>
                    <canvas></canvas>
                    <canvas></canvas>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 form-section">
                <div class="login-inner-form">
                    <div class="details">
                        <div class="logo-2">
                            <a href="login-30.html">
                                <img src="assets/img/logos/logo-2.png" alt="logo"/>
                            </a>
                        </div>
                        <h1>Welcome!</h1>
                        <h3>Recover Your Password</h3>
                        <form action="#" method="GET">
                            <div class="form-group">
                                <label for="first_field" class="form-label float-start">Email address</label>
                                <input name="email" type="email" class="form-control" id="first_field" placeholder="Email Address" aria-label="Email Address"/>
                            </div>
                            <div class="form-group clearfix">
                                <button type="submit" class="btn btn-lg btn-primary btn-theme"><span>Send Me Email</span></button>
                            </div>
                        </form>
                        <p>Already a member? <a href="login-30.html">Login here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
  )
}

export default ForgotPassword