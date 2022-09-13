import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';

const CreateDCM = () => {
    let showDate = new Date();
  let todayDate =showDate.getFullYear()+'-'+(showDate.getMonth()+1)+'-'+showDate.getDate();
  let timeNow = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds()



    const {user} = useContext(AuthContext)
    const [credentials, setCredentials] = useState({
        userId:user.details.userId,
        employeeName:user.details.userFname,
        customerName:undefined,
        contactPerson:undefined,
        email:undefined,
        mobile:undefined,
        inTime: undefined,
        outTime: undefined,
        needs: undefined,
        expectedDate: undefined,
        remarks: undefined,
        createDate:todayDate,
        createTime:timeNow,
      });
    
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        
        try {
          const res = await axios.post(`https://mms-application.herokuapp.com/api/dcm/${user.details.userId}`, credentials);
          
          navigate("/dashboard")
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
                Daily Customer Meet
              </legend>

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
                    required
                    placeholder="Enter Customer Name"
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
                    required
                    class="form-control touchspin-postfix"
                    placeholder="Enter Contact Person"
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
                    required
                    placeholder="Enter Customer's Mobile Number"
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
                    required
                    placeholder="Enter Customer's Email Id"
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
                    required
                    placeholder="Enter In-Time"
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
                    required
                    placeholder="Enter Customer Needs"
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
                    required
                    placeholder='Enter Expexted Date'
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
                    required
                    placeholder="Enter Remarks"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-form-label col-lg-3">
                  Out-Time <span class="text-danger">*</span>
                </label>
                <div class="col-lg-9">
                  <input
                    type="time"
                    id="outTime"
                    name="outTime"
                    class="form-control"
                    min="09:00" max="18:00"
                    onChange={handleChange}
                    required
                    placeholder="Enter Out-Time"
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

export default CreateDCM