import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const AdminDCMEdit = () => {
    let params = useParams();
  const {user} = useContext(AuthContext)
const [userData,setUserData] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        let users = await axios.get(
          `https://mms-application.herokuapp.com/api/dcm/${params.id}`
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
      const res = await axios.put(`https://mms-application.herokuapp.com/api/dcm/${params.id}`, credentials);
      navigate("/")
      window.location.reload()
    } catch (err) {
     
    }
  };
  return (
    <div class="content">
    <div class="card">
      <div class="card-body">
        <form class="form-validate-jquery" action="#">
          <fieldset class="mb-3">
            <legend class="text-uppercase font-size-sm font-weight-bold border-bottom text-center">
            Edit Daily Customer Meet
            </legend>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Customer Name <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  name="dcmId"
                  id="dcmId"
                  class="form-control"
                  onChange={handleChange}
                 
                  value={userData?.dcmId}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Customer Name <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  class="form-control"
                  onChange={handleChange}
                  
                  value={userData?.userId}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Customer Name <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  name="customerName"
                  id="customerName"
                  class="form-control"
                  onChange={handleChange}
                  
                  value={userData?.customerName}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
              Contact Person <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  name="contactPerson"
                  id="contactPerson"
                  onChange={handleChange}
                  
                  class="form-control touchspin-postfix"
                  value={userData?.contactPerson}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Mobile No <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  class="form-control"
                  onChange={handleChange}
                  value={userData?.mobile}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Email <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  onChange={handleChange}
                  value={userData?.email}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                In-Time <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="time"
                  id="inTime"
                  name="inTime"
                  min="09:00" max="18:00"
                  onChange={handleChange}
                  class="form-control"
                  value={userData?.inTime}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Customer Need <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  id="needs"
                  name="needs"
                  class="form-control"
                  onChange={handleChange}
                  value={userData?.needs}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Expected Date <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="date"
                  id="expectedDate"
                  name="expectedDate"
                  class="form-control"
                  onChange={handleChange}
                  value={userData?.expectedDate}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Remarks <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  id="remarks"
                  name="remarks"
                  class="form-control"
                  onChange={handleChange}
                  value={userData.remarks}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-3">
                Out-Time <span class="text-danger">*</span>
              </label>
              <div class="col-lg-9">
                <input
                  type="text"
                  id="outTime"
                  name="outTime"
                  class="form-control"
                  min="09:00" max="18:00"
                  onChange={handleChange}
                  value={userData?.outTime}
                />
              </div>
            </div>
           
          </fieldset>

          <div class="d-flex justify-content-end align-items-center">
            <button type="reset" class="btn btn-lg btn-light" id="reset">
              Reset <i class="icon-reload-alt ml-2"></i>
            </button>
            <button type="submit" class="btn btn-lg btn-primary ml-3" onClick={handleClick}>
              Submit <i class="icon-paperplane ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AdminDCMEdit