import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const EmployeeProfileEdit = () => {
    let params = useParams();
  const {user} = useContext(AuthContext)
const [userData,setUserData] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let users = await axios.get(
          `https://mms-application.herokuapp.com/api/employee/${params.id}`
        );
        setUserData(users.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  const [credentials, setCredentials] = useState({});


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.put(`https://mms-application.herokuapp.com/api/employee/${params.id}`, credentials);
      navigate("/dashboard")
      window.location.reload()
    } catch (err) {
     
    }
  };

  return (
    <div className="content">
    <div className="card">
      <div className="card-body">
        <form className="form-validate-jquery" action="#">
          <fieldset className="mb-3">
            <legend className="text-uppercase font-size-sm font-weight-bold border-bottom text-center">
              Employee Profile Update
            </legend>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                Employee ID <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="text"
                  name="empId"
                  id="empId"
                  className="form-control"
                  onChange={handleChange}
                  required
                  value={userData?.empId}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                First Name <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="text"
                  name="empFname"
                  id="empFname"
                  className="form-control"
                  onChange={handleChange}
                  required
                  value={userData?.empFname}
                  
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                Middle Name <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="text"
                  name="empMname"
                  id="empMname"
                  onChange={handleChange}
                  required
                  className="form-control touchspin-postfix"
                  placeholder="Middle Name"
                  value={userData?.empMname}
                  
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                Last Name <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="text"
                  id="empLname"
                  name="empLname"
                  className="form-control"
                  onChange={handleChange}
                  required
                  value={userData?.empLname}
                  
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                Mobile No <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  onChange={handleChange}
                  required
                  value={userData?.mobile}
                  
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                Email <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  required
                  value={userData?.email}
                 
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-lg-3">
                PAN No <span className="text-danger">*</span>
              </label>
              <div className="col-lg-9">
                <input
                  type="text"
                  id="pan"
                  name="pan"
                  onChange={handleChange}
                  className="form-control"
                  required
                  value={userData.pan}
                  
                  
                />
              </div>
            </div>

          </fieldset>

          <div className="d-flex justify-content-end align-items-center">
            <button type="reset" className="btn btn-lg btn-light" id="reset">
              Reset <i className="icon-reload-alt ml-2"></i>
            </button>
            <button
              type="submit"
              className="btn btn-lg btn-primary ml-3"
              onClick={handleClick}
            >
              Submit <i className="icon-paperplane ml-2"></i>
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
  )
}

export default EmployeeProfileEdit