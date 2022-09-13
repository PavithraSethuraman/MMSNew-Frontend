import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/style.css";
import { useFormik } from "formik";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const load = () => {
    navigate("/");
    window.location.reload();
  };

  let showDate = new Date();
  let todayDate =showDate.getDate()+'-'+(showDate.getMonth()+1)+'-'+showDate.getFullYear();
  let timeNow = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds()

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  let formik = useFormik({
    initialValues: {
      userFname: "",
      userLname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      createDate:todayDate+","+timeNow,
    },
    validate: (values) => {
      const errors = {};
      if (!values.userFname) {
        errors.userFname = "First Name should not be blank";
      }
      if (!values.email) {
        errors.email = "Email should not be blank";
      }
      if (!values.mobile) {
        errors.mobile = "Mobile No should not be blank";
      }
      if (!values.password) {
        errors.password = "Password should not be blank";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password should not be blank";
      }
      if (!(values.password === values.confirmPassword)) {
        errors.confirmPassword = "Password and Confirm Password should be same";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "https://mms-application.herokuapp.com/api/auth/register",
          values
        );

        setMsg(res.data.message);
         setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (err) {
        setError(err.response.data.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    },
  });



  return (
    <div id="top">
      <div className="login-30 tab-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 bg-img">
              <div className="informeson">
                <div className="logo">
                  <a href="" onClick={load}>
                    <h1
                      style={{
                        color: "#ffc801",
                        fontSize: "40px",
                        fontWeight: "500",
                      }}
                    >
                      MMS
                    </h1>
                  </a>
                </div>
                <h2>
                  <span>We Make Spectacular</span>
                </h2>
                <div className="btn-section">
                <Link to='/login'> <a href="" className="btn-theme-3">Login</a></Link>
                       <Link to='/register'>  <a href="" className="btn-theme-2">Register</a></Link>
                </div>
              </div>
              <div className="social-box"></div>
              <div id="bg">
                <canvas></canvas>
                <canvas></canvas>
                <canvas></canvas>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 form-section">
              <div className="login-inner-form">
                <div className="details">
                  <div className="logo-2">
                    <a href="login-30.html">
                      <img src="assets/img/logos/logo-2.png" alt="logo" />
                    </a>
                  </div>
                  <h1>Welcome!</h1>
                  <h3>Create An Account</h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-6">
                      <label htmlFor="userFname" className="form-label float-start">
                        First Name
                      </label>
                      <input
                        name="userFname"
                        type="text"
                        className="form-control"
                        id="userFname"
                        placeholder="First Name"
                        aria-label="First Name"
                        onChange={formik.handleChange}
                          value={formik.values.userFname}
                          style={{
                            border: formik.errors.userFname
                              ? "1px solid red"
                              : "",}}
                        required
                      />
                      </div>
                      <div className="col-6">
                      <label htmlFor="userLname" className="form-label float-start">
                        Last Name
                      </label>
                      <input
                        name="userLname"
                        type="text"
                        className="form-control"
                        id="userLname"
                        placeholder="Last Name"
                        aria-label="Last Name"
                        onChange={formik.handleChange}
                          value={formik.values.userLname}
                          style={{
                            border: formik.errors.userLname
                              ? "1px solid red"
                              : "",
                          }}
                        required
                      />
                      </div>
                    </div>
                    <div className="form-group row">
                    <div className="col-6">
                      <label htmlFor="email" className="form-label float-start">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email ID"
                        aria-label="Email ID"
                        onChange={formik.handleChange}
                          value={formik.values.email}
                          style={{
                            border: formik.errors.email
                              ? "1px solid red"
                              : "",
                          }}
                        required
                      />
                      </div>
                      <div className="col-6">
                      <label htmlFor="mobile" className="form-label float-start">
                        Mobile No
                      </label>
                      <input
                        name="mobile"
                        type="tel"
                        className="form-control"
                        id="mobile"
                        placeholder="Mobile Number"
                        aria-label="Mobile Number"
                        onChange={formik.handleChange}
                          value={formik.values.mobile}
                          style={{
                            border: formik.errors.mobile
                              ? "1px solid red"
                              : "",
                          }}
                        required
                      />
                      </div>
                    </div>
                    <div className="form-group clearfix row">
                    <div className="col-6">
                      <label htmlFor="password" className="form-label float-start">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        aria-label="Password"
                        onChange={formik.handleChange}
                          value={formik.values.password}
                          style={{
                            border: formik.errors.password
                              ? "1px solid red"
                              : "",
                          }}
                        required
                      />
                      <span
                          style={{
                            color: "red",
                            fontSize: "10px",
                            marginLeft: "20px",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        >
                          {formik.errors.password}
                        </span>
                      </div>
                      <div className="col-6">
                      <label htmlFor="confirmPassword" className="form-label float-start">
                        Confirm Password
                      </label>
                      <input
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        aria-label="Confirm Password"
                        onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                          style={{
                            border: formik.errors.confirmPassword
                              ? "1px solid red"
                              : "",
                          }}
                        required
                      />
                      <span
                          style={{
                            color: "red",
                            fontSize: "10px",
                            marginLeft: "20px",
                            marginTop: "5px",
                            marginBottom: "5px",
                          }}
                        >
                          {formik.errors.confirmPassword}
                        </span>
                      </div>
                    </div>
                    <div className="form-group checkbox clearfix">
                      <div className="clearfix float-start">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberme"
                          />
                          <label className="form-check-label" htmlFor="rememberme">
                            I agree to the terms of service
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group clearfix">
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-theme"
                        disabled={Object.keys(formik.errors).length !== 0}
                      >
                        <span>Register</span>
                      </button>
                    </div>
                  </form>
                  <p>
                    Already a member? <a href="" onClick={()=>navigate('/login')}>Login here</a>
                  </p>
                  {error && <div className="error_msg" style={{background:"red",color:"white"}}>{error}</div>}
                      {msg && <div className="success_msg" style={{background:"green",color:"white"}}>{msg}</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
